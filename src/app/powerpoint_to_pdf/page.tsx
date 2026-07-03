import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FileUploader from "@/components/FileUploader";

export const metadata = { title: "PowerPoint to PDF | iLovePDF" };
export default function PPTToPDFPage() {
  return (<><Header /><FileUploader toolTitle="PowerPoint to PDF" toolDescription="Make PPT and PPTX slideshows easy to view by converting them to PDF." toolColor="#FF7651" toolBgColor="#FEF0EC" acceptedTypes=".ppt,.pptx" maxFiles={20} actionLabel="Convert to PDF" /><Footer /></>);
}
