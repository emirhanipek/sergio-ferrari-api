import { IsString, IsOptional, IsNumber, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateCategoryDto {
  @IsString()
  @IsOptional()
  kategoriAdi?: string;

  @IsString()
  @IsOptional()
  urlSlug?: string;

  @IsString()
  @IsOptional()
  kategoriAciklamasi?: string;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  ustKategoriId?: number;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  sira?: number;

  @IsString()
  @IsOptional()
  kategoriGorseli?: string;

  @IsEnum(['aktif', 'pasif'])
  @IsOptional()
  kategoriDurumu?: 'aktif' | 'pasif';
}
