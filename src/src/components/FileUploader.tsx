"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";

interface UploadedFile {
  id: string;
  file: File;
  preview?: string;
  size: string;
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / (1024 * 1024)).toFixed(1) + " MB";
}

interface FileUploaderProps {
  toolTitle: string;
  toolDescription: string;
  toolColor: string;
  toolBgColor: string;
  acceptedTypes?: string;
  maxFiles?: number;
  actionLabel?: string;
  onProcess?: (files: UploadedFile[]) => void;
}

export default function FileUploader({
  toolTitle,
  toolDescription,
  toolColor,
  toolBgColor,
  acceptedTypes = ".pdf",
  maxFiles = 20,
  actionLabel = "Process",
  onProcess,
}: FileUploaderProps) {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const addFiles = useCallback((newFiles: FileList | File[]) => {
    const arr = Array.from(newFiles);
    const mapped: UploadedFile[] = arr.map((f) => ({
      id: Math.random().toString(36).slice(2),
      file: f,
      size: formatFileSize(f.size),
    }));
    setFiles((prev) => [...prev, ...mapped].slice(0, maxFiles));
  }, [maxFiles]);

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const onDragLeave = () => setIsDragging(false);
  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files.length) addFiles(e.dataTransfer.files);
  };

  const removeFile = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const handleProcess = async () => {
    setIsProcessing(true);
    setProgress(0);
    // Simulate processing
    for (let i = 0; i <= 100; i += 5) {
      await new Promise((r) => setTimeout(r, 60));
      setProgress(i);
    }
    setIsProcessing(false);
    setIsDone(true);
    onProcess?.(files);
  };

  const handleReset = () => {
    setFiles([]);
    setIsDone(false);
    setProgress(0);
    setIsProcessing(false);
  };

  return (
    <>
      <style>{`
        .uploader-container {
          min-height: calc(100vh - 64px);
          padding: 88px 24px 60px;
          background: linear-gradient(160deg, #fff5f5 0%, #ffffff 30%, #f8f9fc 100%);
        }
        .uploader-inner {
          max-width: 900px;
          margin: 0 auto;
        }
        .uploader-hero {
          text-align: center;
          margin-bottom: 48px;
        }
        .uploader-icon-wrapper {
          width: 80px;
          height: 80px;
          border-radius: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          font-size: 38px;
        }
        .uploader-hero h1 {
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 800;
          color: var(--text-dark);
          letter-spacing: -1px;
          margin-bottom: 12px;
        }
        .uploader-hero p {
          font-size: 16px;
          color: var(--text-medium);
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* Drop Zone */
        .dropzone {
          border: 2.5px dashed var(--border-light);
          border-radius: var(--radius-xl);
          background: white;
          padding: 60px 40px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .dropzone::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: calc(var(--radius-xl) - 2.5px);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .dropzone.dragging {
          border-color: var(--dz-color, var(--primary));
          background: var(--dz-bg, #fff5f5);
          transform: scale(1.01);
          box-shadow: 0 0 0 4px var(--dz-shadow, rgba(226,0,26,0.1));
        }
        .dropzone:hover {
          border-color: var(--dz-color, var(--primary));
          box-shadow: var(--shadow-sm);
        }
        .dropzone-icon {
          font-size: 52px;
          margin-bottom: 16px;
          display: block;
          animation: float 3s ease-in-out infinite;
        }
        .dropzone h3 {
          font-size: 20px;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 8px;
        }
        .dropzone p {
          font-size: 14px;
          color: var(--text-light);
          margin-bottom: 24px;
        }
        .dropzone-select-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 28px;
          border-radius: var(--radius-sm);
          font-size: 15px;
          font-weight: 700;
          color: white;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 16px rgba(0,0,0,0.2);
        }
        .dropzone-select-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.25);
        }
        .dropzone-hint {
          margin-top: 16px;
          font-size: 12px;
          color: var(--text-light);
        }

        /* File list */
        .files-panel {
          background: white;
          border-radius: var(--radius-xl);
          border: 1px solid var(--border-light);
          box-shadow: var(--shadow-sm);
          overflow: hidden;
          margin-top: 24px;
        }
        .files-panel-header {
          padding: 18px 24px;
          border-bottom: 1px solid var(--border-light);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .files-panel-header h3 {
          font-size: 15px;
          font-weight: 700;
          color: var(--text-dark);
        }
        .files-count-badge {
          background: var(--bg-light);
          color: var(--text-medium);
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }
        .file-list {
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          max-height: 320px;
          overflow-y: auto;
        }
        .file-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: var(--radius-md);
          background: var(--bg-light);
          transition: background 0.15s ease;
        }
        .file-item:hover { background: #f0f0f5; }
        .file-item-icon {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background: rgba(226,0,26,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
        }
        .file-item-info {
          flex: 1;
          min-width: 0;
        }
        .file-item-name {
          font-size: 14px;
          font-weight: 600;
          color: var(--text-dark);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .file-item-size {
          font-size: 12px;
          color: var(--text-light);
          margin-top: 2px;
        }
        .file-item-remove {
          width: 28px; height: 28px;
          border-radius: 50%;
          background: none;
          border: none;
          color: var(--text-light);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.15s ease;
          font-size: 16px;
          flex-shrink: 0;
        }
        .file-item-remove:hover {
          background: rgba(226,0,26,0.1);
          color: var(--primary);
        }

        /* Actions */
        .file-actions {
          padding: 20px 24px;
          border-top: 1px solid var(--border-light);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        .add-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 10px 18px;
          border-radius: var(--radius-sm);
          font-size: 13.5px;
          font-weight: 600;
          color: var(--text-medium);
          background: var(--bg-light);
          border: 1.5px solid var(--border-light);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .add-more-btn:hover {
          border-color: var(--dz-color);
          color: var(--dz-color);
          background: var(--dz-bg);
        }
        .process-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 32px;
          border-radius: var(--radius-sm);
          font-size: 15px;
          font-weight: 700;
          color: white;
          border: none;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 4px 16px rgba(0,0,0,0.2);
          min-width: 160px;
          justify-content: center;
        }
        .process-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
        }
        .process-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* Progress */
        .progress-wrapper {
          padding: 32px 24px;
          text-align: center;
        }
        .progress-text {
          font-size: 16px;
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 16px;
        }
        .progress-bar-container {
          background: var(--bg-light);
          border-radius: 20px;
          height: 8px;
          overflow: hidden;
          margin-bottom: 8px;
        }
        .progress-bar-fill {
          height: 100%;
          border-radius: 20px;
          transition: width 0.3s ease;
        }
        .progress-percent {
          font-size: 13px;
          color: var(--text-light);
        }

        /* Done state */
        .done-panel {
          padding: 48px 24px;
          text-align: center;
        }
        .done-icon {
          font-size: 60px;
          margin-bottom: 16px;
          display: block;
          animation: float 3s ease-in-out infinite;
        }
        .done-title {
          font-size: 24px;
          font-weight: 800;
          color: var(--text-dark);
          margin-bottom: 8px;
        }
        .done-subtitle {
          font-size: 15px;
          color: var(--text-medium);
          margin-bottom: 32px;
        }
        .done-actions {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .download-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 32px;
          border-radius: var(--radius-md);
          font-size: 16px;
          font-weight: 700;
          color: white;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 6px 20px rgba(0,0,0,0.2);
        }
        .download-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(0,0,0,0.3);
        }
        .reset-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 24px;
          border-radius: var(--radius-md);
          font-size: 15px;
          font-weight: 600;
          color: var(--text-medium);
          background: var(--bg-light);
          border: 1.5px solid var(--border-light);
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
        }
        .reset-btn:hover {
          color: var(--text-dark);
          border-color: var(--text-light);
          background: white;
        }

        @media (max-width: 640px) {
          .uploader-container { padding: 80px 16px 48px; }
          .dropzone { padding: 40px 20px; }
          .file-actions { flex-direction: column; }
          .process-btn { width: 100%; }
        }
      `}</style>

      <div className="uploader-container">
        <div className="uploader-inner">
          {/* Tool Hero */}
          <div className="uploader-hero">
            <div
              className="uploader-icon-wrapper"
              style={{ background: toolBgColor }}
            >
              <span>📄</span>
            </div>
            <h1>{toolTitle}</h1>
            <p>{toolDescription}</p>
          </div>

          {/* Done State */}
          {isDone ? (
            <div className="files-panel">
              <div className="done-panel">
                <span className="done-icon">✅</span>
                <div className="done-title">Processing complete!</div>
                <p className="done-subtitle">Your file is ready to download.</p>
                <div className="done-actions">
                  <button
                    className="download-btn"
                    style={{ background: `linear-gradient(135deg, ${toolColor}, ${toolColor}cc)` }}
                    onClick={() => alert("In a real implementation, your file would download here!")}
                  >
                    ⬇️ Download file
                  </button>
                  <button className="reset-btn" onClick={handleReset}>
                    🔄 Process another file
                  </button>
                </div>
              </div>
            </div>
          ) : files.length === 0 ? (
            /* Drop Zone */
            <div
              className={`dropzone ${isDragging ? "dragging" : ""}`}
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
              onDrop={onDrop}
              onClick={() => fileInputRef.current?.click()}
              style={{
                "--dz-color": toolColor,
                "--dz-bg": toolBgColor,
                "--dz-shadow": `${toolColor}1a`,
              } as React.CSSProperties}
            >
              <span className="dropzone-icon">📂</span>
              <h3>Select files or drop here</h3>
              <p>Drag & drop your {acceptedTypes.replace(/\./g, "").toUpperCase()} files here, or click to browse</p>
              <button
                className="dropzone-select-btn"
                style={{ background: `linear-gradient(135deg, ${toolColor}, ${toolColor}cc)` }}
                onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}
              >
                📁 Select files
              </button>
              <p className="dropzone-hint">
                Supports {acceptedTypes.replace(/,/g, ", ").replace(/\./g, "").toUpperCase()} files • Max {maxFiles} files
              </p>
            </div>
          ) : (
            /* Files Panel */
            <div className="files-panel">
              {isProcessing ? (
                <div className="progress-wrapper">
                  <div className="progress-text">⚙️ Processing your files...</div>
                  <div className="progress-bar-container">
                    <div
                      className="progress-bar-fill"
                      style={{
                        width: `${progress}%`,
                        background: `linear-gradient(90deg, ${toolColor}, ${toolColor}cc)`,
                      }}
                    />
                  </div>
                  <div className="progress-percent">{progress}%</div>
                </div>
              ) : (
                <>
                  <div className="files-panel-header">
                    <h3>Selected files</h3>
                    <span className="files-count-badge">{files.length} file{files.length !== 1 ? "s" : ""}</span>
                  </div>
                  <div className="file-list">
                    {files.map((f) => (
                      <div key={f.id} className="file-item">
                        <div className="file-item-icon">📄</div>
                        <div className="file-item-info">
                          <div className="file-item-name">{f.file.name}</div>
                          <div className="file-item-size">{f.size}</div>
                        </div>
                        <button className="file-item-remove" onClick={() => removeFile(f.id)} title="Remove file">✕</button>
                      </div>
                    ))}
                  </div>
                  <div className="file-actions">
                    <button
                      className="add-more-btn"
                      style={{ "--dz-color": toolColor, "--dz-bg": toolBgColor } as React.CSSProperties}
                      onClick={() => fileInputRef.current?.click()}
                    >
                      + Add more files
                    </button>
                    <button
                      className="process-btn"
                      style={{ background: `linear-gradient(135deg, ${toolColor}, ${toolColor}cc)` }}
                      onClick={handleProcess}
                      disabled={files.length === 0}
                    >
                      ⚡ {actionLabel}
                    </button>
                  </div>
                </>
              )}
            </div>
          )}

          <input
            ref={fileInputRef}
            type="file"
            accept={acceptedTypes}
            multiple={maxFiles > 1}
            style={{ display: "none" }}
            onChange={(e) => e.target.files && addFiles(e.target.files)}
          />
        </div>
      </div>
    </>
  );
}
