import { IsString, IsNumber, IsOptional, IsEnum, IsObject } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  urunAdi?: string;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  kategoriId?: number;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  fiyat?: number;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  stokAdedi?: number;

  @IsString()
  @IsOptional()
  stokKodu?: string;

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
