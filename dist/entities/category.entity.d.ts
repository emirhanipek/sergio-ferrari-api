import { Product } from './product.entity';
export declare class Category {
    id: number;
    kategoriAdi: string;
    urlSlug: string;
    kategoriAciklamasi: string;
    ustKategoriId: number;
    ustKategori: Category;
    altKategoriler: Category[];
    sira: number;
    kategoriGorseli: string;
    kategoriDurumu: 'aktif' | 'pasif';
    urunler: Product[];
    createdAt: Date;
    updatedAt: Date;
}
