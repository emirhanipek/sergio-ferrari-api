export declare class CreateProductDto {
    urunAdi: string;
    kategoriId: number;
    fiyat: number;
    stokAdedi?: number;
    stokKodu: string;
    renk?: string;
    malzeme?: string;
    urunAciklamasi?: string;
    ozellikler?: Record<string, string>;
    durum?: 'aktif' | 'pasif';
}
