(function($) {
    "use strict";
    $(document).on('ready', function() {

        /*====================================
			Mobile Menu JS
		======================================*/
        $('.mobile-navs').slicknav({
            prependTo:".mobile-menu",
            label: '',
            duration: 500,
        });
        /*====================================
            Search JS
        ======================================*/
        $('.search-bar a').on( "click", function(){
            $('.search-top').toggleClass('active');
        });




    });


})(jQuery);