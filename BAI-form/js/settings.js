! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) n.d(r, i, function(t) {
                return e[t]
            }.bind(null, i));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 510)
}({
    13: function(e, t) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    },
    510: function(e, t, n) {
        (function(e) {
            document.addEventListener("DOMContentLoaded", function() {
                e("body").append('<div class="settings">\n    <div class="settings-toggle toggle-settings">\n      <i class="fas fa-cog"></i>\n    </div>\n\n    <div class="settings-panel">\n      <div class="settings-title">\n        <button type="button" class="close float-right toggle-settings" aria-label="Close">\n          <span aria-hidden="true">&times;</span>\n        </button>\n\n        <h5>Color schemes</h5>\n        <div class="settings-theme toggle-theme" data-theme="blue"></div>\n        <div class="settings-theme toggle-theme" data-theme="indigo"></div>\n        <div class="settings-theme toggle-theme" data-theme="purple"></div>\n        <div class="settings-theme toggle-theme" data-theme="pink"></div>\n        <div class="settings-theme toggle-theme" data-theme="red"></div>\n        <div class="settings-theme toggle-theme" data-theme="orange"></div>\n        <div class="settings-theme toggle-theme" data-theme="yellow"></div>\n        <div class="settings-theme toggle-theme" data-theme="green"></div>\n        <div class="settings-theme toggle-theme" data-theme="teal"></div>\n        <div class="settings-theme toggle-theme" data-theme="cyan"></div>\n      </div>\n    </div>\n  </div>'), e(".toggle-settings").on("click", function(t) {
                    t.preventDefault(), e(".settings").toggleClass("open")
                }), e(".toggle-theme").on("click", function(t) {
                    t.preventDefault();
                    var n = e(this).data("theme");
                    e("body").removeClass(), e("body").addClass("theme-".concat(n))
                })
            })
        }).call(this, n(7))
    },
    64: function(e, t, n) {
        (function(t) {
            e.exports = t.$ = n(65)
        }).call(this, n(13))
    },
    65: function(e, t, n) {
        var r;
        /*!
         * jQuery JavaScript Library v3.3.1
         * https://jquery.com/
         *
         * Includes Sizzle.js
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://jquery.org/license
         *
         * Date: 2018-01-20T17:24Z
         */
        /*!
         * jQuery JavaScript Library v3.3.1
         * https://jquery.com/
         *
         * Includes Sizzle.js
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://jquery.org/license
         *
         * Date: 2018-01-20T17:24Z
         */
        ! function(t, n) {
            "use strict";
            "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return n(e)
            } : n(t)
        }("undefined" != typeof window ? window : this, function(n, i) {
            "use strict";
            var o = [],
                a = n.document,
                s = Object.getPrototypeOf,
                u = o.slice,
                l = o.concat,
                c = o.push,
                f = o.indexOf,
                p = {},
                d = p.toString,
                h = p.hasOwnProperty,
                g = h.toString,
                v = g.call(Object),
                m = {},
                y = function(e) {
                    return "function" == typeof e && "number" != typeof e.nodeType
                },
                x = function(e) {
                    return null != e && e === e.window
                },
                b = {
                    type: !0,
                    src: !0,
                    noModule: !0
                };

            function w(e, t, n) {
                var r, i = (t = t || a).createElement("script");
                if (i.text = e, n)
                    for (r in b) n[r] && (i[r] = n[r]);
                t.head.appendChild(i).parentNode.removeChild(i)
            }

            function T(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? p[d.call(e)] || "object" : typeof e
            }
            var C = function(e, t) {
                    return new C.fn.init(e, t)
                },
                E = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

            function S(e) {
                var t = !!e && "length" in e && e.length,
                    n = T(e);
                return !y(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            }
            C.fn = C.prototype = {
                jquery: "3.3.1",
                constructor: C,
                length: 0,
                toArray: function() {
                    return u.call(this)
                },
                get: function(e) {
                    return null == e ? u.call(this) : e < 0 ? this[e + this.length] : this[e]
                },
                pushStack: function(e) {
                    var t = C.merge(this.constructor(), e);
                    return t.prevObject = this, t
                },
                each: function(e) {
                    return C.each(this, e)
                },
                map: function(e) {
                    return this.pushStack(C.map(this, function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                slice: function() {
                    return this.pushStack(u.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(e) {
                    var t = this.length,
                        n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: c,
                sort: o.sort,
                splice: o.splice
            }, C.extend = C.fn.extend = function() {
                var e, t, n, r, i, o, a = arguments[0] || {},
                    s = 1,
                    u = arguments.length,
                    l = !1;
                for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || y(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
                    if (null != (e = arguments[s]))
                        for (t in e) n = a[t], a !== (r = e[t]) && (l && r && (C.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && C.isPlainObject(n) ? n : {}, a[t] = C.extend(l, o, r)) : void 0 !== r && (a[t] = r));
                return a
            }, C.extend({
                expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e)
                },
                noop: function() {},
                isPlainObject: function(e) {
                    var t, n;
                    return !(!e || "[object Object]" !== d.call(e)) && (!(t = s(e)) || "function" == typeof(n = h.call(t, "constructor") && t.constructor) && g.call(n) === v)
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                globalEval: function(e) {
                    w(e)
                },
                each: function(e, t) {
                    var n, r = 0;
                    if (S(e))
                        for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                    else
                        for (r in e)
                            if (!1 === t.call(e[r], r, e[r])) break; return e
                },
                trim: function(e) {
                    return null == e ? "" : (e + "").replace(E, "")
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    return null != e && (S(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n
                },
                inArray: function(e, t, n) {
                    return null == t ? -1 : f.call(t, e, n)
                },
                merge: function(e, t) {
                    for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                    return e.length = i, e
                },
                grep: function(e, t, n) {
                    for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
                    return r
                },
                map: function(e, t, n) {
                    var r, i, o = 0,
                        a = [];
                    if (S(e))
                        for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
                    else
                        for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                    return l.apply([], a)
                },
                guid: 1,
                support: m
            }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = o[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
                p["[object " + t + "]"] = t.toLowerCase()
            });
            var k =
                /*!
                 * Sizzle CSS Selector Engine v2.3.3
                 * https://sizzlejs.com/
                 *
                 * Copyright jQuery Foundation and other contributors
                 * Released under the MIT license
                 * http://jquery.org/license
                 *
                 * Date: 2016-08-08
                 */
                function(e) {
                    var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, v, m, y, x, b = "sizzle" + 1 * new Date,
                        w = e.document,
                        T = 0,
                        C = 0,
                        E = ae(),
                        S = ae(),
                        k = ae(),
                        D = function(e, t) {
                            return e === t && (f = !0), 0
                        },
                        j = {}.hasOwnProperty,
                        N = [],
                        A = N.pop,
                        q = N.push,
                        L = N.push,
                        H = N.slice,
                        O = function(e, t) {
                            for (var n = 0, r = e.length; n < r; n++)
                                if (e[n] === t) return n;
                            return -1
                        },
                        P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                        M = "[\\x20\\t\\r\\n\\f]",
                        R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                        I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
                        W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
                        $ = new RegExp(M + "+", "g"),
                        F = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
                        B = new RegExp("^" + M + "*," + M + "*"),
                        _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
                        z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
                        X = new RegExp(W),
                        U = new RegExp("^" + R + "$"),
                        V = {
                            ID: new RegExp("^#(" + R + ")"),
                            CLASS: new RegExp("^\\.(" + R + ")"),
                            TAG: new RegExp("^(" + R + "|[*])"),
                            ATTR: new RegExp("^" + I),
                            PSEUDO: new RegExp("^" + W),
                            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                            bool: new RegExp("^(?:" + P + ")$", "i"),
                            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
                        },
                        G = /^(?:input|select|textarea|button)$/i,
                        Y = /^h\d$/i,
                        Q = /^[^{]+\{\s*\[native \w/,
                        J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                        K = /[+~]/,
                        Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
                        ee = function(e, t, n) {
                            var r = "0x" + t - 65536;
                            return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                        },
                        te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                        ne = function(e, t) {
                            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                        },
                        re = function() {
                            p()
                        },
                        ie = ye(function(e) {
                            return !0 === e.disabled && ("form" in e || "label" in e)
                        }, {
                            dir: "parentNode",
                            next: "legend"
                        });
                    try {
                        L.apply(N = H.call(w.childNodes), w.childNodes), N[w.childNodes.length].nodeType
                    } catch (e) {
                        L = {
                            apply: N.length ? function(e, t) {
                                q.apply(e, H.call(t))
                            } : function(e, t) {
                                for (var n = e.length, r = 0; e[n++] = t[r++];);
                                e.length = n - 1
                            }
                        }
                    }

                    function oe(e, t, r, i) {
                        var o, s, l, c, f, h, m, y = t && t.ownerDocument,
                            T = t ? t.nodeType : 9;
                        if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;
                        if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
                            if (11 !== T && (f = J.exec(e)))
                                if (o = f[1]) {
                                    if (9 === T) {
                                        if (!(l = t.getElementById(o))) return r;
                                        if (l.id === o) return r.push(l), r
                                    } else if (y && (l = y.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r
                                } else {
                                    if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                                    if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r
                                }
                            if (n.qsa && !k[e + " "] && (!v || !v.test(e))) {
                                if (1 !== T) y = t, m = e;
                                else if ("object" !== t.nodeName.toLowerCase()) {
                                    for ((c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b), s = (h = a(e)).length; s--;) h[s] = "#" + c + " " + me(h[s]);
                                    m = h.join(","), y = K.test(e) && ge(t.parentNode) || t
                                }
                                if (m) try {
                                    return L.apply(r, y.querySelectorAll(m)), r
                                } catch (e) {} finally {
                                    c === b && t.removeAttribute("id")
                                }
                            }
                        }
                        return u(e.replace(F, "$1"), t, r, i)
                    }

                    function ae() {
                        var e = [];
                        return function t(n, i) {
                            return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
                        }
                    }

                    function se(e) {
                        return e[b] = !0, e
                    }

                    function ue(e) {
                        var t = d.createElement("fieldset");
                        try {
                            return !!e(t)
                        } catch (e) {
                            return !1
                        } finally {
                            t.parentNode && t.parentNode.removeChild(t), t = null
                        }
                    }

                    function le(e, t) {
                        for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
                    }

                    function ce(e, t) {
                        var n = t && e,
                            r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                        if (r) return r;
                        if (n)
                            for (; n = n.nextSibling;)
                                if (n === t) return -1;
                        return e ? 1 : -1
                    }

                    function fe(e) {
                        return function(t) {
                            return "input" === t.nodeName.toLowerCase() && t.type === e
                        }
                    }

                    function pe(e) {
                        return function(t) {
                            var n = t.nodeName.toLowerCase();
                            return ("input" === n || "button" === n) && t.type === e
                        }
                    }

                    function de(e) {
                        return function(t) {
                            return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e
                        }
                    }

                    function he(e) {
                        return se(function(t) {
                            return t = +t, se(function(n, r) {
                                for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                            })
                        })
                    }

                    function ge(e) {
                        return e && void 0 !== e.getElementsByTagName && e
                    }
                    for (t in n = oe.support = {}, o = oe.isXML = function(e) {
                            var t = e && (e.ownerDocument || e).documentElement;
                            return !!t && "HTML" !== t.nodeName
                        }, p = oe.setDocument = function(e) {
                            var t, i, a = e ? e.ownerDocument || e : w;
                            return a !== d && 9 === a.nodeType && a.documentElement ? (h = (d = a).documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function(e) {
                                return e.className = "i", !e.getAttribute("className")
                            }), n.getElementsByTagName = ue(function(e) {
                                return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
                            }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function(e) {
                                return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length
                            }), n.getById ? (r.filter.ID = function(e) {
                                var t = e.replace(Z, ee);
                                return function(e) {
                                    return e.getAttribute("id") === t
                                }
                            }, r.find.ID = function(e, t) {
                                if (void 0 !== t.getElementById && g) {
                                    var n = t.getElementById(e);
                                    return n ? [n] : []
                                }
                            }) : (r.filter.ID = function(e) {
                                var t = e.replace(Z, ee);
                                return function(e) {
                                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                    return n && n.value === t
                                }
                            }, r.find.ID = function(e, t) {
                                if (void 0 !== t.getElementById && g) {
                                    var n, r, i, o = t.getElementById(e);
                                    if (o) {
                                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                        for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                                    }
                                    return []
                                }
                            }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                            } : function(e, t) {
                                var n, r = [],
                                    i = 0,
                                    o = t.getElementsByTagName(e);
                                if ("*" === e) {
                                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                                    return r
                                }
                                return o
                            }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                                if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                            }, m = [], v = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function(e) {
                                h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || v.push(".#.+[+~]")
                            }), ue(function(e) {
                                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                var t = d.createElement("input");
                                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                            })), (n.matchesSelector = Q.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function(e) {
                                n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), m.push("!=", W)
                            }), v = v.length && new RegExp(v.join("|")), m = m.length && new RegExp(m.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function(e, t) {
                                var n = 9 === e.nodeType ? e.documentElement : e,
                                    r = t && t.parentNode;
                                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                            } : function(e, t) {
                                if (t)
                                    for (; t = t.parentNode;)
                                        if (t === e) return !0;
                                return !1
                            }, D = t ? function(e, t) {
                                if (e === t) return f = !0, 0;
                                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1)
                            } : function(e, t) {
                                if (e === t) return f = !0, 0;
                                var n, r = 0,
                                    i = e.parentNode,
                                    o = t.parentNode,
                                    a = [e],
                                    s = [t];
                                if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
                                if (i === o) return ce(e, t);
                                for (n = e; n = n.parentNode;) a.unshift(n);
                                for (n = t; n = n.parentNode;) s.unshift(n);
                                for (; a[r] === s[r];) r++;
                                return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
                            }, d) : d
                        }, oe.matches = function(e, t) {
                            return oe(e, null, null, t)
                        }, oe.matchesSelector = function(e, t) {
                            if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !k[t + " "] && (!m || !m.test(t)) && (!v || !v.test(t))) try {
                                var r = y.call(e, t);
                                if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                            } catch (e) {}
                            return oe(t, d, null, [e]).length > 0
                        }, oe.contains = function(e, t) {
                            return (e.ownerDocument || e) !== d && p(e), x(e, t)
                        }, oe.attr = function(e, t) {
                            (e.ownerDocument || e) !== d && p(e);
                            var i = r.attrHandle[t.toLowerCase()],
                                o = i && j.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
                        }, oe.escape = function(e) {
                            return (e + "").replace(te, ne)
                        }, oe.error = function(e) {
                            throw new Error("Syntax error, unrecognized expression: " + e)
                        }, oe.uniqueSort = function(e) {
                            var t, r = [],
                                i = 0,
                                o = 0;
                            if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
                                for (; t = e[o++];) t === e[o] && (i = r.push(o));
                                for (; i--;) e.splice(r[i], 1)
                            }
                            return c = null, e
                        }, i = oe.getText = function(e) {
                            var t, n = "",
                                r = 0,
                                o = e.nodeType;
                            if (o) {
                                if (1 === o || 9 === o || 11 === o) {
                                    if ("string" == typeof e.textContent) return e.textContent;
                                    for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                                } else if (3 === o || 4 === o) return e.nodeValue
                            } else
                                for (; t = e[r++];) n += i(t);
                            return n
                        }, (r = oe.selectors = {
                            cacheLength: 50,
                            createPseudo: se,
                            match: V,
                            attrHandle: {},
                            find: {},
                            relative: {
                                ">": {
                                    dir: "parentNode",
                                    first: !0
                                },
                                " ": {
                                    dir: "parentNode"
                                },
                                "+": {
                                    dir: "previousSibling",
                                    first: !0
                                },
                                "~": {
                                    dir: "previousSibling"
                                }
                            },
                            preFilter: {
                                ATTR: function(e) {
                                    return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                                },
                                CHILD: function(e) {
                                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                                },
                                PSEUDO: function(e) {
                                    var t, n = !e[6] && e[2];
                                    return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                                }
                            },
                            filter: {
                                TAG: function(e) {
                                    var t = e.replace(Z, ee).toLowerCase();
                                    return "*" === e ? function() {
                                        return !0
                                    } : function(e) {
                                        return e.nodeName && e.nodeName.toLowerCase() === t
                                    }
                                },
                                CLASS: function(e) {
                                    var t = E[e + " "];
                                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function(e) {
                                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                    })
                                },
                                ATTR: function(e, t, n) {
                                    return function(r) {
                                        var i = oe.attr(r, e);
                                        return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                                    }
                                },
                                CHILD: function(e, t, n, r, i) {
                                    var o = "nth" !== e.slice(0, 3),
                                        a = "last" !== e.slice(-4),
                                        s = "of-type" === t;
                                    return 1 === r && 0 === i ? function(e) {
                                        return !!e.parentNode
                                    } : function(t, n, u) {
                                        var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                                            v = t.parentNode,
                                            m = s && t.nodeName.toLowerCase(),
                                            y = !u && !s,
                                            x = !1;
                                        if (v) {
                                            if (o) {
                                                for (; g;) {
                                                    for (p = t; p = p[g];)
                                                        if (s ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
                                                    h = g = "only" === e && !h && "nextSibling"
                                                }
                                                return !0
                                            }
                                            if (h = [a ? v.firstChild : v.lastChild], a && y) {
                                                for (x = (d = (l = (c = (f = (p = v)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && v.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();)
                                                    if (1 === p.nodeType && ++x && p === t) {
                                                        c[e] = [T, d, x];
                                                        break
                                                    }
                                            } else if (y && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x)
                                                for (;
                                                    (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++x || (y && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p !== t)););
                                            return (x -= i) === r || x % r == 0 && x / r >= 0
                                        }
                                    }
                                },
                                PSEUDO: function(e, t) {
                                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                                    return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, n) {
                                        for (var r, o = i(e, t), a = o.length; a--;) e[r = O(e, o[a])] = !(n[r] = o[a])
                                    }) : function(e) {
                                        return i(e, 0, n)
                                    }) : i
                                }
                            },
                            pseudos: {
                                not: se(function(e) {
                                    var t = [],
                                        n = [],
                                        r = s(e.replace(F, "$1"));
                                    return r[b] ? se(function(e, t, n, i) {
                                        for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                                    }) : function(e, i, o) {
                                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                                    }
                                }),
                                has: se(function(e) {
                                    return function(t) {
                                        return oe(e, t).length > 0
                                    }
                                }),
                                contains: se(function(e) {
                                    return e = e.replace(Z, ee),
                                        function(t) {
                                            return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                                        }
                                }),
                                lang: se(function(e) {
                                    return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(),
                                        function(t) {
                                            var n;
                                            do {
                                                if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                            } while ((t = t.parentNode) && 1 === t.nodeType);
                                            return !1
                                        }
                                }),
                                target: function(t) {
                                    var n = e.location && e.location.hash;
                                    return n && n.slice(1) === t.id
                                },
                                root: function(e) {
                                    return e === h
                                },
                                focus: function(e) {
                                    return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                                },
                                enabled: de(!1),
                                disabled: de(!0),
                                checked: function(e) {
                                    var t = e.nodeName.toLowerCase();
                                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                                },
                                selected: function(e) {
                                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                                },
                                empty: function(e) {
                                    for (e = e.firstChild; e; e = e.nextSibling)
                                        if (e.nodeType < 6) return !1;
                                    return !0
                                },
                                parent: function(e) {
                                    return !r.pseudos.empty(e)
                                },
                                header: function(e) {
                                    return Y.test(e.nodeName)
                                },
                                input: function(e) {
                                    return G.test(e.nodeName)
                                },
                                button: function(e) {
                                    var t = e.nodeName.toLowerCase();
                                    return "input" === t && "button" === e.type || "button" === t
                                },
                                text: function(e) {
                                    var t;
                                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                                },
                                first: he(function() {
                                    return [0]
                                }),
                                last: he(function(e, t) {
                                    return [t - 1]
                                }),
                                eq: he(function(e, t, n) {
                                    return [n < 0 ? n + t : n]
                                }),
                                even: he(function(e, t) {
                                    for (var n = 0; n < t; n += 2) e.push(n);
                                    return e
                                }),
                                odd: he(function(e, t) {
                                    for (var n = 1; n < t; n += 2) e.push(n);
                                    return e
                                }),
                                lt: he(function(e, t, n) {
                                    for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                                    return e
                                }),
                                gt: he(function(e, t, n) {
                                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                                    return e
                                })
                            }
                        }).pseudos.nth = r.pseudos.eq, {
                            radio: !0,
                            checkbox: !0,
                            file: !0,
                            password: !0,
                            image: !0
                        }) r.pseudos[t] = fe(t);
                    for (t in {
                            submit: !0,
                            reset: !0
                        }) r.pseudos[t] = pe(t);

                    function ve() {}

                    function me(e) {
                        for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                        return r
                    }

                    function ye(e, t, n) {
                        var r = t.dir,
                            i = t.next,
                            o = i || r,
                            a = n && "parentNode" === o,
                            s = C++;
                        return t.first ? function(t, n, i) {
                            for (; t = t[r];)
                                if (1 === t.nodeType || a) return e(t, n, i);
                            return !1
                        } : function(t, n, u) {
                            var l, c, f, p = [T, s];
                            if (u) {
                                for (; t = t[r];)
                                    if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                            } else
                                for (; t = t[r];)
                                    if (1 === t.nodeType || a)
                                        if (c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                                        else {
                                            if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];
                                            if (c[o] = p, p[2] = e(t, n, u)) return !0
                                        } return !1
                        }
                    }

                    function xe(e) {
                        return e.length > 1 ? function(t, n, r) {
                            for (var i = e.length; i--;)
                                if (!e[i](t, n, r)) return !1;
                            return !0
                        } : e[0]
                    }

                    function be(e, t, n, r, i) {
                        for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
                        return a
                    }

                    function we(e, t, n, r, i, o) {
                        return r && !r[b] && (r = we(r)), i && !i[b] && (i = we(i, o)), se(function(o, a, s, u) {
                            var l, c, f, p = [],
                                d = [],
                                h = a.length,
                                g = o || function(e, t, n) {
                                    for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
                                    return n
                                }(t || "*", s.nodeType ? [s] : s, []),
                                v = !e || !o && t ? g : be(g, p, e, s, u),
                                m = n ? i || (o ? e : h || r) ? [] : a : v;
                            if (n && n(v, m, s, u), r)
                                for (l = be(m, d), r(l, [], s, u), c = l.length; c--;)(f = l[c]) && (m[d[c]] = !(v[d[c]] = f));
                            if (o) {
                                if (i || e) {
                                    if (i) {
                                        for (l = [], c = m.length; c--;)(f = m[c]) && l.push(v[c] = f);
                                        i(null, m = [], l, u)
                                    }
                                    for (c = m.length; c--;)(f = m[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f))
                                }
                            } else m = be(m === a ? m.splice(h, m.length) : m), i ? i(null, a, m, u) : L.apply(a, m)
                        })
                    }

                    function Te(e) {
                        for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = ye(function(e) {
                                return e === t
                            }, s, !0), f = ye(function(e) {
                                return O(t, e) > -1
                            }, s, !0), p = [function(e, n, r) {
                                var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                                return t = null, i
                            }]; u < o; u++)
                            if (n = r.relative[e[u].type]) p = [ye(xe(p), n)];
                            else {
                                if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                                    for (i = ++u; i < o && !r.relative[e[i].type]; i++);
                                    return we(u > 1 && xe(p), u > 1 && me(e.slice(0, u - 1).concat({
                                        value: " " === e[u - 2].type ? "*" : ""
                                    })).replace(F, "$1"), n, u < i && Te(e.slice(u, i)), i < o && Te(e = e.slice(i)), i < o && me(e))
                                }
                                p.push(n)
                            }
                        return xe(p)
                    }
                    return ve.prototype = r.filters = r.pseudos, r.setFilters = new ve, a = oe.tokenize = function(e, t) {
                        var n, i, o, a, s, u, l, c = S[e + " "];
                        if (c) return t ? 0 : c.slice(0);
                        for (s = e, u = [], l = r.preFilter; s;) {
                            for (a in n && !(i = B.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({
                                    value: n,
                                    type: i[0].replace(F, " ")
                                }), s = s.slice(n.length)), r.filter) !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
                                value: n,
                                type: a,
                                matches: i
                            }), s = s.slice(n.length));
                            if (!n) break
                        }
                        return t ? s.length : s ? oe.error(e) : S(e, u).slice(0)
                    }, s = oe.compile = function(e, t) {
                        var n, i = [],
                            o = [],
                            s = k[e + " "];
                        if (!s) {
                            for (t || (t = a(e)), n = t.length; n--;)(s = Te(t[n]))[b] ? i.push(s) : o.push(s);
                            (s = k(e, function(e, t) {
                                var n = t.length > 0,
                                    i = e.length > 0,
                                    o = function(o, a, s, u, c) {
                                        var f, h, v, m = 0,
                                            y = "0",
                                            x = o && [],
                                            b = [],
                                            w = l,
                                            C = o || i && r.find.TAG("*", c),
                                            E = T += null == w ? 1 : Math.random() || .1,
                                            S = C.length;
                                        for (c && (l = a === d || a || c); y !== S && null != (f = C[y]); y++) {
                                            if (i && f) {
                                                for (h = 0, a || f.ownerDocument === d || (p(f), s = !g); v = e[h++];)
                                                    if (v(f, a || d, s)) {
                                                        u.push(f);
                                                        break
                                                    }
                                                c && (T = E)
                                            }
                                            n && ((f = !v && f) && m--, o && x.push(f))
                                        }
                                        if (m += y, n && y !== m) {
                                            for (h = 0; v = t[h++];) v(x, b, a, s);
                                            if (o) {
                                                if (m > 0)
                                                    for (; y--;) x[y] || b[y] || (b[y] = A.call(u));
                                                b = be(b)
                                            }
                                            L.apply(u, b), c && !o && b.length > 0 && m + t.length > 1 && oe.uniqueSort(u)
                                        }
                                        return c && (T = E, l = w), x
                                    };
                                return n ? se(o) : o
                            }(o, i))).selector = e
                        }
                        return s
                    }, u = oe.select = function(e, t, n, i) {
                        var o, u, l, c, f, p = "function" == typeof e && e,
                            d = !i && a(e = p.selector || e);
                        if (n = n || [], 1 === d.length) {
                            if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                                if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
                                p && (t = t.parentNode), e = e.slice(u.shift().value.length)
                            }
                            for (o = V.needsContext.test(e) ? 0 : u.length; o-- && (l = u[o], !r.relative[c = l.type]);)
                                if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
                                    if (u.splice(o, 1), !(e = i.length && me(u))) return L.apply(n, i), n;
                                    break
                                }
                        }
                        return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n
                    }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function(e) {
                        return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
                    }), ue(function(e) {
                        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                    }) || le("type|href|height|width", function(e, t, n) {
                        if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                    }), n.attributes && ue(function(e) {
                        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                    }) || le("value", function(e, t, n) {
                        if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                    }), ue(function(e) {
                        return null == e.getAttribute("disabled")
                    }) || le(P, function(e, t, n) {
                        var r;
                        if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                    }), oe
                }(n);
            C.find = k, C.expr = k.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = k.uniqueSort, C.text = k.getText, C.isXMLDoc = k.isXML, C.contains = k.contains, C.escapeSelector = k.escape;
            var D = function(e, t, n) {
                    for (var r = [], i = void 0 !== n;
                        (e = e[t]) && 9 !== e.nodeType;)
                        if (1 === e.nodeType) {
                            if (i && C(e).is(n)) break;
                            r.push(e)
                        }
                    return r
                },
                j = function(e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n
                },
                N = C.expr.match.needsContext;

            function A(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }
            var q = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

            function L(e, t, n) {
                return y(t) ? C.grep(e, function(e, r) {
                    return !!t.call(e, r, e) !== n
                }) : t.nodeType ? C.grep(e, function(e) {
                    return e === t !== n
                }) : "string" != typeof t ? C.grep(e, function(e) {
                    return f.call(t, e) > -1 !== n
                }) : C.filter(t, e, n)
            }
            C.filter = function(e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? C.find.matchesSelector(r, e) ? [r] : [] : C.find.matches(e, C.grep(t, function(e) {
                    return 1 === e.nodeType
                }))
            }, C.fn.extend({
                find: function(e) {
                    var t, n, r = this.length,
                        i = this;
                    if ("string" != typeof e) return this.pushStack(C(e).filter(function() {
                        for (t = 0; t < r; t++)
                            if (C.contains(i[t], this)) return !0
                    }));
                    for (n = this.pushStack([]), t = 0; t < r; t++) C.find(e, i[t], n);
                    return r > 1 ? C.uniqueSort(n) : n
                },
                filter: function(e) {
                    return this.pushStack(L(this, e || [], !1))
                },
                not: function(e) {
                    return this.pushStack(L(this, e || [], !0))
                },
                is: function(e) {
                    return !!L(this, "string" == typeof e && N.test(e) ? C(e) : e || [], !1).length
                }
            });
            var H, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (C.fn.init = function(e, t, n) {
                var r, i;
                if (!e) return this;
                if (n = n || H, "string" == typeof e) {
                    if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : O.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (r[1]) {
                        if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : a, !0)), q.test(r[1]) && C.isPlainObject(t))
                            for (r in t) y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                        return this
                    }
                    return (i = a.getElementById(r[2])) && (this[0] = i, this.length = 1), this
                }
                return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this)
            }).prototype = C.fn, H = C(a);
            var P = /^(?:parents|prev(?:Until|All))/,
                M = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };

            function R(e, t) {
                for (;
                    (e = e[t]) && 1 !== e.nodeType;);
                return e
            }
            C.fn.extend({
                has: function(e) {
                    var t = C(e, this),
                        n = t.length;
                    return this.filter(function() {
                        for (var e = 0; e < n; e++)
                            if (C.contains(this, t[e])) return !0
                    })
                },
                closest: function(e, t) {
                    var n, r = 0,
                        i = this.length,
                        o = [],
                        a = "string" != typeof e && C(e);
                    if (!N.test(e))
                        for (; r < i; r++)
                            for (n = this[r]; n && n !== t; n = n.parentNode)
                                if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                                    o.push(n);
                                    break
                                }
                    return this.pushStack(o.length > 1 ? C.uniqueSort(o) : o)
                },
                index: function(e) {
                    return e ? "string" == typeof e ? f.call(C(e), this[0]) : f.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(e, t) {
                    return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), C.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function(e) {
                    return D(e, "parentNode")
                },
                parentsUntil: function(e, t, n) {
                    return D(e, "parentNode", n)
                },
                next: function(e) {
                    return R(e, "nextSibling")
                },
                prev: function(e) {
                    return R(e, "previousSibling")
                },
                nextAll: function(e) {
                    return D(e, "nextSibling")
                },
                prevAll: function(e) {
                    return D(e, "previousSibling")
                },
                nextUntil: function(e, t, n) {
                    return D(e, "nextSibling", n)
                },
                prevUntil: function(e, t, n) {
                    return D(e, "previousSibling", n)
                },
                siblings: function(e) {
                    return j((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return j(e.firstChild)
                },
                contents: function(e) {
                    return A(e, "iframe") ? e.contentDocument : (A(e, "template") && (e = e.content || e), C.merge([], e.childNodes))
                }
            }, function(e, t) {
                C.fn[e] = function(n, r) {
                    var i = C.map(this, t, n);
                    return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = C.filter(r, i)), this.length > 1 && (M[e] || C.uniqueSort(i), P.test(e) && i.reverse()), this.pushStack(i)
                }
            });
            var I = /[^\x20\t\r\n\f]+/g;

            function W(e) {
                return e
            }

            function $(e) {
                throw e
            }

            function F(e, t, n, r) {
                var i;
                try {
                    e && y(i = e.promise) ? i.call(e).done(t).fail(n) : e && y(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
                } catch (e) {
                    n.apply(void 0, [e])
                }
            }
            C.Callbacks = function(e) {
                e = "string" == typeof e ? function(e) {
                    var t = {};
                    return C.each(e.match(I) || [], function(e, n) {
                        t[n] = !0
                    }), t
                }(e) : C.extend({}, e);
                var t, n, r, i, o = [],
                    a = [],
                    s = -1,
                    u = function() {
                        for (i = i || e.once, r = t = !0; a.length; s = -1)
                            for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
                        e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
                    },
                    l = {
                        add: function() {
                            return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                                C.each(n, function(n, r) {
                                    y(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== T(r) && t(r)
                                })
                            }(arguments), n && !t && u()), this
                        },
                        remove: function() {
                            return C.each(arguments, function(e, t) {
                                for (var n;
                                    (n = C.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= s && s--
                            }), this
                        },
                        has: function(e) {
                            return e ? C.inArray(e, o) > -1 : o.length > 0
                        },
                        empty: function() {
                            return o && (o = []), this
                        },
                        disable: function() {
                            return i = a = [], o = n = "", this
                        },
                        disabled: function() {
                            return !o
                        },
                        lock: function() {
                            return i = a = [], n || t || (o = n = ""), this
                        },
                        locked: function() {
                            return !!i
                        },
                        fireWith: function(e, n) {
                            return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
                        },
                        fire: function() {
                            return l.fireWith(this, arguments), this
                        },
                        fired: function() {
                            return !!r
                        }
                    };
                return l
            }, C.extend({
                Deferred: function(e) {
                    var t = [
                            ["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
                            ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
                            ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]
                        ],
                        r = "pending",
                        i = {
                            state: function() {
                                return r
                            },
                            always: function() {
                                return o.done(arguments).fail(arguments), this
                            },
                            catch: function(e) {
                                return i.then(null, e)
                            },
                            pipe: function() {
                                var e = arguments;
                                return C.Deferred(function(n) {
                                    C.each(t, function(t, r) {
                                        var i = y(e[r[4]]) && e[r[4]];
                                        o[r[1]](function() {
                                            var e = i && i.apply(this, arguments);
                                            e && y(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments)
                                        })
                                    }), e = null
                                }).promise()
                            },
                            then: function(e, r, i) {
                                var o = 0;

                                function a(e, t, r, i) {
                                    return function() {
                                        var s = this,
                                            u = arguments,
                                            l = function() {
                                                var n, l;
                                                if (!(e < o)) {
                                                    if ((n = r.apply(s, u)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                    l = n && ("object" == typeof n || "function" == typeof n) && n.then, y(l) ? i ? l.call(n, a(o, t, W, i), a(o, t, $, i)) : (o++, l.call(n, a(o, t, W, i), a(o, t, $, i), a(o, t, W, t.notifyWith))) : (r !== W && (s = void 0, u = [n]), (i || t.resolveWith)(s, u))
                                                }
                                            },
                                            c = i ? l : function() {
                                                try {
                                                    l()
                                                } catch (n) {
                                                    C.Deferred.exceptionHook && C.Deferred.exceptionHook(n, c.stackTrace), e + 1 >= o && (r !== $ && (s = void 0, u = [n]), t.rejectWith(s, u))
                                                }
                                            };
                                        e ? c() : (C.Deferred.getStackHook && (c.stackTrace = C.Deferred.getStackHook()), n.setTimeout(c))
                                    }
                                }
                                return C.Deferred(function(n) {
                                    t[0][3].add(a(0, n, y(i) ? i : W, n.notifyWith)), t[1][3].add(a(0, n, y(e) ? e : W)), t[2][3].add(a(0, n, y(r) ? r : $))
                                }).promise()
                            },
                            promise: function(e) {
                                return null != e ? C.extend(e, i) : i
                            }
                        },
                        o = {};
                    return C.each(t, function(e, n) {
                        var a = n[2],
                            s = n[5];
                        i[n[1]] = a.add, s && a.add(function() {
                            r = s
                        }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), a.add(n[3].fire), o[n[0]] = function() {
                            return o[n[0] + "With"](this === o ? void 0 : this, arguments), this
                        }, o[n[0] + "With"] = a.fireWith
                    }), i.promise(o), e && e.call(o, o), o
                },
                when: function(e) {
                    var t = arguments.length,
                        n = t,
                        r = Array(n),
                        i = u.call(arguments),
                        o = C.Deferred(),
                        a = function(e) {
                            return function(n) {
                                r[e] = this, i[e] = arguments.length > 1 ? u.call(arguments) : n, --t || o.resolveWith(r, i)
                            }
                        };
                    if (t <= 1 && (F(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || y(i[n] && i[n].then))) return o.then();
                    for (; n--;) F(i[n], a(n), o.reject);
                    return o.promise()
                }
            });
            var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            C.Deferred.exceptionHook = function(e, t) {
                n.console && n.console.warn && e && B.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
            }, C.readyException = function(e) {
                n.setTimeout(function() {
                    throw e
                })
            };
            var _ = C.Deferred();

            function z() {
                a.removeEventListener("DOMContentLoaded", z), n.removeEventListener("load", z), C.ready()
            }
            C.fn.ready = function(e) {
                return _.then(e).catch(function(e) {
                    C.readyException(e)
                }), this
            }, C.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(e) {
                    (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0, !0 !== e && --C.readyWait > 0 || _.resolveWith(a, [C]))
                }
            }), C.ready.then = _.then, "complete" === a.readyState || "loading" !== a.readyState && !a.documentElement.doScroll ? n.setTimeout(C.ready) : (a.addEventListener("DOMContentLoaded", z), n.addEventListener("load", z));
            var X = function(e, t, n, r, i, o, a) {
                    var s = 0,
                        u = e.length,
                        l = null == n;
                    if ("object" === T(n))
                        for (s in i = !0, n) X(e, t, s, n[s], !0, o, a);
                    else if (void 0 !== r && (i = !0, y(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                            return l.call(C(e), n)
                        })), t))
                        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
                },
                U = /^-ms-/,
                V = /-([a-z])/g;

            function G(e, t) {
                return t.toUpperCase()
            }

            function Y(e) {
                return e.replace(U, "ms-").replace(V, G)
            }
            var Q = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };

            function J() {
                this.expando = C.expando + J.uid++
            }
            J.uid = 1, J.prototype = {
                cache: function(e) {
                    var t = e[this.expando];
                    return t || (t = {}, Q(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))), t
                },
                set: function(e, t, n) {
                    var r, i = this.cache(e);
                    if ("string" == typeof t) i[Y(t)] = n;
                    else
                        for (r in t) i[Y(r)] = t[r];
                    return i
                },
                get: function(e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Y(t)]
                },
                access: function(e, t, n) {
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
                },
                remove: function(e, t) {
                    var n, r = e[this.expando];
                    if (void 0 !== r) {
                        if (void 0 !== t) {
                            n = (t = Array.isArray(t) ? t.map(Y) : (t = Y(t)) in r ? [t] : t.match(I) || []).length;
                            for (; n--;) delete r[t[n]]
                        }(void 0 === t || C.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                    }
                },
                hasData: function(e) {
                    var t = e[this.expando];
                    return void 0 !== t && !C.isEmptyObject(t)
                }
            };
            var K = new J,
                Z = new J,
                ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                te = /[A-Z]/g;

            function ne(e, t, n) {
                var r;
                if (void 0 === n && 1 === e.nodeType)
                    if (r = "data-" + t.replace(te, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                        try {
                            n = function(e) {
                                return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e)
                            }(n)
                        } catch (e) {}
                        Z.set(e, t, n)
                    } else n = void 0;
                return n
            }
            C.extend({
                hasData: function(e) {
                    return Z.hasData(e) || K.hasData(e)
                },
                data: function(e, t, n) {
                    return Z.access(e, t, n)
                },
                removeData: function(e, t) {
                    Z.remove(e, t)
                },
                _data: function(e, t, n) {
                    return K.access(e, t, n)
                },
                _removeData: function(e, t) {
                    K.remove(e, t)
                }
            }), C.fn.extend({
                data: function(e, t) {
                    var n, r, i, o = this[0],
                        a = o && o.attributes;
                    if (void 0 === e) {
                        if (this.length && (i = Z.get(o), 1 === o.nodeType && !K.get(o, "hasDataAttrs"))) {
                            for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = Y(r.slice(5)), ne(o, r, i[r]));
                            K.set(o, "hasDataAttrs", !0)
                        }
                        return i
                    }
                    return "object" == typeof e ? this.each(function() {
                        Z.set(this, e)
                    }) : X(this, function(t) {
                        var n;
                        if (o && void 0 === t) return void 0 !== (n = Z.get(o, e)) ? n : void 0 !== (n = ne(o, e)) ? n : void 0;
                        this.each(function() {
                            Z.set(this, e, t)
                        })
                    }, null, t, arguments.length > 1, null, !0)
                },
                removeData: function(e) {
                    return this.each(function() {
                        Z.remove(this, e)
                    })
                }
            }), C.extend({
                queue: function(e, t, n) {
                    var r;
                    if (e) return t = (t || "fx") + "queue", r = K.get(e, t), n && (!r || Array.isArray(n) ? r = K.access(e, t, C.makeArray(n)) : r.push(n)), r || []
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = C.queue(e, t),
                        r = n.length,
                        i = n.shift(),
                        o = C._queueHooks(e, t);
                    "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                        C.dequeue(e, t)
                    }, o)), !r && o && o.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return K.get(e, n) || K.access(e, n, {
                        empty: C.Callbacks("once memory").add(function() {
                            K.remove(e, [t + "queue", n])
                        })
                    })
                }
            }), C.fn.extend({
                queue: function(e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? C.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                        var n = C.queue(this, e, t);
                        C._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && C.dequeue(this, e)
                    })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        C.dequeue(this, e)
                    })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    var n, r = 1,
                        i = C.Deferred(),
                        o = this,
                        a = this.length,
                        s = function() {
                            --r || i.resolveWith(o, [o])
                        };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = K.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                    return s(), i.promise(t)
                }
            });
            var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
                oe = ["Top", "Right", "Bottom", "Left"],
                ae = function(e, t) {
                    return "none" === (e = t || e).style.display || "" === e.style.display && C.contains(e.ownerDocument, e) && "none" === C.css(e, "display")
                },
                se = function(e, t, n, r) {
                    var i, o, a = {};
                    for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                    for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
                    return i
                };

            function ue(e, t, n, r) {
                var i, o, a = 20,
                    s = r ? function() {
                        return r.cur()
                    } : function() {
                        return C.css(e, t, "")
                    },
                    u = s(),
                    l = n && n[3] || (C.cssNumber[t] ? "" : "px"),
                    c = (C.cssNumber[t] || "px" !== l && +u) && ie.exec(C.css(e, t));
                if (c && c[3] !== l) {
                    for (u /= 2, l = l || c[3], c = +u || 1; a--;) C.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
                    c *= 2, C.style(e, t, c + l), n = n || []
                }
                return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
            }
            var le = {};

            function ce(e) {
                var t, n = e.ownerDocument,
                    r = e.nodeName,
                    i = le[r];
                return i || (t = n.body.appendChild(n.createElement(r)), i = C.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i)
            }

            function fe(e, t) {
                for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = K.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", K.set(r, "display", n)));
                for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
                return e
            }
            C.fn.extend({
                show: function() {
                    return fe(this, !0)
                },
                hide: function() {
                    return fe(this)
                },
                toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                        ae(this) ? C(this).show() : C(this).hide()
                    })
                }
            });
            var pe = /^(?:checkbox|radio)$/i,
                de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
                he = /^$|^module$|\/(?:java|ecma)script/i,
                ge = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };

            function ve(e, t) {
                var n;
                return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? C.merge([e], n) : n
            }

            function me(e, t) {
                for (var n = 0, r = e.length; n < r; n++) K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"))
            }
            ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
            var ye, xe, be = /<|&#?\w+;/;

            function we(e, t, n, r, i) {
                for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
                    if ((o = e[d]) || 0 === o)
                        if ("object" === T(o)) C.merge(p, o.nodeType ? [o] : o);
                        else if (be.test(o)) {
                    for (a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + C.htmlPrefilter(o) + u[2], c = u[0]; c--;) a = a.lastChild;
                    C.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
                } else p.push(t.createTextNode(o));
                for (f.textContent = "", d = 0; o = p[d++];)
                    if (r && C.inArray(o, r) > -1) i && i.push(o);
                    else if (l = C.contains(o.ownerDocument, o), a = ve(f.appendChild(o), "script"), l && me(a), n)
                    for (c = 0; o = a[c++];) he.test(o.type || "") && n.push(o);
                return f
            }
            ye = a.createDocumentFragment().appendChild(a.createElement("div")), (xe = a.createElement("input")).setAttribute("type", "radio"), xe.setAttribute("checked", "checked"), xe.setAttribute("name", "t"), ye.appendChild(xe), m.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked, ye.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue;
            var Te = a.documentElement,
                Ce = /^key/,
                Ee = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                Se = /^([^.]*)(?:\.(.+)|)/;

            function ke() {
                return !0
            }

            function De() {
                return !1
            }

            function je() {
                try {
                    return a.activeElement
                } catch (e) {}
            }

            function Ne(e, t, n, r, i, o) {
                var a, s;
                if ("object" == typeof t) {
                    for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ne(e, s, n, r, t[s], o);
                    return e
                }
                if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = De;
                else if (!i) return e;
                return 1 === o && (a = i, (i = function(e) {
                    return C().off(e), a.apply(this, arguments)
                }).guid = a.guid || (a.guid = C.guid++)), e.each(function() {
                    C.event.add(this, t, i, r, n)
                })
            }
            C.event = {
                global: {},
                add: function(e, t, n, r, i) {
                    var o, a, s, u, l, c, f, p, d, h, g, v = K.get(e);
                    if (v)
                        for (n.handler && (n = (o = n).handler, i = o.selector), i && C.find.matchesSelector(Te, i), n.guid || (n.guid = C.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function(t) {
                                return void 0 !== C && C.event.triggered !== t.type ? C.event.dispatch.apply(e, arguments) : void 0
                            }), l = (t = (t || "").match(I) || [""]).length; l--;) d = g = (s = Se.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = C.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = C.event.special[d] || {}, c = C.extend({
                            type: d,
                            origType: g,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: i,
                            needsContext: i && C.expr.match.needsContext.test(i),
                            namespace: h.join(".")
                        }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), C.event.global[d] = !0)
                },
                remove: function(e, t, n, r, i) {
                    var o, a, s, u, l, c, f, p, d, h, g, v = K.hasData(e) && K.get(e);
                    if (v && (u = v.events)) {
                        for (l = (t = (t || "").match(I) || [""]).length; l--;)
                            if (d = g = (s = Se.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                                for (f = C.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                                a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || C.removeEvent(e, d, v.handle), delete u[d])
                            } else
                                for (d in u) C.event.remove(e, d + t[l], n, r, !0);
                        C.isEmptyObject(u) && K.remove(e, "handle events")
                    }
                },
                dispatch: function(e) {
                    var t, n, r, i, o, a, s = C.event.fix(e),
                        u = new Array(arguments.length),
                        l = (K.get(this, "events") || {})[s.type] || [],
                        c = C.event.special[s.type] || {};
                    for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
                    if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                        for (a = C.event.handlers.call(this, s, l), t = 0;
                            (i = a[t++]) && !s.isPropagationStopped();)
                            for (s.currentTarget = i.elem, n = 0;
                                (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((C.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                        return c.postDispatch && c.postDispatch.call(this, s), s.result
                    }
                },
                handlers: function(e, t) {
                    var n, r, i, o, a, s = [],
                        u = t.delegateCount,
                        l = e.target;
                    if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                        for (; l !== this; l = l.parentNode || this)
                            if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                                for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? C(i, this).index(l) > -1 : C.find(i, this, null, [l]).length), a[i] && o.push(r);
                                o.length && s.push({
                                    elem: l,
                                    handlers: o
                                })
                            }
                    return l = this, u < t.length && s.push({
                        elem: l,
                        handlers: t.slice(u)
                    }), s
                },
                addProp: function(e, t) {
                    Object.defineProperty(C.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: y(t) ? function() {
                            if (this.originalEvent) return t(this.originalEvent)
                        } : function() {
                            if (this.originalEvent) return this.originalEvent[e]
                        },
                        set: function(t) {
                            Object.defineProperty(this, e, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: t
                            })
                        }
                    })
                },
                fix: function(e) {
                    return e[C.expando] ? e : new C.Event(e)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            if (this !== je() && this.focus) return this.focus(), !1
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            if (this === je() && this.blur) return this.blur(), !1
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            if ("checkbox" === this.type && this.click && A(this, "input")) return this.click(), !1
                        },
                        _default: function(e) {
                            return A(e.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            }, C.removeEvent = function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            }, C.Event = function(e, t) {
                if (!(this instanceof C.Event)) return new C.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : De, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0
            }, C.Event.prototype = {
                constructor: C.Event,
                isDefaultPrevented: De,
                isPropagationStopped: De,
                isImmediatePropagationStopped: De,
                isSimulated: !1,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, C.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function(e) {
                    var t = e.button;
                    return null == e.which && Ce.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ee.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
                }
            }, C.event.addProp), C.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(e, t) {
                C.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, r = e.relatedTarget,
                            i = e.handleObj;
                        return r && (r === this || C.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
                    }
                }
            }), C.fn.extend({
                on: function(e, t, n, r) {
                    return Ne(this, e, t, n, r)
                },
                one: function(e, t, n, r) {
                    return Ne(this, e, t, n, r, 1)
                },
                off: function(e, t, n) {
                    var r, i;
                    if (e && e.preventDefault && e.handleObj) return r = e.handleObj, C(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                    if ("object" == typeof e) {
                        for (i in e) this.off(i, t, e[i]);
                        return this
                    }
                    return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = De), this.each(function() {
                        C.event.remove(this, e, n, t)
                    })
                }
            });
            var Ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                qe = /<script|<style|<link/i,
                Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
                He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

            function Oe(e, t) {
                return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e
            }

            function Pe(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
            }

            function Me(e) {
                return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
            }

            function Re(e, t) {
                var n, r, i, o, a, s, u, l;
                if (1 === t.nodeType) {
                    if (K.hasData(e) && (o = K.access(e), a = K.set(t, o), l = o.events))
                        for (i in delete a.handle, a.events = {}, l)
                            for (n = 0, r = l[i].length; n < r; n++) C.event.add(t, i, l[i][n]);
                    Z.hasData(e) && (s = Z.access(e), u = C.extend({}, s), Z.set(t, u))
                }
            }

            function Ie(e, t, n, r) {
                t = l.apply([], t);
                var i, o, a, s, u, c, f = 0,
                    p = e.length,
                    d = p - 1,
                    h = t[0],
                    g = y(h);
                if (g || p > 1 && "string" == typeof h && !m.checkClone && Le.test(h)) return e.each(function(i) {
                    var o = e.eq(i);
                    g && (t[0] = h.call(this, i, o.html())), Ie(o, t, n, r)
                });
                if (p && (o = (i = we(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
                    for (s = (a = C.map(ve(i, "script"), Pe)).length; f < p; f++) u = i, f !== d && (u = C.clone(u, !0, !0), s && C.merge(a, ve(u, "script"))), n.call(e[f], u, f);
                    if (s)
                        for (c = a[a.length - 1].ownerDocument, C.map(a, Me), f = 0; f < s; f++) u = a[f], he.test(u.type || "") && !K.access(u, "globalEval") && C.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? C._evalUrl && C._evalUrl(u.src) : w(u.textContent.replace(He, ""), c, u))
                }
                return e
            }

            function We(e, t, n) {
                for (var r, i = t ? C.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || C.cleanData(ve(r)), r.parentNode && (n && C.contains(r.ownerDocument, r) && me(ve(r, "script")), r.parentNode.removeChild(r));
                return e
            }
            C.extend({
                htmlPrefilter: function(e) {
                    return e.replace(Ae, "<$1></$2>")
                },
                clone: function(e, t, n) {
                    var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                        f = C.contains(e.ownerDocument, e);
                    if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                        for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], l = void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
                    if (t)
                        if (n)
                            for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Re(o[r], a[r]);
                        else Re(e, c);
                    return (a = ve(c, "script")).length > 0 && me(a, !f && ve(e, "script")), c
                },
                cleanData: function(e) {
                    for (var t, n, r, i = C.event.special, o = 0; void 0 !== (n = e[o]); o++)
                        if (Q(n)) {
                            if (t = n[K.expando]) {
                                if (t.events)
                                    for (r in t.events) i[r] ? C.event.remove(n, r) : C.removeEvent(n, r, t.handle);
                                n[K.expando] = void 0
                            }
                            n[Z.expando] && (n[Z.expando] = void 0)
                        }
                }
            }), C.fn.extend({
                detach: function(e) {
                    return We(this, e, !0)
                },
                remove: function(e) {
                    return We(this, e)
                },
                text: function(e) {
                    return X(this, function(e) {
                        return void 0 === e ? C.text(this) : this.empty().each(function() {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                        })
                    }, null, e, arguments.length)
                },
                append: function() {
                    return Ie(this, arguments, function(e) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e)
                    })
                },
                prepend: function() {
                    return Ie(this, arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = Oe(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function() {
                    return Ie(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function() {
                    return Ie(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(ve(e, !1)), e.textContent = "");
                    return this
                },
                clone: function(e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map(function() {
                        return C.clone(this, e, t)
                    })
                },
                html: function(e) {
                    return X(this, function(e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !qe.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = C.htmlPrefilter(e);
                            try {
                                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(ve(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (e) {}
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function() {
                    var e = [];
                    return Ie(this, arguments, function(t) {
                        var n = this.parentNode;
                        C.inArray(this, e) < 0 && (C.cleanData(ve(this)), n && n.replaceChild(t, this))
                    }, e)
                }
            }), C.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(e, t) {
                C.fn[e] = function(e) {
                    for (var n, r = [], i = C(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), C(i[a])[t](n), c.apply(r, n.get());
                    return this.pushStack(r)
                }
            });
            var $e = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
                Fe = function(e) {
                    var t = e.ownerDocument.defaultView;
                    return t && t.opener || (t = n), t.getComputedStyle(e)
                },
                Be = new RegExp(oe.join("|"), "i");

            function _e(e, t, n) {
                var r, i, o, a, s = e.style;
                return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || C.contains(e.ownerDocument, e) || (a = C.style(e, t)), !m.pixelBoxStyles() && $e.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
            }

            function ze(e, t) {
                return {
                    get: function() {
                        if (!e()) return (this.get = t).apply(this, arguments);
                        delete this.get
                    }
                }
            }! function() {
                function e() {
                    if (c) {
                        l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Te.appendChild(l).appendChild(c);
                        var e = n.getComputedStyle(c);
                        r = "1%" !== e.top, u = 12 === t(e.marginLeft), c.style.right = "60%", s = 36 === t(e.right), i = 36 === t(e.width), c.style.position = "absolute", o = 36 === c.offsetWidth || "absolute", Te.removeChild(l), c = null
                    }
                }

                function t(e) {
                    return Math.round(parseFloat(e))
                }
                var r, i, o, s, u, l = a.createElement("div"),
                    c = a.createElement("div");
                c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === c.style.backgroundClip, C.extend(m, {
                    boxSizingReliable: function() {
                        return e(), i
                    },
                    pixelBoxStyles: function() {
                        return e(), s
                    },
                    pixelPosition: function() {
                        return e(), r
                    },
                    reliableMarginLeft: function() {
                        return e(), u
                    },
                    scrollboxSize: function() {
                        return e(), o
                    }
                }))
            }();
            var Xe = /^(none|table(?!-c[ea]).+)/,
                Ue = /^--/,
                Ve = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                Ge = {
                    letterSpacing: "0",
                    fontWeight: "400"
                },
                Ye = ["Webkit", "Moz", "ms"],
                Qe = a.createElement("div").style;

            function Je(e) {
                var t = C.cssProps[e];
                return t || (t = C.cssProps[e] = function(e) {
                    if (e in Qe) return e;
                    for (var t = e[0].toUpperCase() + e.slice(1), n = Ye.length; n--;)
                        if ((e = Ye[n] + t) in Qe) return e
                }(e) || e), t
            }

            function Ke(e, t, n) {
                var r = ie.exec(t);
                return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
            }

            function Ze(e, t, n, r, i, o) {
                var a = "width" === t ? 1 : 0,
                    s = 0,
                    u = 0;
                if (n === (r ? "border" : "content")) return 0;
                for (; a < 4; a += 2) "margin" === n && (u += C.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= C.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= C.css(e, "border" + oe[a] + "Width", !0, i))) : (u += C.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += C.css(e, "border" + oe[a] + "Width", !0, i) : s += C.css(e, "border" + oe[a] + "Width", !0, i));
                return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u
            }

            function et(e, t, n) {
                var r = Fe(e),
                    i = _e(e, t, r),
                    o = "border-box" === C.css(e, "boxSizing", !1, r),
                    a = o;
                if ($e.test(i)) {
                    if (!n) return i;
                    i = "auto"
                }
                return a = a && (m.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === C.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
            }

            function tt(e, t, n, r, i) {
                return new tt.prototype.init(e, t, n, r, i)
            }
            C.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = _e(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {},
                style: function(e, t, n, r) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var i, o, a, s = Y(t),
                            u = Ue.test(t),
                            l = e.style;
                        if (u || (t = Je(s)), a = C.cssHooks[t] || C.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                        "string" === (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n == n && ("number" === o && (n += i && i[3] || (C.cssNumber[s] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
                    }
                },
                css: function(e, t, n, r) {
                    var i, o, a, s = Y(t);
                    return Ue.test(t) || (t = Je(s)), (a = C.cssHooks[t] || C.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = _e(e, t, r)), "normal" === i && t in Ge && (i = Ge[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
                }
            }), C.each(["height", "width"], function(e, t) {
                C.cssHooks[t] = {
                    get: function(e, n, r) {
                        if (n) return !Xe.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ve, function() {
                            return et(e, t, r)
                        })
                    },
                    set: function(e, n, r) {
                        var i, o = Fe(e),
                            a = "border-box" === C.css(e, "boxSizing", !1, o),
                            s = r && Ze(e, t, r, a, o);
                        return a && m.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = C.css(e, t)), Ke(0, n, s)
                    }
                }
            }), C.cssHooks.marginLeft = ze(m.reliableMarginLeft, function(e, t) {
                if (t) return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {
                    marginLeft: 0
                }, function() {
                    return e.getBoundingClientRect().left
                })) + "px"
            }), C.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(e, t) {
                C.cssHooks[e + t] = {
                    expand: function(n) {
                        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                        return i
                    }
                }, "margin" !== e && (C.cssHooks[e + t].set = Ke)
            }), C.fn.extend({
                css: function(e, t) {
                    return X(this, function(e, t, n) {
                        var r, i, o = {},
                            a = 0;
                        if (Array.isArray(t)) {
                            for (r = Fe(e), i = t.length; a < i; a++) o[t[a]] = C.css(e, t[a], !1, r);
                            return o
                        }
                        return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
                    }, e, t, arguments.length > 1)
                }
            }), C.Tween = tt, tt.prototype = {
                constructor: tt,
                init: function(e, t, n, r, i, o) {
                    this.elem = e, this.prop = n, this.easing = i || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (C.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var e = tt.propHooks[this.prop];
                    return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, n = tt.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this
                }
            }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                    },
                    set: function(e) {
                        C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[C.cssProps[e.prop]] && !C.cssHooks[e.prop] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, C.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                _default: "swing"
            }, C.fx = tt.prototype.init, C.fx.step = {};
            var nt, rt, it = /^(?:toggle|show|hide)$/,
                ot = /queueHooks$/;

            function at() {
                rt && (!1 === a.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(at) : n.setTimeout(at, C.fx.interval), C.fx.tick())
            }

            function st() {
                return n.setTimeout(function() {
                    nt = void 0
                }), nt = Date.now()
            }

            function ut(e, t) {
                var n, r = 0,
                    i = {
                        height: e
                    };
                for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;
                return t && (i.opacity = i.width = e), i
            }

            function lt(e, t, n) {
                for (var r, i = (ct.tweeners[t] || []).concat(ct.tweeners["*"]), o = 0, a = i.length; o < a; o++)
                    if (r = i[o].call(n, t, e)) return r
            }

            function ct(e, t, n) {
                var r, i, o = 0,
                    a = ct.prefilters.length,
                    s = C.Deferred().always(function() {
                        delete u.elem
                    }),
                    u = function() {
                        if (i) return !1;
                        for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
                        return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
                    },
                    l = s.promise({
                        elem: e,
                        props: C.extend({}, t),
                        opts: C.extend(!0, {
                            specialEasing: {},
                            easing: C.easing._default
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: nt || st(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(t, n) {
                            var r = C.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                            return l.tweens.push(r), r
                        },
                        stop: function(t) {
                            var n = 0,
                                r = t ? l.tweens.length : 0;
                            if (i) return this;
                            for (i = !0; n < r; n++) l.tweens[n].run(1);
                            return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                        }
                    }),
                    c = l.props;
                for (! function(e, t) {
                        var n, r, i, o, a;
                        for (n in e)
                            if (i = t[r = Y(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = C.cssHooks[r]) && "expand" in a)
                                for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                            else t[r] = i
                    }(c, l.opts.specialEasing); o < a; o++)
                    if (r = ct.prefilters[o].call(l, e, c, l.opts)) return y(r.stop) && (C._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
                return C.map(c, lt, l), y(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), C.fx.timer(C.extend(u, {
                    elem: e,
                    anim: l,
                    queue: l.opts.queue
                })), l
            }
            C.Animation = C.extend(ct, {
                    tweeners: {
                        "*": [function(e, t) {
                            var n = this.createTween(e, t);
                            return ue(n.elem, e, ie.exec(t), n), n
                        }]
                    },
                    tweener: function(e, t) {
                        y(e) ? (t = e, e = ["*"]) : e = e.match(I);
                        for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ct.tweeners[n] = ct.tweeners[n] || [], ct.tweeners[n].unshift(t)
                    },
                    prefilters: [function(e, t, n) {
                        var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                            p = this,
                            d = {},
                            h = e.style,
                            g = e.nodeType && ae(e),
                            v = K.get(e, "fxshow");
                        for (r in n.queue || (null == (a = C._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                                a.unqueued || s()
                            }), a.unqueued++, p.always(function() {
                                p.always(function() {
                                    a.unqueued--, C.queue(e, "fx").length || a.empty.fire()
                                })
                            })), t)
                            if (i = t[r], it.test(i)) {
                                if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                                    if ("show" !== i || !v || void 0 === v[r]) continue;
                                    g = !0
                                }
                                d[r] = v && v[r] || C.style(e, r)
                            }
                        if ((u = !C.isEmptyObject(t)) || !C.isEmptyObject(d))
                            for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = K.get(e, "display")), "none" === (c = C.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = C.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === C.css(e, "float") && (u || (p.done(function() {
                                    h.display = l
                                }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                                })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = K.access(e, "fxshow", {
                                display: l
                            }), o && (v.hidden = !g), g && fe([e], !0), p.done(function() {
                                for (r in g || fe([e]), K.remove(e, "fxshow"), d) C.style(e, r, d[r])
                            })), u = lt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
                    }],
                    prefilter: function(e, t) {
                        t ? ct.prefilters.unshift(e) : ct.prefilters.push(e)
                    }
                }), C.speed = function(e, t, n) {
                    var r = e && "object" == typeof e ? C.extend({}, e) : {
                        complete: n || !n && t || y(e) && e,
                        duration: e,
                        easing: n && t || t && !y(t) && t
                    };
                    return C.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in C.fx.speeds ? r.duration = C.fx.speeds[r.duration] : r.duration = C.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                        y(r.old) && r.old.call(this), r.queue && C.dequeue(this, r.queue)
                    }, r
                }, C.fn.extend({
                    fadeTo: function(e, t, n, r) {
                        return this.filter(ae).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, n, r)
                    },
                    animate: function(e, t, n, r) {
                        var i = C.isEmptyObject(e),
                            o = C.speed(t, n, r),
                            a = function() {
                                var t = ct(this, C.extend({}, e), o);
                                (i || K.get(this, "finish")) && t.stop(!0)
                            };
                        return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                    },
                    stop: function(e, t, n) {
                        var r = function(e) {
                            var t = e.stop;
                            delete e.stop, t(n)
                        };
                        return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                            var t = !0,
                                i = null != e && e + "queueHooks",
                                o = C.timers,
                                a = K.get(this);
                            if (i) a[i] && a[i].stop && r(a[i]);
                            else
                                for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
                            for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                            !t && n || C.dequeue(this, e)
                        })
                    },
                    finish: function(e) {
                        return !1 !== e && (e = e || "fx"), this.each(function() {
                            var t, n = K.get(this),
                                r = n[e + "queue"],
                                i = n[e + "queueHooks"],
                                o = C.timers,
                                a = r ? r.length : 0;
                            for (n.finish = !0, C.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                            for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                            delete n.finish
                        })
                    }
                }), C.each(["toggle", "show", "hide"], function(e, t) {
                    var n = C.fn[t];
                    C.fn[t] = function(e, r, i) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i)
                    }
                }), C.each({
                    slideDown: ut("show"),
                    slideUp: ut("hide"),
                    slideToggle: ut("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, function(e, t) {
                    C.fn[e] = function(e, n, r) {
                        return this.animate(t, e, n, r)
                    }
                }), C.timers = [], C.fx.tick = function() {
                    var e, t = 0,
                        n = C.timers;
                    for (nt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                    n.length || C.fx.stop(), nt = void 0
                }, C.fx.timer = function(e) {
                    C.timers.push(e), C.fx.start()
                }, C.fx.interval = 13, C.fx.start = function() {
                    rt || (rt = !0, at())
                }, C.fx.stop = function() {
                    rt = null
                }, C.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                }, C.fn.delay = function(e, t) {
                    return e = C.fx && C.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(t, r) {
                        var i = n.setTimeout(t, e);
                        r.stop = function() {
                            n.clearTimeout(i)
                        }
                    })
                },
                function() {
                    var e = a.createElement("input"),
                        t = a.createElement("select").appendChild(a.createElement("option"));
                    e.type = "checkbox", m.checkOn = "" !== e.value, m.optSelected = t.selected, (e = a.createElement("input")).value = "t", e.type = "radio", m.radioValue = "t" === e.value
                }();
            var ft, pt = C.expr.attrHandle;
            C.fn.extend({
                attr: function(e, t) {
                    return X(this, C.attr, e, t, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        C.removeAttr(this, e)
                    })
                }
            }), C.extend({
                attr: function(e, t, n) {
                    var r, i, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === o && C.isXMLDoc(e) || (i = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? ft : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = C.find.attr(e, t)) ? void 0 : r)
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!m.radioValue && "radio" === t && A(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                },
                removeAttr: function(e, t) {
                    var n, r = 0,
                        i = t && t.match(I);
                    if (i && 1 === e.nodeType)
                        for (; n = i[r++];) e.removeAttribute(n)
                }
            }), ft = {
                set: function(e, t, n) {
                    return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n
                }
            }, C.each(C.expr.match.bool.source.match(/\w+/g), function(e, t) {
                var n = pt[t] || C.find.attr;
                pt[t] = function(e, t, r) {
                    var i, o, a = t.toLowerCase();
                    return r || (o = pt[a], pt[a] = i, i = null != n(e, t, r) ? a : null, pt[a] = o), i
                }
            });
            var dt = /^(?:input|select|textarea|button)$/i,
                ht = /^(?:a|area)$/i;

            function gt(e) {
                return (e.match(I) || []).join(" ")
            }

            function vt(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }

            function mt(e) {
                return Array.isArray(e) ? e : "string" == typeof e && e.match(I) || []
            }
            C.fn.extend({
                prop: function(e, t) {
                    return X(this, C.prop, e, t, arguments.length > 1)
                },
                removeProp: function(e) {
                    return this.each(function() {
                        delete this[C.propFix[e] || e]
                    })
                }
            }), C.extend({
                prop: function(e, t, n) {
                    var r, i, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return 1 === o && C.isXMLDoc(e) || (t = C.propFix[t] || t, i = C.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var t = C.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : dt.test(e.nodeName) || ht.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }), m.optSelected || (C.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null
                },
                set: function(e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                }
            }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                C.propFix[this.toLowerCase()] = this
            }), C.fn.extend({
                addClass: function(e) {
                    var t, n, r, i, o, a, s, u = 0;
                    if (y(e)) return this.each(function(t) {
                        C(this).addClass(e.call(this, t, vt(this)))
                    });
                    if ((t = mt(e)).length)
                        for (; n = this[u++];)
                            if (i = vt(n), r = 1 === n.nodeType && " " + gt(i) + " ") {
                                for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                                i !== (s = gt(r)) && n.setAttribute("class", s)
                            }
                    return this
                },
                removeClass: function(e) {
                    var t, n, r, i, o, a, s, u = 0;
                    if (y(e)) return this.each(function(t) {
                        C(this).removeClass(e.call(this, t, vt(this)))
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if ((t = mt(e)).length)
                        for (; n = this[u++];)
                            if (i = vt(n), r = 1 === n.nodeType && " " + gt(i) + " ") {
                                for (a = 0; o = t[a++];)
                                    for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                                i !== (s = gt(r)) && n.setAttribute("class", s)
                            }
                    return this
                },
                toggleClass: function(e, t) {
                    var n = typeof e,
                        r = "string" === n || Array.isArray(e);
                    return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : y(e) ? this.each(function(n) {
                        C(this).toggleClass(e.call(this, n, vt(this), t), t)
                    }) : this.each(function() {
                        var t, i, o, a;
                        if (r)
                            for (i = 0, o = C(this), a = mt(e); t = a[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                        else void 0 !== e && "boolean" !== n || ((t = vt(this)) && K.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : K.get(this, "__className__") || ""))
                    })
                },
                hasClass: function(e) {
                    var t, n, r = 0;
                    for (t = " " + e + " "; n = this[r++];)
                        if (1 === n.nodeType && (" " + gt(vt(n)) + " ").indexOf(t) > -1) return !0;
                    return !1
                }
            });
            var yt = /\r/g;
            C.fn.extend({
                val: function(e) {
                    var t, n, r, i = this[0];
                    return arguments.length ? (r = y(e), this.each(function(n) {
                        var i;
                        1 === this.nodeType && (null == (i = r ? e.call(this, n, C(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = C.map(i, function(e) {
                            return null == e ? "" : e + ""
                        })), (t = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                    })) : i ? (t = C.valHooks[i.type] || C.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(yt, "") : null == n ? "" : n : void 0
                }
            }), C.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = C.find.attr(e, "value");
                            return null != t ? t : gt(C.text(e))
                        }
                    },
                    select: {
                        get: function(e) {
                            var t, n, r, i = e.options,
                                o = e.selectedIndex,
                                a = "select-one" === e.type,
                                s = a ? null : [],
                                u = a ? o + 1 : i.length;
                            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                                if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                                    if (t = C(n).val(), a) return t;
                                    s.push(t)
                                }
                            return s
                        },
                        set: function(e, t) {
                            for (var n, r, i = e.options, o = C.makeArray(t), a = i.length; a--;)((r = i[a]).selected = C.inArray(C.valHooks.option.get(r), o) > -1) && (n = !0);
                            return n || (e.selectedIndex = -1), o
                        }
                    }
                }
            }), C.each(["radio", "checkbox"], function() {
                C.valHooks[this] = {
                    set: function(e, t) {
                        if (Array.isArray(t)) return e.checked = C.inArray(C(e).val(), t) > -1
                    }
                }, m.checkOn || (C.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            }), m.focusin = "onfocusin" in n;
            var xt = /^(?:focusinfocus|focusoutblur)$/,
                bt = function(e) {
                    e.stopPropagation()
                };
            C.extend(C.event, {
                trigger: function(e, t, r, i) {
                    var o, s, u, l, c, f, p, d, g = [r || a],
                        v = h.call(e, "type") ? e.type : e,
                        m = h.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (s = d = u = r = r || a, 3 !== r.nodeType && 8 !== r.nodeType && !xt.test(v + C.event.triggered) && (v.indexOf(".") > -1 && (m = v.split("."), v = m.shift(), m.sort()), c = v.indexOf(":") < 0 && "on" + v, (e = e[C.expando] ? e : new C.Event(v, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = m.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : C.makeArray(t, [e]), p = C.event.special[v] || {}, i || !p.trigger || !1 !== p.trigger.apply(r, t))) {
                        if (!i && !p.noBubble && !x(r)) {
                            for (l = p.delegateType || v, xt.test(l + v) || (s = s.parentNode); s; s = s.parentNode) g.push(s), u = s;
                            u === (r.ownerDocument || a) && g.push(u.defaultView || u.parentWindow || n)
                        }
                        for (o = 0;
                            (s = g[o++]) && !e.isPropagationStopped();) d = s, e.type = o > 1 ? l : p.bindType || v, (f = (K.get(s, "events") || {})[e.type] && K.get(s, "handle")) && f.apply(s, t), (f = c && s[c]) && f.apply && Q(s) && (e.result = f.apply(s, t), !1 === e.result && e.preventDefault());
                        return e.type = v, i || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(g.pop(), t) || !Q(r) || c && y(r[v]) && !x(r) && ((u = r[c]) && (r[c] = null), C.event.triggered = v, e.isPropagationStopped() && d.addEventListener(v, bt), r[v](), e.isPropagationStopped() && d.removeEventListener(v, bt), C.event.triggered = void 0, u && (r[c] = u)), e.result
                    }
                },
                simulate: function(e, t, n) {
                    var r = C.extend(new C.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    C.event.trigger(r, null, t)
                }
            }), C.fn.extend({
                trigger: function(e, t) {
                    return this.each(function() {
                        C.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    if (n) return C.event.trigger(e, t, n, !0)
                }
            }), m.focusin || C.each({
                focus: "focusin",
                blur: "focusout"
            }, function(e, t) {
                var n = function(e) {
                    C.event.simulate(t, e.target, C.event.fix(e))
                };
                C.event.special[t] = {
                    setup: function() {
                        var r = this.ownerDocument || this,
                            i = K.access(r, t);
                        i || r.addEventListener(e, n, !0), K.access(r, t, (i || 0) + 1)
                    },
                    teardown: function() {
                        var r = this.ownerDocument || this,
                            i = K.access(r, t) - 1;
                        i ? K.access(r, t, i) : (r.removeEventListener(e, n, !0), K.remove(r, t))
                    }
                }
            });
            var wt = n.location,
                Tt = Date.now(),
                Ct = /\?/;
            C.parseXML = function(e) {
                var t;
                if (!e || "string" != typeof e) return null;
                try {
                    t = (new n.DOMParser).parseFromString(e, "text/xml")
                } catch (e) {
                    t = void 0
                }
                return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t
            };
            var Et = /\[\]$/,
                St = /\r?\n/g,
                kt = /^(?:submit|button|image|reset|file)$/i,
                Dt = /^(?:input|select|textarea|keygen)/i;

            function jt(e, t, n, r) {
                var i;
                if (Array.isArray(t)) C.each(t, function(t, i) {
                    n || Et.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
                });
                else if (n || "object" !== T(t)) r(e, t);
                else
                    for (i in t) jt(e + "[" + i + "]", t[i], n, r)
            }
            C.param = function(e, t) {
                var n, r = [],
                    i = function(e, t) {
                        var n = y(t) ? t() : t;
                        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                    };
                if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function() {
                    i(this.name, this.value)
                });
                else
                    for (n in e) jt(n, e[n], t, i);
                return r.join("&")
            }, C.fn.extend({
                serialize: function() {
                    return C.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var e = C.prop(this, "elements");
                        return e ? C.makeArray(e) : this
                    }).filter(function() {
                        var e = this.type;
                        return this.name && !C(this).is(":disabled") && Dt.test(this.nodeName) && !kt.test(e) && (this.checked || !pe.test(e))
                    }).map(function(e, t) {
                        var n = C(this).val();
                        return null == n ? null : Array.isArray(n) ? C.map(n, function(e) {
                            return {
                                name: t.name,
                                value: e.replace(St, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(St, "\r\n")
                        }
                    }).get()
                }
            });
            var Nt = /%20/g,
                At = /#.*$/,
                qt = /([?&])_=[^&]*/,
                Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                Ht = /^(?:GET|HEAD)$/,
                Ot = /^\/\//,
                Pt = {},
                Mt = {},
                Rt = "*/".concat("*"),
                It = a.createElement("a");

            function Wt(e) {
                return function(t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var r, i = 0,
                        o = t.toLowerCase().match(I) || [];
                    if (y(n))
                        for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }

            function $t(e, t, n, r) {
                var i = {},
                    o = e === Mt;

                function a(s) {
                    var u;
                    return i[s] = !0, C.each(e[s] || [], function(e, s) {
                        var l = s(t, n, r);
                        return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
                    }), u
                }
                return a(t.dataTypes[0]) || !i["*"] && a("*")
            }

            function Ft(e, t) {
                var n, r, i = C.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                return r && C.extend(!0, e, r), e
            }
            It.href = wt.href, C.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: wt.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(wt.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Rt,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": JSON.parse,
                        "text xml": C.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? Ft(Ft(e, C.ajaxSettings), t) : Ft(C.ajaxSettings, e)
                },
                ajaxPrefilter: Wt(Pt),
                ajaxTransport: Wt(Mt),
                ajax: function(e, t) {
                    "object" == typeof e && (t = e, e = void 0), t = t || {};
                    var r, i, o, s, u, l, c, f, p, d, h = C.ajaxSetup({}, t),
                        g = h.context || h,
                        v = h.context && (g.nodeType || g.jquery) ? C(g) : C.event,
                        m = C.Deferred(),
                        y = C.Callbacks("once memory"),
                        x = h.statusCode || {},
                        b = {},
                        w = {},
                        T = "canceled",
                        E = {
                            readyState: 0,
                            getResponseHeader: function(e) {
                                var t;
                                if (c) {
                                    if (!s)
                                        for (s = {}; t = Lt.exec(o);) s[t[1].toLowerCase()] = t[2];
                                    t = s[e.toLowerCase()]
                                }
                                return null == t ? null : t
                            },
                            getAllResponseHeaders: function() {
                                return c ? o : null
                            },
                            setRequestHeader: function(e, t) {
                                return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, b[e] = t), this
                            },
                            overrideMimeType: function(e) {
                                return null == c && (h.mimeType = e), this
                            },
                            statusCode: function(e) {
                                var t;
                                if (e)
                                    if (c) E.always(e[E.status]);
                                    else
                                        for (t in e) x[t] = [x[t], e[t]];
                                return this
                            },
                            abort: function(e) {
                                var t = e || T;
                                return r && r.abort(t), S(0, t), this
                            }
                        };
                    if (m.promise(E), h.url = ((e || h.url || wt.href) + "").replace(Ot, wt.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(I) || [""], null == h.crossDomain) {
                        l = a.createElement("a");
                        try {
                            l.href = h.url, l.href = l.href, h.crossDomain = It.protocol + "//" + It.host != l.protocol + "//" + l.host
                        } catch (e) {
                            h.crossDomain = !0
                        }
                    }
                    if (h.data && h.processData && "string" != typeof h.data && (h.data = C.param(h.data, h.traditional)), $t(Pt, h, t, E), c) return E;
                    for (p in (f = C.event && h.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Ht.test(h.type), i = h.url.replace(At, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Nt, "+")) : (d = h.url.slice(i.length), h.data && (h.processData || "string" == typeof h.data) && (i += (Ct.test(i) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (i = i.replace(qt, "$1"), d = (Ct.test(i) ? "&" : "?") + "_=" + Tt++ + d), h.url = i + d), h.ifModified && (C.lastModified[i] && E.setRequestHeader("If-Modified-Since", C.lastModified[i]), C.etag[i] && E.setRequestHeader("If-None-Match", C.etag[i])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : h.accepts["*"]), h.headers) E.setRequestHeader(p, h.headers[p]);
                    if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();
                    if (T = "abort", y.add(h.complete), E.done(h.success), E.fail(h.error), r = $t(Mt, h, t, E)) {
                        if (E.readyState = 1, f && v.trigger("ajaxSend", [E, h]), c) return E;
                        h.async && h.timeout > 0 && (u = n.setTimeout(function() {
                            E.abort("timeout")
                        }, h.timeout));
                        try {
                            c = !1, r.send(b, S)
                        } catch (e) {
                            if (c) throw e;
                            S(-1, e)
                        }
                    } else S(-1, "No Transport");

                    function S(e, t, a, s) {
                        var l, p, d, b, w, T = t;
                        c || (c = !0, u && n.clearTimeout(u), r = void 0, o = s || "", E.readyState = e > 0 ? 4 : 0, l = e >= 200 && e < 300 || 304 === e, a && (b = function(e, t, n) {
                            for (var r, i, o, a, s = e.contents, u = e.dataTypes;
                                "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                            if (r)
                                for (i in s)
                                    if (s[i] && s[i].test(r)) {
                                        u.unshift(i);
                                        break
                                    }
                            if (u[0] in n) o = u[0];
                            else {
                                for (i in n) {
                                    if (!u[0] || e.converters[i + " " + u[0]]) {
                                        o = i;
                                        break
                                    }
                                    a || (a = i)
                                }
                                o = o || a
                            }
                            if (o) return o !== u[0] && u.unshift(o), n[o]
                        }(h, E, a)), b = function(e, t, n, r) {
                            var i, o, a, s, u, l = {},
                                c = e.dataTypes.slice();
                            if (c[1])
                                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                            for (o = c.shift(); o;)
                                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                                    if ("*" === o) o = u;
                                    else if ("*" !== u && u !== o) {
                                if (!(a = l[u + " " + o] || l["* " + o]))
                                    for (i in l)
                                        if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e.throws) t = a(t);
                                    else try {
                                        t = a(t)
                                    } catch (e) {
                                        return {
                                            state: "parsererror",
                                            error: a ? e : "No conversion from " + u + " to " + o
                                        }
                                    }
                            }
                            return {
                                state: "success",
                                data: t
                            }
                        }(h, b, E, l), l ? (h.ifModified && ((w = E.getResponseHeader("Last-Modified")) && (C.lastModified[i] = w), (w = E.getResponseHeader("etag")) && (C.etag[i] = w)), 204 === e || "HEAD" === h.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = b.state, p = b.data, l = !(d = b.error))) : (d = T, !e && T || (T = "error", e < 0 && (e = 0))), E.status = e, E.statusText = (t || T) + "", l ? m.resolveWith(g, [p, T, E]) : m.rejectWith(g, [E, T, d]), E.statusCode(x), x = void 0, f && v.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), y.fireWith(g, [E, T]), f && (v.trigger("ajaxComplete", [E, h]), --C.active || C.event.trigger("ajaxStop")))
                    }
                    return E
                },
                getJSON: function(e, t, n) {
                    return C.get(e, t, n, "json")
                },
                getScript: function(e, t) {
                    return C.get(e, void 0, t, "script")
                }
            }), C.each(["get", "post"], function(e, t) {
                C[t] = function(e, n, r, i) {
                    return y(n) && (i = i || r, r = n, n = void 0), C.ajax(C.extend({
                        url: e,
                        type: t,
                        dataType: i,
                        data: n,
                        success: r
                    }, C.isPlainObject(e) && e))
                }
            }), C._evalUrl = function(e) {
                return C.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    throws: !0
                })
            }, C.fn.extend({
                wrapAll: function(e) {
                    var t;
                    return this[0] && (y(e) && (e = e.call(this[0])), t = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                        return e
                    }).append(this)), this
                },
                wrapInner: function(e) {
                    return y(e) ? this.each(function(t) {
                        C(this).wrapInner(e.call(this, t))
                    }) : this.each(function() {
                        var t = C(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function(e) {
                    var t = y(e);
                    return this.each(function(n) {
                        C(this).wrapAll(t ? e.call(this, n) : e)
                    })
                },
                unwrap: function(e) {
                    return this.parent(e).not("body").each(function() {
                        C(this).replaceWith(this.childNodes)
                    }), this
                }
            }), C.expr.pseudos.hidden = function(e) {
                return !C.expr.pseudos.visible(e)
            }, C.expr.pseudos.visible = function(e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
            }, C.ajaxSettings.xhr = function() {
                try {
                    return new n.XMLHttpRequest
                } catch (e) {}
            };
            var Bt = {
                    0: 200,
                    1223: 204
                },
                _t = C.ajaxSettings.xhr();
            m.cors = !!_t && "withCredentials" in _t, m.ajax = _t = !!_t, C.ajaxTransport(function(e) {
                var t, r;
                if (m.cors || _t && !e.crossDomain) return {
                    send: function(i, o) {
                        var a, s = e.xhr();
                        if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                            for (a in e.xhrFields) s[a] = e.xhrFields[a];
                        for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(a, i[a]);
                        t = function(e) {
                            return function() {
                                t && (t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Bt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                    binary: s.response
                                } : {
                                    text: s.responseText
                                }, s.getAllResponseHeaders()))
                            }
                        }, s.onload = t(), r = s.onerror = s.ontimeout = t("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                            4 === s.readyState && n.setTimeout(function() {
                                t && r()
                            })
                        }, t = t("abort");
                        try {
                            s.send(e.hasContent && e.data || null)
                        } catch (e) {
                            if (t) throw e
                        }
                    },
                    abort: function() {
                        t && t()
                    }
                }
            }), C.ajaxPrefilter(function(e) {
                e.crossDomain && (e.contents.script = !1)
            }), C.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(e) {
                        return C.globalEval(e), e
                    }
                }
            }), C.ajaxPrefilter("script", function(e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
            }), C.ajaxTransport("script", function(e) {
                var t, n;
                if (e.crossDomain) return {
                    send: function(r, i) {
                        t = C("<script>").prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                        }), a.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            });
            var zt, Xt = [],
                Ut = /(=)\?(?=&|$)|\?\?/;
            C.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = Xt.pop() || C.expando + "_" + Tt++;
                    return this[e] = !0, e
                }
            }), C.ajaxPrefilter("json jsonp", function(e, t, r) {
                var i, o, a, s = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data");
                if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Ut, "$1" + i) : !1 !== e.jsonp && (e.url += (Ct.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
                    return a || C.error(i + " was not called"), a[0]
                }, e.dataTypes[0] = "json", o = n[i], n[i] = function() {
                    a = arguments
                }, r.always(function() {
                    void 0 === o ? C(n).removeProp(i) : n[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Xt.push(i)), a && y(o) && o(a[0]), a = o = void 0
                }), "script"
            }), m.createHTMLDocument = ((zt = a.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === zt.childNodes.length), C.parseHTML = function(e, t, n) {
                return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (m.createHTMLDocument ? ((r = (t = a.implementation.createHTMLDocument("")).createElement("base")).href = a.location.href, t.head.appendChild(r)) : t = a), o = !n && [], (i = q.exec(e)) ? [t.createElement(i[1])] : (i = we([e], t, o), o && o.length && C(o).remove(), C.merge([], i.childNodes)));
                var r, i, o
            }, C.fn.load = function(e, t, n) {
                var r, i, o, a = this,
                    s = e.indexOf(" ");
                return s > -1 && (r = gt(e.slice(s)), e = e.slice(0, s)), y(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && C.ajax({
                    url: e,
                    type: i || "GET",
                    dataType: "html",
                    data: t
                }).done(function(e) {
                    o = arguments, a.html(r ? C("<div>").append(C.parseHTML(e)).find(r) : e)
                }).always(n && function(e, t) {
                    a.each(function() {
                        n.apply(this, o || [e.responseText, t, e])
                    })
                }), this
            }, C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
                C.fn[t] = function(e) {
                    return this.on(t, e)
                }
            }), C.expr.pseudos.animated = function(e) {
                return C.grep(C.timers, function(t) {
                    return e === t.elem
                }).length
            }, C.offset = {
                setOffset: function(e, t, n) {
                    var r, i, o, a, s, u, l = C.css(e, "position"),
                        c = C(e),
                        f = {};
                    "static" === l && (e.style.position = "relative"), s = c.offset(), o = C.css(e, "top"), u = C.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), y(t) && (t = t.call(e, n, C.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
                }
            }, C.fn.extend({
                offset: function(e) {
                    if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                        C.offset.setOffset(this, e, t)
                    });
                    var t, n, r = this[0];
                    return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset
                    }) : {
                        top: 0,
                        left: 0
                    } : void 0
                },
                position: function() {
                    if (this[0]) {
                        var e, t, n, r = this[0],
                            i = {
                                top: 0,
                                left: 0
                            };
                        if ("fixed" === C.css(r, "position")) t = r.getBoundingClientRect();
                        else {
                            for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position");) e = e.parentNode;
                            e && e !== r && 1 === e.nodeType && ((i = C(e).offset()).top += C.css(e, "borderTopWidth", !0), i.left += C.css(e, "borderLeftWidth", !0))
                        }
                        return {
                            top: t.top - i.top - C.css(r, "marginTop", !0),
                            left: t.left - i.left - C.css(r, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent;
                        return e || Te
                    })
                }
            }), C.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(e, t) {
                var n = "pageYOffset" === t;
                C.fn[e] = function(r) {
                    return X(this, function(e, r, i) {
                        var o;
                        if (x(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                        o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
                    }, e, r, arguments.length)
                }
            }), C.each(["top", "left"], function(e, t) {
                C.cssHooks[t] = ze(m.pixelPosition, function(e, n) {
                    if (n) return n = _e(e, t), $e.test(n) ? C(e).position()[t] + "px" : n
                })
            }), C.each({
                Height: "height",
                Width: "width"
            }, function(e, t) {
                C.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, function(n, r) {
                    C.fn[r] = function(i, o) {
                        var a = arguments.length && (n || "boolean" != typeof i),
                            s = n || (!0 === i || !0 === o ? "margin" : "border");
                        return X(this, function(t, n, i) {
                            var o;
                            return x(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? C.css(t, n, s) : C.style(t, n, i, s)
                        }, t, a ? i : void 0, a)
                    }
                })
            }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
                C.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }), C.fn.extend({
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }), C.fn.extend({
                bind: function(e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, n, r) {
                    return this.on(t, e, n, r)
                },
                undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                }
            }), C.proxy = function(e, t) {
                var n, r, i;
                if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return r = u.call(arguments, 2), (i = function() {
                    return e.apply(t || this, r.concat(u.call(arguments)))
                }).guid = e.guid = e.guid || C.guid++, i
            }, C.holdReady = function(e) {
                e ? C.readyWait++ : C.ready(!0)
            }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = A, C.isFunction = y, C.isWindow = x, C.camelCase = Y, C.type = T, C.now = Date.now, C.isNumeric = function(e) {
                var t = C.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            }, void 0 === (r = function() {
                return C
            }.apply(t, [])) || (e.exports = r);
            var Vt = n.jQuery,
                Gt = n.$;
            return C.noConflict = function(e) {
                return n.$ === C && (n.$ = Gt), e && n.jQuery === C && (n.jQuery = Vt), C
            }, i || (n.jQuery = n.$ = C), C
        })
    },
    7: function(e, t, n) {
        (function(t) {
            e.exports = t.jQuery = n(64)
        }).call(this, n(13))
    }
});