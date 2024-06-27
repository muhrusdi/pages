CREATE TABLE `user` (
	`id` integer,
	`name` text,
	`email` text,
	`password` text,
	`role` text,
	`createdAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updatedAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
