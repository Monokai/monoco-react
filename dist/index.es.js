import oe, { forwardRef as se, useState as ie, useCallback as le, useEffect as K } from "react";
var W = { exports: {} }, Y = {};
var ee;
function ue() {
  if (ee) return Y;
  ee = 1;
  var r = Symbol.for("react.transitional.element"), s = Symbol.for("react.fragment");
  function t(o, a, n) {
    var m = null;
    if (n !== void 0 && (m = "" + n), a.key !== void 0 && (m = "" + a.key), "key" in a) {
      n = {};
      for (var v in a)
        v !== "key" && (n[v] = a[v]);
    } else n = a;
    return a = n.ref, {
      $$typeof: r,
      type: o,
      key: m,
      ref: a !== void 0 ? a : null,
      props: n
    };
  }
  return Y.Fragment = s, Y.jsx = t, Y.jsxs = t, Y;
}
var D = {};
var re;
function ce() {
  return re || (re = 1, process.env.NODE_ENV !== "production" && function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === M ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case g:
          return "Fragment";
        case E:
          return "Profiler";
        case d:
          return "StrictMode";
        case T:
          return "Suspense";
        case $:
          return "SuspenseList";
        case S:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case y:
            return "Portal";
          case u:
            return e.displayName || "Context";
          case w:
            return (e._context.displayName || "Context") + ".Consumer";
          case i:
            var l = e.render;
            return e = e.displayName, e || (e = l.displayName || l.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case p:
            return l = e.displayName || null, l !== null ? l : r(e.type) || "Memo";
          case x:
            l = e._payload, e = e._init;
            try {
              return r(e(l));
            } catch {
            }
        }
      return null;
    }
    function s(e) {
      return "" + e;
    }
    function t(e) {
      try {
        s(e);
        var l = !1;
      } catch {
        l = !0;
      }
      if (l) {
        l = console;
        var k = l.error, P = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return k.call(
          l,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          P
        ), s(e);
      }
    }
    function o(e) {
      if (e === g) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === x)
        return "<...>";
      try {
        var l = r(e);
        return l ? "<" + l + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var e = j.A;
      return e === null ? null : e.getOwner();
    }
    function n() {
      return Error("react-stack-top-frame");
    }
    function m(e) {
      if (C.call(e, "key")) {
        var l = Object.getOwnPropertyDescriptor(e, "key").get;
        if (l && l.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function v(e, l) {
      function k() {
        V || (V = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          l
        ));
      }
      k.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: k,
        configurable: !0
      });
    }
    function f() {
      var e = r(this.type);
      return X[e] || (X[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function c(e, l, k, P, L, G) {
      var O = k.ref;
      return e = {
        $$typeof: b,
        type: e,
        key: l,
        props: k,
        _owner: P
      }, (O !== void 0 ? O : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: f
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
        value: L
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: G
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function h(e, l, k, P, L, G) {
      var O = l.children;
      if (O !== void 0)
        if (P)
          if (N(O)) {
            for (P = 0; P < O.length; P++)
              _(O[P]);
            Object.freeze && Object.freeze(O);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else _(O);
      if (C.call(l, "key")) {
        O = r(e);
        var I = Object.keys(l).filter(function(ae) {
          return ae !== "key";
        });
        P = 0 < I.length ? "{key: someKey, " + I.join(": ..., ") + ": ...}" : "{key: someKey}", Z[O + P] || (I = 0 < I.length ? "{" + I.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          P,
          O,
          I,
          O
        ), Z[O + P] = !0);
      }
      if (O = null, k !== void 0 && (t(k), O = "" + k), m(l) && (t(l.key), O = "" + l.key), "key" in l) {
        k = {};
        for (var H in l)
          H !== "key" && (k[H] = l[H]);
      } else k = l;
      return O && v(
        k,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), c(
        e,
        O,
        k,
        a(),
        L,
        G
      );
    }
    function _(e) {
      R(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === x && (e._payload.status === "fulfilled" ? R(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function R(e) {
      return typeof e == "object" && e !== null && e.$$typeof === b;
    }
    var A = oe, b = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), w = Symbol.for("react.consumer"), u = Symbol.for("react.context"), i = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), $ = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), S = Symbol.for("react.activity"), M = Symbol.for("react.client.reference"), j = A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, C = Object.prototype.hasOwnProperty, N = Array.isArray, U = console.createTask ? console.createTask : function() {
      return null;
    };
    A = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var V, X = {}, B = A.react_stack_bottom_frame.bind(
      A,
      n
    )(), Q = U(o(n)), Z = {};
    D.Fragment = g, D.jsx = function(e, l, k) {
      var P = 1e4 > j.recentlyCreatedOwnerStacks++;
      return h(
        e,
        l,
        k,
        !1,
        P ? Error("react-stack-top-frame") : B,
        P ? U(o(e)) : Q
      );
    }, D.jsxs = function(e, l, k) {
      var P = 1e4 > j.recentlyCreatedOwnerStacks++;
      return h(
        e,
        l,
        k,
        !0,
        P ? Error("react-stack-top-frame") : B,
        P ? U(o(e)) : Q
      );
    };
  }()), D;
}
var te;
function fe() {
  return te || (te = 1, process.env.NODE_ENV === "production" ? W.exports = ue() : W.exports = ce()), W.exports;
}
var he = fe(), F = new class {
  elements;
  observer;
  rafID = null;
  queue = [];
  resizePrecisionPower = 1;
  constructor() {
    this.elements = null, this.observer = null;
  }
  onElementResize(r) {
    this.queue.push(...r), this.rafID || (this.rafID = requestAnimationFrame(() => this.flushQueue()));
  }
  flushQueue() {
    const r = /* @__PURE__ */ new Map();
    for (const s of this.queue) r.set(s.target, s);
    this.queue = [], r.forEach((s, t) => {
      if (!t.isConnected) return void this.unobserve(t);
      const o = this.elements?.get(t);
      if (!o) return;
      let { width: a, height: n } = s.contentRect;
      o.cornerOptions.isRounded && (a = Math.round(a), n = Math.round(n));
      const { previousW: m, previousH: v, draw: f, onResize: c } = o;
      m === a && v === n || (f?.({ width: a, height: n }), c?.({ width: a, height: n }, s.target), o.previousW = a, o.previousH = n);
    }), this.rafID = null;
  }
  getDrawOptions = (r) => this.elements?.get(r)?.cornerOptions ?? null;
  setCornerOptions(r, s) {
    const t = this.elements?.get(r);
    t && (t.cornerOptions = s, this.elements?.set(r, t));
  }
  addElement(r, s, t) {
    this.elements || (this.elements = /* @__PURE__ */ new Map()), this.observer || (this.observer = new ResizeObserver((n) => this.onElementResize(n))), this.unobserve(r);
    const { observe: o = !0, onResize: a } = s;
    return o && (this.elements.set(r, { draw: t, cornerOptions: s, onResize: a, previousW: null, previousH: null, element: r }), this.observer.observe(r)), t;
  }
  draw(r, s) {
    const t = (o) => {
      if (!o.element.isConnected) return;
      let { previousW: a, previousH: n } = o;
      a !== null && n !== null || (a = o.element.offsetWidth, n = o.element.offsetHeight, o.previousW = a, o.previousH = n), o.draw?.({ width: a, height: n });
    };
    if (r) {
      s && this.setCornerOptions(r, s);
      const o = this.elements?.get(r);
      o && t(o);
    } else this.elements?.forEach(t);
  }
  unobserve(r) {
    const s = (t) => {
      this.observer?.unobserve(t), this.elements?.delete(t);
    };
    r ? s(r) : this.elements?.keys().forEach((t) => s(t));
  }
}();
function q(r, s, t, o, a, n, m, v) {
  if (t) {
    const f = [];
    return r && f.push(["c", ...o]), a && f.push(["a", t, t, 0, 0, s, ...n.map((c) => c * a)]), r && f.push(["c", ...m]), f;
  }
  return [["l", ...v]];
}
const de = ({ width: r, height: s, radii: t, offsets: o, smoothing: a = 1, preserveSmoothing: n = !0, sweepFlag: m = 1 }) => {
  const [v, , , f] = o, [c, h, _, R] = t.map((A) => function(b, y, g, d) {
    let E = (1 + y) * b;
    g || (y = Math.min(y, d / b - 1), E = Math.min(E, d));
    const w = 0.5 * Math.PI * (1 - y), u = Math.sin(w / 2) * b * 2 ** 0.5, i = 0.25 * Math.PI * y, T = b * Math.tan(0.25 * (0.5 * Math.PI - w)) * Math.cos(i), $ = T * Math.tan(i);
    let p = (E - u - T - $) / 3, x = 2 * p;
    if (g && E > d) {
      const S = d - $ - u - T, M = S - S / 6;
      p = Math.min(p, M), x = S - p, E = Math.min(E, d);
    }
    return { a: x, b: p, c: T, d: $, p: E, arcLength: u, radius: b, ab: x + p, bc: p + T, abc: x + p + T };
  }(A, a, n, Math.max(A, 0.5 * Math.min(r, s))));
  return [["M", r - h.p + f, v], ...q(a, m, h.radius, [h.a, 0, h.ab, 0, h.abc, h.d], h.arcLength, [1, 1], [h.d, h.c, h.d, h.bc, h.d, h.abc], [h.p, 0]), ["L", r + f, s - _.p + v], ...q(a, m, _.radius, [0, _.a, 0, _.ab, -_.d, _.abc], _.arcLength, [-1, 1], [-_.c, _.d, -_.bc, _.d, -_.abc, _.d], [0, _.p]), ["L", R.p + f, s + v], ...q(a, m, R.radius, [-R.a, 0, -R.ab, 0, -R.abc, -R.d], R.arcLength, [-1, -1], [-R.d, -R.c, -R.d, -R.bc, -R.d, -R.abc], [-R.p, 0]), ["L", f, c.p + v], ...q(a, m, c.radius, [0, -c.a, 0, -c.ab, c.d, -c.abc], c.arcLength, [1, -1], [c.c, -c.d, c.bc, -c.d, c.abc, -c.d], [0, -c.p]), ["Z"]];
}, J = (r) => {
  const s = 10 ** r;
  return (t) => Math.round(t * s) / s;
};
function pe({ id: r, angle: s, colors: t, precision: o }) {
  const a = J(o), n = s * (Math.PI / 180), m = Math.sin(n), v = -Math.cos(n), f = (m >= 0 ? 1 : 0) - 0.5, c = (v >= 0 ? 1 : 0) - 0.5, h = Math.abs(f * m + c * v);
  return `<linearGradient id="${r}" x1="${a(0.5 - h * m)}" y1="${a(0.5 - h * v)}"  x2="${a(0.5 + h * m)}" y2="${a(0.5 + h * v)}" gradientUnits="objectBoundingBox">${function(_, R) {
    const A = J(R), b = _.map((d) => {
      const E = d.trim().split(/\s+/), w = E[0];
      let u = null;
      if (E.length > 1) {
        const i = E[1];
        u = i.includes("%") ? parseFloat(i) / 100 : parseFloat(i);
      }
      return { color: w, val: u };
    }), y = b.length;
    b[0].val === null && (b[0].val = 0), b[y - 1].val === null && (b[y - 1].val = 1);
    let g = 0;
    for (; g < y - 1; ) {
      let d = g + 1;
      for (; d < y && b[d].val === null; ) d++;
      if (d > g + 1) {
        const E = b[g].val, w = d - g, u = (b[d].val - E) / w;
        for (let i = 1; i < w; i++) b[g + i].val = E + u * i;
      }
      g = d;
    }
    return b.map((d) => `<stop offset="${A(d.val)}" stop-color="${d.color}" />`).join("");
  }(t, o)}</linearGradient>`;
}
const me = /[\r\n"%#()<>?[\\\]^`{|}\s']/g, ne = { "\r": "", "\n": "" };
function z({ width: r = 0, height: s = 0, borderRadius: t = 0, offset: o = 0, smoothing: a = 1, cornerType: n = de, precision: m = 3, isArray: v = !1 }) {
  if (!r || !s) return v ? [] : "";
  const f = Array.isArray(o) ? o : [o, o, o, o], [c, h, _, R] = f, A = r - R - h, b = s - c - _;
  let y, g;
  if (Array.isArray(t)) {
    const w = t.map((i, T) => i + t[(T + 1) % 4]), u = Math.min(...w.map((i, T) => (T % 2 == 0 ? A : b) / i));
    y = u < 1 ? t.map((i) => i * u) : t;
  } else y = [t, t, t, t].map((w, u) => Math.max(0, Math.min(w - f[u], 0.5 * Math.min(A, b))));
  g = n ? n({ width: A, height: b, radii: y, offsets: f, smoothing: a }) : [[]];
  const d = J(m);
  if (v) return g.filter((w) => w[0]).map(([w, ...u]) => [w, ...u.map((i) => typeof i == "number" ? d(i) : i)]);
  let E = "";
  for (let w = 0; w < g.length; w++) {
    const u = g[w];
    if (u[0]) {
      E += u[0];
      for (let i = 1; i < u.length; i++) {
        const T = u[i];
        E += (typeof T == "number" ? d(T) : T) + " ";
      }
    }
  }
  return E.trim();
}
function ve(r, s) {
  F.setCornerOptions(r, s);
  const t = (o) => {
    const a = F.getDrawOptions(r) ?? {}, n = { ...a, ...o };
    n.isRounded && (n.width = n.width ? Math.round(n.width) : void 0, n.height = n.height ? Math.round(n.height) : void 0), n.width && n.height && (r.style.clipPath = a.clip ? `path('${z(n)}')` : "", (a.background || a.border) && (r.style.backgroundImage = function(m) {
      const { border: v = [], offset: f = 0, strokeDrawType: c = 0, background: h, clip: _, idPrefix: R = "m", width: A, height: b, precision: y = 3 } = m, g = [], d = Array.isArray(v?.[0]) ? v : [v], E = Array.isArray(f) ? f : [f, f, f, f], w = _ ? null : z(m);
      let u;
      if (d?.length) {
        let i = 0;
        const T = [];
        for (let $ = 0; $ < d.length; $++) if (typeof d[$][1] == "number") {
          const [p, x, S] = d[$];
          if (p) {
            const M = `${R}g${$}`;
            u || (u = []), u.push(pe({ id: M, angle: x, colors: S, precision: y }));
            const j = c === 0 ? 2 * (i + p) : p;
            T.push(`<path d="${z({ ...m, offset: c === 0 ? f : E.map((C) => C + i + 0.5 * p) })}" fill="none" stroke="url(#${M})" stroke-width="${j}" />`), i += p;
          }
        } else {
          const [p, x] = d[$];
          if (p) {
            const S = c === 0 ? 2 * (i + p) : p;
            T.push(`<path d="${z({ ...m, offset: c === 0 ? f : E.map((M) => M + i + 0.5 * p) })}" fill="none" stroke="${x}" stroke-width="${S}" />`), i += p;
          }
        }
        h && (_ ? g.push(`<rect width="${A}" height="${b}" fill="${h}" />`) : g.push(`<path d="${w}" fill="${h}" />`)), g.push(...T.reverse());
      }
      return g.length ? (({ paths: i, gradients: T, clipPath: $, idPrefix: p }) => {
        const x = `${p}c`, S = [], M = [];
        return T && T.forEach((C) => {
          S.push(C);
        }), $ && S.push(`<clipPath id="${x}"><path d="${$}" /></clipPath>`), S.length && M.push(`<defs>${S.join("")}</defs>`), $ ? M.push(`<g clip-path="url(#${x})">${i.join("")}</g>`) : M.push(...i), `url('data:image/svg+xml,${((C) => C.replace(me, (N) => ne[N] ?? (ne[N] = `%${N.charCodeAt(0).toString(16).toUpperCase()}`)))((j = M.join(""), `<svg xmlns="http://www.w3.org/2000/svg">${j}</svg>`))}')`;
        var j;
      })({ paths: g, clipPath: w, gradients: u, idPrefix: R }) : "none";
    }(n)));
  };
  return t(), F.addElement(r, s, t);
}
function be(r, s) {
  F.draw(r, s);
}
function ge(r) {
  F.unobserve(r);
}
const _e = se(
  ({
    as: r,
    children: s,
    width: t,
    height: o,
    smoothing: a,
    borderRadius: n,
    offset: m,
    cornerType: v,
    precision: f,
    isRounded: c,
    background: h,
    border: _,
    strokeDrawType: R,
    idPrefix: A,
    clip: b,
    observe: y,
    onResize: g,
    ...d
  }, E) => {
    const w = r || "div", [u, i] = ie(null), T = {
      width: t,
      height: o,
      smoothing: a,
      borderRadius: n,
      offset: m,
      cornerType: v,
      precision: f,
      isRounded: c,
      background: h,
      border: _,
      strokeDrawType: R,
      idPrefix: A,
      clip: b,
      observe: y,
      onResize: g
    }, $ = le((p) => {
      p !== u && (i(p), p && ve(p, T), typeof E == "function" ? E(p) : E && (E.current = p));
    }, []);
    return K(() => {
      u && be(u, T);
    }, [
      u,
      t,
      o,
      a,
      n,
      m,
      v,
      f,
      c,
      h,
      _,
      R,
      A,
      b,
      y,
      g
    ]), K(() => () => {
      u && ge(u);
    }, []), /* @__PURE__ */ he.jsx(w, { ...d, ref: $, children: s });
  }
);
export {
  _e as Monoco,
  _e as default
};
