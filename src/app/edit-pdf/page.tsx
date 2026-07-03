import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FileUploader from "@/components/FileUploader";

export const metadata = { title: "Edit PDF | iLovePDF" };
export default function EditPDFPage() {
  return (<><Header /><FileUploader toolTitle="Edit PDF" toolDescription="Add text, images, shapes or freehand annotations to a PDF document." toolColor="#ab6993" toolBgColor="#F5EDF5" acceptedTypes=".pdf" maxFiles={1} actionLabel="Edit PDF" /><Footer /></>);
}
