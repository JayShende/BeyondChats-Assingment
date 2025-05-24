-- CreateTable
CREATE TABLE "userChats" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "lastMsg" TEXT NOT NULL,
    "priority" BOOLEAN NOT NULL,

    CONSTRAINT "userChats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sendMessage" (
    "msgId" SERIAL NOT NULL,
    "sent_message" TEXT NOT NULL,

    CONSTRAINT "sendMessage_pkey" PRIMARY KEY ("msgId")
);

-- AddForeignKey
ALTER TABLE "sendMessage" ADD CONSTRAINT "sendMessage_msgId_fkey" FOREIGN KEY ("msgId") REFERENCES "userChats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
