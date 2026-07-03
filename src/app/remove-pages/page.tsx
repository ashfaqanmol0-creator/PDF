import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FileUploader from "@/components/FileUploader";

export const metadata = { title: "Remove Pages from PDF | iLovePDF" };
export default function RemovePagesPage() {
  return (<><Header /><FileUploader toolTitle="Remove pages" toolDescription="Remove one or multiple pages from a PDF document." toolColor="#EE6C4D" toolBgColor="#FEF0EC" acceptedTypes=".pdf" maxFiles={1} actionLabel="Remove Pages" /><Footer /></>);
}
