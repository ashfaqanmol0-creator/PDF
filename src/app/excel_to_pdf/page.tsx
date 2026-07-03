import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FileUploader from "@/components/FileUploader";

export const metadata = { title: "Excel to PDF | iLovePDF" };
export default function ExcelToPDFPage() {
  return (<><Header /><FileUploader toolTitle="Excel to PDF" toolDescription="Make EXCEL spreadsheets easy to read by converting them to PDF." toolColor="#5EA162" toolBgColor="#F0F8E8" acceptedTypes=".xls,.xlsx,.csv" maxFiles={20} actionLabel="Convert to PDF" /><Footer /></>);
}
