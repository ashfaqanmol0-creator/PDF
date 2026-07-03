import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FileUploader from "@/components/FileUploader";

export const metadata = { title: "Add Watermark to PDF | iLovePDF" };
export default function WatermarkPage() {
  return (<><Header /><FileUploader toolTitle="Add watermark" toolDescription="Stamp an image or text over your PDF in seconds. Choose the typography, transparency and position." toolColor="#ab6993" toolBgColor="#F5EDF5" acceptedTypes=".pdf" maxFiles={1} actionLabel="Add Watermark" /><Footer /></>);
}
