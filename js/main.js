$(document).ready(function(){
    $.ajaxSetup({ cache: false });

    $('#countryName').keyup(function(){
        $('#result').html('');
        var searchField = $('#countryName').val();
        var expr = new RegExp(searchField, "i");

            $.getJSON('js/countries.json', function(data) {
                $.each(data, function(key, value){
                    if (value.name.search(expr) != -1 || value.name .search(expr) != -1)
                    {
                     $('#result').append('<li> '+value.name+'</li>');
                    }
                });   
            });

    });
 

    document.getElementById('submitBut').onclick = function() {
       var countryName = $('#countryName').val();

       if (countryName == null || countryName == "") {
        alert("Please select a country from the list");
       } else {
        alert("You selected: "+countryName);
        $('#countryName').val("");
       }
    }

    $('#result').on('click', 'li', function() {
        var click_text = $(this).text().split('|');
        $('#countryName').val($.trim(click_text[0]));
        $("#result").html('');
    });

    document.onclick= function(event) {
        document.getElementById('result').innerHTML = "";
    };


});