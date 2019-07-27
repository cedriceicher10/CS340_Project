CREATE TABLE `stadium` (
    `id` int NOT NULL AUTO_INCREMENT,
    `city` varchar(255) NOT NULL,
    `capacity` int NOT NULL,
    `pitch` varchar(255),
    PRIMARY KEY (`id`)
)

CREATE TABLE `Player` (
    `id` int NOT NULL AUTO_INCREMENT,
    `tid` int NOT NULL,
    `fname` varchar(255) NOT NULL,
    `lname` varchar(255) NOT NULL,
    `position` varchar(255) NOT NULL,
    `goals` int NOT NULL DEFAULT '0',
    `assists` int NOT NULL DEFAULT '0',
    `height` int NOT NULL,
    `birthdate`
    `nationality` varchar(255) NOT NULL,
    `sid` int NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`tid`) REFERENCES team(id),
    FOREIGN KEY (`sid`) REFERENCES sponsor(id)
);