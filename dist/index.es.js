var Oe = Object.defineProperty;
var Se = (r, a, i) => a in r ? Oe(r, a, { enumerable: !0, configurable: !0, writable: !0, value: i }) : r[a] = i;
var me = (r, a, i) => Se(r, typeof a != "symbol" ? a + "" : a, i);
import Me, { forwardRef as Ne, useState as Le, useCallback as $e, useEffect as Te } from "react";
var fe = { exports: {} }, ae = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function Pe() {
  if (Ae) return ae;
  Ae = 1;
  var r = Symbol.for("react.transitional.element"), a = Symbol.for("react.fragment");
  function i(d, o, u) {
    var m = null;
    if (u !== void 0 && (m = "" + u), o.key !== void 0 && (m = "" + o.key), "key" in o) {
      u = {};
      for (var E in o)
        E !== "key" && (u[E] = o[E]);
    } else u = o;
    return o = u.ref, {
      $$typeof: r,
      type: d,
      key: m,
      ref: o !== void 0 ? o : null,
      props: u
    };
  }
  return ae.Fragment = a, ae.jsx = i, ae.jsxs = i, ae;
}
var ie = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function Ye() {
  return ke || (ke = 1, process.env.NODE_ENV !== "production" && function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Q ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case w:
          return "Fragment";
        case h:
          return "Portal";
        case f:
          return "Profiler";
        case _:
          return "StrictMode";
        case v:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case y:
            return (e.displayName || "Context") + ".Provider";
          case c:
            return (e._context.displayName || "Context") + ".Consumer";
          case T:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case R:
            return t = e.displayName || null, t !== null ? t : r(e.type) || "Memo";
          case k:
            t = e._payload, e = e._init;
            try {
              return r(e(t));
            } catch {
            }
        }
      return null;
    }
    function a(e) {
      return "" + e;
    }
    function i(e) {
      try {
        a(e);
        var t = !1;
      } catch {
        t = !0;
      }
      if (t) {
        t = console;
        var n = t.error, b = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          b
        ), a(e);
      }
    }
    function d() {
    }
    function o() {
      if (V === 0) {
        q = console.log, re = console.info, $ = console.warn, D = console.error, te = console.group, ue = console.groupCollapsed, pe = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: d,
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
      V++;
    }
    function u() {
      if (V--, V === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: S({}, e, { value: q }),
          info: S({}, e, { value: re }),
          warn: S({}, e, { value: $ }),
          error: S({}, e, { value: D }),
          group: S({}, e, { value: te }),
          groupCollapsed: S({}, e, { value: ue }),
          groupEnd: S({}, e, { value: pe })
        });
      }
      0 > V && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function m(e) {
      if (ge === void 0)
        try {
          throw Error();
        } catch (n) {
          var t = n.stack.trim().match(/\n( *(at )?)/);
          ge = t && t[1] || "", we = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + ge + e + we;
    }
    function E(e, t) {
      if (!e || ve) return "";
      var n = be.get(e);
      if (n !== void 0) return n;
      ve = !0, n = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var b = null;
      b = W.H, W.H = null, o();
      try {
        var O = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var G = function() {
                  throw Error();
                };
                if (Object.defineProperty(G.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(G, []);
                  } catch (U) {
                    var le = U;
                  }
                  Reflect.construct(e, [], G);
                } else {
                  try {
                    G.call();
                  } catch (U) {
                    le = U;
                  }
                  e.call(G.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (U) {
                  le = U;
                }
                (G = e()) && typeof G.catch == "function" && G.catch(function() {
                });
              }
            } catch (U) {
              if (U && le && typeof U.stack == "string")
                return [U.stack, le.stack];
            }
            return [null, null];
          }
        };
        O.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var x = Object.getOwnPropertyDescriptor(
          O.DetermineComponentFrameRoot,
          "name"
        );
        x && x.configurable && Object.defineProperty(
          O.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var s = O.DetermineComponentFrameRoot(), z = s[0], ne = s[1];
        if (z && ne) {
          var M = z.split(`
`), ee = ne.split(`
`);
          for (s = x = 0; x < M.length && !M[x].includes(
            "DetermineComponentFrameRoot"
          ); )
            x++;
          for (; s < ee.length && !ee[s].includes(
            "DetermineComponentFrameRoot"
          ); )
            s++;
          if (x === M.length || s === ee.length)
            for (x = M.length - 1, s = ee.length - 1; 1 <= x && 0 <= s && M[x] !== ee[s]; )
              s--;
          for (; 1 <= x && 0 <= s; x--, s--)
            if (M[x] !== ee[s]) {
              if (x !== 1 || s !== 1)
                do
                  if (x--, s--, 0 > s || M[x] !== ee[s]) {
                    var oe = `
` + M[x].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && oe.includes("<anonymous>") && (oe = oe.replace("<anonymous>", e.displayName)), typeof e == "function" && be.set(e, oe), oe;
                  }
                while (1 <= x && 0 <= s);
              break;
            }
        }
      } finally {
        ve = !1, W.H = b, u(), Error.prepareStackTrace = n;
      }
      return M = (M = e ? e.displayName || e.name : "") ? m(M) : "", typeof e == "function" && be.set(e, M), M;
    }
    function A(e) {
      if (e == null) return "";
      if (typeof e == "function") {
        var t = e.prototype;
        return E(
          e,
          !(!t || !t.isReactComponent)
        );
      }
      if (typeof e == "string") return m(e);
      switch (e) {
        case v:
          return m("Suspense");
        case g:
          return m("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case T:
            return e = E(e.render, !1), e;
          case R:
            return A(e.type);
          case k:
            t = e._payload, e = e._init;
            try {
              return A(e(t));
            } catch {
            }
        }
      return "";
    }
    function Y() {
      var e = W.A;
      return e === null ? null : e.getOwner();
    }
    function N(e) {
      if (B.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function F(e, t) {
      function n() {
        ye || (ye = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          t
        ));
      }
      n.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: n,
        configurable: !0
      });
    }
    function X() {
      var e = r(this.type);
      return Re[e] || (Re[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function Z(e, t, n, b, O, x) {
      return n = x.ref, e = {
        $$typeof: l,
        type: e,
        key: t,
        props: x,
        _owner: O
      }, (n !== void 0 ? n : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: X
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
    function I(e, t, n, b, O, x) {
      if (typeof e == "string" || typeof e == "function" || e === w || e === f || e === _ || e === v || e === g || e === he || typeof e == "object" && e !== null && (e.$$typeof === k || e.$$typeof === R || e.$$typeof === y || e.$$typeof === c || e.$$typeof === T || e.$$typeof === ce || e.getModuleId !== void 0)) {
        var s = t.children;
        if (s !== void 0)
          if (b)
            if (K(s)) {
              for (b = 0; b < s.length; b++)
                j(s[b], e);
              Object.freeze && Object.freeze(s);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else j(s, e);
      } else
        s = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? b = "null" : K(e) ? b = "array" : e !== void 0 && e.$$typeof === l ? (b = "<" + (r(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : b = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          b,
          s
        );
      if (B.call(t, "key")) {
        s = r(e);
        var z = Object.keys(t).filter(function(M) {
          return M !== "key";
        });
        b = 0 < z.length ? "{key: someKey, " + z.join(": ..., ") + ": ...}" : "{key: someKey}", _e[s + b] || (z = 0 < z.length ? "{" + z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          b,
          s,
          z,
          s
        ), _e[s + b] = !0);
      }
      if (s = null, n !== void 0 && (i(n), s = "" + n), N(t) && (i(t.key), s = "" + t.key), "key" in t) {
        n = {};
        for (var ne in t)
          ne !== "key" && (n[ne] = t[ne]);
      } else n = t;
      return s && F(
        n,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), Z(e, s, x, O, Y(), n);
    }
    function j(e, t) {
      if (typeof e == "object" && e && e.$$typeof !== je) {
        if (K(e))
          for (var n = 0; n < e.length; n++) {
            var b = e[n];
            C(b) && H(b, t);
          }
        else if (C(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? n = null : (n = J && e[J] || e["@@iterator"], n = typeof n == "function" ? n : null), typeof n == "function" && n !== e.entries && (n = n.call(e), n !== e))
          for (; !(e = n.next()).done; )
            C(e.value) && H(e.value, t);
      }
    }
    function C(e) {
      return typeof e == "object" && e !== null && e.$$typeof === l;
    }
    function H(e, t) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, t = L(t), !xe[t])) {
        xe[t] = !0;
        var n = "";
        e && e._owner != null && e._owner !== Y() && (n = null, typeof e._owner.tag == "number" ? n = r(e._owner.type) : typeof e._owner.name == "string" && (n = e._owner.name), n = " It was passed a child from " + n + ".");
        var b = W.getCurrentStack;
        W.getCurrentStack = function() {
          var O = A(e.type);
          return b && (O += b() || ""), O;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          t,
          n
        ), W.getCurrentStack = b;
      }
    }
    function L(e) {
      var t = "", n = Y();
      return n && (n = r(n.type)) && (t = `

Check the render method of \`` + n + "`."), t || (e = r(e)) && (t = `

Check the top-level render call using <` + e + ">."), t;
    }
    var p = Me, l = Symbol.for("react.transitional.element"), h = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), c = Symbol.for("react.consumer"), y = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), he = Symbol.for("react.offscreen"), J = Symbol.iterator, Q = Symbol.for("react.client.reference"), W = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = Object.prototype.hasOwnProperty, S = Object.assign, ce = Symbol.for("react.client.reference"), K = Array.isArray, V = 0, q, re, $, D, te, ue, pe;
    d.__reactDisabledLog = !0;
    var ge, we, ve = !1, be = new (typeof WeakMap == "function" ? WeakMap : Map)(), je = Symbol.for("react.client.reference"), ye, Re = {}, _e = {}, xe = {};
    ie.Fragment = w, ie.jsx = function(e, t, n, b, O) {
      return I(e, t, n, !1, b, O);
    }, ie.jsxs = function(e, t, n, b, O) {
      return I(e, t, n, !0, b, O);
    };
  }()), ie;
}
var Ce;
function We() {
  return Ce || (Ce = 1, process.env.NODE_ENV === "production" ? fe.exports = Pe() : fe.exports = Ye()), fe.exports;
}
var qe = We();
function de(r, a, i, d, o, u) {
  return r ? [["c", ...a], i ? ["a", r, r, 0, 0, 1, ...d.map((m) => m * i)] : [], ["c", ...o]] : [["l", ...u]];
}
var P, se = new class {
  constructor() {
    me(this, "elements");
    me(this, "observer");
    this.elements = null, this.observer = null;
  }
  onElementResize(r) {
    var a;
    for (const i of r) {
      const d = i.target.getBoundingClientRect(), o = (a = this.elements) == null ? void 0 : a.get(i.target);
      if (!o) continue;
      const { previousW: u, previousH: m, draw: E, onResize: A } = o;
      u === d.width && m === d.height || (E == null || E({ width: d.width, height: d.height }), A == null || A(d, i.target), o.previousW = d.width, o.previousH = d.height);
    }
  }
  getDrawOptions(r) {
    var a, i;
    return ((i = (a = this.elements) == null ? void 0 : a.get(r)) == null ? void 0 : i.cornerOptions) ?? null;
  }
  setCornerOptions(r, a) {
    var d, o;
    const i = (d = this.elements) == null ? void 0 : d.get(r);
    i && (i.cornerOptions = a, (o = this.elements) == null || o.set(r, i));
  }
  addElement(r, a, i) {
    this.elements || (this.elements = /* @__PURE__ */ new Map()), this.observer || (this.observer = new ResizeObserver((u) => this.onElementResize(u))), this.unobserve(r);
    const { observe: d = !0, onResize: o } = a;
    return d && (this.observer.observe(r), this.elements.set(r, { draw: i, cornerOptions: a, onResize: o, previousW: null, previousH: null, element: r })), i;
  }
  draw(r, a) {
    var i, d, o, u;
    r ? (a && this.setCornerOptions(r, a), (o = (d = (i = this.elements) == null ? void 0 : i.get(r)) == null ? void 0 : d.draw) == null || o.call(d)) : (u = this.elements) == null || u.forEach((m) => {
      var E;
      return (E = m.draw) == null ? void 0 : E.call(m);
    });
  }
  unobserve(r) {
    var i;
    const a = (d) => {
      var o, u;
      (o = this.observer) == null || o.unobserve(r), (u = this.elements) == null || u.delete(r);
    };
    r ? a() : (i = this.elements) == null || i.keys().forEach((d) => a());
  }
}();
function Ee({ width: r = 0, height: a = 0, smoothing: i = 1, radius: d = 0, offset: o = 0, type: u = P.Squircle, precision: m = 3, isArray: E = !1 }) {
  if (!r || !a) return E ? [] : "";
  const A = u === P.Squircle, Y = u === P.RoundInverse ? 0 : 1, N = Array.isArray(o) ? o : [o, o, o, o], [F, X, Z, I] = N, j = r - I - X, C = a - F - Z, H = 0.5 * Math.min(j, C), L = (Array.isArray(d) ? d : [d, d, d, d]).map((l, h) => Math.max(0, Math.min(l - N[h], H)));
  let p;
  switch (u) {
    case P.Round:
    case P.RoundInverse:
      p = p = function({ width: l, height: h, radii: w, offsets: _, sweepFlag: f }) {
        const [c, , , y] = _, [T, v, g, R] = w;
        return [["M", y + R, c], ["L", l - v + y, c], ["A", v, v, 0, 0, f, l + y, c + v], ["L", l + y, h - g + c], ["A", g, g, 0, 0, f, l - g + y, h + c], ["L", y + R, h + c], ["A", R, R, 0, 0, f, y, h - R + c], ["L", y, c + T], ["A", T, T, 0, 0, f, y + T, c], ["Z"]];
      }({ width: j, height: C, radii: L, offsets: N, sweepFlag: Y });
      break;
    case P.Flat:
      p = p = function({ width: l, height: h, radii: w, offsets: _ }) {
        const [f, , , c] = _, [y, T, v, g] = w;
        return [["M", c + y, f], ["L", l - T + c, f], ["L", l + c, f + T], ["L", l + c, h - v + f], ["L", l - v + c, h + f], ["L", c + g, h + f], ["L", c, h - g + f], ["L", c, f + y], ["Z"]];
      }({ width: j, height: C, radii: L, offsets: N });
      break;
    case P.Inset:
      p = p = function({ width: l, height: h, radii: w, offsets: _ }) {
        const [f, , , c] = _, [y, T, v, g] = w;
        return [["M", c + g, f], ["L", l - T + c, f], ["L", l - T + c, f + T], ["L", l + c, f + T], ["L", l + c, h - v + f], ["L", l - v + c, h - v + f], ["L", l - v + c, h + f], ["L", c + g, h + f], ["L", c + g, h - g + f], ["L", c, h - g + f], ["L", c, f + y], ["L", c + y, f + y], ["L", c + y, f], ["Z"]];
      }({ width: j, height: C, radii: L, offsets: N });
      break;
    case P.Squircle:
    case P.FigmaSquircle:
    default:
      p = function({ width: l, height: h, smoothing: w, radii: _, offsets: f, preserveSmoothing: c }) {
        const [y, , , T] = f, [v, g, R, k] = _.map((he) => function(J, Q, W, B) {
          let S = (1 + Q) * J;
          W || (Q = Math.min(Q, B / J - 1), S = Math.min(S, B));
          const ce = 0.5 * Math.PI * (1 - Q), K = Math.sin(ce / 2) * J * 2 ** 0.5, V = 0.25 * Math.PI * Q, q = J * Math.tan(0.25 * (0.5 * Math.PI - ce)) * Math.cos(V), re = q * Math.tan(V);
          let $ = (S - K - q - re) / 3, D = 2 * $;
          if (W && S > B) {
            const te = B - re - K - q, ue = te - te / 6;
            $ = Math.min($, ue), D = te - $, S = Math.min(S, B);
          }
          return { a: D, b: $, c: q, d: re, p: S, arcLength: K, radius: J, ab: D + $, bc: $ + q, abc: D + $ + q };
        }(he, w, c, 0.5 * Math.min(l, h)));
        return [["M", l - g.p + T, y], ...de(g.radius, [g.a, 0, g.ab, 0, g.abc, g.d], g.arcLength, [1, 1], [g.d, g.c, g.d, g.bc, g.d, g.abc], [g.p, 0]), ["L", l + T, h - R.p + y], ...de(R.radius, [0, R.a, 0, R.ab, -R.d, R.abc], R.arcLength, [-1, 1], [-R.c, R.d, -R.bc, R.d, -R.abc, R.d], [0, R.p]), ["L", k.p + T, h + y], ...de(k.radius, [-k.a, 0, -k.ab, 0, -k.abc, -k.d], k.arcLength, [-1, -1], [-k.d, -k.c, -k.d, -k.bc, -k.d, -k.abc], [-k.p, 0]), ["L", T, v.p + y], ...de(v.radius, [0, -v.a, 0, -v.ab, v.d, -v.abc], v.arcLength, [1, -1], [v.c, -v.d, v.bc, -v.d, v.abc, -v.d], [0, -v.p]), ["Z"]];
      }({ width: j, height: C, smoothing: i, radii: L, offsets: N, preserveSmoothing: A });
  }
  return p = p.filter((l) => l[0]).map(([l, ...h]) => {
    const w = h.map((f) => Number.isFinite(f) ? Number(f.toFixed(m)) : f), _ = [l, E ? w : w.join(" ")];
    return E ? _ : _.join("");
  }), E ? p : p.join("");
}
function ze(r, a) {
  se.setCornerOptions(r, a);
  const i = (d) => {
    const o = se.getDrawOptions(r) ?? {};
    if (!o.width || !o.height) {
      const m = r.getBoundingClientRect();
      o.width = m.width, o.height = m.height;
    }
    const u = { ...o, ...d };
    u.isRounded && (u.width = u.width ? Math.round(u.width) : void 0, u.height = u.height ? Math.round(u.height) : void 0), r.style.clipPath = o.clip ? `path('${Ee(u)}')` : "", (o.background || o.border) && (r.style.backgroundImage = function(m) {
      const { border: E = [], offset: A = 0, strokeDrawType: Y = 0, background: N, clip: F, clipID: X, width: Z, height: I } = m, j = [], C = Array.isArray(E == null ? void 0 : E[0]) ? E : [E], H = Array.isArray(A) ? A : [A, A, A, A], L = F ? null : Ee(m);
      if (C != null && C.length) {
        let p = 0;
        const l = [];
        for (let h = 0; h < C.length; h++) {
          const [w, _] = C[h], f = Y === 0 ? 2 * (p + w) : w;
          w && (l.push(`<path d="${Ee({ ...m, offset: Y === 0 ? A : H.map((c) => c + p + 0.5 * w) })}" fill="none" stroke="${_}" stroke-width="${f}" />`), p += w);
        }
        N && (F ? j.push(`<rect width="${Z}" height="${I}" fill="${N}" />`) : j.push(`<path d="${L}" fill="${N}" />`)), j.push(...l.reverse());
      }
      return j.length ? ((p, l, h = "c") => {
        return `url('data:image/svg+xml,${((_) => encodeURIComponent(_).replace(/%20/g, " ").replace(/%3D/g, "=").replace(/%3A/g, ":").replace(/%2F/g, "/").replace(/%2C/g, ",").replace(/%3B/g, ";"))((w = (l ? [`<defs><clipPath id="${h}"><path d="${l}" /></clipPath></defs>`, `<g clip-path="url(#${h})">${p.join("")}</g>`] : p).join(""), `<svg xmlns="http://www.w3.org/2000/svg">${w}</svg>`))}')`;
        var w;
      })(j, L, X) : "none";
    }(u));
  };
  return i(), se.addElement(r, a, i);
}
function Ue(r, a) {
  se.draw(r, a);
}
function Fe(r) {
  se.unobserve(r);
}
(function(r) {
  r.Squircle = "squircle", r.FigmaSquircle = "figma-squircle", r.Flat = "flat", r.Inset = "inset", r.Round = "round", r.RoundInverse = "round-inverse";
})(P || (P = {}));
const Je = Ne(
  ({
    as: r = "div",
    children: a,
    width: i,
    height: d,
    smoothing: o,
    radius: u,
    offset: m,
    type: E,
    precision: A,
    isRounded: Y,
    background: N,
    border: F,
    strokeDrawType: X,
    clipID: Z,
    clip: I,
    observe: j,
    onResize: C,
    ...H
  }, L) => {
    const [p, l] = Le(void 0), h = {
      width: i,
      height: d,
      smoothing: o,
      radius: u,
      offset: m,
      type: E,
      precision: A,
      isRounded: Y,
      background: N,
      border: F,
      strokeDrawType: X,
      clipID: Z,
      clip: I,
      observe: j,
      onResize: C
    }, w = $e((_) => {
      l(_), _ && ze(_, h), typeof L == "function" ? L(_) : L && (L.current = _);
    }, []);
    return Te(() => {
      p && Ue(p, h);
    }, [...Object.values(h)]), Te(() => () => {
      p && Fe(p);
    }, []), /* @__PURE__ */ qe.jsx(r, { ...H, ref: w, children: a });
  }
);
export {
  Je as Monoco,
  Je as default
};
