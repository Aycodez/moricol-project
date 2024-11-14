"use client";

import React, { useState } from "react";
import { BiLoaderCircle, BiUpload } from "react-icons/bi";

interface FileAttachmentProps {
  title: string;
  onDownload?: () => void;
  downloadUrl?: string;
  acceptedFileTypes?: string;
  id?: string;
  caption?: string;
  onUpload?: (file: File, field?: any, setLoading?: (loading: boolean) => void) => void
  field?: string
  uploaded?: boolean
}

const FileInput: React.FC<FileAttachmentProps> = ({
  id,
  title,
  onUpload,
  acceptedFileTypes = "*",
  caption = "Upload all attachment",
  uploaded = false,
  field
}) => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && onUpload) {
      setFileName(file.name);
      onUpload(file, field, setLoading as (loading: boolean) => void);
    }
  };

  return (
    <div>
      <h3 className="text-grey-800 mb-2.5 inline-block font-medium">{title}</h3>

      <label className={`flex h-[104px] cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-primary-500 text-sm text-gray-500 ${uploaded ? 'bg-green-200' : 'bg-primary-50'}`}>
        <input
          id={id}
          type="file"
          className="hidden"
          onChange={handleFileChange}
          accept={acceptedFileTypes}
        />
        {loading ? <BiLoaderCircle className="mr-2 inline text-primary-500 animate-spin" size={20} /> : <BiUpload className="mr-2 inline text-primary-500" size={20} />}
        {caption}
        {fileName && (
          <p className="mt-2 text-sm text-gray-600">Uploaded: {fileName}</p>
        )}
      </label>
    </div>
  );
};

export default FileInput;

// {downloadUrl && (
//     <a
//       href={downloadUrl}
//       download
//       className="rounded bg-green-500 px-4 py-2 text-white transition hover:bg-green-600"
//       onClick={onDownload}
//     >
//       <BiDownload className="mr-2 inline" size={18} />
//       Download
//     </a>
//   )}
