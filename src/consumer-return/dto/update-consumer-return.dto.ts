import { IsString, IsEmail, IsOptional, IsEnum } from 'class-validator';

export class UpdateConsumerReturnDto {
  @IsString()
  @IsOptional()
  ad?: string;

  @IsString()
  @IsOptional()
  soyad?: string;

  @IsEmail()
  @IsOptional()
  eposta?: string;

  @IsString()
  @IsOptional()
  telefon?: string;

  @IsString()
  @IsOptional()
  konu?: string;

  @IsString()
  @IsOptional()
  mesaj?: string;

  @IsEnum(['bekliyor', 'okundu', 'cevaplandı'])
  @IsOptional()
  durum?: 'bekliyor' | 'okundu' | 'cevaplandı';
}
