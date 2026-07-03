import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FileUploader from "@/components/FileUploader";

export const metadata = { title: "PDF to PDF/A | iLovePDF" };
export default function PDFToPDFAPage() {
  return (<><Header /><FileUploader toolTitle="PDF to PDF/A" toolDescription="Transform your PDF to PDF/A, the ISO-standardized version for long-term archiving." toolColor="#5F83C6" toolBgColor="#EBF1FD" acceptedTypes=".pdf" maxFiles={20} actionLabel="Convert to PDF/A" /><Footer /></>);
}
