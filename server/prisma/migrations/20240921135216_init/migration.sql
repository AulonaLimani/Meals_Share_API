-- CreateTable
CREATE TABLE `Meal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `summary` VARCHAR(191) NOT NULL,
    `instructions` VARCHAR(191) NOT NULL,
    `creator` VARCHAR(191) NOT NULL,
    `creator_email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
