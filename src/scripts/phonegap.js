document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
    StatusBar.overlaysWebView(true);
    StatusBar.styleDefault();
    //navigator.splashscreen.hide();
}

/**  back **/
function systemDesignerBack() {
    document.location.href = runtime.require('storage').get('system-designer-last-context');
}