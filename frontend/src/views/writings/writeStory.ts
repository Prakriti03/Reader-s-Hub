import Quill from "quill";
import "quill/dist/quill.snow.css";
import { toolbarOptions } from "../../constants/writings";
import { addChapter } from "../../services/chapters.services";
import { navigateTo } from "../../scripts/eventHandlers/auth.eventhandler";

let quill: Quill;

export const initializeEditor = () => {
  quill = new Quill("#editor-container", {
    theme: "snow",
    modules: {
      toolbar: toolbarOptions,
    },
  });
};

export async function saveContent(storyId: string, chapterNumber: number) {
  const chapterTopic = (
    document.getElementById("chapter-topic") as HTMLInputElement
  ).value;
  const content = quill.root.innerHTML;

  const payload = {
    chapterTopic: chapterTopic,
    content: content,
    storyId: storyId,
    chapterNumber: chapterNumber,
  };


  try {
    const response = await addChapter(payload, storyId, chapterNumber);
    if(response.chapterTopic){
      alert(`Chapter ${response.chapterTopic} created`);
      navigateTo(`/stories/${storyId}/chapter`)
    }
    else{

      alert(response)
    }
  } catch (error) {
    alert(error);
  }
}

// export async function convertToPdf() {
//   const chapterTopic = (
//     document.getElementById("chapter-topic") as HTMLInputElement
//   ).value;
//   const element = document.getElementById("editor-container");
//   const content = quill.root.innerHTML;

// if (element) {
//   const canvas = await html2canvas(element);

//   const imgData = canvas.toDataURL("image/png");

//   const pdf = new jsPDF("p", "mm", "a4");

//   pdf.setFontSize(20);
//   pdf.text(chapterTopic, 10, 20);

//   const contentStartY = 30;

//   const imgProps = pdf.getImageProperties(imgData);
//   const pdfWidth = pdf.internal.pageSize.getWidth();
//   const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

//   pdf.addImage(imgData, "PNG", 0, contentStartY, pdfWidth, pdfHeight);

//   // Save the generated PDF with a filename based on the chapter topic
//   pdf.save(`${chapterTopic}.pdf`);

//    (`Pdf generated is : ${pdf}`)
// }

//   const payload = {
//     chapterTopic: chapterTopic,
//     content: content,
//   };
// }
