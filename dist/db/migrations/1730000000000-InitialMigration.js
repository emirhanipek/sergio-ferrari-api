"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitialMigration1730000000000 = void 0;
class InitialMigration1730000000000 {
    name = 'InitialMigration1730000000000';
    async up(queryRunner) {
        await queryRunner.query(`
      CREATE TABLE \`categories\` (
        \`id\` int NOT NULL AUTO_INCREMENT,
        \`kategoriAdi\` varchar(255) NOT NULL,
        \`urlSlug\` varchar(255) NOT NULL,
        \`kategoriAciklamasi\` text NULL,
        \`ustKategoriId\` int NULL,
        \`sira\` int NOT NULL DEFAULT '0',
        \`kategoriGorseli\` varchar(500) NULL,
        \`kategoriDurumu\` enum ('aktif', 'pasif') NOT NULL DEFAULT 'aktif',
        \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
        \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
        PRIMARY KEY (\`id\`),
        UNIQUE INDEX \`IDX_urlSlug\` (\`urlSlug\`),
        INDEX \`IDX_ustKategoriId\` (\`ustKategoriId\`)
      ) ENGINE=InnoDB
    `);
        await queryRunner.query(`
      ALTER TABLE \`categories\`
      ADD CONSTRAINT \`FK_categories_ustKategori\`
      FOREIGN KEY (\`ustKategoriId\`)
      REFERENCES \`categories\`(\`id\`)
      ON DELETE SET NULL
      ON UPDATE NO ACTION
    `);
        await queryRunner.query(`
      CREATE TABLE \`products\` (
        \`id\` int NOT NULL AUTO_INCREMENT,
        \`urunAdi\` varchar(255) NOT NULL,
        \`kategoriId\` int NOT NULL,
        \`fiyat\` decimal(10,2) NOT NULL,
        \`stokAdedi\` int NOT NULL DEFAULT '0',
        \`stokKodu\` varchar(100) NOT NULL,
        \`renk\` varchar(100) NULL,
        \`malzeme\` varchar(255) NULL,
        \`urunAciklamasi\` text NULL,
        \`ozellikler\` json NULL,
        \`urunGorselleri\` json NULL,
        \`durum\` enum ('aktif', 'pasif') NOT NULL DEFAULT 'aktif',
        \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
        \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
        PRIMARY KEY (\`id\`),
        UNIQUE INDEX \`IDX_stokKodu\` (\`stokKodu\`),
        INDEX \`IDX_kategoriId\` (\`kategoriId\`)
      ) ENGINE=InnoDB
    `);
        await queryRunner.query(`
      ALTER TABLE \`products\`
      ADD CONSTRAINT \`FK_products_kategori\`
      FOREIGN KEY (\`kategoriId\`)
      REFERENCES \`categories\`(\`id\`)
      ON DELETE CASCADE
      ON UPDATE NO ACTION
    `);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`products\` DROP FOREIGN KEY \`FK_products_kategori\``);
        await queryRunner.query(`ALTER TABLE \`categories\` DROP FOREIGN KEY \`FK_categories_ustKategori\``);
        await queryRunner.query(`DROP TABLE \`products\``);
        await queryRunner.query(`DROP TABLE \`categories\``);
    }
}
exports.InitialMigration1730000000000 = InitialMigration1730000000000;
//# sourceMappingURL=1730000000000-InitialMigration.js.map