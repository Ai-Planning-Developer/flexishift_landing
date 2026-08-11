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
  trucks: TruckState[];
  truckCount: number;
  onTruckCountChange: (n: number) => void;
  onTruckChange: (index: number, patch: Partial<TruckState>) => void;
  duplicatePlates: Set<number>;
  onInfo: (key: string) => void;
};

export default function TruckFields({
  t,
  trucks,
  truckCount,
  onTruckCountChange,
  onTruckChange,
  duplicatePlates,
  onInfo,
}: Props) {
  const InfoBtn = ({ infoKey }: { infoKey: string }) => (
    <button type="button" className="reg-info-icon" onClick={() => onInfo(infoKey)} aria-label="Info">
      i
    </button>
  );

  return (
    <div>
      <div className="reg-section-title">{t.vehicleSectionTitle}</div>

      <div className="reg-field">
        <label className="reg-label">
          {t.truckCountLabel}
          <span className="reg-required">*</span>
          <InfoBtn infoKey="truckCount" />
        </label>
        <div className="reg-stepper">
          <button
            type="button"
            aria-label="decrease"
            onClick={() => onTruckCountChange(Math.max(1, truckCount - 1))}
          >
            −
          </button>
          <input
            className="reg-input"
            type="number"
            min={1}
            max={20}
            value={truckCount}
            onChange={(e) =>
              onTruckCountChange(Math.max(1, Math.min(20, parseInt(e.target.value, 10) || 1)))
            }
          />
          <button
            type="button"
            aria-label="increase"
            onClick={() => onTruckCountChange(Math.min(20, truckCount + 1))}
          >
            +
          </button>
        </div>
        <div className="reg-hint">{t.truckCountHint}</div>
      </div>

      {trucks.map((truck, i) => {
        const reg = truck.registrationNumber.trim();
        const header = reg
          ? `${t.truckWord} ${i + 1} · ${reg.toUpperCase()}`
          : `${t.truckWord} ${i + 1}`;
        const unit = unitShortLabel(truck.capacityUnit);

        return (
          <div key={i} className="reg-truck-block">
            <div className="reg-truck-block-header">{header}</div>

            <div className="reg-field">
              <label className="reg-label" htmlFor={`vehicleType_${i}`}>
                {t.vehicleTypeLabel}
                <span className="reg-required">*</span>
                <InfoBtn infoKey="vehicleType" />
              </label>
              <select
                id={`vehicleType_${i}`}
                className="reg-select"
                required
                value={truck.vehicleType}
                onChange={(e) => onTruckChange(i, { vehicleType: e.target.value })}
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
                    onChange={(e) => onTruckChange(i, { vehicleTypeOther: e.target.value })}
                  />
                </div>
              )}
            </div>

            <div className="reg-field">
              <label className="reg-label" htmlFor={`vehCapacity_${i}`}>
                {t.vehCapacityLabel}
                <span className="reg-required">*</span>
                <InfoBtn infoKey="vehCapacity" />
              </label>
              <div className="reg-capacity-row">
                <input
                  id={`vehCapacity_${i}`}
                  className="reg-input"
                  type="number"
                  min={0}
                  step={0.1}
                  inputMode="decimal"
                  required
                  placeholder={t.vehCapacityPlaceholder}
                  value={truck.capacity}
                  onChange={(e) => onTruckChange(i, { capacity: e.target.value })}
                />
                <select
                  className="reg-select"
                  value={truck.capacityUnit}
                  onChange={(e) =>
                    onTruckChange(i, {
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
                    onTruckChange(i, { compartments: n, compartmentCapacities: caps });
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
                    onTruckChange(i, {
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
                    onTruckChange(i, { compartments: n, compartmentCapacities: caps });
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
                      onTruckChange(i, { compartmentCapacities: caps });
                    }}
                  />
                  <div className="unit-tag">{unit}</div>
                </div>
              ))}
            </div>

            <div className="reg-field">
              <label className="reg-label" htmlFor={`vehRegNumber_${i}`}>
                {t.vehRegNumberLabel}
                <span className="reg-required">*</span>
                <InfoBtn infoKey="vehRegNumber" />
              </label>
              <input
                id={`vehRegNumber_${i}`}
                className="reg-input"
                type="text"
                required
                placeholder={t.vehRegNumberPlaceholder}
                value={truck.registrationNumber}
                onChange={(e) => onTruckChange(i, { registrationNumber: e.target.value })}
              />
              {duplicatePlates.has(i) && (
                <div className="reg-hint dup-warning">{t.dupWarning}</div>
              )}
            </div>

            <div className="reg-field">
              <label className="reg-label">
                {t.vehicleDocsLabel}
                <span className="reg-required">*</span>
                <InfoBtn infoKey="vehicleDocs" />
              </label>
              <FileDrop
                id={`vehicleFiles_${i}`}
                dropText={t.licenceDropText}
                files={truck.vehicleFiles}
                required
                onChange={(files) => onTruckChange(i, { vehicleFiles: files })}
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
                    onClick={() => onTruckChange(i, { advisories: v })}
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
                    onChange={(e) => onTruckChange(i, { advisoryDetails: e.target.value })}
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
                  id={`driverInsured_${i}`}
                  required
                  checked={truck.driverInsured}
                  onChange={(e) => onTruckChange(i, { driverInsured: e.target.checked })}
                />
                <label htmlFor={`driverInsured_${i}`}>
                  <div className="confirm-text">{t.driverInsuredText}</div>
                </label>
              </div>
              <div className="reg-confirm-box">
                <input
                  type="checkbox"
                  id={`vehicleInsured_${i}`}
                  required
                  checked={truck.vehicleInsured}
                  onChange={(e) => onTruckChange(i, { vehicleInsured: e.target.checked })}
                />
                <label htmlFor={`vehicleInsured_${i}`}>
                  <div className="confirm-text">{t.vehicleInsuredText}</div>
                </label>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
