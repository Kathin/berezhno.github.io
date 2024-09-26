document.documentElement.classList.add(isMobile.any ? 'mobile' : 'no-mobile')
"undefined" != typeof jQuery && jQuery(function($) {
    function o() {
        $(".module-items").owlCarousel({
            items: 4,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 3
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                }
            },
            margin: 60,
            nav: true,
            autoplay: !0,
            autoplayTimeout: 5e3,
            loop: !0,
            dots: !1,
            navText: ["&#xf104;", "&#xf105;"]
        })
        $(".main-slider").owlCarousel({
            items: 1,
            margin: 0,
            autoplay: !0,
            autoplayTimeout: 3000,
            loop: !0,
            dots: true,
            autoplaySpeed: 600
        })
    }
    $("ul.nav li.dropdown").hover(function() {
            $(this).find(".dropdown-menu").stop(!0, !0).delay(100).fadeIn(300)
        }, function() {
            $(this).find(".dropdown-menu").stop(!0, !0).delay(300).fadeOut(300)
        }), $(".dropdown-cart").hover(function() {
            $(this).find(".dropdown-menu").stop(!0, !0).delay(100).fadeIn(300)
        }, function() {
            $(this).find(".dropdown-menu").stop(!0, !0).delay(300).fadeOut(300)
        }), $("body").on("click", '[href="#"], [href=""]', function(o) {
            o.preventDefault()
        }),
        $("html.no-js").removeClass("no-js").addClass("js-ready"), $("#system-message .close").click(function() {
            return $(this).closest(".alert").animate({
                height: 0,
                opacity: 0,
                MarginBottom: 0
            }, "slow", function() {
                $(this).remove()
            }), !1
        }), $(".owl-carousel").length && o()
});

if (typeof acymailing == 'undefined') {
    var acymailing = Array();
}
acymailing['NAMECAPTION'] = 'Имя';
acymailing['NAME_MISSING'] = 'Пожалуйста, введите свое имя';
acymailing['EMAILCAPTION'] = 'Введите ваш адрес e-mail';
acymailing['VALID_EMAIL'] = 'Пожалуйста, введите корректный эл. адрес';
acymailing['ACCEPT_TERMS'] = 'Пожалуйста, ознакомьтесь с \'Условиями и положениями\'';
acymailing['CAPTCHA_MISSING'] = 'Пожалуйста, введите защитный код, отображаемый на картинке';
acymailing['NO_LIST_SELECTED'] = 'Пожалуйста, выберите рассылки, на которые вы хотите подписаться';

JBZoo.DEBUG = 0;
jQuery.migrateMute = false;

JBZoo.addVar("currencyList", {
    "default_cur": {
        "code": "default_cur",
        "value": 1,
        "name": "\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e",
        "format": {
            "symbol": "",
            "round_type": "none",
            "round_value": "2",
            "num_decimals": "2",
            "decimal_sep": ".",
            "thousands_sep": " ",
            "format_positive": "%v%s",
            "format_negative": "-%v%s"
        }
    },
    "%": {
        "code": "%",
        "value": 1,
        "name": "\u041f\u0440\u043e\u0446\u0435\u043d\u0442\u044b",
        "format": {
            "symbol": "%",
            "round_type": "none",
            "round_value": "2",
            "num_decimals": "2",
            "decimal_sep": ".",
            "thousands_sep": " ",
            "format_positive": "%v%s",
            "format_negative": "-%v%s"
        }
    },
    "rub": {
        "code": "rub",
        "value": 69.7972,
        "name": "\u0420\u0443\u0431\u043b\u044c \u0420\u0424",
        "format": {
            "symbol": "\u0440\u0443\u0431.",
            "round_type": "none",
            "round_value": 2,
            "num_decimals": 0,
            "decimal_sep": ".",
            "thousands_sep": " ",
            "format_positive": "%v %s",
            "format_negative": "-%v %s"
        }
    },
    "eur": {
        "code": "default_cur",
        "value": 1,
        "name": "\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e",
        "format": {
            "symbol": "",
            "round_type": "none",
            "round_value": "2",
            "num_decimals": "2",
            "decimal_sep": ".",
            "thousands_sep": " ",
            "format_positive": "%v%s",
            "format_negative": "-%v%s"
        }
    }
});

JBZoo.addVar("cartItems", {});

JBZoo.addVar("JBZOO_DIALOGBOX_OK", "Ok");

JBZoo.addVar("JBZOO_DIALOGBOX_CANCEL", "Cancel");

jQuery(function($) {
    $(".jbzoo .jsGoto").JBZooGoto({}, 0);
});

jQuery(function($) {
    $(".jbzoo select").JBZooSelect({}, 0);
});

jQuery(function($) {
    $("#jbmodule-bootstrap-118").JBZooHeightFix({}, 0);
});

jQuery(function($) {
    $("[data-toggle='tooltip']").tooltip({}, 0);
});

jQuery(function($) {
    $("#jbmodule-bootstrap-117").JBZooHeightFix({}, 0);
});

jQuery(function($) {
    $("#jbmodule-bootstrap-116").JBZooHeightFix({}, 0);
});

jQuery(function($) {
    $("#jbmodule-default-92").JBZooCartModule({
        "url_clean": "http:\/\/berezhno.pro\/?option=com_zoo&controller=basket&task=clear",
        "url_reload": "http:\/\/berezhno.pro\/?option=com_zoo&controller=basket&task=reloadModule&moduleId=92",
        "url_item_remove": "http:\/\/berezhno.pro\/?option=com_zoo&controller=basket&task=delete",
        "text_delete_confirm": "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0442\u043e\u0432\u0430\u0440 \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b?",
        "text_empty_confirm": "\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443?"
    }, 0);
});

/*JBZoo.DEBUG = 0;
jQuery.migrateMute = false;

JBZoo.addVar("currencyList", {"default_cur":{"code":"default_cur","value":1,"name":"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e","format":{"symbol":"","round_type":"none","round_value":"2","num_decimals":"2","decimal_sep":".","thousands_sep":" ","format_positive":"%v%s","format_negative":"-%v%s"}},"%":{"code":"%","value":1,"name":"\u041f\u0440\u043e\u0446\u0435\u043d\u0442\u044b","format":{"symbol":"%","round_type":"none","round_value":"2","num_decimals":"2","decimal_sep":".","thousands_sep":" ","format_positive":"%v%s","format_negative":"-%v%s"}},"rub":{"code":"rub","value":70.5699,"name":"\u0420\u0443\u0431\u043b\u044c \u0420\u0424","format":{"symbol":"\u0440\u0443\u0431.","round_type":"none","round_value":2,"num_decimals":0,"decimal_sep":".","thousands_sep":" ","format_positive":"%v %s","format_negative":"-%v %s"}},"eur":{"code":"default_cur","value":1,"name":"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e","format":{"symbol":"","round_type":"none","round_value":"2","num_decimals":"2","decimal_sep":".","thousands_sep":" ","format_positive":"%v%s","format_negative":"-%v%s"}}} );

JBZoo.addVar("cartItems", {"74":{"f2d59ba5-d57c-493c-a32a-4269e37f2c8b":"f2d59ba5-d57c-493c-a32a-4269e37f2c8b"}} );

JBZoo.addVar("JBZOO_DIALOGBOX_OK", "Ok" );

JBZoo.addVar("JBZOO_DIALOGBOX_CANCEL", "Cancel" );

jQuery(function($){ $(".jbzoo .jsGoto").JBZooGoto({}, 0); });

jQuery(function($){ $(".jbzoo select").JBZooSelect({}, 0); });

jQuery(function($){ $("[data-toggle='tooltip']").tooltip({}, 0); });



jQuery(function($){ $("#jbmodule-default-92").JBZooCartModule({"url_clean":"http:\/\/berezhno.pro\/?option=com_zoo&controller=basket&task=clear","url_reload":"http:\/\/berezhno.pro\/?option=com_zoo&controller=basket&task=reloadModule&moduleId=92","url_item_remove":"http:\/\/berezhno.pro\/?option=com_zoo&controller=basket&task=delete","text_delete_confirm":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0442\u043e\u0432\u0430\u0440 \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b?","text_empty_confirm":"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443?"}, 0); });
*/
jQuery(function($){ $(".jbzoo .items, .jbzoo .subcategories, .jbzoo .jbcart-payment").JBZooHeightFix({"element":".item-column"}, 0); });
jQuery(function($){ $("a.jbimage-link[rel=jbimage-popup], a.jbimage-gallery").fancybox({"helpers":{"title":{"type":"outside"},"buttons":{"position":"top"},"thumbs":{"width":80,"height":80},"overlay":{"locked":false}}}, 0); });

    

jQuery(document).ready(function($) {
    jQuery('#sku').val(jQuery('.jbprice-sku').html());
    if ($( window ).width() > 767) {
        if ($('header>.container').find('.navbar').length){
            $('header').append($('.navbar'));
        } 
       $('.navbar').sticky({
            topSpacing: 0,
            zIndex: 300,
            className: 'border',
            wrapperClassName: 'sticky',
        }); 
    } else {
        $('.navbar').removeAttr('style');
        $('.navbar').unstick();
        if ($('.navbar').parent().is('.sticky')){    
           $('.navbar').unwrap();
        }
        $('.navbar').insertAfter($('.logo'));
    }
    window.addEventListener('resize', function() {
        if ($( window ).width() > 767) {
            if ($('header>.container').find('.navbar').length){
                $('header').append($('.navbar'));
            }   
            if (!($('header').find('.sticky').length)){    
                $('.navbar').sticky({
                    topSpacing: 0,
                    zIndex: 300,
                    className: 'border',
                    wrapperClassName: 'sticky',
                });  
            }
        } else {
            $('.navbar').removeAttr('style'); 
            $('.navbar').unstick();
            $('.navbar').insertAfter($('.logo'));
        }
    }, false);     
});


RSFormPro.Ajax.URL = "\/component\/rsform\/?task=ajaxValidate";

rsfp_addEvent(window, 'load', function() {
    var form = rsfp_getForm(4);
    var submitElement = RSFormPro.getElementByType(4, 'submit');
    for (i = 0; i < submitElement.length; i++) {
        if (RSFormProUtils.hasClass(submitElement[i], 'rsform-submit-button')) {
            RSFormProUtils.addEvent(submitElement[i], 'click', (function(event) {
                event.preventDefault();
                RSClickedSubmitElement = this;
                for (j = 0; j < submitElement.length; j++) {
                    submitElement[j].setAttribute('data-disableonsubmit', '1');
                }
                ajaxValidation(form, undefined, ' has-error');
            }));
        }
    }
});

ajaxExtraValidationScript[4] = function(task, formId, data) {
    var formComponents = {};
    formComponents[9] = 'name';
    formComponents[11] = 'email';
    ajaxDisplayValidationErrors(formComponents, task, formId, data);
};

var loading = false;
$(window).scroll(function(){
   if(((($(window).scrollTop()+$(window).height())+100)>=$(document).height()) && ($('.jbzoo-view-category').length != 0)){
      if(loading == false){
         loading = true;
         $.get($('.jbzoo-view-category').attr('data-resource'), function(loaded){
            $('.jbzoo-view-category .items .row').append(loaded);
            loading = false;
         });
      }
   }
});

/*Google Map*/

  function initMap() {
    var lnk = $('#world-map').data().json;
    
    function getJsonData(){
        var data = $.ajax({
            url: lnk,
            async: false});
        return $.parseJSON(data.responseText);
    }  

    var dataMap = getJsonData();

    var mapContainer = document.getElementById('world-map')
    if(!mapContainer) { // || mapContainer.childElementCount
        return;
    }
    var map = new google.maps.Map(mapContainer, {
      zoom: 10,
      center: dataMap.coords,
    });

    setMarkers(map, dataMap.shops);
  }

  function setMarkers(map, shops) {
    var markers = [];
    var symbol = {
        path: 'M10,1.9c4.5,0,8.1,3.6,8.1,8.1c0,4.5-3.6,8.1-8.1,8.1c-4.5,0-8.1-3.6-8.1-8.1C1.9,5.5,5.5,1.9,10,1.9 M10,0 C4.5,0,0,4.5,0,10s4.5,10,10,10s10-4.5,10-10S15.5,0,10,0z M10,6.8c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2s3.2-1.4,3.2-3.2 S11.8,6.8,10,6.8z',
        strokeColor: '#124877',
        fillColor: '#124877',
        fillOpacity: 1,
        anchor: new google.maps.Point(0, 20)
    };
        shops.forEach(function(shop) {
            var contentString;
            var optionString = [];
            var shopsString = [];
            var addressEl = '',
                timeEl = '',
                phoneEl = '',
                shopsEl = '',
                optionsEl = '';              


            if (shop.address) {
                addressEl = '<li class="map-popup__list-item"><span>Адрес:</span><span>'+shop.address+'</span></li>';
            }

            if (shop.phone) {
                phoneEl = '<li class="map-popup__list-item"><span>Телефон:</span><span>'+shop.phone+'</span></li>';
            }

            if (shop.time) {
                timeEl = '<li class="map-popup__list-item"><span>Время работы:</span><span>'+shop.time+'</span></li>';
            }

            if (shop.shops) {    
                shop.shops.forEach(function(shops){
                    var arr = $.map(shops, function(el) { return el });
                    shopsString += '<li><a target="_blank" href="'+arr[1]+'""><span class="link--white">'+' - '+arr[0]+'</a></span></li>';
                });                
            }       
            

            contentString =
               '<span class="map-popup__link"><span class="">'+shop.name+'</span></span>'+
               '<ul class="map-popup__list">'+addressEl+phoneEl+timeEl+shopsString+'</ul>';

            var marker = new google.maps.Marker({
                position: shop.coords,
                map: map,
                icon: symbol,
                title: shop.name
            });

            markers.push(marker);

            var button = document.querySelector('[data-id="'+shop.id+'"]');

            if (button) {

                button.addEventListener('click', function() {
                    google.maps.event.trigger(marker, 'click');

                    var scrollY = marker.map.__gm.$.offsetTop - 65; 
                    $('html, body').animate({
                        scrollTop: scrollY
                    }, 500);
                });
            }
            attachMessage(map, marker, contentString, markers);
        });

        centerMap(map, markers);
  }
 
  var activeInfoWindow;

  function attachMessage(map, marker, message, markers) {
    
    var infowindow = new google.maps.InfoWindow({
      content: message
    });

    marker.addListener('click', function() { 

      activeInfoWindow&&activeInfoWindow.close();

      var latlng = new google.maps.LatLng(this.position.lat(), this.position.lng());

      infowindow.open(marker.get('map'), marker);

      activeInfoWindow = infowindow;

      map.panTo(latlng);
      map.panBy(0, -70);    
    });
  }

  function centerMap(map, markers) {
    var markersBounds = new google.maps.LatLngBounds();

    if (markers.length > 0) {
        $.each(markers, function() {
            var markerCoords = new google.maps.LatLng(this.position.lat(), this.position.lng());
            markersBounds.extend(markerCoords);
        });

        if (markers.length > 1) {
                map.fitBounds(markersBounds);
                // map.panBy(0, 80);
                // map.setZoom(map.getZoom() - 1);

        } else {
            map.panTo(markersBounds.getCenter());
            map.setZoom(13);
        }
    } else {
        if (map.center.lat() + map.center.lng() === 0) {
            map.setCenter(new google.maps.LatLng(58.6555915313906, 43.27900886535656));
            map.setZoom(5);
        }
    }
  }
