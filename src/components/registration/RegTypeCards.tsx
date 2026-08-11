import type { RegistrationCopy } from '../../content/registrationContent';

export type RegType = 'driver' | 'driver_truck' | 'truck';

type Props = {
  t: RegistrationCopy;
  value: RegType | '';
  onChange: (v: RegType) => void;
};

const OPTIONS: {
  value: RegType;
  emoji: string;
  labelKey: 'regTypeDriverOnly' | 'regTypeDriverTruck' | 'regTypeTruckOnly';
}[] = [
  { value: 'driver', emoji: '👤', labelKey: 'regTypeDriverOnly' },
  { value: 'driver_truck', emoji: '🚛', labelKey: 'regTypeDriverTruck' },
  { value: 'truck', emoji: '📦', labelKey: 'regTypeTruckOnly' },
];

export default function RegTypeCards({ t, value, onChange }: Props) {
  return (
    <div className="reg-type-cards" role="radiogroup" aria-label={t.regTypeLabel}>
      {OPTIONS.map((opt) => (
        <button
          key={opt.value}
          type="button"
          className={`reg-type-card${value === opt.value ? ' selected' : ''}`}
          onClick={() => onChange(opt.value)}
          aria-pressed={value === opt.value}
        >
          <span className="emoji" aria-hidden>
            {opt.emoji}
          </span>
          <span className="card-text">{t[opt.labelKey]}</span>
        </button>
      ))}
    </div>
  );
}
