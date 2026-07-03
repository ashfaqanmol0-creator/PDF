import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FileUploader from "@/components/FileUploader";

export const metadata = { title: "OCR PDF | iLovePDF" };
export default function OCRPDFPage() {
  return (<><Header /><FileUploader toolTitle="OCR PDF" toolDescription="Easily convert scanned PDF to searchable and selectable text." toolColor="#8FBC5D" toolBgColor="#F0F8E8" acceptedTypes=".pdf" maxFiles={1} actionLabel="Apply OCR" /><Footer /></>);
}
