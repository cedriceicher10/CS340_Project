/*Data Manipulation Queries
Cedric Eicher & Lennard Gorter
Group 18
OSU 340
NOTE: The identifier for backend variables is the colon, :
*/

/* Select all Teams for the Team drop-down */
SELECT teamID, name FROM Team

/* Select all Stadiums for the Stadium drop-down */
SELECT stadiumID, name FROM Stadium

/* Select all Players for the Player drop-down */
SELECT playerID, name FROM Player

/* Select all Leagues for the League drop-down */
SELECT leagueID, name FROM League

/* Select all Sponsors for the Sponsor drop-down */
SELECT sponsorID, name FROM Sponsor

/* Insert into Team table */
INSERT INTO Team (name, city, stadium, standing, gamesPlayed, points) VALUES (:team_name, :team_city, :team_stadium, :team_standing, :team_gamesPlayed, :points)

/* Insert into Stadium table */
INSERT INTO Stadium (name, city, capacity, pitch, year) VALUES (:stadium_name, :stadium_city, :stadium_capacity, :stadium_pitch, :stadium_year)

/* Insert into League table */
INSERT INTO League (name, location, champ, totalGames, year) VALUES (:league_name, :league_location, :league_champion, :league_totalGames, :league_year)

/* Insert into Player table */
INSERT INTO Player (team, fname, lname, position, appearances, goals, assists, height, birthDate, nationality, sponsor) VALUES (:player_team, :player_firstname, :player_lastname, :player_position, :player_appearances, :player_goals, :player_assists, :player_height, :player_birthdate, :player_nationality, :player_sponsorship)

/* Insert into Sponsor table */
INSERT INTO Sponsor (name, revenue) VALUES (:sponsor_name, :sponsor_revenue)

/* Update User-chosen table and attribute */
UPDATE :table SET :attribute = :attribute_value WHERE :table.id = :id_chosen_from_dropdown

/* Delete User-chosen row from table */
DELETE FROM :table WHERE :table.id = :id_chosen_from_dropdown

/* Select all Players with 10+ goals that play in England */
SELECT fname, lname FROM Player 
WHERE Player.goals >= 10 AND Player.nationality = "England"
GROUP BY lname

/* Search for UEFA Champions League Teams that have Stadiums with GrassMaster type pitch and 1+ Players with an Adidas Sponsorship */
SELECT team.name AS Team_Name FROM team
INNER JOIN stadium ON team.stadiumId = stadium.stadiumId
WHERE stadium.pitch = "GrassMaster"
IN (
SELECT team.name AS Team_Name FROM team
INNER JOIN team_league ON team.teamId = team_league.teamId
INNER JOIN league ON team_league.leagueId = league.leagueId
WHERE league.name = 'UEFA Champions League'
)
IN (SELECT team.name AS Team_Name FROM team
INNER JOIN player ON team.teamId = player.teamId
INNER JOIN sponsor ON player.sponsorId = sponsor.sponsorId
WHERE sponsor.name = "Adidas"
);
GROUP BY team.name
ORDER BY team.name;