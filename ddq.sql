/*Creating table for stadium*/
DROP TABLE IF EXISTS `stadium`;
CREATE TABLE `stadium` (
    `stadiumId` int NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `city` varchar(255) NOT NULL,
    `capacity` int NOT NULL,
    `pitch` varchar(255),
    `year` int,
    PRIMARY KEY (`stadiumId`)
);

/*Adding data to stadium table*/
INSERT INTO `stadium` VALUES (1, 'Etihad Stadium', 'Manchester, England', 55097, 'GrassMaster', 2002),
(2, 'Anfield', 'Liverpool, England', 54074, 'GrassMaster', 1884),
(3, 'Stamford Bridge', 'London, England', 41631, 'GrassMaster', 1876),
(4, 'Tottenham Hotspur Stadium', 'London, England', 62062, 'GrassMaster', 2019),
(5, 'Camp Nou', 'Barcelona, Spain', 99354, 'GrassMaster', 1957),
(6, 'Wanda Metropolitano', 'Madrid, Spain', 67829, 'Grass', 1993),
(7, 'Santiago Bernabeu Stadium', 'Madrid, Spain', 81044, 'Mixto Hybrid Grass Technology', 1947),
(8, 'Mestalla Stadium', 'Valencia, Spain', 50500, 'Grass/Sand', 1916),
(9, 'Allianz Stadium', 'Turin, Italy', 41507, 'Grass', 2011),
(10, 'Stadio San Paolo', 'Naples, Italy', 55000, 'Grass', 1959),
(11, 'Stadio Atleti Azzurri d Italia', 'Bergamo, italy', 21300, 'Grass', 1928),
(12, 'San Siro', 'Milan, Italy', 80018, 'GrassMaster', 1926);

/*Creating table for team*/
DROP TABLE IF EXISTS `team`;
CREATE TABLE `team` (
    `teamId` int NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `city` varchar(255) NOT NULL,
    `stadium` int,
    `standing` int NOT NULL,
    `gamesPlayed` int NOT NULL,
    `points` int NOT NULL,
    PRIMARY KEY (`teamId`),
    FOREIGN KEY (`stadium`) REFERENCES `stadium`(`stadiumId`) ON DELETE SET NULL ON UPDATE CASCADE
);

/*Adding data to team table*/
INSERT INTO `team` VALUES (1, 'Manchester City', 'Manchester', 1, 1, 38, 98),
(2, 'Liverpool F.C.', 'Liverpool, England', 2, 2, 38, 97),
(3, 'Chelsea Football Club', 'London, England', 3, 3, 38, 72),
(4, 'Tottenham Hotspur Football Club', 'London, England', 4, 4, 38, 71),
(5, 'FC Barcelona', 'Barcelona, Spain', 5, 1, 38, 87),
(6, 'Atletico Madrid', 'Madrid, Spain', 6, 2, 38, 76),
(7, 'Real Madrid CF', 'Madrid, Spain', 7, 3, 38, 68),
(8, 'Valencia CF', 'Valencia, Spain', 8, 4, 38, 61),
(9, 'Juventus F.C.', 'Turin, Italy', 9, 1, 38, 90),
(10, 'S.S.C. Napoli', 'Naples, Italy', 10, 2, 38, 79),
(11, 'Atalanta B.C.', 'Bergamo, Italy', 11, 3, 38, 69),
(12, 'Football Club Internazionale Milan', 'Milan, Italy', 12, 4, 38, 69);

/*Creating table for league*/
DROP TABLE IF EXISTS `league`;
CREATE TABLE `league` (
    `leagueId` int NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `location` varchar(255) NOT NULL,
    `champ` int,
    `totalGames` int(40) NOT NULL,
    PRIMARY KEY (`leagueId`),
    FOREIGN KEY (`champ`) REFERENCES `team`(`teamId`) ON DELETE SET NULL ON UPDATE CASCADE
);

/*Adding data to league table*/
INSERT INTO `league` VALUES (1, 'English Premier League', 'England', 1, 38),
(2, 'La Liga', 'Spain', 5, 38),
(3, 'Serie A', 'Italy', 9, 38),
(4, 'UEFA Champions League', 'Europe', 2, 13),
(5, 'UEFA Europa League', 'Europe', 3, 15);

/*Creating team_league table*/
DROP TABLE IF EXISTS `team_league`;
CREATE TABLE `team_league` (
	`team_leagueId` int NOT NULL AUTO_INCREMENT,
	`teamId` int,
	`leagueId` int,
	PRIMARY KEY (`team_leagueId`)
);

/*Adding data to league table*/
INSERT INTO `team_league` VALUES (1, 1, 1),
(2, 1, 4),
(3, 2, 1),
(4, 2, 4),
(5, 3, 1),
(6, 3, 5),
(7, 4, 1),
(8, 4, 4),
(9, 5, 2),
(10, 5, 4),
(11, 6, 2),
(12, 5, 5),
(13, 7, 2),
(14, 7, 4),
(15, 8, 2),
(16, 8, 5),
(17, 9, 3),
(18, 9, 4),
(19, 10, 3),
(20, 10, 4),
(21, 11, 3),
(22, 11, 5),
(23, 12, 3),
(24, 12, 5);

/*Creating sponsor table*/
DROP TABLE IF EXISTS `sponsor`;
CREATE TABLE `sponsor` (
    `sponsorId` int NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `revenue` int,
    PRIMARY KEY (`sponsorId`)
);

/*Adding data to sponsor table*/
INSERT INTO `sponsor` VALUES (1, 'Adidas', 24.44),
(2, 'Nike', 34.35),
(3, 'Puma', 5.20),
(4, 'New Balance', 4.50),
(5, 'Under Armor', 5.20),
(6, 'Umbro', NULL),
(7, 'Mizuno', 1.60);

/*Creating player table*/
DROP TABLE IF EXISTS `player`;
CREATE TABLE `player` (
    `playerId` int NOT NULL AUTO_INCREMENT,
    `teamId` int,
    `fname` varchar(255) NOT NULL,
    `lname` varchar(255) NOT NULL,
    `position` varchar(255) NOT NULL,
    `appearances` int NOT NULL,
    `goals` int NOT NULL DEFAULT '0',
    `assists` int NOT NULL DEFAULT '0',
    `height` int NOT NULL,
    `birthdate` date NOT NULL,
    `nationality` varchar(255) NOT NULL,
    `sponsorId` int,
    PRIMARY KEY (`playerId`),
    FOREIGN KEY (`teamId`) REFERENCES `team`(`teamId`) ON DELETE SET NULL ON UPDATE CASCADE,
    FOREIGN KEY (`sponsorId`) REFERENCES `sponsor`(`sponsorId`) ON DELETE SET NULL ON UPDATE CASCADE
);

/*Adding data to player table*/
INSERT INTO `player` VALUES (1, 2, 'Virgil', 'van Dijk', 'CB', 50, 6, 4, 76, '1991-07-08', 'Netherlands', 2),
(2, 2, 'Roberto', 'Firmino', 'ST', 46, 16, 8, 71, '1991-10-02', 'Brazil', 1),
(3, 1, 'Sergio', 'Aguero', 'ST', 40, 27, 8, 68, '1988-06-02', 'Argentina', 3),
(4, 5, 'Lionel', 'Messi', 'ST/RW', 44, 48, 18, 67, '1987-06-24', 'Argentina', 1),
(5, 7, 'Marouane', 'Fellaini', 'CM', 59, 69, 0, 81, '1986-04-20', 'Belgium', 7),
(6, 11, 'Alejandro', 'Gomez', 'CF', 41, 9, 12, 65, '1988-02-15', 'Argentina', 1),
(7, 12, 'Krzysztof', 'Piatek', 'ST', 37, 22, 2, 72, '1995-07-01', 'Poland', 1),
(8, 12, 'Fabio', 'Borini', 'ST/LW/RW', 25, 3, 1, 71, '1991-03-29', 'Italy', 2);

