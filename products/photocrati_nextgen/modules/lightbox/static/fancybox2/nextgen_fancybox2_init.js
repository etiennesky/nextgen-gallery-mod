jQuery(function($) {
    var nextgen_fancybox2_init = function() {
    		var selector = nextgen_lightbox_filter_selector($, $(".ngg-fancybox2"));
    		
        selector.fancybox({
	    nextEffect: 'fade',
	    prevEffect: 'fade',
	    //closeBtn: false,
	    helpers: {
		title: { type : 'inside' },
		buttons: {},
		thumbs: { width: 100, height: 100 }
	    },
// Needed for twenty eleven
            onComplete: function() {
                $('#fancybox-wrap').css('z-index', 10000);
            }
        });
    };
    $(this).bind('refreshed', nextgen_fancybox2_init);
    nextgen_fancybox2_init();
});
