var ke = Object.defineProperty;
var Ae = (r, s, a) => s in r ? ke(r, s, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[s] = a;
var ae = (r, s, a) => Ae(r, typeof s != "symbol" ? s + "" : s, a);
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
  var r = Symbol.for("react.transitional.element"), s = Symbol.for("react.fragment");
  function a(c, n, l) {
    var u = null;
    if (l !== void 0 && (u = "" + l), n.key !== void 0 && (u = "" + n.key), "key" in n) {
      l = {};
      for (var f in n)
        f !== "key" && (l[f] = n[f]);
    } else l = n;
    return n = l.ref, {
      $$typeof: r,
      type: c,
      key: u,
      ref: n !== void 0 ? n : null,
      props: l
    };
  }
  return V.Fragment = s, V.jsx = a, V.jsxs = a, V;
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
        case x:
          return "Portal";
        case S:
          return "Profiler";
        case A:
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
    function s(e) {
      return "" + e;
    }
    function a(e) {
      try {
        s(e);
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
        ), s(e);
      }
    }
    function c() {
    }
    function n() {
      if (J === 0) {
        le = console.log, ue = console.info, fe = console.warn, de = console.error, he = console.group, ge = console.groupCollapsed, ve = console.groupEnd;
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
    function l() {
      if (J--, J === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: z({}, e, { value: le }),
          info: z({}, e, { value: ue }),
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
    function u(e) {
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
        var j = {
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
        j.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var E = Object.getOwnPropertyDescriptor(
          j.DetermineComponentFrameRoot,
          "name"
        );
        E && E.configurable && Object.defineProperty(
          j.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var i = j.DetermineComponentFrameRoot(), $ = i[0], q = i[1];
        if ($ && q) {
          var k = $.split(`
`), U = q.split(`
`);
          for (i = E = 0; E < k.length && !k[E].includes(
            "DetermineComponentFrameRoot"
          ); )
            E++;
          for (; i < U.length && !U[i].includes(
            "DetermineComponentFrameRoot"
          ); )
            i++;
          if (E === k.length || i === U.length)
            for (E = k.length - 1, i = U.length - 1; 1 <= E && 0 <= i && k[E] !== U[i]; )
              i--;
          for (; 1 <= E && 0 <= i; E--, i--)
            if (k[E] !== U[i]) {
              if (E !== 1 || i !== 1)
                do
                  if (E--, i--, 0 > i || k[E] !== U[i]) {
                    var B = `
` + k[E].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", e.displayName)), typeof e == "function" && ne.set(e, B), B;
                  }
                while (1 <= E && 0 <= i);
              break;
            }
        }
      } finally {
        oe = !1, W.H = d, l(), Error.prepareStackTrace = o;
      }
      return k = (k = e ? e.displayName || e.name : "") ? u(k) : "", typeof e == "function" && ne.set(e, k), k;
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
      if (typeof e == "string") return u(e);
      switch (e) {
        case Q:
          return u("Suspense");
        case K:
          return u("SuspenseList");
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
    function p() {
      var e = r(this.type);
      return Ee[e] || (Ee[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function N(e, t, o, d, j, E) {
      return o = E.ref, e = {
        $$typeof: T,
        type: e,
        key: t,
        props: E,
        _owner: j
      }, (o !== void 0 ? o : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: p
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
    function O(e, t, o, d, j, E) {
      if (typeof e == "string" || typeof e == "function" || e === v || e === S || e === A || e === Q || e === K || e === xe || typeof e == "object" && e !== null && (e.$$typeof === ee || e.$$typeof === D || e.$$typeof === L || e.$$typeof === M || e.$$typeof === H || e.$$typeof === je || e.getModuleId !== void 0)) {
        var i = t.children;
        if (i !== void 0)
          if (d)
            if (re(i)) {
              for (d = 0; d < i.length; d++)
                R(i[d], e);
              Object.freeze && Object.freeze(i);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else R(i, e);
      } else
        i = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? d = "null" : re(e) ? d = "array" : e !== void 0 && e.$$typeof === T ? (d = "<" + (r(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          d,
          i
        );
      if (ce.call(t, "key")) {
        i = r(e);
        var $ = Object.keys(t).filter(function(k) {
          return k !== "key";
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
      if (i = null, o !== void 0 && (a(o), i = "" + o), b(t) && (a(t.key), i = "" + t.key), "key" in t) {
        o = {};
        for (var q in t)
          q !== "key" && (o[q] = t[q]);
      } else o = t;
      return i && m(
        o,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), N(e, i, E, j, g(), o);
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
        else if (e === null || typeof e != "object" ? o = null : (o = ie && e[ie] || e["@@iterator"], o = typeof o == "function" ? o : null), typeof o == "function" && o !== e.entries && (o = o.call(e), o !== e))
          for (; !(e = o.next()).done; )
            C(e.value) && _(e.value, t);
      }
    }
    function C(e) {
      return typeof e == "object" && e !== null && e.$$typeof === T;
    }
    function _(e, t) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, t = y(t), !we[t])) {
        we[t] = !0;
        var o = "";
        e && e._owner != null && e._owner !== g() && (o = null, typeof e._owner.tag == "number" ? o = r(e._owner.type) : typeof e._owner.name == "string" && (o = e._owner.name), o = " It was passed a child from " + o + ".");
        var d = W.getCurrentStack;
        W.getCurrentStack = function() {
          var j = h(e.type);
          return d && (j += d() || ""), j;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          t,
          o
        ), W.getCurrentStack = d;
      }
    }
    function y(e) {
      var t = "", o = g();
      return o && (o = r(o.type)) && (t = `

Check the render method of \`` + o + "`."), t || (e = r(e)) && (t = `

Check the top-level render call using <` + e + ">."), t;
    }
    var w = Se, T = Symbol.for("react.transitional.element"), x = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), M = Symbol.for("react.consumer"), L = Symbol.for("react.context"), H = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), K = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), ee = Symbol.for("react.lazy"), xe = Symbol.for("react.offscreen"), ie = Symbol.iterator, Ce = Symbol.for("react.client.reference"), W = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ce = Object.prototype.hasOwnProperty, z = Object.assign, je = Symbol.for("react.client.reference"), re = Array.isArray, J = 0, le, ue, fe, de, he, ge, ve;
    c.__reactDisabledLog = !0;
    var te, be, oe = !1, ne = new (typeof WeakMap == "function" ? WeakMap : Map)(), Oe = Symbol.for("react.client.reference"), me, Ee = {}, pe = {}, we = {};
    F.Fragment = v, F.jsx = function(e, t, o, d, j) {
      return O(e, t, o, !1, d, j);
    }, F.jsxs = function(e, t, o, d, j) {
      return O(e, t, o, !0, d, j);
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
  onElementResize(r) {
    var s;
    for (const a of r) {
      const c = a.target.getBoundingClientRect(), n = (s = this.elements) == null ? void 0 : s.get(a.target);
      if (!n) continue;
      const { previousW: l, previousH: u, draw: f, onResize: h } = n;
      l === c.width && u === c.height || (f == null || f({ width: c.width, height: c.height }), h == null || h(c, a.target), n.previousW = c.width, n.previousH = c.height);
    }
  }
  getDrawOptions(r) {
    var s, a;
    return ((a = (s = this.elements) == null ? void 0 : s.get(r)) == null ? void 0 : a.cornerOptions) ?? null;
  }
  setCornerOptions(r, s) {
    var c, n;
    const a = (c = this.elements) == null ? void 0 : c.get(r);
    a && (a.cornerOptions = s, (n = this.elements) == null || n.set(r, a));
  }
  addElement(r, s, a) {
    this.elements || (this.elements = /* @__PURE__ */ new Map()), this.observer || (this.observer = new ResizeObserver((l) => this.onElementResize(l))), this.unobserve(r);
    const { observe: c = !0, onResize: n } = s;
    return c && (this.observer.observe(r), this.elements.set(r, { draw: a, cornerOptions: s, onResize: n, previousW: null, previousH: null, element: r })), a;
  }
  draw(r, s) {
    var a, c, n, l;
    r ? (s && this.setCornerOptions(r, s), (n = (c = (a = this.elements) == null ? void 0 : a.get(r)) == null ? void 0 : c.draw) == null || n.call(c)) : (l = this.elements) == null || l.forEach((u) => {
      var f;
      return (f = u.draw) == null ? void 0 : f.call(u);
    });
  }
  unobserve(r) {
    var a;
    const s = (c) => {
      var n, l;
      (n = this.observer) == null || n.unobserve(r), (l = this.elements) == null || l.delete(r);
    };
    r ? s() : (a = this.elements) == null || a.keys().forEach((c) => s());
  }
}();
function Z(r, s, a, c, n, l, u, f) {
  return a ? [r ? ["c", ...c] : [], n ? ["a", a, a, 0, 0, s, ...l.map((h) => h * n)] : [], r ? ["c", ...u] : []] : [["l", ...f]];
}
function Ue({ width: r, height: s, radii: a, offsets: c, smoothing: n = 1, preserveSmoothing: l = !0, sweepFlag: u = 1 }) {
  const [f, , , h] = c, [g, b, m, p] = a.map((N) => function(O, R, C, _) {
    let y = (1 + R) * O;
    C || (R = Math.min(R, _ / O - 1), y = Math.min(y, _));
    const w = 0.5 * Math.PI * (1 - R), T = Math.sin(w / 2) * O * 2 ** 0.5, x = 0.25 * Math.PI * R, v = O * Math.tan(0.25 * (0.5 * Math.PI - w)) * Math.cos(x), A = v * Math.tan(x);
    let S = (y - T - v - A) / 3, M = 2 * S;
    if (C && y > _) {
      const L = _ - A - T - v, H = L - L / 6;
      S = Math.min(S, H), M = L - S, y = Math.min(y, _);
    }
    return { a: M, b: S, c: v, d: A, p: y, arcLength: T, radius: O, ab: M + S, bc: S + v, abc: M + S + v };
  }(N, n, l, 0.5 * Math.min(r, s)));
  return [["M", r - b.p + h, f], ...Z(n, u, b.radius, [b.a, 0, b.ab, 0, b.abc, b.d], b.arcLength, [1, 1], [b.d, b.c, b.d, b.bc, b.d, b.abc], [b.p, 0]), ["L", r + h, s - m.p + f], ...Z(n, u, m.radius, [0, m.a, 0, m.ab, -m.d, m.abc], m.arcLength, [-1, 1], [-m.c, m.d, -m.bc, m.d, -m.abc, m.d], [0, m.p]), ["L", p.p + h, s + f], ...Z(n, u, p.radius, [-p.a, 0, -p.ab, 0, -p.abc, -p.d], p.arcLength, [-1, -1], [-p.d, -p.c, -p.d, -p.bc, -p.d, -p.abc], [-p.p, 0]), ["L", h, g.p + f], ...Z(n, u, g.radius, [0, -g.a, 0, -g.ab, g.d, -g.abc], g.arcLength, [1, -1], [g.c, -g.d, g.bc, -g.d, g.abc, -g.d], [0, -g.p]), ["Z"]];
}
function se({ width: r = 0, height: s = 0, borderRadius: a = 0, offset: c = 0, smoothing: n = 1, cornerType: l = Ue, precision: u = 3, isArray: f = !1 }) {
  if (!r || !s) return f ? [] : "";
  const h = Array.isArray(c) ? c : [c, c, c, c], [g, b, m, p] = h, N = r - p - b, O = s - g - m, R = 0.5 * Math.min(N, O), C = (Array.isArray(a) ? a : [a, a, a, a]).map((y, w) => Math.max(0, Math.min(y - h[w], R)));
  let _;
  return _ = l ? l({ width: N, height: O, radii: C, offsets: h, smoothing: n }) : [[]], _ = _.filter((y) => y[0]).map(([y, ...w]) => {
    const T = w.map((v) => Number.isFinite(v) ? Number(v.toFixed(u)) : v), x = [y, f ? T : T.join(" ")];
    return f ? x : x.join("");
  }), f ? _ : _.join("");
}
function Le(r, s) {
  G.setCornerOptions(r, s);
  const a = (c) => {
    const n = G.getDrawOptions(r) ?? {};
    if (!n.width || !n.height) {
      const u = r.getBoundingClientRect();
      n.width = u.width, n.height = u.height;
    }
    const l = { ...n, ...c };
    l.isRounded && (l.width = l.width ? Math.round(l.width) : void 0, l.height = l.height ? Math.round(l.height) : void 0), r.style.clipPath = n.clip ? `path('${se(l)}')` : "", (n.background || n.border) && (r.style.backgroundImage = function(u) {
      const { border: f = [], offset: h = 0, strokeDrawType: g = 0, background: b, clip: m, clipID: p, width: N, height: O } = u, R = [], C = Array.isArray(f == null ? void 0 : f[0]) ? f : [f], _ = Array.isArray(h) ? h : [h, h, h, h], y = m ? null : se(u);
      if (C != null && C.length) {
        let w = 0;
        const T = [];
        for (let x = 0; x < C.length; x++) {
          const [v, A] = C[x], S = g === 0 ? 2 * (w + v) : v;
          v && (T.push(`<path d="${se({ ...u, offset: g === 0 ? h : _.map((M) => M + w + 0.5 * v) })}" fill="none" stroke="${A}" stroke-width="${S}" />`), w += v);
        }
        b && (m ? R.push(`<rect width="${N}" height="${O}" fill="${b}" />`) : R.push(`<path d="${y}" fill="${b}" />`)), R.push(...T.reverse());
      }
      return R.length ? ((w, T, x = "c") => {
        return `url('data:image/svg+xml,${((A) => encodeURIComponent(A).replace(/%20/g, " ").replace(/%3D/g, "=").replace(/%3A/g, ":").replace(/%2F/g, "/").replace(/%2C/g, ",").replace(/%3B/g, ";"))((v = (T ? [`<defs><clipPath id="${x}"><path d="${T}" /></clipPath></defs>`, `<g clip-path="url(#${x})">${w.join("")}</g>`] : w).join(""), `<svg xmlns="http://www.w3.org/2000/svg">${v}</svg>`))}')`;
        var v;
      })(R, y, p) : "none";
    }(l));
  };
  return a(), G.addElement(r, s, a);
}
function qe(r, s) {
  G.draw(r, s);
}
function He(r) {
  G.unobserve(r);
}
const Ve = Ne(
  ({
    as: r = "div",
    children: s,
    width: a,
    height: c,
    smoothing: n,
    borderRadius: l,
    offset: u,
    cornerType: f,
    precision: h,
    isRounded: g,
    background: b,
    border: m,
    strokeDrawType: p,
    clipID: N,
    clip: O,
    observe: R,
    onResize: C,
    ..._
  }, y) => {
    const [w, T] = Me(null), x = {
      width: a,
      height: c,
      smoothing: n,
      borderRadius: l,
      offset: u,
      cornerType: f,
      precision: h,
      isRounded: g,
      background: b,
      border: m,
      strokeDrawType: p,
      clipID: N,
      clip: O,
      observe: R,
      onResize: C
    }, v = $e((A) => {
      T(A), A && Le(A, x);
    }, []);
    return ye(() => {
      w && qe(w, x);
    }, [...Object.values(x)]), ye(() => () => {
      w && He(w);
    }, []), /* @__PURE__ */ ze.jsx(r, { ..._, ref: v, children: s });
  }
);
export {
  Ve as Monoco,
  Ve as default
};
