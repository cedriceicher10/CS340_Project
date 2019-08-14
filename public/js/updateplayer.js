function updatePlayer(playerId){
    $.ajax({
        url: '/player_table/' + playerId,
        type: 'PUT',
        data: $('#update-player').serialize(),
        success: function(result){
            window.location.replace("/player_table");
        }
    })
};