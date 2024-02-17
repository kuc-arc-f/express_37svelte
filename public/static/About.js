import { S as d, i as g, s as h, H as _, e as l, c as $, a as p, b as x, d as b, f as s, m as v, n as w, t as y, g as A, h as C, j as H } from "./Head-6UBaawV2.js";
function S(c) {
  let n, t, a, i, u, m, o, r;
  return a = new _({}), {
    c() {
      n = l("main"), t = l("div"), $(a.$$.fragment), i = p(), u = l("hr"), m = p(), o = l("h1"), o.textContent = "About", x(o, "class", "text-4xl font-bold");
    },
    m(e, f) {
      b(e, n, f), s(n, t), v(a, t, null), s(t, i), s(t, u), s(t, m), s(t, o), r = !0;
    },
    p: w,
    i(e) {
      r || (y(a.$$.fragment, e), r = !0);
    },
    o(e) {
      A(a.$$.fragment, e), r = !1;
    },
    d(e) {
      e && C(n), H(a);
    }
  };
}
function j(c) {
  return console.log("#about"), [];
}
class q extends d {
  constructor(n) {
    super(), g(this, n, j, S, h, {});
  }
}
const E = new q({
  target: document.getElementById("app")
});
export {
  E as default
};
