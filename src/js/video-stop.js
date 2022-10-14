function stopVideo(element) {
  // getting every iframe from the body
  var iframes = element.querySelectorAll('iframe');
  // reinitializing the values of the src attribute of every iframe to stop the YouTube video.
  for (let i = 0; i < iframes.length; i++) {
    if (iframes[i] !== null) {
      var temp = iframes[i].src;
      iframes[i].src = temp;
    }
  }
}
