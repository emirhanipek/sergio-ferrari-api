import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddProductImages1730000000001 implements MigrationInterface {
  name = 'AddProductImages1730000000001';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Create product_images table
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

    // Add foreign key for product_images -> products
    await queryRunner.query(`
      ALTER TABLE \`product_images\`
      ADD CONSTRAINT \`FK_product_images_product\`
      FOREIGN KEY (\`productId\`)
      REFERENCES \`products\`(\`id\`)
      ON DELETE CASCADE
      ON UPDATE NO ACTION
    `);

    // Remove urunGorselleri column from products table
    await queryRunner.query(`
      ALTER TABLE \`products\`
      DROP COLUMN \`urunGorselleri\`
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Add back urunGorselleri column to products table
    await queryRunner.query(`
      ALTER TABLE \`products\`
      ADD COLUMN \`urunGorselleri\` json NULL
    `);

    // Drop foreign key
    await queryRunner.query(
      `ALTER TABLE \`product_images\` DROP FOREIGN KEY \`FK_product_images_product\``,
    );

    // Drop product_images table
    await queryRunner.query(`DROP TABLE \`product_images\``);
  }
}
