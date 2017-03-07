document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
    StatusBar.hide();
}

/**  android **/
document.addEventListener('backbutton', systemDesignerBack, false);
document.addEventListener('menubutton', onMenuButton, false);
function onMenuButton() {
    document.location.href = 'index.html?messages=' + encodeURIComponent(JSON.stringify(mess));
}

/**  back **/
function systemDesignerBack() {
    var mess = typeof messages !== 'undefined' ? messages : runtime.require('designer').messages(),
        ref = typeof lastPage !== 'undefined' ? lastPage : runtime.require('designer').lastPage();

    document.location.href = ref + '?messages=' + encodeURIComponent(JSON.stringify(mess));
}