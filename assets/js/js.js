jQuery(document).ready(function () {

    $.simpleTicker($("#ticker-fade"), {

        speed: 1000,
        delay: 10000,
        easing: 'swing',
        effectType: 'fade'
    })
});

// countdown
$(document).ready(function () {
    $('.countdown').final_countdown({
        start: '1362139200',
        end: '1388461320',
        now: '1387461319',
        seconds: {
            borderColor: '#7995D5',
            borderWidth: '6'
        },
        minutes: {
            borderColor: '#ACC742',
            borderWidth: '6'
        },
        hours: {
            borderColor: '#ECEFCB',
            borderWidth: '6'
        },
        days: {
            borderColor: '#FF9900',
            borderWidth: '6'
        }
    }, function () {
//alert('تخفیفات ویژه به مناسبت عید مبعث به پایان رسیده است');
    });
});

//random topic ticker
$(document).ready(function () {
    $('#vertical-ticker').totemticker({
        row_height: '87px',
        next: '#ticker-next',
        previous: '#ticker-previous',
        stop: '#stop',
        start: '#start',
        max_items: 4,
        mousestop: true,
    });
});

$(document).ready(function () {
    $('[data-toggle= "tooltip"]').tooltip();
});

//bootslidemenu

$(document).ready(function () {
    $('#slide-nav').BootSideMenu({

        // 'left' or 'right'
        side: "right",

        // animation speed
        duration: 500,

        // restore last menu status on page refresh
        remember: true,

        // auto close
        autoClose: true,

        // push the whole page
        pushBody: false,

        // close on click
        closeOnClick: true,

        // width

        // icons
        icons: {
            left: 'glyphicon glyphicon-chevron-left',
            right: 'glyphicon glyphicon-chevron-right',
            down: 'glyphicon glyphicon-chevron-down'
        },

        // 'dracula', 'darkblue', 'zenburn', 'pinklady', 'somebook'
        theme: '',

    });
});
//owl slider related post

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        rtl: true,
        loop: true,
        margin: 10,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })

});

//show hidden password
$(document).ready(function () {


    $('#password').password('hide');


})
