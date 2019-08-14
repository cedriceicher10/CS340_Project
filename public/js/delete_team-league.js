// Justin Add [Start]
function deleteTeamLeague(id){
    $.ajax({
        url: '/team-league_table/' + id,
        type: 'DELETE',
        success: function(result){
            window.location.reload(true);
        }
    })
};
// Justin Add [End]
