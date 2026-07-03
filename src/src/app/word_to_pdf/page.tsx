import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FileUploader from "@/components/FileUploader";

export const metadata = { title: "Word to PDF | iLovePDF" };
export default function WordToPDFPage() {
  return (<><Header /><FileUploader toolTitle="Word to PDF" toolDescription="Make DOC and DOCX files easy to read by converting them to PDF." toolColor="#5F83C6" toolBgColor="#EBF1FD" acceptedTypes=".doc,.docx" maxFiles={20} actionLabel="Convert to PDF" /><Footer /></>);
}
