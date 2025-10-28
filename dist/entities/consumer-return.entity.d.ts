export declare class ConsumerReturn {
    id: number;
    ad: string;
    soyad: string;
    eposta: string;
    telefon: string;
    konu: string;
    mesaj: string;
    durum: 'bekliyor' | 'okundu' | 'cevaplandı';
    createdAt: Date;
    updatedAt: Date;
}
