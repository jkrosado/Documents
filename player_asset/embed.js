var _____WB$wombat$assign$function_____ = function(name) {
    return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name];
};
if (!self.__WB_pmw) {
    self.__WB_pmw = function(obj) {
        this.__WB_source = obj;
        return this;
    }
} {
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");

    function EMBa(a) {
        throw a;
    }
    var EMBb = void 0,
        EMBc = !0,
        EMBd = null,
        EMBe = !1,
        EMB, EMBf = this;

    function EMBg(a) {
        for (var a = a.split("."), b = EMBf, c; c = a.shift();)
            if (b[c] != EMBd) b = b[c];
            else return EMBd;
        return b
    }

    function EMBh(a) {
        a.getInstance = function() {
            return a.Ha ? a.Ha : a.Ha = new a
        }
    }

    function EMBaa(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    }

    function EMBi(a) {
        return a !== EMBb
    }

    function EMBba(a) {
        return "array" == EMBaa(a)
    }

    function EMBca(a) {
        var b = EMBaa(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function EMBj(a) {
        return "string" == typeof a
    }

    function EMBda(a) {
        var b = typeof a;
        return "object" == b && a != EMBd || "function" == b
    }
    var EMBea = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36),
        EMBfa = 0;

    function EMBga(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function EMBha(a, b, c) {
        a || EMBa(Error());
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function EMBk(a, b, c) {
        EMBk = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? EMBga : EMBha;
        return EMBk.apply(EMBd, arguments)
    }

    function EMBia(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var b = Array.prototype.slice.call(arguments);
            b.unshift.apply(b, c);
            return a.apply(this, b)
        }
    }
    var EMBl = Date.now || function() {
        return +new Date
    };

    function EMBm(a, b) {
        var c = a.split("."),
            d = EMBf;
        !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
        for (var e; c.length && (e = c.shift());) !c.length && EMBi(b) ? d[e] = b : d = d[e] ? d[e] : d[e] = {}
    }

    function EMBn(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Cd = b.prototype;
        a.prototype = new c
    }
    Function.prototype.bind = Function.prototype.bind || function(a, b) {
        if (1 < arguments.length) {
            var c = Array.prototype.slice.call(arguments, 1);
            c.unshift(this, a);
            return EMBk.apply(EMBd, c)
        }
        return EMBk(this, a)
    };

    function EMBo(a) {
        if (!EMBja.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(EMBka, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(EMBla, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(EMBma, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(EMBna, "&quot;"));
        return a
    }
    var EMBka = /&/g,
        EMBla = /</g,
        EMBma = />/g,
        EMBna = /\"/g,
        EMBja = /[&<>\"]/;

    function EMBoa(a) {
        for (var b = 0, c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c), b %= 4294967296;
        return b
    }

    function EMBpa(a) {
        return ("" + a).replace(/\-([a-z])/g, function(a, c) {
            return c.toUpperCase()
        })
    };
    var EMBp = Array.prototype,
        EMBq = EMBp.indexOf ? function(a, b, c) {
            return EMBp.indexOf.call(a, b, c)
        } : function(a, b, c) {
            c = c == EMBd ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (EMBj(a)) return !EMBj(b) || 1 != b.length ? -1 : a.indexOf(b, c);
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        EMBr = EMBp.forEach ? function(a, b, c) {
            EMBp.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = EMBj(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        EMBqa = EMBp.filter ? function(a, b, c) {
            return EMBp.filter.call(a, b, c)
        } : function(a,
            b, c) {
            for (var d = a.length, e = [], f = 0, g = EMBj(a) ? a.split("") : a, h = 0; h < d; h++)
                if (h in g) {
                    var i = g[h];
                    b.call(c, i, h, a) && (e[f++] = i)
                } return e
        };

    function EMBra(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function EMBsa(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c],
                e;
            if (EMBba(d) || (e = EMBca(d)) && d.hasOwnProperty("callee")) a.push.apply(a, d);
            else if (e)
                for (var f = a.length, g = d.length, h = 0; h < g; h++) a[f + h] = d[h];
            else a.push(d)
        }
    }

    function EMBta(a, b, c, d) {
        EMBp.splice.apply(a, EMBua(arguments, 1))
    }

    function EMBua(a, b, c) {
        return 2 >= arguments.length ? EMBp.slice.call(a, b) : EMBp.slice.call(a, b, c)
    };

    function EMBs(a, b) {
        this.x = EMBi(a) ? a : 0;
        this.y = EMBi(b) ? b : 0
    }
    EMBs.prototype.a = function() {
        return new EMBs(this.x, this.y)
    };

    function EMBva(a, b) {
        return new EMBs(a.x - b.x, a.y - b.y)
    };

    function EMBt(a, b) {
        this.width = a;
        this.height = b
    }
    EMBt.prototype.a = function() {
        return new EMBt(this.width, this.height)
    };
    EMBt.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    EMBt.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function EMBwa(a, b) {
        for (var c in a) b.call(EMBb, a[c], c, a)
    }

    function EMBxa(a) {
        for (var b in a) return a[b]
    }

    function EMBya(a, b, c) {
        for (var d in a)
            if (b.call(c, a[d], d, a)) return d
    }

    function EMBza(a, b) {
        var c = EMBya(a, b, EMBb);
        return c && a[c]
    }

    function EMBAa(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    }
    var EMBBa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function EMBCa(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < EMBBa.length; f++) c = EMBBa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var EMBu, EMBDa, EMBEa, EMBFa, EMBGa, EMBHa, EMBIa;

    function EMBJa() {
        return EMBf.navigator ? EMBf.navigator.userAgent : EMBd
    }

    function EMBKa() {
        return EMBf.navigator
    }
    EMBGa = EMBFa = EMBEa = EMBDa = EMBu = EMBe;
    var EMBLa;
    if (EMBLa = EMBJa()) {
        var EMBMa = EMBKa();
        EMBu = 0 == EMBLa.indexOf("Opera");
        EMBDa = !EMBu && -1 != EMBLa.indexOf("MSIE");
        EMBFa = (EMBEa = !EMBu && -1 != EMBLa.indexOf("WebKit")) && -1 != EMBLa.indexOf("Mobile");
        EMBGa = !EMBu && !EMBEa && "Gecko" == EMBMa.product
    }
    var EMBNa = EMBu,
        EMBv = EMBDa,
        EMBw = EMBGa,
        EMBx = EMBEa,
        EMBOa = EMBFa,
        EMBPa = EMBKa(),
        EMBQa = EMBPa && EMBPa.platform || "";
    EMBHa = -1 != EMBQa.indexOf("Mac");
    EMBIa = -1 != EMBQa.indexOf("Win");
    var EMBRa = !!EMBKa() && -1 != (EMBKa().appVersion || "").indexOf("X11"),
        EMBSa;
    a: {
        var EMBTa = "",
            EMBUa;
        if (EMBNa && EMBf.opera) var EMBVa = EMBf.opera.version,
            EMBTa = "function" == typeof EMBVa ? EMBVa() : EMBVa;
        else if (EMBw ? EMBUa = /rv\:([^\);]+)(\)|;)/ : EMBv ? EMBUa = /MSIE\s+([^\);]+)(\)|;)/ : EMBx && (EMBUa = /WebKit\/(\S+)/), EMBUa) var EMBWa = EMBUa.exec(EMBJa()),
            EMBTa = EMBWa ? EMBWa[1] : "";
        if (EMBv) {
            var EMBXa, EMBYa = EMBf.document;
            EMBXa = EMBYa ? EMBYa.documentMode : EMBb;
            if (EMBXa > parseFloat(EMBTa)) {
                EMBSa = "" + EMBXa;
                break a
            }
        }
        EMBSa = EMBTa
    }
    var EMBZa = EMBSa,
        EMB_a = {};

    function EMBy(a) {
        var b;
        if (!(b = EMB_a[a])) {
            b = 0;
            for (var c = ("" + EMBZa).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = ("" + a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var g = c[f] || "",
                    h = d[f] || "",
                    i = RegExp("(\\d*)(\\D*)", "g"),
                    j = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var k = i.exec(g) || ["", "", ""],
                        l = j.exec(h) || ["", "", ""];
                    if (0 == k[0].length && 0 == l[0].length) break;
                    b = ((0 == k[1].length ? 0 : parseInt(k[1], 10)) < (0 == l[1].length ? 0 : parseInt(l[1], 10)) ? -1 : (0 == k[1].length ? 0 : parseInt(k[1],
                        10)) > (0 == l[1].length ? 0 : parseInt(l[1], 10)) ? 1 : 0) || ((0 == k[2].length) < (0 == l[2].length) ? -1 : (0 == k[2].length) > (0 == l[2].length) ? 1 : 0) || (k[2] < l[2] ? -1 : k[2] > l[2] ? 1 : 0)
                } while (0 == b)
            }
            b = EMB_a[a] = 0 <= b
        }
        return b
    }
    var EMB0a = {};

    function EMB1a(a) {
        return EMB0a[a] || (EMB0a[a] = EMBv && !!document.documentMode && document.documentMode >= a)
    };
    var EMB2a, EMB3a = !EMBv || EMB1a(9);
    !EMBw && !EMBv || EMBv && EMB1a(9) || EMBw && EMBy("1.9.1");
    var EMB4a = EMBv && !EMBy("9");

    function EMB5a(a) {
        a = a.className;
        return EMBj(a) && a.match(/\S+/g) || []
    }

    function EMBz(a, b) {
        for (var c = EMB5a(a), d = EMBua(arguments, 1), e = c.length + d.length, f = c, g = 0; g < d.length; g++) 0 <= EMBq(f, d[g]) || f.push(d[g]);
        a.className = c.join(" ");
        return c.length == e
    }

    function EMBA(a, b) {
        var c = EMB5a(a),
            d = EMBua(arguments, 1),
            c = EMB6a(c, d);
        a.className = c.join(" ")
    }

    function EMB6a(a, b) {
        return EMBqa(a, function(a) {
            return !(0 <= EMBq(b, a))
        })
    }

    function EMBB(a, b) {
        var c = EMB5a(a);
        return 0 <= EMBq(c, b)
    }

    function EMB7a(a, b, c) {
        c ? EMBz(a, b) : EMBA(a, b)
    }

    function EMB8a(a, b) {
        var c = !EMBB(a, b);
        EMB7a(a, b, c)
    };

    function EMBC(a) {
        return a ? new EMB9a(EMBD(a)) : EMB2a || (EMB2a = new EMB9a)
    }

    function EMBE(a) {
        return EMBj(a) ? document.getElementById(a) : a
    }

    function EMB$a(a, b) {
        var c = b || document;
        return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : c.getElementsByClassName ? c.getElementsByClassName(a) : EMBF("*", a, b)
    }

    function EMBG(a, b) {
        var c = b || document,
            d = EMBd;
        return (d = c.querySelectorAll && c.querySelector ? c.querySelector("." + a) : EMB$a(a, b)[0]) || EMBd
    }

    function EMBF(a, b, c) {
        var d = document,
            c = c || d,
            a = a && "*" != a ? a.toUpperCase() : "";
        if (c.querySelectorAll && c.querySelector && (a || b)) return c.querySelectorAll(a + (b ? "." + b : ""));
        if (b && c.getElementsByClassName) {
            c = c.getElementsByClassName(b);
            if (a) {
                for (var d = {}, e = 0, f = 0, g; g = c[f]; f++) a == g.nodeName && (d[e++] = g);
                d.length = e;
                return d
            }
            return c
        }
        c = c.getElementsByTagName(a || "*");
        if (b) {
            d = {};
            for (f = e = 0; g = c[f]; f++) a = g.className, "function" == typeof a.split && 0 <= EMBq(a.split(/\s+/), b) && (d[e++] = g);
            d.length = e;
            return d
        }
        return c
    }

    function EMBab(a, b) {
        EMBwa(b, function(b, d) {
            "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in EMBbb ? a.setAttribute(EMBbb[d], b) : 0 == d.lastIndexOf("aria-", 0) ? a.setAttribute(d, b) : a[d] = b
        })
    }
    var EMBbb = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        rowspan: "rowSpan",
        valign: "vAlign",
        height: "height",
        width: "width",
        usemap: "useMap",
        frameborder: "frameBorder",
        maxlength: "maxLength",
        type: "type"
    };

    function EMBcb(a) {
        a = a.document;
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new EMBt(a.clientWidth, a.clientHeight)
    }

    function EMBdb(a, b, c) {
        var d = arguments,
            e = document,
            f = d[0],
            g = d[1];
        if (!EMB3a && g && (g.name || g.type)) {
            f = ["<", f];
            g.name && f.push(' name="', EMBo(g.name), '"');
            if (g.type) {
                f.push(' type="', EMBo(g.type), '"');
                var h = {};
                EMBCa(h, g);
                g = h;
                delete g.type
            }
            f.push(">");
            f = f.join("")
        }
        f = e.createElement(f);
        g && (EMBj(g) ? f.className = g : EMBba(g) ? EMBz.apply(EMBd, [f].concat(g)) : EMBab(f, g));
        2 < d.length && EMBeb(e, f, d, 2);
        return f
    }

    function EMBeb(a, b, c, d) {
        function e(c) {
            c && b.appendChild(EMBj(c) ? a.createTextNode(c) : c)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            EMBca(f) && !(EMBda(f) && 0 < f.nodeType) ? EMBr(EMBfb(f) ? EMBra(f) : f, e) : e(f)
        }
    }

    function EMBgb(a, b) {
        EMBeb(EMBD(a), a, arguments, 1)
    }

    function EMBhb(a) {
        for (var b; b = a.firstChild;) a.removeChild(b)
    }

    function EMBib(a) {
        for (; a && 1 != a.nodeType;) a = a.nextSibling;
        return a
    }

    function EMBD(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }

    function EMBjb(a, b) {
        var c = [];
        return EMBkb(a, b, c, EMBc) ? c[0] : EMBb
    }

    function EMBkb(a, b, c, d) {
        if (a != EMBd)
            for (a = a.firstChild; a;) {
                if (b(a) && (c.push(a), d) || EMBkb(a, b, c, d)) return EMBc;
                a = a.nextSibling
            }
        return EMBe
    }
    var EMBlb = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        EMBmb = {
            IMG: " ",
            BR: "\n"
        };

    function EMBnb(a, b, c) {
        if (!(a.nodeName in EMBlb))
            if (3 == a.nodeType) c ? b.push(("" + a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in EMBmb) b.push(EMBmb[a.nodeName]);
        else
            for (a = a.firstChild; a;) EMBnb(a, b, c), a = a.nextSibling
    }

    function EMBfb(a) {
        if (a && "number" == typeof a.length) {
            if (EMBda(a)) return "function" == typeof a.item || "string" == typeof a.item;
            if ("function" == EMBaa(a)) return "function" == typeof a.item
        }
        return EMBe
    }

    function EMBob(a, b, c) {
        if (!b && !c) return EMBd;
        var d = b ? b.toUpperCase() : EMBd;
        return EMBpb(a, function(a) {
            return (!d || a.nodeName == d) && (!c || EMBB(a, c))
        }, EMBc)
    }

    function EMBH(a, b) {
        return EMBob(a, EMBd, b)
    }

    function EMBpb(a, b, c, d) {
        c || (a = a.parentNode);
        for (var c = d == EMBd, e = 0; a && (c || e <= d);) {
            if (b(a)) return a;
            a = a.parentNode;
            e++
        }
        return EMBd
    }

    function EMB9a(a) {
        this.a = a || EMBf.document || document
    }

    function EMBqb(a) {
        return "CSS1Compat" == a.a.compatMode
    }

    function EMBrb(a) {
        var b = a.a,
            a = !EMBx && "CSS1Compat" == b.compatMode ? b.documentElement : b.body,
            b = b.parentWindow || b.defaultView;
        return new EMBs(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
    }
    EMB9a.prototype.appendChild = function(a, b) {
        a.appendChild(b)
    };

    function EMBI(a, b) {
        return a.dataset ? a.dataset[EMBsb(b)] : a.getAttribute("data-" + b)
    }

    function EMBJ(a, b) {
        a.dataset ? delete a.dataset[EMBsb(b)] : a.removeAttribute("data-" + b)
    }
    var EMBtb = {};

    function EMBsb(a) {
        return EMBtb[a] || (EMBtb[a] = ("" + a).replace(/\-([a-z])/g, function(a, c) {
            return c.toUpperCase()
        }))
    };
    var EMBub = EMBg("yt.dom.getNextId_");
    if (!EMBub) {
        EMBub = function() {
            return ++EMBvb
        };
        EMBm("yt.dom.getNextId_", EMBub);
        var EMBvb = 0
    }

    function EMBwb(a, b) {
        var c = EMBF(a, EMBd, b);
        return c.length ? c[0] : EMBd
    }

    function EMBxb() {
        var a = document;
        if ("fullScreenElement" in a) return a.fullScreenElement;
        if ("mozFullScreenElement" in a) return a.mozFullScreenElement;
        if ("msFullScreenElement" in a) return a.msFullScreenElement;
        if ("oFullScreenElement" in a) return a.oFullScreenElement;
        if ("webkitFullScreenElement" in a) return a.webkitFullScreenElement
    };

    function EMByb(a) {
        if (a = a || EMBg("window.event")) {
            for (var b in a) 0 <= EMBq(EMBzb, b) || (this[b] = a[b]);
            if ((b = a.target || a.srcElement) && 3 == b.nodeType) b = b.parentNode;
            this.target = b;
            if (b = a.relatedTarget) try {
                b = b.nodeName && b
            } catch (c) {
                b = EMBd
            } else "mouseover" == this.type ? b = a.fromElement : "mouseout" == this.type && (b = a.toElement);
            this.relatedTarget = b;
            this.clientX = a.clientX !== EMBb ? a.clientX : a.pageX;
            this.clientY = a.clientY !== EMBb ? a.clientY : a.pageY;
            if ((a.clientX || a.clientY) && document.body && document.documentElement) this.pageX =
                a.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, this.pageY = a.clientY + document.body.scrollTop + document.documentElement.scrollTop;
            this.keyCode = a.keyCode ? a.keyCode : a.which;
            this.charCode = a.charCode || ("keypress" == this.type ? this.keyCode : 0);
            this.altKey = a.altKey;
            this.ctrlKey = a.ctrlKey;
            this.shiftKey = a.shiftKey;
            this.W = a
        }
    }
    var EMBzb = "stopPropagation preventMouseEvent preventManipulation preventDefault layerX layerY".split(" ");
    EMB = EMByb.prototype;
    EMB.type = "";
    EMB.target = EMBd;
    EMB.relatedTarget = EMBd;
    EMB.currentTarget = EMBd;
    EMB.data = EMBd;
    EMB.source = EMBd;
    EMB.origin = EMBd;
    EMB.keyCode = 0;
    EMB.charCode = 0;
    EMB.altKey = EMBe;
    EMB.ctrlKey = EMBe;
    EMB.shiftKey = EMBe;
    EMB.W = EMBd;
    EMB.clientX = 0;
    EMB.clientY = 0;
    EMB.pageX = 0;
    EMB.pageY = 0;
    EMB.changedTouches = EMBd;
    EMB.preventDefault = function() {
        this.W.returnValue = EMBe;
        this.W.preventDefault && this.W.preventDefault()
    };
    var EMBAb = EMBg("yt.events.listeners_") || {};
    EMBm("yt.events.listeners_", EMBAb);
    var EMBBb = EMBg("yt.events.counter_") || {
        count: 0
    };
    EMBm("yt.events.counter_", EMBBb);

    function EMBCb(a, b, c, d) {
        return EMBya(EMBAb, function(e) {
            return e[0] == a && e[1] == b && e[2] == c && e[4] == !!d
        })
    }

    function EMBK(a, b, c, d) {
        function e(b) {
            b = new EMByb(b);
            b.currentTarget = a;
            return c.call(a, b)
        }
        if (!a || !a.addEventListener && !a.attachEvent) return "";
        var d = !!d,
            f = EMBCb(a, b, c, d);
        if (f) return f;
        f = ++EMBBb.count + "";
        EMBAb[f] = [a, b, c, e, d];
        a.addEventListener ? a.addEventListener(b, e, d) : a.attachEvent("on" + b, e);
        return f
    }

    function EMBDb(a, b, c) {
        EMBEb(a, b, function(a) {
            return EMBB(a, c)
        })
    }

    function EMBEb(a, b, c) {
        var d = a || document;
        EMBK(d, "click", function(a) {
            var f = EMBpb(a.target, function(a) {
                return a === d || c(a)
            }, EMBc);
            f && f !== d && (a.currentTarget = f, b.call(f, a))
        })
    }

    function EMBFb(a) {
        (a = EMBCb(document, a, EMBL, EMBe)) && EMBGb(a)
    }

    function EMBGb(a) {
        "string" == typeof a && (a = [a]);
        EMBr(a, function(a) {
            if (a in EMBAb) {
                var c = EMBAb[a],
                    d = c[0],
                    e = c[1],
                    f = c[3],
                    c = c[4];
                d.removeEventListener ? d.removeEventListener(e, f, c) : d.detachEvent("on" + e, f);
                delete EMBAb[a]
            }
        })
    }

    function EMBHb(a) {
        if (document.createEvent) {
            var b = document.createEvent("HTMLEvents");
            b.initEvent("click", EMBc, EMBc);
            a.dispatchEvent(b)
        } else b = document.createEventObject(), a.fireEvent("onclick", b)
    };
    var EMBIb = new function() {
        this.a = EMBl()
    };

    function EMBJb(a) {
        this.a = a || "";
        this.b = EMBIb
    }
    EMB = EMBJb.prototype;
    EMB.la = EMBc;
    EMB.Pa = EMBc;
    EMB.Oa = EMBc;
    EMB.ma = EMBe;
    EMB.Qa = EMBe;

    function EMBM(a) {
        return 10 > a ? "0" + a : "" + a
    }

    function EMBKb(a) {
        EMBJb.call(this, a)
    }
    EMBn(EMBKb, EMBJb);
    var EMBLb = "StopIteration" in EMBf ? EMBf.StopIteration : Error("StopIteration");

    function EMBMb() {}
    EMBMb.prototype.next = function() {
        EMBa(EMBLb)
    };
    EMBMb.prototype.K = function() {
        return this
    };

    function EMBNb(a) {
        if (a instanceof EMBMb) return a;
        if ("function" == typeof a.K) return a.K(EMBe);
        if (EMBca(a)) {
            var b = 0,
                c = new EMBMb;
            c.next = function() {
                for (;;) {
                    b >= a.length && EMBa(EMBLb);
                    if (b in a) return a[b++];
                    b++
                }
            };
            return c
        }
        EMBa(Error("Not implemented"))
    }

    function EMBOb(a, b) {
        if (EMBca(a)) try {
            EMBr(a, b, EMBb)
        } catch (c) {
            c !== EMBLb && EMBa(c)
        } else {
            a = EMBNb(a);
            try {
                for (;;) b.call(EMBb, a.next(), EMBb, a)
            } catch (d) {
                d !== EMBLb && EMBa(d)
            }
        }
    }

    function EMBPb(a) {
        if (EMBca(a)) return EMBra(a);
        var a = EMBNb(a),
            b = [];
        EMBOb(a, function(a) {
            b.push(a)
        });
        return b
    };

    function EMBQb(a) {
        return EMBRb(a || arguments.callee.caller, [])
    }

    function EMBRb(a, b) {
        var c = [];
        if (0 <= EMBq(b, a)) c.push("[...circular reference...]");
        else if (a && 50 > b.length) {
            c.push(EMBSb(a) + "(");
            for (var d = a.arguments, e = 0; e < d.length; e++) {
                0 < e && c.push(", ");
                var f;
                f = d[e];
                switch (typeof f) {
                    case "object":
                        f = f ? "object" : "null";
                        break;
                    case "string":
                        break;
                    case "number":
                        f = "" + f;
                        break;
                    case "boolean":
                        f = f ? "true" : "false";
                        break;
                    case "function":
                        f = (f = EMBSb(f)) ? f : "[fn]";
                        break;
                    default:
                        f = typeof f
                }
                40 < f.length && (f = f.substr(0, 40) + "...");
                c.push(f)
            }
            b.push(a);
            c.push(")\n");
            try {
                c.push(EMBRb(a.caller,
                    b))
            } catch (g) {
                c.push("[exception trying to get caller]\n")
            }
        } else a ? c.push("[...long stack...]") : c.push("[end]");
        return c.join("")
    }

    function EMBSb(a) {
        if (EMBTb[a]) return EMBTb[a];
        a = "" + a;
        if (!EMBTb[a]) {
            var b = /function ([^\(]+)/.exec(a);
            EMBTb[a] = b ? b[1] : "[Anonymous]"
        }
        return EMBTb[a]
    }
    var EMBTb = {};

    function EMBUb(a, b, c, d, e) {
        "number" == typeof e || EMBVb++;
        this.f = d || EMBl();
        this.r = a;
        this.e = b;
        this.d = c;
        delete this.b;
        delete this.a
    }
    EMBUb.prototype.b = EMBd;
    EMBUb.prototype.a = EMBd;
    var EMBVb = 0;
    EMBUb.prototype.getLevel = function() {
        return this.r
    };

    function EMBN(a) {
        this.f = a
    }
    EMBN.prototype.d = EMBd;
    EMBN.prototype.b = EMBd;
    EMBN.prototype.a = EMBd;

    function EMBWb(a, b) {
        this.name = a;
        this.value = b
    }
    EMBWb.prototype.toString = function() {
        return this.name
    };
    var EMBXb = new EMBWb("SHOUT", 1200),
        EMBYb = new EMBWb("SEVERE", 1E3),
        EMBZb = new EMBWb("WARNING", 900),
        EMB_b = new EMBWb("INFO", 800),
        EMB0b = new EMBWb("CONFIG", 700);
    EMBN.prototype.getLevel = function() {
        return this.b
    };

    function EMB1b(a) {
        return a.b ? a.b : a.d ? EMB1b(a.d) : EMBd
    }
    EMBN.prototype.log = function(a, b, c) {
        if (a.value >= EMB1b(this).value) {
            a = this.e(a, b, c);
            b = "log:" + a.e;
            EMBf.console && (EMBf.console.timeStamp ? EMBf.console.timeStamp(b) : EMBf.console.markTimeline && EMBf.console.markTimeline(b));
            EMBf.msWriteProfilerMark && EMBf.msWriteProfilerMark(b);
            for (b = this; b;) {
                var c = b,
                    d = a;
                if (c.a)
                    for (var e = 0, f = EMBb; f = c.a[e]; e++) f(d);
                b = b.d
            }
        }
    };
    EMBN.prototype.e = function(a, b, c) {
        var d = new EMBUb(a, "" + b, this.f);
        if (c) {
            d.b = c;
            var e;
            var f = arguments.callee.caller;
            try {
                var g;
                var h = EMBg("window.location.href");
                if (EMBj(c)) g = {
                    message: c,
                    name: "Unknown error",
                    lineNumber: "Not available",
                    fileName: h,
                    stack: "Not available"
                };
                else {
                    var i, j, k = EMBe;
                    try {
                        i = c.lineNumber || c.Db || "Not available"
                    } catch (l) {
                        i = "Not available", k = EMBc
                    }
                    try {
                        j = c.fileName || c.filename || c.sourceURL || h
                    } catch (n) {
                        j = "Not available", k = EMBc
                    }
                    g = k || !c.lineNumber || !c.fileName || !c.stack ? {
                        message: c.message,
                        name: c.name,
                        lineNumber: i,
                        fileName: j,
                        stack: c.stack || "Not available"
                    } : c
                }
                e = "Message: " + EMBo(g.message) + '\nUrl: <a href="view-source:' + g.fileName + '" target="_new">' + g.fileName + "</a>\nLine: " + g.lineNumber + "\n\nBrowser stack:\n" + EMBo(g.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + EMBo(EMBQb(f) + "-> ")
            } catch (m) {
                e = "Exception trying to expose exception! You win, we lose. " + m
            }
            d.a = e
        }
        return d
    };
    EMBN.prototype.info = function(a, b) {
        this.log(EMB_b, a, b)
    };
    var EMB2b = EMBd;

    function EMB3b() {
        this.r = EMBk(this.e, this);
        this.a = new EMBKb;
        this.a.la = EMBe;
        this.b = this.a.ma = EMBe;
        this.d = "";
        this.f = {}
    }
    EMB3b.prototype.e = function(a) {
        if (!this.f[a.d]) {
            var b;
            b = this.a;
            var c = [];
            c.push(b.a, " ");
            if (b.la) {
                var d = new Date(a.f);
                c.push("[", EMBM(d.getFullYear() - 2E3) + EMBM(d.getMonth() + 1) + EMBM(d.getDate()) + " " + EMBM(d.getHours()) + ":" + EMBM(d.getMinutes()) + ":" + EMBM(d.getSeconds()) + "." + EMBM(Math.floor(d.getMilliseconds() / 10)), "] ")
            }
            if (b.Pa) {
                var d = (a.f - b.b.a) / 1E3,
                    e = d.toFixed(3),
                    f = 0;
                if (1 > d) f = 2;
                else
                    for (; 100 > d;) f++, d *= 10;
                for (; 0 < f--;) e = " " + e;
                c.push("[", e, "s] ")
            }
            b.Oa && c.push("[", a.d, "] ");
            b.Qa && c.push("[", a.getLevel().name,
                "] ");
            c.push(a.e, "\n");
            b.ma && a.b && c.push(a.a, "\n");
            b = c.join("");
            if (EMB4b) switch (a.getLevel()) {
                case EMBXb:
                    EMB5b("info", b);
                    break;
                case EMBYb:
                    EMB5b("error", b);
                    break;
                case EMBZb:
                    EMB5b("warn", b);
                    break;
                default:
                    EMB5b("debug", b)
            } else window.opera ? window.opera.postError(b) : this.d += b
        }
    };
    var EMB6b = EMBd,
        EMB4b = window.console;

    function EMB5b(a, b) {
        var c = EMB4b;
        if (c[a]) c[a](b);
        else c.log(b)
    };
    var EMB7b = window.yt && window.yt.config_ || {};
    EMBm("yt.config_", EMB7b);
    var EMB8b = window.yt && window.yt.tokens_ || {};
    EMBm("yt.tokens_", EMB8b);
    EMBm("yt.globals_", window.yt && window.yt.globals_ || {});
    var EMB9b = window.yt && window.yt.msgs_ || {};
    EMBm("yt.msgs_", EMB9b);
    var EMB$b = window.yt && window.yt.timeouts_ || [];
    EMBm("yt.timeouts_", EMB$b);
    EMBm("yt.intervals_", window.yt && window.yt.intervals_ || []);

    function EMBO(a) {
        return a in EMB7b ? EMB7b[a] : EMBb
    }

    function EMBac(a) {
        EMBbc(EMB8b, arguments)
    }

    function EMBcc() {
        return "html5_ajax" in EMB8b ? EMB8b.html5_ajax : EMBb
    }

    function EMBP(a, b) {
        var c = window.setTimeout(a, b);
        EMB$b.push(c);
        return c
    }

    function EMBdc(a, b, c) {
        var d = b || {};
        if (a = a in EMB9b ? EMB9b[a] : c)
            for (var e in d) a = a.replace(RegExp("\\$" + e, "gi"), function() {
                return d[e]
            });
        return a
    }

    function EMBbc(a, b) {
        if (1 < b.length) {
            var c = b[0];
            a[c] = b[1]
        } else {
            var d = b[0];
            for (c in d) a[c] = d[c]
        }
    }
    var EMBec = !!eval("/*@cc_on!@*/false");

    function EMBfc() {
        this.source = EMBd;
        this.origin = "*";
        this.d = this.a = this.b = this.e = EMBd;
        EMBK(window, "message", EMBk(this.f, this))
    }
    EMBfc.prototype.f = function(a) {
        if (!("*" != EMBO("POST_MESSAGE_ORIGIN") && a.origin != EMBO("POST_MESSAGE_ORIGIN"))) switch (this.source = a.source, this.origin = "null" == a.origin ? this.origin : a.origin, a = JSON.parse(a.data), this.e = a.id, a.event) {
            case "listening":
                this.a && (this.a(), this.a = EMBd);
                break;
            case "command":
                this.b && (!this.d || 0 <= EMBq(this.d, a.func)) && this.b(a.func, a.args)
        }
    };

    function EMBQ(a) {
        var b = EMBgc;
        b.source && (a.id = b.e, b.source.postMessage(JSON.stringify(a), b.origin))
    };

    function EMBR(a) {
        a = a || {};
        this.url = a.url || this.url;
        this.urlV8 = a.url_v8 || this.urlV8;
        this.urlV9As2 = a.url_v9as2 || this.urlV9As2;
        this.minVersion = a.min_version || this.minVersion;
        this.args = a.args || EMBAa(EMBhc);
        this.assets = a.assets || {};
        this.attrs = a.attrs || EMBAa(EMBic);
        this.params = a.params || EMBAa(EMBjc);
        this.fallback = a.fallback || this.fallback;
        this.fallbackMessage = a.fallbackMessage || this.fallbackMessage;
        this.html5 = a.html5 || this.html5;
        this.disable = a.disable || {}
    }
    var EMBhc = {
            enablejsapi: 1
        },
        EMBic = {
            width: "640",
            height: "385"
        },
        EMBjc = {
            allowscriptaccess: "always",
            allowfullscreen: "true",
            bgcolor: "#000000"
        };
    EMB = EMBR.prototype;
    EMB.url = "";
    EMB.urlV8 = "";
    EMB.urlV9As2 = "";
    EMB.minVersion = "8.0.0";
    EMB.html5 = EMBe;

    function EMBkc() {};

    function EMBS() {
        this.a = [];
        this.l = {}
    }
    EMBn(EMBS, EMBkc);
    EMB = EMBS.prototype;
    EMB.qa = 1;
    EMB.Q = 0;
    EMB.ra = function(a, b, c) {
        var d = this.l[a];
        d || (d = this.l[a] = []);
        var e = this.qa;
        this.a[e] = a;
        this.a[e + 1] = b;
        this.a[e + 2] = c;
        this.qa = e + 3;
        d.push(e);
        return e
    };
    EMB.ba = function(a) {
        if (0 != this.Q) return this.b || (this.b = []), this.b.push(a), EMBe;
        var b = this.a[a];
        if (b) {
            var c = this.l[b];
            if (c) {
                var d = EMBq(c, a);
                0 <= d && EMBp.splice.call(c, d, 1)
            }
            delete this.a[a];
            delete this.a[a + 1];
            delete this.a[a + 2]
        }
        return !!b
    };
    EMB.Ca = function(a, b) {
        var c = this.l[a];
        if (c) {
            this.Q++;
            for (var d = EMBua(arguments, 1), e = 0, f = c.length; e < f; e++) {
                var g = c[e];
                this.a[g + 1].apply(this.a[g + 2], d)
            }
            this.Q--;
            if (this.b && 0 == this.Q)
                for (; c = this.b.pop();) this.ba(c);
            return 0 != e
        }
        return EMBe
    };
    EMB.clear = function(a) {
        if (a) {
            var b = this.l[a];
            b && (EMBr(b, this.ba, this), delete this.l[a])
        } else this.a.length = 0, this.l = {}
    };
    EMB.I = function(a) {
        if (a) {
            var b = this.l[a];
            return b ? b.length : 0
        }
        a = 0;
        for (b in this.l) a += this.I(b);
        return a
    };

    function EMBlc(a) {
        this.a = a
    }
    var EMBmc = /\s*;\s*/;

    function EMBnc(a, b, c, d, e, f) {
        /[;=\s]/.test(b) && EMBa(Error('Invalid cookie name "' + b + '"'));
        /[;\r\n]/.test(c) && EMBa(Error('Invalid cookie value "' + c + '"'));
        EMBi(d) || (d = -1);
        f = f ? ";domain=" + f : "";
        e = e ? ";path=" + e : "";
        d = 0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(EMBl() + 1E3 * d)).toUTCString();
        a.a.cookie = b + "=" + c + f + e + d + ""
    }
    EMBlc.prototype.I = function() {
        return !this.a.cookie ? 0 : (this.a.cookie || "").split(EMBmc).length
    };
    EMBlc.prototype.clear = function() {
        for (var a = (this.a.cookie || "").split(EMBmc), b = [], c = [], d, e, f = 0; e = a[f]; f++) d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) EMBnc(this, b[a], "", 0, EMBb, EMBb)
    };
    var EMBoc = new EMBlc(document);
    EMBoc.b = 3950;

    function EMBpc() {};

    function EMBqc() {}
    EMBn(EMBqc, EMBpc);
    EMBqc.prototype.I = function() {
        var a = 0;
        EMBOb(this.K(EMBc), function() {
            a++
        });
        return a
    };
    EMBqc.prototype.clear = function() {
        var a = EMBPb(this.K(EMBc)),
            b = this;
        EMBr(a, function(a) {
            b.j.removeItem(a)
        })
    };

    function EMBrc(a) {
        this.j = a
    }
    EMBn(EMBrc, EMBqc);
    EMBrc.prototype.I = function() {
        return this.j.length
    };
    EMBrc.prototype.K = function(a) {
        var b = 0,
            c = new EMBMb,
            d = this;
        c.next = function() {
            b >= d.I() && EMBa(EMBLb);
            var c;
            c = d.j.key(b++);
            if (a) return c;
            c = d.j.getItem(c);
            if (EMBj(c)) return c;
            EMBa("Storage mechanism: Invalid value was encountered")
        };
        return c
    };
    EMBrc.prototype.clear = function() {
        this.j.clear()
    };

    function EMBsc() {
        var a = EMBd;
        try {
            a = window.localStorage || EMBd
        } catch (b) {}
        this.j = a
    }
    EMBn(EMBsc, EMBrc);

    function EMBtc(a) {
        a = "" + a;
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
            return eval("(" + a + ")")
        } catch (b) {}
        EMBa(Error("Invalid JSON string: " + a))
    }

    function EMBuc(a) {
        return eval("(" + a + ")")
    }

    function EMBvc() {
        this.a = EMBb
    }

    function EMBwc(a, b, c) {
        switch (typeof b) {
            case "string":
                EMBxc(b, c);
                break;
            case "number":
                c.push(isFinite(b) && !isNaN(b) ? b : "null");
                break;
            case "boolean":
                c.push(b);
                break;
            case "undefined":
                c.push("null");
                break;
            case "object":
                if (b == EMBd) {
                    c.push("null");
                    break
                }
                if (EMBba(b)) {
                    var d = b.length;
                    c.push("[");
                    for (var e = "", f = 0; f < d; f++) c.push(e), e = b[f], EMBwc(a, a.a ? a.a.call(b, "" + f, e) : e, c), e = ",";
                    c.push("]");
                    break
                }
                c.push("{");
                d = "";
                for (f in b) Object.prototype.hasOwnProperty.call(b, f) && (e = b[f], "function" != typeof e && (c.push(d), EMBxc(f,
                    c), c.push(":"), EMBwc(a, a.a ? a.a.call(b, f, e) : e, c), d = ","));
                c.push("}");
                break;
            case "function":
                break;
            default:
                EMBa(Error("Unknown type: " + typeof b))
        }
    }
    var EMByc = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\u0008": "\\b",
            "\u000c": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        EMBzc = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;

    function EMBxc(a, b) {
        b.push('"', a.replace(EMBzc, function(a) {
            if (a in EMByc) return EMByc[a];
            var b = a.charCodeAt(0),
                e = "\\u";
            16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
            return EMByc[a] = e + b.toString(16)
        }), '"')
    };

    function EMBAc(a) {
        this.a = a;
        this.b = new EMBvc
    }
    EMBAc.prototype.a = EMBd;
    EMBAc.prototype.b = EMBd;

    function EMBBc() {
        var a = new EMBsc,
            b;
        if (b = a) a: {
            try {
                b = !!a.j && !!a.j.getItem;
                break a
            } catch (c) {}
            b = EMBe
        }
        b && (this.a = new EMBAc(a))
    }
    EMBBc.prototype.a = EMBd;

    function EMBCc(a) {
        var b = {
            volume: 100,
            muted: EMBe,
            nonNormalized: 100
        };
        if (a.a) {
            var c = {};
            try {
                var d;
                var e;
                var f = a.a.a.j.getItem("yt-player-volume");
                EMBj(f) || f === EMBd ? e = f : EMBa("Storage mechanism: Invalid value was encountered");
                if (e !== EMBd) try {
                    d = EMBtc(e)
                } catch (g) {
                    EMBa("Storage: Invalid value was encountered")
                }
                c = d || {}
            } catch (h) {
                a.a.a.j.removeItem("yt-player-volume")
            }
            b.volume = isNaN(c.volume) ? 100 : Math.min(Math.max(c.volume, 0), 100);
            b.nonNormalized = isNaN(c.nonNormalized) ? b.volume : c.nonNormalized;
            b.muted = c.muted ==
                EMBb ? EMBe : c.muted
        }
        return b
    };

    function EMBT(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    EMBT.prototype.a = function() {
        return new EMBT(this.top, this.right, this.bottom, this.left)
    };

    function EMBDc(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }
    EMBDc.prototype.a = function() {
        return new EMBDc(this.left, this.top, this.width, this.height)
    };

    function EMBEc(a, b, c) {
        EMBj(b) ? EMBFc(a, c, b) : EMBwa(b, EMBia(EMBFc, a))
    }

    function EMBFc(a, b, c) {
        a.style[EMBpa(c)] = b
    }

    function EMBU(a, b) {
        var c = EMBD(a);
        return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, EMBd)) ? c[b] || c.getPropertyValue(b) || "" : ""
    }

    function EMBV(a, b) {
        return a.currentStyle ? a.currentStyle[b] : EMBd
    }

    function EMBW(a, b) {
        return EMBU(a, b) || EMBV(a, b) || a.style && a.style[b]
    }

    function EMBGc(a) {
        if (EMBOa && EMBx) {
            var b = a.ownerDocument.defaultView;
            if (b != b.top) return EMBe
        }
        return !!a.getBoundingClientRect
    }

    function EMBHc(a) {
        var b = a.getBoundingClientRect();
        EMBv && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    }

    function EMBIc(a) {
        if (EMBv && !EMB1a(8)) return a.offsetParent;
        for (var b = EMBD(a), c = EMBW(a, "position"), d = "fixed" == c || "absolute" == c, a = a.parentNode; a && a != b; a = a.parentNode)
            if (c = EMBW(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
        return EMBd
    }

    function EMBX(a) {
        var b, c = EMBD(a),
            d = EMBW(a, "position"),
            e = EMBw && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY),
            f = new EMBs(0, 0),
            g;
        b = c ? EMBD(c) : document;
        g = EMBv && !EMB1a(9) && !EMBqb(EMBC(b)) ? b.body : b.documentElement;
        if (a == g) return f;
        if (EMBGc(a)) b = EMBHc(a), a = EMBrb(EMBC(c)), f.x = b.left + a.x, f.y = b.top + a.y;
        else if (c.getBoxObjectFor && !e) b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(g), f.x = b.screenX - a.screenX, f.y = b.screenY - a.screenY;
        else {
            b = a;
            do {
                f.x +=
                    b.offsetLeft;
                f.y += b.offsetTop;
                b != a && (f.x += b.clientLeft || 0, f.y += b.clientTop || 0);
                if (EMBx && "fixed" == EMBW(b, "position")) {
                    f.x += c.body.scrollLeft;
                    f.y += c.body.scrollTop;
                    break
                }
                b = b.offsetParent
            } while (b && b != a);
            if (EMBNa || EMBx && "absolute" == d) f.y -= c.body.offsetTop;
            for (b = a;
                (b = EMBIc(b)) && b != c.body && b != g;)
                if (f.x -= b.scrollLeft, !EMBNa || "TR" != b.tagName) f.y -= b.scrollTop
        }
        return f
    }

    function EMBJc(a) {
        var b = new EMBs;
        if (1 == a.nodeType)
            if (EMBGc(a)) a = EMBHc(a), b.x = a.left, b.y = a.top;
            else {
                var c = EMBrb(EMBC(a)),
                    a = EMBX(a);
                b.x = a.x - c.x;
                b.y = a.y - c.y
            }
        else {
            var c = "function" == EMBaa(a.b),
                d = a;
            a.targetTouches ? d = a.targetTouches[0] : c && a.a.targetTouches && (d = a.a.targetTouches[0]);
            b.x = d.clientX;
            b.y = d.clientY
        }
        return b
    }

    function EMBKc(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    }

    function EMBY(a) {
        if ("none" != EMBW(a, "display")) return EMBLc(a);
        var b = a.style,
            c = b.display,
            d = b.visibility,
            e = b.position;
        b.visibility = "hidden";
        b.position = "absolute";
        b.display = "inline";
        a = EMBLc(a);
        b.display = c;
        b.position = e;
        b.visibility = d;
        return a
    }

    function EMBLc(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = EMBx && !b && !c;
        return (!EMBi(b) || d) && a.getBoundingClientRect ? (a = EMBHc(a), new EMBt(a.right - a.left, a.bottom - a.top)) : new EMBt(b, c)
    }

    function EMBMc(a) {
        var b = EMBX(a),
            a = EMBY(a);
        return new EMBDc(b.x, b.y, a.width, a.height)
    }

    function EMBNc(a) {
        return "rtl" == EMBW(a, "direction")
    }

    function EMBOc(a, b) {
        if (/^\d+px?$/.test(b)) return parseInt(b, 10);
        var c = a.style.left,
            d = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = b;
        var e = a.style.pixelLeft;
        a.style.left = c;
        a.runtimeStyle.left = d;
        return e
    }
    var EMBPc = {
        thin: 2,
        medium: 4,
        thick: 6
    };

    function EMBQc(a, b) {
        if ("none" == EMBV(a, b + "Style")) return 0;
        var c = EMBV(a, b + "Width");
        return c in EMBPc ? EMBPc[c] : EMBOc(a, c)
    };

    function EMBRc(a, b) {
        if ((a = EMBE(a)) && a.style) a.style.display = b ? "" : "none", EMB7a(a, "hid", !b)
    }

    function EMBSc(a) {
        a = EMBE(a);
        return !a ? EMBe : !("none" == a.style.display || EMBB(a, "hid"))
    }

    function EMBTc(a) {
        if (a = EMBE(a)) EMBSc(a) ? (a.style.display = "none", EMBz(a, "hid")) : (a.style.display = "", EMBA(a, "hid"))
    }

    function EMBUc(a) {
        EMBr(arguments, function(a) {
            EMBRc(a, EMBc)
        })
    }

    function EMBZ(a) {
        EMBr(arguments, function(a) {
            EMBRc(a, EMBe)
        })
    };
    var EMBVc = {},
        EMBWc = 0;

    function EMBXc(a) {
        var b = new Image,
            c = "" + EMBWc++;
        EMBVc[c] = b;
        b.onload = b.onerror = function() {
            delete EMBVc[c]
        };
        b.src = a;
        b = eval("null")
    };
    var EMB_ = EMBg("yt.timing") || {};
    EMBm("yt.timing", EMB_);
    EMB_.Bd = 0;
    EMB_.zd = 0;
    EMB_.Ab = function() {
        var a = EMB_.timer || {};
        a.ol = EMBl();
        EMB_.timer = a
    };
    EMB_.info = function(a, b) {
        var c = EMB_.info_args || {};
        c[a] = b;
        EMB_.info_args = c
    };
    EMB_.ha = function() {
        var a = EMBO("TIMING_ACTION"),
            b = EMB_.timer || {},
            c = EMB_.info_args || {},
            d = b.start,
            e = "",
            f = [],
            g = [];
        delete b.start;
        EMB_.srt && (e = "&srt=" + EMB_.srt);
        b.aft && b.plev && (b.aft = Math.min(b.aft, b.plev));
        for (var h in b) f.push(h + "." + Math.round(b[h] - d));
        for (h in c) g.push(h + "=" + c[h]);
        b.vr && b.gv && f.push("vl." + Math.round(b.vr - b.gv));
        !b.aft && b.vr && b.cl ? b.cl > b.vr ? f.push("aft." + Math.round(b.cl - d)) : f.push("aft." + Math.round(b.vr - d)) : !b.aft && b.vr ? f.push("aft." + Math.round(b.vr - d)) : b.aft || f.push("aft." + Math.round(b.ol -
            d));
        EMBXc(["https:" == window.location.protocol ? "http://web.archive.org/web/20120609184921/https://gg.google.com/csi" : "http://web.archive.org/web/20120609184921/http://csi.gstatic.com/csi", "?v=2&s=youtube&action=", a, e, "&", g.join("&"), "&rt=", f.join(",")].join(""))
    };
    EMB_.vb = function() {
        var a = EMBO("TIMING_ACTION"),
            b = EMB_.timer || {};
        a && b.start && (EMB_.wff && -1 != a.indexOf("ajax") && b.vr && b.cl ? EMB_.ha() : EMB_.wff && -1 == a.indexOf("ajax") && b.vr ? EMB_.ha() : !EMB_.wff && (b.ol || b.aft) && EMB_.ha())
    };
    EMB_.Bb = function() {
        EMB_.Ab();
        EMB_.vb()
    };

    function EMBYc(a, b, c, d, e, f, g) {
        var h = [];
        a && h.push(a, ":");
        c && (h.push("//"), b && h.push(b, "@"), h.push(c), d && h.push(":", d));
        e && h.push(e);
        f && h.push("?", f);
        g && h.push("#", g);
        return h.join("")
    }
    var EMBZc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");

    function EMB_c(a) {
        if (EMB0c) {
            EMB0c = EMBe;
            var b = EMBf.location;
            if (b) {
                var c = b.href;
                if (c && (c = (c = EMB_c(c)[3] || EMBd) && decodeURIComponent(c)) && c != b.hostname) EMB0c = EMBc, EMBa(Error())
            }
        }
        return a.match(EMBZc)
    }
    var EMB0c = EMBx;

    function EMB1c() {
        var a = EMB_c(document.location.href);
        return EMBYc(a[1], a[2], a[3], a[4])
    }

    function EMB2c(a) {
        a = EMB_c(a);
        return EMBYc(EMBd, EMBd, EMBd, EMBd, a[5], a[6], a[7])
    }

    function EMB3c(a) {
        if (a[1]) {
            var b = a[0],
                c = b.indexOf("#");
            0 <= c && (a.push(b.substr(c)), a[0] = b = b.substr(0, c));
            c = b.indexOf("?");
            0 > c ? a[1] = "?" : c == b.length - 1 && (a[1] = EMBb)
        }
        return a.join("")
    }

    function EMB4c(a, b, c) {
        if (EMBba(b))
            for (var d = 0; d < b.length; d++) EMB4c(a, "" + b[d], c);
        else b != EMBd && c.push("&", a, "" === b ? "" : "=", encodeURIComponent("" + b))
    }

    function EMB5c(a, b) {
        for (var c in b) EMB4c(c, b[c], a);
        return a
    };

    function EMB6c(a) {
        "?" == a.charAt(0) && (a = a.substr(1));
        for (var a = a.split("&"), b = {}, c = 0, d = a.length; c < d; c++) {
            var e = a[c].split("=");
            if (1 == e.length && e[0] || 2 == e.length) {
                var f = e[0],
                    e = decodeURIComponent((e[1] || "").replace(/\+/g, " "));
                f in b ? EMBba(b[f]) ? EMBsa(b[f], e) : b[f] = [b[f], e] : b[f] = e
            }
        }
        return b
    }

    function EMB7c(a) {
        "#" == a.charAt(0) && (a = "!" == a.charAt(1) ? a.substr(2) : a.substr(1));
        return EMB6c(a)
    }

    function EMB8c(a) {
        a = EMB5c([], a);
        a[0] = "";
        return a.join("")
    }

    function EMB9c(a, b) {
        var c = a.split("?", 2),
            a = c[0],
            c = EMB6c(c[1] || ""),
            d;
        for (d in b) c[d] = b[d];
        return EMB3c(EMB5c([a], c))
    };

    function EMB$c(a) {
        var b = EMBad;
        if ("view" == a && b.convViewUrl) return b.convViewUrl;
        if (!b.baseUrl || !b.uid) return EMBd;
        var c = b.rmktEnabled && b.vid,
            d = b.focEnabled;
        if (!c && !d) return EMBd;
        var e = {
            label: d ? "followon_" + a : "default"
        };
        if (c) {
            c = {
                utvid: b.vid,
                utuid: b.uid,
                type: a
            };
            b.eventLabel && (c.el = b.eventLabel);
            b.playerStyle && (c.ps = b.playerStyle);
            var f = [],
                g;
            for (g in c) f.push(encodeURIComponent(g) + "=" + encodeURIComponent(c[g]));
            e.data = f.join(";")
        }
        if (d && "view" == a && b.vid && b.uid && (b.oeid || b.ieid)) b.oeid && (e.oeid = b.oeid), b.ieid &&
            (e.ieid = b.ieid), e.evid = b.vid;
        d && (e.foc_id = b.uid);
        return EMB3c(EMB5c([b.baseUrl], e))
    }

    function EMBbd(a) {
        (a = EMB$c(a)) && EMBXc(a)
    }
    var EMBad = EMBd;

    function EMBcd(a, b, c, d) {
        a = EMB3c(EMB5c(["/sharing_services"], {
            name: a,
            v: b,
            locale: c,
            feature: d
        }));
        EMBXc(a)
    };

    function EMBdd(a, b) {
        var c = b || {};
        c.target = c.target || a.target || "YouTube";
        c.width = c.width || 600;
        c.height = c.height || 600;
        var d = c;
        d || (d = {});
        var e = window,
            c = "undefined" != typeof a.href ? a.href : "" + a,
            f = d.target || a.target,
            g = [],
            h;
        for (h in d) switch (h) {
            case "width":
            case "height":
            case "top":
            case "left":
                g.push(h + "=" + d[h]);
                break;
            case "target":
            case "noreferrer":
                break;
            default:
                g.push(h + "=" + (d[h] ? 1 : 0))
        }
        h = g.join(",");
        if (d.noreferrer) {
            if (d = e.open("", f, h)) EMBv && -1 != c.indexOf(";") && (c = "'" + c.replace(/'/g, "%27") + "'"), d.opener =
                EMBd, EMBx ? d.location.href = c : (c = EMBo(c), d.document.write('<META HTTP-EQUIV="refresh" content="0; url=' + c + '">'), d.document.close())
        } else d = e.open(c, f, h);
        c = d;
        if (!c) return EMBc;
        c.opener || (c.opener = window);
        c.focus();
        return EMBe
    };

    function EMB0() {
        var a;
        a = this.a;
        a = "" + a;
        a: {
            for (var b = a + "=", c = (EMBoc.a.cookie || "").split(EMBmc), d = 0, e; e = c[d]; d++) {
                if (0 == e.indexOf(b)) {
                    a = e.substr(b.length);
                    break a
                }
                if (e == a) {
                    a = "";
                    break a
                }
            }
            a = EMBb
        }
        if (a) {
            a = unescape(a).split("&");
            for (b = 0; b < a.length; b++) d = a[b].split("="), c = d[0], (d = d[1]) && (EMB1[c] = d.toString())
        }
    }
    EMBh(EMB0);
    var EMB1 = EMBg("yt.prefs.UserPrefs.prefs_") || {};
    EMBm("yt.prefs.UserPrefs.prefs_", EMB1);
    EMB0.prototype.a = "PREF";

    function EMBed(a) {
        a == EMBd && EMBa("ExpectedNotNull")
    }

    function EMBfd(a) {
        /^\w+$/.test(a) || EMBa("ExpectedRegexMismatch: " + a);
        /^f([1-9][0-9]*)$/.test(a) && EMBa("ExpectedRegexMatch: " + a)
    }

    function EMBgd(a) {
        a = EMB1[a] !== EMBb ? EMB1[a].toString() : EMBd;
        return a != EMBd && /^[A-Fa-f0-9]+$/.test(a) ? parseInt(a, 16) : EMBd
    }

    function EMBhd(a) {
        return !!((EMBgd("f" + (Math.floor(a / 31) + 1)) || 0) & 1 << a % 31)
    }

    function EMBid(a, b) {
        var c = "f" + (Math.floor(a / 31) + 1),
            d = 1 << a % 31,
            e = EMBgd(c) || 0,
            e = b ? e | d : e & ~d;
        0 == e ? delete EMB1[c] : (d = e.toString(16), EMB1[c] = d.toString())
    }

    function EMBjd(a) {
        var a = a.a,
            b, c = [];
        for (b in EMB1) c.push(b + "=" + escape(EMB1[b]));
        b = c.join("&");
        EMBnc(EMBoc, "" + a, b, 31536E4, "/", "youtube.com")
    }
    EMB0.prototype.clear = function() {
        EMB1 = {}
    };
    var EMBkd = {
        Sc: 0,
        Tb: 1,
        ta: 2,
        vc: 3,
        Ub: 4,
        sd: 5,
        ud: 6,
        rd: 7,
        pd: 8,
        qd: 9,
        td: 10,
        od: 11,
        Zc: 12,
        Yc: 13,
        Xc: 14,
        kc: 15,
        Ic: 16,
        Lc: 17,
        Mc: 18,
        Kc: 19,
        Jc: 20,
        $c: 21,
        Xb: 22,
        nd: 23,
        Wb: 24,
        Fb: 25,
        Yb: 26,
        ic: 27,
        Vc: 28,
        Vb: 29,
        Uc: 30,
        jd: 31,
        fd: 32,
        fc: 33,
        dd: 34,
        ad: 35,
        bd: 36,
        cd: 37,
        ed: 38,
        wc: 39,
        Pc: 40,
        Gb: 41,
        Oc: 42,
        Ib: 43,
        sa: 44,
        $b: 45,
        Fc: 46,
        kd: 47,
        vd: 48,
        wd: 49,
        yd: 50,
        Wc: 51,
        Ob: 52,
        Qb: 53,
        Gc: 54,
        rc: 55,
        Zb: 56,
        Tc: 57,
        Qc: 58,
        hc: 59,
        Cc: 60,
        sc: 61,
        xc: 62,
        Hb: 63,
        md: 64,
        Lb: 65,
        Kb: 66,
        yc: 67,
        Sb: 68,
        bc: 69,
        lc: 70,
        Dc: 71,
        jc: 72,
        Rc: 73,
        zc: 74,
        ua: 75,
        Jb: 76,
        Nc: 77,
        cc: 78,
        ld: 79,
        tc: 80,
        Pb: 81,
        Bc: 82,
        mc: 83,
        oc: 84,
        nc: 85,
        pc: 86,
        qc: 87,
        Mb: 88,
        Eb: 89,
        Nb: 90,
        Hc: 91,
        Ec: 92,
        Rb: 93,
        xd: 94,
        ec: 95,
        dc: 96,
        gc: 97,
        uc: 98,
        ac: 99,
        Ac: 100
    };

    function EMBld(a) {
        for (var b = [], c = EMBmd, d = a.elements, e, f = 0; e = d[f]; f++)
            if (!(e.form != a || e.disabled || "fieldset" == e.tagName.toLowerCase())) {
                var g = e.name;
                switch (e.type.toLowerCase()) {
                    case "file":
                    case "submit":
                    case "reset":
                    case "button":
                        break;
                    case "select-multiple":
                        e = EMBnd(e);
                        if (e != EMBd)
                            for (var h, i = 0; h = e[i]; i++) c(b, g, h);
                        break;
                    default:
                        h = EMBnd(e), h != EMBd && c(b, g, h)
                }
            } d = a.getElementsByTagName("input");
        for (f = 0; e = d[f]; f++) e.form == a && "image" == e.type.toLowerCase() && (g = e.name, c(b, g, e.value), c(b, g + ".x", "0"), c(b, g +
            ".y", "0"));
        return b.join("&")
    }

    function EMBmd(a, b, c) {
        a.push(encodeURIComponent(b) + "=" + encodeURIComponent(c))
    }

    function EMBnd(a) {
        var b = a.type;
        if (!EMBi(b)) return EMBd;
        switch (b.toLowerCase()) {
            case "checkbox":
            case "radio":
                return a.checked ? a.value : EMBd;
            case "select-one":
                return b = a.selectedIndex, 0 <= b ? a.options[b].value : EMBd;
            case "select-multiple":
                for (var b = [], c, d = 0; c = a.options[d]; d++) c.selected && b.push(c.value);
                return b.length ? b : EMBd;
            default:
                return EMBi(a.value) ? a.value : EMBd
        }
    };
    var EMBod = EMBd;
    "undefined" != typeof XMLHttpRequest ? EMBod = function() {
        return new XMLHttpRequest
    } : "undefined" != typeof ActiveXObject && (EMBod = function() {
        return new ActiveXObject("Microsoft.XMLHTTP")
    });

    function EMBpd(a, b, c, d, e) {
        var f = EMBod && EMBod();
        if ("open" in f) {
            f.onreadystatechange = function() {
                4 == (f && "readyState" in f ? f.readyState : 0) && b && b(f)
            };
            c = (c || "GET").toUpperCase();
            d = d || "";
            f.open(c, a, EMBc);
            a = "POST" == c;
            if (e)
                for (var g in e) f.setRequestHeader(g, e[g]), "content-type" == g.toLowerCase() && (a = EMBe);
            a && f.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            f.send(d);
            return f
        }
    }

    function EMBqd(a, b) {
        var c = b.format || "JSON";
        b.mb && (a = document.location.protocol + "//" + document.location.hostname + a);
        var d = b.P;
        d && (a = EMB9c(a, d));
        var e = b.jb || "";
        if (d = b.nb) e = EMB6c(e), EMBCa(e, d), e = EMB8c(e);
        var f = EMBe,
            g, h = EMBpd(a, function(a) {
                if (!f) {
                    f = EMBc;
                    g && window.clearTimeout(g);
                    var d;
                    a: switch (a && "status" in a ? a.status : -1) {
                        case 0:
                        case 200:
                        case 204:
                        case 304:
                            d = EMBc;
                            break a;
                        default:
                            d = EMBe
                    }
                    var e = EMBd;
                    if (d || 400 <= a.status && 500 > a.status) e = EMBrd(c, a);
                    if (d) a: {
                        switch (c) {
                            case "XML":
                                d = 0 == parseInt(e && e.return_code,
                                    10);
                                break a;
                            case "RAW":
                                d = EMBc;
                                break a
                        }
                        d = !!e
                    }
                    var e = e || {},
                        h = b.B || EMBf;
                    d ? b.C && b.C.call(h, a, e) : b.va && b.va.call(h, a, e);
                    b.ca && b.ca.call(h, a, e)
                }
            }, b.method, e, b.headers);
        b.ob && 0 < b.timeout && (g = EMBP(function() {
            f || (f = EMBc, h.abort(), window.clearTimeout(g), b.ob.call(b.B || EMBf, h))
        }, b.timeout))
    }

    function EMBrd(a, b) {
        var c = EMBd;
        switch (a) {
            case "JSON":
                var d = b.responseText,
                    e = b.getResponseHeader("Content-Type") || "";
                d && 0 <= e.indexOf("json") && (c = EMBuc(d));
                break;
            case "XML":
                if (d = (d = b.responseXML) ? EMBsd(d) : EMBd) c = {}, EMBr(d.getElementsByTagName("*"), function(a) {
                    c[a.tagName] = EMBtd(a)
                })
        }
        return c
    }

    function EMBsd(a) {
        return !a ? EMBd : (a = ("responseXML" in a ? a.responseXML : a).getElementsByTagName("root")) && 0 < a.length ? a[0] : EMBd
    }

    function EMBtd(a) {
        var b = "";
        EMBr(a.childNodes, function(a) {
            b += a.nodeValue
        });
        return b
    }
    var EMBud = {
            html5_ajax: "action_get_html5_token",
            watch_actions_ajax: "action_get_watch_actions_token",
            addto_ajax: "action_get_wl_token"
        },
        EMBvd = {
            html5_ajax: "html5_ajax_token",
            watch_actions_ajax: "watch_actions_ajax_token",
            addto_ajax: "addto_ajax_token"
        };

    function EMBwd() {
        var a = EMBxd;
        if (EMBcc() && a) window.setTimeout(a, 0);
        else {
            var b = EMB1c() + "/token_ajax",
                c = {};
            c[EMBud.html5_ajax] = 1;
            EMBqd(b, {
                format: "RAW",
                method: "GET",
                P: c,
                ca: function(b) {
                    if (b = EMB6c(b.responseText)[EMBvd.html5_ajax]) EMBac("html5_ajax", b), a && a()
                }
            })
        }
    };
    var EMByd = EMBg("yt.pubsub.instance_") || new EMBS;
    EMBS.prototype.subscribe = EMBS.prototype.ra;
    EMBS.prototype.unsubscribeByKey = EMBS.prototype.ba;
    EMBS.prototype.publish = EMBS.prototype.Ca;
    EMBS.prototype.clear = EMBS.prototype.clear;
    EMBm("yt.pubsub.instance_", EMByd);

    function EMBzd(a, b) {
        var c = EMBg("yt.pubsub.instance_");
        c && c.subscribe(a, function() {
            var a = arguments;
            EMBP(function() {
                b.apply(EMBf, a)
            }, 0)
        }, EMBb)
    }

    function EMBAd(a, b) {
        var c = EMBg("yt.pubsub.instance_");
        c && c.publish.apply(c, arguments)
    };

    function EMBBd(a, b) {
        var c = "scriptload-" + EMBoa(a),
            d = document.getElementById(c),
            e = d && EMBI(d, "loaded"),
            f = d && !e;
        if (e) b && b();
        else if (f) b && EMBzd(c, b);
        else {
            d && (c = "scriptload-" + (Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ EMBl()).toString(36)));
            b && EMBzd(c, b);
            var g = EMBCd(a, c, function() {
                if (!EMBI(g, "loaded")) {
                    var a = g;
                    a.dataset ? a.dataset[EMBsb("loaded")] = "true" : a.setAttribute("data-loaded", "true");
                    EMBAd(c);
                    var a = c,
                        b = EMBg("yt.pubsub.instance_");
                    b && b.clear(a)
                }
            })
        }
    }

    function EMBCd(a, b, c) {
        var d = document.createElement("script");
        d.id = b;
        d.onload = c;
        d.onreadystatechange = function() {
            if ("loaded" == d.readyState || "complete" == d.readyState) d.onload()
        };
        d.src = a;
        a = document.getElementsByTagName("head")[0];
        a.insertBefore(d, a.firstChild);
        return d
    };

    function EMBDd(a, b, c, d, e, f) {
        var g, h;
        if (g = c.offsetParent) {
            var i = "HTML" == g.tagName || "BODY" == g.tagName;
            if (!i || "static" != EMBW(g, "position")) h = EMBX(g), i || (i = (i = EMBNc(g)) && EMBw ? -g.scrollLeft : i && (!EMBv || !EMBy("8")) ? g.scrollWidth - g.clientWidth - g.scrollLeft : g.scrollLeft, h = EMBva(h, new EMBs(i, g.scrollTop)))
        }
        g = h || new EMBs;
        h = EMBMc(a);
        for (var i = new EMBT(0, Infinity, Infinity, 0), j = EMBC(a), k = j.a.body, l = j.a.documentElement, n = !EMBx && "CSS1Compat" == j.a.compatMode ? j.a.documentElement : j.a.body, m = a; m = EMBIc(m);)
            if ((!EMBv ||
                    0 != m.clientWidth) && (!EMBx || 0 != m.clientHeight || m != k) && m != k && m != l && "visible" != EMBW(m, "overflow")) {
                var p = EMBX(m),
                    o;
                o = m;
                if (EMBw && !EMBy("1.9")) {
                    var q = parseFloat(EMBU(o, "borderLeftWidth"));
                    if (EMBNc(o)) var r = o.offsetWidth - o.clientWidth - q - parseFloat(EMBU(o, "borderRightWidth")),
                        q = q + r;
                    o = new EMBs(q, parseFloat(EMBU(o, "borderTopWidth")))
                } else o = new EMBs(o.clientLeft, o.clientTop);
                p.x += o.x;
                p.y += o.y;
                i.top = Math.max(i.top, p.y);
                i.right = Math.min(i.right, p.x + m.clientWidth);
                i.bottom = Math.min(i.bottom, p.y + m.clientHeight);
                i.left = Math.max(i.left, p.x)
            } k = n.scrollLeft;
        n = n.scrollTop;
        i.left = Math.max(i.left, k);
        i.top = Math.max(i.top, n);
        j = EMBcb(j.a.parentWindow || j.a.defaultView || window);
        i.right = Math.min(i.right, k + j.width);
        i.bottom = Math.min(i.bottom, n + j.height);
        if (i = 0 <= i.top && 0 <= i.left && i.bottom > i.top && i.right > i.left ? i : EMBd) k = new EMBDc(i.left, i.top, i.right - i.left, i.bottom - i.top), i = Math.max(h.left, k.left), j = Math.min(h.left + h.width, k.left + k.width), i <= j && (n = Math.max(h.top, k.top), k = Math.min(h.top + h.height, k.top + k.height), n <= k && (h.left =
            i, h.top = n, h.width = j - i, h.height = k - n));
        i = EMBC(a);
        n = EMBC(c);
        if (i.a != n.a) {
            j = i.a.body;
            n = n.a.parentWindow || n.a.defaultView;
            k = new EMBs(0, 0);
            l = EMBD(j) ? EMBD(j).parentWindow || EMBD(j).defaultView : window;
            m = j;
            do p = l == n ? EMBX(m) : EMBJc(m), k.x += p.x, k.y += p.y; while (l && l != n && (m = l.frameElement) && (l = l.parent));
            j = EMBva(k, EMBX(j));
            EMBv && !EMBqb(i) && (j = EMBva(j, EMBrb(i)));
            h.left += j.x;
            h.top += j.y
        }
        a = (b & 4 && EMBNc(a) ? b ^ 2 : b) & -5;
        b = new EMBs(a & 2 ? h.left + h.width : h.left, a & 1 ? h.top + h.height : h.top);
        b = EMBva(b, g);
        e && (b.x += (a & 2 ? -1 : 1) * e.x, b.y +=
            (a & 1 ? -1 : 1) * e.y);
        EMBEd(b, c, d, f, EMBb, EMBb, EMBb)
    }

    function EMBEd(a, b, c, d, e, f, g) {
        var a = a.a(),
            h = (c & 4 && EMBNc(b) ? c ^ 2 : c) & -5,
            c = EMBY(b),
            g = g ? g.a() : c.a();
        if (d || 0 != h)(h & 2 ? a.x -= g.width + (d ? d.right : 0) : d && (a.x += d.left), h & 1) ? a.y -= g.height + (d ? d.bottom : 0) : d && (a.y += d.top);
        if (f) {
            if (e) {
                d = a;
                h = 0;
                if (65 == (f & 65) && (d.x < e.left || d.x >= e.right)) f &= -2;
                if (132 == (f & 132) && (d.y < e.top || d.y >= e.bottom)) f &= -5;
                d.x < e.left && f & 1 && (d.x = e.left, h |= 1);
                d.x < e.left && (d.x + g.width > e.right && f & 16) && (g.width = Math.max(g.width - (d.x + g.width - e.right), 0), h |= 4);
                d.x + g.width > e.right && f & 1 && (d.x = Math.max(e.right -
                    g.width, e.left), h |= 1);
                f & 2 && (h |= (d.x < e.left ? 16 : 0) | (d.x + g.width > e.right ? 32 : 0));
                d.y < e.top && f & 4 && (d.y = e.top, h |= 2);
                d.y >= e.top && (d.y + g.height > e.bottom && f & 32) && (g.height = Math.max(g.height - (d.y + g.height - e.bottom), 0), h |= 8);
                d.y + g.height > e.bottom && f & 4 && (d.y = Math.max(e.bottom - g.height, e.top), h |= 2);
                f & 8 && (h |= (d.y < e.top ? 64 : 0) | (d.y + g.height > e.bottom ? 128 : 0));
                e = h
            } else e = 256;
            if (e & 496) return
        }
        f = a;
        e = EMBw && (EMBHa || EMBRa) && EMBy("1.9");
        f instanceof EMBs ? (a = f.x, f = f.y) : (a = f, f = EMBb);
        b.style.left = EMBKc(a, e);
        b.style.top = EMBKc(f,
            e);
        if (!(c == g || (!c || !g ? 0 : c.width == g.width && c.height == g.height)))(a = EMBqb(EMBC(EMBD(b))), EMBv && (!a || !EMBy("8"))) ? (c = b.style, a) ? (EMBv ? (a = EMBOc(b, EMBV(b, "paddingLeft")), e = EMBOc(b, EMBV(b, "paddingRight")), f = EMBOc(b, EMBV(b, "paddingTop")), d = EMBOc(b, EMBV(b, "paddingBottom")), a = new EMBT(f, e, d, a)) : (a = EMBU(b, "paddingLeft"), e = EMBU(b, "paddingRight"), f = EMBU(b, "paddingTop"), d = EMBU(b, "paddingBottom"), a = new EMBT(parseFloat(f), parseFloat(e), parseFloat(d), parseFloat(a))), EMBv ? (e = EMBQc(b, "borderLeft"), f = EMBQc(b, "borderRight"),
            d = EMBQc(b, "borderTop"), b = EMBQc(b, "borderBottom"), b = new EMBT(d, f, b, e)) : (e = EMBU(b, "borderLeftWidth"), f = EMBU(b, "borderRightWidth"), d = EMBU(b, "borderTopWidth"), b = EMBU(b, "borderBottomWidth"), b = new EMBT(parseFloat(d), parseFloat(f), parseFloat(b), parseFloat(e))), c.pixelWidth = g.width - b.left - a.left - a.right - b.right, c.pixelHeight = g.height - b.top - a.top - a.bottom - b.bottom) : (c.pixelWidth = g.width, c.pixelHeight = g.height) : (b = b.style, EMBw ? b.MozBoxSizing = "border-box" : EMBx ? b.WebkitBoxSizing = "border-box" : b.boxSizing = "border-box",
            b.width = Math.max(g.width, 0) + "px", b.height = Math.max(g.height, 0) + "px")
    };
    var EMB2 = {},
        EMBFd = "ontouchstart" in document;

    function EMBGd(a, b) {
        var c = EMB2[a].maxNumParents[b],
            d;
        0 < c ? d = c : -1 != a.indexOf("mouse") && (d = 2);
        return d
    }

    function EMBHd(a, b, c) {
        return EMBpb(b, function(b) {
            return EMBB(b, a)
        }, EMBc, c) || EMBd
    }

    function EMBL(a) {
        if ("HTML" != a.target.tagName && a.type in EMB2) {
            var b = EMB2[a.type],
                c;
            for (c in b.l) {
                var d = EMBGd(a.type, c),
                    e = EMBHd(c, a.target, d);
                if (e) {
                    var f = EMBc;
                    b.checkRelatedTarget[c] && (a.relatedTarget && EMBpb(a.relatedTarget, function(a) {
                        return a == e
                    }, EMBc, d)) && (f = EMBe);
                    f && b.Ca(c, e, a.type, a)
                }
            }
        }
    }
    EMBK(document, "blur", EMBL, EMBc);
    EMBK(document, "change", EMBL, EMBc);
    EMBK(document, "click", EMBL);
    EMBK(document, "focus", EMBL, EMBc);
    EMBK(document, "mouseover", EMBL);
    EMBK(document, "mouseout", EMBL);
    EMBK(document, "mousedown", EMBL);
    EMBK(document, "keydown", EMBL);
    EMBK(document, "keyup", EMBL);
    EMBK(document, "keypress", EMBL);
    EMBK(document, "cut", EMBL);
    EMBK(document, "paste", EMBL);
    EMBFd && (EMBK(document, "touchstart", EMBL), EMBK(document, "touchend", EMBL), EMBK(document, "touchcancel", EMBL));
    var EMBId = window.yt && window.yt.uix && window.yt.uix.widgets_ || {};
    EMBm("yt.uix.widgets_", EMBId);

    function EMBJd(a) {
        var a = a.getInstance(),
            b = EMB3(a);
        !(b in EMBId) && a.Da() && (a.M(), EMBId[b] = a)
    };

    function EMBKd() {
        this.a = {}
    }
    EMB = EMBKd.prototype;
    EMB.Cb = !!eval("/*@cc_on!@*/false");
    EMB.Da = function() {
        return EMBc
    };

    function EMB4(a, b, c, d) {
        var d = EMB3(a, d),
            e = EMBk(c, a);
        b in EMB2 || (EMB2[b] = new EMBS, EMB2[b].maxNumParents = {}, EMB2[b].checkRelatedTarget = {});
        b = EMB2[b];
        b.ra(d, e);
        b.maxNumParents[d] = EMBb;
        b.checkRelatedTarget[d] = EMBb;
        a.a[c] = e
    }
    EMB.N = function(a, b, c) {
        var d = this.getData(a, b);
        if (d && (d = EMBg(d))) {
            var e = EMBua(arguments, 2);
            EMBta(e, 0, 0, a);
            d.apply(EMBd, e)
        }
    };
    EMB.getData = function(a, b) {
        return EMBI(a, b)
    };
    EMB.setData = function(a, b, c) {
        a.dataset ? a.dataset[EMBsb(b)] = c : a.setAttribute("data-" + b, c)
    };

    function EMB3(a, b) {
        return "yt-uix" + (a.A ? "-" + a.A : "") + (b ? "-" + b : "")
    };

    function EMB5() {
        this.a = {}
    }
    EMBn(EMB5, EMBKd);
    EMBh(EMB5);
    EMB = EMB5.prototype;
    EMB.A = "tooltip";
    EMB.V = 0;
    EMB.M = function() {
        EMB4(this, "mouseover", this.U);
        EMB4(this, "mouseout", this.J);
        EMB4(this, "click", this.J);
        EMB4(this, "touchstart", this.fa);
        EMB4(this, "touchend", this.T);
        EMB4(this, "touchcancel", this.T)
    };
    EMB.Da = function() {
        return !(this.Cb && 0 == EMBZa.indexOf("6"))
    };
    EMB.U = function(a) {
        if (!(this.V && 1E3 > EMBl() - this.V)) {
            var b = parseInt(this.getData(a, "tooltip-hide-timer"), 10);
            b && (EMBJ(a, "tooltip-hide-timer"), window.clearTimeout(b));
            var b = EMBk(function() {
                    EMBLd(this, a);
                    EMBJ(a, "tooltip-show-timer")
                }, this),
                c = parseInt(this.getData(a, "tooltip-show-delay"), 10) || 0,
                b = EMBP(b, c);
            this.setData(a, "tooltip-show-timer", b.toString());
            a.title && (this.setData(a, "tooltip-text", a.title), a.title = "")
        }
    };
    EMB.J = function(a) {
        var b = parseInt(this.getData(a, "tooltip-show-timer"), 10);
        b && (window.clearTimeout(b), EMBJ(a, "tooltip-show-timer"));
        b = EMBk(function() {
            if (a) {
                var b = EMBE(EMBMd(this, a));
                if (b) {
                    EMBNd(b);
                    b && b.parentNode && b.parentNode.removeChild(b);
                    EMBJ(a, "content-id")
                }
            }
            EMBJ(a, "tooltip-hide-timer")
        }, this);
        b = EMBP(b, 50);
        this.setData(a, "tooltip-hide-timer", b.toString());
        if (b = this.getData(a, "tooltip-text")) a.title = b
    };
    EMB.fa = function(a, b, c) {
        this.V = 0;
        this.U(EMBHd(EMB3(this), c.changedTouches[0].target, EMBGd(b, EMB3(this))), b)
    };
    EMB.T = function(a, b, c) {
        this.V = EMBl();
        this.J(EMBHd(EMB3(this), c.changedTouches[0].target, EMBGd(b, EMB3(this))), b)
    };

    function EMBOd(a, b, c) {
        a.setData(b, "tooltip-text", c);
        a = a.getData(b, "content-id");
        if (a = EMBE(a)) a.innerHTML = c
    }
    EMB.Fa = function(a) {
        return this.getData(a, "tooltip-text") || a.title
    };

    function EMBLd(a, b) {
        if (b) {
            var c = a.Fa(b);
            if (c) {
                var d = EMBE(EMBMd(a, b));
                if (!d) {
                    d = document.createElement("div");
                    d.id = EMBMd(a, b);
                    d.className = EMB3(a, "tip");
                    var e = document.createElement("div");
                    e.className = EMB3(a, "tip-body");
                    var f = document.createElement("div");
                    f.className = EMB3(a, "tip-arrow");
                    var g = document.createElement("div");
                    g.className = EMB3(a, "tip-content");
                    var h = EMBPd(a, b),
                        i = EMBMd(a, b, "content");
                    g.id = i;
                    a.setData(b, "content-id", i);
                    e.appendChild(g);
                    h && d.appendChild(h);
                    d.appendChild(e);
                    d.appendChild(f);
                    (EMBxb() || document.body).appendChild(d);
                    EMBOd(a, b, c);
                    if ((c = parseInt(a.getData(b, "tooltip-max-width"), 10)) && e.offsetWidth > c) e.style.width = c + "px", EMBz(g, EMB3(a, "normal-wrap"));
                    g = EMBB(b, EMB3(a, "reverse"));
                    a.ga(b, d, e, h, f, g) || a.ga(b, d, e, h, f, !g);
                    var j = EMB3(a, "tip-visible");
                    EMBP(function() {
                        EMBz(d, j)
                    }, 0)
                }
            }
        }
    }
    EMB.ga = function(a, b, c, d, e, f) {
        EMB7a(b, EMB3(this, "tip-reverse"), f);
        var g = 0;
        f && (g = 1);
        var e = EMBY(a),
            f = new EMBs((e.width - 10) / 2, f ? e.height : 0),
            h = EMBX(a);
        EMBEd(new EMBs(h.x + f.x, h.y + f.y), b, g);
        var g = EMBcb(window),
            h = EMBJc(b),
            b = EMBY(c),
            i = b.width / 2;
        d && (d.style.left = "3px", d.style.height = b.height + "px", d.style.width = b.width + "px");
        d = !!(g.height < h.y + e.height);
        e = !!(h.y < e.height);
        f = !!(h.x < i);
        g = !!(g.width < h.x + i);
        h = (b.width + 3) / -2 - -5;
        a = this.getData(a, "force-tooltip-direction");
        if ("left" == a || f) h = -5;
        else if ("right" == a ||
            g) h = 20 - b.width - 3;
        c.style.left = h + "px";
        return !(d || e)
    };

    function EMBMd(a, b, c) {
        var a = EMB3(a),
            d = b.__yt_uid_key;
        d || (d = EMBub(), b.__yt_uid_key = d);
        b = a + d;
        c && (b += "-" + c);
        return b
    }

    function EMBPd(a, b) {
        var c = EMBd;
        EMBIa && EMBB(b, EMB3(a, "masked")) && ((c = EMBE("yt-uix-tooltip-shared-mask")) ? (c.parentNode.removeChild(c), EMBUc(c)) : (c = document.createElement("iframe"), c.src = 'javascript:""', c.id = "yt-uix-tooltip-shared-mask", c.className = EMB3(a, "tip-mask")));
        return c
    }

    function EMBNd(a) {
        var b = EMBE("yt-uix-tooltip-shared-mask"),
            c = b && EMBpb(b, function(b) {
                return b == a
            }, EMBe, 2);
        b && c && (b.parentNode.removeChild(b), EMBZ(b), document.body.appendChild(b))
    };
    !EMBv || EMB1a(9);
    !EMBv || EMB1a(9);
    EMBv && EMBy("8");
    !EMBx || EMBy("528");
    EMBw && EMBy("1.9b") || EMBv && EMBy("8") || EMBNa && EMBy("9.5") || EMBx && EMBy("528");
    EMBw && !EMBy("8") || EMBv && EMBy("9");
    EMBv || EMBw && EMBy("1.9.3");
    var EMBQd = EMBf.window;

    function EMBRd(a, b) {
        "function" == EMBaa(a) ? b && (a = EMBk(a, b)) : a && "function" == typeof a.handleEvent ? a = EMBk(a.handleEvent, a) : EMBa(Error("Invalid listener argument"));
        EMBQd.setTimeout(a, 200)
    };
    new EMBS;

    function EMBSd() {}
    EMBh(EMBSd);
    EMBSd.getInstance();
    document.createElement("input");

    function EMB6() {
        this.a = {}
    }
    EMBn(EMB6, EMBKd);
    EMBh(EMB6);
    EMB6.prototype.A = "expander";
    EMB6.prototype.M = function() {
        EMB4(this, "click", this.b, "head");
        EMB4(this, "keypress", this.d, "head")
    };
    EMB6.prototype.b = function(a) {
        EMBTd(this, a)
    };
    EMB6.prototype.d = function(a, b, c) {
        c && 13 == c.keyCode && EMBTd(this, a)
    };

    function EMBTd(a, b) {
        var c = EMBH(b, EMB3(a));
        c && (EMB8a(c, EMB3(a, "collapsed")), a.N(c, "expander-action"))
    }

    function EMB7(a, b) {
        var c = EMBH(b, EMB3(a));
        c && (EMBz(c, EMB3(a, "collapsed")), a.N(c, "expander-action"))
    };

    function EMBUd(a, b, c, d) {
        this.c = a;
        this.$ = EMBe;
        a = EMB1c() + "/share_ajax";
        EMBqd(a, {
            format: "JSON",
            P: {
                action_get_email: 1,
                video_id: c,
                list: d
            },
            C: function(a, c) {
                this.c.innerHTML = c.email_html;
                this.D();
                this.focus();
                var d = c.sharing_binary_url;
                d && EMBVd(this, d, c.contacts, b)
            },
            B: this
        })
    }
    EMB = EMBUd.prototype;
    EMB.D = function() {
        this.o = this.c.getElementsByTagName("form")[0];
        EMBK(this.o, "submit", EMBk(this.Na, this));
        EMBG("share-email-send", this.o);
        this.Z = EMBG("share-email-success", this.c);
        this.d = EMBG("share-email-remail", this.Z);
        EMBK(this.d, "click", EMBk(function() {
            EMBWd(this);
            this.focus()
        }, this));
        this.aa = EMBG("share-email-recipients", this.c);
        this.a = EMBG("share-email-note", this.c);
        this.b = EMBG("share-email-preview-note", this.c);
        EMBK(this.a, "keyup", EMBk(this.Ma, this))
    };

    function EMBVd(a, b, c, d) {
        EMBBd(b, EMBk(function() {
            var a = EMBg("yt.sharing.ContactTools");
            a && a.createContactTools(this.aa, EMBd, c, d)
        }, a))
    }
    EMB.q = function() {
        this.o && (this.$ && EMBWd(this), this.focus())
    };
    EMB.focus = function() {
        this.aa.focus()
    };

    function EMBWd(a) {
        a.$ = EMBe;
        a.aa.value = "";
        a.a.value = "";
        a.b.innerHTML = "";
        EMBZ(a.Z);
        EMBUc(a.o)
    }
    EMB.Ma = function() {
        var a = this.a.value,
            a = a.substring(0, 300),
            a = EMBo(a),
            a = a.replace(/\n/g, "<br>");
        this.b.innerHTML = a
    };
    EMB.Na = function(a) {
        a.preventDefault();
        var b = EMBF("button", EMBd, this.o)[0];
        b.disabled = EMBc;
        var c = EMBG("share-email-captcha", this.c),
            d = EMBG("share-email-error", this.c),
            e = EMBG("yt-alert-content", d),
            a = EMB1c() + EMB2c(this.o.action);
        EMBqd(a, {
            format: "JSON",
            method: "POST",
            jb: EMBld(this.o),
            C: function() {
                this.$ = EMBc;
                EMBUc(this.Z);
                EMBZ(this.o);
                EMBZ(d);
                EMBZ(c)
            },
            va: function(a, b) {
                b.captcha_html && (c.innerHTML = b.captcha_html, EMBUc(c));
                b.errors && (e.innerHTML = b.errors.join("<br>"), EMBUc(d))
            },
            ca: function() {
                b.disabled =
                    EMBe
            },
            B: this
        })
    };

    function EMBXd(a, b, c) {
        this.c = a;
        a = EMB1c() + "/share_ajax";
        EMBqd(a, {
            format: "JSON",
            P: {
                action_get_embed: 1,
                video_id: b,
                list: c
            },
            C: function(a, b) {
                this.c.innerHTML = b.embed_html;
                this.La = b.legacy_url;
                this.Ka = b.legacy_code;
                this.Ja = b.iframe_url;
                this.Ia = b.iframe_code;
                this.D();
                EMB0.getInstance();
                this.w && (this.w.checked = !EMBhd(EMBkd.ta));
                this.O.checked = EMBhd(EMBkd.sa);
                this.u && (this.u.checked = EMBhd(EMBkd.ua));
                var c;
                EMBfd("ems");
                c = EMB1.ems !== EMBb ? EMB1.ems.toString() : EMBd;
                c = c != EMBd ? c : "";
                (c in this.k ? this.k[c] : EMBxa(this.k)).select();
                EMB8(this);
                this.q()
            },
            B: this
        })
    }
    EMB = EMBXd.prototype;
    EMB.D = function() {
        this.a = EMBG("share-embed-code", this.c);
        EMBK(this.a, "click", EMBk(this.Ta, this));
        EMBYd(this);
        EMBZd(this)
    };

    function EMBYd(a) {
        var b = EMBG("share-embed-size-list", a.c),
            c = EMB$a("share-embed-size-radio", b);
        a.k = {};
        EMBr(c, function(a) {
            EMBB(a, "share-embed-size-radio-custom") || (a = new EMB_d(a), this.k[a.name] = a)
        }, a);
        var c = EMBxa(a.k).width / EMBxa(a.k).height,
            d = EMBG("share-embed-size-radio-custom", b),
            c = new EMB0d(d, c);
        a.k[c.name] = c;
        a.d = c;
        EMBDb(b, EMBk(a.kb, a), "share-embed-size");
        b = EMBG("share-embed-customize", b);
        EMBK(b, "keyup", EMBk(a.lb, a))
    }

    function EMBZd(a) {
        var b = {},
            c = EMB$a("share-embed-option", a.c);
        EMBr(c, function(a) {
            b[a.name] = a
        });
        a.w = b["show-related"];
        a.w && EMBK(a.w, "click", EMBk(a.fb, a));
        a.O = b["delayed-cookies"];
        EMBK(a.O, "click", EMBk(a.eb, a));
        a.b = b["use-https"];
        EMBK(a.b, "click", EMBk(a.hb, a));
        a.u = b["use-flash-code"] || EMBd;
        a.u && EMBK(a.u, "click", EMBk(a.gb, a))
    }
    EMB.q = function() {
        this.focus()
    };
    EMB.focus = function() {
        this.a && (this.a.focus(), this.a.select())
    };

    function EMB8(a) {
        var b = a.Ia,
            c = a.Ja;
        a.u && a.u.checked && (b = a.Ka, c = a.La);
        a.O.checked && (c = c.replace("youtube.com", "youtube-nocookie.com"));
        a.b.checked && (c = c.split("//"), c[0] = "https:", c = c.join("//"));
        var d = {};
        a.w && !a.w.checked && (d.rel = 0);
        c = EMB9c(c, d);
        d = EMB1d(a);
        if (!d.width || 200 > d.width) d = EMBxa(a.k);
        b = b.replace(/__url__/g, EMBo(c));
        b = b.replace(/__width__/g, d.width + "");
        b = b.replace(/__height__/g, d.height + "");
        b = EMBo(b);
        b != a.a.innerHTML && (a.a.innerHTML = b)
    }

    function EMB1d(a) {
        return EMBza(a.k, function(a) {
            return a.L.checked
        }) || EMBd
    }
    EMB.fb = function() {
        var a = this.w.checked,
            b = EMB0.getInstance();
        EMBid(EMBkd.ta, !a);
        EMBjd(b);
        EMB8(this)
    };
    EMB.eb = function() {
        var a = this.O.checked,
            b = EMB0.getInstance();
        EMBid(EMBkd.sa, a);
        EMBjd(b);
        EMB8(this)
    };
    EMB.hb = function() {
        EMB8(this)
    };
    EMB.gb = function() {
        var a = this.u.checked,
            b = EMB0.getInstance();
        EMBid(EMBkd.ua, a);
        EMBjd(b);
        EMB8(this)
    };
    EMB.Ta = function() {
        this.focus()
    };
    EMB.kb = function(a) {
        a = this.k[EMBG("share-embed-size-radio", a.currentTarget).value];
        a.select();
        var b = EMB0.getInstance(),
            c = a.name;
        EMBfd("ems");
        EMBed(c);
        EMB1.ems = c.toString();
        EMBjd(b);
        EMB8(this);
        a != this.d && this.focus()
    };
    EMB.lb = function() {
        EMB8(this)
    };

    function EMB_d(a) {
        this.name = a.value;
        this.L = a;
        this.width = parseInt(EMBI(this.L, "width"), 10);
        this.height = parseInt(EMBI(this.L, "height"), 10)
    }
    EMB_d.prototype.select = function() {
        this.L.checked = EMBc;
        var a = EMBob(this.L, "li"),
            b = EMBob(a, "ul"),
            b = EMBF("li", "selected", b);
        EMBr(b, function(a) {
            EMBA(a, "selected")
        });
        EMBz(a, "selected")
    };

    function EMB0d(a, b) {
        EMB_d.call(this, a);
        this.d = b;
        var c = EMBob(a, "li");
        this.b = EMBG("share-embed-size-custom-width", c);
        this.a = EMBG("share-embed-size-custom-height", c);
        EMBK(this.b, "keyup", EMBk(this.f, this));
        EMBK(this.a, "keyup", EMBk(this.e, this))
    }
    EMBn(EMB0d, EMB_d);
    EMB0d.prototype.f = function() {
        this.width = parseInt(this.b.value, 10);
        this.height = Math.round(this.width / this.d) || 0;
        this.a.value = this.height + ""
    };
    EMB0d.prototype.e = function() {
        this.height = parseInt(this.a.value, 10);
        this.width = Math.round(this.height * this.d) || 0;
        this.b.value = this.width + ""
    };

    function EMB2d(a, b, c, d) {
        this.c = a;
        this.d = b || EMBd;
        this.X = c || EMBd;
        EMB3d(this, d)
    }
    var EMB4d = {
        FACEBOOK: "share_facebook",
        BLOGGER: "share_blogger",
        TWITTER: "share_twitter"
    };

    function EMB5d(a) {
        var b = ["h", "m", "s"],
            c = EMBra(b);
        c.reverse();
        var d = {},
            a = a.toLowerCase().match(/\d+\s*[hms]?/g) || [],
            a = EMBqa(a, function(a) {
                var b = (a.match(/[hms]/) || [""])[0];
                return b ? (d[b] = parseInt(a.match(/\d+/)[0], 10), EMBe) : EMBc
            });
        for (a.reverse(); a.length && c.length;) {
            var e = c.shift();
            e in d || (d[e] = parseInt(a.shift(), 10))
        }
        if (a.length || 59 < d.s || 59 < d.m || 9 < d.h) return EMBd;
        var f = "";
        EMBr(b, function(a) {
            d[a] && (f += d[a] + a)
        });
        return f || EMBd
    }

    function EMB3d(a, b) {
        var c = EMB1c() + "/share_ajax";
        EMBqd(c, {
            format: "JSON",
            P: {
                action_get_share_box: 1,
                video_id: a.d,
                list: a.X
            },
            C: function(a, c) {
                this.c.innerHTML = c.share_html;
                this.Sa = c.url_short;
                this.Ra = c.url_long;
                this.ib = c.lang;
                this.Y = EMBd;
                "session_index" in c && (this.Y = c.session_index);
                this.D();
                b && b();
                this.q()
            },
            B: a
        })
    }
    EMB = EMB2d.prototype;
    EMB.D = function() {
        var a = EMBG("share-panel-show-url-options");
        EMBK(a, "click", EMBk(this.ab, this));
        a = EMBG("share-panel-show-more");
        EMBK(a, "click", EMBk(this.Xa, this));
        a = EMBG("share-panel-embed", this.c);
        EMBK(a, "click", EMBk(this.Va, this));
        a = EMBG("share-panel-email", this.c);
        EMBK(a, "click", EMBk(this.Ua, this));
        (a = EMBG("share-panel-hangout", this.c)) && EMBK(a, "click", EMBk(this.Wa, this));
        this.g = EMBG("share-panel-url", this.c);
        EMBK(this.g, "click", EMBk(this.bb, this));
        EMBK(this.g, "focus", EMBk(function() {
            EMBz(this.g,
                "focused")
        }, this));
        EMBK(this.g, "blur", EMBk(function() {
            EMBA(this.g, "focused")
        }, this));
        this.oa = EMBG("share-panel-long-url", this.c);
        this.e = EMBG("share-panel-start-at", this.c);
        this.n = EMBG("share-panel-start-at-time", this.c);
        EMBK(this.n, "keyup", EMBk(this.cb, this));
        EMBK(this.n, "click", EMBk(this.$a, this));
        EMBK(this.n, "focus", EMBk(function() {
            EMBz(this.n, "focused")
        }, this));
        EMBK(this.n, "blur", EMBk(function() {
            EMBA(this.n, "focused")
        }, this));
        this.na = EMBG("share-panel-hd", this.c);
        this.f = EMBG("share-panel-url-options",
            this.c);
        EMBK(this.f, "click", EMBk(this.pa, this));
        this.r = EMBG("share-panel-services", this.c);
        this.ia = EMBG("share-panel-buttons", this.c);
        a = EMBG("share-panel-show-more", this.c);
        EMBK(a, "click", EMBk(this.Za, this));
        EMBDb(this.c, EMBk(this.Ya, this), "share-service-button")
    };
    EMB.q = function() {
        this.g && !EMBB(this.g, "focused") && (this.g.focus(), this.g.select())
    };
    EMB.pa = function() {
        if (!EMBB(this.g, "focused")) {
            var a = this.Sa;
            this.oa && this.oa.checked && (a = this.Ra);
            var b = {};
            this.na && this.na.checked && (b.hd = 1);
            var c = !this.e.disabled && this.e.checked && EMB5d(this.n.value);
            c && (b.t = c);
            a = EMB3c(EMB5c([a], b));
            this.g.value != a && (this.g.value = a)
        }
    };
    EMB.cb = function() {
        this.e.checked = EMBc;
        this.pa()
    };
    EMB.$a = function() {
        this.e.checked = EMBc;
        this.n.value.match(/[1-9]/) || (this.n.value = "")
    };
    EMB.bb = function() {
        this.g.select()
    };
    EMB.Ua = function() {
        var a = EMB6.getInstance();
        EMB7(a, this.ia);
        EMB7(a, this.f);
        EMB7(a, this.r);
        this.b && EMBZ(this.b);
        this.a || (this.a = EMBG("share-panel-email-container", this.c));
        EMBTc(this.a);
        !EMBI(this.a, "disabled") && EMBSc(this.a) && (this.ja ? this.ja.q() : this.ja = new EMBUd(this.a, this.Y, this.d, this.X));
        EMBad && EMBbd("share_mail")
    };
    EMB.Wa = function() {
        var a = EMBO("PLAYER_REFERENCE");
        a && a.pauseVideo && a.pauseVideo();
        var a = EMB3c(EMB5c(["http://web.archive.org/web/20120609184921/https://talkgadget.google.com/hangouts"], {
                hl: this.ib,
                authuser: this.Y,
                gid: "youtube",
                gd: this.d
            })),
            b = window.screen.height,
            c = Math.min(0.9 * window.screen.width, 1E3),
            b = Math.min(0.9 * b, 800);
        EMBcd("HANGOUT", this.d + "");
        EMBdd(a, {
            width: c,
            height: b
        })
    };
    EMB.Va = function() {
        var a = EMB6.getInstance();
        EMB7(a, this.ia);
        EMB7(a, this.f);
        EMB7(a, this.r);
        this.a && EMBZ(this.a);
        this.b || (this.b = EMBG("share-panel-embed-container", this.c));
        EMBTc(this.b);
        !EMBI(this.b, "disabled") && EMBSc(this.b) && (this.ka ? this.ka.q() : this.ka = new EMBXd(this.b, this.d, this.X));
        EMBad && EMBbd("share_embed")
    };
    EMB.Ya = function(a) {
        a = EMBI(a.currentTarget, "service-name") || "";
        (a = EMB4d[a]) && EMBad && EMBbd(a)
    };
    EMB.ab = function() {
        EMB7(EMB6.getInstance(), this.r);
        this.a && EMBZ(this.a);
        this.b && EMBZ(this.b)
    };
    EMB.Xa = function() {
        EMB7(EMB6.getInstance(), this.f);
        this.a && EMBZ(this.a);
        this.b && EMBZ(this.b)
    };
    EMB.Za = function() {
        this.a && EMBZ(this.a);
        this.b && EMBZ(this.b)
    };
    var EMB6d = 0;
    new function(a, b) {
        this.start = a;
        this.end = b;
        EMB6d++
    }(0, 0);

    function EMB7d() {
        this.a = {}
    }
    EMBn(EMB7d, EMBKd);
    EMBh(EMB7d);
    EMB = EMB7d.prototype;
    EMB.A = "button";
    EMB.M = function() {
        EMB4(this, "click", this.sb);
        EMB4(this, "keydown", this.tb);
        EMB4(this, "keypress", this.ub)
    };
    EMB.sb = function(a) {
        a && !a.disabled && (EMB8d(this, a), this.click(a))
    };
    EMB.tb = function(a, b, c) {
        if (!c.altKey && (!c.ctrlKey && !c.shiftKey) && (b = EMB9(this, a))) {
            var d = function(a) {
                var b = "";
                a.tagName && (b = a.tagName.toLowerCase());
                return "ul" == b || "table" == b
            };
            if (d = d(b) ? b : EMBjb(b, d)) {
                var d = d.tagName.toLowerCase(),
                    e;
                "ul" == d ? e = this.xb : "table" == d && (e = this.wb);
                e && EMB9d(this, a, b, c, EMBk(e, this))
            }
        }
    };

    function EMB9d(a, b, c, d, e) {
        var f = EMBSc(c),
            g = 9 == d.keyCode;
        g || 32 == d.keyCode || 13 == d.keyCode ? (d = EMB$d(a, c)) ? (b = d.firstElementChild != EMBb ? d.firstElementChild : EMBib(d.firstChild), "a" == b.tagName.toLowerCase() ? window.location = b.href : EMBHb(b)) : g && EMBae(a, b) : f ? 27 == d.keyCode ? (EMB$d(a, c), EMBae(a, b)) : e(b, c, d) : (a = EMBB(b, EMB3(a, "reverse")) ? 38 : 40, d.keyCode == a && (EMBHb(b), d.preventDefault()))
    }
    EMB.ub = function(a, b, c) {
        !c.altKey && (!c.ctrlKey && !c.shiftKey) && (a = EMB9(this, a), EMBSc(a) && c.preventDefault())
    };

    function EMB$d(a, b) {
        var c = EMB3(a, "menu-item-highlight"),
            d = EMBG(c, b);
        d && EMBA(d, c);
        return d
    }

    function EMBbe(a, b, c) {
        EMBz(c, EMB3(a, "menu-item-highlight"));
        b.setAttribute("aria-activedescendant", c.getAttribute("id"))
    }
    EMB.wb = function(a, b, c) {
        var d = EMB$d(this, b),
            b = EMBwb("table", b),
            e = EMBwb("tr", b),
            e = EMBF("td", EMBd, e).length,
            b = EMBF("td", EMBd, b),
            d = EMBce(d, b, e, c); - 1 != d && (EMBbe(this, a, b[d]), c.preventDefault())
    };
    EMB.xb = function(a, b, c) {
        if (40 == c.keyCode || 38 == c.keyCode) {
            var d = EMB$d(this, b),
                b = EMBF("li", EMBd, b),
                d = EMBce(d, b, 1, c);
            EMBbe(this, a, b[d]);
            c.preventDefault()
        }
    };

    function EMBce(a, b, c, d) {
        var e = b.length,
            a = EMBq(b, a);
        if (-1 == a)
            if (38 == d.keyCode) a = e - c;
            else {
                if (37 == d.keyCode || 38 == d.keyCode || 40 == d.keyCode) a = 0
            }
        else 39 == d.keyCode ? (a % c == c - 1 && (a -= c), a += 1) : 37 == d.keyCode ? (0 == a % c && (a += c), a -= 1) : 38 == d.keyCode ? (a < c && (a += e), a -= c) : 40 == d.keyCode && (a >= e - c && (a -= e), a += c);
        return a
    }

    function EMBde(a, b) {
        if (!EMBIa || !EMBB(b, EMB3(a, "masked"))) return EMBd;
        var c = b.iframeMask;
        c || (c = document.createElement("iframe"), c.src = 'javascript:""', c.className = EMB3(a, "menu-mask"), b.iframeMask = c);
        return c
    }

    function EMBee(a, b) {
        if (a.getData(b, "button-menu-root-container")) {
            var c = a.getData(b, "button-menu-root-container");
            return EMBH(b, c)
        }
        return document.body
    }
    EMB.Ea = function(a) {
        if (a) {
            var b = EMB9(this, a);
            if (b) {
                a.setAttribute("aria-pressed", "true");
                a.setAttribute("aria-expanded", "true");
                b.originalParentNode = b.parentNode;
                b.activeButtonNode = a;
                b.parentNode.removeChild(b);
                this.getData(a, "button-has-sibling-menu") ? a.parentNode.appendChild(b) : EMBee(this, a).appendChild(b);
                b.style.minWidth = a.offsetWidth - 2 + "px";
                var c = EMBde(this, a);
                c && document.body.appendChild(c);
                var c = EMBH(a, EMB3(this, "group")),
                    d = !!this.getData(a, "button-menu-ignore-group"),
                    c = c && !d ? c : a,
                    d = 5,
                    e = 4,
                    f =
                    EMBMc(a);
                if (EMBB(a, EMB3(this, "reverse"))) {
                    d = 4;
                    e = 5;
                    f = f.top + "px";
                    try {
                        b.style.maxHeight = f
                    } catch (g) {}
                }
                EMBB(a, "flip") && (EMBB(a, EMB3(this, "reverse")) ? (d = 6, e = 7) : (d = 7, e = 6));
                var h;
                this.getData(a, "button-has-sibling-menu") ? h = EMBIc(c) : this.getData(a, "button-menu-root-container") && (h = EMBee(this, a));
                EMBv && !EMBy("8") && (h = EMBd);
                var i;
                h && (i = EMBMc(h), i = new EMBT(-i.top, i.left, i.top, -i.left));
                h = new EMBs(0, 1);
                if (f = EMBde(this, a)) {
                    var j = EMBY(b);
                    f.style.width = j.width + "px";
                    f.style.height = j.height + "px";
                    EMBDd(c, d, f, e, h, i)
                }
                EMBDd(c,
                    d, b, e, h, i);
                EMBUc(b);
                this.N(a, "button-menu-action", EMBc);
                EMBz(a, EMB3(this, "active"));
                i = EMBk(this.rb, this, a);
                b = EMBK(document, "click", i);
                i = EMBK(document, "contextmenu", i);
                this.setData(a, "button-listener", b);
                this.setData(a, "button-context-menu-listener", i)
            }
        }
    };

    function EMBae(a, b) {
        if (b) {
            var c = EMB9(a, b);
            if (c) {
                b.setAttribute("aria-pressed", "false");
                b.setAttribute("aria-expanded", "false");
                EMBZ(c);
                a.N(b, "button-menu-action", EMBe);
                var d = EMBde(a, b);
                EMBP(function() {
                    d && d.parentNode && d.parentNode.removeChild(d);
                    c.originalParentNode && (c.parentNode.removeChild(c), c.originalParentNode.appendChild(c), c.originalParentNode = EMBd, c.activeButtonNode = EMBd)
                }, 1)
            }
            var e = EMBH(b, EMB3(a, "group"));
            EMBA(b, EMB3(a, "active"));
            e && EMBA(e, EMB3(a, "group-active"));
            if (e = a.getData(b, "button-listener")) EMBGb(e),
                EMBJ(b, "button-listener");
            if (e = a.getData(b, "button-context-menu-listener")) EMBGb(e), EMBJ(b, "button-context-menu-listener")
        }
    }
    EMB.rb = function(a, b) {
        var c;
        c = b || window.event;
        c = c.target || c.srcElement;
        3 == c.nodeType && (c = c.parentNode);
        var d = EMBH(c, EMB3(this));
        if (d) {
            var d = EMB9(this, d),
                e = EMB9(this, a);
            if (d == e) return
        }
        if (!EMBH(c, EMB3(this, "menu")) || EMBB(c, EMB3(this, "menu-item")) || EMBB(c, EMB3(this, "menu-close")))
            if (EMBae(this, a), (d = EMBH(c, EMB3(this, "menu"))) && this.getData(a, "button-menu-indicate-selected")) {
                if (e = EMBG(EMB3(this, "content"), a)) {
                    var f;
                    EMB4a && "innerText" in c ? f = c.innerText.replace(/(\r\n|\r|\n)/g, "\n") : (f = [], EMBnb(c, f, EMBc),
                        f = f.join(""));
                    f = f.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
                    f = f.replace(/\u200B/g, "");
                    EMB4a || (f = f.replace(/ +/g, " "));
                    " " != f && (f = f.replace(/^\s*/, ""));
                    if ("textContent" in e) e.textContent = f;
                    else if (e.firstChild && 3 == e.firstChild.nodeType) {
                        for (; e.lastChild != e.firstChild;) e.removeChild(e.lastChild);
                        e.firstChild.data = f
                    } else EMBhb(e), e.appendChild(EMBD(e).createTextNode(f))
                }
                e = EMB3(this, "menu-item-selected");
                (d = EMBG(e, d)) && EMBA(d, e);
                EMBz(c.parentNode, e)
            }
    };

    function EMB9(a, b) {
        if (!b.widgetMenu) {
            var c = a.getData(b, "button-menu-id"),
                c = c && EMBE(c),
                d = EMB3(a, "menu");
            c ? (EMBz(c, d), EMBz(c, EMB3(a, "menu-external"))) : c = EMBG(d, b);
            b.widgetMenu = c
        }
        return b.widgetMenu
    }

    function EMB8d(a, b) {
        if (a.getData(b, "button-toggle")) {
            var c = EMBH(b, EMB3(a, "group"));
            if (c && a.getData(c, "button-toggle-group")) {
                var d = a.getData(c, "button-toggle-group"),
                    c = EMB$a(EMB3(a), c),
                    e = EMB3(a, "toggled"),
                    f = EMBB(b, e);
                EMBr(c, function(a) {
                    a != b || "optional" == d && f ? EMBA(a, e) : EMBz(b, e)
                })
            } else EMB8a(b, EMB3(a, "toggled"))
        }
    }
    EMB.click = function(a) {
        if (EMB9(this, a)) {
            var b = EMB9(this, a),
                c = EMBH(b.activeButtonNode || b.parentNode, EMB3(this));
            c && c != a ? (EMBae(this, c), EMBP(EMBk(this.Ea, this, a), 1)) : EMBSc(b) ? EMBae(this, a) : this.Ea(a);
            a.focus()
        }
        this.N(a, "button-action")
    };
    new EMBS;

    function EMBfe() {
        var a = EMBJa();
        return (!a ? 0 : 0 <= a.toLowerCase().indexOf("android 2.2")) ? EMBc : (a = document.createElement("video")) && a.canPlayType && (a.canPlayType('video/mp4; codecs="avc1.42001E, mp4a.40.2"') || a.canPlayType('video/webm; codecs="vp8.0, vorbis"'))
    };

    function EMBge() {
        this.a = [];
        EMBhe(this)
    }
    EMBh(EMBge);
    EMB = EMBge.prototype;
    EMB.i = 0;
    EMB.z = 0;
    EMB.F = 0;
    EMB.da = "";
    EMB.p = 0;
    EMB.load = function(a) {
        3 <= this.p ? a(this) : this.a.push(a)
    };
    EMB.isSupported = function(a, b, c) {
        a = "string" == typeof a ? a.split(".") : [a, b, c];
        a[0] = parseInt(a[0], 10) || 0;
        a[1] = parseInt(a[1], 10) || 0;
        a[2] = parseInt(a[2], 10) || 0;
        return this.i > a[0] || this.i == a[0] && this.z > a[1] || this.i == a[0] && this.z == a[1] && this.F >= a[2]
    };

    function EMBhe(a) {
        if (3 > a.p)
            if (1 > a.p) {
                var b = EMBg("window.navigator.plugins"),
                    c = EMBg("window.navigator.mimeTypes"),
                    b = b && b["Shockwave Flash"],
                    c = c && c["application/x-shockwave-flash"],
                    c = b && c && c.enabledPlugin && b.description || "";
                if (b = c) {
                    var d = b.indexOf("Shockwave Flash");
                    0 <= d && (b = b.substr(d + 15));
                    for (var d = b.split(" "), e = "", b = "", f = 0, g = d.length; f < g; f++)
                        if (e)
                            if (b) break;
                            else b = d[f];
                    else e = d[f];
                    e = e.split(".");
                    d = parseInt(e[0], 10) || 0;
                    e = parseInt(e[1], 10) || 0;
                    f = 0;
                    if ("r" == b.charAt(0) || "d" == b.charAt(0)) f = parseInt(b.substr(1),
                        10) || 0;
                    b = [d, e, f]
                } else b = [0, 0, 0];
                a.da = c;
                c = b;
                a.i = c[0];
                a.z = c[1];
                a.F = c[2];
                a.p = 1;
                0 < a.i ? EMBie(a) : EMBhe(a)
            } else 2 > a.p ? EMBje(a) : EMBie(a)
    }
    EMB.Ga = function(a) {
        a ? (a = a.split(" ")[1].split(","), a = [parseInt(a[0], 10) || 0, parseInt(a[1], 10) || 0, parseInt(a[2], 10) || 0]) : a = [0, 0, 0];
        this.i = a[0];
        this.z = a[1];
        this.F = a[2];
        this.p = 2;
        0 < this.i ? EMBie(this) : EMBhe(this)
    };

    function EMBie(a) {
        if (3 > a.p) {
            a.p = 3;
            for (var b = 0, c = a.a.length; b < c; b++) a.a[b](a);
            a.a = []
        }
    }

    function EMBje(a) {
        function b() {
            if (c && "GetVariable" in c) try {
                d = c.GetVariable("$version")
            } catch (a) {
                d = ""
            }
            d || 10 <= i ? (e && f && e.removeChild(f), h(d || "")) : (i++, EMBP(b, 10))
        }
        var c, d, e, f;
        if (EMBec) {
            try {
                c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            } catch (g) {
                c = EMBd
            }
            c || a.Ga("")
        } else e = document.getElementsByTagName("body")[0], f = document.createElement("object"), f.setAttribute("type", "application/x-shockwave-flash"), c = e.appendChild(f);
        var h = EMBk(a.Ga, a),
            i = 0;
        EMBP(b, 0)
    };

    function EMBke(a, b) {
        a = EMBE(a);
        b instanceof EMBR || (b = new EMBR(b));
        if (window != window.top) {
            var c = EMBd;
            document.referrer && (c = document.referrer.substring(0, 128));
            b.args.framer = c
        }
        EMBle(function(c) {
            if (c.isSupported(b.minVersion) || EMBO("IS_OPERA_MINI")) {
                var e = (-1 < c.da.indexOf("Gnash") && -1 == c.da.indexOf("AVM2") || 9 == c.i && 1 == c.z || 9 == c.i && 0 == c.z && 1 == c.F ? EMBe : 9 <= c.i) && b.url || (-1 < navigator.userAgent.indexOf("Sony/COM2") && !c.isSupported(9, 1, 58) ? EMBe : EMBc) && b.urlV9As2 || b.urlV8 || b.url,
                    c = a,
                    f = b;
                if ((c = EMBE(c)) && e && f) {
                    f instanceof
                    EMBR || (f = new EMBR(f));
                    var g = EMBAa(f.attrs),
                        h = EMBAa(f.params);
                    h.flashvars = EMB8c(f.args);
                    if (EMBec) {
                        g.classid = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";
                        h.movie = e;
                        var e = document.createElement("object"),
                            i;
                        for (i in g) e.setAttribute(i, g[i]);
                        for (i in h) g = document.createElement("param"), g.setAttribute("name", i), g.setAttribute("value", h[i]), e.appendChild(g)
                    } else {
                        g.type = "application/x-shockwave-flash";
                        g.src = e;
                        e = document.createElement("embed");
                        for (i in g) e.setAttribute(i, g[i]);
                        for (i in h) e.setAttribute(i,
                            h[i])
                    }
                    i = document.createElement("div");
                    i.appendChild(e);
                    c.innerHTML = i.innerHTML
                }
            } else 0 == c.i && b.fallback ? b.fallback() : 0 == c.i && b.fallbackMessage ? b.fallbackMessage() : a.innerHTML = '<div id="flash-upgrade">' + EMBdc("FLASH_UPGRADE", EMBb, 'You need to upgrade your Adobe Flash Player to watchthis video. <br> <a href="http://web.archive.org/web/20120609184921/http://get.adobe.com/flashplayer/">Download it from Adobe.</a>') + "</div>"
        })
    }

    function EMBle(a) {
        EMBge.getInstance().load(function(b) {
            var c = EMB0.getInstance(),
                d = [b.i, b.z, b.F].join(".");
            EMBfd("fv");
            EMBed(d);
            EMB1.fv = d.toString();
            EMBjd(c);
            a(b)
        })
    };

    function EMBme() {
        this.a = {}
    }
    EMBn(EMBme, EMB5);
    EMBh(EMBme);
    EMB = EMBme.prototype;
    EMB.A = "range-tooltip";
    EMB.H = EMBd;
    EMB.format = EMBd;
    EMB.max = 0;
    EMB.Aa = 0;
    EMB.za = 0;
    EMB.S = EMBd;
    EMB.Fa = function() {
        return " "
    };
    EMB.ga = function(a, b) {
        this.H = b;
        var c = this.getData(a, this.A + "-format");
        c && (this.format = EMBg(c));
        this.max = parseInt(this.getData(a, "range-max"), 10);
        this.Aa = EMBX(a).x;
        this.za = EMBY(a).width
    };
    EMB.M = function() {
        EMB5.prototype.M.call(this);
        EMB4(this, "mousemove", this.xa);
        EMB4(this, "touchmove", this.ya)
    };
    EMB.U = function(a, b) {
        this.Ba || (EMB5.prototype.U.call(this, a, b), EMBK(document, "mousemove", EMBL))
    };
    EMB.J = function(a, b) {
        EMB5.prototype.J.call(this, a, b);
        EMBFb("mousemove")
    };
    EMB.fa = function(a, b, c) {
        this.S || (this.S = c.changedTouches[0].identifier, EMB5.prototype.fa.call(this, a, b, c), EMBK(document, "touchmove", EMBL), this.ya(0, b, c))
    };
    EMB.T = function(a, b, c) {
        EMB5.prototype.T.call(this, a, b, c);
        EMBFb("touchmove");
        this.Ba = EMBc;
        EMBRd(function() {
            this.Ba = EMBe
        }, this);
        this.S = EMBd
    };
    EMB.xa = function(a, b, c) {
        if (this.H) {
            b = (c.pageX - this.Aa) / this.za;
            b = Math.min(Math.max(b, 0), 1);
            b *= this.max;
            this.format && (b = this.format(b));
            EMBOd(this, a, b);
            var b = EMBG(EMB3(this, "tip-body"), this.H),
                d = this.H,
                e = new EMBs(-5, 0),
                a = EMBX(a);
            EMBEd(new EMBs(c.pageX + e.x, a.y + e.y), d, 0);
            c = (EMBY(b).width + 3) / -2 - -5;
            b.style.left = c + "px"
        }
    };
    EMB.ya = function(a, b, c) {
        if (this.H)
            for (a = 0; a < c.changedTouches.length; a++) {
                var d = c.changedTouches[a];
                if (d.identifier == this.S) {
                    c.pageX = d.pageX;
                    c.pageY = d.pageY;
                    this.xa(EMBHd(EMB3(this), d.target, EMBGd(b, EMB3(this))), 0, c);
                    break
                }
            }
    };

    function EMBne() {}
    EMB = EMBne.prototype;
    EMB.wa = EMBe;
    EMB.G = EMBd;
    EMB.R = EMBd;
    EMB.qb = function() {
        EMB7a(this.G, "actions-mode", EMBe)
    };
    EMB.pb = function() {
        600 > this.G.clientWidth && EMBz(this.R, "small-view")
    };
    EMB.ea = EMBd;
    EMB.zb = function(a, b) {
        if (!this.wa) {
            this.wa = EMBc;
            this.G = EMBG("player-root", EMBb);
            this.R = EMBG("player-actions-container", this.G);
            var c = EMBG("player-actions-close", this.R);
            EMBK(c, "click", EMBk(this.qb, this))
        }
        EMB7a(this.G, "actions-mode", EMBc);
        this.ea ? this.ea.q() : (c = EMBG("player-actions-share", this.R), this.ea = new EMB2d(c, a, b, EMBk(this.pb, this)))
    };
    var EMBoe = EMBg("yt.playerConfig") || {};
    EMBm("yt.playerConfig", EMBoe);
    var EMBpe = EMBg("yt.player.playerReferences_") || {};
    EMBm("yt.player.playerReferences_", EMBpe);

    function EMBqe(a) {
        var b = EMBE("player");
        if (b) {
            var c;
            c = a instanceof EMBR ? a : new EMBR(a);
            var a = !!c.disable.html5,
                d = !!c.disable.flash,
                e = EMBfe() && (EMBg("yt.player.VideoPlayer") || c.assets.js);
            c.args.eurl || (c.args.eurl = EMBre());
            c.args.enablejsapi = "1";
            var f = EMBe;
            c.html5 && (f = EMBc);
            f && !e && (c.args.html5_unavailable = "1");
            var g = {
                    pubsub: new EMBS,
                    subscribedEvents: {}
                },
                h = b;
            EMBse(b, c);
            var h = EMBG("player-container", b),
                b = "player" + (h[EMBea] || (h[EMBea] = ++EMBfa)),
                i = {
                    target: h,
                    playerId: b,
                    playerapiid: c.args.playerapiid,
                    jsapicallback: EMBte(c.args.jsapicallback),
                    elementId: c.attrs.id,
                    api: g,
                    onReadyCalled: EMBe,
                    eventLabel: c.args.el,
                    actions: new EMBne
                };
            c.args.playerapiid = b;
            c.args.jsapicallback = "ytPlayerOnYouTubePlayerReady";
            var j, k, l = EMBue;
            f && e ? (j = EMBve, d || (k = l)) : (j = l, e && !a && (k = EMBve));
            k && (c.fallback = function(a) {
                a = a || c;
                a instanceof EMBR || (a = new EMBR(a));
                delete a.fallback;
                f ? a.args.autoplay = 1 : EMBwd();
                a.attrs.id = i.elementId;
                k(h, a)
            });
            c.fallbackMessage = EMBwe(i);
            EMBpe[b] = i;
            EMBP(function() {
                j(h, c)
            }, 0);
            return g
        }
    }

    function EMBxd() {
        EMBqd("/html5", {
            mb: EMBc,
            method: "POST",
            nb: {
                prefer_html5: EMBc,
                session_token: EMBcc()
            }
        })
    }

    function EMBwe(a) {
        var b = a.target,
            c = a.eventLabel;
        return function() {
            var a = EMBdc("PLAYER_FALLBACK_OVERRIDE");
            if (!a) {
                var a = EMBdc("PLAYER_FALLBACK", EMBb, 'The Adobe Flash Player or an HTML5 supported browser is required for video playback. <br> <a href="http://web.archive.org/web/20120609184921/http://get.adobe.com/flashplayer/">Get the latest Flash Player</a> <br> <a href="/html5">Learn more about upgrading to an HTML5 browser</a>'),
                    e = navigator.userAgent.match(/Version\/(\d).*Safari/);
                e && 5 <= parseInt(e[1], 10) && (a = EMBdc("QUICKTIME_FALLBACK", EMBb,
                    'The Adobe Flash Player or QuickTime is required for video playback. <br> <a href="http://web.archive.org/web/20120609184921/http://get.adobe.com/flashplayer/">Get the latest Flash Player</a> <br> <a href="http://web.archive.org/web/20120609184921/http://www.apple.com/quicktime/download/">Get the latest version of QuickTime</a>'))
            }
            b.innerHTML = '<div class="fallback-message">' + a + "</div>";
            "embedded" == c && EMBr(b.getElementsByTagName("a"), function(a) {
                a.setAttribute("target", "_blank")
            })
        }
    }

    function EMBse(a, b) {
        EMBz(a, "player-root");
        b.attrs.width && EMBEc(a, "width", b.attrs.width);
        b.attrs.height && EMBEc(a, "height", b.attrs.height);
        EMBEc(a, "overflow", "hidden");
        var c = EMBdb("div", "player-container"),
            d = EMBdb("div", "player-actions-container", EMBdb("div", "player-actions-share"), EMBdb("div", "player-actions-close", EMBdb("div", "player-actions-close-button")));
        EMBgb(a, c, d)
    }

    function EMBve(a, b) {
        EMBxe(a);
        b.attrs.id = b.attrs.id + "-html5";
        var c = EMBg("yt.player.VideoPlayer");
        c ? new c(a, b) : EMBBd(b.assets.js, function() {
            new(EMBg("yt.player.VideoPlayer"))(a, b)
        })
    }

    function EMBue(a, b) {
        EMBxe(a);
        b.attrs.id = b.attrs.id + "-flash";
        EMBke(a, b)
    }

    function EMBxe(a) {
        a = EMBE(a);
        EMBhb(a)
    }

    function EMBre() {
        var a = "unknown";
        document.referrer && (a = document.referrer.substring(0, 128));
        return a
    }

    function EMBye(a) {
        var b = EMBpe[a],
            c = EMBE(b.target).firstElementChild != EMBb ? EMBE(b.target).firstElementChild : EMBib(EMBE(b.target).firstChild),
            d = c.getApiInterface();
        EMBr(d, function(a) {
            b.api[a] = EMBk(c[a], c)
        });
        b.api.yb = EMBk(b.api.destroy, c);
        b.api.destroy = EMBk(function() {
            this.yb();
            delete EMBpe[a]
        }, b.api);
        b.api.nativeAddEventListener = EMBk(b.api.addEventListener, c);
        for (var e in b.api.subscribedEvents) b.api.nativeAddEventListener(e, EMBze(b.api, e));
        b.api.addEventListener = EMBAe;
        "embedded" === b.eventLabel && b.api.addEventListener("SHARE_CLICKED",
            EMBk(b.actions.zb, b.actions));
        b.onReadyCalled || (b.onReadyCalled = EMBc, b.jsapicallback ? (d = b.jsapicallback) && d(b.playerapiid) : window.onYouTubePlayerReady && onYouTubePlayerReady(b.playerapiid))
    }

    function EMBze(a, b) {
        var c = "ytPlayer" + (b + (a[EMBea] || (a[EMBea] = ++EMBfa))),
            d = EMBk(function(a) {
                this.pubsub.publish(b, a)
            }, a);
        EMBm(c, d);
        return c
    }

    function EMBAe(a, b) {
        var c = EMBte(b);
        this.subscribedEvents[a] || this.nativeAddEventListener(a, EMBze(this, a));
        this.subscribedEvents[a] = 1;
        this.pubsub.subscribe(a, c)
    }

    function EMBte(a) {
        var b = a;
        "string" == typeof a && (b = function() {
            EMBg(a).apply(window, arguments)
        });
        b || (b = EMBg("onYouTubePlayerReady"));
        return b
    }
    EMBg("ytPlayerOnYouTubePlayerReady") || EMBm("ytPlayerOnYouTubePlayerReady", EMBye);
    EMBm("yt.setAjaxToken", EMBac);
    EMBm("yt.tracking.share", EMBcd);
    EMBm("yt.window.popup", EMBdd);
    EMBJd(EMB7d);
    EMBJd(EMB6);
    EMBJd(EMB5);
    EMBJd(EMBme);
    EMB6b || (EMB6b = new EMB3b);
    if (-1 != window.location.href.indexOf("Debug=true")) {
        var EMBBe = EMB6b;
        if (EMBc != EMBBe.b) {
            var EMBCe;
            EMB2b || (EMB2b = new EMBN(""), EMB2b.b = EMB0b);
            EMBCe = EMB2b;
            var EMBDe = EMBBe.r;
            EMBCe.a || (EMBCe.a = []);
            EMBCe.a.push(EMBDe);
            EMBBe.b = EMBc
        }
    };
    var EMB$, EMBgc = new EMBfc,
        EMBEe = EMBd;

    function EMBFe(a, b) {
        var c = EMB$;
        c[a] && (c[a].apply(c, b || []), (0 == a.search("cue") || 0 == a.search("load")) && EMBGe())
    }

    function EMBHe() {
        var a = document.documentElement.clientHeight || document.body.clientHeight,
            a = Math.round(100 * (a - EMBE("watch-longform-ad").offsetHeight) / a) + "%";
        EMBE("player").style.height = a
    }

    function EMBIe() {
        EMBEe = new EMBBc;
        EMBgc.a = EMBJe;
        var a = EMBgc;
        a.b = EMBFe;
        a.d = EMBd;
        EMB$.addEventListener("onStateChange", EMBKe);
        EMB$.addEventListener("onPlaybackQualityChange", EMBLe);
        EMB$.addEventListener("onError", EMBMe);
        EMB$.addEventListener("onVideoProgress", EMBNe);
        EMB$.addEventListener("onVolumeChange", EMBOe);
        EMB$.addEventListener("onApiChange", EMBPe)
    }

    function EMBGe() {
        for (var a = EMB$.getApiInterface(), b = {
                event: "initialDelivery",
                apiInterface: a,
                info: {}
            }, c = 0, d = a.length; c < d; c++) {
            var e = a[c];
            if (0 == e.search("get") || 0 == e.search("is")) {
                var f;
                f = e;
                var g = 0;
                0 == f.search("get") ? g = 3 : 0 == f.search("is") && (g = 2);
                f = f.charAt(g).toLowerCase() + f.substr(g + 1);
                try {
                    var h = EMB$[e]();
                    b.info[f] = h
                } catch (i) {}
            }
        }
        EMBQ(b)
    }

    function EMBKe(a) {
        a = {
            event: "onStateChange",
            info: {
                playerState: a,
                duration: EMB$.getDuration(),
                videoData: EMB$.getVideoData(),
                videoStartBytes: EMB$.getVideoStartBytes(),
                videoBytesTotal: EMB$.getVideoBytesTotal(),
                playbackQuality: EMB$.getPlaybackQuality(),
                availableQualityLevels: EMB$.getAvailableQualityLevels(),
                videoUrl: EMB$.getVideoUrl(),
                playlist: EMB$.getPlaylist(),
                playlistIndex: EMB$.getPlaylistIndex()
            }
        };
        EMBQ(a)
    }

    function EMBOe(a) {
        var b = EMBEe;
        if (b.a) {
            var c = {};
            c.volume = isNaN(a.volume) ? EMBCc(b).volume : Math.min(Math.max(a.volume, 0), 100);
            c.nonNormalized = a.nonNormalized;
            c.muted = a.muted == EMBb ? EMBCc(b).muted : a.muted;
            try {
                var d = b.a;
                if (EMBi(c)) {
                    var e = d.a,
                        f, a = [];
                    EMBwc(d.b, c, a);
                    f = a.join("");
                    try {
                        e.j.setItem("yt-player-volume", f)
                    } catch (g) {
                        EMBa("Storage mechanism: Quota exceeded")
                    }
                } else d.a.j.removeItem("yt-player-volume")
            } catch (h) {}
        }
        c = {
            event: "infoDelivery",
            info: {
                muted: EMB$.isMuted(),
                volume: EMB$.getVolume()
            }
        };
        EMBQ(c)
    }

    function EMBLe(a) {
        EMBQ({
            event: "onPlaybackQualityChange",
            info: {
                playbackQuality: a
            }
        })
    }

    function EMBNe(a) {
        a = {
            event: "infoDelivery",
            info: {
                currentTime: a,
                videoBytesLoaded: EMB$.getVideoBytesLoaded()
            }
        };
        EMBQ(a)
    }

    function EMBPe() {
        for (var a = EMB$.getOptions(), b = {
                event: "onApiChange",
                info: {
                    namespaces: a
                }
            }, c = 0, d = a.length; c < d; c++) {
            var e = a[c],
                f = EMB$.getOptions(e);
            b.info[e] = {
                options: f
            };
            for (var g = 0, h = f.length; g < h; g++) {
                var i = f[g],
                    j = EMB$.getOption(e, i);
                b.info[e][i] = j
            }
        }
        EMBQ(b)
    }

    function EMBMe(a) {
        EMBQ({
            event: "onError",
            error: a
        })
    }

    function EMBJe() {
        EMBGe();
        EMBQ({
            event: "onReady"
        })
    };
    EMBm("yt.embed.writeEmbed", function() {
        var a = new EMBR(EMBO("PLAYER_CONFIG")),
            b;
        b = a instanceof EMBR ? a.args : a.args;
        var c;
        c = EMBO("CONVERSION_CONFIG_DICT");
        if (!c || !c.socialEnabled) c = EMBd;
        else {
            var d, e = c.oeid,
                f = window.location.hash;
            d = EMB7c(f);
            var g = window.location,
                h, e = {
                    oeid: e
                },
                i = "";
            "#" == f.charAt(0) && (i = "!" == f.charAt(1) ? f.substr(0, 2) : f.substr(0, 1));
            f = EMB7c(f);
            for (h in e) f[h] = e[h];
            h = i + EMB8c(f);
            g.hash = h;
            d = d.oeid;
            c = c.ieid = d
        }
        c && (b.ieid = c);
        c = EMB7c(window.location.hash);
        (c = c.t || c.at) ? (d = window.location.hash.replace(/\bat=[^&]*&?/,
            ""), window.location.hash = d && "#" != d ? d : "#!", d = c, c = 0, -1 != d.indexOf("h") && (d = d.split("h"), c = 3600 * d[0], d = d[1]), -1 != d.indexOf("m") && (d = d.split("m"), c = 60 * d[0] + c, d = d[1]), -1 != d.indexOf("s")) ? (d = d.split("s"), c = 1 * d[0] + c) : c = 1 * d + c: c = 0;
        c && (b.start = c, b.resume = 1);
        window != window.top && (a.args.el = "embedded");
        EMBO("CUED_AUTOPLAY") && (a.args.autoplay = 1);
        a.args.jsapicallback = EMBIe;
        EMB$ = EMBqe(a)
    });
    EMBm("yt.setConfig", function(a) {
        EMBbc(EMB7b, arguments)
    });
    EMBm("yt.setMsg", function(a) {
        EMBbc(EMB9b, arguments)
    });
    EMBK(window, "load", EMB_.Bb);
    EMBK(window, "resize", EMBHe);
    EMBK(EMBE("watch-longform-ad-placeholder"), "resize", EMBHe);


}