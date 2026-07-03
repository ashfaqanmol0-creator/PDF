import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FileUploader from "@/components/FileUploader";

export const metadata = {
  title: "Compress PDF – Reduce PDF File Size Online | iLovePDF",
  description: "Reduce file size while optimizing for maximal PDF quality. Free online PDF compressor.",
};

export default function CompressPDFPage() {
  return (<><Header /><FileUploader toolTitle="Compress PDF" toolDescription="Reduce file size while optimizing for maximal PDF quality." toolColor="#8FBC5D" toolBgColor="#F0F8E8" acceptedTypes=".pdf" maxFiles={20} actionLabel="Compress PDF" /><Footer /></>);
}
