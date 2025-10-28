"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productImageStorage = exports.categoryImageStorage = exports.editFileName = exports.imageFileFilter = void 0;
const multer_1 = require("multer");
const path_1 = require("path");
const common_1 = require("@nestjs/common");
const imageFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif|webp)$/)) {
        return callback(new common_1.BadRequestException('Sadece resim dosyaları yüklenebilir!'), false);
    }
    callback(null, true);
};
exports.imageFileFilter = imageFileFilter;
const editFileName = (req, file, callback) => {
    const name = file.originalname.split('.')[0];
    const fileExtName = (0, path_1.extname)(file.originalname);
    const randomName = Array(16)
        .fill(null)
        .map(() => Math.round(Math.random() * 16).toString(16))
        .join('');
    callback(null, `${name}-${Date.now()}-${randomName}${fileExtName}`);
};
exports.editFileName = editFileName;
exports.categoryImageStorage = (0, multer_1.diskStorage)({
    destination: './images/categories',
    filename: exports.editFileName,
});
exports.productImageStorage = (0, multer_1.diskStorage)({
    destination: './images/products',
    filename: exports.editFileName,
});
//# sourceMappingURL=file-upload.config.js.map