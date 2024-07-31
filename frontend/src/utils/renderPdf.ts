// import 'pdfjs-dist/web/pdf_viewer.css';
// import 'pdfjs-dist/build/pdf';
// import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist/build/pdf';

// // Set the workerSrc to load the PDF.js worker
// GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.js`;

// const url = 'path-to-your-pdf-file.pdf';

// async function renderPDF(url: string) {
//   const pdfViewerContainer = document.getElementById('pdf-viewer')!;
//   const loadingTask = getDocument(url);

//   const pdf = await loadingTask.promise;
//   for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
//     const page = await pdf.getPage(pageNum);

//     const canvas = document.createElement('canvas');
//     canvas.className = 'pdf-page';
//     pdfViewerContainer.appendChild(canvas);

//     const viewport = page.getViewport({ scale: 1.5 });
//     canvas.height = viewport.height;
//     canvas.width = viewport.width;

//     const context = canvas.getContext('2d')!;
//     const renderContext = {
//       canvasContext: context,
//       viewport: viewport,
//     };

//     await page.render(renderContext).promise;
//   }
// }

// renderPDF(url);
