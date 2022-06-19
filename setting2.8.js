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

/* recent list */

function recentpostslist(json) {
 document.write('<b><ul style="border: 1px solid #bd9fbd44;text-align: justify;padding: 12px;"><div><span style="background-color: #33fb1b; color: #0b44e7;">You May Like</span></div>');
 for (var i = 0; i < json.feed.entry.length; i++)
 {
    for (var j = 0; j < json.feed.entry[i].link.length; j++) {
      if (json.feed.entry[i].link[j].rel == 'alternate') {
        break;
      }
    }
var entryUrl = "'" + json.feed.entry[i].link[j].href + "'";//bs
var entryTitle = json.feed.entry[i].title.$t;

var item = "<li>" + "<a href="+ entryUrl + '" target="_blank">' + entryTitle + "</a> </li>";
 document.write(item);
 }
 document.write('</ul></b>');
 }


//]]>
