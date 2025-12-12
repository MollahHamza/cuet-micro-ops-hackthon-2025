var xg = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var Nk = xg((xk, At) => {
  (function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
      r(i);
    new MutationObserver((i) => {
      for (const s of i)
        if (s.type === "childList")
          for (const o of s.addedNodes)
            o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(i) {
      const s = {};
      return (
        i.integrity && (s.integrity = i.integrity),
        i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials"
          ? (s.credentials = "include")
          : i.crossOrigin === "anonymous"
            ? (s.credentials = "omit")
            : (s.credentials = "same-origin"),
        s
      );
    }
    function r(i) {
      if (i.ep) return;
      i.ep = !0;
      const s = n(i);
      fetch(i.href, s);
    }
  })();
  function Pg(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, "default")
      ? e.default
      : e;
  }
  var Yd = { exports: {} },
    A = {};
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Ei = Symbol.for("react.element"),
    Og = Symbol.for("react.portal"),
    Dg = Symbol.for("react.fragment"),
    Lg = Symbol.for("react.strict_mode"),
    Mg = Symbol.for("react.profiler"),
    Ag = Symbol.for("react.provider"),
    $g = Symbol.for("react.context"),
    Fg = Symbol.for("react.forward_ref"),
    bg = Symbol.for("react.suspense"),
    Ug = Symbol.for("react.memo"),
    jg = Symbol.for("react.lazy"),
    vc = Symbol.iterator;
  function zg(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (vc && e[vc]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Kd = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Xd = Object.assign,
    qd = {};
  function fr(e, t, n) {
    ((this.props = e),
      (this.context = t),
      (this.refs = qd),
      (this.updater = n || Kd));
  }
  fr.prototype.isReactComponent = {};
  fr.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
      throw Error(
        "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
      );
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  fr.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function Qd() {}
  Qd.prototype = fr.prototype;
  function Xu(e, t, n) {
    ((this.props = e),
      (this.context = t),
      (this.refs = qd),
      (this.updater = n || Kd));
  }
  var qu = (Xu.prototype = new Qd());
  qu.constructor = Xu;
  Xd(qu, fr.prototype);
  qu.isPureReactComponent = !0;
  var Sc = Array.isArray,
    Jd = Object.prototype.hasOwnProperty,
    Qu = { current: null },
    Zd = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ep(e, t, n) {
    var r,
      i = {},
      s = null,
      o = null;
    if (t != null)
      for (r in (t.ref !== void 0 && (o = t.ref),
      t.key !== void 0 && (s = "" + t.key),
      t))
        Jd.call(t, r) && !Zd.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) i.children = n;
    else if (1 < a) {
      for (var u = Array(a), l = 0; l < a; l++) u[l] = arguments[l + 2];
      i.children = u;
    }
    if (e && e.defaultProps)
      for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
    return {
      $$typeof: Ei,
      type: e,
      key: s,
      ref: o,
      props: i,
      _owner: Qu.current,
    };
  }
  function Hg(e, t) {
    return {
      $$typeof: Ei,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner,
    };
  }
  function Ju(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Ei;
  }
  function Bg(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
      "$" +
      e.replace(/[=:]/g, function (n) {
        return t[n];
      })
    );
  }
  var Ec = /\/+/g;
  function Ho(e, t) {
    return typeof e == "object" && e !== null && e.key != null
      ? Bg("" + e.key)
      : t.toString(36);
  }
  function ms(e, t, n, r, i) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var o = !1;
    if (e === null) o = !0;
    else
      switch (s) {
        case "string":
        case "number":
          o = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case Ei:
            case Og:
              o = !0;
          }
      }
    if (o)
      return (
        (o = e),
        (i = i(o)),
        (e = r === "" ? "." + Ho(o, 0) : r),
        Sc(i)
          ? ((n = ""),
            e != null && (n = e.replace(Ec, "$&/") + "/"),
            ms(i, t, n, "", function (l) {
              return l;
            }))
          : i != null &&
            (Ju(i) &&
              (i = Hg(
                i,
                n +
                  (!i.key || (o && o.key === i.key)
                    ? ""
                    : ("" + i.key).replace(Ec, "$&/") + "/") +
                  e,
              )),
            t.push(i)),
        1
      );
    if (((o = 0), (r = r === "" ? "." : r + ":"), Sc(e)))
      for (var a = 0; a < e.length; a++) {
        s = e[a];
        var u = r + Ho(s, a);
        o += ms(s, t, n, u, i);
      }
    else if (((u = zg(e)), typeof u == "function"))
      for (e = u.call(e), a = 0; !(s = e.next()).done; )
        ((s = s.value), (u = r + Ho(s, a++)), (o += ms(s, t, n, u, i)));
    else if (s === "object")
      throw (
        (t = String(e)),
        Error(
          "Objects are not valid as a React child (found: " +
            (t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return o;
  }
  function ji(e, t, n) {
    if (e == null) return e;
    var r = [],
      i = 0;
    return (
      ms(e, r, "", "", function (s) {
        return t.call(n, s, i++);
      }),
      r
    );
  }
  function Wg(e) {
    if (e._status === -1) {
      var t = e._result;
      ((t = t()),
        t.then(
          function (n) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 1), (e._result = n));
          },
          function (n) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 2), (e._result = n));
          },
        ),
        e._status === -1 && ((e._status = 0), (e._result = t)));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
  }
  var Ee = { current: null },
    gs = { transition: null },
    Gg = {
      ReactCurrentDispatcher: Ee,
      ReactCurrentBatchConfig: gs,
      ReactCurrentOwner: Qu,
    };
  function tp() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  A.Children = {
    map: ji,
    forEach: function (e, t, n) {
      ji(
        e,
        function () {
          t.apply(this, arguments);
        },
        n,
      );
    },
    count: function (e) {
      var t = 0;
      return (
        ji(e, function () {
          t++;
        }),
        t
      );
    },
    toArray: function (e) {
      return (
        ji(e, function (t) {
          return t;
        }) || []
      );
    },
    only: function (e) {
      if (!Ju(e))
        throw Error(
          "React.Children.only expected to receive a single React element child.",
        );
      return e;
    },
  };
  A.Component = fr;
  A.Fragment = Dg;
  A.Profiler = Mg;
  A.PureComponent = Xu;
  A.StrictMode = Lg;
  A.Suspense = bg;
  A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gg;
  A.act = tp;
  A.cloneElement = function (e, t, n) {
    if (e == null)
      throw Error(
        "React.cloneElement(...): The argument must be a React element, but you passed " +
          e +
          ".",
      );
    var r = Xd({}, e.props),
      i = e.key,
      s = e.ref,
      o = e._owner;
    if (t != null) {
      if (
        (t.ref !== void 0 && ((s = t.ref), (o = Qu.current)),
        t.key !== void 0 && (i = "" + t.key),
        e.type && e.type.defaultProps)
      )
        var a = e.type.defaultProps;
      for (u in t)
        Jd.call(t, u) &&
          !Zd.hasOwnProperty(u) &&
          (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
    }
    var u = arguments.length - 2;
    if (u === 1) r.children = n;
    else if (1 < u) {
      a = Array(u);
      for (var l = 0; l < u; l++) a[l] = arguments[l + 2];
      r.children = a;
    }
    return { $$typeof: Ei, type: e.type, key: i, ref: s, props: r, _owner: o };
  };
  A.createContext = function (e) {
    return (
      (e = {
        $$typeof: $g,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      }),
      (e.Provider = { $$typeof: Ag, _context: e }),
      (e.Consumer = e)
    );
  };
  A.createElement = ep;
  A.createFactory = function (e) {
    var t = ep.bind(null, e);
    return ((t.type = e), t);
  };
  A.createRef = function () {
    return { current: null };
  };
  A.forwardRef = function (e) {
    return { $$typeof: Fg, render: e };
  };
  A.isValidElement = Ju;
  A.lazy = function (e) {
    return { $$typeof: jg, _payload: { _status: -1, _result: e }, _init: Wg };
  };
  A.memo = function (e, t) {
    return { $$typeof: Ug, type: e, compare: t === void 0 ? null : t };
  };
  A.startTransition = function (e) {
    var t = gs.transition;
    gs.transition = {};
    try {
      e();
    } finally {
      gs.transition = t;
    }
  };
  A.unstable_act = tp;
  A.useCallback = function (e, t) {
    return Ee.current.useCallback(e, t);
  };
  A.useContext = function (e) {
    return Ee.current.useContext(e);
  };
  A.useDebugValue = function () {};
  A.useDeferredValue = function (e) {
    return Ee.current.useDeferredValue(e);
  };
  A.useEffect = function (e, t) {
    return Ee.current.useEffect(e, t);
  };
  A.useId = function () {
    return Ee.current.useId();
  };
  A.useImperativeHandle = function (e, t, n) {
    return Ee.current.useImperativeHandle(e, t, n);
  };
  A.useInsertionEffect = function (e, t) {
    return Ee.current.useInsertionEffect(e, t);
  };
  A.useLayoutEffect = function (e, t) {
    return Ee.current.useLayoutEffect(e, t);
  };
  A.useMemo = function (e, t) {
    return Ee.current.useMemo(e, t);
  };
  A.useReducer = function (e, t, n) {
    return Ee.current.useReducer(e, t, n);
  };
  A.useRef = function (e) {
    return Ee.current.useRef(e);
  };
  A.useState = function (e) {
    return Ee.current.useState(e);
  };
  A.useSyncExternalStore = function (e, t, n) {
    return Ee.current.useSyncExternalStore(e, t, n);
  };
  A.useTransition = function () {
    return Ee.current.useTransition();
  };
  A.version = "18.3.1";
  Yd.exports = A;
  var Xe = Yd.exports;
  const M = Pg(Xe);
  var Ra = {},
    np = { exports: {} },
    Me = {},
    rp = { exports: {} },
    ip = {};
  /**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ (function (e) {
    function t(k, O) {
      var L = k.length;
      k.push(O);
      e: for (; 0 < L; ) {
        var ee = (L - 1) >>> 1,
          ae = k[ee];
        if (0 < i(ae, O)) ((k[ee] = O), (k[L] = ae), (L = ee));
        else break e;
      }
    }
    function n(k) {
      return k.length === 0 ? null : k[0];
    }
    function r(k) {
      if (k.length === 0) return null;
      var O = k[0],
        L = k.pop();
      if (L !== O) {
        k[0] = L;
        e: for (var ee = 0, ae = k.length, bi = ae >>> 1; ee < bi; ) {
          var Jt = 2 * (ee + 1) - 1,
            zo = k[Jt],
            Zt = Jt + 1,
            Ui = k[Zt];
          if (0 > i(zo, L))
            Zt < ae && 0 > i(Ui, zo)
              ? ((k[ee] = Ui), (k[Zt] = L), (ee = Zt))
              : ((k[ee] = zo), (k[Jt] = L), (ee = Jt));
          else if (Zt < ae && 0 > i(Ui, L))
            ((k[ee] = Ui), (k[Zt] = L), (ee = Zt));
          else break e;
        }
      }
      return O;
    }
    function i(k, O) {
      var L = k.sortIndex - O.sortIndex;
      return L !== 0 ? L : k.id - O.id;
    }
    if (
      typeof performance == "object" &&
      typeof performance.now == "function"
    ) {
      var s = performance;
      e.unstable_now = function () {
        return s.now();
      };
    } else {
      var o = Date,
        a = o.now();
      e.unstable_now = function () {
        return o.now() - a;
      };
    }
    var u = [],
      l = [],
      c = 1,
      f = null,
      d = 3,
      m = !1,
      _ = !1,
      y = !1,
      C = typeof setTimeout == "function" ? setTimeout : null,
      h = typeof clearTimeout == "function" ? clearTimeout : null,
      p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function g(k) {
      for (var O = n(l); O !== null; ) {
        if (O.callback === null) r(l);
        else if (O.startTime <= k)
          (r(l), (O.sortIndex = O.expirationTime), t(u, O));
        else break;
        O = n(l);
      }
    }
    function v(k) {
      if (((y = !1), g(k), !_))
        if (n(u) !== null) ((_ = !0), Uo(E));
        else {
          var O = n(l);
          O !== null && jo(v, O.startTime - k);
        }
    }
    function E(k, O) {
      ((_ = !1), y && ((y = !1), h(R), (R = -1)), (m = !0));
      var L = d;
      try {
        for (
          g(O), f = n(u);
          f !== null && (!(f.expirationTime > O) || (k && !We()));
        ) {
          var ee = f.callback;
          if (typeof ee == "function") {
            ((f.callback = null), (d = f.priorityLevel));
            var ae = ee(f.expirationTime <= O);
            ((O = e.unstable_now()),
              typeof ae == "function" ? (f.callback = ae) : f === n(u) && r(u),
              g(O));
          } else r(u);
          f = n(u);
        }
        if (f !== null) var bi = !0;
        else {
          var Jt = n(l);
          (Jt !== null && jo(v, Jt.startTime - O), (bi = !1));
        }
        return bi;
      } finally {
        ((f = null), (d = L), (m = !1));
      }
    }
    var I = !1,
      N = null,
      R = -1,
      Z = 5,
      $ = -1;
    function We() {
      return !(e.unstable_now() - $ < Z);
    }
    function Nr() {
      if (N !== null) {
        var k = e.unstable_now();
        $ = k;
        var O = !0;
        try {
          O = N(!0, k);
        } finally {
          O ? Cr() : ((I = !1), (N = null));
        }
      } else I = !1;
    }
    var Cr;
    if (typeof p == "function")
      Cr = function () {
        p(Nr);
      };
    else if (typeof MessageChannel < "u") {
      var yc = new MessageChannel(),
        Rg = yc.port2;
      ((yc.port1.onmessage = Nr),
        (Cr = function () {
          Rg.postMessage(null);
        }));
    } else
      Cr = function () {
        C(Nr, 0);
      };
    function Uo(k) {
      ((N = k), I || ((I = !0), Cr()));
    }
    function jo(k, O) {
      R = C(function () {
        k(e.unstable_now());
      }, O);
    }
    ((e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (k) {
        k.callback = null;
      }),
      (e.unstable_continueExecution = function () {
        _ || m || ((_ = !0), Uo(E));
      }),
      (e.unstable_forceFrameRate = function (k) {
        0 > k || 125 < k
          ? console.error(
              "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
            )
          : (Z = 0 < k ? Math.floor(1e3 / k) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return d;
      }),
      (e.unstable_getFirstCallbackNode = function () {
        return n(u);
      }),
      (e.unstable_next = function (k) {
        switch (d) {
          case 1:
          case 2:
          case 3:
            var O = 3;
            break;
          default:
            O = d;
        }
        var L = d;
        d = O;
        try {
          return k();
        } finally {
          d = L;
        }
      }),
      (e.unstable_pauseExecution = function () {}),
      (e.unstable_requestPaint = function () {}),
      (e.unstable_runWithPriority = function (k, O) {
        switch (k) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            k = 3;
        }
        var L = d;
        d = k;
        try {
          return O();
        } finally {
          d = L;
        }
      }),
      (e.unstable_scheduleCallback = function (k, O, L) {
        var ee = e.unstable_now();
        switch (
          (typeof L == "object" && L !== null
            ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? ee + L : ee))
            : (L = ee),
          k)
        ) {
          case 1:
            var ae = -1;
            break;
          case 2:
            ae = 250;
            break;
          case 5:
            ae = 1073741823;
            break;
          case 4:
            ae = 1e4;
            break;
          default:
            ae = 5e3;
        }
        return (
          (ae = L + ae),
          (k = {
            id: c++,
            callback: O,
            priorityLevel: k,
            startTime: L,
            expirationTime: ae,
            sortIndex: -1,
          }),
          L > ee
            ? ((k.sortIndex = L),
              t(l, k),
              n(u) === null &&
                k === n(l) &&
                (y ? (h(R), (R = -1)) : (y = !0), jo(v, L - ee)))
            : ((k.sortIndex = ae), t(u, k), _ || m || ((_ = !0), Uo(E))),
          k
        );
      }),
      (e.unstable_shouldYield = We),
      (e.unstable_wrapCallback = function (k) {
        var O = d;
        return function () {
          var L = d;
          d = O;
          try {
            return k.apply(this, arguments);
          } finally {
            d = L;
          }
        };
      }));
  })(ip);
  rp.exports = ip;
  var Vg = rp.exports;
  /**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Yg = Xe,
    Le = Vg;
  function S(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var sp = new Set(),
    ti = {};
  function Tn(e, t) {
    (Qn(e, t), Qn(e + "Capture", t));
  }
  function Qn(e, t) {
    for (ti[e] = t, e = 0; e < t.length; e++) sp.add(t[e]);
  }
  var St = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    xa = Object.prototype.hasOwnProperty,
    Kg =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Tc = {},
    wc = {};
  function Xg(e) {
    return xa.call(wc, e)
      ? !0
      : xa.call(Tc, e)
        ? !1
        : Kg.test(e)
          ? (wc[e] = !0)
          : ((Tc[e] = !0), !1);
  }
  function qg(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function Qg(e, t, n, r) {
    if (t === null || typeof t > "u" || qg(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function Te(e, t, n, r, i, s, o) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = i),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = s),
      (this.removeEmptyString = o));
  }
  var de = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      de[e] = new Te(e, 0, !1, e, null, !1, !1);
    });
  [
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
  ].forEach(function (e) {
    var t = e[0];
    de[t] = new Te(t, 1, !1, e[1], null, !1, !1);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    de[e] = new Te(e, 2, !1, e.toLowerCase(), null, !1, !1);
  });
  [
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
  ].forEach(function (e) {
    de[e] = new Te(e, 2, !1, e, null, !1, !1);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
      de[e] = new Te(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
  ["checked", "multiple", "muted", "selected"].forEach(function (e) {
    de[e] = new Te(e, 3, !0, e, null, !1, !1);
  });
  ["capture", "download"].forEach(function (e) {
    de[e] = new Te(e, 4, !1, e, null, !1, !1);
  });
  ["cols", "rows", "size", "span"].forEach(function (e) {
    de[e] = new Te(e, 6, !1, e, null, !1, !1);
  });
  ["rowSpan", "start"].forEach(function (e) {
    de[e] = new Te(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var Zu = /[\-:]([a-z])/g;
  function el(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(Zu, el);
      de[t] = new Te(t, 1, !1, e, null, !1, !1);
    });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(Zu, el);
      de[t] = new Te(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
  ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(Zu, el);
    de[t] = new Te(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  });
  ["tabIndex", "crossOrigin"].forEach(function (e) {
    de[e] = new Te(e, 1, !1, e.toLowerCase(), null, !1, !1);
  });
  de.xlinkHref = new Te(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1,
  );
  ["src", "href", "action", "formAction"].forEach(function (e) {
    de[e] = new Te(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function tl(e, t, n, r) {
    var i = de.hasOwnProperty(t) ? de[t] : null;
    (i !== null
      ? i.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (Qg(t, n, i, r) && (n = null),
      r || i === null
        ? Xg(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : i.mustUseProperty
          ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
          : ((t = i.attributeName),
            (r = i.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((i = i.type),
                (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var kt = Yg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    zi = Symbol.for("react.element"),
    xn = Symbol.for("react.portal"),
    Pn = Symbol.for("react.fragment"),
    nl = Symbol.for("react.strict_mode"),
    Pa = Symbol.for("react.profiler"),
    op = Symbol.for("react.provider"),
    ap = Symbol.for("react.context"),
    rl = Symbol.for("react.forward_ref"),
    Oa = Symbol.for("react.suspense"),
    Da = Symbol.for("react.suspense_list"),
    il = Symbol.for("react.memo"),
    Rt = Symbol.for("react.lazy"),
    up = Symbol.for("react.offscreen"),
    kc = Symbol.iterator;
  function Rr(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (kc && e[kc]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var q = Object.assign,
    Bo;
  function Fr(e) {
    if (Bo === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Bo = (t && t[1]) || "";
      }
    return (
      `
` +
      Bo +
      e
    );
  }
  var Wo = !1;
  function Go(e, t) {
    if (!e || Wo) return "";
    Wo = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (l) {
            var r = l;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (l) {
            r = l;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (l) {
          r = l;
        }
        e();
      }
    } catch (l) {
      if (l && r && typeof l.stack == "string") {
        for (
          var i = l.stack.split(`
`),
            s = r.stack.split(`
`),
            o = i.length - 1,
            a = s.length - 1;
          1 <= o && 0 <= a && i[o] !== s[a];
        )
          a--;
        for (; 1 <= o && 0 <= a; o--, a--)
          if (i[o] !== s[a]) {
            if (o !== 1 || a !== 1)
              do
                if ((o--, a--, 0 > a || i[o] !== s[a])) {
                  var u =
                    `
` + i[o].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      u.includes("<anonymous>") &&
                      (u = u.replace("<anonymous>", e.displayName)),
                    u
                  );
                }
              while (1 <= o && 0 <= a);
            break;
          }
      }
    } finally {
      ((Wo = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : "") ? Fr(e) : "";
  }
  function Jg(e) {
    switch (e.tag) {
      case 5:
        return Fr(e.type);
      case 16:
        return Fr("Lazy");
      case 13:
        return Fr("Suspense");
      case 19:
        return Fr("SuspenseList");
      case 0:
      case 2:
      case 15:
        return ((e = Go(e.type, !1)), e);
      case 11:
        return ((e = Go(e.type.render, !1)), e);
      case 1:
        return ((e = Go(e.type, !0)), e);
      default:
        return "";
    }
  }
  function La(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Pn:
        return "Fragment";
      case xn:
        return "Portal";
      case Pa:
        return "Profiler";
      case nl:
        return "StrictMode";
      case Oa:
        return "Suspense";
      case Da:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ap:
          return (e.displayName || "Context") + ".Consumer";
        case op:
          return (e._context.displayName || "Context") + ".Provider";
        case rl:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case il:
          return (
            (t = e.displayName || null),
            t !== null ? t : La(e.type) || "Memo"
          );
        case Rt:
          ((t = e._payload), (e = e._init));
          try {
            return La(e(t));
          } catch {}
      }
    return null;
  }
  function Zg(e) {
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
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
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
        return La(t);
      case 8:
        return t === nl ? "StrictMode" : "Mode";
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
        if (typeof t == "string") return t;
    }
    return null;
  }
  function Gt(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function lp(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function e_(e) {
    var t = lp(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var i = n.get,
        s = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return i.call(this);
          },
          set: function (o) {
            ((r = "" + o), s.call(this, o));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (o) {
            r = "" + o;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Hi(e) {
    e._valueTracker || (e._valueTracker = e_(e));
  }
  function cp(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = lp(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Ms(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ma(e, t) {
    var n = t.checked;
    return q({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Ic(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = Gt(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      }));
  }
  function fp(e, t) {
    ((t = t.checked), t != null && tl(e, "checked", t, !1));
  }
  function Aa(e, t) {
    fp(e, t);
    var n = Gt(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    (t.hasOwnProperty("value")
      ? $a(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && $a(e, t.type, Gt(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked));
  }
  function Nc(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      ((t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n));
  }
  function $a(e, t, n) {
    (t !== "number" || Ms(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var br = Array.isArray;
  function Bn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++)
        ((i = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== i && (e[n].selected = i),
          i && r && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + Gt(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Fa(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
    return q({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Cc(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(S(92));
        if (br(n)) {
          if (1 < n.length) throw Error(S(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ""), (n = t));
    }
    e._wrapperState = { initialValue: Gt(n) };
  }
  function dp(e, t) {
    var n = Gt(t.value),
      r = Gt(t.defaultValue);
    (n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r));
  }
  function Rc(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function pp(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ba(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? pp(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Bi,
    hp = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, i) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, i);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Bi = Bi || document.createElement("div"),
            Bi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Bi.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function ni(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Br = {
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
      strokeWidth: !0,
    },
    t_ = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Br).forEach(function (e) {
    t_.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Br[t] = Br[e]));
    });
  });
  function mp(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Br.hasOwnProperty(e) && Br[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function gp(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          i = mp(n, t[n], r);
        (n === "float" && (n = "cssFloat"),
          r ? e.setProperty(n, i) : (e[n] = i));
      }
  }
  var n_ = q(
    { menuitem: !0 },
    {
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
      wbr: !0,
    },
  );
  function Ua(e, t) {
    if (t) {
      if (n_[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(S(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(S(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(S(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(S(62));
    }
  }
  function ja(e, t) {
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
        return !0;
    }
  }
  var za = null;
  function sl(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Ha = null,
    Wn = null,
    Gn = null;
  function xc(e) {
    if ((e = ki(e))) {
      if (typeof Ha != "function") throw Error(S(280));
      var t = e.stateNode;
      t && ((t = mo(t)), Ha(e.stateNode, e.type, t));
    }
  }
  function _p(e) {
    Wn ? (Gn ? Gn.push(e) : (Gn = [e])) : (Wn = e);
  }
  function yp() {
    if (Wn) {
      var e = Wn,
        t = Gn;
      if (((Gn = Wn = null), xc(e), t)) for (e = 0; e < t.length; e++) xc(t[e]);
    }
  }
  function vp(e, t) {
    return e(t);
  }
  function Sp() {}
  var Vo = !1;
  function Ep(e, t, n) {
    if (Vo) return e(t, n);
    Vo = !0;
    try {
      return vp(e, t, n);
    } finally {
      ((Vo = !1), (Wn !== null || Gn !== null) && (Sp(), yp()));
    }
  }
  function ri(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = mo(n);
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
        ((r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(S(231, t, typeof n));
    return n;
  }
  var Ba = !1;
  if (St)
    try {
      var xr = {};
      (Object.defineProperty(xr, "passive", {
        get: function () {
          Ba = !0;
        },
      }),
        window.addEventListener("test", xr, xr),
        window.removeEventListener("test", xr, xr));
    } catch {
      Ba = !1;
    }
  function r_(e, t, n, r, i, s, o, a, u) {
    var l = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, l);
    } catch (c) {
      this.onError(c);
    }
  }
  var Wr = !1,
    As = null,
    $s = !1,
    Wa = null,
    i_ = {
      onError: function (e) {
        ((Wr = !0), (As = e));
      },
    };
  function s_(e, t, n, r, i, s, o, a, u) {
    ((Wr = !1), (As = null), r_.apply(i_, arguments));
  }
  function o_(e, t, n, r, i, s, o, a, u) {
    if ((s_.apply(this, arguments), Wr)) {
      if (Wr) {
        var l = As;
        ((Wr = !1), (As = null));
      } else throw Error(S(198));
      $s || (($s = !0), (Wa = l));
    }
  }
  function wn(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Tp(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Pc(e) {
    if (wn(e) !== e) throw Error(S(188));
  }
  function a_(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = wn(e)), t === null)) throw Error(S(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var i = n.return;
      if (i === null) break;
      var s = i.alternate;
      if (s === null) {
        if (((r = i.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (i.child === s.child) {
        for (s = i.child; s; ) {
          if (s === n) return (Pc(i), e);
          if (s === r) return (Pc(i), t);
          s = s.sibling;
        }
        throw Error(S(188));
      }
      if (n.return !== r.return) ((n = i), (r = s));
      else {
        for (var o = !1, a = i.child; a; ) {
          if (a === n) {
            ((o = !0), (n = i), (r = s));
            break;
          }
          if (a === r) {
            ((o = !0), (r = i), (n = s));
            break;
          }
          a = a.sibling;
        }
        if (!o) {
          for (a = s.child; a; ) {
            if (a === n) {
              ((o = !0), (n = s), (r = i));
              break;
            }
            if (a === r) {
              ((o = !0), (r = s), (n = i));
              break;
            }
            a = a.sibling;
          }
          if (!o) throw Error(S(189));
        }
      }
      if (n.alternate !== r) throw Error(S(190));
    }
    if (n.tag !== 3) throw Error(S(188));
    return n.stateNode.current === n ? e : t;
  }
  function wp(e) {
    return ((e = a_(e)), e !== null ? kp(e) : null);
  }
  function kp(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = kp(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Ip = Le.unstable_scheduleCallback,
    Oc = Le.unstable_cancelCallback,
    u_ = Le.unstable_shouldYield,
    l_ = Le.unstable_requestPaint,
    te = Le.unstable_now,
    c_ = Le.unstable_getCurrentPriorityLevel,
    ol = Le.unstable_ImmediatePriority,
    Np = Le.unstable_UserBlockingPriority,
    Fs = Le.unstable_NormalPriority,
    f_ = Le.unstable_LowPriority,
    Cp = Le.unstable_IdlePriority,
    co = null,
    ot = null;
  function d_(e) {
    if (ot && typeof ot.onCommitFiberRoot == "function")
      try {
        ot.onCommitFiberRoot(co, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Qe = Math.clz32 ? Math.clz32 : m_,
    p_ = Math.log,
    h_ = Math.LN2;
  function m_(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((p_(e) / h_) | 0)) | 0);
  }
  var Wi = 64,
    Gi = 4194304;
  function Ur(e) {
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
        return e;
    }
  }
  function bs(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      i = e.suspendedLanes,
      s = e.pingedLanes,
      o = n & 268435455;
    if (o !== 0) {
      var a = o & ~i;
      a !== 0 ? (r = Ur(a)) : ((s &= o), s !== 0 && (r = Ur(s)));
    } else ((o = n & ~i), o !== 0 ? (r = Ur(o)) : s !== 0 && (r = Ur(s)));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      !(t & i) &&
      ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
    )
      return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        ((n = 31 - Qe(t)), (i = 1 << n), (r |= e[n]), (t &= ~i));
    return r;
  }
  function g_(e, t) {
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
        return -1;
    }
  }
  function __(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        i = e.expirationTimes,
        s = e.pendingLanes;
      0 < s;
    ) {
      var o = 31 - Qe(s),
        a = 1 << o,
        u = i[o];
      (u === -1
        ? (!(a & n) || a & r) && (i[o] = g_(a, t))
        : u <= t && (e.expiredLanes |= a),
        (s &= ~a));
    }
  }
  function Ga(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Rp() {
    var e = Wi;
    return ((Wi <<= 1), !(Wi & 4194240) && (Wi = 64), e);
  }
  function Yo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Ti(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Qe(t)),
      (e[t] = n));
  }
  function y_(e, t) {
    var n = e.pendingLanes & ~t;
    ((e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements));
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var i = 31 - Qe(n),
        s = 1 << i;
      ((t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s));
    }
  }
  function al(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - Qe(n),
        i = 1 << r;
      ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
    }
  }
  var U = 0;
  function xp(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var Pp,
    ul,
    Op,
    Dp,
    Lp,
    Va = !1,
    Vi = [],
    $t = null,
    Ft = null,
    bt = null,
    ii = new Map(),
    si = new Map(),
    Ot = [],
    v_ =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function Dc(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        $t = null;
        break;
      case "dragenter":
      case "dragleave":
        Ft = null;
        break;
      case "mouseover":
      case "mouseout":
        bt = null;
        break;
      case "pointerover":
      case "pointerout":
        ii.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        si.delete(t.pointerId);
    }
  }
  function Pr(e, t, n, r, i, s) {
    return e === null || e.nativeEvent !== s
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: s,
          targetContainers: [i],
        }),
        t !== null && ((t = ki(t)), t !== null && ul(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e);
  }
  function S_(e, t, n, r, i) {
    switch (t) {
      case "focusin":
        return (($t = Pr($t, e, t, n, r, i)), !0);
      case "dragenter":
        return ((Ft = Pr(Ft, e, t, n, r, i)), !0);
      case "mouseover":
        return ((bt = Pr(bt, e, t, n, r, i)), !0);
      case "pointerover":
        var s = i.pointerId;
        return (ii.set(s, Pr(ii.get(s) || null, e, t, n, r, i)), !0);
      case "gotpointercapture":
        return (
          (s = i.pointerId),
          si.set(s, Pr(si.get(s) || null, e, t, n, r, i)),
          !0
        );
    }
    return !1;
  }
  function Mp(e) {
    var t = rn(e.target);
    if (t !== null) {
      var n = wn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Tp(n)), t !== null)) {
            ((e.blockedOn = t),
              Lp(e.priority, function () {
                Op(n);
              }));
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function _s(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Ya(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((za = r), n.target.dispatchEvent(r), (za = null));
      } else return ((t = ki(n)), t !== null && ul(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function Lc(e, t, n) {
    _s(e) && n.delete(t);
  }
  function E_() {
    ((Va = !1),
      $t !== null && _s($t) && ($t = null),
      Ft !== null && _s(Ft) && (Ft = null),
      bt !== null && _s(bt) && (bt = null),
      ii.forEach(Lc),
      si.forEach(Lc));
  }
  function Or(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Va ||
        ((Va = !0),
        Le.unstable_scheduleCallback(Le.unstable_NormalPriority, E_)));
  }
  function oi(e) {
    function t(i) {
      return Or(i, e);
    }
    if (0 < Vi.length) {
      Or(Vi[0], e);
      for (var n = 1; n < Vi.length; n++) {
        var r = Vi[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      $t !== null && Or($t, e),
        Ft !== null && Or(Ft, e),
        bt !== null && Or(bt, e),
        ii.forEach(t),
        si.forEach(t),
        n = 0;
      n < Ot.length;
      n++
    )
      ((r = Ot[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Ot.length && ((n = Ot[0]), n.blockedOn === null); )
      (Mp(n), n.blockedOn === null && Ot.shift());
  }
  var Vn = kt.ReactCurrentBatchConfig,
    Us = !0;
  function T_(e, t, n, r) {
    var i = U,
      s = Vn.transition;
    Vn.transition = null;
    try {
      ((U = 1), ll(e, t, n, r));
    } finally {
      ((U = i), (Vn.transition = s));
    }
  }
  function w_(e, t, n, r) {
    var i = U,
      s = Vn.transition;
    Vn.transition = null;
    try {
      ((U = 4), ll(e, t, n, r));
    } finally {
      ((U = i), (Vn.transition = s));
    }
  }
  function ll(e, t, n, r) {
    if (Us) {
      var i = Ya(e, t, n, r);
      if (i === null) (ra(e, t, r, js, n), Dc(e, r));
      else if (S_(i, e, t, n, r)) r.stopPropagation();
      else if ((Dc(e, r), t & 4 && -1 < v_.indexOf(e))) {
        for (; i !== null; ) {
          var s = ki(i);
          if (
            (s !== null && Pp(s),
            (s = Ya(e, t, n, r)),
            s === null && ra(e, t, r, js, n),
            s === i)
          )
            break;
          i = s;
        }
        i !== null && r.stopPropagation();
      } else ra(e, t, r, null, n);
    }
  }
  var js = null;
  function Ya(e, t, n, r) {
    if (((js = null), (e = sl(r)), (e = rn(e)), e !== null))
      if (((t = wn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Tp(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((js = e), null);
  }
  function Ap(e) {
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
        switch (c_()) {
          case ol:
            return 1;
          case Np:
            return 4;
          case Fs:
          case f_:
            return 16;
          case Cp:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Lt = null,
    cl = null,
    ys = null;
  function $p() {
    if (ys) return ys;
    var e,
      t = cl,
      n = t.length,
      r,
      i = "value" in Lt ? Lt.value : Lt.textContent,
      s = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
    return (ys = i.slice(e, 1 < r ? 1 - r : void 0));
  }
  function vs(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Yi() {
    return !0;
  }
  function Mc() {
    return !1;
  }
  function Ae(e) {
    function t(n, r, i, s, o) {
      ((this._reactName = n),
        (this._targetInst = i),
        (this.type = r),
        (this.nativeEvent = s),
        (this.target = o),
        (this.currentTarget = null));
      for (var a in e)
        e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
      return (
        (this.isDefaultPrevented = (
          s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
        )
          ? Yi
          : Mc),
        (this.isPropagationStopped = Mc),
        this
      );
    }
    return (
      q(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Yi));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Yi));
        },
        persist: function () {},
        isPersistent: Yi,
      }),
      t
    );
  }
  var dr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    fl = Ae(dr),
    wi = q({}, dr, { view: 0, detail: 0 }),
    k_ = Ae(wi),
    Ko,
    Xo,
    Dr,
    fo = q({}, wi, {
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
      getModifierState: dl,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Dr &&
              (Dr && e.type === "mousemove"
                ? ((Ko = e.screenX - Dr.screenX), (Xo = e.screenY - Dr.screenY))
                : (Xo = Ko = 0),
              (Dr = e)),
            Ko);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Xo;
      },
    }),
    Ac = Ae(fo),
    I_ = q({}, fo, { dataTransfer: 0 }),
    N_ = Ae(I_),
    C_ = q({}, wi, { relatedTarget: 0 }),
    qo = Ae(C_),
    R_ = q({}, dr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    x_ = Ae(R_),
    P_ = q({}, dr, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    O_ = Ae(P_),
    D_ = q({}, dr, { data: 0 }),
    $c = Ae(D_),
    L_ = {
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
      MozPrintableKey: "Unidentified",
    },
    M_ = {
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
      224: "Meta",
    },
    A_ = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function $_(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = A_[e])
        ? !!t[e]
        : !1;
  }
  function dl() {
    return $_;
  }
  var F_ = q({}, wi, {
      key: function (e) {
        if (e.key) {
          var t = L_[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = vs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? M_[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: dl,
      charCode: function (e) {
        return e.type === "keypress" ? vs(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? vs(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    b_ = Ae(F_),
    U_ = q({}, fo, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Fc = Ae(U_),
    j_ = q({}, wi, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: dl,
    }),
    z_ = Ae(j_),
    H_ = q({}, dr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    B_ = Ae(H_),
    W_ = q({}, fo, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    G_ = Ae(W_),
    V_ = [9, 13, 27, 32],
    pl = St && "CompositionEvent" in window,
    Gr = null;
  St && "documentMode" in document && (Gr = document.documentMode);
  var Y_ = St && "TextEvent" in window && !Gr,
    Fp = St && (!pl || (Gr && 8 < Gr && 11 >= Gr)),
    bc = " ",
    Uc = !1;
  function bp(e, t) {
    switch (e) {
      case "keyup":
        return V_.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Up(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var On = !1;
  function K_(e, t) {
    switch (e) {
      case "compositionend":
        return Up(t);
      case "keypress":
        return t.which !== 32 ? null : ((Uc = !0), bc);
      case "textInput":
        return ((e = t.data), e === bc && Uc ? null : e);
      default:
        return null;
    }
  }
  function X_(e, t) {
    if (On)
      return e === "compositionend" || (!pl && bp(e, t))
        ? ((e = $p()), (ys = cl = Lt = null), (On = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Fp && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var q_ = {
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
    week: !0,
  };
  function jc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!q_[e.type] : t === "textarea";
  }
  function jp(e, t, n, r) {
    (_p(r),
      (t = zs(t, "onChange")),
      0 < t.length &&
        ((n = new fl("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t })));
  }
  var Vr = null,
    ai = null;
  function Q_(e) {
    Qp(e, 0);
  }
  function po(e) {
    var t = Mn(e);
    if (cp(t)) return e;
  }
  function J_(e, t) {
    if (e === "change") return t;
  }
  var zp = !1;
  if (St) {
    var Qo;
    if (St) {
      var Jo = "oninput" in document;
      if (!Jo) {
        var zc = document.createElement("div");
        (zc.setAttribute("oninput", "return;"),
          (Jo = typeof zc.oninput == "function"));
      }
      Qo = Jo;
    } else Qo = !1;
    zp = Qo && (!document.documentMode || 9 < document.documentMode);
  }
  function Hc() {
    Vr && (Vr.detachEvent("onpropertychange", Hp), (ai = Vr = null));
  }
  function Hp(e) {
    if (e.propertyName === "value" && po(ai)) {
      var t = [];
      (jp(t, ai, e, sl(e)), Ep(Q_, t));
    }
  }
  function Z_(e, t, n) {
    e === "focusin"
      ? (Hc(), (Vr = t), (ai = n), Vr.attachEvent("onpropertychange", Hp))
      : e === "focusout" && Hc();
  }
  function ey(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return po(ai);
  }
  function ty(e, t) {
    if (e === "click") return po(t);
  }
  function ny(e, t) {
    if (e === "input" || e === "change") return po(t);
  }
  function ry(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var et = typeof Object.is == "function" ? Object.is : ry;
  function ui(e, t) {
    if (et(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!xa.call(t, i) || !et(e[i], t[i])) return !1;
    }
    return !0;
  }
  function Bc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Wc(e, t) {
    var n = Bc(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Bc(n);
    }
  }
  function Bp(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Bp(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Wp() {
    for (var e = window, t = Ms(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Ms(e.document);
    }
    return t;
  }
  function hl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function iy(e) {
    var t = Wp(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      Bp(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && hl(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          ((n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length)));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var i = n.textContent.length,
            s = Math.min(r.start, i);
          ((r = r.end === void 0 ? s : Math.min(r.end, i)),
            !e.extend && s > r && ((i = r), (r = s), (s = i)),
            (i = Wc(n, s)));
          var o = Wc(n, r);
          i &&
            o &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== i.node ||
              e.anchorOffset !== i.offset ||
              e.focusNode !== o.node ||
              e.focusOffset !== o.offset) &&
            ((t = t.createRange()),
            t.setStart(i.node, i.offset),
            e.removeAllRanges(),
            s > r
              ? (e.addRange(t), e.extend(o.node, o.offset))
              : (t.setEnd(o.node, o.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        ((e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top));
    }
  }
  var sy = St && "documentMode" in document && 11 >= document.documentMode,
    Dn = null,
    Ka = null,
    Yr = null,
    Xa = !1;
  function Gc(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Xa ||
      Dn == null ||
      Dn !== Ms(r) ||
      ((r = Dn),
      "selectionStart" in r && hl(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (Yr && ui(Yr, r)) ||
        ((Yr = r),
        (r = zs(Ka, "onSelect")),
        0 < r.length &&
          ((t = new fl("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Dn))));
  }
  function Ki(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Ln = {
      animationend: Ki("Animation", "AnimationEnd"),
      animationiteration: Ki("Animation", "AnimationIteration"),
      animationstart: Ki("Animation", "AnimationStart"),
      transitionend: Ki("Transition", "TransitionEnd"),
    },
    Zo = {},
    Gp = {};
  St &&
    ((Gp = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ln.animationend.animation,
      delete Ln.animationiteration.animation,
      delete Ln.animationstart.animation),
    "TransitionEvent" in window || delete Ln.transitionend.transition);
  function ho(e) {
    if (Zo[e]) return Zo[e];
    if (!Ln[e]) return e;
    var t = Ln[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Gp) return (Zo[e] = t[n]);
    return e;
  }
  var Vp = ho("animationend"),
    Yp = ho("animationiteration"),
    Kp = ho("animationstart"),
    Xp = ho("transitionend"),
    qp = new Map(),
    Vc =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Xt(e, t) {
    (qp.set(e, t), Tn(t, [e]));
  }
  for (var ea = 0; ea < Vc.length; ea++) {
    var ta = Vc[ea],
      oy = ta.toLowerCase(),
      ay = ta[0].toUpperCase() + ta.slice(1);
    Xt(oy, "on" + ay);
  }
  Xt(Vp, "onAnimationEnd");
  Xt(Yp, "onAnimationIteration");
  Xt(Kp, "onAnimationStart");
  Xt("dblclick", "onDoubleClick");
  Xt("focusin", "onFocus");
  Xt("focusout", "onBlur");
  Xt(Xp, "onTransitionEnd");
  Qn("onMouseEnter", ["mouseout", "mouseover"]);
  Qn("onMouseLeave", ["mouseout", "mouseover"]);
  Qn("onPointerEnter", ["pointerout", "pointerover"]);
  Qn("onPointerLeave", ["pointerout", "pointerover"]);
  Tn(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(
      " ",
    ),
  );
  Tn(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " ",
    ),
  );
  Tn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  Tn(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" "),
  );
  Tn(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" "),
  );
  Tn(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
  );
  var jr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    uy = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(jr),
    );
  function Yc(e, t, n) {
    var r = e.type || "unknown-event";
    ((e.currentTarget = n), o_(r, t, void 0, e), (e.currentTarget = null));
  }
  function Qp(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        i = r.event;
      r = r.listeners;
      e: {
        var s = void 0;
        if (t)
          for (var o = r.length - 1; 0 <= o; o--) {
            var a = r[o],
              u = a.instance,
              l = a.currentTarget;
            if (((a = a.listener), u !== s && i.isPropagationStopped()))
              break e;
            (Yc(i, a, l), (s = u));
          }
        else
          for (o = 0; o < r.length; o++) {
            if (
              ((a = r[o]),
              (u = a.instance),
              (l = a.currentTarget),
              (a = a.listener),
              u !== s && i.isPropagationStopped())
            )
              break e;
            (Yc(i, a, l), (s = u));
          }
      }
    }
    if ($s) throw ((e = Wa), ($s = !1), (Wa = null), e);
  }
  function B(e, t) {
    var n = t[eu];
    n === void 0 && (n = t[eu] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Jp(t, e, 2, !1), n.add(r));
  }
  function na(e, t, n) {
    var r = 0;
    (t && (r |= 4), Jp(n, e, r, t));
  }
  var Xi = "_reactListening" + Math.random().toString(36).slice(2);
  function li(e) {
    if (!e[Xi]) {
      ((e[Xi] = !0),
        sp.forEach(function (n) {
          n !== "selectionchange" && (uy.has(n) || na(n, !1, e), na(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Xi] || ((t[Xi] = !0), na("selectionchange", !1, t));
    }
  }
  function Jp(e, t, n, r) {
    switch (Ap(t)) {
      case 1:
        var i = T_;
        break;
      case 4:
        i = w_;
        break;
      default:
        i = ll;
    }
    ((n = i.bind(null, t, n, e)),
      (i = void 0),
      !Ba ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (i = !0),
      r
        ? i !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: i })
          : e.addEventListener(t, n, !0)
        : i !== void 0
          ? e.addEventListener(t, n, { passive: i })
          : e.addEventListener(t, n, !1));
  }
  function ra(e, t, n, r, i) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var o = r.tag;
        if (o === 3 || o === 4) {
          var a = r.stateNode.containerInfo;
          if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
          if (o === 4)
            for (o = r.return; o !== null; ) {
              var u = o.tag;
              if (
                (u === 3 || u === 4) &&
                ((u = o.stateNode.containerInfo),
                u === i || (u.nodeType === 8 && u.parentNode === i))
              )
                return;
              o = o.return;
            }
          for (; a !== null; ) {
            if (((o = rn(a)), o === null)) return;
            if (((u = o.tag), u === 5 || u === 6)) {
              r = s = o;
              continue e;
            }
            a = a.parentNode;
          }
        }
        r = r.return;
      }
    Ep(function () {
      var l = s,
        c = sl(n),
        f = [];
      e: {
        var d = qp.get(e);
        if (d !== void 0) {
          var m = fl,
            _ = e;
          switch (e) {
            case "keypress":
              if (vs(n) === 0) break e;
            case "keydown":
            case "keyup":
              m = b_;
              break;
            case "focusin":
              ((_ = "focus"), (m = qo));
              break;
            case "focusout":
              ((_ = "blur"), (m = qo));
              break;
            case "beforeblur":
            case "afterblur":
              m = qo;
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
              m = Ac;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              m = N_;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              m = z_;
              break;
            case Vp:
            case Yp:
            case Kp:
              m = x_;
              break;
            case Xp:
              m = B_;
              break;
            case "scroll":
              m = k_;
              break;
            case "wheel":
              m = G_;
              break;
            case "copy":
            case "cut":
            case "paste":
              m = O_;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              m = Fc;
          }
          var y = (t & 4) !== 0,
            C = !y && e === "scroll",
            h = y ? (d !== null ? d + "Capture" : null) : d;
          y = [];
          for (var p = l, g; p !== null; ) {
            g = p;
            var v = g.stateNode;
            if (
              (g.tag === 5 &&
                v !== null &&
                ((g = v),
                h !== null &&
                  ((v = ri(p, h)), v != null && y.push(ci(p, v, g)))),
              C)
            )
              break;
            p = p.return;
          }
          0 < y.length &&
            ((d = new m(d, _, null, n, c)), f.push({ event: d, listeners: y }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((d = e === "mouseover" || e === "pointerover"),
            (m = e === "mouseout" || e === "pointerout"),
            d &&
              n !== za &&
              (_ = n.relatedTarget || n.fromElement) &&
              (rn(_) || _[Et]))
          )
            break e;
          if (
            (m || d) &&
            ((d =
              c.window === c
                ? c
                : (d = c.ownerDocument)
                  ? d.defaultView || d.parentWindow
                  : window),
            m
              ? ((_ = n.relatedTarget || n.toElement),
                (m = l),
                (_ = _ ? rn(_) : null),
                _ !== null &&
                  ((C = wn(_)), _ !== C || (_.tag !== 5 && _.tag !== 6)) &&
                  (_ = null))
              : ((m = null), (_ = l)),
            m !== _)
          ) {
            if (
              ((y = Ac),
              (v = "onMouseLeave"),
              (h = "onMouseEnter"),
              (p = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((y = Fc),
                (v = "onPointerLeave"),
                (h = "onPointerEnter"),
                (p = "pointer")),
              (C = m == null ? d : Mn(m)),
              (g = _ == null ? d : Mn(_)),
              (d = new y(v, p + "leave", m, n, c)),
              (d.target = C),
              (d.relatedTarget = g),
              (v = null),
              rn(c) === l &&
                ((y = new y(h, p + "enter", _, n, c)),
                (y.target = g),
                (y.relatedTarget = C),
                (v = y)),
              (C = v),
              m && _)
            )
              t: {
                for (y = m, h = _, p = 0, g = y; g; g = Cn(g)) p++;
                for (g = 0, v = h; v; v = Cn(v)) g++;
                for (; 0 < p - g; ) ((y = Cn(y)), p--);
                for (; 0 < g - p; ) ((h = Cn(h)), g--);
                for (; p--; ) {
                  if (y === h || (h !== null && y === h.alternate)) break t;
                  ((y = Cn(y)), (h = Cn(h)));
                }
                y = null;
              }
            else y = null;
            (m !== null && Kc(f, d, m, y, !1),
              _ !== null && C !== null && Kc(f, C, _, y, !0));
          }
        }
        e: {
          if (
            ((d = l ? Mn(l) : window),
            (m = d.nodeName && d.nodeName.toLowerCase()),
            m === "select" || (m === "input" && d.type === "file"))
          )
            var E = J_;
          else if (jc(d))
            if (zp) E = ny;
            else {
              E = ey;
              var I = Z_;
            }
          else
            (m = d.nodeName) &&
              m.toLowerCase() === "input" &&
              (d.type === "checkbox" || d.type === "radio") &&
              (E = ty);
          if (E && (E = E(e, l))) {
            jp(f, E, n, c);
            break e;
          }
          (I && I(e, d, l),
            e === "focusout" &&
              (I = d._wrapperState) &&
              I.controlled &&
              d.type === "number" &&
              $a(d, "number", d.value));
        }
        switch (((I = l ? Mn(l) : window), e)) {
          case "focusin":
            (jc(I) || I.contentEditable === "true") &&
              ((Dn = I), (Ka = l), (Yr = null));
            break;
          case "focusout":
            Yr = Ka = Dn = null;
            break;
          case "mousedown":
            Xa = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Xa = !1), Gc(f, n, c));
            break;
          case "selectionchange":
            if (sy) break;
          case "keydown":
          case "keyup":
            Gc(f, n, c);
        }
        var N;
        if (pl)
          e: {
            switch (e) {
              case "compositionstart":
                var R = "onCompositionStart";
                break e;
              case "compositionend":
                R = "onCompositionEnd";
                break e;
              case "compositionupdate":
                R = "onCompositionUpdate";
                break e;
            }
            R = void 0;
          }
        else
          On
            ? bp(e, n) && (R = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (R = "onCompositionStart");
        (R &&
          (Fp &&
            n.locale !== "ko" &&
            (On || R !== "onCompositionStart"
              ? R === "onCompositionEnd" && On && (N = $p())
              : ((Lt = c),
                (cl = "value" in Lt ? Lt.value : Lt.textContent),
                (On = !0))),
          (I = zs(l, R)),
          0 < I.length &&
            ((R = new $c(R, e, null, n, c)),
            f.push({ event: R, listeners: I }),
            N ? (R.data = N) : ((N = Up(n)), N !== null && (R.data = N)))),
          (N = Y_ ? K_(e, n) : X_(e, n)) &&
            ((l = zs(l, "onBeforeInput")),
            0 < l.length &&
              ((c = new $c("onBeforeInput", "beforeinput", null, n, c)),
              f.push({ event: c, listeners: l }),
              (c.data = N))));
      }
      Qp(f, t);
    });
  }
  function ci(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function zs(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var i = e,
        s = i.stateNode;
      (i.tag === 5 &&
        s !== null &&
        ((i = s),
        (s = ri(e, n)),
        s != null && r.unshift(ci(e, s, i)),
        (s = ri(e, t)),
        s != null && r.push(ci(e, s, i))),
        (e = e.return));
    }
    return r;
  }
  function Cn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Kc(e, t, n, r, i) {
    for (var s = t._reactName, o = []; n !== null && n !== r; ) {
      var a = n,
        u = a.alternate,
        l = a.stateNode;
      if (u !== null && u === r) break;
      (a.tag === 5 &&
        l !== null &&
        ((a = l),
        i
          ? ((u = ri(n, s)), u != null && o.unshift(ci(n, u, a)))
          : i || ((u = ri(n, s)), u != null && o.push(ci(n, u, a)))),
        (n = n.return));
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var ly = /\r\n?/g,
    cy = /\u0000|\uFFFD/g;
  function Xc(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        ly,
        `
`,
      )
      .replace(cy, "");
  }
  function qi(e, t, n) {
    if (((t = Xc(t)), Xc(e) !== t && n)) throw Error(S(425));
  }
  function Hs() {}
  var qa = null,
    Qa = null;
  function Ja(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Za = typeof setTimeout == "function" ? setTimeout : void 0,
    fy = typeof clearTimeout == "function" ? clearTimeout : void 0,
    qc = typeof Promise == "function" ? Promise : void 0,
    dy =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof qc < "u"
          ? function (e) {
              return qc.resolve(null).then(e).catch(py);
            }
          : Za;
  function py(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ia(e, t) {
    var n = t,
      r = 0;
    do {
      var i = n.nextSibling;
      if ((e.removeChild(n), i && i.nodeType === 8))
        if (((n = i.data), n === "/$")) {
          if (r === 0) {
            (e.removeChild(i), oi(t));
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = i;
    } while (n);
    oi(t);
  }
  function Ut(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Qc(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var pr = Math.random().toString(36).slice(2),
    st = "__reactFiber$" + pr,
    fi = "__reactProps$" + pr,
    Et = "__reactContainer$" + pr,
    eu = "__reactEvents$" + pr,
    hy = "__reactListeners$" + pr,
    my = "__reactHandles$" + pr;
  function rn(e) {
    var t = e[st];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Et] || n[st])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Qc(e); e !== null; ) {
            if ((n = e[st])) return n;
            e = Qc(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function ki(e) {
    return (
      (e = e[st] || e[Et]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Mn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(S(33));
  }
  function mo(e) {
    return e[fi] || null;
  }
  var tu = [],
    An = -1;
  function qt(e) {
    return { current: e };
  }
  function W(e) {
    0 > An || ((e.current = tu[An]), (tu[An] = null), An--);
  }
  function H(e, t) {
    (An++, (tu[An] = e.current), (e.current = t));
  }
  var Vt = {},
    _e = qt(Vt),
    Ie = qt(!1),
    dn = Vt;
  function Jn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Vt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
      s;
    for (s in n) i[s] = t[s];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      i
    );
  }
  function Ne(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function Bs() {
    (W(Ie), W(_e));
  }
  function Jc(e, t, n) {
    if (_e.current !== Vt) throw Error(S(168));
    (H(_e, t), H(Ie, n));
  }
  function Zp(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(S(108, Zg(e) || "Unknown", i));
    return q({}, n, r);
  }
  function Ws(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Vt),
      (dn = _e.current),
      H(_e, e),
      H(Ie, Ie.current),
      !0
    );
  }
  function Zc(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(S(169));
    (n
      ? ((e = Zp(e, t, dn)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        W(Ie),
        W(_e),
        H(_e, e))
      : W(Ie),
      H(Ie, n));
  }
  var dt = null,
    go = !1,
    sa = !1;
  function eh(e) {
    dt === null ? (dt = [e]) : dt.push(e);
  }
  function gy(e) {
    ((go = !0), eh(e));
  }
  function Qt() {
    if (!sa && dt !== null) {
      sa = !0;
      var e = 0,
        t = U;
      try {
        var n = dt;
        for (U = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((dt = null), (go = !1));
      } catch (i) {
        throw (dt !== null && (dt = dt.slice(e + 1)), Ip(ol, Qt), i);
      } finally {
        ((U = t), (sa = !1));
      }
    }
    return null;
  }
  var $n = [],
    Fn = 0,
    Gs = null,
    Vs = 0,
    $e = [],
    Fe = 0,
    pn = null,
    ht = 1,
    mt = "";
  function en(e, t) {
    (($n[Fn++] = Vs), ($n[Fn++] = Gs), (Gs = e), (Vs = t));
  }
  function th(e, t, n) {
    (($e[Fe++] = ht), ($e[Fe++] = mt), ($e[Fe++] = pn), (pn = e));
    var r = ht;
    e = mt;
    var i = 32 - Qe(r) - 1;
    ((r &= ~(1 << i)), (n += 1));
    var s = 32 - Qe(t) + i;
    if (30 < s) {
      var o = i - (i % 5);
      ((s = (r & ((1 << o) - 1)).toString(32)),
        (r >>= o),
        (i -= o),
        (ht = (1 << (32 - Qe(t) + i)) | (n << i) | r),
        (mt = s + e));
    } else ((ht = (1 << s) | (n << i) | r), (mt = e));
  }
  function ml(e) {
    e.return !== null && (en(e, 1), th(e, 1, 0));
  }
  function gl(e) {
    for (; e === Gs; )
      ((Gs = $n[--Fn]), ($n[Fn] = null), (Vs = $n[--Fn]), ($n[Fn] = null));
    for (; e === pn; )
      ((pn = $e[--Fe]),
        ($e[Fe] = null),
        (mt = $e[--Fe]),
        ($e[Fe] = null),
        (ht = $e[--Fe]),
        ($e[Fe] = null));
  }
  var De = null,
    Pe = null,
    V = !1,
    Ke = null;
  function nh(e, t) {
    var n = be(5, null, null, 0);
    ((n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function ef(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (De = e), (Pe = Ut(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (De = e), (Pe = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = pn !== null ? { id: ht, overflow: mt } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = be(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (De = e),
              (Pe = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function nu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function ru(e) {
    if (V) {
      var t = Pe;
      if (t) {
        var n = t;
        if (!ef(e, t)) {
          if (nu(e)) throw Error(S(418));
          t = Ut(n.nextSibling);
          var r = De;
          t && ef(e, t)
            ? nh(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (V = !1), (De = e));
        }
      } else {
        if (nu(e)) throw Error(S(418));
        ((e.flags = (e.flags & -4097) | 2), (V = !1), (De = e));
      }
    }
  }
  function tf(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;
    )
      e = e.return;
    De = e;
  }
  function Qi(e) {
    if (e !== De) return !1;
    if (!V) return (tf(e), (V = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Ja(e.type, e.memoizedProps))),
      t && (t = Pe))
    ) {
      if (nu(e)) throw (rh(), Error(S(418)));
      for (; t; ) (nh(e, t), (t = Ut(t.nextSibling)));
    }
    if ((tf(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(S(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Pe = Ut(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        Pe = null;
      }
    } else Pe = De ? Ut(e.stateNode.nextSibling) : null;
    return !0;
  }
  function rh() {
    for (var e = Pe; e; ) e = Ut(e.nextSibling);
  }
  function Zn() {
    ((Pe = De = null), (V = !1));
  }
  function _l(e) {
    Ke === null ? (Ke = [e]) : Ke.push(e);
  }
  var _y = kt.ReactCurrentBatchConfig;
  function Lr(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(S(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(S(147, e));
        var i = r,
          s = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === s
          ? t.ref
          : ((t = function (o) {
              var a = i.refs;
              o === null ? delete a[s] : (a[s] = o);
            }),
            (t._stringRef = s),
            t);
      }
      if (typeof e != "string") throw Error(S(284));
      if (!n._owner) throw Error(S(290, e));
    }
    return e;
  }
  function Ji(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        S(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      )
    );
  }
  function nf(e) {
    var t = e._init;
    return t(e._payload);
  }
  function ih(e) {
    function t(h, p) {
      if (e) {
        var g = h.deletions;
        g === null ? ((h.deletions = [p]), (h.flags |= 16)) : g.push(p);
      }
    }
    function n(h, p) {
      if (!e) return null;
      for (; p !== null; ) (t(h, p), (p = p.sibling));
      return null;
    }
    function r(h, p) {
      for (h = new Map(); p !== null; )
        (p.key !== null ? h.set(p.key, p) : h.set(p.index, p), (p = p.sibling));
      return h;
    }
    function i(h, p) {
      return ((h = Bt(h, p)), (h.index = 0), (h.sibling = null), h);
    }
    function s(h, p, g) {
      return (
        (h.index = g),
        e
          ? ((g = h.alternate),
            g !== null
              ? ((g = g.index), g < p ? ((h.flags |= 2), p) : g)
              : ((h.flags |= 2), p))
          : ((h.flags |= 1048576), p)
      );
    }
    function o(h) {
      return (e && h.alternate === null && (h.flags |= 2), h);
    }
    function a(h, p, g, v) {
      return p === null || p.tag !== 6
        ? ((p = da(g, h.mode, v)), (p.return = h), p)
        : ((p = i(p, g)), (p.return = h), p);
    }
    function u(h, p, g, v) {
      var E = g.type;
      return E === Pn
        ? c(h, p, g.props.children, v, g.key)
        : p !== null &&
            (p.elementType === E ||
              (typeof E == "object" &&
                E !== null &&
                E.$$typeof === Rt &&
                nf(E) === p.type))
          ? ((v = i(p, g.props)), (v.ref = Lr(h, p, g)), (v.return = h), v)
          : ((v = Ns(g.type, g.key, g.props, null, h.mode, v)),
            (v.ref = Lr(h, p, g)),
            (v.return = h),
            v);
    }
    function l(h, p, g, v) {
      return p === null ||
        p.tag !== 4 ||
        p.stateNode.containerInfo !== g.containerInfo ||
        p.stateNode.implementation !== g.implementation
        ? ((p = pa(g, h.mode, v)), (p.return = h), p)
        : ((p = i(p, g.children || [])), (p.return = h), p);
    }
    function c(h, p, g, v, E) {
      return p === null || p.tag !== 7
        ? ((p = cn(g, h.mode, v, E)), (p.return = h), p)
        : ((p = i(p, g)), (p.return = h), p);
    }
    function f(h, p, g) {
      if ((typeof p == "string" && p !== "") || typeof p == "number")
        return ((p = da("" + p, h.mode, g)), (p.return = h), p);
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case zi:
            return (
              (g = Ns(p.type, p.key, p.props, null, h.mode, g)),
              (g.ref = Lr(h, null, p)),
              (g.return = h),
              g
            );
          case xn:
            return ((p = pa(p, h.mode, g)), (p.return = h), p);
          case Rt:
            var v = p._init;
            return f(h, v(p._payload), g);
        }
        if (br(p) || Rr(p))
          return ((p = cn(p, h.mode, g, null)), (p.return = h), p);
        Ji(h, p);
      }
      return null;
    }
    function d(h, p, g, v) {
      var E = p !== null ? p.key : null;
      if ((typeof g == "string" && g !== "") || typeof g == "number")
        return E !== null ? null : a(h, p, "" + g, v);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case zi:
            return g.key === E ? u(h, p, g, v) : null;
          case xn:
            return g.key === E ? l(h, p, g, v) : null;
          case Rt:
            return ((E = g._init), d(h, p, E(g._payload), v));
        }
        if (br(g) || Rr(g)) return E !== null ? null : c(h, p, g, v, null);
        Ji(h, g);
      }
      return null;
    }
    function m(h, p, g, v, E) {
      if ((typeof v == "string" && v !== "") || typeof v == "number")
        return ((h = h.get(g) || null), a(p, h, "" + v, E));
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case zi:
            return (
              (h = h.get(v.key === null ? g : v.key) || null),
              u(p, h, v, E)
            );
          case xn:
            return (
              (h = h.get(v.key === null ? g : v.key) || null),
              l(p, h, v, E)
            );
          case Rt:
            var I = v._init;
            return m(h, p, g, I(v._payload), E);
        }
        if (br(v) || Rr(v))
          return ((h = h.get(g) || null), c(p, h, v, E, null));
        Ji(p, v);
      }
      return null;
    }
    function _(h, p, g, v) {
      for (
        var E = null, I = null, N = p, R = (p = 0), Z = null;
        N !== null && R < g.length;
        R++
      ) {
        N.index > R ? ((Z = N), (N = null)) : (Z = N.sibling);
        var $ = d(h, N, g[R], v);
        if ($ === null) {
          N === null && (N = Z);
          break;
        }
        (e && N && $.alternate === null && t(h, N),
          (p = s($, p, R)),
          I === null ? (E = $) : (I.sibling = $),
          (I = $),
          (N = Z));
      }
      if (R === g.length) return (n(h, N), V && en(h, R), E);
      if (N === null) {
        for (; R < g.length; R++)
          ((N = f(h, g[R], v)),
            N !== null &&
              ((p = s(N, p, R)),
              I === null ? (E = N) : (I.sibling = N),
              (I = N)));
        return (V && en(h, R), E);
      }
      for (N = r(h, N); R < g.length; R++)
        ((Z = m(N, h, R, g[R], v)),
          Z !== null &&
            (e && Z.alternate !== null && N.delete(Z.key === null ? R : Z.key),
            (p = s(Z, p, R)),
            I === null ? (E = Z) : (I.sibling = Z),
            (I = Z)));
      return (
        e &&
          N.forEach(function (We) {
            return t(h, We);
          }),
        V && en(h, R),
        E
      );
    }
    function y(h, p, g, v) {
      var E = Rr(g);
      if (typeof E != "function") throw Error(S(150));
      if (((g = E.call(g)), g == null)) throw Error(S(151));
      for (
        var I = (E = null), N = p, R = (p = 0), Z = null, $ = g.next();
        N !== null && !$.done;
        R++, $ = g.next()
      ) {
        N.index > R ? ((Z = N), (N = null)) : (Z = N.sibling);
        var We = d(h, N, $.value, v);
        if (We === null) {
          N === null && (N = Z);
          break;
        }
        (e && N && We.alternate === null && t(h, N),
          (p = s(We, p, R)),
          I === null ? (E = We) : (I.sibling = We),
          (I = We),
          (N = Z));
      }
      if ($.done) return (n(h, N), V && en(h, R), E);
      if (N === null) {
        for (; !$.done; R++, $ = g.next())
          (($ = f(h, $.value, v)),
            $ !== null &&
              ((p = s($, p, R)),
              I === null ? (E = $) : (I.sibling = $),
              (I = $)));
        return (V && en(h, R), E);
      }
      for (N = r(h, N); !$.done; R++, $ = g.next())
        (($ = m(N, h, R, $.value, v)),
          $ !== null &&
            (e && $.alternate !== null && N.delete($.key === null ? R : $.key),
            (p = s($, p, R)),
            I === null ? (E = $) : (I.sibling = $),
            (I = $)));
      return (
        e &&
          N.forEach(function (Nr) {
            return t(h, Nr);
          }),
        V && en(h, R),
        E
      );
    }
    function C(h, p, g, v) {
      if (
        (typeof g == "object" &&
          g !== null &&
          g.type === Pn &&
          g.key === null &&
          (g = g.props.children),
        typeof g == "object" && g !== null)
      ) {
        switch (g.$$typeof) {
          case zi:
            e: {
              for (var E = g.key, I = p; I !== null; ) {
                if (I.key === E) {
                  if (((E = g.type), E === Pn)) {
                    if (I.tag === 7) {
                      (n(h, I.sibling),
                        (p = i(I, g.props.children)),
                        (p.return = h),
                        (h = p));
                      break e;
                    }
                  } else if (
                    I.elementType === E ||
                    (typeof E == "object" &&
                      E !== null &&
                      E.$$typeof === Rt &&
                      nf(E) === I.type)
                  ) {
                    (n(h, I.sibling),
                      (p = i(I, g.props)),
                      (p.ref = Lr(h, I, g)),
                      (p.return = h),
                      (h = p));
                    break e;
                  }
                  n(h, I);
                  break;
                } else t(h, I);
                I = I.sibling;
              }
              g.type === Pn
                ? ((p = cn(g.props.children, h.mode, v, g.key)),
                  (p.return = h),
                  (h = p))
                : ((v = Ns(g.type, g.key, g.props, null, h.mode, v)),
                  (v.ref = Lr(h, p, g)),
                  (v.return = h),
                  (h = v));
            }
            return o(h);
          case xn:
            e: {
              for (I = g.key; p !== null; ) {
                if (p.key === I)
                  if (
                    p.tag === 4 &&
                    p.stateNode.containerInfo === g.containerInfo &&
                    p.stateNode.implementation === g.implementation
                  ) {
                    (n(h, p.sibling),
                      (p = i(p, g.children || [])),
                      (p.return = h),
                      (h = p));
                    break e;
                  } else {
                    n(h, p);
                    break;
                  }
                else t(h, p);
                p = p.sibling;
              }
              ((p = pa(g, h.mode, v)), (p.return = h), (h = p));
            }
            return o(h);
          case Rt:
            return ((I = g._init), C(h, p, I(g._payload), v));
        }
        if (br(g)) return _(h, p, g, v);
        if (Rr(g)) return y(h, p, g, v);
        Ji(h, g);
      }
      return (typeof g == "string" && g !== "") || typeof g == "number"
        ? ((g = "" + g),
          p !== null && p.tag === 6
            ? (n(h, p.sibling), (p = i(p, g)), (p.return = h), (h = p))
            : (n(h, p), (p = da(g, h.mode, v)), (p.return = h), (h = p)),
          o(h))
        : n(h, p);
    }
    return C;
  }
  var er = ih(!0),
    sh = ih(!1),
    Ys = qt(null),
    Ks = null,
    bn = null,
    yl = null;
  function vl() {
    yl = bn = Ks = null;
  }
  function Sl(e) {
    var t = Ys.current;
    (W(Ys), (e._currentValue = t));
  }
  function iu(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Yn(e, t) {
    ((Ks = e),
      (yl = bn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (ke = !0), (e.firstContext = null)));
  }
  function ze(e) {
    var t = e._currentValue;
    if (yl !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), bn === null)) {
        if (Ks === null) throw Error(S(308));
        ((bn = e), (Ks.dependencies = { lanes: 0, firstContext: e }));
      } else bn = bn.next = e;
    return t;
  }
  var sn = null;
  function El(e) {
    sn === null ? (sn = [e]) : sn.push(e);
  }
  function oh(e, t, n, r) {
    var i = t.interleaved;
    return (
      i === null ? ((n.next = n), El(t)) : ((n.next = i.next), (i.next = n)),
      (t.interleaved = n),
      Tt(e, r)
    );
  }
  function Tt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      ((e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return));
    return n.tag === 3 ? n.stateNode : null;
  }
  var xt = !1;
  function Tl(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function ah(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        }));
  }
  function gt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function jt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), F & 2)) {
      var i = r.pending;
      return (
        i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
        (r.pending = t),
        Tt(e, n)
      );
    }
    return (
      (i = r.interleaved),
      i === null ? ((t.next = t), El(r)) : ((t.next = i.next), (i.next = t)),
      (r.interleaved = t),
      Tt(e, n)
    );
  }
  function Ss(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), al(e, n));
    }
  }
  function rf(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var i = null,
        s = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var o = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          (s === null ? (i = s = o) : (s = s.next = o), (n = n.next));
        } while (n !== null);
        s === null ? (i = s = t) : (s = s.next = t);
      } else i = s = t;
      ((n = {
        baseState: r.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: s,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  function Xs(e, t, n, r) {
    var i = e.updateQueue;
    xt = !1;
    var s = i.firstBaseUpdate,
      o = i.lastBaseUpdate,
      a = i.shared.pending;
    if (a !== null) {
      i.shared.pending = null;
      var u = a,
        l = u.next;
      ((u.next = null), o === null ? (s = l) : (o.next = l), (o = u));
      var c = e.alternate;
      c !== null &&
        ((c = c.updateQueue),
        (a = c.lastBaseUpdate),
        a !== o &&
          (a === null ? (c.firstBaseUpdate = l) : (a.next = l),
          (c.lastBaseUpdate = u)));
    }
    if (s !== null) {
      var f = i.baseState;
      ((o = 0), (c = l = u = null), (a = s));
      do {
        var d = a.lane,
          m = a.eventTime;
        if ((r & d) === d) {
          c !== null &&
            (c = c.next =
              {
                eventTime: m,
                lane: 0,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null,
              });
          e: {
            var _ = e,
              y = a;
            switch (((d = t), (m = n), y.tag)) {
              case 1:
                if (((_ = y.payload), typeof _ == "function")) {
                  f = _.call(m, f, d);
                  break e;
                }
                f = _;
                break e;
              case 3:
                _.flags = (_.flags & -65537) | 128;
              case 0:
                if (
                  ((_ = y.payload),
                  (d = typeof _ == "function" ? _.call(m, f, d) : _),
                  d == null)
                )
                  break e;
                f = q({}, f, d);
                break e;
              case 2:
                xt = !0;
            }
          }
          a.callback !== null &&
            a.lane !== 0 &&
            ((e.flags |= 64),
            (d = i.effects),
            d === null ? (i.effects = [a]) : d.push(a));
        } else
          ((m = {
            eventTime: m,
            lane: d,
            tag: a.tag,
            payload: a.payload,
            callback: a.callback,
            next: null,
          }),
            c === null ? ((l = c = m), (u = f)) : (c = c.next = m),
            (o |= d));
        if (((a = a.next), a === null)) {
          if (((a = i.shared.pending), a === null)) break;
          ((d = a),
            (a = d.next),
            (d.next = null),
            (i.lastBaseUpdate = d),
            (i.shared.pending = null));
        }
      } while (!0);
      if (
        (c === null && (u = f),
        (i.baseState = u),
        (i.firstBaseUpdate = l),
        (i.lastBaseUpdate = c),
        (t = i.shared.interleaved),
        t !== null)
      ) {
        i = t;
        do ((o |= i.lane), (i = i.next));
        while (i !== t);
      } else s === null && (i.shared.lanes = 0);
      ((mn |= o), (e.lanes = o), (e.memoizedState = f));
    }
  }
  function sf(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          i = r.callback;
        if (i !== null) {
          if (((r.callback = null), (r = n), typeof i != "function"))
            throw Error(S(191, i));
          i.call(r);
        }
      }
  }
  var Ii = {},
    at = qt(Ii),
    di = qt(Ii),
    pi = qt(Ii);
  function on(e) {
    if (e === Ii) throw Error(S(174));
    return e;
  }
  function wl(e, t) {
    switch ((H(pi, t), H(di, e), H(at, Ii), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ba(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = ba(t, e)));
    }
    (W(at), H(at, t));
  }
  function tr() {
    (W(at), W(di), W(pi));
  }
  function uh(e) {
    on(pi.current);
    var t = on(at.current),
      n = ba(t, e.type);
    t !== n && (H(di, e), H(at, n));
  }
  function kl(e) {
    di.current === e && (W(at), W(di));
  }
  var Y = qt(0);
  function qs(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var oa = [];
  function Il() {
    for (var e = 0; e < oa.length; e++)
      oa[e]._workInProgressVersionPrimary = null;
    oa.length = 0;
  }
  var Es = kt.ReactCurrentDispatcher,
    aa = kt.ReactCurrentBatchConfig,
    hn = 0,
    K = null,
    re = null,
    ue = null,
    Qs = !1,
    Kr = !1,
    hi = 0,
    yy = 0;
  function he() {
    throw Error(S(321));
  }
  function Nl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!et(e[n], t[n])) return !1;
    return !0;
  }
  function Cl(e, t, n, r, i, s) {
    if (
      ((hn = s),
      (K = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Es.current = e === null || e.memoizedState === null ? Ty : wy),
      (e = n(r, i)),
      Kr)
    ) {
      s = 0;
      do {
        if (((Kr = !1), (hi = 0), 25 <= s)) throw Error(S(301));
        ((s += 1),
          (ue = re = null),
          (t.updateQueue = null),
          (Es.current = ky),
          (e = n(r, i)));
      } while (Kr);
    }
    if (
      ((Es.current = Js),
      (t = re !== null && re.next !== null),
      (hn = 0),
      (ue = re = K = null),
      (Qs = !1),
      t)
    )
      throw Error(S(300));
    return e;
  }
  function Rl() {
    var e = hi !== 0;
    return ((hi = 0), e);
  }
  function rt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (ue === null ? (K.memoizedState = ue = e) : (ue = ue.next = e), ue);
  }
  function He() {
    if (re === null) {
      var e = K.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = re.next;
    var t = ue === null ? K.memoizedState : ue.next;
    if (t !== null) ((ue = t), (re = e));
    else {
      if (e === null) throw Error(S(310));
      ((re = e),
        (e = {
          memoizedState: re.memoizedState,
          baseState: re.baseState,
          baseQueue: re.baseQueue,
          queue: re.queue,
          next: null,
        }),
        ue === null ? (K.memoizedState = ue = e) : (ue = ue.next = e));
    }
    return ue;
  }
  function mi(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ua(e) {
    var t = He(),
      n = t.queue;
    if (n === null) throw Error(S(311));
    n.lastRenderedReducer = e;
    var r = re,
      i = r.baseQueue,
      s = n.pending;
    if (s !== null) {
      if (i !== null) {
        var o = i.next;
        ((i.next = s.next), (s.next = o));
      }
      ((r.baseQueue = i = s), (n.pending = null));
    }
    if (i !== null) {
      ((s = i.next), (r = r.baseState));
      var a = (o = null),
        u = null,
        l = s;
      do {
        var c = l.lane;
        if ((hn & c) === c)
          (u !== null &&
            (u = u.next =
              {
                lane: 0,
                action: l.action,
                hasEagerState: l.hasEagerState,
                eagerState: l.eagerState,
                next: null,
              }),
            (r = l.hasEagerState ? l.eagerState : e(r, l.action)));
        else {
          var f = {
            lane: c,
            action: l.action,
            hasEagerState: l.hasEagerState,
            eagerState: l.eagerState,
            next: null,
          };
          (u === null ? ((a = u = f), (o = r)) : (u = u.next = f),
            (K.lanes |= c),
            (mn |= c));
        }
        l = l.next;
      } while (l !== null && l !== s);
      (u === null ? (o = r) : (u.next = a),
        et(r, t.memoizedState) || (ke = !0),
        (t.memoizedState = r),
        (t.baseState = o),
        (t.baseQueue = u),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      i = e;
      do ((s = i.lane), (K.lanes |= s), (mn |= s), (i = i.next));
      while (i !== e);
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function la(e) {
    var t = He(),
      n = t.queue;
    if (n === null) throw Error(S(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      i = n.pending,
      s = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var o = (i = i.next);
      do ((s = e(s, o.action)), (o = o.next));
      while (o !== i);
      (et(s, t.memoizedState) || (ke = !0),
        (t.memoizedState = s),
        t.baseQueue === null && (t.baseState = s),
        (n.lastRenderedState = s));
    }
    return [s, r];
  }
  function lh() {}
  function ch(e, t) {
    var n = K,
      r = He(),
      i = t(),
      s = !et(r.memoizedState, i);
    if (
      (s && ((r.memoizedState = i), (ke = !0)),
      (r = r.queue),
      xl(ph.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || s || (ue !== null && ue.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        gi(9, dh.bind(null, n, r, i, t), void 0, null),
        le === null)
      )
        throw Error(S(349));
      hn & 30 || fh(n, t, i);
    }
    return i;
  }
  function fh(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = K.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (K.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function dh(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), hh(t) && mh(e));
  }
  function ph(e, t, n) {
    return n(function () {
      hh(t) && mh(e);
    });
  }
  function hh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !et(e, n);
    } catch {
      return !0;
    }
  }
  function mh(e) {
    var t = Tt(e, 1);
    t !== null && Je(t, e, 1, -1);
  }
  function of(e) {
    var t = rt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: mi,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Ey.bind(null, K, e)),
      [t.memoizedState, e]
    );
  }
  function gi(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = K.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (K.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function gh() {
    return He().memoizedState;
  }
  function Ts(e, t, n, r) {
    var i = rt();
    ((K.flags |= e),
      (i.memoizedState = gi(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function _o(e, t, n, r) {
    var i = He();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (re !== null) {
      var o = re.memoizedState;
      if (((s = o.destroy), r !== null && Nl(r, o.deps))) {
        i.memoizedState = gi(t, n, s, r);
        return;
      }
    }
    ((K.flags |= e), (i.memoizedState = gi(1 | t, n, s, r)));
  }
  function af(e, t) {
    return Ts(8390656, 8, e, t);
  }
  function xl(e, t) {
    return _o(2048, 8, e, t);
  }
  function _h(e, t) {
    return _o(4, 2, e, t);
  }
  function yh(e, t) {
    return _o(4, 4, e, t);
  }
  function vh(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Sh(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null),
      _o(4, 4, vh.bind(null, t, e), n)
    );
  }
  function Pl() {}
  function Eh(e, t) {
    var n = He();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Nl(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function Th(e, t) {
    var n = He();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Nl(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function wh(e, t, n) {
    return hn & 21
      ? (et(n, t) ||
          ((n = Rp()), (K.lanes |= n), (mn |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (ke = !0)), (e.memoizedState = n));
  }
  function vy(e, t) {
    var n = U;
    ((U = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = aa.transition;
    aa.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((U = n), (aa.transition = r));
    }
  }
  function kh() {
    return He().memoizedState;
  }
  function Sy(e, t, n) {
    var r = Ht(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Ih(e))
    )
      Nh(t, n);
    else if (((n = oh(e, t, n, r)), n !== null)) {
      var i = Se();
      (Je(n, e, r, i), Ch(n, t, r));
    }
  }
  function Ey(e, t, n) {
    var r = Ht(e),
      i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Ih(e)) Nh(t, i);
    else {
      var s = e.alternate;
      if (
        e.lanes === 0 &&
        (s === null || s.lanes === 0) &&
        ((s = t.lastRenderedReducer), s !== null)
      )
        try {
          var o = t.lastRenderedState,
            a = s(o, n);
          if (((i.hasEagerState = !0), (i.eagerState = a), et(a, o))) {
            var u = t.interleaved;
            (u === null
              ? ((i.next = i), El(t))
              : ((i.next = u.next), (u.next = i)),
              (t.interleaved = i));
            return;
          }
        } catch {
        } finally {
        }
      ((n = oh(e, t, i, r)),
        n !== null && ((i = Se()), Je(n, e, r, i), Ch(n, t, r)));
    }
  }
  function Ih(e) {
    var t = e.alternate;
    return e === K || (t !== null && t === K);
  }
  function Nh(e, t) {
    Kr = Qs = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function Ch(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), al(e, n));
    }
  }
  var Js = {
      readContext: ze,
      useCallback: he,
      useContext: he,
      useEffect: he,
      useImperativeHandle: he,
      useInsertionEffect: he,
      useLayoutEffect: he,
      useMemo: he,
      useReducer: he,
      useRef: he,
      useState: he,
      useDebugValue: he,
      useDeferredValue: he,
      useTransition: he,
      useMutableSource: he,
      useSyncExternalStore: he,
      useId: he,
      unstable_isNewReconciler: !1,
    },
    Ty = {
      readContext: ze,
      useCallback: function (e, t) {
        return ((rt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: ze,
      useEffect: af,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          Ts(4194308, 4, vh.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return Ts(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Ts(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = rt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = rt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = Sy.bind(null, K, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = rt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: of,
      useDebugValue: Pl,
      useDeferredValue: function (e) {
        return (rt().memoizedState = e);
      },
      useTransition: function () {
        var e = of(!1),
          t = e[0];
        return ((e = vy.bind(null, e[1])), (rt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = K,
          i = rt();
        if (V) {
          if (n === void 0) throw Error(S(407));
          n = n();
        } else {
          if (((n = t()), le === null)) throw Error(S(349));
          hn & 30 || fh(r, t, n);
        }
        i.memoizedState = n;
        var s = { value: n, getSnapshot: t };
        return (
          (i.queue = s),
          af(ph.bind(null, r, s, e), [e]),
          (r.flags |= 2048),
          gi(9, dh.bind(null, r, s, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = rt(),
          t = le.identifierPrefix;
        if (V) {
          var n = mt,
            r = ht;
          ((n = (r & ~(1 << (32 - Qe(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = hi++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = yy++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    wy = {
      readContext: ze,
      useCallback: Eh,
      useContext: ze,
      useEffect: xl,
      useImperativeHandle: Sh,
      useInsertionEffect: _h,
      useLayoutEffect: yh,
      useMemo: Th,
      useReducer: ua,
      useRef: gh,
      useState: function () {
        return ua(mi);
      },
      useDebugValue: Pl,
      useDeferredValue: function (e) {
        var t = He();
        return wh(t, re.memoizedState, e);
      },
      useTransition: function () {
        var e = ua(mi)[0],
          t = He().memoizedState;
        return [e, t];
      },
      useMutableSource: lh,
      useSyncExternalStore: ch,
      useId: kh,
      unstable_isNewReconciler: !1,
    },
    ky = {
      readContext: ze,
      useCallback: Eh,
      useContext: ze,
      useEffect: xl,
      useImperativeHandle: Sh,
      useInsertionEffect: _h,
      useLayoutEffect: yh,
      useMemo: Th,
      useReducer: la,
      useRef: gh,
      useState: function () {
        return la(mi);
      },
      useDebugValue: Pl,
      useDeferredValue: function (e) {
        var t = He();
        return re === null ? (t.memoizedState = e) : wh(t, re.memoizedState, e);
      },
      useTransition: function () {
        var e = la(mi)[0],
          t = He().memoizedState;
        return [e, t];
      },
      useMutableSource: lh,
      useSyncExternalStore: ch,
      useId: kh,
      unstable_isNewReconciler: !1,
    };
  function Ve(e, t) {
    if (e && e.defaultProps) {
      ((t = q({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function su(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : q({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var yo = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? wn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Se(),
        i = Ht(e),
        s = gt(r, i);
      ((s.payload = t),
        n != null && (s.callback = n),
        (t = jt(e, s, i)),
        t !== null && (Je(t, e, i, r), Ss(t, e, i)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Se(),
        i = Ht(e),
        s = gt(r, i);
      ((s.tag = 1),
        (s.payload = t),
        n != null && (s.callback = n),
        (t = jt(e, s, i)),
        t !== null && (Je(t, e, i, r), Ss(t, e, i)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Se(),
        r = Ht(e),
        i = gt(n, r);
      ((i.tag = 2),
        t != null && (i.callback = t),
        (t = jt(e, i, r)),
        t !== null && (Je(t, e, r, n), Ss(t, e, r)));
    },
  };
  function uf(e, t, n, r, i, s, o) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, s, o)
        : t.prototype && t.prototype.isPureReactComponent
          ? !ui(n, r) || !ui(i, s)
          : !0
    );
  }
  function Rh(e, t, n) {
    var r = !1,
      i = Vt,
      s = t.contextType;
    return (
      typeof s == "object" && s !== null
        ? (s = ze(s))
        : ((i = Ne(t) ? dn : _e.current),
          (r = t.contextTypes),
          (s = (r = r != null) ? Jn(e, i) : Vt)),
      (t = new t(n, s)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = yo),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = i),
        (e.__reactInternalMemoizedMaskedChildContext = s)),
      t
    );
  }
  function lf(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && yo.enqueueReplaceState(t, t.state, null));
  }
  function ou(e, t, n, r) {
    var i = e.stateNode;
    ((i.props = n), (i.state = e.memoizedState), (i.refs = {}), Tl(e));
    var s = t.contextType;
    (typeof s == "object" && s !== null
      ? (i.context = ze(s))
      : ((s = Ne(t) ? dn : _e.current), (i.context = Jn(e, s))),
      (i.state = e.memoizedState),
      (s = t.getDerivedStateFromProps),
      typeof s == "function" && (su(e, t, s, n), (i.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function" ||
        (typeof i.UNSAFE_componentWillMount != "function" &&
          typeof i.componentWillMount != "function") ||
        ((t = i.state),
        typeof i.componentWillMount == "function" && i.componentWillMount(),
        typeof i.UNSAFE_componentWillMount == "function" &&
          i.UNSAFE_componentWillMount(),
        t !== i.state && yo.enqueueReplaceState(i, i.state, null),
        Xs(e, n, i, r),
        (i.state = e.memoizedState)),
      typeof i.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function nr(e, t) {
    try {
      var n = "",
        r = t;
      do ((n += Jg(r)), (r = r.return));
      while (r);
      var i = n;
    } catch (s) {
      i =
        `
Error generating stack: ` +
        s.message +
        `
` +
        s.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
  }
  function ca(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function au(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var Iy = typeof WeakMap == "function" ? WeakMap : Map;
  function xh(e, t, n) {
    ((n = gt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (eo || ((eo = !0), (_u = r)), au(e, t));
      }),
      n
    );
  }
  function Ph(e, t, n) {
    ((n = gt(-1, n)), (n.tag = 3));
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var i = t.value;
      ((n.payload = function () {
        return r(i);
      }),
        (n.callback = function () {
          au(e, t);
        }));
    }
    var s = e.stateNode;
    return (
      s !== null &&
        typeof s.componentDidCatch == "function" &&
        (n.callback = function () {
          (au(e, t),
            typeof r != "function" &&
              (zt === null ? (zt = new Set([this])) : zt.add(this)));
          var o = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : "",
          });
        }),
      n
    );
  }
  function cf(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Iy();
      var i = new Set();
      r.set(t, i);
    } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
    i.has(n) || (i.add(n), (e = Uy.bind(null, e, t, n)), t.then(e, e));
  }
  function ff(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function df(e, t, n, r, i) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = i), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = gt(-1, 1)), (t.tag = 2), jt(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var Ny = kt.ReactCurrentOwner,
    ke = !1;
  function ye(e, t, n, r) {
    t.child = e === null ? sh(t, null, n, r) : er(t, e.child, n, r);
  }
  function pf(e, t, n, r, i) {
    n = n.render;
    var s = t.ref;
    return (
      Yn(t, i),
      (r = Cl(e, t, n, r, s, i)),
      (n = Rl()),
      e !== null && !ke
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~i),
          wt(e, t, i))
        : (V && n && ml(t), (t.flags |= 1), ye(e, t, r, i), t.child)
    );
  }
  function hf(e, t, n, r, i) {
    if (e === null) {
      var s = n.type;
      return typeof s == "function" &&
        !bl(s) &&
        s.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = s), Oh(e, t, s, r, i))
        : ((e = Ns(n.type, null, r, t, t.mode, i)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((s = e.child), !(e.lanes & i))) {
      var o = s.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : ui), n(o, r) && e.ref === t.ref)
      )
        return wt(e, t, i);
    }
    return (
      (t.flags |= 1),
      (e = Bt(s, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Oh(e, t, n, r, i) {
    if (e !== null) {
      var s = e.memoizedProps;
      if (ui(s, r) && e.ref === t.ref)
        if (((ke = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
          e.flags & 131072 && (ke = !0);
        else return ((t.lanes = e.lanes), wt(e, t, i));
    }
    return uu(e, t, n, r, i);
  }
  function Dh(e, t, n) {
    var r = t.pendingProps,
      i = r.children,
      s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          H(jn, xe),
          (xe |= n));
      else {
        if (!(n & 1073741824))
          return (
            (e = s !== null ? s.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            H(jn, xe),
            (xe |= e),
            null
          );
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = s !== null ? s.baseLanes : n),
          H(jn, xe),
          (xe |= r));
      }
    else
      (s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
        H(jn, xe),
        (xe |= r));
    return (ye(e, t, i, n), t.child);
  }
  function Lh(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function uu(e, t, n, r, i) {
    var s = Ne(n) ? dn : _e.current;
    return (
      (s = Jn(t, s)),
      Yn(t, i),
      (n = Cl(e, t, n, r, s, i)),
      (r = Rl()),
      e !== null && !ke
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~i),
          wt(e, t, i))
        : (V && r && ml(t), (t.flags |= 1), ye(e, t, n, i), t.child)
    );
  }
  function mf(e, t, n, r, i) {
    if (Ne(n)) {
      var s = !0;
      Ws(t);
    } else s = !1;
    if ((Yn(t, i), t.stateNode === null))
      (ws(e, t), Rh(t, n, r), ou(t, n, r, i), (r = !0));
    else if (e === null) {
      var o = t.stateNode,
        a = t.memoizedProps;
      o.props = a;
      var u = o.context,
        l = n.contextType;
      typeof l == "object" && l !== null
        ? (l = ze(l))
        : ((l = Ne(n) ? dn : _e.current), (l = Jn(t, l)));
      var c = n.getDerivedStateFromProps,
        f =
          typeof c == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function";
      (f ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((a !== r || u !== l) && lf(t, o, r, l)),
        (xt = !1));
      var d = t.memoizedState;
      ((o.state = d),
        Xs(t, r, o, i),
        (u = t.memoizedState),
        a !== r || d !== u || Ie.current || xt
          ? (typeof c == "function" && (su(t, n, c, r), (u = t.memoizedState)),
            (a = xt || uf(t, n, a, r, d, u, l))
              ? (f ||
                  (typeof o.UNSAFE_componentWillMount != "function" &&
                    typeof o.componentWillMount != "function") ||
                  (typeof o.componentWillMount == "function" &&
                    o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == "function" &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof o.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = u)),
            (o.props = r),
            (o.state = u),
            (o.context = l),
            (r = a))
          : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1)));
    } else {
      ((o = t.stateNode),
        ah(e, t),
        (a = t.memoizedProps),
        (l = t.type === t.elementType ? a : Ve(t.type, a)),
        (o.props = l),
        (f = t.pendingProps),
        (d = o.context),
        (u = n.contextType),
        typeof u == "object" && u !== null
          ? (u = ze(u))
          : ((u = Ne(n) ? dn : _e.current), (u = Jn(t, u))));
      var m = n.getDerivedStateFromProps;
      ((c =
        typeof m == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function") ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((a !== f || d !== u) && lf(t, o, r, u)),
        (xt = !1),
        (d = t.memoizedState),
        (o.state = d),
        Xs(t, r, o, i));
      var _ = t.memoizedState;
      a !== f || d !== _ || Ie.current || xt
        ? (typeof m == "function" && (su(t, n, m, r), (_ = t.memoizedState)),
          (l = xt || uf(t, n, l, r, d, _, u) || !1)
            ? (c ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" &&
                  o.componentWillUpdate(r, _, u),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(r, _, u)),
              typeof o.componentDidUpdate == "function" && (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (a === e.memoizedProps && d === e.memoizedState) ||
                (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (a === e.memoizedProps && d === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = _)),
          (o.props = r),
          (o.state = _),
          (o.context = u),
          (r = l))
        : (typeof o.componentDidUpdate != "function" ||
            (a === e.memoizedProps && d === e.memoizedState) ||
            (t.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (a === e.memoizedProps && d === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return lu(e, t, n, r, s, i);
  }
  function lu(e, t, n, r, i, s) {
    Lh(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return (i && Zc(t, n, !1), wt(e, t, s));
    ((r = t.stateNode), (Ny.current = t));
    var a =
      o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && o
        ? ((t.child = er(t, e.child, null, s)), (t.child = er(t, null, a, s)))
        : ye(e, t, a, s),
      (t.memoizedState = r.state),
      i && Zc(t, n, !0),
      t.child
    );
  }
  function Mh(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Jc(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Jc(e, t.context, !1),
      wl(e, t.containerInfo));
  }
  function gf(e, t, n, r, i) {
    return (Zn(), _l(i), (t.flags |= 256), ye(e, t, n, r), t.child);
  }
  var cu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function fu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ah(e, t, n) {
    var r = t.pendingProps,
      i = Y.current,
      s = !1,
      o = (t.flags & 128) !== 0,
      a;
    if (
      ((a = o) ||
        (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
      a
        ? ((s = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (i |= 1),
      H(Y, i & 1),
      e === null)
    )
      return (
        ru(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((o = r.children),
            (e = r.fallback),
            s
              ? ((r = t.mode),
                (s = t.child),
                (o = { mode: "hidden", children: o }),
                !(r & 1) && s !== null
                  ? ((s.childLanes = 0), (s.pendingProps = o))
                  : (s = Eo(o, r, 0, null)),
                (e = cn(e, r, n, null)),
                (s.return = t),
                (e.return = t),
                (s.sibling = e),
                (t.child = s),
                (t.child.memoizedState = fu(n)),
                (t.memoizedState = cu),
                e)
              : Ol(t, o))
      );
    if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
      return Cy(e, t, o, r, a, i, n);
    if (s) {
      ((s = r.fallback), (o = t.mode), (i = e.child), (a = i.sibling));
      var u = { mode: "hidden", children: r.children };
      return (
        !(o & 1) && t.child !== i
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = u),
            (t.deletions = null))
          : ((r = Bt(i, u)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
        a !== null ? (s = Bt(a, s)) : ((s = cn(s, o, n, null)), (s.flags |= 2)),
        (s.return = t),
        (r.return = t),
        (r.sibling = s),
        (t.child = r),
        (r = s),
        (s = t.child),
        (o = e.child.memoizedState),
        (o =
          o === null
            ? fu(n)
            : {
                baseLanes: o.baseLanes | n,
                cachePool: null,
                transitions: o.transitions,
              }),
        (s.memoizedState = o),
        (s.childLanes = e.childLanes & ~n),
        (t.memoizedState = cu),
        r
      );
    }
    return (
      (s = e.child),
      (e = s.sibling),
      (r = Bt(s, { mode: "visible", children: r.children })),
      !(t.mode & 1) && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function Ol(e, t) {
    return (
      (t = Eo({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Zi(e, t, n, r) {
    return (
      r !== null && _l(r),
      er(t, e.child, null, n),
      (e = Ol(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Cy(e, t, n, r, i, s, o) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = ca(Error(S(422)))), Zi(e, t, o, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((s = r.fallback),
            (i = t.mode),
            (r = Eo({ mode: "visible", children: r.children }, i, 0, null)),
            (s = cn(s, i, o, null)),
            (s.flags |= 2),
            (r.return = t),
            (s.return = t),
            (r.sibling = s),
            (t.child = r),
            t.mode & 1 && er(t, e.child, null, o),
            (t.child.memoizedState = fu(o)),
            (t.memoizedState = cu),
            s);
    if (!(t.mode & 1)) return Zi(e, t, o, null);
    if (i.data === "$!") {
      if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
      return (
        (r = a),
        (s = Error(S(419))),
        (r = ca(s, r, void 0)),
        Zi(e, t, o, r)
      );
    }
    if (((a = (o & e.childLanes) !== 0), ke || a)) {
      if (((r = le), r !== null)) {
        switch (o & -o) {
          case 4:
            i = 2;
            break;
          case 16:
            i = 8;
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
            i = 32;
            break;
          case 536870912:
            i = 268435456;
            break;
          default:
            i = 0;
        }
        ((i = i & (r.suspendedLanes | o) ? 0 : i),
          i !== 0 &&
            i !== s.retryLane &&
            ((s.retryLane = i), Tt(e, i), Je(r, e, i, -1)));
      }
      return (Fl(), (r = ca(Error(S(421)))), Zi(e, t, o, r));
    }
    return i.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = jy.bind(null, e)),
        (i._reactRetry = t),
        null)
      : ((e = s.treeContext),
        (Pe = Ut(i.nextSibling)),
        (De = t),
        (V = !0),
        (Ke = null),
        e !== null &&
          (($e[Fe++] = ht),
          ($e[Fe++] = mt),
          ($e[Fe++] = pn),
          (ht = e.id),
          (mt = e.overflow),
          (pn = t)),
        (t = Ol(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function _f(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), iu(e.return, t, n));
  }
  function fa(e, t, n, r, i) {
    var s = e.memoizedState;
    s === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: i,
        })
      : ((s.isBackwards = t),
        (s.rendering = null),
        (s.renderingStartTime = 0),
        (s.last = r),
        (s.tail = n),
        (s.tailMode = i));
  }
  function $h(e, t, n) {
    var r = t.pendingProps,
      i = r.revealOrder,
      s = r.tail;
    if ((ye(e, t, r.children, n), (r = Y.current), r & 2))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && _f(e, n, t);
          else if (e.tag === 19) _f(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      r &= 1;
    }
    if ((H(Y, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (i) {
        case "forwards":
          for (n = t.child, i = null; n !== null; )
            ((e = n.alternate),
              e !== null && qs(e) === null && (i = n),
              (n = n.sibling));
          ((n = i),
            n === null
              ? ((i = t.child), (t.child = null))
              : ((i = n.sibling), (n.sibling = null)),
            fa(t, !1, i, n, s));
          break;
        case "backwards":
          for (n = null, i = t.child, t.child = null; i !== null; ) {
            if (((e = i.alternate), e !== null && qs(e) === null)) {
              t.child = i;
              break;
            }
            ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
          }
          fa(t, !0, n, null, s);
          break;
        case "together":
          fa(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function ws(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function wt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (mn |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(S(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Bt(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (n = n.sibling = Bt(e, e.pendingProps)),
          (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function Ry(e, t, n) {
    switch (t.tag) {
      case 3:
        (Mh(t), Zn());
        break;
      case 5:
        uh(t);
        break;
      case 1:
        Ne(t.type) && Ws(t);
        break;
      case 4:
        wl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          i = t.memoizedProps.value;
        (H(Ys, r._currentValue), (r._currentValue = i));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (H(Y, Y.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
              ? Ah(e, t, n)
              : (H(Y, Y.current & 1),
                (e = wt(e, t, n)),
                e !== null ? e.sibling : null);
        H(Y, Y.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return $h(e, t, n);
          t.flags |= 128;
        }
        if (
          ((i = t.memoizedState),
          i !== null &&
            ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
          H(Y, Y.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Dh(e, t, n));
    }
    return wt(e, t, n);
  }
  var Fh, du, bh, Uh;
  Fh = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
  };
  du = function () {};
  bh = function (e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
      ((e = t.stateNode), on(at.current));
      var s = null;
      switch (n) {
        case "input":
          ((i = Ma(e, i)), (r = Ma(e, r)), (s = []));
          break;
        case "select":
          ((i = q({}, i, { value: void 0 })),
            (r = q({}, r, { value: void 0 })),
            (s = []));
          break;
        case "textarea":
          ((i = Fa(e, i)), (r = Fa(e, r)), (s = []));
          break;
        default:
          typeof i.onClick != "function" &&
            typeof r.onClick == "function" &&
            (e.onclick = Hs);
      }
      Ua(n, r);
      var o;
      n = null;
      for (l in i)
        if (!r.hasOwnProperty(l) && i.hasOwnProperty(l) && i[l] != null)
          if (l === "style") {
            var a = i[l];
            for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
          } else
            l !== "dangerouslySetInnerHTML" &&
              l !== "children" &&
              l !== "suppressContentEditableWarning" &&
              l !== "suppressHydrationWarning" &&
              l !== "autoFocus" &&
              (ti.hasOwnProperty(l)
                ? s || (s = [])
                : (s = s || []).push(l, null));
      for (l in r) {
        var u = r[l];
        if (
          ((a = i != null ? i[l] : void 0),
          r.hasOwnProperty(l) && u !== a && (u != null || a != null))
        )
          if (l === "style")
            if (a) {
              for (o in a)
                !a.hasOwnProperty(o) ||
                  (u && u.hasOwnProperty(o)) ||
                  (n || (n = {}), (n[o] = ""));
              for (o in u)
                u.hasOwnProperty(o) &&
                  a[o] !== u[o] &&
                  (n || (n = {}), (n[o] = u[o]));
            } else (n || (s || (s = []), s.push(l, n)), (n = u));
          else
            l === "dangerouslySetInnerHTML"
              ? ((u = u ? u.__html : void 0),
                (a = a ? a.__html : void 0),
                u != null && a !== u && (s = s || []).push(l, u))
              : l === "children"
                ? (typeof u != "string" && typeof u != "number") ||
                  (s = s || []).push(l, "" + u)
                : l !== "suppressContentEditableWarning" &&
                  l !== "suppressHydrationWarning" &&
                  (ti.hasOwnProperty(l)
                    ? (u != null && l === "onScroll" && B("scroll", e),
                      s || a === u || (s = []))
                    : (s = s || []).push(l, u));
      }
      n && (s = s || []).push("style", n);
      var l = s;
      (t.updateQueue = l) && (t.flags |= 4);
    }
  };
  Uh = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Mr(e, t) {
    if (!V)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            (n.alternate !== null && (r = n), (n = n.sibling));
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function me(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var i = e.child; i !== null; )
        ((n |= i.lanes | i.childLanes),
          (r |= i.subtreeFlags & 14680064),
          (r |= i.flags & 14680064),
          (i.return = e),
          (i = i.sibling));
    else
      for (i = e.child; i !== null; )
        ((n |= i.lanes | i.childLanes),
          (r |= i.subtreeFlags),
          (r |= i.flags),
          (i.return = e),
          (i = i.sibling));
    return ((e.subtreeFlags |= r), (e.childLanes = n), t);
  }
  function xy(e, t, n) {
    var r = t.pendingProps;
    switch ((gl(t), t.tag)) {
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
        return (me(t), null);
      case 1:
        return (Ne(t.type) && Bs(), me(t), null);
      case 3:
        return (
          (r = t.stateNode),
          tr(),
          W(Ie),
          W(_e),
          Il(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Qi(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), Ke !== null && (Su(Ke), (Ke = null)))),
          du(e, t),
          me(t),
          null
        );
      case 5:
        kl(t);
        var i = on(pi.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (bh(e, t, n, r, i),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(S(166));
            return (me(t), null);
          }
          if (((e = on(at.current)), Qi(t))) {
            ((r = t.stateNode), (n = t.type));
            var s = t.memoizedProps;
            switch (((r[st] = t), (r[fi] = s), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                (B("cancel", r), B("close", r));
                break;
              case "iframe":
              case "object":
              case "embed":
                B("load", r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < jr.length; i++) B(jr[i], r);
                break;
              case "source":
                B("error", r);
                break;
              case "img":
              case "image":
              case "link":
                (B("error", r), B("load", r));
                break;
              case "details":
                B("toggle", r);
                break;
              case "input":
                (Ic(r, s), B("invalid", r));
                break;
              case "select":
                ((r._wrapperState = { wasMultiple: !!s.multiple }),
                  B("invalid", r));
                break;
              case "textarea":
                (Cc(r, s), B("invalid", r));
            }
            (Ua(n, s), (i = null));
            for (var o in s)
              if (s.hasOwnProperty(o)) {
                var a = s[o];
                o === "children"
                  ? typeof a == "string"
                    ? r.textContent !== a &&
                      (s.suppressHydrationWarning !== !0 &&
                        qi(r.textContent, a, e),
                      (i = ["children", a]))
                    : typeof a == "number" &&
                      r.textContent !== "" + a &&
                      (s.suppressHydrationWarning !== !0 &&
                        qi(r.textContent, a, e),
                      (i = ["children", "" + a]))
                  : ti.hasOwnProperty(o) &&
                    a != null &&
                    o === "onScroll" &&
                    B("scroll", r);
              }
            switch (n) {
              case "input":
                (Hi(r), Nc(r, s, !0));
                break;
              case "textarea":
                (Hi(r), Rc(r));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof s.onClick == "function" && (r.onclick = Hs);
            }
            ((r = i), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((o = i.nodeType === 9 ? i : i.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = pp(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = o.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                    ? (e = o.createElement(n, { is: r.is }))
                    : ((e = o.createElement(n)),
                      n === "select" &&
                        ((o = e),
                        r.multiple
                          ? (o.multiple = !0)
                          : r.size && (o.size = r.size)))
                : (e = o.createElementNS(e, n)),
              (e[st] = t),
              (e[fi] = r),
              Fh(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((o = ja(n, r)), n)) {
                case "dialog":
                  (B("cancel", e), B("close", e), (i = r));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (B("load", e), (i = r));
                  break;
                case "video":
                case "audio":
                  for (i = 0; i < jr.length; i++) B(jr[i], e);
                  i = r;
                  break;
                case "source":
                  (B("error", e), (i = r));
                  break;
                case "img":
                case "image":
                case "link":
                  (B("error", e), B("load", e), (i = r));
                  break;
                case "details":
                  (B("toggle", e), (i = r));
                  break;
                case "input":
                  (Ic(e, r), (i = Ma(e, r)), B("invalid", e));
                  break;
                case "option":
                  i = r;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (i = q({}, r, { value: void 0 })),
                    B("invalid", e));
                  break;
                case "textarea":
                  (Cc(e, r), (i = Fa(e, r)), B("invalid", e));
                  break;
                default:
                  i = r;
              }
              (Ua(n, i), (a = i));
              for (s in a)
                if (a.hasOwnProperty(s)) {
                  var u = a[s];
                  s === "style"
                    ? gp(e, u)
                    : s === "dangerouslySetInnerHTML"
                      ? ((u = u ? u.__html : void 0), u != null && hp(e, u))
                      : s === "children"
                        ? typeof u == "string"
                          ? (n !== "textarea" || u !== "") && ni(e, u)
                          : typeof u == "number" && ni(e, "" + u)
                        : s !== "suppressContentEditableWarning" &&
                          s !== "suppressHydrationWarning" &&
                          s !== "autoFocus" &&
                          (ti.hasOwnProperty(s)
                            ? u != null && s === "onScroll" && B("scroll", e)
                            : u != null && tl(e, s, u, o));
                }
              switch (n) {
                case "input":
                  (Hi(e), Nc(e, r, !1));
                  break;
                case "textarea":
                  (Hi(e), Rc(e));
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Gt(r.value));
                  break;
                case "select":
                  ((e.multiple = !!r.multiple),
                    (s = r.value),
                    s != null
                      ? Bn(e, !!r.multiple, s, !1)
                      : r.defaultValue != null &&
                        Bn(e, !!r.multiple, r.defaultValue, !0));
                  break;
                default:
                  typeof i.onClick == "function" && (e.onclick = Hs);
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
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return (me(t), null);
      case 6:
        if (e && t.stateNode != null) Uh(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
          if (((n = on(pi.current)), on(at.current), Qi(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[st] = t),
              (s = r.nodeValue !== n) && ((e = De), e !== null))
            )
              switch (e.tag) {
                case 3:
                  qi(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    qi(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            s && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[st] = t),
              (t.stateNode = r));
        }
        return (me(t), null);
      case 13:
        if (
          (W(Y),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (V && Pe !== null && t.mode & 1 && !(t.flags & 128))
            (rh(), Zn(), (t.flags |= 98560), (s = !1));
          else if (((s = Qi(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!s) throw Error(S(318));
              if (
                ((s = t.memoizedState),
                (s = s !== null ? s.dehydrated : null),
                !s)
              )
                throw Error(S(317));
              s[st] = t;
            } else
              (Zn(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4));
            (me(t), (s = !1));
          } else (Ke !== null && (Su(Ke), (Ke = null)), (s = !0));
          if (!s) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || Y.current & 1 ? oe === 0 && (oe = 3) : Fl())),
            t.updateQueue !== null && (t.flags |= 4),
            me(t),
            null);
      case 4:
        return (
          tr(),
          du(e, t),
          e === null && li(t.stateNode.containerInfo),
          me(t),
          null
        );
      case 10:
        return (Sl(t.type._context), me(t), null);
      case 17:
        return (Ne(t.type) && Bs(), me(t), null);
      case 19:
        if ((W(Y), (s = t.memoizedState), s === null)) return (me(t), null);
        if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
          if (r) Mr(s, !1);
          else {
            if (oe !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((o = qs(e)), o !== null)) {
                  for (
                    t.flags |= 128,
                      Mr(s, !1),
                      r = o.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;
                  )
                    ((s = n),
                      (e = r),
                      (s.flags &= 14680066),
                      (o = s.alternate),
                      o === null
                        ? ((s.childLanes = 0),
                          (s.lanes = e),
                          (s.child = null),
                          (s.subtreeFlags = 0),
                          (s.memoizedProps = null),
                          (s.memoizedState = null),
                          (s.updateQueue = null),
                          (s.dependencies = null),
                          (s.stateNode = null))
                        : ((s.childLanes = o.childLanes),
                          (s.lanes = o.lanes),
                          (s.child = o.child),
                          (s.subtreeFlags = 0),
                          (s.deletions = null),
                          (s.memoizedProps = o.memoizedProps),
                          (s.memoizedState = o.memoizedState),
                          (s.updateQueue = o.updateQueue),
                          (s.type = o.type),
                          (e = o.dependencies),
                          (s.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling));
                  return (H(Y, (Y.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            s.tail !== null &&
              te() > rr &&
              ((t.flags |= 128), (r = !0), Mr(s, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = qs(o)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Mr(s, !0),
                s.tail === null &&
                  s.tailMode === "hidden" &&
                  !o.alternate &&
                  !V)
              )
                return (me(t), null);
            } else
              2 * te() - s.renderingStartTime > rr &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), Mr(s, !1), (t.lanes = 4194304));
          s.isBackwards
            ? ((o.sibling = t.child), (t.child = o))
            : ((n = s.last),
              n !== null ? (n.sibling = o) : (t.child = o),
              (s.last = o));
        }
        return s.tail !== null
          ? ((t = s.tail),
            (s.rendering = t),
            (s.tail = t.sibling),
            (s.renderingStartTime = te()),
            (t.sibling = null),
            (n = Y.current),
            H(Y, r ? (n & 1) | 2 : n & 1),
            t)
          : (me(t), null);
      case 22:
      case 23:
        return (
          $l(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? xe & 1073741824 &&
              (me(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : me(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(S(156, t.tag));
  }
  function Py(e, t) {
    switch ((gl(t), t.tag)) {
      case 1:
        return (
          Ne(t.type) && Bs(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          tr(),
          W(Ie),
          W(_e),
          Il(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (kl(t), null);
      case 13:
        if (
          (W(Y), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(S(340));
          Zn();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (W(Y), null);
      case 4:
        return (tr(), null);
      case 10:
        return (Sl(t.type._context), null);
      case 22:
      case 23:
        return ($l(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var es = !1,
    ge = !1,
    Oy = typeof WeakSet == "function" ? WeakSet : Set,
    T = null;
  function Un(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          J(e, t, r);
        }
      else n.current = null;
  }
  function pu(e, t, n) {
    try {
      n();
    } catch (r) {
      J(e, t, r);
    }
  }
  var yf = !1;
  function Dy(e, t) {
    if (((qa = Us), (e = Wp()), hl(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var i = r.anchorOffset,
              s = r.focusNode;
            r = r.focusOffset;
            try {
              (n.nodeType, s.nodeType);
            } catch {
              n = null;
              break e;
            }
            var o = 0,
              a = -1,
              u = -1,
              l = 0,
              c = 0,
              f = e,
              d = null;
            t: for (;;) {
              for (
                var m;
                f !== n || (i !== 0 && f.nodeType !== 3) || (a = o + i),
                  f !== s || (r !== 0 && f.nodeType !== 3) || (u = o + r),
                  f.nodeType === 3 && (o += f.nodeValue.length),
                  (m = f.firstChild) !== null;
              )
                ((d = f), (f = m));
              for (;;) {
                if (f === e) break t;
                if (
                  (d === n && ++l === i && (a = o),
                  d === s && ++c === r && (u = o),
                  (m = f.nextSibling) !== null)
                )
                  break;
                ((f = d), (d = f.parentNode));
              }
              f = m;
            }
            n = a === -1 || u === -1 ? null : { start: a, end: u };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Qa = { focusedElem: e, selectionRange: n }, Us = !1, T = t;
      T !== null;
    )
      if (((t = T), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (T = e));
      else
        for (; T !== null; ) {
          t = T;
          try {
            var _ = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (_ !== null) {
                    var y = _.memoizedProps,
                      C = _.memoizedState,
                      h = t.stateNode,
                      p = h.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? y : Ve(t.type, y),
                        C,
                      );
                    h.__reactInternalSnapshotBeforeUpdate = p;
                  }
                  break;
                case 3:
                  var g = t.stateNode.containerInfo;
                  g.nodeType === 1
                    ? (g.textContent = "")
                    : g.nodeType === 9 &&
                      g.documentElement &&
                      g.removeChild(g.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(S(163));
              }
          } catch (v) {
            J(t, t.return, v);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (T = e));
            break;
          }
          T = t.return;
        }
    return ((_ = yf), (yf = !1), _);
  }
  function Xr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var i = (r = r.next);
      do {
        if ((i.tag & e) === e) {
          var s = i.destroy;
          ((i.destroy = void 0), s !== void 0 && pu(t, n, s));
        }
        i = i.next;
      } while (i !== r);
    }
  }
  function vo(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function hu(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function jh(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), jh(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[st],
          delete t[fi],
          delete t[eu],
          delete t[hy],
          delete t[my])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function zh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function vf(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || zh(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function mu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = Hs)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (mu(e, t, n), e = e.sibling; e !== null; )
        (mu(e, t, n), (e = e.sibling));
  }
  function gu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (gu(e, t, n), e = e.sibling; e !== null; )
        (gu(e, t, n), (e = e.sibling));
  }
  var ce = null,
    Ye = !1;
  function Nt(e, t, n) {
    for (n = n.child; n !== null; ) (Hh(e, t, n), (n = n.sibling));
  }
  function Hh(e, t, n) {
    if (ot && typeof ot.onCommitFiberUnmount == "function")
      try {
        ot.onCommitFiberUnmount(co, n);
      } catch {}
    switch (n.tag) {
      case 5:
        ge || Un(n, t);
      case 6:
        var r = ce,
          i = Ye;
        ((ce = null),
          Nt(e, t, n),
          (ce = r),
          (Ye = i),
          ce !== null &&
            (Ye
              ? ((e = ce),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : ce.removeChild(n.stateNode)));
        break;
      case 18:
        ce !== null &&
          (Ye
            ? ((e = ce),
              (n = n.stateNode),
              e.nodeType === 8
                ? ia(e.parentNode, n)
                : e.nodeType === 1 && ia(e, n),
              oi(e))
            : ia(ce, n.stateNode));
        break;
      case 4:
        ((r = ce),
          (i = Ye),
          (ce = n.stateNode.containerInfo),
          (Ye = !0),
          Nt(e, t, n),
          (ce = r),
          (Ye = i));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !ge &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          i = r = r.next;
          do {
            var s = i,
              o = s.destroy;
            ((s = s.tag),
              o !== void 0 && (s & 2 || s & 4) && pu(n, t, o),
              (i = i.next));
          } while (i !== r);
        }
        Nt(e, t, n);
        break;
      case 1:
        if (
          !ge &&
          (Un(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            ((r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount());
          } catch (a) {
            J(n, t, a);
          }
        Nt(e, t, n);
        break;
      case 21:
        Nt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((ge = (r = ge) || n.memoizedState !== null), Nt(e, t, n), (ge = r))
          : Nt(e, t, n);
        break;
      default:
        Nt(e, t, n);
    }
  }
  function Sf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new Oy()),
        t.forEach(function (r) {
          var i = zy.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(i, i));
        }));
    }
  }
  function Ge(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        try {
          var s = e,
            o = t,
            a = o;
          e: for (; a !== null; ) {
            switch (a.tag) {
              case 5:
                ((ce = a.stateNode), (Ye = !1));
                break e;
              case 3:
                ((ce = a.stateNode.containerInfo), (Ye = !0));
                break e;
              case 4:
                ((ce = a.stateNode.containerInfo), (Ye = !0));
                break e;
            }
            a = a.return;
          }
          if (ce === null) throw Error(S(160));
          (Hh(s, o, i), (ce = null), (Ye = !1));
          var u = i.alternate;
          (u !== null && (u.return = null), (i.return = null));
        } catch (l) {
          J(i, t, l);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) (Bh(t, e), (t = t.sibling));
  }
  function Bh(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Ge(t, e), tt(e), r & 4)) {
          try {
            (Xr(3, e, e.return), vo(3, e));
          } catch (y) {
            J(e, e.return, y);
          }
          try {
            Xr(5, e, e.return);
          } catch (y) {
            J(e, e.return, y);
          }
        }
        break;
      case 1:
        (Ge(t, e), tt(e), r & 512 && n !== null && Un(n, n.return));
        break;
      case 5:
        if (
          (Ge(t, e),
          tt(e),
          r & 512 && n !== null && Un(n, n.return),
          e.flags & 32)
        ) {
          var i = e.stateNode;
          try {
            ni(i, "");
          } catch (y) {
            J(e, e.return, y);
          }
        }
        if (r & 4 && ((i = e.stateNode), i != null)) {
          var s = e.memoizedProps,
            o = n !== null ? n.memoizedProps : s,
            a = e.type,
            u = e.updateQueue;
          if (((e.updateQueue = null), u !== null))
            try {
              (a === "input" &&
                s.type === "radio" &&
                s.name != null &&
                fp(i, s),
                ja(a, o));
              var l = ja(a, s);
              for (o = 0; o < u.length; o += 2) {
                var c = u[o],
                  f = u[o + 1];
                c === "style"
                  ? gp(i, f)
                  : c === "dangerouslySetInnerHTML"
                    ? hp(i, f)
                    : c === "children"
                      ? ni(i, f)
                      : tl(i, c, f, l);
              }
              switch (a) {
                case "input":
                  Aa(i, s);
                  break;
                case "textarea":
                  dp(i, s);
                  break;
                case "select":
                  var d = i._wrapperState.wasMultiple;
                  i._wrapperState.wasMultiple = !!s.multiple;
                  var m = s.value;
                  m != null
                    ? Bn(i, !!s.multiple, m, !1)
                    : d !== !!s.multiple &&
                      (s.defaultValue != null
                        ? Bn(i, !!s.multiple, s.defaultValue, !0)
                        : Bn(i, !!s.multiple, s.multiple ? [] : "", !1));
              }
              i[fi] = s;
            } catch (y) {
              J(e, e.return, y);
            }
        }
        break;
      case 6:
        if ((Ge(t, e), tt(e), r & 4)) {
          if (e.stateNode === null) throw Error(S(162));
          ((i = e.stateNode), (s = e.memoizedProps));
          try {
            i.nodeValue = s;
          } catch (y) {
            J(e, e.return, y);
          }
        }
        break;
      case 3:
        if (
          (Ge(t, e), tt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            oi(t.containerInfo);
          } catch (y) {
            J(e, e.return, y);
          }
        break;
      case 4:
        (Ge(t, e), tt(e));
        break;
      case 13:
        (Ge(t, e),
          tt(e),
          (i = e.child),
          i.flags & 8192 &&
            ((s = i.memoizedState !== null),
            (i.stateNode.isHidden = s),
            !s ||
              (i.alternate !== null && i.alternate.memoizedState !== null) ||
              (Ml = te())),
          r & 4 && Sf(e));
        break;
      case 22:
        if (
          ((c = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((ge = (l = ge) || c), Ge(t, e), (ge = l)) : Ge(t, e),
          tt(e),
          r & 8192)
        ) {
          if (
            ((l = e.memoizedState !== null),
            (e.stateNode.isHidden = l) && !c && e.mode & 1)
          )
            for (T = e, c = e.child; c !== null; ) {
              for (f = T = c; T !== null; ) {
                switch (((d = T), (m = d.child), d.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Xr(4, d, d.return);
                    break;
                  case 1:
                    Un(d, d.return);
                    var _ = d.stateNode;
                    if (typeof _.componentWillUnmount == "function") {
                      ((r = d), (n = d.return));
                      try {
                        ((t = r),
                          (_.props = t.memoizedProps),
                          (_.state = t.memoizedState),
                          _.componentWillUnmount());
                      } catch (y) {
                        J(r, n, y);
                      }
                    }
                    break;
                  case 5:
                    Un(d, d.return);
                    break;
                  case 22:
                    if (d.memoizedState !== null) {
                      Tf(f);
                      continue;
                    }
                }
                m !== null ? ((m.return = d), (T = m)) : Tf(f);
              }
              c = c.sibling;
            }
          e: for (c = null, f = e; ; ) {
            if (f.tag === 5) {
              if (c === null) {
                c = f;
                try {
                  ((i = f.stateNode),
                    l
                      ? ((s = i.style),
                        typeof s.setProperty == "function"
                          ? s.setProperty("display", "none", "important")
                          : (s.display = "none"))
                      : ((a = f.stateNode),
                        (u = f.memoizedProps.style),
                        (o =
                          u != null && u.hasOwnProperty("display")
                            ? u.display
                            : null),
                        (a.style.display = mp("display", o))));
                } catch (y) {
                  J(e, e.return, y);
                }
              }
            } else if (f.tag === 6) {
              if (c === null)
                try {
                  f.stateNode.nodeValue = l ? "" : f.memoizedProps;
                } catch (y) {
                  J(e, e.return, y);
                }
            } else if (
              ((f.tag !== 22 && f.tag !== 23) ||
                f.memoizedState === null ||
                f === e) &&
              f.child !== null
            ) {
              ((f.child.return = f), (f = f.child));
              continue;
            }
            if (f === e) break e;
            for (; f.sibling === null; ) {
              if (f.return === null || f.return === e) break e;
              (c === f && (c = null), (f = f.return));
            }
            (c === f && (c = null),
              (f.sibling.return = f.return),
              (f = f.sibling));
          }
        }
        break;
      case 19:
        (Ge(t, e), tt(e), r & 4 && Sf(e));
        break;
      case 21:
        break;
      default:
        (Ge(t, e), tt(e));
    }
  }
  function tt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (zh(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(S(160));
        }
        switch (r.tag) {
          case 5:
            var i = r.stateNode;
            r.flags & 32 && (ni(i, ""), (r.flags &= -33));
            var s = vf(e);
            gu(e, s, i);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo,
              a = vf(e);
            mu(e, a, o);
            break;
          default:
            throw Error(S(161));
        }
      } catch (u) {
        J(e, e.return, u);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Ly(e, t, n) {
    ((T = e), Wh(e));
  }
  function Wh(e, t, n) {
    for (var r = (e.mode & 1) !== 0; T !== null; ) {
      var i = T,
        s = i.child;
      if (i.tag === 22 && r) {
        var o = i.memoizedState !== null || es;
        if (!o) {
          var a = i.alternate,
            u = (a !== null && a.memoizedState !== null) || ge;
          a = es;
          var l = ge;
          if (((es = o), (ge = u) && !l))
            for (T = i; T !== null; )
              ((o = T),
                (u = o.child),
                o.tag === 22 && o.memoizedState !== null
                  ? wf(i)
                  : u !== null
                    ? ((u.return = o), (T = u))
                    : wf(i));
          for (; s !== null; ) ((T = s), Wh(s), (s = s.sibling));
          ((T = i), (es = a), (ge = l));
        }
        Ef(e);
      } else
        i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (T = s)) : Ef(e);
    }
  }
  function Ef(e) {
    for (; T !== null; ) {
      var t = T;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                ge || vo(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !ge)
                  if (n === null) r.componentDidMount();
                  else {
                    var i =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : Ve(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      i,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var s = t.updateQueue;
                s !== null && sf(t, s, r);
                break;
              case 3:
                var o = t.updateQueue;
                if (o !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  sf(t, o, n);
                }
                break;
              case 5:
                var a = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = a;
                  var u = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      u.autoFocus && n.focus();
                      break;
                    case "img":
                      u.src && (n.src = u.src);
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
                  var l = t.alternate;
                  if (l !== null) {
                    var c = l.memoizedState;
                    if (c !== null) {
                      var f = c.dehydrated;
                      f !== null && oi(f);
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
                throw Error(S(163));
            }
          ge || (t.flags & 512 && hu(t));
        } catch (d) {
          J(t, t.return, d);
        }
      }
      if (t === e) {
        T = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (T = n));
        break;
      }
      T = t.return;
    }
  }
  function Tf(e) {
    for (; T !== null; ) {
      var t = T;
      if (t === e) {
        T = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (T = n));
        break;
      }
      T = t.return;
    }
  }
  function wf(e) {
    for (; T !== null; ) {
      var t = T;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              vo(4, t);
            } catch (u) {
              J(t, n, u);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var i = t.return;
              try {
                r.componentDidMount();
              } catch (u) {
                J(t, i, u);
              }
            }
            var s = t.return;
            try {
              hu(t);
            } catch (u) {
              J(t, s, u);
            }
            break;
          case 5:
            var o = t.return;
            try {
              hu(t);
            } catch (u) {
              J(t, o, u);
            }
        }
      } catch (u) {
        J(t, t.return, u);
      }
      if (t === e) {
        T = null;
        break;
      }
      var a = t.sibling;
      if (a !== null) {
        ((a.return = t.return), (T = a));
        break;
      }
      T = t.return;
    }
  }
  var My = Math.ceil,
    Zs = kt.ReactCurrentDispatcher,
    Dl = kt.ReactCurrentOwner,
    Ue = kt.ReactCurrentBatchConfig,
    F = 0,
    le = null,
    ne = null,
    fe = 0,
    xe = 0,
    jn = qt(0),
    oe = 0,
    _i = null,
    mn = 0,
    So = 0,
    Ll = 0,
    qr = null,
    we = null,
    Ml = 0,
    rr = 1 / 0,
    lt = null,
    eo = !1,
    _u = null,
    zt = null,
    ts = !1,
    Mt = null,
    to = 0,
    Qr = 0,
    yu = null,
    ks = -1,
    Is = 0;
  function Se() {
    return F & 6 ? te() : ks !== -1 ? ks : (ks = te());
  }
  function Ht(e) {
    return e.mode & 1
      ? F & 2 && fe !== 0
        ? fe & -fe
        : _y.transition !== null
          ? (Is === 0 && (Is = Rp()), Is)
          : ((e = U),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : Ap(e.type))),
            e)
      : 1;
  }
  function Je(e, t, n, r) {
    if (50 < Qr) throw ((Qr = 0), (yu = null), Error(S(185)));
    (Ti(e, n, r),
      (!(F & 2) || e !== le) &&
        (e === le && (!(F & 2) && (So |= n), oe === 4 && Dt(e, fe)),
        Ce(e, r),
        n === 1 &&
          F === 0 &&
          !(t.mode & 1) &&
          ((rr = te() + 500), go && Qt())));
  }
  function Ce(e, t) {
    var n = e.callbackNode;
    __(e, t);
    var r = bs(e, e === le ? fe : 0);
    if (r === 0)
      (n !== null && Oc(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && Oc(n), t === 1))
        (e.tag === 0 ? gy(kf.bind(null, e)) : eh(kf.bind(null, e)),
          dy(function () {
            !(F & 6) && Qt();
          }),
          (n = null));
      else {
        switch (xp(r)) {
          case 1:
            n = ol;
            break;
          case 4:
            n = Np;
            break;
          case 16:
            n = Fs;
            break;
          case 536870912:
            n = Cp;
            break;
          default:
            n = Fs;
        }
        n = Jh(n, Gh.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function Gh(e, t) {
    if (((ks = -1), (Is = 0), F & 6)) throw Error(S(327));
    var n = e.callbackNode;
    if (Kn() && e.callbackNode !== n) return null;
    var r = bs(e, e === le ? fe : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = no(e, r);
    else {
      t = r;
      var i = F;
      F |= 2;
      var s = Yh();
      (le !== e || fe !== t) && ((lt = null), (rr = te() + 500), ln(e, t));
      do
        try {
          Fy();
          break;
        } catch (a) {
          Vh(e, a);
        }
      while (!0);
      (vl(),
        (Zs.current = s),
        (F = i),
        ne !== null ? (t = 0) : ((le = null), (fe = 0), (t = oe)));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((i = Ga(e)), i !== 0 && ((r = i), (t = vu(e, i)))),
        t === 1)
      )
        throw ((n = _i), ln(e, 0), Dt(e, r), Ce(e, te()), n);
      if (t === 6) Dt(e, r);
      else {
        if (
          ((i = e.current.alternate),
          !(r & 30) &&
            !Ay(i) &&
            ((t = no(e, r)),
            t === 2 && ((s = Ga(e)), s !== 0 && ((r = s), (t = vu(e, s)))),
            t === 1))
        )
          throw ((n = _i), ln(e, 0), Dt(e, r), Ce(e, te()), n);
        switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(S(345));
          case 2:
            tn(e, we, lt);
            break;
          case 3:
            if (
              (Dt(e, r),
              (r & 130023424) === r && ((t = Ml + 500 - te()), 10 < t))
            ) {
              if (bs(e, 0) !== 0) break;
              if (((i = e.suspendedLanes), (i & r) !== r)) {
                (Se(), (e.pingedLanes |= e.suspendedLanes & i));
                break;
              }
              e.timeoutHandle = Za(tn.bind(null, e, we, lt), t);
              break;
            }
            tn(e, we, lt);
            break;
          case 4:
            if ((Dt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, i = -1; 0 < r; ) {
              var o = 31 - Qe(r);
              ((s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s));
            }
            if (
              ((r = i),
              (r = te() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                    ? 480
                    : 1080 > r
                      ? 1080
                      : 1920 > r
                        ? 1920
                        : 3e3 > r
                          ? 3e3
                          : 4320 > r
                            ? 4320
                            : 1960 * My(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Za(tn.bind(null, e, we, lt), r);
              break;
            }
            tn(e, we, lt);
            break;
          case 5:
            tn(e, we, lt);
            break;
          default:
            throw Error(S(329));
        }
      }
    }
    return (Ce(e, te()), e.callbackNode === n ? Gh.bind(null, e) : null);
  }
  function vu(e, t) {
    var n = qr;
    return (
      e.current.memoizedState.isDehydrated && (ln(e, t).flags |= 256),
      (e = no(e, t)),
      e !== 2 && ((t = we), (we = n), t !== null && Su(t)),
      e
    );
  }
  function Su(e) {
    we === null ? (we = e) : we.push.apply(we, e);
  }
  function Ay(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              s = i.getSnapshot;
            i = i.value;
            try {
              if (!et(s(), i)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        ((n.return = t), (t = n));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function Dt(e, t) {
    for (
      t &= ~Ll,
        t &= ~So,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - Qe(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function kf(e) {
    if (F & 6) throw Error(S(327));
    Kn();
    var t = bs(e, 0);
    if (!(t & 1)) return (Ce(e, te()), null);
    var n = no(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Ga(e);
      r !== 0 && ((t = r), (n = vu(e, r)));
    }
    if (n === 1) throw ((n = _i), ln(e, 0), Dt(e, t), Ce(e, te()), n);
    if (n === 6) throw Error(S(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      tn(e, we, lt),
      Ce(e, te()),
      null
    );
  }
  function Al(e, t) {
    var n = F;
    F |= 1;
    try {
      return e(t);
    } finally {
      ((F = n), F === 0 && ((rr = te() + 500), go && Qt()));
    }
  }
  function gn(e) {
    Mt !== null && Mt.tag === 0 && !(F & 6) && Kn();
    var t = F;
    F |= 1;
    var n = Ue.transition,
      r = U;
    try {
      if (((Ue.transition = null), (U = 1), e)) return e();
    } finally {
      ((U = r), (Ue.transition = n), (F = t), !(F & 6) && Qt());
    }
  }
  function $l() {
    ((xe = jn.current), W(jn));
  }
  function ln(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), fy(n)), ne !== null))
      for (n = ne.return; n !== null; ) {
        var r = n;
        switch ((gl(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && Bs());
            break;
          case 3:
            (tr(), W(Ie), W(_e), Il());
            break;
          case 5:
            kl(r);
            break;
          case 4:
            tr();
            break;
          case 13:
            W(Y);
            break;
          case 19:
            W(Y);
            break;
          case 10:
            Sl(r.type._context);
            break;
          case 22:
          case 23:
            $l();
        }
        n = n.return;
      }
    if (
      ((le = e),
      (ne = e = Bt(e.current, null)),
      (fe = xe = t),
      (oe = 0),
      (_i = null),
      (Ll = So = mn = 0),
      (we = qr = null),
      sn !== null)
    ) {
      for (t = 0; t < sn.length; t++)
        if (((n = sn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var i = r.next,
            s = n.pending;
          if (s !== null) {
            var o = s.next;
            ((s.next = i), (r.next = o));
          }
          n.pending = r;
        }
      sn = null;
    }
    return e;
  }
  function Vh(e, t) {
    do {
      var n = ne;
      try {
        if ((vl(), (Es.current = Js), Qs)) {
          for (var r = K.memoizedState; r !== null; ) {
            var i = r.queue;
            (i !== null && (i.pending = null), (r = r.next));
          }
          Qs = !1;
        }
        if (
          ((hn = 0),
          (ue = re = K = null),
          (Kr = !1),
          (hi = 0),
          (Dl.current = null),
          n === null || n.return === null)
        ) {
          ((oe = 1), (_i = t), (ne = null));
          break;
        }
        e: {
          var s = e,
            o = n.return,
            a = n,
            u = t;
          if (
            ((t = fe),
            (a.flags |= 32768),
            u !== null && typeof u == "object" && typeof u.then == "function")
          ) {
            var l = u,
              c = a,
              f = c.tag;
            if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
              var d = c.alternate;
              d
                ? ((c.updateQueue = d.updateQueue),
                  (c.memoizedState = d.memoizedState),
                  (c.lanes = d.lanes))
                : ((c.updateQueue = null), (c.memoizedState = null));
            }
            var m = ff(o);
            if (m !== null) {
              ((m.flags &= -257),
                df(m, o, a, s, t),
                m.mode & 1 && cf(s, l, t),
                (t = m),
                (u = l));
              var _ = t.updateQueue;
              if (_ === null) {
                var y = new Set();
                (y.add(u), (t.updateQueue = y));
              } else _.add(u);
              break e;
            } else {
              if (!(t & 1)) {
                (cf(s, l, t), Fl());
                break e;
              }
              u = Error(S(426));
            }
          } else if (V && a.mode & 1) {
            var C = ff(o);
            if (C !== null) {
              (!(C.flags & 65536) && (C.flags |= 256),
                df(C, o, a, s, t),
                _l(nr(u, a)));
              break e;
            }
          }
          ((s = u = nr(u, a)),
            oe !== 4 && (oe = 2),
            qr === null ? (qr = [s]) : qr.push(s),
            (s = o));
          do {
            switch (s.tag) {
              case 3:
                ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
                var h = xh(s, u, t);
                rf(s, h);
                break e;
              case 1:
                a = u;
                var p = s.type,
                  g = s.stateNode;
                if (
                  !(s.flags & 128) &&
                  (typeof p.getDerivedStateFromError == "function" ||
                    (g !== null &&
                      typeof g.componentDidCatch == "function" &&
                      (zt === null || !zt.has(g))))
                ) {
                  ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
                  var v = Ph(s, a, t);
                  rf(s, v);
                  break e;
                }
            }
            s = s.return;
          } while (s !== null);
        }
        Xh(n);
      } catch (E) {
        ((t = E), ne === n && n !== null && (ne = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function Yh() {
    var e = Zs.current;
    return ((Zs.current = Js), e === null ? Js : e);
  }
  function Fl() {
    ((oe === 0 || oe === 3 || oe === 2) && (oe = 4),
      le === null || (!(mn & 268435455) && !(So & 268435455)) || Dt(le, fe));
  }
  function no(e, t) {
    var n = F;
    F |= 2;
    var r = Yh();
    (le !== e || fe !== t) && ((lt = null), ln(e, t));
    do
      try {
        $y();
        break;
      } catch (i) {
        Vh(e, i);
      }
    while (!0);
    if ((vl(), (F = n), (Zs.current = r), ne !== null)) throw Error(S(261));
    return ((le = null), (fe = 0), oe);
  }
  function $y() {
    for (; ne !== null; ) Kh(ne);
  }
  function Fy() {
    for (; ne !== null && !u_(); ) Kh(ne);
  }
  function Kh(e) {
    var t = Qh(e.alternate, e, xe);
    ((e.memoizedProps = e.pendingProps),
      t === null ? Xh(e) : (ne = t),
      (Dl.current = null));
  }
  function Xh(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = Py(n, t)), n !== null)) {
          ((n.flags &= 32767), (ne = n));
          return;
        }
        if (e !== null)
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((oe = 6), (ne = null));
          return;
        }
      } else if (((n = xy(n, t, xe)), n !== null)) {
        ne = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        ne = t;
        return;
      }
      ne = t = e;
    } while (t !== null);
    oe === 0 && (oe = 5);
  }
  function tn(e, t, n) {
    var r = U,
      i = Ue.transition;
    try {
      ((Ue.transition = null), (U = 1), by(e, t, n, r));
    } finally {
      ((Ue.transition = i), (U = r));
    }
    return null;
  }
  function by(e, t, n, r) {
    do Kn();
    while (Mt !== null);
    if (F & 6) throw Error(S(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(S(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var s = n.lanes | n.childLanes;
    if (
      (y_(e, s),
      e === le && ((ne = le = null), (fe = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        ts ||
        ((ts = !0),
        Jh(Fs, function () {
          return (Kn(), null);
        })),
      (s = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || s)
    ) {
      ((s = Ue.transition), (Ue.transition = null));
      var o = U;
      U = 1;
      var a = F;
      ((F |= 4),
        (Dl.current = null),
        Dy(e, n),
        Bh(n, e),
        iy(Qa),
        (Us = !!qa),
        (Qa = qa = null),
        (e.current = n),
        Ly(n),
        l_(),
        (F = a),
        (U = o),
        (Ue.transition = s));
    } else e.current = n;
    if (
      (ts && ((ts = !1), (Mt = e), (to = i)),
      (s = e.pendingLanes),
      s === 0 && (zt = null),
      d_(n.stateNode),
      Ce(e, te()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest }));
    if (eo) throw ((eo = !1), (e = _u), (_u = null), e);
    return (
      to & 1 && e.tag !== 0 && Kn(),
      (s = e.pendingLanes),
      s & 1 ? (e === yu ? Qr++ : ((Qr = 0), (yu = e))) : (Qr = 0),
      Qt(),
      null
    );
  }
  function Kn() {
    if (Mt !== null) {
      var e = xp(to),
        t = Ue.transition,
        n = U;
      try {
        if (((Ue.transition = null), (U = 16 > e ? 16 : e), Mt === null))
          var r = !1;
        else {
          if (((e = Mt), (Mt = null), (to = 0), F & 6)) throw Error(S(331));
          var i = F;
          for (F |= 4, T = e.current; T !== null; ) {
            var s = T,
              o = s.child;
            if (T.flags & 16) {
              var a = s.deletions;
              if (a !== null) {
                for (var u = 0; u < a.length; u++) {
                  var l = a[u];
                  for (T = l; T !== null; ) {
                    var c = T;
                    switch (c.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Xr(8, c, s);
                    }
                    var f = c.child;
                    if (f !== null) ((f.return = c), (T = f));
                    else
                      for (; T !== null; ) {
                        c = T;
                        var d = c.sibling,
                          m = c.return;
                        if ((jh(c), c === l)) {
                          T = null;
                          break;
                        }
                        if (d !== null) {
                          ((d.return = m), (T = d));
                          break;
                        }
                        T = m;
                      }
                  }
                }
                var _ = s.alternate;
                if (_ !== null) {
                  var y = _.child;
                  if (y !== null) {
                    _.child = null;
                    do {
                      var C = y.sibling;
                      ((y.sibling = null), (y = C));
                    } while (y !== null);
                  }
                }
                T = s;
              }
            }
            if (s.subtreeFlags & 2064 && o !== null) ((o.return = s), (T = o));
            else
              e: for (; T !== null; ) {
                if (((s = T), s.flags & 2048))
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xr(9, s, s.return);
                  }
                var h = s.sibling;
                if (h !== null) {
                  ((h.return = s.return), (T = h));
                  break e;
                }
                T = s.return;
              }
          }
          var p = e.current;
          for (T = p; T !== null; ) {
            o = T;
            var g = o.child;
            if (o.subtreeFlags & 2064 && g !== null) ((g.return = o), (T = g));
            else
              e: for (o = p; T !== null; ) {
                if (((a = T), a.flags & 2048))
                  try {
                    switch (a.tag) {
                      case 0:
                      case 11:
                      case 15:
                        vo(9, a);
                    }
                  } catch (E) {
                    J(a, a.return, E);
                  }
                if (a === o) {
                  T = null;
                  break e;
                }
                var v = a.sibling;
                if (v !== null) {
                  ((v.return = a.return), (T = v));
                  break e;
                }
                T = a.return;
              }
          }
          if (
            ((F = i), Qt(), ot && typeof ot.onPostCommitFiberRoot == "function")
          )
            try {
              ot.onPostCommitFiberRoot(co, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((U = n), (Ue.transition = t));
      }
    }
    return !1;
  }
  function If(e, t, n) {
    ((t = nr(n, t)),
      (t = xh(e, t, 1)),
      (e = jt(e, t, 1)),
      (t = Se()),
      e !== null && (Ti(e, 1, t), Ce(e, t)));
  }
  function J(e, t, n) {
    if (e.tag === 3) If(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          If(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (zt === null || !zt.has(r)))
          ) {
            ((e = nr(n, e)),
              (e = Ph(t, e, 1)),
              (t = jt(t, e, 1)),
              (e = Se()),
              t !== null && (Ti(t, 1, e), Ce(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Uy(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = Se()),
      (e.pingedLanes |= e.suspendedLanes & n),
      le === e &&
        (fe & n) === n &&
        (oe === 4 || (oe === 3 && (fe & 130023424) === fe && 500 > te() - Ml)
          ? ln(e, 0)
          : (Ll |= n)),
      Ce(e, t));
  }
  function qh(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = Gi), (Gi <<= 1), !(Gi & 130023424) && (Gi = 4194304))
        : (t = 1));
    var n = Se();
    ((e = Tt(e, t)), e !== null && (Ti(e, t, n), Ce(e, n)));
  }
  function jy(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), qh(e, n));
  }
  function zy(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(S(314));
    }
    (r !== null && r.delete(t), qh(e, n));
  }
  var Qh;
  Qh = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Ie.current) ke = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return ((ke = !1), Ry(e, t, n));
        ke = !!(e.flags & 131072);
      }
    else ((ke = !1), V && t.flags & 1048576 && th(t, Vs, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (ws(e, t), (e = t.pendingProps));
        var i = Jn(t, _e.current);
        (Yn(t, n), (i = Cl(null, t, r, e, i, n)));
        var s = Rl();
        return (
          (t.flags |= 1),
          typeof i == "object" &&
          i !== null &&
          typeof i.render == "function" &&
          i.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Ne(r) ? ((s = !0), Ws(t)) : (s = !1),
              (t.memoizedState =
                i.state !== null && i.state !== void 0 ? i.state : null),
              Tl(t),
              (i.updater = yo),
              (t.stateNode = i),
              (i._reactInternals = t),
              ou(t, r, e, n),
              (t = lu(null, t, r, !0, s, n)))
            : ((t.tag = 0), V && s && ml(t), ye(null, t, i, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (ws(e, t),
            (e = t.pendingProps),
            (i = r._init),
            (r = i(r._payload)),
            (t.type = r),
            (i = t.tag = By(r)),
            (e = Ve(r, e)),
            i)
          ) {
            case 0:
              t = uu(null, t, r, e, n);
              break e;
            case 1:
              t = mf(null, t, r, e, n);
              break e;
            case 11:
              t = pf(null, t, r, e, n);
              break e;
            case 14:
              t = hf(null, t, r, Ve(r.type, e), n);
              break e;
          }
          throw Error(S(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : Ve(r, i)),
          uu(e, t, r, i, n)
        );
      case 1:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : Ve(r, i)),
          mf(e, t, r, i, n)
        );
      case 3:
        e: {
          if ((Mh(t), e === null)) throw Error(S(387));
          ((r = t.pendingProps),
            (s = t.memoizedState),
            (i = s.element),
            ah(e, t),
            Xs(t, r, null, n));
          var o = t.memoizedState;
          if (((r = o.element), s.isDehydrated))
            if (
              ((s = {
                element: r,
                isDehydrated: !1,
                cache: o.cache,
                pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                transitions: o.transitions,
              }),
              (t.updateQueue.baseState = s),
              (t.memoizedState = s),
              t.flags & 256)
            ) {
              ((i = nr(Error(S(423)), t)), (t = gf(e, t, r, n, i)));
              break e;
            } else if (r !== i) {
              ((i = nr(Error(S(424)), t)), (t = gf(e, t, r, n, i)));
              break e;
            } else
              for (
                Pe = Ut(t.stateNode.containerInfo.firstChild),
                  De = t,
                  V = !0,
                  Ke = null,
                  n = sh(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((Zn(), r === i)) {
              t = wt(e, t, n);
              break e;
            }
            ye(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          uh(t),
          e === null && ru(t),
          (r = t.type),
          (i = t.pendingProps),
          (s = e !== null ? e.memoizedProps : null),
          (o = i.children),
          Ja(r, i) ? (o = null) : s !== null && Ja(r, s) && (t.flags |= 32),
          Lh(e, t),
          ye(e, t, o, n),
          t.child
        );
      case 6:
        return (e === null && ru(t), null);
      case 13:
        return Ah(e, t, n);
      case 4:
        return (
          wl(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = er(t, null, r, n)) : ye(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : Ve(r, i)),
          pf(e, t, r, i, n)
        );
      case 7:
        return (ye(e, t, t.pendingProps, n), t.child);
      case 8:
        return (ye(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (ye(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (i = t.pendingProps),
            (s = t.memoizedProps),
            (o = i.value),
            H(Ys, r._currentValue),
            (r._currentValue = o),
            s !== null)
          )
            if (et(s.value, o)) {
              if (s.children === i.children && !Ie.current) {
                t = wt(e, t, n);
                break e;
              }
            } else
              for (s = t.child, s !== null && (s.return = t); s !== null; ) {
                var a = s.dependencies;
                if (a !== null) {
                  o = s.child;
                  for (var u = a.firstContext; u !== null; ) {
                    if (u.context === r) {
                      if (s.tag === 1) {
                        ((u = gt(-1, n & -n)), (u.tag = 2));
                        var l = s.updateQueue;
                        if (l !== null) {
                          l = l.shared;
                          var c = l.pending;
                          (c === null
                            ? (u.next = u)
                            : ((u.next = c.next), (c.next = u)),
                            (l.pending = u));
                        }
                      }
                      ((s.lanes |= n),
                        (u = s.alternate),
                        u !== null && (u.lanes |= n),
                        iu(s.return, n, t),
                        (a.lanes |= n));
                      break;
                    }
                    u = u.next;
                  }
                } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
                else if (s.tag === 18) {
                  if (((o = s.return), o === null)) throw Error(S(341));
                  ((o.lanes |= n),
                    (a = o.alternate),
                    a !== null && (a.lanes |= n),
                    iu(o, n, t),
                    (o = s.sibling));
                } else o = s.child;
                if (o !== null) o.return = s;
                else
                  for (o = s; o !== null; ) {
                    if (o === t) {
                      o = null;
                      break;
                    }
                    if (((s = o.sibling), s !== null)) {
                      ((s.return = o.return), (o = s));
                      break;
                    }
                    o = o.return;
                  }
                s = o;
              }
          (ye(e, t, i.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (i = t.type),
          (r = t.pendingProps.children),
          Yn(t, n),
          (i = ze(i)),
          (r = r(i)),
          (t.flags |= 1),
          ye(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (i = Ve(r, t.pendingProps)),
          (i = Ve(r.type, i)),
          hf(e, t, r, i, n)
        );
      case 15:
        return Oh(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : Ve(r, i)),
          ws(e, t),
          (t.tag = 1),
          Ne(r) ? ((e = !0), Ws(t)) : (e = !1),
          Yn(t, n),
          Rh(t, r, i),
          ou(t, r, i, n),
          lu(null, t, r, !0, e, n)
        );
      case 19:
        return $h(e, t, n);
      case 22:
        return Dh(e, t, n);
    }
    throw Error(S(156, t.tag));
  };
  function Jh(e, t) {
    return Ip(e, t);
  }
  function Hy(e, t, n, r) {
    ((this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function be(e, t, n, r) {
    return new Hy(e, t, n, r);
  }
  function bl(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function By(e) {
    if (typeof e == "function") return bl(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === rl)) return 11;
      if (e === il) return 14;
    }
    return 2;
  }
  function Bt(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = be(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Ns(e, t, n, r, i, s) {
    var o = 2;
    if (((r = e), typeof e == "function")) bl(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else
      e: switch (e) {
        case Pn:
          return cn(n.children, i, s, t);
        case nl:
          ((o = 8), (i |= 8));
          break;
        case Pa:
          return (
            (e = be(12, n, t, i | 2)),
            (e.elementType = Pa),
            (e.lanes = s),
            e
          );
        case Oa:
          return (
            (e = be(13, n, t, i)),
            (e.elementType = Oa),
            (e.lanes = s),
            e
          );
        case Da:
          return (
            (e = be(19, n, t, i)),
            (e.elementType = Da),
            (e.lanes = s),
            e
          );
        case up:
          return Eo(n, i, s, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case op:
                o = 10;
                break e;
              case ap:
                o = 9;
                break e;
              case rl:
                o = 11;
                break e;
              case il:
                o = 14;
                break e;
              case Rt:
                ((o = 16), (r = null));
                break e;
            }
          throw Error(S(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = be(o, n, t, i)),
      (t.elementType = e),
      (t.type = r),
      (t.lanes = s),
      t
    );
  }
  function cn(e, t, n, r) {
    return ((e = be(7, e, r, t)), (e.lanes = n), e);
  }
  function Eo(e, t, n, r) {
    return (
      (e = be(22, e, r, t)),
      (e.elementType = up),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function da(e, t, n) {
    return ((e = be(6, e, null, t)), (e.lanes = n), e);
  }
  function pa(e, t, n) {
    return (
      (t = be(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Wy(e, t, n, r, i) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Yo(0)),
      (this.expirationTimes = Yo(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Yo(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = i),
      (this.mutableSourceEagerHydrationData = null));
  }
  function Ul(e, t, n, r, i, s, o, a, u) {
    return (
      (e = new Wy(e, t, n, a, u)),
      t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
      (s = be(3, null, null, t)),
      (e.current = s),
      (s.stateNode = e),
      (s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Tl(s),
      e
    );
  }
  function Gy(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: xn,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Zh(e) {
    if (!e) return Vt;
    e = e._reactInternals;
    e: {
      if (wn(e) !== e || e.tag !== 1) throw Error(S(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ne(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(S(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Ne(n)) return Zp(e, n, t);
    }
    return t;
  }
  function em(e, t, n, r, i, s, o, a, u) {
    return (
      (e = Ul(n, r, !0, e, i, s, o, a, u)),
      (e.context = Zh(null)),
      (n = e.current),
      (r = Se()),
      (i = Ht(n)),
      (s = gt(r, i)),
      (s.callback = t ?? null),
      jt(n, s, i),
      (e.current.lanes = i),
      Ti(e, i, r),
      Ce(e, r),
      e
    );
  }
  function To(e, t, n, r) {
    var i = t.current,
      s = Se(),
      o = Ht(i);
    return (
      (n = Zh(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = gt(s, o)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = jt(i, t, o)),
      e !== null && (Je(e, i, o, s), Ss(e, i, o)),
      o
    );
  }
  function ro(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Nf(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function jl(e, t) {
    (Nf(e, t), (e = e.alternate) && Nf(e, t));
  }
  function Vy() {
    return null;
  }
  var tm =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function zl(e) {
    this._internalRoot = e;
  }
  wo.prototype.render = zl.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(S(409));
    To(e, t, null, null);
  };
  wo.prototype.unmount = zl.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      (gn(function () {
        To(null, e, null, null);
      }),
        (t[Et] = null));
    }
  };
  function wo(e) {
    this._internalRoot = e;
  }
  wo.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Dp();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Ot.length && t !== 0 && t < Ot[n].priority; n++);
      (Ot.splice(n, 0, e), n === 0 && Mp(e));
    }
  };
  function Hl(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function ko(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Cf() {}
  function Yy(e, t, n, r, i) {
    if (i) {
      if (typeof r == "function") {
        var s = r;
        r = function () {
          var l = ro(o);
          s.call(l);
        };
      }
      var o = em(t, r, e, 0, null, !1, !1, "", Cf);
      return (
        (e._reactRootContainer = o),
        (e[Et] = o.current),
        li(e.nodeType === 8 ? e.parentNode : e),
        gn(),
        o
      );
    }
    for (; (i = e.lastChild); ) e.removeChild(i);
    if (typeof r == "function") {
      var a = r;
      r = function () {
        var l = ro(u);
        a.call(l);
      };
    }
    var u = Ul(e, 0, !1, null, null, !1, !1, "", Cf);
    return (
      (e._reactRootContainer = u),
      (e[Et] = u.current),
      li(e.nodeType === 8 ? e.parentNode : e),
      gn(function () {
        To(t, u, n, r);
      }),
      u
    );
  }
  function Io(e, t, n, r, i) {
    var s = n._reactRootContainer;
    if (s) {
      var o = s;
      if (typeof i == "function") {
        var a = i;
        i = function () {
          var u = ro(o);
          a.call(u);
        };
      }
      To(t, o, e, i);
    } else o = Yy(n, t, e, i, r);
    return ro(o);
  }
  Pp = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Ur(t.pendingLanes);
          n !== 0 &&
            (al(t, n | 1), Ce(t, te()), !(F & 6) && ((rr = te() + 500), Qt()));
        }
        break;
      case 13:
        (gn(function () {
          var r = Tt(e, 1);
          if (r !== null) {
            var i = Se();
            Je(r, e, 1, i);
          }
        }),
          jl(e, 1));
    }
  };
  ul = function (e) {
    if (e.tag === 13) {
      var t = Tt(e, 134217728);
      if (t !== null) {
        var n = Se();
        Je(t, e, 134217728, n);
      }
      jl(e, 134217728);
    }
  };
  Op = function (e) {
    if (e.tag === 13) {
      var t = Ht(e),
        n = Tt(e, t);
      if (n !== null) {
        var r = Se();
        Je(n, e, t, r);
      }
      jl(e, t);
    }
  };
  Dp = function () {
    return U;
  };
  Lp = function (e, t) {
    var n = U;
    try {
      return ((U = e), t());
    } finally {
      U = n;
    }
  };
  Ha = function (e, t, n) {
    switch (t) {
      case "input":
        if ((Aa(e, n), (t = n.name), n.type === "radio" && t != null)) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (
            n = n.querySelectorAll(
              "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
            ),
              t = 0;
            t < n.length;
            t++
          ) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var i = mo(r);
              if (!i) throw Error(S(90));
              (cp(r), Aa(r, i));
            }
          }
        }
        break;
      case "textarea":
        dp(e, n);
        break;
      case "select":
        ((t = n.value), t != null && Bn(e, !!n.multiple, t, !1));
    }
  };
  vp = Al;
  Sp = gn;
  var Ky = { usingClientEntryPoint: !1, Events: [ki, Mn, mo, _p, yp, Al] },
    Ar = {
      findFiberByHostInstance: rn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Xy = {
      bundleType: Ar.bundleType,
      version: Ar.version,
      rendererPackageName: Ar.rendererPackageName,
      rendererConfig: Ar.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: kt.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = wp(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: Ar.findFiberByHostInstance || Vy,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ns = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ns.isDisabled && ns.supportsFiber)
      try {
        ((co = ns.inject(Xy)), (ot = ns));
      } catch {}
  }
  Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ky;
  Me.createPortal = function (e, t) {
    var n =
      2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Hl(t)) throw Error(S(200));
    return Gy(e, t, null, n);
  };
  Me.createRoot = function (e, t) {
    if (!Hl(e)) throw Error(S(299));
    var n = !1,
      r = "",
      i = tm;
    return (
      t != null &&
        (t.unstable_strictMode === !0 && (n = !0),
        t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
        t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
      (t = Ul(e, 1, !1, null, null, n, !1, r, i)),
      (e[Et] = t.current),
      li(e.nodeType === 8 ? e.parentNode : e),
      new zl(t)
    );
  };
  Me.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(S(188))
        : ((e = Object.keys(e).join(",")), Error(S(268, e)));
    return ((e = wp(t)), (e = e === null ? null : e.stateNode), e);
  };
  Me.flushSync = function (e) {
    return gn(e);
  };
  Me.hydrate = function (e, t, n) {
    if (!ko(t)) throw Error(S(200));
    return Io(null, e, t, !0, n);
  };
  Me.hydrateRoot = function (e, t, n) {
    if (!Hl(e)) throw Error(S(405));
    var r = (n != null && n.hydratedSources) || null,
      i = !1,
      s = "",
      o = tm;
    if (
      (n != null &&
        (n.unstable_strictMode === !0 && (i = !0),
        n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
        n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
      (t = em(t, null, e, 1, n ?? null, i, !1, s, o)),
      (e[Et] = t.current),
      li(e),
      r)
    )
      for (e = 0; e < r.length; e++)
        ((n = r[e]),
          (i = n._getVersion),
          (i = i(n._source)),
          t.mutableSourceEagerHydrationData == null
            ? (t.mutableSourceEagerHydrationData = [n, i])
            : t.mutableSourceEagerHydrationData.push(n, i));
    return new wo(t);
  };
  Me.render = function (e, t, n) {
    if (!ko(t)) throw Error(S(200));
    return Io(null, e, t, !1, n);
  };
  Me.unmountComponentAtNode = function (e) {
    if (!ko(e)) throw Error(S(40));
    return e._reactRootContainer
      ? (gn(function () {
          Io(null, null, e, !1, function () {
            ((e._reactRootContainer = null), (e[Et] = null));
          });
        }),
        !0)
      : !1;
  };
  Me.unstable_batchedUpdates = Al;
  Me.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!ko(n)) throw Error(S(200));
    if (e == null || e._reactInternals === void 0) throw Error(S(38));
    return Io(e, t, n, !1, r);
  };
  Me.version = "18.3.1-next-f1338f8080-20240426";
  function nm() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nm);
      } catch (e) {
        console.error(e);
      }
  }
  (nm(), (np.exports = Me));
  var qy = np.exports,
    Rf = qy;
  ((Ra.createRoot = Rf.createRoot), (Ra.hydrateRoot = Rf.hydrateRoot));
  const D = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
    j = globalThis,
    fn = "10.30.0";
  function No() {
    return (Co(j), j);
  }
  function Co(e) {
    const t = (e.__SENTRY__ = e.__SENTRY__ || {});
    return ((t.version = t.version || fn), (t[fn] = t[fn] || {}));
  }
  function hr(e, t, n = j) {
    const r = (n.__SENTRY__ = n.__SENTRY__ || {}),
      i = (r[fn] = r[fn] || {});
    return i[e] || (i[e] = t());
  }
  const Qy = ["debug", "info", "warn", "error", "log", "assert", "trace"],
    Jy = "Sentry Logger ",
    io = {};
  function mr(e) {
    if (!("console" in j)) return e();
    const t = j.console,
      n = {},
      r = Object.keys(io);
    r.forEach((i) => {
      const s = io[i];
      ((n[i] = t[i]), (t[i] = s));
    });
    try {
      return e();
    } finally {
      r.forEach((i) => {
        t[i] = n[i];
      });
    }
  }
  function Zy() {
    Wl().enabled = !0;
  }
  function ev() {
    Wl().enabled = !1;
  }
  function rm() {
    return Wl().enabled;
  }
  function tv(...e) {
    Bl("log", ...e);
  }
  function nv(...e) {
    Bl("warn", ...e);
  }
  function rv(...e) {
    Bl("error", ...e);
  }
  function Bl(e, ...t) {
    D &&
      rm() &&
      mr(() => {
        j.console[e](`${Jy}[${e}]:`, ...t);
      });
  }
  function Wl() {
    return D ? hr("loggerSettings", () => ({ enabled: !1 })) : { enabled: !1 };
  }
  const x = {
      enable: Zy,
      disable: ev,
      isEnabled: rm,
      log: tv,
      warn: nv,
      error: rv,
    },
    im = 50,
    _n = "?",
    xf = /\(error: (.*)\)/,
    Pf = /captureMessage|captureException/;
  function sm(...e) {
    const t = e.sort((n, r) => n[0] - r[0]).map((n) => n[1]);
    return (n, r = 0, i = 0) => {
      const s = [],
        o = n.split(`
`);
      for (let a = r; a < o.length; a++) {
        let u = o[a];
        u.length > 1024 && (u = u.slice(0, 1024));
        const l = xf.test(u) ? u.replace(xf, "$1") : u;
        if (!l.match(/\S*Error: /)) {
          for (const c of t) {
            const f = c(l);
            if (f) {
              s.push(f);
              break;
            }
          }
          if (s.length >= im + i) break;
        }
      }
      return sv(s.slice(i));
    };
  }
  function iv(e) {
    return Array.isArray(e) ? sm(...e) : e;
  }
  function sv(e) {
    if (!e.length) return [];
    const t = Array.from(e);
    return (
      /sentryWrapped/.test(rs(t).function || "") && t.pop(),
      t.reverse(),
      Pf.test(rs(t).function || "") &&
        (t.pop(), Pf.test(rs(t).function || "") && t.pop()),
      t
        .slice(0, im)
        .map((n) => ({
          ...n,
          filename: n.filename || rs(t).filename,
          function: n.function || _n,
        }))
    );
  }
  function rs(e) {
    return e[e.length - 1] || {};
  }
  const ha = "<anonymous>";
  function Yt(e) {
    try {
      return !e || typeof e != "function" ? ha : e.name || ha;
    } catch {
      return ha;
    }
  }
  function Of(e) {
    const t = e.exception;
    if (t) {
      const n = [];
      try {
        return (
          t.values.forEach((r) => {
            r.stacktrace.frames && n.push(...r.stacktrace.frames);
          }),
          n
        );
      } catch {
        return;
      }
    }
  }
  function om(e) {
    return "__v_isVNode" in e && e.__v_isVNode
      ? "[VueVNode]"
      : "[VueViewModel]";
  }
  const Cs = {},
    Df = {};
  function kn(e, t) {
    ((Cs[e] = Cs[e] || []), Cs[e].push(t));
  }
  function In(e, t) {
    if (!Df[e]) {
      Df[e] = !0;
      try {
        t();
      } catch (n) {
        D && x.error(`Error while instrumenting ${e}`, n);
      }
    }
  }
  function Ze(e, t) {
    const n = e && Cs[e];
    if (n)
      for (const r of n)
        try {
          r(t);
        } catch (i) {
          D &&
            x.error(
              `Error while triggering instrumentation handler.
Type: ${e}
Name: ${Yt(r)}
Error:`,
              i,
            );
        }
  }
  let ma = null;
  function ov(e) {
    const t = "error";
    (kn(t, e), In(t, av));
  }
  function av() {
    ((ma = j.onerror),
      (j.onerror = function (e, t, n, r, i) {
        return (
          Ze("error", { column: r, error: i, line: n, msg: e, url: t }),
          ma ? ma.apply(this, arguments) : !1
        );
      }),
      (j.onerror.__SENTRY_INSTRUMENTED__ = !0));
  }
  let ga = null;
  function uv(e) {
    const t = "unhandledrejection";
    (kn(t, e), In(t, lv));
  }
  function lv() {
    ((ga = j.onunhandledrejection),
      (j.onunhandledrejection = function (e) {
        return (
          Ze("unhandledrejection", e),
          ga ? ga.apply(this, arguments) : !0
        );
      }),
      (j.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0));
  }
  const am = Object.prototype.toString;
  function Ro(e) {
    switch (am.call(e)) {
      case "[object Error]":
      case "[object Exception]":
      case "[object DOMException]":
      case "[object WebAssembly.Exception]":
        return !0;
      default:
        return Kt(e, Error);
    }
  }
  function gr(e, t) {
    return am.call(e) === `[object ${t}]`;
  }
  function um(e) {
    return gr(e, "ErrorEvent");
  }
  function Lf(e) {
    return gr(e, "DOMError");
  }
  function cv(e) {
    return gr(e, "DOMException");
  }
  function _t(e) {
    return gr(e, "String");
  }
  function Gl(e) {
    return (
      typeof e == "object" &&
      e !== null &&
      "__sentry_template_string__" in e &&
      "__sentry_template_values__" in e
    );
  }
  function xo(e) {
    return (
      e === null || Gl(e) || (typeof e != "object" && typeof e != "function")
    );
  }
  function yi(e) {
    return gr(e, "Object");
  }
  function Po(e) {
    return typeof Event < "u" && Kt(e, Event);
  }
  function fv(e) {
    return typeof Element < "u" && Kt(e, Element);
  }
  function dv(e) {
    return gr(e, "RegExp");
  }
  function Ni(e) {
    return !!(e != null && e.then && typeof e.then == "function");
  }
  function pv(e) {
    return (
      yi(e) &&
      "nativeEvent" in e &&
      "preventDefault" in e &&
      "stopPropagation" in e
    );
  }
  function Kt(e, t) {
    try {
      return e instanceof t;
    } catch {
      return !1;
    }
  }
  function lm(e) {
    return !!(
      typeof e == "object" &&
      e !== null &&
      (e.__isVue || e._isVue || e.__v_isVNode)
    );
  }
  function cm(e) {
    return typeof Request < "u" && Kt(e, Request);
  }
  const Vl = j,
    hv = 80;
  function fm(e, t = {}) {
    if (!e) return "<unknown>";
    try {
      let n = e;
      const r = 5,
        i = [];
      let s = 0,
        o = 0;
      const a = " > ",
        u = a.length;
      let l;
      const c = Array.isArray(t) ? t : t.keyAttrs,
        f = (!Array.isArray(t) && t.maxStringLength) || hv;
      for (
        ;
        n &&
        s++ < r &&
        ((l = mv(n, c)),
        !(l === "html" || (s > 1 && o + i.length * u + l.length >= f)));
      )
        (i.push(l), (o += l.length), (n = n.parentNode));
      return i.reverse().join(a);
    } catch {
      return "<unknown>";
    }
  }
  function mv(e, t) {
    const n = e,
      r = [];
    if (!(n != null && n.tagName)) return "";
    if (Vl.HTMLElement && n instanceof HTMLElement && n.dataset) {
      if (n.dataset.sentryComponent) return n.dataset.sentryComponent;
      if (n.dataset.sentryElement) return n.dataset.sentryElement;
    }
    r.push(n.tagName.toLowerCase());
    const i =
      t != null && t.length
        ? t.filter((o) => n.getAttribute(o)).map((o) => [o, n.getAttribute(o)])
        : null;
    if (i != null && i.length)
      i.forEach((o) => {
        r.push(`[${o[0]}="${o[1]}"]`);
      });
    else {
      n.id && r.push(`#${n.id}`);
      const o = n.className;
      if (o && _t(o)) {
        const a = o.split(/\s+/);
        for (const u of a) r.push(`.${u}`);
      }
    }
    const s = ["aria-label", "type", "name", "title", "alt"];
    for (const o of s) {
      const a = n.getAttribute(o);
      a && r.push(`[${o}="${a}"]`);
    }
    return r.join("");
  }
  function Yl() {
    try {
      return Vl.document.location.href;
    } catch {
      return "";
    }
  }
  function gv(e) {
    if (!Vl.HTMLElement) return null;
    let t = e;
    const n = 5;
    for (let r = 0; r < n; r++) {
      if (!t) return null;
      if (t instanceof HTMLElement) {
        if (t.dataset.sentryComponent) return t.dataset.sentryComponent;
        if (t.dataset.sentryElement) return t.dataset.sentryElement;
      }
      t = t.parentNode;
    }
    return null;
  }
  function Oe(e, t, n) {
    if (!(t in e)) return;
    const r = e[t];
    if (typeof r != "function") return;
    const i = n(r);
    typeof i == "function" && dm(i, r);
    try {
      e[t] = i;
    } catch {
      D && x.log(`Failed to replace method "${t}" in object`, e);
    }
  }
  function yn(e, t, n) {
    try {
      Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 });
    } catch {
      D && x.log(`Failed to add non-enumerable property "${t}" to object`, e);
    }
  }
  function dm(e, t) {
    try {
      const n = t.prototype || {};
      ((e.prototype = t.prototype = n), yn(e, "__sentry_original__", t));
    } catch {}
  }
  function Kl(e) {
    return e.__sentry_original__;
  }
  function pm(e) {
    if (Ro(e))
      return { message: e.message, name: e.name, stack: e.stack, ...Af(e) };
    if (Po(e)) {
      const t = {
        type: e.type,
        target: Mf(e.target),
        currentTarget: Mf(e.currentTarget),
        ...Af(e),
      };
      return (
        typeof CustomEvent < "u" && Kt(e, CustomEvent) && (t.detail = e.detail),
        t
      );
    } else return e;
  }
  function Mf(e) {
    try {
      return fv(e) ? fm(e) : Object.prototype.toString.call(e);
    } catch {
      return "<unknown>";
    }
  }
  function Af(e) {
    if (typeof e == "object" && e !== null) {
      const t = {};
      for (const n in e)
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t;
    } else return {};
  }
  function _v(e) {
    const t = Object.keys(pm(e));
    return (t.sort(), t[0] ? t.join(", ") : "[object has no keys]");
  }
  function Eu(e, t = 0) {
    return typeof e != "string" || t === 0 || e.length <= t
      ? e
      : `${e.slice(0, t)}...`;
  }
  function $f(e, t) {
    if (!Array.isArray(e)) return "";
    const n = [];
    for (let r = 0; r < e.length; r++) {
      const i = e[r];
      try {
        lm(i) ? n.push(om(i)) : n.push(String(i));
      } catch {
        n.push("[value cannot be serialized]");
      }
    }
    return n.join(t);
  }
  function Rs(e, t, n = !1) {
    return _t(e)
      ? dv(t)
        ? t.test(e)
        : _t(t)
          ? n
            ? e === t
            : e.includes(t)
          : !1
      : !1;
  }
  function Oo(e, t = [], n = !1) {
    return t.some((r) => Rs(e, r, n));
  }
  function yv() {
    const e = j;
    return e.crypto || e.msCrypto;
  }
  let _a;
  function vv() {
    return Math.random() * 16;
  }
  function je(e = yv()) {
    try {
      if (e != null && e.randomUUID) return e.randomUUID().replace(/-/g, "");
    } catch {}
    return (
      _a || (_a = "10000000100040008000" + 1e11),
      _a.replace(/[018]/g, (t) => (t ^ ((vv() & 15) >> (t / 4))).toString(16))
    );
  }
  function hm(e) {
    var t, n;
    return (n = (t = e.exception) == null ? void 0 : t.values) == null
      ? void 0
      : n[0];
  }
  function nn(e) {
    const { message: t, event_id: n } = e;
    if (t) return t;
    const r = hm(e);
    return r
      ? r.type && r.value
        ? `${r.type}: ${r.value}`
        : r.type || r.value || n || "<unknown>"
      : n || "<unknown>";
  }
  function Tu(e, t, n) {
    const r = (e.exception = e.exception || {}),
      i = (r.values = r.values || []),
      s = (i[0] = i[0] || {});
    (s.value || (s.value = t || ""), s.type || (s.type = "Error"));
  }
  function ir(e, t) {
    const n = hm(e);
    if (!n) return;
    const r = { type: "generic", handled: !0 },
      i = n.mechanism;
    if (((n.mechanism = { ...r, ...i, ...t }), t && "data" in t)) {
      const s = { ...(i == null ? void 0 : i.data), ...t.data };
      n.mechanism.data = s;
    }
  }
  function Ff(e) {
    if (Sv(e)) return !0;
    try {
      yn(e, "__sentry_captured__", !0);
    } catch {}
    return !1;
  }
  function Sv(e) {
    try {
      return e.__sentry_captured__;
    } catch {}
  }
  const mm = 1e3;
  function Ci() {
    return Date.now() / mm;
  }
  function Ev() {
    const { performance: e } = j;
    if (!(e != null && e.now) || !e.timeOrigin) return Ci;
    const t = e.timeOrigin;
    return () => (t + e.now()) / mm;
  }
  let bf;
  function yt() {
    return (bf ?? (bf = Ev()))();
  }
  function Tv(e) {
    const t = yt(),
      n = {
        sid: je(),
        init: !0,
        timestamp: t,
        started: t,
        duration: 0,
        status: "ok",
        errors: 0,
        ignoreDuration: !1,
        toJSON: () => kv(n),
      };
    return (e && sr(n, e), n);
  }
  function sr(e, t = {}) {
    if (
      (t.user &&
        (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address),
        !e.did &&
          !t.did &&
          (e.did = t.user.id || t.user.email || t.user.username)),
      (e.timestamp = t.timestamp || yt()),
      t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism),
      t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
      t.sid && (e.sid = t.sid.length === 32 ? t.sid : je()),
      t.init !== void 0 && (e.init = t.init),
      !e.did && t.did && (e.did = `${t.did}`),
      typeof t.started == "number" && (e.started = t.started),
      e.ignoreDuration)
    )
      e.duration = void 0;
    else if (typeof t.duration == "number") e.duration = t.duration;
    else {
      const n = e.timestamp - e.started;
      e.duration = n >= 0 ? n : 0;
    }
    (t.release && (e.release = t.release),
      t.environment && (e.environment = t.environment),
      !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress),
      !e.userAgent && t.userAgent && (e.userAgent = t.userAgent),
      typeof t.errors == "number" && (e.errors = t.errors),
      t.status && (e.status = t.status));
  }
  function wv(e, t) {
    let n = {};
    (e.status === "ok" && (n = { status: "exited" }), sr(e, n));
  }
  function kv(e) {
    return {
      sid: `${e.sid}`,
      init: e.init,
      started: new Date(e.started * 1e3).toISOString(),
      timestamp: new Date(e.timestamp * 1e3).toISOString(),
      status: e.status,
      errors: e.errors,
      did:
        typeof e.did == "number" || typeof e.did == "string"
          ? `${e.did}`
          : void 0,
      duration: e.duration,
      abnormal_mechanism: e.abnormal_mechanism,
      attrs: {
        release: e.release,
        environment: e.environment,
        ip_address: e.ipAddress,
        user_agent: e.userAgent,
      },
    };
  }
  function Ri(e, t, n = 2) {
    if (!t || typeof t != "object" || n <= 0) return t;
    if (e && Object.keys(t).length === 0) return e;
    const r = { ...e };
    for (const i in t)
      Object.prototype.hasOwnProperty.call(t, i) &&
        (r[i] = Ri(r[i], t[i], n - 1));
    return r;
  }
  function Uf() {
    return je();
  }
  function gm() {
    return je().substring(16);
  }
  const wu = "_sentrySpan";
  function jf(e, t) {
    t ? yn(e, wu, t) : delete e[wu];
  }
  function zf(e) {
    return e[wu];
  }
  const Iv = 100;
  let vn = class ku {
    constructor() {
      ((this._notifyingListeners = !1),
        (this._scopeListeners = []),
        (this._eventProcessors = []),
        (this._breadcrumbs = []),
        (this._attachments = []),
        (this._user = {}),
        (this._tags = {}),
        (this._attributes = {}),
        (this._extra = {}),
        (this._contexts = {}),
        (this._sdkProcessingMetadata = {}),
        (this._propagationContext = {
          traceId: Uf(),
          sampleRand: Math.random(),
        }));
    }
    clone() {
      const t = new ku();
      return (
        (t._breadcrumbs = [...this._breadcrumbs]),
        (t._tags = { ...this._tags }),
        (t._attributes = { ...this._attributes }),
        (t._extra = { ...this._extra }),
        (t._contexts = { ...this._contexts }),
        this._contexts.flags &&
          (t._contexts.flags = { values: [...this._contexts.flags.values] }),
        (t._user = this._user),
        (t._level = this._level),
        (t._session = this._session),
        (t._transactionName = this._transactionName),
        (t._fingerprint = this._fingerprint),
        (t._eventProcessors = [...this._eventProcessors]),
        (t._attachments = [...this._attachments]),
        (t._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }),
        (t._propagationContext = { ...this._propagationContext }),
        (t._client = this._client),
        (t._lastEventId = this._lastEventId),
        jf(t, zf(this)),
        t
      );
    }
    setClient(t) {
      this._client = t;
    }
    setLastEventId(t) {
      this._lastEventId = t;
    }
    getClient() {
      return this._client;
    }
    lastEventId() {
      return this._lastEventId;
    }
    addScopeListener(t) {
      this._scopeListeners.push(t);
    }
    addEventProcessor(t) {
      return (this._eventProcessors.push(t), this);
    }
    setUser(t) {
      return (
        (this._user = t || {
          email: void 0,
          id: void 0,
          ip_address: void 0,
          username: void 0,
        }),
        this._session && sr(this._session, { user: t }),
        this._notifyScopeListeners(),
        this
      );
    }
    getUser() {
      return this._user;
    }
    setTags(t) {
      return (
        (this._tags = { ...this._tags, ...t }),
        this._notifyScopeListeners(),
        this
      );
    }
    setTag(t, n) {
      return this.setTags({ [t]: n });
    }
    setAttributes(t) {
      return (
        (this._attributes = { ...this._attributes, ...t }),
        this._notifyScopeListeners(),
        this
      );
    }
    setAttribute(t, n) {
      return this.setAttributes({ [t]: n });
    }
    removeAttribute(t) {
      return (
        t in this._attributes &&
          (delete this._attributes[t], this._notifyScopeListeners()),
        this
      );
    }
    setExtras(t) {
      return (
        (this._extra = { ...this._extra, ...t }),
        this._notifyScopeListeners(),
        this
      );
    }
    setExtra(t, n) {
      return (
        (this._extra = { ...this._extra, [t]: n }),
        this._notifyScopeListeners(),
        this
      );
    }
    setFingerprint(t) {
      return ((this._fingerprint = t), this._notifyScopeListeners(), this);
    }
    setLevel(t) {
      return ((this._level = t), this._notifyScopeListeners(), this);
    }
    setTransactionName(t) {
      return ((this._transactionName = t), this._notifyScopeListeners(), this);
    }
    setContext(t, n) {
      return (
        n === null ? delete this._contexts[t] : (this._contexts[t] = n),
        this._notifyScopeListeners(),
        this
      );
    }
    setSession(t) {
      return (
        t ? (this._session = t) : delete this._session,
        this._notifyScopeListeners(),
        this
      );
    }
    getSession() {
      return this._session;
    }
    update(t) {
      if (!t) return this;
      const n = typeof t == "function" ? t(this) : t,
        r = n instanceof ku ? n.getScopeData() : yi(n) ? t : void 0,
        {
          tags: i,
          attributes: s,
          extra: o,
          user: a,
          contexts: u,
          level: l,
          fingerprint: c = [],
          propagationContext: f,
        } = r || {};
      return (
        (this._tags = { ...this._tags, ...i }),
        (this._attributes = { ...this._attributes, ...s }),
        (this._extra = { ...this._extra, ...o }),
        (this._contexts = { ...this._contexts, ...u }),
        a && Object.keys(a).length && (this._user = a),
        l && (this._level = l),
        c.length && (this._fingerprint = c),
        f && (this._propagationContext = f),
        this
      );
    }
    clear() {
      return (
        (this._breadcrumbs = []),
        (this._tags = {}),
        (this._attributes = {}),
        (this._extra = {}),
        (this._user = {}),
        (this._contexts = {}),
        (this._level = void 0),
        (this._transactionName = void 0),
        (this._fingerprint = void 0),
        (this._session = void 0),
        jf(this, void 0),
        (this._attachments = []),
        this.setPropagationContext({
          traceId: Uf(),
          sampleRand: Math.random(),
        }),
        this._notifyScopeListeners(),
        this
      );
    }
    addBreadcrumb(t, n) {
      var s;
      const r = typeof n == "number" ? n : Iv;
      if (r <= 0) return this;
      const i = {
        timestamp: Ci(),
        ...t,
        message: t.message ? Eu(t.message, 2048) : t.message,
      };
      return (
        this._breadcrumbs.push(i),
        this._breadcrumbs.length > r &&
          ((this._breadcrumbs = this._breadcrumbs.slice(-r)),
          (s = this._client) == null ||
            s.recordDroppedEvent("buffer_overflow", "log_item")),
        this._notifyScopeListeners(),
        this
      );
    }
    getLastBreadcrumb() {
      return this._breadcrumbs[this._breadcrumbs.length - 1];
    }
    clearBreadcrumbs() {
      return ((this._breadcrumbs = []), this._notifyScopeListeners(), this);
    }
    addAttachment(t) {
      return (this._attachments.push(t), this);
    }
    clearAttachments() {
      return ((this._attachments = []), this);
    }
    getScopeData() {
      return {
        breadcrumbs: this._breadcrumbs,
        attachments: this._attachments,
        contexts: this._contexts,
        tags: this._tags,
        attributes: this._attributes,
        extra: this._extra,
        user: this._user,
        level: this._level,
        fingerprint: this._fingerprint || [],
        eventProcessors: this._eventProcessors,
        propagationContext: this._propagationContext,
        sdkProcessingMetadata: this._sdkProcessingMetadata,
        transactionName: this._transactionName,
        span: zf(this),
      };
    }
    setSDKProcessingMetadata(t) {
      return (
        (this._sdkProcessingMetadata = Ri(this._sdkProcessingMetadata, t, 2)),
        this
      );
    }
    setPropagationContext(t) {
      return ((this._propagationContext = t), this);
    }
    getPropagationContext() {
      return this._propagationContext;
    }
    captureException(t, n) {
      const r = (n == null ? void 0 : n.event_id) || je();
      if (!this._client)
        return (
          D &&
            x.warn(
              "No client configured on scope - will not capture exception!",
            ),
          r
        );
      const i = new Error("Sentry syntheticException");
      return (
        this._client.captureException(
          t,
          { originalException: t, syntheticException: i, ...n, event_id: r },
          this,
        ),
        r
      );
    }
    captureMessage(t, n, r) {
      const i = (r == null ? void 0 : r.event_id) || je();
      if (!this._client)
        return (
          D &&
            x.warn("No client configured on scope - will not capture message!"),
          i
        );
      const s = (r == null ? void 0 : r.syntheticException) ?? new Error(t);
      return (
        this._client.captureMessage(
          t,
          n,
          { originalException: t, syntheticException: s, ...r, event_id: i },
          this,
        ),
        i
      );
    }
    captureEvent(t, n) {
      const r = (n == null ? void 0 : n.event_id) || je();
      return this._client
        ? (this._client.captureEvent(t, { ...n, event_id: r }, this), r)
        : (D &&
            x.warn("No client configured on scope - will not capture event!"),
          r);
    }
    _notifyScopeListeners() {
      this._notifyingListeners ||
        ((this._notifyingListeners = !0),
        this._scopeListeners.forEach((t) => {
          t(this);
        }),
        (this._notifyingListeners = !1));
    }
  };
  function Nv() {
    return hr("defaultCurrentScope", () => new vn());
  }
  function Cv() {
    return hr("defaultIsolationScope", () => new vn());
  }
  class Rv {
    constructor(t, n) {
      let r;
      t ? (r = t) : (r = new vn());
      let i;
      (n ? (i = n) : (i = new vn()),
        (this._stack = [{ scope: r }]),
        (this._isolationScope = i));
    }
    withScope(t) {
      const n = this._pushScope();
      let r;
      try {
        r = t(n);
      } catch (i) {
        throw (this._popScope(), i);
      }
      return Ni(r)
        ? r.then(
            (i) => (this._popScope(), i),
            (i) => {
              throw (this._popScope(), i);
            },
          )
        : (this._popScope(), r);
    }
    getClient() {
      return this.getStackTop().client;
    }
    getScope() {
      return this.getStackTop().scope;
    }
    getIsolationScope() {
      return this._isolationScope;
    }
    getStackTop() {
      return this._stack[this._stack.length - 1];
    }
    _pushScope() {
      const t = this.getScope().clone();
      return (this._stack.push({ client: this.getClient(), scope: t }), t);
    }
    _popScope() {
      return this._stack.length <= 1 ? !1 : !!this._stack.pop();
    }
  }
  function or() {
    const e = No(),
      t = Co(e);
    return (t.stack = t.stack || new Rv(Nv(), Cv()));
  }
  function xv(e) {
    return or().withScope(e);
  }
  function Pv(e, t) {
    const n = or();
    return n.withScope(() => ((n.getStackTop().scope = e), t(e)));
  }
  function Hf(e) {
    return or().withScope(() => e(or().getIsolationScope()));
  }
  function Ov() {
    return {
      withIsolationScope: Hf,
      withScope: xv,
      withSetScope: Pv,
      withSetIsolationScope: (e, t) => Hf(t),
      getCurrentScope: () => or().getScope(),
      getIsolationScope: () => or().getIsolationScope(),
    };
  }
  function Xl(e) {
    const t = Co(e);
    return t.acs ? t.acs : Ov();
  }
  function It() {
    const e = No();
    return Xl(e).getCurrentScope();
  }
  function Nn() {
    const e = No();
    return Xl(e).getIsolationScope();
  }
  function Dv() {
    return hr("globalScope", () => new vn());
  }
  function ql(...e) {
    const t = No(),
      n = Xl(t);
    if (e.length === 2) {
      const [r, i] = e;
      return r ? n.withSetScope(r, i) : n.withScope(i);
    }
    return n.withScope(e[0]);
  }
  function pe() {
    return It().getClient();
  }
  function Lv(e) {
    const t = e.getPropagationContext(),
      { traceId: n, parentSpanId: r, propagationSpanId: i } = t,
      s = { trace_id: n, span_id: i || gm() };
    return (r && (s.parent_span_id = r), s);
  }
  const Mv = "sentry.source",
    Av = "sentry.sample_rate",
    $v = "sentry.previous_trace_sample_rate",
    Fv = "sentry.op",
    bv = "sentry.origin",
    _m = "sentry.profile_id",
    ym = "sentry.exclusive_time",
    Uv = 0,
    jv = 1,
    zv = "_sentryScope",
    Hv = "_sentryIsolationScope";
  function Bv(e) {
    if (e) {
      if (typeof e == "object" && "deref" in e && typeof e.deref == "function")
        try {
          return e.deref();
        } catch {
          return;
        }
      return e;
    }
  }
  function vm(e) {
    const t = e;
    return { scope: t[zv], isolationScope: Bv(t[Hv]) };
  }
  const Wv = "sentry-",
    Gv = /^sentry-/;
  function Vv(e) {
    const t = Yv(e);
    if (!t) return;
    const n = Object.entries(t).reduce((r, [i, s]) => {
      if (i.match(Gv)) {
        const o = i.slice(Wv.length);
        r[o] = s;
      }
      return r;
    }, {});
    if (Object.keys(n).length > 0) return n;
  }
  function Yv(e) {
    if (!(!e || (!_t(e) && !Array.isArray(e))))
      return Array.isArray(e)
        ? e.reduce((t, n) => {
            const r = Bf(n);
            return (
              Object.entries(r).forEach(([i, s]) => {
                t[i] = s;
              }),
              t
            );
          }, {})
        : Bf(e);
  }
  function Bf(e) {
    return e
      .split(",")
      .map((t) => {
        const n = t.indexOf("=");
        if (n === -1) return [];
        const r = t.slice(0, n),
          i = t.slice(n + 1);
        return [r, i].map((s) => {
          try {
            return decodeURIComponent(s.trim());
          } catch {
            return;
          }
        });
      })
      .reduce((t, [n, r]) => (n && r && (t[n] = r), t), {});
  }
  const Kv = /^o(\d+)\./,
    Xv = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
  function qv(e) {
    return e === "http" || e === "https";
  }
  function _r(e, t = !1) {
    const {
      host: n,
      path: r,
      pass: i,
      port: s,
      projectId: o,
      protocol: a,
      publicKey: u,
    } = e;
    return `${a}://${u}${t && i ? `:${i}` : ""}@${n}${s ? `:${s}` : ""}/${r && `${r}/`}${o}`;
  }
  function Qv(e) {
    const t = Xv.exec(e);
    if (!t) {
      mr(() => {
        console.error(`Invalid Sentry Dsn: ${e}`);
      });
      return;
    }
    const [n, r, i = "", s = "", o = "", a = ""] = t.slice(1);
    let u = "",
      l = a;
    const c = l.split("/");
    if ((c.length > 1 && ((u = c.slice(0, -1).join("/")), (l = c.pop())), l)) {
      const f = l.match(/^\d+/);
      f && (l = f[0]);
    }
    return Sm({
      host: s,
      pass: i,
      path: u,
      projectId: l,
      port: o,
      protocol: n,
      publicKey: r,
    });
  }
  function Sm(e) {
    return {
      protocol: e.protocol,
      publicKey: e.publicKey || "",
      pass: e.pass || "",
      host: e.host,
      port: e.port || "",
      path: e.path || "",
      projectId: e.projectId,
    };
  }
  function Jv(e) {
    if (!D) return !0;
    const { port: t, projectId: n, protocol: r } = e;
    return ["protocol", "publicKey", "host", "projectId"].find((o) =>
      e[o] ? !1 : (x.error(`Invalid Sentry Dsn: ${o} missing`), !0),
    )
      ? !1
      : n.match(/^\d+$/)
        ? qv(r)
          ? t && isNaN(parseInt(t, 10))
            ? (x.error(`Invalid Sentry Dsn: Invalid port ${t}`), !1)
            : !0
          : (x.error(`Invalid Sentry Dsn: Invalid protocol ${r}`), !1)
        : (x.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1);
  }
  function Zv(e) {
    const t = e.match(Kv);
    return t == null ? void 0 : t[1];
  }
  function eS(e) {
    const t = e.getOptions(),
      { host: n } = e.getDsn() || {};
    let r;
    return (t.orgId ? (r = String(t.orgId)) : n && (r = Zv(n)), r);
  }
  function Em(e) {
    const t = typeof e == "string" ? Qv(e) : Sm(e);
    if (!(!t || !Jv(t))) return t;
  }
  function tS(e) {
    if (typeof e == "boolean") return Number(e);
    const t = typeof e == "string" ? parseFloat(e) : e;
    if (!(typeof t != "number" || isNaN(t) || t < 0 || t > 1)) return t;
  }
  const Tm = 1;
  let Wf = !1;
  function nS(e) {
    const { spanId: t, traceId: n, isRemote: r } = e.spanContext(),
      i = r ? t : Ql(e).parent_span_id,
      s = vm(e).scope,
      o = r
        ? (s == null ? void 0 : s.getPropagationContext().propagationSpanId) ||
          gm()
        : t;
    return { parent_span_id: i, span_id: o, trace_id: n };
  }
  function rS(e) {
    if (e && e.length > 0)
      return e.map(
        ({
          context: { spanId: t, traceId: n, traceFlags: r, ...i },
          attributes: s,
        }) => ({
          span_id: t,
          trace_id: n,
          sampled: r === Tm,
          attributes: s,
          ...i,
        }),
      );
  }
  function Gf(e) {
    return typeof e == "number"
      ? Vf(e)
      : Array.isArray(e)
        ? e[0] + e[1] / 1e9
        : e instanceof Date
          ? Vf(e.getTime())
          : yt();
  }
  function Vf(e) {
    return e > 9999999999 ? e / 1e3 : e;
  }
  function Ql(e) {
    var r;
    if (sS(e)) return e.getSpanJSON();
    const { spanId: t, traceId: n } = e.spanContext();
    if (iS(e)) {
      const {
          attributes: i,
          startTime: s,
          name: o,
          endTime: a,
          status: u,
          links: l,
        } = e,
        c =
          "parentSpanId" in e
            ? e.parentSpanId
            : "parentSpanContext" in e
              ? (r = e.parentSpanContext) == null
                ? void 0
                : r.spanId
              : void 0;
      return {
        span_id: t,
        trace_id: n,
        data: i,
        description: o,
        parent_span_id: c,
        start_timestamp: Gf(s),
        timestamp: Gf(a) || void 0,
        status: aS(u),
        op: i[Fv],
        origin: i[bv],
        links: rS(l),
      };
    }
    return { span_id: t, trace_id: n, start_timestamp: 0, data: {} };
  }
  function iS(e) {
    const t = e;
    return (
      !!t.attributes && !!t.startTime && !!t.name && !!t.endTime && !!t.status
    );
  }
  function sS(e) {
    return typeof e.getSpanJSON == "function";
  }
  function oS(e) {
    const { traceFlags: t } = e.spanContext();
    return t === Tm;
  }
  function aS(e) {
    if (!(!e || e.code === Uv))
      return e.code === jv ? "ok" : e.message || "internal_error";
  }
  const uS = "_sentryRootSpan";
  function wm(e) {
    return e[uS] || e;
  }
  function Yf() {
    Wf ||
      (mr(() => {
        console.warn(
          "[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.",
        );
      }),
      (Wf = !0));
  }
  function lS(e) {
    var n;
    if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__)
      return !1;
    const t = (n = pe()) == null ? void 0 : n.getOptions();
    return !!t && (t.tracesSampleRate != null || !!t.tracesSampler);
  }
  function Kf(e) {
    x.log(
      `Ignoring span ${e.op} - ${e.description} because it matches \`ignoreSpans\`.`,
    );
  }
  function Xf(e, t) {
    if (!(t != null && t.length) || !e.description) return !1;
    for (const n of t) {
      if (fS(n)) {
        if (Rs(e.description, n)) return (D && Kf(e), !0);
        continue;
      }
      if (!n.name && !n.op) continue;
      const r = n.name ? Rs(e.description, n.name) : !0,
        i = n.op ? e.op && Rs(e.op, n.op) : !0;
      if (r && i) return (D && Kf(e), !0);
    }
    return !1;
  }
  function cS(e, t) {
    const n = t.parent_span_id,
      r = t.span_id;
    if (n) for (const i of e) i.parent_span_id === r && (i.parent_span_id = n);
  }
  function fS(e) {
    return typeof e == "string" || e instanceof RegExp;
  }
  const Jl = "production",
    dS = "_frozenDsc";
  function km(e, t) {
    const n = t.getOptions(),
      { publicKey: r } = t.getDsn() || {},
      i = {
        environment: n.environment || Jl,
        release: n.release,
        public_key: r,
        trace_id: e,
        org_id: eS(t),
      };
    return (t.emit("createDsc", i), i);
  }
  function pS(e, t) {
    const n = t.getPropagationContext();
    return n.dsc || km(n.traceId, e);
  }
  function hS(e) {
    var _;
    const t = pe();
    if (!t) return {};
    const n = wm(e),
      r = Ql(n),
      i = r.data,
      s = n.spanContext().traceState,
      o = (s == null ? void 0 : s.get("sentry.sample_rate")) ?? i[Av] ?? i[$v];
    function a(y) {
      return (
        (typeof o == "number" || typeof o == "string") &&
          (y.sample_rate = `${o}`),
        y
      );
    }
    const u = n[dS];
    if (u) return a(u);
    const l = s == null ? void 0 : s.get("sentry.dsc"),
      c = l && Vv(l);
    if (c) return a(c);
    const f = km(e.spanContext().traceId, t),
      d = i[Mv],
      m = r.description;
    return (
      d !== "url" && m && (f.transaction = m),
      lS() &&
        ((f.sampled = String(oS(n))),
        (f.sample_rand =
          (s == null ? void 0 : s.get("sentry.sample_rand")) ??
          ((_ = vm(n).scope) == null
            ? void 0
            : _.getPropagationContext().sampleRand.toString()))),
      a(f),
      t.emit("createDsc", f, n),
      f
    );
  }
  function ct(e, t = 100, n = 1 / 0) {
    try {
      return Iu("", e, t, n);
    } catch (r) {
      return { ERROR: `**non-serializable** (${r})` };
    }
  }
  function Im(e, t = 3, n = 100 * 1024) {
    const r = ct(e, t);
    return yS(r) > n ? Im(e, t - 1, n) : r;
  }
  function Iu(e, t, n = 1 / 0, r = 1 / 0, i = vS()) {
    const [s, o] = i;
    if (
      t == null ||
      ["boolean", "string"].includes(typeof t) ||
      (typeof t == "number" && Number.isFinite(t))
    )
      return t;
    const a = mS(e, t);
    if (!a.startsWith("[object ")) return a;
    if (t.__sentry_skip_normalization__) return t;
    const u =
      typeof t.__sentry_override_normalization_depth__ == "number"
        ? t.__sentry_override_normalization_depth__
        : n;
    if (u === 0) return a.replace("object ", "");
    if (s(t)) return "[Circular ~]";
    const l = t;
    if (l && typeof l.toJSON == "function")
      try {
        const m = l.toJSON();
        return Iu("", m, u - 1, r, i);
      } catch {}
    const c = Array.isArray(t) ? [] : {};
    let f = 0;
    const d = pm(t);
    for (const m in d) {
      if (!Object.prototype.hasOwnProperty.call(d, m)) continue;
      if (f >= r) {
        c[m] = "[MaxProperties ~]";
        break;
      }
      const _ = d[m];
      ((c[m] = Iu(m, _, u - 1, r, i)), f++);
    }
    return (o(t), c);
  }
  function mS(e, t) {
    try {
      if (e === "domain" && t && typeof t == "object" && t._events)
        return "[Domain]";
      if (e === "domainEmitter") return "[DomainEmitter]";
      if (typeof global < "u" && t === global) return "[Global]";
      if (typeof window < "u" && t === window) return "[Window]";
      if (typeof document < "u" && t === document) return "[Document]";
      if (lm(t)) return om(t);
      if (pv(t)) return "[SyntheticEvent]";
      if (typeof t == "number" && !Number.isFinite(t)) return `[${t}]`;
      if (typeof t == "function") return `[Function: ${Yt(t)}]`;
      if (typeof t == "symbol") return `[${String(t)}]`;
      if (typeof t == "bigint") return `[BigInt: ${String(t)}]`;
      const n = gS(t);
      return /^HTML(\w*)Element$/.test(n)
        ? `[HTMLElement: ${n}]`
        : `[object ${n}]`;
    } catch (n) {
      return `**non-serializable** (${n})`;
    }
  }
  function gS(e) {
    const t = Object.getPrototypeOf(e);
    return t != null && t.constructor ? t.constructor.name : "null prototype";
  }
  function _S(e) {
    return ~-encodeURI(e).split(/%..|./).length;
  }
  function yS(e) {
    return _S(JSON.stringify(e));
  }
  function vS() {
    const e = new WeakSet();
    function t(r) {
      return e.has(r) ? !0 : (e.add(r), !1);
    }
    function n(r) {
      e.delete(r);
    }
    return [t, n];
  }
  function yr(e, t = []) {
    return [e, t];
  }
  function SS(e, t) {
    const [n, r] = e;
    return [n, [...r, t]];
  }
  function qf(e, t) {
    const n = e[1];
    for (const r of n) {
      const i = r[0].type;
      if (t(r, i)) return !0;
    }
    return !1;
  }
  function Nu(e) {
    const t = Co(j);
    return t.encodePolyfill ? t.encodePolyfill(e) : new TextEncoder().encode(e);
  }
  function ES(e) {
    const [t, n] = e;
    let r = JSON.stringify(t);
    function i(s) {
      typeof r == "string"
        ? (r = typeof s == "string" ? r + s : [Nu(r), s])
        : r.push(typeof s == "string" ? Nu(s) : s);
    }
    for (const s of n) {
      const [o, a] = s;
      if (
        (i(`
${JSON.stringify(o)}
`),
        typeof a == "string" || a instanceof Uint8Array)
      )
        i(a);
      else {
        let u;
        try {
          u = JSON.stringify(a);
        } catch {
          u = JSON.stringify(ct(a));
        }
        i(u);
      }
    }
    return typeof r == "string" ? r : TS(r);
  }
  function TS(e) {
    const t = e.reduce((i, s) => i + s.length, 0),
      n = new Uint8Array(t);
    let r = 0;
    for (const i of e) (n.set(i, r), (r += i.length));
    return n;
  }
  function wS(e) {
    const t = typeof e.data == "string" ? Nu(e.data) : e.data;
    return [
      {
        type: "attachment",
        length: t.length,
        filename: e.filename,
        content_type: e.contentType,
        attachment_type: e.attachmentType,
      },
      t,
    ];
  }
  const kS = {
    session: "session",
    sessions: "session",
    attachment: "attachment",
    transaction: "transaction",
    event: "error",
    client_report: "internal",
    user_report: "default",
    profile: "profile",
    profile_chunk: "profile",
    replay_event: "replay",
    replay_recording: "replay",
    check_in: "monitor",
    feedback: "feedback",
    span: "span",
    raw_security: "security",
    log: "log_item",
    metric: "metric",
    trace_metric: "metric",
  };
  function Qf(e) {
    return kS[e];
  }
  function Nm(e) {
    if (!(e != null && e.sdk)) return;
    const { name: t, version: n } = e.sdk;
    return { name: t, version: n };
  }
  function IS(e, t, n, r) {
    var s;
    const i =
      (s = e.sdkProcessingMetadata) == null ? void 0 : s.dynamicSamplingContext;
    return {
      event_id: e.event_id,
      sent_at: new Date().toISOString(),
      ...(t && { sdk: t }),
      ...(!!n && r && { dsn: _r(r) }),
      ...(i && { trace: i }),
    };
  }
  function NS(e, t) {
    var r, i, s, o;
    if (!t) return e;
    const n = e.sdk || {};
    return (
      (e.sdk = {
        ...n,
        name: n.name || t.name,
        version: n.version || t.version,
        integrations: [
          ...(((r = e.sdk) == null ? void 0 : r.integrations) || []),
          ...(t.integrations || []),
        ],
        packages: [
          ...(((i = e.sdk) == null ? void 0 : i.packages) || []),
          ...(t.packages || []),
        ],
        settings:
          ((s = e.sdk) != null && s.settings) || t.settings
            ? { ...((o = e.sdk) == null ? void 0 : o.settings), ...t.settings }
            : void 0,
      }),
      e
    );
  }
  function CS(e, t, n, r) {
    const i = Nm(n),
      s = {
        sent_at: new Date().toISOString(),
        ...(i && { sdk: i }),
        ...(!!r && t && { dsn: _r(t) }),
      },
      o =
        "aggregates" in e
          ? [{ type: "sessions" }, e]
          : [{ type: "session" }, e.toJSON()];
    return yr(s, [o]);
  }
  function RS(e, t, n, r) {
    const i = Nm(n),
      s = e.type && e.type !== "replay_event" ? e.type : "event";
    NS(e, n == null ? void 0 : n.sdk);
    const o = IS(e, i, r, t);
    return (delete e.sdkProcessingMetadata, yr(o, [[{ type: s }, e]]));
  }
  const ya = 0,
    Jf = 1,
    Zf = 2;
  function Do(e) {
    return new Cm((t) => {
      t(e);
    });
  }
  function Zl(e) {
    return new Cm((t, n) => {
      n(e);
    });
  }
  let Cm = class Cu {
    constructor(t) {
      ((this._state = ya), (this._handlers = []), this._runExecutor(t));
    }
    then(t, n) {
      return new Cu((r, i) => {
        (this._handlers.push([
          !1,
          (s) => {
            if (!t) r(s);
            else
              try {
                r(t(s));
              } catch (o) {
                i(o);
              }
          },
          (s) => {
            if (!n) i(s);
            else
              try {
                r(n(s));
              } catch (o) {
                i(o);
              }
          },
        ]),
          this._executeHandlers());
      });
    }
    catch(t) {
      return this.then((n) => n, t);
    }
    finally(t) {
      return new Cu((n, r) => {
        let i, s;
        return this.then(
          (o) => {
            ((s = !1), (i = o), t && t());
          },
          (o) => {
            ((s = !0), (i = o), t && t());
          },
        ).then(() => {
          if (s) {
            r(i);
            return;
          }
          n(i);
        });
      });
    }
    _executeHandlers() {
      if (this._state === ya) return;
      const t = this._handlers.slice();
      ((this._handlers = []),
        t.forEach((n) => {
          n[0] ||
            (this._state === Jf && n[1](this._value),
            this._state === Zf && n[2](this._value),
            (n[0] = !0));
        }));
    }
    _runExecutor(t) {
      const n = (s, o) => {
          if (this._state === ya) {
            if (Ni(o)) {
              o.then(r, i);
              return;
            }
            ((this._state = s), (this._value = o), this._executeHandlers());
          }
        },
        r = (s) => {
          n(Jf, s);
        },
        i = (s) => {
          n(Zf, s);
        };
      try {
        t(r, i);
      } catch (s) {
        i(s);
      }
    }
  };
  function xS(e, t, n, r = 0) {
    try {
      const i = Ru(t, n, e, r);
      return Ni(i) ? i : Do(i);
    } catch (i) {
      return Zl(i);
    }
  }
  function Ru(e, t, n, r) {
    const i = n[r];
    if (!e || !i) return e;
    const s = i({ ...e }, t);
    return (
      D &&
        s === null &&
        x.log(`Event processor "${i.id || "?"}" dropped event`),
      Ni(s) ? s.then((o) => Ru(o, t, n, r + 1)) : Ru(s, t, n, r + 1)
    );
  }
  function PS(e, t) {
    const {
      fingerprint: n,
      span: r,
      breadcrumbs: i,
      sdkProcessingMetadata: s,
    } = t;
    (OS(e, t), r && MS(e, r), AS(e, n), DS(e, i), LS(e, s));
  }
  function ed(e, t) {
    const {
      extra: n,
      tags: r,
      user: i,
      contexts: s,
      level: o,
      sdkProcessingMetadata: a,
      breadcrumbs: u,
      fingerprint: l,
      eventProcessors: c,
      attachments: f,
      propagationContext: d,
      transactionName: m,
      span: _,
    } = t;
    (is(e, "extra", n),
      is(e, "tags", r),
      is(e, "user", i),
      is(e, "contexts", s),
      (e.sdkProcessingMetadata = Ri(e.sdkProcessingMetadata, a, 2)),
      o && (e.level = o),
      m && (e.transactionName = m),
      _ && (e.span = _),
      u.length && (e.breadcrumbs = [...e.breadcrumbs, ...u]),
      l.length && (e.fingerprint = [...e.fingerprint, ...l]),
      c.length && (e.eventProcessors = [...e.eventProcessors, ...c]),
      f.length && (e.attachments = [...e.attachments, ...f]),
      (e.propagationContext = { ...e.propagationContext, ...d }));
  }
  function is(e, t, n) {
    e[t] = Ri(e[t], n, 1);
  }
  function OS(e, t) {
    const {
      extra: n,
      tags: r,
      user: i,
      contexts: s,
      level: o,
      transactionName: a,
    } = t;
    (Object.keys(n).length && (e.extra = { ...n, ...e.extra }),
      Object.keys(r).length && (e.tags = { ...r, ...e.tags }),
      Object.keys(i).length && (e.user = { ...i, ...e.user }),
      Object.keys(s).length && (e.contexts = { ...s, ...e.contexts }),
      o && (e.level = o),
      a && e.type !== "transaction" && (e.transaction = a));
  }
  function DS(e, t) {
    const n = [...(e.breadcrumbs || []), ...t];
    e.breadcrumbs = n.length ? n : void 0;
  }
  function LS(e, t) {
    e.sdkProcessingMetadata = { ...e.sdkProcessingMetadata, ...t };
  }
  function MS(e, t) {
    ((e.contexts = { trace: nS(t), ...e.contexts }),
      (e.sdkProcessingMetadata = {
        dynamicSamplingContext: hS(t),
        ...e.sdkProcessingMetadata,
      }));
    const n = wm(t),
      r = Ql(n).description;
    r && !e.transaction && e.type === "transaction" && (e.transaction = r);
  }
  function AS(e, t) {
    ((e.fingerprint = e.fingerprint
      ? Array.isArray(e.fingerprint)
        ? e.fingerprint
        : [e.fingerprint]
      : []),
      t && (e.fingerprint = e.fingerprint.concat(t)),
      e.fingerprint.length || delete e.fingerprint);
  }
  let ut, td, nd, Ct;
  function $S(e) {
    const t = j._sentryDebugIds,
      n = j._debugIds;
    if (!t && !n) return {};
    const r = t ? Object.keys(t) : [],
      i = n ? Object.keys(n) : [];
    if (Ct && r.length === td && i.length === nd) return Ct;
    ((td = r.length), (nd = i.length), (Ct = {}), ut || (ut = {}));
    const s = (o, a) => {
      for (const u of o) {
        const l = a[u],
          c = ut == null ? void 0 : ut[u];
        if (c && Ct && l) ((Ct[c[0]] = l), ut && (ut[u] = [c[0], l]));
        else if (l) {
          const f = e(u);
          for (let d = f.length - 1; d >= 0; d--) {
            const m = f[d],
              _ = m == null ? void 0 : m.filename;
            if (_ && Ct && ut) {
              ((Ct[_] = l), (ut[u] = [_, l]));
              break;
            }
          }
        }
      }
    };
    return (t && s(r, t), n && s(i, n), Ct);
  }
  function FS(e, t, n, r, i, s) {
    const { normalizeDepth: o = 3, normalizeMaxBreadth: a = 1e3 } = e,
      u = {
        ...t,
        event_id: t.event_id || n.event_id || je(),
        timestamp: t.timestamp || Ci(),
      },
      l = n.integrations || e.integrations.map((C) => C.name);
    (bS(u, e),
      zS(u, l),
      i && i.emit("applyFrameMetadata", t),
      t.type === void 0 && US(u, e.stackParser));
    const c = BS(r, n.captureContext);
    n.mechanism && ir(u, n.mechanism);
    const f = i ? i.getEventProcessors() : [],
      d = Dv().getScopeData();
    if (s) {
      const C = s.getScopeData();
      ed(d, C);
    }
    if (c) {
      const C = c.getScopeData();
      ed(d, C);
    }
    const m = [...(n.attachments || []), ...d.attachments];
    (m.length && (n.attachments = m), PS(u, d));
    const _ = [...f, ...d.eventProcessors];
    return xS(_, u, n).then(
      (C) => (C && jS(C), typeof o == "number" && o > 0 ? HS(C, o, a) : C),
    );
  }
  function bS(e, t) {
    var a, u;
    const { environment: n, release: r, dist: i, maxValueLength: s } = t;
    ((e.environment = e.environment || n || Jl),
      !e.release && r && (e.release = r),
      !e.dist && i && (e.dist = i));
    const o = e.request;
    (o != null && o.url && s && (o.url = Eu(o.url, s)),
      s &&
        ((u = (a = e.exception) == null ? void 0 : a.values) == null ||
          u.forEach((l) => {
            l.value && (l.value = Eu(l.value, s));
          })));
  }
  function US(e, t) {
    var r, i;
    const n = $S(t);
    (i = (r = e.exception) == null ? void 0 : r.values) == null ||
      i.forEach((s) => {
        var o, a;
        (a = (o = s.stacktrace) == null ? void 0 : o.frames) == null ||
          a.forEach((u) => {
            u.filename && (u.debug_id = n[u.filename]);
          });
      });
  }
  function jS(e) {
    var r, i;
    const t = {};
    if (
      ((i = (r = e.exception) == null ? void 0 : r.values) == null ||
        i.forEach((s) => {
          var o, a;
          (a = (o = s.stacktrace) == null ? void 0 : o.frames) == null ||
            a.forEach((u) => {
              u.debug_id &&
                (u.abs_path
                  ? (t[u.abs_path] = u.debug_id)
                  : u.filename && (t[u.filename] = u.debug_id),
                delete u.debug_id);
            });
        }),
      Object.keys(t).length === 0)
    )
      return;
    ((e.debug_meta = e.debug_meta || {}),
      (e.debug_meta.images = e.debug_meta.images || []));
    const n = e.debug_meta.images;
    Object.entries(t).forEach(([s, o]) => {
      n.push({ type: "sourcemap", code_file: s, debug_id: o });
    });
  }
  function zS(e, t) {
    t.length > 0 &&
      ((e.sdk = e.sdk || {}),
      (e.sdk.integrations = [...(e.sdk.integrations || []), ...t]));
  }
  function HS(e, t, n) {
    var i, s;
    if (!e) return null;
    const r = {
      ...e,
      ...(e.breadcrumbs && {
        breadcrumbs: e.breadcrumbs.map((o) => ({
          ...o,
          ...(o.data && { data: ct(o.data, t, n) }),
        })),
      }),
      ...(e.user && { user: ct(e.user, t, n) }),
      ...(e.contexts && { contexts: ct(e.contexts, t, n) }),
      ...(e.extra && { extra: ct(e.extra, t, n) }),
    };
    return (
      (i = e.contexts) != null &&
        i.trace &&
        r.contexts &&
        ((r.contexts.trace = e.contexts.trace),
        e.contexts.trace.data &&
          (r.contexts.trace.data = ct(e.contexts.trace.data, t, n))),
      e.spans &&
        (r.spans = e.spans.map((o) => ({
          ...o,
          ...(o.data && { data: ct(o.data, t, n) }),
        }))),
      (s = e.contexts) != null &&
        s.flags &&
        r.contexts &&
        (r.contexts.flags = ct(e.contexts.flags, 3, n)),
      r
    );
  }
  function BS(e, t) {
    if (!t) return e;
    const n = e ? e.clone() : new vn();
    return (n.update(t), n);
  }
  function WS(e) {
    if (e)
      return GS(e) ? { captureContext: e } : YS(e) ? { captureContext: e } : e;
  }
  function GS(e) {
    return e instanceof vn || typeof e == "function";
  }
  const VS = [
    "user",
    "level",
    "extra",
    "contexts",
    "tags",
    "fingerprint",
    "propagationContext",
  ];
  function YS(e) {
    return Object.keys(e).some((t) => VS.includes(t));
  }
  function xi(e, t) {
    return It().captureException(e, WS(t));
  }
  function Rm(e, t) {
    return It().captureEvent(e, t);
  }
  function KS(e, t) {
    Nn().setContext(e, t);
  }
  function XS() {
    return Nn().lastEventId();
  }
  function rd(e) {
    const t = Nn(),
      n = It(),
      { userAgent: r } = j.navigator || {},
      i = Tv({
        user: n.getUser() || t.getUser(),
        ...(r && { userAgent: r }),
        ...e,
      }),
      s = t.getSession();
    return (
      (s == null ? void 0 : s.status) === "ok" && sr(s, { status: "exited" }),
      xm(),
      t.setSession(i),
      i
    );
  }
  function xm() {
    const e = Nn(),
      n = It().getSession() || e.getSession();
    (n && wv(n), Pm(), e.setSession());
  }
  function Pm() {
    const e = Nn(),
      t = pe(),
      n = e.getSession();
    n && t && t.captureSession(n);
  }
  function id(e = !1) {
    if (e) {
      xm();
      return;
    }
    Pm();
  }
  const qS = "7";
  function Om(e) {
    const t = e.protocol ? `${e.protocol}:` : "",
      n = e.port ? `:${e.port}` : "";
    return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`;
  }
  function QS(e) {
    return `${Om(e)}${e.projectId}/envelope/`;
  }
  function JS(e, t) {
    const n = { sentry_version: qS };
    return (
      e.publicKey && (n.sentry_key = e.publicKey),
      t && (n.sentry_client = `${t.name}/${t.version}`),
      new URLSearchParams(n).toString()
    );
  }
  function ZS(e, t, n) {
    return t || `${QS(e)}?${JS(e, n)}`;
  }
  function eE(e, t) {
    const n = Em(e);
    if (!n) return "";
    const r = `${Om(n)}embed/error-page/`;
    let i = `dsn=${_r(n)}`;
    for (const s in t)
      if (s !== "dsn" && s !== "onClose")
        if (s === "user") {
          const o = t.user;
          if (!o) continue;
          (o.name && (i += `&name=${encodeURIComponent(o.name)}`),
            o.email && (i += `&email=${encodeURIComponent(o.email)}`));
        } else i += `&${encodeURIComponent(s)}=${encodeURIComponent(t[s])}`;
    return `${r}?${i}`;
  }
  const sd = [];
  function tE(e) {
    const t = {};
    return (
      e.forEach((n) => {
        const { name: r } = n,
          i = t[r];
        (i && !i.isDefaultInstance && n.isDefaultInstance) || (t[r] = n);
      }),
      Object.values(t)
    );
  }
  function nE(e) {
    const t = e.defaultIntegrations || [],
      n = e.integrations;
    t.forEach((i) => {
      i.isDefaultInstance = !0;
    });
    let r;
    if (Array.isArray(n)) r = [...t, ...n];
    else if (typeof n == "function") {
      const i = n(t);
      r = Array.isArray(i) ? i : [i];
    } else r = t;
    return tE(r);
  }
  function rE(e, t) {
    const n = {};
    return (
      t.forEach((r) => {
        r && Dm(e, r, n);
      }),
      n
    );
  }
  function od(e, t) {
    for (const n of t) n != null && n.afterAllSetup && n.afterAllSetup(e);
  }
  function Dm(e, t, n) {
    if (n[t.name]) {
      D &&
        x.log(
          `Integration skipped because it was already installed: ${t.name}`,
        );
      return;
    }
    if (
      ((n[t.name] = t),
      !sd.includes(t.name) &&
        typeof t.setupOnce == "function" &&
        (t.setupOnce(), sd.push(t.name)),
      t.setup && typeof t.setup == "function" && t.setup(e),
      typeof t.preprocessEvent == "function")
    ) {
      const r = t.preprocessEvent.bind(t);
      e.on("preprocessEvent", (i, s) => r(i, s, e));
    }
    if (typeof t.processEvent == "function") {
      const r = t.processEvent.bind(t),
        i = Object.assign((s, o) => r(s, o, e), { id: t.name });
      e.addEventProcessor(i);
    }
    D && x.log(`Integration installed: ${t.name}`);
  }
  function iE(e) {
    return [
      {
        type: "log",
        item_count: e.length,
        content_type: "application/vnd.sentry.items.log+json",
      },
      { items: e },
    ];
  }
  function sE(e, t, n, r) {
    const i = {};
    return (
      t != null &&
        t.sdk &&
        (i.sdk = { name: t.sdk.name, version: t.sdk.version }),
      n && r && (i.dsn = _r(r)),
      yr(i, [iE(e)])
    );
  }
  function Lm(e, t) {
    const n = t ?? oE(e) ?? [];
    if (n.length === 0) return;
    const r = e.getOptions(),
      i = sE(n, r._metadata, r.tunnel, e.getDsn());
    (Mm().set(e, []), e.emit("flushLogs"), e.sendEnvelope(i));
  }
  function oE(e) {
    return Mm().get(e);
  }
  function Mm() {
    return hr("clientToLogBufferMap", () => new WeakMap());
  }
  function aE(e) {
    return [
      {
        type: "trace_metric",
        item_count: e.length,
        content_type: "application/vnd.sentry.items.trace-metric+json",
      },
      { items: e },
    ];
  }
  function uE(e, t, n, r) {
    const i = {};
    return (
      t != null &&
        t.sdk &&
        (i.sdk = { name: t.sdk.name, version: t.sdk.version }),
      n && r && (i.dsn = _r(r)),
      yr(i, [aE(e)])
    );
  }
  function Am(e, t) {
    const n = t ?? lE(e) ?? [];
    if (n.length === 0) return;
    const r = e.getOptions(),
      i = uE(n, r._metadata, r.tunnel, e.getDsn());
    ($m().set(e, []), e.emit("flushMetrics"), e.sendEnvelope(i));
  }
  function lE(e) {
    return $m().get(e);
  }
  function $m() {
    return hr("clientToMetricBufferMap", () => new WeakMap());
  }
  const ec = Symbol.for("SentryBufferFullError");
  function tc(e = 100) {
    const t = new Set();
    function n() {
      return t.size < e;
    }
    function r(o) {
      t.delete(o);
    }
    function i(o) {
      if (!n()) return Zl(ec);
      const a = o();
      return (
        t.add(a),
        a.then(
          () => r(a),
          () => r(a),
        ),
        a
      );
    }
    function s(o) {
      if (!t.size) return Do(!0);
      const a = Promise.allSettled(Array.from(t)).then(() => !0);
      if (!o) return a;
      const u = [a, new Promise((l) => setTimeout(() => l(!1), o))];
      return Promise.race(u);
    }
    return {
      get $() {
        return Array.from(t);
      },
      add: i,
      drain: s,
    };
  }
  const cE = 60 * 1e3;
  function fE(e, t = Date.now()) {
    const n = parseInt(`${e}`, 10);
    if (!isNaN(n)) return n * 1e3;
    const r = Date.parse(`${e}`);
    return isNaN(r) ? cE : r - t;
  }
  function dE(e, t) {
    return e[t] || e.all || 0;
  }
  function pE(e, t, n = Date.now()) {
    return dE(e, t) > n;
  }
  function hE(e, { statusCode: t, headers: n }, r = Date.now()) {
    const i = { ...e },
      s = n == null ? void 0 : n["x-sentry-rate-limits"],
      o = n == null ? void 0 : n["retry-after"];
    if (s)
      for (const a of s.trim().split(",")) {
        const [u, l, , , c] = a.split(":", 5),
          f = parseInt(u, 10),
          d = (isNaN(f) ? 60 : f) * 1e3;
        if (!l) i.all = r + d;
        else
          for (const m of l.split(";"))
            m === "metric_bucket"
              ? (!c || c.split(";").includes("custom")) && (i[m] = r + d)
              : (i[m] = r + d);
      }
    else o ? (i.all = r + fE(o, r)) : t === 429 && (i.all = r + 60 * 1e3);
    return i;
  }
  const Fm = 64;
  function mE(e, t, n = tc(e.bufferSize || Fm)) {
    let r = {};
    const i = (o) => n.drain(o);
    function s(o) {
      const a = [];
      if (
        (qf(o, (f, d) => {
          const m = Qf(d);
          pE(r, m) ? e.recordDroppedEvent("ratelimit_backoff", m) : a.push(f);
        }),
        a.length === 0)
      )
        return Promise.resolve({});
      const u = yr(o[0], a),
        l = (f) => {
          qf(u, (d, m) => {
            e.recordDroppedEvent(f, Qf(m));
          });
        },
        c = () =>
          t({ body: ES(u) }).then(
            (f) => (
              f.statusCode !== void 0 &&
                (f.statusCode < 200 || f.statusCode >= 300) &&
                D &&
                x.warn(
                  `Sentry responded with status code ${f.statusCode} to sent event.`,
                ),
              (r = hE(r, f)),
              f
            ),
            (f) => {
              throw (
                l("network_error"),
                D && x.error("Encountered error running transport request:", f),
                f
              );
            },
          );
      return n.add(c).then(
        (f) => f,
        (f) => {
          if (f === ec)
            return (
              D && x.error("Skipped sending event because buffer is full."),
              l("queue_overflow"),
              Promise.resolve({})
            );
          throw f;
        },
      );
    }
    return { send: s, flush: i };
  }
  function gE(e, t, n) {
    const r = [
      { type: "client_report" },
      { timestamp: Ci(), discarded_events: e },
    ];
    return yr(t ? { dsn: t } : {}, [r]);
  }
  function bm(e) {
    const t = [];
    e.message && t.push(e.message);
    try {
      const n = e.exception.values[e.exception.values.length - 1];
      n != null &&
        n.value &&
        (t.push(n.value), n.type && t.push(`${n.type}: ${n.value}`));
    } catch {}
    return t;
  }
  function _E(e) {
    var u;
    const {
      trace_id: t,
      parent_span_id: n,
      span_id: r,
      status: i,
      origin: s,
      data: o,
      op: a,
    } = ((u = e.contexts) == null ? void 0 : u.trace) ?? {};
    return {
      data: o ?? {},
      description: e.transaction,
      op: a,
      parent_span_id: n,
      span_id: r ?? "",
      start_timestamp: e.start_timestamp ?? 0,
      status: i,
      timestamp: e.timestamp,
      trace_id: t ?? "",
      origin: s,
      profile_id: o == null ? void 0 : o[_m],
      exclusive_time: o == null ? void 0 : o[ym],
      measurements: e.measurements,
      is_segment: !0,
    };
  }
  function yE(e) {
    return {
      type: "transaction",
      timestamp: e.timestamp,
      start_timestamp: e.start_timestamp,
      transaction: e.description,
      contexts: {
        trace: {
          trace_id: e.trace_id,
          span_id: e.span_id,
          parent_span_id: e.parent_span_id,
          op: e.op,
          status: e.status,
          origin: e.origin,
          data: {
            ...e.data,
            ...(e.profile_id && { [_m]: e.profile_id }),
            ...(e.exclusive_time && { [ym]: e.exclusive_time }),
          },
        },
      },
      measurements: e.measurements,
    };
  }
  const ad = "Not capturing exception because it's already been captured.",
    ud = "Discarded session because of missing or non-string release",
    Um = Symbol.for("SentryInternalError"),
    jm = Symbol.for("SentryDoNotSendEventError"),
    vE = 5e3;
  function xs(e) {
    return { message: e, [Um]: !0 };
  }
  function va(e) {
    return { message: e, [jm]: !0 };
  }
  function ld(e) {
    return !!e && typeof e == "object" && Um in e;
  }
  function cd(e) {
    return !!e && typeof e == "object" && jm in e;
  }
  function fd(e, t, n, r, i) {
    let s = 0,
      o,
      a = !1;
    (e.on(n, () => {
      ((s = 0), clearTimeout(o), (a = !1));
    }),
      e.on(t, (u) => {
        ((s += r(u)),
          s >= 8e5
            ? i(e)
            : a ||
              ((a = !0),
              (o = setTimeout(() => {
                i(e);
              }, vE))));
      }),
      e.on("flush", () => {
        i(e);
      }));
  }
  class SE {
    constructor(t) {
      var r, i, s;
      if (
        ((this._options = t),
        (this._integrations = {}),
        (this._numProcessing = 0),
        (this._outcomes = {}),
        (this._hooks = {}),
        (this._eventProcessors = []),
        (this._promiseBuffer = tc(
          ((r = t.transportOptions) == null ? void 0 : r.bufferSize) ?? Fm,
        )),
        t.dsn
          ? (this._dsn = Em(t.dsn))
          : D && x.warn("No DSN provided, client will not send events."),
        this._dsn)
      ) {
        const o = ZS(
          this._dsn,
          t.tunnel,
          t._metadata ? t._metadata.sdk : void 0,
        );
        this._transport = t.transport({
          tunnel: this._options.tunnel,
          recordDroppedEvent: this.recordDroppedEvent.bind(this),
          ...t.transportOptions,
          url: o,
        });
      }
      ((this._options.enableLogs =
        this._options.enableLogs ??
        ((i = this._options._experiments) == null ? void 0 : i.enableLogs)),
        this._options.enableLogs &&
          fd(this, "afterCaptureLog", "flushLogs", kE, Lm),
        (this._options.enableMetrics ??
          ((s = this._options._experiments) == null
            ? void 0
            : s.enableMetrics) ??
          !0) &&
          fd(this, "afterCaptureMetric", "flushMetrics", wE, Am));
    }
    captureException(t, n, r) {
      const i = je();
      if (Ff(t)) return (D && x.log(ad), i);
      const s = { event_id: i, ...n };
      return (
        this._process(
          () =>
            this.eventFromException(t, s)
              .then((o) => this._captureEvent(o, s, r))
              .then((o) => o),
          "error",
        ),
        s.event_id
      );
    }
    captureMessage(t, n, r, i) {
      const s = { event_id: je(), ...r },
        o = Gl(t) ? t : String(t),
        a = xo(t),
        u = a ? this.eventFromMessage(o, n, s) : this.eventFromException(t, s);
      return (
        this._process(
          () => u.then((l) => this._captureEvent(l, s, i)),
          a ? "unknown" : "error",
        ),
        s.event_id
      );
    }
    captureEvent(t, n, r) {
      const i = je();
      if (n != null && n.originalException && Ff(n.originalException))
        return (D && x.log(ad), i);
      const s = { event_id: i, ...n },
        o = t.sdkProcessingMetadata || {},
        a = o.capturedSpanScope,
        u = o.capturedSpanIsolationScope,
        l = dd(t.type);
      return (
        this._process(() => this._captureEvent(t, s, a || r, u), l),
        s.event_id
      );
    }
    captureSession(t) {
      (this.sendSession(t), sr(t, { init: !1 }));
    }
    getDsn() {
      return this._dsn;
    }
    getOptions() {
      return this._options;
    }
    getSdkMetadata() {
      return this._options._metadata;
    }
    getTransport() {
      return this._transport;
    }
    async flush(t) {
      const n = this._transport;
      if (!n) return !0;
      this.emit("flush");
      const r = await this._isClientDoneProcessing(t),
        i = await n.flush(t);
      return r && i;
    }
    async close(t) {
      const n = await this.flush(t);
      return ((this.getOptions().enabled = !1), this.emit("close"), n);
    }
    getEventProcessors() {
      return this._eventProcessors;
    }
    addEventProcessor(t) {
      this._eventProcessors.push(t);
    }
    init() {
      (this._isEnabled() ||
        this._options.integrations.some(({ name: t }) =>
          t.startsWith("Spotlight"),
        )) &&
        this._setupIntegrations();
    }
    getIntegrationByName(t) {
      return this._integrations[t];
    }
    addIntegration(t) {
      const n = this._integrations[t.name];
      (Dm(this, t, this._integrations), n || od(this, [t]));
    }
    sendEvent(t, n = {}) {
      this.emit("beforeSendEvent", t, n);
      let r = RS(t, this._dsn, this._options._metadata, this._options.tunnel);
      for (const i of n.attachments || []) r = SS(r, wS(i));
      this.sendEnvelope(r).then((i) => this.emit("afterSendEvent", t, i));
    }
    sendSession(t) {
      const { release: n, environment: r = Jl } = this._options;
      if ("aggregates" in t) {
        const s = t.attrs || {};
        if (!s.release && !n) {
          D && x.warn(ud);
          return;
        }
        ((s.release = s.release || n),
          (s.environment = s.environment || r),
          (t.attrs = s));
      } else {
        if (!t.release && !n) {
          D && x.warn(ud);
          return;
        }
        ((t.release = t.release || n), (t.environment = t.environment || r));
      }
      this.emit("beforeSendSession", t);
      const i = CS(t, this._dsn, this._options._metadata, this._options.tunnel);
      this.sendEnvelope(i);
    }
    recordDroppedEvent(t, n, r = 1) {
      if (this._options.sendClientReports) {
        const i = `${t}:${n}`;
        (D && x.log(`Recording outcome: "${i}"${r > 1 ? ` (${r} times)` : ""}`),
          (this._outcomes[i] = (this._outcomes[i] || 0) + r));
      }
    }
    on(t, n) {
      const r = (this._hooks[t] = this._hooks[t] || new Set()),
        i = (...s) => n(...s);
      return (
        r.add(i),
        () => {
          r.delete(i);
        }
      );
    }
    emit(t, ...n) {
      const r = this._hooks[t];
      r && r.forEach((i) => i(...n));
    }
    async sendEnvelope(t) {
      if (
        (this.emit("beforeEnvelope", t), this._isEnabled() && this._transport)
      )
        try {
          return await this._transport.send(t);
        } catch (n) {
          return (D && x.error("Error while sending envelope:", n), {});
        }
      return (D && x.error("Transport disabled"), {});
    }
    _setupIntegrations() {
      const { integrations: t } = this._options;
      ((this._integrations = rE(this, t)), od(this, t));
    }
    _updateSessionFromEvent(t, n) {
      var u, l;
      let r = n.level === "fatal",
        i = !1;
      const s = (u = n.exception) == null ? void 0 : u.values;
      if (s) {
        ((i = !0), (r = !1));
        for (const c of s)
          if (((l = c.mechanism) == null ? void 0 : l.handled) === !1) {
            r = !0;
            break;
          }
      }
      const o = t.status === "ok";
      ((o && t.errors === 0) || (o && r)) &&
        (sr(t, {
          ...(r && { status: "crashed" }),
          errors: t.errors || Number(i || r),
        }),
        this.captureSession(t));
    }
    async _isClientDoneProcessing(t) {
      let n = 0;
      for (; !t || n < t; ) {
        if ((await new Promise((r) => setTimeout(r, 1)), !this._numProcessing))
          return !0;
        n++;
      }
      return !1;
    }
    _isEnabled() {
      return this.getOptions().enabled !== !1 && this._transport !== void 0;
    }
    _prepareEvent(t, n, r, i) {
      const s = this.getOptions(),
        o = Object.keys(this._integrations);
      return (
        !n.integrations && o != null && o.length && (n.integrations = o),
        this.emit("preprocessEvent", t, n),
        t.type || i.setLastEventId(t.event_id || n.event_id),
        FS(s, t, n, r, this, i).then((a) => {
          if (a === null) return a;
          (this.emit("postprocessEvent", a, n),
            (a.contexts = { trace: Lv(r), ...a.contexts }));
          const u = pS(this, r);
          return (
            (a.sdkProcessingMetadata = {
              dynamicSamplingContext: u,
              ...a.sdkProcessingMetadata,
            }),
            a
          );
        })
      );
    }
    _captureEvent(t, n = {}, r = It(), i = Nn()) {
      return (
        D &&
          xu(t) &&
          x.log(`Captured error event \`${bm(t)[0] || "<unknown>"}\``),
        this._processEvent(t, n, r, i).then(
          (s) => s.event_id,
          (s) => {
            D &&
              (cd(s)
                ? x.log(s.message)
                : ld(s)
                  ? x.warn(s.message)
                  : x.warn(s));
          },
        )
      );
    }
    _processEvent(t, n, r, i) {
      const s = this.getOptions(),
        { sampleRate: o } = s,
        a = zm(t),
        u = xu(t),
        c = `before send for type \`${t.type || "error"}\``,
        f = typeof o > "u" ? void 0 : tS(o);
      if (u && typeof f == "number" && Math.random() > f)
        return (
          this.recordDroppedEvent("sample_rate", "error"),
          Zl(
            va(
              `Discarding event because it's not included in the random sample (sampling rate = ${o})`,
            ),
          )
        );
      const d = dd(t.type);
      return this._prepareEvent(t, n, r, i)
        .then((m) => {
          if (m === null)
            throw (
              this.recordDroppedEvent("event_processor", d),
              va("An event processor returned `null`, will not send event.")
            );
          if (n.data && n.data.__sentry__ === !0) return m;
          const y = TE(this, s, m, n);
          return EE(y, c);
        })
        .then((m) => {
          var C;
          if (m === null) {
            if ((this.recordDroppedEvent("before_send", d), a)) {
              const p = 1 + (t.spans || []).length;
              this.recordDroppedEvent("before_send", "span", p);
            }
            throw va(`${c} returned \`null\`, will not send event.`);
          }
          const _ = r.getSession() || i.getSession();
          if ((u && _ && this._updateSessionFromEvent(_, m), a)) {
            const h =
                ((C = m.sdkProcessingMetadata) == null
                  ? void 0
                  : C.spanCountBeforeProcessing) || 0,
              p = m.spans ? m.spans.length : 0,
              g = h - p;
            g > 0 && this.recordDroppedEvent("before_send", "span", g);
          }
          const y = m.transaction_info;
          if (a && y && m.transaction !== t.transaction) {
            const h = "custom";
            m.transaction_info = { ...y, source: h };
          }
          return (this.sendEvent(m, n), m);
        })
        .then(null, (m) => {
          throw cd(m) || ld(m)
            ? m
            : (this.captureException(m, {
                mechanism: { handled: !1, type: "internal" },
                data: { __sentry__: !0 },
                originalException: m,
              }),
              xs(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${m}`));
        });
    }
    _process(t, n) {
      (this._numProcessing++,
        this._promiseBuffer.add(t).then(
          (r) => (this._numProcessing--, r),
          (r) => (
            this._numProcessing--,
            r === ec && this.recordDroppedEvent("queue_overflow", n),
            r
          ),
        ));
    }
    _clearOutcomes() {
      const t = this._outcomes;
      return (
        (this._outcomes = {}),
        Object.entries(t).map(([n, r]) => {
          const [i, s] = n.split(":");
          return { reason: i, category: s, quantity: r };
        })
      );
    }
    _flushOutcomes() {
      D && x.log("Flushing outcomes...");
      const t = this._clearOutcomes();
      if (t.length === 0) {
        D && x.log("No outcomes to send");
        return;
      }
      if (!this._dsn) {
        D && x.log("No dsn provided, will not send outcomes");
        return;
      }
      D && x.log("Sending outcomes:", t);
      const n = gE(t, this._options.tunnel && _r(this._dsn));
      this.sendEnvelope(n);
    }
  }
  function dd(e) {
    return e === "replay_event" ? "replay" : e || "error";
  }
  function EE(e, t) {
    const n = `${t} must return \`null\` or a valid event.`;
    if (Ni(e))
      return e.then(
        (r) => {
          if (!yi(r) && r !== null) throw xs(n);
          return r;
        },
        (r) => {
          throw xs(`${t} rejected with ${r}`);
        },
      );
    if (!yi(e) && e !== null) throw xs(n);
    return e;
  }
  function TE(e, t, n, r) {
    const {
      beforeSend: i,
      beforeSendTransaction: s,
      beforeSendSpan: o,
      ignoreSpans: a,
    } = t;
    let u = n;
    if (xu(u) && i) return i(u, r);
    if (zm(u)) {
      if (o || a) {
        const l = _E(u);
        if (a != null && a.length && Xf(l, a)) return null;
        if (o) {
          const c = o(l);
          c ? (u = Ri(n, yE(c))) : Yf();
        }
        if (u.spans) {
          const c = [],
            f = u.spans;
          for (const m of f) {
            if (a != null && a.length && Xf(m, a)) {
              cS(f, m);
              continue;
            }
            if (o) {
              const _ = o(m);
              _ ? c.push(_) : (Yf(), c.push(m));
            } else c.push(m);
          }
          const d = u.spans.length - c.length;
          (d && e.recordDroppedEvent("before_send", "span", d), (u.spans = c));
        }
      }
      if (s) {
        if (u.spans) {
          const l = u.spans.length;
          u.sdkProcessingMetadata = {
            ...n.sdkProcessingMetadata,
            spanCountBeforeProcessing: l,
          };
        }
        return s(u, r);
      }
    }
    return u;
  }
  function xu(e) {
    return e.type === void 0;
  }
  function zm(e) {
    return e.type === "transaction";
  }
  function wE(e) {
    let t = 0;
    return (e.name && (t += e.name.length * 2), (t += 8), t + Hm(e.attributes));
  }
  function kE(e) {
    let t = 0;
    return (e.message && (t += e.message.length * 2), t + Hm(e.attributes));
  }
  function Hm(e) {
    if (!e) return 0;
    let t = 0;
    return (
      Object.values(e).forEach((n) => {
        Array.isArray(n)
          ? (t += n.length * pd(n[0]))
          : xo(n)
            ? (t += pd(n))
            : (t += 100);
      }),
      t
    );
  }
  function pd(e) {
    return typeof e == "string"
      ? e.length * 2
      : typeof e == "number"
        ? 8
        : typeof e == "boolean"
          ? 4
          : 0;
  }
  function IE(e, t) {
    (t.debug === !0 &&
      (D
        ? x.enable()
        : mr(() => {
            console.warn(
              "[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.",
            );
          })),
      It().update(t.initialScope));
    const r = new e(t);
    return (NE(r), r.init(), r);
  }
  function NE(e) {
    It().setClient(e);
  }
  function Sa(e) {
    if (!e) return {};
    const t = e.match(
      /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/,
    );
    if (!t) return {};
    const n = t[6] || "",
      r = t[8] || "";
    return {
      host: t[4],
      path: t[5],
      protocol: t[2],
      search: n,
      hash: r,
      relative: t[5] + n + r,
    };
  }
  function CE(e) {
    var t;
    "aggregates" in e
      ? ((t = e.attrs) == null ? void 0 : t.ip_address) === void 0 &&
        (e.attrs = { ...e.attrs, ip_address: "{{auto}}" })
      : e.ipAddress === void 0 && (e.ipAddress = "{{auto}}");
  }
  function Bm(e, t, n = [t], r = "npm") {
    const i = e._metadata || {};
    (i.sdk ||
      (i.sdk = {
        name: `sentry.javascript.${t}`,
        packages: n.map((s) => ({ name: `${r}:@sentry/${s}`, version: fn })),
        version: fn,
      }),
      (e._metadata = i));
  }
  const RE = 100;
  function Sn(e, t) {
    const n = pe(),
      r = Nn();
    if (!n) return;
    const { beforeBreadcrumb: i = null, maxBreadcrumbs: s = RE } =
      n.getOptions();
    if (s <= 0) return;
    const a = { timestamp: Ci(), ...e },
      u = i ? mr(() => i(a, t)) : a;
    u !== null &&
      (n.emit && n.emit("beforeAddBreadcrumb", u, t), r.addBreadcrumb(u, s));
  }
  let hd;
  const xE = "FunctionToString",
    md = new WeakMap(),
    PE = () => ({
      name: xE,
      setupOnce() {
        hd = Function.prototype.toString;
        try {
          Function.prototype.toString = function (...e) {
            const t = Kl(this),
              n = md.has(pe()) && t !== void 0 ? t : this;
            return hd.apply(n, e);
          };
        } catch {}
      },
      setup(e) {
        md.set(e, !0);
      },
    }),
    OE = PE,
    DE = [
      /^Script error\.?$/,
      /^Javascript error: Script error\.? on line 0$/,
      /^ResizeObserver loop completed with undelivered notifications.$/,
      /^Cannot redefine property: googletag$/,
      /^Can't find variable: gmo$/,
      /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/,
      `can't redefine non-configurable property "solana"`,
      "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)",
      "Can't find variable: _AutofillCallbackHandler",
      /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/,
      /^Java exception was raised during method invocation$/,
    ],
    LE = "EventFilters",
    ME = (e = {}) => {
      let t;
      return {
        name: LE,
        setup(n) {
          const r = n.getOptions();
          t = gd(e, r);
        },
        processEvent(n, r, i) {
          if (!t) {
            const s = i.getOptions();
            t = gd(e, s);
          }
          return $E(n, t) ? null : n;
        },
      };
    },
    AE = (e = {}) => ({ ...ME(e), name: "InboundFilters" });
  function gd(e = {}, t = {}) {
    return {
      allowUrls: [...(e.allowUrls || []), ...(t.allowUrls || [])],
      denyUrls: [...(e.denyUrls || []), ...(t.denyUrls || [])],
      ignoreErrors: [
        ...(e.ignoreErrors || []),
        ...(t.ignoreErrors || []),
        ...(e.disableErrorDefaults ? [] : DE),
      ],
      ignoreTransactions: [
        ...(e.ignoreTransactions || []),
        ...(t.ignoreTransactions || []),
      ],
    };
  }
  function $E(e, t) {
    if (e.type) {
      if (e.type === "transaction" && bE(e, t.ignoreTransactions))
        return (
          D &&
            x.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${nn(e)}`),
          !0
        );
    } else {
      if (FE(e, t.ignoreErrors))
        return (
          D &&
            x.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${nn(e)}`),
          !0
        );
      if (HE(e))
        return (
          D &&
            x.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${nn(e)}`),
          !0
        );
      if (UE(e, t.denyUrls))
        return (
          D &&
            x.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${nn(e)}.
Url: ${so(e)}`),
          !0
        );
      if (!jE(e, t.allowUrls))
        return (
          D &&
            x.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${nn(e)}.
Url: ${so(e)}`),
          !0
        );
    }
    return !1;
  }
  function FE(e, t) {
    return t != null && t.length ? bm(e).some((n) => Oo(n, t)) : !1;
  }
  function bE(e, t) {
    if (!(t != null && t.length)) return !1;
    const n = e.transaction;
    return n ? Oo(n, t) : !1;
  }
  function UE(e, t) {
    if (!(t != null && t.length)) return !1;
    const n = so(e);
    return n ? Oo(n, t) : !1;
  }
  function jE(e, t) {
    if (!(t != null && t.length)) return !0;
    const n = so(e);
    return n ? Oo(n, t) : !0;
  }
  function zE(e = []) {
    for (let t = e.length - 1; t >= 0; t--) {
      const n = e[t];
      if (n && n.filename !== "<anonymous>" && n.filename !== "[native code]")
        return n.filename || null;
    }
    return null;
  }
  function so(e) {
    var t, n;
    try {
      const r = [...(((t = e.exception) == null ? void 0 : t.values) ?? [])]
          .reverse()
          .find((s) => {
            var o, a, u;
            return (
              ((o = s.mechanism) == null ? void 0 : o.parent_id) === void 0 &&
              ((u = (a = s.stacktrace) == null ? void 0 : a.frames) == null
                ? void 0
                : u.length)
            );
          }),
        i = (n = r == null ? void 0 : r.stacktrace) == null ? void 0 : n.frames;
      return i ? zE(i) : null;
    } catch {
      return (D && x.error(`Cannot extract url for event ${nn(e)}`), null);
    }
  }
  function HE(e) {
    var t, n;
    return (n = (t = e.exception) == null ? void 0 : t.values) != null &&
      n.length
      ? !e.message &&
          !e.exception.values.some(
            (r) => r.stacktrace || (r.type && r.type !== "Error") || r.value,
          )
      : !1;
  }
  function BE(e, t, n, r, i, s) {
    var a;
    if (
      !((a = i.exception) != null && a.values) ||
      !s ||
      !Kt(s.originalException, Error)
    )
      return;
    const o =
      i.exception.values.length > 0
        ? i.exception.values[i.exception.values.length - 1]
        : void 0;
    o &&
      (i.exception.values = Pu(
        e,
        t,
        r,
        s.originalException,
        n,
        i.exception.values,
        o,
        0,
      ));
  }
  function Pu(e, t, n, r, i, s, o, a) {
    if (s.length >= n + 1) return s;
    let u = [...s];
    if (Kt(r[i], Error)) {
      _d(o, a);
      const l = e(t, r[i]),
        c = u.length;
      (yd(l, i, c, a), (u = Pu(e, t, n, r[i], i, [l, ...u], l, c)));
    }
    return (
      Array.isArray(r.errors) &&
        r.errors.forEach((l, c) => {
          if (Kt(l, Error)) {
            _d(o, a);
            const f = e(t, l),
              d = u.length;
            (yd(f, `errors[${c}]`, d, a),
              (u = Pu(e, t, n, l, i, [f, ...u], f, d)));
          }
        }),
      u
    );
  }
  function _d(e, t) {
    e.mechanism = {
      handled: !0,
      type: "auto.core.linked_errors",
      ...e.mechanism,
      ...(e.type === "AggregateError" && { is_exception_group: !0 }),
      exception_id: t,
    };
  }
  function yd(e, t, n, r) {
    e.mechanism = {
      handled: !0,
      ...e.mechanism,
      type: "chained",
      source: t,
      exception_id: n,
      parent_id: r,
    };
  }
  function WE(e) {
    const t = "console";
    (kn(t, e), In(t, GE));
  }
  function GE() {
    "console" in j &&
      Qy.forEach(function (e) {
        e in j.console &&
          Oe(j.console, e, function (t) {
            return (
              (io[e] = t),
              function (...n) {
                Ze("console", { args: n, level: e });
                const i = io[e];
                i == null || i.apply(j.console, n);
              }
            );
          });
      });
  }
  function VE(e) {
    return e === "warn"
      ? "warning"
      : ["fatal", "error", "warning", "log", "info", "debug"].includes(e)
        ? e
        : "log";
  }
  const YE = "Dedupe",
    KE = () => {
      let e;
      return {
        name: YE,
        processEvent(t) {
          if (t.type) return t;
          try {
            if (qE(t, e))
              return (
                D &&
                  x.warn(
                    "Event dropped due to being a duplicate of previously captured event.",
                  ),
                null
              );
          } catch {}
          return (e = t);
        },
      };
    },
    XE = KE;
  function qE(e, t) {
    return t ? !!(QE(e, t) || JE(e, t)) : !1;
  }
  function QE(e, t) {
    const n = e.message,
      r = t.message;
    return !(
      (!n && !r) ||
      (n && !r) ||
      (!n && r) ||
      n !== r ||
      !Gm(e, t) ||
      !Wm(e, t)
    );
  }
  function JE(e, t) {
    const n = vd(t),
      r = vd(e);
    return !(
      !n ||
      !r ||
      n.type !== r.type ||
      n.value !== r.value ||
      !Gm(e, t) ||
      !Wm(e, t)
    );
  }
  function Wm(e, t) {
    let n = Of(e),
      r = Of(t);
    if (!n && !r) return !0;
    if ((n && !r) || (!n && r) || ((n = n), (r = r), r.length !== n.length))
      return !1;
    for (let i = 0; i < r.length; i++) {
      const s = r[i],
        o = n[i];
      if (
        s.filename !== o.filename ||
        s.lineno !== o.lineno ||
        s.colno !== o.colno ||
        s.function !== o.function
      )
        return !1;
    }
    return !0;
  }
  function Gm(e, t) {
    let n = e.fingerprint,
      r = t.fingerprint;
    if (!n && !r) return !0;
    if ((n && !r) || (!n && r)) return !1;
    ((n = n), (r = r));
    try {
      return n.join("") === r.join("");
    } catch {
      return !1;
    }
  }
  function vd(e) {
    var t, n;
    return (n = (t = e.exception) == null ? void 0 : t.values) == null
      ? void 0
      : n[0];
  }
  function Vm(e) {
    if (e !== void 0)
      return e >= 400 && e < 500 ? "warning" : e >= 500 ? "error" : void 0;
  }
  const vi = j;
  function ZE() {
    return "history" in vi && !!vi.history;
  }
  function e0() {
    if (!("fetch" in vi)) return !1;
    try {
      return (new Headers(), new Request("data:,"), new Response(), !0);
    } catch {
      return !1;
    }
  }
  function Ou(e) {
    return (
      e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
    );
  }
  function t0() {
    var n;
    if (typeof EdgeRuntime == "string") return !0;
    if (!e0()) return !1;
    if (Ou(vi.fetch)) return !0;
    let e = !1;
    const t = vi.document;
    if (t && typeof t.createElement == "function")
      try {
        const r = t.createElement("iframe");
        ((r.hidden = !0),
          t.head.appendChild(r),
          (n = r.contentWindow) != null &&
            n.fetch &&
            (e = Ou(r.contentWindow.fetch)),
          t.head.removeChild(r));
      } catch (r) {
        D &&
          x.warn(
            "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
            r,
          );
      }
    return e;
  }
  function n0(e, t) {
    const n = "fetch";
    (kn(n, e), In(n, () => r0(void 0, t)));
  }
  function r0(e, t = !1) {
    (t && !t0()) ||
      Oe(j, "fetch", function (n) {
        return function (...r) {
          const i = new Error(),
            { method: s, url: o } = i0(r),
            a = {
              args: r,
              fetchData: { method: s, url: o },
              startTimestamp: yt() * 1e3,
              virtualError: i,
              headers: s0(r),
            };
          return (
            Ze("fetch", { ...a }),
            n.apply(j, r).then(
              async (u) => (
                Ze("fetch", { ...a, endTimestamp: yt() * 1e3, response: u }),
                u
              ),
              (u) => {
                if (
                  (Ze("fetch", { ...a, endTimestamp: yt() * 1e3, error: u }),
                  Ro(u) &&
                    u.stack === void 0 &&
                    ((u.stack = i.stack), yn(u, "framesToPop", 1)),
                  u instanceof TypeError &&
                    (u.message === "Failed to fetch" ||
                      u.message === "Load failed" ||
                      u.message ===
                        "NetworkError when attempting to fetch resource."))
                )
                  try {
                    const l = new URL(a.fetchData.url);
                    u.message = `${u.message} (${l.host})`;
                  } catch {}
                throw u;
              },
            )
          );
        };
      });
  }
  function Ps(e, t) {
    return !!e && typeof e == "object" && !!e[t];
  }
  function Sd(e) {
    return typeof e == "string"
      ? e
      : e
        ? Ps(e, "url")
          ? e.url
          : e.toString
            ? e.toString()
            : ""
        : "";
  }
  function i0(e) {
    if (e.length === 0) return { method: "GET", url: "" };
    if (e.length === 2) {
      const [n, r] = e;
      return {
        url: Sd(n),
        method: Ps(r, "method")
          ? String(r.method).toUpperCase()
          : cm(n) && Ps(n, "method")
            ? String(n.method).toUpperCase()
            : "GET",
      };
    }
    const t = e[0];
    return {
      url: Sd(t),
      method: Ps(t, "method") ? String(t.method).toUpperCase() : "GET",
    };
  }
  function s0(e) {
    const [t, n] = e;
    try {
      if (typeof n == "object" && n !== null && "headers" in n && n.headers)
        return new Headers(n.headers);
      if (cm(t)) return new Headers(t.headers);
    } catch {}
  }
  function o0() {
    return "npm";
  }
  const G = j;
  let Du = 0;
  function Ym() {
    return Du > 0;
  }
  function a0() {
    (Du++,
      setTimeout(() => {
        Du--;
      }));
  }
  function ar(e, t = {}) {
    function n(i) {
      return typeof i == "function";
    }
    if (!n(e)) return e;
    try {
      const i = e.__sentry_wrapped__;
      if (i) return typeof i == "function" ? i : e;
      if (Kl(e)) return e;
    } catch {
      return e;
    }
    const r = function (...i) {
      try {
        const s = i.map((o) => ar(o, t));
        return e.apply(this, s);
      } catch (s) {
        throw (
          a0(),
          ql((o) => {
            (o.addEventProcessor(
              (a) => (
                t.mechanism && (Tu(a, void 0), ir(a, t.mechanism)),
                (a.extra = { ...a.extra, arguments: i }),
                a
              ),
            ),
              xi(s));
          }),
          s
        );
      }
    };
    try {
      for (const i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i]);
    } catch {}
    (dm(r, e), yn(e, "__sentry_wrapped__", r));
    try {
      Object.getOwnPropertyDescriptor(r, "name").configurable &&
        Object.defineProperty(r, "name", {
          get() {
            return e.name;
          },
        });
    } catch {}
    return r;
  }
  function u0() {
    const e = Yl(),
      { referrer: t } = G.document || {},
      { userAgent: n } = G.navigator || {},
      r = { ...(t && { Referer: t }), ...(n && { "User-Agent": n }) };
    return { url: e, headers: r };
  }
  function nc(e, t) {
    const n = rc(e, t),
      r = { type: p0(t), value: h0(t) };
    return (
      n.length && (r.stacktrace = { frames: n }),
      r.type === void 0 &&
        r.value === "" &&
        (r.value = "Unrecoverable error caught"),
      r
    );
  }
  function l0(e, t, n, r) {
    const i = pe(),
      s = i == null ? void 0 : i.getOptions().normalizeDepth,
      o = v0(t),
      a = { __serialized__: Im(t, s) };
    if (o) return { exception: { values: [nc(e, o)] }, extra: a };
    const u = {
      exception: {
        values: [
          {
            type: Po(t)
              ? t.constructor.name
              : r
                ? "UnhandledRejection"
                : "Error",
            value: _0(t, { isUnhandledRejection: r }),
          },
        ],
      },
      extra: a,
    };
    if (n) {
      const l = rc(e, n);
      l.length && (u.exception.values[0].stacktrace = { frames: l });
    }
    return u;
  }
  function Ea(e, t) {
    return { exception: { values: [nc(e, t)] } };
  }
  function rc(e, t) {
    const n = t.stacktrace || t.stack || "",
      r = f0(t),
      i = d0(t);
    try {
      return e(n, r, i);
    } catch {}
    return [];
  }
  const c0 = /Minified React error #\d+;/i;
  function f0(e) {
    return e && c0.test(e.message) ? 1 : 0;
  }
  function d0(e) {
    return typeof e.framesToPop == "number" ? e.framesToPop : 0;
  }
  function Km(e) {
    return typeof WebAssembly < "u" && typeof WebAssembly.Exception < "u"
      ? e instanceof WebAssembly.Exception
      : !1;
  }
  function p0(e) {
    const t = e == null ? void 0 : e.name;
    return !t && Km(e)
      ? e.message && Array.isArray(e.message) && e.message.length == 2
        ? e.message[0]
        : "WebAssembly.Exception"
      : t;
  }
  function h0(e) {
    const t = e == null ? void 0 : e.message;
    return Km(e)
      ? Array.isArray(e.message) && e.message.length == 2
        ? e.message[1]
        : "wasm exception"
      : t
        ? t.error && typeof t.error.message == "string"
          ? t.error.message
          : t
        : "No error message";
  }
  function m0(e, t, n, r) {
    const i = (n == null ? void 0 : n.syntheticException) || void 0,
      s = ic(e, t, i, r);
    return (
      ir(s),
      (s.level = "error"),
      n != null && n.event_id && (s.event_id = n.event_id),
      Do(s)
    );
  }
  function g0(e, t, n = "info", r, i) {
    const s = (r == null ? void 0 : r.syntheticException) || void 0,
      o = Lu(e, t, s, i);
    return (
      (o.level = n),
      r != null && r.event_id && (o.event_id = r.event_id),
      Do(o)
    );
  }
  function ic(e, t, n, r, i) {
    let s;
    if (um(t) && t.error) return Ea(e, t.error);
    if (Lf(t) || cv(t)) {
      const o = t;
      if ("stack" in t) s = Ea(e, t);
      else {
        const a = o.name || (Lf(o) ? "DOMError" : "DOMException"),
          u = o.message ? `${a}: ${o.message}` : a;
        ((s = Lu(e, u, n, r)), Tu(s, u));
      }
      return (
        "code" in o &&
          (s.tags = { ...s.tags, "DOMException.code": `${o.code}` }),
        s
      );
    }
    return Ro(t)
      ? Ea(e, t)
      : yi(t) || Po(t)
        ? ((s = l0(e, t, n, i)), ir(s, { synthetic: !0 }), s)
        : ((s = Lu(e, t, n, r)), Tu(s, `${t}`), ir(s, { synthetic: !0 }), s);
  }
  function Lu(e, t, n, r) {
    const i = {};
    if (r && n) {
      const s = rc(e, n);
      (s.length &&
        (i.exception = { values: [{ value: t, stacktrace: { frames: s } }] }),
        ir(i, { synthetic: !0 }));
    }
    if (Gl(t)) {
      const { __sentry_template_string__: s, __sentry_template_values__: o } =
        t;
      return ((i.logentry = { message: s, params: o }), i);
    }
    return ((i.message = t), i);
  }
  function _0(e, { isUnhandledRejection: t }) {
    const n = _v(e),
      r = t ? "promise rejection" : "exception";
    return um(e)
      ? `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\``
      : Po(e)
        ? `Event \`${y0(e)}\` (type=${e.type}) captured as ${r}`
        : `Object captured as ${r} with keys: ${n}`;
  }
  function y0(e) {
    try {
      const t = Object.getPrototypeOf(e);
      return t ? t.constructor.name : void 0;
    } catch {}
  }
  function v0(e) {
    for (const t in e)
      if (Object.prototype.hasOwnProperty.call(e, t)) {
        const n = e[t];
        if (n instanceof Error) return n;
      }
  }
  class S0 extends SE {
    constructor(t) {
      var c;
      const n = E0(t),
        r = G.SENTRY_SDK_SOURCE || o0();
      (Bm(n, "browser", ["browser"], r),
        (c = n._metadata) != null &&
          c.sdk &&
          (n._metadata.sdk.settings = {
            infer_ip: n.sendDefaultPii ? "auto" : "never",
            ...n._metadata.sdk.settings,
          }),
        super(n));
      const {
          sendDefaultPii: i,
          sendClientReports: s,
          enableLogs: o,
          _experiments: a,
          enableMetrics: u,
        } = this._options,
        l = u ?? (a == null ? void 0 : a.enableMetrics) ?? !0;
      (G.document &&
        (s || o || l) &&
        G.document.addEventListener("visibilitychange", () => {
          G.document.visibilityState === "hidden" &&
            (s && this._flushOutcomes(), o && Lm(this), l && Am(this));
        }),
        i && this.on("beforeSendSession", CE));
    }
    eventFromException(t, n) {
      return m0(
        this._options.stackParser,
        t,
        n,
        this._options.attachStacktrace,
      );
    }
    eventFromMessage(t, n = "info", r) {
      return g0(
        this._options.stackParser,
        t,
        n,
        r,
        this._options.attachStacktrace,
      );
    }
    _prepareEvent(t, n, r, i) {
      return (
        (t.platform = t.platform || "javascript"),
        super._prepareEvent(t, n, r, i)
      );
    }
  }
  function E0(e) {
    var t;
    return {
      release:
        typeof __SENTRY_RELEASE__ == "string"
          ? __SENTRY_RELEASE__
          : (t = G.SENTRY_RELEASE) == null
            ? void 0
            : t.id,
      sendClientReports: !0,
      parentSpanIsAlwaysRootSpan: !0,
      ...e,
    };
  }
  const T0 = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
    ve = j,
    w0 = 1e3;
  let Ed, Mu, Au;
  function k0(e) {
    const t = "dom";
    (kn(t, e), In(t, I0));
  }
  function I0() {
    if (!ve.document) return;
    const e = Ze.bind(null, "dom"),
      t = Td(e, !0);
    (ve.document.addEventListener("click", t, !1),
      ve.document.addEventListener("keypress", t, !1),
      ["EventTarget", "Node"].forEach((n) => {
        var s, o;
        const i = (s = ve[n]) == null ? void 0 : s.prototype;
        (o = i == null ? void 0 : i.hasOwnProperty) != null &&
          o.call(i, "addEventListener") &&
          (Oe(i, "addEventListener", function (a) {
            return function (u, l, c) {
              if (u === "click" || u == "keypress")
                try {
                  const f = (this.__sentry_instrumentation_handlers__ =
                      this.__sentry_instrumentation_handlers__ || {}),
                    d = (f[u] = f[u] || { refCount: 0 });
                  if (!d.handler) {
                    const m = Td(e);
                    ((d.handler = m), a.call(this, u, m, c));
                  }
                  d.refCount++;
                } catch {}
              return a.call(this, u, l, c);
            };
          }),
          Oe(i, "removeEventListener", function (a) {
            return function (u, l, c) {
              if (u === "click" || u == "keypress")
                try {
                  const f = this.__sentry_instrumentation_handlers__ || {},
                    d = f[u];
                  d &&
                    (d.refCount--,
                    d.refCount <= 0 &&
                      (a.call(this, u, d.handler, c),
                      (d.handler = void 0),
                      delete f[u]),
                    Object.keys(f).length === 0 &&
                      delete this.__sentry_instrumentation_handlers__);
                } catch {}
              return a.call(this, u, l, c);
            };
          }));
      }));
  }
  function N0(e) {
    if (e.type !== Mu) return !1;
    try {
      if (!e.target || e.target._sentryId !== Au) return !1;
    } catch {}
    return !0;
  }
  function C0(e, t) {
    return e !== "keypress"
      ? !1
      : t != null && t.tagName
        ? !(
            t.tagName === "INPUT" ||
            t.tagName === "TEXTAREA" ||
            t.isContentEditable
          )
        : !0;
  }
  function Td(e, t = !1) {
    return (n) => {
      if (!n || n._sentryCaptured) return;
      const r = R0(n);
      if (C0(n.type, r)) return;
      (yn(n, "_sentryCaptured", !0),
        r && !r._sentryId && yn(r, "_sentryId", je()));
      const i = n.type === "keypress" ? "input" : n.type;
      (N0(n) ||
        (e({ event: n, name: i, global: t }),
        (Mu = n.type),
        (Au = r ? r._sentryId : void 0)),
        clearTimeout(Ed),
        (Ed = ve.setTimeout(() => {
          ((Au = void 0), (Mu = void 0));
        }, w0)));
    };
  }
  function R0(e) {
    try {
      return e.target;
    } catch {
      return null;
    }
  }
  let ss;
  function Xm(e) {
    const t = "history";
    (kn(t, e), In(t, x0));
  }
  function x0() {
    if (
      (ve.addEventListener("popstate", () => {
        const t = ve.location.href,
          n = ss;
        if (((ss = t), n === t)) return;
        Ze("history", { from: n, to: t });
      }),
      !ZE())
    )
      return;
    function e(t) {
      return function (...n) {
        const r = n.length > 2 ? n[2] : void 0;
        if (r) {
          const i = ss,
            s = P0(String(r));
          if (((ss = s), i === s)) return t.apply(this, n);
          Ze("history", { from: i, to: s });
        }
        return t.apply(this, n);
      };
    }
    (Oe(ve.history, "pushState", e), Oe(ve.history, "replaceState", e));
  }
  function P0(e) {
    try {
      return new URL(e, ve.location.origin).toString();
    } catch {
      return e;
    }
  }
  const Os = {};
  function O0(e) {
    const t = Os[e];
    if (t) return t;
    let n = ve[e];
    if (Ou(n)) return (Os[e] = n.bind(ve));
    const r = ve.document;
    if (r && typeof r.createElement == "function")
      try {
        const i = r.createElement("iframe");
        ((i.hidden = !0), r.head.appendChild(i));
        const s = i.contentWindow;
        (s != null && s[e] && (n = s[e]), r.head.removeChild(i));
      } catch (i) {
        T0 &&
          x.warn(
            `Could not create sandbox iframe for ${e} check, bailing to window.${e}: `,
            i,
          );
      }
    return n && (Os[e] = n.bind(ve));
  }
  function D0(e) {
    Os[e] = void 0;
  }
  const zr = "__sentry_xhr_v3__";
  function L0(e) {
    const t = "xhr";
    (kn(t, e), In(t, M0));
  }
  function M0() {
    if (!ve.XMLHttpRequest) return;
    const e = XMLHttpRequest.prototype;
    ((e.open = new Proxy(e.open, {
      apply(t, n, r) {
        const i = new Error(),
          s = yt() * 1e3,
          o = _t(r[0]) ? r[0].toUpperCase() : void 0,
          a = A0(r[1]);
        if (!o || !a) return t.apply(n, r);
        ((n[zr] = { method: o, url: a, request_headers: {} }),
          o === "POST" &&
            a.match(/sentry_key/) &&
            (n.__sentry_own_request__ = !0));
        const u = () => {
          const l = n[zr];
          if (l && n.readyState === 4) {
            try {
              l.status_code = n.status;
            } catch {}
            const c = {
              endTimestamp: yt() * 1e3,
              startTimestamp: s,
              xhr: n,
              virtualError: i,
            };
            Ze("xhr", c);
          }
        };
        return (
          "onreadystatechange" in n && typeof n.onreadystatechange == "function"
            ? (n.onreadystatechange = new Proxy(n.onreadystatechange, {
                apply(l, c, f) {
                  return (u(), l.apply(c, f));
                },
              }))
            : n.addEventListener("readystatechange", u),
          (n.setRequestHeader = new Proxy(n.setRequestHeader, {
            apply(l, c, f) {
              const [d, m] = f,
                _ = c[zr];
              return (
                _ && _t(d) && _t(m) && (_.request_headers[d.toLowerCase()] = m),
                l.apply(c, f)
              );
            },
          })),
          t.apply(n, r)
        );
      },
    })),
      (e.send = new Proxy(e.send, {
        apply(t, n, r) {
          const i = n[zr];
          if (!i) return t.apply(n, r);
          r[0] !== void 0 && (i.body = r[0]);
          const s = { startTimestamp: yt() * 1e3, xhr: n };
          return (Ze("xhr", s), t.apply(n, r));
        },
      })));
  }
  function A0(e) {
    if (_t(e)) return e;
    try {
      return e.toString();
    } catch {}
  }
  const $0 = 40;
  function F0(e, t = O0("fetch")) {
    let n = 0,
      r = 0;
    async function i(s) {
      const o = s.body.length;
      ((n += o), r++);
      const a = {
        body: s.body,
        method: "POST",
        referrerPolicy: "strict-origin",
        headers: e.headers,
        keepalive: n <= 6e4 && r < 15,
        ...e.fetchOptions,
      };
      try {
        const u = await t(e.url, a);
        return {
          statusCode: u.status,
          headers: {
            "x-sentry-rate-limits": u.headers.get("X-Sentry-Rate-Limits"),
            "retry-after": u.headers.get("Retry-After"),
          },
        };
      } catch (u) {
        throw (D0("fetch"), u);
      } finally {
        ((n -= o), r--);
      }
    }
    return mE(e, i, tc(e.bufferSize || $0));
  }
  const ur = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
    b0 = 30,
    U0 = 50;
  function $u(e, t, n, r) {
    const i = {
      filename: e,
      function: t === "<anonymous>" ? _n : t,
      in_app: !0,
    };
    return (n !== void 0 && (i.lineno = n), r !== void 0 && (i.colno = r), i);
  }
  const j0 = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
    z0 =
      /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
    H0 = /\((\S*)(?::(\d+))(?::(\d+))\)/,
    B0 = /at (.+?) ?\(data:(.+?),/,
    W0 = (e) => {
      const t = e.match(B0);
      if (t) return { filename: `<data:${t[2]}>`, function: t[1] };
      const n = j0.exec(e);
      if (n) {
        const [, i, s, o] = n;
        return $u(i, _n, +s, +o);
      }
      const r = z0.exec(e);
      if (r) {
        if (r[2] && r[2].indexOf("eval") === 0) {
          const a = H0.exec(r[2]);
          a && ((r[2] = a[1]), (r[3] = a[2]), (r[4] = a[3]));
        }
        const [s, o] = qm(r[1] || _n, r[2]);
        return $u(o, s, r[3] ? +r[3] : void 0, r[4] ? +r[4] : void 0);
      }
    },
    G0 = [b0, W0],
    V0 =
      /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
    Y0 = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
    K0 = (e) => {
      const t = V0.exec(e);
      if (t) {
        if (t[3] && t[3].indexOf(" > eval") > -1) {
          const s = Y0.exec(t[3]);
          s &&
            ((t[1] = t[1] || "eval"),
            (t[3] = s[1]),
            (t[4] = s[2]),
            (t[5] = ""));
        }
        let r = t[3],
          i = t[1] || _n;
        return (
          ([i, r] = qm(i, r)),
          $u(r, i, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
        );
      }
    },
    X0 = [U0, K0],
    q0 = [G0, X0],
    Q0 = sm(...q0),
    qm = (e, t) => {
      const n = e.indexOf("safari-extension") !== -1,
        r = e.indexOf("safari-web-extension") !== -1;
      return n || r
        ? [
            e.indexOf("@") !== -1 ? e.split("@")[0] : _n,
            n ? `safari-extension:${t}` : `safari-web-extension:${t}`,
          ]
        : [e, t];
    },
    os = 1024,
    J0 = "Breadcrumbs",
    Z0 = (e = {}) => {
      const t = {
        console: !0,
        dom: !0,
        fetch: !0,
        history: !0,
        sentry: !0,
        xhr: !0,
        ...e,
      };
      return {
        name: J0,
        setup(n) {
          (t.console && WE(rT(n)),
            t.dom && k0(nT(n, t.dom)),
            t.xhr && L0(iT(n)),
            t.fetch && n0(sT(n)),
            t.history && Xm(oT(n)),
            t.sentry && n.on("beforeSendEvent", tT(n)));
        },
      };
    },
    eT = Z0;
  function tT(e) {
    return function (n) {
      pe() === e &&
        Sn(
          {
            category: `sentry.${n.type === "transaction" ? "transaction" : "event"}`,
            event_id: n.event_id,
            level: n.level,
            message: nn(n),
          },
          { event: n },
        );
    };
  }
  function nT(e, t) {
    return function (r) {
      if (pe() !== e) return;
      let i,
        s,
        o = typeof t == "object" ? t.serializeAttribute : void 0,
        a =
          typeof t == "object" && typeof t.maxStringLength == "number"
            ? t.maxStringLength
            : void 0;
      (a &&
        a > os &&
        (ur &&
          x.warn(
            `\`dom.maxStringLength\` cannot exceed ${os}, but a value of ${a} was configured. Sentry will use ${os} instead.`,
          ),
        (a = os)),
        typeof o == "string" && (o = [o]));
      try {
        const l = r.event,
          c = aT(l) ? l.target : l;
        ((i = fm(c, { keyAttrs: o, maxStringLength: a })), (s = gv(c)));
      } catch {
        i = "<unknown>";
      }
      if (i.length === 0) return;
      const u = { category: `ui.${r.name}`, message: i };
      (s && (u.data = { "ui.component_name": s }),
        Sn(u, { event: r.event, name: r.name, global: r.global }));
    };
  }
  function rT(e) {
    return function (n) {
      if (pe() !== e) return;
      const r = {
        category: "console",
        data: { arguments: n.args, logger: "console" },
        level: VE(n.level),
        message: $f(n.args, " "),
      };
      if (n.level === "assert")
        if (n.args[0] === !1)
          ((r.message = `Assertion failed: ${$f(n.args.slice(1), " ") || "console.assert"}`),
            (r.data.arguments = n.args.slice(1)));
        else return;
      Sn(r, { input: n.args, level: n.level });
    };
  }
  function iT(e) {
    return function (n) {
      if (pe() !== e) return;
      const { startTimestamp: r, endTimestamp: i } = n,
        s = n.xhr[zr];
      if (!r || !i || !s) return;
      const { method: o, url: a, status_code: u, body: l } = s,
        c = { method: o, url: a, status_code: u },
        f = { xhr: n.xhr, input: l, startTimestamp: r, endTimestamp: i },
        d = { category: "xhr", data: c, type: "http", level: Vm(u) };
      (e.emit("beforeOutgoingRequestBreadcrumb", d, f), Sn(d, f));
    };
  }
  function sT(e) {
    return function (n) {
      if (pe() !== e) return;
      const { startTimestamp: r, endTimestamp: i } = n;
      if (
        i &&
        !(n.fetchData.url.match(/sentry_key/) && n.fetchData.method === "POST")
      )
        if ((n.fetchData.method, n.fetchData.url, n.error)) {
          const s = n.fetchData,
            o = {
              data: n.error,
              input: n.args,
              startTimestamp: r,
              endTimestamp: i,
            },
            a = { category: "fetch", data: s, level: "error", type: "http" };
          (e.emit("beforeOutgoingRequestBreadcrumb", a, o), Sn(a, o));
        } else {
          const s = n.response,
            o = { ...n.fetchData, status_code: s == null ? void 0 : s.status };
          (n.fetchData.request_body_size,
            n.fetchData.response_body_size,
            s == null || s.status);
          const a = {
              input: n.args,
              response: s,
              startTimestamp: r,
              endTimestamp: i,
            },
            u = {
              category: "fetch",
              data: o,
              type: "http",
              level: Vm(o.status_code),
            };
          (e.emit("beforeOutgoingRequestBreadcrumb", u, a), Sn(u, a));
        }
    };
  }
  function oT(e) {
    return function (n) {
      if (pe() !== e) return;
      let r = n.from,
        i = n.to;
      const s = Sa(G.location.href);
      let o = r ? Sa(r) : void 0;
      const a = Sa(i);
      ((o != null && o.path) || (o = s),
        s.protocol === a.protocol && s.host === a.host && (i = a.relative),
        s.protocol === o.protocol && s.host === o.host && (r = o.relative),
        Sn({ category: "navigation", data: { from: r, to: i } }));
    };
  }
  function aT(e) {
    return !!e && !!e.target;
  }
  const uT = [
      "EventTarget",
      "Window",
      "Node",
      "ApplicationCache",
      "AudioTrackList",
      "BroadcastChannel",
      "ChannelMergerNode",
      "CryptoOperation",
      "EventSource",
      "FileReader",
      "HTMLUnknownElement",
      "IDBDatabase",
      "IDBRequest",
      "IDBTransaction",
      "KeyOperation",
      "MediaController",
      "MessagePort",
      "ModalWindow",
      "Notification",
      "SVGElementInstance",
      "Screen",
      "SharedWorker",
      "TextTrack",
      "TextTrackCue",
      "TextTrackList",
      "WebSocket",
      "WebSocketWorker",
      "Worker",
      "XMLHttpRequest",
      "XMLHttpRequestEventTarget",
      "XMLHttpRequestUpload",
    ],
    lT = "BrowserApiErrors",
    cT = (e = {}) => {
      const t = {
        XMLHttpRequest: !0,
        eventTarget: !0,
        requestAnimationFrame: !0,
        setInterval: !0,
        setTimeout: !0,
        unregisterOriginalCallbacks: !1,
        ...e,
      };
      return {
        name: lT,
        setupOnce() {
          (t.setTimeout && Oe(G, "setTimeout", wd),
            t.setInterval && Oe(G, "setInterval", wd),
            t.requestAnimationFrame && Oe(G, "requestAnimationFrame", dT),
            t.XMLHttpRequest &&
              "XMLHttpRequest" in G &&
              Oe(XMLHttpRequest.prototype, "send", pT));
          const n = t.eventTarget;
          n && (Array.isArray(n) ? n : uT).forEach((i) => hT(i, t));
        },
      };
    },
    fT = cT;
  function wd(e) {
    return function (...t) {
      const n = t[0];
      return (
        (t[0] = ar(n, {
          mechanism: {
            handled: !1,
            type: `auto.browser.browserapierrors.${Yt(e)}`,
          },
        })),
        e.apply(this, t)
      );
    };
  }
  function dT(e) {
    return function (t) {
      return e.apply(this, [
        ar(t, {
          mechanism: {
            data: { handler: Yt(e) },
            handled: !1,
            type: "auto.browser.browserapierrors.requestAnimationFrame",
          },
        }),
      ]);
    };
  }
  function pT(e) {
    return function (...t) {
      const n = this;
      return (
        ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(
          (i) => {
            i in n &&
              typeof n[i] == "function" &&
              Oe(n, i, function (s) {
                const o = {
                    mechanism: {
                      data: { handler: Yt(s) },
                      handled: !1,
                      type: `auto.browser.browserapierrors.xhr.${i}`,
                    },
                  },
                  a = Kl(s);
                return (a && (o.mechanism.data.handler = Yt(a)), ar(s, o));
              });
          },
        ),
        e.apply(this, t)
      );
    };
  }
  function hT(e, t) {
    var i, s;
    const r = (i = G[e]) == null ? void 0 : i.prototype;
    (s = r == null ? void 0 : r.hasOwnProperty) != null &&
      s.call(r, "addEventListener") &&
      (Oe(r, "addEventListener", function (o) {
        return function (a, u, l) {
          try {
            mT(u) &&
              (u.handleEvent = ar(u.handleEvent, {
                mechanism: {
                  data: { handler: Yt(u), target: e },
                  handled: !1,
                  type: "auto.browser.browserapierrors.handleEvent",
                },
              }));
          } catch {}
          return (
            t.unregisterOriginalCallbacks && gT(this, a, u),
            o.apply(this, [
              a,
              ar(u, {
                mechanism: {
                  data: { handler: Yt(u), target: e },
                  handled: !1,
                  type: "auto.browser.browserapierrors.addEventListener",
                },
              }),
              l,
            ])
          );
        };
      }),
      Oe(r, "removeEventListener", function (o) {
        return function (a, u, l) {
          try {
            const c = u.__sentry_wrapped__;
            c && o.call(this, a, c, l);
          } catch {}
          return o.call(this, a, u, l);
        };
      }));
  }
  function mT(e) {
    return typeof e.handleEvent == "function";
  }
  function gT(e, t, n) {
    e &&
      typeof e == "object" &&
      "removeEventListener" in e &&
      typeof e.removeEventListener == "function" &&
      e.removeEventListener(t, n);
  }
  const _T = () => ({
      name: "BrowserSession",
      setupOnce() {
        if (typeof G.document > "u") {
          ur &&
            x.warn(
              "Using the `browserSessionIntegration` in non-browser environments is not supported.",
            );
          return;
        }
        (rd({ ignoreDuration: !0 }),
          id(),
          Xm(({ from: e, to: t }) => {
            e !== void 0 && e !== t && (rd({ ignoreDuration: !0 }), id());
          }));
      },
    }),
    yT = "GlobalHandlers",
    vT = (e = {}) => {
      const t = { onerror: !0, onunhandledrejection: !0, ...e };
      return {
        name: yT,
        setupOnce() {
          Error.stackTraceLimit = 50;
        },
        setup(n) {
          (t.onerror && (ET(n), kd("onerror")),
            t.onunhandledrejection && (TT(n), kd("onunhandledrejection")));
        },
      };
    },
    ST = vT;
  function ET(e) {
    ov((t) => {
      const { stackParser: n, attachStacktrace: r } = Qm();
      if (pe() !== e || Ym()) return;
      const { msg: i, url: s, line: o, column: a, error: u } = t,
        l = IT(ic(n, u || i, void 0, r, !1), s, o, a);
      ((l.level = "error"),
        Rm(l, {
          originalException: u,
          mechanism: {
            handled: !1,
            type: "auto.browser.global_handlers.onerror",
          },
        }));
    });
  }
  function TT(e) {
    uv((t) => {
      const { stackParser: n, attachStacktrace: r } = Qm();
      if (pe() !== e || Ym()) return;
      const i = wT(t),
        s = xo(i) ? kT(i) : ic(n, i, void 0, r, !0);
      ((s.level = "error"),
        Rm(s, {
          originalException: i,
          mechanism: {
            handled: !1,
            type: "auto.browser.global_handlers.onunhandledrejection",
          },
        }));
    });
  }
  function wT(e) {
    if (xo(e)) return e;
    try {
      if ("reason" in e) return e.reason;
      if ("detail" in e && "reason" in e.detail) return e.detail.reason;
    } catch {}
    return e;
  }
  function kT(e) {
    return {
      exception: {
        values: [
          {
            type: "UnhandledRejection",
            value: `Non-Error promise rejection captured with value: ${String(e)}`,
          },
        ],
      },
    };
  }
  function IT(e, t, n, r) {
    const i = (e.exception = e.exception || {}),
      s = (i.values = i.values || []),
      o = (s[0] = s[0] || {}),
      a = (o.stacktrace = o.stacktrace || {}),
      u = (a.frames = a.frames || []),
      l = r,
      c = n,
      f = NT(t) ?? Yl();
    return (
      u.length === 0 &&
        u.push({ colno: l, filename: f, function: _n, in_app: !0, lineno: c }),
      e
    );
  }
  function kd(e) {
    ur && x.log(`Global Handler attached: ${e}`);
  }
  function Qm() {
    const e = pe();
    return (
      (e == null ? void 0 : e.getOptions()) || {
        stackParser: () => [],
        attachStacktrace: !1,
      }
    );
  }
  function NT(e) {
    if (!(!_t(e) || e.length === 0)) {
      if (e.startsWith("data:")) {
        const t = e.match(/^data:([^;]+)/),
          n = t ? t[1] : "text/javascript",
          r = e.includes("base64,");
        return `<data:${n}${r ? ",base64" : ""}>`;
      }
      return e;
    }
  }
  const CT = () => ({
      name: "HttpContext",
      preprocessEvent(e) {
        var r;
        if (!G.navigator && !G.location && !G.document) return;
        const t = u0(),
          n = {
            ...t.headers,
            ...((r = e.request) == null ? void 0 : r.headers),
          };
        e.request = { ...t, ...e.request, headers: n };
      },
    }),
    RT = "cause",
    xT = 5,
    PT = "LinkedErrors",
    OT = (e = {}) => {
      const t = e.limit || xT,
        n = e.key || RT;
      return {
        name: PT,
        preprocessEvent(r, i, s) {
          const o = s.getOptions();
          BE(nc, o.stackParser, n, t, r, i);
        },
      };
    },
    DT = OT;
  function LT() {
    return MT()
      ? (ur &&
          mr(() => {
            console.error(
              "[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/",
            );
          }),
        !0)
      : !1;
  }
  function MT() {
    var s;
    if (typeof G.window > "u") return !1;
    const e = G;
    if (e.nw) return !1;
    const t = e.chrome || e.browser;
    if (!((s = t == null ? void 0 : t.runtime) != null && s.id)) return !1;
    const n = Yl(),
      r = [
        "chrome-extension",
        "moz-extension",
        "ms-browser-extension",
        "safari-web-extension",
      ];
    return !(G === G.top && r.some((o) => n.startsWith(`${o}://`)));
  }
  function AT(e) {
    return [AE(), OE(), fT(), eT(), ST(), DT(), XE(), CT(), _T()];
  }
  function $T(e = {}) {
    const t = !e.skipBrowserExtensionCheck && LT();
    let n = e.defaultIntegrations == null ? AT() : e.defaultIntegrations;
    const r = {
      ...e,
      enabled: t ? !1 : e.enabled,
      stackParser: iv(e.stackParser || Q0),
      integrations: nE({
        integrations: e.integrations,
        defaultIntegrations: n,
      }),
      transport: e.transport || F0,
    };
    return IE(S0, r);
  }
  function Id(e = {}) {
    const t = G.document,
      n = (t == null ? void 0 : t.head) || (t == null ? void 0 : t.body);
    if (!n) {
      ur && x.error("[showReportDialog] Global document not defined");
      return;
    }
    const r = It(),
      i = pe(),
      s = i == null ? void 0 : i.getDsn();
    if (!s) {
      ur && x.error("[showReportDialog] DSN not configured");
      return;
    }
    const o = {
        ...e,
        user: { ...r.getUser(), ...e.user },
        eventId: e.eventId || XS(),
      },
      a = G.document.createElement("script");
    ((a.async = !0), (a.crossOrigin = "anonymous"), (a.src = eE(s, o)));
    const { onLoad: u, onClose: l } = o;
    if ((u && (a.onload = u), l)) {
      const c = (f) => {
        if (f.data === "__sentry_reportdialog_closed__")
          try {
            l();
          } finally {
            G.removeEventListener("message", c);
          }
      };
      G.addEventListener("message", c);
    }
    n.appendChild(a);
  }
  function FT(e) {
    const t = { ...e };
    return (Bm(t, "react"), KS("react", { version: Xe.version }), $T(t));
  }
  function bT(e) {
    const t = e.match(/^([^.]+)/);
    return t !== null && parseInt(t[0]) >= 17;
  }
  function UT(e, t) {
    const n = new WeakSet();
    function r(i, s) {
      if (!n.has(i)) {
        if (i.cause) return (n.add(i), r(i.cause, s));
        i.cause = s;
      }
    }
    r(e, t);
  }
  function jT(e, { componentStack: t }, n) {
    if (bT(Xe.version) && Ro(e) && t) {
      const r = new Error(e.message);
      ((r.name = `React ErrorBoundary ${e.name}`), (r.stack = t), UT(e, r));
    }
    return ql((r) => (r.setContext("react", { componentStack: t }), xi(e, n)));
  }
  const zT = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
    Ta = { componentStack: null, error: null, eventId: null };
  class HT extends Xe.Component {
    constructor(t) {
      (super(t), (this.state = Ta), (this._openFallbackReportDialog = !0));
      const n = pe();
      n &&
        t.showDialog &&
        ((this._openFallbackReportDialog = !1),
        (this._cleanupHook = n.on("afterSendEvent", (r) => {
          !r.type &&
            this._lastEventId &&
            r.event_id === this._lastEventId &&
            Id({ ...t.dialogOptions, eventId: this._lastEventId });
        })));
    }
    componentDidCatch(t, n) {
      const { componentStack: r } = n,
        {
          beforeCapture: i,
          onError: s,
          showDialog: o,
          dialogOptions: a,
        } = this.props;
      ql((u) => {
        i && i(u, t, r);
        const l =
            this.props.handled != null
              ? this.props.handled
              : !!this.props.fallback,
          c = jT(t, n, {
            mechanism: {
              handled: l,
              type: "auto.function.react.error_boundary",
            },
          });
        (s && s(t, r, c),
          o &&
            ((this._lastEventId = c),
            this._openFallbackReportDialog && Id({ ...a, eventId: c })),
          this.setState({ error: t, componentStack: r, eventId: c }));
      });
    }
    componentDidMount() {
      const { onMount: t } = this.props;
      t && t();
    }
    componentWillUnmount() {
      const { error: t, componentStack: n, eventId: r } = this.state,
        { onUnmount: i } = this.props;
      (i && (this.state === Ta ? i(null, null, null) : i(t, n, r)),
        this._cleanupHook &&
          (this._cleanupHook(), (this._cleanupHook = void 0)));
    }
    resetErrorBoundary() {
      const { onReset: t } = this.props,
        { error: n, componentStack: r, eventId: i } = this.state;
      (t && t(n, r, i), this.setState(Ta));
    }
    render() {
      const { fallback: t, children: n } = this.props,
        r = this.state;
      if (r.componentStack === null) return typeof n == "function" ? n() : n;
      const i =
        typeof t == "function"
          ? Xe.createElement(t, {
              error: r.error,
              componentStack: r.componentStack,
              resetError: () => this.resetErrorBoundary(),
              eventId: r.eventId,
            })
          : t;
      return Xe.isValidElement(i)
        ? i
        : (t && zT && x.warn("fallback did not produce a valid ReactElement"),
          null);
    }
  }
  const BT = async () => {
      try {
        return { status: "healthy", checks: { storage: "ok" } };
      } catch (e) {
        return (xi(e), { status: "unknown", checks: {} });
      }
    },
    WT = async () => {
      try {
        return [
          { fileId: 7e4, status: "completed" },
          { fileId: 70001, status: "in_progress" },
          { fileId: 70002, status: "failed" },
        ];
      } catch (e) {
        return (xi(e), []);
      }
    },
    GT = async () => {
      try {
        return [
          {
            id: 1,
            message: "Download timeout for file 70002",
            time: "10:45 AM",
          },
          {
            id: 2,
            message: "S3 upload failed for file 70003",
            time: "11:00 AM",
          },
        ];
      } catch (e) {
        return (xi(e), []);
      }
    };
  function VT() {
    const [e, t] = Xe.useState({ status: "unknown", checks: {} }),
      [n, r] = Xe.useState([]),
      [i, s] = Xe.useState([]);
    Xe.useEffect(() => {
      (async () => {
        (t(await BT()), r(await WT()), s(await GT()));
      })();
    }, []);
    const o = (u) => (u === "healthy" ? "text-green-600" : "text-red-600"),
      a = (u) =>
        u === "completed"
          ? "bg-green-100 text-green-800"
          : u === "in_progress"
            ? "bg-yellow-100 text-yellow-800"
            : u === "failed"
              ? "bg-red-100 text-red-800"
              : "bg-gray-100 text-gray-800";
    return M.createElement(
      "div",
      { className: "min-h-screen bg-gray-50 p-6 font-sans" },
      M.createElement(
        "header",
        { className: "mb-8" },
        M.createElement(
          "h1",
          { className: "text-3xl font-bold text-gray-800" },
          "Observability Dashboard",
        ),
        M.createElement(
          "p",
          { className: "text-gray-600 mt-1" },
          "Monitor service health, downloads, and errors in real-time",
        ),
      ),
      M.createElement(
        "section",
        { className: "mb-8" },
        M.createElement(
          "h2",
          { className: "text-xl font-semibold text-gray-700 mb-2" },
          "Health Status",
        ),
        M.createElement(
          "div",
          {
            className:
              "flex items-center space-x-4 bg-white p-4 rounded shadow",
          },
          M.createElement(
            "span",
            {
              className: `px-3 py-1 rounded-full font-semibold ${o(e.status)}`,
            },
            e.status.toUpperCase(),
          ),
          Object.entries(e.checks).map(([u, l]) =>
            M.createElement(
              "span",
              { key: u, className: "text-gray-700" },
              u,
              ": ",
              l,
            ),
          ),
        ),
      ),
      M.createElement(
        "section",
        { className: "mb-8" },
        M.createElement(
          "h2",
          { className: "text-xl font-semibold text-gray-700 mb-2" },
          "Downloads",
        ),
        M.createElement(
          "div",
          { className: "bg-white rounded shadow overflow-x-auto" },
          M.createElement(
            "table",
            { className: "min-w-full divide-y divide-gray-200" },
            M.createElement(
              "thead",
              { className: "bg-gray-100" },
              M.createElement(
                "tr",
                null,
                M.createElement(
                  "th",
                  {
                    className:
                      "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                  },
                  "File ID",
                ),
                M.createElement(
                  "th",
                  {
                    className:
                      "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                  },
                  "Status",
                ),
              ),
            ),
            M.createElement(
              "tbody",
              { className: "bg-white divide-y divide-gray-200" },
              n.map((u) =>
                M.createElement(
                  "tr",
                  { key: u.fileId },
                  M.createElement(
                    "td",
                    {
                      className:
                        "px-6 py-4 whitespace-nowrap text-sm text-gray-700",
                    },
                    u.fileId,
                  ),
                  M.createElement(
                    "td",
                    { className: "px-6 py-4 whitespace-nowrap" },
                    M.createElement(
                      "span",
                      {
                        className: `px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${a(u.status)}`,
                      },
                      u.status.replace("_", " ").toUpperCase(),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
      M.createElement(
        "section",
        null,
        M.createElement(
          "h2",
          { className: "text-xl font-semibold text-gray-700 mb-2" },
          "Error Log",
        ),
        M.createElement(
          "div",
          { className: "bg-white rounded shadow overflow-x-auto" },
          M.createElement(
            "table",
            { className: "min-w-full divide-y divide-gray-200" },
            M.createElement(
              "thead",
              { className: "bg-gray-100" },
              M.createElement(
                "tr",
                null,
                M.createElement(
                  "th",
                  {
                    className:
                      "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                  },
                  "Time",
                ),
                M.createElement(
                  "th",
                  {
                    className:
                      "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                  },
                  "Message",
                ),
              ),
            ),
            M.createElement(
              "tbody",
              { className: "bg-white divide-y divide-gray-200" },
              i.map((u) =>
                M.createElement(
                  "tr",
                  { key: u.id },
                  M.createElement(
                    "td",
                    {
                      className:
                        "px-6 py-4 whitespace-nowrap text-sm text-gray-700",
                    },
                    u.time,
                  ),
                  M.createElement(
                    "td",
                    {
                      className:
                        "px-6 py-4 whitespace-nowrap text-sm text-red-700",
                    },
                    u.message,
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
  const YT = Object.prototype.toString;
  function sc(e, t) {
    return YT.call(e) === `[object ${t}]`;
  }
  function Wt(e) {
    return sc(e, "String");
  }
  function Jm(e) {
    return sc(e, "Object");
  }
  function KT(e) {
    return sc(e, "RegExp");
  }
  function oc(e) {
    return !!(e && e.then && typeof e.then == "function");
  }
  function XT(e) {
    return typeof e == "number" && e !== e;
  }
  function Nd(e, t) {
    try {
      return e instanceof t;
    } catch {
      return !1;
    }
  }
  function qT(e, t, n = !1) {
    return Wt(e)
      ? KT(t)
        ? t.test(e)
        : Wt(t)
          ? n
            ? e === t
            : e.includes(t)
          : !1
      : !1;
  }
  function QT(e, t = [], n = !1) {
    return t.some((r) => qT(e, r, n));
  }
  function as(e) {
    return e && e.Math == Math ? e : void 0;
  }
  const X =
    (typeof globalThis == "object" && as(globalThis)) ||
    (typeof window == "object" && as(window)) ||
    (typeof self == "object" && as(self)) ||
    (typeof global == "object" && as(global)) ||
    (function () {
      return this;
    })() ||
    {};
  function ac() {
    return X;
  }
  function Zm(e, t, n) {
    const r = n || X,
      i = (r.__SENTRY__ = r.__SENTRY__ || {});
    return i[e] || (i[e] = t());
  }
  const Jr = ac(),
    JT = 80;
  function oo(e, t = {}) {
    if (!e) return "<unknown>";
    try {
      let n = e;
      const r = 5,
        i = [];
      let s = 0,
        o = 0;
      const a = " > ",
        u = a.length;
      let l;
      const c = Array.isArray(t) ? t : t.keyAttrs,
        f = (!Array.isArray(t) && t.maxStringLength) || JT;
      for (
        ;
        n &&
        s++ < r &&
        ((l = ZT(n, c)),
        !(l === "html" || (s > 1 && o + i.length * u + l.length >= f)));
      )
        (i.push(l), (o += l.length), (n = n.parentNode));
      return i.reverse().join(a);
    } catch {
      return "<unknown>";
    }
  }
  function ZT(e, t) {
    const n = e,
      r = [];
    let i, s, o, a, u;
    if (!n || !n.tagName) return "";
    if (
      Jr.HTMLElement &&
      n instanceof HTMLElement &&
      n.dataset &&
      n.dataset.sentryComponent
    )
      return n.dataset.sentryComponent;
    r.push(n.tagName.toLowerCase());
    const l =
      t && t.length
        ? t.filter((f) => n.getAttribute(f)).map((f) => [f, n.getAttribute(f)])
        : null;
    if (l && l.length)
      l.forEach((f) => {
        r.push(`[${f[0]}="${f[1]}"]`);
      });
    else if ((n.id && r.push(`#${n.id}`), (i = n.className), i && Wt(i)))
      for (s = i.split(/\s+/), u = 0; u < s.length; u++) r.push(`.${s[u]}`);
    const c = ["aria-label", "type", "name", "title", "alt"];
    for (u = 0; u < c.length; u++)
      ((o = c[u]), (a = n.getAttribute(o)), a && r.push(`[${o}="${a}"]`));
    return r.join("");
  }
  function e1(e) {
    return Jr.document && Jr.document.querySelector
      ? Jr.document.querySelector(e)
      : null;
  }
  function t1(e) {
    if (!Jr.HTMLElement) return null;
    let t = e;
    const n = 5;
    for (let r = 0; r < n; r++) {
      if (!t) return null;
      if (t instanceof HTMLElement && t.dataset.sentryComponent)
        return t.dataset.sentryComponent;
      t = t.parentNode;
    }
    return null;
  }
  const Pi = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
    n1 = "Sentry Logger ",
    Cd = ["debug", "info", "warn", "error", "log", "assert", "trace"],
    Rd = {};
  function eg(e) {
    if (!("console" in X)) return e();
    const t = X.console,
      n = {},
      r = Object.keys(Rd);
    r.forEach((i) => {
      const s = Rd[i];
      ((n[i] = t[i]), (t[i] = s));
    });
    try {
      return e();
    } finally {
      r.forEach((i) => {
        t[i] = n[i];
      });
    }
  }
  function r1() {
    let e = !1;
    const t = {
      enable: () => {
        e = !0;
      },
      disable: () => {
        e = !1;
      },
      isEnabled: () => e,
    };
    return (
      Pi
        ? Cd.forEach((n) => {
            t[n] = (...r) => {
              e &&
                eg(() => {
                  X.console[n](`${n1}[${n}]:`, ...r);
                });
            };
          })
        : Cd.forEach((n) => {
            t[n] = () => {};
          }),
      t
    );
  }
  const w = r1();
  function i1(e, t = !1) {
    const {
      host: n,
      path: r,
      pass: i,
      port: s,
      projectId: o,
      protocol: a,
      publicKey: u,
    } = e;
    return `${a}://${u}${t && i ? `:${i}` : ""}@${n}${s ? `:${s}` : ""}/${r && `${r}/`}${o}`;
  }
  function an(e, t, n) {
    if (!(t in e)) return;
    const r = e[t],
      i = n(r);
    (typeof i == "function" && s1(i, r), (e[t] = i));
  }
  function Fu(e, t, n) {
    try {
      Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 });
    } catch {
      Pi && w.log(`Failed to add non-enumerable property "${t}" to object`, e);
    }
  }
  function s1(e, t) {
    try {
      const n = t.prototype || {};
      ((e.prototype = t.prototype = n), Fu(e, "__sentry_original__", t));
    } catch {}
  }
  function qe(e) {
    return bu(e, new Map());
  }
  function bu(e, t) {
    if (o1(e)) {
      const n = t.get(e);
      if (n !== void 0) return n;
      const r = {};
      t.set(e, r);
      for (const i of Object.keys(e)) typeof e[i] < "u" && (r[i] = bu(e[i], t));
      return r;
    }
    if (Array.isArray(e)) {
      const n = t.get(e);
      if (n !== void 0) return n;
      const r = [];
      return (
        t.set(e, r),
        e.forEach((i) => {
          r.push(bu(i, t));
        }),
        r
      );
    }
    return e;
  }
  function o1(e) {
    if (!Jm(e)) return !1;
    try {
      const t = Object.getPrototypeOf(e).constructor.name;
      return !t || t === "Object";
    } catch {
      return !0;
    }
  }
  const wa = "<anonymous>";
  function tg(e) {
    try {
      return !e || typeof e != "function" ? wa : e.name || wa;
    } catch {
      return wa;
    }
  }
  const Ds = {},
    xd = {};
  function Oi(e, t) {
    ((Ds[e] = Ds[e] || []), Ds[e].push(t));
  }
  function Di(e, t) {
    xd[e] || (t(), (xd[e] = !0));
  }
  function vt(e, t) {
    const n = e && Ds[e];
    if (n)
      for (const r of n)
        try {
          r(t);
        } catch (i) {
          Pi &&
            w.error(
              `Error while triggering instrumentation handler.
Type: ${e}
Name: ${tg(r)}
Error:`,
              i,
            );
        }
  }
  function ie() {
    const e = X,
      t = e.crypto || e.msCrypto;
    let n = () => Math.random() * 16;
    try {
      if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
      t &&
        t.getRandomValues &&
        (n = () => {
          const r = new Uint8Array(1);
          return (t.getRandomValues(r), r[0]);
        });
    } catch {}
    return ("10000000100040008000" + 1e11).replace(/[018]/g, (r) =>
      (r ^ ((n() & 15) >> (r / 4))).toString(16),
    );
  }
  function a1(e) {
    return Array.isArray(e) ? e : [e];
  }
  const Uu = ac();
  function u1() {
    if (!("fetch" in Uu)) return !1;
    try {
      return (
        new Headers(),
        new Request("http://www.example.com"),
        new Response(),
        !0
      );
    } catch {
      return !1;
    }
  }
  function Pd(e) {
    return (
      e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
    );
  }
  function l1() {
    if (typeof EdgeRuntime == "string") return !0;
    if (!u1()) return !1;
    if (Pd(Uu.fetch)) return !0;
    let e = !1;
    const t = Uu.document;
    if (t && typeof t.createElement == "function")
      try {
        const n = t.createElement("iframe");
        ((n.hidden = !0),
          t.head.appendChild(n),
          n.contentWindow &&
            n.contentWindow.fetch &&
            (e = Pd(n.contentWindow.fetch)),
          t.head.removeChild(n));
      } catch (n) {
        Pi &&
          w.warn(
            "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
            n,
          );
      }
    return e;
  }
  function c1(e) {
    const t = "fetch";
    (Oi(t, e), Di(t, f1));
  }
  function f1() {
    l1() &&
      an(X, "fetch", function (e) {
        return function (...t) {
          const { method: n, url: r } = d1(t),
            i = {
              args: t,
              fetchData: { method: n, url: r },
              startTimestamp: Date.now(),
            };
          return (
            vt("fetch", { ...i }),
            e.apply(X, t).then(
              (s) => {
                const o = { ...i, endTimestamp: Date.now(), response: s };
                return (vt("fetch", o), s);
              },
              (s) => {
                const o = { ...i, endTimestamp: Date.now(), error: s };
                throw (vt("fetch", o), s);
              },
            )
          );
        };
      });
  }
  function ju(e, t) {
    return !!e && typeof e == "object" && !!e[t];
  }
  function Od(e) {
    return typeof e == "string"
      ? e
      : e
        ? ju(e, "url")
          ? e.url
          : e.toString
            ? e.toString()
            : ""
        : "";
  }
  function d1(e) {
    if (e.length === 0) return { method: "GET", url: "" };
    if (e.length === 2) {
      const [n, r] = e;
      return {
        url: Od(n),
        method: ju(r, "method") ? String(r.method).toUpperCase() : "GET",
      };
    }
    const t = e[0];
    return {
      url: Od(t),
      method: ju(t, "method") ? String(t.method).toUpperCase() : "GET",
    };
  }
  let us = null;
  function p1(e) {
    const t = "error";
    (Oi(t, e), Di(t, h1));
  }
  function h1() {
    ((us = X.onerror),
      (X.onerror = function (e, t, n, r, i) {
        return (
          vt("error", { column: r, error: i, line: n, msg: e, url: t }),
          us && !us.__SENTRY_LOADER__ ? us.apply(this, arguments) : !1
        );
      }),
      (X.onerror.__SENTRY_INSTRUMENTED__ = !0));
  }
  let ls = null;
  function m1(e) {
    const t = "unhandledrejection";
    (Oi(t, e), Di(t, g1));
  }
  function g1() {
    ((ls = X.onunhandledrejection),
      (X.onunhandledrejection = function (e) {
        return (
          vt("unhandledrejection", e),
          ls && !ls.__SENTRY_LOADER__ ? ls.apply(this, arguments) : !0
        );
      }),
      (X.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0));
  }
  const cs = ac();
  function _1() {
    const e = cs.chrome,
      t = e && e.app && e.app.runtime,
      n =
        "history" in cs && !!cs.history.pushState && !!cs.history.replaceState;
    return !t && n;
  }
  const $r = X;
  let fs;
  function y1(e) {
    const t = "history";
    (Oi(t, e), Di(t, v1));
  }
  function v1() {
    if (!_1()) return;
    const e = $r.onpopstate;
    $r.onpopstate = function (...n) {
      const r = $r.location.href,
        i = fs;
      if (((fs = r), vt("history", { from: i, to: r }), e))
        try {
          return e.apply(this, n);
        } catch {}
    };
    function t(n) {
      return function (...r) {
        const i = r.length > 2 ? r[2] : void 0;
        if (i) {
          const s = fs,
            o = String(i);
          ((fs = o), vt("history", { from: s, to: o }));
        }
        return n.apply(this, r);
      };
    }
    (an($r.history, "pushState", t), an($r.history, "replaceState", t));
  }
  const S1 = X,
    Hr = "__sentry_xhr_v3__";
  function E1(e) {
    const t = "xhr";
    (Oi(t, e), Di(t, T1));
  }
  function T1() {
    if (!S1.XMLHttpRequest) return;
    const e = XMLHttpRequest.prototype;
    (an(e, "open", function (t) {
      return function (...n) {
        const r = Date.now(),
          i = Wt(n[0]) ? n[0].toUpperCase() : void 0,
          s = w1(n[1]);
        if (!i || !s) return t.apply(this, n);
        ((this[Hr] = { method: i, url: s, request_headers: {} }),
          i === "POST" &&
            s.match(/sentry_key/) &&
            (this.__sentry_own_request__ = !0));
        const o = () => {
          const a = this[Hr];
          if (a && this.readyState === 4) {
            try {
              a.status_code = this.status;
            } catch {}
            const u = {
              args: [i, s],
              endTimestamp: Date.now(),
              startTimestamp: r,
              xhr: this,
            };
            vt("xhr", u);
          }
        };
        return (
          "onreadystatechange" in this &&
          typeof this.onreadystatechange == "function"
            ? an(this, "onreadystatechange", function (a) {
                return function (...u) {
                  return (o(), a.apply(this, u));
                };
              })
            : this.addEventListener("readystatechange", o),
          an(this, "setRequestHeader", function (a) {
            return function (...u) {
              const [l, c] = u,
                f = this[Hr];
              return (
                f && Wt(l) && Wt(c) && (f.request_headers[l.toLowerCase()] = c),
                a.apply(this, u)
              );
            };
          }),
          t.apply(this, n)
        );
      };
    }),
      an(e, "send", function (t) {
        return function (...n) {
          const r = this[Hr];
          if (!r) return t.apply(this, n);
          n[0] !== void 0 && (r.body = n[0]);
          const i = {
            args: [r.method, r.url],
            startTimestamp: Date.now(),
            xhr: this,
          };
          return (vt("xhr", i), t.apply(this, n));
        };
      }));
  }
  function w1(e) {
    if (Wt(e)) return e;
    try {
      return e.toString();
    } catch {}
  }
  function k1() {
    return (
      typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__
    );
  }
  function I1() {
    return (
      !k1() &&
      Object.prototype.toString.call(typeof process < "u" ? process : 0) ===
        "[object process]"
    );
  }
  function un(e, t) {
    return e.require(t);
  }
  function N1(e) {
    let t;
    try {
      t = un(At, e);
    } catch {}
    try {
      const { cwd: n } = un(At, "process");
      t = un(At, `${n()}/node_modules/${e}`);
    } catch {}
    return t;
  }
  var ft;
  (function (e) {
    e[(e.PENDING = 0)] = "PENDING";
    const n = 1;
    e[(e.RESOLVED = n)] = "RESOLVED";
    const r = 2;
    e[(e.REJECTED = r)] = "REJECTED";
  })(ft || (ft = {}));
  class Pt {
    constructor(t) {
      (Pt.prototype.__init.call(this),
        Pt.prototype.__init2.call(this),
        Pt.prototype.__init3.call(this),
        Pt.prototype.__init4.call(this),
        (this._state = ft.PENDING),
        (this._handlers = []));
      try {
        t(this._resolve, this._reject);
      } catch (n) {
        this._reject(n);
      }
    }
    then(t, n) {
      return new Pt((r, i) => {
        (this._handlers.push([
          !1,
          (s) => {
            if (!t) r(s);
            else
              try {
                r(t(s));
              } catch (o) {
                i(o);
              }
          },
          (s) => {
            if (!n) i(s);
            else
              try {
                r(n(s));
              } catch (o) {
                i(o);
              }
          },
        ]),
          this._executeHandlers());
      });
    }
    catch(t) {
      return this.then((n) => n, t);
    }
    finally(t) {
      return new Pt((n, r) => {
        let i, s;
        return this.then(
          (o) => {
            ((s = !1), (i = o), t && t());
          },
          (o) => {
            ((s = !0), (i = o), t && t());
          },
        ).then(() => {
          if (s) {
            r(i);
            return;
          }
          n(i);
        });
      });
    }
    __init() {
      this._resolve = (t) => {
        this._setResult(ft.RESOLVED, t);
      };
    }
    __init2() {
      this._reject = (t) => {
        this._setResult(ft.REJECTED, t);
      };
    }
    __init3() {
      this._setResult = (t, n) => {
        if (this._state === ft.PENDING) {
          if (oc(n)) {
            n.then(this._resolve, this._reject);
            return;
          }
          ((this._state = t), (this._value = n), this._executeHandlers());
        }
      };
    }
    __init4() {
      this._executeHandlers = () => {
        if (this._state === ft.PENDING) return;
        const t = this._handlers.slice();
        ((this._handlers = []),
          t.forEach((n) => {
            n[0] ||
              (this._state === ft.RESOLVED && n[1](this._value),
              this._state === ft.REJECTED && n[2](this._value),
              (n[0] = !0));
          }));
      };
    }
  }
  function Lo(e) {
    if (!e) return {};
    const t = e.match(
      /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/,
    );
    if (!t) return {};
    const n = t[6] || "",
      r = t[8] || "";
    return {
      host: t[4],
      path: t[5],
      protocol: t[2],
      search: n,
      hash: r,
      relative: t[5] + n + r,
    };
  }
  const ng = 1e3;
  function uc() {
    return Date.now() / ng;
  }
  function C1() {
    const { performance: e } = X;
    if (!e || !e.now) return uc;
    const t = Date.now() - e.now(),
      n = e.timeOrigin == null ? t : e.timeOrigin;
    return () => (n + e.now()) / ng;
  }
  const Li = C1(),
    Be = (() => {
      const { performance: e } = X;
      if (!e || !e.now) return;
      const t = 3600 * 1e3,
        n = e.now(),
        r = Date.now(),
        i = e.timeOrigin ? Math.abs(e.timeOrigin + n - r) : t,
        s = i < t,
        o = e.timing && e.timing.navigationStart,
        u = typeof o == "number" ? Math.abs(o + n - r) : t,
        l = u < t;
      return s || l ? (i <= u ? e.timeOrigin : o) : r;
    })(),
    zu = "baggage",
    rg = "sentry-",
    R1 = /^sentry-/,
    x1 = 8192;
  function P1(e) {
    if (!Wt(e) && !Array.isArray(e)) return;
    let t = {};
    if (Array.isArray(e))
      t = e.reduce((r, i) => {
        const s = Dd(i);
        for (const o of Object.keys(s)) r[o] = s[o];
        return r;
      }, {});
    else {
      if (!e) return;
      t = Dd(e);
    }
    const n = Object.entries(t).reduce((r, [i, s]) => {
      if (i.match(R1)) {
        const o = i.slice(rg.length);
        r[o] = s;
      }
      return r;
    }, {});
    if (Object.keys(n).length > 0) return n;
  }
  function ig(e) {
    if (!e) return;
    const t = Object.entries(e).reduce(
      (n, [r, i]) => (i && (n[`${rg}${r}`] = i), n),
      {},
    );
    return O1(t);
  }
  function Dd(e) {
    return e
      .split(",")
      .map((t) => t.split("=").map((n) => decodeURIComponent(n.trim())))
      .reduce((t, [n, r]) => ((t[n] = r), t), {});
  }
  function O1(e) {
    if (Object.keys(e).length !== 0)
      return Object.entries(e).reduce((t, [n, r], i) => {
        const s = `${encodeURIComponent(n)}=${encodeURIComponent(r)}`,
          o = i === 0 ? s : `${t},${s}`;
        return o.length > x1
          ? (Pi &&
              w.warn(
                `Not adding key: ${n} with val: ${r} to baggage header due to exceeding baggage size limits.`,
              ),
            t)
          : o;
      }, "");
  }
  const D1 = new RegExp(
    "^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$",
  );
  function L1(e) {
    if (!e) return;
    const t = e.match(D1);
    if (!t) return;
    let n;
    return (
      t[3] === "1" ? (n = !0) : t[3] === "0" && (n = !1),
      { traceId: t[1], parentSampled: n, parentSpanId: t[2] }
    );
  }
  function M1(e, t) {
    const n = L1(e),
      r = P1(t),
      { traceId: i, parentSpanId: s, parentSampled: o } = n || {};
    return n
      ? {
          traceId: i || ie(),
          parentSpanId: s || ie().substring(16),
          spanId: ie().substring(16),
          sampled: o,
          dsc: r || {},
        }
      : { traceId: i || ie(), spanId: ie().substring(16) };
  }
  function lc(e = ie(), t = ie().substring(16), n) {
    let r = "";
    return (n !== void 0 && (r = n ? "-1" : "-0"), `${e}-${t}${r}`);
  }
  function A1(e, t = []) {
    return [e, t];
  }
  const b = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
    sg = "production";
  function $1() {
    return Zm("globalEventProcessors", () => []);
  }
  function Hu(e, t, n, r = 0) {
    return new Pt((i, s) => {
      const o = e[r];
      if (t === null || typeof o != "function") i(t);
      else {
        const a = o({ ...t }, n);
        (b &&
          o.id &&
          a === null &&
          w.log(`Event processor "${o.id}" dropped event`),
          oc(a)
            ? a.then((u) => Hu(e, u, n, r + 1).then(i)).then(null, s)
            : Hu(e, a, n, r + 1)
                .then(i)
                .then(null, s));
      }
    });
  }
  function F1(e) {
    const t = Li(),
      n = {
        sid: ie(),
        init: !0,
        timestamp: t,
        started: t,
        duration: 0,
        status: "ok",
        errors: 0,
        ignoreDuration: !1,
        toJSON: () => U1(n),
      };
    return (e && Mo(n, e), n);
  }
  function Mo(e, t = {}) {
    if (
      (t.user &&
        (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address),
        !e.did &&
          !t.did &&
          (e.did = t.user.id || t.user.email || t.user.username)),
      (e.timestamp = t.timestamp || Li()),
      t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism),
      t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
      t.sid && (e.sid = t.sid.length === 32 ? t.sid : ie()),
      t.init !== void 0 && (e.init = t.init),
      !e.did && t.did && (e.did = `${t.did}`),
      typeof t.started == "number" && (e.started = t.started),
      e.ignoreDuration)
    )
      e.duration = void 0;
    else if (typeof t.duration == "number") e.duration = t.duration;
    else {
      const n = e.timestamp - e.started;
      e.duration = n >= 0 ? n : 0;
    }
    (t.release && (e.release = t.release),
      t.environment && (e.environment = t.environment),
      !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress),
      !e.userAgent && t.userAgent && (e.userAgent = t.userAgent),
      typeof t.errors == "number" && (e.errors = t.errors),
      t.status && (e.status = t.status));
  }
  function b1(e, t) {
    let n = {};
    (e.status === "ok" && (n = { status: "exited" }), Mo(e, n));
  }
  function U1(e) {
    return qe({
      sid: `${e.sid}`,
      init: e.init,
      started: new Date(e.started * 1e3).toISOString(),
      timestamp: new Date(e.timestamp * 1e3).toISOString(),
      status: e.status,
      errors: e.errors,
      did:
        typeof e.did == "number" || typeof e.did == "string"
          ? `${e.did}`
          : void 0,
      duration: e.duration,
      abnormal_mechanism: e.abnormal_mechanism,
      attrs: {
        release: e.release,
        environment: e.environment,
        ip_address: e.ipAddress,
        user_agent: e.userAgent,
      },
    });
  }
  const j1 = 0,
    og = 1;
  function cc(e) {
    const { spanId: t, traceId: n } = e.spanContext(),
      {
        data: r,
        op: i,
        parent_span_id: s,
        status: o,
        tags: a,
        origin: u,
      } = Re(e);
    return qe({
      data: r,
      op: i,
      parent_span_id: s,
      span_id: t,
      status: o,
      tags: a,
      trace_id: n,
      origin: u,
    });
  }
  function Ao(e) {
    const { traceId: t, spanId: n } = e.spanContext(),
      r = fc(e);
    return lc(t, n, r);
  }
  function $o(e) {
    return typeof e == "number"
      ? Ld(e)
      : Array.isArray(e)
        ? e[0] + e[1] / 1e9
        : e instanceof Date
          ? Ld(e.getTime())
          : Li();
  }
  function Ld(e) {
    return e > 9999999999 ? e / 1e3 : e;
  }
  function Re(e) {
    return z1(e)
      ? e.getSpanJSON()
      : typeof e.toJSON == "function"
        ? e.toJSON()
        : {};
  }
  function z1(e) {
    return typeof e.getSpanJSON == "function";
  }
  function fc(e) {
    const { traceFlags: t } = e.spanContext();
    return !!(t & og);
  }
  function vr() {
    return Tr().getClient();
  }
  function Sr() {
    return Tr().getScope();
  }
  function ao(e) {
    return e.transaction;
  }
  function dc(e, t, n) {
    const r = t.getOptions(),
      { publicKey: i } = t.getDsn() || {},
      { segment: s } = (n && n.getUser()) || {},
      o = qe({
        environment: r.environment || sg,
        release: r.release,
        user_segment: s,
        public_key: i,
        trace_id: e,
      });
    return (t.emit && t.emit("createDsc", o), o);
  }
  function lr(e) {
    const t = vr();
    if (!t) return {};
    const n = dc(Re(e).trace_id || "", t, Sr()),
      r = ao(e);
    if (!r) return n;
    const i = r && r._frozenDynamicSamplingContext;
    if (i) return i;
    const { sampleRate: s, source: o } = r.metadata;
    s != null && (n.sample_rate = `${s}`);
    const a = Re(r);
    return (
      o && o !== "url" && (n.transaction = a.description),
      (n.sampled = String(fc(r))),
      t.emit && t.emit("createDsc", n),
      n
    );
  }
  function H1(e, t) {
    const {
      fingerprint: n,
      span: r,
      breadcrumbs: i,
      sdkProcessingMetadata: s,
    } = t;
    (B1(e, t), r && V1(e, r), Y1(e, n), W1(e, i), G1(e, s));
  }
  function B1(e, t) {
    const {
        extra: n,
        tags: r,
        user: i,
        contexts: s,
        level: o,
        transactionName: a,
      } = t,
      u = qe(n);
    u && Object.keys(u).length && (e.extra = { ...u, ...e.extra });
    const l = qe(r);
    l && Object.keys(l).length && (e.tags = { ...l, ...e.tags });
    const c = qe(i);
    c && Object.keys(c).length && (e.user = { ...c, ...e.user });
    const f = qe(s);
    (f && Object.keys(f).length && (e.contexts = { ...f, ...e.contexts }),
      o && (e.level = o),
      a && (e.transaction = a));
  }
  function W1(e, t) {
    const n = [...(e.breadcrumbs || []), ...t];
    e.breadcrumbs = n.length ? n : void 0;
  }
  function G1(e, t) {
    e.sdkProcessingMetadata = { ...e.sdkProcessingMetadata, ...t };
  }
  function V1(e, t) {
    e.contexts = { trace: cc(t), ...e.contexts };
    const n = ao(t);
    if (n) {
      e.sdkProcessingMetadata = {
        dynamicSamplingContext: lr(t),
        ...e.sdkProcessingMetadata,
      };
      const r = Re(n).description;
      r && (e.tags = { transaction: r, ...e.tags });
    }
  }
  function Y1(e, t) {
    ((e.fingerprint = e.fingerprint ? a1(e.fingerprint) : []),
      t && (e.fingerprint = e.fingerprint.concat(t)),
      e.fingerprint && !e.fingerprint.length && delete e.fingerprint);
  }
  const K1 = 100;
  class Xn {
    constructor() {
      ((this._notifyingListeners = !1),
        (this._scopeListeners = []),
        (this._eventProcessors = []),
        (this._breadcrumbs = []),
        (this._attachments = []),
        (this._user = {}),
        (this._tags = {}),
        (this._extra = {}),
        (this._contexts = {}),
        (this._sdkProcessingMetadata = {}),
        (this._propagationContext = Md()));
    }
    static clone(t) {
      return t ? t.clone() : new Xn();
    }
    clone() {
      const t = new Xn();
      return (
        (t._breadcrumbs = [...this._breadcrumbs]),
        (t._tags = { ...this._tags }),
        (t._extra = { ...this._extra }),
        (t._contexts = { ...this._contexts }),
        (t._user = this._user),
        (t._level = this._level),
        (t._span = this._span),
        (t._session = this._session),
        (t._transactionName = this._transactionName),
        (t._fingerprint = this._fingerprint),
        (t._eventProcessors = [...this._eventProcessors]),
        (t._requestSession = this._requestSession),
        (t._attachments = [...this._attachments]),
        (t._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }),
        (t._propagationContext = { ...this._propagationContext }),
        (t._client = this._client),
        t
      );
    }
    setClient(t) {
      this._client = t;
    }
    getClient() {
      return this._client;
    }
    addScopeListener(t) {
      this._scopeListeners.push(t);
    }
    addEventProcessor(t) {
      return (this._eventProcessors.push(t), this);
    }
    setUser(t) {
      return (
        (this._user = t || {
          email: void 0,
          id: void 0,
          ip_address: void 0,
          segment: void 0,
          username: void 0,
        }),
        this._session && Mo(this._session, { user: t }),
        this._notifyScopeListeners(),
        this
      );
    }
    getUser() {
      return this._user;
    }
    getRequestSession() {
      return this._requestSession;
    }
    setRequestSession(t) {
      return ((this._requestSession = t), this);
    }
    setTags(t) {
      return (
        (this._tags = { ...this._tags, ...t }),
        this._notifyScopeListeners(),
        this
      );
    }
    setTag(t, n) {
      return (
        (this._tags = { ...this._tags, [t]: n }),
        this._notifyScopeListeners(),
        this
      );
    }
    setExtras(t) {
      return (
        (this._extra = { ...this._extra, ...t }),
        this._notifyScopeListeners(),
        this
      );
    }
    setExtra(t, n) {
      return (
        (this._extra = { ...this._extra, [t]: n }),
        this._notifyScopeListeners(),
        this
      );
    }
    setFingerprint(t) {
      return ((this._fingerprint = t), this._notifyScopeListeners(), this);
    }
    setLevel(t) {
      return ((this._level = t), this._notifyScopeListeners(), this);
    }
    setTransactionName(t) {
      return ((this._transactionName = t), this._notifyScopeListeners(), this);
    }
    setContext(t, n) {
      return (
        n === null ? delete this._contexts[t] : (this._contexts[t] = n),
        this._notifyScopeListeners(),
        this
      );
    }
    setSpan(t) {
      return ((this._span = t), this._notifyScopeListeners(), this);
    }
    getSpan() {
      return this._span;
    }
    getTransaction() {
      const t = this._span;
      return t && t.transaction;
    }
    setSession(t) {
      return (
        t ? (this._session = t) : delete this._session,
        this._notifyScopeListeners(),
        this
      );
    }
    getSession() {
      return this._session;
    }
    update(t) {
      if (!t) return this;
      const n = typeof t == "function" ? t(this) : t;
      if (n instanceof Xn) {
        const r = n.getScopeData();
        ((this._tags = { ...this._tags, ...r.tags }),
          (this._extra = { ...this._extra, ...r.extra }),
          (this._contexts = { ...this._contexts, ...r.contexts }),
          r.user && Object.keys(r.user).length && (this._user = r.user),
          r.level && (this._level = r.level),
          r.fingerprint.length && (this._fingerprint = r.fingerprint),
          n.getRequestSession() &&
            (this._requestSession = n.getRequestSession()),
          r.propagationContext &&
            (this._propagationContext = r.propagationContext));
      } else if (Jm(n)) {
        const r = t;
        ((this._tags = { ...this._tags, ...r.tags }),
          (this._extra = { ...this._extra, ...r.extra }),
          (this._contexts = { ...this._contexts, ...r.contexts }),
          r.user && (this._user = r.user),
          r.level && (this._level = r.level),
          r.fingerprint && (this._fingerprint = r.fingerprint),
          r.requestSession && (this._requestSession = r.requestSession),
          r.propagationContext &&
            (this._propagationContext = r.propagationContext));
      }
      return this;
    }
    clear() {
      return (
        (this._breadcrumbs = []),
        (this._tags = {}),
        (this._extra = {}),
        (this._user = {}),
        (this._contexts = {}),
        (this._level = void 0),
        (this._transactionName = void 0),
        (this._fingerprint = void 0),
        (this._requestSession = void 0),
        (this._span = void 0),
        (this._session = void 0),
        this._notifyScopeListeners(),
        (this._attachments = []),
        (this._propagationContext = Md()),
        this
      );
    }
    addBreadcrumb(t, n) {
      const r = typeof n == "number" ? n : K1;
      if (r <= 0) return this;
      const i = { timestamp: uc(), ...t },
        s = this._breadcrumbs;
      return (
        s.push(i),
        (this._breadcrumbs = s.length > r ? s.slice(-r) : s),
        this._notifyScopeListeners(),
        this
      );
    }
    getLastBreadcrumb() {
      return this._breadcrumbs[this._breadcrumbs.length - 1];
    }
    clearBreadcrumbs() {
      return ((this._breadcrumbs = []), this._notifyScopeListeners(), this);
    }
    addAttachment(t) {
      return (this._attachments.push(t), this);
    }
    getAttachments() {
      return this.getScopeData().attachments;
    }
    clearAttachments() {
      return ((this._attachments = []), this);
    }
    getScopeData() {
      const {
        _breadcrumbs: t,
        _attachments: n,
        _contexts: r,
        _tags: i,
        _extra: s,
        _user: o,
        _level: a,
        _fingerprint: u,
        _eventProcessors: l,
        _propagationContext: c,
        _sdkProcessingMetadata: f,
        _transactionName: d,
        _span: m,
      } = this;
      return {
        breadcrumbs: t,
        attachments: n,
        contexts: r,
        tags: i,
        extra: s,
        user: o,
        level: a,
        fingerprint: u || [],
        eventProcessors: l,
        propagationContext: c,
        sdkProcessingMetadata: f,
        transactionName: d,
        span: m,
      };
    }
    applyToEvent(t, n = {}, r = []) {
      H1(t, this.getScopeData());
      const i = [...r, ...$1(), ...this._eventProcessors];
      return Hu(i, t, n);
    }
    setSDKProcessingMetadata(t) {
      return (
        (this._sdkProcessingMetadata = {
          ...this._sdkProcessingMetadata,
          ...t,
        }),
        this
      );
    }
    setPropagationContext(t) {
      return ((this._propagationContext = t), this);
    }
    getPropagationContext() {
      return this._propagationContext;
    }
    captureException(t, n) {
      const r = n && n.event_id ? n.event_id : ie();
      if (!this._client)
        return (
          w.warn("No client configured on scope - will not capture exception!"),
          r
        );
      const i = new Error("Sentry syntheticException");
      return (
        this._client.captureException(
          t,
          { originalException: t, syntheticException: i, ...n, event_id: r },
          this,
        ),
        r
      );
    }
    captureMessage(t, n, r) {
      const i = r && r.event_id ? r.event_id : ie();
      if (!this._client)
        return (
          w.warn("No client configured on scope - will not capture message!"),
          i
        );
      const s = new Error(t);
      return (
        this._client.captureMessage(
          t,
          n,
          { originalException: t, syntheticException: s, ...r, event_id: i },
          this,
        ),
        i
      );
    }
    captureEvent(t, n) {
      const r = n && n.event_id ? n.event_id : ie();
      return this._client
        ? (this._client.captureEvent(t, { ...n, event_id: r }, this), r)
        : (w.warn("No client configured on scope - will not capture event!"),
          r);
    }
    _notifyScopeListeners() {
      this._notifyingListeners ||
        ((this._notifyingListeners = !0),
        this._scopeListeners.forEach((t) => {
          t(this);
        }),
        (this._notifyingListeners = !1));
    }
  }
  function Md() {
    return { traceId: ie(), spanId: ie().substring(16) };
  }
  const X1 = "7.120.4",
    ag = parseFloat(X1),
    q1 = 100;
  class ug {
    constructor(t, n, r, i = ag) {
      this._version = i;
      let s;
      n ? (s = n) : ((s = new Xn()), s.setClient(t));
      let o;
      (r ? (o = r) : ((o = new Xn()), o.setClient(t)),
        (this._stack = [{ scope: s }]),
        t && this.bindClient(t),
        (this._isolationScope = o));
    }
    isOlderThan(t) {
      return this._version < t;
    }
    bindClient(t) {
      const n = this.getStackTop();
      ((n.client = t),
        n.scope.setClient(t),
        t && t.setupIntegrations && t.setupIntegrations());
    }
    pushScope() {
      const t = this.getScope().clone();
      return (this.getStack().push({ client: this.getClient(), scope: t }), t);
    }
    popScope() {
      return this.getStack().length <= 1 ? !1 : !!this.getStack().pop();
    }
    withScope(t) {
      const n = this.pushScope();
      let r;
      try {
        r = t(n);
      } catch (i) {
        throw (this.popScope(), i);
      }
      return oc(r)
        ? r.then(
            (i) => (this.popScope(), i),
            (i) => {
              throw (this.popScope(), i);
            },
          )
        : (this.popScope(), r);
    }
    getClient() {
      return this.getStackTop().client;
    }
    getScope() {
      return this.getStackTop().scope;
    }
    getIsolationScope() {
      return this._isolationScope;
    }
    getStack() {
      return this._stack;
    }
    getStackTop() {
      return this._stack[this._stack.length - 1];
    }
    captureException(t, n) {
      const r = (this._lastEventId = n && n.event_id ? n.event_id : ie()),
        i = new Error("Sentry syntheticException");
      return (
        this.getScope().captureException(t, {
          originalException: t,
          syntheticException: i,
          ...n,
          event_id: r,
        }),
        r
      );
    }
    captureMessage(t, n, r) {
      const i = (this._lastEventId = r && r.event_id ? r.event_id : ie()),
        s = new Error(t);
      return (
        this.getScope().captureMessage(t, n, {
          originalException: t,
          syntheticException: s,
          ...r,
          event_id: i,
        }),
        i
      );
    }
    captureEvent(t, n) {
      const r = n && n.event_id ? n.event_id : ie();
      return (
        t.type || (this._lastEventId = r),
        this.getScope().captureEvent(t, { ...n, event_id: r }),
        r
      );
    }
    lastEventId() {
      return this._lastEventId;
    }
    addBreadcrumb(t, n) {
      const { scope: r, client: i } = this.getStackTop();
      if (!i) return;
      const { beforeBreadcrumb: s = null, maxBreadcrumbs: o = q1 } =
        (i.getOptions && i.getOptions()) || {};
      if (o <= 0) return;
      const u = { timestamp: uc(), ...t },
        l = s ? eg(() => s(u, n)) : u;
      l !== null &&
        (i.emit && i.emit("beforeAddBreadcrumb", l, n), r.addBreadcrumb(l, o));
    }
    setUser(t) {
      (this.getScope().setUser(t), this.getIsolationScope().setUser(t));
    }
    setTags(t) {
      (this.getScope().setTags(t), this.getIsolationScope().setTags(t));
    }
    setExtras(t) {
      (this.getScope().setExtras(t), this.getIsolationScope().setExtras(t));
    }
    setTag(t, n) {
      (this.getScope().setTag(t, n), this.getIsolationScope().setTag(t, n));
    }
    setExtra(t, n) {
      (this.getScope().setExtra(t, n), this.getIsolationScope().setExtra(t, n));
    }
    setContext(t, n) {
      (this.getScope().setContext(t, n),
        this.getIsolationScope().setContext(t, n));
    }
    configureScope(t) {
      const { scope: n, client: r } = this.getStackTop();
      r && t(n);
    }
    run(t) {
      const n = Ad(this);
      try {
        t(this);
      } finally {
        Ad(n);
      }
    }
    getIntegration(t) {
      const n = this.getClient();
      if (!n) return null;
      try {
        return n.getIntegration(t);
      } catch {
        return (
          b &&
            w.warn(`Cannot retrieve integration ${t.id} from the current Hub`),
          null
        );
      }
    }
    startTransaction(t, n) {
      const r = this._callExtensionMethod("startTransaction", t, n);
      return (
        b &&
          !r &&
          (this.getClient()
            ? w.warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`)
            : w.warn(
                "Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'",
              )),
        r
      );
    }
    traceHeaders() {
      return this._callExtensionMethod("traceHeaders");
    }
    captureSession(t = !1) {
      if (t) return this.endSession();
      this._sendSessionUpdate();
    }
    endSession() {
      const n = this.getStackTop().scope,
        r = n.getSession();
      (r && b1(r), this._sendSessionUpdate(), n.setSession());
    }
    startSession(t) {
      const { scope: n, client: r } = this.getStackTop(),
        { release: i, environment: s = sg } = (r && r.getOptions()) || {},
        { userAgent: o } = X.navigator || {},
        a = F1({
          release: i,
          environment: s,
          user: n.getUser(),
          ...(o && { userAgent: o }),
          ...t,
        }),
        u = n.getSession && n.getSession();
      return (
        u && u.status === "ok" && Mo(u, { status: "exited" }),
        this.endSession(),
        n.setSession(a),
        a
      );
    }
    shouldSendDefaultPii() {
      const t = this.getClient(),
        n = t && t.getOptions();
      return !!(n && n.sendDefaultPii);
    }
    _sendSessionUpdate() {
      const { scope: t, client: n } = this.getStackTop(),
        r = t.getSession();
      r && n && n.captureSession && n.captureSession(r);
    }
    _callExtensionMethod(t, ...n) {
      const i = Er().__SENTRY__;
      if (i && i.extensions && typeof i.extensions[t] == "function")
        return i.extensions[t].apply(this, n);
      b && w.warn(`Extension method ${t} couldn't be found, doing nothing.`);
    }
  }
  function Er() {
    return (
      (X.__SENTRY__ = X.__SENTRY__ || { extensions: {}, hub: void 0 }),
      X
    );
  }
  function Ad(e) {
    const t = Er(),
      n = Bu(t);
    return (lg(t, e), n);
  }
  function Tr() {
    const e = Er();
    if (e.__SENTRY__ && e.__SENTRY__.acs) {
      const t = e.__SENTRY__.acs.getCurrentHub();
      if (t) return t;
    }
    return Q1(e);
  }
  function pc() {
    return Tr().getIsolationScope();
  }
  function Q1(e = Er()) {
    return ((!J1(e) || Bu(e).isOlderThan(ag)) && lg(e, new ug()), Bu(e));
  }
  function J1(e) {
    return !!(e && e.__SENTRY__ && e.__SENTRY__.hub);
  }
  function Bu(e) {
    return Zm("hub", () => new ug(), e);
  }
  function lg(e, t) {
    if (!e) return !1;
    const n = (e.__SENTRY__ = e.__SENTRY__ || {});
    return ((n.hub = t), !0);
  }
  function En(e) {
    return (e || Tr()).getScope().getTransaction();
  }
  let $d = !1;
  function Z1() {
    $d || (($d = !0), p1(Wu), m1(Wu));
  }
  function Wu() {
    const e = En();
    if (e) {
      const t = "internal_error";
      (b && w.log(`[Tracing] Transaction: ${t} -> Global error occured`),
        e.setStatus(t));
    }
  }
  Wu.tag = "sentry_tracingErrorCallback";
  var Fd;
  (function (e) {
    const t = "ok";
    e.Ok = t;
    const n = "deadline_exceeded";
    e.DeadlineExceeded = n;
    const r = "unauthenticated";
    e.Unauthenticated = r;
    const i = "permission_denied";
    e.PermissionDenied = i;
    const s = "not_found";
    e.NotFound = s;
    const o = "resource_exhausted";
    e.ResourceExhausted = o;
    const a = "invalid_argument";
    e.InvalidArgument = a;
    const u = "unimplemented";
    e.Unimplemented = u;
    const l = "unavailable";
    e.Unavailable = l;
    const c = "internal_error";
    e.InternalError = c;
    const f = "unknown_error";
    e.UnknownError = f;
    const d = "cancelled";
    e.Cancelled = d;
    const m = "already_exists";
    e.AlreadyExists = m;
    const _ = "failed_precondition";
    e.FailedPrecondition = _;
    const y = "aborted";
    e.Aborted = y;
    const C = "out_of_range";
    e.OutOfRange = C;
    const h = "data_loss";
    e.DataLoss = h;
  })(Fd || (Fd = {}));
  function ew(e) {
    if (e < 400 && e >= 100) return "ok";
    if (e >= 400 && e < 500)
      switch (e) {
        case 401:
          return "unauthenticated";
        case 403:
          return "permission_denied";
        case 404:
          return "not_found";
        case 409:
          return "already_exists";
        case 413:
          return "failed_precondition";
        case 429:
          return "resource_exhausted";
        default:
          return "invalid_argument";
      }
    if (e >= 500 && e < 600)
      switch (e) {
        case 501:
          return "unimplemented";
        case 503:
          return "unavailable";
        case 504:
          return "deadline_exceeded";
        default:
          return "internal_error";
      }
    return "unknown_error";
  }
  function hc(e, t) {
    (e.setTag("http.status_code", String(t)),
      e.setData("http.response.status_code", t));
    const n = ew(t);
    n !== "unknown_error" && e.setStatus(n);
  }
  function wr(e) {
    if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__)
      return !1;
    const t = vr(),
      n = e || (t && t.getOptions());
    return (
      !!n &&
      (n.enableTracing || "tracesSampleRate" in n || "tracesSampler" in n)
    );
  }
  function cg(e) {
    if (!wr()) return;
    const t = rw(e),
      n = Tr(),
      r = e.scope ? e.scope.getSpan() : tw();
    if (e.onlyIfParent && !r) return;
    const o = (e.scope || Sr()).clone();
    return nw(n, {
      parentSpan: r,
      spanContext: t,
      forceTransaction: e.forceTransaction,
      scope: o,
    });
  }
  function tw() {
    return Sr().getSpan();
  }
  function nw(
    e,
    { parentSpan: t, spanContext: n, forceTransaction: r, scope: i },
  ) {
    if (!wr()) return;
    const s = pc();
    let o;
    if (t && !r) o = t.startChild(n);
    else if (t) {
      const a = lr(t),
        { traceId: u, spanId: l } = t.spanContext(),
        c = fc(t);
      o = e.startTransaction({
        traceId: u,
        parentSpanId: l,
        parentSampled: c,
        ...n,
        metadata: { dynamicSamplingContext: a, ...n.metadata },
      });
    } else {
      const {
        traceId: a,
        dsc: u,
        parentSpanId: l,
        sampled: c,
      } = { ...s.getPropagationContext(), ...i.getPropagationContext() };
      o = e.startTransaction({
        traceId: a,
        parentSpanId: l,
        parentSampled: c,
        ...n,
        metadata: { dynamicSamplingContext: u, ...n.metadata },
      });
    }
    return (i.setSpan(o), iw(o, i, s), o);
  }
  function rw(e) {
    if (e.startTime) {
      const t = { ...e };
      return ((t.startTimestamp = $o(e.startTime)), delete t.startTime, t);
    }
    return e;
  }
  const fg = "_sentryScope",
    dg = "_sentryIsolationScope";
  function iw(e, t, n) {
    e && (Fu(e, dg, n), Fu(e, fg, t));
  }
  function sw(e) {
    return { scope: e[fg], isolationScope: e[dg] };
  }
  const qn = "sentry.source",
    zn = "sentry.sample_rate",
    ds = "sentry.op",
    Hn = "sentry.origin",
    ow = "profile_id";
  class pg {
    constructor(t = 1e3) {
      ((this._maxlen = t), (this.spans = []));
    }
    add(t) {
      this.spans.length > this._maxlen
        ? (t.spanRecorder = void 0)
        : this.spans.push(t);
    }
  }
  class Fo {
    constructor(t = {}) {
      ((this._traceId = t.traceId || ie()),
        (this._spanId = t.spanId || ie().substring(16)),
        (this._startTime = t.startTimestamp || Li()),
        (this.tags = t.tags ? { ...t.tags } : {}),
        (this.data = t.data ? { ...t.data } : {}),
        (this.instrumenter = t.instrumenter || "sentry"),
        (this._attributes = {}),
        this.setAttributes({
          [Hn]: t.origin || "manual",
          [ds]: t.op,
          ...t.attributes,
        }),
        (this._name = t.name || t.description),
        t.parentSpanId && (this._parentSpanId = t.parentSpanId),
        "sampled" in t && (this._sampled = t.sampled),
        t.status && (this._status = t.status),
        t.endTimestamp && (this._endTime = t.endTimestamp),
        t.exclusiveTime !== void 0 && (this._exclusiveTime = t.exclusiveTime),
        (this._measurements = t.measurements ? { ...t.measurements } : {}));
    }
    get name() {
      return this._name || "";
    }
    set name(t) {
      this.updateName(t);
    }
    get description() {
      return this._name;
    }
    set description(t) {
      this._name = t;
    }
    get traceId() {
      return this._traceId;
    }
    set traceId(t) {
      this._traceId = t;
    }
    get spanId() {
      return this._spanId;
    }
    set spanId(t) {
      this._spanId = t;
    }
    set parentSpanId(t) {
      this._parentSpanId = t;
    }
    get parentSpanId() {
      return this._parentSpanId;
    }
    get sampled() {
      return this._sampled;
    }
    set sampled(t) {
      this._sampled = t;
    }
    get attributes() {
      return this._attributes;
    }
    set attributes(t) {
      this._attributes = t;
    }
    get startTimestamp() {
      return this._startTime;
    }
    set startTimestamp(t) {
      this._startTime = t;
    }
    get endTimestamp() {
      return this._endTime;
    }
    set endTimestamp(t) {
      this._endTime = t;
    }
    get status() {
      return this._status;
    }
    set status(t) {
      this._status = t;
    }
    get op() {
      return this._attributes[ds];
    }
    set op(t) {
      this.setAttribute(ds, t);
    }
    get origin() {
      return this._attributes[Hn];
    }
    set origin(t) {
      this.setAttribute(Hn, t);
    }
    spanContext() {
      const { _spanId: t, _traceId: n, _sampled: r } = this;
      return { spanId: t, traceId: n, traceFlags: r ? og : j1 };
    }
    startChild(t) {
      const n = new Fo({
        ...t,
        parentSpanId: this._spanId,
        sampled: this._sampled,
        traceId: this._traceId,
      });
      ((n.spanRecorder = this.spanRecorder),
        n.spanRecorder && n.spanRecorder.add(n));
      const r = ao(this);
      if (((n.transaction = r), b && r)) {
        const i = (t && t.op) || "< unknown op >",
          s = Re(n).description || "< unknown name >",
          o = r.spanContext().spanId,
          a = `[Tracing] Starting '${i}' span on transaction '${s}' (${o}).`;
        (w.log(a), (this._logMessage = a));
      }
      return n;
    }
    setTag(t, n) {
      return ((this.tags = { ...this.tags, [t]: n }), this);
    }
    setData(t, n) {
      return ((this.data = { ...this.data, [t]: n }), this);
    }
    setAttribute(t, n) {
      n === void 0 ? delete this._attributes[t] : (this._attributes[t] = n);
    }
    setAttributes(t) {
      Object.keys(t).forEach((n) => this.setAttribute(n, t[n]));
    }
    setStatus(t) {
      return ((this._status = t), this);
    }
    setHttpStatus(t) {
      return (hc(this, t), this);
    }
    setName(t) {
      this.updateName(t);
    }
    updateName(t) {
      return ((this._name = t), this);
    }
    isSuccess() {
      return this._status === "ok";
    }
    finish(t) {
      return this.end(t);
    }
    end(t) {
      if (this._endTime) return;
      const n = ao(this);
      if (b && n && n.spanContext().spanId !== this._spanId) {
        const r = this._logMessage;
        r && w.log(r.replace("Starting", "Finishing"));
      }
      this._endTime = $o(t);
    }
    toTraceparent() {
      return Ao(this);
    }
    toContext() {
      return qe({
        data: this._getData(),
        description: this._name,
        endTimestamp: this._endTime,
        op: this.op,
        parentSpanId: this._parentSpanId,
        sampled: this._sampled,
        spanId: this._spanId,
        startTimestamp: this._startTime,
        status: this._status,
        tags: this.tags,
        traceId: this._traceId,
      });
    }
    updateWithContext(t) {
      return (
        (this.data = t.data || {}),
        (this._name = t.name || t.description),
        (this._endTime = t.endTimestamp),
        (this.op = t.op),
        (this._parentSpanId = t.parentSpanId),
        (this._sampled = t.sampled),
        (this._spanId = t.spanId || this._spanId),
        (this._startTime = t.startTimestamp || this._startTime),
        (this._status = t.status),
        (this.tags = t.tags || {}),
        (this._traceId = t.traceId || this._traceId),
        this
      );
    }
    getTraceContext() {
      return cc(this);
    }
    getSpanJSON() {
      return qe({
        data: this._getData(),
        description: this._name,
        op: this._attributes[ds],
        parent_span_id: this._parentSpanId,
        span_id: this._spanId,
        start_timestamp: this._startTime,
        status: this._status,
        tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
        timestamp: this._endTime,
        trace_id: this._traceId,
        origin: this._attributes[Hn],
        _metrics_summary: void 0,
        profile_id: this._attributes[ow],
        exclusive_time: this._exclusiveTime,
        measurements:
          Object.keys(this._measurements).length > 0
            ? this._measurements
            : void 0,
      });
    }
    isRecording() {
      return !this._endTime && !!this._sampled;
    }
    toJSON() {
      return this.getSpanJSON();
    }
    _getData() {
      const { data: t, _attributes: n } = this,
        r = Object.keys(t).length > 0,
        i = Object.keys(n).length > 0;
      if (!(!r && !i)) return r && i ? { ...t, ...n } : r ? t : n;
    }
  }
  class hg extends Fo {
    constructor(t, n) {
      (super(t),
        (this._contexts = {}),
        (this._hub = n || Tr()),
        (this._name = t.name || ""),
        (this._metadata = { ...t.metadata }),
        (this._trimEnd = t.trimEnd),
        (this.transaction = this));
      const r = this._metadata.dynamicSamplingContext;
      r && (this._frozenDynamicSamplingContext = { ...r });
    }
    get name() {
      return this._name;
    }
    set name(t) {
      this.setName(t);
    }
    get metadata() {
      return {
        source: "custom",
        spanMetadata: {},
        ...this._metadata,
        ...(this._attributes[qn] && { source: this._attributes[qn] }),
        ...(this._attributes[zn] && { sampleRate: this._attributes[zn] }),
      };
    }
    set metadata(t) {
      this._metadata = t;
    }
    setName(t, n = "custom") {
      ((this._name = t), this.setAttribute(qn, n));
    }
    updateName(t) {
      return ((this._name = t), this);
    }
    initSpanRecorder(t = 1e3) {
      (this.spanRecorder || (this.spanRecorder = new pg(t)),
        this.spanRecorder.add(this));
    }
    setContext(t, n) {
      n === null ? delete this._contexts[t] : (this._contexts[t] = n);
    }
    setMeasurement(t, n, r = "") {
      this._measurements[t] = { value: n, unit: r };
    }
    setMetadata(t) {
      this._metadata = { ...this._metadata, ...t };
    }
    end(t) {
      const n = $o(t),
        r = this._finishTransaction(n);
      if (r) return this._hub.captureEvent(r);
    }
    toContext() {
      const t = super.toContext();
      return qe({ ...t, name: this._name, trimEnd: this._trimEnd });
    }
    updateWithContext(t) {
      return (
        super.updateWithContext(t),
        (this._name = t.name || ""),
        (this._trimEnd = t.trimEnd),
        this
      );
    }
    getDynamicSamplingContext() {
      return lr(this);
    }
    setHub(t) {
      this._hub = t;
    }
    getProfileId() {
      if (this._contexts !== void 0 && this._contexts.profile !== void 0)
        return this._contexts.profile.profile_id;
    }
    _finishTransaction(t) {
      if (this._endTime !== void 0) return;
      (this._name ||
        (b &&
          w.warn(
            "Transaction has no name, falling back to `<unlabeled transaction>`.",
          ),
        (this._name = "<unlabeled transaction>")),
        super.end(t));
      const n = this._hub.getClient();
      if (
        (n && n.emit && n.emit("finishTransaction", this), this._sampled !== !0)
      ) {
        (b &&
          w.log(
            "[Tracing] Discarding transaction because its trace was not chosen to be sampled.",
          ),
          n && n.recordDroppedEvent("sample_rate", "transaction"));
        return;
      }
      const r = this.spanRecorder
        ? this.spanRecorder.spans.filter((c) => c !== this && Re(c).timestamp)
        : [];
      if (this._trimEnd && r.length > 0) {
        const c = r.map((f) => Re(f).timestamp).filter(Boolean);
        this._endTime = c.reduce((f, d) => (f > d ? f : d));
      }
      const { scope: i, isolationScope: s } = sw(this),
        { metadata: o } = this,
        { source: a } = o,
        u = {
          contexts: { ...this._contexts, trace: cc(this) },
          spans: r,
          start_timestamp: this._startTime,
          tags: this.tags,
          timestamp: this._endTime,
          transaction: this._name,
          type: "transaction",
          sdkProcessingMetadata: {
            ...o,
            capturedSpanScope: i,
            capturedSpanIsolationScope: s,
            ...qe({ dynamicSamplingContext: lr(this) }),
          },
          _metrics_summary: void 0,
          ...(a && { transaction_info: { source: a } }),
        };
      return (
        Object.keys(this._measurements).length > 0 &&
          (b &&
            w.log(
              "[Measurements] Adding measurements to transaction",
              JSON.stringify(this._measurements, void 0, 2),
            ),
          (u.measurements = this._measurements)),
        b &&
          w.log(`[Tracing] Finishing ${this.op} transaction: ${this._name}.`),
        u
      );
    }
  }
  const Ls = { idleTimeout: 1e3, finalTimeout: 3e4, heartbeatInterval: 5e3 },
    aw = "finishReason",
    Rn = [
      "heartbeatFailed",
      "idleTimeout",
      "documentHidden",
      "finalTimeout",
      "externalFinish",
      "cancelled",
    ];
  class uw extends pg {
    constructor(t, n, r, i) {
      (super(i),
        (this._pushActivity = t),
        (this._popActivity = n),
        (this.transactionSpanId = r));
    }
    add(t) {
      if (t.spanContext().spanId !== this.transactionSpanId) {
        const n = t.end;
        ((t.end = (...r) => (
          this._popActivity(t.spanContext().spanId),
          n.apply(t, r)
        )),
          Re(t).timestamp === void 0 &&
            this._pushActivity(t.spanContext().spanId));
      }
      super.add(t);
    }
  }
  class lw extends hg {
    constructor(
      t,
      n,
      r = Ls.idleTimeout,
      i = Ls.finalTimeout,
      s = Ls.heartbeatInterval,
      o = !1,
      a = !1,
    ) {
      (super(t, n),
        (this._idleHub = n),
        (this._idleTimeout = r),
        (this._finalTimeout = i),
        (this._heartbeatInterval = s),
        (this._onScope = o),
        (this.activities = {}),
        (this._heartbeatCounter = 0),
        (this._finished = !1),
        (this._idleTimeoutCanceledPermanently = !1),
        (this._beforeFinishCallbacks = []),
        (this._finishReason = Rn[4]),
        (this._autoFinishAllowed = !a),
        o &&
          (b &&
            w.log(
              `Setting idle transaction on scope. Span ID: ${this.spanContext().spanId}`,
            ),
          n.getScope().setSpan(this)),
        a || this._restartIdleTimeout(),
        setTimeout(() => {
          this._finished ||
            (this.setStatus("deadline_exceeded"),
            (this._finishReason = Rn[3]),
            this.end());
        }, this._finalTimeout));
    }
    end(t) {
      const n = $o(t);
      if (
        ((this._finished = !0),
        (this.activities = {}),
        this.op === "ui.action.click" &&
          this.setAttribute(aw, this._finishReason),
        this.spanRecorder)
      ) {
        b &&
          w.log(
            "[Tracing] finishing IdleTransaction",
            new Date(n * 1e3).toISOString(),
            this.op,
          );
        for (const r of this._beforeFinishCallbacks) r(this, n);
        ((this.spanRecorder.spans = this.spanRecorder.spans.filter((r) => {
          if (r.spanContext().spanId === this.spanContext().spanId) return !0;
          Re(r).timestamp ||
            (r.setStatus("cancelled"),
            r.end(n),
            b &&
              w.log(
                "[Tracing] cancelling span since transaction ended early",
                JSON.stringify(r, void 0, 2),
              ));
          const { start_timestamp: i, timestamp: s } = Re(r),
            o = i && i < n,
            a = (this._finalTimeout + this._idleTimeout) / 1e3,
            u = s && i && s - i < a;
          if (b) {
            const l = JSON.stringify(r, void 0, 2);
            o
              ? u ||
                w.log(
                  "[Tracing] discarding Span since it finished after Transaction final timeout",
                  l,
                )
              : w.log(
                  "[Tracing] discarding Span since it happened after Transaction was finished",
                  l,
                );
          }
          return o && u;
        })),
          b && w.log("[Tracing] flushing IdleTransaction"));
      } else b && w.log("[Tracing] No active IdleTransaction");
      if (this._onScope) {
        const r = this._idleHub.getScope();
        r.getTransaction() === this && r.setSpan(void 0);
      }
      return super.end(t);
    }
    registerBeforeFinishCallback(t) {
      this._beforeFinishCallbacks.push(t);
    }
    initSpanRecorder(t) {
      if (!this.spanRecorder) {
        const n = (i) => {
            this._finished || this._pushActivity(i);
          },
          r = (i) => {
            this._finished || this._popActivity(i);
          };
        ((this.spanRecorder = new uw(n, r, this.spanContext().spanId, t)),
          b && w.log("Starting heartbeat"),
          this._pingHeartbeat());
      }
      this.spanRecorder.add(this);
    }
    cancelIdleTimeout(
      t,
      { restartOnChildSpanChange: n } = { restartOnChildSpanChange: !0 },
    ) {
      ((this._idleTimeoutCanceledPermanently = n === !1),
        this._idleTimeoutID &&
          (clearTimeout(this._idleTimeoutID),
          (this._idleTimeoutID = void 0),
          Object.keys(this.activities).length === 0 &&
            this._idleTimeoutCanceledPermanently &&
            ((this._finishReason = Rn[5]), this.end(t))));
    }
    setFinishReason(t) {
      this._finishReason = t;
    }
    sendAutoFinishSignal() {
      this._autoFinishAllowed ||
        (b && w.log("[Tracing] Received finish signal for idle transaction."),
        this._restartIdleTimeout(),
        (this._autoFinishAllowed = !0));
    }
    _restartIdleTimeout(t) {
      (this.cancelIdleTimeout(),
        (this._idleTimeoutID = setTimeout(() => {
          !this._finished &&
            Object.keys(this.activities).length === 0 &&
            ((this._finishReason = Rn[1]), this.end(t));
        }, this._idleTimeout)));
    }
    _pushActivity(t) {
      (this.cancelIdleTimeout(void 0, {
        restartOnChildSpanChange: !this._idleTimeoutCanceledPermanently,
      }),
        b && w.log(`[Tracing] pushActivity: ${t}`),
        (this.activities[t] = !0),
        b &&
          w.log(
            "[Tracing] new activities count",
            Object.keys(this.activities).length,
          ));
    }
    _popActivity(t) {
      if (
        (this.activities[t] &&
          (b && w.log(`[Tracing] popActivity ${t}`),
          delete this.activities[t],
          b &&
            w.log(
              "[Tracing] new activities count",
              Object.keys(this.activities).length,
            )),
        Object.keys(this.activities).length === 0)
      ) {
        const n = Li();
        this._idleTimeoutCanceledPermanently
          ? this._autoFinishAllowed &&
            ((this._finishReason = Rn[5]), this.end(n))
          : this._restartIdleTimeout(n + this._idleTimeout / 1e3);
      }
    }
    _beat() {
      if (this._finished) return;
      const t = Object.keys(this.activities).join("");
      (t === this._prevHeartbeatString
        ? this._heartbeatCounter++
        : (this._heartbeatCounter = 1),
        (this._prevHeartbeatString = t),
        this._heartbeatCounter >= 3
          ? this._autoFinishAllowed &&
            (b &&
              w.log(
                "[Tracing] Transaction finished because of no change for 3 heart beats",
              ),
            this.setStatus("deadline_exceeded"),
            (this._finishReason = Rn[0]),
            this.end())
          : this._pingHeartbeat());
    }
    _pingHeartbeat() {
      (b &&
        w.log(
          `pinging Heartbeat -> current counter: ${this._heartbeatCounter}`,
        ),
        setTimeout(() => {
          this._beat();
        }, this._heartbeatInterval));
    }
  }
  function mg(e, t, n) {
    if (!wr(t)) return ((e.sampled = !1), e);
    if (e.sampled !== void 0) return (e.setAttribute(zn, Number(e.sampled)), e);
    let r;
    return (
      typeof t.tracesSampler == "function"
        ? ((r = t.tracesSampler(n)), e.setAttribute(zn, Number(r)))
        : n.parentSampled !== void 0
          ? (r = n.parentSampled)
          : typeof t.tracesSampleRate < "u"
            ? ((r = t.tracesSampleRate), e.setAttribute(zn, Number(r)))
            : ((r = 1), e.setAttribute(zn, r)),
      gg(r)
        ? r
          ? ((e.sampled = Math.random() < r),
            e.sampled
              ? (b &&
                  w.log(
                    `[Tracing] starting ${e.op} transaction - ${Re(e).description}`,
                  ),
                e)
              : (b &&
                  w.log(
                    `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(r)})`,
                  ),
                e))
          : (b &&
              w.log(
                `[Tracing] Discarding transaction because ${typeof t.tracesSampler == "function" ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"}`,
              ),
            (e.sampled = !1),
            e)
        : (b &&
            w.warn(
              "[Tracing] Discarding transaction because of invalid sample rate.",
            ),
          (e.sampled = !1),
          e)
    );
  }
  function gg(e) {
    return XT(e) || !(typeof e == "number" || typeof e == "boolean")
      ? (b &&
          w.warn(
            `[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(e)} of type ${JSON.stringify(typeof e)}.`,
          ),
        !1)
      : e < 0 || e > 1
        ? (b &&
            w.warn(
              `[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${e}.`,
            ),
          !1)
        : !0;
  }
  function cw() {
    const t = this.getScope().getSpan();
    return t ? { "sentry-trace": Ao(t) } : {};
  }
  function fw(e, t) {
    const n = this.getClient(),
      r = (n && n.getOptions()) || {},
      i = r.instrumenter || "sentry",
      s = e.instrumenter || "sentry";
    i !== s &&
      (b &&
        w.error(`A transaction was started with instrumenter=\`${s}\`, but the SDK is configured with the \`${i}\` instrumenter.
The transaction will not be sampled. Please use the ${i} instrumentation to start transactions.`),
      (e.sampled = !1));
    let o = new hg(e, this);
    return (
      (o = mg(o, r, {
        name: e.name,
        parentSampled: e.parentSampled,
        transactionContext: e,
        attributes: { ...e.data, ...e.attributes },
        ...t,
      })),
      o.isRecording() &&
        o.initSpanRecorder(r._experiments && r._experiments.maxSpans),
      n && n.emit && n.emit("startTransaction", o),
      o
    );
  }
  function bd(e, t, n, r, i, s, o, a = !1) {
    const u = e.getClient(),
      l = (u && u.getOptions()) || {};
    let c = new lw(t, e, n, r, o, i, a);
    return (
      (c = mg(c, l, {
        name: t.name,
        parentSampled: t.parentSampled,
        transactionContext: t,
        attributes: { ...t.data, ...t.attributes },
        ...s,
      })),
      c.isRecording() &&
        c.initSpanRecorder(l._experiments && l._experiments.maxSpans),
      u && u.emit && u.emit("startTransaction", c),
      c
    );
  }
  function _g() {
    const e = Er();
    e.__SENTRY__ &&
      ((e.__SENTRY__.extensions = e.__SENTRY__.extensions || {}),
      e.__SENTRY__.extensions.startTransaction ||
        (e.__SENTRY__.extensions.startTransaction = fw),
      e.__SENTRY__.extensions.traceHeaders ||
        (e.__SENTRY__.extensions.traceHeaders = cw),
      Z1());
  }
  function dw(e, t, n) {
    const r = En();
    r && r.setMeasurement(e, t, n);
  }
  function pw(e, t) {
    const n = { sent_at: new Date().toISOString() };
    t && (n.dsn = i1(t));
    const r = e.map(hw);
    return A1(n, r);
  }
  function hw(e) {
    return [{ type: "span" }, e];
  }
  const z = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
    P = X;
  function mw() {
    P.document
      ? P.document.addEventListener("visibilitychange", () => {
          const e = En();
          if (P.document.hidden && e) {
            const t = "cancelled",
              { op: n, status: r } = Re(e);
            (z &&
              w.log(
                `[Tracing] Transaction: ${t} -> since tab moved to the background, op: ${n}`,
              ),
              r || e.setStatus(t),
              e.setTag("visibilitychange", "document.hidden"),
              e.end());
          }
        })
      : z &&
        w.warn(
          "[Tracing] Could not set up background tab detection due to lack of global document",
        );
  }
  const Mi = (e, t, n) => {
      let r, i;
      return (s) => {
        t.value >= 0 &&
          (s || n) &&
          ((i = t.value - (r || 0)),
          (i || r === void 0) && ((r = t.value), (t.delta = i), e(t)));
      };
    },
    gw = () =>
      `v3-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`,
    _w = () => {
      const e = P.performance.timing,
        t = P.performance.navigation.type,
        n = {
          entryType: "navigation",
          startTime: 0,
          type: t == 2 ? "back_forward" : t === 1 ? "reload" : "navigate",
        };
      for (const r in e)
        r !== "navigationStart" &&
          r !== "toJSON" &&
          (n[r] = Math.max(e[r] - e.navigationStart, 0));
      return n;
    },
    bo = () =>
      P.__WEB_VITALS_POLYFILL__
        ? P.performance &&
          ((performance.getEntriesByType &&
            performance.getEntriesByType("navigation")[0]) ||
            _w())
        : P.performance &&
          performance.getEntriesByType &&
          performance.getEntriesByType("navigation")[0],
    mc = () => {
      const e = bo();
      return (e && e.activationStart) || 0;
    },
    Ai = (e, t) => {
      const n = bo();
      let r = "navigate";
      return (
        n &&
          ((P.document && P.document.prerendering) || mc() > 0
            ? (r = "prerender")
            : (r = n.type.replace(/_/g, "-"))),
        {
          name: e,
          value: typeof t > "u" ? -1 : t,
          rating: "good",
          delta: 0,
          entries: [],
          id: gw(),
          navigationType: r,
        }
      );
    },
    kr = (e, t, n) => {
      try {
        if (PerformanceObserver.supportedEntryTypes.includes(e)) {
          const r = new PerformanceObserver((i) => {
            t(i.getEntries());
          });
          return (r.observe({ type: e, buffered: !0, ...n }), r);
        }
      } catch {}
    },
    $i = (e, t) => {
      const n = (r) => {
        (r.type === "pagehide" || P.document.visibilityState === "hidden") &&
          (e(r),
          t &&
            (removeEventListener("visibilitychange", n, !0),
            removeEventListener("pagehide", n, !0)));
      };
      P.document &&
        (addEventListener("visibilitychange", n, !0),
        addEventListener("pagehide", n, !0));
    },
    yw = (e, t = {}) => {
      const n = Ai("CLS", 0);
      let r,
        i = 0,
        s = [];
      const o = (u) => {
          u.forEach((l) => {
            if (!l.hadRecentInput) {
              const c = s[0],
                f = s[s.length - 1];
              (i &&
              s.length !== 0 &&
              l.startTime - f.startTime < 1e3 &&
              l.startTime - c.startTime < 5e3
                ? ((i += l.value), s.push(l))
                : ((i = l.value), (s = [l])),
                i > n.value && ((n.value = i), (n.entries = s), r && r()));
            }
          });
        },
        a = kr("layout-shift", o);
      if (a) {
        r = Mi(e, n, t.reportAllChanges);
        const u = () => {
          (o(a.takeRecords()), r(!0));
        };
        return ($i(u), u);
      }
    };
  let uo = -1;
  const vw = () => {
      P.document &&
        P.document.visibilityState &&
        (uo =
          P.document.visibilityState === "hidden" && !P.document.prerendering
            ? 0
            : 1 / 0);
    },
    Sw = () => {
      $i(({ timeStamp: e }) => {
        uo = e;
      }, !0);
    },
    gc = () => (
      uo < 0 && (vw(), Sw()),
      {
        get firstHiddenTime() {
          return uo;
        },
      }
    ),
    Ew = (e) => {
      const t = gc(),
        n = Ai("FID");
      let r;
      const i = (a) => {
          a.startTime < t.firstHiddenTime &&
            ((n.value = a.processingStart - a.startTime),
            n.entries.push(a),
            r(!0));
        },
        s = (a) => {
          a.forEach(i);
        },
        o = kr("first-input", s);
      ((r = Mi(e, n)),
        o &&
          $i(() => {
            (s(o.takeRecords()), o.disconnect());
          }, !0));
    };
  let yg = 0,
    ka = 1 / 0,
    ps = 0;
  const Tw = (e) => {
    e.forEach((t) => {
      t.interactionId &&
        ((ka = Math.min(ka, t.interactionId)),
        (ps = Math.max(ps, t.interactionId)),
        (yg = ps ? (ps - ka) / 7 + 1 : 0));
    });
  };
  let Gu;
  const ww = () => (Gu ? yg : performance.interactionCount || 0),
    kw = () => {
      "interactionCount" in performance ||
        Gu ||
        (Gu = kr("event", Tw, {
          type: "event",
          buffered: !0,
          durationThreshold: 0,
        }));
    },
    vg = () => ww(),
    Ud = 10,
    pt = [],
    Ia = {},
    jd = (e) => {
      const t = pt[pt.length - 1],
        n = Ia[e.interactionId];
      if (n || pt.length < Ud || e.duration > t.latency) {
        if (n)
          (n.entries.push(e), (n.latency = Math.max(n.latency, e.duration)));
        else {
          const r = { id: e.interactionId, latency: e.duration, entries: [e] };
          ((Ia[r.id] = r), pt.push(r));
        }
        (pt.sort((r, i) => i.latency - r.latency),
          pt.splice(Ud).forEach((r) => {
            delete Ia[r.id];
          }));
      }
    },
    Iw = () => {
      const e = Math.min(pt.length - 1, Math.floor(vg() / 50));
      return pt[e];
    },
    Nw = (e, t) => {
      ((t = t || {}), kw());
      const n = Ai("INP");
      let r;
      const i = (o) => {
          o.forEach((u) => {
            (u.interactionId && jd(u),
              u.entryType === "first-input" &&
                !pt.some((c) =>
                  c.entries.some(
                    (f) =>
                      u.duration === f.duration && u.startTime === f.startTime,
                  ),
                ) &&
                jd(u));
          });
          const a = Iw();
          a &&
            a.latency !== n.value &&
            ((n.value = a.latency), (n.entries = a.entries), r());
        },
        s = kr("event", i, { durationThreshold: t.durationThreshold || 40 });
      ((r = Mi(e, n, t.reportAllChanges)),
        s &&
          (s.observe({ type: "first-input", buffered: !0 }),
          $i(() => {
            (i(s.takeRecords()),
              n.value < 0 && vg() > 0 && ((n.value = 0), (n.entries = [])),
              r(!0));
          })));
    },
    zd = {},
    Cw = (e) => {
      const t = gc(),
        n = Ai("LCP");
      let r;
      const i = (o) => {
          const a = o[o.length - 1];
          if (a) {
            const u = Math.max(a.startTime - mc(), 0);
            u < t.firstHiddenTime && ((n.value = u), (n.entries = [a]), r());
          }
        },
        s = kr("largest-contentful-paint", i);
      if (s) {
        r = Mi(e, n);
        const o = () => {
          zd[n.id] ||
            (i(s.takeRecords()), s.disconnect(), (zd[n.id] = !0), r(!0));
        };
        return (
          ["keydown", "click"].forEach((a) => {
            P.document && addEventListener(a, o, { once: !0, capture: !0 });
          }),
          $i(o, !0),
          o
        );
      }
    },
    Vu = (e) => {
      P.document &&
        (P.document.prerendering
          ? addEventListener("prerenderingchange", () => Vu(e), !0)
          : P.document.readyState !== "complete"
            ? addEventListener("load", () => Vu(e), !0)
            : setTimeout(e, 0));
    },
    Rw = (e, t) => {
      t = t || {};
      const n = Ai("TTFB"),
        r = Mi(e, n, t.reportAllChanges);
      Vu(() => {
        const i = bo();
        if (i) {
          if (
            ((n.value = Math.max(i.responseStart - mc(), 0)),
            n.value < 0 || n.value > performance.now())
          )
            return;
          ((n.entries = [i]), r(!0));
        }
      });
    },
    Zr = {},
    lo = {};
  let Sg, Eg, Tg, wg, kg;
  function xw(e, t = !1) {
    return Fi("cls", e, Mw, Sg, t);
  }
  function Pw(e, t = !1) {
    return Fi("lcp", e, $w, Tg, t);
  }
  function Ow(e) {
    return Fi("ttfb", e, Fw, wg);
  }
  function Dw(e) {
    return Fi("fid", e, Aw, Eg);
  }
  function Lw(e) {
    return Fi("inp", e, bw, kg);
  }
  function Si(e, t) {
    return (Ig(e, t), lo[e] || (Uw(e), (lo[e] = !0)), Ng(e, t));
  }
  function Ir(e, t) {
    const n = Zr[e];
    if (!(!n || !n.length))
      for (const r of n)
        try {
          r(t);
        } catch (i) {
          z &&
            w.error(
              `Error while triggering instrumentation handler.
Type: ${e}
Name: ${tg(r)}
Error:`,
              i,
            );
        }
  }
  function Mw() {
    return yw(
      (e) => {
        (Ir("cls", { metric: e }), (Sg = e));
      },
      { reportAllChanges: !0 },
    );
  }
  function Aw() {
    return Ew((e) => {
      (Ir("fid", { metric: e }), (Eg = e));
    });
  }
  function $w() {
    return Cw((e) => {
      (Ir("lcp", { metric: e }), (Tg = e));
    });
  }
  function Fw() {
    return Rw((e) => {
      (Ir("ttfb", { metric: e }), (wg = e));
    });
  }
  function bw() {
    return Nw((e) => {
      (Ir("inp", { metric: e }), (kg = e));
    });
  }
  function Fi(e, t, n, r, i = !1) {
    Ig(e, t);
    let s;
    return (
      lo[e] || ((s = n()), (lo[e] = !0)),
      r && t({ metric: r }),
      Ng(e, t, i ? s : void 0)
    );
  }
  function Uw(e) {
    const t = {};
    (e === "event" && (t.durationThreshold = 0),
      kr(
        e,
        (n) => {
          Ir(e, { entries: n });
        },
        t,
      ));
  }
  function Ig(e, t) {
    ((Zr[e] = Zr[e] || []), Zr[e].push(t));
  }
  function Ng(e, t, n) {
    return () => {
      n && n();
      const r = Zr[e];
      if (!r) return;
      const i = r.indexOf(t);
      i !== -1 && r.splice(i, 1);
    };
  }
  function Na(e) {
    return typeof e == "number" && isFinite(e);
  }
  function cr(e, { startTimestamp: t, ...n }) {
    return (
      t && e.startTimestamp > t && (e.startTimestamp = t),
      e.startChild({ startTimestamp: t, ...n })
    );
  }
  const jw = 2147483647;
  function se(e) {
    return e / 1e3;
  }
  function _c() {
    return P && P.addEventListener && P.performance;
  }
  let Hd = 0,
    Q = {},
    it,
    ei;
  function zw() {
    const e = _c();
    if (e && Be) {
      e.mark && P.performance.mark("sentry-tracing-init");
      const t = Yw(),
        n = Gw(),
        r = Vw(),
        i = Kw();
      return () => {
        (t(), n(), r(), i());
      };
    }
    return () => {};
  }
  function Hw() {
    Si("longtask", ({ entries: e }) => {
      for (const t of e) {
        const n = En();
        if (!n) return;
        const r = se(Be + t.startTime),
          i = se(t.duration);
        n.startChild({
          description: "Main UI thread blocked",
          op: "ui.long-task",
          origin: "auto.ui.browser.metrics",
          startTimestamp: r,
          endTimestamp: r + i,
        });
      }
    });
  }
  function Bw() {
    Si("event", ({ entries: e }) => {
      for (const t of e) {
        const n = En();
        if (!n) return;
        if (t.name === "click") {
          const r = se(Be + t.startTime),
            i = se(t.duration),
            s = {
              description: oo(t.target),
              op: `ui.interaction.${t.name}`,
              origin: "auto.ui.browser.metrics",
              startTimestamp: r,
              endTimestamp: r + i,
            },
            o = t1(t.target);
          (o && (s.attributes = { "ui.component_name": o }), n.startChild(s));
        }
      }
    });
  }
  function Ww(e, t) {
    if (_c() && Be) {
      const r = Xw(e, t);
      return () => {
        r();
      };
    }
    return () => {};
  }
  function Gw() {
    return xw(({ metric: e }) => {
      const t = e.entries[e.entries.length - 1];
      t &&
        (z && w.log("[Measurements] Adding CLS"),
        (Q.cls = { value: e.value, unit: "" }),
        (ei = t));
    }, !0);
  }
  function Vw() {
    return Pw(({ metric: e }) => {
      const t = e.entries[e.entries.length - 1];
      t &&
        (z && w.log("[Measurements] Adding LCP"),
        (Q.lcp = { value: e.value, unit: "millisecond" }),
        (it = t));
    }, !0);
  }
  function Yw() {
    return Dw(({ metric: e }) => {
      const t = e.entries[e.entries.length - 1];
      if (!t) return;
      const n = se(Be),
        r = se(t.startTime);
      (z && w.log("[Measurements] Adding FID"),
        (Q.fid = { value: e.value, unit: "millisecond" }),
        (Q["mark.fid"] = { value: n + r, unit: "second" }));
    });
  }
  function Kw() {
    return Ow(({ metric: e }) => {
      e.entries[e.entries.length - 1] &&
        (z && w.log("[Measurements] Adding TTFB"),
        (Q.ttfb = { value: e.value, unit: "millisecond" }));
    });
  }
  const Bd = {
    click: "click",
    pointerdown: "click",
    pointerup: "click",
    mousedown: "click",
    mouseup: "click",
    touchstart: "click",
    touchend: "click",
    mouseover: "hover",
    mouseout: "hover",
    mouseenter: "hover",
    mouseleave: "hover",
    pointerover: "hover",
    pointerout: "hover",
    pointerenter: "hover",
    pointerleave: "hover",
    dragstart: "drag",
    dragend: "drag",
    drag: "drag",
    dragenter: "drag",
    dragleave: "drag",
    dragover: "drag",
    drop: "drag",
    keydown: "press",
    keyup: "press",
    keypress: "press",
    input: "press",
  };
  function Xw(e, t) {
    return Lw(({ metric: n }) => {
      if (n.value === void 0) return;
      const r = n.entries.find(
          (g) => g.duration === n.value && Bd[g.name] !== void 0,
        ),
        i = vr();
      if (!r || !i) return;
      const s = Bd[r.name],
        o = i.getOptions(),
        a = se(Be + r.startTime),
        u = se(n.value),
        l = r.interactionId !== void 0 ? e[r.interactionId] : void 0;
      if (l === void 0) return;
      const {
          routeName: c,
          parentContext: f,
          activeTransaction: d,
          user: m,
          replayId: _,
        } = l,
        y = m !== void 0 ? m.email || m.id || m.ip_address : void 0,
        C = d !== void 0 ? d.getProfileId() : void 0,
        h = new Fo({
          startTimestamp: a,
          endTimestamp: a + u,
          op: `ui.interaction.${s}`,
          name: oo(r.target),
          attributes: {
            release: o.release,
            environment: o.environment,
            transaction: c,
            ...(y !== void 0 && y !== "" ? { user: y } : {}),
            ...(C !== void 0 ? { profile_id: C } : {}),
            ...(_ !== void 0 ? { replay_id: _ } : {}),
          },
          exclusiveTime: n.value,
          measurements: { inp: { value: n.value, unit: "millisecond" } },
        }),
        p = ik(f, o, t);
      if (p && Math.random() < p) {
        const g = h ? pw([h], i.getDsn()) : void 0,
          v = i && i.getTransport();
        v &&
          g &&
          v.send(g).then(null, (E) => {
            z && w.error("Error while sending interaction:", E);
          });
        return;
      }
    });
  }
  function qw(e) {
    const t = _c();
    if (!t || !P.performance.getEntries || !Be) return;
    z && w.log("[Tracing] Adding & adjusting spans using Performance API");
    const n = se(Be),
      r = t.getEntries(),
      { op: i, start_timestamp: s } = Re(e);
    if (
      (r.slice(Hd).forEach((o) => {
        const a = se(o.startTime),
          u = se(o.duration);
        if (!(e.op === "navigation" && s && n + a < s))
          switch (o.entryType) {
            case "navigation": {
              Jw(e, o, n);
              break;
            }
            case "mark":
            case "paint":
            case "measure": {
              Qw(e, o, a, u, n);
              const l = gc(),
                c = o.startTime < l.firstHiddenTime;
              (o.name === "first-paint" &&
                c &&
                (z && w.log("[Measurements] Adding FP"),
                (Q.fp = { value: o.startTime, unit: "millisecond" })),
                o.name === "first-contentful-paint" &&
                  c &&
                  (z && w.log("[Measurements] Adding FCP"),
                  (Q.fcp = { value: o.startTime, unit: "millisecond" })));
              break;
            }
            case "resource": {
              ek(e, o, o.name, a, u, n);
              break;
            }
          }
      }),
      (Hd = Math.max(r.length - 1, 0)),
      tk(e),
      i === "pageload")
    ) {
      (rk(Q),
        ["fcp", "fp", "lcp"].forEach((a) => {
          if (!Q[a] || !s || n >= s) return;
          const u = Q[a].value,
            l = n + se(u),
            c = Math.abs((l - s) * 1e3),
            f = c - u;
          (z &&
            w.log(`[Measurements] Normalized ${a} from ${u} to ${c} (${f})`),
            (Q[a].value = c));
        }));
      const o = Q["mark.fid"];
      (o &&
        Q.fid &&
        (cr(e, {
          description: "first input delay",
          endTimestamp: o.value + se(Q.fid.value),
          op: "ui.action",
          origin: "auto.ui.browser.metrics",
          startTimestamp: o.value,
        }),
        delete Q["mark.fid"]),
        "fcp" in Q || delete Q.cls,
        Object.keys(Q).forEach((a) => {
          dw(a, Q[a].value, Q[a].unit);
        }),
        nk(e));
    }
    ((it = void 0), (ei = void 0), (Q = {}));
  }
  function Qw(e, t, n, r, i) {
    const s = i + n,
      o = s + r;
    return (
      cr(e, {
        description: t.name,
        endTimestamp: o,
        op: t.entryType,
        origin: "auto.resource.browser.metrics",
        startTimestamp: s,
      }),
      s
    );
  }
  function Jw(e, t, n) {
    ([
      "unloadEvent",
      "redirect",
      "domContentLoadedEvent",
      "loadEvent",
      "connect",
    ].forEach((r) => {
      hs(e, t, r, n);
    }),
      hs(e, t, "secureConnection", n, "TLS/SSL", "connectEnd"),
      hs(e, t, "fetch", n, "cache", "domainLookupStart"),
      hs(e, t, "domainLookup", n, "DNS"),
      Zw(e, t, n));
  }
  function hs(e, t, n, r, i, s) {
    const o = s ? t[s] : t[`${n}End`],
      a = t[`${n}Start`];
    !a ||
      !o ||
      cr(e, {
        op: "browser",
        origin: "auto.browser.browser.metrics",
        description: i || n,
        startTimestamp: r + se(a),
        endTimestamp: r + se(o),
      });
  }
  function Zw(e, t, n) {
    t.responseEnd &&
      (cr(e, {
        op: "browser",
        origin: "auto.browser.browser.metrics",
        description: "request",
        startTimestamp: n + se(t.requestStart),
        endTimestamp: n + se(t.responseEnd),
      }),
      cr(e, {
        op: "browser",
        origin: "auto.browser.browser.metrics",
        description: "response",
        startTimestamp: n + se(t.responseStart),
        endTimestamp: n + se(t.responseEnd),
      }));
  }
  function ek(e, t, n, r, i, s) {
    if (t.initiatorType === "xmlhttprequest" || t.initiatorType === "fetch")
      return;
    const o = Lo(n),
      a = {};
    (Ca(a, t, "transferSize", "http.response_transfer_size"),
      Ca(a, t, "encodedBodySize", "http.response_content_length"),
      Ca(a, t, "decodedBodySize", "http.decoded_response_content_length"),
      "renderBlockingStatus" in t &&
        (a["resource.render_blocking_status"] = t.renderBlockingStatus),
      o.protocol && (a["url.scheme"] = o.protocol.split(":").pop()),
      o.host && (a["server.address"] = o.host),
      (a["url.same_origin"] = n.includes(P.location.origin)));
    const u = s + r,
      l = u + i;
    cr(e, {
      description: n.replace(P.location.origin, ""),
      endTimestamp: l,
      op: t.initiatorType ? `resource.${t.initiatorType}` : "resource.other",
      origin: "auto.resource.browser.metrics",
      startTimestamp: u,
      data: a,
    });
  }
  function tk(e) {
    const t = P.navigator;
    if (!t) return;
    const n = t.connection;
    (n &&
      (n.effectiveType && e.setTag("effectiveConnectionType", n.effectiveType),
      n.type && e.setTag("connectionType", n.type),
      Na(n.rtt) &&
        (Q["connection.rtt"] = { value: n.rtt, unit: "millisecond" })),
      Na(t.deviceMemory) && e.setTag("deviceMemory", `${t.deviceMemory} GB`),
      Na(t.hardwareConcurrency) &&
        e.setTag("hardwareConcurrency", String(t.hardwareConcurrency)));
  }
  function nk(e) {
    (it &&
      (z && w.log("[Measurements] Adding LCP Data"),
      it.element && e.setTag("lcp.element", oo(it.element)),
      it.id && e.setTag("lcp.id", it.id),
      it.url && e.setTag("lcp.url", it.url.trim().slice(0, 200)),
      e.setTag("lcp.size", it.size)),
      ei &&
        ei.sources &&
        (z && w.log("[Measurements] Adding CLS Data"),
        ei.sources.forEach((t, n) =>
          e.setTag(`cls.source.${n + 1}`, oo(t.node)),
        )));
  }
  function Ca(e, t, n, r) {
    const i = t[n];
    i != null && i < jw && (e[r] = i);
  }
  function rk(e) {
    const t = bo();
    if (!t) return;
    const { responseStart: n, requestStart: r } = t;
    r <= n &&
      (z && w.log("[Measurements] Adding TTFB Request Time"),
      (e["ttfb.requestTime"] = { value: n - r, unit: "millisecond" }));
  }
  function ik(e, t, n) {
    if (!wr(t)) return !1;
    let r;
    return (
      e !== void 0 && typeof t.tracesSampler == "function"
        ? (r = t.tracesSampler({
            transactionContext: e,
            name: e.name,
            parentSampled: e.parentSampled,
            attributes: { ...e.data, ...e.attributes },
            location: P.location,
          }))
        : e !== void 0 && e.sampled !== void 0
          ? (r = e.sampled)
          : typeof t.tracesSampleRate < "u"
            ? (r = t.tracesSampleRate)
            : (r = 1),
      gg(r)
        ? r === !0
          ? n
          : r === !1
            ? 0
            : r * n
        : (z &&
            w.warn(
              "[Tracing] Discarding interaction span because of invalid sample rate.",
            ),
          !1)
    );
  }
  function sk(e, t, n, r, i = "auto.http.browser") {
    if (!wr() || !e.fetchData) return;
    const s = t(e.fetchData.url);
    if (e.endTimestamp && s) {
      const m = e.fetchData.__span;
      if (!m) return;
      const _ = r[m];
      _ && (uk(_, e), delete r[m]);
      return;
    }
    const o = Sr(),
      a = vr(),
      { method: u, url: l } = e.fetchData,
      c = ak(l),
      f = c ? Lo(c).host : void 0,
      d = s
        ? cg({
            name: `${u} ${l}`,
            onlyIfParent: !0,
            attributes: {
              url: l,
              type: "fetch",
              "http.method": u,
              "http.url": c,
              "server.address": f,
              [Hn]: i,
            },
            op: "http.client",
          })
        : void 0;
    if (
      (d &&
        ((e.fetchData.__span = d.spanContext().spanId),
        (r[d.spanContext().spanId] = d)),
      n(e.fetchData.url) && a)
    ) {
      const m = e.args[0];
      e.args[1] = e.args[1] || {};
      const _ = e.args[1];
      _.headers = ok(m, a, o, _, d);
    }
    return d;
  }
  function ok(e, t, n, r, i) {
    const s = i || n.getSpan(),
      o = pc(),
      {
        traceId: a,
        spanId: u,
        sampled: l,
        dsc: c,
      } = { ...o.getPropagationContext(), ...n.getPropagationContext() },
      f = s ? Ao(s) : lc(a, u, l),
      d = ig(c || (s ? lr(s) : dc(a, t, n))),
      m =
        r.headers ||
        (typeof Request < "u" && Nd(e, Request) ? e.headers : void 0);
    if (m)
      if (typeof Headers < "u" && Nd(m, Headers)) {
        const _ = new Headers(m);
        return (_.append("sentry-trace", f), d && _.append(zu, d), _);
      } else if (Array.isArray(m)) {
        const _ = [...m, ["sentry-trace", f]];
        return (d && _.push([zu, d]), _);
      } else {
        const _ = "baggage" in m ? m.baggage : void 0,
          y = [];
        return (
          Array.isArray(_) ? y.push(..._) : _ && y.push(_),
          d && y.push(d),
          {
            ...m,
            "sentry-trace": f,
            baggage: y.length > 0 ? y.join(",") : void 0,
          }
        );
      }
    else return { "sentry-trace": f, baggage: d };
  }
  function ak(e) {
    try {
      return new URL(e).href;
    } catch {
      return;
    }
  }
  function uk(e, t) {
    if (t.response) {
      hc(e, t.response.status);
      const n =
        t.response &&
        t.response.headers &&
        t.response.headers.get("content-length");
      if (n) {
        const r = parseInt(n);
        r > 0 && e.setAttribute("http.response_content_length", r);
      }
    } else t.error && e.setStatus("internal_error");
    e.end();
  }
  const Yu = ["localhost", /^\/(?!\/)/],
    Ku = {
      traceFetch: !0,
      traceXHR: !0,
      enableHTTPTimings: !0,
      tracingOrigins: Yu,
      tracePropagationTargets: Yu,
    };
  function lk(e) {
    const {
        traceFetch: t,
        traceXHR: n,
        tracePropagationTargets: r,
        tracingOrigins: i,
        shouldCreateSpanForRequest: s,
        enableHTTPTimings: o,
      } = { traceFetch: Ku.traceFetch, traceXHR: Ku.traceXHR, ...e },
      a = typeof s == "function" ? s : (c) => !0,
      u = (c) => pk(c, r || i),
      l = {};
    (t &&
      c1((c) => {
        const f = sk(c, a, u, l);
        if (f) {
          const d = Cg(c.fetchData.url),
            m = d ? Lo(d).host : void 0;
          f.setAttributes({ "http.url": d, "server.address": m });
        }
        o && f && Wd(f);
      }),
      n &&
        E1((c) => {
          const f = hk(c, a, u, l);
          o && f && Wd(f);
        }));
  }
  function ck(e) {
    return (
      e.entryType === "resource" &&
      "initiatorType" in e &&
      typeof e.nextHopProtocol == "string" &&
      (e.initiatorType === "fetch" || e.initiatorType === "xmlhttprequest")
    );
  }
  function Wd(e) {
    const { url: t } = Re(e).data || {};
    if (!t || typeof t != "string") return;
    const n = Si("resource", ({ entries: r }) => {
      r.forEach((i) => {
        ck(i) &&
          i.name.endsWith(t) &&
          (dk(i).forEach((o) => e.setAttribute(...o)), setTimeout(n));
      });
    });
  }
  function fk(e) {
    let t = "unknown",
      n = "unknown",
      r = "";
    for (const i of e) {
      if (i === "/") {
        [t, n] = e.split("/");
        break;
      }
      if (!isNaN(Number(i))) {
        ((t = r === "h" ? "http" : r), (n = e.split(r)[1]));
        break;
      }
      r += i;
    }
    return (r === e && (t = r), { name: t, version: n });
  }
  function nt(e = 0) {
    return ((Be || performance.timeOrigin) + e) / 1e3;
  }
  function dk(e) {
    const { name: t, version: n } = fk(e.nextHopProtocol),
      r = [];
    return (
      r.push(["network.protocol.version", n], ["network.protocol.name", t]),
      Be
        ? [
            ...r,
            ["http.request.redirect_start", nt(e.redirectStart)],
            ["http.request.fetch_start", nt(e.fetchStart)],
            ["http.request.domain_lookup_start", nt(e.domainLookupStart)],
            ["http.request.domain_lookup_end", nt(e.domainLookupEnd)],
            ["http.request.connect_start", nt(e.connectStart)],
            [
              "http.request.secure_connection_start",
              nt(e.secureConnectionStart),
            ],
            ["http.request.connection_end", nt(e.connectEnd)],
            ["http.request.request_start", nt(e.requestStart)],
            ["http.request.response_start", nt(e.responseStart)],
            ["http.request.response_end", nt(e.responseEnd)],
          ]
        : r
    );
  }
  function pk(e, t) {
    return QT(e, t || Yu);
  }
  function hk(e, t, n, r) {
    const i = e.xhr,
      s = i && i[Hr];
    if (!wr() || !i || i.__sentry_own_request__ || !s) return;
    const o = t(s.url);
    if (e.endTimestamp && o) {
      const m = i.__sentry_xhr_span_id__;
      if (!m) return;
      const _ = r[m];
      _ &&
        s.status_code !== void 0 &&
        (hc(_, s.status_code), _.end(), delete r[m]);
      return;
    }
    const a = Sr(),
      u = pc(),
      l = Cg(s.url),
      c = l ? Lo(l).host : void 0,
      f = o
        ? cg({
            name: `${s.method} ${s.url}`,
            onlyIfParent: !0,
            attributes: {
              type: "xhr",
              "http.method": s.method,
              "http.url": l,
              url: s.url,
              "server.address": c,
              [Hn]: "auto.http.browser",
            },
            op: "http.client",
          })
        : void 0;
    f &&
      ((i.__sentry_xhr_span_id__ = f.spanContext().spanId),
      (r[i.__sentry_xhr_span_id__] = f));
    const d = vr();
    if (i.setRequestHeader && n(s.url) && d) {
      const {
          traceId: m,
          spanId: _,
          sampled: y,
          dsc: C,
        } = { ...u.getPropagationContext(), ...a.getPropagationContext() },
        h = f ? Ao(f) : lc(m, _, y),
        p = ig(C || (f ? lr(f) : dc(m, d, a)));
      mk(i, h, p);
    }
    return f;
  }
  function mk(e, t, n) {
    try {
      (e.setRequestHeader("sentry-trace", t), n && e.setRequestHeader(zu, n));
    } catch {}
  }
  function Cg(e) {
    try {
      return new URL(e, P.location.origin).href;
    } catch {
      return;
    }
  }
  function gk(e, t = !0, n = !0) {
    if (!P || !P.location) {
      z &&
        w.warn(
          "Could not initialize routing instrumentation due to invalid location",
        );
      return;
    }
    let r = P.location.href,
      i;
    (t &&
      (i = e({
        name: P.location.pathname,
        startTimestamp: Be ? Be / 1e3 : void 0,
        op: "pageload",
        origin: "auto.pageload.browser",
        metadata: { source: "url" },
      })),
      n &&
        y1(({ to: s, from: o }) => {
          if (o === void 0 && r && r.indexOf(s) !== -1) {
            r = void 0;
            return;
          }
          o !== s &&
            ((r = void 0),
            i &&
              (z &&
                w.log(
                  `[Tracing] Finishing current transaction with op: ${i.op}`,
                ),
              i.end()),
            (i = e({
              name: P.location.pathname,
              op: "navigation",
              origin: "auto.navigation.browser",
              metadata: { source: "url" },
            })));
        }));
  }
  const _k = "BrowserTracing",
    yk = {
      ...Ls,
      markBackgroundTransactions: !0,
      routingInstrumentation: gk,
      startTransactionOnLocationChange: !0,
      startTransactionOnPageLoad: !0,
      enableLongTask: !0,
      enableInp: !1,
      interactionsSampleRate: 1,
      _experiments: {},
      ...Ku,
    },
    Gd = 10;
  let vk = class {
    constructor(t) {
      ((this.name = _k),
        (this._hasSetTracePropagationTargets = !1),
        _g(),
        z &&
          (this._hasSetTracePropagationTargets = !!(
            t &&
            (t.tracePropagationTargets || t.tracingOrigins)
          )),
        (this.options = { ...yk, ...t }),
        this.options._experiments.enableLongTask !== void 0 &&
          (this.options.enableLongTask =
            this.options._experiments.enableLongTask),
        t &&
          !t.tracePropagationTargets &&
          t.tracingOrigins &&
          (this.options.tracePropagationTargets = t.tracingOrigins),
        (this._collectWebVitals = zw()),
        (this._interactionIdToRouteNameMapping = {}),
        this.options.enableInp &&
          Ww(
            this._interactionIdToRouteNameMapping,
            this.options.interactionsSampleRate,
          ),
        this.options.enableLongTask && Hw(),
        this.options._experiments.enableInteractions && Bw(),
        (this._latestRoute = { name: void 0, context: void 0 }));
    }
    setupOnce(t, n) {
      this._getCurrentHub = n;
      const i = n().getClient(),
        s = i && i.getOptions(),
        {
          routingInstrumentation: o,
          startTransactionOnLocationChange: a,
          startTransactionOnPageLoad: u,
          markBackgroundTransactions: l,
          traceFetch: c,
          traceXHR: f,
          shouldCreateSpanForRequest: d,
          enableHTTPTimings: m,
          _experiments: _,
        } = this.options,
        y = s && s.tracePropagationTargets,
        C = y || this.options.tracePropagationTargets;
      (z &&
        this._hasSetTracePropagationTargets &&
        y &&
        w.warn(
          "[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used.",
        ),
        o(
          (h) => {
            const p = this._createRouteTransaction(h);
            return (
              this.options._experiments.onStartRouteTransaction &&
                this.options._experiments.onStartRouteTransaction(p, h, n),
              p
            );
          },
          u,
          a,
        ),
        l && mw(),
        _.enableInteractions && this._registerInteractionListener(),
        this.options.enableInp && this._registerInpInteractionListener(),
        lk({
          traceFetch: c,
          traceXHR: f,
          tracePropagationTargets: C,
          shouldCreateSpanForRequest: d,
          enableHTTPTimings: m,
        }));
    }
    _createRouteTransaction(t) {
      if (!this._getCurrentHub) {
        z &&
          w.warn(
            `[Tracing] Did not create ${t.op} transaction because _getCurrentHub is invalid.`,
          );
        return;
      }
      const n = this._getCurrentHub(),
        {
          beforeNavigate: r,
          idleTimeout: i,
          finalTimeout: s,
          heartbeatInterval: o,
        } = this.options,
        a = t.op === "pageload";
      let u;
      if (a) {
        const m = a ? Vd("sentry-trace") : "",
          _ = a ? Vd("baggage") : void 0,
          { traceId: y, dsc: C, parentSpanId: h, sampled: p } = M1(m, _);
        u = {
          traceId: y,
          parentSpanId: h,
          parentSampled: p,
          ...t,
          metadata: { ...t.metadata, dynamicSamplingContext: C },
          trimEnd: !0,
        };
      } else u = { trimEnd: !0, ...t };
      const l = typeof r == "function" ? r(u) : u,
        c = l === void 0 ? { ...u, sampled: !1 } : l;
      ((c.metadata =
        c.name !== u.name ? { ...c.metadata, source: "custom" } : c.metadata),
        (this._latestRoute.name = c.name),
        (this._latestRoute.context = c),
        c.sampled === !1 &&
          z &&
          w.log(
            `[Tracing] Will not send ${c.op} transaction because of beforeNavigate.`,
          ),
        z && w.log(`[Tracing] Starting ${c.op} transaction on scope`));
      const { location: f } = P,
        d = bd(n, c, i, s, !0, { location: f }, o, a);
      return (
        a &&
          P.document &&
          (P.document.addEventListener("readystatechange", () => {
            ["interactive", "complete"].includes(P.document.readyState) &&
              d.sendAutoFinishSignal();
          }),
          ["interactive", "complete"].includes(P.document.readyState) &&
            d.sendAutoFinishSignal()),
        d.registerBeforeFinishCallback((m) => {
          (this._collectWebVitals(), qw(m));
        }),
        d
      );
    }
    _registerInteractionListener() {
      let t;
      const n = () => {
        const {
            idleTimeout: r,
            finalTimeout: i,
            heartbeatInterval: s,
          } = this.options,
          o = "ui.action.click",
          a = En();
        if (a && a.op && ["navigation", "pageload"].includes(a.op)) {
          z &&
            w.warn(
              `[Tracing] Did not create ${o} transaction because a pageload or navigation transaction is in progress.`,
            );
          return;
        }
        if (
          (t &&
            (t.setFinishReason("interactionInterrupted"),
            t.end(),
            (t = void 0)),
          !this._getCurrentHub)
        ) {
          z &&
            w.warn(
              `[Tracing] Did not create ${o} transaction because _getCurrentHub is invalid.`,
            );
          return;
        }
        if (!this._latestRoute.name) {
          z &&
            w.warn(
              `[Tracing] Did not create ${o} transaction because _latestRouteName is missing.`,
            );
          return;
        }
        const u = this._getCurrentHub(),
          { location: l } = P,
          c = {
            name: this._latestRoute.name,
            op: o,
            trimEnd: !0,
            data: {
              [qn]: this._latestRoute.context
                ? Sk(this._latestRoute.context)
                : "url",
            },
          };
        t = bd(u, c, r, i, !0, { location: l }, s);
      };
      ["click"].forEach((r) => {
        P.document && addEventListener(r, n, { once: !1, capture: !0 });
      });
    }
    _registerInpInteractionListener() {
      const t = ({ entries: n }) => {
        const r = vr(),
          i =
            r !== void 0 && r.getIntegrationByName !== void 0
              ? r.getIntegrationByName("Replay")
              : void 0,
          s = i !== void 0 ? i.getReplayId() : void 0,
          o = En(),
          a = Sr(),
          u = a !== void 0 ? a.getUser() : void 0;
        n.forEach((l) => {
          if (Ek(l)) {
            const c = l.interactionId;
            if (c === void 0) return;
            const f = this._interactionIdToRouteNameMapping[c],
              d = l.duration,
              m = l.startTime,
              _ = Object.keys(this._interactionIdToRouteNameMapping),
              y =
                _.length > 0
                  ? _.reduce((C, h) =>
                      this._interactionIdToRouteNameMapping[C].duration <
                      this._interactionIdToRouteNameMapping[h].duration
                        ? C
                        : h,
                    )
                  : void 0;
            if (
              (l.entryType === "first-input" &&
                _.map((h) => this._interactionIdToRouteNameMapping[h]).some(
                  (h) => h.duration === d && h.startTime === m,
                )) ||
              !c
            )
              return;
            if (f) f.duration = Math.max(f.duration, d);
            else if (
              _.length < Gd ||
              y === void 0 ||
              d > this._interactionIdToRouteNameMapping[y].duration
            ) {
              const C = this._latestRoute.name,
                h = this._latestRoute.context;
              C &&
                h &&
                (y &&
                  Object.keys(this._interactionIdToRouteNameMapping).length >=
                    Gd &&
                  delete this._interactionIdToRouteNameMapping[y],
                (this._interactionIdToRouteNameMapping[c] = {
                  routeName: C,
                  duration: d,
                  parentContext: h,
                  user: u,
                  activeTransaction: o,
                  replayId: s,
                  startTime: m,
                }));
            }
          }
        });
      };
      (Si("event", t), Si("first-input", t));
    }
  };
  function Vd(e) {
    const t = e1(`meta[name=${e}]`);
    return t ? t.getAttribute("content") : void 0;
  }
  function Sk(e) {
    const t = e.attributes && e.attributes[qn],
      n = e.data && e.data[qn],
      r = e.metadata && e.metadata.source;
    return t || n || r;
  }
  function Ek(e) {
    return "duration" in e;
  }
  function Tk() {
    const e = Er();
    if (!e.__SENTRY__) return;
    const t = {
        mongodb() {
          const r = un(At, "./node/integrations/mongo");
          return new r.Mongo();
        },
        mongoose() {
          const r = un(At, "./node/integrations/mongo");
          return new r.Mongo();
        },
        mysql() {
          const r = un(At, "./node/integrations/mysql");
          return new r.Mysql();
        },
        pg() {
          const r = un(At, "./node/integrations/postgres");
          return new r.Postgres();
        },
      },
      n = Object.keys(t)
        .filter((r) => !!N1(r))
        .map((r) => {
          try {
            return t[r]();
          } catch {
            return;
          }
        })
        .filter((r) => r);
    n.length > 0 &&
      (e.__SENTRY__.integrations = [
        ...(e.__SENTRY__.integrations || []),
        ...n,
      ]);
  }
  function wk() {
    (_g(), I1() && Tk());
  }
  const kk = vk;
  (typeof __SENTRY_TRACING__ > "u" || __SENTRY_TRACING__) && wk();
  FT({
    dsn: "YOUR_SENTRY_DSN_HERE",
    integrations: [new kk()],
    tracesSampleRate: 1,
  });
  const Ik = Ra.createRoot(document.getElementById("root"));
  Ik.render(
    M.createElement(
      HT,
      {
        fallback: M.createElement(
          "p",
          null,
          "Something went wrong. Check Sentry dashboard.",
        ),
      },
      M.createElement(VT, null),
    ),
  );
});
export default Nk();
