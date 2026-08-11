type Props = {
  title: string;
  body: string;
  onClose: () => void;
};

export default function InfoModal({ title, body, onClose }: Props) {
  return (
    <div
      className="reg-info-overlay"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="reg-info-modal">
        <div className="reg-info-modal-handle" />
        <div className="reg-info-modal-header">
          <span>{title}</span>
          <button type="button" className="reg-info-modal-close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>
        <div className="reg-info-modal-body">{body}</div>
      </div>
    </div>
  );
}
