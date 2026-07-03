import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FileUploader from "@/components/FileUploader";

export const metadata = { title: "Scan to PDF | iLovePDF" };
export default function ScanPDFPage() {
  return (<><Header /><FileUploader toolTitle="Scan to PDF" toolDescription="Capture document as PDF directly from your mobile camera." toolColor="#EE6C4D" toolBgColor="#FEF0EC" acceptedTypes=".jpg,.jpeg,.png,.heic" maxFiles={20} actionLabel="Convert to PDF" /><Footer /></>);
}
