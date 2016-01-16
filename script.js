window['__onGCastApiAvailable'] = function(loaded, errorInfo) {
  if (loaded) {
    debugger;initializeCastApi();
  } else {
    console.log(errorInfo);
  }
}

function initializeCastApi() {
  var sessionRequest = new chrome.cast.SessionRequest(chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID);
  var apiConfig = new chrome.cast.ApiConfig(sessionRequest,
    sessionListener,
    receiverListener);
  chrome.cast.initialize(apiConfig, onInitSuccess, onError);
};

function onInitSuccess(){
    console.log(arguments);
}

function onError(){
    console.log(arguments);
}