import { DocumentSubmissionForm } from "@/components/document-submission/document-submission-form";

export const metadata = {
  title: "Document Submission",
  description: "Submit your documents securely through our online portal.",
};

export default function DocumentSubmissionPage() {
  return (
    <main className="min-h-screen bg-paper pb-28 pt-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <header className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
            Documents
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Send a document
          </h1>
          <p className="mt-4 text-lg leading-8 text-stone-600">
            PDF or Word files only. Add your name, attach the file, and I will
            receive it by email.
          </p>
        </header>
        <div className="mt-10 max-w-xl">
          <DocumentSubmissionForm />
        </div>
      </div>
    </main>
  );
}
