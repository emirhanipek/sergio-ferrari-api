import { diskStorage } from 'multer';
import { extname } from 'path';
import { BadRequestException } from '@nestjs/common';

export const imageFileFilter = (req: any, file: any, callback: any) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif|webp)$/)) {
    return callback(
      new BadRequestException('Sadece resim dosyaları yüklenebilir!'),
      false,
    );
  }
  callback(null, true);
};

export const editFileName = (req: any, file: any, callback: any) => {
  const name = file.originalname.split('.')[0];
  const fileExtName = extname(file.originalname);
  const randomName = Array(16)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join('');
  callback(null, `${name}-${Date.now()}-${randomName}${fileExtName}`);
};

export const categoryImageStorage = diskStorage({
  destination: './images/categories',
  filename: editFileName,
});

export const productImageStorage = diskStorage({
  destination: './images/products',
  filename: editFileName,
});
