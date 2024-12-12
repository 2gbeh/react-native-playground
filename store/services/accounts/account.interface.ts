export interface AccountEntity {
  id: number;
  thumbnail: null | string;
  name: string;
  price: number;
  summary: null | string;
  description: null | string;
  barcode: string;
  color: null | string;
  weight: null | number;
  discount: number;
  units: number;
  brand_id: number;
  created_at: null | Date;
  updated_at: null | Date;
  deleted_at: null | Date;
  uuid: string;
}
