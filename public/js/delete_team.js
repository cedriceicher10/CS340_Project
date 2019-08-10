// Justin Add [Start]
function deleteTeam(teamId){
    $.ajax({
        url: '/team_table/' + teamId,
        type: 'DELETE',
        success: function(result){
            window.location.reload(true);
        }
    })
};
// Justin Add [End]
