import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FileUploader from "@/components/FileUploader";

export const metadata = { title: "Protect PDF | iLovePDF" };
export default function ProtectPDFPage() {
  return (<><Header /><FileUploader toolTitle="Protect PDF" toolDescription="Protect PDF files with a password. Encrypt PDF documents to prevent unauthorized access." toolColor="#F4A261" toolBgColor="#FEF4EC" acceptedTypes=".pdf" maxFiles={1} actionLabel="Protect PDF" /><Footer /></>);
}
