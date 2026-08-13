import FileDrop from './FileDrop';
import type { RegistrationCopy } from '../../content/registrationContent';

export type TruckState = {
  vehicleType: string;
  vehicleTypeOther: string;
  capacity: string;
  capacityUnit: 'kg' | 'm3' | 'litres';
  compartments: number;
  compartmentCapacities: string[];
  registrationNumber: string;
  vehicleFiles: File[];
  advisories: '' | 'Yes' | 'No';
  advisoryDetails: string;
  driverInsured: boolean;
  vehicleInsured: boolean;
};

export function emptyTruck(): TruckState {
  return {
    vehicleType: '',
    vehicleTypeOther: '',
    capacity: '',
    capacityUnit: 'kg',
    compartments: 1,
    compartmentCapacities: [''],
    registrationNumber: '',
    vehicleFiles: [],
    advisories: '',
    advisoryDetails: '',
    driverInsured: false,
    vehicleInsured: false,
  };
}

function unitShortLabel(u: string) {
  if (u === 'm3') return 'm³';
  if (u === 'litres') return 'L';
  return 'kg';
}

type Props = {
  t: RegistrationCopy;
  truck: TruckState;
  onChange: (patch: Partial<TruckState>) => void;
  onInfo: (key: string) => void;
};

export default function TruckFields({ t, truck, onChange, onInfo }: Props) {
  const InfoBtn = ({ infoKey }: { infoKey: string }) => (
    <button type="button" className="reg-info-icon" onClick={() => onInfo(infoKey)} aria-label="Info">
      i
    </button>
  );

  const unit = unitShortLabel(truck.capacityUnit);
  const header = truck.registrationNumber.trim()
    ? `${t.truckWord} · ${truck.registrationNumber.trim().toUpperCase()}`
    : t.truckWord;

  return (
    <div>
      <div className="reg-section-title">{t.vehicleSectionTitle}</div>

      <div className="reg-truck-block">
        <div className="reg-truck-block-header">{header}</div>

        <div className="reg-field">
          <label className="reg-label" htmlFor="vehicleType">
            {t.vehicleTypeLabel}
            <span className="reg-required">*</span>
            <InfoBtn infoKey="vehicleType" />
          </label>
          <select
            id="vehicleType"
            className="reg-select"
            required
            value={truck.vehicleType}
            onChange={(e) => onChange({ vehicleType: e.target.value })}
          >
            <option value="">{t.vehicleTypeSelectPlaceholder}</option>
            <option value="Box truck">{t.vtBoxTruck}</option>
            <option value="Curtainside">{t.vtCurtainside}</option>
            <option value="Flatbed">{t.vtFlatbed}</option>
            <option value="Tipper">{t.vtTipper}</option>
            <option value="Refrigerated">{t.vtRefrigerated}</option>
            <option value="Tanker">{t.vtTanker}</option>
            <option value="Car transporter">{t.vtCarTransporter}</option>
            <option value="Other">{t.vtOther}</option>
          </select>
          {truck.vehicleType === 'Other' && (
            <div style={{ marginTop: 10 }}>
              <input
                className="reg-input"
                type="text"
                required
                placeholder={t.vehicleTypeOtherPlaceholder}
                value={truck.vehicleTypeOther}
                onChange={(e) => onChange({ vehicleTypeOther: e.target.value })}
              />
            </div>
          )}
        </div>

        <div className="reg-field">
          <label className="reg-label" htmlFor="vehCapacity">
            {t.vehCapacityLabel}
            <span className="reg-required">*</span>
            <InfoBtn infoKey="vehCapacity" />
          </label>
          <div className="reg-capacity-row">
            <input
              id="vehCapacity"
              className="reg-input"
              type="number"
              min={0}
              step={0.1}
              inputMode="decimal"
              required
              placeholder={t.vehCapacityPlaceholder}
              value={truck.capacity}
              onChange={(e) => onChange({ capacity: e.target.value })}
            />
            <select
              className="reg-select"
              value={truck.capacityUnit}
              onChange={(e) =>
                onChange({
                  capacityUnit: e.target.value as TruckState['capacityUnit'],
                })
              }
            >
              <option value="kg">kg</option>
              <option value="m3">m³</option>
              <option value="litres">{t.unitLitres}</option>
            </select>
          </div>
        </div>

        <div className="reg-field">
          <label className="reg-label">
            {t.compartmentsLabel}
            <span className="reg-required">*</span>
            <InfoBtn infoKey="vehCompartments" />
          </label>
          <div className="reg-stepper">
            <button
              type="button"
              aria-label="decrease"
              onClick={() => {
                const n = Math.max(1, truck.compartments - 1);
                const caps = truck.compartmentCapacities.slice(0, n);
                while (caps.length < n) caps.push('');
                onChange({ compartments: n, compartmentCapacities: caps });
              }}
            >
              −
            </button>
            <input
              className="reg-input"
              type="number"
              min={1}
              max={20}
              value={truck.compartments}
              onChange={(e) => {
                const n = Math.max(1, Math.min(20, parseInt(e.target.value, 10) || 1));
                const caps = [...truck.compartmentCapacities];
                while (caps.length < n) caps.push('');
                onChange({
                  compartments: n,
                  compartmentCapacities: caps.slice(0, n),
                });
              }}
            />
            <button
              type="button"
              aria-label="increase"
              onClick={() => {
                const n = Math.min(20, truck.compartments + 1);
                const caps = [...truck.compartmentCapacities];
                while (caps.length < n) caps.push('');
                onChange({ compartments: n, compartmentCapacities: caps });
              }}
            >
              +
            </button>
          </div>
          <div className="reg-hint">{t.compartmentsHint}</div>
          {Array.from({ length: truck.compartments }, (_, ci) => (
            <div key={ci} className="reg-compartment-row">
              <div className="comp-label">
                {t.compartmentWord} {ci + 1}
              </div>
              <input
                className="reg-input"
                type="number"
                min={0}
                step={0.1}
                inputMode="decimal"
                required
                placeholder={`${t.compartmentWord} ${ci + 1}`}
                value={truck.compartmentCapacities[ci] ?? ''}
                onChange={(e) => {
                  const caps = [...truck.compartmentCapacities];
                  caps[ci] = e.target.value;
                  onChange({ compartmentCapacities: caps });
                }}
              />
              <div className="unit-tag">{unit}</div>
            </div>
          ))}
        </div>

        <div className="reg-field">
          <label className="reg-label" htmlFor="vehRegNumber">
            {t.vehRegNumberLabel}
            <span className="reg-required">*</span>
            <InfoBtn infoKey="vehRegNumber" />
          </label>
          <input
            id="vehRegNumber"
            className="reg-input"
            type="text"
            required
            placeholder={t.vehRegNumberPlaceholder}
            value={truck.registrationNumber}
            onChange={(e) => onChange({ registrationNumber: e.target.value })}
          />
        </div>

        <div className="reg-field">
          <label className="reg-label">
            {t.vehicleDocsLabel}
            <span className="reg-required">*</span>
            <InfoBtn infoKey="vehicleDocs" />
          </label>
          <FileDrop
            id="vehicleFiles"
            dropText={t.licenceDropText}
            files={truck.vehicleFiles}
            required
            onChange={(files) => onChange({ vehicleFiles: files })}
          />
          <div className="reg-hint">{t.vehicleDocsHint}</div>
        </div>

        <div className="reg-field">
          <label className="reg-label">
            {t.advisoriesLabel}
            <span className="reg-required">*</span>
            <InfoBtn infoKey="advisories" />
          </label>
          <div className="reg-pill-group">
            {(['No', 'Yes'] as const).map((v) => (
              <button
                key={v}
                type="button"
                className={`reg-pill${truck.advisories === v ? ' selected' : ''}`}
                onClick={() => onChange({ advisories: v })}
              >
                {v === 'Yes' ? t.yes : t.no}
              </button>
            ))}
          </div>
          {truck.advisories === 'Yes' && (
            <div style={{ marginTop: 10 }}>
              <textarea
                className="reg-textarea"
                placeholder={t.advisoryDetailsPlaceholder}
                value={truck.advisoryDetails}
                onChange={(e) => onChange({ advisoryDetails: e.target.value })}
              />
            </div>
          )}
        </div>

        <div className="reg-field">
          <label className="reg-label" style={{ marginBottom: 12 }}>
            {t.insuranceLabel}
            <InfoBtn infoKey="insurance" />
          </label>
          <div className="reg-confirm-box">
            <input
              type="checkbox"
              id="driverInsured"
              required
              checked={truck.driverInsured}
              onChange={(e) => onChange({ driverInsured: e.target.checked })}
            />
            <label htmlFor="driverInsured">
              <div className="confirm-text">{t.driverInsuredText}</div>
            </label>
          </div>
          <div className="reg-confirm-box">
            <input
              type="checkbox"
              id="vehicleInsured"
              required
              checked={truck.vehicleInsured}
              onChange={(e) => onChange({ vehicleInsured: e.target.checked })}
            />
            <label htmlFor="vehicleInsured">
              <div className="confirm-text">{t.vehicleInsuredText}</div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
