(function ($) {
	"use strict";
	$( function () {
		jQuery(document).on( 'click', '.update-to-torro', function() {
			jQuery.ajax({
				url: ajaxurl,
				data: {
					action: 'dismiss_upate_to_torro'
				}
			})

		})
	})
}(jQuery));