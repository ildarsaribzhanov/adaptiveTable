(function ( $ ) {
	$.fn.adaptiveTable = function ( options ) {
		options = $.extend({
			addWrap: false
		}, options);

		var make = function () {
			var self = this;

			$(document).ready(function () {

				if( options.addWrap === true ) {
					$(self).wrap('<div class="table-adaptive-wrap"></div>');
					return true;
				}

				// пересоберем
				var new_table = $('<div class="table-adaptive"></div>');

				$(self).find('tr').each(function () {
					new_table.append('<div class="table-adaptive__row">');

					$(this).find('td, th').each(function () {
						new_table.find('.table-adaptive__row').last().append('<div class="table-adaptive__cell">' + $(this).html() + '</div>');
					});
				});

				$(self).replaceWith(new_table);
			})
		};

		return this.each(make);
	};
})(jQuery);