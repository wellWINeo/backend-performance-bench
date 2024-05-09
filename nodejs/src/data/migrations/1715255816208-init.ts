import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1715255816208 implements MigrationInterface {
    name = 'Init1715255816208'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "todo" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deadlineAt" TIMESTAMP WITH TIME ZONE NOT NULL, "title" text NOT NULL, "description" text NOT NULL, "isDone" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_d429b7114371f6a35c5cb4776a7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "todo"`);
    }

}
