/*
  Warnings:

  - You are about to drop the column `duracao` on the `Descanso` table. All the data in the column will be lost.
  - You are about to drop the column `treinoId` on the `Descanso` table. All the data in the column will be lost.
  - Added the required column `duracaoSeg` to the `Descanso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `exercicioId` to the `Descanso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuarioId` to the `Treino` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Descanso" DROP CONSTRAINT "Descanso_treinoId_fkey";

-- AlterTable
ALTER TABLE "Descanso" DROP COLUMN "duracao",
DROP COLUMN "treinoId",
ADD COLUMN     "duracaoSeg" INTEGER NOT NULL,
ADD COLUMN     "exercicioId" TEXT NOT NULL,
ADD COLUMN     "vezesUsado" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Exercicio" ADD COLUMN     "cargaKg" INTEGER,
ADD COLUMN     "series" INTEGER;

-- AlterTable
ALTER TABLE "Treino" ADD COLUMN     "usuarioId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- AddForeignKey
ALTER TABLE "Treino" ADD CONSTRAINT "Treino_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Descanso" ADD CONSTRAINT "Descanso_exercicioId_fkey" FOREIGN KEY ("exercicioId") REFERENCES "Exercicio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
