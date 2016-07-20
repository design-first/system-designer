var cordova = {}; // TOODO remove

document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
    StatusBar.overlaysWebView(false); // TODO check right value
    StatusBar.styleDefault();
    //navigator.splashscreen.hide();
}

/**  back **/
function systemDesignerBack() {
    var context = 'index.html',
        mess = typeof messages !== 'undefined' ? messages : runtime.require('designer').messages(),
        urlParams = [],
        params = {};

    urlParams = document.location.href.split('?');

    if (urlParams.length > 1) {
        urlParams = urlParams[1].split('&');
        urlParams.forEach(function (urlParam) {
            var name = '',
                value = '';

            name = urlParam.split('=')[0].trim();
            value = urlParam.split('=')[1].trim();

            params[name] = decodeURIComponent(value);
        });
    }

    document.location.href = params.ref + '?messages=' + encodeURIComponent(JSON.stringify(mess));
}