$(document).ready(function() {
	var quote;
	var author;

	function getNewQuote() {
		$.ajax({
			url: 'http://api.forismatic.com/api/1.0/',
			jsonp: 'jsonp',
			dataType: 'jsonp',
			data: {
				method: 'getQuote',
				lang: 'en',
				format: 'jsonp'
			},
			success: function(response) {
				quotes = response.quoteText;
				author = response.quoteAuthor;
				$('#quote').html(quotes);
				if (author) {
					$('#author').text('-said by ' + author);
				} else {
					$('#author').html('- Unknown');
				}
			}
		});
	}
	getNewQuote();
	$('#newQuote').on('click', function(event) {
		event.preventDefault();
		getNewQuote();
	});
	$('#tweet').on('click', function() {
		event.preventDefault();
		window.open('http://twitter.com/intent/tweet?text=' + '"' +
			quotes + '"' +
			' - ' + author);
	});
});
