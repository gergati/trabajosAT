-- CreateTable
CREATE TABLE "Work" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "profesional" TEXT NOT NULL,
    "ciudad" TEXT NOT NULL,
    "domicilioLaboral" TEXT NOT NULL,
    "LugarTrabajo" TEXT NOT NULL,
    "diagnostico" TEXT NOT NULL,
    "obraSocial" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "terms" BOOLEAN NOT NULL,
    "age" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Work_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Work" ADD CONSTRAINT "Work_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
