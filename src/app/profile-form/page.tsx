"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import { ProfileData } from "../../types/Profile.types";
import { profileSchema } from "./profileSchema";
import { saveStudentProfile } from "../../lib/students";

// Zod schema for form validation

type ProfileFormData = z.infer<typeof profileSchema>;

export default function ProfileFormPage() {
  const [submittedData, setSubmittedData] = useState<ProfileData | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<{
    picture: string | null;
    resume: string | null;
  }>({ picture: null, resume: null });
  const [uploadedFiles, setUploadedFiles] = useState<{
    picture: File | null;
    resume: File | null;
  }>({ picture: null, resume: null });

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      experience: [{ company: "", role: "", summary: "", website: "" }],
      skillSets: [""],
      inspirations: [""],
      batch: "2026",
      socialLinks: { linkedIn: "", gitHub: "", website: "" },
      mentorBridgeExp: { company: "", role: "", summary: "", website: "" },
    },
  });

  // Watch form values for debugging
  const watchedValues = watch();
  console.log("Form values:", watchedValues);

  // Handle file selection
  const handleFileSelect = (file: File, type: "picture" | "resume") => {
    setUploadedFiles((prev) => ({
      ...prev,
      [type]: file,
    }));
    setUploadProgress((prev) => ({
      ...prev,
      [type]: null,
    }));
  };

  // Handle file removal
  const handleFileRemove = (type: "picture" | "resume") => {
    setUploadedFiles((prev) => ({
      ...prev,
      [type]: null,
    }));
    setUploadProgress((prev) => ({
      ...prev,
      [type]: null,
    }));
  };

  const {
    fields: experienceFields,
    append: appendExperience,
    remove: removeExperience,
  } = useFieldArray({
    control,
    name: "experience",
  });

  const {
    fields: skillFields,
    append: appendSkill,
    remove: removeSkill,
  } = useFieldArray({
    control,
    name: "skillSets",
  });

  const {
    fields: inspirationFields,
    append: appendInspiration,
    remove: removeInspiration,
  } = useFieldArray({
    control,
    name: "inspirations",
  });

  const uploadFile = async (
    file: File,
    id: string,
    type: "picture" | "resume"
  ): Promise<string> => {
    // Validate file size
    if (file.size > 2 * 1024 * 1024) {
      throw new Error("File size must be less than 2MB");
    }

    // Validate file type
    if (type === "picture") {
      const allowedImageTypes = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/gif",
        "image/webp",
      ];
      if (!allowedImageTypes.includes(file.type)) {
        throw new Error("Only JPEG, PNG, GIF, and WebP images are allowed");
      }
    } else if (type === "resume") {
      const allowedDocTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedDocTypes.includes(file.type)) {
        throw new Error("Only PDF, DOC, and DOCX files are allowed");
      }
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("id", id);
    formData.append("type", type);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Upload failed");
      }

      const result = await response.json();
      return result.url;
    } catch (error) {
      console.error("Upload error:", error);
      throw error;
    }
  };

  const onSubmit = async (data: ProfileFormData) => {
    setIsUploading(true);
    setUploadProgress({ picture: null, resume: null });

    try {
      let pictureUrl = data.picture;
      let resumeUrl = data.resumeLink;

      // Upload picture file if provided
      if (data.pictureFile && data.pictureFile.length > 0) {
        setUploadProgress((prev) => ({
          ...prev,
          picture: "Uploading picture...",
        }));
        try {
          const file = data.pictureFile[0];
          pictureUrl = await uploadFile(file, data.id, "picture");
          setUploadProgress((prev) => ({
            ...prev,
            picture: "Picture uploaded successfully!",
          }));
        } catch (error) {
          setUploadProgress((prev) => ({
            ...prev,
            picture: `Picture upload failed: ${
              error instanceof Error ? error.message : "Unknown error"
            }`,
          }));
          throw error;
        }
      }

      // Upload resume file if provided
      if (data.resumeFile && data.resumeFile.length > 0) {
        setUploadProgress((prev) => ({
          ...prev,
          resume: "Uploading resume...",
        }));
        try {
          const file = data.resumeFile[0];
          resumeUrl = await uploadFile(file, data.id, "resume");
          setUploadProgress((prev) => ({
            ...prev,
            resume: "Resume uploaded successfully!",
          }));
        } catch (error) {
          setUploadProgress((prev) => ({
            ...prev,
            resume: `Resume upload failed: ${
              error instanceof Error ? error.message : "Unknown error"
            }`,
          }));
          throw error;
        }
      }

      // Clean up empty strings and convert to ProfileData
      const cleanedData: ProfileData = {
        ...data,
        picture: pictureUrl || "",
        resumeLink: resumeUrl || undefined,
        experience: data.experience.map((exp) => ({
          ...exp,
          website: exp.website || undefined,
        })),
        mentorBridgeExp: {
          ...data.mentorBridgeExp,
          website: data.mentorBridgeExp.website || undefined,
        },
        socialLinks: {
          ...data.socialLinks,
          website: data.socialLinks.website || undefined,
        },
        company: data.company || undefined,
      };

      // Save to Supabase database
      setUploadProgress((prev) => ({
        ...prev,
        picture: "Saving to database...",
      }));

      try {
        const savedRecord = await saveStudentProfile(cleanedData);
        setSubmittedData(cleanedData);
        setUploadProgress((prev) => ({
          ...prev,
          picture: "Profile saved successfully!",
        }));

        console.log(
          "Form submitted with data:",
          JSON.stringify(cleanedData, null, 2)
        );
        console.log("Saved to database:", savedRecord);

        // Clear uploaded files state
        setUploadedFiles({ picture: null, resume: null });

        alert("Profile submitted successfully! Your data has been saved.");
      } catch (error) {
        setUploadProgress((prev) => ({
          ...prev,
          picture: `Database save failed: ${
            error instanceof Error ? error.message : "Unknown error"
          }`,
        }));
        throw error;
      }
    } catch (error) {
      console.error("Submission error:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      alert(`Failed to submit profile: ${errorMessage}`);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            MentorBridge Profile Information Form
          </h1>

          {/* Success Banner */}
          {(uploadProgress.picture?.includes("successfully") ||
            uploadProgress.resume?.includes("successfully")) && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 rounded-lg">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-green-700 font-medium">
                  Files uploaded successfully! Your files are ready to be saved
                  with your profile.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Basic Information */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
                Basic Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ID *
                  </label>
                  <input
                    {...register("id")}
                    className="w-50 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter unique ID"
                  />
                  {errors.id && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.id.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    {...register("name")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter email address"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Aspiring Role *
                  </label>
                  <input
                    {...register("role")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter current role"
                  />
                  {errors.role && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.role.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    {...register("company")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Batch * (YYYY)
                  </label>
                  <input
                    {...register("batch")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter batch year"
                  />
                  {errors.batch && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.batch.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Profile Picture *
                </label>

                {/* File Preview Section */}
                {uploadedFiles.picture && (
                  <div className="mb-4 p-4 border border-green-200 rounded-lg bg-green-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 relative">
                          <Image
                            src={URL.createObjectURL(uploadedFiles.picture)}
                            alt="Preview"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {uploadedFiles.picture.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {(uploadedFiles.picture.size / 1024 / 1024).toFixed(
                              2
                            )}{" "}
                            MB
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleFileRemove("picture")}
                        className="p-2 text-red-500 hover:bg-red-100 rounded-full transition-colors"
                        title="Remove file"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}

                {/* Upload Area */}
                <div className="relative">
                  <input
                    {...register("pictureFile")}
                    type="file"
                    accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    id="picture-upload"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        handleFileSelect(file, "picture");
                      }
                    }}
                  />
                  <label
                    htmlFor="picture-upload"
                    className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
                      uploadedFiles.picture
                        ? "border-green-300 bg-green-50 hover:bg-green-100"
                        : "border-gray-300 bg-gray-50 hover:bg-gray-100 hover:border-gray-400"
                    }`}
                  >
                    {uploadedFiles.picture ? (
                      <>
                        <svg
                          className="w-8 h-8 text-green-500 mb-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="text-sm text-green-600 font-medium">
                          File selected! Click to change
                        </p>
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-8 h-8 text-gray-400 mb-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <p className="text-sm text-gray-500">
                          <span className="font-medium text-[#d53f8c]">
                            Click to upload
                          </span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          PNG, JPG, GIF up to 2MB
                        </p>
                      </>
                    )}
                  </label>
                </div>

                {/* Error Messages */}
                {errors.pictureFile && (
                  <p className="text-red-500 text-sm mt-2">
                    {String(errors.pictureFile.message || errors.pictureFile)}
                  </p>
                )}

                {/* Upload Progress */}
                {uploadProgress.picture && (
                  <p
                    className={`text-sm mt-2 ${
                      uploadProgress.picture.includes("failed") ||
                      uploadProgress.picture.includes("error")
                        ? "text-red-600"
                        : "text-blue-600"
                    }`}
                  >
                    {uploadProgress.picture}
                  </p>
                )}

                <p className="text-gray-500 text-sm mt-2">
                  File will be uploaded as: [your-id].[extension]
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Summary *
                </label>
                <textarea
                  {...register("summary")}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter professional summary"
                />
                {errors.summary && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.summary.message}
                  </p>
                )}
              </div>
            </div>

            {/* Experience Section */}
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
                  Work Experience
                </h2>
                <button
                  type="button"
                  onClick={() =>
                    appendExperience({
                      company: "",
                      role: "",
                      summary: "",
                      website: "",
                    })
                  }
                  className="px-4 py-2 bg-[#d53f8c] text-white rounded-md hover:bg-[#b83280] transition-colors"
                >
                  + Add
                </button>
              </div>

              {experienceFields.map((field, index) => (
                <div
                  key={field.id}
                  className="border border-gray-200 rounded-lg p-6 space-y-4"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-gray-700">
                      Experience {index + 1}
                    </h3>
                    {experienceFields.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeExperience(index)}
                        className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                        title="Remove experience"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company *
                      </label>
                      <input
                        {...register(`experience.${index}.company`)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter company name"
                      />
                      {errors.experience?.[index]?.company && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.experience[index]?.company?.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Role *
                      </label>
                      <input
                        {...register(`experience.${index}.role`)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter role"
                      />
                      {errors.experience?.[index]?.role && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.experience[index]?.role?.message}
                        </p>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Website
                      </label>
                      <input
                        {...register(`experience.${index}.website`)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter website URL"
                      />
                      {errors.experience?.[index]?.website && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.experience[index]?.website?.message}
                        </p>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Summary *
                      </label>
                      <textarea
                        {...register(`experience.${index}.summary`)}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter experience summary"
                      />
                      {errors.experience?.[index]?.summary && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.experience[index]?.summary?.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* MentorBridge Experience */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
                MentorBridge Experience
              </h2>

              <div className="border border-gray-200 rounded-lg p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company *
                    </label>
                    <input
                      {...register("mentorBridgeExp.company")}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter company name"
                    />
                    {errors.mentorBridgeExp?.company && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.mentorBridgeExp.company.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Role *
                    </label>
                    <input
                      {...register("mentorBridgeExp.role")}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter role"
                    />
                    {errors.mentorBridgeExp?.role && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.mentorBridgeExp.role.message}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Website
                    </label>
                    <input
                      {...register("mentorBridgeExp.website")}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter website URL"
                    />
                    {errors.mentorBridgeExp?.website && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.mentorBridgeExp.website.message}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Summary *
                    </label>
                    <textarea
                      {...register("mentorBridgeExp.summary")}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter MentorBridge experience summary"
                    />
                    {errors.mentorBridgeExp?.summary && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.mentorBridgeExp.summary.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
                  Skills
                </h2>
                <button
                  type="button"
                  onClick={() => appendSkill("")}
                  className="px-4 py-2 bg-[#d53f8c] text-white rounded-md hover:bg-[#b83280] transition-colors"
                >
                  + Add
                </button>
              </div>

              <div className="space-y-4">
                {skillFields.map((field, index) => (
                  <div key={field.id} className="flex items-center space-x-4">
                    <input
                      {...register(`skillSets.${index}`)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter skill"
                    />
                    {skillFields.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeSkill(index)}
                        className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                        title="Remove skill"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                ))}
                {errors.skillSets && (
                  <p className="text-red-500 text-sm">
                    {errors.skillSets.message}
                  </p>
                )}
              </div>
            </div>

            {/* Inspirations Section */}
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
                  Inspirations
                </h2>
                <button
                  type="button"
                  onClick={() => appendInspiration("")}
                  className="px-4 py-2 bg-[#d53f8c] text-white rounded-md hover:bg-[#b83280] transition-colors"
                >
                  + Add
                </button>
              </div>

              <div className="space-y-4">
                {inspirationFields.map((field, index) => (
                  <div key={field.id} className="flex items-center space-x-4">
                    <input
                      {...register(`inspirations.${index}`)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter inspiration"
                    />
                    {inspirationFields.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeInspiration(index)}
                        className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                        title="Remove inspiration"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                ))}
                {errors.inspirations && (
                  <p className="text-red-500 text-sm">
                    {errors.inspirations.message}
                  </p>
                )}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
                Social Links
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    LinkedIn URL *
                  </label>
                  <input
                    {...register("socialLinks.linkedIn")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter LinkedIn URL"
                  />
                  {errors.socialLinks?.linkedIn && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.socialLinks.linkedIn.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    GitHub URL *
                  </label>
                  <input
                    {...register("socialLinks.gitHub")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter GitHub URL"
                  />
                  {errors.socialLinks?.gitHub && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.socialLinks.gitHub.message}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Personal Website
                  </label>
                  <input
                    {...register("socialLinks.website")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter personal website URL"
                  />
                  {errors.socialLinks?.website && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.socialLinks.website.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Resume Link */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
                Additional Information
              </h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Resume File
                </label>

                {/* File Preview Section */}
                {uploadedFiles.resume && (
                  <div className="mb-4 p-4 border border-green-200 rounded-lg bg-green-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {uploadedFiles.resume.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {(uploadedFiles.resume.size / 1024 / 1024).toFixed(
                              2
                            )}{" "}
                            MB
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleFileRemove("resume")}
                        className="p-2 text-red-500 hover:bg-red-100 rounded-full transition-colors"
                        title="Remove file"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}

                {/* Upload Area */}
                <div className="relative">
                  <input
                    {...register("resumeFile")}
                    type="file"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    id="resume-upload"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        handleFileSelect(file, "resume");
                      }
                    }}
                  />
                  <label
                    htmlFor="resume-upload"
                    className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
                      uploadedFiles.resume
                        ? "border-green-300 bg-green-50 hover:bg-green-100"
                        : "border-gray-300 bg-gray-50 hover:bg-gray-100 hover:border-gray-400"
                    }`}
                  >
                    {uploadedFiles.resume ? (
                      <>
                        <svg
                          className="w-8 h-8 text-green-500 mb-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="text-sm text-green-600 font-medium">
                          File selected! Click to change
                        </p>
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-8 h-8 text-gray-400 mb-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        <p className="text-sm text-gray-500">
                          <span className="font-medium text-[#d53f8c]">
                            Click to upload
                          </span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          PDF, DOC, DOCX up to 2MB
                        </p>
                      </>
                    )}
                  </label>
                </div>

                {/* Error Messages */}
                {errors.resumeFile && (
                  <p className="text-red-500 text-sm mt-2">
                    {String(errors.resumeFile.message || errors.resumeFile)}
                  </p>
                )}

                {/* Upload Progress */}
                {uploadProgress.resume && (
                  <p
                    className={`text-sm mt-2 ${
                      uploadProgress.resume.includes("failed") ||
                      uploadProgress.resume.includes("error")
                        ? "text-red-600"
                        : "text-blue-600"
                    }`}
                  >
                    {uploadProgress.resume}
                  </p>
                )}

                <p className="text-gray-500 text-sm mt-2">
                  File will be uploaded as: [your-id].[extension] (PDF, DOC,
                  DOCX supported)
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isUploading}
                className={`px-8 py-3 font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 ${
                  isUploading
                    ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                    : "bg-green-500 text-white hover:bg-green-600 focus:ring-green-500"
                }`}
              >
                {isUploading ? "Uploading Files..." : "Submit Profile"}
              </button>
            </div>
          </form>

          {/* Display Submitted Data */}
          {submittedData && (
            <div className="mt-8 p-6 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Submitted Data (JSON):
              </h3>
              <pre className="bg-white p-4 rounded border overflow-auto text-sm">
                {JSON.stringify(submittedData, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
