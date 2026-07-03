import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FileUploader from "@/components/FileUploader";

export const metadata = { title: "Crop PDF | iLovePDF" };
export default function CropPDFPage() {
  return (<><Header /><FileUploader toolTitle="Crop PDF" toolDescription="Crop PDF pages. Trim PDF margins easily with custom cropping settings." toolColor="#ab6993" toolBgColor="#F5EDF5" acceptedTypes=".pdf" maxFiles={1} actionLabel="Crop PDF" /><Footer /></>);
}
