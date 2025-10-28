"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddProductImages1730000000001 = void 0;
class AddProductImages1730000000001 {
    name = 'AddProductImages1730000000001';
    async up(queryRunner) {
        await queryRunner.query(`
      CREATE TABLE \`product_images\` (
        \`id\` int NOT NULL AUTO_INCREMENT,
        \`productId\` int NOT NULL,
        \`imagePath\` varchar(500) NOT NULL,
        \`sira\` int NOT NULL DEFAULT '0',
        \`isMain\` tinyint NOT NULL DEFAULT '0',
        \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
        PRIMARY KEY (\`id\`),
        INDEX \`IDX_productId\` (\`productId\`)
      ) ENGINE=InnoDB
    `);
        await queryRunner.query(`
      ALTER TABLE \`product_images\`
      ADD CONSTRAINT \`FK_product_images_product\`
      FOREIGN KEY (\`productId\`)
      REFERENCES \`products\`(\`id\`)
      ON DELETE CASCADE
      ON UPDATE NO ACTION
    `);
        await queryRunner.query(`
      ALTER TABLE \`products\`
      DROP COLUMN \`urunGorselleri\`
    `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
      ALTER TABLE \`products\`
      ADD COLUMN \`urunGorselleri\` json NULL
    `);
        await queryRunner.query(`ALTER TABLE \`product_images\` DROP FOREIGN KEY \`FK_product_images_product\``);
        await queryRunner.query(`DROP TABLE \`product_images\``);
    }
}
exports.AddProductImages1730000000001 = AddProductImages1730000000001;
//# sourceMappingURL=1730000000001-AddProductImages.js.map