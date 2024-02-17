var B = Object.defineProperty;
var I = (t, e, n) => e in t ? B(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var $ = (t, e, n) => (I(t, typeof e != "symbol" ? e + "" : e, n), n);
function g() {
}
function k(t) {
  return t();
}
function j() {
  return /* @__PURE__ */ Object.create(null);
}
function h(t) {
  t.forEach(k);
}
function A(t) {
  return typeof t == "function";
}
function W(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function P(t) {
  return Object.keys(t).length === 0;
}
function X(t, e) {
  t.appendChild(e);
}
function Y(t, e, n) {
  t.insertBefore(e, n || null);
}
function M(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Z(t) {
  return document.createElement(t);
}
function R(t) {
  return document.createTextNode(t);
}
function tt() {
  return R(" ");
}
function et(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function nt(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function T(t) {
  return Array.from(t.childNodes);
}
function rt(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
let x;
function c(t) {
  x = t;
}
const u = [], N = [];
let a = [];
const O = [], U = /* @__PURE__ */ Promise.resolve();
let m = !1;
function V() {
  m || (m = !0, U.then(C));
}
function y(t) {
  a.push(t);
}
const p = /* @__PURE__ */ new Set();
let o = 0;
function C() {
  if (o !== 0)
    return;
  const t = x;
  do {
    try {
      for (; o < u.length; ) {
        const e = u[o];
        o++, c(e), q(e.$$);
      }
    } catch (e) {
      throw u.length = 0, o = 0, e;
    }
    for (c(null), u.length = 0, o = 0; N.length; )
      N.pop()();
    for (let e = 0; e < a.length; e += 1) {
      const n = a[e];
      p.has(n) || (p.add(n), n());
    }
    a.length = 0;
  } while (u.length);
  for (; O.length; )
    O.pop()();
  m = !1, p.clear(), c(t);
}
function q(t) {
  if (t.fragment !== null) {
    t.update(), h(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(y);
  }
}
function z(t) {
  const e = [], n = [];
  a.forEach((r) => t.indexOf(r) === -1 ? e.push(r) : n.push(r)), n.forEach((r) => r()), a = e;
}
const _ = /* @__PURE__ */ new Set();
let D;
function F(t, e) {
  t && t.i && (_.delete(t), t.i(e));
}
function st(t, e, n, r) {
  if (t && t.o) {
    if (_.has(t))
      return;
    _.add(t), D.c.push(() => {
      _.delete(t), r && (n && t.d(1), r());
    }), t.o(e);
  } else
    r && r();
}
function ft(t) {
  t && t.c();
}
function G(t, e, n) {
  const { fragment: r, after_update: i } = t.$$;
  r && r.m(e, n), y(() => {
    const d = t.$$.on_mount.map(k).filter(A);
    t.$$.on_destroy ? t.$$.on_destroy.push(...d) : h(d), t.$$.on_mount = [];
  }), i.forEach(y);
}
function H(t, e) {
  const n = t.$$;
  n.fragment !== null && (z(n.after_update), h(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function J(t, e) {
  t.$$.dirty[0] === -1 && (u.push(t), V(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function it(t, e, n, r, i, d, w = null, L = [-1]) {
  const l = x;
  c(t);
  const s = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: d,
    update: g,
    not_equal: i,
    bound: j(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: j(),
    dirty: L,
    skip_bound: !1,
    root: e.target || l.$$.root
  };
  w && w(s.root);
  let b = !1;
  if (s.ctx = n ? n(t, e.props || {}, (f, v, ...E) => {
    const S = E.length ? E[0] : v;
    return s.ctx && i(s.ctx[f], s.ctx[f] = S) && (!s.skip_bound && s.bound[f] && s.bound[f](S), b && J(t, f)), v;
  }) : [], s.update(), b = !0, h(s.before_update), s.fragment = r ? r(s.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = T(e.target);
      s.fragment && s.fragment.l(f), f.forEach(M);
    } else
      s.fragment && s.fragment.c();
    e.intro && F(t.$$.fragment), G(t, e.target, e.anchor), C();
  }
  c(l);
}
class ot {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    $(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    $(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    H(this, 1), this.$destroy = g;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!A(n))
      return g;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const i = r.indexOf(n);
      i !== -1 && r.splice(i, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !P(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const K = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(K);
export {
  ot as S,
  Y as a,
  nt as b,
  ft as c,
  M as d,
  Z as e,
  tt as f,
  X as g,
  rt as h,
  it as i,
  F as j,
  st as k,
  et as l,
  G as m,
  g as n,
  H as o,
  W as s,
  R as t
};
