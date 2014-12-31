/**
 * Created by Sean on 12/29/2014.
 */
Scrolling = {

    init: function(){
        $('.navbar-brand').click(function(){
            $('html,body').animate({scrollTop: 0});
        });
        Scrolling.scrollToElement('#about-nav', '#about');
        Scrolling.scrollToElement('#youtube-nav', '#youtube');
        Scrolling.scrollToElement('#hitbox-nav', '#hitbox');
        Scrolling.scrollToElement('#twitter-nav', '#twitter');
    },

    // Function that takes in a button string and a container string and scrolls to the container
    scrollToElement: function(button, container){
        $(button).click(function(){
            $('html,body').animate({scrollTop: $(container).offset().top});
        });
    }
};

function init(){
    $.material.ripples();
    clickCollapse();
}

function clickCollapse() {
    $(document).on('click','.navbar-collapse.in',function(e) {
        if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
            $(this).collapse('hide');
        }
    });
}