function labnolIframe(div) {
    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/' + div.dataset.id + '?autoplay=1&rel=0');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '1');
    iframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');
    div.parentNode.replaceChild(iframe, div);
  }

  function initYouTubeVideos() {
    var playerElements = document.getElementsByClassName('youtube-player');
    for (var n = 0; n < playerElements.length; n++) {
      var videoId = playerElements[n].dataset.id;
      var div = document.createElement('div');
      div.setAttribute('data-id', videoId);
      var thumbNode = document.createElement('img');
      thumbNode.src = '//i.ytimg.com/vi/ID/hqdefault.jpg'.replace('ID', videoId);
      div.appendChild(thumbNode);
      var playButton = document.createElement('div');
      playButton.setAttribute('class', 'play');
      div.appendChild(playButton);
      div.onclick = function () {
        labnolIframe(this);
      };
      playerElements[n].appendChild(div);
    }
  }

  document.addEventListener('DOMContentLoaded', initYouTubeVideos);



const element = document.getElementById(&quot;topad12&quot;);
document.getElementById(&quot;topad1&quot;).innerHTML = element.innerHTML;     
  
const elementb = document.getElementById(&quot;bottomad12&quot;);
document.getElementById(&quot;bottomad1&quot;).innerHTML = elementb.innerHTML;

  
  
function insertAfter(Ads, targetAds) {
    var inarticlead = targetAds.parentNode;
    if (inarticlead.lastChild == targetAds) {
        inarticlead.appendChild(Ads);
    } else {
        inarticlead.insertBefore(Ads, targetAds.nextSibling);
    } 
}
var targetAds = document.getElementById(&quot;post-body&quot;);
var inarticleAd1 = document.getElementById(&quot;after-paragraph33&quot;);
var showinarticleAd1 = targetAds.getElementsByTagName(&quot;p&quot;);
if (showinarticleAd1.length &gt; 0) {
    insertAfter(inarticleAd1, showinarticleAd1[3]);
}

var inarticleAd2 = document.getElementById(&quot;after-paragraph77&quot;);
var showinarticleAd2 = targetAds.getElementsByTagName(&quot;h2&quot;);
if (showinarticleAd2.length &gt; 0) {
    insertAfter(inarticleAd2, showinarticleAd2[2]);
}
    var inarticleAd3 = document.getElementById(&quot;after-paragraph66&quot;);
var showinarticleAd3 = targetAds.getElementsByTagName(&quot;li&quot;);
if (showinarticleAd3.length &gt; 0) {
    insertAfter(inarticleAd3, showinarticleAd3[0]);
}
