$(document).ready(function() {

    $(document).on("click", function(event) {
        $.ajax({
            url: 'https://flynn.boolean.careers/exercises/api/random/int',
            method: 'GET',
            success: function(data) {
                var numeroRandom = data.response;
                if (numeroRandom <= 5) {
                    $(event.target).addClass("yellow");
                }else {
                    $(event.target).addClass("green");
                }
            },
            error: function () {
                alert('ERRORE');
            }
        });
    });







});
