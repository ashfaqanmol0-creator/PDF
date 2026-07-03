import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FileUploader from "@/components/FileUploader";

export const metadata = {
  title: "PDF to Word – Convert PDF to DOC/DOCX | iLovePDF",
  description: "Easily convert your PDF files into easy to edit DOC and DOCX documents.",
};

export default function PDFToWordPage() {
  return (<><Header /><FileUploader toolTitle="PDF to Word" toolDescription="Easily convert your PDF files into easy to edit DOC and DOCX documents. The converted WORD document is almost 100% accurate." toolColor="#5F83C6" toolBgColor="#EBF1FD" acceptedTypes=".pdf" maxFiles={20} actionLabel="Convert to WORD" /><Footer /></>);
}
