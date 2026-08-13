export type EncodedFile = {
  name: string;
  type: string;
  data: string;
};

export type TruckPayload = {
  index: string;
  vehicleType: string;
  vehicleTypeOther: string;
  capacity: string;
  capacityUnit: string;
  compartments: string;
  compartmentCapacities: string[];
  registrationNumber: string;
  vehicleFiles: EncodedFile[];
  advisories: string;
  advisoryDetails: string;
  driverInsured: boolean;
  vehicleInsured: boolean;
};

export type RegistrationPayload = {
  token: string;
  submittedAt: string;
  language: string;
  registrationType: string;
  referralCode: string;
  fullName: string;
  dateOfBirth: string;
  email: string;
  password: string;
  country: string;
  countryCode: string;
  phone: string;
  licenceFiles: EncodedFile[];
  licencePoints: string;
  conviction: string;
  tradeNumber: string;
  comments: string;
  marketingOptIn: boolean;
  acceptedTerms: boolean;
  acceptedPrivacy: boolean;
  truckCount: number;
  trucks: TruckPayload[];
};

export function fileToBase64(file: File): Promise<EncodedFile> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result ?? '');
      resolve({
        name: file.name,
        type: file.type,
        data: result.split(',')[1] || '',
      });
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export async function filesToPayload(files: File[]): Promise<EncodedFile[]> {
  if (!files.length) return [];
  return Promise.all(files.map(fileToBase64));
}

export async function submitRegistration(payload: RegistrationPayload): Promise<void> {
  const url = import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL as string | undefined;

  if (!url || url.includes('PASTE_YOUR') || url.trim() === '') {
    console.warn(
      'VITE_GOOGLE_SHEETS_WEBHOOK_URL is not configured — this submission was not sent anywhere.',
    );
    return;
  }

  // mode: 'no-cors' + text/plain avoids a CORS preflight that Apps Script
  // web apps don't handle. We can't read the response — fire-and-forget.
  await fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload),
  });
}
