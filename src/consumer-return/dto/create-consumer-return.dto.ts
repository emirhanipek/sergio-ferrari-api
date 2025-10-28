import { IsString, IsNotEmpty, IsEmail, IsOptional, IsEnum } from 'class-validator';

export class CreateConsumerReturnDto {
  @IsString()
  @IsNotEmpty()
  ad: string;

  @IsString()
  @IsNotEmpty()
  soyad: string;

  @IsEmail()
  @IsNotEmpty()
  eposta: string;

  @IsString()
  @IsNotEmpty()
  telefon: string;

  @IsString()
  @IsNotEmpty()
  konu: string;

  @IsString()
  @IsNotEmpty()
  mesaj: string;

  @IsEnum(['bekliyor', 'okundu', 'cevaplandı'])
  @IsOptional()
  durum?: 'bekliyor' | 'okundu' | 'cevaplandı';
}
