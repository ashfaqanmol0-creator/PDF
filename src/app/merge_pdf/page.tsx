import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FileUploader from "@/components/FileUploader";

export const metadata = {
  title: "Merge PDF – Combine PDF Files Online | iLovePDF",
  description: "Merge multiple PDF files into one. Combine PDFs in the order you want with the easiest PDF merger available. Free and easy to use.",
};

export default function MergePDFPage() {
  return (
    <>
      <Header />
      <FileUploader
        toolTitle="Merge PDF"
        toolDescription="Combine PDFs in the order you want with the easiest PDF merger available."
        toolColor="#EE6C4D"
        toolBgColor="#FEF0EC"
        acceptedTypes=".pdf"
        maxFiles={20}
        actionLabel="Merge PDF"
      />
      <Footer />
    </>
  );
}
