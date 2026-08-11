type Props = {
  id: string;
  dropText: string;
  files: File[];
  onChange: (files: File[]) => void;
  required?: boolean;
  accept?: string;
};

export default function FileDrop({
  id,
  dropText,
  files,
  onChange,
  required,
  accept = 'image/*,.pdf',
}: Props) {
  return (
    <>
      <div className="reg-file-drop">
        <input
          id={id}
          type="file"
          accept={accept}
          capture="environment"
          multiple
          required={required}
          onChange={(e) => onChange(Array.from(e.target.files ?? []))}
        />
        <div className="reg-file-drop-icon">📄</div>
        <div className="reg-file-drop-text">{dropText}</div>
      </div>
      {files.length > 0 && (
        <div className="reg-file-list">
          {files.map((f) => (
            <div key={`${f.name}-${f.size}-${f.lastModified}`}>📎 {f.name}</div>
          ))}
        </div>
      )}
    </>
  );
}
