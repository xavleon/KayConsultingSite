import { DocumentSubmissionForm } from "@/components/document-submission/document-submission-form";

export const metadata = {
  title: "Document Submission | Kay Leon Business Solutions",
  description: "Submit your documents securely through our online portal.",
};

export default function DocumentSubmissionPage() {
  return (
    <main className="min-h-screen pt-16 bg-gray-50">
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-white">
            Document Submission
          </h1>
          <p className="text-xl text-center mb-12 text-white max-w-3xl mx-auto">
            Submit your documents securely through our online portal. Please
            fill out the form below and upload your file.
          </p>
          <DocumentSubmissionForm />
        </div>
      </section>
    </main>
  );
}
