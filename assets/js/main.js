// var androi = document.querySelector('.androi')
// var appstore = document.querySelector('.appstore')

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