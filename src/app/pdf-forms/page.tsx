import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FileUploader from "@/components/FileUploader";

export const metadata = { title: "PDF Forms | iLovePDF" };
export default function PDFFormsPage() {
  return (<><Header /><FileUploader toolTitle="PDF Forms" toolDescription="Create, fill and edit PDF forms. Import or export form data easily." toolColor="#ab6993" toolBgColor="#F5EDF5" acceptedTypes=".pdf" maxFiles={1} actionLabel="Open Form" /><Footer /></>);
}
