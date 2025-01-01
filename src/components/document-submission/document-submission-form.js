"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Upload } from "lucide-react";

export function DocumentSubmissionForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSuccess(false);

    if (!firstName || !lastName || !file) {
      setError("Please fill out all fields and upload a document.");
      setIsSubmitting(false);
      return;
    }

    if (
      ![
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ].includes(file.type)
    ) {
      setError("Only .docx and .pdf files are allowed.");
      setIsSubmitting(false);
      return;
    }

    try {
      const base64File = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });

      const payload = {
        firstName,
        lastName,
        email: "mrm.leon93@gmail.com",
        message: "Document submission",
        file: {
          name: file.name,
          content: base64File.split(",")[1],
          type: file.type,
        },
      };

      const response = await fetch("/api/document-submission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit document.");
      }

      setSuccess(true);
      setFirstName("");
      setLastName("");
      setFile(null);
    } catch (err) {
      setError(err.message || "An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div>
            <Label>Upload Document</Label>
            <div className="flex items-center space-x-2">
              <label
                htmlFor="document"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded cursor-pointer flex items-center"
              >
                <Upload className="w-4 h-4 mr-2" />
                Choose File
              </label>
              <Input
                id="document"
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="hidden"
                required
              />
              <span>{file ? file.name : "No file chosen"}</span>
            </div>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && (
            <p className="text-green-500 text-sm">
              Document submitted successfully!
            </p>
          )}
          <Button
            type="submit"
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Submitting..."
            ) : (
              <>
                <Upload className="w-4 h-4 mr-2" />
                Submit Document
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
