import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddConsumerReturns1730000000002 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
