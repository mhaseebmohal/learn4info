/* rating widget */
//<![CDATA[
(function(d, t, e, m){
   // Async Rating-Widget initialization.
    window.RW_Async_Init = function(){        
        RW.init({
            huid: "484553",
            uid: "eb0c9aba272d6d497fb335829f3426c5",
            source: "website",
            options: {
                "advanced": {
                    "font": {
                        "hover": {
                            "color": "#493C3D"
                        },
                        "size": "24px",
                        "color": "#493C3D"
                    },
                    "text": {
                        "rateAwful": "Need Improvement"
                    }
                },
                "size": "large",
                "label": {
                    "background": "#CEC5C6"
                },
                "style": "flat_red",
                "isDummy": false
            } 
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
