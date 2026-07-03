import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FileUploader from "@/components/FileUploader";

export const metadata = { title: "JPG to PDF | iLovePDF" };
export default function JPGToPDFPage() {
  return (<><Header /><FileUploader toolTitle="JPG to PDF" toolDescription="Convert JPG, PNG, BMP, GIF, and TIFF images to PDF." toolColor="#5F83C6" toolBgColor="#EBF1FD" acceptedTypes=".jpg,.jpeg,.png,.bmp,.gif,.tiff,.webp" maxFiles={20} actionLabel="Convert to PDF" /><Footer /></>);
}
