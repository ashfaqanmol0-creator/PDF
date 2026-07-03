import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FileUploader from "@/components/FileUploader";

export const metadata = { title: "AI PDF Summarizer | iLovePDF" };
export default function SummarizePDFPage() {
  return (<><Header /><FileUploader toolTitle="AI Summarizer" toolDescription="Get an AI-powered summary of any PDF document in seconds." toolColor="#6C63FF" toolBgColor="#F0EEFF" acceptedTypes=".pdf" maxFiles={1} actionLabel="Summarize PDF" /><Footer /></>);
}
