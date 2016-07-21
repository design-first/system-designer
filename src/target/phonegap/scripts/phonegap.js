var cordova = {}; // TOODO remove

document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
    StatusBar.overlaysWebView(true); // TODO check right value
    StatusBar.styleDefault();
    //navigator.splashscreen.hide();
}

/**  back **/
function systemDesignerBack() {
    var mess = typeof messages !== 'undefined' ? messages : runtime.require('designer').messages(),
        ref = typeof lastPage !== 'undefined' ? lastPage: runtime.require('designer').lastPage();

    document.location.href = ref + '?messages=' + encodeURIComponent(JSON.stringify(mess));
}