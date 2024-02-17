var B = Object.defineProperty;
var I = (t, e, n) => e in t ? B(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var $ = (t, e, n) => (I(t, typeof e != "symbol" ? e + "" : e, n), n);
function u() {
}
function k(t) {
  return t();
}
function j() {
  return /* @__PURE__ */ Object.create(null);
}
function p(t) {
  t.forEach(k);
}
function A(t) {
  return typeof t == "function";
}
function M(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function P(t) {
  return Object.keys(t).length === 0;
}
function rt(t, e) {
  t.appendChild(e);
}
function T(t, e, n) {
  t.insertBefore(e, n || null);
}
function C(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function st(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function R(t) {
  return document.createElement(t);
}
function U(t) {
  return document.createTextNode(t);
}
function at() {
  return U(" ");
}
function ft(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function V(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function q(t) {
  return Array.from(t.childNodes);
}
function ot(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
let x;
function d(t) {
  x = t;
}
const i = [], N = [];
let c = [];
const O = [], z = /* @__PURE__ */ Promise.resolve();
let m = !1;
function D() {
  m || (m = !0, z.then(H));
}
function y(t) {
  c.push(t);
}
const g = /* @__PURE__ */ new Set();
let o = 0;
function H() {
  if (o !== 0)
    return;
  const t = x;
  do {
    try {
      for (; o < i.length; ) {
        const e = i[o];
        o++, d(e), F(e.$$);
      }
    } catch (e) {
      throw i.length = 0, o = 0, e;
    }
    for (d(null), i.length = 0, o = 0; N.length; )
      N.pop()();
    for (let e = 0; e < c.length; e += 1) {
      const n = c[e];
      g.has(n) || (g.add(n), n());
    }
    c.length = 0;
  } while (i.length);
  for (; O.length; )
    O.pop()();
  m = !1, g.clear(), d(t);
}
function F(t) {
  if (t.fragment !== null) {
    t.update(), p(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(y);
  }
}
function G(t) {
  const e = [], n = [];
  c.forEach((r) => t.indexOf(r) === -1 ? e.push(r) : n.push(r)), n.forEach((r) => r()), c = e;
}
const _ = /* @__PURE__ */ new Set();
let J;
function K(t, e) {
  t && t.i && (_.delete(t), t.i(e));
}
function it(t, e, n, r) {
  if (t && t.o) {
    if (_.has(t))
      return;
    _.add(t), J.c.push(() => {
      _.delete(t), r && (n && t.d(1), r());
    }), t.o(e);
  } else
    r && r();
}
function ut(t) {
  t && t.c();
}
function Q(t, e, n) {
  const { fragment: r, after_update: f } = t.$$;
  r && r.m(e, n), y(() => {
    const l = t.$$.on_mount.map(k).filter(A);
    t.$$.on_destroy ? t.$$.on_destroy.push(...l) : p(l), t.$$.on_mount = [];
  }), f.forEach(y);
}
function W(t, e) {
  const n = t.$$;
  n.fragment !== null && (G(n.after_update), p(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function X(t, e) {
  t.$$.dirty[0] === -1 && (i.push(t), D(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Y(t, e, n, r, f, l, w = null, L = [-1]) {
  const h = x;
  d(t);
  const s = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: u,
    not_equal: f,
    bound: j(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (h ? h.$$.context : [])),
    // everything else
    callbacks: j(),
    dirty: L,
    skip_bound: !1,
    root: e.target || h.$$.root
  };
  w && w(s.root);
  let b = !1;
  if (s.ctx = n ? n(t, e.props || {}, (a, v, ...E) => {
    const S = E.length ? E[0] : v;
    return s.ctx && f(s.ctx[a], s.ctx[a] = S) && (!s.skip_bound && s.bound[a] && s.bound[a](S), b && X(t, a)), v;
  }) : [], s.update(), b = !0, p(s.before_update), s.fragment = r ? r(s.ctx) : !1, e.target) {
    if (e.hydrate) {
      const a = q(e.target);
      s.fragment && s.fragment.l(a), a.forEach(C);
    } else
      s.fragment && s.fragment.c();
    e.intro && K(t.$$.fragment), Q(t, e.target, e.anchor), H();
  }
  d(h);
}
class Z {
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
    W(this, 1), this.$destroy = u;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!A(n))
      return u;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const f = r.indexOf(n);
      f !== -1 && r.splice(f, 1);
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
const tt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(tt);
function et(t) {
  let e;
  return {
    c() {
      e = R("header"), e.innerHTML = '<div class="container"><span><a href="/">[ Home ]</a></span> <span><a href="/about">[ about ]</a></span> <span><a href="/test">[ test ]</a></span></div> <hr/>', V(e, "class", "");
    },
    m(n, r) {
      T(n, e, r);
    },
    p: u,
    i: u,
    o: u,
    d(n) {
      n && C(e);
    }
  };
}
class ct extends Z {
  constructor(e) {
    super(), Y(this, e, null, et, M, {});
  }
}
export {
  ct as H,
  Z as S,
  at as a,
  V as b,
  ut as c,
  T as d,
  R as e,
  rt as f,
  it as g,
  C as h,
  Y as i,
  W as j,
  st as k,
  ft as l,
  Q as m,
  u as n,
  U as o,
  ot as p,
  M as s,
  K as t
};
