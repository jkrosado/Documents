(function() {
    var f, aa = aa || {}, l = this;
    function ba(a, b, c) {
        a = a.split(".");
        c = c || l;
        a[0]in c || !c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift()); )
            a.length || void 0 === b ? c = c[d] ? c[d] : c[d] = {} : c[d] = b
    }
    function n(a, b) {
        for (var c = a.split("."), d = b || l, e; e = c.shift(); )
            if (null != d[e])
                d = d[e];
            else
                return null;
        return d
    }
    function ca() {}
    function da(a) {
        a.getInstance = function() {
            return a.oq ? a.oq : a.oq = new a
        }
    }
    function ea(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array)
                    return "array";
                if (a instanceof Object)
                    return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c)
                    return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))
                    return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))
                    return "function"
            } else
                return "null";
        else if ("function" == b && "undefined" == typeof a.call)
            return "object";
        return b
    }
    function q(a) {
        return void 0 !== a
    }
    function fa(a) {
        return null != a
    }
    function ga(a) {
        return "array" == ea(a)
    }
    function ha(a) {
        var b = ea(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }
    function r(a) {
        return "string" == typeof a
    }
    function ia(a) {
        return "number" == typeof a
    }
    function ja(a) {
        return "function" == ea(a)
    }
    function ka(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }
    function la(a) {
        return a[ma] || (a[ma] = ++na)
    }
    var ma = "closure_uid_" + (1E9 * Math.random() >>> 0)
      , na = 0;
    function oa(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
    function pa(a, b, c) {
        if (!a)
            throw Error();
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
    function t(a, b, c) {
        t = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? oa : pa;
        return t.apply(null, arguments)
    }
    function qa(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    }
    function ra(a, b) {
        for (var c in b)
            a[c] = b[c]
    }
    var u = Date.now || function() {
        return +new Date
    }
    ;
    function v(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.D = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Zy = function(a, c, g) {
            var h = Array.prototype.slice.call(arguments, 2);
            return b.prototype[c].apply(a, h)
        }
    }
    Function.prototype.bind = Function.prototype.bind || function(a, b) {
        if (1 < arguments.length) {
            var c = Array.prototype.slice.call(arguments, 1);
            c.unshift(this, a);
            return t.apply(null, c)
        }
        return t(this, a)
    }
    ;
    var sa = {}
      , ta = 0;
    function ua(a, b) {
        if (a) {
            var c = new Image
              , d = "" + ta++;
            sa[d] = c;
            c.onload = c.onerror = function() {
                b && sa[d] && b();
                delete sa[d]
            }
            ;
            c.src = a;
            c = eval("null")
        }
    }
    ;function va(a) {
        Error.captureStackTrace ? Error.captureStackTrace(this, va) : this.stack = Error().stack || "";
        a && (this.message = String(a))
    }
    v(va, Error);
    va.prototype.name = "CustomError";
    var wa;
    function xa(a, b) {
        for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length; )
            d += c.shift() + e.shift();
        return d + c.join("%s")
    }
    function ya(a) {
        return encodeURIComponent(String(a))
    }
    function za(a) {
        return decodeURIComponent(a.replace(/\+/g, " "))
    }
    function Aa(a) {
        if (!Ba.test(a))
            return a;
        -1 != a.indexOf("&") && (a = a.replace(Ca, "&amp;"));
        -1 != a.indexOf("<") && (a = a.replace(Da, "&lt;"));
        -1 != a.indexOf(">") && (a = a.replace(Ea, "&gt;"));
        -1 != a.indexOf('"') && (a = a.replace(Fa, "&quot;"));
        -1 != a.indexOf("'") && (a = a.replace(Ga, "&#39;"));
        return a
    }
    var Ca = /&/g
      , Da = /</g
      , Ea = />/g
      , Fa = /"/g
      , Ga = /'/g
      , Ba = /[&<>"']/;
    function Ha(a, b) {
        for (var c = 0, d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), g = Math.max(d.length, e.length), h = 0; 0 == c && h < g; h++) {
            var k = d[h] || ""
              , m = e[h] || ""
              , p = RegExp("(\\d*)(\\D*)", "g")
              , s = RegExp("(\\d*)(\\D*)", "g");
            do {
                var w = p.exec(k) || ["", "", ""]
                  , z = s.exec(m) || ["", "", ""];
                if (0 == w[0].length && 0 == z[0].length)
                    break;
                c = Ia(0 == w[1].length ? 0 : parseInt(w[1], 10), 0 == z[1].length ? 0 : parseInt(z[1], 10)) || Ia(0 == w[2].length, 0 == z[2].length) || Ia(w[2], z[2])
            } while (0 == c)
        }
        return c
    }
    function Ia(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }
    function Ja(a) {
        var b = Number(a);
        return 0 == b && /^[\s\xa0]*$/.test(a) ? NaN : b
    }
    function Ka(a) {
        return String(a).replace(/\-([a-z])/g, function(a, c) {
            return c.toUpperCase()
        })
    }
    function La(a) {
        var b = r(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
        return a.replace(RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
            return b + e.toUpperCase()
        })
    }
    ;function Ma() {}
    ;function Na(a) {
        return a[a.length - 1]
    }
    var Oa = Array.prototype
      , Pa = Oa.indexOf ? function(a, b, c) {
        return Oa.indexOf.call(a, b, c)
    }
    : function(a, b, c) {
        c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (r(a))
            return r(b) && 1 == b.length ? a.indexOf(b, c) : -1;
        for (; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
      , x = Oa.forEach ? function(a, b, c) {
        Oa.forEach.call(a, b, c)
    }
    : function(a, b, c) {
        for (var d = a.length, e = r(a) ? a.split("") : a, g = 0; g < d; g++)
            g in e && b.call(c, e[g], g, a)
    }
      , Qa = Oa.filter ? function(a, b, c) {
        return Oa.filter.call(a, b, c)
    }
    : function(a, b, c) {
        for (var d = a.length, e = [], g = 0, h = r(a) ? a.split("") : a, k = 0; k < d; k++)
            if (k in h) {
                var m = h[k];
                b.call(c, m, k, a) && (e[g++] = m)
            }
        return e
    }
      , Ra = Oa.map ? function(a, b, c) {
        return Oa.map.call(a, b, c)
    }
    : function(a, b, c) {
        for (var d = a.length, e = Array(d), g = r(a) ? a.split("") : a, h = 0; h < d; h++)
            h in g && (e[h] = b.call(c, g[h], h, a));
        return e
    }
      , Sa = Oa.some ? function(a, b, c) {
        return Oa.some.call(a, b, c)
    }
    : function(a, b, c) {
        for (var d = a.length, e = r(a) ? a.split("") : a, g = 0; g < d; g++)
            if (g in e && b.call(c, e[g], g, a))
                return !0;
        return !1
    }
      , Ta = Oa.every ? function(a, b, c) {
        return Oa.every.call(a, b, c)
    }
    : function(a, b, c) {
        for (var d = a.length, e = r(a) ? a.split("") : a, g = 0; g < d; g++)
            if (g in e && !b.call(c, e[g], g, a))
                return !1;
        return !0
    }
    ;
    function Ua(a, b, c) {
        b = Va(a, b, c);
        return 0 > b ? null : r(a) ? a.charAt(b) : a[b]
    }
    function Va(a, b, c) {
        for (var d = a.length, e = r(a) ? a.split("") : a, g = 0; g < d; g++)
            if (g in e && b.call(c, e[g], g, a))
                return g;
        return -1
    }
    function Wa(a, b) {
        var c = Xa(a, b, void 0);
        return 0 > c ? null : r(a) ? a.charAt(c) : a[c]
    }
    function Xa(a, b, c) {
        for (var d = r(a) ? a.split("") : a, e = a.length - 1; 0 <= e; e--)
            if (e in d && b.call(c, d[e], e, a))
                return e;
        return -1
    }
    function y(a, b) {
        return 0 <= Pa(a, b)
    }
    function Ya(a) {
        return 0 == a.length
    }
    function Za(a) {
        if (!ga(a))
            for (var b = a.length - 1; 0 <= b; b--)
                delete a[b];
        a.length = 0
    }
    function $a(a, b) {
        y(a, b) || a.push(b)
    }
    function ab(a, b) {
        var c = Pa(a, b), d;
        (d = 0 <= c) && bb(a, c);
        return d
    }
    function bb(a, b) {
        Oa.splice.call(a, b, 1)
    }
    function cb(a, b) {
        var c = Va(a, b, void 0);
        0 <= c && bb(a, c)
    }
    function db(a) {
        return Oa.concat.apply(Oa, arguments)
    }
    function eb(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++)
                c[d] = a[d];
            return c
        }
        return []
    }
    function fb(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c], e;
            if (ga(d) || (e = ha(d)) && Object.prototype.hasOwnProperty.call(d, "callee"))
                a.push.apply(a, d);
            else if (e)
                for (var g = a.length, h = d.length, k = 0; k < h; k++)
                    a[g + k] = d[k];
            else
                a.push(d)
        }
    }
    function gb(a, b, c, d) {
        Oa.splice.apply(a, hb(arguments, 1))
    }
    function hb(a, b, c) {
        return 2 >= arguments.length ? Oa.slice.call(a, b) : Oa.slice.call(a, b, c)
    }
    function ib(a) {
        for (var b = {}, c = 0, d = 0; d < a.length; ) {
            var e = a[d++]
              , g = ka(e) ? "o" + la(e) : (typeof e).charAt(0) + e;
            Object.prototype.hasOwnProperty.call(b, g) || (b[g] = !0,
            a[c++] = e)
        }
        a.length = c
    }
    function jb(a, b, c) {
        return kb(a, c || lb, !1, b)
    }
    function mb(a, b) {
        return kb(a, b, !0, void 0, void 0)
    }
    function kb(a, b, c, d, e) {
        for (var g = 0, h = a.length, k; g < h; ) {
            var m = g + h >> 1, p;
            p = c ? b.call(e, a[m], m, a) : b(d, a[m]);
            0 < p ? g = m + 1 : (h = m,
            k = !p)
        }
        return k ? g : ~g
    }
    function nb(a, b) {
        Oa.sort.call(a, b || lb)
    }
    function ob(a, b) {
        var c = lb;
        nb(a, function(a, e) {
            return c(a[b], e[b])
        })
    }
    function pb(a, b, c) {
        if (!ha(a) || !ha(b) || a.length != b.length)
            return !1;
        var d = a.length;
        c = c || qb;
        for (var e = 0; e < d; e++)
            if (!c(a[e], b[e]))
                return !1;
        return !0
    }
    function lb(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }
    function qb(a, b) {
        return a === b
    }
    function rb(a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            ga(d) ? b.push.apply(b, rb.apply(null, d)) : b.push(d)
        }
        return b
    }
    ;function sb(a) {
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")))
            try {
                return eval("(" + a + ")")
            } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    }
    function tb(a) {
        return eval("(" + a + ")")
    }
    function ub(a) {
        return vb(new wb(void 0), a)
    }
    function wb(a) {
        this.a = a
    }
    function vb(a, b) {
        var c = [];
        xb(a, b, c);
        return c.join("")
    }
    function xb(a, b, c) {
        switch (typeof b) {
        case "string":
            yb(b, c);
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
            if (null == b) {
                c.push("null");
                break
            }
            if (ga(b)) {
                var d = b.length;
                c.push("[");
                for (var e = "", g = 0; g < d; g++)
                    c.push(e),
                    e = b[g],
                    xb(a, a.a ? a.a.call(b, String(g), e) : e, c),
                    e = ",";
                c.push("]");
                break
            }
            c.push("{");
            d = "";
            for (g in b)
                Object.prototype.hasOwnProperty.call(b, g) && (e = b[g],
                "function" != typeof e && (c.push(d),
                yb(g, c),
                c.push(":"),
                xb(a, a.a ? a.a.call(b, g, e) : e, c),
                d = ","));
            c.push("}");
            break;
        case "function":
            break;
        default:
            throw Error("Unknown type: " + typeof b);
        }
    }
    var zb = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\u000b"
    }
      , Ab = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
    function yb(a, b) {
        b.push('"', a.replace(Ab, function(a) {
            if (a in zb)
                return zb[a];
            var b = a.charCodeAt(0)
              , e = "\\u";
            16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
            return zb[a] = e + b.toString(16)
        }), '"')
    }
    ;function Bb(a, b, c) {
        return Math.min(Math.max(a, b), c)
    }
    ;function A(a, b) {
        this.x = q(a) ? a : 0;
        this.y = q(b) ? b : 0
    }
    f = A.prototype;
    f.clone = function() {
        return new A(this.x,this.y)
    }
    ;
    function Cb(a, b) {
        var c = a.x - b.x
          , d = a.y - b.y;
        return Math.sqrt(c * c + d * d)
    }
    function Db(a, b) {
        return new A(a.x - b.x,a.y - b.y)
    }
    f.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    }
    ;
    f.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    }
    ;
    f.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    }
    ;
    f.scale = function(a, b) {
        var c = ia(b) ? b : a;
        this.x *= a;
        this.y *= c;
        return this
    }
    ;
    function Eb(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    f = Eb.prototype;
    f.clone = function() {
        return new Eb(this.top,this.right,this.bottom,this.left)
    }
    ;
    f.contains = function(a) {
        return this && a ? a instanceof Eb ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    }
    ;
    f.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    }
    ;
    f.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    }
    ;
    f.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    }
    ;
    f.scale = function(a, b) {
        var c = ia(b) ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= c;
        this.bottom *= c;
        return this
    }
    ;
    function B(a, b) {
        this.width = a;
        this.height = b
    }
    function Fb(a, b) {
        return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
    }
    f = B.prototype;
    f.clone = function() {
        return new B(this.width,this.height)
    }
    ;
    function Gb(a) {
        return a.width / a.height
    }
    f.isEmpty = function() {
        return !(this.width * this.height)
    }
    ;
    f.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    f.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    f.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    f.scale = function(a, b) {
        var c = ia(b) ? b : a;
        this.width *= a;
        this.height *= c;
        return this
    }
    ;
    function Hb(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }
    f = Hb.prototype;
    f.clone = function() {
        return new Hb(this.left,this.top,this.width,this.height)
    }
    ;
    function Ib(a) {
        return new Hb(a.left,a.top,a.right - a.left,a.bottom - a.top)
    }
    function Jb(a, b) {
        return a == b ? !0 : a && b ? a.left == b.left && a.width == b.width && a.top == b.top && a.height == b.height : !1
    }
    f.contains = function(a) {
        return a instanceof Hb ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
    }
    ;
    function Kb(a) {
        return new B(a.width,a.height)
    }
    f.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    f.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    f.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    f.scale = function(a, b) {
        var c = ia(b) ? b : a;
        this.left *= a;
        this.width *= a;
        this.top *= c;
        this.height *= c;
        return this
    }
    ;
    function Lb(a, b, c) {
        for (var d in a)
            b.call(c, a[d], d, a)
    }
    function Mb(a, b, c) {
        for (var d in a)
            if (b.call(c, a[d], d, a))
                return !0;
        return !1
    }
    function Nb(a, b) {
        for (var c in a)
            if (!b.call(void 0, a[c], c, a))
                return !1;
        return !0
    }
    function Ob(a) {
        var b = 0, c;
        for (c in a)
            b++;
        return b
    }
    function Pb(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = a[d];
        return b
    }
    function Qb(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = d;
        return b
    }
    function Rb(a, b) {
        for (var c in a)
            if (a[c] == b)
                return !0;
        return !1
    }
    function Sb(a, b, c) {
        for (var d in a)
            if (b.call(c, a[d], d, a))
                return d
    }
    function Tb(a) {
        var b = Ub;
        return (a = Sb(b, a, void 0)) && b[a]
    }
    function Vb(a) {
        for (var b in a)
            return !1;
        return !0
    }
    function Wb(a, b) {
        return b in a ? a[b] : void 0
    }
    function Xb(a) {
        var b = {}, c;
        for (c in a)
            b[c] = a[c];
        return b
    }
    function Yb(a) {
        var b = ea(a);
        if ("object" == b || "array" == b) {
            if (a.clone)
                return a.clone();
            var b = "array" == b ? [] : {}, c;
            for (c in a)
                b[c] = Yb(a[c]);
            return b
        }
        return a
    }
    var Zb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    function $b(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d)
                a[c] = d[c];
            for (var g = 0; g < Zb.length; g++)
                c = Zb[g],
                Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }
    function ac(a) {
        var b = arguments.length;
        if (1 == b && ga(arguments[0]))
            return ac.apply(null, arguments[0]);
        if (b % 2)
            throw Error("Uneven number of arguments");
        for (var c = {}, d = 0; d < b; d += 2)
            c[arguments[d]] = arguments[d + 1];
        return c
    }
    ;var bc, cc, dc, ec, fc, gc, hc;
    function ic() {
        return l.navigator ? l.navigator.userAgent : null
    }
    function jc() {
        return l.navigator
    }
    fc = ec = dc = cc = bc = !1;
    var kc;
    if (kc = ic()) {
        var lc = jc();
        bc = 0 == kc.lastIndexOf("Opera", 0);
        cc = !bc && (-1 != kc.indexOf("MSIE") || -1 != kc.indexOf("Trident"));
        ec = (dc = !bc && -1 != kc.indexOf("WebKit")) && -1 != kc.indexOf("Mobile");
        fc = !bc && !dc && !cc && "Gecko" == lc.product
    }
    var mc = bc
      , C = cc
      , nc = fc
      , oc = dc
      , pc = ec
      , qc = jc()
      , rc = qc && qc.platform || "";
    gc = -1 != rc.indexOf("Mac");
    hc = -1 != rc.indexOf("Win");
    var sc = !!jc() && -1 != (jc().appVersion || "").indexOf("X11");
    function tc() {
        var a = l.document;
        return a ? a.documentMode : void 0
    }
    var uc;
    t: {
        var vc = "", wc;
        if (mc && l.opera)
            var xc = l.opera.version
              , vc = "function" == typeof xc ? xc() : xc;
        else if (nc ? wc = /rv\:([^\);]+)(\)|;)/ : C ? wc = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : oc && (wc = /WebKit\/(\S+)/),
        wc)
            var yc = wc.exec(ic())
              , vc = yc ? yc[1] : "";
        if (C) {
            var zc = tc();
            if (zc > parseFloat(vc)) {
                uc = String(zc);
                break t
            }
        }
        uc = vc
    }
    var Ac = uc
      , Bc = {};
    function Cc(a) {
        return Bc[a] || (Bc[a] = 0 <= Ha(Ac, a))
    }
    function Dc(a) {
        return C && Ec >= a
    }
    var Fc = l.document
      , Ec = Fc && C ? tc() || ("CSS1Compat" == Fc.compatMode ? parseInt(Ac, 10) : 5) : void 0;
    var Gc = !C || Dc(9)
      , Hc = !nc && !C || C && Dc(9) || nc && Cc("1.9.1")
      , Ic = C && !Cc("9")
      , Jc = C || mc || oc;
    function Kc(a) {
        a = a.className;
        return r(a) && a.match(/\S+/g) || []
    }
    function Lc(a, b) {
        for (var c = Kc(a), d = hb(arguments, 1), e = c.length + d.length, g = c, h = 0; h < d.length; h++)
            y(g, d[h]) || g.push(d[h]);
        g = c.join(" ");
        a.className = g;
        return c.length == e
    }
    function Mc(a, b) {
        var c = Kc(a)
          , d = hb(arguments, 1)
          , c = Nc(c, d).join(" ");
        a.className = c
    }
    function Nc(a, b) {
        return Qa(a, function(a) {
            return !y(b, a)
        })
    }
    function Oc(a, b) {
        return y(Kc(a), b)
    }
    function Pc(a, b, c) {
        c ? Lc(a, b) : Mc(a, b)
    }
    ;function Qc(a) {
        return a ? new Rc(Sc(a)) : wa || (wa = new Rc)
    }
    function Tc(a) {
        return r(a) ? document.getElementById(a) : a
    }
    function Uc(a, b) {
        var c = b || document;
        return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : Vc("*", a, b)
    }
    function D(a, b) {
        var c = b || document
          , d = null;
        return (d = c.querySelectorAll && c.querySelector ? c.querySelector("." + a) : Vc("*", a, b)[0]) || null
    }
    function Vc(a, b, c) {
        var d = document;
        c = c || d;
        a = a && "*" != a ? a.toUpperCase() : "";
        if (c.querySelectorAll && c.querySelector && (a || b))
            return c.querySelectorAll(a + (b ? "." + b : ""));
        if (b && c.getElementsByClassName) {
            c = c.getElementsByClassName(b);
            if (a) {
                for (var d = {}, e = 0, g = 0, h; h = c[g]; g++)
                    a == h.nodeName && (d[e++] = h);
                d.length = e;
                return d
            }
            return c
        }
        c = c.getElementsByTagName(a || "*");
        if (b) {
            d = {};
            for (g = e = 0; h = c[g]; g++)
                a = h.className,
                "function" == typeof a.split && y(a.split(/\s+/), b) && (d[e++] = h);
            d.length = e;
            return d
        }
        return c
    }
    function Wc(a, b) {
        Lb(b, function(b, d) {
            "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Xc ? a.setAttribute(Xc[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
        })
    }
    var Xc = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };
    function Yc(a) {
        a = a.document;
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new B(a.clientWidth,a.clientHeight)
    }
    function Zc(a) {
        var b = $c(a);
        a = ad(a);
        return C && Cc("10") && a.pageYOffset != b.scrollTop ? new A(b.scrollLeft,b.scrollTop) : new A(a.pageXOffset || b.scrollLeft,a.pageYOffset || b.scrollTop)
    }
    function $c(a) {
        return oc || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement
    }
    function ad(a) {
        return a.parentWindow || a.defaultView
    }
    function E(a, b, c) {
        var d = arguments
          , e = document
          , g = d[0]
          , h = d[1];
        if (!Gc && h && (h.name || h.type)) {
            g = ["<", g];
            h.name && g.push(' name="', Aa(h.name), '"');
            if (h.type) {
                g.push(' type="', Aa(h.type), '"');
                var k = {};
                $b(k, h);
                delete k.type;
                h = k
            }
            g.push(">");
            g = g.join("")
        }
        g = e.createElement(g);
        h && (r(h) ? g.className = h : ga(h) ? Lc.apply(null, [g].concat(h)) : Wc(g, h));
        2 < d.length && bd(e, g, d, 2);
        return g
    }
    function bd(a, b, c, d) {
        function e(c) {
            c && b.appendChild(r(c) ? a.createTextNode(c) : c)
        }
        for (; d < c.length; d++) {
            var g = c[d];
            !ha(g) || ka(g) && 0 < g.nodeType ? e(g) : x(cd(g) ? eb(g) : g, e)
        }
    }
    function dd(a) {
        return document.createElement(a)
    }
    function ed(a) {
        return document.createTextNode(String(a))
    }
    function fd(a, b) {
        a.appendChild(b)
    }
    function gd(a, b) {
        bd(Sc(a), a, arguments, 1)
    }
    function hd(a) {
        for (var b; b = a.firstChild; )
            a.removeChild(b)
    }
    function id(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
    }
    function jd(a, b, c) {
        a.insertBefore(b, a.childNodes[c] || null)
    }
    function F(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    }
    function kd(a) {
        if (Jc && !(C && Cc("9") && !Cc("10") && l.SVGElement && a instanceof l.SVGElement))
            return a.parentElement;
        a = a.parentNode;
        return ka(a) && 1 == a.nodeType ? a : null
    }
    function ld(a, b) {
        if (a.contains && 1 == b.nodeType)
            return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition)
            return a == b || Boolean(a.compareDocumentPosition(b) & 16);
        for (; b && a != b; )
            b = b.parentNode;
        return b == a
    }
    function Sc(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    function md(a, b) {
        if ("textContent"in a)
            a.textContent = b;
        else if (3 == a.nodeType)
            a.data = b;
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild; )
                a.removeChild(a.lastChild);
            a.firstChild.data = b
        } else
            hd(a),
            a.appendChild(Sc(a).createTextNode(String(b)))
    }
    function nd(a, b) {
        var c = [];
        return od(a, b, c, !0) ? c[0] : void 0
    }
    function od(a, b, c, d) {
        if (null != a)
            for (a = a.firstChild; a; ) {
                if (b(a) && (c.push(a),
                d) || od(a, b, c, d))
                    return !0;
                a = a.nextSibling
            }
        return !1
    }
    var pd = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    }
      , qd = {
        IMG: " ",
        BR: "\n"
    };
    function rd(a, b, c) {
        if (!(a.nodeName in pd))
            if (3 == a.nodeType)
                c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in qd)
                b.push(qd[a.nodeName]);
            else
                for (a = a.firstChild; a; )
                    rd(a, b, c),
                    a = a.nextSibling
    }
    function cd(a) {
        if (a && "number" == typeof a.length) {
            if (ka(a))
                return "function" == typeof a.item || "string" == typeof a.item;
            if (ja(a))
                return "function" == typeof a.item
        }
        return !1
    }
    function sd(a, b) {
        return b ? td(a, function(a) {
            return !b || Oc(a, b)
        }, !0) : null
    }
    function td(a, b, c, d) {
        c || (a = a.parentNode);
        c = null == d;
        for (var e = 0; a && (c || e <= d); ) {
            if (b(a))
                return a;
            a = a.parentNode;
            e++
        }
        return null
    }
    function Rc(a) {
        this.a = a || l.document || document
    }
    f = Rc.prototype;
    f.M = function(a) {
        return r(a) ? this.a.getElementById(a) : a
    }
    ;
    f.createElement = function(a) {
        return this.a.createElement(a)
    }
    ;
    function ud(a) {
        return "CSS1Compat" == a.a.compatMode
    }
    function vd(a) {
        return Zc(a.a)
    }
    f.appendChild = fd;
    f.append = gd;
    f.getChildren = function(a) {
        return Hc && void 0 != a.children ? a.children : Qa(a.childNodes, function(a) {
            return 1 == a.nodeType
        })
    }
    ;
    f.contains = ld;
    function wd() {
        return oc ? "Webkit" : nc ? "Moz" : C ? "ms" : mc ? "O" : null
    }
    ;function xd(a, b, c) {
        r(b) ? yd(a, c, b) : Lb(b, qa(yd, a))
    }
    function yd(a, b, c) {
        var d;
        t: if (d = Ka(c),
        void 0 === a.style[d] && (c = wd() + La(c),
        void 0 !== a.style[c])) {
            d = c;
            break t
        }
        d && (a.style[d] = b)
    }
    function zd(a, b) {
        var c = Sc(a);
        return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
    }
    function Ad(a, b) {
        return zd(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }
    function Bd(a, b, c) {
        var d, e = nc && (gc || sc) && Cc("1.9");
        b instanceof A ? (d = b.x,
        b = b.y) : (d = b,
        b = c);
        a.style.left = Cd(d, e);
        a.style.top = Cd(b, e)
    }
    function Dd(a) {
        var b;
        try {
            b = a.getBoundingClientRect()
        } catch (c) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
        C && a.ownerDocument.body && (a = a.ownerDocument,
        b.left -= a.documentElement.clientLeft + a.body.clientLeft,
        b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    }
    function Ed(a) {
        if (C && !Dc(8))
            return a.offsetParent;
        var b = Sc(a)
          , c = Ad(a, "position")
          , d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (c = Ad(a, "position"),
            d = d && "static" == c && a != b.documentElement && a != b.body,
            !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))
                return a;
        return null
    }
    function Fd(a) {
        for (var b = new Eb(0,Infinity,Infinity,0), c = Qc(a), d = c.a.body, e = c.a.documentElement, g = $c(c.a); a = Ed(a); )
            if (!(C && 0 == a.clientWidth || oc && 0 == a.clientHeight && a == d || a == d || a == e || "visible" == Ad(a, "overflow"))) {
                var h = Gd(a), k;
                k = a;
                if (nc && !Cc("1.9")) {
                    var m = parseFloat(zd(k, "borderLeftWidth"));
                    if (Hd(k))
                        var p = k.offsetWidth - k.clientWidth - m - parseFloat(zd(k, "borderRightWidth"))
                          , m = m + p;
                    k = new A(m,parseFloat(zd(k, "borderTopWidth")))
                } else
                    k = new A(k.clientLeft,k.clientTop);
                h.x += k.x;
                h.y += k.y;
                b.top = Math.max(b.top, h.y);
                b.right = Math.min(b.right, h.x + a.clientWidth);
                b.bottom = Math.min(b.bottom, h.y + a.clientHeight);
                b.left = Math.max(b.left, h.x)
            }
        d = g.scrollLeft;
        g = g.scrollTop;
        b.left = Math.max(b.left, d);
        b.top = Math.max(b.top, g);
        c = Yc(ad(c.a) || window);
        b.right = Math.min(b.right, d + c.width);
        b.bottom = Math.min(b.bottom, g + c.height);
        return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
    }
    function Gd(a) {
        var b, c = Sc(a), d = Ad(a, "position"), e = nc && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY), g = new A(0,0), h;
        b = c ? Sc(c) : document;
        h = !C || Dc(9) || ud(Qc(b)) ? b.documentElement : b.body;
        if (a == h)
            return g;
        if (a.getBoundingClientRect)
            b = Dd(a),
            a = vd(Qc(c)),
            g.x = b.left + a.x,
            g.y = b.top + a.y;
        else if (c.getBoxObjectFor && !e)
            b = c.getBoxObjectFor(a),
            a = c.getBoxObjectFor(h),
            g.x = b.screenX - a.screenX,
            g.y = b.screenY - a.screenY;
        else {
            b = a;
            do {
                g.x += b.offsetLeft;
                g.y += b.offsetTop;
                b != a && (g.x += b.clientLeft || 0,
                g.y += b.clientTop || 0);
                if (oc && "fixed" == Ad(b, "position")) {
                    g.x += c.body.scrollLeft;
                    g.y += c.body.scrollTop;
                    break
                }
                b = b.offsetParent
            } while (b && b != a);
            if (mc || oc && "absolute" == d)
                g.y -= c.body.offsetTop;
            for (b = a; (b = Ed(b)) && b != c.body && b != h; )
                g.x -= b.scrollLeft,
                mc && "TR" == b.tagName || (g.y -= b.scrollTop)
        }
        return g
    }
    function Id(a, b) {
        var c = Jd(a)
          , d = Jd(b);
        return new A(c.x - d.x,c.y - d.y)
    }
    function Kd(a) {
        var b;
        if (a.getBoundingClientRect)
            b = Dd(a),
            b = new A(b.left,b.top);
        else {
            b = vd(Qc(a));
            var c = Gd(a);
            b = new A(c.x - b.x,c.y - b.y)
        }
        if (nc && !Cc(12)) {
            var d;
            C ? d = "-ms-transform" : oc ? d = "-webkit-transform" : mc ? d = "-o-transform" : nc && (d = "-moz-transform");
            var e;
            d && (e = Ad(a, d));
            e || (e = Ad(a, "transform"));
            a = e ? (a = e.match(Ld)) ? new A(parseFloat(a[1]),parseFloat(a[2])) : new A(0,0) : new A(0,0);
            a = new A(b.x + a.x,b.y + a.y)
        } else
            a = b;
        return a
    }
    function Jd(a) {
        if (1 == a.nodeType)
            return Kd(a);
        var b = ja(a.Cw)
          , c = a;
        a.targetTouches ? c = a.targetTouches[0] : b && a.a.targetTouches && (c = a.a.targetTouches[0]);
        return new A(c.clientX,c.clientY)
    }
    function Md(a, b, c) {
        if (b instanceof B)
            c = b.height,
            b = b.width;
        else if (void 0 == c)
            throw Error("missing height argument");
        Od(a, b);
        a.style.height = Cd(c, !0)
    }
    function Cd(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    }
    function Od(a, b) {
        a.style.width = Cd(b, !0)
    }
    function Pd(a) {
        return Qd(a)
    }
    function Qd(a) {
        var b = Rd;
        if ("none" != Ad(a, "display"))
            return b(a);
        var c = a.style
          , d = c.display
          , e = c.visibility
          , g = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = g;
        c.visibility = e;
        return a
    }
    function Rd(a) {
        var b = a.offsetWidth
          , c = a.offsetHeight
          , d = oc && !b && !c;
        return q(b) && !d || !a.getBoundingClientRect ? new B(b,c) : (a = Dd(a),
        new B(a.right - a.left,a.bottom - a.top))
    }
    function Sd(a) {
        var b = Gd(a);
        a = Qd(a);
        return new Hb(b.x,b.y,a.width,a.height)
    }
    function Td(a, b) {
        var c = a.style;
        "opacity"in c ? c.opacity = b : "MozOpacity"in c ? c.MozOpacity = b : "filter"in c && (c.filter = "" === b ? "" : "alpha(opacity=" + 100 * b + ")")
    }
    function Ud(a, b) {
        a.style.display = b ? "" : "none"
    }
    function Hd(a) {
        return "rtl" == Ad(a, "direction")
    }
    function Vd(a) {
        var b = Sc(a)
          , c = C && a.currentStyle;
        if (c && ud(Qc(b)) && "auto" != c.width && "auto" != c.height && !c.boxSizing)
            return b = Wd(a, c.width, "width", "pixelWidth"),
            a = Wd(a, c.height, "height", "pixelHeight"),
            new B(b,a);
        c = new B(a.offsetWidth,a.offsetHeight);
        b = Xd(a);
        a = Yd(a);
        return new B(c.width - a.left - b.left - b.right - a.right,c.height - a.top - b.top - b.bottom - a.bottom)
    }
    function Wd(a, b, c, d) {
        if (/^\d+px?$/.test(b))
            return parseInt(b, 10);
        var e = a.style[c]
          , g = a.runtimeStyle[c];
        a.runtimeStyle[c] = a.currentStyle[c];
        a.style[c] = b;
        b = a.style[d];
        a.style[c] = e;
        a.runtimeStyle[c] = g;
        return b
    }
    function Zd(a, b) {
        var c = a.currentStyle ? a.currentStyle[b] : null;
        return c ? Wd(a, c, "left", "pixelLeft") : 0
    }
    function Xd(a) {
        if (C) {
            var b = Zd(a, "paddingLeft")
              , c = Zd(a, "paddingRight")
              , d = Zd(a, "paddingTop");
            a = Zd(a, "paddingBottom");
            return new Eb(d,c,a,b)
        }
        b = zd(a, "paddingLeft");
        c = zd(a, "paddingRight");
        d = zd(a, "paddingTop");
        a = zd(a, "paddingBottom");
        return new Eb(parseFloat(d),parseFloat(c),parseFloat(a),parseFloat(b))
    }
    var $d = {
        thin: 2,
        medium: 4,
        thick: 6
    };
    function ae(a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null))
            return 0;
        var c = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return c in $d ? $d[c] : Wd(a, c, "left", "pixelLeft")
    }
    function Yd(a) {
        if (C && !Dc(9)) {
            var b = ae(a, "borderLeft")
              , c = ae(a, "borderRight")
              , d = ae(a, "borderTop");
            a = ae(a, "borderBottom");
            return new Eb(d,c,a,b)
        }
        b = zd(a, "borderLeftWidth");
        c = zd(a, "borderRightWidth");
        d = zd(a, "borderTopWidth");
        a = zd(a, "borderBottomWidth");
        return new Eb(parseFloat(d),parseFloat(c),parseFloat(a),parseFloat(b))
    }
    var be = /[^\d]+$/
      , ce = {
        cm: 1,
        "in": 1,
        mm: 1,
        pc: 1,
        pt: 1
    }
      , de = {
        em: 1,
        ex: 1
    };
    function ee(a) {
        var b = Ad(a, "fontSize"), c;
        c = (c = b.match(be)) && c[0] || null;
        if (b && "px" == c)
            return parseInt(b, 10);
        if (C) {
            if (c in ce)
                return Wd(a, b, "left", "pixelLeft");
            if (a.parentNode && 1 == a.parentNode.nodeType && c in de)
                return a = a.parentNode,
                c = Ad(a, "fontSize"),
                Wd(a, b == c ? "1em" : b, "left", "pixelLeft")
        }
        c = E("span", {
            style: "visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"
        });
        a.appendChild(c);
        b = c.offsetHeight;
        F(c);
        return b
    }
    var Ld = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
    var fe = "StopIteration"in l ? l.StopIteration : Error("StopIteration");
    function ge() {}
    ge.prototype.next = function() {
        throw fe;
    }
    ;
    ge.prototype.Gd = function() {
        return this
    }
    ;
    function he(a) {
        if (a instanceof ge)
            return a;
        if ("function" == typeof a.Gd)
            return a.Gd(!1);
        if (ha(a)) {
            var b = 0
              , c = new ge;
            c.next = function() {
                for (; ; ) {
                    if (b >= a.length)
                        throw fe;
                    if (b in a)
                        return a[b++];
                    b++
                }
            }
            ;
            return c
        }
        throw Error("Not implemented");
    }
    function ie(a, b, c) {
        if (ha(a))
            try {
                x(a, b, c)
            } catch (d) {
                if (d !== fe)
                    throw d;
            }
        else {
            a = he(a);
            try {
                for (; ; )
                    b.call(c, a.next(), void 0, a)
            } catch (e) {
                if (e !== fe)
                    throw e;
            }
        }
    }
    function je(a) {
        if (ha(a))
            return eb(a);
        a = he(a);
        var b = [];
        ie(a, function(a) {
            b.push(a)
        });
        return b
    }
    ;function ke(a, b) {
        this.b = {};
        this.a = [];
        this.g = this.Y = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2)
                throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2)
                this.set(arguments[d], arguments[d + 1])
        } else if (a) {
            a instanceof ke ? (c = a.mc(),
            d = a.gc()) : (c = Qb(a),
            d = Pb(a));
            for (var e = 0; e < c.length; e++)
                this.set(c[e], d[e])
        }
    }
    f = ke.prototype;
    f.Id = function() {
        return this.Y
    }
    ;
    f.gc = function() {
        le(this);
        for (var a = [], b = 0; b < this.a.length; b++)
            a.push(this.b[this.a[b]]);
        return a
    }
    ;
    f.mc = function() {
        le(this);
        return this.a.concat()
    }
    ;
    f.equals = function(a, b) {
        if (this === a)
            return !0;
        if (this.Y != a.Id())
            return !1;
        var c = b || me;
        le(this);
        for (var d, e = 0; d = this.a[e]; e++)
            if (!c(this.get(d), a.get(d)))
                return !1;
        return !0
    }
    ;
    function me(a, b) {
        return a === b
    }
    f.isEmpty = function() {
        return 0 == this.Y
    }
    ;
    f.clear = function() {
        this.b = {};
        this.g = this.Y = this.a.length = 0
    }
    ;
    f.remove = function(a) {
        return ne(this.b, a) ? (delete this.b[a],
        this.Y--,
        this.g++,
        this.a.length > 2 * this.Y && le(this),
        !0) : !1
    }
    ;
    function le(a) {
        if (a.Y != a.a.length) {
            for (var b = 0, c = 0; b < a.a.length; ) {
                var d = a.a[b];
                ne(a.b, d) && (a.a[c++] = d);
                b++
            }
            a.a.length = c
        }
        if (a.Y != a.a.length) {
            for (var e = {}, c = b = 0; b < a.a.length; )
                d = a.a[b],
                ne(e, d) || (a.a[c++] = d,
                e[d] = 1),
                b++;
            a.a.length = c
        }
    }
    f.get = function(a, b) {
        return ne(this.b, a) ? this.b[a] : b
    }
    ;
    f.set = function(a, b) {
        ne(this.b, a) || (this.Y++,
        this.a.push(a),
        this.g++);
        this.b[a] = b
    }
    ;
    f.clone = function() {
        return new ke(this)
    }
    ;
    f.Gd = function(a) {
        le(this);
        var b = 0
          , c = this.a
          , d = this.b
          , e = this.g
          , g = this
          , h = new ge;
        h.next = function() {
            for (; ; ) {
                if (e != g.g)
                    throw Error("The map has changed since the iterator was created");
                if (b >= c.length)
                    throw fe;
                var h = c[b++];
                return a ? h : d[h]
            }
        }
        ;
        return h
    }
    ;
    function ne(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    ;function oe(a) {
        if ("function" == typeof a.gc)
            return a.gc();
        if (r(a))
            return a.split("");
        if (ha(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++)
                b.push(a[d]);
            return b
        }
        return Pb(a)
    }
    function pe(a, b, c) {
        if ("function" == typeof a.forEach)
            a.forEach(b, c);
        else if (ha(a) || r(a))
            x(a, b, c);
        else {
            var d;
            if ("function" == typeof a.mc)
                d = a.mc();
            else if ("function" != typeof a.gc)
                if (ha(a) || r(a)) {
                    d = [];
                    for (var e = a.length, g = 0; g < e; g++)
                        d.push(g)
                } else
                    d = Qb(a);
            else
                d = void 0;
            for (var e = oe(a), g = e.length, h = 0; h < g; h++)
                b.call(c, e[h], d && d[h], a)
        }
    }
    ;function qe(a, b, c, d, e, g, h) {
        var k = "";
        a && (k += a + ":");
        c && (k += "//",
        b && (k += b + "@"),
        k += c,
        d && (k += ":" + d));
        e && (k += e);
        g && (k += "?" + g);
        h && (k += "#" + h);
        return k
    }
    var re = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
    function se(a) {
        if (te) {
            te = !1;
            var b = l.location;
            if (b) {
                var c = b.href;
                if (c && (c = ue(c)) && c != b.hostname)
                    throw te = !0,
                    Error();
            }
        }
        return a.match(re)
    }
    var te = oc;
    function ue(a) {
        return (a = se(a)[3] || null) && decodeURIComponent(a)
    }
    function ve(a) {
        return (a = se(a)[5] || null) && decodeURIComponent(a)
    }
    function we(a) {
        if (a[1]) {
            var b = a[0]
              , c = b.indexOf("#");
            0 <= c && (a.push(b.substr(c)),
            a[0] = b = b.substr(0, c));
            c = b.indexOf("?");
            0 > c ? a[1] = "?" : c == b.length - 1 && (a[1] = void 0)
        }
        return a.join("")
    }
    function xe(a, b, c) {
        if (ga(b))
            for (var d = 0; d < b.length; d++)
                xe(a, String(b[d]), c);
        else
            null != b && c.push("&", a, "" === b ? "" : "=", ya(b))
    }
    function ye(a, b, c) {
        Math.max(b.length - (c || 0), 0);
        for (c = c || 0; c < b.length; c += 2)
            xe(b[c], b[c + 1], a);
        return a
    }
    function ze(a, b) {
        for (var c in b)
            xe(c, b[c], a);
        return a
    }
    function Ae(a, b) {
        return we(2 == arguments.length ? ye([a], arguments[1], 0) : ye([a], arguments, 1))
    }
    function Be(a, b, c) {
        a = [a, "&", b];
        null != c && a.push("=", ya(c));
        return we(a)
    }
    function Ce(a, b, c, d) {
        for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d; ) {
            var g = a.charCodeAt(b - 1);
            if (38 == g || 63 == g)
                if (g = a.charCodeAt(b + e),
                !g || 61 == g || 38 == g || 35 == g)
                    return b;
            b += e + 1
        }
        return -1
    }
    var De = /#|$/
      , Ee = /[?&]($|#)/;
    function Fe(a, b) {
        for (var c = a.search(De), d = 0, e, g = []; 0 <= (e = Ce(a, d, b, c)); )
            g.push(a.substring(d, e)),
            d = Math.min(a.indexOf("&", e) + 1 || c, c);
        g.push(a.substr(d));
        return g.join("").replace(Ee, "$1")
    }
    ;function Ge(a, b) {
        var c;
        if (a instanceof Ge)
            this.af = q(b) ? b : a.af,
            He(this, a.Kf),
            this.Oi = a.Oi,
            Ie(this, a.Me),
            Je(this, a.Xg),
            this.Yg = a.Yg,
            Ke(this, a.a.clone()),
            Le(this, a.Gl);
        else if (a && (c = se(String(a)))) {
            this.af = !!b;
            He(this, c[1] || "", !0);
            var d = c[2] || "";
            this.Oi = d ? decodeURIComponent(d) : "";
            Ie(this, c[3] || "", !0);
            Je(this, c[4]);
            this.Yg = (d = c[5] || "") ? decodeURIComponent(d) : "";
            Ke(this, c[6] || "", !0);
            Le(this, c[7] || "", !0)
        } else
            this.af = !!b,
            this.a = new Me(null,0,this.af)
    }
    f = Ge.prototype;
    f.Kf = "";
    f.Oi = "";
    f.Me = "";
    f.Xg = null;
    f.Yg = "";
    f.Gl = "";
    f.af = !1;
    f.toString = function() {
        var a = []
          , b = this.Kf;
        b && a.push(Ne(b, Oe), ":");
        if (b = this.Me) {
            a.push("//");
            var c = this.Oi;
            c && a.push(Ne(c, Oe), "@");
            a.push(ya(b));
            b = this.Xg;
            null != b && a.push(":", String(b))
        }
        if (b = this.Yg)
            this.Me && "/" != b.charAt(0) && a.push("/"),
            a.push(Ne(b, "/" == b.charAt(0) ? Pe : Qe));
        (b = this.a.toString()) && a.push("?", b);
        (b = this.Gl) && a.push("#", Ne(b, Re));
        return a.join("")
    }
    ;
    f.clone = function() {
        return new Ge(this)
    }
    ;
    function He(a, b, c) {
        a.Kf = c ? b ? decodeURIComponent(b) : "" : b;
        a.Kf && (a.Kf = a.Kf.replace(/:$/, ""))
    }
    function Ie(a, b, c) {
        a.Me = c ? b ? decodeURIComponent(b) : "" : b
    }
    function Je(a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b)
                throw Error("Bad port number " + b);
            a.Xg = b
        } else
            a.Xg = null
    }
    function Ke(a, b, c) {
        b instanceof Me ? (a.a = b,
        Se(a.a, a.af)) : (c || (b = Ne(b, Te)),
        a.a = new Me(b,0,a.af))
    }
    function Ue(a, b, c) {
        a.a.set(b, c)
    }
    function Ve(a, b, c) {
        ga(c) || (c = [String(c)]);
        We(a.a, b, c)
    }
    function Le(a, b, c) {
        a.Gl = c ? b ? decodeURIComponent(b) : "" : b;
        return a
    }
    function Xe(a) {
        Ue(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ u()).toString(36));
        return a
    }
    function Ye(a) {
        return a instanceof Ge ? a.clone() : new Ge(a,void 0)
    }
    function Ze(a, b, c, d) {
        var e = new Ge(null,void 0);
        a && He(e, a);
        b && Ie(e, b);
        c && Je(e, c);
        d && (e.Yg = d);
        return e
    }
    function Ne(a, b) {
        return r(a) ? encodeURI(a).replace(b, $e) : null
    }
    function $e(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }
    var Oe = /[#\/\?@]/g
      , Qe = /[\#\?:]/g
      , Pe = /[\#\?]/g
      , Te = /[\#\?@]/g
      , Re = /#/g;
    function Me(a, b, c) {
        this.a = a || null;
        this.b = !!c
    }
    function af(a) {
        if (!a.Ma && (a.Ma = new ke,
        a.Y = 0,
        a.a))
            for (var b = a.a.split("&"), c = 0; c < b.length; c++) {
                var d = b[c].indexOf("=")
                  , e = null
                  , g = null;
                0 <= d ? (e = b[c].substring(0, d),
                g = b[c].substring(d + 1)) : e = b[c];
                e = za(e);
                e = bf(a, e);
                a.add(e, g ? za(g) : "")
            }
    }
    f = Me.prototype;
    f.Ma = null;
    f.Y = null;
    f.Id = function() {
        af(this);
        return this.Y
    }
    ;
    f.add = function(a, b) {
        af(this);
        this.a = null;
        a = bf(this, a);
        var c = this.Ma.get(a);
        c || this.Ma.set(a, c = []);
        c.push(b);
        this.Y++;
        return this
    }
    ;
    f.remove = function(a) {
        af(this);
        a = bf(this, a);
        return ne(this.Ma.b, a) ? (this.a = null,
        this.Y -= this.Ma.get(a).length,
        this.Ma.remove(a)) : !1
    }
    ;
    f.clear = function() {
        this.Ma = this.a = null;
        this.Y = 0
    }
    ;
    f.isEmpty = function() {
        af(this);
        return 0 == this.Y
    }
    ;
    function cf(a, b) {
        af(a);
        b = bf(a, b);
        return ne(a.Ma.b, b)
    }
    f.mc = function() {
        af(this);
        for (var a = this.Ma.gc(), b = this.Ma.mc(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], g = 0; g < e.length; g++)
                c.push(b[d]);
        return c
    }
    ;
    f.gc = function(a) {
        af(this);
        var b = [];
        if (r(a))
            cf(this, a) && (b = db(b, this.Ma.get(bf(this, a))));
        else {
            a = this.Ma.gc();
            for (var c = 0; c < a.length; c++)
                b = db(b, a[c])
        }
        return b
    }
    ;
    f.set = function(a, b) {
        af(this);
        this.a = null;
        a = bf(this, a);
        cf(this, a) && (this.Y -= this.Ma.get(a).length);
        this.Ma.set(a, [b]);
        this.Y++;
        return this
    }
    ;
    f.get = function(a, b) {
        var c = a ? this.gc(a) : [];
        return 0 < c.length ? String(c[0]) : b
    }
    ;
    function We(a, b, c) {
        a.remove(b);
        0 < c.length && (a.a = null,
        a.Ma.set(bf(a, b), eb(c)),
        a.Y += c.length)
    }
    f.toString = function() {
        if (this.a)
            return this.a;
        if (!this.Ma)
            return "";
        for (var a = [], b = this.Ma.mc(), c = 0; c < b.length; c++)
            for (var d = b[c], e = ya(d), d = this.gc(d), g = 0; g < d.length; g++) {
                var h = e;
                "" !== d[g] && (h += "=" + ya(d[g]));
                a.push(h)
            }
        return this.a = a.join("&")
    }
    ;
    f.clone = function() {
        var a = new Me;
        a.a = this.a;
        this.Ma && (a.Ma = this.Ma.clone(),
        a.Y = this.Y);
        return a
    }
    ;
    function bf(a, b) {
        var c = String(b);
        a.b && (c = c.toLowerCase());
        return c
    }
    function Se(a, b) {
        b && !a.b && (af(a),
        a.a = null,
        pe(a.Ma, function(a, b) {
            var e = b.toLowerCase();
            b != e && (this.remove(b),
            We(this, e, a))
        }, a));
        a.b = b
    }
    ;function df(a) {
        if (a.classList)
            return a.classList;
        a = a.className;
        return r(a) && a.match(/\S+/g) || []
    }
    function ef(a, b) {
        return a.classList ? a.classList.contains(b) : y(df(a), b)
    }
    function G(a, b) {
        a.classList ? a.classList.add(b) : ef(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
    }
    function ff(a, b) {
        if (a.classList)
            x(b, function(b) {
                G(a, b)
            });
        else {
            var c = {};
            x(df(a), function(a) {
                c[a] = !0
            });
            x(b, function(a) {
                c[a] = !0
            });
            a.className = "";
            for (var d in c)
                a.className += 0 < a.className.length ? " " + d : d
        }
    }
    function H(a, b) {
        a.classList ? a.classList.remove(b) : ef(a, b) && (a.className = Qa(df(a), function(a) {
            return a != b
        }).join(" "))
    }
    function gf(a, b) {
        a.classList ? x(b, function(b) {
            H(a, b)
        }) : a.className = Qa(df(a), function(a) {
            return !y(b, a)
        }).join(" ")
    }
    function I(a, b, c) {
        c ? G(a, b) : H(a, b)
    }
    function hf(a, b) {
        var c = !ef(a, b);
        I(a, b, c);
        return c
    }
    ;function jf(a, b, c) {
        a.dataset ? a.dataset[kf(b)] = c : a.setAttribute("data-" + b, c)
    }
    function K(a, b) {
        return a.dataset ? a.dataset[kf(b)] : a.getAttribute("data-" + b)
    }
    var lf = {};
    function kf(a) {
        return lf[a] || (lf[a] = String(a).replace(/\-([a-z])/g, function(a, c) {
            return c.toUpperCase()
        }))
    }
    ;function mf(a) {
        var b = a.__yt_uid_key;
        b || (b = nf(),
        a.__yt_uid_key = b);
        return b
    }
    var nf = n("yt.dom.getNextId_");
    if (!nf) {
        nf = function() {
            return ++of
        }
        ;
        ba("yt.dom.getNextId_", nf, void 0);
        var of = 0
    }
    function pf(a, b) {
        a = Tc(a);
        b = Tc(b);
        return !!td(a, function(a) {
            return a === b
        }, !0, void 0)
    }
    function qf(a, b) {
        var c = Vc(a, null, b);
        return c.length ? c[0] : null
    }
    function rf(a, b) {
        if (a in b)
            return b[a];
        var c = a.charAt(0).toUpperCase() + a.substr(1);
        if ("moz" + c in b)
            return b["moz" + c];
        if ("ms" + c in b)
            return b["ms" + c];
        if ("o" + c in b)
            return b["o" + c];
        if ("webkit" + c in b)
            return b["webkit" + c]
    }
    function sf(a, b) {
        var c;
        Sa(a, function(a) {
            c = rf(a, b);
            return !!c
        });
        return c
    }
    function tf(a, b) {
        return "on" + a in b ? a : "onmoz" + a in b ? "moz" + a : "onms" + a in b ? "ms" + a : "ono" + a in b ? "o" + a : "onwebkit" + a in b ? "webkit" + a : null
    }
    ;var uf = window.yt && window.yt.config_ || {};
    ba("yt.config_", uf, void 0);
    var vf = window.yt && window.yt.tokens_ || {};
    ba("yt.tokens_", vf, void 0);
    var wf = window.yt && window.yt.msgs_ || {};
    ba("yt.msgs_", wf, void 0);
    function xf(a) {
        yf(uf, arguments)
    }
    function zf(a) {
        return a in uf ? uf[a] : void 0
    }
    function Af(a) {
        yf(vf, arguments)
    }
    function Bf(a) {
        return a in vf ? vf[a] : void 0
    }
    function L(a, b) {
        if (ja(a) && n("ytsched.enableSetTimeout")) {
            var c = n("yt.scheduler.instance.addJob");
            if (c)
                return c(a, 0, b);
            ba("ytsched.enableSetTimeout", !1, void 0)
        }
        ja(a) && (a = Cf(a));
        return window.setTimeout(a, b)
    }
    function Df(a, b) {
        ja(a) && (a = Cf(a));
        return window.setInterval(a, b)
    }
    function M(a) {
        n("ytsched.enableSetTimeout") ? n("yt.scheduler.instance.cancelJob")(a) : window.clearTimeout(a)
    }
    function Ef(a) {
        window.clearInterval(a)
    }
    function Cf(a) {
        return a && window.yterr ? function() {
            try {
                return a.apply(this, arguments)
            } catch (b) {
                throw Ff(b),
                b;
            }
        }
        : a
    }
    function Ff(a) {
        if (window && window.yterr) {
            var b = n("yt.www.errors.log");
            b ? b(a, void 0) : (b = zf("ERRORS") || [],
            b.push(a),
            xf("ERRORS", b))
        }
    }
    function Gf(a) {
        yf(wf, arguments)
    }
    function Hf(a, b, c) {
        var d = b || {};
        if (a = a in wf ? wf[a] : c)
            for (var e in d)
                a = a.replace(RegExp("\\$" + e, "gi"), function() {
                    return d[e]
                });
        return a
    }
    function If(a, b) {
        return Jf(a in wf ? wf[a] : {}, b)
    }
    function Jf(a, b) {
        var c = zf("I18N_PLURAL_RULES") || function(a) {
            return 1 == a ? "one" : "other"
        }
        ;
        return (c = a["case" + b] || a[c(b)]) ? c.replace("#", b.toString()) : b + ""
    }
    function yf(a, b) {
        if (1 < b.length) {
            var c = b[0];
            a[c] = b[1]
        } else {
            var d = b[0];
            for (c in d)
                a[c] = d[c]
        }
    }
    ;function Kf(a) {
        if (a = a || window.event) {
            for (var b in a)
                b in Lf || (this[b] = a[b]);
            this.scale = a.scale;
            this.rotation = a.rotation;
            this.ed = a;
            (b = a.target || a.srcElement) && 3 == b.nodeType && (b = b.parentNode);
            this.target = b;
            if (b = a.relatedTarget)
                try {
                    b = b.nodeName && b
                } catch (c) {
                    b = null
                }
            else
                "mouseover" == this.type ? b = a.fromElement : "mouseout" == this.type && (b = a.toElement);
            this.relatedTarget = b;
            this.clientX = void 0 != a.clientX ? a.clientX : a.pageX;
            this.clientY = void 0 != a.clientY ? a.clientY : a.pageY;
            this.keyCode = a.keyCode ? a.keyCode : a.which;
            this.charCode = a.charCode || ("keypress" == this.type ? this.keyCode : 0);
            this.altKey = a.altKey;
            this.ctrlKey = a.ctrlKey;
            this.shiftKey = a.shiftKey;
            "MozMousePixelScroll" == this.type ? (this.wheelDeltaX = a.axis == a.HORIZONTAL_AXIS ? a.detail : 0,
            this.wheelDeltaY = a.axis == a.HORIZONTAL_AXIS ? 0 : a.detail) : window.opera ? (this.wheelDeltaX = 0,
            this.wheelDeltaY = a.detail) : 0 == a.wheelDelta % 120 ? "WebkitTransform"in document.documentElement.style ? window.chrome && 0 == navigator.platform.indexOf("Mac") ? (this.wheelDeltaX = a.wheelDeltaX / -30,
            this.wheelDeltaY = a.wheelDeltaY / -30) : (this.wheelDeltaX = a.wheelDeltaX / -1.2,
            this.wheelDeltaY = a.wheelDeltaY / -1.2) : (this.wheelDeltaX = 0,
            this.wheelDeltaY = a.wheelDelta / -1.6) : (this.wheelDeltaX = a.wheelDeltaX / -3,
            this.wheelDeltaY = a.wheelDeltaY / -3);
            this.a = a.pageX;
            this.b = a.pageY
        }
    }
    function Mf(a) {
        if (document.body && document.documentElement) {
            var b = document.body.scrollTop + document.documentElement.scrollTop;
            a.a = a.clientX + (document.body.scrollLeft + document.documentElement.scrollLeft);
            a.b = a.clientY + b
        }
    }
    function Nf(a) {
        q(a.a) || Mf(a);
        return a.a
    }
    function Of(a) {
        q(a.b) || Mf(a);
        return a.b
    }
    f = Kf.prototype;
    f.ed = null;
    f.type = "";
    f.target = null;
    f.relatedTarget = null;
    f.currentTarget = null;
    f.data = null;
    f.source = null;
    f.keyCode = 0;
    f.charCode = 0;
    f.altKey = !1;
    f.ctrlKey = !1;
    f.shiftKey = !1;
    f.clientX = 0;
    f.clientY = 0;
    f.wheelDeltaX = 0;
    f.wheelDeltaY = 0;
    f.rotation = 0;
    f.scale = 1;
    f.touches = null;
    f.changedTouches = null;
    f.preventDefault = function() {
        this.ed.returnValue = !1;
        this.ed.preventDefault && this.ed.preventDefault()
    }
    ;
    f.stopPropagation = function() {
        this.ed.cancelBubble = !0;
        this.ed.stopPropagation && this.ed.stopPropagation()
    }
    ;
    f.stopImmediatePropagation = function() {
        this.ed.cancelBubble = !0;
        this.ed.stopImmediatePropagation && this.ed.stopImmediatePropagation()
    }
    ;
    var Lf = {
        stopImmediatePropagation: 1,
        stopPropagation: 1,
        preventMouseEvent: 1,
        preventManipulation: 1,
        preventDefault: 1,
        layerX: 1,
        layerY: 1,
        scale: 1,
        rotation: 1
    };
    var Pf = n("yt.events.listeners_") || {};
    ba("yt.events.listeners_", Pf, void 0);
    var Qf = n("yt.events.counter_") || {
        count: 0
    };
    ba("yt.events.counter_", Qf, void 0);
    function Rf(a, b, c, d) {
        return Sb(Pf, function(e) {
            return e[0] == a && e[1] == b && e[2] == c && e[4] == !!d
        })
    }
    function N(a, b, c, d) {
        if (!a || !a.addEventListener && !a.attachEvent)
            return "";
        d = !!d;
        var e = Rf(a, b, c, d);
        if (e)
            return e;
        var e = ++Qf.count + "", g = !("mouseenter" != b && "mouseleave" != b || !a.addEventListener || "onmouseenter"in document), h;
        h = g ? function(d) {
            d = new Kf(d);
            if (!td(d.relatedTarget, function(b) {
                return b == a
            }, !0))
                return d.currentTarget = a,
                d.type = b,
                c.call(a, d)
        }
        : function(b) {
            b = new Kf(b);
            b.currentTarget = a;
            return c.call(a, b)
        }
        ;
        h = Cf(h);
        Pf[e] = [a, b, c, h, d];
        a.addEventListener ? "mouseenter" == b && g ? a.addEventListener("mouseover", h, d) : "mouseleave" == b && g ? a.addEventListener("mouseout", h, d) : "mousewheel" == b && "MozBoxSizing"in document.documentElement.style ? a.addEventListener("MozMousePixelScroll", h, d) : a.addEventListener(b, h, d) : a.attachEvent("on" + b, h);
        return e
    }
    function Sf(a, b) {
        var c;
        c = N(a, "playing", function() {
            Tf(c);
            b.apply(a, arguments)
        }, void 0)
    }
    function Uf(a, b, c) {
        b = b.toLowerCase();
        var d = c
          , e = "mouse" + b;
        if (rf("pointerEnabled", window.navigator))
            e = "MSPointer" + b.charAt(0).toUpperCase() + b.substr(1);
        else if (tf("touchstart", document)) {
            d = b;
            switch (b) {
            case "down":
                d = "start";
                break;
            case "up":
                d = "end";
                break;
            case "over":
                d = "enter";
                break;
            case "out":
                d = "leave"
            }
            e = "touch" + d;
            d = function(a) {
                x(a.changedTouches, function(b) {
                    var d = new Kf(a);
                    ra(d, b);
                    c(d)
                })
            }
        }
        return N(a, e, d)
    }
    function Vf(a, b, c) {
        return Wf(a, "change", b, function(a) {
            return a.nodeName.toLowerCase() === c.toLowerCase() && !0
        })
    }
    function Xf(a, b, c, d) {
        return Wf(a, b, c, function(a) {
            return ef(a, d)
        })
    }
    function Wf(a, b, c, d) {
        var e = a || document;
        return N(e, b, function(a) {
            var b = td(a.target, function(a) {
                return a === e || d(a)
            }, !0);
            b && b !== e && !b.disabled && (a.currentTarget = b,
            c.call(b, a))
        })
    }
    function Tf(a) {
        a && ("string" == typeof a && (a = [a]),
        x(a, function(a) {
            if (a in Pf) {
                var c = Pf[a]
                  , d = c[0]
                  , e = c[1]
                  , g = c[3]
                  , c = c[4];
                d.removeEventListener ? d.removeEventListener(e, g, c) : d.detachEvent && d.detachEvent("on" + e, g);
                delete Pf[a]
            }
        }))
    }
    function Yf(a) {
        for (var b in Pf)
            Pf[b][0] == a && Tf(b)
    }
    function Zf(a, b) {
        if (document.createEvent) {
            var c = document.createEvent("HTMLEvents");
            c.initEvent(b, !0, !0);
            a.dispatchEvent(c)
        } else
            c = document.createEventObject(),
            a.fireEvent("on" + b, c)
    }
    ;function $f() {
        return !!sf(["fullscreenEnabled", "fullScreenEnabled"], document)
    }
    function ag() {
        return sf(["fullscreenElement", "fullScreenElement"], document)
    }
    ;function bg(a) {
        a = a || {};
        this.url = a.url || "";
        this.urlV8 = a.url_v8 || "";
        this.urlV9As2 = a.url_v9as2 || "";
        this.args = a.args || Xb(cg);
        this.assets = a.assets || {};
        this.attrs = a.attrs || Xb(dg);
        this.params = a.params || Xb(eg);
        this.minVersion = a.min_version || "8.0.0";
        this.fallback = a.fallback || null;
        this.fallbackMessage = a.fallbackMessage || null;
        this.html5 = !!a.html5;
        this.disable = a.disable || {};
        this.loaded = !!a.loaded
    }
    var cg = {
        enablejsapi: 1
    }
      , dg = {}
      , eg = {
        allowscriptaccess: "always",
        allowfullscreen: "true",
        bgcolor: "#000000"
    };
    bg.prototype.clone = function() {
        var a = new bg, b;
        for (b in this) {
            var c = this[b];
            "object" == ea(c) ? a[b] = Xb(c) : a[b] = c
        }
        return a
    }
    ;
    function fg(a) {
        a && (this.name = a.name,
        this.tb = a.screenId,
        this.ic = a.loungeToken,
        this.Db = a.dialId || "")
    }
    f = fg.prototype;
    f.name = "";
    f.tb = "";
    f.ic = "";
    f.Db = "";
    f.nq = function() {
        return {
            key: this.tb,
            name: this.name
        }
    }
    ;
    f.toString = function() {
        var a = this.ic ? this.ic.slice(-6) : "null";
        return "{name:" + this.name + ",screenId:" + this.tb + ",loungeToken:..." + a + ",dialId:" + this.Db + "}"
    }
    ;
    function gg(a) {
        return a ? a.toString() : "null"
    }
    function hg(a) {
        a = a || [];
        return "[" + Ra(a, function(a) {
            return gg(a)
        }).join(",") + "]"
    }
    ;function ig(a) {
        a && (this.id = a.id || "",
        this.name = a.name || "",
        this.activityId = a.activityId || "",
        this.status = a.status || "UNKNOWN")
    }
    f = ig.prototype;
    f.id = "";
    f.name = "";
    f.activityId = "";
    f.status = "UNKNOWN";
    f.nq = function() {
        return {
            key: this.id,
            name: this.name
        }
    }
    ;
    function jg(a) {
        return {
            id: a.id,
            name: a.name,
            activityId: a.activityId,
            status: a.status
        }
    }
    f.toString = function() {
        return "{id:" + this.id + ",name:" + this.name + ",activityId:" + this.activityId + ",status:" + this.status + "}"
    }
    ;
    function kg(a) {
        a = a || [];
        return "[" + Ra(a, function(a) {
            return a ? a.toString() : "null"
        }).join(",") + "]"
    }
    ;function lg() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
            var b = 16 * Math.random() | 0;
            return ("x" == a ? b : b & 3 | 8).toString(16)
        })
    }
    function mg(a, b) {
        return Ua(a, function(a) {
            return a.key == b
        })
    }
    function ng(a) {
        return Ra(a, function(a) {
            return a.nq()
        })
    }
    function og(a) {
        return Ra(a, function(a) {
            return jg(a)
        })
    }
    function pg(a) {
        return Ra(a, function(a) {
            return new ig(a)
        })
    }
    function qg(a, b) {
        return a || b ? a && b ? a.id == b.id && a.name == b.name : !1 : !0
    }
    function rg(a, b) {
        return Ua(a, function(a) {
            return a.id == b
        })
    }
    function sg(a) {
        return Ra(a, function(a) {
            return {
                name: a.name,
                screenId: a.tb,
                loungeToken: a.ic,
                dialId: a.Db
            }
        })
    }
    function tg(a) {
        return Ra(a, function(a) {
            return new fg(a)
        })
    }
    function ug(a, b) {
        return a || b ? a && b ? a.tb == b.tb : !1 : !0
    }
    function vg(a, b) {
        return a || b ? a && b ? a.tb == b.tb && a.ic == b.ic && a.name == b.name && a.Db == b.Db : !1 : !0
    }
    function wg(a, b) {
        return Ua(a, function(a) {
            return ug(a, b)
        })
    }
    function xg(a, b) {
        return Ua(a, function(a) {
            return b == a.tb || b == a.Db
        })
    }
    function yg(a, b) {
        return a || b ? a && b ? a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.format == b.format && a.kind == b.kind : !1 : !0
    }
    ;function zg() {}
    ;function Ag() {}
    v(Ag, zg);
    Ag.prototype.Id = function() {
        var a = 0;
        ie(this.Gd(!0), function() {
            a++
        });
        return a
    }
    ;
    Ag.prototype.clear = function() {
        var a = je(this.Gd(!0))
          , b = this;
        x(a, function(a) {
            b.remove(a)
        })
    }
    ;
    function Bg(a) {
        this.a = a
    }
    v(Bg, Ag);
    f = Bg.prototype;
    f.isAvailable = function() {
        if (!this.a)
            return !1;
        try {
            return this.a.setItem("__sak", "1"),
            this.a.removeItem("__sak"),
            !0
        } catch (a) {
            return !1
        }
    }
    ;
    f.set = function(a, b) {
        try {
            this.a.setItem(a, b)
        } catch (c) {
            if (0 == this.a.length)
                throw "Storage mechanism: Storage disabled";
            throw "Storage mechanism: Quota exceeded";
        }
    }
    ;
    f.get = function(a) {
        a = this.a.getItem(a);
        if (!r(a) && null !== a)
            throw "Storage mechanism: Invalid value was encountered";
        return a
    }
    ;
    f.remove = function(a) {
        this.a.removeItem(a)
    }
    ;
    f.Id = function() {
        return this.a.length
    }
    ;
    f.Gd = function(a) {
        var b = 0
          , c = this.a
          , d = new ge;
        d.next = function() {
            if (b >= c.length)
                throw fe;
            var d;
            d = c.key(b++);
            if (a)
                return d;
            d = c.getItem(d);
            if (!r(d))
                throw "Storage mechanism: Invalid value was encountered";
            return d
        }
        ;
        return d
    }
    ;
    f.clear = function() {
        this.a.clear()
    }
    ;
    f.key = function(a) {
        return this.a.key(a)
    }
    ;
    function Cg() {
        var a = null;
        try {
            a = window.localStorage || null
        } catch (b) {}
        this.a = a
    }
    v(Cg, Bg);
    function Dg() {
        var a = null;
        try {
            a = window.sessionStorage || null
        } catch (b) {}
        this.a = a
    }
    v(Dg, Bg);
    function Eg(a) {
        this.a = a;
        this.g = new wb
    }
    Eg.prototype.set = function(a, b) {
        q(b) ? this.a.set(a, vb(this.g, b)) : this.a.remove(a)
    }
    ;
    Eg.prototype.get = function(a) {
        var b;
        try {
            b = this.a.get(a)
        } catch (c) {
            return
        }
        if (null !== b)
            try {
                return sb(b)
            } catch (d) {
                throw "Storage: Invalid value was encountered";
            }
    }
    ;
    Eg.prototype.remove = function(a) {
        this.a.remove(a)
    }
    ;
    function Fg(a) {
        Eg.call(this, a)
    }
    v(Fg, Eg);
    function Gg(a) {
        this.data = a
    }
    function Hg(a) {
        return !q(a) || a instanceof Gg ? a : new Gg(a)
    }
    Fg.prototype.set = function(a, b) {
        Fg.D.set.call(this, a, Hg(b))
    }
    ;
    Fg.prototype.b = function(a) {
        a = Fg.D.get.call(this, a);
        if (!q(a) || a instanceof Object)
            return a;
        throw "Storage: Invalid value was encountered";
    }
    ;
    Fg.prototype.get = function(a) {
        if (a = this.b(a)) {
            if (a = a.data,
            !q(a))
                throw "Storage: Invalid value was encountered";
        } else
            a = void 0;
        return a
    }
    ;
    function Ig(a) {
        Eg.call(this, a)
    }
    v(Ig, Fg);
    function Jg(a) {
        var b = a.creation;
        a = a.expiration;
        return !!a && a < u() || !!b && b > u()
    }
    Ig.prototype.set = function(a, b, c) {
        if (b = Hg(b)) {
            if (c) {
                if (c < u()) {
                    Ig.prototype.remove.call(this, a);
                    return
                }
                b.expiration = c
            }
            b.creation = u()
        }
        Ig.D.set.call(this, a, b)
    }
    ;
    Ig.prototype.b = function(a, b) {
        var c = Ig.D.b.call(this, a);
        if (c)
            if (!b && Jg(c))
                Ig.prototype.remove.call(this, a);
            else
                return c
    }
    ;
    function Kg(a) {
        Eg.call(this, a)
    }
    v(Kg, Ig);
    function Lg(a, b) {
        var c = [];
        ie(b, function(a) {
            var b;
            try {
                b = Kg.prototype.b.call(this, a, !0)
            } catch (g) {
                if ("Storage: Invalid value was encountered" == g)
                    return;
                throw g;
            }
            q(b) ? Jg(b) && c.push(a) : c.push(a)
        }, a);
        return c
    }
    function Mg(a, b) {
        var c = Lg(a, b);
        x(c, function(a) {
            Kg.prototype.remove.call(this, a)
        }, a)
    }
    ;function Ng(a, b, c) {
        var d = c && 0 < c ? c : 0;
        c = d ? u() + 1E3 * d : 0;
        if ((d = d ? Og : Pg) && window.JSON) {
            r(b) || (b = JSON.stringify(b, void 0));
            try {
                d.set(a, b, c)
            } catch (e) {
                d.remove(a)
            }
        }
    }
    function Qg(a) {
        if (!Pg && !Og || !window.JSON)
            return null;
        var b;
        try {
            b = Pg.get(a),
            b = r(b) ? b : Og.get(a)
        } catch (c) {
            return null
        }
        if (!r(b))
            return null;
        try {
            b = JSON.parse(b, void 0)
        } catch (d) {}
        return b
    }
    function Rg(a) {
        Pg && Pg.remove(a);
        Og && Og.remove(a)
    }
    var Og, Sg = new Cg;
    Og = Sg.isAvailable() ? new Kg(Sg) : null;
    var Pg, Tg = new Dg;
    Pg = Tg.isAvailable() ? new Kg(Tg) : null;
    function Ug(a) {
        this.a = a
    }
    var Vg = /\s*;\s*/;
    f = Ug.prototype;
    f.isEnabled = function() {
        return navigator.cookieEnabled
    }
    ;
    f.set = function(a, b, c, d, e, g) {
        if (/[;=\s]/.test(a))
            throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b))
            throw Error('Invalid cookie value "' + b + '"');
        q(c) || (c = -1);
        e = e ? ";domain=" + e : "";
        d = d ? ";path=" + d : "";
        g = g ? ";secure" : "";
        c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970,1,1)).toUTCString() : ";expires=" + (new Date(u() + 1E3 * c)).toUTCString();
        this.a.cookie = a + "=" + b + e + d + c + g
    }
    ;
    f.get = function(a, b) {
        for (var c = a + "=", d = (this.a.cookie || "").split(Vg), e = 0, g; g = d[e]; e++) {
            if (0 == g.lastIndexOf(c, 0))
                return g.substr(c.length);
            if (g == a)
                return ""
        }
        return b
    }
    ;
    f.remove = function(a, b, c) {
        var d = q(this.get(a));
        this.set(a, "", 0, b, c);
        return d
    }
    ;
    f.mc = function() {
        return Wg(this).keys
    }
    ;
    f.gc = function() {
        return Wg(this).Dw
    }
    ;
    f.isEmpty = function() {
        return !this.a.cookie
    }
    ;
    f.Id = function() {
        return this.a.cookie ? (this.a.cookie || "").split(Vg).length : 0
    }
    ;
    f.clear = function() {
        for (var a = Wg(this).keys, b = a.length - 1; 0 <= b; b--)
            this.remove(a[b])
    }
    ;
    function Wg(a) {
        a = (a.a.cookie || "").split(Vg);
        for (var b = [], c = [], d, e, g = 0; e = a[g]; g++)
            d = e.indexOf("="),
            -1 == d ? (b.push(""),
            c.push(e)) : (b.push(e.substring(0, d)),
            c.push(e.substring(d + 1)));
        return {
            keys: b,
            Dw: c
        }
    }
    var Xg = new Ug(document);
    Xg.b = 3950;
    function Yg() {
        var a = Zg()
          , b = $g();
        y(a, b);
        if (ah()) {
            var c = a
              , d = jb(c, b, void 0);
            0 > d && gb(c, -(d + 1), 0, b)
        }
        a = bh(a);
        Ya(a) ? Xg.remove("remote_sid", "/", "youtube.com") : (a = a.join(","),
        Xg.set("remote_sid", a, void 0, "/", "youtube.com"))
    }
    function Zg() {
        var a = Qg("yt-remote-connected-devices") || [];
        nb(a);
        return a
    }
    function bh(a) {
        if (Ya(a))
            return [];
        var b = a[0].indexOf("#")
          , c = -1 == b ? a[0] : a[0].substring(0, b);
        return Ra(a, function(a, b) {
            return 0 == b ? a : a.substring(c.length)
        })
    }
    function ch(a) {
        Ng("yt-remote-connected-devices", a, 86400)
    }
    function $g() {
        if (dh)
            return dh;
        var a = Qg("yt-remote-device-id");
        a || (a = lg(),
        Ng("yt-remote-device-id", a, 31536E3));
        for (var b = Zg(), c = 1, d = a; y(b, d); )
            c++,
            d = a + "#" + c;
        return dh = d
    }
    function eh() {
        return Qg("yt-remote-session-browser-channel")
    }
    function ah() {
        return Qg("yt-remote-session-screen-id")
    }
    function fh(a) {
        5 < a.length && (a = a.slice(a.length - 5));
        var b = Ra(gh(), function(a) {
            return a.loungeToken
        })
          , c = Ra(a, function(a) {
            return a.loungeToken
        });
        Ta(c, function(a) {
            return !y(b, a)
        }) && Ng("yt-remote-lounge-token-expiration", !0, 86400);
        Ng("yt-remote-local-screens", a, 31536E3)
    }
    function gh() {
        return Qg("yt-remote-local-screens") || []
    }
    function hh() {
        return Qg("yt-remote-online-screens") || []
    }
    function ih(a) {
        Ng("yt-remote-online-dial-devices", a, 30)
    }
    function jh() {
        return Qg("yt-remote-online-dial-devices") || []
    }
    function kh(a, b) {
        a ? Ng("yt-remote-session-video-id", a) : Rg("yt-remote-session-video-id");
        b ? Ng("yt-remote-session-list-id", b) : Rg("yt-remote-session-list-id")
    }
    function lh(a) {
        a || (Rg("yt-remote-session-screen-id"),
        Rg("yt-remote-session-video-id"),
        Rg("yt-remote-session-list-id"));
        Yg();
        a = Zg();
        ab(a, $g());
        ch(a)
    }
    var dh = "";
    function mh() {
        var a = tg(hh())
          , b = pg(jh())
          , b = Qa(b, function(b) {
            return !xg(a, b.id)
        });
        return ng(db(a, b))
    }
    ;function nh() {}
    nh.prototype.Lc = !1;
    nh.prototype.ia = function() {
        return this.Lc
    }
    ;
    nh.prototype.dispose = function() {
        this.Lc || (this.Lc = !0,
        this.H())
    }
    ;
    function O(a, b) {
        oh(a, qa(ph, b))
    }
    function oh(a, b) {
        a.Gb || (a.Gb = []);
        a.Gb.push(t(b, void 0))
    }
    nh.prototype.H = function() {
        if (this.Gb)
            for (; this.Gb.length; )
                this.Gb.shift()()
    }
    ;
    function ph(a) {
        a && "function" == typeof a.dispose && a.dispose()
    }
    function qh(a) {
        for (var b = 0, c = arguments.length; b < c; ++b) {
            var d = arguments[b];
            ha(d) ? qh.apply(null, d) : ph(d)
        }
    }
    ;function rh(a, b) {
        this.app = a;
        this.U = null;
        this.g = {};
        this.i = {};
        this.k = {};
        this.j = {};
        this.b = null;
        this.a = b;
        P(this, "cueVideoById", this.Ys);
        P(this, "loadVideoById", this.kk);
        P(this, "cueVideoByUrl", this.Zs);
        P(this, "loadVideoByUrl", this.Dt);
        P(this, "playVideo", this.playVideo);
        P(this, "pauseVideo", this.pauseVideo);
        P(this, "stopVideo", this.Uj);
        P(this, "clearVideo", this.Ws);
        P(this, "getVideoBytesLoaded", this.qt);
        P(this, "getVideoBytesTotal", this.tt);
        P(this, "getVideoLoadedFraction", this.vt);
        P(this, "getVideoStartBytes", this.wt);
        P(this, "cuePlaylist", this.Xs);
        P(this, "loadPlaylist", this.Ct);
        P(this, "nextVideo", this.Ft);
        P(this, "previousVideo", this.Gt);
        P(this, "playVideoAt", this.yn);
        P(this, "setShuffle", this.Mt);
        P(this, "setLoop", this.Jt);
        P(this, "getPlaylist", this.zb);
        P(this, "getPlaylistIndex", this.nk);
        P(this, "getPlaylistId", this.lt);
        P(this, "loadModule", this.Bt);
        P(this, "unloadModule", this.xn);
        P(this, "setOption", this.wn);
        P(this, "getOption", this.Eh);
        P(this, "getOptions", this.ht);
        P(this, "mute", this.tn);
        P(this, "unMute", this.un);
        P(this, "isMuted", this.sn);
        P(this, "setVolume", this.setVolume);
        P(this, "getVolume", this.rn);
        P(this, "seekTo", this.wg);
        P(this, "getPlayerState", this.getPlayerState);
        P(this, "getPlaybackRate", this.kt);
        P(this, "setPlaybackRate", this.Lt);
        P(this, "getAvailablePlaybackRates", this.ct);
        P(this, "getPlaybackQuality", this.jt);
        P(this, "setPlaybackQuality", this.Kt);
        P(this, "getAvailableQualityLevels", this.dt);
        P(this, "getCurrentTime", this.getCurrentTime);
        P(this, "getDuration", this.Hh);
        P(this, "addEventListener", this.addEventListener);
        P(this, "removeEventListener", this.removeEventListener);
        P(this, "getVideoUrl", this.xt);
        P(this, "getDebugText", this.ft);
        P(this, "getVideoEmbedCode", this.ut);
        P(this, "getVideoData", this.getVideoData);
        P(this, "addCueRange", this.Vs);
        P(this, "removeCueRange", this.Ht);
        P(this, "setSize", this.Nt);
        P(this, "getApiInterface", this.$s);
        P(this, "destroy", this.destroy);
        P(this, "showVideoInfo", this.Ot);
        P(this, "hideVideoInfo", this.zt);
        sh(this, "getInternalApiInterface", this.gt);
        sh(this, "logFallback", this.Et);
        sh(this, "isNotServable", this.At);
        sh(this, "getUpdatedConfigurationData", this.nt);
        sh(this, "updateRemoteReceivers", this.Pt);
        sh(this, "sendAbandonmentPing", this.It);
        sh(this, "channelSubscribed", ca);
        sh(this, "channelUnsubscribed", ca)
    }
    v(rh, nh);
    function P(a, b, c) {
        a.g[b] = t(c, a)
    }
    function sh(a, b, c) {
        a.i[b] = t(c, a)
    }
    f = rh.prototype;
    f.$s = function() {
        return Qb(this.g)
    }
    ;
    f.gt = function() {
        return Qb(this.i)
    }
    ;
    f.M = function() {
        return this.U
    }
    ;
    f.addEventListener = function(a, b) {
        var c = b;
        r(b) && (c = function() {
            n(b).apply(window, arguments)
        }
        ,
        this.k[b] = c);
        this.app.G(a, c)
    }
    ;
    f.lw = function(a, b) {
        var c = r(b) ? a + b : a + la(b);
        if (!this.j[c]) {
            r(b) && (b = function() {
                n(b).apply(window, arguments)
            }
            );
            var d = t(function(a) {
                b({
                    target: this.b,
                    data: a
                })
            }, this);
            this.j[c] = d;
            this.addEventListener(a, d)
        }
    }
    ;
    f.removeEventListener = function(a, b) {
        var c = b;
        if (r(b) && b in this.k) {
            var c = this.k[b]
              , d = this.k;
            b in d && delete d[b]
        }
        this.app.ba(a, c)
    }
    ;
    f.mw = function(a, b) {
        var c = r(b) ? a + b : a + la(b);
        this.j[c] && this.removeEventListener(a, this.j[c])
    }
    ;
    f.getPlayerState = function() {
        return this.app.V
    }
    ;
    f.wg = function(a, b) {
        th(this.app, !0, this.a);
        uh(this.app, a, b, void 0, this.a)
    }
    ;
    f.getCurrentTime = function() {
        var a = this.app.Vd;
        return a && Q(this.app).b != a ? a.getCurrentTime() : this.app.getCurrentTime(this.a)
    }
    ;
    f.Hh = function() {
        var a = this.app.Vd;
        return a ? a.kc : 0
    }
    ;
    f.rn = function() {
        return this.app.Ba.volume
    }
    ;
    f.setVolume = function(a) {
        this.app.setVolume(a)
    }
    ;
    f.sn = function() {
        return this.app.Ba.muted
    }
    ;
    f.tn = function() {
        vh(this.app)
    }
    ;
    f.un = function() {
        wh(this.app)
    }
    ;
    f.playVideo = function() {
        th(this.app, !0, this.a);
        xh(this.app, this.a)
    }
    ;
    f.pauseVideo = function() {
        yh(this.app, this.a)
    }
    ;
    f.Uj = function() {
        var a = this.app;
        zh(a, "play_pause") || Ah(a, this.a)
    }
    ;
    f.Ws = function() {}
    ;
    f.kt = function() {
        return this.app.xg
    }
    ;
    f.Lt = function(a) {
        Bh(this.app, a)
    }
    ;
    f.ct = function() {
        return this.app.a.ig ? Ch : [1]
    }
    ;
    f.jt = function() {
        return Dh(this.app, this.a)
    }
    ;
    f.Kt = function(a) {
        Eh(this.app, a, this.a)
    }
    ;
    f.dt = function() {
        var a = this.app.getVideoData(this.a);
        return a && a.g ? a.g ? Fh(a.g) : ["auto"] : []
    }
    ;
    f.qt = function() {
        var a = Gh(this.app.Vd);
        return Math.floor(1E3 * a)
    }
    ;
    f.tt = function() {
        return 1E3
    }
    ;
    f.vt = function() {
        return Gh(this.app.Vd)
    }
    ;
    f.wt = function() {
        return 0
    }
    ;
    f.Nt = function() {
        this.app.ea.Ig()
    }
    ;
    f.Bt = function(a) {
        this.app.j.isAvailable(a) && (a = Hh(this.app.j, a)) && a.load()
    }
    ;
    f.xn = function(a) {
        this.app.j.isAvailable(a) && (a = Hh(this.app.j, a)) && a.unload()
    }
    ;
    f.kk = function(a, b, c) {
        var d = this.app
          , e = this.a;
        a = Ih(d, a, b, c, e);
        th(d, a, e)
    }
    ;
    f.Ys = function(a, b, c) {
        var d = this.app
          , e = this.a;
        a = Jh(a, b, c);
        a.list = d.Qi;
        Kh(d, new Lh(a), e)
    }
    ;
    f.Dt = function(a, b, c) {
        var d = this.app
          , e = this.a;
        a = Mh(a, b, c);
        a.list = d.Qi;
        b = Nh(d, a, e);
        th(d, b, e);
        (e = (new Ge(a.mediaContentUrl)).a) && Oh(d.a, e)
    }
    ;
    f.Zs = function(a, b, c) {
        var d = this.app
          , e = this.a;
        a = Mh(a, b, c);
        a.list = d.Qi;
        Kh(d, new Lh(a), e);
        (e = (new Ge(a.mediaContentUrl)).a) && Oh(d.a, e)
    }
    ;
    f.xt = function() {
        return Ph(this.app)
    }
    ;
    f.ft = function() {
        return Qh(this.app)
    }
    ;
    f.ut = function() {
        return ""
    }
    ;
    f.Vs = function(a, b, c) {
        var d;
        d = this.app;
        var e = d.b;
        e ? (a = new Rh(1E3 * b,1E3 * c,{
            id: a
        }),
        a.Ta.G("onEnter", d.Mw, d),
        a.Ta.G("onExit", d.Nw, d),
        e.wh(a),
        d = !0) : d = !1;
        return d
    }
    ;
    f.Ht = function() {}
    ;
    f.Ct = function(a, b, c, d) {
        var e = this.app;
        e.Re = !1;
        Sh(e, a, b, c, d)
    }
    ;
    f.Xs = function(a, b, c, d) {
        var e = this.app;
        e.Re = !0;
        Sh(e, a, b, c, d)
    }
    ;
    f.Ft = function() {
        Th(this.app)
    }
    ;
    f.Gt = function() {
        Uh(this.app)
    }
    ;
    f.yn = function(a) {
        var b = this.app;
        b.g && (b.g.Wd ? Vh(b, Wh(b.g, a)) : b.Re = !1,
        Xh(b.g, a))
    }
    ;
    f.Mt = function(a) {
        var b = this.app;
        b.g && Yh(b.g, a)
    }
    ;
    f.Jt = function(a) {
        var b = this.app;
        b.g && (b.g.Ef = a)
    }
    ;
    f.zb = function() {
        var a = this.app.g;
        if (!a)
            return null;
        for (var b = [], c = 0; c < a.dc; c++)
            b[c] = Wh(a, c).L;
        return b
    }
    ;
    f.nk = function() {
        var a;
        a = this.app;
        a = a.g ? a.g.xa : null;
        return null == a ? -1 : a
    }
    ;
    f.lt = function() {
        var a = this.app;
        return a.g && a.g.g ? a.g.g.toString() : null
    }
    ;
    f.wn = function(a, b, c) {
        return Zh(this.app.j, a, b, c)
    }
    ;
    f.Eh = function(a, b, c) {
        return Zh(this.app.j, a, b, c)
    }
    ;
    f.ht = function(a) {
        return $h(this.app.j, a)
    }
    ;
    f.getVideoData = function() {
        var a = this.app.getVideoData(this.a) || {};
        return {
            video_id: a.L,
            author: a.ri,
            title: a.title
        }
    }
    ;
    f.Ot = function() {
        ai(this.app.ea)
    }
    ;
    f.zt = function() {
        this.app.ea.Bk()
    }
    ;
    f.Et = function() {
        bi(this.app.b, 204)
    }
    ;
    f.At = function() {
        var a = this.app.getPlayerState();
        return !(!a || !R(a, 128) || 5 != a.a.errorCode)
    }
    ;
    f.nt = function() {
        var a = this.app
          , b = a.J.clone();
        if (a = a.b.getVideoData()) {
            var c = b.args
              , d = Xb(a.b);
            d.start = a.Ha;
            ra(c, d)
        }
        return b
    }
    ;
    f.Pt = function(a) {
        var b = this.app;
        ci(b.a) && 6 != b.o && (b.a.lg = !Ya(a),
        b.a.lg ? 1 != b.o && 3 != b.o && di(b) : ei(b.F))
    }
    ;
    f.destroy = function() {
        this.app.dispose()
    }
    ;
    f.It = function() {
        var a = Q(this.app);
        a && (!a.k.wb || a.getPlayerState() & 450 || fi(a))
    }
    ;
    f.H = function() {
        if (this.U) {
            for (var a in this.g)
                this.U[a] = null;
            for (a in this.i)
                this.U[a] = null
        }
        this.k = this.j = this.U = null;
        rh.D.H.call(this)
    }
    ;
    function gi(a, b) {
        rh.call(this, a, b);
        P(this, "cueVideoByPlayerVars", this.Yx);
        P(this, "loadVideoByPlayerVars", this.Ro);
        P(this, "preloadVideoByPlayerVars", this.by);
        P(this, "seekBy", this.$p);
        P(this, "enableLicenseIntercept", this.Zx);
        P(this, "updatePlaylist", this.gy);
        P(this, "resumeLicenseSession", this.cy);
        P(this, "updateLastActiveTime", this.fy);
        P(this, "updateVideoData", this.hy);
        P(this, "getStoryboardFormat", this.$x);
        P(this, "hideUserInterface", this.ay);
        P(this, "showUserInterface", this.ey)
    }
    v(gi, rh);
    f = gi.prototype;
    f.Yx = function(a) {
        var b = this.a;
        Kh(this.app, new Lh(a), b)
    }
    ;
    f.Ro = function(a) {
        Nh(this.app, a, this.a)
    }
    ;
    f.by = function() {}
    ;
    f.playVideo = function() {
        this.app.N().ha || th(this.app, !0, this.a);
        xh(this.app, this.a)
    }
    ;
    f.wg = function(a, b) {
        this.app.N().ha || th(this.app, !0, this.a);
        uh(this.app, a, b, void 0, this.a)
    }
    ;
    f.$p = function(a, b, c) {
        this.app.N().ha || th(this.app, !0, this.a);
        var d = this.app
          , e = this.a;
        uh(d, d.getCurrentTime() + a, b, c, e)
    }
    ;
    f.Zx = function() {
        var a = this.app;
        a.tl || (a.tl = !0,
        a.Ii = {})
    }
    ;
    f.gy = function() {
        var a = this.app;
        hi(a);
        a.Wa("onPlaylistUpdate")
    }
    ;
    f.cy = function(a, b) {
        var c = this.app
          , d = c.Ii[a];
        d && (ii(d, b),
        d.start(),
        delete c.Ii[a])
    }
    ;
    f.fy = function() {
        this.app.a.C = u()
    }
    ;
    f.hy = function(a) {
        var b = Q(this.app, this.a || 1);
        b && (b = b.a,
        ji(b, a),
        b.B("dataupdated"))
    }
    ;
    f.$x = function() {
        return this.app.getVideoData().b.storyboard_spec
    }
    ;
    f.ay = function() {
        this.app.ea.Mi(!1)
    }
    ;
    f.ey = function() {
        this.app.ea.Mi(!0)
    }
    ;
    f.getVideoData = function() {
        var a = gi.D.getVideoData.call(this)
          , b = this.app.getVideoData(this.a) || {};
        a.cpn = b.Fa;
        return a
    }
    ;
    f.getCurrentTime = function(a) {
        return a ? this.app.getCurrentTime(a) : gi.D.getCurrentTime.call(this)
    }
    ;
    f.Hh = function(a) {
        return a ? ki(this.app, a) : gi.D.Hh.call(this)
    }
    ;
    function li(a, b) {
        gi.call(this, a, b)
    }
    v(li, gi);
    f = li.prototype;
    f.getPlayerType = function() {
        return this.a
    }
    ;
    f.kk = function(a, b, c) {
        Ih(this.app, a, b, c, this.a)
    }
    ;
    f.playVideo = function() {
        xh(this.app, this.a)
    }
    ;
    f.wg = function(a, b) {
        uh(this.app, a, b, void 0, this.a)
    }
    ;
    function S(a) {
        return mi(a).a
    }
    f.N = function() {
        return this.app.N()
    }
    ;
    function mi(a) {
        return a.app.ea
    }
    f.zb = function() {
        return this.app.g
    }
    ;
    f.getVideoData = function() {
        return this.app.getVideoData(this.a)
    }
    ;
    function ni(a) {
        this.i = Math.exp(Math.log(0.5) / a);
        this.a = this.g = 0
    }
    ni.prototype.b = function(a, b) {
        var c = Math.pow(this.i, a);
        this.a = b * (1 - c) + c * this.a;
        this.g += a
    }
    ;
    ni.prototype.j = function() {
        return this.a / (1 - Math.pow(this.i, this.g))
    }
    ;
    function oi(a, b, c) {
        this.u = 0;
        this.o = a;
        this.i = b || 0.5;
        this.k = c || 0;
        this.C = "index";
        this.a = 0;
        this.g = []
    }
    oi.prototype.b = function(a, b) {
        pi(this, "index");
        this.g.push({
            index: this.u++,
            weight: a,
            value: b
        });
        this.a += a;
        for (pi(this, "index"); this.a > this.o; ) {
            var c = this.a - this.o
              , d = this.g[0];
            d.weight <= c ? (this.a -= d.weight,
            this.g.shift()) : (this.a -= c,
            d.weight -= c)
        }
    }
    ;
    function qi(a, b) {
        pi(a, "value");
        var c = b * a.a
          , d = 0
          , e = NaN;
        a.g.some(function(a) {
            d += a.weight;
            e = a.value;
            if (d >= c)
                return !0
        });
        return e
    }
    oi.prototype.j = function() {
        return this.k ? (qi(this, this.i - this.k) + qi(this, this.i) + qi(this, this.i + this.k)) / 3 : qi(this, this.i)
    }
    ;
    function pi(a, b) {
        a.C != b && (a.C = b,
        ob(a.g, b))
    }
    ;function ri() {
        var a = {
            volume: 100,
            muted: !1,
            nonNormalized: 100
        }
          , b = Qg("yt-player-volume") || {};
        a.volume = isNaN(b.volume) ? 100 : Bb(b.volume, 0, 100);
        a.nonNormalized = isNaN(b.nonNormalized) ? a.volume : b.nonNormalized;
        a.muted = void 0 == b.muted ? !1 : b.muted;
        return a
    }
    ;function si(a) {
        this.g = this.j = this.k = 0;
        this.b = new oi(16,0.6);
        this.i = new ni(4);
        ti() ? this.a = new ni(17) : this.a = new oi(17,0.5,0.1);
        a.Us && (ui = 4096);
        a = Qg("yt-player-bandwidth") || {};
        this.a.b(ti() ? 0.1 : 0.5, 0 < a.byterate ? a.byterate : 13E4);
        0 < a.delay && this.b.b(1, +a.delay);
        0 < a.tailDelay && this.i.b(1, +a.tailDelay);
        this.g = u()
    }
    var ui = 8192;
    function vi(a) {
        a = a.b.j();
        return a = isNaN(a) ? 0.5 : a
    }
    function wi(a) {
        return a.i.j() || 0
    }
    function xi(a) {
        a = a.a.j();
        return 0 < a ? a : 1
    }
    function yi(a) {
        var b = {};
        b.delay = vi(a);
        b.tailDelay = wi(a);
        b.byterate = xi(a);
        return b
    }
    function zi(a) {
        if (3E4 < u() - a.g) {
            var b = yi(a);
            Ng("yt-player-bandwidth", b, 2592E3);
            a.g = u()
        }
    }
    ;function Ai() {
        this.a = [];
        this.Rb = {}
    }
    v(Ai, nh);
    f = Ai.prototype;
    f.qp = 1;
    f.Hi = 0;
    f.G = function(a, b, c) {
        var d = this.Rb[a];
        d || (d = this.Rb[a] = []);
        var e = this.qp;
        this.a[e] = a;
        this.a[e + 1] = b;
        this.a[e + 2] = c;
        this.qp = e + 3;
        d.push(e);
        return e
    }
    ;
    f.ba = function(a, b, c) {
        if (a = this.Rb[a]) {
            var d = this.a;
            if (a = Ua(a, function(a) {
                return d[a + 1] == b && d[a + 2] == c
            }))
                return this.Uc(a)
        }
        return !1
    }
    ;
    f.Uc = function(a) {
        if (0 != this.Hi)
            return this.b || (this.b = []),
            this.b.push(a),
            !1;
        var b = this.a[a];
        if (b) {
            var c = this.Rb[b];
            c && ab(c, a);
            delete this.a[a];
            delete this.a[a + 1];
            delete this.a[a + 2]
        }
        return !!b
    }
    ;
    f.B = function(a, b) {
        var c = this.Rb[a];
        if (c) {
            this.Hi++;
            for (var d = hb(arguments, 1), e = 0, g = c.length; e < g; e++) {
                var h = c[e];
                this.a[h + 1].apply(this.a[h + 2], d)
            }
            this.Hi--;
            if (this.b && 0 == this.Hi)
                for (; c = this.b.pop(); )
                    this.Uc(c);
            return 0 != e
        }
        return !1
    }
    ;
    f.clear = function(a) {
        if (a) {
            var b = this.Rb[a];
            b && (x(b, this.Uc, this),
            delete this.Rb[a])
        } else
            this.a.length = 0,
            this.Rb = {}
    }
    ;
    f.Id = function(a) {
        if (a) {
            var b = this.Rb[a];
            return b ? b.length : 0
        }
        a = 0;
        for (b in this.Rb)
            a += this.Id(b);
        return a
    }
    ;
    f.H = function() {
        Ai.D.H.call(this);
        delete this.a;
        delete this.Rb;
        delete this.b
    }
    ;
    function Bi(a, b) {
        this.start = a;
        this.end = b;
        this.a = la(this)
    }
    function Ci(a, b) {
        return a.start != b.start ? a.start - b.start : a.end != b.end ? a.end - b.end : a.a != b.a ? a.a - b.a : 0
    }
    Bi.prototype.contains = function(a, b) {
        return a >= this.start && (a < this.end || a == this.end && this.start == this.end) && (null == b || a < b && b <= this.end)
    }
    ;
    Bi.prototype.toString = function() {
        return "Interval[" + this.start + ", " + this.end + "]"
    }
    ;
    function Rh(a, b, c) {
        Bi.call(this, a, b);
        a = c || {};
        this.Da = a.id || "";
        void 0 != a.priority && (this.$g = a.priority);
        this.namespace = a.namespace || "";
        this.Ta = new Ai;
        this.b = a.tooltip;
        a.style && (this.style = a.style);
        a.visible && (this.Sd = a.visible)
    }
    v(Rh, Bi);
    f = Rh.prototype;
    f.Da = "";
    f.$g = 7;
    f.active = !0;
    f.Sd = !1;
    f.style = "ytp-ad-progress";
    f.Ta = null;
    f.namespace = "";
    f.getId = function() {
        return this.Da
    }
    ;
    function Di(a) {
        switch (a.style) {
        case "ytp-chapter-marker":
            return 8;
        case "ytp-ad-progress":
            return 6
        }
    }
    function Ei(a, b) {
        return a.start == b.start ? a.$g == b.$g ? 0 : a.$g < b.$g ? -1 : 1 : a.start < b.start ? -1 : 1
    }
    ;function Fi(a) {
        Fi[" "](a);
        return a
    }
    Fi[" "] = ca;
    var Gi = !C || Dc(9)
      , Hi = C && !Cc("9");
    !oc || Cc("528");
    nc && Cc("1.9b") || C && Cc("8") || mc && Cc("9.5") || oc && Cc("528");
    nc && !Cc("8") || C && Cc("9");
    function Ii(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.b = !1;
        this.Zo = !0
    }
    Ii.prototype.H = function() {}
    ;
    Ii.prototype.dispose = function() {}
    ;
    Ii.prototype.stopPropagation = function() {
        this.b = !0
    }
    ;
    Ii.prototype.preventDefault = function() {
        this.defaultPrevented = !0;
        this.Zo = !1
    }
    ;
    function Ji(a, b) {
        Ii.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.a = null;
        a && this.init(a, b)
    }
    v(Ji, Ii);
    f = Ji.prototype;
    f.init = function(a, b) {
        var c = this.type = a.type;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var d = a.relatedTarget;
        if (d) {
            if (nc) {
                var e;
                t: {
                    try {
                        Fi(d.nodeName);
                        e = !0;
                        break t
                    } catch (g) {}
                    e = !1
                }
                e || (d = null)
            }
        } else
            "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
        this.relatedTarget = d;
        this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
        this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
        this.screenX = a.screenX || 0;
        this.screenY = a.screenY || 0;
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.a = a;
        a.defaultPrevented && this.preventDefault()
    }
    ;
    f.stopPropagation = function() {
        Ji.D.stopPropagation.call(this);
        this.a.stopPropagation ? this.a.stopPropagation() : this.a.cancelBubble = !0
    }
    ;
    f.preventDefault = function() {
        Ji.D.preventDefault.call(this);
        var a = this.a;
        if (a.preventDefault)
            a.preventDefault();
        else if (a.returnValue = !1,
        Hi)
            try {
                if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
                    a.keyCode = -1
            } catch (b) {}
    }
    ;
    f.Cw = function() {
        return this.a
    }
    ;
    f.H = function() {}
    ;
    var Ki = "closure_listenable_" + (1E6 * Math.random() | 0);
    function Li(a) {
        try {
            return !(!a || !a[Ki])
        } catch (b) {
            return !1
        }
    }
    var Mi = 0;
    function Ni(a, b, c, d, e) {
        this.$e = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.jb = e;
        this.key = ++Mi;
        this.removed = this.Gi = !1
    }
    function Oi(a) {
        a.removed = !0;
        a.$e = null;
        a.proxy = null;
        a.src = null;
        a.jb = null
    }
    ;function Pi(a) {
        this.src = a;
        this.a = {};
        this.b = 0
    }
    Pi.prototype.add = function(a, b, c, d, e) {
        var g = this.a[a];
        g || (g = this.a[a] = [],
        this.b++);
        var h = Qi(g, b, d, e);
        -1 < h ? (a = g[h],
        c || (a.Gi = !1)) : (a = new Ni(b,this.src,a,!!d,e),
        a.Gi = c,
        g.push(a));
        return a
    }
    ;
    Pi.prototype.remove = function(a, b, c, d) {
        if (!(a in this.a))
            return !1;
        var e = this.a[a];
        b = Qi(e, b, c, d);
        return -1 < b ? (Oi(e[b]),
        bb(e, b),
        0 == e.length && (delete this.a[a],
        this.b--),
        !0) : !1
    }
    ;
    function Ri(a, b) {
        var c = b.type;
        if (!(c in a.a))
            return !1;
        var d = ab(a.a[c], b);
        d && (Oi(b),
        0 == a.a[c].length && (delete a.a[c],
        a.b--));
        return d
    }
    Pi.prototype.removeAll = function(a) {
        var b = 0, c;
        for (c in this.a)
            if (!a || c == a) {
                for (var d = this.a[c], e = 0; e < d.length; e++)
                    ++b,
                    Oi(d[e]);
                delete this.a[c];
                this.b--
            }
        return b
    }
    ;
    function Si(a, b, c, d, e) {
        a = a.a[b];
        b = -1;
        a && (b = Qi(a, c, d, e));
        return -1 < b ? a[b] : null
    }
    function Qi(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var g = a[e];
            if (!g.removed && g.$e == b && g.capture == !!c && g.jb == d)
                return e
        }
        return -1
    }
    ;var Ti = "closure_lm_" + (1E6 * Math.random() | 0)
      , Ui = {}
      , Vi = 0;
    function Wi(a, b, c, d, e) {
        if (ga(b)) {
            for (var g = 0; g < b.length; g++)
                Wi(a, b[g], c, d, e);
            return null
        }
        c = Xi(c);
        return Li(a) ? a.listen(b, c, d, e) : Yi(a, b, c, !1, d, e)
    }
    function Yi(a, b, c, d, e, g) {
        if (!b)
            throw Error("Invalid event type");
        var h = !!e
          , k = Zi(a);
        k || (a[Ti] = k = new Pi(a));
        c = k.add(b, c, d, e, g);
        if (c.proxy)
            return c;
        d = $i();
        c.proxy = d;
        d.src = a;
        d.$e = c;
        a.addEventListener ? a.addEventListener(b, d, h) : a.attachEvent(b in Ui ? Ui[b] : Ui[b] = "on" + b, d);
        Vi++;
        return c
    }
    function $i() {
        var a = aj
          , b = Gi ? function(c) {
            return a.call(b.src, b.$e, c)
        }
        : function(c) {
            c = a.call(b.src, b.$e, c);
            if (!c)
                return c
        }
        ;
        return b
    }
    function bj(a, b, c, d, e) {
        if (ga(b))
            for (var g = 0; g < b.length; g++)
                bj(a, b[g], c, d, e);
        else
            c = Xi(c),
            Li(a) ? a.Fd.add(String(b), c, !0, d, e) : Yi(a, b, c, !0, d, e)
    }
    function cj(a, b, c, d, e) {
        if (ga(b))
            for (var g = 0; g < b.length; g++)
                cj(a, b[g], c, d, e);
        else
            c = Xi(c),
            Li(a) ? a.Ib(b, c, d, e) : a && (a = Zi(a)) && (b = Si(a, b, c, !!d, e)) && dj(b)
    }
    function dj(a) {
        if (ia(a) || !a || a.removed)
            return !1;
        var b = a.src;
        if (Li(b))
            return Ri(b.Fd, a);
        var c = a.type
          , d = a.proxy;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(c in Ui ? Ui[c] : Ui[c] = "on" + c, d);
        Vi--;
        (c = Zi(b)) ? (Ri(c, a),
        0 == c.b && (c.src = null,
        b[Ti] = null)) : Oi(a);
        return !0
    }
    function ej(a, b, c, d) {
        var e = 1;
        if (a = Zi(a))
            if (b = a.a[b])
                for (b = eb(b),
                a = 0; a < b.length; a++) {
                    var g = b[a];
                    g && g.capture == c && !g.removed && (e &= !1 !== fj(g, d))
                }
        return Boolean(e)
    }
    function fj(a, b) {
        var c = a.$e
          , d = a.jb || a.src;
        a.Gi && dj(a);
        return c.call(d, b)
    }
    function aj(a, b) {
        if (a.removed)
            return !0;
        if (!Gi) {
            var c = b || n("window.event")
              , d = new Ji(c,this)
              , e = !0;
            if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                t: {
                    var g = !1;
                    if (0 == c.keyCode)
                        try {
                            c.keyCode = -1;
                            break t
                        } catch (h) {
                            g = !0
                        }
                    if (g || void 0 == c.returnValue)
                        c.returnValue = !0
                }
                c = [];
                for (g = d.currentTarget; g; g = g.parentNode)
                    c.push(g);
                for (var g = a.type, k = c.length - 1; !d.b && 0 <= k; k--)
                    d.currentTarget = c[k],
                    e &= ej(c[k], g, !0, d);
                for (k = 0; !d.b && k < c.length; k++)
                    d.currentTarget = c[k],
                    e &= ej(c[k], g, !1, d)
            }
            return e
        }
        return fj(a, new Ji(b,this))
    }
    function Zi(a) {
        a = a[Ti];
        return a instanceof Pi ? a : null
    }
    var gj = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
    function Xi(a) {
        return ja(a) ? a : a[gj] || (a[gj] = function(b) {
            return a.handleEvent(b)
        }
        )
    }
    ;function hj() {
        this.Fd = new Pi(this);
        this.S = this
    }
    v(hj, nh);
    hj.prototype[Ki] = !0;
    f = hj.prototype;
    f.Si = null;
    f.Pl = function(a) {
        this.Si = a
    }
    ;
    f.addEventListener = function(a, b, c, d) {
        Wi(this, a, b, c, d)
    }
    ;
    f.removeEventListener = function(a, b, c, d) {
        cj(this, a, b, c, d)
    }
    ;
    function ij(a, b) {
        var c, d = a.Si;
        if (d) {
            c = [];
            for (var e = 1; d; d = d.Si)
                c.push(d),
                ++e
        }
        var d = a.S
          , e = b
          , g = e.type || e;
        if (r(e))
            e = new Ii(e,d);
        else if (e instanceof Ii)
            e.target = e.target || d;
        else {
            var h = e
              , e = new Ii(g,d);
            $b(e, h)
        }
        var h = !0, k;
        if (c)
            for (var m = c.length - 1; !e.b && 0 <= m; m--)
                k = e.currentTarget = c[m],
                h = jj(k, g, !0, e) && h;
        e.b || (k = e.currentTarget = d,
        h = jj(k, g, !0, e) && h,
        e.b || (h = jj(k, g, !1, e) && h));
        if (c)
            for (m = 0; !e.b && m < c.length; m++)
                k = e.currentTarget = c[m],
                h = jj(k, g, !1, e) && h
    }
    f.H = function() {
        hj.D.H.call(this);
        this.removeAllListeners();
        this.Si = null
    }
    ;
    f.listen = function(a, b, c, d) {
        return this.Fd.add(String(a), b, !1, c, d)
    }
    ;
    f.Ib = function(a, b, c, d) {
        return this.Fd.remove(String(a), b, c, d)
    }
    ;
    f.removeAllListeners = function(a) {
        return this.Fd ? this.Fd.removeAll(a) : 0
    }
    ;
    function jj(a, b, c, d) {
        b = a.Fd.a[String(b)];
        if (!b)
            return !0;
        b = eb(b);
        for (var e = !0, g = 0; g < b.length; ++g) {
            var h = b[g];
            if (h && !h.removed && h.capture == c) {
                var k = h.$e
                  , m = h.jb || h.src;
                h.Gi && Ri(a.Fd, h);
                e = !1 !== k.call(m, d) && e
            }
        }
        return e && !1 != d.Zo
    }
    ;function kj(a, b) {
        hj.call(this);
        this.a = a || 1;
        this.b = b || l;
        this.g = t(this.Ru, this);
        this.i = u()
    }
    v(kj, hj);
    f = kj.prototype;
    f.enabled = !1;
    f.fc = null;
    function lj(a, b) {
        a.a = b;
        a.fc && a.enabled ? (a.stop(),
        a.start()) : a.fc && a.stop()
    }
    f.Ru = function() {
        if (this.enabled) {
            var a = u() - this.i;
            0 < a && a < 0.8 * this.a ? this.fc = this.b.setTimeout(this.g, this.a - a) : (this.fc && (this.b.clearTimeout(this.fc),
            this.fc = null),
            ij(this, "tick"),
            this.enabled && (this.fc = this.b.setTimeout(this.g, this.a),
            this.i = u()))
        }
    }
    ;
    f.start = function() {
        this.enabled = !0;
        this.fc || (this.fc = this.b.setTimeout(this.g, this.a),
        this.i = u())
    }
    ;
    f.stop = function() {
        this.enabled = !1;
        this.fc && (this.b.clearTimeout(this.fc),
        this.fc = null)
    }
    ;
    f.H = function() {
        kj.D.H.call(this);
        this.stop();
        delete this.b
    }
    ;
    function mj(a, b, c) {
        if (ja(a))
            c && (a = t(a, c));
        else if (a && "function" == typeof a.handleEvent)
            a = t(a.handleEvent, a);
        else
            throw Error("Invalid listener argument");
        return 2147483647 < b ? -1 : l.setTimeout(a, b || 0)
    }
    ;function nj() {
        this.a = []
    }
    function oj(a, b) {
        for (var c = [], d = 0; d < a.a.length; ++d) {
            var e = a.a[d];
            e.contains(b) && c.push(e);
            if (e.start > b)
                break
        }
        return c
    }
    function pj(a, b, c) {
        for (var d = [], e = 0; e < a.a.length; ++e) {
            var g = a.a[e];
            if (null != c && g.start > c)
                break;
            g.start > b && d.push(g)
        }
        return d
    }
    function qj(a, b) {
        for (var c = [], d = 0; d < a.a.length; ++d) {
            var e = a.a[d];
            e.contains(b) && c.push(e.end);
            if (e.start > b) {
                c.push(e.start);
                break
            }
        }
        c.sort(lb);
        return c[0]
    }
    ;function rj(a) {
        var b = "";
        if (a)
            for (var c = 0; c < a.length; c++)
                b += a.start(c).toFixed(3) + "-" + a.end(c).toFixed(3) + ",";
        return b
    }
    function sj(a, b) {
        var c;
        t: {
            if (a)
                for (c = 0; c < a.length; c++)
                    if (a.start(c) <= b && a.end(c) >= b)
                        break t;
            c = -1
        }
        return 0 <= c ? a.end(c) : NaN
    }
    function tj(a) {
        return a && a.length ? a.end(a.length - 1) : NaN
    }
    function uj(a, b) {
        var c = sj(a, b);
        return 0 <= c ? c - b : 0
    }
    ;var vj, wj, xj, yj, zj, Aj, Bj;
    Bj = Aj = zj = yj = xj = wj = vj = !1;
    var Cj = ic();
    Cj && (-1 != Cj.indexOf("Firefox") ? vj = !0 : -1 != Cj.indexOf("Camino") ? wj = !0 : -1 != Cj.indexOf("iPhone") || -1 != Cj.indexOf("iPod") ? xj = !0 : -1 != Cj.indexOf("iPad") ? yj = !0 : -1 != Cj.indexOf("Chrome") ? Aj = !0 : -1 != Cj.indexOf("Android") ? zj = !0 : -1 != Cj.indexOf("Safari") && (Bj = !0));
    var Dj = vj
      , Ej = wj
      , Fj = xj
      , Gj = yj
      , Hj = zj
      , Ij = Aj
      , Jj = Bj;
    var Kj, Lj;
    var Mj = ic()
      , Nj = Mj.match(/\((iPad|iPhone|iPod)( Simulator)?;/);
    if (!Nj || 2 > Nj.length)
        Kj = void 0;
    else {
        var Oj = Mj.match(/\((iPad|iPhone|iPod)( Simulator)?; (U; )?CPU (iPhone )?OS (\d_\d)[_ ]/);
        Kj = Oj && 6 == Oj.length ? Number(Oj[5].replace("_", ".")) : 0
    }
    (Lj = 0 <= Kj) && 0 <= ic().search("Safari") && ic().search("Version");
    var Pj = Fj || Gj;
    function Qj() {
        return Rj("(ps3; leanback shell)")
    }
    function ti() {
        return Ij && Rj("crkey")
    }
    function Rj(a) {
        var b = ic();
        return b ? 0 <= b.toLowerCase().indexOf(a.toLowerCase()) : !1
    }
    ;function Sj() {}
    var Tj = Lj && 4 > Kj ? 0.1 : 0
      , Uj = new Sj;
    f = Sj.prototype;
    f.ud = null;
    f.Uk = !1;
    f.kc = 0;
    f.Wl = 0;
    function Vj(a, b) {
        var c = "";
        b && (a.ud = b,
        c = Wj(b));
        a.src && "" == c || (c && a.src != c && (a.src = c),
        b && b.a || a.load())
    }
    function Xj(a, b) {
        0 < a.readyState && (a.currentTime = Math.max(Tj, b))
    }
    f.getType = function() {
        return this.type
    }
    ;
    f.getCurrentTime = function() {
        return this.Wl || this.currentTime
    }
    ;
    f.Qk = function() {
        this.Wl = this.currentTime
    }
    ;
    function Gh(a) {
        var b = a.kc;
        return Infinity == b ? 1 : 0 < tj(a.buffered) && b ? sj(a.buffered, a.currentTime) / b : 0
    }
    f.playVideo = function() {
        this.ended && Xj(this, 0);
        !this.hasAttribute("src") && this.ud && (this.src = Wj(this.ud),
        this.ud.a || this.load());
        this.play();
        Lj && 7 <= Kj && Sf(this, t(function() {
            L(t(this.rp, this, this.currentTime, 0), 500)
        }, this))
    }
    ;
    f.rp = function(a, b) {
        this.paused || this.currentTime > a || 10 < b || (this.play(),
        L(t(this.rp, this, this.currentTime, b + 1), 500))
    }
    ;
    f.pauseVideo = function() {
        this.pause()
    }
    ;
    function Yj(a) {
        a.currentSrc && (Pj && Xj(a, 0),
        hd(a),
        a.removeAttribute("src"),
        a.load(),
        a.ud && a.ud.a && (a.ud = null))
    }
    function Zj(a) {
        Yj(a);
        a.kc = 0;
        a.Wl = 0;
        a.ud = null
    }
    f.setVolume = function(a, b) {
        this.volume = a / 100;
        this.muted = b
    }
    ;
    function ak(a, b) {
        a.defaultPlaybackRate = b;
        a.playbackRate = b
    }
    function bk(a) {
        return 1 > a.seekable.length ? NaN : a.seekable.end(a.seekable.length - 1)
    }
    function ck(a, b) {
        b ? a.setAttribute("crossorigin", "true") : a.removeAttribute("crossorigin")
    }
    f.Sw = function() {
        this.hasAttribute("controls") && this.setAttribute("controls", "true")
    }
    ;
    f.Tw = function() {
        this.Uk && !this.muted && (this.muted = !0)
    }
    ;
    Sj.prototype.getDebugInfo = function() {
        return {
            vct: this.currentTime.toFixed(3),
            vd: this.duration.toFixed(3),
            vpl: rj(this.played),
            vbu: rj(this.buffered),
            vpa: this.paused,
            vsk: this.seeking,
            vpr: this.playbackRate,
            vrs: this.readyState,
            vns: this.networkState,
            vec: this.error ? this.error.errorCode : null
        }
    }
    ;
    var dk = [2, 5, 100, 101, 150]
      , ek = [202, 203];
    function fk(a, b) {
        a = a || 64;
        a & 128 && !b || a & 2 && a & 16 || (this.b = a,
        this.a = b || null)
    }
    fk.prototype.b = 64;
    fk.prototype.a = null;
    function gk(a, b, c) {
        return b == a.b && c == a.a || b & 128 && !c || b & 2 && b & 16 ? a : new fk(b,c)
    }
    function hk(a, b) {
        return gk(a, a.b | b)
    }
    function R(a, b) {
        return !!(a.b & b)
    }
    function ik(a, b) {
        return b.b == a.b && b.a == a.a
    }
    function jk(a) {
        return R(a, 128) ? -1 : R(a, 2) ? 0 : R(a, 1) && !R(a, 32) ? 3 : R(a, 64) ? -1 : R(a, 8) ? 1 : R(a, 4) ? 2 : -1
    }
    function kk() {
        var a;
        return a = 14
    }
    ;function T() {
        this.C = new Ai;
        O(this, this.C)
    }
    v(T, nh);
    T.prototype.G = function(a, b, c) {
        return this.ia() ? 0 : this.C.G(a, b, c)
    }
    ;
    T.prototype.ba = function(a, b, c) {
        return this.ia() ? !1 : this.C.ba(a, b, c)
    }
    ;
    T.prototype.Uc = function(a) {
        return this.ia() ? !1 : this.C.Uc(a)
    }
    ;
    T.prototype.B = function(a, b) {
        return this.ia() ? !1 : this.C.B.apply(this.C, arguments)
    }
    ;
    function lk(a, b, c) {
        T.call(this);
        this.u = a;
        this.o = b;
        this.A = c;
        this.j = new kj(250);
        Wi(this.j, "tick", this.Zb, !1, this);
        O(this, this.j);
        this.i = [];
        this.a = [];
        this.b = new nj
    }
    v(lk, T);
    f = lk.prototype;
    f.Mh = !1;
    f.pg = !1;
    f.Nk = !1;
    f.Mk = !1;
    f.Ag = null;
    f.Lx = function(a) {
        this.Zb();
        x(arguments, function(a) {
            this.i.push(a);
            var c = this.b.a;
            if (!c.length || 0 < Ci(a, c[c.length - 1]))
                c.push(a);
            else {
                var d = jb(c, a, Ci);
                0 > d && gb(c, -(d + 1), 0, a)
            }
            this.B("onAdd", a)
        }, this);
        this.Zb()
    }
    ;
    f.Mx = function(a) {
        x(arguments, function(a) {
            a = this.i.indexOf(a);
            0 <= a && mk(this, a)
        }, this);
        this.Zb()
    }
    ;
    function mk(a, b) {
        var c = a.i.splice(b, 1)[0]
          , d = a.b.a
          , e = jb(d, c, Ci);
        0 <= e && bb(d, e);
        b = a.a.indexOf(c);
        0 <= b && a.a.splice(b, 1);
        a.B("onRemove", c)
    }
    f.reset = function() {
        this.pg = this.Mh = !1;
        nk(this);
        for (var a = this.i.length - 1; 0 <= a; a--)
            mk(this, a);
        this.Zb();
        this.k = null
    }
    ;
    function ok(a, b) {
        if (a.pg && !a.Mh)
            if (nk(a),
            R(b.a, 2)) {
                a.k = null;
                for (var c = [], d = 0; d < a.a.length; d++) {
                    var e = a.a[d];
                    e.active && 2147483647 > e.end && c.push(e)
                }
                d = oj(a.b, 2147483646);
                d = d.concat(pj(a.b, 2147483646));
                c = pk(a, c).concat(qk(a, d));
                rk(a, c)
            } else
                R(b.a, 16) ? (a.g = sk(a),
                a.j.stop(),
                a.j.start(),
                a.Zb()) : (a.j.stop(),
                R(b.b, 16) ? (a.g = sk(a),
                null != qj(a.b, Math.max(a.g - 2E3, 0)) && (a.Ag = mj(t(a.Zb, a)))) : a.Zb())
    }
    function qk(a, b) {
        var c = [];
        if (!b.length)
            return c;
        b.sort(Ei);
        for (var d = 0; d < b.length; d++) {
            var e = b[d];
            e.active && -1 == a.a.indexOf(e) && (a.a.push(e),
            c.push(["onEnter", e]))
        }
        return c
    }
    function pk(a, b) {
        var c = [];
        if (!b.length)
            return c;
        b.sort(Ei);
        for (var d = 0; d < b.length; d++) {
            var e = b[d]
              , g = a.a.indexOf(e);
            0 > g || (a.a.splice(g, 1),
            c.push(["onExit", e]))
        }
        return c
    }
    f.Zb = function() {
        this.Mk = !0;
        if (!this.Nk)
            for (var a = 3; this.Mk && a; ) {
                this.Mk = !1;
                this.Nk = !0;
                if (this.pg && !this.Mh) {
                    nk(this);
                    for (var b = sk(this), c = [], d = [], e = 0; e < this.a.length; e++) {
                        var g = this.a[e];
                        g.active && !g.contains(b) && d.push(g)
                    }
                    c = c.concat(pk(this, d));
                    d = oj(this.b, b);
                    e = this.o();
                    !R(e, 48) && b > this.g && (d = d.concat(pj(this.b, this.g, b)));
                    c = c.concat(qk(this, d));
                    this.g = b;
                    !this.Mh && this.k && (c.unshift(["onLockBlockExit", this.k]),
                    this.k = null,
                    R(e, 2) && (this.g = 2147483647));
                    this.A() && (b = qj(this.b, this.g),
                    null != b && (this.Ag = mj(t(this.Zb, this), b - this.g)));
                    rk(this, c)
                }
                this.Nk = !1;
                a--
            }
    }
    ;
    function rk(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c]
              , e = d[1];
            "onLockBlockExit" == d[0] || "onLockBlockEnter" == d[0] ? a.B.apply(a, d) : e.Ta.B.apply(e.Ta, d)
        }
    }
    function nk(a) {
        null != a.Ag && (l.clearTimeout(a.Ag),
        a.Ag = null)
    }
    function sk(a) {
        return R(a.o(), 2) ? 2147483647 : 1E3 * a.u()
    }
    f.H = function() {
        cj(this.j, "tick", this.Zb, !1, this);
        nk(this);
        this.k = this.b = this.a = this.i = null;
        lk.D.H.call(this)
    }
    ;
    function tk(a, b) {
        for (var c = a.split(b), d = {}, e = 0, g = c.length; e < g; e++) {
            var h = c[e].split("=");
            if (1 == h.length && h[0] || 2 == h.length) {
                var k = za(h[0] || "")
                  , h = za(h[1] || "");
                k in d ? ga(d[k]) ? fb(d[k], h) : d[k] = [d[k], h] : d[k] = h
            }
        }
        return d
    }
    function uk(a, b) {
        var c = [];
        Lb(a, function(a, b) {
            var g = ya(b), h;
            h = ga(a) ? a : [a];
            x(h, function(a) {
                "" == a ? c.push(g) : c.push(g + "=" + ya(a))
            })
        });
        return c.join(b)
    }
    function vk(a) {
        "?" == a.charAt(0) && (a = a.substr(1));
        return tk(a, "&")
    }
    function wk(a) {
        return -1 != a.indexOf("?") ? (a = (a || "").split("#")[0],
        a = a.split("?", 2),
        vk(1 < a.length ? a[1] : a[0])) : {}
    }
    function xk(a) {
        a = ze([], a);
        a[0] = "";
        return a.join("")
    }
    function yk(a, b) {
        return we(ze([a], b))
    }
    var zk = ue;
    function Ak() {
        var a = se(document.location.href);
        return qe(a[1], a[2], a[3], a[4])
    }
    function Bk(a, b) {
        var c = a.split("#", 2);
        a = c[0];
        var c = 1 < c.length ? "#" + c[1] : ""
          , d = a.split("?", 2);
        a = d[0];
        var d = vk(d[1] || ""), e;
        for (e in b)
            d[e] = b[e];
        return yk(a, d) + c
    }
    ;var Ck = null;
    "undefined" != typeof XMLHttpRequest ? Ck = function() {
        return new XMLHttpRequest
    }
    : "undefined" != typeof ActiveXObject && (Ck = function() {
        return new ActiveXObject("Microsoft.XMLHTTP")
    }
    );
    function Dk(a) {
        switch (a && "status"in a ? a.status : -1) {
        case 0:
        case 200:
        case 201:
        case 202:
        case 203:
        case 204:
        case 205:
        case 206:
        case 304:
            return !0;
        default:
            return !1
        }
    }
    ;function Ek(a, b, c, d, e, g, h) {
        var k = Ck && Ck();
        if (!("open"in k))
            return null;
        k.onreadystatechange = function() {
            4 == (k && "readyState"in k ? k.readyState : 0) && b && Cf(b)(k)
        }
        ;
        c = (c || "GET").toUpperCase();
        d = d || "";
        k.open(c, a, !0);
        g && (k.responseType = g);
        h && (k.withCredentials = !0);
        g = "POST" == c;
        if (e = Fk(a, e))
            for (var m in e)
                k.setRequestHeader(m, e[m]),
                "content-type" == m.toLowerCase() && (g = !1);
        g && k.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        k.send(d);
        return k
    }
    function Fk(a, b) {
        b = b || {};
        var c;
        if (c = zf("PAGE_CL"))
            if (c = zf("PAGE_BUILD_TIMESTAMP")) {
                var d;
                d || (d = window.location.href);
                c = se(a)[1] || null;
                var e = zk(a);
                c && e ? (c = d,
                d = se(a),
                c = se(c),
                d = d[3] == c[3] && d[1] == c[1] && d[4] == c[4]) : d = e ? zk(d) == e && (Number(se(d)[4] || null) || null) == (Number(se(a)[4] || null) || null) : !0;
                c = d || Gk(a)
            }
        c && (b["X-YouTube-Page-CL"] = zf("PAGE_CL"),
        b["X-YouTube-Page-Timestamp"] = zf("PAGE_BUILD_TIMESTAMP"));
        return b
    }
    function Gk(a) {
        var b = ["X-YouTube-Page-CL", "X-YouTube-Page-Timestamp"]
          , c = zf("CORS_HEADER_WHITELIST") || {};
        a = zk(a);
        if (!a)
            return !0;
        var d = c[a];
        return d ? Ta(b, function(a) {
            return y(d, a)
        }) : !1
    }
    function Hk(a, b) {
        var c = b.format || "JSON";
        b.$y && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
        var d = b.xf;
        d && (a = Bk(a, d));
        var e = b.Yw || "";
        (d = b.Ze) && r(e) && (e = vk(e),
        $b(e, d),
        e = xk(e));
        var g = !1, h, k = Ek(a, function(a) {
            if (!g) {
                g = !0;
                h && M(h);
                var d = Dk(a)
                  , e = null;
                if (d || 400 <= a.status && 500 > a.status)
                    e = Ik(c, a);
                if (d)
                    t: {
                        switch (c) {
                        case "XML":
                            d = 0 == parseInt(e && e.return_code, 10);
                            break t;
                        case "RAW":
                            d = !0;
                            break t
                        }
                        d = !!e
                    }
                var e = e || {}
                  , k = b.O || l;
                d ? b.onSuccess && b.onSuccess.call(k, a, e) : b.onError && b.onError.call(k, a, e);
                b.Rc && b.Rc.call(k, a, e)
            }
        }, b.method, e, b.headers, b.responseType, b.withCredentials);
        b.Il && 0 < b.timeout && (h = L(function() {
            g || (g = !0,
            k.abort(),
            M(h),
            b.Il.call(b.O || l, k))
        }, b.timeout));
        return k
    }
    function Ik(a, b) {
        var c = null;
        switch (a) {
        case "JSON":
            var d = b.responseText
              , e = b.getResponseHeader("Content-Type") || "";
            d && 0 <= e.indexOf("json") && (c = tb(d));
            break;
        case "XML":
            if (d = (d = b.responseXML) ? Jk(d) : null)
                c = {},
                x(d.getElementsByTagName("*"), function(a) {
                    c[a.tagName] = Kk(a)
                })
        }
        return c
    }
    function Jk(a) {
        return a ? (a = ("responseXML"in a ? a.responseXML : a).getElementsByTagName("root")) && 0 < a.length ? a[0] : null : null
    }
    function Kk(a) {
        var b = "";
        x(a.childNodes, function(a) {
            b += a.nodeValue
        });
        return b
    }
    var Lk = {
        html5_ajax: "action_get_html5_token",
        watch_actions_ajax: "action_get_watch_actions_token",
        addto_ajax: "action_get_wl_token"
    }
      , Mk = {
        html5_ajax: "html5_ajax_token",
        watch_actions_ajax: "watch_actions_ajax_token",
        addto_ajax: "addto_ajax_token"
    };
    function Nk(a, b, c, d, e) {
        if (Bf(a))
            d && window.setTimeout(d, 0);
        else {
            var g = Ak() + "/token_ajax"
              , h = {};
            b && (h.az = b);
            c && (h.bz = c);
            h[Lk[a]] = 1;
            Hk(g, {
                format: "RAW",
                method: "GET",
                xf: h,
                Rc: function(b) {
                    var c = vk(b.responseText)
                      , g = c[Mk[a]];
                    g ? (Af(a, g),
                    d && d()) : e && e(b, c)
                }
            })
        }
    }
    ;function Ok(a) {
        a = a.split("");
        a = Pk(a, 32);
        a = a.reverse();
        a = a.slice(3);
        a = a.reverse();
        a = a.slice(1);
        a = a.reverse();
        a = Pk(a, 19);
        a = Pk(a, 24);
        a = a.slice(3);
        return a.join("")
    }
    function Pk(a, b) {
        var c = a[0];
        a[0] = a[b % a.length];
        a[b] = c;
        return a
    }
    ;function Qk() {}
    ;var Rk = {
        WB: 160,
        SB: 133,
        UB: 134,
        MB: 135,
        IB: 136,
        EB: 137,
        HB: 264,
        NB: 138,
        CB: 140,
        TB: 142,
        VB: 143,
        PB: 144,
        RB: 222,
        QB: 223,
        JB: 145,
        LB: 224,
        KB: 225,
        FB: 146,
        GB: 226,
        OB: 147,
        DB: 149,
        BB: 261,
        XB: 161,
        IE: 171,
        HE: 172,
        PE: 194,
        ME: 195,
        OE: 220,
        NE: 221,
        LE: 196,
        KE: 197,
        JE: 198,
        VE: 242,
        WE: 243,
        TE: 244,
        SE: 247,
        QE: 248,
        RE: 271,
        UE: 272
    }
      , Sk = {
        160: "h",
        133: "h",
        134: "h",
        135: "h",
        136: "h",
        137: "h",
        264: "h",
        138: "h",
        140: "a",
        161: "H",
        142: "H",
        143: "H",
        144: "H",
        222: "H",
        223: "H",
        145: "H",
        224: "H",
        225: "H",
        146: "H",
        226: "H",
        147: "H",
        149: "A",
        261: "M",
        242: "9",
        243: "9",
        244: "9",
        247: "9",
        248: "9",
        271: "9",
        272: "9",
        171: "v",
        194: "*",
        195: "*",
        220: "*",
        221: "*",
        196: "*",
        197: "*",
        198: "V"
    };
    function Tk(a, b, c, d, e, g) {
        this.b = a;
        this.j = 0 <= b.indexOf("/mp4") ? 1 : 0 <= b.indexOf("/webm") ? 2 : 0 <= b.indexOf("/x-flv") ? 3 : 0;
        this.Sc = b;
        this.a = g || 0;
        this.i = c || null;
        this.g = d || null;
        this.k = e || null;
        this.o = Sk[a] || ""
    }
    function Uk(a) {
        return 2 == a.j
    }
    function Vk(a) {
        return 0 <= a.indexOf("opus") || 0 <= a.indexOf("vorbis") || 0 <= a.indexOf("mp4a")
    }
    function Wk(a) {
        return 0 <= a.indexOf("vp9") || 0 <= a.indexOf("vp8") || 0 <= a.indexOf("avc1")
    }
    ;var Ub = {
        Ay: "auto",
        nE: "tiny",
        yC: "light",
        SMALL: "small",
        BD: "medium",
        LARGE: "large",
        cC: "hd720",
        aC: "hd1080",
        bC: "hd1440",
        kC: "highres",
        UNKNOWN: "unknown"
    }
      , Xk = {
        auto: 0,
        tiny: 144,
        light: 144,
        small: 240,
        medium: 360,
        large: 480,
        hd720: 720,
        hd1080: 1080,
        highres: 8192
    };
    function Yk(a, b, c, d) {
        this.width = a;
        this.height = b;
        if (!d)
            t: {
                for (d = 2; d < $k.length; d++) {
                    var e = al[$k[d]];
                    if (a > e[0] && b >= e[1] || a >= e[0] && b > e[1]) {
                        d = $k[d - 1];
                        break t
                    }
                }
                d = "tiny"
            }
        this.a = d;
        this.b = c || 0
    }
    var $k = "auto highres hd1440 hd1080 hd720 large medium small tiny".split(" ")
      , al = {
        auto: [0, 0],
        tiny: [256, 144],
        light: [426, 240],
        small: [426, 240],
        medium: [640, 360],
        large: [854, 480],
        hd720: [1280, 720],
        hd1080: [1920, 1080],
        hd1440: [2560, 1440],
        highres: [3840, 2160]
    };
    function bl(a, b) {
        this.start = a;
        this.end = b;
        this.length = b - a + 1
    }
    function cl(a) {
        a = a.split("-");
        return 2 == a.length && (a = new bl(parseInt(a[0], 10),parseInt(a[1], 10)),
        !isNaN(a.start) && !isNaN(a.end) && !isNaN(a.length) && 0 < a.length) ? a : null
    }
    function dl(a, b) {
        return new bl(a,a + b - 1)
    }
    bl.prototype.toString = function() {
        return this.start + "-" + (null == this.end ? "" : this.end)
    }
    ;
    var el = "corp.google.com googleplex.com youtube.com youtube-nocookie.com prod.google.com sandbox.google.com docs.google.com drive.google.com mail.google.com plus.google.com play.google.com googlevideo.com".split(" ")
      , fl = ["2mdn.net", "gstatic.com/doubleclick/studio/innovation/ytplayer"]
      , gl = "www.google.com/aclk www.google.com/pagead/conversion googleadservices.com/aclk googleadservices.com/pagead/conversion googleads.g.doubleclick.net/aclk googleads.g.doubleclick.net/pagead/conversion".split(" ")
      , hl = "";
    function il(a) {
        return a && a == hl ? !0 : jl(a, el) ? (hl = a,
        !0) : !1
    }
    function kl() {
        return -1 != document.location.toString().indexOf("/embed/")
    }
    function jl(a, b) {
        return RegExp("^https?://([a-z0-9-]{1,63}\\.)*(" + b.join("|").replace(/\./g, ".") + ")(:[0-9]+)?([/?#]|$)", "i").test(a)
    }
    function ll(a) {
        a = new Ge(a);
        He(a, document.location.protocol);
        Ie(a, document.location.hostname);
        document.location.port && Je(a, document.location.port);
        return a.toString()
    }
    ;function ml(a, b) {
        var c = se(a)
          , d = c[6];
        d && (d = d.replace(RegExp("(^|&)" + b + "=[^&]*&?"), "$1"),
        "&" == d.charAt(d.length - 1) && (d = d.substring(0, d.length - 1)));
        var e = c[5];
        if (e) {
            e = e.split("/");
            e[e.length - 1] || e.pop();
            for (var g = e.length - 2; 0 < g; g -= 2)
                if (e[g] == b) {
                    e.splice(g, 2);
                    break
                }
            e = e.join("/")
        }
        return qe(c[1], c[2], c[3], c[4], e, d, c[7])
    }
    function nl(a, b, c) {
        a = se(a);
        var d = !1
          , e = a[6];
        if (e) {
            var g = RegExp("((^|&)" + b + "=)[^&]*");
            0 <= e.search(g) && (e = e.replace(g, "$1" + c),
            d = !0)
        }
        if (g = a[5]) {
            g = g.split("/");
            g[g.length - 1] || g.pop();
            for (var h = g.length - 2; 0 < h; h -= 2)
                if (g[h] == b) {
                    g[h + 1] = c;
                    d = !0;
                    break
                }
            g = g.join("/")
        }
        d || (e = e ? e + "&" + b + "=" + c : b + "=" + c);
        return qe(a[1], a[2], a[3], a[4], g, e, a[7])
    }
    function ol(a, b) {
        var c = a, d;
        for (d in b)
            null != b[d] && (c = nl(c, d, b[d]));
        return c
    }
    ;function pl(a, b, c, d, e) {
        this.duration = c;
        this.endTime = b + c;
        this.Jb = a;
        this.sourceURL = d;
        this.startTime = b;
        this.T = e || null
    }
    ;function ql() {
        this.ya = []
    }
    f = ql.prototype;
    f.xl = function(a) {
        return (a = rl(this, a)) ? a.duration : 0
    }
    ;
    f.wc = function() {
        return this.ya[this.ya.length - 1].Jb
    }
    ;
    f.Cg = function() {
        return this.ya[this.ya.length - 1].endTime
    }
    ;
    f.Ki = function() {
        return 0
    }
    ;
    f.Qh = function(a) {
        return (a = sl(this, a)) ? a.Jb : -1
    }
    ;
    f.pp = function(a) {
        return rl(this, a).sourceURL
    }
    ;
    f.ug = function(a) {
        return (a = rl(this, a)) ? a.startTime : 0
    }
    ;
    f.Hl = function() {
        return 0 < this.ya.length
    }
    ;
    function rl(a, b) {
        var c = jb(a.ya, new pl(b,0,0,""), function(a, b) {
            return a.Jb - b.Jb
        });
        return 0 <= c ? a.ya[c] : null
    }
    function sl(a, b) {
        var c = mb(a.ya, function(a) {
            return a.startTime <= b && b < a.endTime ? 0 : a.startTime > b ? -1 : 1
        });
        return 0 <= c ? a.ya[c] : null
    }
    f.update = function(a) {
        this.ya = a
    }
    ;
    function tl(a) {
        this.a = a;
        this.b = 0;
        this.g = -1
    }
    var ul = 0;
    function vl(a, b) {
        a.a = ol(a.a, b)
    }
    ;function wl(a, b) {
        this.index = null;
        this.info = b;
        this.a = null;
        this.g = !1;
        this.j = new tl(a)
    }
    f = wl.prototype;
    f.ql = function() {
        return !1
    }
    ;
    f.yb = function() {
        return !1
    }
    ;
    f.tf = function() {
        return !1
    }
    ;
    f.gl = function() {
        return []
    }
    ;
    f.Ge = function() {
        return null
    }
    ;
    f.uf = function() {
        return null
    }
    ;
    f.pl = function() {}
    ;
    f.vp = function(a) {
        return [a]
    }
    ;
    f.ai = function(a) {
        return [a]
    }
    ;
    function xl(a, b, c, d, e, g, h, k, m) {
        this.a = b;
        this.T = c;
        this.type = a;
        this.Jb = 0 <= d ? d : -1;
        this.startTime = e || 0;
        this.duration = g || 0;
        this.g = h || 0;
        this.b = 0 <= k ? k : this.T ? this.T.length : NaN;
        this.o = !!m;
        this.T ? (this.k = this.g + this.b == this.T.length,
        this.j = this.startTime + this.duration * this.g / this.T.length,
        this.C = this.duration * this.b / this.T.length) : (this.k = 0 != this.b,
        this.j = this.startTime,
        this.C = this.duration);
        this.i = this.j + this.C
    }
    function yl(a) {
        return 1 == a.type || 2 == a.type
    }
    function zl(a, b) {
        return a.a == b.a && a.T.start + a.g + a.b == b.T.start + b.g
    }
    function Al(a) {
        Ma(1 == a.length || Ta(a, function(a) {
            return !!a.T
        }));
        for (var b = 1; b < a.length; b++)
            ;
        b = a[a.length - 1];
        return new bl(a[0].T.start + a[0].g,b.T.start + b.g + b.b - 1)
    }
    function Bl(a) {
        var b = "i=" + a.a.info.b;
        a.T && (b = b + ",r=" + (a.T.start + a.g) + "-" + (a.T.start + a.g + a.b - 1));
        return b = b + ",t=" + a.j.toFixed(1) + "," + (a.j + a.C).toFixed(1)
    }
    ;function Cl(a, b) {
        this.b = a[0].a.j;
        this.g = b || "";
        this.a = a;
        this.T = this.a[0].T && 0 < this.a[0].b ? Al(this.a) : null
    }
    ;function Dl(a, b, c, d, e) {
        wl.call(this, a, b);
        this.index = e || new ql;
        this.b = d;
        this.i = c
    }
    v(Dl, wl);
    f = Dl.prototype;
    f.gl = function() {
        var a = new xl(1,this,this.b);
        return [new Cl([a],this.i)]
    }
    ;
    f.Ge = function(a, b) {
        this.tf(a);
        return El(this, a.k ? a.Jb + 1 : a.Jb, b)
    }
    ;
    f.uf = function(a, b, c) {
        a = this.index.Qh(a);
        c && (a = Math.min(this.index.wc(), a + 1));
        return El(this, a, b)
    }
    ;
    f.pl = function(a) {
        this.a = new Uint8Array(Fl(a).buffer)
    }
    ;
    f.ql = function() {
        return !1
    }
    ;
    f.yb = function() {
        return !(null === this.a || !this.index.Hl())
    }
    ;
    f.tf = function(a) {
        return this.index.wc() > a.Jb
    }
    ;
    f.update = function(a) {
        this.index.update(a);
        return !0
    }
    ;
    function El(a, b, c) {
        var d = a.index.pp(b)
          , e = a.index.ug(b)
          , g = a.index.xl(b)
          , h = b == a.index.wc() + 1
          , k = a.info.a * g;
        0 == c && (g = k = 0);
        a = new xl(3,a,null,b,e,g,0,k,h);
        return new Cl([a],d)
    }
    ;function Gl(a, b, c, d) {
        this.info = a;
        this.buffer = b;
        this.T = c;
        this.a = d
    }
    function Fl(a) {
        return a.T ? new DataView(a.buffer,a.T.start,a.T.length) : new DataView(a.buffer)
    }
    function Hl(a) {
        if (a.info.b != a.T.length)
            return !1;
        if (1 == a.info.a.info.j) {
            if (8 > a.info.b || 4 == a.info.type)
                return !0;
            var b = Fl(a)
              , c = b.getUint32(0, !1)
              , b = b.getUint32(4, !1);
            if (2 == a.info.type)
                return c == a.info.b && 1936286840 == b;
            if (3 == a.info.type && 0 == a.info.g)
                return 1836019558 == b || 1936286840 == b
        }
        return !0
    }
    ;function Il() {
        this.Y = 0;
        this.a = new Float64Array(128);
        this.b = new Float64Array(128);
        this.i = 1;
        this.g = !1
    }
    f = Il.prototype;
    f.Ki = function(a) {
        return this.a[a]
    }
    ;
    f.ug = function(a) {
        return this.b[a] / this.i
    }
    ;
    f.xl = function(a) {
        return a + 1 < this.Y || this.g ? (this.b[a + 1] - this.b[a]) / this.i : -1
    }
    ;
    f.wc = function() {
        return this.Y - 1
    }
    ;
    f.Cg = function() {
        return this.g ? this.b[this.Y] / this.i : NaN
    }
    ;
    f.pp = function() {
        return ""
    }
    ;
    f.Qh = function(a) {
        a = jb(this.b.subarray(0, this.Y), a * this.i);
        return 0 <= a ? a : Math.max(0, -a - 2)
    }
    ;
    f.Hl = function() {
        return 0 <= this.wc()
    }
    ;
    f.resize = function(a) {
        a += 2;
        var b = this.a;
        this.a = new Float64Array(a + 1);
        var c = this.b;
        this.b = new Float64Array(a + 1);
        for (a = 0; a < this.Y + 1; a++)
            this.a[a] = b[a],
            this.b[a] = c[a]
    }
    ;
    function Jl(a) {
        a.a.length < a.Y + 1 && a.resize(2 * a.a.length)
    }
    function Kl(a, b) {
        this.b = a;
        this.a = 0;
        this.g = b || 0
    }
    function Ll(a) {
        for (var b = Ml(a, !1); 236 == b; )
            Nl(a),
            b = Ml(a, !1);
        return b
    }
    function Ol(a) {
        var b = Ml(a, !0)
          , c = a.b.byteOffset + a.a
          , d = Math.min(b, a.b.buffer.byteLength - c)
          , c = new DataView(a.b.buffer,c,d)
          , c = new Kl(c,a.g + a.a);
        a.a += b;
        return c
    }
    function Pl(a) {
        for (var b = Ml(a, !0), c = Ql(a), d = 1; d < b; d++)
            c = (c << 8) + Ql(a);
        return c
    }
    function Nl(a) {
        var b = Ml(a, !0);
        a.a += b
    }
    function Ml(a, b) {
        var c = Ql(a);
        if (1 == c) {
            for (var d = c = 0; 7 > d; d++)
                c = 256 * c + Ql(a);
            return c
        }
        for (var e = 128, d = 0; 6 > d && e > c; d++)
            c = 256 * c + Ql(a),
            e *= 128;
        return b ? c - e : c
    }
    function Ql(a) {
        return a.b.getUint8(a.a++)
    }
    ;function Rl(a, b, c, d) {
        wl.call(this, a, b);
        this.o = c;
        this.k = d;
        this.i = null;
        this.index = new Il;
        b = parseInt;
        c = a.search(De);
        d = Ce(a, 0, "clen", c);
        if (0 > d)
            a = null;
        else {
            var e = a.indexOf("&", d);
            if (0 > e || e > c)
                e = c;
            d += 5;
            a = za(a.substr(d, e - d))
        }
        this.b = b(a, 10)
    }
    v(Rl, wl);
    f = Rl.prototype;
    f.yb = function() {
        return !(!this.a || !this.index.Hl())
    }
    ;
    f.gl = function(a) {
        var b = new xl(1,this,this.o)
          , c = new xl(2,this,this.k)
          , d = []
          , e = [b];
        zl(b, c) ? e.push(c) : (d.push(new Cl([c])),
        a = 0);
        isNaN(this.b) ? a = 0 : a > this.b && (a = this.b);
        b = e[e.length - 1];
        c = b.T.end - e[0].T.start + 1;
        a > c && (a = dl(b.T.end + 1, a - c),
        e.push(new xl(4,this,a)));
        d.push(new Cl(e));
        return d
    }
    ;
    f.pl = function(a) {
        if (1 == a.info.type) {
            if (this.a)
                return;
            this.a = new Uint8Array(a.buffer,a.T.start,a.T.length)
        } else if (2 == a.info.type) {
            if (this.i || 0 <= this.index.wc())
                return;
            if (1 == this.info.j) {
                var b = this.index
                  , c = Fl(a)
                  , d = a.info.T.start;
                a = 0;
                var e = c.getUint32(0, !1)
                  , g = c.getUint8(a + 8);
                a += 12;
                var h = c.getUint32(a + 4, !1);
                b.i = h;
                a += 8;
                0 == g ? (g = c.getUint32(a, !1),
                h = c.getUint32(a + 4, !1),
                a += 8) : (g = (c.getUint32(a, !1) << 32) + c.getUint32(a + 4, !1),
                h = (c.getUint32(a + 8, !1) << 32) + c.getUint32(a + 12, !1),
                a += 16);
                b.a[0] = h + (e + d);
                b.b[0] = g;
                b.g = !0;
                d = c.getUint16(a + 2, !1);
                a += 4;
                for (e = 0; e < d; e++) {
                    var k = c.getUint32(a, !1)
                      , h = c.getUint32(a + 4, !1);
                    a += 12;
                    g = b;
                    g.Y++;
                    Jl(g);
                    g.a[g.Y] = g.a[g.Y - 1] + k;
                    g.b[g.Y] = g.b[g.Y - 1] + h
                }
            } else
                this.i = Fl(a)
        }
        if (Uk(this.info) && this.a && this.i) {
            c = new DataView(this.a.buffer,this.a.byteOffset,this.a.byteLength);
            b = this.index;
            g = this.i;
            c = new Kl(c);
            if (440786851 == Ll(c) && (Nl(c),
            408125543 == Ll(c))) {
                d = c;
                e = d.a;
                a = Ml(d, !0);
                d.a = e;
                for (var c = Ol(c), d = c.g + c.a, m = Ll(c); 357149030 != m; )
                    Nl(c),
                    m = Ll(c);
                c = Ol(c);
                h = 1E6;
                k = 1E9;
                for (e = 0; !(c.a >= c.b.byteLength); )
                    if (m = Ll(c),
                    2807729 == m)
                        h = Pl(c);
                    else if (2807730 == m)
                        k = Pl(c);
                    else if (17545 == m) {
                        var e = c
                          , m = Ml(e, !0)
                          , p = 0;
                        4 == m ? p = e.b.getFloat32(e.a) : 8 == m && (p = e.b.getFloat64(e.a));
                        e.a += m;
                        e = p
                    } else
                        Nl(c);
                b.i = k / h;
                c = new Kl(g);
                if (475249515 == Ll(c)) {
                    for (c = Ol(c); !(c.a >= c.b.byteLength); )
                        if (m = Ll(c),
                        187 == m) {
                            g = Ol(c);
                            h = d;
                            if (179 != Ll(g))
                                k = null;
                            else if (k = Pl(g),
                            183 != Ll(g))
                                k = null;
                            else {
                                g = Ol(g);
                                for (m = h; !(g.a >= g.b.byteLength); )
                                    241 == Ll(g) ? m = Pl(g) + h : Nl(g);
                                k = [m, k]
                            }
                            g = b;
                            h = k[0];
                            k = k[1];
                            Jl(g);
                            g.a[g.Y] = h;
                            g.b[g.Y] = k;
                            g.Y++
                        } else
                            Nl(c);
                    c = a + d;
                    a = e;
                    Jl(b);
                    b.g = !0;
                    b.b[b.Y] = a;
                    b.a[b.Y] = c
                }
            }
            this.i = null
        }
    }
    ;
    function Sl(a, b, c, d) {
        for (var e = []; b <= a.index.wc(); b++) {
            var g;
            g = a.index;
            var h = b;
            g = dl(g.Ki(h), h + 1 < g.Y || g.g ? g.a[h + 1] - g.a[h] : -1);
            var h = a.index.ug(b)
              , k = a.index.xl(b)
              , m = Math.max(0, c - g.start)
              , p = Math.min(g.end + 1, c + d) - (g.start + m);
            e.push(new xl(3,a,g,b,h,k,m,p,b == a.index.wc() && m + p == g.length));
            if (g.start + m + p >= c + d)
                break
        }
        return new Cl(e)
    }
    f.vp = function(a) {
        for (var b = this.ai(a.info), c = [], d = a.a, e = 0; e < b.length; e++) {
            var g = dl(b[e].T.start + b[e].g - a.info.T.start + a.T.start, b[e].b);
            c.push(new Gl(b[e],a.buffer,g,d));
            d = !1
        }
        return c
    }
    ;
    f.ai = function(a) {
        for (var b = 0; b < this.index.wc() && a.T.start >= this.index.Ki(b + 1); )
            b++;
        return Sl(this, b, a.T.start, a.T.length).a
    }
    ;
    f.tf = function(a) {
        return this.yb() ? !0 : isNaN(this.b) ? !1 : a.T.end + 1 < this.b
    }
    ;
    f.Ge = function(a, b) {
        this.tf(a);
        if (!this.yb()) {
            var c = dl(a.T.end + 1, b);
            c.end + 1 > this.b && (c = new bl(c.start,this.b - 1));
            c = [new xl(4,a.a,c)];
            return new Cl(c)
        }
        4 == a.type && (c = this.ai(a),
        a = c[c.length - 1]);
        var c = 0
          , d = a.T.start + a.g + a.b;
        3 == a.type && (c = a.Jb,
        d == a.T.end + 1 && (c += 1));
        return Sl(this, c, d, b)
    }
    ;
    f.uf = function(a, b, c) {
        a = this.index.Qh(a);
        c && (a = Math.min(this.index.wc(), a + 1));
        return Sl(this, a, this.index.Ki(a), b)
    }
    ;
    f.ql = function() {
        var a;
        if (a = this.yb())
            if (a = !isNaN(this.b))
                a = this.index,
                a = (a.g ? a.a[a.Y] : -1) != this.b;
        return a
    }
    ;
    function Tl() {
        this.duration = 0;
        this.b = !1;
        this.k = u();
        this.o = Infinity;
        this.a = {};
        this.j = "";
        this.i = !1;
        this.g = void 0
    }
    function Ul(a) {
        return Mb(a.a, function(a) {
            return !!a.info.k
        }, a)
    }
    var Vl = /PT(([0-9]*)H)?(([0-9]*)M)?(([0-9.]*)S)?/;
    function Wl(a) {
        var b = new Tl;
        x(a, function(a) {
            var d = a.type
              , e = a.itag
              , g = null;
            Wk(d) && (g = a.size.split("x"),
            g = new Yk(parseInt(g[0], 10),parseInt(g[1], 10)));
            var h = null;
            Vk(d) && (h = new Qk);
            d = new Tk(e,d,h,g,null,parseInt(a.bitrate, 10) / 8);
            g = cl(a.init);
            h = cl(a.index);
            (a = Xl(a.url, d, a.s)) && (b.a[e] = new Rl(a,d,g,h))
        });
        return b
    }
    function Yl(a) {
        if (!a)
            return 0;
        var b = Vl.exec(a);
        return b ? 3600 * parseFloat(b[2] || 0) + 60 * parseFloat(b[4] || 0) + parseFloat(b[6] || 0) : parseFloat(a)
    }
    function Zl(a, b) {
        for (var c = a; c; c = c.parentNode)
            if (c.attributes) {
                var d = c.attributes[b];
                if (d)
                    return d.value
            }
        return ""
    }
    function $l(a, b) {
        for (var c = a; c; c = c.parentNode) {
            var d = c.getElementsByTagName(b);
            if (0 < d.length)
                return d[0]
        }
        return null
    }
    function Xl(a, b, c) {
        if (!il(a))
            return "";
        b = {
            alr: "yes",
            mime: encodeURIComponent(b.Sc.split(";")[0]),
            ratebypass: "yes"
        };
        c && (b.signature = Ok(c));
        return ol(a, b)
    }
    function am(a) {
        var b = Zl(a, "id")
          , c = Zl(a, "mimeType")
          , d = Zl(a, "codecs")
          , c = d ? c + '; codecs="' + d + '"' : c
          , d = parseInt(Zl(a, "bandwidth"), 10) / 8
          , e = null;
        Wk(c) && (e = new Yk(parseInt(Zl(a, "width"), 10),parseInt(Zl(a, "height"), 10)));
        var g = null;
        Vk(c) && (g = new Qk);
        var h = null;
        if (a = $l(a, "ContentProtection"))
            if ((h = a.attributes.schemeIdUri) && "http://youtube.com/drm/2012/10/10" == h.textContent)
                for (h = {},
                a = a.firstChild; null != a; a = a.nextSibling)
                    "yt:SystemURL" == a.nodeName && (h[a.attributes.type.textContent] = a.textContent.trim());
            else
                h = null;
        return new Tk(b,c,g,e,h,d)
    }
    function bm(a, b, c, d) {
        a.g = d;
        a.j = b;
        a.i = !0;
        b = {
            format: "RAW",
            method: "GET",
            onError: a.g,
            onSuccess: t(a.C, a, c || null)
        };
        Hk(a.j, b)
    }
    Tl.prototype.C = function(a, b) {
        if (200 <= b.status && 400 > b.status) {
            var c = b.responseText
              , d = (new DOMParser).parseFromString(c, "text/xml").getElementsByTagName("MPD")[0]
              , c = d.getElementsByTagName("Representation");
            if ("dynamic" == d.getAttribute("type"))
                for (this.b = !0,
                this.o = 1E3 * Yl(Zl(d, "minimumUpdatePeriod")),
                d = 0; d < c.length; d++) {
                    var e = am(c[d]);
                    if (!this.a[e.b]) {
                        var g = Xl($l(c[d], "BaseURL").textContent, e)
                          , h = $l(c[d], "Initialization")
                          , k = Zl(h, "sourceURL")
                          , h = cl(Zl(h, "range"));
                        this.a[e.b] = new Dl(g,e,k,h)
                    }
                    for (var h = $l(c[d], "SegmentList"), m = $l(h, "SegmentTimeline"), g = m.getElementsByTagName("S"), k = h.getElementsByTagName("SegmentURL"), h = (h = Zl(h, "start")) ? Yl(h) : 0, p = parseInt(Zl(m, "startNumber"), 10) || 0, m = parseInt(Zl(m, "timescale"), 10) || 1, s = [], w = 0; w < k.length; w++) {
                        var z;
                        z = p + w;
                        var X = h
                          , J = m
                          , U = k[w]
                          , J = parseFloat(g[w].getAttribute("d")) / J
                          , Nd = U.getAttribute("media")
                          , Zk = null
                          , U = U.getAttribute("mediaRange");
                        null != U && (0 <= parseInt(U.split("-")[1], 10) ? Zk = cl(U) : Nd = Nd + "?range=" + U);
                        z = new pl(z,X,J,Nd,Zk);
                        s.push(z);
                        h += z.duration
                    }
                    this.a[e.b].update(s)
                }
            else
                i: for (this.duration = Yl(Zl(d, "mediaPresentationDuration")),
                d = 0; d < c.length; d++) {
                    k = c[d];
                    e = am(k);
                    g = Xl($l(k, "BaseURL").textContent, e);
                    h = $l(k, "SegmentBase");
                    k = cl(h.attributes.indexRange.value);
                    h = cl(h.getElementsByTagName("Initialization")[0].attributes.range.value);
                    e = new Rl(g,e,h,k);
                    if (!e)
                        break i;
                    this.a[e.info.b] = e
                }
            this.k = u();
            this.i = !1;
            a && a(this)
        } else
            this.g && this.g(b)
    }
    ;
    function cm(a, b) {
        this.b = a;
        this.a = b || null
    }
    function Fh(a) {
        a = Ra(a.b, function(a) {
            return a.g.a
        });
        ib(a);
        return a.concat(["auto"])
    }
    ;function dm(a, b, c) {
        this.b = a || 0;
        this.a = b || 0;
        this.g = c
    }
    dm.prototype.equals = function(a) {
        return this.b == a.b && this.a == a.a && this.g == a.g
    }
    ;
    function em(a, b, c) {
        return new dm(Xk[a] || 0,Xk[b] || 0,c)
    }
    var fm = em("auto", "large", !1)
      , gm = em("auto", "auto", !1);
    function hm(a) {
        var b = Xk.auto;
        return a.b == b && a.a == b
    }
    function im(a, b) {
        if (b.g && hm(b))
            return gm;
        if (b.g || hm(a))
            return b;
        if (a.g || hm(b))
            return a;
        var c = a.b && b.b ? Math.max(a.b, b.b) : a.b || b.b
          , d = a.a && b.a ? Math.min(a.a, b.a) : a.a || b.a
          , c = Math.min(c, d);
        return c == a.b && d == a.a ? a : new dm(c,d,!1)
    }
    function jm(a) {
        var b = a.a || a.b
          , c = Tb(function() {
            return Xk[c] == b
        });
        return c || "auto"
    }
    ;function km(a, b, c, d, e, g, h, k, m) {
        this.i = {};
        this.o = a;
        this.u = b;
        this.b = c;
        this.a = d;
        this.g = e;
        this.C = g;
        this.j = h;
        this.k = k;
        this.A = m
    }
    function lm(a, b) {
        var c = a.C
          , c = c.replace("$N", a.j)
          , c = c.replace("$L", a.A.toString())
          , c = c.replace("$M", b.toString());
        a.k && (c = yk(c, {
            sigh: a.k
        }));
        return c
    }
    function mm(a, b) {
        var c = Math.floor(b / (a.a * a.g))
          , d = a.a * a.g
          , e = b % d
          , g = e % a.a
          , e = Math.floor(e / a.a)
          , h = a.g
          , k = a.b - d * c;
        k < d && (h = Math.ceil(k / a.a));
        return {
            url: lm(a, c),
            Vu: g,
            ti: a.a,
            row: e,
            rows: h,
            mo: a.o * a.a,
            lo: a.u * h
        }
    }
    ;function nm(a) {
        var b = [];
        a = a.split("|");
        for (var c = a[0], d, e, g, h, k, m, p, s, w = 1; w < a.length; w++)
            d = a[w].split("#"),
            e = w - 1,
            g = parseInt(d[0], 10),
            h = parseInt(d[1], 10),
            k = parseInt(d[2], 10),
            m = parseInt(d[3], 10),
            p = parseInt(d[4], 10),
            s = d[6],
            d = d[7],
            b.push(new km(g,h,k,m,p,c,s,d,e));
        this.a = b;
        this.b = {};
        1 < this.a.length && -1 != this.a[0].j.indexOf("default") && this.a.splice(0, 1)
    }
    function om(a, b) {
        var c = a.a[0].b - 1;
        return Bb(Math.round(c * b), 0, c)
    }
    function pm(a, b) {
        var c = a.b[b];
        if (c)
            return c;
        for (var c = a.a.length, d = 0; d < c; d++)
            if (a.a[d].o >= b)
                return a.b[b] = d;
        a.b[b] = c - 1;
        return c - 1
    }
    ;var qm = {
        0: "MONO",
        1: "LEFT_RIGHT",
        2: "RIGHT_LEFT",
        3: "TOP_BOTTOM",
        4: "BOTTOM_TOP"
    };
    var rm = {
        DC: 1,
        EC: 2,
        FC: 3
    };
    var sm;
    var tm = ic()
      , tm = tm.toLowerCase();
    if (-1 != tm.indexOf("android")) {
        var um = tm.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);
        if (um)
            sm = Number(um[1]);
        else {
            var vm = {
                cupcake: 1.5,
                donut: 1.6,
                eclair: 2,
                froyo: 2.2,
                gingerbread: 2.3,
                honeycomb: 3,
                "ice cream sandwich": 4,
                jellybean: 4.1
            }
              , wm = tm.match("(" + Qb(vm).join("|") + ")");
            sm = wm ? vm[wm[0]] : 0
        }
    } else
        sm = void 0;
    var xm, ym;
    function zm() {
        var a = n("yt.player.utils.videoElement_");
        a || (a = document.createElement("video"),
        ba("yt.player.utils.videoElement_", a, void 0));
        return a
    }
    function Am() {
        if (2.2 == sm)
            return !0;
        var a = zm();
        try {
            return !(!a || !a.canPlayType || !a.canPlayType('video/mp4; codecs="avc1.42001E, mp4a.40.2"') && !a.canPlayType('video/webm; codecs="vp8.0, vorbis"'))
        } catch (b) {
            return !1
        }
    }
    function Bm() {
        var a = E("div", {
            "class": "html5-player-css-loaded"
        });
        document.body.appendChild(a);
        var b = "none" == zd(a, "display");
        F(a);
        return b
    }
    ;function Cm() {
        var a;
        if (void 0 == xm && (xm = !1,
        window.crypto && window.crypto.getRandomValues))
            try {
                a = new Uint8Array(1),
                window.crypto.getRandomValues(a),
                xm = !0
            } catch (b) {}
        if (xm) {
            a = Array(16);
            var c = new Uint8Array(16);
            window.crypto.getRandomValues(c);
            for (var d = 0; d < a.length; d++)
                a[d] = c[d]
        } else
            for (a = Array(16),
            c = 0; 16 > c; c++) {
                for (var d = u(), e = 0; e < d % 23; e++)
                    a[c] = Math.random();
                a[c] = Math.floor(256 * Math.random())
            }
        return a
    }
    function Dm() {
        for (var a = Cm(), b = [], c = 0; c < a.length; c++)
            b.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(a[c] & 63));
        return b.join("")
    }
    function Em() {
        return Ra(Cm(), function(a) {
            return (a & 15).toString(16)
        }).join("")
    }
    ;function Fm(a, b, c) {
        b = {
            cpn: b
        };
        c && (b.ibw = "1369843");
        return {
            url: yk(a, b),
            type: "application/x-mpegURL",
            quality: "auto",
            itag: "93"
        }
    }
    ;function V(a, b) {
        return void 0 == b ? a : "1" == b ? !0 : !1
    }
    function Gm(a, b, c) {
        for (var d in c)
            if (c[d] == b)
                return c[d];
        return a
    }
    function Hm(a, b) {
        return void 0 == b ? a : Number(b)
    }
    function W(a, b) {
        return void 0 == b ? a : b.toString()
    }
    function Im(a, b) {
        var c = W(a, b);
        c && (c = ll(c));
        return c
    }
    function Jm(a) {
        if (!a)
            return 0;
        a = a.split(":");
        var b = parseFloat(a[0])
          , c = 1;
        2 == a.length && (c = parseFloat(a[1]));
        return isNaN(b) || isNaN(c) || 0 == c ? 0 : b / c
    }
    function Km(a, b) {
        var c = Xk.auto
          , d = Xk.medium
          , e = Xk[b];
        return null === e ? a : e >= d ? new dm(e,c,!1) : new dm(c,e,!1)
    }
    ;function Lm(a, b) {
        var c;
        var d = "followon_" + a;
        if (b.baseUrl && b.uid) {
            var e = b.rmktEnabled;
            c = b.focEnabled && !b.isAd;
            if (e || c) {
                d = {
                    label: c ? d : "default"
                };
                if (e) {
                    e = {
                        utuid: b.uid,
                        type: a
                    };
                    b.vid && (e.utvid = b.vid);
                    b.eventLabel && (e.el = b.eventLabel);
                    b.playerStyle && (e.ps = b.playerStyle);
                    b.feature && (e.feature = b.feature);
                    b.ppe && (e.ppe = b.ppe);
                    var g, h = [];
                    for (g in e)
                        h.push(encodeURIComponent(g) + "=" + encodeURIComponent(e[g]));
                    g = h.join(";");
                    d.data = g
                }
                c && "view" == a && b.vid && b.uid && (b.oeid || b.ieid) && (b.oeid && (d.oeid = b.oeid),
                b.ieid && (d.ieid = b.ieid),
                d.evid = b.vid);
                c && (d.foc_id = b.uid);
                c = yk(b.baseUrl, d)
            } else
                c = null
        } else
            c = null;
        c && ua(c)
    }
    function Mm(a) {
        var b = zf("CONVERSION_CONFIG_DICT");
        if (b) {
            if (r(void 0) && null != b.uid)
                return;
            Lm(a, b)
        }
    }
    ;var Nm = {
        zC: 0,
        uB: 1,
        oC: 2
    };
    function Om(a, b, c) {
        c = c || {};
        Nk("watch_actions_ajax", c.Qa, c.Za, t(Pm, l, a, b, c), c.onError)
    }
    function Pm(a, b, c) {
        var d = {};
        0 === b ? d.action_like_video = 1 : 1 === b ? d.action_dislike_video = 1 : d.action_indifferent_video = 1;
        d.video_id = a;
        d.plid = c.Ya;
        c.Pa && (d.list = c.Pa);
        c.Qa && (d.authuser = c.Qa);
        c.Za && (d.pageid = c.Za);
        a = {
            screen: xk({
                h: screen.height,
                w: screen.width,
                d: screen.colorDepth
            }),
            session_token: Bf("watch_actions_ajax")
        };
        c.Qx && (a.station_id = c.Qx);
        Hk("/watch_actions_ajax", {
            format: "XML",
            method: "POST",
            xf: d,
            Ze: a,
            onSuccess: c.onSuccess,
            onError: c.onError,
            Rc: c.Rc
        });
        0 === b ? Mm("like") : 1 === b && Mm("dislike")
    }
    ;function Qm(a, b) {
        this.a = a;
        this.b = b
    }
    Qm.prototype.clone = function() {
        return new Qm(this.a,this.b)
    }
    ;
    function Rm(a) {
        this.a = [];
        if (a)
            t: {
                var b, c;
                if (a instanceof Rm) {
                    if (b = a.mc(),
                    c = a.gc(),
                    0 >= a.Id()) {
                        a = this.a;
                        for (var d = 0; d < b.length; d++)
                            a.push(new Qm(b[d],c[d]));
                        break t
                    }
                } else
                    b = Qb(a),
                    c = Pb(a);
                for (d = 0; d < b.length; d++)
                    Sm(this, b[d], c[d])
            }
    }
    function Sm(a, b, c) {
        var d = a.a;
        d.push(new Qm(b,c));
        b = d.length - 1;
        a = a.a;
        for (c = a[b]; 0 < b; )
            if (d = b - 1 >> 1,
            a[d].a > c.a)
                a[b] = a[d],
                b = d;
            else
                break;
        a[b] = c
    }
    f = Rm.prototype;
    f.remove = function() {
        var a = this.a
          , b = a.length
          , c = a[0];
        if (!(0 >= b)) {
            if (1 == b)
                Za(a);
            else {
                a[0] = a.pop();
                for (var a = 0, b = this.a, d = b.length, e = b[a]; a < d >> 1; ) {
                    var g = 2 * a + 1
                      , h = 2 * a + 2
                      , g = h < d && b[h].a < b[g].a ? h : g;
                    if (b[g].a > e.a)
                        break;
                    b[a] = b[g];
                    a = g
                }
                b[a] = e
            }
            return c.b
        }
    }
    ;
    f.gc = function() {
        for (var a = this.a, b = [], c = a.length, d = 0; d < c; d++)
            b.push(a[d].b);
        return b
    }
    ;
    f.mc = function() {
        for (var a = this.a, b = [], c = a.length, d = 0; d < c; d++)
            b.push(a[d].a);
        return b
    }
    ;
    f.clone = function() {
        return new Rm(this)
    }
    ;
    f.Id = function() {
        return this.a.length
    }
    ;
    f.isEmpty = function() {
        return Ya(this.a)
    }
    ;
    f.clear = function() {
        Za(this.a)
    }
    ;
    function Tm() {
        Rm.call(this)
    }
    v(Tm, Rm);
    function Um(a) {
        T.call(this);
        this.a = a;
        this.g = new Tm;
        this.i = {}
    }
    v(Um, T);
    Um.prototype.b = !1;
    function Vm(a, b, c) {
        var d;
        for (c = pm(a.a, c); 0 <= c; ) {
            d = a.a.a[c];
            if (d = d.i[Math.floor(b / (d.a * d.g))] ? mm(d, b) : null)
                return d;
            c--
        }
        return mm(a.a.a[0], b)
    }
    function Wm(a) {
        if (!a.b)
            if (a.g.isEmpty())
                a.b = !1;
            else {
                a.b = !0;
                var b = a.g.remove()
                  , c = new Image;
                c.src = lm(a.a.a[b.Rn], b.Sn);
                c.onload = t(a.j, a, b.Rn, b.Sn)
            }
    }
    Um.prototype.j = function(a, b) {
        this.b = !1;
        var c = this.a.a[a];
        c.i[b] = !0;
        Wm(this);
        var d, e = c.a * c.g;
        d = b * e;
        c = Math.min(d + e - 1, c.b - 1);
        d = [d, c];
        this.B("l", d[0], d[1])
    }
    ;
    function Xm(a, b, c) {
        this.b = a;
        this.a = b;
        this.g = c
    }
    var Ym = {
        playready: ["com.youtube.playready"],
        widevine: ["com.widevine.alpha"],
        clearkey: ["org.w3.clearkey", "webkit-org.w3.clearkey"]
    }
      , Zm = ["widevine", "playready"];
    function $m(a, b, c) {
        if (!a.addKey && !a.webkitAddKey)
            return null;
        for (var d = 0; d < Zm.length; d++) {
            var e = Zm[d];
            if (c[e])
                for (var g = Ym[e], h = 0; h < g.length; h++) {
                    var k = g[h];
                    if (a.canPlayType(b, k) || 0 == b.indexOf("audio/mp4") && "widevine" == e && a.canPlayType(b) && a.canPlayType('video/mp4; codecs="avc1"', k))
                        return new Xm(e,k,c[e])
                }
        }
        return null
    }
    ;function an(a, b) {
        this.a = a;
        this.b = b;
        this.i = 0;
        Object.defineProperty(this, "timestampOffset", {
            get: this.Av,
            set: this.Bv
        });
        Object.defineProperty(this, "buffered", {
            get: this.zv
        })
    }
    f = an.prototype;
    f.append = function(a) {
        this.a.webkitSourceAppend(this.b, a)
    }
    ;
    f.abort = function() {
        this.a.webkitSourceAbort(this.b)
    }
    ;
    f.zv = function() {
        return this.a.webkitSourceState == this.a.SOURCE_CLOSED ? new bn : this.a.webkitSourceBuffered(this.b)
    }
    ;
    f.Av = function() {
        return this.i
    }
    ;
    f.Bv = function(a) {
        this.i = a;
        this.a.webkitSourceTimestampOffset(this.b, a)
    }
    ;
    function bn() {
        this.length = 0
    }
    ;function cn(a) {
        this.activeSourceBuffers = this.sourceBuffers = [];
        this.a = a;
        this.b = NaN;
        this.g = 0;
        Object.defineProperty(this, "duration", {
            get: this.nv,
            set: this.qv
        });
        Object.defineProperty(this, "readyState", {
            get: this.ov
        });
        this.a.addEventListener("webkitsourceclose", t(this.pv, this), !0)
    }
    f = cn.prototype;
    f.addEventListener = function(a, b, c) {
        this.a.addEventListener(a, b, c)
    }
    ;
    f.Ss = function() {
        return this.a.webkitMediaSourceURL
    }
    ;
    f.addSourceBuffer = function(a) {
        var b = (this.g++).toString();
        this.a.webkitSourceAddId(b, a);
        a = new an(this.a,b);
        this.sourceBuffers.push(a);
        return a
    }
    ;
    f.ov = function() {
        switch (this.a.webkitSourceState) {
        case this.a.SOURCE_CLOSED:
            return "closed";
        case this.a.SOURCE_OPEN:
            return "open";
        case this.a.SOURCE_ENDED:
            return "ended"
        }
        return ""
    }
    ;
    f.endOfStream = function(a) {
        var b = this.a.EOS_NO_ERROR;
        "network" == a ? b = this.a.EOS_NETWORK_ERR : "decode" == a && (b = this.a.EOS_DECODE_ERR);
        this.a.webkitSourceEndOfStream(b)
    }
    ;
    f.pv = function() {
        Za(this.sourceBuffers)
    }
    ;
    f.nv = function() {
        return this.b
    }
    ;
    f.qv = function(a) {
        this.b = a;
        this.a.webkitSourceSetDuration && this.a.webkitSourceSetDuration(a)
    }
    ;
    function dn() {
        this.g = []
    }
    dn.prototype.listen = function(a, b, c) {
        if (ga(b))
            for (var d = 0; d < b.length; d++)
                this.listen(a, b[d], c);
        else
            c = t(c, this),
            a.addEventListener(b, c, !1),
            this.g.push(a, b, c)
    }
    ;
    dn.prototype.removeAll = function() {
        if (this.g)
            for (; this.g.length; ) {
                var a = this.g.shift()
                  , b = this.g.shift()
                  , c = this.g.shift();
                a.removeEventListener && a.removeEventListener(b, c)
            }
    }
    ;
    dn.prototype.ia = function() {
        return null === this.g
    }
    ;
    dn.prototype.dispose = function() {
        this.removeAll();
        this.g = null
    }
    ;
    function en(a, b, c, d) {
        this.g = [];
        this.i = this.a = null;
        this.j = b;
        this.b = window.MediaSource ? new window.MediaSource : window.WebKitMediaSource ? new window.WebKitMediaSource : HTMLMediaElement.prototype.webkitSourceAddId ? new cn(a) : null;
        this.k = "";
        this.o = null;
        this.listen(this.b, ["sourceopen", "webkitsourceopen"], qa(this.u, d, c));
        this.listen(this.b, ["sourceclose", "webkitsourceclose"], this.C)
    }
    v(en, dn);
    function fn(a) {
        return "open" == a.b.readyState
    }
    en.prototype.Yb = function() {
        return "closed" == this.b.readyState
    }
    ;
    en.prototype.u = function(a, b) {
        isNaN(this.j) || (this.b.duration = this.j,
        this.j = NaN,
        this.a = this.b.addSourceBuffer(a),
        this.i = this.b.addSourceBuffer(b),
        this.o && (this.o(this),
        this.o = null))
    }
    ;
    en.prototype.C = function() {
        this.dispose()
    }
    ;
    en.prototype.dispose = function() {
        var a = this.k;
        if (a)
            try {
                window.URL.revokeObjectURL(a)
            } catch (b) {}
        this.k = "";
        en.D.dispose.call(this)
    }
    ;
    function gn(a) {
        if (window.MediaSource && window.MediaSource.isTypeSupported)
            return window.MediaSource.isTypeSupported(a);
        'audio/mp4; codecs="mp4a.40.2"' == a && (a = 'video/mp4; codecs="avc1.4d404f"');
        return 'video/webm; codecs="vp9"' == a && Rj("opr/") ? !1 : !!zm().canPlayType(a)
    }
    ;function hn(a, b, c, d) {
        this.a = c;
        this.b = a;
        this.j = d || "";
        this.i = b;
        this.g = {}
    }
    function Wj(a) {
        if (a.a)
            a = a.b;
        else if (a.i) {
            var b;
            b = (new Ge(a.b)).a.get("id");
            b = "http://www.youtube.com/api/manifest/t2b/source/youtube/id/" + encodeURIComponent(b);
            b += "/itag/" + a.j;
            b += "/mfmt/amf";
            a = Le(new Ge(yk(a.b, a.g)), b).toString()
        } else
            a = yk(a.b, a.g);
        return a
    }
    ;function jn(a, b) {
        var c = b.b in kn && Qj();
        this.i = (this.a = !!(a instanceof Array)) ? null : new hn(a,c,this.a,b.b);
        this.b = this.a ? a[0] : null;
        this.g = this.a ? a[1] : null;
        this.ye = b
    }
    var ln = "9h8(H*".split("")
      , mn = ["M", "a", "v", "A", "V"];
    jn.prototype.getInfo = function() {
        return this.ye
    }
    ;
    jn.prototype.Fl = function() {
        return this.ye.g.a
    }
    ;
    var nn = {
        'video/mp4; codecs="avc1.42001E, mp4a.40.2"': "maybe"
    }
      , on = {
        "application/x-mpegURL": "maybe"
    }
      , pn = {
        "application/x-mpegURL": "maybe"
    };
    function qn(a, b) {
        if (!Am())
            return [];
        var c = rn(a, b);
        a = !c.length && b ? rn(a, !1) : c;
        for (var d = {}, c = zm(), e = 0; e < a.length; e++) {
            var g = a[e];
            if (sn(c, g.getInfo().Sc) && !(g.ye.b in tn || Qj() && "5" == g.ye.b)) {
                var h = g.Fl();
                if (!d[h] || Uk(d[h].getInfo()))
                    d[h] = g
            }
        }
        var k = [];
        x($k, function(a) {
            (g = d[a]) && k.push(g)
        });
        return k
    }
    function sn(a, b) {
        var c;
        if (!(c = a.canPlayType(b))) {
            var d;
            Gj ? d = pn[b] : 2.2 == sm ? d = nn[b] : Rj("android") && Rj("chrome") && (d = on[b]);
            c = d || ""
        }
        return c
    }
    var kn = {
        5: !0,
        34: !0,
        35: !0
    }
      , tn = {
        52: !0,
        53: !0,
        54: !0,
        55: !0,
        60: !0,
        79: !0,
        87: !0
    };
    function un(a) {
        var b = [];
        x(a, function(a) {
            a.url && b.push(vn(a.url, a.type, "medium", "0"))
        });
        return b
    }
    function vn(a, b, c, d, e) {
        var g = new Qk
          , h = al[c];
        h || (c = "small",
        h = al.small);
        c = new Yk(h[0],h[1],e ? -1 : 0,c);
        b = unescape(b.replace(/&quot;/g, '"'));
        return new jn(a,new Tk(d,b,g,c))
    }
    function rn(a, b) {
        for (var c = [], d = 0; d < a.length; d++) {
            var e = a[d], g;
            if (g = nc)
                if (g = 0 != e.ye.g.b)
                    g = 1 == e.getInfo().j;
            g || 0 != e.ye.g.b == b && c.push(e)
        }
        return c
    }
    function wn(a, b) {
        for (var c = [], d = 0; d < a.length; d++) {
            var e = a[d];
            if (e.sig || e.s) {
                var g = e.sig || Ok(e.s);
                e.url = Bk(e.url, {
                    signature: g
                })
            }
            e.url && c.push(vn(e.url, e.type, e.quality, e.itag, e.stereo3d))
        }
        return qn(c, !!b)
    }
    function xn(a) {
        a = un(a);
        return qn(a, !1)
    }
    function yn(a, b) {
        function c(a) {
            return !!e[a]
        }
        var d = null, e = {}, g;
        for (g in Rk) {
            var h = Rk[g]
              , k = a.a[h];
            if (k && gn(k.info.Sc) && !(0 <= k.info.Sc.indexOf("vp9") && Rj("cros armv7"))) {
                if (k.info.k) {
                    d || (d = zm());
                    if (!$m(d, k.info.Sc, k.info.k))
                        continue;
                    if (261 == h && !d.canPlayType('audio/mp4; codecs="aac51"', "com.widevine.alpha"))
                        continue
                }
                vl(k.j, b);
                e[k.info.o] = e[k.info.o] || [];
                e[k.info.o].push(k)
            }
        }
        d = Ua(ln, c);
        g = Ua(mn, c);
        h = [];
        if (!d || !g)
            return h;
        ob(e[g], "itag");
        k = e[g].pop();
        for (g = 0; g < e[d].length; g++)
            h.push(zn(k, e[d][g]));
        nb(h, function(a, b) {
            var c = a.getInfo()
              , d = b.getInfo();
            return d.g.height - c.g.height || d.a - c.a
        });
        return h
    }
    function zn(a, b) {
        return new jn([a, b],b.info)
    }
    function An(a, b, c) {
        if (!b.a)
            return a[0];
        for (var d = 0; d < a.length; d++) {
            var e = a[d].getInfo();
            if (Xk[e.g.a] <= b.a && !(0 < c && !b.g && a[d].a && c < e.a + a[d].b.info.a))
                return a[d]
        }
        return a[a.length - 1]
    }
    ;function Lh(a) {
        T.call(this);
        this.$ = new B(0,0);
        this.Q = [];
        this.b = {};
        this.Ea = {};
        this.i = {};
        Bn(this, a)
    }
    v(Lh, T);
    var Cn = /\/img\/watermark\/youtube_(hd_)?watermark(-vfl\S{6})?.png$/
      , Dn = "author cc_asr cc_load_policy iv_new_window iv_load_policy keywords subscribed sentiment rvs title ttsurl ypc_buy_url ypc_full_video_length ypc_item_thumbnail ypc_item_title ypc_item_url ypc_offer_button_text ypc_offer_description ypc_offer_headline ypc_offer_id ypc_price_string ypc_preview ypc_video_rental_bar_text".split(" ");
    f = Lh.prototype;
    f.ja = !1;
    f.jl = "";
    f.Oo = !0;
    f.gb = !1;
    f.Ak = "";
    f.zk = "";
    f.yk = "";
    f.Qj = !1;
    f.Rh = 1;
    f.Yl = null;
    f.Mo = !1;
    f.zm = 0;
    f.se = 0;
    f.Fo = !1;
    f.Dl = !1;
    f.Cm = 3;
    f.Ni = "";
    f.Fa = "";
    f.mj = !1;
    f.cg = !1;
    f.km = !1;
    f.hf = 0;
    f.wd = !1;
    f.Jm = !1;
    f.Sf = 0;
    f.df = !1;
    f.lm = !0;
    f.oj = !1;
    f.Zj = !1;
    f.cn = !1;
    f.nb = !1;
    f.$j = !1;
    f.wk = !1;
    f.Kd = !1;
    f.sm = !1;
    f.ak = !1;
    f.Xj = 0;
    f.Aa = 0;
    f.hh = 0;
    f.Hk = !1;
    f.Cl = "";
    f.sj = !1;
    f.kj = !1;
    f.lk = gm;
    f.zo = 0;
    f.nm = !1;
    f.ph = !1;
    f.Ha = 0;
    f.gj = null;
    f.Pg = 2;
    f.ff = gm;
    f.Ij = !1;
    f.wf = !1;
    f.dg = null;
    f.pj = "";
    f.Qd = 0;
    f.Kl = null;
    f.om = !1;
    f.Mj = 0;
    f.Km = NaN;
    function ji(a, b) {
        var c = b || {};
        c.iv_read_url && (a.Ak = ll(c.iv_read_url));
        c.iv_invideo_url && (a.zk = ll(c.iv_invideo_url));
        c.iv_cta_url && (a.yk = ll(c.iv_cta_url));
        c.cta_conversion_urls && (a.Va = c.cta_conversion_urls);
        a.ri = W(a.ri, c.author);
        a.Dl = V(a.Dl, c.cc_asr);
        a.Ni = Im(a.Ni, c.ttsurl);
        a.Fa = W(a.Fa, c.cpn);
        a.o = W(a.o, c.subscribed);
        a.Pg = Gm(a.Pg, c.sentiment, Nm);
        a.title = W(a.title, c.title);
        a.la = W(a.la, c.ypc_preview);
        a.Hk = V(a.Hk, c.paygated);
        c.keywords && (a.Ea = En(c.keywords));
        c.rvs && (a.Na = Fn(c.rvs));
        c.poster && (a.Cl = c.poster);
        x(Dn, function(a) {
            a in c && (this.b[a] = c[a])
        }, a)
    }
    function Bn(a, b) {
        var c = b || {};
        a.gb = "1" != c.hlsdvr || Jj || Gj && 5 > Kj ? !1 : !0;
        a.Qj = "1" == c.infringe || "1" == c.muted;
        a.bn = c.authkey;
        a.Qa = c.authuser;
        a.Fa || (a.Fa = c.cpn || Dm());
        a.pe = u();
        a.Ic = c.sw;
        a.gd = c.t;
        a.mj = V(a.mj, c.cenchd);
        a.cg = "1" == c.enable_cardio;
        a.km = "1" == c.enable_cardio_before_playback;
        a.hf = Hm(a.hf, c.end || c.endSeconds);
        a.lm = "1" != c.no_get_video_log;
        a.oj = "1" == c.tmi;
        a.Zj = V(a.Zj, c.noiba);
        a.cn = "1" == c.livemonitor;
        a.nb = "1" == c.live_playback;
        a.$j = V(a.$j, c.mdx);
        a.wk = V(a.wk, c.on3g);
        a.ak = V(a.ak, c.utpsa);
        a.Po = c.iurlmaxres;
        a.P = W(a.P, c.oauth_token);
        a.I = W(a.I, c.vvt);
        a.jd = c.osig;
        a.mb = c.ptchn;
        a.ob = c.oid;
        a.F = c.ptk;
        a.lb = c.pltype;
        a.Ya = c.plid;
        a.j = c.eventid;
        a.Sa = c.osid;
        a.Pa = W(a.Pa, c.list);
        a.wb = c.pyv_beacon_url;
        a.kd = c.purchase_id;
        a.na = c.sdetail;
        a.hd = c.sourceid;
        a.ha = W(a.ha, c.feature);
        a.bb = 1 == Hm(a.bb ? 1 : 0, c.is_fling);
        a.ra = W(a.ra, c.ytr);
        a.Qo = c.iurlsd;
        a.om = "1" == c.skip_kansas_logging;
        a.lk = Km(a.lk, c.vq);
        a.ff = Km(a.ff, c.suggestedQuality);
        a.qe = c.approx_threed_layout || 0;
        a.Ij = "1" == c.threed_converted;
        a.Di = c.iurl;
        a.kj = "1" == c.sendtmp;
        a.nm = !!a.Ic || a.kj;
        a.Ha = Hm(a.Ha, c.start || c.startSeconds);
        a.L = c.docid || c.video_id || c.videoId;
        Gn(a, c.watermark);
        a.Hc = W(a.Hc, c.ypc_gid);
        a.Kc = W(a.Kc, c.ypc_license_session_token);
        if (c.ad3_module || c.ad_module)
            "1" == c.allow_html5_ads ? (a.ja = !0,
            "1" == c.ad_preroll && a.Q.push("ad")) : "1" != c.supported_without_ads && (a.Jm = !0);
        c.adaptive_fmts && (a.jl = c.adaptive_fmts);
        c.allow_embed && (a.Oo = "1" == c.allow_embed);
        c.autoplay && (a.df = "1" == c.autoplay);
        c.iv_load_policy && (a.ma = Hn(c.iv_load_policy, a.ma));
        c.cc_load_policy && (a.Cm = Hn(c.cc_load_policy, 2));
        if (c.dashmpd) {
            a.K = yk(c.dashmpd, {
                cpn: a.Fa
            });
            var d = /\/s\/([0-9A-F.]+)/
              , e = d.exec(a.K);
            e && (e = Ok(e[1]),
            a.K = a.K.replace(d, "/signature/" + e))
        }
        c.delay && (a.R = Ja(c.delay));
        c.idpj && (a.Sf = Ja(c.idpj));
        c.url_encoded_fmt_stream_map && (a.pj = c.url_encoded_fmt_stream_map);
        c.hlsvp && (a.fa = c.hlsvp);
        c.length_seconds && (a.Aa = Ja(c.length_seconds));
        c.ldpj && (a.hh = Ja(c.ldpj));
        c.loudness && (a.xb = c.loudness,
        a.Rh = In(a));
        c.partnerid && (a.md = Ja(c.partnerid));
        c.pyv_billable_url && jl(c.pyv_billable_url, gl) && (a.W = c.pyv_billable_url);
        c.pyv_conv_url && jl(c.pyv_conv_url, gl) && (a.Ga = c.pyv_conv_url);
        c.url_encoded_third_party_media && (a.dg = Fn(c.url_encoded_third_party_media));
        c.threed_module && !c.threed_converted && (a.V = c.threed_module,
        a.Jc = 6);
        if ("1" == c.track_embed || c.tk)
            a.sj = !0;
        c.two_stage_token && (a.Yl = c.two_stage_token);
        c.watch_ajax_token && Af("watch_actions_ajax", c.watch_ajax_token);
        c.fresca_preroll && a.Q.push("fresca");
        c.ypc_clickwrap_module && a.Q.push("ypc_clickwrap");
        void 0 != c.start && (a.Mj = c.start);
        void 0 != c.end && (a.Km = c.end);
        void 0 != c.atc && (a.va = c.atc);
        a.Gc = W(a.Gc, c.ucid);
        x(["baseUrl", "uid", "oeid", "ieid", "ppe"], function(a) {
            this.i[a] = c[a]
        }, a);
        a.i.focEnabled = "1" == c.focEnabled;
        a.i.rmktEnabled = "1" == c.rmktEnabled;
        a.zm = Jn(c.rmktPingThreshold, c.length_seconds);
        a.b = c;
        ji(a, c);
        Kn(a)
    }
    function Kn(a) {
        if (Rj("android") && Rj("chrome") && !Cc(29) ? 0 : window.MediaSource || window.WebKitMediaSource || window.HTMLMediaElement && HTMLMediaElement.prototype.webkitSourceAddId)
            if (a.jl)
                a.u = Wl(Ln(a, a.jl));
            else if (a.K) {
                a.wd = !0;
                var b = ll(a.K)
                  , c = t(a.zx, a);
                a = t(a.Ml, a);
                bm(new Tl, b, c, a)
            }
    }
    f.zx = function(a) {
        if (!this.ia()) {
            if (this.u = a)
                this.Aa = this.u.duration || this.Aa;
            this.Ml()
        }
    }
    ;
    f.Ml = function() {
        this.ia() || (this.wd = !1,
        this.B("dataloaded", this.b))
    }
    ;
    function Mn(a) {
        if (!a.ia()) {
            a.g = null;
            a.Xa = null;
            a.k = null;
            a.S = null;
            a.A = null;
            if (a.u && (a.k = yn(a.u, Nn(a)),
            a.k.length)) {
                var b = Ra(a.k, function(a) {
                    return a.g.info
                });
                a.g = new cm(b,[a.k[0].b.info])
            }
            if (!a.g) {
                a.k = null;
                if (a.dg && a.sm)
                    a.A = xn(a.dg);
                else {
                    b = Ln(a, a.pj);
                    if (a.fa) {
                        var c = Fm(a.fa, a.Fa, !a.wk);
                        b.push(c)
                    }
                    a.A = wn(b, !!a.V || a.wf)
                }
                a.A.length && (a.g = new cm(Ra(a.A, function(a) {
                    return a.getInfo()
                })))
            }
            a.B("dataupdated")
        }
    }
    function On(a) {
        return a.a && a.a.k || null
    }
    function Nn(a) {
        var b = {};
        a.F && (b.ptk = a.F,
        b.oid = a.ob,
        b.ptchn = a.mb,
        b.pltype = a.lb);
        return b
    }
    function Pn(a, b) {
        return r(a.Ea[b]) ? a.Ea[b] : null
    }
    function Qn(a) {
        !a.Kl && a.b.storyboard_spec && (a.Kl = new nm(a.b.storyboard_spec));
        return a.Kl
    }
    function Rn(a) {
        var b = Qn(a);
        !a.gj && b && (a.gj = new Um(b),
        O(a, a.gj));
        return a.gj
    }
    function Sn(a) {
        return !(!a.L && !a.dg)
    }
    function Tn(a, b) {
        var c = {
            format: "RAW",
            method: "GET",
            O: a,
            onSuccess: a.Sx,
            onError: a.Rx
        };
        a.wd = !0;
        Hk(b, c)
    }
    function In(a) {
        return a.xb ? (a = Math.min(-21 - a.xb, 10),
        Math.pow(10, a / 20)) : 1
    }
    f.Sx = function(a) {
        this.ia() || (this.wd = !1,
        a = vk(a.responseText),
        "fail" == a.status ? this.B("onStatusFail", a) : (Bn(this, a),
        this.wd || this.Ml()))
    }
    ;
    f.Rx = function() {
        this.ia() || (this.wd = !1,
        this.B("onStatusFail", {
            errorcode: 100,
            reason: ""
        }))
    }
    ;
    function Hn(a, b) {
        var c = parseInt(a, 10);
        return Rb(rm, c) ? c : b
    }
    function Fn(a) {
        a = a.split(",");
        return a = a.map(function(a) {
            return vk(a)
        })
    }
    function Ln(a, b) {
        var c = Fn(b);
        x(c, function(a) {
            a.url && (a.url = yk(a.url, {
                cpn: this.Fa
            }))
        }, a);
        return c
    }
    function En(a) {
        var b = {};
        x(a.split(","), function(a) {
            var d = a.split("=");
            2 == d.length ? b[d[0]] = d[1] : b[a] = !0
        });
        return b
    }
    function Gn(a, b) {
        if (b) {
            var c = b.split(",");
            2 <= c.length && (a.Oa = c[1],
            a.re = c[0])
        }
    }
    function Un(a, b) {
        return !!a.b[b]
    }
    function Jn(a, b) {
        var c = Ja(b)
          , d = Ja(a);
        return isNaN(d) || isNaN(c) ? 0 : Math.min(d, c)
    }
    ;function Vn(a, b) {
        this.type = a || "";
        this.id = b || ""
    }
    function Wn(a) {
        return new Vn(a.substr(0, 2),a.substr(2))
    }
    Vn.prototype.toString = function() {
        return this.type + this.id
    }
    ;
    function Xn(a) {
        T.call(this);
        this.views = 0;
        this.a = [];
        this.b = [];
        this.xa = Math.max(0, a.index || 0);
        this.Ef = !!a.loop;
        this.Sk = a.startSeconds || 0;
        this.ho = "1" == a.mob;
        this.title = a.playlist_title || "";
        this.description = a.playlist_description || "";
        this.i = a.author || "";
        a.video_id && (this.a[this.xa] = new Lh(a));
        a.api && ("string" == typeof a.api && 16 == a.api.length ? a.list = "PL" + a.api : a.playlist = a.api);
        if (a.list)
            switch (a.listType) {
            case "user_uploads":
                Yn(this, a.list);
                break;
            case "user_favorites":
                Zn(this, a.list);
                break;
            case "search":
                $n(this, a.list);
                break;
            default:
                a.playlist_length && (this.dc = a.playlist_length),
                this.g = Wn(a.list),
                ao(this)
            }
        else if (a.playlist) {
            var b = a.playlist.toString().split(",");
            0 < this.xa && (this.a = []);
            x(b, function(a) {
                a && this.a.push(new Lh({
                    video_id: a
                }))
            }, this);
            this.dc = this.a.length;
            this.Wd = !0
        } else
            a.videoList && (0 < this.xa && (this.a = []),
            x(a.videoList, function(a) {
                this.a.push(new Lh(a))
            }, this),
            this.dc = this.a.length,
            this.Wd = !0);
        Yh(this, !!a.shuffle)
    }
    v(Xn, T);
    f = Xn.prototype;
    f.Ef = !1;
    f.Sk = 0;
    f.Uo = !1;
    f.xa = 0;
    f.title = "";
    f.dc = 0;
    f.ho = !1;
    f.Wd = !1;
    f.Ug = !1;
    f.De = null;
    function bo(a) {
        return a.Ef || a.xa + 1 < a.dc
    }
    function co(a) {
        if (++a.xa >= a.dc)
            if (a.Ef)
                a.xa = 0;
            else
                return null;
        Xh(a, a.xa);
        return Wh(a, a.xa)
    }
    function eo(a) {
        if (0 > --a.xa)
            if (a.Ef)
                a.xa = a.dc - 1;
            else
                return null;
        Xh(a, a.xa);
        return Wh(a, a.xa)
    }
    function Wh(a, b) {
        var c = void 0 != b ? b : a.xa;
        if (c = a.a && c in a.a ? a.a[a.b[c]] : null)
            c.Ha = a.Sk || c.Mj || 0;
        return c
    }
    function Yh(a, b) {
        a.Uo = b;
        var c = a.b && null != a.b[a.xa] ? a.b[a.xa] : a.xa;
        a.b = [];
        for (var d = 0; d < a.a.length; d++)
            a.b.push(d);
        a.xa = c;
        if (a.Uo) {
            c = a.b[a.xa];
            for (d = 1; d < a.b.length; d++) {
                var e = Math.floor(Math.random() * (d + 1))
                  , g = a.b[d];
                a.b[d] = a.b[e];
                a.b[e] = g
            }
            for (d = 0; d < a.b.length; d++)
                a.b[d] == c && (a.xa = d)
        }
        a.B("shuffle")
    }
    function Xh(a, b) {
        a.xa = Bb(b, 0, a.dc - 1);
        a.Sk = 0
    }
    function fo(a) {
        return a.dc
    }
    function Yn(a, b) {
        a.Ug || (a.g = new Vn("UU","PLAYER_" + b),
        go(a, "/list_ajax?style=json&action_get_user_uploads_by_user=1", {
            username: b
        }))
    }
    function Zn(a, b) {
        a.Ug || (a.g = new Vn("FL","PLAYER_" + b),
        go(a, "/list_ajax?style=json&action_get_favorited_by_user=1", {
            username: b
        }))
    }
    function $n(a, b) {
        if (!a.Ug) {
            a.g = new Vn("SR",b);
            var c = {
                search_query: b
            };
            a.ho && (c.mob = "1");
            go(a, "/search_ajax?style=json&embeddable=1", c)
        }
    }
    function ao(a) {
        if (!a.Ug) {
            var b = {
                list: a.g
            }
              , c = Wh(a);
            c && c.L && (b.v = c.L);
            go(a, "/list_ajax?style=json&action_get_list=1", b)
        }
    }
    function go(a, b, c) {
        Hk(yk(b, c), {
            format: "JSON",
            onSuccess: function(a, b) {
                ho(this, b)
            },
            O: a
        })
    }
    function ho(a, b) {
        if (b.video && b.video.length) {
            a.title = b.title;
            a.description = b.description;
            a.views = b.views;
            a.i = b.author;
            var c = Wh(a);
            a.xa = 0;
            a.a = [];
            x(b.video, function(a) {
                a && (a.video_id = a.encrypted_id,
                c && a.video_id == c.L && (this.xa = this.a.length),
                this.a.push(new Lh(a)))
            }, a);
            a.dc = a.a.length;
            Yh(a, !1);
            a.Ug = !1;
            a.Wd = !0;
            a.De && a.De()
        }
    }
    f.H = function() {
        this.De = null;
        qh(this.a);
        Xn.D.H.call(this)
    }
    ;
    function io(a, b) {
        this.Of = a;
        this.cf = b + "::"
    }
    v(io, Ag);
    f = io.prototype;
    f.Of = null;
    f.cf = "";
    f.set = function(a, b) {
        this.Of.set(this.cf + a, b)
    }
    ;
    f.get = function(a) {
        return this.Of.get(this.cf + a)
    }
    ;
    f.remove = function(a) {
        this.Of.remove(this.cf + a)
    }
    ;
    f.Gd = function(a) {
        var b = this.Of.Gd(!0)
          , c = this
          , d = new ge;
        d.next = function() {
            for (var d = b.next(); d.substr(0, c.cf.length) != c.cf; )
                d = b.next();
            return a ? d.substr(c.cf.length) : c.Of.get(d)
        }
        ;
        return d
    }
    ;
    function jo(a) {
        T.call(this);
        this.a = a;
        if (this.El) {
            a = "yt-html5-player-modules::" + this.El;
            var b = new Cg;
            if (a = b.isAvailable() ? a ? new io(b,a) : b : null)
                this.o = new Eg(a)
        }
    }
    v(jo, T);
    f = jo.prototype;
    f.pa = "";
    f.dd = "";
    f.Df = !1;
    f.aa = !1;
    f.xj = !1;
    f.sc = null;
    f.qf = function(a) {
        var b = eb(arguments)
          , c = t(this.uc, this)
          , d = t(this.Yc, this);
        x(b, function(a) {
            a.namespace = this.pa;
            a.Ta.G("onEnter", c);
            a.Ta.G("onExit", d)
        }, this);
        this.B("command_add_cuerange", b, this.a.getPlayerType())
    }
    ;
    f.fw = function(a) {
        var b = eb(arguments);
        this.B("command_remove_cuerange", b, this.a.getPlayerType())
    }
    ;
    function ko(a) {
        a.B("command_remove_cuerange_all", a.pa, a.a.getPlayerType())
    }
    function lo(a) {
        a.B("command_preroll_ready", a.pa, a.a.getPlayerType())
    }
    function mo(a, b) {
        G(b, a.pa);
        mi(a.a).$.appendChild(b)
    }
    function no(a) {
        a.B("command_show_dialog_area")
    }
    function oo(a) {
        a.B("command_hide_all_dialogs")
    }
    f.create = function() {
        this.Df || (this.eb(this.a),
        G(S(this.a), this.pa + "-created"),
        this.Df = !0)
    }
    ;
    f.destroy = function() {
        this.unload();
        H(S(this.a), this.pa + "-created");
        this.Df = !1
    }
    ;
    f.load = function() {
        G(S(this.a), this.pa + "-loaded");
        this.B("loaded", this.pa)
    }
    ;
    f.unload = function() {
        H(S(this.a), this.pa + "-loaded");
        this.B("unloaded", this.pa)
    }
    ;
    f.uc = function() {}
    ;
    f.Yc = function() {}
    ;
    f.je = function() {}
    ;
    f.log = function(a) {
        this.B("command_log", this.dd, a)
    }
    ;
    function po(a, b, c) {
        var d = {}, e;
        for (e in b)
            d[a.pa + "_" + e] = b[e];
        b = {};
        for (var g in c)
            b[a.pa + "_" + g] = c[g];
        a.B("command_log_timing", d, b)
    }
    f.Li = function() {
        return null
    }
    ;
    function qo(a, b) {
        if (!a.o)
            return null;
        var c;
        try {
            c = a.o.get(b)
        } catch (d) {
            a.o && a.o.remove(b)
        }
        return c
    }
    function ro(a, b, c) {
        if (a.o)
            try {
                a.o.set(b, c)
            } catch (d) {}
    }
    function so(a, b) {
        a.B("command_disable_controls", b, a.pa)
    }
    function to(a, b) {
        a.B("command_enable_controls", b, a.pa)
    }
    function uo(a) {
        a.B("command_stop_redirect_controls")
    }
    f.playVideo = function() {
        this.B("command_play", !1, this.a.getPlayerType())
    }
    ;
    f.pauseVideo = function() {
        this.B("command_pause", !1, this.a.getPlayerType())
    }
    ;
    f.rb = function(a) {
        this.B("command_redirected_show_is_playing", a)
    }
    ;
    function vo(a, b) {
        a.B("module_menu_item_add", b)
    }
    function wo(a, b) {
        a.B("module_menu_item_remove", b)
    }
    function xo(a) {
        a.B("module_menu_show", void 0)
    }
    f.pq = function() {}
    ;
    f.np = function() {
        return []
    }
    ;
    f.eb = function() {
        return !1
    }
    ;
    f.Pn = function(a, b) {
        this.sc && this.sc.je && this.sc.je.apply(this.sc, arguments)
    }
    ;
    f.Sh = function() {}
    ;
    function yo(a, b) {
        this.g = a;
        this.Ta = b;
        this.C = !1;
        this.u = "base-endscreen";
        this.k = this.j = null
    }
    yo.prototype.create = function() {
        this.j = D("html5-endscreen", S(this.g));
        G(this.j, this.u);
        this.k = D("html5-endscreen-content", S(this.g));
        this.C = !0
    }
    ;
    yo.prototype.destroy = function() {
        this.C = !1
    }
    ;
    yo.prototype.load = function() {}
    ;
    function zo(a) {
        var b = "episodic" == (a.feature_type || a.feature)
          , c = a.endscreen_autoplay;
        return !!a.featured || b || c
    }
    ;function Ao(a) {
        this.gh = a || window;
        this.ne = []
    }
    f = Ao.prototype;
    f.gh = null;
    f.ne = null;
    f.listen = function(a, b, c, d) {
        c = t(c, d || this.gh);
        a = N(a, b, c);
        this.ne.push(a);
        return a
    }
    ;
    function Bo(a, b, c, d) {
        d = t(d, a.gh);
        b = Uf(b, c, d);
        a.ne.push(b);
        return b
    }
    function Co(a, b, c, d) {
        c = t(c, a.gh);
        b = Vf(b, c, d);
        a.ne.push(b)
    }
    function Do(a, b, c, d, e, g) {
        d = t(d, g || a.gh);
        b = Xf(b, c, d, e);
        a.ne.push(b)
    }
    f.Ib = function(a) {
        Tf(a);
        ab(this.ne, a)
    }
    ;
    f.removeAll = function() {
        Tf(this.ne);
        this.ne = []
    }
    ;
    function Eo(a) {
        this.a = {};
        this.b = {};
        this.g = {};
        this.U = Fo(this, a)
    }
    v(Eo, nh);
    function Fo(a, b, c) {
        var d = 0
          , e = dd(b[d++]);
        if (r(b[d]) || ga(b[d]) || null === b[d]) {
            var g = b[d++];
            ga(g) && (g = g.join(" "));
            if (g = Go(a, e, "className", g))
                Ho(a, e, "className", g),
                Io(a, g, e)
        }
        for (; d < b.length; d++) {
            var h = b[d];
            if (ga(h))
                Fo(a, h, e);
            else if (ka(h)) {
                var g = a
                  , k = e
                  , m = void 0;
                for (m in h)
                    h[m] && Ho(g, k, m, Go(g, k, m, h[m]))
            } else
                r(h) && Ho(a, e, "child", Go(a, e, "child", h))
        }
        c && c.appendChild(e);
        return e
    }
    f = Eo.prototype;
    f.M = function() {
        return this.U
    }
    ;
    function Io(a, b, c) {
        var d = b.split(" ");
        if (1 < d.length)
            for (b = 0; b < d.length; b++)
                Io(a, d[b], c);
        else
            a.a[b] = c
    }
    f.X = function(a, b) {
        q(b) ? jd(a, this.U, b) : a.appendChild(this.U)
    }
    ;
    f.zf = function() {
        F(this.U)
    }
    ;
    function Go(a, b, c, d) {
        return r(d) && "{{" == d.substr(0, 2) ? (a.b[d] = [b, c],
        null) : d
    }
    f.update = function(a) {
        for (var b in a)
            Jo(this, b, a[b])
    }
    ;
    function Jo(a, b, c) {
        if (c != a.g[b]) {
            var d = a.b["{{" + b + "}}"];
            d && (a.g[b] = c,
            Ho(a, d[0], d[1], c))
        }
    }
    function Ko(a) {
        return ga(a) && r(a[0])
    }
    function Ho(a, b, c, d) {
        if ("child" == c) {
            hd(b);
            if (!ga(d) || Ko(d))
                d = [d];
            c = [];
            for (var e = 0; e < d.length; e++) {
                var g = d[e];
                null === g || (!g.nodeType || 1 != g.nodeType && 3 != g.nodeType ? Ko(g) ? c.push(Fo(a, g)) : g.M ? c.push(g.M()) : c.push(ed(g.toString())) : c.push(g))
            }
            for (a = 0; a < c.length; a++)
                b.appendChild(c[a])
        } else
            "className" == c ? b.className = d : null === d ? b.removeAttribute(c) : b.setAttribute(c, d.toString())
    }
    f.H = function() {
        this.a = {};
        this.b = {};
        this.g = {};
        this.zf();
        this.U = null;
        Eo.D.H.call(this)
    }
    ;
    function Lo(a) {
        a && (a.style.display = "block")
    }
    function Mo(a) {
        a && (a.style.display = "none")
    }
    function No(a, b) {
        var c = rf("requestAnimationFrame", window);
        return L(function() {
            c ? c.call(window, a) : a()
        }, b || 0)
    }
    ;function Y(a) {
        this.template = new Eo(a);
        O(this, this.template);
        this.element = this.template.M();
        this.o = "block";
        this.P = [];
        this.k = {}
    }
    v(Y, nh);
    f = Y.prototype;
    f.M = function() {
        return this.element
    }
    ;
    f.X = function(a, b) {
        this.template.X(a, b)
    }
    ;
    f.zf = function() {
        this.template.zf()
    }
    ;
    f.wa = function(a, b) {
        Jo(this.template, b || "content", a)
    }
    ;
    f.show = function() {
        var a = this.element;
        a && (a.style.display = this.o);
        this.element.removeAttribute("aria-hidden")
    }
    ;
    f.hide = function() {
        Mo(this.element);
        this.element.setAttribute("aria-hidden", "true")
    }
    ;
    f.listen = function(a, b, c, d, e) {
        a = N(a, b, t(c, d || this));
        this.P.push(a);
        r(e) && (this.k[e] ? this.k[e].push(a) : this.k[e] = [a]);
        return a
    }
    ;
    f.Ib = function(a) {
        Tf(a)
    }
    ;
    function Oo(a, b) {
        a.Ib(a.k[b]);
        a.k[b] = []
    }
    f.stopPropagation = function(a) {
        this.listen(this, a, function(a) {
            a.stopPropagation()
        })
    }
    ;
    f.addEventListener = function(a, b, c) {
        this.element.addEventListener ? this.element.addEventListener(a, b, c) : this.element.attachEvent && this.element.attachEvent("on" + a, b)
    }
    ;
    f.removeEventListener = function(a, b, c) {
        this.element.removeEventListener ? this.element.removeEventListener(a, b, c) : this.element.detachEvent && this.element.detachEvent("on" + a, b)
    }
    ;
    f.dispatchEvent = function(a) {
        return this.element.dispatchEvent(a)
    }
    ;
    f.fireEvent = function(a, b) {
        return this.element.fireEvent(a, b)
    }
    ;
    f.H = function() {
        this.Ib(this.P);
        this.element = null;
        Y.D.H.call(this)
    }
    ;
    function Po() {
        Y.call(this, ["div", "ytp-channel-banner-container", ["img", "ytp-channel-banner", {
            src: "{{banner}}"
        }]])
    }
    v(Po, Y);
    function Qo() {
        Y.call(this, ["div", "ytp-subscribe-card", ["img", "ytp-author-image", {
            src: "{{image}}"
        }], ["div", "ytp-subscribe-card-right", ["div", "ytp-author-name", "{{author}}"], ["div", "html5-subscribe-button-container"]]])
    }
    v(Qo, Y);
    var Ro = {
        hE: "html5-stop-propagation",
        LA: "html5-chromeless",
        AC: "html5-live-dvr-disabled",
        BC: "html5-live-dvr-engaged",
        CC: "html5-live-playback",
        CD: "html5-mobile",
        ED: "modest-branding",
        GD: "html5-native-controls",
        mE: "html5-tablet",
        lE: "html5-tablet-body",
        zD: "html5-main-video",
        vE: "html5-video-container",
        wE: "html5-video-content",
        xE: "html5-video-controls",
        yE: "ytp-fallback",
        zE: "ytp-fallback-content",
        BE: "html5-video-loader",
        GE: "html5-watermark",
        xA: "html5-branded-watermark",
        FE: "html5-viewport-sheet",
        RA: "html5-context-menu",
        Qq: "html5-context-menu-copy-debug-info",
        Rq: "html5-context-menu-copy-embed-html",
        Sq: "html5-context-menu-copy-video-url",
        Tq: "html5-context-menu-copy-video-url-at-current-time",
        Uq: "html5-context-menu-link",
        Vq: "html5-context-menu-report-playback-issue",
        Wq: "html5-context-menu-show-video-info",
        SA: "html5-show-video-info-template",
        DD: "html5-modal-panel",
        qC: "html5-info-bar",
        rA: "autohide-off",
        sA: "autohide-on",
        qA: "autohide-fade",
        oA: "autohide-auto",
        pA: "autohide-embeds",
        tA: "autohide-seekbar",
        nA: "autohide-aspect",
        dC: "hide-controls",
        eC: "hide-info-bar",
        gC: "html5-hide-share",
        hC: "html5-hide-volume",
        fC: "ytp-hide-mouse",
        EE: "video-thumbnail",
        RD: "html5-popup-dialog",
        hA: "html5-async-progress",
        iA: "html5-async-success",
        gA: "html5-async-error",
        HA: "html5-center-overlay",
        bE: "ytp-scalable-icon-shrink",
        aE: "ytp-scalable-icon-grow",
        lC: "house-brand"
    };
    function So(a, b) {
        (a = Tc(a)) && a.style && (Ud(a, b),
        I(a, "hid", !b))
    }
    function To(a) {
        return (a = Tc(a)) ? !("none" == a.style.display || ef(a, "hid")) : !1
    }
    function Uo(a) {
        x(arguments, function(a) {
            So(a, !0)
        })
    }
    function Vo(a) {
        x(arguments, function(a) {
            So(a, !1)
        })
    }
    var Wo = {};
    function Xo(a) {
        if (a in Wo)
            return Wo[a];
        var b;
        if ((b = document.body.style) && a in b)
            b = a;
        else {
            var c = wd();
            c ? (c = c.toLowerCase(),
            c += La(a),
            b = !q(b) || c in b ? c : null) : b = null
        }
        return Wo[a] = b
    }
    function Yo(a, b, c) {
        (a = Tc(a)) && a.style && (b = Xo(b)) && (a.style[b] = c)
    }
    ;var Zo = window.location.protocol + "//i.ytimg.com/"
      , $o = 4 / 3;
    function ap(a, b, c) {
        var d;
        switch (b.md) {
        case 30:
            d = bp;
            break;
        default:
            d = cp
        }
        return d(a, b, c)
    }
    function cp(a, b, c) {
        if (!c) {
            c = a.clientHeight;
            a = a.clientWidth;
            if ((900 < a || 600 < c) && b.Po)
                return b.Po;
            if ((430 < a || 320 < c) && b.Qo)
                return b.Qo
        }
        return b.Di ? b.Di : b.L ? dp(b.L) : ""
    }
    function bp(a, b) {
        return b.Di ? b.Di : b.L ? yk("//docs.google.com/vt", {
            id: b.L,
            authuser: b.Qa,
            authkey: b.bn
        }) : "//docs.google.com/images/doclist/cleardot.gif"
    }
    function dp(a, b) {
        return (Zo + "vi/" + escape(a) + "/" + escape(b || "hqdefault.jpg")).replace("i.", "i" + (a.charCodeAt(0) % 1 + 1) + ".")
    }
    ;function ep() {
        this.b = this.a = null
    }
    function Z(a, b) {
        return Hf(a, b, void 0)
    }
    function fp(a, b, c, d) {
        a.a && gp(a.a, b, c, d)
    }
    ;function hp() {
        Y.call(this, ["div", "ytp-watch-next-card", ["div", "ytp-watch-next-content", ["div", "ytp-watch-next-header", "{{watchnext}}"], ["img", "ytp-watch-next-thumbnail", {
            src: "{{image}}"
        }], ["div", "ytp-watch-next-title", "{{title}}"], ["div", "ytp-watch-next-views", "{{views}}"], ["div", "ytp-watch-next-uploaded", "{{uploaded}}"]]]);
        this.L = null;
        Jo(this.template, "watchnext", Z("YTP_WATCH_NEXT"))
    }
    v(hp, Y);
    function ip(a, b) {
        if (b) {
            a.L = b.id;
            var c = dp(a.L, "default.jpg");
            Jo(a.template, "image", c);
            Jo(a.template, "title", b.title);
            var c = a.template, d;
            d = If("YTP_VIEWS", b.view_count);
            Jo(c, "views", d);
            Uo(a.template.M())
        } else
            Vo(a.template.M())
    }
    hp.prototype.addEventListener = function(a, b, c) {
        hp.D.addEventListener.call(this, a, b, c)
    }
    ;
    function jp(a, b, c, d, e, g, h) {
        a && (a = {
            video_id: a,
            html5: 1,
            page_subscribe: b ? 1 : 0
        },
        g && (a.authuser = g),
        h && (a.pageid = h),
        Hk("/get_video_metadata", {
            method: "GET",
            onError: d,
            onSuccess: c,
            xf: a,
            O: e
        }))
    }
    ;function kp(a, b, c) {
        yo.call(this, a, b);
        this.u = "subscribecard-endscreen";
        this.a = this.o = null;
        this.i = c ? new hp : null;
        this.b = new Ao(this)
    }
    v(kp, yo);
    kp.prototype.create = function() {
        kp.D.create.call(this);
        this.o = new Po;
        this.o.X(this.j);
        this.a = new Qo;
        this.a.X(this.j);
        if (this.i) {
            var a = this.g.getVideoData().Na;
            a && zo(a[0]) && (ip(this.i, a[0]),
            this.i.X(this.j))
        }
        jp(this.g.getVideoData().L, !0, this.A, ca, this, this.g.N().Qa, this.g.N().Za)
    }
    ;
    kp.prototype.A = function(a, b) {
        if (this.C) {
            var c = b.user_info
              , d = this.g.getVideoData();
            d && (d.Ca = c.external_id);
            Jo(this.o.template, "banner", c.channel_banner_url);
            Jo(this.a.template, "image", c.channel_logo_url || c.image_url);
            Jo(this.a.template, "author", c.channel_title || c.username);
            this.i && b.watch_next && (ip(this.i, b.watch_next),
            this.i.X(this.j));
            d = b.video_info;
            d.subscription_ajax_token && Af("subscription_ajax", d.subscription_ajax_token);
            c = c.subscription_button_html;
            this.a.template.a["html5-subscribe-button-container"].innerHTML = c ? c : ""
        }
    }
    ;
    kp.prototype.destroy = function() {
        this.b.removeAll();
        ph(this.a);
        ph(this.i);
        kp.D.destroy.call(this)
    }
    ;
    function lp(a, b, c) {
        c = c || {};
        var d = c.vc;
        d || (d = document.createElement("style"),
        document.getElementsByTagName("head")[0].appendChild(d),
        d = d.sheet || d.styleSheet);
        c.reset && mp(d);
        b = b instanceof Array ? b.join(";") : b;
        d.insertRule ? d.insertRule(a + "{" + b + "}", d.cssRules.length) : d.addRule(a, b, -1);
        return d
    }
    function mp(a) {
        for (var b = (a.cssRules || a.rules).length; 0 < b; b--) {
            var c = a;
            c.deleteRule ? c.deleteRule(0) : c.removeRule(0)
        }
    }
    ;function np(a) {
        this.ca = a
    }
    v(np, nh);
    np.prototype.b = null;
    np.prototype.g = null;
    np.prototype.a = null;
    function op(a) {
        a.b || (a.b = D("ad-container", S(a.ca)),
        a.ca.N().Hb && G(a.b, "ad-container-single-media-element"));
        return a.b
    }
    function pp(a) {
        a.a && (a.ca.N().Hb ? (H(a.a, "ad-video"),
        qp(a.ca.app, a.a),
        a.a = null) : (F(a.a),
        Zj(a.a)))
    }
    function rp(a) {
        if (!a.g) {
            if (a.ca.N().Ub) {
                var b = dd("button");
                G(b, "video-click-tracking");
                gd(b, Hf("VISIT_ADVERTISERS_SITE"));
                var c = dd("div");
                G(c, "video-click-tracking-container");
                c.appendChild(b);
                op(a).appendChild(c)
            } else
                b = dd("div"),
                ff(b, ["video-click-tracking", "ad-video"]),
                op(a).appendChild(b);
            a.g = b
        }
        return a.g
    }
    np.prototype.H = function() {
        np.D.H.call(this);
        this.a && (qp(this.ca.app, this.a),
        this.a = null);
        pp(this);
        hd(op(this));
        hd(rp(this));
        this.g = this.b = null;
        delete this.ca
    }
    ;
    function sp(a) {
        if (!a.a) {
            var b;
            b = a.ca.app;
            if (b.a.Hb) {
                var c;
                c = b.i;
                c = new A(c.offsetLeft,c.offsetTop);
                var d = Qd(b.i);
                b.P = new Hb(c.x,c.y,d.width,d.height);
                tp(b.k);
                ak(b.i, 1);
                Zj(b.i);
                b = b.i
            } else
                b = up.getTag();
            a.a = b;
            ff(a.a, ["video-stream", "ad-video"])
        }
        return a.a
    }
    ;function vp(a, b, c, d) {
        Y.call(this, ["div", {
            className: "ytp-button",
            role: "button",
            "aria-label": "{{label}}",
            "aria-disabled": "{{disabled}}",
            tabindex: "{{tabindex}}"
        }, "{{content}}"]);
        this.o = "inline-block";
        this.I = a;
        this.K = this.a = this.C = null;
        this.i = !1;
        this.listen(this.element, "click", this.Yv);
        this.listen(this.element, "keypress", this.Zv);
        a = this.I;
        var e = t(this.Xv, this);
        a.a && wp(a.a, this.element, e);
        b && xp(this, b);
        c && this.Ab(c);
        d && (this.a = d)
    }
    v(vp, Y);
    function xp(a, b) {
        b && "" != b && (a.C && H(a.element, a.C),
        a.C = b,
        G(a.element, b))
    }
    f = vp.prototype;
    f.Ab = function(a) {
        Jo(this.template, "label", a)
    }
    ;
    function yp(a, b) {
        a.K = b;
        Jo(a.template, "tabindex", b)
    }
    f.Xv = function() {
        return this.i ? null : this.a ? ed(this.a) : null
    }
    ;
    f.enable = function() {
        this.i = !1;
        this.template.update({
            disabled: null,
            tabindex: this.K
        });
        H(this.element, "ytp-disabled")
    }
    ;
    f.disable = function() {
        this.i = !0;
        this.template.update({
            disabled: "true",
            tabindex: null
        });
        G(this.element, "ytp-disabled")
    }
    ;
    f.Yv = function(a) {
        this.i && (a.stopImmediatePropagation(),
        a.preventDefault())
    }
    ;
    f.Zv = function(a) {
        if (13 == a.keyCode || 32 == a.keyCode)
            a.stopPropagation(),
            a.preventDefault(),
            Zf(this.element, "click")
    }
    ;
    f.H = function() {
        var a = this.I;
        if (a.a) {
            var a = a.a
              , b = la(this.element);
            ph(a.a[b]);
            a.a[b] = null
        }
        this.I = null;
        vp.D.H.call(this)
    }
    ;
    function zp(a, b) {
        Y.call(this, ["canvas"]);
        this.element.width = a;
        this.element.height = b;
        this.width = a;
        this.height = b;
        this.O = this.element.getContext("2d");
        this.a = 0;
        this.C = null
    }
    v(zp, Y);
    zp.prototype.g = function(a, b) {
        M(this.a);
        this.a = No(t(this.g, this, a, b), b);
        a.call(this, new Date - this.C)
    }
    ;
    zp.prototype.H = function() {
        M(this.a);
        this.O = null;
        zp.D.H.call(this)
    }
    ;
    function Ap() {
        zp.call(this, 84, 84);
        this.b = this.width / 2;
        this.u = this.height / 2;
        this.i = Bp
    }
    v(Ap, zp);
    var Bp = 3 * Math.PI / 2
      , Cp = 2 * Math.PI;
    function Dp(a, b) {
        var c = b * Cp + Bp;
        a.O.beginPath();
        a.O.arc(a.b, a.u, 40, a.i, c, !1);
        a.O.lineWidth = 4;
        a.O.strokeStyle = "#b8b8b8";
        a.O.stroke();
        a.i = c
    }
    Ap.prototype.show = function() {
        Ap.D.show.call(this);
        this.O.globalAlpha = 0.8;
        this.O.beginPath();
        this.O.arc(this.b, this.u, 42, 0, Cp);
        this.O.fillStyle = "#333";
        this.O.fill();
        var a = Math.sqrt(3) / 2 * 35;
        this.O.save();
        this.O.fillStyle = "#fff";
        this.O.globalAlpha = 0.9;
        this.O.translate(a, this.b);
        this.O.beginPath();
        this.O.lineTo(0, a / 2);
        this.O.lineTo(28, 0);
        this.O.lineTo(0, -a / 2);
        this.O.closePath();
        this.O.fill();
        this.O.restore();
        Dp(this, 0)
    }
    ;
    function Ep(a) {
        var b = Math.abs(Math.floor(a))
          , c = Math.floor(b / 86400)
          , d = Math.floor(b % 86400 / 3600)
          , e = Math.floor(b % 3600 / 60)
          , b = Math.floor(b % 60)
          , g = "";
        0 < c && (g += c + ":",
        10 > d && (g += "0"));
        if (0 < c || 0 < d)
            g += d + ":",
            10 > e && (g += "0");
        g += e + ":";
        10 > b && (g += "0");
        g += b;
        return 0 <= a ? g : "-" + g
    }
    ;function Fp(a, b, c) {
        this.b = a;
        (a = b || null) || (a = Gp(this.b));
        a = "(" + a.join("|") + ")";
        a = xa("__%s__", a);
        this.g = RegExp(a, "g");
        this.a = c || {}
    }
    var Hp = /__([a-z]+(?:_[a-z]+)*)__/g;
    function Ip(a, b) {
        var c = Tc(a).innerHTML
          , c = c.replace(/^\s*(\x3c!--\s*)?/, "")
          , c = c.replace(/(\s*--\x3e)?\s*$/, "");
        return new Fp(c,b,void 0)
    }
    function Gp(a) {
        var b = []
          , c = {};
        a.replace(Hp, function(a, e) {
            e in c || (c[e] = !0,
            b.push(e))
        });
        return b
    }
    function Jp(a, b, c, d) {
        var e = t(function(a, e) {
            c && (e = c(e));
            return d ? b[e] || this.a[e] || "" : Aa(b[e] || this.a[e] || "")
        }, a);
        return a.b.replace(a.g, e)
    }
    ;function Kp(a, b) {
        this.ca = a;
        this.k = b;
        var c = D("videowall-still-content-template", S(this.ca));
        this.A = Ip(c);
        c = dd("a");
        c.tabIndex = 0;
        G(c, "videowall-still");
        N(c, "click", t(this.$v, this));
        N(c, "keypress", t(this.aw, this));
        this.a = c;
        this.u = mi(this.ca).j
    }
    f = Kp.prototype;
    f.update = function(a, b) {
        this.i = a.feature_type || a.feature || "endscreen";
        this.o = a.id || a.video_id;
        this.j = a.list;
        var c = !1
          , d = !1;
        a.endscreen_autoplay || ("episodic" == this.i ? d = !0 : this.j && (c = !0));
        var e = Xb(a);
        c || d ? (e.index = parseInt(e.index, 10) + 1,
        e.title || (e.title = a.playlist_title,
        e.author = a.playlist_author),
        e.playlist_length || (e.playlist_length = 0)) : e.duration = Ep(a.length_seconds);
        var g = dp(c && a.thumbnail_ids ? a.thumbnail_ids.split(",")[0] : this.o, b ? "hqdefault.jpg" : "mqdefault.jpg");
        this.a.style.backgroundImage = "url(" + g + ")";
        this.a.innerHTML = Jp(this.A, e, void 0, !0);
        I(this.a, "videowall-still-featured", !!a.featured);
        I(this.a, "videowall-still-list", c);
        I(this.a, "videowall-still-episodic", d)
    }
    ;
    f.M = function() {
        return this.a
    }
    ;
    f.select = function(a, b) {
        var c = this.ca.app
          , d = this.o
          , e = a ? {
            feature: "autoplay",
            playnext: 1
        } : {
            feature: this.i
        }
          , g = this.j;
        if (!d && !g)
            throw Error("Playback source is invalid");
        d = {
            video_id: d,
            list: g
        };
        c.a.$a || "detailpage" != c.a.Z ? g ? (c.Re = !1,
        Sh(c, d, void 0, void 0, void 0)) : Nh(c, d, 1) : (g = new Lh(d),
        g = Lp(c.a, g.L, g.Pa, {}, void 0),
        n("yt.player.exports.navigate")(g, e, !0),
        c.Dj(g, b))
    }
    ;
    f.mu = function() {
        var a = new Date - this.C;
        1E4 > a ? (Dp(this.b, a / 1E4),
        a = 1E4 - a,
        D("videowall-still-listlabel-autoplay-message", this.a).innerHTML = If("AUTOPLAY_MESSAGE", Math.ceil(a / 1E3))) : (Ef(this.g),
        this.select(!0))
    }
    ;
    f.nu = function(a) {
        var b = sd(a.target, "videowall-still-listlabel-autoplay")
          , c = D("autoplay-play-canvas", this.a);
        G(b, "videowall-still-listlabel-autoplay-hide");
        G(c, "autoplay-play-canvas-hide");
        I(this.a, "videowall-still-autoplay", !1);
        a.stopPropagation();
        this.k.log({
            cancelButtonClick: "1"
        });
        Ef(this.g)
    }
    ;
    f.$v = function(a) {
        this.select(!1, a.ctrlKey)
    }
    ;
    f.aw = function(a) {
        switch (a.keyCode) {
        case 13:
        case 32:
            this.select(),
            a.preventDefault()
        }
    }
    ;
    function Mp(a, b, c) {
        yo.call(this, a, b);
        this.u = "videowall-endscreen";
        this.I = c;
        this.A = [];
        this.a = this.b = null;
        this.F = !1;
        this.o = 0;
        this.Ta.G("onResize", this.iv, this);
        this.Ta.G("videodatachange", this.jv, this)
    }
    v(Mp, yo);
    f = Mp.prototype;
    f.create = function() {
        Mp.D.create.call(this);
        this.a = this.g.getVideoData().Na;
        Np(this)
    }
    ;
    f.destroy = function() {
        this.k && (this.k.innerHTML = "");
        this.a = [];
        Mp.D.destroy.call(this)
    }
    ;
    f.load = function() {
        Mp.D.load.call(this);
        var a = this.g.N();
        if (this.a && this.a.length && this.a[0].endscreen_autoplay) {
            var b = n("yt.www.watch.activity.getTimeSinceActive");
            if ("detailpage" != a.Z || a.Hc || !b || 18E5 > b()) {
                a = Op(this, 0);
                a.b = new Ap;
                G(a.b.element, "autoplay-play-canvas");
                a.b.X(a.a);
                a.b.show();
                I(a.a, "videowall-still-autoplay", !0);
                var b = D("videowall-still-listlabel-autoplay", a.a)
                  , c = new vp(a.u);
                c.X(b);
                xp(c, "videowall-still-listlabel-autoplay-cancel");
                c.wa(Z("YTP_BUTTON_CANCEL"));
                c.show();
                N(c, "click", t(a.nu, a));
                a.k.log({
                    cancelButtonShow: "1"
                });
                a.C = new Date;
                a.g = Df(t(a.mu, a), 50)
            }
        }
    }
    ;
    function Np(a) {
        if (a.C && a.a && a.a.length) {
            I(a.j, "endscreen-enable-layout", !0);
            a.k.innerHTML = "";
            var b = Qd(a.j);
            ef(S(a.g), "ad-showing") && (b.height -= 200);
            b.height -= 30;
            var c = Math.floor(b.width / 158)
              , d = Math.floor(b.height / (158 / 1.45));
            if (1 > d || 1 > c)
                a.o = 0;
            else {
                var e = a.a.length
                  , g = !1;
                zo(a.a[0]) && 2 < d && 2 < c && (g = !0,
                e += 3);
                I(a.k, "feature-video", g);
                for (var h = 0, k = 0, m = Gb(b), p = !0; 0 <= e && (h < c || k < d); ) {
                    var s = e >= k
                      , w = e >= h;
                    if (p && w || !s && w)
                        e -= h,
                        k++;
                    else if (s)
                        e -= k,
                        h++;
                    else
                        break;
                    p = h / k * 1.45 > m
                }
                a.F = p;
                c = new B(h,k);
                a.F ? (d = 1 / c.width,
                b = b.width * d,
                d = b / 1.45) : (d = 1 / c.height,
                d *= b.height,
                b = 1.45 * d);
                b = new B(Math.floor(b),Math.floor(d));
                a.o = c.width * c.height;
                g && (a.o -= 3);
                a.b && mp(a.b);
                g = Pp(b);
                d = {
                    vc: a.b
                };
                a.b = lp(".videowall-still", g, d);
                g = Pp(b.clone().scale(2));
                d.vc = a.b;
                lp(".feature-video .videowall-still:first-child", g, d);
                Md(a.k, b.width * c.width, b.height * c.height)
            }
            g = 0;
            for (b = a.o; g < b; g++)
                c = Op(a, g),
                a.k.appendChild(c.M());
            I(a.j, "endscreen-enable-layout", !1)
        }
    }
    function Op(a, b) {
        var c = a.A[b];
        c || (c = new Kp(a.g,a.I),
        a.A[b] = c);
        c.update(a.a[b], 0 == b && a.a[0].featured);
        return c
    }
    function Pp(a) {
        return ["width:" + a.width + "px", "height:" + a.height + "px"]
    }
    f.iv = function() {
        Np(this)
    }
    ;
    f.jv = function() {
        var a = this.g.getVideoData().Na;
        this.a != a && (this.a = a,
        Np(this))
    }
    ;
    function Qp(a) {
        jo.call(this, a);
        if (a.N().Ji) {
            a = a.N().Xa;
            var b = new kp(this.a,this.C,a);
            a && N(b.i.M(), "click", t(this.dw, this));
            this.Ve = b
        } else
            a.N().xc ? this.Ve = new Mp(this.a,this.C,this) : this.Ve = new yo(this.a,this.C)
    }
    v(Qp, jo);
    f = Qp.prototype;
    f.pa = "endscreen";
    f.dd = "end";
    f.Ve = null;
    function Rp(a) {
        var b = a.N()
          , c = a.getVideoData();
        a = 1 == Q(a.app).getPlayerType();
        return Sp(b) && !Un(c, "ypc_module") && a
    }
    f.eb = function(a) {
        return Rp(a)
    }
    ;
    f.create = function() {
        Qp.D.create.call(this);
        var a = Math.max(1E3 * (this.a.getVideoData().Aa - 10), 0)
          , a = new Rh(a,2147483647,{
            id: "preload"
        })
          , b = new Rh(2147483647,2147483647,{
            id: "load",
            priority: 6
        });
        this.qf(a, b)
    }
    ;
    f.destroy = function() {
        ko(this);
        this.Ve.destroy();
        Qp.D.destroy.call(this)
    }
    ;
    f.load = function() {
        Qp.D.load.call(this);
        this.Ve.load();
        if (this.a.N().Ji && 0.01 > Math.random()) {
            var a = this.a.N().Xa;
            this.log({
                trailerEndscreenShow: 1,
                watchNext: a ? 1 : 0
            })
        }
        this.aa = !0
    }
    ;
    f.unload = function() {
        Qp.D.unload.call(this);
        this.aa = !1
    }
    ;
    f.uc = function(a) {
        Qp.D.uc.call(this, a);
        "preload" == a.getId() ? this.Ve.create() : Tp(this.a.app) || this.load()
    }
    ;
    f.Yc = function(a) {
        "load" == a.getId() && this.unload();
        Qp.D.Yc.call(this, a)
    }
    ;
    f.dw = function(a) {
        var b = this.Ve.i.L
          , b = Lp(this.a.N(), b, null);
        this.B("command_navigate_to_url", b, a.ctrlKey)
    }
    ;
    function Up(a) {
        return Rp(a) ? new Qp(a) : null
    }
    ;var Vp = {
        created: 1,
        ready: 2,
        testing: 4,
        "testing-starting": 3,
        live: 6,
        "live-starting": 5,
        complete: 8,
        "complete-starting": 7
    };
    function Wp(a) {
        ja(l.setImmediate) ? l.setImmediate(a) : (Xp || (Xp = Yp()),
        Xp(a))
    }
    var Xp;
    function Yp() {
        var a = l.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && (a = function() {
            var a = document.createElement("iframe");
            a.style.display = "none";
            a.src = "";
            document.documentElement.appendChild(a);
            var b = a.contentWindow
              , a = b.document;
            a.open();
            a.write("");
            a.close();
            var c = "callImmediate" + Math.random()
              , d = b.location.protocol + "//" + b.location.host
              , a = t(function(a) {
                if (a.origin == d || a.data == c)
                    this.port1.onmessage()
            }, this);
            b.addEventListener("message", a, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    b.postMessage(c, d)
                }
            }
        }
        );
        if ("undefined" !== typeof a) {
            var b = new a
              , c = {}
              , d = c;
            b.port1.onmessage = function() {
                c = c.next;
                var a = c.mq;
                c.mq = null;
                a()
            }
            ;
            return function(a) {
                d.next = {
                    mq: a
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof document && "onreadystatechange"in document.createElement("script") ? function(a) {
            var b = document.createElement("script");
            b.onreadystatechange = function() {
                b.onreadystatechange = null;
                b.parentNode.removeChild(b);
                b = null;
                a();
                a = null
            }
            ;
            document.documentElement.appendChild(b)
        }
        : function(a) {
            l.setTimeout(a, 0)
        }
    }
    ;function Zp(a) {
        Wp(function() {
            throw a;
        })
    }
    function $p(a, b) {
        aq || (Wp(bq),
        aq = !0);
        cq.push(new dq(a,b))
    }
    var aq = !1
      , cq = [];
    function bq() {
        for (; cq.length; ) {
            var a = cq;
            cq = [];
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                try {
                    c.My.call(c.scope)
                } catch (d) {
                    Zp(d)
                }
            }
        }
        aq = !1
    }
    function dq(a, b) {
        this.My = a;
        this.scope = b
    }
    ;function eq(a) {
        a.prototype.then = a.prototype.then;
        a.prototype.$goog_labs_Thenable = !0
    }
    function fq(a) {
        if (!a)
            return !1;
        try {
            return !!a.$goog_labs_Thenable
        } catch (b) {
            return !1
        }
    }
    ;function gq(a, b) {
        this.b = 0;
        this.k = void 0;
        this.a = this.g = null;
        this.i = this.j = !1;
        try {
            var c = this;
            a.call(b, function(a) {
                hq(c, 2, a)
            }, function(a) {
                hq(c, 3, a)
            })
        } catch (d) {
            hq(this, 3, d)
        }
    }
    gq.prototype.then = function(a, b, c) {
        return iq(this, ja(a) ? a : null, ja(b) ? b : null, c)
    }
    ;
    eq(gq);
    gq.prototype.cancel = function(a) {
        0 == this.b && $p(function() {
            var b = new jq(a);
            kq(this, b)
        }, this)
    }
    ;
    function kq(a, b) {
        if (0 == a.b)
            if (a.g) {
                var c = a.g;
                if (c.a) {
                    for (var d = 0, e = -1, g = 0, h; h = c.a[g]; g++)
                        if (h = h.Bi)
                            if (d++,
                            h == a && (e = g),
                            0 <= e && 1 < d)
                                break;
                    0 <= e && (0 == c.b && 1 == d ? kq(c, b) : (d = c.a.splice(e, 1)[0],
                    lq(c, d, 3, b)))
                }
            } else
                hq(a, 3, b)
    }
    function mq(a, b) {
        a.a && a.a.length || 2 != a.b && 3 != a.b || nq(a);
        a.a || (a.a = []);
        a.a.push(b)
    }
    function iq(a, b, c, d) {
        var e = {
            Bi: null,
            Bp: null,
            Cp: null
        };
        e.Bi = new gq(function(a, h) {
            e.Bp = b ? function(c) {
                try {
                    var e = b.call(d, c);
                    a(e)
                } catch (p) {
                    h(p)
                }
            }
            : a;
            e.Cp = c ? function(b) {
                try {
                    var e = c.call(d, b);
                    !q(e) && b instanceof jq ? h(b) : a(e)
                } catch (p) {
                    h(p)
                }
            }
            : h
        }
        );
        e.Bi.g = a;
        mq(a, e);
        return e.Bi
    }
    gq.prototype.o = function(a) {
        this.b = 0;
        hq(this, 2, a)
    }
    ;
    gq.prototype.C = function(a) {
        this.b = 0;
        hq(this, 3, a)
    }
    ;
    function hq(a, b, c) {
        if (0 == a.b) {
            if (a == c)
                b = 3,
                c = new TypeError("Promise cannot resolve to itself");
            else {
                if (fq(c)) {
                    a.b = 1;
                    c.then(a.o, a.C, a);
                    return
                }
                if (ka(c))
                    try {
                        var d = c.then;
                        if (ja(d)) {
                            oq(a, c, d);
                            return
                        }
                    } catch (e) {
                        b = 3,
                        c = e
                    }
            }
            a.k = c;
            a.b = b;
            nq(a);
            3 != b || c instanceof jq || pq(a, c)
        }
    }
    function oq(a, b, c) {
        function d(b) {
            g || (g = !0,
            a.C(b))
        }
        function e(b) {
            g || (g = !0,
            a.o(b))
        }
        a.b = 1;
        var g = !1;
        try {
            c.call(b, e, d)
        } catch (h) {
            d(h)
        }
    }
    function nq(a) {
        a.j || (a.j = !0,
        $p(a.u, a))
    }
    gq.prototype.u = function() {
        for (; this.a && this.a.length; ) {
            var a = this.a;
            this.a = [];
            for (var b = 0; b < a.length; b++)
                lq(this, a[b], this.b, this.k)
        }
        this.j = !1
    }
    ;
    function lq(a, b, c, d) {
        if (2 == c)
            b.Bp(d);
        else {
            for (; a && a.i; a = a.g)
                a.i = !1;
            b.Cp(d)
        }
    }
    function pq(a, b) {
        a.i = !0;
        $p(function() {
            a.i && qq.call(null, b)
        })
    }
    var qq = Zp;
    function jq(a) {
        va.call(this, a)
    }
    v(jq, va);
    jq.prototype.name = "cancel";
    /*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
    function rq(a, b) {
        this.j = [];
        this.F = a;
        this.A = b || null;
        this.i = this.a = !1;
        this.g = void 0;
        this.u = this.I = this.o = !1;
        this.k = 0;
        this.b = null;
        this.C = 0
    }
    f = rq.prototype;
    f.cancel = function(a) {
        if (this.a)
            this.g instanceof rq && this.g.cancel();
        else {
            if (this.b) {
                var b = this.b;
                delete this.b;
                a ? b.cancel(a) : (b.C--,
                0 >= b.C && b.cancel())
            }
            this.F ? this.F.call(this.A, this) : this.u = !0;
            this.a || this.Bd(new sq)
        }
    }
    ;
    f.$m = function(a, b) {
        this.o = !1;
        tq(this, a, b)
    }
    ;
    function tq(a, b, c) {
        a.a = !0;
        a.g = c;
        a.i = !b;
        uq(a)
    }
    function vq(a) {
        if (a.a) {
            if (!a.u)
                throw new wq;
            a.u = !1
        }
    }
    f.Lf = function(a) {
        vq(this);
        tq(this, !0, a)
    }
    ;
    f.Bd = function(a) {
        vq(this);
        tq(this, !1, a)
    }
    ;
    function xq(a, b, c) {
        return yq(a, b, null, c)
    }
    function yq(a, b, c, d) {
        a.j.push([b, c, d]);
        a.a && uq(a);
        return a
    }
    f.then = function(a, b, c) {
        var d, e, g = new gq(function(a, b) {
            d = a;
            e = b
        }
        );
        yq(this, d, function(a) {
            a instanceof sq ? g.cancel() : e(a)
        });
        return g.then(a, b, c)
    }
    ;
    eq(rq);
    function zq(a) {
        var b = new rq;
        yq(a, b.Lf, b.Bd, b);
        return b
    }
    function Aq(a) {
        return Sa(a.j, function(a) {
            return ja(a[1])
        })
    }
    function uq(a) {
        if (a.k && a.a && Aq(a)) {
            var b = a.k
              , c = Bq[b];
            c && (l.clearTimeout(c.Yr),
            delete Bq[b]);
            a.k = 0
        }
        a.b && (a.b.C--,
        delete a.b);
        for (var b = a.g, d = c = !1; a.j.length && !a.o; ) {
            var e = a.j.shift()
              , g = e[0]
              , h = e[1]
              , e = e[2];
            if (g = a.i ? h : g)
                try {
                    var k = g.call(e || a.A, b);
                    q(k) && (a.i = a.i && (k == b || k instanceof Error),
                    a.g = b = k);
                    fq(b) && (d = !0,
                    a.o = !0)
                } catch (m) {
                    b = m,
                    a.i = !0,
                    Aq(a) || (c = !0)
                }
        }
        a.g = b;
        d && (k = t(a.$m, a, !0),
        d = t(a.$m, a, !1),
        b instanceof rq ? (yq(b, k, d),
        b.I = !0) : b.then(k, d));
        c && (c = ++Cq,
        Bq[c] = new Dq(c,b),
        a.k = c)
    }
    function wq() {
        va.call(this)
    }
    v(wq, va);
    wq.prototype.message = "Deferred has already fired";
    wq.prototype.name = "AlreadyCalledError";
    function sq() {
        va.call(this)
    }
    v(sq, va);
    sq.prototype.message = "Deferred was canceled";
    sq.prototype.name = "CanceledError";
    function Dq(a, b) {
        this.Da = a;
        this.a = b;
        this.Yr = l.setTimeout(t(this.b, this), 0)
    }
    Dq.prototype.b = function() {
        delete Bq[this.Da];
        throw this.a;
    }
    ;
    var Bq = {}
      , Cq = 0;
    function Eq(a, b) {
        var c = b || {}
          , d = c.document || document
          , e = dd("SCRIPT")
          , g = {
            Zp: e,
            nc: void 0
        }
          , h = new rq(Fq,g)
          , k = null
          , m = null != c.timeout ? c.timeout : 5E3;
        0 < m && (k = window.setTimeout(function() {
            Gq(e, !0);
            h.Bd(new Hq(1,"Timeout reached for loading script " + a))
        }, m),
        g.nc = k);
        e.onload = e.onreadystatechange = function() {
            e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (Gq(e, c.Rv || !1, k),
            h.Lf(null))
        }
        ;
        e.onerror = function() {
            Gq(e, !0, k);
            h.Bd(new Hq(0,"Error while loading script " + a))
        }
        ;
        Wc(e, {
            type: "text/javascript",
            charset: "UTF-8",
            src: a
        });
        Iq(d).appendChild(e);
        return h
    }
    function Iq(a) {
        var b = a.getElementsByTagName("HEAD");
        return !b || Ya(b) ? a.documentElement : b[0]
    }
    function Fq() {
        if (this && this.Zp) {
            var a = this.Zp;
            a && "SCRIPT" == a.tagName && Gq(a, !0, this.nc)
        }
    }
    function Gq(a, b, c) {
        null != c && l.clearTimeout(c);
        a.onload = ca;
        a.onerror = ca;
        a.onreadystatechange = ca;
        b && window.setTimeout(function() {
            F(a)
        }, 0)
    }
    function Hq(a, b) {
        var c = "Jsloader error (code #" + a + ")";
        b && (c += ": " + b);
        va.call(this, c);
        this.code = a
    }
    v(Hq, va);
    function Jq(a, b) {
        this.b = new Ge(a);
        this.a = b ? b : "callback";
        this.nc = 5E3
    }
    var Kq = 0;
    Jq.prototype.send = function(a, b, c, d) {
        a = a || null;
        d = d || "_" + (Kq++).toString(36) + u().toString(36);
        l._callbacks_ || (l._callbacks_ = {});
        var e = this.b.clone();
        if (a)
            for (var g in a)
                a.hasOwnProperty && !a.hasOwnProperty(g) || Ve(e, g, a[g]);
        b && (l._callbacks_[d] = Lq(d, b),
        Ve(e, this.a, "_callbacks_." + d));
        b = Eq(e.toString(), {
            timeout: this.nc,
            Rv: !0
        });
        yq(b, null, Mq(d, a, c), void 0);
        return {
            Da: d,
            hc: b
        }
    }
    ;
    Jq.prototype.cancel = function(a) {
        a && (a.hc && a.hc.cancel(),
        a.Da && Nq(a.Da, !1))
    }
    ;
    function Mq(a, b, c) {
        return function() {
            Nq(a, !1);
            c && c(b)
        }
    }
    function Lq(a, b) {
        return function(c) {
            Nq(a, !0);
            b.apply(void 0, arguments)
        }
    }
    function Nq(a, b) {
        l._callbacks_[a] && (b ? delete l._callbacks_[a] : l._callbacks_[a] = ca)
    }
    ;function Oq(a) {
        T.call(this);
        this.g = Jp(new Fp("//gdata.youtube.com/feeds/api/users/live/broadcasts/__video_id__/states?v=2&alt=json-in-script"), {
            video_id: a
        });
        this.a = new kj(15E3 + Math.floor(3E4 * Math.random()));
        Wi(this.a, "tick", t(this.b, this));
        this.b();
        this.a.start()
    }
    v(Oq, T);
    Oq.prototype.H = function() {
        this.a.dispose();
        Oq.D.H.call(this)
    }
    ;
    Oq.prototype.b = function() {
        (new Jq(this.g)).send(null, t(this.j, this), t(this.i, this))
    }
    ;
    Oq.prototype.j = function(a) {
        this.B("payload", a);
        lj(this.a, 15E3 + Math.floor(3E4 * Math.random()))
    }
    ;
    Oq.prototype.i = function() {
        this.B("error");
        var a = this.a.a;
        192E4 > a && lj(this.a, 2 * a)
    }
    ;
    function Pq() {
        this.g = new Eo(["div", "html5-fresca-module", ["div", "html5-fresca-band-slate", ["hgroup", "html5-fresca-message", ["h2", "html5-fresca-heading", "{{heading}}"], ["h3", "html5-fresca-subheading", "{{subheading}}"], ["h4", "html5-fresca-long-test", "{{long_text}}"]], ["span", "html5-fresca-countdown", "{{countdown}}"]]]);
        O(this, this.g);
        this.b = this.g.a["html5-fresca-module"];
        G(this.b, "html5-stop-propagation");
        this.i = 0;
        this.a = null
    }
    v(Pq, nh);
    Pq.prototype.M = function() {
        return this.b
    }
    ;
    Pq.prototype.update = function(a) {
        if (!this.k || this.a.a != a.a || this.a.startTime != a.startTime || this.a.g != a.g || this.a.b.join() != a.b.join()) {
            this.a = a;
            this.b.style.backgroundImage = this.a.g || "none";
            a = this.a.b;
            if (!a.length) {
                t: switch (this.a.a) {
                case 6:
                    a = "";
                    break t;
                case 8:
                case 7:
                    a = Hf("FRESCA_COMPLETE_MESSAGE");
                    break t;
                default:
                    a = Hf("FRESCA_STAND_BY_MESSAGE")
                }
                a = [a]
            }
            this.g.update({
                heading: a[0] || "",
                subheading: a[1] || "",
                long_text: a[2] || ""
            });
            this.j()
        }
    }
    ;
    function Qq(a) {
        var b = Math.floor((new Date).valueOf() / 1E3);
        return b > a ? Hf("FRESCA_STARTING_SOON_MESSAGE") : Ep(a - b)
    }
    Pq.prototype.j = function() {
        var a;
        a = this.a;
        a.startTime ? (a = a.a,
        a = 6 == a || 8 == a || 7 == a ? !1 : !0) : a = !1;
        I(this.b, "html5-fresca-show-countdown", a);
        a && (this.g.update({
            countdown: Qq(this.a.startTime)
        }),
        M(this.i),
        this.i = L(t(this.j, this), 1E3))
    }
    ;
    Pq.prototype.H = function() {
        M(this.i);
        this.b = null;
        Pq.D.H.call(this)
    }
    ;
    function Rq(a) {
        this.b = [];
        a && Sq(this, a)
    }
    Rq.prototype.a = -1;
    function Sq(a, b) {
        var c = b.feed;
        if (c) {
            var d = c.yt$lifeCycleState;
            d && (a.a = Vp[d.$t] || -1);
            (d = c.yt$when) && d.start && (d = new Date(d.start),
            a.startTime = Math.floor(d.valueOf() / 1E3));
            if (c = c.yt$slate)
                c.imgUrl && (a.g = "url(" + c.imgUrl + ")"),
                (c = c.content) && c.length && (c = c.splice(0, 3),
                a.b = Ra(c, function(a) {
                    return a.$t
                }))
        }
    }
    ;function Tq(a) {
        jo.call(this, a)
    }
    v(Tq, jo);
    f = Tq.prototype;
    f.pa = "fresca";
    f.dd = "fresca";
    f.gi = !1;
    f.Bg = !1;
    f.eb = function() {
        return Un(this.a.getVideoData(), "fresca_module")
    }
    ;
    f.create = function(a) {
        Tq.D.create.call(this);
        this.gi = this.Bg = !1;
        to(this, ["play_pause", "seek"]);
        this.i = new Pq;
        var b = this.i.M();
        mi(this.a).g.appendChild(b);
        this.g = a || new Oq(this.a.getVideoData().L);
        this.g.G("payload", this.yv, this);
        this.g.G("error", this.xv, this);
        this.G("onStateChange", this.Go, this)
    }
    ;
    f.destroy = function() {
        this.aa && this.unload();
        this.ba("onStateChange", this.Go, this);
        qh(this.g, this.i);
        Tq.D.destroy.call(this)
    }
    ;
    f.load = function() {
        Tq.D.load.call(this);
        this.aa = !0
    }
    ;
    f.unload = function() {
        this.aa = !1;
        Tq.D.unload.call(this)
    }
    ;
    f.Go = function(a) {
        this.b && (this.gi = R(a.a, 2),
        (Uq(a, 16) || this.gi) && Vq(this, this.b))
    }
    ;
    f.xv = function() {
        this.Bg || (this.b = new Rq,
        Vq(this, this.b))
    }
    ;
    f.yv = function(a) {
        this.b = new Rq(a);
        a = this.a.getVideoData();
        6 != this.b.a || a.fa || a.K ? Vq(this, this.b) : this.a.kk(a.L)
    }
    ;
    function Vq(a, b) {
        var c = 6 > b.a;
        !c && a.a.app.b.fa && (b.g || b.b.length) && (c = !0);
        a.gi && !a.a.N().xc && (c = !0);
        if (!a.Bg)
            switch (b.a) {
            case 6:
                a.Bg = !0;
                to(a, ["play_pause", "seek"]);
                lo(a);
                break;
            case 8:
            case 7:
                c = a.Bg = !0
            }
        c && a.i.update(b);
        c && !a.aa ? a.load() : !c && a.aa && a.unload()
    }
    function Wq(a) {
        return Un(a.getVideoData(), "fresca_module") ? new Tq(a) : null
    }
    ;function Xq(a, b, c) {
        this.a = a;
        this.i = b || 0;
        this.b = c;
        this.g = t(this.Su, this)
    }
    v(Xq, nh);
    f = Xq.prototype;
    f.Da = 0;
    f.H = function() {
        Xq.D.H.call(this);
        this.stop();
        delete this.a;
        delete this.b
    }
    ;
    f.start = function(a) {
        this.stop();
        this.Da = mj(this.g, q(a) ? a : this.i)
    }
    ;
    f.stop = function() {
        0 != this.Da && l.clearTimeout(this.Da);
        this.Da = 0
    }
    ;
    f.Su = function() {
        this.Da = 0;
        this.a && this.a.call(this.b)
    }
    ;
    var Yq = {}
      , Zq = null;
    function $q(a) {
        a = la(a);
        delete Yq[a];
        Vb(Yq) && Zq && Zq.stop()
    }
    function ar() {
        Zq || (Zq = new Xq(function() {
            br()
        }
        ,20));
        var a = Zq;
        0 != a.Da || a.start()
    }
    function br() {
        var a = u();
        Lb(Yq, function(b) {
            cr(b, a)
        });
        Vb(Yq) || ar()
    }
    ;function dr() {
        hj.call(this);
        this.a = 0;
        this.endTime = this.startTime = null
    }
    v(dr, hj);
    f = dr.prototype;
    f.Zc = function() {
        this.Qb("begin")
    }
    ;
    f.ee = function() {
        this.Qb("end")
    }
    ;
    f.Rc = function() {
        this.Qb("finish")
    }
    ;
    f.onStop = function() {
        this.Qb("stop")
    }
    ;
    f.Qb = function(a) {
        ij(this, a)
    }
    ;
    function er(a, b, c, d) {
        dr.call(this);
        if (!ga(a) || !ga(b))
            throw Error("Start and end parameters must be arrays");
        if (a.length != b.length)
            throw Error("Start and end points must be the same length");
        this.g = a;
        this.k = b;
        this.duration = c;
        this.j = d;
        this.b = []
    }
    v(er, dr);
    f = er.prototype;
    f.ad = 0;
    f.play = function(a) {
        if (a || 0 == this.a)
            this.ad = 0,
            this.b = this.g;
        else if (1 == this.a)
            return !1;
        $q(this);
        this.startTime = a = u();
        -1 == this.a && (this.startTime -= this.duration * this.ad);
        this.endTime = this.startTime + this.duration;
        this.ad || this.Zc();
        this.Qb("play");
        -1 == this.a && this.Qb("resume");
        this.a = 1;
        var b = la(this);
        b in Yq || (Yq[b] = this);
        ar();
        cr(this, a);
        return !0
    }
    ;
    f.stop = function(a) {
        $q(this);
        this.a = 0;
        a && (this.ad = 1);
        fr(this, this.ad);
        this.onStop();
        this.ee()
    }
    ;
    f.pause = function() {
        1 == this.a && ($q(this),
        this.a = -1,
        this.Qb("pause"))
    }
    ;
    f.H = function() {
        0 == this.a || this.stop(!1);
        this.Qb("destroy");
        er.D.H.call(this)
    }
    ;
    f.destroy = function() {
        this.dispose()
    }
    ;
    function cr(a, b) {
        a.ad = (b - a.startTime) / (a.endTime - a.startTime);
        1 <= a.ad && (a.ad = 1);
        fr(a, a.ad);
        1 == a.ad ? (a.a = 0,
        $q(a),
        a.Rc(),
        a.ee()) : 1 == a.a && a.Al()
    }
    function fr(a, b) {
        ja(a.j) && (b = a.j(b));
        a.b = Array(a.g.length);
        for (var c = 0; c < a.g.length; c++)
            a.b[c] = (a.k[c] - a.g[c]) * b + a.g[c]
    }
    f.Al = function() {
        this.Qb("animate")
    }
    ;
    f.Qb = function(a) {
        ij(this, new gr(a,this))
    }
    ;
    function gr(a, b) {
        Ii.call(this, a);
        this.x = b.b[0];
        this.y = b.b[1];
        this.duration = b.duration
    }
    v(gr, Ii);
    var hr = /#(.)(.)(.)/;
    function ir(a) {
        if (!jr.test(a))
            throw Error("'" + a + "' is not a valid hex color");
        4 == a.length && (a = a.replace(hr, "#$1$1$2$2$3$3"));
        a = a.toLowerCase();
        return [parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)]
    }
    var jr = /^#(?:[0-9a-f]{3}){1,2}$/i;
    function kr(a, b, c, d, e) {
        er.call(this, b, c, d, e);
        this.element = a
    }
    v(kr, er);
    kr.prototype.i = ca;
    kr.prototype.Al = function() {
        this.i();
        kr.D.Al.call(this)
    }
    ;
    kr.prototype.ee = function() {
        this.i();
        kr.D.ee.call(this)
    }
    ;
    kr.prototype.Zc = function() {
        this.i();
        kr.D.Zc.call(this)
    }
    ;
    function lr(a, b, c, d, e) {
        if (2 != b.length || 2 != c.length)
            throw Error("Start and end points must be 2D");
        kr.apply(this, arguments)
    }
    v(lr, kr);
    lr.prototype.i = function() {
        this.element.style.left = Math.round(this.b[0]) + "px";
        this.element.style.top = Math.round(this.b[1]) + "px"
    }
    ;
    function mr(a, b, c, d) {
        lr.call(this, a, [a.offsetLeft, a.offsetTop], b, c, d)
    }
    v(mr, lr);
    mr.prototype.Zc = function() {
        this.g = [this.element.offsetLeft, this.element.offsetTop];
        mr.D.Zc.call(this)
    }
    ;
    function nr(a, b, c, d, e) {
        kr.call(this, a, [b], [c], d, e)
    }
    v(nr, kr);
    nr.prototype.i = function() {
        this.element.style.width = Math.round(this.b[0]) + "px"
    }
    ;
    function or(a, b, c, d, e) {
        ia(b) && (b = [b]);
        ia(c) && (c = [c]);
        kr.call(this, a, b, c, d, e);
        if (1 != b.length || 1 != c.length)
            throw Error("Start and end points must be 1D");
    }
    v(or, kr);
    or.prototype.i = function() {
        Td(this.element, this.b[0])
    }
    ;
    or.prototype.show = function() {
        this.element.style.display = ""
    }
    ;
    or.prototype.hide = function() {
        this.element.style.display = "none"
    }
    ;
    function pr(a, b, c) {
        or.call(this, a, 1, 0, b, c)
    }
    v(pr, or);
    pr.prototype.Zc = function() {
        this.show();
        pr.D.Zc.call(this)
    }
    ;
    pr.prototype.ee = function() {
        this.hide();
        pr.D.ee.call(this)
    }
    ;
    function qr(a, b, c) {
        or.call(this, a, 0, 1, b, c)
    }
    v(qr, or);
    qr.prototype.Zc = function() {
        this.show();
        qr.D.Zc.call(this)
    }
    ;
    function rr(a) {
        return a * a * a
    }
    function sr(a) {
        return 1 - Math.pow(1 - a, 3)
    }
    function tr(a) {
        return 3 * a * a - 2 * a * a * a
    }
    ;function ur(a) {
        return ga(a) && a.length ? a[0] : a
    }
    function vr(a) {
        var b = /.+/;
        return r(a) && null != b && null != a && a.match(b) ? a : ""
    }
    function wr(a, b) {
        if (null == a)
            return b;
        var c = parseInt(a, 0);
        if (isNaN(c))
            return b;
        c = c.toString(16);
        return "#" + "000000".substring(0, 6 - c.length) + c
    }
    function xr(a) {
        return r(a) ? a : ""
    }
    function yr(a, b, c) {
        for (var d in b)
            if (b[d] == a)
                return a;
        return c
    }
    function zr(a, b) {
        return "true" == a || "false" == a ? "true" == a : b
    }
    function Ar(a, b) {
        return r(a) ? parseFloat(a) : b
    }
    function Br(a, b, c, d, e, g) {
        a = 10 == b ? parseFloat(a) : parseInt(a, b);
        if (null != a && !isNaN(a)) {
            if (e)
                return Bb(a, c, d);
            if (a >= c && a <= d)
                return a
        }
        return g
    }
    function Cr(a) {
        if (null == a)
            return 0;
        if ("never" == a)
            return -1;
        a = a.split(":");
        if (3 < a.length)
            return 0;
        var b = 0
          , c = 1;
        x(a, function(a) {
            a = parseFloat(a);
            0 > a && (c = -c);
            b = 60 * b + Math.abs(a)
        });
        return c * b
    }
    function Dr(a, b) {
        if (null == a)
            return null;
        if (ha(a)) {
            var c = [];
            x(a, function(a) {
                (a = b(a)) && c.push(a)
            });
            return c
        }
        var d = b(a);
        return d ? [d] : []
    }
    function Er(a) {
        function b(a) {
            return null != a && !isNaN(a)
        }
        return (a = a ? new Eb(parseFloat(a.top),parseFloat(a.right),parseFloat(a.bottom),parseFloat(a.left)) : null) && b(a.top) && b(a.right) && b(a.bottom) && b(a.left) ? a : null
    }
    function Fr(a) {
        function b(a) {
            return Qa(a.split(/ +/), function(a) {
                return "" != a
            })
        }
        return null == a ? [] : b(a)
    }
    ;function Gr(a, b, c, d) {
        this.value = a;
        this.target = b;
        this.a = c;
        this.b = d
    }
    var Hr = {
        UA: "current",
        HD: "new"
    };
    function Ir(a) {
        return a.value ? a.value : null
    }
    ;function Jr(a) {
        if (!a)
            return !1;
        a = a.replace(/https?:\/\//g, "");
        var b = a.split("/", 1);
        if (!b || 1 > b.length || !b[0])
            return !1;
        b = b[0].toLowerCase().split(".").reverse();
        return 2 > b.length ? !1 : ("com" == b[0] && "youtube" == b[1] || "be" == b[0] && "youtu" == b[1]) && -1 == a.indexOf("/redirect?")
    }
    function Kr(a, b) {
        if ("new" == a.target)
            return -1;
        var c = Ir(a);
        if (!c)
            return -1;
        var c = c.replace(/https?:\/\//g, ""), d;
        (d = !Jr(c)) || (d = ve(c) || "",
        d = d.split("/"),
        d = "/" + (1 < d.length ? d[1] : ""),
        d = "/watch" != d);
        if (d)
            return -1;
        d = wk(c);
        if (!d || d.v != b || d.list || d.p)
            return -1;
        c = c.split("#", 2);
        if (!c || 2 > c.length)
            return -1;
        (c = vk(c[1])) && c.t ? (d = c.t,
        c = 0,
        -1 != d.indexOf("h") && (d = d.split("h"),
        c = 3600 * d[0],
        d = d[1]),
        -1 != d.indexOf("m") && (d = d.split("m"),
        c = 60 * d[0] + c,
        d = d[1]),
        -1 != d.indexOf("s") ? (d = d.split("s"),
        c = 1 * d[0] + c) : c = 1 * d + c) : c = -1;
        return c
    }
    function Lr(a, b, c) {
        return (a = Ir(a)) ? Jr(a) ? Bk(a, {
            src_vid: c,
            feature: "iv",
            annotation_id: b
        }) : a : null
    }
    function Mr(a) {
        return a.target ? "new" == a.target ? "_blank" : "_top" : Jr(Ir(a)) ? "_top" : "_blank"
    }
    ;function Nr(a, b, c) {
        this.ta = c;
        this.element = a;
        this.O = b;
        this.Yb = this.j = !1;
        this.zl = !0;
        this.J = null
    }
    function Or(a) {
        a.O.Ta.G("onHideControls", function() {
            this.zl = !1;
            this.oc()
        }, a);
        a.O.Ta.G("onShowControls", function() {
            this.zl = !0;
            this.oc()
        }, a);
        a.O.Ta.G("onResize", a.oc, a)
    }
    function Pr(a, b, c, d, e, g) {
        b = new Rh(b,c,{
            id: d
        });
        b.namespace = "iv-module";
        b.Ta.G("onEnter", e || a.Nl, a);
        b.Ta.G("onExit", g || a.Ol, a);
        a.O.Ta.B("command_add_cuerange", [b], a.O.He.getPlayerType())
    }
    f = Nr.prototype;
    f.Nl = function() {}
    ;
    f.Ol = function() {}
    ;
    function Qr(a, b) {
        var c = E("div", "annotation-x-button-container")
          , d = E("div", "annotation-x-button");
        c.appendChild(d);
        a.O.b.listen(c, "click", t(function(a) {
            Rr(this.O.rf, this.ta);
            b(a);
            a.stopPropagation();
            this.Yb = !0
        }, a));
        return c
    }
    f.M = function() {
        return this.element
    }
    ;
    function Sr(a, b, c, d, e) {
        Do(a.O.b, b, "click", function(a) {
            a.stopPropagation();
            a.preventDefault();
            var b = Lr(c, d, this.O.da.L);
            a = t(function() {
                this.O.He.pauseVideo();
                window.open(b, Mr(c))
            }, this);
            Jr(Ir(c)) && "new" != c.target || (a(),
            a = null);
            this.ta || e ? Tr(this.O.rf, this.ta || e, a) : a && a();
            return !1
        }, "iv-click-target", a)
    }
    f.show = function() {}
    ;
    f.hide = function() {}
    ;
    f.destroy = function() {
        F(this.element)
    }
    ;
    function Ur(a) {
        a.J || (a.J = D("html5-title"));
        return a.J
    }
    f.oc = function() {}
    ;
    function Vr(a, b, c) {
        Nr.call(this, a, b, c);
        this.a = null;
        this.b = !1;
        this.Zk = null;
        this.$k = !1
    }
    v(Vr, Nr);
    f = Vr.prototype;
    f.Og = function(a) {
        var b = Sd(a).width
          , b = new lr(a,[a.offsetLeft, 0],[a.offsetLeft + b, 0],200,rr);
        Wi(b, "end", qa(Vo, a));
        b.play()
    }
    ;
    f.pi = function(a, b, c) {
        var d = Sd(a).width;
        b = b || d;
        c = c || 0;
        Bd(a, b);
        c = new lr(a,[b, a.offsetTop],[b - d - c, a.offsetTop],200,rr);
        Wi(c, "begin", qa(Uo, a));
        c.play()
    }
    ;
    function Wr(a) {
        var b = a.ta.data;
        Od(a.element, 400);
        a.a = E("img", {
            src: b.image_url,
            "class": "branding-img iv-click-target iv-view-target hid",
            width: b.image_width,
            height: b.image_height
        });
        var c = E("div", "branding-img-container", a.a);
        a.element.appendChild(c);
        var d = E("div", "iv-branding-context-name");
        md(d, b.channel_name);
        var e = E("div", "iv-branding-context-subscribe");
        a.ta.g ? e.innerHTML = a.ta.g : b.num_subscribers && md(e, b.num_subscribers);
        c = E("div", "iv-branding-context-subscribe-caret");
        d = E("div", "branding-context-container-inner iv-view-target", c, d, e);
        e = E("div", "branding-context-container-outer", d);
        Vo(d);
        a.element.appendChild(e);
        Sr(a, a.element, Xr(a.ta), a.ta.id);
        a.Zk = new Xq(qa(function(a) {
            this.Og(a);
            this.$k = !1
        }, d),500,a);
        Do(a.O.b, a.element, "mouseover", qa(function(a, b, c) {
            this.Zk.stop();
            if (!this.$k) {
                var d = Qd(a);
                Od(a, d.width);
                c = Math.min(d.height, c) / 2 - 10;
                Bd(b, d.width, c);
                this.$k = !0;
                this.pi(a, 246, 9)
            }
        }, d, c, b.image_height), "iv-view-target", a);
        Do(a.O.b, a.element, "mouseout", qa(function() {
            this.Zk.start()
        }), "iv-view-target", a)
    }
    f.Nl = function() {
        this.show()
    }
    ;
    f.Ol = function() {
        this.hide()
    }
    ;
    f.show = function() {
        this.j || (this.b || (Wr(this),
        this.b = !0),
        this.oc(),
        Yr(this.O.rf, this.ta),
        Uo(this.element),
        this.j = !0,
        this.pi(this.a))
    }
    ;
    f.hide = function() {
        this.j && (Vo(this.element),
        this.j = !1)
    }
    ;
    f.oc = function() {
        var a = this.O.a.pb
          , b = this.O.a.Qc;
        if (a && b) {
            var a = a.width - b.left - 400 - 20
              , c = Ur(this)
              , c = c ? Qd(c).height : 0;
            Bd(this.element, a, -b.top + 20 + c)
        }
    }
    ;
    function Zr(a, b, c, d) {
        this.id = a;
        this.title = b.title;
        this.description = b.description;
        this.a = b.image_url;
        this.url = c;
        this.Tc = b.start_ms;
        this.g = b.end_ms;
        this.b = b.custom_message;
        this.ta = d
    }
    ;function $r(a) {
        this.b = a;
        this.a = {}
    }
    v($r, nh);
    var as = [];
    f = $r.prototype;
    f.listen = function(a, b, c, d) {
        ga(b) || (as[0] = b,
        b = as);
        for (var e = 0; e < b.length; e++) {
            var g = Wi(a, b[e], c || this.handleEvent, d || !1, this.b || this);
            if (!g)
                break;
            this.a[g.key] = g
        }
        return this
    }
    ;
    f.Ib = function(a, b, c, d, e) {
        if (ga(b))
            for (var g = 0; g < b.length; g++)
                this.Ib(a, b[g], c, d, e);
        else
            c = c || this.handleEvent,
            e = e || this.b || this,
            c = Xi(c),
            d = !!d,
            b = Li(a) ? Si(a.Fd, String(b), c, d, e) : a ? (a = Zi(a)) ? Si(a, b, c, d, e) : null : null,
            b && (dj(b),
            delete this.a[b.key]);
        return this
    }
    ;
    f.removeAll = function() {
        Lb(this.a, dj);
        this.a = {}
    }
    ;
    f.H = function() {
        $r.D.H.call(this);
        this.removeAll()
    }
    ;
    f.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    }
    ;
    function bs() {
        dr.call(this);
        this.b = []
    }
    v(bs, dr);
    bs.prototype.add = function(a) {
        y(this.b, a) || (this.b.push(a),
        Wi(a, "finish", this.i, !1, this))
    }
    ;
    bs.prototype.remove = function(a) {
        ab(this.b, a) && cj(a, "finish", this.i, !1, this)
    }
    ;
    bs.prototype.H = function() {
        x(this.b, function(a) {
            a.dispose()
        });
        this.b.length = 0;
        bs.D.H.call(this)
    }
    ;
    function cs() {
        bs.call(this);
        this.g = 0
    }
    v(cs, bs);
    cs.prototype.play = function(a) {
        if (0 == this.b.length)
            return !1;
        if (a || 0 == this.a)
            this.g = 0,
            this.Zc();
        else if (1 == this.a)
            return !1;
        this.Qb("play");
        -1 == this.a && this.Qb("resume");
        var b = -1 == this.a && !a;
        this.startTime = u();
        this.endTime = null;
        this.a = 1;
        x(this.b, function(c) {
            b && -1 != c.a || c.play(a)
        });
        return !0
    }
    ;
    cs.prototype.pause = function() {
        1 == this.a && (x(this.b, function(a) {
            1 == a.a && a.pause()
        }),
        this.a = -1,
        this.Qb("pause"))
    }
    ;
    cs.prototype.stop = function(a) {
        x(this.b, function(b) {
            0 == b.a || b.stop(a)
        });
        this.a = 0;
        this.endTime = u();
        this.onStop();
        this.ee()
    }
    ;
    cs.prototype.i = function() {
        this.g++;
        this.g == this.b.length && (this.endTime = u(),
        this.a = 0,
        this.Rc(),
        this.ee())
    }
    ;
    function ds(a) {
        this.value = a
    }
    ;function es(a, b, c, d) {
        this.type = a;
        this.trigger = b;
        this.url = c;
        this.duration = d
    }
    var fs = {
        Cy: "close",
        GC: "log",
        LD: "openUrl",
        PAUSE: "pause",
        Hy: "subscribe"
    }
      , gs = {
        CLICK: "click",
        Cy: "close",
        Ey: "hidden",
        $D: "rollOut",
        Fy: "rollOver",
        Gy: "shown"
    };
    function hs(a) {
        if (!a)
            return null;
        var b = yr(a.type, fs), c = yr(a.trigger, gs), d;
        if (d = ur(a.url)) {
            var e = xr(d.value);
            if (e && null != wk(e)) {
                var g = yr(d.target, Hr, "current");
                d = null == g ? null : new Gr(e,g,xr(d.link_class),zr(d.show_link_icon, !0))
            } else
                d = null
        } else
            d = null;
        ur(a.subscribeData);
        (a = ur(a.duration)) ? (a = Cr(a.value),
        a = new ds(a)) : a = null;
        return b ? new es(b,c,d,a) : null
    }
    ;function is(a, b, c, d, e, g, h, k, m, p, s, w, z, X) {
        this.k = a;
        this.j = b;
        this.o = c;
        this.C = d;
        this.g = e;
        this.A = g;
        this.i = h;
        this.textAlign = k;
        this.F = m;
        this.u = p;
        this.padding = s;
        this.a = w;
        this.b = z;
        this.I = X
    }
    function js(a) {
        if (!a)
            return null;
        var b = wr(a.fgColor, "#1A1A1A")
          , c = wr(a.bgColor, "#FFF")
          , d = wr(a.borderColor, "#000")
          , e = Br(a.borderWidth, 10, 0, 5, !1, 0)
          , g = Br(a.bgAlpha, 10, 0, 1, !1, 0.8);
        Br(a.borderAlpha, 10, 0, 1, !1, 0.2);
        Br(a.gloss, 16, 0, 255, !1, 0);
        var h = wr(a.highlightFontColor, "#F2F2F2")
          , k = Br(a.highlightWidth, 10, 0, 5, !1, 3)
          , m = xr(a.textAlign)
          , p = Br(a.textSize, 10, 3.3, 30.1, !0, 3.6107)
          , s = xr(a.fontWeight)
          , w = Er(a.padding)
          , z = Fr(a.effects)
          , X = Br(a.cornerRadius, 10, 0, 10, !0, 0);
        var J = ur(a.gradient);
        if (J) {
            a = Br(J.x1, 10, 0, 100, !0, 0);
            var U = Br(J.y1, 10, 0, 100, !0, 0)
              , Nd = Br(J.x2, 10, 0, 100, !0, 100)
              , Zk = Br(J.y2, 10, 0, 100, !0, 100)
              , BH = wr(J.color1, "#FFF")
              , CH = wr(J.color2, "#000")
              , DH = Br(J.opacity1, 10, 0, 100, !0, 100)
              , J = Br(J.opacity2, 10, 0, 100, !0, 0);
            a = new ks(a,U,Nd,Zk,BH,CH,DH,J)
        } else
            a = null;
        return new is(b,c,d,e,g,h,k,m,p,s,w,z,X,a)
    }
    function ks(a, b, c, d, e, g, h, k) {
        this.j = a;
        this.o = b;
        this.k = c;
        this.C = d;
        this.a = e;
        this.b = g;
        this.g = h;
        this.i = k
    }
    ;function ls(a, b) {
        this.a = a;
        this.L = b
    }
    ;var ms = {
        $E: "xx",
        aF: "xy",
        cF: "yx",
        dF: "yy"
    };
    function ns(a, b, c) {
        var d = a.C
          , e = a.u
          , g = a.a ? a.a : "xy"
          , h = os(c, a.j, g);
        a = ps(c, a.g, g);
        var g = 640 * b.width * h / 100
          , k = 360 * b.height * a / 100;
        return new Hb(0 == d ? 640 * b.left * h / 100 : 0 < d ? d : c.width + d - g,0 == e ? 360 * b.top * a / 100 : 0 < e ? e : c.height + e - k,g,k)
    }
    function os(a, b, c) {
        var d = (c = "xx" == c || "xy" == c) ? 640 : 360;
        return (d + ((c ? a.width : a.height) - d) * b) / d
    }
    function ps(a, b, c) {
        var d = (c = "xy" == c || "yy" == c) ? 360 : 640;
        return (d + ((c ? a.height : a.width) - d) * b) / d
    }
    ;function qs(a, b, c, d, e, g, h, k, m, p, s) {
        this.x = a;
        this.y = b;
        this.k = c;
        this.i = d;
        this.b = e;
        this.o = g;
        this.C = h;
        this.u = k;
        this.j = m;
        this.g = p;
        this.a = s
    }
    function rs(a, b) {
        if (!a)
            return null;
        var c = Ar(a.x, 0)
          , d = Ar(a.y, 0)
          , e = Ar(a.w, 0)
          , g = Ar(a.h, 0)
          , h = Cr(a.t)
          , k = Ar(a.scaleSlope, 1);
        return b(c, d, e, g, h, Ar(a.d, 0), Ar(a.px, 0), Ar(a.py, 0), Ar(a.scaleSlopeX, k), Ar(a.scaleSlopeY, k), yr(a.scaleDimension, ms, "xy"))
    }
    function ss(a, b, c) {
        c = c ? ss(c, b) : null;
        a = ns(a, new Hb(a.x,a.y,a.k,a.i), b);
        c ? (a.top += c.top,
        a.left += c.left) : (a.top += b.top,
        a.left += b.left);
        c = a.clone();
        b && !b.contains(a) && (a.width < b.width ? c.left = Bb(a.left, b.left, b.left + b.width - a.width) : (c.left = b.left,
        c.width = b.width),
        a.height < b.height ? c.top = Bb(a.top, b.top, b.top + b.height - a.height) : (c.top = b.top,
        c.height = b.height));
        return c
    }
    function ts(a) {
        return a ? rs(a, function(a, c, d, e, g, h, k, m, p, s, w) {
            return new qs(a,c,d,e,g,h,k,m,p,s,w)
        }) : null
    }
    ;function us(a, b, c, d, e, g, h, k, m, p, s, w, z) {
        qs.call(this, a, b, c, d, e, k, m, p, s, w, z);
        this.A = g;
        this.F = h
    }
    v(us, qs);
    function vs(a) {
        if (!a)
            return null;
        var b = Ar(a.sx, 0)
          , c = Ar(a.sy, 0);
        return rs(a, function(a, e, g, h, k, m, p, s, w, z, X) {
            return new us(a,e,g,h,k,b,c,m,p,s,w,z,X)
        })
    }
    ;function ws(a, b, c) {
        this.type = a;
        this.b = b;
        this.a = c
    }
    var xs = {
        zy: "anchored",
        WD: "rect"
    };
    function ys(a) {
        if (!a)
            return null;
        var b = yr(a.type, xs, "rect")
          , c = Dr(a.rectRegion, ts);
        a = Dr(a.anchoredRegion, vs);
        return new ws(b,c,a)
    }
    function zs(a) {
        return a.b && a.b.length ? a.b[0] : a.a && a.a.length ? a.a[0] : null
    }
    ;function As(a, b) {
        this.b = a;
        this.a = b
    }
    ;function Bs(a, b) {
        this.b = a;
        this.a = b
    }
    var Cs = {
        CLOSED: "closed",
        ND: "playerControlShow",
        Fy: "rollOver",
        Gy: "shown"
    };
    function Ds(a) {
        if (!a)
            return null;
        var b = yr(a.state, Cs);
        a = vr(a.ref);
        return b ? new Bs(b,a) : null
    }
    ;function Es(a, b, c, d) {
        this.a = a || [];
        this.g = b || [];
        this.i = c;
        this.b = d;
        this.value = !1
    }
    function Fs(a) {
        if (!a)
            return null;
        var b = Dr(a.condition, Ds)
          , c = Dr(a.notCondition, Ds)
          , d = zr(a.show_delay, !1);
        a = zr(a.hide_delay, !1);
        return b || c ? new Es(b,c,d,a) : null
    }
    function Gs(a, b, c) {
        x(a.a, qa(b, !1), c);
        x(a.g, qa(b, !0), c)
    }
    ;function Hs(a, b, c, d, e, g, h, k, m, p, s, w, z, X, J) {
        this.id = a;
        this.type = b;
        this.style = c;
        this.o = d;
        this.b = e;
        this.j = g || [];
        this.A = h || [];
        this.a = k;
        this.F = m;
        this.i = p;
        this.C = s;
        this.k = w;
        this.g = z;
        this.data = X;
        this.u = J
    }
    var Is = {
        zy: "anchored",
        By: "branding",
        KA: "channel",
        ZB: "fundraising",
        jC: "highlightText",
        wC: "label",
        PD: "playlist",
        QD: "popup",
        TD: "product",
        eE: "speech",
        Hy: "subscribe",
        oE: "title",
        VIDEO: "video",
        XE: "website"
    }
      , Js = {
        VA: "custom",
        iC: "highlight",
        IMAGE: "image",
        PAUSE: "pause",
        TEXT: "text",
        YE: "widget"
    }
      , Ks = {
        DE: "video_relative",
        OD: "player_relative"
    };
    function Ls(a) {
        if (!a)
            return null;
        var b = vr(a.id);
        vr(a.author);
        var c = yr(a.type, Js), d = yr(a.style, Is), e = xr(ur(a.TEXT)), g = xr(a.data), g = 0 != g.length ? sb(g) : {}, h;
        var k = ur(a.segment);
        k ? (vr(k.timeRelative),
        h = vr(k.spaceRelative),
        h = (k = Dr(k.movingRegion, ys)) ? new As(h,k) : null) : h = null;
        var k = Dr(a.action, hs)
          , m = Dr(a.trigger, Fs)
          , p = js(ur(a.appearance));
        p || (p = js({}));
        var s = yr(a.coordinate_system, Ks, "video_relative"), w;
        w = (w = ur(a.image_source)) ? new ls(xr(w.standard_url),xr(w.video_id)) : null;
        var z = zr(a.closeable, !0)
          , X = zr(a.logable, !0)
          , J = xr(a.html_blob);
        a = xr(a.log_data);
        return b && c ? new Hs(b,c,d,e,h,k,m,p,s,w,z,X,J,g,a) : null
    }
    function Xr(a) {
        return (a = Ms(a, function(a) {
            return "openUrl" == a.type && null != a.url
        })) ? a.url : null
    }
    function Ns(a) {
        return Os(a, function(a) {
            return null != a.url && a.url.b
        })
    }
    function Ps(a) {
        return Os(a, function(a) {
            return "click" == a.trigger
        })
    }
    function Os(a, b) {
        return Sa(a.j, b, void 0)
    }
    function Qs(a, b, c) {
        x(a.j, b, c)
    }
    function Ms(a, b) {
        return Ua(a.j, b, void 0)
    }
    function Rs(a, b, c) {
        x(a.A, b, c)
    }
    function Ss(a, b) {
        Ra(a.A, b, void 0)
    }
    function Ts(a) {
        return (a = Us(a)) ? zs(a) : null
    }
    function Us(a) {
        a.b ? (a = a.b,
        a = a.a.length ? a.a[0] : null) : a = null;
        return a
    }
    function Vs(a, b) {
        var c = Ts(a);
        return c && b ? ps(b, c.g, c.a ? c.a : "xy") : 1
    }
    ;function Ws(a, b) {
        this.g = a;
        this.b = b;
        this.a = {}
    }
    function Yr(a, b) {
        if (b && b.k) {
            var c = Xs(a, b, 2);
            a.a[b.id] = c["p-time"];
            a.log_(c)
        }
    }
    function Tr(a, b, c, d) {
        b && b.k && Xr(b) && (d = Xs(a, b, 3, d),
        d["i-time"] = a.a[b.id] || "",
        a.log_(d, c))
    }
    function Rr(a, b, c) {
        b && b.k && (c = Xs(a, b, 4, c),
        c["i-time"] = a.a[b.id] || "",
        a.log_(c))
    }
    function Xs(a, b, c, d) {
        var e = {};
        e["iv-event"] = c;
        e["a-id"] = b.id;
        e["a-type"] = Ys(b);
        if (c = Xr(b))
            e.link = escape(Ir(c)),
            c.a && (e["l-class"] = c.a);
        e["p-time"] = a.b.getCurrentTime().toFixed(2);
        e.ps = a.b.N().cb;
        if (b.u) {
            var g = new Me(b.u);
            x(g.mc(), function(a) {
                e[a] = g.get(a)
            })
        }
        e["a-type"] = d || e["a-type"];
        return e
    }
    function Ys(a) {
        switch (a.type) {
        case "text":
            switch (a.style) {
            case "popup":
                return 1;
            case "speech":
                return 2;
            case "anchored":
                return 8;
            case "label":
                return 9;
            case "title":
                return 4;
            default:
                return 0
            }
        case "highlight":
            return 3;
        case "image":
            switch (a.style) {
            case "video":
                return 11;
            case "channel":
                return 10;
            default:
                return 0
            }
        default:
            return 0
        }
    }
    Ws.prototype.log_ = function(a, b) {
        this.g.B("command_log", "iv", a, b)
    }
    ;
    function Zs(a, b) {
        Nr.call(this, a, b);
        this.Q = !1;
        this.P = E("div", "iv-cards-thumbnails");
        this.C = E("div", "iv-cards-background", E("div"), E("button", void 0, E("div")));
        this.k = E("div");
        this.A = E("span");
        this.i = E("div", "iv-cards-notif iv-cards-notif-inactive", void 0, this.k, E("button", {
            type: "button"
        }, E("div", void 0, this.A)));
        this.b = E("div", "iv-cards-details");
        this.a = [];
        this.I = null;
        this.u = -1;
        this.F = [];
        this.g = -1;
        this.K = !1;
        this.pd = {
            Em: null,
            Kj: new Xq(function() {
                this.pd.Em.play();
                this.pd.enabled = !1
            }
            ,3E3,this),
            enabled: !1
        };
        this.o = !1;
        Lc(this.element, "iv-cards");
        Pr(this, 1E3 * this.O.da.Aa - 1200, 2147483647, "", this.ir)
    }
    v(Zs, Nr);
    f = Zs.prototype;
    f.init = function() {
        Ud(this.C, !1);
        this.element.appendChild(this.C);
        Wi(this.C, "click", this.Yn, !1, this);
        this.element.appendChild(this.P);
        Ud(this.b, !1);
        this.element.appendChild(this.b);
        this.element.appendChild(this.i);
        this.oc();
        $s(this.i);
        this.O.b.listen(this.i, "click", this.rw, this);
        this.O.b.listen(this.i, "mouseover", function() {
            this.pd.Kj.stop()
        }, this);
        this.O.b.listen(this.i, "mouseout", function() {
            this.pd.enabled && this.pd.Kj.start()
        }, this);
        Uo(this.element)
    }
    ;
    f.add = function(a) {
        this.Q || (this.init(),
        this.Q = !0);
        var b = E("button", {
            type: "button"
        });
        xd(b, "background-image", 'url("' + a.a + '")');
        Ud(b, !1);
        var c = Lr(a.url, a.id, this.O.da.L)
          , c = E("a", {
            "class": "iv-click-target yt-uix-button yt-uix-button-primary yt-uix-button-size-default",
            href: c,
            role: "button"
        }, E("span", "yt-uix-button-content", a.b))
          , c = E("div", "iv-cards-content-container", E("h2", void 0, a.title), E("p", void 0, a.description), c);
        Sr(this, c, a.url, a.id, a.ta);
        var c = E("article", void 0, E("div", "iv-cards-image", E("img", {
            src: a.a
        })), c)
          , d = {
            Lh: a,
            gk: c,
            vf: b
        }
          , e = jb(this.a, d, function(a, b) {
            return a.Lh.Tc - b.Lh.Tc
        });
        0 > e && (e = -(e + 1));
        gb(this.a, e, 0, d);
        jd(this.P, b, e);
        jd(this.b, c, e);
        d = qa(this.Wu, d);
        this.O.b.listen(b, "click", d, this);
        this.O.b.listen(c, "click", d, this);
        Pr(this, a.Tc, 2147483647, a.id, this.$u, this.Zu);
        Pr(this, a.Tc, a.g, a.id, qa(this.Xu, a), this.Yu)
    }
    ;
    f.Wu = function(a, b) {
        var c = Va(this.a, function(b) {
            return b === a
        });
        at(this, c);
        b.stopPropagation()
    }
    ;
    f.$u = function() {
        this.u++
    }
    ;
    f.Zu = function() {
        this.u--
    }
    ;
    f.Xu = function(a) {
        this.F.push(a);
        bt(this, this.F.length);
        var b = 1E3 * this.O.He.getCurrentTime();
        a.Tc - 500 < b && a.Tc + 500 > b && !this.pd.enabled && (this.oc(),
        this.k.innerHTML = "",
        b = E("span", "iv-cards-image"),
        xd(b, "background-image", 'url("' + a.a + '")'),
        gd(this.k, b, E("span", "iv-cards-notif-text", a.title)),
        Od(this.k, ""),
        a = this.k.offsetWidth,
        (new nr(this.k,0,a,400,tr)).play(),
        this.pd.Em = new nr(this.k,a,0,200,tr),
        this.pd.enabled = !0,
        this.pd.Kj.start())
    }
    ;
    f.Yu = function() {
        this.F.pop();
        bt(this, this.F.length)
    }
    ;
    function bt(a, b) {
        0 == b ? (a.A.innerHTML = "",
        Lc(a.i, "iv-cards-notif-inactive")) : (10 > b ? a.A.innerHTML = b : a.A.innerHTML = "*",
        Mc(a.i, "iv-cards-notif-inactive"))
    }
    f.rw = function() {
        if (!this.o) {
            var a = new cs;
            Md(this.element, this.O.a.pb);
            for (var b = 0; b < this.a.length; ++b) {
                var c = this.a[b].vf;
                a.add($s(c));
                Td(c, 0);
                Ud(c, !0);
                a.add(ct(c, b * (c.offsetWidth + 15)))
            }
            2 == this.O.He.getPlayerState() ? this.K = !0 : (this.K = !1,
            this.O.He.pauseVideo());
            a.add(dt(this.i));
            a.add($s(this.C));
            for (b = 0; b < this.a.length; ++b)
                c = 200,
                b == this.u && (c *= 2),
                a.add($s(this.a[b].gk, c));
            this.o = !0;
            bj(a, "end", this.eo, !1, this);
            a.play();
            this.b.style.width = 570 * this.a.length + "px";
            Ud(this.b, !0);
            Td(this.b, 1);
            this.oc();
            a = Math.max(0, this.u);
            at(this, a);
            Tr(this.O.rf, this.a[a].Lh.ta, null, 50);
            this.I = this.O.b.listen(this.element, "keydown", this.Ou, this)
        }
    }
    ;
    f.eo = function() {
        this.o = !1
    }
    ;
    f.Ou = function(a) {
        switch (a.keyCode) {
        case 27:
            this.Yn();
            break;
        case 37:
            0 < this.g && at(this, this.g - 1);
            break;
        case 39:
            this.g + 1 < this.a.length && at(this, this.g + 1);
            break;
        case 9:
            at(this, this.g + 1 < this.a.length ? this.g + 1 : 0)
        }
        a.stopPropagation();
        a.preventDefault();
        return !1
    }
    ;
    f.Yn = function() {
        if (!this.o) {
            var a = new cs;
            x(this.a, function(b) {
                a.add(dt(b.vf));
                a.add(ct(b.vf, 0))
            });
            a.add(dt(this.C));
            a.add($s(this.i));
            a.add(dt(this.b, function() {
                Md(this.element, "", "")
            }, this));
            this.o = !0;
            bj(a, "end", this.eo, !1, this);
            a.play();
            var b = Math.max(0, this.u);
            Rr(this.O.rf, this.a[b].Lh.ta, 50);
            this.K || this.O.He.playVideo();
            this.I && this.O.b.Ib(this.I)
        }
    }
    ;
    f.ir = function() {
        "none" != this.b.style.display && this.O.He.pauseVideo()
    }
    ;
    function at(a, b) {
        var c = a.a[b];
        c.vf.focus();
        if (a.g != b) {
            if (0 <= a.g) {
                var d = a.a[a.g];
                Mc(d.vf, "yt-uix-button-toggled");
                Mc(d.gk, "iv-active-card")
            }
            a.g = b;
            Lc(c.vf, "yt-uix-button-toggled");
            Lc(c.gk, "iv-active-card");
            ct(a.b, et(a).x).play()
        }
    }
    function et(a) {
        var b = a.O.a.pb
          , c = Qd(a.b);
        return new A(570 * -(isNaN(void 0) ? a.g || 0 : NaN) + (b.width - 570) / 2,(b.height - c.height - 63) / 2 + 63)
    }
    function ct(a, b) {
        return new mr(a,[b, a.offsetTop],200,tr)
    }
    function dt(a, b, c) {
        a = new pr(a,200,tr);
        b && bj(a, "end", b, !1, c);
        return a
    }
    function $s(a, b) {
        var c = new qr(a,b || 200,tr);
        bj(c, "end", qa(function(a, b) {
            xd(a, "opacity", "");
            b.target.H()
        }, a));
        return c
    }
    f.oc = function() {
        if (this.O.a.Qc && this.O.a.pb) {
            To(this.b) && (Md(this.element, this.O.a.pb),
            Bd(this.b, et(this)));
            var a = Ur(this)
              , a = a ? Qd(a).height : 0;
            Bd(this.element, -this.O.a.Qc.left, -this.O.a.Qc.top + a);
            this.i.style.right = -this.O.a.pb.width + "px"
        }
    }
    ;
    function ft(a, b, c, d, e, g) {
        this.b = a;
        this.a = b;
        this.da = c;
        this.rf = d;
        this.He = e;
        this.Ta = g
    }
    ;function gt(a) {
        var b = [];
        x(a, function(a) {
            a = new Xq(qa(a.Bw, a.element),a.time,this);
            b.push(a)
        }, this);
        this.a = b
    }
    gt.prototype.play = function() {
        x(this.a, function(a) {
            a.start()
        })
    }
    ;
    gt.prototype.stop = function() {
        x(this.a, function(a) {
            a.stop()
        })
    }
    ;
    function ht(a, b, c) {
        Nr.call(this, a, b, c);
        this.a = E("div", "invideo-video-text-container");
        this.g = !1;
        this.b = null
    }
    v(ht, Nr);
    f = ht.prototype;
    f.Sv = function(a) {
        (new lr(a,[a.offsetLeft, a.offsetTop],[a.offsetLeft, a.offsetTop - a.offsetHeight - 10],300,sr)).play()
    }
    ;
    function it(a, b) {
        var c = new lr(b,[b.offsetLeft, b.offsetTop],[b.offsetLeft, b.offsetTop + b.offsetHeight + 4],300,rr);
        Wi(c, "end", t(function() {
            this.j = !1;
            Vo(this.element)
        }, a));
        c.play()
    }
    f.Og = function(a) {
        var b = Sd(a).width;
        Bd(a, -b);
        Uo(a);
        (new lr(a,[a.offsetLeft, 0],[a.offsetLeft + b, 0],300,rr)).play()
    }
    ;
    f.pi = function(a) {
        var b = Sd(a).width;
        Bd(a, 0);
        b = new lr(a,[a.offsetLeft, a.offsetTop],[a.offsetLeft - b, a.offsetTop],300,rr);
        Wi(b, "end", function() {
            Vo(a)
        });
        b.play()
    }
    ;
    function jt(a, b, c, d) {
        return {
            time: b,
            Bw: t(c, a),
            element: d
        }
    }
    function kt(a) {
        Md(a.element, 380, 40);
        var b = a.ta.data
          , c = {
            src: b.image_url,
            "class": "invideo-video-img iv-click-target"
        }
          , d = E("div", "invideo-video-img-container")
          , c = E("img", c);
        c.style.height = Cd(40, !0);
        d.appendChild(c);
        b.playlist_length && (c = E("div", "invideo-playlist-length iv-click-target"),
        md(c, b.playlist_length),
        d.appendChild(c));
        a.element.appendChild(d);
        Md(a.a, 280, 40);
        var d = E("div", "iv-text-slot")
          , e = E("div", "iv-text-slot");
        a.a.appendChild(d);
        a.a.appendChild(e);
        c = E("span", "iv-text-line1 iv-click-target");
        md(c, b.text_line_1);
        Vo(c);
        d.appendChild(c);
        var g = E("span", "iv-text-line2 iv-click-target");
        md(g, b.text_line_2);
        Vo(g);
        e.appendChild(g);
        a.element.appendChild(a.a);
        e = Qr(a, t(function() {
            this.hide()
        }, a));
        a.element.appendChild(e);
        var e = [jt(a, 0, a.Sv, a.element)]
          , h = 0;
        b.text_line_custom && (h = E("span", "iv-text-line1 iv-text-context iv-click-target"),
        md(h, b.text_line_custom),
        Vo(h),
        d.appendChild(h),
        e.push(jt(a, 300, a.Og, h), jt(a, 3E3, a.pi, h)),
        h = 3250);
        e.push(jt(a, h + 300, a.Og, c), jt(a, 600, a.Og, g));
        a.b = new gt(e);
        Sr(a, a.element, Xr(a.ta), a.ta.id)
    }
    f.Nl = function() {
        this.show()
    }
    ;
    f.Ol = function() {
        this.hide()
    }
    ;
    f.show = function() {
        this.j || (this.g || (kt(this),
        this.g = !0),
        this.oc(),
        Uo(this.element),
        Yr(this.O.rf, this.ta || null),
        this.j = !0,
        this.b.play())
    }
    ;
    f.hide = function() {
        if (this.j) {
            this.b.stop();
            it(this, this.element);
            var a = Vc("span", void 0, this.a);
            x(a, Vo)
        }
    }
    ;
    f.oc = function() {
        var a = this.O.a.Qc
          , b = this.O.a.pb;
        if (a && b) {
            var c = Qd(this.element)
              , d = b.height - a.top
              , b = c.width < b.width && c.height < b.height
              , e = this.O.a.$a ? 35 : 5
              , e = this.zl ? e : 0;
            Bd(this.element, -a.left, this.j && b ? d - c.height - e - 10 : d)
        }
    }
    ;
    function lt(a, b, c) {
        this.a = {};
        this.b = !1;
        this.j = "ivTrigger:" + a;
        this.g = c;
        Gs(b, function(a, b) {
            var c = mt(b.b, b.a);
            this.g.G(c, t(this.i, this, c, a));
            this.a[c] = a
        }, this)
    }
    lt.prototype.i = function(a, b, c, d) {
        this.a[a] = b ? !c : c;
        a = Nb(this.a, function(a) {
            return a
        });
        this.b != a && (this.b = a,
        this.g.B(this.j, a, d))
    }
    ;
    function mt(a, b) {
        var c = "ivTriggerCondition:" + a;
        return b ? c + ":" + b : c
    }
    ;function nt(a, b, c) {
        this.i = a;
        this.ta = b;
        this.b = c;
        this.a = null;
        this.Yb = this.isVisible = !1;
        ot(b, a)
    }
    function ot(a, b) {
        Ss(a, function(c) {
            return new lt(a.id,c,b)
        })
    }
    nt.prototype.hide = function() {
        this.isVisible = !1;
        this.i.ba("onResize", this.g, this);
        this.b.hide()
    }
    ;
    nt.prototype.show = function() {
        this.isVisible = !0;
        this.b.show();
        this.i.G("onResize", this.g, this)
    }
    ;
    nt.prototype.destroy = function() {
        this.i.ba("onResize", this.g, this);
        var a = this.b;
        a.b.removeAll();
        a.g && F(a.g);
        a.i && a.i.M() && F(a.i.M());
        pt(this)
    }
    ;
    function pt(a) {
        a.a && (a.a.stop(),
        a.a = null)
    }
    nt.prototype.g = function() {
        qt(this.b)
    }
    ;
    function rt() {}
    ;function st(a, b, c, d, e, g, h, k) {
        this.j = a;
        this.o = b;
        this.k = c;
        this.C = d;
        this.a = e;
        this.b = g;
        this.g = q(h) ? h : null;
        this.i = q(k) ? k : null
    }
    v(st, rt);
    function tt() {
        this.ya = [];
        this.Y = [];
        this.Jd = []
    }
    tt.prototype.Nf = null;
    tt.prototype.fd = null;
    tt.prototype.$i = !0;
    var ut = [2, 2, 6, 6, 0];
    f = tt.prototype;
    f.clear = function() {
        this.ya.length = 0;
        this.Y.length = 0;
        this.Jd.length = 0;
        delete this.Nf;
        delete this.fd;
        delete this.$i;
        return this
    }
    ;
    function vt(a, b, c) {
        0 == Na(a.ya) ? a.Jd.length -= 2 : (a.ya.push(0),
        a.Y.push(1));
        a.Jd.push(b, c);
        a.fd = a.Nf = [b, c]
    }
    f.La = function(a) {
        var b = Na(this.ya);
        if (null == b)
            throw Error("Path cannot start with lineTo");
        1 != b && (this.ya.push(1),
        this.Y.push(0));
        for (b = 0; b < arguments.length; b += 2) {
            var c = arguments[b]
              , d = arguments[b + 1];
            this.Jd.push(c, d)
        }
        this.Y[this.Y.length - 1] += b / 2;
        this.fd = [c, d]
    }
    ;
    f.close = function() {
        var a = Na(this.ya);
        if (null == a)
            throw Error("Path cannot start with close");
        4 != a && (this.ya.push(4),
        this.Y.push(1),
        this.fd = this.Nf);
        return this
    }
    ;
    function wt(a, b, c, d, e) {
        var g = a.fd[0] - b * Math.cos(d * Math.PI / 180)
          , h = a.fd[1] - c * Math.sin(d * Math.PI / 180)
          , g = g + b * Math.cos((d + e) * Math.PI / 180)
          , h = h + c * Math.sin((d + e) * Math.PI / 180);
        a.ya.push(3);
        a.Y.push(1);
        a.Jd.push(b, c, d, e, g, h);
        a.$i = !1;
        a.fd = [g, h]
    }
    function xt(a, b) {
        for (var c = a.Jd, d = 0, e = 0, g = a.ya.length; e < g; e++) {
            var h = a.ya[e]
              , k = ut[h] * a.Y[e];
            b(h, c.slice(d, d + k));
            d += k
        }
    }
    f.clone = function() {
        var a = new this.constructor;
        a.ya = this.ya.concat();
        a.Y = this.Y.concat();
        a.Jd = this.Jd.concat();
        a.Nf = this.Nf && this.Nf.concat();
        a.fd = this.fd && this.fd.concat();
        a.$i = this.$i;
        return a
    }
    ;
    f.isEmpty = function() {
        return 0 == this.ya.length
    }
    ;
    function zt(a, b) {
        this.u = a;
        this.A = null == b ? 1 : b
    }
    v(zt, rt);
    function At(a, b) {
        this.a = a;
        this.b = b
    }
    ;function Bt() {}
    da(Bt);
    Bt.prototype.a = 0;
    function Ct(a) {
        hj.call(this);
        this.o = a || Qc()
    }
    v(Ct, hj);
    f = Ct.prototype;
    f.qw = Bt.getInstance();
    f.Da = null;
    f.We = !1;
    f.U = null;
    f.Ui = null;
    f.Wi = null;
    f.Vi = null;
    f.getId = function() {
        return this.Da || (this.Da = ":" + (this.qw.a++).toString(36))
    }
    ;
    f.M = function() {
        return this.U
    }
    ;
    f.Pl = function(a) {
        if (this.Ui && this.Ui != a)
            throw Error("Method not supported");
        Ct.D.Pl.call(this, a)
    }
    ;
    f.Fp = function() {
        this.U = this.o.createElement("div")
    }
    ;
    f.ah = function() {
        Dt(this, function(a) {
            a.We && a.ah()
        });
        this.j && this.j.removeAll();
        this.We = !1
    }
    ;
    f.H = function() {
        this.We && this.ah();
        this.j && (this.j.dispose(),
        delete this.j);
        Dt(this, function(a) {
            a.dispose()
        });
        this.U && F(this.U);
        this.Ui = this.U = this.Vi = this.Wi = null;
        Ct.D.H.call(this)
    }
    ;
    function Dt(a, b) {
        a.Wi && x(a.Wi, b, void 0)
    }
    f.removeChild = function(a, b) {
        if (a) {
            var c = r(a) ? a : a.getId();
            a = this.Vi && c ? Wb(this.Vi, c) || null : null;
            if (c && a) {
                var d = this.Vi;
                c in d && delete d[c];
                ab(this.Wi, a);
                b && (a.ah(),
                a.U && F(a.U));
                c = a;
                if (null == c)
                    throw Error("Unable to set parent component");
                c.Ui = null;
                Ct.D.Pl.call(c, null)
            }
        }
        if (!a)
            throw Error("Child is not in parent component");
        return a
    }
    ;
    function Et(a, b, c, d, e) {
        Ct.call(this, e);
        this.width = a;
        this.height = b;
        this.g = c || null;
        this.k = d || null
    }
    v(Et, Ct);
    Et.prototype.b = null;
    Et.prototype.Wg = function() {
        return this.We ? Pd(this.M()) : ia(this.width) && ia(this.height) ? new B(this.width,this.height) : null
    }
    ;
    function Ft(a) {
        var b = a.Wg();
        return b ? b.width / (a.g ? new B(a.g,a.k) : a.Wg()).width : 0
    }
    Et.prototype.resume = function() {}
    ;
    function Gt(a, b) {
        hj.call(this);
        this.U = a;
        this.Pj = b;
        this[Ki] = !1
    }
    v(Gt, hj);
    f = Gt.prototype;
    f.Pj = null;
    f.U = null;
    f.M = function() {
        return this.U
    }
    ;
    f.addEventListener = function(a, b, c, d) {
        Wi(this.U, a, b, c, d)
    }
    ;
    f.removeEventListener = function(a, b, c, d) {
        cj(this.U, a, b, c, d)
    }
    ;
    f.H = function() {
        Gt.D.H.call(this);
        var a = this.U;
        if (a)
            if (Li(a))
                a.removeAllListeners(void 0);
            else if (a = Zi(a)) {
                var b = 0, c;
                for (c in a.a)
                    for (var d = eb(a.a[c]), e = 0; e < d.length; ++e)
                        dj(d[e]) && ++b
            }
    }
    ;
    function Ht(a, b, c, d) {
        Gt.call(this, a, b);
        a = this.Pj;
        b = this.M();
        c ? (b.setAttribute("stroke", c.b),
        c = c.a,
        r(c) && -1 != c.indexOf("px") ? b.setAttribute("stroke-width", parseFloat(c) / Ft(a)) : b.setAttribute("stroke-width", c)) : b.setAttribute("stroke", "none");
        c = this.Pj;
        a = this.M();
        if (d instanceof zt)
            a.setAttribute("fill", d.u),
            a.setAttribute("fill-opacity", d.A);
        else if (d instanceof st) {
            b = "lg-" + d.j + "-" + d.o + "-" + d.k + "-" + d.C + "-" + d.a + "-" + d.b;
            var e = It(c, b);
            if (!e) {
                var e = Jt(c, "linearGradient", {
                    x1: d.j,
                    y1: d.o,
                    x2: d.k,
                    y2: d.C,
                    gradientUnits: "userSpaceOnUse"
                })
                  , g = "stop-color:" + d.a;
                ia(d.g) && (g += ";stop-opacity:" + d.g);
                g = Jt(c, "stop", {
                    offset: "0%",
                    style: g
                });
                e.appendChild(g);
                g = "stop-color:" + d.b;
                ia(d.i) && (g += ";stop-opacity:" + d.i);
                d = Jt(c, "stop", {
                    offset: "100%",
                    style: g
                });
                e.appendChild(d);
                e = Kt(c, b, e)
            }
            a.setAttribute("fill", "url(#" + e + ")")
        } else
            a.setAttribute("fill", "none")
    }
    v(Ht, Gt);
    function Lt(a, b) {
        Gt.call(this, a, b)
    }
    v(Lt, Gt);
    function Mt(a, b) {
        Gt.call(this, a, b)
    }
    v(Mt, Gt);
    function Nt(a, b, c, d) {
        Ht.call(this, a, b, c, d)
    }
    v(Nt, Ht);
    function Ot(a, b) {
        Gt.call(this, a, b)
    }
    v(Ot, Lt);
    Ot.prototype.clear = function() {
        hd(this.M())
    }
    ;
    function Pt(a, b, c, d) {
        Ht.call(this, a, b, c, d)
    }
    v(Pt, Nt);
    function Qt(a, b) {
        Gt.call(this, a, b)
    }
    v(Qt, Mt);
    function Rt(a, b, c, d, e) {
        Et.call(this, a, b, c, d, e);
        this.a = {};
        this.C = oc && !Cc(526);
        this.u = new $r(this)
    }
    var St;
    v(Rt, Et);
    var Tt = 0;
    function Jt(a, b, c) {
        a = a.o.a.createElementNS("http://www.w3.org/2000/svg", b);
        if (c)
            for (var d in c)
                a.setAttribute(d, c[d]);
        return a
    }
    f = Rt.prototype;
    f.Fp = function() {
        var a = Jt(this, "svg", {
            width: this.width,
            height: this.height,
            overflow: "hidden"
        })
          , b = Jt(this, "g");
        this.i = Jt(this, "defs");
        this.b = new Ot(b,this);
        a.appendChild(this.i);
        a.appendChild(b);
        this.U = a;
        this.g && (this.M().setAttribute("preserveAspectRatio", "none"),
        this.C ? this.So() : this.M().setAttribute("viewBox", "0 0 " + (this.g ? this.g + " " + this.k : "")))
    }
    ;
    f.So = function() {
        if (this.We) {
            var a = this.Wg();
            if (0 == a.width)
                this.M().style.visibility = "hidden";
            else {
                this.M().style.visibility = "";
                var b = a.width / this.g
                  , a = a.height / this.k;
                this.b.M().setAttribute("transform", "scale(" + b + " " + a + ") translate(0 0)")
            }
        }
    }
    ;
    f.Wg = function() {
        if (!nc)
            return this.We ? Pd(this.M()) : Rt.D.Wg.call(this);
        var a = this.width
          , b = this.height
          , c = r(a) && -1 != a.indexOf("%")
          , d = r(b) && -1 != b.indexOf("%");
        if (!this.We && (c || d))
            return null;
        var e, g;
        c && (e = this.M().parentNode,
        g = Qd(e),
        a = parseFloat(a) * g.width / 100);
        d && (e = e || this.M().parentNode,
        g = g || Qd(e),
        b = parseFloat(b) * g.height / 100);
        return new B(a,b)
    }
    ;
    f.clear = function() {
        this.b.clear();
        hd(this.i);
        this.a = {}
    }
    ;
    function Ut(a, b, c, d) {
        b = Jt(a, "path", {
            d: Vt(b)
        });
        c = new Pt(b,a,c,d);
        a.b.M().appendChild(c.M())
    }
    function Vt(a) {
        var b = [];
        xt(a, function(a, d) {
            switch (a) {
            case 0:
                b.push("M");
                Array.prototype.push.apply(b, d);
                break;
            case 1:
                b.push("L");
                Array.prototype.push.apply(b, d);
                break;
            case 2:
                b.push("C");
                Array.prototype.push.apply(b, d);
                break;
            case 3:
                var e = d[3];
                b.push("A", d[0], d[1], 0, 180 < Math.abs(e) ? 1 : 0, 0 < e ? 1 : 0, d[4], d[5]);
                break;
            case 4:
                b.push("Z")
            }
        });
        return b.join(" ")
    }
    function Kt(a, b, c) {
        if (b in a.a)
            return a.a[b];
        var d = "_svgdef_" + Tt++;
        c.setAttribute("id", d);
        a.a[b] = d;
        a.i.appendChild(c);
        return d
    }
    function It(a, b) {
        return b in a.a ? a.a[b] : null
    }
    f.ah = function() {
        Rt.D.ah.call(this);
        this.C && this.u.Ib(Wt(), "tick", this.So)
    }
    ;
    f.H = function() {
        delete this.a;
        delete this.i;
        delete this.b;
        Rt.D.H.call(this)
    }
    ;
    function Wt() {
        St || (St = new kj(400),
        St.start());
        return St
    }
    ;function Xt(a, b, c) {
        this.a = a;
        this.b = 0;
        this.o = b;
        this.C = c || 70;
        this.g = !1
    }
    Xt.prototype.start = function(a) {
        this.k = u();
        this.b = a;
        this.j = this.k + this.b;
        this.g = !0;
        Uo(this.a);
        Ef(this.i);
        this.i = Df(t(this.u, this), this.C)
    }
    ;
    Xt.prototype.stop = function() {
        this.g = !1;
        Vo(this.a);
        this.i && Ef(this.i)
    }
    ;
    Xt.prototype.u = function() {
        if (this.g) {
            var a = u(), b;
            b = 0 == this.b || a >= this.j ? 0 : 1 - (a - this.k) / this.b;
            var c = D("countdowntimer-diminishing-pieslice", this.a)
              , d = qf("svg", this.a);
            !d && this.a.querySelectorAll && (d = this.a.querySelectorAll("svg"),
            d = d.length ? d[0] : null);
            var d = parseInt(d.getAttribute("width"), 10)
              , e = new tt
              , g = d / 2 - 5;
            vt(e, d / 2, d / 2);
            e.La(d / 2, 5);
            wt(e, g, g, -90, 360 * -b);
            e.La(d / 2, d / 2);
            e.close();
            c.setAttribute("d", Vt(e));
            a >= this.j && (this.stop(),
            this.o && this.o())
        }
    }
    ;
    function Yt() {
        this.element = this.a = null;
        this.priority = 0;
        this.b = this.o = !1;
        this.k = null
    }
    v(Yt, nh);
    Yt.prototype.A = function() {}
    ;
    Yt.prototype.listen = function(a, b, c) {
        return this.element.listen(this.element, a, b, c || this)
    }
    ;
    Yt.prototype.Ib = function(a) {
        this.element.Ib(a)
    }
    ;
    function Zt(a, b, c) {
        Y.call(this, ["div", "ytp-segmented-control"]);
        this.g = a;
        this.b = -1;
        this.a = [];
        q(b) && $t(this, b, c)
    }
    v(Zt, Y);
    function $t(a, b, c) {
        qh(a.a);
        a.a = [];
        for (var d = 0; d < b.length; d++) {
            var e = new vp(a.g);
            a.a[d] = e;
            c ? e.wa(["div", b[d]]) : e.wa(b[d]);
            0 != d && G(e.M(), "ytp-segmented-control-other");
            au(e, d == a.b);
            N(e, "click", t(a.kv, a));
            e.X(a.element)
        }
    }
    f = Zt.prototype;
    f.X = function(a, b) {
        Zt.D.X.call(this, a, b);
        for (var c = 0, d = 0; d < this.a.length; d++)
            c = Math.max(c, Pd(this.a[d].M()).width);
        if (c)
            for (d = 0; d < this.a.length; d++)
                Od(this.a[d].M(), c)
    }
    ;
    f.Ia = function(a) {
        this.b = a;
        for (var b = 0; b < this.a.length; b++)
            au(this.a[b], b == a)
    }
    ;
    f.getSelected = function() {
        return this.b
    }
    ;
    function au(a, b) {
        if (b) {
            var c = a.M();
            H(c, "ytp-segmented-control-deselected");
            G(c, "ytp-segmented-control-selected")
        } else
            c = a.M(),
            H(c, "ytp-segmented-control-selected"),
            G(c, "ytp-segmented-control-deselected")
    }
    f.kv = function(a) {
        for (var b = 0; b < this.a.length; b++)
            if (this.a[b] == a.currentTarget) {
                b != this.b && (this.Ia(b),
                Zf(this.element, "change"));
                break
            }
    }
    ;
    f.H = function() {
        $t(this, []);
        this.g = null;
        Zt.D.H.call(this)
    }
    ;
    function bu(a) {
        Yt.call(this);
        this.a = Z("YTP_ANNOTATIONS_TITLE");
        this.element = new Zt(a,[Z("YTP_ON"), Z("YTP_OFF")]);
        O(this, this.element);
        this.priority = 2;
        this.Ia(1)
    }
    v(bu, Yt);
    bu.prototype.getSelected = function() {
        return this.element.getSelected()
    }
    ;
    bu.prototype.Ia = function(a) {
        this.element.Ia(a)
    }
    ;
    function cu(a, b) {
        this.start = a < b ? a : b;
        this.end = a < b ? b : a
    }
    cu.prototype.clone = function() {
        return new cu(this.start,this.end)
    }
    ;
    function du() {
        this.a = !1;
        this.U = this.g = null
    }
    function eu(a, b, c) {
        a.g ? (Md(a.g.M(), b, c),
        a.g.clear()) : (b = new Rt(b,c,void 0,void 0,void 0),
        a.g = b,
        a.g.Fp(),
        a.U = E("div"),
        b = a.g.M(),
        a.U.appendChild(b));
        return a.g
    }
    du.prototype.M = function() {
        return this.U
    }
    ;
    du.prototype.b = function() {}
    ;
    function fu(a, b, c) {
        var d = document.createElementNS("http://www.w3.org/2000/svg", a);
        b && Lb(b, function(a, b) {
            d.setAttribute(b, a)
        });
        for (var e = 2; e < arguments.length; e++)
            d.appendChild(arguments[e]);
        return d
    }
    function gu(a, b) {
        var c;
        c = ":" + (Bt.getInstance().a++).toString(36);
        b.setAttribute("result", c);
        a.appendChild(b);
        return c
    }
    ;function hu(a, b) {
        var c = gu(a, fu("feGaussianBlur", {
            "in": b,
            stdDeviation: "1.8"
        }))
          , c = gu(a, fu("feDiffuseLighting", {
            "in": c,
            surfaceScale: "4",
            diffuseConstant: "1"
        }, fu("feDistantLight", {
            azimuth: "270",
            elevation: "15",
            "lighting-color": "white"
        })))
          , c = gu(a, fu("feComposite", {
            "in": c,
            in2: b,
            operator: "in"
        }));
        return gu(a, fu("feComposite", {
            in2: c,
            "in": b,
            operator: "arithmetic",
            k2: 1,
            k3: 0.5,
            k4: 0
        }))
    }
    function iu(a, b) {
        var c = gu(a, fu("feOffset", {
            "in": b,
            dx: "-7",
            dy: "-7"
        }))
          , c = gu(a, fu("feGaussianBlur", {
            "in": c,
            stdDeviation: "3"
        }))
          , c = gu(a, fu("feColorMatrix", {
            "in": c,
            type: "matrix",
            values: "0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0"
        }))
          , d = gu(a, fu("feColorMatrix", {
            "in": b,
            type: "matrix",
            values: "0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 100 0"
        }))
          , d = gu(a, fu("feGaussianBlur", {
            "in": d,
            stdDeviation: "1"
        }))
          , c = gu(a, fu("feComposite", {
            operator: "out",
            "in": c,
            in2: d
        }));
        return gu(a, fu("feComposite", {
            operator: "over",
            "in": b,
            in2: c
        }))
    }
    function ju(a, b) {
        return b
    }
    function ku(a) {
        var b = fu("filter", {
            filterUnits: "userSpaceOnUse"
        })
          , c = "SourceGraphic";
        x(a, function(a) {
            t: {
                switch (a) {
                case "bevel":
                    a = hu;
                    break t;
                case "dropshadow":
                    a = iu;
                    break t
                }
                a = ju
            }
            c = a(b, c)
        });
        return b
    }
    function lu(a) {
        a = Qa(a, function(a) {
            return a in mu
        });
        nb(a, function(a, c) {
            return mu[a] - mu[c]
        });
        return a
    }
    function nu(a) {
        return Ua(a, function(a) {
            return "dropshadow" == a
        }) ? new Eb(0,7,7,0) : new Eb(0,0,0,0)
    }
    var mu = {
        bevel: 1,
        dropshadow: 2
    };
    function ou(a, b, c, d, e) {
        b = pu(b, c, d ? d.a / 2 + 1 : 0);
        Ut(a, b, d, e)
    }
    function pu(a, b, c) {
        var d = new tt;
        vt(d, a.left + b + c, a.top + c);
        d.La(a.left + a.width - b - c, a.top + c);
        wt(d, b, b, -90, 90);
        d.La(a.left + a.width - c, a.top + a.height - b - c);
        wt(d, b, b, 0, 90);
        d.La(a.left + b + c, a.top + a.height - c);
        wt(d, b, b, 90, 90);
        d.La(a.left + c, a.top + b + c);
        wt(d, b, b, 180, 90);
        d.close();
        return d
    }
    function qu(a, b, c, d) {
        var e = a.I;
        e ? a = new st(e.j * b / 100,e.o * c / 100,e.k * b / 100,e.C * c / 100,e.a,e.b,e.g,e.i) : (b = ru(d, a.g),
        a = new zt(a.j,b));
        return a
    }
    function ru(a, b) {
        return a ? Math.max(b, 0.9) : b
    }
    function su(a, b) {
        var c = new Eb(a.top,a.left + a.width,a.top + a.height,a.left)
          , d = nu(b);
        ka(d) ? (c.top -= d.top,
        c.right += d.right,
        c.bottom += d.bottom,
        c.left -= d.left) : (c.top -= d,
        c.right += void 0,
        c.bottom += void 0,
        c.left -= NaN);
        return Ib(c)
    }
    function tu(a, b, c) {
        if (c.length && (b = Vc("g", void 0, b),
        b.length)) {
            var d = lu(c);
            if (d) {
                c = "effects:" + (d ? d.join("|") : "");
                var e = It(a, c);
                e ? a = e : (d = ku(d),
                a = 0 < d.childNodes.length ? Kt(a, c, d) : null)
            } else
                a = null;
            a && b[0].setAttribute("filter", "url(#" + a + ")")
        }
    }
    ;function uu() {
        du.call(this);
        this.i = 0
    }
    v(uu, du);
    uu.prototype.b = function(a, b, c) {
        var d = a.a
          , e = d.C
          , g = this.a && Ps(a)
          , e = (e += g ? 1 : 0) ? new At(e,g ? d.k : d.o) : null;
        if (g = Ts(a)) {
            var h = ss(g, b, c);
            if (!(0 >= h.width || 0 >= h.height)) {
                var k;
                if (k = (a = (a = Us(a)) && a.a ? a.a : null) && a.length ? a[0] : null) {
                    var m;
                    c = c ? ss(c, b) : null;
                    a = ns(k, new Hb(k.A,k.F,k.k,k.i), b);
                    c ? (a.top += c.top,
                    a.left += c.left) : (a.top += b.top,
                    a.left += b.left);
                    m = new A(a.left,a.top);
                    c = h.clone();
                    a = new Hb(m.x,m.y,1,1);
                    var g = Math.max(c.left + c.width, a.left + a.width)
                      , p = Math.max(c.top + c.height, a.top + a.height);
                    c.left = Math.min(c.left, a.left);
                    c.top = Math.min(c.top, a.top);
                    c.width = g - c.left;
                    c.height = p - c.top;
                    c = su(c, d.a);
                    a = eu(this, c.width, c.height);
                    var g = qu(d, c.width, c.height, this.a)
                      , h = new Hb(h.left - c.left,h.top - c.top,h.width,h.height)
                      , s = new A(m.x - c.left,m.y - c.top);
                    this.i = 17 * ps(b, k.g, k.a ? k.a : "xy");
                    b = d.b;
                    k = e ? e.a / 2 : 0;
                    m = vu(h, s);
                    var p = this.j(h, b, s, m)
                      , w = s.x
                      , s = s.y
                      , z = h.width
                      , X = h.height
                      , J = h.left
                      , h = h.top
                      , U = new tt;
                    vt(U, J + b + k, h + k);
                    "t" == m && (U.La(p.start, h + k),
                    U.La(w, s),
                    U.La(p.end, h + k));
                    U.La(J + z - b - k, h + k);
                    wt(U, b, b, -90, 90);
                    "r" == m && (U.La(J + z - k, p.start),
                    U.La(w, s),
                    U.La(J + z - k, p.end));
                    U.La(J + z - k, h + X - b - k);
                    wt(U, b, b, 0, 90);
                    "b" == m && (U.La(p.end, h + X - k),
                    U.La(w, s),
                    U.La(p.start, h + X - k));
                    U.La(J + b + k, h + X - k);
                    wt(U, b, b, 90, 90);
                    "l" == m && (U.La(J + k, p.end),
                    U.La(w, s),
                    U.La(J + k, p.start));
                    U.La(J + k, h + b + k);
                    wt(U, b, b, 180, 90);
                    U.close();
                    Ut(a, U, e, g);
                    if (e = this.M())
                        G(e, "annotation-shape"),
                        G(e, "annotation-speech-shape"),
                        Bd(e, c.left, c.top),
                        Md(e, c.width, c.height),
                        tu(a, e, d.a)
                }
            }
        }
    }
    ;
    function vu(a, b) {
        var c = a.top - b.y
          , d = b.x - a.left - a.width
          , e = b.y - a.top - a.height
          , g = a.left - b.x
          , h = Math.max(c, d, e, g);
        if (0 > h)
            return "i";
        switch (h) {
        case c:
            return "t";
        case d:
            return "r";
        case e:
            return "b";
        case g:
            return "l"
        }
        return "i"
    }
    uu.prototype.j = function(a, b, c, d) {
        function e(a, c, d) {
            h = Math.min(Math.max(d - 2 * b, 0), g);
            k = Bb(a - h / 2, c + b, c + d - h - b)
        }
        var g = this.i
          , h = 0
          , k = 0;
        "t" == d || "b" == d ? e(c.x, a.left, a.width) : "l" != d && "r" != d || e(c.y, a.top, a.height);
        return new cu(k,k + h)
    }
    ;
    function wu() {
        du.call(this)
    }
    v(wu, du);
    wu.prototype.b = function(a, b, c) {
        var d = Ts(a);
        d && (b = ss(d, b, c),
        0 >= b.width || 0 >= b.height || (a = a.a,
        c = su(b, a.a),
        d = eu(this, c.width, c.height),
        ou(d, new Hb(0,0,b.width,b.height), a.b, new At(!a.i && this.a ? 1 : a.i,a.j), new zt("#000",0)),
        b = this.M(),
        G(b, "annotation-shape"),
        Td(b, ru(this.a, a.g)),
        Bd(b, c.left, c.top),
        Md(b, c.width, c.height)))
    }
    ;
    function xu(a, b, c) {
        du.call(this);
        this.i = a || 0;
        this.k = b || 0;
        this.j = c || !1
    }
    v(xu, du);
    function yu(a, b) {
        var c = a.width
          , d = a.height
          , e = 0
          , g = 0;
        0 < b && (a.width / a.height > b ? (d = a.width / b,
        g = (a.height - d) / 2) : (c = a.height * b,
        e = (a.width - c) / 2));
        return new Hb(e,g,c,d)
    }
    xu.prototype.b = function(a, b, c) {
        var d = ss(Ts(a), b, c);
        if (!(0 >= d.width || 0 >= d.height)) {
            var e = yu(d, this.k);
            e.left += d.left;
            e.top += d.top;
            b = a.a;
            c = su(e, b.a);
            var g = eu(this, c.width, c.height)
              , h = new zt("#000",0)
              , e = yu(e, this.i);
            a = a.i ? a.i.a ? a.i.a : a.i.L ? dp(a.i.L, "hqdefault.jpg") : "" : "";
            e = Jt(g, "image", {
                x: e.left,
                y: e.top,
                width: e.width,
                height: e.height,
                "image-rendering": "optimizeQuality",
                preserveAspectRatio: "none"
            });
            e.setAttributeNS("http://www.w3.org/1999/xlink", "href", a);
            e = new Qt(e,g);
            g.b.M().appendChild(e.M());
            if (a = this.M()) {
                var k = ru(this.a, b.g);
                Td(a, k);
                if (this.j && 0 < b.i) {
                    var k = new At(b.i,b.j), d = new Hb(0,0,d.width,d.height), m;
                    m = pu(d, b.b, k.a / 2 + 1);
                    var p = It(g, "mask");
                    if (p)
                        m = p;
                    else {
                        var p = document.createElementNS("http://www.w3.org/2000/svg", "mask")
                          , s = document.createElementNS("http://www.w3.org/2000/svg", "path");
                        s.setAttribute("d", Vt(m));
                        s.setAttribute("fill", "#FFF");
                        p.appendChild(s);
                        m = Kt(g, "mask", p)
                    }
                    e = e.M();
                    m && e.setAttribute("mask", "url(#" + m + ")");
                    ou(g, d, b.b, k, h)
                }
                G(a, "annotation-shape");
                G(a, "annotation-image-shape");
                Bd(a, c.left, c.top);
                Md(a, c.width, c.height);
                tu(g, a, b.a)
            }
        }
    }
    ;
    function zu() {
        du.call(this)
    }
    v(zu, du);
    zu.prototype.b = function(a, b, c) {
        var d = Ts(a);
        if (d) {
            var e = ss(d, b, c);
            if (!(0 >= e.width || 0 >= e.height)) {
                b = a.a;
                c = su(e, b.a);
                var d = eu(this, c.width, c.height)
                  , g = b.C;
                a = this.a && Ps(a);
                a = (g += a ? 1 : 0) ? new At(g,a ? b.k : b.o) : null;
                g = new Hb(0,0,e.width,e.height);
                e = qu(b, e.width, e.height, this.a);
                ou(d, g, b.b, a, e);
                if (a = this.M())
                    G(a, "annotation-shape"),
                    G(a, "annotation-popup-shape"),
                    Bd(a, c.left, c.top),
                    Md(a, c.width, c.height),
                    tu(d, a, b.a)
            }
        }
    }
    ;
    function Au() {
        uu.call(this)
    }
    v(Au, uu);
    Au.prototype.j = function(a, b, c, d) {
        function e(a, c, d) {
            h = Math.min(Math.max(d - 2 * b, 0), g);
            k = a <= c + d / 2 ? Math.max(c + d / 4 - h / 2, c + b) : Math.min(c + 3 * d / 4 - h / 2, c + d - h - b)
        }
        var g = this.i
          , h = 0
          , k = 0;
        "t" == d || "b" == d ? e(c.x, a.left, a.width) : "l" != d && "r" != d || e(c.y, a.top, a.height);
        return new cu(k,k + h)
    }
    ;
    function Bu(a, b, c, d, e) {
        this.a = a;
        this.A = b;
        this.C = c;
        this.I = d;
        this.F = e;
        this.b = new Ao(this);
        this.u = this.i = this.k = this.j = this.g = null
    }
    function Cu(a, b) {
        var c = t(function(a, c, g) {
            c = g ? Du(this, c, t(g, this)) : Du(this, c);
            this.b.listen(b, a, c)
        }, a);
        c("mouseover", "d", a.K);
        c("mouseout", "c", a.J);
        c("click", "a");
        c("touchend", "a")
    }
    function Eu(a) {
        if (a.a.C) {
            var b;
            Os(a.a, function(a) {
                return "close" == a.type
            }) ? b = a.g : (a.k = E("div", "annotation-close-button hid"),
            jf(a.k, "annotation_id", a.a.id),
            a.g.appendChild(a.k),
            b = a.k);
            var c = function(a) {
                a.stopPropagation()
            };
            a.b.listen(b, "click", Du(a, "b", c));
            a.b.listen(b, "touchend", Du(a, "b", c))
        }
    }
    function Du(a, b, c) {
        return t(function(a) {
            if (this.F)
                c && c(a);
            else if (a.target instanceof Element) {
                var e = a.target;
                Vo(e);
                try {
                    var g = document.elementFromPoint(a.clientX, a.clientY);
                    if (sd(g, "annotation")) {
                        var h = document.createEvent("MouseEvent");
                        h.initMouseEvent(a.type, a.bubbles, a.cancelable, a.view, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, a.button, a.relatedTarget);
                        g.dispatchEvent(h)
                    }
                } finally {
                    Uo(e)
                }
            }
            e = Sd(a.target);
            a = new A(a.clientX,a.clientY);
            "c" == b && e.contains(a) || this.I.B(b, this.a)
        }, a)
    }
    Bu.prototype.K = function() {
        this.k && Uo(this.k);
        this.j && Td(this.j, 1);
        var a = Fu(this);
        this.i && (this.i.a = !0,
        Td(this.g, Gu(this) ? 1 : 0),
        a && this.i.b(this.a, a, Hu(this)))
    }
    ;
    Bu.prototype.J = function() {
        this.k && Vo(this.k);
        this.j && Td(this.j, 0);
        var a = Fu(this);
        this.i && (this.i.a = !1,
        Td(this.g, Gu(this) ? 1 : 0),
        a && this.i.b(this.a, a, Hu(this)))
    }
    ;
    function Hu(a) {
        return a.u ? Ts(a.u) : null
    }
    function qt(a) {
        if (a.g || a.i) {
            var b = Ts(a.a);
            if (b) {
                var c = Fu(a)
                  , d = Hu(a);
                if (a.g && c) {
                    b = ss(b, c, d);
                    Md(a.g, b.width, b.height);
                    Bd(a.g, b.left, b.top);
                    var e = a.C.Qc;
                    if (e) {
                        var g;
                        g = (g = Ts(a.a)) && e ? os(e, g.j, g.a ? g.a : "xy") : 1;
                        var h;
                        h = a.a.a;
                        h.padding ? h = h.padding : (h = "speech" == a.a.style ? 1.6 : 0.8,
                        h = new Eb(h,h,h,h));
                        e = Vs(a.a, e);
                        e = new Eb(360 * h.top * e / 100,640 * h.right * g / 100,360 * h.bottom * e / 100,640 * h.left * g / 100);
                        a.j && (e.right += 1.5 * c.height / 100);
                        a.g.style.padding = e.top + "px " + e.right + "px " + e.bottom + "px " + e.left + "px"
                    }
                    "label" == a.a.style && a.o && (a.o.style.padding = a.g.style.padding);
                    a.j && (e = 4.2 * c.height / 100,
                    e = new B(e,e),
                    Md(a.j, e),
                    "highlight" == a.a.type || "label" == a.a.style ? (g = 1.5 * c.height / 100,
                    e = new A(b.width - e.width - g,b.height - e.height - g)) : e = new A(b.width - e.width - 3 * c.height / 100,(b.height - e.height) / 2),
                    Bd(a.j, e));
                    a.k && (e = 9 <= c.left + c.width - (b.left + b.width),
                    g = 9 <= b.top - c.top,
                    Bd(a.k, e && g ? new A(b.width - 9,-9) : e ? new A(b.width - 9,45 < b.height ? 9 : b.height - 9) : g ? new A(45 < b.width ? b.width - 9 - 18 : -9,-9) : b.width / c.width > b.height / c.height ? new A(45 < b.width ? b.width - 9 - 18 : -9,b.height - 9) : new A(-9,45 < b.height ? 9 : b.height - 9)))
                }
                a.i && c && a.i.b(a.a, c, d);
                if (a.g) {
                    c = a.g;
                    d = a.a.a;
                    c.style.color = "highlightText" == a.a.style ? d.A : d.k;
                    c.style.fontSize = 360 * d.F * Vs(a.a, a.C.Qc) / 100 + "px";
                    b = a.a.style;
                    c.style.textAlign = d.textAlign ? d.textAlign : "title" == b || "highlightText" == b ? "center" : "left";
                    d.u && (c.style.fontWeight = d.u);
                    a = a.g;
                    c = a.style.overflow;
                    (d = D("annotation-link-icon", a)) && Vo(d);
                    a.style.overflow = "scroll";
                    if (a.scrollHeight > a.offsetHeight || a.scrollWidth > a.offsetWidth)
                        for (e = b = ee(a),
                        g = Math.floor(b / 2); g; )
                            e = a.scrollHeight <= a.offsetHeight && a.scrollWidth <= a.offsetWidth ? Math.min(e + g, b) : Math.max(e - g, 5),
                            g = Math.floor(g / 2),
                            a.style.fontSize = e + "px";
                    a.style.overflow = c;
                    d && Uo(d)
                }
            }
        }
    }
    Bu.prototype.show = function() {
        var a = this.a.a
          , a = (a && 0 == a.g || "title" == this.a.style || "highlightText" == this.a.style || "pause" == this.a.type ? !1 : !0) && !this.i
          , b = !this.g
          , c = "widget" == this.a.type;
        if (a) {
            var d = Fu(this);
            if (d) {
                var e = null;
                "highlight" == this.a.type || "label" == this.a.style ? e = new wu : "popup" == this.a.style ? e = new zu : "anchored" == this.a.style ? e = new uu : "speech" == this.a.style ? e = new Au : "image" == this.a.type && ("video" == this.a.style ? e = new xu(4 / 3,16 / 9,!0) : "channel" == this.a.style && (e = new xu));
                e && (e.b(this.a, d, Hu(this)),
                this.i = e,
                d = e.M()) && (Vo(d),
                G(d, "annotation-type-" + this.a.type.toLowerCase()),
                this.A(d))
            }
        }
        if (b) {
            d = ["annotation", "hid"];
            "highlightText" != this.a.style || d.push("annotation-no-mouse");
            d.push("annotation-type-" + this.a.type.toLowerCase());
            this.g = E("div", d);
            this.a.o && ("label" == this.a.style ? (this.o = E("div", ["label-text"]),
            this.o.style.backgroundColor = this.a.a.j,
            md(this.o, this.a.o),
            this.g.appendChild(this.o)) : md(this.g, this.a.o));
            jf(this.g, "annotation_id", this.a.id);
            this.A(this.g);
            Cu(this, this.g);
            if (Ps(this.a) && "image" != this.a.type && Ns(this.a)) {
                if (d = Xr(this.a))
                    this.g.title = Ir(d);
                this.j = E("span", "annotation-link-icon");
                this.g.appendChild(this.j)
            }
            Eu(this);
            Ps(this.a) || (this.g.style.cursor = "default")
        }
        c && ("subscribe" == this.a.style ? D("yt-uix-subscription-button", this.g) || (this.g.innerHTML = this.a.g) : this.a.g && (this.g.innerHTML = this.a.g));
        if (a || b) {
            t: {
                a = this.a.b.a;
                if (a.length && (a = zs(a[0]))) {
                    a = a.o;
                    break t
                }
                a = 0
            }
            this.g && (this.g.style.zIndex = a);
            this.i && this.i.M() && (this.i.M().style.zIndex = a)
        }
        Uo(this.g);
        Td(this.g, Gu(this) ? 1 : 0);
        qt(this);
        this.i && Uo(this.i.M())
    }
    ;
    Bu.prototype.hide = function() {
        Vo(this.g);
        this.i && Vo(this.i.M())
    }
    ;
    function Gu(a) {
        return "label" != a.a.style || a.i.a
    }
    function Fu(a) {
        var b = a.C.Qc;
        return b ? "player_relative" == a.a.F ? (a = a.C.pb) ? new Hb(-b.left,-b.top,a.width,a.height) : null : new Hb(0,0,b.width,b.height) : null
    }
    ;function Iu(a) {
        jo.call(this, a);
        this.xj = !0;
        this.pa = "iv-module";
        this.I = !1;
        this.J = !0;
        this.aa = !1;
        this.g = 0;
        this.b = {};
        this.F = {};
        this.k = new Ws(this.C,this.a);
        a = S(a);
        this.i = new bu(mi(this.a).j);
        this.i.listen("change", this.Nq, this);
        this.G("onHideControls", this.Kq, this);
        this.G("onShowControls", this.Mq, this);
        this.G("onStateChange", this.Lq, this);
        this.G("d", this.Pq, this);
        this.G("c", this.Oq, this);
        this.G("a", this.Iq, this);
        this.G("b", this.Jq, this);
        a = D("video-annotations", a);
        a = D("countdowntimer", a);
        this.u = E("DIV", ["video-annotations", "html5-stop-propagation"]);
        mo(this, this.u);
        mo(this, a);
        this.A = new Xt(a,t(this.vj, this));
        this.j = null
    }
    v(Iu, jo);
    function Ju(a) {
        return D("video-annotations", S(a)) && Ku(a) ? new Iu(a) : null
    }
    function Ku(a) {
        return "leanback" == a.N().Z ? !1 : Un(a.getVideoData(), "iv3_module")
    }
    f = Iu.prototype;
    f.eb = function() {
        return Ku(this.a)
    }
    ;
    f.create = function() {
        Iu.D.create.call(this);
        vo(this, this.i);
        1 == (this.a.N().ra || this.a.getVideoData().ma) && this.load()
    }
    ;
    f.destroy = function() {
        this.unload();
        wo(this, this.i);
        Iu.D.destroy.call(this)
    }
    ;
    f.Nq = function() {
        var a = this.aa || this.g
          , b = 0 == this.i.getSelected();
        a && !b ? this.unload() : !a && b && this.load()
    }
    ;
    f.Lq = function(a) {
        this.J = R(a.a, 8);
        0 > Uq(a, 4) && this.A.stop()
    }
    ;
    f.load = function() {
        Iu.D.load.call(this);
        var a = {
            format: "XML",
            method: "GET",
            Rc: t(this.Lo, this, null)
        }
          , b = this.a.getVideoData();
        b.Ak && (this.g++,
        Hk(b.Ak, a));
        b.zk && (this.g++,
        Hk(b.zk, a));
        if (b.yk) {
            var a = t, c = this.Lo, d = t, e = this.Fv, g;
            t: {
                g = {};
                if (!Vb(b.Va) && (Lu(g, b, "cta_annotation_shown"),
                Lu(g, b, "cta_annotation_clicked"),
                Lu(g, b, "cta_annotation_closed"),
                !Vb(g)))
                    break t;
                var h = b.Ga;
                h ? (Mu(g, "cta_annotation_shown", h),
                Mu(g, "cta_annotation_clicked", h),
                Mu(g, "cta_annotation_closed", h)) : g = null
            }
            a = {
                format: "XML",
                method: "GET",
                Rc: a(c, this, d(e, this, g))
            };
            this.g++;
            Hk(b.yk, a)
        }
        this.i.Ia(0)
    }
    ;
    f.unload = function() {
        this.i.Ia(1);
        this.k.log_({
            "iv-event": 1
        });
        this.vj();
        ko(this);
        Lb(this.b, function(a) {
            a.destroy()
        });
        Lb(this.F, function(a) {
            a.destroy()
        });
        this.j = null;
        this.g = 0;
        this.aa = !1;
        this.b = {};
        this.F = {};
        Iu.D.unload.call(this)
    }
    ;
    function Nu(a, b) {
        for (var c = {}, d = 0; d < b.attributes.length; d++) {
            var e = b.attributes[d];
            c[e.name] = e.nodeValue
        }
        for (d = 0; d < b.childNodes.length; d++)
            if (e = b.childNodes[d],
            e.tagName) {
                var g;
                if (c[e.tagName])
                    g = c[e.tagName];
                else if ("html_blob" == e.tagName || "data" == e.tagName) {
                    c[e.tagName] = e.childNodes[0].nodeValue.trim();
                    continue
                } else
                    g = [],
                    c[e.tagName] = g;
                e && "TEXT" == e.tagName ? 1 == e.childNodes.length && 3 == e.childNodes[0].nodeType ? g.push(e.childNodes[0].nodeValue) : g.push("") : e && g.push(Nu(a, e))
            }
        return c
    }
    f.Lo = function(a, b) {
        if (this.g && !this.aa) {
            this.g--;
            var c = b.responseXML ? b.responseXML.getElementsByTagName("annotations") : null;
            if (Dk(b) && c) {
                c = c[0];
                a && a(c);
                Ou(this, c);
                G(S(this.a), this.pa + "-loaded");
                0 == this.g && (this.aa = !0);
                var c = [], d;
                for (d in this.b) {
                    var e = this.b[d].ta;
                    if (e.b)
                        if (e = e.b,
                        e.a.length)
                            if (e = e.a[0].b || e.a[0].a,
                            !e || 2 > e.length)
                                e = null;
                            else
                                var g = e.length - 1
                                  , e = 0 >= e[0].b && 0 >= e[g].b ? null : {
                                    start: e[0].b,
                                    end: e[g].b
                                };
                        else
                            e = null;
                    else
                        e = null;
                    if (g = e)
                        e = 1E3 * g.start,
                        g = 1E3 * g.end,
                        0 == e && (e++,
                        g++),
                        e == g && g++,
                        g < e || (e = new Rh(e,g,{
                            id: d
                        }),
                        c.push(e))
                }
                this.qf.apply(this, c)
            }
        }
    }
    ;
    function Pu(a, b) {
        var c = Qu(a, b);
        if (!c)
            return null;
        Rs(b, function(a) {
            a = t(this.Jx, this, b.id, a);
            this.G("ivTrigger:" + b.id, a)
        }, a);
        return new nt(a.C,b,c)
    }
    function Ru(a, b) {
        var c = E("div", ["annotation", "annotation-type-custom", "hid"]);
        a.u.appendChild(c);
        var d = null
          , e = new ft(new Ao(a),a.a.N(),a.a.getVideoData(),a.k,a.a,a.C);
        switch (b.style) {
        case "playlist":
        case "video":
        case "website":
            d = new ht(c,e,b);
            break;
        case "branding":
            d = new Vr(c,e,b);
            break;
        case "product":
        case "fundraising":
            a.j || (a.j = new Zs(c,e)),
            a.j.add(new Zr(b.id,b.data,Xr(b),b)),
            d = a.j
        }
        d && (c = d,
        c.ta && (e = c.ta.data,
        "start_ms"in e && "end_ms"in e && Pr(c, c.ta.data.start_ms, c.ta.data.end_ms, c.ta.id)),
        Or(c));
        return d
    }
    function Ou(a, b) {
        for (var c = b.getElementsByTagName("annotation"), d = 0; d < c.length; d++) {
            var e = Nu(a, c[d])
              , g = null;
            try {
                g = Ls(e)
            } catch (h) {}
            g && ("custom" == g.type ? (e = Ru(a, g)) && (a.F[g.id] = e) : (e = Pu(a, g)) && (a.b[g.id] = e))
        }
        Lb(a.b, function(a) {
            var b = a.ta;
            b.b && b.b.b && (b = this.b[b.b.b]) && (a.b.u = b.ta)
        }, a)
    }
    f.uc = function(a) {
        Iu.D.uc.call(this, a);
        a = a.getId();
        var b = this.b[a];
        b && !b.Yb && (b = b.ta,
        "pause" == b.type ? Su(this, b) : (Tu(this, a),
        Yr(this.k, b)))
    }
    ;
    f.Yc = function(a) {
        Iu.D.Yc.call(this, a);
        Uu(this, a.getId())
    }
    ;
    function Su(a, b) {
        if (a.J) {
            var c = Ms(b, function(a) {
                return "pause" == a.type && !!a.duration && !!a.duration.value
            });
            c && (a.I = !0,
            a.B("command_pause"),
            a.A.start(1E3 * c.duration.value))
        }
    }
    function Vu(a, b, c, d) {
        d ? Tu(a, b, c) : Uu(a, b, c)
    }
    function Uu(a, b, c) {
        if (b = a.b[b])
            pt(b),
            c && c.b ? (a = t(a.ap, a, b),
            b.a = new Xq(a,2E3),
            b.a.start()) : a.ap(b)
    }
    f.ap = function(a) {
        a && (a.hide(),
        Wu(this, "shown", !1, a.ta.id),
        Xu(this, a.ta, "hidden"))
    }
    ;
    function Tu(a, b, c) {
        if (b = a.b[b])
            pt(b),
            c && c.i ? (a = t(a.Io, a, b),
            b.a = new Xq(a,2E3),
            b.a.start()) : a.Io(b)
    }
    f.Io = function(a) {
        a && (a.show(),
        Wu(this, "shown", !0, a.ta.id),
        Xu(this, a.ta, "shown"))
    }
    ;
    f.Jx = function(a, b, c) {
        var d = this.b[a];
        if (d && b.value != c) {
            b.value = c;
            var e = !1;
            Rs(d.ta, function(a) {
                e |= a.value
            });
            Vu(this, a, b, e)
        }
    }
    ;
    f.Iq = function(a) {
        if (a && a.id) {
            var b = Xr(a);
            if (b) {
                var c = t(function() {
                    Xu(this, a, "click")
                }, this);
                Jr(Ir(b)) && "new" != b.target || (c(),
                c = null);
                Tr(this.k, a, c)
            }
        }
    }
    ;
    function Xu(a, b, c) {
        var d = {}
          , e = null;
        Qs(b, function(a) {
            if (a.trigger == c)
                switch (a.type) {
                case "log":
                    a.url && (d[a.url.value] = 1,
                    ua(a.url.value, function() {
                        delete d[a.url.value];
                        !Ob(d) && e && e()
                    }));
                    break;
                case "openUrl":
                    e = t(function() {
                        var c = this.a.getVideoData()
                          , d = Kr(a.url, c.L);
                        if (-1 != d)
                            this.B("command_seek", d),
                            this.vj();
                        else if (c = Lr(a.url, b.id, c.L))
                            this.pauseVideo(),
                            window.open(c, Mr(a.url))
                    }, this)
                }
        }, a);
        !Ob(d) && e && e()
    }
    f.Kq = function() {
        Wu(this, "playerControlShow", !1)
    }
    ;
    f.Mq = function() {
        Wu(this, "playerControlShow", !0)
    }
    ;
    f.Pq = function(a) {
        Wu(this, "rollOver", !0, a.id)
    }
    ;
    f.Oq = function(a) {
        Wu(this, "rollOver", !1, a.id)
    }
    ;
    f.Jq = function(a) {
        if (a || a.id)
            this.b[a.id].Yb = !0,
            Uu(this, a.id),
            a && (Rr(this.k, a),
            Xu(this, a, "close")),
            Wu(this, "closed", !0, a.id)
    }
    ;
    f.vj = function() {
        this.A.stop();
        this.I && (this.I = !1,
        this.B("command_play"))
    }
    ;
    function Qu(a, b) {
        if (Yu(b)) {
            var c = b.C || Os(b, function(a) {
                return "click" == a || "rollOut" == a || "rollOut" == a
            });
            return new Bu(b,t(a.u.appendChild, a.u),a.a.N(),a.C,c)
        }
        return null
    }
    function Yu(a) {
        if ("highlight" == a.type || "image" == a.type || "widget" == a.type)
            return !0;
        if ("text" == a.type)
            for (var b in Is)
                if (a.style == Is[b])
                    return !0;
        return !1
    }
    function Wu(a, b, c, d) {
        a.B(mt(b, d), c, d)
    }
    function Lu(a, b, c) {
        (b = b.Va[c]) && jl(b, gl) && (a[c] = b)
    }
    function Mu(a, b, c) {
        var d = {};
        d.label = b;
        d.value = "a_id=[ANNOTATION_ID]";
        a[b] = Bk(c, d)
    }
    function Zu(a, b, c, d) {
        var e = a.ownerDocument.createElement("action");
        e.setAttribute("type", "log");
        e.setAttribute("trigger", d);
        a = a.ownerDocument.createElement("url");
        d = ya("[ANNOTATION_ID]");
        var g = b;
        0 <= b.indexOf("[ANNOTATION_ID]") ? g = b.replace("[ANNOTATION_ID]", c) : 0 <= b.indexOf(d) && (g = b.replace(d, c));
        a.setAttribute("value", g);
        e.appendChild(a);
        return e
    }
    f.Fv = function(a, b) {
        if (a)
            for (var c = b.getElementsByTagName("annotation"), d = 0; d < c.length; d++) {
                var e = c[d]
                  , g = Nu(this, e);
                if (zr(g.logable, !0)) {
                    var g = vr(g.id)
                      , h = e.getElementsByTagName("action")
                      , h = h.length ? h[0] : null;
                    a.cta_annotation_shown && e.insertBefore(Zu(e, a.cta_annotation_shown, g, "shown"), h);
                    a.cta_annotation_clicked && e.insertBefore(Zu(e, a.cta_annotation_clicked, g, "click"), h);
                    a.cta_annotation_closed && e.insertBefore(Zu(e, a.cta_annotation_closed, g, "close"), h)
                }
            }
    }
    ;
    var $u;
    function av(a, b) {
        ha(b) && (b = b.join(" "));
        if ("" === b || void 0 == b) {
            var c;
            $u || ($u = {
                atomic: !1,
                autocomplete: "none",
                dropeffect: "none",
                haspopup: !1,
                live: "off",
                multiline: !1,
                multiselectable: !1,
                orientation: "vertical",
                readonly: !1,
                relevant: "additions text",
                required: !1,
                sort: "none",
                busy: !1,
                disabled: !1,
                hidden: !1,
                invalid: "false"
            });
            c = $u;
            "pressed"in c ? a.setAttribute("aria-pressed", c.pressed) : a.removeAttribute("aria-pressed")
        } else
            a.setAttribute("aria-pressed", b)
    }
    ;function bv(a, b, c, d, e) {
        vp.call(this, a, b, c, c);
        this.J = b;
        this.R = this.Q = c;
        this.u = d || null;
        this.A = e || null;
        this.F = e || null;
        this.b = !1
    }
    v(bv, vp);
    function cv(a) {
        xp(a, a.b && a.u ? a.u : a.J);
        a.Ab(a.b && a.A ? a.A : a.Q);
        a.a = a.b && a.F ? a.F : a.R;
        I(a.element, "ytp-button-pressed", a.b)
    }
    function dv(a) {
        a.b = !0;
        av(a.element, !0);
        cv(a)
    }
    function ev(a) {
        a.b = !1;
        av(a.element, !1);
        cv(a)
    }
    function fv(a) {
        a.b ? ev(a) : dv(a)
    }
    function gv(a, b) {
        a.J = b;
        cv(a)
    }
    bv.prototype.H = function() {
        this.F = this.A = this.u = null;
        Tf(this.S);
        this.S = null;
        bv.D.H.call(this)
    }
    ;
    function hv(a) {
        Y.call(this, ["div", "ytp-action-buttons"]);
        this.g = new bv(a,"ytp-button-info",Z("YTP_BUTTON_INFO"));
        O(this, this.g);
        this.g.X(this.element);
        this.i = new bv(a,"ytp-button-share",Z("YTP_BUTTON_SHARE"));
        O(this, this.i);
        this.i.X(this.element);
        this.a = new bv(a,"ytp-button-dislike",Z("YTP_BUTTON_DISLIKE"));
        O(this, this.a);
        this.listen(this.a, "click", this.C);
        this.a.X(this.element);
        this.b = new bv(a,"ytp-button-like",Z("YTP_BUTTON_LIKE"));
        O(this, this.b);
        this.listen(this.b, "click", this.u);
        this.b.X(this.element);
        this.b.hide();
        this.a.hide()
    }
    v(hv, Y);
    function iv(a, b) {
        0 == b ? (dv(a.b),
        ev(a.a)) : 1 == b ? (ev(a.b),
        dv(a.a)) : (ev(a.b),
        ev(a.a))
    }
    hv.prototype.u = function() {
        iv(this, 0)
    }
    ;
    hv.prototype.C = function() {
        iv(this, 1)
    }
    ;
    function jv(a, b, c, d, e, g) {
        var h, k;
        if (h = c.offsetParent) {
            var m = "HTML" == h.tagName || "BODY" == h.tagName;
            m && "static" == Ad(h, "position") || (k = Gd(h),
            m || (m = (m = Hd(h)) && nc ? -h.scrollLeft : !m || C && Cc("8") || "visible" == Ad(h, "overflowX") ? h.scrollLeft : h.scrollWidth - h.clientWidth - h.scrollLeft,
            k = Db(k, new A(m,h.scrollTop))))
        }
        h = k || new A;
        k = Sd(a);
        if (m = Fd(a)) {
            var p = Ib(m)
              , m = Math.max(k.left, p.left)
              , s = Math.min(k.left + k.width, p.left + p.width);
            if (m <= s) {
                var w = Math.max(k.top, p.top)
                  , p = Math.min(k.top + k.height, p.top + p.height);
                w <= p && (k.left = m,
                k.top = w,
                k.width = s - m,
                k.height = p - w)
            }
        }
        m = Qc(a);
        w = Qc(c);
        if (m.a != w.a) {
            var s = m.a.body, w = ad(w.a), p = new A(0,0), z;
            z = (z = Sc(s)) ? ad(z) : window;
            var X = s;
            do {
                var J = z == w ? Gd(X) : Kd(X);
                p.x += J.x;
                p.y += J.y
            } while (z && z != w && (X = z.frameElement) && (z = z.parent));
            s = Db(p, Gd(s));
            C && !ud(m) && (s = Db(s, vd(m)));
            k.left += s.x;
            k.top += s.y
        }
        a = kv(a, b);
        b = new A(a & 2 ? k.left + k.width : k.left,a & 1 ? k.top + k.height : k.top);
        b = Db(b, h);
        e && (b.x += (a & 2 ? -1 : 1) * e.x,
        b.y += (a & 1 ? -1 : 1) * e.y);
        if (e = Fd(c))
            e.top -= h.y,
            e.right -= h.x,
            e.bottom -= h.y,
            e.left -= h.x;
        lv(b, c, d, g, e, 65, void 0)
    }
    function lv(a, b, c, d, e, g, h) {
        a = a.clone();
        var k = kv(b, c);
        c = Qd(b);
        h = h ? h.clone() : c.clone();
        if (d || 0 != k)
            k & 2 ? a.x -= h.width + (d ? d.right : 0) : d && (a.x += d.left),
            k & 1 ? a.y -= h.height + (d ? d.bottom : 0) : d && (a.y += d.top);
        if (g && (e ? (d = a,
        k = 0,
        65 == (g & 65) && (d.x < e.left || d.x >= e.right) && (g &= -2),
        132 == (g & 132) && (d.y < e.top || d.y >= e.bottom) && (g &= -5),
        d.x < e.left && g & 1 && (d.x = e.left,
        k |= 1),
        d.x < e.left && d.x + h.width > e.right && g & 16 && (h.width = Math.max(h.width - (d.x + h.width - e.right), 0),
        k |= 4),
        d.x + h.width > e.right && g & 1 && (d.x = Math.max(e.right - h.width, e.left),
        k |= 1),
        g & 2 && (k = k | (d.x < e.left ? 16 : 0) | (d.x + h.width > e.right ? 32 : 0)),
        d.y < e.top && g & 4 && (d.y = e.top,
        k |= 2),
        d.y <= e.top && d.y + h.height < e.bottom && g & 32 && (h.height = Math.max(h.height - (e.top - d.y), 0),
        d.y = e.top,
        k |= 8),
        d.y >= e.top && d.y + h.height > e.bottom && g & 32 && (h.height = Math.max(h.height - (d.y + h.height - e.bottom), 0),
        k |= 8),
        d.y + h.height > e.bottom && g & 4 && (d.y = Math.max(e.bottom - h.height, e.top),
        k |= 2),
        g & 8 && (k = k | (d.y < e.top ? 64 : 0) | (d.y + h.height > e.bottom ? 128 : 0)),
        e = k) : e = 256,
        e & 496))
            return;
        Bd(b, a);
        Fb(c, h) || (e = ud(Qc(Sc(b))),
        !C || e && Cc("8") ? (b = b.style,
        nc ? b.MozBoxSizing = "border-box" : oc ? b.WebkitBoxSizing = "border-box" : b.boxSizing = "border-box",
        b.width = Math.max(h.width, 0) + "px",
        b.height = Math.max(h.height, 0) + "px") : (a = b.style,
        e ? (e = Xd(b),
        b = Yd(b),
        a.pixelWidth = h.width - b.left - e.left - e.right - b.right,
        a.pixelHeight = h.height - b.top - e.top - e.bottom - b.bottom) : (a.pixelWidth = h.width,
        a.pixelHeight = h.height)))
    }
    function kv(a, b) {
        return (b & 4 && Hd(a) ? b ^ 2 : b) & -5
    }
    ;var mv = {}
      , nv = "ontouchstart"in document;
    function ov(a, b, c) {
        var d;
        switch (a) {
        case "mouseover":
        case "mouseout":
            d = 3;
            break;
        case "mouseenter":
        case "mouseleave":
            d = 9
        }
        return td(c, function(a) {
            return Oc(a, b)
        }, !0, d)
    }
    function pv(a) {
        var b = "mouseover" == a.type && "mouseenter"in mv || "mouseout" == a.type && "mouseleave"in mv
          , c = a.type in mv || b;
        if ("HTML" != a.target.tagName && c) {
            if (b) {
                var b = "mouseover" == a.type ? "mouseenter" : "mouseleave", c = mv[b], d;
                for (d in c.Rb) {
                    var e = ov(b, d, a.target);
                    e && !td(a.relatedTarget, function(a) {
                        return a == e
                    }, !0) && c.B(d, e, b, a)
                }
            }
            if (b = mv[a.type])
                for (d in b.Rb)
                    (e = ov(a.type, d, a.target)) && b.B(d, e, a.type, a)
        }
    }
    N(document, "blur", pv, !0);
    N(document, "change", pv, !0);
    N(document, "click", pv);
    N(document, "focus", pv, !0);
    N(document, "mouseover", pv);
    N(document, "mouseout", pv);
    N(document, "mousedown", pv);
    N(document, "keydown", pv);
    N(document, "keyup", pv);
    N(document, "keypress", pv);
    N(document, "cut", pv);
    N(document, "paste", pv);
    nv && (N(document, "touchstart", pv),
    N(document, "touchend", pv),
    N(document, "touchcancel", pv));
    var qv = window.yt && window.yt.uix && window.yt.uix.widgets_ || {};
    ba("yt.uix.widgets_", qv, void 0);
    function rv(a) {
        a = a.getInstance();
        var b = $(a);
        b in qv || (a.register(),
        qv[b] = a)
    }
    ;function sv() {
        this.a = {}
    }
    function tv(a, b, c) {
        var d = $(a, void 0)
          , e = t(c, a);
        b in mv || (mv[b] = new Ai);
        mv[b].G(d, e);
        a.a[c] = e
    }
    sv.prototype.b = function(a, b, c) {
        var d = K(a, b);
        if (d && (d = n(d))) {
            var e = hb(arguments, 2);
            gb(e, 0, 0, a);
            d.apply(null, e)
        }
    }
    ;
    function uv(a, b) {
        jf(a, "tooltip-text", b)
    }
    sv.prototype.removeData = function(a, b) {
        a.dataset ? delete a.dataset[kf(b)] : a.removeAttribute("data-" + b)
    }
    ;
    function $(a, b) {
        return "yt-uix" + (a.fj ? "-" + a.fj : "") + (b ? "-" + b : "")
    }
    ;function vv() {
        this.a = {}
    }
    v(vv, sv);
    da(vv);
    f = vv.prototype;
    f.fj = "tooltip";
    f.ej = 0;
    f.register = function() {
        tv(this, "mouseover", this.gq);
        tv(this, "mouseout", this.Xl);
        tv(this, "click", this.Xl);
        tv(this, "touchstart", this.oy);
        tv(this, "touchend", this.jq);
        tv(this, "touchcancel", this.jq)
    }
    ;
    f.gq = function(a) {
        if (!(this.ej && 1E3 > u() - this.ej)) {
            var b = parseInt(K(a, "tooltip-hide-timer"), 10);
            b && (this.removeData(a, "tooltip-hide-timer"),
            M(b));
            var b = t(function() {
                wv(this, a);
                this.removeData(a, "tooltip-show-timer")
            }, this)
              , c = parseInt(K(a, "tooltip-show-delay"), 10) || 0
              , b = L(b, c);
            jf(a, "tooltip-show-timer", b.toString());
            a.title && (uv(a, xv(a)),
            a.title = "")
        }
    }
    ;
    f.Xl = function(a) {
        var b = parseInt(K(a, "tooltip-show-timer"), 10);
        b && (M(b),
        this.removeData(a, "tooltip-show-timer"));
        b = t(function() {
            yv(this, a);
            this.removeData(a, "tooltip-hide-timer")
        }, this);
        b = L(b, 50);
        jf(a, "tooltip-hide-timer", b.toString());
        if (b = K(a, "tooltip-text"))
            a.title = b
    }
    ;
    f.oy = function(a, b, c) {
        this.ej = 0;
        a = ov(b, $(this), c.changedTouches[0].target);
        this.gq(a)
    }
    ;
    f.jq = function(a, b, c) {
        this.ej = u();
        a = ov(b, $(this), c.changedTouches[0].target);
        this.Xl(a)
    }
    ;
    function zv(a, b) {
        uv(a, b);
        var c = K(a, "content-id");
        if (c = Tc(c))
            c.innerHTML = b
    }
    function xv(a) {
        return K(a, "tooltip-text") || a.title
    }
    function wv(a, b) {
        if (b) {
            var c = xv(b);
            if (c) {
                var d = Tc(Av(a, b));
                if (!d) {
                    d = document.createElement("div");
                    d.id = Av(a, b);
                    d.className = $(a, "tip");
                    var e = document.createElement("div");
                    e.className = $(a, "tip-body");
                    var g = document.createElement("div");
                    g.className = $(a, "tip-arrow");
                    var h = document.createElement("div");
                    h.className = $(a, "tip-content");
                    var k = Bv(a, b)
                      , m = Av(a, b, "content");
                    h.id = m;
                    jf(b, "content-id", m);
                    e.appendChild(h);
                    k && d.appendChild(k);
                    d.appendChild(e);
                    d.appendChild(g);
                    (ag() || document.body).appendChild(d);
                    zv(b, c);
                    (c = parseInt(K(b, "tooltip-max-width"), 10)) && e.offsetWidth > c && (e.style.width = c + "px",
                    Lc(h, $(a, "normal-wrap")));
                    h = Oc(b, $(a, "reverse"));
                    Cv(a, b, d, e, k, h) || Cv(a, b, d, e, k, !h);
                    var p = $(a, "tip-visible");
                    L(function() {
                        Lc(d, p)
                    }, 0)
                }
            }
        }
    }
    function Cv(a, b, c, d, e, g) {
        Pc(c, $(a, "tip-reverse"), g);
        var h = 0;
        g && (h = 1);
        a = Qd(b);
        g = new A((a.width - 10) / 2,g ? a.height : 0);
        var k = Gd(b);
        lv(new A(k.x + g.x,k.y + g.y), c, h);
        h = Yc(window);
        k = Jd(c);
        c = Qd(d);
        var m = Math.floor(c.width / 2);
        e && (e.style.left = "3px",
        e.style.height = c.height + "px",
        e.style.width = c.width + "px");
        e = !!(h.height < k.y + a.height);
        a = !!(k.y < a.height);
        g = !!(k.x < m);
        h = !!(h.width < k.x + m);
        k = (c.width + 3) / -2 - -5;
        b = K(b, "force-tooltip-direction");
        if ("left" == b || g)
            k = -5;
        else if ("right" == b || h)
            k = 20 - c.width - 3;
        d.style.left = Math.floor(k) + "px";
        return !(e || a)
    }
    function yv(a, b) {
        if (b) {
            var c = Tc(Av(a, b));
            c && (Dv(c),
            F(c),
            a.removeData(b, "content-id"))
        }
    }
    function Av(a, b, c) {
        a = $(a) + mf(b);
        c && (a += "-" + c);
        return a
    }
    function Bv(a, b) {
        var c = null;
        hc && Oc(b, $(a, "masked")) && ((c = Tc("yt-uix-tooltip-shared-mask")) ? (c.parentNode.removeChild(c),
        Uo(c)) : (c = document.createElement("iframe"),
        c.src = 'javascript:""',
        c.id = "yt-uix-tooltip-shared-mask",
        c.className = $(a, "tip-mask")));
        return c
    }
    function Dv(a) {
        var b = Tc("yt-uix-tooltip-shared-mask")
          , c = b && td(b, function(b) {
            return b == a
        }, !1, 2);
        b && c && (b.parentNode.removeChild(b),
        Vo(b),
        document.body.appendChild(b))
    }
    ;function Ev(a, b) {
        gf(a, ["html5-async-progress", "html5-async-success", "html5-async-error"]);
        b && G(a, b);
        yv(vv.getInstance(), a)
    }
    ;function Fv(a, b) {
        I(b, "sentiment-like", a);
        I(b, "sentiment-dislike", !a)
    }
    function Gv(a, b, c, d, e) {
        if (ef(c, "html5-async-progress"))
            return null;
        Fv(b, c);
        Ev(c, "html5-async-progress");
        c = {
            Ya: a.Ya,
            onSuccess: function(a) {
                return function() {
                    Ev(a, "html5-async-success")
                }
            }(c),
            onError: function(a) {
                return function() {
                    Ev(a)
                }
            }(c)
        };
        d && (c.authUser = d);
        e && (c.pageId = e);
        Om(a.L, b ? 0 : 1, c);
        zf("CONVERSION_CONFIG_DICT") || Lm(b ? "like" : "dislike", a.i);
        return b ? 0 : 1
    }
    ;function Hv() {
        return n("yt.scheduler.instance") && !n("ytsched.enableSetTimeout")
    }
    function Iv(a, b, c) {
        void 0 === c && (c = NaN);
        var d = n("yt.scheduler.instance.addJob");
        if (d)
            return isNaN(c) && (c = 0),
            d(a, b, c);
        if (isNaN(c))
            a();
        else
            return L(a, c || 0)
    }
    function Jv(a) {
        return Iv(a, 0, void 0)
    }
    function Kv(a, b) {
        return Iv(a, 2, b)
    }
    var Lv = n("yt.scheduler.instance.cancelJob") || ca;
    var Mv = n("yt.pubsub.instance_") || new Ai;
    Ai.prototype.subscribe = Ai.prototype.G;
    Ai.prototype.unsubscribeByKey = Ai.prototype.Uc;
    Ai.prototype.publish = Ai.prototype.B;
    Ai.prototype.clear = Ai.prototype.clear;
    ba("yt.pubsub.instance_", Mv, void 0);
    var Nv = n("yt.pubsub.subscribedKeys_") || {};
    ba("yt.pubsub.subscribedKeys_", Nv, void 0);
    var Ov = n("yt.pubsub.topicToKeys_") || {};
    ba("yt.pubsub.topicToKeys_", Ov, void 0);
    var Pv = n("yt.pubsub.isSynchronous_") || {};
    ba("yt.pubsub.isSynchronous_", Pv, void 0);
    var Qv = n("yt.pubsub.skipSubId_") || null;
    ba("yt.pubsub.skipSubId_", Qv, void 0);
    function Rv(a, b, c) {
        var d = Sv();
        if (d) {
            var e = d.subscribe(a, function() {
                if (!Qv || Qv != e) {
                    var d = arguments
                      , h = function() {
                        Nv[e] && b.apply(c || window, d)
                    };
                    try {
                        Pv[a] ? h() : Hv() ? Jv(h) : L(h, 0)
                    } catch (k) {
                        Ff(k)
                    }
                }
            }, c);
            Nv[e] = !0;
            Ov[a] || (Ov[a] = []);
            Ov[a].push(e);
            return e
        }
        return 0
    }
    function Tv(a) {
        var b = Sv();
        b && ("number" == typeof a ? a = [a] : "string" == typeof a && (a = [parseInt(a, 10)]),
        x(a, function(a) {
            b.unsubscribeByKey(a);
            delete Nv[a]
        }))
    }
    function Uv(a, b) {
        var c = Sv();
        return c ? c.publish.apply(c, arguments) : !1
    }
    function Sv() {
        return n("yt.pubsub.instance_")
    }
    ;ba("yt.pubsub.publish", Uv, void 0);
    function Wv() {
        this.a = {};
        this.g = []
    }
    v(Wv, sv);
    da(Wv);
    f = Wv.prototype;
    f.fj = "subscription-button";
    f.register = function() {
        tv(this, "click", this.Jp);
        this.g.push(Rv("subscription-subscribe-loading", this.Ip, this), Rv("subscription-subscribe-loaded", this.Hp, this), Rv("subscription-unsubscirbe-loading", this.Ip, this), Rv("subscription-unsubscribe-loaded", this.Hp, this), Rv("subscription-subscribe-success", this.qx, this), Rv("subscription-unsubscribe-success", this.rx, this), Rv("subscription-enable-ypc", this.ox, this), Rv("subscription-disable-ypc", this.nx, this))
    }
    ;
    f.Jp = function(a) {
        var b = K(a, "href"), c;
        c = (c = zf("PLAYER_CONFIG")) && c.args && void 0 !== c.args.authuser || null != zf("SESSION_INDEX") || zf("LOGGED_IN") ? !0 : !1;
        if (b)
            a = K(a, "target") || "_self",
            window.open(b, a);
        else if (c) {
            b = K(a, "channel-external-id");
            c = K(a, "sessionlink");
            var d;
            if (K(a, "ypc-enabled")) {
                d = K(a, "ypc-item-type");
                var e = K(a, "ypc-item-id")
                  , g = K(a, "ypc-offers-url");
                d = {
                    itemType: d,
                    itemId: e,
                    offersUrl: g,
                    subscriptionElement: a
                }
            } else
                d = null;
            e = K(a, "parent-url");
            K(a, "is-subscribed") ? (g = K(a, "subscription-id"),
            Uv("subscription-unsubscribe", b, g, d, a, c, e)) : Uv("subscription-subscribe", b, d, a, c, e)
        } else
            Xv(this, a)
    }
    ;
    f.Ip = function(a) {
        this.Qf(a, this.kq, !0)
    }
    ;
    f.Hp = function(a) {
        this.Qf(a, this.kq, !1)
    }
    ;
    f.qx = function(a, b) {
        this.Qf(a, this.lq, !0, b)
    }
    ;
    f.rx = function(a) {
        this.Qf(a, this.lq, !1)
    }
    ;
    f.ox = function(a) {
        this.Qf(a, this.ry)
    }
    ;
    f.nx = function(a) {
        this.Qf(a, this.qy)
    }
    ;
    f.lq = function(a, b, c) {
        b ? (jf(a, "is-subscribed", "true"),
        c && jf(a, "subscription-id", c)) : (this.removeData(a, "is-subscribed"),
        this.removeData(a, "subscription-id"));
        Yv(a)
    }
    ;
    f.kq = function(a, b) {
        var c = sd(a, "yt-uix-button-subscription-container");
        Pc(c, "yt-subscription-button-disabled-mask-container", b);
        a.setAttribute("aria-busy", b ? "true" : "false");
        a.disabled = b
    }
    ;
    function Yv(a) {
        var b = K(a, "style-type")
          , c = !!K(a, "is-subscribed")
          , b = "-" + b
          , d = "yt-uix-button-subscribed" + b;
        Pc(a, "yt-uix-button-subscribe" + b, !c);
        Pc(a, d, c);
        K(a, "subscriber-count-tooltip") && !K(a, "subscriber-count-show-when-subscribed") && (b = $(vv.getInstance()),
        Pc(a, b, !c),
        a.title = c ? "" : K(a, "subscriber-count-title"));
        c ? L(function() {
            Lc(a, "hover-enabled")
        }, 1E3) : Mc(a, "hover-enabled")
    }
    f.ry = function(a) {
        var b = !!K(a, "ypc-item-type")
          , c = !!K(a, "ypc-item-id")
          , d = !!K(a, "ypc-offers-url");
        !K(a, "ypc-enabled") && b && c && d && (Lc(a, "ypc-enabled"),
        jf(a, "ypc-enabled", "true"))
    }
    ;
    f.qy = function(a) {
        K(a, "ypc-enabled") && (Mc(a, "ypc-enabled"),
        this.removeData(a, "ypc-enabled"))
    }
    ;
    function Zv(a, b) {
        var c = Uc($(a));
        return Qa(c, function(a) {
            return b == K(a, "channel-external-id")
        }, a)
    }
    f.Iy = function(a, b, c) {
        var d = hb(arguments, 2);
        x(a, function(a) {
            b.apply(this, db(a, d))
        }, this)
    }
    ;
    f.Qf = function(a, b, c) {
        var d = Zv(this, a)
          , d = db([d], hb(arguments, 1));
        this.Iy.apply(this, d)
    }
    ;
    function Xv(a, b) {
        var c = t(function(a) {
            a.subscription_ajax && Af("subscription_ajax", a.subscription_ajax);
            this.Jp(b)
        }, a);
        Vv(c)
    }
    ;function $v(a, b, c) {
        b || (b = {});
        var d = c || window;
        c = "undefined" != typeof a.href ? a.href : String(a);
        a = b.target || a.target;
        var e = [], g;
        for (g in b)
            switch (g) {
            case "width":
            case "height":
            case "top":
            case "left":
                e.push(g + "=" + b[g]);
                break;
            case "target":
            case "noreferrer":
                break;
            default:
                e.push(g + "=" + (b[g] ? 1 : 0))
            }
        g = e.join(",");
        if (b.noreferrer) {
            if (b = d.open("", a, g))
                C && -1 != c.indexOf(";") && (c = "'" + c.replace(/'/g, "%27") + "'"),
                b.opener = null,
                c = Aa(c),
                b.document.write('<META HTTP-EQUIV="refresh" content="0; url=' + c + '">'),
                b.document.close()
        } else
            b = d.open(c, a, g);
        return b
    }
    function aw(a, b) {
        var c;
        c = b || {};
        c.target = c.target || a.target || "YouTube";
        c.width = c.width || 600;
        c.height = c.height || 600;
        (c = $v(a, c)) ? (c.opener || (c.opener = window),
        c.focus()) : c = null;
        return !c
    }
    ;function bw(a) {
        this.b = a || 1;
        zp.call(this, 30 * this.b, 30 * this.b);
        this.u = this.width / 2;
        this.i = this.height / 2;
        this.A = 0;
        this.O.translate(this.u, this.i)
    }
    v(bw, zp);
    bw.prototype.show = function() {
        bw.D.show.call(this);
        var a = this.F;
        this.C = new Date;
        this.g(a, 125)
    }
    ;
    bw.prototype.F = function() {
        if (this.O) {
            this.O.clearRect(-this.u, -this.i, this.width, this.height);
            for (var a = this.A++ % 8, b = 0; 8 > b; b++) {
                var c = 2 * Math.PI / 8 * (a + b)
                  , d = 11 * this.b * Math.cos(c)
                  , c = 11 * this.b * Math.sin(c)
                  , e = (b + 1) / 9;
                this.O.beginPath();
                this.O.arc(d, c, 4 * this.b, 0, 2 * Math.PI, !1);
                this.O.fillStyle = "rgba(189, 189, 189, " + e + ")";
                this.O.fill()
            }
        } else
            M(this.a)
    }
    ;
    bw.prototype.hide = function() {
        M(this.a);
        bw.D.hide.call(this)
    }
    ;
    function cw() {
        Y.call(this, ["div", "ytp-sentiment-display", ["div", "ytp-sentiment-bar", ["div", "ytp-sentiment-bar-likes"], ["div", "ytp-sentiment-bar-dislikes"]]]);
        this.b = this.template.a["ytp-sentiment-bar-likes"];
        this.a = this.template.a["ytp-sentiment-bar-dislikes"]
    }
    v(cw, Y);
    cw.prototype.H = function() {
        this.a = this.b = null;
        cw.D.H.call(this)
    }
    ;
    function dw() {
        var a = ["button", "ytp-button-share-more", ["div", "ytp-button-share-more-icon yt-uix-button-icon-new-window"], ["span", "ytp-button-share-more-content", Z("YTP_BUTTON_MORE_SHARE")]];
        Y.call(this, a)
    }
    v(dw, Y);
    function ew(a, b, c, d) {
        vp.call(this, a, "share-service-icon-" + d + "-sharebar", b, c);
        G(this.element, "share-service-icon-sharebar")
    }
    v(ew, vp);
    function fw() {
        Y.call(this, ["div", "ytp-share-url-container", ["input", "ytp-share-url"]]);
        this.a = this.template.a["ytp-share-url"]
    }
    v(fw, Y);
    fw.prototype.H = function() {
        this.a = null;
        fw.D.H.call(this)
    }
    ;
    function gw(a, b, c) {
        T.call(this);
        this.a = a;
        this.g = b;
        this.k = c;
        this.jb = new Ao(this);
        this.i = this.b = this.j = this.da = null;
        this.A = this.o = !1
    }
    v(gw, T);
    f = gw.prototype;
    f.Cj = function() {
        var a = D("html5-title", this.a);
        this.j = D("html5-title-text", a);
        this.jb.listen(this.j, "click", this.Dn);
        this.b = new hv(this.k);
        this.b.X(a, 1);
        this.jb.listen(this.b.g, "click", this.ck);
        this.g.Ld && this.b.g.hide();
        this.jb.listen(this.b.i, "click", this.Oh)
    }
    ;
    f.reset = function() {}
    ;
    f.update = function(a) {
        this.da = a;
        this.reset();
        var b = a.title || "";
        iv(this.b, a.Pg);
        md(this.j, b);
        I(this.a, "sentiment-like", 0 == a.Pg);
        I(this.a, "sentiment-dislike", 1 == a.Pg)
    }
    ;
    f.Dn = function() {
        this.qq()
    }
    ;
    f.ck = function() {
        if (!this.o) {
            this.o = !0;
            jp(this.da ? this.da.L : void 0, !1, this.iu, ca, this, this.g.Qa, this.g.Za);
            if (!this.i) {
                var a = D("html5-info-panel-loading-icon", this.a);
                this.i = new bw;
                G(this.i.element, "html5-info-panel-loader");
                this.i.X(a);
                O(this, this.i)
            }
            this.i.show()
        }
        ev(this.b.i);
        H(this.a, "show-share");
        fv(this.b.g);
        return hf(this.a, "show-more-info")
    }
    ;
    f.Oh = function(a) {
        ev(this.b.g);
        H(this.a, "show-more-info");
        if ("detailpage" != this.g.Z) {
            if (!this.A) {
                this.A = !0;
                var b = {
                    action_get_share_info: 1,
                    feature: "player_embedded",
                    video_id: this.da ? this.da.L : void 0
                };
                this.g.Qa && (b.authuser = this.g.Qa);
                this.g.Za && (b.pageid = this.g.Za);
                Hk("/share_ajax", {
                    O: this,
                    method: "GET",
                    onError: this.ku,
                    onSuccess: this.lu,
                    xf: b
                })
            }
            a && a.stopPropagation();
            fv(this.b.i);
            hf(this.a, "show-share")
        }
    }
    ;
    f.iu = function(a, b) {
        if (!this.ia()) {
            var c = D("html5-info-panel", this.a)
              , d = b.user_info;
            this.da && (this.da.Ca = d.external_id);
            var e = D("html5-author-img", c).getElementsByTagName("img")[0];
            e.src = d.image_url;
            this.jb.listen(e, "click", this.wo);
            e = D("html5-author-name", c);
            md(e, d.channel_title || d.public_name || d.username);
            this.jb.listen(e, "click", this.wo);
            e = b.video_info;
            e.subscription_ajax_token && Af("subscription_ajax", e.subscription_ajax_token);
            var g = D("html5-subscribe-button-container", c);
            g.innerHTML = d.subscription_button_html ? d.subscription_button_html : "";
            d = Wv.getInstance();
            (d = D($(d), g)) && fp(this.k, d);
            D("html5-view-count", c).innerHTML = e.view_count_string;
            var d = parseInt(e.likes_count_unformatted, 10)
              , g = parseInt(e.dislikes_count_unformatted, 10)
              , h = new cw
              , k = 0
              , m = 0;
            0 < d + g && (k = 100 * d / (d + g),
            m = 100 * g / (d + g));
            h.b.style.width = k + "%";
            h.a.style.width = m + "%";
            h.X(D("html5-video-info", c), 2);
            d = D("html5-description-text", c);
            md(d, e.description);
            this.i.hide();
            c = D("html5-info-panel-content", c);
            Uo(c)
        }
    }
    ;
    f.lu = function(a, b) {
        if (!this.ia()) {
            var c = D("share-bar")
              , d = new fw;
            Wc(d.a, {
                value: b.url_short
            });
            d.X(c);
            ef(this.a, "show-share") && (d.a.focus(),
            d.a.select());
            for (var d = b.links, e = 0; e < Math.min(3, d.length); e++) {
                var g = new ew(this.k,d[e].name,d[e].sname,d[e].img);
                g.X(c);
                this.jb.listen(g, "click", qa(aw, d[e].url, {}))
            }
            d = new dw;
            this.jb.listen(d, "click", t(this.Fi, this, b.more));
            d.X(c);
            d = new vp(this.k,"yt-uix-button-icon-share-bar-close",Z("YTP_BUTTON_CLOSE"),Z("YTP_BUTTON_CLOSE"));
            d.X(c);
            this.jb.listen(d, "click", this.Oh)
        }
    }
    ;
    f.ku = function() {}
    ;
    f.wo = function() {
        var a = this.g
          , b = this.da
          , c = ""
          , c = b.Ca ? a.hb + "channel/UC" + b.Ca : a.hb + "user/" + b.ri;
        this.Fi(c)
    }
    ;
    f.Fi = function(a) {
        $v(a)
    }
    ;
    f.qq = function() {
        this.Fi(hw(this.g, this.da))
    }
    ;
    f.H = function() {
        this.jb.removeAll();
        this.da = this.j = this.g = this.a = null;
        gw.D.H.call(this)
    }
    ;
    function iw() {
        Y.call(this, ["div", "ytp-playlist-tray-index-length", ["span", "ytp-playlist-tray-index", "{{index}}"], ["span", "", " / "], ["span", "ytp-playlist-tray-length", "{{length}}"]])
    }
    v(iw, Y);
    iw.prototype.yg = function(a) {
        Jo(this.template, "index", a + 1)
    }
    ;
    function jw(a) {
        bv.call(this, a, "ytp-button-expand", Z("YTP_BUTTON_EXPAND"), "ytp-button-collapse", Z("YTP_BUTTON_COLLAPSE"));
        this.wa([["div", "ytp-button-playlist-icon"], ["div", "ytp-button-playlist-text", Z("YTP_BUTTON_PLAYLIST")]])
    }
    v(jw, bv);
    function kw(a) {
        Y.call(this, ["div", "ytp-playlist-tray-controller"]);
        this.b = new jw(a);
        this.b.X(this.template.M());
        O(this, this.b);
        this.a = new iw;
        this.a.X(this.template.M());
        O(this, this.a)
    }
    v(kw, Y);
    function lw(a, b, c, d) {
        a = ["div", "ytp-playlist-tray-action-info", ["div", "ytp-playlist-tray-playlist-title", b], ["div", "ytp-playlist-tray-author-name", Z("YTP_AUTHOR_ATTRIBUTION", {
            author: c
        })], ["div", "ytp-playlist-tray-description-text", d]];
        Y.call(this, a)
    }
    v(lw, Y);
    function mw(a) {
        var b = ["div", "ytp-playlist-tray-action-share", ["div", "ytp-playlist-tray-action-share-heading", Z("YTP_SHARE_PLAYLIST")], ["div", "share-bar-services"]];
        Y.call(this, b);
        this.i = a;
        this.b = new Ao(this);
        this.g = this.a = null
    }
    v(mw, Y);
    mw.prototype.H = function() {
        this.b.removeAll();
        this.b = null;
        mw.D.H.call(this)
    }
    ;
    function nw(a, b) {
        Y.call(this, ["div", "ytp-playlist-tray-item", ["span", "ytp-playlist-tray-item-index", "{{index}}"], ["span", "ytp-playlist-tray-item-now-playing", "\u25b6"], ["img", "ytp-playlist-tray-item-thumbnail", {
            src: "{{image}}"
        }], ["span", "ytp-playlist-tray-item-title", "{{title}}"], ["span", "ytp-playlist-tray-item-author", "{{author}}"]]);
        this.a = b;
        this.template.update({
            index: b + 1,
            title: a.title,
            author: a.ri,
            image: dp(a.L, "default.jpg")
        })
    }
    v(nw, Y);
    nw.prototype.yg = function(a) {
        I(this.element, "ytp-playlist-tray-item-current", this.a == a)
    }
    ;
    function ow() {
        Y.call(this, ["div", "ytp-playlist-tray-tray"]);
        this.a = null;
        this.i = new Ao(this);
        this.b = []
    }
    v(ow, Y);
    function pw(a, b) {
        b != a.a && (a.a && a.a.ba("shuffle", a.g, a),
        a.a = b,
        a.a.G("shuffle", a.g, a),
        a.g())
    }
    ow.prototype.g = function() {
        this.i.removeAll();
        this.b = [];
        hd(this.element);
        for (var a = 0; a <= this.a.dc - 1; ++a) {
            var b = Wh(this.a, a);
            b && (b = new nw(b,a),
            b.yg(this.a.xa),
            this.b.push(b),
            this.i.listen(b, "click", qa(this.C, a)),
            b.X(this.element))
        }
    }
    ;
    ow.prototype.C = function(a) {
        a = {
            index: a
        };
        var b = document.createEvent("CustomEvent");
        b.initCustomEvent("playvideoat", !0, !0, a || null);
        this.dispatchEvent(b)
    }
    ;
    ow.prototype.H = function() {
        this.i.removeAll();
        ow.D.H.call(this)
    }
    ;
    function qw(a) {
        jo.call(this, a);
        var b = S(a);
        this.b = new Ao(this);
        this.F = mi(a).j;
        this.j = new Eo(["div", ["ytp-playlist-tray-container", "html5-stop-propagation"], ["div", ["ytp-playlist-tray-info", "show-more-info"]]]);
        O(this, this.j);
        a = this.j.M();
        mi(this.a).g.appendChild(a);
        this.i = new ow;
        this.b.listen(this.i, "playvideoat", t(this.hr, this));
        O(this, this.i);
        this.i.X(this.j.M(), 0);
        this.A = D("html5-playlist-button", b);
        N(this.A, "click", t(this.Fm, this));
        this.u = this.k = null;
        this.I = this.J = !1;
        this.g = new kw(this.F);
        this.g.X(D("html5-title", void 0), 0);
        this.b.listen(this.g.b, "click", this.Fm);
        this.G("fullscreentoggled", this.xm, this);
        this.G("videodatachange", this.ym, this);
        this.G("onResize", this.zj, this);
        this.G("clearvideooverlays", this.unload, this)
    }
    v(qw, jo);
    f = qw.prototype;
    f.pa = "playlist";
    f.create = function() {
        qw.D.create.call(this)
    }
    ;
    f.hu = function() {
        this.g.a.yg(this.a.nk());
        var a = fo(this.a.zb());
        Jo(this.g.a.template, "length", a)
    }
    ;
    f.destroy = function() {
        this.a.zb() || (this.ba("fullscreentoggled", this.xm, this),
        this.ba("videodatachange", this.ym, this),
        this.ba("onResize", this.zj, this),
        this.ba("clearvideooverlays", this.unload, this),
        pw(this.i, null),
        qw.D.destroy.call(this))
    }
    ;
    f.load = function() {
        this.aa = !0;
        qw.D.load.call(this);
        var a = this.a.zb();
        this.I || (pw(this.i, a),
        a.G("shuffle", this.hu, this),
        this.I = !0);
        for (var a = this.i, b = 0; b < a.b.length; b++)
            a.b[b].yg(a.a.xa);
        dv(this.g.b)
    }
    ;
    f.unload = function() {
        this.aa = !1;
        qw.D.unload.call(this);
        ev(this.g.b)
    }
    ;
    f.hr = function(a) {
        this.a.yn(a.detail.index);
        this.unload()
    }
    ;
    f.Fm = function() {
        if (this.aa)
            this.unload();
        else if (this.B("command_clear_video_overlays"),
        this.load(),
        this.zj(),
        !this.k) {
            var a = D("ytp-playlist-tray-info")
              , b = new hv(this.F);
            b.X(a, 0);
            this.b.listen(b.g, "click", this.Wt);
            this.b.listen(b.i, "click", this.Xt);
            b = this.a.zb();
            this.k = new lw(0,b.title,b.i,b.description);
            this.k.X(a)
        }
    }
    ;
    f.Wt = function() {
        var a = D("ytp-playlist-tray-info");
        Lc(a, "show-more-info");
        Mc(a, "show-share")
    }
    ;
    f.Xt = function() {
        var a = D("ytp-playlist-tray-info");
        Mc(a, "show-more-info");
        Lc(a, "show-share");
        this.J || (this.u = new mw(this.F),
        this.u.X(a),
        this.J = !0,
        Hk("/share_ajax", {
            O: this,
            method: "GET",
            onError: this.Mv,
            onSuccess: this.Nv,
            xf: {
                action_get_share_info: 1,
                feature: "player_embedded",
                video_id: this.a.getVideoData().L,
                list: this.a.zb().g
            }
        }))
    }
    ;
    f.hide = function() {
        var a = D("ytp-playlist-tray-info");
        Mc(a, "show-more-info");
        Mc(a, "show-share")
    }
    ;
    f.Nv = function(a, b) {
        var c = this.u;
        c.b.removeAll();
        var d = b.links
          , e = c.template.a["share-bar-services"];
        hd(e);
        for (var g = 0; g < Math.min(3, d.length); g++) {
            var h = new ew(c.i,d[g].name,d[g].sname,d[g].img);
            h.X(e);
            c.b.listen(h, "click", qa(aw, d[g].url))
        }
        c.a && F(c.a.element);
        c.a = new dw;
        c.b.listen(c.a, "click", qa($v, b.more));
        c.a.X(c.element);
        c.g && F(c.g.element);
        c.g = new fw;
        Wc(c.g.a, {
            value: b.url_short
        });
        c.g.X(c.element)
    }
    ;
    f.Mv = function() {}
    ;
    f.xm = function(a) {
        var b = this.a.N().Z;
        this.aa && !a && "detailpage" == b && this.unload()
    }
    ;
    f.ym = function() {
        this.g.a.yg(this.a.nk());
        var a = fo(this.a.zb());
        Jo(this.g.a.template, "length", a)
    }
    ;
    f.zj = function() {
        if (this.aa) {
            var a = mi(this.a).Pc();
            I(this.j.M(), "show-tray-panel", 560 < a.width)
        }
    }
    ;
    f.eb = function(a) {
        return !!a.zb()
    }
    ;
    function rw(a) {
        return a.zb() ? new qw(a) : null
    }
    f.H = function() {
        Yf(this.A);
        this.A = null;
        qw.D.H.call(this)
    }
    ;
    var sw = RegExp("^(ar|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Arab|Hebr|Thaa|Nkoo|Tfng))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)", "i");
    var tw = ["left", "right", "center"]
      , uw = {
        id: 0,
        priority: 0,
        anchorPoint: 7,
        hi: 50,
        Ry: 80,
        ce: 95,
        xd: 15,
        Ek: 100,
        isVisible: !0,
        textAlign: tw[2],
        Je: 0,
        backgroundColor: "#080808",
        fi: "#fff",
        Jy: 1,
        Sl: 1
    }
      , vw = {
        id: 98
    }
      , ww = {
        id: 99,
        priority: 1,
        anchorPoint: 0,
        hi: 5,
        ce: 7,
        xd: 2,
        Ek: 32,
        textAlign: tw[0]
    }
      , xw = ["CA", "MX", "US"];
    function yw(a) {
        a = a || uw;
        ra(this, a)
    }
    f = yw.prototype;
    f.anchorPoint = 7;
    f.hi = 50;
    f.ce = 95;
    f.Ry = 80;
    f.Je = 0;
    f.textAlign = "center";
    f.backgroundColor = "#080808";
    f.fi = "#fff";
    f.Jy = 1;
    f.Sl = 1;
    f.xd = 15;
    f.Ek = 32;
    f.isVisible = !0;
    f.Op = '"Arial Unicode Ms", Arial';
    f.Px = "100%";
    function zw(a, b) {
        this.id = a;
        this.ua = new yw(b);
        var c = "caption-window";
        0 == this.id && (c = "standard-caption-window");
        this.oa = E("div", {
            id: "caption-window-" + this.id,
            "class": c
        });
        this.Fb = E("span", {
            "class": "captions-text",
            style: "visibility: hidden"
        });
        this.Fb.innerHTML = "C";
        this.qa = E("span", {
            "class": "captions-text",
            tabindex: "4",
            "aria-live": "assertive"
        });
        this.aj = E("div", {
            "class": "caption-window-transform"
        });
        this.aj.appendChild(this.qa);
        this.oa.appendChild(this.aj)
    }
    f = zw.prototype;
    f.id = 0;
    f.ua = null;
    f.Mg = "";
    f.Fc = null;
    f.oa = null;
    f.aj = null;
    f.qa = null;
    f.Fb = null;
    f.type = 1;
    f.getType = function() {
        return this.type
    }
    ;
    f.Yi = function() {
        var a;
        this.Fb.style.fontFamily = this.qa.style.fontFamily;
        this.oa.appendChild(this.Fb);
        a = this.Fb.offsetHeight;
        this.oa.removeChild(this.Fb);
        return a
    }
    ;
    f.Ye = function() {
        this.qa && (0 != this.id && (Od(this.oa, "100%"),
        Od(this.oa, this.qa.offsetWidth)),
        Aw(this),
        So(this.oa, this.ua.isVisible))
    }
    ;
    function Aw(a) {
        Bd(a.oa, a.ua.hi + "%", a.ua.ce + "%");
        for (var b = 0; 8 >= b; b++)
            H(a.oa, "anchor-point-" + b);
        G(a.oa, "anchor-point-" + a.ua.anchorPoint)
    }
    f.gp = function(a) {
        var b = [];
        x(a, function(a) {
            a.Zi ? b[b.length - 1] += a.be : b.push(a.be)
        });
        this.Qe(b.join("\n"));
        this.Fc = a
    }
    ;
    f.Qe = function(a) {
        this.Mg = a = Bw(a);
        this.qa.innerHTML = this.Mg;
        this.Tl();
        this.Ye()
    }
    ;
    function Cw(a, b) {
        b && (b = b.replace(/<[^>]*>?/g, ""),
        a.Qe(b))
    }
    f.Tl = function() {
        this.oa.style.textAlign = this.ua.textAlign;
        this.qa.style.backgroundColor = this.ua.backgroundColor;
        this.qa.style.color = this.ua.fi;
        this.qa.style.opacity = this.ua.Sl;
        this.qa.style.fontFamily = this.ua.Op;
        this.qa.style.fontSize = this.ua.Px;
        1 == this.ua.Je ? this.qa.setAttribute("dir", "rtl") : this.qa.removeAttribute("dir")
    }
    ;
    f.toString = function() {
        var a = "Caption window (" + this.id + "): " + this.Mg, b;
        for (b in this.ua)
            a += b + " " + this.ua[b] + " | ";
        return a
    }
    ;
    function Bw(a) {
        a = a.split("\n");
        for (var b = 0, c = a.length; b < c; b++)
            a[b] = a[b] ? "&nbsp;" + a[b] + "&nbsp;" : "";
        return a.join("<br>")
    }
    f.bj = function() {
        this.Fc = [];
        this.Qe("")
    }
    ;
    function Dw(a, b, c) {
        Y.call(this, ["div", "ytp-drop-down", "{{content}}"]);
        this.F = a;
        this.g = !1;
        this.A = 0;
        this.u = this.i = null;
        this.a = new Y(["div", "ytp-drop-down-menu", "{{content}}"]);
        O(this, this.a);
        this.b = new vp(this.F,"ytp-drop-down-label");
        O(this, this.b);
        this.listen(this.b, "click", this.I);
        this.C = new Y(["div", "ytp-drop-down-label-content", "{{content}}"]);
        O(this, this.C);
        this.b.wa([this.C, ["div", "ytp-drop-down-arrow"]]);
        this.wa([this.a, this.b]);
        this.stopPropagation("click");
        q(b) && this.Ab(b);
        q(c) && this.u != c && (this.a.wa(c),
        this.u = c,
        Ew(this));
        Ew(this)
    }
    v(Dw, Y);
    Dw.prototype.Ab = function(a) {
        this.i != a && (this.C.wa(a),
        this.i = a,
        Ew(this))
    }
    ;
    Dw.prototype.j = function() {
        this.g = !1;
        Ew(this)
    }
    ;
    Dw.prototype.I = function() {
        this.g = !this.g;
        Ew(this)
    }
    ;
    function Fw(a, b) {
        b > a.A && (a.A = b,
        a.element.style.minWidth = a.A + "px")
    }
    function Ew(a) {
        a.g ? (a.a.show(),
        a.listen(window, "blur", a.j, a, "menu"),
        a.listen(document, "click", a.j, a, "menu")) : (a.a.hide(),
        Oo(a, "menu"));
        var b = Pd(a.b.M());
        a.a.M().style.bottom = b.height - 1 + "px";
        Fw(a, b.width)
    }
    Dw.prototype.H = function() {
        this.i = this.u = this.F = null;
        Dw.D.H.call(this)
    }
    ;
    function Gw(a, b) {
        vp.call(this, a, "ytp-drop-down-menu-button");
        this.b = new Y(["div", "ytp-drop-down-menu-button-check"]);
        O(this, this.b);
        this.g = b || !1
    }
    v(Gw, vp);
    Gw.prototype.wa = function(a) {
        Gw.D.wa.call(this, [this.b, a])
    }
    ;
    Gw.prototype.Ia = function(a) {
        I(this.element, "ytp-drop-down-menu-button-selected", a);
        this.g || I(this.element, "ytp-drop-down-menu-button-checked", a)
    }
    ;
    function Hw(a, b) {
        a.g && I(a.element, "ytp-drop-down-menu-button-checked", b)
    }
    ;function Iw(a, b, c, d) {
        Y.call(this, ["div", "ytp-drop-down-menu-content", "{{content}}"]);
        this.C = a;
        this.u = d || !1;
        this.i = {};
        this.a = [];
        this.g = this.b = null;
        this.F = b;
        this.A = c
    }
    v(Iw, Y);
    function Jw(a, b) {
        if (!pb(a.a, b)) {
            for (var c = 0; c < a.a.length; c++)
                Kw(a, a.a[c]).zf();
            a.a = [];
            x(b, function(a) {
                this.a.push(a);
                var b = Kw(this, a);
                Hw(b, a == this.g);
                b.Ia(a == this.b);
                b.X(this.element)
            }, a)
        }
    }
    Iw.prototype.Ia = function(a) {
        this.b && Kw(this, this.b).Ia(!1);
        a && Kw(this, a).Ia(!0);
        this.b = a
    }
    ;
    Iw.prototype.getSelected = function() {
        return this.b
    }
    ;
    function Kw(a, b) {
        var c = a.i[b.toString()];
        if (c)
            return c;
        c = new Gw(a.C,a.u);
        O(a, c);
        a.i[b.toString()] = c;
        c.wa(new Lw(a.F(b)));
        c.listen(c.M(), "click", t(a.A, a, b));
        return c
    }
    Iw.prototype.H = function() {
        this.i = {};
        this.a = [];
        this.C = null;
        Iw.D.H.call(this)
    }
    ;
    function Mw(a) {
        Yt.call(this);
        this.C = this.g;
        this.i = {};
        this.i[this.g] = Z("YTP_TRANSLATE_CAPTIONS");
        this.a = Z("YTP_SUBTITLES_TITLE");
        this.j = new Iw(a,t(this.u, this),t(this.F, this));
        O(this, this.j);
        this.element = new Dw(a,void 0,this.j);
        O(this, this.element);
        Fw(this.element, 150);
        this.priority = 2;
        this.b = !0;
        this.k = "captions"
    }
    v(Mw, Yt);
    Mw.prototype.g = "translate";
    function Nw(a, b) {
        for (var c = [a.g], d = 0; d < b.length; d++) {
            var e = b[d]
              , g = e.toString();
            a.i[g] || (a.i[g] = Ow(e));
            c.push(g)
        }
        Jw(a.j, c)
    }
    function Pw(a, b) {
        a.i[b] && (a.C = b,
        a.j.Ia(b),
        a.element.Ab(a.u(b)))
    }
    function Qw(a, b) {
        var c = Kw(a.j, a.g);
        b ? c.disable() : c.enable()
    }
    Mw.prototype.u = function(a) {
        return this.i[a]
    }
    ;
    Mw.prototype.F = function(a) {
        this.element.j();
        a != this.g ? (Pw(this, a),
        Zf(this.element, "change")) : Zf(this.element, "select")
    }
    ;
    function Rw(a) {
        Yt.call(this);
        this.a = Z("YTP_SUBTITLES_TITLE") || "Captions";
        this.element = new Zt(a,[Z("YTP_ON"), Z("YTP_OFF")]);
        O(this, this.element);
        this.priority = 1;
        this.o = !0;
        this.k = "captions";
        this.Ia(1)
    }
    v(Rw, Yt);
    Rw.prototype.A = function() {
        Zf(this.element, "select")
    }
    ;
    Rw.prototype.getSelected = function() {
        return this.element.getSelected()
    }
    ;
    Rw.prototype.Ia = function(a) {
        this.element.Ia(a)
    }
    ;
    function Sw(a, b) {
        zw.call(this, a, b);
        this.qa.style.display = "block";
        this.qa.style.padding = "0";
        this.Ob = [];
        var c = this.qa;
        H(c, "captions-text");
        G(c, "caption-painton-text-rows")
    }
    v(Sw, zw);
    f = Sw.prototype;
    f.type = 0;
    f.uo = "";
    f.Lg = !1;
    f.Cb = null;
    f.Ob = null;
    f.Yi = function() {
        return this.Ob[0] ? this.Ob[0].offsetHeight : 0
    }
    ;
    function Tw(a) {
        return a.Ob.reduce(function(a, c) {
            return Math.max(a, c.offsetWidth)
        }, 0)
    }
    f.Ye = function() {
        0 != this.id && (Od(this.oa, "100%"),
        Od(this.oa, this.Lg ? Tw(this) : this.Cb.width));
        var a = Math.round(this.ua.xd * this.Yi());
        this.oa.style.maxHeight = a + "px";
        Aw(this);
        So(this.oa, this.ua.isVisible)
    }
    ;
    f.Qe = function(a) {
        this.bj();
        a = Bw(a);
        this.Lg || (this.Mg = a);
        a = a.split("<br>");
        for (var b = 0, c = a.length; b < c; b++)
            if (a[b]) {
                var d = E("div", {
                    "class": "caption-row-holder"
                })
                  , e = E("span", {
                    "class": "caption-row captions-text"
                });
                d.appendChild(e);
                e.innerHTML = a[b];
                this.Lg || (this.qa.style.height = this.Cb.height + "px",
                this.qa.style.width = this.Cb.width + "px",
                d.style.position = "absolute",
                d.style.top = this.Cb.to[b] + "px",
                d.style.left = this.Cb.ro[b] + "px");
                this.qa.appendChild(d);
                this.Ob.push(e)
            }
        this.Tl();
        this.Ye()
    }
    ;
    f.bj = function() {
        for (var a = 0, b = this.Ob.length; a < b; a++) {
            var c = sd(this.Ob[a], "caption-row-holder");
            F(c)
        }
        this.Ob = []
    }
    ;
    f.Tl = function() {
        this.oa.style.textAlign = this.ua.textAlign;
        for (var a = 0, b = this.Ob.length; a < b; a++)
            this.Ob[a].style.backgroundColor = this.ua.backgroundColor;
        this.qa.style.color = this.ua.fi;
        this.qa.style.opacity = this.ua.Sl;
        this.qa.style.fontFamily = this.ua.Op;
        1 == this.ua.Je ? this.qa.setAttribute("dir", "rtl") : this.qa.removeAttribute("dir")
    }
    ;
    function Uw(a, b) {
        zw.call(this, a, b);
        this.Fc = [];
        this.ke = [];
        this.Eb = [];
        this.Mf = new kj(433);
        this.Mf.stop();
        N(this.Mf, "tick", t(this.Wx, this))
    }
    v(Uw, zw);
    f = Uw.prototype;
    f.type = 2;
    f.Vx = 32;
    f.Eb = null;
    f.le = 0;
    f.ke = null;
    f.Mf = null;
    f.Ye = function() {
        Od(this.oa, "100%");
        var a = this.oa.offsetWidth
          , a = Math.min(Vw(this), a);
        Od(this.oa, a + "px");
        Od(this.aj, "100%");
        this.qa.style.whiteSpace = "nowrap";
        Aw(this);
        So(this.oa, this.ua.isVisible)
    }
    ;
    f.gp = function(a) {
        var b = a.length;
        if (0 >= b)
            this.bj();
        else {
            for (var c = 0; c < b && 0 <= this.Fc.indexOf(a[c]); )
                c++;
            this.Fc = this.Fc.concat(a.slice(c));
            Ww(this)
        }
    }
    ;
    f.bj = function() {
        this.Fc = [];
        this.Eb = [];
        this.le = 0;
        this.Eb = [];
        this.ke = [];
        Xw(this)
    }
    ;
    function Ww(a) {
        if (!Yw(a))
            if (a.le >= a.Fc.length)
                Xw(a);
            else {
                var b = a.Eb.length - 1;
                0 > b && (a.ke.push(0),
                a.le = 0,
                a.Eb.push(""),
                b = 0);
                for (var c = a.Fc.length, d = a.le; d < c; d++) {
                    var e = a.Fc[d];
                    if ("\n" == e.be) {
                        a.le++;
                        a.ke[b]++;
                        break
                    }
                    if (e.Zi || 0 == a.Eb[b].length)
                        a.Eb[b] += e.be,
                        a.le++,
                        a.ke[b]++;
                    else
                        break
                }
                Xw(a);
                d < c && !Yw(a) && (b = a.Yi(),
                G(a.qa, "caption-rollup"),
                a.oa.style.overflow = "hidden",
                a.qa.style.top = -b + "px",
                a.Mf.start())
            }
    }
    function Yw(a) {
        return a.Mf.enabled || ef(a.qa, "caption-rollup")
    }
    f.Wx = function() {
        this.oa.style.overflow = "visible";
        this.qa.style.top = 0;
        this.Mf.stop();
        H(this.qa, "caption-rollup");
        this.Eb.push("");
        this.ke.push(0);
        Ww(this)
    }
    ;
    function Xw(a) {
        if (!Yw(a)) {
            for (; a.Eb.length < a.ua.xd; )
                a.Eb.unshift(""),
                a.ke.unshift(0);
            for (; a.Eb.length > a.ua.xd; ) {
                a.Eb.shift();
                var b = a.ke.shift();
                0 < b && (a.le -= b,
                a.Fc.splice(0, b))
            }
            a.Qe(a.Eb.join("\n"))
        }
    }
    function Vw(a) {
        a.Fb.style.fontFamily = a.qa.style.fontFamily;
        a.Fb.style.fontSize = a.qa.style.fontSize;
        a.qa.appendChild(a.Fb);
        a.Fb.innerHTML = "\u2014";
        var b = a.Fb.offsetWidth;
        a.Fb.innerHTML = "&nbsp;";
        b = 2 * a.Fb.offsetWidth + b * a.Vx;
        a.qa.removeChild(a.Fb);
        return b
    }
    ;function Zw(a) {
        this.a = a.Tc;
        this.i = a.priority;
        this.yc = a.yc || this.yc
    }
    Zw.prototype.a = 0;
    Zw.prototype.i = 0;
    Zw.prototype.yc = 0;
    Zw.prototype.toString = function() {
        return this.a + ", " + this.yc
    }
    ;
    function $w(a) {
        Zw.call(this, a);
        this.be = a.text || this.be;
        this.$h = a.windowId || this.$h;
        this.Zi = a.params.append || this.Zi;
        this.bq = a.params.row || this.bq;
        this.aq = a.params.Tx || this.aq
    }
    v($w, Zw);
    f = $w.prototype;
    f.be = "";
    f.Zi = !1;
    f.bq = 0;
    f.aq = 0;
    f.$h = 0;
    f.toString = function() {
        return this.a + ", " + this.yc + ": " + this.be
    }
    ;
    function ax(a) {
        var b = a.firstChild && a.firstChild.nodeValue || ""
          , c = 1E3 * parseFloat(a.getAttribute("start") || 0);
        a.getAttribute("t") && (c = parseInt(a.getAttribute("t"), 10));
        var d = 1E3 * parseFloat(a.getAttribute("dur") || 0);
        a.getAttribute("d") && (d = parseFloat(a.getAttribute("d")));
        var e = parseInt(a.getAttribute("w"), 10) || 0
          , b = {
            Tc: c,
            yc: d,
            text: b,
            windowId: e,
            priority: 5,
            params: {}
        };
        a.getAttribute("r") && (b.params.row = parseInt(a.getAttribute("r"), 10));
        a.getAttribute("c") && (b.params.Tx = parseInt(a.getAttribute("c"), 10));
        a.getAttribute("append") && (b.priority = 6,
        b.params.append = !0);
        return new $w(b)
    }
    function bx(a) {
        Zw.call(this, a);
        this.id = a.windowId || this.id;
        this.params = a.params
    }
    v(bx, Zw);
    bx.prototype.id = 0;
    bx.prototype.params = null;
    bx.prototype.g = "";
    bx.prototype.b = !1;
    function cx() {
        return new bx({
            Tc: -2147483648,
            yc: 4294967295,
            params: uw
        })
    }
    ;function dx(a) {
        if ("undefined" != typeof DOMParser)
            return (new DOMParser).parseFromString(a, "application/xml");
        if ("undefined" != typeof ActiveXObject) {
            var b = new ActiveXObject("MSXML2.DOMDocument");
            if (b) {
                b.resolveExternals = !1;
                b.validateOnParse = !1;
                try {
                    b.setProperty("ProhibitDTD", !0),
                    b.setProperty("MaxXMLSize", 2048),
                    b.setProperty("MaxElementDepth", 256)
                } catch (c) {}
            }
            b.loadXML(a);
            return b
        }
        throw Error("Your browser does not support loading xml documents");
    }
    ;function ex(a) {
        this.b = [];
        this.g = [];
        this.a = {};
        if (a && (a = dx(a)) && a.firstChild)
            switch (this.i = a,
            this.i.firstChild.tagName) {
            case "timedtext":
                a = this.i.firstChild.childNodes;
                for (var b = 0, c = a.length; b < c; b++)
                    switch (a[b].tagName) {
                    case "window":
                        var d = a[b]
                          , e = parseInt(d.getAttribute("id"), 10)
                          , g = void 0;
                        t: {
                            var h = this.a[e];
                            if (d.getAttribute("t") || d.getAttribute("start")) {
                                g = parseInt(d.getAttribute("t"), 10);
                                d.getAttribute("start") && (g = 1E3 * parseFloat(d.getAttribute("start")));
                                h && (h.a + h.yc >= g ? h.yc = g : h = null);
                                switch (d.getAttribute("op")) {
                                case "kill":
                                    g = null;
                                    break t;
                                case "define":
                                    h = null
                                }
                                h ? h.j = !0 : h = cx();
                                var k = {};
                                ra(k, h ? h.params : uw);
                                d.getAttribute("id") && (k.id = d.getAttribute("id"));
                                d.getAttribute("op") && (k.Ty = d.getAttribute("op"));
                                d.getAttribute("rc") && (k.xd = parseInt(d.getAttribute("rc"), 10));
                                d.getAttribute("cc") && (k.Ek = parseInt(d.getAttribute("cc"), 10));
                                d.getAttribute("ap") && (h = parseInt(d.getAttribute("ap"), 10),
                                k.anchorPoint = 0 > h || 8 < h ? 7 : h);
                                d.getAttribute("ah") && (k.hi = parseInt(d.getAttribute("ah"), 10));
                                d.getAttribute("av") && (k.ce = parseInt(d.getAttribute("av"), 10));
                                d.getAttribute("id") && (k.id = parseInt(d.getAttribute("id"), 10) || 0);
                                d.getAttribute("vs") && (k.isVisible = Boolean(d.getAttribute("vs")));
                                d.getAttribute("ju") && (k.textAlign = tw[parseInt(d.getAttribute("ju"), 10)]);
                                d.getAttribute("pd") && (k.Je = 1,
                                0 == parseInt(d.getAttribute("pd"), 10) && (k.Je = 0));
                                d.getAttribute("bc") && (k.backgroundColor = parseInt(d.getAttribute("bc"), 16));
                                d.getAttribute("bo") && (k.opacity = parseInt(d.getAttribute("bo"), 10) / 100);
                                d.getAttribute("fc") && (k.fi = parseInt(d.getAttribute("fc"), 16));
                                d.getAttribute("sd") && (k.vk = parseInt(d.getAttribute("sd"), 10));
                                h = parseInt(d.getAttribute("d"), 10) || 1E3 * parseFloat(d.getAttribute("dur")) || 2147483647;
                                d = {
                                    Tc: g,
                                    yc: h,
                                    params: k,
                                    windowId: parseInt(d.getAttribute("id"), 10)
                                };
                                g = new bx(d)
                            } else
                                g = null
                        }
                        this.a[e] = g;
                        this.g.push(g);
                        break;
                    case "text":
                        e = ax(a[b]),
                        this.b.push(e),
                        d = e.$h,
                        this.a[d] && (d = this.a[d],
                        e = e.be,
                        "" != d.g && (d.b = !0),
                        d.g += e)
                    }
                break;
            default:
                for (this.g.push(cx()),
                a = this.i.firstChild.childNodes,
                b = 0,
                c = a.length; b < c; b++)
                    e = ax(a[b]),
                    this.b.push(e)
            }
    }
    ex.prototype.b = null;
    ex.prototype.g = null;
    ex.prototype.a = null;
    function fx(a) {
        this.a = a.languageCode;
        this.b = a.languageName || null;
        this.g = a.languageOriginal || null;
        this.id = a.id || null;
        this.i = a.is_default || !1
    }
    ;function gx(a) {
        a = a || {};
        this.Rk = a.format;
        this.b = a.languageCode || "";
        this.Jg = a.languageName;
        this.Lb = a.kind || "";
        this.cc = a.name;
        this.Da = a.id;
        this.fo = a.is_servable;
        this.ki = a.is_default;
        this.li = a.is_translateable;
        a.translationLanguage && (this.a = new fx(a.translationLanguage))
    }
    function hx(a) {
        var b = {
            format: a.Rk,
            languageCode: a.b,
            languageName: a.Jg,
            displayName: Ow(a),
            kind: a.Lb,
            name: a.cc,
            id: a.Da,
            is_servable: a.fo,
            is_default: a.ki,
            is_translateable: a.li
        };
        a.a && (a = a.a,
        b.translationLanguage = {
            languageCode: a.a,
            languageName: a.b,
            languageOriginal: a.g,
            id: a.id,
            is_default: a.i
        });
        return b
    }
    f = gx.prototype;
    f.Jg = null;
    f.Lb = null;
    f.cc = null;
    f.Da = null;
    f.fo = !1;
    f.ki = !1;
    f.li = !1;
    f.Rk = 1;
    function Ow(a) {
        var b = [a.Jg];
        if ("asr" == a.Lb) {
            var c = Hf("HTML5_SUBS_ASR");
            b.push(" (", c, ")")
        }
        a.cc && b.push(" - ", a.cc);
        a.a && b.push(" >> ", a.a.b);
        return b.join("")
    }
    f.toString = function() {
        var a = [this.b, ": ", this.cc, " (", this.Lb, ")"];
        this.a && a.push(" >> ", this.a.a);
        return a.join("")
    }
    ;
    f.equals = function(a) {
        if (!a)
            return !1;
        var b = this.a
          , c = a.a;
        if (b && c) {
            if (b.a != c.a)
                return !1
        } else if (b || c)
            return !1;
        return this.b == a.b && this.cc == a.cc && this.Lb == a.Lb
    }
    ;
    function ix() {
        this.b = [];
        this.a = []
    }
    ix.prototype.b = null;
    ix.prototype.a = null;
    ix.prototype.g = -1;
    function jx(a, b) {
        return b ? a.a.concat(a.b) : a.a
    }
    function kx(a, b) {
        switch (b.Lb) {
        case "asr":
            return lx(b, a.b);
        default:
            if (b.ki || 0 > a.g)
                a.g = a.a.length;
            return lx(b, a.a)
        }
    }
    function lx(a, b) {
        return Ua(b, t(a.equals, a)) ? !1 : (b.push(a),
        !0)
    }
    ;function mx(a, b, c, d) {
        this.Ed = a;
        c ? this.Ed = Bk(this.Ed, {
            hl: c
        }) : (a = wk(this.Ed).hl || "",
        a = a.split("_").join("-"),
        this.Ed = Bk(this.Ed, {
            hl: a
        }));
        this.Ei = b;
        this.Up = !!d;
        this.Dc = new ix;
        this.qi = [];
        this.Vp = {}
    }
    f = mx.prototype;
    f.Ed = "";
    f.Ei = null;
    f.Up = !1;
    f.Dc = null;
    f.qi = null;
    f.Vp = null;
    function nx(a, b) {
        return Ua(jx(a.Dc, !0), function(a) {
            return a.toString() == b
        })
    }
    function ox(a, b) {
        var c = a.Ed
          , d = {
            v: a.Ei,
            type: "track",
            lang: b.b,
            name: b.cc,
            kind: b.Lb,
            fmt: b.Rk
        };
        b.a && (d.tlang = b.a.a);
        return c = Bk(c, d)
    }
    function px(a, b, c) {
        var d = ox(a, b);
        a = t(function(a) {
            a = new ex(a.responseText);
            c(a, b)
        }, a);
        Ek(d, a)
    }
    function qx(a, b) {
        var c = a.Ed
          , d = {
            type: "list",
            tlangs: 1,
            v: a.Ei,
            fmts: Number(!0)
        };
        a.Up && (d.asrs = 1);
        c = Bk(c, d);
        d = t(function(a) {
            if ((a = a.responseXML) && a.firstChild) {
                for (var c = this.Dc, d = a.getElementsByTagName("track"), k = d.length, m = 0; m < k; m++) {
                    var p = parseInt(d[m].getAttribute("formats"), 10) || 1
                      , s = d[m].getAttribute("lang_code")
                      , w = d[m].getAttribute("lang_translated")
                      , z = d[m].getAttribute("name")
                      , X = d[m].getAttribute("kind") || ""
                      , J = d[m].getAttribute("id")
                      , U = "true" == d[m].getAttribute("lang_default")
                      , Nd = "true" == d[m].getAttribute("cantran");
                    kx(c, new gx({
                        format: p,
                        languageCode: s,
                        languageName: w,
                        name: z,
                        kind: X,
                        id: J,
                        is_servable: !0,
                        is_default: U,
                        is_translateable: Nd
                    }))
                }
                a = a.getElementsByTagName("target");
                c = a.length;
                for (d = 0; d < c; d++)
                    k = a[d].getAttribute("lang_code"),
                    m = a[d].getAttribute("lang_translated"),
                    p = a[d].getAttribute("lang_original"),
                    s = a[d].getAttribute("id"),
                    w = "true" == a[d].getAttribute("lang_default"),
                    k = {
                        languageCode: k,
                        languageName: m,
                        languageOriginal: p,
                        id: s,
                        is_default: w
                    },
                    this.Vp[k.languageCode] = k.languageName,
                    this.qi.push(new fx(k))
            }
            b()
        }, a);
        Ek(c, d)
    }
    ;function rx(a) {
        jo.call(this, a);
        this.xj = !0;
        var b = S(a);
        this.i = new Ao(this);
        this.ze = a.N();
        this.Gh = mi(a);
        this.de = [];
        this.Ka = {};
        this.Td = {};
        this.Ee = [];
        this.A = D("captions-translation-select", b);
        this.Pk = D("captions-translation-dialog", b);
        this.mi = D("captions-settings-dialog", b);
        this.K = !1;
        this.k = new bv(mi(this.a).j,"ytp-subtitles-button",Z("YTP_TOOLTIP_SUBTITLES"),"ytp-subtitles-button-active");
        this.k.listen(this.k, "click", this.zu, this);
        this.j = new Rw(mi(this.a).j);
        this.j.Ia(1);
        this.j.listen("change", this.Nu, this);
        this.j.listen("select", this.Au, this);
        this.g = new Mw(mi(this.a).j);
        this.g.listen("change", this.Wn, this);
        this.g.listen("select", this.yu, this);
        Qw(this.g, !0);
        this.i.listen(D("captions-translation-confirm", b), "click", this.Iu);
        this.i.listen(D("captions-translation-cancel", b), "click", this.Zm);
        Co(this.i, D("captions-settings-background-opacity", b), this.Bu, "INPUT");
        Co(this.i, D("captions-settings-text-opacity", b), this.Hu, "INPUT");
        Co(this.i, D("captions-settings-window-opacity", b), this.Ju, "INPUT");
        Co(this.i, D("captions-settings-char-edge-style", b), this.Cu, "SELECT");
        this.i.listen(D("captions-settings-font-family", b), "change", this.Gu);
        this.i.listen(D("captions-settings-font-inc", b), "click", this.co);
        this.i.listen(D("captions-settings-font-dec", b), "click", this.bo);
        this.i.listen(D("captions-settings-confirm", b), "click", this.xu);
        this.i.listen(D("captions-settings-cancel", b), "click", this.Dm);
        a = D("captions-settings-dialog", b);
        Do(this.i, a, "click", this.Du, "html5-color-picker-button");
        this.G("onResize", t(this.Gm, this));
        this.G("onBackgroundChange", t(this.Ku, this));
        this.G("onTextOpacityChange", t(this.Lu, this));
        this.G("onWindowOpacityChange", t(this.Mu, this));
        this.G("onFontSizeIncrease", t(this.co, this));
        this.G("onFontSizeDecrease", t(this.bo, this));
        this.G("onShowControls", t(this.Fu, this));
        this.G("onHideControls", t(this.Eu, this));
        "detailpage" == this.ze.Z && (b = D("captions-account-settings-link", b)) && Uo(b);
        this.Dh = new zw(99,ww)
    }
    v(rx, jo);
    f = rx.prototype;
    f.pa = "captions";
    f.dd = "cc";
    f.El = "subtitlesModuleData";
    f.Rg = !1;
    f.Dk = !1;
    f.Xc = null;
    f.ze = null;
    f.Gh = null;
    f.Pk = null;
    f.mi = null;
    f.Ee = null;
    f.de = null;
    f.Ka = null;
    f.Td = null;
    f.Dh = null;
    f.Hd = null;
    f.vb = null;
    f.Ck = !1;
    f.yp = 1;
    var sx = {
        background: "#080808",
        backgroundOpacity: 1,
        charEdgeStyle: "uniform",
        color: "#fff",
        fontFamily: '"Arial Unicode Ms", Arial',
        fontFamilyOption: "propSans",
        fontSizeIncrement: 0,
        textOpacity: 1,
        windowColor: "#080808",
        windowOpacity: 0
    };
    f = rx.prototype;
    f.ac = null;
    f.Hn = !1;
    f.create = function() {
        rx.D.create.call(this);
        this.Xc = this.a.getVideoData();
        var a = this.a.N().V;
        -1 == xw.indexOf(a) && G(S(this.a), "cc-international");
        this.b = Xb(sx);
        ra(this.b, qo(this, "display-settings"));
        this.B("module_menu_button_add", this.pa, this.k);
        vo(this, this.j);
        1 == this.ze.b.cc_load_policy || 1 == this.Xc.Cm || "alwayson" == Pn(this.Xc, "yt:cc") ? a = !0 : (a = qo(this, "module-enabled"),
        a = null != a ? !!a : "on" == Pn(this.Xc, "yt:cc") || this.ze.b.cc_prefer_on);
        a && this.load()
    }
    ;
    f.destroy = function() {
        this.unload();
        wo(this, this.g);
        wo(this, this.j);
        this.B("module_menu_button_remove", this.pa);
        rx.D.destroy.call(this)
    }
    ;
    f.load = function() {
        if (this.Rg || this.aa)
            this.aa && (rx.D.load.call(this),
            this.Ck = "alwayson" == Pn(this.Xc, "yt:cc"),
            ro(this, "module-enabled", !0),
            this.Rg = !1,
            tx(this),
            this.Gm());
        else {
            this.Rg = !0;
            this.aa = !1;
            var a = this.Xc.b.cc_lang_pref || this.ze.b.cc_lang_pref || Pn(this.Xc, "yt:cc_default_lang") || this.ze.i
              , a = a && a.split("_").join("-");
            this.vb = new mx(this.Xc.Ni,this.Xc.L,a,this.Xc.Dl);
            a = t(this.fp, this);
            qx(this.vb, a)
        }
    }
    ;
    f.unload = function() {
        gv(this.k, "ytp-subtitles-button");
        this.j.Ia(1);
        Qw(this.g, !0);
        this.sc && (ux(this, !1),
        this.Pn("control_subtitles_set_track"));
        vx(this, !1);
        wx(this);
        oo(this);
        ro(this, "module-enabled", !1);
        this.K = this.Rg = !1;
        this.aa && (this.aa = !1,
        rx.D.unload.call(this))
    }
    ;
    f.log_ = function() {}
    ;
    function xx(a, b) {
        a.A && (hd(a.A),
        x(b, function(a) {
            var b = dd("option");
            b.setAttribute("value", a.a);
            b.appendChild(ed(a.b + " -- " + a.g));
            this.A.appendChild(b)
        }, a))
    }
    f.fp = function() {
        this.Rg = !1;
        xx(this, this.vb.qi);
        var a = jx(this.vb.Dc, !0);
        if (0 < a.length) {
            this.log_("Caption track list loaded, found " + a.length + " tracks.");
            vo(this, this.g);
            Nw(this.g, a);
            var b = this.vb.Dc.g;
            (a = a[b] && a[b].toString()) && Pw(this.g, a);
            b = this.vb;
            a = b.Dc.g;
            b = jx(b.Dc, !0);
            (a = 0 > a ? null : b[a]) ? (this.Dk = !0,
            yx(this, a)) : (this.aa || (this.aa = !0,
            this.load(),
            a = this.vb.Dc.b,
            a.length && (a = a[0].toString(),
            Pw(this.g, a),
            this.K && zx(this, a))),
            this.B("publish_external_event", "onCaptionsTrackListChanged"))
        } else
            this.log_("No captions found."),
            this.unload()
    }
    ;
    f.Pv = function(a, b) {
        var c = a.g.concat(a.b);
        this.log_("Caption track loaded with " + c.length + " events.");
        wx(this);
        this.Ee = eb(c);
        this.ac = b;
        this.Hn = sw.test(b.b);
        this.aa || (this.aa = !0,
        this.load());
        this.Dk && (this.Dk = !1,
        this.B("publish_external_event", "onCaptionsTrackListChanged"));
        c = Ra(c, function(a, b) {
            return new Rh(a.a,a.a + a.yc,{
                id: "caption" + b
            })
        });
        this.qf.apply(this, c);
        this.Qn(b);
        gv(this.k, "ytp-subtitles-button-active");
        this.j.Ia(0);
        Qw(this.g, !1)
    }
    ;
    f.Qn = function(a) {
        var b = {
            trackName: a.cc,
            trackKind: a.Lb
        };
        a.a ? (b.trackLangCode = a.a.a,
        b.fromLangCode = a.b) : b.trackLangCode = a.b;
        this.log(b);
        Cw(this.Dh, Ow(a));
        mo(this, this.Dh.oa);
        L(t(this.Ov, this), 0);
        this.B("publish_external_event", "captionschanged", hx(a))
    }
    ;
    f.uc = function(a) {
        0 == a.getId().indexOf("caption") && (a = parseInt(a.getId().split("caption")[1], 10),
        !isNaN(a) && this.Ee[a] && (this.de.push(this.Ee[a]),
        L(t(this.Ri, this), 0)))
    }
    ;
    f.Yc = function(a) {
        0 == a.getId().indexOf("caption") && (a = parseInt(a.getId().split("caption")[1], 10),
        !isNaN(a) && this.Ee[a] && (a = this.de.indexOf(this.Ee[a]),
        0 <= a && this.de.splice(a, 1),
        L(t(this.Ri, this), 0)))
    }
    ;
    function Ax(a, b) {
        if (b instanceof bx) {
            var c = a.Ka[b.id];
            ra(b.params, a.b);
            c && c.getType() != (b.params.vk ? 2 : b.b ? 0 : 1) && (F(c.oa),
            delete a.Ka[b.id]);
            if (!a.Ka[b.id]) {
                var c = a.Ka, d = b.id, e;
                t: {
                    e = b.id;
                    var g = b.params;
                    switch (b.params.vk ? 2 : b.b ? 0 : 1) {
                    case 0:
                        e = new Sw(e,g);
                        break t;
                    case 2:
                        e = new Uw(e,g);
                        break t;
                    default:
                        e = new zw(e,g)
                    }
                }
                c[d] = e;
                c = a.Ka[b.id].oa;
                I(c, "captions-asr", "asr" == a.ac.Lb);
                null != b.params.Je && (b.params.Je = a.Hn ? 1 : 0);
                0 == a.Ka[b.id].id ? (G(c, a.pa),
                jd(mi(a.a).I, c, 0)) : mo(a, c)
            }
            ra(a.Ka[b.id].ua, b.params);
            if (0 == (b.params.vk ? 2 : b.b ? 0 : 1)) {
                c = a.Ka[b.id];
                c.uo = b.g;
                c.Cb = {};
                c.Lg = !0;
                c.Qe(c.uo);
                c.Cb.xd = c.Ob.length;
                c.Cb.width = c.oa.offsetWidth;
                c.Cb.height = c.oa.offsetHeight;
                c.Cb.ro = [];
                c.Cb.to = [];
                for (d = 0; d < c.Cb.xd; d++)
                    c.Cb.to.push(c.Ob[d].offsetTop),
                    c.Cb.ro.push(c.Ob[d].offsetLeft);
                c.Lg = !1;
                c.Qe(c.Mg)
            }
        } else
            c = b.$h,
            a.Td[c] || (a.Td[c] = []),
            a.Td[c].push(b)
    }
    f.Gm = function() {
        if (this.aa) {
            oo(this);
            var a = Bx(this.Gh).height;
            this.yp = a / 360;
            tx(this);
            for (var b in this.Ka)
                this.Ka[b].Ye();
            if (b = D("html5-popup-dialog-body", this.mi))
                b.style.maxHeight = a - 180 + "px"
        }
    }
    ;
    function Cx(a) {
        var b = [], c;
        for (c in a.Ka) {
            var d = a.Ka[c];
            d instanceof Sw && b.push(a.Ka[c])
        }
        if (0 != b.length) {
            b.sort(function(a, b) {
                return b.ua.ce - a.ua.ce
            });
            c = Bx(a.Gh).height;
            var e = a.Ka[b[0].id].ua.ce, g;
            for (g in b) {
                d = a.Ka[b[g].id];
                d.ua.ce = e;
                var h = Math.round(d.ua.xd * d.Yi())
                  , e = e - Math.round(h / c * 100);
                d.Ye()
            }
        }
    }
    f.Ov = function() {
        F(this.Dh.oa)
    }
    ;
    f.Ri = function() {
        if (this.aa) {
            var a = this.de.length, b;
            for (b in this.Td)
                delete this.Td[b];
            this.de.sort(function(a, b) {
                return a.a == b.a ? a.i - b.i : a.a - b.a
            });
            for (var c = 0; c < a; c++)
                Ax(this, this.de[c]);
            for (b in this.Ka)
                this.Td[b] ? this.Ka[b].gp(this.Td[b]) : (F(this.Ka[b].oa),
                delete this.Ka[b]);
            Cx(this);
            this.Hd && this.Hd.Ye();
            this.log_("Refreshing caption display...")
        }
    }
    ;
    function Dx(a, b) {
        var c = D(a).querySelectorAll("." + b + " input[type=radio]")
          , d = Xa(c, function(a) {
            return a.checked
        })
          , d = (-1 == d ? 1 : d + 1) % c.length;
        c[d].click()
    }
    f.Ku = function() {
        Dx("captions-settings-background-opacity", "captions-settings-background-opacity-radio")
    }
    ;
    f.Lu = function() {
        Dx("captions-settings-text-opacity", "captions-settings-text-opacity-radio")
    }
    ;
    f.Mu = function() {
        Dx("captions-settings-window-opacity", "captions-settings-window-opacity-radio")
    }
    ;
    f.Bu = function(a) {
        a = parseFloat(a.target.getAttribute("value"));
        isNaN(a) || (this.b.backgroundOpacity = a,
        tx(this))
    }
    ;
    f.Hu = function(a) {
        a = parseFloat(a.target.getAttribute("value"));
        isNaN(a) || (this.b.textOpacity = a,
        tx(this))
    }
    ;
    f.Ju = function(a) {
        a = parseFloat(a.target.getAttribute("value"));
        isNaN(a) || (this.b.windowOpacity = a,
        tx(this))
    }
    ;
    f.Cu = function(a) {
        a.target && (this.b.charEdgeStyle = a.target.value,
        tx(this))
    }
    ;
    f.Gu = function(a) {
        a.target && (this.b.fontFamilyOption = a.target.value,
        tx(this))
    }
    ;
    f.Fu = function() {
        var a = this.Ka[0];
        a && a.oa && (a = a.oa,
        H(a, "controls-hidden"),
        G(a, "controls-visible"))
    }
    ;
    f.Eu = function() {
        var a = this.Ka[0];
        a && a.oa && (a = a.oa,
        ef(a, "controls-visible") && (H(a, "controls-visible"),
        G(a, "controls-hidden")))
    }
    ;
    f.bo = function() {
        Ex(this, -1)
    }
    ;
    f.co = function() {
        Ex(this, 1)
    }
    ;
    function Ex(a, b) {
        var c = a.b.fontSizeIncrement + b
          , c = Math.max(-2, Math.min(4, c));
        a.b.fontSizeIncrement = c;
        tx(a)
    }
    function Fx(a, b) {
        var c = D(b);
        c && (c.querySelector('input[value="' + a.toFixed(1) + '"]').checked = !0)
    }
    function Gx(a, b, c) {
        var d = D(b);
        d && (b = d.querySelector("span.yt-uix-form-input-select-value"),
        d = d.querySelector("select"),
        d.value = a.b[c],
        md(b, d.options[d.selectedIndex].text))
    }
    function wx(a) {
        ko(a);
        a.de = [];
        a.Ee = [];
        a.ac = null;
        a.Ri()
    }
    function zx(a, b) {
        var c = nx(a.vb, b);
        yx(a, c);
        a.log_("Caption change failed for " + b)
    }
    function yx(a, b) {
        if (b)
            if (a.sc)
                a.ac = b,
                ux(a, !0),
                a.Pn("control_subtitles_set_track", hx(b)),
                a.aa || (a.aa = !0,
                a.load());
            else if (a.ze.Uu) {
                var c = a.vb
                  , d = a.Gh.b
                  , e = t(a.Qn, a)
                  , g = c.Ed
                  , c = {
                    v: c.Ei,
                    type: "track",
                    lang: b.b,
                    name: b.cc,
                    kind: b.Lb,
                    fmt: "vtt"
                };
                b.a && (c.tlang = b.a.a);
                var h = document.createElement("track");
                h.src = Bk(g, c);
                h.mode = "showing";
                h.setAttribute("kind", "captions");
                h.setAttribute("default", "");
                d.appendChild(h);
                e(b)
            } else
                px(a.vb, b, t(a.Pv, a))
    }
    f.Zm = function() {
        Vo(this.Pk)
    }
    ;
    f.Iu = function() {
        if (!this.Ck) {
            this.Zm();
            var a;
            t: {
                var b = this.vb.qi;
                for (a = 0; a < b.length; a++) {
                    var c = b[a];
                    if (c.a == this.A.value) {
                        a = c;
                        break t
                    }
                }
                a = null
            }
            a && (c = this.ac,
            b = new gx,
            b.b = c.b,
            b.Jg = c.Jg,
            b.cc = c.cc,
            b.Lb = c.Lb,
            b.ki = !1,
            b.li = c.li,
            b.a = a,
            kx(this.vb.Dc, b) && (a = b.toString(),
            vo(this, this.g),
            Nw(this.g, jx(this.vb.Dc, !0)),
            Pw(this.g, a)),
            yx(this, b))
        }
    }
    ;
    f.xu = function() {
        Vo(this.mi)
    }
    ;
    f.Dm = function() {
        delete this.b;
        this.b = Xb(sx);
        ro(this, "display-settings", this.b);
        tx(this)
    }
    ;
    function tx(a, b) {
        Hx(a);
        var c = ir(a.b.background)
          , d = a.b.backgroundOpacity;
        a.P = lp(".captions-text, .caption-row", "background-color: rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + d + ") !important;", {
            vc: a.P,
            reset: !0
        });
        Fx(d, "captions-settings-background-opacity");
        c = ir(a.b.color);
        d = a.b.textOpacity;
        a.$ = lp(".captions-text", "color: rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + d + ") !important;", {
            vc: a.$,
            reset: !0
        });
        Fx(d, "captions-settings-text-opacity");
        c = ir(a.b.windowColor);
        d = a.b.windowOpacity;
        a.ha = lp(".caption-window-transform", "background-color: rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + d + ") !important;", {
            vc: a.ha,
            reset: !0
        });
        Fx(d, "captions-settings-window-opacity");
        var c = a.b.charEdgeStyle
          , e = a.b.textOpacity;
        if ("none" == c)
            a.F && mp(a.F);
        else {
            var d = ""
              , g = "rgba(34, 34, 34, " + e + ")"
              , e = "rgba(204, 204, 204, " + e + ")";
            switch (c) {
            case "dropShadow":
                d = "text-shadow: 2px 2px 3px " + g + ", 2px 2px 4px " + g + ", 2px 2px 5px " + g + ";";
                break;
            case "raised":
                d = "text-shadow: 1px 1px " + g + ", 2px 2px " + g + ", 3px 3px " + g + ";";
                break;
            case "depressed":
                d = "text-shadow: 1px 1px " + e + ", 0 1px " + e + ", -1px -1px " + g + ", 0 -1px " + g + ";";
                break;
            case "uniform":
                d = "text-shadow: 0 0 4px " + g + ", 0 0 4px " + g + ", 0 0 4px " + g + ", 0 0 4px " + g + ";"
            }
            a.F = lp(".captions-text", d, {
                vc: a.F,
                reset: !0
            })
        }
        Gx(a, "captions-settings-char-edge-style", "charEdgeStyle");
        d = c = "";
        switch (a.b.fontFamilyOption) {
        case "monoSerif":
            c = '"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace';
            break;
        case "propSerif":
            c = '"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif';
            break;
        case "monoSans":
            c = '"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace';
            break;
        case "propSans":
            c = '"Arial Unicode Ms", Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif';
            break;
        case "casual":
            c = '"Comic Sans MS", Impact, Handlee, fantasy';
            break;
        case "cursive":
            c = '"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive';
            break;
        case "smallCaps":
            c = '"Arial Unicode Ms", Arial, Helvetica, Verdana, "Marcellus SC", sans-serif',
            d = "font-variant: small-caps;"
        }
        a.S = lp(".captions-text", d + "font-family: " + c + " !important;", {
            vc: a.S,
            reset: !0
        });
        a.b.fontFamily = c;
        Gx(a, "captions-settings-font-family", "fontFamilyOption");
        c = "font-size: " + Math.round(16 * (1 + 0.25 * (a.b.fontSizeIncrement || 0)) * a.yp) + "px;";
        a.V = lp(".caption-window-transform", c, {
            vc: a.V,
            reset: !0
        });
        a.Ri();
        q(b) && !b || ro(a, "display-settings", a.b)
    }
    f.Du = function(a) {
        var b = t(function(b) {
            var d = K(a.currentTarget, b.toLowerCase());
            d && (this.b[b] = d)
        }, this);
        b("color");
        b("background");
        b("windowColor");
        tx(this);
        ro(this, "display-settings", this.b)
    }
    ;
    function Ix(a) {
        var b = {
            vc: a.u
        }
          , c = a.b.color
          , d = a.b.background
          , e = a.b.windowColor;
        c && (a.u = lp('.html5-popup-dialog button[data-color="' + c + '"]', "border: 3px solid #992121;", b));
        d && (a.u = lp('.html5-popup-dialog button[data-background="' + d + '"]', "border: 3px solid #992121;", b));
        e && (a.u = lp('.html5-popup-dialog button[data-windowcolor="' + e + '"]', "border: 3px solid #992121;", b))
    }
    function Hx(a) {
        var b = []
          , c = t(function(a) {
            var c = this.b[a];
            c && b.push(a + ": " + c + " !important")
        }, a);
        c("color");
        c("background");
        c = {
            vc: a.u,
            reset: !0
        };
        a.u = lp(".captions-text", b, c);
        var d = ir(a.b.windowColor)
          , c = {
            vc: a.fa,
            reset: !0
        };
        a.fa = lp(".caption-window-transform", "background-color: rgba(" + d[0] + "," + d[1] + "," + d[2] + ", 1)", c);
        Ix(a)
    }
    f.zu = function() {
        this.aa || this.load()
    }
    ;
    f.Nu = function() {
        var a = 0 == this.j.getSelected();
        this.aa && !a ? (this.unload(),
        xo(this)) : !this.aa && a ? (this.K = !0,
        this.load()) : this.g.C && this.Wn()
    }
    ;
    f.Au = function() {
        oo(this);
        no(this);
        Ix(this);
        Uo(this.mi);
        xo(this)
    }
    ;
    f.Wn = function() {
        zx(this, this.g.C)
    }
    ;
    f.yu = function() {
        this.Ck || (oo(this),
        no(this),
        Uo(this.Pk));
        xo(this)
    }
    ;
    function Jx(a) {
        return rx.prototype.eb(a) ? new rx(a) : null
    }
    f.pq = function(a, b) {
        switch (a) {
        case "fontSize":
            return isNaN(b) || (this.b.fontSizeIncrement = Math.max(-2, Math.min(4, b)),
            tx(this)),
            this.b.fontSizeIncrement;
        case "reload":
            b && qx(this.vb, t(this.fp, this));
            break;
        case "track":
            if (b) {
                if (!ka(b))
                    break;
                var c = new gx(b);
                c.equals(this.ac) || (yx(this, c),
                Pw(this.g, c.toString()))
            } else
                return this.ac ? hx(this.ac) : {};
            return "";
        case "unloadTrack":
            wx(this);
            break;
        case "tracklist":
            return this.aa ? Ra(jx(this.vb.Dc, b && b.includeAsr), function(a) {
                return hx(a)
            }) : [];
        case "displaySettings":
            return b && ka(b) && Kx(this, b),
            c = Xb(this.b),
            delete c.fontFamily,
            c;
        case "sampleSubtitles":
            vx(this, !!b)
        }
    }
    ;
    function vx(a, b) {
        if (b && !a.Hd) {
            a.Hd = new zw(98,vw);
            var c = a.Hd.oa;
            G(c, a.pa);
            jd(mi(a.a).I, c, 0);
            Cw(a.Hd, Z("YTP_SAMPLE_SUBTITLES"))
        } else
            !b && a.Hd && (F(a.Hd.oa),
            a.Hd = null)
    }
    f.np = function() {
        return "reload fontSize track unloadTrack tracklist displaySettings sampleSubtitle".split(" ")
    }
    ;
    var Lx = /^#(?:[0-9a-f]{3}){1,2}$/i;
    rx.prototype.I = function(a, b) {
        return a && r(a) && Lx.test(a) ? a : b
    }
    ;
    rx.prototype.J = function(a, b) {
        return ia(a) && !isNaN(a) ? Math.max(0, Math.min(1, parseFloat(a))) : b
    }
    ;
    var Mx = ["none", "dropShadow", "raised", "depressed", "uniform"];
    rx.prototype.Q = function(a, b) {
        return a && r(a) && y(Mx, a) ? a : b
    }
    ;
    var Nx = "monoSerif propSerif monoSans propSans casual cursive smallCaps".split(" ");
    rx.prototype.R = function(a, b) {
        return a && r(a) && y(Nx, a) ? a : b
    }
    ;
    rx.prototype.W = function(a, b) {
        return ia(a) && !isNaN(a) ? Math.max(-2, Math.min(4, a)) : b
    }
    ;
    var Ox = null;
    function Kx(a, b) {
        if (b)
            if (Wb(b, "reset"))
                a.Dm();
            else {
                if (!Ox) {
                    var c = {};
                    c.color = a.I;
                    c.textOpacity = a.J;
                    c.background = a.I;
                    c.backgroundOpacity = a.J;
                    c.windowColor = a.I;
                    c.windowOpacity = a.J;
                    c.charEdgeStyle = a.Q;
                    c.fontFamilyOption = a.R;
                    c.fontSizeIncrement = a.W;
                    Ox = c
                }
                var c = Ox, d;
                for (d in c)
                    a.b[d] = c[d](b[d], a.b[d]);
                tx(a, ti())
            }
    }
    rx.prototype.eb = function(a) {
        return !!a.getVideoData().Ni
    }
    ;
    rx.prototype.Sh = function(a) {
        a ? (a = this.ac,
        wx(this),
        this.ac = a) : (ux(this, this.aa),
        this.ac && yx(this, this.ac))
    }
    ;
    function ux(a, b) {
        b ? (gv(a.k, "ytp-subtitles-button-active"),
        a.j.Ia(0)) : (gv(a.k, "ytp-subtitles-button"),
        a.j.Ia(1))
    }
    rx.prototype.H = function() {
        this.i.removeAll();
        rx.D.H.call(this)
    }
    ;
    function Px() {
        var a = ic(), b;
        if (b = Am()) {
            t: {
                if (navigator.plugins && 0 < navigator.plugins.length)
                    for (b = 0; b < navigator.plugins.length; b++)
                        if (0 <= navigator.plugins[b].name.indexOf("NVIDIA 3D Vision")) {
                            b = !0;
                            break t
                        }
                b = !1
            }
            if (b)
                t: {
                    var c = navigator.userAgent.match(/Firefox[\/\s](\d+\.\d+)/);
                    if (c && 1 < c.length && 4 <= c[1]) {
                        c = document.createElement("embed");
                        c.setAttribute("id", "NvImageDetectionFFID");
                        c.setAttribute("style", "visibility: hidden");
                        c.setAttribute("width", 25);
                        c.setAttribute("height", 25);
                        c.setAttribute("type", "image/jps");
                        gd(document.documentElement, c);
                        c = Tc("NvImageDetectionFFID");
                        try {
                            if (null != c) {
                                b = 27527 <= c.NvGetDriverVersion();
                                break t
                            }
                        } catch (d) {}
                    }
                    b = !1
                }
        }
        return b || !(!a || -1 == a.indexOf("Sony"))
    }
    ;function Qx(a) {
        jo.call(this, a);
        var b = a.getVideoData();
        b.V && Rx(this);
        Sx(this, "html5-threed-conversion-on", t(this.kw, this));
        Sx(this, "html5-threed-conversion-off", t(this.jw, this));
        var c = S(this.a);
        a = D("html5-threed-popup-menu-change-mode-link", c);
        c = D("html5-threed-dialog-change-mode-button", c);
        b = "/select_3d_mode?video_id=" + b.L;
        a.setAttribute("href", b);
        c.setAttribute("href", b)
    }
    v(Qx, jo);
    f = Qx.prototype;
    f.El = "threeDModuleData";
    f.bf = null;
    function Sx(a, b, c) {
        a = D(b, S(a.a));
        N(a, "click", c)
    }
    f.pa = "threed";
    f.dd = "threed";
    f.create = function() {
        Tx(this.a.app, void 0);
        Qx.D.create.call(this)
    }
    ;
    f.destroy = function() {
        Tx(this.a.app, !0);
        this.unload();
        Qx.D.destroy.call(this)
    }
    ;
    function Ux(a) {
        return D("html5-threed-popup-menu-change-mode-link", S(a)) ? Qx.prototype.eb(a) ? new Qx(a) : null : null
    }
    f.eb = function(a) {
        a = a.getVideoData();
        return !!a.V || !!a.Ij
    }
    ;
    f.kw = function() {
        Vx(this, !0)
    }
    ;
    f.jw = function() {
        Vx(this, !1)
    }
    ;
    function Vx(a, b) {
        var c = a.a.getVideoData();
        if (c.Ij && c.wf != b) {
            var c = a.a.app
              , d = Q(c);
            d.a.g && d.a.g.a || (d.a.wf = !d.a.wf,
            Mn(d.a),
            Wx(d, "r"));
            Tx(c);
            b ? Rx(a) : oo(a)
        }
    }
    function Rx(a) {
        qo(a, "warning-shown") || Px() || (a.bf = D("threed-html5-warning-dialog", S(a.a)),
        Uo(a.bf),
        L(t(function() {
            Xx(this)
        }, a), 0),
        N(a.bf, "mouseover", t(function() {
            H(this.bf, "hide-dialog")
        }, a)),
        N(a.bf, "mouseout", t(function() {
            Xx(this)
        }, a)),
        Sx(a, "threed-html5-warning-close", t(a.xw, a)))
    }
    function Xx(a) {
        G(a.bf, "hide-dialog");
        L(t(function() {
            ef(this.bf, "hide-dialog") && oo(this)
        }, a), 9E3)
    }
    f.xw = function() {
        ro(this, "warning-shown", !0);
        oo(this)
    }
    ;
    function Yx(a) {
        jo.call(this, a);
        this.b = new Eo(["div", "ytp-ypc-clickwrap-overlay", ["h2", "header", Hf("YPC_CLICKWRAP_HEADER")], ["div", "description", this.a.getVideoData().b.ypc_clickwrap_message], ["button", "confirm-button", Hf("YPC_CLICKWRAP_BUTTON")]]);
        Mo(this.b.M());
        a = this.b.M();
        mi(this.a).g.appendChild(a);
        O(this, this.b);
        this.g = this.b.a["confirm-button"]
    }
    v(Yx, jo);
    f = Yx.prototype;
    f.pa = "ypc_clickwrap";
    f.dd = "ypc-clickwrap";
    f.eb = function() {
        return Un(this.a.getVideoData(), "ypc_clickwrap_module")
    }
    ;
    function Zx(a) {
        return Un(a.getVideoData(), "ypc_clickwrap_module") ? new Yx(a) : null
    }
    f.create = function() {
        Yx.D.create.call(this);
        this.load()
    }
    ;
    f.destroy = function() {
        this.aa && this.unload();
        Yx.D.destroy.call(this)
    }
    ;
    f.load = function() {
        Yx.D.load.call(this);
        D("html5-video-container", S(this.a));
        Lo(this.b.M());
        N(this.g, "click", t(this.fv, this));
        this.aa = !0
    }
    ;
    f.unload = function() {
        Mo(this.b.M());
        Yf(this.g);
        this.aa = !1;
        Yx.D.unload.call(this)
    }
    ;
    f.fv = function() {
        lo(this);
        this.destroy()
    }
    ;
    function $x(a) {
        a = a.b;
        this.j = a.ypc_offer_button_text;
        this.description = a.ypc_offer_description;
        this.o = a.ypc_offer_headline;
        this.k = a.ypc_full_video_message;
        this.b = a.ypc_offer_id;
        this.a = a.ypc_buy_url;
        this.g = a.ypc_item_thumbnail;
        this.title = a.ypc_item_title;
        this.i = a.ypc_item_url;
        this.L = a.ypc_vid
    }
    ;function ay() {
        Y.call(this, ["div", ["ytp-drawer", "html5-stop-propagation"], ["div", "ytp-drawer-content", "{{content}}"], ["a", "ytp-drawer-close-button"], ["a", "ytp-drawer-open-button"]]);
        this.b = this.template.a["ytp-drawer-close-button"];
        N(this.b, "click", t(this.hide, this));
        this.a = this.template.a["ytp-drawer-open-button"];
        N(this.a, "click", t(this.show, this));
        this.wa(null);
        this.hide()
    }
    v(ay, Y);
    ay.prototype.hide = function() {
        G(this.element, "ytp-drawer-closed")
    }
    ;
    ay.prototype.wa = function(a) {
        a ? (ay.D.wa.call(this, a),
        Lo(this.element)) : Mo(this.element)
    }
    ;
    ay.prototype.show = function() {
        L(qa(H, this.element, "ytp-drawer-closed"), 0)
    }
    ;
    ay.prototype.H = function() {
        Yf(this.b);
        Yf(this.a);
        this.a = this.b = null;
        ay.D.H.call(this)
    }
    ;
    function by(a, b) {
        T.call(this);
        this.a = new ay;
        O(this, this.a);
        this.b = document.createElement("div");
        ff(this.b, ["html5-stop-propagation", "html5-ypc-endscreen"]);
        this.i = document.createElement("div");
        G(this.i, "html5-ypc-overlay");
        this.g = new Eo(["div", "html5-ypc-module", ["div", "html5-ypc-action-heading", "{{heading}}"], ["div", "html5-ypc-thumbnail", "{{thumbnail_element}}"], ["div", "html5-ypc-title", "{{title}}"], ["div", "html5-ypc-description", "{{description}}"], ["button", "html5-ypc-purchase", "{{button_label}}"]]);
        O(this, this.g);
        this.j = this.g.a["html5-ypc-purchase"];
        N(this.j, "click", t(this.k, this));
        md(this.i, b.k);
        var c = b.title;
        b.i && (c = ["a", {
            href: b.i,
            target: "blank_"
        }, b.title]);
        var d = "";
        b.g && (d = ["img", {
            src: b.g
        }]);
        this.g.update({
            heading: b.o,
            title: c,
            thumbnail_element: d,
            description: b.description,
            button_label: b.j
        });
        this.a.X(a);
        this.a.wa(this.g.M());
        a.appendChild(this.b)
    }
    v(by, T);
    by.prototype.H = function() {
        by.D.H.call(this);
        this.j && Yf(this.j);
        F(this.b);
        F(this.i);
        this.i = this.b = this.a = null
    }
    ;
    function cy(a) {
        var b = a.g.M();
        a.b.appendChild(b);
        a.a.wa(null);
        Lo(a.b)
    }
    by.prototype.k = function() {
        this.B("ypcContentRequest")
    }
    ;
    function dy(a) {
        jo.call(this, a);
        this.g = this.b = null;
        this.i = NaN
    }
    v(dy, jo);
    f = dy.prototype;
    f.pa = "ypc";
    f.dd = "ypc";
    function ey(a) {
        var b = a.getVideoData();
        a.N();
        return Un(b, "ypc_module")
    }
    f.eb = function() {
        return ey(this.a)
    }
    ;
    function fy(a) {
        return ey(a) ? new dy(a) : null
    }
    f.create = function() {
        dy.D.create.call(this);
        var a = this.a.getVideoData();
        this.b = new $x(a);
        !a.la && this.b.L ? this.a.Ro({
            video_id: this.b.L,
            ypc_preview: 1
        }) : this.load()
    }
    ;
    f.destroy = function() {
        this.aa && this.unload();
        this.b = null
    }
    ;
    f.load = function() {
        dy.D.load.call(this);
        var a = D("html5-video-container", S(this.a));
        this.g = new by(a,this.b);
        this.g.G("ypcContentRequest", this.eu, this);
        this.b.L && jd(mi(this.a).I, this.g.i, 0);
        Sp(this.a.N()) && (a = new Rh(2147483647,2147483647,{
            priority: 2
        }),
        this.qf(a));
        this.g.a.show();
        M(this.i);
        this.i = L(t(function() {
            this.g.a.hide()
        }, this), 1E4);
        this.aa = !0;
        this.b.L || cy(this.g)
    }
    ;
    f.unload = function() {
        ko(this);
        qh(this.g);
        this.g = null;
        this.aa = !1;
        dy.D.unload.call(this)
    }
    ;
    f.uc = function(a) {
        dy.D.uc.call(this, a);
        cy(this.g)
    }
    ;
    f.Yc = function(a) {
        dy.D.Yc.call(this, a);
        a = this.g;
        Mo(a.b);
        a.a.wa(a.g.M())
    }
    ;
    f.eu = function() {
        if (this.b.a)
            "embedded" == this.a.N().Z ? $v(this.b.a) : window.location = yk(this.b.a, {}) + "";
        else if (this.b.b) {
            var a = n("yt.www.watch.player.handleEndPreview");
            a && a(this.b.b)
        }
    }
    ;
    var gy = {
        fA: "ERROR_ALREADY_PINNED_ON_A_DEVICE",
        kA: "ERROR_AUTHENTICATION_EXPIRED",
        lA: "ERROR_AUTHENTICATION_MALFORMED",
        mA: "ERROR_AUTHENTICATION_MISSING",
        wA: "ERROR_BAD_REQUEST",
        AA: "ERROR_CANNOT_ACTIVATE_RENTAL",
        IA: "ERROR_CGI_PARAMS_MALFORMED",
        JA: "ERROR_CGI_PARAMS_MISSING",
        tB: "DEVICE_FALLBACK",
        xB: "ERROR_LICENSE",
        AB: "FLASH_FALLBACK",
        $B: "ERROR_GEO_FAILURE",
        mC: "HTML5_DEFAULT_FALLBACK",
        nC: "HTML5_NO_AVAILABLE_FORMATS_FALLBACK",
        tC: "ERROR_INVALID_DRM_MESSAGE",
        xC: "LEARN_MORE",
        ID: "ERROR_NOT_SIGNED_IN",
        UD: "ERROR_PURCHASE_NOT_FOUND",
        VD: "ERROR_PURCHASE_REFUNDED",
        YD: "ERROR_RENTAL_EXPIRED",
        BA: "ERROR_CAST_SESSION_DEVICE_MISMATCHED",
        CA: "ERROR_CAST_SESSION_VIDEO_MISMATCHED",
        EA: "ERROR_CAST_TOKEN_FAILED",
        DA: "ERROR_CAST_TOKEN_EXPIRED",
        FA: "ERROR_CAST_TOKEN_MALFORMED",
        dE: "ERROR_SERVER_ERROR",
        gE: "ERROR_STOPPED_BY_ANOTHER_PLAYBACK",
        iE: "ERROR_STREAMING_DEVICES_QUOTA_PER_24H_EXCEEDED",
        jE: "ERROR_STREAMING_NOT_ALLOWED",
        kE: "ERROR_STREAMING_UNAVAILABLE",
        ZD: "ERROR_RETRYABLE_ERROR",
        qE: "ERROR_TOO_MANY_STREAMS_PER_USER",
        pE: "ERROR_TOO_MANY_STREAMS_PER_ENTITLEMENT",
        sE: "ERROR_UNSUPPORTED_DEVICE",
        tE: "ERROR_UNUSUAL_ACTIVITY",
        AE: "ERROR_VIDEO_FORBIDDEN",
        CE: "ERROR_VIDEO_NOT_FOUND"
    }
      , hy = {
        300: "ERROR_STREAMING_DEVICES_QUOTA_PER_24H_EXCEEDED",
        301: "ERROR_ALREADY_PINNED_ON_A_DEVICE",
        303: "ERROR_STOPPED_BY_ANOTHER_PLAYBACK",
        304: "ERROR_TOO_MANY_STREAMS_PER_USER",
        305: "ERROR_TOO_MANY_STREAMS_PER_ENTITLEMENT",
        400: "ERROR_VIDEO_NOT_FOUND",
        401: "ERROR_GEO_FAILURE",
        402: "ERROR_STREAMING_NOT_ALLOWED",
        403: "ERROR_UNSUPPORTED_DEVICE",
        405: "ERROR_VIDEO_FORBIDDEN",
        500: "ERROR_PURCHASE_NOT_FOUND",
        501: "ERROR_RENTAL_EXPIRED",
        502: "ERROR_PURCHASE_REFUNDED",
        5E3: "ERROR_BAD_REQUEST",
        5001: "ERROR_CGI_PARAMS_MISSING",
        5002: "ERROR_CGI_PARAMS_MALFORMED",
        5100: "ERROR_AUTHENTICATION_MISSING",
        5101: "ERROR_AUTHENTICATION_MALFORMED",
        5102: "ERROR_AUTHENTICATION_EXPIRED",
        5200: "ERROR_CAST_TOKEN_MALFORMED",
        5201: "ERROR_CAST_TOKEN_EXPIRED",
        5202: "ERROR_CAST_TOKEN_FAILED",
        5203: "ERROR_CAST_SESSION_VIDEO_MISMATCHED",
        5204: "ERROR_CAST_SESSION_DEVICE_MISMATCHED",
        6E3: "ERROR_INVALID_DRM_MESSAGE",
        7E3: "ERROR_SERVER_ERROR",
        8E3: "ERROR_RETRYABLE_ERROR"
    };
    function iy(a) {
        jo.call(this, a);
        this.pa = "ypc_license_checker";
        this.dd = "ypc_license";
        this.j = !1;
        this.i = 0;
        this.g = !1;
        this.b = null;
        this.A = Em();
        this.u = a.N().hb + "ypc_license_server"
    }
    v(iy, jo);
    var jy = {
        LICENSE_DENIED_CANNOT_ACTIVATE_RENTAL: "ERROR_CANNOT_ACTIVATE_RENTAL",
        LICENSE_DENIED_NOT_SIGNED_IN: "ERROR_NOT_SIGNED_IN",
        LICENSE_DENIED_NO_ACTIVE_PURCHASE_AGREEMENT: "ERROR_RENTAL_EXPIRED",
        LICENSE_DENIED_CONCURRENT_PLAYBACK: "ERROR_STOPPED_BY_ANOTHER_PLAYBACK",
        LICENSE_DENIED_UNUSUAL_ACTIVITY: "ERROR_UNUSUAL_ACTIVITY",
        LICENSE_DENIED_STREAMING_UNAVAILABLE: "ERROR_STREAMING_UNAVAILABLE",
        LICENSE_DENIED_PLAYBACK_CAP: "ERROR_LICENSE"
    };
    function ky(a) {
        return Un(a.getVideoData(), "ypc_license_checker_module")
    }
    f = iy.prototype;
    f.eb = function() {
        return ky(this.a)
    }
    ;
    f.create = function() {
        iy.D.create.call(this);
        var a = new Rh(1E3,2147483646,{
            priority: 0
        });
        this.qf(a);
        this.G("onStateChange", this.Ix, this)
    }
    ;
    function ly(a) {
        return ky(a) ? new iy(a) : null
    }
    f.uc = function() {
        this.j = !0;
        my(this, 6E4)
    }
    ;
    f.Ix = function(a) {
        R(a.a, 2) ? (this.i = 0,
        this.b = null,
        this.g = !1) : (R(a.a, 1) || R(a.a, 8)) && my(this, 6E4)
    }
    ;
    function my(a, b) {
        if (!a.b && a.j) {
            var c = b;
            void 0 == c && (c = a.g ? 6E4 : 1E3);
            var d = a.a.getVideoData();
            On(d) || (a.b = {
                video_id: d.L,
                player_id: a.A,
                request_id: Em(),
                purchase_id: d.kd,
                version: "4",
                player_time_seconds: a.a.getCurrentTime().toString(),
                gid: d.Hc,
                session_token: d.Kc
            },
            a.k = d.Fa,
            d.I && (a.b.vvt = d.I),
            0 == c ? a.On() : L(t(a.On, a), c))
        }
    }
    f.On = function() {
        if (this.b) {
            var a = yk(this.u, {
                cpn: this.k
            });
            Hk(a, {
                format: "RAW",
                method: "POST",
                Ze: this.b,
                timeout: 3E4,
                onSuccess: t(this.Iw, this),
                onError: t(this.Hw, this),
                Il: t(this.Jw, this),
                withCredentials: !0
            })
        }
    }
    ;
    f.Iw = function(a) {
        if (this.b) {
            a = a.responseText;
            var b = a in jy ? 1 : 64 <= a.length && a.match(/[0-9a-fA-f]+/) ? 0 : -1;
            -1 == b ? ny(this, "decode") : (this.i = 0,
            this.b = null,
            1 == b ? (this.g = !1,
            a = a in jy ? Hf(jy[a]) : Hf("ERROR_LICENSE"),
            oy(this.a.app.b, 150, a, void 0)) : (this.g = !0,
            my(this)))
        }
    }
    ;
    f.Hw = function(a) {
        ny(this, "net-" + a.status)
    }
    ;
    f.Jw = function() {
        ny(this, "timeout")
    }
    ;
    function ny(a, b) {
        if (a.b)
            if (a.log({
                errorType: b
            }),
            a.b = null,
            5 < ++a.i) {
                var c = Hf("ERROR_LICENSE");
                oy(a.a.app.b, 150, c, void 0)
            } else
                my(a)
    }
    ;function py() {
        this.a = [];
        this.i = {};
        this.C = {};
        this.u = {};
        this.b = this.k = null;
        this.g = [];
        this.o = null
    }
    v(py, nh);
    py.prototype.j = function(a) {
        if (this.b) {
            var b;
            var c = la(a);
            b = this.i[c];
            if (!b)
                if (this.b) {
                    if (b = a(this.b)) {
                        a = this.i[c] = b;
                        for (var d in this.k)
                            a.G(d, this.k[d]);
                        a.G("command_log_timing", this.A, this);
                        O(this, b)
                    }
                } else
                    b = null;
            b && b.eb(this.b) && !y(this.a, b) && (b.create(),
            this.a.push(b),
            y(this.g, b.pa) && (b.sc = this.o,
            b.Sh(!!b.sc)))
        }
    }
    ;
    function qy(a) {
        x(a.a, function(a) {
            a.destroy()
        });
        a.a = []
    }
    function ry(a, b, c) {
        sy(a);
        a.o = b;
        a.g = eb(c);
        x(a.a, function(a) {
            0 <= Pa(c, a.pa) && (a.sc = b,
            a.Sh(!!a.sc))
        })
    }
    function sy(a) {
        x(a.g, function(a) {
            if (a = Hh(this, a))
                a.sc = null,
                a.Sh(!1)
        }, a);
        a.o = null;
        a.g = []
    }
    function Zh(a, b, c, d) {
        return b && c ? (a = Hh(a, b)) ? a.pq(c, d) : null : null
    }
    function $h(a, b) {
        if (!b)
            return Ra(a.a, function(a) {
                return a.pa
            });
        var c = Hh(a, b);
        return c ? c.np() : []
    }
    function Hh(a, b) {
        return Ua(a.a, function(a) {
            return a.pa == b
        })
    }
    py.prototype.F = function(a, b) {
        x(this.a, function(c) {
            c.B(a, b)
        })
    }
    ;
    function ty(a) {
        var b = [];
        x(a.a, function(a) {
            (a = a.Li()) && b.push(a)
        });
        return b
    }
    py.prototype.A = function(a, b) {
        ra(this.u, a || null);
        ra(this.C, b || null)
    }
    ;
    py.prototype.isAvailable = function(a) {
        return (a = Hh(this, a)) ? a.xj : !1
    }
    ;
    function uy(a) {
        this.a = {};
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            this.a[c.a] = c
        }
    }
    function vy(a) {
        a = Pb(a.a);
        nb(a, function(a, c) {
            return a.a - c.a
        });
        return a
    }
    ;function wy(a, b, c) {
        this.b = a;
        this.a = b;
        this.i = !!c.fe;
        this.g = c.ga
    }
    ;function xy() {
        this.he = {};
        this.a = this.fb().a;
        this.$c = null
    }
    f = xy.prototype;
    f.fb = function() {
        var a = this.constructor, b;
        if (!(b = a.fq)) {
            var c;
            b = a.ny;
            var d = [];
            for (c in b)
                b.hasOwnProperty(c) && (0 == c || d.push(new wy(a,c,b[c])));
            c = new uy(d);
            b = a.fq = c
        }
        return b
    }
    ;
    f.has = function(a) {
        a.b.fb();
        this.fb();
        return null != this.he[a.a]
    }
    ;
    f.get = function(a, b) {
        a.b.fb();
        this.fb();
        var c;
        c = this.a[a.a];
        var d = yy(this, c);
        c.i ? (ga(d),
        c = d[b || 0]) : (ga(d),
        c = d);
        return c
    }
    ;
    f.set = function(a, b) {
        a.b.fb();
        this.fb();
        var c = a.a;
        this.he[c] = b;
        this.$c && (this.$c[c] = b)
    }
    ;
    f.add = function(a, b) {
        a.b.fb();
        this.fb();
        var c = a.a;
        this.he[c] || (this.he[c] = []);
        this.he[c].push(b);
        this.$c && delete this.$c[c]
    }
    ;
    f.clear = function(a) {
        a.b.fb();
        this.fb();
        a = a.a;
        delete this.he[a];
        this.$c && delete this.$c[a]
    }
    ;
    f.equals = function(a) {
        if (!a || this.constructor != a.constructor)
            return !1;
        for (var b = vy(this.fb()), c = 0; c < b.length; c++) {
            var d = b[c];
            if (this.has(d) != a.has(d))
                return !1;
            if (this.has(d)) {
                var e = 11 == d.g || 10 == d.g
                  , g = yy(this, d)
                  , h = yy(a, d);
                if (d.i) {
                    if (g.length != h.length)
                        return !1;
                    for (d = 0; d < g.length; d++) {
                        var k = g[d]
                          , m = h[d];
                        if (e ? !k.equals(m) : k != m)
                            return !1
                    }
                } else if (e ? !g.equals(h) : g != h)
                    return !1
            }
        }
        return !0
    }
    ;
    function zy(a, b) {
        for (var c = vy(a.fb()), d = 0; d < c.length; d++) {
            var e = c[d];
            if (b.has(e)) {
                a.$c && delete a.$c[e.a];
                var g = 11 == e.g || 10 == e.g;
                if (e.i) {
                    var h, k = b;
                    h = e;
                    h.b.fb();
                    k.fb();
                    h = yy(k, k.a[h.a]);
                    null == h || ga(h);
                    h = h || [];
                    for (k = 0; k < h.length; k++)
                        a.add(e, g ? h[k].clone() : h[k])
                } else
                    h = yy(b, e),
                    g ? (g = yy(a, e)) ? zy(g, h) : a.set(e, h.clone()) : a.set(e, h)
            }
        }
    }
    f.clone = function() {
        var a = new this.constructor;
        a != this && (a.he = {},
        a.$c && (a.$c = {}),
        zy(a, this));
        return a
    }
    ;
    function yy(a, b) {
        var c = a.he[b.a];
        return null == c ? null : c
    }
    function Ay(a, b) {
        a.ny = b;
        a.fb = function() {
            return a.fq || (new a).fb()
        }
    }
    ;function By() {
        xy.apply(this)
    }
    v(By, xy);
    function Cy() {
        xy.apply(this)
    }
    v(Cy, xy);
    function Dy() {
        xy.apply(this)
    }
    v(Dy, xy);
    Ay(By, {
        0: {
            name: "FieldDetails",
            oe: "logs_proto.FieldDetails"
        },
        1: {
            name: "id_type",
            fe: !0,
            ga: 14,
            defaultValue: 0,
            type: {
                bD: 0,
                ZC: 1,
                $C: 2,
                wD: 3,
                rD: 4,
                qD: 5,
                IC: 15,
                LC: 6,
                eD: 9,
                jD: 7,
                oD: 8,
                sD: 16,
                hD: 10,
                mD: 11,
                yD: 12,
                JC: 13,
                NC: 14,
                gD: 20,
                SC: 21,
                QC: 22,
                vD: 23,
                lD: 24,
                TC: 207,
                cD: 30,
                iD: 31,
                kD: 32,
                nD: 35,
                OC: 33,
                RC: 34,
                fD: 50,
                WC: 51,
                XC: 52,
                aD: 53,
                KC: 54,
                tD: 55,
                HC: 56,
                pD: 57,
                dD: 100,
                xD: 200,
                PC: 201,
                UC: 202,
                VC: 203,
                MC: 204,
                uD: 205,
                YC: 206
            }
        }
    });
    Ay(Cy, {
        0: {
            name: "MessageDetails",
            oe: "logs_proto.MessageDetails"
        },
        1: {
            name: "may_appear_in",
            fe: !0,
            ga: 11,
            type: Dy
        }
    });
    Ay(Dy, {
        0: {
            name: "Type",
            eF: Cy,
            oe: "logs_proto.MessageDetails.Type"
        },
        1: {
            name: "source_type",
            required: !0,
            ga: 9,
            type: String
        },
        2: {
            name: "log_type",
            required: !0,
            ga: 9,
            type: String
        }
    });
    var Ey = {
        qz: 0,
        YA: 1,
        iB: 2,
        pz: 3,
        zz: 4,
        WA: 5,
        gB: 6,
        dB: 7,
        eB: 8,
        fB: 9,
        bB: 10,
        cB: 11,
        Bz: 12,
        Az: 13,
        oz: 14,
        iz: 15,
        XA: 20,
        kB: 21,
        hz: 22,
        ZA: 23,
        jB: 24,
        hB: 25,
        wz: 30,
        lB: 31,
        vz: 32,
        xz: 33,
        aB: 40,
        $A: 41,
        Cz: 42,
        Dz: 43,
        jz: 50,
        mz: 51,
        rz: 52,
        tz: 53,
        uz: 54,
        ez: 55,
        fz: 56,
        yz: 57,
        nz: 58,
        lz: 60,
        kz: 61,
        gz: 70,
        dz: 80,
        Ez: 90
    };
    function Fy() {
        xy.apply(this)
    }
    v(Fy, xy);
    function Gy() {
        xy.apply(this)
    }
    v(Gy, xy);
    function Hy() {
        xy.apply(this)
    }
    v(Hy, xy);
    function Iy() {
        xy.apply(this)
    }
    v(Iy, xy);
    function Jy() {
        xy.apply(this)
    }
    v(Jy, xy);
    function Ky() {
        xy.apply(this)
    }
    v(Ky, xy);
    Ay(Fy, {
        0: {
            name: "YtAdType",
            oe: "video.YtAdType"
        },
        1: {
            name: "ad_namespace",
            required: !0,
            ga: 14,
            defaultValue: 0,
            type: {
                dA: 0,
                vB: 1,
                eA: 2,
                GA: 3,
                YB: 4,
                sB: 5,
                rB: 6,
                By: 7,
                pB: 8,
                yA: 9,
                oB: 10,
                qB: 11,
                jA: 12,
                ZE: 13
            }
        },
        2: {
            name: "ad_format",
            required: !0,
            ga: 14,
            defaultValue: 0,
            type: {
                aA: 0,
                uC: 1,
                sC: 2,
                FD: 3,
                uE: 4,
                vC: 5,
                pC: 6,
                rC: 7,
                bF: 8,
                wB: 9
            }
        },
        3: {
            name: "ad_invideo",
            ga: 14,
            defaultValue: 0,
            type: {
                cA: 0,
                NA: 1,
                OA: 2,
                PA: 3,
                QA: 4,
                MA: 5,
                zA: 6
            }
        },
        4: {
            name: "invideo_autoplay",
            ga: 14,
            defaultValue: 0,
            type: {
                uA: 0,
                SD: 1
            }
        },
        5: {
            name: "ad_instream",
            ga: 14,
            defaultValue: 0,
            type: {
                bA: 0,
                rE: 1
            }
        },
        6: {
            name: "ad_instream_long",
            ga: 8,
            type: Boolean
        }
    });
    Ay(Gy, {
        0: {
            name: "AdId",
            oe: "video.AdId"
        },
        1: {
            name: "ad_network",
            ga: 14,
            defaultValue: 1,
            type: {
                MD: 1,
                cz: 2
            }
        },
        2: {
            name: "ad_network_name",
            ga: 9,
            type: String
        },
        3: {
            name: "ad_id",
            required: !0,
            ga: 9,
            type: String
        }
    });
    Ay(Hy, {
        0: {
            name: "YtAdEvent",
            oe: "video.YtAdEvent"
        },
        1: {
            name: "ad_event_type",
            required: !0,
            ga: 14,
            defaultValue: 0,
            type: {
                Nz: 0,
                Uz: 1,
                Oz: 2,
                Xz: 3,
                Pz: 4,
                Qz: 5,
                Kz: 6,
                Iz: 7,
                mB: 8,
                Fz: 9,
                Vz: 10,
                Wz: 11,
                Gz: 12,
                nB: 13,
                Yz: 14,
                Lz: 15,
                Hz: 16,
                Mz: 17,
                Jz: 18,
                Zz: 100,
                $z: 101,
                Sz: 130,
                Rz: 131,
                Tz: 132
            }
        },
        2: {
            name: "wall_time",
            required: !0,
            ga: 2,
            type: Number
        },
        3: {
            name: "media_time",
            required: !0,
            ga: 2,
            type: Number
        },
        4: {
            name: "logentry_time_usec",
            required: !0,
            ga: 3,
            type: String
        },
        5: {
            name: "ad_error_type",
            ga: 14,
            defaultValue: 0,
            type: Ey
        }
    });
    Ay(Iy, {
        0: {
            name: "YtAdSlot",
            oe: "video.YtAdSlot"
        },
        1: {
            name: "slot_time",
            required: !0,
            ga: 2,
            type: Number
        },
        2: {
            name: "ad_type",
            required: !0,
            ga: 11,
            type: Fy
        },
        3: {
            name: "ad_events",
            fe: !0,
            ga: 11,
            type: Hy
        },
        4: {
            name: "ad_video_duration",
            ga: 2,
            type: Number
        },
        5: {
            name: "ad_id",
            ga: 9,
            type: String
        },
        6: {
            name: "slot_index",
            ga: 5,
            type: Number
        }
    });
    Ay(Jy, {
        0: {
            name: "YtVideoMetadata",
            oe: "video.YtVideoMetadata"
        },
        1: {
            name: "content_owner_ids",
            fe: !0,
            ga: 9,
            type: String
        },
        2: {
            name: "video_duration_seconds",
            ga: 2,
            type: Number
        },
        3: {
            name: "all_content_owner_ids",
            ga: 9,
            type: String
        }
    });
    Ay(Ky, {
        0: {
            name: "YtWatchAdInfo",
            oe: "video.YtWatchAdInfo"
        },
        1: {
            name: "video_id",
            required: !0,
            ga: 9,
            type: String
        },
        2: {
            name: "allowed_ads",
            fe: !0,
            ga: 11,
            type: Fy
        },
        3: {
            name: "ad_slots",
            fe: !0,
            ga: 11,
            type: Iy
        },
        4: {
            name: "ps",
            ga: 9,
            type: String
        },
        5: {
            name: "el",
            ga: 9,
            type: String
        },
        6: {
            name: "country",
            ga: 9,
            type: String
        },
        7: {
            name: "feature",
            ga: 9,
            type: String
        },
        8: {
            name: "blocked",
            ga: 8,
            type: Boolean
        },
        9: {
            name: "plid",
            ga: 9,
            type: String
        },
        10: {
            name: "video_metadata",
            ga: 11,
            type: Jy
        },
        11: {
            name: "experiment_id",
            fe: !0,
            ga: 3,
            type: String
        },
        12: {
            name: "ad_flags",
            ga: 4,
            type: String
        },
        13: {
            name: "all_experiment_ids",
            ga: 9,
            type: String
        },
        14: {
            name: "no_ads_returned",
            ga: 8,
            type: Boolean
        },
        15: {
            name: "ad_errors",
            fe: !0,
            ga: 14,
            defaultValue: 0,
            type: Ey
        },
        16: {
            name: "ad_slot_with_event",
            ga: 11,
            type: Iy
        }
    });
    function Ly(a, b) {
        gi.call(this, a, b)
    }
    v(Ly, gi);
    f = Ly.prototype;
    f.playVideo = function() {
        th(this.app, !0, this.a);
        this.app.playVideo(!1, this.a)
    }
    ;
    f.pauseVideo = function() {
        this.app.pauseVideo(!1, this.a)
    }
    ;
    f.$p = function(a, b, c) {
        th(this.app, !0, this.a);
        var d = this.app
          , e = this.a;
        d.of(d.getCurrentTime() + a, b, c, e)
    }
    ;
    f.wg = function(a, b) {
        th(this.app, !0, this.a);
        this.app.of(a, b, void 0, this.a)
    }
    ;
    f.Uj = function() {
        Ah(this.app, this.a)
    }
    ;
    function My(a) {
        this.app = a;
        jo.call(this, a.I)
    }
    v(My, jo);
    var Ny = {
        JD: "0",
        KD: "1",
        yB: "2",
        Ay: "3",
        vA: "4",
        cE: "5"
    };
    var Oy = {
        XD: "red",
        WHITE: "white"
    };
    var Py = {
        Ey: "0",
        fE: "1",
        TA: "2"
    };
    var Qy = {
        "ad-trueview-indisplay-pv": 6,
        "ad-trueview-insearch": 7
    }
      , Ry = {
        "ad-trueview-indisplay-pv": 2,
        "ad-trueview-insearch": 2
    }
      , Sy = {
        adunit: {
            Xb: !1,
            Bc: !1
        },
        detailpage: {
            Wb: !0
        }
    };
    Sy.embedded = {
        xh: $f(),
        uh: "4",
        Bc: !0
    };
    Sy.profilepage = {
        Ji: !0
    };
    var Ty = "blogger books docs google-live play picasaweb".split(" ")
      , Uy = {
        blazer: {
            nj: "youtube_mobile",
            Sb: !1,
            Ky: !1,
            Xh: !1,
            Yh: !1,
            Tb: !0,
            Wb: !1,
            Vb: !1,
            Hb: !1,
            Ub: !0
        },
        blogger: {
            ve: !1,
            Rf: !1,
            Nc: !1,
            Xb: !1,
            xc: !1,
            Wb: !1,
            sf: !1,
            Bc: !1,
            jc: "bl"
        },
        books: {
            ve: !1,
            Rf: !1,
            Nc: !1,
            Xb: !1,
            xc: !1,
            Wb: !0,
            sf: !1,
            Bc: !1,
            jc: "gb"
        },
        docs: {
            ve: !1,
            Rf: !1,
            Nc: !1,
            Xb: !1,
            xc: !1,
            Wb: !1,
            sf: !1,
            Bc: !1,
            jc: "gd"
        },
        "google-live": {
            ve: !1,
            Rf: !1,
            Nc: !1,
            Xb: !1,
            xc: !1,
            Wb: !1,
            sf: !1,
            Bc: !1,
            jc: "gl"
        },
        play: {
            Xb: !1,
            xc: !1,
            Wb: !1,
            Bc: !1,
            jc: "gp"
        },
        "native": {
            Xh: !1,
            Yh: !1,
            Vb: !0
        },
        picasaweb: {
            ve: !1,
            Rf: !1,
            Nc: !1,
            Xb: !1,
            xc: !1,
            Wb: !1,
            sf: !1,
            Bc: !1,
            jc: "pw"
        },
        touch: {
            Xh: !1,
            Yh: !1,
            Ub: !0
        }
    };
    function Vy(a) {
        this.g = [];
        this.b = {};
        Wy(this, a.fexp);
        this.origin = W(this.origin, a.origin);
        this.Z = a.el || this.Z;
        var b = Sy[this.Z];
        b && ra(this, b);
        this.Wh = W(this.Wh, a.loaderUrl);
        b = a.ps;
        if (!y(Ty, b) || Xy(this) || this.mb)
            this.cb = b || this.cb;
        (b = Uy[this.cb]) && ra(this, b);
        this.Ld = Xy(this) && y(Ty, this.cb);
        this.ig = !(!zm().defaultPlaybackRate || mc || Gj || Fj || Hj);
        if (a.use_media_volume)
            b = !1;
        else {
            var b = zm()
              , c = b.muted;
            b.muted = !c;
            b = b.muted != c
        }
        this.tm = b;
        this.mn = Hj;
        if (Gj || Fj)
            this.vm = "blazer" != this.cb;
        this.Vm = "0" != a.add_player_event_listeners;
        b = V(this.xh, a.fs);
        this.xh = "detailpage" == this.Z ? b : b && $f();
        this.Qa = W(this.Qa, a.authuser);
        this.uh = Gm(this.uh, a.autohide, Ny);
        this.Sb = V(this.Sb, a.autoplay);
        this.pk = V(this.pk, a.autoplayoverride);
        this.color = Gm(this.color, a.color, Oy);
        this.o = W(this.o, a.content_v);
        this.qk = Gm(this.qk, a.controls, Py);
        this.Vh = V(this.Vh, a.edu_mode);
        this.a = W(this.a, a.eurl);
        this.S = W(this.S, a.framer);
        this.ra = Gm(this.ra, a.iv_load_policy, rm);
        this.i = W(this.i, a.hl);
        this.An = V(this.An, a.bwlogging);
        this.Tb = V(this.Tb, a.is_html5_mobile_device);
        this.ue = V(this.ue, a.player_wide);
        this.Bn = V(this.Bn, a.is_playground);
        this.oh = V(this.oh, a.privembed);
        this.Cn = V(this.Cn, a.loop);
        this.nf = V(this.nf, a.modestbranding);
        "red" != this.color && (this.nf = !1);
        this.jh = V(this.jh, a.noadapt);
        this.Zf = V(this.Zf, a.on3g);
        this.Za = W(this.Za, a.pageid);
        this.Ch = Km(this.Ch, a.vq);
        this.Aj = W(this.Aj, a.playerapiid);
        this.Fh = V(this.Fh, a.playsinline);
        this.bk = V(this.bk, a.playonclick);
        this.V = W(this.V, a.cr);
        this.Nc = V(this.Nc, a.logwatch);
        this.Nj = V(this.Nj, a.canplaylive);
        this.Oj = V(this.Oj, a.canplaypaid);
        this.Xb = V(this.Xb, a.showinfo);
        this.xc = V(this.xc, a.rel);
        this.Wb = V(this.Wb, a.enablesizebutton);
        this.uj = V(this.uj, a.ss);
        this.$ = W(this.$, a.theme);
        this.Vb = V(this.Vb, a.use_native_controls);
        this.Hb = !Fj && V(this.Hb, a.svt);
        Xy(this) && (this.kg = V(this.kg, a.retryneterr),
        this.ok = V(this.ok, a.nologo));
        this.kg = this.kg || this.jj;
        this.Vb && (this.nf = !0,
        this.ra = 3);
        this.rk = V(this.rk, a.ssl);
        if (this.Ub = V(this.Ub, a.use_tablet_controls))
            this.$ = "dark";
        b = this.jf;
        if (c = a.video_container_override) {
            var d = c.split("x");
            2 == d.length && (c = parseInt(d[0], 10),
            d = parseInt(d[1], 10),
            b = isNaN(c) || isNaN(d) || 0 >= c * d ? b : new B(c,d))
        }
        this.jf = b;
        this.lb = W(this.lb, a.attrib);
        this.fa = W(this.fa, a.sk);
        this.protocol = this.rk ? "https" : "http";
        this.te = "0" != this.qk;
        this.yj = V(this.te, a.store_user_volume);
        this.Od = V(this.Od, a.use_media_volume);
        (b = a.BASE_YT_URL) && il(b) && (this.hb = b);
        Yy(this, a);
        Zy(this, a);
        "detailpage" == this.Z && delete this.a;
        this.rq = $y(this) + "s";
        this.Bc = this.nf && !this.Vb ? !this.Xb : this.Xb || this.te ? !1 : this.Bc;
        b = this.Sb || "detailpage" == this.Z;
        c = !0;
        this.Tb && (c = !1);
        Rj("nintendo wiiu") && (c = !1);
        this.pk && (c = !0);
        this.rj = b && c;
        this.b = a
    }
    v(Vy, nh);
    f = Vy.prototype;
    f.Vm = !0;
    f.xh = !0;
    f.Qa = "";
    f.uh = "2";
    f.Sb = !1;
    f.pk = !1;
    f.hb = "/";
    f.Ky = !0;
    f.color = "red";
    f.qk = "1";
    f.$f = "web";
    f.gf = "html5";
    f.Vh = !1;
    f.Xh = !0;
    f.Yh = !0;
    f.ig = !1;
    f.tm = !1;
    f.Z = "detailpage";
    f.An = !1;
    f.bi = !1;
    f.Ih = !1;
    f.Ld = !1;
    f.Tb = !1;
    f.$a = !1;
    f.ue = !1;
    f.ve = !0;
    f.Bn = !1;
    f.oh = !1;
    f.Rf = !0;
    f.lg = !1;
    f.Wh = "";
    f.Cn = !1;
    f.nf = !1;
    f.jh = !1;
    f.Ch = gm;
    f.Aj = "";
    f.Zf = !1;
    f.Za = "";
    f.cb = null;
    f.Fh = !1;
    f.mn = !1;
    f.kg = !1;
    f.rj = !1;
    f.Nc = !1;
    f.Nj = !0;
    f.Oj = !0;
    f.te = !0;
    f.yj = !0;
    f.Od = !1;
    f.Xb = !0;
    f.xc = !0;
    f.Ji = !1;
    f.Wb = !1;
    f.sf = !0;
    f.Bc = !1;
    f.uj = !1;
    f.ok = !1;
    f.vm = !1;
    f.Vb = !1;
    f.Hb = !0;
    f.rk = !1;
    f.Ub = !1;
    f.pb = null;
    f.jf = null;
    f.ep = null;
    f.Qc = null;
    f.Ja = null;
    f.Bh = null;
    f.jc = "yt";
    f.bk = !1;
    function Oh(a, b) {
        a.Ea = b.get("d", a.Ea);
        a.ma = b.get("f", a.ma)
    }
    function Yy(a, b) {
        a.Nc = V(a.Nc, b.logwatch);
        a.za = Hm(a.za, b.user_age);
        a.ob = W(a.ob, b.user_display_image);
        a.na = W(a.na, b.user_display_name);
        a.Ca = W(a.Ca, b.user_gender);
        a.la = W(a.la, b.eventid);
        "1" == b.enablecsi && (a.J = b.csi_page_type,
        a.bi = !1,
        a.Ih = !1)
    }
    function Zy(a, b) {
        var c;
        t: {
            if (b && ((c = b.adformat) || (c = (c = b.attrib) && c in Qy && c in Ry ? Ry[c] + "_" + Qy[c] : void 0),
            c)) {
                var d = c.match(/^(\d*)_((\d*)_?(\d*))$/);
                if (d && 5 == d.length && (d = d[3],
                d = 6 == d || 7 == d || 8 == d || 10 == d,
                Xy(a) || d))
                    break t
            }
            c = void 0
        }
        c && (a.j = c,
        a.b.adformat = b.adformat);
        c = b.agcid;
        a.xb = c;
        a.b.agcid = c;
        c = b.feature;
        a.k = c;
        a.b.feature = c;
        if (c = b.referrer)
            a.W = c,
            a.b.referrer = c;
        "1" == b.enablecsi && (a.J = b.csi_page_type,
        a.bi = !1,
        a.Ih = !1);
        a.va = W(a.va, b.q);
        a.u = W(a.u, b.cbrand);
        a.A = W(a.A, b.cbr);
        a.F = W(a.F, b.cbrver);
        a.$f = W(a.$f, b.c);
        a.gf = W(a.gf, b.cver);
        a.I = W(a.I, b.cmodel);
        a.K = W(a.K, b.cnetwork);
        a.P = W(a.P, b.cos);
        a.Q = W(a.Q, b.cosver);
        a.R = W(a.R, b.cplatform)
    }
    function az(a) {
        var b = {};
        b.c = a.$f;
        a.gf && (b.cver = a.gf);
        a.R && (b.cplatform = a.R);
        a.u && (b.cbrand = a.u);
        a.I && (b.cmodel = a.I);
        a.K && (b.cnetwork = a.K);
        a.A && (b.cbr = a.A);
        a.F && (b.cbrver = a.F);
        a.P && (b.cos = a.P);
        a.Q && (b.cosver = a.Q);
        return b
    }
    function Wy(a, b) {
        if (b) {
            a.g = b.split(",");
            var c = {};
            x(a.g, function(a) {
                c[a] = !0
            });
            a.Uu = !!c["925900"];
            a.Xr = !c["904831"];
            a.bb = !!c["913424"];
            a.Gc = !!c["913429"];
            a.Ga = !!c["932206"];
            a.kd = !!c["932237"];
            a.Kc = !!c["932242"];
            a.Ic = !!c["932243"];
            a.Na = !!c["932239"];
            a.Sa = !!c["932250"];
            a.sq = !!c["932265"];
            a.Uf = !!c["932266"];
            a.ij = !!c["932267"];
            a.Us = !!c["932277"];
            a.Wf = !!c["932283"];
            a.Tf = !!c["932284"];
            a.Yf = !!c["932285"];
            a.hd = !!c["932287"];
            a.hj = !!c["932289"];
            a.ld = !!c["932281"];
            a.Jc = !!c["932291"];
            a.re = !!c["932292"];
            a.pe = !!c["932293"];
            a.Va = !!c["932295"] && Qj();
            a.jj = !!c["918117"];
            a.lj = !!c["938630"];
            a.jd = !!c["936903"];
            a.qe = !!c["927845"];
            a.gd = !!c["936908"];
            a.Oa = !!c["921090"];
            a.Hc = !!c["930627"] || !!c["930628"] || !!c["930624"];
            a.Xa = !!c["913430"];
            a.Vf = !!c["913431"];
            a.mb = !!c["907243"];
            a.wb = !!c["936906"];
            a.ha = !!c["902907"]
        }
    }
    function bz(a, b) {
        switch (b.md) {
        case 38:
            var c = b.L.indexOf(":")
              , d = b.L.slice(0, c)
              , c = b.L.slice(c + 1);
            return yk("//play.google.com/books/volumes/" + d + "/content/media", {
                aid: c,
                sig: b.jd
            });
        case 30:
            return d = "//docs.google.com/",
            a.hb != Vy.prototype.hb && (d = a.hb),
            yk(d + "get_video_info_2014", {
                docid: b.L,
                authuser: b.Qa,
                authkey: b.bn,
                eurl: a.a
            });
        case 33:
            return yk("//google-liveplayer.appspot.com/get_video_info", {
                key: b.L
            });
        default:
            return d = {
                html5: "1",
                video_id: b.L,
                cpn: b.Fa,
                eurl: a.a,
                ps: a.cb,
                el: a.Z,
                hl: a.i,
                list: b.Pa,
                agcid: a.xb,
                sts: 16057
            },
            b.I ? d.vvt = b.I : b.P && (d.access_token = b.P),
            a.j && (d.adformat = a.j),
            b.ma && (d.iv_load_policy = b.ma),
            b.df && (d.autoplay = "1"),
            b.Zj && (d.noiba = "1"),
            b.$j && (d.mdx = "1"),
            b.ak && (d.utpsa = "1"),
            b.bb && (d.is_fling = "1"),
            c = cz(a),
            c.width && (d.width = c.width),
            c.height && (d.height = c.height),
            b.la && (d.ypc_preview = "1"),
            b.Kd && (d.splay = "1"),
            a.o && (d.content_v = a.o),
            b.cn && (d.livemonitor = 1),
            a.Qa && (d.authuser = a.Qa),
            a.Za && (d.pageid = a.Za),
            a.la && (d.ei = a.la),
            ra(d, az(a)),
            yk(a.hb + "get_video_info_2014", d)
        }
    }
    function $y(a) {
        return a.Vh ? "//s.youtubeeducation.com/" : a.Rf ? "//s.youtube.com/" : "//video.google.com/"
    }
    function dz(a) {
        return a.W ? a.W.slice(0, 128) : ""
    }
    function hw(a, b) {
        return b.re || Lp(a, b.L, b.Pa, void 0, void 0)
    }
    function Lp(a, b, c, d, e) {
        b = {
            v: b,
            list: c
        };
        d && ra(b, d);
        a = yk(a.protocol + "://" + ("www.youtube-nocookie.com" == window.location.host || a.Vh ? "www.youtube.com" : window.location.host) + "/watch", b);
        if (e) {
            d = "";
            d = "!" == "#".charAt(1) ? "#".substr(0, 2) : "#";
            b = "#";
            "#" == b.charAt(0) && (b = "!" == b.charAt(1) ? b.substr(2) : b.substr(1));
            b = vk(b);
            for (var g in e)
                b[g] = e[g];
            e = d + xk(b);
            a = a + e
        }
        return a
    }
    function ez(a) {
        var b = {
            contact_type: "playbackissue",
            html5: 1,
            plid: a.Ya,
            ei: a.j,
            v: a.L
        };
        a.a && (b.fmt = a.a.b);
        return yk("//www.google.com/support/youtube/bin/request.py", b)
    }
    function cz(a) {
        return (a = a.Bh) ? new B(a.clientWidth,a.clientHeight) : new B(Number.NaN,Number.NaN)
    }
    function fz(a) {
        return a.Ja ? new B(0 < a.Ja.style.width.indexOf("px") ? parseInt(a.Ja.style.width, 10) : a.Ja.clientWidth,0 < a.Ja.style.height.indexOf("px") ? parseInt(a.Ja.style.height, 10) : a.Ja.clientHeight) : new B(Number.NaN,Number.NaN)
    }
    function gz(a) {
        var b = {};
        if (!a.Ja)
            return b;
        a.Ja.webkitDecodedFrameCount && (b.hmewdfc = a.Ja.webkitDecodedFrameCount,
        b.hmewdrop = a.Ja.webkitDroppedFrameCount,
        b.hmewvdbc = a.Ja.webkitVideoDecodedByteCount,
        b.hmewadbc = a.Ja.webkitAudioDecodedByteCount);
        a.Ja.mozParsedFrames && (b.hmempf = a.Ja.mozParsedFrames,
        b.hmemdf = a.Ja.mozDecodedFrames,
        b.hmempresented = a.Ja.mozPresentedFrames,
        b.hmempainted = a.Ja.mozPaintedFrames,
        b.hmempaintdelay = a.Ja.mozPaintDelay);
        return b
    }
    function hz(a) {
        var b = n("yt.www.watch.activity.getTimeSinceActive", window);
        if ("detailpage" == a.Z && b)
            return b();
        var c;
        a.C && (c = u() - a.C);
        return c
    }
    function Sp(a) {
        return "leanback" == a.Z || a.Ld || !a.xc && !a.Ji ? !1 : !0
    }
    function ci(a) {
        return "detailpage" != a.Z && "embedded" != a.Z ? !1 : !0
    }
    function Xy(a) {
        var b = il(document.location.toString())
          , c = b && !kl()
          , d = kl();
        return (d = a.mb ? d && (il(a.origin) || jl(a.origin, fl)) : d && b && (il(a.Wh) || jl(a.Wh, fl))) || c
    }
    f.H = function() {
        this.Bh = this.Ja = null;
        Vy.D.H.call(this)
    }
    ;
    function iz(a, b) {
        this.b = a;
        this.a = b
    }
    function jz(a, b, c) {
        c -= a.a.I;
        c -= c * b * wi(a.b);
        c = Math.max(2, Math.min(a.a.F, c));
        a = Math.max(a.a.k, Math.ceil(2 * b));
        return Math.min(a, Math.ceil(c * b))
    }
    function kz(a, b) {
        var c = Math.min(2.5, vi(a.b));
        return Math.ceil(b * c + ui)
    }
    function lz(a, b, c, d) {
        var e = wi(a.b) + 1 / xi(a.b);
        d = a.a.W * (d - a.a.I);
        d = Math.max(d, vi(a.b) + ui * e);
        c = Math.max(2, Math.min(a.a.F, d / e / (b + c)));
        e = Math.max(a.a.k, Math.ceil(2 * b));
        return Math.min(e, Math.max(Math.ceil(c * b), a.a.b))
    }
    function mz(a, b) {
        return vi(a.b) + b * wi(a.b) + b / xi(a.b)
    }
    function nz(a) {
        var b = xi(a.b);
        a = vi(a.b) + 1048576 * wi(a.b);
        return b * Math.min(1, 1048576 / (b * a))
    }
    ;function oz(a) {
        this.b = a;
        this.pendingRequests_ = [];
        this.a = [];
        this.i = this.g = null;
        this.j = 0;
        this.o = a.info.a;
        this.k = !1
    }
    function pz(a, b) {
        a.pendingRequests_.push(b);
        a.g = Na(b.info.a);
        a.j = b.A ? a.j + qz(b) : a.j + Al(b.info.a).length
    }
    function rz(a) {
        for (; a.pendingRequests_.length && 5 == a.pendingRequests_[0].a; ) {
            var b = a.pendingRequests_.shift();
            b.A && (a.j -= qz(b),
            a.j += Al(b.info.a).length);
            x(b.k, a.u, a)
        }
    }
    oz.prototype.u = function(a) {
        4 == a.info.type ? (a = a.info.a.vp(a),
        fb(this.a, a)) : 3 == a.info.type && this.a.push(a)
    }
    ;
    function sz(a, b) {
        if (a.k)
            return a.a[0].T;
        var c = a.b.info.i;
        if (a.a[0].info.j >= b)
            return null;
        var d;
        for (d = 1; d < a.a.length; d++) {
            var e = a.a[d].buffer != a.a[d - 1].buffer;
            if (a.a[d].info.j > b || e)
                break
        }
        d--;
        var e = a.a[d].T.end
          , g = a.a[d].info.i - b;
        if (c && 1 < g) {
            c = Math.floor((b - a.a[d].info.j) / a.a[d].info.C * a.a[d].info.b);
            if (0 == c)
                return null;
            e = a.a[d].T.start + c - 1
        }
        return new bl(a.a[0].a ? 0 : a.a[0].T.start,e)
    }
    function tz(a) {
        a.g = a.pendingRequests_.length ? Na(a.pendingRequests_[a.pendingRequests_.length - 1].info.a) : a.a.length ? Na(a.a).info : a.i
    }
    function uz(a, b) {
        if (vz(a)) {
            var c;
            c = a.a.length ? a.a[0].info : a.pendingRequests_.length ? a.pendingRequests_[0].info.a[0] : a.g;
            if (b >= c.j && b <= a.g.i)
                return c.a.uf(b, 0).a[0].startTime
        }
        a.g = a.b.uf(b, 0).a[0];
        a.i && a.i.o && (a.i = null);
        return a.g.startTime
    }
    function wz(a, b) {
        xz(a);
        if (a.b.info.g && a.i && !a.i.k && b) {
            var c = Va(a.a, function(a) {
                return a.info.k
            });
            a.a = hb(a.a, 0, c + 1);
            a.k = !0
        } else
            a.a = [];
        if (a.a.length)
            for (a.j = a.a[0].buffer.byteLength,
            c = 1; c < a.a.length; c++)
                a.a[c].buffer != a.a[c - 1].buffer && (a.j += a.a[c].buffer.byteLength);
        else
            a.j = 0
    }
    function yz(a, b, c) {
        if (a.pendingRequests_.length) {
            if (a.pendingRequests_[0].info.a[0].startTime <= b)
                return;
            xz(a)
        }
        for (var d = a.a.length - 1; 0 <= d; d--) {
            var e = a.a[d];
            e.info.startTime > b && (a.a.pop(),
            a.a.length && a.a[d - 1].buffer == e.buffer || (a.j -= e.buffer.byteLength))
        }
        tz(a);
        c && b < a.g.startTime && (a.g = a.b.uf(b, 0, !0).a[0])
    }
    function zz(a) {
        var b = !1, c;
        for (c = 0; c < a.pendingRequests_.length; c++)
            if (7 == a.pendingRequests_[c].a) {
                b = !0;
                break
            }
        if (b) {
            for (; c < a.pendingRequests_.length; )
                a.C(a.pendingRequests_.pop());
            tz(a)
        }
    }
    function Az(a) {
        var b = a.i;
        a.a.length && (b = Na(a.a).info);
        b = a.g || b;
        return b.a.Ge(b, b.T.length - (b.b + b.g))
    }
    function Bz(a) {
        return Sa(a.a, function(a) {
            return a.info.k
        })
    }
    function Cz(a) {
        return !!a.i && a.i.o
    }
    function vz(a) {
        if (!a.i && !a.a.length || !a.g)
            return !1;
        var b;
        if (a.a.length) {
            if (a.i && !(1E-6 >= Math.abs(a.a[0].info.j - a.i.i)))
                return !1;
            b = a.a[0].info.i
        } else
            b = a.i.i;
        for (var c = 1; c < a.a.length; c++) {
            if (!(1E-6 >= Math.abs(b - a.a[c].info.j)))
                return !1;
            b = a.a[c].info.i
        }
        for (c = 0; c < a.pendingRequests_.length; c++) {
            var d = a.pendingRequests_[c].info.a;
            if (!(1E-6 >= Math.abs(b - d[0].j)))
                return !1;
            b = d[d.length - 1].i
        }
        return 1E-6 >= Math.abs(b - a.g.i)
    }
    function Dz(a) {
        return Sa(a.pendingRequests_, function(a) {
            return !(!a.b || 1 != a.b.priority) && 4 <= a.a
        })
    }
    function Ez(a) {
        return !!(a.g && a.b.yb() && a.g.a != a.b && a.g.a.info.a < a.b.info.a)
    }
    oz.prototype.C = function(a) {
        yl(a.info.a[0]) || a.dispose();
        this.j = a.A ? this.j - qz(a) : this.j - Al(a.info.a).length
    }
    ;
    function xz(a) {
        x(a.pendingRequests_, a.C, a);
        a.pendingRequests_ = [];
        a.g = null
    }
    ;function Fz(a, b) {
        this.info = b;
        this.a = 1;
        this.k = null;
        this.A = !this.info.T;
        this.i = a;
        this.o = null;
        this.F = NaN;
        this.C = this.j = 0;
        this.g = NaN;
        this.b = this.u = null;
        this.I = ""
    }
    f = Fz.prototype;
    f.start = function() {
        var a = 1 == this.a
          , b = 6 == this.a;
        1 == this.a || 3 == this.a || b && Gz(this);
        Hz(this, 2);
        if (b) {
            if (this.j < this.i.P) {
                this.j++;
                a = 0.5 + Math.random();
                L(t(this.xk, this), 1E4 * a);
                return
            }
            b = this.info.b;
            if (!(this.F <= b.g)) {
                b.b++;
                b.g = ul - 1;
                var c;
                c = Ye(b.a).Me;
                var d = ll(b.a);
                b.a = ol(d, {
                    cmo: encodeURIComponent("pf=" + b.b),
                    shost: c
                });
                c.match("c.youtube.com$") && (b.a += "&cmo=sensitive_content%3Dyes")
            }
            this.j = 0
        }
        a ? this.xk() : L(t(this.xk, this), 0)
    }
    ;
    f.xk = function() {
        if (!this.ia()) {
            this.F = ul++;
            var a = this.info, b;
            if (a.g) {
                b = a.b.a;
                var c = a.g;
                if (c) {
                    b = b.split("?");
                    var c = c.split("?")
                      , d = [];
                    b[1] && d.push(b[1]);
                    c[1] && d.push(c[1]);
                    d = d.join("&");
                    b = b[0];
                    c[0] && (b = b + "/" + c[0]);
                    b = d ? b + "?" + d : b
                }
            } else
                b = a.b.a;
            a = a.T ? nl(b, "range", a.T.toString()) : b;
            a = nl(a, "keepalive", "yes");
            if (4 == this.info.a[this.info.a.length - 1].type || this.info.T && this.info.T.start < this.i.S)
                a = nl(a, "fr", "yes");
            this.j && (a = nl(a, "playerretry", this.j.toString()));
            this.I = a;
            b = {
                format: "RAW",
                method: "GET",
                responseType: "arraybuffer",
                withCredentials: !0,
                Rc: t(this.kr, this)
            };
            this.o = Hk(a, b);
            this.C = 0;
            this.b && (a = this.b,
            a.b = u(),
            a.j = a.b,
            a.a = 0,
            a.o = 0,
            a.g = !1,
            a.k = yi(a.i),
            Iz(a),
            this.o.addEventListener("progress", t(this.lr, this), !1),
            0 < this.i.j && !yl(this.info.a[0]) && (this.g = L(t(this.Um, this), this.i.j)))
        }
    }
    ;
    f.lr = function(a) {
        if (!this.ia()) {
            var b = this.b
              , c = a.timeStamp
              , d = a.loaded;
            c < b.b && (c = u());
            if (!(20 > c - b.j)) {
                if (d > ui) {
                    Jz(b, c);
                    var e = (c - b.j) / 1E3
                      , g = d - b.a;
                    if (0 < g)
                        if (0.2 < e || 1024 > g)
                            b.o += e;
                        else {
                            var h = b.i
                              , e = Math.max(e, 0.05);
                            h.a.b(e, g / e)
                        }
                }
                b.j = c;
                b.a = d
            }
            b = this.b;
            b.a > b.u && b.a > ui && 4 > this.a && Hz(this, 4);
            4 == a.target.readyState && Kz(this.b, a.timeStamp)
        }
    }
    ;
    f.kr = function(a) {
        if (!this.ia() && a == this.o) {
            this.g && (M(this.g),
            this.g = NaN);
            var b = null == a.response || 400 <= a.status;
            if (!b) {
                a = a.response;
                var c;
                t: {
                    if (2048 > a.byteLength && (c = String.fromCharCode.apply(String, new Uint8Array(a)),
                    il(c)))
                        break t;
                    c = ""
                }
                if (c) {
                    c = ml(c, "keepalive");
                    c = ml(c, "fr");
                    c = ml(c, "playerretry");
                    a = this.info;
                    if (a.g) {
                        var d = a.g;
                        if (d) {
                            var e = d.split("?");
                            if (0 < e.length)
                                for (var g = e[0].split("/"), d = 0; d < g.length; d += 2)
                                    c = ml(c, g[d]);
                            if (1 < e.length)
                                for (e = e[1].split("&"),
                                d = 0; d < e.length; d++)
                                    c = ml(c, e[d].split("=")[0])
                        }
                    }
                    c = ml(c, "range");
                    a.b.a = ml(c, "shost");
                    Hz(this, 3)
                } else if (this.info.T && a.byteLength != this.info.T.length)
                    b = !0;
                else {
                    c = this.info.a;
                    1 != c.length || c[0].T || (d = c[0],
                    e = dl(0, a.byteLength),
                    d = new xl(d.type,d.a,e,d.Jb,d.startTime,d.duration,d.g,e.length,d.o),
                    c[0] = d);
                    for (var d = [], e = 0, h = !1, g = !1, k = 0; k < c.length; k++) {
                        var m = c[k]
                          , p = a
                          , s = dl(e, m.b)
                          , w = !1;
                        if (1 == m.type)
                            a.slice ? p = a.slice(e, e + m.b) : (h = new Uint8Array(a,e,e + m.b),
                            p = (new Uint8Array(h)).buffer),
                            s = dl(0, m.b),
                            h = !0;
                        else if (3 == m.type || 4 == m.type)
                            w = h && !g,
                            g = !0;
                        d.push(new Gl(m,p,s,w));
                        e += m.b
                    }
                    this.k = d;
                    Hz(this, 5)
                }
            }
            b && (Gz(this),
            Hz(this, 6))
        }
    }
    ;
    function Gz(a) {
        if (a.j < a.i.P)
            a = !0;
        else {
            var b = a.info.b;
            a = !(a.F > b.g && 1 <= b.b)
        }
        return a
    }
    function Hz(a, b) {
        a.a = b;
        3 <= a.a && a.u && a.u(a)
    }
    f.Um = function() {
        this.g = NaN;
        if (!this.ia() && this.b) {
            var a = !1;
            if (this.b.g) {
                var b = this.b.C;
                Iz(this.b);
                this.b.C - b >= this.i.j / 1E3 * 0.8 ? (this.C++,
                a = 5 <= this.C) : this.C = 0
            } else
                a = u() / 1E3,
                b = this.b,
                a = 5 < a - (b.b / 1E3 + b.k.delay);
            a ? (Hz(this, 7),
            Lz(this),
            Kz(this.b, Date.now())) : this.g = L(t(this.Um, this), this.i.j)
        }
    }
    ;
    f.ia = function() {
        return -1 == this.a
    }
    ;
    f.dispose = function() {
        Hz(this, -1);
        this.u = this.k = null;
        Lz(this);
        M(this.g);
        this.g = NaN
    }
    ;
    function Lz(a) {
        if (a.o) {
            var b = a.o;
            a.o = null;
            b.abort()
        }
    }
    function qz(a) {
        a = a.info.a[0];
        return a.C * a.a.info.a
    }
    ;function Mz(a, b, c, d) {
        this.priority = b;
        this.i = a;
        this.u = d;
        this.a = this.j = this.b = NaN;
        this.o = 0;
        this.A = c;
        this.C = NaN;
        this.g = !1
    }
    function Kz(a, b) {
        b < a.b && (b = u());
        Jz(a, b);
        var c = a.i
          , d = a.a
          , e = a.o
          , d = Math.max(d, ui);
        c.i.b(1, e / d);
        zi(c);
        c = a.i;
        d = b - a.b;
        e = a.a;
        isNaN(e) || (c.j += e);
        isNaN(d) || (c.k += d / 1E3)
    }
    function Iz(a) {
        var b = a.A - a.a
          , b = b * a.k.tailDelay + b / a.k.byterate
          , c = u() / 1E3
          , b = a.g ? b + c : b + Math.max(c, a.b / 1E3 + a.k.delay);
        a.C = b
    }
    function Jz(a, b) {
        if (!a.g) {
            var c = a.i;
            c.b.b(1, (b - a.b) / 1E3);
            zi(c);
            a.g = !0
        }
    }
    ;function Nz(a, b, c, d, e) {
        T.call(this);
        this.u = a;
        this.g = b;
        this.A = c;
        this.b = this.i = null;
        this.k = new iz(a,b);
        this.a = null;
        this.j = this.I = this.K = NaN;
        this.Q = this.P = !1;
        this.o = !0;
        this.J = !1;
        this.F = NaN;
        this.S = {};
        this.W = d;
        this.V = e
    }
    v(Nz, T);
    var Oz = 2 / 24;
    f = Nz.prototype;
    f.Rs = function(a) {
        this.o = !0;
        this.a = a;
        a.a.appendBuffer && (a.a.addEventListener("updateend", t(this.Yd, this), !1),
        a.i.addEventListener("updateend", t(this.Yd, this), !1));
        Pz(this);
        Qz(this, "msa")
    }
    ;
    function Rz(a) {
        a.a && a.a.a && a.a.a.removeEventListener && (a.a.a.removeEventListener("updateend", t(a.Yd, a), !1),
        a.a.i.removeEventListener("updateend", t(a.Yd, a), !1));
        a.a = null;
        a.o = !1;
        wz(a.b, !1);
        wz(a.i, !1)
    }
    function Sz(a) {
        var b;
        t: if (b = a.k,
        0 < b.a.C) {
            var c = (a.i.b.info.a + a.b.b.info.a + 12500) * b.a.C;
            if (0 < b.a.o) {
                if (c > b.a.o) {
                    b = 0;
                    break t
                }
                c = b.a.o
            }
            b = c
        } else
            b = 0;
        0 < b && (b = {
            cwndbw: (8 * b / 1024).toFixed(0)
        },
        vl(a.i.b.j, b),
        vl(a.b.b.j, b))
    }
    function Tz(a, b, c) {
        if (!b.g) {
            if (!b.b.yb())
                return b.b.g || Uz(a, b, !1),
                !1;
            uz(b, a.j)
        }
        if (!a.o)
            return !1;
        var d = b.pendingRequests_.length + c.pendingRequests_.length;
        if (Dz(b) || Dz(c))
            d -= 1;
        if (2 <= d + 1)
            return !1;
        d = b.g;
        4 == d.type && d.a.yb() && (b.g = Na(d.a.ai(d)),
        d = b.g);
        if (d.o || !d.a.tf(d) || d.a.info.i && 4 == d.type)
            return !1;
        if (Ez(b) && a.g.g)
            return !0;
        if (b.j + c.j > a.g.i || c.g && !c.g.o && c.g.i < d.i)
            return !1;
        b = Vz(a, b, !0);
        a = a.j + b;
        return 3 == d.type && d.i > a ? !1 : !0
    }
    function Wz(a, b, c) {
        if (Tz(a, b, c))
            if (a.g.$) {
                var d = b.g;
                if (b.g.a.yb()) {
                    if (Ez(b) && a.g.g) {
                        var e = a.j
                          , d = a.k
                          , g = lz(d, b.b.info.a, c.b.info.a, 0)
                          , h = mz(d, g)
                          , d = Math.max(h, h + d.a.Q - g / b.b.info.a)
                          , e = e + d;
                        e <= b.g.i && yz(b, e, a.g.K)
                    }
                    d = b.g;
                    g = d.i - a.j;
                    h = b.b.yb() && d.a != b.b;
                    e = 0;
                    d.T && (e = d.T.length - (d.b + d.g));
                    h && e <= ui && (0 < e && (d = new Fz(a.g,d.a.Ge(d, e)),
                    Xz(a, d, !0),
                    pz(b, d)),
                    uz(b, Yz(b)),
                    d = b.g,
                    h = !1);
                    d.a.tf(d) && (c = lz(a.k, d.a.info.a, c.b.info.a, g),
                    h && e <= c && (c = e),
                    d = new Fz(a.g,d.a.Ge(d, c)),
                    Xz(a, d, !1),
                    pz(b, d))
                } else
                    c = lz(a.k, b.b.info.a, c.b.info.a, 0),
                    d = new Fz(a.g,d.a.Ge(d, c)),
                    Xz(a, d, !1),
                    pz(b, d)
            } else {
                c = b.g;
                var d = c.i - a.j
                  , e = c.a.info.a
                  , g = c.a.yb() ? jz(a.k, e, d) : a.g.b
                  , h = kz(a.k, c.a.info.a)
                  , k = !1
                  , e = !1;
                if (c && 3 == c.type && b.b.yb() && c.a != b.b) {
                    var d = jz(a.k, b.b.info.a, d + (c.startTime + c.duration - c.i))
                      , m = kz(a.k, b.b.info.a)
                      , e = c.a.info.a < b.b.info.a;
                    if (!e || d >= m)
                        k = !0,
                        g = d,
                        h = m
                }
                d = h;
                0 < g && (d = Math.max(a.g.b, g, Math.min(2 * g, h)));
                k ? (c = Yz(b),
                a.g.g && e && (e = mz(a.k, d) + a.j + a.g.I,
                e = Math.min(e, c),
                e = b.b.index.Qh(e),
                e < b.b.index.wc() && (c = b.b.index.ug(e + 1)),
                yz(b, c, !1)),
                b.g && !b.g.k && (e = new Fz(a.g,Az(b)),
                Xz(a, e, !0),
                pz(b, e)),
                b.g && (c = Yz(b)),
                c = new Fz(a.g,b.b.uf(c, d))) : c = new Fz(a.g,c.a.Ge(c, d));
                Xz(a, c, !1);
                pz(b, c)
            }
    }
    function Yz(a) {
        return a.g ? a.g.startTime + a.g.duration + Oz : 0
    }
    function Xz(a, b, c) {
        c = c ? 2 : 1;
        a.o || (c = 0);
        var d = Math.min(2.5, vi(a.k.b))
          , e = xi(a.u)
          , g = qz(b);
        b.b = new Mz(a.u,c,g,g * a.g.R - d * e);
        a = t(a.ew, a);
        b.u = a;
        b.start()
    }
    f.ew = function(a) {
        if (!this.ia()) {
            var b = 6 == a.a && Gz(a)
              , c = !this.R && a.info.a[0].a.info.g;
            3 == a.a || b ? (b ? this.B("softerror", 209) : c && Qz(this, "vrr"),
            a.start()) : 5 == a.a ? (c && (this.R = a.I),
            x(a.k, function(a) {
                yl(a.info) && a.info.a.pl(a)
            }),
            Ta(a.k, function(a) {
                return Hl(a)
            }) && !a.k[0].info.a.ql() ? this.Yd() : Zz(this, 126)) : 7 == a.a ? (this.B("softerror", 210),
            Pz(this)) : 4 == a.a ? this.Yd() : Zz(this, 121)
        }
    }
    ;
    function Pz(a) {
        if (isNaN(a.K)) {
            var b = t(a.Yd, a);
            Hv() ? a.K = Kv(b, 0) : a.K = L(b, 0)
        }
    }
    function $z(a) {
        if (isNaN(a.I)) {
            var b = t(function() {
                this.Yd();
                this.I = NaN
            }, a);
            Hv() ? a.I = Kv(b, 1E3) : a.I = L(b, 1E3)
        }
    }
    f.Yd = function() {
        this.K = NaN;
        if (!this.Q && this.a)
            if (this.A && this.A.b) {
                var a = this.a;
                fn(a) ? a.b.duration = Infinity : a.j = Infinity;
                this.Q = !0
            } else if (a = Math.floor(Math.max(this.i.b.index.Cg(), this.b.b.index.Cg())),
            0 < a) {
                var b = this.a;
                fn(b) ? b.b.duration = a : b.j = a;
                this.Q = !0
            }
        if (!this.ia())
            if (a = this.A,
            u() - a.k >= a.o)
                a = this.A,
                a.i || bm(a, a.j),
                $z(this);
            else if ("prerender" == window.document.webkitVisibilityState)
                $z(this);
            else {
                this.a && this.a.Yb() && Rz(this);
                rz(this.b);
                rz(this.i);
                zz(this.b);
                zz(this.i);
                a = !1;
                if (this.a) {
                    a = aA(this, this.b, this.a.i);
                    b = sj(this.a.i.buffered, this.j);
                    if (!isNaN(b) || Cz(this.b))
                        Cz(this.b) && (b = NaN),
                        a |= aA(this, this.i, this.a.a, b);
                    if (Cz(this.b) && Cz(this.i) && !this.a.a.updating && !this.a.i.updating && fn(this.a)) {
                        a = this.a;
                        fn(a) && a.b.endOfStream();
                        return
                    }
                }
                this.rm();
                Wz(this, this.b, this.i);
                Wz(this, this.i, this.b);
                a && (this.a.a.appendBuffer || Pz(this))
            }
    }
    ;
    f.rm = function() {
        if (!this.ia() && !isNaN(this.g.J)) {
            var a = nz(this.k);
            !isNaN(this.F) && Math.abs(this.F - a) / a < this.g.J || (Math.round(a / 1024),
            Math.round(this.F / 1024),
            this.B("bandwidthchange", a),
            this.F = a)
        }
    }
    ;
    function aA(a, b, c, d) {
        if (c.updating)
            return !0;
        var e = b.a.length ? b.a[0] : null;
        if (!e)
            return !1;
        !b.i || b.i.k || zl(b.i, e.info) || (b.i = null,
        fn(a.a) && c.abort(),
        c.g = null);
        var g;
        e.a ? g = !1 : (g = e.info.a.a,
        c.g == g ? g = !1 : (bA(a, c, g),
        c.g = g,
        g = !0));
        if (g && c.updating)
            return !0;
        g = Vz(a, b, !1);
        g = a.j + g;
        0 <= d && (g = Math.min(g, d));
        d = sz(b, g);
        if (!d)
            return !1;
        g = new Uint8Array(e.buffer,d.start,d.length);
        if (a.A.b && 3 == e.info.type) {
            var h;
            t: {
                if (1 == e.info.a.info.j) {
                    var k = new Uint8Array(e.buffer);
                    h = new DataView(k.buffer);
                    var m = h.getUint32(16)
                      , k = String.fromCharCode.apply(null, k.subarray(0, 140)).indexOf("tfdt") + 8;
                    if (h = 8 > k ? NaN : h.getUint32(k) / m) {
                        h = h - e.info.startTime;
                        break t
                    }
                }
                h = 0
            }
            h = -h;
            ia(c.timestampOffset) && c.timestampOffset != h && (c.timestampOffset = h)
        }
        if (!bA(a, c, g))
            return !1;
        for (var p; b.a.length && (b.a[0].T.end > d.end ? (p = b.a[0],
        h = d.end - b.a[0].T.start + 1,
        h = Math.min(h, p.info.b),
        g = new xl(p.info.type,p.info.a,p.info.T,p.info.Jb,p.info.startTime,p.info.duration,p.info.g,h,!1),
        a = dl(p.T.start, h),
        g = new Gl(g,p.buffer,a,p.a),
        h = new xl(p.info.type,p.info.a,p.info.T,p.info.Jb,p.info.startTime,p.info.duration,p.info.g + h,p.info.b - h,p.info.o),
        a = new bl(a.end + 1,p.T.end),
        a = [g, new Gl(h,p.buffer,a,!1)],
        p = a[0],
        b.a[0] = a[1]) : p = b.a.shift(),
        a = b,
        g = p.info,
        a.i = g,
        a.k && a.i.k && (a.k = !1),
        a.o = Math.max(a.o, g.a.info.a),
        p.T.end != d.end); )
            ;
        b.a.length && p.buffer == b.a[0].buffer || (b.j -= p.buffer.byteLength);
        e.a && (c.g = e.info.a.a);
        return !c.appendBuffer || c.updating
    }
    function bA(a, b, c) {
        if (b.appendBuffer)
            try {
                b.appendBuffer(c)
            } catch (d) {
                return !1
            }
        else
            b.append(c);
        return !a.a.Yb()
    }
    function Vz(a, b, c) {
        var d;
        d = a.J || a.g.V ? b.b.info.i ? 10485760 : 62914560 : b.b.info.i ? a.g.u : a.g.A;
        c && (d += a.g.i);
        return d / (a.J ? b.g ? b.g.a.info.a : b.b.info.a : b.o)
    }
    function cA(a) {
        var b = Math.floor(Math.min(a.i.b.index.Cg(), a.b.b.index.Cg()));
        return a.A.b ? b - 30 : b
    }
    function dA(a, b) {
        if (!a.ia()) {
            var c = eA(a, a.b, b, a.a && a.a.i)
              , d = eA(a, a.i, c, a.a && a.a.a);
            a.j = Math.max(b, c, d);
            a.P = !0;
            Pz(a)
        }
    }
    function eA(a, b, c, d) {
        if (b.b.yb())
            if (d) {
                var e = sj(d.buffered, c)
                  , g = NaN
                  , h = b.i;
                h && (g = sj(d.buffered, h.a.index.ug(h.Jb)));
                if (e == g && vz(b))
                    return c;
                wz(b, !0);
                b.b.info.g && b.i && !b.i.k && !Bz(b) && (d = new Fz(a.g,Az(b)),
                Xz(a, d, !0),
                pz(b, d));
                if (isNaN(e))
                    return uz(b, c);
                uz(b, e + Oz)
            } else
                uz(b, c);
        else
            b.b.g ? 0 != c && xz(b) : Uz(a, b, !1);
        return c
    }
    function Uz(a, b, c) {
        var d = c ? 65536 : 0;
        c && !isNaN(a.g.a) && (d = Math.floor(Math.max(d, a.g.a * b.b.info.a)));
        c = b.b.gl(d);
        x(c, function(a) {
            var c = new Fz(this.g,a);
            Xz(this, c, !0);
            !yl(a.a[a.a.length - 1]) && pz(b, c)
        }, a);
        b.b.g = !0
    }
    f.H = function() {
        Rz(this);
        xz(this.i);
        xz(this.b);
        this.b = this.i = null;
        Nz.D.H.call(this)
    }
    ;
    function Zz(a, b) {
        a.B("fatalerror", b);
        if (a.a && fn(a.a)) {
            var c = a.a;
            fn(c) && c.b.endOfStream("network")
        }
        a.dispose()
    }
    Nz.prototype.getDebugInfo = function() {
        var a = {
            lct: this.j.toFixed(3),
            lsk: this.P,
            lmf: this.J,
            lbw: xi(this.u).toFixed(3),
            lhd: vi(this.u).toFixed(3),
            ltd: wi(this.u).toFixed(3),
            laa: this.i.i ? Bl(this.i.i) : "",
            lva: this.b.i ? Bl(this.b.i) : "",
            lar: this.i.g ? Bl(this.i.g) : "",
            lvr: this.b.g ? Bl(this.b.g) : ""
        };
        this.a && !this.a.Yb() && (a.lab = rj(this.a.a.buffered),
        a.lvb = rj(this.a.i.buffered));
        return a
    }
    ;
    function Qz(a, b, c) {
        a.S[b] = c ? window.performance.timing.navigationStart + c : u()
    }
    ;function fA() {
        this.A = 20971520;
        this.u = 8388608;
        this.i = 5242880;
        this.V = !1;
        this.a = 2;
        this.R = 0.95;
        this.I = 3;
        this.W = 1;
        this.b = 49152;
        this.F = 25;
        this.k = 2097152;
        this.J = 0.1;
        this.P = 2;
        this.g = !0;
        this.j = 1800;
        this.o = this.C = NaN;
        this.$ = !0;
        this.Q = 5;
        this.K = !1;
        this.S = 0
    }
    ;function gA(a, b, c) {
        this.a = a;
        this.headers = b;
        this.message = c
    }
    ;function hA(a, b, c, d, e, g, h) {
        this.g = [];
        this.U = a;
        this.j = b.g;
        this.i = b;
        this.b = c;
        this.F = d;
        this.C = e;
        this.a = [];
        this.I = h || null;
        this.A = this.J = !1;
        this.u = null;
        this.k = !0;
        this.o = {};
        this.listen(this.U, ["keymessage", "webkitkeymessage"], this.Fj);
        this.listen(this.U, ["keyadded", "webkitkeyadded"], this.Gq);
        this.listen(this.U, ["keyerror", "webkitkeyerror"], this.Hq);
        g && this.a.push(g)
    }
    v(hA, dn);
    function ii(a, b) {
        if (il(b)) {
            for (var c in a.o) {
                var d = c
                  , e = a.o[c];
                b = Be(Fe(b, d), d, e)
            }
            a.j = b
        } else
            iA(a, "u")
    }
    f = hA.prototype;
    f.start = function() {
        this.ia() || (this.J = !0,
        this.a.length && this.Fj(this.a.shift()))
    }
    ;
    f.dispose = function() {
        hA.D.dispose.call(this);
        this.C = this.U = null
    }
    ;
    f.Fj = function(a) {
        this.ia() || a.sessionId != this.b || (this.A && a.defaultURL && ii(this, a.defaultURL),
        this.J ? (this.u = a,
        jA(this, a)) : this.a.push(a))
    }
    ;
    f.Gq = function(a) {
        this.ia() || a.sessionId != this.b || (this.A = !0,
        this.a.length && this.Fj(this.a.shift()))
    }
    ;
    function jA(a, b) {
        var c = {
            format: "RAW",
            method: "POST",
            Yw: b.message,
            responseType: "arraybuffer",
            withCredentials: !0,
            onSuccess: a.Zw,
            onError: a.Kn,
            O: a
        };
        a.I && (c.headers = {
            Authorization: "Bearer " + a.I
        });
        var d = a.j;
        a.k || (d = Be(Fe(d, "exclude_customdata"), "exclude_customdata", "1"));
        Hk(d, c)
    }
    f.Zw = function(a) {
        if (!this.ia())
            if (0 != a.status && a.response) {
                t: {
                    a = new Uint8Array(a.response);
                    var b = 0
                      , c = String.fromCharCode.apply(String, a.subarray(0, 16384)).split("\r\n")
                      , d = c[0];
                    bb(c, 0);
                    c.pop();
                    var b = b + (d.length + 2)
                      , e = d.match(/^GLS\/1.\d ([0-9]{1,3}) (\w+)$/);
                    if (null != e) {
                        d = e[1];
                        isFinite(d) && (d = String(d));
                        for (var d = r(d) ? /^\s*-?0x/i.test(d) ? parseInt(d, 16) : parseInt(d, 10) : NaN, g = {}, h = 0; h < c.length; h++) {
                            e = c[h];
                            b += e.length + 2;
                            if (0 == e.length) {
                                a = new gA(d,g,a.subarray(b));
                                break t
                            }
                            e = e.match(/([^:]+):\s+([^]+)/);
                            if (null == e)
                                break;
                            g[e[1]] = e[2]
                        }
                    }
                    a = null
                }
                0 != a.a ? (b = hy[a.a.toString()],
                iA(this, "f" + a.a, b ? b : "ERROR_LICENSE")) : ((b = a.headers["Authorized-Format-Types"] || a.headers["Supported-Tracks"]) && this.C.B("newlicense", b.split(",")),
                a = a.message,
                this.U.addKey ? this.U.addKey(this.i.a, a, this.F, this.b) : this.U.webkitAddKey(this.i.a, a, this.F, this.b))
            } else
                this.Kn(a)
    }
    ;
    f.Hq = function(a) {
        this.ia() || a.sessionId != this.b || ("playready" == this.i.b && a.errorCode == a.MEDIA_KEYERR_UNKNOWN && 2 == a.systemCode && this.k ? (this.k = !1,
        jA(this, this.u)) : iA(this, "s" + a.errorCode.code + "." + a.systemCode))
    }
    ;
    f.Kn = function(a) {
        iA(this, "r" + a.status)
    }
    ;
    function iA(a, b, c) {
        a.ia() || a.C.B("licenseerror", b, c);
        a.dispose()
    }
    ;function kA(a, b) {
        this.g = [];
        this.U = a;
        this.b = b;
        this.a = new Ai;
        this.a.G("newlicense", t(this.nr, this));
        this.u = null;
        this.j = {};
        this.C = {};
        this.i = null;
        this.k = [];
        this.o = fm;
        this.listen(this.U, ["needkey", "webkitneedkey"], this.mr);
        this.listen(this.U, ["keymessage", "webkitkeymessage"], this.pr);
        this.listen(this.U, ["keyerror", "webkitkeyerror"], this.or)
    }
    v(kA, dn);
    f = kA.prototype;
    f.dispose = function() {
        kA.D.dispose.call(this);
        this.U = null;
        Lb(this.j, function(a) {
            a.dispose()
        });
        this.a.dispose()
    }
    ;
    f.mr = function(a) {
        a = a.initData;
        if (!this.i && Vb(this.j) || "widevine" != this.b.b) {
            var b = String.fromCharCode.apply(String, a);
            if (!this.C[b]) {
                this.C[b] = !0;
                b = "clearkey" == this.b.b;
                if (112 == a[4] && 115 == a[5] && 115 == a[6] && 104 == a[7] && b) {
                    t: {
                        for (var c = new DataView(a.buffer), b = 0; b < c.byteLength; ) {
                            var d = c.getUint32(b, !1);
                            if (1886614376 != c.getUint32(b + 4, !1))
                                break;
                            if (1477738184 == c.getUint32(b + 12, !1) && 69420633 == c.getUint32(b + 16, !1) && 2464609580 == c.getUint32(b + 20, !1) && 1558758348 == c.getUint32(b + 24, !1)) {
                                c = c.getUint32(b + 28, !1);
                                if (16 != c)
                                    break;
                                a = a.subarray(b + 32, b + 32 + c);
                                break t
                            }
                            b += d
                        }
                        a = null
                    }
                    if (!a)
                        return
                }
                this.i ? this.k.push(a) : lA(this, a)
            }
        }
    }
    ;
    function lA(a, b) {
        if (!a.ia()) {
            try {
                a.U.generateKeyRequest ? a.U.generateKeyRequest(a.b.a, b) : a.U.webkitGenerateKeyRequest(a.b.a, b)
            } catch (c) {
                var d = "g";
                c instanceof DOMException && (d += c.code);
                a.a.B("licenseerror", d, "HTML5_NO_AVAILABLE_FORMATS_FALLBACK", !0);
                return
            }
            a.i = b
        }
    }
    f.pr = function(a) {
        if (!this.ia() && this.U && !this.j[a.sessionId]) {
            var b = new hA(this.U,this.b,a.sessionId,this.i,this.a,a,this.u);
            this.j[a.sessionId] = b;
            this.i = null;
            this.a.B("newsession", b);
            this.k.length && lA(this, this.k.shift())
        }
    }
    ;
    f.or = function(a) {
        !this.ia() && this.U && (this.j[a.sessionId] || this.a.B("licenseerror", "s" + a.errorCode.code + "." + a.systemCode))
    }
    ;
    f.nr = function(a) {
        y(a, "HD") && !hm(this.o) && (this.o = gm,
        this.a.B("qualitychange"))
    }
    ;
    f.G = function(a, b, c) {
        return this.a.G(a, b, c)
    }
    ;
    function mA(a) {
        this.b = {};
        this.b.c1a = t(this.g, this);
        this.b.c3a = t(this.i, this);
        this.a = a
    }
    mA.prototype.g = function() {
        if (!n("yt.abuse.botguardInitialized")())
            return null;
        var a = n("yt.abuse.invokeBotguard")();
        return a ? "r1a=" + a : null
    }
    ;
    mA.prototype.i = function(a) {
        return "r3a=" + Math.floor(this.a.Aa % Ja(a.c3a))
    }
    ;
    function nA(a, b, c, d) {
        this.da = a;
        this.a = b;
        this.g = c;
        this.b = d
    }
    ;function oA(a) {
        this.a = a
    }
    function pA(a, b, c, d) {
        a = im(qA(a, b), rA(a, b, c));
        d && (a = im(a, d));
        return An(b.k || b.A, a, c)
    }
    function qA(a, b) {
        return im(im(a.a.Ch, b.lk), b.ff)
    }
    function rA(a, b, c) {
        b = b.k || b.A;
        if (a.a.pb) {
            var d = a.a.pb.clone();
            Fj && !a.a.Fh && (d = (window.screen && window.screen.width ? new B(window.screen.width,window.screen.height) : null) || d);
            d.scale(Fj || gc ? window.devicePixelRatio || 1 : 1);
            a = a.a.jf || d
        } else
            a = a.a.jf ? a.a.jf : new B(640,360);
        if (b.length) {
            for (var e, d = 0; d < b.length; d++) {
                var g = b[d];
                e = g.getInfo().g;
                var h = null === a || 0.85 * e.width < a.width && 0.85 * e.height < a.height
                  , k = !0;
                !isNaN(c) && g.a && (k = c >= g.b.info.a + g.g.info.a);
                if (h && k)
                    break
            }
            c = em("auto", e.a, !1)
        } else
            c = gm;
        return c
    }
    ;function sA(a) {
        this.b = this.a = NaN;
        this.g = a
    }
    function tA(a, b, c, d) {
        if (a.a == b)
            return c - a.b > (a.g ? 1 < d ? 1500 : 400 : 500);
        a.a = b;
        a.b = c;
        return !1
    }
    ;function uA(a, b, c) {
        vA(c).tick[a] = b || u()
    }
    function wA(a) {
        var b = vA(void 0).tick;
        return a in b
    }
    function xA(a, b) {
        var c = vA(a).tick
          , d = vA(a).span
          , e = yA(a)
          , g = b || n("yt.timing.reportbuilder_");
        if (g) {
            if (g = g.apply(null, [c, d, e, a]))
                zA(g),
                AA(a)
        } else {
            var g = {
                v: 2,
                s: "youtube",
                action: zf("TIMING_ACTION")
            }, h = zf("TIMING_INFO") || {}, k;
            for (k in h)
                e[k] = h[k];
            k = e.srt;
            delete e.srt;
            if (!k && 0 !== k)
                try {
                    var m = (window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance).timing;
                    k = Math.max(0, m.responseStart - m.navigationStart)
                } catch (p) {
                    e.pt && (k = e.pt)
                }
            if (k || 0 === k)
                e.srt = k;
            c.aft || (c.aft = c.vr && c.cl && c.cl > c.vr ? c.cl : c.vr ? c.vr : c.ol);
            c.vr && c.gv && (d.vl = Math.round(c.vr - c.gv));
            for (var s in e)
                "_" != s.charAt(0) && (g[s] = e[s]);
            e = {};
            m = [];
            s = c._start;
            for (var w in c)
                "_" != w.charAt(0) && (k = Math.max(Math.round(c[w] - s), 0),
                e[w] = k,
                m.push(w + "." + k));
            g.rt = m.join(",");
            c = {};
            w = [];
            for (var z in d)
                "_" != z.charAt(0) && (c[z] = d[z],
                w.push(z + "." + d[z]));
            g.it = w.join(",");
            zA(g);
            (d = n("ytdebug.logTiming")) && d(g, e, c);
            AA(a)
        }
    }
    function zA(a) {
        var b = "https:" == window.location.protocol ? "https://gg.google.com/csi" : "http://csi.gstatic.com/csi", c = "", d;
        for (d in a)
            c += "&" + d + "=" + a[d];
        ua(b + "?" + c.substring(1))
    }
    function yA(a) {
        return vA(a).info
    }
    function vA(a) {
        return n("ytcsi." + (a || "") + "data_") || AA(a)
    }
    function AA(a) {
        var b = {
            tick: {},
            span: {},
            info: {}
        };
        ba("ytcsi." + (a || "") + "data_", b, void 0);
        return b
    }
    ;var BA = [102, 107, 108];
    function CA() {
        this.b = 0;
        this.a = this.j = this.g = this.i = NaN
    }
    ;var Ch = [0.25, 0.5, 1, 1.5, 2];
    function DA(a, b) {
        this.a = a;
        this.b = b
    }
    function Uq(a, b) {
        return R(a.a, b) && !R(a.b, b) ? 1 : !R(a.a, b) && R(a.b, b) ? -1 : 0
    }
    ;function EA(a, b) {
        T.call(this);
        this.la = new sA(a.pe);
        this.A = new lk(t(this.getCurrentTime, this),t(this.getPlayerState, this),t(this.ag, this));
        O(this, this.A);
        this.Q = NaN;
        this.F = this.u = null;
        this.k = a;
        this.ra = new oA(a);
        this.$ = NaN;
        this.fa = !1;
        this.o = this.g = null;
        this.S = [];
        this.W = !1;
        this.ha = NaN;
        this.j = new fk;
        this.Ga = b;
        this.K = this.P = null;
        this.I = NaN;
        this.R = new Ao(this);
        this.b = this.J = this.a = null;
        this.V = NaN;
        this.i = null;
        this.ma = 0;
        this.za = !1;
        this.va = 0;
        this.Ea = null;
        this.Ca = !1
    }
    v(EA, T);
    f = EA.prototype;
    f.H = function() {
        M(this.V);
        M(this.va);
        Ef(this.ha);
        fi(this);
        tp(this);
        qh(this.g, this.K, this.R, this.a);
        this.a = this.R = this.j = this.g = this.F = this.la = null;
        Lv(this.ma)
    }
    ;
    function FA(a, b, c) {
        a.W = !1;
        a.Q = NaN;
        a.J = null;
        a.za = !1;
        a.b && Zj(a.b);
        GA(a);
        fi(a);
        qh(a.g, a.a, a.o);
        a.g = null;
        a.o = null;
        a.A.reset();
        if (2 == a.Ga || jl(a.k.origin, fl))
            b.sm = !0;
        a.a = b;
        a.a.G("dataupdated", a.Dq, a);
        a.a.G("dataloaded", a.Cq, a);
        a.a.G("onStatusFail", a.Bq, a);
        b.hf && b.hf > b.Ha && (b = b.hf,
        a.F && (a.sh(a.F),
        a.F = null),
        a.F = new Rh(1E3 * b,2147483646),
        a.F.Ta.G("onEnter", a.fg, a),
        a.wh(a.F));
        fi(a);
        HA(a) || (a.i = c,
        b = t(a.Mc, a),
        c.la = b,
        b = t(a.getCurrentTime, a),
        c.j = b,
        b = t(a.Aq, a),
        c.va = b,
        b = t(a.Eq, a),
        c.$ = b,
        b = a.k,
        c.b = a.a,
        c.a = b,
        c.S = c.a.hb + "get_video",
        c.i = !1,
        c.o = new IA(c.b,c.a,c.va),
        O(c, c.o),
        c.ra = !0);
        JA(a, "newdata")
    }
    function fi(a) {
        Ef(a.$);
        if (a.i) {
            var b = a.i;
            if (!b.ia() && b.i) {
                b.u = "paused";
                var c = KA(b);
                c.pm = !0;
                c.send();
                c = b.o;
                "PL" == c.b && (LA(c, "vps", ["PA"]),
                c.b = "PA");
                c.hg();
                b.dispose()
            }
            ph(a.i);
            a.i = null
        }
    }
    f.getVideoData = function() {
        return this.a
    }
    ;
    f.N = function() {
        return this.k
    }
    ;
    function MA(a) {
        return !(!a.a || a.a.wd || !(a.a.u || a.a.pj || a.a.dg || a.a.fa))
    }
    function NA(a) {
        return !!(a.a && a.a.g && a.a.g.b.length)
    }
    function OA(a) {
        if (a.a && Sn(a.a))
            return !0;
        oy(a, 2);
        return !1
    }
    function PA(a) {
        if (!a.W) {
            QA(a, hk(new fk, 8));
            if (a.i) {
                var b = a.i;
                b.ha = u();
                b = b.o;
                b.j.vps = ["0.000:N"];
                b.P = u();
                b.A = Df(t(b.hg, b), 1E4);
                b.k.start()
            }
            a.W = !0;
            !OA(a) || a.a && a.a.wd || (MA(a) ? (Mn(a.a),
            RA(a)) : a.a.wd || (HA(a) ? RA(a) : (b = bz(a.k, a.a),
            Tn(a.a, b))))
        }
    }
    function SA(a) {
        if (!a.S.length) {
            if (!a.A.pg) {
                var b = a.A;
                b.g = sk(b);
                b.pg = !0;
                b.Zb()
            }
            a.S.length || 0 < oj(a.A.b, -2147483648).length || a.B("playbackready", a);
            a.a.nb && TA(a, Infinity, !0)
        }
    }
    f.xq = function() {
        var a = this.i
          , b = this.a.Xj;
        a.W != b && (UA(a, {
            metric: "heartbeat",
            tpmt: this.a.Qd
        }),
        a.W = b)
    }
    ;
    function RA(a) {
        a.S = eb(a.a.Q);
        NA(a) && (a.a.gb && (VA(a, a.a.Aa),
        WA(a, !0)),
        Wx(a, "i"));
        a.B("playbackdataloaded")
    }
    f.fg = function(a) {
        this.pauseVideo();
        QA(this, !1 == a ? new fk : new fk(kk()))
    }
    ;
    function bi(a, b, c) {
        b = {
            event: "streamingerror",
            ec: b
        };
        c && (b.em = c);
        a.a && (b.v = a.a.L);
        ra(b, az(a.k));
        a.i && XA(a.i, b, void 0)
    }
    function oy(a, b, c, d) {
        if (Rb(gy, c))
            var e = c;
        else
            var g = c;
        QA(a, gk(a.j, 128, {
            errorCode: b,
            errorDetail: d,
            message: g,
            messageKey: e
        }))
    }
    function YA(a, b) {
        a.S = a.S.filter(function(a) {
            return b != a
        });
        SA(a)
    }
    f.ag = function() {
        return R(this.j, 8) && !R(this.j, 64) && !R(this.j, 2)
    }
    ;
    function HA(a) {
        return !(!a.a || !Sn(a.a) || a.a.L)
    }
    f.getPlayerState = function() {
        return this.j
    }
    ;
    f.getPlayerType = function() {
        return this.Ga
    }
    ;
    function ZA(a, b) {
        a.b && tp(a);
        a.g && (a.g.o = !0);
        a.b = b;
        $A(a)
    }
    function tp(a) {
        a.o = null;
        a.g && (a.g.o = !1);
        a.b && (GA(a),
        a.R.removeAll(),
        Zj(a.b),
        a.b = null)
    }
    f.playVideo = function() {
        L(t(this.Im, this), 2500);
        if (this.b) {
            var a;
            if (this.a.g.a) {
                if (!this.o) {
                    this.g ? dA(this.g, this.getCurrentTime()) : aB(this, this.a.Xa);
                    a = this.o = new en(this.b,this.a.Aa,this.a.g.b[0].Sc,this.a.g.a[0].Sc);
                    if (!a.k) {
                        var b;
                        b = a.b;
                        b = b.Ss ? b.a.webkitMediaSourceURL : window.URL.createObjectURL(b);
                        a.k = b
                    }
                    this.Ea = new hn(a.k,!1,!0);
                    a = t(this.g.Rs, this.g);
                    this.o.o = a
                }
                a = this.Ea;
                this.g.o = !0
            } else
                a = this.a.S.i,
                ra(a.g, Nn(this.a));
            this.b.ud != a ? bB(this, a) : (R(this.j, 64) && QA(this, hk(this.j, 8)),
            this.b.playVideo(),
            this.a.nb && !this.a.gb && TA(this, Infinity))
        }
    }
    ;
    function Wx(a, b, c) {
        if (!a.ia() && !R(a.j, 128) && (a.a && c && (a.a.ff = c),
        NA(a))) {
            var d = "m" == b
              , e = "m" == a.a.ld;
            if (d || !e) {
                d && c && hm(c) && (b = "a",
                d = !1);
                c = NaN;
                !a.P || a.k.Ga && !ti() || a.k.jh || (c = a.g ? nz(a.g.k) : xi(a.P),
                c = "i" != b || a.k.re || a.k.Va ? 0.9 * c : 0.6 * c);
                if (a.k.jd && "i" == b) {
                    c = a.a;
                    var g = em("medium", "medium", !1);
                    c = An(c.k || c.A, g)
                } else
                    c = pA(a.ra, a.a, c, a.a.mj ? gm : a.u ? a.u.o : NA(a) && a.a.g.a && Ul(a.a.u) ? fm : gm);
                g = c;
                c = g.getInfo();
                var h = g.a ? g.b.info : c;
                if (!a.k.Va || !a.a.a || "135" != a.a.a.b || "136" != c.b)
                    if (a.a.a != c || a.a.za != h || d != e)
                        a.a.ld = b,
                        a.a.a = c,
                        a.a.za = h,
                        g.a ? (a.a.Xa = g,
                        a.g ? (e = a.g,
                        g = g.g,
                        e.ia() || (e.J = d,
                        e.b.b = g,
                        Sz(e),
                        d && (wz(e.b, !0),
                        g.yb() && uz(e.b, e.j)),
                        g.g || Uz(e, e.b, !1),
                        Pz(e))) : aB(a, g)) : a.a.S = g,
                        a.i && (d = a.a,
                        e = rA(a.ra, d),
                        e = An(d.k || d.A, e),
                        d = a.i.o,
                        c = new nA(a.a,c,b,e.ye.b),
                        LA(d, "vfs", [c.a.b, c.b, d.I, c.g]),
                        d.I = c.a.b,
                        c = fz(d.a),
                        0 < c.width && 0 < c.height && LA(d, "view", [Math.round(c.width), Math.round(c.height)]),
                        LA(d, "vps", [d.b]),
                        d.hg()),
                        a.B("internalvideoformatchange", a.a, "m" == b),
                        a.ag() && a.playVideo()
            }
        }
    }
    function aB(a, b) {
        var c = a.k
          , d = new fA;
        ti() || !c.Ga && !c.jh || (d.J = NaN);
        c.kd && (d.F = 30,
        d.I = 5,
        d.V = !0);
        c.Kc && (d.C = 3);
        c.Ic && (d.C = 1.5,
        d.o = 1048576);
        c.Uf && (d.b = 131072,
        d.$ = !1);
        c.sq && (d.K = !0,
        d.b = 65536,
        d.k = 4194304);
        c.ij && (d.K = !0,
        d.b = 65536,
        d.Q = 8);
        c.Wf && (d.a = 2.5);
        c.Tf && (d.a = 3);
        c.Yf && (d.a = 3.5);
        c.ld && (d.W = 0.8);
        c.hd && (d.R = 0.99);
        c.hj && (d.S = 5E5);
        ti() && (d.A = 8388608,
        d.u = 524288,
        d.i = 2097152,
        d.k = 1048576,
        d.F = 15,
        d.g = !1);
        ti() && (d.a = 3.5,
        d.A = 20971520,
        d.u = 1572864,
        d.i = 20971520,
        d.g = !0,
        d.j = 1E3,
        d.P = 2);
        c.Jc ? c = !1 : (c = c.jf || new B(window.screen.width,window.screen.height),
        c = 2560 <= c.width && 1440 <= c.height);
        c && (d.A = 52428800,
        d.u = 5242880,
        d.i = 20971520,
        d.k = 8388608);
        a.g = new Nz(a.P,d,a.a.u,b.b,b.g);
        a.g.G("bandwidthchange", a.tq, a);
        a.g.G("fatalerror", a.uq, a);
        a.g.G("softerror", a.wq, a);
        d = a.g;
        c = a.a.Ha;
        d.i = new oz(d.W);
        d.b = new oz(d.V);
        c = c || 0;
        0 == c && (d.i.b.g || Uz(d, d.i, !0),
        d.b.b.g || Uz(d, d.b, !0));
        Sz(d);
        dA(d, c);
        Qz(d, "gv");
        d = t(d.rm, d);
        Hv() ? Iv(d, 1, 0) : L(d, 0);
        a.b && (a.g.o = !0)
    }
    f.tq = function() {
        Wx(this, "a")
    }
    ;
    f.uq = function(a) {
        oy(this, a);
        this.g = null;
        this.o && (this.o.dispose(),
        this.o = null)
    }
    ;
    f.wq = function(a) {
        bi(this, a);
        if (this.i)
            this.i.onError(a);
        209 == a && cB(this)
    }
    ;
    f.pauseVideo = function() {
        if (R(this.j, 64)) {
            var a = this.j;
            QA(this, gk(a, a.b & -9))
        }
        this.b && this.b.pauseVideo()
    }
    ;
    function TA(a, b, c, d) {
        if (a.b) {
            if (a.b) {
                b = b || 0;
                var e = bk(a.b);
                a.g && !isNaN(cA(a.g)) && (e = cA(a.g));
                b > e && (b = e,
                WA(a, !0));
                0 > b && (b = 0)
            } else
                b = 0;
            a.a.Ha = b;
            a.I = b;
            c ? a.oi() : (dB(a),
            d && (a.K || (a.K = new Xq(a.oi,d,a)),
            a.K.start()),
            eB(a, !0));
            a.F && b > a.a.hf && (a.sh(a.F),
            a.F = null);
            a.B("seekto", a, b)
        } else
            a.a.Ha = b || 0
    }
    function dB(a) {
        R(a.j, 32) || (QA(a, hk(a.j, 32)),
        R(a.j, 8) && a.pauseVideo(),
        a.B("beginseeking", a))
    }
    f.oi = function() {
        if (!isNaN(this.I) && this.b) {
            var a = this.Mc();
            !this.a.nb && this.I >= Math.floor(a) ? (this.I = a,
            this.B("endseeking", this),
            this.pauseVideo(),
            this.fg()) : (this.g && dA(this.g, this.I),
            Xj(this.b, this.I))
        }
        this.K && (this.K.dispose(),
        this.K = null);
        R(this.j, 32) && (a = this.j,
        QA(this, gk(a, a.b & -33)),
        this.B("endseeking", this))
    }
    ;
    f.getCurrentTime = function() {
        if (!isNaN(this.I))
            return this.I;
        var a = 0;
        this.b && 1 <= this.b.readyState ? a = this.b.getCurrentTime() : this.a && (a = this.a.se || this.a.Ha || 0);
        return a
    }
    ;
    f.Mc = function() {
        var a = 0;
        this.b && (a = this.b.kc);
        0 == a && this.a && (a = this.a.Aa);
        return a
    }
    ;
    f.Aq = function() {
        var a = new CA;
        if (this.P) {
            var b = this.P;
            a.g = b.j;
            a.j = b.k;
            a.a = xi(b)
        }
        this.g ? (b = this.g,
        b.a && !b.a.Yb() && (a.b = uj(b.a.i.buffered, b.j),
        a.i = uj(b.a.a.buffered, b.j)),
        a.a = nz(b.k),
        xi(b.u),
        vi(b.u),
        wi(b.u)) : this.b && (a.b = uj(this.b.buffered, this.getCurrentTime()));
        return a
    }
    ;
    function fB(a, b) {
        var c = isNaN(b) ? a.getCurrentTime() : b
          , d = a.Mc();
        return Infinity == d ? 1 : d ? c / d : 0
    }
    f.Eq = function() {
        var a;
        if (this.a) {
            a = this.a;
            var b = {};
            a.a && (b.fmt = a.a.b,
            a.za && (b.afmt = a.za.b));
            a.V && (b.threed = a.Jc);
            b.plid = a.Ya;
            b.ei = a.j;
            b.list = a.Pa;
            b.cpn = a.Fa;
            a.L && (b.v = a.L);
            a.Qj && (b.infringe = 1);
            a.Kd && (b.splay = 1);
            a.nb && (b.live = a.gb ? "dvr" : "live");
            a.df && (b.autoplay = 1);
            a.na && (b.sdetail = a.na);
            a.md && (b.partnerid = a.md);
            a.Sa && (b.osid = a.Sa);
            a = b
        } else
            a = {};
        return a
    }
    ;
    EA.prototype.getDebugInfo = function(a) {
        var b = {};
        a && (this.i && (a = gB(this.i)) && ra(b, a.Uh()),
        this.b && ra(b, this.b.getDebugInfo()),
        this.g && ra(b, this.g.getDebugInfo()),
        R(this.j, 384) && (b.debug_error = this.j.a));
        b.debug_videoId = this.a.L;
        return b
    }
    ;
    f = EA.prototype;
    f.wh = function(a) {
        this.A.Lx(a)
    }
    ;
    f.sh = function(a) {
        this.A.Mx(a)
    }
    ;
    f.Cq = function(a) {
        this.B("commoninfoloaded", a);
        JA(this, "dataloaded");
        Mn(this.a);
        this.W && RA(this)
    }
    ;
    f.Dq = function() {
        JA(this)
    }
    ;
    f.Bq = function(a) {
        oy(this, parseInt(a.errorcode, 10), unescape(a.reason), a.errordetail)
    }
    ;
    function JA(a, b) {
        a.B("internalvideodatachange", b || "dataupdated", a, a.a)
    }
    function $A(a) {
        x("loadstart loadeddata loadedmetadata play playing pause ended suspend progress seeking seeked timeupdate durationchange error waiting abort".split(" "), function(a) {
            this.R.listen(this.b, a, this.Rw)
        }, a)
    }
    f.Rw = function(a) {
        var b = a.target;
        if (b == this.b && b.currentSrc) {
            switch (a.type) {
            case "durationchange":
                this.a.gb || (b.kc = b.duration || 0,
                b = b.kc,
                (!this.o || isFinite(b) && 0 < b) && VA(this, b));
                break;
            case "ended":
                QA(this, gk(this.j, 4));
                this.Im();
                break;
            case "loadedmetadata":
                this.a.Ha && (this.b.currentTime = this.a.Ha),
                this.k.vm && this.a.Ha && (this.Q = this.a.Ha,
                this.b.pauseVideo());
            case "loadeddata":
                this.V && M(this.V);
                break;
            case "loadstart":
                Ef(this.ha);
                this.mg() || (Hv() ? hB(this) : (b = this.k.qe ? 16 : 100,
                this.ha = Df(t(this.mg, this), b)));
                break;
            case "progress":
                this.Q && this.b.seekable.length && this.b.seekable.end(0) > this.Q && (this.b.currentTime = this.Q,
                this.Q = NaN,
                this.na = this.R.listen(this.b, "canplay", this.Pu));
            case "suspend":
                eB(this);
                this.B("onLoadProgress", this, this.b ? Gh(this.b) : 0);
                break;
            case "seeked":
                iB(this);
                break;
            case "timeupdate":
                this.za = !0,
                this.mg(),
                iB(this),
                eB(this),
                this.B("onVideoProgress", this, b.getCurrentTime())
            }
            this.B("videoelementevent", a);
            t: {
                var b = this.j
                  , c = this.la;
                if (!R(b, 128)) {
                    var d = b.b
                      , e = b.a
                      , g = a.target;
                    switch (a.type) {
                    case "ended":
                        if (0 >= g.networkState)
                            break;
                        d = kk();
                        e = null;
                        break;
                    case "pause":
                        R(b, 32) || R(b, 2) || (d = 4,
                        R(b, 1) && R(b, 8) && (d |= 1),
                        e = null);
                        break;
                    case "playing":
                        d = 8;
                        e = null;
                        break;
                    case "abort":
                        if (64 == d)
                            break;
                    case "error":
                        d |= 256;
                        a = g.error;
                        c = 107;
                        if (a && a.code)
                            switch (a.code) {
                            case a.MEDIA_ERR_ABORTED:
                                c = 200;
                                break;
                            case a.MEDIA_ERR_NETWORK:
                                c = 201;
                                break;
                            case a.MEDIA_ERR_DECODE:
                                c = 202;
                                break;
                            case a.MEDIA_ERR_SRC_NOT_SUPPORTED:
                                c = 203
                            }
                        e = {
                            errorCode: c
                        };
                        y(ek, e.errorCode) && (d |= 128);
                        break;
                    case "canplay":
                        d &= -2;
                        break;
                    case "progress":
                        R(b, 8) && (g.Qk(),
                        a = g.getCurrentTime(),
                        c && (g = uj(g.buffered, a),
                        tA(c, a, u(), g) && (d |= 1)));
                        break;
                    case "seeked":
                        d &= -18;
                        break;
                    case "seeking":
                        d |= 16;
                        0 >= uj(g.buffered, g.currentTime) && (d |= 1);
                        d &= -3;
                        break;
                    case "waiting":
                        R(b, 2) || (d |= 1);
                        break;
                    case "timeupdate":
                        R(b, 16) || (d &= -2);
                        1 < g.readyState && 0 < g.currentTime && (d &= -65);
                        break;
                    default:
                        break t
                    }
                    b = gk(b, d, e)
                }
            }
            QA(this, b)
        }
    }
    ;
    function hB(a) {
        Lv(a.ma);
        a.ma = Kv(t(function() {
            this.mg() || hB(this)
        }, a))
    }
    f.mg = function() {
        var a = this.b;
        a && this.za && this.a && !this.a.ph && !wA("pbs") && 2 <= a.readyState && !a.ended && 0 < tj(a.buffered) && uA("pbs");
        if (this.b && this.a && !this.a.ph && 0 < this.b.getCurrentTime() && 0 < this.b.kc) {
            Ef(this.ha);
            this.a.ph = !0;
            (a = n("ytbin.qoe.getInstance")) && a().markPlayStart();
            this.k.Oa && jB(this);
            if (this.i && (a = this.i,
            !a.i)) {
                var b = gB(a, "playback");
                a.b.nm && (a.J = [10 + a.b.Sf, 10, 10, 40 + a.b.hh - a.b.Sf, 40],
                Ef(a.F),
                a.F = NaN,
                a.F = Df(t(a.P, a), 100),
                a.A = kB(a),
                b.Xf = lB(a, !0));
                b.a && b.a.push(mB(a));
                b.ef = !0;
                b.send();
                if (a.a.Nc && !a.a.oh && !a.i) {
                    var b = a.a
                      , c = a.b
                      , b = {
                        noflv: "1",
                        html5: "1",
                        video_id: c.L,
                        cpn: c.Fa,
                        plid: c.Ya,
                        ei: c.j,
                        referrer: dz(b),
                        eurl: b.a,
                        framer: b.S,
                        feature: b.k,
                        fmt: c.a ? c.a.b : 0,
                        ptk: c.F,
                        skl: c.om,
                        access_token: c.P,
                        ucid: c.Gc
                    };
                    ra(b, nB(a));
                    delete b.fexp;
                    b = yk(a.a.hb + "user_watch", b);
                    ua(b)
                }
                a.b.F && (b = a.a,
                c = a.b,
                b = yk(b.hb + "ptracking", {
                    html5: "1",
                    video_id: c.L,
                    cpn: c.Fa,
                    plid: c.Ya,
                    ei: c.j,
                    ptk: c.F,
                    oid: c.ob,
                    ptchn: c.mb,
                    pltype: c.lb,
                    content_v: b.o
                }),
                ua(b));
                if (a.b.lm && a.a.ve && !a.i) {
                    var b = a.a
                      , c = a.b
                      , d = {
                        noflv: 1,
                        video_id: c.L,
                        cpn: c.Fa,
                        el: b.Z,
                        ps: b.cb,
                        referrer: dz(b),
                        eurl: b.a,
                        framer: b.S,
                        fmt: c.a ? c.a.b : 0,
                        ptk: c.F,
                        subscribed: c.o,
                        t: c.gd
                    };
                    b.Sb && (d.autoplay = "1");
                    c.Kd && (d.splay = "1");
                    0 < c.Ha && (d.start = 1E3 * c.Ha);
                    c.oj && (d.tmi = "1");
                    b = yk(a.S, d);
                    ua(b)
                }
                a.b.cg && UA(a, {
                    metric: "playback"
                });
                a.i = !0;
                a.k = a.j();
                a.A = kB(a);
                0.5 < a.k - a.g && (a.g = a.k)
            }
            Ef(this.$);
            this.a.cg && (this.i.i || this.a.km) && (this.$ = Df(t(this.xq, this), 3E4));
            this.B("playbackstarted");
            return !0
        }
        return !1
    }
    ;
    function jB(a) {
        wA("aft") || uA("aft");
        var b = a.a;
        if (b.L) {
            var c = b.L;
            yA(void 0).docid = c
        }
        b.j && (c = b.j,
        yA(void 0).ei = c);
        b.Fa && (c = b.Fa,
        yA(void 0).cpn = c);
        0 < b.Ha && (c = b.Ha.toString(),
        yA(void 0).start = c);
        b = b.a.b.toString();
        yA(void 0).fmt = b;
        b = Math.round((a.b ? Gh(a.b) : 0) * a.Mc()).toString();
        yA(void 0).tds = b;
        b = a.getCurrentTime().toFixed(3);
        yA(void 0).cmt = b;
        if (a.g) {
            a = a.g;
            window && window.performance && window.performance.getEntriesByName && (b = window.performance.getEntriesByName(a.R),
            b.length && (b = b[0],
            Qz(a, "vri", b.fetchStart),
            Qz(a, "vdns", b.domainLookupEnd),
            Qz(a, "vreq", b.requestStart),
            Qz(a, "fvb", b.responseStart),
            Qz(a, "vrc", b.responseEnd)));
            a = a.S;
            for (var d in a)
                uA(d, a[d])
        }
    }
    f.Pu = function() {
        this.na && (this.R.Ib(this.na),
        this.na = void 0,
        this.b.playVideo())
    }
    ;
    function eB(a, b) {
        if (a.b && a.a) {
            var c = a.getCurrentTime();
            if (a.g) {
                var d = a.g;
                if (!d.P || d.j <= c && c < d.j + 10)
                    d.j = c,
                    d.P = !1;
                $z(d)
            }
            a.a.gb && c > a.Mc() && (d = a.Mc(),
            0 == d && (d = c),
            VA(a, 1.2 * d));
            var d = fB(a)
              , e = 0;
            0 < tj(a.b.buffered) && (a.a.gb ? a.fa || (e = bk(a.b) / a.Mc()) : e = a.b ? Gh(a.b) : 0);
            5 < c && (a.a.Ha = c);
            M(a.va);
            var g = a.b;
            g.paused || g.ended || (a.va = a.b.played && 0 == a.b.played.length ? L(t(a.en, a), 100) : L(t(a.en, a), 500));
            a.a.se = c;
            if (!b && a.ag()) {
                a.i ? (g = a.i,
                g = g.j ? g.Q + g.j() - g.g : null) : g = null;
                if (null != g)
                    a.a.Qd = g;
                else {
                    var g = a.a.Xj
                      , h = a.a.se;
                    0 < g && h > g && (a.a.Qd += h - g)
                }
                a.a.Aa && a.a.R && a.a.Qd >= a.a.R && (g = a.i,
                g.i && g.b.R && (h = gB(g, "delayplay"),
                h.ih = !0,
                h.a && h.a.push(mB(g)),
                h.send()),
                a.a.R = NaN)
            }
            a.a.ph || a.mg();
            if (a.a.sj && 0 < a.a.se) {
                g = a.i;
                if (g.i) {
                    var h = g.a
                      , k = g.b
                      , g = {
                        ns: "yt",
                        html5: "1",
                        docid: k.L,
                        plid: k.Ya,
                        ei: k.j,
                        cpn: k.Fa,
                        fmt: k.a ? k.a.b : 0,
                        el: h.Z,
                        ps: h.cb,
                        subscribed: k.o,
                        yttk: "1",
                        st: g.j(),
                        et: g.j(),
                        ctp: "1",
                        vid: h.fa
                    }
                      , g = yk("//s2.youtube.com/s", g);
                    ua(g)
                }
                a.a.sj = !1
            }
            a.B("progresssync", a, c, d, e, b);
            a.a.Xj = c
        }
    }
    f.en = function() {
        this.b && (this.b.Qk(),
        R(this.j, 8) && tA(this.la, this.getCurrentTime(), Date.now(), uj(this.b.buffered, this.b.getCurrentTime())) && QA(this, hk(this.j, 1)),
        eB(this))
    }
    ;
    function QA(a, b) {
        if (!ik(a.j, b)) {
            var c = new DA(b,a.j);
            a.j = b;
            a.k.kg && R(b, 8) && 0 < Uq(c, 256) && 201 == b.a.errorCode && setTimeout(t(function() {
                this.b && (this.a.S && this.b.load(),
                this.playVideo())
            }, a), 500);
            0 > Uq(c, 8) && WA(a, !1);
            0 < Uq(c, 32) && WA(a, !1);
            a.a && a.a.nb && a.a.gb && R(c.a, 2) && (VA(a, a.getCurrentTime()),
            eB(a, !0));
            R(b, 256) && oB(a, b);
            a.i && pB(a.i, c);
            ok(a.A, c);
            a.B("statechange", c)
        }
    }
    function oB(a, b) {
        var c = b.a;
        Ef(a.$);
        cB(a);
        if (a.a && a.a.cg && y(BA, c.errorCode)) {
            var d = a.i
              , c = c.errorCode;
            d.V || (d.V = new Fp("error-__ec__"));
            c = {
                metric: Jp(d.V, {
                    ec: c
                })
            };
            UA(d, c)
        }
    }
    function cB(a) {
        var b;
        if (b = a.k.gd)
            if (b = a.a)
                b = a.a,
                b = 18E3 < u() - b.pe;
        b && (bi(a, 127),
        a.B("urlauthexpired"))
    }
    function iB(a) {
        R(a.j, 2) || R(a.j, 32) || (a.I = NaN)
    }
    function WA(a, b) {
        a.a && a.a.gb && a.fa != b && (a.fa = b,
        a.B("liveviewshift", b))
    }
    function bB(a, b) {
        a.k.Na && ck(a.b, b.a || il(b.b));
        Vj(a.b, b);
        a.o && !b.a && (a.o = null);
        On(a.a) && qB(a);
        M(a.V);
        a.V = L(t(a.uv, a), 15E3);
        a.k.mn ? L(t(function() {
            this.b.playVideo()
        }, a), 0) : a.b.playVideo()
    }
    function qB(a) {
        var b = On(a.a);
        b && !a.u && a.b && ((b = $m(a.b, a.a.a.Sc, b)) ? (a.u = new kA(a.b,b),
        a.u.G("newsession", t(a.Iv, a)),
        a.u.G("licenseerror", t(a.Gv, a)),
        a.u.G("qualitychange", t(a.Hv, a)),
        a.u.u = a.a.P,
        O(a, a.u)) : oy(a, 203, "HTML5_NO_AVAILABLE_FORMATS_FALLBACK"))
    }
    function GA(a) {
        a.u && (a.u.dispose(),
        a.u = null)
    }
    f.Iv = function(a) {
        var b = az(this.k);
        b.cpn = this.a.Fa;
        this.a.I && (b.vvt = this.a.I);
        $b(a.o, b);
        ii(a, a.j);
        this.B("newlicensesession", a)
    }
    ;
    f.Gv = function(a, b, c) {
        oy(this, c ? 5 : 206, q(b) ? b : "ERROR_LICENSE", a)
    }
    ;
    f.Hv = function() {
        Wx(this, "r")
    }
    ;
    f.uv = function() {
        bi(this, 102);
        if (this.i)
            this.i.onError(102);
        this.B("loadsofttimeout")
    }
    ;
    function VA(a, b) {
        a.b && (a.b.kc = b);
        a.a.Aa != b && (a.a.Aa = b,
        JA(a))
    }
    f.Im = function() {
        if (!this.Ca) {
            this.Ca = !0;
            var a;
            var b = new mA(this.a);
            if (b.a && b.a.va) {
                a = vk(b.a.va);
                var c = [b.a.va], d;
                for (d in b.b)
                    if (a[d]) {
                        var e = b.b[d](a);
                        e && c.push(e)
                    }
                a = c.join("&")
            } else
                a = null;
            a && (b = this.i,
            b.na || (c = gB(b, "atr"),
            c.C = a,
            c.send(),
            b.na = !0))
        }
    }
    ;
    function rB(a, b, c, d) {
        T.call(this);
        this.a = a;
        this.type = b + "_" + c;
        this.g = d
    }
    v(rB, T);
    rB.prototype.getType = function() {
        return this.type
    }
    ;
    rB.prototype.getCurrentAd = function() {
        return this.g ? this.g.getCurrentAd() : null
    }
    ;
    function sB() {
        var a = n("yt.www.watch.ads.handleSetAfvCompanionVars");
        a && a()
    }
    function tB(a) {
        var b = n("yt.www.watch.ads.handleMoveGutCompanion");
        b && b(1 == a ? !0 : !1)
    }
    function uB(a) {
        var b = n("yt.www.watch.ads.handleShowAfvCompanionAdDiv");
        b && b(0 < (a & 3))
    }
    function vB() {
        var a = n("yt.www.watch.ads.setCompanion");
        a && a()
    }
    function wB(a) {
        uB(8);
        var b = n("yt.www.watch.ads.showForcedMpu");
        b && b(a)
    }
    ;function xB(a) {
        rB.call(this, a, 2, 3, null);
        this.b = this.i = 0
    }
    v(xB, rB);
    xB.prototype.show = function() {
        var a = n("yt.www.watch.ads.loadAfc");
        a && a();
        this.B("adEnd", this);
        this.i = Df(t(this.j, this), 1E3)
    }
    ;
    xB.prototype.H = function() {
        yB(this);
        xB.D.H.call(this)
    }
    ;
    function yB(a) {
        a.i && (Ef(a.i),
        a.b = 0)
    }
    xB.prototype.j = function() {
        var a = n("yt.www.watch.ads.isAfcAdVisible");
        this.b++;
        var b = {};
        b.at = this.getType();
        10 <= this.b || !a ? (yB(this),
        this.B("AD_LOGGING_EVENT", 2, b)) : a() && (yB(this),
        this.B("AD_LOGGING_EVENT", 3, b))
    }
    ;
    function zB() {}
    da(zB);
    f = zB.prototype;
    f.hc = null;
    f.cj = null;
    f.Yp = "en";
    f.load = function(a, b) {
        if (this.hc)
            return zq(this.hc);
        this.hc = new rq;
        this.cj = a ? a : "3";
        null != b && (this.Yp = b);
        yq(Eq("3.1" == this.cj ? "//s0.2mdn.net/instream/html5/ima3.js" : "//s0.2mdn.net/instream/html5/ima.js", {
            timeout: 1E4
        }), this.jy, this.cq, this);
        return this.hc
    }
    ;
    f.getVersion = function() {
        return this.cj
    }
    ;
    f.jy = function() {
        if ("3.1" == this.cj && (google.ima.settings.setLocale(this.Yp),
        this.hc)) {
            this.hc.Lf();
            return
        }
        google.ima.SdkLoader.setCallbacks(t(this.hc.Lf, this.hc), t(this.iy, this));
        google.ima.SdkLoader.load("3", void 0)
    }
    ;
    f.iy = function(a) {
        this.cq(Error("Google Ads SDK Failed to load: " + a))
    }
    ;
    f.cq = function(a) {
        this.hc.Bd(a)
    }
    ;
    function AB(a) {
        return a ? -1 != a.toString().search(/(?:true|1)/i) : !1
    }
    function BB(a, b) {
        if (a) {
            var c = "getErrorCode"in a ? a.getErrorCode() : null;
            c ? b.error_code = c : (c = "getMessage"in a && ja(a.getMessage) && "3.1" == zB.getInstance().getVersion() ? a.getMessage() : a.message,
            50 < c.length && (c = c.substring(0, 47) + "..."),
            b.error_message = c)
        }
    }
    function CB(a, b) {
        if (a && "3.1" == zB.getInstance().getVersion()) {
            var c = a.getAdId();
            if (c) {
                var d = a.getWrapperAdIds() || [];
                b.ad_id = db(d, c).join(",");
                if (c = a.getAdSystem())
                    d = a.getWrapperAdSystems() || [],
                    b.ad_sys = db(d, c).join(",");
                a.isSkippable() && (b.skip = 1)
            }
        }
    }
    function DB(a, b) {
        if (a[b])
            return AB(a[b]);
        var c = b.toLowerCase(), d;
        for (d in a)
            if (d && d.toLowerCase() == c)
                return AB(a[d]);
        return !1
    }
    function EB(a) {
        var b = "";
        a & 2 && a & 1 ? b = "video" : a & 2 ? b = "skippablevideo" : a & 1 && (b = "standardvideo");
        a & 4 && (b && (b += "_"),
        b += "text_image_flash");
        return b
    }
    ;function FB(a) {
        var b = null;
        "transition"in a.style ? b = "transition-duration" : "webkitTransition"in a.style ? b = "-webkit-transition-duration" : "MozTransition"in a.style ? b = "-moz-transition-duration" : "OTransition"in a.style ? b = "-o-transition-duration" : "msTransition"in a.style && (b = "-ms-transition-duration");
        a = b ? (document.defaultView ? document.defaultView.getComputedStyle(a, null) : document.parentWindow.getComputedStyle(a, null)).getPropertyValue(b) : "0";
        return 1E3 * parseFloat(a)
    }
    ;function GB(a, b, c) {
        this.i = a;
        this.g = b;
        this.b = c;
        this.a = t(this.Tu, this)
    }
    v(GB, nh);
    f = GB.prototype;
    f.Pf = !1;
    f.fh = 0;
    f.Pe = null;
    function HB(a) {
        a.Pe || a.fh ? a.Pf = !0 : IB(a)
    }
    f.stop = function() {
        this.Pe && (l.clearTimeout(this.Pe),
        this.Pe = null,
        this.Pf = !1)
    }
    ;
    f.pause = function() {
        this.fh++
    }
    ;
    f.resume = function() {
        this.fh--;
        this.fh || !this.Pf || this.Pe || (this.Pf = !1,
        IB(this))
    }
    ;
    f.H = function() {
        GB.D.H.call(this);
        this.stop()
    }
    ;
    f.Tu = function() {
        this.Pe = null;
        this.Pf && !this.fh && (this.Pf = !1,
        IB(this))
    }
    ;
    function IB(a) {
        a.Pe = mj(a.a, a.g);
        a.i.call(a.b)
    }
    ;function JB(a, b, c, d) {
        var e = Math.min(c / (b.mo / b.ti), d / (b.lo / b.rows))
          , g = b.mo * e
          , e = b.lo * e
          , g = Math.floor(g / b.ti) * b.ti
          , e = Math.floor(e / b.rows) * b.rows
          , h = g / b.ti
          , k = e / b.rows
          , m = Math.floor((c - h) / 2);
        c = Math.ceil((c - h) / 2);
        var p = Math.floor((d - k) / 2);
        d = b.Vu * h * -1;
        var s = b.row * k * -1;
        a = a.style;
        a.width = h + "px";
        a.height = k + "px";
        h = p + "px";
        a.marginTop = h;
        a.marginBottom = h;
        a.marginLeft = m + "px";
        a.marginRight = c + "px";
        a.backgroundImage = "url(" + b.url + ")";
        a.backgroundPosition = d + "px " + s + "px";
        a.backgroundSize = g + "px " + e + "px"
    }
    ;function KB() {
        this.g = !1;
        this.a = [];
        this.b = new GB(this.rv,250,this);
        O(this, this.b)
    }
    v(KB, nh);
    f = KB.prototype;
    f.mp = !1;
    f.td = null;
    f.$b = null;
    f.Ph = null;
    f.ik = null;
    f.jk = null;
    f.tg = null;
    f.ae = 0;
    f.Kk = 0;
    f.Vk = 0;
    f.Do = 10;
    f.Mb = 0;
    f.yi = 0;
    f.bl = 0;
    f.Wc = null;
    f.Ne = null;
    f.Pd = 0;
    f.disable = function() {
        this.mp = !0
    }
    ;
    f.Dv = function(a) {
        this.tg && hd(this.$b);
        H(this.td, "enabled");
        this.Wc = Qn(a);
        this.Ne = Rn(a);
        if (this.Wc && !this.mp) {
            G(this.td, "enabled");
            a = Hv();
            var b = t(this.Wk, this);
            a && (b = t(function() {
                this.a.push(Jv(b))
            }, this));
            this.Ne.G("l", b);
            LB(this);
            a ? this.a.push(Jv(t(this.lp, this))) : this.lp()
        }
    }
    ;
    f.lp = function() {
        for (var a = this.$b.cloneNode(!0), b = this.Wc.a[0].b, c, d, e = 0; e < b; e++)
            d = this.tg.cloneNode(!1),
            c = Vm(this.Ne, e, this.Mb),
            JB(d, c, this.Mb, this.yi),
            a.appendChild(d);
        b = this.$b;
        (c = b.parentNode) && c.replaceChild(a, b);
        this.$b = a
    }
    ;
    f.Wk = function(a, b) {
        Ud(this.$b, !1);
        for (var c, d, e = a; e <= b; e++)
            if (d = this.$b.children[e])
                c = Vm(this.Ne, e, this.Mb),
                JB(d, c, this.Mb, this.yi);
        Ud(this.$b, !0)
    }
    ;
    function MB(a, b) {
        if (b != a.bl) {
            var c = Vm(a.Ne, b, 2 * a.Mb)
              , d = Math.round(2 * a.Mb)
              , e = Math.round(2 * a.yi);
            JB(a.ik, c, d, e);
            a.bl = b
        }
    }
    f.rv = function() {
        for (var a = this.Kk, b = Math.max(Math.floor(a / this.Mb), 0), a = Math.min(Math.ceil((a + this.ae) / this.Mb), this.Wc.a[0].b - 1); b <= a; b++) {
            for (var c = this.Ne, d = b, e = pm(c.a, 2 * this.Mb), g = void 0, h = void 0; 0 <= e; e--)
                if (g = c.a.a[e],
                h = Math.floor(d / (g.a * g.g)),
                !g.i[h]) {
                    var g = c
                      , k = e
                      , m = k + "-" + h;
                    g.i[m] || (g.i[m] = !0,
                    Sm(g.g, k, {
                        Rn: k,
                        Sn: h
                    }))
                }
            Wm(c)
        }
    }
    ;
    function LB(a, b) {
        a.Do = Math.min(10, Math.ceil(a.ae / 72));
        a.Mb = Math.floor(a.ae / a.Do);
        a.yi = 0.555 * a.Mb;
        a.Vk = a.Mb * a.Wc.a[0].b;
        Od(a.$b, a.Vk);
        var c = Math.round(2 * a.Mb)
          , d = 0.555 * c + 12;
        Md(a.Ph, c, d);
        Bd(a.Ph, (a.ae - c) / 2);
        a.td.style.height = Cd(d + 20, !0);
        b && (c = a.Wc.a[0].b,
        Hv() ? a.a.push(Jv(t(a.Wk, a, 0, c - 1))) : a.Wk(0, c - 1),
        MB(a, a.bl),
        a.g = !0)
    }
    f.H = function() {
        this.tg = this.jk = this.ik = this.Ph = this.$b = this.td = this.Ne = this.Wc = null;
        for (var a = this.a, b = 0, c = a.length; b < c; b++)
            Lv(a[b]);
        this.a.length = 0;
        KB.D.H.call(this)
    }
    ;
    function NB(a, b, c, d) {
        this.width = b;
        this.b = c;
        this.i = d;
        this.a = b - c - d;
        this.g = Bb(a - c, 0, this.a);
        this.position = this.g + c;
        this.qd = this.g / this.a
    }
    ;function OB() {
        Y.call(this, ["div", ["ytp-progress-magnifier", "html5-draggable"], ["div", "ytp-play-progress"], ["div", "ytp-load-progress"], ["div", "ytp-progress-magnifier-scrubber-button"]]);
        this.C = this.template.a["ytp-load-progress"];
        this.A = 0;
        this.u = this.template.a["ytp-play-progress"];
        this.F = 0;
        this.g = [];
        this.a = {};
        this.i = this.template.a["ytp-progress-magnifier-scrubber-button"]
    }
    v(OB, Y);
    function PB(a, b) {
        var c = a.b
          , d = c.width - 4
          , e = d - 2 * a.Pd;
        if (ia(b))
            var d = QB(a).position
              , g = a.M().offsetWidth / 2
              , d = Bb(b, d - g, d + g);
        else
            d = 2 + c.qd * d;
        return new NB(d,c.width,2 + c.qd * e,2 + (1 - c.qd) * e)
    }
    function QB(a) {
        var b = a.b;
        a = a.M().offsetWidth / 2 + 2;
        return new NB(b.position,b.width,a,a)
    }
    OB.prototype.disable = function() {
        this.b = null
    }
    ;
    OB.prototype.isEnabled = function() {
        return !!this.b
    }
    ;
    function RB(a, b) {
        if (a.b) {
            var c = a.M()
              , d = QB(a)
              , e = PB(a)
              , g = c.offsetWidth / 2
              , h = d.position - g
              , d = d.position + g;
            c.style.left = h + "px";
            var c = a.A * e.a + e.b
              , k = a.F * e.a + e.b
              , m = a.i.offsetWidth
              , p = k - h - m / 2;
            p > -m && p < 2 * g + m ? (a.i.style.left = p + "px",
            Lo(a.i)) : Mo(a.i);
            k -= h;
            0 <= k ? (Od(a.u, Math.min(k, 2 * g)),
            Lo(a.u)) : Mo(a.u);
            c -= h;
            0 <= c ? (Od(a.C, Math.min(c, 2 * g)),
            Lo(a.C)) : Mo(a.C);
            if (b) {
                h = (h - e.b) / 2;
                d = (d - e.b) / 2;
                c = h / 60;
                k = d / 60;
                g = 0;
                for (m = Math.ceil(c); m <= k; m++)
                    p = SB(a, g++),
                    p.className = 0 == m % 60 ? "ytp-60m-progress" : 0 == m % 30 ? "ytp-30m-progress" : 0 == m % 15 ? "ytp-15m-progress" : "ytp-1m-progress",
                    p.style.left = 120 * (m - c) + "px",
                    p.style.width = "1px";
                var h = 2 * h, d = 2 * d, c = 2 * a.Pd, s;
                for (s in a.a)
                    if (k = a.a[s],
                    p = Bb(0.002 * k.start, 0, c),
                    m = Math.min(Math.min(0.002 * k.end, c) - p, Di(k)),
                    p = Bb(p, 0, e.a - m),
                    p <= d || p + m >= h) {
                        var w = SB(a, g++);
                        w.style.left = p - h + "px";
                        w.style.width = m + "px";
                        w.className = k.style
                    }
                for (; g < a.g.length; )
                    F(a.g.pop())
            }
        }
    }
    function SB(a, b) {
        if (b < a.g.length)
            return a.g[b];
        var c = document.createElement("div");
        a.g[b] = c;
        a.M().appendChild(c);
        return c
    }
    OB.prototype.H = function() {
        this.i = this.u = this.C = null;
        OB.D.H.call(this)
    }
    ;
    function TB() {
        Y.call(this, ["div", ["ytp-progress-tooltip"], ["div", "ytp-progress-tooltip-thumbnail"], ["div", "ytp-progress-tooltip-text-container", ["div", "ytp-progress-tooltip-text", "{{text}}"]], ["div", "ytp-progress-tooltip-timestamp-container", ["div", "ytp-progress-tooltip-timestamp", "{{timestamp}}"]], ["div", "ytp-progress-tooltip-arrow"]]);
        this.b = this.template.a["ytp-progress-tooltip-arrow"];
        this.hide()
    }
    v(TB, Y);
    f = TB.prototype;
    f.Th = !1;
    f.Pd = 0;
    f.yf = null;
    f.Qg = null;
    f.disable = function() {
        this.Th = !0
    }
    ;
    f.show = function() {
        this.Th || TB.D.show.call(this)
    }
    ;
    f.reset = function() {
        H(this.M(), "with-thumbnail");
        this.Qg = this.yf = null
    }
    ;
    f.Ev = function(a, b) {
        (a <= this.a || this.a <= b) && UB(this)
    }
    ;
    function UB(a) {
        var b = Vm(a.Qg, a.a, 108);
        JB(a.template.a["ytp-progress-tooltip-thumbnail"], b, 108, 60)
    }
    f.H = function() {
        this.b = this.Qg = this.yf = null;
        TB.D.H.call(this)
    }
    ;
    function VB(a) {
        T.call(this);
        this.bb = a;
        this.va = null;
        this.R = {};
        this.ra = {};
        this.fa = Infinity;
        this.W = this.S = this.K = null;
        this.ha = 0;
        this.u = this.g = this.F = null;
        this.k = new Ao(this);
        this.Oa = "";
        this.Na = null;
        this.V = 0;
        this.Va = null;
        this.za = 0;
        this.a = this.b = this.Sa = this.i = this.J = this.la = null;
        this.Ca = new Ao(this);
        this.$ = null;
        this.Ea = new Ao(this);
        this.A = this.I = !1;
        this.P = this.Q = this.ma = null;
        this.j = this.Ga = this.na = this.o = 0;
        this.Xa = !1
    }
    v(VB, T);
    function WB(a, b) {
        a.g = b;
        a.i = D("html5-progress-bar", a.g);
        a.k.listen(a.i, "click", a.Jh);
        Bo(a.k, a.i, "down", a.iw);
        a.Oa = Bo(a.k, a.i, "over", a.zn);
        a.J = D("html5-progress-list", a.i);
        a.Va = D("ytp-play-progress", a.J);
        a.Na = D("ytp-load-progress", a.J);
        a.la = D("html5-highlight", a.J);
        a.va = D("html5-ad-progress-list", a.i);
        a.$ = D("html5-scrubber-button", a.i);
        a.S = D("html5-clip-exclusion", a.i);
        a.W = a.S.cloneNode(!1);
        a.S.parentNode.appendChild(a.W);
        a.F = D("html5-clip-start", a.i);
        Bo(a.k, a.F, "over", a.kp);
        Bo(a.k, a.F, "out", a.jp);
        a.k.listen(a.F, "click", a.wl);
        a.K = D("html5-clip-end", a.i);
        Bo(a.k, a.K, "over", a.kp);
        Bo(a.k, a.K, "out", a.jp);
        a.k.listen(a.K, "click", a.wl);
        a.Sa = D("html5-progress-screenreader", a.i)
    }
    f = VB.prototype;
    f.zn = function(a) {
        this.I || (this.k.Ib(this.Oa),
        this.A = !1,
        this.Q = this.ma = a = new A(Nf(a),Of(a)),
        this.a && 5400 <= this.o && (M(this.na),
        this.a.show(),
        Uo(this.la),
        a = XB(this),
        this.a.b = a,
        RB(this.a, !0),
        a = qa(G, this.g, "html5-progress-magnifier-hover"),
        this.na = L(a, 0)),
        this.b && this.b.show(),
        Bo(this.Ca, this.g, "move", this.Fn),
        Bo(this.Ca, this.g, "out", this.gu))
    }
    ;
    function YB(a) {
        a.A = !1;
        M(a.na);
        H(a.g, "html5-progress-magnifier-hover");
        var b = FB(a.a.M());
        a.na = L(t(function() {
            this.a.hide();
            Vo(this.la)
        }, a), b)
    }
    f.gu = function(a) {
        this.I || a.relatedTarget && !(this.b && ld(this.b.M(), a.relatedTarget) || !ld(this.g, a.relatedTarget)) || ZB(this)
    }
    ;
    f.Fn = function(a) {
        var b = new A(Nf(a),Of(a))
          , c = a.target ? a.target.getAttribute("data-tooltip") : null;
        c && (b.x = Gd(a.target).x + a.target.offsetWidth / 2);
        if (this.a && this.a.isEnabled())
            if (this.I)
                this.A ? this.P = b : this.Q = b;
            else {
                var d = Sd(this.a.M());
                if (d.contains(b))
                    this.P = b,
                    this.A = !0;
                else {
                    var e = Sd(this.J)
                      , g = this.ma.y - Of(a);
                    if (Nf(a) >= d.left && Of(a) >= d.top && Nf(a) < d.left + d.width || e.contains(b)) {
                        d = 6 * g - 6;
                        if (Nf(a) >= this.ma.x - d && Nf(a) <= this.ma.x + d)
                            return;
                        this.A = !1;
                        this.ma = this.Q = b
                    } else {
                        ZB(this);
                        return
                    }
                }
            }
        else
            this.Q = b;
        c ? $B(this, c) : $B(this)
    }
    ;
    function $B(a, b) {
        if (a.a && a.a.isEnabled()) {
            var c = Sd(a.a.M());
            if (a.I && a.A) {
                var d = c.left
                  , c = d + c.width;
                a.j = d > a.P.x ? a.P.x - d : c < a.P.x ? a.P.x - c : 0
            }
            d = XB(a);
            a.a.b = d;
            RB(a.a, !0);
            var e = a.a
              , d = PB(e)
              , c = QB(e)
              , e = e.M().offsetWidth
              , g = c.position - e / 2
              , d = new NB(d.position,e,d.b - g,d.i - (c.width - g - e))
              , c = Math.max(d.width / d.a, 0.015);
            a.la.style.left = Math.round(1E3 * ((d.width / 2 - d.b) / d.a - c / 2)) / 10 + "%";
            a.la.style.width = Math.round(1E3 * c) / 10 + "%"
        }
        if (a.b && (c = a.Xa ? a.V * a.o : 0,
        d = a.b,
        e = aC(a),
        !d.Th)) {
            g = 50;
            d.yf ? (g = 108,
            b && (g *= 2)) : b && (g = 108);
            d.M().style.padding = "2px";
            d.M().style.width = g + "px";
            var g = g / 2 + 2
              , h = new NB(e.position,e.width,g,g);
            d.M().style.left = h.position - g + "px";
            g = d.b.offsetWidth / 2;
            h = new NB(e.position,e.width,g,g);
            d.b.style.left = h.position - d.M().offsetLeft - g + "px";
            d.wa(Ep(e.qd * d.Pd - c), "timestamp");
            d.yf && (c = om(d.yf, e.qd),
            c != d.a && (d.a = c,
            UB(d)));
            b ? (G(d.M(), "with-text"),
            d.wa(b, "text")) : H(d.M(), "with-text")
        }
    }
    f.wx = function() {
        var a;
        if (0 > this.j)
            a = 0.15 * this.j - 0.1,
            this.j -= a,
            0 < this.j && (this.j = 0);
        else if (0 < this.j)
            a = 0.15 * this.j + 0.1,
            this.j -= a,
            0 > this.j && (this.j = 0);
        else
            return;
        var b = Gd(this.g).x;
        this.Q.x = Bb(this.Q.x + a, b, b + XB(this).width);
        $B(this);
        a = aC(this);
        bC(this, a.qd, this.V);
        this.B("seekto", a.qd * this.o, !1)
    }
    ;
    function ZB(a) {
        a.Ca.removeAll();
        a.b && a.b.hide();
        a.a && a.a.isEnabled() && (a.a.disable(),
        YB(a));
        a.Oa = Bo(a.k, a.i, "over", a.zn)
    }
    f.iw = function(a) {
        a.stopPropagation();
        a.preventDefault();
        this.b && this.b.hide();
        this.a && this.a.isEnabled() && YB(this);
        cC(this);
        this.Jh(a)
    }
    ;
    f.Qt = function(a) {
        a.stopPropagation();
        a.preventDefault();
        this.A = !0;
        cC(this);
        this.Jh(a)
    }
    ;
    function cC(a) {
        a.I = !0;
        a.B("beginseeking");
        Bo(a.Ea, document, "move", a.Jh);
        Bo(a.Ea, document, "up", a.xx);
        a.A && (a.Ga = Df(t(a.wx, a), 20))
    }
    f.xx = function(a) {
        a.stopPropagation();
        this.I = !1;
        this.Ea.removeAll();
        Ef(this.Ga);
        ZB(this);
        this.B("endseeking")
    }
    ;
    f.Jh = function(a) {
        a.stopPropagation();
        a.preventDefault();
        this.Fn(a);
        a = this.A ? aC(this) : XB(this);
        var b = a.qd * this.o;
        bC(this, a.qd, this.V);
        (b < this.ha || b > this.fa) && this.wl();
        this.B("seekto", b, !this.I)
    }
    ;
    function aC(a) {
        return a.a && a.a.isEnabled() ? a.A ? PB(a.a, a.P.x - Gd(a.g).x) : PB(a.a) : XB(a)
    }
    function XB(a) {
        return new NB(a.Q.x - Gd(a.g).x,a.J.clientWidth,a.$.clientWidth / 2,a.$.clientWidth / 2)
    }
    function dC(a, b, c) {
        bC(a, q(b) && !a.I ? b : a.za, q(c) ? c : a.V)
    }
    function bC(a, b, c) {
        a.za = b;
        var d = Math.round(1E3 * b) / 10;
        Yo(a.Va, "transform", "scalex(" + b + ")");
        Yo(a.$, "transform-origin-x", d + "%");
        a.$.style.left = d + "%";
        a.V = Math.max(a.za, c);
        Yo(a.Na, "transform", "scalex(" + a.V + ")");
        a.a && (d = a.a,
        d.F = b,
        d.A = c,
        RB(a.a, !1))
    }
    function eC(a) {
        var b = 0 < a.ha
          , c = 0 < a.o && a.fa < a.o;
        I(a.F, "html5-clip-enabled", b);
        I(a.S, "html5-clip-enabled", b);
        I(a.K, "html5-clip-enabled", c);
        I(a.W, "html5-clip-enabled", c);
        b && (a.F.style.left = 100 * a.ha / a.o + "%",
        a.S.style.width = a.F.style.left);
        c && (b = Math.min(100, 100 * a.fa / a.o),
        a.K.style.left = b + "%",
        a.W.style.left = b + "%",
        a.W.style.width = 100 - b + "%")
    }
    f.kp = function() {
        G(this.g, "html5-clip-marker-hover")
    }
    ;
    f.jp = function() {
        H(this.g, "html5-clip-marker-hover")
    }
    ;
    f.wl = function(a) {
        a && a.stopPropagation();
        this.ha = 0;
        eC(this);
        this.fa = Infinity;
        eC(this)
    }
    ;
    function fC(a, b) {
        x(b, function(a) {
            if (a.Sd) {
                var b = a.getId();
                if (!this.R[b]) {
                    var e = document.createElement("div");
                    a.b && e.setAttribute("data-tooltip", a.b);
                    this.R[b] = a;
                    this.ra[b] = e;
                    var b = this.J.clientWidth
                      , g = Bb(a.start / 1E3 / this.o, 0, 1) * b
                      , h = Math.min(Math.min(a.end / 1E3 / this.o * b, b) - g, Di(a));
                    e.style.width = h + "px";
                    b = Bb(g, 0, b - h);
                    e.style.left = b + "px";
                    e.className = a.style;
                    this.va.appendChild(e)
                }
                this.a && (this.a.a[a.getId()] = a)
            } else
                gC(this, a),
                this.a && delete this.a.a[a.getId()]
        }, a);
        a.a && RB(a.a, !1)
    }
    function hC(a, b) {
        x(b, function(a) {
            gC(this, a);
            this.a && delete this.a.a[a.getId()]
        }, a);
        a.a && RB(a.a, !1)
    }
    function gC(a, b) {
        var c = b.getId();
        a.R[c] == b && (F(a.ra[c]),
        delete a.R[c],
        delete a.ra[c])
    }
    f.H = function() {
        M(this.na);
        Ef(this.Ga);
        this.k.removeAll();
        this.Ca.removeAll();
        this.Ea.removeAll();
        this.va = null;
        this.ra = {};
        this.$ = this.Sa = this.J = this.i = this.Va = this.Na = this.g = this.F = this.W = this.S = this.K = null;
        VB.D.H.call(this)
    }
    ;
    function iC(a, b) {
        this.a = a;
        this.i = b
    }
    iC.prototype.j = null;
    iC.prototype.b = NaN;
    function jC(a, b, c) {
        a.a.B("AD_LOGGING_EVENT", b, c)
    }
    function kC(a) {
        lC(a);
        var b = mC(a);
        if (a.g) {
            var c = nC(a.i)
              , d = a.g.y - c.top
              , d = Math.round(a.g.x - c.left) + "x" + Math.round(d);
            b.ck_xy = d;
            b.ck_wh = c.width + "x" + c.height
        }
        jC(a, 15, b)
    }
    function oC(a) {
        lC(a);
        var b = mC(a);
        if (isNaN(a.b))
            lC(a);
        else {
            var c = u() - a.b;
            b.ad_stl = c
        }
        jC(a, 4, b)
    }
    function pC(a) {
        lC(a);
        var b = mC(a)
          , c = a.a.wp();
        c ? b.ad_fmt = c : lC(a);
        jC(a, 5, b)
    }
    function mC(a) {
        var b = {}
          , c = a.a.da
          , d = a.a.Gf()
          , e = a.a.dp();
        CB(a.a.getCurrentAd(), b);
        d && 0 < d && (b.ad_len = d);
        c && c.L ? b.ad_v = c.L : e && (c = zk(e),
        b.ad_dom = c,
        a.i.ka.u && (b.ad_v_url = e.substr(0, 512)));
        b.at = a.a.getType();
        return b
    }
    function lC(a) {
        a.j || (a.j = "InstreamAdDisplay (" + a.a.getType() + ")")
    }
    ;function qC(a, b, c, d) {
        rB.call(this, b, a, 2, c);
        this.a.G("onVolumeChange", this.fu, this);
        this.a.G("control_toggle_play_pause", this.Hm, this);
        this.a.G("control_play", this.yh, this);
        this.a.G("control_pause", this.Lj, this);
        this.u = d;
        this.i = new iC(this,this.a);
        this.b = new Ao(this);
        this.o = this.k = !1;
        this.j = 0
    }
    v(qC, rB);
    f = qC.prototype;
    f.ab = null;
    f.da = null;
    f.If = !1;
    f.Gg = null;
    f.Fg = null;
    f.Hg = null;
    f.show = function() {
        this.i.b = u();
        var a = "";
        if ("3.1" == rC())
            a = this.u;
        else {
            var b = null;
            try {
                b = this.g.getSelectedCreative(),
                a = b.getMediaUrl("video/x-flv") || b.getMediaUrl("video/mp4") || b.getMediaUrl("video/webm")
            } catch (c) {
                sC(this, c);
                return
            }
        }
        if (a) {
            b = wk(a);
            b = b.v || b.video_id;
            if (!b) {
                var d = ve(a).match(/^\/watch\/([^\/]*)$/i);
                d && (b = d[1])
            }
            b || (a = a.match(/yt_vid\/([a-zA-Z0-9_-]{11})/),
            null != a && 1 < a.length && (b = a[1]));
            a = b ? new Lh({
                video_id: b,
                dash: "0"
            }) : null
        } else
            a = null;
        this.da = a;
        var e;
        this.da ? (this.da.Kd = !0,
        e = {
            video_id: this.da.L
        },
        this.da.G("onStatusFail", this.Ln, this),
        this.da.G("dataloaded", this.Mn, this),
        a = this.a.N(),
        a = new Vy(a.b),
        a.Z = "adunit",
        a.Sb = !0,
        a = bz(a, this.da),
        Tn(this.da, a)) : tC(this);
        uC(this.a, -1, e);
        this.En()
    }
    ;
    function vC(a) {
        a.da && (a.da.ba("onStatusFail", a.Ln, a),
        a.da.ba("dataloaded", a.Mn, a))
    }
    f.Mn = function() {
        vC(this);
        Mn(this.da);
        var a = pA(new oA(this.a.N()), this.da);
        a ? (a = a.i) ? (a = new Ge(Wj(a)),
        a.a.set("autoplay", "1"),
        a = a.toString(),
        "3.1" == rC() ? this.g.setMediaUrl(a) : this.g.getSelectedCreative().setMediaUrl(a),
        tC(this)) : sC(this, Error("Failed to determine ad media resource.")) : sC(this, Error("Failed to determine ad media format."))
    }
    ;
    function tC(a) {
        if (Fj || 2.2 <= sm && 3 > sm) {
            var b = 2E3 - (u() - a.i.b);
            a.j = L(t(a.yo, a), Math.max(0, b));
            G(S(a.a.a), "ad-interstitial-showing")
        } else
            a.yo()
    }
    f.yo = function() {
        tB(1);
        uB(1);
        wC(this);
        this.ab = xC(this.a, !0);
        this.Hg = S(this.a.a);
        if (this.a.ka.V)
            F(D("video-ad-status-bar"));
        else {
            var a = S(this.a.a);
            this.Gg = D("video-ad-time-left", a);
            var a = D("html5-ad-progress-list", a)
              , b = dd("div");
            G(b, "ytp-ad-progress");
            a.appendChild(b);
            this.Fg = b;
            this.b.listen(this.ab, "timeupdate", this.ev)
        }
        ff(this.Hg, ["ad-showing", "ad-interrupting"]);
        this.b.listen(rp(this.a.b), "mouseup", this.dv);
        this.b.listen(this.ab, "waiting", this.En);
        this.a.G("onResize", this.Gk, this);
        try {
            this.b.listen(this.g, google.ima.AdErrorEvent.Type.AD_ERROR, this.cv);
            this.b.listen(this.g, google.ima.AdEvent.Type.CLICK, this.av);
            this.b.listen(this.g, google.ima.AdEvent.Type.COMPLETE, this.no);
            this.b.listen(this.g, google.ima.AdEvent.Type.PAUSED, this.oo);
            this.b.listen(this.g, google.ima.AdEvent.Type.STARTED, this.po);
            this.Gk();
            var c = this.a
              , d = c.b
              , e = yC(c);
            d.ca.N().Hb && (Md(d.a, e),
            Bd(d.a, 0, 0));
            this.g.start()
        } catch (g) {
            sC(this, g)
        }
    }
    ;
    f.po = function() {
        this.If = !0;
        this.k = !1;
        this.o || (this.o = !0,
        oC(this.i),
        zC(this.a, 1));
        if (0 == this.Gf()) {
            var a = this.ab;
            a.kc = a.duration || 0
        }
        this.a.rb(!0);
        uC(this.a, 1);
        this.B("adPlay", this)
    }
    ;
    f.oo = function() {
        this.If = !1;
        this.a.rb(!1);
        uC(this.a, 2)
    }
    ;
    f.no = function() {
        this.k || (pC(this.i),
        this.If = !1,
        this.k = !0,
        uC(this.a, 0),
        zC(this.a, 2),
        this.B("adEnd", this))
    }
    ;
    f.cv = function(a) {
        sC(this, a.getError())
    }
    ;
    function sC(a, b) {
        a.If = !1;
        uC(a.a, 0);
        a.B("adError", b)
    }
    f.Ln = function() {
        vC(this);
        sC(this, Error("Request to get video data failed."))
    }
    ;
    f.av = function() {
        kC(this.i);
        "3.1" == rC() || this.a.ka.Q || L(t(this.yh, this), 0);
        this.B("select")
    }
    ;
    f.dv = function(a) {
        a = new A(Nf(a),Of(a));
        this.i.g = a
    }
    ;
    f.ev = function(a) {
        var b = Ep(this.g.getRemainingTime());
        this.Gg.innerHTML = b;
        0 == this.Gf() && (b = this.ab,
        b.kc = b.duration || 0);
        b = this.Gf() ? this.ab.getCurrentTime() / this.Gf() : 0;
        b = Math.round(1E3 * b) / 10;
        this.Fg.style.width = b + "%";
        this.ab.ended && L(t(this.no, this, a), 50)
    }
    ;
    f.En = function() {
        !this.If && this.o || uC(this.a, 3)
    }
    ;
    f.H = function() {
        this.a.ba("control_toggle_play_pause", this.Hm, this);
        this.a.ba("control_play", this.yh, this);
        this.a.ba("control_pause", this.Lj, this);
        this.a.ba("onResize", this.Gk, this);
        this.b.removeAll();
        vC(this);
        this.g.destroy();
        this.ab && (pp(this.a.b),
        this.ab = null);
        wC(this);
        this.Gg && (this.Gg.innerHTML = "",
        this.Gg = null);
        this.Fg && (F(this.Fg),
        this.Fg = null);
        this.Hg && (gf(this.Hg, ["ad-showing", "ad-interrupting"]),
        this.Hg = null);
        this.k = !0;
        qC.D.H.call(this)
    }
    ;
    function wC(a) {
        a.j && (M(a.j),
        a.j = 0,
        H(S(a.a.a), "ad-interstitial-showing"))
    }
    f.Gf = function() {
        return this.ab ? this.ab.kc : null
    }
    ;
    f.wp = function() {
        return this.ab ? this.ab.getType() : null
    }
    ;
    f.dp = function() {
        return this.ab && this.ab.currentSrc ? this.ab.currentSrc : null
    }
    ;
    f.fu = function(a) {
        a = a.muted ? 0 : a.volume;
        isNaN(a) || (a = Bb(a / 100, 0, 1),
        this.g.setVolume(a))
    }
    ;
    f.Hm = function() {
        this.If ? this.Lj() : this.yh()
    }
    ;
    f.yh = function() {
        this.ab && (this.g.resume(),
        this.po())
    }
    ;
    f.Lj = function() {
        this.ab && (this.g.pause(),
        this.oo())
    }
    ;
    f.Gk = function() {
        var a = yC(this.a);
        this.g.resize(a.width, a.height, google.ima.ViewMode.NORMAL)
    }
    ;
    function AC() {
        this.g = !1;
        this.b = 0;
        this.a = ""
    }
    ;function BC(a, b, c) {
        rB.call(this, b, a, 2, c);
        this.a.G("control_toggle_play_pause", this.Ym, this);
        this.a.G("control_play", this.Ah, this);
        this.a.G("control_pause", this.Tj, this);
        this.j = new iC(this,this.a);
        this.b = new Ao(this);
        this.i = CC(b);
        this.i.G("statechange", this.Wm, this);
        this.i.G("internalvideodatachange", this.Xm, this);
        this.da = null;
        this.k = this.o = !1
    }
    v(BC, rB);
    f = BC.prototype;
    f.ul = !1;
    f.rg = null;
    f.qg = null;
    f.sg = null;
    f.show = function() {
        var a = this.a;
        DC(a.app, CC(a));
        this.j.b = u();
        tB(1);
        uB(1);
        this.sg = S(this.a.a);
        if (this.a.ka.V)
            F(D("video-ad-status-bar"));
        else {
            a = S(this.a.a);
            this.rg = D("video-ad-time-left", a);
            var a = D("html5-ad-progress-list", a)
              , b = dd("div");
            G(b, "ytp-ad-progress");
            a.appendChild(b);
            this.qg = b;
            this.i.G("progresssync", this.ln, this)
        }
        ff(this.sg, ["ad-showing", "ad-interrupting"]);
        this.b.listen(rp(this.a.b), "mouseup", this.bu);
        this.a.G("onResize", this.ek, this);
        try {
            this.b.listen(this.g, google.ima.AdErrorEvent.Type.AD_ERROR, this.Zt),
            this.b.listen(this.g, google.ima.AdEvent.Type.CLICK, this.Yt),
            this.b.listen(this.g, google.ima.AdEvent.Type.COMPLETE, this.au),
            this.b.listen(this.g, google.ima.AdEvent.Type.PAUSED, this.In),
            this.b.listen(this.g, google.ima.AdEvent.Type.STARTED, this.Jn),
            this.b.listen(this.g, google.ima.AdEvent.Type.SKIPPED, this.cu),
            this.ek(),
            this.g.start()
        } catch (c) {
            EC(this, c)
        }
    }
    ;
    f.Xm = function(a, b, c) {
        "newdata" == a && this.da != c && uC(this.a, -1, {
            video_id: c.L
        });
        this.da = c
    }
    ;
    f.Wm = function(a) {
        a = a.a;
        R(a, 128) && EC(this, Error(a.a.message || "Video player error."))
    }
    ;
    f.Jn = function() {
        this.ul = !0;
        this.k = !1;
        this.o || (this.o = !0,
        oC(this.j),
        zC(this.a, 1));
        uC(this.a, 1);
        this.B("adPlay", this)
    }
    ;
    f.In = function() {
        this.ul = !1;
        uC(this.a, 2)
    }
    ;
    f.au = function() {
        var a = new AC;
        a.g = this.k;
        a.b = u();
        this.da && this.da.Fa && (a.a = this.da.Fa);
        var b = CC(this.a);
        b.pauseVideo();
        b.b && (GA(b),
        b.o && (b.o.dispose(),
        b.o = null),
        b.a && (b.a.Ha = b.getCurrentTime()),
        b.I = NaN,
        Yj(b.b),
        b.k.Na && ck(b.b, !1),
        R(b.j, 128) || QA(b, gk(b.j)));
        uC(this.a, 0, a);
        zC(this.a, 2);
        pC(this.j);
        this.B("adEnd", this)
    }
    ;
    f.cu = function() {
        this.k = !0
    }
    ;
    f.Zt = function(a) {
        EC(this, a.getError())
    }
    ;
    function EC(a, b) {
        a.i.fg();
        uC(a.a, 0);
        a.B("adError", b)
    }
    f.Yt = function() {
        kC(this.j);
        "3.1" == rC() || this.a.ka.Q || L(t(this.Ah, this), 0);
        "3.1" == rC() && this.g.pause();
        this.B("select")
    }
    ;
    f.bu = function(a) {
        this.j.g = new A(a.pageX,a.pageY)
    }
    ;
    f.ln = function(a, b, c) {
        this.rg.innerHTML = Ep(a.Mc() - b);
        a = Math.round(1E3 * c) / 10;
        this.qg.style.width = a + "%"
    }
    ;
    f.H = function() {
        this.a.ba("control_toggle_play_pause", this.Ym, this);
        this.a.ba("control_play", this.Ah, this);
        this.a.ba("control_pause", this.Tj, this);
        this.a.ba("onResize", this.ek, this);
        this.b.removeAll();
        this.i.G("statechange", this.Wm, this);
        this.i.ba("internalvideodatachange", this.Xm, this);
        this.i.ba("progresssync", this.ln, this);
        var a = this.a;
        a.g && FC(a.app, a.g);
        this.g.destroy();
        this.rg && (this.rg.innerHTML = "",
        this.rg = null);
        this.qg && (F(this.qg),
        this.qg = null);
        this.sg && (gf(this.sg, ["ad-showing", "ad-interrupting"]),
        this.sg = null);
        this.k = !1;
        BC.D.H.call(this)
    }
    ;
    f.Gf = function() {
        return this.i.Mc()
    }
    ;
    f.wp = function() {
        return this.da && this.da.a ? this.da.a.Sc : null
    }
    ;
    f.dp = function() {
        return this.da && this.da.S ? Wj(this.da.S.i) : null
    }
    ;
    f.Ym = function() {
        this.ul ? this.Tj() : this.Ah()
    }
    ;
    f.Ah = function() {
        this.g.resume();
        this.Jn()
    }
    ;
    f.Tj = function() {
        this.g.pause();
        this.In()
    }
    ;
    f.ek = function() {
        var a = yC(this.a);
        this.g.resize(a.width, a.height, google.ima.ViewMode.NORMAL)
    }
    ;
    function GC(a, b) {
        this.a = a;
        this.b = b;
        this.a.getType()
    }
    function HC(a, b, c) {
        a.a.B("AD_LOGGING_EVENT", b, c)
    }
    function IC(a) {
        var b = {};
        CB(a.a.getCurrentAd(), b);
        a.j && a.i && (b.ot = a.i - a.j);
        var c;
        c = a.b;
        c = c.a.app.N().$a || c.ka.u ? 2 : a.b.N().ue ? 1 : 0;
        b.ad_ps = c;
        b.at = a.a.getType();
        return b
    }
    ;function JC(a, b, c) {
        rB.call(this, b, a, 1, c);
        this.i = new GC(this,b);
        this.b = new Ao(this)
    }
    v(JC, rB);
    f = JC.prototype;
    f.Zd = null;
    f.Gn = !1;
    f.show = function() {
        G(S(this.a.a), "ad-showing");
        this.Zd = op(this.a.b);
        G(this.Zd, "ad-overlay");
        this.b.listen(this.Zd, "mouseup", this.Ut);
        try {
            Vd(this.Zd);
            this.b.listen(this.g, google.ima.AdEvent.Type.USER_CLOSE, this.Vt);
            this.b.listen(this.g, google.ima.AdEvent.Type.CLICK, this.Tt);
            this.b.listen(this.g, google.ima.AdErrorEvent.Type.AD_ERROR, this.St);
            KC(this, google.ima.ViewMode.NORMAL);
            this.resize();
            this.g.start();
            var a = this.i;
            a.j = u();
            var b = IC(a);
            HC(a, 3, b);
            this.Gn = !0;
            this.a.G("onResize", this.resize, this);
            this.a.G("onStateChange", this.vn, this);
            this.B("adEnd", this)
        } catch (c) {
            this.B("adError", c)
        }
    }
    ;
    f.H = function() {
        this.b.removeAll();
        this.a.ba("onResize", this.resize, this);
        this.a.ba("onStateChange", this.vn, this);
        H(S(this.a.a), "ad-showing");
        this.g && (this.g.destroy(),
        this.g = null);
        this.Zd && H(this.Zd, "ad-overlay");
        this.Zd = null;
        JC.D.H.call(this)
    }
    ;
    f.Vt = function() {
        var a = this.i;
        a.i = u();
        var b = IC(a);
        HC(a, 6, b)
    }
    ;
    f.Tt = function() {
        this.a.pauseVideo();
        var a = this.i;
        a.i = u();
        var b = IC(a);
        if (a.g) {
            var c = nC(a.b)
              , d = a.g.y - c.top
              , d = Math.round(a.g.x - c.left) + "x" + Math.round(d);
            b.ck_xy = d;
            b.ck_wh = c.width + "x" + c.height
        }
        HC(a, 100, b)
    }
    ;
    f.Ut = function(a) {
        this.i.g = a.target == a.currentTarget ? null : new A(a.pageX,a.pageY)
    }
    ;
    f.St = function(a) {
        a = a.getError();
        this.B("adError", a)
    }
    ;
    f.vn = function(a) {
        R(a.a, 16) && KC(this, google.ima.ViewMode.NORMAL)
    }
    ;
    function KC(a, b) {
        a.j != b && (a.j = b,
        a.Gn && a.resize())
    }
    f.resize = function() {
        var a = Vd(this.Zd);
        this.g.resize(a.width, a.height, this.j)
    }
    ;
    function LC(a, b) {
        JC.call(this, 1, a, b)
    }
    v(LC, JC);
    LC.prototype.resize = function() {}
    ;
    LC.prototype.getType = function() {
        return "1_3"
    }
    ;
    function MC(a, b, c, d) {
        T.call(this);
        this.Da = b;
        this.b = a;
        this.start = c;
        this.g = d;
        this.a = null
    }
    v(MC, T);
    f = MC.prototype;
    f.Ik = !0;
    f.rd = !1;
    f.isVisible = !0;
    f.Le = "unloaded";
    f.il = !1;
    function NC(a) {
        return 0 == a.start ? OC(a) && PC(a) ? -2147483648 : 0 : -1 == a.start || -2 == a.start ? 2147483647 : 1E3 * a.start
    }
    function OC(a) {
        return "loaded" == a.Le || "error" == a.Le
    }
    function PC(a) {
        if (!OC(a))
            throw Error("Preroll status is undefined before ad load.");
        return 0 == a.start && a.rd
    }
    function QC(a) {
        a.Le = "loading";
        0 == a.start && !Sa(a.g, RC) && lo(a.b);
        var b = a.g.shift();
        b ? (0 == a.start && SC(a.b, "nl"),
        b = b.create(a.start, a.Da, a.b),
        O(a, b),
        yq(b.load(), a.Fw, a.Ew, a)) : (TC(a.b, 2, UC(a, {})),
        a.Le = "error",
        VC(a))
    }
    f.getId = function() {
        return this.Da
    }
    ;
    function WC(a) {
        a.a.ba("adEnd", a.Wo, a);
        a.a.ba("adError", a.Xo, a);
        a.a.ba("AD_LOGGING_EVENT", a.Yo, a);
        a.a.ba("select", a.Vo, a)
    }
    f.Ew = function(a) {
        a instanceof sq || QC(this)
    }
    ;
    f.Fw = function(a) {
        this.start = a.startTime;
        this.a = a.Qu;
        O(this, this.a);
        0 == this.Da && (a = this.a.getType(),
        this.b.i.at = a);
        this.a instanceof qC || this.a instanceof BC ? this.rd = !0 : this.a instanceof xB ? this.isVisible = !1 : this.a instanceof LC && (this.isVisible = !1);
        this.Le = "loaded";
        VC(this)
    }
    ;
    function VC(a) {
        a.B("adBreakComplete", a)
    }
    f.show = function() {
        this.il ? this.a instanceof JC && KC(this.a, google.ima.ViewMode.NORMAL) : (this.il = !0,
        (this.a instanceof qC || this.a instanceof BC) && SC(this.b, "bs"),
        this.a.G("adEnd", this.Wo, this),
        this.a.G("adError", this.Xo, this),
        this.a.G("AD_LOGGING_EVENT", this.Yo, this),
        this.a.G("select", this.Vo, this),
        this.a.show())
    }
    ;
    f.Wo = function() {
        if (this.rd) {
            WC(this);
            var a = this.b;
            a.ka.re && !a.Bj && (ua(a.N().hb + "mac_204?action_fcts=1"),
            a.Bj = !0)
        }
        VC(this)
    }
    ;
    f.Xo = function(a) {
        if (a) {
            var b = {};
            BB(a, b);
            UC(this, b);
            XC(this.b, 32, b)
        }
        WC(this);
        VC(this)
    }
    ;
    f.Yo = function(a, b) {
        UC(this, b);
        TC(this.b, a, b)
    }
    ;
    f.Vo = function() {
        this.Ik = !1
    }
    ;
    function UC(a, b) {
        b.sst = a.start;
        b.sidx = 0
    }
    ;function YC(a) {
        this.zq = a
    }
    function ZC(a) {
        try {
            var b = dx(a).getElementsByTagName("AdBreak")
              , c = Ra(b, function(a) {
                a = a.getAttribute("time");
                return Ja(a)
            });
            return new YC(c)
        } catch (d) {
            return new YC([0])
        }
    }
    ;function $C(a, b, c, d) {
        this.b = a;
        this.j = b;
        this.a = c;
        this.k = d
    }
    $C.prototype.i = "";
    $C.prototype.g = "";
    function aD(a) {
        var b = {};
        b.l_ns = a.j;
        b.l_state = a.k;
        b.sst = a.b;
        b.sidx = 0;
        a.i && (b.at = a.i);
        a.g && (b.ad_id = a.g);
        return b
    }
    ;function bD(a, b, c, d, e) {
        this.j = a;
        this.g = b;
        this.A = c;
        this.ja = d;
        this.b = e;
        this.a = new $C(b,this.j,d,e);
        this.C = new Ao(this);
        this.i = new Ao(this)
    }
    v(bD, nh);
    f = bD.prototype;
    f.To = null;
    f.zd = null;
    f.load = function() {
        if (this.zd)
            return this.zd;
        this.zd = new rq;
        var a = cD(this.ja), b;
        this.ja.ka.a ? b = !1 : (b = 0 < (this.b & 3) ? 190 : 200,
        b = 200 > a.width || a.height < b);
        if (b) {
            b = this.a;
            var c = aD(b);
            c.ck_wh = a.width + "x" + a.height;
            XC(b.a, 14, c);
            vB();
            this.Ue(Error("The player size is too small."))
        } else
            yq(this.ja.jg, this.Qv, this.Dd, this);
        return this.zd
    }
    ;
    f.Xk = function() {
        var a = new google.ima.AdsRenderingSettings;
        a.baseYouTubeUrl = this.ja.N().hb;
        a.contentId = this.ja.getVideoData().L;
        a.useShareButton = !0;
        a.useStyledNonLinearAds = !0;
        a.useVideoAdUi = this.ja.ka.V;
        a.youTubeAdNamespace = this.j;
        a.showContentThumbnail = this.ja.ka.mb;
        return a
    }
    ;
    function dD(a, b) {
        a.To = b;
        var c = b.getType();
        a.a.i = c
    }
    function eD(a, b) {
        var c = n("yt.www.watch.ads.setAdId");
        c && c(b);
        a.a.g = b
    }
    function fD(a) {
        a = a.g;
        return 0 == a || -1 == a ? a : 1E3 * a
    }
    f.Qv = function(a) {
        var b = this.a;
        TC(b.a, 9, aD(b));
        b = new google.ima.AdsRequest;
        b.adTagUrl = this.k();
        var c = this.ja.N().pb || gD;
        b.linearAdSlotWidth = c.width;
        b.linearAdSlotHeight = c.height;
        b.nonLinearAdSlotWidth = c.width;
        b.nonLinearAdSlotHeight = 100;
        if ("3.1" == rC()) {
            b.isYouTube = !0;
            if (c = hz(this.ja.N()))
                b.lastActivity = c;
            this.ja.ka.ob && (b.tagForChildDirectedContent = !0)
        }
        var c = this.b
          , d = n("yt.www.watch.ads.setGutSlotSizes");
        d && d(0 < (c & 3), 0 < (c & 12));
        this.C.listen(a, google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this.wv);
        this.C.listen(a, google.ima.AdErrorEvent.Type.AD_ERROR, this.vv);
        this.wi(a, b)
    }
    ;
    f.wv = function(a) {
        if (a.getUserRequestContext() === this) {
            try {
                var b;
                if ("3.1" == rC()) {
                    var c = this.Xk();
                    b = a.getAdsManager({}, c)
                } else
                    b = a.getAdsManager({})
            } catch (d) {
                this.Dd(d);
                return
            }
            this.i.listen(b, google.ima.AdEvent.Type.LOADED, t(this.ux, this, b));
            this.i.listen(b, google.ima.AdErrorEvent.Type.AD_ERROR, t(this.tx, this, b));
            x([google.ima.AdEvent.Type.ALL_ADS_COMPLETED, google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED], function(a) {
                this.i.listen(b, a, ca)
            }, this);
            a = yC(this.ja);
            try {
                b.init(a.width, a.height, google.ima.ViewMode.NORMAL)
            } catch (e) {
                b.destroy(),
                this.Dd(e)
            }
        }
    }
    ;
    f.ux = function(a, b) {
        this.i.removeAll();
        var c = b.getAd()
          , d = c.isLinear()
          , e = this.a
          , g = aD(e);
        g.ad_man = d ? "instream" : "overlay";
        TC(e.a, 12, g);
        e = "";
        "3.1" == rC() && (e = b.getAdData().mediaUrl);
        switch (d ? this.Tg(a, c, e) : this.Oe(a, c)) {
        case 0:
            hD(this);
            break;
        case 1:
            a.destroy();
            this.Ue(Error("Unable to create a display state."));
            break;
        case 2:
            c = this.a;
            XC(c.a, 21, aD(c));
            a.destroy();
            this.Ue(Error("Fallback to next ad."));
            break;
        default:
            a.destroy()
        }
    }
    ;
    f.tx = function(a, b) {
        this.i.removeAll();
        a.destroy();
        this.Dd(b.getError())
    }
    ;
    f.vv = function(a) {
        var b = a.getError();
        b.getType() == google.ima.AdError.Type.AD_LOAD && a.getUserRequestContext() === this && this.Dd(b)
    }
    ;
    f.Tg = function(a, b, c) {
        eD(this, b.getAdId());
        a = this.ja.ka.P ? new BC(this.j,this.ja,a) : new qC(this.j,this.ja,a,c);
        dD(this, a);
        return 0
    }
    ;
    f.Oe = function(a, b) {
        eD(this, b.getAdId());
        dD(this, new JC(this.j,this.ja,a));
        return 0
    }
    ;
    f.Dd = function(a) {
        if (a instanceof sq)
            this.zd.cancel();
        else {
            var b = this.a
              , c = aD(b);
            a && BB(a, c);
            XC(b.a, 32, c);
            this.Ue(a)
        }
    }
    ;
    function hD(a) {
        a.zd.Lf({
            Qu: a.To,
            startTime: a.g
        })
    }
    f.Ue = function(a) {
        this.zd.Bd(a)
    }
    ;
    f.H = function() {
        this.C.removeAll();
        this.i.removeAll();
        this.zd && this.zd.cancel();
        bD.D.H.call(this)
    }
    ;
    f.wi = function(a, b) {
        try {
            a.requestAds(b, this)
        } catch (c) {
            this.Dd(c)
        }
    }
    ;
    function iD(a, b) {
        this.a = a;
        this.b = b
    }
    ;function jD(a, b, c, d) {
        bD.call(this, 2, a, b, c, d);
        this.o = new iD(this.ja.ka,this.ja.N());
        sB()
    }
    v(jD, bD);
    jD.prototype.Xk = function() {
        var a = jD.D.Xk.call(this);
        a.a = 0 == this.A;
        a.b = !0;
        return a
    }
    ;
    jD.prototype.k = function() {
        var a = this.o, b = this.b, c = fD(this), d = {}, e;
        if (a.a.xb && (e = 4 == b && a.a.ma ? a.a.ma : a.a.ld)) {
            0 == e.lastIndexOf("http:", 0) && (e = e.substr(5));
            $b(d, wk(e));
            var g = e.indexOf("?");
            -1 != g && (e = e.substring(0, g + 1))
        }
        e || (e = "//googleads.g.doubleclick.net/pagead/ads?",
        d.eid = a.a.la,
        d.scs = a.a.Uf,
        d.client = a.a.Yf,
        d.description_url = a.a.Gb,
        d.loeid = a.a.Vf,
        d.cust_gender = a.a.Kc,
        d.host = a.a.host,
        d.hl = a.b.i,
        d.max_ad_duration = a.a.Gc,
        a.a.Jc && (d.adtest = "on"),
        isNaN(a.a.ha) || (d.cust_age = a.a.ha),
        isNaN(a.a.Ea) || (d.hostTierId = a.a.Ea),
        a.a.bb && (d.yt_pt = a.a.bb),
        a.a.wb && (d.video_cpm = a.a.wb),
        a.a.F && (d.as_dbp = a.a.F),
        d.ytdevice = a.a.Tf,
        d.ad_type = EB(b),
        0 < (b & 3) ? a.a.Ga && (d.channel = a.a.Ga.join("+")) : b & 4 && a.a.Xa && (d.channel = a.a.Xa.join("+")),
        a.a.Sa && (d.lsv = 1),
        a.a.ob && (d.tfcd = 1));
        d.videoad_start_delay = c;
        d.url = "embedded" == a.b.Z && a.b.a ? a.b.a : a.a.Gb;
        var a = d, b = {}, h;
        for (h in a)
            fa.call(void 0, a[h]) && (b[h] = a[h]);
        return e + uk(b, "&")
    }
    ;
    jD.prototype.Oe = function(a, b) {
        if (this.ja.ka.a)
            return 1;
        0 == this.g && (this.g = 10,
        this.a.b = 10,
        TC(this.ja, 1));
        uB(this.b);
        return jD.D.Oe.call(this, a, b)
    }
    ;
    jD.prototype.Ue = function(a) {
        var b = this.ja.ka;
        b.a ? jD.D.Ue.call(this, a) : b.Lc || this.b & 4 ? (dD(this, new xB(this.ja)),
        hD(this)) : jD.D.Ue.call(this, a)
    }
    ;
    function kD(a, b) {
        if (a) {
            this.dq = a;
            this.Rp = b;
            var c, d = this.dq, e = d.indexOf(";sz=");
            c = tk(d.substring(e), ";");
            d = d.substring(0, e).split("pfadx");
            if (c = 2 != d.length ? null : {
                ky: d[0],
                ly: d[1],
                my: c
            })
                this.Qp = c.ky,
                this.Sp = c.ly,
                this.Tp = c.my
        }
    }
    f = kD.prototype;
    f.dq = "";
    f.Qp = "";
    f.Rp = !1;
    f.Vl = "";
    f.Sp = "";
    f.Tp = null;
    function lD(a, b) {
        var c = [];
        b & 1 && c.push("480x360");
        b & 2 && c.push("480x361");
        b & 12 && c.push("480x70");
        var d = [], e, g;
        b & 12 && (d.push("300x250"),
        e = "watch-channel-brand-div",
        g = 1);
        0 < (b & 3) && (d.push("300x60"),
        e = "watch-longform-ad",
        g = 1);
        c = {
            Wp: e,
            eh: c,
            Xp: g,
            Ul: d
        };
        d = Yb(a.Tp);
        c.Xx && (d.pos = c.Xx);
        c.Xp && (d.tile = c.Xp.toString());
        c.Wp && (d.kmyd = c.Wp);
        c.Ul && 0 < c.Ul.length && a.Rp && (d.ciu_szs = c.Ul.join(","));
        d.dcmt = "text/xml";
        Qj() && (d.kmob = "ps3");
        a.Vl || (a.Vl = Math.floor(999999999 * Math.random()).toString());
        d.ord = a.Vl;
        c.eh && c.eh.length && "sz"in d && delete d.sz;
        d = uk(d, ";");
        c.eh && c.eh.length && (d = "sz=" + c.eh.join(",") + ";" + d);
        return [a.Qp, "pfadx", a.Sp, ";", d, "?"].join("")
    }
    ;function mD(a, b, c, d) {
        bD.call(this, 1, a, b, c, d);
        a = this.ja.ka;
        this.F = new kD(a.Ic,a.Ca)
    }
    v(mD, bD);
    mD.prototype.k = function() {
        return lD(this.F, this.b)
    }
    ;
    mD.prototype.Oe = function(a, b) {
        eD(this, b.getAdId());
        var c = b.getTraffickingParameters();
        return DB(c, "rm") ? (1 != this.b && vB(),
        nD(a),
        2) : DB(c, "blockAllAds") ? (nD(a),
        dD(this, new LC(this.ja,a)),
        0) : DB(c, "hideMaster") ? (dD(this, new LC(this.ja,a)),
        0) : this.ja.ka.a ? 1 : "3.1" == rC() ? (dD(this, new JC(this.j,this.ja,a)),
        0) : 1
    }
    ;
    function nD(a) {
        a.sendImpressionUrls && a.sendImpressionUrls()
    }
    ;function oD(a, b, c, d, e) {
        mD.call(this, a, b, c, d | e);
        this.u = d;
        this.o = e;
        sB()
    }
    v(oD, mD);
    var pD = {
        GDFP: 1,
        DART: 1,
        DART_DFP: 1,
        DART_DFA: 1,
        ADSENSE: 2,
        "ADSENSE/ADX": 2
    };
    oD.prototype.k = function() {
        return lD(new kD(this.ja.ka.K,this.ja.ka.Ca), this.u)
    }
    ;
    oD.prototype.wi = function(a, b) {
        if (this.o) {
            b.youTubeAdType = EB(this.o);
            var c = this.ja.ka.la;
            c && (b.youTubeExperimentIds = c);
            b.youTubeVideoAdStartDelay = fD(this)
        }
        oD.D.wi.call(this, a, b)
    }
    ;
    oD.prototype.Tg = function(a, b, c) {
        var d = qD(a);
        return 1 != d && 2 != d ? 1 : oD.D.Tg.call(this, a, b, c)
    }
    ;
    oD.prototype.Oe = function(a, b) {
        switch (qD(a)) {
        case 1:
            return oD.D.Oe.call(this, a, b);
        case 2:
            var c;
            1 != this.u && vB();
            this.ja.ka.a ? c = 1 : (0 == this.g && (this.g = 10,
            this.a.b = 10,
            TC(this.ja, 1)),
            uB(this.b),
            eD(this, b.getAdId()),
            dD(this, new JC(2,this.ja,a)),
            c = 0);
            return c;
        default:
            return 1
        }
    }
    ;
    function qD(a) {
        var b = a.getCurrentAd().getWrapperAdSystems();
        a = Ya(b) ? a.getCurrentAd().getAdSystem() : b[0];
        return (a = pD[a.toUpperCase()]) ? a : 0
    }
    ;function rD(a, b, c) {
        var d = c.ka;
        this.o = d.kd;
        var e = 0
          , d = d.jd.toUpperCase();
        "INVIDEO" == d ? e = 4 : "INSTREAM" == d ? e = 1 : "MPU" == d && (e = 8);
        bD.call(this, 2, a, b, c, e)
    }
    v(rD, bD);
    function sD(a) {
        var b = new rq;
        Hk(a, {
            format: "RAW",
            method: "GET",
            timeout: 5E3,
            Il: function() {
                b.Bd(Error(a + " timed out"))
            },
            onError: function(c) {
                b.Bd(Error("Problem loading " + a + " with status code " + c.status))
            },
            onSuccess: function(a) {
                b.Lf(a)
            }
        });
        return b
    }
    rD.prototype.k = function() {
        return ""
    }
    ;
    rD.prototype.wi = function(a, b) {
        var c = this.b;
        c & 1 || c & 4 || c & 8 ? this.o ? c & 8 ? wB(this.o) : ("goo.gl" == zk(this.o) ? (c = sD("https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyBbSB-E7SYd1iggX6r2b5C7ljvO6fVqaj0&shortUrl=" + this.o),
        xq(c, function(a) {
            a = sb(a.responseText);
            if (!a)
                throw Error("Invalid expanded forced ad URL.");
            if (!a.longUrl)
                throw Error("Missing forced ad URL information.");
            a = new Ge(a.longUrl);
            Ue(a, "video_format", "43");
            return sD(a.toString())
        }, this)) : c = sD(this.o),
        xq(c, function(c) {
            b.adsResponse = c.responseText;
            a.requestAds(b, this)
        }, this),
        yq(c, null, this.Dd, this)) : this.Dd(Error("Invalid empty URL")) : this.Dd(Error("Invalid request type: " + c))
    }
    ;
    function tD(a, b, c) {
        this.a = a;
        this.g = b;
        this.b = Fj || Gj ? "html5_ios" : Hj ? "html5_android" : Qj() ? "html5_ps3" : "leanback" == c ? "html5_tv_leanback" : "html5"
    }
    ;function uD(a, b, c, d) {
        bD.call(this, 4, a, b, c, d);
        this.o = new tD(this.ja.ka,this.ja.getVideoData().Aa,this.ja.N().Z)
    }
    v(uD, bD);
    uD.prototype.k = function() {
        var a;
        a = this.o;
        if (a.a.W && a.a.lb) {
            var b = "10613:10613_youtube_" + a.b
              , c = "youtube_watch_" + a.b
              , d = "10613:10613_youtube_" + a.b.split("_")[0]
              , e = {
                nw: "10613"
            };
            e.asnw = a.a.W;
            e.ssnw = a.a.W;
            e.caid = a.a.lb;
            e.prof = b;
            e.vdur = a.g;
            e.csid = c;
            e.resp = "vast2";
            e.crtp = "vast2s";
            e.flag = "+emcr";
            b = {};
            isNaN(a.a.na) || (b._fw_d_001 = a.a.na);
            a.a.za && (b._fw_d_002 = a.a.za);
            a.a.Va && (b["_fwu:10613:lang"] = a.a.Va);
            a.a.F && (b._fw_dbp = a.a.F);
            b._fw_yt_type = a.a.A ? "short" : "long";
            var c = {
                ptgt: "a",
                slid: "preroll"
            }
              , g = "";
            a.a.g && !a.a.b ? g = ";linear-skippable" : !a.a.g && a.a.b && (g = ";video");
            c.slau = "preroll" + g;
            c.w = "480";
            c.h = "360";
            c.tpos = "0";
            c.tpcl = "preroll";
            c.envp = d;
            c.cd = "1440,900";
            a = "//2975c.v.fwmrm.net/ad/g/1?" + uk(e, "&") + ";" + uk(b, "&") + ";" + uk(c, "&")
        } else
            a = "";
        return a
    }
    ;
    uD.prototype.Tg = function(a, b) {
        return 0 != this.g ? 1 : uD.D.Tg.call(this, a, b, null)
    }
    ;
    uD.prototype.Oe = function() {
        return 1
    }
    ;
    function vD(a, b, c) {
        this.g = a;
        this.a = b;
        this.b = c || 0
    }
    vD.prototype.create = function(a, b, c) {
        switch (this.g) {
        case 1:
            return new jD(a,b,c,this.a);
        case 2:
            return new mD(a,b,c,this.a);
        case 3:
            return new oD(a,b,c,this.a,this.b);
        case 5:
            return new uD(a,b,c,this.a);
        case 4:
            return new rD(a,b,c);
        default:
            return null
        }
    }
    ;
    function RC(a) {
        return 0 < ((a.a | a.b) & 3)
    }
    ;function wD(a) {
        this.a = a
    }
    ;function xD(a, b) {
        this.J = a;
        this.Q = this.J.Tb;
        this.u = "leanback" == this.J.Z;
        this.a = this.Q || this.u;
        var c = "3.1" == zB.getInstance().getVersion();
        this.V = !this.a && c;
        this.P = a.Hb && c && !this.a;
        this.xb = y(a.g, "906369");
        this.apply(b)
    }
    var yD = {
        AD: "m",
        zB: "f"
    };
    xD.prototype.apply = function(a) {
        var b = y(this.J.g, "908301")
          , c = "3.1" == zB.getInstance().getVersion()
          , d = AB(a.instream)
          , e = (!this.a || b) && c && AB(a.trueview)
          , b = AB(a.aftv) && (!this.a || b);
        this.$ = a.ad_slots;
        this.fa = a.ad_breaks;
        this.Hc = a.ad_flags || 0;
        this.ha = parseInt(a.cust_age, 10);
        this.la = a.cafe_experiment_id;
        var g = parseInt(a.cust_gender, 10);
        isNaN(g) || (this.Kc = g);
        this.Ic = a.ad_tag;
        this.Jc = !!a.adtest;
        this.ld = a.afv_ad_tag;
        this.ma = a.afv_invideo_ad_tag;
        this.na = parseInt(a.ad_age, 10);
        this.gd = a.cid;
        this.Gb = a.ad_eurl;
        this.K = a.dynamic_allocation_ad_tag;
        this.va = a.excluded_ads;
        this.jd = a.force_ad_type;
        this.kd = a.force_ad_url;
        this.za = Sb(yD, function(b) {
            return b == a.ad_gender
        });
        this.F = a.dbp;
        this.Ca = !!a.mpu;
        this.host = a.ad_host;
        this.Ea = parseInt(a.ad_host_tier, 10);
        this.hd = 1 == a.ad_logging_flag;
        this.o = AB(a.afv) && !this.a;
        this.i = b && e;
        this.j = b && d && !AB(a.no_afv_instream);
        this.C = AB(a.dclk);
        this.Sa = 1 == a.livestream;
        this.Oa = AB(a.forced_ad) && !this.a && c;
        this.I = 1 == parseInt(a.tpas_ad_type_id, 10);
        this.pe = !!a.fqsf;
        this.b = d;
        this.R = AB(a.invideo) && !this.a;
        this.S = AB(a.mpu) && !this.a;
        this.re = AB(a.shortform);
        this.A = AB(a.sffb);
        this.Uf = "1" == a.as_launched_in_country;
        this.ra = !this.a && !this.I;
        this.g = e;
        c = a.ad_channel_code_instream;
        this.Ga = r(c) ? c.split(",") : [];
        this.Va = a.ad_language_iso639_2;
        this.Vf = a.loeid;
        c = parseInt(a.max_dynamic_allocation_ad_tag_length, 10);
        isNaN(c) && (c = 2E3);
        this.Wf = c;
        c = parseInt(a.afv_instream_max, 10);
        isNaN(c) && (c = 15E3);
        this.Gc = c;
        this.k = parseInt(a.midroll_freqcap, 10);
        isNaN(this.k) && (this.k = -1);
        c = a.ad_channel_code_overlay;
        this.Xa = r(c) ? c.split(",") : [];
        this.bb = a.yt_pt;
        this.Yf = a.ad_video_pub_id;
        "boolean" == typeof a.show_content_thumbnail && (this.mb = a.show_content_thumbnail);
        this.ob = AB(a.tag_for_child_directed);
        this.wb = parseInt(a.afv_video_min_cpm, 10);
        this.Lc = b && this.A && !this.o;
        this.qe = this.o || this.Lc;
        this.Tf = parseInt(a.ad_device, 10);
        this.lb = a.tpas_video_id;
        this.W = a.tpas_partner_id;
        this.Na = zD(this)
    }
    ;
    function zD(a) {
        var b = a.K;
        if (/^[\s\xa0]*$/.test(null == b ? "" : String(b)) || !a.P)
            return !1;
        b = (a.b || a.g) && a.C;
        a.A && a.C && (b = b || a.R || a.S);
        if (!b)
            return !1;
        b = a.i || a.j;
        if (!(b || a.A && a.o))
            return !1;
        var c = a.K.length + 330 + 102
          , d = window.document.referrer
          , c = c + ya("ref" + (d ? "=" + d : "")).length;
        b || (c += 41);
        return c <= a.Wf
    }
    xD.prototype.ra = !0;
    xD.prototype.mb = !0;
    xD.prototype.xb = !1;
    function AD(a, b, c) {
        this.a = a;
        this.k = b;
        this.g = c;
        this.j = this.b = -1;
        this.g && 0 < this.a.ka.k && this.a.G("endseeking", this.i, this)
    }
    v(AD, nh);
    function BD(a, b) {
        CD(a);
        0 < b && (a.j = L(t(a.i, a), 1E3 * b))
    }
    function CD(a) {
        -1 != a.j && (M(a.j),
        a.j = -1)
    }
    AD.prototype.i = function() {
        var a = this.a.ka.k;
        if (this.g && !(0 >= a)) {
            var b = this.a.a.getCurrentTime()
              , c = []
              , d = null
              , e = Number.MAX_VALUE;
            Lb(this.k.j, function(a) {
                if (a.rd && a.isVisible && !(0 >= DD(this, a))) {
                    var g;
                    g = a.getId();
                    g = this.k.i[g];
                    if (DD(this, a) > b) {
                        var m = !ED(this, a);
                        m != g.Sd && (g.Sd = m,
                        c.push(g));
                        m || (g = DD(this, a) - b,
                        g < e && (e = g,
                        d = a))
                    } else
                        g.Sd || (g.Sd = !0,
                        c.push(g))
                }
            }, this);
            0 < c.length && FD(this.a, c);
            if (d) {
                var g = 0;
                0 < this.b && (g = u() / 1E3 - this.b);
                BD(this, a - g - e + 2)
            } else
                CD(this)
        }
    }
    ;
    function ED(a, b) {
        if (!a.g || !b.rd || !(0 < b.start) && -1 != b.start)
            return !1;
        var c = a.a.ka.k;
        if (0 >= c || 0 >= a.b)
            return !1;
        var d = u() / 1E3
          , e = DD(a, b) - a.a.a.getCurrentTime();
        0 < e && (d += e);
        return d - a.b <= c
    }
    function DD(a, b) {
        return -1 == b.start ? a.a.a.getVideoData().Aa : b.start
    }
    AD.prototype.H = function() {
        CD(this)
    }
    ;
    function GD(a, b) {
        this.b = b;
        this.g = [];
        this.j = {};
        this.i = {};
        this.a = a;
        var c = !a.ka.Sa && Sa(this.b, function(a) {
            return 0 < a.start || -1 == a.start
        });
        this.k = new AD(this.a,this,c)
    }
    v(GD, nh);
    f = GD.prototype;
    f.yd = null;
    function HD(a) {
        a.g.length || (nb(a.b, function(a, c) {
            return a.getId() - c.getId()
        }),
        a.g = Qa(a.b, function(a) {
            return "unloaded" == a.Le
        }),
        0 == a.g.length ? lo(a.a) : (null === Ua(a.g, function(a) {
            return 0 == a.start
        }) && lo(a.a),
        ID(a)))
    }
    function ID(a) {
        if (a.g.length) {
            var b = a.g.shift();
            b.G("adBreakComplete", a.Bl, a);
            QC(b)
        }
    }
    f.Bl = function(a) {
        a.ba("adBreakComplete", this.Bl, this);
        L(t(this.Ux, this, a), 0)
    }
    ;
    f.Ux = function(a) {
        var b = Pa(this.b, a)
          , c = this.b[b + 1]
          , b = this.b[b - 1]
          , d = 2147483646;
        -2 == a.start || -1 == a.start ? d = 2147483647 : c && 2147483647 != c.start && (d = NC(c) - 1);
        0 == a.Da && (SC(this.a, "bl"),
        PC(a) || SC(this.a, "fb"));
        if (c = "loaded" != a.Le) {
            if (b && OC(b)) {
                var e = NC(b);
                e > d && (d = e);
                JD(this, b);
                KD(this, b, d)
            }
        } else
            this.j[a.getId()] = a,
            KD(this, a, d);
        lo(this.a);
        c && this.ng(a);
        Ob(this.j) == this.b.length && this.k.i();
        ID(this)
    }
    ;
    function KD(a, b, c) {
        var d = NC(b);
        if (!isNaN(d)) {
            var e = {};
            e.priority = -2 != b.start ? 2 : 3;
            e.id = String(b.getId());
            e.visible = b.isVisible;
            c = new Rh(d,c,e);
            a.i[b.getId()] = c;
            a.a.qf(c)
        }
    }
    function JD(a, b) {
        a.i[b.getId()] && (a.a.fw(a.i[b.getId()]),
        delete a.i[b.getId()])
    }
    f.ng = function(a) {
        a.ba("adBreakComplete", this.Bl, this);
        this.yd && a == this.yd && (this.yd = null);
        JD(this, a);
        ab(this.b, a);
        delete this.j[a.getId()];
        ph(a)
    }
    ;
    f.sv = function(a) {
        if (a.rd) {
            if (-1 != a.start && a.Ik) {
                var b = this.a;
                LD(b);
                b.playVideo()
            } else
                PC(a) && !a.Ik ? (b = this.a,
                LD(b),
                b.playVideo()) : (LD(this.a),
                this.a.rb(!1));
            this.ng(a);
            a = this.k;
            a.g && 0 < a.a.ka.k && (a.b = u() / 1E3,
            a.i())
        } else
            a.isVisible || this.ng(a)
    }
    ;
    f.H = function() {
        ph(this.k);
        x(this.b, this.ng, this);
        GD.D.H.call(this)
    }
    ;
    function MD() {
        return []
    }
    ;function ND(a, b) {
        this.g = a;
        b && (this.b = b)
    }
    function OD(a) {
        var b = {};
        b.allowed = a.g;
        a.b && (b.ex_ads = a.b);
        a.a && (b.at = a.a);
        return b
    }
    ;function PD(a, b) {
        this.g = a;
        this.ca = b;
        this.o = u();
        this.a = a.ka;
        this.b = {};
        var c = [];
        this.a.I && this.a.b && c.push("4_2");
        this.a.C && (this.a.b && c.push("1_2"),
        this.a.g && c.push("1_2_1"),
        this.a.R && c.push("1_1"),
        this.a.S && c.push("1_3"));
        this.a.i && c.push("2_2_1");
        this.a.j && c.push("2_2");
        this.a.o && c.push("2_1");
        this.a.qe && c.push("2_3");
        this.i = c.join(",");
        this.j = new ND(this.i,this.a.va);
        this.b.allowed = this.i;
        (c = this.a.va) && (this.b.ex_ads = c)
    }
    var QD = [9, 10, 11, 12]
      , RD = [21, 30]
      , SD = [1009];
    PD.prototype.k = 0;
    function TD(a, b) {
        if (!a.a.hd)
            return !1;
        var c = a.g.N();
        if (y(c.g, "906335"))
            return !0;
        c = b.ad_event;
        return y(QD, c) || 7 == c && (c = b.ad_error,
        y(RD, c) || 32 == c && y(SD, b.error_code)) ? !1 : !0
    }
    ;function UD(a) {
        My.call(this, a);
        this.j = {};
        this.i = {
            at: "0"
        };
        this.b = new np(this.a);
        this.g = null;
        a = this.getVideoData().b.html5_sdk_version;
        this.k = zB.getInstance().load(a, this.N().i)
    }
    v(UD, My);
    var gD = new B(0,0);
    f = UD.prototype;
    f.pa = "ad";
    f.dd = "ad";
    f.xe = null;
    f.Nd = null;
    f.ka = null;
    f.Bj = !1;
    f.dk = !1;
    f.jg = null;
    f.Pi = null;
    f.eb = function() {
        return !!this.app.I.getVideoData().ja
    }
    ;
    f.create = function() {
        UD.D.create.call(this);
        this.aa = !0;
        SC(this, "i");
        this.ka = new xD(this.N(),this.a.getVideoData().b || {});
        this.xe = new PD(this,this.a);
        tB();
        this.Bj = !1;
        this.jg = xq(zq(this.k), this.yq, this);
        t: {
            var a = new wD(this)
              , b = [];
            try {
                var c = a.a.ka, d;
                if (c.ra) {
                    var e;
                    if (c.fa)
                        e = ZC(c.fa);
                    else {
                        var g;
                        if (c.$) {
                            var h = Ra(c.$.split(","), Ja);
                            g = new YC(h)
                        } else
                            g = new YC([0]);
                        e = g
                    }
                    d = e
                } else
                    d = new YC([0]);
                for (var k = d.zq, c = 0; c < k.length; c++) {
                    var m = a.a;
                    d = c;
                    var p = k[c], s = a.a, w;
                    if (s.ka.A) {
                        e = [];
                        var z = s.ka;
                        if (z.Oa)
                            e.push(new vD(4,0));
                        else {
                            z.I && (z.b || z.g) && e.push(new vD(5,1));
                            g = 0;
                            z.C && (z.b && (g |= 1),
                            z.g && (g |= 2),
                            z.R && (g |= 4),
                            z.S && (g |= 8));
                            h = 0;
                            if (z.j || z.i)
                                z.j && (h |= 1),
                                z.i && (h |= 2);
                            var X = 0;
                            z.o && (X = 4);
                            h || (h = X,
                            X = 0);
                            z.Na && g && (h || X) ? e.push(new vD(3,g,h)) : (g && e.push(new vD(2,g)),
                            h && e.push(new vD(1,h)));
                            X && e.push(new vD(1,X))
                        }
                    } else {
                        e = [];
                        var J = s.ka;
                        if (J.Oa)
                            e.push(new vD(4,0));
                        else {
                            J.I && J.b && e.push(new vD(5,1));
                            g = 0;
                            J.C && (J.b && (g |= 1),
                            J.g && (g |= 2));
                            h = 0;
                            if (J.j || J.i)
                                J.j && (h |= 1),
                                J.i && (h |= 2);
                            J.Na && g && h ? e.push(new vD(3,g,h)) : (g && e.push(new vD(2,g)),
                            h && e.push(new vD(1,h)))
                        }
                    }
                    w = e;
                    var U = new MC(m,d,p,w);
                    b.push(U)
                }
            } catch (Nd) {} finally {
                break t
            }
        }
        a = b;
        SC(this, "bd");
        this.Nd = new GD(this,a);
        HD(this.Nd);
        a = {};
        a.allowed = this.xe.i;
        po(this, {}, a)
    }
    ;
    f.destroy = function() {
        this.dk && LD(this);
        this.aa = !1;
        this.g && FC(this.app, this.g);
        qh(this.Nd, this.g);
        this.g = this.Nd = null;
        this.jg && (this.jg.cancel(),
        this.jg = null);
        this.xe = null;
        pp(this.b);
        UD.D.destroy.call(this)
    }
    ;
    f.getVideoData = function() {
        return this.app.getVideoData(1)
    }
    ;
    f.N = function() {
        return this.app.N()
    }
    ;
    function TC(a, b, c) {
        a = a.xe;
        c = c || {};
        var d = (u() - a.o) / 1E3;
        c.art = d;
        d = a.g.N();
        d.k && (c.feature = d.ma);
        c.ad_flags = a.a.Hc;
        var e = a.a.gd;
        e && (c.cid = e);
        c.mt = a.ca.getCurrentTime();
        (d = hz(d)) && (c.lact = d);
        (d = a.ca.Hh()) && (c.len = d);
        a.a.pe && (c.fqsf = 1);
        (d = zB.getInstance().getVersion()) && (c.sdkv = d);
        c.ad_event = b;
        if (3 == b || 4 == b)
            a.j.a = c.at;
        b = c;
        if (TD(a, b)) {
            var g;
            t: {
                c = a.b;
                d = Xb(b);
                for (g in c) {
                    if (g in d) {
                        g = null;
                        break t
                    }
                    d[g] = c[g]
                }
                g = d
            }
            null === g ? a.g.log(a.b) : b = g;
            a.g.log(b);
            a.b = {}
        }
    }
    function XC(a, b, c) {
        c = c || {};
        c.ad_error = b;
        TC(a, 7, c)
    }
    f.Li = function() {
        return this.xe ? this.xe.j : UD.D.Li.call(this)
    }
    ;
    function rC() {
        return zB.getInstance().getVersion()
    }
    function xC(a, b) {
        var c;
        if (b) {
            c = a.b;
            var d = sp(c);
            c.ca.N().Hb || kd(d) || op(c).appendChild(d);
            c = d
        } else
            c = a.b,
            c = c.ca.N().Hb ? mi(c.ca).b : sp(c);
        return c
    }
    function CC(a) {
        if (!a.g) {
            var b = new Vy(a.N().b);
            b.Z = "adunit";
            b.Sb = !0;
            b.Bh = a.app.ea.a;
            var c = xC(a, !1);
            b.Ja = c;
            a.g = new EA(b,2)
        }
        return a.g
    }
    function yC(a) {
        var b = cD(a, !0);
        a.ka.a || (b.height -= 27);
        return b
    }
    function cD(a, b) {
        return a.ka.u ? a.N().pb || gD : b ? Vd(S(a.a)) : Qd(S(a.a))
    }
    function nC(a) {
        return a.ka.u ? (a = a.N().pb || gD,
        new Hb(0,0,a.width,a.height)) : Sd(S(a.a))
    }
    function LD(a) {
        pp(a.b);
        a.dk = !1;
        uo(a);
        to(a, ["seek"]);
        a.N().Od && to(a, ["audio"])
    }
    function zC(a, b) {
        switch (b) {
        case 1:
            a.B("publish_external_event", "onAdStart");
            break;
        case 2:
            a.B("publish_external_event", "onAdEnd")
        }
    }
    function uC(a, b, c) {
        a.B("publish_external_event", "onAdStateChange", b, xC(a, !1), c)
    }
    f.uc = function(a) {
        UD.D.uc.call(this, a);
        var b = parseInt(a.getId(), 10);
        this.Nd && !isNaN(b) && (a = this.Nd,
        q(b) && (b = a.j[b])) && (a.yd == b && !b.rd && b.isVisible ? b.show() : (a.yd && a.ng(a.yd),
        ED(a.k, b) ? (a.yd = null,
        b = a.i[b.getId()],
        b.Sd || (b.Sd = !0,
        FD(a.a, [b]))) : (a.yd = b,
        b.G("adBreakComplete", a.sv, a),
        b.rd && (a = a.a,
        a.dk = !0,
        a.B("command_redirect_controls", a, ["play_pause"], void 0),
        so(a, ["seek"]),
        a.N().Od && so(a, ["audio"]),
        a.pauseVideo()),
        b.show())))
    }
    ;
    f.Yc = function(a) {
        UD.D.Yc.call(this, a);
        var b = parseInt(a.getId(), 10)
          , c = 1E3 * this.a.getCurrentTime();
        this.Nd && !isNaN(b) && c > a.start && (2147483647 == a.end || 2147483646 == a.end) && (a = this.Nd,
        (b = a.j[b]) && a.yd == b && !b.rd && b.isVisible && b.il && b.a instanceof JC && KC(b.a, google.ima.ViewMode.FULLSCREEN))
    }
    ;
    f.yq = function() {
        SC(this, "sdk");
        if (this.Pi)
            return this.Pi;
        var a;
        if (this.ka.P) {
            a = new Ly(this.app,2);
            var b = google.ima.AdDisplayContainer
              , c = op(this.b)
              , d = rp(this.b);
            a.b || (a.b = Xb(a.g),
            a.b.addEventListener = t(a.lw, a),
            a.b.removeEventListener = t(a.mw, a));
            a = new b(c,void 0,d,a.b)
        } else {
            a = xC(this, !1);
            if (!a)
                return a = Error("AdModule.getVideoElement returned an invalid element."),
                b = new rq,
                b.Bd(a),
                b;
            a = new google.ima.AdDisplayContainer(op(this.b),a,rp(this.b))
        }
        return this.Pi = new google.ima.AdsLoader(a)
    }
    ;
    function SC(a, b) {
        var c = b;
        "nl" == b && (c = a.xe,
        c.k++,
        c = c.k.toString());
        a.j[c] = u();
        "bs" != c && "fb" != c || po(a, a.j, a.i)
    }
    function FD(a, b) {
        a.B("command_update_cuerange_markers", b, a.a.getPlayerType())
    }
    f.je = function(a) {
        this.B(a)
    }
    ;
    function VD(a) {
        return WD(a || arguments.callee.caller, [])
    }
    function WD(a, b) {
        var c = [];
        if (y(b, a))
            c.push("[...circular reference...]");
        else if (a && 50 > b.length) {
            c.push(XD(a) + "(");
            for (var d = a.arguments, e = 0; e < d.length; e++) {
                0 < e && c.push(", ");
                var g;
                g = d[e];
                switch (typeof g) {
                case "object":
                    g = g ? "object" : "null";
                    break;
                case "string":
                    break;
                case "number":
                    g = String(g);
                    break;
                case "boolean":
                    g = g ? "true" : "false";
                    break;
                case "function":
                    g = (g = XD(g)) ? g : "[fn]";
                    break;
                default:
                    g = typeof g
                }
                40 < g.length && (g = g.substr(0, 40) + "...");
                c.push(g)
            }
            b.push(a);
            c.push(")\n");
            try {
                c.push(WD(a.caller, b))
            } catch (h) {
                c.push("[exception trying to get caller]\n")
            }
        } else
            a ? c.push("[...long stack...]") : c.push("[end]");
        return c.join("")
    }
    function XD(a) {
        if (YD[a])
            return YD[a];
        a = String(a);
        if (!YD[a]) {
            var b = /function ([^\(]+)/.exec(a);
            YD[a] = b ? b[1] : "[Anonymous]"
        }
        return YD[a]
    }
    var YD = {};
    function ZD(a, b, c, d, e) {
        this.reset(a, b, c, d, e)
    }
    ZD.prototype.b = null;
    ZD.prototype.a = null;
    var $D = 0;
    ZD.prototype.reset = function(a, b, c, d, e) {
        "number" == typeof e || $D++;
        this.i = d || u();
        this.j = a;
        this.k = b;
        this.g = c;
        delete this.b;
        delete this.a
    }
    ;
    ZD.prototype.getMessage = function() {
        return this.k
    }
    ;
    function aE(a) {
        this.b = a
    }
    aE.prototype.a = null;
    function bE(a, b) {
        this.name = a;
        this.value = b
    }
    bE.prototype.toString = function() {
        return this.name
    }
    ;
    var cE = new bE("SHOUT",1200)
      , dE = new bE("SEVERE",1E3)
      , eE = new bE("WARNING",900)
      , fE = new bE("INFO",800);
    f = aE.prototype;
    f.yw = function() {}
    ;
    f.Aw = function() {
        return !1
    }
    ;
    f.getChildren = function() {
        this.a || (this.a = {});
        return this.a
    }
    ;
    f.log = function() {}
    ;
    f.zw = function(a, b, c) {
        var d = new ZD(a,String(b),this.b);
        if (c) {
            d.b = c;
            var e;
            var g = arguments.callee.caller;
            try {
                var h;
                var k = n("window.location.href");
                if (r(c))
                    h = {
                        message: c,
                        name: "Unknown error",
                        lineNumber: "Not available",
                        fileName: k,
                        stack: "Not available"
                    };
                else {
                    var m, p, s = !1;
                    try {
                        m = c.lineNumber || c.line || "Not available"
                    } catch (w) {
                        m = "Not available",
                        s = !0
                    }
                    try {
                        p = c.fileName || c.filename || c.sourceURL || l.$googDebugFname || k
                    } catch (z) {
                        p = "Not available",
                        s = !0
                    }
                    h = !s && c.lineNumber && c.fileName && c.stack && c.message && c.name ? c : {
                        message: c.message || "Not available",
                        name: c.name || "UnknownError",
                        lineNumber: m,
                        fileName: p,
                        stack: c.stack || "Not available"
                    }
                }
                e = "Message: " + Aa(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + Aa(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + Aa(VD(g) + "-> ")
            } catch (X) {
                e = "Exception trying to expose exception! You win, we lose. " + X
            }
            d.a = e
        }
        return d
    }
    ;
    f.Rd = function() {}
    ;
    f.info = function() {}
    ;
    var gE = {}
      , hE = null;
    function iE() {
        hE || (hE = new aE(""),
        gE[""] = hE)
    }
    function jE(a) {
        iE();
        var b;
        if (!(b = gE[a])) {
            b = new aE(a);
            var c = a.lastIndexOf(".")
              , d = a.substr(c + 1);
            jE(a.substr(0, c)).getChildren()[d] = b;
            gE[a] = b
        }
        return b
    }
    ;jE("ima.common.HostUtils");
    jE("ima.common.ErrorUtils");
    function kE(a) {
        return (a = a.exec(ic())) ? a[1] : ""
    }
    (function() {
        if (Dj)
            return kE(/Firefox\/([0-9.]+)/);
        if (C || mc)
            return Ac;
        if (Ij)
            return kE(/Chrome\/([0-9.]+)/);
        if (Jj)
            return kE(/Version\/([0-9.]+)/);
        if (Fj || Gj) {
            var a;
            if (a = /Version\/(\S+).*Mobile\/(\S+)/.exec(ic()))
                return a[1] + "." + a[2]
        } else {
            if (Hj)
                return (a = kE(/Android\s+([0-9.]+)/)) ? a : kE(/Version\/([0-9.]+)/);
            if (Ej)
                return kE(/Camino\/([0-9.]+)/)
        }
        return ""
    }
    )();
    var lE = [];
    ba("onYouTubeIframeAPIReady", function() {
        x(lE, function(a) {
            a()
        });
        Za(lE)
    }, window);
    function mE() {}
    ;function nE() {}
    nE.prototype.a = null;
    function oE(a) {
        var b;
        (b = a.a) || (b = {},
        pE(a) && (b[0] = !0,
        b[1] = !0),
        b = a.a = b);
        return b
    }
    ;var qE;
    function rE() {}
    v(rE, nE);
    function sE(a) {
        return (a = pE(a)) ? new ActiveXObject(a) : new XMLHttpRequest
    }
    function pE(a) {
        if (!a.b && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d),
                    a.b = d
                } catch (e) {}
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a.b
    }
    qE = new rE;
    function tE(a) {
        hj.call(this);
        this.headers = new ke;
        this.I = a || null;
        this.b = !1;
        this.F = this.a = null;
        this.P = this.u = "";
        this.i = 0;
        this.j = "";
        this.g = this.K = this.C = this.J = !1;
        this.k = 0;
        this.o = null;
        this.Q = "";
        this.A = this.R = !1
    }
    v(tE, hj);
    var uE = /^https?$/i
      , vE = ["POST", "PUT"];
    f = tE.prototype;
    f.send = function(a, b, c, d) {
        if (this.a)
            throw Error("[goog.net.XhrIo] Object is active with another request=" + this.u + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.u = a;
        this.j = "";
        this.i = 0;
        this.P = b;
        this.J = !1;
        this.b = !0;
        this.a = this.I ? sE(this.I) : sE(qE);
        this.F = this.I ? oE(this.I) : oE(qE);
        this.a.onreadystatechange = t(this.hn, this);
        try {
            mE(wE(this, "Opening Xhr")),
            this.K = !0,
            this.a.open(b, String(a), !0),
            this.K = !1
        } catch (e) {
            mE(wE(this, "Error opening Xhr: " + e.message));
            xE(this, e);
            return
        }
        a = c || "";
        var g = this.headers.clone();
        d && pe(d, function(a, b) {
            g.set(b, a)
        });
        d = Ua(g.mc(), yE);
        c = l.FormData && a instanceof l.FormData;
        !y(vE, b) || d || c || g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        pe(g, function(a, b) {
            this.a.setRequestHeader(b, a)
        }, this);
        this.Q && (this.a.responseType = this.Q);
        "withCredentials"in this.a && (this.a.withCredentials = this.R);
        try {
            zE(this),
            0 < this.k && (this.A = AE(this.a),
            mE(wE(this, "Will abort after " + this.k + "ms if incomplete, xhr2 " + this.A)),
            this.A ? (this.a.timeout = this.k,
            this.a.ontimeout = t(this.nc, this)) : this.o = mj(this.nc, this.k, this)),
            mE(wE(this, "Sending request")),
            this.C = !0,
            this.a.send(a),
            this.C = !1
        } catch (h) {
            mE(wE(this, "Send error: " + h.message)),
            xE(this, h)
        }
    }
    ;
    function AE(a) {
        return C && Cc(9) && ia(a.timeout) && q(a.ontimeout)
    }
    function yE(a) {
        return "content-type" == a.toLowerCase()
    }
    f.nc = function() {
        "undefined" != typeof aa && this.a && (this.j = "Timed out after " + this.k + "ms, aborting",
        this.i = 8,
        wE(this, this.j),
        ij(this, "timeout"),
        BE(this, 8))
    }
    ;
    function xE(a, b) {
        a.b = !1;
        a.a && (a.g = !0,
        a.a.abort(),
        a.g = !1);
        a.j = b;
        a.i = 5;
        CE(a);
        DE(a)
    }
    function CE(a) {
        a.J || (a.J = !0,
        ij(a, "complete"),
        ij(a, "error"))
    }
    function BE(a, b) {
        a.a && a.b && (wE(a, "Aborting"),
        a.b = !1,
        a.g = !0,
        a.a.abort(),
        a.g = !1,
        a.i = b || 7,
        ij(a, "complete"),
        ij(a, "abort"),
        DE(a))
    }
    f.H = function() {
        this.a && (this.b && (this.b = !1,
        this.g = !0,
        this.a.abort(),
        this.g = !1),
        DE(this, !0));
        tE.D.H.call(this)
    }
    ;
    f.hn = function() {
        this.ia() || (this.K || this.C || this.g ? EE(this) : this.Xw())
    }
    ;
    f.Xw = function() {
        EE(this)
    }
    ;
    function EE(a) {
        if (a.b && "undefined" != typeof aa)
            if (a.F[1] && 4 == FE(a) && 2 == GE(a))
                wE(a, "Local request error detected and ignored");
            else if (a.C && 4 == FE(a))
                mj(a.hn, 0, a);
            else if (ij(a, "readystatechange"),
            4 == FE(a)) {
                wE(a, "Request complete");
                a.b = !1;
                try {
                    var b = GE(a), c, d;
                    t: switch (b) {
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                        d = !0;
                        break t;
                    default:
                        d = !1
                    }
                    if (!(c = d)) {
                        var e;
                        if (e = 0 === b) {
                            var g = se(String(a.u))[1] || null;
                            if (!g && self.location)
                                var h = self.location.protocol
                                  , g = h.substr(0, h.length - 1);
                            e = !uE.test(g ? g.toLowerCase() : "")
                        }
                        c = e
                    }
                    if (c)
                        ij(a, "complete"),
                        ij(a, "success");
                    else {
                        a.i = 6;
                        var k;
                        try {
                            k = 2 < FE(a) ? a.a.statusText : ""
                        } catch (m) {
                            k = ""
                        }
                        a.j = k + " [" + GE(a) + "]";
                        CE(a)
                    }
                } finally {
                    DE(a)
                }
            }
    }
    function DE(a, b) {
        if (a.a) {
            zE(a);
            var c = a.a
              , d = a.F[0] ? ca : null;
            a.a = null;
            a.F = null;
            b || ij(a, "ready");
            try {
                c.onreadystatechange = d
            } catch (e) {}
        }
    }
    function zE(a) {
        a.a && a.A && (a.a.ontimeout = null);
        ia(a.o) && (l.clearTimeout(a.o),
        a.o = null)
    }
    function FE(a) {
        return a.a ? a.a.readyState : 0
    }
    function GE(a) {
        try {
            return 2 < FE(a) ? a.a.status : -1
        } catch (b) {
            return -1
        }
    }
    function HE(a) {
        try {
            return a.a ? a.a.responseText : ""
        } catch (b) {
            return ""
        }
    }
    function wE(a, b) {
        return b + " [" + a.P + " " + a.u + " " + GE(a) + "]"
    }
    ;function IE() {
        this.a = u()
    }
    var JE = new IE;
    IE.prototype.set = function(a) {
        this.a = a
    }
    ;
    IE.prototype.reset = function() {
        this.set(u())
    }
    ;
    IE.prototype.get = function() {
        return this.a
    }
    ;
    function KE(a) {
        this.g = a || "";
        this.i = JE
    }
    KE.prototype.b = !0;
    KE.prototype.a = !1;
    function LE(a) {
        return 10 > a ? "0" + a : String(a)
    }
    function ME(a, b) {
        var c = (a.i - b) / 1E3
          , d = c.toFixed(3)
          , e = 0;
        if (1 > c)
            e = 2;
        else
            for (; 100 > c; )
                e++,
                c *= 10;
        for (; 0 < e--; )
            d = " " + d;
        return d
    }
    function NE(a) {
        KE.call(this, a)
    }
    v(NE, KE);
    function OE(a, b) {
        var c = [];
        c.push(a.g, " ");
        if (a.b) {
            var d = new Date(b.i);
            c.push("[", LE(d.getFullYear() - 2E3) + LE(d.getMonth() + 1) + LE(d.getDate()) + " " + LE(d.getHours()) + ":" + LE(d.getMinutes()) + ":" + LE(d.getSeconds()) + "." + LE(Math.floor(d.getMilliseconds() / 10)), "] ")
        }
        c.push("[", ME(b, a.i.get()), "s] ");
        c.push("[", b.g, "] ");
        c.push(b.getMessage());
        a.a && b.b && c.push("\n", b.a);
        c.push("\n");
        return c.join("")
    }
    ;function PE() {
        t(this.i, this);
        this.a = new NE;
        this.a.b = !1;
        this.b = this.a.a = !1;
        this.g = "";
        this.j = {}
    }
    function QE() {
        var a = RE;
        !0 != a.b && (iE(),
        a.b = !0)
    }
    PE.prototype.i = function(a) {
        if (!this.j[a.g]) {
            var b = OE(this.a, a)
              , c = SE;
            if (c)
                switch (a.j) {
                case cE:
                    TE(c, "info", b);
                    break;
                case dE:
                    TE(c, "error", b);
                    break;
                case eE:
                    TE(c, "warn", b);
                    break;
                default:
                    TE(c, "debug", b)
                }
            else
                window.opera ? window.opera.postError(b) : this.g += b
        }
    }
    ;
    var RE = null
      , SE = window.console;
    function TE(a, b, c) {
        if (a[b])
            a[b](c);
        else
            a.log(c)
    }
    ;var UE = !1;
    function VE(a) {
        if (a = a.match(/[\d]+/g))
            a.length = 3,
            a.join(".")
    }
    if (navigator.plugins && navigator.plugins.length) {
        var WE = navigator.plugins["Shockwave Flash"];
        WE && (UE = !0,
        WE.description && VE(WE.description));
        navigator.plugins["Shockwave Flash 2.0"] && (UE = !0)
    } else if (navigator.mimeTypes && navigator.mimeTypes.length) {
        var XE = navigator.mimeTypes["application/x-shockwave-flash"];
        (UE = XE && XE.enabledPlugin) && VE(XE.enabledPlugin.description)
    } else
        try {
            var YE = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")
              , UE = !0;
            VE(YE.GetVariable("$version"))
        } catch (ZE) {
            try {
                YE = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),
                UE = !0
            } catch ($E) {
                try {
                    YE = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),
                    UE = !0,
                    VE(YE.GetVariable("$version"))
                } catch (aF) {}
            }
        }
    ;C && Cc(8);
    function bF() {
        throw Error("Do not instantiate directly");
    }
    bF.prototype.a = null;
    bF.prototype.toString = function() {
        return this.content
    }
    ;
    function cF() {
        bF.call(this)
    }
    v(cF, bF);
    (function(a) {
        function b() {}
        b.prototype = a.prototype;
        return function(a, d) {
            if (!String(a))
                return "";
            var e = new b;
            e.content = String(a);
            void 0 !== d && (e.a = d);
            return e
        }
    }
    )(cF);
    new ke;
    jE("ima.request.RequestBuilderFactory");
    var dF = null
      , eF = null
      , fF = Array(50)
      , gF = -1
      , hF = !1;
    function iF(a) {
        var b = (gF + 1) % 50;
        gF = b;
        fF[b] = a;
        hF || (hF = 49 == b)
    }
    function jF(a) {
        var b = fF;
        if (b[0]) {
            var c = gF
              , d = hF ? c : -1;
            do {
                var d = (d + 1) % 50
                  , e = b[d];
                x(a, function(a) {
                    a(e)
                })
            } while (d != c);
            fF = Array(50);
            gF = -1;
            hF = !1
        }
    }
    function kF() {
        var a = lF
          , b = n("yt.mdx.remote.debug.logger_")
          , c = n("yt.mdx.remote.debug.handlers_");
        b && c || (RE || (RE = new PE),
        -1 != window.location.href.indexOf("Debug=true") && QE(),
        QE(),
        RE.a.a = !0,
        (b = n("yt.mdx.remote.debug.logger_")) || (b = jE("yt.mdx.remote")),
        dF = b,
        aE.prototype.log = aE.prototype.log,
        aE.prototype.getLogRecord = aE.prototype.zw,
        aE.prototype.addHandler = aE.prototype.yw,
        aE.prototype.removeHandler = aE.prototype.Aw,
        ba("yt.mdx.remote.debug.logger_", dF, void 0),
        eF = n("yt.mdx.remote.debug.handlers_") || [],
        ba("yt.mdx.remote.debug.handlers_", eF, void 0),
        n("yt.mdx.remote.debug.logger_"),
        c = n("yt.mdx.remote.debug.handlers_"));
        c && (c.push(a),
        jF(c))
    }
    function mF(a, b) {
        var c = n("yt.mdx.remote.debug.logger_")
          , d = n("yt.mdx.remote.debug.handlers_");
        if (c) {
            if (c.log(fE, a + ": " + b, void 0),
            d && !Ya(d)) {
                jF(d);
                var e = c.getLogRecord(fE, a + ": " + b, void 0);
                x(d, function(a) {
                    a(e)
                })
            }
        } else
            d && !Ya(d) || iF(new ZD(fE,String(b),"yt.mdx.remote"))
    }
    ;function nF() {
        if (!("cast"in window))
            return !1;
        var a = window.cast || {};
        return "ActivityStatus"in a && "Api"in a && "LaunchRequest"in a && "Receiver"in a
    }
    function oF(a) {
        mF("CAST", a)
    }
    function lF(a) {
        var b = pF();
        b && b.logMessage && (a = OE(qF, a),
        b.logMessage(a))
    }
    function rF() {
        if (!sF && (Ya(tF) && fb(tF, jh()),
        nF())) {
            var a = pF();
            a ? (a.removeReceiverListener("YouTube", uF),
            a.addReceiverListener("YouTube", uF),
            oF("API initialized in the other binary")) : (a = new cast.Api,
            ba("yt.mdx.remote.castapi.api_", a, void 0),
            a.addReceiverListener("YouTube", uF),
            a.setReloadTabRequestHandler && a.setReloadTabRequestHandler(function() {
                L(function() {
                    window.location.reload(!0)
                }, 1E3)
            }),
            qF = new NE,
            qF.b = !1,
            qF.a = !1,
            kF(),
            oF("API initialized"));
            sF = !0
        }
    }
    function vF(a) {
        var b = Va(tF, function(b) {
            return b.id == a.id
        });
        0 <= b && (tF[b] = jg(a))
    }
    function uF(a) {
        oF("Updating receivers: " + ub(a));
        wF(a);
        Uv("yt-remote-cast-device-list-update", xF());
        x(xF(), function(a) {
            yF(a.id)
        });
        x(a, function(a) {
            a.isTabProjected && (a = zF(a.id),
            oF("Detected device: " + a.id + " is tab projected. Firing DEVICE_TAB_PROJECTED event."),
            Uv("yt-remote-cast-device-tab-projected", a.id))
        })
    }
    function AF(a, b) {
        oF("Updating " + a + " activity status: " + ub(b));
        var c = zF(a);
        c ? (b.activityId && (c.activityId = b.activityId),
        c.status = "running" == b.status ? "RUNNING" : "stopped" == b.status ? "STOPPED" : "error" == b.status ? "ERROR" : "UNKNOWN",
        "RUNNING" != c.status && (c.activityId = ""),
        vF(c),
        Uv("yt-remote-cast-device-status-update", c)) : oF("Device not found")
    }
    function xF() {
        rF();
        return pg(tF)
    }
    function wF(a) {
        a = Ra(a, function(a) {
            var c = {
                id: a.id,
                name: a.name
            };
            if (a = zF(a.id))
                c.activityId = a.activityId,
                c.status = a.status;
            return c
        });
        Za(tF);
        fb(tF, a)
    }
    function zF(a) {
        var b = xF();
        return Ua(b, function(b) {
            return b.id == a
        }) || null
    }
    function yF(a) {
        var b = zF(a)
          , c = pF();
        c && b && b.activityId && c.getActivityStatus(b.activityId, function(b) {
            "error" == b.status && (b.status = "stopped");
            AF(a, b)
        })
    }
    function BF(a) {
        rF();
        var b = zF(a)
          , c = pF();
        c && b && b.activityId ? (oF("Stopping cast activity"),
        c.stopActivity(b.activityId, qa(AF, a))) : oF("Dropping cast activity stop")
    }
    function pF() {
        return n("yt.mdx.remote.castapi.api_")
    }
    var qF = null
      , sF = !1
      , tF = n("yt.mdx.remote.castapi.devices_") || [];
    ba("yt.mdx.remote.castapi.devices_", tF, void 0);
    function CF(a, b) {
        this.action = a;
        this.params = b || null
    }
    ;function DF() {
        T.call(this);
        this.Ec = tg(gh());
        this.log_("Initializing local screens: " + hg(this.Ec));
        this.g = EF();
        this.log_("Initializing account screens: " + hg(this.g));
        this.al = null;
        this.a = [];
        this.b = [];
        this.xi(xF());
        this.log_("Initializing DIAL devices: " + kg(this.b));
        var a = tg(hh());
        FF(this, a);
        this.log_("Initializing online screens: " + hg(this.a));
        Rv("yt-remote-cast-device-list-update", this.xi, this);
        Rv("yt-remote-cast-device-status-update", this.mv, this);
        this.Eo();
        Df(t(this.Eo, this), 1E4)
    }
    v(DF, T);
    da(DF);
    var GF = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
    f = DF.prototype;
    f.Zg = NaN;
    f.Ti = "";
    f.log_ = function(a) {
        mF("RM", a)
    }
    ;
    function HF(a) {
        var b = navigator.userAgent;
        if (0 <= b.search("MSIE") && (b = b.match(/MSIE ([\d.]+)/)[1],
        0 > Ha(b, "10.0")))
            return a;
        b = se(document.location.href);
        return qe("https", null, b[3], null, a)
    }
    function EF() {
        var a = tg(gh())
          , b = tg(hh());
        return Qa(b, function(b) {
            return !wg(a, b)
        })
    }
    f.B = function(a, b) {
        if (this.ia())
            return !1;
        this.log_("Firing " + a);
        return this.C.B.apply(this.C, arguments)
    }
    ;
    f.Eo = function() {
        var a = xF();
        Ya(a) || this.xi(a);
        a = IF(this);
        Ya(a) || (Sa(a, function(a) {
            return !wg(this.g, a)
        }, this) && !Qg("yt-remote-lounge-token-expiration") ? JF(this) : KF(this, a))
    }
    ;
    f.rl = function() {
        FF(this, this.a, !0);
        this.xi(xF());
        this.B("managedScreenChange", IF(this))
    }
    ;
    function LF(a, b) {
        var c = IF(a);
        return Qa(b, function(a) {
            return a.Db ? (a = rg(this.b, a.Db),
            !!a && "RUNNING" == a.status) : !!wg(c, a)
        }, a)
    }
    f.xi = function(a) {
        var b = !1;
        x(a, function(a) {
            var c = xg(this.Ec, a.id);
            c && c.name != a.name && (this.log_("Renaming screen id " + c.id + " from " + c.name + " to " + a.name),
            c.name = a.name,
            b = !0)
        }, this);
        b && (this.log_("Renaming due to DIAL."),
        MF(this));
        ih(og(a));
        var c = !pb(this.b, a, qg);
        c && this.log_("Updating DIAL devices: " + kg(this.b) + " to " + kg(a));
        this.b = a;
        FF(this, this.a);
        c && this.B("onlineReceiverChange")
    }
    ;
    f.mv = function(a) {
        var b = rg(this.b, a.id);
        b && (this.log_("Updating DIAL device: " + b.id + "(" + b.name + ") from status: " + b.status + " to status: " + a.status + " and from activityId: " + b.activityId + " to activityId: " + a.activityId),
        b.activityId = a.activityId,
        b.status = a.status,
        ih(og(this.b)));
        FF(this, this.a)
    }
    ;
    function FF(a, b, c) {
        var d = LF(a, b)
          , e = !pb(a.a, d, vg);
        !e && !c || Ya(b) || (b = sg(d),
        Ng("yt-remote-online-screens", b, 60));
        e && (a.log_("Updating online screens: " + hg(a.a) + " -> " + hg(d)),
        a.a = d,
        a.B("onlineReceiverChange"))
    }
    function KF(a, b) {
        var c = []
          , d = {};
        x(b, function(a) {
            a.ic && (d[a.ic] = a,
            c.push(a.ic))
        });
        var e = {
            method: "POST",
            Ze: {
                lounge_token: c.join(",")
            },
            O: a,
            onSuccess: function(a, b) {
                var c = [];
                x(b.screens || [], function(a) {
                    "online" == a.status && c.push(d[a.loungeToken])
                });
                var e = this.al ? NF(this, this.al) : null;
                e && !wg(c, e) && c.push(e);
                FF(this, c, !0)
            }
        };
        Hk(HF("/api/lounge/pairing/get_screen_availability"), e)
    }
    function JF(a) {
        var b = IF(a)
          , c = Ra(b, function(a) {
            return a.tb
        });
        Ya(c) || (a.log_("Updating lounge tokens for: " + ub(c)),
        Hk(HF("/api/lounge/pairing/get_lounge_token_batch"), {
            Ze: {
                screen_ids: c.join(",")
            },
            method: "POST",
            O: a,
            onSuccess: function(a, c) {
                OF(this, c.screens || []);
                this.Ec = Qa(this.Ec, function(a) {
                    return !!a.ic
                });
                MF(this);
                KF(this, b)
            }
        }))
    }
    function OF(a, b) {
        x(db(a.Ec, a.g), function(a) {
            var d = Ua(b, function(b) {
                return a.tb == b.screenId
            });
            d && (a.ic = d.loungeToken)
        })
    }
    function MF(a) {
        var b = tg(gh());
        pb(a.Ec, b, vg) || (a.log_("Saving local screens: " + hg(b) + " to " + hg(a.Ec)),
        fh(sg(a.Ec)),
        a.rl())
    }
    function PF(a, b, c) {
        var d = Va(b, function(a) {
            return ug(c, a)
        })
          , e = 0 > d ? !0 : !1;
        0 > d ? b.push(c) : b[d] = c;
        wg(a.a, c) || a.a.push(c);
        return e
    }
    function QF(a, b) {
        if (a.al = b) {
            var c = NF(a, b);
            if (c && !wg(a.a, c)) {
                var d = eb(a.a);
                d.push(c);
                FF(a, d, !0)
            }
        }
    }
    f.Ap = function(a, b, c) {
        var d = !1;
        b >= GF.length && (this.log_("Pairing DIAL device " + a + " with " + c + " timed out."),
        d = !0);
        var e = rg(this.b, a);
        if (!e)
            this.log_("Pairing DIAL device " + a + " with " + c + " failed: no device for " + a),
            d = !0;
        else if ("ERROR" == e.status || "STOPPED" == e.status)
            this.log_("Pairing DIAL device " + a + " with " + c + " failed: launch error on " + a),
            d = !0;
        d ? (RF(this),
        this.B("screenPair", null)) : Hk(HF("/api/lounge/pairing/get_screen"), {
            method: "POST",
            Ze: {
                pairing_code: c
            },
            O: this,
            onSuccess: function(a, b) {
                if (c == this.Ti) {
                    RF(this);
                    var d = new fg(b.screen);
                    d.name = e.name;
                    d.Db = e.id;
                    var m = PF(this, this.Ec, d);
                    this.log_("Paired with " + (m ? "a new" : "an old") + " local screen:" + gg(d));
                    MF(this);
                    this.B("screenPair", d);
                    this.log_("Pairing " + c + " succeeded.");
                    this.B("screenPair", d)
                }
            },
            onError: function() {
                c == this.Ti && (this.log_("Polling pairing code: " + c),
                M(this.Zg),
                this.Zg = L(t(this.Ap, this, a, b + 1, c), GF[b]))
            }
        })
    }
    ;
    function SF(a, b, c, d, e) {
        RF(a);
        if (rg(a.b, b)) {
            if (!c) {
                var g = c = lg();
                rF();
                var h = zF(b)
                  , k = pF();
                if (k && h) {
                    var m = new cast.Receiver(h.id,h.name)
                      , m = new cast.LaunchRequest("YouTube",m);
                    m.parameters = "pairingCode=" + g;
                    m.description = new cast.LaunchDescription;
                    m.description.text = document.title;
                    d && (m.parameters += "&v=" + d,
                    e && (m.parameters += "&t=" + Math.round(e)),
                    m.description.url = "http://i.ytimg.com/vi/" + d + "/default.jpg");
                    "UNKNOWN" != h.status && (h.status = "UNKNOWN",
                    vF(h),
                    Uv("yt-remote-cast-device-status-update", h));
                    oF("Sending a cast launch request with params: " + m.parameters);
                    k.launch(m, qa(AF, b))
                } else
                    oF("No cast API or no cast device. Dropping cast launch.")
            }
            a.Ti = c;
            a.Zg = L(t(a.Ap, a, b, 0, c), GF[0])
        } else
            a.log_("No DIAL device with id: " + b)
    }
    function RF(a) {
        M(a.Zg);
        a.Zg = NaN;
        a.Ti = ""
    }
    function NF(a, b) {
        var c = xg(IF(a), b);
        a.log_("Found screen: " + gg(c) + " with key: " + b);
        return c
    }
    function TF(a, b) {
        var c = xg(a.a, b);
        a.log_("Found online screen: " + gg(c) + " with key: " + b);
        return c
    }
    function UF(a, b) {
        var c = rg(a.b, b);
        if (!c) {
            var d = xg(a.Ec, b);
            d && (c = rg(a.b, d.Db))
        }
        a.log_("Found DIAL: " + (c ? c.toString() : "null") + " with key: " + b);
        return c
    }
    function IF(a) {
        return db(a.g, Qa(a.Ec, function(a) {
            return !wg(this.g, a)
        }, a))
    }
    ;function VF(a, b) {
        this.b = new wb(a);
        this.a = b ? tb : sb
    }
    VF.prototype.stringify = function(a) {
        return vb(this.b, a)
    }
    ;
    VF.prototype.parse = function(a) {
        return this.a(a)
    }
    ;
    function WF(a, b, c, d, e) {
        this.g = a;
        this.a = b;
        this.j = c;
        this.i = d;
        this.k = e || 1;
        this.nc = 45E3;
        this.b = new $r(this);
        this.o = new kj;
        lj(this.o, 250)
    }
    f = WF.prototype;
    f.Ce = null;
    f.Ac = !1;
    f.Jf = null;
    f.yl = null;
    f.vg = null;
    f.Cf = null;
    f.Ud = null;
    f.Kb = null;
    f.Xd = null;
    f.Ua = null;
    f.Eg = 0;
    f.Cc = null;
    f.Af = null;
    f.$d = null;
    f.og = -1;
    f.Nn = !0;
    f.Ke = !1;
    f.hk = 0;
    f.ci = null;
    function XF(a, b) {
        switch (a) {
        case 0:
            return "Non-200 return code (" + b + ")";
        case 1:
            return "XMLHTTP failure (no data)";
        case 2:
            return "HttpConnection timeout";
        default:
            return "Unknown error"
        }
    }
    var YF = {}
      , ZF = {};
    f = WF.prototype;
    f.setTimeout = function(a) {
        this.nc = a
    }
    ;
    function $F(a, b, c) {
        a.Cf = 1;
        a.Ud = Xe(b.clone());
        a.Xd = c;
        a.C = !0;
        aG(a, null)
    }
    function bG(a, b, c, d, e) {
        a.Cf = 1;
        a.Ud = Xe(b.clone());
        a.Xd = null;
        a.C = c;
        e && (a.Nn = !1);
        aG(a, d)
    }
    function aG(a, b) {
        a.vg = u();
        cG(a);
        a.Kb = a.Ud.clone();
        Ve(a.Kb, "t", a.k);
        a.Eg = 0;
        a.Ua = a.g.Fk(a.g.ji() ? b : null);
        0 < a.hk && (a.ci = new GB(t(a.Vn, a, a.Ua),a.hk));
        a.b.listen(a.Ua, "readystatechange", a.ju);
        var c = a.Ce ? Xb(a.Ce) : {};
        a.Xd ? (a.Af = "POST",
        c["Content-Type"] = "application/x-www-form-urlencoded",
        a.Ua.send(a.Kb, a.Af, a.Xd, c)) : (a.Af = "GET",
        a.Nn && !oc && (c.Connection = "close"),
        a.Ua.send(a.Kb, a.Af, null, c));
        a.g.zc(1);
        var d = a.Xd;
        if (d)
            for (var c = "", d = d.split("&"), e = 0; e < d.length; e++) {
                var g = d[e].split("=");
                if (1 < g.length)
                    var h = g[0]
                      , g = g[1]
                      , k = h.split("_")
                      , c = 2 <= k.length && "type" == k[1] ? c + (h + "=" + g + "&") : c + (h + "=redacted&")
            }
        else
            c = null;
        a.a.info("XMLHTTP REQ (" + a.i + ") [attempt " + a.k + "]: " + a.Af + "\n" + a.Kb + "\n" + c)
    }
    f.ju = function(a) {
        a = a.target;
        var b = this.ci;
        b && 3 == FE(a) ? (this.a.debug("Throttling readystatechange."),
        HB(b)) : this.Vn(a)
    }
    ;
    f.Vn = function(a) {
        try {
            if (a == this.Ua)
                t: {
                    var b = FE(this.Ua)
                      , c = this.Ua.i
                      , d = GE(this.Ua);
                    if (C && !Dc(10) || oc && !Cc("420+")) {
                        if (4 > b)
                            break t
                    } else if (3 > b || 3 == b && !mc && !HE(this.Ua))
                        break t;
                    this.Ke || 4 != b || 7 == c || (8 == c || 0 >= d ? this.g.zc(3) : this.g.zc(2));
                    dG(this);
                    var e = GE(this.Ua);
                    this.og = e;
                    var g = HE(this.Ua);
                    g || this.a.debug("No response text for uri " + this.Kb + " status " + e);
                    this.Ac = 200 == e;
                    this.a.info("XMLHTTP RESP (" + this.i + ") [ attempt " + this.k + "]: " + this.Af + "\n" + this.Kb + "\n" + b + " " + e);
                    this.Ac ? (4 == b && eG(this),
                    this.C ? (fG(this, b, g),
                    mc && this.Ac && 3 == b && (this.b.listen(this.o, "tick", this.Rt),
                    this.o.start())) : (gG(this.a, this.i, g, null),
                    hG(this, g)),
                    this.Ac && !this.Ke && (4 == b ? this.g.Zh(this) : (this.Ac = !1,
                    cG(this)))) : (400 == e && 0 < g.indexOf("Unknown SID") ? (this.$d = 3,
                    iG(),
                    this.a.Rd("XMLHTTP Unknown SID (" + this.i + ")")) : (this.$d = 0,
                    iG(),
                    this.a.Rd("XMLHTTP Bad status " + e + " (" + this.i + ")")),
                    eG(this),
                    jG(this))
                }
            else
                this.a.Rd("Called back with an unexpected xmlhttp")
        } catch (h) {
            this.a.debug("Failed call to OnXmlHttpReadyStateChanged_"),
            this.Ua && HE(this.Ua) && HE(this.Ua)
        } finally {}
    }
    ;
    function fG(a, b, c) {
        for (var d = !0; !a.Ke && a.Eg < c.length; ) {
            var e = kG(a, c);
            if (e == ZF) {
                4 == b && (a.$d = 4,
                iG(),
                d = !1);
                gG(a.a, a.i, null, "[Incomplete Response]");
                break
            } else if (e == YF) {
                a.$d = 4;
                iG();
                gG(a.a, a.i, c, "[Invalid Chunk]");
                d = !1;
                break
            } else
                gG(a.a, a.i, e, null),
                hG(a, e)
        }
        4 == b && 0 == c.length && (a.$d = 1,
        iG(),
        d = !1);
        a.Ac = a.Ac && d;
        d || (gG(a.a, a.i, c, "[Invalid Chunked Response]"),
        eG(a),
        jG(a))
    }
    f.Rt = function() {
        var a = FE(this.Ua)
          , b = HE(this.Ua);
        this.Eg < b.length && (dG(this),
        fG(this, a, b),
        this.Ac && 4 != a && cG(this))
    }
    ;
    function kG(a, b) {
        var c = a.Eg
          , d = b.indexOf("\n", c);
        if (-1 == d)
            return ZF;
        c = Number(b.substring(c, d));
        if (isNaN(c))
            return YF;
        d += 1;
        if (d + c > b.length)
            return ZF;
        var e = b.substr(d, c);
        a.Eg = d + c;
        return e
    }
    function lG(a, b) {
        a.vg = u();
        cG(a);
        var c = b ? window.location.hostname : "";
        a.Kb = a.Ud.clone();
        Ue(a.Kb, "DOMAIN", c);
        Ue(a.Kb, "t", a.k);
        try {
            a.Cc = new ActiveXObject("htmlfile")
        } catch (d) {
            eG(a);
            a.$d = 7;
            iG();
            jG(a);
            return
        }
        var e = "<html><body>";
        b && (e += '<script>document.domain="' + c + '"\x3c/script>');
        e += "</body></html>";
        a.Cc.open();
        a.Cc.write(e);
        a.Cc.close();
        a.Cc.parentWindow.m = t(a.Cv, a);
        a.Cc.parentWindow.d = t(a.Jo, a, !0);
        a.Cc.parentWindow.rpcClose = t(a.Jo, a, !1);
        c = a.Cc.createElement("div");
        a.Cc.parentWindow.document.body.appendChild(c);
        c.innerHTML = '<iframe src="' + a.Kb + '"></iframe>';
        a.a.info("TRIDENT REQ (" + a.i + ") [ attempt " + a.k + "]: GET\n" + a.Kb);
        a.g.zc(1)
    }
    f.Cv = function(a) {
        mG(t(this.Py, this, a), 0)
    }
    ;
    f.Py = function(a) {
        if (!this.Ke) {
            var b = this.a;
            b.info("TRIDENT TEXT (" + this.i + "): " + nG(b, a));
            dG(this);
            hG(this, a);
            cG(this)
        }
    }
    ;
    f.Jo = function(a) {
        mG(t(this.Oy, this, a), 0)
    }
    ;
    f.Oy = function(a) {
        this.Ke || (this.a.info("TRIDENT TEXT (" + this.i + "): " + a ? "success" : "failure"),
        eG(this),
        this.Ac = a,
        this.g.Zh(this),
        this.g.zc(4))
    }
    ;
    f.cancel = function() {
        this.Ke = !0;
        eG(this)
    }
    ;
    function cG(a) {
        a.yl = u() + a.nc;
        oG(a, a.nc)
    }
    function oG(a, b) {
        if (null != a.Jf)
            throw Error("WatchDog timer not null");
        a.Jf = mG(t(a.ty, a), b)
    }
    function dG(a) {
        a.Jf && (l.clearTimeout(a.Jf),
        a.Jf = null)
    }
    f.ty = function() {
        this.Jf = null;
        var a = u();
        0 <= a - this.yl ? (this.a.info("TIMEOUT: " + this.Kb),
        2 != this.Cf && this.g.zc(3),
        eG(this),
        this.$d = 2,
        iG(),
        jG(this)) : (this.a.Rd("WatchDog timer called too early"),
        oG(this, this.yl - a))
    }
    ;
    function jG(a) {
        a.g.Yb() || a.Ke || a.g.Zh(a)
    }
    function eG(a) {
        dG(a);
        ph(a.ci);
        a.ci = null;
        a.o.stop();
        a.b.removeAll();
        if (a.Ua) {
            var b = a.Ua;
            a.Ua = null;
            BE(b);
            b.dispose()
        }
        a.Cc && (a.Cc = null)
    }
    function hG(a, b) {
        try {
            a.g.Kp(a, b),
            a.g.zc(4)
        } catch (c) {}
    }
    ;function pG() {}
    function gG(a, b, c, d) {
        a.info("XMLHTTP TEXT (" + b + "): " + nG(a, c) + (d ? " " + d : ""))
    }
    pG.prototype.debug = function(a) {
        this.info(a)
    }
    ;
    pG.prototype.info = function() {}
    ;
    pG.prototype.Rd = function() {}
    ;
    function nG(a, b) {
        if (!b || "y2f%" == b)
            return b;
        try {
            var c = tb(b);
            if (c)
                for (var d = 0; d < c.length; d++)
                    if (ga(c[d])) {
                        var e = c[d];
                        if (!(2 > e.length)) {
                            var g = e[1];
                            if (ga(g) && !(1 > g.length)) {
                                var h = g[0];
                                if ("noop" != h && "stop" != h)
                                    for (var k = 1; k < g.length; k++)
                                        g[k] = ""
                            }
                        }
                    }
            return ub(c)
        } catch (m) {
            return a.debug("Exception parsing expected JS array - probably was not JS"),
            b
        }
    }
    ;function qG(a, b, c, d, e) {
        (new pG).debug("TestLoadImageWithRetries: " + e);
        if (0 == d)
            c(!1);
        else {
            var g = e || 0;
            d--;
            rG(a, b, function(e) {
                e ? c(!0) : l.setTimeout(function() {
                    qG(a, b, c, d, g)
                }, g)
            })
        }
    }
    function rG(a, b, c) {
        var d = new pG;
        d.debug("TestLoadImage: loading " + a);
        var e = new Image;
        e.onload = function() {
            try {
                d.debug("TestLoadImage: loaded"),
                sG(e),
                c(!0)
            } catch (a) {}
        }
        ;
        e.onerror = function() {
            try {
                d.debug("TestLoadImage: error"),
                sG(e),
                c(!1)
            } catch (a) {}
        }
        ;
        e.onabort = function() {
            try {
                d.debug("TestLoadImage: abort"),
                sG(e),
                c(!1)
            } catch (a) {}
        }
        ;
        e.ontimeout = function() {
            try {
                d.debug("TestLoadImage: timeout"),
                sG(e),
                c(!1)
            } catch (a) {}
        }
        ;
        l.setTimeout(function() {
            if (e.ontimeout)
                e.ontimeout()
        }, b);
        e.src = a
    }
    function sG(a) {
        a.onload = null;
        a.onerror = null;
        a.onabort = null;
        a.ontimeout = null
    }
    ;function tG(a, b) {
        this.a = a;
        this.b = b;
        this.g = new VF(null,!0)
    }
    f = tG.prototype;
    f.Lk = null;
    f.Nb = null;
    f.Ai = !1;
    f.vo = null;
    f.zi = null;
    f.dl = null;
    f.ll = null;
    f.Pb = null;
    f.Se = -1;
    f.Kg = null;
    f.Ng = null;
    f.connect = function(a) {
        this.ll = a;
        a = uG(this.a, this.ll);
        iG();
        this.vo = u();
        var b = this.a.u;
        null != b ? (this.Kg = b[0],
        (this.Ng = b[1]) ? (this.Pb = 1,
        vG(this)) : (this.Pb = 2,
        wG(this))) : (Ve(a, "MODE", "init"),
        this.Nb = new WF(this,this.b,void 0,void 0,void 0),
        this.Nb.Ce = this.Lk,
        bG(this.Nb, a, !1, null, !0),
        this.Pb = 0)
    }
    ;
    function vG(a) {
        var b = xG(a.a, a.Ng, "/mail/images/cleardot.gif");
        Xe(b);
        qG(b.toString(), 5E3, t(a.tw, a), 3, 2E3);
        a.zc(1)
    }
    f.tw = function(a) {
        if (a)
            this.Pb = 2,
            wG(this);
        else {
            iG();
            var b = this.a;
            b.a.debug("Test Connection Blocked");
            b.Vc = b.ie.Se;
            yG(b, 9)
        }
        a && this.zc(2)
    }
    ;
    function wG(a) {
        a.b.debug("TestConnection: starting stage 2");
        var b = a.a.A;
        if (null != b)
            a.b.debug("TestConnection: skipping stage 2, precomputed result is " + b ? "Buffered" : "Unbuffered"),
            iG(),
            b ? (iG(),
            zG(a.a, a, !1)) : (iG(),
            zG(a.a, a, !0));
        else if (a.Nb = new WF(a,a.b,void 0,void 0,void 0),
        a.Nb.Ce = a.Lk,
        b = AG(a.a, a.Kg, a.ll),
        iG(),
        !C || Dc(10))
            Ve(b, "TYPE", "xmlhttp"),
            bG(a.Nb, b, !1, a.Kg, !1);
        else {
            Ve(b, "TYPE", "html");
            var c = a.Nb;
            a = Boolean(a.Kg);
            c.Cf = 3;
            c.Ud = Xe(b.clone());
            lG(c, a)
        }
    }
    f.Fk = function(a) {
        return this.a.Fk(a)
    }
    ;
    f.Yb = function() {
        return !1
    }
    ;
    f.Kp = function(a, b) {
        this.Se = a.og;
        if (0 == this.Pb)
            if (this.b.debug("TestConnection: Got data for stage 1"),
            b) {
                try {
                    var c = this.g.parse(b)
                } catch (d) {
                    BG(this.a, this);
                    return
                }
                this.Kg = c[0];
                this.Ng = c[1]
            } else
                this.b.debug("TestConnection: Null responseText"),
                BG(this.a, this);
        else if (2 == this.Pb)
            if (this.Ai)
                iG(),
                this.dl = u();
            else if ("11111" == b) {
                if (iG(),
                this.Ai = !0,
                this.zi = u(),
                c = this.zi - this.vo,
                !C || Dc(10) || 500 > c)
                    this.Se = 200,
                    this.Nb.cancel(),
                    this.b.debug("Test connection succeeded; using streaming connection"),
                    iG(),
                    zG(this.a, this, !0)
            } else
                iG(),
                this.zi = this.dl = u(),
                this.Ai = !1
    }
    ;
    f.Zh = function() {
        this.Se = this.Nb.og;
        if (!this.Nb.Ac)
            this.b.debug("TestConnection: request failed, in state " + this.Pb),
            0 == this.Pb ? iG() : 2 == this.Pb && iG(),
            BG(this.a, this);
        else if (0 == this.Pb)
            this.b.debug("TestConnection: request complete for initial check"),
            this.Ng ? (this.Pb = 1,
            vG(this)) : (this.Pb = 2,
            wG(this));
        else if (2 == this.Pb) {
            this.b.debug("TestConnection: request complete for stage 2");
            var a = !1;
            (a = !C || Dc(10) ? this.Ai : 200 > this.dl - this.zi ? !1 : !0) ? (this.b.debug("Test connection succeeded; using streaming connection"),
            iG(),
            zG(this.a, this, !0)) : (this.b.debug("Test connection failed; not using streaming"),
            iG(),
            zG(this.a, this, !1))
        }
    }
    ;
    f.ji = function() {
        return this.a.ji()
    }
    ;
    f.zc = function(a) {
        this.a.zc(a)
    }
    ;
    function CG(a, b, c) {
        this.C = a || null;
        this.b = 1;
        this.g = [];
        this.i = [];
        this.a = new pG;
        this.k = new VF(null,!0);
        this.u = b || null;
        this.A = null != c ? c : null
    }
    function DG(a, b) {
        this.a = a;
        this.map = b;
        this.O = null
    }
    f = CG.prototype;
    f.Vg = null;
    f.Bb = null;
    f.Ra = null;
    f.Jk = null;
    f.di = null;
    f.qo = null;
    f.vi = null;
    f.zg = 0;
    f.Gw = 0;
    f.ub = null;
    f.ge = null;
    f.Cd = null;
    f.Te = null;
    f.ie = null;
    f.Nh = null;
    f.pf = -1;
    f.Co = -1;
    f.Vc = -1;
    f.Dg = 0;
    f.Hf = 0;
    f.Ie = 8;
    var EG = new hj;
    function FG(a) {
        Ii.call(this, "statevent", a)
    }
    v(FG, Ii);
    function GG(a, b) {
        Ii.call(this, "timingevent", a);
        this.size = b
    }
    v(GG, Ii);
    function HG(a) {
        Ii.call(this, "serverreachability", a)
    }
    v(HG, Ii);
    f = CG.prototype;
    f.connect = function(a, b, c, d, e) {
        this.a.debug("connect()");
        iG();
        this.Jk = b;
        this.Vg = c || {};
        d && q(e) && (this.Vg.OSID = d,
        this.Vg.OAID = e);
        this.a.debug("connectTest_()");
        this.ie = new tG(this,this.a);
        this.ie.Lk = null;
        this.ie.g = this.k;
        this.ie.connect(a)
    }
    ;
    f.disconnect = function() {
        this.a.debug("disconnect()");
        IG(this);
        if (3 == this.b) {
            var a = this.zg++
              , b = this.di.clone();
            Ue(b, "SID", this.j);
            Ue(b, "RID", a);
            Ue(b, "TYPE", "terminate");
            JG(this, b);
            a = new WF(this,this.a,this.j,a,void 0);
            a.Cf = 2;
            a.Ud = Xe(b.clone());
            (new Image).src = a.Ud;
            a.vg = u();
            cG(a)
        }
        KG(this)
    }
    ;
    function IG(a) {
        if (a.ie) {
            var b = a.ie;
            b.Nb && (b.Nb.cancel(),
            b.Nb = null);
            b.Se = -1;
            a.ie = null
        }
        a.Ra && (a.Ra.cancel(),
        a.Ra = null);
        a.Cd && (l.clearTimeout(a.Cd),
        a.Cd = null);
        LG(a);
        a.Bb && (a.Bb.cancel(),
        a.Bb = null);
        a.ge && (l.clearTimeout(a.ge),
        a.ge = null)
    }
    function MG(a, b) {
        if (0 == a.b)
            throw Error("Invalid operation: sending map when state is closed");
        1E3 == a.g.length && ub(b);
        a.g.push(new DG(a.Gw++,b));
        2 != a.b && 3 != a.b || NG(a)
    }
    f.Yb = function() {
        return 0 == this.b
    }
    ;
    function OG(a) {
        var b = 0;
        a.Ra && b++;
        a.Bb && b++;
        return b
    }
    function NG(a) {
        a.Bb || a.ge || (a.ge = mG(t(a.Ho, a), 0),
        a.Dg = 0)
    }
    f.Ho = function(a) {
        this.ge = null;
        PG(this, a)
    }
    ;
    function PG(a, b) {
        a.a.debug("startForwardChannel_");
        if (1 == a.b) {
            if (!b) {
                a.a.debug("open_()");
                a.zg = Math.floor(1E5 * Math.random());
                var c = a.zg++
                  , d = new WF(a,a.a,"",c,void 0);
                d.Ce = null;
                var e = QG(a)
                  , g = a.di.clone();
                Ue(g, "RID", c);
                a.C && Ue(g, "CVER", a.C);
                JG(a, g);
                $F(d, g, e);
                a.Bb = d;
                a.b = 2
            }
        } else
            3 == a.b && (b ? RG(a, b) : 0 == a.g.length ? a.a.debug("startForwardChannel_ returned: nothing to send") : a.Bb || (RG(a),
            a.a.debug("startForwardChannel_ finished, sent request")))
    }
    function RG(a, b) {
        var c, d;
        b ? 6 < a.Ie ? (a.g = a.i.concat(a.g),
        a.i.length = 0,
        c = a.zg - 1,
        d = QG(a)) : (c = b.i,
        d = b.Xd) : (c = a.zg++,
        d = QG(a));
        var e = a.di.clone();
        Ue(e, "SID", a.j);
        Ue(e, "RID", c);
        Ue(e, "AID", a.pf);
        JG(a, e);
        c = new WF(a,a.a,a.j,c,a.Dg + 1);
        c.Ce = null;
        c.setTimeout(Math.round(1E4) + Math.round(1E4 * Math.random()));
        a.Bb = c;
        $F(c, e, d)
    }
    function JG(a, b) {
        if (a.ub) {
            var c = a.ub.hq(a);
            c && pe(c, function(a, c) {
                Ue(b, c, a)
            })
        }
    }
    function QG(a) {
        var b = Math.min(a.g.length, 1E3), c = ["count=" + b], d;
        6 < a.Ie && 0 < b ? (d = a.g[0].a,
        c.push("ofs=" + d)) : d = 0;
        for (var e = 0; e < b; e++) {
            var g = a.g[e].a
              , h = a.g[e].map
              , g = 6 >= a.Ie ? e : g - d;
            try {
                pe(h, function(a, b) {
                    c.push("req" + g + "_" + b + "=" + encodeURIComponent(a))
                })
            } catch (k) {
                c.push("req" + g + "_type=" + encodeURIComponent("_badmap"))
            }
        }
        a.i = a.i.concat(a.g.splice(0, b));
        return c.join("&")
    }
    function SG(a) {
        a.Ra || a.Cd || (a.o = 1,
        a.Cd = mG(t(a.hp, a), 0),
        a.Hf = 0)
    }
    function TG(a) {
        if (a.Ra || a.Cd || 3 <= a.Hf)
            return !1;
        a.a.debug("Going to retry GET");
        a.o++;
        a.Cd = mG(t(a.hp, a), UG(a, a.Hf));
        a.Hf++;
        return !0
    }
    f.hp = function() {
        this.Cd = null;
        this.a.debug("Creating new HttpRequest");
        this.Ra = new WF(this,this.a,this.j,"rpc",this.o);
        this.Ra.Ce = null;
        this.Ra.hk = 0;
        var a = this.qo.clone();
        Ue(a, "RID", "rpc");
        Ue(a, "SID", this.j);
        Ue(a, "CI", this.Nh ? "0" : "1");
        Ue(a, "AID", this.pf);
        JG(this, a);
        if (!C || Dc(10))
            Ue(a, "TYPE", "xmlhttp"),
            bG(this.Ra, a, !0, this.vi, !1);
        else {
            Ue(a, "TYPE", "html");
            var b = this.Ra
              , c = Boolean(this.vi);
            b.Cf = 3;
            b.Ud = Xe(a.clone());
            lG(b, c)
        }
        this.a.debug("New Request created")
    }
    ;
    function zG(a, b, c) {
        a.a.debug("Test Connection Finished");
        a.Nh = c;
        a.Vc = b.Se;
        a.a.debug("connectChannel_()");
        a.ow(1, 0);
        a.di = uG(a, a.Jk);
        NG(a)
    }
    function BG(a, b) {
        a.a.debug("Test Connection Failed");
        a.Vc = b.Se;
        yG(a, 2)
    }
    f.Kp = function(a, b) {
        if (0 != this.b && (this.Ra == a || this.Bb == a))
            if (this.Vc = a.og,
            this.Bb == a && 3 == this.b)
                if (7 < this.Ie) {
                    var c;
                    try {
                        c = this.k.parse(b)
                    } catch (d) {
                        c = null
                    }
                    if (ga(c) && 3 == c.length) {
                        var e = c;
                        if (0 == e[0])
                            t: if (this.a.debug("Server claims our backchannel is missing."),
                            this.Cd)
                                this.a.debug("But we are currently starting the request.");
                            else {
                                if (this.Ra)
                                    if (this.Ra.vg + 3E3 < this.Bb.vg)
                                        LG(this),
                                        this.Ra.cancel(),
                                        this.Ra = null;
                                    else
                                        break t;
                                else
                                    this.a.Rd("We do not have a BackChannel established");
                                TG(this);
                                iG()
                            }
                        else
                            this.Co = e[1],
                            c = this.Co - this.pf,
                            0 < c && (e = e[2],
                            this.a.debug(e + " bytes (in " + c + " arrays) are outstanding on the BackChannel"),
                            37500 > e && this.Nh && 0 == this.Hf && !this.Te && (this.Te = mG(t(this.lv, this), 6E3)))
                    } else
                        this.a.debug("Bad POST response data returned"),
                        yG(this, 11)
                } else
                    "y2f%" != b && (this.a.debug("Bad data returned - missing/invald magic cookie"),
                    yG(this, 11));
            else if (this.Ra == a && LG(this),
            !/^[\s\xa0]*$/.test(b))
                for (c = this.k.parse(b),
                ga(c),
                e = 0; e < c.length; e++) {
                    var g = c[e];
                    this.pf = g[0];
                    g = g[1];
                    2 == this.b ? "c" == g[0] ? (this.j = g[1],
                    this.vi = g[2],
                    g = g[3],
                    null != g ? this.Ie = g : this.Ie = 6,
                    this.b = 3,
                    this.ub && this.ub.Bo(this),
                    this.qo = AG(this, this.vi, this.Jk),
                    SG(this)) : "stop" == g[0] && yG(this, 7) : 3 == this.b && ("stop" == g[0] ? yG(this, 7) : "noop" != g[0] && this.ub && this.ub.Ao(this, g),
                    this.Hf = 0)
                }
    }
    ;
    f.lv = function() {
        null != this.Te && (this.Te = null,
        this.Ra.cancel(),
        this.Ra = null,
        TG(this),
        iG())
    }
    ;
    function LG(a) {
        null != a.Te && (l.clearTimeout(a.Te),
        a.Te = null)
    }
    f.Zh = function(a) {
        this.a.debug("Request complete");
        var b;
        if (this.Ra == a)
            LG(this),
            this.Ra = null,
            b = 2;
        else if (this.Bb == a)
            this.Bb = null,
            b = 1;
        else
            return;
        this.Vc = a.og;
        if (0 != this.b)
            if (a.Ac)
                1 == b ? (u(),
                ij(EG, new GG(EG,a.Xd ? a.Xd.length : 0)),
                NG(this),
                this.i.length = 0) : SG(this);
            else {
                var c = a.$d;
                if (3 == c || 7 == c || 0 == c && 0 < this.Vc)
                    this.a.debug("Not retrying due to error type");
                else {
                    this.a.debug("Maybe retrying, last error: " + XF(c, this.Vc));
                    var d;
                    if (d = 1 == b)
                        this.Bb || this.ge ? d = !1 : 1 == this.b || 2 <= this.Dg ? d = !1 : (this.a.debug("Going to retry POST"),
                        this.ge = mG(t(this.Ho, this, a), UG(this, this.Dg)),
                        this.Dg++,
                        d = !0);
                    if (d || 2 == b && TG(this))
                        return;
                    this.a.debug("Exceeded max number of retries")
                }
                this.a.debug("Error: HTTP request failed");
                switch (c) {
                case 1:
                    yG(this, 5);
                    break;
                case 4:
                    yG(this, 10);
                    break;
                case 3:
                    yG(this, 6);
                    break;
                case 7:
                    yG(this, 12);
                    break;
                default:
                    yG(this, 2)
                }
            }
    }
    ;
    function UG(a, b) {
        var c = 5E3 + Math.floor(1E4 * Math.random());
        a.ub || (a.a.debug("Inactive channel"),
        c *= 2);
        return c * b
    }
    f.ow = function(a) {
        if (!y(arguments, this.b))
            throw Error("Unexpected channel state: " + this.b);
    }
    ;
    function yG(a, b) {
        a.a.info("Error code " + b);
        if (2 == b || 9 == b) {
            var c = null;
            a.ub && (c = null);
            var d = t(a.ww, a);
            c || (c = new Ge("//www.google.com/images/cleardot.gif"),
            Xe(c));
            rG(c.toString(), 1E4, d)
        } else
            iG();
        VG(a, b)
    }
    f.ww = function(a) {
        a ? (this.a.info("Successfully pinged google.com"),
        iG()) : (this.a.info("Failed to ping google.com"),
        iG(),
        VG(this, 8))
    }
    ;
    function VG(a, b) {
        a.a.debug("HttpChannel: error - " + b);
        a.b = 0;
        a.ub && a.ub.$o(a, b);
        KG(a);
        IG(a)
    }
    function KG(a) {
        a.b = 0;
        a.Vc = -1;
        if (a.ub)
            if (0 == a.i.length && 0 == a.g.length)
                a.ub.Tk(a);
            else {
                a.a.debug("Number of undelivered maps, pending: " + a.i.length + ", outgoing: " + a.g.length);
                var b = eb(a.i)
                  , c = eb(a.g);
                a.i.length = 0;
                a.g.length = 0;
                a.ub.Tk(a, b, c)
            }
    }
    function uG(a, b) {
        var c = xG(a, null, b);
        a.a.debug("GetForwardChannelUri: " + c);
        return c
    }
    function AG(a, b, c) {
        b = xG(a, a.ji() ? b : null, c);
        a.a.debug("GetBackChannelUri: " + b);
        return b
    }
    function xG(a, b, c) {
        var d = Ye(c);
        if ("" != d.Me)
            b && Ie(d, b + "." + d.Me),
            Je(d, d.Xg);
        else
            var e = window.location
              , d = Ze(e.protocol, b ? b + "." + e.hostname : e.hostname, e.port, c);
        a.Vg && pe(a.Vg, function(a, b) {
            Ue(d, b, a)
        });
        Ue(d, "VER", a.Ie);
        JG(a, d);
        return d
    }
    f.Fk = function(a) {
        if (a)
            throw Error("Can't create secondary domain capable XhrIo object.");
        a = new tE;
        a.R = !1;
        return a
    }
    ;
    function mG(a, b) {
        if (!ja(a))
            throw Error("Fn must not be null and must be a function");
        return l.setTimeout(function() {
            a()
        }, b)
    }
    f.zc = function() {
        ij(EG, new HG(EG))
    }
    ;
    function iG() {
        ij(EG, new FG(EG))
    }
    f.ji = function() {
        return !(!C || Dc(10))
    }
    ;
    function WG() {}
    f = WG.prototype;
    f.Bo = function() {}
    ;
    f.Ao = function() {}
    ;
    f.$o = function() {}
    ;
    f.Tk = function() {}
    ;
    f.hq = function() {
        return {}
    }
    ;
    function XG(a) {
        a && (this.id = a.id || a.name,
        this.name = a.name,
        this.app = a.app,
        this.type = a.type || "REMOTE_CONTROL",
        this.Lp = a.user || "")
    }
    f = XG.prototype;
    f.id = "";
    f.name = "";
    f.app = "";
    f.type = "REMOTE_CONTROL";
    f.Lp = "";
    f.equals = function(a) {
        return a ? this.id == a.id : !1
    }
    ;
    function YG(a, b) {
        kj.call(this);
        if (ja(a))
            b && (a = t(a, b));
        else if (a && ja(a.handleEvent))
            a = t(a.handleEvent, a);
        else
            throw Error("Invalid listener argument");
        this.o = a;
        Wi(this, "tick", t(this.k, this));
        this.stop();
        lj(this, 5E3 + 2E4 * Math.random())
    }
    v(YG, kj);
    YG.prototype.j = 0;
    YG.prototype.k = function() {
        if (500 < this.a) {
            var a = this.a;
            24E4 > 2 * a && (a *= 2);
            lj(this, a)
        }
        this.o()
    }
    ;
    YG.prototype.start = function() {
        YG.D.start.call(this);
        this.j = u() + this.a
    }
    ;
    YG.prototype.stop = function() {
        this.j = 0;
        YG.D.stop.call(this)
    }
    ;
    function ZG(a, b) {
        this.I = a;
        this.o = b;
        this.g = new Ai;
        this.b = new YG(this.gr,this);
        this.A = jE("yt.mdx.Handler");
        this.a = null;
        this.F = !1;
        this.j = null;
        this.u = "";
        this.C = this.i = 0;
        this.k = []
    }
    v(ZG, WG);
    f = ZG.prototype;
    f.G = function(a, b, c) {
        return this.g.G(a, b, c)
    }
    ;
    f.ba = function(a, b, c) {
        return this.g.ba(a, b, c)
    }
    ;
    f.Uc = function(a) {
        return this.g.Uc(a)
    }
    ;
    f.B = function(a, b) {
        return this.g.B.apply(this.g, arguments)
    }
    ;
    f.dispose = function() {
        this.F || (this.F = !0,
        this.g.clear(),
        this.disconnect(),
        ph(this.g))
    }
    ;
    f.ia = function() {
        return this.F
    }
    ;
    f.connect = function(a, b, c) {
        if (!this.a || 2 != this.a.b) {
            this.u = "";
            this.b.stop();
            this.j = a || null;
            this.i = b || 0;
            a = this.I + "/test";
            b = this.I + "/bind";
            var d = new CG("1",c ? c.firstTestResults : null,c ? c.secondTestResults : null)
              , e = this.a;
            e && (e.ub = null);
            d.ub = this;
            this.a = d;
            e ? (3 != e.b && 0 == OG(e) || this.A.Rd("Unexpected state on old channel when reconnecting: " + e.b),
            this.a.connect(a, b, this.o, e.j, e.pf)) : c ? this.a.connect(a, b, this.o, c.sessionId, c.arrayId) : this.a.connect(a, b, this.o)
        }
    }
    ;
    f.disconnect = function(a) {
        this.C = a || 0;
        this.b.stop();
        this.a && (3 == this.a.b && PG(this.a),
        this.a.disconnect());
        this.C = 0
    }
    ;
    f.sendMessage = function(a, b) {
        var c = {
            _sc: a
        };
        b && $b(c, b);
        this.b.enabled || 2 == (this.a ? this.a.b : 0) ? (this.A.info("Queuing message while (re)connecting: " + a),
        this.k.push(c)) : $G(this) ? MG(this.a, c) : this.A.Rd("Ignoring message: " + a)
    }
    ;
    f.Bo = function() {
        var a = this.b;
        a.stop();
        lj(a, 5E3 + 2E4 * Math.random());
        this.j = null;
        this.i = 0;
        if (this.k.length) {
            a = this.k;
            this.k = [];
            for (var b = 0, c = a.length; b < c; ++b)
                this.A.info("Sending queued message: " + a[b]._sc),
                MG(this.a, a[b])
        }
        this.B("handlerOpened")
    }
    ;
    f.$o = function(a, b) {
        var c = 2 == b && 401 == this.a.Vc;
        if (4 != b && !c) {
            if (6 == b || 410 == this.a.Vc)
                c = this.b,
                c.stop(),
                lj(c, 500);
            this.b.start()
        }
        this.B("handlerError", b)
    }
    ;
    f.Tk = function(a, b, c) {
        if (!this.b.enabled)
            this.B("handlerClosed");
        else if (c)
            for (a = 0,
            b = c.length; a < b; ++a)
                this.k.push(c[a].map)
    }
    ;
    f.hq = function() {
        var a = {
            v: 2
        };
        this.u && (a.gsessionid = this.u);
        0 != this.i && (a.ui = "" + this.i);
        0 != this.C && (a.ui = "" + this.C);
        this.j && $b(a, this.j);
        return a
    }
    ;
    f.Ao = function(a, b) {
        if ("S" == b[0])
            this.u = b[1];
        else if ("gracefulReconnect" == b[0]) {
            var c = this.b;
            c.stop();
            lj(c, 500);
            this.b.start();
            this.a.disconnect()
        } else
            this.B("handlerMessage", new CF(b[0],b[1]))
    }
    ;
    function $G(a) {
        return !!a.a && 3 == a.a.b
    }
    function aH(a, b) {
        (a.o.loungeIdToken = b) || a.b.stop()
    }
    function bH(a) {
        return a.b.enabled ? a.b.j - u() : NaN
    }
    f.gr = function() {
        this.b.stop();
        0 != OG(this.a) ? this.b.start() : this.connect(this.j, this.i)
    }
    ;
    function cH(a) {
        this.reset(a)
    }
    function dH(a) {
        a.volume = -1;
        a.muted = !1;
        a.b = null;
        a.a = -1;
        a.g = null;
        a.i = 0;
        a.j = u()
    }
    cH.prototype.reset = function(a) {
        this.kb = [];
        this.index = -1;
        dH(this);
        a && (this.kb = a.videoIds,
        this.index = a.index,
        this.a = a.playerState,
        this.g = a.errorReason,
        this.volume = a.volume,
        this.muted = a.muted,
        this.b = a.trackData,
        this.i = a.playerTime,
        this.j = a.playerTimeAt)
    }
    ;
    function eH(a) {
        return a.kb[a.index]
    }
    function fH(a, b) {
        a.i = b;
        a.j = u()
    }
    function gH(a) {
        switch (a.a) {
        case 1:
            return (u() - a.j) / 1E3 + a.i;
        case -1E3:
            return 0
        }
        return a.i
    }
    function hH(a, b) {
        var c = a.index;
        a.index = Pa(a.kb, b);
        c != a.index && dH(a)
    }
    function iH(a, b, c) {
        c = c || eH(a);
        if (pb(a.kb, b) && c == eH(a))
            return !1;
        a.kb = eb(b);
        hH(a, c);
        return !0
    }
    cH.prototype.add = function(a) {
        return a && !y(this.kb, a) ? (this.kb.push(a),
        !0) : !1
    }
    ;
    cH.prototype.remove = function(a) {
        var b = eH(this);
        return ab(this.kb, a) ? (this.index = Pa(this.kb, b),
        !0) : !1
    }
    ;
    function jH(a, b) {
        T.call(this);
        if (Og) {
            var c = Og;
            Mg(c, c.a.Gd(!0))
        }
        Yg();
        jE("goog.net.BrowserChannel");
        c = $g();
        this.g = new ZG("/api/lounge/bc",{
            device: "REMOTE_CONTROL",
            id: c,
            name: a,
            app: b
        });
        this.a = null;
        this.o = [];
        this.g.G("handlerOpened", this.Wv, this);
        this.g.G("handlerClosed", this.Tv, this);
        this.g.G("handlerError", this.Uv, this);
        this.g.G("handlerMessage", this.Vv, this);
        kH().G("managedScreenChange", this.rl, this);
        this.log_("Initializing with device id = " + c + ", name = " + a + ", app = " + b)
    }
    v(jH, T);
    f = jH.prototype;
    f.Sg = NaN;
    f.fl = NaN;
    f.bh = NaN;
    f.dh = NaN;
    function lH(a) {
        a = a || 0;
        5 >= a && (a = 0);
        return a
    }
    f.H = function() {
        jH.D.H.call(this);
        M(this.bh);
        M(this.dh)
    }
    ;
    f.log_ = function(a) {
        mF("RC", a)
    }
    ;
    function mH() {
        var a = ah();
        return a ? NF(kH(), a) : null
    }
    function kH() {
        return DF.getInstance()
    }
    function nH(a, b, c) {
        a.ba("connectionOpened", b, c);
        a.ba("connectionClosed", b, c);
        a.ba("connectionError", b, c)
    }
    function oH(a, b) {
        "connectionError" == b && Rg("yt-remote-session-screen-id");
        a.log_("Firing " + b);
        a.B(b, "connectionOpened" == b);
        a.k = null
    }
    function pH(a, b) {
        "playerChange" == b ? (M(a.bh),
        a.bh = L(t(function() {
            this.B("playerChange");
            this.bh = NaN
        }, a), 2E3)) : "playlistChange" == b && (M(a.dh),
        a.dh = L(t(function() {
            this.B("playlistChange");
            this.dh = NaN
        }, a), 2E3))
    }
    function qH(a, b) {
        "playerChange" == b && isNaN(a.bh) && a.B("playerChange");
        "playlistChange" == b && isNaN(a.dh) && a.B("playlistChange")
    }
    function rH(a, b) {
        b ? (a.log_("Changing current screen id from: " + a.i + " to " + b.tb),
        a.i = b.tb,
        aH(a.g, b.ic)) : (a.log_("Removing current screen id: " + a.i),
        a.i = "",
        aH(a.g, ""))
    }
    function sH(a) {
        return a.i ? NF(kH(), a.i) : null
    }
    function tH(a) {
        return a.k ? a.k.currentTime : 0
    }
    f.connect = function(a) {
        this.log_("Connecting to the receiver: " + ub(a));
        var b = TF(kH(), a.key);
        b ? uH(this, b) : (a = UF(kH(), a.key)) ? vH(this, a) : L(t(function() {
            oH(this, "connectionError")
        }, this), 0)
    }
    ;
    function uH(a, b) {
        a.log_("Connecting to screen: " + gg(b));
        var c = mH();
        c && !ug(b, c) ? a.disconnect() : wH(a);
        a.a = null;
        rH(a, b);
        c = {};
        if (a.b) {
            c.videoIds = xH(a.b);
            c.videoId = xH(a.b);
            var d = a.k ? a.k.currentTime : a.b.a.getCurrentTime();
            c.currentTime = lH(d)
        }
        Vb(c) ? a.log_("Connecting with empty params") : a.log_("Connecting with setPlaylist and params: " + ub(c));
        a.b ? kh(xH(a.b), "") : kh("", "");
        a.a = new cH;
        Vb(c) || (a.a.kb = c.videoIds.split(","),
        hH(a.a, c.videoId));
        a.g.connect(Vb(c) ? {} : {
            method: "setPlaylist",
            params: ub(c)
        }, 1, eh());
        yH(a)
    }
    function vH(a, b) {
        a.log_("Connecting to DIAL device: " + (b ? b.toString() : "null"));
        zH(a);
        AH(a);
        a.g.disconnect(1);
        var c = a.k ? a.k.pairingCode : "";
        c ? SF(kH(), b.id, c) : a.b ? SF(kH(), b.id, "", xH(a.b), a.b.a.getCurrentTime()) : SF(kH(), b.id, "");
        a.j = b.id;
        kH().G("screenPair", a.Xn, a)
    }
    f.Xn = function(a) {
        this.log_("Paired with a DIAL screen: " + gg(a));
        zH(this);
        a ? uH(this, a) : (this.j = "",
        oH(this, "connectionError"))
    }
    ;
    f.disconnect = function() {
        this.log_("Disconnecting with user intent.");
        AH(this);
        lh();
        this.g.disconnect(1)
    }
    ;
    function EH(a) {
        var b = $g();
        return Ua(a.o, function(a) {
            return "REMOTE_CONTROL" == a.type && a.id != b
        })
    }
    function AH(a) {
        RF(kH());
        var b = EH(a);
        b ? (a.log_("Did not stop DIAL device, because another remote is connected: " + ub(b ? {
            id: b.id,
            name: b.name,
            app: b.app,
            type: b.type,
            user: b.Lp
        } : null)),
        a.j = "") : (b = sH(a),
        a.j ? (a.log_("Stopping DIAL device: " + a.j),
        BF(a.j),
        a.j = "") : b && b.Db && (a.log_("Stopping DIAL device: " + b.Db),
        BF(b.Db)))
    }
    function wH(a) {
        a.log_("Disconnecting from screen.");
        a.g.disconnect(2)
    }
    function FH(a, b) {
        var c = sH(a)
          , d = Ua(b, function(a) {
            var b;
            if (b = c)
                b = a.key,
                b = b == c.tb || b == c.Db;
            return b || this.j && (a = UF(kH(), a.key)) && a.id == this.j ? !0 : !1
        }, a);
        a.log_("Found current receiver: " + ub(d) + " in " + ub(b));
        return d
    }
    function GH(a) {
        return HH(a) ? a.a : null
    }
    function IH(a, b, c) {
        c ? a.log_("Sending: action=" + b + ", params=" + ub(c)) : a.log_("Sending: action=" + b);
        JH(a) ? a.log_("Action = " + b + " was ignored due to reconnecting.") : a.g.sendMessage(b, c)
    }
    f.playVideo = function(a, b, c) {
        c = lH(c);
        var d;
        d = this.a;
        a && !y(d.kb, a) ? (-1 < d.index && d.index >= d.kb.length - 1 ? d.kb.push(a) : d.kb.splice(d.index + 1, 0, a),
        d = !0) : d = !1;
        d && IH(this, "insertVideo", {
            videoId: a,
            videoSource: b
        });
        fH(this.a, c);
        hH(this.a, a);
        pH(this, "playlistChange");
        c = Math.floor(c);
        IH(this, "setVideo", {
            currentTime: c,
            videoId: a
        })
    }
    ;
    function KH(a, b, c, d, e) {
        e = lH(e);
        IH(a, "setPlaylist", {
            videoIds: c.join(","),
            videoId: b,
            videoSources: Ra(c, function() {
                return d
            }),
            currentTime: e
        });
        fH(a.a, e);
        iH(a.a, c, b);
        pH(a, "playlistChange")
    }
    function LH(a, b, c) {
        IH(a, "updatePlaylist", {
            videoIds: b.join(","),
            videoSources: Ra(b, function() {
                return c
            })
        });
        iH(a.a, b);
        pH(a, "playlistChange")
    }
    function MH(a) {
        if ($G(a.g))
            if (a.b.a.getVideoData().Pa && !NH(a.b))
                a.log_("Wait for playlist data to be loaded.");
            else {
                var b = Qg("yt-remote-session-video-id")
                  , c = Qg("yt-remote-session-list-id")
                  , d = xH(a.b)
                  , e = NH(a.b);
                kh(d, e);
                a.log_("Watch context changed: videoId from " + b + " to " + d + " listId from " + c + " to " + e);
                var g = !1
                  , h = !1;
                d && d != b && (g = !0);
                e && e != c && (h = !0);
                c = a.b;
                if (b = c.a.zb()) {
                    c = [];
                    for (e = 0; e < b.dc; e++)
                        c[e] = Wh(b, e).L;
                    b = c
                } else
                    b = [c.a.getVideoData().L];
                c = OH(a.b)[PH(a.b)];
                g ? (g = a.b.a.getCurrentTime(),
                h ? KH(a, d, b, c, g) : a.playVideo(d, c, g)) : h && LH(a, b, c)
            }
    }
    f.play = function() {
        IH(this, "play");
        fH(this.a, gH(this.a));
        -1E3 != this.a.a && (this.a.a = 1);
        pH(this, "playerChange")
    }
    ;
    f.pause = function() {
        IH(this, "pause");
        fH(this.a, gH(this.a));
        -1E3 != this.a.a && (this.a.a = 2);
        pH(this, "playerChange")
    }
    ;
    f.setVolume = function(a, b) {
        var c = {
            volume: a,
            muted: b
        };
        -1 != this.a.volume && (c.delta = a - this.a.volume);
        this.a.muted = b;
        this.a.volume = a;
        IH(this, "setVolume", c);
        pH(this, "playerChange")
    }
    ;
    function QH(a, b, c) {
        c ? (a.a.b = {
            trackName: c.name,
            languageCode: c.languageCode,
            sourceLanguageCode: c.translationLanguage ? c.translationLanguage.languageCode : "",
            languageName: c.languageName,
            format: c.format,
            kind: c.kind
        },
        b = {
            videoId: b,
            style: ub(c.style)
        },
        $b(b, a.a.b),
        IH(a, "setSubtitlesTrack", b)) : IH(a, "setSubtitlesTrack");
        pH(a, "playerChange")
    }
    f.xo = function() {
        IH(this, "getNowPlaying")
    }
    ;
    function HH(a) {
        return $G(a.g) && !!a.i && isNaN(a.Sg)
    }
    function yH(a) {
        RH(a);
        a.Sg = L(t(function() {
            RH(this);
            rH(this, null);
            this.j = "";
            this.a = null;
            this.log_("Connecting timeout");
            oH(this, "connectionError");
            lh();
            this.g.disconnect(1)
        }, a), 1E4)
    }
    function RH(a) {
        M(a.Sg);
        a.Sg = NaN
    }
    function SH(a) {
        M(a.fl);
        a.fl = NaN
    }
    function zH(a) {
        kH().ba("screenPair", a.Xn, a)
    }
    f.Wv = function() {
        this.log_("Channel opened");
        var a = this.g
          , b = this.i;
        Ng("yt-remote-session-browser-channel", {
            firstTestResults: [""],
            secondTestResults: !a.a.Nh,
            sessionId: a.a.j,
            arrayId: a.a.pf
        });
        Ng("yt-remote-session-screen-id", b);
        a = Zg();
        b = $g();
        y(a, b) || a.push(b);
        ch(a);
        Yg();
        QF(kH(), this.i);
        this.b && MH(this)
    }
    ;
    function TH(a) {
        lh(!0);
        SH(a);
        QF(kH(), null);
        rH(a, null);
        a.j = ""
    }
    f.Tv = function() {
        this.log_("Channel closed");
        var a = !!this.i && isNaN(this.Sg);
        TH(this);
        a && oH(this, "connectionClosed")
    }
    ;
    f.Uv = function(a) {
        JH(this) ? this.log_("Channel error: " + a + " with reconnection in " + bH(this.g) + " ms") : this.log_("Channel error: " + a + " without reconnection");
        JH(this) || TH(this);
        RH(this);
        oH(this, "connectionError")
    }
    ;
    function UH(a, b) {
        switch (b.action) {
        case "loungeStatus":
            var c = sb(b.params.devices);
            a.o = Ra(c, function(a) {
                return new XG(a)
            });
            break;
        case "loungeScreenDisconnected":
            cb(a.o, function(a) {
                return "LOUNGE_SCREEN" == a.type
            });
            break;
        case "remoteConnected":
            var d = new XG(sb(b.params.device));
            Ua(a.o, function(a) {
                return a.equals(d)
            }) || $a(a.o, d);
            break;
        case "remoteDisconnected":
            d = new XG(sb(b.params.device)),
            cb(a.o, function(a) {
                return a.equals(d)
            })
        }
    }
    function VH(a, b) {
        var c = !1;
        if ("loungeStatus" == b.action)
            c = !!Ua(a.o, function(a) {
                return "LOUNGE_SCREEN" == a.type
            });
        else if ("loungeScreenConnected" == b.action)
            c = !0;
        else if ("loungeScreenDisconnected" == b.action)
            c = !1;
        else
            return;
        if (c != HH(a))
            if (c) {
                if (RH(a),
                oH(a, "connectionOpened"),
                a.xo(),
                EH(a) && a.b) {
                    var c = xH(a.b)
                      , d = OH(a.b)[PH(a.b)];
                    IH(a, "insertVideo", {
                        videoId: c,
                        videoSource: d
                    });
                    kh("", "");
                    MH(a)
                }
            } else
                a.disconnect()
    }
    function JH(a) {
        return !isNaN(bH(a.g))
    }
    f.Vv = function(a) {
        a.params ? this.log_("Received: action=" + a.action + ", params=" + ub(a.params)) : this.log_("Received: action=" + a.action);
        UH(this, a);
        VH(this, a);
        if (HH(this)) {
            var b = !1, c = !1, d, e, g, h, k, m, p;
            a.params && (d = a.params.videoId || a.params.video_id,
            e = a.params.videoIds || a.params.video_ids,
            g = a.params.state,
            h = a.params.currentTime || a.params.current_time,
            k = a.params.volume,
            m = a.params.muted,
            q(a.params.currentError) && (p = sb(a.params.currentError)));
            if ("onSubtitlesTrackChanged" == a.action)
                d == eH(this.a) && (delete a.params.videoId,
                Vb(a.params) ? this.a.b = null : this.a.b = a.params,
                qH(this, "playerChange"));
            else if (eH(this.a) || "onStateChange" != a.action)
                "playlistModified" != a.action && "nowPlayingPlaylist" != a.action || e ? (d || "nowPlaying" != a.action && "nowPlayingPlaylist" != a.action ? d ? d != eH(this.a) && (b = !0) : d = eH(this.a) : (hH(this.a, ""),
                b = !0),
                e && (e = e.split(","),
                iH(this.a, e, d) && (b = !0))) : (iH(this.a, []),
                b = !0),
                this.a.add(d) && IH(this, "getPlaylist"),
                d && hH(this.a, d),
                b && qH(this, "playlistChange"),
                q(g) && (b = parseInt(g, 10),
                b = isNaN(b) ? -1 : b,
                -1 == b && -1E3 == this.a.a && (b = -1E3),
                0 == b && "0" == h && (b = -1),
                c = c || b != this.a.a,
                this.a.a = b,
                d = null,
                -1E3 == b && (d = this.a.g || "unknown",
                p && (d = p.reason || d)),
                c = c || this.a.g != d,
                this.a.g = d,
                1 == this.a.a ? (SH(this),
                this.fl = L(t(this.xo, this), 2E4)) : SH(this)),
                "onError" != a.action || -1 != this.a.a && -1E3 != this.a.a || (a = sb(a.params.errors) || [],
                1 == a.length && "PLAYER_ERROR" == a[0].error && a[0].videoId == eH(this.a) && (this.a.a = -1E3,
                this.a.g = a[0].reason || "unknown",
                c = !0)),
                h && (b = parseInt(h, 10),
                fH(this.a, isNaN(b) ? 0 : b),
                c = !0),
                q(k) && (b = parseInt(k, 10),
                isNaN(b) || (c = c || this.a.volume != b,
                this.a.volume = b),
                q(m) && (m = "true" == m,
                c = c || this.a.muted != m,
                this.a.muted = m)),
                c && qH(this, "playerChange")
        }
    }
    ;
    f.rl = function() {
        this.i && !sH(this) ? (this.log_("Dropping current screen with id: " + this.i),
        this.disconnect(),
        this.a = null) : mH() || lh()
    }
    ;
    function WH(a, b) {
        this.a = a;
        this.a.G("onVolumeChange", this.Kh, this);
        this.a.G("onPlaylistUpdate", this.nn, this);
        this.i = NaN;
        this.b = b;
        this.b.G("playerChange", this.pn, this);
        this.b.G("playlistChange", this.qn, this);
        this.k = 0;
        this.g = {};
        this.j = new GB(this.Ts,1E3,this);
        O(this, this.j);
        this.o = 0
    }
    v(WH, nh);
    f = WH.prototype;
    f.H = function() {
        XH(this);
        this.a.ba("onVolumeChange", this.Kh, this);
        this.a.ba("onPlaylistUpdate", this.nn, this);
        this.a = null;
        this.b.ba("playerChange", this.pn, this);
        this.b.ba("playlistChange", this.qn, this);
        this.b = null
    }
    ;
    f.yx = function(a, b) {
        GH(this.b) && (YH(this) ? this.Vw.apply(this, arguments) : this.Ww.apply(this, arguments))
    }
    ;
    f.Ww = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        switch (a) {
        case "control_toggle_play_pause":
        case "control_play":
        case "control_pause":
            ZH(this, this.a.a.getCurrentTime());
            break;
        case "control_seek":
            ZH(this, c[0])
        }
    }
    ;
    f.Vw = function(a, b) {
        var c = GH(this.b)
          , d = Array.prototype.slice.call(arguments, 1);
        switch (a) {
        case "control_toggle_play_pause":
            1 == c.a ? $H(this) : (this.b.play(),
            this.a.rb(!0));
            break;
        case "control_play":
            this.b.play();
            this.a.rb(!0);
            break;
        case "control_pause":
            $H(this);
            break;
        case "control_seek":
            this.o = d[0];
            HB(this.j);
            break;
        case "control_subtitles_set_track":
            aI(this, d[0])
        }
    }
    ;
    function $H(a) {
        a.b.pause();
        bI(a, gH(GH(a.b)));
        XH(a);
        a.a.rb(!1)
    }
    f.Ts = function() {
        var a = this.o
          , b = GH(this.b);
        XH(this);
        bI(this, a);
        -1 == b.a ? ZH(this, a) : (b = this.b,
        a = Math.floor(a),
        IH(b, "seekTo", {
            newTime: a
        }),
        fH(b.a, a),
        -1E3 != b.a.a && (b.a.a = 3),
        pH(b, "playerChange"))
    }
    ;
    function aI(a, b) {
        if (YH(a)) {
            if (b) {
                var c = {
                    style: a.a.a.Eh("captions", "displaySettings")
                };
                $b(c, b);
                QH(a.b, a.a.a.getVideoData().L, c)
            } else
                QH(a.b, a.a.a.getVideoData().L, null);
            a.g = GH(a.b).b
        }
    }
    function ZH(a, b) {
        a.b.playVideo(a.a.a.getVideoData().L, "VI", b);
        var c = a.a;
        cI(c);
        dI(c.g)
    }
    f.Kh = function(a) {
        if (YH(this)) {
            var b = Math.round(a.volume);
            this.b.setVolume(b, !!a.muted)
        }
    }
    ;
    f.nn = function() {
        MH(this.b)
    }
    ;
    f.pn = function() {
        if (YH(this)) {
            var a = GH(this.b);
            XH(this);
            switch (a.a) {
            case 1:
                eI(this);
                this.a.rb(!0);
                break;
            case 3:
                var b = this.a;
                cI(b);
                dI(b.g);
                break;
            case 0:
                this.a.rb(!1);
                this.j.stop();
                b = this.a.a;
                (b = Q(b.app, b.a || 1)) && b.fg(!0);
                bI(this, this.a.a.getVideoData().Aa);
                break;
            case 2:
                this.a.rb(!1);
                bI(this, gH(a));
                break;
            case -1:
                this.a.rb(!1);
                break;
            case -1E3:
                var b = this.a
                  , c = Hf("REMOTE_PLAYER_ERROR");
                cI(b);
                fI(b.g, c)
            }
            0 == this.k && (b = this.a.a,
            (b = Q(b.app, b.a || 1)) && b.fg(!1));
            this.k = a.a;
            gI(this);
            b = Math.round(this.a.a.rn());
            -1 == a.volume || b == a.volume && this.a.a.sn() == a.muted || (this.a.ba("onVolumeChange", this.Kh, this),
            this.a.a.setVolume(a.volume),
            a.muted ? this.a.a.tn() : this.a.a.un(),
            this.a.G("onVolumeChange", this.Kh, this))
        } else
            this.a.rb(!1)
    }
    ;
    function gI(a) {
        var b = GH(a.b).b;
        if (!yg(b, a.g))
            if (a.g = b) {
                var c = a.a.a.Eh("captions", "tracklist", {
                    Uy: 1
                })
                  , c = Ua(c, function(a) {
                    return a.languageCode == b.languageCode && a.name == b.trackName
                });
                a.a.a.wn("captions", "track", c)
            } else
                a.a.a.xn("captions")
    }
    f.qn = function() {
        YH(this) || (bI(this, 0),
        XH(this),
        this.a.rb(!1))
    }
    ;
    function YH(a) {
        var b = GH(a.b);
        return !!b && eH(b) == a.a.a.getVideoData().L
    }
    function eI(a) {
        XH(a);
        JH(a.b) || (bI(a, gH(GH(a.b))),
        a.i = L(t(function() {
            eI(this)
        }, a), 500))
    }
    function XH(a) {
        M(a.i);
        a.i = NaN
    }
    function bI(a, b) {
        var c = a.a.a.getVideoData().Aa;
        a.a.B("command_progress", b, b / c, void 0)
    }
    ;function hI() {
        Y.call(this, ["div", ["html5-bezel", "html5-center-overlay"], ["div", "{{icon}}"]]);
        this.a = NaN;
        this.hide()
    }
    v(hI, Y);
    hI.prototype.b = function() {
        G(this.element, "html5-bezel-fade");
        this.a = L(t(this.hide, this), 300)
    }
    ;
    hI.prototype.hide = function() {
        hI.D.hide.call(this);
        iI(this)
    }
    ;
    hI.prototype.setIcon = function(a) {
        Jo(this.template, "icon", a)
    }
    ;
    hI.prototype.show = function(a) {
        iI(this);
        a && this.setIcon(a);
        hI.D.show.call(this)
    }
    ;
    function iI(a) {
        M(a.a);
        H(a.element, "html5-bezel-fade")
    }
    ;function jI(a) {
        Y.call(this, ["div", "ytp-thumbnail"]);
        this.a = a
    }
    v(jI, Y);
    jI.prototype.show = function(a) {
        if (a || this.element.childNodes.length) {
            if (a) {
                hd(this.element);
                var b = this.element
                  , c = this.a;
                if (null != Xo("backgroundSize"))
                    d = document.createElement("div"),
                    d.style.backgroundImage = "url(" + ap(b, a, c) + ")";
                else {
                    var d = document.createElement("img");
                    d.src = ap(b, a, c);
                    a = d;
                    b.clientWidth / b.clientHeight < $o ? (a.style.height = "100%",
                    a.style.width = "auto") : (a.style.height = "auto",
                    a.style.width = "100%")
                }
                G(d, "video-thumbnail");
                this.element.appendChild(d)
            }
            jI.D.show.call(this)
        }
    }
    ;
    function kI(a, b, c, d) {
        T.call(this);
        this.Q = d;
        this.b = this.a = null;
        this.I = c;
        this.P = new Fp(Hf("REMOTE_PLAYER_RECONNECT_TIME"),["formatted_time"]);
        this.A = new Fp(Hf("REMOTE_CONNECTED_STATUS"),["receiver_name"]);
        this.F = new Fp(Hf("REMOTE_CONNECTING_STATUS"),["receiver_name"]);
        this.K = new Fp(Hf("REMOTE_ERROR_STATUS"),["receiver_name"]);
        this.j = this.F;
        this.g = this.u = this.k = this.i = null;
        this.J = "";
        this.o = null;
        this.k = D("ytp-remote-display-container", b);
        this.i = D("html5-remote-display-status-bar", b);
        lI(this);
        b = D("html5-remote-display-error", b);
        b.innerHTML = "";
        c = dd("div");
        b.appendChild(c);
        G(c, "html5-remote-display-error-icon");
        this.u = dd("div");
        b.appendChild(this.u);
        this.g = new vp(this.Q,"ytp-button-remote-reconnect");
        this.g.wa(Hf("REMOTE_PLAYER_RECONNECT_BUTTON"));
        this.g.X(b);
        this.J = N(this.g, "click", t(this.B, this, "reconnectclicked"));
        this.o = new jI(a.a.N().Tb);
        this.o.X(this.k);
        this.o.show(a.a.getVideoData());
        O(this, this.o);
        this.a = new hI;
        this.a.X(this.k);
        this.a.hide();
        O(this, this.a);
        this.b = new bw;
        G(this.b.element, "html5-center-overlay");
        G(this.b.element, "html5-center-transform");
        this.b.X(this.k);
        this.b.show();
        O(this, this.b)
    }
    v(kI, T);
    kI.prototype.H = function() {
        Tf(this.J);
        this.i.innerHTML = "";
        kI.D.H.call(this);
        this.o = this.i = this.a = null
    }
    ;
    function mI(a) {
        a.j = a.F;
        lI(a);
        nI(a, !1);
        a.a.hide();
        a.b.show()
    }
    function dI(a) {
        a.j = a.A;
        lI(a);
        nI(a, !1);
        a.a.hide();
        a.b.show()
    }
    function fI(a, b) {
        a.j = a.K;
        lI(a);
        a.a.hide();
        a.b.hide();
        a.g.hide();
        a.u.innerHTML = b;
        nI(a, !0)
    }
    function nI(a, b) {
        I(a.k, "ytp-remote-error", b)
    }
    function oI(a, b) {
        fI(a, Jp(a.P, {
            formatted_time: Ep(b / 1E3)
        }));
        a.g.show()
    }
    function lI(a) {
        if (a.i) {
            a.i.innerHTML = Jp(a.j, {
                receiver_name: '<span class="mdx-receiver"></span>'
            }, void 0, !0);
            var b = D("mdx-receiver", a.i);
            md(b, a.I)
        }
    }
    ;function pI() {
        this.a = {};
        this.g = {}
    }
    v(pI, sv);
    da(pI);
    f = pI.prototype;
    f.fj = "button";
    f.tc = null;
    f.register = function() {
        tv(this, "click", this.wy);
        tv(this, "keydown", this.uy);
        tv(this, "keypress", this.vy)
    }
    ;
    f.wy = function(a) {
        a && !a.disabled && (qI(this, a),
        this.click(a))
    }
    ;
    f.uy = function(a, b, c) {
        if (!(c.altKey || c.ctrlKey || c.shiftKey) && (b = rI(this, a))) {
            var d = function(a) {
                var b = "";
                a.tagName && (b = a.tagName.toLowerCase());
                return "ul" == b || "table" == b
            };
            if (d = d(b) ? b : nd(b, d)) {
                var d = d.tagName.toLowerCase(), e;
                "ul" == d ? e = this.yy : "table" == d && (e = this.xy);
                e && sI(this, a, b, c, t(e, this))
            }
        }
    }
    ;
    function sI(a, b, c, d, e) {
        var g = To(c)
          , h = 9 == d.keyCode;
        if (h || 32 == d.keyCode || 13 == d.keyCode)
            if (d = tI(a, c)) {
                if (void 0 != d.firstElementChild)
                    b = d.firstElementChild;
                else
                    for (b = d.firstChild; b && 1 != b.nodeType; )
                        b = b.nextSibling;
                "a" == b.tagName.toLowerCase() ? window.location = b.href : Zf(b, "click")
            } else
                h && uI(a, b);
        else
            g ? 27 == d.keyCode ? (tI(a, c),
            uI(a, b)) : e(b, c, d) : (a = ef(b, $(a, "reverse")) ? 38 : 40,
            d.keyCode == a && (Zf(b, "click"),
            d.preventDefault()))
    }
    f.vy = function(a, b, c) {
        c.altKey || c.ctrlKey || c.shiftKey || (a = rI(this, a),
        To(a) && c.preventDefault())
    }
    ;
    function tI(a, b) {
        var c = $(a, "menu-item-highlight")
          , d = D(c, b);
        d && H(d, c);
        return d
    }
    function vI(a, b, c) {
        G(c, $(a, "menu-item-highlight"));
        b.setAttribute("aria-activedescendant", c.getAttribute("id"))
    }
    f.xy = function(a, b, c) {
        var d = tI(this, b);
        b = qf("table", b);
        var e = qf("tr", b)
          , e = Vc("td", null, e).length;
        b = Vc("td", null, b);
        d = wI(d, b, e, c);
        -1 != d && (vI(this, a, b[d]),
        c.preventDefault())
    }
    ;
    f.yy = function(a, b, c) {
        if (40 == c.keyCode || 38 == c.keyCode) {
            var d = tI(this, b);
            b = Vc("li", null, b);
            d = wI(d, b, 1, c);
            vI(this, a, b[d]);
            c.preventDefault()
        }
    }
    ;
    function wI(a, b, c, d) {
        var e = b.length;
        a = Pa(b, a);
        if (-1 == a)
            if (38 == d.keyCode)
                a = e - c;
            else {
                if (37 == d.keyCode || 38 == d.keyCode || 40 == d.keyCode)
                    a = 0
            }
        else
            39 == d.keyCode ? (a % c == c - 1 && (a -= c),
            a += 1) : 37 == d.keyCode ? (0 == a % c && (a += c),
            a -= 1) : 38 == d.keyCode ? (a < c && (a += e),
            a -= c) : 40 == d.keyCode && (a >= e - c && (a -= e),
            a += c);
        return a
    }
    function xI(a, b) {
        var c = b.iframeMask;
        c || (c = document.createElement("iframe"),
        c.src = 'javascript:""',
        c.className = $(a, "menu-mask"),
        b.iframeMask = c);
        return c
    }
    function yI(a, b, c, d) {
        var e = sd(b, $(a, "group"))
          , g = !!K(b, "button-menu-ignore-group")
          , e = e && !g ? e : b
          , g = 5
          , h = 4
          , k = Sd(b);
        if (ef(b, $(a, "reverse"))) {
            g = 4;
            h = 5;
            k = k.top + "px";
            try {
                c.style.maxHeight = k
            } catch (m) {}
        }
        ef(b, "flip") && (ef(b, $(a, "reverse")) ? (g = 6,
        h = 7) : (g = 7,
        h = 6));
        var p;
        K(b, "button-has-sibling-menu") ? p = Ed(e) : K(b, "button-menu-root-container") && (p = zI(b));
        C && !Cc("8") && (p = null);
        var s;
        p && (s = Sd(p),
        s = new Eb(-s.top,s.left,s.top,-s.left));
        p = new A(0,1);
        ef(b, $(a, "center-menu")) && (p.x -= Math.round((Qd(c).width - Qd(b).width) / 2));
        d && (p.y += Zc(document).y);
        if (a = xI(a, b))
            b = Qd(c),
            a.style.width = b.width + "px",
            a.style.height = b.height + "px",
            jv(e, g, a, h, p, s),
            d && Yo(a, "position", "fixed");
        jv(e, g, c, h, p, s)
    }
    function zI(a) {
        if (K(a, "button-menu-root-container")) {
            var b = K(a, "button-menu-root-container");
            return sd(a, b)
        }
        return document.body
    }
    f.Ep = function(a) {
        if (a) {
            var b = rI(this, a);
            if (b) {
                a.setAttribute("aria-pressed", "true");
                a.setAttribute("aria-expanded", "true");
                b.originalParentNode = b.parentNode;
                b.activeButtonNode = a;
                b.parentNode.removeChild(b);
                var c;
                c = K(a, "button-has-sibling-menu") ? a.parentNode : zI(a);
                c.appendChild(b);
                b.style.minWidth = a.offsetWidth - 2 + "px";
                var d = xI(this, a);
                d && c.appendChild(d);
                c = !!K(a, "button-menu-fixed");
                yI(this, a, b, c);
                Uo(b);
                this.b(a, "button-menu-action", !0);
                G(a, $(this, "active"));
                b = t(this.xp, this, a, !1);
                c = t(this.xp, this, a, !0);
                d = this.tc && ld(rI(this, this.tc), a);
                this.tc && !d && this.tc && uI(this, this.tc);
                d = mf(a).toString();
                this.g[d] = [N(document, "click", c), N(document, "contextmenu", b)];
                this.tc = a
            }
        }
    }
    ;
    function uI(a, b) {
        if (b) {
            var c = rI(a, b);
            if (c) {
                a.tc = null;
                b.setAttribute("aria-pressed", "false");
                b.setAttribute("aria-expanded", "false");
                b.removeAttribute("aria-activedescendant");
                Vo(c);
                a.b(b, "button-menu-action", !1);
                var d = xI(a, b);
                L(function() {
                    d && d.parentNode && d.parentNode.removeChild(d);
                    c.originalParentNode && (c.parentNode.removeChild(c),
                    c.originalParentNode.appendChild(c),
                    c.originalParentNode = null,
                    c.activeButtonNode = null)
                }, 1)
            }
            var e = sd(b, $(a, "group"))
              , g = [$(a, "active")];
            e && g.push($(a, "group-active"));
            gf(b, g);
            e = mf(b).toString();
            Tf(a.g[e]);
            delete a.g[e]
        }
    }
    function AI(a, b) {
        var c = rI(a, b);
        c && yI(a, b, c)
    }
    function BI(a, b) {
        return rI(a, b)
    }
    f.xp = function(a, b, c) {
        c = c || window.event;
        c = c.target || c.srcElement;
        3 == c.nodeType && (c = c.parentNode);
        var d = sd(c, $(this));
        if (d) {
            var d = rI(this, d)
              , e = rI(this, a);
            if (d == e)
                return
        }
        var d = sd(c, $(this, "menu"))
          , e = d == rI(this, a)
          , g = ef(c, $(this, "menu-item"))
          , h = ef(c, $(this, "menu-close"));
        if (!d || e && (g || h))
            if (uI(this, a),
            d && b && K(a, "button-menu-indicate-selected")) {
                if (a = D($(this, "content"), a))
                    Ic && "innerText"in c ? b = c.innerText.replace(/(\r\n|\r|\n)/g, "\n") : (b = [],
                    rd(c, b, !0),
                    b = b.join("")),
                    b = b.replace(/ \xAD /g, " ").replace(/\xAD/g, ""),
                    b = b.replace(/\u200B/g, ""),
                    Ic || (b = b.replace(/ +/g, " ")),
                    " " != b && (b = b.replace(/^\s*/, "")),
                    md(a, b);
                a = $(this, "menu-item-selected");
                (b = D(a, d)) && H(b, a);
                G(c.parentNode, a)
            }
    }
    ;
    function rI(a, b) {
        if (!b.widgetMenu) {
            var c = K(b, "button-menu-id")
              , c = c && Tc(c)
              , d = $(a, "menu");
            c ? ff(c, [d, $(a, "menu-external")]) : c = D(d, b);
            b.widgetMenu = c
        }
        return b.widgetMenu
    }
    function qI(a, b) {
        if (K(b, "button-toggle")) {
            var c = sd(b, $(a, "group"));
            if (c && K(c, "button-toggle-group")) {
                var d = K(c, "button-toggle-group")
                  , c = Uc($(a), c)
                  , e = $(a, "toggled")
                  , g = ef(b, e);
                x(c, function(a) {
                    a != b || "optional" == d && g ? H(a, e) : G(b, e)
                })
            } else
                hf(b, $(a, "toggled"))
        }
    }
    f.click = function(a) {
        if (rI(this, a)) {
            var b = rI(this, a)
              , c = sd(b.activeButtonNode || b.parentNode, $(this));
            c && c != a ? (uI(this, c),
            L(t(this.Ep, this, a), 1)) : To(b) ? uI(this, a) : this.Ep(a);
            a.focus()
        }
        this.b(a, "button-action")
    }
    ;
    function CI(a) {
        T.call(this);
        this.j = this.g = "";
        this.i = null;
        this.k = a;
        this.a = this.b = null;
        DI(this, a)
    }
    v(CI, T);
    CI.prototype.H = function() {
        Tf(this.g);
        Tf(this.j)
    }
    ;
    function EI(a, b) {
        var c = "";
        x(b, function(a) {
            c += Jp(this.i, {
                receiver_key: a.key,
                receiver_name: a.name
            })
        }, a);
        a.a.innerHTML = c;
        AI(pI.getInstance(), a.k)
    }
    function FI(a, b) {
        var c = D("active", a.a);
        if (c) {
            if (K(c, "value") == b)
                return;
            gf(c, ["active", "selected"])
        }
        (c = a.a.querySelector('[data-value="' + b + '"]')) && ff(c, ["active", "selected"])
    }
    function DI(a, b) {
        a.b = BI(pI.getInstance(), b);
        var c = D("html5-remote-receiver-template", a.b);
        a.i = Ip(c, ["receiver_key", "receiver_name"]);
        a.a = D("html5-remote-receivers", a.b);
        a.a.innerHTML = "";
        a.g = Xf(a.b, "click", t(a.o, a), "yt-uix-button-menu-item");
        a.j = N(b, "click", t(function() {
            this.B("menushown")
        }, a))
    }
    CI.prototype.o = function(a) {
        (a = a.currentTarget) && "remote-select-receiver" == K(a, "action") && (a = K(a, "value"),
        FI(this, a),
        this.B("selectreceiver", a))
    }
    ;
    function GI(a) {
        My.call(this, a);
        var b = S(this.a);
        this.J = a.ea.j;
        this.k = {
            key: lg(),
            name: Hf("REMOTE_LOCAL_SCREEN")
        };
        this.g = this.j = null;
        this.I = [];
        this.A = this.F = NaN;
        this.b = new jH("Desktop","youtube-desktop");
        this.I.push(N(window, "beforeunload", t(this.jr, this)));
        this.b.b = this;
        a = this.b;
        a.k = Qg("yt-remote-delayed-connect-key");
        if (a.k)
            a.log_("Connecting with the delayed connect data: " + ub(a.k)),
            a.connect({
                key: a.k.key
            }),
            Rg("yt-remote-delayed-connect-key");
        else {
            var c = mH();
            c ? c.tb == a.i ? a.log_("Skipping connecting because current connection exists.") : (a.log_("Resuming MDx session: " + gg(c)),
            rH(a, c),
            a.g.connect({}, 0, eh()),
            a.a = new cH,
            yH(a)) : (lh(),
            a.log_("Skipping connecting because no session screen found."))
        }
        this.u = new CI(D("html5-remote-button", b));
        this.u.G("selectreceiver", this.um, this);
        O(this, this.u);
        this.i = this.k;
        this.eg()
    }
    v(GI, My);
    var HI = ["play_pause", "seek"]
      , II = ["captions"];
    f = GI.prototype;
    f.pa = "remote";
    f.dd = "remote";
    f.eb = function() {
        return this.app.I.N().lg
    }
    ;
    f.create = function() {
        GI.D.create.call(this);
        var a = this.b
          , b = this.Tn;
        nH(a, b, this);
        a.G("connectionOpened", b, this);
        a.G("connectionClosed", b, this);
        a.G("connectionError", b, this);
        DF.getInstance().G("onlineReceiverChange", this.eg, this);
        "detailpage" == this.app.I.N().Z && (this.A = Rv("yt-remote-cast-device-tab-projected", this.um, this));
        this.eg();
        this.i != this.k && 3 < this.a.app.o && this.load()
    }
    ;
    f.jr = function() {
        wH(this.b)
    }
    ;
    function JI(a) {
        nH(a.b, a.Tn, a);
        DF.getInstance().ba("onlineReceiverChange", a.eg, a);
        Tv(a.A);
        a.A = NaN
    }
    f.destroy = function() {
        var a = this.u;
        uI(pI.getInstance(), a.k);
        JI(this);
        GI.D.destroy.call(this)
    }
    ;
    f.load = function() {
        if (!this.aa) {
            GI.D.load.call(this);
            this.eg();
            var a = D("html5-remote-module", S(this.a));
            this.g = new kI(this,a,this.i.name,this.J);
            this.g.G("reconnectclicked", this.dn, this);
            this.j = new WH(this,this.b);
            aI(this.j, this.a.Eh("captions", "track"));
            this.a.Uj();
            this.B("command_redirect_controls", this, HI, II);
            var b = tH(this.b);
            0 != b && L(t(function() {
                bI(this.j, b)
            }, this), 0);
            MH(this.b);
            this.aa = !0
        }
    }
    ;
    f.unload = function() {
        this.aa && (this.aa = !1,
        KI(this, this.k),
        this.rb(!1),
        uo(this),
        this.g.ba("reconnectclicked", this.dn, this),
        cI(this),
        qh(this.j, this.g),
        this.g = this.j = null,
        GI.D.unload.call(this))
    }
    ;
    f.H = function() {
        Tf(this.I);
        this.I.length = 0;
        JI(this);
        this.b.b = null;
        cI(this);
        qh(this.j, this.g);
        this.g = this.j = null;
        GI.D.H.call(this)
    }
    ;
    function xH(a) {
        return a.a.getVideoData().L
    }
    function NH(a) {
        return a.a.zb() ? a.a.getVideoData().Pa : ""
    }
    function OH(a) {
        var b = NH(a);
        if (b) {
            b = b.substr(0, 2);
            a = fo(a.a.zb());
            for (var c = [], d = 0; d < a; d++)
                c[d] = b;
            b = c
        } else
            b = ["VI"];
        return b
    }
    function PH(a) {
        return (a = a.a.zb()) ? a.xa : 0
    }
    f.Tn = function() {
        cI(this);
        this.aa && JH(this.b) ? LI(this) : GH(this.b) ? this.load() : this.unload()
    }
    ;
    f.dn = function() {
        var a = this.b;
        JH(a) && (a = a.g.b,
        a.enabled && (a.stop(),
        a.start(),
        a.k()));
        mI(this.g)
    }
    ;
    f.je = function(a, b) {
        this.j.yx.apply(this.j, arguments)
    }
    ;
    f.um = function(a) {
        if (this.i.key != a)
            if (this.k.key == a) {
                var b = GH(this.b);
                a = !!b && 1 == b.a && eH(b) == this.a.getVideoData().L;
                b = b ? gH(b) : 0;
                this.i = this.k;
                this.b.disconnect();
                this.unload();
                a && (this.a.wg(b),
                this.a.playVideo())
            } else if (a = mg(mh(), a))
                KI(this, a),
                this.b.connect(a),
                this.load()
    }
    ;
    function KI(a, b) {
        var c = a.i;
        (c || b ? c && b && c.key == b.key : 1) || (a.i = b,
        FI(a.u, b.key))
    }
    f.eg = function() {
        var a = mh();
        this.i = FH(this.b, a) || this.k;
        a.unshift(this.k);
        EI(this.u, a);
        FI(this.u, this.i.key);
        this.g && (a = this.g,
        a.I = this.i.name,
        lI(a))
    }
    ;
    function LI(a) {
        cI(a);
        JH(a.b) ? (oI(a.g, bH(a.b.g)),
        a.F = L(t(function() {
            LI(this)
        }, a), 1E3)) : mI(a.g)
    }
    function cI(a) {
        M(a.F);
        a.F = NaN
    }
    f.rb = function(a) {
        cI(this);
        var b = this.g;
        b.j = b.A;
        lI(b);
        nI(b, !1);
        b.b.hide();
        b.a.show();
        b.a.setIcon(a ? "html5-bezel-pause" : "html5-bezel-play");
        GI.D.rb.call(this, a)
    }
    ;
    function MI() {
        Y.call(this, ["div", "html5-video-info-panel", ["span", "html5-video-info-panel-close", {
            role: "button",
            title: "close"
        }, "[x]"], ["div", "html5-video-info-panel-content", ["table", "html5-video-info-table", ["tr", "", ["th", "", "Video ID:"], ["td", "", "{{video_id}}"]], ["tr", "", ["th", "", "Dimensions:"], ["td", "", "{{dimensions}}"]], ["tr", "", ["th", "", "Resolution:"], ["td", "", "{{resolution}}"]], ["tr", "", ["th", "", "Volume:"], ["td", "", "{{volume}}"]], ["tr", "", ["th", "", "Stream Type:"], ["td", "", "{{stream_type}}"]], ["tr", "", ["th", "", "Mime Type:"], ["td", "", "{{mime}}"]], ["tr", "", ["th", "", "DASH:"], ["td", "", "{{dash}}"]], ["tr", "", ["th", "", "DRM:"], ["td", "", "{{drm}}"]]], ["table", ["html5-video-info-table", "html5-video-element-info-table"], ["tr", "", ["th", "", "Decoded Frames"], ["th", "", "Dropped Frames"], ["th", "", "Parsed Frames"], ["th", "", "Presented Frames"]], ["tr", "", ["td", "", "{{decoded_frames}}"], ["td", "", "{{dropped_frames}}"], ["td", "", "{{parsed_frames}}"], ["td", "", "{{presented_frames}}"]], ["tr", "", ["th", "", "Video Bytes Decoded"], ["th", "", "Audio Bytes Decoded"], ["th", "", "Painted Frames"], ["th", "", "Paint Delay"]], ["tr", "", ["td", "", "{{video_bytes_decoded}}"], ["td", "", "{{audio_bytes_decoded}}"], ["td", "", "{{painted_frames}}"], ["td", "", "{{paint_delay}}"]]]]]);
        this.a = this.template.a["html5-video-info-panel-close"]
    }
    v(MI, Y);
    MI.prototype.update = function(a) {
        a.dimensions = a.video_element_width + " x " + a.video_element_height;
        a.resolution = a.video_width + " x " + a.video_height;
        a.volume += "%";
        a.drm = a.drm_flavor + " / " + a.drm_key_system;
        this.template.update(a)
    }
    ;
    MI.prototype.H = function() {
        this.a = null;
        MI.D.H.call(this)
    }
    ;
    function NI(a) {
        T.call(this);
        this.app = a;
        this.g = this.a = this.V = null;
        this.K = new Hb(0,0,0,0);
        this.b = null;
        this.la = new Hb(0,0,0,0);
        this.I = this.$ = null;
        this.Xa = this.xb = 0;
        this.ra = this.R = null;
        a = a.N();
        this.lb = kl() || "blazer" == a.cb;
        this.Oa = 0;
        this.j = this.k = null;
        this.Na = 0;
        this.mk()
    }
    v(NI, T);
    var OI = null;
    f = NI.prototype;
    f.mk = function() {
        this.app.G("initializingmode", this.Nx, this);
        this.app.G("videodatachange", this.Ll, this)
    }
    ;
    f.Nx = function() {
        this.la = new Hb(0,0,0,0);
        this.K = new Hb(0,0,0,0)
    }
    ;
    f.Vj = function() {
        var a = Tc(this.V);
        (a = ef(a, "html5-video-player") ? a : D("html5-video-player", a)) || (a = OI || D("html5-video-player"));
        if (!a)
            return !1;
        PI(this, a);
        this.B("templateready");
        return !0
    }
    ;
    function PI(a, b) {
        OI = b.cloneNode(!0);
        a.a = b;
        a.a.setAttribute("id", a.app.J.attrs.id);
        var c = Tc(a.V);
        c != a.a && c.appendChild(a.a);
        (c = Tc("html5-player-messages")) && x(c.children, function(a) {
            try {
                var b = JSON.parse(a.innerHTML);
                Gf(a.id, b)
            } catch (c) {
                Gf(a.id, a.innerHTML)
            }
        })
    }
    f.addClass = function(a) {
        ff(this.a, arguments)
    }
    ;
    f.removeClass = function(a) {
        gf(this.a, arguments)
    }
    ;
    f.qj = function() {
        this.Yk();
        var a = this.app.N()
          , b = this.a;
        this.addClass("autohide-aspect");
        this.addClass("ps-" + a.cb);
        I(b, "html5-native-controls", a.Vb);
        I(b, "html5-mobile", a.Tb);
        a.te || this.addClass("html5-chromeless");
        a.Hb || this.addClass("tag-pool-enabled");
        b.style.display = "";
        this.g = D("html5-video-container", b);
        this.$ = D("html5-video-content", b);
        this.I = D("html5-video-controls", b);
        this.k = new MI;
        this.k.X(b);
        N(this.k.a, "click", t(this.Bk, this));
        O(this, this.k);
        this.lb ? this.R = N(window, "resize", t(this.Ig, this)) : Hv() ? this.R = Df(t(this.Jv, this), 250) : this.R = Df(t(this.Ig, this), 250)
    }
    ;
    f.Mi = function(a) {
        a ? Lo(this.I) : Mo(this.I)
    }
    ;
    f.Jv = function() {
        Lv(this.Na);
        var a = t(this.Ig, this);
        this.Na = Iv(a, 1, void 0)
    }
    ;
    f.Ig = function() {
        Fb(this.Pc(), Kb(this.K)) || this.resize()
    }
    ;
    f.resize = function() {
        if (this.b) {
            var a = this.Pc();
            if (!a.isEmpty()) {
                var b, c = QI(this), d = this.Pc();
                b = 1;
                var e = RI(this), g = !1, h;
                e ? (h = SI(this, d, c, e, !1),
                b = h.width / h.height / Gb(c),
                0.001 > Math.abs(b - 1) && (b = 1),
                h = new Hb(h.left + h.width / 2 * (1 - 1 / b),h.top,h.width / b,h.height)) : h = new Hb(0,0,d.width,d.height);
                Jb(this.la, h) || (this.la = h,
                Md(this.b, Kb(h)),
                Bd(this.b, new A(h.left,h.top)),
                g = !0);
                c = SI(this, d, c, e);
                Jb(this.K, c) || (this.K = c,
                Md(this.$, c.width, c.height),
                Bd(this.$, c.left, c.top),
                g = !0);
                Yo(this.b, "transform", 1 == b ? "none" : "scaleX(" + b + ")");
                b = g;
                if (g = !Fb(a, Kb(this.K)))
                    this.K.width = a.width,
                    this.K.height = a.height,
                    this.Jl(a);
                (b || g) && this.B("resize")
            }
        }
    }
    ;
    f.Jl = function() {}
    ;
    f.Wj = function() {}
    ;
    f.Ll = function(a, b) {
        this.b.setAttribute("data-youtube-id", b.L);
        Pj && (b.title ? this.b.setAttribute("title", b.title) : this.b.removeAttribute("title"));
        b.Cl && (this.b.poster = b.Cl);
        var c = Pn(b, "yt:bgcolor");
        this.g.style.backgroundColor = c ? c : "";
        this.xb = Jm(Pn(b, "yt:stretch"));
        c = Pn(b, "yt:crop");
        this.Xa = "fullwidth" == c ? Infinity : Jm(c)
    }
    ;
    f.Rj = function() {}
    ;
    f.Pp = function() {}
    ;
    f.No = function() {}
    ;
    function TI(a) {
        return a.a ? new B(a.a.clientWidth,a.a.clientHeight) : new B(0,0)
    }
    f.Pc = function() {
        return this.g ? new B(this.g.clientWidth,this.g.clientHeight) : new B(0,0)
    }
    ;
    function Bx(a) {
        return a.b ? new B(a.b.clientWidth,a.b.clientHeight) : new B(0,0)
    }
    function QI(a) {
        return a.b ? new B(a.b.videoWidth,a.b.videoHeight) : new B(0,0)
    }
    function UI(a) {
        return SI(a, a.Pc(), QI(a), RI(a), void 0)
    }
    function SI(a, b, c, d, e) {
        c.isEmpty() ? d = b : d ? (c = a.xb || VI(c),
        a = a.Xa || c,
        d = VI(b),
        d = a > d ? new B(b.width,b.width / (isFinite(a) ? a : c)) : a < d ? new B(b.height * a,b.height) : b.clone(),
        e || (c > a ? d.width = d.height * c : c < a && (d.height = d.width / c))) : (e = c.clone(),
        d = e.scale(Gb(e) > Gb(b) ? b.width / e.width : b.height / e.height));
        return new Hb((b.width - d.width) / 2,(b.height - d.height) / 2,d.width,d.height)
    }
    function VI(a) {
        var b = 16 / 9;
        return 1 > Math.abs(b * a.height - a.width) || 1 > Math.abs(b / a.width - a.height) ? b : Gb(a)
    }
    function RI(a) {
        return !a.app.N().Vb && !QI(a).isEmpty()
    }
    f.Sj = function() {}
    ;
    function ai(a) {
        a.k && (a.k.show(),
        a.Np(),
        Ef(a.Oa),
        a.Oa = Df(t(a.Np, a), 500))
    }
    f.Np = function() {
        var a = Q(this.app)
          , b = this.app.getVideoData()
          , c = this.app.fk()
          , d = this.b
          , c = {
            video_id: b.L,
            video_width: d.videoWidth,
            video_height: d.videoHeight,
            video_element_width: d.clientWidth,
            video_element_height: d.clientHeight,
            dash: "no",
            mime: "",
            drm_flavor: "",
            drm_key_system: "",
            volume: Math.round(this.app.Ba.volume),
            stream_type: this.app.N().protocol,
            decoded_frames: c.hmewdfc || c.hmemdf || "-",
            dropped_frames: c.hmewdrop || "-",
            parsed_frames: c.hmempf || "-",
            presented_frames: c.hmempresented || "-",
            video_bytes_decoded: c.hmewvdbc || "-",
            audio_bytes_decoded: c.hmewadbc || "-",
            painted_frames: c.hmempainted || "-",
            paint_delay: c.hmempaintdelay || "-"
        };
        b.a && (d = b.a,
        c.dash = d.i && d.g ? "no" : "yes",
        c.mime = b.a.Sc);
        if (a = a.u ? a.u.b : null)
            c.drm_flavor = a.b,
            c.drm_key_system = a.a;
        this.k.update(c)
    }
    ;
    f.Bk = function(a) {
        a && a.stopPropagation();
        this.k && (Ef(this.Oa),
        this.k.hide())
    }
    ;
    f.Yk = function() {
        this.j = new ep;
        this.j.b = this
    }
    ;
    f.H = function() {
        this.R && (this.lb ? Tf(this.R) : Ef(this.R));
        this.ra && Tf(this.ra);
        this.Bk();
        this.k && Yf(this.k.a);
        F(this.a);
        this.I = this.$ = this.b = this.g = this.a = this.V = null;
        Lv(this.Na);
        NI.D.H.call(this)
    }
    ;
    function WI() {
        this.a = [];
        this.b = []
    }
    da(WI);
    var up = n("yt.player.utils.VideoTagPool.instance_") || WI.getInstance();
    ba("yt.player.utils.VideoTagPool.instance_", up, void 0);
    f = WI.prototype;
    f.Ly = function(a) {
        if (!(this.a.length >= a)) {
            a -= this.a.length;
            for (var b = 0; b < a; b++) {
                var c = XI(this);
                this.a.push(c)
            }
        }
    }
    ;
    function XI(a) {
        var b = document.createElement("video");
        ra(b, Uj);
        N(b, "loadeddata", t(b.Sw, b));
        N(b, "volumechange", t(b.Tw, b));
        N(b, "timeupdate", t(b.Qk, b));
        Fj && 6 <= Kj && N(b, "webkitbeginfullscreen", t(b.play, b));
        Vj(b);
        if (a.b.length) {
            var c = a.b[0];
            b.setVolume(100 * c.volume, c.muted)
        }
        a.b.push(b);
        N(b, "volumechange", t(a.Uw, a));
        return b
    }
    f.Uw = function(a) {
        a = a.target;
        var b = a.volume
          , c = a.muted;
        x(this.a, function(a) {
            a.volume = b;
            a.muted = c
        })
    }
    ;
    f.Sy = function() {
        return this.a.length ? this.a.pop() : XI(this)
    }
    ;
    f.Qy = function(a) {
        a && y(this.b, a) && (Zj(a),
        Yf(a),
        ab(this.b, a))
    }
    ;
    f.Ny = function(a) {
        return this.a.length >= (a || 1)
    }
    ;
    WI.prototype.fillPool = WI.prototype.Ly;
    WI.prototype.getTag = WI.prototype.Sy;
    WI.prototype.releaseTag = WI.prototype.Qy;
    WI.prototype.hasTags = WI.prototype.Ny;
    function YI(a, b, c, d) {
        if (this.g = !!c)
            this.kl = Math.max(800, this.kl);
        this.element = a;
        this.A = b;
        this.k = d;
        ZI ? a.ontouchstart = t(this.Qw, this) : a.onmousedown = t(this.Pw, this);
        a.onclick = t(this.jo, this)
    }
    var ZI = "ontouchstart"in document
      , $I = []
      , aJ = !1;
    function bJ() {
        ZI && !aJ && (aJ = !0,
        document.addEventListener("click", function(a) {
            for (var b = new A(a.clientX,a.clientY), c = 0, d; d = $I[c]; c++)
                if (25 > Cb(d, b)) {
                    a.stopPropagation();
                    a.preventDefault();
                    $I.splice(c, 1);
                    break
                }
        }, !0))
    }
    function cJ(a) {
        $I.push(a);
        window.setTimeout(function() {
            var b = $I.indexOf(a);
            -1 != b && $I.splice(b, 1)
        }, 2500)
    }
    f = YI.prototype;
    f.kl = 1E3;
    f.Qw = function(a) {
        if (!(1 < a.touches.length || a._stop)) {
            this.a = a._stop = !0;
            this.g || (this.element.ontouchend = t(this.jo, this),
            document.body.addEventListener("touchend", dJ(this), !1));
            document.body.addEventListener("touchmove", eJ(this), !1);
            document.body.addEventListener("touchcancel", dJ(this), !1);
            fJ(this, a);
            this.F = window.setTimeout(t(this.ni, this, !0), 100);
            var b = a.touches[0];
            this.b = new A(b.clientX,b.clientY);
            this.g || this.k && !this.k(a) || cJ(this.b)
        }
    }
    ;
    f.Pw = function(a) {
        a.stopPropagation();
        this.a = !0;
        fJ(this, a);
        this.ni(!0)
    }
    ;
    f.jo = function(a) {
        "touchend" == a.type && !this.a || a._stop || (a._stop = !0,
        this.ni(!0),
        window.setTimeout(t(function() {
            this.Ci();
            this.A(a)
        }, this), 0))
    }
    ;
    f.vx = function(a) {
        1 < a.touches.length ? this.Ci() : (a = a.touches[0],
        a = new A(a.clientX,a.clientY),
        this.b && 12 < Cb(this.b, a) && this.Ci())
    }
    ;
    function eJ(a) {
        a.i || (a.i = t(a.vx, a));
        return a.i
    }
    f.Ci = function() {
        window.clearTimeout(this.F);
        window.clearTimeout(this.C);
        this.ni(!1);
        this.a = !1;
        document.body.removeEventListener("touchmove", eJ(this), !1);
        document.body.removeEventListener("touchend", dJ(this), !1);
        document.body.removeEventListener("touchcancel", dJ(this), !1)
    }
    ;
    function dJ(a) {
        a.j || (a.j = t(a.Ci, a));
        return a.j
    }
    f.ni = function(a) {
        this.u && Pc(this.element, this.u, a)
    }
    ;
    function fJ(a, b) {
        a.o && (a.C = window.setTimeout(t(function() {
            this.a = !1;
            this.o(b)
        }, a), a.kl))
    }
    ;function gJ(a, b) {
        var c, d;
        d || (d = 0);
        c || (c = Fd(document.body));
        var e = new A(Nf(b),Of(b));
        lv(e, a, d, null, c, 5)
    }
    ;function hJ() {
        this.a = new Ao(this)
    }
    v(hJ, nh);
    f = hJ.prototype;
    f.Gj = null;
    f.Ae = null;
    f.Hj = null;
    f.dj = null;
    f.Be = null;
    f.Xq = function(a) {
        a.stopPropagation();
        this.hide()
    }
    ;
    f.Yq = function(a) {
        a.stopPropagation()
    }
    ;
    function iJ(a, b) {
        To(a.Be) && a.hide();
        a.dj && H(a.Be, a.dj);
        a.dj = "html5-modal-panel-clipboard-substitute";
        G(a.Be, a.dj);
        a.show();
        a.Ae.value = b;
        a.Ae.focus();
        L(t(a.Am, a), 100)
    }
    f.hide = function() {
        Vo(this.Be);
        Uv("panelhidden")
    }
    ;
    f.Zq = function(a) {
        27 == a.keyCode && this.hide()
    }
    ;
    f.Am = function(a) {
        a && a.stopPropagation();
        this.Ae.select()
    }
    ;
    f.show = function() {
        Uo(this.Be)
    }
    ;
    f.H = function() {
        this.a.removeAll();
        this.Ae = this.Gj = this.Hj = this.Be = null;
        hJ.D.H.call(this)
    }
    ;
    function jJ(a) {
        this.ca = a;
        this.ca.G("internalvideodatachange", this.ko, this);
        this.g = new Ao(this);
        this.a = new Ao(this);
        this.b = new hJ;
        O(this, this.b)
    }
    v(jJ, nh);
    f = jJ.prototype;
    f.ib = null;
    function kJ(a, b, c) {
        for (var d = Uc(Ro[b], a.ib), e = 0; e < d.length; e++)
            a.g.listen(d[e], "click", function(a) {
                a.stopImmediatePropagation();
                a.preventDefault();
                c.call(this, a);
                this.hide();
                a = b.replace("CONTEXT_MENU_", "").toLowerCase();
                lJ(this.ca, "contextmenu." + a)
            })
    }
    f.ko = function(a, b) {
        var c = D("html5-context-menu-copy-embed-html", this.ib);
        So(c, b.Oo)
    }
    ;
    f.Bm = function(a) {
        a = Ph(this.ca, a);
        iJ(this.b, a)
    }
    ;
    f.br = function() {
        var a = zf("EMBED_HTML_TEMPLATE")
          , b = zf("EMBED_HTML_URL")
          , c = TI(this.ca.ea)
          , d = this.ca.getVideoData().L
          , b = b.replace(/__videoid__/g, d)
          , a = a.replace(/__url__/g, Aa(b))
          , a = a.replace(/__width__/g, c.width)
          , a = a.replace(/__height__/g, c.height);
        iJ(this.b, a)
    }
    ;
    f.dr = function(a) {
        mJ(this.ca, a.target.getAttribute("href"))
    }
    ;
    f.er = function() {
        var a = this.ca.getVideoData()
          , b = this.ca.N()
          , c = this.ca.ea
          , d = TI(c)
          , c = Bx(c)
          , d = {
            cr: b.V,
            csipt: b.J,
            ec: 108,
            feature: b.k,
            h: c.height,
            hl: b.i,
            playerh: d.height,
            playerw: d.width,
            ptk: a.F,
            referrer: b.W,
            screenh: window.screen.height,
            screenw: window.screen.width,
            sdetail: a.na,
            sourceid: a.hd,
            vid: b.fa,
            vq: b.Ch,
            w: c.width
        };
        ra(d, this.ca.fk());
        (c = Q(this.ca)) && ra(d, c.getDebugInfo(!0));
        d.videoId && (d.v = d.videoId,
        delete d.videoId);
        b.Tb && (d.mobile = "1");
        this.ca.we("streamingerror", d);
        window.open(ez(a))
    }
    ;
    f.ar = function() {
        iJ(this.b, Qh(this.ca, !0))
    }
    ;
    f.fr = function() {
        ai(this.ca.ea)
    }
    ;
    f.ou = function(a) {
        a.preventDefault();
        To(this.ib) ? a.stopPropagation() : (gJ(this.ib, a),
        Uo(this.ib),
        this.a.listen(this.ib, "contextmenu", function(a) {
            a.preventDefault()
        }),
        a = t(function() {
            this.a.listen(window, "blur", this.hide);
            this.a.listen(document, "click", this.hide)
        }, this),
        L(a, 0),
        this.a.listen(document, "keydown", this.uw))
    }
    ;
    f.uw = function(a) {
        27 == a.keyCode && this.hide(a)
    }
    ;
    f.hide = function(a) {
        Vo(this.ib);
        this.a.removeAll();
        a && a.stopPropagation()
    }
    ;
    f.H = function() {
        this.g.removeAll();
        this.a.removeAll();
        this.ca.ba("internalvideodatachange", this.ko, this);
        this.ca = null;
        F(this.ib);
        this.ib = null;
        jJ.D.H.call(this)
    }
    ;
    function Lw(a) {
        Y.call(this, ["span"]);
        this.element.innerHTML = a
    }
    v(Lw, Y);
    function nJ(a, b) {
        zp.call(this, a, b);
        this.u = null;
        this.A = this.F = this.i = this.b = 0;
        G(this.element, "ytp-tv-static");
        this.resize(a, b)
    }
    v(nJ, zp);
    function oJ(a) {
        for (var b = Math.floor(0.6 * a), c = b; c < a; ++c) {
            for (var d = !1, e = 2; e < Math.sqrt(c); e++) {
                if (!(c % e)) {
                    d = !1;
                    break
                }
                d = !0
            }
            if (d)
                return c
        }
        return b
    }
    nJ.prototype.resize = function(a, b) {
        if (a && b) {
            this.width = this.element.width = a;
            this.height = this.element.height = b;
            var c = document.createElement("canvas");
            c.width = a;
            c.height = b;
            for (var d = c.getContext("2d"), e = d.getImageData(0, 0, a, b), g = a * b, h = 0; h < g; h++) {
                var k = 4 * h;
                e.data[k] = e.data[k + 1] = e.data[k + 2] = Math.floor(35 * Math.random());
                e.data[k + 3] = 255
            }
            d.putImageData(e, 0, 0);
            this.u = c;
            this.F = oJ(a);
            this.A = oJ(b / 10);
            this.O.scale(1.5, 1.5)
        }
    }
    ;
    nJ.prototype.show = function() {
        nJ.D.show.call(this);
        var a = this.I;
        this.C = new Date;
        this.g(a, 75)
    }
    ;
    nJ.prototype.I = function() {
        var a = 1 - 1 / 1.5;
        this.b = (this.b + this.F) % (this.width * a);
        this.i = (this.i + this.A) % (this.height * a);
        this.O.drawImage(this.u, -1 * this.b, -1 * this.i)
    }
    ;
    nJ.prototype.hide = function() {
        M(this.a);
        nJ.D.hide.call(this)
    }
    ;
    function pJ() {
        Y.call(this, ["div", ["ytp-error", "html5-stop-propagation"], ["div", "ytp-error-content", ["div", "ytp-error-content-wrap", "{{content}}"]]]);
        this.o = "table";
        this.b = [];
        if (void 0 == ym) {
            var a = document.createElement("canvas");
            ym = !(!a.getContext || !a.getContext("2d"))
        }
        ym && (this.a = new nJ(1,1),
        this.a.X(this.element, 0),
        O(this, this.a))
    }
    v(pJ, Y);
    pJ.prototype.show = function() {
        pJ.D.show.call(this);
        this.resize();
        this.a && this.a.show()
    }
    ;
    pJ.prototype.hide = function() {
        pJ.D.hide.call(this);
        this.a && this.a.hide()
    }
    ;
    pJ.prototype.resize = function() {
        this.a && this.a.resize(this.element.clientWidth, this.element.clientHeight)
    }
    ;
    pJ.prototype.H = function() {
        Tf(this.b);
        this.b = [];
        pJ.D.H.call(this)
    }
    ;
    function qJ(a, b) {
        Y.call(this, ["div", ["ytp-interstitial", "html5-stop-propagation"], ["div", "ytp-interstitial-content", ["div", "ytp-error-content-wrap", "{{content}}"], ["button", "yt-uix-button ytp-interstitial-button", "{{ok}}"]]]);
        Jo(this.template, "content", b);
        Jo(this.template, "ok", Z("YTP_DISMISS"));
        this.o = "table"
    }
    v(qJ, Y);
    function rJ(a, b) {
        var c = ["ytp-large-play-button", "html5-center-overlay", "ytp-scalable-icon-shrink"], d;
        b && c.push("ytp-housebrand-large-play-button");
        a ? b ? c.push("ytp-housebrand-large-play-button-image") : c.push("ytp-large-play-button-image") : d = b ? '<svg><path fill-rule="evenodd" clip-rule="evenodd" fill="#1F1F1F" class="ytp-housebrand-large-play-button-svg" d="M59.6,1.35c0.267,0.5,0.4,1.133,0.4,1.9v53.5c0,0.767-0.133,1.4-0.4,1.9c-0.5,0.9-1.45,1.35-2.85,1.35H3.25c-1.4,0-2.333-0.433-2.8-1.3C0.15,58.167,0,57.517,0,56.75V3.25c0-0.833,0.167-1.5,0.5-2C1,0.417,1.917,0,3.25,0h53.5C58.15,0,59.1,0.45,59.6,1.35z M21,41.65l22.7-11.8L21,18V41.65z"/><polygon fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" points="21,41.65 21,18 43.7,29.85"/></svg>' : '<svg><path fill-rule="evenodd" clip-rule="evenodd" fill="#1F1F1F" class="ytp-large-play-button-svg" d="M84.15,26.4v6.35c0,2.833-0.15,5.967-0.45,9.4c-0.133,1.7-0.267,3.117-0.4,4.25l-0.15,0.95c-0.167,0.767-0.367,1.517-0.6,2.25c-0.667,2.367-1.533,4.083-2.6,5.15c-1.367,1.4-2.967,2.383-4.8,2.95c-0.633,0.2-1.316,0.333-2.05,0.4c-0.767,0.1-1.3,0.167-1.6,0.2c-4.9,0.367-11.283,0.617-19.15,0.75c-2.434,0.034-4.883,0.067-7.35,0.1h-2.95C38.417,59.117,34.5,59.067,30.3,59c-8.433-0.167-14.05-0.383-16.85-0.65c-0.067-0.033-0.667-0.117-1.8-0.25c-0.9-0.133-1.683-0.283-2.35-0.45c-2.066-0.533-3.783-1.5-5.15-2.9c-1.033-1.067-1.9-2.783-2.6-5.15C1.317,48.867,1.133,48.117,1,47.35L0.8,46.4c-0.133-1.133-0.267-2.55-0.4-4.25C0.133,38.717,0,35.583,0,32.75V26.4c0-2.833,0.133-5.95,0.4-9.35l0.4-4.25c0.167-0.966,0.417-2.05,0.75-3.25c0.7-2.333,1.567-4.033,2.6-5.1c1.367-1.434,2.967-2.434,4.8-3c0.633-0.167,1.333-0.3,2.1-0.4c0.4-0.066,0.917-0.133,1.55-0.2c4.9-0.333,11.283-0.567,19.15-0.7C35.65,0.05,39.083,0,42.05,0L45,0.05c2.467,0,4.933,0.034,7.4,0.1c7.833,0.133,14.2,0.367,19.1,0.7c0.3,0.033,0.833,0.1,1.6,0.2c0.733,0.1,1.417,0.233,2.05,0.4c1.833,0.566,3.434,1.566,4.8,3c1.066,1.066,1.933,2.767,2.6,5.1c0.367,1.2,0.617,2.284,0.75,3.25l0.4,4.25C84,20.45,84.15,23.567,84.15,26.4z M33.3,41.4L56,29.6L33.3,17.75V41.4z"/><polygon fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" points="33.3,41.4 33.3,17.75 56,29.6"/></svg>';
        Y.call(this, ["div", c]);
        d && (this.element.innerHTML = d)
    }
    v(rJ, Y);
    function sJ(a, b, c) {
        gw.call(this, a, c.N(), b);
        this.ca = c;
        this.u = !1
    }
    v(sJ, gw);
    f = sJ.prototype;
    f.Cj = function() {
        sJ.D.Cj.call(this);
        this.jb.listen(this.b.b, "click", this.Lv);
        this.jb.listen(this.b.a, "click", this.Kv);
        this.ca.G("presentingplayerstatechange", this.Ko, this)
    }
    ;
    f.update = function(a) {
        sJ.D.update.call(this, a);
        "watch_actions_ajax"in vf && !this.ca.g ? (a = this.b,
        a.b.show(),
        a.a.show()) : (a = this.b,
        a.b.hide(),
        a.a.hide())
    }
    ;
    f.Oh = function(a) {
        var b = Oc(this.a, "show-share");
        this.B("share-click");
        b || sJ.D.Oh.call(this, a)
    }
    ;
    f.Dn = function(a) {
        this.B("title-click", a)
    }
    ;
    f.ck = function() {
        var a = Oc(this.a, "show-more-info");
        this.B("info-click");
        if (a)
            this.u && this.ca.playVideo();
        else {
            sJ.D.ck.call(this);
            var b = this.ca.getPlayerState();
            this.u = R(b, 8) && !R(b, 2);
            this.ca.pauseVideo()
        }
        return !a
    }
    ;
    f.Lv = function() {
        tJ(this, !0)
    }
    ;
    f.Kv = function() {
        tJ(this, !1)
    }
    ;
    f.Ko = function(a) {
        R(a.a, 8) && H(this.a, "show-more-info")
    }
    ;
    function tJ(a, b) {
        if (a.da) {
            var c = null;
            "detailpage" == a.g.Z ? (Fv(b, a.a),
            c = b ? 0 : 1) : c = Gv(a.da, b, a.a, a.g.Qa, a.g.Za);
            null != c && (iv(a.b, c),
            a.ca.B("RATE_SENTIMENT", {
                videoId: a.da.L,
                sentiment: c
            }))
        }
    }
    f.Fi = function(a) {
        mJ(this.ca, a)
    }
    ;
    f.qq = function() {
        uJ(this.ca)
    }
    ;
    f.H = function() {
        this.ca.ba("presentingplayerstatechange", this.Ko, this);
        this.ca = null;
        sJ.D.H.call(this)
    }
    ;
    function vJ(a, b, c, d, e, g, h, k) {
        this.j = [];
        x(rb(b), function(b) {
            this.j.push(N(a, b, t(this.rr, this)))
        }, this);
        x(rb(d), function(b) {
            this.j.push(N(a, b, t(this.qr, this)))
        }, this);
        this.k = g || null;
        this.A = c;
        this.u = h || 0;
        this.g = 0;
        this.i = !1;
        this.C = e;
        this.o = k || 0;
        this.a = 0;
        this.b = !1
    }
    f = vJ.prototype;
    f.rr = function(a) {
        M(this.a);
        this.a = 0;
        this.g = L(t(this.cw, this, a), this.u)
    }
    ;
    f.qr = function(a) {
        M(this.g);
        this.g = 0;
        this.a = L(t(this.bw, this, a), this.o)
    }
    ;
    f.cw = function(a) {
        this.b || this.i || (this.i = !0,
        this.A.call(this.k || l, a))
    }
    ;
    f.bw = function(a) {
        !this.b && this.i && (this.i = !1,
        this.C.call(this.k || l, a))
    }
    ;
    f.dispose = function() {
        this.b = !0;
        M(this.g);
        M(this.a);
        Tf(this.j)
    }
    ;
    f.ia = function() {
        return this.b
    }
    ;
    var wJ = null
      , xJ = null;
    function yJ() {
        Y.call(this, ["div", "ytp-tooltip", ["div", "ytp-tooltip-body", ["div", "ytp-tooltip-content", "{{content}}"]], ["div", "ytp-tooltip-arrow"]]);
        this.a = this.template.a["ytp-tooltip-body"];
        this.b = this.template.a["ytp-tooltip-content"]
    }
    v(yJ, Y);
    yJ.prototype.hide = function() {
        yJ.D.hide.call(this);
        Bd(this.a, 0)
    }
    ;
    function zJ(a, b) {
        I(a.b, "ytp-tooltip-content-text", !b.tagName);
        Jo(a.template, "content", b)
    }
    yJ.prototype.H = function() {
        hd(this.b);
        this.b = this.a = null;
        yJ.D.H.call(this)
    }
    ;
    function AJ(a, b) {
        this.a = {};
        this.nl = a;
        this.b = b
    }
    v(AJ, nh);
    function wp(a, b, c) {
        var d, e = new vJ(b,"mouseover",function() {
            if (this.nl) {
                var a = new yJ;
                a.X(this.nl);
                d = a
            } else
                d = null;
            if (d && (a = c && c(b),
            !c || a)) {
                a ? zJ(d, a) : (a = K(b, "tooltip") || "",
                zJ(d, ed(a)));
                var e = !!K(b, "tooltip-below")
                  , a = d
                  , k = Qd(b)
                  , k = new A(k.width / 2,e ? k.height : 0)
                  , m = Gd(b)
                  , k = new A(m.x + k.x,m.y + k.y)
                  , e = !!e;
                I(a.element, "ytp-tooltip-below", e);
                if (m = Ed(a.element))
                    var p = Gd(m)
                      , s = Yd(m)
                      , k = Db(k, new A(p.x + s.left,p.y + s.top));
                lv(k, a.element, e ? 1 : 0);
                a.show();
                var s = Qd(a.a)
                  , e = s.width / 2 * -1
                  , w = Yc(window)
                  , z = Zc(document)
                  , k = z.x
                  , w = w.width + z.x
                  , z = k
                  , X = w;
                m && (m = Qd(m),
                z = p.x,
                X = m.width + p.x);
                m = Gd(a.a);
                p = m.x + e;
                m = m.x + s.width + e;
                p < Math.max(k, z) ? e -= p - Math.max(k, z) : m > Math.min(w, X) && (e -= m - Math.min(w, X));
                Bd(a.a, e)
            }
        }
        ,["mouseout", "mousedown"],function() {
            d && (d.hide(),
            ph(d),
            d = null)
        }
        ,a,10,50);
        a.a[la(b)] = e
    }
    function gp(a, b, c, d) {
        var e = a.b;
        wp(a, b, function() {
            var a;
            if (e && e.na) {
                a = e.na;
                var b = e.ob;
                wJ || (wJ = new Fp(Hf("YTP_TOOLTIP_IDENTITY")),
                xJ = new Fp(Hf("YTP_TOOLTIP_IDENTITY_WATCH_LATER")));
                var k = dd("div");
                G(k, "ytp-identity-tooltip");
                var m = dd("img");
                m.src = b;
                var b = dd("span")
                  , p = null;
                d ? (G(b, "ytp-idt-watch-later"),
                p = [ed(Jp(xJ, {
                    user_name: ""
                })), dd("br"), ed(a)]) : p = ed(Jp(wJ, {
                    user_name: a
                }));
                gd(b, p);
                gd(k, m, b);
                a = k
            } else
                a = c;
            return a
        })
    }
    AJ.prototype.H = function() {
        this.b = this.nl = null;
        for (var a in this.a)
            ph(this.a[a]);
        this.a = {};
        AJ.D.H.call(this)
    }
    ;
    function BJ(a) {
        this.name = a
    }
    BJ.prototype.toString = function() {
        return this.name
    }
    ;
    function CJ(a) {
        Yt.call(this);
        this.i = null;
        this.g = new Iw(a,t(this.j, this),t(this.C, this));
        O(this, this.g);
        this.a = Z("YTP_AUDIO_TRACK_TITLE");
        this.element = new Dw(a,void 0,this.g);
        O(this, this.element);
        Fw(this.element, 100);
        this.priority = 0;
        this.b = !0
    }
    v(CJ, Yt);
    function DJ(a, b) {
        a.i != b && (a.i = b,
        a.g.Ia(b),
        a.element.Ab(a.j(b)))
    }
    CJ.prototype.j = function(a) {
        return a.name
    }
    ;
    CJ.prototype.C = function(a) {
        this.element.j();
        DJ(this, a);
        Zf(this.element, "change")
    }
    ;
    CJ.prototype.H = function() {
        CJ.D.H.call(this)
    }
    ;
    function EJ(a) {
        vp.call(this, a);
        yp(this, 15);
        FJ(this)
    }
    v(EJ, vp);
    function FJ(a) {
        xp(a, "ytp-button-fullscreen-enter");
        var b = Z("YTP_BUTTON_FULLSCREEN_ENTER");
        a.Ab(b);
        a.a = b
    }
    ;function GJ(a, b) {
        Y.call(this, ["div", ["ytp-menu-container", "html5-stop-propagation"], ["div", "ytp-menu", "{{content}}"]]);
        this.i = a;
        this.g = b || !1;
        this.a = [];
        this.b = [];
        this.stopPropagation("click")
    }
    v(GJ, Y);
    GJ.prototype.add = function(a) {
        for (var b = this.a.length, c = 0; c < this.a.length; c++) {
            if (this.a[c] == a)
                return;
            if (c < b && this.a[c].priority < a.priority) {
                b = c;
                break
            }
        }
        gb(this.a, b, 0, a);
        HJ(this)
    }
    ;
    GJ.prototype.remove = function(a) {
        ab(this.a, a);
        HJ(this)
    }
    ;
    function HJ(a) {
        qh(a.b);
        a.b = [];
        var b, c, d = new Y(["div", "ytp-menu-content"]), e = 1 == a.a.length || a.g;
        e && a.a.length && (c = new Y(["div", "ytp-menu-row", ["div", "ytp-menu-cell", a.a[0].a]]),
        c.X(d.M()));
        var g = !1;
        for (b = 0; b < a.a.length; b++)
            g = g || a.a[b].o;
        var h = g ? ["ytp-menu-cell", "ytp-menu-cell-span"] : "ytp-menu-cell";
        for (b = 0; b < a.a.length; b++) {
            var k = a.a[b];
            c = k.b;
            c = e ? !g || c ? new Y(["div", "ytp-menu-row", ["div", h, "{{content}}"]]) : new Y(["div", "ytp-menu-row", ["div", "ytp-menu-cell", "{{content}}"], ["div", "ytp-menu-cell", "{{more}}"]]) : !g || k.b ? new Y(["div", "ytp-menu-row", ["div", ["ytp-menu-cell", "ytp-menu-title"], k.a], ["div", h, "{{content}}"]]) : new Y(["div", "ytp-menu-row", ["div", ["ytp-menu-cell", "ytp-menu-title"], k.a], ["div", "ytp-menu-cell", "{{content}}"], ["div", "ytp-menu-cell", "{{more}}"]]);
            c.wa(k.element);
            c.wa(IJ(a, k), "more");
            c.X(d.M())
        }
        a.wa(d)
    }
    function IJ(a, b) {
        if (b.o) {
            var c = Z("YTP_MORE_OPTIONS") || "Options"
              , d = new vp(a.i,"ytp-menu-more-options",c);
            d.wa(c);
            a.b.push(d);
            d.listen(d.M(), "click", b.A, b);
            return d
        }
        return null
    }
    GJ.prototype.H = function() {
        this.a = [];
        HJ(this);
        GJ.D.H.call(this)
    }
    ;
    function JJ(a) {
        vp.call(this, a);
        yp(this, 3);
        KJ(this)
    }
    v(JJ, vp);
    function KJ(a) {
        xp(a, "ytp-button-play");
        var b = Z("YTP_BUTTON_PLAY");
        a.Ab(b);
        a.a = b
    }
    ;function LJ(a) {
        Y.call(this, ["div", "ytp-playlist-controls", "{{content}}"]);
        this.b = new vp(a,"ytp-button-prev",Z("YTP_BUTTON_PREV"),Z("YTP_BUTTON_PREV"));
        O(this, this.b);
        this.a = new vp(a,"ytp-button-next",Z("YTP_BUTTON_NEXT"),Z("YTP_BUTTON_NEXT"));
        O(this, this.a);
        this.wa([this.b, this.a])
    }
    v(LJ, Y);
    function MJ(a) {
        Yt.call(this);
        this.u = this.g = "unknown";
        this.C = !0;
        this.a = Z("YTP_QUALITY_TITLE");
        this.i = new Iw(a,t(this.j, this),t(this.F, this),!0);
        O(this, this.i);
        this.element = new Dw(a,void 0,this.i);
        O(this, this.element);
        Fw(this.element, 100);
        NJ(this, this.g, this.g);
        this.priority = -1;
        this.b = !0
    }
    v(MJ, Yt);
    MJ.prototype.Fl = function() {
        return this.g
    }
    ;
    function NJ(a, b, c) {
        if (a.g != b || a.u != c) {
            a.g = b;
            a.u = c;
            a.i.Ia(c);
            var d = a.i;
            d.u && (d.g && Hw(Kw(d, d.g), !1),
            b && Hw(Kw(d, b), !0),
            d.g = b);
            a.C = "auto" == c;
            b = a.C && c != b ? Z("YTP_QUALITY_AUTO_WITH_QUALITY", {
                video_quality: a.j(b)
            }) : a.j(b);
            a.element.Ab(new Lw(b))
        }
    }
    MJ.prototype.j = function(a) {
        return Z("YTP_QUALITY_" + a.toUpperCase())
    }
    ;
    MJ.prototype.F = function(a) {
        this.element.j();
        Zf(this.element, "blur");
        this.C && "auto" == a || (NJ(this, a, a),
        Zf(this.element, "change"))
    }
    ;
    MJ.prototype.H = function() {
        MJ.D.H.call(this)
    }
    ;
    function OJ(a) {
        bv.call(this, a, "ytp-settings-button", Z("YTP_TOOLTIP_SETTINGS"), "ytp-settings-button-active");
        yp(this, 12);
        this.g = new Y(["div", "{{content}}"]);
        O(this, this.g);
        this.wa(this.g);
        PJ(this, "")
    }
    v(OJ, bv);
    function PJ(a, b) {
        "highres" == b ? a.g.wa("ytp-settings-4k-quality-badge") : -1 != b.indexOf("hd") ? a.g.wa("ytp-settings-hd-quality-badge") : a.g.wa("")
    }
    ;function QJ(a) {
        bv.call(this, a, "ytp-size-toggle-large", Z("YTP_TOOLTIP_LARGE_PLAYER"), "ytp-size-toggle-small", Z("YTP_TOOLTIP_SMALL_PLAYER"));
        yp(this, 13)
    }
    v(QJ, bv);
    function RJ(a) {
        Yt.call(this);
        this.i = 1;
        this.a = Z("YTP_PLAYER_SPEED_TITLE");
        this.g = new Iw(a,t(this.j, this),t(this.C, this));
        O(this, this.g);
        this.element = new Dw(a,void 0,this.g);
        O(this, this.element);
        Fw(this.element, 100);
        SJ(this, this.i);
        this.priority = 1;
        this.b = !0
    }
    v(RJ, Yt);
    function SJ(a, b) {
        a.i = b;
        a.g.Ia(b);
        a.element.Ab(a.j(b))
    }
    RJ.prototype.j = function(a) {
        return 1 == a ? Z("YTP_PLAYER_SPEED_NORMAL") : a.toString()
    }
    ;
    RJ.prototype.C = function(a) {
        this.element.j();
        SJ(this, a);
        Zf(this.element, "change")
    }
    ;
    RJ.prototype.H = function() {
        RJ.D.H.call(this)
    }
    ;
    function TJ() {
        Y.call(this, ["div", ["ytp-time-display", "html5-control"], ["span", "ytp-time-current", "{{current}}"], ["span", "ytp-time-separator", " / "], ["span", "ytp-time-duration", "{{duration}}"], ["span", "ytp-time-live-badge", "Live"]]);
        this.a = this.template.a["ytp-time-live-badge"]
    }
    v(TJ, Y);
    TJ.prototype.H = function() {
        this.a = null;
        TJ.D.H.call(this)
    }
    ;
    function UJ(a) {
        T.call(this);
        this.i = a;
        this.b = new Ao(this);
        this.J = new Ao(this);
        this.j = null;
        this.u = {};
        this.A = {};
        this.P = this.K = this.I = this.g = this.k = null;
        this.Q = new Ao(this);
        this.a = null;
        this.V = -1;
        this.W = null;
        this.S = 0;
        this.R = ""
    }
    v(UJ, T);
    f = UJ.prototype;
    f.U = null;
    f.qc = null;
    f.Fe = null;
    f.Ej = null;
    f.Oc = null;
    f.nd = null;
    f.kf = null;
    f.lc = null;
    f.gg = null;
    f.rh = null;
    f.Un = !1;
    f.lf = null;
    f.qb = null;
    function VJ(a, b) {
        a.U = b;
        var c = D("html5-player-chrome", b);
        a.qc = new JJ(a.i);
        a.qc.X(c, 0);
        O(a, a.qc);
        new YI(a.qc.M(),t(a.gs, a),!1,function() {
            return !0
        }
        );
        a.Fe = new LJ(a.i);
        a.Fe.X(c, 1);
        O(a, a.Fe);
        a.b.listen(a.Fe.a, "click", qa(a.B, "nextvideo"));
        a.b.listen(a.Fe.b, "click", qa(a.B, "previousvideo"));
        var d = D("html5-progress-bar-container", b);
        a.Ej = new VB(a.i);
        WB(a.Ej, d);
        a.F = new TJ;
        a.F.X(c, 4);
        O(a, a.F);
        a.b.listen(a.F.a, "click", qa(a.B, "seekto", Infinity));
        a.Oc = D("html5-volume-control", b);
        a.b.listen(a.Oc, "keydown", a.hs);
        a.nd = D("html5-volume-button", a.Oc);
        a.b.listen(a.nd, "click", a.an);
        a.kf = D("html5-volume-panel", a.Oc);
        a.lc = D("html5-volume-slider", a.Oc);
        a.b.listen(a.lc, "mousedown", a.Yj);
        a.b.listen(a.lc, "touchstart", a.Yj);
        a.b.listen(a.lc, "pointerdown", a.Yj);
        a.S = a.lc.clientWidth;
        a.gg = D("html5-volume-slider-foreground", a.Oc);
        a.rh = D("html5-threed-popup-menu", b);
        a.o = new EJ(a.i);
        a.o.X(c, 7);
        O(a, a.o);
        a.b.listen(a.o, "click", a.cs);
        a.qb = D("html5-watch-later-button", b);
        a.b.listen(a.qb, "click", a.ds);
        a.qb && fp(a.i, a.qb, Z("YTP_TOOLTIP_WATCH_LATER"), !0);
        a.lf = D("html5-watch-on-youtube-button", b);
        a.b.listen(a.lf, "click", a.es);
        a.a = new QJ(a.i);
        O(a, a.a);
        id(a.a.M(), a.o.M());
        a.a.listen(a.a, "click", a.as, a);
        a.a.hide();
        a.j = new OJ(a.i);
        O(a, a.j);
        WJ(a, "__default__", a.j, a.lf);
        fd(kd(a.qb), a.qb);
        a.g = new MJ(a.i);
        O(a, a.g);
        a.g.listen("change", a.$r, a);
        a.g.listen("blur", a.Zr, a);
        a.I = new RJ(a.i);
        O(a, a.I);
        a.I.listen("change", a.bs, a)
    }
    f.disable = function(a) {
        XJ(this, a, !0)
    }
    ;
    f.enable = function(a) {
        XJ(this, a, !1)
    }
    ;
    function XJ(a, b, c) {
        for (var d = 0; d < b.length; d++)
            switch (b[d]) {
            case "audio":
                I(a.U, "disabled-control-audio", c);
                break;
            case "play_pause":
                var e = a.qc;
                c ? e.disable() : e.enable();
                break;
            case "seek":
                I(a.U, "disabled-control-seek", c)
            }
    }
    f.hs = function(a) {
        var b = a.keyCode;
        if (32 == b || 13 == b)
            this.an(),
            a.preventDefault()
    }
    ;
    f.setVolume = function(a, b) {
        if (this.V != a || this.W != b) {
            jf(this.nd, "value", b || 0 == a ? "off" : 20 > a ? "min" : 40 > a ? "quiet" : 60 > a ? "normal" : 80 > a ? "loud" : "max");
            jf(this.nd, "volume", a);
            var c = this.S - 6
              , d = (this.R || this.lc.style.backgroundPosition).split(" ")
              , d = 1 < d.length ? d[1] : "0px";
            if (b)
                this.R = "-" + c + "px " + d,
                this.gg.style.left = "0px";
            else {
                var e;
                0 >= a ? e = 0 : 100 <= a ? e = c : (e = (c - 0) * a / 100,
                e = 0 >= e ? 0 : e >= c ? c : 0 + Math.round(e));
                this.gg.style.left = e + "px";
                this.R = "-" + (c - e) + "px " + d
            }
            this.lc.style.backgroundPosition = this.R;
            c = Math.round(a);
            d = c + "% " + Hf("HTML5_VOLUME_SETTING") + (b ? " " + Hf("HTML5_VOLUME_MUTED") : "");
            this.kf.setAttribute("aria-valuenow", c);
            this.kf.setAttribute("aria-valuetext", d);
            c = this.nd;
            d = K(c, b ? "tooltip-alt" : "tooltip-default") || "";
            jf(c, "tooltip", d);
            c.setAttribute("aria-label", d);
            this.nd.setAttribute("aria-label", (b ? Hf("HTML5_VOLUME_UNMUTE") : Hf("HTML5_VOLUME_MUTE")) + " " + Hf("HTML5_CONTROL_TOGGLE"));
            this.V = a;
            this.W = b
        }
    }
    ;
    function YJ(a, b) {
        Jo(a.F.template, "current", Ep(b))
    }
    f.an = function() {
        this.B("mutetoggled")
    }
    ;
    function ZJ(a, b) {
        if (b) {
            if (a.Un) {
                var c = a.qc;
                xp(c, "ytp-button-stop");
                var d = Z("YTP_BUTTON_STOP")
            } else
                c = a.qc,
                xp(c, "ytp-button-pause"),
                d = Z("YTP_BUTTON_PAUSE");
            c.Ab(d);
            c.a = d
        } else
            KJ(a.qc)
    }
    f.gs = function() {
        this.B("playpausetoggled")
    }
    ;
    f.Yj = function(a) {
        a.preventDefault();
        G(this.Oc, "ytp-volume-slider-active");
        a = Id(a, this.lc).x / this.S * 100;
        $J(this, a);
        this.J.listen(document, "mousemove", this.Rl);
        this.J.listen(document, "touchmove", this.Rl);
        this.J.listen(document, "pointermove", this.Rl);
        this.J.listen(document, "mouseup", this.Ql);
        this.J.listen(document, "touchend", this.Ql);
        this.J.listen(document, "pointerup", this.Ql)
    }
    ;
    f.Rl = function(a) {
        a.preventDefault();
        a = Id(a, this.lc).x / this.S * 100;
        $J(this, a)
    }
    ;
    function $J(a, b) {
        var c = {
            volume: Bb(b, 0, 100),
            muted: !1
        };
        a.B("volumechanged", c)
    }
    f.Ql = function(a) {
        a.preventDefault();
        H(this.Oc, "ytp-volume-slider-active");
        this.J.removeAll()
    }
    ;
    f.cs = function(a) {
        this.B("fullscreentoggled");
        a.clientX && a.clientY && a.target.blur()
    }
    ;
    function aK(a, b) {
        var c = a.A[b.k || "__default__"];
        c && c.add(b)
    }
    function bK(a, b) {
        var c = a.A[b.k || "__default__"];
        c && c.remove(b)
    }
    function WJ(a, b, c, d) {
        a.u[b] || (a.u[b] = c,
        id(c.M(), d || a.j.M()),
        c.listen(c, "click", qa(a.Kw, b), a, "menuButtonClick"),
        c = new GJ(a.i,"__default__" != b),
        O(a, c),
        c.hide(),
        c.X(a.U),
        a.A[b] = c)
    }
    f.ds = function() {
        ef(this.qb, "html5-async-progress") || (Ev(this.qb, "html5-async-progress"),
        this.B("watchlater"))
    }
    ;
    f.es = function() {
        this.B("watchonyoutube")
    }
    ;
    function cK(a, b, c) {
        a.Md();
        a.K = b;
        a.K.show();
        c && (a.P = c,
        dv(a.P));
        a.Q.listen(window, "blur", a.Md);
        a.Q.listen(document, "click", a.Md)
    }
    f.Md = function() {
        this.Q.removeAll();
        this.K && (this.K.hide(),
        this.K = null);
        this.P && (ev(this.P),
        this.P = null)
    }
    ;
    f.Kw = function(a, b) {
        b.stopPropagation();
        var c = this.u[a];
        c && (c.b ? this.Md() : cK(this, this.A[a], c))
    }
    ;
    f.Rr = function() {
        this.B("audiotrackchanged", this.k.i)
    }
    ;
    f.$r = function() {
        this.B("qualitychanged", this.g.Fl())
    }
    ;
    f.Zr = function() {
        this.Md()
    }
    ;
    f.as = function() {
        fv(this.a);
        this.B("sizechangerequested", 1 == this.a.b)
    }
    ;
    f.bs = function() {
        this.B("speedchanged", this.I.i)
    }
    ;
    f.Sr = function(a) {
        var b = a.target
          , c = "unknown"
          , c = b == this.qc.M() ? "playpause" : b == this.nd || b == this.kf || b == this.lc || b == this.Oc || b == this.gg ? "volume" : b == this.F ? "time" : b == this.j ? "settings" : b == this.qb ? "watchlater" : b == this.lf ? "youtube" : b == this.o.M() ? "fullscreen" : b == this.a ? "size" : a.target;
        this.B("controlclick", c)
    }
    ;
    f.H = function() {
        this.b.removeAll();
        this.J.removeAll();
        this.Q.removeAll();
        this.Md();
        this.qb = this.lf = this.rh = this.gg = this.lc = this.kf = this.nd = this.Oc = this.U = null;
        for (var a in this.u) {
            var b = this.u[a];
            b.zf();
            Oo(b, "menuButtonClick")
        }
        this.u = {};
        this.A = {};
        this.a = this.j = this.I = this.g = null;
        this.V = -1;
        this.W = null;
        UJ.D.H.call(this)
    }
    ;
    function dK(a, b) {
        this.k = a;
        this.i = [];
        this.o = b;
        this.j = []
    }
    v(dK, nh);
    function eK(a, b, c) {
        a.i.push(a.k.G(b, c, a))
    }
    function fK(a, b, c) {
        a.j.push(a.o.G(b, c, a))
    }
    function gK(a) {
        for (var b = 0; b < a.i.length; b++)
            a.k.Uc(a.i[b]);
        for (b = 0; b < a.j.length; b++)
            a.o.Uc(a.j[b])
    }
    dK.prototype.H = function() {
        gK(this);
        dK.D.H.call(this)
    }
    ;
    function hK(a, b) {
        dK.call(this, a, b);
        this.g = !1;
        this.b = a;
        this.a = b;
        var c = a.N();
        c.color && G(this.a.i, c.color);
        if (c.Xh) {
            var d = this.a;
            d.b = new TB;
            d.b.X(d.g);
            O(d, d.b);
            d = this.a;
            d.a = new OB;
            d.a.X(d.g);
            Bo(d.k, d.a.M(), "down", d.Qt);
            d.a.hide();
            O(d, d.a);
            for (var e in d.R) {
                var g = d.R[e];
                d.a.a[g.getId()] = g
            }
        }
        c.Yh && (c = this.a,
        e = D("html5-storyboard", c.g),
        c.u = new KB,
        d = c.u,
        g = TI(c.bb.b),
        d.td = e,
        d.ae = g.width,
        d.$b = D("html5-storyboard-filmstrip", d.td),
        d.Ph = D("html5-storyboard-lens", d.td),
        d.ik = D("html5-storyboard-lens-thumbnail", d.td),
        d.jk = D("html5-storyboard-lens-timestamp", d.td),
        d.tg = D("html5-storyboard-thumbnail", d.$b),
        F(d.tg),
        O(c, c.u));
        iK(this)
    }
    v(hK, dK);
    function iK(a) {
        gK(a);
        a.g = !0;
        eK(a, "cuerangesadded", a.cx);
        eK(a, "cuerangesremoved", a.fx);
        eK(a, "cuerangemarkersupdated", a.bx);
        eK(a, "presentingplayerstatechange", a.kx);
        eK(a, "progresssync", a.lx);
        eK(a, "resize", a.hx);
        eK(a, "seekto", a.ix);
        eK(a, "videodatachange", a.mx);
        eK(a, "videoplayerchange", a.Gp);
        eK(a, "videoready", a.jx);
        fK(a, "beginseeking", a.ax);
        fK(a, "endseeking", a.gx);
        fK(a, "seekto", a.$w)
    }
    f = hK.prototype;
    f.cx = function(a) {
        fC(this.a, a)
    }
    ;
    f.fx = function(a) {
        hC(this.a, a)
    }
    ;
    f.bx = function(a) {
        fC(this.a, a)
    }
    ;
    f.hx = function(a) {
        if (this.a.u) {
            var b = this.a.u;
            !b.Wc || b.ae == a.width && b.g || (b.ae = a.width,
            LB(b, !0))
        }
    }
    ;
    f.ix = function(a) {
        dC(this.a, a);
        if (this.a.u) {
            var b = this.a.u;
            if (b.Wc) {
                b.Kk = b.Vk * a - b.ae / 2;
                Bd(b.$b, -1 * b.Kk);
                var c = om(b.Wc, a);
                MB(b, c);
                md(b.jk, Ep(b.Pd * a));
                HB(b.b)
            }
        }
    }
    ;
    f.kx = function(a) {
        if (0 > Uq(a, 16)) {
            a = this.a;
            var b = this.b.getCurrentTime();
            a.Sa.innerHTML = Math.floor(100 * a.za) + "% at " + Math.floor(b) + " of " + Math.floor(a.o) + " seconds"
        }
    }
    ;
    f.Gp = function(a) {
        1 != a.getPlayerType() ? this.g && (gK(this),
        this.g = !1,
        eK(this, "videoplayerchange", this.Gp)) : this.g || iK(this)
    }
    ;
    f.mx = function(a, b, c) {
        if ("newdata" == a) {
            a = b.Ha || 0;
            var d = this.a;
            hd(d.va);
            d.R = {};
            d.ra = {};
            d.a && (d.a.a = {});
            dC(this.a, a / b.Aa, 0);
            (c = Q(this.b, c)) && fC(this.a, c.A.i || []);
            this.a.b && this.a.b.reset()
        }
        c = this.a;
        a = b.Aa;
        c.o = a;
        eC(c);
        c.a && (c.a.Pd = a,
        RB(c.a, !0));
        this.a.b && (this.a.b.Pd = b.Aa);
        this.a.u && (this.a.u.Pd = b.Aa);
        c = this.a;
        c.ha = b.Mj;
        eC(c);
        c = this.a;
        c.fa = b.Km;
        eC(c)
    }
    ;
    f.jx = function(a) {
        if (this.a.b) {
            var b = this.a.b;
            if (!b.Th)
                if (Qn(a)) {
                    G(b.M(), "with-thumbnail");
                    b.yf = Qn(a);
                    b.Qg = Rn(a);
                    var c = t(b.Ev, b);
                    b.Qg.G("l", c)
                } else
                    b.reset()
        }
        this.a.Xa = a.nb ? !0 : !1;
        (b = this.a.u) && L(t(b.Dv, b, a), 0)
    }
    ;
    f.lx = function(a, b, c) {
        dC(this.a, b, c)
    }
    ;
    f.ax = function() {
        dB(this.b.b)
    }
    ;
    f.gx = function() {
        this.b.b.oi()
    }
    ;
    f.$w = function(a, b) {
        uh(this.b, a, b)
    }
    ;
    function jK(a, b) {
        dK.call(this, a, b);
        eK(this, "applicationplayerstatechange", this.sr);
        eK(this, "controlsdisabled", this.ur);
        eK(this, "controlsenabled", this.wr);
        eK(this, "liveviewshift", this.zr);
        eK(this, "fullscreentoggled", this.yr);
        eK(this, "presentingplayerstatechange", this.Ur);
        eK(this, "progresssync", this.Vr);
        eK(this, "threedenabled", this.Nr);
        eK(this, "videodatachange", this.Wr);
        eK(this, "onPlaybackQualityChange", this.Jr);
        eK(this, "onVolumeChange", this.Or);
        eK(this, "menu_button_add", this.Ar);
        eK(this, "menu_button_remove", this.Br);
        eK(this, "menu_item_add", this.Cr);
        eK(this, "menu_item_remove", this.Dr);
        eK(this, "menu_show", this.Er);
        fK(this, "fullscreentoggled", this.xr);
        fK(this, "mutetoggled", this.Fr);
        fK(this, "nextvideo", this.Gr);
        fK(this, "playpausetoggled", this.Hr);
        fK(this, "previousvideo", this.Ir);
        fK(this, "qualitychanged", this.Kr);
        fK(this, "sizechangerequested", this.Lr);
        fK(this, "speedchanged", this.Mr);
        fK(this, "volumechanged", this.Pr);
        fK(this, "watchlater", this.Tr);
        fK(this, "watchonyoutube", this.Qr);
        fK(this, "controlclick", this.tr);
        this.b = a;
        this.a = b;
        this.g = new hK(a,b.Ej);
        O(this, this.g);
        var c = a.N();
        if (c.Gc) {
            var d = this.a;
            d.k = new CJ(d.i);
            var e = []
              , g = new BJ("English");
            e.push(g);
            e.push(new BJ("Spanish"));
            e.push(new BJ("Commentary"));
            d.k && (Jw(d.k.g, e),
            e.length ? aK(d, d.k) : bK(d, d.k));
            DJ(d.k, g);
            O(d, d.k);
            d.k.listen("change", d.Rr, d)
        }
        c.Wb && (d = this.a,
        this.b.N().ue ? dv(d.a) : ev(d.a),
        d.a.show());
        c.sf || Vo(this.a.qb);
        c.xh && this.a.o.show();
        c.ig && (d = this.a,
        Jw(d.I.g, this.b.a.ig ? Ch : [1]),
        aK(d, d.I));
        if (c.bb)
            for (c = this.a,
            d = [c.qc, c.nd, c.kf, c.F, c.qb, c.lf, c.o, c.j],
            e = 0; e < d.length; e++)
                c.b.listen(d[e], "click", c.Sr)
    }
    v(jK, dK);
    f = jK.prototype;
    f.ur = function(a) {
        this.a.disable(a)
    }
    ;
    f.wr = function(a) {
        this.a.enable(a)
    }
    ;
    f.zr = function(a) {
        I(this.a.F.element, "ytp-time-live-dvr", !a)
    }
    ;
    f.yr = function(a) {
        var b = this.a;
        this.b.N();
        a ? (a = b.o,
        xp(a, "ytp-button-fullscreen-exit"),
        b = Z("YTP_BUTTON_FULLSCREEN_EXIT"),
        a.Ab(b),
        a.a = b) : FJ(b.o)
    }
    ;
    f.Ur = function(a) {
        R(a.a, 2) || (0 < Uq(a, 8) ? ZJ(this.a, !0) : 0 > Uq(a, 8) ? ZJ(this.a, !1) : 0 > Uq(a, 2) && ZJ(this.a, R(a.a, 8)));
        0 > Uq(a, 16) && (a = this.b.getCurrentTime(),
        kK(this) && YJ(this.a, a))
    }
    ;
    f.sr = function(a) {
        if (R(a.a, 2)) {
            a = this.a.qc;
            xp(a, "ytp-button-replay");
            var b = Z("YTP_BUTTON_REPLAY");
            a.Ab(b);
            a.a = b
        }
    }
    ;
    f.Nr = function() {
        var a = this.a
          , b = this.b.getVideoData().wf
          , c = D("html5-threed-conversion-on", a.rh)
          , a = D("html5-threed-conversion-off", a.rh);
        So(c, !b);
        So(a, b)
    }
    ;
    f.Wr = function(a, b) {
        if (kK(this)) {
            if ("newdata" == a) {
                var c = b.Ha || 0;
                kK(this) && YJ(this.a, c);
                Ev(this.a.qb);
                SJ(this.a.I, 1)
            }
            Jo(this.a.F.template, "duration", Ep(b.Aa));
            var c = this.a
              , d = b.g ? Fh(b.g) : ["auto"];
            Jw(c.g.i, d);
            d.length ? aK(c, c.g) : bK(c, c.g);
            var e = this.a
              , c = b.nb
              , d = b.gb;
            e.Un = c && !d;
            e = e.F;
            I(e.element, "ytp-time-liveonly", c && !d);
            I(e.element, "ytp-time-live", c && d);
            this.b.g && "detailpage" != this.b.N().Z ? this.a.Fe.show() : this.a.Fe.hide()
        }
    }
    ;
    f.Jr = function(a) {
        if (kK(this)) {
            var b = this.a
              , c = lK(this.b);
            NJ(b.g, a, c);
            PJ(b.j, a)
        }
    }
    ;
    f.Or = function(a) {
        this.a.setVolume(a.volume, a.muted)
    }
    ;
    f.Cr = function(a) {
        aK(this.a, a)
    }
    ;
    f.Dr = function(a) {
        bK(this.a, a)
    }
    ;
    f.Ar = function(a, b) {
        WJ(this.a, a, b)
    }
    ;
    f.Br = function(a) {
        var b = this.a
          , c = b.u[a];
        c && (c.zf(),
        Oo(c, "menuButtonClick"),
        b.u[a] = null,
        b.A[a].dispose(),
        b.A[a] = null)
    }
    ;
    f.Er = function(a) {
        var b = this.a;
        a && b.A[a] ? cK(b, b.A[a], b.u[a]) : b.Md()
    }
    ;
    f.Vr = function(a) {
        kK(this) && YJ(this.a, a)
    }
    ;
    f.xr = function() {
        mK(this.b, !this.b.N().$a)
    }
    ;
    f.Fr = function() {
        this.b.Ba.muted ? wh(this.b) : vh(this.b)
    }
    ;
    f.Gr = function() {
        Th(this.b)
    }
    ;
    f.Hr = function() {
        nK(this.b)
    }
    ;
    f.Ir = function() {
        Uh(this.b)
    }
    ;
    f.Kr = function(a) {
        if ("auto" == a) {
            var b = this.a
              , c = Dh(this.b);
            NJ(b.g, c, a);
            PJ(b.j, c)
        }
        "auto" == lK(this.b) && (b = this.a,
        NJ(b.g, a, a),
        PJ(b.j, a));
        Eh(this.b, a, 1)
    }
    ;
    f.Lr = function(a) {
        var b = this.b;
        mK(b, !1);
        a != b.a.ue && (b.a.ue = a,
        b.B("SIZE_CLICKED", a),
        b.ea.Ig())
    }
    ;
    f.Mr = function(a) {
        Bh(this.b, a)
    }
    ;
    f.Pr = function(a) {
        oK(this.b, a)
    }
    ;
    f.Qr = function() {
        mJ(this.b, Ph(this.b, !0))
    }
    ;
    f.tr = function(a) {
        lJ(this.b, a)
    }
    ;
    f.Tr = function() {
        Nk("addto_ajax", this.b.N().Qa, this.b.N().Za, t(this.Ow, this), t(this.zp, this))
    }
    ;
    f.Ow = function() {
        var a = {
            kb: this.b.getVideoData(1).L,
            Qa: this.b.N().Qa,
            Za: this.b.N().Za,
            onSuccess: this.Lw,
            onError: this.zp,
            O: this
        };
        Hk("/addto_ajax?action_add_to_watch_later_list=1", {
            format: "XML",
            method: "POST",
            xf: {
                privacy: a.privacy || null,
                feature: a.Wy || null,
                authuser: a.Qa || null,
                pageid: a.Za || null,
                add_to_top: a.Vy || null
            },
            Ze: {
                video_ids: a.kb,
                full_list_id: a.Xy || null,
                new_playlist_name: a.Yy || null,
                session_token: Bf("addto_ajax"),
                plid: zf("PLAYBACK_ID") || null
            },
            O: a.O,
            onError: a.onError,
            onSuccess: a.onSuccess
        })
    }
    ;
    f.Lw = function() {
        Ev(this.a.qb, "html5-async-success");
        this.b.B("WATCH_LATER")
    }
    ;
    f.zp = function(a, b) {
        var c = this.a.qb
          , d = b && b.error_message;
        Ev(c, "html5-async-error");
        if (d) {
            var e = vv.getInstance()
              , g = xv(c);
            zv(c, d);
            wv(e, c);
            uv(c, g)
        }
    }
    ;
    function kK(a) {
        return 1 == Q(a.b).getPlayerType()
    }
    ;var pK = {
        0: "autohide-off",
        1: "autohide-on",
        2: "autohide-fade",
        3: "autohide-auto",
        4: "autohide-embeds",
        5: "autohide-seekbar"
    };
    function qK(a) {
        NI.call(this, a);
        this.W = this.i = this.F = this.Va = this.A = this.ma = this.fa = this.Q = this.P = this.o = this.za = this.bb = this.J = this.u = null;
        this.va = !1;
        this.na = null;
        this.Sa = !0;
        this.Ca = this.S = !1;
        this.Ga = {
            x: 0,
            y: 0
        };
        this.mb = !1;
        this.Ea = null;
        this.wb = !1;
        this.ob = {
            "watch-small": new B(640,360),
            "watch-medium": new B(854,480),
            "watch-large": new B(1280,720)
        };
        a = this.app.N().Ub ? 4E3 : 3E3;
        this.ha = new Xq(this.uk,a,this);
        O(this, this.ha);
        this.ha.start()
    }
    v(qK, NI);
    f = qK.prototype;
    f.mk = function() {
        qK.D.mk.call(this);
        this.app.G("appstatechange", this.Ax, this);
        this.app.G("applicationplayerstatechange", this.Bx, this);
        this.app.G("clearvideooverlays", this.Gx, this);
        this.app.G("initializingmode", this.Ex, this);
        this.app.G("interstitial", this.Hx, this);
        this.app.G("presentingplayerstatechange", this.Cx, this);
        this.app.G("onDetailedError", this.Fx, this)
    }
    ;
    f.Vj = function() {
        var a = this.app.J.assets;
        if (a.css && !Bm()) {
            var b = {
                rel: "stylesheet",
                type: "text/css",
                href: a.css
            }
              , c = document.getElementById("www-player-css");
            b.id = "www-player-css";
            var d = c || document.createElement("link");
            Wc(d, b);
            c || document.getElementsByTagName("head")[0].appendChild(d);
            this.ip(200)
        } else
            this.va = !0;
        qK.D.Vj.call(this) || Hk(a.html, {
            format: "RAW",
            method: "GET",
            onSuccess: t(this.Kx, this)
        });
        return !0
    }
    ;
    f.Kx = function(a) {
        if (a.responseText) {
            var b = dd("div");
            b.innerHTML = a.responseText;
            PI(this, D("html5-video-player", b));
            this.B("templateready")
        } else
            this.B("templateerror")
    }
    ;
    f.ip = function(a) {
        0 >= a || Bm() ? (this.va = !0,
        this.a && Lo(this.a)) : L(t(this.ip, this, a - 1), 50)
    }
    ;
    f.qj = function() {
        qK.D.qj.call(this);
        this.va || Mo(this.a);
        var a = this.app.N();
        a.$ && this.addClass(a.$ + "-theme");
        a.Ld && this.addClass("house-brand");
        !a.nf && a.te || this.addClass("modest-branding");
        a.uj && this.addClass("html5-hide-share");
        a.tm || this.addClass("html5-hide-volume");
        a.Ub && (this.addClass("html5-tablet"),
        G(document.body, "html5-tablet-body"));
        a.Xb || this.addClass("hide-info-bar");
        a.Ub || a.Vb || this.addClass(pK[a.uh]);
        var b = Gb(new B(this.a.clientWidth,this.a.clientHeight)).toFixed(1);
        "1.3" != b && "1.8" != b || this.addClass("autohide-aspect");
        a.Wb && this.resize();
        this.P = D("html5-watermark", this.a);
        rK(this.app) && Uo(this.P);
        a.te && !a.Vb && (this.A = new UJ(this.j),
        VJ(this.A, this.I),
        O(this, this.A),
        this.Va = new jK(this.app,this.A),
        O(this, this.Va));
        var b = D("html5-context-menu", this.a)
          , c = D("html5-modal-panel", this.a)
          , d = this.F = new jJ(this.app);
        d.ib = b;
        var e = d.b;
        e.Be = c;
        e.Hj = D("html5-modal-panel-close-button", c);
        e.Gj = D("html5-modal-panel-clipboard-substitute-content", c);
        e.Ae = qf("input", e.Gj);
        pc && e.Ae.removeAttribute("readonly");
        e.a.listen(document, "keydown", e.Zq);
        e.a.listen(c, "contextmenu", e.Yq);
        e.a.listen(e.Hj, "click", e.Xq);
        e.a.listen(e.Ae, "click", e.Am);
        var c = {
            Qq: d.ar,
            Rq: d.br,
            Sq: t(d.Bm, d, !1),
            Tq: t(d.Bm, d, !0),
            Vq: d.er,
            Wq: d.fr,
            Uq: d.dr
        }, g;
        for (g in c)
            kJ(d, g, c[g]);
        O(this, this.F);
        g = this.F;
        d = document.body;
        F(g.ib);
        d.appendChild(g.ib);
        a.Ld && G(b, "house-brand");
        this.Ea = new rJ(a.Tb,a.Ld);
        this.Ea.X(this.g);
        O(this, this.Ea);
        this.o = new bw(2);
        G(this.o.element, "html5-video-loader");
        G(this.o.element, "html5-center-overlay");
        G(this.o.element, "ytp-scalable-icon-grow");
        this.o.X(this.g);
        O(this, this.o);
        b = D("html5-info-bar", this.a);
        this.i = new sJ(b,this.j,this.app);
        this.i.Cj();
        O(this, this.i);
        this.Q = new jI(a.Tb);
        this.Q.X(this.g);
        O(this, this.Q);
        this.fa = new hI;
        this.fa.X(this.g);
        O(this, this.fa);
        sK(this)
    }
    ;
    f.Mi = function(a) {
        qK.D.Mi.call(this, a);
        a ? Lo(this.i.a) : Mo(this.i.a)
    }
    ;
    f.Jl = function(a) {
        qK.D.Jl.call(this, a);
        tK(this, a);
        this.u && this.u.resize()
    }
    ;
    f.Wj = function() {
        qK.D.Wj.call(this);
        tK(this, this.Pc())
    }
    ;
    f.Ll = function(a, b) {
        qK.D.Ll.call(this, a, b);
        "newdata" == a && this.i.reset();
        this.i && this.i.update(b);
        if (rK(this.app)) {
            var c = b.Oa;
            c && (this.P.src = c);
            Uo(this.P)
        }
    }
    ;
    f.Ax = function(a) {
        2 == a ? uK(this) : (this.Q.hide(),
        this.removeClass("cued-mode"));
        3 == a ? this.o.show() : R(this.app.getPlayerState(), 1) || this.o.hide()
    }
    ;
    f.Cx = function(a) {
        var b;
        b = a.a;
        if (R(b, 2))
            b = ["ended-mode"];
        else {
            var c = [];
            R(b, 8) ? c.push("playing-mode") : R(b, 4) && c.push("paused-mode");
            R(b, 1) && !R(b, 32) && c.push("buffering-mode");
            R(b, 32) && c.push("seeking-mode");
            R(b, 64) && c.push("unstarted-mode");
            b = c
        }
        this.na && gf(this.a, this.na);
        ff(this.a, b);
        this.na = b;
        R(a.a, 1) ? this.o.show() : 0 > Uq(a, 1) && this.o.hide();
        this.Sa = R(a.a, 8) && !R(a.a, 4);
        0 > Uq(a, 64) && vK(this.app)
    }
    ;
    f.Bx = function(a) {
        R(a.a, 2) && !this.app.N().Ld ? uK(this) : 0 > Uq(a, 2) && (this.Q.hide(),
        this.removeClass("cued-mode"))
    }
    ;
    function sK(a) {
        var b = a.app.N();
        if (b.Vm) {
            if (b.Ub) {
                var c = t(function(a) {
                    return wK(a) || ef(a.target, "html5-draggable")
                }, a);
                a.W = new YI(a.a,t(function(a) {
                    if (ef(this.a, "cued-mode"))
                        up.hasTags(void 0) && this.Zn(a);
                    else if (wK(a) && (this.S ? this.Ok() : this.uk(),
                    this.A)) {
                        a = this.A;
                        var b = pI.getInstance();
                        b.tc && uI(b, b.tc);
                        a.Md()
                    }
                }, a),!1,c);
                N(a.a, "gesturechange", t(a.ru, a));
                N(a.a, "gestureend", t(a.su, a))
            } else
                N(a.a, "click", t(a.Zn, a)),
                N(a.a, "dblclick", t(a.qu, a)),
                N(a.a, "click", t(a.Ok, a)),
                N(a.a, "mousemove", t(a.Ok, a)),
                N(a.a, "mouseout", t(a.uk, a)),
                N(a.a, "click", t(a.ao, a, !1), !0),
                N(a.a, "keydown", t(a.ao, a, !0), !0),
                N(a.a, "focus", t(a.pu, a), !0);
            var d = t(function() {
                var a = this.b;
                a && (Vj(a),
                up.fillPool(4),
                b.Ub && bJ(),
                (a = Rf(this.a, "click", d, !0)) && Tf(a))
            }, a);
            N(a.a, "click", d, !0);
            N(a.a, "keypress", t(a.vu, a));
            N(a.a, "keydown", t(a.uu, a));
            c = t(a.F.ou, a.F);
            Pj && a.W ? a.W.o = c : N(a.a, "contextmenu", c);
            N(a.P, "click", t(a.$n, a));
            a.i.G("title-click", t(a.$n, a));
            a.i.G("share-click", t(a.wu, a));
            a.i.G("info-click", t(a.tu, a))
        }
    }
    f.Zn = function(a) {
        var b = this.app.N();
        wK(a) && (this.a.focus(),
        !ef(this.a, "cued-mode") && b.Vb || nK(this.app, !0));
        lJ(this.app, "screenclick")
    }
    ;
    f.qu = function(a) {
        6 != this.app.o && (wK(a) && (a = this.app,
        mK(a, !a.a.$a)),
        lJ(this.app, "screendoubleclick"))
    }
    ;
    f.ru = function(a) {
        var b = a.scale
          , c = this.app.N().$a;
        b * (c ? -1 : 1) > (c ? -0.7 : 1.3) && (b = this.app,
        mK(b, !b.a.$a));
        a.preventDefault()
    }
    ;
    f.su = function(a) {
        a = a.scale;
        var b = this.app.N().$a;
        a * (b ? -1 : 1) > (b ? -0.9 : 1.1) && (a = this.app,
        mK(a, !a.a.$a))
    }
    ;
    f.gw = function(a, b) {
        this.J.hide();
        this.app.we("interstitialclick", {
            lact: a,
            delay: u() - b
        });
        this.za && M(this.za);
        "detailpage" != this.app.N().Z && xK(this.app)
    }
    ;
    f.hw = function(a, b) {
        this.app.we("interstitialtimeout", {
            lact: a,
            delay: b
        })
    }
    ;
    function wK(a) {
        return !sd(a.target, "html5-stop-propagation")
    }
    f.vu = function(a) {
        this.app.a.C = u();
        var b = a.keyCode;
        if (179 == b || 178 == b)
            179 == b && (this.B("playpausetoggled", !0),
            a.preventDefault()),
            178 == b && (this.app.a.C = u(),
            yh(this.app),
            a.preventDefault());
        98 == b && this.app.Xe("onBackgroundChange");
        111 == b && this.app.Xe("onTextOpacityChange");
        119 == b && this.app.Xe("onWindowOpacityChange");
        61 != b && 43 != b || this.app.Xe("onFontSizeIncrease");
        45 != b && 95 != b || this.app.Xe("onFontSizeDecrease");
        32 == b && wK(a) && (nK(this.app, !0),
        a.preventDefault());
        48 <= b && 57 >= b && (uh(this.app, (b - 48) / 10 * ki(this.app)),
        a.preventDefault())
    }
    ;
    f.uu = function(a) {
        var b = a.keyCode;
        if (38 == b || 40 == b || 37 == b || 39 == b) {
            var c = 5;
            a.ctrlKey && (c *= 2);
            if (38 == b)
                c = this.app,
                oK(c, {
                    volume: c.Ba.volume + 5,
                    muted: !1
                });
            else if (40 == b)
                c = this.app,
                oK(c, {
                    volume: c.Ba.volume - 5,
                    muted: !1
                });
            else if (37 == b) {
                var d = this.app
                  , c = -1 * c;
                uh(d, d.getCurrentTime() + c, !1, 250, void 0)
            } else
                39 == b && (d = this.app,
                uh(d, d.getCurrentTime() + c, !1, 250, void 0));
            a.preventDefault()
        }
        36 == b && (uh(this.app, 0),
        a.preventDefault());
        35 == b && (uh(this.app, Infinity),
        a.preventDefault());
        27 == b && (mK(this.app, !1),
        a.preventDefault())
    }
    ;
    f.$n = function(a) {
        a.preventDefault();
        uJ(this.app)
    }
    ;
    f.wu = function() {
        this.app.zh();
        mK(this.app, !1);
        var a = this.app
          , b = a.getVideoData();
        a.B("SHARE_CLICKED", {
            videoId: b.L,
            listId: b.Pa,
            feature: "player_" + a.a.Z
        })
    }
    ;
    f.tu = function() {
        this.app.zh()
    }
    ;
    f.Gx = function() {
        var a = this.i;
        H(a.a, "show-share");
        H(a.a, "show-more-info")
    }
    ;
    f.Ok = function(a) {
        if (a) {
            var b = a.x || a.screenX;
            a = a.y || a.screenY;
            if (this.Ga.x == b && this.Ga.y == a)
                return;
            this.Ga = {
                x: b,
                y: a
            }
        }
        this.app.a.C = u();
        this.Ca = !1;
        this.ha.start();
        this.S && (this.S = !1,
        this.removeClass("hide-controls"),
        this.removeClass("ytp-hide-mouse"),
        this.app.Wa("onShowControls"))
    }
    ;
    f.uk = function(a) {
        if (a && (a = a.relatedTarget) && ld(this.a, a))
            return;
        this.Ca = !0;
        this.ha.stop();
        if (!this.S) {
            if (a = this.A) {
                a = this.A;
                var b = pI.getInstance();
                a = !!b.tc && pf(b.tc, a.U) || null != a.K
            }
            b = (b = Hh(this.app.j, "playlist")) && b.aa;
            this.Sa && this.Ca && !a && !b && (this.S = !0,
            this.addClass("hide-controls"),
            this.mb && this.addClass("ytp-hide-mouse"),
            this.app.Wa("onHideControls"))
        }
    }
    ;
    f.ao = function(a) {
        this.wb = a
    }
    ;
    f.pu = function() {
        I(this.a, "ytp-keyboard-focus", this.wb)
    }
    ;
    function uK(a) {
        a.Q.show(a.app.getVideoData());
        a.addClass("cued-mode")
    }
    f.Rj = function() {
        var a = Uc("html5-popup-dialog", this.a);
        x(a, function(a) {
            Vo(a)
        }, this)
    }
    ;
    f.Fx = function(a) {
        if (this.a) {
            this.u || (this.u = new pJ,
            this.u.X(this.a),
            O(this, this.u));
            var b = this.app.N()
              , c = a.message;
            a = a.messageKey;
            b.Ld || "HTML5_DEFAULT_FALLBACK" != a || (c += Hf("LEARN_MORE"));
            a = this.u;
            b = "embedded" == b.Z;
            Tf(a.b);
            a.b = [];
            Jo(a.template, "content", new Lw(c));
            if (b)
                for (b = a.element.getElementsByTagName("a"),
                c = 0; c < b.length; c++)
                    b[c].setAttribute("target", "_blank");
            this.u.show()
        }
    }
    ;
    f.Ex = function() {
        this.u && this.u.hide()
    }
    ;
    f.Hx = function() {
        this.J && Tf(this.bb);
        this.J || (this.J = new qJ(0,Hf("YTP_STILL_THERE")),
        this.J.X(this.a),
        O(this, this.J));
        var a = hz(this.app.N());
        this.bb = N(this.J, "click", t(this.gw, this, a, u()));
        this.za = L(t(this.hw, this, a, 18E4), 18E4);
        this.app.we("interstitialshown", {
            lact: a
        });
        this.J.show()
    }
    ;
    f.Pp = function(a) {
        var b = this.fa;
        b.show(a);
        b.a = L(t(b.b, b), 10)
    }
    ;
    f.No = function(a) {
        D("html5-viewport-sheet").disabled = !a;
        if (this.F) {
            if (a)
                var b = this.F
                  , c = this.a;
            else
                b = this.F,
                c = document.body;
            F(b.ib);
            c.appendChild(b.ib)
        }
        this.mb = a
    }
    ;
    f.resize = function() {
        var a = this.app.N();
        jf(document.body, "player-size", a.$a ? "fullscreen" : a.ue ? "large" : "small");
        qK.D.resize.call(this)
    }
    ;
    function yK(a, b) {
        var c = "scale(" + a + ") !important";
        b && (c = "translate(-50%, -50%) " + c);
        return ["transform: " + c, "-webkit-transform: " + c, "-moz-transform: " + c, "-o-transform: " + c, "-ms-transform: " + c]
    }
    function tK(a, b) {
        if (!b.isEmpty()) {
            var c = b.width
              , d = b.height
              , e = 0
              , g = 0;
            c / d > 480 / 360 ? (e = d,
            g = 360) : (e = c,
            g = 480);
            c = [];
            d = Bb(e / g, 0.5, 1);
            c.push(".ytp-scalable-icon-shrink {" + yK(d, !1).join("; ") + "; }");
            d = Bb(e / g * 0.33, 0.5, 1);
            c.push(".ytp-scalable-icon-grow {" + yK(d, !0).join("; ") + "; }");
            e = a.ma;
            g = !1;
            e || (g = !0,
            e = dd("style"));
            e.innerHTML = c instanceof Array ? c.join("") : c;
            g && document.getElementsByTagName("head")[0].appendChild(e);
            a.ma = e
        }
    }
    f.Sj = function(a) {
        this.A && ZJ(this.A, a)
    }
    ;
    f.Yk = function() {
        qK.D.Yk.call(this);
        var a = new AJ(this.a,this.app.N());
        O(this, a);
        this.j.a = a;
        var b = Uc("ytp-tooltip-anchor", this.a);
        x(b, function(b) {
            wp(a, b)
        })
    }
    ;
    f.Pc = function() {
        var a = Tc(this.V).parentElement
          , b = this.app.N();
        if (a && "detailpage" == b.Z && !b.$a)
            for (var c in this.ob)
                if (ef(a, c))
                    return this.ob[c];
        return qK.D.Pc.call(this)
    }
    ;
    f.H = function() {
        this.o.hide();
        Yf(this.a);
        Yf(this.P);
        F(this.ma);
        ph(this.W);
        qK.D.H.call(this);
        this.P = this.Q = this.W = this.fa = this.ma = null
    }
    ;
    function Mh(a, b, c) {
        r(a) && (a = {
            mediaContentUrl: a,
            startSeconds: b,
            suggestedQuality: c
        });
        b = a;
        c = /\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);
        b.videoId = c && c[2] ? c[2] : null;
        return Jh(a)
    }
    function Jh(a, b, c) {
        if (ka(a)) {
            b = "endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");
            c = {};
            for (var d = 0; d < b.length; d++) {
                var e = b[d];
                a[e] && (c[e] = a[e])
            }
            return c
        }
        return {
            videoId: a,
            startSeconds: b,
            suggestedQuality: c
        }
    }
    ;function IA(a, b, c) {
        this.g = a;
        this.a = b;
        this.u = c || null;
        this.j = {};
        this.A = NaN;
        this.k = new Xq(this.Fq,3E4,this);
        O(this, this.k);
        this.o = new Xq(this.wj,100,this);
        O(this, this.o);
        this.P = 0;
        this.b = "N";
        this.C = this.F = NaN;
        this.I = "";
        this.i = null;
        if (a = n("ytbin.qoe.getInstance"))
            a = a(),
            a.isRunning() && (this.i = a);
        this.K = !1
    }
    v(IA, nh);
    var zK = {
        5: "N",
        "-1": "N",
        3: "B",
        0: "EN",
        2: "PA",
        1: "PL"
    };
    function AK(a) {
        return (u() - a.P) / 1E3
    }
    function LA(a, b, c) {
        var d = a.j[b];
        d || (d = [],
        a.j[b] = d);
        d.push(AK(a).toFixed(3) + ":" + c.join(":"))
    }
    f = IA.prototype;
    f.wj = function() {
        if (this.u) {
            var a = this.u();
            if (!isNaN(this.J) && !isNaN(a.g)) {
                var b = a.g - this.J;
                0 < b && LA(this, "bwm", [b, (a.j - this.Q).toFixed(3)])
            }
            this.J = a.g;
            this.Q = a.j;
            isNaN(a.a) || LA(this, "bwe", [a.a.toFixed(3)]);
            isNaN(a.b) || (b = a.b,
            a.i < b && (b = a.i),
            this.F != b && (LA(this, "bh", [b.toFixed(3)]),
            this.F = b),
            this.a.Sa && 3 > b && ("PL" == this.b || "B" == this.b) && this.o.start())
        }
    }
    ;
    f.hg = function() {
        if (!this.ia() && !Vb(this.j) && this.u) {
            0 != this.o.Da || this.wj();
            var a = gz(this.a).hmewdrop;
            0 <= a && a != this.C && LA(this, "df", [a - (this.C || 0)]);
            this.C = a;
            a = {
                event: "streamingstats"
            };
            this.g.a && (a.fmt = this.g.a.b);
            a.cpn = this.g.Fa;
            a.ei = this.g.j;
            a.el = this.a.Z;
            a.docid = this.g.L;
            a.ns = this.a.jc;
            this.a.j && (a.adformat = this.a.j);
            this.g.nb && (a.live = this.g.gb ? "dvr" : "live");
            $b(a, az(this.a));
            a.html5 = "1";
            if (this.i && (a.qcft = this.i.getCurrentFrameTime(),
            a.qtql = this.i.getTargetQualityLevel(),
            a.qstb = this.i.getStability(),
            a.qtob = this.i.getTimeOverBudget(),
            !this.K)) {
                var b = this.i.getTimeToTargetFromMark();
                0 <= b && (a.qttt = b,
                this.K = !0)
            }
            var a = yk($y(this.a) + "stream_204", a), c;
            for (c in this.j)
                a += "&" + c + "=" + this.j[c].join(",");
            ua(a);
            this.j = {};
            this.k.start()
        }
    }
    ;
    f.onError = function(a) {
        LA(this, "error", [a, this.g.se.toFixed(3)])
    }
    ;
    f.Fq = function() {
        "PL" == this.b && (LA(this, "vps", [this.b]),
        this.hg())
    }
    ;
    f.H = function() {
        IA.D.H.call(this);
        Ef(this.A)
    }
    ;
    function BK(a, b, c, d) {
        this.fa = b.lj;
        c = c || "";
        this.b = [];
        this.g = [];
        this.a = [];
        this.o = [];
        "watchtime" == c ? this.mh = !0 : "playback" == c ? this.gm = !0 : "atr" == c && (this.u = !0);
        this.jd = this.u ? b.hb + "api/stats/" + c : $y(b) + "api/stats/" + c;
        d && (this.hm = d.fs,
        this.J = d.nbe,
        this.K = d.bc,
        this.P = d.bd,
        this.Oa = d.bt,
        d.rtn && (this.Xf = d.rtn),
        this.mh ? (this.Gc = d.state,
        0 < d.rti && (this.kh = d.rti)) : (this.ob = d.mos,
        this.Kc = d.volume,
        d.at && (this.A = d.at),
        d.allowed && (this.F = d.allowed),
        d.ex_ads && (this.R = d.ex_ads)));
        this.ha = b.j;
        this.nh = b.Sb;
        this.ma = b.o;
        this.na = b.u;
        this.ra = b.A;
        this.Gb = b.F;
        this.va = b.$f;
        this.za = b.gf;
        this.Ca = b.I;
        this.Ea = b.K;
        this.Ga = b.P;
        this.Lc = b.Q;
        this.Na = b.R;
        this.Sa = b.a;
        this.Xa = b.Z;
        this.o = b.g;
        this.mb = b.i;
        this.jm = b.jc;
        this.Hc = b.cb;
        this.Ic = b.W;
        this.Jc = b.V;
        this.j = b.k;
        this.ld = b.va;
        this.V = b.za;
        this.$ = b.Ca;
        this.kd = hz(b);
        !a.a || a.$.isEmpty();
        this.nh = a.df || this.nh;
        this.W = a.Yl;
        this.la = a.Fa;
        this.k = a.se;
        this.Q = a.R;
        this.hd = a.a.b;
        this.im = a.Kd;
        this.bb = a.Sf;
        a.nb && (this.lb = a.gb ? "dvr" : "live");
        this.xb = a.hh;
        this.md = a.md;
        this.Ya = a.Ya;
        this.Va = a.j;
        this.Pa = a.Pa;
        this.j = a.ha || this.j;
        this.S = a.ra;
        this.gd = a.o;
        this.L = a.L;
        this.wb = a.Sa
    }
    f = BK.prototype;
    f.nh = !1;
    f.ih = !1;
    f.pm = !1;
    f.hm = !1;
    f.ef = !1;
    f.im = !1;
    f.jm = "yt";
    f.kh = null;
    f.Xf = null;
    f.Mp = !1;
    f.mh = !1;
    f.gm = !1;
    f.send = function() {
        if (!this.Mp) {
            var a = this.Uh()
              , a = yk(this.jd, a);
            this.u ? this.C && Hk(a, {
                method: "POST",
                Ze: {
                    atr: this.C
                }
            }) : ua(a);
            this.Mp = !0
        }
    }
    ;
    f.Uh = function() {
        var a = {
            ns: this.jm,
            el: this.Xa,
            hl: this.mb,
            cr: this.Jc,
            cpn: this.la,
            docid: this.L,
            ver: 2,
            referrer: this.Ic,
            cmt: this.od(this.k),
            plid: this.Ya,
            ei: this.Va,
            fmt: this.hd,
            fs: this.hm ? "1" : "0",
            rt: this.od(this.I),
            c: this.va,
            cver: this.za,
            adformat: this.ha,
            content_v: this.ma,
            euri: this.Sa,
            subscribed: this.gd,
            lact: this.kd,
            live: this.lb,
            cplatform: this.Na,
            cbrand: this.na,
            cmodel: this.Ca,
            cnetwork: this.Ea,
            cbr: this.ra,
            cbrver: this.Gb,
            cos: this.Ga,
            cosver: this.Lc,
            mos: this.ob,
            q: this.ld,
            osid: this.wb,
            state: this.Gc,
            volume: this.Kc
        };
        this.nh && (a.autoplay = "1");
        this.pm && (a["final"] = "1");
        this.im && (a.splay = "1");
        this.Q && (a.delay = this.Q);
        q(this.V) && this.$ && (a.uga = this.$ + this.V);
        q(this.i) && (a.len = this.od(this.i));
        !this.mh && 0 < this.o.length && (a.fexp = this.o.toString());
        null != this.Xf && (a.rtn = this.od(this.Xf));
        this.j && (a.feature = this.j);
        this.Pa && (a.list = this.Pa);
        this.S && (a.ytr = this.S);
        this.mh ? (a.idpj = this.bb,
        a.ldpj = this.xb,
        null != this.kh && (a.rti = this.od(this.kh))) : (q(this.A) && (a.at = this.A),
        q(this.F) && (a.allowed = this.F),
        q(this.R) && (a.ex_ads = this.R));
        this.gm && this.W && (a.tst = this.W);
        this.fa || (a.ps = this.Hc,
        this.K && (a.bc = this.K),
        this.P && (a.bd = this.P,
        a.bt = this.Oa),
        0 < this.J && (a.nbe = this.J));
        !this.ef && 0 < this.b.length ? (a.st = Ra(this.b, this.od).join(","),
        a.et = Ra(this.g, this.od).join(","),
        a.vis = Ra(this.a, this.od).join(",")) : (this.ef || this.ih) && 1 == this.a.length && (a.vis = this.od(this.a[0]));
        return a
    }
    ;
    f.od = function(a) {
        return (1 * a.toFixed(3)).toString()
    }
    ;
    function CK(a, b, c, d) {
        this.b = [];
        this.g = [];
        this.j = [];
        this.Yf = b.rq;
        c && (this.P = c.nbe,
        this.Q = c.bc,
        this.R = c.bd,
        this.lb = c.bt,
        this.$l = c.fs,
        this.am = c.mos,
        this.Zl = c.ssrt,
        this.source = c.sourceid,
        this.za = c.sd,
        this.lj = c.hmewadbc,
        this.va = c.hmewdfc,
        this.jj = c.hmewdrop,
        this.ij = c.hmewvdbc,
        this.Ic = c.hmemdf,
        this.Jc = c.hmempaintdelay,
        this.ld = c.hmempainted,
        this.la = c.hmempf,
        this.gd = c.hmempresented,
        this.kd = c.volume);
        this.nj = b.nj;
        this.lh = b.Sb;
        this.S = b.o;
        this.Ga = b.u;
        this.Lc = b.A;
        this.Na = b.F;
        this.Oa = b.$f;
        this.Sa = b.gf;
        this.Va = b.I;
        this.Xa = b.K;
        this.bb = b.P;
        this.mb = b.Q;
        this.ob = b.R;
        this.xb = b.a;
        this.Gc = b.Z;
        this.j = b.g;
        this.Hc = b.S;
        this.Kc = b.i;
        this.dm = b.jc;
        this.Zf = b.Zf ? "1" : void 0;
        this.A = cz(b);
        this.jd = b.cb;
        this.hd = dz(b);
        this.pe = b.V;
        this.o = b.k;
        this.F = new B(window.screen.width,window.screen.height);
        this.Uf = b.va;
        this.ma = b.za;
        this.na = b.Ca;
        this.Tf = hz(b);
        this.K = fz(b);
        this.Gb = b.lb;
        this.hj = b.fa;
        !a.a || a.$.isEmpty();
        this.lh = a.df || this.lh;
        this.Ca = a.Fa;
        this.J = a.J;
        this.W = a.R;
        this.Ea = a.Ic;
        this.V = a.a;
        this.bm = a.Kd;
        this.$ = a.Sf;
        a.nb && (this.fa = a.gb ? "dvr" : "live");
        this.ha = a.hh;
        this.md = a.md;
        this.Ya = a.Ya;
        this.wb = a.j;
        this.Pa = a.Pa;
        this.qe = a.na;
        this.o = a.ha || this.o;
        this.re = a.ra;
        this.fm = a.kj;
        this.Vf = a.o;
        this.Wf = a.Jc;
        this.L = a.L;
        this.ra = a.$;
        this.u = d || []
    }
    f = CK.prototype;
    f.lh = !1;
    f.ih = !1;
    f.$l = !1;
    f.ef = !1;
    f.am = !1;
    f.bm = !1;
    f.Zl = !1;
    f.dm = "yt";
    f.fm = !1;
    f.iq = !1;
    f.send = function() {
        if (!this.iq) {
            var a = this.Uh()
              , a = yk(this.Yf, a);
            ua(a);
            this.iq = !0
        }
    }
    ;
    f.Uh = function() {
        var a = {
            html5: "1",
            ns: this.dm,
            ps: this.jd,
            el: this.Gc,
            hl: this.Kc,
            cr: this.pe,
            c: this.Oa,
            cpn: this.Ca,
            docid: this.L,
            sd: this.za,
            sourceid: this.source,
            referrer: this.hd,
            q: this.Uf,
            plid: this.Ya,
            ei: this.wb,
            fmt: this.V ? this.V.b : 0,
            fs: this.$l ? "1" : "0",
            screenw: this.F.width,
            screenh: this.F.height,
            w: this.K.width,
            h: this.K.height,
            vw: this.ra.width,
            vh: this.ra.height,
            playerw: this.A.width,
            playerh: this.A.height,
            vid: this.hj,
            rt: this.ii(this.I),
            mos: this.am,
            volume: this.kd,
            app: this.nj,
            csipt: this.J,
            on3g: this.Zf,
            partnerid: this.md,
            sdetail: this.qe,
            subscribed: this.Vf,
            sw: this.Ea,
            list: this.Pa,
            eurl: this.xb,
            framer: this.Hc,
            feature: this.o,
            ytr: this.re,
            threed: this.Wf,
            lact: this.Tf,
            cver: this.Sa,
            cplatform: this.ob,
            cbrand: this.Ga,
            cmodel: this.Va,
            cnetwork: this.Xa,
            cbr: this.Lc,
            cbrver: this.Na,
            cos: this.bb,
            cosver: this.mb
        };
        this.ef && (a.playback = "1");
        this.lh && (a.autoplay = "1");
        this.bm && (a.splay = "1");
        this.Zl && (a.ssrt = "1");
        this.W && (a.delay = this.W);
        this.fm && !this.ef && (a.vtmp = "1");
        this.ih && (a.tv = "1");
        this.S && (a.content_v = this.S);
        void 0 != this.ma && this.na && (a.uga = this.na + this.ma);
        void 0 != this.i && (a.len = this.ii(this.i));
        0 < this.j.length && (a.fexp = this.j.toString());
        0 < this.$ && (a.idpj = this.$);
        0 < this.ha && (a.ldpj = this.ha);
        void 0 != this.Gb && (a.attrib = this.Gb);
        void 0 != this.fa && (a.live = this.fa);
        this.Q && (a.bc = this.Q);
        this.R && (a.bd = this.R,
        a.bt = this.lb);
        0 < this.P && (a.nbe = this.P);
        void 0 != this.va && (a.hmewdfc = this.va,
        a.hmewdrop = this.jj,
        a.hmewvdbc = this.ij,
        a.hmewadbc = this.lj);
        void 0 != this.la && (a.hmempf = this.la,
        a.hmemdf = this.Ic,
        a.hmempresented = this.gd,
        a.hmempainted = this.ld,
        a.hmempaintdelay = this.Jc);
        0 < this.b.length && (a.st = this.b.map(this.ii).join(","),
        a.et = this.g.map(this.ii).join(","));
        for (var b = 0; b < this.u.length; b++)
            Lb(OD(this.u[b]), function(b, d) {
                d in a || (a[d] = b)
            });
        return a
    }
    ;
    f.ii = function(a) {
        return (1 * a.toFixed(3)).toString()
    }
    ;
    function DK() {
        this.ya = [];
        this.J = [10, 10, 10, 40];
        this.o = null;
        this.u = "paused";
        this.ra = !1;
        this.C = NaN;
        this.R = this.I = 0;
        this.$ = this.K = null;
        this.fa = MD;
        this.j = null;
        this.S = "";
        this.W = this.k = 0;
        this.A = NaN;
        this.Q = this.g = this.ha = 0
    }
    v(DK, nh);
    function EK(a) {
        var b = a.$();
        a.K && ra(b, a.K());
        return b
    }
    function kB(a) {
        return (u() - a.ha) / 1E3
    }
    function lB(a, b, c) {
        var d = kB(a);
        c = isNaN(c) ? d : c;
        c = Math.ceil(c);
        var e = a.J[a.I];
        a.I + 1 < a.J.length && a.I++;
        c = c + e;
        d = 1E3 * (c - d);
        a.C = L(t(a.ma, a, c, b), d);
        return c
    }
    DK.prototype.ma = function(a, b) {
        if (!this.ia()) {
            this.C = NaN;
            this.P(!0);
            var c = FK(this)
              , d = GK(this, c);
            b && (d.kh = a);
            var e = 400 < this.R;
            c.length && !e && (d.Xf = lB(this, !0, a));
            d.send();
            this.R++
        }
    }
    ;
    DK.prototype.P = function(a) {
        var b = this.j() || 0
          , c = kB(this)
          , d = b - this.k
          , e = c - this.A;
        if (!(1E-5 > Math.abs(d - e)))
            if (0 > d)
                HK(this),
                this.g = b;
            else if (d > e)
                d > e + 0.5 && (HK(this),
                this.g = b);
            else if (0 == d) {
                d < e - 0.5 && (HK(this),
                this.g = b);
                return
            }
        this.A = c;
        this.k = b;
        0 == d || a || this.i && isNaN(this.C) && lB(this, !1)
    }
    ;
    function HK(a, b) {
        var c = a.k - a.g;
        if (b && 0 < c || 0.5 < c)
            a.ya.push([a.g, a.k, mB(a)]),
            a.g = a.k,
            a.Q += c
    }
    function FK(a, b) {
        HK(a, b);
        var c = a.ya;
        a.ya = [];
        return c
    }
    function mB(a) {
        var b = rf("visibilityState", document);
        return b && "visible" != b ? 3 : a.a.$a ? 2 : 0
    }
    function gB(a, b) {
        var c = EK(a)
          , d = a.fa();
        a.a.Xr ? (ra(c, {
            state: a.u
        }),
        x(d, function(a) {
            ra(c, OD(a))
        }),
        d = new BK(a.b,a.a,b,c)) : d = new CK(a.b,a.a,c,d);
        d.k = a.j();
        d.i = a.la();
        d.I = kB(a);
        return d
    }
    function GK(a, b) {
        b.length || (b = [[a.g, a.g, mB(a)]]);
        for (var c = gB(a, "watchtime"), d = 0; d < b.length; d++)
            c.b.push(b[d][0]),
            c.g.push(b[d][1]),
            c.a && c.a.push(b[d][2]);
        c.k = a.k;
        return c
    }
    function KA(a) {
        a.P(!0);
        return GK(a, FK(a, !0))
    }
    function nB(a) {
        var b = a.a;
        a = a.b;
        var c = a.ha || b.k
          , c = {
            ns: b.jc,
            html5: "1",
            el: b.Z,
            ps: b.cb,
            fexp: b.g.join(",") || void 0,
            feature: c || void 0,
            ytr: a.ra || void 0,
            list: a.Pa,
            d: b.Ea,
            f: b.ma
        };
        b.Sb && (c.autoplay = "1");
        a.o && (c.subscribed = a.o);
        return c
    }
    DK.prototype.onError = function(a) {
        this.o.onError(a)
    }
    ;
    function pB(a, b) {
        if (!a.ia()) {
            R(b.a, 2) ? (a.u = "paused",
            a.i && KA(a).send()) : R(b.a, 8) ? (a.u = "playing",
            a.i && isNaN(a.C) && lB(a, !1)) : a.u = "paused";
            var c = a.o, d = b.a, e;
            e = b.a;
            if (R(e, 128))
                e = "ER";
            else if (R(e, 16) || R(e, 32))
                e = "S";
            else {
                var g = zK[jk(e)];
                "B" == g && R(e, 4) && (g = "PB");
                e = g
            }
            e != c.b && (!c.a.Sa || "B" != e && "PB" != e || c.wj(),
            LA(c, "vps", [e]),
            c.b = e);
            if (0 < Uq(b, 256) || R(d, 128))
                c.onError(d.a.errorCode);
            (R(d, 2) || R(d, 128)) && c.hg()
        }
    }
    function XA(a, b, c) {
        b.rt = kB(a);
        ra(b, EK(a));
        ra(b, nB(a));
        "streamingerror" == b.event ? a = "//s.youtube.com/stream_204" : (a = a.a.hb + "player_204",
        delete b.fexp);
        b = Bk(a, b);
        ua(b, c)
    }
    function UA(a, b) {
        var c = a.a
          , d = a.b
          , e = {
            ns: c.jc,
            el: c.Z,
            eurl: c.a,
            fmt: d.a ? d.a.b : 0,
            html5: 1,
            list: d.Pa,
            plid: d.Ya,
            ei: d.j,
            ps: c.cb,
            noflv: 1,
            st: a.j(),
            video_id: d.L
        };
        c.Sb && (b.autoplay = "1");
        d.oj && (b.tmi = "1");
        ra(e, b);
        ra(e, az(c));
        ua(yk("//www.youtube.com/live_204", e))
    }
    DK.prototype.H = function() {
        DK.D.H.call(this);
        M(this.C);
        this.C = NaN;
        Ef(this.F);
        this.F = NaN
    }
    ;
    function IK(a, b, c) {
        T.call(this);
        this.o = 1;
        this.W = {};
        this.G("openingpage", t(this.Ds, this));
        this.G("initializingmode", t(this.As, this));
        this.G("internalenvironmentdatachange", t(this.zs, this));
        this.G("internalvolumechange", t(this.fn, this));
        this.J = null;
        b instanceof bg || (b = new bg(b));
        this.J = b;
        b = this.J.args;
        ph(this.a);
        this.a = new Vy(b || {});
        this.B("internalenvironmentdatachange", "newdata");
        this.ha = Xy(this.a) ? new gi(this,1) : new rh(this,1);
        O(this, this.ha);
        this.S = new li(this);
        O(this, this.S);
        this.I = new li(this,1);
        O(this, this.I);
        this.Q = {};
        this.la = ac(["internalvideodatachange", this.ts, "liveviewshift", this.Bs, "commoninfoloaded", this.ys, "playbackready", this.us, "playbackstarted", this.vs, "statechange", this.ws, "videoelementevent", this.Qs, "urlauthexpired", this.Ks]);
        this.na = new si(this.a);
        this.j = new py;
        O(this, this.j);
        this.b = null;
        b = new EA(this.a,1);
        if (this.b != b) {
            if (this.b) {
                var d = this.b, e = this.la, g;
                for (g in e)
                    d.ba(g, e[g], this)
            }
            b.P = this.na;
            g = this.la;
            for (var h in g)
                b.G(h, g[h], this);
            this.b = b
        }
        this.ma = ac(["beginseeking", this.xs, "endseeking", this.Ns, "internalvideodatachange", this.jn, "internalvideoformatchange", this.Ls, "progresssync", this.Gs, "seekto", this.Hs, "onLoadProgress", this.Cs, "onVideoProgress", this.Ms, "newlicensesession", this.Os, "playbackdataloaded", this.wm, "playbackready", this.Es, "statechange", this.Fs]);
        this.k = null;
        DC(this, this.b);
        this.V = -1;
        this.F = this.u = null;
        this.A = {};
        this.P = null;
        this.K = {};
        this.R = null;
        this.fa = 0;
        this.$ = !1;
        c ? this.ea = c(this) : this.ea = new qK(this);
        O(this, this.ea);
        this.ea.G("templateerror", this.Is, this);
        this.ea.G("templateready", this.Js, this);
        this.ea.G("resize", this.Ps, this);
        uA("fs");
        c = this.ea;
        c.V = a;
        c.Vj() || c.B("templateerror");
        lJ(this, "init")
    }
    v(IK, T);
    f = IK.prototype;
    f.Vd = null;
    f.Qi = null;
    f.Re = !0;
    f.Ba = null;
    f.Ff = null;
    f.xg = 1;
    f.ea = null;
    f.Jj = null;
    f.Bf = null;
    f.tl = !1;
    f.Ii = null;
    f.bp = 0;
    var JK = {};
    function KK(a) {
        var b = up.getTag();
        a.i = b;
        a.Vd = a.i;
        a.k && ZA(a.k, b);
        ak(a.i, a.xg);
        a.a.Od ? (a.Bf && Tf(a.Bf),
        a.Bf = N(a.i, "volumechange", t(a.du, a), !1)) : a.i.setVolume(a.Ba.volume, a.Ba.muted);
        b = a.ea;
        b.b = a.i;
        b.la = new Hb(0,0,0,0);
        b.b.parentNode || b.g.appendChild(b.b);
        G(b.b, "video-stream");
        G(b.b, "html5-main-video");
        var c = b.app.N();
        c.Vb && c.te && b.b.setAttribute("controls", !0);
        c.Fh && b.b.setAttribute("webkit-playsinline", !0);
        b.b.setAttribute("x-webkit-airplay", "allow");
        c.bk && (b.ra = N(b.b, "click", t(b.b.play, b.b)));
        a.a.Ja = a.i
    }
    function LK(a) {
        if (a.i) {
            a.Bf && (Tf(a.Bf),
            a.Bf = null);
            a.k && tp(a.k);
            var b = a.ea;
            b.b && (F(b.b),
            b.b = null);
            a.a.Ja = null;
            up.releaseTag(a.i);
            a.i = null
        }
    }
    function qp(a, b) {
        a.a.Hb ? (a.P && (Bd(a.i, a.P.left, a.P.top),
        Md(a.i, Kb(a.P)),
        a.P = null),
        Zj(a.i),
        tp(a.k),
        ZA(a.k, a.i),
        ak(a.i, a.xg)) : up.releaseTag(b)
    }
    function DC(a, b) {
        if (a.k != b) {
            a.k && (qy(a.j),
            FC(a, a.k));
            var c = b.getPlayerType();
            a.Q[c] = b;
            a.k = b;
            b.P = a.na;
            a.i && ZA(b, a.i);
            var c = a.ma, d;
            for (d in c)
                b.G(d, c[d], a);
            a.B("videoplayerchange", b);
            MA(b) && a.wm()
        }
    }
    function FC(a, b) {
        tp(b);
        var c = a.ma, d;
        for (d in c)
            b.ba(d, c[d], a);
        b != a.b && (c = b.getPlayerType(),
        a.Q[c] == b && delete a.Q[c]);
        b == a.k && (a.k = null,
        b != a.b && DC(a, a.b))
    }
    function Q(a, b) {
        return b ? a.Q[b] || null : a.k
    }
    function MK(a) {
        var b = a.k.getVideoData();
        a.jn("newdata", a.k, b);
        var c = a.j;
        x([Wq, Jx, Up, ly, rw, Ux, Zx, fy, Ju], c.j, c);
        a.B("videoready", b);
        6 != a.o && SA(a.k)
    }
    f = IK.prototype;
    f.us = function() {
        NK(this, 5)
    }
    ;
    f.Es = function(a) {
        a = a.getPlayerState();
        R(a, 8) && !R(a, 2) && this.playVideo()
    }
    ;
    function di(a) {
        !a.F && a.I.N().lg && (a.F = new GI(a),
        a.F && OK(a, a.F));
        var b = a.F;
        b && !b.Df && b.eb(a.I) && b.create()
    }
    function OK(a, b) {
        O(a, b);
        b.G("loaded", a.Mm, a);
        b.G("unloaded", a.Nm, a);
        b.G("command_pause", PK(a.pauseVideo, a));
        b.G("command_play", PK(a.playVideo, a));
        b.G("command_seek", PK(a.of, a));
        b.G("command_disable_controls", a.mf, a);
        b.G("command_enable_controls", a.th, a);
        b.G("command_redirect_controls", a.Rm, a);
        b.G("command_stop_redirect_controls", a.qh, a);
        b.G("command_redirected_show_is_playing", a.ea.Sj, a.ea);
        b.G("command_progress", a.tj, a);
        b.G("command_add_cuerange", a.Lm, a);
        b.G("command_remove_cuerange", a.Pm, a);
        b.G("command_remove_cuerange_all", a.Qm, a);
        b.G("command_update_cuerange_markers", a.Tm, a);
        b.G("command_preroll_ready", a.Sm, a);
        b.G("command_hide_all_dialogs", a.ea.Rj, a.ea);
        b.G("command_clear_video_overlays", a.zh, a);
        b.G("command_log", a.we, a);
        b.G("command_navigate_to_url", a.Dj, a);
        b.G("publish_external_event", a.Om, a);
        b.G("command_log_timing", a.j.A, a.j)
    }
    function ei(a) {
        a && a.Df && a.destroy()
    }
    f.Wa = function(a, b) {
        this.B.apply(this, arguments);
        this.Xe.apply(this, arguments)
    }
    ;
    f.Xi = function(a, b) {
        var c = eb(arguments);
        Xy(this.a) && c.push(this.k.getPlayerType());
        this.B.apply(this, c)
    }
    ;
    f.N = function() {
        return this.a
    }
    ;
    f.getVideoData = function(a) {
        return (a = Q(this, a)) ? a.getVideoData() : null
    }
    ;
    f.log_ = function() {}
    ;
    f.As = function() {
        Ef(0);
        this.a.Od || this.fn(this.Ba)
    }
    ;
    f.fk = function() {
        var a = gz(this.a);
        a.fs = this.a.$a;
        a.volume = Math.round(this.Ba.volume);
        a.mos = this.Ba.muted ? 1 : 0;
        return a
    }
    ;
    function QK(a) {
        var b = new DK
          , c = t(a.fk, a);
        b.K = c;
        a = t(a.Ox, a);
        b.fa = a;
        return b
    }
    f.Ox = function() {
        var a = ty(this.j);
        if (this.u) {
            var b = this.u.Li();
            b && a.push(b)
        }
        return a
    }
    ;
    f.Is = function() {
        oy(this.b, 5, void 0, void 0)
    }
    ;
    f.Js = function() {
        this.a.Bh = this.ea.a;
        var a = this.j
          , b = {};
        b.loaded = t(this.Mm, this);
        b.unloaded = t(this.Nm, this);
        b.command_pause = PK(this.pauseVideo, this);
        b.command_play = PK(this.playVideo, this);
        b.command_seek = PK(this.of, this);
        b.command_disable_controls = t(this.mf, this);
        b.command_enable_controls = t(this.th, this);
        b.command_redirect_controls = t(this.Rm, this);
        b.command_stop_redirect_controls = t(this.qh, this);
        b.command_redirected_show_is_playing = t(this.ea.Sj, this.ea);
        b.command_progress = t(this.tj, this);
        b.command_add_cuerange = t(this.Lm, this);
        b.command_remove_cuerange = t(this.Pm, this);
        b.command_remove_cuerange_all = t(this.Qm, this);
        b.command_preroll_ready = t(this.Sm, this);
        b.command_update_cuerange_markers = t(this.Tm, this);
        b.command_hide_all_dialogs = t(this.ea.Rj, this.ea);
        b.command_clear_video_overlays = t(this.zh, this);
        b.command_navigate_to_url = t(this.Dj, this);
        b.command_log = t(this.we, this);
        b.publish_external_event = t(this.Om, this);
        b.module_menu_button_add = t(this.is, this);
        b.module_menu_button_remove = t(this.ks, this);
        b.module_menu_item_add = t(this.ls, this);
        b.module_menu_item_remove = t(this.ms, this);
        b.module_menu_show = t(this.os, this);
        a.k = b;
        b = this.S;
        a.b != b && (qy(a),
        a.i = {},
        a.b = b);
        this.ea.qj();
        a = this.ha;
        a.U = this.ea.a;
        for (var c in a.g)
            a.U[c] = a.g[c];
        for (c in a.i)
            a.U[c] = a.i[c];
        c = t(this.rs, this);
        a = document;
        b = tf("fullscreenchange", a);
        "msfullscreenchange" == b && (b = "MSFullscreenChange");
        this.Jj = b ? N(a, b, c) : null;
        c = this.J.args;
        this.a.yj ? this.Ba = ri() : this.Ba || (this.Ba = {
            volume: 100,
            muted: !1,
            nonNormalized: 100
        });
        KK(this);
        a = new Lh(c);
        FA(this.b, a, QK(this));
        b = this.getVideoData();
        if ("detailpage" == this.a.Z) {
            var d;
            d = b.L;
            var e = Qg("yt-player-restore-playhead");
            d = e ? e[d] : void 0;
            d && (b.Ha = d)
        }
        Rg("yt-player-restore-playhead");
        b = this.ea.Pc();
        this.a.pb = b;
        "detailpage" != this.a.Z && c && (c.playlist || c.list || c.api) && (RK(this, c),
        Sn(a) || (c = this.g,
        a = t(this.gn, this),
        c.De = a,
        c.Wd && L(c.De, 0)));
        if (c = this.J.args.jsapicallback)
            ja(c) || (c = n(c)),
            c && PK(t(c, l, this.a.Aj), l);
        this.a.lg = ci(this.a) && (!Ya(hh()) || !Ya(jh()));
        Am() ? this.a.rj ? SK(this) : "leanback" != this.a.Z && TK(this) : oy(this.b, 5, "HTML5_NO_AVAILABLE_FORMATS_FALLBACK", void 0);
        this.ea.Wj()
    }
    ;
    function TK(a) {
        a.B("initializingmode");
        NK(a, 2)
    }
    function SK(a) {
        a.B("initializingmode");
        DC(a, a.b);
        NK(a, 3);
        a.a.Hb || (LK(a),
        KK(a),
        ZA(a.b, a.i));
        PA(a.b);
        UK(a, 3)
    }
    function PK(a, b) {
        return function() {
            var c = Array.prototype.slice.call(arguments);
            L(function() {
                a.apply(b || this, c)
            }, 0)
        }
    }
    f.Dj = function(a, b) {
        b ? mJ(this, a) : (window.ytspf || {}).enabled ? spf.navigate(a) : window.location = yk(a, {}) + ""
    }
    ;
    f.we = function(a, b, c) {
        var d = Q(this);
        b.event = a;
        d.i && XA(d.i, b, c)
    }
    ;
    function Bh(a, b) {
        if (!isNaN(b) && a.i) {
            var c = 1
              , c = a.a.ig ? Ch : [1]
              , c = 1 > b ? Ua(c, function(a) {
                return a >= b
            }) : Wa(c, function(a) {
                return a <= b
            });
            a.xg != c && (a.xg = c,
            a.b == a.k && ak(a.i, c),
            a.B("onPlaybackRateChange", c))
        }
    }
    function Dh(a, b) {
        var c = a.getVideoData(b);
        return c && c.a ? c.a.g.a : "unknown"
    }
    function lK(a) {
        return (a = Q(a, void 0)) ? jm(qA(a.ra, a.a)) : "unknown"
    }
    function Eh(a, b, c) {
        if (a = Q(a, c))
            b = em(b, b, !0),
            Wx(a, "m", b)
    }
    f.getCurrentTime = function(a) {
        return (a = Q(this, a)) ? a.getCurrentTime() : 0
    }
    ;
    function ki(a, b) {
        var c = Q(a, b);
        return c ? c.Mc() : 0
    }
    function Qh(a, b) {
        var c = a.b.getDebugInfo(b);
        c.debug_playbackQuality = Dh(a);
        c.debug_date = (new Date).toString();
        return ub(c)
    }
    function Tx(a, b) {
        var c = a.getVideoData()
          , d = !!c.V || !!c.wf || !b;
        a.B("threedenabled", d);
        d && a.i.setAttribute("mozStereoMode", "1");
        Px() && (a.i.setAttribute("mozStereoMode", d ? "1" : "0"),
        c = qm[d ? c.qe : 0],
        d = document.createElement("NvStereoExtDataElement"),
        d.setAttribute("stereoMode", c),
        gd(document.documentElement, d),
        Zf(d, "3DModeEvent"))
    }
    f.getPlayerState = function(a) {
        return (a = Q(this, a || 1)) && a.getPlayerState()
    }
    ;
    f.Qs = function(a) {
        var b = a.target;
        switch (a.type) {
        case "loadedmetadata":
            wA("fvb") || uA("fvb");
            this.fa = L(t(this.ea.resize, this.ea), 16);
            break;
        case "loadstart":
            wA("gv") || uA("gv");
            break;
        case "progress":
        case "timeupdate":
            wA("l2s") || 2 <= tj(b.buffered) && uA("l2s")
        }
    }
    ;
    f.Os = function(a) {
        if (this.tl) {
            var b = this.bp.toString();
            this.bp++;
            this.Ii[b] = a;
            a = {
                request: eb(a.a[0] ? a.a[0].message : null),
                sessionId: b,
                system: a.i.a,
                url: a.j
            };
            this.B("onNewLicenseSession", a)
        } else
            a.start()
    }
    ;
    f.Cs = function(a, b) {
        this.Xi("onLoadProgress", b)
    }
    ;
    f.Ms = function(a, b) {
        this.Xi("onVideoProgress", b)
    }
    ;
    f.Gs = function(a, b, c, d, e) {
        if (!e && a.ag() && !HA(a)) {
            e = a.getVideoData();
            if (this.a.ve && !this.a.oh && e.Aa && !e.Mo && e.Qd >= e.zo) {
                var g;
                g = a.N();
                var h = Bb(e.se / e.Aa, 0, 1)
                  , h = {
                    html5: "1",
                    video_id: e.L,
                    eurl: g.a,
                    framer: g.S,
                    feature: g.k,
                    ps: g.cb,
                    el: g.Z,
                    list: e.Pa,
                    w: h,
                    l: e.Aa,
                    plid: e.Ya,
                    ei: e.j,
                    access_token: e.P,
                    tpmt: e.Qd,
                    cpn: e.Fa
                };
                g.j && (h.adformat = g.j);
                g.W && (h.referrer = dz(g));
                g.Sb && (h.autoplay = "1");
                g.Qa && (h.authuser = g.Qa);
                g.Za && (h.pageid = g.Za);
                e.Kd && (h.splay = "1");
                e.o && (h.subscribed = e.o);
                ra(h, az(g));
                g = yk(g.hb + "set_awesome", h);
                ua(g);
                e.Mo = !0
            }
            e.Aa && e.Qd >= e.zm && VK(this)
        }
        this.tj(b, c, d, a)
    }
    ;
    f.tj = function(a, b, c, d) {
        this.B("progresssync", a, b, c || 0, (d || Q(this)).getPlayerType())
    }
    ;
    f.ws = function(a) {
        var b;
        (b = !R(a.a, 2)) || ("embedded" == this.a.Z && this.a.Vf ? (b = Math.floor(hz(this.a) / 6E4),
        b = Math.min(0.005, 1.24601E-4 * Math.exp(0.062 * b)),
        Math.random() < b ? (this.B("interstitial"),
        b = !0) : b = !1) : b = !1,
        b = !b && !xK(this));
        if (b) {
            R(a.a, 2) && (this.pauseVideo(),
            R(a.b, 32) && this.b.oi(),
            this.a.Tb && mK(this, !1));
            0 < Uq(a, 256) && (b = a.a.a,
            bi(this.b, b.errorCode, b.errorDetail));
            if (R(a.a, 128)) {
                b = a.a;
                Ef(0);
                Ah(this);
                b = b.a;
                206 == b.errorCode && bi(this.b, b.errorCode, b.errorDetail);
                b.message || (b.messageKey || (b.messageKey = "HTML5_DEFAULT_FALLBACK"),
                b.message = Hf(b.messageKey));
                5 == b.errorCode && bi(this.b, 208, b.errorDetail);
                var c = 5;
                206 == b.errorCode && (c = 150);
                y(dk, b.errorCode) && (c = b.errorCode);
                this.B("onError", c);
                this.B("onDetailedError", b)
            }
            this.B("applicationplayerstatechange", a);
            R(a.a, 2) && (a = this.getVideoData()) && a.nb && !a.gb && this.mf(["play_pause"])
        }
    }
    ;
    f.Fs = function(a) {
        !R(a.a, 32) && 0 > Uq(a, 16) && (!R(a.a, 8) || this.i.ended && !R(a.a, 2) || this.playVideo());
        this.B("presentingplayerstatechange", a);
        this.Xe("onStateChange", a);
        UK(this, jk(a.a))
    }
    ;
    f.ts = function(a, b, c) {
        if ("newdata" == a) {
            ei(this.u);
            ei(this.F);
            a = [];
            for (var d in this.A)
                zh(this, d) && a.push(d);
            this.A = {};
            0 < a.length && this.B("controlsenabled", a);
            this.qh();
            this.W = {}
        }
        this.getVideoData().Qj ? (this.Ff = Xb(this.Ba),
        this.mf(["audio"]),
        d = this.i,
        d.Uk = !0,
        d.muted = !0) : (zh(this, "audio") && this.th(["audio"]),
        this.i.Uk = !1,
        this.Ff && (oK(this, this.Ff),
        this.Ff = null));
        d = this.getVideoData();
        d.nb && !this.a.Nj ? oy(this.b, 205, "DEVICE_FALLBACK", void 0) : d.nb && !d.gb ? this.mf(["seek"]) : this.th(["seek"]);
        this.getVideoData().Hk && !this.a.Oj && oy(this.b, 207, "DEVICE_FALLBACK", void 0);
        if (c.W || c.i.focEnabled || c.i.rmktEnabled)
            c = 1E3 * this.getVideoData().Aa,
            WK(this, "part2viewed", 0, c),
            WK(this, "videoplaytime25", 0.25 * c, c),
            WK(this, "videoplaytime50", 0.5 * c, c),
            WK(this, "videoplaytime75", 0.75 * c, c),
            WK(this, "videoplaytime100", c, 2147483647),
            WK(this, "conversionview", c, 2147483647)
    }
    ;
    f.jn = function(a, b, c) {
        "newdata" == a && (qy(this.j),
        Bh(this, 1),
        b.a.cg && b.i && UA(b.i, {
            metric: "connected"
        }));
        this.Ba.volume = (this.Ba.nonNormalized || this.Ba.volume) * this.getVideoData().Rh;
        c.zo = Math.min(0.8 * c.Aa, 180);
        this.Wa("videodatachange", a, c, b.getPlayerType())
    }
    ;
    f.Ls = function(a, b) {
        var c = this.k.getVideoData();
        a == c && this.B("onPlaybackQualityChange", a.a.g.a, b)
    }
    ;
    f.zs = function() {
        "detailpage" == this.a.Z && hi(this)
    }
    ;
    function hi(a) {
        var b = XK();
        if (b && 0 <= b.index) {
            var c = [];
            x(b.videoIds, function(a) {
                if (a = b.videoData ? b.videoData[a] : void 0)
                    a.video_id = a.id,
                    c.push(a)
            });
            RK(a, {
                videoList: c,
                loop: b.autoPlay,
                index: b.index,
                playlist_title: b.listTitle,
                playlist_description: b.listDescription,
                author: b.author
            })
        }
    }
    function RK(a, b) {
        if (a.g) {
            var c = a.j
              , d = Hh(a.j, "playlist");
            d.destroy();
            ab(c.a, d)
        }
        ph(a.g);
        b ? (a.g = new Xn(b),
        a.j && (c = a.j,
        x([rw], c.j, c))) : a.g = null
    }
    function WK(a, b, c, d) {
        b in a.W || (c = new Rh(c,d,{
            id: b,
            priority: 1
        }),
        c.Ta.G("onEnter", a.Dp, a),
        c.Ta.G("onExit", a.Dp, a),
        a.b.wh(c),
        a.W[b] = c)
    }
    f.Dp = function(a) {
        var b = a.getId()
          , c = this.b.getVideoData();
        "part2viewed" == b ? (c.W && ua(c.W),
        c.wb && ua(c.wb)) : "conversionview" == b && VK(this);
        c.Ga && (b = a.getId(),
        c = Bk(c.Ga, {
            label: b
        }),
        ua(c));
        this.b.sh(a)
    }
    ;
    function VK(a) {
        var b = a.b.getVideoData();
        b.Fo || (b.i.eventLabel = a.a.Z,
        b.i.playerStyle = a.a.cb,
        b.W && (b.i.feature = "pyv"),
        b.i.vid = b.L,
        b.i.isAd = !("adunit" != a.a.Z && !b.W),
        Lm("view", b.i),
        b.Fo = !0)
    }
    function NK(a, b) {
        b != a.o && (2 == b && UK(a, 5),
        a.o = b,
        a.B("appstatechange", b))
    }
    function UK(a, b) {
        a.V != b && (a.V = b,
        a.Xi("onStateChange", b))
    }
    function lJ(a, b) {
        if (a.a.bb) {
            var c = {
                controlClicked: b
            };
            a.a.$a && (c.fs = 1);
            a.we("controlclicked", c)
        }
    }
    f.of = function(a, b, c, d) {
        (d = Q(this, d)) && TA(d, a, !1 != b, c)
    }
    ;
    f.Hs = function(a, b) {
        var c = a.getVideoData();
        if (1 == this.o || 2 == this.o)
            c.Ha = b;
        2 == this.o ? SK(this) : (c = fB(a, b),
        this.Wa("seekto", c))
    }
    ;
    f.xs = function() {
        this.Wa("beginseeking")
    }
    ;
    f.Ns = function() {
        this.Wa("endseeking")
    }
    ;
    f.setVolume = function(a) {
        this.Ba.volume = a;
        this.B("internalvolumechange", this.Ba)
    }
    ;
    function oK(a, b) {
        a.Ba = b;
        a.B("internalvolumechange", a.Ba)
    }
    function vh(a) {
        a.Ba.muted = !0;
        a.B("internalvolumechange", a.Ba)
    }
    function wh(a) {
        a.Ba.muted = !1;
        a.B("internalvolumechange", a.Ba)
    }
    function Ih(a, b, c, d, e) {
        b = Jh(b, c, d);
        b.list = a.Qi;
        return Nh(a, b, e)
    }
    function Nh(a, b, c) {
        b = new Lh(b);
        return YK(a, b, void 0, c)
    }
    function YK(a, b, c, d) {
        wA("_start") || (uA("_start"),
        yA(void 0).srt = 0);
        var e = Q(a, d);
        if (!e)
            return !1;
        M(a.fa);
        b.ff = Km(b.ff, c);
        Ah(a, d);
        FA(e, b, QK(a));
        if (!OA(e))
            return !1;
        Zy(e.N(), b.b);
        e == a.b ? (NK(a, 1),
        SK(a)) : PA(e);
        return !0
    }
    function Vh(a, b) {
        var c = YK(a, b);
        th(a, c, void 0)
    }
    function th(a, b, c) {
        c = Q(a, c);
        b && c == a.b && (c.getVideoData().Kd = !0)
    }
    function Kh(a, b, c) {
        var d = Q(a, c);
        d && (Ah(a, c),
        FA(d, b, QK(a)),
        OA(d) && (Zy(d.N(), b.b),
        d == a.b && (NK(a, 1),
        TK(a))))
    }
    function Sh(a, b, c, d, e) {
        if (ka(b) && !ga(b)) {
            c = "playlist list listType index startSeconds suggestedQuality".split(" ");
            d = {};
            for (e = 0; e < c.length; e++) {
                var g = c[e];
                b[g] && (d[g] = b[g])
            }
            b = d
        } else
            d = {
                index: c,
                startSeconds: d,
                suggestedQuality: e
            },
            r(b) && 16 == b.length ? d.list = "PL" + b : d.playlist = b,
            b = d;
        RK(a, b);
        b = a.g;
        a = t(a.gn, a);
        b.De = a;
        b.Wd && L(b.De, 0)
    }
    f.gn = function() {
        var a = Wh(this.g);
        this.getVideoData().df || !this.Re ? Vh(this, a) : Kh(this, a)
    }
    ;
    function Tp(a) {
        var b = XK();
        return !(!a.g || !bo(a.g) || b && !b.autoPlay)
    }
    function xK(a) {
        return a.g && ("embedded" == a.a.Z || a.a.$a) && Tp(a) ? (Th(a),
        !0) : !1
    }
    function Th(a) {
        a.g && (a.g.Wd ? bo(a.g) && Vh(a, co(a.g)) : (co(a.g),
        a.Re = !1))
    }
    function Uh(a) {
        if (a.g)
            if (a.g.Wd) {
                var b = a.g;
                (b.Ef || 0 <= b.xa - 1) && Vh(a, eo(a.g))
            } else
                eo(a.g),
                a.Re = !1
    }
    function XK() {
        var a = n("yt.www.watch.lists.getState");
        return a ? a() : null
    }
    function Ph(a, b) {
        var c = null;
        b && (c = {
            t: Math.floor(a.getCurrentTime(1))
        });
        var d = a.getVideoData(1);
        return Lp(a.a, d.L, d.Pa, null, c)
    }
    f.Mw = function(a) {
        this.B("onCueRangeEnter", a.getId())
    }
    ;
    f.Nw = function(a) {
        this.B("onCueRangeExit", a.getId())
    }
    ;
    f.Lm = function(a, b) {
        var c = Q(this, b);
        c && (x(a, c.wh, c),
        this.B("cuerangesadded", a))
    }
    ;
    f.Pm = function(a, b) {
        var c = Q(this, b);
        c && (x(a, c.sh, c),
        this.B("cuerangesremoved", a))
    }
    ;
    f.Qm = function(a, b) {
        var c = Q(this, b);
        if (c) {
            for (var c = c.A, d = c.i.length - 1; 0 <= d; d--)
                c.i[d].namespace == a && mk(c, d);
            c.Zb()
        }
    }
    ;
    f.Tm = function(a) {
        this.B("cuerangemarkersupdated", a)
    }
    ;
    f.Sm = function(a, b) {
        var c = Q(this, b);
        c && YA(c, a)
    }
    ;
    f.vs = function() {
        ZK(this);
        if (!this.a.Ih && "detailpage" == this.a.Z) {
            this.a.Ih = !0;
            var a;
            a = this.b;
            if (a.a && a.J && a.J.a) {
                if (a.a.L) {
                    var b = a.a.L;
                    yA("after_ad").docid = b
                }
                a.a.Ya && (b = a.a.Ya,
                yA("after_ad").plid = b);
                b = a.a.Fa;
                yA("after_ad").cpn = b;
                b = a.J.a;
                yA("after_ad").ad_cpn = b;
                b = u() - a.J.b;
                a.J.g ? uA("astv", b, "after_ad") : uA("actv", b, "after_ad");
                a = !0
            } else
                a = !1;
            a && xA("after_ad", this.hv)
        }
    }
    ;
    function ZK(a) {
        if (!a.a.bi) {
            a.a.Oa || jB(a.k);
            var b = a.a;
            if ("detailpage" == b.Z || "leanback" == b.Z || "embedded" == b.Z && b.rj) {
                zf("TIMING_ACTION") || xf("TIMING_ACTION", a.a.J);
                var b = a.j.u, c;
                for (c in b)
                    uA(c, b[c]);
                c = a.j.C;
                for (var d in c) {
                    var b = d
                      , e = c[d];
                    yA(void 0)[b] = e
                }
                yA(void 0).yt_pt = "html5";
                wA("_start") && xA()
            }
            AA(void 0);
            a.a.bi = !0
        }
    }
    f.hv = function(a, b, c) {
        b = {
            v: 2,
            s: "youtube",
            action: "watch7ad_html5"
        };
        var d = [], e;
        for (e in a)
            "_" != e.charAt(0) && d.push(e + "." + a[e]);
        b.rt = d.join(",");
        for (var g in c)
            "_" != g.charAt(0) && (b[g] = c[g]);
        a = zf("TIMING_INFO") || {};
        "e"in a && (b.e = a.e);
        "ei"in a && (b.ei = a.ei);
        return b
    }
    ;
    f.Mm = function(a) {
        "remote" == a ? (NK(this, 6),
        ei(this.u)) : this.Xi("onApiChange")
    }
    ;
    f.Nm = function(a) {
        "remote" == a && TK(this)
    }
    ;
    f.du = function() {
        if (!zh(this, "audio")) {
            var a = 100 * this.i.volume
              , a = {
                volume: a,
                nonNormalized: a / this.getVideoData().Rh,
                muted: this.i.muted
            };
            this.Ba = Xb(a);
            this.Wa("onVolumeChange", a)
        }
    }
    ;
    f.fn = function(a) {
        a.volume = Bb(a.volume, 0, 100);
        a.nonNormalized = a.volume / this.getVideoData().Rh;
        if (this.a.yj && !this.a.Od) {
            var b = {};
            b.volume = isNaN(a.volume) ? ri().volume : Bb(a.volume, 0, 100);
            b.nonNormalized = a.nonNormalized;
            b.muted = void 0 == a.muted ? ri().muted : a.muted;
            Ng("yt-player-volume", b, 2592E3)
        }
        zh(this, "audio") ? this.Ff && (this.Ff = Xb(a),
        this.Wa("onVolumeChange", a)) : (this.i.setVolume(a.volume, a.muted),
        this.a.Od || this.Wa("onVolumeChange", a))
    }
    ;
    f.rs = function() {
        $K(this, !!ag())
    }
    ;
    function $K(a, b) {
        a.ea.No(b);
        if ("detailpage" == a.a.Z && !b) {
            var c = a.b.getVideoData()
              , d = n("checkCurrentVideo");
            if (d && zf("VIDEO_ID") != c.L) {
                var e = a.getCurrentTime()
                  , g = {};
                g[c.L] = e;
                Ng("yt-player-restore-playhead", g, 172800);
                d(c.L);
                a.B("openingpage")
            }
        }
        a.a.$a = b;
        a.ea.resize();
        a.Wa("fullscreentoggled", b)
    }
    f.Ps = function() {
        vK(this)
    }
    ;
    f.zh = function() {
        this.Wa("clearvideooverlays")
    }
    ;
    f.is = function(a, b) {
        this.Wa("menu_button_add", a, b)
    }
    ;
    f.ks = function(a) {
        this.Wa("menu_button_remove", a)
    }
    ;
    f.ls = function(a) {
        this.Wa("menu_item_add", a)
    }
    ;
    f.ms = function(a) {
        this.Wa("menu_item_remove", a)
    }
    ;
    f.os = function(a) {
        this.Wa("menu_show", a)
    }
    ;
    f.Bs = function(a) {
        this.Wa("liveviewshift", a)
    }
    ;
    f.Om = function(a, b) {
        if ("onAdStateChange" == a) {
            var c = arguments[1]
              , d = arguments[2]
              , e = arguments[3] || {};
            1 == c && (uA("vr"),
            jB(this.k),
            ZK(this));
            0 == c && e && (this.b.J = e);
            var g = this.a;
            "leanback" == g.Z && Xy(g) && (0 == c ? this.Vd = this.i : this.Vd = d,
            this.B("onAdStateChange", c, e.video_id))
        } else
            this.B.apply(this, arguments)
    }
    ;
    f.Xe = function(a, b) {
        this.j.F.apply(this.j, arguments);
        this.u && this.u.B.apply(this.u, arguments);
        this.F && this.F.B.apply(this.F, arguments)
    }
    ;
    f.playVideo = function(a, b) {
        var c = Q(this, b);
        c && (2 == this.o ? SK(this) : c.W ? (a && aL(this, c),
        R(c.getPlayerState(), 2) ? this.of(0) : c.playVideo()) : PA(c))
    }
    ;
    f.pauseVideo = function(a, b) {
        var c = Q(this, b);
        c && (a && aL(this, c),
        c.pauseVideo())
    }
    ;
    function Ah(a, b) {
        var c = Q(a, b);
        c && 1 != a.o && 2 != a.o && (c.pauseVideo(),
        c.g && (c.g.o = !1))
    }
    function xh(a, b) {
        if (!zh(a, "play_pause")) {
            var c = a.K.play_pause ? a.R : null;
            c ? c.je("control_play") : a.playVideo(!1, b)
        }
    }
    function yh(a, b) {
        if (!zh(a, "play_pause")) {
            var c = a.K.play_pause ? a.R : null;
            c ? c.je("control_pause") : a.pauseVideo(!1, b)
        }
    }
    function nK(a, b) {
        if (!zh(a, "play_pause") && (!a.a.Ub || 2 != a.o || up.hasTags(void 0))) {
            var c = a.K.play_pause ? a.R : null;
            c ? c.je("control_toggle_play_pause") : (c = Q(a, void 0)) && (c.ag() ? a.pauseVideo(b, void 0) : a.playVideo(b, void 0))
        }
    }
    function uh(a, b, c, d, e) {
        if (!zh(a, "seek")) {
            var g = a.K.seek ? a.R : null;
            g ? g.je("control_seek", b) : a.of(b, c, d, e)
        }
    }
    function mK(a, b) {
        if (a.a.$a != b)
            if ($f())
                if (b) {
                    var c = a.ea.a
                      , d = sf(["requestFullscreen", "requestFullScreen"], c);
                    d && d.apply(c)
                } else
                    (c = sf(["exitFullscreen", "cancelFullscreen", "cancelFullScreen"], document)) && c.call(document);
            else
                a.B("onFullScreenToggleRequest"),
                $K(a, b)
    }
    function mJ(a, b) {
        mK(a, !1);
        a.B("openingpage");
        $v(b)
    }
    function uJ(a) {
        var b = a.getVideoData();
        "detailpage" == a.a.Z && a.a.$a && zf("VIDEO_ID") == b.L ? mK(a, !1) : mJ(a, hw(a.a, b))
    }
    f.ys = function(a) {
        uA("cdl");
        Yy(this.a, a)
    }
    ;
    f.wm = function() {
        if (this.k == this.b) {
            var a;
            if (a = ci(this.a))
                if (Qg("yt-remote-delayed-connect-key"))
                    a = !0;
                else {
                    a = ah();
                    var b = tg(hh());
                    a = !!xg(b, a)
                }
            a || !this.getVideoData(1).Jm || this.a.Tb ? MA(this.b) && !NA(this.b) ? (this.log_("No available formats"),
            oy(this.b, 5, "HTML5_NO_AVAILABLE_FORMATS_FALLBACK", void 0)) : ((b = NA(this.b)) || (b = ((b = this.getVideoData()) && b.Q.length && !MA(Q(this)) && sn(zm(), "application/x-mpegURL") ? 0 <= Pa(b.Q, "fresca") : !1) || a),
            b ? (a && NK(this, 6),
            !this.u && this.I.getVideoData().ja && (this.u = new UD(this)) && OK(this, this.u),
            (a = this.u) && !a.Df && a.eb(this.I) && a.create(),
            di(this),
            MK(this)) : (a = !1,
            this.getVideoData().la || this.S && (a = ey(this.S)),
            a && (a = {
                video_id: this.getVideoData().b.ypc_vid,
                ypc_preview: 1
            },
            a.video_id ? Nh(this, a, 1) : (this.mf(["seek", "play_pause"]),
            a = this.j,
            x([Wq, Jx, Up, ly, rw, Ux, Zx, fy, Ju], a.j, a))))) : (a = "DEVICE_FALLBACK",
            pc || Rj("iemobile") || Rj("xbox") && Rj("trident") || Rj("nintendo wiiu") || (a = "FLASH_FALLBACK"),
            oy(this.b, 5, a, void 0))
        } else
            MK(this)
    }
    ;
    f.Ds = function() {
        this.pauseVideo()
    }
    ;
    function aL(a, b) {
        var c = b.getVideoData()
          , d = "html5-bezel-pause";
        R(b.getPlayerState(), 8) ? c.nb && !c.gb && (d = "html5-bezel-stop") : d = "html5-bezel-play";
        a.ea.Pp(d)
    }
    function vK(a) {
        var b = a.ea.Pc();
        a.a.pb = b;
        if (a.i) {
            var b = !1
              , c = a.getVideoData();
            if (0 != a.i.readyState) {
                var d = new B(a.i.videoWidth,a.i.videoHeight);
                Fb(c.$, d) || (c.$ = d,
                b = !0)
            }
            c = UI(a.ea);
            Jb(a.a.ep, c) || (a.a.ep = c,
            b = !0);
            c = UI(a.ea);
            Jb(a.a.Qc, c) || (a.a.Qc = c,
            b = !0);
            b && (Wx(Q(a), "r"),
            a.B("resize", TI(a.ea)),
            a.Wa("onResize"))
        }
    }
    function zh(a, b) {
        return !(!a.A[b] || !a.A[b].length)
    }
    f.mf = function(a, b) {
        b = b || "defaultcontext";
        var c = [];
        x(a, function(a) {
            this.A[a] ? 0 > this.A[a].indexOf(b) && this.A[a].push(b) : (this.A[a] = [b],
            c.push(a))
        }, this);
        0 < c.length && this.B("controlsdisabled", c)
    }
    ;
    f.th = function(a, b) {
        b = b || "defaultcontext";
        var c = [];
        x(a, function(a) {
            if (zh(this, a)) {
                var e = this.A[a].indexOf(b);
                0 <= e && this.A[a].splice(e, 1);
                0 == this.A[a].length && c.push(a)
            }
        }, this);
        0 < c.length && this.B("controlsenabled", c)
    }
    ;
    f.Rm = function(a, b, c) {
        this.qh();
        this.R = a;
        b && x(b, function(a) {
            this.K[a] = !0
        }, this);
        c && ry(this.j, a, c)
    }
    ;
    f.qh = function() {
        this.R = null;
        this.K = {};
        sy(this.j)
    }
    ;
    function rK(a) {
        var b = a.getVideoData();
        return b && b.Oa && !Cn.test(b.Oa) ? !a.a.ok : a.a.Bc
    }
    f.Ks = function() {
        if (!this.$) {
            this.$ = !0;
            var a = this.getVideoData()
              , b = Q(this).getCurrentTime();
            Nh(this, {
                video_id: a.L,
                start: b,
                autoplay: 1,
                splay: 1,
                resume: 1,
                feature: "resume"
            });
            this.$ = !1
        }
    }
    ;
    f.H = function() {
        LK(this);
        this.Jj && Tf(this.Jj);
        Ef(0);
        qh(Pb(this.Q));
        this.Q = {};
        this.k = this.b = null;
        qh(this.a, this.g);
        this.J = this.I = this.ha = this.S = this.Vd = null;
        M(this.fa);
        IK.D.H.call(this)
    }
    ;
    ba("yt.player.Application", IK, void 0);
    function bL(a, b, c, d, e, g) {
        var h = {};
        b && (h.v = b);
        c && (h.list = c);
        d && (h.url = d);
        a = {
            name: a,
            locale: e,
            feature: g
        };
        for (var k in h)
            a[k] = h[k];
        h = yk("/sharing_services", a);
        ua(h)
    }
    ;rv(pI);
    rv(vv);
    n("yt.tracking.share") || ba("yt.tracking.share", bL, void 0);
    n("yt.net.ping") || ba("yt.net.ping.send", ua, void 0);
    n("yt.window.popup") || (ba("yt.window.popup", aw, void 0),
    ba("yt.window.open", $v, void 0));
    ba("yt.player.Application.create", function(a, b) {
        JK[a] && (JK[a].dispose(),
        JK[a] = null);
        var c = new IK(a,b);
        oh(c, function() {
            JK[a] = null
        });
        JK[a] = c
    }, void 0);
    var cL = n("ytcsi");
    cL && cL.tick("pe");
}
)();
