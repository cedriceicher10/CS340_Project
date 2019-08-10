// Justin Add [Start]
function deletePlayer(playerId){
    $.ajax({
        url: '/player_table/' + playerId,
        type: 'DELETE',
        success: function(result){
            window.location.reload(true);
        }
    })
};
// Justin Add [End]
