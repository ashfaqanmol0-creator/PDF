import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FileUploader from "@/components/FileUploader";

export const metadata = { title: "Redact PDF | iLovePDF" };
export default function RedactPDFPage() {
  return (<><Header /><FileUploader toolTitle="Redact PDF" toolDescription="Redact content by removing and erasing sensitive information from your PDF." toolColor="#F4A261" toolBgColor="#FEF4EC" acceptedTypes=".pdf" maxFiles={1} actionLabel="Redact PDF" /><Footer /></>);
}
