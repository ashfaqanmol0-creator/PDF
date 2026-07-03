import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FileUploader from "@/components/FileUploader";

export const metadata = { title: "PDF to JPG | iLovePDF" };
export default function PDFToJPGPage() {
  return (<><Header /><FileUploader toolTitle="PDF to JPG" toolDescription="Convert each PDF page into a JPG or extract all images from a PDF." toolColor="#5F83C6" toolBgColor="#EBF1FD" acceptedTypes=".pdf" maxFiles={20} actionLabel="Convert to JPG" /><Footer /></>);
}
