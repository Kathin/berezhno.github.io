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

 // The following example creates complex markers to indicate beaches near
  // Sydney, NSW, Australia. Note that the anchor is set to (0,32) to correspond
  // to the base of the flagpole.
  function initMap() {
    var map = new google.maps.Map(document.getElementById('world-map'), {
      zoom: 12,
      center: {lat: 55.6340, lng: 37.4400}
    });

    setMarkers(map);
  }

  // Data for the markers consisting of a name, a LatLng and a zIndex for the
  // order in which these markers should display on top of each other.
  var beaches = [
    ['Мебель Park', 55.634027, 37.440074, 1],
    /*['Coogee Beach', -33.923036, 151.259052, 5],
    ['Cronulla Beach', -34.028249, 151.157507, 3],
    ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
    ['Maroubra Beach', -33.950198, 151.259302, 1]*/
  ];

  function setMarkers(map) {
    // Adds markers to the map.

    // Marker sizes are expressed as a Size of X,Y where the origin of the image
    // (0,0) is located in the top left of the image.

    // Origins, anchor positions and coordinates of the marker increase in the X
    // direction to the right and in the Y direction down.
    var image = {
      url: '',
      // This marker is 20 pixels wide by 32 pixels high.
      size: new google.maps.Size(20, 32),
      // The origin for this image is (0, 0).
      origin: new google.maps.Point(0, 0),
      // The anchor for this image is the base of the flagpole at (0, 32).
      anchor: new google.maps.Point(0, 32)
    };
    // Shapes define the clickable region of the icon. The type defines an HTML
    // <area> element 'poly' which traces out a polygon as a series of X,Y points.
    // The final coordinate closes the poly by connecting to the first coordinate.
    var shape = {
      coords: [1, 1, 1, 20, 18, 20, 18, 1],
      type: 'poly'
    };
    var messages = ['<b>Магазин мебели  BEREZHNO</b><br> корпус А, 2 этаж помещение 239а'/*, 'is', 'the', 'secret', 'message'*/];
    for (var i = 0; i < beaches.length; i++) {
      var beach = beaches[i];
      var marker = new google.maps.Marker({
        position: {lat: beach[1], lng: beach[2]},
        map: map,
        //icon: image,
        //animation: google.maps.Animation.DROP,
        //shape: shape,
        title: beach[0],
        zIndex: beach[3]
      });
      attachMessage(marker,  messages[i]);
    }
  }

  function attachMessage(marker, message) {
    var infowindow = new google.maps.InfoWindow({
      content: message
    });

    marker.addListener('click', function() {
      infowindow.open(marker.get('map'), marker);      
    });
  }
