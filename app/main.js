var initialize = function () {
        var mapProp = {
                center:new google.maps.LatLng(41.00000, 22.00000),
                zoom:5,
                mapTypeId:google.maps.MapTypeId.ROADMAP
            },
            map = new google.maps.Map(document.getElementById("map"), mapProp);
        new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(41.00000, 22.00000),
            animation: google.maps.Animation.DROP
        });
    },
    ready = function(){
        setTimeout(initialize, 1000);
    };
var showMobileMenu = function(){
    if( $('.mobile-menu').hasClass("show-mobile-menu")){
        $('.mobile-menu').removeClass('show-mobile-menu');
    } else {
        $('.mobile-menu').addClass('show-mobile-menu');
    }
};
var _contactPage_formBlock_height = $('.contact-page .form-block').height();
$(window).resize(function(){
    var _contactPage_formBlock_height = $('.contact-page .form-block').height();
    $('#map').css('height', _contactPage_formBlock_height-10+'px');
});
var _contactPage_formBlock_height = $('.contact-page .form-block').height();
$('#map').css('height', _contactPage_formBlock_height-10+'px');
$(document).ready(ready);
$(document).on('page:load', ready);