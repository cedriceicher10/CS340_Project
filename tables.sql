CREATE TABLE `team` (
    `teamId` int NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `city` varchar(255) NOT NULL,
    `stadium` int NOT NULL,
    `standing` int NOT NULL,
    `gamesPlayed` int NOT NULL,
    `points` int NOT NULL,
    PRIMARY KEY (`teamId`),
    FOREIGN KEY (`stadium`) REFERENCES stadium(stadiumId)
);

CREATE TABLE `stadium` (
    `stadiumId` int NOT NULL AUTO_INCREMENT,
    `city` varchar(255) NOT NULL,
    `capacity` int NOT NULL,
    `pitch` varchar(255),
    PRIMARY KEY (`stadiumId`)
);

CREATE TABLE `player` (
    `playerId` int NOT NULL AUTO_INCREMENT,
    `teamId` int NOT NULL,
    `fname` varchar(255) NOT NULL,
    `lname` varchar(255) NOT NULL,
    `position` varchar(255) NOT NULL,
    `goals` int NOT NULL DEFAULT '0',
    `assists` int NOT NULL DEFAULT '0',
    `height` int NOT NULL,
    `birthdate`
    `nationality` varchar(255) NOT NULL,
    `sponsorId` int NOT NULL,
    PRIMARY KEY (`playerId`),
    FOREIGN KEY (`teamId`) REFERENCES team(teamId),
    FOREIGN KEY (`sponsorId`) REFERENCES sponsor(sponsorId)
);

CREATE TABLE `league` (
    `leagueId` int NOT NULL AUTO_INCREMENT,
    `champ` int NOT NULL,
    `totalGames` int(40) NOT NULL,
    PRIMARY KEY (`leagueId`),
    FOREIGN KEY (`champ`) REFERENCES team(teamId)
);

CREATE TABLE `sponsor` (
    `sponsorId` int NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `revenue` int,
    PRIMARY KEY (sponsorId)
);