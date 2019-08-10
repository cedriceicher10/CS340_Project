// Justin Add [Start]
function deleteLeague(leagueId){
    $.ajax({
        url: '/league_table/' + leagueId,
        type: 'DELETE',
        success: function(result){
            window.location.reload(true);
        }
    })
};
// Justin Add [End]
