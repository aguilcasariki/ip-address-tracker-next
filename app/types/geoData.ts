export interface GeoData {
  ip?: string;
  location?: {
    city: string;
    state: string;

    timezone: string;
    latitude: number;
    longitude: number;
  };
  isp?: {
    isp: string;
  };
  error?: string;
}
