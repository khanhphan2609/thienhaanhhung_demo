// var androi = document.querySelector('.androi')
// var appstore = document.querySelector('.appstore')
$(document).ready(function() {
    $(document).on('click', '.btn-commingsoon', function() {
        ClickBtnCommingSoon();
    });

    $(document).on('click', '.modal-submit', function() {
        ClickBtnSubmit();
    });

    // Dialog
    $(document).on('click', '.btn-dialog', function() {
        DialogBtn();
    });
    $(document).on('click', '.btn-dialog-play', function() {
        DialogVideo();
    });
});

function myfunction() {
    if (navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/Windows Phone/i)) {
        var androi = document.querySelector('.androi')
        androi.classList.add('hide-mobile')
    } else {
        var appstore = document.querySelector('.appstore')
        appstore.classList.add('hide-mobile')
    }
}
myfunction();

// SweetAlerts
function ClickBtnCommingSoon() {
    swal("Comming Soon...");
}
function ClickBtnSubmit() {
    var email = $('#email').val();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
        swal({
            title: 'Error',
            text: 'Please enter an email address',
            icon: 'error',
            button: 'OK',
        });
    } else if (emailRegex.test(email)) {
        swal({
            title: 'Success',
            text: email,
            icon: 'success',
            button: 'OK',
        });
    } else {
        swal({
            title: 'Error',
            text: 'Please enter a valid email address',
            icon: 'error',
            button: 'OK',
        });
    }
}

// Dialogs
function DialogBtn() {
    $('#dialog').modal('toggle');
};

function DialogVideo() {
    $('#dialog_video').modal('toggle');
};