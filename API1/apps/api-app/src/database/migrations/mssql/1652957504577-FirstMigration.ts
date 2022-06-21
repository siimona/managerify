import {MigrationInterface, QueryRunner} from "typeorm";

export class FirstMigration1652957504577 implements MigrationInterface {
    name = 'FirstMigration1652957504577'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product_slk" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_a1706c7af39bff9d37711af9ae2" DEFAULT NEWSEQUENTIALID(), "createdOn" datetime2 NOT NULL CONSTRAINT "DF_9c0f44618eff4b5b952569afa79" DEFAULT getdate(), "modifiedOn" datetime2 NOT NULL CONSTRAINT "DF_35545778a63cb1b9092b56a9fbb" DEFAULT getdate(), "name" nvarchar(255) NOT NULL, "info" nvarchar(255), "price" int, "sku" nvarchar(255) NOT NULL, "stock" int, "weight" int, "provider" nvarchar(255), "category" nvarchar(255), "sent" tinyint, CONSTRAINT "UQ_eb1a9c9453339fbd49cbc0180a0" UNIQUE ("name"), CONSTRAINT "PK_a1706c7af39bff9d37711af9ae2" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product_slk"`);
    }

}
