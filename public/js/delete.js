// Extract Table and Attribute Information 
document.getElementById("deleteButton").addEventListener("click", function(){
	// Extract chosen values
	table = document.getElementById("tableSelect").value;
	attribute = document.getElementById("attributeSelect").value;
	
	// Check if table-attribute relationship is valid
	if ((table == "Stadium") && (attribute != "Name") && (attribute != "City") && (attribute != "Capacity") && (attribute != "Pitch") && (attribute != "Year")) {
		alert("The attribute you chose does not exist in the " + table + " table. Please choose again.");
	}
	else if ((table == "Team") && (attribute != "Name") && (attribute != "City") && (attribute != "Stadium") && (attribute != "Standing") && (attribute != "Appearances") && (attribute != "Points")) {
		alert("The attribute you chose does not exist in the " + table + " table. Please choose again.");
	}
	else if ((table == "League") && (attribute != "Name") && (attribute != "Champion") && (attribute != "Location") && (attribute != "TotalGames")) {
		alert("The attribute you chose does not exist in the " + table + " table. Please choose again.");
	}
	else if ((table == "Player") && (attribute != "First Name") && (attribute != "Last Name") && (attribute != "Position") && (attribute != "Appearances") && (attribute != "Goals") && (attribute != "Assists") && (attribute != "Height") && (attribute != "Birth Date") && (attribute != "Nationality") && (attribute != "Sponsor")) {
		alert("The attribute you chose does not exist in the " + table + " table. Please choose again.");
	}
	else if ((table == "Sponsor") && (attribute != "Name") && (attribute != "Revenue")) {
		alert("The attribute you chose does not exist in the " + table + " table. Please choose again.");
	}
	else {
		// Alert final chosen values
		alert("Table: " + table + "\n" + "Attribute: " + attribute);
	}	
	
});

// Delete portion using correctly validated table, attribute
// Coming soon