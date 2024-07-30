import Quill from "quill";
import "quill/dist/quill.snow.css";
import { toolbarOptions } from "../../constants/writings";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const initializeEditor = () => {
  new Quill("#editor-container", {
    theme: "snow",
    modules: {
      toolbar: toolbarOptions,
    },
  });

  console.log("Quill editor initialized");
};

export async function convertToPdf() {
  console.log("Inside function convertToPdf!!!")
  const chapterTopic = (
    document.getElementById("chapter-topic") as HTMLInputElement
  ).value;
  const element = document.getElementById("editor-container");

  if (element) {
    const canvas = await html2canvas(element);

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    pdf.setFontSize(20);
    pdf.text(chapterTopic, 10, 20);

    const contentStartY = 30;

    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, contentStartY, pdfWidth, pdfHeight);

    // Save the generated PDF with a filename based on the chapter topic
    pdf.save(`${chapterTopic}.pdf`);

    console.log(`Pdf generated is : ${pdf}`)
  }
}
