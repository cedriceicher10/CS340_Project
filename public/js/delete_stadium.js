// Justin Add [Start]
function deleteStadium(stadiumId){
    $.ajax({
        url: '/stadium_table/' + stadiumId,
        type: 'DELETE',
        success: function(result){
            window.location.reload(true);
        }
    })
};
// Justin Add [End]
