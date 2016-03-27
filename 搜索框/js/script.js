$(function() {
    $('#search_input').on('keyup', function() {
        event.preventDefault();
        var seachText = $('#search_input').val();
        $.get('http://api.bing.com/qsonhs.aspx?q=' + seachText, function(d) {
            var d = d.As.Result[0].Suggest;
            var html = '';
            for (var i = 0; i < d.length; i++) {
                html += '<li>' + d[i].Txt + '</li>';
            };
            $('#search-result').html(html);
            $('#search-suggest').show().css({
                top: $('#search-form').offset().top + $('#search-form').height() + 10,
                left: $('#search-form').offset().left,
                position: 'absolute'
            });
        }, 'json');
    });

    $(document).click(function() {
    	$('#search-suggest').hide();
    });
});
