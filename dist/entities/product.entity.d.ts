import { Category } from './category.entity';
import { ProductImage } from './product-image.entity';
export declare class Product {
    id: number;
    urunAdi: string;
    kategoriId: number;
    kategori: Category;
    images: ProductImage[];
    fiyat: number;
    stokAdedi: number;
    stokKodu: string;
    renk: string;
    malzeme: string;
    urunAciklamasi: string;
    ozellikler: Record<string, any>;
    durum: 'aktif' | 'pasif';
    createdAt: Date;
    updatedAt: Date;
}
