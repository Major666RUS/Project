/**
 * Created by vadfa on 07.02.2018.
 */
$(document).ready(function(){
    var menuMaxWidth = jQuery('.mainMenu_firstLevel').css('width');
    menuMaxWidth = parseInt(menuMaxWidth);
    var menuCurrentWidth = 0;
    console.log(menuMaxWidth);
    jQuery('.js-menuItem').each(function(){
        var width = jQuery(this).outerWidth();
        width = parseInt(width);
        menuCurrentWidth += width;
        if (menuCurrentWidth < menuMaxWidth) {
            if (!jQuery(this).is(':last')) {
                if ((menuCurrentWidth + parseInt(jQuery(this).next().outerWidth())) > menuMaxWidth) {
                    var nextAll = jQuery(this).nextAll();
                    jQuery('<li class="mainMenu_firstLevelItem js-menuToggle"><a href="/" class="mainMenu_firstLevelItemLink">...</a><ul class="mainMenu_secondLevel"></ul></li>').insertAfter(jQuery(this));
                    if ((menuCurrentWidth + parseInt(jQuery('.js-menuToggle').outerWidth())) > menuMaxWidth) {
                        jQuery('.mainMenu_secondLevel').append(jQuery(this)).append(nextAll);
                    } else {
                        jQuery('.mainMenu_secondLevel').append(nextAll);
                    }
                    return false;
                }
            }
        }
    });
    jQuery('.js-menuToggle').click(function(){
        jQuery('.mainMenu_secondLevel').toggle();
        return false;
    })
});