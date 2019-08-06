// Extract Table and Attributes Information 

// Team Insert
document.getElementById("teamButton").addEventListener("click", function(){
	// Extract chosen values
	team_name = document.getElementById("team_name").value;
	team_city = document.getElementById("team_city").value;
	team_stadium = document.getElementById("team_stadium").value;
	team_gamesplayed = document.getElementById("team_gamesplayed").value;
	team_points = document.getElementById("team_points").value;
	
	// Ensure no NOT NULL attributes are left blank
	if (team_name == "") {
		alert("The Team Name cannot be blank.");
	}
	else if (team_city == "") {
		alert("The Team City cannot be blank.");
	}
	if (team_stadium == "") {
		team_stadium = "NULL";
	}
	if (team_gamesplayed == "") {
		team_gamesplayed = "NULL";
	}
	if (team_points == "") {
		team_points = "NULL";
	}
	if ((team_name != "") && (team_city != "")) {
		// Alert final chosen values
		alert("-TEAM INSERT- " + "\n" + "Name: " + team_name + "\n"
									  + "City: " + team_city + "\n"
									  + "Stadium: " + team_stadium + "\n"
									  + "TotalGames: " + team_gamesplayed + "\n"
									  + "Points: " + team_points);
	}	
	
});

// Stadium Insert
document.getElementById("stadiumButton").addEventListener("click", function(){
	// Extract chosen values
	stadium_name = document.getElementById("stadium_name").value;
	stadium_city = document.getElementById("stadium_city").value;
	stadium_capacity = document.getElementById("stadium_capacity").value;
	stadium_pitch = document.getElementById("stadium_pitch").value;
	stadium_year = document.getElementById("stadium_year").value;
	
	// Ensure no NOT NULL attributes are left blank
	if (stadium_name == "") {
		alert("The Stadium Name cannot be blank.");
	}
	else if (stadium_city == "") {
		alert("The Stadium City cannot be blank.");
	}
	else if (stadium_capacity == "") {
		alert("The Stadium Capacity cannot be blank.");
	}
	if (stadium_pitch == "") {
		stadium_pitch = "NULL";
	}
	if (stadium_year == "") {
		stadium_year = "NULL";
	}
	if ((stadium_name != "") && (stadium_city != "") && (stadium_capacity != "")) {
		// Alert final chosen values
		alert("-STADIUM INSERT- " + "\n" + "Name: " + stadium_name + "\n"
										 + "City: " + stadium_city + "\n"
									     + "Stadium: " + stadium_capacity + "\n"
									     + "Pitch: " + stadium_pitch + "\n"
									     + "Year: " + stadium_year);
	}	
	
});

// Player Insert
document.getElementById("playerButton").addEventListener("click", function(){
	// Extract chosen values
	player_team = document.getElementById("player_team").value;
	player_firstname = document.getElementById("player_firstname").value;
	player_lastname = document.getElementById("player_lastname").value;
	player_position = document.getElementById("player_position").value;
	player_appearances = document.getElementById("player_appearances").value;
	player_goals = document.getElementById("player_goals").value;
	player_assists = document.getElementById("player_assists").value;
	player_birthdate = document.getElementById("player_birthdate").value;
	player_nationality = document.getElementById("player_nationality").value;
	player_sponsor = document.getElementById("player_sponsor").value;
	
	// Ensure no NOT NULL attributes are left blank
	if (player_firstname == "") {
		alert("The Player First Name cannot be blank.");
	}
	else if (player_birthdate == "") {
		alert("The Player Birth Date cannot be blank.");
	}
	if (player_team == "") {
		player_team = "NULL";
	}
	if (player_position == "") {
		player_position = "NULL";
	}
	if (player_appearances == "") {
		player_appearances = "NULL";
	}
	if (player_goals == "") {
		player_goals = "NULL";
	}
	if (player_assists == "") {
		player_assists = "NULL";
	}
	if (player_nationality == "") {
		player_nationality = "NULL";
	}
	if (player_sponsor == "") {
		player_sponsor = "NULL";
	}
	if (player_lastname == "") {
		player_lastname = "NULL";
	}
	if ((player_firstname != "") && (player_birthdate != "")) {
		// Alert final chosen values
		alert("-PLAYER INSERT- " + "\n" + "Team: " + player_team + "\n"
										+ "First Name: " + player_firstname + "\n"
									    + "Last Name: " + player_lastname + "\n"
									    + "Position: " + player_position + "\n"
										+ "Appearances: " + player_appearances + "\n"
										+ "Goals: " + player_goals + "\n"
										+ "Assists: " + player_assists + "\n"
										+ "BirthDate: " + player_birthdate + "\n"
										+ "Nationality: " + player_nationality + "\n"
									    + "Sponsor: " + player_sponsor);
	}	
	
});

// League Insert
document.getElementById("leagueButton").addEventListener("click", function(){
	// Extract chosen values
	league_name = document.getElementById("league_name").value;
	league_location = document.getElementById("league_location").value;
	league_totalgames = document.getElementById("league_totalgames").value;
	league_champion = document.getElementById("league_champion").value;
	
	// Ensure no NOT NULL attributes are left blank
	if (league_name == "") {
		alert("The League Name cannot be blank.");
	}
	else if (league_location == "") {
		alert("The League Location cannot be blank.");
	}
	else if (league_totalgames == "") {
		alert("The League Total Games cannot be blank.");
	}
	if (league_champion == "") {
		league_champion = "NULL";
	}
	if ((league_name != "") && (league_location != "") && (league_totalgames != "")) {
		// Alert final chosen values
		alert("-LEAGUE INSERT- " + "\n" + "Name: " + league_name + "\n"
										+ "Location: " + league_location + "\n"
									    + "Total Games: " + league_totalgames + "\n"
									    + "Champion: " + league_champion);
	}	
	
});

// Sponsor Insert
document.getElementById("sponsorButton").addEventListener("click", function(){
	// Extract chosen values
	sponsor_name = document.getElementById("sponsor_name").value;
	sponsor_revenue = document.getElementById("sponsor_revenue").value;
	
	// Ensure no NOT NULL attributes are left blank
	if (sponsor_name == "") {
		alert("The Sponsor Name cannot be blank.");
	}
	if (sponsor_revenue == "") {
		sponsor_revenue = "NULL";
	}
	if (sponsor_name != "") {
		// Alert final chosen values
		alert("-SPONSOR INSERT- " + "\n" + "Name: " + sponsor_name + "\n"
										 + "Revenue: " + sponsor_revenue);
	}	
	
});


// Insert using validated attributes
// Coming soon




