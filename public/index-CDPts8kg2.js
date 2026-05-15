var mc = e => {
    throw TypeError(e)
};
var al = (e, t, n) => t.has(e) || mc("Cannot " + n);
var P = (e, t, n) => (al(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
    Z = (e, t, n) => t.has(e) ? mc("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n),
    U = (e, t, n, r) => (al(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n),
    be = (e, t, n) => (al(e, t, "access private method"), n);
var hi = (e, t, n, r) => ({
    set _(o) {
        U(e, t, o, n)
    },
    get _() {
        return P(e, t, r)
    }
});

function Eg(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, o);
                    i && Object.defineProperty(e, o, i.get ? i : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
    new MutationObserver(o => {
        for (const i of o)
            if (i.type === "childList")
                for (const s of i.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(o) {
        const i = {};
        return o.integrity && (i.integrity = o.integrity), o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }

    function r(o) {
        if (o.ep) return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i)
    }
})();

function Ef(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Cf = {
        exports: {}
    },
    Rs = {},
    kf = {
        exports: {}
    },
    Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ri = Symbol.for("react.element"),
    Cg = Symbol.for("react.portal"),
    kg = Symbol.for("react.fragment"),
    bg = Symbol.for("react.strict_mode"),
    Pg = Symbol.for("react.profiler"),
    Tg = Symbol.for("react.provider"),
    Ng = Symbol.for("react.context"),
    Rg = Symbol.for("react.forward_ref"),
    _g = Symbol.for("react.suspense"),
    jg = Symbol.for("react.memo"),
    Og = Symbol.for("react.lazy"),
    gc = Symbol.iterator;

function Ag(e) {
    return e === null || typeof e != "object" ? null : (e = gc && e[gc] || e["@@iterator"], typeof e == "function" ? e : null)
}
var bf = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    Pf = Object.assign,
    Tf = {};

function to(e, t, n) {
    this.props = e, this.context = t, this.refs = Tf, this.updater = n || bf
}
to.prototype.isReactComponent = {};
to.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
to.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Nf() {}
Nf.prototype = to.prototype;

function Za(e, t, n) {
    this.props = e, this.context = t, this.refs = Tf, this.updater = n || bf
}
var Ja = Za.prototype = new Nf;
Ja.constructor = Za;
Pf(Ja, to.prototype);
Ja.isPureReactComponent = !0;
var vc = Array.isArray,
    Rf = Object.prototype.hasOwnProperty,
    eu = {
        current: null
    },
    _f = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function jf(e, t, n) {
    var r, o = {},
        i = null,
        s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) Rf.call(t, r) && !_f.hasOwnProperty(r) && (o[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1) o.children = n;
    else if (1 < l) {
        for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
        o.children = a
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps, l) o[r] === void 0 && (o[r] = l[r]);
    return {
        $$typeof: ri,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: eu.current
    }
}

function Lg(e, t) {
    return {
        $$typeof: ri,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function tu(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ri
}

function Mg(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var yc = /\/+/g;

function ul(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Mg("" + e.key) : t.toString(36)
}

function Di(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0;
    else switch (i) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case ri:
                case Cg:
                    s = !0
            }
    }
    if (s) return s = e, o = o(s), e = r === "" ? "." + ul(s, 0) : r, vc(o) ? (n = "", e != null && (n = e.replace(yc, "$&/") + "/"), Di(o, t, n, "", function(u) {
        return u
    })) : o != null && (tu(o) && (o = Lg(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(yc, "$&/") + "/") + e)), t.push(o)), 1;
    if (s = 0, r = r === "" ? "." : r + ":", vc(e))
        for (var l = 0; l < e.length; l++) {
            i = e[l];
            var a = r + ul(i, l);
            s += Di(i, t, n, a, o)
        } else if (a = Ag(e), typeof a == "function")
            for (e = a.call(e), l = 0; !(i = e.next()).done;) i = i.value, a = r + ul(i, l++), s += Di(i, t, n, a, o);
        else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}

function mi(e, t, n) {
    if (e == null) return e;
    var r = [],
        o = 0;
    return Di(e, r, "", "", function(i) {
        return t.call(n, i, o++)
    }), r
}

function Ig(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var Me = {
        current: null
    },
    zi = {
        transition: null
    },
    Dg = {
        ReactCurrentDispatcher: Me,
        ReactCurrentBatchConfig: zi,
        ReactCurrentOwner: eu
    };

function Of() {
    throw Error("act(...) is not supported in production builds of React.")
}
Y.Children = {
    map: mi,
    forEach: function(e, t, n) {
        mi(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return mi(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return mi(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!tu(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
Y.Component = to;
Y.Fragment = kg;
Y.Profiler = Pg;
Y.PureComponent = Za;
Y.StrictMode = bg;
Y.Suspense = _g;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dg;
Y.act = Of;
Y.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Pf({}, e.props),
        o = e.key,
        i = e.ref,
        s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref, s = eu.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
        for (a in t) Rf.call(t, a) && !_f.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1) r.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
        r.children = l
    }
    return {
        $$typeof: ri,
        type: e.type,
        key: o,
        ref: i,
        props: r,
        _owner: s
    }
};
Y.createContext = function(e) {
    return e = {
        $$typeof: Ng,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: Tg,
        _context: e
    }, e.Consumer = e
};
Y.createElement = jf;
Y.createFactory = function(e) {
    var t = jf.bind(null, e);
    return t.type = e, t
};
Y.createRef = function() {
    return {
        current: null
    }
};
Y.forwardRef = function(e) {
    return {
        $$typeof: Rg,
        render: e
    }
};
Y.isValidElement = tu;
Y.lazy = function(e) {
    return {
        $$typeof: Og,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Ig
    }
};
Y.memo = function(e, t) {
    return {
        $$typeof: jg,
        type: e,
        compare: t === void 0 ? null : t
    }
};
Y.startTransition = function(e) {
    var t = zi.transition;
    zi.transition = {};
    try {
        e()
    } finally {
        zi.transition = t
    }
};
Y.unstable_act = Of;
Y.useCallback = function(e, t) {
    return Me.current.useCallback(e, t)
};
Y.useContext = function(e) {
    return Me.current.useContext(e)
};
Y.useDebugValue = function() {};
Y.useDeferredValue = function(e) {
    return Me.current.useDeferredValue(e)
};
Y.useEffect = function(e, t) {
    return Me.current.useEffect(e, t)
};
Y.useId = function() {
    return Me.current.useId()
};
Y.useImperativeHandle = function(e, t, n) {
    return Me.current.useImperativeHandle(e, t, n)
};
Y.useInsertionEffect = function(e, t) {
    return Me.current.useInsertionEffect(e, t)
};
Y.useLayoutEffect = function(e, t) {
    return Me.current.useLayoutEffect(e, t)
};
Y.useMemo = function(e, t) {
    return Me.current.useMemo(e, t)
};
Y.useReducer = function(e, t, n) {
    return Me.current.useReducer(e, t, n)
};
Y.useRef = function(e) {
    return Me.current.useRef(e)
};
Y.useState = function(e) {
    return Me.current.useState(e)
};
Y.useSyncExternalStore = function(e, t, n) {
    return Me.current.useSyncExternalStore(e, t, n)
};
Y.useTransition = function() {
    return Me.current.useTransition()
};
Y.version = "18.3.1";
kf.exports = Y;
var w = kf.exports;
const j = Ef(w),
    Af = Eg({
        __proto__: null,
        default: j
    }, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zg = w,
    Fg = Symbol.for("react.element"),
    $g = Symbol.for("react.fragment"),
    Bg = Object.prototype.hasOwnProperty,
    Ug = zg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Vg = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Lf(e, t, n) {
    var r, o = {},
        i = null,
        s = null;
    n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (r in t) Bg.call(t, r) && !Vg.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: Fg,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: Ug.current
    }
}
Rs.Fragment = $g;
Rs.jsx = Lf;
Rs.jsxs = Lf;
Cf.exports = Rs;
var S = Cf.exports,
    Mf = {
        exports: {}
    },
    qe = {},
    If = {
        exports: {}
    },
    Df = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(T, N) {
        var M = T.length;
        T.push(N);
        e: for (; 0 < M;) {
            var V = M - 1 >>> 1,
                z = T[V];
            if (0 < o(z, N)) T[V] = N, T[M] = z, M = V;
            else break e
        }
    }

    function n(T) {
        return T.length === 0 ? null : T[0]
    }

    function r(T) {
        if (T.length === 0) return null;
        var N = T[0],
            M = T.pop();
        if (M !== N) {
            T[0] = M;
            e: for (var V = 0, z = T.length, K = z >>> 1; V < K;) {
                var G = 2 * (V + 1) - 1,
                    he = T[G],
                    ke = G + 1,
                    J = T[ke];
                if (0 > o(he, M)) ke < z && 0 > o(J, he) ? (T[V] = J, T[ke] = M, V = ke) : (T[V] = he, T[G] = M, V = G);
                else if (ke < z && 0 > o(J, M)) T[V] = J, T[ke] = M, V = ke;
                else break e
            }
        }
        return N
    }

    function o(T, N) {
        var M = T.sortIndex - N.sortIndex;
        return M !== 0 ? M : T.id - N.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var s = Date,
            l = s.now();
        e.unstable_now = function() {
            return s.now() - l
        }
    }
    var a = [],
        u = [],
        c = 1,
        p = null,
        m = 3,
        d = !1,
        x = !1,
        v = !1,
        y = typeof setTimeout == "function" ? setTimeout : null,
        h = typeof clearTimeout == "function" ? clearTimeout : null,
        f = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function g(T) {
        for (var N = n(u); N !== null;) {
            if (N.callback === null) r(u);
            else if (N.startTime <= T) r(u), N.sortIndex = N.expirationTime, t(a, N);
            else break;
            N = n(u)
        }
    }

    function E(T) {
        if (v = !1, g(T), !x)
            if (n(a) !== null) x = !0, $(C);
            else {
                var N = n(u);
                N !== null && W(E, N.startTime - T)
            }
    }

    function C(T, N) {
        x = !1, v && (v = !1, h(R), R = -1), d = !0;
        var M = m;
        try {
            for (g(N), p = n(a); p !== null && (!(p.expirationTime > N) || T && !F());) {
                var V = p.callback;
                if (typeof V == "function") {
                    p.callback = null, m = p.priorityLevel;
                    var z = V(p.expirationTime <= N);
                    N = e.unstable_now(), typeof z == "function" ? p.callback = z : p === n(a) && r(a), g(N)
                } else r(a);
                p = n(a)
            }
            if (p !== null) var K = !0;
            else {
                var G = n(u);
                G !== null && W(E, G.startTime - N), K = !1
            }
            return K
        } finally {
            p = null, m = M, d = !1
        }
    }
    var k = !1,
        b = null,
        R = -1,
        A = 5,
        O = -1;

    function F() {
        return !(e.unstable_now() - O < A)
    }

    function D() {
        if (b !== null) {
            var T = e.unstable_now();
            O = T;
            var N = !0;
            try {
                N = b(!0, T)
            } finally {
                N ? Q() : (k = !1, b = null)
            }
        } else k = !1
    }
    var Q;
    if (typeof f == "function") Q = function() {
        f(D)
    };
    else if (typeof MessageChannel < "u") {
        var L = new MessageChannel,
            X = L.port2;
        L.port1.onmessage = D, Q = function() {
            X.postMessage(null)
        }
    } else Q = function() {
        y(D, 0)
    };

    function $(T) {
        b = T, k || (k = !0, Q())
    }

    function W(T, N) {
        R = y(function() {
            T(e.unstable_now())
        }, N)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
        T.callback = null
    }, e.unstable_continueExecution = function() {
        x || d || (x = !0, $(C))
    }, e.unstable_forceFrameRate = function(T) {
        0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < T ? Math.floor(1e3 / T) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return m
    }, e.unstable_getFirstCallbackNode = function() {
        return n(a)
    }, e.unstable_next = function(T) {
        switch (m) {
            case 1:
            case 2:
            case 3:
                var N = 3;
                break;
            default:
                N = m
        }
        var M = m;
        m = N;
        try {
            return T()
        } finally {
            m = M
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(T, N) {
        switch (T) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                T = 3
        }
        var M = m;
        m = T;
        try {
            return N()
        } finally {
            m = M
        }
    }, e.unstable_scheduleCallback = function(T, N, M) {
        var V = e.unstable_now();
        switch (typeof M == "object" && M !== null ? (M = M.delay, M = typeof M == "number" && 0 < M ? V + M : V) : M = V, T) {
            case 1:
                var z = -1;
                break;
            case 2:
                z = 250;
                break;
            case 5:
                z = 1073741823;
                break;
            case 4:
                z = 1e4;
                break;
            default:
                z = 5e3
        }
        return z = M + z, T = {
            id: c++,
            callback: N,
            priorityLevel: T,
            startTime: M,
            expirationTime: z,
            sortIndex: -1
        }, M > V ? (T.sortIndex = M, t(u, T), n(a) === null && T === n(u) && (v ? (h(R), R = -1) : v = !0, W(E, M - V))) : (T.sortIndex = z, t(a, T), x || d || (x = !0, $(C))), T
    }, e.unstable_shouldYield = F, e.unstable_wrapCallback = function(T) {
        var N = m;
        return function() {
            var M = m;
            m = N;
            try {
                return T.apply(this, arguments)
            } finally {
                m = M
            }
        }
    }
})(Df);
If.exports = Df;
var Wg = If.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hg = w,
    Xe = Wg;

function _(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var zf = new Set,
    Lo = {};

function sr(e, t) {
    Qr(e, t), Qr(e + "Capture", t)
}

function Qr(e, t) {
    for (Lo[e] = t, e = 0; e < t.length; e++) zf.add(t[e])
}
var Vt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Ul = Object.prototype.hasOwnProperty,
    Qg = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    wc = {},
    xc = {};

function Kg(e) {
    return Ul.call(xc, e) ? !0 : Ul.call(wc, e) ? !1 : Qg.test(e) ? xc[e] = !0 : (wc[e] = !0, !1)
}

function Yg(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function Gg(e, t, n, r) {
    if (t === null || typeof t > "u" || Yg(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function Ie(e, t, n, r, o, i, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s
}
var Ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Ce[e] = new Ie(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    Ce[t] = new Ie(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Ce[e] = new Ie(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Ce[e] = new Ie(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Ce[e] = new Ie(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Ce[e] = new Ie(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    Ce[e] = new Ie(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Ce[e] = new Ie(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    Ce[e] = new Ie(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var nu = /[\-:]([a-z])/g;

function ru(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(nu, ru);
    Ce[t] = new Ie(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(nu, ru);
    Ce[t] = new Ie(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(nu, ru);
    Ce[t] = new Ie(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Ce[e] = new Ie(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
Ce.xlinkHref = new Ie("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Ce[e] = new Ie(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function ou(e, t, n, r) {
    var o = Ce.hasOwnProperty(t) ? Ce[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Gg(t, n, o, r) && (n = null), r || o === null ? Kg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Gt = Hg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    gi = Symbol.for("react.element"),
    vr = Symbol.for("react.portal"),
    yr = Symbol.for("react.fragment"),
    iu = Symbol.for("react.strict_mode"),
    Vl = Symbol.for("react.profiler"),
    Ff = Symbol.for("react.provider"),
    $f = Symbol.for("react.context"),
    su = Symbol.for("react.forward_ref"),
    Wl = Symbol.for("react.suspense"),
    Hl = Symbol.for("react.suspense_list"),
    lu = Symbol.for("react.memo"),
    ln = Symbol.for("react.lazy"),
    Bf = Symbol.for("react.offscreen"),
    Sc = Symbol.iterator;

function uo(e) {
    return e === null || typeof e != "object" ? null : (e = Sc && e[Sc] || e["@@iterator"], typeof e == "function" ? e : null)
}
var ce = Object.assign,
    cl;

function xo(e) {
    if (cl === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        cl = t && t[1] || ""
    }
    return `
` + cl + e
}
var dl = !1;

function fl(e, t) {
    if (!e || dl) return "";
    dl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, l = i.length - 1; 1 <= s && 0 <= l && o[s] !== i[l];) l--;
            for (; 1 <= s && 0 <= l; s--, l--)
                if (o[s] !== i[l]) {
                    if (s !== 1 || l !== 1)
                        do
                            if (s--, l--, 0 > l || o[s] !== i[l]) {
                                var a = `
` + o[s].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a
                            }
                    while (1 <= s && 0 <= l);
                    break
                }
        }
    } finally {
        dl = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? xo(e) : ""
}

function Xg(e) {
    switch (e.tag) {
        case 5:
            return xo(e.type);
        case 16:
            return xo("Lazy");
        case 13:
            return xo("Suspense");
        case 19:
            return xo("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = fl(e.type, !1), e;
        case 11:
            return e = fl(e.type.render, !1), e;
        case 1:
            return e = fl(e.type, !0), e;
        default:
            return ""
    }
}

function Ql(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case yr:
            return "Fragment";
        case vr:
            return "Portal";
        case Vl:
            return "Profiler";
        case iu:
            return "StrictMode";
        case Wl:
            return "Suspense";
        case Hl:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case $f:
            return (e.displayName || "Context") + ".Consumer";
        case Ff:
            return (e._context.displayName || "Context") + ".Provider";
        case su:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case lu:
            return t = e.displayName || null, t !== null ? t : Ql(e.type) || "Memo";
        case ln:
            t = e._payload, e = e._init;
            try {
                return Ql(e(t))
            } catch {}
    }
    return null
}

function qg(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Ql(t);
        case 8:
            return t === iu ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function Tn(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function Uf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function Zg(e) {
    var t = Uf(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get,
            i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(s) {
                r = "" + s, i.call(this, s)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function vi(e) {
    e._valueTracker || (e._valueTracker = Zg(e))
}

function Vf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = Uf(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Zi(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function Kl(e, t) {
    var n = t.checked;
    return ce({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}

function Ec(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = Tn(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function Wf(e, t) {
    t = t.checked, t != null && ou(e, "checked", t, !1)
}

function Yl(e, t) {
    Wf(e, t);
    var n = Tn(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Gl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Gl(e, t.type, Tn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Cc(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function Gl(e, t, n) {
    (t !== "number" || Zi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var So = Array.isArray;

function Rr(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Tn(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0, r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}

function Xl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
    return ce({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function kc(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(_(92));
            if (So(n)) {
                if (1 < n.length) throw Error(_(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: Tn(n)
    }
}

function Hf(e, t) {
    var n = Tn(t.value),
        r = Tn(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function bc(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function Qf(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function ql(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Qf(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var yi, Kf = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (yi = yi || document.createElement("div"), yi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = yi.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function Mo(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var ko = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    Jg = ["Webkit", "ms", "Moz", "O"];
Object.keys(ko).forEach(function(e) {
    Jg.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), ko[t] = ko[e]
    })
});

function Yf(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ko.hasOwnProperty(e) && ko[e] ? ("" + t).trim() : t + "px"
}

function Gf(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                o = Yf(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
        }
}
var ev = ce({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function Zl(e, t) {
    if (t) {
        if (ev[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(_(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(_(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(_(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(_(62))
    }
}

function Jl(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var ea = null;

function au(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var ta = null,
    _r = null,
    jr = null;

function Pc(e) {
    if (e = si(e)) {
        if (typeof ta != "function") throw Error(_(280));
        var t = e.stateNode;
        t && (t = Ls(t), ta(e.stateNode, e.type, t))
    }
}

function Xf(e) {
    _r ? jr ? jr.push(e) : jr = [e] : _r = e
}

function qf() {
    if (_r) {
        var e = _r,
            t = jr;
        if (jr = _r = null, Pc(e), t)
            for (e = 0; e < t.length; e++) Pc(t[e])
    }
}

function Zf(e, t) {
    return e(t)
}

function Jf() {}
var pl = !1;

function ep(e, t, n) {
    if (pl) return e(t, n);
    pl = !0;
    try {
        return Zf(e, t, n)
    } finally {
        pl = !1, (_r !== null || jr !== null) && (Jf(), qf())
    }
}

function Io(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Ls(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(_(231, t, typeof n));
    return n
}
var na = !1;
if (Vt) try {
    var co = {};
    Object.defineProperty(co, "passive", {
        get: function() {
            na = !0
        }
    }), window.addEventListener("test", co, co), window.removeEventListener("test", co, co)
} catch {
    na = !1
}

function tv(e, t, n, r, o, i, s, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var bo = !1,
    Ji = null,
    es = !1,
    ra = null,
    nv = {
        onError: function(e) {
            bo = !0, Ji = e
        }
    };

function rv(e, t, n, r, o, i, s, l, a) {
    bo = !1, Ji = null, tv.apply(nv, arguments)
}

function ov(e, t, n, r, o, i, s, l, a) {
    if (rv.apply(this, arguments), bo) {
        if (bo) {
            var u = Ji;
            bo = !1, Ji = null
        } else throw Error(_(198));
        es || (es = !0, ra = u)
    }
}

function lr(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function tp(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function Tc(e) {
    if (lr(e) !== e) throw Error(_(188))
}

function iv(e) {
    var t = e.alternate;
    if (!t) {
        if (t = lr(e), t === null) throw Error(_(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var o = n.return;
        if (o === null) break;
        var i = o.alternate;
        if (i === null) {
            if (r = o.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === i.child) {
            for (i = o.child; i;) {
                if (i === n) return Tc(o), e;
                if (i === r) return Tc(o), t;
                i = i.sibling
            }
            throw Error(_(188))
        }
        if (n.return !== r.return) n = o, r = i;
        else {
            for (var s = !1, l = o.child; l;) {
                if (l === n) {
                    s = !0, n = o, r = i;
                    break
                }
                if (l === r) {
                    s = !0, r = o, n = i;
                    break
                }
                l = l.sibling
            }
            if (!s) {
                for (l = i.child; l;) {
                    if (l === n) {
                        s = !0, n = i, r = o;
                        break
                    }
                    if (l === r) {
                        s = !0, r = i, n = o;
                        break
                    }
                    l = l.sibling
                }
                if (!s) throw Error(_(189))
            }
        }
        if (n.alternate !== r) throw Error(_(190))
    }
    if (n.tag !== 3) throw Error(_(188));
    return n.stateNode.current === n ? e : t
}

function np(e) {
    return e = iv(e), e !== null ? rp(e) : null
}

function rp(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = rp(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var op = Xe.unstable_scheduleCallback,
    Nc = Xe.unstable_cancelCallback,
    sv = Xe.unstable_shouldYield,
    lv = Xe.unstable_requestPaint,
    pe = Xe.unstable_now,
    av = Xe.unstable_getCurrentPriorityLevel,
    uu = Xe.unstable_ImmediatePriority,
    ip = Xe.unstable_UserBlockingPriority,
    ts = Xe.unstable_NormalPriority,
    uv = Xe.unstable_LowPriority,
    sp = Xe.unstable_IdlePriority,
    _s = null,
    jt = null;

function cv(e) {
    if (jt && typeof jt.onCommitFiberRoot == "function") try {
        jt.onCommitFiberRoot(_s, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var wt = Math.clz32 ? Math.clz32 : pv,
    dv = Math.log,
    fv = Math.LN2;

function pv(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (dv(e) / fv | 0) | 0
}
var wi = 64,
    xi = 4194304;

function Eo(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function ns(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        o = e.suspendedLanes,
        i = e.pingedLanes,
        s = n & 268435455;
    if (s !== 0) {
        var l = s & ~o;
        l !== 0 ? r = Eo(l) : (i &= s, i !== 0 && (r = Eo(i)))
    } else s = n & ~o, s !== 0 ? r = Eo(s) : i !== 0 && (r = Eo(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - wt(t), o = 1 << n, r |= e[n], t &= ~o;
    return r
}

function hv(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function mv(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
        var s = 31 - wt(i),
            l = 1 << s,
            a = o[s];
        a === -1 ? (!(l & n) || l & r) && (o[s] = hv(l, t)) : a <= t && (e.expiredLanes |= l), i &= ~l
    }
}

function oa(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function lp() {
    var e = wi;
    return wi <<= 1, !(wi & 4194240) && (wi = 64), e
}

function hl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function oi(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - wt(t), e[t] = n
}

function gv(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var o = 31 - wt(n),
            i = 1 << o;
        t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i
    }
}

function cu(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - wt(n),
            o = 1 << r;
        o & t | e[r] & t && (e[r] |= t), n &= ~o
    }
}
var ee = 0;

function ap(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var up, du, cp, dp, fp, ia = !1,
    Si = [],
    wn = null,
    xn = null,
    Sn = null,
    Do = new Map,
    zo = new Map,
    un = [],
    vv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Rc(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            wn = null;
            break;
        case "dragenter":
        case "dragleave":
            xn = null;
            break;
        case "mouseover":
        case "mouseout":
            Sn = null;
            break;
        case "pointerover":
        case "pointerout":
            Do.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            zo.delete(t.pointerId)
    }
}

function fo(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o]
    }, t !== null && (t = si(t), t !== null && du(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e)
}

function yv(e, t, n, r, o) {
    switch (t) {
        case "focusin":
            return wn = fo(wn, e, t, n, r, o), !0;
        case "dragenter":
            return xn = fo(xn, e, t, n, r, o), !0;
        case "mouseover":
            return Sn = fo(Sn, e, t, n, r, o), !0;
        case "pointerover":
            var i = o.pointerId;
            return Do.set(i, fo(Do.get(i) || null, e, t, n, r, o)), !0;
        case "gotpointercapture":
            return i = o.pointerId, zo.set(i, fo(zo.get(i) || null, e, t, n, r, o)), !0
    }
    return !1
}

function pp(e) {
    var t = Vn(e.target);
    if (t !== null) {
        var n = lr(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = tp(n), t !== null) {
                    e.blockedOn = t, fp(e.priority, function() {
                        cp(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function Fi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = sa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            ea = r, n.target.dispatchEvent(r), ea = null
        } else return t = si(n), t !== null && du(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function _c(e, t, n) {
    Fi(e) && n.delete(t)
}

function wv() {
    ia = !1, wn !== null && Fi(wn) && (wn = null), xn !== null && Fi(xn) && (xn = null), Sn !== null && Fi(Sn) && (Sn = null), Do.forEach(_c), zo.forEach(_c)
}

function po(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ia || (ia = !0, Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority, wv)))
}

function Fo(e) {
    function t(o) {
        return po(o, e)
    }
    if (0 < Si.length) {
        po(Si[0], e);
        for (var n = 1; n < Si.length; n++) {
            var r = Si[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (wn !== null && po(wn, e), xn !== null && po(xn, e), Sn !== null && po(Sn, e), Do.forEach(t), zo.forEach(t), n = 0; n < un.length; n++) r = un[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < un.length && (n = un[0], n.blockedOn === null);) pp(n), n.blockedOn === null && un.shift()
}
var Or = Gt.ReactCurrentBatchConfig,
    rs = !0;

function xv(e, t, n, r) {
    var o = ee,
        i = Or.transition;
    Or.transition = null;
    try {
        ee = 1, fu(e, t, n, r)
    } finally {
        ee = o, Or.transition = i
    }
}

function Sv(e, t, n, r) {
    var o = ee,
        i = Or.transition;
    Or.transition = null;
    try {
        ee = 4, fu(e, t, n, r)
    } finally {
        ee = o, Or.transition = i
    }
}

function fu(e, t, n, r) {
    if (rs) {
        var o = sa(e, t, n, r);
        if (o === null) kl(e, t, r, os, n), Rc(e, r);
        else if (yv(o, e, t, n, r)) r.stopPropagation();
        else if (Rc(e, r), t & 4 && -1 < vv.indexOf(e)) {
            for (; o !== null;) {
                var i = si(o);
                if (i !== null && up(i), i = sa(e, t, n, r), i === null && kl(e, t, r, os, n), i === o) break;
                o = i
            }
            o !== null && r.stopPropagation()
        } else kl(e, t, r, null, n)
    }
}
var os = null;

function sa(e, t, n, r) {
    if (os = null, e = au(r), e = Vn(e), e !== null)
        if (t = lr(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = tp(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return os = e, null
}

function hp(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (av()) {
                case uu:
                    return 1;
                case ip:
                    return 4;
                case ts:
                case uv:
                    return 16;
                case sp:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var gn = null,
    pu = null,
    $i = null;

function mp() {
    if ($i) return $i;
    var e, t = pu,
        n = t.length,
        r, o = "value" in gn ? gn.value : gn.textContent,
        i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
    return $i = o.slice(e, 1 < r ? 1 - r : void 0)
}

function Bi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function Ei() {
    return !0
}

function jc() {
    return !1
}

function Ze(e) {
    function t(n, r, o, i, s) {
        this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
        for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(i) : i[l]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Ei : jc, this.isPropagationStopped = jc, this
    }
    return ce(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ei)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ei)
        },
        persist: function() {},
        isPersistent: Ei
    }), t
}
var no = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    hu = Ze(no),
    ii = ce({}, no, {
        view: 0,
        detail: 0
    }),
    Ev = Ze(ii),
    ml, gl, ho, js = ce({}, ii, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: mu,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== ho && (ho && e.type === "mousemove" ? (ml = e.screenX - ho.screenX, gl = e.screenY - ho.screenY) : gl = ml = 0, ho = e), ml)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : gl
        }
    }),
    Oc = Ze(js),
    Cv = ce({}, js, {
        dataTransfer: 0
    }),
    kv = Ze(Cv),
    bv = ce({}, ii, {
        relatedTarget: 0
    }),
    vl = Ze(bv),
    Pv = ce({}, no, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Tv = Ze(Pv),
    Nv = ce({}, no, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    Rv = Ze(Nv),
    _v = ce({}, no, {
        data: 0
    }),
    Ac = Ze(_v),
    jv = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    Ov = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    Av = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function Lv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Av[e]) ? !!t[e] : !1
}

function mu() {
    return Lv
}
var Mv = ce({}, ii, {
        key: function(e) {
            if (e.key) {
                var t = jv[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = Bi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ov[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: mu,
        charCode: function(e) {
            return e.type === "keypress" ? Bi(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Bi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    Iv = Ze(Mv),
    Dv = ce({}, js, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    Lc = Ze(Dv),
    zv = ce({}, ii, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: mu
    }),
    Fv = Ze(zv),
    $v = ce({}, no, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Bv = Ze($v),
    Uv = ce({}, js, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    Vv = Ze(Uv),
    Wv = [9, 13, 27, 32],
    gu = Vt && "CompositionEvent" in window,
    Po = null;
Vt && "documentMode" in document && (Po = document.documentMode);
var Hv = Vt && "TextEvent" in window && !Po,
    gp = Vt && (!gu || Po && 8 < Po && 11 >= Po),
    Mc = " ",
    Ic = !1;

function vp(e, t) {
    switch (e) {
        case "keyup":
            return Wv.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function yp(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var wr = !1;

function Qv(e, t) {
    switch (e) {
        case "compositionend":
            return yp(t);
        case "keypress":
            return t.which !== 32 ? null : (Ic = !0, Mc);
        case "textInput":
            return e = t.data, e === Mc && Ic ? null : e;
        default:
            return null
    }
}

function Kv(e, t) {
    if (wr) return e === "compositionend" || !gu && vp(e, t) ? (e = mp(), $i = pu = gn = null, wr = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return gp && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var Yv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function Dc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Yv[e.type] : t === "textarea"
}

function wp(e, t, n, r) {
    Xf(r), t = is(t, "onChange"), 0 < t.length && (n = new hu("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var To = null,
    $o = null;

function Gv(e) {
    _p(e, 0)
}

function Os(e) {
    var t = Er(e);
    if (Vf(t)) return e
}

function Xv(e, t) {
    if (e === "change") return t
}
var xp = !1;
if (Vt) {
    var yl;
    if (Vt) {
        var wl = "oninput" in document;
        if (!wl) {
            var zc = document.createElement("div");
            zc.setAttribute("oninput", "return;"), wl = typeof zc.oninput == "function"
        }
        yl = wl
    } else yl = !1;
    xp = yl && (!document.documentMode || 9 < document.documentMode)
}

function Fc() {
    To && (To.detachEvent("onpropertychange", Sp), $o = To = null)
}

function Sp(e) {
    if (e.propertyName === "value" && Os($o)) {
        var t = [];
        wp(t, $o, e, au(e)), ep(Gv, t)
    }
}

function qv(e, t, n) {
    e === "focusin" ? (Fc(), To = t, $o = n, To.attachEvent("onpropertychange", Sp)) : e === "focusout" && Fc()
}

function Zv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Os($o)
}

function Jv(e, t) {
    if (e === "click") return Os(t)
}

function ey(e, t) {
    if (e === "input" || e === "change") return Os(t)
}

function ty(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var St = typeof Object.is == "function" ? Object.is : ty;

function Bo(e, t) {
    if (St(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Ul.call(t, o) || !St(e[o], t[o])) return !1
    }
    return !0
}

function $c(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function Bc(e, t) {
    var n = $c(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = $c(n)
    }
}

function Ep(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ep(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function Cp() {
    for (var e = window, t = Zi(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = Zi(e.document)
    }
    return t
}

function vu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function ny(e) {
    var t = Cp(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Ep(n.ownerDocument.documentElement, n)) {
        if (r !== null && vu(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length,
                    i = Math.min(r.start, o);
                r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Bc(n, i);
                var s = Bc(n, r);
                o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var ry = Vt && "documentMode" in document && 11 >= document.documentMode,
    xr = null,
    la = null,
    No = null,
    aa = !1;

function Uc(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    aa || xr == null || xr !== Zi(r) || (r = xr, "selectionStart" in r && vu(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), No && Bo(No, r) || (No = r, r = is(la, "onSelect"), 0 < r.length && (t = new hu("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = xr)))
}

function Ci(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var Sr = {
        animationend: Ci("Animation", "AnimationEnd"),
        animationiteration: Ci("Animation", "AnimationIteration"),
        animationstart: Ci("Animation", "AnimationStart"),
        transitionend: Ci("Transition", "TransitionEnd")
    },
    xl = {},
    kp = {};
Vt && (kp = document.createElement("div").style, "AnimationEvent" in window || (delete Sr.animationend.animation, delete Sr.animationiteration.animation, delete Sr.animationstart.animation), "TransitionEvent" in window || delete Sr.transitionend.transition);

function As(e) {
    if (xl[e]) return xl[e];
    if (!Sr[e]) return e;
    var t = Sr[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in kp) return xl[e] = t[n];
    return e
}
var bp = As("animationend"),
    Pp = As("animationiteration"),
    Tp = As("animationstart"),
    Np = As("transitionend"),
    Rp = new Map,
    Vc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Mn(e, t) {
    Rp.set(e, t), sr(t, [e])
}
for (var Sl = 0; Sl < Vc.length; Sl++) {
    var El = Vc[Sl],
        oy = El.toLowerCase(),
        iy = El[0].toUpperCase() + El.slice(1);
    Mn(oy, "on" + iy)
}
Mn(bp, "onAnimationEnd");
Mn(Pp, "onAnimationIteration");
Mn(Tp, "onAnimationStart");
Mn("dblclick", "onDoubleClick");
Mn("focusin", "onFocus");
Mn("focusout", "onBlur");
Mn(Np, "onTransitionEnd");
Qr("onMouseEnter", ["mouseout", "mouseover"]);
Qr("onMouseLeave", ["mouseout", "mouseover"]);
Qr("onPointerEnter", ["pointerout", "pointerover"]);
Qr("onPointerLeave", ["pointerout", "pointerover"]);
sr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
sr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
sr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
sr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
sr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
sr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Co = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    sy = new Set("cancel close invalid load scroll toggle".split(" ").concat(Co));

function Wc(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, ov(r, t, void 0, e), e.currentTarget = null
}

function _p(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var l = r[s],
                        a = l.instance,
                        u = l.currentTarget;
                    if (l = l.listener, a !== i && o.isPropagationStopped()) break e;
                    Wc(o, l, u), i = a
                } else
                    for (s = 0; s < r.length; s++) {
                        if (l = r[s], a = l.instance, u = l.currentTarget, l = l.listener, a !== i && o.isPropagationStopped()) break e;
                        Wc(o, l, u), i = a
                    }
        }
    }
    if (es) throw e = ra, es = !1, ra = null, e
}

function oe(e, t) {
    var n = t[pa];
    n === void 0 && (n = t[pa] = new Set);
    var r = e + "__bubble";
    n.has(r) || (jp(t, e, 2, !1), n.add(r))
}

function Cl(e, t, n) {
    var r = 0;
    t && (r |= 4), jp(n, e, r, t)
}
var ki = "_reactListening" + Math.random().toString(36).slice(2);

function Uo(e) {
    if (!e[ki]) {
        e[ki] = !0, zf.forEach(function(n) {
            n !== "selectionchange" && (sy.has(n) || Cl(n, !1, e), Cl(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[ki] || (t[ki] = !0, Cl("selectionchange", !1, t))
    }
}

function jp(e, t, n, r) {
    switch (hp(t)) {
        case 1:
            var o = xv;
            break;
        case 4:
            o = Sv;
            break;
        default:
            o = fu
    }
    n = o.bind(null, t, n, e), o = void 0, !na || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}

function kl(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var s = r.tag;
        if (s === 3 || s === 4) {
            var l = r.stateNode.containerInfo;
            if (l === o || l.nodeType === 8 && l.parentNode === o) break;
            if (s === 4)
                for (s = r.return; s !== null;) {
                    var a = s.tag;
                    if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo, a === o || a.nodeType === 8 && a.parentNode === o)) return;
                    s = s.return
                }
            for (; l !== null;) {
                if (s = Vn(l), s === null) return;
                if (a = s.tag, a === 5 || a === 6) {
                    r = i = s;
                    continue e
                }
                l = l.parentNode
            }
        }
        r = r.return
    }
    ep(function() {
        var u = i,
            c = au(n),
            p = [];
        e: {
            var m = Rp.get(e);
            if (m !== void 0) {
                var d = hu,
                    x = e;
                switch (e) {
                    case "keypress":
                        if (Bi(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        d = Iv;
                        break;
                    case "focusin":
                        x = "focus", d = vl;
                        break;
                    case "focusout":
                        x = "blur", d = vl;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        d = vl;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        d = Oc;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        d = kv;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        d = Fv;
                        break;
                    case bp:
                    case Pp:
                    case Tp:
                        d = Tv;
                        break;
                    case Np:
                        d = Bv;
                        break;
                    case "scroll":
                        d = Ev;
                        break;
                    case "wheel":
                        d = Vv;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        d = Rv;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        d = Lc
                }
                var v = (t & 4) !== 0,
                    y = !v && e === "scroll",
                    h = v ? m !== null ? m + "Capture" : null : m;
                v = [];
                for (var f = u, g; f !== null;) {
                    g = f;
                    var E = g.stateNode;
                    if (g.tag === 5 && E !== null && (g = E, h !== null && (E = Io(f, h), E != null && v.push(Vo(f, E, g)))), y) break;
                    f = f.return
                }
                0 < v.length && (m = new d(m, x, null, n, c), p.push({
                    event: m,
                    listeners: v
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (m = e === "mouseover" || e === "pointerover", d = e === "mouseout" || e === "pointerout", m && n !== ea && (x = n.relatedTarget || n.fromElement) && (Vn(x) || x[Wt])) break e;
                if ((d || m) && (m = c.window === c ? c : (m = c.ownerDocument) ? m.defaultView || m.parentWindow : window, d ? (x = n.relatedTarget || n.toElement, d = u, x = x ? Vn(x) : null, x !== null && (y = lr(x), x !== y || x.tag !== 5 && x.tag !== 6) && (x = null)) : (d = null, x = u), d !== x)) {
                    if (v = Oc, E = "onMouseLeave", h = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (v = Lc, E = "onPointerLeave", h = "onPointerEnter", f = "pointer"), y = d == null ? m : Er(d), g = x == null ? m : Er(x), m = new v(E, f + "leave", d, n, c), m.target = y, m.relatedTarget = g, E = null, Vn(c) === u && (v = new v(h, f + "enter", x, n, c), v.target = g, v.relatedTarget = y, E = v), y = E, d && x) t: {
                        for (v = d, h = x, f = 0, g = v; g; g = mr(g)) f++;
                        for (g = 0, E = h; E; E = mr(E)) g++;
                        for (; 0 < f - g;) v = mr(v),
                        f--;
                        for (; 0 < g - f;) h = mr(h),
                        g--;
                        for (; f--;) {
                            if (v === h || h !== null && v === h.alternate) break t;
                            v = mr(v), h = mr(h)
                        }
                        v = null
                    }
                    else v = null;
                    d !== null && Hc(p, m, d, v, !1), x !== null && y !== null && Hc(p, y, x, v, !0)
                }
            }
            e: {
                if (m = u ? Er(u) : window, d = m.nodeName && m.nodeName.toLowerCase(), d === "select" || d === "input" && m.type === "file") var C = Xv;
                else if (Dc(m))
                    if (xp) C = ey;
                    else {
                        C = Zv;
                        var k = qv
                    }
                else(d = m.nodeName) && d.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (C = Jv);
                if (C && (C = C(e, u))) {
                    wp(p, C, n, c);
                    break e
                }
                k && k(e, m, u),
                e === "focusout" && (k = m._wrapperState) && k.controlled && m.type === "number" && Gl(m, "number", m.value)
            }
            switch (k = u ? Er(u) : window, e) {
                case "focusin":
                    (Dc(k) || k.contentEditable === "true") && (xr = k, la = u, No = null);
                    break;
                case "focusout":
                    No = la = xr = null;
                    break;
                case "mousedown":
                    aa = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    aa = !1, Uc(p, n, c);
                    break;
                case "selectionchange":
                    if (ry) break;
                case "keydown":
                case "keyup":
                    Uc(p, n, c)
            }
            var b;
            if (gu) e: {
                switch (e) {
                    case "compositionstart":
                        var R = "onCompositionStart";
                        break e;
                    case "compositionend":
                        R = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        R = "onCompositionUpdate";
                        break e
                }
                R = void 0
            }
            else wr ? vp(e, n) && (R = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");R && (gp && n.locale !== "ko" && (wr || R !== "onCompositionStart" ? R === "onCompositionEnd" && wr && (b = mp()) : (gn = c, pu = "value" in gn ? gn.value : gn.textContent, wr = !0)), k = is(u, R), 0 < k.length && (R = new Ac(R, e, null, n, c), p.push({
                event: R,
                listeners: k
            }), b ? R.data = b : (b = yp(n), b !== null && (R.data = b)))),
            (b = Hv ? Qv(e, n) : Kv(e, n)) && (u = is(u, "onBeforeInput"), 0 < u.length && (c = new Ac("onBeforeInput", "beforeinput", null, n, c), p.push({
                event: c,
                listeners: u
            }), c.data = b))
        }
        _p(p, t)
    })
}

function Vo(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function is(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var o = e,
            i = o.stateNode;
        o.tag === 5 && i !== null && (o = i, i = Io(e, n), i != null && r.unshift(Vo(e, i, o)), i = Io(e, t), i != null && r.push(Vo(e, i, o))), e = e.return
    }
    return r
}

function mr(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function Hc(e, t, n, r, o) {
    for (var i = t._reactName, s = []; n !== null && n !== r;) {
        var l = n,
            a = l.alternate,
            u = l.stateNode;
        if (a !== null && a === r) break;
        l.tag === 5 && u !== null && (l = u, o ? (a = Io(n, i), a != null && s.unshift(Vo(n, a, l))) : o || (a = Io(n, i), a != null && s.push(Vo(n, a, l)))), n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var ly = /\r\n?/g,
    ay = /\u0000|\uFFFD/g;

function Qc(e) {
    return (typeof e == "string" ? e : "" + e).replace(ly, `
`).replace(ay, "")
}

function bi(e, t, n) {
    if (t = Qc(t), Qc(e) !== t && n) throw Error(_(425))
}

function ss() {}
var ua = null,
    ca = null;

function da(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var fa = typeof setTimeout == "function" ? setTimeout : void 0,
    uy = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Kc = typeof Promise == "function" ? Promise : void 0,
    cy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Kc < "u" ? function(e) {
        return Kc.resolve(null).then(e).catch(dy)
    } : fa;

function dy(e) {
    setTimeout(function() {
        throw e
    })
}

function bl(e, t) {
    var n = t,
        r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n), o && o.nodeType === 8)
            if (n = o.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(o), Fo(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    Fo(t)
}

function En(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function Yc(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var ro = Math.random().toString(36).slice(2),
    _t = "__reactFiber$" + ro,
    Wo = "__reactProps$" + ro,
    Wt = "__reactContainer$" + ro,
    pa = "__reactEvents$" + ro,
    fy = "__reactListeners$" + ro,
    py = "__reactHandles$" + ro;

function Vn(e) {
    var t = e[_t];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[Wt] || n[_t]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = Yc(e); e !== null;) {
                    if (n = e[_t]) return n;
                    e = Yc(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function si(e) {
    return e = e[_t] || e[Wt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Er(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(_(33))
}

function Ls(e) {
    return e[Wo] || null
}
var ha = [],
    Cr = -1;

function In(e) {
    return {
        current: e
    }
}

function ie(e) {
    0 > Cr || (e.current = ha[Cr], ha[Cr] = null, Cr--)
}

function ne(e, t) {
    Cr++, ha[Cr] = e.current, e.current = t
}
var Nn = {},
    _e = In(Nn),
    $e = In(!1),
    er = Nn;

function Kr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Nn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var o = {},
        i;
    for (i in n) o[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
}

function Be(e) {
    return e = e.childContextTypes, e != null
}

function ls() {
    ie($e), ie(_e)
}

function Gc(e, t, n) {
    if (_e.current !== Nn) throw Error(_(168));
    ne(_e, t), ne($e, n)
}

function Op(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t)) throw Error(_(108, qg(e) || "Unknown", o));
    return ce({}, n, r)
}

function as(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Nn, er = _e.current, ne(_e, e), ne($e, $e.current), !0
}

function Xc(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(_(169));
    n ? (e = Op(e, t, er), r.__reactInternalMemoizedMergedChildContext = e, ie($e), ie(_e), ne(_e, e)) : ie($e), ne($e, n)
}
var zt = null,
    Ms = !1,
    Pl = !1;

function Ap(e) {
    zt === null ? zt = [e] : zt.push(e)
}

function hy(e) {
    Ms = !0, Ap(e)
}

function Dn() {
    if (!Pl && zt !== null) {
        Pl = !0;
        var e = 0,
            t = ee;
        try {
            var n = zt;
            for (ee = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            zt = null, Ms = !1
        } catch (o) {
            throw zt !== null && (zt = zt.slice(e + 1)), op(uu, Dn), o
        } finally {
            ee = t, Pl = !1
        }
    }
    return null
}
var kr = [],
    br = 0,
    us = null,
    cs = 0,
    tt = [],
    nt = 0,
    tr = null,
    $t = 1,
    Bt = "";

function Bn(e, t) {
    kr[br++] = cs, kr[br++] = us, us = e, cs = t
}

function Lp(e, t, n) {
    tt[nt++] = $t, tt[nt++] = Bt, tt[nt++] = tr, tr = e;
    var r = $t;
    e = Bt;
    var o = 32 - wt(r) - 1;
    r &= ~(1 << o), n += 1;
    var i = 32 - wt(t) + o;
    if (30 < i) {
        var s = o - o % 5;
        i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, $t = 1 << 32 - wt(t) + o | n << o | r, Bt = i + e
    } else $t = 1 << i | n << o | r, Bt = e
}

function yu(e) {
    e.return !== null && (Bn(e, 1), Lp(e, 1, 0))
}

function wu(e) {
    for (; e === us;) us = kr[--br], kr[br] = null, cs = kr[--br], kr[br] = null;
    for (; e === tr;) tr = tt[--nt], tt[nt] = null, Bt = tt[--nt], tt[nt] = null, $t = tt[--nt], tt[nt] = null
}
var Ye = null,
    Ke = null,
    le = !1,
    yt = null;

function Mp(e, t) {
    var n = rt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function qc(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ye = e, Ke = En(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ye = e, Ke = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = tr !== null ? {
                id: $t,
                overflow: Bt
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = rt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ye = e, Ke = null, !0) : !1;
        default:
            return !1
    }
}

function ma(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function ga(e) {
    if (le) {
        var t = Ke;
        if (t) {
            var n = t;
            if (!qc(e, t)) {
                if (ma(e)) throw Error(_(418));
                t = En(n.nextSibling);
                var r = Ye;
                t && qc(e, t) ? Mp(r, n) : (e.flags = e.flags & -4097 | 2, le = !1, Ye = e)
            }
        } else {
            if (ma(e)) throw Error(_(418));
            e.flags = e.flags & -4097 | 2, le = !1, Ye = e
        }
    }
}

function Zc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Ye = e
}

function Pi(e) {
    if (e !== Ye) return !1;
    if (!le) return Zc(e), le = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !da(e.type, e.memoizedProps)), t && (t = Ke)) {
        if (ma(e)) throw Ip(), Error(_(418));
        for (; t;) Mp(e, t), t = En(t.nextSibling)
    }
    if (Zc(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(_(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ke = En(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Ke = null
        }
    } else Ke = Ye ? En(e.stateNode.nextSibling) : null;
    return !0
}

function Ip() {
    for (var e = Ke; e;) e = En(e.nextSibling)
}

function Yr() {
    Ke = Ye = null, le = !1
}

function xu(e) {
    yt === null ? yt = [e] : yt.push(e)
}
var my = Gt.ReactCurrentBatchConfig;

function mo(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(_(309));
                var r = n.stateNode
            }
            if (!r) throw Error(_(147, e));
            var o = r,
                i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
                var l = o.refs;
                s === null ? delete l[i] : l[i] = s
            }, t._stringRef = i, t)
        }
        if (typeof e != "string") throw Error(_(284));
        if (!n._owner) throw Error(_(290, e))
    }
    return e
}

function Ti(e, t) {
    throw e = Object.prototype.toString.call(t), Error(_(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function Jc(e) {
    var t = e._init;
    return t(e._payload)
}

function Dp(e) {
    function t(h, f) {
        if (e) {
            var g = h.deletions;
            g === null ? (h.deletions = [f], h.flags |= 16) : g.push(f)
        }
    }

    function n(h, f) {
        if (!e) return null;
        for (; f !== null;) t(h, f), f = f.sibling;
        return null
    }

    function r(h, f) {
        for (h = new Map; f !== null;) f.key !== null ? h.set(f.key, f) : h.set(f.index, f), f = f.sibling;
        return h
    }

    function o(h, f) {
        return h = Pn(h, f), h.index = 0, h.sibling = null, h
    }

    function i(h, f, g) {
        return h.index = g, e ? (g = h.alternate, g !== null ? (g = g.index, g < f ? (h.flags |= 2, f) : g) : (h.flags |= 2, f)) : (h.flags |= 1048576, f)
    }

    function s(h) {
        return e && h.alternate === null && (h.flags |= 2), h
    }

    function l(h, f, g, E) {
        return f === null || f.tag !== 6 ? (f = Al(g, h.mode, E), f.return = h, f) : (f = o(f, g), f.return = h, f)
    }

    function a(h, f, g, E) {
        var C = g.type;
        return C === yr ? c(h, f, g.props.children, E, g.key) : f !== null && (f.elementType === C || typeof C == "object" && C !== null && C.$$typeof === ln && Jc(C) === f.type) ? (E = o(f, g.props), E.ref = mo(h, f, g), E.return = h, E) : (E = Yi(g.type, g.key, g.props, null, h.mode, E), E.ref = mo(h, f, g), E.return = h, E)
    }

    function u(h, f, g, E) {
        return f === null || f.tag !== 4 || f.stateNode.containerInfo !== g.containerInfo || f.stateNode.implementation !== g.implementation ? (f = Ll(g, h.mode, E), f.return = h, f) : (f = o(f, g.children || []), f.return = h, f)
    }

    function c(h, f, g, E, C) {
        return f === null || f.tag !== 7 ? (f = Jn(g, h.mode, E, C), f.return = h, f) : (f = o(f, g), f.return = h, f)
    }

    function p(h, f, g) {
        if (typeof f == "string" && f !== "" || typeof f == "number") return f = Al("" + f, h.mode, g), f.return = h, f;
        if (typeof f == "object" && f !== null) {
            switch (f.$$typeof) {
                case gi:
                    return g = Yi(f.type, f.key, f.props, null, h.mode, g), g.ref = mo(h, null, f), g.return = h, g;
                case vr:
                    return f = Ll(f, h.mode, g), f.return = h, f;
                case ln:
                    var E = f._init;
                    return p(h, E(f._payload), g)
            }
            if (So(f) || uo(f)) return f = Jn(f, h.mode, g, null), f.return = h, f;
            Ti(h, f)
        }
        return null
    }

    function m(h, f, g, E) {
        var C = f !== null ? f.key : null;
        if (typeof g == "string" && g !== "" || typeof g == "number") return C !== null ? null : l(h, f, "" + g, E);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case gi:
                    return g.key === C ? a(h, f, g, E) : null;
                case vr:
                    return g.key === C ? u(h, f, g, E) : null;
                case ln:
                    return C = g._init, m(h, f, C(g._payload), E)
            }
            if (So(g) || uo(g)) return C !== null ? null : c(h, f, g, E, null);
            Ti(h, g)
        }
        return null
    }

    function d(h, f, g, E, C) {
        if (typeof E == "string" && E !== "" || typeof E == "number") return h = h.get(g) || null, l(f, h, "" + E, C);
        if (typeof E == "object" && E !== null) {
            switch (E.$$typeof) {
                case gi:
                    return h = h.get(E.key === null ? g : E.key) || null, a(f, h, E, C);
                case vr:
                    return h = h.get(E.key === null ? g : E.key) || null, u(f, h, E, C);
                case ln:
                    var k = E._init;
                    return d(h, f, g, k(E._payload), C)
            }
            if (So(E) || uo(E)) return h = h.get(g) || null, c(f, h, E, C, null);
            Ti(f, E)
        }
        return null
    }

    function x(h, f, g, E) {
        for (var C = null, k = null, b = f, R = f = 0, A = null; b !== null && R < g.length; R++) {
            b.index > R ? (A = b, b = null) : A = b.sibling;
            var O = m(h, b, g[R], E);
            if (O === null) {
                b === null && (b = A);
                break
            }
            e && b && O.alternate === null && t(h, b), f = i(O, f, R), k === null ? C = O : k.sibling = O, k = O, b = A
        }
        if (R === g.length) return n(h, b), le && Bn(h, R), C;
        if (b === null) {
            for (; R < g.length; R++) b = p(h, g[R], E), b !== null && (f = i(b, f, R), k === null ? C = b : k.sibling = b, k = b);
            return le && Bn(h, R), C
        }
        for (b = r(h, b); R < g.length; R++) A = d(b, h, R, g[R], E), A !== null && (e && A.alternate !== null && b.delete(A.key === null ? R : A.key), f = i(A, f, R), k === null ? C = A : k.sibling = A, k = A);
        return e && b.forEach(function(F) {
            return t(h, F)
        }), le && Bn(h, R), C
    }

    function v(h, f, g, E) {
        var C = uo(g);
        if (typeof C != "function") throw Error(_(150));
        if (g = C.call(g), g == null) throw Error(_(151));
        for (var k = C = null, b = f, R = f = 0, A = null, O = g.next(); b !== null && !O.done; R++, O = g.next()) {
            b.index > R ? (A = b, b = null) : A = b.sibling;
            var F = m(h, b, O.value, E);
            if (F === null) {
                b === null && (b = A);
                break
            }
            e && b && F.alternate === null && t(h, b), f = i(F, f, R), k === null ? C = F : k.sibling = F, k = F, b = A
        }
        if (O.done) return n(h, b), le && Bn(h, R), C;
        if (b === null) {
            for (; !O.done; R++, O = g.next()) O = p(h, O.value, E), O !== null && (f = i(O, f, R), k === null ? C = O : k.sibling = O, k = O);
            return le && Bn(h, R), C
        }
        for (b = r(h, b); !O.done; R++, O = g.next()) O = d(b, h, R, O.value, E), O !== null && (e && O.alternate !== null && b.delete(O.key === null ? R : O.key), f = i(O, f, R), k === null ? C = O : k.sibling = O, k = O);
        return e && b.forEach(function(D) {
            return t(h, D)
        }), le && Bn(h, R), C
    }

    function y(h, f, g, E) {
        if (typeof g == "object" && g !== null && g.type === yr && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case gi:
                    e: {
                        for (var C = g.key, k = f; k !== null;) {
                            if (k.key === C) {
                                if (C = g.type, C === yr) {
                                    if (k.tag === 7) {
                                        n(h, k.sibling), f = o(k, g.props.children), f.return = h, h = f;
                                        break e
                                    }
                                } else if (k.elementType === C || typeof C == "object" && C !== null && C.$$typeof === ln && Jc(C) === k.type) {
                                    n(h, k.sibling), f = o(k, g.props), f.ref = mo(h, k, g), f.return = h, h = f;
                                    break e
                                }
                                n(h, k);
                                break
                            } else t(h, k);
                            k = k.sibling
                        }
                        g.type === yr ? (f = Jn(g.props.children, h.mode, E, g.key), f.return = h, h = f) : (E = Yi(g.type, g.key, g.props, null, h.mode, E), E.ref = mo(h, f, g), E.return = h, h = E)
                    }
                    return s(h);
                case vr:
                    e: {
                        for (k = g.key; f !== null;) {
                            if (f.key === k)
                                if (f.tag === 4 && f.stateNode.containerInfo === g.containerInfo && f.stateNode.implementation === g.implementation) {
                                    n(h, f.sibling), f = o(f, g.children || []), f.return = h, h = f;
                                    break e
                                } else {
                                    n(h, f);
                                    break
                                }
                            else t(h, f);
                            f = f.sibling
                        }
                        f = Ll(g, h.mode, E),
                        f.return = h,
                        h = f
                    }
                    return s(h);
                case ln:
                    return k = g._init, y(h, f, k(g._payload), E)
            }
            if (So(g)) return x(h, f, g, E);
            if (uo(g)) return v(h, f, g, E);
            Ti(h, g)
        }
        return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, f !== null && f.tag === 6 ? (n(h, f.sibling), f = o(f, g), f.return = h, h = f) : (n(h, f), f = Al(g, h.mode, E), f.return = h, h = f), s(h)) : n(h, f)
    }
    return y
}
var Gr = Dp(!0),
    zp = Dp(!1),
    ds = In(null),
    fs = null,
    Pr = null,
    Su = null;

function Eu() {
    Su = Pr = fs = null
}

function Cu(e) {
    var t = ds.current;
    ie(ds), e._currentValue = t
}

function va(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function Ar(e, t) {
    fs = e, Su = Pr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Fe = !0), e.firstContext = null)
}

function it(e) {
    var t = e._currentValue;
    if (Su !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, Pr === null) {
            if (fs === null) throw Error(_(308));
            Pr = e, fs.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else Pr = Pr.next = e;
    return t
}
var Wn = null;

function ku(e) {
    Wn === null ? Wn = [e] : Wn.push(e)
}

function Fp(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n, ku(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Ht(e, r)
}

function Ht(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var an = !1;

function bu(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function $p(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function Ut(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function Cn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, q & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Ht(e, n)
    }
    return o = r.interleaved, o === null ? (t.next = t, ku(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Ht(e, n)
}

function Ui(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, cu(e, n)
    }
}

function ed(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var o = null,
            i = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? o = i = s : i = i.next = s, n = n.next
            } while (n !== null);
            i === null ? o = i = t : i = i.next = t
        } else o = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function ps(e, t, n, r) {
    var o = e.updateQueue;
    an = !1;
    var i = o.firstBaseUpdate,
        s = o.lastBaseUpdate,
        l = o.shared.pending;
    if (l !== null) {
        o.shared.pending = null;
        var a = l,
            u = a.next;
        a.next = null, s === null ? i = u : s.next = u, s = a;
        var c = e.alternate;
        c !== null && (c = c.updateQueue, l = c.lastBaseUpdate, l !== s && (l === null ? c.firstBaseUpdate = u : l.next = u, c.lastBaseUpdate = a))
    }
    if (i !== null) {
        var p = o.baseState;
        s = 0, c = u = a = null, l = i;
        do {
            var m = l.lane,
                d = l.eventTime;
            if ((r & m) === m) {
                c !== null && (c = c.next = {
                    eventTime: d,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var x = e,
                        v = l;
                    switch (m = t, d = n, v.tag) {
                        case 1:
                            if (x = v.payload, typeof x == "function") {
                                p = x.call(d, p, m);
                                break e
                            }
                            p = x;
                            break e;
                        case 3:
                            x.flags = x.flags & -65537 | 128;
                        case 0:
                            if (x = v.payload, m = typeof x == "function" ? x.call(d, p, m) : x, m == null) break e;
                            p = ce({}, p, m);
                            break e;
                        case 2:
                            an = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64, m = o.effects, m === null ? o.effects = [l] : m.push(l))
            } else d = {
                eventTime: d,
                lane: m,
                tag: l.tag,
                payload: l.payload,
                callback: l.callback,
                next: null
            }, c === null ? (u = c = d, a = p) : c = c.next = d, s |= m;
            if (l = l.next, l === null) {
                if (l = o.shared.pending, l === null) break;
                m = l, l = m.next, m.next = null, o.lastBaseUpdate = m, o.shared.pending = null
            }
        } while (!0);
        if (c === null && (a = p), o.baseState = a, o.firstBaseUpdate = u, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
            o = t;
            do s |= o.lane, o = o.next; while (o !== t)
        } else i === null && (o.shared.lanes = 0);
        rr |= s, e.lanes = s, e.memoizedState = p
    }
}

function td(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                o = r.callback;
            if (o !== null) {
                if (r.callback = null, r = n, typeof o != "function") throw Error(_(191, o));
                o.call(r)
            }
        }
}
var li = {},
    Ot = In(li),
    Ho = In(li),
    Qo = In(li);

function Hn(e) {
    if (e === li) throw Error(_(174));
    return e
}

function Pu(e, t) {
    switch (ne(Qo, t), ne(Ho, e), ne(Ot, li), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : ql(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ql(t, e)
    }
    ie(Ot), ne(Ot, t)
}

function Xr() {
    ie(Ot), ie(Ho), ie(Qo)
}

function Bp(e) {
    Hn(Qo.current);
    var t = Hn(Ot.current),
        n = ql(t, e.type);
    t !== n && (ne(Ho, e), ne(Ot, n))
}

function Tu(e) {
    Ho.current === e && (ie(Ot), ie(Ho))
}
var ae = In(0);

function hs(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var Tl = [];

function Nu() {
    for (var e = 0; e < Tl.length; e++) Tl[e]._workInProgressVersionPrimary = null;
    Tl.length = 0
}
var Vi = Gt.ReactCurrentDispatcher,
    Nl = Gt.ReactCurrentBatchConfig,
    nr = 0,
    ue = null,
    ge = null,
    we = null,
    ms = !1,
    Ro = !1,
    Ko = 0,
    gy = 0;

function Pe() {
    throw Error(_(321))
}

function Ru(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!St(e[n], t[n])) return !1;
    return !0
}

function _u(e, t, n, r, o, i) {
    if (nr = i, ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Vi.current = e === null || e.memoizedState === null ? xy : Sy, e = n(r, o), Ro) {
        i = 0;
        do {
            if (Ro = !1, Ko = 0, 25 <= i) throw Error(_(301));
            i += 1, we = ge = null, t.updateQueue = null, Vi.current = Ey, e = n(r, o)
        } while (Ro)
    }
    if (Vi.current = gs, t = ge !== null && ge.next !== null, nr = 0, we = ge = ue = null, ms = !1, t) throw Error(_(300));
    return e
}

function ju() {
    var e = Ko !== 0;
    return Ko = 0, e
}

function Pt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return we === null ? ue.memoizedState = we = e : we = we.next = e, we
}

function st() {
    if (ge === null) {
        var e = ue.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = ge.next;
    var t = we === null ? ue.memoizedState : we.next;
    if (t !== null) we = t, ge = e;
    else {
        if (e === null) throw Error(_(310));
        ge = e, e = {
            memoizedState: ge.memoizedState,
            baseState: ge.baseState,
            baseQueue: ge.baseQueue,
            queue: ge.queue,
            next: null
        }, we === null ? ue.memoizedState = we = e : we = we.next = e
    }
    return we
}

function Yo(e, t) {
    return typeof t == "function" ? t(e) : t
}

function Rl(e) {
    var t = st(),
        n = t.queue;
    if (n === null) throw Error(_(311));
    n.lastRenderedReducer = e;
    var r = ge,
        o = r.baseQueue,
        i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var s = o.next;
            o.next = i.next, i.next = s
        }
        r.baseQueue = o = i, n.pending = null
    }
    if (o !== null) {
        i = o.next, r = r.baseState;
        var l = s = null,
            a = null,
            u = i;
        do {
            var c = u.lane;
            if ((nr & c) === c) a !== null && (a = a.next = {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
            }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var p = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (l = a = p, s = r) : a = a.next = p, ue.lanes |= c, rr |= c
            }
            u = u.next
        } while (u !== null && u !== i);
        a === null ? s = r : a.next = l, St(r, t.memoizedState) || (Fe = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = a, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        o = e;
        do i = o.lane, ue.lanes |= i, rr |= i, o = o.next; while (o !== e)
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function _l(e) {
    var t = st(),
        n = t.queue;
    if (n === null) throw Error(_(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        o = n.pending,
        i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var s = o = o.next;
        do i = e(i, s.action), s = s.next; while (s !== o);
        St(i, t.memoizedState) || (Fe = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i
    }
    return [i, r]
}

function Up() {}

function Vp(e, t) {
    var n = ue,
        r = st(),
        o = t(),
        i = !St(r.memoizedState, o);
    if (i && (r.memoizedState = o, Fe = !0), r = r.queue, Ou(Qp.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || we !== null && we.memoizedState.tag & 1) {
        if (n.flags |= 2048, Go(9, Hp.bind(null, n, r, o, t), void 0, null), xe === null) throw Error(_(349));
        nr & 30 || Wp(n, t, o)
    }
    return o
}

function Wp(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = ue.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, ue.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function Hp(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Kp(t) && Yp(e)
}

function Qp(e, t, n) {
    return n(function() {
        Kp(t) && Yp(e)
    })
}

function Kp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !St(e, n)
    } catch {
        return !0
    }
}

function Yp(e) {
    var t = Ht(e, 1);
    t !== null && xt(t, e, 1, -1)
}

function nd(e) {
    var t = Pt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yo,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = wy.bind(null, ue, e), [t.memoizedState, e]
}

function Go(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = ue.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, ue.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function Gp() {
    return st().memoizedState
}

function Wi(e, t, n, r) {
    var o = Pt();
    ue.flags |= e, o.memoizedState = Go(1 | t, n, void 0, r === void 0 ? null : r)
}

function Is(e, t, n, r) {
    var o = st();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (ge !== null) {
        var s = ge.memoizedState;
        if (i = s.destroy, r !== null && Ru(r, s.deps)) {
            o.memoizedState = Go(t, n, i, r);
            return
        }
    }
    ue.flags |= e, o.memoizedState = Go(1 | t, n, i, r)
}

function rd(e, t) {
    return Wi(8390656, 8, e, t)
}

function Ou(e, t) {
    return Is(2048, 8, e, t)
}

function Xp(e, t) {
    return Is(4, 2, e, t)
}

function qp(e, t) {
    return Is(4, 4, e, t)
}

function Zp(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function Jp(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Is(4, 4, Zp.bind(null, t, e), n)
}

function Au() {}

function eh(e, t) {
    var n = st();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ru(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function th(e, t) {
    var n = st();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ru(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function nh(e, t, n) {
    return nr & 21 ? (St(n, t) || (n = lp(), ue.lanes |= n, rr |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Fe = !0), e.memoizedState = n)
}

function vy(e, t) {
    var n = ee;
    ee = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Nl.transition;
    Nl.transition = {};
    try {
        e(!1), t()
    } finally {
        ee = n, Nl.transition = r
    }
}

function rh() {
    return st().memoizedState
}

function yy(e, t, n) {
    var r = bn(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, oh(e)) ih(t, n);
    else if (n = Fp(e, t, n, r), n !== null) {
        var o = Le();
        xt(n, e, r, o), sh(n, t, r)
    }
}

function wy(e, t, n) {
    var r = bn(e),
        o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (oh(e)) ih(t, o);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
            var s = t.lastRenderedState,
                l = i(s, n);
            if (o.hasEagerState = !0, o.eagerState = l, St(l, s)) {
                var a = t.interleaved;
                a === null ? (o.next = o, ku(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
                return
            }
        } catch {} finally {}
        n = Fp(e, t, o, r), n !== null && (o = Le(), xt(n, e, r, o), sh(n, t, r))
    }
}

function oh(e) {
    var t = e.alternate;
    return e === ue || t !== null && t === ue
}

function ih(e, t) {
    Ro = ms = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function sh(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, cu(e, n)
    }
}
var gs = {
        readContext: it,
        useCallback: Pe,
        useContext: Pe,
        useEffect: Pe,
        useImperativeHandle: Pe,
        useInsertionEffect: Pe,
        useLayoutEffect: Pe,
        useMemo: Pe,
        useReducer: Pe,
        useRef: Pe,
        useState: Pe,
        useDebugValue: Pe,
        useDeferredValue: Pe,
        useTransition: Pe,
        useMutableSource: Pe,
        useSyncExternalStore: Pe,
        useId: Pe,
        unstable_isNewReconciler: !1
    },
    xy = {
        readContext: it,
        useCallback: function(e, t) {
            return Pt().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: it,
        useEffect: rd,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, Wi(4194308, 4, Zp.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return Wi(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return Wi(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = Pt();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = Pt();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = yy.bind(null, ue, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = Pt();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: nd,
        useDebugValue: Au,
        useDeferredValue: function(e) {
            return Pt().memoizedState = e
        },
        useTransition: function() {
            var e = nd(!1),
                t = e[0];
            return e = vy.bind(null, e[1]), Pt().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = ue,
                o = Pt();
            if (le) {
                if (n === void 0) throw Error(_(407));
                n = n()
            } else {
                if (n = t(), xe === null) throw Error(_(349));
                nr & 30 || Wp(r, t, n)
            }
            o.memoizedState = n;
            var i = {
                value: n,
                getSnapshot: t
            };
            return o.queue = i, rd(Qp.bind(null, r, i, e), [e]), r.flags |= 2048, Go(9, Hp.bind(null, r, i, n, t), void 0, null), n
        },
        useId: function() {
            var e = Pt(),
                t = xe.identifierPrefix;
            if (le) {
                var n = Bt,
                    r = $t;
                n = (r & ~(1 << 32 - wt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ko++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = gy++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    Sy = {
        readContext: it,
        useCallback: eh,
        useContext: it,
        useEffect: Ou,
        useImperativeHandle: Jp,
        useInsertionEffect: Xp,
        useLayoutEffect: qp,
        useMemo: th,
        useReducer: Rl,
        useRef: Gp,
        useState: function() {
            return Rl(Yo)
        },
        useDebugValue: Au,
        useDeferredValue: function(e) {
            var t = st();
            return nh(t, ge.memoizedState, e)
        },
        useTransition: function() {
            var e = Rl(Yo)[0],
                t = st().memoizedState;
            return [e, t]
        },
        useMutableSource: Up,
        useSyncExternalStore: Vp,
        useId: rh,
        unstable_isNewReconciler: !1
    },
    Ey = {
        readContext: it,
        useCallback: eh,
        useContext: it,
        useEffect: Ou,
        useImperativeHandle: Jp,
        useInsertionEffect: Xp,
        useLayoutEffect: qp,
        useMemo: th,
        useReducer: _l,
        useRef: Gp,
        useState: function() {
            return _l(Yo)
        },
        useDebugValue: Au,
        useDeferredValue: function(e) {
            var t = st();
            return ge === null ? t.memoizedState = e : nh(t, ge.memoizedState, e)
        },
        useTransition: function() {
            var e = _l(Yo)[0],
                t = st().memoizedState;
            return [e, t]
        },
        useMutableSource: Up,
        useSyncExternalStore: Vp,
        useId: rh,
        unstable_isNewReconciler: !1
    };

function pt(e, t) {
    if (e && e.defaultProps) {
        t = ce({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function ya(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : ce({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Ds = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? lr(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Le(),
            o = bn(e),
            i = Ut(r, o);
        i.payload = t, n != null && (i.callback = n), t = Cn(e, i, o), t !== null && (xt(t, e, o, r), Ui(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Le(),
            o = bn(e),
            i = Ut(r, o);
        i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Cn(e, i, o), t !== null && (xt(t, e, o, r), Ui(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Le(),
            r = bn(e),
            o = Ut(n, r);
        o.tag = 2, t != null && (o.callback = t), t = Cn(e, o, r), t !== null && (xt(t, e, r, n), Ui(t, e, r))
    }
};

function od(e, t, n, r, o, i, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Bo(n, r) || !Bo(o, i) : !0
}

function lh(e, t, n) {
    var r = !1,
        o = Nn,
        i = t.contextType;
    return typeof i == "object" && i !== null ? i = it(i) : (o = Be(t) ? er : _e.current, r = t.contextTypes, i = (r = r != null) ? Kr(e, o) : Nn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ds, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t
}

function id(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ds.enqueueReplaceState(t, t.state, null)
}

function wa(e, t, n, r) {
    var o = e.stateNode;
    o.props = n, o.state = e.memoizedState, o.refs = {}, bu(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = it(i) : (i = Be(t) ? er : _e.current, o.context = Kr(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (ya(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Ds.enqueueReplaceState(o, o.state, null), ps(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}

function qr(e, t) {
    try {
        var n = "",
            r = t;
        do n += Xg(r), r = r.return; while (r);
        var o = n
    } catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}

function jl(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}

function xa(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Cy = typeof WeakMap == "function" ? WeakMap : Map;

function ah(e, t, n) {
    n = Ut(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        ys || (ys = !0, _a = r), xa(e, t)
    }, n
}

function uh(e, t, n) {
    n = Ut(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }, n.callback = function() {
            xa(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        xa(e, t), typeof r != "function" && (kn === null ? kn = new Set([this]) : kn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }), n
}

function sd(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Cy;
        var o = new Set;
        r.set(t, o)
    } else o = r.get(t), o === void 0 && (o = new Set, r.set(t, o));
    o.has(n) || (o.add(n), e = Dy.bind(null, e, t, n), t.then(e, e))
}

function ld(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function ad(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ut(-1, 1), t.tag = 2, Cn(n, t, 1))), n.lanes |= 1), e)
}
var ky = Gt.ReactCurrentOwner,
    Fe = !1;

function Oe(e, t, n, r) {
    t.child = e === null ? zp(t, null, n, r) : Gr(t, e.child, n, r)
}

function ud(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return Ar(t, o), r = _u(e, t, n, r, i, o), n = ju(), e !== null && !Fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Qt(e, t, o)) : (le && n && yu(t), t.flags |= 1, Oe(e, t, r, o), t.child)
}

function cd(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !Bu(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, ch(e, t, i, r, o)) : (e = Yi(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (i = e.child, !(e.lanes & o)) {
        var s = i.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Bo, n(s, r) && e.ref === t.ref) return Qt(e, t, o)
    }
    return t.flags |= 1, e = Pn(i, r), e.ref = t.ref, e.return = t, t.child = e
}

function ch(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Bo(i, r) && e.ref === t.ref)
            if (Fe = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (Fe = !0);
            else return t.lanes = e.lanes, Qt(e, t, o)
    }
    return Sa(e, t, n, r, o)
}

function dh(e, t, n) {
    var r = t.pendingProps,
        o = r.children,
        i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, ne(Nr, He), He |= n;
        else {
            if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, ne(Nr, He), He |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = i !== null ? i.baseLanes : n, ne(Nr, He), He |= r
        }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, ne(Nr, He), He |= r;
    return Oe(e, t, o, n), t.child
}

function fh(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function Sa(e, t, n, r, o) {
    var i = Be(n) ? er : _e.current;
    return i = Kr(t, i), Ar(t, o), n = _u(e, t, n, r, i, o), r = ju(), e !== null && !Fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Qt(e, t, o)) : (le && r && yu(t), t.flags |= 1, Oe(e, t, n, o), t.child)
}

function dd(e, t, n, r, o) {
    if (Be(n)) {
        var i = !0;
        as(t)
    } else i = !1;
    if (Ar(t, o), t.stateNode === null) Hi(e, t), lh(t, n, r), wa(t, n, r, o), r = !0;
    else if (e === null) {
        var s = t.stateNode,
            l = t.memoizedProps;
        s.props = l;
        var a = s.context,
            u = n.contextType;
        typeof u == "object" && u !== null ? u = it(u) : (u = Be(n) ? er : _e.current, u = Kr(t, u));
        var c = n.getDerivedStateFromProps,
            p = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        p || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && id(t, s, r, u), an = !1;
        var m = t.memoizedState;
        s.state = m, ps(t, r, s, o), a = t.memoizedState, l !== r || m !== a || $e.current || an ? (typeof c == "function" && (ya(t, n, c, r), a = t.memoizedState), (l = an || od(t, n, l, r, m, a, u)) ? (p || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), s.props = r, s.state = a, s.context = u, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        s = t.stateNode, $p(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : pt(t.type, l), s.props = u, p = t.pendingProps, m = s.context, a = n.contextType, typeof a == "object" && a !== null ? a = it(a) : (a = Be(n) ? er : _e.current, a = Kr(t, a));
        var d = n.getDerivedStateFromProps;
        (c = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== p || m !== a) && id(t, s, r, a), an = !1, m = t.memoizedState, s.state = m, ps(t, r, s, o);
        var x = t.memoizedState;
        l !== p || m !== x || $e.current || an ? (typeof d == "function" && (ya(t, n, d, r), x = t.memoizedState), (u = an || od(t, n, u, r, m, x, a) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, x, a), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, x, a)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = x), s.props = r, s.state = x, s.context = a, r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return Ea(e, t, n, r, i, o)
}

function Ea(e, t, n, r, o, i) {
    fh(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return o && Xc(t, n, !1), Qt(e, t, i);
    r = t.stateNode, ky.current = t;
    var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && s ? (t.child = Gr(t, e.child, null, i), t.child = Gr(t, null, l, i)) : Oe(e, t, l, i), t.memoizedState = r.state, o && Xc(t, n, !0), t.child
}

function ph(e) {
    var t = e.stateNode;
    t.pendingContext ? Gc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Gc(e, t.context, !1), Pu(e, t.containerInfo)
}

function fd(e, t, n, r, o) {
    return Yr(), xu(o), t.flags |= 256, Oe(e, t, n, r), t.child
}
var Ca = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function ka(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function hh(e, t, n) {
    var r = t.pendingProps,
        o = ae.current,
        i = !1,
        s = (t.flags & 128) !== 0,
        l;
    if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), l ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ne(ae, o & 1), e === null) return ga(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = {
        mode: "hidden",
        children: s
    }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = $s(s, r, 0, null), e = Jn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = ka(n), t.memoizedState = Ca, e) : Lu(t, s));
    if (o = e.memoizedState, o !== null && (l = o.dehydrated, l !== null)) return by(e, t, s, r, l, o, n);
    if (i) {
        i = r.fallback, s = t.mode, o = e.child, l = o.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Pn(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), l !== null ? i = Pn(l, i) : (i = Jn(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? ka(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = Ca, r
    }
    return i = e.child, e = i.sibling, r = Pn(i, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function Lu(e, t) {
    return t = $s({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function Ni(e, t, n, r) {
    return r !== null && xu(r), Gr(t, e.child, null, n), e = Lu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function by(e, t, n, r, o, i, s) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = jl(Error(_(422))), Ni(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = $s({
        mode: "visible",
        children: r.children
    }, o, 0, null), i = Jn(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Gr(t, e.child, null, s), t.child.memoizedState = ka(s), t.memoizedState = Ca, i);
    if (!(t.mode & 1)) return Ni(e, t, s, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
        return r = l, i = Error(_(419)), r = jl(i, r, void 0), Ni(e, t, s, r)
    }
    if (l = (s & e.childLanes) !== 0, Fe || l) {
        if (r = xe, r !== null) {
            switch (s & -s) {
                case 4:
                    o = 2;
                    break;
                case 16:
                    o = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    o = 32;
                    break;
                case 536870912:
                    o = 268435456;
                    break;
                default:
                    o = 0
            }
            o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Ht(e, o), xt(r, e, o, -1))
        }
        return $u(), r = jl(Error(_(421))), Ni(e, t, s, r)
    }
    return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = zy.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Ke = En(o.nextSibling), Ye = t, le = !0, yt = null, e !== null && (tt[nt++] = $t, tt[nt++] = Bt, tt[nt++] = tr, $t = e.id, Bt = e.overflow, tr = t), t = Lu(t, r.children), t.flags |= 4096, t)
}

function pd(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), va(e.return, t, n)
}

function Ol(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o)
}

function mh(e, t, n) {
    var r = t.pendingProps,
        o = r.revealOrder,
        i = r.tail;
    if (Oe(e, t, r.children, n), r = ae.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && pd(e, n, t);
            else if (e.tag === 19) pd(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (ne(ae, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (o) {
        case "forwards":
            for (n = t.child, o = null; n !== null;) e = n.alternate, e !== null && hs(e) === null && (o = n), n = n.sibling;
            n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Ol(t, !1, o, n, i);
            break;
        case "backwards":
            for (n = null, o = t.child, t.child = null; o !== null;) {
                if (e = o.alternate, e !== null && hs(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling, o.sibling = n, n = o, o = e
            }
            Ol(t, !0, n, null, i);
            break;
        case "together":
            Ol(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function Hi(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function Qt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), rr |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(_(153));
    if (t.child !== null) {
        for (e = t.child, n = Pn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Pn(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function Py(e, t, n) {
    switch (t.tag) {
        case 3:
            ph(t), Yr();
            break;
        case 5:
            Bp(t);
            break;
        case 1:
            Be(t.type) && as(t);
            break;
        case 4:
            Pu(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                o = t.memoizedProps.value;
            ne(ds, r._currentValue), r._currentValue = o;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (ne(ae, ae.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? hh(e, t, n) : (ne(ae, ae.current & 1), e = Qt(e, t, n), e !== null ? e.sibling : null);
            ne(ae, ae.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return mh(e, t, n);
                t.flags |= 128
            }
            if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ne(ae, ae.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, dh(e, t, n)
    }
    return Qt(e, t, n)
}
var gh, ba, vh, yh;
gh = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
ba = function() {};
vh = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode, Hn(Ot.current);
        var i = null;
        switch (n) {
            case "input":
                o = Kl(e, o), r = Kl(e, r), i = [];
                break;
            case "select":
                o = ce({}, o, {
                    value: void 0
                }), r = ce({}, r, {
                    value: void 0
                }), i = [];
                break;
            case "textarea":
                o = Xl(e, o), r = Xl(e, r), i = [];
                break;
            default:
                typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ss)
        }
        Zl(n, r);
        var s;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var l = o[u];
                    for (s in l) l.hasOwnProperty(s) && (n || (n = {}), n[s] = "")
                } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Lo.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (l = o != null ? o[u] : void 0, r.hasOwnProperty(u) && a !== l && (a != null || l != null))
                if (u === "style")
                    if (l) {
                        for (s in l) !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
                        for (s in a) a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), n[s] = a[s])
                    } else n || (i || (i = []), i.push(u, n)), n = a;
            else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Lo.hasOwnProperty(u) ? (a != null && u === "onScroll" && oe("scroll", e), i || l === a || (i = [])) : (i = i || []).push(u, a))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
};
yh = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function go(e, t) {
    if (!le) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function Te(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
    else
        for (o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function Ty(e, t, n) {
    var r = t.pendingProps;
    switch (wu(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Te(t), null;
        case 1:
            return Be(t.type) && ls(), Te(t), null;
        case 3:
            return r = t.stateNode, Xr(), ie($e), ie(_e), Nu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Pi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, yt !== null && (Aa(yt), yt = null))), ba(e, t), Te(t), null;
        case 5:
            Tu(t);
            var o = Hn(Qo.current);
            if (n = t.type, e !== null && t.stateNode != null) vh(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(_(166));
                    return Te(t), null
                }
                if (e = Hn(Ot.current), Pi(t)) {
                    r = t.stateNode, n = t.type;
                    var i = t.memoizedProps;
                    switch (r[_t] = t, r[Wo] = i, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            oe("cancel", r), oe("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            oe("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (o = 0; o < Co.length; o++) oe(Co[o], r);
                            break;
                        case "source":
                            oe("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            oe("error", r), oe("load", r);
                            break;
                        case "details":
                            oe("toggle", r);
                            break;
                        case "input":
                            Ec(r, i), oe("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!i.multiple
                            }, oe("invalid", r);
                            break;
                        case "textarea":
                            kc(r, i), oe("invalid", r)
                    }
                    Zl(n, i), o = null;
                    for (var s in i)
                        if (i.hasOwnProperty(s)) {
                            var l = i[s];
                            s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && bi(r.textContent, l, e), o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && bi(r.textContent, l, e), o = ["children", "" + l]) : Lo.hasOwnProperty(s) && l != null && s === "onScroll" && oe("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            vi(r), Cc(r, i, !0);
                            break;
                        case "textarea":
                            vi(r), bc(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof i.onClick == "function" && (r.onclick = ss)
                    }
                    r = o, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Qf(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                        is: r.is
                    }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[_t] = t, e[Wo] = r, gh(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (s = Jl(n, r), n) {
                            case "dialog":
                                oe("cancel", e), oe("close", e), o = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                oe("load", e), o = r;
                                break;
                            case "video":
                            case "audio":
                                for (o = 0; o < Co.length; o++) oe(Co[o], e);
                                o = r;
                                break;
                            case "source":
                                oe("error", e), o = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                oe("error", e), oe("load", e), o = r;
                                break;
                            case "details":
                                oe("toggle", e), o = r;
                                break;
                            case "input":
                                Ec(e, r), o = Kl(e, r), oe("invalid", e);
                                break;
                            case "option":
                                o = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, o = ce({}, r, {
                                    value: void 0
                                }), oe("invalid", e);
                                break;
                            case "textarea":
                                kc(e, r), o = Xl(e, r), oe("invalid", e);
                                break;
                            default:
                                o = r
                        }
                        Zl(n, o),
                        l = o;
                        for (i in l)
                            if (l.hasOwnProperty(i)) {
                                var a = l[i];
                                i === "style" ? Gf(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Kf(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Mo(e, a) : typeof a == "number" && Mo(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Lo.hasOwnProperty(i) ? a != null && i === "onScroll" && oe("scroll", e) : a != null && ou(e, i, a, s))
                            }
                        switch (n) {
                            case "input":
                                vi(e), Cc(e, r, !1);
                                break;
                            case "textarea":
                                vi(e), bc(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + Tn(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, i = r.value, i != null ? Rr(e, !!r.multiple, i, !1) : r.defaultValue != null && Rr(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof o.onClick == "function" && (e.onclick = ss)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return Te(t), null;
        case 6:
            if (e && t.stateNode != null) yh(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(_(166));
                if (n = Hn(Qo.current), Hn(Ot.current), Pi(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[_t] = t, (i = r.nodeValue !== n) && (e = Ye, e !== null)) switch (e.tag) {
                        case 3:
                            bi(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && bi(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    i && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[_t] = t, t.stateNode = r
            }
            return Te(t), null;
        case 13:
            if (ie(ae), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (le && Ke !== null && t.mode & 1 && !(t.flags & 128)) Ip(), Yr(), t.flags |= 98560, i = !1;
                else if (i = Pi(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!i) throw Error(_(318));
                        if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(_(317));
                        i[_t] = t
                    } else Yr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    Te(t), i = !1
                } else yt !== null && (Aa(yt), yt = null), i = !0;
                if (!i) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ae.current & 1 ? ye === 0 && (ye = 3) : $u())), t.updateQueue !== null && (t.flags |= 4), Te(t), null);
        case 4:
            return Xr(), ba(e, t), e === null && Uo(t.stateNode.containerInfo), Te(t), null;
        case 10:
            return Cu(t.type._context), Te(t), null;
        case 17:
            return Be(t.type) && ls(), Te(t), null;
        case 19:
            if (ie(ae), i = t.memoizedState, i === null) return Te(t), null;
            if (r = (t.flags & 128) !== 0, s = i.rendering, s === null)
                if (r) go(i, !1);
                else {
                    if (ye !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (s = hs(e), s !== null) {
                                for (t.flags |= 128, go(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return ne(ae, ae.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    i.tail !== null && pe() > Zr && (t.flags |= 128, r = !0, go(i, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = hs(s), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), go(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !le) return Te(t), null
                    } else 2 * pe() - i.renderingStartTime > Zr && n !== 1073741824 && (t.flags |= 128, r = !0, go(i, !1), t.lanes = 4194304);
                i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s)
            }
            return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = pe(), t.sibling = null, n = ae.current, ne(ae, r ? n & 1 | 2 : n & 1), t) : (Te(t), null);
        case 22:
        case 23:
            return Fu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? He & 1073741824 && (Te(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Te(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(_(156, t.tag))
}

function Ny(e, t) {
    switch (wu(t), t.tag) {
        case 1:
            return Be(t.type) && ls(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return Xr(), ie($e), ie(_e), Nu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return Tu(t), null;
        case 13:
            if (ie(ae), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(_(340));
                Yr()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return ie(ae), null;
        case 4:
            return Xr(), null;
        case 10:
            return Cu(t.type._context), null;
        case 22:
        case 23:
            return Fu(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var Ri = !1,
    Re = !1,
    Ry = typeof WeakSet == "function" ? WeakSet : Set,
    I = null;

function Tr(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            fe(e, t, r)
        } else n.current = null
}

function Pa(e, t, n) {
    try {
        n()
    } catch (r) {
        fe(e, t, r)
    }
}
var hd = !1;

function _y(e, t) {
    if (ua = rs, e = Cp(), vu(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var o = r.anchorOffset,
                    i = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, i.nodeType
                } catch {
                    n = null;
                    break e
                }
                var s = 0,
                    l = -1,
                    a = -1,
                    u = 0,
                    c = 0,
                    p = e,
                    m = null;
                t: for (;;) {
                    for (var d; p !== n || o !== 0 && p.nodeType !== 3 || (l = s + o), p !== i || r !== 0 && p.nodeType !== 3 || (a = s + r), p.nodeType === 3 && (s += p.nodeValue.length), (d = p.firstChild) !== null;) m = p, p = d;
                    for (;;) {
                        if (p === e) break t;
                        if (m === n && ++u === o && (l = s), m === i && ++c === r && (a = s), (d = p.nextSibling) !== null) break;
                        p = m, m = p.parentNode
                    }
                    p = d
                }
                n = l === -1 || a === -1 ? null : {
                    start: l,
                    end: a
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (ca = {
            focusedElem: e,
            selectionRange: n
        }, rs = !1, I = t; I !== null;)
        if (t = I, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, I = e;
        else
            for (; I !== null;) {
                t = I;
                try {
                    var x = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (x !== null) {
                                var v = x.memoizedProps,
                                    y = x.memoizedState,
                                    h = t.stateNode,
                                    f = h.getSnapshotBeforeUpdate(t.elementType === t.type ? v : pt(t.type, v), y);
                                h.__reactInternalSnapshotBeforeUpdate = f
                            }
                            break;
                        case 3:
                            var g = t.stateNode.containerInfo;
                            g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(_(163))
                    }
                } catch (E) {
                    fe(t, t.return, E)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, I = e;
                    break
                }
                I = t.return
            }
    return x = hd, hd = !1, x
}

function _o(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                o.destroy = void 0, i !== void 0 && Pa(t, n, i)
            }
            o = o.next
        } while (o !== r)
    }
}

function zs(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function Ta(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function wh(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, wh(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[_t], delete t[Wo], delete t[pa], delete t[fy], delete t[py])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function xh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function md(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || xh(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function Na(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ss));
    else if (r !== 4 && (e = e.child, e !== null))
        for (Na(e, t, n), e = e.sibling; e !== null;) Na(e, t, n), e = e.sibling
}

function Ra(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (Ra(e, t, n), e = e.sibling; e !== null;) Ra(e, t, n), e = e.sibling
}
var Se = null,
    vt = !1;

function nn(e, t, n) {
    for (n = n.child; n !== null;) Sh(e, t, n), n = n.sibling
}

function Sh(e, t, n) {
    if (jt && typeof jt.onCommitFiberUnmount == "function") try {
        jt.onCommitFiberUnmount(_s, n)
    } catch {}
    switch (n.tag) {
        case 5:
            Re || Tr(n, t);
        case 6:
            var r = Se,
                o = vt;
            Se = null, nn(e, t, n), Se = r, vt = o, Se !== null && (vt ? (e = Se, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Se.removeChild(n.stateNode));
            break;
        case 18:
            Se !== null && (vt ? (e = Se, n = n.stateNode, e.nodeType === 8 ? bl(e.parentNode, n) : e.nodeType === 1 && bl(e, n), Fo(e)) : bl(Se, n.stateNode));
            break;
        case 4:
            r = Se, o = vt, Se = n.stateNode.containerInfo, vt = !0, nn(e, t, n), Se = r, vt = o;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Re && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                o = r = r.next;
                do {
                    var i = o,
                        s = i.destroy;
                    i = i.tag, s !== void 0 && (i & 2 || i & 4) && Pa(n, t, s), o = o.next
                } while (o !== r)
            }
            nn(e, t, n);
            break;
        case 1:
            if (!Re && (Tr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (l) {
                fe(n, t, l)
            }
            nn(e, t, n);
            break;
        case 21:
            nn(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (Re = (r = Re) || n.memoizedState !== null, nn(e, t, n), Re = r) : nn(e, t, n);
            break;
        default:
            nn(e, t, n)
    }
}

function gd(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Ry), t.forEach(function(r) {
            var o = Fy.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(o, o))
        })
    }
}

function dt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e,
                    s = t,
                    l = s;
                e: for (; l !== null;) {
                    switch (l.tag) {
                        case 5:
                            Se = l.stateNode, vt = !1;
                            break e;
                        case 3:
                            Se = l.stateNode.containerInfo, vt = !0;
                            break e;
                        case 4:
                            Se = l.stateNode.containerInfo, vt = !0;
                            break e
                    }
                    l = l.return
                }
                if (Se === null) throw Error(_(160));
                Sh(i, s, o), Se = null, vt = !1;
                var a = o.alternate;
                a !== null && (a.return = null), o.return = null
            } catch (u) {
                fe(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) Eh(t, e), t = t.sibling
}

function Eh(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (dt(t, e), bt(e), r & 4) {
                try {
                    _o(3, e, e.return), zs(3, e)
                } catch (v) {
                    fe(e, e.return, v)
                }
                try {
                    _o(5, e, e.return)
                } catch (v) {
                    fe(e, e.return, v)
                }
            }
            break;
        case 1:
            dt(t, e), bt(e), r & 512 && n !== null && Tr(n, n.return);
            break;
        case 5:
            if (dt(t, e), bt(e), r & 512 && n !== null && Tr(n, n.return), e.flags & 32) {
                var o = e.stateNode;
                try {
                    Mo(o, "")
                } catch (v) {
                    fe(e, e.return, v)
                }
            }
            if (r & 4 && (o = e.stateNode, o != null)) {
                var i = e.memoizedProps,
                    s = n !== null ? n.memoizedProps : i,
                    l = e.type,
                    a = e.updateQueue;
                if (e.updateQueue = null, a !== null) try {
                    l === "input" && i.type === "radio" && i.name != null && Wf(o, i), Jl(l, s);
                    var u = Jl(l, i);
                    for (s = 0; s < a.length; s += 2) {
                        var c = a[s],
                            p = a[s + 1];
                        c === "style" ? Gf(o, p) : c === "dangerouslySetInnerHTML" ? Kf(o, p) : c === "children" ? Mo(o, p) : ou(o, c, p, u)
                    }
                    switch (l) {
                        case "input":
                            Yl(o, i);
                            break;
                        case "textarea":
                            Hf(o, i);
                            break;
                        case "select":
                            var m = o._wrapperState.wasMultiple;
                            o._wrapperState.wasMultiple = !!i.multiple;
                            var d = i.value;
                            d != null ? Rr(o, !!i.multiple, d, !1) : m !== !!i.multiple && (i.defaultValue != null ? Rr(o, !!i.multiple, i.defaultValue, !0) : Rr(o, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    o[Wo] = i
                } catch (v) {
                    fe(e, e.return, v)
                }
            }
            break;
        case 6:
            if (dt(t, e), bt(e), r & 4) {
                if (e.stateNode === null) throw Error(_(162));
                o = e.stateNode, i = e.memoizedProps;
                try {
                    o.nodeValue = i
                } catch (v) {
                    fe(e, e.return, v)
                }
            }
            break;
        case 3:
            if (dt(t, e), bt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                Fo(t.containerInfo)
            } catch (v) {
                fe(e, e.return, v)
            }
            break;
        case 4:
            dt(t, e), bt(e);
            break;
        case 13:
            dt(t, e), bt(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Du = pe())), r & 4 && gd(e);
            break;
        case 22:
            if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (Re = (u = Re) || c, dt(t, e), Re = u) : dt(t, e), bt(e), r & 8192) {
                if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
                    for (I = e, c = e.child; c !== null;) {
                        for (p = I = c; I !== null;) {
                            switch (m = I, d = m.child, m.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    _o(4, m, m.return);
                                    break;
                                case 1:
                                    Tr(m, m.return);
                                    var x = m.stateNode;
                                    if (typeof x.componentWillUnmount == "function") {
                                        r = m, n = m.return;
                                        try {
                                            t = r, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount()
                                        } catch (v) {
                                            fe(r, n, v)
                                        }
                                    }
                                    break;
                                case 5:
                                    Tr(m, m.return);
                                    break;
                                case 22:
                                    if (m.memoizedState !== null) {
                                        yd(p);
                                        continue
                                    }
                            }
                            d !== null ? (d.return = m, I = d) : yd(p)
                        }
                        c = c.sibling
                    }
                e: for (c = null, p = e;;) {
                    if (p.tag === 5) {
                        if (c === null) {
                            c = p;
                            try {
                                o = p.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = p.stateNode, a = p.memoizedProps.style, s = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = Yf("display", s))
                            } catch (v) {
                                fe(e, e.return, v)
                            }
                        }
                    } else if (p.tag === 6) {
                        if (c === null) try {
                            p.stateNode.nodeValue = u ? "" : p.memoizedProps
                        } catch (v) {
                            fe(e, e.return, v)
                        }
                    } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
                        p.child.return = p, p = p.child;
                        continue
                    }
                    if (p === e) break e;
                    for (; p.sibling === null;) {
                        if (p.return === null || p.return === e) break e;
                        c === p && (c = null), p = p.return
                    }
                    c === p && (c = null), p.sibling.return = p.return, p = p.sibling
                }
            }
            break;
        case 19:
            dt(t, e), bt(e), r & 4 && gd(e);
            break;
        case 21:
            break;
        default:
            dt(t, e), bt(e)
    }
}

function bt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (xh(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(_(160))
            }
            switch (r.tag) {
                case 5:
                    var o = r.stateNode;
                    r.flags & 32 && (Mo(o, ""), r.flags &= -33);
                    var i = md(e);
                    Ra(e, i, o);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo,
                        l = md(e);
                    Na(e, l, s);
                    break;
                default:
                    throw Error(_(161))
            }
        }
        catch (a) {
            fe(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function jy(e, t, n) {
    I = e, Ch(e)
}

function Ch(e, t, n) {
    for (var r = (e.mode & 1) !== 0; I !== null;) {
        var o = I,
            i = o.child;
        if (o.tag === 22 && r) {
            var s = o.memoizedState !== null || Ri;
            if (!s) {
                var l = o.alternate,
                    a = l !== null && l.memoizedState !== null || Re;
                l = Ri;
                var u = Re;
                if (Ri = s, (Re = a) && !u)
                    for (I = o; I !== null;) s = I, a = s.child, s.tag === 22 && s.memoizedState !== null ? wd(o) : a !== null ? (a.return = s, I = a) : wd(o);
                for (; i !== null;) I = i, Ch(i), i = i.sibling;
                I = o, Ri = l, Re = u
            }
            vd(e)
        } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, I = i) : vd(e)
    }
}

function vd(e) {
    for (; I !== null;) {
        var t = I;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Re || zs(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Re)
                            if (n === null) r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : pt(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && td(t, i, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            td(t, s, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var a = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    a.autoFocus && n.focus();
                                    break;
                                case "img":
                                    a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var p = c.dehydrated;
                                    p !== null && Fo(p)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(_(163))
                }
                Re || t.flags & 512 && Ta(t)
            } catch (m) {
                fe(t, t.return, m)
            }
        }
        if (t === e) {
            I = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, I = n;
            break
        }
        I = t.return
    }
}

function yd(e) {
    for (; I !== null;) {
        var t = I;
        if (t === e) {
            I = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, I = n;
            break
        }
        I = t.return
    }
}

function wd(e) {
    for (; I !== null;) {
        var t = I;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        zs(4, t)
                    } catch (a) {
                        fe(t, n, a)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var o = t.return;
                        try {
                            r.componentDidMount()
                        } catch (a) {
                            fe(t, o, a)
                        }
                    }
                    var i = t.return;
                    try {
                        Ta(t)
                    } catch (a) {
                        fe(t, i, a)
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        Ta(t)
                    } catch (a) {
                        fe(t, s, a)
                    }
            }
        } catch (a) {
            fe(t, t.return, a)
        }
        if (t === e) {
            I = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return, I = l;
            break
        }
        I = t.return
    }
}
var Oy = Math.ceil,
    vs = Gt.ReactCurrentDispatcher,
    Mu = Gt.ReactCurrentOwner,
    ot = Gt.ReactCurrentBatchConfig,
    q = 0,
    xe = null,
    me = null,
    Ee = 0,
    He = 0,
    Nr = In(0),
    ye = 0,
    Xo = null,
    rr = 0,
    Fs = 0,
    Iu = 0,
    jo = null,
    ze = null,
    Du = 0,
    Zr = 1 / 0,
    Dt = null,
    ys = !1,
    _a = null,
    kn = null,
    _i = !1,
    vn = null,
    ws = 0,
    Oo = 0,
    ja = null,
    Qi = -1,
    Ki = 0;

function Le() {
    return q & 6 ? pe() : Qi !== -1 ? Qi : Qi = pe()
}

function bn(e) {
    return e.mode & 1 ? q & 2 && Ee !== 0 ? Ee & -Ee : my.transition !== null ? (Ki === 0 && (Ki = lp()), Ki) : (e = ee, e !== 0 || (e = window.event, e = e === void 0 ? 16 : hp(e.type)), e) : 1
}

function xt(e, t, n, r) {
    if (50 < Oo) throw Oo = 0, ja = null, Error(_(185));
    oi(e, n, r), (!(q & 2) || e !== xe) && (e === xe && (!(q & 2) && (Fs |= n), ye === 4 && cn(e, Ee)), Ue(e, r), n === 1 && q === 0 && !(t.mode & 1) && (Zr = pe() + 500, Ms && Dn()))
}

function Ue(e, t) {
    var n = e.callbackNode;
    mv(e, t);
    var r = ns(e, e === xe ? Ee : 0);
    if (r === 0) n !== null && Nc(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && Nc(n), t === 1) e.tag === 0 ? hy(xd.bind(null, e)) : Ap(xd.bind(null, e)), cy(function() {
            !(q & 6) && Dn()
        }), n = null;
        else {
            switch (ap(r)) {
                case 1:
                    n = uu;
                    break;
                case 4:
                    n = ip;
                    break;
                case 16:
                    n = ts;
                    break;
                case 536870912:
                    n = sp;
                    break;
                default:
                    n = ts
            }
            n = jh(n, kh.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function kh(e, t) {
    if (Qi = -1, Ki = 0, q & 6) throw Error(_(327));
    var n = e.callbackNode;
    if (Lr() && e.callbackNode !== n) return null;
    var r = ns(e, e === xe ? Ee : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = xs(e, r);
    else {
        t = r;
        var o = q;
        q |= 2;
        var i = Ph();
        (xe !== e || Ee !== t) && (Dt = null, Zr = pe() + 500, Zn(e, t));
        do try {
            My();
            break
        } catch (l) {
            bh(e, l)
        }
        while (!0);
        Eu(), vs.current = i, q = o, me !== null ? t = 0 : (xe = null, Ee = 0, t = ye)
    }
    if (t !== 0) {
        if (t === 2 && (o = oa(e), o !== 0 && (r = o, t = Oa(e, o))), t === 1) throw n = Xo, Zn(e, 0), cn(e, r), Ue(e, pe()), n;
        if (t === 6) cn(e, r);
        else {
            if (o = e.current.alternate, !(r & 30) && !Ay(o) && (t = xs(e, r), t === 2 && (i = oa(e), i !== 0 && (r = i, t = Oa(e, i))), t === 1)) throw n = Xo, Zn(e, 0), cn(e, r), Ue(e, pe()), n;
            switch (e.finishedWork = o, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(_(345));
                case 2:
                    Un(e, ze, Dt);
                    break;
                case 3:
                    if (cn(e, r), (r & 130023424) === r && (t = Du + 500 - pe(), 10 < t)) {
                        if (ns(e, 0) !== 0) break;
                        if (o = e.suspendedLanes, (o & r) !== r) {
                            Le(), e.pingedLanes |= e.suspendedLanes & o;
                            break
                        }
                        e.timeoutHandle = fa(Un.bind(null, e, ze, Dt), t);
                        break
                    }
                    Un(e, ze, Dt);
                    break;
                case 4:
                    if (cn(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, o = -1; 0 < r;) {
                        var s = 31 - wt(r);
                        i = 1 << s, s = t[s], s > o && (o = s), r &= ~i
                    }
                    if (r = o, r = pe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Oy(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = fa(Un.bind(null, e, ze, Dt), r);
                        break
                    }
                    Un(e, ze, Dt);
                    break;
                case 5:
                    Un(e, ze, Dt);
                    break;
                default:
                    throw Error(_(329))
            }
        }
    }
    return Ue(e, pe()), e.callbackNode === n ? kh.bind(null, e) : null
}

function Oa(e, t) {
    var n = jo;
    return e.current.memoizedState.isDehydrated && (Zn(e, t).flags |= 256), e = xs(e, t), e !== 2 && (t = ze, ze = n, t !== null && Aa(t)), e
}

function Aa(e) {
    ze === null ? ze = e : ze.push.apply(ze, e)
}

function Ay(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r],
                        i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!St(i(), o)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function cn(e, t) {
    for (t &= ~Iu, t &= ~Fs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - wt(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function xd(e) {
    if (q & 6) throw Error(_(327));
    Lr();
    var t = ns(e, 0);
    if (!(t & 1)) return Ue(e, pe()), null;
    var n = xs(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = oa(e);
        r !== 0 && (t = r, n = Oa(e, r))
    }
    if (n === 1) throw n = Xo, Zn(e, 0), cn(e, t), Ue(e, pe()), n;
    if (n === 6) throw Error(_(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Un(e, ze, Dt), Ue(e, pe()), null
}

function zu(e, t) {
    var n = q;
    q |= 1;
    try {
        return e(t)
    } finally {
        q = n, q === 0 && (Zr = pe() + 500, Ms && Dn())
    }
}

function or(e) {
    vn !== null && vn.tag === 0 && !(q & 6) && Lr();
    var t = q;
    q |= 1;
    var n = ot.transition,
        r = ee;
    try {
        if (ot.transition = null, ee = 1, e) return e()
    } finally {
        ee = r, ot.transition = n, q = t, !(q & 6) && Dn()
    }
}

function Fu() {
    He = Nr.current, ie(Nr)
}

function Zn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, uy(n)), me !== null)
        for (n = me.return; n !== null;) {
            var r = n;
            switch (wu(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && ls();
                    break;
                case 3:
                    Xr(), ie($e), ie(_e), Nu();
                    break;
                case 5:
                    Tu(r);
                    break;
                case 4:
                    Xr();
                    break;
                case 13:
                    ie(ae);
                    break;
                case 19:
                    ie(ae);
                    break;
                case 10:
                    Cu(r.type._context);
                    break;
                case 22:
                case 23:
                    Fu()
            }
            n = n.return
        }
    if (xe = e, me = e = Pn(e.current, null), Ee = He = t, ye = 0, Xo = null, Iu = Fs = rr = 0, ze = jo = null, Wn !== null) {
        for (t = 0; t < Wn.length; t++)
            if (n = Wn[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var o = r.next,
                    i = n.pending;
                if (i !== null) {
                    var s = i.next;
                    i.next = o, r.next = s
                }
                n.pending = r
            }
        Wn = null
    }
    return e
}

function bh(e, t) {
    do {
        var n = me;
        try {
            if (Eu(), Vi.current = gs, ms) {
                for (var r = ue.memoizedState; r !== null;) {
                    var o = r.queue;
                    o !== null && (o.pending = null), r = r.next
                }
                ms = !1
            }
            if (nr = 0, we = ge = ue = null, Ro = !1, Ko = 0, Mu.current = null, n === null || n.return === null) {
                ye = 1, Xo = t, me = null;
                break
            }
            e: {
                var i = e,
                    s = n.return,
                    l = n,
                    a = t;
                if (t = Ee, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a,
                        c = l,
                        p = c.tag;
                    if (!(c.mode & 1) && (p === 0 || p === 11 || p === 15)) {
                        var m = c.alternate;
                        m ? (c.updateQueue = m.updateQueue, c.memoizedState = m.memoizedState, c.lanes = m.lanes) : (c.updateQueue = null, c.memoizedState = null)
                    }
                    var d = ld(s);
                    if (d !== null) {
                        d.flags &= -257, ad(d, s, l, i, t), d.mode & 1 && sd(i, u, t), t = d, a = u;
                        var x = t.updateQueue;
                        if (x === null) {
                            var v = new Set;
                            v.add(a), t.updateQueue = v
                        } else x.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            sd(i, u, t), $u();
                            break e
                        }
                        a = Error(_(426))
                    }
                } else if (le && l.mode & 1) {
                    var y = ld(s);
                    if (y !== null) {
                        !(y.flags & 65536) && (y.flags |= 256), ad(y, s, l, i, t), xu(qr(a, l));
                        break e
                    }
                }
                i = a = qr(a, l),
                ye !== 4 && (ye = 2),
                jo === null ? jo = [i] : jo.push(i),
                i = s;do {
                    switch (i.tag) {
                        case 3:
                            i.flags |= 65536, t &= -t, i.lanes |= t;
                            var h = ah(i, a, t);
                            ed(i, h);
                            break e;
                        case 1:
                            l = a;
                            var f = i.type,
                                g = i.stateNode;
                            if (!(i.flags & 128) && (typeof f.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (kn === null || !kn.has(g)))) {
                                i.flags |= 65536, t &= -t, i.lanes |= t;
                                var E = uh(i, l, t);
                                ed(i, E);
                                break e
                            }
                    }
                    i = i.return
                } while (i !== null)
            }
            Nh(n)
        } catch (C) {
            t = C, me === n && n !== null && (me = n = n.return);
            continue
        }
        break
    } while (!0)
}

function Ph() {
    var e = vs.current;
    return vs.current = gs, e === null ? gs : e
}

function $u() {
    (ye === 0 || ye === 3 || ye === 2) && (ye = 4), xe === null || !(rr & 268435455) && !(Fs & 268435455) || cn(xe, Ee)
}

function xs(e, t) {
    var n = q;
    q |= 2;
    var r = Ph();
    (xe !== e || Ee !== t) && (Dt = null, Zn(e, t));
    do try {
        Ly();
        break
    } catch (o) {
        bh(e, o)
    }
    while (!0);
    if (Eu(), q = n, vs.current = r, me !== null) throw Error(_(261));
    return xe = null, Ee = 0, ye
}

function Ly() {
    for (; me !== null;) Th(me)
}

function My() {
    for (; me !== null && !sv();) Th(me)
}

function Th(e) {
    var t = _h(e.alternate, e, He);
    e.memoizedProps = e.pendingProps, t === null ? Nh(e) : me = t, Mu.current = null
}

function Nh(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = Ny(n, t), n !== null) {
                n.flags &= 32767, me = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                ye = 6, me = null;
                return
            }
        } else if (n = Ty(n, t, He), n !== null) {
            me = n;
            return
        }
        if (t = t.sibling, t !== null) {
            me = t;
            return
        }
        me = t = e
    } while (t !== null);
    ye === 0 && (ye = 5)
}

function Un(e, t, n) {
    var r = ee,
        o = ot.transition;
    try {
        ot.transition = null, ee = 1, Iy(e, t, n, r)
    } finally {
        ot.transition = o, ee = r
    }
    return null
}

function Iy(e, t, n, r) {
    do Lr(); while (vn !== null);
    if (q & 6) throw Error(_(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(_(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (gv(e, i), e === xe && (me = xe = null, Ee = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || _i || (_i = !0, jh(ts, function() {
            return Lr(), null
        })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
        i = ot.transition, ot.transition = null;
        var s = ee;
        ee = 1;
        var l = q;
        q |= 4, Mu.current = null, _y(e, n), Eh(n, e), ny(ca), rs = !!ua, ca = ua = null, e.current = n, jy(n), lv(), q = l, ee = s, ot.transition = i
    } else e.current = n;
    if (_i && (_i = !1, vn = e, ws = o), i = e.pendingLanes, i === 0 && (kn = null), cv(n.stateNode), Ue(e, pe()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, {
            componentStack: o.stack,
            digest: o.digest
        });
    if (ys) throw ys = !1, e = _a, _a = null, e;
    return ws & 1 && e.tag !== 0 && Lr(), i = e.pendingLanes, i & 1 ? e === ja ? Oo++ : (Oo = 0, ja = e) : Oo = 0, Dn(), null
}

function Lr() {
    if (vn !== null) {
        var e = ap(ws),
            t = ot.transition,
            n = ee;
        try {
            if (ot.transition = null, ee = 16 > e ? 16 : e, vn === null) var r = !1;
            else {
                if (e = vn, vn = null, ws = 0, q & 6) throw Error(_(331));
                var o = q;
                for (q |= 4, I = e.current; I !== null;) {
                    var i = I,
                        s = i.child;
                    if (I.flags & 16) {
                        var l = i.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var u = l[a];
                                for (I = u; I !== null;) {
                                    var c = I;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            _o(8, c, i)
                                    }
                                    var p = c.child;
                                    if (p !== null) p.return = c, I = p;
                                    else
                                        for (; I !== null;) {
                                            c = I;
                                            var m = c.sibling,
                                                d = c.return;
                                            if (wh(c), c === u) {
                                                I = null;
                                                break
                                            }
                                            if (m !== null) {
                                                m.return = d, I = m;
                                                break
                                            }
                                            I = d
                                        }
                                }
                            }
                            var x = i.alternate;
                            if (x !== null) {
                                var v = x.child;
                                if (v !== null) {
                                    x.child = null;
                                    do {
                                        var y = v.sibling;
                                        v.sibling = null, v = y
                                    } while (v !== null)
                                }
                            }
                            I = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && s !== null) s.return = i, I = s;
                    else e: for (; I !== null;) {
                        if (i = I, i.flags & 2048) switch (i.tag) {
                            case 0:
                            case 11:
                            case 15:
                                _o(9, i, i.return)
                        }
                        var h = i.sibling;
                        if (h !== null) {
                            h.return = i.return, I = h;
                            break e
                        }
                        I = i.return
                    }
                }
                var f = e.current;
                for (I = f; I !== null;) {
                    s = I;
                    var g = s.child;
                    if (s.subtreeFlags & 2064 && g !== null) g.return = s, I = g;
                    else e: for (s = f; I !== null;) {
                        if (l = I, l.flags & 2048) try {
                            switch (l.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    zs(9, l)
                            }
                        } catch (C) {
                            fe(l, l.return, C)
                        }
                        if (l === s) {
                            I = null;
                            break e
                        }
                        var E = l.sibling;
                        if (E !== null) {
                            E.return = l.return, I = E;
                            break e
                        }
                        I = l.return
                    }
                }
                if (q = o, Dn(), jt && typeof jt.onPostCommitFiberRoot == "function") try {
                    jt.onPostCommitFiberRoot(_s, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            ee = n, ot.transition = t
        }
    }
    return !1
}

function Sd(e, t, n) {
    t = qr(n, t), t = ah(e, t, 1), e = Cn(e, t, 1), t = Le(), e !== null && (oi(e, 1, t), Ue(e, t))
}

function fe(e, t, n) {
    if (e.tag === 3) Sd(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                Sd(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (kn === null || !kn.has(r))) {
                    e = qr(n, e), e = uh(t, e, 1), t = Cn(t, e, 1), e = Le(), t !== null && (oi(t, 1, e), Ue(t, e));
                    break
                }
            }
            t = t.return
        }
}

function Dy(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Le(), e.pingedLanes |= e.suspendedLanes & n, xe === e && (Ee & n) === n && (ye === 4 || ye === 3 && (Ee & 130023424) === Ee && 500 > pe() - Du ? Zn(e, 0) : Iu |= n), Ue(e, t)
}

function Rh(e, t) {
    t === 0 && (e.mode & 1 ? (t = xi, xi <<= 1, !(xi & 130023424) && (xi = 4194304)) : t = 1);
    var n = Le();
    e = Ht(e, t), e !== null && (oi(e, t, n), Ue(e, n))
}

function zy(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Rh(e, n)
}

function Fy(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                o = e.memoizedState;
            o !== null && (n = o.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(_(314))
    }
    r !== null && r.delete(t), Rh(e, n)
}
var _h;
_h = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || $e.current) Fe = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return Fe = !1, Py(e, t, n);
            Fe = !!(e.flags & 131072)
        }
    else Fe = !1, le && t.flags & 1048576 && Lp(t, cs, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Hi(e, t), e = t.pendingProps;
            var o = Kr(t, _e.current);
            Ar(t, n), o = _u(null, t, r, e, o, n);
            var i = ju();
            return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Be(r) ? (i = !0, as(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, bu(t), o.updater = Ds, t.stateNode = o, o._reactInternals = t, wa(t, r, e, n), t = Ea(null, t, r, !0, i, n)) : (t.tag = 0, le && i && yu(t), Oe(null, t, o, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (Hi(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = By(r), e = pt(r, e), o) {
                    case 0:
                        t = Sa(null, t, r, e, n);
                        break e;
                    case 1:
                        t = dd(null, t, r, e, n);
                        break e;
                    case 11:
                        t = ud(null, t, r, e, n);
                        break e;
                    case 14:
                        t = cd(null, t, r, pt(r.type, e), n);
                        break e
                }
                throw Error(_(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : pt(r, o), Sa(e, t, r, o, n);
        case 1:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : pt(r, o), dd(e, t, r, o, n);
        case 3:
            e: {
                if (ph(t), e === null) throw Error(_(387));r = t.pendingProps,
                i = t.memoizedState,
                o = i.element,
                $p(e, t),
                ps(t, r, null, n);
                var s = t.memoizedState;
                if (r = s.element, i.isDehydrated)
                    if (i = {
                            element: r,
                            isDehydrated: !1,
                            cache: s.cache,
                            pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                            transitions: s.transitions
                        }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                        o = qr(Error(_(423)), t), t = fd(e, t, r, n, o);
                        break e
                    } else if (r !== o) {
                    o = qr(Error(_(424)), t), t = fd(e, t, r, n, o);
                    break e
                } else
                    for (Ke = En(t.stateNode.containerInfo.firstChild), Ye = t, le = !0, yt = null, n = zp(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (Yr(), r === o) {
                        t = Qt(e, t, n);
                        break e
                    }
                    Oe(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return Bp(t), e === null && ga(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, da(r, o) ? s = null : i !== null && da(r, i) && (t.flags |= 32), fh(e, t), Oe(e, t, s, n), t.child;
        case 6:
            return e === null && ga(t), null;
        case 13:
            return hh(e, t, n);
        case 4:
            return Pu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Gr(t, null, r, n) : Oe(e, t, r, n), t.child;
        case 11:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : pt(r, o), ud(e, t, r, o, n);
        case 7:
            return Oe(e, t, t.pendingProps, n), t.child;
        case 8:
            return Oe(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return Oe(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, ne(ds, r._currentValue), r._currentValue = s, i !== null)
                    if (St(i.value, s)) {
                        if (i.children === o.children && !$e.current) {
                            t = Qt(e, t, n);
                            break e
                        }
                    } else
                        for (i = t.child, i !== null && (i.return = t); i !== null;) {
                            var l = i.dependencies;
                            if (l !== null) {
                                s = i.child;
                                for (var a = l.firstContext; a !== null;) {
                                    if (a.context === r) {
                                        if (i.tag === 1) {
                                            a = Ut(-1, n & -n), a.tag = 2;
                                            var u = i.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var c = u.pending;
                                                c === null ? a.next = a : (a.next = c.next, c.next = a), u.pending = a
                                            }
                                        }
                                        i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), va(i.return, n, t), l.lanes |= n;
                                        break
                                    }
                                    a = a.next
                                }
                            } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
                            else if (i.tag === 18) {
                                if (s = i.return, s === null) throw Error(_(341));
                                s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), va(s, n, t), s = i.sibling
                            } else s = i.child;
                            if (s !== null) s.return = i;
                            else
                                for (s = i; s !== null;) {
                                    if (s === t) {
                                        s = null;
                                        break
                                    }
                                    if (i = s.sibling, i !== null) {
                                        i.return = s.return, s = i;
                                        break
                                    }
                                    s = s.return
                                }
                            i = s
                        }
                Oe(e, t, o.children, n),
                t = t.child
            }
            return t;
        case 9:
            return o = t.type, r = t.pendingProps.children, Ar(t, n), o = it(o), r = r(o), t.flags |= 1, Oe(e, t, r, n), t.child;
        case 14:
            return r = t.type, o = pt(r, t.pendingProps), o = pt(r.type, o), cd(e, t, r, o, n);
        case 15:
            return ch(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : pt(r, o), Hi(e, t), t.tag = 1, Be(r) ? (e = !0, as(t)) : e = !1, Ar(t, n), lh(t, r, o), wa(t, r, o, n), Ea(null, t, r, !0, e, n);
        case 19:
            return mh(e, t, n);
        case 22:
            return dh(e, t, n)
    }
    throw Error(_(156, t.tag))
};

function jh(e, t) {
    return op(e, t)
}

function $y(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function rt(e, t, n, r) {
    return new $y(e, t, n, r)
}

function Bu(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function By(e) {
    if (typeof e == "function") return Bu(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === su) return 11;
        if (e === lu) return 14
    }
    return 2
}

function Pn(e, t) {
    var n = e.alternate;
    return n === null ? (n = rt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Yi(e, t, n, r, o, i) {
    var s = 2;
    if (r = e, typeof e == "function") Bu(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else e: switch (e) {
        case yr:
            return Jn(n.children, o, i, t);
        case iu:
            s = 8, o |= 8;
            break;
        case Vl:
            return e = rt(12, n, t, o | 2), e.elementType = Vl, e.lanes = i, e;
        case Wl:
            return e = rt(13, n, t, o), e.elementType = Wl, e.lanes = i, e;
        case Hl:
            return e = rt(19, n, t, o), e.elementType = Hl, e.lanes = i, e;
        case Bf:
            return $s(n, o, i, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case Ff:
                    s = 10;
                    break e;
                case $f:
                    s = 9;
                    break e;
                case su:
                    s = 11;
                    break e;
                case lu:
                    s = 14;
                    break e;
                case ln:
                    s = 16, r = null;
                    break e
            }
            throw Error(_(130, e == null ? e : typeof e, ""))
    }
    return t = rt(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t
}

function Jn(e, t, n, r) {
    return e = rt(7, e, r, t), e.lanes = n, e
}

function $s(e, t, n, r) {
    return e = rt(22, e, r, t), e.elementType = Bf, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function Al(e, t, n) {
    return e = rt(6, e, null, t), e.lanes = n, e
}

function Ll(e, t, n) {
    return t = rt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function Uy(e, t, n, r, o) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = hl(0), this.expirationTimes = hl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = hl(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null
}

function Uu(e, t, n, r, o, i, s, l, a) {
    return e = new Uy(e, t, n, l, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = rt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, bu(i), e
}

function Vy(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: vr,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function Oh(e) {
    if (!e) return Nn;
    e = e._reactInternals;
    e: {
        if (lr(e) !== e || e.tag !== 1) throw Error(_(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Be(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(_(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Be(n)) return Op(e, n, t)
    }
    return t
}

function Ah(e, t, n, r, o, i, s, l, a) {
    return e = Uu(n, r, !0, e, o, i, s, l, a), e.context = Oh(null), n = e.current, r = Le(), o = bn(n), i = Ut(r, o), i.callback = t ?? null, Cn(n, i, o), e.current.lanes = o, oi(e, o, r), Ue(e, r), e
}

function Bs(e, t, n, r) {
    var o = t.current,
        i = Le(),
        s = bn(o);
    return n = Oh(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ut(i, s), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Cn(o, t, s), e !== null && (xt(e, o, s, i), Ui(e, o, s)), s
}

function Ss(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function Ed(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function Vu(e, t) {
    Ed(e, t), (e = e.alternate) && Ed(e, t)
}

function Wy() {
    return null
}
var Lh = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function Wu(e) {
    this._internalRoot = e
}
Us.prototype.render = Wu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(_(409));
    Bs(e, t, null, null)
};
Us.prototype.unmount = Wu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        or(function() {
            Bs(null, e, null, null)
        }), t[Wt] = null
    }
};

function Us(e) {
    this._internalRoot = e
}
Us.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = dp();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < un.length && t !== 0 && t < un[n].priority; n++);
        un.splice(n, 0, e), n === 0 && pp(e)
    }
};

function Hu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function Vs(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Cd() {}

function Hy(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var u = Ss(s);
                i.call(u)
            }
        }
        var s = Ah(t, r, e, 0, null, !1, !1, "", Cd);
        return e._reactRootContainer = s, e[Wt] = s.current, Uo(e.nodeType === 8 ? e.parentNode : e), or(), s
    }
    for (; o = e.lastChild;) e.removeChild(o);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var u = Ss(a);
            l.call(u)
        }
    }
    var a = Uu(e, 0, !1, null, null, !1, !1, "", Cd);
    return e._reactRootContainer = a, e[Wt] = a.current, Uo(e.nodeType === 8 ? e.parentNode : e), or(function() {
        Bs(t, a, n, r)
    }), a
}

function Ws(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var s = i;
        if (typeof o == "function") {
            var l = o;
            o = function() {
                var a = Ss(s);
                l.call(a)
            }
        }
        Bs(t, s, e, o)
    } else s = Hy(n, t, e, o, r);
    return Ss(s)
}
up = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Eo(t.pendingLanes);
                n !== 0 && (cu(t, n | 1), Ue(t, pe()), !(q & 6) && (Zr = pe() + 500, Dn()))
            }
            break;
        case 13:
            or(function() {
                var r = Ht(e, 1);
                if (r !== null) {
                    var o = Le();
                    xt(r, e, 1, o)
                }
            }), Vu(e, 1)
    }
};
du = function(e) {
    if (e.tag === 13) {
        var t = Ht(e, 134217728);
        if (t !== null) {
            var n = Le();
            xt(t, e, 134217728, n)
        }
        Vu(e, 134217728)
    }
};
cp = function(e) {
    if (e.tag === 13) {
        var t = bn(e),
            n = Ht(e, t);
        if (n !== null) {
            var r = Le();
            xt(n, e, t, r)
        }
        Vu(e, t)
    }
};
dp = function() {
    return ee
};
fp = function(e, t) {
    var n = ee;
    try {
        return ee = e, t()
    } finally {
        ee = n
    }
};
ta = function(e, t, n) {
    switch (t) {
        case "input":
            if (Yl(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var o = Ls(r);
                        if (!o) throw Error(_(90));
                        Vf(r), Yl(r, o)
                    }
                }
            }
            break;
        case "textarea":
            Hf(e, n);
            break;
        case "select":
            t = n.value, t != null && Rr(e, !!n.multiple, t, !1)
    }
};
Zf = zu;
Jf = or;
var Qy = {
        usingClientEntryPoint: !1,
        Events: [si, Er, Ls, Xf, qf, zu]
    },
    vo = {
        findFiberByHostInstance: Vn,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    Ky = {
        bundleType: vo.bundleType,
        version: vo.version,
        rendererPackageName: vo.rendererPackageName,
        rendererConfig: vo.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Gt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = np(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: vo.findFiberByHostInstance || Wy,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ji = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ji.isDisabled && ji.supportsFiber) try {
        _s = ji.inject(Ky), jt = ji
    } catch {}
}
qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qy;
qe.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Hu(t)) throw Error(_(200));
    return Vy(e, t, null, n)
};
qe.createRoot = function(e, t) {
    if (!Hu(e)) throw Error(_(299));
    var n = !1,
        r = "",
        o = Lh;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Uu(e, 1, !1, null, null, n, !1, r, o), e[Wt] = t.current, Uo(e.nodeType === 8 ? e.parentNode : e), new Wu(t)
};
qe.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(_(188)) : (e = Object.keys(e).join(","), Error(_(268, e)));
    return e = np(t), e = e === null ? null : e.stateNode, e
};
qe.flushSync = function(e) {
    return or(e)
};
qe.hydrate = function(e, t, n) {
    if (!Vs(t)) throw Error(_(200));
    return Ws(null, e, t, !0, n)
};
qe.hydrateRoot = function(e, t, n) {
    if (!Hu(e)) throw Error(_(405));
    var r = n != null && n.hydratedSources || null,
        o = !1,
        i = "",
        s = Lh;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Ah(t, null, e, 1, n ?? null, o, !1, i, s), e[Wt] = t.current, Uo(e), r)
        for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new Us(t)
};
qe.render = function(e, t, n) {
    if (!Vs(t)) throw Error(_(200));
    return Ws(null, e, t, !1, n)
};
qe.unmountComponentAtNode = function(e) {
    if (!Vs(e)) throw Error(_(40));
    return e._reactRootContainer ? (or(function() {
        Ws(null, null, e, !1, function() {
            e._reactRootContainer = null, e[Wt] = null
        })
    }), !0) : !1
};
qe.unstable_batchedUpdates = zu;
qe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Vs(n)) throw Error(_(200));
    if (e == null || e._reactInternals === void 0) throw Error(_(38));
    return Ws(e, t, n, !1, r)
};
qe.version = "18.3.1-next-f1338f8080-20240426";

function Mh() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mh)
    } catch (e) {
        console.error(e)
    }
}
Mh(), Mf.exports = qe;
var ai = Mf.exports;
const Ih = Ef(ai);
var Dh, kd = ai;
Dh = kd.createRoot, kd.hydrateRoot;
const Yy = 1,
    Gy = 1e6;
let Ml = 0;

function Xy() {
    return Ml = (Ml + 1) % Number.MAX_SAFE_INTEGER, Ml.toString()
}
const Il = new Map,
    bd = e => {
        if (Il.has(e)) return;
        const t = setTimeout(() => {
            Il.delete(e), Ao({
                type: "REMOVE_TOAST",
                toastId: e
            })
        }, Gy);
        Il.set(e, t)
    },
    qy = (e, t) => {
        switch (t.type) {
            case "ADD_TOAST":
                return { ...e,
                    toasts: [t.toast, ...e.toasts].slice(0, Yy)
                };
            case "UPDATE_TOAST":
                return { ...e,
                    toasts: e.toasts.map(n => n.id === t.toast.id ? { ...n,
                        ...t.toast
                    } : n)
                };
            case "DISMISS_TOAST":
                {
                    const {
                        toastId: n
                    } = t;
                    return n ? bd(n) : e.toasts.forEach(r => {
                        bd(r.id)
                    }),
                    { ...e,
                        toasts: e.toasts.map(r => r.id === n || n === void 0 ? { ...r,
                            open: !1
                        } : r)
                    }
                }
            case "REMOVE_TOAST":
                return t.toastId === void 0 ? { ...e,
                    toasts: []
                } : { ...e,
                    toasts: e.toasts.filter(n => n.id !== t.toastId)
                }
        }
    },
    Gi = [];
let Xi = {
    toasts: []
};

function Ao(e) {
    Xi = qy(Xi, e), Gi.forEach(t => {
        t(Xi)
    })
}

function Zy({ ...e
}) {
    const t = Xy(),
        n = o => Ao({
            type: "UPDATE_TOAST",
            toast: { ...o,
                id: t
            }
        }),
        r = () => Ao({
            type: "DISMISS_TOAST",
            toastId: t
        });
    return Ao({
        type: "ADD_TOAST",
        toast: { ...e,
            id: t,
            open: !0,
            onOpenChange: o => {
                o || r()
            }
        }
    }), {
        id: t,
        dismiss: r,
        update: n
    }
}

function Jy() {
    const [e, t] = w.useState(Xi);
    return w.useEffect(() => (Gi.push(t), () => {
        const n = Gi.indexOf(t);
        n > -1 && Gi.splice(n, 1)
    }), [e]), { ...e,
        toast: Zy,
        dismiss: n => Ao({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}

function ve(e, t, {
    checkForDefaultPrevented: n = !0
} = {}) {
    return function(o) {
        if (e == null || e(o), n === !1 || !o.defaultPrevented) return t == null ? void 0 : t(o)
    }
}

function Pd(e, t) {
    if (typeof e == "function") return e(t);
    e != null && (e.current = t)
}

function zh(...e) {
    return t => {
        let n = !1;
        const r = e.map(o => {
            const i = Pd(o, t);
            return !n && typeof i == "function" && (n = !0), i
        });
        if (n) return () => {
            for (let o = 0; o < r.length; o++) {
                const i = r[o];
                typeof i == "function" ? i() : Pd(e[o], null)
            }
        }
    }
}

function Et(...e) {
    return w.useCallback(zh(...e), e)
}

function Hs(e, t = []) {
    let n = [];

    function r(i, s) {
        const l = w.createContext(s),
            a = n.length;
        n = [...n, s];
        const u = p => {
            var h;
            const {
                scope: m,
                children: d,
                ...x
            } = p, v = ((h = m == null ? void 0 : m[e]) == null ? void 0 : h[a]) || l, y = w.useMemo(() => x, Object.values(x));
            return S.jsx(v.Provider, {
                value: y,
                children: d
            })
        };
        u.displayName = i + "Provider";

        function c(p, m) {
            var v;
            const d = ((v = m == null ? void 0 : m[e]) == null ? void 0 : v[a]) || l,
                x = w.useContext(d);
            if (x) return x;
            if (s !== void 0) return s;
            throw new Error(`\`${p}\` must be used within \`${i}\``)
        }
        return [u, c]
    }
    const o = () => {
        const i = n.map(s => w.createContext(s));
        return function(l) {
            const a = (l == null ? void 0 : l[e]) || i;
            return w.useMemo(() => ({
                [`__scope${e}`]: { ...l,
                    [e]: a
                }
            }), [l, a])
        }
    };
    return o.scopeName = e, [r, e0(o, ...t)]
}

function e0(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const s = r.reduce((l, {
                useScope: a,
                scopeName: u
            }) => {
                const p = a(i)[`__scope${u}`];
                return { ...l,
                    ...p
                }
            }, {});
            return w.useMemo(() => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    };
    return n.scopeName = t.scopeName, n
}

function La(e) {
    const t = t0(e),
        n = w.forwardRef((r, o) => {
            const {
                children: i,
                ...s
            } = r, l = w.Children.toArray(i), a = l.find(r0);
            if (a) {
                const u = a.props.children,
                    c = l.map(p => p === a ? w.Children.count(u) > 1 ? w.Children.only(null) : w.isValidElement(u) ? u.props.children : null : p);
                return S.jsx(t, { ...s,
                    ref: o,
                    children: w.isValidElement(u) ? w.cloneElement(u, void 0, c) : null
                })
            }
            return S.jsx(t, { ...s,
                ref: o,
                children: i
            })
        });
    return n.displayName = `${e}.Slot`, n
}

function t0(e) {
    const t = w.forwardRef((n, r) => {
        const {
            children: o,
            ...i
        } = n;
        if (w.isValidElement(o)) {
            const s = i0(o),
                l = o0(i, o.props);
            return o.type !== w.Fragment && (l.ref = r ? zh(r, s) : s), w.cloneElement(o, l)
        }
        return w.Children.count(o) > 1 ? w.Children.only(null) : null
    });
    return t.displayName = `${e}.SlotClone`, t
}
var Fh = Symbol("radix.slottable");

function n0(e) {
    const t = ({
        children: n
    }) => S.jsx(S.Fragment, {
        children: n
    });
    return t.displayName = `${e}.Slottable`, t.__radixId = Fh, t
}

function r0(e) {
    return w.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Fh
}

function o0(e, t) {
    const n = { ...t
    };
    for (const r in t) {
        const o = e[r],
            i = t[r];
        /^on[A-Z]/.test(r) ? o && i ? n[r] = (...l) => {
            const a = i(...l);
            return o(...l), a
        } : o && (n[r] = o) : r === "style" ? n[r] = { ...o,
            ...i
        } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "))
    }
    return { ...e,
        ...n
    }
}

function i0(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}

function s0(e) {
    const t = e + "CollectionProvider",
        [n, r] = Hs(t),
        [o, i] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }),
        s = v => {
            const {
                scope: y,
                children: h
            } = v, f = j.useRef(null), g = j.useRef(new Map).current;
            return S.jsx(o, {
                scope: y,
                itemMap: g,
                collectionRef: f,
                children: h
            })
        };
    s.displayName = t;
    const l = e + "CollectionSlot",
        a = La(l),
        u = j.forwardRef((v, y) => {
            const {
                scope: h,
                children: f
            } = v, g = i(l, h), E = Et(y, g.collectionRef);
            return S.jsx(a, {
                ref: E,
                children: f
            })
        });
    u.displayName = l;
    const c = e + "CollectionItemSlot",
        p = "data-radix-collection-item",
        m = La(c),
        d = j.forwardRef((v, y) => {
            const {
                scope: h,
                children: f,
                ...g
            } = v, E = j.useRef(null), C = Et(y, E), k = i(c, h);
            return j.useEffect(() => (k.itemMap.set(E, {
                ref: E,
                ...g
            }), () => void k.itemMap.delete(E))), S.jsx(m, {
                [p]: "",
                ref: C,
                children: f
            })
        });
    d.displayName = c;

    function x(v) {
        const y = i(e + "CollectionConsumer", v);
        return j.useCallback(() => {
            const f = y.collectionRef.current;
            if (!f) return [];
            const g = Array.from(f.querySelectorAll(`[${p}]`));
            return Array.from(y.itemMap.values()).sort((k, b) => g.indexOf(k.ref.current) - g.indexOf(b.ref.current))
        }, [y.collectionRef, y.itemMap])
    }
    return [{
        Provider: s,
        Slot: u,
        ItemSlot: d
    }, x, r]
}
var l0 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"],
    We = l0.reduce((e, t) => {
        const n = La(`Primitive.${t}`),
            r = w.forwardRef((o, i) => {
                const {
                    asChild: s,
                    ...l
                } = o, a = s ? n : t;
                return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), S.jsx(a, { ...l,
                    ref: i
                })
            });
        return r.displayName = `Primitive.${t}`, { ...e,
            [t]: r
        }
    }, {});

function $h(e, t) {
    e && ai.flushSync(() => e.dispatchEvent(t))
}

function Rn(e) {
    const t = w.useRef(e);
    return w.useEffect(() => {
        t.current = e
    }), w.useMemo(() => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }, [])
}

function a0(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = Rn(e);
    w.useEffect(() => {
        const r = o => {
            o.key === "Escape" && n(o)
        };
        return t.addEventListener("keydown", r, {
            capture: !0
        }), () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }, [n, t])
}
var u0 = "DismissableLayer",
    Ma = "dismissableLayer.update",
    c0 = "dismissableLayer.pointerDownOutside",
    d0 = "dismissableLayer.focusOutside",
    Td, Bh = w.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    Qu = w.forwardRef((e, t) => {
        const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: o,
            onFocusOutside: i,
            onInteractOutside: s,
            onDismiss: l,
            ...a
        } = e, u = w.useContext(Bh), [c, p] = w.useState(null), m = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, d] = w.useState({}), x = Et(t, b => p(b)), v = Array.from(u.layers), [y] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), h = v.indexOf(y), f = c ? v.indexOf(c) : -1, g = u.layersWithOutsidePointerEventsDisabled.size > 0, E = f >= h, C = p0(b => {
            const R = b.target,
                A = [...u.branches].some(O => O.contains(R));
            !E || A || (o == null || o(b), s == null || s(b), b.defaultPrevented || l == null || l())
        }, m), k = h0(b => {
            const R = b.target;
            [...u.branches].some(O => O.contains(R)) || (i == null || i(b), s == null || s(b), b.defaultPrevented || l == null || l())
        }, m);
        return a0(b => {
            f === u.layers.size - 1 && (r == null || r(b), !b.defaultPrevented && l && (b.preventDefault(), l()))
        }, m), w.useEffect(() => {
            if (c) return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Td = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(c)), u.layers.add(c), Nd(), () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Td)
            }
        }, [c, m, n, u]), w.useEffect(() => () => {
            c && (u.layers.delete(c), u.layersWithOutsidePointerEventsDisabled.delete(c), Nd())
        }, [c, u]), w.useEffect(() => {
            const b = () => d({});
            return document.addEventListener(Ma, b), () => document.removeEventListener(Ma, b)
        }, []), S.jsx(We.div, { ...a,
            ref: x,
            style: {
                pointerEvents: g ? E ? "auto" : "none" : void 0,
                ...e.style
            },
            onFocusCapture: ve(e.onFocusCapture, k.onFocusCapture),
            onBlurCapture: ve(e.onBlurCapture, k.onBlurCapture),
            onPointerDownCapture: ve(e.onPointerDownCapture, C.onPointerDownCapture)
        })
    });
Qu.displayName = u0;
var f0 = "DismissableLayerBranch",
    Uh = w.forwardRef((e, t) => {
        const n = w.useContext(Bh),
            r = w.useRef(null),
            o = Et(t, r);
        return w.useEffect(() => {
            const i = r.current;
            if (i) return n.branches.add(i), () => {
                n.branches.delete(i)
            }
        }, [n.branches]), S.jsx(We.div, { ...e,
            ref: o
        })
    });
Uh.displayName = f0;

function p0(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = Rn(e),
        r = w.useRef(!1),
        o = w.useRef(() => {});
    return w.useEffect(() => {
        const i = l => {
                if (l.target && !r.current) {
                    let a = function() {
                        Vh(c0, n, u, {
                            discrete: !0
                        })
                    };
                    const u = {
                        originalEvent: l
                    };
                    l.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = a, t.addEventListener("click", o.current, {
                        once: !0
                    })) : a()
                } else t.removeEventListener("click", o.current);
                r.current = !1
            },
            s = window.setTimeout(() => {
                t.addEventListener("pointerdown", i)
            }, 0);
        return () => {
            window.clearTimeout(s), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current)
        }
    }, [t, n]), {
        onPointerDownCapture: () => r.current = !0
    }
}

function h0(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = Rn(e),
        r = w.useRef(!1);
    return w.useEffect(() => {
        const o = i => {
            i.target && !r.current && Vh(d0, n, {
                originalEvent: i
            }, {
                discrete: !1
            })
        };
        return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o)
    }, [t, n]), {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}

function Nd() {
    const e = new CustomEvent(Ma);
    document.dispatchEvent(e)
}

function Vh(e, t, n, {
    discrete: r
}) {
    const o = n.originalEvent.target,
        i = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
        });
    t && o.addEventListener(e, t, {
        once: !0
    }), r ? $h(o, i) : o.dispatchEvent(i)
}
var m0 = Qu,
    g0 = Uh,
    _n = globalThis != null && globalThis.document ? w.useLayoutEffect : () => {},
    v0 = "Portal",
    Wh = w.forwardRef((e, t) => {
        var l;
        const {
            container: n,
            ...r
        } = e, [o, i] = w.useState(!1);
        _n(() => i(!0), []);
        const s = n || o && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
        return s ? Ih.createPortal(S.jsx(We.div, { ...r,
            ref: t
        }), s) : null
    });
Wh.displayName = v0;

function y0(e, t) {
    return w.useReducer((n, r) => t[n][r] ?? n, e)
}
var Ku = e => {
    const {
        present: t,
        children: n
    } = e, r = w0(t), o = typeof n == "function" ? n({
        present: r.isPresent
    }) : w.Children.only(n), i = Et(r.ref, x0(o));
    return typeof n == "function" || r.isPresent ? w.cloneElement(o, {
        ref: i
    }) : null
};
Ku.displayName = "Presence";

function w0(e) {
    const [t, n] = w.useState(), r = w.useRef(null), o = w.useRef(e), i = w.useRef("none"), s = e ? "mounted" : "unmounted", [l, a] = y0(s, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return w.useEffect(() => {
        const u = Oi(r.current);
        i.current = l === "mounted" ? u : "none"
    }, [l]), _n(() => {
        const u = r.current,
            c = o.current;
        if (c !== e) {
            const m = i.current,
                d = Oi(u);
            e ? a("MOUNT") : d === "none" || (u == null ? void 0 : u.display) === "none" ? a("UNMOUNT") : a(c && m !== d ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
        }
    }, [e, a]), _n(() => {
        if (t) {
            let u;
            const c = t.ownerDocument.defaultView ?? window,
                p = d => {
                    const v = Oi(r.current).includes(d.animationName);
                    if (d.target === t && v && (a("ANIMATION_END"), !o.current)) {
                        const y = t.style.animationFillMode;
                        t.style.animationFillMode = "forwards", u = c.setTimeout(() => {
                            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = y)
                        })
                    }
                },
                m = d => {
                    d.target === t && (i.current = Oi(r.current))
                };
            return t.addEventListener("animationstart", m), t.addEventListener("animationcancel", p), t.addEventListener("animationend", p), () => {
                c.clearTimeout(u), t.removeEventListener("animationstart", m), t.removeEventListener("animationcancel", p), t.removeEventListener("animationend", p)
            }
        } else a("ANIMATION_END")
    }, [t, a]), {
        isPresent: ["mounted", "unmountSuspended"].includes(l),
        ref: w.useCallback(u => {
            r.current = u ? getComputedStyle(u) : null, n(u)
        }, [])
    }
}

function Oi(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}

function x0(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var S0 = Af[" useInsertionEffect ".trim().toString()] || _n;

function E0({
    prop: e,
    defaultProp: t,
    onChange: n = () => {},
    caller: r
}) {
    const [o, i, s] = C0({
        defaultProp: t,
        onChange: n
    }), l = e !== void 0, a = l ? e : o; {
        const c = w.useRef(e !== void 0);
        w.useEffect(() => {
            const p = c.current;
            p !== l && console.warn(`${r} is changing from ${p?"controlled":"uncontrolled"} to ${l?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), c.current = l
        }, [l, r])
    }
    const u = w.useCallback(c => {
        var p;
        if (l) {
            const m = k0(c) ? c(e) : c;
            m !== e && ((p = s.current) == null || p.call(s, m))
        } else i(c)
    }, [l, e, i, s]);
    return [a, u]
}

function C0({
    defaultProp: e,
    onChange: t
}) {
    const [n, r] = w.useState(e), o = w.useRef(n), i = w.useRef(t);
    return S0(() => {
        i.current = t
    }, [t]), w.useEffect(() => {
        var s;
        o.current !== n && ((s = i.current) == null || s.call(i, n), o.current = n)
    }, [n, o]), [n, r, i]
}

function k0(e) {
    return typeof e == "function"
}
var b0 = Object.freeze({
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal"
    }),
    P0 = "VisuallyHidden",
    Qs = w.forwardRef((e, t) => S.jsx(We.span, { ...e,
        ref: t,
        style: { ...b0,
            ...e.style
        }
    }));
Qs.displayName = P0;
var T0 = Qs,
    Yu = "ToastProvider",
    [Gu, N0, R0] = s0("Toast"),
    [Hh, gE] = Hs("Toast", [R0]),
    [_0, Ks] = Hh(Yu),
    Qh = e => {
        const {
            __scopeToast: t,
            label: n = "Notification",
            duration: r = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: i = 50,
            children: s
        } = e, [l, a] = w.useState(null), [u, c] = w.useState(0), p = w.useRef(!1), m = w.useRef(!1);
        return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${Yu}\`. Expected non-empty \`string\`.`), S.jsx(Gu.Provider, {
            scope: t,
            children: S.jsx(_0, {
                scope: t,
                label: n,
                duration: r,
                swipeDirection: o,
                swipeThreshold: i,
                toastCount: u,
                viewport: l,
                onViewportChange: a,
                onToastAdd: w.useCallback(() => c(d => d + 1), []),
                onToastRemove: w.useCallback(() => c(d => d - 1), []),
                isFocusedToastEscapeKeyDownRef: p,
                isClosePausedRef: m,
                children: s
            })
        })
    };
Qh.displayName = Yu;
var Kh = "ToastViewport",
    j0 = ["F8"],
    Ia = "toast.viewportPause",
    Da = "toast.viewportResume",
    Yh = w.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            hotkey: r = j0,
            label: o = "Notifications ({hotkey})",
            ...i
        } = e, s = Ks(Kh, n), l = N0(n), a = w.useRef(null), u = w.useRef(null), c = w.useRef(null), p = w.useRef(null), m = Et(t, p, s.onViewportChange), d = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), x = s.toastCount > 0;
        w.useEffect(() => {
            const y = h => {
                var g;
                r.length !== 0 && r.every(E => h[E] || h.code === E) && ((g = p.current) == null || g.focus())
            };
            return document.addEventListener("keydown", y), () => document.removeEventListener("keydown", y)
        }, [r]), w.useEffect(() => {
            const y = a.current,
                h = p.current;
            if (x && y && h) {
                const f = () => {
                        if (!s.isClosePausedRef.current) {
                            const k = new CustomEvent(Ia);
                            h.dispatchEvent(k), s.isClosePausedRef.current = !0
                        }
                    },
                    g = () => {
                        if (s.isClosePausedRef.current) {
                            const k = new CustomEvent(Da);
                            h.dispatchEvent(k), s.isClosePausedRef.current = !1
                        }
                    },
                    E = k => {
                        !y.contains(k.relatedTarget) && g()
                    },
                    C = () => {
                        y.contains(document.activeElement) || g()
                    };
                return y.addEventListener("focusin", f), y.addEventListener("focusout", E), y.addEventListener("pointermove", f), y.addEventListener("pointerleave", C), window.addEventListener("blur", f), window.addEventListener("focus", g), () => {
                    y.removeEventListener("focusin", f), y.removeEventListener("focusout", E), y.removeEventListener("pointermove", f), y.removeEventListener("pointerleave", C), window.removeEventListener("blur", f), window.removeEventListener("focus", g)
                }
            }
        }, [x, s.isClosePausedRef]);
        const v = w.useCallback(({
            tabbingDirection: y
        }) => {
            const f = l().map(g => {
                const E = g.ref.current,
                    C = [E, ...W0(E)];
                return y === "forwards" ? C : C.reverse()
            });
            return (y === "forwards" ? f.reverse() : f).flat()
        }, [l]);
        return w.useEffect(() => {
            const y = p.current;
            if (y) {
                const h = f => {
                    var C, k, b;
                    const g = f.altKey || f.ctrlKey || f.metaKey;
                    if (f.key === "Tab" && !g) {
                        const R = document.activeElement,
                            A = f.shiftKey;
                        if (f.target === y && A) {
                            (C = u.current) == null || C.focus();
                            return
                        }
                        const D = v({
                                tabbingDirection: A ? "backwards" : "forwards"
                            }),
                            Q = D.findIndex(L => L === R);
                        Dl(D.slice(Q + 1)) ? f.preventDefault() : A ? (k = u.current) == null || k.focus() : (b = c.current) == null || b.focus()
                    }
                };
                return y.addEventListener("keydown", h), () => y.removeEventListener("keydown", h)
            }
        }, [l, v]), S.jsxs(g0, {
            ref: a,
            role: "region",
            "aria-label": o.replace("{hotkey}", d),
            tabIndex: -1,
            style: {
                pointerEvents: x ? void 0 : "none"
            },
            children: [x && S.jsx(za, {
                ref: u,
                onFocusFromOutsideViewport: () => {
                    const y = v({
                        tabbingDirection: "forwards"
                    });
                    Dl(y)
                }
            }), S.jsx(Gu.Slot, {
                scope: n,
                children: S.jsx(We.ol, {
                    tabIndex: -1,
                    ...i,
                    ref: m
                })
            }), x && S.jsx(za, {
                ref: c,
                onFocusFromOutsideViewport: () => {
                    const y = v({
                        tabbingDirection: "backwards"
                    });
                    Dl(y)
                }
            })]
        })
    });
Yh.displayName = Kh;
var Gh = "ToastFocusProxy",
    za = w.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            onFocusFromOutsideViewport: r,
            ...o
        } = e, i = Ks(Gh, n);
        return S.jsx(Qs, {
            "aria-hidden": !0,
            tabIndex: 0,
            ...o,
            ref: t,
            style: {
                position: "fixed"
            },
            onFocus: s => {
                var u;
                const l = s.relatedTarget;
                !((u = i.viewport) != null && u.contains(l)) && r()
            }
        })
    });
za.displayName = Gh;
var ui = "Toast",
    O0 = "toast.swipeStart",
    A0 = "toast.swipeMove",
    L0 = "toast.swipeCancel",
    M0 = "toast.swipeEnd",
    Xh = w.forwardRef((e, t) => {
        const {
            forceMount: n,
            open: r,
            defaultOpen: o,
            onOpenChange: i,
            ...s
        } = e, [l, a] = E0({
            prop: r,
            defaultProp: o ?? !0,
            onChange: i,
            caller: ui
        });
        return S.jsx(Ku, {
            present: n || l,
            children: S.jsx(z0, {
                open: l,
                ...s,
                ref: t,
                onClose: () => a(!1),
                onPause: Rn(e.onPause),
                onResume: Rn(e.onResume),
                onSwipeStart: ve(e.onSwipeStart, u => {
                    u.currentTarget.setAttribute("data-swipe", "start")
                }),
                onSwipeMove: ve(e.onSwipeMove, u => {
                    const {
                        x: c,
                        y: p
                    } = u.detail.delta;
                    u.currentTarget.setAttribute("data-swipe", "move"), u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${c}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${p}px`)
                }),
                onSwipeCancel: ve(e.onSwipeCancel, u => {
                    u.currentTarget.setAttribute("data-swipe", "cancel"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
                }),
                onSwipeEnd: ve(e.onSwipeEnd, u => {
                    const {
                        x: c,
                        y: p
                    } = u.detail.delta;
                    u.currentTarget.setAttribute("data-swipe", "end"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${c}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${p}px`), a(!1)
                })
            })
        })
    });
Xh.displayName = ui;
var [I0, D0] = Hh(ui, {
    onClose() {}
}), z0 = w.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: o,
        open: i,
        onClose: s,
        onEscapeKeyDown: l,
        onPause: a,
        onResume: u,
        onSwipeStart: c,
        onSwipeMove: p,
        onSwipeCancel: m,
        onSwipeEnd: d,
        ...x
    } = e, v = Ks(ui, n), [y, h] = w.useState(null), f = Et(t, L => h(L)), g = w.useRef(null), E = w.useRef(null), C = o || v.duration, k = w.useRef(0), b = w.useRef(C), R = w.useRef(0), {
        onToastAdd: A,
        onToastRemove: O
    } = v, F = Rn(() => {
        var X;
        (y == null ? void 0 : y.contains(document.activeElement)) && ((X = v.viewport) == null || X.focus()), s()
    }), D = w.useCallback(L => {
        !L || L === 1 / 0 || (window.clearTimeout(R.current), k.current = new Date().getTime(), R.current = window.setTimeout(F, L))
    }, [F]);
    w.useEffect(() => {
        const L = v.viewport;
        if (L) {
            const X = () => {
                    D(b.current), u == null || u()
                },
                $ = () => {
                    const W = new Date().getTime() - k.current;
                    b.current = b.current - W, window.clearTimeout(R.current), a == null || a()
                };
            return L.addEventListener(Ia, $), L.addEventListener(Da, X), () => {
                L.removeEventListener(Ia, $), L.removeEventListener(Da, X)
            }
        }
    }, [v.viewport, C, a, u, D]), w.useEffect(() => {
        i && !v.isClosePausedRef.current && D(C)
    }, [i, C, v.isClosePausedRef, D]), w.useEffect(() => (A(), () => O()), [A, O]);
    const Q = w.useMemo(() => y ? rm(y) : null, [y]);
    return v.viewport ? S.jsxs(S.Fragment, {
        children: [Q && S.jsx(F0, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: Q
        }), S.jsx(I0, {
            scope: n,
            onClose: F,
            children: ai.createPortal(S.jsx(Gu.ItemSlot, {
                scope: n,
                children: S.jsx(m0, {
                    asChild: !0,
                    onEscapeKeyDown: ve(l, () => {
                        v.isFocusedToastEscapeKeyDownRef.current || F(), v.isFocusedToastEscapeKeyDownRef.current = !1
                    }),
                    children: S.jsx(We.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": i ? "open" : "closed",
                        "data-swipe-direction": v.swipeDirection,
                        ...x,
                        ref: f,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: ve(e.onKeyDown, L => {
                            L.key === "Escape" && (l == null || l(L.nativeEvent), L.nativeEvent.defaultPrevented || (v.isFocusedToastEscapeKeyDownRef.current = !0, F()))
                        }),
                        onPointerDown: ve(e.onPointerDown, L => {
                            L.button === 0 && (g.current = {
                                x: L.clientX,
                                y: L.clientY
                            })
                        }),
                        onPointerMove: ve(e.onPointerMove, L => {
                            if (!g.current) return;
                            const X = L.clientX - g.current.x,
                                $ = L.clientY - g.current.y,
                                W = !!E.current,
                                T = ["left", "right"].includes(v.swipeDirection),
                                N = ["left", "up"].includes(v.swipeDirection) ? Math.min : Math.max,
                                M = T ? N(0, X) : 0,
                                V = T ? 0 : N(0, $),
                                z = L.pointerType === "touch" ? 10 : 2,
                                K = {
                                    x: M,
                                    y: V
                                },
                                G = {
                                    originalEvent: L,
                                    delta: K
                                };
                            W ? (E.current = K, Ai(A0, p, G, {
                                discrete: !1
                            })) : Rd(K, v.swipeDirection, z) ? (E.current = K, Ai(O0, c, G, {
                                discrete: !1
                            }), L.target.setPointerCapture(L.pointerId)) : (Math.abs(X) > z || Math.abs($) > z) && (g.current = null)
                        }),
                        onPointerUp: ve(e.onPointerUp, L => {
                            const X = E.current,
                                $ = L.target;
                            if ($.hasPointerCapture(L.pointerId) && $.releasePointerCapture(L.pointerId), E.current = null, g.current = null, X) {
                                const W = L.currentTarget,
                                    T = {
                                        originalEvent: L,
                                        delta: X
                                    };
                                Rd(X, v.swipeDirection, v.swipeThreshold) ? Ai(M0, d, T, {
                                    discrete: !0
                                }) : Ai(L0, m, T, {
                                    discrete: !0
                                }), W.addEventListener("click", N => N.preventDefault(), {
                                    once: !0
                                })
                            }
                        })
                    })
                })
            }), v.viewport)
        })]
    }) : null
}), F0 = e => {
    const {
        __scopeToast: t,
        children: n,
        ...r
    } = e, o = Ks(ui, t), [i, s] = w.useState(!1), [l, a] = w.useState(!1);
    return U0(() => s(!0)), w.useEffect(() => {
        const u = window.setTimeout(() => a(!0), 1e3);
        return () => window.clearTimeout(u)
    }, []), l ? null : S.jsx(Wh, {
        asChild: !0,
        children: S.jsx(Qs, { ...r,
            children: i && S.jsxs(S.Fragment, {
                children: [o.label, " ", n]
            })
        })
    })
}, $0 = "ToastTitle", qh = w.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        ...r
    } = e;
    return S.jsx(We.div, { ...r,
        ref: t
    })
});
qh.displayName = $0;
var B0 = "ToastDescription",
    Zh = w.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            ...r
        } = e;
        return S.jsx(We.div, { ...r,
            ref: t
        })
    });
Zh.displayName = B0;
var Jh = "ToastAction",
    em = w.forwardRef((e, t) => {
        const {
            altText: n,
            ...r
        } = e;
        return n.trim() ? S.jsx(nm, {
            altText: n,
            asChild: !0,
            children: S.jsx(Xu, { ...r,
                ref: t
            })
        }) : (console.error(`Invalid prop \`altText\` supplied to \`${Jh}\`. Expected non-empty \`string\`.`), null)
    });
em.displayName = Jh;
var tm = "ToastClose",
    Xu = w.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            ...r
        } = e, o = D0(tm, n);
        return S.jsx(nm, {
            asChild: !0,
            children: S.jsx(We.button, {
                type: "button",
                ...r,
                ref: t,
                onClick: ve(e.onClick, o.onClose)
            })
        })
    });
Xu.displayName = tm;
var nm = w.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        altText: r,
        ...o
    } = e;
    return S.jsx(We.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t
    })
});

function rm(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), V0(r)) {
            const o = r.ariaHidden || r.hidden || r.style.display === "none",
                i = r.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (i) {
                    const s = r.dataset.radixToastAnnounceAlt;
                    s && t.push(s)
                } else t.push(...rm(r))
        }
    }), t
}

function Ai(e, t, n, {
    discrete: r
}) {
    const o = n.originalEvent.currentTarget,
        i = new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: n
        });
    t && o.addEventListener(e, t, {
        once: !0
    }), r ? $h(o, i) : o.dispatchEvent(i)
}
var Rd = (e, t, n = 0) => {
    const r = Math.abs(e.x),
        o = Math.abs(e.y),
        i = r > o;
    return t === "left" || t === "right" ? i && r > n : !i && o > n
};

function U0(e = () => {}) {
    const t = Rn(e);
    _n(() => {
        let n = 0,
            r = 0;
        return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
            window.cancelAnimationFrame(n), window.cancelAnimationFrame(r)
        }
    }, [t])
}

function V0(e) {
    return e.nodeType === e.ELEMENT_NODE
}

function W0(e) {
    const t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: r => {
                const o = r.tagName === "INPUT" && r.type === "hidden";
                return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; n.nextNode();) t.push(n.currentNode);
    return t
}

function Dl(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(), document.activeElement !== t))
}
var H0 = Qh,
    om = Yh,
    im = Xh,
    sm = qh,
    lm = Zh,
    am = em,
    um = Xu;

function cm(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++) e[t] && (n = cm(e[t])) && (r && (r += " "), r += n)
        } else
            for (n in e) e[n] && (r && (r += " "), r += n);
    return r
}

function dm() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)(e = arguments[n]) && (t = cm(e)) && (r && (r += " "), r += t);
    return r
}
const _d = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e,
    jd = dm,
    Q0 = (e, t) => n => {
        var r;
        if ((t == null ? void 0 : t.variants) == null) return jd(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
        const {
            variants: o,
            defaultVariants: i
        } = t, s = Object.keys(o).map(u => {
            const c = n == null ? void 0 : n[u],
                p = i == null ? void 0 : i[u];
            if (c === null) return null;
            const m = _d(c) || _d(p);
            return o[u][m]
        }), l = n && Object.entries(n).reduce((u, c) => {
            let [p, m] = c;
            return m === void 0 || (u[p] = m), u
        }, {}), a = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, c) => {
            let {
                class: p,
                className: m,
                ...d
            } = c;
            return Object.entries(d).every(x => {
                let [v, y] = x;
                return Array.isArray(y) ? y.includes({ ...i,
                    ...l
                }[v]) : { ...i,
                    ...l
                }[v] === y
            }) ? [...u, p, m] : u
        }, []);
        return jd(e, s, a, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
    };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K0 = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    fm = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Y0 = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const G0 = w.forwardRef(({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: i,
    iconNode: s,
    ...l
}, a) => w.createElement("svg", {
    ref: a,
    ...Y0,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: fm("lucide", o),
    ...l
}, [...s.map(([u, c]) => w.createElement(u, c)), ...Array.isArray(i) ? i : [i]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lt = (e, t) => {
    const n = w.forwardRef(({
        className: r,
        ...o
    }, i) => w.createElement(G0, {
        ref: i,
        iconNode: t,
        className: fm(`lucide-${K0(e)}`, r),
        ...o
    }));
    return n.displayName = `${e}`, n
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X0 = lt("ChevronDown", [
    ["path", {
        d: "m6 9 6 6 6-6",
        key: "qrunsl"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Od = lt("ChevronLeft", [
    ["path", {
        d: "m15 18-6-6 6-6",
        key: "1wnfg3"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ad = lt("ChevronRight", [
    ["path", {
        d: "m9 18 6-6-6-6",
        key: "mthhwq"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q0 = lt("ChevronUp", [
    ["path", {
        d: "m18 15-6-6-6 6",
        key: "153udz"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ld = lt("Eye", [
    ["path", {
        d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
        key: "1nclc0"
    }],
    ["circle", {
        cx: "12",
        cy: "12",
        r: "3",
        key: "1v7zrd"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Md = lt("Film", [
    ["rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2",
        key: "afitv7"
    }],
    ["path", {
        d: "M7 3v18",
        key: "bbkbws"
    }],
    ["path", {
        d: "M3 7.5h4",
        key: "zfgn84"
    }],
    ["path", {
        d: "M3 12h18",
        key: "1i2n21"
    }],
    ["path", {
        d: "M3 16.5h4",
        key: "1230mu"
    }],
    ["path", {
        d: "M17 3v18",
        key: "in4fa5"
    }],
    ["path", {
        d: "M17 7.5h4",
        key: "myr1c1"
    }],
    ["path", {
        d: "M17 16.5h4",
        key: "go4c1d"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z0 = lt("Globe", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["path", {
        d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
        key: "13o1zl"
    }],
    ["path", {
        d: "M2 12h20",
        key: "9i4pu4"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J0 = lt("Heart", [
    ["path", {
        d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
        key: "c3ymky"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Id = lt("Image", [
    ["rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2",
        ry: "2",
        key: "1m3agn"
    }],
    ["circle", {
        cx: "9",
        cy: "9",
        r: "2",
        key: "af1f0g"
    }],
    ["path", {
        d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
        key: "1xmnt7"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ew = lt("Instagram", [
    ["rect", {
        width: "20",
        height: "20",
        x: "2",
        y: "2",
        rx: "5",
        ry: "5",
        key: "2e1cvw"
    }],
    ["path", {
        d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
        key: "9exkf1"
    }],
    ["line", {
        x1: "17.5",
        x2: "17.51",
        y1: "6.5",
        y2: "6.5",
        key: "r4j83e"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dd = lt("Lock", [
    ["rect", {
        width: "18",
        height: "11",
        x: "3",
        y: "11",
        rx: "2",
        ry: "2",
        key: "1w4ew1"
    }],
    ["path", {
        d: "M7 11V7a5 5 0 0 1 10 0v4",
        key: "fwvmzm"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pm = lt("X", [
        ["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }],
        ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]
    ]),
    qu = "-",
    tw = e => {
        const t = rw(e),
            {
                conflictingClassGroups: n,
                conflictingClassGroupModifiers: r
            } = e;
        return {
            getClassGroupId: s => {
                const l = s.split(qu);
                return l[0] === "" && l.length !== 1 && l.shift(), hm(l, t) || nw(s)
            },
            getConflictingClassGroupIds: (s, l) => {
                const a = n[s] || [];
                return l && r[s] ? [...a, ...r[s]] : a
            }
        }
    },
    hm = (e, t) => {
        var s;
        if (e.length === 0) return t.classGroupId;
        const n = e[0],
            r = t.nextPart.get(n),
            o = r ? hm(e.slice(1), r) : void 0;
        if (o) return o;
        if (t.validators.length === 0) return;
        const i = e.join(qu);
        return (s = t.validators.find(({
            validator: l
        }) => l(i))) == null ? void 0 : s.classGroupId
    },
    zd = /^\[(.+)\]$/,
    nw = e => {
        if (zd.test(e)) {
            const t = zd.exec(e)[1],
                n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
            if (n) return "arbitrary.." + n
        }
    },
    rw = e => {
        const {
            theme: t,
            prefix: n
        } = e, r = {
            nextPart: new Map,
            validators: []
        };
        return iw(Object.entries(e.classGroups), n).forEach(([i, s]) => {
            Fa(s, r, i, t)
        }), r
    },
    Fa = (e, t, n, r) => {
        e.forEach(o => {
            if (typeof o == "string") {
                const i = o === "" ? t : Fd(t, o);
                i.classGroupId = n;
                return
            }
            if (typeof o == "function") {
                if (ow(o)) {
                    Fa(o(r), t, n, r);
                    return
                }
                t.validators.push({
                    validator: o,
                    classGroupId: n
                });
                return
            }
            Object.entries(o).forEach(([i, s]) => {
                Fa(s, Fd(t, i), n, r)
            })
        })
    },
    Fd = (e, t) => {
        let n = e;
        return t.split(qu).forEach(r => {
            n.nextPart.has(r) || n.nextPart.set(r, {
                nextPart: new Map,
                validators: []
            }), n = n.nextPart.get(r)
        }), n
    },
    ow = e => e.isThemeGetter,
    iw = (e, t) => t ? e.map(([n, r]) => {
        const o = r.map(i => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([s, l]) => [t + s, l])) : i);
        return [n, o]
    }) : e,
    sw = e => {
        if (e < 1) return {
            get: () => {},
            set: () => {}
        };
        let t = 0,
            n = new Map,
            r = new Map;
        const o = (i, s) => {
            n.set(i, s), t++, t > e && (t = 0, r = n, n = new Map)
        };
        return {
            get(i) {
                let s = n.get(i);
                if (s !== void 0) return s;
                if ((s = r.get(i)) !== void 0) return o(i, s), s
            },
            set(i, s) {
                n.has(i) ? n.set(i, s) : o(i, s)
            }
        }
    },
    mm = "!",
    lw = e => {
        const {
            separator: t,
            experimentalParseClassName: n
        } = e, r = t.length === 1, o = t[0], i = t.length, s = l => {
            const a = [];
            let u = 0,
                c = 0,
                p;
            for (let y = 0; y < l.length; y++) {
                let h = l[y];
                if (u === 0) {
                    if (h === o && (r || l.slice(y, y + i) === t)) {
                        a.push(l.slice(c, y)), c = y + i;
                        continue
                    }
                    if (h === "/") {
                        p = y;
                        continue
                    }
                }
                h === "[" ? u++ : h === "]" && u--
            }
            const m = a.length === 0 ? l : l.substring(c),
                d = m.startsWith(mm),
                x = d ? m.substring(1) : m,
                v = p && p > c ? p - c : void 0;
            return {
                modifiers: a,
                hasImportantModifier: d,
                baseClassName: x,
                maybePostfixModifierPosition: v
            }
        };
        return n ? l => n({
            className: l,
            parseClassName: s
        }) : s
    },
    aw = e => {
        if (e.length <= 1) return e;
        const t = [];
        let n = [];
        return e.forEach(r => {
            r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r)
        }), t.push(...n.sort()), t
    },
    uw = e => ({
        cache: sw(e.cacheSize),
        parseClassName: lw(e),
        ...tw(e)
    }),
    cw = /\s+/,
    dw = (e, t) => {
        const {
            parseClassName: n,
            getClassGroupId: r,
            getConflictingClassGroupIds: o
        } = t, i = [], s = e.trim().split(cw);
        let l = "";
        for (let a = s.length - 1; a >= 0; a -= 1) {
            const u = s[a],
                {
                    modifiers: c,
                    hasImportantModifier: p,
                    baseClassName: m,
                    maybePostfixModifierPosition: d
                } = n(u);
            let x = !!d,
                v = r(x ? m.substring(0, d) : m);
            if (!v) {
                if (!x) {
                    l = u + (l.length > 0 ? " " + l : l);
                    continue
                }
                if (v = r(m), !v) {
                    l = u + (l.length > 0 ? " " + l : l);
                    continue
                }
                x = !1
            }
            const y = aw(c).join(":"),
                h = p ? y + mm : y,
                f = h + v;
            if (i.includes(f)) continue;
            i.push(f);
            const g = o(v, x);
            for (let E = 0; E < g.length; ++E) {
                const C = g[E];
                i.push(h + C)
            }
            l = u + (l.length > 0 ? " " + l : l)
        }
        return l
    };

function fw() {
    let e = 0,
        t, n, r = "";
    for (; e < arguments.length;)(t = arguments[e++]) && (n = gm(t)) && (r && (r += " "), r += n);
    return r
}
const gm = e => {
    if (typeof e == "string") return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++) e[r] && (t = gm(e[r])) && (n && (n += " "), n += t);
    return n
};

function pw(e, ...t) {
    let n, r, o, i = s;

    function s(a) {
        const u = t.reduce((c, p) => p(c), e());
        return n = uw(u), r = n.cache.get, o = n.cache.set, i = l, l(a)
    }

    function l(a) {
        const u = r(a);
        if (u) return u;
        const c = dw(a, n);
        return o(a, c), c
    }
    return function() {
        return i(fw.apply(null, arguments))
    }
}
const re = e => {
        const t = n => n[e] || [];
        return t.isThemeGetter = !0, t
    },
    vm = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    hw = /^\d+\/\d+$/,
    mw = new Set(["px", "full", "screen"]),
    gw = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    vw = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    yw = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    ww = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    xw = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    Mt = e => Mr(e) || mw.has(e) || hw.test(e),
    rn = e => oo(e, "length", Nw),
    Mr = e => !!e && !Number.isNaN(Number(e)),
    zl = e => oo(e, "number", Mr),
    yo = e => !!e && Number.isInteger(Number(e)),
    Sw = e => e.endsWith("%") && Mr(e.slice(0, -1)),
    H = e => vm.test(e),
    on = e => gw.test(e),
    Ew = new Set(["length", "size", "percentage"]),
    Cw = e => oo(e, Ew, ym),
    kw = e => oo(e, "position", ym),
    bw = new Set(["image", "url"]),
    Pw = e => oo(e, bw, _w),
    Tw = e => oo(e, "", Rw),
    wo = () => !0,
    oo = (e, t, n) => {
        const r = vm.exec(e);
        return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
    },
    Nw = e => vw.test(e) && !yw.test(e),
    ym = () => !1,
    Rw = e => ww.test(e),
    _w = e => xw.test(e),
    jw = () => {
        const e = re("colors"),
            t = re("spacing"),
            n = re("blur"),
            r = re("brightness"),
            o = re("borderColor"),
            i = re("borderRadius"),
            s = re("borderSpacing"),
            l = re("borderWidth"),
            a = re("contrast"),
            u = re("grayscale"),
            c = re("hueRotate"),
            p = re("invert"),
            m = re("gap"),
            d = re("gradientColorStops"),
            x = re("gradientColorStopPositions"),
            v = re("inset"),
            y = re("margin"),
            h = re("opacity"),
            f = re("padding"),
            g = re("saturate"),
            E = re("scale"),
            C = re("sepia"),
            k = re("skew"),
            b = re("space"),
            R = re("translate"),
            A = () => ["auto", "contain", "none"],
            O = () => ["auto", "hidden", "clip", "visible", "scroll"],
            F = () => ["auto", H, t],
            D = () => [H, t],
            Q = () => ["", Mt, rn],
            L = () => ["auto", Mr, H],
            X = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
            $ = () => ["solid", "dashed", "dotted", "double", "none"],
            W = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
            T = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
            N = () => ["", "0", H],
            M = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            V = () => [Mr, H];
        return {
            cacheSize: 500,
            separator: ":",
            theme: {
                colors: [wo],
                spacing: [Mt, rn],
                blur: ["none", "", on, H],
                brightness: V(),
                borderColor: [e],
                borderRadius: ["none", "", "full", on, H],
                borderSpacing: D(),
                borderWidth: Q(),
                contrast: V(),
                grayscale: N(),
                hueRotate: V(),
                invert: N(),
                gap: D(),
                gradientColorStops: [e],
                gradientColorStopPositions: [Sw, rn],
                inset: F(),
                margin: F(),
                opacity: V(),
                padding: D(),
                saturate: V(),
                scale: V(),
                sepia: N(),
                skew: V(),
                space: D(),
                translate: D()
            },
            classGroups: {
                aspect: [{
                    aspect: ["auto", "square", "video", H]
                }],
                container: ["container"],
                columns: [{
                    columns: [on]
                }],
                "break-after": [{
                    "break-after": M()
                }],
                "break-before": [{
                    "break-before": M()
                }],
                "break-inside": [{
                    "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                }],
                "box-decoration": [{
                    "box-decoration": ["slice", "clone"]
                }],
                box: [{
                    box: ["border", "content"]
                }],
                display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                float: [{
                    float: ["right", "left", "none", "start", "end"]
                }],
                clear: [{
                    clear: ["left", "right", "both", "none", "start", "end"]
                }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{
                    object: ["contain", "cover", "fill", "none", "scale-down"]
                }],
                "object-position": [{
                    object: [...X(), H]
                }],
                overflow: [{
                    overflow: O()
                }],
                "overflow-x": [{
                    "overflow-x": O()
                }],
                "overflow-y": [{
                    "overflow-y": O()
                }],
                overscroll: [{
                    overscroll: A()
                }],
                "overscroll-x": [{
                    "overscroll-x": A()
                }],
                "overscroll-y": [{
                    "overscroll-y": A()
                }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{
                    inset: [v]
                }],
                "inset-x": [{
                    "inset-x": [v]
                }],
                "inset-y": [{
                    "inset-y": [v]
                }],
                start: [{
                    start: [v]
                }],
                end: [{
                    end: [v]
                }],
                top: [{
                    top: [v]
                }],
                right: [{
                    right: [v]
                }],
                bottom: [{
                    bottom: [v]
                }],
                left: [{
                    left: [v]
                }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{
                    z: ["auto", yo, H]
                }],
                basis: [{
                    basis: F()
                }],
                "flex-direction": [{
                    flex: ["row", "row-reverse", "col", "col-reverse"]
                }],
                "flex-wrap": [{
                    flex: ["wrap", "wrap-reverse", "nowrap"]
                }],
                flex: [{
                    flex: ["1", "auto", "initial", "none", H]
                }],
                grow: [{
                    grow: N()
                }],
                shrink: [{
                    shrink: N()
                }],
                order: [{
                    order: ["first", "last", "none", yo, H]
                }],
                "grid-cols": [{
                    "grid-cols": [wo]
                }],
                "col-start-end": [{
                    col: ["auto", {
                        span: ["full", yo, H]
                    }, H]
                }],
                "col-start": [{
                    "col-start": L()
                }],
                "col-end": [{
                    "col-end": L()
                }],
                "grid-rows": [{
                    "grid-rows": [wo]
                }],
                "row-start-end": [{
                    row: ["auto", {
                        span: [yo, H]
                    }, H]
                }],
                "row-start": [{
                    "row-start": L()
                }],
                "row-end": [{
                    "row-end": L()
                }],
                "grid-flow": [{
                    "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                }],
                "auto-cols": [{
                    "auto-cols": ["auto", "min", "max", "fr", H]
                }],
                "auto-rows": [{
                    "auto-rows": ["auto", "min", "max", "fr", H]
                }],
                gap: [{
                    gap: [m]
                }],
                "gap-x": [{
                    "gap-x": [m]
                }],
                "gap-y": [{
                    "gap-y": [m]
                }],
                "justify-content": [{
                    justify: ["normal", ...T()]
                }],
                "justify-items": [{
                    "justify-items": ["start", "end", "center", "stretch"]
                }],
                "justify-self": [{
                    "justify-self": ["auto", "start", "end", "center", "stretch"]
                }],
                "align-content": [{
                    content: ["normal", ...T(), "baseline"]
                }],
                "align-items": [{
                    items: ["start", "end", "center", "baseline", "stretch"]
                }],
                "align-self": [{
                    self: ["auto", "start", "end", "center", "stretch", "baseline"]
                }],
                "place-content": [{
                    "place-content": [...T(), "baseline"]
                }],
                "place-items": [{
                    "place-items": ["start", "end", "center", "baseline", "stretch"]
                }],
                "place-self": [{
                    "place-self": ["auto", "start", "end", "center", "stretch"]
                }],
                p: [{
                    p: [f]
                }],
                px: [{
                    px: [f]
                }],
                py: [{
                    py: [f]
                }],
                ps: [{
                    ps: [f]
                }],
                pe: [{
                    pe: [f]
                }],
                pt: [{
                    pt: [f]
                }],
                pr: [{
                    pr: [f]
                }],
                pb: [{
                    pb: [f]
                }],
                pl: [{
                    pl: [f]
                }],
                m: [{
                    m: [y]
                }],
                mx: [{
                    mx: [y]
                }],
                my: [{
                    my: [y]
                }],
                ms: [{
                    ms: [y]
                }],
                me: [{
                    me: [y]
                }],
                mt: [{
                    mt: [y]
                }],
                mr: [{
                    mr: [y]
                }],
                mb: [{
                    mb: [y]
                }],
                ml: [{
                    ml: [y]
                }],
                "space-x": [{
                    "space-x": [b]
                }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{
                    "space-y": [b]
                }],
                "space-y-reverse": ["space-y-reverse"],
                w: [{
                    w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", H, t]
                }],
                "min-w": [{
                    "min-w": [H, t, "min", "max", "fit"]
                }],
                "max-w": [{
                    "max-w": [H, t, "none", "full", "min", "max", "fit", "prose", {
                        screen: [on]
                    }, on]
                }],
                h: [{
                    h: [H, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "min-h": [{
                    "min-h": [H, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "max-h": [{
                    "max-h": [H, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                size: [{
                    size: [H, t, "auto", "min", "max", "fit"]
                }],
                "font-size": [{
                    text: ["base", on, rn]
                }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{
                    font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", zl]
                }],
                "font-family": [{
                    font: [wo]
                }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{
                    tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", H]
                }],
                "line-clamp": [{
                    "line-clamp": ["none", Mr, zl]
                }],
                leading: [{
                    leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Mt, H]
                }],
                "list-image": [{
                    "list-image": ["none", H]
                }],
                "list-style-type": [{
                    list: ["none", "disc", "decimal", H]
                }],
                "list-style-position": [{
                    list: ["inside", "outside"]
                }],
                "placeholder-color": [{
                    placeholder: [e]
                }],
                "placeholder-opacity": [{
                    "placeholder-opacity": [h]
                }],
                "text-alignment": [{
                    text: ["left", "center", "right", "justify", "start", "end"]
                }],
                "text-color": [{
                    text: [e]
                }],
                "text-opacity": [{
                    "text-opacity": [h]
                }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{
                    decoration: [...$(), "wavy"]
                }],
                "text-decoration-thickness": [{
                    decoration: ["auto", "from-font", Mt, rn]
                }],
                "underline-offset": [{
                    "underline-offset": ["auto", Mt, H]
                }],
                "text-decoration-color": [{
                    decoration: [e]
                }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{
                    text: ["wrap", "nowrap", "balance", "pretty"]
                }],
                indent: [{
                    indent: D()
                }],
                "vertical-align": [{
                    align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", H]
                }],
                whitespace: [{
                    whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                }],
                break: [{
                    break: ["normal", "words", "all", "keep"]
                }],
                hyphens: [{
                    hyphens: ["none", "manual", "auto"]
                }],
                content: [{
                    content: ["none", H]
                }],
                "bg-attachment": [{
                    bg: ["fixed", "local", "scroll"]
                }],
                "bg-clip": [{
                    "bg-clip": ["border", "padding", "content", "text"]
                }],
                "bg-opacity": [{
                    "bg-opacity": [h]
                }],
                "bg-origin": [{
                    "bg-origin": ["border", "padding", "content"]
                }],
                "bg-position": [{
                    bg: [...X(), kw]
                }],
                "bg-repeat": [{
                    bg: ["no-repeat", {
                        repeat: ["", "x", "y", "round", "space"]
                    }]
                }],
                "bg-size": [{
                    bg: ["auto", "cover", "contain", Cw]
                }],
                "bg-image": [{
                    bg: ["none", {
                        "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                    }, Pw]
                }],
                "bg-color": [{
                    bg: [e]
                }],
                "gradient-from-pos": [{
                    from: [x]
                }],
                "gradient-via-pos": [{
                    via: [x]
                }],
                "gradient-to-pos": [{
                    to: [x]
                }],
                "gradient-from": [{
                    from: [d]
                }],
                "gradient-via": [{
                    via: [d]
                }],
                "gradient-to": [{
                    to: [d]
                }],
                rounded: [{
                    rounded: [i]
                }],
                "rounded-s": [{
                    "rounded-s": [i]
                }],
                "rounded-e": [{
                    "rounded-e": [i]
                }],
                "rounded-t": [{
                    "rounded-t": [i]
                }],
                "rounded-r": [{
                    "rounded-r": [i]
                }],
                "rounded-b": [{
                    "rounded-b": [i]
                }],
                "rounded-l": [{
                    "rounded-l": [i]
                }],
                "rounded-ss": [{
                    "rounded-ss": [i]
                }],
                "rounded-se": [{
                    "rounded-se": [i]
                }],
                "rounded-ee": [{
                    "rounded-ee": [i]
                }],
                "rounded-es": [{
                    "rounded-es": [i]
                }],
                "rounded-tl": [{
                    "rounded-tl": [i]
                }],
                "rounded-tr": [{
                    "rounded-tr": [i]
                }],
                "rounded-br": [{
                    "rounded-br": [i]
                }],
                "rounded-bl": [{
                    "rounded-bl": [i]
                }],
                "border-w": [{
                    border: [l]
                }],
                "border-w-x": [{
                    "border-x": [l]
                }],
                "border-w-y": [{
                    "border-y": [l]
                }],
                "border-w-s": [{
                    "border-s": [l]
                }],
                "border-w-e": [{
                    "border-e": [l]
                }],
                "border-w-t": [{
                    "border-t": [l]
                }],
                "border-w-r": [{
                    "border-r": [l]
                }],
                "border-w-b": [{
                    "border-b": [l]
                }],
                "border-w-l": [{
                    "border-l": [l]
                }],
                "border-opacity": [{
                    "border-opacity": [h]
                }],
                "border-style": [{
                    border: [...$(), "hidden"]
                }],
                "divide-x": [{
                    "divide-x": [l]
                }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{
                    "divide-y": [l]
                }],
                "divide-y-reverse": ["divide-y-reverse"],
                "divide-opacity": [{
                    "divide-opacity": [h]
                }],
                "divide-style": [{
                    divide: $()
                }],
                "border-color": [{
                    border: [o]
                }],
                "border-color-x": [{
                    "border-x": [o]
                }],
                "border-color-y": [{
                    "border-y": [o]
                }],
                "border-color-s": [{
                    "border-s": [o]
                }],
                "border-color-e": [{
                    "border-e": [o]
                }],
                "border-color-t": [{
                    "border-t": [o]
                }],
                "border-color-r": [{
                    "border-r": [o]
                }],
                "border-color-b": [{
                    "border-b": [o]
                }],
                "border-color-l": [{
                    "border-l": [o]
                }],
                "divide-color": [{
                    divide: [o]
                }],
                "outline-style": [{
                    outline: ["", ...$()]
                }],
                "outline-offset": [{
                    "outline-offset": [Mt, H]
                }],
                "outline-w": [{
                    outline: [Mt, rn]
                }],
                "outline-color": [{
                    outline: [e]
                }],
                "ring-w": [{
                    ring: Q()
                }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{
                    ring: [e]
                }],
                "ring-opacity": [{
                    "ring-opacity": [h]
                }],
                "ring-offset-w": [{
                    "ring-offset": [Mt, rn]
                }],
                "ring-offset-color": [{
                    "ring-offset": [e]
                }],
                shadow: [{
                    shadow: ["", "inner", "none", on, Tw]
                }],
                "shadow-color": [{
                    shadow: [wo]
                }],
                opacity: [{
                    opacity: [h]
                }],
                "mix-blend": [{
                    "mix-blend": [...W(), "plus-lighter", "plus-darker"]
                }],
                "bg-blend": [{
                    "bg-blend": W()
                }],
                filter: [{
                    filter: ["", "none"]
                }],
                blur: [{
                    blur: [n]
                }],
                brightness: [{
                    brightness: [r]
                }],
                contrast: [{
                    contrast: [a]
                }],
                "drop-shadow": [{
                    "drop-shadow": ["", "none", on, H]
                }],
                grayscale: [{
                    grayscale: [u]
                }],
                "hue-rotate": [{
                    "hue-rotate": [c]
                }],
                invert: [{
                    invert: [p]
                }],
                saturate: [{
                    saturate: [g]
                }],
                sepia: [{
                    sepia: [C]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": ["", "none"]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": [n]
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [r]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [a]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": [u]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [c]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": [p]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [h]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [g]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": [C]
                }],
                "border-collapse": [{
                    border: ["collapse", "separate"]
                }],
                "border-spacing": [{
                    "border-spacing": [s]
                }],
                "border-spacing-x": [{
                    "border-spacing-x": [s]
                }],
                "border-spacing-y": [{
                    "border-spacing-y": [s]
                }],
                "table-layout": [{
                    table: ["auto", "fixed"]
                }],
                caption: [{
                    caption: ["top", "bottom"]
                }],
                transition: [{
                    transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", H]
                }],
                duration: [{
                    duration: V()
                }],
                ease: [{
                    ease: ["linear", "in", "out", "in-out", H]
                }],
                delay: [{
                    delay: V()
                }],
                animate: [{
                    animate: ["none", "spin", "ping", "pulse", "bounce", H]
                }],
                transform: [{
                    transform: ["", "gpu", "none"]
                }],
                scale: [{
                    scale: [E]
                }],
                "scale-x": [{
                    "scale-x": [E]
                }],
                "scale-y": [{
                    "scale-y": [E]
                }],
                rotate: [{
                    rotate: [yo, H]
                }],
                "translate-x": [{
                    "translate-x": [R]
                }],
                "translate-y": [{
                    "translate-y": [R]
                }],
                "skew-x": [{
                    "skew-x": [k]
                }],
                "skew-y": [{
                    "skew-y": [k]
                }],
                "transform-origin": [{
                    origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", H]
                }],
                accent: [{
                    accent: ["auto", e]
                }],
                appearance: [{
                    appearance: ["none", "auto"]
                }],
                cursor: [{
                    cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", H]
                }],
                "caret-color": [{
                    caret: [e]
                }],
                "pointer-events": [{
                    "pointer-events": ["none", "auto"]
                }],
                resize: [{
                    resize: ["none", "y", "x", ""]
                }],
                "scroll-behavior": [{
                    scroll: ["auto", "smooth"]
                }],
                "scroll-m": [{
                    "scroll-m": D()
                }],
                "scroll-mx": [{
                    "scroll-mx": D()
                }],
                "scroll-my": [{
                    "scroll-my": D()
                }],
                "scroll-ms": [{
                    "scroll-ms": D()
                }],
                "scroll-me": [{
                    "scroll-me": D()
                }],
                "scroll-mt": [{
                    "scroll-mt": D()
                }],
                "scroll-mr": [{
                    "scroll-mr": D()
                }],
                "scroll-mb": [{
                    "scroll-mb": D()
                }],
                "scroll-ml": [{
                    "scroll-ml": D()
                }],
                "scroll-p": [{
                    "scroll-p": D()
                }],
                "scroll-px": [{
                    "scroll-px": D()
                }],
                "scroll-py": [{
                    "scroll-py": D()
                }],
                "scroll-ps": [{
                    "scroll-ps": D()
                }],
                "scroll-pe": [{
                    "scroll-pe": D()
                }],
                "scroll-pt": [{
                    "scroll-pt": D()
                }],
                "scroll-pr": [{
                    "scroll-pr": D()
                }],
                "scroll-pb": [{
                    "scroll-pb": D()
                }],
                "scroll-pl": [{
                    "scroll-pl": D()
                }],
                "snap-align": [{
                    snap: ["start", "end", "center", "align-none"]
                }],
                "snap-stop": [{
                    snap: ["normal", "always"]
                }],
                "snap-type": [{
                    snap: ["none", "x", "y", "both"]
                }],
                "snap-strictness": [{
                    snap: ["mandatory", "proximity"]
                }],
                touch: [{
                    touch: ["auto", "none", "manipulation"]
                }],
                "touch-x": [{
                    "touch-pan": ["x", "left", "right"]
                }],
                "touch-y": [{
                    "touch-pan": ["y", "up", "down"]
                }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{
                    select: ["none", "text", "all", "auto"]
                }],
                "will-change": [{
                    "will-change": ["auto", "scroll", "contents", "transform", H]
                }],
                fill: [{
                    fill: [e, "none"]
                }],
                "stroke-w": [{
                    stroke: [Mt, rn, zl]
                }],
                stroke: [{
                    stroke: [e, "none"]
                }],
                sr: ["sr-only", "not-sr-only"],
                "forced-color-adjust": [{
                    "forced-color-adjust": ["auto", "none"]
                }]
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"]
            },
            conflictingClassGroupModifiers: {
                "font-size": ["leading"]
            }
        }
    },
    Ow = pw(jw);

function ar(...e) {
    return Ow(dm(e))
}
const Aw = H0,
    wm = w.forwardRef(({
        className: e,
        ...t
    }, n) => S.jsx(om, {
        ref: n,
        className: ar("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
        ...t
    }));
wm.displayName = om.displayName;
const Lw = Q0("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
        variants: {
            variant: {
                default: "border bg-background text-foreground",
                destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }),
    xm = w.forwardRef(({
        className: e,
        variant: t,
        ...n
    }, r) => S.jsx(im, {
        ref: r,
        className: ar(Lw({
            variant: t
        }), e),
        ...n
    }));
xm.displayName = im.displayName;
const Mw = w.forwardRef(({
    className: e,
    ...t
}, n) => S.jsx(am, {
    ref: n,
    className: ar("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", e),
    ...t
}));
Mw.displayName = am.displayName;
const Sm = w.forwardRef(({
    className: e,
    ...t
}, n) => S.jsx(um, {
    ref: n,
    className: ar("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: S.jsx(pm, {
        className: "h-4 w-4"
    })
}));
Sm.displayName = um.displayName;
const Em = w.forwardRef(({
    className: e,
    ...t
}, n) => S.jsx(sm, {
    ref: n,
    className: ar("text-sm font-semibold", e),
    ...t
}));
Em.displayName = sm.displayName;
const Cm = w.forwardRef(({
    className: e,
    ...t
}, n) => S.jsx(lm, {
    ref: n,
    className: ar("text-sm opacity-90", e),
    ...t
}));
Cm.displayName = lm.displayName;

function Iw() {
    const {
        toasts: e
    } = Jy();
    return S.jsxs(Aw, {
        children: [e.map(function({
            id: t,
            title: n,
            description: r,
            action: o,
            ...i
        }) {
            return S.jsxs(xm, { ...i,
                children: [S.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && S.jsx(Em, {
                        children: n
                    }), r && S.jsx(Cm, {
                        children: r
                    })]
                }), o, S.jsx(Sm, {})]
            }, t)
        }), S.jsx(wm, {})]
    })
}
var $d = ["light", "dark"],
    Dw = "(prefers-color-scheme: dark)",
    zw = w.createContext(void 0),
    Fw = {
        setTheme: e => {},
        themes: []
    },
    $w = () => {
        var e;
        return (e = w.useContext(zw)) != null ? e : Fw
    };
w.memo(({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: r,
    enableColorScheme: o,
    defaultTheme: i,
    value: s,
    attrs: l,
    nonce: a
}) => {
    let u = i === "system",
        c = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${l.map(x=>`'${x}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`,
        p = o ? $d.includes(i) && i ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "",
        m = (x, v = !1, y = !0) => {
            let h = s ? s[x] : x,
                f = v ? x + "|| ''" : `'${h}'`,
                g = "";
            return o && y && !v && $d.includes(x) && (g += `d.style.colorScheme = '${x}';`), n === "class" ? v || h ? g += `c.add(${f})` : g += "null" : h && (g += `d[s](n,${f})`), g
        },
        d = e ? `!function(){${c}${m(e)}}()` : r ? `!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${Dw}',m=window.matchMedia(t);if(m.media!==t||m.matches){${m("dark")}}else{${m("light")}}}else if(e){${s?`var x=${JSON.stringify(s)};`:""}${m(s?"x[e]":"e",!0)}}${u?"":"else{"+m(i,!1,!1)+"}"}${p}}catch(e){}}()` : `!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${s?`var x=${JSON.stringify(s)};`:""}${m(s?"x[e]":"e",!0)}}else{${m(i,!1,!1)};}${p}}catch(t){}}();`;
    return w.createElement("script", {
        nonce: a,
        dangerouslySetInnerHTML: {
            __html: d
        }
    })
});
var Bw = e => {
        switch (e) {
            case "success":
                return Ww;
            case "info":
                return Qw;
            case "warning":
                return Hw;
            case "error":
                return Kw;
            default:
                return null
        }
    },
    Uw = Array(12).fill(0),
    Vw = ({
        visible: e,
        className: t
    }) => j.createElement("div", {
        className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
        "data-visible": e
    }, j.createElement("div", {
        className: "sonner-spinner"
    }, Uw.map((n, r) => j.createElement("div", {
        className: "sonner-loading-bar",
        key: `spinner-bar-${r}`
    })))),
    Ww = j.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, j.createElement("path", {
        fillRule: "evenodd",
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
        clipRule: "evenodd"
    })),
    Hw = j.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, j.createElement("path", {
        fillRule: "evenodd",
        d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
        clipRule: "evenodd"
    })),
    Qw = j.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, j.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
        clipRule: "evenodd"
    })),
    Kw = j.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, j.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
        clipRule: "evenodd"
    })),
    Yw = j.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "12",
        height: "12",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, j.createElement("line", {
        x1: "18",
        y1: "6",
        x2: "6",
        y2: "18"
    }), j.createElement("line", {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18"
    })),
    Gw = () => {
        let [e, t] = j.useState(document.hidden);
        return j.useEffect(() => {
            let n = () => {
                t(document.hidden)
            };
            return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n)
        }, []), e
    },
    $a = 1,
    Xw = class {
        constructor() {
            this.subscribe = e => (this.subscribers.push(e), () => {
                let t = this.subscribers.indexOf(e);
                this.subscribers.splice(t, 1)
            }), this.publish = e => {
                this.subscribers.forEach(t => t(e))
            }, this.addToast = e => {
                this.publish(e), this.toasts = [...this.toasts, e]
            }, this.create = e => {
                var t;
                let {
                    message: n,
                    ...r
                } = e, o = typeof(e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : $a++, i = this.toasts.find(l => l.id === o), s = e.dismissible === void 0 ? !0 : e.dismissible;
                return this.dismissedToasts.has(o) && this.dismissedToasts.delete(o), i ? this.toasts = this.toasts.map(l => l.id === o ? (this.publish({ ...l,
                    ...e,
                    id: o,
                    title: n
                }), { ...l,
                    ...e,
                    id: o,
                    dismissible: s,
                    title: n
                }) : l) : this.addToast({
                    title: n,
                    ...r,
                    dismissible: s,
                    id: o
                }), o
            }, this.dismiss = e => (this.dismissedToasts.add(e), e || this.toasts.forEach(t => {
                this.subscribers.forEach(n => n({
                    id: t.id,
                    dismiss: !0
                }))
            }), this.subscribers.forEach(t => t({
                id: e,
                dismiss: !0
            })), e), this.message = (e, t) => this.create({ ...t,
                message: e
            }), this.error = (e, t) => this.create({ ...t,
                message: e,
                type: "error"
            }), this.success = (e, t) => this.create({ ...t,
                type: "success",
                message: e
            }), this.info = (e, t) => this.create({ ...t,
                type: "info",
                message: e
            }), this.warning = (e, t) => this.create({ ...t,
                type: "warning",
                message: e
            }), this.loading = (e, t) => this.create({ ...t,
                type: "loading",
                message: e
            }), this.promise = (e, t) => {
                if (!t) return;
                let n;
                t.loading !== void 0 && (n = this.create({ ...t,
                    promise: e,
                    type: "loading",
                    message: t.loading,
                    description: typeof t.description != "function" ? t.description : void 0
                }));
                let r = e instanceof Promise ? e : e(),
                    o = n !== void 0,
                    i, s = r.then(async a => {
                        if (i = ["resolve", a], j.isValidElement(a)) o = !1, this.create({
                            id: n,
                            type: "default",
                            message: a
                        });
                        else if (Zw(a) && !a.ok) {
                            o = !1;
                            let u = typeof t.error == "function" ? await t.error(`HTTP error! status: ${a.status}`) : t.error,
                                c = typeof t.description == "function" ? await t.description(`HTTP error! status: ${a.status}`) : t.description;
                            this.create({
                                id: n,
                                type: "error",
                                message: u,
                                description: c
                            })
                        } else if (t.success !== void 0) {
                            o = !1;
                            let u = typeof t.success == "function" ? await t.success(a) : t.success,
                                c = typeof t.description == "function" ? await t.description(a) : t.description;
                            this.create({
                                id: n,
                                type: "success",
                                message: u,
                                description: c
                            })
                        }
                    }).catch(async a => {
                        if (i = ["reject", a], t.error !== void 0) {
                            o = !1;
                            let u = typeof t.error == "function" ? await t.error(a) : t.error,
                                c = typeof t.description == "function" ? await t.description(a) : t.description;
                            this.create({
                                id: n,
                                type: "error",
                                message: u,
                                description: c
                            })
                        }
                    }).finally(() => {
                        var a;
                        o && (this.dismiss(n), n = void 0), (a = t.finally) == null || a.call(t)
                    }),
                    l = () => new Promise((a, u) => s.then(() => i[0] === "reject" ? u(i[1]) : a(i[1])).catch(u));
                return typeof n != "string" && typeof n != "number" ? {
                    unwrap: l
                } : Object.assign(n, {
                    unwrap: l
                })
            }, this.custom = (e, t) => {
                let n = (t == null ? void 0 : t.id) || $a++;
                return this.create({
                    jsx: e(n),
                    id: n,
                    ...t
                }), n
            }, this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = new Set
        }
    },
    De = new Xw,
    qw = (e, t) => {
        let n = (t == null ? void 0 : t.id) || $a++;
        return De.addToast({
            title: e,
            ...t,
            id: n
        }), n
    },
    Zw = e => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number",
    Jw = qw,
    e1 = () => De.toasts,
    t1 = () => De.getActiveToasts();
Object.assign(Jw, {
    success: De.success,
    info: De.info,
    warning: De.warning,
    error: De.error,
    custom: De.custom,
    message: De.message,
    promise: De.promise,
    dismiss: De.dismiss,
    loading: De.loading
}, {
    getHistory: e1,
    getToasts: t1
});

function n1(e, {
    insertAt: t
} = {}) {
    if (typeof document > "u") return;
    let n = document.head || document.getElementsByTagName("head")[0],
        r = document.createElement("style");
    r.type = "text/css", t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
n1(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);

function Li(e) {
    return e.label !== void 0
}
var r1 = 3,
    o1 = "32px",
    i1 = "16px",
    Bd = 4e3,
    s1 = 356,
    l1 = 14,
    a1 = 20,
    u1 = 200;

function ft(...e) {
    return e.filter(Boolean).join(" ")
}

function c1(e) {
    let [t, n] = e.split("-"), r = [];
    return t && r.push(t), n && r.push(n), r
}
var d1 = e => {
    var t, n, r, o, i, s, l, a, u, c, p;
    let {
        invert: m,
        toast: d,
        unstyled: x,
        interacting: v,
        setHeights: y,
        visibleToasts: h,
        heights: f,
        index: g,
        toasts: E,
        expanded: C,
        removeToast: k,
        defaultRichColors: b,
        closeButton: R,
        style: A,
        cancelButtonStyle: O,
        actionButtonStyle: F,
        className: D = "",
        descriptionClassName: Q = "",
        duration: L,
        position: X,
        gap: $,
        loadingIcon: W,
        expandByDefault: T,
        classNames: N,
        icons: M,
        closeButtonAriaLabel: V = "Close toast",
        pauseWhenPageIsHidden: z
    } = e, [K, G] = j.useState(null), [he, ke] = j.useState(null), [J, ur] = j.useState(!1), [Xt, zn] = j.useState(!1), [qt, cr] = j.useState(!1), [Zt, di] = j.useState(!1), [ol, fi] = j.useState(!1), [il, lo] = j.useState(0), [dr, uc] = j.useState(0), ao = j.useRef(d.duration || L || Bd), cc = j.useRef(null), Fn = j.useRef(null), pg = g === 0, hg = g + 1 <= h, Je = d.type, fr = d.dismissible !== !1, mg = d.className || "", gg = d.descriptionClassName || "", pi = j.useMemo(() => f.findIndex(B => B.toastId === d.id) || 0, [f, d.id]), vg = j.useMemo(() => {
        var B;
        return (B = d.closeButton) != null ? B : R
    }, [d.closeButton, R]), dc = j.useMemo(() => d.duration || L || Bd, [d.duration, L]), sl = j.useRef(0), pr = j.useRef(0), fc = j.useRef(0), hr = j.useRef(null), [yg, wg] = X.split("-"), pc = j.useMemo(() => f.reduce((B, te, se) => se >= pi ? B : B + te.height, 0), [f, pi]), hc = Gw(), xg = d.invert || m, ll = Je === "loading";
    pr.current = j.useMemo(() => pi * $ + pc, [pi, pc]), j.useEffect(() => {
        ao.current = dc
    }, [dc]), j.useEffect(() => {
        ur(!0)
    }, []), j.useEffect(() => {
        let B = Fn.current;
        if (B) {
            let te = B.getBoundingClientRect().height;
            return uc(te), y(se => [{
                toastId: d.id,
                height: te,
                position: d.position
            }, ...se]), () => y(se => se.filter(at => at.toastId !== d.id))
        }
    }, [y, d.id]), j.useLayoutEffect(() => {
        if (!J) return;
        let B = Fn.current,
            te = B.style.height;
        B.style.height = "auto";
        let se = B.getBoundingClientRect().height;
        B.style.height = te, uc(se), y(at => at.find(ut => ut.toastId === d.id) ? at.map(ut => ut.toastId === d.id ? { ...ut,
            height: se
        } : ut) : [{
            toastId: d.id,
            height: se,
            position: d.position
        }, ...at])
    }, [J, d.title, d.description, y, d.id]);
    let Jt = j.useCallback(() => {
        zn(!0), lo(pr.current), y(B => B.filter(te => te.toastId !== d.id)), setTimeout(() => {
            k(d)
        }, u1)
    }, [d, k, y, pr]);
    j.useEffect(() => {
        if (d.promise && Je === "loading" || d.duration === 1 / 0 || d.type === "loading") return;
        let B;
        return C || v || z && hc ? (() => {
            if (fc.current < sl.current) {
                let te = new Date().getTime() - sl.current;
                ao.current = ao.current - te
            }
            fc.current = new Date().getTime()
        })() : ao.current !== 1 / 0 && (sl.current = new Date().getTime(), B = setTimeout(() => {
            var te;
            (te = d.onAutoClose) == null || te.call(d, d), Jt()
        }, ao.current)), () => clearTimeout(B)
    }, [C, v, d, Je, z, hc, Jt]), j.useEffect(() => {
        d.delete && Jt()
    }, [Jt, d.delete]);

    function Sg() {
        var B, te, se;
        return M != null && M.loading ? j.createElement("div", {
            className: ft(N == null ? void 0 : N.loader, (B = d == null ? void 0 : d.classNames) == null ? void 0 : B.loader, "sonner-loader"),
            "data-visible": Je === "loading"
        }, M.loading) : W ? j.createElement("div", {
            className: ft(N == null ? void 0 : N.loader, (te = d == null ? void 0 : d.classNames) == null ? void 0 : te.loader, "sonner-loader"),
            "data-visible": Je === "loading"
        }, W) : j.createElement(Vw, {
            className: ft(N == null ? void 0 : N.loader, (se = d == null ? void 0 : d.classNames) == null ? void 0 : se.loader),
            visible: Je === "loading"
        })
    }
    return j.createElement("li", {
        tabIndex: 0,
        ref: Fn,
        className: ft(D, mg, N == null ? void 0 : N.toast, (t = d == null ? void 0 : d.classNames) == null ? void 0 : t.toast, N == null ? void 0 : N.default, N == null ? void 0 : N[Je], (n = d == null ? void 0 : d.classNames) == null ? void 0 : n[Je]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = d.richColors) != null ? r : b,
        "data-styled": !(d.jsx || d.unstyled || x),
        "data-mounted": J,
        "data-promise": !!d.promise,
        "data-swiped": ol,
        "data-removed": Xt,
        "data-visible": hg,
        "data-y-position": yg,
        "data-x-position": wg,
        "data-index": g,
        "data-front": pg,
        "data-swiping": qt,
        "data-dismissible": fr,
        "data-type": Je,
        "data-invert": xg,
        "data-swipe-out": Zt,
        "data-swipe-direction": he,
        "data-expanded": !!(C || T && J),
        style: {
            "--index": g,
            "--toasts-before": g,
            "--z-index": E.length - g,
            "--offset": `${Xt?il:pr.current}px`,
            "--initial-height": T ? "auto" : `${dr}px`,
            ...A,
            ...d.style
        },
        onDragEnd: () => {
            cr(!1), G(null), hr.current = null
        },
        onPointerDown: B => {
            ll || !fr || (cc.current = new Date, lo(pr.current), B.target.setPointerCapture(B.pointerId), B.target.tagName !== "BUTTON" && (cr(!0), hr.current = {
                x: B.clientX,
                y: B.clientY
            }))
        },
        onPointerUp: () => {
            var B, te, se, at;
            if (Zt || !fr) return;
            hr.current = null;
            let ut = Number(((B = Fn.current) == null ? void 0 : B.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0),
                en = Number(((te = Fn.current) == null ? void 0 : te.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0),
                $n = new Date().getTime() - ((se = cc.current) == null ? void 0 : se.getTime()),
                ct = K === "x" ? ut : en,
                tn = Math.abs(ct) / $n;
            if (Math.abs(ct) >= a1 || tn > .11) {
                lo(pr.current), (at = d.onDismiss) == null || at.call(d, d), ke(K === "x" ? ut > 0 ? "right" : "left" : en > 0 ? "down" : "up"), Jt(), di(!0), fi(!1);
                return
            }
            cr(!1), G(null)
        },
        onPointerMove: B => {
            var te, se, at, ut;
            if (!hr.current || !fr || ((te = window.getSelection()) == null ? void 0 : te.toString().length) > 0) return;
            let en = B.clientY - hr.current.y,
                $n = B.clientX - hr.current.x,
                ct = (se = e.swipeDirections) != null ? se : c1(X);
            !K && (Math.abs($n) > 1 || Math.abs(en) > 1) && G(Math.abs($n) > Math.abs(en) ? "x" : "y");
            let tn = {
                x: 0,
                y: 0
            };
            K === "y" ? (ct.includes("top") || ct.includes("bottom")) && (ct.includes("top") && en < 0 || ct.includes("bottom") && en > 0) && (tn.y = en) : K === "x" && (ct.includes("left") || ct.includes("right")) && (ct.includes("left") && $n < 0 || ct.includes("right") && $n > 0) && (tn.x = $n), (Math.abs(tn.x) > 0 || Math.abs(tn.y) > 0) && fi(!0), (at = Fn.current) == null || at.style.setProperty("--swipe-amount-x", `${tn.x}px`), (ut = Fn.current) == null || ut.style.setProperty("--swipe-amount-y", `${tn.y}px`)
        }
    }, vg && !d.jsx ? j.createElement("button", {
        "aria-label": V,
        "data-disabled": ll,
        "data-close-button": !0,
        onClick: ll || !fr ? () => {} : () => {
            var B;
            Jt(), (B = d.onDismiss) == null || B.call(d, d)
        },
        className: ft(N == null ? void 0 : N.closeButton, (o = d == null ? void 0 : d.classNames) == null ? void 0 : o.closeButton)
    }, (i = M == null ? void 0 : M.close) != null ? i : Yw) : null, d.jsx || w.isValidElement(d.title) ? d.jsx ? d.jsx : typeof d.title == "function" ? d.title() : d.title : j.createElement(j.Fragment, null, Je || d.icon || d.promise ? j.createElement("div", {
        "data-icon": "",
        className: ft(N == null ? void 0 : N.icon, (s = d == null ? void 0 : d.classNames) == null ? void 0 : s.icon)
    }, d.promise || d.type === "loading" && !d.icon ? d.icon || Sg() : null, d.type !== "loading" ? d.icon || (M == null ? void 0 : M[Je]) || Bw(Je) : null) : null, j.createElement("div", {
        "data-content": "",
        className: ft(N == null ? void 0 : N.content, (l = d == null ? void 0 : d.classNames) == null ? void 0 : l.content)
    }, j.createElement("div", {
        "data-title": "",
        className: ft(N == null ? void 0 : N.title, (a = d == null ? void 0 : d.classNames) == null ? void 0 : a.title)
    }, typeof d.title == "function" ? d.title() : d.title), d.description ? j.createElement("div", {
        "data-description": "",
        className: ft(Q, gg, N == null ? void 0 : N.description, (u = d == null ? void 0 : d.classNames) == null ? void 0 : u.description)
    }, typeof d.description == "function" ? d.description() : d.description) : null), w.isValidElement(d.cancel) ? d.cancel : d.cancel && Li(d.cancel) ? j.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: d.cancelButtonStyle || O,
        onClick: B => {
            var te, se;
            Li(d.cancel) && fr && ((se = (te = d.cancel).onClick) == null || se.call(te, B), Jt())
        },
        className: ft(N == null ? void 0 : N.cancelButton, (c = d == null ? void 0 : d.classNames) == null ? void 0 : c.cancelButton)
    }, d.cancel.label) : null, w.isValidElement(d.action) ? d.action : d.action && Li(d.action) ? j.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: d.actionButtonStyle || F,
        onClick: B => {
            var te, se;
            Li(d.action) && ((se = (te = d.action).onClick) == null || se.call(te, B), !B.defaultPrevented && Jt())
        },
        className: ft(N == null ? void 0 : N.actionButton, (p = d == null ? void 0 : d.classNames) == null ? void 0 : p.actionButton)
    }, d.action.label) : null))
};

function Ud() {
    if (typeof window > "u" || typeof document > "u") return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}

function f1(e, t) {
    let n = {};
    return [e, t].forEach((r, o) => {
        let i = o === 1,
            s = i ? "--mobile-offset" : "--offset",
            l = i ? i1 : o1;

        function a(u) {
            ["top", "right", "bottom", "left"].forEach(c => {
                n[`${s}-${c}`] = typeof u == "number" ? `${u}px` : u
            })
        }
        typeof r == "number" || typeof r == "string" ? a(r) : typeof r == "object" ? ["top", "right", "bottom", "left"].forEach(u => {
            r[u] === void 0 ? n[`${s}-${u}`] = l : n[`${s}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]
        }) : a(l)
    }), n
}
var p1 = w.forwardRef(function(e, t) {
    let {
        invert: n,
        position: r = "bottom-right",
        hotkey: o = ["altKey", "KeyT"],
        expand: i,
        closeButton: s,
        className: l,
        offset: a,
        mobileOffset: u,
        theme: c = "light",
        richColors: p,
        duration: m,
        style: d,
        visibleToasts: x = r1,
        toastOptions: v,
        dir: y = Ud(),
        gap: h = l1,
        loadingIcon: f,
        icons: g,
        containerAriaLabel: E = "Notifications",
        pauseWhenPageIsHidden: C
    } = e, [k, b] = j.useState([]), R = j.useMemo(() => Array.from(new Set([r].concat(k.filter(z => z.position).map(z => z.position)))), [k, r]), [A, O] = j.useState([]), [F, D] = j.useState(!1), [Q, L] = j.useState(!1), [X, $] = j.useState(c !== "system" ? c : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), W = j.useRef(null), T = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), N = j.useRef(null), M = j.useRef(!1), V = j.useCallback(z => {
        b(K => {
            var G;
            return (G = K.find(he => he.id === z.id)) != null && G.delete || De.dismiss(z.id), K.filter(({
                id: he
            }) => he !== z.id)
        })
    }, []);
    return j.useEffect(() => De.subscribe(z => {
        if (z.dismiss) {
            b(K => K.map(G => G.id === z.id ? { ...G,
                delete: !0
            } : G));
            return
        }
        setTimeout(() => {
            Ih.flushSync(() => {
                b(K => {
                    let G = K.findIndex(he => he.id === z.id);
                    return G !== -1 ? [...K.slice(0, G), { ...K[G],
                        ...z
                    }, ...K.slice(G + 1)] : [z, ...K]
                })
            })
        })
    }), []), j.useEffect(() => {
        if (c !== "system") {
            $(c);
            return
        }
        if (c === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? $("dark") : $("light")), typeof window > "u") return;
        let z = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            z.addEventListener("change", ({
                matches: K
            }) => {
                $(K ? "dark" : "light")
            })
        } catch {
            z.addListener(({
                matches: G
            }) => {
                try {
                    $(G ? "dark" : "light")
                } catch (he) {
                    console.error(he)
                }
            })
        }
    }, [c]), j.useEffect(() => {
        k.length <= 1 && D(!1)
    }, [k]), j.useEffect(() => {
        let z = K => {
            var G, he;
            o.every(ke => K[ke] || K.code === ke) && (D(!0), (G = W.current) == null || G.focus()), K.code === "Escape" && (document.activeElement === W.current || (he = W.current) != null && he.contains(document.activeElement)) && D(!1)
        };
        return document.addEventListener("keydown", z), () => document.removeEventListener("keydown", z)
    }, [o]), j.useEffect(() => {
        if (W.current) return () => {
            N.current && (N.current.focus({
                preventScroll: !0
            }), N.current = null, M.current = !1)
        }
    }, [W.current]), j.createElement("section", {
        ref: t,
        "aria-label": `${E} ${T}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, R.map((z, K) => {
        var G;
        let [he, ke] = z.split("-");
        return k.length ? j.createElement("ol", {
            key: z,
            dir: y === "auto" ? Ud() : y,
            tabIndex: -1,
            ref: W,
            className: l,
            "data-sonner-toaster": !0,
            "data-theme": X,
            "data-y-position": he,
            "data-lifted": F && k.length > 1 && !i,
            "data-x-position": ke,
            style: {
                "--front-toast-height": `${((G=A[0])==null?void 0:G.height)||0}px`,
                "--width": `${s1}px`,
                "--gap": `${h}px`,
                ...d,
                ...f1(a, u)
            },
            onBlur: J => {
                M.current && !J.currentTarget.contains(J.relatedTarget) && (M.current = !1, N.current && (N.current.focus({
                    preventScroll: !0
                }), N.current = null))
            },
            onFocus: J => {
                J.target instanceof HTMLElement && J.target.dataset.dismissible === "false" || M.current || (M.current = !0, N.current = J.relatedTarget)
            },
            onMouseEnter: () => D(!0),
            onMouseMove: () => D(!0),
            onMouseLeave: () => {
                Q || D(!1)
            },
            onDragEnd: () => D(!1),
            onPointerDown: J => {
                J.target instanceof HTMLElement && J.target.dataset.dismissible === "false" || L(!0)
            },
            onPointerUp: () => L(!1)
        }, k.filter(J => !J.position && K === 0 || J.position === z).map((J, ur) => {
            var Xt, zn;
            return j.createElement(d1, {
                key: J.id,
                icons: g,
                index: ur,
                toast: J,
                defaultRichColors: p,
                duration: (Xt = v == null ? void 0 : v.duration) != null ? Xt : m,
                className: v == null ? void 0 : v.className,
                descriptionClassName: v == null ? void 0 : v.descriptionClassName,
                invert: n,
                visibleToasts: x,
                closeButton: (zn = v == null ? void 0 : v.closeButton) != null ? zn : s,
                interacting: Q,
                position: z,
                style: v == null ? void 0 : v.style,
                unstyled: v == null ? void 0 : v.unstyled,
                classNames: v == null ? void 0 : v.classNames,
                cancelButtonStyle: v == null ? void 0 : v.cancelButtonStyle,
                actionButtonStyle: v == null ? void 0 : v.actionButtonStyle,
                removeToast: V,
                toasts: k.filter(qt => qt.position == J.position),
                heights: A.filter(qt => qt.position == J.position),
                setHeights: O,
                expandByDefault: i,
                gap: h,
                loadingIcon: f,
                expanded: F,
                pauseWhenPageIsHidden: C,
                swipeDirections: e.swipeDirections
            })
        })) : null
    }))
});
const h1 = ({ ...e
    }) => {
        const {
            theme: t = "system"
        } = $w();
        return S.jsx(p1, {
            theme: t,
            className: "toaster group",
            toastOptions: {
                classNames: {
                    toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                    description: "group-[.toast]:text-muted-foreground",
                    actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                    cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
                }
            },
            ...e
        })
    },
    m1 = ["top", "right", "bottom", "left"],
    jn = Math.min,
    Qe = Math.max,
    Es = Math.round,
    Mi = Math.floor,
    On = e => ({
        x: e,
        y: e
    }),
    g1 = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    },
    v1 = {
        start: "end",
        end: "start"
    };

function Ba(e, t, n) {
    return Qe(e, jn(t, n))
}

function Kt(e, t) {
    return typeof e == "function" ? e(t) : e
}

function Yt(e) {
    return e.split("-")[0]
}

function io(e) {
    return e.split("-")[1]
}

function Zu(e) {
    return e === "x" ? "y" : "x"
}

function Ju(e) {
    return e === "y" ? "height" : "width"
}

function An(e) {
    return ["top", "bottom"].includes(Yt(e)) ? "y" : "x"
}

function ec(e) {
    return Zu(An(e))
}

function y1(e, t, n) {
    n === void 0 && (n = !1);
    const r = io(e),
        o = ec(e),
        i = Ju(o);
    let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[i] > t.floating[i] && (s = Cs(s)), [s, Cs(s)]
}

function w1(e) {
    const t = Cs(e);
    return [Ua(e), t, Ua(t)]
}

function Ua(e) {
    return e.replace(/start|end/g, t => v1[t])
}

function x1(e, t, n) {
    const r = ["left", "right"],
        o = ["right", "left"],
        i = ["top", "bottom"],
        s = ["bottom", "top"];
    switch (e) {
        case "top":
        case "bottom":
            return n ? t ? o : r : t ? r : o;
        case "left":
        case "right":
            return t ? i : s;
        default:
            return []
    }
}

function S1(e, t, n, r) {
    const o = io(e);
    let i = x1(Yt(e), n === "start", r);
    return o && (i = i.map(s => s + "-" + o), t && (i = i.concat(i.map(Ua)))), i
}

function Cs(e) {
    return e.replace(/left|right|bottom|top/g, t => g1[t])
}

function E1(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}

function km(e) {
    return typeof e != "number" ? E1(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}

function ks(e) {
    const {
        x: t,
        y: n,
        width: r,
        height: o
    } = e;
    return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n
    }
}

function Vd(e, t, n) {
    let {
        reference: r,
        floating: o
    } = e;
    const i = An(t),
        s = ec(t),
        l = Ju(s),
        a = Yt(t),
        u = i === "y",
        c = r.x + r.width / 2 - o.width / 2,
        p = r.y + r.height / 2 - o.height / 2,
        m = r[l] / 2 - o[l] / 2;
    let d;
    switch (a) {
        case "top":
            d = {
                x: c,
                y: r.y - o.height
            };
            break;
        case "bottom":
            d = {
                x: c,
                y: r.y + r.height
            };
            break;
        case "right":
            d = {
                x: r.x + r.width,
                y: p
            };
            break;
        case "left":
            d = {
                x: r.x - o.width,
                y: p
            };
            break;
        default:
            d = {
                x: r.x,
                y: r.y
            }
    }
    switch (io(t)) {
        case "start":
            d[s] -= m * (n && u ? -1 : 1);
            break;
        case "end":
            d[s] += m * (n && u ? -1 : 1);
            break
    }
    return d
}
const C1 = async (e, t, n) => {
    const {
        placement: r = "bottom",
        strategy: o = "absolute",
        middleware: i = [],
        platform: s
    } = n, l = i.filter(Boolean), a = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let u = await s.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }),
        {
            x: c,
            y: p
        } = Vd(u, r, a),
        m = r,
        d = {},
        x = 0;
    for (let v = 0; v < l.length; v++) {
        const {
            name: y,
            fn: h
        } = l[v], {
            x: f,
            y: g,
            data: E,
            reset: C
        } = await h({
            x: c,
            y: p,
            initialPlacement: r,
            placement: m,
            strategy: o,
            middlewareData: d,
            rects: u,
            platform: s,
            elements: {
                reference: e,
                floating: t
            }
        });
        c = f ?? c, p = g ?? p, d = { ...d,
            [y]: { ...d[y],
                ...E
            }
        }, C && x <= 50 && (x++, typeof C == "object" && (C.placement && (m = C.placement), C.rects && (u = C.rects === !0 ? await s.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : C.rects), {
            x: c,
            y: p
        } = Vd(u, m, a)), v = -1)
    }
    return {
        x: c,
        y: p,
        placement: m,
        strategy: o,
        middlewareData: d
    }
};
async function qo(e, t) {
    var n;
    t === void 0 && (t = {});
    const {
        x: r,
        y: o,
        platform: i,
        rects: s,
        elements: l,
        strategy: a
    } = e, {
        boundary: u = "clippingAncestors",
        rootBoundary: c = "viewport",
        elementContext: p = "floating",
        altBoundary: m = !1,
        padding: d = 0
    } = Kt(t, e), x = km(d), y = l[m ? p === "floating" ? "reference" : "floating" : p], h = ks(await i.getClippingRect({
        element: (n = await (i.isElement == null ? void 0 : i.isElement(y))) == null || n ? y : y.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(l.floating)),
        boundary: u,
        rootBoundary: c,
        strategy: a
    })), f = p === "floating" ? {
        x: r,
        y: o,
        width: s.floating.width,
        height: s.floating.height
    } : s.reference, g = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l.floating)), E = await (i.isElement == null ? void 0 : i.isElement(g)) ? await (i.getScale == null ? void 0 : i.getScale(g)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }, C = ks(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: l,
        rect: f,
        offsetParent: g,
        strategy: a
    }) : f);
    return {
        top: (h.top - C.top + x.top) / E.y,
        bottom: (C.bottom - h.bottom + x.bottom) / E.y,
        left: (h.left - C.left + x.left) / E.x,
        right: (C.right - h.right + x.right) / E.x
    }
}
const k1 = e => ({
        name: "arrow",
        options: e,
        async fn(t) {
            const {
                x: n,
                y: r,
                placement: o,
                rects: i,
                platform: s,
                elements: l,
                middlewareData: a
            } = t, {
                element: u,
                padding: c = 0
            } = Kt(e, t) || {};
            if (u == null) return {};
            const p = km(c),
                m = {
                    x: n,
                    y: r
                },
                d = ec(o),
                x = Ju(d),
                v = await s.getDimensions(u),
                y = d === "y",
                h = y ? "top" : "left",
                f = y ? "bottom" : "right",
                g = y ? "clientHeight" : "clientWidth",
                E = i.reference[x] + i.reference[d] - m[d] - i.floating[x],
                C = m[d] - i.reference[d],
                k = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
            let b = k ? k[g] : 0;
            (!b || !await (s.isElement == null ? void 0 : s.isElement(k))) && (b = l.floating[g] || i.floating[x]);
            const R = E / 2 - C / 2,
                A = b / 2 - v[x] / 2 - 1,
                O = jn(p[h], A),
                F = jn(p[f], A),
                D = O,
                Q = b - v[x] - F,
                L = b / 2 - v[x] / 2 + R,
                X = Ba(D, L, Q),
                $ = !a.arrow && io(o) != null && L !== X && i.reference[x] / 2 - (L < D ? O : F) - v[x] / 2 < 0,
                W = $ ? L < D ? L - D : L - Q : 0;
            return {
                [d]: m[d] + W,
                data: {
                    [d]: X,
                    centerOffset: L - X - W,
                    ...$ && {
                        alignmentOffset: W
                    }
                },
                reset: $
            }
        }
    }),
    b1 = function(e) {
        return e === void 0 && (e = {}), {
            name: "flip",
            options: e,
            async fn(t) {
                var n, r;
                const {
                    placement: o,
                    middlewareData: i,
                    rects: s,
                    initialPlacement: l,
                    platform: a,
                    elements: u
                } = t, {
                    mainAxis: c = !0,
                    crossAxis: p = !0,
                    fallbackPlacements: m,
                    fallbackStrategy: d = "bestFit",
                    fallbackAxisSideDirection: x = "none",
                    flipAlignment: v = !0,
                    ...y
                } = Kt(e, t);
                if ((n = i.arrow) != null && n.alignmentOffset) return {};
                const h = Yt(o),
                    f = An(l),
                    g = Yt(l) === l,
                    E = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)),
                    C = m || (g || !v ? [Cs(l)] : w1(l)),
                    k = x !== "none";
                !m && k && C.push(...S1(l, v, x, E));
                const b = [l, ...C],
                    R = await qo(t, y),
                    A = [];
                let O = ((r = i.flip) == null ? void 0 : r.overflows) || [];
                if (c && A.push(R[h]), p) {
                    const L = y1(o, s, E);
                    A.push(R[L[0]], R[L[1]])
                }
                if (O = [...O, {
                        placement: o,
                        overflows: A
                    }], !A.every(L => L <= 0)) {
                    var F, D;
                    const L = (((F = i.flip) == null ? void 0 : F.index) || 0) + 1,
                        X = b[L];
                    if (X) return {
                        data: {
                            index: L,
                            overflows: O
                        },
                        reset: {
                            placement: X
                        }
                    };
                    let $ = (D = O.filter(W => W.overflows[0] <= 0).sort((W, T) => W.overflows[1] - T.overflows[1])[0]) == null ? void 0 : D.placement;
                    if (!$) switch (d) {
                        case "bestFit":
                            {
                                var Q;
                                const W = (Q = O.filter(T => {
                                    if (k) {
                                        const N = An(T.placement);
                                        return N === f || N === "y"
                                    }
                                    return !0
                                }).map(T => [T.placement, T.overflows.filter(N => N > 0).reduce((N, M) => N + M, 0)]).sort((T, N) => T[1] - N[1])[0]) == null ? void 0 : Q[0];W && ($ = W);
                                break
                            }
                        case "initialPlacement":
                            $ = l;
                            break
                    }
                    if (o !== $) return {
                        reset: {
                            placement: $
                        }
                    }
                }
                return {}
            }
        }
    };

function Wd(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}

function Hd(e) {
    return m1.some(t => e[t] >= 0)
}
const P1 = function(e) {
    return e === void 0 && (e = {}), {
        name: "hide",
        options: e,
        async fn(t) {
            const {
                rects: n
            } = t, {
                strategy: r = "referenceHidden",
                ...o
            } = Kt(e, t);
            switch (r) {
                case "referenceHidden":
                    {
                        const i = await qo(t, { ...o,
                                elementContext: "reference"
                            }),
                            s = Wd(i, n.reference);
                        return {
                            data: {
                                referenceHiddenOffsets: s,
                                referenceHidden: Hd(s)
                            }
                        }
                    }
                case "escaped":
                    {
                        const i = await qo(t, { ...o,
                                altBoundary: !0
                            }),
                            s = Wd(i, n.floating);
                        return {
                            data: {
                                escapedOffsets: s,
                                escaped: Hd(s)
                            }
                        }
                    }
                default:
                    return {}
            }
        }
    }
};
async function T1(e, t) {
    const {
        placement: n,
        platform: r,
        elements: o
    } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Yt(n), l = io(n), a = An(n) === "y", u = ["left", "top"].includes(s) ? -1 : 1, c = i && a ? -1 : 1, p = Kt(t, e);
    let {
        mainAxis: m,
        crossAxis: d,
        alignmentAxis: x
    } = typeof p == "number" ? {
        mainAxis: p,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: p.mainAxis || 0,
        crossAxis: p.crossAxis || 0,
        alignmentAxis: p.alignmentAxis
    };
    return l && typeof x == "number" && (d = l === "end" ? x * -1 : x), a ? {
        x: d * c,
        y: m * u
    } : {
        x: m * u,
        y: d * c
    }
}
const N1 = function(e) {
        return e === void 0 && (e = 0), {
            name: "offset",
            options: e,
            async fn(t) {
                var n, r;
                const {
                    x: o,
                    y: i,
                    placement: s,
                    middlewareData: l
                } = t, a = await T1(t, e);
                return s === ((n = l.offset) == null ? void 0 : n.placement) && (r = l.arrow) != null && r.alignmentOffset ? {} : {
                    x: o + a.x,
                    y: i + a.y,
                    data: { ...a,
                        placement: s
                    }
                }
            }
        }
    },
    R1 = function(e) {
        return e === void 0 && (e = {}), {
            name: "shift",
            options: e,
            async fn(t) {
                const {
                    x: n,
                    y: r,
                    placement: o
                } = t, {
                    mainAxis: i = !0,
                    crossAxis: s = !1,
                    limiter: l = {
                        fn: y => {
                            let {
                                x: h,
                                y: f
                            } = y;
                            return {
                                x: h,
                                y: f
                            }
                        }
                    },
                    ...a
                } = Kt(e, t), u = {
                    x: n,
                    y: r
                }, c = await qo(t, a), p = An(Yt(o)), m = Zu(p);
                let d = u[m],
                    x = u[p];
                if (i) {
                    const y = m === "y" ? "top" : "left",
                        h = m === "y" ? "bottom" : "right",
                        f = d + c[y],
                        g = d - c[h];
                    d = Ba(f, d, g)
                }
                if (s) {
                    const y = p === "y" ? "top" : "left",
                        h = p === "y" ? "bottom" : "right",
                        f = x + c[y],
                        g = x - c[h];
                    x = Ba(f, x, g)
                }
                const v = l.fn({ ...t,
                    [m]: d,
                    [p]: x
                });
                return { ...v,
                    data: {
                        x: v.x - n,
                        y: v.y - r,
                        enabled: {
                            [m]: i,
                            [p]: s
                        }
                    }
                }
            }
        }
    },
    _1 = function(e) {
        return e === void 0 && (e = {}), {
            options: e,
            fn(t) {
                const {
                    x: n,
                    y: r,
                    placement: o,
                    rects: i,
                    middlewareData: s
                } = t, {
                    offset: l = 0,
                    mainAxis: a = !0,
                    crossAxis: u = !0
                } = Kt(e, t), c = {
                    x: n,
                    y: r
                }, p = An(o), m = Zu(p);
                let d = c[m],
                    x = c[p];
                const v = Kt(l, t),
                    y = typeof v == "number" ? {
                        mainAxis: v,
                        crossAxis: 0
                    } : {
                        mainAxis: 0,
                        crossAxis: 0,
                        ...v
                    };
                if (a) {
                    const g = m === "y" ? "height" : "width",
                        E = i.reference[m] - i.floating[g] + y.mainAxis,
                        C = i.reference[m] + i.reference[g] - y.mainAxis;
                    d < E ? d = E : d > C && (d = C)
                }
                if (u) {
                    var h, f;
                    const g = m === "y" ? "width" : "height",
                        E = ["top", "left"].includes(Yt(o)),
                        C = i.reference[p] - i.floating[g] + (E && ((h = s.offset) == null ? void 0 : h[p]) || 0) + (E ? 0 : y.crossAxis),
                        k = i.reference[p] + i.reference[g] + (E ? 0 : ((f = s.offset) == null ? void 0 : f[p]) || 0) - (E ? y.crossAxis : 0);
                    x < C ? x = C : x > k && (x = k)
                }
                return {
                    [m]: d,
                    [p]: x
                }
            }
        }
    },
    j1 = function(e) {
        return e === void 0 && (e = {}), {
            name: "size",
            options: e,
            async fn(t) {
                var n, r;
                const {
                    placement: o,
                    rects: i,
                    platform: s,
                    elements: l
                } = t, {
                    apply: a = () => {},
                    ...u
                } = Kt(e, t), c = await qo(t, u), p = Yt(o), m = io(o), d = An(o) === "y", {
                    width: x,
                    height: v
                } = i.floating;
                let y, h;
                p === "top" || p === "bottom" ? (y = p, h = m === (await (s.isRTL == null ? void 0 : s.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (h = p, y = m === "end" ? "top" : "bottom");
                const f = v - c.top - c.bottom,
                    g = x - c.left - c.right,
                    E = jn(v - c[y], f),
                    C = jn(x - c[h], g),
                    k = !t.middlewareData.shift;
                let b = E,
                    R = C;
                if ((n = t.middlewareData.shift) != null && n.enabled.x && (R = g), (r = t.middlewareData.shift) != null && r.enabled.y && (b = f), k && !m) {
                    const O = Qe(c.left, 0),
                        F = Qe(c.right, 0),
                        D = Qe(c.top, 0),
                        Q = Qe(c.bottom, 0);
                    d ? R = x - 2 * (O !== 0 || F !== 0 ? O + F : Qe(c.left, c.right)) : b = v - 2 * (D !== 0 || Q !== 0 ? D + Q : Qe(c.top, c.bottom))
                }
                await a({ ...t,
                    availableWidth: R,
                    availableHeight: b
                });
                const A = await s.getDimensions(l.floating);
                return x !== A.width || v !== A.height ? {
                    reset: {
                        rects: !0
                    }
                } : {}
            }
        }
    };

function Ys() {
    return typeof window < "u"
}

function so(e) {
    return bm(e) ? (e.nodeName || "").toLowerCase() : "#document"
}

function Ge(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}

function Lt(e) {
    var t;
    return (t = (bm(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}

function bm(e) {
    return Ys() ? e instanceof Node || e instanceof Ge(e).Node : !1
}

function Ct(e) {
    return Ys() ? e instanceof Element || e instanceof Ge(e).Element : !1
}

function At(e) {
    return Ys() ? e instanceof HTMLElement || e instanceof Ge(e).HTMLElement : !1
}

function Qd(e) {
    return !Ys() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ge(e).ShadowRoot
}

function ci(e) {
    const {
        overflow: t,
        overflowX: n,
        overflowY: r,
        display: o
    } = kt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
}

function O1(e) {
    return ["table", "td", "th"].includes(so(e))
}

function Gs(e) {
    return [":popover-open", ":modal"].some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    })
}

function tc(e) {
    const t = nc(),
        n = Ct(e) ? kt(e) : e;
    return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(r => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some(r => (n.contain || "").includes(r))
}

function A1(e) {
    let t = Ln(e);
    for (; At(t) && !Jr(t);) {
        if (tc(t)) return t;
        if (Gs(t)) return null;
        t = Ln(t)
    }
    return null
}

function nc() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}

function Jr(e) {
    return ["html", "body", "#document"].includes(so(e))
}

function kt(e) {
    return Ge(e).getComputedStyle(e)
}

function Xs(e) {
    return Ct(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}

function Ln(e) {
    if (so(e) === "html") return e;
    const t = e.assignedSlot || e.parentNode || Qd(e) && e.host || Lt(e);
    return Qd(t) ? t.host : t
}

function Pm(e) {
    const t = Ln(e);
    return Jr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : At(t) && ci(t) ? t : Pm(t)
}

function Zo(e, t, n) {
    var r;
    t === void 0 && (t = []), n === void 0 && (n = !0);
    const o = Pm(e),
        i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
        s = Ge(o);
    if (i) {
        const l = Va(s);
        return t.concat(s, s.visualViewport || [], ci(o) ? o : [], l && n ? Zo(l) : [])
    }
    return t.concat(o, Zo(o, [], n))
}

function Va(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}

function Tm(e) {
    const t = kt(e);
    let n = parseFloat(t.width) || 0,
        r = parseFloat(t.height) || 0;
    const o = At(e),
        i = o ? e.offsetWidth : n,
        s = o ? e.offsetHeight : r,
        l = Es(n) !== i || Es(r) !== s;
    return l && (n = i, r = s), {
        width: n,
        height: r,
        $: l
    }
}

function rc(e) {
    return Ct(e) ? e : e.contextElement
}

function Ir(e) {
    const t = rc(e);
    if (!At(t)) return On(1);
    const n = t.getBoundingClientRect(),
        {
            width: r,
            height: o,
            $: i
        } = Tm(t);
    let s = (i ? Es(n.width) : n.width) / r,
        l = (i ? Es(n.height) : n.height) / o;
    return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), {
        x: s,
        y: l
    }
}
const L1 = On(0);

function Nm(e) {
    const t = Ge(e);
    return !nc() || !t.visualViewport ? L1 : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}

function M1(e, t, n) {
    return t === void 0 && (t = !1), !n || t && n !== Ge(e) ? !1 : t
}

function ir(e, t, n, r) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    const o = e.getBoundingClientRect(),
        i = rc(e);
    let s = On(1);
    t && (r ? Ct(r) && (s = Ir(r)) : s = Ir(e));
    const l = M1(i, n, r) ? Nm(i) : On(0);
    let a = (o.left + l.x) / s.x,
        u = (o.top + l.y) / s.y,
        c = o.width / s.x,
        p = o.height / s.y;
    if (i) {
        const m = Ge(i),
            d = r && Ct(r) ? Ge(r) : r;
        let x = m,
            v = Va(x);
        for (; v && r && d !== x;) {
            const y = Ir(v),
                h = v.getBoundingClientRect(),
                f = kt(v),
                g = h.left + (v.clientLeft + parseFloat(f.paddingLeft)) * y.x,
                E = h.top + (v.clientTop + parseFloat(f.paddingTop)) * y.y;
            a *= y.x, u *= y.y, c *= y.x, p *= y.y, a += g, u += E, x = Ge(v), v = Va(x)
        }
    }
    return ks({
        width: c,
        height: p,
        x: a,
        y: u
    })
}

function I1(e) {
    let {
        elements: t,
        rect: n,
        offsetParent: r,
        strategy: o
    } = e;
    const i = o === "fixed",
        s = Lt(r),
        l = t ? Gs(t.floating) : !1;
    if (r === s || l && i) return n;
    let a = {
            scrollLeft: 0,
            scrollTop: 0
        },
        u = On(1);
    const c = On(0),
        p = At(r);
    if ((p || !p && !i) && ((so(r) !== "body" || ci(s)) && (a = Xs(r)), At(r))) {
        const m = ir(r);
        u = Ir(r), c.x = m.x + r.clientLeft, c.y = m.y + r.clientTop
    }
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - a.scrollLeft * u.x + c.x,
        y: n.y * u.y - a.scrollTop * u.y + c.y
    }
}

function D1(e) {
    return Array.from(e.getClientRects())
}

function Wa(e, t) {
    const n = Xs(e).scrollLeft;
    return t ? t.left + n : ir(Lt(e)).left + n
}

function z1(e) {
    const t = Lt(e),
        n = Xs(e),
        r = e.ownerDocument.body,
        o = Qe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
        i = Qe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let s = -n.scrollLeft + Wa(e);
    const l = -n.scrollTop;
    return kt(r).direction === "rtl" && (s += Qe(t.clientWidth, r.clientWidth) - o), {
        width: o,
        height: i,
        x: s,
        y: l
    }
}

function F1(e, t) {
    const n = Ge(e),
        r = Lt(e),
        o = n.visualViewport;
    let i = r.clientWidth,
        s = r.clientHeight,
        l = 0,
        a = 0;
    if (o) {
        i = o.width, s = o.height;
        const u = nc();
        (!u || u && t === "fixed") && (l = o.offsetLeft, a = o.offsetTop)
    }
    return {
        width: i,
        height: s,
        x: l,
        y: a
    }
}

function $1(e, t) {
    const n = ir(e, !0, t === "fixed"),
        r = n.top + e.clientTop,
        o = n.left + e.clientLeft,
        i = At(e) ? Ir(e) : On(1),
        s = e.clientWidth * i.x,
        l = e.clientHeight * i.y,
        a = o * i.x,
        u = r * i.y;
    return {
        width: s,
        height: l,
        x: a,
        y: u
    }
}

function Kd(e, t, n) {
    let r;
    if (t === "viewport") r = F1(e, n);
    else if (t === "document") r = z1(Lt(e));
    else if (Ct(t)) r = $1(t, n);
    else {
        const o = Nm(e);
        r = { ...t,
            x: t.x - o.x,
            y: t.y - o.y
        }
    }
    return ks(r)
}

function Rm(e, t) {
    const n = Ln(e);
    return n === t || !Ct(n) || Jr(n) ? !1 : kt(n).position === "fixed" || Rm(n, t)
}

function B1(e, t) {
    const n = t.get(e);
    if (n) return n;
    let r = Zo(e, [], !1).filter(l => Ct(l) && so(l) !== "body"),
        o = null;
    const i = kt(e).position === "fixed";
    let s = i ? Ln(e) : e;
    for (; Ct(s) && !Jr(s);) {
        const l = kt(s),
            a = tc(s);
        !a && l.position === "fixed" && (o = null), (i ? !a && !o : !a && l.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || ci(s) && !a && Rm(e, s)) ? r = r.filter(c => c !== s) : o = l, s = Ln(s)
    }
    return t.set(e, r), r
}

function U1(e) {
    let {
        element: t,
        boundary: n,
        rootBoundary: r,
        strategy: o
    } = e;
    const s = [...n === "clippingAncestors" ? Gs(t) ? [] : B1(t, this._c) : [].concat(n), r],
        l = s[0],
        a = s.reduce((u, c) => {
            const p = Kd(t, c, o);
            return u.top = Qe(p.top, u.top), u.right = jn(p.right, u.right), u.bottom = jn(p.bottom, u.bottom), u.left = Qe(p.left, u.left), u
        }, Kd(t, l, o));
    return {
        width: a.right - a.left,
        height: a.bottom - a.top,
        x: a.left,
        y: a.top
    }
}

function V1(e) {
    const {
        width: t,
        height: n
    } = Tm(e);
    return {
        width: t,
        height: n
    }
}

function W1(e, t, n) {
    const r = At(t),
        o = Lt(t),
        i = n === "fixed",
        s = ir(e, !0, i, t);
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const a = On(0);
    if (r || !r && !i)
        if ((so(t) !== "body" || ci(o)) && (l = Xs(t)), r) {
            const d = ir(t, !0, i, t);
            a.x = d.x + t.clientLeft, a.y = d.y + t.clientTop
        } else o && (a.x = Wa(o));
    let u = 0,
        c = 0;
    if (o && !r && !i) {
        const d = o.getBoundingClientRect();
        c = d.top + l.scrollTop, u = d.left + l.scrollLeft - Wa(o, d)
    }
    const p = s.left + l.scrollLeft - a.x - u,
        m = s.top + l.scrollTop - a.y - c;
    return {
        x: p,
        y: m,
        width: s.width,
        height: s.height
    }
}

function Fl(e) {
    return kt(e).position === "static"
}

function Yd(e, t) {
    if (!At(e) || kt(e).position === "fixed") return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return Lt(e) === n && (n = n.ownerDocument.body), n
}

function _m(e, t) {
    const n = Ge(e);
    if (Gs(e)) return n;
    if (!At(e)) {
        let o = Ln(e);
        for (; o && !Jr(o);) {
            if (Ct(o) && !Fl(o)) return o;
            o = Ln(o)
        }
        return n
    }
    let r = Yd(e, t);
    for (; r && O1(r) && Fl(r);) r = Yd(r, t);
    return r && Jr(r) && Fl(r) && !tc(r) ? n : r || A1(e) || n
}
const H1 = async function(e) {
    const t = this.getOffsetParent || _m,
        n = this.getDimensions,
        r = await n(e.floating);
    return {
        reference: W1(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};

function Q1(e) {
    return kt(e).direction === "rtl"
}
const K1 = {
    convertOffsetParentRelativeRectToViewportRelativeRect: I1,
    getDocumentElement: Lt,
    getClippingRect: U1,
    getOffsetParent: _m,
    getElementRects: H1,
    getClientRects: D1,
    getDimensions: V1,
    getScale: Ir,
    isElement: Ct,
    isRTL: Q1
};

function Y1(e, t) {
    let n = null,
        r;
    const o = Lt(e);

    function i() {
        var l;
        clearTimeout(r), (l = n) == null || l.disconnect(), n = null
    }

    function s(l, a) {
        l === void 0 && (l = !1), a === void 0 && (a = 1), i();
        const {
            left: u,
            top: c,
            width: p,
            height: m
        } = e.getBoundingClientRect();
        if (l || t(), !p || !m) return;
        const d = Mi(c),
            x = Mi(o.clientWidth - (u + p)),
            v = Mi(o.clientHeight - (c + m)),
            y = Mi(u),
            f = {
                rootMargin: -d + "px " + -x + "px " + -v + "px " + -y + "px",
                threshold: Qe(0, jn(1, a)) || 1
            };
        let g = !0;

        function E(C) {
            const k = C[0].intersectionRatio;
            if (k !== a) {
                if (!g) return s();
                k ? s(!1, k) : r = setTimeout(() => {
                    s(!1, 1e-7)
                }, 1e3)
            }
            g = !1
        }
        try {
            n = new IntersectionObserver(E, { ...f,
                root: o.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(E, f)
        }
        n.observe(e)
    }
    return s(!0), i
}

function G1(e, t, n, r) {
    r === void 0 && (r = {});
    const {
        ancestorScroll: o = !0,
        ancestorResize: i = !0,
        elementResize: s = typeof ResizeObserver == "function",
        layoutShift: l = typeof IntersectionObserver == "function",
        animationFrame: a = !1
    } = r, u = rc(e), c = o || i ? [...u ? Zo(u) : [], ...Zo(t)] : [];
    c.forEach(h => {
        o && h.addEventListener("scroll", n, {
            passive: !0
        }), i && h.addEventListener("resize", n)
    });
    const p = u && l ? Y1(u, n) : null;
    let m = -1,
        d = null;
    s && (d = new ResizeObserver(h => {
        let [f] = h;
        f && f.target === u && d && (d.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
            var g;
            (g = d) == null || g.observe(t)
        })), n()
    }), u && !a && d.observe(u), d.observe(t));
    let x, v = a ? ir(e) : null;
    a && y();

    function y() {
        const h = ir(e);
        v && (h.x !== v.x || h.y !== v.y || h.width !== v.width || h.height !== v.height) && n(), v = h, x = requestAnimationFrame(y)
    }
    return n(), () => {
        var h;
        c.forEach(f => {
            o && f.removeEventListener("scroll", n), i && f.removeEventListener("resize", n)
        }), p == null || p(), (h = d) == null || h.disconnect(), d = null, a && cancelAnimationFrame(x)
    }
}
const X1 = N1,
    q1 = R1,
    Z1 = b1,
    J1 = j1,
    ex = P1,
    Gd = k1,
    tx = _1,
    nx = (e, t, n) => {
        const r = new Map,
            o = {
                platform: K1,
                ...n
            },
            i = { ...o.platform,
                _c: r
            };
        return C1(e, t, { ...o,
            platform: i
        })
    };
var qi = typeof document < "u" ? w.useLayoutEffect : w.useEffect;

function bs(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (typeof e == "function" && e.toString() === t.toString()) return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length, n !== t.length) return !1;
            for (r = n; r-- !== 0;)
                if (!bs(e[r], t[r])) return !1;
            return !0
        }
        if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
        for (r = n; r-- !== 0;)
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
        for (r = n; r-- !== 0;) {
            const i = o[r];
            if (!(i === "_owner" && e.$$typeof) && !bs(e[i], t[i])) return !1
        }
        return !0
    }
    return e !== e && t !== t
}

function jm(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function Xd(e, t) {
    const n = jm(e);
    return Math.round(t * n) / n
}

function $l(e) {
    const t = w.useRef(e);
    return qi(() => {
        t.current = e
    }), t
}

function rx(e) {
    e === void 0 && (e = {});
    const {
        placement: t = "bottom",
        strategy: n = "absolute",
        middleware: r = [],
        platform: o,
        elements: {
            reference: i,
            floating: s
        } = {},
        transform: l = !0,
        whileElementsMounted: a,
        open: u
    } = e, [c, p] = w.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    }), [m, d] = w.useState(r);
    bs(m, r) || d(r);
    const [x, v] = w.useState(null), [y, h] = w.useState(null), f = w.useCallback(T => {
        T !== k.current && (k.current = T, v(T))
    }, []), g = w.useCallback(T => {
        T !== b.current && (b.current = T, h(T))
    }, []), E = i || x, C = s || y, k = w.useRef(null), b = w.useRef(null), R = w.useRef(c), A = a != null, O = $l(a), F = $l(o), D = $l(u), Q = w.useCallback(() => {
        if (!k.current || !b.current) return;
        const T = {
            placement: t,
            strategy: n,
            middleware: m
        };
        F.current && (T.platform = F.current), nx(k.current, b.current, T).then(N => {
            const M = { ...N,
                isPositioned: D.current !== !1
            };
            L.current && !bs(R.current, M) && (R.current = M, ai.flushSync(() => {
                p(M)
            }))
        })
    }, [m, t, n, F, D]);
    qi(() => {
        u === !1 && R.current.isPositioned && (R.current.isPositioned = !1, p(T => ({ ...T,
            isPositioned: !1
        })))
    }, [u]);
    const L = w.useRef(!1);
    qi(() => (L.current = !0, () => {
        L.current = !1
    }), []), qi(() => {
        if (E && (k.current = E), C && (b.current = C), E && C) {
            if (O.current) return O.current(E, C, Q);
            Q()
        }
    }, [E, C, Q, O, A]);
    const X = w.useMemo(() => ({
            reference: k,
            floating: b,
            setReference: f,
            setFloating: g
        }), [f, g]),
        $ = w.useMemo(() => ({
            reference: E,
            floating: C
        }), [E, C]),
        W = w.useMemo(() => {
            const T = {
                position: n,
                left: 0,
                top: 0
            };
            if (!$.floating) return T;
            const N = Xd($.floating, c.x),
                M = Xd($.floating, c.y);
            return l ? { ...T,
                transform: "translate(" + N + "px, " + M + "px)",
                ...jm($.floating) >= 1.5 && {
                    willChange: "transform"
                }
            } : {
                position: n,
                left: N,
                top: M
            }
        }, [n, l, $.floating, c.x, c.y]);
    return w.useMemo(() => ({ ...c,
        update: Q,
        refs: X,
        elements: $,
        floatingStyles: W
    }), [c, Q, X, $, W])
}
const ox = e => {
        function t(n) {
            return {}.hasOwnProperty.call(n, "current")
        }
        return {
            name: "arrow",
            options: e,
            fn(n) {
                const {
                    element: r,
                    padding: o
                } = typeof e == "function" ? e(n) : e;
                return r && t(r) ? r.current != null ? Gd({
                    element: r.current,
                    padding: o
                }).fn(n) : {} : r ? Gd({
                    element: r,
                    padding: o
                }).fn(n) : {}
            }
        }
    },
    ix = (e, t) => ({ ...X1(e),
        options: [e, t]
    }),
    sx = (e, t) => ({ ...q1(e),
        options: [e, t]
    }),
    lx = (e, t) => ({ ...tx(e),
        options: [e, t]
    }),
    ax = (e, t) => ({ ...Z1(e),
        options: [e, t]
    }),
    ux = (e, t) => ({ ...J1(e),
        options: [e, t]
    }),
    cx = (e, t) => ({ ...ex(e),
        options: [e, t]
    }),
    dx = (e, t) => ({ ...ox(e),
        options: [e, t]
    });
var fx = "Arrow",
    Om = w.forwardRef((e, t) => {
        const {
            children: n,
            width: r = 10,
            height: o = 5,
            ...i
        } = e;
        return S.jsx(We.svg, { ...i,
            ref: t,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : S.jsx("polygon", {
                points: "0,0 30,0 15,10"
            })
        })
    });
Om.displayName = fx;
var px = Om;

function hx(e) {
    const [t, n] = w.useState(void 0);
    return _n(() => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length) return;
                const i = o[0];
                let s, l;
                if ("borderBoxSize" in i) {
                    const a = i.borderBoxSize,
                        u = Array.isArray(a) ? a[0] : a;
                    s = u.inlineSize, l = u.blockSize
                } else s = e.offsetWidth, l = e.offsetHeight;
                n({
                    width: s,
                    height: l
                })
            });
            return r.observe(e, {
                box: "border-box"
            }), () => r.unobserve(e)
        } else n(void 0)
    }, [e]), t
}
var Am = "Popper",
    [Lm, Mm] = Hs(Am),
    [vE, Im] = Lm(Am),
    Dm = "PopperAnchor",
    zm = w.forwardRef((e, t) => {
        const {
            __scopePopper: n,
            virtualRef: r,
            ...o
        } = e, i = Im(Dm, n), s = w.useRef(null), l = Et(t, s);
        return w.useEffect(() => {
            i.onAnchorChange((r == null ? void 0 : r.current) || s.current)
        }), r ? null : S.jsx(We.div, { ...o,
            ref: l
        })
    });
zm.displayName = Dm;
var oc = "PopperContent",
    [mx, gx] = Lm(oc),
    Fm = w.forwardRef((e, t) => {
        var J, ur, Xt, zn, qt, cr;
        const {
            __scopePopper: n,
            side: r = "bottom",
            sideOffset: o = 0,
            align: i = "center",
            alignOffset: s = 0,
            arrowPadding: l = 0,
            avoidCollisions: a = !0,
            collisionBoundary: u = [],
            collisionPadding: c = 0,
            sticky: p = "partial",
            hideWhenDetached: m = !1,
            updatePositionStrategy: d = "optimized",
            onPlaced: x,
            ...v
        } = e, y = Im(oc, n), [h, f] = w.useState(null), g = Et(t, Zt => f(Zt)), [E, C] = w.useState(null), k = hx(E), b = (k == null ? void 0 : k.width) ?? 0, R = (k == null ? void 0 : k.height) ?? 0, A = r + (i !== "center" ? "-" + i : ""), O = typeof c == "number" ? c : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...c
        }, F = Array.isArray(u) ? u : [u], D = F.length > 0, Q = {
            padding: O,
            boundary: F.filter(yx),
            altBoundary: D
        }, {
            refs: L,
            floatingStyles: X,
            placement: $,
            isPositioned: W,
            middlewareData: T
        } = rx({
            strategy: "fixed",
            placement: A,
            whileElementsMounted: (...Zt) => G1(...Zt, {
                animationFrame: d === "always"
            }),
            elements: {
                reference: y.anchor
            },
            middleware: [ix({
                mainAxis: o + R,
                alignmentAxis: s
            }), a && sx({
                mainAxis: !0,
                crossAxis: !1,
                limiter: p === "partial" ? lx() : void 0,
                ...Q
            }), a && ax({ ...Q
            }), ux({ ...Q,
                apply: ({
                    elements: Zt,
                    rects: di,
                    availableWidth: ol,
                    availableHeight: fi
                }) => {
                    const {
                        width: il,
                        height: lo
                    } = di.reference, dr = Zt.floating.style;
                    dr.setProperty("--radix-popper-available-width", `${ol}px`), dr.setProperty("--radix-popper-available-height", `${fi}px`), dr.setProperty("--radix-popper-anchor-width", `${il}px`), dr.setProperty("--radix-popper-anchor-height", `${lo}px`)
                }
            }), E && dx({
                element: E,
                padding: l
            }), wx({
                arrowWidth: b,
                arrowHeight: R
            }), m && cx({
                strategy: "referenceHidden",
                ...Q
            })]
        }), [N, M] = Um($), V = Rn(x);
        _n(() => {
            W && (V == null || V())
        }, [W, V]);
        const z = (J = T.arrow) == null ? void 0 : J.x,
            K = (ur = T.arrow) == null ? void 0 : ur.y,
            G = ((Xt = T.arrow) == null ? void 0 : Xt.centerOffset) !== 0,
            [he, ke] = w.useState();
        return _n(() => {
            h && ke(window.getComputedStyle(h).zIndex)
        }, [h]), S.jsx("div", {
            ref: L.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: { ...X,
                transform: W ? X.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: he,
                "--radix-popper-transform-origin": [(zn = T.transformOrigin) == null ? void 0 : zn.x, (qt = T.transformOrigin) == null ? void 0 : qt.y].join(" "),
                ...((cr = T.hide) == null ? void 0 : cr.referenceHidden) && {
                    visibility: "hidden",
                    pointerEvents: "none"
                }
            },
            dir: e.dir,
            children: S.jsx(mx, {
                scope: n,
                placedSide: N,
                onArrowChange: C,
                arrowX: z,
                arrowY: K,
                shouldHideArrow: G,
                children: S.jsx(We.div, {
                    "data-side": N,
                    "data-align": M,
                    ...v,
                    ref: g,
                    style: { ...v.style,
                        animation: W ? void 0 : "none"
                    }
                })
            })
        })
    });
Fm.displayName = oc;
var $m = "PopperArrow",
    vx = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
    },
    Bm = w.forwardRef(function(t, n) {
        const {
            __scopePopper: r,
            ...o
        } = t, i = gx($m, r), s = vx[i.placedSide];
        return S.jsx("span", {
            ref: i.onArrowChange,
            style: {
                position: "absolute",
                left: i.arrowX,
                top: i.arrowY,
                [s]: 0,
                transformOrigin: {
                    top: "",
                    right: "0 0",
                    bottom: "center 0",
                    left: "100% 0"
                }[i.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)"
                }[i.placedSide],
                visibility: i.shouldHideArrow ? "hidden" : void 0
            },
            children: S.jsx(px, { ...o,
                ref: n,
                style: { ...o.style,
                    display: "block"
                }
            })
        })
    });
Bm.displayName = $m;

function yx(e) {
    return e !== null
}
var wx = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var y, h, f;
        const {
            placement: n,
            rects: r,
            middlewareData: o
        } = t, s = ((y = o.arrow) == null ? void 0 : y.centerOffset) !== 0, l = s ? 0 : e.arrowWidth, a = s ? 0 : e.arrowHeight, [u, c] = Um(n), p = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[c], m = (((h = o.arrow) == null ? void 0 : h.x) ?? 0) + l / 2, d = (((f = o.arrow) == null ? void 0 : f.y) ?? 0) + a / 2;
        let x = "",
            v = "";
        return u === "bottom" ? (x = s ? p : `${m}px`, v = `${-a}px`) : u === "top" ? (x = s ? p : `${m}px`, v = `${r.floating.height+a}px`) : u === "right" ? (x = `${-a}px`, v = s ? p : `${d}px`) : u === "left" && (x = `${r.floating.width+a}px`, v = s ? p : `${d}px`), {
            data: {
                x,
                y: v
            }
        }
    }
});

function Um(e) {
    const [t, n = "center"] = e.split("-");
    return [t, n]
}
var xx = zm,
    Sx = Fm,
    Ex = Bm,
    [qs, yE] = Hs("Tooltip", [Mm]),
    ic = Mm(),
    Vm = "TooltipProvider",
    Cx = 700,
    qd = "tooltip.open",
    [kx, Wm] = qs(Vm),
    Hm = e => {
        const {
            __scopeTooltip: t,
            delayDuration: n = Cx,
            skipDelayDuration: r = 300,
            disableHoverableContent: o = !1,
            children: i
        } = e, s = w.useRef(!0), l = w.useRef(!1), a = w.useRef(0);
        return w.useEffect(() => {
            const u = a.current;
            return () => window.clearTimeout(u)
        }, []), S.jsx(kx, {
            scope: t,
            isOpenDelayedRef: s,
            delayDuration: n,
            onOpen: w.useCallback(() => {
                window.clearTimeout(a.current), s.current = !1
            }, []),
            onClose: w.useCallback(() => {
                window.clearTimeout(a.current), a.current = window.setTimeout(() => s.current = !0, r)
            }, [r]),
            isPointerInTransitRef: l,
            onPointerInTransitChange: w.useCallback(u => {
                l.current = u
            }, []),
            disableHoverableContent: o,
            children: i
        })
    };
Hm.displayName = Vm;
var Qm = "Tooltip",
    [wE, Zs] = qs(Qm),
    Ha = "TooltipTrigger",
    bx = w.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            ...r
        } = e, o = Zs(Ha, n), i = Wm(Ha, n), s = ic(n), l = w.useRef(null), a = Et(t, l, o.onTriggerChange), u = w.useRef(!1), c = w.useRef(!1), p = w.useCallback(() => u.current = !1, []);
        return w.useEffect(() => () => document.removeEventListener("pointerup", p), [p]), S.jsx(xx, {
            asChild: !0,
            ...s,
            children: S.jsx(We.button, {
                "aria-describedby": o.open ? o.contentId : void 0,
                "data-state": o.stateAttribute,
                ...r,
                ref: a,
                onPointerMove: ve(e.onPointerMove, m => {
                    m.pointerType !== "touch" && !c.current && !i.isPointerInTransitRef.current && (o.onTriggerEnter(), c.current = !0)
                }),
                onPointerLeave: ve(e.onPointerLeave, () => {
                    o.onTriggerLeave(), c.current = !1
                }),
                onPointerDown: ve(e.onPointerDown, () => {
                    o.open && o.onClose(), u.current = !0, document.addEventListener("pointerup", p, {
                        once: !0
                    })
                }),
                onFocus: ve(e.onFocus, () => {
                    u.current || o.onOpen()
                }),
                onBlur: ve(e.onBlur, o.onClose),
                onClick: ve(e.onClick, o.onClose)
            })
        })
    });
bx.displayName = Ha;
var Px = "TooltipPortal",
    [xE, Tx] = qs(Px, {
        forceMount: void 0
    }),
    eo = "TooltipContent",
    Km = w.forwardRef((e, t) => {
        const n = Tx(eo, e.__scopeTooltip),
            {
                forceMount: r = n.forceMount,
                side: o = "top",
                ...i
            } = e,
            s = Zs(eo, e.__scopeTooltip);
        return S.jsx(Ku, {
            present: r || s.open,
            children: s.disableHoverableContent ? S.jsx(Ym, {
                side: o,
                ...i,
                ref: t
            }) : S.jsx(Nx, {
                side: o,
                ...i,
                ref: t
            })
        })
    }),
    Nx = w.forwardRef((e, t) => {
        const n = Zs(eo, e.__scopeTooltip),
            r = Wm(eo, e.__scopeTooltip),
            o = w.useRef(null),
            i = Et(t, o),
            [s, l] = w.useState(null),
            {
                trigger: a,
                onClose: u
            } = n,
            c = o.current,
            {
                onPointerInTransitChange: p
            } = r,
            m = w.useCallback(() => {
                l(null), p(!1)
            }, [p]),
            d = w.useCallback((x, v) => {
                const y = x.currentTarget,
                    h = {
                        x: x.clientX,
                        y: x.clientY
                    },
                    f = Ax(h, y.getBoundingClientRect()),
                    g = Lx(h, f),
                    E = Mx(v.getBoundingClientRect()),
                    C = Dx([...g, ...E]);
                l(C), p(!0)
            }, [p]);
        return w.useEffect(() => () => m(), [m]), w.useEffect(() => {
            if (a && c) {
                const x = y => d(y, c),
                    v = y => d(y, a);
                return a.addEventListener("pointerleave", x), c.addEventListener("pointerleave", v), () => {
                    a.removeEventListener("pointerleave", x), c.removeEventListener("pointerleave", v)
                }
            }
        }, [a, c, d, m]), w.useEffect(() => {
            if (s) {
                const x = v => {
                    const y = v.target,
                        h = {
                            x: v.clientX,
                            y: v.clientY
                        },
                        f = (a == null ? void 0 : a.contains(y)) || (c == null ? void 0 : c.contains(y)),
                        g = !Ix(h, s);
                    f ? m() : g && (m(), u())
                };
                return document.addEventListener("pointermove", x), () => document.removeEventListener("pointermove", x)
            }
        }, [a, c, s, u, m]), S.jsx(Ym, { ...e,
            ref: i
        })
    }),
    [Rx, _x] = qs(Qm, {
        isInside: !1
    }),
    jx = n0("TooltipContent"),
    Ym = w.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            children: r,
            "aria-label": o,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            ...l
        } = e, a = Zs(eo, n), u = ic(n), {
            onClose: c
        } = a;
        return w.useEffect(() => (document.addEventListener(qd, c), () => document.removeEventListener(qd, c)), [c]), w.useEffect(() => {
            if (a.trigger) {
                const p = m => {
                    const d = m.target;
                    d != null && d.contains(a.trigger) && c()
                };
                return window.addEventListener("scroll", p, {
                    capture: !0
                }), () => window.removeEventListener("scroll", p, {
                    capture: !0
                })
            }
        }, [a.trigger, c]), S.jsx(Qu, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            onFocusOutside: p => p.preventDefault(),
            onDismiss: c,
            children: S.jsxs(Sx, {
                "data-state": a.stateAttribute,
                ...u,
                ...l,
                ref: t,
                style: { ...l.style,
                    "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                },
                children: [S.jsx(jx, {
                    children: r
                }), S.jsx(Rx, {
                    scope: n,
                    isInside: !0,
                    children: S.jsx(T0, {
                        id: a.contentId,
                        role: "tooltip",
                        children: o || r
                    })
                })]
            })
        })
    });
Km.displayName = eo;
var Gm = "TooltipArrow",
    Ox = w.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            ...r
        } = e, o = ic(n);
        return _x(Gm, n).isInside ? null : S.jsx(Ex, { ...o,
            ...r,
            ref: t
        })
    });
Ox.displayName = Gm;

function Ax(e, t) {
    const n = Math.abs(t.top - e.y),
        r = Math.abs(t.bottom - e.y),
        o = Math.abs(t.right - e.x),
        i = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, i)) {
        case i:
            return "left";
        case o:
            return "right";
        case n:
            return "top";
        case r:
            return "bottom";
        default:
            throw new Error("unreachable")
    }
}

function Lx(e, t, n = 5) {
    const r = [];
    switch (t) {
        case "top":
            r.push({
                x: e.x - n,
                y: e.y + n
            }, {
                x: e.x + n,
                y: e.y + n
            });
            break;
        case "bottom":
            r.push({
                x: e.x - n,
                y: e.y - n
            }, {
                x: e.x + n,
                y: e.y - n
            });
            break;
        case "left":
            r.push({
                x: e.x + n,
                y: e.y - n
            }, {
                x: e.x + n,
                y: e.y + n
            });
            break;
        case "right":
            r.push({
                x: e.x - n,
                y: e.y - n
            }, {
                x: e.x - n,
                y: e.y + n
            });
            break
    }
    return r
}

function Mx(e) {
    const {
        top: t,
        right: n,
        bottom: r,
        left: o
    } = e;
    return [{
        x: o,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: o,
        y: r
    }]
}

function Ix(e, t) {
    const {
        x: n,
        y: r
    } = e;
    let o = !1;
    for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
        const l = t[i],
            a = t[s],
            u = l.x,
            c = l.y,
            p = a.x,
            m = a.y;
        c > r != m > r && n < (p - u) * (r - c) / (m - c) + u && (o = !o)
    }
    return o
}

function Dx(e) {
    const t = e.slice();
    return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), zx(t)
}

function zx(e) {
    if (e.length <= 1) return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2;) {
            const i = t[t.length - 1],
                s = t[t.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) t.pop();
            else break
        }
        t.push(o)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2;) {
            const i = n[n.length - 1],
                s = n[n.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) n.pop();
            else break
        }
        n.push(o)
    }
    return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var Fx = Hm,
    Xm = Km;
const $x = Fx,
    Bx = w.forwardRef(({
        className: e,
        sideOffset: t = 4,
        ...n
    }, r) => S.jsx(Xm, {
        ref: r,
        sideOffset: t,
        className: ar("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
        ...n
    }));
Bx.displayName = Xm.displayName;
var Js = class {
        constructor() {
            this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
        }
        subscribe(e) {
            return this.listeners.add(e), this.onSubscribe(), () => {
                this.listeners.delete(e), this.onUnsubscribe()
            }
        }
        hasListeners() {
            return this.listeners.size > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
    },
    el = typeof window > "u" || "Deno" in globalThis;

function ht() {}

function Ux(e, t) {
    return typeof e == "function" ? e(t) : e
}

function Vx(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}

function Wx(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}

function Qa(e, t) {
    return typeof e == "function" ? e(t) : e
}

function Hx(e, t) {
    return typeof e == "function" ? e(t) : e
}

function Zd(e, t) {
    const {
        type: n = "all",
        exact: r,
        fetchStatus: o,
        predicate: i,
        queryKey: s,
        stale: l
    } = e;
    if (s) {
        if (r) {
            if (t.queryHash !== sc(s, t.options)) return !1
        } else if (!ei(t.queryKey, s)) return !1
    }
    if (n !== "all") {
        const a = t.isActive();
        if (n === "active" && !a || n === "inactive" && a) return !1
    }
    return !(typeof l == "boolean" && t.isStale() !== l || o && o !== t.state.fetchStatus || i && !i(t))
}

function Jd(e, t) {
    const {
        exact: n,
        status: r,
        predicate: o,
        mutationKey: i
    } = e;
    if (i) {
        if (!t.options.mutationKey) return !1;
        if (n) {
            if (Jo(t.options.mutationKey) !== Jo(i)) return !1
        } else if (!ei(t.options.mutationKey, i)) return !1
    }
    return !(r && t.state.status !== r || o && !o(t))
}

function sc(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || Jo)(e)
}

function Jo(e) {
    return JSON.stringify(e, (t, n) => Ka(n) ? Object.keys(n).sort().reduce((r, o) => (r[o] = n[o], r), {}) : n)
}

function ei(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every(n => ei(e[n], t[n])) : !1
}

function qm(e, t) {
    if (e === t) return e;
    const n = ef(e) && ef(t);
    if (n || Ka(e) && Ka(t)) {
        const r = n ? e : Object.keys(e),
            o = r.length,
            i = n ? t : Object.keys(t),
            s = i.length,
            l = n ? [] : {},
            a = new Set(r);
        let u = 0;
        for (let c = 0; c < s; c++) {
            const p = n ? c : i[c];
            (!n && a.has(p) || n) && e[p] === void 0 && t[p] === void 0 ? (l[p] = void 0, u++) : (l[p] = qm(e[p], t[p]), l[p] === e[p] && e[p] !== void 0 && u++)
        }
        return o === s && u === o ? e : l
    }
    return t
}

function ef(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}

function Ka(e) {
    if (!tf(e)) return !1;
    const t = e.constructor;
    if (t === void 0) return !0;
    const n = t.prototype;
    return !(!tf(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}

function tf(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}

function Qx(e) {
    return new Promise(t => {
        setTimeout(t, e)
    })
}

function Kx(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? qm(e, t) : t
}

function Yx(e, t, n = 0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}

function Gx(e, t, n = 0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var lc = Symbol();

function Zm(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === lc ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var Qn, dn, zr, hf, Xx = (hf = class extends Js {
        constructor() {
            super();
            Z(this, Qn);
            Z(this, dn);
            Z(this, zr);
            U(this, zr, t => {
                if (!el && window.addEventListener) {
                    const n = () => t();
                    return window.addEventListener("visibilitychange", n, !1), () => {
                        window.removeEventListener("visibilitychange", n)
                    }
                }
            })
        }
        onSubscribe() {
            P(this, dn) || this.setEventListener(P(this, zr))
        }
        onUnsubscribe() {
            var t;
            this.hasListeners() || ((t = P(this, dn)) == null || t.call(this), U(this, dn, void 0))
        }
        setEventListener(t) {
            var n;
            U(this, zr, t), (n = P(this, dn)) == null || n.call(this), U(this, dn, t(r => {
                typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
            }))
        }
        setFocused(t) {
            P(this, Qn) !== t && (U(this, Qn, t), this.onFocus())
        }
        onFocus() {
            const t = this.isFocused();
            this.listeners.forEach(n => {
                n(t)
            })
        }
        isFocused() {
            var t;
            return typeof P(this, Qn) == "boolean" ? P(this, Qn) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
        }
    }, Qn = new WeakMap, dn = new WeakMap, zr = new WeakMap, hf),
    Jm = new Xx,
    Fr, fn, $r, mf, qx = (mf = class extends Js {
        constructor() {
            super();
            Z(this, Fr, !0);
            Z(this, fn);
            Z(this, $r);
            U(this, $r, t => {
                if (!el && window.addEventListener) {
                    const n = () => t(!0),
                        r = () => t(!1);
                    return window.addEventListener("online", n, !1), window.addEventListener("offline", r, !1), () => {
                        window.removeEventListener("online", n), window.removeEventListener("offline", r)
                    }
                }
            })
        }
        onSubscribe() {
            P(this, fn) || this.setEventListener(P(this, $r))
        }
        onUnsubscribe() {
            var t;
            this.hasListeners() || ((t = P(this, fn)) == null || t.call(this), U(this, fn, void 0))
        }
        setEventListener(t) {
            var n;
            U(this, $r, t), (n = P(this, fn)) == null || n.call(this), U(this, fn, t(this.setOnline.bind(this)))
        }
        setOnline(t) {
            P(this, Fr) !== t && (U(this, Fr, t), this.listeners.forEach(r => {
                r(t)
            }))
        }
        isOnline() {
            return P(this, Fr)
        }
    }, Fr = new WeakMap, fn = new WeakMap, $r = new WeakMap, mf),
    Ps = new qx;

function Zx() {
    let e, t;
    const n = new Promise((o, i) => {
        e = o, t = i
    });
    n.status = "pending", n.catch(() => {});

    function r(o) {
        Object.assign(n, o), delete n.resolve, delete n.reject
    }
    return n.resolve = o => {
        r({
            status: "fulfilled",
            value: o
        }), e(o)
    }, n.reject = o => {
        r({
            status: "rejected",
            reason: o
        }), t(o)
    }, n
}

function Jx(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}

function eg(e) {
    return (e ?? "online") === "online" ? Ps.isOnline() : !0
}
var tg = class extends Error {
    constructor(e) {
        super("CancelledError"), this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent
    }
};

function Bl(e) {
    return e instanceof tg
}

function ng(e) {
    let t = !1,
        n = 0,
        r = !1,
        o;
    const i = Zx(),
        s = v => {
            var y;
            r || (m(new tg(v)), (y = e.abort) == null || y.call(e))
        },
        l = () => {
            t = !0
        },
        a = () => {
            t = !1
        },
        u = () => Jm.isFocused() && (e.networkMode === "always" || Ps.isOnline()) && e.canRun(),
        c = () => eg(e.networkMode) && e.canRun(),
        p = v => {
            var y;
            r || (r = !0, (y = e.onSuccess) == null || y.call(e, v), o == null || o(), i.resolve(v))
        },
        m = v => {
            var y;
            r || (r = !0, (y = e.onError) == null || y.call(e, v), o == null || o(), i.reject(v))
        },
        d = () => new Promise(v => {
            var y;
            o = h => {
                (r || u()) && v(h)
            }, (y = e.onPause) == null || y.call(e)
        }).then(() => {
            var v;
            o = void 0, r || (v = e.onContinue) == null || v.call(e)
        }),
        x = () => {
            if (r) return;
            let v;
            const y = n === 0 ? e.initialPromise : void 0;
            try {
                v = y ?? e.fn()
            } catch (h) {
                v = Promise.reject(h)
            }
            Promise.resolve(v).then(p).catch(h => {
                var k;
                if (r) return;
                const f = e.retry ?? (el ? 0 : 3),
                    g = e.retryDelay ?? Jx,
                    E = typeof g == "function" ? g(n, h) : g,
                    C = f === !0 || typeof f == "number" && n < f || typeof f == "function" && f(n, h);
                if (t || !C) {
                    m(h);
                    return
                }
                n++, (k = e.onFail) == null || k.call(e, n, h), Qx(E).then(() => u() ? void 0 : d()).then(() => {
                    t ? m(h) : x()
                })
            })
        };
    return {
        promise: i,
        cancel: s,
        continue: () => (o == null || o(), i),
        cancelRetry: l,
        continueRetry: a,
        canStart: c,
        start: () => (c() ? x() : d().then(x), i)
    }
}
var eS = e => setTimeout(e, 0);

function tS() {
    let e = [],
        t = 0,
        n = l => {
            l()
        },
        r = l => {
            l()
        },
        o = eS;
    const i = l => {
            t ? e.push(l) : o(() => {
                n(l)
            })
        },
        s = () => {
            const l = e;
            e = [], l.length && o(() => {
                r(() => {
                    l.forEach(a => {
                        n(a)
                    })
                })
            })
        };
    return {
        batch: l => {
            let a;
            t++;
            try {
                a = l()
            } finally {
                t--, t || s()
            }
            return a
        },
        batchCalls: l => (...a) => {
            i(() => {
                l(...a)
            })
        },
        schedule: i,
        setNotifyFunction: l => {
            n = l
        },
        setBatchNotifyFunction: l => {
            r = l
        },
        setScheduler: l => {
            o = l
        }
    }
}
var Ae = tS(),
    Kn, gf, rg = (gf = class {
        constructor() {
            Z(this, Kn)
        }
        destroy() {
            this.clearGcTimeout()
        }
        scheduleGc() {
            this.clearGcTimeout(), Vx(this.gcTime) && U(this, Kn, setTimeout(() => {
                this.optionalRemove()
            }, this.gcTime))
        }
        updateGcTime(e) {
            this.gcTime = Math.max(this.gcTime || 0, e ?? (el ? 1 / 0 : 5 * 60 * 1e3))
        }
        clearGcTimeout() {
            P(this, Kn) && (clearTimeout(P(this, Kn)), U(this, Kn, void 0))
        }
    }, Kn = new WeakMap, gf),
    Br, Yn, et, Gn, Ne, ti, Xn, mt, It, vf, nS = (vf = class extends rg {
        constructor(t) {
            super();
            Z(this, mt);
            Z(this, Br);
            Z(this, Yn);
            Z(this, et);
            Z(this, Gn);
            Z(this, Ne);
            Z(this, ti);
            Z(this, Xn);
            U(this, Xn, !1), U(this, ti, t.defaultOptions), this.setOptions(t.options), this.observers = [], U(this, Gn, t.client), U(this, et, P(this, Gn).getQueryCache()), this.queryKey = t.queryKey, this.queryHash = t.queryHash, U(this, Br, oS(this.options)), this.state = t.state ?? P(this, Br), this.scheduleGc()
        }
        get meta() {
            return this.options.meta
        }
        get promise() {
            var t;
            return (t = P(this, Ne)) == null ? void 0 : t.promise
        }
        setOptions(t) {
            this.options = { ...P(this, ti),
                ...t
            }, this.updateGcTime(this.options.gcTime)
        }
        optionalRemove() {
            !this.observers.length && this.state.fetchStatus === "idle" && P(this, et).remove(this)
        }
        setData(t, n) {
            const r = Kx(this.state.data, t, this.options);
            return be(this, mt, It).call(this, {
                data: r,
                type: "success",
                dataUpdatedAt: n == null ? void 0 : n.updatedAt,
                manual: n == null ? void 0 : n.manual
            }), r
        }
        setState(t, n) {
            be(this, mt, It).call(this, {
                type: "setState",
                state: t,
                setStateOptions: n
            })
        }
        cancel(t) {
            var r, o;
            const n = (r = P(this, Ne)) == null ? void 0 : r.promise;
            return (o = P(this, Ne)) == null || o.cancel(t), n ? n.then(ht).catch(ht) : Promise.resolve()
        }
        destroy() {
            super.destroy(), this.cancel({
                silent: !0
            })
        }
        reset() {
            this.destroy(), this.setState(P(this, Br))
        }
        isActive() {
            return this.observers.some(t => Hx(t.options.enabled, this) !== !1)
        }
        isDisabled() {
            return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === lc || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
        }
        isStatic() {
            return this.getObserversCount() > 0 ? this.observers.some(t => Qa(t.options.staleTime, this) === "static") : !1
        }
        isStale() {
            return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
        }
        isStaleByTime(t = 0) {
            return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !Wx(this.state.dataUpdatedAt, t)
        }
        onFocus() {
            var n;
            const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
            t == null || t.refetch({
                cancelRefetch: !1
            }), (n = P(this, Ne)) == null || n.continue()
        }
        onOnline() {
            var n;
            const t = this.observers.find(r => r.shouldFetchOnReconnect());
            t == null || t.refetch({
                cancelRefetch: !1
            }), (n = P(this, Ne)) == null || n.continue()
        }
        addObserver(t) {
            this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), P(this, et).notify({
                type: "observerAdded",
                query: this,
                observer: t
            }))
        }
        removeObserver(t) {
            this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t), this.observers.length || (P(this, Ne) && (P(this, Xn) ? P(this, Ne).cancel({
                revert: !0
            }) : P(this, Ne).cancelRetry()), this.scheduleGc()), P(this, et).notify({
                type: "observerRemoved",
                query: this,
                observer: t
            }))
        }
        getObserversCount() {
            return this.observers.length
        }
        invalidate() {
            this.state.isInvalidated || be(this, mt, It).call(this, {
                type: "invalidate"
            })
        }
        fetch(t, n) {
            var u, c, p;
            if (this.state.fetchStatus !== "idle") {
                if (this.state.data !== void 0 && (n != null && n.cancelRefetch)) this.cancel({
                    silent: !0
                });
                else if (P(this, Ne)) return P(this, Ne).continueRetry(), P(this, Ne).promise
            }
            if (t && this.setOptions(t), !this.options.queryFn) {
                const m = this.observers.find(d => d.options.queryFn);
                m && this.setOptions(m.options)
            }
            const r = new AbortController,
                o = m => {
                    Object.defineProperty(m, "signal", {
                        enumerable: !0,
                        get: () => (U(this, Xn, !0), r.signal)
                    })
                },
                i = () => {
                    const m = Zm(this.options, n),
                        x = (() => {
                            const v = {
                                client: P(this, Gn),
                                queryKey: this.queryKey,
                                meta: this.meta
                            };
                            return o(v), v
                        })();
                    return U(this, Xn, !1), this.options.persister ? this.options.persister(m, x, this) : m(x)
                },
                l = (() => {
                    const m = {
                        fetchOptions: n,
                        options: this.options,
                        queryKey: this.queryKey,
                        client: P(this, Gn),
                        state: this.state,
                        fetchFn: i
                    };
                    return o(m), m
                })();
            (u = this.options.behavior) == null || u.onFetch(l, this), U(this, Yn, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((c = l.fetchOptions) == null ? void 0 : c.meta)) && be(this, mt, It).call(this, {
                type: "fetch",
                meta: (p = l.fetchOptions) == null ? void 0 : p.meta
            });
            const a = m => {
                var d, x, v, y;
                Bl(m) && m.silent || be(this, mt, It).call(this, {
                    type: "error",
                    error: m
                }), Bl(m) || ((x = (d = P(this, et).config).onError) == null || x.call(d, m, this), (y = (v = P(this, et).config).onSettled) == null || y.call(v, this.state.data, m, this)), this.scheduleGc()
            };
            return U(this, Ne, ng({
                initialPromise: n == null ? void 0 : n.initialPromise,
                fn: l.fetchFn,
                abort: r.abort.bind(r),
                onSuccess: m => {
                    var d, x, v, y;
                    if (m === void 0) {
                        a(new Error(`${this.queryHash} data is undefined`));
                        return
                    }
                    try {
                        this.setData(m)
                    } catch (h) {
                        a(h);
                        return
                    }(x = (d = P(this, et).config).onSuccess) == null || x.call(d, m, this), (y = (v = P(this, et).config).onSettled) == null || y.call(v, m, this.state.error, this), this.scheduleGc()
                },
                onError: a,
                onFail: (m, d) => {
                    be(this, mt, It).call(this, {
                        type: "failed",
                        failureCount: m,
                        error: d
                    })
                },
                onPause: () => {
                    be(this, mt, It).call(this, {
                        type: "pause"
                    })
                },
                onContinue: () => {
                    be(this, mt, It).call(this, {
                        type: "continue"
                    })
                },
                retry: l.options.retry,
                retryDelay: l.options.retryDelay,
                networkMode: l.options.networkMode,
                canRun: () => !0
            })), P(this, Ne).start()
        }
    }, Br = new WeakMap, Yn = new WeakMap, et = new WeakMap, Gn = new WeakMap, Ne = new WeakMap, ti = new WeakMap, Xn = new WeakMap, mt = new WeakSet, It = function(t) {
        const n = r => {
            switch (t.type) {
                case "failed":
                    return { ...r,
                        fetchFailureCount: t.failureCount,
                        fetchFailureReason: t.error
                    };
                case "pause":
                    return { ...r,
                        fetchStatus: "paused"
                    };
                case "continue":
                    return { ...r,
                        fetchStatus: "fetching"
                    };
                case "fetch":
                    return { ...r,
                        ...rS(r.data, this.options),
                        fetchMeta: t.meta ?? null
                    };
                case "success":
                    return U(this, Yn, void 0), { ...r,
                        data: t.data,
                        dataUpdateCount: r.dataUpdateCount + 1,
                        dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                        error: null,
                        isInvalidated: !1,
                        status: "success",
                        ...!t.manual && {
                            fetchStatus: "idle",
                            fetchFailureCount: 0,
                            fetchFailureReason: null
                        }
                    };
                case "error":
                    const o = t.error;
                    return Bl(o) && o.revert && P(this, Yn) ? { ...P(this, Yn),
                        fetchStatus: "idle"
                    } : { ...r,
                        error: o,
                        errorUpdateCount: r.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: r.fetchFailureCount + 1,
                        fetchFailureReason: o,
                        fetchStatus: "idle",
                        status: "error"
                    };
                case "invalidate":
                    return { ...r,
                        isInvalidated: !0
                    };
                case "setState":
                    return { ...r,
                        ...t.state
                    }
            }
        };
        this.state = n(this.state), Ae.batch(() => {
            this.observers.forEach(r => {
                r.onQueryUpdate()
            }), P(this, et).notify({
                query: this,
                type: "updated",
                action: t
            })
        })
    }, vf);

function rS(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: eg(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}

function oS(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData,
        n = t !== void 0,
        r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Tt, yf, iS = (yf = class extends Js {
        constructor(t = {}) {
            super();
            Z(this, Tt);
            this.config = t, U(this, Tt, new Map)
        }
        build(t, n, r) {
            const o = n.queryKey,
                i = n.queryHash ?? sc(o, n);
            let s = this.get(i);
            return s || (s = new nS({
                client: t,
                queryKey: o,
                queryHash: i,
                options: t.defaultQueryOptions(n),
                state: r,
                defaultOptions: t.getQueryDefaults(o)
            }), this.add(s)), s
        }
        add(t) {
            P(this, Tt).has(t.queryHash) || (P(this, Tt).set(t.queryHash, t), this.notify({
                type: "added",
                query: t
            }))
        }
        remove(t) {
            const n = P(this, Tt).get(t.queryHash);
            n && (t.destroy(), n === t && P(this, Tt).delete(t.queryHash), this.notify({
                type: "removed",
                query: t
            }))
        }
        clear() {
            Ae.batch(() => {
                this.getAll().forEach(t => {
                    this.remove(t)
                })
            })
        }
        get(t) {
            return P(this, Tt).get(t)
        }
        getAll() {
            return [...P(this, Tt).values()]
        }
        find(t) {
            const n = {
                exact: !0,
                ...t
            };
            return this.getAll().find(r => Zd(n, r))
        }
        findAll(t = {}) {
            const n = this.getAll();
            return Object.keys(t).length > 0 ? n.filter(r => Zd(t, r)) : n
        }
        notify(t) {
            Ae.batch(() => {
                this.listeners.forEach(n => {
                    n(t)
                })
            })
        }
        onFocus() {
            Ae.batch(() => {
                this.getAll().forEach(t => {
                    t.onFocus()
                })
            })
        }
        onOnline() {
            Ae.batch(() => {
                this.getAll().forEach(t => {
                    t.onOnline()
                })
            })
        }
    }, Tt = new WeakMap, yf),
    Nt, je, qn, Rt, sn, wf, sS = (wf = class extends rg {
        constructor(t) {
            super();
            Z(this, Rt);
            Z(this, Nt);
            Z(this, je);
            Z(this, qn);
            this.mutationId = t.mutationId, U(this, je, t.mutationCache), U(this, Nt, []), this.state = t.state || lS(), this.setOptions(t.options), this.scheduleGc()
        }
        setOptions(t) {
            this.options = t, this.updateGcTime(this.options.gcTime)
        }
        get meta() {
            return this.options.meta
        }
        addObserver(t) {
            P(this, Nt).includes(t) || (P(this, Nt).push(t), this.clearGcTimeout(), P(this, je).notify({
                type: "observerAdded",
                mutation: this,
                observer: t
            }))
        }
        removeObserver(t) {
            U(this, Nt, P(this, Nt).filter(n => n !== t)), this.scheduleGc(), P(this, je).notify({
                type: "observerRemoved",
                mutation: this,
                observer: t
            })
        }
        optionalRemove() {
            P(this, Nt).length || (this.state.status === "pending" ? this.scheduleGc() : P(this, je).remove(this))
        }
        continue () {
            var t;
            return ((t = P(this, qn)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
        }
        async execute(t) {
            var i, s, l, a, u, c, p, m, d, x, v, y, h, f, g, E, C, k, b, R;
            const n = () => {
                be(this, Rt, sn).call(this, {
                    type: "continue"
                })
            };
            U(this, qn, ng({
                fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
                onFail: (A, O) => {
                    be(this, Rt, sn).call(this, {
                        type: "failed",
                        failureCount: A,
                        error: O
                    })
                },
                onPause: () => {
                    be(this, Rt, sn).call(this, {
                        type: "pause"
                    })
                },
                onContinue: n,
                retry: this.options.retry ?? 0,
                retryDelay: this.options.retryDelay,
                networkMode: this.options.networkMode,
                canRun: () => P(this, je).canRun(this)
            }));
            const r = this.state.status === "pending",
                o = !P(this, qn).canStart();
            try {
                if (r) n();
                else {
                    be(this, Rt, sn).call(this, {
                        type: "pending",
                        variables: t,
                        isPaused: o
                    }), await ((s = (i = P(this, je).config).onMutate) == null ? void 0 : s.call(i, t, this));
                    const O = await ((a = (l = this.options).onMutate) == null ? void 0 : a.call(l, t));
                    O !== this.state.context && be(this, Rt, sn).call(this, {
                        type: "pending",
                        context: O,
                        variables: t,
                        isPaused: o
                    })
                }
                const A = await P(this, qn).start();
                return await ((c = (u = P(this, je).config).onSuccess) == null ? void 0 : c.call(u, A, t, this.state.context, this)), await ((m = (p = this.options).onSuccess) == null ? void 0 : m.call(p, A, t, this.state.context)), await ((x = (d = P(this, je).config).onSettled) == null ? void 0 : x.call(d, A, null, this.state.variables, this.state.context, this)), await ((y = (v = this.options).onSettled) == null ? void 0 : y.call(v, A, null, t, this.state.context)), be(this, Rt, sn).call(this, {
                    type: "success",
                    data: A
                }), A
            } catch (A) {
                try {
                    throw await ((f = (h = P(this, je).config).onError) == null ? void 0 : f.call(h, A, t, this.state.context, this)), await ((E = (g = this.options).onError) == null ? void 0 : E.call(g, A, t, this.state.context)), await ((k = (C = P(this, je).config).onSettled) == null ? void 0 : k.call(C, void 0, A, this.state.variables, this.state.context, this)), await ((R = (b = this.options).onSettled) == null ? void 0 : R.call(b, void 0, A, t, this.state.context)), A
                } finally {
                    be(this, Rt, sn).call(this, {
                        type: "error",
                        error: A
                    })
                }
            } finally {
                P(this, je).runNext(this)
            }
        }
    }, Nt = new WeakMap, je = new WeakMap, qn = new WeakMap, Rt = new WeakSet, sn = function(t) {
        const n = r => {
            switch (t.type) {
                case "failed":
                    return { ...r,
                        failureCount: t.failureCount,
                        failureReason: t.error
                    };
                case "pause":
                    return { ...r,
                        isPaused: !0
                    };
                case "continue":
                    return { ...r,
                        isPaused: !1
                    };
                case "pending":
                    return { ...r,
                        context: t.context,
                        data: void 0,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        isPaused: t.isPaused,
                        status: "pending",
                        variables: t.variables,
                        submittedAt: Date.now()
                    };
                case "success":
                    return { ...r,
                        data: t.data,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        status: "success",
                        isPaused: !1
                    };
                case "error":
                    return { ...r,
                        data: void 0,
                        error: t.error,
                        failureCount: r.failureCount + 1,
                        failureReason: t.error,
                        isPaused: !1,
                        status: "error"
                    }
            }
        };
        this.state = n(this.state), Ae.batch(() => {
            P(this, Nt).forEach(r => {
                r.onMutationUpdate(t)
            }), P(this, je).notify({
                mutation: this,
                type: "updated",
                action: t
            })
        })
    }, wf);

function lS() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var Ft, gt, ni, xf, aS = (xf = class extends Js {
    constructor(t = {}) {
        super();
        Z(this, Ft);
        Z(this, gt);
        Z(this, ni);
        this.config = t, U(this, Ft, new Set), U(this, gt, new Map), U(this, ni, 0)
    }
    build(t, n, r) {
        const o = new sS({
            mutationCache: this,
            mutationId: ++hi(this, ni)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(o), o
    }
    add(t) {
        P(this, Ft).add(t);
        const n = Ii(t);
        if (typeof n == "string") {
            const r = P(this, gt).get(n);
            r ? r.push(t) : P(this, gt).set(n, [t])
        }
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        if (P(this, Ft).delete(t)) {
            const n = Ii(t);
            if (typeof n == "string") {
                const r = P(this, gt).get(n);
                if (r)
                    if (r.length > 1) {
                        const o = r.indexOf(t);
                        o !== -1 && r.splice(o, 1)
                    } else r[0] === t && P(this, gt).delete(n)
            }
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const n = Ii(t);
        if (typeof n == "string") {
            const r = P(this, gt).get(n),
                o = r == null ? void 0 : r.find(i => i.state.status === "pending");
            return !o || o === t
        } else return !0
    }
    runNext(t) {
        var r;
        const n = Ii(t);
        if (typeof n == "string") {
            const o = (r = P(this, gt).get(n)) == null ? void 0 : r.find(i => i !== t && i.state.isPaused);
            return (o == null ? void 0 : o.continue()) ?? Promise.resolve()
        } else return Promise.resolve()
    }
    clear() {
        Ae.batch(() => {
            P(this, Ft).forEach(t => {
                this.notify({
                    type: "removed",
                    mutation: t
                })
            }), P(this, Ft).clear(), P(this, gt).clear()
        })
    }
    getAll() {
        return Array.from(P(this, Ft))
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Jd(n, r))
    }
    findAll(t = {}) {
        return this.getAll().filter(n => Jd(t, n))
    }
    notify(t) {
        Ae.batch(() => {
            this.listeners.forEach(n => {
                n(t)
            })
        })
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return Ae.batch(() => Promise.all(t.map(n => n.continue().catch(ht))))
    }
}, Ft = new WeakMap, gt = new WeakMap, ni = new WeakMap, xf);

function Ii(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id
}

function nf(e) {
    return {
        onFetch: (t, n) => {
            var c, p, m, d, x;
            const r = t.options,
                o = (m = (p = (c = t.fetchOptions) == null ? void 0 : c.meta) == null ? void 0 : p.fetchMore) == null ? void 0 : m.direction,
                i = ((d = t.state.data) == null ? void 0 : d.pages) || [],
                s = ((x = t.state.data) == null ? void 0 : x.pageParams) || [];
            let l = {
                    pages: [],
                    pageParams: []
                },
                a = 0;
            const u = async () => {
                let v = !1;
                const y = g => {
                        Object.defineProperty(g, "signal", {
                            enumerable: !0,
                            get: () => (t.signal.aborted ? v = !0 : t.signal.addEventListener("abort", () => {
                                v = !0
                            }), t.signal)
                        })
                    },
                    h = Zm(t.options, t.fetchOptions),
                    f = async (g, E, C) => {
                        if (v) return Promise.reject();
                        if (E == null && g.pages.length) return Promise.resolve(g);
                        const b = (() => {
                                const F = {
                                    client: t.client,
                                    queryKey: t.queryKey,
                                    pageParam: E,
                                    direction: C ? "backward" : "forward",
                                    meta: t.options.meta
                                };
                                return y(F), F
                            })(),
                            R = await h(b),
                            {
                                maxPages: A
                            } = t.options,
                            O = C ? Gx : Yx;
                        return {
                            pages: O(g.pages, R, A),
                            pageParams: O(g.pageParams, E, A)
                        }
                    };
                if (o && i.length) {
                    const g = o === "backward",
                        E = g ? uS : rf,
                        C = {
                            pages: i,
                            pageParams: s
                        },
                        k = E(r, C);
                    l = await f(C, k, g)
                } else {
                    const g = e ?? i.length;
                    do {
                        const E = a === 0 ? s[0] ?? r.initialPageParam : rf(r, l);
                        if (a > 0 && E == null) break;
                        l = await f(l, E), a++
                    } while (a < g)
                }
                return l
            };
            t.options.persister ? t.fetchFn = () => {
                var v, y;
                return (y = (v = t.options).persister) == null ? void 0 : y.call(v, u, {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            } : t.fetchFn = u
        }
    }
}

function rf(e, {
    pages: t,
    pageParams: n
}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}

function uS(e, {
    pages: t,
    pageParams: n
}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var de, pn, hn, Ur, Vr, mn, Wr, Hr, Sf, cS = (Sf = class {
        constructor(e = {}) {
            Z(this, de);
            Z(this, pn);
            Z(this, hn);
            Z(this, Ur);
            Z(this, Vr);
            Z(this, mn);
            Z(this, Wr);
            Z(this, Hr);
            U(this, de, e.queryCache || new iS), U(this, pn, e.mutationCache || new aS), U(this, hn, e.defaultOptions || {}), U(this, Ur, new Map), U(this, Vr, new Map), U(this, mn, 0)
        }
        mount() {
            hi(this, mn)._++, P(this, mn) === 1 && (U(this, Wr, Jm.subscribe(async e => {
                e && (await this.resumePausedMutations(), P(this, de).onFocus())
            })), U(this, Hr, Ps.subscribe(async e => {
                e && (await this.resumePausedMutations(), P(this, de).onOnline())
            })))
        }
        unmount() {
            var e, t;
            hi(this, mn)._--, P(this, mn) === 0 && ((e = P(this, Wr)) == null || e.call(this), U(this, Wr, void 0), (t = P(this, Hr)) == null || t.call(this), U(this, Hr, void 0))
        }
        isFetching(e) {
            return P(this, de).findAll({ ...e,
                fetchStatus: "fetching"
            }).length
        }
        isMutating(e) {
            return P(this, pn).findAll({ ...e,
                status: "pending"
            }).length
        }
        getQueryData(e) {
            var n;
            const t = this.defaultQueryOptions({
                queryKey: e
            });
            return (n = P(this, de).get(t.queryHash)) == null ? void 0 : n.state.data
        }
        ensureQueryData(e) {
            const t = this.defaultQueryOptions(e),
                n = P(this, de).build(this, t),
                r = n.state.data;
            return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(Qa(t.staleTime, n)) && this.prefetchQuery(t), Promise.resolve(r))
        }
        getQueriesData(e) {
            return P(this, de).findAll(e).map(({
                queryKey: t,
                state: n
            }) => {
                const r = n.data;
                return [t, r]
            })
        }
        setQueryData(e, t, n) {
            const r = this.defaultQueryOptions({
                    queryKey: e
                }),
                o = P(this, de).get(r.queryHash),
                i = o == null ? void 0 : o.state.data,
                s = Ux(t, i);
            if (s !== void 0) return P(this, de).build(this, r).setData(s, { ...n,
                manual: !0
            })
        }
        setQueriesData(e, t, n) {
            return Ae.batch(() => P(this, de).findAll(e).map(({
                queryKey: r
            }) => [r, this.setQueryData(r, t, n)]))
        }
        getQueryState(e) {
            var n;
            const t = this.defaultQueryOptions({
                queryKey: e
            });
            return (n = P(this, de).get(t.queryHash)) == null ? void 0 : n.state
        }
        removeQueries(e) {
            const t = P(this, de);
            Ae.batch(() => {
                t.findAll(e).forEach(n => {
                    t.remove(n)
                })
            })
        }
        resetQueries(e, t) {
            const n = P(this, de);
            return Ae.batch(() => (n.findAll(e).forEach(r => {
                r.reset()
            }), this.refetchQueries({
                type: "active",
                ...e
            }, t)))
        }
        cancelQueries(e, t = {}) {
            const n = {
                    revert: !0,
                    ...t
                },
                r = Ae.batch(() => P(this, de).findAll(e).map(o => o.cancel(n)));
            return Promise.all(r).then(ht).catch(ht)
        }
        invalidateQueries(e, t = {}) {
            return Ae.batch(() => (P(this, de).findAll(e).forEach(n => {
                n.invalidate()
            }), (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({ ...e,
                type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
            }, t)))
        }
        refetchQueries(e, t = {}) {
            const n = { ...t,
                    cancelRefetch: t.cancelRefetch ?? !0
                },
                r = Ae.batch(() => P(this, de).findAll(e).filter(o => !o.isDisabled() && !o.isStatic()).map(o => {
                    let i = o.fetch(void 0, n);
                    return n.throwOnError || (i = i.catch(ht)), o.state.fetchStatus === "paused" ? Promise.resolve() : i
                }));
            return Promise.all(r).then(ht)
        }
        fetchQuery(e) {
            const t = this.defaultQueryOptions(e);
            t.retry === void 0 && (t.retry = !1);
            const n = P(this, de).build(this, t);
            return n.isStaleByTime(Qa(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
        }
        prefetchQuery(e) {
            return this.fetchQuery(e).then(ht).catch(ht)
        }
        fetchInfiniteQuery(e) {
            return e.behavior = nf(e.pages), this.fetchQuery(e)
        }
        prefetchInfiniteQuery(e) {
            return this.fetchInfiniteQuery(e).then(ht).catch(ht)
        }
        ensureInfiniteQueryData(e) {
            return e.behavior = nf(e.pages), this.ensureQueryData(e)
        }
        resumePausedMutations() {
            return Ps.isOnline() ? P(this, pn).resumePausedMutations() : Promise.resolve()
        }
        getQueryCache() {
            return P(this, de)
        }
        getMutationCache() {
            return P(this, pn)
        }
        getDefaultOptions() {
            return P(this, hn)
        }
        setDefaultOptions(e) {
            U(this, hn, e)
        }
        setQueryDefaults(e, t) {
            P(this, Ur).set(Jo(e), {
                queryKey: e,
                defaultOptions: t
            })
        }
        getQueryDefaults(e) {
            const t = [...P(this, Ur).values()],
                n = {};
            return t.forEach(r => {
                ei(e, r.queryKey) && Object.assign(n, r.defaultOptions)
            }), n
        }
        setMutationDefaults(e, t) {
            P(this, Vr).set(Jo(e), {
                mutationKey: e,
                defaultOptions: t
            })
        }
        getMutationDefaults(e) {
            const t = [...P(this, Vr).values()],
                n = {};
            return t.forEach(r => {
                ei(e, r.mutationKey) && Object.assign(n, r.defaultOptions)
            }), n
        }
        defaultQueryOptions(e) {
            if (e._defaulted) return e;
            const t = { ...P(this, hn).queries,
                ...this.getQueryDefaults(e.queryKey),
                ...e,
                _defaulted: !0
            };
            return t.queryHash || (t.queryHash = sc(t.queryKey, t)), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === lc && (t.enabled = !1), t
        }
        defaultMutationOptions(e) {
            return e != null && e._defaulted ? e : { ...P(this, hn).mutations,
                ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
                ...e,
                _defaulted: !0
            }
        }
        clear() {
            P(this, de).clear(), P(this, pn).clear()
        }
    }, de = new WeakMap, pn = new WeakMap, hn = new WeakMap, Ur = new WeakMap, Vr = new WeakMap, mn = new WeakMap, Wr = new WeakMap, Hr = new WeakMap, Sf),
    dS = w.createContext(void 0),
    fS = ({
        client: e,
        children: t
    }) => (w.useEffect(() => (e.mount(), () => {
        e.unmount()
    }), [e]), S.jsx(dS.Provider, {
        value: e,
        children: t
    }));
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ts() {
    return Ts = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Ts.apply(this, arguments)
}
var yn;
(function(e) {
    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(yn || (yn = {}));
const of = "popstate";

function pS(e) {
    e === void 0 && (e = {});

    function t(r, o) {
        let {
            pathname: i,
            search: s,
            hash: l
        } = r.location;
        return Ya("", {
            pathname: i,
            search: s,
            hash: l
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }

    function n(r, o) {
        return typeof o == "string" ? o : ig(o)
    }
    return mS(t, n, null, e)
}

function Ve(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function og(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}

function hS() {
    return Math.random().toString(36).substr(2, 8)
}

function sf(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}

function Ya(e, t, n, r) {
    return n === void 0 && (n = null), Ts({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? tl(t) : t, {
        state: n,
        key: t && t.key || r || hS()
    })
}

function ig(e) {
    let {
        pathname: t = "/",
        search: n = "",
        hash: r = ""
    } = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t
}

function tl(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
    }
    return t
}

function mS(e, t, n, r) {
    r === void 0 && (r = {});
    let {
        window: o = document.defaultView,
        v5Compat: i = !1
    } = r, s = o.history, l = yn.Pop, a = null, u = c();
    u == null && (u = 0, s.replaceState(Ts({}, s.state, {
        idx: u
    }), ""));

    function c() {
        return (s.state || {
            idx: null
        }).idx
    }

    function p() {
        l = yn.Pop;
        let y = c(),
            h = y == null ? null : y - u;
        u = y, a && a({
            action: l,
            location: v.location,
            delta: h
        })
    }

    function m(y, h) {
        l = yn.Push;
        let f = Ya(v.location, y, h);
        u = c() + 1;
        let g = sf(f, u),
            E = v.createHref(f);
        try {
            s.pushState(g, "", E)
        } catch (C) {
            if (C instanceof DOMException && C.name === "DataCloneError") throw C;
            o.location.assign(E)
        }
        i && a && a({
            action: l,
            location: v.location,
            delta: 1
        })
    }

    function d(y, h) {
        l = yn.Replace;
        let f = Ya(v.location, y, h);
        u = c();
        let g = sf(f, u),
            E = v.createHref(f);
        s.replaceState(g, "", E), i && a && a({
            action: l,
            location: v.location,
            delta: 0
        })
    }

    function x(y) {
        let h = o.location.origin !== "null" ? o.location.origin : o.location.href,
            f = typeof y == "string" ? y : ig(y);
        return f = f.replace(/ $/, "%20"), Ve(h, "No window.location.(origin|href) available to create URL for href: " + f), new URL(f, h)
    }
    let v = {
        get action() {
            return l
        },
        get location() {
            return e(o, s)
        },
        listen(y) {
            if (a) throw new Error("A history only accepts one active listener");
            return o.addEventListener( of , p), a = y, () => {
                o.removeEventListener( of , p), a = null
            }
        },
        createHref(y) {
            return t(o, y)
        },
        createURL: x,
        encodeLocation(y) {
            let h = x(y);
            return {
                pathname: h.pathname,
                search: h.search,
                hash: h.hash
            }
        },
        push: m,
        replace: d,
        go(y) {
            return s.go(y)
        }
    };
    return v
}
var lf;
(function(e) {
    e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
})(lf || (lf = {}));

function gS(e, t, n) {
    return n === void 0 && (n = "/"), vS(e, t, n, !1)
}

function vS(e, t, n, r) {
    let o = typeof t == "string" ? tl(t) : t,
        i = ag(o.pathname || "/", n);
    if (i == null) return null;
    let s = sg(e);
    yS(s);
    let l = null;
    for (let a = 0; l == null && a < s.length; ++a) {
        let u = RS(i);
        l = TS(s[a], u, r)
    }
    return l
}

function sg(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let o = (i, s, l) => {
        let a = {
            relativePath: l === void 0 ? i.path || "" : l,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: s,
            route: i
        };
        a.relativePath.startsWith("/") && (Ve(a.relativePath.startsWith(r), 'Absolute route path "' + a.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), a.relativePath = a.relativePath.slice(r.length));
        let u = Dr([r, a.relativePath]),
            c = n.concat(a);
        i.children && i.children.length > 0 && (Ve(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')), sg(i.children, t, c, u)), !(i.path == null && !i.index) && t.push({
            path: u,
            score: bS(u, i.index),
            routesMeta: c
        })
    };
    return e.forEach((i, s) => {
        var l;
        if (i.path === "" || !((l = i.path) != null && l.includes("?"))) o(i, s);
        else
            for (let a of lg(i.path)) o(i, s, a)
    }), t
}

function lg(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t, o = n.endsWith("?"), i = n.replace(/\?$/, "");
    if (r.length === 0) return o ? [i, ""] : [i];
    let s = lg(r.join("/")),
        l = [];
    return l.push(...s.map(a => a === "" ? i : [i, a].join("/"))), o && l.push(...s), l.map(a => e.startsWith("/") && a === "" ? "/" : a)
}

function yS(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : PS(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const wS = /^:[\w-]+$/,
    xS = 3,
    SS = 2,
    ES = 1,
    CS = 10,
    kS = -2,
    af = e => e === "*";

function bS(e, t) {
    let n = e.split("/"),
        r = n.length;
    return n.some(af) && (r += kS), t && (r += SS), n.filter(o => !af(o)).reduce((o, i) => o + (wS.test(i) ? xS : i === "" ? ES : CS), r)
}

function PS(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function TS(e, t, n) {
    let {
        routesMeta: r
    } = e, o = {}, i = "/", s = [];
    for (let l = 0; l < r.length; ++l) {
        let a = r[l],
            u = l === r.length - 1,
            c = i === "/" ? t : t.slice(i.length) || "/",
            p = uf({
                path: a.relativePath,
                caseSensitive: a.caseSensitive,
                end: u
            }, c),
            m = a.route;
        if (!p && u && n && !r[r.length - 1].route.index && (p = uf({
                path: a.relativePath,
                caseSensitive: a.caseSensitive,
                end: !1
            }, c)), !p) return null;
        Object.assign(o, p.params), s.push({
            params: o,
            pathname: Dr([i, p.pathname]),
            pathnameBase: _S(Dr([i, p.pathnameBase])),
            route: m
        }), p.pathnameBase !== "/" && (i = Dr([i, p.pathnameBase]))
    }
    return s
}

function uf(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [n, r] = NS(e.path, e.caseSensitive, e.end), o = t.match(n);
    if (!o) return null;
    let i = o[0],
        s = i.replace(/(.)\/+$/, "$1"),
        l = o.slice(1);
    return {
        params: r.reduce((u, c, p) => {
            let {
                paramName: m,
                isOptional: d
            } = c;
            if (m === "*") {
                let v = l[p] || "";
                s = i.slice(0, i.length - v.length).replace(/(.)\/+$/, "$1")
            }
            const x = l[p];
            return d && !x ? u[m] = void 0 : u[m] = (x || "").replace(/%2F/g, "/"), u
        }, {}),
        pathname: i,
        pathnameBase: s,
        pattern: e
    }
}

function NS(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !0), og(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = [],
        o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, l, a) => (r.push({
            paramName: l,
            isOptional: a != null
        }), a ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }), o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, t ? void 0 : "i"), r]
}

function RS(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return og(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e
    }
}

function ag(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
const Dr = e => e.join("/").replace(/\/\/+/g, "/"),
    _S = e => e.replace(/\/+$/, "").replace(/^\/*/, "/");

function jS(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
const ug = ["post", "put", "patch", "delete"];
new Set(ug);
const OS = ["get", ...ug];
new Set(OS);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ns() {
    return Ns = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Ns.apply(this, arguments)
}
const AS = w.createContext(null),
    LS = w.createContext(null),
    cg = w.createContext(null),
    nl = w.createContext(null),
    rl = w.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    }),
    dg = w.createContext(null);

function ac() {
    return w.useContext(nl) != null
}

function fg() {
    return ac() || Ve(!1), w.useContext(nl).location
}

function MS(e, t) {
    return IS(e, t)
}

function IS(e, t, n, r) {
    ac() || Ve(!1);
    let {
        navigator: o
    } = w.useContext(cg), {
        matches: i
    } = w.useContext(rl), s = i[i.length - 1], l = s ? s.params : {};
    s && s.pathname;
    let a = s ? s.pathnameBase : "/";
    s && s.route;
    let u = fg(),
        c;
    if (t) {
        var p;
        let y = typeof t == "string" ? tl(t) : t;
        a === "/" || (p = y.pathname) != null && p.startsWith(a) || Ve(!1), c = y
    } else c = u;
    let m = c.pathname || "/",
        d = m;
    if (a !== "/") {
        let y = a.replace(/^\//, "").split("/");
        d = "/" + m.replace(/^\//, "").split("/").slice(y.length).join("/")
    }
    let x = gS(e, {
            pathname: d
        }),
        v = BS(x && x.map(y => Object.assign({}, y, {
            params: Object.assign({}, l, y.params),
            pathname: Dr([a, o.encodeLocation ? o.encodeLocation(y.pathname).pathname : y.pathname]),
            pathnameBase: y.pathnameBase === "/" ? a : Dr([a, o.encodeLocation ? o.encodeLocation(y.pathnameBase).pathname : y.pathnameBase])
        })), i, n, r);
    return t && v ? w.createElement(nl.Provider, {
        value: {
            location: Ns({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, c),
            navigationType: yn.Pop
        }
    }, v) : v
}

function DS() {
    let e = HS(),
        t = jS(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        o = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        };
    return w.createElement(w.Fragment, null, w.createElement("h2", null, "Unexpected Application Error!"), w.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? w.createElement("pre", {
        style: o
    }, n) : null, null)
}
const zS = w.createElement(DS, null);
class FS extends w.Component {
    constructor(t) {
        super(t), this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? w.createElement(rl.Provider, {
            value: this.props.routeContext
        }, w.createElement(dg.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function $S(e) {
    let {
        routeContext: t,
        match: n,
        children: r
    } = e, o = w.useContext(AS);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id), w.createElement(rl.Provider, {
        value: t
    }, r)
}

function BS(e, t, n, r) {
    var o;
    if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
        var i;
        if (!n) return null;
        if (n.errors) e = n.matches;
        else if ((i = r) != null && i.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0) e = n.matches;
        else return null
    }
    let s = e,
        l = (o = n) == null ? void 0 : o.errors;
    if (l != null) {
        let c = s.findIndex(p => p.route.id && (l == null ? void 0 : l[p.route.id]) !== void 0);
        c >= 0 || Ve(!1), s = s.slice(0, Math.min(s.length, c + 1))
    }
    let a = !1,
        u = -1;
    if (n && r && r.v7_partialHydration)
        for (let c = 0; c < s.length; c++) {
            let p = s[c];
            if ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (u = c), p.route.id) {
                let {
                    loaderData: m,
                    errors: d
                } = n, x = p.route.loader && m[p.route.id] === void 0 && (!d || d[p.route.id] === void 0);
                if (p.route.lazy || x) {
                    a = !0, u >= 0 ? s = s.slice(0, u + 1) : s = [s[0]];
                    break
                }
            }
        }
    return s.reduceRight((c, p, m) => {
        let d, x = !1,
            v = null,
            y = null;
        n && (d = l && p.route.id ? l[p.route.id] : void 0, v = p.route.errorElement || zS, a && (u < 0 && m === 0 ? (x = !0, y = null) : u === m && (x = !0, y = p.route.hydrateFallbackElement || null)));
        let h = t.concat(s.slice(0, m + 1)),
            f = () => {
                let g;
                return d ? g = v : x ? g = y : p.route.Component ? g = w.createElement(p.route.Component, null) : p.route.element ? g = p.route.element : g = c, w.createElement($S, {
                    match: p,
                    routeContext: {
                        outlet: c,
                        matches: h,
                        isDataRoute: n != null
                    },
                    children: g
                })
            };
        return n && (p.route.ErrorBoundary || p.route.errorElement || m === 0) ? w.createElement(FS, {
            location: n.location,
            revalidation: n.revalidation,
            component: v,
            error: d,
            children: f(),
            routeContext: {
                outlet: null,
                matches: h,
                isDataRoute: !0
            }
        }) : f()
    }, null)
}
var Ga = function(e) {
    return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
}(Ga || {});

function US(e) {
    let t = w.useContext(LS);
    return t || Ve(!1), t
}

function VS(e) {
    let t = w.useContext(rl);
    return t || Ve(!1), t
}

function WS(e) {
    let t = VS(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || Ve(!1), n.route.id
}

function HS() {
    var e;
    let t = w.useContext(dg),
        n = US(Ga.UseRouteError),
        r = WS(Ga.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}

function QS(e, t) {
    e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath
}

function Xa(e) {
    Ve(!1)
}

function KS(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: o = yn.Pop,
        navigator: i,
        static: s = !1,
        future: l
    } = e;
    ac() && Ve(!1);
    let a = t.replace(/^\/*/, "/"),
        u = w.useMemo(() => ({
            basename: a,
            navigator: i,
            static: s,
            future: Ns({
                v7_relativeSplatPath: !1
            }, l)
        }), [a, l, i, s]);
    typeof r == "string" && (r = tl(r));
    let {
        pathname: c = "/",
        search: p = "",
        hash: m = "",
        state: d = null,
        key: x = "default"
    } = r, v = w.useMemo(() => {
        let y = ag(c, a);
        return y == null ? null : {
            location: {
                pathname: y,
                search: p,
                hash: m,
                state: d,
                key: x
            },
            navigationType: o
        }
    }, [a, c, p, m, d, x, o]);
    return v == null ? null : w.createElement(cg.Provider, {
        value: u
    }, w.createElement(nl.Provider, {
        children: n,
        value: v
    }))
}

function YS(e) {
    let {
        children: t,
        location: n
    } = e;
    return MS(qa(t), n)
}
new Promise(() => {});

function qa(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return w.Children.forEach(e, (r, o) => {
        if (!w.isValidElement(r)) return;
        let i = [...t, o];
        if (r.type === w.Fragment) {
            n.push.apply(n, qa(r.props.children, i));
            return
        }
        r.type !== Xa && Ve(!1), !r.props.index || !r.props.children || Ve(!1);
        let s = {
            id: r.props.id || i.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (s.children = qa(r.props.children, i)), n.push(s)
    }), n
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const GS = "6";
try {
    window.__reactRouterVersion = GS
} catch {}
const XS = "startTransition",
    cf = Af[XS];

function qS(e) {
    let {
        basename: t,
        children: n,
        future: r,
        window: o
    } = e, i = w.useRef();
    i.current == null && (i.current = pS({
        window: o,
        v5Compat: !0
    }));
    let s = i.current,
        [l, a] = w.useState({
            action: s.action,
            location: s.location
        }),
        {
            v7_startTransition: u
        } = r || {},
        c = w.useCallback(p => {
            u && cf ? cf(() => a(p)) : a(p)
        }, [a, u]);
    return w.useLayoutEffect(() => s.listen(c), [s, c]), w.useEffect(() => QS(r), [r]), w.createElement(KS, {
        basename: t,
        children: n,
        location: l.location,
        navigationType: l.action,
        navigator: s,
        future: r
    })
}
var df;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
})(df || (df = {}));
var ff;
(function(e) {
    e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
})(ff || (ff = {}));
const pf = "/assets/linkpriv-logo-dark-BRavyTkq.svg",
    ZS = "/assets/new-6-Uvgr99CF.jpg",
    JS = "/assets/new-7-B6eGvSt-.jpg",
    eE = "/assets/new-1-zNxUvgkc.jpg",
    tE = "/assets/new-2-Cg6mABAH.jpg",
    nE = "/assets/new-3-DIaBfBF5.jpg",
    rE = "/assets/new-4-C1WhLKgo.jpg",
    oE = "/assets/new-5-BWdPk1lN.jpg",
    iE = "/assets/locked-post-BXVfsV0P.jpg",
    sE = "/assets/locked-video-BhlzI2t2.jpg",
    lE = "/assets/prev-1-Cv7yWjFc.jpg",
    aE = "/assets/prev-2-Cpv7t6c5.jpg",
    uE = "/assets/prev-3-xFfygf3O.jpg",
    gr = [ZS, JS, eE, tE, nE, rE, oE],
    cE = () => {
        const [e, t] = w.useState(!1), [n, r] = w.useState(!0), [o, i] = w.useState("posts"), [s, l] = w.useState(0), [a, u] = w.useState(!1), [c, p] = w.useState(0), m = [lE, aE, uE], [d, x] = w.useState(!1);
        w.useEffect(() => {
            const h = setTimeout(() => {
                x(!0)
            }, 8e3);
            return () => clearTimeout(h)
        }, []), w.useEffect(() => {
            const h = setInterval(() => {
                l(f => (f + 1) % gr.length)
            }, 4e3);
            return () => clearInterval(h)
        }, []);
        const v = () => l(h => (h - 1 + gr.length) % gr.length),
            y = () => l(h => (h + 1) % gr.length);
        return S.jsxs("div", {
            className: "flex flex-col items-center min-h-screen bg-background",
            children: [S.jsxs("nav", {
                className: "w-full flex items-center justify-between px-6 py-3 bg-card border-b border-border sticky top-0 z-50",
                children: [S.jsx("div", {}), S.jsx("img", {
                    src: pf,
                    alt: "LinkPriv",
                    className: "h-6"
                }), S.jsx("button", {
                    className: "text-muted-foreground hover:text-foreground transition-colors",
                    children: S.jsx(Z0, {
                        className: "w-5 h-5"
                    })
                })]
            }), S.jsxs("div", {
                className: "w-full max-w-[580px] mx-auto relative",
                children: [S.jsxs("div", {
                    className: "relative w-full aspect-[3/4] max-h-[520px] overflow-hidden",
                    children: [gr.map((h, f) => S.jsx("img", {
                        src: h,
                        alt: `Foto ${f+1}`,
                        className: `absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${f===s?"opacity-100":"opacity-0"}`
                    }, f)), S.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"
                    }), S.jsx("button", {
                        onClick: v,
                        className: "absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-card transition-colors",
                        children: S.jsx(Od, {
                            className: "w-4 h-4"
                        })
                    }), S.jsx("button", {
                        onClick: y,
                        className: "absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-card transition-colors",
                        children: S.jsx(Ad, {
                            className: "w-4 h-4"
                        })
                    }), S.jsx("div", {
                        className: "absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-2",
                        children: gr.map((h, f) => S.jsx("button", {
                            onClick: () => l(f),
                            className: `w-2 h-2 rounded-full transition-all ${f===s?"bg-primary w-6":"bg-card/60"}`
                        }, f))
                    }), S.jsxs("div", {
                        className: "absolute bottom-20 right-4 flex items-center gap-4 text-card text-xs font-medium",
                        children: [S.jsxs("span", {
                            className: "flex items-center gap-1",
                            children: [S.jsx(Id, {
                                className: "w-3.5 h-3.5"
                            }), " 3.6K"]
                        }), S.jsxs("span", {
                            className: "flex items-center gap-1",
                            children: [S.jsx(Md, {
                                className: "w-3.5 h-3.5"
                            }), " 753"]
                        }), S.jsxs("span", {
                            className: "flex items-center gap-1",
                            children: [S.jsx(J0, {
                                className: "w-3.5 h-3.5"
                            }), " 15K"]
                        })]
                    })]
                }), S.jsxs("div", {
                    className: "px-4 pt-4 pb-2",
                    children: [S.jsxs("div", {
                        className: "flex items-center gap-1.5",
                        children: [S.jsx("h1", {
                            className: "text-xl font-bold text-foreground",
                            children: "Mirella"
                        }), S.jsx("span", {
                            className: "w-4 h-4 rounded-full bg-primary flex items-center justify-center",
                            children: S.jsx("svg", {
                                width: "10",
                                height: "10",
                                viewBox: "0 0 10 10",
                                fill: "none",
                                children: S.jsx("path", {
                                    d: "M8 3L4.5 7L2 5",
                                    stroke: "white",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })
                            })
                        })]
                    }), S.jsx("p", {
                        className: "text-sm text-muted-foreground",
                        children: "@mirella"
                    }), S.jsxs("p", {
                        className: "mt-2 text-sm text-foreground leading-relaxed",
                        children: ["Quer ter acesso a + de 4.000MIL VÍDEOS e FOTOS para se satisfazer? Assine aqui e goze comigo!", e && S.jsxs(S.Fragment, {
                            children: [" ", "✨Conteúdos solo e acompanhada com meu namorado e minhas amiguinhas ✨Ensaios profissionais exclusivos ✨Chat liberado para assinantes, vem me conhecer melhor ♥"]
                        }), !e && "..."]
                    }), S.jsx("button", {
                        onClick: () => t(!e),
                        className: "text-sm font-medium text-primary hover:underline mt-1",
                        children: e ? "Mostrar menos" : "Ler mais"
                    }), S.jsxs("div", {
                        className: "flex items-center gap-3 mt-3",
                        children: [S.jsx("a", {
                            href: "#",
                            className: "text-muted-foreground hover:text-foreground transition-colors",
                            children: S.jsx(ew, {
                                className: "w-5 h-5"
                            })
                        }), S.jsx("a", {
                            href: "#",
                            className: "text-muted-foreground hover:text-foreground transition-colors",
                            children: S.jsx("svg", {
                                className: "w-5 h-5",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                children: S.jsx("path", {
                                    d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                                })
                            })
                        })]
                    })]
                }), S.jsxs("div", {
                    className: "mx-4 mt-4 rounded-xl border border-border bg-card p-4",
                    children: [S.jsxs("div", {
                        className: "flex items-center gap-2 mb-3",
                        children: [S.jsx("span", {
                            className: "text-base",
                            children: "✨"
                        }), S.jsx("h2", {
                            className: "font-semibold text-foreground",
                            children: "Oferta de Assinatura"
                        })]
                    }), S.jsx("p", {
                        className: "text-sm text-muted-foreground mb-4",
                        children: "Tenha acesso a mais de 4MIL CONTEUDOS!! aproveite enquanto pode 👀😍"
                    }), S.jsxs("div", {
                        className: "relative",
                        children: [S.jsx("span", {
                            className: "absolute -top-2.5 left-3 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full",
                            children: "Economize 5%"
                        }), S.jsx("a", {
                            href: "/checkout",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "block w-full gradient-subscribe text-primary-foreground font-semibold py-3.5 rounded-xl text-base hover:opacity-90 transition-opacity text-center",
                            children: "Assinar agora R$ 19,90"
                        })]
                    }), S.jsxs("p", {
                        className: "text-right text-xs text-muted-foreground mt-2",
                        children: ["Preço original ", S.jsx("span", {
                            className: "line-through",
                            children: "R$ 24,90"
                        })]
                    })]
                }), S.jsxs("div", {
                    className: "mx-4 mt-4 rounded-xl border border-border bg-card p-4",
                    children: [S.jsxs("button", {
                        onClick: () => r(!n),
                        className: "w-full flex items-center justify-between",
                        children: [S.jsx("h2", {
                            className: "font-semibold text-foreground",
                            children: "Planos"
                        }), n ? S.jsx(q0, {
                            className: "w-5 h-5 text-muted-foreground"
                        }) : S.jsx(X0, {
                            className: "w-5 h-5 text-muted-foreground"
                        })]
                    }), n && S.jsxs("div", {
                        className: "mt-3 space-y-2",
                        children: [S.jsxs("a", {
                            href: "/checkout",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "w-full gradient-plan rounded-xl py-3 px-4 flex items-center justify-between hover:opacity-90 transition-opacity",
                            children: [S.jsx("span", {
                                className: "text-sm font-medium text-foreground",
                                children: "Plano Basic"
                            }), S.jsx("span", {
                                className: "text-sm font-bold text-foreground",
                                children: "R$ 19,90"
                            })]
                        }), S.jsxs("a", {
                            href: "/checkout",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "w-full gradient-plan rounded-xl py-3 px-4 flex items-center justify-between hover:opacity-90 transition-opacity",
                            children: [S.jsx("span", {
                                className: "text-sm font-medium text-foreground",
                                children: "Plano Premium"
                            }), S.jsx("span", {
                                className: "text-sm font-bold text-foreground",
                                children: "R$ 29,90"
                            })]
                        }), S.jsxs("a", {
                            href: "/checkout",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "w-full gradient-plan rounded-xl py-3 px-4 flex items-center justify-between hover:opacity-90 transition-opacity",
                            children: [S.jsx("span", {
                                className: "text-sm font-medium text-foreground",
                                children: "Plano Gold"
                            }), S.jsx("span", {
                                className: "text-sm font-bold text-foreground",
                                children: "R$ 59,90"
                            })]
                        })]
                    })]
                }), S.jsxs("div", {
                    className: "mt-6 mx-4 flex border-b border-border",
                    children: [S.jsxs("button", {
                        onClick: () => i("posts"),
                        className: `flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium transition-colors ${o==="posts"?"text-primary border-b-2 border-primary":"text-muted-foreground"}`,
                        children: [S.jsxs("svg", {
                            className: "w-4 h-4",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            children: [S.jsx("rect", {
                                x: "3",
                                y: "3",
                                width: "18",
                                height: "18",
                                rx: "2"
                            }), S.jsx("line", {
                                x1: "9",
                                y1: "3",
                                x2: "9",
                                y2: "21"
                            })]
                        }), "799 Publicações"]
                    }), S.jsxs("button", {
                        onClick: () => i("media"),
                        className: `flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium transition-colors ${o==="media"?"text-primary border-b-2 border-primary":"text-muted-foreground"}`,
                        children: [S.jsx(Id, {
                            className: "w-4 h-4"
                        }), "4.346 Mídias"]
                    })]
                }), S.jsxs("div", {
                    className: "mx-4 mt-4",
                    children: [S.jsxs("h3", {
                        className: "text-sm font-semibold text-foreground mb-2 flex items-center gap-1.5",
                        children: [S.jsx(Ld, {
                            className: "w-4 h-4 text-primary"
                        }), " Prévia do conteúdo"]
                    }), S.jsx("div", {
                        className: "grid grid-cols-3 gap-2",
                        children: m.map((h, f) => S.jsxs("button", {
                            onClick: () => {
                                p(0), u(!0)
                            },
                            className: "relative aspect-[3/4] rounded-lg overflow-hidden group",
                            children: [S.jsx("img", {
                                src: h,
                                alt: `Preview ${f+1}`,
                                className: `w-full h-full object-cover scale-110 transition-all duration-1000 ${d?"blur-xl":"blur-none"}`
                            }), d && S.jsx("div", {
                                className: "absolute inset-0 bg-foreground/30 flex items-center justify-center",
                                children: S.jsx(Dd, {
                                    className: "w-5 h-5 text-card"
                                })
                            }), !d && S.jsx("div", {
                                className: "absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 flex items-center justify-center transition-colors",
                                children: S.jsx(Ld, {
                                    className: "w-5 h-5 text-card opacity-0 group-hover:opacity-100 transition-opacity"
                                })
                            })]
                        }, f))
                    })]
                }), S.jsx("div", {
                    className: "mx-4 mt-4 rounded-xl border border-border bg-card overflow-hidden",
                    children: S.jsxs("div", {
                        className: "relative w-full aspect-square overflow-hidden",
                        children: [S.jsx("img", {
                            src: iE,
                            alt: "Post",
                            className: "w-full h-full object-cover blur-lg scale-110"
                        }), S.jsxs("div", {
                            className: "absolute inset-0 bg-foreground/40 flex flex-col items-center justify-center gap-3",
                            children: [S.jsx(Dd, {
                                className: "w-10 h-10 text-card"
                            }), S.jsx("p", {
                                className: "text-card font-semibold text-sm",
                                children: "Assine para desbloquear"
                            }), S.jsx("a", {
                                href: "/checkout",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "gradient-subscribe text-primary-foreground font-semibold py-2 px-6 rounded-full text-sm hover:opacity-90 transition-opacity",
                                children: "Assinar agora"
                            })]
                        })]
                    })
                }), S.jsx("div", {
                    className: "mx-4 mt-4 mb-10 rounded-xl border border-border bg-card overflow-hidden",
                    children: S.jsxs("div", {
                        className: "relative w-full aspect-video overflow-hidden",
                        children: [S.jsx("img", {
                            src: sE,
                            alt: "Post",
                            className: "w-full h-full object-cover blur-lg scale-110"
                        }), S.jsxs("div", {
                            className: "absolute inset-0 bg-foreground/40 flex flex-col items-center justify-center gap-3",
                            children: [S.jsx(Md, {
                                className: "w-10 h-10 text-card"
                            }), S.jsx("p", {
                                className: "text-card font-semibold text-sm",
                                children: "Vídeo exclusivo para assinantes"
                            }), S.jsx("a", {
                                href: "/checkout",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "gradient-subscribe text-primary-foreground font-semibold py-2 px-6 rounded-full text-sm hover:opacity-90 transition-opacity",
                                children: "Assinar agora"
                            })]
                        })]
                    })
                })]
            }), a && S.jsx("div", {
                className: "fixed inset-0 z-[100] bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-4",
                onClick: () => u(!1),
                children: S.jsxs("div", {
                    className: "relative w-full max-w-[440px] bg-card rounded-2xl overflow-hidden",
                    onClick: h => h.stopPropagation(),
                    children: [S.jsx("button", {
                        onClick: () => u(!1),
                        className: "absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-foreground/50 flex items-center justify-center text-card hover:bg-foreground/70 transition-colors",
                        children: S.jsx(pm, {
                            className: "w-4 h-4"
                        })
                    }), S.jsxs("div", {
                        className: "relative aspect-[3/4] overflow-hidden",
                        children: [m.map((h, f) => S.jsx("img", {
                            src: h,
                            alt: `Preview ${f+1}`,
                            className: `absolute inset-0 w-full h-full object-cover blur-md scale-110 transition-opacity duration-500 ${f===c?"opacity-100":"opacity-0"}`
                        }, f)), S.jsx("div", {
                            className: "absolute inset-0 bg-foreground/20"
                        }), c > 0 && S.jsx("button", {
                            onClick: () => p(c - 1),
                            className: "absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center text-foreground",
                            children: S.jsx(Od, {
                                className: "w-4 h-4"
                            })
                        }), c < m.length - 1 && S.jsx("button", {
                            onClick: () => p(c + 1),
                            className: "absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center text-foreground",
                            children: S.jsx(Ad, {
                                className: "w-4 h-4"
                            })
                        }), S.jsx("div", {
                            className: "absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2",
                            children: m.map((h, f) => S.jsx("button", {
                                onClick: () => p(f),
                                className: `w-2 h-2 rounded-full transition-all ${f===c?"bg-primary w-5":"bg-card/60"}`
                            }, f))
                        })]
                    }), S.jsxs("div", {
                        className: "p-4 text-center",
                        children: [S.jsx("p", {
                            className: "text-sm text-muted-foreground mb-3",
                            children: "Desbloqueie todo o conteúdo exclusivo"
                        }), S.jsx("a", {
                            href: "/checkout",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "block w-full gradient-subscribe text-primary-foreground font-semibold py-3 rounded-xl text-base hover:opacity-90 transition-opacity",
                            children: "Assinar agora R$ 19,90"
                        })]
                    })]
                })
            }), S.jsx("footer", {
                className: "w-full border-t border-border py-6 mt-auto",
                children: S.jsx("div", {
                    className: "flex items-center justify-center",
                    children: S.jsx("img", {
                        src: pf,
                        alt: "LinkPriv",
                        className: "h-4 opacity-40"
                    })
                })
            })]
        })
    },
    dE = () => S.jsx("div", {
        className: "min-h-screen bg-background",
        children: S.jsx(cE, {})
    }),
    fE = () => {
        const e = fg();
        return w.useEffect(() => {
            console.error("404 Error: User attempted to access non-existent route:", e.pathname)
        }, [e.pathname]), S.jsx("div", {
            className: "flex min-h-screen items-center justify-center bg-muted",
            children: S.jsxs("div", {
                className: "text-center",
                children: [S.jsx("h1", {
                    className: "mb-4 text-4xl font-bold",
                    children: "404"
                }), S.jsx("p", {
                    className: "mb-4 text-xl text-muted-foreground",
                    children: "Oops! Page not found"
                }), S.jsx("a", {
                    href: "/",
                    className: "text-primary underline hover:text-primary/90",
                    children: "Return to Home"
                })]
            })
        })
    },
    pE = new cS,
    hE = () => S.jsx(fS, {
        client: pE,
        children: S.jsxs($x, {
            children: [S.jsx(Iw, {}), S.jsx(h1, {}), S.jsx(qS, {
                children: S.jsxs(YS, {
                    children: [S.jsx(Xa, {
                        path: "/",
                        element: S.jsx(dE, {})
                    }), S.jsx(Xa, {
                        path: "*",
                        element: S.jsx(fE, {})
                    })]
                })
            })]
        })
    });
Dh(document.getElementById("root")).render(S.jsx(hE, {}));