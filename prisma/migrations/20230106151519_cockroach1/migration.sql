-- CreateTable
CREATE TABLE "Widget" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),

    CONSTRAINT "Widget_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tasks" (
    "id" STRING NOT NULL,
    "task" STRING NOT NULL,
    "userId" INT4 NOT NULL,
    "completed" BOOL NOT NULL,

    CONSTRAINT "Tasks_pkey" PRIMARY KEY ("id")
);
