import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FileUploader from "@/components/FileUploader";

export const metadata = { title: "Repair PDF | iLovePDF" };
export default function RepairPDFPage() {
  return (<><Header /><FileUploader toolTitle="Repair PDF" toolDescription="Repair a damaged PDF and recover data from corrupt PDF." toolColor="#8FBC5D" toolBgColor="#F0F8E8" acceptedTypes=".pdf" maxFiles={1} actionLabel="Repair PDF" /><Footer /></>);
}
