import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FileUploader from "@/components/FileUploader";

export const metadata = { title: "Extract Pages from PDF | iLovePDF" };
export default function ExtractPagesPage() {
  return (<><Header /><FileUploader toolTitle="Extract pages" toolDescription="Select and extract pages from your PDF to create a new file." toolColor="#EE6C4D" toolBgColor="#FEF0EC" acceptedTypes=".pdf" maxFiles={1} actionLabel="Extract Pages" /><Footer /></>);
}
