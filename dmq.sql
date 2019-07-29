/* Data Manipulation Queries
-- Cedric Eicher & Lennard Gorter
-- Group 18
-- OSU 340
-- NOTE: The identifier for backend variables is the colon, : */

/* Select all Teams for the Team drop-down */
SELECT teamID, name FROM team;

/* Select all Stadiums for the Stadium drop-down */
SELECT stadiumID, name FROM stadium;

/* Select all Players for the Player drop-down */
SELECT playerID, name FROM player;

/* Select all Leagues for the League drop-down */
SELECT leagueID, name FROM league;

/* Select all Sponsors for the Sponsor drop-down */
SELECT sponsorID, name FROM sponsor;

/* Insert into Team table */
INSERT INTO team (name, city, stadium, standing, gamesPlayed, points) VALUES (:team_name, :team_city, :team_stadium, :team_standing, :team_gamesPlayed, :points);

/* Insert into Stadium table */
INSERT INTO stadium (name, city, capacity, pitch, year) VALUES (:stadium_name, :stadium_city, :stadium_capacity, :stadium_pitch, :stadium_year);

/* Insert into League table */
INSERT INTO league (name, location, champ, totalGames, year) VALUES (:league_name, :league_location, :league_champion, :league_totalGames, :league_year);

/* Insert into Player table */
INSERT INTO player (team, fName, lName, position, appearances, goals, assists, height, birthDate, nationality, sponsor) VALUES (:player_team, :player_firstname, :player_lastname, :player_position, :player_appearances, :player_goals, :player_assists, :player_height, :player_birthdate, :player_nationality, :player_sponsorship);

/* Insert into Sponsor table */
INSERT INTO sponsor (name, revenue) VALUES (:sponsor_name, :sponsor_revenue);

/* Update User-chosen table and attribute */
UPDATE :table SET :attribute = :attribute_value WHERE :table.id = :id_chosen_from_dropdown;

/* Delete User-chosen row from table */
DELETE FROM :table WHERE :table.id = :id_chosen_from_dropdown;

/* Select all Players with 10+ goals that are of English nationality */
SELECT fname, lname FROM Player 
WHERE player.goals >= 10 AND player.nationality = "England"
ORDER BY lname;

/* Select for teams with Stadiums that have a capacity over 50,000 and uses GrassMaster type pitch */
SELECT team.name, stadium.capacity FROM team
INNER JOIN stadium ON stadium.stadiumId = team.stadiumId
WHERE stadium.capacity > 50000
AND stadium.pitch = "GrassMaster"
ORDER BY capacity;
