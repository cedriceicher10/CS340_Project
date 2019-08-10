// Justin Add [Start]
function deleteSponsor(sponsorId){
    $.ajax({
        url: '/sponsor_table/' + sponsorId,
        type: 'DELETE',
        success: function(result){
            window.location.reload(true);
        }
    })
};
// Justin Add [End]
