export declare class CreateConsumerReturnDto {
    ad: string;
    soyad: string;
    eposta: string;
    telefon: string;
    konu: string;
    mesaj: string;
    durum?: 'bekliyor' | 'okundu' | 'cevaplandı';
}
