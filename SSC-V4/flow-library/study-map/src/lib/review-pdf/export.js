import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { meta } from "../course.js";
import { reviewBlocks } from "./content";
import {
  createPrintHost,
  paginate,
  PAGE,
  PX_PER_MM,
  columnWidth,
} from "./layout";

export async function reviewPdf(bookmarks) {
  const host = createPrintHost();
  try {
    await document.fonts.ready;
    const columns = paginate(host, reviewBlocks(bookmarks));
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
      compress: true,
    });
    pdf.setProperties({
      title: `${meta.module} · Bookmarked review notes`,
      subject: "Concepts and personal revision notes in saved order",
      creator: meta.brand,
    });
    const pages = Math.max(1, Math.ceil(columns.length / 2));
    for (let page = 0; page < pages; page++) {
      if (page) pdf.addPage("a4", "portrait");
      pdf.setTextColor(21, 56, 73);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(12);
      pdf.text(`${meta.module} | Final review`, PAGE.margin, 13);
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(8);
      pdf.setTextColor(88, 105, 120);
      pdf.text(
        `${bookmarks.length} bookmarked concepts | In saved order`,
        PAGE.margin,
        18,
      );
      pdf.setDrawColor(210, 223, 230);
      pdf.setLineWidth(0.2);
      pdf.line(12, 21, 198, 21);
      pdf.line(
        PAGE.width / 2,
        PAGE.top,
        PAGE.width / 2,
        PAGE.height - PAGE.bottom,
      );
      for (let side = 0; side < 2; side++) {
        const column = columns[page * 2 + side];
        if (!column) continue;
        const canvas = await html2canvas(column, {
          backgroundColor: "#ffffff",
          scale: 3,
          logging: false,
          scrollX: 0,
          scrollY: 0,
          windowWidth: 1024,
        });
        const x = PAGE.margin + side * (columnWidth + PAGE.gutter);
        pdf.addImage(
          canvas,
          "PNG",
          x,
          PAGE.top,
          columnWidth,
          canvas.height / (3 * PX_PER_MM),
          undefined,
          "FAST",
        );
        canvas.width = canvas.height = 0;
      }
      pdf.setFontSize(7);
      pdf.setTextColor(88, 105, 120);
      pdf.text(
        "Definitions · examples · your revision notes",
        PAGE.margin,
        288,
      );
      pdf.text(`${page + 1} / ${pages}`, 198, 288, { align: "right" });
      await new Promise((resolve) => setTimeout(resolve, 0));
    }
    return pdf.output("blob");
  } finally {
    host.remove();
  }
}
