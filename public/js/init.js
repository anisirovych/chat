
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
        searchPosition: "bottom"
    });
});


