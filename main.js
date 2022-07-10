let front_title = $('.front-title')
let back_title = $('.back-title')


front_title.hover(function () {
    let thisIdx = $(this).index()
    $(back_title[thisIdx]).addClass('active')
}, function() {
    $(back_title).removeClass('active')
});
