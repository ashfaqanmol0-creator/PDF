import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FileUploader from "@/components/FileUploader";

export const metadata = { title: "Translate PDF | iLovePDF" };
export default function TranslatePDFPage() {
  return (<><Header /><FileUploader toolTitle="Translate PDF" toolDescription="Instantly translate PDF documents into other languages." toolColor="#6C63FF" toolBgColor="#F0EEFF" acceptedTypes=".pdf" maxFiles={1} actionLabel="Translate PDF" /><Footer /></>);
}
