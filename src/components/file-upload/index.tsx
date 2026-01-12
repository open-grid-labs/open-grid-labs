import { useState, useId, type DragEvent, type ChangeEvent } from "react";

interface FileUploadProps {
  file?: File | null;
  onChange?: (file: File | null) => void;
  label?: string;
}

export default function FileUpload({ file: externalFile, onChange, label }: FileUploadProps) {
  const [internalFile, setInternalFile] = useState<File | null>(null);
  const inputId = useId();
  
  // Use external file if provided, otherwise use internal state
  const file = externalFile !== undefined ? externalFile : internalFile;
  const setFile = (newFile: File | null) => {
    if (onChange) {
      onChange(newFile);
    } else {
      setInternalFile(newFile);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleClick = () => {
    document.getElementById(inputId)?.click();
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFile(null);
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <h2 className="text-foreground font-semibold text-lg md:text-xl">{label}</h2>
      )}
      <div
        className="flex flex-col items-center justify-center w-full h-48 bg-foreground/5 text-foreground border border-dashed border-border rounded-xl cursor-pointer hover:bg-foreground/10 transition-colors"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onClick={handleClick}
      >
        <div className="flex flex-col items-center justify-center text-center pt-5 pb-6 px-4">
          <svg
            className="w-8 h-8 mb-4 text-muted-foreground"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 5v9m-5 0H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2M8 9l4-5 4 5m1 8h.01"
            />
          </svg>

          {file ? (
            <div className="flex flex-col items-center gap-2">
              <p className="font-semibold text-foreground">{file.name}</p>
              <p className="text-xs text-muted-foreground">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
              <button
                type="button"
                onClick={handleRemove}
                className="inline-flex items-center text-red-500 hover:text-red-700 font-medium text-sm transition-colors"
              >
                Remove file
              </button>
            </div>
          ) : (
            <>
              <p className="mb-2 text-sm text-muted-foreground">Drag & drop a file here or click to browse</p>
              <p className="text-xs text-muted-foreground mb-4">
                All file types supported • Max size: <span className="font-semibold">30MB</span>
              </p>
              <button
                type="button"
                onClick={handleClick}
                className="inline-flex items-center bg-foreground text-background hover:bg-foreground/85 font-medium rounded-lg px-4 py-2 text-sm transition-colors"
              >
                <svg
                  className="w-4 h-4 me-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M12 5v14m-7-7h14"
                  />
                </svg>
                Browse file
              </button>
            </>
          )}
        </div>
      </div>

      <input
        id={inputId}
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
}
