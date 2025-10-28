import { IsString, IsNotEmpty, IsNumber, IsOptional, IsEnum, IsObject } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  urunAdi: string;

  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  kategoriId: number;

  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  fiyat: number;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  stokAdedi?: number;

  @IsString()
  @IsNotEmpty()
  stokKodu: string;

  @IsString()
  @IsOptional()
  renk?: string;

  @IsString()
  @IsOptional()
  malzeme?: string;

  @IsString()
  @IsOptional()
  urunAciklamasi?: string;

  @IsObject()
  @IsOptional()
  ozellikler?: Record<string, string>;

  @IsEnum(['aktif', 'pasif'])
  @IsOptional()
  durum?: 'aktif' | 'pasif';
}
