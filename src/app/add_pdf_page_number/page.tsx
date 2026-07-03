import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FileUploader from "@/components/FileUploader";

export const metadata = { title: "Add Page Numbers to PDF | iLovePDF" };
export default function AddPageNumbersPage() {
  return (<><Header /><FileUploader toolTitle="Add page numbers" toolDescription="Add page numbers into PDFs with ease. Choose your positions, dimensions and typography!" toolColor="#ab6993" toolBgColor="#F5EDF5" acceptedTypes=".pdf" maxFiles={1} actionLabel="Add Numbers" /><Footer /></>);
}
