import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FileUploader from "@/components/FileUploader";

export const metadata = { title: "HTML to PDF | iLovePDF" };
export default function HTMLToPDFPage() {
  return (<><Header /><FileUploader toolTitle="HTML to PDF" toolDescription="Convert webpages in HTML to PDF. Copy and paste the URL of the page you want to convert." toolColor="#5F83C6" toolBgColor="#EBF1FD" acceptedTypes=".html,.htm" maxFiles={5} actionLabel="Convert to PDF" /><Footer /></>);
}
