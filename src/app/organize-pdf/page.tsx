import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FileUploader from "@/components/FileUploader";

export const metadata = { title: "Organize PDF | iLovePDF" };
export default function OrganizePDFPage() {
  return (<><Header /><FileUploader toolTitle="Organize PDF" toolDescription="Sort, add and delete PDF pages. Also rotate and move pages." toolColor="#EE6C4D" toolBgColor="#FEF0EC" acceptedTypes=".pdf" maxFiles={1} actionLabel="Organize PDF" /><Footer /></>);
}
