import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FileUploader from "@/components/FileUploader";

export const metadata = { title: "PDF to PowerPoint | iLovePDF" };
export default function PDFToPPTPage() {
  return (<><Header /><FileUploader toolTitle="PDF to PowerPoint" toolDescription="Turn your PDF files into easy to edit PPT and PPTX slideshows." toolColor="#FF7651" toolBgColor="#FEF0EC" acceptedTypes=".pdf" maxFiles={20} actionLabel="Convert to PPT" /><Footer /></>);
}
