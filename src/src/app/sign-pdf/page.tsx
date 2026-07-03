import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FileUploader from "@/components/FileUploader";

export const metadata = { title: "Sign PDF | iLovePDF" };
export default function SignPDFPage() {
  return (<><Header /><FileUploader toolTitle="Sign PDF" toolDescription="Sign yourself or request electronic signatures from others." toolColor="#F4A261" toolBgColor="#FEF4EC" acceptedTypes=".pdf" maxFiles={1} actionLabel="Sign PDF" /><Footer /></>);
}
