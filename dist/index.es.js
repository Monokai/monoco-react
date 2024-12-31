var ke = Object.defineProperty;
var Ae = (o, s, n) => s in o ? ke(o, s, { enumerable: !0, configurable: !0, writable: !0, value: n }) : o[s] = n;
var ae = (o, s, n) => Ae(o, typeof s != "symbol" ? s + "" : s, n);
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
  var o = Symbol.for("react.transitional.element"), s = Symbol.for("react.fragment");
  function n(c, a, u) {
    var l = null;
    if (u !== void 0 && (l = "" + u), a.key !== void 0 && (l = "" + a.key), "key" in a) {
      u = {};
      for (var f in a)
        f !== "key" && (u[f] = a[f]);
    } else u = a;
    return a = u.ref, {
      $$typeof: o,
      type: c,
      key: l,
      ref: a !== void 0 ? a : null,
      props: u
    };
  }
  return V.Fragment = s, V.jsx = n, V.jsxs = n, V;
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
    function o(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Ce ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case R:
          return "Fragment";
        case C:
          return "Portal";
        case S:
          return "Profiler";
        case O:
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
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case D:
            return r = e.displayName || null, r !== null ? r : o(e.type) || "Memo";
          case ee:
            r = e._payload, e = e._init;
            try {
              return o(e(r));
            } catch {
            }
        }
      return null;
    }
    function s(e) {
      return "" + e;
    }
    function n(e) {
      try {
        s(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, d = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          d
        ), s(e);
      }
    }
    function c() {
    }
    function a() {
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
        } catch (t) {
          var r = t.stack.trim().match(/\n( *(at )?)/);
          te = r && r[1] || "", be = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + te + e + be;
    }
    function f(e, r) {
      if (!e || oe) return "";
      var t = ne.get(e);
      if (t !== void 0) return t;
      oe = !0, t = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var d = null;
      d = W.H, W.H = null, a();
      try {
        var k = {
          DetermineComponentFrameRoot: function() {
            try {
              if (r) {
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
        k.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var p = Object.getOwnPropertyDescriptor(
          k.DetermineComponentFrameRoot,
          "name"
        );
        p && p.configurable && Object.defineProperty(
          k.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var i = k.DetermineComponentFrameRoot(), $ = i[0], q = i[1];
        if ($ && q) {
          var A = $.split(`
`), U = q.split(`
`);
          for (i = p = 0; p < A.length && !A[p].includes(
            "DetermineComponentFrameRoot"
          ); )
            p++;
          for (; i < U.length && !U[i].includes(
            "DetermineComponentFrameRoot"
          ); )
            i++;
          if (p === A.length || i === U.length)
            for (p = A.length - 1, i = U.length - 1; 1 <= p && 0 <= i && A[p] !== U[i]; )
              i--;
          for (; 1 <= p && 0 <= i; p--, i--)
            if (A[p] !== U[i]) {
              if (p !== 1 || i !== 1)
                do
                  if (p--, i--, 0 > i || A[p] !== U[i]) {
                    var B = `
` + A[p].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", e.displayName)), typeof e == "function" && ne.set(e, B), B;
                  }
                while (1 <= p && 0 <= i);
              break;
            }
        }
      } finally {
        oe = !1, W.H = d, u(), Error.prepareStackTrace = t;
      }
      return A = (A = e ? e.displayName || e.name : "") ? l(A) : "", typeof e == "function" && ne.set(e, A), A;
    }
    function h(e) {
      if (e == null) return "";
      if (typeof e == "function") {
        var r = e.prototype;
        return f(
          e,
          !(!r || !r.isReactComponent)
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
            r = e._payload, e = e._init;
            try {
              return h(e(r));
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
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function E(e, r) {
      function t() {
        me || (me = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function w() {
      var e = o(this.type);
      return Ee[e] || (Ee[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function N(e, r, t, d, k, p) {
      return t = p.ref, e = {
        $$typeof: y,
        type: e,
        key: r,
        props: p,
        _owner: k
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
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
    function j(e, r, t, d, k, p) {
      if (typeof e == "string" || typeof e == "function" || e === R || e === S || e === O || e === Q || e === K || e === xe || typeof e == "object" && e !== null && (e.$$typeof === ee || e.$$typeof === D || e.$$typeof === L || e.$$typeof === M || e.$$typeof === H || e.$$typeof === je || e.getModuleId !== void 0)) {
        var i = r.children;
        if (i !== void 0)
          if (d)
            if (re(i)) {
              for (d = 0; d < i.length; d++)
                _(i[d], e);
              Object.freeze && Object.freeze(i);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else _(i, e);
      } else
        i = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? d = "null" : re(e) ? d = "array" : e !== void 0 && e.$$typeof === y ? (d = "<" + (o(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          d,
          i
        );
      if (ce.call(r, "key")) {
        i = o(e);
        var $ = Object.keys(r).filter(function(A) {
          return A !== "key";
        });
        d = 0 < $.length ? "{key: someKey, " + $.join(": ..., ") + ": ...}" : "{key: someKey}", pe[i + d] || ($ = 0 < $.length ? "{" + $.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          d,
          i,
          $,
          i
        ), pe[i + d] = !0);
      }
      if (i = null, t !== void 0 && (n(t), i = "" + t), b(r) && (n(r.key), i = "" + r.key), "key" in r) {
        t = {};
        for (var q in r)
          q !== "key" && (t[q] = r[q]);
      } else t = r;
      return i && E(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), N(e, i, p, k, g(), t);
    }
    function _(e, r) {
      if (typeof e == "object" && e && e.$$typeof !== Oe) {
        if (re(e))
          for (var t = 0; t < e.length; t++) {
            var d = e[t];
            T(d) && x(d, r);
          }
        else if (T(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? t = null : (t = ie && e[ie] || e["@@iterator"], t = typeof t == "function" ? t : null), typeof t == "function" && t !== e.entries && (t = t.call(e), t !== e))
          for (; !(e = t.next()).done; )
            T(e.value) && x(e.value, r);
      }
    }
    function T(e) {
      return typeof e == "object" && e !== null && e.$$typeof === y;
    }
    function x(e, r) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, r = m(r), !we[r])) {
        we[r] = !0;
        var t = "";
        e && e._owner != null && e._owner !== g() && (t = null, typeof e._owner.tag == "number" ? t = o(e._owner.type) : typeof e._owner.name == "string" && (t = e._owner.name), t = " It was passed a child from " + t + ".");
        var d = W.getCurrentStack;
        W.getCurrentStack = function() {
          var k = h(e.type);
          return d && (k += d() || ""), k;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          r,
          t
        ), W.getCurrentStack = d;
      }
    }
    function m(e) {
      var r = "", t = g();
      return t && (t = o(t.type)) && (r = `

Check the render method of \`` + t + "`."), r || (e = o(e)) && (r = `

Check the top-level render call using <` + e + ">."), r;
    }
    var v = Se, y = Symbol.for("react.transitional.element"), C = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), M = Symbol.for("react.consumer"), L = Symbol.for("react.context"), H = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), K = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), ee = Symbol.for("react.lazy"), xe = Symbol.for("react.offscreen"), ie = Symbol.iterator, Ce = Symbol.for("react.client.reference"), W = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ce = Object.prototype.hasOwnProperty, z = Object.assign, je = Symbol.for("react.client.reference"), re = Array.isArray, J = 0, ue, le, fe, de, he, ge, ve;
    c.__reactDisabledLog = !0;
    var te, be, oe = !1, ne = new (typeof WeakMap == "function" ? WeakMap : Map)(), Oe = Symbol.for("react.client.reference"), me, Ee = {}, pe = {}, we = {};
    F.Fragment = R, F.jsx = function(e, r, t, d, k) {
      return j(e, r, t, !1, d, k);
    }, F.jsxs = function(e, r, t, d, k) {
      return j(e, r, t, !0, d, k);
    };
  }()), F;
}
var Te;
function We() {
  return Te || (Te = 1, process.env.NODE_ENV === "production" ? X.exports = Pe() : X.exports = Ye()), X.exports;
}
var ze = We(), G = new class {
  constructor() {
    ae(this, "elements");
    ae(this, "observer");
    this.elements = null, this.observer = null;
  }
  onElementResize(o) {
    var s;
    for (const n of o) {
      const c = n.target.getBoundingClientRect(), a = (s = this.elements) == null ? void 0 : s.get(n.target);
      if (!a) continue;
      const { previousW: u, previousH: l, draw: f, onResize: h } = a;
      u === c.width && l === c.height || (f == null || f({ width: c.width, height: c.height }), h == null || h(c, n.target), a.previousW = c.width, a.previousH = c.height);
    }
  }
  getDrawOptions(o) {
    var s, n;
    return ((n = (s = this.elements) == null ? void 0 : s.get(o)) == null ? void 0 : n.cornerOptions) ?? null;
  }
  setCornerOptions(o, s) {
    var c, a;
    const n = (c = this.elements) == null ? void 0 : c.get(o);
    n && (n.cornerOptions = s, (a = this.elements) == null || a.set(o, n));
  }
  addElement(o, s, n) {
    this.elements || (this.elements = /* @__PURE__ */ new Map()), this.observer || (this.observer = new ResizeObserver((u) => this.onElementResize(u))), this.unobserve(o);
    const { observe: c = !0, onResize: a } = s;
    return c && (this.observer.observe(o), this.elements.set(o, { draw: n, cornerOptions: s, onResize: a, previousW: null, previousH: null, element: o })), n;
  }
  draw(o, s) {
    var n, c, a, u;
    o ? (s && this.setCornerOptions(o, s), (a = (c = (n = this.elements) == null ? void 0 : n.get(o)) == null ? void 0 : c.draw) == null || a.call(c)) : (u = this.elements) == null || u.forEach((l) => {
      var f;
      return (f = l.draw) == null ? void 0 : f.call(l);
    });
  }
  unobserve(o) {
    var n;
    const s = (c) => {
      var a, u;
      (a = this.observer) == null || a.unobserve(o), (u = this.elements) == null || u.delete(o);
    };
    o ? s() : (n = this.elements) == null || n.keys().forEach((c) => s());
  }
}();
function Z(o, s, n, c, a, u, l, f) {
  return n ? [o ? ["c", ...c] : [], a ? ["a", n, n, 0, 0, s, ...u.map((h) => h * a)] : [], o ? ["c", ...l] : []] : [["l", ...f]];
}
function Ue({ width: o, height: s, radii: n, offsets: c, smoothing: a = 1, preserveSmoothing: u = !0, sweepFlag: l = 1 }) {
  const [f, , , h] = c, [g, b, E, w] = n.map((N) => function(j, _, T, x) {
    let m = (1 + _) * j;
    T || (_ = Math.min(_, x / j - 1), m = Math.min(m, x));
    const v = 0.5 * Math.PI * (1 - _), y = Math.sin(v / 2) * j * 2 ** 0.5, C = 0.25 * Math.PI * _, R = j * Math.tan(0.25 * (0.5 * Math.PI - v)) * Math.cos(C), O = R * Math.tan(C);
    let S = (m - y - R - O) / 3, M = 2 * S;
    if (T && m > x) {
      const L = x - O - y - R, H = L - L / 6;
      S = Math.min(S, H), M = L - S, m = Math.min(m, x);
    }
    return { a: M, b: S, c: R, d: O, p: m, arcLength: y, radius: j, ab: M + S, bc: S + R, abc: M + S + R };
  }(N, a, u, N));
  return [["M", o - b.p + h, f], ...Z(a, l, b.radius, [b.a, 0, b.ab, 0, b.abc, b.d], b.arcLength, [1, 1], [b.d, b.c, b.d, b.bc, b.d, b.abc], [b.p, 0]), ["L", o + h, s - E.p + f], ...Z(a, l, E.radius, [0, E.a, 0, E.ab, -E.d, E.abc], E.arcLength, [-1, 1], [-E.c, E.d, -E.bc, E.d, -E.abc, E.d], [0, E.p]), ["L", w.p + h, s + f], ...Z(a, l, w.radius, [-w.a, 0, -w.ab, 0, -w.abc, -w.d], w.arcLength, [-1, -1], [-w.d, -w.c, -w.d, -w.bc, -w.d, -w.abc], [-w.p, 0]), ["L", h, g.p + f], ...Z(a, l, g.radius, [0, -g.a, 0, -g.ab, g.d, -g.abc], g.arcLength, [1, -1], [g.c, -g.d, g.bc, -g.d, g.abc, -g.d], [0, -g.p]), ["Z"]];
}
function se({ width: o = 0, height: s = 0, borderRadius: n = 0, offset: c = 0, smoothing: a = 1, cornerType: u = Ue, precision: l = 3, isArray: f = !1 }) {
  if (!o || !s) return f ? [] : "";
  const h = Array.isArray(c) ? c : [c, c, c, c], [g, b, E, w] = h, N = o - w - b, j = s - g - E;
  let _, T;
  if (Array.isArray(n)) {
    const x = n.map((v, y) => v + n[(y + 1) % 4]), m = Math.min(...x.map((v, y) => (y % 2 == 0 ? N : j) / v));
    _ = m < 1 ? n.map((v) => v * m) : n;
  } else _ = [n, n, n, n].map((x, m) => Math.max(0, Math.min(x - h[m], 0.5 * Math.min(N, j))));
  return T = u ? u({ width: N, height: j, radii: _, offsets: h, smoothing: a }) : [[]], T = T.filter((x) => x[0]).map(([x, ...m]) => {
    const v = m.map((C) => Number.isFinite(C) ? Number(C.toFixed(l)) : C), y = [x, f ? v : v.join(" ")];
    return f ? y : y.join("");
  }), f ? T : T.join("");
}
function Le(o, s) {
  G.setCornerOptions(o, s);
  const n = (c) => {
    const a = G.getDrawOptions(o) ?? {};
    if (!a.width || !a.height) {
      const l = o.getBoundingClientRect();
      a.width = l.width, a.height = l.height;
    }
    const u = { ...a, ...c };
    u.isRounded && (u.width = u.width ? Math.round(u.width) : void 0, u.height = u.height ? Math.round(u.height) : void 0), o.style.clipPath = a.clip ? `path('${se(u)}')` : "", (a.background || a.border) && (o.style.backgroundImage = function(l) {
      const { border: f = [], offset: h = 0, strokeDrawType: g = 0, background: b, clip: E, clipID: w, width: N, height: j } = l, _ = [], T = Array.isArray(f == null ? void 0 : f[0]) ? f : [f], x = Array.isArray(h) ? h : [h, h, h, h], m = E ? null : se(l);
      if (T != null && T.length) {
        let v = 0;
        const y = [];
        for (let C = 0; C < T.length; C++) {
          const [R, O] = T[C], S = g === 0 ? 2 * (v + R) : R;
          R && (y.push(`<path d="${se({ ...l, offset: g === 0 ? h : x.map((M) => M + v + 0.5 * R) })}" fill="none" stroke="${O}" stroke-width="${S}" />`), v += R);
        }
        b && (E ? _.push(`<rect width="${N}" height="${j}" fill="${b}" />`) : _.push(`<path d="${m}" fill="${b}" />`)), _.push(...y.reverse());
      }
      return _.length ? ((v, y, C = "c") => {
        return `url('data:image/svg+xml,${((O) => encodeURIComponent(O).replace(/%20/g, " ").replace(/%3D/g, "=").replace(/%3A/g, ":").replace(/%2F/g, "/").replace(/%2C/g, ",").replace(/%3B/g, ";"))((R = (y ? [`<defs><clipPath id="${C}"><path d="${y}" /></clipPath></defs>`, `<g clip-path="url(#${C})">${v.join("")}</g>`] : v).join(""), `<svg xmlns="http://www.w3.org/2000/svg">${R}</svg>`))}')`;
        var R;
      })(_, m, w) : "none";
    }(u));
  };
  return n(), G.addElement(o, s, n);
}
function qe(o, s) {
  G.draw(o, s);
}
function He(o) {
  G.unobserve(o);
}
const Ve = Ne(
  ({
    as: o = "div",
    children: s,
    width: n,
    height: c,
    smoothing: a,
    borderRadius: u,
    offset: l,
    cornerType: f,
    precision: h,
    isRounded: g,
    background: b,
    border: E,
    strokeDrawType: w,
    clipID: N,
    clip: j,
    observe: _,
    onResize: T,
    ...x
  }, m) => {
    const [v, y] = Me(null), C = {
      width: n,
      height: c,
      smoothing: a,
      borderRadius: u,
      offset: l,
      cornerType: f,
      precision: h,
      isRounded: g,
      background: b,
      border: E,
      strokeDrawType: w,
      clipID: N,
      clip: j,
      observe: _,
      onResize: T
    }, R = $e((O) => {
      y(O), O && Le(O, C), typeof m == "function" ? m(O) : m && (m.current = O);
    }, []);
    return ye(() => {
      v && qe(v, C);
    }, [...Object.values(C)]), ye(() => () => {
      v && He(v);
    }, []), /* @__PURE__ */ ze.jsx(o, { ...x, ref: R, children: s });
  }
);
export {
  Ve as Monoco,
  Ve as default
};
