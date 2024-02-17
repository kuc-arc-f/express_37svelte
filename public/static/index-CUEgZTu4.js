var U = Object.defineProperty;
var q = (t, e, n) => e in t ? U(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var y = (t, e, n) => (q(t, typeof e != "symbol" ? e + "" : e, n), n);
function g() {
}
function Y(t, e) {
  for (const n in e)
    t[n] = e[n];
  return (
    /** @type {T & S} */
    t
  );
}
function O(t) {
  return t();
}
function j() {
  return /* @__PURE__ */ Object.create(null);
}
function h(t) {
  t.forEach(O);
}
function B(t) {
  return typeof t == "function";
}
function Z(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function F(t) {
  return Object.keys(t).length === 0;
}
function tt(t, ...e) {
  if (t == null) {
    for (const r of e)
      r(void 0);
    return g;
  }
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function et(t, e) {
  t.appendChild(e);
}
function nt(t, e, n) {
  t.insertBefore(e, n || null);
}
function M(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function rt(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function st(t) {
  return document.createElement(t);
}
function D(t) {
  return document.createTextNode(t);
}
function ot() {
  return D(" ");
}
function ut() {
  return D("");
}
function ct(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function it(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function R(t) {
  return Array.from(t.childNodes);
}
function ft(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function T(t, e, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: n, cancelable: r });
}
function at(t, e) {
  return new t(e);
}
let _;
function d(t) {
  _ = t;
}
function v() {
  if (!_)
    throw new Error("Function called outside component initialization");
  return _;
}
function lt(t) {
  v().$$.after_update.push(t);
}
function dt(t) {
  v().$$.on_destroy.push(t);
}
function _t() {
  const t = v();
  return (e, n, { cancelable: r = !1 } = {}) => {
    const o = t.$$.callbacks[e];
    if (o) {
      const c = T(
        /** @type {string} */
        e,
        n,
        { cancelable: r }
      );
      return o.slice().forEach((p) => {
        p.call(t, c);
      }), !c.defaultPrevented;
    }
    return !0;
  };
}
function ht(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((r) => r.call(this, e));
}
const a = [], A = [];
let l = [];
const N = [], L = /* @__PURE__ */ Promise.resolve();
let w = !1;
function P() {
  w || (w = !0, L.then(z));
}
function pt() {
  return P(), L;
}
function x(t) {
  l.push(t);
}
const b = /* @__PURE__ */ new Set();
let f = 0;
function z() {
  if (f !== 0)
    return;
  const t = _;
  do {
    try {
      for (; f < a.length; ) {
        const e = a[f];
        f++, d(e), V(e.$$);
      }
    } catch (e) {
      throw a.length = 0, f = 0, e;
    }
    for (d(null), a.length = 0, f = 0; A.length; )
      A.pop()();
    for (let e = 0; e < l.length; e += 1) {
      const n = l[e];
      b.has(n) || (b.add(n), n());
    }
    l.length = 0;
  } while (a.length);
  for (; N.length; )
    N.pop()();
  w = !1, b.clear(), d(t);
}
function V(t) {
  if (t.fragment !== null) {
    t.update(), h(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(x);
  }
}
function G(t) {
  const e = [], n = [];
  l.forEach((r) => t.indexOf(r) === -1 ? e.push(r) : n.push(r)), n.forEach((r) => r()), l = e;
}
const m = /* @__PURE__ */ new Set();
let i;
function $t() {
  i = {
    r: 0,
    c: [],
    p: i
    // parent group
  };
}
function mt() {
  i.r || h(i.c), i = i.p;
}
function H(t, e) {
  t && t.i && (m.delete(t), t.i(e));
}
function gt(t, e, n, r) {
  if (t && t.o) {
    if (m.has(t))
      return;
    m.add(t), i.c.push(() => {
      m.delete(t), r && (n && t.d(1), r());
    }), t.o(e);
  } else
    r && r();
}
function yt(t) {
  t && t.c();
}
function J(t, e, n) {
  const { fragment: r, after_update: o } = t.$$;
  r && r.m(e, n), x(() => {
    const c = t.$$.on_mount.map(O).filter(B);
    t.$$.on_destroy ? t.$$.on_destroy.push(...c) : h(c), t.$$.on_mount = [];
  }), o.forEach(x);
}
function K(t, e) {
  const n = t.$$;
  n.fragment !== null && (G(n.after_update), h(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Q(t, e) {
  t.$$.dirty[0] === -1 && (a.push(t), P(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function bt(t, e, n, r, o, c, p = null, I = [-1]) {
  const $ = _;
  d(t);
  const s = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: c,
    update: g,
    not_equal: o,
    bound: j(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || ($ ? $.$$.context : [])),
    // everything else
    callbacks: j(),
    dirty: I,
    skip_bound: !1,
    root: e.target || $.$$.root
  };
  p && p(s.root);
  let E = !1;
  if (s.ctx = n ? n(t, e.props || {}, (u, k, ...C) => {
    const S = C.length ? C[0] : k;
    return s.ctx && o(s.ctx[u], s.ctx[u] = S) && (!s.skip_bound && s.bound[u] && s.bound[u](S), E && Q(t, u)), k;
  }) : [], s.update(), E = !0, h(s.before_update), s.fragment = r ? r(s.ctx) : !1, e.target) {
    if (e.hydrate) {
      const u = R(e.target);
      s.fragment && s.fragment.l(u), u.forEach(M);
    } else
      s.fragment && s.fragment.c();
    e.intro && H(t.$$.fragment), J(t, e.target, e.anchor), z();
  }
  d($);
}
class wt {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    y(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    y(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    K(this, 1), this.$destroy = g;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!B(n))
      return g;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const o = r.indexOf(n);
      o !== -1 && r.splice(o, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !F(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const W = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(W);
export {
  et as A,
  ct as B,
  rt as C,
  D,
  ft as E,
  wt as S,
  Z as a,
  bt as b,
  nt as c,
  mt as d,
  ut as e,
  H as f,
  $t as g,
  M as h,
  B as i,
  _t as j,
  lt as k,
  pt as l,
  ht as m,
  g as n,
  dt as o,
  at as p,
  yt as q,
  h as r,
  tt as s,
  gt as t,
  J as u,
  K as v,
  Y as w,
  st as x,
  ot as y,
  it as z
};
