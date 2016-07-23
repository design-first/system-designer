document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
    StatusBar.styleDefault();
}

/**  back **/
function systemDesignerBack() {
    var mess = typeof messages !== 'undefined' ? messages : runtime.require('designer').messages(),
        ref = typeof lastPage !== 'undefined' ? lastPage: runtime.require('designer').lastPage();

    document.location.href = ref + '?messages=' + encodeURIComponent(JSON.stringify(mess));
}