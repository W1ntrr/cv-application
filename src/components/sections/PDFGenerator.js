import html2pdf from "html2pdf.js";

export default function generatePDF() {
  const element = document.getElementById("pdf-content");

  const options = {
    margin: 0,
    filename: "resume.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };

  html2pdf().set(options).from(element).save();
}
