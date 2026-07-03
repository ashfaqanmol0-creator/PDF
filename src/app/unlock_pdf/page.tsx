import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FileUploader from "@/components/FileUploader";

export const metadata = { title: "Unlock PDF | iLovePDF" };
export default function UnlockPDFPage() {
  return (<><Header /><FileUploader toolTitle="Unlock PDF" toolDescription="Remove PDF password security, giving you the freedom to use your PDFs as you want." toolColor="#F4A261" toolBgColor="#FEF4EC" acceptedTypes=".pdf" maxFiles={1} actionLabel="Unlock PDF" /><Footer /></>);
}
