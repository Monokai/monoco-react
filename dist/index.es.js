import ne, { forwardRef as ae, useState as oe, useCallback as se, useEffect as Z } from "react";
var Y = { exports: {} }, $ = {};
var Q;
function ie() {
  if (Q) return $;
  Q = 1;
  var r = Symbol.for("react.transitional.element"), o = Symbol.for("react.fragment");
  function t(i, n, s) {
    var c = null;
    if (s !== void 0 && (c = "" + s), n.key !== void 0 && (c = "" + n.key), "key" in n) {
      s = {};
      for (var l in n)
        l !== "key" && (s[l] = n[l]);
    } else s = n;
    return n = s.ref, {
      $$typeof: r,
      type: i,
      key: c,
      ref: n !== void 0 ? n : null,
      props: s
    };
  }
  return $.Fragment = o, $.jsx = t, $.jsxs = t, $;
}
var C = {};
var K;
function ce() {
  return K || (K = 1, process.env.NODE_ENV !== "production" && function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === F ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case R:
          return "Fragment";
        case p:
          return "Profiler";
        case w:
          return "StrictMode";
        case _:
          return "Suspense";
        case x:
          return "SuspenseList";
        case M:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case E:
            return "Portal";
          case d:
            return e.displayName || "Context";
          case g:
            return (e._context.displayName || "Context") + ".Consumer";
          case y:
            var a = e.render;
            return e = e.displayName, e || (e = a.displayName || a.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case T:
            return a = e.displayName || null, a !== null ? a : r(e.type) || "Memo";
          case S:
            a = e._payload, e = e._init;
            try {
              return r(e(a));
            } catch {
            }
        }
      return null;
    }
    function o(e) {
      return "" + e;
    }
    function t(e) {
      try {
        o(e);
        var a = !1;
      } catch {
        a = !0;
      }
      if (a) {
        a = console;
        var v = a.error, k = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return v.call(
          a,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          k
        ), o(e);
      }
    }
    function i(e) {
      if (e === R) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === S)
        return "<...>";
      try {
        var a = r(e);
        return a ? "<" + a + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var e = D.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function c(e) {
      if (J.call(e, "key")) {
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function l(e, a) {
      function v() {
        V || (V = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          a
        ));
      }
      v.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: v,
        configurable: !0
      });
    }
    function b() {
      var e = r(this.type);
      return G[e] || (G[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function h(e, a, v, k, I, z) {
      var O = v.ref;
      return e = {
        $$typeof: A,
        type: e,
        key: a,
        props: v,
        _owner: k
      }, (O !== void 0 ? O : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: b
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
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: I
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: z
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function u(e, a, v, k, I, z) {
      var O = a.children;
      if (O !== void 0)
        if (k)
          if (re(O)) {
            for (k = 0; k < O.length; k++)
              f(O[k]);
            Object.freeze && Object.freeze(O);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(O);
      if (J.call(a, "key")) {
        O = r(e);
        var j = Object.keys(a).filter(function(te) {
          return te !== "key";
        });
        k = 0 < j.length ? "{key: someKey, " + j.join(": ..., ") + ": ...}" : "{key: someKey}", X[O + k] || (j = 0 < j.length ? "{" + j.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          k,
          O,
          j,
          O
        ), X[O + k] = !0);
      }
      if (O = null, v !== void 0 && (t(v), O = "" + v), c(a) && (t(a.key), O = "" + a.key), "key" in a) {
        v = {};
        for (var U in a)
          U !== "key" && (v[U] = a[U]);
      } else v = a;
      return O && l(
        v,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), h(
        e,
        O,
        v,
        n(),
        I,
        z
      );
    }
    function f(e) {
      m(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === S && (e._payload.status === "fulfilled" ? m(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function m(e) {
      return typeof e == "object" && e !== null && e.$$typeof === A;
    }
    var P = ne, A = Symbol.for("react.transitional.element"), E = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), g = Symbol.for("react.consumer"), d = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), M = Symbol.for("react.activity"), F = Symbol.for("react.client.reference"), D = P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = Object.prototype.hasOwnProperty, re = Array.isArray, W = console.createTask ? console.createTask : function() {
      return null;
    };
    P = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var V, G = {}, B = P.react_stack_bottom_frame.bind(
      P,
      s
    )(), H = W(i(s)), X = {};
    C.Fragment = R, C.jsx = function(e, a, v) {
      var k = 1e4 > D.recentlyCreatedOwnerStacks++;
      return u(
        e,
        a,
        v,
        !1,
        k ? Error("react-stack-top-frame") : B,
        k ? W(i(e)) : H
      );
    }, C.jsxs = function(e, a, v) {
      var k = 1e4 > D.recentlyCreatedOwnerStacks++;
      return u(
        e,
        a,
        v,
        !0,
        k ? Error("react-stack-top-frame") : B,
        k ? W(i(e)) : H
      );
    };
  }()), C;
}
var ee;
function le() {
  return ee || (ee = 1, process.env.NODE_ENV === "production" ? Y.exports = ie() : Y.exports = ce()), Y.exports;
}
var ue = le(), N = new class {
  elements;
  observer;
  constructor() {
    this.elements = null, this.observer = null;
  }
  onElementResize(r) {
    for (const o of r) {
      const t = o.target.getBoundingClientRect(), i = this.elements?.get(o.target);
      if (!i) continue;
      const { previousW: n, previousH: s, draw: c, onResize: l } = i;
      n === t.width && s === t.height || (c?.({ width: t.width, height: t.height }), l?.(t, o.target), i.previousW = t.width, i.previousH = t.height);
    }
  }
  getDrawOptions(r) {
    return this.elements?.get(r)?.cornerOptions ?? null;
  }
  setCornerOptions(r, o) {
    const t = this.elements?.get(r);
    t && (t.cornerOptions = o, this.elements?.set(r, t));
  }
  addElement(r, o, t) {
    this.elements || (this.elements = /* @__PURE__ */ new Map()), this.observer || (this.observer = new ResizeObserver((s) => this.onElementResize(s))), this.unobserve(r);
    const { observe: i = !0, onResize: n } = o;
    return i && (this.observer.observe(r), this.elements.set(r, { draw: t, cornerOptions: o, onResize: n, previousW: null, previousH: null, element: r })), t;
  }
  draw(r, o) {
    r ? (o && this.setCornerOptions(r, o), this.elements?.get(r)?.draw?.()) : this.elements?.forEach((t) => t.draw?.());
  }
  unobserve(r) {
    const o = (t) => {
      this.observer?.unobserve(t), this.elements?.delete(t);
    };
    r ? o(r) : this.elements?.keys().forEach((t) => o(t));
  }
}();
function L(r, o, t, i, n, s, c, l) {
  return t ? [r ? ["c", ...i] : [], n ? ["a", t, t, 0, 0, o, ...s.map((b) => b * n)] : [], r ? ["c", ...c] : []] : [["l", ...l]];
}
function fe({ width: r, height: o, radii: t, offsets: i, smoothing: n = 1, preserveSmoothing: s = !0, sweepFlag: c = 1 }) {
  const [l, , , b] = i, [h, u, f, m] = t.map((P) => function(A, E, R, w) {
    let p = (1 + E) * A;
    R || (E = Math.min(E, w / A - 1), p = Math.min(p, w));
    const g = 0.5 * Math.PI * (1 - E), d = Math.sin(g / 2) * A * 2 ** 0.5, y = 0.25 * Math.PI * E, _ = A * Math.tan(0.25 * (0.5 * Math.PI - g)) * Math.cos(y), x = _ * Math.tan(y);
    let T = (p - d - _ - x) / 3, S = 2 * T;
    if (R && p > w) {
      const M = w - x - d - _, F = M - M / 6;
      T = Math.min(T, F), S = M - T, p = Math.min(p, w);
    }
    return { a: S, b: T, c: _, d: x, p, arcLength: d, radius: A, ab: S + T, bc: T + _, abc: S + T + _ };
  }(P, n, s, Math.max(P, 0.5 * Math.min(r, o))));
  return [["M", r - u.p + b, l], ...L(n, c, u.radius, [u.a, 0, u.ab, 0, u.abc, u.d], u.arcLength, [1, 1], [u.d, u.c, u.d, u.bc, u.d, u.abc], [u.p, 0]), ["L", r + b, o - f.p + l], ...L(n, c, f.radius, [0, f.a, 0, f.ab, -f.d, f.abc], f.arcLength, [-1, 1], [-f.c, f.d, -f.bc, f.d, -f.abc, f.d], [0, f.p]), ["L", m.p + b, o + l], ...L(n, c, m.radius, [-m.a, 0, -m.ab, 0, -m.abc, -m.d], m.arcLength, [-1, -1], [-m.d, -m.c, -m.d, -m.bc, -m.d, -m.abc], [-m.p, 0]), ["L", b, h.p + l], ...L(n, c, h.radius, [0, -h.a, 0, -h.ab, h.d, -h.abc], h.arcLength, [1, -1], [h.c, -h.d, h.bc, -h.d, h.abc, -h.d], [0, -h.p]), ["Z"]];
}
function q({ width: r = 0, height: o = 0, borderRadius: t = 0, offset: i = 0, smoothing: n = 1, cornerType: s = fe, precision: c = 3, isArray: l = !1 }) {
  if (!r || !o) return l ? [] : "";
  const b = Array.isArray(i) ? i : [i, i, i, i], [h, u, f, m] = b, P = r - m - u, A = o - h - f;
  let E, R;
  if (Array.isArray(t)) {
    const w = t.map((g, d) => g + t[(d + 1) % 4]), p = Math.min(...w.map((g, d) => (d % 2 == 0 ? P : A) / g));
    E = p < 1 ? t.map((g) => g * p) : t;
  } else E = [t, t, t, t].map((w, p) => Math.max(0, Math.min(w - b[p], 0.5 * Math.min(P, A))));
  return R = s ? s({ width: P, height: A, radii: E, offsets: b, smoothing: n }) : [[]], R = R.filter((w) => w[0]).map(([w, ...p]) => {
    const g = p.map((y) => Number.isFinite(y) ? Number(y.toFixed(c)) : y), d = [w, l ? g : g.join(" ")];
    return l ? d : d.join("");
  }), l ? R : R.join("");
}
function de(r, o) {
  N.setCornerOptions(r, o);
  const t = (i) => {
    const n = N.getDrawOptions(r) ?? {};
    if (!n.width || !n.height) {
      const c = r.getBoundingClientRect();
      n.width = c.width, n.height = c.height;
    }
    const s = { ...n, ...i };
    s.isRounded && (s.width = s.width ? Math.round(s.width) : void 0, s.height = s.height ? Math.round(s.height) : void 0), r.style.clipPath = n.clip ? `path('${q(s)}')` : "", (n.background || n.border) && (r.style.backgroundImage = function(c) {
      const { border: l = [], offset: b = 0, strokeDrawType: h = 0, background: u, clip: f, clipID: m, width: P, height: A } = c, E = [], R = Array.isArray(l?.[0]) ? l : [l], w = Array.isArray(b) ? b : [b, b, b, b], p = f ? null : q(c);
      if (R?.length) {
        let g = 0;
        const d = [];
        for (let y = 0; y < R.length; y++) {
          const [_, x] = R[y], T = h === 0 ? 2 * (g + _) : _;
          _ && (d.push(`<path d="${q({ ...c, offset: h === 0 ? b : w.map((S) => S + g + 0.5 * _) })}" fill="none" stroke="${x}" stroke-width="${T}" />`), g += _);
        }
        u && (f ? E.push(`<rect width="${P}" height="${A}" fill="${u}" />`) : E.push(`<path d="${p}" fill="${u}" />`)), E.push(...d.reverse());
      }
      return E.length ? ((g, d, y = "c") => {
        return `url('data:image/svg+xml,${((x) => encodeURIComponent(x).replace(/%20/g, " ").replace(/%3D/g, "=").replace(/%3A/g, ":").replace(/%2F/g, "/").replace(/%2C/g, ",").replace(/%3B/g, ";"))((_ = (d ? [`<defs><clipPath id="${y}"><path d="${d}" /></clipPath></defs>`, `<g clip-path="url(#${y})">${g.join("")}</g>`] : g).join(""), `<svg xmlns="http://www.w3.org/2000/svg">${_}</svg>`))}')`;
        var _;
      })(E, p, m) : "none";
    }(s));
  };
  return t(), N.addElement(r, o, t);
}
function he(r, o) {
  N.draw(r, o);
}
function me(r) {
  N.unobserve(r);
}
const be = ae(
  ({
    as: r,
    children: o,
    width: t,
    height: i,
    smoothing: n,
    borderRadius: s,
    offset: c,
    cornerType: l,
    precision: b,
    isRounded: h,
    background: u,
    border: f,
    strokeDrawType: m,
    clipID: P,
    clip: A,
    observe: E,
    onResize: R,
    ...w
  }, p) => {
    const g = r || "div", [d, y] = oe(null), _ = {
      width: t,
      height: i,
      smoothing: n,
      borderRadius: s,
      offset: c,
      cornerType: l,
      precision: b,
      isRounded: h,
      background: u,
      border: f,
      strokeDrawType: m,
      clipID: P,
      clip: A,
      observe: E,
      onResize: R
    }, x = se((T) => {
      T !== d && (y(T), T && de(T, _), typeof p == "function" ? p(T) : p && (p.current = T));
    }, []);
    return Z(() => {
      d && he(d, _);
    }, [
      d,
      t,
      i,
      n,
      s,
      c,
      l,
      b,
      h,
      u,
      f,
      m,
      P,
      A,
      E,
      R
    ]), Z(() => () => {
      d && me(d);
    }, []), /* @__PURE__ */ ue.jsx(g, { ...w, ref: x, children: o });
  }
);
export {
  be as Monoco,
  be as default
};
