/**
 * Created by Sean on 12/29/2014.
 */
Scrolling = {

    init: function(){
        $('.navbar-brand').click(function(){
            $('html,body').animate({scrollTop: 0});
        });
        Scrolling.scrollToElement('#about-button', '#about');
        Scrolling.scrollToElement('#youtube-button', '#youtube');
        Scrolling.scrollToElement('#hitbox-button', '#hitbox');
        Scrolling.scrollToElement('#twitter-button', '#twitter');
    },

    // Function that takes in a button string and a container string and scrolls to the container
    scrollToElement: function(button, container){
        $(button).click(function(){
            $('html,body').animate({scrollTop: $(container).offset().top});
        });
    }
};

function clickCollapse() {
    $(document).on('click','.navbar-collapse.in',function(e) {
        if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
            $(this).collapse('hide');
        }
    });
}