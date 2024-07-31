import { Response } from "express";
import { Request } from "../interfaces/auth.interface";
import * as ChapterService from "../services/chapter.services";
import path from "path";
import puppeteer from "puppeteer";
import { cloudinary } from "../config/cloudinary.config";
import fs from "fs";
import { title } from "process";

export async function addChapter(req: Request, res: Response) {
  const { chapterTopic, content, chapterNumber } = req.body;
  `Chapter number first in backend ${chapterNumber}`;
  const { storyId } = req.params; //repeated code
  const { body } = req;

  if (!content) {
    return res.status(400).send("No content provided.");
  }

  const html = `
    <html>
      <head>
        <title>${chapterTopic}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
          }
          img {
            max-width: 100%;
          }
        </style>
      </head>
      <body>
        <h1>${chapterTopic}</h1>
        ${content}
      </body>
    </html>
  `;

  const pdfPath = path.join(__dirname, "../tmp", `${Date.now()}.pdf`);

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "networkidle0" });
    await page.pdf({ path: pdfPath, format: "A4" });
    await browser.close();

    // Upload PDF to Cloudinary
    const result = await cloudinary.uploader.upload(pdfPath, {
      resource_type: "raw",
      folder: "pdf_uploads", // Optional: specify folder in Cloudinary
    });

    const chapterData = {
      ...body,
      title: chapterTopic,
      contentUrl: result.secure_url,
      number: chapterNumber,
    };

    const data = await ChapterService.addChapter(chapterData, storyId);

    fs.unlinkSync(pdfPath);

    res.json(body);
  } catch (error) {
    error;
    res.json(error);
  }
}
export async function getChapterByNumber(req: Request, res: Response) {
  const { storyId, number } = req.params;

  const data = await ChapterService.getChapterByNumber(
    parseInt(number),
    storyId
  );

  res.json(data);
}
export async function updateChapter(req: Request, res: Response) {
  const { body } = req;
  const { storyId, number } = req.params;

  const data = await ChapterService.updateChapter(
    body,
    parseInt(number),
    storyId
  );

  res.json();
}
export async function deleteChapter(req: Request, res: Response) {
  const { storyId, number } = req.params;
  `number for delete : ${number}`;
  const data = await ChapterService.deleteChapter(parseInt(number), storyId);

  res.json(data);
}

export async function countChaptersByStory(req: Request, res: Response) {
  ("Inside count chapters controller!");
  const { storyId, number } = req.params;
  const data = await ChapterService.countChaptersByStory(storyId);

  res.json(data);
}
