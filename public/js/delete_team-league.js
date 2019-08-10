// Justin Add [Start]
function deleteTeamLeague(team_leagueId){
    $.ajax({
        url: '/team-league_table/' + team_leagueId,
        type: 'DELETE',
        success: function(result){
            window.location.reload(true);
        }
    })
};
// Justin Add [End]
