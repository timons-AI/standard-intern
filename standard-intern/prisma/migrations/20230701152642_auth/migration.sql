-- CreateTable
CREATE TABLE "companies" (
    "company_id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "address" VARCHAR(100),
    "contact" VARCHAR,

    CONSTRAINT "pk_companies" PRIMARY KEY ("company_id")
);

-- CreateTable
CREATE TABLE "company_professions" (
    "company_profession_id" SERIAL NOT NULL,
    "company_id" INTEGER NOT NULL,
    "profession_id" INTEGER NOT NULL,

    CONSTRAINT "pk_company_professions" PRIMARY KEY ("company_profession_id")
);

-- CreateTable
CREATE TABLE "company_regions" (
    "company_region_id" SERIAL NOT NULL,
    "company_id" INTEGER NOT NULL,
    "region_id" INTEGER NOT NULL,

    CONSTRAINT "pk_company_regions" PRIMARY KEY ("company_region_id")
);

-- CreateTable
CREATE TABLE "professions" (
    "profession_id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,

    CONSTRAINT "pk_professions" PRIMARY KEY ("profession_id")
);

-- CreateTable
CREATE TABLE "regions" (
    "region_id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,

    CONSTRAINT "pk_regions" PRIMARY KEY ("region_id")
);

-- AddForeignKey
ALTER TABLE "company_professions" ADD CONSTRAINT "fk_company_professions" FOREIGN KEY ("company_id") REFERENCES "companies"("company_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "company_professions" ADD CONSTRAINT "fk_company_professions_regions" FOREIGN KEY ("profession_id") REFERENCES "professions"("profession_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "company_regions" ADD CONSTRAINT "fk_company_regions_companies" FOREIGN KEY ("company_id") REFERENCES "companies"("company_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "company_regions" ADD CONSTRAINT "fk_company_regions_regions" FOREIGN KEY ("region_id") REFERENCES "regions"("region_id") ON DELETE CASCADE ON UPDATE NO ACTION;
