import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FileUploader from "@/components/FileUploader";

export const metadata = { title: "PDF to Excel | iLovePDF" };
export default function PDFToExcelPage() {
  return (<><Header /><FileUploader toolTitle="PDF to Excel" toolDescription="Pull data straight from PDFs into Excel spreadsheets in a few short seconds." toolColor="#5EA162" toolBgColor="#F0F8E8" acceptedTypes=".pdf" maxFiles={20} actionLabel="Convert to Excel" /><Footer /></>);
}
