import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddConsumerReturns1730000000002 implements MigrationInterface {
  name = 'AddConsumerReturns1730000000002';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Create consumer_returns table
    await queryRunner.query(`
      CREATE TABLE \`consumer_returns\` (
        \`id\` int NOT NULL AUTO_INCREMENT,
        \`ad\` varchar(100) NOT NULL,
        \`soyad\` varchar(100) NOT NULL,
        \`eposta\` varchar(255) NOT NULL,
        \`telefon\` varchar(20) NOT NULL,
        \`konu\` varchar(255) NOT NULL,
        \`mesaj\` text NOT NULL,
        \`durum\` enum ('bekliyor', 'okundu', 'cevaplandı') NOT NULL DEFAULT 'bekliyor',
        \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
        \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
        PRIMARY KEY (\`id\`),
        INDEX \`IDX_durum\` (\`durum\`),
        INDEX \`IDX_createdAt\` (\`createdAt\`)
      ) ENGINE=InnoDB
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Drop consumer_returns table
    await queryRunner.query(`DROP TABLE \`consumer_returns\``);
  }
}
