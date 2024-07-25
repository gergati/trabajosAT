-- CreateTable
CREATE TABLE "SavedWork" (
    "userId" TEXT NOT NULL,
    "workId" TEXT NOT NULL,

    CONSTRAINT "SavedWork_pkey" PRIMARY KEY ("userId","workId")
);

-- AddForeignKey
ALTER TABLE "SavedWork" ADD CONSTRAINT "SavedWork_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SavedWork" ADD CONSTRAINT "SavedWork_workId_fkey" FOREIGN KEY ("workId") REFERENCES "Work"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
