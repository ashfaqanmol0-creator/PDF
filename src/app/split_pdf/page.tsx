import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FileUploader from "@/components/FileUploader";

export const metadata = {
  title: "Split PDF – Split PDF Files Online | iLovePDF",
  description: "Separate one page or a whole set for easy conversion into independent PDF files.",
};

export default function SplitPDFPage() {
  return (<><Header /><FileUploader toolTitle="Split PDF" toolDescription="Separate one page or a whole set for easy conversion into independent PDF files." toolColor="#EE6C4D" toolBgColor="#FEF0EC" acceptedTypes=".pdf" maxFiles={1} actionLabel="Split PDF" /><Footer /></>);
}
