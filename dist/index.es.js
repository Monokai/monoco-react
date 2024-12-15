var ke = Object.defineProperty;
var Ae = (r, i, a) => i in r ? ke(r, i, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[i] = a;
var ae = (r, i, a) => Ae(r, typeof i != "symbol" ? i + "" : i, a);
import Se, { forwardRef as Ne, useState as Me, useCallback as $e, useEffect as ye } from "react";
var X = { exports: {} }, V = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Re;
function Pe() {
  if (Re) return V;
  Re = 1;
  var r = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");
  function a(c, n, u) {
    var l = null;
    if (u !== void 0 && (l = "" + u), n.key !== void 0 && (l = "" + n.key), "key" in n) {
      u = {};
      for (var f in n)
        f !== "key" && (u[f] = n[f]);
    } else u = n;
    return n = u.ref, {
      $$typeof: r,
      type: c,
      key: l,
      ref: n !== void 0 ? n : null,
      props: u
    };
  }
  return V.Fragment = i, V.jsx = a, V.jsxs = a, V;
}
var F = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _e;
function Ye() {
  return _e || (_e = 1, process.env.NODE_ENV !== "production" && function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Ce ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case v:
          return "Fragment";
        case T:
          return "Portal";
        case S:
          return "Profiler";
        case j:
          return "StrictMode";
        case Q:
          return "Suspense";
        case K:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case L:
            return (e.displayName || "Context") + ".Provider";
          case M:
            return (e._context.displayName || "Context") + ".Consumer";
          case H:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case D:
            return t = e.displayName || null, t !== null ? t : r(e.type) || "Memo";
          case ee:
            t = e._payload, e = e._init;
            try {
              return r(e(t));
            } catch {
            }
        }
      return null;
    }
    function i(e) {
      return "" + e;
    }
    function a(e) {
      try {
        i(e);
        var t = !1;
      } catch {
        t = !0;
      }
      if (t) {
        t = console;
        var o = t.error, d = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          d
        ), i(e);
      }
    }
    function c() {
    }
    function n() {
      if (J === 0) {
        ue = console.log, le = console.info, fe = console.warn, de = console.error, he = console.group, ge = console.groupCollapsed, ve = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: c,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      J++;
    }
    function u() {
      if (J--, J === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: z({}, e, { value: ue }),
          info: z({}, e, { value: le }),
          warn: z({}, e, { value: fe }),
          error: z({}, e, { value: de }),
          group: z({}, e, { value: he }),
          groupCollapsed: z({}, e, { value: ge }),
          groupEnd: z({}, e, { value: ve })
        });
      }
      0 > J && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function l(e) {
      if (te === void 0)
        try {
          throw Error();
        } catch (o) {
          var t = o.stack.trim().match(/\n( *(at )?)/);
          te = t && t[1] || "", be = -1 < o.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < o.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + te + e + be;
    }
    function f(e, t) {
      if (!e || oe) return "";
      var o = ne.get(e);
      if (o !== void 0) return o;
      oe = !0, o = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var d = null;
      d = W.H, W.H = null, n();
      try {
        var O = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var Y = function() {
                  throw Error();
                };
                if (Object.defineProperty(Y.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Y, []);
                  } catch (P) {
                    var I = P;
                  }
                  Reflect.construct(e, [], Y);
                } else {
                  try {
                    Y.call();
                  } catch (P) {
                    I = P;
                  }
                  e.call(Y.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (P) {
                  I = P;
                }
                (Y = e()) && typeof Y.catch == "function" && Y.catch(function() {
                });
              }
            } catch (P) {
              if (P && I && typeof P.stack == "string")
                return [P.stack, I.stack];
            }
            return [null, null];
          }
        };
        O.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var p = Object.getOwnPropertyDescriptor(
          O.DetermineComponentFrameRoot,
          "name"
        );
        p && p.configurable && Object.defineProperty(
          O.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var s = O.DetermineComponentFrameRoot(), $ = s[0], q = s[1];
        if ($ && q) {
          var A = $.split(`
`), U = q.split(`
`);
          for (s = p = 0; p < A.length && !A[p].includes(
            "DetermineComponentFrameRoot"
          ); )
            p++;
          for (; s < U.length && !U[s].includes(
            "DetermineComponentFrameRoot"
          ); )
            s++;
          if (p === A.length || s === U.length)
            for (p = A.length - 1, s = U.length - 1; 1 <= p && 0 <= s && A[p] !== U[s]; )
              s--;
          for (; 1 <= p && 0 <= s; p--, s--)
            if (A[p] !== U[s]) {
              if (p !== 1 || s !== 1)
                do
                  if (p--, s--, 0 > s || A[p] !== U[s]) {
                    var B = `
` + A[p].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", e.displayName)), typeof e == "function" && ne.set(e, B), B;
                  }
                while (1 <= p && 0 <= s);
              break;
            }
        }
      } finally {
        oe = !1, W.H = d, u(), Error.prepareStackTrace = o;
      }
      return A = (A = e ? e.displayName || e.name : "") ? l(A) : "", typeof e == "function" && ne.set(e, A), A;
    }
    function h(e) {
      if (e == null) return "";
      if (typeof e == "function") {
        var t = e.prototype;
        return f(
          e,
          !(!t || !t.isReactComponent)
        );
      }
      if (typeof e == "string") return l(e);
      switch (e) {
        case Q:
          return l("Suspense");
        case K:
          return l("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case H:
            return e = f(e.render, !1), e;
          case D:
            return h(e.type);
          case ee:
            t = e._payload, e = e._init;
            try {
              return h(e(t));
            } catch {
            }
        }
      return "";
    }
    function g() {
      var e = W.A;
      return e === null ? null : e.getOwner();
    }
    function b(e) {
      if (ce.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function m(e, t) {
      function o() {
        me || (me = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          t
        ));
      }
      o.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: o,
        configurable: !0
      });
    }
    function w() {
      var e = r(this.type);
      return Ee[e] || (Ee[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function N(e, t, o, d, O, p) {
      return o = p.ref, e = {
        $$typeof: x,
        type: e,
        key: t,
        props: p,
        _owner: O
      }, (o !== void 0 ? o : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: w
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function k(e, t, o, d, O, p) {
      if (typeof e == "string" || typeof e == "function" || e === v || e === S || e === j || e === Q || e === K || e === Te || typeof e == "object" && e !== null && (e.$$typeof === ee || e.$$typeof === D || e.$$typeof === L || e.$$typeof === M || e.$$typeof === H || e.$$typeof === je || e.getModuleId !== void 0)) {
        var s = t.children;
        if (s !== void 0)
          if (d)
            if (re(s)) {
              for (d = 0; d < s.length; d++)
                R(s[d], e);
              Object.freeze && Object.freeze(s);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else R(s, e);
      } else
        s = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? d = "null" : re(e) ? d = "array" : e !== void 0 && e.$$typeof === x ? (d = "<" + (r(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          d,
          s
        );
      if (ce.call(t, "key")) {
        s = r(e);
        var $ = Object.keys(t).filter(function(A) {
          return A !== "key";
        });
        d = 0 < $.length ? "{key: someKey, " + $.join(": ..., ") + ": ...}" : "{key: someKey}", pe[s + d] || ($ = 0 < $.length ? "{" + $.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          d,
          s,
          $,
          s
        ), pe[s + d] = !0);
      }
      if (s = null, o !== void 0 && (a(o), s = "" + o), b(t) && (a(t.key), s = "" + t.key), "key" in t) {
        o = {};
        for (var q in t)
          q !== "key" && (o[q] = t[q]);
      } else o = t;
      return s && m(
        o,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), N(e, s, p, O, g(), o);
    }
    function R(e, t) {
      if (typeof e == "object" && e && e.$$typeof !== Oe) {
        if (re(e))
          for (var o = 0; o < e.length; o++) {
            var d = e[o];
            C(d) && _(d, t);
          }
        else if (C(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? o = null : (o = se && e[se] || e["@@iterator"], o = typeof o == "function" ? o : null), typeof o == "function" && o !== e.entries && (o = o.call(e), o !== e))
          for (; !(e = o.next()).done; )
            C(e.value) && _(e.value, t);
      }
    }
    function C(e) {
      return typeof e == "object" && e !== null && e.$$typeof === x;
    }
    function _(e, t) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, t = E(t), !we[t])) {
        we[t] = !0;
        var o = "";
        e && e._owner != null && e._owner !== g() && (o = null, typeof e._owner.tag == "number" ? o = r(e._owner.type) : typeof e._owner.name == "string" && (o = e._owner.name), o = " It was passed a child from " + o + ".");
        var d = W.getCurrentStack;
        W.getCurrentStack = function() {
          var O = h(e.type);
          return d && (O += d() || ""), O;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          t,
          o
        ), W.getCurrentStack = d;
      }
    }
    function E(e) {
      var t = "", o = g();
      return o && (o = r(o.type)) && (t = `

Check the render method of \`` + o + "`."), t || (e = r(e)) && (t = `

Check the top-level render call using <` + e + ">."), t;
    }
    var y = Se, x = Symbol.for("react.transitional.element"), T = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), M = Symbol.for("react.consumer"), L = Symbol.for("react.context"), H = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), K = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), ee = Symbol.for("react.lazy"), Te = Symbol.for("react.offscreen"), se = Symbol.iterator, Ce = Symbol.for("react.client.reference"), W = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ce = Object.prototype.hasOwnProperty, z = Object.assign, je = Symbol.for("react.client.reference"), re = Array.isArray, J = 0, ue, le, fe, de, he, ge, ve;
    c.__reactDisabledLog = !0;
    var te, be, oe = !1, ne = new (typeof WeakMap == "function" ? WeakMap : Map)(), Oe = Symbol.for("react.client.reference"), me, Ee = {}, pe = {}, we = {};
    F.Fragment = v, F.jsx = function(e, t, o, d, O) {
      return k(e, t, o, !1, d, O);
    }, F.jsxs = function(e, t, o, d, O) {
      return k(e, t, o, !0, d, O);
    };
  }()), F;
}
var xe;
function We() {
  return xe || (xe = 1, process.env.NODE_ENV === "production" ? X.exports = Pe() : X.exports = Ye()), X.exports;
}
var ze = We(), G = new class {
  constructor() {
    ae(this, "elements");
    ae(this, "observer");
    this.elements = null, this.observer = null;
  }
  onElementResize(r) {
    var i;
    for (const a of r) {
      const c = a.target.getBoundingClientRect(), n = (i = this.elements) == null ? void 0 : i.get(a.target);
      if (!n) continue;
      const { previousW: u, previousH: l, draw: f, onResize: h } = n;
      u === c.width && l === c.height || (f == null || f({ width: c.width, height: c.height }), h == null || h(c, a.target), n.previousW = c.width, n.previousH = c.height);
    }
  }
  getDrawOptions(r) {
    var i, a;
    return ((a = (i = this.elements) == null ? void 0 : i.get(r)) == null ? void 0 : a.cornerOptions) ?? null;
  }
  setCornerOptions(r, i) {
    var c, n;
    const a = (c = this.elements) == null ? void 0 : c.get(r);
    a && (a.cornerOptions = i, (n = this.elements) == null || n.set(r, a));
  }
  addElement(r, i, a) {
    this.elements || (this.elements = /* @__PURE__ */ new Map()), this.observer || (this.observer = new ResizeObserver((u) => this.onElementResize(u))), this.unobserve(r);
    const { observe: c = !0, onResize: n } = i;
    return c && (this.observer.observe(r), this.elements.set(r, { draw: a, cornerOptions: i, onResize: n, previousW: null, previousH: null, element: r })), a;
  }
  draw(r, i) {
    var a, c, n, u;
    r ? (i && this.setCornerOptions(r, i), (n = (c = (a = this.elements) == null ? void 0 : a.get(r)) == null ? void 0 : c.draw) == null || n.call(c)) : (u = this.elements) == null || u.forEach((l) => {
      var f;
      return (f = l.draw) == null ? void 0 : f.call(l);
    });
  }
  unobserve(r) {
    var a;
    const i = (c) => {
      var n, u;
      (n = this.observer) == null || n.unobserve(r), (u = this.elements) == null || u.delete(r);
    };
    r ? i() : (a = this.elements) == null || a.keys().forEach((c) => i());
  }
}();
function Z(r, i, a, c, n, u, l, f) {
  return a ? [r ? ["c", ...c] : [], n ? ["a", a, a, 0, 0, i, ...u.map((h) => h * n)] : [], r ? ["c", ...l] : []] : [["l", ...f]];
}
function Ue({ width: r, height: i, radii: a, offsets: c, smoothing: n = 1, preserveSmoothing: u = !0, sweepFlag: l = 1 }) {
  const [f, , , h] = c, [g, b, m, w] = a.map((N) => function(k, R, C, _) {
    let E = (1 + R) * k;
    C || (R = Math.min(R, _ / k - 1), E = Math.min(E, _));
    const y = 0.5 * Math.PI * (1 - R), x = Math.sin(y / 2) * k * 2 ** 0.5, T = 0.25 * Math.PI * R, v = k * Math.tan(0.25 * (0.5 * Math.PI - y)) * Math.cos(T), j = v * Math.tan(T);
    let S = (E - x - v - j) / 3, M = 2 * S;
    if (C && E > _) {
      const L = _ - j - x - v, H = L - L / 6;
      S = Math.min(S, H), M = L - S, E = Math.min(E, _);
    }
    return { a: M, b: S, c: v, d: j, p: E, arcLength: x, radius: k, ab: M + S, bc: S + v, abc: M + S + v };
  }(N, n, u, 0.5 * Math.min(r, i)));
  return [["M", r - b.p + h, f], ...Z(n, l, b.radius, [b.a, 0, b.ab, 0, b.abc, b.d], b.arcLength, [1, 1], [b.d, b.c, b.d, b.bc, b.d, b.abc], [b.p, 0]), ["L", r + h, i - m.p + f], ...Z(n, l, m.radius, [0, m.a, 0, m.ab, -m.d, m.abc], m.arcLength, [-1, 1], [-m.c, m.d, -m.bc, m.d, -m.abc, m.d], [0, m.p]), ["L", w.p + h, i + f], ...Z(n, l, w.radius, [-w.a, 0, -w.ab, 0, -w.abc, -w.d], w.arcLength, [-1, -1], [-w.d, -w.c, -w.d, -w.bc, -w.d, -w.abc], [-w.p, 0]), ["L", h, g.p + f], ...Z(n, l, g.radius, [0, -g.a, 0, -g.ab, g.d, -g.abc], g.arcLength, [1, -1], [g.c, -g.d, g.bc, -g.d, g.abc, -g.d], [0, -g.p]), ["Z"]];
}
function ie({ width: r = 0, height: i = 0, radius: a = 0, offset: c = 0, smoothing: n = 1, type: u = Ue, precision: l = 3, isArray: f = !1 }) {
  if (!r || !i) return f ? [] : "";
  const h = Array.isArray(c) ? c : [c, c, c, c], [g, b, m, w] = h, N = r - w - b, k = i - g - m, R = 0.5 * Math.min(N, k), C = (Array.isArray(a) ? a : [a, a, a, a]).map((E, y) => Math.max(0, Math.min(E - h[y], R)));
  let _;
  return _ = u ? u({ width: N, height: k, radii: C, offsets: h, smoothing: n }) : [[]], _ = _.filter((E) => E[0]).map(([E, ...y]) => {
    const x = y.map((v) => Number.isFinite(v) ? Number(v.toFixed(l)) : v), T = [E, f ? x : x.join(" ")];
    return f ? T : T.join("");
  }), f ? _ : _.join("");
}
function Le(r, i) {
  G.setCornerOptions(r, i);
  const a = (c) => {
    const n = G.getDrawOptions(r) ?? {};
    if (!n.width || !n.height) {
      const l = r.getBoundingClientRect();
      n.width = l.width, n.height = l.height;
    }
    const u = { ...n, ...c };
    u.isRounded && (u.width = u.width ? Math.round(u.width) : void 0, u.height = u.height ? Math.round(u.height) : void 0), r.style.clipPath = n.clip ? `path('${ie(u)}')` : "", (n.background || n.border) && (r.style.backgroundImage = function(l) {
      const { border: f = [], offset: h = 0, strokeDrawType: g = 0, background: b, clip: m, clipID: w, width: N, height: k } = l, R = [], C = Array.isArray(f == null ? void 0 : f[0]) ? f : [f], _ = Array.isArray(h) ? h : [h, h, h, h], E = m ? null : ie(l);
      if (C != null && C.length) {
        let y = 0;
        const x = [];
        for (let T = 0; T < C.length; T++) {
          const [v, j] = C[T], S = g === 0 ? 2 * (y + v) : v;
          v && (x.push(`<path d="${ie({ ...l, offset: g === 0 ? h : _.map((M) => M + y + 0.5 * v) })}" fill="none" stroke="${j}" stroke-width="${S}" />`), y += v);
        }
        b && (m ? R.push(`<rect width="${N}" height="${k}" fill="${b}" />`) : R.push(`<path d="${E}" fill="${b}" />`)), R.push(...x.reverse());
      }
      return R.length ? ((y, x, T = "c") => {
        return `url('data:image/svg+xml,${((j) => encodeURIComponent(j).replace(/%20/g, " ").replace(/%3D/g, "=").replace(/%3A/g, ":").replace(/%2F/g, "/").replace(/%2C/g, ",").replace(/%3B/g, ";"))((v = (x ? [`<defs><clipPath id="${T}"><path d="${x}" /></clipPath></defs>`, `<g clip-path="url(#${T})">${y.join("")}</g>`] : y).join(""), `<svg xmlns="http://www.w3.org/2000/svg">${v}</svg>`))}')`;
        var v;
      })(R, E, w) : "none";
    }(u));
  };
  return a(), G.addElement(r, i, a);
}
function qe(r, i) {
  G.draw(r, i);
}
function He(r) {
  G.unobserve(r);
}
const Ve = Ne(
  ({
    as: r = "div",
    children: i,
    width: a,
    height: c,
    smoothing: n,
    radius: u,
    offset: l,
    type: f,
    precision: h,
    isRounded: g,
    background: b,
    border: m,
    strokeDrawType: w,
    clipID: N,
    clip: k,
    observe: R,
    onResize: C,
    ..._
  }, E) => {
    const [y, x] = Me(void 0), T = {
      width: a,
      height: c,
      smoothing: n,
      radius: u,
      offset: l,
      type: f,
      precision: h,
      isRounded: g,
      background: b,
      border: m,
      strokeDrawType: w,
      clipID: N,
      clip: k,
      observe: R,
      onResize: C
    }, v = $e((j) => {
      x(j), j && Le(j, T), typeof E == "function" ? E(j) : E && (E.current = j);
    }, []);
    return ye(() => {
      y && qe(y, T);
    }, [...Object.values(T)]), ye(() => () => {
      y && He(y);
    }, []), /* @__PURE__ */ ze.jsx(r, { ..._, ref: v, children: i });
  }
);
export {
  Ve as Monoco,
  Ve as default
};
