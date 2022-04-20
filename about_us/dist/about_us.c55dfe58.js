AOS.init(); // AOS initiation
AOS.init({
    // Global settings:
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120,
    delay: 0,
    duration: 300,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom'
});
$('.aos-init').removeClass('aos-animate'); // remove ALL classes which triggers animation in document
new fullpage('#fullpage', {
    //.............................................
    //....Your other options....
    //..............................................
    anchors: [
        'page1',
        'page2',
        'page3',
        'page4',
        'page5',
        'page6',
        'page7',
        'page8',
        'page9'
    ],
    onLeave: function() {
        jQuery('.section [data-aos]').removeClass("aos-animate");
    },
    onSlideLeave: function() {
        jQuery('.slide [data-aos]').removeClass("aos-animate");
    },
    afterSlideLoad: function() {
        jQuery('.slide.active [data-aos]').addClass("aos-animate");
    },
    afterLoad: function() {
        jQuery('.section.active [data-aos]').addClass("aos-animate");
    //jQuery('.fp-table.active .aos-init').addClass('aos-animate');
    }
});
$(document).on('click', '#home', function() {
    fullpage_api.moveTo('page1');
});
$(document).on('click', '#about_us', function() {
    fullpage_api.moveTo('page2');
});
$(document).on('click', '#about_scooter', function() {
    fullpage_api.moveTo('page3');
});
$(document).on('click', '#avatar', function() {
    fullpage_api.moveTo('page4');
});
$(document).on('click', '#booking', function() {
    fullpage_api.moveTo('page5');
});
$(document).on('click', '#leaderboard', function() {
    fullpage_api.moveTo('page6');
});
$(document).on('click', '#location', function() {
    fullpage_api.moveTo('page7');
});
$(document).on('click', '#statistical', function() {
    fullpage_api.moveTo('page8');
});
$(document).on('click', '#bonus', function() {
    fullpage_api.moveTo('page9');
});
$('.ui.dropdown').dropdown();

//# sourceMappingURL=about_us.c55dfe58.js.map
