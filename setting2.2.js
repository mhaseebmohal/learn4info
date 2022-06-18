/* rating widget */
//<![CDATA[
(function(d, t, e, m){ 
    // Async Rating-Widget initialization.
    window.RW_Async_Init = function(){          
        RW.init({
            huid: "484262",
            uid: "7e794e29e2f7d8a0e6db4315d73a9750",
            options: { "style": "oxygen" } 
        });
        RW.render();
    };
        // Append Rating-Widget JavaScript library.
    var rw, s = d.getElementsByTagName(e)[0], id = "rw-js",
        l = d.location, ck = "Y" + t.getFullYear() + 
        "M" + t.getMonth() + "D" + t.getDate(), p = l.protocol,
        f = ((l.search.indexOf("DBG=") > -1) ? "" : ".min"),
        a = ("https:" == p ? "secure." + m + "js/" : "js." + m);
    if (d.getElementById(id)) return;              
    rw = d.createElement(e);
    rw.id = id; rw.async = true; rw.type = "text/javascript";
    rw.src = p + "//" + a + "external" + f + ".js?ck=" + ck;
    s.parentNode.insertBefore(rw, s);
    }(document, new Date(), "script", "rating-widget.com/"));
//]]>

const element = document.getElementById(&quot;topad12&quot;); document.getElementById(&quot;topad1&quot;).innerHTML = element.innerHTML; const elementb = document.getElementById(&quot;bottomad12&quot;); document.getElementById(&quot;bottomad1&quot;).innerHTML = elementb.innerHTML; </script> <script> function insertAfter(Ads, targetAds) { var inarticlead = targetAds.parentNode; if (inarticlead.lastChild == targetAds) { inarticlead.appendChild(Ads); } else { inarticlead.insertBefore(Ads, targetAds.nextSibling); } } var targetAds = document.getElementById(&quot;post-body&quot;); var inarticleAd1 = document.getElementById(&quot;after-paragraph33&quot;); var showinarticleAd1 = targetAds.getElementsByTagName(&quot;p&quot;); if (showinarticleAd1.length &gt; 0) { insertAfter(inarticleAd1, showinarticleAd1[3]); } var inarticleAd2 = document.getElementById(&quot;after-paragraph77&quot;); var showinarticleAd2 = targetAds.getElementsByTagName(&quot;h2&quot;); if (showinarticleAd2.length &gt; 0) { insertAfter(inarticleAd2, showinarticleAd2[2]); } var inarticleAd3 = document.getElementById(&quot;after-paragraph66&quot;); var showinarticleAd3 = targetAds.getElementsByTagName(&quot;li&quot;); if (showinarticleAd3.length &gt; 0) { insertAfter(inarticleAd3, showinarticleAd3[0]); }
