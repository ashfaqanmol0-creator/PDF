import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FileUploader from "@/components/FileUploader";

export const metadata = { title: "Rotate PDF | iLovePDF" };
export default function RotatePDFPage() {
  return (<><Header /><FileUploader toolTitle="Rotate PDF" toolDescription="Rotate your PDFs the way you need them. Even rotate multiple PDFs at once!" toolColor="#ab6993" toolBgColor="#F5EDF5" acceptedTypes=".pdf" maxFiles={20} actionLabel="Rotate PDF" /><Footer /></>);
}
