import { S as G, i as B, s as J, H as R, e as u, c as Y, a as f, b as h, d as q, f as o, m as k, l as M, t as U, g as z, h as A, j as F, k as Q, o as x, p as L } from "./Head-6UBaawV2.js";
function $(t) {
  return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
}
const H = {
  OK_CODE: "OK",
  NG_CODE: "NG",
  //
  STORAGE_KEY_DB: "",
  //session_key
  SESSION_KEY_USER: "user"
  //cookie
}, P = {
  /**
  * 
  * @param
  *
  * @return
  */
  post: async function(t, n) {
    try {
      let e = "";
      const s = JSON.stringify(t);
      return await (await fetch(n, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: s
      })).json();
    } catch (e) {
      throw console.error(e), new Error("Error , post");
    }
  },
  /**
  * 
  * @param
  *
  * @return
  */
  serverPost: async function(t, n) {
    try {
      t.api_key = "", t.api_url = n, console.log(t);
      const e = JSON.stringify(t), s = await fetch("/api/common/send_post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: e
      }), d = await s.json();
      if (s.status !== 200)
        throw console.error("error, status <> 200"), new Error(await s.text());
      return d.ret !== H.OK_CODE ? (console.error("Error, json.ret <> OK"), {}) : d;
    } catch (e) {
      throw console.error(e), new Error("Error , post");
    }
  }
}, D = {
  /* modal-name */
  modalIdName: {
    show: "page_show_modal_1",
    edit: "page_edit_modal_1"
  },
  /**
   * 
   * @param key: any
   *
   * @return
   */
  getInputValues: function() {
    try {
      const t = {}, n = document.querySelector("#title").value;
      return t.title = n, t;
    } catch (t) {
      throw console.error(t), new Error("Error , getInputValues");
    }
  },
  /**
   * 
   * @param
   *
   * @return
   */
  clearInputValues: function() {
    try {
      const t = document.querySelector("#title");
      t && (t.value = "");
      const n = document.querySelector("#content");
      n && (n.value = "");
    } catch (t) {
      throw console.error(t), new Error("Error , getInputValues");
    }
  },
  /**
  * startProc
  * @param
  *
  * @return
  */
  startProc: async function() {
  }
}, W = {
  /**
   * getList
   * @param
   *
   * @return
   */
  getList: async function() {
    try {
      const t = {
        userId: 0
      };
      console.log(t);
      const n = await P.serverPost(t, "/test/get_list");
      let e = [];
      return e = n.data, e;
    } catch (t) {
      throw console.error(t), new Error("Error, getList");
    }
  },
  /**
   *
   * @param
   *
   * @return
   */
  addItem: async function() {
    try {
      let t = !1;
      const e = {
        api_key: "",
        title: D.getInputValues().title,
        content: "content1",
        completed: 0,
        userId: 0
      };
      console.log(e);
      const s = await P.serverPost(e, "/test/create");
      return console.log(s), s.ret === H.OK_CODE && (t = !0), D.clearInputValues(), t;
    } catch (t) {
      throw console.error("Error, addItem"), console.error(t), new Error("Error , addItem");
    }
  },
  /**
  *
  * @param key: any
  *
  * @return
  */
  displayAlert: function(t) {
    const n = document.querySelector(`#${t}`);
    n && n.classList.remove("d-none"), setTimeout(function() {
      n && n.classList.add("d-none");
    }, 4e3);
  }
};
function N(t, n, e) {
  const s = t.slice();
  return s[4] = n[e], s;
}
function V(t) {
  let n, e, s = (
    /*item*/
    t[4].title + ""
  ), d, m, a, p, E = (
    /*item*/
    t[4].id + ""
  ), b, C, g = (
    /*item*/
    t[4].createdAt + ""
  ), S, w, y, _, I, v, O, j;
  return {
    c() {
      n = u("div"), e = u("h3"), d = x(s), m = f(), a = u("span"), p = x("ID : "), b = x(E), C = x(", date: "), S = x(g), w = f(), y = u("a"), _ = u("button"), _.textContent = "Show", v = f(), O = u("hr"), j = f(), h(e, "class", "text-3xl font-bold my-2"), h(a, "class", "mx-2"), h(_, "class", "btn-outline-purple"), h(y, "href", I = `/test/show?id=${/*item*/
      t[4].id}`);
    },
    m(i, r) {
      q(i, n, r), o(n, e), o(e, d), o(n, m), o(n, a), o(a, p), o(a, b), o(a, C), o(a, S), o(n, w), o(n, y), o(y, _), o(n, v), o(n, O), o(n, j);
    },
    p(i, r) {
      r & /*pageItems*/
      1 && s !== (s = /*item*/
      i[4].title + "") && L(d, s), r & /*pageItems*/
      1 && E !== (E = /*item*/
      i[4].id + "") && L(b, E), r & /*pageItems*/
      1 && g !== (g = /*item*/
      i[4].createdAt + "") && L(S, g), r & /*pageItems*/
      1 && I !== (I = `/test/show?id=${/*item*/
      i[4].id}`) && h(y, "href", I);
    },
    d(i) {
      i && A(n);
    }
  };
}
function X(t) {
  let n, e, s, d, m, a, p, E, b, C, g, S, w, y, _, I, v, O, j;
  s = new R({});
  let i = $(
    /*pageItems*/
    t[0]
  ), r = [];
  for (let l = 0; l < i.length; l += 1)
    r[l] = V(N(t, i, l));
  return {
    c() {
      n = u("main"), e = u("div"), Y(s.$$.fragment), d = f(), m = u("h1"), m.textContent = "Test", a = f(), p = u("hr"), E = f(), b = u("label"), b.innerHTML = `Title:
    <input type="text" id="title" class="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"/>`, C = f(), g = u("hr"), S = f(), w = u("button"), w.textContent = "Save", y = f(), _ = u("hr"), I = f();
      for (let l = 0; l < r.length; l += 1)
        r[l].c();
      h(m, "class", "text-4xl font-bold"), h(p, "class", "my-2"), h(g, "class", "my-2"), h(w, "class", "btn btn-primary"), h(_, "class", "my-2"), h(e, "class", "container mx-auto my-2 px-8 bg-white");
    },
    m(l, T) {
      q(l, n, T), o(n, e), k(s, e, null), o(e, d), o(e, m), o(e, a), o(e, p), o(e, E), o(e, b), o(e, C), o(e, g), o(e, S), o(e, w), o(e, y), o(e, _), o(e, I);
      for (let c = 0; c < r.length; c += 1)
        r[c] && r[c].m(e, null);
      v = !0, O || (j = M(
        w,
        "click",
        /*addProc*/
        t[1]
      ), O = !0);
    },
    p(l, [T]) {
      if (T & /*pageItems*/
      1) {
        i = $(
          /*pageItems*/
          l[0]
        );
        let c;
        for (c = 0; c < i.length; c += 1) {
          const K = N(l, i, c);
          r[c] ? r[c].p(K, T) : (r[c] = V(K), r[c].c(), r[c].m(e, null));
        }
        for (; c < r.length; c += 1)
          r[c].d(1);
        r.length = i.length;
      }
    },
    i(l) {
      v || (U(s.$$.fragment, l), v = !0);
    },
    o(l) {
      z(s.$$.fragment, l), v = !1;
    },
    d(l) {
      l && A(n), F(s), Q(r, l), O = !1, j();
    }
  };
}
function Z(t, n, e) {
  console.log("#about");
  let { pageItems: s = [] } = n;
  (async function() {
    try {
      console.log("#Test4.getList");
      const a = { userId: 0 }, p = await P.serverPost(a, "/test/get_list");
      e(0, s = p.data), console.log(p.data);
    } catch (a) {
      console.error(a);
    }
  })();
  const m = async function() {
    await W.addItem(), location.reload();
  };
  return t.$$set = (a) => {
    "pageItems" in a && e(0, s = a.pageItems);
  }, [s, m];
}
class tt extends G {
  constructor(n) {
    super(), B(this, n, Z, X, J, { pageItems: 0 });
  }
}
const nt = new tt({
  target: document.getElementById("app")
});
export {
  nt as default
};
