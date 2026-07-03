import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FileUploader from "@/components/FileUploader";

export const metadata = { title: "Compare PDF | iLovePDF" };
export default function ComparePDFPage() {
  return (<><Header /><FileUploader toolTitle="Compare PDF" toolDescription="Show a word-by-word comparison of two PDF documents." toolColor="#F4A261" toolBgColor="#FEF4EC" acceptedTypes=".pdf" maxFiles={2} actionLabel="Compare PDF" /><Footer /></>);
}
