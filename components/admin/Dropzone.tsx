import { useDropzone, Accept } from "react-dropzone";

export default function Dropzone({
  accept,
  onDrop,
  maxFiles = 1,
}: {
  accept: Accept;
  onDrop: (acceptedFiles: File[]) => void;
  maxFiles?: number;
}) {
  const { acceptedFiles, getRootProps, getInputProps, fileRejections } =
    useDropzone({
      accept,
      onDrop,
      maxFiles,
    });

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <ul>
        {errors.map((e) => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));

  return (
    <section className="border-dashed border-2 rounded-lg p-8 text-center">
      <div
        {...getRootProps({ className: "dropzone" })}
        className="cursor-pointer"
      >
        <input {...getInputProps()} />
        <p>
          Drag &apos;n&apos; drop files here, or <em>click</em> to select files
        </p>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
        {fileRejections.length > 0 && (
          <div>
            <h4>Rejected files</h4>
            <ul>{fileRejectionItems}</ul>
          </div>
        )}
      </aside>
    </section>
  );
}
