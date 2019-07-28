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

INSERT INTO `team` VALUES (1, 'Manchester City', 'Manchester', 1, 1, 38, 98),
(2, 'Liverpool F.C.', 'Liverpool, England', 2, 2, 38, 97),
(3, 'Chelsea Football Club', 'London, England', 3, 3, 38, 72),
(4, 'Tottenham Hotspur Football Club', 'London, England', 4, 4, 38, 71)
(5, 'FC Barcelona', 'Barcelona, Spain', 5, 1, 38, 87),
(6. 'Atletico Madrid', 'Madrid, Spain', 6, 2, 38, 76),
(7, 'Real Madrid CF', 'Madrid, Spain', 7, 3, 38, 68),
(8, 'Valencia CF', 'Valencia, Spain', 8, 4, 38, 61),
(9, 'Juventus F.C.', 'Turin, Italy', 9, 1, 38, 90),
(10, 'S.S.C. Napoli', 'Naples, Italy', 10, 2, 38, 79),
(11, 'Atalanta B.C.', 'Bergamo, Italy', 11, 3, 38, 69),
(12, 'Football Club Internazionale Milan', 'Milan, Italy', 12, 4, 38, 69);

CREATE TABLE `stadium` (
    `stadiumId` int NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `city` varchar(255) NOT NULL,
    `capacity` int NOT NULL,
    `pitch` varchar(255),
    `year` int,
    PRIMARY KEY (`stadiumId`)
);

INSERT INTO `stadium` VALUES (1, 'Etihad Stadium', 'Manchester, England', 55097, 'GrassMaster', 2002)
(2, 'Anfield', 'Liverpool, England', 54074, 'GrassMaster', 1884),
(3, 'Stamford Bridge', 'London, England', 41631, 'GrassMaster', 1876),
(4, 'Tottenham Hotspur Stadium', 'London, England', 62062, 'GrassMaster', 2019)
(5, 'Camp Nou', 'Barcelona, Spain', 99354, 'GrassMaster', 1957),
(6, 'Wanda Metropolitano', 'Madrid, Spain', 67829, 'Grass', 1993),
(7, 'Santiago Bernabeu Stadium', 'Madrid, Spain,' 81044, 'Mixto Hybrid Grass Technology', 1947),
(8, 'Mestalla Stadium', 'Valencia, Spain', 50500, 'Grass/Sand', 1916),
(9, 'Allianz Stadium', 'Turin, Italy', 41507, 'Grass', 2011),
(10, 'Stadio San Paolo', 'Naples, Italy', 55000, 'Grass', 1959),
(11, 'Stadio Atleti Azzurri d Italia', 'Bergamo, italy', 21300, 'Grass', 1928),
(12, 'San Siro', 'Milan, Italy', 80018, 'GrassMaster', 1926);

CREATE TABLE `player` (
    `playerId` int NOT NULL AUTO_INCREMENT,
    `teamId` int NOT NULL,
    `fname` varchar(255) NOT NULL,
    `lname` varchar(255) NOT NULL,
    `position` varchar(255) NOT NULL,
    `appearances` int NOT NULL,
    `goals` int NOT NULL DEFAULT '0',
    `assists` int NOT NULL DEFAULT '0',
    `height` int NOT NULL,
    `birthdate` date NOT NULL,
    `nationality` varchar(255) NOT NULL,
    `sponsorId` int NOT NULL,
    PRIMARY KEY (`playerId`),
    FOREIGN KEY (`teamId`) REFERENCES team(teamId),
    FOREIGN KEY (`sponsorId`) REFERENCES sponsor(sponsorId)
);

INSERT INTO `player` VALUES (1, 2, 'Virgil', 'van Dijk', 'CB', 50, 6, 4, 76, 1991-07-08, 'Netherlands', 2),


CREATE TABLE `league` (
    `leagueId` int NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `location` varchar(255) NOT NULL,
    `champ` int NOT NULL,
    `totalGames` int(40) NOT NULL,
    PRIMARY KEY (`leagueId`),
    FOREIGN KEY (`champ`) REFERENCES team(teamId)
);

INSERT INTO `league` VALUES (1, 'English Premier League', 'England', 1, 38),
(2, 'La Liga', 'Spain', 5, 38),
(3, 'Serie A', 'Italy', 9, 38),
(4, 'UEFA Champions League', 'Europe', 2, 13),
(5, 'UEFA Europa League', 'Europe', 3, 15);

CREATE TABLE `sponsor` (
    `sponsorId` int NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `revenue` int,
    PRIMARY KEY (sponsorId)
);

INSERT INTO `sponsor` VALUES (1, 'Adidas', 24435363840),
(2, 'Nike', 34350000000),
(3, 'Puma', 5172449280),
(4, 'New Balance', 4500000000),
(5, 'Under Armour', 5200000000),
(6, 'Umbro'),
(7, 'Mizuno', 1600000000);

