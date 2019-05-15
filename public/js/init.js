// Preloader settings
document.body.onload = function() {
    setTimeout(() => {
        var preloader = document.getElementById('preloader-page');
        if ( !preloader.classList.contains('done') ) {
            preloader.classList.add('done');
        }
    }, 1000);
}

const elem = document.querySelector('.sidenav');
const instance = M.Sidenav.init(elem, {

});


// Or with jQuery
$(document).ready(function() {
    $('.sidenav').sidenav();

    $('#message').emojioneArea({
        pickerPosition: "top",
        tonerStyle: "bullet",
        standalone: false,
        filtersPosition: "bottom",
        searchPosition: "bottom",
        shortcuts: false

    });
});



