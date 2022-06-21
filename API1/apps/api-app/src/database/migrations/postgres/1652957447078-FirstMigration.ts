import {MigrationInterface, QueryRunner} from "typeorm";

export class FirstMigration1652957447078 implements MigrationInterface {
    name = 'FirstMigration1652957447078'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product_mob" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdOn" TIMESTAMP NOT NULL DEFAULT now(), "modifiedOn" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "description" character varying, "price" integer, "sku" character varying NOT NULL, "weight" integer, "provider" character varying, "unit" character varying, "category" character varying, "sent" boolean, CONSTRAINT "UQ_282a1799251b786a0528bf164b2" UNIQUE ("name"), CONSTRAINT "PK_df81fb8120679f5c3d662a0ae76" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product_mob"`);
    }

}
