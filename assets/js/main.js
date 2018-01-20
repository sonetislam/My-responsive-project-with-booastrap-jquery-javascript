$(document).ready(function () {
    $("html").niceScroll({
        cursorwidth:12,
        cursorheight:200,
        cursorborder:'none',
        cursorcolor:'#00A0F3',
        autohidemode:true,
        cursorborderradius:5,
        background:"rgba(20,20,20,0.3)",
        cursoropacitymin:0.4,
        cursoropacitymax: 1,
        autohidemode:'leave',
        zindex: "auto",
        scrollspeed: 60,
        mousescrollstep: 10 * 7,
        touchbehavior: false,
        background: "#DE5347",
        cursorminheight: 102,
        railalign: "left", //which site u setup your scrool left or right.if u give left then show scrool left site

    });

});

// Counterdown

$(document).ready(function () {
    $('.countdown-content').appear(function () {
        $('.timer').countTo();

    })

});

// counterchart

$(document).ready(function () {
   $('.skill-content').appear(function () {

       $('.skills').percentcircle({
           animate : true,
           diameter : 12,
           guage: 3,
           coverBg: '#DA5045',
           bgColor: '#DA5045',
           fillColor: '#0078D7',
           percentSize: '2px',
           percentWeight: '700',
           cir:{
               'position': 'relative',
               'text-align': 'center',
               'left' : '0px',


           }
       });
   })

});



