const __vite__fileDeps = [
    "assets/Mining-BgDsHiny.js",
    "assets/Mining-DQ-YtMOy.css",
    "assets/Content-BcTvWb3Y.js",
    "assets/function-call-Eq_lQqwI.js",
    "assets/Content-B01Xnw7m.css",
    "assets/Improve-H-0DReHJ.js",
    "assets/time-CfRNpiP4.js",
    "assets/Improve-CA7M2WYF.css",
    "assets/Friends-DwvjFekC.js",
    "assets/Friends-HVkLhZDR.css",
    "assets/Communities-Bbbv2Pya.js",
    "assets/Communities-NXaqzdlK.css",
    "assets/RichList-RWbQwmc_.js",
    "assets/BillingTopup-Bxw5qViz.js",
    "assets/RichList-DzHV9zN3.css",
    "assets/Negotiations-D0J0yb7V.js",
    "assets/Negotiations-D-mZlnPX.css",
    "assets/NegotiationsLeaderboards-DuDcXnV1.js",
    "assets/NegotiationsLeaderboards-DYOPSm_N.css",
    "assets/Quests-CBoQlrvt.js",
    "assets/TonWallet-CfAZAUN5.js",
    "assets/TonWallet-DYggiSdp.css",
    "assets/Quests-C9GQw5OI.css",
    "assets/Rating-Bmacihkb.js",
    "assets/Rating-McjRdv1C.css",
    "assets/Hero-BsKjhx-k.js",
    "assets/Hero-BMK8V7KB.css",
    "assets/Fund-CmkbevSf.js",
    "assets/Fund-D12fwswn.css",
    "assets/City-DSkOJDfo.js",
    "assets/City-CstX7feD.css",
    "assets/City2-UmAGx0GD.js",
    "assets/City2-CBOdb2Da.css",
    "assets/Store-Bbni_Ttm.js",
    "assets/Store-ChPlWoxT.css",
    "assets/Binar-ChvTxoUS.js",
    "assets/Binar-C6P5Livr.css",
    "assets/Airdrop-DqtwwnOe.js",
    "assets/Airdrop-HQFYay8B.css",
    "assets/Box-B7CvDHHv.js",
    "assets/Box-B9VrE4zM.css",
  ],
  __vite__mapDeps = (i) => i.map((i) => __vite__fileDeps[i]);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) o(i);
  new MutationObserver((i) => {
    for (const r of i)
      if (r.type === "childList")
        for (const a of r.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && o(a);
  }).observe(document, {
    childList: !0,
    subtree: !0,
  });
  function n(i) {
    const r = {};
    return (
      i.integrity && (r.integrity = i.integrity),
      i.referrerPolicy && (r.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function o(i) {
    if (i.ep) return;
    i.ep = !0;
    const r = n(i);
    fetch(i.href, r);
  }
})();
function os() {}
const be = Object.assign,
  Dt = typeof window < "u",
  hn = (e) => e !== null && typeof e == "object",
  $e = (e) => e != null,
  ei = (e) => typeof e == "function",
  Vs = (e) => hn(e) && ei(e.then) && ei(e.catch),
  Li = (e) =>
    Object.prototype.toString.call(e) === "[object Date]" &&
    !Number.isNaN(e.getTime());
function ed(e) {
  return (
    (e = e.replace(/[^-|\d]/g, "")),
    /^((\+86)|(86))?(1)\d{10}$/.test(e) || /^0[0-9-]{10,13}$/.test(e)
  );
}
const td = (e) => typeof e == "number" || /^\d+(\.\d+)?$/.test(e),
  fg = () =>
    Dt ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : !1;
function Vl(e, t) {
  const n = t.split(".");
  let o = e;
  return (
    n.forEach((i) => {
      var r;
      o = hn(o) && (r = o[i]) != null ? r : "";
    }),
    o
  );
}
function Me(e, t, n) {
  return t.reduce((o, i) => ((!n || e[i] !== void 0) && (o[i] = e[i]), o), {});
}
const fn = (e, t) => JSON.stringify(e) === JSON.stringify(t),
  Dr = (e) => (Array.isArray(e) ? e : [e]),
  hg = (e) => e.reduce((t, n) => t.concat(n), []),
  Qe = null,
  Y = [Number, String],
  z = {
    type: Boolean,
    default: !0,
  },
  dt = (e) => ({
    type: e,
    required: !0,
  }),
  Ye = () => ({
    type: Array,
    default: () => [],
  }),
  nt = (e) => ({
    type: Number,
    default: e,
  }),
  ce = (e) => ({
    type: Y,
    default: e,
  }),
  G = (e) => ({
    type: String,
    default: e,
  });
/**
 * @vue/shared v3.4.27
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
/*! #__NO_SIDE_EFFECTS__ */
function Ns(e, t) {
  const n = new Set(e.split(","));
  return (o) => n.has(o);
}
const qe = {},
  qo = [],
  Vt = () => {},
  gg = () => !1,
  Kr = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Hs = (e) => e.startsWith("onUpdate:"),
  it = Object.assign,
  zs = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  mg = Object.prototype.hasOwnProperty,
  Le = (e, t) => mg.call(e, t),
  Ce = Array.isArray,
  Yo = (e) => Zr(e) === "[object Map]",
  nd = (e) => Zr(e) === "[object Set]",
  Pe = (e) => typeof e == "function",
  Xe = (e) => typeof e == "string",
  To = (e) => typeof e == "symbol",
  Ke = (e) => e !== null && typeof e == "object",
  od = (e) => (Ke(e) || Pe(e)) && Pe(e.then) && Pe(e.catch),
  id = Object.prototype.toString,
  Zr = (e) => id.call(e),
  vg = (e) => Zr(e).slice(8, -1),
  rd = (e) => Zr(e) === "[object Object]",
  js = (e) =>
    Xe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  xi = Ns(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  Gr = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  yg = /-(\w)/g,
  gn = Gr((e) => e.replace(yg, (t, n) => (n ? n.toUpperCase() : ""))),
  bg = /\B([A-Z])/g,
  oo = Gr((e) => e.replace(bg, "-$1").toLowerCase()),
  Qr = Gr((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  _a = Gr((e) => (e ? `on${Qr(e)}` : "")),
  to = (e, t) => !Object.is(e, t),
  ka = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  ad = (e, t, n, o = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: o,
      value: n,
    });
  },
  pg = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  wg = (e) => {
    const t = Xe(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let Nl;
const sd = () =>
  Nl ||
  (Nl =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function Nt(e) {
  if (Ce(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n],
        i = Xe(o) ? kg(o) : Nt(o);
      if (i) for (const r in i) t[r] = i[r];
    }
    return t;
  } else if (Xe(e) || Ke(e)) return e;
}
const Sg = /;(?![^(]*\))/g,
  Cg = /:([^]+)/,
  _g = /\/\*[^]*?\*\//g;
function kg(e) {
  const t = {};
  return (
    e
      .replace(_g, "")
      .split(Sg)
      .forEach((n) => {
        if (n) {
          const o = n.split(Cg);
          o.length > 1 && (t[o[0].trim()] = o[1].trim());
        }
      }),
    t
  );
}
function xg(e) {
  let t = "";
  if (!e || Xe(e)) return t;
  for (const n in e) {
    const o = e[n];
    if (Xe(o) || typeof o == "number") {
      const i = n.startsWith("--") ? n : oo(n);
      t += `${i}:${o};`;
    }
  }
  return t;
}
function At(e) {
  let t = "";
  if (Xe(e)) t = e;
  else if (Ce(e))
    for (let n = 0; n < e.length; n++) {
      const o = At(e[n]);
      o && (t += o + " ");
    }
  else if (Ke(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Tg =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Eg = Ns(Tg);
function ld(e) {
  return !!e || e === "";
}
const X = (e) =>
    Xe(e)
      ? e
      : e == null
      ? ""
      : Ce(e) || (Ke(e) && (e.toString === id || !Pe(e.toString)))
      ? JSON.stringify(e, cd, 2)
      : String(e),
  cd = (e, t) =>
    t && t.__v_isRef
      ? cd(e, t.value)
      : Yo(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [o, i], r) => ((n[xa(o, r) + " =>"] = i), n),
            {}
          ),
        }
      : nd(t)
      ? {
          [`Set(${t.size})`]: [...t.values()].map((n) => xa(n)),
        }
      : To(t)
      ? xa(t)
      : Ke(t) && !Ce(t) && !rd(t)
      ? String(t)
      : t,
  xa = (e, t = "") => {
    var n;
    return To(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
/**
 * @vue/reactivity v3.4.27
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let Ot;
class ud {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Ot),
      !t && Ot && (this.index = (Ot.scopes || (Ot.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = Ot;
      try {
        return (Ot = this), t();
      } finally {
        Ot = n;
      }
    }
  }
  on() {
    Ot = this;
  }
  off() {
    Ot = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++) this.effects[n].stop();
      for (n = 0, o = this.cleanups.length; n < o; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, o = this.scopes.length; n < o; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i &&
          i !== this &&
          ((this.parent.scopes[this.index] = i), (i.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function dd(e) {
  return new ud(e);
}
function Pg(e, t = Ot) {
  t && t.active && t.effects.push(e);
}
function fd() {
  return Ot;
}
function Ag(e) {
  Ot && Ot.cleanups.push(e);
}
let wo;
class Us {
  constructor(t, n, o, i) {
    (this.fn = t),
      (this.trigger = n),
      (this.scheduler = o),
      (this.active = !0),
      (this.deps = []),
      (this._dirtyLevel = 4),
      (this._trackId = 0),
      (this._runnings = 0),
      (this._shouldSchedule = !1),
      (this._depsLength = 0),
      Pg(this, i);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      (this._dirtyLevel = 1), io();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (Ig(n.computed), this._dirtyLevel >= 4)) break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), ro();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn();
    let t = Jn,
      n = wo;
    try {
      return (Jn = !0), (wo = this), this._runnings++, Hl(this), this.fn();
    } finally {
      zl(this), this._runnings--, (wo = n), (Jn = t);
    }
  }
  stop() {
    this.active &&
      (Hl(this), zl(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function Ig(e) {
  return e.value;
}
function Hl(e) {
  e._trackId++, (e._depsLength = 0);
}
function zl(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) hd(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function hd(e, t) {
  const n = e.get(t);
  n !== void 0 &&
    t._trackId !== n &&
    (e.delete(t), e.size === 0 && e.cleanup());
}
let Jn = !0,
  is = 0;
const gd = [];
function io() {
  gd.push(Jn), (Jn = !1);
}
function ro() {
  const e = gd.pop();
  Jn = e === void 0 ? !0 : e;
}
function Ws() {
  is++;
}
function qs() {
  for (is--; !is && rs.length; ) rs.shift()();
}
function md(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const o = e.deps[e._depsLength];
    o !== t ? (o && hd(o, e), (e.deps[e._depsLength++] = t)) : e._depsLength++;
  }
}
const rs = [];
function vd(e, t, n) {
  Ws();
  for (const o of e.keys()) {
    let i;
    o._dirtyLevel < t &&
      (i ?? (i = e.get(o) === o._trackId)) &&
      (o._shouldSchedule || (o._shouldSchedule = o._dirtyLevel === 0),
      (o._dirtyLevel = t)),
      o._shouldSchedule &&
        (i ?? (i = e.get(o) === o._trackId)) &&
        (o.trigger(),
        (!o._runnings || o.allowRecurse) &&
          o._dirtyLevel !== 2 &&
          ((o._shouldSchedule = !1), o.scheduler && rs.push(o.scheduler)));
  }
  qs();
}
const yd = (e, t) => {
    const n = new Map();
    return (n.cleanup = e), (n.computed = t), n;
  },
  $r = new WeakMap(),
  So = Symbol(""),
  as = Symbol("");
function It(e, t, n) {
  if (Jn && wo) {
    let o = $r.get(e);
    o || $r.set(e, (o = new Map()));
    let i = o.get(n);
    i || o.set(n, (i = yd(() => o.delete(n)))), md(wo, i);
  }
}
function xn(e, t, n, o, i, r) {
  const a = $r.get(e);
  if (!a) return;
  let s = [];
  if (t === "clear") s = [...a.values()];
  else if (n === "length" && Ce(e)) {
    const l = Number(o);
    a.forEach((c, u) => {
      (u === "length" || (!To(u) && u >= l)) && s.push(c);
    });
  } else
    switch ((n !== void 0 && s.push(a.get(n)), t)) {
      case "add":
        Ce(e)
          ? js(n) && s.push(a.get("length"))
          : (s.push(a.get(So)), Yo(e) && s.push(a.get(as)));
        break;
      case "delete":
        Ce(e) || (s.push(a.get(So)), Yo(e) && s.push(a.get(as)));
        break;
      case "set":
        Yo(e) && s.push(a.get(So));
        break;
    }
  Ws();
  for (const l of s) l && vd(l, 4);
  qs();
}
function Rg(e, t) {
  const n = $r.get(e);
  return n && n.get(t);
}
const Og = Ns("__proto__,__v_isRef,__isVue"),
  bd = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(To)
  ),
  jl = Bg();
function Bg() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const o = Fe(this);
        for (let r = 0, a = this.length; r < a; r++) It(o, "get", r + "");
        const i = o[t](...n);
        return i === -1 || i === !1 ? o[t](...n.map(Fe)) : i;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        io(), Ws();
        const o = Fe(this)[t].apply(this, n);
        return qs(), ro(), o;
      };
    }),
    e
  );
}
function Dg(e) {
  To(e) || (e = String(e));
  const t = Fe(this);
  return It(t, "has", e), t.hasOwnProperty(e);
}
class pd {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._isShallow = n);
  }
  get(t, n, o) {
    const i = this._isReadonly,
      r = this._isShallow;
    if (n === "__v_isReactive") return !i;
    if (n === "__v_isReadonly") return i;
    if (n === "__v_isShallow") return r;
    if (n === "__v_raw")
      return o === (i ? (r ? Yg : _d) : r ? Cd : Sd).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(o)
        ? t
        : void 0;
    const a = Ce(t);
    if (!i) {
      if (a && Le(jl, n)) return Reflect.get(jl, n, o);
      if (n === "hasOwnProperty") return Dg;
    }
    const s = Reflect.get(t, n, o);
    return (To(n) ? bd.has(n) : Og(n)) || (i || It(t, "get", n), r)
      ? s
      : rt(s)
      ? a && js(n)
        ? s
        : s.value
      : Ke(s)
      ? i
        ? xd(s)
        : Ze(s)
      : s;
  }
}
class wd extends pd {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, i) {
    let r = t[n];
    if (!this._isShallow) {
      const l = Mi(r);
      if (
        (!Lr(o) && !Mi(o) && ((r = Fe(r)), (o = Fe(o))),
        !Ce(t) && rt(r) && !rt(o))
      )
        return l ? !1 : ((r.value = o), !0);
    }
    const a = Ce(t) && js(n) ? Number(n) < t.length : Le(t, n),
      s = Reflect.set(t, n, o, i);
    return (
      t === Fe(i) && (a ? to(o, r) && xn(t, "set", n, o) : xn(t, "add", n, o)),
      s
    );
  }
  deleteProperty(t, n) {
    const o = Le(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && o && xn(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!To(n) || !bd.has(n)) && It(t, "has", n), o;
  }
  ownKeys(t) {
    return It(t, "iterate", Ce(t) ? "length" : So), Reflect.ownKeys(t);
  }
}
class $g extends pd {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const Lg = new wd(),
  Mg = new $g(),
  Fg = new wd(!0);
const Ys = (e) => e,
  Xr = (e) => Reflect.getPrototypeOf(e);
function er(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const i = Fe(e),
    r = Fe(t);
  n || (to(t, r) && It(i, "get", t), It(i, "get", r));
  const { has: a } = Xr(i),
    s = o ? Ys : n ? Qs : Fi;
  if (a.call(i, t)) return s(e.get(t));
  if (a.call(i, r)) return s(e.get(r));
  e !== i && e.get(t);
}
function tr(e, t = !1) {
  const n = this.__v_raw,
    o = Fe(n),
    i = Fe(e);
  return (
    t || (to(e, i) && It(o, "has", e), It(o, "has", i)),
    e === i ? n.has(e) : n.has(e) || n.has(i)
  );
}
function nr(e, t = !1) {
  return (
    (e = e.__v_raw), !t && It(Fe(e), "iterate", So), Reflect.get(e, "size", e)
  );
}
function Ul(e) {
  e = Fe(e);
  const t = Fe(this);
  return Xr(t).has.call(t, e) || (t.add(e), xn(t, "add", e, e)), this;
}
function Wl(e, t) {
  t = Fe(t);
  const n = Fe(this),
    { has: o, get: i } = Xr(n);
  let r = o.call(n, e);
  r || ((e = Fe(e)), (r = o.call(n, e)));
  const a = i.call(n, e);
  return (
    n.set(e, t), r ? to(t, a) && xn(n, "set", e, t) : xn(n, "add", e, t), this
  );
}
function ql(e) {
  const t = Fe(this),
    { has: n, get: o } = Xr(t);
  let i = n.call(t, e);
  i || ((e = Fe(e)), (i = n.call(t, e))), o && o.call(t, e);
  const r = t.delete(e);
  return i && xn(t, "delete", e, void 0), r;
}
function Yl() {
  const e = Fe(this),
    t = e.size !== 0,
    n = e.clear();
  return t && xn(e, "clear", void 0, void 0), n;
}
function or(e, t) {
  return function (o, i) {
    const r = this,
      a = r.__v_raw,
      s = Fe(a),
      l = t ? Ys : e ? Qs : Fi;
    return (
      !e && It(s, "iterate", So), a.forEach((c, u) => o.call(i, l(c), l(u), r))
    );
  };
}
function ir(e, t, n) {
  return function (...o) {
    const i = this.__v_raw,
      r = Fe(i),
      a = Yo(r),
      s = e === "entries" || (e === Symbol.iterator && a),
      l = e === "keys" && a,
      c = i[e](...o),
      u = n ? Ys : t ? Qs : Fi;
    return (
      !t && It(r, "iterate", l ? as : So),
      {
        next() {
          const { value: f, done: h } = c.next();
          return h
            ? {
                value: f,
                done: h,
              }
            : {
                value: s ? [u(f[0]), u(f[1])] : u(f),
                done: h,
              };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Mn(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Vg() {
  const e = {
      get(r) {
        return er(this, r);
      },
      get size() {
        return nr(this);
      },
      has: tr,
      add: Ul,
      set: Wl,
      delete: ql,
      clear: Yl,
      forEach: or(!1, !1),
    },
    t = {
      get(r) {
        return er(this, r, !1, !0);
      },
      get size() {
        return nr(this);
      },
      has: tr,
      add: Ul,
      set: Wl,
      delete: ql,
      clear: Yl,
      forEach: or(!1, !0),
    },
    n = {
      get(r) {
        return er(this, r, !0);
      },
      get size() {
        return nr(this, !0);
      },
      has(r) {
        return tr.call(this, r, !0);
      },
      add: Mn("add"),
      set: Mn("set"),
      delete: Mn("delete"),
      clear: Mn("clear"),
      forEach: or(!0, !1),
    },
    o = {
      get(r) {
        return er(this, r, !0, !0);
      },
      get size() {
        return nr(this, !0);
      },
      has(r) {
        return tr.call(this, r, !0);
      },
      add: Mn("add"),
      set: Mn("set"),
      delete: Mn("delete"),
      clear: Mn("clear"),
      forEach: or(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
      (e[r] = ir(r, !1, !1)),
        (n[r] = ir(r, !0, !1)),
        (t[r] = ir(r, !1, !0)),
        (o[r] = ir(r, !0, !0));
    }),
    [e, n, t, o]
  );
}
const [Ng, Hg, zg, jg] = Vg();
function Ks(e, t) {
  const n = t ? (e ? jg : zg) : e ? Hg : Ng;
  return (o, i, r) =>
    i === "__v_isReactive"
      ? !e
      : i === "__v_isReadonly"
      ? e
      : i === "__v_raw"
      ? o
      : Reflect.get(Le(n, i) && i in o ? n : o, i, r);
}
const Ug = {
    get: Ks(!1, !1),
  },
  Wg = {
    get: Ks(!1, !0),
  },
  qg = {
    get: Ks(!0, !1),
  };
const Sd = new WeakMap(),
  Cd = new WeakMap(),
  _d = new WeakMap(),
  Yg = new WeakMap();
function Kg(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Zg(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Kg(vg(e));
}
function Ze(e) {
  return Mi(e) ? e : Zs(e, !1, Lg, Ug, Sd);
}
function kd(e) {
  return Zs(e, !1, Fg, Wg, Cd);
}
function xd(e) {
  return Zs(e, !0, Mg, qg, _d);
}
function Zs(e, t, n, o, i) {
  if (!Ke(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const r = i.get(e);
  if (r) return r;
  const a = Zg(e);
  if (a === 0) return e;
  const s = new Proxy(e, a === 2 ? o : n);
  return i.set(e, s), s;
}
function Co(e) {
  return Mi(e) ? Co(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Mi(e) {
  return !!(e && e.__v_isReadonly);
}
function Lr(e) {
  return !!(e && e.__v_isShallow);
}
function Td(e) {
  return e ? !!e.__v_raw : !1;
}
function Fe(e) {
  const t = e && e.__v_raw;
  return t ? Fe(t) : e;
}
function Gs(e) {
  return Object.isExtensible(e) && ad(e, "__v_skip", !0), e;
}
const Fi = (e) => (Ke(e) ? Ze(e) : e),
  Qs = (e) => (Ke(e) ? xd(e) : e);
class Ed {
  constructor(t, n, o, i) {
    (this.getter = t),
      (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new Us(
        () => t(this._value),
        () => Pr(this, this.effect._dirtyLevel === 2 ? 2 : 3)
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !i),
      (this.__v_isReadonly = o);
  }
  get value() {
    const t = Fe(this);
    return (
      (!t._cacheable || t.effect.dirty) &&
        to(t._value, (t._value = t.effect.run())) &&
        Pr(t, 4),
      Pd(t),
      t.effect._dirtyLevel >= 2 && Pr(t, 2),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
}
function Gg(e, t, n = !1) {
  let o, i;
  const r = Pe(e);
  return (
    r ? ((o = e), (i = Vt)) : ((o = e.get), (i = e.set)),
    new Ed(o, i, r || !i, n)
  );
}
function Pd(e) {
  var t;
  Jn &&
    wo &&
    ((e = Fe(e)),
    md(
      wo,
      (t = e.dep) != null
        ? t
        : (e.dep = yd(() => (e.dep = void 0), e instanceof Ed ? e : void 0))
    ));
}
function Pr(e, t = 4, n) {
  e = Fe(e);
  const o = e.dep;
  o && vd(o, t);
}
function rt(e) {
  return !!(e && e.__v_isRef === !0);
}
function $(e) {
  return Ad(e, !1);
}
function Qg(e) {
  return Ad(e, !0);
}
function Ad(e, t) {
  return rt(e) ? e : new Xg(e, t);
}
class Xg {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : Fe(t)),
      (this._value = n ? t : Fi(t));
  }
  get value() {
    return Pd(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Lr(t) || Mi(t);
    (t = n ? t : Fe(t)),
      to(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : Fi(t)), Pr(this, 4));
  }
}
function Qt(e) {
  return rt(e) ? e.value : e;
}
const Jg = {
  get: (e, t, n) => Qt(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const i = e[t];
    return rt(i) && !rt(n) ? ((i.value = n), !0) : Reflect.set(e, t, n, o);
  },
};
function Id(e) {
  return Co(e) ? e : new Proxy(e, Jg);
}
function em(e) {
  const t = Ce(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = nm(e, n);
  return t;
}
class tm {
  constructor(t, n, o) {
    (this._object = t),
      (this._key = n),
      (this._defaultValue = o),
      (this.__v_isRef = !0);
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return Rg(Fe(this._object), this._key);
  }
}
function nm(e, t, n) {
  const o = e[t];
  return rt(o) ? o : new tm(e, t, n);
}
/**
 * @vue/runtime-core v3.4.27
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
function eo(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (i) {
    Jr(i, t, n);
  }
}
function Ht(e, t, n, o) {
  if (Pe(e)) {
    const i = eo(e, t, n, o);
    return (
      i &&
        od(i) &&
        i.catch((r) => {
          Jr(r, t, n);
        }),
      i
    );
  }
  if (Ce(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++) i.push(Ht(e[r], t, n, o));
    return i;
  }
}
function Jr(e, t, n, o = !0) {
  const i = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const a = t.proxy,
      s = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; r; ) {
      const c = r.ec;
      if (c) {
        for (let u = 0; u < c.length; u++) if (c[u](e, a, s) === !1) return;
      }
      r = r.parent;
    }
    const l = t.appContext.config.errorHandler;
    if (l) {
      io(), eo(l, null, 10, [e, a, s]), ro();
      return;
    }
  }
  om(e, n, i, o);
}
function om(e, t, n, o = !0) {
  console.error(e);
}
let Vi = !1,
  ss = !1;
const vt = [];
let dn = 0;
const Ko = [];
let Yn = null,
  yo = 0;
const Rd = Promise.resolve();
let Xs = null;
function Ae(e) {
  const t = Xs || Rd;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function im(e) {
  let t = dn + 1,
    n = vt.length;
  for (; t < n; ) {
    const o = (t + n) >>> 1,
      i = vt[o],
      r = Ni(i);
    r < e || (r === e && i.pre) ? (t = o + 1) : (n = o);
  }
  return t;
}
function Js(e) {
  (!vt.length || !vt.includes(e, Vi && e.allowRecurse ? dn + 1 : dn)) &&
    (e.id == null ? vt.push(e) : vt.splice(im(e.id), 0, e), Od());
}
function Od() {
  !Vi && !ss && ((ss = !0), (Xs = Rd.then(Dd)));
}
function rm(e) {
  const t = vt.indexOf(e);
  t > dn && vt.splice(t, 1);
}
function am(e) {
  Ce(e)
    ? Ko.push(...e)
    : (!Yn || !Yn.includes(e, e.allowRecurse ? yo + 1 : yo)) && Ko.push(e),
    Od();
}
function Kl(e, t, n = Vi ? dn + 1 : 0) {
  for (; n < vt.length; n++) {
    const o = vt[n];
    if (o && o.pre) {
      if (e && o.id !== e.uid) continue;
      vt.splice(n, 1), n--, o();
    }
  }
}
function Bd(e) {
  if (Ko.length) {
    const t = [...new Set(Ko)].sort((n, o) => Ni(n) - Ni(o));
    if (((Ko.length = 0), Yn)) {
      Yn.push(...t);
      return;
    }
    for (Yn = t, yo = 0; yo < Yn.length; yo++) Yn[yo]();
    (Yn = null), (yo = 0);
  }
}
const Ni = (e) => (e.id == null ? 1 / 0 : e.id),
  sm = (e, t) => {
    const n = Ni(e) - Ni(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function Dd(e) {
  (ss = !1), (Vi = !0), vt.sort(sm);
  try {
    for (dn = 0; dn < vt.length; dn++) {
      const t = vt[dn];
      t && t.active !== !1 && eo(t, null, 14);
    }
  } finally {
    (dn = 0),
      (vt.length = 0),
      Bd(),
      (Vi = !1),
      (Xs = null),
      (vt.length || Ko.length) && Dd();
  }
}
function lm(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || qe;
  let i = n;
  const r = t.startsWith("update:"),
    a = r && t.slice(7);
  if (a && a in o) {
    const u = `${a === "modelValue" ? "model" : a}Modifiers`,
      { number: f, trim: h } = o[u] || qe;
    h && (i = n.map((g) => (Xe(g) ? g.trim() : g))), f && (i = n.map(pg));
  }
  let s,
    l = o[(s = _a(t))] || o[(s = _a(gn(t)))];
  !l && r && (l = o[(s = _a(oo(t)))]), l && Ht(l, e, 6, i);
  const c = o[s + "Once"];
  if (c) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[s]) return;
    (e.emitted[s] = !0), Ht(c, e, 6, i);
  }
}
function $d(e, t, n = !1) {
  const o = t.emitsCache,
    i = o.get(e);
  if (i !== void 0) return i;
  const r = e.emits;
  let a = {},
    s = !1;
  if (!Pe(e)) {
    const l = (c) => {
      const u = $d(c, t, !0);
      u && ((s = !0), it(a, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l);
  }
  return !r && !s
    ? (Ke(e) && o.set(e, null), null)
    : (Ce(r) ? r.forEach((l) => (a[l] = null)) : it(a, r),
      Ke(e) && o.set(e, a),
      a);
}
function ea(e, t) {
  return !e || !Kr(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      Le(e, t[0].toLowerCase() + t.slice(1)) || Le(e, oo(t)) || Le(e, t));
}
let ot = null,
  ta = null;
function Mr(e) {
  const t = ot;
  return (ot = e), (ta = (e && e.type.__scopeId) || null), t;
}
function el(e) {
  ta = e;
}
function tl() {
  ta = null;
}
function ge(e, t = ot, n) {
  if (!t || e._n) return e;
  const o = (...i) => {
    o._d && lc(-1);
    const r = Mr(t);
    let a;
    try {
      a = e(...i);
    } finally {
      Mr(r), o._d && lc(1);
    }
    return a;
  };
  return (o._n = !0), (o._c = !0), (o._d = !0), o;
}
function Ta(e) {
  const {
      type: t,
      vnode: n,
      proxy: o,
      withProxy: i,
      propsOptions: [r],
      slots: a,
      attrs: s,
      emit: l,
      render: c,
      renderCache: u,
      props: f,
      data: h,
      setupState: g,
      ctx: S,
      inheritAttrs: p,
    } = e,
    y = Mr(e);
  let v, m;
  try {
    if (n.shapeFlag & 4) {
      const w = i || o,
        C = w;
      (v = un(c.call(C, w, u, f, g, h, S))), (m = s);
    } else {
      const w = t;
      (v = un(
        w.length > 1
          ? w(f, {
              attrs: s,
              slots: a,
              emit: l,
            })
          : w(f, null)
      )),
        (m = t.props ? s : cm(s));
    }
  } catch (w) {
    (Ai.length = 0), Jr(w, e, 1), (v = d(kt));
  }
  let b = v;
  if (m && p !== !1) {
    const w = Object.keys(m),
      { shapeFlag: C } = b;
    w.length &&
      C & 7 &&
      (r && w.some(Hs) && (m = um(m, r)), (b = no(b, m, !1, !0)));
  }
  return (
    n.dirs &&
      ((b = no(b, null, !1, !0)),
      (b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (b.transition = n.transition),
    (v = b),
    Mr(y),
    v
  );
}
const cm = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || Kr(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  um = (e, t) => {
    const n = {};
    for (const o in e) (!Hs(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
    return n;
  };
function dm(e, t, n) {
  const { props: o, children: i, component: r } = e,
    { props: a, children: s, patchFlag: l } = t,
    c = r.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return o ? Zl(o, a, c) : !!a;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const h = u[f];
        if (a[h] !== o[h] && !ea(c, h)) return !0;
      }
    }
  } else
    return (i || s) && (!s || !s.$stable)
      ? !0
      : o === a
      ? !1
      : o
      ? a
        ? Zl(o, a, c)
        : !0
      : !!a;
  return !1;
}
function Zl(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length) return !0;
  for (let i = 0; i < o.length; i++) {
    const r = o[i];
    if (t[r] !== e[r] && !ea(n, r)) return !0;
  }
  return !1;
}
function fm({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if ((o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const Ld = "components",
  hm = "directives";
function He(e, t) {
  return Md(Ld, e, !0, t) || e;
}
const gm = Symbol.for("v-ndc");
function mm(e) {
  return Md(hm, e);
}
function Md(e, t, n = !0, o = !1) {
  const i = ot || ut;
  if (i) {
    const r = i.type;
    if (e === Ld) {
      const s = l0(r, !1);
      if (s && (s === t || s === gn(t) || s === Qr(gn(t)))) return r;
    }
    const a = Gl(i[e] || r[e], t) || Gl(i.appContext[e], t);
    return !a && o ? r : a;
  }
}
function Gl(e, t) {
  return e && (e[t] || e[gn(t)] || e[Qr(gn(t))]);
}
const vm = (e) => e.__isSuspense;
function ym(e, t) {
  t && t.pendingBranch
    ? Ce(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : am(e);
}
const bm = Symbol.for("v-scx"),
  pm = () => xt(bm);
function ri(e, t) {
  return nl(e, null, t);
}
const rr = {};
function ie(e, t, n) {
  return nl(e, t, n);
}
function nl(
  e,
  t,
  { immediate: n, deep: o, flush: i, once: r, onTrack: a, onTrigger: s } = qe
) {
  if (t && r) {
    const k = t;
    t = (...I) => {
      k(...I), C();
    };
  }
  const l = ut,
    c = (k) => (o === !0 ? k : po(k, o === !1 ? 1 : void 0));
  let u,
    f = !1,
    h = !1;
  if (
    (rt(e)
      ? ((u = () => e.value), (f = Lr(e)))
      : Co(e)
      ? ((u = () => c(e)), (f = !0))
      : Ce(e)
      ? ((h = !0),
        (f = e.some((k) => Co(k) || Lr(k))),
        (u = () =>
          e.map((k) => {
            if (rt(k)) return k.value;
            if (Co(k)) return c(k);
            if (Pe(k)) return eo(k, l, 2);
          })))
      : Pe(e)
      ? t
        ? (u = () => eo(e, l, 2))
        : (u = () => (g && g(), Ht(e, l, 3, [S])))
      : (u = Vt),
    t && o)
  ) {
    const k = u;
    u = () => po(k());
  }
  let g,
    S = (k) => {
      g = b.onStop = () => {
        eo(k, l, 4), (g = b.onStop = void 0);
      };
    },
    p;
  if (ia)
    if (
      ((S = Vt),
      t ? n && Ht(t, l, 3, [u(), h ? [] : void 0, S]) : u(),
      i === "sync")
    ) {
      const k = pm();
      p = k.__watcherHandles || (k.__watcherHandles = []);
    } else return Vt;
  let y = h ? new Array(e.length).fill(rr) : rr;
  const v = () => {
    if (!(!b.active || !b.dirty))
      if (t) {
        const k = b.run();
        (o || f || (h ? k.some((I, _) => to(I, y[_])) : to(k, y))) &&
          (g && g(),
          Ht(t, l, 3, [k, y === rr ? void 0 : h && y[0] === rr ? [] : y, S]),
          (y = k));
      } else b.run();
  };
  v.allowRecurse = !!t;
  let m;
  i === "sync"
    ? (m = v)
    : i === "post"
    ? (m = () => Tt(v, l && l.suspense))
    : ((v.pre = !0), l && (v.id = l.uid), (m = () => Js(v)));
  const b = new Us(u, Vt, m),
    w = fd(),
    C = () => {
      b.stop(), w && zs(w.effects, b);
    };
  return (
    t
      ? n
        ? v()
        : (y = b.run())
      : i === "post"
      ? Tt(b.run.bind(b), l && l.suspense)
      : b.run(),
    p && p.push(C),
    C
  );
}
function wm(e, t, n) {
  const o = this.proxy,
    i = Xe(e) ? (e.includes(".") ? Fd(o, e) : () => o[e]) : e.bind(o, o);
  let r;
  Pe(t) ? (r = t) : ((r = t.handler), (n = t));
  const a = Xi(this),
    s = nl(i, r.bind(o), n);
  return a(), s;
}
function Fd(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let i = 0; i < n.length && o; i++) o = o[n[i]];
    return o;
  };
}
function po(e, t = 1 / 0, n) {
  if (t <= 0 || !Ke(e) || e.__v_skip || ((n = n || new Set()), n.has(e)))
    return e;
  if ((n.add(e), t--, rt(e))) po(e.value, t, n);
  else if (Ce(e)) for (let o = 0; o < e.length; o++) po(e[o], t, n);
  else if (nd(e) || Yo(e))
    e.forEach((o) => {
      po(o, t, n);
    });
  else if (rd(e)) for (const o in e) po(e[o], t, n);
  return e;
}
function st(e, t) {
  if (ot === null) return e;
  const n = ra(ot) || ot.proxy,
    o = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, a, s, l = qe] = t[i];
    r &&
      (Pe(r) &&
        (r = {
          mounted: r,
          updated: r,
        }),
      r.deep && po(a),
      o.push({
        dir: r,
        instance: n,
        value: a,
        oldValue: void 0,
        arg: s,
        modifiers: l,
      }));
  }
  return e;
}
function uo(e, t, n, o) {
  const i = e.dirs,
    r = t && t.dirs;
  for (let a = 0; a < i.length; a++) {
    const s = i[a];
    r && (s.oldValue = r[a].value);
    let l = s.dir[o];
    l && (io(), Ht(l, n, 8, [e.el, s, e, t]), ro());
  }
}
const Kn = Symbol("_leaveCb"),
  ar = Symbol("_enterCb");
function Sm() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    tt(() => {
      e.isMounted = !0;
    }),
    yn(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const Lt = [Function, Array],
  Vd = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Lt,
    onEnter: Lt,
    onAfterEnter: Lt,
    onEnterCancelled: Lt,
    onBeforeLeave: Lt,
    onLeave: Lt,
    onAfterLeave: Lt,
    onLeaveCancelled: Lt,
    onBeforeAppear: Lt,
    onAppear: Lt,
    onAfterAppear: Lt,
    onAppearCancelled: Lt,
  },
  Cm = {
    name: "BaseTransition",
    props: Vd,
    setup(e, { slots: t }) {
      const n = tn(),
        o = Sm();
      return () => {
        const i = t.default && Hd(t.default(), !0);
        if (!i || !i.length) return;
        let r = i[0];
        if (i.length > 1) {
          for (const h of i)
            if (h.type !== kt) {
              r = h;
              break;
            }
        }
        const a = Fe(e),
          { mode: s } = a;
        if (o.isLeaving) return Ea(r);
        const l = Ql(r);
        if (!l) return Ea(r);
        const c = ls(l, a, o, n);
        cs(l, c);
        const u = n.subTree,
          f = u && Ql(u);
        if (f && f.type !== kt && !bo(l, f)) {
          const h = ls(f, a, o, n);
          if ((cs(f, h), s === "out-in" && l.type !== kt))
            return (
              (o.isLeaving = !0),
              (h.afterLeave = () => {
                (o.isLeaving = !1),
                  n.update.active !== !1 && ((n.effect.dirty = !0), n.update());
              }),
              Ea(r)
            );
          s === "in-out" &&
            l.type !== kt &&
            (h.delayLeave = (g, S, p) => {
              const y = Nd(o, f);
              (y[String(f.key)] = f),
                (g[Kn] = () => {
                  S(), (g[Kn] = void 0), delete c.delayedLeave;
                }),
                (c.delayedLeave = p);
            });
        }
        return r;
      };
    },
  },
  _m = Cm;
function Nd(e, t) {
  const { leavingVNodes: n } = e;
  let o = n.get(t.type);
  return o || ((o = Object.create(null)), n.set(t.type, o)), o;
}
function ls(e, t, n, o) {
  const {
      appear: i,
      mode: r,
      persisted: a = !1,
      onBeforeEnter: s,
      onEnter: l,
      onAfterEnter: c,
      onEnterCancelled: u,
      onBeforeLeave: f,
      onLeave: h,
      onAfterLeave: g,
      onLeaveCancelled: S,
      onBeforeAppear: p,
      onAppear: y,
      onAfterAppear: v,
      onAppearCancelled: m,
    } = t,
    b = String(e.key),
    w = Nd(n, e),
    C = (_, R) => {
      _ && Ht(_, o, 9, R);
    },
    k = (_, R) => {
      const O = R[1];
      C(_, R),
        Ce(_) ? _.every((x) => x.length <= 1) && O() : _.length <= 1 && O();
    },
    I = {
      mode: r,
      persisted: a,
      beforeEnter(_) {
        let R = s;
        if (!n.isMounted)
          if (i) R = p || s;
          else return;
        _[Kn] && _[Kn](!0);
        const O = w[b];
        O && bo(e, O) && O.el[Kn] && O.el[Kn](), C(R, [_]);
      },
      enter(_) {
        let R = l,
          O = c,
          x = u;
        if (!n.isMounted)
          if (i) (R = y || l), (O = v || c), (x = m || u);
          else return;
        let P = !1;
        const D = (_[ar] = (Q) => {
          P ||
            ((P = !0),
            Q ? C(x, [_]) : C(O, [_]),
            I.delayedLeave && I.delayedLeave(),
            (_[ar] = void 0));
        });
        R ? k(R, [_, D]) : D();
      },
      leave(_, R) {
        const O = String(e.key);
        if ((_[ar] && _[ar](!0), n.isUnmounting)) return R();
        C(f, [_]);
        let x = !1;
        const P = (_[Kn] = (D) => {
          x ||
            ((x = !0),
            R(),
            D ? C(S, [_]) : C(g, [_]),
            (_[Kn] = void 0),
            w[O] === e && delete w[O]);
        });
        (w[O] = e), h ? k(h, [_, P]) : P();
      },
      clone(_) {
        return ls(_, t, n, o);
      },
    };
  return I;
}
function Ea(e) {
  if (na(e)) return (e = no(e)), (e.children = null), e;
}
function Ql(e) {
  if (!na(e)) return e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && Pe(n.default)) return n.default();
  }
}
function cs(e, t) {
  e.shapeFlag & 6 && e.component
    ? cs(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function Hd(e, t = !1, n) {
  let o = [],
    i = 0;
  for (let r = 0; r < e.length; r++) {
    let a = e[r];
    const s = n == null ? a.key : String(n) + String(a.key != null ? a.key : r);
    a.type === Ve
      ? (a.patchFlag & 128 && i++, (o = o.concat(Hd(a.children, t, s))))
      : (t || a.type !== kt) &&
        o.push(
          s != null
            ? no(a, {
                key: s,
              })
            : a
        );
  }
  if (i > 1) for (let r = 0; r < o.length; r++) o[r].patchFlag = -2;
  return o;
}
/*! #__NO_SIDE_EFFECTS__ */
function j(e, t) {
  return Pe(e)
    ? it(
        {
          name: e.name,
        },
        t,
        {
          setup: e,
        }
      )
    : e;
}
const Ti = (e) => !!e.type.__asyncLoader,
  na = (e) => e.type.__isKeepAlive;
function mn(e, t) {
  zd(e, "a", t);
}
function vn(e, t) {
  zd(e, "da", t);
}
function zd(e, t, n = ut) {
  const o =
    e.__wdc ||
    (e.__wdc = () => {
      let i = n;
      for (; i; ) {
        if (i.isDeactivated) return;
        i = i.parent;
      }
      return e();
    });
  if ((oa(t, o, n), n)) {
    let i = n.parent;
    for (; i && i.parent; )
      na(i.parent.vnode) && km(o, t, n, i), (i = i.parent);
  }
}
function km(e, t, n, o) {
  const i = oa(t, e, o, !0);
  ai(() => {
    zs(o[t], i);
  }, n);
}
function oa(e, t, n = ut, o = !1) {
  if (n) {
    const i = n[e] || (n[e] = []),
      r =
        t.__weh ||
        (t.__weh = (...a) => {
          if (n.isUnmounted) return;
          io();
          const s = Xi(n),
            l = Ht(t, n, e, a);
          return s(), ro(), l;
        });
    return o ? i.unshift(r) : i.push(r), r;
  }
}
const On =
    (e) =>
    (t, n = ut) =>
      (!ia || e === "sp") && oa(e, (...o) => t(...o), n),
  xm = On("bm"),
  tt = On("m"),
  jd = On("bu"),
  Ud = On("u"),
  yn = On("bum"),
  ai = On("um"),
  Tm = On("sp"),
  Em = On("rtg"),
  Pm = On("rtc");
function Am(e, t = ut) {
  oa("ec", e, t);
}
function Hi(e, t, n, o) {
  let i;
  const r = n;
  if (Ce(e) || Xe(e)) {
    i = new Array(e.length);
    for (let a = 0, s = e.length; a < s; a++) i[a] = t(e[a], a, void 0, r);
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let a = 0; a < e; a++) i[a] = t(a + 1, a, void 0, r);
  } else if (Ke(e))
    if (e[Symbol.iterator]) i = Array.from(e, (a, s) => t(a, s, void 0, r));
    else {
      const a = Object.keys(e);
      i = new Array(a.length);
      for (let s = 0, l = a.length; s < l; s++) {
        const c = a[s];
        i[s] = t(e[c], c, s, r);
      }
    }
  else i = [];
  return i;
}
function Im(e, t) {
  for (let n = 0; n < t.length; n++) {
    const o = t[n];
    if (Ce(o)) for (let i = 0; i < o.length; i++) e[o[i].name] = o[i].fn;
    else
      o &&
        (e[o.name] = o.key
          ? (...i) => {
              const r = o.fn(...i);
              return r && (r.key = o.key), r;
            }
          : o.fn);
  }
  return e;
}
function xA(e, t, n = {}, o, i) {
  if (ot.isCE || (ot.parent && Ti(ot.parent) && ot.parent.isCE))
    return (n.name = t), d("slot", n, o);
  let r = e[t];
  r && r._c && (r._d = !1), me();
  const a = r && Wd(r(n)),
    s = Pt(
      Ve,
      {
        key: n.key || (a && a.key) || `_${t}`,
      },
      a || [],
      a && e._ === 1 ? 64 : -2
    );
  return r && r._c && (r._d = !0), s;
}
function Wd(e) {
  return e.some((t) =>
    ji(t) ? !(t.type === kt || (t.type === Ve && !Wd(t.children))) : !0
  )
    ? e
    : null;
}
const us = (e) => (e ? (sf(e) ? ra(e) || e.proxy : us(e.parent)) : null),
  Ei = it(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => us(e.parent),
    $root: (e) => us(e.root),
    $emit: (e) => e.emit,
    $options: (e) => ol(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        (e.effect.dirty = !0), Js(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = Ae.bind(e.proxy)),
    $watch: (e) => wm.bind(e),
  }),
  Pa = (e, t) => e !== qe && !e.__isScriptSetup && Le(e, t),
  Rm = {
    get({ _: e }, t) {
      if (t === "__v_skip") return !0;
      const {
        ctx: n,
        setupState: o,
        data: i,
        props: r,
        accessCache: a,
        type: s,
        appContext: l,
      } = e;
      let c;
      if (t[0] !== "$") {
        const g = a[t];
        if (g !== void 0)
          switch (g) {
            case 1:
              return o[t];
            case 2:
              return i[t];
            case 4:
              return n[t];
            case 3:
              return r[t];
          }
        else {
          if (Pa(o, t)) return (a[t] = 1), o[t];
          if (i !== qe && Le(i, t)) return (a[t] = 2), i[t];
          if ((c = e.propsOptions[0]) && Le(c, t)) return (a[t] = 3), r[t];
          if (n !== qe && Le(n, t)) return (a[t] = 4), n[t];
          ds && (a[t] = 0);
        }
      }
      const u = Ei[t];
      let f, h;
      if (u) return t === "$attrs" && It(e.attrs, "get", ""), u(e);
      if ((f = s.__cssModules) && (f = f[t])) return f;
      if (n !== qe && Le(n, t)) return (a[t] = 4), n[t];
      if (((h = l.config.globalProperties), Le(h, t))) return h[t];
    },
    set({ _: e }, t, n) {
      const { data: o, setupState: i, ctx: r } = e;
      return Pa(i, t)
        ? ((i[t] = n), !0)
        : o !== qe && Le(o, t)
        ? ((o[t] = n), !0)
        : Le(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((r[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: o,
          appContext: i,
          propsOptions: r,
        },
      },
      a
    ) {
      let s;
      return (
        !!n[a] ||
        (e !== qe && Le(e, a)) ||
        Pa(t, a) ||
        ((s = r[0]) && Le(s, a)) ||
        Le(o, a) ||
        Le(Ei, a) ||
        Le(i.config.globalProperties, a)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : Le(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function Xl(e) {
  return Ce(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let ds = !0;
function Om(e) {
  const t = ol(e),
    n = e.proxy,
    o = e.ctx;
  (ds = !1), t.beforeCreate && Jl(t.beforeCreate, e, "bc");
  const {
    data: i,
    computed: r,
    methods: a,
    watch: s,
    provide: l,
    inject: c,
    created: u,
    beforeMount: f,
    mounted: h,
    beforeUpdate: g,
    updated: S,
    activated: p,
    deactivated: y,
    beforeDestroy: v,
    beforeUnmount: m,
    destroyed: b,
    unmounted: w,
    render: C,
    renderTracked: k,
    renderTriggered: I,
    errorCaptured: _,
    serverPrefetch: R,
    expose: O,
    inheritAttrs: x,
    components: P,
    directives: D,
    filters: Q,
  } = t;
  if ((c && Bm(c, o, null), a))
    for (const J in a) {
      const se = a[J];
      Pe(se) && (o[J] = se.bind(n));
    }
  if (i) {
    const J = i.call(n, n);
    Ke(J) && (e.data = Ze(J));
  }
  if (((ds = !0), r))
    for (const J in r) {
      const se = r[J],
        Ie = Pe(se) ? se.bind(n, n) : Pe(se.get) ? se.get.bind(n, n) : Vt,
        De = !Pe(se) && Pe(se.set) ? se.set.bind(n) : Vt,
        M = B({
          get: Ie,
          set: De,
        });
      Object.defineProperty(o, J, {
        enumerable: !0,
        configurable: !0,
        get: () => M.value,
        set: (K) => (M.value = K),
      });
    }
  if (s) for (const J in s) qd(s[J], o, n, J);
  if (l) {
    const J = Pe(l) ? l.call(n) : l;
    Reflect.ownKeys(J).forEach((se) => {
      Tn(se, J[se]);
    });
  }
  u && Jl(u, e, "c");
  function H(J, se) {
    Ce(se) ? se.forEach((Ie) => J(Ie.bind(n))) : se && J(se.bind(n));
  }
  if (
    (H(xm, f),
    H(tt, h),
    H(jd, g),
    H(Ud, S),
    H(mn, p),
    H(vn, y),
    H(Am, _),
    H(Pm, k),
    H(Em, I),
    H(yn, m),
    H(ai, w),
    H(Tm, R),
    Ce(O))
  )
    if (O.length) {
      const J = e.exposed || (e.exposed = {});
      O.forEach((se) => {
        Object.defineProperty(J, se, {
          get: () => n[se],
          set: (Ie) => (n[se] = Ie),
        });
      });
    } else e.exposed || (e.exposed = {});
  C && e.render === Vt && (e.render = C),
    x != null && (e.inheritAttrs = x),
    P && (e.components = P),
    D && (e.directives = D);
}
function Bm(e, t, n = Vt) {
  Ce(e) && (e = fs(e));
  for (const o in e) {
    const i = e[o];
    let r;
    Ke(i)
      ? "default" in i
        ? (r = xt(i.from || o, i.default, !0))
        : (r = xt(i.from || o))
      : (r = xt(i)),
      rt(r)
        ? Object.defineProperty(t, o, {
            enumerable: !0,
            configurable: !0,
            get: () => r.value,
            set: (a) => (r.value = a),
          })
        : (t[o] = r);
  }
}
function Jl(e, t, n) {
  Ht(Ce(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function qd(e, t, n, o) {
  const i = o.includes(".") ? Fd(n, o) : () => n[o];
  if (Xe(e)) {
    const r = t[e];
    Pe(r) && ie(i, r);
  } else if (Pe(e)) ie(i, e.bind(n));
  else if (Ke(e))
    if (Ce(e)) e.forEach((r) => qd(r, t, n, o));
    else {
      const r = Pe(e.handler) ? e.handler.bind(n) : t[e.handler];
      Pe(r) && ie(i, r, e);
    }
}
function ol(e) {
  const t = e.type,
    { mixins: n, extends: o } = t,
    {
      mixins: i,
      optionsCache: r,
      config: { optionMergeStrategies: a },
    } = e.appContext,
    s = r.get(t);
  let l;
  return (
    s
      ? (l = s)
      : !i.length && !n && !o
      ? (l = t)
      : ((l = {}), i.length && i.forEach((c) => Fr(l, c, a, !0)), Fr(l, t, a)),
    Ke(t) && r.set(t, l),
    l
  );
}
function Fr(e, t, n, o = !1) {
  const { mixins: i, extends: r } = t;
  r && Fr(e, r, n, !0), i && i.forEach((a) => Fr(e, a, n, !0));
  for (const a in t)
    if (!(o && a === "expose")) {
      const s = Dm[a] || (n && n[a]);
      e[a] = s ? s(e[a], t[a]) : t[a];
    }
  return e;
}
const Dm = {
  data: ec,
  props: tc,
  emits: tc,
  methods: ki,
  computed: ki,
  beforeCreate: _t,
  created: _t,
  beforeMount: _t,
  mounted: _t,
  beforeUpdate: _t,
  updated: _t,
  beforeDestroy: _t,
  beforeUnmount: _t,
  destroyed: _t,
  unmounted: _t,
  activated: _t,
  deactivated: _t,
  errorCaptured: _t,
  serverPrefetch: _t,
  components: ki,
  directives: ki,
  watch: Lm,
  provide: ec,
  inject: $m,
};
function ec(e, t) {
  return t
    ? e
      ? function () {
          return it(
            Pe(e) ? e.call(this, this) : e,
            Pe(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function $m(e, t) {
  return ki(fs(e), fs(t));
}
function fs(e) {
  if (Ce(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function _t(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ki(e, t) {
  return e ? it(Object.create(null), e, t) : t;
}
function tc(e, t) {
  return e
    ? Ce(e) && Ce(t)
      ? [...new Set([...e, ...t])]
      : it(Object.create(null), Xl(e), Xl(t ?? {}))
    : t;
}
function Lm(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = it(Object.create(null), e);
  for (const o in t) n[o] = _t(e[o], t[o]);
  return n;
}
function Yd() {
  return {
    app: null,
    config: {
      isNativeTag: gg,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Mm = 0;
function Fm(e, t) {
  return function (o, i = null) {
    Pe(o) || (o = it({}, o)), i != null && !Ke(i) && (i = null);
    const r = Yd(),
      a = new WeakSet();
    let s = !1;
    const l = (r.app = {
      _uid: Mm++,
      _component: o,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: u0,
      get config() {
        return r.config;
      },
      set config(c) {},
      use(c, ...u) {
        return (
          a.has(c) ||
            (c && Pe(c.install)
              ? (a.add(c), c.install(l, ...u))
              : Pe(c) && (a.add(c), c(l, ...u))),
          l
        );
      },
      mixin(c) {
        return r.mixins.includes(c) || r.mixins.push(c), l;
      },
      component(c, u) {
        return u ? ((r.components[c] = u), l) : r.components[c];
      },
      directive(c, u) {
        return u ? ((r.directives[c] = u), l) : r.directives[c];
      },
      mount(c, u, f) {
        if (!s) {
          const h = d(o, i);
          return (
            (h.appContext = r),
            f === !0 ? (f = "svg") : f === !1 && (f = void 0),
            u && t ? t(h, c) : e(h, c, f),
            (s = !0),
            (l._container = c),
            (c.__vue_app__ = l),
            ra(h.component) || h.component.proxy
          );
        }
      },
      unmount() {
        s && (e(null, l._container), delete l._container.__vue_app__);
      },
      provide(c, u) {
        return (r.provides[c] = u), l;
      },
      runWithContext(c) {
        const u = Zo;
        Zo = l;
        try {
          return c();
        } finally {
          Zo = u;
        }
      },
    });
    return l;
  };
}
let Zo = null;
function Tn(e, t) {
  if (ut) {
    let n = ut.provides;
    const o = ut.parent && ut.parent.provides;
    o === n && (n = ut.provides = Object.create(o)), (n[e] = t);
  }
}
function xt(e, t, n = !1) {
  const o = ut || ot;
  if (o || Zo) {
    const i = o
      ? o.parent == null
        ? o.vnode.appContext && o.vnode.appContext.provides
        : o.parent.provides
      : Zo._context.provides;
    if (i && e in i) return i[e];
    if (arguments.length > 1) return n && Pe(t) ? t.call(o && o.proxy) : t;
  }
}
function Vm() {
  return !!(ut || ot || Zo);
}
const Kd = {},
  Zd = () => Object.create(Kd),
  Gd = (e) => Object.getPrototypeOf(e) === Kd;
function Nm(e, t, n, o = !1) {
  const i = {},
    r = Zd();
  (e.propsDefaults = Object.create(null)), Qd(e, t, i, r);
  for (const a in e.propsOptions[0]) a in i || (i[a] = void 0);
  n ? (e.props = o ? i : kd(i)) : e.type.props ? (e.props = i) : (e.props = r),
    (e.attrs = r);
}
function Hm(e, t, n, o) {
  const {
      props: i,
      attrs: r,
      vnode: { patchFlag: a },
    } = e,
    s = Fe(i),
    [l] = e.propsOptions;
  let c = !1;
  if ((o || a > 0) && !(a & 16)) {
    if (a & 8) {
      const u = e.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let h = u[f];
        if (ea(e.emitsOptions, h)) continue;
        const g = t[h];
        if (l)
          if (Le(r, h)) g !== r[h] && ((r[h] = g), (c = !0));
          else {
            const S = gn(h);
            i[S] = hs(l, s, S, g, e, !1);
          }
        else g !== r[h] && ((r[h] = g), (c = !0));
      }
    }
  } else {
    Qd(e, t, i, r) && (c = !0);
    let u;
    for (const f in s)
      (!t || (!Le(t, f) && ((u = oo(f)) === f || !Le(t, u)))) &&
        (l
          ? n &&
            (n[f] !== void 0 || n[u] !== void 0) &&
            (i[f] = hs(l, s, f, void 0, e, !0))
          : delete i[f]);
    if (r !== s)
      for (const f in r) (!t || !Le(t, f)) && (delete r[f], (c = !0));
  }
  c && xn(e.attrs, "set", "");
}
function Qd(e, t, n, o) {
  const [i, r] = e.propsOptions;
  let a = !1,
    s;
  if (t)
    for (let l in t) {
      if (xi(l)) continue;
      const c = t[l];
      let u;
      i && Le(i, (u = gn(l)))
        ? !r || !r.includes(u)
          ? (n[u] = c)
          : ((s || (s = {}))[u] = c)
        : ea(e.emitsOptions, l) ||
          ((!(l in o) || c !== o[l]) && ((o[l] = c), (a = !0)));
    }
  if (r) {
    const l = Fe(n),
      c = s || qe;
    for (let u = 0; u < r.length; u++) {
      const f = r[u];
      n[f] = hs(i, l, f, c[f], e, !Le(c, f));
    }
  }
  return a;
}
function hs(e, t, n, o, i, r) {
  const a = e[n];
  if (a != null) {
    const s = Le(a, "default");
    if (s && o === void 0) {
      const l = a.default;
      if (a.type !== Function && !a.skipFactory && Pe(l)) {
        const { propsDefaults: c } = i;
        if (n in c) o = c[n];
        else {
          const u = Xi(i);
          (o = c[n] = l.call(null, t)), u();
        }
      } else o = l;
    }
    a[0] &&
      (r && !s ? (o = !1) : a[1] && (o === "" || o === oo(n)) && (o = !0));
  }
  return o;
}
function Xd(e, t, n = !1) {
  const o = t.propsCache,
    i = o.get(e);
  if (i) return i;
  const r = e.props,
    a = {},
    s = [];
  let l = !1;
  if (!Pe(e)) {
    const u = (f) => {
      l = !0;
      const [h, g] = Xd(f, t, !0);
      it(a, h), g && s.push(...g);
    };
    !n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u);
  }
  if (!r && !l) return Ke(e) && o.set(e, qo), qo;
  if (Ce(r))
    for (let u = 0; u < r.length; u++) {
      const f = gn(r[u]);
      nc(f) && (a[f] = qe);
    }
  else if (r)
    for (const u in r) {
      const f = gn(u);
      if (nc(f)) {
        const h = r[u],
          g = (a[f] =
            Ce(h) || Pe(h)
              ? {
                  type: h,
                }
              : it({}, h));
        if (g) {
          const S = rc(Boolean, g.type),
            p = rc(String, g.type);
          (g[0] = S > -1),
            (g[1] = p < 0 || S < p),
            (S > -1 || Le(g, "default")) && s.push(f);
        }
      }
    }
  const c = [a, s];
  return Ke(e) && o.set(e, c), c;
}
function nc(e) {
  return e[0] !== "$" && !xi(e);
}
function oc(e) {
  return e === null
    ? "null"
    : typeof e == "function"
    ? e.name || ""
    : (typeof e == "object" && e.constructor && e.constructor.name) || "";
}
function ic(e, t) {
  return oc(e) === oc(t);
}
function rc(e, t) {
  return Ce(t) ? t.findIndex((n) => ic(n, e)) : Pe(t) && ic(t, e) ? 0 : -1;
}
const Jd = (e) => e[0] === "_" || e === "$stable",
  il = (e) => (Ce(e) ? e.map(un) : [un(e)]),
  zm = (e, t, n) => {
    if (t._n) return t;
    const o = ge((...i) => il(t(...i)), n);
    return (o._c = !1), o;
  },
  ef = (e, t, n) => {
    const o = e._ctx;
    for (const i in e) {
      if (Jd(i)) continue;
      const r = e[i];
      if (Pe(r)) t[i] = zm(i, r, o);
      else if (r != null) {
        const a = il(r);
        t[i] = () => a;
      }
    }
  },
  tf = (e, t) => {
    const n = il(t);
    e.slots.default = () => n;
  },
  jm = (e, t) => {
    const n = (e.slots = Zd());
    if (e.vnode.shapeFlag & 32) {
      const o = t._;
      o ? (it(n, t), ad(n, "_", o, !0)) : ef(t, n);
    } else t && tf(e, t);
  },
  Um = (e, t, n) => {
    const { vnode: o, slots: i } = e;
    let r = !0,
      a = qe;
    if (o.shapeFlag & 32) {
      const s = t._;
      s
        ? n && s === 1
          ? (r = !1)
          : (it(i, t), !n && s === 1 && delete i._)
        : ((r = !t.$stable), ef(t, i)),
        (a = t);
    } else
      t &&
        (tf(e, t),
        (a = {
          default: 1,
        }));
    if (r) for (const s in i) !Jd(s) && a[s] == null && delete i[s];
  };
function gs(e, t, n, o, i = !1) {
  if (Ce(e)) {
    e.forEach((h, g) => gs(h, t && (Ce(t) ? t[g] : t), n, o, i));
    return;
  }
  if (Ti(o) && !i) return;
  const r = o.shapeFlag & 4 ? ra(o.component) || o.component.proxy : o.el,
    a = i ? null : r,
    { i: s, r: l } = e,
    c = t && t.r,
    u = s.refs === qe ? (s.refs = {}) : s.refs,
    f = s.setupState;
  if (
    (c != null &&
      c !== l &&
      (Xe(c)
        ? ((u[c] = null), Le(f, c) && (f[c] = null))
        : rt(c) && (c.value = null)),
    Pe(l))
  )
    eo(l, s, 12, [a, u]);
  else {
    const h = Xe(l),
      g = rt(l);
    if (h || g) {
      const S = () => {
        if (e.f) {
          const p = h ? (Le(f, l) ? f[l] : u[l]) : l.value;
          i
            ? Ce(p) && zs(p, r)
            : Ce(p)
            ? p.includes(r) || p.push(r)
            : h
            ? ((u[l] = [r]), Le(f, l) && (f[l] = u[l]))
            : ((l.value = [r]), e.k && (u[e.k] = l.value));
        } else
          h
            ? ((u[l] = a), Le(f, l) && (f[l] = a))
            : g && ((l.value = a), e.k && (u[e.k] = a));
      };
      a ? ((S.id = -1), Tt(S, n)) : S();
    }
  }
}
const Tt = ym;
function Wm(e) {
  return qm(e);
}
function qm(e, t) {
  const n = sd();
  n.__VUE__ = !0;
  const {
      insert: o,
      remove: i,
      patchProp: r,
      createElement: a,
      createText: s,
      createComment: l,
      setText: c,
      setElementText: u,
      parentNode: f,
      nextSibling: h,
      setScopeId: g = Vt,
      insertStaticContent: S,
    } = e,
    p = (
      T,
      A,
      L,
      q = null,
      U = null,
      ae = null,
      de = void 0,
      re = null,
      le = !!A.dynamicChildren
    ) => {
      if (T === A) return;
      T && !bo(T, A) && ((q = E(T)), K(T, U, ae, !0), (T = null)),
        A.patchFlag === -2 && ((le = !1), (A.dynamicChildren = null));
      const { type: te, ref: he, shapeFlag: we } = A;
      switch (te) {
        case Qi:
          y(T, A, L, q);
          break;
        case kt:
          v(T, A, L, q);
          break;
        case Ia:
          T == null && m(A, L, q, de);
          break;
        case Ve:
          P(T, A, L, q, U, ae, de, re, le);
          break;
        default:
          we & 1
            ? C(T, A, L, q, U, ae, de, re, le)
            : we & 6
            ? D(T, A, L, q, U, ae, de, re, le)
            : (we & 64 || we & 128) &&
              te.process(T, A, L, q, U, ae, de, re, le, ee);
      }
      he != null && U && gs(he, T && T.ref, ae, A || T, !A);
    },
    y = (T, A, L, q) => {
      if (T == null) o((A.el = s(A.children)), L, q);
      else {
        const U = (A.el = T.el);
        A.children !== T.children && c(U, A.children);
      }
    },
    v = (T, A, L, q) => {
      T == null ? o((A.el = l(A.children || "")), L, q) : (A.el = T.el);
    },
    m = (T, A, L, q) => {
      [T.el, T.anchor] = S(T.children, A, L, q, T.el, T.anchor);
    },
    b = ({ el: T, anchor: A }, L, q) => {
      let U;
      for (; T && T !== A; ) (U = h(T)), o(T, L, q), (T = U);
      o(A, L, q);
    },
    w = ({ el: T, anchor: A }) => {
      let L;
      for (; T && T !== A; ) (L = h(T)), i(T), (T = L);
      i(A);
    },
    C = (T, A, L, q, U, ae, de, re, le) => {
      A.type === "svg" ? (de = "svg") : A.type === "math" && (de = "mathml"),
        T == null ? k(A, L, q, U, ae, de, re, le) : R(T, A, U, ae, de, re, le);
    },
    k = (T, A, L, q, U, ae, de, re) => {
      let le, te;
      const { props: he, shapeFlag: we, transition: pe, dirs: _e } = T;
      if (
        ((le = T.el = a(T.type, ae, he && he.is, he)),
        we & 8
          ? u(le, T.children)
          : we & 16 && _(T.children, le, null, q, U, Aa(T, ae), de, re),
        _e && uo(T, null, q, "created"),
        I(le, T, T.scopeId, de, q),
        he)
      ) {
        for (const Ue in he)
          Ue !== "value" &&
            !xi(Ue) &&
            r(le, Ue, null, he[Ue], ae, T.children, q, U, ue);
        "value" in he && r(le, "value", null, he.value, ae),
          (te = he.onVnodeBeforeMount) && sn(te, q, T);
      }
      _e && uo(T, null, q, "beforeMount");
      const Be = Ym(U, pe);
      Be && pe.beforeEnter(le),
        o(le, A, L),
        ((te = he && he.onVnodeMounted) || Be || _e) &&
          Tt(() => {
            te && sn(te, q, T),
              Be && pe.enter(le),
              _e && uo(T, null, q, "mounted");
          }, U);
    },
    I = (T, A, L, q, U) => {
      if ((L && g(T, L), q)) for (let ae = 0; ae < q.length; ae++) g(T, q[ae]);
      if (U) {
        let ae = U.subTree;
        if (A === ae) {
          const de = U.vnode;
          I(T, de, de.scopeId, de.slotScopeIds, U.parent);
        }
      }
    },
    _ = (T, A, L, q, U, ae, de, re, le = 0) => {
      for (let te = le; te < T.length; te++) {
        const he = (T[te] = re ? Zn(T[te]) : un(T[te]));
        p(null, he, A, L, q, U, ae, de, re);
      }
    },
    R = (T, A, L, q, U, ae, de) => {
      const re = (A.el = T.el);
      let { patchFlag: le, dynamicChildren: te, dirs: he } = A;
      le |= T.patchFlag & 16;
      const we = T.props || qe,
        pe = A.props || qe;
      let _e;
      if (
        (L && fo(L, !1),
        (_e = pe.onVnodeBeforeUpdate) && sn(_e, L, A, T),
        he && uo(A, T, L, "beforeUpdate"),
        L && fo(L, !0),
        te
          ? O(T.dynamicChildren, te, re, L, q, Aa(A, U), ae)
          : de || se(T, A, re, null, L, q, Aa(A, U), ae, !1),
        le > 0)
      ) {
        if (le & 16) x(re, A, we, pe, L, q, U);
        else if (
          (le & 2 && we.class !== pe.class && r(re, "class", null, pe.class, U),
          le & 4 && r(re, "style", we.style, pe.style, U),
          le & 8)
        ) {
          const Be = A.dynamicProps;
          for (let Ue = 0; Ue < Be.length; Ue++) {
            const Ge = Be[Ue],
              ct = we[Ge],
              Wt = pe[Ge];
            (Wt !== ct || Ge === "value") &&
              r(re, Ge, ct, Wt, U, T.children, L, q, ue);
          }
        }
        le & 1 && T.children !== A.children && u(re, A.children);
      } else !de && te == null && x(re, A, we, pe, L, q, U);
      ((_e = pe.onVnodeUpdated) || he) &&
        Tt(() => {
          _e && sn(_e, L, A, T), he && uo(A, T, L, "updated");
        }, q);
    },
    O = (T, A, L, q, U, ae, de) => {
      for (let re = 0; re < A.length; re++) {
        const le = T[re],
          te = A[re],
          he =
            le.el && (le.type === Ve || !bo(le, te) || le.shapeFlag & 70)
              ? f(le.el)
              : L;
        p(le, te, he, null, q, U, ae, de, !0);
      }
    },
    x = (T, A, L, q, U, ae, de) => {
      if (L !== q) {
        if (L !== qe)
          for (const re in L)
            !xi(re) &&
              !(re in q) &&
              r(T, re, L[re], null, de, A.children, U, ae, ue);
        for (const re in q) {
          if (xi(re)) continue;
          const le = q[re],
            te = L[re];
          le !== te &&
            re !== "value" &&
            r(T, re, te, le, de, A.children, U, ae, ue);
        }
        "value" in q && r(T, "value", L.value, q.value, de);
      }
    },
    P = (T, A, L, q, U, ae, de, re, le) => {
      const te = (A.el = T ? T.el : s("")),
        he = (A.anchor = T ? T.anchor : s(""));
      let { patchFlag: we, dynamicChildren: pe, slotScopeIds: _e } = A;
      _e && (re = re ? re.concat(_e) : _e),
        T == null
          ? (o(te, L, q),
            o(he, L, q),
            _(A.children || [], L, he, U, ae, de, re, le))
          : we > 0 && we & 64 && pe && T.dynamicChildren
          ? (O(T.dynamicChildren, pe, L, U, ae, de, re),
            (A.key != null || (U && A === U.subTree)) && rl(T, A, !0))
          : se(T, A, L, he, U, ae, de, re, le);
    },
    D = (T, A, L, q, U, ae, de, re, le) => {
      (A.slotScopeIds = re),
        T == null
          ? A.shapeFlag & 512
            ? U.ctx.activate(A, L, q, de, le)
            : Q(A, L, q, U, ae, de, le)
          : oe(T, A, le);
    },
    Q = (T, A, L, q, U, ae, de) => {
      const re = (T.component = o0(T, q, U));
      if ((na(T) && (re.ctx.renderer = ee), i0(re), re.asyncDep)) {
        if ((U && U.registerDep(re, H), !T.el)) {
          const le = (re.subTree = d(kt));
          v(null, le, A, L);
        }
      } else H(re, T, A, L, U, ae, de);
    },
    oe = (T, A, L) => {
      const q = (A.component = T.component);
      if (dm(T, A, L))
        if (q.asyncDep && !q.asyncResolved) {
          J(q, A, L);
          return;
        } else (q.next = A), rm(q.update), (q.effect.dirty = !0), q.update();
      else (A.el = T.el), (q.vnode = A);
    },
    H = (T, A, L, q, U, ae, de) => {
      const re = () => {
          if (T.isMounted) {
            let { next: he, bu: we, u: pe, parent: _e, vnode: Be } = T;
            {
              const Ro = nf(T);
              if (Ro) {
                he && ((he.el = Be.el), J(T, he, de)),
                  Ro.asyncDep.then(() => {
                    T.isUnmounted || re();
                  });
                return;
              }
            }
            let Ue = he,
              Ge;
            fo(T, !1),
              he ? ((he.el = Be.el), J(T, he, de)) : (he = Be),
              we && ka(we),
              (Ge = he.props && he.props.onVnodeBeforeUpdate) &&
                sn(Ge, _e, he, Be),
              fo(T, !0);
            const ct = Ta(T),
              Wt = T.subTree;
            (T.subTree = ct),
              p(Wt, ct, f(Wt.el), E(Wt), T, U, ae),
              (he.el = ct.el),
              Ue === null && fm(T, ct.el),
              pe && Tt(pe, U),
              (Ge = he.props && he.props.onVnodeUpdated) &&
                Tt(() => sn(Ge, _e, he, Be), U);
          } else {
            let he;
            const { el: we, props: pe } = A,
              { bm: _e, m: Be, parent: Ue } = T,
              Ge = Ti(A);
            if (
              (fo(T, !1),
              _e && ka(_e),
              !Ge && (he = pe && pe.onVnodeBeforeMount) && sn(he, Ue, A),
              fo(T, !0),
              we && Ee)
            ) {
              const ct = () => {
                (T.subTree = Ta(T)), Ee(we, T.subTree, T, U, null);
              };
              Ge
                ? A.type.__asyncLoader().then(() => !T.isUnmounted && ct())
                : ct();
            } else {
              const ct = (T.subTree = Ta(T));
              p(null, ct, L, q, T, U, ae), (A.el = ct.el);
            }
            if ((Be && Tt(Be, U), !Ge && (he = pe && pe.onVnodeMounted))) {
              const ct = A;
              Tt(() => sn(he, Ue, ct), U);
            }
            (A.shapeFlag & 256 ||
              (Ue && Ti(Ue.vnode) && Ue.vnode.shapeFlag & 256)) &&
              T.a &&
              Tt(T.a, U),
              (T.isMounted = !0),
              (A = L = q = null);
          }
        },
        le = (T.effect = new Us(re, Vt, () => Js(te), T.scope)),
        te = (T.update = () => {
          le.dirty && le.run();
        });
      (te.id = T.uid), fo(T, !0), te();
    },
    J = (T, A, L) => {
      A.component = T;
      const q = T.vnode.props;
      (T.vnode = A),
        (T.next = null),
        Hm(T, A.props, q, L),
        Um(T, A.children, L),
        io(),
        Kl(T),
        ro();
    },
    se = (T, A, L, q, U, ae, de, re, le = !1) => {
      const te = T && T.children,
        he = T ? T.shapeFlag : 0,
        we = A.children,
        { patchFlag: pe, shapeFlag: _e } = A;
      if (pe > 0) {
        if (pe & 128) {
          De(te, we, L, q, U, ae, de, re, le);
          return;
        } else if (pe & 256) {
          Ie(te, we, L, q, U, ae, de, re, le);
          return;
        }
      }
      _e & 8
        ? (he & 16 && ue(te, U, ae), we !== te && u(L, we))
        : he & 16
        ? _e & 16
          ? De(te, we, L, q, U, ae, de, re, le)
          : ue(te, U, ae, !0)
        : (he & 8 && u(L, ""), _e & 16 && _(we, L, q, U, ae, de, re, le));
    },
    Ie = (T, A, L, q, U, ae, de, re, le) => {
      (T = T || qo), (A = A || qo);
      const te = T.length,
        he = A.length,
        we = Math.min(te, he);
      let pe;
      for (pe = 0; pe < we; pe++) {
        const _e = (A[pe] = le ? Zn(A[pe]) : un(A[pe]));
        p(T[pe], _e, L, null, U, ae, de, re, le);
      }
      te > he ? ue(T, U, ae, !0, !1, we) : _(A, L, q, U, ae, de, re, le, we);
    },
    De = (T, A, L, q, U, ae, de, re, le) => {
      let te = 0;
      const he = A.length;
      let we = T.length - 1,
        pe = he - 1;
      for (; te <= we && te <= pe; ) {
        const _e = T[te],
          Be = (A[te] = le ? Zn(A[te]) : un(A[te]));
        if (bo(_e, Be)) p(_e, Be, L, null, U, ae, de, re, le);
        else break;
        te++;
      }
      for (; te <= we && te <= pe; ) {
        const _e = T[we],
          Be = (A[pe] = le ? Zn(A[pe]) : un(A[pe]));
        if (bo(_e, Be)) p(_e, Be, L, null, U, ae, de, re, le);
        else break;
        we--, pe--;
      }
      if (te > we) {
        if (te <= pe) {
          const _e = pe + 1,
            Be = _e < he ? A[_e].el : q;
          for (; te <= pe; )
            p(
              null,
              (A[te] = le ? Zn(A[te]) : un(A[te])),
              L,
              Be,
              U,
              ae,
              de,
              re,
              le
            ),
              te++;
        }
      } else if (te > pe) for (; te <= we; ) K(T[te], U, ae, !0), te++;
      else {
        const _e = te,
          Be = te,
          Ue = new Map();
        for (te = Be; te <= pe; te++) {
          const Rt = (A[te] = le ? Zn(A[te]) : un(A[te]));
          Rt.key != null && Ue.set(Rt.key, te);
        }
        let Ge,
          ct = 0;
        const Wt = pe - Be + 1;
        let Ro = !1,
          Ll = 0;
        const hi = new Array(Wt);
        for (te = 0; te < Wt; te++) hi[te] = 0;
        for (te = _e; te <= we; te++) {
          const Rt = T[te];
          if (ct >= Wt) {
            K(Rt, U, ae, !0);
            continue;
          }
          let an;
          if (Rt.key != null) an = Ue.get(Rt.key);
          else
            for (Ge = Be; Ge <= pe; Ge++)
              if (hi[Ge - Be] === 0 && bo(Rt, A[Ge])) {
                an = Ge;
                break;
              }
          an === void 0
            ? K(Rt, U, ae, !0)
            : ((hi[an - Be] = te + 1),
              an >= Ll ? (Ll = an) : (Ro = !0),
              p(Rt, A[an], L, null, U, ae, de, re, le),
              ct++);
        }
        const Ml = Ro ? Km(hi) : qo;
        for (Ge = Ml.length - 1, te = Wt - 1; te >= 0; te--) {
          const Rt = Be + te,
            an = A[Rt],
            Fl = Rt + 1 < he ? A[Rt + 1].el : q;
          hi[te] === 0
            ? p(null, an, L, Fl, U, ae, de, re, le)
            : Ro && (Ge < 0 || te !== Ml[Ge] ? M(an, L, Fl, 2) : Ge--);
        }
      }
    },
    M = (T, A, L, q, U = null) => {
      const {
        el: ae,
        type: de,
        transition: re,
        children: le,
        shapeFlag: te,
      } = T;
      if (te & 6) {
        M(T.component.subTree, A, L, q);
        return;
      }
      if (te & 128) {
        T.suspense.move(A, L, q);
        return;
      }
      if (te & 64) {
        de.move(T, A, L, ee);
        return;
      }
      if (de === Ve) {
        o(ae, A, L);
        for (let we = 0; we < le.length; we++) M(le[we], A, L, q);
        o(T.anchor, A, L);
        return;
      }
      if (de === Ia) {
        b(T, A, L);
        return;
      }
      if (q !== 2 && te & 1 && re)
        if (q === 0) re.beforeEnter(ae), o(ae, A, L), Tt(() => re.enter(ae), U);
        else {
          const { leave: we, delayLeave: pe, afterLeave: _e } = re,
            Be = () => o(ae, A, L),
            Ue = () => {
              we(ae, () => {
                Be(), _e && _e();
              });
            };
          pe ? pe(ae, Be, Ue) : Ue();
        }
      else o(ae, A, L);
    },
    K = (T, A, L, q = !1, U = !1) => {
      const {
        type: ae,
        props: de,
        ref: re,
        children: le,
        dynamicChildren: te,
        shapeFlag: he,
        patchFlag: we,
        dirs: pe,
      } = T;
      if ((re != null && gs(re, null, L, T, !0), he & 256)) {
        A.ctx.deactivate(T);
        return;
      }
      const _e = he & 1 && pe,
        Be = !Ti(T);
      let Ue;
      if ((Be && (Ue = de && de.onVnodeBeforeUnmount) && sn(Ue, A, T), he & 6))
        ne(T.component, L, q);
      else {
        if (he & 128) {
          T.suspense.unmount(L, q);
          return;
        }
        _e && uo(T, null, A, "beforeUnmount"),
          he & 64
            ? T.type.remove(T, A, L, U, ee, q)
            : te && (ae !== Ve || (we > 0 && we & 64))
            ? ue(te, A, L, !1, !0)
            : ((ae === Ve && we & 384) || (!U && he & 16)) && ue(le, A, L),
          q && fe(T);
      }
      ((Be && (Ue = de && de.onVnodeUnmounted)) || _e) &&
        Tt(() => {
          Ue && sn(Ue, A, T), _e && uo(T, null, A, "unmounted");
        }, L);
    },
    fe = (T) => {
      const { type: A, el: L, anchor: q, transition: U } = T;
      if (A === Ve) {
        ve(L, q);
        return;
      }
      if (A === Ia) {
        w(T);
        return;
      }
      const ae = () => {
        i(L), U && !U.persisted && U.afterLeave && U.afterLeave();
      };
      if (T.shapeFlag & 1 && U && !U.persisted) {
        const { leave: de, delayLeave: re } = U,
          le = () => de(L, ae);
        re ? re(T.el, ae, le) : le();
      } else ae();
    },
    ve = (T, A) => {
      let L;
      for (; T !== A; ) (L = h(T)), i(T), (T = L);
      i(A);
    },
    ne = (T, A, L) => {
      const { bum: q, scope: U, update: ae, subTree: de, um: re } = T;
      q && ka(q),
        U.stop(),
        ae && ((ae.active = !1), K(de, T, A, L)),
        re && Tt(re, A),
        Tt(() => {
          T.isUnmounted = !0;
        }, A),
        A &&
          A.pendingBranch &&
          !A.isUnmounted &&
          T.asyncDep &&
          !T.asyncResolved &&
          T.suspenseId === A.pendingId &&
          (A.deps--, A.deps === 0 && A.resolve());
    },
    ue = (T, A, L, q = !1, U = !1, ae = 0) => {
      for (let de = ae; de < T.length; de++) K(T[de], A, L, q, U);
    },
    E = (T) =>
      T.shapeFlag & 6
        ? E(T.component.subTree)
        : T.shapeFlag & 128
        ? T.suspense.next()
        : h(T.anchor || T.el);
  let V = !1;
  const N = (T, A, L) => {
      T == null
        ? A._vnode && K(A._vnode, null, null, !0)
        : p(A._vnode || null, T, A, null, null, null, L),
        V || ((V = !0), Kl(), Bd(), (V = !1)),
        (A._vnode = T);
    },
    ee = {
      p,
      um: K,
      m: M,
      r: fe,
      mt: Q,
      mc: _,
      pc: se,
      pbc: O,
      n: E,
      o: e,
    };
  let ye, Ee;
  return {
    render: N,
    hydrate: ye,
    createApp: Fm(N, ye),
  };
}
function Aa({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n;
}
function fo({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Ym(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function rl(e, t, n = !1) {
  const o = e.children,
    i = t.children;
  if (Ce(o) && Ce(i))
    for (let r = 0; r < o.length; r++) {
      const a = o[r];
      let s = i[r];
      s.shapeFlag & 1 &&
        !s.dynamicChildren &&
        ((s.patchFlag <= 0 || s.patchFlag === 32) &&
          ((s = i[r] = Zn(i[r])), (s.el = a.el)),
        n || rl(a, s)),
        s.type === Qi && (s.el = a.el);
    }
}
function Km(e) {
  const t = e.slice(),
    n = [0];
  let o, i, r, a, s;
  const l = e.length;
  for (o = 0; o < l; o++) {
    const c = e[o];
    if (c !== 0) {
      if (((i = n[n.length - 1]), e[i] < c)) {
        (t[o] = i), n.push(o);
        continue;
      }
      for (r = 0, a = n.length - 1; r < a; )
        (s = (r + a) >> 1), e[n[s]] < c ? (r = s + 1) : (a = s);
      c < e[n[r]] && (r > 0 && (t[o] = n[r - 1]), (n[r] = o));
    }
  }
  for (r = n.length, a = n[r - 1]; r-- > 0; ) (n[r] = a), (a = t[a]);
  return n;
}
function nf(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : nf(t);
}
const Zm = (e) => e.__isTeleport,
  Pi = (e) => e && (e.disabled || e.disabled === ""),
  ac = (e) => typeof SVGElement < "u" && e instanceof SVGElement,
  sc = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement,
  ms = (e, t) => {
    const n = e && e.to;
    return Xe(n) ? (t ? t(n) : null) : n;
  },
  Gm = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, n, o, i, r, a, s, l, c) {
      const {
          mc: u,
          pc: f,
          pbc: h,
          o: { insert: g, querySelector: S, createText: p, createComment: y },
        } = c,
        v = Pi(t.props);
      let { shapeFlag: m, children: b, dynamicChildren: w } = t;
      if (e == null) {
        const C = (t.el = p("")),
          k = (t.anchor = p(""));
        g(C, n, o), g(k, n, o);
        const I = (t.target = ms(t.props, S)),
          _ = (t.targetAnchor = p(""));
        I &&
          (g(_, I),
          a === "svg" || ac(I)
            ? (a = "svg")
            : (a === "mathml" || sc(I)) && (a = "mathml"));
        const R = (O, x) => {
          m & 16 && u(b, O, x, i, r, a, s, l);
        };
        v ? R(n, k) : I && R(I, _);
      } else {
        t.el = e.el;
        const C = (t.anchor = e.anchor),
          k = (t.target = e.target),
          I = (t.targetAnchor = e.targetAnchor),
          _ = Pi(e.props),
          R = _ ? n : k,
          O = _ ? C : I;
        if (
          (a === "svg" || ac(k)
            ? (a = "svg")
            : (a === "mathml" || sc(k)) && (a = "mathml"),
          w
            ? (h(e.dynamicChildren, w, R, i, r, a, s), rl(e, t, !0))
            : l || f(e, t, R, O, i, r, a, s, !1),
          v)
        )
          _
            ? t.props &&
              e.props &&
              t.props.to !== e.props.to &&
              (t.props.to = e.props.to)
            : sr(t, n, C, c, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const x = (t.target = ms(t.props, S));
          x && sr(t, x, null, c, 0);
        } else _ && sr(t, k, I, c, 1);
      }
      of(t);
    },
    remove(e, t, n, o, { um: i, o: { remove: r } }, a) {
      const {
        shapeFlag: s,
        children: l,
        anchor: c,
        targetAnchor: u,
        target: f,
        props: h,
      } = e;
      if ((f && r(u), a && r(c), s & 16)) {
        const g = a || !Pi(h);
        for (let S = 0; S < l.length; S++) {
          const p = l[S];
          i(p, t, n, g, !!p.dynamicChildren);
        }
      }
    },
    move: sr,
    hydrate: Qm,
  };
function sr(e, t, n, { o: { insert: o }, m: i }, r = 2) {
  r === 0 && o(e.targetAnchor, t, n);
  const { el: a, anchor: s, shapeFlag: l, children: c, props: u } = e,
    f = r === 2;
  if ((f && o(a, t, n), (!f || Pi(u)) && l & 16))
    for (let h = 0; h < c.length; h++) i(c[h], t, n, 2);
  f && o(s, t, n);
}
function Qm(
  e,
  t,
  n,
  o,
  i,
  r,
  { o: { nextSibling: a, parentNode: s, querySelector: l } },
  c
) {
  const u = (t.target = ms(t.props, l));
  if (u) {
    const f = u._lpa || u.firstChild;
    if (t.shapeFlag & 16)
      if (Pi(t.props))
        (t.anchor = c(a(e), t, s(e), n, o, i, r)), (t.targetAnchor = f);
      else {
        t.anchor = a(e);
        let h = f;
        for (; h; )
          if (
            ((h = a(h)), h && h.nodeType === 8 && h.data === "teleport anchor")
          ) {
            (t.targetAnchor = h),
              (u._lpa = t.targetAnchor && a(t.targetAnchor));
            break;
          }
        c(f, t, u, n, o, i, r);
      }
    of(t);
  }
  return t.anchor && a(t.anchor);
}
const si = Gm;
function of(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let n = e.children[0].el;
    for (; n && n !== e.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid),
        (n = n.nextSibling);
    t.ut();
  }
}
const Ve = Symbol.for("v-fgt"),
  Qi = Symbol.for("v-txt"),
  kt = Symbol.for("v-cmt"),
  Ia = Symbol.for("v-stc"),
  Ai = [];
let Gt = null;
function me(e = !1) {
  Ai.push((Gt = e ? null : []));
}
function Xm() {
  Ai.pop(), (Gt = Ai[Ai.length - 1] || null);
}
let zi = 1;
function lc(e) {
  zi += e;
}
function rf(e) {
  return (
    (e.dynamicChildren = zi > 0 ? Gt || qo : null),
    Xm(),
    zi > 0 && Gt && Gt.push(e),
    e
  );
}
function ke(e, t, n, o, i, r) {
  return rf(F(e, t, n, o, i, r, !0));
}
function Pt(e, t, n, o, i) {
  return rf(d(e, t, n, o, i, !0));
}
function ji(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function bo(e, t) {
  return e.type === t.type && e.key === t.key;
}
const af = ({ key: e }) => e ?? null,
  Ar = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? Xe(e) || rt(e) || Pe(e)
        ? {
            i: ot,
            r: e,
            k: t,
            f: !!n,
          }
        : e
      : null
  );
function F(
  e,
  t = null,
  n = null,
  o = 0,
  i = null,
  r = e === Ve ? 0 : 1,
  a = !1,
  s = !1
) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && af(t),
    ref: t && Ar(t),
    scopeId: ta,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: o,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: ot,
  };
  return (
    s
      ? (al(l, n), r & 128 && e.normalize(l))
      : n && (l.shapeFlag |= Xe(n) ? 8 : 16),
    zi > 0 &&
      !a &&
      Gt &&
      (l.patchFlag > 0 || r & 6) &&
      l.patchFlag !== 32 &&
      Gt.push(l),
    l
  );
}
const d = Jm;
function Jm(e, t = null, n = null, o = 0, i = null, r = !1) {
  if (((!e || e === gm) && (e = kt), ji(e))) {
    const s = no(e, t, !0);
    return (
      n && al(s, n),
      zi > 0 &&
        !r &&
        Gt &&
        (s.shapeFlag & 6 ? (Gt[Gt.indexOf(e)] = s) : Gt.push(s)),
      (s.patchFlag |= -2),
      s
    );
  }
  if ((c0(e) && (e = e.__vccOpts), t)) {
    t = e0(t);
    let { class: s, style: l } = t;
    s && !Xe(s) && (t.class = At(s)),
      Ke(l) && (Td(l) && !Ce(l) && (l = it({}, l)), (t.style = Nt(l)));
  }
  const a = Xe(e) ? 1 : vm(e) ? 128 : Zm(e) ? 64 : Ke(e) ? 4 : Pe(e) ? 2 : 0;
  return F(e, t, n, o, i, a, r, !0);
}
function e0(e) {
  return e ? (Td(e) || Gd(e) ? it({}, e) : e) : null;
}
function no(e, t, n = !1, o = !1) {
  const { props: i, ref: r, patchFlag: a, children: s, transition: l } = e,
    c = t ? Re(i || {}, t) : i,
    u = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: c,
      key: c && af(c),
      ref:
        t && t.ref
          ? n && r
            ? Ce(r)
              ? r.concat(Ar(t))
              : [r, Ar(t)]
            : Ar(t)
          : r,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: s,
      target: e.target,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Ve ? (a === -1 ? 16 : a | 16) : a,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: l,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && no(e.ssContent),
      ssFallback: e.ssFallback && no(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return l && o && (u.transition = l.clone(u)), u;
}
function Se(e = " ", t = 0) {
  return d(Qi, null, e, t);
}
function mt(e = "", t = !1) {
  return t ? (me(), Pt(kt, null, e)) : d(kt, null, e);
}
function un(e) {
  return e == null || typeof e == "boolean"
    ? d(kt)
    : Ce(e)
    ? d(Ve, null, e.slice())
    : typeof e == "object"
    ? Zn(e)
    : d(Qi, null, String(e));
}
function Zn(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : no(e);
}
function al(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null) t = null;
  else if (Ce(t)) n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), al(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !Gd(t)
        ? (t._ctx = ot)
        : i === 3 &&
          ot &&
          (ot.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    Pe(t)
      ? ((t = {
          default: t,
          _ctx: ot,
        }),
        (n = 32))
      : ((t = String(t)), o & 64 ? ((n = 16), (t = [Se(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function Re(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const i in o)
      if (i === "class")
        t.class !== o.class && (t.class = At([t.class, o.class]));
      else if (i === "style") t.style = Nt([t.style, o.style]);
      else if (Kr(i)) {
        const r = t[i],
          a = o[i];
        a &&
          r !== a &&
          !(Ce(r) && r.includes(a)) &&
          (t[i] = r ? [].concat(r, a) : a);
      } else i !== "" && (t[i] = o[i]);
  }
  return t;
}
function sn(e, t, n, o = null) {
  Ht(e, t, 7, [n, o]);
}
const t0 = Yd();
let n0 = 0;
function o0(e, t, n) {
  const o = e.type,
    i = (t ? t.appContext : e.appContext) || t0,
    r = {
      uid: n0++,
      vnode: e,
      type: o,
      parent: t,
      appContext: i,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new ud(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(i.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Xd(o, i),
      emitsOptions: $d(o, i),
      emit: null,
      emitted: null,
      propsDefaults: qe,
      inheritAttrs: o.inheritAttrs,
      ctx: qe,
      data: qe,
      props: qe,
      attrs: qe,
      slots: qe,
      refs: qe,
      setupState: qe,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (r.ctx = {
      _: r,
    }),
    (r.root = t ? t.root : r),
    (r.emit = lm.bind(null, r)),
    e.ce && e.ce(r),
    r
  );
}
let ut = null;
const tn = () => ut || ot;
let Vr, vs;
{
  const e = sd(),
    t = (n, o) => {
      let i;
      return (
        (i = e[n]) || (i = e[n] = []),
        i.push(o),
        (r) => {
          i.length > 1 ? i.forEach((a) => a(r)) : i[0](r);
        }
      );
    };
  (Vr = t("__VUE_INSTANCE_SETTERS__", (n) => (ut = n))),
    (vs = t("__VUE_SSR_SETTERS__", (n) => (ia = n)));
}
const Xi = (e) => {
    const t = ut;
    return (
      Vr(e),
      e.scope.on(),
      () => {
        e.scope.off(), Vr(t);
      }
    );
  },
  cc = () => {
    ut && ut.scope.off(), Vr(null);
  };
function sf(e) {
  return e.vnode.shapeFlag & 4;
}
let ia = !1;
function i0(e, t = !1) {
  t && vs(t);
  const { props: n, children: o } = e.vnode,
    i = sf(e);
  Nm(e, n, i, t), jm(e, o);
  const r = i ? r0(e, t) : void 0;
  return t && vs(!1), r;
}
function r0(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Rm));
  const { setup: o } = n;
  if (o) {
    const i = (e.setupContext = o.length > 1 ? s0(e) : null),
      r = Xi(e);
    io();
    const a = eo(o, e, 0, [e.props, i]);
    if ((ro(), r(), od(a))) {
      if ((a.then(cc, cc), t))
        return a
          .then((s) => {
            uc(e, s, t);
          })
          .catch((s) => {
            Jr(s, e, 0);
          });
      e.asyncDep = a;
    } else uc(e, a, t);
  } else lf(e, t);
}
function uc(e, t, n) {
  Pe(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : Ke(t) && (e.setupState = Id(t)),
    lf(e, n);
}
let dc;
function lf(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && dc && !o.render) {
      const i = o.template || ol(e).template;
      if (i) {
        const { isCustomElement: r, compilerOptions: a } = e.appContext.config,
          { delimiters: s, compilerOptions: l } = o,
          c = it(
            it(
              {
                isCustomElement: r,
                delimiters: s,
              },
              a
            ),
            l
          );
        o.render = dc(i, c);
      }
    }
    e.render = o.render || Vt;
  }
  {
    const i = Xi(e);
    io();
    try {
      Om(e);
    } finally {
      ro(), i();
    }
  }
}
const a0 = {
  get(e, t) {
    return It(e, "get", ""), e[t];
  },
};
function s0(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, a0),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function ra(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(Id(Gs(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in Ei) return Ei[n](e);
        },
        has(t, n) {
          return n in t || n in Ei;
        },
      }))
    );
}
function l0(e, t = !0) {
  return Pe(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function c0(e) {
  return Pe(e) && "__vccOpts" in e;
}
const B = (e, t) => Gg(e, t, ia);
function sl(e, t, n) {
  const o = arguments.length;
  return o === 2
    ? Ke(t) && !Ce(t)
      ? ji(t)
        ? d(e, null, [t])
        : d(e, t)
      : d(e, null, t)
    : (o > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : o === 3 && ji(n) && (n = [n]),
      d(e, t, n));
}
const u0 = "3.4.27";
/**
 * @vue/runtime-dom v3.4.27
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
const d0 = "http://www.w3.org/2000/svg",
  f0 = "http://www.w3.org/1998/Math/MathML",
  Gn = typeof document < "u" ? document : null,
  fc = Gn && Gn.createElement("template"),
  h0 = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, o) => {
      const i =
        t === "svg"
          ? Gn.createElementNS(d0, e)
          : t === "mathml"
          ? Gn.createElementNS(f0, e)
          : Gn.createElement(
              e,
              n
                ? {
                    is: n,
                  }
                : void 0
            );
      return (
        e === "select" &&
          o &&
          o.multiple != null &&
          i.setAttribute("multiple", o.multiple),
        i
      );
    },
    createText: (e) => Gn.createTextNode(e),
    createComment: (e) => Gn.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Gn.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, o, i, r) {
      const a = n ? n.previousSibling : t.lastChild;
      if (i && (i === r || i.nextSibling))
        for (
          ;
          t.insertBefore(i.cloneNode(!0), n),
            !(i === r || !(i = i.nextSibling));

        );
      else {
        fc.innerHTML =
          o === "svg"
            ? `<svg>${e}</svg>`
            : o === "mathml"
            ? `<math>${e}</math>`
            : e;
        const s = fc.content;
        if (o === "svg" || o === "mathml") {
          const l = s.firstChild;
          for (; l.firstChild; ) s.appendChild(l.firstChild);
          s.removeChild(l);
        }
        t.insertBefore(s, n);
      }
      return [
        a ? a.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  Fn = "transition",
  gi = "animation",
  Ui = Symbol("_vtc"),
  li = (e, { slots: t }) => sl(_m, g0(e), t);
li.displayName = "Transition";
const cf = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0,
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String,
};
li.props = it({}, Vd, cf);
const ho = (e, t = []) => {
    Ce(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  hc = (e) => (e ? (Ce(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function g0(e) {
  const t = {};
  for (const P in e) P in cf || (t[P] = e[P]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: o,
      duration: i,
      enterFromClass: r = `${n}-enter-from`,
      enterActiveClass: a = `${n}-enter-active`,
      enterToClass: s = `${n}-enter-to`,
      appearFromClass: l = r,
      appearActiveClass: c = a,
      appearToClass: u = s,
      leaveFromClass: f = `${n}-leave-from`,
      leaveActiveClass: h = `${n}-leave-active`,
      leaveToClass: g = `${n}-leave-to`,
    } = e,
    S = m0(i),
    p = S && S[0],
    y = S && S[1],
    {
      onBeforeEnter: v,
      onEnter: m,
      onEnterCancelled: b,
      onLeave: w,
      onLeaveCancelled: C,
      onBeforeAppear: k = v,
      onAppear: I = m,
      onAppearCancelled: _ = b,
    } = t,
    R = (P, D, Q) => {
      go(P, D ? u : s), go(P, D ? c : a), Q && Q();
    },
    O = (P, D) => {
      (P._isLeaving = !1), go(P, f), go(P, g), go(P, h), D && D();
    },
    x = (P) => (D, Q) => {
      const oe = P ? I : m,
        H = () => R(D, P, Q);
      ho(oe, [D, H]),
        gc(() => {
          go(D, P ? l : r), Vn(D, P ? u : s), hc(oe) || mc(D, o, p, H);
        });
    };
  return it(t, {
    onBeforeEnter(P) {
      ho(v, [P]), Vn(P, r), Vn(P, a);
    },
    onBeforeAppear(P) {
      ho(k, [P]), Vn(P, l), Vn(P, c);
    },
    onEnter: x(!1),
    onAppear: x(!0),
    onLeave(P, D) {
      P._isLeaving = !0;
      const Q = () => O(P, D);
      Vn(P, f),
        Vn(P, h),
        b0(),
        gc(() => {
          P._isLeaving && (go(P, f), Vn(P, g), hc(w) || mc(P, o, y, Q));
        }),
        ho(w, [P, Q]);
    },
    onEnterCancelled(P) {
      R(P, !1), ho(b, [P]);
    },
    onAppearCancelled(P) {
      R(P, !0), ho(_, [P]);
    },
    onLeaveCancelled(P) {
      O(P), ho(C, [P]);
    },
  });
}
function m0(e) {
  if (e == null) return null;
  if (Ke(e)) return [Ra(e.enter), Ra(e.leave)];
  {
    const t = Ra(e);
    return [t, t];
  }
}
function Ra(e) {
  return wg(e);
}
function Vn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e[Ui] || (e[Ui] = new Set())).add(t);
}
function go(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.remove(o));
  const n = e[Ui];
  n && (n.delete(t), n.size || (e[Ui] = void 0));
}
function gc(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let v0 = 0;
function mc(e, t, n, o) {
  const i = (e._endId = ++v0),
    r = () => {
      i === e._endId && o();
    };
  if (n) return setTimeout(r, n);
  const { type: a, timeout: s, propCount: l } = y0(e, t);
  if (!a) return o();
  const c = a + "end";
  let u = 0;
  const f = () => {
      e.removeEventListener(c, h), r();
    },
    h = (g) => {
      g.target === e && ++u >= l && f();
    };
  setTimeout(() => {
    u < l && f();
  }, s + 1),
    e.addEventListener(c, h);
}
function y0(e, t) {
  const n = window.getComputedStyle(e),
    o = (S) => (n[S] || "").split(", "),
    i = o(`${Fn}Delay`),
    r = o(`${Fn}Duration`),
    a = vc(i, r),
    s = o(`${gi}Delay`),
    l = o(`${gi}Duration`),
    c = vc(s, l);
  let u = null,
    f = 0,
    h = 0;
  t === Fn
    ? a > 0 && ((u = Fn), (f = a), (h = r.length))
    : t === gi
    ? c > 0 && ((u = gi), (f = c), (h = l.length))
    : ((f = Math.max(a, c)),
      (u = f > 0 ? (a > c ? Fn : gi) : null),
      (h = u ? (u === Fn ? r.length : l.length) : 0));
  const g =
    u === Fn && /\b(transform|all)(,|$)/.test(o(`${Fn}Property`).toString());
  return {
    type: u,
    timeout: f,
    propCount: h,
    hasTransform: g,
  };
}
function vc(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, o) => yc(n) + yc(e[o])));
}
function yc(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function b0() {
  return document.body.offsetHeight;
}
function p0(e, t, n) {
  const o = e[Ui];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
const Nr = Symbol("_vod"),
  uf = Symbol("_vsh"),
  ft = {
    beforeMount(e, { value: t }, { transition: n }) {
      (e[Nr] = e.style.display === "none" ? "" : e.style.display),
        n && t ? n.beforeEnter(e) : mi(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: o }) {
      !t != !n &&
        (o
          ? t
            ? (o.beforeEnter(e), mi(e, !0), o.enter(e))
            : o.leave(e, () => {
                mi(e, !1);
              })
          : mi(e, t));
    },
    beforeUnmount(e, { value: t }) {
      mi(e, t);
    },
  };
function mi(e, t) {
  (e.style.display = t ? e[Nr] : "none"), (e[uf] = !t);
}
const w0 = Symbol(""),
  S0 = /(^|;)\s*display\s*:/;
function C0(e, t, n) {
  const o = e.style,
    i = Xe(n);
  let r = !1;
  if (n && !i) {
    if (t)
      if (Xe(t))
        for (const a of t.split(";")) {
          const s = a.slice(0, a.indexOf(":")).trim();
          n[s] == null && Ir(o, s, "");
        }
      else for (const a in t) n[a] == null && Ir(o, a, "");
    for (const a in n) a === "display" && (r = !0), Ir(o, a, n[a]);
  } else if (i) {
    if (t !== n) {
      const a = o[w0];
      a && (n += ";" + a), (o.cssText = n), (r = S0.test(n));
    }
  } else t && e.removeAttribute("style");
  Nr in e && ((e[Nr] = r ? o.display : ""), e[uf] && (o.display = "none"));
}
const bc = /\s*!important$/;
function Ir(e, t, n) {
  if (Ce(n)) n.forEach((o) => Ir(e, t, o));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const o = _0(e, t);
    bc.test(n)
      ? e.setProperty(oo(o), n.replace(bc, ""), "important")
      : (e[o] = n);
  }
}
const pc = ["Webkit", "Moz", "ms"],
  Oa = {};
function _0(e, t) {
  const n = Oa[t];
  if (n) return n;
  let o = gn(t);
  if (o !== "filter" && o in e) return (Oa[t] = o);
  o = Qr(o);
  for (let i = 0; i < pc.length; i++) {
    const r = pc[i] + o;
    if (r in e) return (Oa[t] = r);
  }
  return t;
}
const wc = "http://www.w3.org/1999/xlink";
function k0(e, t, n, o, i) {
  if (o && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(wc, t.slice(6, t.length))
      : e.setAttributeNS(wc, t, n);
  else {
    const r = Eg(t);
    n == null || (r && !ld(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, r ? "" : n);
  }
}
function x0(e, t, n, o, i, r, a) {
  if (t === "innerHTML" || t === "textContent") {
    o && a(o, i, r), (e[t] = n ?? "");
    return;
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && !s.includes("-")) {
    const c = s === "OPTION" ? e.getAttribute("value") || "" : e.value,
      u = n ?? "";
    (c !== u || !("_value" in e)) && (e.value = u),
      n == null && e.removeAttribute(t),
      (e._value = n);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const c = typeof e[t];
    c === "boolean"
      ? (n = ld(n))
      : n == null && c === "string"
      ? ((n = ""), (l = !0))
      : c === "number" && ((n = 0), (l = !0));
  }
  try {
    e[t] = n;
  } catch {}
  l && e.removeAttribute(t);
}
function T0(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function E0(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const Sc = Symbol("_vei");
function P0(e, t, n, o, i = null) {
  const r = e[Sc] || (e[Sc] = {}),
    a = r[t];
  if (o && a) a.value = o;
  else {
    const [s, l] = A0(t);
    if (o) {
      const c = (r[t] = O0(o, i));
      T0(e, s, c, l);
    } else a && (E0(e, s, a, l), (r[t] = void 0));
  }
}
const Cc = /(?:Once|Passive|Capture)$/;
function A0(e) {
  let t;
  if (Cc.test(e)) {
    t = {};
    let o;
    for (; (o = e.match(Cc)); )
      (e = e.slice(0, e.length - o[0].length)), (t[o[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : oo(e.slice(2)), t];
}
let Ba = 0;
const I0 = Promise.resolve(),
  R0 = () => Ba || (I0.then(() => (Ba = 0)), (Ba = Date.now()));
function O0(e, t) {
  const n = (o) => {
    if (!o._vts) o._vts = Date.now();
    else if (o._vts <= n.attached) return;
    Ht(B0(o, n.value), t, 5, [o]);
  };
  return (n.value = e), (n.attached = R0()), n;
}
function B0(e, t) {
  if (Ce(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((o) => (i) => !i._stopped && o && o(i))
    );
  } else return t;
}
const _c = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  D0 = (e, t, n, o, i, r, a, s, l) => {
    const c = i === "svg";
    t === "class"
      ? p0(e, o, c)
      : t === "style"
      ? C0(e, n, o)
      : Kr(t)
      ? Hs(t) || P0(e, t, n, o, a)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : $0(e, t, o, c)
        )
      ? x0(e, t, o, r, a, s, l)
      : (t === "true-value"
          ? (e._trueValue = o)
          : t === "false-value" && (e._falseValue = o),
        k0(e, t, o, c));
  };
function $0(e, t, n, o) {
  if (o)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && _c(t) && Pe(n))
    );
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return _c(t) && Xe(n) ? !1 : t in e;
}
const L0 = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace",
  },
  M0 = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}),
      o = t.join(".");
    return (
      n[o] ||
      (n[o] = (i) => {
        if (!("key" in i)) return;
        const r = oo(i.key);
        if (t.some((a) => a === r || L0[a] === r)) return e(i);
      })
    );
  },
  F0 = it(
    {
      patchProp: D0,
    },
    h0
  );
let kc;
function V0() {
  return kc || (kc = Wm(F0));
}
const df = (...e) => {
  const t = V0().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (o) => {
      const i = H0(o);
      if (!i) return;
      const r = t._component;
      !Pe(r) && !r.render && !r.template && (r.template = i.innerHTML),
        (i.innerHTML = "");
      const a = n(i, !1, N0(i));
      return (
        i instanceof Element &&
          (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")),
        a
      );
    }),
    t
  );
};
function N0(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function H0(e) {
  return Xe(e) ? document.querySelector(e) : e;
}
var ao = typeof window < "u";
function yt(e) {
  return ao ? requestAnimationFrame(e) : -1;
}
function aa(e) {
  ao && cancelAnimationFrame(e);
}
function Xn(e) {
  yt(() => yt(e));
}
var z0 = (e) => e === window,
  xc = (e, t) => ({
    top: 0,
    left: 0,
    right: e,
    bottom: t,
    width: e,
    height: t,
  }),
  Ne = (e) => {
    const t = Qt(e);
    if (z0(t)) {
      const n = t.innerWidth,
        o = t.innerHeight;
      return xc(n, o);
    }
    return t != null && t.getBoundingClientRect
      ? t.getBoundingClientRect()
      : xc(0, 0);
  };
function j0(e = !1) {
  const t = $(e);
  return [
    t,
    (o = !t.value) => {
      t.value = o;
    },
  ];
}
function gt(e) {
  const t = xt(e, null);
  if (t) {
    const n = tn(),
      { link: o, unlink: i, internalChildren: r } = t;
    o(n), ai(() => i(n));
    const a = B(() => r.indexOf(n));
    return {
      parent: t,
      index: a,
    };
  }
  return {
    parent: null,
    index: $(-1),
  };
}
function U0(e) {
  const t = [],
    n = (o) => {
      Array.isArray(o) &&
        o.forEach((i) => {
          var r;
          ji(i) &&
            (t.push(i),
            (r = i.component) != null &&
              r.subTree &&
              (t.push(i.component.subTree), n(i.component.subTree.children)),
            i.children && n(i.children));
        });
    };
  return n(e), t;
}
var Tc = (e, t) => {
  const n = e.indexOf(t);
  return n === -1
    ? e.findIndex(
        (o) =>
          t.key !== void 0 &&
          t.key !== null &&
          o.type === t.type &&
          o.key === t.key
      )
    : n;
};
function W0(e, t, n) {
  const o = U0(e.subTree.children);
  n.sort((r, a) => Tc(o, r.vnode) - Tc(o, a.vnode));
  const i = n.map((r) => r.proxy);
  t.sort((r, a) => {
    const s = i.indexOf(r),
      l = i.indexOf(a);
    return s - l;
  });
}
function wt(e) {
  const t = Ze([]),
    n = Ze([]),
    o = tn();
  return {
    children: t,
    linkChildren: (r) => {
      Tn(
        e,
        Object.assign(
          {
            link: (l) => {
              l.proxy && (n.push(l), t.push(l.proxy), W0(o, t, n));
            },
            unlink: (l) => {
              const c = n.indexOf(l);
              t.splice(c, 1), n.splice(c, 1);
            },
            children: t,
            internalChildren: n,
          },
          r
        )
      );
    },
  };
}
var ys = 1e3,
  bs = 60 * ys,
  ps = 60 * bs,
  Ec = 24 * ps;
function q0(e) {
  const t = Math.floor(e / Ec),
    n = Math.floor((e % Ec) / ps),
    o = Math.floor((e % ps) / bs),
    i = Math.floor((e % bs) / ys),
    r = Math.floor(e % ys);
  return {
    total: e,
    days: t,
    hours: n,
    minutes: o,
    seconds: i,
    milliseconds: r,
  };
}
function Y0(e, t) {
  return Math.floor(e / 1e3) === Math.floor(t / 1e3);
}
function K0(e) {
  let t, n, o, i;
  const r = $(e.time),
    a = B(() => q0(r.value)),
    s = () => {
      (o = !1), aa(t);
    },
    l = () => Math.max(n - Date.now(), 0),
    c = (p) => {
      var y, v;
      (r.value = p),
        (y = e.onChange) == null || y.call(e, a.value),
        p === 0 && (s(), (v = e.onFinish) == null || v.call(e));
    },
    u = () => {
      t = yt(() => {
        o && (c(l()), r.value > 0 && u());
      });
    },
    f = () => {
      t = yt(() => {
        if (o) {
          const p = l();
          (!Y0(p, r.value) || p === 0) && c(p), r.value > 0 && f();
        }
      });
    },
    h = () => {
      ao && (e.millisecond ? u() : f());
    },
    g = () => {
      o || ((n = Date.now() + r.value), (o = !0), h());
    },
    S = (p = e.time) => {
      s(), (r.value = p);
    };
  return (
    yn(s),
    mn(() => {
      i && ((o = !0), (i = !1), h());
    }),
    vn(() => {
      o && (s(), (i = !0));
    }),
    {
      start: g,
      pause: s,
      reset: S,
      current: a,
    }
  );
}
function ci(e) {
  let t;
  tt(() => {
    e(),
      Ae(() => {
        t = !0;
      });
  }),
    mn(() => {
      t && e();
    });
}
function et(e, t, n = {}) {
  if (!ao) return;
  const { target: o = window, passive: i = !1, capture: r = !1 } = n;
  let a = !1,
    s;
  const l = (f) => {
      if (a) return;
      const h = Qt(f);
      h &&
        !s &&
        (h.addEventListener(e, t, {
          capture: r,
          passive: i,
        }),
        (s = !0));
    },
    c = (f) => {
      if (a) return;
      const h = Qt(f);
      h && s && (h.removeEventListener(e, t, r), (s = !1));
    };
  ai(() => c(o)), vn(() => c(o)), ci(() => l(o));
  let u;
  return (
    rt(o) &&
      (u = ie(o, (f, h) => {
        c(h), l(f);
      })),
    () => {
      u == null || u(), c(o), (a = !0);
    }
  );
}
function sa(e, t, n = {}) {
  if (!ao) return;
  const { eventName: o = "click" } = n;
  et(
    o,
    (r) => {
      (Array.isArray(e) ? e : [e]).every((l) => {
        const c = Qt(l);
        return c && !c.contains(r.target);
      }) && t(r);
    },
    {
      target: document,
    }
  );
}
var lr, Da;
function Z0() {
  if (!lr && ((lr = $(0)), (Da = $(0)), ao)) {
    const e = () => {
      (lr.value = window.innerWidth), (Da.value = window.innerHeight);
    };
    e(),
      window.addEventListener("resize", e, {
        passive: !0,
      }),
      window.addEventListener("orientationchange", e, {
        passive: !0,
      });
  }
  return {
    width: lr,
    height: Da,
  };
}
var G0 = /scroll|auto|overlay/i,
  ff = ao ? window : void 0;
function Q0(e) {
  return e.tagName !== "HTML" && e.tagName !== "BODY" && e.nodeType === 1;
}
function ll(e, t = ff) {
  let n = e;
  for (; n && n !== t && Q0(n); ) {
    const { overflowY: o } = window.getComputedStyle(n);
    if (G0.test(o)) return n;
    n = n.parentNode;
  }
  return t;
}
function ui(e, t = ff) {
  const n = $();
  return (
    tt(() => {
      e.value && (n.value = ll(e.value, t));
    }),
    n
  );
}
var cr;
function X0() {
  if (!cr && ((cr = $("visible")), ao)) {
    const e = () => {
      cr.value = document.hidden ? "hidden" : "visible";
    };
    e(), window.addEventListener("visibilitychange", e);
  }
  return cr;
}
var hf = Symbol("van-field");
function so(e) {
  const t = xt(hf, null);
  t &&
    !t.customValue.value &&
    ((t.customValue.value = e),
    ie(e, () => {
      t.resetValidation(), t.validateWithTrigger("onChange");
    }));
}
function An(e) {
  const t = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(t, 0);
}
function Hr(e, t) {
  "scrollTop" in e ? (e.scrollTop = t) : e.scrollTo(e.scrollX, t);
}
function _o() {
  return (
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  );
}
function Wi(e) {
  Hr(window, e), Hr(document.body, e);
}
function Pc(e, t) {
  if (e === window) return 0;
  const n = t ? An(t) : _o();
  return Ne(e).top + n;
}
const J0 = fg();
function gf() {
  J0 && Wi(_o());
}
const cl = (e) => e.stopPropagation();
function We(e, t) {
  (typeof e.cancelable != "boolean" || e.cancelable) && e.preventDefault(),
    t && cl(e);
}
function xo(e) {
  const t = Qt(e);
  if (!t) return !1;
  const n = window.getComputedStyle(t),
    o = n.display === "none",
    i = t.offsetParent === null && n.position !== "fixed";
  return o || i;
}
const { width: Xt, height: zt } = Z0();
function ev(e) {
  const t = window.getComputedStyle(e);
  return (
    t.transform !== "none" ||
    t.perspective !== "none" ||
    ["transform", "perspective", "filter"].some((n) =>
      (t.willChange || "").includes(n)
    )
  );
}
function tv(e) {
  let t = e.parentElement;
  for (; t; ) {
    if (t && t.tagName !== "HTML" && t.tagName !== "BODY" && ev(t)) return t;
    t = t.parentElement;
  }
  return null;
}
function xe(e) {
  if ($e(e)) return td(e) ? `${e}px` : String(e);
}
function Bn(e) {
  if ($e(e)) {
    if (Array.isArray(e))
      return {
        width: xe(e[0]),
        height: xe(e[1]),
      };
    const t = xe(e);
    return {
      width: t,
      height: t,
    };
  }
}
function Dn(e) {
  const t = {};
  return e !== void 0 && (t.zIndex = +e), t;
}
let $a;
function nv() {
  if (!$a) {
    const e = document.documentElement,
      t = e.style.fontSize || window.getComputedStyle(e).fontSize;
    $a = parseFloat(t);
  }
  return $a;
}
function ov(e) {
  return (e = e.replace(/rem/g, "")), +e * nv();
}
function iv(e) {
  return (e = e.replace(/vw/g, "")), (+e * Xt.value) / 100;
}
function rv(e) {
  return (e = e.replace(/vh/g, "")), (+e * zt.value) / 100;
}
function ul(e) {
  if (typeof e == "number") return e;
  if (Dt) {
    if (e.includes("rem")) return ov(e);
    if (e.includes("vw")) return iv(e);
    if (e.includes("vh")) return rv(e);
  }
  return parseFloat(e);
}
const av = /-(\w)/g,
  mf = (e) => e.replace(av, (t, n) => n.toUpperCase()),
  sv = (e) =>
    e
      .replace(/([A-Z])/g, "-$1")
      .toLowerCase()
      .replace(/^-/, "");
function Zt(e, t = 2) {
  let n = e + "";
  for (; n.length < t; ) n = "0" + n;
  return n;
}
const ht = (e, t, n) => Math.min(Math.max(e, t), n);
function Ac(e, t, n) {
  const o = e.indexOf(t);
  return o === -1
    ? e
    : t === "-" && o !== 0
    ? e.slice(0, o)
    : e.slice(0, o + 1) + e.slice(o).replace(n, "");
}
function ws(e, t = !0, n = !0) {
  t ? (e = Ac(e, ".", /\./g)) : (e = e.split(".")[0]),
    n ? (e = Ac(e, "-", /-/g)) : (e = e.replace(/-/, ""));
  const o = t ? /[^-0-9.]/g : /[^-0-9]/g;
  return e.replace(o, "");
}
function vf(e, t) {
  return Math.round((e + t) * 1e10) / 1e10;
}
const { hasOwnProperty: lv } = Object.prototype;
function cv(e, t, n) {
  const o = t[n];
  $e(o) &&
    (!lv.call(e, n) || !hn(o) ? (e[n] = o) : (e[n] = yf(Object(e[n]), o)));
}
function yf(e, t) {
  return (
    Object.keys(t).forEach((n) => {
      cv(e, t, n);
    }),
    e
  );
}
var uv = {
  name: "姓名",
  tel: "电话",
  save: "保存",
  clear: "清空",
  cancel: "取消",
  confirm: "确认",
  delete: "删除",
  loading: "加载中...",
  noCoupon: "暂无优惠券",
  nameEmpty: "请填写姓名",
  addContact: "添加联系人",
  telInvalid: "请填写正确的电话",
  vanCalendar: {
    end: "结束",
    start: "开始",
    title: "日期选择",
    weekdays: ["日", "一", "二", "三", "四", "五", "六"],
    monthTitle: (e, t) => `${e}年${t}月`,
    rangePrompt: (e) => `最多选择 ${e} 天`,
  },
  vanCascader: {
    select: "请选择",
  },
  vanPagination: {
    prev: "上一页",
    next: "下一页",
  },
  vanPullRefresh: {
    pulling: "下拉即可刷新...",
    loosing: "释放即可刷新...",
  },
  vanSubmitBar: {
    label: "合计:",
  },
  vanCoupon: {
    unlimited: "无门槛",
    discount: (e) => `${e}折`,
    condition: (e) => `满${e}元可用`,
  },
  vanCouponCell: {
    title: "优惠券",
    count: (e) => `${e}张可用`,
  },
  vanCouponList: {
    exchange: "兑换",
    close: "不使用",
    enable: "可用",
    disabled: "不可用",
    placeholder: "输入优惠码",
  },
  vanAddressEdit: {
    area: "地区",
    areaEmpty: "请选择地区",
    addressEmpty: "请填写详细地址",
    addressDetail: "详细地址",
    defaultAddress: "设为默认收货地址",
  },
  vanAddressList: {
    add: "新增地址",
  },
};
const Ic = $("zh-CN"),
  Rc = Ze({
    "zh-CN": uv,
  }),
  bf = {
    messages() {
      return Rc[Ic.value];
    },
    use(e, t) {
      (Ic.value = e),
        this.add({
          [e]: t,
        });
    },
    add(e = {}) {
      yf(Rc, e);
    },
  };
var dv = bf;
function fv(e) {
  const t = mf(e) + ".";
  return (n, ...o) => {
    const i = dv.messages(),
      r = Vl(i, t + n) || Vl(i, n);
    return ei(r) ? r(...o) : r;
  };
}
function Ss(e, t) {
  return t
    ? typeof t == "string"
      ? ` ${e}--${t}`
      : Array.isArray(t)
      ? t.reduce((n, o) => n + Ss(e, o), "")
      : Object.keys(t).reduce((n, o) => n + (t[o] ? Ss(e, o) : ""), "")
    : "";
}
function hv(e) {
  return (t, n) => (
    t && typeof t != "string" && ((n = t), (t = "")),
    (t = t ? `${e}__${t}` : e),
    `${t}${Ss(t, n)}`
  );
}
function W(e) {
  const t = `van-${e}`;
  return [t, hv(t), fv(t)];
}
const $n = "van-hairline",
  pf = `${$n}--top`,
  wf = `${$n}--left`,
  gv = `${$n}--right`,
  dl = `${$n}--bottom`,
  Ii = `${$n}--surround`,
  la = `${$n}--top-bottom`,
  mv = `${$n}-unset--top-bottom`,
  bt = "van-haptics-feedback",
  Sf = Symbol("van-form"),
  Cf = 500,
  Oc = 5;
function lo(e, { args: t = [], done: n, canceled: o, error: i }) {
  if (e) {
    const r = e.apply(null, t);
    Vs(r)
      ? r
          .then((a) => {
            a ? n() : o && o();
          })
          .catch(i || os)
      : r
      ? n()
      : o && o();
  } else n();
}
function Z(e) {
  return (
    (e.install = (t) => {
      const { name: n } = e;
      n && (t.component(n, e), t.component(mf(`-${n}`), e));
    }),
    e
  );
}
function zr(e, t) {
  return e.reduce((n, o) => (Math.abs(n - t) < Math.abs(o - t) ? n : o));
}
const _f = Symbol();
function ca(e) {
  const t = xt(_f, null);
  t &&
    ie(t, (n) => {
      n && e();
    });
}
const kf = (e, t) => {
  const n = $(),
    o = () => {
      n.value = Ne(e).height;
    };
  return (
    tt(() => {
      if ((Ae(o), t)) for (let i = 1; i <= 3; i++) setTimeout(o, 100 * i);
    }),
    ca(() => Ae(o)),
    ie([Xt, zt], o),
    n
  );
};
function ua(e, t) {
  const n = kf(e, !0);
  return (o) =>
    d(
      "div",
      {
        class: t("placeholder"),
        style: {
          height: n.value ? `${n.value}px` : void 0,
        },
      },
      [o()]
    );
}
const [xf, Bc] = W("action-bar"),
  fl = Symbol(xf),
  vv = {
    placeholder: Boolean,
    safeAreaInsetBottom: z,
  };
var yv = j({
  name: xf,
  props: vv,
  setup(e, { slots: t }) {
    const n = $(),
      o = ua(n, Bc),
      { linkChildren: i } = wt(fl);
    i();
    const r = () => {
      var a;
      return d(
        "div",
        {
          ref: n,
          class: [
            Bc(),
            {
              "van-safe-area-bottom": e.safeAreaInsetBottom,
            },
          ],
        },
        [(a = t.default) == null ? void 0 : a.call(t)]
      );
    };
    return () => (e.placeholder ? o(r) : r());
  },
});
const Tf = Z(yv);
function Oe(e) {
  const t = tn();
  t && be(t.proxy, e);
}
const co = {
  to: [String, Object],
  url: String,
  replace: Boolean,
};
function Ef({ to: e, url: t, replace: n, $router: o }) {
  e && o
    ? o[n ? "replace" : "push"](e)
    : t && (n ? location.replace(t) : (location.href = t));
}
function Eo() {
  const e = tn().proxy;
  return () => Ef(e);
}
const [bv, Dc] = W("badge"),
  pv = {
    dot: Boolean,
    max: Y,
    tag: G("div"),
    color: String,
    offset: Array,
    content: Y,
    showZero: z,
    position: G("top-right"),
  };
var wv = j({
  name: bv,
  props: pv,
  setup(e, { slots: t }) {
    const n = () => {
        if (t.content) return !0;
        const { content: s, showZero: l } = e;
        return $e(s) && s !== "" && (l || (s !== 0 && s !== "0"));
      },
      o = () => {
        const { dot: s, max: l, content: c } = e;
        if (!s && n())
          return t.content
            ? t.content()
            : $e(l) && td(c) && +c > +l
            ? `${l}+`
            : c;
      },
      i = (s) => (s.startsWith("-") ? s.replace("-", "") : `-${s}`),
      r = B(() => {
        const s = {
          background: e.color,
        };
        if (e.offset) {
          const [l, c] = e.offset,
            { position: u } = e,
            [f, h] = u.split("-");
          t.default
            ? (typeof c == "number"
                ? (s[f] = xe(f === "top" ? c : -c))
                : (s[f] = f === "top" ? xe(c) : i(c)),
              typeof l == "number"
                ? (s[h] = xe(h === "left" ? l : -l))
                : (s[h] = h === "left" ? xe(l) : i(l)))
            : ((s.marginTop = xe(c)), (s.marginLeft = xe(l)));
        }
        return s;
      }),
      a = () => {
        if (n() || e.dot)
          return d(
            "div",
            {
              class: Dc([
                e.position,
                {
                  dot: e.dot,
                  fixed: !!t.default,
                },
              ]),
              style: r.value,
            },
            [o()]
          );
      };
    return () => {
      if (t.default) {
        const { tag: s } = e;
        return d(
          s,
          {
            class: Dc("wrapper"),
          },
          {
            default: () => [t.default(), a()],
          }
        );
      }
      return a();
    };
  },
});
const Po = Z(wv);
let Pf = 2e3;
const Sv = () => ++Pf,
  Cv = (e) => {
    Pf = e;
  },
  [Af, _v] = W("config-provider"),
  If = Symbol(Af),
  kv = {
    tag: G("div"),
    theme: G("light"),
    zIndex: Number,
    themeVars: Object,
    themeVarsDark: Object,
    themeVarsLight: Object,
    themeVarsScope: G("local"),
    iconPrefix: String,
  };
function xv(e) {
  return e.replace(/([a-zA-Z])(\d)/g, "$1-$2");
}
function Tv(e) {
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      const o = xv(sv(n));
      t[`--van-${o}`] = e[n];
    }),
    t
  );
}
function ur(e = {}, t = {}) {
  Object.keys(e).forEach((n) => {
    e[n] !== t[n] && document.documentElement.style.setProperty(n, e[n]);
  }),
    Object.keys(t).forEach((n) => {
      e[n] || document.documentElement.style.removeProperty(n);
    });
}
var Ev = j({
  name: Af,
  props: kv,
  setup(e, { slots: t }) {
    const n = B(() =>
      Tv(
        be(
          {},
          e.themeVars,
          e.theme === "dark" ? e.themeVarsDark : e.themeVarsLight
        )
      )
    );
    if (Dt) {
      const o = () => {
          document.documentElement.classList.add(`van-theme-${e.theme}`);
        },
        i = (r = e.theme) => {
          document.documentElement.classList.remove(`van-theme-${r}`);
        };
      ie(
        () => e.theme,
        (r, a) => {
          a && i(a), o();
        },
        {
          immediate: !0,
        }
      ),
        mn(o),
        vn(i),
        yn(i),
        ie(n, (r, a) => {
          e.themeVarsScope === "global" && ur(r, a);
        }),
        ie(
          () => e.themeVarsScope,
          (r, a) => {
            a === "global" && ur({}, n.value),
              r === "global" && ur(n.value, {});
          }
        ),
        e.themeVarsScope === "global" && ur(n.value, {});
    }
    return (
      Tn(If, e),
      ri(() => {
        e.zIndex !== void 0 && Cv(e.zIndex);
      }),
      () =>
        d(
          e.tag,
          {
            class: _v(),
            style: e.themeVarsScope === "local" ? n.value : void 0,
          },
          {
            default: () => {
              var o;
              return [(o = t.default) == null ? void 0 : o.call(t)];
            },
          }
        )
    );
  },
});
const [Pv, $c] = W("icon"),
  Av = (e) => (e == null ? void 0 : e.includes("/")),
  Iv = {
    dot: Boolean,
    tag: G("i"),
    name: String,
    size: Y,
    badge: Y,
    color: String,
    badgeProps: Object,
    classPrefix: String,
  };
var Rv = j({
  name: Pv,
  props: Iv,
  setup(e, { slots: t }) {
    const n = xt(If, null),
      o = B(() => e.classPrefix || (n == null ? void 0 : n.iconPrefix) || $c());
    return () => {
      const { tag: i, dot: r, name: a, size: s, badge: l, color: c } = e,
        u = Av(a);
      return d(
        Po,
        Re(
          {
            dot: r,
            tag: i,
            class: [o.value, u ? "" : `${o.value}-${a}`],
            style: {
              color: c,
              fontSize: xe(s),
            },
            content: l,
          },
          e.badgeProps
        ),
        {
          default: () => {
            var f;
            return [
              (f = t.default) == null ? void 0 : f.call(t),
              u &&
                d(
                  "img",
                  {
                    class: $c("image"),
                    src: a,
                  },
                  null
                ),
            ];
          },
        }
      );
    };
  },
});
const Te = Z(Rv);
var Ov = Te;
const [Bv, Ri] = W("loading"),
  Dv = Array(12)
    .fill(null)
    .map((e, t) =>
      d(
        "i",
        {
          class: Ri("line", String(t + 1)),
        },
        null
      )
    ),
  $v = d(
    "svg",
    {
      class: Ri("circular"),
      viewBox: "25 25 50 50",
    },
    [
      d(
        "circle",
        {
          cx: "50",
          cy: "50",
          r: "20",
          fill: "none",
        },
        null
      ),
    ]
  ),
  Lv = {
    size: Y,
    type: G("circular"),
    color: String,
    vertical: Boolean,
    textSize: Y,
    textColor: String,
  };
var Mv = j({
  name: Bv,
  props: Lv,
  setup(e, { slots: t }) {
    const n = B(() =>
        be(
          {
            color: e.color,
          },
          Bn(e.size)
        )
      ),
      o = () => {
        const r = e.type === "spinner" ? Dv : $v;
        return d(
          "span",
          {
            class: Ri("spinner", e.type),
            style: n.value,
          },
          [t.icon ? t.icon() : r]
        );
      },
      i = () => {
        var r;
        if (t.default)
          return d(
            "span",
            {
              class: Ri("text"),
              style: {
                fontSize: xe(e.textSize),
                color: (r = e.textColor) != null ? r : e.color,
              },
            },
            [t.default()]
          );
      };
    return () => {
      const { type: r, vertical: a } = e;
      return d(
        "div",
        {
          class: Ri([
            r,
            {
              vertical: a,
            },
          ]),
          "aria-live": "polite",
          "aria-busy": !0,
        },
        [o(), i()]
      );
    };
  },
});
const nn = Z(Mv),
  [Fv, Oo] = W("button"),
  Vv = be({}, co, {
    tag: G("button"),
    text: String,
    icon: String,
    type: G("default"),
    size: G("normal"),
    color: String,
    block: Boolean,
    plain: Boolean,
    round: Boolean,
    square: Boolean,
    loading: Boolean,
    hairline: Boolean,
    disabled: Boolean,
    iconPrefix: String,
    nativeType: G("button"),
    loadingSize: Y,
    loadingText: String,
    loadingType: String,
    iconPosition: G("left"),
  });
var Nv = j({
  name: Fv,
  props: Vv,
  emits: ["click"],
  setup(e, { emit: t, slots: n }) {
    const o = Eo(),
      i = () =>
        n.loading
          ? n.loading()
          : d(
              nn,
              {
                size: e.loadingSize,
                type: e.loadingType,
                class: Oo("loading"),
              },
              null
            ),
      r = () => {
        if (e.loading) return i();
        if (n.icon)
          return d(
            "div",
            {
              class: Oo("icon"),
            },
            [n.icon()]
          );
        if (e.icon)
          return d(
            Te,
            {
              name: e.icon,
              class: Oo("icon"),
              classPrefix: e.iconPrefix,
            },
            null
          );
      },
      a = () => {
        let c;
        if (
          (e.loading
            ? (c = e.loadingText)
            : (c = n.default ? n.default() : e.text),
          c)
        )
          return d(
            "span",
            {
              class: Oo("text"),
            },
            [c]
          );
      },
      s = () => {
        const { color: c, plain: u } = e;
        if (c) {
          const f = {
            color: u ? c : "white",
          };
          return (
            u || (f.background = c),
            c.includes("gradient") ? (f.border = 0) : (f.borderColor = c),
            f
          );
        }
      },
      l = (c) => {
        e.loading ? We(c) : e.disabled || (t("click", c), o());
      };
    return () => {
      const {
          tag: c,
          type: u,
          size: f,
          block: h,
          round: g,
          plain: S,
          square: p,
          loading: y,
          disabled: v,
          hairline: m,
          nativeType: b,
          iconPosition: w,
        } = e,
        C = [
          Oo([
            u,
            f,
            {
              plain: S,
              block: h,
              round: g,
              square: p,
              loading: y,
              disabled: v,
              hairline: m,
            },
          ]),
          {
            [Ii]: m,
          },
        ];
      return d(
        c,
        {
          type: b,
          class: C,
          style: s(),
          disabled: v,
          onClick: l,
        },
        {
          default: () => [
            d(
              "div",
              {
                class: Oo("content"),
              },
              [w === "left" && r(), a(), w === "right" && r()]
            ),
          ],
        }
      );
    };
  },
});
const pt = Z(Nv),
  [Hv, zv] = W("action-bar-button"),
  jv = be({}, co, {
    type: String,
    text: String,
    icon: String,
    color: String,
    loading: Boolean,
    disabled: Boolean,
  });
var Uv = j({
  name: Hv,
  props: jv,
  setup(e, { slots: t }) {
    const n = Eo(),
      { parent: o, index: i } = gt(fl),
      r = B(() => {
        if (o) {
          const s = o.children[i.value - 1];
          return !(s && "isButton" in s);
        }
      }),
      a = B(() => {
        if (o) {
          const s = o.children[i.value + 1];
          return !(s && "isButton" in s);
        }
      });
    return (
      Oe({
        isButton: !0,
      }),
      () => {
        const {
          type: s,
          icon: l,
          text: c,
          color: u,
          loading: f,
          disabled: h,
        } = e;
        return d(
          pt,
          {
            class: zv([
              s,
              {
                last: a.value,
                first: r.value,
              },
            ]),
            size: "large",
            type: s,
            icon: l,
            color: u,
            loading: f,
            disabled: h,
            onClick: n,
          },
          {
            default: () => [t.default ? t.default() : c],
          }
        );
      }
    );
  },
});
const Cs = Z(Uv),
  [Wv, La] = W("action-bar-icon"),
  qv = be({}, co, {
    dot: Boolean,
    text: String,
    icon: String,
    color: String,
    badge: Y,
    iconClass: Qe,
    badgeProps: Object,
    iconPrefix: String,
  });
var Yv = j({
  name: Wv,
  props: qv,
  setup(e, { slots: t }) {
    const n = Eo();
    gt(fl);
    const o = () => {
      const {
        dot: i,
        badge: r,
        icon: a,
        color: s,
        iconClass: l,
        badgeProps: c,
        iconPrefix: u,
      } = e;
      return t.icon
        ? d(
            Po,
            Re(
              {
                dot: i,
                class: La("icon"),
                content: r,
              },
              c
            ),
            {
              default: t.icon,
            }
          )
        : d(
            Te,
            {
              tag: "div",
              dot: i,
              name: a,
              badge: r,
              color: s,
              class: [La("icon"), l],
              badgeProps: c,
              classPrefix: u,
            },
            null
          );
    };
    return () =>
      d(
        "div",
        {
          role: "button",
          class: La(),
          tabindex: 0,
          onClick: n,
        },
        [o(), t.default ? t.default() : e.text]
      );
  },
});
const Kv = Z(Yv),
  di = {
    show: Boolean,
    zIndex: Y,
    overlay: z,
    duration: Y,
    teleport: [String, Object],
    lockScroll: z,
    lazyRender: z,
    beforeClose: Function,
    overlayStyle: Object,
    overlayClass: Qe,
    transitionAppear: Boolean,
    closeOnClickOverlay: z,
  },
  hl = Object.keys(di);
function Zv(e, t) {
  return e > t ? "horizontal" : t > e ? "vertical" : "";
}
function jt() {
  const e = $(0),
    t = $(0),
    n = $(0),
    o = $(0),
    i = $(0),
    r = $(0),
    a = $(""),
    s = $(!0),
    l = () => a.value === "vertical",
    c = () => a.value === "horizontal",
    u = () => {
      (n.value = 0),
        (o.value = 0),
        (i.value = 0),
        (r.value = 0),
        (a.value = ""),
        (s.value = !0);
    };
  return {
    move: (g) => {
      const S = g.touches[0];
      (n.value = (S.clientX < 0 ? 0 : S.clientX) - e.value),
        (o.value = S.clientY - t.value),
        (i.value = Math.abs(n.value)),
        (r.value = Math.abs(o.value));
      const p = 10;
      (!a.value || (i.value < p && r.value < p)) &&
        (a.value = Zv(i.value, r.value)),
        s.value && (i.value > Oc || r.value > Oc) && (s.value = !1);
    },
    start: (g) => {
      u(), (e.value = g.touches[0].clientX), (t.value = g.touches[0].clientY);
    },
    reset: u,
    startX: e,
    startY: t,
    deltaX: n,
    deltaY: o,
    offsetX: i,
    offsetY: r,
    direction: a,
    isVertical: l,
    isHorizontal: c,
    isTap: s,
  };
}
let vi = 0;
const Lc = "van-overflow-hidden";
function Rf(e, t) {
  const n = jt(),
    o = "01",
    i = "10",
    r = (u) => {
      n.move(u);
      const f = n.deltaY.value > 0 ? i : o,
        h = ll(u.target, e.value),
        { scrollHeight: g, offsetHeight: S, scrollTop: p } = h;
      let y = "11";
      p === 0 ? (y = S >= g ? "00" : "01") : p + S >= g && (y = "10"),
        y !== "11" &&
          n.isVertical() &&
          !(parseInt(y, 2) & parseInt(f, 2)) &&
          We(u, !0);
    },
    a = () => {
      document.addEventListener("touchstart", n.start),
        document.addEventListener("touchmove", r, {
          passive: !1,
        }),
        vi || document.body.classList.add(Lc),
        vi++;
    },
    s = () => {
      vi &&
        (document.removeEventListener("touchstart", n.start),
        document.removeEventListener("touchmove", r),
        vi--,
        vi || document.body.classList.remove(Lc));
    },
    l = () => t() && a(),
    c = () => t() && s();
  ci(l),
    vn(c),
    yn(c),
    ie(t, (u) => {
      u ? a() : s();
    });
}
function gl(e) {
  const t = $(!1);
  return (
    ie(
      e,
      (n) => {
        n && (t.value = n);
      },
      {
        immediate: !0,
      }
    ),
    (n) => () => t.value ? n() : null
  );
}
const jr = () => {
    var e;
    const { scopeId: t } = ((e = tn()) == null ? void 0 : e.vnode) || {};
    return t
      ? {
          [t]: "",
        }
      : null;
  },
  [Gv, Qv] = W("overlay"),
  Xv = {
    show: Boolean,
    zIndex: Y,
    duration: Y,
    className: Qe,
    lockScroll: z,
    lazyRender: z,
    customStyle: Object,
  };
var Jv = j({
  name: Gv,
  props: Xv,
  setup(e, { slots: t }) {
    const n = $(),
      o = gl(() => e.show || !e.lazyRender),
      i = (a) => {
        e.lockScroll && We(a, !0);
      },
      r = o(() => {
        var a;
        const s = be(Dn(e.zIndex), e.customStyle);
        return (
          $e(e.duration) && (s.animationDuration = `${e.duration}s`),
          st(
            d(
              "div",
              {
                ref: n,
                style: s,
                class: [Qv(), e.className],
              },
              [(a = t.default) == null ? void 0 : a.call(t)]
            ),
            [[ft, e.show]]
          )
        );
      });
    return (
      et("touchmove", i, {
        target: n,
      }),
      () =>
        d(
          li,
          {
            name: "van-fade",
            appear: !0,
          },
          {
            default: r,
          }
        )
    );
  },
});
const Of = Z(Jv),
  ey = be({}, di, {
    round: Boolean,
    position: G("center"),
    closeIcon: G("cross"),
    closeable: Boolean,
    transition: String,
    iconPrefix: String,
    closeOnPopstate: Boolean,
    closeIconPosition: G("top-right"),
    safeAreaInsetTop: Boolean,
    safeAreaInsetBottom: Boolean,
  }),
  [ty, Mc] = W("popup");
var ny = j({
  name: ty,
  inheritAttrs: !1,
  props: ey,
  emits: [
    "open",
    "close",
    "opened",
    "closed",
    "keydown",
    "update:show",
    "clickOverlay",
    "clickCloseIcon",
  ],
  setup(e, { emit: t, attrs: n, slots: o }) {
    let i, r;
    const a = $(),
      s = $(),
      l = gl(() => e.show || !e.lazyRender),
      c = B(() => {
        const k = {
          zIndex: a.value,
        };
        if ($e(e.duration)) {
          const I =
            e.position === "center"
              ? "animationDuration"
              : "transitionDuration";
          k[I] = `${e.duration}s`;
        }
        return k;
      }),
      u = () => {
        i ||
          ((i = !0),
          (a.value = e.zIndex !== void 0 ? +e.zIndex : Sv()),
          t("open"));
      },
      f = () => {
        i &&
          lo(e.beforeClose, {
            done() {
              (i = !1), t("close"), t("update:show", !1);
            },
          });
      },
      h = (k) => {
        t("clickOverlay", k), e.closeOnClickOverlay && f();
      },
      g = () => {
        if (e.overlay)
          return d(
            Of,
            Re(
              {
                show: e.show,
                class: e.overlayClass,
                zIndex: a.value,
                duration: e.duration,
                customStyle: e.overlayStyle,
                role: e.closeOnClickOverlay ? "button" : void 0,
                tabindex: e.closeOnClickOverlay ? 0 : void 0,
              },
              jr(),
              {
                onClick: h,
              }
            ),
            {
              default: o["overlay-content"],
            }
          );
      },
      S = (k) => {
        t("clickCloseIcon", k), f();
      },
      p = () => {
        if (e.closeable)
          return d(
            Te,
            {
              role: "button",
              tabindex: 0,
              name: e.closeIcon,
              class: [Mc("close-icon", e.closeIconPosition), bt],
              classPrefix: e.iconPrefix,
              onClick: S,
            },
            null
          );
      };
    let y;
    const v = () => {
        y && clearTimeout(y),
          (y = setTimeout(() => {
            t("opened");
          }));
      },
      m = () => t("closed"),
      b = (k) => t("keydown", k),
      w = l(() => {
        var k;
        const {
          round: I,
          position: _,
          safeAreaInsetTop: R,
          safeAreaInsetBottom: O,
        } = e;
        return st(
          d(
            "div",
            Re(
              {
                ref: s,
                style: c.value,
                role: "dialog",
                tabindex: 0,
                class: [
                  Mc({
                    round: I,
                    [_]: _,
                  }),
                  {
                    "van-safe-area-top": R,
                    "van-safe-area-bottom": O,
                  },
                ],
                onKeydown: b,
              },
              n,
              jr()
            ),
            [(k = o.default) == null ? void 0 : k.call(o), p()]
          ),
          [[ft, e.show]]
        );
      }),
      C = () => {
        const { position: k, transition: I, transitionAppear: _ } = e,
          R = k === "center" ? "van-fade" : `van-popup-slide-${k}`;
        return d(
          li,
          {
            name: I || R,
            appear: _,
            onAfterEnter: v,
            onAfterLeave: m,
          },
          {
            default: w,
          }
        );
      };
    return (
      ie(
        () => e.show,
        (k) => {
          k &&
            !i &&
            (u(),
            n.tabindex === 0 &&
              Ae(() => {
                var I;
                (I = s.value) == null || I.focus();
              })),
            !k && i && ((i = !1), t("close"));
        }
      ),
      Oe({
        popupRef: s,
      }),
      Rf(s, () => e.show && e.lockScroll),
      et("popstate", () => {
        e.closeOnPopstate && (f(), (r = !1));
      }),
      tt(() => {
        e.show && u();
      }),
      mn(() => {
        r && (t("update:show", !0), (r = !1));
      }),
      vn(() => {
        e.show && e.teleport && (f(), (r = !0));
      }),
      Tn(_f, () => e.show),
      () =>
        e.teleport
          ? d(
              si,
              {
                to: e.teleport,
              },
              {
                default: () => [g(), C()],
              }
            )
          : d(Ve, null, [g(), C()])
    );
  },
});
const $t = Z(ny),
  [oy, Mt] = W("action-sheet"),
  iy = be({}, di, {
    title: String,
    round: z,
    actions: Ye(),
    closeIcon: G("cross"),
    closeable: z,
    cancelText: String,
    description: String,
    closeOnPopstate: z,
    closeOnClickAction: Boolean,
    safeAreaInsetBottom: z,
  }),
  ry = [...hl, "round", "closeOnPopstate", "safeAreaInsetBottom"];
var ay = j({
  name: oy,
  props: iy,
  emits: ["select", "cancel", "update:show"],
  setup(e, { slots: t, emit: n }) {
    const o = (f) => n("update:show", f),
      i = () => {
        o(!1), n("cancel");
      },
      r = () => {
        if (e.title)
          return d(
            "div",
            {
              class: Mt("header"),
            },
            [
              e.title,
              e.closeable &&
                d(
                  Te,
                  {
                    name: e.closeIcon,
                    class: [Mt("close"), bt],
                    onClick: i,
                  },
                  null
                ),
            ]
          );
      },
      a = () => {
        if (t.cancel || e.cancelText)
          return [
            d(
              "div",
              {
                class: Mt("gap"),
              },
              null
            ),
            d(
              "button",
              {
                type: "button",
                class: Mt("cancel"),
                onClick: i,
              },
              [t.cancel ? t.cancel() : e.cancelText]
            ),
          ];
      },
      s = (f) => {
        if (f.icon)
          return d(
            Te,
            {
              class: Mt("item-icon"),
              name: f.icon,
            },
            null
          );
      },
      l = (f, h) =>
        f.loading
          ? d(
              nn,
              {
                class: Mt("loading-icon"),
              },
              null
            )
          : t.action
          ? t.action({
              action: f,
              index: h,
            })
          : [
              d(
                "span",
                {
                  class: Mt("name"),
                },
                [f.name]
              ),
              f.subname &&
                d(
                  "div",
                  {
                    class: Mt("subname"),
                  },
                  [f.subname]
                ),
            ],
      c = (f, h) => {
        const {
            color: g,
            loading: S,
            callback: p,
            disabled: y,
            className: v,
          } = f,
          m = () => {
            y ||
              S ||
              (p && p(f),
              e.closeOnClickAction && o(!1),
              Ae(() => n("select", f, h)));
          };
        return d(
          "button",
          {
            type: "button",
            style: {
              color: g,
            },
            class: [
              Mt("item", {
                loading: S,
                disabled: y,
              }),
              v,
            ],
            onClick: m,
          },
          [s(f), l(f, h)]
        );
      },
      u = () => {
        if (e.description || t.description) {
          const f = t.description ? t.description() : e.description;
          return d(
            "div",
            {
              class: Mt("description"),
            },
            [f]
          );
        }
      };
    return () =>
      d(
        $t,
        Re(
          {
            class: Mt(),
            position: "bottom",
            "onUpdate:show": o,
          },
          Me(e, ry)
        ),
        {
          default: () => {
            var f;
            return [
              r(),
              u(),
              d(
                "div",
                {
                  class: Mt("content"),
                },
                [e.actions.map(c), (f = t.default) == null ? void 0 : f.call(t)]
              ),
              a(),
            ];
          },
        }
      );
  },
});
const sy = Z(ay),
  [ly, kn, Fc] = W("picker"),
  Bf = (e) => e.find((t) => !t.disabled) || e[0];
function cy(e, t) {
  const n = e[0];
  if (n) {
    if (Array.isArray(n)) return "multiple";
    if (t.children in n) return "cascade";
  }
  return "default";
}
function Rr(e, t) {
  t = ht(t, 0, e.length);
  for (let n = t; n < e.length; n++) if (!e[n].disabled) return n;
  for (let n = t - 1; n >= 0; n--) if (!e[n].disabled) return n;
  return 0;
}
const Vc = (e, t, n) => t !== void 0 && !!e.find((o) => o[n.value] === t);
function _s(e, t, n) {
  const o = e.findIndex((r) => r[n.value] === t),
    i = Rr(e, o);
  return e[i];
}
function uy(e, t, n) {
  const o = [];
  let i = {
      [t.children]: e,
    },
    r = 0;
  for (; i && i[t.children]; ) {
    const a = i[t.children],
      s = n.value[r];
    if (((i = $e(s) ? _s(a, s, t) : void 0), !i && a.length)) {
      const l = Bf(a)[t.value];
      i = _s(a, l, t);
    }
    r++, o.push(a);
  }
  return o;
}
function dy(e) {
  const { transform: t } = window.getComputedStyle(e),
    n = t.slice(7, t.length - 1).split(", ")[5];
  return Number(n);
}
function fy(e) {
  return be(
    {
      text: "text",
      value: "value",
      children: "children",
    },
    e
  );
}
const Nc = 200,
  Hc = 300,
  hy = 15,
  [Df, Ma] = W("picker-column"),
  $f = Symbol(Df);
var gy = j({
  name: Df,
  props: {
    value: Y,
    fields: dt(Object),
    options: Ye(),
    readonly: Boolean,
    allowHtml: Boolean,
    optionHeight: dt(Number),
    swipeDuration: dt(Y),
    visibleOptionNum: dt(Y),
  },
  emits: ["change", "clickOption", "scrollInto"],
  setup(e, { emit: t, slots: n }) {
    let o, i, r, a, s;
    const l = $(),
      c = $(),
      u = $(0),
      f = $(0),
      h = jt(),
      g = () => e.options.length,
      S = () => (e.optionHeight * (+e.visibleOptionNum - 1)) / 2,
      p = (O) => {
        let x = Rr(e.options, O);
        const P = -x * e.optionHeight,
          D = () => {
            x > g() - 1 && (x = Rr(e.options, O));
            const Q = e.options[x][e.fields.value];
            Q !== e.value && t("change", Q);
          };
        o && P !== u.value ? (s = D) : D(), (u.value = P);
      },
      y = () => e.readonly || !e.options.length,
      v = (O) => {
        o ||
          y() ||
          ((s = null), (f.value = Nc), p(O), t("clickOption", e.options[O]));
      },
      m = (O) => ht(Math.round(-O / e.optionHeight), 0, g() - 1),
      b = B(() => m(u.value)),
      w = (O, x) => {
        const P = Math.abs(O / x);
        O = u.value + (P / 0.003) * (O < 0 ? -1 : 1);
        const D = m(O);
        (f.value = +e.swipeDuration), p(D);
      },
      C = () => {
        (o = !1), (f.value = 0), s && (s(), (s = null));
      },
      k = (O) => {
        if (!y()) {
          if ((h.start(O), o)) {
            const x = dy(c.value);
            u.value = Math.min(0, x - S());
          }
          (f.value = 0), (i = u.value), (r = Date.now()), (a = i), (s = null);
        }
      },
      I = (O) => {
        if (y()) return;
        h.move(O), h.isVertical() && ((o = !0), We(O, !0));
        const x = ht(
            i + h.deltaY.value,
            -(g() * e.optionHeight),
            e.optionHeight
          ),
          P = m(x);
        P !== b.value && t("scrollInto", e.options[P]), (u.value = x);
        const D = Date.now();
        D - r > Hc && ((r = D), (a = x));
      },
      _ = () => {
        if (y()) return;
        const O = u.value - a,
          x = Date.now() - r;
        if (x < Hc && Math.abs(O) > hy) {
          w(O, x);
          return;
        }
        const D = m(u.value);
        (f.value = Nc),
          p(D),
          setTimeout(() => {
            o = !1;
          }, 0);
      },
      R = () => {
        const O = {
          height: `${e.optionHeight}px`,
        };
        return e.options.map((x, P) => {
          const D = x[e.fields.text],
            { disabled: Q } = x,
            oe = x[e.fields.value],
            H = {
              role: "button",
              style: O,
              tabindex: Q ? -1 : 0,
              class: [
                Ma("item", {
                  disabled: Q,
                  selected: oe === e.value,
                }),
                x.className,
              ],
              onClick: () => v(P),
            },
            J = {
              class: "van-ellipsis",
              [e.allowHtml ? "innerHTML" : "textContent"]: D,
            };
          return d("li", H, [n.option ? n.option(x, P) : d("div", J, null)]);
        });
      };
    return (
      gt($f),
      Oe({
        stopMomentum: C,
      }),
      ri(() => {
        const O = o
            ? Math.floor(-u.value / e.optionHeight)
            : e.options.findIndex((D) => D[e.fields.value] === e.value),
          x = Rr(e.options, O),
          P = -x * e.optionHeight;
        o && x < O && C(), (u.value = P);
      }),
      et("touchmove", I, {
        target: l,
      }),
      () =>
        d(
          "div",
          {
            ref: l,
            class: Ma(),
            onTouchstartPassive: k,
            onTouchend: _,
            onTouchcancel: _,
          },
          [
            d(
              "ul",
              {
                ref: c,
                style: {
                  transform: `translate3d(0, ${u.value + S()}px, 0)`,
                  transitionDuration: `${f.value}ms`,
                  transitionProperty: f.value ? "all" : "none",
                },
                class: Ma("wrapper"),
                onTransitionend: C,
              },
              [R()]
            ),
          ]
        )
    );
  },
});
const [my] = W("picker-toolbar"),
  da = {
    title: String,
    cancelButtonText: String,
    confirmButtonText: String,
  },
  Lf = ["cancel", "confirm", "title", "toolbar"],
  vy = Object.keys(da);
var Mf = j({
  name: my,
  props: da,
  emits: ["confirm", "cancel"],
  setup(e, { emit: t, slots: n }) {
    const o = () => {
        if (n.title) return n.title();
        if (e.title)
          return d(
            "div",
            {
              class: [kn("title"), "van-ellipsis"],
            },
            [e.title]
          );
      },
      i = () => t("cancel"),
      r = () => t("confirm"),
      a = () => {
        var l;
        const c = (l = e.cancelButtonText) != null ? l : Fc("cancel");
        if (!(!n.cancel && !c))
          return d(
            "button",
            {
              type: "button",
              class: [kn("cancel"), bt],
              onClick: i,
            },
            [n.cancel ? n.cancel() : c]
          );
      },
      s = () => {
        var l;
        const c = (l = e.confirmButtonText) != null ? l : Fc("confirm");
        if (!(!n.confirm && !c))
          return d(
            "button",
            {
              type: "button",
              class: [kn("confirm"), bt],
              onClick: r,
            },
            [n.confirm ? n.confirm() : c]
          );
      };
    return () =>
      d(
        "div",
        {
          class: kn("toolbar"),
        },
        [n.toolbar ? n.toolbar() : [a(), o(), s()]]
      );
  },
});
const ml = (e, t) => {
  const n = $(e());
  return (
    ie(e, (o) => {
      o !== n.value && (n.value = o);
    }),
    ie(n, (o) => {
      o !== e() && t(o);
    }),
    n
  );
};
function yy(e, t, n) {
  let o,
    i = 0;
  const r = e.scrollLeft,
    a = n === 0 ? 1 : Math.round((n * 1e3) / 16);
  function s() {
    aa(o);
  }
  function l() {
    (e.scrollLeft += (t - r) / a), ++i < a && (o = yt(l));
  }
  return l(), s;
}
function by(e, t, n, o) {
  let i,
    r = An(e);
  const a = r < t,
    s = n === 0 ? 1 : Math.round((n * 1e3) / 16),
    l = (t - r) / s;
  function c() {
    aa(i);
  }
  function u() {
    (r += l),
      ((a && r > t) || (!a && r < t)) && (r = t),
      Hr(e, r),
      (a && r < t) || (!a && r > t) ? (i = yt(u)) : o && (i = yt(o));
  }
  return u(), c;
}
let py = 0;
function fi() {
  const e = tn(),
    { name: t = "unknown" } = (e == null ? void 0 : e.type) || {};
  return `${t}-${++py}`;
}
function Ji() {
  const e = $([]),
    t = [];
  return (
    jd(() => {
      e.value = [];
    }),
    [
      e,
      (o) => (
        t[o] ||
          (t[o] = (i) => {
            e.value[o] = i;
          }),
        t[o]
      ),
    ]
  );
}
function Ff(e, t) {
  if (!Dt || !window.IntersectionObserver) return;
  const n = new IntersectionObserver(
      (r) => {
        t(r[0].intersectionRatio > 0);
      },
      {
        root: document.body,
      }
    ),
    o = () => {
      e.value && n.observe(e.value);
    },
    i = () => {
      e.value && n.unobserve(e.value);
    };
  vn(i), yn(i), ci(o);
}
const [wy, Sy] = W("sticky"),
  Cy = {
    zIndex: Y,
    position: G("top"),
    container: Object,
    offsetTop: ce(0),
    offsetBottom: ce(0),
  };
var _y = j({
  name: wy,
  props: Cy,
  emits: ["scroll", "change"],
  setup(e, { emit: t, slots: n }) {
    const o = $(),
      i = ui(o),
      r = Ze({
        fixed: !1,
        width: 0,
        height: 0,
        transform: 0,
      }),
      a = $(!1),
      s = B(() => ul(e.position === "top" ? e.offsetTop : e.offsetBottom)),
      l = B(() => {
        if (a.value) return;
        const { fixed: h, height: g, width: S } = r;
        if (h)
          return {
            width: `${S}px`,
            height: `${g}px`,
          };
      }),
      c = B(() => {
        if (!r.fixed || a.value) return;
        const h = be(Dn(e.zIndex), {
          width: `${r.width}px`,
          height: `${r.height}px`,
          [e.position]: `${s.value}px`,
        });
        return (
          r.transform && (h.transform = `translate3d(0, ${r.transform}px, 0)`),
          h
        );
      }),
      u = (h) =>
        t("scroll", {
          scrollTop: h,
          isFixed: r.fixed,
        }),
      f = () => {
        if (!o.value || xo(o)) return;
        const { container: h, position: g } = e,
          S = Ne(o),
          p = An(window);
        if (((r.width = S.width), (r.height = S.height), g === "top"))
          if (h) {
            const y = Ne(h),
              v = y.bottom - s.value - r.height;
            (r.fixed = s.value > S.top && y.bottom > 0),
              (r.transform = v < 0 ? v : 0);
          } else r.fixed = s.value > S.top;
        else {
          const { clientHeight: y } = document.documentElement;
          if (h) {
            const v = Ne(h),
              m = y - v.top - s.value - r.height;
            (r.fixed = y - s.value < S.bottom && y > v.top),
              (r.transform = m < 0 ? -m : 0);
          } else r.fixed = y - s.value < S.bottom;
        }
        u(p);
      };
    return (
      ie(
        () => r.fixed,
        (h) => t("change", h)
      ),
      et("scroll", f, {
        target: i,
        passive: !0,
      }),
      Ff(o, f),
      ie([Xt, zt], () => {
        !o.value ||
          xo(o) ||
          !r.fixed ||
          ((a.value = !0),
          Ae(() => {
            const h = Ne(o);
            (r.width = h.width), (r.height = h.height), (a.value = !1);
          }));
      }),
      () => {
        var h;
        return d(
          "div",
          {
            ref: o,
            style: l.value,
          },
          [
            d(
              "div",
              {
                class: Sy({
                  fixed: r.fixed && !a.value,
                }),
                style: c.value,
              },
              [(h = n.default) == null ? void 0 : h.call(n)]
            ),
          ]
        );
      }
    );
  },
});
const Vf = Z(_y),
  [Nf, dr] = W("swipe"),
  ky = {
    loop: z,
    width: Y,
    height: Y,
    vertical: Boolean,
    autoplay: ce(0),
    duration: ce(500),
    touchable: z,
    lazyRender: Boolean,
    initialSwipe: ce(0),
    indicatorColor: String,
    showIndicators: z,
    stopPropagation: z,
  },
  Hf = Symbol(Nf);
var xy = j({
  name: Nf,
  props: ky,
  emits: ["change", "dragStart", "dragEnd"],
  setup(e, { emit: t, slots: n }) {
    const o = $(),
      i = $(),
      r = Ze({
        rect: null,
        width: 0,
        height: 0,
        offset: 0,
        active: 0,
        swiping: !1,
      });
    let a = !1;
    const s = jt(),
      { children: l, linkChildren: c } = wt(Hf),
      u = B(() => l.length),
      f = B(() => r[e.vertical ? "height" : "width"]),
      h = B(() => (e.vertical ? s.deltaY.value : s.deltaX.value)),
      g = B(() =>
        r.rect
          ? (e.vertical ? r.rect.height : r.rect.width) - f.value * u.value
          : 0
      ),
      S = B(() => (f.value ? Math.ceil(Math.abs(g.value) / f.value) : u.value)),
      p = B(() => u.value * f.value),
      y = B(() => (r.active + u.value) % u.value),
      v = B(() => {
        const M = e.vertical ? "vertical" : "horizontal";
        return s.direction.value === M;
      }),
      m = B(() => {
        const M = {
          transitionDuration: `${r.swiping ? 0 : e.duration}ms`,
          transform: `translate${e.vertical ? "Y" : "X"}(${+r.offset.toFixed(
            2
          )}px)`,
        };
        if (f.value) {
          const K = e.vertical ? "height" : "width",
            fe = e.vertical ? "width" : "height";
          (M[K] = `${p.value}px`), (M[fe] = e[fe] ? `${e[fe]}px` : "");
        }
        return M;
      }),
      b = (M) => {
        const { active: K } = r;
        return M
          ? e.loop
            ? ht(K + M, -1, u.value)
            : ht(K + M, 0, S.value)
          : K;
      },
      w = (M, K = 0) => {
        let fe = M * f.value;
        e.loop || (fe = Math.min(fe, -g.value));
        let ve = K - fe;
        return e.loop || (ve = ht(ve, g.value, 0)), ve;
      },
      C = ({ pace: M = 0, offset: K = 0, emitChange: fe }) => {
        if (u.value <= 1) return;
        const { active: ve } = r,
          ne = b(M),
          ue = w(ne, K);
        if (e.loop) {
          if (l[0] && ue !== g.value) {
            const E = ue < g.value;
            l[0].setOffset(E ? p.value : 0);
          }
          if (l[u.value - 1] && ue !== 0) {
            const E = ue > 0;
            l[u.value - 1].setOffset(E ? -p.value : 0);
          }
        }
        (r.active = ne),
          (r.offset = ue),
          fe && ne !== ve && t("change", y.value);
      },
      k = () => {
        (r.swiping = !0),
          r.active <= -1
            ? C({
                pace: u.value,
              })
            : r.active >= u.value &&
              C({
                pace: -u.value,
              });
      },
      I = () => {
        k(),
          s.reset(),
          Xn(() => {
            (r.swiping = !1),
              C({
                pace: -1,
                emitChange: !0,
              });
          });
      },
      _ = () => {
        k(),
          s.reset(),
          Xn(() => {
            (r.swiping = !1),
              C({
                pace: 1,
                emitChange: !0,
              });
          });
      };
    let R;
    const O = () => clearTimeout(R),
      x = () => {
        O(),
          +e.autoplay > 0 &&
            u.value > 1 &&
            (R = setTimeout(() => {
              _(), x();
            }, +e.autoplay));
      },
      P = (M = +e.initialSwipe) => {
        if (!o.value) return;
        const K = () => {
          var fe, ve;
          if (!xo(o)) {
            const ne = {
              width: o.value.offsetWidth,
              height: o.value.offsetHeight,
            };
            (r.rect = ne),
              (r.width = +((fe = e.width) != null ? fe : ne.width)),
              (r.height = +((ve = e.height) != null ? ve : ne.height));
          }
          u.value &&
            ((M = Math.min(u.value - 1, M)), M === -1 && (M = u.value - 1)),
            (r.active = M),
            (r.swiping = !0),
            (r.offset = w(M)),
            l.forEach((ne) => {
              ne.setOffset(0);
            }),
            x();
        };
        xo(o) ? Ae().then(K) : K();
      },
      D = () => P(r.active);
    let Q;
    const oe = (M) => {
        !e.touchable ||
          M.touches.length > 1 ||
          (s.start(M), (a = !1), (Q = Date.now()), O(), k());
      },
      H = (M) => {
        e.touchable &&
          r.swiping &&
          (s.move(M),
          v.value &&
            ((!e.loop &&
              ((r.active === 0 && h.value > 0) ||
                (r.active === u.value - 1 && h.value < 0))) ||
              (We(M, e.stopPropagation),
              C({
                offset: h.value,
              }),
              a ||
                (t("dragStart", {
                  index: y.value,
                }),
                (a = !0)))));
      },
      J = () => {
        if (!e.touchable || !r.swiping) return;
        const M = Date.now() - Q,
          K = h.value / M;
        if (
          (Math.abs(K) > 0.25 || Math.abs(h.value) > f.value / 2) &&
          v.value
        ) {
          const ve = e.vertical ? s.offsetY.value : s.offsetX.value;
          let ne = 0;
          e.loop
            ? (ne = ve > 0 ? (h.value > 0 ? -1 : 1) : 0)
            : (ne = -Math[h.value > 0 ? "ceil" : "floor"](h.value / f.value)),
            C({
              pace: ne,
              emitChange: !0,
            });
        } else
          h.value &&
            C({
              pace: 0,
            });
        (a = !1),
          (r.swiping = !1),
          t("dragEnd", {
            index: y.value,
          }),
          x();
      },
      se = (M, K = {}) => {
        k(),
          s.reset(),
          Xn(() => {
            let fe;
            e.loop && M === u.value
              ? (fe = r.active === 0 ? 0 : M)
              : (fe = M % u.value),
              K.immediate
                ? Xn(() => {
                    r.swiping = !1;
                  })
                : (r.swiping = !1),
              C({
                pace: fe - r.active,
                emitChange: !0,
              });
          });
      },
      Ie = (M, K) => {
        const fe = K === y.value,
          ve = fe
            ? {
                backgroundColor: e.indicatorColor,
              }
            : void 0;
        return d(
          "i",
          {
            style: ve,
            class: dr("indicator", {
              active: fe,
            }),
          },
          null
        );
      },
      De = () => {
        if (n.indicator)
          return n.indicator({
            active: y.value,
            total: u.value,
          });
        if (e.showIndicators && u.value > 1)
          return d(
            "div",
            {
              class: dr("indicators", {
                vertical: e.vertical,
              }),
            },
            [Array(u.value).fill("").map(Ie)]
          );
      };
    return (
      Oe({
        prev: I,
        next: _,
        state: r,
        resize: D,
        swipeTo: se,
      }),
      c({
        size: f,
        props: e,
        count: u,
        activeIndicator: y,
      }),
      ie(
        () => e.initialSwipe,
        (M) => P(+M)
      ),
      ie(u, () => P(r.active)),
      ie(() => e.autoplay, x),
      ie([Xt, zt, () => e.width, () => e.height], D),
      ie(X0(), (M) => {
        M === "visible" ? x() : O();
      }),
      tt(P),
      mn(() => P(r.active)),
      ca(() => P(r.active)),
      vn(O),
      yn(O),
      et("touchmove", H, {
        target: i,
      }),
      () => {
        var M;
        return d(
          "div",
          {
            ref: o,
            class: dr(),
          },
          [
            d(
              "div",
              {
                ref: i,
                style: m.value,
                class: dr("track", {
                  vertical: e.vertical,
                }),
                onTouchstartPassive: oe,
                onTouchend: J,
                onTouchcancel: J,
              },
              [(M = n.default) == null ? void 0 : M.call(n)]
            ),
            De(),
          ]
        );
      }
    );
  },
});
const vl = Z(xy),
  [Ty, zc] = W("tabs");
var Ey = j({
  name: Ty,
  props: {
    count: dt(Number),
    inited: Boolean,
    animated: Boolean,
    duration: dt(Y),
    swipeable: Boolean,
    lazyRender: Boolean,
    currentIndex: dt(Number),
  },
  emits: ["change"],
  setup(e, { emit: t, slots: n }) {
    const o = $(),
      i = (s) => t("change", s),
      r = () => {
        var s;
        const l = (s = n.default) == null ? void 0 : s.call(n);
        return e.animated || e.swipeable
          ? d(
              vl,
              {
                ref: o,
                loop: !1,
                class: zc("track"),
                duration: +e.duration * 1e3,
                touchable: e.swipeable,
                lazyRender: e.lazyRender,
                showIndicators: !1,
                onChange: i,
              },
              {
                default: () => [l],
              }
            )
          : l;
      },
      a = (s) => {
        const l = o.value;
        l &&
          l.state.active !== s &&
          l.swipeTo(s, {
            immediate: !e.inited,
          });
      };
    return (
      ie(() => e.currentIndex, a),
      tt(() => {
        a(e.currentIndex);
      }),
      Oe({
        swipeRef: o,
      }),
      () =>
        d(
          "div",
          {
            class: zc("content", {
              animated: e.animated || e.swipeable,
            }),
          },
          [r()]
        )
    );
  },
});
const [zf, fr] = W("tabs"),
  Py = {
    type: G("line"),
    color: String,
    border: Boolean,
    sticky: Boolean,
    shrink: Boolean,
    active: ce(0),
    duration: ce(0.3),
    animated: Boolean,
    ellipsis: z,
    swipeable: Boolean,
    scrollspy: Boolean,
    offsetTop: ce(0),
    background: String,
    lazyRender: z,
    showHeader: z,
    lineWidth: Y,
    lineHeight: Y,
    beforeChange: Function,
    swipeThreshold: ce(5),
    titleActiveColor: String,
    titleInactiveColor: String,
  },
  jf = Symbol(zf);
var Ay = j({
  name: zf,
  props: Py,
  emits: ["change", "scroll", "rendered", "clickTab", "update:active"],
  setup(e, { emit: t, slots: n }) {
    let o, i, r, a, s;
    const l = $(),
      c = $(),
      u = $(),
      f = $(),
      h = fi(),
      g = ui(l),
      [S, p] = Ji(),
      { children: y, linkChildren: v } = wt(jf),
      m = Ze({
        inited: !1,
        position: "",
        lineStyle: {},
        currentIndex: -1,
      }),
      b = B(() => y.length > +e.swipeThreshold || !e.ellipsis || e.shrink),
      w = B(() => ({
        borderColor: e.color,
        background: e.background,
      })),
      C = (ne, ue) => {
        var E;
        return (E = ne.name) != null ? E : ue;
      },
      k = B(() => {
        const ne = y[m.currentIndex];
        if (ne) return C(ne, m.currentIndex);
      }),
      I = B(() => ul(e.offsetTop)),
      _ = B(() => (e.sticky ? I.value + o : 0)),
      R = (ne) => {
        const ue = c.value,
          E = S.value;
        if (!b.value || !ue || !E || !E[m.currentIndex]) return;
        const V = E[m.currentIndex].$el,
          N = V.offsetLeft - (ue.offsetWidth - V.offsetWidth) / 2;
        a && a(), (a = yy(ue, N, ne ? 0 : +e.duration));
      },
      O = () => {
        const ne = m.inited;
        Ae(() => {
          const ue = S.value;
          if (!ue || !ue[m.currentIndex] || e.type !== "line" || xo(l.value))
            return;
          const E = ue[m.currentIndex].$el,
            { lineWidth: V, lineHeight: N } = e,
            ee = E.offsetLeft + E.offsetWidth / 2,
            ye = {
              width: xe(V),
              backgroundColor: e.color,
              transform: `translateX(${ee}px) translateX(-50%)`,
            };
          if ((ne && (ye.transitionDuration = `${e.duration}s`), $e(N))) {
            const Ee = xe(N);
            (ye.height = Ee), (ye.borderRadius = Ee);
          }
          m.lineStyle = ye;
        });
      },
      x = (ne) => {
        const ue = ne < m.currentIndex ? -1 : 1;
        for (; ne >= 0 && ne < y.length; ) {
          if (!y[ne].disabled) return ne;
          ne += ue;
        }
      },
      P = (ne, ue) => {
        const E = x(ne);
        if (!$e(E)) return;
        const V = y[E],
          N = C(V, E),
          ee = m.currentIndex !== null;
        m.currentIndex !== E && ((m.currentIndex = E), ue || R(), O()),
          N !== e.active &&
            (t("update:active", N), ee && t("change", N, V.title)),
          r && !e.scrollspy && Wi(Math.ceil(Pc(l.value) - I.value));
      },
      D = (ne, ue) => {
        const E = y.find((N, ee) => C(N, ee) === ne),
          V = E ? y.indexOf(E) : 0;
        P(V, ue);
      },
      Q = (ne = !1) => {
        if (e.scrollspy) {
          const ue = y[m.currentIndex].$el;
          if (ue && g.value) {
            const E = Pc(ue, g.value) - _.value;
            (i = !0),
              s && s(),
              (s = by(g.value, E, ne ? 0 : +e.duration, () => {
                i = !1;
              }));
          }
        }
      },
      oe = (ne, ue, E) => {
        const { title: V, disabled: N } = y[ue],
          ee = C(y[ue], ue);
        N ||
          (lo(e.beforeChange, {
            args: [ee],
            done: () => {
              P(ue), Q();
            },
          }),
          Ef(ne)),
          t("clickTab", {
            name: ee,
            title: V,
            event: E,
            disabled: N,
          });
      },
      H = (ne) => {
        (r = ne.isFixed), t("scroll", ne);
      },
      J = (ne) => {
        Ae(() => {
          D(ne), Q(!0);
        });
      },
      se = () => {
        for (let ne = 0; ne < y.length; ne++) {
          const { top: ue } = Ne(y[ne].$el);
          if (ue > _.value) return ne === 0 ? 0 : ne - 1;
        }
        return y.length - 1;
      },
      Ie = () => {
        if (e.scrollspy && !i) {
          const ne = se();
          P(ne);
        }
      },
      De = () => {
        if (e.type === "line" && y.length)
          return d(
            "div",
            {
              class: fr("line"),
              style: m.lineStyle,
            },
            null
          );
      },
      M = () => {
        var ne, ue, E;
        const { type: V, border: N, sticky: ee } = e,
          ye = [
            d(
              "div",
              {
                ref: ee ? void 0 : u,
                class: [
                  fr("wrap"),
                  {
                    [la]: V === "line" && N,
                  },
                ],
              },
              [
                d(
                  "div",
                  {
                    ref: c,
                    role: "tablist",
                    class: fr("nav", [
                      V,
                      {
                        shrink: e.shrink,
                        complete: b.value,
                      },
                    ]),
                    style: w.value,
                    "aria-orientation": "horizontal",
                  },
                  [
                    (ne = n["nav-left"]) == null ? void 0 : ne.call(n),
                    y.map((Ee) => Ee.renderTitle(oe)),
                    De(),
                    (ue = n["nav-right"]) == null ? void 0 : ue.call(n),
                  ]
                ),
              ]
            ),
            (E = n["nav-bottom"]) == null ? void 0 : E.call(n),
          ];
        return ee
          ? d(
              "div",
              {
                ref: u,
              },
              [ye]
            )
          : ye;
      },
      K = () => {
        O(),
          Ae(() => {
            var ne, ue;
            R(!0),
              (ue = (ne = f.value) == null ? void 0 : ne.swipeRef.value) ==
                null || ue.resize();
          });
      };
    ie(() => [e.color, e.duration, e.lineWidth, e.lineHeight], O),
      ie(Xt, K),
      ie(
        () => e.active,
        (ne) => {
          ne !== k.value && D(ne);
        }
      ),
      ie(
        () => y.length,
        () => {
          m.inited &&
            (D(e.active),
            O(),
            Ae(() => {
              R(!0);
            }));
        }
      );
    const fe = () => {
        D(e.active, !0),
          Ae(() => {
            (m.inited = !0), u.value && (o = Ne(u.value).height), R(!0);
          });
      },
      ve = (ne, ue) => t("rendered", ne, ue);
    return (
      Oe({
        resize: K,
        scrollTo: J,
      }),
      mn(O),
      ca(O),
      ci(fe),
      Ff(l, O),
      et("scroll", Ie, {
        target: g,
        passive: !0,
      }),
      v({
        id: h,
        props: e,
        setLine: O,
        scrollable: b,
        onRendered: ve,
        currentName: k,
        setTitleRefs: p,
        scrollIntoView: R,
      }),
      () =>
        d(
          "div",
          {
            ref: l,
            class: fr([e.type]),
          },
          [
            e.showHeader
              ? e.sticky
                ? d(
                    Vf,
                    {
                      container: l.value,
                      offsetTop: I.value,
                      onScroll: H,
                    },
                    {
                      default: () => [M()],
                    }
                  )
                : M()
              : null,
            d(
              Ey,
              {
                ref: f,
                count: y.length,
                inited: m.inited,
                animated: e.animated,
                duration: e.duration,
                swipeable: e.swipeable,
                lazyRender: e.lazyRender,
                currentIndex: m.currentIndex,
                onChange: P,
              },
              {
                default: () => {
                  var ne;
                  return [(ne = n.default) == null ? void 0 : ne.call(n)];
                },
              }
            ),
          ]
        )
    );
  },
});
const Uf = Symbol(),
  Iy = () => xt(Uf, null),
  [Ry, jc] = W("tab"),
  Oy = j({
    name: Ry,
    props: {
      id: String,
      dot: Boolean,
      type: String,
      color: String,
      title: String,
      badge: Y,
      shrink: Boolean,
      isActive: Boolean,
      disabled: Boolean,
      controls: String,
      scrollable: Boolean,
      activeColor: String,
      inactiveColor: String,
      showZeroBadge: z,
    },
    setup(e, { slots: t }) {
      const n = B(() => {
          const i = {},
            {
              type: r,
              color: a,
              disabled: s,
              isActive: l,
              activeColor: c,
              inactiveColor: u,
            } = e;
          a &&
            r === "card" &&
            ((i.borderColor = a),
            s || (l ? (i.backgroundColor = a) : (i.color = a)));
          const h = l ? c : u;
          return h && (i.color = h), i;
        }),
        o = () => {
          const i = d(
            "span",
            {
              class: jc("text", {
                ellipsis: !e.scrollable,
              }),
            },
            [t.title ? t.title() : e.title]
          );
          return e.dot || ($e(e.badge) && e.badge !== "")
            ? d(
                Po,
                {
                  dot: e.dot,
                  content: e.badge,
                  showZero: e.showZeroBadge,
                },
                {
                  default: () => [i],
                }
              )
            : i;
        };
      return () =>
        d(
          "div",
          {
            id: e.id,
            role: "tab",
            class: [
              jc([
                e.type,
                {
                  grow: e.scrollable && !e.shrink,
                  shrink: e.shrink,
                  active: e.isActive,
                  disabled: e.disabled,
                },
              ]),
            ],
            style: n.value,
            tabindex: e.disabled ? void 0 : e.isActive ? 0 : -1,
            "aria-selected": e.isActive,
            "aria-disabled": e.disabled || void 0,
            "aria-controls": e.controls,
          },
          [o()]
        );
    },
  }),
  [By, Dy] = W("swipe-item");
var $y = j({
  name: By,
  setup(e, { slots: t }) {
    let n;
    const o = Ze({
        offset: 0,
        inited: !1,
        mounted: !1,
      }),
      { parent: i, index: r } = gt(Hf);
    if (!i) return;
    const a = B(() => {
        const c = {},
          { vertical: u } = i.props;
        return (
          i.size.value && (c[u ? "height" : "width"] = `${i.size.value}px`),
          o.offset &&
            (c.transform = `translate${u ? "Y" : "X"}(${o.offset}px)`),
          c
        );
      }),
      s = B(() => {
        const { loop: c, lazyRender: u } = i.props;
        if (!u || n) return !0;
        if (!o.mounted) return !1;
        const f = i.activeIndicator.value,
          h = i.count.value - 1,
          g = f === 0 && c ? h : f - 1,
          S = f === h && c ? 0 : f + 1;
        return (n = r.value === f || r.value === g || r.value === S), n;
      }),
      l = (c) => {
        o.offset = c;
      };
    return (
      tt(() => {
        Ae(() => {
          o.mounted = !0;
        });
      }),
      Oe({
        setOffset: l,
      }),
      () => {
        var c;
        return d(
          "div",
          {
            class: Dy(),
            style: a.value,
          },
          [s.value ? ((c = t.default) == null ? void 0 : c.call(t)) : null]
        );
      }
    );
  },
});
const yl = Z($y),
  [Ly, Fa] = W("tab"),
  My = be({}, co, {
    dot: Boolean,
    name: Y,
    badge: Y,
    title: String,
    disabled: Boolean,
    titleClass: Qe,
    titleStyle: [String, Object],
    showZeroBadge: z,
  });
var Fy = j({
  name: Ly,
  props: My,
  setup(e, { slots: t }) {
    const n = fi(),
      o = $(!1),
      i = tn(),
      { parent: r, index: a } = gt(jf);
    if (!r) return;
    const s = () => {
        var S;
        return (S = e.name) != null ? S : a.value;
      },
      l = () => {
        (o.value = !0),
          r.props.lazyRender &&
            Ae(() => {
              r.onRendered(s(), e.title);
            });
      },
      c = B(() => {
        const S = s() === r.currentName.value;
        return S && !o.value && l(), S;
      }),
      u = $(""),
      f = $("");
    ri(() => {
      const { titleClass: S, titleStyle: p } = e;
      (u.value = S ? At(S) : ""),
        (f.value = p && typeof p != "string" ? xg(Nt(p)) : p);
    });
    const h = (S) =>
        d(
          Oy,
          Re(
            {
              key: n,
              id: `${r.id}-${a.value}`,
              ref: r.setTitleRefs(a.value),
              style: f.value,
              class: u.value,
              isActive: c.value,
              controls: n,
              scrollable: r.scrollable.value,
              activeColor: r.props.titleActiveColor,
              inactiveColor: r.props.titleInactiveColor,
              onClick: (p) => S(i.proxy, a.value, p),
            },
            Me(r.props, ["type", "color", "shrink"]),
            Me(e, ["dot", "badge", "title", "disabled", "showZeroBadge"])
          ),
          {
            title: t.title,
          }
        ),
      g = $(!c.value);
    return (
      ie(c, (S) => {
        S
          ? (g.value = !1)
          : Xn(() => {
              g.value = !0;
            });
      }),
      ie(
        () => e.title,
        () => {
          r.setLine(), r.scrollIntoView();
        }
      ),
      Tn(Uf, c),
      Oe({
        id: n,
        renderTitle: h,
      }),
      () => {
        var S;
        const p = `${r.id}-${a.value}`,
          { animated: y, swipeable: v, scrollspy: m, lazyRender: b } = r.props;
        if (!t.default && !y) return;
        const w = m || c.value;
        if (y || v)
          return d(
            yl,
            {
              id: n,
              role: "tabpanel",
              class: Fa("panel-wrapper", {
                inactive: g.value,
              }),
              tabindex: c.value ? 0 : -1,
              "aria-hidden": !c.value,
              "aria-labelledby": p,
            },
            {
              default: () => {
                var I;
                return [
                  d(
                    "div",
                    {
                      class: Fa("panel"),
                    },
                    [(I = t.default) == null ? void 0 : I.call(t)]
                  ),
                ];
              },
            }
          );
        const k =
          o.value || m || !b
            ? (S = t.default) == null
              ? void 0
              : S.call(t)
            : null;
        return st(
          d(
            "div",
            {
              id: n,
              role: "tabpanel",
              class: Fa("panel"),
              tabindex: w ? 0 : -1,
              "aria-labelledby": p,
            },
            [k]
          ),
          [[ft, w]]
        );
      }
    );
  },
});
const qi = Z(Fy),
  fa = Z(Ay),
  [Wf, Va] = W("picker-group"),
  qf = Symbol(Wf),
  Vy = be(
    {
      tabs: Ye(),
      activeTab: ce(0),
      nextStepText: String,
      showToolbar: z,
    },
    da
  );
var Ny = j({
  name: Wf,
  props: Vy,
  emits: ["confirm", "cancel", "update:activeTab"],
  setup(e, { emit: t, slots: n }) {
    const o = ml(
        () => e.activeTab,
        (c) => t("update:activeTab", c)
      ),
      { children: i, linkChildren: r } = wt(qf);
    r();
    const a = () => +o.value < e.tabs.length - 1 && e.nextStepText,
      s = () => {
        a()
          ? (o.value = +o.value + 1)
          : t(
              "confirm",
              i.map((c) => c.confirm())
            );
      },
      l = () => t("cancel");
    return () => {
      var c, u;
      let f =
        (u = (c = n.default) == null ? void 0 : c.call(n)) == null
          ? void 0
          : u
              .filter((g) => g.type !== kt)
              .map((g) => (g.type === Ve ? g.children : g));
      f && (f = hg(f));
      const h = a() ? e.nextStepText : e.confirmButtonText;
      return d(
        "div",
        {
          class: Va(),
        },
        [
          e.showToolbar
            ? d(
                Mf,
                {
                  title: e.title,
                  cancelButtonText: e.cancelButtonText,
                  confirmButtonText: h,
                  onConfirm: s,
                  onCancel: l,
                },
                Me(n, Lf)
              )
            : null,
          d(
            fa,
            {
              active: o.value,
              "onUpdate:active": (g) => (o.value = g),
              class: Va("tabs"),
              shrink: !0,
              animated: !0,
              lazyRender: !1,
            },
            {
              default: () => [
                e.tabs.map((g, S) =>
                  d(
                    qi,
                    {
                      title: g,
                      titleClass: Va("tab-title"),
                    },
                    {
                      default: () => [f == null ? void 0 : f[S]],
                    }
                  )
                ),
              ],
            }
          ),
        ]
      );
    };
  },
});
const ha = be(
    {
      loading: Boolean,
      readonly: Boolean,
      allowHtml: Boolean,
      optionHeight: ce(44),
      showToolbar: z,
      swipeDuration: ce(1e3),
      visibleOptionNum: ce(6),
    },
    da
  ),
  Hy = be({}, ha, {
    columns: Ye(),
    modelValue: Ye(),
    toolbarPosition: G("top"),
    columnsFieldNames: Object,
  });
var zy = j({
  name: ly,
  props: Hy,
  emits: [
    "confirm",
    "cancel",
    "change",
    "scrollInto",
    "clickOption",
    "update:modelValue",
  ],
  setup(e, { emit: t, slots: n }) {
    const o = $(),
      i = $(e.modelValue.slice(0)),
      { parent: r } = gt(qf),
      { children: a, linkChildren: s } = wt($f);
    s();
    const l = B(() => fy(e.columnsFieldNames)),
      c = B(() => ul(e.optionHeight)),
      u = B(() => cy(e.columns, l.value)),
      f = B(() => {
        const { columns: x } = e;
        switch (u.value) {
          case "multiple":
            return x;
          case "cascade":
            return uy(x, l.value, i);
          default:
            return [x];
        }
      }),
      h = B(() => f.value.some((x) => x.length)),
      g = B(() => f.value.map((x, P) => _s(x, i.value[P], l.value))),
      S = B(() =>
        f.value.map((x, P) =>
          x.findIndex((D) => D[l.value.value] === i.value[P])
        )
      ),
      p = (x, P) => {
        if (i.value[x] !== P) {
          const D = i.value.slice(0);
          (D[x] = P), (i.value = D);
        }
      },
      y = () => ({
        selectedValues: i.value.slice(0),
        selectedOptions: g.value,
        selectedIndexes: S.value,
      }),
      v = (x, P) => {
        p(P, x),
          u.value === "cascade" &&
            i.value.forEach((D, Q) => {
              const oe = f.value[Q];
              Vc(oe, D, l.value) ||
                p(Q, oe.length ? oe[0][l.value.value] : void 0);
            }),
          Ae(() => {
            t(
              "change",
              be(
                {
                  columnIndex: P,
                },
                y()
              )
            );
          });
      },
      m = (x, P) => {
        const D = {
          columnIndex: P,
          currentOption: x,
        };
        t("clickOption", be(y(), D)), t("scrollInto", D);
      },
      b = () => {
        a.forEach((P) => P.stopMomentum());
        const x = y();
        return (
          Ae(() => {
            t("confirm", x);
          }),
          x
        );
      },
      w = () => t("cancel", y()),
      C = () =>
        f.value.map((x, P) =>
          d(
            gy,
            {
              value: i.value[P],
              fields: l.value,
              options: x,
              readonly: e.readonly,
              allowHtml: e.allowHtml,
              optionHeight: c.value,
              swipeDuration: e.swipeDuration,
              visibleOptionNum: e.visibleOptionNum,
              onChange: (D) => v(D, P),
              onClickOption: (D) => m(D, P),
              onScrollInto: (D) => {
                t("scrollInto", {
                  currentOption: D,
                  columnIndex: P,
                });
              },
            },
            {
              option: n.option,
            }
          )
        ),
      k = (x) => {
        if (h.value) {
          const P = {
              height: `${c.value}px`,
            },
            D = {
              backgroundSize: `100% ${(x - c.value) / 2}px`,
            };
          return [
            d(
              "div",
              {
                class: kn("mask"),
                style: D,
              },
              null
            ),
            d(
              "div",
              {
                class: [mv, kn("frame")],
                style: P,
              },
              null
            ),
          ];
        }
      },
      I = () => {
        const x = c.value * +e.visibleOptionNum,
          P = {
            height: `${x}px`,
          };
        return d(
          "div",
          {
            ref: o,
            class: kn("columns"),
            style: P,
          },
          [C(), k(x)]
        );
      },
      _ = () => {
        if (e.showToolbar && !r)
          return d(
            Mf,
            Re(Me(e, vy), {
              onConfirm: b,
              onCancel: w,
            }),
            Me(n, Lf)
          );
      };
    ie(
      f,
      (x) => {
        x.forEach((P, D) => {
          P.length && !Vc(P, i.value[D], l.value) && p(D, Bf(P)[l.value.value]);
        });
      },
      {
        immediate: !0,
      }
    );
    let R;
    return (
      ie(
        () => e.modelValue,
        (x) => {
          !fn(x, i.value) &&
            !fn(x, R) &&
            ((i.value = x.slice(0)), (R = x.slice(0)));
        },
        {
          deep: !0,
        }
      ),
      ie(
        i,
        (x) => {
          fn(x, e.modelValue) || ((R = x.slice(0)), t("update:modelValue", R));
        },
        {
          immediate: !0,
        }
      ),
      et("touchmove", We, {
        target: o,
      }),
      Oe({
        confirm: b,
        getSelectedOptions: () => g.value,
      }),
      () => {
        var x, P;
        return d(
          "div",
          {
            class: kn(),
          },
          [
            e.toolbarPosition === "top" ? _() : null,
            e.loading
              ? d(
                  nn,
                  {
                    class: kn("loading"),
                  },
                  null
                )
              : null,
            (x = n["columns-top"]) == null ? void 0 : x.call(n),
            I(),
            (P = n["columns-bottom"]) == null ? void 0 : P.call(n),
            e.toolbarPosition === "bottom" ? _() : null,
          ]
        );
      }
    );
  },
});
const Go = "000000",
  jy = [
    "title",
    "cancel",
    "confirm",
    "toolbar",
    "columns-top",
    "columns-bottom",
  ],
  Yf = [
    "title",
    "loading",
    "readonly",
    "optionHeight",
    "swipeDuration",
    "visibleOptionNum",
    "cancelButtonText",
    "confirmButtonText",
  ],
  Nn = (e = "", t = Go, n = void 0) => ({
    text: e,
    value: t,
    children: n,
  });
function Uy({ areaList: e, columnsNum: t, columnsPlaceholder: n }) {
  const { city_list: o = {}, county_list: i = {}, province_list: r = {} } = e,
    a = +t > 1,
    s = +t > 2,
    l = () => {
      if (a) return n.length > 1 ? [Nn(n[1], Go, s ? [] : void 0)] : [];
    },
    c = new Map();
  Object.keys(r).forEach((h) => {
    c.set(h.slice(0, 2), Nn(r[h], h, l()));
  });
  const u = new Map();
  if (a) {
    const h = () => {
      if (s) return n.length > 2 ? [Nn(n[2])] : [];
    };
    Object.keys(o).forEach((g) => {
      const S = Nn(o[g], g, h());
      u.set(g.slice(0, 4), S);
      const p = c.get(g.slice(0, 2));
      p && p.children.push(S);
    });
  }
  s &&
    Object.keys(i).forEach((h) => {
      const g = u.get(h.slice(0, 4));
      g && g.children.push(Nn(i[h], h));
    });
  const f = Array.from(c.values());
  if (n.length) {
    const h = s ? [Nn(n[2])] : void 0,
      g = a ? [Nn(n[1], Go, h)] : void 0;
    f.unshift(Nn(n[0], Go, g));
  }
  return f;
}
const ga = Z(zy),
  [Wy, qy] = W("area"),
  Yy = be({}, Me(ha, Yf), {
    modelValue: String,
    columnsNum: ce(3),
    columnsPlaceholder: Ye(),
    areaList: {
      type: Object,
      default: () => ({}),
    },
  });
var Ky = j({
  name: Wy,
  props: Yy,
  emits: ["change", "confirm", "cancel", "update:modelValue"],
  setup(e, { emit: t, slots: n }) {
    const o = $([]),
      i = $(),
      r = B(() => Uy(e)),
      a = (...c) => t("change", ...c),
      s = (...c) => t("cancel", ...c),
      l = (...c) => t("confirm", ...c);
    return (
      ie(
        o,
        (c) => {
          const u = c.length ? c[c.length - 1] : "";
          u && u !== e.modelValue && t("update:modelValue", u);
        },
        {
          deep: !0,
        }
      ),
      ie(
        () => e.modelValue,
        (c) => {
          if (c) {
            const u = o.value.length ? o.value[o.value.length - 1] : "";
            c !== u &&
              (o.value = [
                `${c.slice(0, 2)}0000`,
                `${c.slice(0, 4)}00`,
                c,
              ].slice(0, +e.columnsNum));
          } else o.value = [];
        },
        {
          immediate: !0,
        }
      ),
      Oe({
        confirm: () => {
          var c;
          return (c = i.value) == null ? void 0 : c.confirm();
        },
        getSelectedOptions: () => {
          var c;
          return (
            ((c = i.value) == null ? void 0 : c.getSelectedOptions()) || []
          );
        },
      }),
      () =>
        d(
          ga,
          Re(
            {
              ref: i,
              modelValue: o.value,
              "onUpdate:modelValue": (c) => (o.value = c),
              class: qy(),
              columns: r.value,
              onChange: a,
              onCancel: s,
              onConfirm: l,
            },
            Me(e, Yf)
          ),
          Me(n, jy)
        )
    );
  },
});
const Kf = Z(Ky),
  [Zy, Bo] = W("cell"),
  ma = {
    tag: G("div"),
    icon: String,
    size: String,
    title: Y,
    value: Y,
    label: Y,
    center: Boolean,
    isLink: Boolean,
    border: z,
    iconPrefix: String,
    valueClass: Qe,
    labelClass: Qe,
    titleClass: Qe,
    titleStyle: null,
    arrowDirection: String,
    required: {
      type: [Boolean, String],
      default: null,
    },
    clickable: {
      type: Boolean,
      default: null,
    },
  },
  Gy = be({}, ma, co);
var Qy = j({
  name: Zy,
  props: Gy,
  setup(e, { slots: t }) {
    const n = Eo(),
      o = () => {
        if (t.label || $e(e.label))
          return d(
            "div",
            {
              class: [Bo("label"), e.labelClass],
            },
            [t.label ? t.label() : e.label]
          );
      },
      i = () => {
        var l;
        if (t.title || $e(e.title)) {
          const c = (l = t.title) == null ? void 0 : l.call(t);
          return Array.isArray(c) && c.length === 0
            ? void 0
            : d(
                "div",
                {
                  class: [Bo("title"), e.titleClass],
                  style: e.titleStyle,
                },
                [c || d("span", null, [e.title]), o()]
              );
        }
      },
      r = () => {
        const l = t.value || t.default;
        if (l || $e(e.value))
          return d(
            "div",
            {
              class: [Bo("value"), e.valueClass],
            },
            [l ? l() : d("span", null, [e.value])]
          );
      },
      a = () => {
        if (t.icon) return t.icon();
        if (e.icon)
          return d(
            Te,
            {
              name: e.icon,
              class: Bo("left-icon"),
              classPrefix: e.iconPrefix,
            },
            null
          );
      },
      s = () => {
        if (t["right-icon"]) return t["right-icon"]();
        if (e.isLink) {
          const l =
            e.arrowDirection && e.arrowDirection !== "right"
              ? `arrow-${e.arrowDirection}`
              : "arrow";
          return d(
            Te,
            {
              name: l,
              class: Bo("right-icon"),
            },
            null
          );
        }
      };
    return () => {
      var l;
      const {
          tag: c,
          size: u,
          center: f,
          border: h,
          isLink: g,
          required: S,
        } = e,
        p = (l = e.clickable) != null ? l : g,
        y = {
          center: f,
          required: !!S,
          clickable: p,
          borderless: !h,
        };
      return (
        u && (y[u] = !!u),
        d(
          c,
          {
            class: Bo(y),
            role: p ? "button" : void 0,
            tabindex: p ? 0 : void 0,
            onClick: n,
          },
          {
            default: () => {
              var v;
              return [
                a(),
                i(),
                r(),
                s(),
                (v = t.extra) == null ? void 0 : v.call(t),
              ];
            },
          }
        )
      );
    };
  },
});
const on = Z(Qy),
  [Xy, Jy] = W("form"),
  eb = {
    colon: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    required: [Boolean, String],
    showError: Boolean,
    labelWidth: Y,
    labelAlign: String,
    inputAlign: String,
    scrollToError: Boolean,
    validateFirst: Boolean,
    submitOnEnter: z,
    showErrorMessage: z,
    errorMessageAlign: String,
    validateTrigger: {
      type: [String, Array],
      default: "onBlur",
    },
  };
var tb = j({
  name: Xy,
  props: eb,
  emits: ["submit", "failed"],
  setup(e, { emit: t, slots: n }) {
    const { children: o, linkChildren: i } = wt(Sf),
      r = (y) => (y ? o.filter((v) => y.includes(v.name)) : o),
      a = (y) =>
        new Promise((v, m) => {
          const b = [];
          r(y)
            .reduce(
              (C, k) =>
                C.then(() => {
                  if (!b.length)
                    return k.validate().then((I) => {
                      I && b.push(I);
                    });
                }),
              Promise.resolve()
            )
            .then(() => {
              b.length ? m(b) : v();
            });
        }),
      s = (y) =>
        new Promise((v, m) => {
          const b = r(y);
          Promise.all(b.map((w) => w.validate())).then((w) => {
            (w = w.filter(Boolean)), w.length ? m(w) : v();
          });
        }),
      l = (y) => {
        const v = o.find((m) => m.name === y);
        return v
          ? new Promise((m, b) => {
              v.validate().then((w) => {
                w ? b(w) : m();
              });
            })
          : Promise.reject();
      },
      c = (y) => (typeof y == "string" ? l(y) : e.validateFirst ? a(y) : s(y)),
      u = (y) => {
        typeof y == "string" && (y = [y]),
          r(y).forEach((m) => {
            m.resetValidation();
          });
      },
      f = () =>
        o.reduce((y, v) => ((y[v.name] = v.getValidationStatus()), y), {}),
      h = (y, v) => {
        o.some((m) => (m.name === y ? (m.$el.scrollIntoView(v), !0) : !1));
      },
      g = () =>
        o.reduce(
          (y, v) => (v.name !== void 0 && (y[v.name] = v.formValue.value), y),
          {}
        ),
      S = () => {
        const y = g();
        c()
          .then(() => t("submit", y))
          .catch((v) => {
            t("failed", {
              values: y,
              errors: v,
            }),
              e.scrollToError && v[0].name && h(v[0].name);
          });
      },
      p = (y) => {
        We(y), S();
      };
    return (
      i({
        props: e,
      }),
      Oe({
        submit: S,
        validate: c,
        getValues: g,
        scrollToField: h,
        resetValidation: u,
        getValidationStatus: f,
      }),
      () => {
        var y;
        return d(
          "form",
          {
            class: Jy(),
            onSubmit: p,
          },
          [(y = n.default) == null ? void 0 : y.call(n)]
        );
      }
    );
  },
});
const bl = Z(tb);
function Zf(e) {
  return Array.isArray(e) ? !e.length : e === 0 ? !1 : !e;
}
function nb(e, t) {
  if (Zf(e)) {
    if (t.required) return !1;
    if (t.validateEmpty === !1) return !0;
  }
  return !(t.pattern && !t.pattern.test(String(e)));
}
function ob(e, t) {
  return new Promise((n) => {
    const o = t.validator(e, t);
    if (Vs(o)) {
      o.then(n);
      return;
    }
    n(o);
  });
}
function Uc(e, t) {
  const { message: n } = t;
  return ei(n) ? n(e, t) : n || "";
}
function ib({ target: e }) {
  e.composing = !0;
}
function Wc({ target: e }) {
  e.composing && ((e.composing = !1), e.dispatchEvent(new Event("input")));
}
function rb(e, t) {
  const n = _o();
  e.style.height = "auto";
  let o = e.scrollHeight;
  if (hn(t)) {
    const { maxHeight: i, minHeight: r } = t;
    i !== void 0 && (o = Math.min(o, i)), r !== void 0 && (o = Math.max(o, r));
  }
  o && ((e.style.height = `${o}px`), Wi(n));
}
function ab(e) {
  return e === "number"
    ? {
        type: "text",
        inputmode: "decimal",
      }
    : e === "digit"
    ? {
        type: "tel",
        inputmode: "numeric",
      }
    : {
        type: e,
      };
}
function bn(e) {
  return [...e].length;
}
function Na(e, t) {
  return [...e].slice(0, t).join("");
}
const [sb, Ft] = W("field"),
  pl = {
    id: String,
    name: String,
    leftIcon: String,
    rightIcon: String,
    autofocus: Boolean,
    clearable: Boolean,
    maxlength: Y,
    formatter: Function,
    clearIcon: G("clear"),
    modelValue: ce(""),
    inputAlign: String,
    placeholder: String,
    autocomplete: String,
    autocapitalize: String,
    autocorrect: String,
    errorMessage: String,
    enterkeyhint: String,
    clearTrigger: G("focus"),
    formatTrigger: G("onChange"),
    spellcheck: {
      type: Boolean,
      default: null,
    },
    error: {
      type: Boolean,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: null,
    },
    readonly: {
      type: Boolean,
      default: null,
    },
  },
  lb = be({}, ma, pl, {
    rows: Y,
    type: G("text"),
    rules: Array,
    autosize: [Boolean, Object],
    labelWidth: Y,
    labelClass: Qe,
    labelAlign: String,
    showWordLimit: Boolean,
    errorMessageAlign: String,
    colon: {
      type: Boolean,
      default: null,
    },
  });
var cb = j({
  name: sb,
  props: lb,
  emits: [
    "blur",
    "focus",
    "clear",
    "keypress",
    "clickInput",
    "endValidate",
    "startValidate",
    "clickLeftIcon",
    "clickRightIcon",
    "update:modelValue",
  ],
  setup(e, { emit: t, slots: n }) {
    const o = fi(),
      i = Ze({
        status: "unvalidated",
        focused: !1,
        validateMessage: "",
      }),
      r = $(),
      a = $(),
      s = $(),
      { parent: l } = gt(Sf),
      c = () => {
        var E;
        return String((E = e.modelValue) != null ? E : "");
      },
      u = (E) => {
        if ($e(e[E])) return e[E];
        if (l && $e(l.props[E])) return l.props[E];
      },
      f = B(() => {
        const E = u("readonly");
        if (e.clearable && !E) {
          const V = c() !== "",
            N =
              e.clearTrigger === "always" ||
              (e.clearTrigger === "focus" && i.focused);
          return V && N;
        }
        return !1;
      }),
      h = B(() => (s.value && n.input ? s.value() : e.modelValue)),
      g = B(() => {
        var E;
        const V = u("required");
        return V === "auto"
          ? (E = e.rules) == null
            ? void 0
            : E.some((N) => N.required)
          : V;
      }),
      S = (E) =>
        E.reduce(
          (V, N) =>
            V.then(() => {
              if (i.status === "failed") return;
              let { value: ee } = h;
              if ((N.formatter && (ee = N.formatter(ee, N)), !nb(ee, N))) {
                (i.status = "failed"), (i.validateMessage = Uc(ee, N));
                return;
              }
              if (N.validator)
                return Zf(ee) && N.validateEmpty === !1
                  ? void 0
                  : ob(ee, N).then((ye) => {
                      ye && typeof ye == "string"
                        ? ((i.status = "failed"), (i.validateMessage = ye))
                        : ye === !1 &&
                          ((i.status = "failed"),
                          (i.validateMessage = Uc(ee, N)));
                    });
            }),
          Promise.resolve()
        ),
      p = () => {
        (i.status = "unvalidated"), (i.validateMessage = "");
      },
      y = () =>
        t("endValidate", {
          status: i.status,
          message: i.validateMessage,
        }),
      v = (E = e.rules) =>
        new Promise((V) => {
          p(),
            E
              ? (t("startValidate"),
                S(E).then(() => {
                  i.status === "failed"
                    ? (V({
                        name: e.name,
                        message: i.validateMessage,
                      }),
                      y())
                    : ((i.status = "passed"), V(), y());
                }))
              : V();
        }),
      m = (E) => {
        if (l && e.rules) {
          const { validateTrigger: V } = l.props,
            N = Dr(V).includes(E),
            ee = e.rules.filter((ye) =>
              ye.trigger ? Dr(ye.trigger).includes(E) : N
            );
          ee.length && v(ee);
        }
      },
      b = (E) => {
        var V;
        const { maxlength: N } = e;
        if ($e(N) && bn(E) > +N) {
          const ee = c();
          if (ee && bn(ee) === +N) return ee;
          const ye = (V = r.value) == null ? void 0 : V.selectionEnd;
          if (i.focused && ye) {
            const Ee = [...E],
              T = Ee.length - +N;
            return Ee.splice(ye - T, T), Ee.join("");
          }
          return Na(E, +N);
        }
        return E;
      },
      w = (E, V = "onChange") => {
        const N = E;
        E = b(E);
        const ee = bn(N) - bn(E);
        if (e.type === "number" || e.type === "digit") {
          const Ee = e.type === "number";
          E = ws(E, Ee, Ee);
        }
        let ye = 0;
        if (e.formatter && V === e.formatTrigger) {
          const { formatter: Ee, maxlength: T } = e;
          if (
            ((E = Ee(E)),
            $e(T) && bn(E) > +T && (E = Na(E, +T)),
            r.value && i.focused)
          ) {
            const { selectionEnd: A } = r.value,
              L = Na(N, A);
            ye = bn(Ee(L)) - bn(L);
          }
        }
        if (r.value && r.value.value !== E)
          if (i.focused) {
            let { selectionStart: Ee, selectionEnd: T } = r.value;
            if (((r.value.value = E), $e(Ee) && $e(T))) {
              const A = bn(E);
              ee ? ((Ee -= ee), (T -= ee)) : ye && ((Ee += ye), (T += ye)),
                r.value.setSelectionRange(Math.min(Ee, A), Math.min(T, A));
            }
          } else r.value.value = E;
        E !== e.modelValue && t("update:modelValue", E);
      },
      C = (E) => {
        E.target.composing || w(E.target.value);
      },
      k = () => {
        var E;
        return (E = r.value) == null ? void 0 : E.blur();
      },
      I = () => {
        var E;
        return (E = r.value) == null ? void 0 : E.focus();
      },
      _ = () => {
        const E = r.value;
        e.type === "textarea" && e.autosize && E && rb(E, e.autosize);
      },
      R = (E) => {
        (i.focused = !0), t("focus", E), Ae(_), u("readonly") && k();
      },
      O = (E) => {
        (i.focused = !1),
          w(c(), "onBlur"),
          t("blur", E),
          !u("readonly") && (m("onBlur"), Ae(_), gf());
      },
      x = (E) => t("clickInput", E),
      P = (E) => t("clickLeftIcon", E),
      D = (E) => t("clickRightIcon", E),
      Q = (E) => {
        We(E), t("update:modelValue", ""), t("clear", E);
      },
      oe = B(() => {
        if (typeof e.error == "boolean") return e.error;
        if (l && l.props.showError && i.status === "failed") return !0;
      }),
      H = B(() => {
        const E = u("labelWidth"),
          V = u("labelAlign");
        if (E && V !== "top")
          return {
            width: xe(E),
          };
      }),
      J = (E) => {
        E.keyCode === 13 &&
          (!(l && l.props.submitOnEnter) && e.type !== "textarea" && We(E),
          e.type === "search" && k()),
          t("keypress", E);
      },
      se = () => e.id || `${o}-input`,
      Ie = () => i.status,
      De = () => {
        const E = Ft("control", [
          u("inputAlign"),
          {
            error: oe.value,
            custom: !!n.input,
            "min-height": e.type === "textarea" && !e.autosize,
          },
        ]);
        if (n.input)
          return d(
            "div",
            {
              class: E,
              onClick: x,
            },
            [n.input()]
          );
        const V = {
          id: se(),
          ref: r,
          name: e.name,
          rows: e.rows !== void 0 ? +e.rows : void 0,
          class: E,
          disabled: u("disabled"),
          readonly: u("readonly"),
          autofocus: e.autofocus,
          placeholder: e.placeholder,
          autocomplete: e.autocomplete,
          autocapitalize: e.autocapitalize,
          autocorrect: e.autocorrect,
          enterkeyhint: e.enterkeyhint,
          spellcheck: e.spellcheck,
          "aria-labelledby": e.label ? `${o}-label` : void 0,
          onBlur: O,
          onFocus: R,
          onInput: C,
          onClick: x,
          onChange: Wc,
          onKeypress: J,
          onCompositionend: Wc,
          onCompositionstart: ib,
        };
        return e.type === "textarea"
          ? d("textarea", V, null)
          : d("input", Re(ab(e.type), V), null);
      },
      M = () => {
        const E = n["left-icon"];
        if (e.leftIcon || E)
          return d(
            "div",
            {
              class: Ft("left-icon"),
              onClick: P,
            },
            [
              E
                ? E()
                : d(
                    Te,
                    {
                      name: e.leftIcon,
                      classPrefix: e.iconPrefix,
                    },
                    null
                  ),
            ]
          );
      },
      K = () => {
        const E = n["right-icon"];
        if (e.rightIcon || E)
          return d(
            "div",
            {
              class: Ft("right-icon"),
              onClick: D,
            },
            [
              E
                ? E()
                : d(
                    Te,
                    {
                      name: e.rightIcon,
                      classPrefix: e.iconPrefix,
                    },
                    null
                  ),
            ]
          );
      },
      fe = () => {
        if (e.showWordLimit && e.maxlength) {
          const E = bn(c());
          return d(
            "div",
            {
              class: Ft("word-limit"),
            },
            [
              d(
                "span",
                {
                  class: Ft("word-num"),
                },
                [E]
              ),
              Se("/"),
              e.maxlength,
            ]
          );
        }
      },
      ve = () => {
        if (l && l.props.showErrorMessage === !1) return;
        const E = e.errorMessage || i.validateMessage;
        if (E) {
          const V = n["error-message"],
            N = u("errorMessageAlign");
          return d(
            "div",
            {
              class: Ft("error-message", N),
            },
            [
              V
                ? V({
                    message: E,
                  })
                : E,
            ]
          );
        }
      },
      ne = () => {
        const E = u("labelWidth"),
          V = u("labelAlign"),
          N = u("colon") ? ":" : "";
        if (n.label) return [n.label(), N];
        if (e.label)
          return d(
            "label",
            {
              id: `${o}-label`,
              for: n.input ? void 0 : se(),
              onClick: (ee) => {
                We(ee), I();
              },
              style:
                V === "top" && E
                  ? {
                      width: xe(E),
                    }
                  : void 0,
            },
            [e.label + N]
          );
      },
      ue = () => [
        d(
          "div",
          {
            class: Ft("body"),
          },
          [
            De(),
            f.value &&
              d(
                Te,
                {
                  ref: a,
                  name: e.clearIcon,
                  class: Ft("clear"),
                },
                null
              ),
            K(),
            n.button &&
              d(
                "div",
                {
                  class: Ft("button"),
                },
                [n.button()]
              ),
          ]
        ),
        fe(),
        ve(),
      ];
    return (
      Oe({
        blur: k,
        focus: I,
        validate: v,
        formValue: h,
        resetValidation: p,
        getValidationStatus: Ie,
      }),
      Tn(hf, {
        customValue: s,
        resetValidation: p,
        validateWithTrigger: m,
      }),
      ie(
        () => e.modelValue,
        () => {
          w(c()), p(), m("onChange"), Ae(_);
        }
      ),
      tt(() => {
        w(c(), e.formatTrigger), Ae(_);
      }),
      et("touchstart", Q, {
        target: B(() => {
          var E;
          return (E = a.value) == null ? void 0 : E.$el;
        }),
      }),
      () => {
        const E = u("disabled"),
          V = u("labelAlign"),
          N = M(),
          ee = () => {
            const ye = ne();
            return V === "top" ? [N, ye].filter(Boolean) : ye || [];
          };
        return d(
          on,
          {
            size: e.size,
            class: Ft({
              error: oe.value,
              disabled: E,
              [`label-${V}`]: V,
            }),
            center: e.center,
            border: e.border,
            isLink: e.isLink,
            clickable: e.clickable,
            titleStyle: H.value,
            valueClass: Ft("value"),
            titleClass: [
              Ft("label", [
                V,
                {
                  required: g.value,
                },
              ]),
              e.labelClass,
            ],
            arrowDirection: e.arrowDirection,
          },
          {
            icon: N && V !== "top" ? () => N : null,
            title: ee,
            value: ue,
            extra: n.extra,
          }
        );
      }
    );
  },
});
const En = Z(cb);
let yi = 0;
function ub(e) {
  e
    ? (yi || document.body.classList.add("van-toast--unclickable"), yi++)
    : yi &&
      (yi--, yi || document.body.classList.remove("van-toast--unclickable"));
}
const [db, Do] = W("toast"),
  fb = [
    "show",
    "overlay",
    "teleport",
    "transition",
    "overlayClass",
    "overlayStyle",
    "closeOnClickOverlay",
    "zIndex",
  ],
  hb = {
    icon: String,
    show: Boolean,
    type: G("text"),
    overlay: Boolean,
    message: Y,
    iconSize: Y,
    duration: nt(2e3),
    position: G("middle"),
    teleport: [String, Object],
    wordBreak: String,
    className: Qe,
    iconPrefix: String,
    transition: G("van-fade"),
    loadingType: String,
    forbidClick: Boolean,
    overlayClass: Qe,
    overlayStyle: Object,
    closeOnClick: Boolean,
    closeOnClickOverlay: Boolean,
    zIndex: Y,
  };
var Gf = j({
  name: db,
  props: hb,
  emits: ["update:show"],
  setup(e, { emit: t, slots: n }) {
    let o,
      i = !1;
    const r = () => {
        const f = e.show && e.forbidClick;
        i !== f && ((i = f), ub(i));
      },
      a = (f) => t("update:show", f),
      s = () => {
        e.closeOnClick && a(!1);
      },
      l = () => clearTimeout(o),
      c = () => {
        const {
          icon: f,
          type: h,
          iconSize: g,
          iconPrefix: S,
          loadingType: p,
        } = e;
        if (f || h === "success" || h === "fail")
          return d(
            Te,
            {
              name: f || h,
              size: g,
              class: Do("icon"),
              classPrefix: S,
            },
            null
          );
        if (h === "loading")
          return d(
            nn,
            {
              class: Do("loading"),
              size: g,
              type: p,
            },
            null
          );
      },
      u = () => {
        const { type: f, message: h } = e;
        if (n.message)
          return d(
            "div",
            {
              class: Do("text"),
            },
            [n.message()]
          );
        if ($e(h) && h !== "")
          return f === "html"
            ? d(
                "div",
                {
                  key: 0,
                  class: Do("text"),
                  innerHTML: String(h),
                },
                null
              )
            : d(
                "div",
                {
                  class: Do("text"),
                },
                [h]
              );
      };
    return (
      ie(() => [e.show, e.forbidClick], r),
      ie(
        () => [e.show, e.type, e.message, e.duration],
        () => {
          l(),
            e.show &&
              e.duration > 0 &&
              (o = setTimeout(() => {
                a(!1);
              }, e.duration));
        }
      ),
      tt(r),
      ai(r),
      () =>
        d(
          $t,
          Re(
            {
              class: [
                Do([
                  e.position,
                  e.wordBreak === "normal" ? "break-normal" : e.wordBreak,
                  {
                    [e.type]: !e.icon,
                  },
                ]),
                e.className,
              ],
              lockScroll: !1,
              onClick: s,
              onClosed: l,
              "onUpdate:show": a,
            },
            Me(e, fb)
          ),
          {
            default: () => [c(), u()],
          }
        )
    );
  },
});
function wl() {
  const e = Ze({
      show: !1,
    }),
    t = (i) => {
      e.show = i;
    },
    n = (i) => {
      be(e, i, {
        transitionAppear: !0,
      }),
        t(!0);
    },
    o = () => t(!1);
  return (
    Oe({
      open: n,
      close: o,
      toggle: t,
    }),
    {
      open: n,
      close: o,
      state: e,
      toggle: t,
    }
  );
}
function Sl(e) {
  const t = df(e),
    n = document.createElement("div");
  return (
    document.body.appendChild(n),
    {
      instance: t.mount(n),
      unmount() {
        t.unmount(), document.body.removeChild(n);
      },
    }
  );
}
const gb = {
  icon: "",
  type: "text",
  message: "",
  className: "",
  overlay: !1,
  onClose: void 0,
  onOpened: void 0,
  duration: 2e3,
  teleport: "body",
  iconSize: void 0,
  iconPrefix: void 0,
  position: "middle",
  transition: "van-fade",
  forbidClick: !1,
  loadingType: void 0,
  overlayClass: "",
  overlayStyle: void 0,
  closeOnClick: !1,
  closeOnClickOverlay: !1,
};
let hr = [],
  mb = !1,
  qc = be({}, gb);
const vb = new Map();
function yb(e) {
  return hn(e)
    ? e
    : {
        message: e,
      };
}
function bb() {
  const { instance: e, unmount: t } = Sl({
    setup() {
      const n = $(""),
        { open: o, state: i, close: r, toggle: a } = wl(),
        s = () => {},
        l = () =>
          d(
            Gf,
            Re(i, {
              onClosed: s,
              "onUpdate:show": a,
            }),
            null
          );
      return (
        ie(n, (c) => {
          i.message = c;
        }),
        (tn().render = l),
        {
          open: o,
          close: r,
          message: n,
        }
      );
    },
  });
  return e;
}
function pb() {
  if (!hr.length || mb) {
    const e = bb();
    hr.push(e);
  }
  return hr[hr.length - 1];
}
function ks(e = {}) {
  if (!Dt) return {};
  const t = pb(),
    n = yb(e);
  return t.open(be({}, qc, vb.get(n.type || qc.type), n)), t;
}
const wb = Z(Gf),
  [Sb, Ha] = W("switch"),
  Cb = {
    size: Y,
    loading: Boolean,
    disabled: Boolean,
    modelValue: Qe,
    activeColor: String,
    inactiveColor: String,
    activeValue: {
      type: Qe,
      default: !0,
    },
    inactiveValue: {
      type: Qe,
      default: !1,
    },
  };
var _b = j({
  name: Sb,
  props: Cb,
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t, slots: n }) {
    const o = () => e.modelValue === e.activeValue,
      i = () => {
        if (!e.disabled && !e.loading) {
          const a = o() ? e.inactiveValue : e.activeValue;
          t("update:modelValue", a), t("change", a);
        }
      },
      r = () => {
        if (e.loading) {
          const a = o() ? e.activeColor : e.inactiveColor;
          return d(
            nn,
            {
              class: Ha("loading"),
              color: a,
            },
            null
          );
        }
        if (n.node) return n.node();
      };
    return (
      so(() => e.modelValue),
      () => {
        var a;
        const {
            size: s,
            loading: l,
            disabled: c,
            activeColor: u,
            inactiveColor: f,
          } = e,
          h = o(),
          g = {
            fontSize: xe(s),
            backgroundColor: h ? u : f,
          };
        return d(
          "div",
          {
            role: "switch",
            class: Ha({
              on: h,
              loading: l,
              disabled: c,
            }),
            style: g,
            tabindex: c ? void 0 : 0,
            "aria-checked": h,
            onClick: i,
          },
          [
            d(
              "div",
              {
                class: Ha("node"),
              },
              [r()]
            ),
            (a = n.background) == null ? void 0 : a.call(n),
          ]
        );
      }
    );
  },
});
const Cl = Z(_b),
  [kb, Yc] = W("address-edit-detail"),
  Kc = W("address-edit")[2];
var xb = j({
  name: kb,
  props: {
    show: Boolean,
    rows: Y,
    value: String,
    rules: Array,
    focused: Boolean,
    maxlength: Y,
    searchResult: Array,
    showSearchResult: Boolean,
  },
  emits: ["blur", "focus", "input", "selectSearch"],
  setup(e, { emit: t }) {
    const n = $(),
      o = () => e.focused && e.searchResult && e.showSearchResult,
      i = (c) => {
        t("selectSearch", c),
          t("input", `${c.address || ""} ${c.name || ""}`.trim());
      },
      r = () => {
        if (!o()) return;
        const { searchResult: c } = e;
        return c.map((u) =>
          d(
            on,
            {
              clickable: !0,
              key: (u.name || "") + (u.address || ""),
              icon: "location-o",
              title: u.name,
              label: u.address,
              class: Yc("search-item"),
              border: !1,
              onClick: () => i(u),
            },
            null
          )
        );
      },
      a = (c) => t("blur", c),
      s = (c) => t("focus", c),
      l = (c) => t("input", c);
    return () => {
      if (e.show)
        return d(Ve, null, [
          d(
            En,
            {
              autosize: !0,
              clearable: !0,
              ref: n,
              class: Yc(),
              rows: e.rows,
              type: "textarea",
              rules: e.rules,
              label: Kc("addressDetail"),
              border: !o(),
              maxlength: e.maxlength,
              modelValue: e.value,
              placeholder: Kc("addressDetail"),
              onBlur: a,
              onFocus: s,
              "onUpdate:modelValue": l,
            },
            null
          ),
          r(),
        ]);
    };
  },
});
const [Tb, $o, St] = W("address-edit"),
  Qf = {
    name: "",
    tel: "",
    city: "",
    county: "",
    country: "",
    province: "",
    areaCode: "",
    isDefault: !1,
    addressDetail: "",
  },
  Eb = {
    areaList: Object,
    isSaving: Boolean,
    isDeleting: Boolean,
    validator: Function,
    showArea: z,
    showDetail: z,
    showDelete: Boolean,
    disableArea: Boolean,
    searchResult: Array,
    telMaxlength: Y,
    showSetDefault: Boolean,
    saveButtonText: String,
    areaPlaceholder: String,
    deleteButtonText: String,
    showSearchResult: Boolean,
    detailRows: ce(1),
    detailMaxlength: ce(200),
    areaColumnsPlaceholder: Ye(),
    addressInfo: {
      type: Object,
      default: () => be({}, Qf),
    },
    telValidator: {
      type: Function,
      default: ed,
    },
  };
var Pb = j({
  name: Tb,
  props: Eb,
  emits: [
    "save",
    "focus",
    "change",
    "delete",
    "clickArea",
    "changeArea",
    "changeDetail",
    "selectSearch",
    "changeDefault",
  ],
  setup(e, { emit: t, slots: n }) {
    const o = $(),
      i = Ze({}),
      r = $(!1),
      a = $(!1),
      s = B(() => hn(e.areaList) && Object.keys(e.areaList).length),
      l = B(() => {
        const { province: k, city: I, county: _, areaCode: R } = i;
        if (R) {
          const O = [k, I, _];
          return k && k === I && O.splice(1, 1), O.filter(Boolean).join("/");
        }
        return "";
      }),
      c = B(() => {
        var k;
        return ((k = e.searchResult) == null ? void 0 : k.length) && a.value;
      }),
      u = (k) => {
        (a.value = k === "addressDetail"), t("focus", k);
      },
      f = (k, I) => {
        t("change", {
          key: k,
          value: I,
        });
      },
      h = B(() => {
        const { validator: k, telValidator: I } = e,
          _ = (R, O) => ({
            validator: (x) => {
              if (k) {
                const P = k(R, x);
                if (P) return P;
              }
              return x ? !0 : O;
            },
          });
        return {
          name: [_("name", St("nameEmpty"))],
          tel: [
            _("tel", St("telInvalid")),
            {
              validator: I,
              message: St("telInvalid"),
            },
          ],
          areaCode: [_("areaCode", St("areaEmpty"))],
          addressDetail: [_("addressDetail", St("addressEmpty"))],
        };
      }),
      g = () => t("save", i),
      S = (k) => {
        (i.addressDetail = k), t("changeDetail", k);
      },
      p = (k) => {
        (i.province = k[0].text), (i.city = k[1].text), (i.county = k[2].text);
      },
      y = ({ selectedValues: k, selectedOptions: I }) => {
        k.some((_) => _ === Go)
          ? ks(St("areaEmpty"))
          : ((r.value = !1), p(I), t("changeArea", I));
      },
      v = () => t("delete", i),
      m = (k) => {
        i.areaCode = k || "";
      },
      b = () => {
        setTimeout(() => {
          a.value = !1;
        });
      },
      w = (k) => {
        i.addressDetail = k;
      },
      C = () => {
        if (e.showSetDefault) {
          const k = {
            "right-icon": () =>
              d(
                Cl,
                {
                  modelValue: i.isDefault,
                  "onUpdate:modelValue": (I) => (i.isDefault = I),
                  onChange: (I) => t("changeDefault", I),
                },
                null
              ),
          };
          return st(
            d(
              on,
              {
                center: !0,
                border: !1,
                title: St("defaultAddress"),
                class: $o("default"),
              },
              k
            ),
            [[ft, !c.value]]
          );
        }
      };
    return (
      Oe({
        setAreaCode: m,
        setAddressDetail: w,
      }),
      ie(
        () => e.addressInfo,
        (k) => {
          be(i, Qf, k),
            Ae(() => {
              var I;
              const _ = (I = o.value) == null ? void 0 : I.getSelectedOptions();
              _ && _.every((R) => R && R.value !== Go) && p(_);
            });
        },
        {
          deep: !0,
          immediate: !0,
        }
      ),
      () => {
        const { disableArea: k } = e;
        return d(
          bl,
          {
            class: $o(),
            onSubmit: g,
          },
          {
            default: () => {
              var I;
              return [
                d(
                  "div",
                  {
                    class: $o("fields"),
                  },
                  [
                    d(
                      En,
                      {
                        modelValue: i.name,
                        "onUpdate:modelValue": [
                          (_) => (i.name = _),
                          (_) => f("name", _),
                        ],
                        clearable: !0,
                        label: St("name"),
                        rules: h.value.name,
                        placeholder: St("name"),
                        onFocus: () => u("name"),
                      },
                      null
                    ),
                    d(
                      En,
                      {
                        modelValue: i.tel,
                        "onUpdate:modelValue": [
                          (_) => (i.tel = _),
                          (_) => f("tel", _),
                        ],
                        clearable: !0,
                        type: "tel",
                        label: St("tel"),
                        rules: h.value.tel,
                        maxlength: e.telMaxlength,
                        placeholder: St("tel"),
                        onFocus: () => u("tel"),
                      },
                      null
                    ),
                    st(
                      d(
                        En,
                        {
                          readonly: !0,
                          label: St("area"),
                          "is-link": !k,
                          modelValue: l.value,
                          rules: e.showArea ? h.value.areaCode : void 0,
                          placeholder: e.areaPlaceholder || St("area"),
                          onFocus: () => u("areaCode"),
                          onClick: () => {
                            t("clickArea"), (r.value = !k);
                          },
                        },
                        null
                      ),
                      [[ft, e.showArea]]
                    ),
                    d(
                      xb,
                      {
                        show: e.showDetail,
                        rows: e.detailRows,
                        rules: h.value.addressDetail,
                        value: i.addressDetail,
                        focused: a.value,
                        maxlength: e.detailMaxlength,
                        searchResult: e.searchResult,
                        showSearchResult: e.showSearchResult,
                        onBlur: b,
                        onFocus: () => u("addressDetail"),
                        onInput: S,
                        onSelectSearch: (_) => t("selectSearch", _),
                      },
                      null
                    ),
                    (I = n.default) == null ? void 0 : I.call(n),
                  ]
                ),
                C(),
                st(
                  d(
                    "div",
                    {
                      class: $o("buttons"),
                    },
                    [
                      d(
                        pt,
                        {
                          block: !0,
                          round: !0,
                          type: "primary",
                          text: e.saveButtonText || St("save"),
                          class: $o("button"),
                          loading: e.isSaving,
                          nativeType: "submit",
                        },
                        null
                      ),
                      e.showDelete &&
                        d(
                          pt,
                          {
                            block: !0,
                            round: !0,
                            class: $o("button"),
                            loading: e.isDeleting,
                            text: e.deleteButtonText || St("delete"),
                            onClick: v,
                          },
                          null
                        ),
                    ]
                  ),
                  [[ft, !c.value]]
                ),
                d(
                  $t,
                  {
                    show: r.value,
                    "onUpdate:show": (_) => (r.value = _),
                    round: !0,
                    teleport: "body",
                    position: "bottom",
                    lazyRender: !1,
                  },
                  {
                    default: () => [
                      d(
                        Kf,
                        {
                          modelValue: i.areaCode,
                          "onUpdate:modelValue": (_) => (i.areaCode = _),
                          ref: o,
                          loading: !s.value,
                          areaList: e.areaList,
                          columnsPlaceholder: e.areaColumnsPlaceholder,
                          onConfirm: y,
                          onCancel: () => {
                            r.value = !1;
                          },
                        },
                        null
                      ),
                    ],
                  }
                ),
              ];
            },
          }
        );
      }
    );
  },
});
const Ab = Z(Pb),
  [Xf, Ib] = W("radio-group"),
  Rb = {
    shape: String,
    disabled: Boolean,
    iconSize: Y,
    direction: String,
    modelValue: Qe,
    checkedColor: String,
  },
  Jf = Symbol(Xf);
var Ob = j({
  name: Xf,
  props: Rb,
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t, slots: n }) {
    const { linkChildren: o } = wt(Jf),
      i = (r) => t("update:modelValue", r);
    return (
      ie(
        () => e.modelValue,
        (r) => t("change", r)
      ),
      o({
        props: e,
        updateValue: i,
      }),
      so(() => e.modelValue),
      () => {
        var r;
        return d(
          "div",
          {
            class: Ib([e.direction]),
            role: "radiogroup",
          },
          [(r = n.default) == null ? void 0 : r.call(n)]
        );
      }
    );
  },
});
const _l = Z(Ob),
  [eh, Bb] = W("checkbox-group"),
  Db = {
    max: Y,
    shape: G("round"),
    disabled: Boolean,
    iconSize: Y,
    direction: String,
    modelValue: Ye(),
    checkedColor: String,
  },
  th = Symbol(eh);
var $b = j({
  name: eh,
  props: Db,
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t, slots: n }) {
    const { children: o, linkChildren: i } = wt(th),
      r = (s) => t("update:modelValue", s),
      a = (s = {}) => {
        typeof s == "boolean" &&
          (s = {
            checked: s,
          });
        const { checked: l, skipDisabled: c } = s,
          f = o
            .filter((h) =>
              h.props.bindGroup
                ? h.props.disabled && c
                  ? h.checked.value
                  : l ?? !h.checked.value
                : !1
            )
            .map((h) => h.name);
        r(f);
      };
    return (
      ie(
        () => e.modelValue,
        (s) => t("change", s)
      ),
      Oe({
        toggleAll: a,
      }),
      so(() => e.modelValue),
      i({
        props: e,
        updateValue: r,
      }),
      () => {
        var s;
        return d(
          "div",
          {
            class: Bb([e.direction]),
          },
          [(s = n.default) == null ? void 0 : s.call(n)]
        );
      }
    );
  },
});
const nh = Z($b),
  [Lb, Zc] = W("tag"),
  Mb = {
    size: String,
    mark: Boolean,
    show: z,
    type: G("default"),
    color: String,
    plain: Boolean,
    round: Boolean,
    textColor: String,
    closeable: Boolean,
  };
var Fb = j({
  name: Lb,
  props: Mb,
  emits: ["close"],
  setup(e, { slots: t, emit: n }) {
    const o = (a) => {
        a.stopPropagation(), n("close", a);
      },
      i = () =>
        e.plain
          ? {
              color: e.textColor || e.color,
              borderColor: e.color,
            }
          : {
              color: e.textColor,
              background: e.color,
            },
      r = () => {
        var a;
        const {
            type: s,
            mark: l,
            plain: c,
            round: u,
            size: f,
            closeable: h,
          } = e,
          g = {
            mark: l,
            plain: c,
            round: u,
          };
        f && (g[f] = f);
        const S =
          h &&
          d(
            Te,
            {
              name: "cross",
              class: [Zc("close"), bt],
              onClick: o,
            },
            null
          );
        return d(
          "span",
          {
            style: i(),
            class: Zc([g, s]),
          },
          [(a = t.default) == null ? void 0 : a.call(t), S]
        );
      };
    return () =>
      d(
        li,
        {
          name: e.closeable ? "van-fade" : void 0,
        },
        {
          default: () => [e.show ? r() : null],
        }
      );
  },
});
const va = Z(Fb),
  kl = {
    name: Qe,
    disabled: Boolean,
    iconSize: Y,
    modelValue: Qe,
    checkedColor: String,
    labelPosition: String,
    labelDisabled: Boolean,
  };
var oh = j({
  props: be({}, kl, {
    bem: dt(Function),
    role: String,
    shape: String,
    parent: Object,
    checked: Boolean,
    bindGroup: z,
    indeterminate: {
      type: Boolean,
      default: null,
    },
  }),
  emits: ["click", "toggle"],
  setup(e, { emit: t, slots: n }) {
    const o = $(),
      i = (h) => {
        if (e.parent && e.bindGroup) return e.parent.props[h];
      },
      r = B(() => {
        if (e.parent && e.bindGroup) {
          const h = i("disabled") || e.disabled;
          if (e.role === "checkbox") {
            const g = i("modelValue").length,
              S = i("max"),
              p = S && g >= +S;
            return h || (p && !e.checked);
          }
          return h;
        }
        return e.disabled;
      }),
      a = B(() => i("direction")),
      s = B(() => {
        const h = e.checkedColor || i("checkedColor");
        if (h && e.checked && !r.value)
          return {
            borderColor: h,
            backgroundColor: h,
          };
      }),
      l = B(() => e.shape || i("shape") || "round"),
      c = (h) => {
        const { target: g } = h,
          S = o.value,
          p = S === g || (S == null ? void 0 : S.contains(g));
        !r.value && (p || !e.labelDisabled) && t("toggle"), t("click", h);
      },
      u = () => {
        var h, g;
        const { bem: S, checked: p, indeterminate: y } = e,
          v = e.iconSize || i("iconSize");
        return d(
          "div",
          {
            ref: o,
            class: S("icon", [
              l.value,
              {
                disabled: r.value,
                checked: p,
                indeterminate: y,
              },
            ]),
            style:
              l.value !== "dot"
                ? {
                    fontSize: xe(v),
                  }
                : {
                    width: xe(v),
                    height: xe(v),
                    borderColor: (h = s.value) == null ? void 0 : h.borderColor,
                  },
          },
          [
            n.icon
              ? n.icon({
                  checked: p,
                  disabled: r.value,
                })
              : l.value !== "dot"
              ? d(
                  Te,
                  {
                    name: y ? "minus" : "success",
                    style: s.value,
                  },
                  null
                )
              : d(
                  "div",
                  {
                    class: S("icon--dot__icon"),
                    style: {
                      backgroundColor:
                        (g = s.value) == null ? void 0 : g.backgroundColor,
                    },
                  },
                  null
                ),
          ]
        );
      },
      f = () => {
        const { checked: h } = e;
        if (n.default)
          return d(
            "span",
            {
              class: e.bem("label", [
                e.labelPosition,
                {
                  disabled: r.value,
                },
              ]),
            },
            [
              n.default({
                checked: h,
                disabled: r.value,
              }),
            ]
          );
      };
    return () => {
      const h = e.labelPosition === "left" ? [f(), u()] : [u(), f()];
      return d(
        "div",
        {
          role: e.role,
          class: e.bem([
            {
              disabled: r.value,
              "label-disabled": e.labelDisabled,
            },
            a.value,
          ]),
          tabindex: r.value ? void 0 : 0,
          "aria-checked": e.checked,
          onClick: c,
        },
        [h]
      );
    };
  },
});
const Vb = be({}, kl, {
    shape: String,
  }),
  [Nb, Hb] = W("radio");
var zb = j({
  name: Nb,
  props: Vb,
  emits: ["update:modelValue"],
  setup(e, { emit: t, slots: n }) {
    const { parent: o } = gt(Jf),
      i = () => (o ? o.props.modelValue : e.modelValue) === e.name,
      r = () => {
        o ? o.updateValue(e.name) : t("update:modelValue", e.name);
      };
    return () =>
      d(
        oh,
        Re(
          {
            bem: Hb,
            role: "radio",
            parent: o,
            checked: i(),
            onToggle: r,
          },
          e
        ),
        Me(n, ["default", "icon"])
      );
  },
});
const xl = Z(zb),
  [jb, Ub] = W("checkbox"),
  Wb = be({}, kl, {
    shape: String,
    bindGroup: z,
    indeterminate: {
      type: Boolean,
      default: null,
    },
  });
var qb = j({
  name: jb,
  props: Wb,
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t, slots: n }) {
    const { parent: o } = gt(th),
      i = (s) => {
        const { name: l } = e,
          { max: c, modelValue: u } = o.props,
          f = u.slice();
        if (s)
          !(c && f.length >= +c) &&
            !f.includes(l) &&
            (f.push(l), e.bindGroup && o.updateValue(f));
        else {
          const h = f.indexOf(l);
          h !== -1 && (f.splice(h, 1), e.bindGroup && o.updateValue(f));
        }
      },
      r = B(() =>
        o && e.bindGroup
          ? o.props.modelValue.indexOf(e.name) !== -1
          : !!e.modelValue
      ),
      a = (s = !r.value) => {
        o && e.bindGroup ? i(s) : t("update:modelValue", s),
          e.indeterminate !== null && t("change", s);
      };
    return (
      ie(
        () => e.modelValue,
        (s) => {
          e.indeterminate === null && t("change", s);
        }
      ),
      Oe({
        toggle: a,
        props: e,
        checked: r,
      }),
      so(() => e.modelValue),
      () =>
        d(
          oh,
          Re(
            {
              bem: Ub,
              role: "checkbox",
              parent: o,
              checked: r.value,
              onToggle: a,
            },
            e
          ),
          Me(n, ["default", "icon"])
        )
    );
  },
});
const Tl = Z(qb),
  [Yb, Lo] = W("address-item");
var Kb = j({
  name: Yb,
  props: {
    address: dt(Object),
    disabled: Boolean,
    switchable: Boolean,
    singleChoice: Boolean,
    defaultTagText: String,
    rightIcon: G("edit"),
  },
  emits: ["edit", "click", "select"],
  setup(e, { slots: t, emit: n }) {
    const o = (s) => {
        e.switchable && n("select"), n("click", s);
      },
      i = () =>
        d(
          Te,
          {
            name: e.rightIcon,
            class: Lo("edit"),
            onClick: (s) => {
              s.stopPropagation(), n("edit"), n("click", s);
            },
          },
          null
        ),
      r = () => {
        if (t.tag) return t.tag(e.address);
        if (e.address.isDefault && e.defaultTagText)
          return d(
            va,
            {
              type: "primary",
              round: !0,
              class: Lo("tag"),
            },
            {
              default: () => [e.defaultTagText],
            }
          );
      },
      a = () => {
        const { address: s, disabled: l, switchable: c, singleChoice: u } = e,
          f = [
            d(
              "div",
              {
                class: Lo("name"),
              },
              [`${s.name} ${s.tel}`, r()]
            ),
            d(
              "div",
              {
                class: Lo("address"),
              },
              [s.address]
            ),
          ];
        return c && !l
          ? u
            ? d(
                xl,
                {
                  name: s.id,
                  iconSize: 18,
                },
                {
                  default: () => [f],
                }
              )
            : d(
                Tl,
                {
                  name: s.id,
                  iconSize: 18,
                },
                {
                  default: () => [f],
                }
              )
          : f;
      };
    return () => {
      var s;
      const { disabled: l } = e;
      return d(
        "div",
        {
          class: Lo({
            disabled: l,
          }),
          onClick: o,
        },
        [
          d(
            on,
            {
              border: !1,
              titleClass: Lo("title"),
            },
            {
              title: a,
              "right-icon": i,
            }
          ),
          (s = t.bottom) == null
            ? void 0
            : s.call(
                t,
                be({}, e.address, {
                  disabled: l,
                })
              ),
        ]
      );
    };
  },
});
const [Zb, gr, Gb] = W("address-list"),
  Qb = {
    list: Ye(),
    modelValue: [...Y, Array],
    switchable: z,
    disabledText: String,
    disabledList: Ye(),
    showAddButton: z,
    addButtonText: String,
    defaultTagText: String,
    rightIcon: G("edit"),
  };
var Xb = j({
  name: Zb,
  props: Qb,
  emits: [
    "add",
    "edit",
    "select",
    "clickItem",
    "editDisabled",
    "selectDisabled",
    "update:modelValue",
  ],
  setup(e, { slots: t, emit: n }) {
    const o = B(() => !Array.isArray(e.modelValue)),
      i = (s, l, c) => {
        const u = () => n(c ? "editDisabled" : "edit", s, l),
          f = (g) =>
            n("clickItem", s, l, {
              event: g,
            }),
          h = () => {
            if ((n(c ? "selectDisabled" : "select", s, l), !c))
              if (o.value) n("update:modelValue", s.id);
              else {
                const g = e.modelValue;
                g.includes(s.id)
                  ? n(
                      "update:modelValue",
                      g.filter((S) => S !== s.id)
                    )
                  : n("update:modelValue", [...g, s.id]);
              }
          };
        return d(
          Kb,
          {
            key: s.id,
            address: s,
            disabled: c,
            switchable: e.switchable,
            singleChoice: o.value,
            defaultTagText: e.defaultTagText,
            rightIcon: e.rightIcon,
            onEdit: u,
            onClick: f,
            onSelect: h,
          },
          {
            bottom: t["item-bottom"],
            tag: t.tag,
          }
        );
      },
      r = (s, l) => {
        if (s) return s.map((c, u) => i(c, u, l));
      },
      a = () =>
        e.showAddButton
          ? d(
              "div",
              {
                class: [gr("bottom"), "van-safe-area-bottom"],
              },
              [
                d(
                  pt,
                  {
                    round: !0,
                    block: !0,
                    type: "primary",
                    text: e.addButtonText || Gb("add"),
                    class: gr("add"),
                    onClick: () => n("add"),
                  },
                  null
                ),
              ]
            )
          : void 0;
    return () => {
      var s, l;
      const c = r(e.list),
        u = r(e.disabledList, !0),
        f =
          e.disabledText &&
          d(
            "div",
            {
              class: gr("disabled-text"),
            },
            [e.disabledText]
          );
      return d(
        "div",
        {
          class: gr(),
        },
        [
          (s = t.top) == null ? void 0 : s.call(t),
          !o.value && Array.isArray(e.modelValue)
            ? d(
                nh,
                {
                  modelValue: e.modelValue,
                },
                {
                  default: () => [c],
                }
              )
            : d(
                _l,
                {
                  modelValue: e.modelValue,
                },
                {
                  default: () => [c],
                }
              ),
          f,
          u,
          (l = t.default) == null ? void 0 : l.call(t),
          a(),
        ]
      );
    };
  },
});
const Jb = Z(Xb);
function ep(e, t) {
  let n = null,
    o = 0;
  return function (...i) {
    if (n) return;
    const r = Date.now() - o,
      a = () => {
        (o = Date.now()), (n = !1), e.apply(this, i);
      };
    r >= t ? a() : (n = setTimeout(a, t));
  };
}
const [tp, za] = W("back-top"),
  np = {
    right: Y,
    bottom: Y,
    zIndex: Y,
    target: [String, Object],
    offset: ce(200),
    immediate: Boolean,
    teleport: {
      type: [String, Object],
      default: "body",
    },
  };
var op = j({
  name: tp,
  inheritAttrs: !1,
  props: np,
  emits: ["click"],
  setup(e, { emit: t, slots: n, attrs: o }) {
    let i = !1;
    const r = $(!1),
      a = $(),
      s = $(),
      l = B(() =>
        be(Dn(e.zIndex), {
          right: xe(e.right),
          bottom: xe(e.bottom),
        })
      ),
      c = (g) => {
        var S;
        t("click", g),
          (S = s.value) == null ||
            S.scrollTo({
              top: 0,
              behavior: e.immediate ? "auto" : "smooth",
            });
      },
      u = () => {
        r.value = s.value ? An(s.value) >= +e.offset : !1;
      },
      f = () => {
        const { target: g } = e;
        if (typeof g == "string") {
          const S = document.querySelector(g);
          if (S) return S;
        } else return g;
      },
      h = () => {
        Dt &&
          Ae(() => {
            (s.value = e.target ? f() : ll(a.value)), u();
          });
      };
    return (
      et("scroll", ep(u, 100), {
        target: s,
      }),
      tt(h),
      mn(() => {
        i && ((r.value = !0), (i = !1));
      }),
      vn(() => {
        r.value && e.teleport && ((r.value = !1), (i = !0));
      }),
      ie(() => e.target, h),
      () => {
        const g = d(
          "div",
          Re(
            {
              ref: e.teleport ? void 0 : a,
              class: za({
                active: r.value,
              }),
              style: l.value,
              onClick: c,
            },
            o
          ),
          [
            n.default
              ? n.default()
              : d(
                  Te,
                  {
                    name: "back-top",
                    class: za("icon"),
                  },
                  null
                ),
          ]
        );
        return e.teleport
          ? [
              d(
                "div",
                {
                  ref: a,
                  class: za("placeholder"),
                },
                null
              ),
              d(
                si,
                {
                  to: e.teleport,
                },
                {
                  default: () => [g],
                }
              ),
            ]
          : g;
      }
    );
  },
});
const ip = Z(op);
var rp = (e, t, n) =>
  new Promise((o, i) => {
    var r = (l) => {
        try {
          s(n.next(l));
        } catch (c) {
          i(c);
        }
      },
      a = (l) => {
        try {
          s(n.throw(l));
        } catch (c) {
          i(c);
        }
      },
      s = (l) => (l.done ? o(l.value) : Promise.resolve(l.value).then(r, a));
    s((n = n.apply(e, t)).next());
  });
const ap = {
    top: ce(10),
    rows: ce(4),
    duration: ce(4e3),
    autoPlay: z,
    delay: nt(300),
    modelValue: Ye(),
  },
  [sp, Gc] = W("barrage");
var lp = j({
  name: sp,
  props: ap,
  emits: ["update:modelValue"],
  setup(e, { emit: t, slots: n }) {
    const o = $(),
      i = Gc("item"),
      r = $(0),
      a = [],
      s = (p, y = e.delay) => {
        const v = document.createElement("span");
        return (
          (v.className = i),
          (v.innerText = String(p)),
          (v.style.animationDuration = `${e.duration}ms`),
          (v.style.animationDelay = `${y}ms`),
          (v.style.animationName = "van-barrage"),
          (v.style.animationTimingFunction = "linear"),
          v
        );
      },
      l = $(!0),
      c = $(e.autoPlay),
      u = ({ id: p, text: y }, v) => {
        var m;
        const b = s(y, l.value ? v * e.delay : void 0);
        !e.autoPlay &&
          c.value === !1 &&
          (b.style.animationPlayState = "paused"),
          (m = o.value) == null || m.append(b),
          r.value++;
        const w = ((r.value - 1) % +e.rows) * b.offsetHeight + +e.top;
        (b.style.top = `${w}px`),
          (b.dataset.id = String(p)),
          a.push(b),
          b.addEventListener("animationend", () => {
            t(
              "update:modelValue",
              [...e.modelValue].filter((C) => String(C.id) !== b.dataset.id)
            );
          });
      },
      f = (p, y) => {
        const v = new Map(y.map((m) => [m.id, m]));
        p.forEach((m, b) => {
          v.has(m.id) ? v.delete(m.id) : u(m, b);
        }),
          v.forEach((m) => {
            const b = a.findIndex((w) => w.dataset.id === String(m.id));
            b > -1 && (a[b].remove(), a.splice(b, 1));
          }),
          (l.value = !1);
      };
    ie(
      () => e.modelValue.slice(),
      (p, y) => f(p ?? [], y ?? []),
      {
        deep: !0,
      }
    );
    const h = $({});
    return (
      tt(() =>
        rp(this, null, function* () {
          var p;
          (h.value["--move-distance"] = `-${
            (p = o.value) == null ? void 0 : p.offsetWidth
          }px`),
            yield Ae(),
            f(e.modelValue, []);
        })
      ),
      Oe({
        play: () => {
          (c.value = !0),
            a.forEach((p) => {
              p.style.animationPlayState = "running";
            });
        },
        pause: () => {
          (c.value = !1),
            a.forEach((p) => {
              p.style.animationPlayState = "paused";
            });
        },
      }),
      () => {
        var p;
        return d(
          "div",
          {
            class: Gc(),
            ref: o,
            style: h.value,
          },
          [(p = n.default) == null ? void 0 : p.call(n)]
        );
      }
    );
  },
});
const cp = Z(lp),
  [up, Je, Pn] = W("calendar"),
  dp = (e) => Pn("monthTitle", e.getFullYear(), e.getMonth() + 1);
function xs(e, t) {
  const n = e.getFullYear(),
    o = t.getFullYear();
  if (n === o) {
    const i = e.getMonth(),
      r = t.getMonth();
    return i === r ? 0 : i > r ? 1 : -1;
  }
  return n > o ? 1 : -1;
}
function Bt(e, t) {
  const n = xs(e, t);
  if (n === 0) {
    const o = e.getDate(),
      i = t.getDate();
    return o === i ? 0 : o > i ? 1 : -1;
  }
  return n;
}
const ti = (e) => new Date(e),
  Qc = (e) => (Array.isArray(e) ? e.map(ti) : ti(e));
function El(e, t) {
  const n = ti(e);
  return n.setDate(n.getDate() + t), n;
}
function Pl(e, t) {
  const n = ti(e);
  return n.setMonth(n.getMonth() + t), n;
}
function ih(e, t) {
  const n = ti(e);
  return n.setFullYear(n.getFullYear() + t), n;
}
const Ts = (e) => El(e, -1),
  Es = (e) => El(e, 1),
  Xc = (e) => Pl(e, -1),
  Jc = (e) => Pl(e, 1),
  eu = (e) => ih(e, -1),
  tu = (e) => ih(e, 1),
  mr = () => {
    const e = new Date();
    return e.setHours(0, 0, 0, 0), e;
  };
function fp(e) {
  const t = e[0].getTime();
  return (e[1].getTime() - t) / (1e3 * 60 * 60 * 24) + 1;
}
const rh = be({}, ha, {
    modelValue: Ye(),
    filter: Function,
    formatter: {
      type: Function,
      default: (e, t) => t,
    },
  }),
  ah = Object.keys(ha);
function hp(e, t) {
  if (e < 0) return [];
  const n = Array(e);
  let o = -1;
  for (; ++o < e; ) n[o] = t(o);
  return n;
}
const sh = (e, t) => 32 - new Date(e, t - 1, 32).getDate(),
  Qo = (e, t, n, o, i, r) => {
    const a = hp(t - e + 1, (s) => {
      const l = Zt(e + s);
      return o(n, {
        text: l,
        value: l,
      });
    });
    return i ? i(n, a, r) : a;
  },
  lh = (e, t) =>
    e.map((n, o) => {
      const i = t[o];
      if (i.length) {
        const r = +i[0].value,
          a = +i[i.length - 1].value;
        return Zt(ht(+n, r, a));
      }
      return n;
    }),
  [gp] = W("calendar-day");
var mp = j({
  name: gp,
  props: {
    item: dt(Object),
    color: String,
    index: Number,
    offset: nt(0),
    rowHeight: String,
  },
  emits: ["click", "clickDisabledDate"],
  setup(e, { emit: t, slots: n }) {
    const o = B(() => {
        var l;
        const { item: c, index: u, color: f, offset: h, rowHeight: g } = e,
          S = {
            height: g,
          };
        if (c.type === "placeholder") return (S.width = "100%"), S;
        if ((u === 0 && (S.marginLeft = `${(100 * h) / 7}%`), f))
          switch (c.type) {
            case "end":
            case "start":
            case "start-end":
            case "multiple-middle":
            case "multiple-selected":
              S.background = f;
              break;
            case "middle":
              S.color = f;
              break;
          }
        return (
          h + (((l = c.date) == null ? void 0 : l.getDate()) || 1) > 28 &&
            (S.marginBottom = 0),
          S
        );
      }),
      i = () => {
        e.item.type !== "disabled"
          ? t("click", e.item)
          : t("clickDisabledDate", e.item);
      },
      r = () => {
        const { topInfo: l } = e.item;
        if (l || n["top-info"])
          return d(
            "div",
            {
              class: Je("top-info"),
            },
            [n["top-info"] ? n["top-info"](e.item) : l]
          );
      },
      a = () => {
        const { bottomInfo: l } = e.item;
        if (l || n["bottom-info"])
          return d(
            "div",
            {
              class: Je("bottom-info"),
            },
            [n["bottom-info"] ? n["bottom-info"](e.item) : l]
          );
      },
      s = () => {
        const { item: l, color: c, rowHeight: u } = e,
          { type: f, text: h } = l,
          g = [r(), h, a()];
        return f === "selected"
          ? d(
              "div",
              {
                class: Je("selected-day"),
                style: {
                  width: u,
                  height: u,
                  background: c,
                },
              },
              [g]
            )
          : g;
      };
    return () => {
      const { type: l, className: c } = e.item;
      return l === "placeholder"
        ? d(
            "div",
            {
              class: Je("day"),
              style: o.value,
            },
            null
          )
        : d(
            "div",
            {
              role: "gridcell",
              style: o.value,
              class: [Je("day", l), c],
              tabindex: l === "disabled" ? void 0 : -1,
              onClick: i,
            },
            [s()]
          );
    };
  },
});
const [vp] = W("calendar-month"),
  yp = {
    date: dt(Date),
    type: String,
    color: String,
    minDate: Date,
    maxDate: Date,
    showMark: Boolean,
    rowHeight: Y,
    formatter: Function,
    lazyRender: Boolean,
    currentDate: [Date, Array],
    allowSameDay: Boolean,
    showSubtitle: Boolean,
    showMonthTitle: Boolean,
    firstDayOfWeek: Number,
  };
var bp = j({
  name: vp,
  props: yp,
  emits: ["click", "clickDisabledDate"],
  setup(e, { emit: t, slots: n }) {
    const [o, i] = j0(),
      r = $(),
      a = $(),
      s = kf(a),
      l = B(() => dp(e.date)),
      c = B(() => xe(e.rowHeight)),
      u = B(() => {
        const O = e.date.getDate(),
          P = (e.date.getDay() - (O % 7) + 8) % 7;
        return e.firstDayOfWeek ? (P + 7 - e.firstDayOfWeek) % 7 : P;
      }),
      f = B(() => sh(e.date.getFullYear(), e.date.getMonth() + 1)),
      h = B(() => o.value || !e.lazyRender),
      g = () => l.value,
      S = (O) => {
        const x = (P) => e.currentDate.some((D) => Bt(D, P) === 0);
        if (x(O)) {
          const P = Ts(O),
            D = Es(O),
            Q = x(P),
            oe = x(D);
          return Q && oe
            ? "multiple-middle"
            : Q
            ? "end"
            : oe
            ? "start"
            : "multiple-selected";
        }
        return "";
      },
      p = (O) => {
        const [x, P] = e.currentDate;
        if (!x) return "";
        const D = Bt(O, x);
        if (!P) return D === 0 ? "start" : "";
        const Q = Bt(O, P);
        return e.allowSameDay && D === 0 && Q === 0
          ? "start-end"
          : D === 0
          ? "start"
          : Q === 0
          ? "end"
          : D > 0 && Q < 0
          ? "middle"
          : "";
      },
      y = (O) => {
        const { type: x, minDate: P, maxDate: D, currentDate: Q } = e;
        if ((P && Bt(O, P) < 0) || (D && Bt(O, D) > 0)) return "disabled";
        if (Q === null) return "";
        if (Array.isArray(Q)) {
          if (x === "multiple") return S(O);
          if (x === "range") return p(O);
        } else if (x === "single") return Bt(O, Q) === 0 ? "selected" : "";
        return "";
      },
      v = (O) => {
        if (e.type === "range") {
          if (O === "start" || O === "end") return Pn(O);
          if (O === "start-end") return `${Pn("start")}/${Pn("end")}`;
        }
      },
      m = () => {
        if (e.showMonthTitle)
          return d(
            "div",
            {
              class: Je("month-title"),
            },
            [
              n["month-title"]
                ? n["month-title"]({
                    date: e.date,
                    text: l.value,
                  })
                : l.value,
            ]
          );
      },
      b = () => {
        if (e.showMark && h.value)
          return d(
            "div",
            {
              class: Je("month-mark"),
            },
            [e.date.getMonth() + 1]
          );
      },
      w = B(() => {
        const O = Math.ceil((f.value + u.value) / 7);
        return Array(O).fill({
          type: "placeholder",
        });
      }),
      C = B(() => {
        const O = [],
          x = e.date.getFullYear(),
          P = e.date.getMonth();
        for (let D = 1; D <= f.value; D++) {
          const Q = new Date(x, P, D),
            oe = y(Q);
          let H = {
            date: Q,
            type: oe,
            text: D,
            bottomInfo: v(oe),
          };
          e.formatter && (H = e.formatter(H)), O.push(H);
        }
        return O;
      }),
      k = B(() => C.value.filter((O) => O.type === "disabled")),
      I = (O, x) => {
        if (r.value) {
          const P = Ne(r.value),
            D = w.value.length,
            oe = ((Math.ceil((x.getDate() + u.value) / 7) - 1) * P.height) / D;
          Hr(O, P.top + oe + O.scrollTop - Ne(O).top);
        }
      },
      _ = (O, x) =>
        d(
          mp,
          {
            item: O,
            index: x,
            color: e.color,
            offset: u.value,
            rowHeight: c.value,
            onClick: (P) => t("click", P),
            onClickDisabledDate: (P) => t("clickDisabledDate", P),
          },
          Me(n, ["top-info", "bottom-info"])
        ),
      R = () =>
        d(
          "div",
          {
            ref: r,
            role: "grid",
            class: Je("days"),
          },
          [b(), (h.value ? C : w).value.map(_)]
        );
    return (
      Oe({
        getTitle: g,
        getHeight: () => s.value,
        setVisible: i,
        scrollToDate: I,
        disabledDays: k,
      }),
      () =>
        d(
          "div",
          {
            class: Je("month"),
            ref: a,
          },
          [m(), R()]
        )
    );
  },
});
const [pp] = W("calendar-header");
var wp = j({
  name: pp,
  props: {
    date: Date,
    minDate: Date,
    maxDate: Date,
    title: String,
    subtitle: String,
    showTitle: Boolean,
    showSubtitle: Boolean,
    firstDayOfWeek: Number,
    switchMode: G("none"),
  },
  emits: ["clickSubtitle", "panelChange"],
  setup(e, { slots: t, emit: n }) {
    const o = B(() => {
        const g = Xc(e.date);
        return e.minDate && g < e.minDate;
      }),
      i = B(() => {
        const g = eu(e.date);
        return e.minDate && g < e.minDate;
      }),
      r = B(() => {
        const g = Jc(e.date);
        return e.maxDate && g > e.maxDate;
      }),
      a = B(() => {
        const g = tu(e.date);
        return e.maxDate && g > e.maxDate;
      }),
      s = () => {
        if (e.showTitle) {
          const g = e.title || Pn("title"),
            S = t.title ? t.title() : g;
          return d(
            "div",
            {
              class: Je("header-title"),
            },
            [S]
          );
        }
      },
      l = (g) => n("clickSubtitle", g),
      c = (g) => n("panelChange", g),
      u = (g) => {
        const S = e.switchMode === "year-month",
          p = t[g ? "next-month" : "prev-month"],
          y = t[g ? "next-year" : "prev-year"],
          v = g ? r.value : o.value,
          m = g ? a.value : i.value,
          b = g ? "arrow" : "arrow-left",
          w = g ? "arrow-double-right" : "arrow-double-left",
          C = () => c((g ? Jc : Xc)(e.date)),
          k = () => c((g ? tu : eu)(e.date)),
          I = d(
            "view",
            {
              class: Je("header-action", {
                disabled: v,
              }),
              onClick: v ? void 0 : C,
            },
            [
              p
                ? p({
                    disabled: v,
                  })
                : d(
                    Te,
                    {
                      class: {
                        [bt]: !v,
                      },
                      name: b,
                    },
                    null
                  ),
            ]
          ),
          _ =
            S &&
            d(
              "view",
              {
                class: Je("header-action", {
                  disabled: m,
                }),
                onClick: m ? void 0 : k,
              },
              [
                y
                  ? y({
                      disabled: m,
                    })
                  : d(
                      Te,
                      {
                        class: {
                          [bt]: !m,
                        },
                        name: w,
                      },
                      null
                    ),
              ]
            );
        return g ? [I, _] : [_, I];
      },
      f = () => {
        if (e.showSubtitle) {
          const g = t.subtitle
              ? t.subtitle({
                  date: e.date,
                  text: e.subtitle,
                })
              : e.subtitle,
            S = e.switchMode !== "none";
          return d(
            "div",
            {
              class: Je("header-subtitle", {
                "with-swicth": S,
              }),
              onClick: l,
            },
            [
              S
                ? [
                    u(),
                    d(
                      "div",
                      {
                        class: Je("header-subtitle-text"),
                      },
                      [g]
                    ),
                    u(!0),
                  ]
                : g,
            ]
          );
        }
      },
      h = () => {
        const { firstDayOfWeek: g } = e,
          S = Pn("weekdays"),
          p = [...S.slice(g, 7), ...S.slice(0, g)];
        return d(
          "div",
          {
            class: Je("weekdays"),
          },
          [
            p.map((y) =>
              d(
                "span",
                {
                  class: Je("weekday"),
                },
                [y]
              )
            ),
          ]
        );
      };
    return () =>
      d(
        "div",
        {
          class: Je("header"),
        },
        [s(), f(), h()]
      );
  },
});
const Sp = {
  show: Boolean,
  type: G("single"),
  switchMode: G("none"),
  title: String,
  color: String,
  round: z,
  readonly: Boolean,
  poppable: z,
  maxRange: ce(null),
  position: G("bottom"),
  teleport: [String, Object],
  showMark: z,
  showTitle: z,
  formatter: Function,
  rowHeight: Y,
  confirmText: String,
  rangePrompt: String,
  lazyRender: z,
  showConfirm: z,
  defaultDate: [Date, Array],
  allowSameDay: Boolean,
  showSubtitle: z,
  closeOnPopstate: z,
  showRangePrompt: z,
  confirmDisabledText: String,
  closeOnClickOverlay: z,
  safeAreaInsetTop: Boolean,
  safeAreaInsetBottom: z,
  minDate: {
    type: Date,
    validator: Li,
  },
  maxDate: {
    type: Date,
    validator: Li,
  },
  firstDayOfWeek: {
    type: Y,
    default: 0,
    validator: (e) => e >= 0 && e <= 6,
  },
};
var Cp = j({
  name: up,
  props: Sp,
  emits: [
    "select",
    "confirm",
    "unselect",
    "monthShow",
    "overRange",
    "update:show",
    "clickSubtitle",
    "clickDisabledDate",
    "panelChange",
  ],
  setup(e, { emit: t, slots: n }) {
    const o = B(() => e.switchMode !== "none"),
      i = B(() => (!e.minDate && !o.value ? mr() : e.minDate)),
      r = B(() => (!e.maxDate && !o.value ? Pl(mr(), 6) : e.maxDate)),
      a = (M, K = i.value, fe = r.value) =>
        K && Bt(M, K) === -1 ? K : fe && Bt(M, fe) === 1 ? fe : M,
      s = (M = e.defaultDate) => {
        const { type: K, allowSameDay: fe } = e;
        if (M === null) return M;
        const ve = mr();
        if (K === "range") {
          Array.isArray(M) || (M = []);
          const ne = i.value,
            ue = r.value,
            E = a(M[0] || ve, ne, ue ? (fe ? ue : Ts(ue)) : void 0),
            V = a(M[1] || (fe ? ve : Es(ve)), ne ? (fe ? ne : Es(ne)) : void 0);
          return [E, V];
        }
        return K === "multiple"
          ? Array.isArray(M)
            ? M.map((ne) => a(ne))
            : [a(ve)]
          : ((!M || Array.isArray(M)) && (M = ve), a(M));
      },
      l = () => {
        const M = Array.isArray(f.value) ? f.value[0] : f.value;
        return M || a(mr());
      };
    let c;
    const u = $(),
      f = $(s()),
      h = $(l()),
      g = $(),
      [S, p] = Ji(),
      y = B(() => (e.firstDayOfWeek ? +e.firstDayOfWeek % 7 : 0)),
      v = B(() => {
        const M = [];
        if (!i.value || !r.value) return M;
        const K = new Date(i.value);
        K.setDate(1);
        do M.push(new Date(K)), K.setMonth(K.getMonth() + 1);
        while (xs(K, r.value) !== 1);
        return M;
      }),
      m = B(() => {
        if (f.value) {
          if (e.type === "range") return !f.value[0] || !f.value[1];
          if (e.type === "multiple") return !f.value.length;
        }
        return !f.value;
      }),
      b = () => f.value,
      w = () => {
        const M = An(u.value),
          K = M + c,
          fe = v.value.map((V, N) => S.value[N].getHeight()),
          ve = fe.reduce((V, N) => V + N, 0);
        if (K > ve && M > 0) return;
        let ne = 0,
          ue;
        const E = [-1, -1];
        for (let V = 0; V < v.value.length; V++) {
          const N = S.value[V];
          ne <= K &&
            ne + fe[V] >= M &&
            ((E[1] = V),
            ue || ((ue = N), (E[0] = V)),
            S.value[V].showed ||
              ((S.value[V].showed = !0),
              t("monthShow", {
                date: N.date,
                title: N.getTitle(),
              }))),
            (ne += fe[V]);
        }
        v.value.forEach((V, N) => {
          const ee = N >= E[0] - 1 && N <= E[1] + 1;
          S.value[N].setVisible(ee);
        }),
          ue && (g.value = ue);
      },
      C = (M) => {
        o.value
          ? (h.value = M)
          : yt(() => {
              v.value.some((K, fe) =>
                xs(K, M) === 0
                  ? (u.value && S.value[fe].scrollToDate(u.value, M), !0)
                  : !1
              ),
                w();
            });
      },
      k = () => {
        if (!(e.poppable && !e.show))
          if (f.value) {
            const M = e.type === "single" ? f.value : f.value[0];
            Li(M) && C(M);
          } else o.value || yt(w);
      },
      I = () => {
        (e.poppable && !e.show) ||
          (o.value ||
            yt(() => {
              c = Math.floor(Ne(u).height);
            }),
          k());
      },
      _ = (M = s()) => {
        (f.value = M), k();
      },
      R = (M) => {
        const { maxRange: K, rangePrompt: fe, showRangePrompt: ve } = e;
        return K && fp(M) > +K
          ? (ve && ks(fe || Pn("rangePrompt", K)), t("overRange"), !1)
          : !0;
      },
      O = (M) => {
        (h.value = M),
          t("panelChange", {
            date: M,
          });
      },
      x = () => {
        var M;
        return t("confirm", (M = f.value) != null ? M : Qc(f.value));
      },
      P = (M, K) => {
        const fe = (ve) => {
          (f.value = ve), t("select", Qc(ve));
        };
        if (K && e.type === "range" && !R(M)) {
          fe([M[0], El(M[0], +e.maxRange - 1)]);
          return;
        }
        fe(M), K && !e.showConfirm && x();
      },
      D = (M, K, fe) => {
        var ve;
        return (ve = M.find(
          (ne) => Bt(K, ne.date) === -1 && Bt(ne.date, fe) === -1
        )) == null
          ? void 0
          : ve.date;
      },
      Q = B(() =>
        S.value.reduce((M, K) => {
          var fe, ve;
          return (
            M.push(
              ...((ve = (fe = K.disabledDays) == null ? void 0 : fe.value) !=
              null
                ? ve
                : [])
            ),
            M
          );
        }, [])
      ),
      oe = (M) => {
        if (e.readonly || !M.date) return;
        const { date: K } = M,
          { type: fe } = e;
        if (fe === "range") {
          if (!f.value) {
            P([K]);
            return;
          }
          const [ve, ne] = f.value;
          if (ve && !ne) {
            const ue = Bt(K, ve);
            if (ue === 1) {
              const E = D(Q.value, ve, K);
              if (E) {
                const V = Ts(E);
                Bt(ve, V) === -1 ? P([ve, V]) : P([K]);
              } else P([ve, K], !0);
            } else ue === -1 ? P([K]) : e.allowSameDay && P([K, K], !0);
          } else P([K]);
        } else if (fe === "multiple") {
          if (!f.value) {
            P([K]);
            return;
          }
          const ve = f.value,
            ne = ve.findIndex((ue) => Bt(ue, K) === 0);
          if (ne !== -1) {
            const [ue] = ve.splice(ne, 1);
            t("unselect", ti(ue));
          } else
            e.maxRange && ve.length >= +e.maxRange
              ? ks(e.rangePrompt || Pn("rangePrompt", e.maxRange))
              : P([...ve, K]);
        } else P(K, !0);
      },
      H = (M) => t("update:show", M),
      J = (M, K) => {
        const fe = K !== 0 || !e.showSubtitle;
        return d(
          bp,
          Re(
            {
              ref: o.value ? g : p(K),
              date: M,
              currentDate: f.value,
              showMonthTitle: fe,
              firstDayOfWeek: y.value,
              lazyRender: o.value ? !1 : e.lazyRender,
              maxDate: r.value,
              minDate: i.value,
            },
            Me(e, [
              "type",
              "color",
              "showMark",
              "formatter",
              "rowHeight",
              "showSubtitle",
              "allowSameDay",
            ]),
            {
              onClick: oe,
              onClickDisabledDate: (ve) => t("clickDisabledDate", ve),
            }
          ),
          Me(n, ["top-info", "bottom-info", "month-title"])
        );
      },
      se = () => {
        if (n.footer) return n.footer();
        if (e.showConfirm) {
          const M = n["confirm-text"],
            K = m.value,
            fe = K ? e.confirmDisabledText : e.confirmText;
          return d(
            pt,
            {
              round: !0,
              block: !0,
              type: "primary",
              color: e.color,
              class: Je("confirm"),
              disabled: K,
              nativeType: "button",
              onClick: x,
            },
            {
              default: () => [
                M
                  ? M({
                      disabled: K,
                    })
                  : fe || Pn("confirm"),
              ],
            }
          );
        }
      },
      Ie = () =>
        d(
          "div",
          {
            class: [
              Je("footer"),
              {
                "van-safe-area-bottom": e.safeAreaInsetBottom,
              },
            ],
          },
          [se()]
        ),
      De = () => {
        var M, K;
        return d(
          "div",
          {
            class: Je(),
          },
          [
            d(
              wp,
              {
                date: (M = g.value) == null ? void 0 : M.date,
                maxDate: r.value,
                minDate: i.value,
                title: e.title,
                subtitle: (K = g.value) == null ? void 0 : K.getTitle(),
                showTitle: e.showTitle,
                showSubtitle: e.showSubtitle,
                switchMode: e.switchMode,
                firstDayOfWeek: y.value,
                onClickSubtitle: (fe) => t("clickSubtitle", fe),
                onPanelChange: O,
              },
              Me(n, [
                "title",
                "subtitle",
                "prev-month",
                "prev-year",
                "next-month",
                "next-year",
              ])
            ),
            d(
              "div",
              {
                ref: u,
                class: Je("body"),
                onScroll: o.value ? void 0 : w,
              },
              [o.value ? J(h.value, 0) : v.value.map(J)]
            ),
            Ie(),
          ]
        );
      };
    return (
      ie(() => e.show, I),
      ie(
        () => [e.type, e.minDate, e.maxDate, e.switchMode],
        () => _(s(f.value))
      ),
      ie(
        () => e.defaultDate,
        (M = null) => {
          (f.value = M), k();
        }
      ),
      Oe({
        reset: _,
        scrollToDate: C,
        getSelectedDate: b,
      }),
      ci(I),
      () =>
        e.poppable
          ? d(
              $t,
              {
                show: e.show,
                class: Je("popup"),
                round: e.round,
                position: e.position,
                closeable: e.showTitle || e.showSubtitle,
                teleport: e.teleport,
                closeOnPopstate: e.closeOnPopstate,
                safeAreaInsetTop: e.safeAreaInsetTop,
                closeOnClickOverlay: e.closeOnClickOverlay,
                "onUpdate:show": H,
              },
              {
                default: De,
              }
            )
          : De()
    );
  },
});
const _p = Z(Cp),
  [kp, Mo] = W("image"),
  xp = {
    src: String,
    alt: String,
    fit: String,
    position: String,
    round: Boolean,
    block: Boolean,
    width: Y,
    height: Y,
    radius: Y,
    lazyLoad: Boolean,
    iconSize: Y,
    showError: z,
    errorIcon: G("photo-fail"),
    iconPrefix: String,
    showLoading: z,
    loadingIcon: G("photo"),
    crossorigin: String,
    referrerpolicy: String,
  };
var Tp = j({
  name: kp,
  props: xp,
  emits: ["load", "error"],
  setup(e, { emit: t, slots: n }) {
    const o = $(!1),
      i = $(!0),
      r = $(),
      { $Lazyload: a } = tn().proxy,
      s = B(() => {
        const y = {
          width: xe(e.width),
          height: xe(e.height),
        };
        return (
          $e(e.radius) &&
            ((y.overflow = "hidden"), (y.borderRadius = xe(e.radius))),
          y
        );
      });
    ie(
      () => e.src,
      () => {
        (o.value = !1), (i.value = !0);
      }
    );
    const l = (y) => {
        i.value && ((i.value = !1), t("load", y));
      },
      c = () => {
        const y = new Event("load");
        Object.defineProperty(y, "target", {
          value: r.value,
          enumerable: !0,
        }),
          l(y);
      },
      u = (y) => {
        (o.value = !0), (i.value = !1), t("error", y);
      },
      f = (y, v, m) =>
        m
          ? m()
          : d(
              Te,
              {
                name: y,
                size: e.iconSize,
                class: v,
                classPrefix: e.iconPrefix,
              },
              null
            ),
      h = () => {
        if (i.value && e.showLoading)
          return d(
            "div",
            {
              class: Mo("loading"),
            },
            [f(e.loadingIcon, Mo("loading-icon"), n.loading)]
          );
        if (o.value && e.showError)
          return d(
            "div",
            {
              class: Mo("error"),
            },
            [f(e.errorIcon, Mo("error-icon"), n.error)]
          );
      },
      g = () => {
        if (o.value || !e.src) return;
        const y = {
          alt: e.alt,
          class: Mo("img"),
          style: {
            objectFit: e.fit,
            objectPosition: e.position,
          },
          crossorigin: e.crossorigin,
          referrerpolicy: e.referrerpolicy,
        };
        return e.lazyLoad
          ? st(
              d(
                "img",
                Re(
                  {
                    ref: r,
                  },
                  y
                ),
                null
              ),
              [[mm("lazy"), e.src]]
            )
          : d(
              "img",
              Re(
                {
                  ref: r,
                  src: e.src,
                  onLoad: l,
                  onError: u,
                },
                y
              ),
              null
            );
      },
      S = ({ el: y }) => {
        const v = () => {
          y === r.value && i.value && c();
        };
        r.value ? v() : Ae(v);
      },
      p = ({ el: y }) => {
        y === r.value && !o.value && u();
      };
    return (
      a &&
        Dt &&
        (a.$on("loaded", S),
        a.$on("error", p),
        yn(() => {
          a.$off("loaded", S), a.$off("error", p);
        })),
      tt(() => {
        Ae(() => {
          var y;
          (y = r.value) != null && y.complete && !e.lazyLoad && c();
        });
      }),
      () => {
        var y;
        return d(
          "div",
          {
            class: Mo({
              round: e.round,
              block: e.block,
            }),
            style: s.value,
          },
          [g(), h(), (y = n.default) == null ? void 0 : y.call(n)]
        );
      }
    );
  },
});
const ya = Z(Tp),
  [Ep, Ct] = W("card"),
  Pp = {
    tag: String,
    num: Y,
    desc: String,
    thumb: String,
    title: String,
    price: Y,
    centered: Boolean,
    lazyLoad: Boolean,
    currency: G("¥"),
    thumbLink: String,
    originPrice: Y,
  };
var Ap = j({
  name: Ep,
  props: Pp,
  emits: ["clickThumb"],
  setup(e, { slots: t, emit: n }) {
    const o = () => {
        if (t.title) return t.title();
        if (e.title)
          return d(
            "div",
            {
              class: [Ct("title"), "van-multi-ellipsis--l2"],
            },
            [e.title]
          );
      },
      i = () => {
        if (t.tag || e.tag)
          return d(
            "div",
            {
              class: Ct("tag"),
            },
            [
              t.tag
                ? t.tag()
                : d(
                    va,
                    {
                      mark: !0,
                      type: "primary",
                    },
                    {
                      default: () => [e.tag],
                    }
                  ),
            ]
          );
      },
      r = () =>
        t.thumb
          ? t.thumb()
          : d(
              ya,
              {
                src: e.thumb,
                fit: "cover",
                width: "100%",
                height: "100%",
                lazyLoad: e.lazyLoad,
              },
              null
            ),
      a = () => {
        if (t.thumb || e.thumb)
          return d(
            "a",
            {
              href: e.thumbLink,
              class: Ct("thumb"),
              onClick: (c) => n("clickThumb", c),
            },
            [r(), i()]
          );
      },
      s = () => {
        if (t.desc) return t.desc();
        if (e.desc)
          return d(
            "div",
            {
              class: [Ct("desc"), "van-ellipsis"],
            },
            [e.desc]
          );
      },
      l = () => {
        const c = e.price.toString().split(".");
        return d("div", null, [
          d(
            "span",
            {
              class: Ct("price-currency"),
            },
            [e.currency]
          ),
          d(
            "span",
            {
              class: Ct("price-integer"),
            },
            [c[0]]
          ),
          Se("."),
          d(
            "span",
            {
              class: Ct("price-decimal"),
            },
            [c[1]]
          ),
        ]);
      };
    return () => {
      var c, u, f;
      const h = t.num || $e(e.num),
        g = t.price || $e(e.price),
        S = t["origin-price"] || $e(e.originPrice),
        p = h || g || S || t.bottom,
        y =
          g &&
          d(
            "div",
            {
              class: Ct("price"),
            },
            [t.price ? t.price() : l()]
          ),
        v =
          S &&
          d(
            "div",
            {
              class: Ct("origin-price"),
            },
            [
              t["origin-price"]
                ? t["origin-price"]()
                : `${e.currency} ${e.originPrice}`,
            ]
          ),
        m =
          h &&
          d(
            "div",
            {
              class: Ct("num"),
            },
            [t.num ? t.num() : `x${e.num}`]
          ),
        b =
          t.footer &&
          d(
            "div",
            {
              class: Ct("footer"),
            },
            [t.footer()]
          ),
        w =
          p &&
          d(
            "div",
            {
              class: Ct("bottom"),
            },
            [
              (c = t["price-top"]) == null ? void 0 : c.call(t),
              y,
              v,
              m,
              (u = t.bottom) == null ? void 0 : u.call(t),
            ]
          );
      return d(
        "div",
        {
          class: Ct(),
        },
        [
          d(
            "div",
            {
              class: Ct("header"),
            },
            [
              a(),
              d(
                "div",
                {
                  class: Ct("content", {
                    centered: e.centered,
                  }),
                },
                [
                  d("div", null, [
                    o(),
                    s(),
                    (f = t.tags) == null ? void 0 : f.call(t),
                  ]),
                  w,
                ]
              ),
            ]
          ),
          b,
        ]
      );
    };
  },
});
const Ip = Z(Ap),
  [Rp, pn, Op] = W("cascader"),
  Bp = {
    title: String,
    options: Ye(),
    closeable: z,
    swipeable: z,
    closeIcon: G("cross"),
    showHeader: z,
    modelValue: Y,
    fieldNames: Object,
    placeholder: String,
    activeColor: String,
  };
var Dp = j({
  name: Rp,
  props: Bp,
  emits: ["close", "change", "finish", "clickTab", "update:modelValue"],
  setup(e, { slots: t, emit: n }) {
    const o = $([]),
      i = $(0),
      [r, a] = Ji(),
      {
        text: s,
        value: l,
        children: c,
      } = be(
        {
          text: "text",
          value: "value",
          children: "children",
        },
        e.fieldNames
      ),
      u = (C, k) => {
        for (const I of C) {
          if (I[l] === k) return [I];
          if (I[c]) {
            const _ = u(I[c], k);
            if (_) return [I, ..._];
          }
        }
      },
      f = () => {
        const { options: C, modelValue: k } = e;
        if (k !== void 0) {
          const I = u(C, k);
          if (I) {
            let _ = C;
            (o.value = I.map((R) => {
              const O = {
                  options: _,
                  selected: R,
                },
                x = _.find((P) => P[l] === R[l]);
              return x && (_ = x[c]), O;
            })),
              _ &&
                o.value.push({
                  options: _,
                  selected: null,
                }),
              Ae(() => {
                i.value = o.value.length - 1;
              });
            return;
          }
        }
        o.value = [
          {
            options: C,
            selected: null,
          },
        ];
      },
      h = (C, k) => {
        if (C.disabled) return;
        if (
          ((o.value[k].selected = C),
          o.value.length > k + 1 && (o.value = o.value.slice(0, k + 1)),
          C[c])
        ) {
          const R = {
            options: C[c],
            selected: null,
          };
          o.value[k + 1] ? (o.value[k + 1] = R) : o.value.push(R),
            Ae(() => {
              i.value++;
            });
        }
        const I = o.value.map((R) => R.selected).filter(Boolean);
        n("update:modelValue", C[l]);
        const _ = {
          value: C[l],
          tabIndex: k,
          selectedOptions: I,
        };
        n("change", _), C[c] || n("finish", _);
      },
      g = () => n("close"),
      S = ({ name: C, title: k }) => n("clickTab", C, k),
      p = () =>
        e.showHeader
          ? d(
              "div",
              {
                class: pn("header"),
              },
              [
                d(
                  "h2",
                  {
                    class: pn("title"),
                  },
                  [t.title ? t.title() : e.title]
                ),
                e.closeable
                  ? d(
                      Te,
                      {
                        name: e.closeIcon,
                        class: [pn("close-icon"), bt],
                        onClick: g,
                      },
                      null
                    )
                  : null,
              ]
            )
          : null,
      y = (C, k, I) => {
        const { disabled: _ } = C,
          R = !!(k && C[l] === k[l]),
          O = C.color || (R ? e.activeColor : void 0),
          x = t.option
            ? t.option({
                option: C,
                selected: R,
              })
            : d("span", null, [C[s]]);
        return d(
          "li",
          {
            ref: R ? a(I) : void 0,
            role: "menuitemradio",
            class: [
              pn("option", {
                selected: R,
                disabled: _,
              }),
              C.className,
            ],
            style: {
              color: O,
            },
            tabindex: _ ? void 0 : R ? 0 : -1,
            "aria-checked": R,
            "aria-disabled": _ || void 0,
            onClick: () => h(C, I),
          },
          [
            x,
            R
              ? d(
                  Te,
                  {
                    name: "success",
                    class: pn("selected-icon"),
                  },
                  null
                )
              : null,
          ]
        );
      },
      v = (C, k, I) =>
        d(
          "ul",
          {
            role: "menu",
            class: pn("options"),
          },
          [C.map((_) => y(_, k, I))]
        ),
      m = (C, k) => {
        const { options: I, selected: _ } = C,
          R = e.placeholder || Op("select"),
          O = _ ? _[s] : R;
        return d(
          qi,
          {
            title: O,
            titleClass: pn("tab", {
              unselected: !_,
            }),
          },
          {
            default: () => {
              var x, P;
              return [
                (x = t["options-top"]) == null
                  ? void 0
                  : x.call(t, {
                      tabIndex: k,
                    }),
                v(I, _, k),
                (P = t["options-bottom"]) == null
                  ? void 0
                  : P.call(t, {
                      tabIndex: k,
                    }),
              ];
            },
          }
        );
      },
      b = () =>
        d(
          fa,
          {
            active: i.value,
            "onUpdate:active": (C) => (i.value = C),
            shrink: !0,
            animated: !0,
            class: pn("tabs"),
            color: e.activeColor,
            swipeable: e.swipeable,
            onClickTab: S,
          },
          {
            default: () => [o.value.map(m)],
          }
        ),
      w = (C) => {
        const k = C.parentElement;
        k &&
          (k.scrollTop = C.offsetTop - (k.offsetHeight - C.offsetHeight) / 2);
      };
    return (
      f(),
      ie(i, (C) => {
        const k = r.value[C];
        k && w(k);
      }),
      ie(() => e.options, f, {
        deep: !0,
      }),
      ie(
        () => e.modelValue,
        (C) => {
          (C !== void 0 &&
            o.value
              .map((I) => {
                var _;
                return (_ = I.selected) == null ? void 0 : _[l];
              })
              .includes(C)) ||
            f();
        }
      ),
      () =>
        d(
          "div",
          {
            class: pn(),
          },
          [p(), b()]
        )
    );
  },
});
const $p = Z(Dp),
  [Lp, nu] = W("cell-group"),
  Mp = {
    title: String,
    inset: Boolean,
    border: z,
  };
var Fp = j({
  name: Lp,
  inheritAttrs: !1,
  props: Mp,
  setup(e, { slots: t, attrs: n }) {
    const o = () => {
        var r;
        return d(
          "div",
          Re(
            {
              class: [
                nu({
                  inset: e.inset,
                }),
                {
                  [la]: e.border && !e.inset,
                },
              ],
            },
            n,
            jr()
          ),
          [(r = t.default) == null ? void 0 : r.call(t)]
        );
      },
      i = () =>
        d(
          "div",
          {
            class: nu("title", {
              inset: e.inset,
            }),
          },
          [t.title ? t.title() : e.title]
        );
    return () => (e.title || t.title ? d(Ve, null, [i(), o()]) : o());
  },
});
const Vp = Z(Fp),
  [Np, vr] = W("circle");
let Hp = 0;
const ou = (e) => Math.min(Math.max(+e, 0), 100);
function zp(e, t) {
  const n = e ? 1 : 0;
  return `M ${t / 2} ${
    t / 2
  } m 0, -500 a 500, 500 0 1, ${n} 0, 1000 a 500, 500 0 1, ${n} 0, -1000`;
}
const jp = {
  text: String,
  size: Y,
  fill: G("none"),
  rate: ce(100),
  speed: ce(0),
  color: [String, Object],
  clockwise: z,
  layerColor: String,
  currentRate: nt(0),
  strokeWidth: ce(40),
  strokeLinecap: String,
  startPosition: G("top"),
};
var Up = j({
  name: Np,
  props: jp,
  emits: ["update:currentRate"],
  setup(e, { emit: t, slots: n }) {
    const o = `van-circle-${Hp++}`,
      i = B(() => +e.strokeWidth + 1e3),
      r = B(() => zp(e.clockwise, i.value)),
      a = B(() => {
        const h = {
          top: 0,
          right: 90,
          bottom: 180,
          left: 270,
        }[e.startPosition];
        if (h)
          return {
            transform: `rotate(${h}deg)`,
          };
      });
    ie(
      () => e.rate,
      (f) => {
        let h;
        const g = Date.now(),
          S = e.currentRate,
          p = ou(f),
          y = Math.abs(((S - p) * 1e3) / +e.speed),
          v = () => {
            const m = Date.now(),
              w = Math.min((m - g) / y, 1) * (p - S) + S;
            t("update:currentRate", ou(parseFloat(w.toFixed(1)))),
              (p > S ? w < p : w > p) && (h = yt(v));
          };
        e.speed ? (h && aa(h), (h = yt(v))) : t("update:currentRate", p);
      },
      {
        immediate: !0,
      }
    );
    const s = () => {
        const { strokeWidth: h, currentRate: g, strokeLinecap: S } = e,
          p = (3140 * g) / 100,
          y = hn(e.color) ? `url(#${o})` : e.color,
          v = {
            stroke: y,
            strokeWidth: `${+h + 1}px`,
            strokeLinecap: S,
            strokeDasharray: `${p}px 3140px`,
          };
        return d(
          "path",
          {
            d: r.value,
            style: v,
            class: vr("hover"),
            stroke: y,
          },
          null
        );
      },
      l = () => {
        const f = {
          fill: e.fill,
          stroke: e.layerColor,
          strokeWidth: `${e.strokeWidth}px`,
        };
        return d(
          "path",
          {
            class: vr("layer"),
            style: f,
            d: r.value,
          },
          null
        );
      },
      c = () => {
        const { color: f } = e;
        if (!hn(f)) return;
        const h = Object.keys(f)
          .sort((g, S) => parseFloat(g) - parseFloat(S))
          .map((g, S) =>
            d(
              "stop",
              {
                key: S,
                offset: g,
                "stop-color": f[g],
              },
              null
            )
          );
        return d("defs", null, [
          d(
            "linearGradient",
            {
              id: o,
              x1: "100%",
              y1: "0%",
              x2: "0%",
              y2: "0%",
            },
            [h]
          ),
        ]);
      },
      u = () => {
        if (n.default) return n.default();
        if (e.text)
          return d(
            "div",
            {
              class: vr("text"),
            },
            [e.text]
          );
      };
    return () =>
      d(
        "div",
        {
          class: vr(),
          style: Bn(e.size),
        },
        [
          d(
            "svg",
            {
              viewBox: `0 0 ${i.value} ${i.value}`,
              style: a.value,
            },
            [c(), l(), s()]
          ),
          u(),
        ]
      );
  },
});
const Wp = Z(Up),
  [ch, qp] = W("row"),
  uh = Symbol(ch),
  Yp = {
    tag: G("div"),
    wrap: z,
    align: String,
    gutter: {
      type: [String, Number, Array],
      default: 0,
    },
    justify: String,
  };
var Kp = j({
  name: ch,
  props: Yp,
  setup(e, { slots: t }) {
    const { children: n, linkChildren: o } = wt(uh),
      i = B(() => {
        const s = [[]];
        let l = 0;
        return (
          n.forEach((c, u) => {
            (l += Number(c.span)),
              l > 24 ? (s.push([u]), (l -= 24)) : s[s.length - 1].push(u);
          }),
          s
        );
      }),
      r = B(() => {
        let s = 0;
        Array.isArray(e.gutter)
          ? (s = Number(e.gutter[0]) || 0)
          : (s = Number(e.gutter));
        const l = [];
        return (
          s &&
            i.value.forEach((c) => {
              const u = (s * (c.length - 1)) / c.length;
              c.forEach((f, h) => {
                if (h === 0)
                  l.push({
                    right: u,
                  });
                else {
                  const g = s - l[f - 1].right,
                    S = u - g;
                  l.push({
                    left: g,
                    right: S,
                  });
                }
              });
            }),
          l
        );
      }),
      a = B(() => {
        const { gutter: s } = e,
          l = [];
        if (Array.isArray(s) && s.length > 1) {
          const c = Number(s[1]) || 0;
          if (c <= 0) return l;
          i.value.forEach((u, f) => {
            f !== i.value.length - 1 &&
              u.forEach(() => {
                l.push({
                  bottom: c,
                });
              });
          });
        }
        return l;
      });
    return (
      o({
        spaces: r,
        verticalSpaces: a,
      }),
      () => {
        const { tag: s, wrap: l, align: c, justify: u } = e;
        return d(
          s,
          {
            class: qp({
              [`align-${c}`]: c,
              [`justify-${u}`]: u,
              nowrap: !l,
            }),
          },
          {
            default: () => {
              var f;
              return [(f = t.default) == null ? void 0 : f.call(t)];
            },
          }
        );
      }
    );
  },
});
const [Zp, Gp] = W("col"),
  Qp = {
    tag: G("div"),
    span: ce(0),
    offset: Y,
  };
var Xp = j({
  name: Zp,
  props: Qp,
  setup(e, { slots: t }) {
    const { parent: n, index: o } = gt(uh),
      i = B(() => {
        if (!n) return;
        const { spaces: r, verticalSpaces: a } = n;
        let s = {};
        if (r && r.value && r.value[o.value]) {
          const { left: c, right: u } = r.value[o.value];
          s = {
            paddingLeft: c ? `${c}px` : null,
            paddingRight: u ? `${u}px` : null,
          };
        }
        const { bottom: l } = a.value[o.value] || {};
        return be(s, {
          marginBottom: l ? `${l}px` : null,
        });
      });
    return () => {
      const { tag: r, span: a, offset: s } = e;
      return d(
        r,
        {
          style: i.value,
          class: Gp({
            [a]: a,
            [`offset-${s}`]: s,
          }),
        },
        {
          default: () => {
            var l;
            return [(l = t.default) == null ? void 0 : l.call(t)];
          },
        }
      );
    };
  },
});
const Jp = Z(Xp),
  [dh, e1] = W("collapse"),
  fh = Symbol(dh),
  t1 = {
    border: z,
    accordion: Boolean,
    modelValue: {
      type: [String, Number, Array],
      default: "",
    },
  };
var n1 = j({
  name: dh,
  props: t1,
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t, slots: n }) {
    const { linkChildren: o, children: i } = wt(fh),
      r = (c) => {
        t("change", c), t("update:modelValue", c);
      },
      a = (c, u) => {
        const { accordion: f, modelValue: h } = e;
        r(f ? (c === h ? "" : c) : u ? h.concat(c) : h.filter((g) => g !== c));
      },
      s = (c = {}) => {
        if (e.accordion) return;
        typeof c == "boolean" &&
          (c = {
            expanded: c,
          });
        const { expanded: u, skipDisabled: f } = c,
          g = i
            .filter((S) =>
              S.disabled && f ? S.expanded.value : u ?? !S.expanded.value
            )
            .map((S) => S.itemName.value);
        r(g);
      },
      l = (c) => {
        const { accordion: u, modelValue: f } = e;
        return u ? f === c : f.includes(c);
      };
    return (
      Oe({
        toggleAll: s,
      }),
      o({
        toggle: a,
        isExpanded: l,
      }),
      () => {
        var c;
        return d(
          "div",
          {
            class: [
              e1(),
              {
                [la]: e.border,
              },
            ],
          },
          [(c = n.default) == null ? void 0 : c.call(n)]
        );
      }
    );
  },
});
const o1 = Z(n1),
  [i1, yr] = W("collapse-item"),
  r1 = ["icon", "title", "value", "label", "right-icon"],
  a1 = be({}, ma, {
    name: Y,
    isLink: z,
    disabled: Boolean,
    readonly: Boolean,
    lazyRender: z,
  });
var s1 = j({
  name: i1,
  props: a1,
  setup(e, { slots: t }) {
    const n = $(),
      o = $(),
      { parent: i, index: r } = gt(fh);
    if (!i) return;
    const a = B(() => {
        var p;
        return (p = e.name) != null ? p : r.value;
      }),
      s = B(() => i.isExpanded(a.value)),
      l = $(s.value),
      c = gl(() => l.value || !e.lazyRender),
      u = () => {
        s.value ? n.value && (n.value.style.height = "") : (l.value = !1);
      };
    ie(s, (p, y) => {
      if (y === null) return;
      p && (l.value = !0),
        (p ? Ae : yt)(() => {
          if (!o.value || !n.value) return;
          const { offsetHeight: m } = o.value;
          if (m) {
            const b = `${m}px`;
            (n.value.style.height = p ? "0" : b),
              Xn(() => {
                n.value && (n.value.style.height = p ? b : "0");
              });
          } else u();
        });
    });
    const f = (p = !s.value) => {
        i.toggle(a.value, p);
      },
      h = () => {
        !e.disabled && !e.readonly && f();
      },
      g = () => {
        const { border: p, disabled: y, readonly: v } = e,
          m = Me(e, Object.keys(ma));
        return (
          v && (m.isLink = !1),
          (y || v) && (m.clickable = !1),
          d(
            on,
            Re(
              {
                role: "button",
                class: yr("title", {
                  disabled: y,
                  expanded: s.value,
                  borderless: !p,
                }),
                "aria-expanded": String(s.value),
                onClick: h,
              },
              m
            ),
            Me(t, r1)
          )
        );
      },
      S = c(() => {
        var p;
        return st(
          d(
            "div",
            {
              ref: n,
              class: yr("wrapper"),
              onTransitionend: u,
            },
            [
              d(
                "div",
                {
                  ref: o,
                  class: yr("content"),
                },
                [(p = t.default) == null ? void 0 : p.call(t)]
              ),
            ]
          ),
          [[ft, l.value]]
        );
      });
    return (
      Oe({
        toggle: f,
        expanded: s,
        itemName: a,
      }),
      () =>
        d(
          "div",
          {
            class: [
              yr({
                border: r.value && e.border,
              }),
            ],
          },
          [g(), S()]
        )
    );
  },
});
const l1 = Z(s1),
  c1 = Z(Ev),
  [u1, iu, ja] = W("contact-card"),
  d1 = {
    tel: String,
    name: String,
    type: G("add"),
    addText: String,
    editable: z,
  };
var f1 = j({
  name: u1,
  props: d1,
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = (i) => {
        e.editable && t("click", i);
      },
      o = () =>
        e.type === "add"
          ? e.addText || ja("addContact")
          : [
              d("div", null, [`${ja("name")}：${e.name}`]),
              d("div", null, [`${ja("tel")}：${e.tel}`]),
            ];
    return () =>
      d(
        on,
        {
          center: !0,
          icon: e.type === "edit" ? "contact" : "add-square",
          class: iu([e.type]),
          border: !1,
          isLink: e.editable,
          titleClass: iu("title"),
          onClick: n,
        },
        {
          title: o,
        }
      );
  },
});
const h1 = Z(f1),
  [g1, Fo, Hn] = W("contact-edit"),
  Ps = {
    tel: "",
    name: "",
  },
  m1 = {
    isEdit: Boolean,
    isSaving: Boolean,
    isDeleting: Boolean,
    showSetDefault: Boolean,
    setDefaultLabel: String,
    contactInfo: {
      type: Object,
      default: () => be({}, Ps),
    },
    telValidator: {
      type: Function,
      default: ed,
    },
  };
var v1 = j({
  name: g1,
  props: m1,
  emits: ["save", "delete", "changeDefault"],
  setup(e, { emit: t }) {
    const n = Ze(be({}, Ps, e.contactInfo)),
      o = () => {
        e.isSaving || t("save", n);
      },
      i = () => t("delete", n),
      r = () =>
        d(
          "div",
          {
            class: Fo("buttons"),
          },
          [
            d(
              pt,
              {
                block: !0,
                round: !0,
                type: "primary",
                text: Hn("save"),
                class: Fo("button"),
                loading: e.isSaving,
                nativeType: "submit",
              },
              null
            ),
            e.isEdit &&
              d(
                pt,
                {
                  block: !0,
                  round: !0,
                  text: Hn("delete"),
                  class: Fo("button"),
                  loading: e.isDeleting,
                  onClick: i,
                },
                null
              ),
          ]
        ),
      a = () =>
        d(
          Cl,
          {
            modelValue: n.isDefault,
            "onUpdate:modelValue": (l) => (n.isDefault = l),
            onChange: (l) => t("changeDefault", l),
          },
          null
        ),
      s = () => {
        if (e.showSetDefault)
          return d(
            on,
            {
              title: e.setDefaultLabel,
              class: Fo("switch-cell"),
              border: !1,
            },
            {
              "right-icon": a,
            }
          );
      };
    return (
      ie(
        () => e.contactInfo,
        (l) => be(n, Ps, l)
      ),
      () =>
        d(
          bl,
          {
            class: Fo(),
            onSubmit: o,
          },
          {
            default: () => [
              d(
                "div",
                {
                  class: Fo("fields"),
                },
                [
                  d(
                    En,
                    {
                      modelValue: n.name,
                      "onUpdate:modelValue": (l) => (n.name = l),
                      clearable: !0,
                      label: Hn("name"),
                      rules: [
                        {
                          required: !0,
                          message: Hn("nameEmpty"),
                        },
                      ],
                      maxlength: "30",
                      placeholder: Hn("name"),
                    },
                    null
                  ),
                  d(
                    En,
                    {
                      modelValue: n.tel,
                      "onUpdate:modelValue": (l) => (n.tel = l),
                      clearable: !0,
                      type: "tel",
                      label: Hn("tel"),
                      rules: [
                        {
                          validator: e.telValidator,
                          message: Hn("telInvalid"),
                        },
                      ],
                      placeholder: Hn("tel"),
                    },
                    null
                  ),
                ]
              ),
              s(),
              r(),
            ],
          }
        )
    );
  },
});
const y1 = Z(v1),
  [b1, wn, p1] = W("contact-list"),
  w1 = {
    list: Array,
    addText: String,
    modelValue: Qe,
    defaultTagText: String,
  };
var S1 = j({
  name: b1,
  props: w1,
  emits: ["add", "edit", "select", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = (o, i) => {
      const r = () => {
          t("update:modelValue", o.id), t("select", o, i);
        },
        a = () =>
          d(
            xl,
            {
              class: wn("radio"),
              name: o.id,
              iconSize: 18,
            },
            null
          ),
        s = () =>
          d(
            Te,
            {
              name: "edit",
              class: wn("edit"),
              onClick: (c) => {
                c.stopPropagation(), t("edit", o, i);
              },
            },
            null
          ),
        l = () => {
          const c = [`${o.name}，${o.tel}`];
          return (
            o.isDefault &&
              e.defaultTagText &&
              c.push(
                d(
                  va,
                  {
                    type: "primary",
                    round: !0,
                    class: wn("item-tag"),
                  },
                  {
                    default: () => [e.defaultTagText],
                  }
                )
              ),
            c
          );
        };
      return d(
        on,
        {
          key: o.id,
          isLink: !0,
          center: !0,
          class: wn("item"),
          titleClass: wn("item-title"),
          onClick: r,
        },
        {
          icon: s,
          title: l,
          "right-icon": a,
        }
      );
    };
    return () =>
      d(
        "div",
        {
          class: wn(),
        },
        [
          d(
            _l,
            {
              modelValue: e.modelValue,
              class: wn("group"),
            },
            {
              default: () => [e.list && e.list.map(n)],
            }
          ),
          d(
            "div",
            {
              class: [wn("bottom"), "van-safe-area-bottom"],
            },
            [
              d(
                pt,
                {
                  round: !0,
                  block: !0,
                  type: "primary",
                  class: wn("add"),
                  text: e.addText || p1("addContact"),
                  onClick: () => t("add"),
                },
                null
              ),
            ]
          ),
        ]
      );
  },
});
const C1 = Z(S1);
function _1(e, t) {
  const { days: n } = t;
  let { hours: o, minutes: i, seconds: r, milliseconds: a } = t;
  if (
    (e.includes("DD") ? (e = e.replace("DD", Zt(n))) : (o += n * 24),
    e.includes("HH") ? (e = e.replace("HH", Zt(o))) : (i += o * 60),
    e.includes("mm") ? (e = e.replace("mm", Zt(i))) : (r += i * 60),
    e.includes("ss") ? (e = e.replace("ss", Zt(r))) : (a += r * 1e3),
    e.includes("S"))
  ) {
    const s = Zt(a, 3);
    e.includes("SSS")
      ? (e = e.replace("SSS", s))
      : e.includes("SS")
      ? (e = e.replace("SS", s.slice(0, 2)))
      : (e = e.replace("S", s.charAt(0)));
  }
  return e;
}
const [k1, x1] = W("count-down"),
  T1 = {
    time: ce(0),
    format: G("HH:mm:ss"),
    autoStart: z,
    millisecond: Boolean,
  };
var E1 = j({
  name: k1,
  props: T1,
  emits: ["change", "finish"],
  setup(e, { emit: t, slots: n }) {
    const {
        start: o,
        pause: i,
        reset: r,
        current: a,
      } = K0({
        time: +e.time,
        millisecond: e.millisecond,
        onChange: (c) => t("change", c),
        onFinish: () => t("finish"),
      }),
      s = B(() => _1(e.format, a.value)),
      l = () => {
        r(+e.time), e.autoStart && o();
      };
    return (
      ie(() => e.time, l, {
        immediate: !0,
      }),
      Oe({
        start: o,
        pause: i,
        reset: l,
      }),
      () =>
        d(
          "div",
          {
            role: "timer",
            class: x1(),
          },
          [n.default ? n.default(a.value) : s.value]
        )
    );
  },
});
const P1 = Z(E1);
function ru(e) {
  const t = new Date(e * 1e3);
  return `${t.getFullYear()}.${Zt(t.getMonth() + 1)}.${Zt(t.getDate())}`;
}
const A1 = (e) => (e / 10).toFixed(e % 10 === 0 ? 0 : 1),
  au = (e) => (e / 100).toFixed(e % 100 === 0 ? 0 : e % 10 === 0 ? 1 : 2),
  [I1, ln, Ua] = W("coupon");
var R1 = j({
  name: I1,
  props: {
    chosen: Boolean,
    coupon: dt(Object),
    disabled: Boolean,
    currency: G("¥"),
  },
  setup(e) {
    const t = B(() => {
        const { startAt: i, endAt: r } = e.coupon;
        return `${ru(i)} - ${ru(r)}`;
      }),
      n = B(() => {
        const { coupon: i, currency: r } = e;
        if (i.valueDesc)
          return [i.valueDesc, d("span", null, [i.unitDesc || ""])];
        if (i.denominations) {
          const a = au(i.denominations);
          return [d("span", null, [r]), ` ${a}`];
        }
        return i.discount ? Ua("discount", A1(i.discount)) : "";
      }),
      o = B(() => {
        const i = au(e.coupon.originCondition || 0);
        return i === "0" ? Ua("unlimited") : Ua("condition", i);
      });
    return () => {
      const { chosen: i, coupon: r, disabled: a } = e,
        s = (a && r.reason) || r.description;
      return d(
        "div",
        {
          class: ln({
            disabled: a,
          }),
        },
        [
          d(
            "div",
            {
              class: ln("content"),
            },
            [
              d(
                "div",
                {
                  class: ln("head"),
                },
                [
                  d(
                    "h2",
                    {
                      class: ln("amount"),
                    },
                    [n.value]
                  ),
                  d(
                    "p",
                    {
                      class: ln("condition"),
                    },
                    [r.condition || o.value]
                  ),
                ]
              ),
              d(
                "div",
                {
                  class: ln("body"),
                },
                [
                  d(
                    "p",
                    {
                      class: ln("name"),
                    },
                    [r.name]
                  ),
                  d(
                    "p",
                    {
                      class: ln("valid"),
                    },
                    [t.value]
                  ),
                  !a &&
                    d(
                      Tl,
                      {
                        class: ln("corner"),
                        modelValue: i,
                      },
                      null
                    ),
                ]
              ),
            ]
          ),
          s &&
            d(
              "p",
              {
                class: ln("description"),
              },
              [s]
            ),
        ]
      );
    };
  },
});
const As = Z(R1),
  [O1, su, Is] = W("coupon-cell"),
  B1 = {
    title: String,
    border: z,
    editable: z,
    coupons: Ye(),
    currency: G("¥"),
    chosenCoupon: {
      type: [Number, Array],
      default: -1,
    },
  },
  D1 = (e) => {
    const { value: t, denominations: n } = e;
    return $e(t) ? t : $e(n) ? n : 0;
  };
function $1({ coupons: e, chosenCoupon: t, currency: n }) {
  let o = 0,
    i = !1;
  return (
    (Array.isArray(t) ? t : [t]).forEach((r) => {
      const a = e[+r];
      a && ((i = !0), (o += D1(a)));
    }),
    i
      ? `-${n} ${(o / 100).toFixed(2)}`
      : e.length === 0
      ? Is("noCoupon")
      : Is("count", e.length)
  );
}
var L1 = j({
  name: O1,
  props: B1,
  setup(e) {
    return () => {
      const t = Array.isArray(e.chosenCoupon)
        ? e.chosenCoupon.length
        : e.coupons[+e.chosenCoupon];
      return d(
        on,
        {
          class: su(),
          value: $1(e),
          title: e.title || Is("title"),
          border: e.border,
          isLink: e.editable,
          valueClass: su("value", {
            selected: t,
          }),
        },
        null
      );
    };
  },
});
const M1 = Z(L1),
  [F1, br] = W("empty"),
  V1 = {
    image: G("default"),
    imageSize: [Number, String, Array],
    description: String,
  };
var N1 = j({
  name: F1,
  props: V1,
  setup(e, { slots: t }) {
    const n = () => {
        const v = t.description ? t.description() : e.description;
        if (v)
          return d(
            "p",
            {
              class: br("description"),
            },
            [v]
          );
      },
      o = () => {
        if (t.default)
          return d(
            "div",
            {
              class: br("bottom"),
            },
            [t.default()]
          );
      },
      i = fi(),
      r = (v) => `${i}-${v}`,
      a = (v) => `url(#${r(v)})`,
      s = (v, m, b) =>
        d(
          "stop",
          {
            "stop-color": v,
            offset: `${m}%`,
            "stop-opacity": b,
          },
          null
        ),
      l = (v, m) => [s(v, 0), s(m, 100)],
      c = (v) => [
        d("defs", null, [
          d(
            "radialGradient",
            {
              id: r(v),
              cx: "50%",
              cy: "54%",
              fx: "50%",
              fy: "54%",
              r: "297%",
              gradientTransform: "matrix(-.16 0 0 -.33 .58 .72)",
            },
            [s("#EBEDF0", 0), s("#F2F3F5", 100, 0.3)]
          ),
        ]),
        d(
          "ellipse",
          {
            fill: a(v),
            opacity: ".8",
            cx: "80",
            cy: "140",
            rx: "46",
            ry: "8",
          },
          null
        ),
      ],
      u = () => [
        d("defs", null, [
          d(
            "linearGradient",
            {
              id: r("a"),
              x1: "64%",
              y1: "100%",
              x2: "64%",
            },
            [s("#FFF", 0, 0.5), s("#F2F3F5", 100)]
          ),
        ]),
        d(
          "g",
          {
            opacity: ".8",
          },
          [
            d(
              "path",
              {
                d: "M36 131V53H16v20H2v58h34z",
                fill: a("a"),
              },
              null
            ),
            d(
              "path",
              {
                d: "M123 15h22v14h9v77h-31V15z",
                fill: a("a"),
              },
              null
            ),
          ]
        ),
      ],
      f = () => [
        d("defs", null, [
          d(
            "linearGradient",
            {
              id: r("b"),
              x1: "64%",
              y1: "97%",
              x2: "64%",
              y2: "0%",
            },
            [s("#F2F3F5", 0, 0.3), s("#F2F3F5", 100)]
          ),
        ]),
        d(
          "g",
          {
            opacity: ".8",
          },
          [
            d(
              "path",
              {
                d: "M87 6c3 0 7 3 8 6a8 8 0 1 1-1 16H80a7 7 0 0 1-8-6c0-4 3-7 6-7 0-5 4-9 9-9Z",
                fill: a("b"),
              },
              null
            ),
            d(
              "path",
              {
                d: "M19 23c2 0 3 1 4 3 2 0 4 2 4 4a4 4 0 0 1-4 3v1h-7v-1l-1 1c-2 0-3-2-3-4 0-1 1-3 3-3 0-2 2-4 4-4Z",
                fill: a("b"),
              },
              null
            ),
          ]
        ),
      ],
      h = () =>
        d(
          "svg",
          {
            viewBox: "0 0 160 160",
          },
          [
            d("defs", null, [
              d(
                "linearGradient",
                {
                  id: r(1),
                  x1: "64%",
                  y1: "100%",
                  x2: "64%",
                },
                [s("#FFF", 0, 0.5), s("#F2F3F5", 100)]
              ),
              d(
                "linearGradient",
                {
                  id: r(2),
                  x1: "50%",
                  x2: "50%",
                  y2: "84%",
                },
                [s("#EBEDF0", 0), s("#DCDEE0", 100, 0)]
              ),
              d(
                "linearGradient",
                {
                  id: r(3),
                  x1: "100%",
                  x2: "100%",
                  y2: "100%",
                },
                [l("#EAEDF0", "#DCDEE0")]
              ),
              d(
                "radialGradient",
                {
                  id: r(4),
                  cx: "50%",
                  cy: "0%",
                  fx: "50%",
                  fy: "0%",
                  r: "100%",
                  gradientTransform: "matrix(0 1 -.54 0 .5 -.5)",
                },
                [s("#EBEDF0", 0), s("#FFF", 100, 0)]
              ),
            ]),
            d(
              "g",
              {
                fill: "none",
              },
              [
                u(),
                d(
                  "path",
                  {
                    fill: a(4),
                    d: "M0 139h160v21H0z",
                  },
                  null
                ),
                d(
                  "path",
                  {
                    d: "M80 54a7 7 0 0 1 3 13v27l-2 2h-2a2 2 0 0 1-2-2V67a7 7 0 0 1 3-13z",
                    fill: a(2),
                  },
                  null
                ),
                d(
                  "g",
                  {
                    opacity: ".6",
                    "stroke-linecap": "round",
                    "stroke-width": "7",
                  },
                  [
                    d(
                      "path",
                      {
                        d: "M64 47a19 19 0 0 0-5 13c0 5 2 10 5 13",
                        stroke: a(3),
                      },
                      null
                    ),
                    d(
                      "path",
                      {
                        d: "M53 36a34 34 0 0 0 0 48",
                        stroke: a(3),
                      },
                      null
                    ),
                    d(
                      "path",
                      {
                        d: "M95 73a19 19 0 0 0 6-13c0-5-2-9-6-13",
                        stroke: a(3),
                      },
                      null
                    ),
                    d(
                      "path",
                      {
                        d: "M106 84a34 34 0 0 0 0-48",
                        stroke: a(3),
                      },
                      null
                    ),
                  ]
                ),
                d(
                  "g",
                  {
                    transform: "translate(31 105)",
                  },
                  [
                    d(
                      "rect",
                      {
                        fill: "#EBEDF0",
                        width: "98",
                        height: "34",
                        rx: "2",
                      },
                      null
                    ),
                    d(
                      "rect",
                      {
                        fill: "#FFF",
                        x: "9",
                        y: "8",
                        width: "80",
                        height: "18",
                        rx: "1.1",
                      },
                      null
                    ),
                    d(
                      "rect",
                      {
                        fill: "#EBEDF0",
                        x: "15",
                        y: "12",
                        width: "18",
                        height: "6",
                        rx: "1.1",
                      },
                      null
                    ),
                  ]
                ),
              ]
            ),
          ]
        ),
      g = () =>
        d(
          "svg",
          {
            viewBox: "0 0 160 160",
          },
          [
            d("defs", null, [
              d(
                "linearGradient",
                {
                  x1: "50%",
                  x2: "50%",
                  y2: "100%",
                  id: r(5),
                },
                [l("#F2F3F5", "#DCDEE0")]
              ),
              d(
                "linearGradient",
                {
                  x1: "95%",
                  y1: "48%",
                  x2: "5.5%",
                  y2: "51%",
                  id: r(6),
                },
                [l("#EAEDF1", "#DCDEE0")]
              ),
              d(
                "linearGradient",
                {
                  y1: "45%",
                  x2: "100%",
                  y2: "54%",
                  id: r(7),
                },
                [l("#EAEDF1", "#DCDEE0")]
              ),
            ]),
            u(),
            f(),
            d(
              "g",
              {
                transform: "translate(36 50)",
                fill: "none",
              },
              [
                d(
                  "g",
                  {
                    transform: "translate(8)",
                  },
                  [
                    d(
                      "rect",
                      {
                        fill: "#EBEDF0",
                        opacity: ".6",
                        x: "38",
                        y: "13",
                        width: "36",
                        height: "53",
                        rx: "2",
                      },
                      null
                    ),
                    d(
                      "rect",
                      {
                        fill: a(5),
                        width: "64",
                        height: "66",
                        rx: "2",
                      },
                      null
                    ),
                    d(
                      "rect",
                      {
                        fill: "#FFF",
                        x: "6",
                        y: "6",
                        width: "52",
                        height: "55",
                        rx: "1",
                      },
                      null
                    ),
                    d(
                      "g",
                      {
                        transform: "translate(15 17)",
                        fill: a(6),
                      },
                      [
                        d(
                          "rect",
                          {
                            width: "34",
                            height: "6",
                            rx: "1",
                          },
                          null
                        ),
                        d(
                          "path",
                          {
                            d: "M0 14h34v6H0z",
                          },
                          null
                        ),
                        d(
                          "rect",
                          {
                            y: "28",
                            width: "34",
                            height: "6",
                            rx: "1",
                          },
                          null
                        ),
                      ]
                    ),
                  ]
                ),
                d(
                  "rect",
                  {
                    fill: a(7),
                    y: "61",
                    width: "88",
                    height: "28",
                    rx: "1",
                  },
                  null
                ),
                d(
                  "rect",
                  {
                    fill: "#F7F8FA",
                    x: "29",
                    y: "72",
                    width: "30",
                    height: "6",
                    rx: "1",
                  },
                  null
                ),
              ]
            ),
          ]
        ),
      S = () =>
        d(
          "svg",
          {
            viewBox: "0 0 160 160",
          },
          [
            d("defs", null, [
              d(
                "linearGradient",
                {
                  x1: "50%",
                  x2: "50%",
                  y2: "100%",
                  id: r(8),
                },
                [l("#EAEDF1", "#DCDEE0")]
              ),
            ]),
            u(),
            f(),
            c("c"),
            d(
              "path",
              {
                d: "m59 60 21 21 21-21h3l9 9v3L92 93l21 21v3l-9 9h-3l-21-21-21 21h-3l-9-9v-3l21-21-21-21v-3l9-9h3Z",
                fill: a(8),
              },
              null
            ),
          ]
        ),
      p = () =>
        d(
          "svg",
          {
            viewBox: "0 0 160 160",
          },
          [
            d("defs", null, [
              d(
                "linearGradient",
                {
                  x1: "50%",
                  y1: "100%",
                  x2: "50%",
                  id: r(9),
                },
                [l("#EEE", "#D8D8D8")]
              ),
              d(
                "linearGradient",
                {
                  x1: "100%",
                  y1: "50%",
                  y2: "50%",
                  id: r(10),
                },
                [l("#F2F3F5", "#DCDEE0")]
              ),
              d(
                "linearGradient",
                {
                  x1: "50%",
                  x2: "50%",
                  y2: "100%",
                  id: r(11),
                },
                [l("#F2F3F5", "#DCDEE0")]
              ),
              d(
                "linearGradient",
                {
                  x1: "50%",
                  x2: "50%",
                  y2: "100%",
                  id: r(12),
                },
                [l("#FFF", "#F7F8FA")]
              ),
            ]),
            u(),
            f(),
            c("d"),
            d(
              "g",
              {
                transform: "rotate(-45 113 -4)",
                fill: "none",
              },
              [
                d(
                  "rect",
                  {
                    fill: a(9),
                    x: "24",
                    y: "52.8",
                    width: "5.8",
                    height: "19",
                    rx: "1",
                  },
                  null
                ),
                d(
                  "rect",
                  {
                    fill: a(10),
                    x: "22.1",
                    y: "67.3",
                    width: "9.9",
                    height: "28",
                    rx: "1",
                  },
                  null
                ),
                d(
                  "circle",
                  {
                    stroke: a(11),
                    "stroke-width": "8",
                    cx: "27",
                    cy: "27",
                    r: "27",
                  },
                  null
                ),
                d(
                  "circle",
                  {
                    fill: a(12),
                    cx: "27",
                    cy: "27",
                    r: "16",
                  },
                  null
                ),
                d(
                  "path",
                  {
                    d: "M37 7c-8 0-15 5-16 12",
                    stroke: a(11),
                    "stroke-width": "3",
                    opacity: ".5",
                    "stroke-linecap": "round",
                    transform: "rotate(45 29 13)",
                  },
                  null
                ),
              ]
            ),
          ]
        ),
      y = () => {
        var v;
        if (t.image) return t.image();
        const m = {
          error: S,
          search: p,
          network: h,
          default: g,
        };
        return (
          ((v = m[e.image]) == null ? void 0 : v.call(m)) ||
          d(
            "img",
            {
              src: e.image,
            },
            null
          )
        );
      };
    return () =>
      d(
        "div",
        {
          class: br(),
        },
        [
          d(
            "div",
            {
              class: br("image"),
              style: Bn(e.imageSize),
            },
            [y()]
          ),
          n(),
          o(),
        ]
      );
  },
});
const hh = Z(N1),
  [H1, cn, Vo] = W("coupon-list"),
  z1 = {
    code: G(""),
    coupons: Ye(),
    currency: G("¥"),
    showCount: z,
    emptyImage: String,
    enabledTitle: String,
    disabledTitle: String,
    disabledCoupons: Ye(),
    showExchangeBar: z,
    showCloseButton: z,
    closeButtonText: String,
    inputPlaceholder: String,
    exchangeMinLength: nt(1),
    exchangeButtonText: String,
    displayedCouponIndex: nt(-1),
    exchangeButtonLoading: Boolean,
    exchangeButtonDisabled: Boolean,
    chosenCoupon: {
      type: [Number, Array],
      default: -1,
    },
  };
var j1 = j({
  name: H1,
  props: z1,
  emits: ["change", "exchange", "update:code"],
  setup(e, { emit: t, slots: n }) {
    const [o, i] = Ji(),
      r = $(),
      a = $(),
      s = $(0),
      l = $(0),
      c = $(e.code),
      u = B(
        () =>
          !e.exchangeButtonLoading &&
          (e.exchangeButtonDisabled ||
            !c.value ||
            c.value.length < e.exchangeMinLength)
      ),
      f = () => {
        const b = Ne(r).height,
          w = Ne(a).height + 44;
        l.value = (b > w ? b : zt.value) - w;
      },
      h = () => {
        t("exchange", c.value), e.code || (c.value = "");
      },
      g = (m) => {
        Ae(() => {
          var b;
          return (b = o.value[m]) == null ? void 0 : b.scrollIntoView();
        });
      },
      S = () =>
        d(
          hh,
          {
            image: e.emptyImage,
          },
          {
            default: () => [
              d(
                "p",
                {
                  class: cn("empty-tip"),
                },
                [Vo("noCoupon")]
              ),
            ],
          }
        ),
      p = () => {
        if (e.showExchangeBar)
          return d(
            "div",
            {
              ref: a,
              class: cn("exchange-bar"),
            },
            [
              d(
                En,
                {
                  modelValue: c.value,
                  "onUpdate:modelValue": (m) => (c.value = m),
                  clearable: !0,
                  border: !1,
                  class: cn("field"),
                  placeholder: e.inputPlaceholder || Vo("placeholder"),
                  maxlength: "20",
                },
                null
              ),
              d(
                pt,
                {
                  plain: !0,
                  type: "primary",
                  class: cn("exchange"),
                  text: e.exchangeButtonText || Vo("exchange"),
                  loading: e.exchangeButtonLoading,
                  disabled: u.value,
                  onClick: h,
                },
                null
              ),
            ]
          );
      },
      y = () => {
        const { coupons: m, chosenCoupon: b } = e,
          w = e.showCount ? ` (${m.length})` : "",
          C = (e.enabledTitle || Vo("enable")) + w,
          k = (I = [], _ = 0) =>
            I.includes(_) ? I.filter((R) => R !== _) : [...I, _];
        return d(
          qi,
          {
            title: C,
          },
          {
            default: () => {
              var I;
              return [
                d(
                  "div",
                  {
                    class: cn("list", {
                      "with-bottom": e.showCloseButton,
                    }),
                    style: {
                      height: `${l.value}px`,
                    },
                  },
                  [
                    m.map((_, R) =>
                      d(
                        As,
                        {
                          key: _.id,
                          ref: i(R),
                          coupon: _,
                          chosen: Array.isArray(b) ? b.includes(R) : R === b,
                          currency: e.currency,
                          onClick: () =>
                            t("change", Array.isArray(b) ? k(b, R) : R),
                        },
                        null
                      )
                    ),
                    !m.length && S(),
                    (I = n["list-footer"]) == null ? void 0 : I.call(n),
                  ]
                ),
              ];
            },
          }
        );
      },
      v = () => {
        const { disabledCoupons: m } = e,
          b = e.showCount ? ` (${m.length})` : "",
          w = (e.disabledTitle || Vo("disabled")) + b;
        return d(
          qi,
          {
            title: w,
          },
          {
            default: () => {
              var C;
              return [
                d(
                  "div",
                  {
                    class: cn("list", {
                      "with-bottom": e.showCloseButton,
                    }),
                    style: {
                      height: `${l.value}px`,
                    },
                  },
                  [
                    m.map((k) =>
                      d(
                        As,
                        {
                          disabled: !0,
                          key: k.id,
                          coupon: k,
                          currency: e.currency,
                        },
                        null
                      )
                    ),
                    !m.length && S(),
                    (C = n["disabled-list-footer"]) == null
                      ? void 0
                      : C.call(n),
                  ]
                ),
              ];
            },
          }
        );
      };
    return (
      ie(
        () => e.code,
        (m) => {
          c.value = m;
        }
      ),
      ie(zt, f),
      ie(c, (m) => t("update:code", m)),
      ie(() => e.displayedCouponIndex, g),
      tt(() => {
        f(), g(e.displayedCouponIndex);
      }),
      () =>
        d(
          "div",
          {
            ref: r,
            class: cn(),
          },
          [
            p(),
            d(
              fa,
              {
                active: s.value,
                "onUpdate:active": (m) => (s.value = m),
                class: cn("tab"),
              },
              {
                default: () => [y(), v()],
              }
            ),
            d(
              "div",
              {
                class: cn("bottom"),
              },
              [
                n["list-button"]
                  ? n["list-button"]()
                  : st(
                      d(
                        pt,
                        {
                          round: !0,
                          block: !0,
                          type: "primary",
                          class: cn("close"),
                          text: e.closeButtonText || Vo("close"),
                          onClick: () =>
                            t(
                              "change",
                              Array.isArray(e.chosenCoupon) ? [] : -1
                            ),
                        },
                        null
                      ),
                      [[ft, e.showCloseButton]]
                    ),
              ]
            ),
          ]
        )
    );
  },
});
const U1 = Z(j1),
  lu = new Date().getFullYear(),
  [W1] = W("date-picker"),
  q1 = be({}, rh, {
    columnsType: {
      type: Array,
      default: () => ["year", "month", "day"],
    },
    minDate: {
      type: Date,
      default: () => new Date(lu - 10, 0, 1),
      validator: Li,
    },
    maxDate: {
      type: Date,
      default: () => new Date(lu + 10, 11, 31),
      validator: Li,
    },
  });
var Y1 = j({
  name: W1,
  props: q1,
  emits: ["confirm", "cancel", "change", "update:modelValue"],
  setup(e, { emit: t, slots: n }) {
    const o = $(e.modelValue),
      i = $(!1),
      r = $(),
      a = () => {
        const w = e.minDate.getFullYear(),
          C = e.maxDate.getFullYear();
        return Qo(w, C, "year", e.formatter, e.filter);
      },
      s = (w) => w === e.minDate.getFullYear(),
      l = (w) => w === e.maxDate.getFullYear(),
      c = (w) => w === e.minDate.getMonth() + 1,
      u = (w) => w === e.maxDate.getMonth() + 1,
      f = (w) => {
        const { minDate: C, columnsType: k } = e,
          I = k.indexOf(w),
          _ = i.value ? e.modelValue[I] : o.value[I];
        if (_) return +_;
        switch (w) {
          case "year":
            return C.getFullYear();
          case "month":
            return C.getMonth() + 1;
          case "day":
            return C.getDate();
        }
      },
      h = () => {
        const w = f("year"),
          C = s(w) ? e.minDate.getMonth() + 1 : 1,
          k = l(w) ? e.maxDate.getMonth() + 1 : 12;
        return Qo(C, k, "month", e.formatter, e.filter);
      },
      g = () => {
        const w = f("year"),
          C = f("month"),
          k = s(w) && c(C) ? e.minDate.getDate() : 1,
          I = l(w) && u(C) ? e.maxDate.getDate() : sh(w, C);
        return Qo(k, I, "day", e.formatter, e.filter);
      },
      S = () => {
        var w;
        return (w = r.value) == null ? void 0 : w.confirm();
      },
      p = () => o.value,
      y = B(() =>
        e.columnsType.map((w) => {
          switch (w) {
            case "year":
              return a();
            case "month":
              return h();
            case "day":
              return g();
            default:
              return [];
          }
        })
      );
    ie(o, (w) => {
      fn(w, e.modelValue) || t("update:modelValue", w);
    }),
      ie(
        () => e.modelValue,
        (w, C) => {
          (i.value = fn(C, o.value)),
            (w = lh(w, y.value)),
            fn(w, o.value) || (o.value = w),
            (i.value = !1);
        },
        {
          immediate: !0,
        }
      );
    const v = (...w) => t("change", ...w),
      m = (...w) => t("cancel", ...w),
      b = (...w) => t("confirm", ...w);
    return (
      Oe({
        confirm: S,
        getSelectedDate: p,
      }),
      () =>
        d(
          ga,
          Re(
            {
              ref: r,
              modelValue: o.value,
              "onUpdate:modelValue": (w) => (o.value = w),
              columns: y.value,
              onChange: v,
              onCancel: m,
              onConfirm: b,
            },
            Me(e, ah)
          ),
          n
        )
    );
  },
});
const K1 = Z(Y1),
  [Z1, qt, pr] = W("dialog"),
  G1 = be({}, di, {
    title: String,
    theme: String,
    width: Y,
    message: [String, Function],
    callback: Function,
    allowHtml: Boolean,
    className: Qe,
    transition: G("van-dialog-bounce"),
    messageAlign: String,
    closeOnPopstate: z,
    showCancelButton: Boolean,
    cancelButtonText: String,
    cancelButtonColor: String,
    cancelButtonDisabled: Boolean,
    confirmButtonText: String,
    confirmButtonColor: String,
    confirmButtonDisabled: Boolean,
    showConfirmButton: z,
    closeOnClickOverlay: Boolean,
  }),
  Q1 = [...hl, "transition", "closeOnPopstate"];
var X1 = j({
  name: Z1,
  props: G1,
  emits: ["confirm", "cancel", "keydown", "update:show"],
  setup(e, { emit: t, slots: n }) {
    const o = $(),
      i = Ze({
        confirm: !1,
        cancel: !1,
      }),
      r = (v) => t("update:show", v),
      a = (v) => {
        var m;
        r(!1), (m = e.callback) == null || m.call(e, v);
      },
      s = (v) => () => {
        e.show &&
          (t(v),
          e.beforeClose
            ? ((i[v] = !0),
              lo(e.beforeClose, {
                args: [v],
                done() {
                  a(v), (i[v] = !1);
                },
                canceled() {
                  i[v] = !1;
                },
              }))
            : a(v));
      },
      l = s("cancel"),
      c = s("confirm"),
      u = M0(
        (v) => {
          var m, b;
          if (
            v.target !==
            ((b = (m = o.value) == null ? void 0 : m.popupRef) == null
              ? void 0
              : b.value)
          )
            return;
          ({
            Enter: e.showConfirmButton ? c : os,
            Escape: e.showCancelButton ? l : os,
          })[v.key](),
            t("keydown", v);
        },
        ["enter", "esc"]
      ),
      f = () => {
        const v = n.title ? n.title() : e.title;
        if (v)
          return d(
            "div",
            {
              class: qt("header", {
                isolated: !e.message && !n.default,
              }),
            },
            [v]
          );
      },
      h = (v) => {
        const { message: m, allowHtml: b, messageAlign: w } = e,
          C = qt("message", {
            "has-title": v,
            [w]: w,
          }),
          k = ei(m) ? m() : m;
        return b && typeof k == "string"
          ? d(
              "div",
              {
                class: C,
                innerHTML: k,
              },
              null
            )
          : d(
              "div",
              {
                class: C,
              },
              [k]
            );
      },
      g = () => {
        if (n.default)
          return d(
            "div",
            {
              class: qt("content"),
            },
            [n.default()]
          );
        const { title: v, message: m, allowHtml: b } = e;
        if (m) {
          const w = !!(v || n.title);
          return d(
            "div",
            {
              key: b ? 1 : 0,
              class: qt("content", {
                isolated: !w,
              }),
            },
            [h(w)]
          );
        }
      },
      S = () =>
        d(
          "div",
          {
            class: [pf, qt("footer")],
          },
          [
            e.showCancelButton &&
              d(
                pt,
                {
                  size: "large",
                  text: e.cancelButtonText || pr("cancel"),
                  class: qt("cancel"),
                  style: {
                    color: e.cancelButtonColor,
                  },
                  loading: i.cancel,
                  disabled: e.cancelButtonDisabled,
                  onClick: l,
                },
                null
              ),
            e.showConfirmButton &&
              d(
                pt,
                {
                  size: "large",
                  text: e.confirmButtonText || pr("confirm"),
                  class: [
                    qt("confirm"),
                    {
                      [wf]: e.showCancelButton,
                    },
                  ],
                  style: {
                    color: e.confirmButtonColor,
                  },
                  loading: i.confirm,
                  disabled: e.confirmButtonDisabled,
                  onClick: c,
                },
                null
              ),
          ]
        ),
      p = () =>
        d(
          Tf,
          {
            class: qt("footer"),
          },
          {
            default: () => [
              e.showCancelButton &&
                d(
                  Cs,
                  {
                    type: "warning",
                    text: e.cancelButtonText || pr("cancel"),
                    class: qt("cancel"),
                    color: e.cancelButtonColor,
                    loading: i.cancel,
                    disabled: e.cancelButtonDisabled,
                    onClick: l,
                  },
                  null
                ),
              e.showConfirmButton &&
                d(
                  Cs,
                  {
                    type: "danger",
                    text: e.confirmButtonText || pr("confirm"),
                    class: qt("confirm"),
                    color: e.confirmButtonColor,
                    loading: i.confirm,
                    disabled: e.confirmButtonDisabled,
                    onClick: c,
                  },
                  null
                ),
            ],
          }
        ),
      y = () =>
        n.footer ? n.footer() : e.theme === "round-button" ? p() : S();
    return () => {
      const { width: v, title: m, theme: b, message: w, className: C } = e;
      return d(
        $t,
        Re(
          {
            ref: o,
            role: "dialog",
            class: [qt([b]), C],
            style: {
              width: xe(v),
            },
            tabindex: 0,
            "aria-labelledby": m || w,
            onKeydown: u,
            "onUpdate:show": r,
          },
          Me(e, Q1)
        ),
        {
          default: () => [f(), g(), y()],
        }
      );
    };
  },
});
const J1 = Z(X1),
  [ew, tw] = W("divider"),
  nw = {
    dashed: Boolean,
    hairline: z,
    vertical: Boolean,
    contentPosition: G("center"),
  };
var ow = j({
  name: ew,
  props: nw,
  setup(e, { slots: t }) {
    return () => {
      var n;
      return d(
        "div",
        {
          role: "separator",
          class: tw({
            dashed: e.dashed,
            hairline: e.hairline,
            vertical: e.vertical,
            [`content-${e.contentPosition}`]: !!t.default && !e.vertical,
          }),
        },
        [!e.vertical && ((n = t.default) == null ? void 0 : n.call(t))]
      );
    };
  },
});
const iw = Z(ow),
  [gh, wr] = W("dropdown-menu"),
  rw = {
    overlay: z,
    zIndex: Y,
    duration: ce(0.2),
    direction: G("down"),
    activeColor: String,
    autoLocate: Boolean,
    closeOnClickOutside: z,
    closeOnClickOverlay: z,
    swipeThreshold: Y,
  },
  mh = Symbol(gh);
var aw = j({
  name: gh,
  props: rw,
  setup(e, { slots: t }) {
    const n = fi(),
      o = $(),
      i = $(),
      r = $(0),
      { children: a, linkChildren: s } = wt(mh),
      l = ui(o),
      c = B(() => a.some((m) => m.state.showWrapper)),
      u = B(() => e.swipeThreshold && a.length > +e.swipeThreshold),
      f = B(() => {
        if (c.value && $e(e.zIndex))
          return {
            zIndex: +e.zIndex + 1,
          };
      }),
      h = () => {
        a.forEach((m) => {
          m.toggle(!1);
        });
      },
      g = () => {
        e.closeOnClickOutside && h();
      },
      S = () => {
        if (i.value) {
          const m = Ne(i);
          e.direction === "down"
            ? (r.value = m.bottom)
            : (r.value = zt.value - m.top);
        }
      },
      p = () => {
        c.value && S();
      },
      y = (m) => {
        a.forEach((b, w) => {
          w === m
            ? b.toggle()
            : b.state.showPopup &&
              b.toggle(!1, {
                immediate: !0,
              });
        });
      },
      v = (m, b) => {
        const { showPopup: w } = m.state,
          { disabled: C, titleClass: k } = m;
        return d(
          "div",
          {
            id: `${n}-${b}`,
            role: "button",
            tabindex: C ? void 0 : 0,
            class: [
              wr("item", {
                disabled: C,
                grow: u.value,
              }),
              {
                [bt]: !C,
              },
            ],
            onClick: () => {
              C || y(b);
            },
          },
          [
            d(
              "span",
              {
                class: [
                  wr("title", {
                    down: w === (e.direction === "down"),
                    active: w,
                  }),
                  k,
                ],
                style: {
                  color: w ? e.activeColor : "",
                },
              },
              [
                d(
                  "div",
                  {
                    class: "van-ellipsis",
                  },
                  [m.renderTitle()]
                ),
              ]
            ),
          ]
        );
      };
    return (
      Oe({
        close: h,
      }),
      s({
        id: n,
        props: e,
        offset: r,
        updateOffset: S,
      }),
      sa(o, g),
      et("scroll", p, {
        target: l,
        passive: !0,
      }),
      () => {
        var m;
        return d(
          "div",
          {
            ref: o,
            class: wr(),
          },
          [
            d(
              "div",
              {
                ref: i,
                style: f.value,
                class: wr("bar", {
                  opened: c.value,
                  scrollable: u.value,
                }),
              },
              [a.map(v)]
            ),
            (m = t.default) == null ? void 0 : m.call(t),
          ]
        );
      }
    );
  },
});
const [sw, Sr] = W("dropdown-item"),
  lw = {
    title: String,
    options: Ye(),
    disabled: Boolean,
    teleport: [String, Object],
    lazyRender: z,
    modelValue: Qe,
    titleClass: Qe,
  };
var cw = j({
  name: sw,
  inheritAttrs: !1,
  props: lw,
  emits: ["open", "opened", "close", "closed", "change", "update:modelValue"],
  setup(e, { emit: t, slots: n, attrs: o }) {
    const i = Ze({
        showPopup: !1,
        transition: !0,
        showWrapper: !1,
      }),
      r = $(),
      { parent: a, index: s } = gt(mh);
    if (!a) return;
    const l = (m) => () => t(m),
      c = l("open"),
      u = l("close"),
      f = l("opened"),
      h = () => {
        (i.showWrapper = !1), t("closed");
      },
      g = (m) => {
        e.teleport && m.stopPropagation();
      },
      S = (m = !i.showPopup, b = {}) => {
        m !== i.showPopup &&
          ((i.showPopup = m),
          (i.transition = !b.immediate),
          m && (a.updateOffset(), (i.showWrapper = !0)));
      },
      p = () => {
        if (n.title) return n.title();
        if (e.title) return e.title;
        const m = e.options.find((b) => b.value === e.modelValue);
        return m ? m.text : "";
      },
      y = (m) => {
        const { activeColor: b } = a.props,
          { disabled: w } = m,
          C = m.value === e.modelValue,
          k = () => {
            w ||
              ((i.showPopup = !1),
              m.value !== e.modelValue &&
                (t("update:modelValue", m.value), t("change", m.value)));
          },
          I = () => {
            if (C)
              return d(
                Te,
                {
                  class: Sr("icon"),
                  color: w ? void 0 : b,
                  name: "success",
                },
                null
              );
          };
        return d(
          on,
          {
            role: "menuitem",
            key: String(m.value),
            icon: m.icon,
            title: m.text,
            class: Sr("option", {
              active: C,
              disabled: w,
            }),
            style: {
              color: C ? b : "",
            },
            tabindex: C ? 0 : -1,
            clickable: !w,
            onClick: k,
          },
          {
            value: I,
          }
        );
      },
      v = () => {
        const { offset: m } = a,
          {
            autoLocate: b,
            zIndex: w,
            overlay: C,
            duration: k,
            direction: I,
            closeOnClickOverlay: _,
          } = a.props,
          R = Dn(w);
        let O = m.value;
        if (b && r.value) {
          const x = tv(r.value);
          x && (O -= Ne(x).top);
        }
        return (
          I === "down" ? (R.top = `${O}px`) : (R.bottom = `${O}px`),
          st(
            d(
              "div",
              Re(
                {
                  ref: r,
                  style: R,
                  class: Sr([I]),
                  onClick: g,
                },
                o
              ),
              [
                d(
                  $t,
                  {
                    show: i.showPopup,
                    "onUpdate:show": (x) => (i.showPopup = x),
                    role: "menu",
                    class: Sr("content"),
                    overlay: C,
                    position: I === "down" ? "top" : "bottom",
                    duration: i.transition ? k : 0,
                    lazyRender: e.lazyRender,
                    overlayStyle: {
                      position: "absolute",
                    },
                    "aria-labelledby": `${a.id}-${s.value}`,
                    closeOnClickOverlay: _,
                    onOpen: c,
                    onClose: u,
                    onOpened: f,
                    onClosed: h,
                  },
                  {
                    default: () => {
                      var x;
                      return [
                        e.options.map(y),
                        (x = n.default) == null ? void 0 : x.call(n),
                      ];
                    },
                  }
                ),
              ]
            ),
            [[ft, i.showWrapper]]
          )
        );
      };
    return (
      Oe({
        state: i,
        toggle: S,
        renderTitle: p,
      }),
      () =>
        e.teleport
          ? d(
              si,
              {
                to: e.teleport,
              },
              {
                default: () => [v()],
              }
            )
          : v()
    );
  },
});
const uw = Z(cw),
  dw = Z(aw),
  fw = {
    gap: nt(24),
    icon: String,
    axis: G("y"),
    magnetic: String,
    offset: {
      type: Object,
      default: () => ({
        x: -1,
        y: -1,
      }),
    },
    teleport: {
      type: [String, Object],
      default: "body",
    },
  },
  [hw, cu] = W("floating-bubble");
var gw = j({
  name: hw,
  inheritAttrs: !1,
  props: fw,
  emits: ["click", "update:offset", "offsetChange"],
  setup(e, { slots: t, emit: n, attrs: o }) {
    const i = $(),
      r = $({
        x: 0,
        y: 0,
        width: 0,
        height: 0,
      }),
      a = B(() => ({
        top: e.gap,
        right: Xt.value - r.value.width - e.gap,
        bottom: zt.value - r.value.height - e.gap,
        left: e.gap,
      })),
      s = $(!1);
    let l = !1;
    const c = B(() => {
        const b = {},
          w = xe(r.value.x),
          C = xe(r.value.y);
        return (
          (b.transform = `translate3d(${w}, ${C}, 0)`),
          (s.value || !l) && (b.transition = "none"),
          b
        );
      }),
      u = () => {
        if (!m.value) return;
        const { width: b, height: w } = Ne(i.value),
          { offset: C } = e;
        r.value = {
          x: C.x > -1 ? C.x : Xt.value - b - e.gap,
          y: C.y > -1 ? C.y : zt.value - w - e.gap,
          width: b,
          height: w,
        };
      },
      f = jt();
    let h = 0,
      g = 0;
    const S = (b) => {
      f.start(b), (s.value = !0), (h = r.value.x), (g = r.value.y);
    };
    et(
      "touchmove",
      (b) => {
        if (
          (b.preventDefault(), f.move(b), e.axis !== "lock" && !f.isTap.value)
        ) {
          if (e.axis === "x" || e.axis === "xy") {
            let C = h + f.deltaX.value;
            C < a.value.left && (C = a.value.left),
              C > a.value.right && (C = a.value.right),
              (r.value.x = C);
          }
          if (e.axis === "y" || e.axis === "xy") {
            let C = g + f.deltaY.value;
            C < a.value.top && (C = a.value.top),
              C > a.value.bottom && (C = a.value.bottom),
              (r.value.y = C);
          }
          const w = Me(r.value, ["x", "y"]);
          n("update:offset", w);
        }
      },
      {
        target: i,
      }
    );
    const y = () => {
        (s.value = !1),
          Ae(() => {
            if (e.magnetic === "x") {
              const b = zr([a.value.left, a.value.right], r.value.x);
              r.value.x = b;
            }
            if (e.magnetic === "y") {
              const b = zr([a.value.top, a.value.bottom], r.value.y);
              r.value.y = b;
            }
            if (!f.isTap.value) {
              const b = Me(r.value, ["x", "y"]);
              n("update:offset", b),
                (h !== b.x || g !== b.y) && n("offsetChange", b);
            }
          });
      },
      v = (b) => {
        f.isTap.value ? n("click", b) : b.stopPropagation();
      };
    tt(() => {
      u(),
        Ae(() => {
          l = !0;
        });
    }),
      ie([Xt, zt, () => e.gap, () => e.offset], u, {
        deep: !0,
      });
    const m = $(!0);
    return (
      mn(() => {
        m.value = !0;
      }),
      vn(() => {
        e.teleport && (m.value = !1);
      }),
      () => {
        const b = st(
          d(
            "div",
            Re(
              {
                class: cu(),
                ref: i,
                onTouchstartPassive: S,
                onTouchend: y,
                onTouchcancel: y,
                onClickCapture: v,
                style: c.value,
              },
              o
            ),
            [
              t.default
                ? t.default()
                : d(
                    Ov,
                    {
                      name: e.icon,
                      class: cu("icon"),
                    },
                    null
                  ),
            ]
          ),
          [[ft, m.value]]
        );
        return e.teleport
          ? d(
              si,
              {
                to: e.teleport,
              },
              {
                default: () => [b],
              }
            )
          : b;
      }
    );
  },
});
const mw = Z(gw),
  vw = {
    height: ce(0),
    anchors: Ye(),
    duration: ce(0.3),
    contentDraggable: z,
    lockScroll: Boolean,
    safeAreaInsetBottom: z,
  },
  [yw, Cr] = W("floating-panel");
var bw = j({
  name: yw,
  props: vw,
  emits: ["heightChange", "update:height"],
  setup(e, { emit: t, slots: n }) {
    const i = $(),
      r = $(),
      a = ml(
        () => +e.height,
        (b) => t("update:height", b)
      ),
      s = B(() => {
        var b, w;
        return {
          min: (b = e.anchors[0]) != null ? b : 100,
          max:
            (w = e.anchors[e.anchors.length - 1]) != null
              ? w
              : Math.round(zt.value * 0.6),
        };
      }),
      l = B(() =>
        e.anchors.length >= 2 ? e.anchors : [s.value.min, s.value.max]
      ),
      c = $(!1),
      u = B(() => ({
        height: xe(s.value.max),
        transform: `translateY(calc(100% + ${xe(-a.value)}))`,
        transition: c.value
          ? "none"
          : `transform ${e.duration}s cubic-bezier(0.18, 0.89, 0.32, 1.28)`,
      })),
      f = (b) => {
        const w = Math.abs(b),
          { min: C, max: k } = s.value;
        return w > k ? -(k + (w - k) * 0.2) : w < C ? -(C - (C - w) * 0.2) : b;
      };
    let h,
      g = -1;
    const S = jt(),
      p = (b) => {
        S.start(b), (c.value = !0), (h = -a.value), (g = -1);
      },
      y = (b) => {
        var w;
        S.move(b);
        const C = b.target;
        if (r.value === C || ((w = r.value) != null && w.contains(C))) {
          const { scrollTop: I } = r.value;
          if (((g = Math.max(g, I)), !e.contentDraggable)) return;
          if (-h < s.value.max) We(b, !0);
          else if (!(I <= 0 && S.deltaY.value > 0) || g > 0) return;
        }
        const k = S.deltaY.value + h;
        a.value = -f(k);
      },
      v = () => {
        (g = -1),
          (c.value = !1),
          (a.value = zr(l.value, a.value)),
          a.value !== -h &&
            t("heightChange", {
              height: a.value,
            });
      };
    ie(
      s,
      () => {
        a.value = zr(l.value, a.value);
      },
      {
        immediate: !0,
      }
    ),
      Rf(i, () => e.lockScroll || c.value),
      et("touchmove", y, {
        target: i,
      });
    const m = () =>
      n.header
        ? n.header()
        : d(
            "div",
            {
              class: Cr("header"),
            },
            [
              d(
                "div",
                {
                  class: Cr("header-bar"),
                },
                null
              ),
            ]
          );
    return () => {
      var b;
      return d(
        "div",
        {
          class: [
            Cr(),
            {
              "van-safe-area-bottom": e.safeAreaInsetBottom,
            },
          ],
          ref: i,
          style: u.value,
          onTouchstartPassive: p,
          onTouchend: v,
          onTouchcancel: v,
        },
        [
          m(),
          d(
            "div",
            {
              class: Cr("content"),
              ref: r,
            },
            [(b = n.default) == null ? void 0 : b.call(n)]
          ),
        ]
      );
    };
  },
});
const pw = Z(bw),
  [vh, ww] = W("grid"),
  Sw = {
    square: Boolean,
    center: z,
    border: z,
    gutter: Y,
    reverse: Boolean,
    iconSize: Y,
    direction: String,
    clickable: Boolean,
    columnNum: ce(4),
  },
  yh = Symbol(vh);
var Cw = j({
  name: vh,
  props: Sw,
  setup(e, { slots: t }) {
    const { linkChildren: n } = wt(yh);
    return (
      n({
        props: e,
      }),
      () => {
        var o;
        return d(
          "div",
          {
            style: {
              paddingLeft: xe(e.gutter),
            },
            class: [
              ww(),
              {
                [pf]: e.border && !e.gutter,
              },
            ],
          },
          [(o = t.default) == null ? void 0 : o.call(t)]
        );
      }
    );
  },
});
const _w = Z(Cw),
  [kw, _r] = W("grid-item"),
  xw = be({}, co, {
    dot: Boolean,
    text: String,
    icon: String,
    badge: Y,
    iconColor: String,
    iconPrefix: String,
    badgeProps: Object,
  });
var Tw = j({
  name: kw,
  props: xw,
  setup(e, { slots: t }) {
    const { parent: n, index: o } = gt(yh),
      i = Eo();
    if (!n) return;
    const r = B(() => {
        const { square: u, gutter: f, columnNum: h } = n.props,
          g = `${100 / +h}%`,
          S = {
            flexBasis: g,
          };
        if (u) S.paddingTop = g;
        else if (f) {
          const p = xe(f);
          (S.paddingRight = p), o.value >= +h && (S.marginTop = p);
        }
        return S;
      }),
      a = B(() => {
        const { square: u, gutter: f } = n.props;
        if (u && f) {
          const h = xe(f);
          return {
            right: h,
            bottom: h,
            height: "auto",
          };
        }
      }),
      s = () => {
        if (t.icon)
          return d(
            Po,
            Re(
              {
                dot: e.dot,
                content: e.badge,
              },
              e.badgeProps
            ),
            {
              default: t.icon,
            }
          );
        if (e.icon)
          return d(
            Te,
            {
              dot: e.dot,
              name: e.icon,
              size: n.props.iconSize,
              badge: e.badge,
              class: _r("icon"),
              color: e.iconColor,
              badgeProps: e.badgeProps,
              classPrefix: e.iconPrefix,
            },
            null
          );
      },
      l = () => {
        if (t.text) return t.text();
        if (e.text)
          return d(
            "span",
            {
              class: _r("text"),
            },
            [e.text]
          );
      },
      c = () => (t.default ? t.default() : [s(), l()]);
    return () => {
      const {
          center: u,
          border: f,
          square: h,
          gutter: g,
          reverse: S,
          direction: p,
          clickable: y,
        } = n.props,
        v = [
          _r("content", [
            p,
            {
              center: u,
              square: h,
              reverse: S,
              clickable: y,
              surround: f && g,
            },
          ]),
          {
            [$n]: f,
          },
        ];
      return d(
        "div",
        {
          class: [
            _r({
              square: h,
            }),
          ],
          style: r.value,
        },
        [
          d(
            "div",
            {
              role: y ? "button" : void 0,
              class: v,
              style: a.value,
              tabindex: y ? 0 : void 0,
              onClick: i,
            },
            [c()]
          ),
        ]
      );
    };
  },
});
const Ew = Z(Tw),
  [Pw, uu] = W("highlight"),
  Aw = {
    autoEscape: z,
    caseSensitive: Boolean,
    highlightClass: String,
    highlightTag: G("span"),
    keywords: dt([String, Array]),
    sourceString: G(""),
    tag: G("div"),
    unhighlightClass: String,
    unhighlightTag: G("span"),
  };
var Iw = j({
  name: Pw,
  props: Aw,
  setup(e) {
    const t = B(() => {
        const {
            autoEscape: o,
            caseSensitive: i,
            keywords: r,
            sourceString: a,
          } = e,
          s = i ? "g" : "gi";
        let c = (Array.isArray(r) ? r : [r])
          .filter((f) => f)
          .reduce((f, h) => {
            o && (h = h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
            const g = new RegExp(h, s);
            let S;
            for (; (S = g.exec(a)); ) {
              const p = S.index,
                y = g.lastIndex;
              if (p >= y) {
                g.lastIndex++;
                continue;
              }
              f.push({
                start: p,
                end: y,
                highlight: !0,
              });
            }
            return f;
          }, []);
        c = c
          .sort((f, h) => f.start - h.start)
          .reduce((f, h) => {
            const g = f[f.length - 1];
            if (!g || h.start > g.end) {
              const S = g ? g.end : 0,
                p = h.start;
              S !== p &&
                f.push({
                  start: S,
                  end: p,
                  highlight: !1,
                }),
                f.push(h);
            } else g.end = Math.max(g.end, h.end);
            return f;
          }, []);
        const u = c[c.length - 1];
        return (
          u ||
            c.push({
              start: 0,
              end: a.length,
              highlight: !1,
            }),
          u &&
            u.end < a.length &&
            c.push({
              start: u.end,
              end: a.length,
              highlight: !1,
            }),
          c
        );
      }),
      n = () => {
        const {
          sourceString: o,
          highlightClass: i,
          unhighlightClass: r,
          highlightTag: a,
          unhighlightTag: s,
        } = e;
        return t.value.map((l) => {
          const { start: c, end: u, highlight: f } = l,
            h = o.slice(c, u);
          return f
            ? d(
                a,
                {
                  class: [uu("tag"), i],
                },
                {
                  default: () => [h],
                }
              )
            : d(
                s,
                {
                  class: r,
                },
                {
                  default: () => [h],
                }
              );
        });
      };
    return () => {
      const { tag: o } = e;
      return d(
        o,
        {
          class: uu(),
        },
        {
          default: () => [n()],
        }
      );
    };
  },
});
const Rw = Z(Iw),
  du = (e) =>
    Math.sqrt(
      (e[0].clientX - e[1].clientX) ** 2 + (e[0].clientY - e[1].clientY) ** 2
    ),
  Ow = (e) => ({
    x: (e[0].clientX + e[1].clientX) / 2,
    y: (e[0].clientY + e[1].clientY) / 2,
  }),
  Wa = W("image-preview")[1],
  fu = 2.6,
  Bw = {
    src: String,
    show: Boolean,
    active: Number,
    minZoom: dt(Y),
    maxZoom: dt(Y),
    rootWidth: dt(Number),
    rootHeight: dt(Number),
    disableZoom: Boolean,
    doubleScale: Boolean,
    closeOnClickImage: Boolean,
    closeOnClickOverlay: Boolean,
    vertical: Boolean,
  };
var Dw = j({
  props: Bw,
  emits: ["scale", "close", "longPress"],
  setup(e, { emit: t, slots: n }) {
    const o = Ze({
        scale: 1,
        moveX: 0,
        moveY: 0,
        moving: !1,
        zooming: !1,
        initializing: !1,
        imageRatio: 0,
      }),
      i = jt(),
      r = $(),
      a = $(),
      s = $(!1),
      l = $(!1);
    let c = 0;
    const u = B(() => {
        const {
            scale: H,
            moveX: J,
            moveY: se,
            moving: Ie,
            zooming: De,
            initializing: M,
          } = o,
          K = {
            transitionDuration: De || Ie || M ? "0s" : ".3s",
          };
        return (
          (H !== 1 || l.value) &&
            (K.transform = `matrix(${H}, 0, 0, ${H}, ${J}, ${se})`),
          K
        );
      }),
      f = B(() => {
        if (o.imageRatio) {
          const { rootWidth: H, rootHeight: J } = e,
            se = s.value ? J / o.imageRatio : H;
          return Math.max(0, (o.scale * se - H) / 2);
        }
        return 0;
      }),
      h = B(() => {
        if (o.imageRatio) {
          const { rootWidth: H, rootHeight: J } = e,
            se = s.value ? J : H * o.imageRatio;
          return Math.max(0, (o.scale * se - J) / 2);
        }
        return 0;
      }),
      g = (H, J) => {
        var se;
        if (((H = ht(H, +e.minZoom, +e.maxZoom + 1)), H !== o.scale)) {
          const Ie = H / o.scale;
          if (((o.scale = H), J)) {
            const De = Ne((se = r.value) == null ? void 0 : se.$el),
              M = {
                x: De.width * 0.5,
                y: De.height * 0.5,
              },
              K = o.moveX - (J.x - De.left - M.x) * (Ie - 1),
              fe = o.moveY - (J.y - De.top - M.y) * (Ie - 1);
            (o.moveX = ht(K, -f.value, f.value)),
              (o.moveY = ht(fe, -h.value, h.value));
          } else (o.moveX = 0), (o.moveY = l.value ? c : 0);
          t("scale", {
            scale: H,
            index: e.active,
          });
        }
      },
      S = () => {
        g(1);
      },
      p = () => {
        const H = o.scale > 1 ? 1 : 2;
        g(
          H,
          H === 2 || l.value
            ? {
                x: i.startX.value,
                y: i.startY.value,
              }
            : void 0
        );
      };
    let y,
      v,
      m,
      b,
      w,
      C,
      k,
      I,
      _ = !1;
    const R = (H) => {
        const { touches: J } = H;
        if (((y = J.length), y === 2 && e.disableZoom)) return;
        const { offsetX: se } = i;
        i.start(H),
          (v = o.moveX),
          (m = o.moveY),
          (I = Date.now()),
          (_ = !1),
          (o.moving = y === 1 && (o.scale !== 1 || l.value)),
          (o.zooming = y === 2 && !se.value),
          o.zooming && ((b = o.scale), (w = du(J)));
      },
      O = (H) => {
        const { touches: J } = H;
        if ((i.move(H), o.moving)) {
          const { deltaX: se, deltaY: Ie } = i,
            De = se.value + v,
            M = Ie.value + m;
          if (
            (e.vertical
              ? i.isVertical() && Math.abs(M) > h.value
              : i.isHorizontal() && Math.abs(De) > f.value) &&
            !_
          ) {
            o.moving = !1;
            return;
          }
          (_ = !0),
            We(H, !0),
            (o.moveX = ht(De, -f.value, f.value)),
            (o.moveY = ht(M, -h.value, h.value));
        }
        if (o.zooming && (We(H, !0), J.length === 2)) {
          const se = du(J),
            Ie = (b * se) / w;
          (C = Ow(J)), g(Ie, C);
        }
      },
      x = (H) => {
        var J;
        const se = (J = a.value) == null ? void 0 : J.$el;
        if (!se) return;
        const Ie = se.firstElementChild,
          De = H.target === se,
          M = Ie == null ? void 0 : Ie.contains(H.target);
        (!e.closeOnClickImage && M) ||
          (!e.closeOnClickOverlay && De) ||
          t("close");
      },
      P = (H) => {
        if (y > 1) return;
        const J = Date.now() - I,
          se = 250;
        i.isTap.value &&
          (J < se
            ? e.doubleScale
              ? k
                ? (clearTimeout(k), (k = null), p())
                : (k = setTimeout(() => {
                    x(H), (k = null);
                  }, se))
              : x(H)
            : J > Cf && t("longPress"));
      },
      D = (H) => {
        let J = !1;
        if (
          (o.moving || o.zooming) &&
          ((J = !0),
          o.moving && v === o.moveX && m === o.moveY && (J = !1),
          !H.touches.length)
        ) {
          o.zooming &&
            ((o.moveX = ht(o.moveX, -f.value, f.value)),
            (o.moveY = ht(o.moveY, -h.value, h.value)),
            (o.zooming = !1)),
            (o.moving = !1),
            (v = 0),
            (m = 0),
            (b = 1),
            o.scale < 1 && S();
          const se = +e.maxZoom;
          o.scale > se && g(se, C);
        }
        We(H, J), P(H), i.reset();
      },
      Q = () => {
        const { rootWidth: H, rootHeight: J } = e,
          se = J / H,
          { imageRatio: Ie } = o;
        (s.value = o.imageRatio > se && Ie < fu),
          (l.value = o.imageRatio > se && Ie >= fu),
          l.value &&
            ((c = (Ie * H - J) / 2),
            (o.moveY = c),
            (o.initializing = !0),
            yt(() => {
              o.initializing = !1;
            })),
          S();
      },
      oe = (H) => {
        const { naturalWidth: J, naturalHeight: se } = H.target;
        (o.imageRatio = se / J), Q();
      };
    return (
      ie(() => e.active, S),
      ie(
        () => e.show,
        (H) => {
          H || S();
        }
      ),
      ie(() => [e.rootWidth, e.rootHeight], Q),
      et("touchmove", O, {
        target: B(() => {
          var H;
          return (H = a.value) == null ? void 0 : H.$el;
        }),
      }),
      Oe({
        resetScale: S,
      }),
      () => {
        const H = {
          loading: () =>
            d(
              nn,
              {
                type: "spinner",
              },
              null
            ),
        };
        return d(
          yl,
          {
            ref: a,
            class: Wa("swipe-item"),
            onTouchstartPassive: R,
            onTouchend: D,
            onTouchcancel: D,
          },
          {
            default: () => [
              n.image
                ? d(
                    "div",
                    {
                      class: Wa("image-wrap"),
                    },
                    [
                      n.image({
                        src: e.src,
                        onLoad: oe,
                        style: u.value,
                      }),
                    ]
                  )
                : d(
                    ya,
                    {
                      ref: r,
                      src: e.src,
                      fit: "contain",
                      class: Wa("image", {
                        vertical: s.value,
                      }),
                      style: u.value,
                      onLoad: oe,
                    },
                    H
                  ),
            ],
          }
        );
      }
    );
  },
});
const [$w, No] = W("image-preview"),
  Lw = ["show", "teleport", "transition", "overlayStyle", "closeOnPopstate"],
  Mw = {
    show: Boolean,
    loop: z,
    images: Ye(),
    minZoom: ce(1 / 3),
    maxZoom: ce(3),
    overlay: z,
    vertical: Boolean,
    closeable: Boolean,
    showIndex: z,
    className: Qe,
    closeIcon: G("clear"),
    transition: String,
    beforeClose: Function,
    doubleScale: z,
    overlayClass: Qe,
    overlayStyle: Object,
    swipeDuration: ce(300),
    startPosition: ce(0),
    showIndicators: Boolean,
    closeOnPopstate: z,
    closeOnClickImage: z,
    closeOnClickOverlay: z,
    closeIconPosition: G("top-right"),
    teleport: [String, Object],
  };
var bh = j({
  name: $w,
  props: Mw,
  emits: ["scale", "close", "closed", "change", "longPress", "update:show"],
  setup(e, { emit: t, slots: n }) {
    const o = $(),
      i = $(),
      r = Ze({
        active: 0,
        rootWidth: 0,
        rootHeight: 0,
        disableZoom: !1,
      }),
      a = () => {
        if (o.value) {
          const b = Ne(o.value.$el);
          (r.rootWidth = b.width), (r.rootHeight = b.height), o.value.resize();
        }
      },
      s = (b) => t("scale", b),
      l = (b) => t("update:show", b),
      c = () => {
        lo(e.beforeClose, {
          args: [r.active],
          done: () => l(!1),
        });
      },
      u = (b) => {
        b !== r.active && ((r.active = b), t("change", b));
      },
      f = () => {
        if (e.showIndex)
          return d(
            "div",
            {
              class: No("index"),
            },
            [
              n.index
                ? n.index({
                    index: r.active,
                  })
                : `${r.active + 1} / ${e.images.length}`,
            ]
          );
      },
      h = () => {
        if (n.cover)
          return d(
            "div",
            {
              class: No("cover"),
            },
            [n.cover()]
          );
      },
      g = () => {
        r.disableZoom = !0;
      },
      S = () => {
        r.disableZoom = !1;
      },
      p = () =>
        d(
          vl,
          {
            ref: o,
            lazyRender: !0,
            loop: e.loop,
            class: No("swipe"),
            vertical: e.vertical,
            duration: e.swipeDuration,
            initialSwipe: e.startPosition,
            showIndicators: e.showIndicators,
            indicatorColor: "white",
            onChange: u,
            onDragEnd: S,
            onDragStart: g,
          },
          {
            default: () => [
              e.images.map((b, w) =>
                d(
                  Dw,
                  {
                    ref: (C) => {
                      w === r.active && (i.value = C);
                    },
                    src: b,
                    show: e.show,
                    active: r.active,
                    maxZoom: e.maxZoom,
                    minZoom: e.minZoom,
                    rootWidth: r.rootWidth,
                    rootHeight: r.rootHeight,
                    disableZoom: r.disableZoom,
                    doubleScale: e.doubleScale,
                    closeOnClickImage: e.closeOnClickImage,
                    closeOnClickOverlay: e.closeOnClickOverlay,
                    vertical: e.vertical,
                    onScale: s,
                    onClose: c,
                    onLongPress: () =>
                      t("longPress", {
                        index: w,
                      }),
                  },
                  {
                    image: n.image,
                  }
                )
              ),
            ],
          }
        ),
      y = () => {
        if (e.closeable)
          return d(
            Te,
            {
              role: "button",
              name: e.closeIcon,
              class: [No("close-icon", e.closeIconPosition), bt],
              onClick: c,
            },
            null
          );
      },
      v = () => t("closed"),
      m = (b, w) => {
        var C;
        return (C = o.value) == null ? void 0 : C.swipeTo(b, w);
      };
    return (
      Oe({
        resetScale: () => {
          var b;
          (b = i.value) == null || b.resetScale();
        },
        swipeTo: m,
      }),
      tt(a),
      ie([Xt, zt], a),
      ie(
        () => e.startPosition,
        (b) => u(+b)
      ),
      ie(
        () => e.show,
        (b) => {
          const { images: w, startPosition: C } = e;
          b
            ? (u(+C),
              Ae(() => {
                a(),
                  m(+C, {
                    immediate: !0,
                  });
              }))
            : t("close", {
                index: r.active,
                url: w[r.active],
              });
        }
      ),
      () =>
        d(
          $t,
          Re(
            {
              class: [No(), e.className],
              overlayClass: [No("overlay"), e.overlayClass],
              onClosed: v,
              "onUpdate:show": l,
            },
            Me(e, Lw)
          ),
          {
            default: () => [y(), p(), f(), h()],
          }
        )
    );
  },
});
let Or;
const Fw = {
  loop: !0,
  images: [],
  maxZoom: 3,
  minZoom: 1 / 3,
  onScale: void 0,
  onClose: void 0,
  onChange: void 0,
  vertical: !1,
  teleport: "body",
  className: "",
  showIndex: !0,
  closeable: !1,
  closeIcon: "clear",
  transition: void 0,
  beforeClose: void 0,
  doubleScale: !0,
  overlayStyle: void 0,
  overlayClass: void 0,
  startPosition: 0,
  swipeDuration: 300,
  showIndicators: !1,
  closeOnPopstate: !0,
  closeOnClickOverlay: !0,
  closeIconPosition: "top-right",
};
function Vw() {
  ({ instance: Or } = Sl({
    setup() {
      const { state: e, toggle: t } = wl(),
        n = () => {
          e.images = [];
        };
      return () =>
        d(
          bh,
          Re(e, {
            onClosed: n,
            "onUpdate:show": t,
          }),
          null
        );
    },
  }));
}
const Nw = (e, t = 0) => {
    if (Dt)
      return (
        Or || Vw(),
        (e = Array.isArray(e)
          ? {
              images: e,
              startPosition: t,
            }
          : e),
        Or.open(be({}, Fw, e)),
        Or
      );
  },
  Hw = Z(bh);
function zw() {
  return Array(26)
    .fill("")
    .map((n, o) => String.fromCharCode(65 + o));
}
const [ph, qa] = W("index-bar"),
  jw = {
    sticky: z,
    zIndex: Y,
    teleport: [String, Object],
    highlightColor: String,
    stickyOffsetTop: nt(0),
    indexList: {
      type: Array,
      default: zw,
    },
  },
  wh = Symbol(ph);
var Uw = j({
  name: ph,
  props: jw,
  emits: ["select", "change"],
  setup(e, { emit: t, slots: n }) {
    const o = $(),
      i = $(),
      r = $(""),
      a = jt(),
      s = ui(o),
      { children: l, linkChildren: c } = wt(wh);
    let u;
    c({
      props: e,
    });
    const f = B(() => {
        if ($e(e.zIndex))
          return {
            zIndex: +e.zIndex + 1,
          };
      }),
      h = B(() => {
        if (e.highlightColor)
          return {
            color: e.highlightColor,
          };
      }),
      g = (_, R) => {
        for (let O = l.length - 1; O >= 0; O--) {
          const x = O > 0 ? R[O - 1].height : 0,
            P = e.sticky ? x + e.stickyOffsetTop : 0;
          if (_ + P >= R[O].top) return O;
        }
        return -1;
      },
      S = (_) => l.find((R) => String(R.index) === _),
      p = () => {
        if (xo(o)) return;
        const { sticky: _, indexList: R } = e,
          O = An(s.value),
          x = Ne(s),
          P = l.map((Q) => Q.getRect(s.value, x));
        let D = -1;
        if (u) {
          const Q = S(u);
          if (Q) {
            const oe = Q.getRect(s.value, x);
            e.sticky && e.stickyOffsetTop
              ? (D = g(oe.top - e.stickyOffsetTop, P))
              : (D = g(oe.top, P));
          }
        } else D = g(O, P);
        (r.value = R[D]),
          _ &&
            l.forEach((Q, oe) => {
              const { state: H, $el: J } = Q;
              if (oe === D || oe === D - 1) {
                const se = J.getBoundingClientRect();
                (H.left = se.left), (H.width = se.width);
              } else (H.left = null), (H.width = null);
              if (oe === D)
                (H.active = !0),
                  (H.top = Math.max(e.stickyOffsetTop, P[oe].top - O) + x.top);
              else if (oe === D - 1 && u === "") {
                const se = P[D].top - O;
                (H.active = se > 0), (H.top = se + x.top - P[oe].height);
              } else H.active = !1;
            }),
          (u = "");
      },
      y = () => {
        Ae(p);
      };
    et("scroll", p, {
      target: s,
      passive: !0,
    }),
      tt(y),
      ie(() => e.indexList, y),
      ie(r, (_) => {
        _ && t("change", _);
      });
    const v = () =>
        e.indexList.map((_) => {
          const R = _ === r.value;
          return d(
            "span",
            {
              class: qa("index", {
                active: R,
              }),
              style: R ? h.value : void 0,
              "data-index": _,
            },
            [_]
          );
        }),
      m = (_) => {
        u = String(_);
        const R = S(u);
        if (R) {
          const O = An(s.value),
            x = Ne(s),
            { offsetHeight: P } = document.documentElement;
          if ((R.$el.scrollIntoView(), O === P - x.height)) {
            p();
            return;
          }
          e.sticky &&
            e.stickyOffsetTop &&
            (_o() === P - x.height ? Wi(_o()) : Wi(_o() - e.stickyOffsetTop)),
            t("select", R.index);
        }
      },
      b = (_) => {
        const { index: R } = _.dataset;
        R && m(R);
      },
      w = (_) => {
        b(_.target);
      };
    let C;
    const k = (_) => {
        if ((a.move(_), a.isVertical())) {
          We(_);
          const { clientX: R, clientY: O } = _.touches[0],
            x = document.elementFromPoint(R, O);
          if (x) {
            const { index: P } = x.dataset;
            P && C !== P && ((C = P), b(x));
          }
        }
      },
      I = () =>
        d(
          "div",
          {
            ref: i,
            class: qa("sidebar"),
            style: f.value,
            onClick: w,
            onTouchstartPassive: a.start,
          },
          [v()]
        );
    return (
      Oe({
        scrollTo: m,
      }),
      et("touchmove", k, {
        target: i,
      }),
      () => {
        var _;
        return d(
          "div",
          {
            ref: o,
            class: qa(),
          },
          [
            e.teleport
              ? d(
                  si,
                  {
                    to: e.teleport,
                  },
                  {
                    default: () => [I()],
                  }
                )
              : I(),
            (_ = n.default) == null ? void 0 : _.call(n),
          ]
        );
      }
    );
  },
});
const [Ww, qw] = W("index-anchor"),
  Yw = {
    index: Y,
  };
var Kw = j({
  name: Ww,
  props: Yw,
  setup(e, { slots: t }) {
    const n = Ze({
        top: 0,
        left: null,
        rect: {
          top: 0,
          height: 0,
        },
        width: null,
        active: !1,
      }),
      o = $(),
      { parent: i } = gt(wh);
    if (!i) return;
    const r = () => n.active && i.props.sticky,
      a = B(() => {
        const { zIndex: l, highlightColor: c } = i.props;
        if (r())
          return be(Dn(l), {
            left: n.left ? `${n.left}px` : void 0,
            width: n.width ? `${n.width}px` : void 0,
            transform: n.top ? `translate3d(0, ${n.top}px, 0)` : void 0,
            color: c,
          });
      });
    return (
      Oe({
        state: n,
        getRect: (l, c) => {
          const u = Ne(o);
          return (
            (n.rect.height = u.height),
            l === window || l === document.body
              ? (n.rect.top = u.top + _o())
              : (n.rect.top = u.top + An(l) - c.top),
            n.rect
          );
        },
      }),
      () => {
        const l = r();
        return d(
          "div",
          {
            ref: o,
            style: {
              height: l ? `${n.rect.height}px` : void 0,
            },
          },
          [
            d(
              "div",
              {
                style: a.value,
                class: [
                  qw({
                    sticky: l,
                  }),
                  {
                    [dl]: l,
                  },
                ],
              },
              [t.default ? t.default() : e.index]
            ),
          ]
        );
      }
    );
  },
});
const Zw = Z(Kw),
  Gw = Z(Uw),
  [Qw, Ho, Xw] = W("list"),
  Jw = {
    error: Boolean,
    offset: ce(300),
    loading: Boolean,
    disabled: Boolean,
    finished: Boolean,
    scroller: Object,
    errorText: String,
    direction: G("down"),
    loadingText: String,
    finishedText: String,
    immediateCheck: z,
  };
var eS = j({
  name: Qw,
  props: Jw,
  emits: ["load", "update:error", "update:loading"],
  setup(e, { emit: t, slots: n }) {
    const o = $(e.loading),
      i = $(),
      r = $(),
      a = Iy(),
      s = ui(i),
      l = B(() => e.scroller || s.value),
      c = () => {
        Ae(() => {
          if (
            o.value ||
            e.finished ||
            e.disabled ||
            e.error ||
            (a == null ? void 0 : a.value) === !1
          )
            return;
          const { direction: S } = e,
            p = +e.offset,
            y = Ne(l);
          if (!y.height || xo(i)) return;
          let v = !1;
          const m = Ne(r);
          S === "up"
            ? (v = y.top - m.top <= p)
            : (v = m.bottom - y.bottom <= p),
            v && ((o.value = !0), t("update:loading", !0), t("load"));
        });
      },
      u = () => {
        if (e.finished) {
          const S = n.finished ? n.finished() : e.finishedText;
          if (S)
            return d(
              "div",
              {
                class: Ho("finished-text"),
              },
              [S]
            );
        }
      },
      f = () => {
        t("update:error", !1), c();
      },
      h = () => {
        if (e.error) {
          const S = n.error ? n.error() : e.errorText;
          if (S)
            return d(
              "div",
              {
                role: "button",
                class: Ho("error-text"),
                tabindex: 0,
                onClick: f,
              },
              [S]
            );
        }
      },
      g = () => {
        if (o.value && !e.finished && !e.disabled)
          return d(
            "div",
            {
              class: Ho("loading"),
            },
            [
              n.loading
                ? n.loading()
                : d(
                    nn,
                    {
                      class: Ho("loading-icon"),
                    },
                    {
                      default: () => [e.loadingText || Xw("loading")],
                    }
                  ),
            ]
          );
      };
    return (
      ie(() => [e.loading, e.finished, e.error], c),
      a &&
        ie(a, (S) => {
          S && c();
        }),
      Ud(() => {
        o.value = e.loading;
      }),
      tt(() => {
        e.immediateCheck && c();
      }),
      Oe({
        check: c,
      }),
      et("scroll", c, {
        target: l,
        passive: !0,
      }),
      () => {
        var S;
        const p = (S = n.default) == null ? void 0 : S.call(n),
          y = d(
            "div",
            {
              ref: r,
              class: Ho("placeholder"),
            },
            null
          );
        return d(
          "div",
          {
            ref: i,
            role: "feed",
            class: Ho(),
            "aria-busy": o.value,
          },
          [
            e.direction === "down" ? p : y,
            g(),
            u(),
            h(),
            e.direction === "up" ? p : y,
          ]
        );
      }
    );
  },
});
const tS = Z(eS),
  [nS, Sn] = W("nav-bar"),
  oS = {
    title: String,
    fixed: Boolean,
    zIndex: Y,
    border: z,
    leftText: String,
    rightText: String,
    leftDisabled: Boolean,
    rightDisabled: Boolean,
    leftArrow: Boolean,
    placeholder: Boolean,
    safeAreaInsetTop: Boolean,
    clickable: z,
  };
var iS = j({
  name: nS,
  props: oS,
  emits: ["clickLeft", "clickRight"],
  setup(e, { emit: t, slots: n }) {
    const o = $(),
      i = ua(o, Sn),
      r = (u) => {
        e.leftDisabled || t("clickLeft", u);
      },
      a = (u) => {
        e.rightDisabled || t("clickRight", u);
      },
      s = () =>
        n.left
          ? n.left()
          : [
              e.leftArrow &&
                d(
                  Te,
                  {
                    class: Sn("arrow"),
                    name: "arrow-left",
                  },
                  null
                ),
              e.leftText &&
                d(
                  "span",
                  {
                    class: Sn("text"),
                  },
                  [e.leftText]
                ),
            ],
      l = () =>
        n.right
          ? n.right()
          : d(
              "span",
              {
                class: Sn("text"),
              },
              [e.rightText]
            ),
      c = () => {
        const { title: u, fixed: f, border: h, zIndex: g } = e,
          S = Dn(g),
          p = e.leftArrow || e.leftText || n.left,
          y = e.rightText || n.right;
        return d(
          "div",
          {
            ref: o,
            style: S,
            class: [
              Sn({
                fixed: f,
              }),
              {
                [dl]: h,
                "van-safe-area-top": e.safeAreaInsetTop,
              },
            ],
          },
          [
            d(
              "div",
              {
                class: Sn("content"),
              },
              [
                p &&
                  d(
                    "div",
                    {
                      class: [
                        Sn("left", {
                          disabled: e.leftDisabled,
                        }),
                        e.clickable && !e.leftDisabled ? bt : "",
                      ],
                      onClick: r,
                    },
                    [s()]
                  ),
                d(
                  "div",
                  {
                    class: [Sn("title"), "van-ellipsis"],
                  },
                  [n.title ? n.title() : u]
                ),
                y &&
                  d(
                    "div",
                    {
                      class: [
                        Sn("right", {
                          disabled: e.rightDisabled,
                        }),
                        e.clickable && !e.rightDisabled ? bt : "",
                      ],
                      onClick: a,
                    },
                    [l()]
                  ),
              ]
            ),
          ]
        );
      };
    return () => (e.fixed && e.placeholder ? i(c) : c());
  },
});
const rS = Z(iS),
  [aS, bi] = W("notice-bar"),
  sS = {
    text: String,
    mode: String,
    color: String,
    delay: ce(1),
    speed: ce(60),
    leftIcon: String,
    wrapable: Boolean,
    background: String,
    scrollable: {
      type: Boolean,
      default: null,
    },
  };
var lS = j({
  name: aS,
  props: sS,
  emits: ["close", "replay"],
  setup(e, { emit: t, slots: n }) {
    let o = 0,
      i = 0,
      r;
    const a = $(),
      s = $(),
      l = Ze({
        show: !0,
        offset: 0,
        duration: 0,
      }),
      c = () => {
        if (n["left-icon"]) return n["left-icon"]();
        if (e.leftIcon)
          return d(
            Te,
            {
              class: bi("left-icon"),
              name: e.leftIcon,
            },
            null
          );
      },
      u = () => {
        if (e.mode === "closeable") return "cross";
        if (e.mode === "link") return "arrow";
      },
      f = (y) => {
        e.mode === "closeable" && ((l.show = !1), t("close", y));
      },
      h = () => {
        if (n["right-icon"]) return n["right-icon"]();
        const y = u();
        if (y)
          return d(
            Te,
            {
              name: y,
              class: bi("right-icon"),
              onClick: f,
            },
            null
          );
      },
      g = () => {
        (l.offset = o),
          (l.duration = 0),
          yt(() => {
            Xn(() => {
              (l.offset = -i), (l.duration = (i + o) / +e.speed), t("replay");
            });
          });
      },
      S = () => {
        const y = e.scrollable === !1 && !e.wrapable,
          v = {
            transform: l.offset ? `translateX(${l.offset}px)` : "",
            transitionDuration: `${l.duration}s`,
          };
        return d(
          "div",
          {
            ref: a,
            role: "marquee",
            class: bi("wrap"),
          },
          [
            d(
              "div",
              {
                ref: s,
                style: v,
                class: [
                  bi("content"),
                  {
                    "van-ellipsis": y,
                  },
                ],
                onTransitionend: g,
              },
              [n.default ? n.default() : e.text]
            ),
          ]
        );
      },
      p = () => {
        const { delay: y, speed: v, scrollable: m } = e,
          b = $e(y) ? +y * 1e3 : 0;
        (o = 0),
          (i = 0),
          (l.offset = 0),
          (l.duration = 0),
          clearTimeout(r),
          (r = setTimeout(() => {
            if (!a.value || !s.value || m === !1) return;
            const w = Ne(a).width,
              C = Ne(s).width;
            (m || C > w) &&
              Xn(() => {
                (o = w), (i = C), (l.offset = -i), (l.duration = i / +v);
              });
          }, b));
      };
    return (
      ca(p),
      ci(p),
      et("pageshow", p),
      Oe({
        reset: p,
      }),
      ie(() => [e.text, e.scrollable], p),
      () => {
        const { color: y, wrapable: v, background: m } = e;
        return st(
          d(
            "div",
            {
              role: "alert",
              class: bi({
                wrapable: v,
              }),
              style: {
                color: y,
                background: m,
              },
            },
            [c(), S(), h()]
          ),
          [[ft, l.show]]
        );
      }
    );
  },
});
const cS = Z(lS),
  [uS, dS] = W("notify"),
  fS = ["lockScroll", "position", "show", "teleport", "zIndex"],
  hS = be({}, di, {
    type: G("danger"),
    color: String,
    message: Y,
    position: G("top"),
    className: Qe,
    background: String,
    lockScroll: Boolean,
  });
var Sh = j({
  name: uS,
  props: hS,
  emits: ["update:show"],
  setup(e, { emit: t, slots: n }) {
    const o = (i) => t("update:show", i);
    return () =>
      d(
        $t,
        Re(
          {
            class: [dS([e.type]), e.className],
            style: {
              color: e.color,
              background: e.background,
            },
            overlay: !1,
            duration: 0.2,
            "onUpdate:show": o,
          },
          Me(e, fS)
        ),
        {
          default: () => [n.default ? n.default() : e.message],
        }
      );
  },
});
let hu, Xo;
const gS = (e) =>
  hn(e)
    ? e
    : {
        message: e,
      };
function mS() {
  ({ instance: Xo } = Sl({
    setup() {
      const { state: e, toggle: t } = wl();
      return () =>
        d(
          Sh,
          Re(e, {
            "onUpdate:show": t,
          }),
          null
        );
    },
  }));
}
const vS = () => ({
  type: "danger",
  color: void 0,
  message: "",
  onClose: void 0,
  onClick: void 0,
  onOpened: void 0,
  duration: 3e3,
  position: void 0,
  className: "",
  lockScroll: !1,
  background: void 0,
});
let yS = vS();
const bS = () => {
  Xo && Xo.toggle(!1);
};
function Yi(e) {
  if (Dt)
    return (
      Xo || mS(),
      (e = be({}, yS, gS(e))),
      Xo.open(e),
      clearTimeout(hu),
      e.duration > 0 && (hu = setTimeout(bS, e.duration)),
      Xo
    );
}
const pS = Z(Sh),
  [wS, Oi] = W("key"),
  SS = d(
    "svg",
    {
      class: Oi("collapse-icon"),
      viewBox: "0 0 30 24",
    },
    [
      d(
        "path",
        {
          d: "M26 13h-2v2h2v-2zm-8-3h2V8h-2v2zm2-4h2V4h-2v2zm2 4h4V4h-2v4h-2v2zm-7 14 3-3h-6l3 3zM6 13H4v2h2v-2zm16 0H8v2h14v-2zm-12-3h2V8h-2v2zM28 0l1 1 1 1v15l-1 2H1l-1-2V2l1-1 1-1zm0 2H2v15h26V2zM6 4v2H4V4zm10 2h2V4h-2v2zM8 9v1H4V8zm8 0v1h-2V8zm-6-5v2H8V4zm4 0v2h-2V4z",
          fill: "currentColor",
        },
        null
      ),
    ]
  ),
  CS = d(
    "svg",
    {
      class: Oi("delete-icon"),
      viewBox: "0 0 32 22",
    },
    [
      d(
        "path",
        {
          d: "M28 0a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H10.4a2 2 0 0 1-1.4-.6L1 13.1c-.6-.5-.9-1.3-.9-2 0-1 .3-1.7.9-2.2L9 .6a2 2 0 0 1 1.4-.6zm0 2H10.4l-8.2 8.3a1 1 0 0 0-.3.7c0 .3.1.5.3.7l8.2 8.4H28a2 2 0 0 0 2-2V4c0-1.1-.9-2-2-2zm-5 4a1 1 0 0 1 .7.3 1 1 0 0 1 0 1.4L20.4 11l3.3 3.3c.2.2.3.5.3.7 0 .3-.1.5-.3.7a1 1 0 0 1-.7.3 1 1 0 0 1-.7-.3L19 12.4l-3.4 3.3a1 1 0 0 1-.6.3 1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7c0-.2.1-.5.3-.7l3.3-3.3-3.3-3.3A1 1 0 0 1 14 7c0-.3.1-.5.3-.7A1 1 0 0 1 15 6a1 1 0 0 1 .6.3L19 9.6l3.3-3.3A1 1 0 0 1 23 6z",
          fill: "currentColor",
        },
        null
      ),
    ]
  );
var Ya = j({
  name: wS,
  props: {
    type: String,
    text: Y,
    color: String,
    wider: Boolean,
    large: Boolean,
    loading: Boolean,
  },
  emits: ["press"],
  setup(e, { emit: t, slots: n }) {
    const o = $(!1),
      i = jt(),
      r = (c) => {
        i.start(c), (o.value = !0);
      },
      a = (c) => {
        i.move(c), i.direction.value && (o.value = !1);
      },
      s = (c) => {
        o.value &&
          (n.default || We(c), (o.value = !1), t("press", e.text, e.type));
      },
      l = () => {
        if (e.loading)
          return d(
            nn,
            {
              class: Oi("loading-icon"),
            },
            null
          );
        const c = n.default ? n.default() : e.text;
        switch (e.type) {
          case "delete":
            return c || CS;
          case "extra":
            return c || SS;
          default:
            return c;
        }
      };
    return () =>
      d(
        "div",
        {
          class: Oi("wrapper", {
            wider: e.wider,
          }),
          onTouchstartPassive: r,
          onTouchmovePassive: a,
          onTouchend: s,
          onTouchcancel: s,
        },
        [
          d(
            "div",
            {
              role: "button",
              tabindex: 0,
              class: Oi([
                e.color,
                {
                  large: e.large,
                  active: o.value,
                  delete: e.type === "delete",
                },
              ]),
            },
            [l()]
          ),
        ]
      );
  },
});
const [_S, zn] = W("number-keyboard"),
  kS = {
    show: Boolean,
    title: String,
    theme: G("default"),
    zIndex: Y,
    teleport: [String, Object],
    maxlength: ce(1 / 0),
    modelValue: G(""),
    transition: z,
    blurOnClose: z,
    showDeleteKey: z,
    randomKeyOrder: Boolean,
    closeButtonText: String,
    deleteButtonText: String,
    closeButtonLoading: Boolean,
    hideOnClickOutside: z,
    safeAreaInsetBottom: z,
    extraKey: {
      type: [String, Array],
      default: "",
    },
  };
function xS(e) {
  for (let t = e.length - 1; t > 0; t--) {
    const n = Math.floor(Math.random() * (t + 1)),
      o = e[t];
    (e[t] = e[n]), (e[n] = o);
  }
  return e;
}
var TS = j({
  name: _S,
  inheritAttrs: !1,
  props: kS,
  emits: [
    "show",
    "hide",
    "blur",
    "input",
    "close",
    "delete",
    "update:modelValue",
  ],
  setup(e, { emit: t, slots: n, attrs: o }) {
    const i = $(),
      r = () => {
        const y = Array(9)
          .fill("")
          .map((v, m) => ({
            text: m + 1,
          }));
        return e.randomKeyOrder && xS(y), y;
      },
      a = () => [
        ...r(),
        {
          text: e.extraKey,
          type: "extra",
        },
        {
          text: 0,
        },
        {
          text: e.showDeleteKey ? e.deleteButtonText : "",
          type: e.showDeleteKey ? "delete" : "",
        },
      ],
      s = () => {
        const y = r(),
          { extraKey: v } = e,
          m = Array.isArray(v) ? v : [v];
        return (
          m.length === 1
            ? y.push(
                {
                  text: 0,
                  wider: !0,
                },
                {
                  text: m[0],
                  type: "extra",
                }
              )
            : m.length === 2 &&
              y.push(
                {
                  text: m[0],
                  type: "extra",
                },
                {
                  text: 0,
                },
                {
                  text: m[1],
                  type: "extra",
                }
              ),
          y
        );
      },
      l = B(() => (e.theme === "custom" ? s() : a())),
      c = () => {
        e.show && t("blur");
      },
      u = () => {
        t("close"), e.blurOnClose && c();
      },
      f = () => t(e.show ? "show" : "hide"),
      h = (y, v) => {
        if (y === "") {
          v === "extra" && c();
          return;
        }
        const m = e.modelValue;
        v === "delete"
          ? (t("delete"), t("update:modelValue", m.slice(0, m.length - 1)))
          : v === "close"
          ? u()
          : m.length < +e.maxlength &&
            (t("input", y), t("update:modelValue", m + y));
      },
      g = () => {
        const { title: y, theme: v, closeButtonText: m } = e,
          b = n["title-left"],
          w = m && v === "default";
        if (y || w || b)
          return d(
            "div",
            {
              class: zn("header"),
            },
            [
              b &&
                d(
                  "span",
                  {
                    class: zn("title-left"),
                  },
                  [b()]
                ),
              y &&
                d(
                  "h2",
                  {
                    class: zn("title"),
                  },
                  [y]
                ),
              w &&
                d(
                  "button",
                  {
                    type: "button",
                    class: [zn("close"), bt],
                    onClick: u,
                  },
                  [m]
                ),
            ]
          );
      },
      S = () =>
        l.value.map((y) => {
          const v = {};
          return (
            y.type === "delete" && (v.default = n.delete),
            y.type === "extra" && (v.default = n["extra-key"]),
            d(
              Ya,
              {
                key: y.text,
                text: y.text,
                type: y.type,
                wider: y.wider,
                color: y.color,
                onPress: h,
              },
              v
            )
          );
        }),
      p = () => {
        if (e.theme === "custom")
          return d(
            "div",
            {
              class: zn("sidebar"),
            },
            [
              e.showDeleteKey &&
                d(
                  Ya,
                  {
                    large: !0,
                    text: e.deleteButtonText,
                    type: "delete",
                    onPress: h,
                  },
                  {
                    default: n.delete,
                  }
                ),
              d(
                Ya,
                {
                  large: !0,
                  text: e.closeButtonText,
                  type: "close",
                  color: "blue",
                  loading: e.closeButtonLoading,
                  onPress: h,
                },
                null
              ),
            ]
          );
      };
    return (
      ie(
        () => e.show,
        (y) => {
          e.transition || t(y ? "show" : "hide");
        }
      ),
      e.hideOnClickOutside &&
        sa(i, c, {
          eventName: "touchstart",
        }),
      () => {
        const y = g(),
          v = d(
            li,
            {
              name: e.transition ? "van-slide-up" : "",
            },
            {
              default: () => [
                st(
                  d(
                    "div",
                    Re(
                      {
                        ref: i,
                        style: Dn(e.zIndex),
                        class: zn({
                          unfit: !e.safeAreaInsetBottom,
                          "with-title": !!y,
                        }),
                        onAnimationend: f,
                        onTouchstartPassive: cl,
                      },
                      o
                    ),
                    [
                      y,
                      d(
                        "div",
                        {
                          class: zn("body"),
                        },
                        [
                          d(
                            "div",
                            {
                              class: zn("keys"),
                            },
                            [S()]
                          ),
                          p(),
                        ]
                      ),
                    ]
                  ),
                  [[ft, e.show]]
                ),
              ],
            }
          );
        return e.teleport
          ? d(
              si,
              {
                to: e.teleport,
              },
              {
                default: () => [v],
              }
            )
          : v;
      }
    );
  },
});
const ES = Z(TS),
  [PS, zo, gu] = W("pagination"),
  Ka = (e, t, n) => ({
    number: e,
    text: t,
    active: n,
  }),
  AS = {
    mode: G("multi"),
    prevText: String,
    nextText: String,
    pageCount: ce(0),
    modelValue: nt(0),
    totalItems: ce(0),
    showPageSize: ce(5),
    itemsPerPage: ce(10),
    forceEllipses: Boolean,
    showPrevButton: z,
    showNextButton: z,
  };
var IS = j({
  name: PS,
  props: AS,
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t, slots: n }) {
    const o = B(() => {
        const { pageCount: u, totalItems: f, itemsPerPage: h } = e,
          g = +u || Math.ceil(+f / +h);
        return Math.max(1, g);
      }),
      i = B(() => {
        const u = [],
          f = o.value,
          h = +e.showPageSize,
          { modelValue: g, forceEllipses: S } = e;
        let p = 1,
          y = f;
        const v = h < f;
        v &&
          ((p = Math.max(g - Math.floor(h / 2), 1)),
          (y = p + h - 1),
          y > f && ((y = f), (p = y - h + 1)));
        for (let m = p; m <= y; m++) {
          const b = Ka(m, m, m === g);
          u.push(b);
        }
        if (v && h > 0 && S) {
          if (p > 1) {
            const m = Ka(p - 1, "...");
            u.unshift(m);
          }
          if (y < f) {
            const m = Ka(y + 1, "...");
            u.push(m);
          }
        }
        return u;
      }),
      r = (u, f) => {
        (u = ht(u, 1, o.value)),
          e.modelValue !== u &&
            (t("update:modelValue", u), f && t("change", u));
      };
    ri(() => r(e.modelValue));
    const a = () =>
        d(
          "li",
          {
            class: zo("page-desc"),
          },
          [n.pageDesc ? n.pageDesc() : `${e.modelValue}/${o.value}`]
        ),
      s = () => {
        const { mode: u, modelValue: f, showPrevButton: h } = e;
        if (!h) return;
        const g = n["prev-text"],
          S = f === 1;
        return d(
          "li",
          {
            class: [
              zo("item", {
                disabled: S,
                border: u === "simple",
                prev: !0,
              }),
              Ii,
            ],
          },
          [
            d(
              "button",
              {
                type: "button",
                disabled: S,
                onClick: () => r(f - 1, !0),
              },
              [g ? g() : e.prevText || gu("prev")]
            ),
          ]
        );
      },
      l = () => {
        const { mode: u, modelValue: f, showNextButton: h } = e;
        if (!h) return;
        const g = n["next-text"],
          S = f === o.value;
        return d(
          "li",
          {
            class: [
              zo("item", {
                disabled: S,
                border: u === "simple",
                next: !0,
              }),
              Ii,
            ],
          },
          [
            d(
              "button",
              {
                type: "button",
                disabled: S,
                onClick: () => r(f + 1, !0),
              },
              [g ? g() : e.nextText || gu("next")]
            ),
          ]
        );
      },
      c = () =>
        i.value.map((u) =>
          d(
            "li",
            {
              class: [
                zo("item", {
                  active: u.active,
                  page: !0,
                }),
                Ii,
              ],
            },
            [
              d(
                "button",
                {
                  type: "button",
                  "aria-current": u.active || void 0,
                  onClick: () => r(u.number, !0),
                },
                [n.page ? n.page(u) : u.text]
              ),
            ]
          )
        );
    return () =>
      d(
        "nav",
        {
          role: "navigation",
          class: zo(),
        },
        [
          d(
            "ul",
            {
              class: zo("items"),
            },
            [s(), e.mode === "simple" ? a() : c(), l()]
          ),
        ]
      );
  },
});
const RS = Z(IS),
  [OS, pi] = W("password-input"),
  BS = {
    info: String,
    mask: z,
    value: G(""),
    gutter: Y,
    length: ce(6),
    focused: Boolean,
    errorInfo: String,
  };
var DS = j({
  name: OS,
  props: BS,
  emits: ["focus"],
  setup(e, { emit: t }) {
    const n = (i) => {
        i.stopPropagation(), t("focus", i);
      },
      o = () => {
        const i = [],
          { mask: r, value: a, gutter: s, focused: l } = e,
          c = +e.length;
        for (let u = 0; u < c; u++) {
          const f = a[u],
            h = u !== 0 && !s,
            g = l && u === a.length;
          let S;
          u !== 0 &&
            s &&
            (S = {
              marginLeft: xe(s),
            }),
            i.push(
              d(
                "li",
                {
                  class: [
                    {
                      [wf]: h,
                    },
                    pi("item", {
                      focus: g,
                    }),
                  ],
                  style: S,
                },
                [
                  r
                    ? d(
                        "i",
                        {
                          style: {
                            visibility: f ? "visible" : "hidden",
                          },
                        },
                        null
                      )
                    : f,
                  g &&
                    d(
                      "div",
                      {
                        class: pi("cursor"),
                      },
                      null
                    ),
                ]
              )
            );
        }
        return i;
      };
    return () => {
      const i = e.errorInfo || e.info;
      return d(
        "div",
        {
          class: pi(),
        },
        [
          d(
            "ul",
            {
              class: [
                pi("security"),
                {
                  [Ii]: !e.gutter,
                },
              ],
              onTouchstartPassive: n,
            },
            [o()]
          ),
          i &&
            d(
              "div",
              {
                class: pi(e.errorInfo ? "error-info" : "info"),
              },
              [i]
            ),
        ]
      );
    };
  },
});
const $S = Z(DS),
  LS = Z(Ny);
function rn(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function Al(e) {
  var t = rn(e).Element;
  return e instanceof t || e instanceof Element;
}
function Jt(e) {
  var t = rn(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ch(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = rn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var ni = Math.round;
function Rs() {
  var e = navigator.userAgentData;
  return e != null && e.brands
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function MS() {
  return !/^((?!chrome|android).)*safari/i.test(Rs());
}
function Ur(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(),
    i = 1,
    r = 1;
  t &&
    Jt(e) &&
    ((i = (e.offsetWidth > 0 && ni(o.width) / e.offsetWidth) || 1),
    (r = (e.offsetHeight > 0 && ni(o.height) / e.offsetHeight) || 1));
  var a = Al(e) ? rn(e) : window,
    s = a.visualViewport,
    l = !MS() && n,
    c = (o.left + (l && s ? s.offsetLeft : 0)) / i,
    u = (o.top + (l && s ? s.offsetTop : 0)) / r,
    f = o.width / i,
    h = o.height / r;
  return {
    width: f,
    height: h,
    top: u,
    right: c + f,
    bottom: u + h,
    left: c,
    x: c,
    y: u,
  };
}
function _h(e) {
  var t = rn(e),
    n = t.pageXOffset,
    o = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: o,
  };
}
function FS(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop,
  };
}
function VS(e) {
  return e === rn(e) || !Jt(e) ? _h(e) : FS(e);
}
function In(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ba(e) {
  return ((Al(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function NS(e) {
  return Ur(ba(e)).left + _h(e).scrollLeft;
}
function Rn(e) {
  return rn(e).getComputedStyle(e);
}
function Il(e) {
  var t = Rn(e),
    n = t.overflow,
    o = t.overflowX,
    i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + o);
}
function HS(e) {
  var t = e.getBoundingClientRect(),
    n = ni(t.width) / e.offsetWidth || 1,
    o = ni(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function zS(e, t, n) {
  n === void 0 && (n = !1);
  var o = Jt(t),
    i = Jt(t) && HS(t),
    r = ba(t),
    a = Ur(e, i, n),
    s = {
      scrollLeft: 0,
      scrollTop: 0,
    },
    l = {
      x: 0,
      y: 0,
    };
  return (
    (o || (!o && !n)) &&
      ((In(t) !== "body" || Il(r)) && (s = VS(t)),
      Jt(t)
        ? ((l = Ur(t, !0)), (l.x += t.clientLeft), (l.y += t.clientTop))
        : r && (l.x = NS(r))),
    {
      x: a.left + s.scrollLeft - l.x,
      y: a.top + s.scrollTop - l.y,
      width: a.width,
      height: a.height,
    }
  );
}
function jS(e) {
  var t = Ur(e),
    n = e.offsetWidth,
    o = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - o) <= 1 && (o = t.height),
    {
      x: e.offsetLeft,
      y: e.offsetTop,
      width: n,
      height: o,
    }
  );
}
function Rl(e) {
  return In(e) === "html"
    ? e
    : e.assignedSlot || e.parentNode || (Ch(e) ? e.host : null) || ba(e);
}
function kh(e) {
  return ["html", "body", "#document"].indexOf(In(e)) >= 0
    ? e.ownerDocument.body
    : Jt(e) && Il(e)
    ? e
    : kh(Rl(e));
}
function Br(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = kh(e),
    i = o === ((n = e.ownerDocument) == null ? void 0 : n.body),
    r = rn(o),
    a = i ? [r].concat(r.visualViewport || [], Il(o) ? o : []) : o,
    s = t.concat(a);
  return i ? s : s.concat(Br(Rl(a)));
}
function US(e) {
  return ["table", "td", "th"].indexOf(In(e)) >= 0;
}
function mu(e) {
  return !Jt(e) || Rn(e).position === "fixed" ? null : e.offsetParent;
}
function WS(e) {
  var t = /firefox/i.test(Rs()),
    n = /Trident/i.test(Rs());
  if (n && Jt(e)) {
    var o = Rn(e);
    if (o.position === "fixed") return null;
  }
  var i = Rl(e);
  for (Ch(i) && (i = i.host); Jt(i) && ["html", "body"].indexOf(In(i)) < 0; ) {
    var r = Rn(i);
    if (
      r.transform !== "none" ||
      r.perspective !== "none" ||
      r.contain === "paint" ||
      ["transform", "perspective"].indexOf(r.willChange) !== -1 ||
      (t && r.willChange === "filter") ||
      (t && r.filter && r.filter !== "none")
    )
      return i;
    i = i.parentNode;
  }
  return null;
}
function xh(e) {
  for (var t = rn(e), n = mu(e); n && US(n) && Rn(n).position === "static"; )
    n = mu(n);
  return n &&
    (In(n) === "html" || (In(n) === "body" && Rn(n).position === "static"))
    ? t
    : n || WS(e) || t;
}
var Jo = "top",
  Wr = "bottom",
  Ki = "right",
  ko = "left",
  Th = "auto",
  qS = [Jo, Wr, Ki, ko],
  Eh = "start",
  qr = "end",
  YS = [].concat(qS, [Th]).reduce(function (e, t) {
    return e.concat([t, t + "-" + Eh, t + "-" + qr]);
  }, []),
  KS = "beforeRead",
  ZS = "read",
  GS = "afterRead",
  QS = "beforeMain",
  XS = "main",
  JS = "afterMain",
  eC = "beforeWrite",
  tC = "write",
  nC = "afterWrite",
  Os = [KS, ZS, GS, QS, XS, JS, eC, tC, nC];
function oC(e) {
  var t = new Map(),
    n = new Set(),
    o = [];
  e.forEach(function (r) {
    t.set(r.name, r);
  });
  function i(r) {
    n.add(r.name);
    var a = [].concat(r.requires || [], r.requiresIfExists || []);
    a.forEach(function (s) {
      if (!n.has(s)) {
        var l = t.get(s);
        l && i(l);
      }
    }),
      o.push(r);
  }
  return (
    e.forEach(function (r) {
      n.has(r.name) || i(r);
    }),
    o
  );
}
function iC(e) {
  var t = oC(e);
  return Os.reduce(function (n, o) {
    return n.concat(
      t.filter(function (i) {
        return i.phase === o;
      })
    );
  }, []);
}
function rC(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (n) {
          Promise.resolve().then(function () {
            (t = void 0), n(e());
          });
        })),
      t
    );
  };
}
function jn(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1;
    o < t;
    o++
  )
    n[o - 1] = arguments[o];
  return [].concat(n).reduce(function (i, r) {
    return i.replace(/%s/, r);
  }, e);
}
var mo =
    'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s',
  aC =
    'Popper: modifier "%s" requires "%s", but "%s" modifier is not available',
  vu = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function sC(e) {
  e.forEach(function (t) {
    []
      .concat(Object.keys(t), vu)
      .filter(function (n, o, i) {
        return i.indexOf(n) === o;
      })
      .forEach(function (n) {
        switch (n) {
          case "name":
            typeof t.name != "string" &&
              console.error(
                jn(
                  mo,
                  String(t.name),
                  '"name"',
                  '"string"',
                  '"' + String(t.name) + '"'
                )
              );
            break;
          case "enabled":
            typeof t.enabled != "boolean" &&
              console.error(
                jn(
                  mo,
                  t.name,
                  '"enabled"',
                  '"boolean"',
                  '"' + String(t.enabled) + '"'
                )
              );
            break;
          case "phase":
            Os.indexOf(t.phase) < 0 &&
              console.error(
                jn(
                  mo,
                  t.name,
                  '"phase"',
                  "either " + Os.join(", "),
                  '"' + String(t.phase) + '"'
                )
              );
            break;
          case "fn":
            typeof t.fn != "function" &&
              console.error(
                jn(mo, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"')
              );
            break;
          case "effect":
            t.effect != null &&
              typeof t.effect != "function" &&
              console.error(
                jn(
                  mo,
                  t.name,
                  '"effect"',
                  '"function"',
                  '"' + String(t.fn) + '"'
                )
              );
            break;
          case "requires":
            t.requires != null &&
              !Array.isArray(t.requires) &&
              console.error(
                jn(
                  mo,
                  t.name,
                  '"requires"',
                  '"array"',
                  '"' + String(t.requires) + '"'
                )
              );
            break;
          case "requiresIfExists":
            Array.isArray(t.requiresIfExists) ||
              console.error(
                jn(
                  mo,
                  t.name,
                  '"requiresIfExists"',
                  '"array"',
                  '"' + String(t.requiresIfExists) + '"'
                )
              );
            break;
          case "options":
          case "data":
            break;
          default:
            console.error(
              'PopperJS: an invalid property has been provided to the "' +
                t.name +
                '" modifier, valid properties are ' +
                vu
                  .map(function (o) {
                    return '"' + o + '"';
                  })
                  .join(", ") +
                '; but "' +
                n +
                '" was provided.'
            );
        }
        t.requires &&
          t.requires.forEach(function (o) {
            e.find(function (i) {
              return i.name === o;
            }) == null && console.error(jn(aC, String(t.name), o, o));
          });
      });
  });
}
function lC(e, t) {
  var n = new Set();
  return e.filter(function (o) {
    var i = t(o);
    if (!n.has(i)) return n.add(i), !0;
  });
}
function pa(e) {
  return e.split("-")[0];
}
function cC(e) {
  var t = e.reduce(function (n, o) {
    var i = n[o.name];
    return (
      (n[o.name] = i
        ? Object.assign({}, i, o, {
            options: Object.assign({}, i.options, o.options),
            data: Object.assign({}, i.data, o.data),
          })
        : o),
      n
    );
  }, {});
  return Object.keys(t).map(function (n) {
    return t[n];
  });
}
function Ph(e) {
  return e.split("-")[1];
}
function uC(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function dC(e) {
  var t = e.reference,
    n = e.element,
    o = e.placement,
    i = o ? pa(o) : null,
    r = o ? Ph(o) : null,
    a = t.x + t.width / 2 - n.width / 2,
    s = t.y + t.height / 2 - n.height / 2,
    l;
  switch (i) {
    case Jo:
      l = {
        x: a,
        y: t.y - n.height,
      };
      break;
    case Wr:
      l = {
        x: a,
        y: t.y + t.height,
      };
      break;
    case Ki:
      l = {
        x: t.x + t.width,
        y: s,
      };
      break;
    case ko:
      l = {
        x: t.x - n.width,
        y: s,
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y,
      };
  }
  var c = i ? uC(i) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (r) {
      case Eh:
        l[c] = l[c] - (t[u] / 2 - n[u] / 2);
        break;
      case qr:
        l[c] = l[c] + (t[u] / 2 - n[u] / 2);
        break;
    }
  }
  return l;
}
var yu =
    "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.",
  fC =
    "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.",
  bu = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute",
  };
function pu() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function (o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function hC(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.defaultModifiers,
    o = n === void 0 ? [] : n,
    i = t.defaultOptions,
    r = i === void 0 ? bu : i;
  return function (s, l, c) {
    c === void 0 && (c = r);
    var u = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, bu, r),
        modifiersData: {},
        elements: {
          reference: s,
          popper: l,
        },
        attributes: {},
        styles: {},
      },
      f = [],
      h = !1,
      g = {
        state: u,
        setOptions: function (v) {
          var m = typeof v == "function" ? v(u.options) : v;
          p(),
            (u.options = Object.assign({}, r, u.options, m)),
            (u.scrollParents = {
              reference: Al(s)
                ? Br(s)
                : s.contextElement
                ? Br(s.contextElement)
                : [],
              popper: Br(l),
            });
          var b = iC(cC([].concat(o, u.options.modifiers)));
          u.orderedModifiers = b.filter(function (x) {
            return x.enabled;
          });
          {
            var w = lC([].concat(b, u.options.modifiers), function (x) {
              var P = x.name;
              return P;
            });
            if ((sC(w), pa(u.options.placement) === Th)) {
              var C = u.orderedModifiers.find(function (x) {
                var P = x.name;
                return P === "flip";
              });
              C ||
                console.error(
                  [
                    'Popper: "auto" placements require the "flip" modifier be',
                    "present and enabled to work.",
                  ].join(" ")
                );
            }
            var k = Rn(l),
              I = k.marginTop,
              _ = k.marginRight,
              R = k.marginBottom,
              O = k.marginLeft;
            [I, _, R, O].some(function (x) {
              return parseFloat(x);
            }) &&
              console.warn(
                [
                  'Popper: CSS "margin" styles cannot be used to apply padding',
                  "between the popper and its reference element or boundary.",
                  "To replicate margin, use the `offset` modifier, as well as",
                  "the `padding` option in the `preventOverflow` and `flip`",
                  "modifiers.",
                ].join(" ")
              );
          }
          return S(), g.update();
        },
        forceUpdate: function () {
          if (!h) {
            var v = u.elements,
              m = v.reference,
              b = v.popper;
            if (!pu(m, b)) {
              console.error(yu);
              return;
            }
            (u.rects = {
              reference: zS(m, xh(b), u.options.strategy === "fixed"),
              popper: jS(b),
            }),
              (u.reset = !1),
              (u.placement = u.options.placement),
              u.orderedModifiers.forEach(function (x) {
                return (u.modifiersData[x.name] = Object.assign({}, x.data));
              });
            for (var w = 0, C = 0; C < u.orderedModifiers.length; C++) {
              if (((w += 1), w > 100)) {
                console.error(fC);
                break;
              }
              if (u.reset === !0) {
                (u.reset = !1), (C = -1);
                continue;
              }
              var k = u.orderedModifiers[C],
                I = k.fn,
                _ = k.options,
                R = _ === void 0 ? {} : _,
                O = k.name;
              typeof I == "function" &&
                (u =
                  I({
                    state: u,
                    options: R,
                    name: O,
                    instance: g,
                  }) || u);
            }
          }
        },
        update: rC(function () {
          return new Promise(function (y) {
            g.forceUpdate(), y(u);
          });
        }),
        destroy: function () {
          p(), (h = !0);
        },
      };
    if (!pu(s, l)) return console.error(yu), g;
    g.setOptions(c).then(function (y) {
      !h && c.onFirstUpdate && c.onFirstUpdate(y);
    });
    function S() {
      u.orderedModifiers.forEach(function (y) {
        var v = y.name,
          m = y.options,
          b = m === void 0 ? {} : m,
          w = y.effect;
        if (typeof w == "function") {
          var C = w({
              state: u,
              name: v,
              instance: g,
              options: b,
            }),
            k = function () {};
          f.push(C || k);
        }
      });
    }
    function p() {
      f.forEach(function (y) {
        return y();
      }),
        (f = []);
    }
    return g;
  };
}
var kr = {
  passive: !0,
};
function gC(e) {
  var t = e.state,
    n = e.instance,
    o = e.options,
    i = o.scroll,
    r = i === void 0 ? !0 : i,
    a = o.resize,
    s = a === void 0 ? !0 : a,
    l = rn(t.elements.popper),
    c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    r &&
      c.forEach(function (u) {
        u.addEventListener("scroll", n.update, kr);
      }),
    s && l.addEventListener("resize", n.update, kr),
    function () {
      r &&
        c.forEach(function (u) {
          u.removeEventListener("scroll", n.update, kr);
        }),
        s && l.removeEventListener("resize", n.update, kr);
    }
  );
}
var mC = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: gC,
  data: {},
};
function vC(e) {
  var t = e.state,
    n = e.name;
  t.modifiersData[n] = dC({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement,
  });
}
var yC = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: vC,
    data: {},
  },
  bC = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto",
  };
function pC(e) {
  var t = e.x,
    n = e.y,
    o = window,
    i = o.devicePixelRatio || 1;
  return {
    x: ni(t * i) / i || 0,
    y: ni(n * i) / i || 0,
  };
}
function wu(e) {
  var t,
    n = e.popper,
    o = e.popperRect,
    i = e.placement,
    r = e.variation,
    a = e.offsets,
    s = e.position,
    l = e.gpuAcceleration,
    c = e.adaptive,
    u = e.roundOffsets,
    f = e.isFixed,
    h = a.x,
    g = h === void 0 ? 0 : h,
    S = a.y,
    p = S === void 0 ? 0 : S,
    y =
      typeof u == "function"
        ? u({
            x: g,
            y: p,
          })
        : {
            x: g,
            y: p,
          };
  (g = y.x), (p = y.y);
  var v = a.hasOwnProperty("x"),
    m = a.hasOwnProperty("y"),
    b = ko,
    w = Jo,
    C = window;
  if (c) {
    var k = xh(n),
      I = "clientHeight",
      _ = "clientWidth";
    if (
      (k === rn(n) &&
        ((k = ba(n)),
        Rn(k).position !== "static" &&
          s === "absolute" &&
          ((I = "scrollHeight"), (_ = "scrollWidth"))),
      (k = k),
      i === Jo || ((i === ko || i === Ki) && r === qr))
    ) {
      w = Wr;
      var R = f && k === C && C.visualViewport ? C.visualViewport.height : k[I];
      (p -= R - o.height), (p *= l ? 1 : -1);
    }
    if (i === ko || ((i === Jo || i === Wr) && r === qr)) {
      b = Ki;
      var O = f && k === C && C.visualViewport ? C.visualViewport.width : k[_];
      (g -= O - o.width), (g *= l ? 1 : -1);
    }
  }
  var x = Object.assign(
      {
        position: s,
      },
      c && bC
    ),
    P =
      u === !0
        ? pC({
            x: g,
            y: p,
          })
        : {
            x: g,
            y: p,
          };
  if (((g = P.x), (p = P.y), l)) {
    var D;
    return Object.assign(
      {},
      x,
      ((D = {}),
      (D[w] = m ? "0" : ""),
      (D[b] = v ? "0" : ""),
      (D.transform =
        (C.devicePixelRatio || 1) <= 1
          ? "translate(" + g + "px, " + p + "px)"
          : "translate3d(" + g + "px, " + p + "px, 0)"),
      D)
    );
  }
  return Object.assign(
    {},
    x,
    ((t = {}),
    (t[w] = m ? p + "px" : ""),
    (t[b] = v ? g + "px" : ""),
    (t.transform = ""),
    t)
  );
}
function wC(e) {
  var t = e.state,
    n = e.options,
    o = n.gpuAcceleration,
    i = o === void 0 ? !0 : o,
    r = n.adaptive,
    a = r === void 0 ? !0 : r,
    s = n.roundOffsets,
    l = s === void 0 ? !0 : s;
  {
    var c = Rn(t.elements.popper).transitionProperty || "";
    a &&
      ["transform", "top", "right", "bottom", "left"].some(function (f) {
        return c.indexOf(f) >= 0;
      }) &&
      console.warn(
        [
          "Popper: Detected CSS transitions on at least one of the following",
          'CSS properties: "transform", "top", "right", "bottom", "left".',
          `

`,
          'Disable the "computeStyles" modifier\'s `adaptive` option to allow',
          "for smooth transitions, or remove these properties from the CSS",
          "transition declaration on the popper element if only transitioning",
          "opacity or background-color for example.",
          `

`,
          "We recommend using the popper element as a wrapper around an inner",
          "element that can have any CSS property transitioned for animations.",
        ].join(" ")
      );
  }
  var u = {
    placement: pa(t.placement),
    variation: Ph(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed",
  };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      wu(
        Object.assign({}, u, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: a,
          roundOffsets: l,
        })
      )
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        wu(
          Object.assign({}, u, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: l,
          })
        )
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement,
    }));
}
var SC = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: wC,
  data: {},
};
function CC(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (n) {
    var o = t.styles[n] || {},
      i = t.attributes[n] || {},
      r = t.elements[n];
    !Jt(r) ||
      !In(r) ||
      (Object.assign(r.style, o),
      Object.keys(i).forEach(function (a) {
        var s = i[a];
        s === !1 ? r.removeAttribute(a) : r.setAttribute(a, s === !0 ? "" : s);
      }));
  });
}
function _C(e) {
  var t = e.state,
    n = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0",
      },
      arrow: {
        position: "absolute",
      },
      reference: {},
    };
  return (
    Object.assign(t.elements.popper.style, n.popper),
    (t.styles = n),
    t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
    function () {
      Object.keys(t.elements).forEach(function (o) {
        var i = t.elements[o],
          r = t.attributes[o] || {},
          a = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]),
          s = a.reduce(function (l, c) {
            return (l[c] = ""), l;
          }, {});
        !Jt(i) ||
          !In(i) ||
          (Object.assign(i.style, s),
          Object.keys(r).forEach(function (l) {
            i.removeAttribute(l);
          }));
      });
    }
  );
}
var kC = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: CC,
    effect: _C,
    requires: ["computeStyles"],
  },
  xC = [mC, yC, SC, kC],
  TC = hC({
    defaultModifiers: xC,
  });
function EC(e, t, n) {
  var o = pa(e),
    i = [ko, Jo].indexOf(o) >= 0 ? -1 : 1,
    r =
      typeof n == "function"
        ? n(
            Object.assign({}, t, {
              placement: e,
            })
          )
        : n,
    a = r[0],
    s = r[1];
  return (
    (a = a || 0),
    (s = (s || 0) * i),
    [ko, Ki].indexOf(o) >= 0
      ? {
          x: s,
          y: a,
        }
      : {
          x: a,
          y: s,
        }
  );
}
function PC(e) {
  var t = e.state,
    n = e.options,
    o = e.name,
    i = n.offset,
    r = i === void 0 ? [0, 0] : i,
    a = YS.reduce(function (u, f) {
      return (u[f] = EC(f, t.rects, r)), u;
    }, {}),
    s = a[t.placement],
    l = s.x,
    c = s.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += l),
    (t.modifiersData.popperOffsets.y += c)),
    (t.modifiersData[o] = a);
}
var AC = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: PC,
};
const [IC, vo] = W("popover"),
  RC = [
    "overlay",
    "duration",
    "teleport",
    "overlayStyle",
    "overlayClass",
    "closeOnClickOverlay",
  ],
  OC = {
    show: Boolean,
    theme: G("light"),
    overlay: Boolean,
    actions: Ye(),
    actionsDirection: G("vertical"),
    trigger: G("click"),
    duration: Y,
    showArrow: z,
    placement: G("bottom"),
    iconPrefix: String,
    overlayClass: Qe,
    overlayStyle: Object,
    closeOnClickAction: z,
    closeOnClickOverlay: z,
    closeOnClickOutside: z,
    offset: {
      type: Array,
      default: () => [0, 8],
    },
    teleport: {
      type: [String, Object],
      default: "body",
    },
  };
var BC = j({
  name: IC,
  props: OC,
  emits: ["select", "touchstart", "update:show"],
  setup(e, { emit: t, slots: n, attrs: o }) {
    let i;
    const r = $(),
      a = $(),
      s = $(),
      l = ml(
        () => e.show,
        (m) => t("update:show", m)
      ),
      c = () => ({
        placement: e.placement,
        modifiers: [
          {
            name: "computeStyles",
            options: {
              adaptive: !1,
              gpuAcceleration: !1,
            },
          },
          be({}, AC, {
            options: {
              offset: e.offset,
            },
          }),
        ],
      }),
      u = () =>
        a.value && s.value ? TC(a.value, s.value.popupRef.value, c()) : null,
      f = () => {
        Ae(() => {
          l.value &&
            (i
              ? i.setOptions(c())
              : ((i = u()),
                Dt &&
                  (window.addEventListener("animationend", f),
                  window.addEventListener("transitionend", f))));
        });
      },
      h = (m) => {
        l.value = m;
      },
      g = () => {
        e.trigger === "click" && (l.value = !l.value);
      },
      S = (m, b) => {
        m.disabled ||
          (t("select", m, b), e.closeOnClickAction && (l.value = !1));
      },
      p = () => {
        l.value &&
          e.closeOnClickOutside &&
          (!e.overlay || e.closeOnClickOverlay) &&
          (l.value = !1);
      },
      y = (m, b) =>
        n.action
          ? n.action({
              action: m,
              index: b,
            })
          : [
              m.icon &&
                d(
                  Te,
                  {
                    name: m.icon,
                    classPrefix: e.iconPrefix,
                    class: vo("action-icon"),
                  },
                  null
                ),
              d(
                "div",
                {
                  class: [
                    vo("action-text"),
                    {
                      [dl]: e.actionsDirection === "vertical",
                    },
                  ],
                },
                [m.text]
              ),
            ],
      v = (m, b) => {
        const { icon: w, color: C, disabled: k, className: I } = m;
        return d(
          "div",
          {
            role: "menuitem",
            class: [
              vo("action", {
                disabled: k,
                "with-icon": w,
              }),
              {
                [gv]: e.actionsDirection === "horizontal",
              },
              I,
            ],
            style: {
              color: C,
            },
            tabindex: k ? void 0 : 0,
            "aria-disabled": k || void 0,
            onClick: () => S(m, b),
          },
          [y(m, b)]
        );
      };
    return (
      tt(() => {
        f(),
          ri(() => {
            var m;
            r.value = (m = s.value) == null ? void 0 : m.popupRef.value;
          });
      }),
      yn(() => {
        i &&
          (Dt &&
            (window.removeEventListener("animationend", f),
            window.removeEventListener("transitionend", f)),
          i.destroy(),
          (i = null));
      }),
      ie(() => [l.value, e.offset, e.placement], f),
      sa([a, r], p, {
        eventName: "touchstart",
      }),
      () => {
        var m;
        return d(Ve, null, [
          d(
            "span",
            {
              ref: a,
              class: vo("wrapper"),
              onClick: g,
            },
            [(m = n.reference) == null ? void 0 : m.call(n)]
          ),
          d(
            $t,
            Re(
              {
                ref: s,
                show: l.value,
                class: vo([e.theme]),
                position: "",
                transition: "van-popover-zoom",
                lockScroll: !1,
                "onUpdate:show": h,
              },
              o,
              jr(),
              Me(e, RC)
            ),
            {
              default: () => [
                e.showArrow &&
                  d(
                    "div",
                    {
                      class: vo("arrow"),
                    },
                    null
                  ),
                d(
                  "div",
                  {
                    role: "menu",
                    class: vo("content", e.actionsDirection),
                  },
                  [n.default ? n.default() : e.actions.map(v)]
                ),
              ],
            }
          ),
        ]);
      }
    );
  },
});
const DC = Z(BC),
  [$C, Za] = W("progress"),
  LC = {
    color: String,
    inactive: Boolean,
    pivotText: String,
    textColor: String,
    showPivot: z,
    pivotColor: String,
    trackColor: String,
    strokeWidth: Y,
    percentage: {
      type: Y,
      default: 0,
      validator: (e) => +e >= 0 && +e <= 100,
    },
  };
var MC = j({
  name: $C,
  props: LC,
  setup(e) {
    const t = B(() => (e.inactive ? void 0 : e.color)),
      n = () => {
        const { textColor: o, pivotText: i, pivotColor: r, percentage: a } = e,
          s = i ?? `${a}%`;
        if (e.showPivot && s) {
          const l = {
            color: o,
            left: `${+a}%`,
            transform: `translate(-${+a}%,-50%)`,
            background: r || t.value,
          };
          return d(
            "span",
            {
              style: l,
              class: Za("pivot", {
                inactive: e.inactive,
              }),
            },
            [s]
          );
        }
      };
    return () => {
      const { trackColor: o, percentage: i, strokeWidth: r } = e,
        a = {
          background: o,
          height: xe(r),
        },
        s = {
          width: `${i}%`,
          background: t.value,
        };
      return d(
        "div",
        {
          class: Za(),
          style: a,
        },
        [
          d(
            "span",
            {
              class: Za("portion", {
                inactive: e.inactive,
              }),
              style: s,
            },
            null
          ),
          n(),
        ]
      );
    };
  },
});
const FC = Z(MC),
  [VC, wi, NC] = W("pull-refresh"),
  Ah = 50,
  HC = ["pulling", "loosing", "success"],
  zC = {
    disabled: Boolean,
    modelValue: Boolean,
    headHeight: ce(Ah),
    successText: String,
    pullingText: String,
    loosingText: String,
    loadingText: String,
    pullDistance: Y,
    successDuration: ce(500),
    animationDuration: ce(300),
  };
var jC = j({
  name: VC,
  props: zC,
  emits: ["change", "refresh", "update:modelValue"],
  setup(e, { emit: t, slots: n }) {
    let o;
    const i = $(),
      r = $(),
      a = ui(i),
      s = Ze({
        status: "normal",
        distance: 0,
        duration: 0,
      }),
      l = jt(),
      c = () => {
        if (e.headHeight !== Ah)
          return {
            height: `${e.headHeight}px`,
          };
      },
      u = () => s.status !== "loading" && s.status !== "success" && !e.disabled,
      f = (w) => {
        const C = +(e.pullDistance || e.headHeight);
        return (
          w > C &&
            (w < C * 2
              ? (w = C + (w - C) / 2)
              : (w = C * 1.5 + (w - C * 2) / 4)),
          Math.round(w)
        );
      },
      h = (w, C) => {
        const k = +(e.pullDistance || e.headHeight);
        (s.distance = w),
          C
            ? (s.status = "loading")
            : w === 0
            ? (s.status = "normal")
            : w < k
            ? (s.status = "pulling")
            : (s.status = "loosing"),
          t("change", {
            status: s.status,
            distance: w,
          });
      },
      g = () => {
        const { status: w } = s;
        return w === "normal" ? "" : e[`${w}Text`] || NC(w);
      },
      S = () => {
        const { status: w, distance: C } = s;
        if (n[w])
          return n[w]({
            distance: C,
          });
        const k = [];
        return (
          HC.includes(w) &&
            k.push(
              d(
                "div",
                {
                  class: wi("text"),
                },
                [g()]
              )
            ),
          w === "loading" &&
            k.push(
              d(
                nn,
                {
                  class: wi("loading"),
                },
                {
                  default: g,
                }
              )
            ),
          k
        );
      },
      p = () => {
        (s.status = "success"),
          setTimeout(() => {
            h(0);
          }, +e.successDuration);
      },
      y = (w) => {
        (o = An(a.value) === 0), o && ((s.duration = 0), l.start(w));
      },
      v = (w) => {
        u() && y(w);
      },
      m = (w) => {
        if (u()) {
          o || y(w);
          const { deltaY: C } = l;
          l.move(w),
            o && C.value >= 0 && l.isVertical() && (We(w), h(f(C.value)));
        }
      },
      b = () => {
        o &&
          l.deltaY.value &&
          u() &&
          ((s.duration = +e.animationDuration),
          s.status === "loosing"
            ? (h(+e.headHeight, !0),
              t("update:modelValue", !0),
              Ae(() => t("refresh")))
            : h(0));
      };
    return (
      ie(
        () => e.modelValue,
        (w) => {
          (s.duration = +e.animationDuration),
            w
              ? h(+e.headHeight, !0)
              : n.success || e.successText
              ? p()
              : h(0, !1);
        }
      ),
      et("touchmove", m, {
        target: r,
      }),
      () => {
        var w;
        const C = {
          transitionDuration: `${s.duration}ms`,
          transform: s.distance ? `translate3d(0,${s.distance}px, 0)` : "",
        };
        return d(
          "div",
          {
            ref: i,
            class: wi(),
          },
          [
            d(
              "div",
              {
                ref: r,
                class: wi("track"),
                style: C,
                onTouchstartPassive: v,
                onTouchend: b,
                onTouchcancel: b,
              },
              [
                d(
                  "div",
                  {
                    class: wi("head"),
                    style: c(),
                  },
                  [S()]
                ),
                (w = n.default) == null ? void 0 : w.call(n),
              ]
            ),
          ]
        );
      }
    );
  },
});
const UC = Z(jC),
  [WC, xr] = W("rate");
function qC(e, t, n, o) {
  return e >= t
    ? {
        status: "full",
        value: 1,
      }
    : e + 0.5 >= t && n && !o
    ? {
        status: "half",
        value: 0.5,
      }
    : e + 1 >= t && n && o
    ? {
        status: "half",
        value: Math.round((e - t + 1) * 1e10) / 1e10,
      }
    : {
        status: "void",
        value: 0,
      };
}
const YC = {
  size: Y,
  icon: G("star"),
  color: String,
  count: ce(5),
  gutter: Y,
  clearable: Boolean,
  readonly: Boolean,
  disabled: Boolean,
  voidIcon: G("star-o"),
  allowHalf: Boolean,
  voidColor: String,
  touchable: z,
  iconPrefix: String,
  modelValue: nt(0),
  disabledColor: String,
};
var KC = j({
  name: WC,
  props: YC,
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = jt(),
      [o, i] = Ji(),
      r = $(),
      a = B(() => e.readonly || e.disabled),
      s = B(() => a.value || !e.touchable),
      l = B(() =>
        Array(+e.count)
          .fill("")
          .map((b, w) => qC(e.modelValue, w + 1, e.allowHalf, e.readonly))
      );
    let c,
      u,
      f = Number.MAX_SAFE_INTEGER,
      h = Number.MIN_SAFE_INTEGER;
    const g = () => {
        u = Ne(r);
        const b = o.value.map(Ne);
        (c = []),
          b.forEach((w, C) => {
            (f = Math.min(w.top, f)),
              (h = Math.max(w.top, h)),
              e.allowHalf
                ? c.push(
                    {
                      score: C + 0.5,
                      left: w.left,
                      top: w.top,
                      height: w.height,
                    },
                    {
                      score: C + 1,
                      left: w.left + w.width / 2,
                      top: w.top,
                      height: w.height,
                    }
                  )
                : c.push({
                    score: C + 1,
                    left: w.left,
                    top: w.top,
                    height: w.height,
                  });
          });
      },
      S = (b, w) => {
        for (let C = c.length - 1; C > 0; C--)
          if (w >= u.top && w <= u.bottom) {
            if (b > c[C].left && w >= c[C].top && w <= c[C].top + c[C].height)
              return c[C].score;
          } else {
            const k = w < u.top ? f : h;
            if (b > c[C].left && c[C].top === k) return c[C].score;
          }
        return e.allowHalf ? 0.5 : 1;
      },
      p = (b) => {
        a.value ||
          b === e.modelValue ||
          (t("update:modelValue", b), t("change", b));
      },
      y = (b) => {
        s.value || (n.start(b), g());
      },
      v = (b) => {
        if (!s.value && (n.move(b), n.isHorizontal() && !n.isTap.value)) {
          const { clientX: w, clientY: C } = b.touches[0];
          We(b), p(S(w, C));
        }
      },
      m = (b, w) => {
        const {
            icon: C,
            size: k,
            color: I,
            count: _,
            gutter: R,
            voidIcon: O,
            disabled: x,
            voidColor: P,
            allowHalf: D,
            iconPrefix: Q,
            disabledColor: oe,
          } = e,
          H = w + 1,
          J = b.status === "full",
          se = b.status === "void",
          Ie = D && b.value > 0 && b.value < 1;
        let De;
        R &&
          H !== +_ &&
          (De = {
            paddingRight: xe(R),
          });
        const M = (K) => {
          g();
          let fe = D ? S(K.clientX, K.clientY) : H;
          e.clearable && n.isTap.value && fe === e.modelValue && (fe = 0),
            p(fe);
        };
        return d(
          "div",
          {
            key: w,
            ref: i(w),
            role: "radio",
            style: De,
            class: xr("item"),
            tabindex: x ? void 0 : 0,
            "aria-setsize": _,
            "aria-posinset": H,
            "aria-checked": !se,
            onClick: M,
          },
          [
            d(
              Te,
              {
                size: k,
                name: J ? C : O,
                class: xr("icon", {
                  disabled: x,
                  full: J,
                }),
                color: x ? oe : J ? I : P,
                classPrefix: Q,
              },
              null
            ),
            Ie &&
              d(
                Te,
                {
                  size: k,
                  style: {
                    width: b.value + "em",
                  },
                  name: se ? O : C,
                  class: xr("icon", [
                    "half",
                    {
                      disabled: x,
                      full: !se,
                    },
                  ]),
                  color: x ? oe : se ? P : I,
                  classPrefix: Q,
                },
                null
              ),
          ]
        );
      };
    return (
      so(() => e.modelValue),
      et("touchmove", v, {
        target: r,
      }),
      () =>
        d(
          "div",
          {
            ref: r,
            role: "radiogroup",
            class: xr({
              readonly: e.readonly,
              disabled: e.disabled,
            }),
            tabindex: e.disabled ? void 0 : 0,
            "aria-disabled": e.disabled,
            "aria-readonly": e.readonly,
            onTouchstartPassive: y,
          },
          [l.value.map(m)]
        )
    );
  },
});
const ZC = Z(KC),
  GC = {
    figureArr: Ye(),
    delay: Number,
    duration: nt(2),
    isStart: Boolean,
    direction: G("down"),
    height: nt(40),
  },
  [QC, Ga] = W("rolling-text-item");
var XC = j({
  name: QC,
  props: GC,
  setup(e) {
    const t = B(() =>
        e.direction === "down" ? e.figureArr.slice().reverse() : e.figureArr
      ),
      n = B(() => `-${e.height * (e.figureArr.length - 1)}px`),
      o = B(() => ({
        lineHeight: xe(e.height),
      })),
      i = B(() => ({
        height: xe(e.height),
        "--van-translate": n.value,
        "--van-duration": e.duration + "s",
        "--van-delay": e.delay + "s",
      }));
    return () =>
      d(
        "div",
        {
          class: Ga([e.direction]),
          style: i.value,
        },
        [
          d(
            "div",
            {
              class: Ga("box", {
                animate: e.isStart,
              }),
            },
            [
              Array.isArray(t.value) &&
                t.value.map((r) =>
                  d(
                    "div",
                    {
                      class: Ga("item"),
                      style: o.value,
                    },
                    [r]
                  )
                ),
            ]
          ),
        ]
      );
  },
});
const [JC, e_] = W("rolling-text"),
  t_ = {
    startNum: nt(0),
    targetNum: Number,
    textList: Ye(),
    duration: nt(2),
    autoStart: z,
    direction: G("down"),
    stopOrder: G("ltr"),
    height: nt(40),
  },
  n_ = 2;
var o_ = j({
  name: JC,
  props: t_,
  setup(e) {
    const t = B(() => Array.isArray(e.textList) && e.textList.length),
      n = B(() =>
        t.value
          ? e.textList[0].length
          : `${Math.max(e.startNum, e.targetNum)}`.length
      ),
      o = (f) => {
        const h = [];
        for (let g = 0; g < e.textList.length; g++) h.push(e.textList[g][f]);
        return h;
      },
      i = B(() =>
        t.value
          ? new Array(n.value).fill("")
          : Zt(e.targetNum, n.value).split("")
      ),
      r = B(() => Zt(e.startNum, n.value).split("")),
      a = (f) => {
        const h = +r.value[f],
          g = +i.value[f],
          S = [];
        for (let p = h; p <= 9; p++) S.push(p);
        for (let p = 0; p <= n_; p++) for (let y = 0; y <= 9; y++) S.push(y);
        for (let p = 0; p <= g; p++) S.push(p);
        return S;
      },
      s = (f, h) => (e.stopOrder === "ltr" ? 0.2 * f : 0.2 * (h - 1 - f)),
      l = $(e.autoStart),
      c = () => {
        l.value = !0;
      },
      u = () => {
        (l.value = !1), e.autoStart && yt(() => c());
      };
    return (
      ie(
        () => e.autoStart,
        (f) => {
          f && c();
        }
      ),
      Oe({
        start: c,
        reset: u,
      }),
      () =>
        d(
          "div",
          {
            class: e_(),
          },
          [
            i.value.map((f, h) =>
              d(
                XC,
                {
                  figureArr: t.value ? o(h) : a(h),
                  duration: e.duration,
                  direction: e.direction,
                  isStart: l.value,
                  height: e.height,
                  delay: s(h, n.value),
                },
                null
              )
            ),
          ]
        )
    );
  },
});
const i_ = Z(o_),
  r_ = Z(Kp),
  [a_, Si, s_] = W("search"),
  l_ = be({}, pl, {
    label: String,
    shape: G("square"),
    leftIcon: G("search"),
    clearable: z,
    actionText: String,
    background: String,
    showAction: Boolean,
  });
var c_ = j({
  name: a_,
  props: l_,
  emits: [
    "blur",
    "focus",
    "clear",
    "search",
    "cancel",
    "clickInput",
    "clickLeftIcon",
    "clickRightIcon",
    "update:modelValue",
  ],
  setup(e, { emit: t, slots: n, attrs: o }) {
    const i = fi(),
      r = $(),
      a = () => {
        n.action || (t("update:modelValue", ""), t("cancel"));
      },
      s = (C) => {
        C.keyCode === 13 && (We(C), t("search", e.modelValue));
      },
      l = () => e.id || `${i}-input`,
      c = () => {
        if (n.label || e.label)
          return d(
            "label",
            {
              class: Si("label"),
              for: l(),
            },
            [n.label ? n.label() : e.label]
          );
      },
      u = () => {
        if (e.showAction) {
          const C = e.actionText || s_("cancel");
          return d(
            "div",
            {
              class: Si("action"),
              role: "button",
              tabindex: 0,
              onClick: a,
            },
            [n.action ? n.action() : C]
          );
        }
      },
      f = () => {
        var C;
        return (C = r.value) == null ? void 0 : C.blur();
      },
      h = () => {
        var C;
        return (C = r.value) == null ? void 0 : C.focus();
      },
      g = (C) => t("blur", C),
      S = (C) => t("focus", C),
      p = (C) => t("clear", C),
      y = (C) => t("clickInput", C),
      v = (C) => t("clickLeftIcon", C),
      m = (C) => t("clickRightIcon", C),
      b = Object.keys(pl),
      w = () => {
        const C = be({}, o, Me(e, b), {
            id: l(),
          }),
          k = (I) => t("update:modelValue", I);
        return d(
          En,
          Re(
            {
              ref: r,
              type: "search",
              class: Si("field", {
                "with-message": C.errorMessage,
              }),
              border: !1,
              onBlur: g,
              onFocus: S,
              onClear: p,
              onKeypress: s,
              onClickInput: y,
              onClickLeftIcon: v,
              onClickRightIcon: m,
              "onUpdate:modelValue": k,
            },
            C
          ),
          Me(n, ["left-icon", "right-icon"])
        );
      };
    return (
      Oe({
        focus: h,
        blur: f,
      }),
      () => {
        var C;
        return d(
          "div",
          {
            class: Si({
              "show-action": e.showAction,
            }),
            style: {
              background: e.background,
            },
          },
          [
            (C = n.left) == null ? void 0 : C.call(n),
            d(
              "div",
              {
                class: Si("content", e.shape),
              },
              [c(), w()]
            ),
            u(),
          ]
        );
      }
    );
  },
});
const u_ = Z(c_),
  d_ = (e) => (e == null ? void 0 : e.includes("/")),
  f_ = [...hl, "round", "closeOnPopstate", "safeAreaInsetBottom"],
  h_ = {
    qq: "qq",
    link: "link-o",
    weibo: "weibo",
    qrcode: "qr",
    poster: "photo-o",
    wechat: "wechat",
    "weapp-qrcode": "miniprogram-o",
    "wechat-moments": "wechat-moments",
  },
  [g_, Yt, m_] = W("share-sheet"),
  v_ = be({}, di, {
    title: String,
    round: z,
    options: Ye(),
    cancelText: String,
    description: String,
    closeOnPopstate: z,
    safeAreaInsetBottom: z,
  });
var y_ = j({
  name: g_,
  props: v_,
  emits: ["cancel", "select", "update:show"],
  setup(e, { emit: t, slots: n }) {
    const o = (h) => t("update:show", h),
      i = () => {
        o(!1), t("cancel");
      },
      r = (h, g) => t("select", h, g),
      a = () => {
        const h = n.title ? n.title() : e.title,
          g = n.description ? n.description() : e.description;
        if (h || g)
          return d(
            "div",
            {
              class: Yt("header"),
            },
            [
              h &&
                d(
                  "h2",
                  {
                    class: Yt("title"),
                  },
                  [h]
                ),
              g &&
                d(
                  "span",
                  {
                    class: Yt("description"),
                  },
                  [g]
                ),
            ]
          );
      },
      s = (h) =>
        d_(h)
          ? d(
              "img",
              {
                src: h,
                class: Yt("image-icon"),
              },
              null
            )
          : d(
              "div",
              {
                class: Yt("icon", [h]),
              },
              [
                d(
                  Te,
                  {
                    name: h_[h] || h,
                  },
                  null
                ),
              ]
            ),
      l = (h, g) => {
        const { name: S, icon: p, className: y, description: v } = h;
        return d(
          "div",
          {
            role: "button",
            tabindex: 0,
            class: [Yt("option"), y, bt],
            onClick: () => r(h, g),
          },
          [
            s(p),
            S &&
              d(
                "span",
                {
                  class: Yt("name"),
                },
                [S]
              ),
            v &&
              d(
                "span",
                {
                  class: Yt("option-description"),
                },
                [v]
              ),
          ]
        );
      },
      c = (h, g) =>
        d(
          "div",
          {
            class: Yt("options", {
              border: g,
            }),
          },
          [h.map(l)]
        ),
      u = () => {
        const { options: h } = e;
        return Array.isArray(h[0]) ? h.map((g, S) => c(g, S !== 0)) : c(h);
      },
      f = () => {
        var h;
        const g = (h = e.cancelText) != null ? h : m_("cancel");
        if (n.cancel || g)
          return d(
            "button",
            {
              type: "button",
              class: Yt("cancel"),
              onClick: i,
            },
            [n.cancel ? n.cancel() : g]
          );
      };
    return () =>
      d(
        $t,
        Re(
          {
            class: Yt(),
            position: "bottom",
            "onUpdate:show": o,
          },
          Me(e, f_)
        ),
        {
          default: () => [a(), u(), f()],
        }
      );
  },
});
const b_ = Z(y_),
  [Ih, p_] = W("sidebar"),
  Rh = Symbol(Ih),
  w_ = {
    modelValue: ce(0),
  };
var S_ = j({
  name: Ih,
  props: w_,
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t, slots: n }) {
    const { linkChildren: o } = wt(Rh),
      i = () => +e.modelValue;
    return (
      o({
        getActive: i,
        setActive: (a) => {
          a !== i() && (t("update:modelValue", a), t("change", a));
        },
      }),
      () => {
        var a;
        return d(
          "div",
          {
            role: "tablist",
            class: p_(),
          },
          [(a = n.default) == null ? void 0 : a.call(n)]
        );
      }
    );
  },
});
const Oh = Z(S_),
  [C_, Su] = W("sidebar-item"),
  __ = be({}, co, {
    dot: Boolean,
    title: String,
    badge: Y,
    disabled: Boolean,
    badgeProps: Object,
  });
var k_ = j({
  name: C_,
  props: __,
  emits: ["click"],
  setup(e, { emit: t, slots: n }) {
    const o = Eo(),
      { parent: i, index: r } = gt(Rh);
    if (!i) return;
    const a = () => {
      e.disabled || (t("click", r.value), i.setActive(r.value), o());
    };
    return () => {
      const { dot: s, badge: l, title: c, disabled: u } = e,
        f = r.value === i.getActive();
      return d(
        "div",
        {
          role: "tab",
          class: Su({
            select: f,
            disabled: u,
          }),
          tabindex: u ? void 0 : 0,
          "aria-selected": f,
          onClick: a,
        },
        [
          d(
            Po,
            Re(
              {
                dot: s,
                class: Su("text"),
                content: l,
              },
              e.badgeProps
            ),
            {
              default: () => [n.title ? n.title() : c],
            }
          ),
        ]
      );
    };
  },
});
const Bh = Z(k_),
  [x_, Qa, Cu] = W("signature"),
  T_ = {
    tips: String,
    type: G("png"),
    penColor: G("#000"),
    lineWidth: nt(3),
    clearButtonText: String,
    backgroundColor: G(""),
    confirmButtonText: String,
  },
  E_ = () => {
    var e;
    const t = document.createElement("canvas");
    return !!((e = t.getContext) != null && e.call(t, "2d"));
  };
var P_ = j({
  name: x_,
  props: T_,
  emits: ["submit", "clear", "start", "end", "signing"],
  setup(e, { emit: t }) {
    const n = $(),
      o = $(),
      i = B(() => (n.value ? n.value.getContext("2d") : null)),
      r = Dt ? E_() : !0;
    let a = 0,
      s = 0,
      l;
    const c = () => {
        if (!i.value) return !1;
        i.value.beginPath(),
          (i.value.lineWidth = e.lineWidth),
          (i.value.strokeStyle = e.penColor),
          (l = Ne(n)),
          t("start");
      },
      u = (m) => {
        if (!i.value) return !1;
        We(m);
        const b = m.touches[0],
          w = b.clientX - ((l == null ? void 0 : l.left) || 0),
          C = b.clientY - ((l == null ? void 0 : l.top) || 0);
        (i.value.lineCap = "round"),
          (i.value.lineJoin = "round"),
          i.value.lineTo(w, C),
          i.value.stroke(),
          t("signing", m);
      },
      f = (m) => {
        We(m), t("end");
      },
      h = (m) => {
        const b = document.createElement("canvas");
        if (((b.width = m.width), (b.height = m.height), e.backgroundColor)) {
          const w = b.getContext("2d");
          g(w);
        }
        return m.toDataURL() === b.toDataURL();
      },
      g = (m) => {
        m &&
          e.backgroundColor &&
          ((m.fillStyle = e.backgroundColor), m.fillRect(0, 0, a, s));
      },
      S = () => {
        var m, b;
        const w = n.value;
        if (!w) return;
        const k = h(w)
          ? ""
          : ((b = (m = {
              jpg: () => w.toDataURL("image/jpeg", 0.8),
              jpeg: () => w.toDataURL("image/jpeg", 0.8),
            })[e.type]) == null
              ? void 0
              : b.call(m)) || w.toDataURL(`image/${e.type}`);
        t("submit", {
          image: k,
          canvas: w,
        });
      },
      p = () => {
        i.value &&
          (i.value.clearRect(0, 0, a, s), i.value.closePath(), g(i.value)),
          t("clear");
      },
      y = () => {
        var m, b, w;
        if (r && n.value) {
          const C = n.value,
            k = Dt ? window.devicePixelRatio : 1;
          (a = C.width =
            (((m = o.value) == null ? void 0 : m.offsetWidth) || 0) * k),
            (s = C.height =
              (((b = o.value) == null ? void 0 : b.offsetHeight) || 0) * k),
            (w = i.value) == null || w.scale(k, k),
            g(i.value);
        }
      },
      v = () => {
        if (i.value) {
          const m = i.value.getImageData(0, 0, a, s);
          y(), i.value.putImageData(m, 0, 0);
        }
      };
    return (
      ie(Xt, v),
      tt(y),
      Oe({
        resize: v,
        clear: p,
        submit: S,
      }),
      () =>
        d(
          "div",
          {
            class: Qa(),
          },
          [
            d(
              "div",
              {
                class: Qa("content"),
                ref: o,
              },
              [
                r
                  ? d(
                      "canvas",
                      {
                        ref: n,
                        onTouchstartPassive: c,
                        onTouchmove: u,
                        onTouchend: f,
                      },
                      null
                    )
                  : d("p", null, [e.tips]),
              ]
            ),
            d(
              "div",
              {
                class: Qa("footer"),
              },
              [
                d(
                  pt,
                  {
                    size: "small",
                    onClick: p,
                  },
                  {
                    default: () => [e.clearButtonText || Cu("clear")],
                  }
                ),
                d(
                  pt,
                  {
                    type: "primary",
                    size: "small",
                    onClick: S,
                  },
                  {
                    default: () => [e.confirmButtonText || Cu("confirm")],
                  }
                ),
              ]
            ),
          ]
        )
    );
  },
});
const A_ = Z(P_),
  [I_, R_] = W("skeleton-title"),
  O_ = {
    round: Boolean,
    titleWidth: Y,
  };
var B_ = j({
  name: I_,
  props: O_,
  setup(e) {
    return () =>
      d(
        "h3",
        {
          class: R_([
            {
              round: e.round,
            },
          ]),
          style: {
            width: xe(e.titleWidth),
          },
        },
        null
      );
  },
});
const Dh = Z(B_);
var D_ = Dh;
const [$_, L_] = W("skeleton-avatar"),
  M_ = {
    avatarSize: Y,
    avatarShape: G("round"),
  };
var F_ = j({
  name: $_,
  props: M_,
  setup(e) {
    return () =>
      d(
        "div",
        {
          class: L_([e.avatarShape]),
          style: Bn(e.avatarSize),
        },
        null
      );
  },
});
const $h = Z(F_);
var V_ = $h;
const Ol = "100%",
  N_ = {
    round: Boolean,
    rowWidth: {
      type: Y,
      default: Ol,
    },
  },
  [H_, z_] = W("skeleton-paragraph");
var j_ = j({
  name: H_,
  props: N_,
  setup(e) {
    return () =>
      d(
        "div",
        {
          class: z_([
            {
              round: e.round,
            },
          ]),
          style: {
            width: e.rowWidth,
          },
        },
        null
      );
  },
});
const Lh = Z(j_);
var U_ = Lh;
const [W_, _u] = W("skeleton"),
  q_ = "60%",
  Y_ = {
    row: ce(0),
    round: Boolean,
    title: Boolean,
    titleWidth: Y,
    avatar: Boolean,
    avatarSize: Y,
    avatarShape: G("round"),
    loading: z,
    animate: z,
    rowWidth: {
      type: [Number, String, Array],
      default: Ol,
    },
  };
var K_ = j({
  name: W_,
  inheritAttrs: !1,
  props: Y_,
  setup(e, { slots: t, attrs: n }) {
    const o = () => {
        if (e.avatar)
          return d(
            V_,
            {
              avatarShape: e.avatarShape,
              avatarSize: e.avatarSize,
            },
            null
          );
      },
      i = () => {
        if (e.title)
          return d(
            D_,
            {
              round: e.round,
              titleWidth: e.titleWidth,
            },
            null
          );
      },
      r = (l) => {
        const { rowWidth: c } = e;
        return c === Ol && l === +e.row - 1 ? q_ : Array.isArray(c) ? c[l] : c;
      },
      a = () =>
        Array(+e.row)
          .fill("")
          .map((l, c) =>
            d(
              U_,
              {
                key: c,
                round: e.round,
                rowWidth: xe(r(c)),
              },
              null
            )
          ),
      s = () =>
        t.template
          ? t.template()
          : d(Ve, null, [
              o(),
              d(
                "div",
                {
                  class: _u("content"),
                },
                [i(), a()]
              ),
            ]);
    return () => {
      var l;
      return e.loading
        ? d(
            "div",
            Re(
              {
                class: _u({
                  animate: e.animate,
                  round: e.round,
                }),
              },
              n
            ),
            [s()]
          )
        : (l = t.default) == null
        ? void 0
        : l.call(t);
    };
  },
});
const Z_ = Z(K_),
  [G_, ku] = W("skeleton-image"),
  Q_ = {
    imageSize: Y,
    imageShape: G("square"),
  };
var X_ = j({
  name: G_,
  props: Q_,
  setup(e) {
    return () =>
      d(
        "div",
        {
          class: ku([e.imageShape]),
          style: Bn(e.imageSize),
        },
        [
          d(
            Te,
            {
              name: "photo",
              class: ku("icon"),
            },
            null
          ),
        ]
      );
  },
});
const J_ = Z(X_),
  [ek, Ci] = W("slider"),
  tk = {
    min: ce(0),
    max: ce(100),
    step: ce(1),
    range: Boolean,
    reverse: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    vertical: Boolean,
    barHeight: Y,
    buttonSize: Y,
    activeColor: String,
    inactiveColor: String,
    modelValue: {
      type: [Number, Array],
      default: 0,
    },
  };
var nk = j({
  name: ek,
  props: tk,
  emits: ["change", "dragEnd", "dragStart", "update:modelValue"],
  setup(e, { emit: t, slots: n }) {
    let o, i, r;
    const a = $(),
      s = [$(), $()],
      l = $(),
      c = jt(),
      u = B(() => Number(e.max) - Number(e.min)),
      f = B(() => {
        const x = e.vertical ? "width" : "height";
        return {
          background: e.inactiveColor,
          [x]: xe(e.barHeight),
        };
      }),
      h = (x) => e.range && Array.isArray(x),
      g = () => {
        const { modelValue: x, min: P } = e;
        return h(x)
          ? `${((x[1] - x[0]) * 100) / u.value}%`
          : `${((x - Number(P)) * 100) / u.value}%`;
      },
      S = () => {
        const { modelValue: x, min: P } = e;
        return h(x) ? `${((x[0] - Number(P)) * 100) / u.value}%` : "0%";
      },
      p = B(() => {
        const P = {
          [e.vertical ? "height" : "width"]: g(),
          background: e.activeColor,
        };
        l.value && (P.transition = "none");
        const D = () =>
          e.vertical
            ? e.reverse
              ? "bottom"
              : "top"
            : e.reverse
            ? "right"
            : "left";
        return (P[D()] = S()), P;
      }),
      y = (x) => {
        const P = +e.min,
          D = +e.max,
          Q = +e.step;
        x = ht(x, P, D);
        const oe = Math.round((x - P) / Q) * Q;
        return vf(P, oe);
      },
      v = () => {
        const x = e.modelValue;
        h(x) ? (r = x.map(y)) : (r = y(x));
      },
      m = (x) => {
        var P, D;
        const Q = (P = x[0]) != null ? P : Number(e.min),
          oe = (D = x[1]) != null ? D : Number(e.max);
        return Q > oe ? [oe, Q] : [Q, oe];
      },
      b = (x, P) => {
        h(x) ? (x = m(x).map(y)) : (x = y(x)),
          fn(x, e.modelValue) || t("update:modelValue", x),
          P && !fn(x, r) && t("change", x);
      },
      w = (x) => {
        if ((x.stopPropagation(), e.disabled || e.readonly)) return;
        v();
        const { min: P, reverse: D, vertical: Q, modelValue: oe } = e,
          H = Ne(a),
          J = () =>
            Q
              ? D
                ? H.bottom - x.clientY
                : x.clientY - H.top
              : D
              ? H.right - x.clientX
              : x.clientX - H.left,
          se = Q ? H.height : H.width,
          Ie = Number(P) + (J() / se) * u.value;
        if (h(oe)) {
          const [De, M] = oe,
            K = (De + M) / 2;
          Ie <= K ? b([Ie, M], !0) : b([De, Ie], !0);
        } else b(Ie, !0);
      },
      C = (x) => {
        e.disabled ||
          e.readonly ||
          (c.start(x), (i = e.modelValue), v(), (l.value = "start"));
      },
      k = (x) => {
        if (e.disabled || e.readonly) return;
        l.value === "start" && t("dragStart", x),
          We(x, !0),
          c.move(x),
          (l.value = "dragging");
        const P = Ne(a),
          D = e.vertical ? c.deltaY.value : c.deltaX.value,
          Q = e.vertical ? P.height : P.width;
        let oe = (D / Q) * u.value;
        if ((e.reverse && (oe = -oe), h(r))) {
          const H = e.reverse ? 1 - o : o;
          i[H] = r[H] + oe;
        } else i = r + oe;
        b(i);
      },
      I = (x) => {
        e.disabled ||
          e.readonly ||
          (l.value === "dragging" && (b(i, !0), t("dragEnd", x)),
          (l.value = ""));
      },
      _ = (x) =>
        typeof x == "number"
          ? Ci("button-wrapper", ["left", "right"][x])
          : Ci("button-wrapper", e.reverse ? "left" : "right"),
      R = (x, P) => {
        const D = l.value === "dragging";
        if (typeof P == "number") {
          const Q = n[P === 0 ? "left-button" : "right-button"];
          let oe;
          if ((D && Array.isArray(i) && (oe = i[0] > i[1] ? o ^ 1 : o), Q))
            return Q({
              value: x,
              dragging: D,
              dragIndex: oe,
            });
        }
        return n.button
          ? n.button({
              value: x,
              dragging: D,
            })
          : d(
              "div",
              {
                class: Ci("button"),
                style: Bn(e.buttonSize),
              },
              null
            );
      },
      O = (x) => {
        const P = typeof x == "number" ? e.modelValue[x] : e.modelValue;
        return d(
          "div",
          {
            ref: s[x ?? 0],
            role: "slider",
            class: _(x),
            tabindex: e.disabled ? void 0 : 0,
            "aria-valuemin": e.min,
            "aria-valuenow": P,
            "aria-valuemax": e.max,
            "aria-disabled": e.disabled || void 0,
            "aria-readonly": e.readonly || void 0,
            "aria-orientation": e.vertical ? "vertical" : "horizontal",
            onTouchstartPassive: (D) => {
              typeof x == "number" && (o = x), C(D);
            },
            onTouchend: I,
            onTouchcancel: I,
            onClick: cl,
          },
          [R(P, x)]
        );
      };
    return (
      b(e.modelValue),
      so(() => e.modelValue),
      s.forEach((x) => {
        et("touchmove", k, {
          target: x,
        });
      }),
      () =>
        d(
          "div",
          {
            ref: a,
            style: f.value,
            class: Ci({
              vertical: e.vertical,
              disabled: e.disabled,
            }),
            onClick: w,
          },
          [
            d(
              "div",
              {
                class: Ci("bar"),
                style: p.value,
              },
              [e.range ? [O(0), O(1)] : O()]
            ),
          ]
        )
    );
  },
});
const ok = Z(nk),
  [xu, ik] = W("space"),
  rk = {
    align: String,
    direction: {
      type: String,
      default: "horizontal",
    },
    size: {
      type: [Number, String, Array],
      default: 8,
    },
    wrap: Boolean,
    fill: Boolean,
  };
function Mh(e = []) {
  const t = [];
  return (
    e.forEach((n) => {
      Array.isArray(n)
        ? t.push(...n)
        : n.type === Ve
        ? t.push(...Mh(n.children))
        : t.push(n);
    }),
    t.filter((n) => {
      var o;
      return !(
        n &&
        (n.type === kt ||
          (n.type === Ve &&
            ((o = n.children) == null ? void 0 : o.length) === 0) ||
          (n.type === Qi && n.children.trim() === ""))
      );
    })
  );
}
var ak = j({
  name: xu,
  props: rk,
  setup(e, { slots: t }) {
    const n = B(() => {
        var r;
        return (r = e.align) != null
          ? r
          : e.direction === "horizontal"
          ? "center"
          : "";
      }),
      o = (r) => (typeof r == "number" ? r + "px" : r),
      i = (r) => {
        const a = {},
          s = `${o(Array.isArray(e.size) ? e.size[0] : e.size)}`,
          l = `${o(Array.isArray(e.size) ? e.size[1] : e.size)}`;
        return r
          ? e.wrap
            ? {
                marginBottom: l,
              }
            : {}
          : (e.direction === "horizontal" && (a.marginRight = s),
            (e.direction === "vertical" || e.wrap) && (a.marginBottom = l),
            a);
      };
    return () => {
      var r;
      const a = Mh((r = t.default) == null ? void 0 : r.call(t));
      return d(
        "div",
        {
          class: [
            ik({
              [e.direction]: e.direction,
              [`align-${n.value}`]: n.value,
              wrap: e.wrap,
              fill: e.fill,
            }),
          ],
        },
        [
          a.map((s, l) =>
            d(
              "div",
              {
                key: `item-${l}`,
                class: `${xu}-item`,
                style: i(l === a.length - 1),
              },
              [s]
            )
          ),
        ]
      );
    };
  },
});
const sk = Z(ak),
  [Fh, Tu] = W("steps"),
  lk = {
    active: ce(0),
    direction: G("horizontal"),
    activeIcon: G("checked"),
    iconPrefix: String,
    finishIcon: String,
    activeColor: String,
    inactiveIcon: String,
    inactiveColor: String,
  },
  Vh = Symbol(Fh);
var ck = j({
  name: Fh,
  props: lk,
  emits: ["clickStep"],
  setup(e, { emit: t, slots: n }) {
    const { linkChildren: o } = wt(Vh);
    return (
      o({
        props: e,
        onClickStep: (r) => t("clickStep", r),
      }),
      () => {
        var r;
        return d(
          "div",
          {
            class: Tu([e.direction]),
          },
          [
            d(
              "div",
              {
                class: Tu("items"),
              },
              [(r = n.default) == null ? void 0 : r.call(n)]
            ),
          ]
        );
      }
    );
  },
});
const [uk, Un] = W("step");
var dk = j({
  name: uk,
  setup(e, { slots: t }) {
    const { parent: n, index: o } = gt(Vh);
    if (!n) return;
    const i = n.props,
      r = () => {
        const f = +i.active;
        return o.value < f ? "finish" : o.value === f ? "process" : "waiting";
      },
      a = () => r() === "process",
      s = B(() => ({
        background: r() === "finish" ? i.activeColor : i.inactiveColor,
      })),
      l = B(() => {
        if (a())
          return {
            color: i.activeColor,
          };
        if (r() === "waiting")
          return {
            color: i.inactiveColor,
          };
      }),
      c = () => n.onClickStep(o.value),
      u = () => {
        const {
          iconPrefix: f,
          finishIcon: h,
          activeIcon: g,
          activeColor: S,
          inactiveIcon: p,
        } = i;
        return a()
          ? t["active-icon"]
            ? t["active-icon"]()
            : d(
                Te,
                {
                  class: Un("icon", "active"),
                  name: g,
                  color: S,
                  classPrefix: f,
                },
                null
              )
          : r() === "finish" && (h || t["finish-icon"])
          ? t["finish-icon"]
            ? t["finish-icon"]()
            : d(
                Te,
                {
                  class: Un("icon", "finish"),
                  name: h,
                  color: S,
                  classPrefix: f,
                },
                null
              )
          : t["inactive-icon"]
          ? t["inactive-icon"]()
          : p
          ? d(
              Te,
              {
                class: Un("icon"),
                name: p,
                classPrefix: f,
              },
              null
            )
          : d(
              "i",
              {
                class: Un("circle"),
                style: s.value,
              },
              null
            );
      };
    return () => {
      var f;
      const h = r();
      return d(
        "div",
        {
          class: [
            $n,
            Un([
              i.direction,
              {
                [h]: h,
              },
            ]),
          ],
        },
        [
          d(
            "div",
            {
              class: Un("title", {
                active: a(),
              }),
              style: l.value,
              onClick: c,
            },
            [(f = t.default) == null ? void 0 : f.call(t)]
          ),
          d(
            "div",
            {
              class: Un("circle-container"),
              onClick: c,
            },
            [u()]
          ),
          d(
            "div",
            {
              class: Un("line"),
              style: s.value,
            },
            null
          ),
        ]
      );
    };
  },
});
const fk = Z(dk),
  [hk, Tr] = W("stepper"),
  gk = 200,
  Er = (e, t) => String(e) === String(t),
  mk = {
    min: ce(1),
    max: ce(1 / 0),
    name: ce(""),
    step: ce(1),
    theme: String,
    integer: Boolean,
    disabled: Boolean,
    showPlus: z,
    showMinus: z,
    showInput: z,
    longPress: z,
    autoFixed: z,
    allowEmpty: Boolean,
    modelValue: Y,
    inputWidth: Y,
    buttonSize: Y,
    placeholder: String,
    disablePlus: Boolean,
    disableMinus: Boolean,
    disableInput: Boolean,
    beforeChange: Function,
    defaultValue: ce(1),
    decimalLength: Y,
  };
var vk = j({
  name: hk,
  props: mk,
  emits: [
    "plus",
    "blur",
    "minus",
    "focus",
    "change",
    "overlimit",
    "update:modelValue",
  ],
  setup(e, { emit: t }) {
    const n = (_, R = !0) => {
        const { min: O, max: x, allowEmpty: P, decimalLength: D } = e;
        return (
          (P && _ === "") ||
            ((_ = ws(String(_), !e.integer)),
            (_ = _ === "" ? 0 : +_),
            (_ = Number.isNaN(_) ? +O : _),
            (_ = R ? Math.max(Math.min(+x, _), +O) : _),
            $e(D) && (_ = _.toFixed(+D))),
          _
        );
      },
      o = () => {
        var _;
        const R = (_ = e.modelValue) != null ? _ : e.defaultValue,
          O = n(R);
        return Er(O, e.modelValue) || t("update:modelValue", O), O;
      };
    let i;
    const r = $(),
      a = $(o()),
      s = B(() => e.disabled || e.disableMinus || +a.value <= +e.min),
      l = B(() => e.disabled || e.disablePlus || +a.value >= +e.max),
      c = B(() => ({
        width: xe(e.inputWidth),
        height: xe(e.buttonSize),
      })),
      u = B(() => Bn(e.buttonSize)),
      f = () => {
        const _ = n(a.value);
        Er(_, a.value) || (a.value = _);
      },
      h = (_) => {
        e.beforeChange
          ? lo(e.beforeChange, {
              args: [_],
              done() {
                a.value = _;
              },
            })
          : (a.value = _);
      },
      g = () => {
        if ((i === "plus" && l.value) || (i === "minus" && s.value)) {
          t("overlimit", i);
          return;
        }
        const _ = i === "minus" ? -e.step : +e.step,
          R = n(vf(+a.value, _));
        h(R), t(i);
      },
      S = (_) => {
        const R = _.target,
          { value: O } = R,
          { decimalLength: x } = e;
        let P = ws(String(O), !e.integer);
        if ($e(x) && P.includes(".")) {
          const Q = P.split(".");
          P = `${Q[0]}.${Q[1].slice(0, +x)}`;
        }
        e.beforeChange
          ? (R.value = String(a.value))
          : Er(O, P) || (R.value = P);
        const D = P === String(+P);
        h(D ? +P : P);
      },
      p = (_) => {
        var R;
        e.disableInput ? (R = r.value) == null || R.blur() : t("focus", _);
      },
      y = (_) => {
        const R = _.target,
          O = n(R.value, e.autoFixed);
        (R.value = String(O)),
          (a.value = O),
          Ae(() => {
            t("blur", _), gf();
          });
      };
    let v, m;
    const b = () => {
        m = setTimeout(() => {
          g(), b();
        }, gk);
      },
      w = () => {
        e.longPress &&
          ((v = !1),
          clearTimeout(m),
          (m = setTimeout(() => {
            (v = !0), g(), b();
          }, Cf)));
      },
      C = (_) => {
        e.longPress && (clearTimeout(m), v && We(_));
      },
      k = (_) => {
        e.disableInput && We(_);
      },
      I = (_) => ({
        onClick: (R) => {
          We(R), (i = _), g();
        },
        onTouchstartPassive: () => {
          (i = _), w();
        },
        onTouchend: C,
        onTouchcancel: C,
      });
    return (
      ie(() => [e.max, e.min, e.integer, e.decimalLength], f),
      ie(
        () => e.modelValue,
        (_) => {
          Er(_, a.value) || (a.value = n(_));
        }
      ),
      ie(a, (_) => {
        t("update:modelValue", _),
          t("change", _, {
            name: e.name,
          });
      }),
      so(() => e.modelValue),
      () =>
        d(
          "div",
          {
            role: "group",
            class: Tr([e.theme]),
          },
          [
            st(
              d(
                "button",
                Re(
                  {
                    type: "button",
                    style: u.value,
                    class: [
                      Tr("minus", {
                        disabled: s.value,
                      }),
                      {
                        [bt]: !s.value,
                      },
                    ],
                    "aria-disabled": s.value || void 0,
                  },
                  I("minus")
                ),
                null
              ),
              [[ft, e.showMinus]]
            ),
            st(
              d(
                "input",
                {
                  ref: r,
                  type: e.integer ? "tel" : "text",
                  role: "spinbutton",
                  class: Tr("input"),
                  value: a.value,
                  style: c.value,
                  disabled: e.disabled,
                  readonly: e.disableInput,
                  inputmode: e.integer ? "numeric" : "decimal",
                  placeholder: e.placeholder,
                  autocomplete: "off",
                  "aria-valuemax": e.max,
                  "aria-valuemin": e.min,
                  "aria-valuenow": a.value,
                  onBlur: y,
                  onInput: S,
                  onFocus: p,
                  onMousedown: k,
                },
                null
              ),
              [[ft, e.showInput]]
            ),
            st(
              d(
                "button",
                Re(
                  {
                    type: "button",
                    style: u.value,
                    class: [
                      Tr("plus", {
                        disabled: l.value,
                      }),
                      {
                        [bt]: !l.value,
                      },
                    ],
                    "aria-disabled": l.value || void 0,
                  },
                  I("plus")
                ),
                null
              ),
              [[ft, e.showPlus]]
            ),
          ]
        )
    );
  },
});
const yk = Z(vk),
  bk = Z(ck),
  [pk, Kt, wk] = W("submit-bar"),
  Sk = {
    tip: String,
    label: String,
    price: Number,
    tipIcon: String,
    loading: Boolean,
    currency: G("¥"),
    disabled: Boolean,
    textAlign: String,
    buttonText: String,
    buttonType: G("danger"),
    buttonColor: String,
    suffixLabel: String,
    placeholder: Boolean,
    decimalLength: ce(2),
    safeAreaInsetBottom: z,
  };
var Ck = j({
  name: pk,
  props: Sk,
  emits: ["submit"],
  setup(e, { emit: t, slots: n }) {
    const o = $(),
      i = ua(o, Kt),
      r = () => {
        const {
          price: u,
          label: f,
          currency: h,
          textAlign: g,
          suffixLabel: S,
          decimalLength: p,
        } = e;
        if (typeof u == "number") {
          const y = (u / 100).toFixed(+p).split("."),
            v = p ? `.${y[1]}` : "";
          return d(
            "div",
            {
              class: Kt("text"),
              style: {
                textAlign: g,
              },
            },
            [
              d("span", null, [f || wk("label")]),
              d(
                "span",
                {
                  class: Kt("price"),
                },
                [
                  h,
                  d(
                    "span",
                    {
                      class: Kt("price-integer"),
                    },
                    [y[0]]
                  ),
                  v,
                ]
              ),
              S &&
                d(
                  "span",
                  {
                    class: Kt("suffix-label"),
                  },
                  [S]
                ),
            ]
          );
        }
      },
      a = () => {
        var u;
        const { tip: f, tipIcon: h } = e;
        if (n.tip || f)
          return d(
            "div",
            {
              class: Kt("tip"),
            },
            [
              h &&
                d(
                  Te,
                  {
                    class: Kt("tip-icon"),
                    name: h,
                  },
                  null
                ),
              f &&
                d(
                  "span",
                  {
                    class: Kt("tip-text"),
                  },
                  [f]
                ),
              (u = n.tip) == null ? void 0 : u.call(n),
            ]
          );
      },
      s = () => t("submit"),
      l = () =>
        n.button
          ? n.button()
          : d(
              pt,
              {
                round: !0,
                type: e.buttonType,
                text: e.buttonText,
                class: Kt("button", e.buttonType),
                color: e.buttonColor,
                loading: e.loading,
                disabled: e.disabled,
                onClick: s,
              },
              null
            ),
      c = () => {
        var u, f;
        return d(
          "div",
          {
            ref: o,
            class: [
              Kt(),
              {
                "van-safe-area-bottom": e.safeAreaInsetBottom,
              },
            ],
          },
          [
            (u = n.top) == null ? void 0 : u.call(n),
            a(),
            d(
              "div",
              {
                class: Kt("bar"),
              },
              [(f = n.default) == null ? void 0 : f.call(n), r(), l()]
            ),
          ]
        );
      };
    return () => (e.placeholder ? i(c) : c());
  },
});
const _k = Z(Ck),
  [kk, Xa] = W("swipe-cell"),
  xk = {
    name: ce(""),
    disabled: Boolean,
    leftWidth: Y,
    rightWidth: Y,
    beforeClose: Function,
    stopPropagation: Boolean,
  };
var Tk = j({
  name: kk,
  props: xk,
  emits: ["open", "close", "click"],
  setup(e, { emit: t, slots: n }) {
    let o, i, r, a;
    const s = $(),
      l = $(),
      c = $(),
      u = Ze({
        offset: 0,
        dragging: !1,
      }),
      f = jt(),
      h = (_) => (_.value ? Ne(_).width : 0),
      g = B(() => ($e(e.leftWidth) ? +e.leftWidth : h(l))),
      S = B(() => ($e(e.rightWidth) ? +e.rightWidth : h(c))),
      p = (_) => {
        (u.offset = _ === "left" ? g.value : -S.value),
          o ||
            ((o = !0),
            t("open", {
              name: e.name,
              position: _,
            }));
      },
      y = (_) => {
        (u.offset = 0),
          o &&
            ((o = !1),
            t("close", {
              name: e.name,
              position: _,
            }));
      },
      v = (_) => {
        const R = Math.abs(u.offset),
          O = 0.15,
          x = o ? 1 - O : O,
          P = _ === "left" ? g.value : S.value;
        P && R > P * x ? p(_) : y(_);
      },
      m = (_) => {
        e.disabled || ((r = u.offset), f.start(_));
      },
      b = (_) => {
        if (e.disabled) return;
        const { deltaX: R } = f;
        f.move(_),
          f.isHorizontal() &&
            ((i = !0),
            (u.dragging = !0),
            (!o || R.value * r < 0) && We(_, e.stopPropagation),
            (u.offset = ht(R.value + r, -S.value, g.value)));
      },
      w = () => {
        u.dragging &&
          ((u.dragging = !1),
          v(u.offset > 0 ? "left" : "right"),
          setTimeout(() => {
            i = !1;
          }, 0));
      },
      C = (_ = "outside") => {
        a ||
          (t("click", _),
          o &&
            !i &&
            ((a = !0),
            lo(e.beforeClose, {
              args: [
                {
                  name: e.name,
                  position: _,
                },
              ],
              done: () => {
                (a = !1), y(_);
              },
              canceled: () => (a = !1),
              error: () => (a = !1),
            })));
      },
      k = (_, R) => (O) => {
        R && O.stopPropagation(), C(_);
      },
      I = (_, R) => {
        const O = n[_];
        if (O)
          return d(
            "div",
            {
              ref: R,
              class: Xa(_),
              onClick: k(_, !0),
            },
            [O()]
          );
      };
    return (
      Oe({
        open: p,
        close: y,
      }),
      sa(s, () => C("outside"), {
        eventName: "touchstart",
      }),
      et("touchmove", b, {
        target: s,
      }),
      () => {
        var _;
        const R = {
          transform: `translate3d(${u.offset}px, 0, 0)`,
          transitionDuration: u.dragging ? "0s" : ".6s",
        };
        return d(
          "div",
          {
            ref: s,
            class: Xa(),
            onClick: k("cell", i),
            onTouchstartPassive: m,
            onTouchend: w,
            onTouchcancel: w,
          },
          [
            d(
              "div",
              {
                class: Xa("wrapper"),
                style: R,
              },
              [
                I("left", l),
                (_ = n.default) == null ? void 0 : _.call(n),
                I("right", c),
              ]
            ),
          ]
        );
      }
    );
  },
});
const Ek = Z(Tk),
  [Nh, Eu] = W("tabbar"),
  Pk = {
    route: Boolean,
    fixed: z,
    border: z,
    zIndex: Y,
    placeholder: Boolean,
    activeColor: String,
    beforeChange: Function,
    inactiveColor: String,
    modelValue: ce(0),
    safeAreaInsetBottom: {
      type: Boolean,
      default: null,
    },
  },
  Hh = Symbol(Nh);
var Ak = j({
  name: Nh,
  props: Pk,
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t, slots: n }) {
    const o = $(),
      { linkChildren: i } = wt(Hh),
      r = ua(o, Eu),
      a = () => {
        var c;
        return (c = e.safeAreaInsetBottom) != null ? c : e.fixed;
      },
      s = () => {
        var c;
        const { fixed: u, zIndex: f, border: h } = e;
        return d(
          "div",
          {
            ref: o,
            role: "tablist",
            style: Dn(f),
            class: [
              Eu({
                fixed: u,
              }),
              {
                [la]: h,
                "van-safe-area-bottom": a(),
              },
            ],
          },
          [(c = n.default) == null ? void 0 : c.call(n)]
        );
      };
    return (
      i({
        props: e,
        setActive: (c, u) => {
          lo(e.beforeChange, {
            args: [c],
            done() {
              t("update:modelValue", c), t("change", c), u();
            },
          });
        },
      }),
      () => (e.fixed && e.placeholder ? r(s) : s())
    );
  },
});
const Ik = Z(Ak),
  [Rk, Ja] = W("tabbar-item"),
  Ok = be({}, co, {
    dot: Boolean,
    icon: String,
    name: Y,
    badge: Y,
    badgeProps: Object,
    iconPrefix: String,
  });
var Bk = j({
  name: Rk,
  props: Ok,
  emits: ["click"],
  setup(e, { emit: t, slots: n }) {
    const o = Eo(),
      i = tn().proxy,
      { parent: r, index: a } = gt(Hh);
    if (!r) return;
    const s = B(() => {
        var u;
        const { route: f, modelValue: h } = r.props;
        if (f && "$route" in i) {
          const { $route: g } = i,
            { to: S } = e,
            p = hn(S)
              ? S
              : {
                  path: S,
                };
          return !!g.matched.find((y) => {
            const v = "path" in p && p.path === y.path,
              m = "name" in p && p.name === y.name;
            return v || m;
          });
        }
        return ((u = e.name) != null ? u : a.value) === h;
      }),
      l = (u) => {
        var f;
        s.value || r.setActive((f = e.name) != null ? f : a.value, o),
          t("click", u);
      },
      c = () => {
        if (n.icon)
          return n.icon({
            active: s.value,
          });
        if (e.icon)
          return d(
            Te,
            {
              name: e.icon,
              classPrefix: e.iconPrefix,
            },
            null
          );
      };
    return () => {
      var u;
      const { dot: f, badge: h } = e,
        { activeColor: g, inactiveColor: S } = r.props,
        p = s.value ? g : S;
      return d(
        "div",
        {
          role: "tab",
          class: Ja({
            active: s.value,
          }),
          style: {
            color: p,
          },
          tabindex: 0,
          "aria-selected": s.value,
          onClick: l,
        },
        [
          d(
            Po,
            Re(
              {
                dot: f,
                class: Ja("icon"),
                content: h,
              },
              e.badgeProps
            ),
            {
              default: c,
            }
          ),
          d(
            "div",
            {
              class: Ja("text"),
            },
            [
              (u = n.default) == null
                ? void 0
                : u.call(n, {
                    active: s.value,
                  }),
            ]
          ),
        ]
      );
    };
  },
});
const Dk = Z(Bk),
  [$k, Pu] = W("text-ellipsis"),
  Lk = {
    rows: ce(1),
    dots: G("..."),
    content: G(""),
    expandText: G(""),
    collapseText: G(""),
    position: G("end"),
  };
var Mk = j({
  name: $k,
  props: Lk,
  emits: ["clickAction"],
  setup(e, { emit: t, slots: n }) {
    const o = $(""),
      i = $(!1),
      r = $(!1),
      a = $();
    let s = !1;
    const l = B(() => (i.value ? e.collapseText : e.expandText)),
      c = (p) => {
        if (!p) return 0;
        const y = p.match(/^\d*(\.\d*)?/);
        return y ? Number(y[0]) : 0;
      },
      u = () => {
        if (!a.value || !a.value.isConnected) return;
        const p = window.getComputedStyle(a.value),
          y = document.createElement("div");
        return (
          Array.prototype.slice.apply(p).forEach((m) => {
            y.style.setProperty(m, p.getPropertyValue(m));
          }),
          (y.style.position = "fixed"),
          (y.style.zIndex = "-9999"),
          (y.style.top = "-9999px"),
          (y.style.height = "auto"),
          (y.style.minHeight = "auto"),
          (y.style.maxHeight = "auto"),
          (y.innerText = e.content),
          document.body.appendChild(y),
          y
        );
      },
      f = () => {
        const p = (C, k) => {
            const { content: I, position: _, dots: R } = e,
              O = I.length,
              x = () => {
                const Q = (oe, H) => {
                  if (H - oe <= 1)
                    return _ === "end" ? I.slice(0, oe) + R : R + I.slice(H, O);
                  const J = Math.round((oe + H) / 2);
                  return (
                    _ === "end"
                      ? (C.innerText = I.slice(0, J) + R + l.value)
                      : (C.innerText = R + I.slice(J, O) + l.value),
                    C.offsetHeight > k
                      ? _ === "end"
                        ? Q(oe, J)
                        : Q(J, H)
                      : _ === "end"
                      ? Q(J, H)
                      : Q(oe, J)
                  );
                };
                C.innerText = Q(0, O);
              },
              P = (Q, oe) => {
                if (Q[1] - Q[0] <= 1 && oe[1] - oe[0] <= 1)
                  return I.slice(0, Q[0]) + R + I.slice(oe[1], O);
                const H = Math.floor((Q[0] + Q[1]) / 2),
                  J = Math.ceil((oe[0] + oe[1]) / 2);
                return (
                  (C.innerText =
                    e.content.slice(0, H) +
                    e.dots +
                    e.content.slice(J, O) +
                    e.expandText),
                  C.offsetHeight >= k
                    ? P([Q[0], H], [J, oe[1]])
                    : P([H, Q[1]], [oe[0], J])
                );
              },
              D = (0 + O) >> 1;
            return (
              e.position === "middle" ? (C.innerText = P([0, D], [D, O])) : x(),
              C.innerText
            );
          },
          y = u();
        if (!y) {
          s = !0;
          return;
        }
        const { paddingBottom: v, paddingTop: m, lineHeight: b } = y.style,
          w = Math.ceil((Number(e.rows) + 0.5) * c(b) + c(m) + c(v));
        w < y.offsetHeight
          ? ((r.value = !0), (o.value = p(y, w)))
          : ((r.value = !1), (o.value = e.content)),
          document.body.removeChild(y);
      },
      h = (p = !i.value) => {
        i.value = p;
      },
      g = (p) => {
        h(), t("clickAction", p);
      },
      S = () => {
        const p = n.action
          ? n.action({
              expanded: i.value,
            })
          : l.value;
        return d(
          "span",
          {
            class: Pu("action"),
            onClick: g,
          },
          [p]
        );
      };
    return (
      tt(f),
      mn(() => {
        s && ((s = !1), f());
      }),
      ie([Xt, () => [e.content, e.rows, e.position]], f),
      Oe({
        toggle: h,
      }),
      () =>
        d(
          "div",
          {
            ref: a,
            class: Pu(),
          },
          [i.value ? e.content : o.value, r.value ? S() : null]
        )
    );
  },
});
const Fk = Z(Mk),
  [Vk] = W("time-picker"),
  Au = (e) => /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/.test(e),
  Nk = ["hour", "minute", "second"],
  Hk = be({}, rh, {
    minHour: ce(0),
    maxHour: ce(23),
    minMinute: ce(0),
    maxMinute: ce(59),
    minSecond: ce(0),
    maxSecond: ce(59),
    minTime: {
      type: String,
      validator: Au,
    },
    maxTime: {
      type: String,
      validator: Au,
    },
    columnsType: {
      type: Array,
      default: () => ["hour", "minute"],
    },
    filter: Function,
  });
var zk = j({
  name: Vk,
  props: Hk,
  emits: ["confirm", "cancel", "change", "update:modelValue"],
  setup(e, { emit: t, slots: n }) {
    const o = $(e.modelValue),
      i = $(),
      r = (h) => {
        const g = h.split(":");
        return Nk.map((S, p) => (e.columnsType.includes(S) ? g[p] : "00"));
      },
      a = () => {
        var h;
        return (h = i.value) == null ? void 0 : h.confirm();
      },
      s = () => o.value,
      l = B(() => {
        let {
          minHour: h,
          maxHour: g,
          minMinute: S,
          maxMinute: p,
          minSecond: y,
          maxSecond: v,
        } = e;
        if (e.minTime || e.maxTime) {
          const m = {
            hour: 0,
            minute: 0,
            second: 0,
          };
          e.columnsType.forEach((C, k) => {
            var I;
            m[C] = (I = o.value[k]) != null ? I : 0;
          });
          const { hour: b, minute: w } = m;
          if (e.minTime) {
            const [C, k, I] = r(e.minTime);
            (h = C),
              (S = +b <= +h ? k : "00"),
              (y = +b <= +h && +w <= +S ? I : "00");
          }
          if (e.maxTime) {
            const [C, k, I] = r(e.maxTime);
            (g = C),
              (p = +b >= +g ? k : "59"),
              (v = +b >= +g && +w >= +p ? I : "59");
          }
        }
        return e.columnsType.map((m) => {
          const { filter: b, formatter: w } = e;
          switch (m) {
            case "hour":
              return Qo(+h, +g, m, w, b, o.value);
            case "minute":
              return Qo(+S, +p, m, w, b, o.value);
            case "second":
              return Qo(+y, +v, m, w, b, o.value);
            default:
              return [];
          }
        });
      });
    ie(o, (h) => {
      fn(h, e.modelValue) || t("update:modelValue", h);
    }),
      ie(
        () => e.modelValue,
        (h) => {
          (h = lh(h, l.value)), fn(h, o.value) || (o.value = h);
        },
        {
          immediate: !0,
        }
      );
    const c = (...h) => t("change", ...h),
      u = (...h) => t("cancel", ...h),
      f = (...h) => t("confirm", ...h);
    return (
      Oe({
        confirm: a,
        getSelectedTime: s,
      }),
      () =>
        d(
          ga,
          Re(
            {
              ref: i,
              modelValue: o.value,
              "onUpdate:modelValue": (h) => (o.value = h),
              columns: l.value,
              onChange: c,
              onCancel: u,
              onConfirm: f,
            },
            Me(e, ah)
          ),
          n
        )
    );
  },
});
const jk = Z(zk),
  [Uk, jo] = W("tree-select"),
  Wk = {
    max: ce(1 / 0),
    items: Ye(),
    height: ce(300),
    selectedIcon: G("success"),
    mainActiveIndex: ce(0),
    activeId: {
      type: [Number, String, Array],
      default: 0,
    },
  };
var qk = j({
  name: Uk,
  props: Wk,
  emits: ["clickNav", "clickItem", "update:activeId", "update:mainActiveIndex"],
  setup(e, { emit: t, slots: n }) {
    const o = (c) =>
        Array.isArray(e.activeId) ? e.activeId.includes(c) : e.activeId === c,
      i = (c) => {
        const u = () => {
          if (c.disabled) return;
          let f;
          if (Array.isArray(e.activeId)) {
            f = e.activeId.slice();
            const h = f.indexOf(c.id);
            h !== -1 ? f.splice(h, 1) : f.length < +e.max && f.push(c.id);
          } else f = c.id;
          t("update:activeId", f), t("clickItem", c);
        };
        return d(
          "div",
          {
            key: c.id,
            class: [
              "van-ellipsis",
              jo("item", {
                active: o(c.id),
                disabled: c.disabled,
              }),
            ],
            onClick: u,
          },
          [
            c.text,
            o(c.id) &&
              d(
                Te,
                {
                  name: e.selectedIcon,
                  class: jo("selected"),
                },
                null
              ),
          ]
        );
      },
      r = (c) => {
        t("update:mainActiveIndex", c);
      },
      a = (c) => t("clickNav", c),
      s = () => {
        const c = e.items.map((u) =>
          d(
            Bh,
            {
              dot: u.dot,
              badge: u.badge,
              class: [jo("nav-item"), u.className],
              disabled: u.disabled,
              onClick: a,
            },
            {
              title: () => (n["nav-text"] ? n["nav-text"](u) : u.text),
            }
          )
        );
        return d(
          Oh,
          {
            class: jo("nav"),
            modelValue: e.mainActiveIndex,
            onChange: r,
          },
          {
            default: () => [c],
          }
        );
      },
      l = () => {
        if (n.content) return n.content();
        const c = e.items[+e.mainActiveIndex] || {};
        if (c.children) return c.children.map(i);
      };
    return () =>
      d(
        "div",
        {
          class: jo(),
          style: {
            height: xe(e.height),
          },
        },
        [
          s(),
          d(
            "div",
            {
              class: jo("content"),
            },
            [l()]
          ),
        ]
      );
  },
});
const Yk = Z(qk),
  [Kk, at, Zk] = W("uploader");
function Iu(e, t) {
  return new Promise((n) => {
    if (t === "file") {
      n();
      return;
    }
    const o = new FileReader();
    (o.onload = (i) => {
      n(i.target.result);
    }),
      t === "dataUrl" ? o.readAsDataURL(e) : t === "text" && o.readAsText(e);
  });
}
function zh(e, t) {
  return Dr(e).some((n) =>
    n.file ? (ei(t) ? t(n.file) : n.file.size > +t) : !1
  );
}
function Gk(e, t) {
  const n = [],
    o = [];
  return (
    e.forEach((i) => {
      zh(i, t) ? o.push(i) : n.push(i);
    }),
    {
      valid: n,
      invalid: o,
    }
  );
}
const Qk = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg|avif)/i,
  Xk = (e) => Qk.test(e);
function jh(e) {
  return e.isImage
    ? !0
    : e.file && e.file.type
    ? e.file.type.indexOf("image") === 0
    : e.url
    ? Xk(e.url)
    : typeof e.content == "string"
    ? e.content.indexOf("data:image") === 0
    : !1;
}
var Jk = j({
  props: {
    name: Y,
    item: dt(Object),
    index: Number,
    imageFit: String,
    lazyLoad: Boolean,
    deletable: Boolean,
    reupload: Boolean,
    previewSize: [Number, String, Array],
    beforeDelete: Function,
  },
  emits: ["delete", "preview", "reupload"],
  setup(e, { emit: t, slots: n }) {
    const o = () => {
        const { status: u, message: f } = e.item;
        if (u === "uploading" || u === "failed") {
          const h =
              u === "failed"
                ? d(
                    Te,
                    {
                      name: "close",
                      class: at("mask-icon"),
                    },
                    null
                  )
                : d(
                    nn,
                    {
                      class: at("loading"),
                    },
                    null
                  ),
            g = $e(f) && f !== "";
          return d(
            "div",
            {
              class: at("mask"),
            },
            [
              h,
              g &&
                d(
                  "div",
                  {
                    class: at("mask-message"),
                  },
                  [f]
                ),
            ]
          );
        }
      },
      i = (u) => {
        const { name: f, item: h, index: g, beforeDelete: S } = e;
        u.stopPropagation(),
          lo(S, {
            args: [
              h,
              {
                name: f,
                index: g,
              },
            ],
            done: () => t("delete"),
          });
      },
      r = () => t("preview"),
      a = () => t("reupload"),
      s = () => {
        if (e.deletable && e.item.status !== "uploading") {
          const u = n["preview-delete"];
          return d(
            "div",
            {
              role: "button",
              class: at("preview-delete", {
                shadow: !u,
              }),
              tabindex: 0,
              "aria-label": Zk("delete"),
              onClick: i,
            },
            [
              u
                ? u()
                : d(
                    Te,
                    {
                      name: "cross",
                      class: at("preview-delete-icon"),
                    },
                    null
                  ),
            ]
          );
        }
      },
      l = () => {
        if (n["preview-cover"]) {
          const { index: u, item: f } = e;
          return d(
            "div",
            {
              class: at("preview-cover"),
            },
            [
              n["preview-cover"](
                be(
                  {
                    index: u,
                  },
                  f
                )
              ),
            ]
          );
        }
      },
      c = () => {
        const {
          item: u,
          lazyLoad: f,
          imageFit: h,
          previewSize: g,
          reupload: S,
        } = e;
        return jh(u)
          ? d(
              ya,
              {
                fit: h,
                src: u.objectUrl || u.content || u.url,
                class: at("preview-image"),
                width: Array.isArray(g) ? g[0] : g,
                height: Array.isArray(g) ? g[1] : g,
                lazyLoad: f,
                onClick: S ? a : r,
              },
              {
                default: l,
              }
            )
          : d(
              "div",
              {
                class: at("file"),
                style: Bn(e.previewSize),
              },
              [
                d(
                  Te,
                  {
                    class: at("file-icon"),
                    name: "description",
                  },
                  null
                ),
                d(
                  "div",
                  {
                    class: [at("file-name"), "van-ellipsis"],
                  },
                  [u.file ? u.file.name : u.url]
                ),
                l(),
              ]
            );
      };
    return () =>
      d(
        "div",
        {
          class: at("preview"),
        },
        [c(), o(), s()]
      );
  },
});
const ex = {
  name: ce(""),
  accept: G("image/*"),
  capture: String,
  multiple: Boolean,
  disabled: Boolean,
  readonly: Boolean,
  lazyLoad: Boolean,
  maxCount: ce(1 / 0),
  imageFit: G("cover"),
  resultType: G("dataUrl"),
  uploadIcon: G("photograph"),
  uploadText: String,
  deletable: z,
  reupload: Boolean,
  afterRead: Function,
  showUpload: z,
  modelValue: Ye(),
  beforeRead: Function,
  beforeDelete: Function,
  previewSize: [Number, String, Array],
  previewImage: z,
  previewOptions: Object,
  previewFullImage: z,
  maxSize: {
    type: [Number, String, Function],
    default: 1 / 0,
  },
};
var tx = j({
  name: Kk,
  props: ex,
  emits: [
    "delete",
    "oversize",
    "clickUpload",
    "closePreview",
    "clickPreview",
    "clickReupload",
    "update:modelValue",
  ],
  setup(e, { emit: t, slots: n }) {
    const o = $(),
      i = [],
      r = $(-1),
      a = $(!1),
      s = (_ = e.modelValue.length) => ({
        name: e.name,
        index: _,
      }),
      l = () => {
        o.value && (o.value.value = "");
      },
      c = (_) => {
        if ((l(), zh(_, e.maxSize)))
          if (Array.isArray(_)) {
            const R = Gk(_, e.maxSize);
            if (((_ = R.valid), t("oversize", R.invalid, s()), !_.length))
              return;
          } else {
            t("oversize", _, s());
            return;
          }
        if (((_ = Ze(_)), r.value > -1)) {
          const R = [...e.modelValue];
          R.splice(r.value, 1, _), t("update:modelValue", R), (r.value = -1);
        } else t("update:modelValue", [...e.modelValue, ...Dr(_)]);
        e.afterRead && e.afterRead(_, s());
      },
      u = (_) => {
        const { maxCount: R, modelValue: O, resultType: x } = e;
        if (Array.isArray(_)) {
          const P = +R - O.length;
          _.length > P && (_ = _.slice(0, P)),
            Promise.all(_.map((D) => Iu(D, x))).then((D) => {
              const Q = _.map((oe, H) => {
                const J = {
                  file: oe,
                  status: "",
                  message: "",
                  objectUrl: URL.createObjectURL(oe),
                };
                return D[H] && (J.content = D[H]), J;
              });
              c(Q);
            });
        } else
          Iu(_, x).then((P) => {
            const D = {
              file: _,
              status: "",
              message: "",
              objectUrl: URL.createObjectURL(_),
            };
            P && (D.content = P), c(D);
          });
      },
      f = (_) => {
        const { files: R } = _.target;
        if (e.disabled || !R || !R.length) return;
        const O = R.length === 1 ? R[0] : [].slice.call(R);
        if (e.beforeRead) {
          const x = e.beforeRead(O, s());
          if (!x) {
            l();
            return;
          }
          if (Vs(x)) {
            x.then((P) => {
              u(P || O);
            }).catch(l);
            return;
          }
        }
        u(O);
      };
    let h;
    const g = () => t("closePreview"),
      S = (_) => {
        if (e.previewFullImage) {
          const R = e.modelValue.filter(jh),
            O = R.map(
              (x) => (
                x.objectUrl &&
                  !x.url &&
                  x.status !== "failed" &&
                  ((x.url = x.objectUrl), i.push(x.url)),
                x.url
              )
            ).filter(Boolean);
          h = Nw(
            be(
              {
                images: O,
                startPosition: R.indexOf(_),
                onClose: g,
              },
              e.previewOptions
            )
          );
        }
      },
      p = () => {
        h && h.close();
      },
      y = (_, R) => {
        const O = e.modelValue.slice(0);
        O.splice(R, 1), t("update:modelValue", O), t("delete", _, s(R));
      },
      v = (_) => {
        (a.value = !0), (r.value = _), Ae(() => I());
      },
      m = () => {
        a.value || (r.value = -1), (a.value = !1);
      },
      b = (_, R) => {
        const O = [
            "imageFit",
            "deletable",
            "reupload",
            "previewSize",
            "beforeDelete",
          ],
          x = be(Me(e, O), Me(_, O, !0));
        return d(
          Jk,
          Re(
            {
              item: _,
              index: R,
              onClick: () =>
                t(e.reupload ? "clickReupload" : "clickPreview", _, s(R)),
              onDelete: () => y(_, R),
              onPreview: () => S(_),
              onReupload: () => v(R),
            },
            Me(e, ["name", "lazyLoad"]),
            x
          ),
          Me(n, ["preview-cover", "preview-delete"])
        );
      },
      w = () => {
        if (e.previewImage) return e.modelValue.map(b);
      },
      C = (_) => t("clickUpload", _),
      k = () => {
        if (e.modelValue.length >= +e.maxCount && !e.reupload) return;
        const _ = e.modelValue.length >= +e.maxCount && e.reupload,
          R = e.readonly
            ? null
            : d(
                "input",
                {
                  ref: o,
                  type: "file",
                  class: at("input"),
                  accept: e.accept,
                  capture: e.capture,
                  multiple: e.multiple && r.value === -1,
                  disabled: e.disabled,
                  onChange: f,
                  onClick: m,
                },
                null
              );
        return n.default
          ? st(
              d(
                "div",
                {
                  class: at("input-wrapper"),
                  onClick: C,
                },
                [n.default(), R]
              ),
              [[ft, !_]]
            )
          : st(
              d(
                "div",
                {
                  class: at("upload", {
                    readonly: e.readonly,
                  }),
                  style: Bn(e.previewSize),
                  onClick: C,
                },
                [
                  d(
                    Te,
                    {
                      name: e.uploadIcon,
                      class: at("upload-icon"),
                    },
                    null
                  ),
                  e.uploadText &&
                    d(
                      "span",
                      {
                        class: at("upload-text"),
                      },
                      [e.uploadText]
                    ),
                  R,
                ]
              ),
              [[ft, e.showUpload && !_]]
            );
      },
      I = () => {
        o.value && !e.disabled && o.value.click();
      };
    return (
      yn(() => {
        i.forEach((_) => URL.revokeObjectURL(_));
      }),
      Oe({
        chooseFile: I,
        closeImagePreview: p,
      }),
      so(() => e.modelValue),
      () =>
        d(
          "div",
          {
            class: at(),
          },
          [
            d(
              "div",
              {
                class: at("wrapper", {
                  disabled: e.disabled,
                }),
              },
              [w(), k()]
            ),
          ]
        )
    );
  },
});
const nx = Z(tx),
  [ox, Ru] = W("watermark"),
  ix = {
    gapX: nt(0),
    gapY: nt(0),
    image: String,
    width: nt(100),
    height: nt(100),
    rotate: ce(-22),
    zIndex: Y,
    content: String,
    opacity: Y,
    fullPage: z,
    textColor: G("#dcdee0"),
  };
var rx = j({
  name: ox,
  props: ix,
  setup(e, { slots: t }) {
    const n = $(),
      o = $(""),
      i = $(""),
      r = () => {
        const l = {
            transformOrigin: "center",
            transform: `rotate(${e.rotate}deg)`,
          },
          c = () =>
            e.image && !t.content
              ? d(
                  "image",
                  {
                    href: i.value,
                    "xlink:href": i.value,
                    x: "0",
                    y: "0",
                    width: e.width,
                    height: e.height,
                    style: l,
                  },
                  null
                )
              : d(
                  "foreignObject",
                  {
                    x: "0",
                    y: "0",
                    width: e.width,
                    height: e.height,
                  },
                  [
                    d(
                      "div",
                      {
                        xmlns: "http://www.w3.org/1999/xhtml",
                        style: l,
                      },
                      [
                        t.content
                          ? t.content()
                          : d(
                              "span",
                              {
                                style: {
                                  color: e.textColor,
                                },
                              },
                              [e.content]
                            ),
                      ]
                    ),
                  ]
                ),
          u = e.width + e.gapX,
          f = e.height + e.gapY;
        return d(
          "svg",
          {
            viewBox: `0 0 ${u} ${f}`,
            width: u,
            height: f,
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            style: {
              padding: `0 ${e.gapX}px ${e.gapY}px 0`,
              opacity: e.opacity,
            },
          },
          [c()]
        );
      },
      a = (l) => {
        const c = document.createElement("canvas"),
          u = new Image();
        (u.crossOrigin = "anonymous"),
          (u.referrerPolicy = "no-referrer"),
          (u.onload = () => {
            (c.width = u.naturalWidth), (c.height = u.naturalHeight);
            const f = c.getContext("2d");
            f == null || f.drawImage(u, 0, 0), (i.value = c.toDataURL());
          }),
          (u.src = l);
      },
      s = (l) => {
        const c = new Blob([l], {
          type: "image/svg+xml",
        });
        return URL.createObjectURL(c);
      };
    return (
      ri(() => {
        e.image && a(e.image);
      }),
      ie(
        () => [
          i.value,
          e.content,
          e.textColor,
          e.height,
          e.width,
          e.rotate,
          e.gapX,
          e.gapY,
        ],
        () => {
          Ae(() => {
            n.value &&
              (o.value && URL.revokeObjectURL(o.value),
              (o.value = s(n.value.innerHTML)));
          });
        },
        {
          immediate: !0,
        }
      ),
      ai(() => {
        o.value && URL.revokeObjectURL(o.value);
      }),
      () => {
        const l = be(
          {
            backgroundImage: `url(${o.value})`,
          },
          Dn(e.zIndex)
        );
        return d(
          "div",
          {
            class: Ru({
              full: e.fullPage,
            }),
            style: l,
          },
          [
            d(
              "div",
              {
                class: Ru("wrapper"),
                ref: n,
              },
              [r()]
            ),
          ]
        );
      }
    );
  },
});
const ax = Z(rx),
  sx = "4.9.1";
function lx(e) {
  [
    Tf,
    Cs,
    Kv,
    sy,
    Ab,
    Jb,
    Kf,
    ip,
    Po,
    cp,
    pt,
    _p,
    Ip,
    $p,
    on,
    Vp,
    Tl,
    nh,
    Wp,
    Jp,
    o1,
    l1,
    c1,
    h1,
    y1,
    C1,
    P1,
    As,
    M1,
    U1,
    K1,
    J1,
    iw,
    uw,
    dw,
    hh,
    En,
    mw,
    pw,
    bl,
    _w,
    Ew,
    Rw,
    Te,
    ya,
    Hw,
    Zw,
    Gw,
    tS,
    nn,
    bf,
    rS,
    cS,
    pS,
    ES,
    Of,
    RS,
    $S,
    ga,
    LS,
    DC,
    $t,
    FC,
    UC,
    xl,
    _l,
    ZC,
    i_,
    r_,
    u_,
    b_,
    Oh,
    Bh,
    A_,
    Z_,
    $h,
    J_,
    Lh,
    Dh,
    ok,
    sk,
    fk,
    yk,
    bk,
    Vf,
    _k,
    vl,
    Ek,
    yl,
    Cl,
    qi,
    Ik,
    Dk,
    fa,
    va,
    Fk,
    jk,
    wb,
    Yk,
    nx,
    ax,
  ].forEach((n) => {
    n.install ? e.use(n) : n.name && e.component(n.name, n);
  });
}
var cx = {
  install: lx,
  version: sx,
};
function ux(e) {
  ($t.props.teleport = {
    default() {
      return document.body;
    },
  }),
    e.component("van-popup", $t);
}
const dx = "modulepreload",
  fx = function (e) {
    return "/" + e;
  },
  Ou = {},
  ze = function (t, n, o) {
    let i = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const r = document.querySelector("meta[property=csp-nonce]"),
        a =
          (r == null ? void 0 : r.nonce) ||
          (r == null ? void 0 : r.getAttribute("nonce"));
      i = Promise.all(
        n.map((s) => {
          if (((s = fx(s)), s in Ou)) return;
          Ou[s] = !0;
          const l = s.endsWith(".css"),
            c = l ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${s}"]${c}`)) return;
          const u = document.createElement("link");
          if (
            ((u.rel = l ? "stylesheet" : dx),
            l || ((u.as = "script"), (u.crossOrigin = "")),
            (u.href = s),
            a && u.setAttribute("nonce", a),
            document.head.appendChild(u),
            l)
          )
            return new Promise((f, h) => {
              u.addEventListener("load", f),
                u.addEventListener("error", () =>
                  h(new Error(`Unable to preload CSS for ${s}`))
                );
            });
        })
      );
    }
    return i
      .then(() => t())
      .catch((r) => {
        const a = new Event("vite:preloadError", {
          cancelable: !0,
        });
        if (((a.payload = r), window.dispatchEvent(a), !a.defaultPrevented))
          throw r;
      });
  },
  Ao = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [o, i] of t) n[o] = i;
    return n;
  },
  hx = {
    components: {},
    mounted() {
      this.setCurrentMenuItem();
    },
    watch: {
      $route() {
        this.setCurrentMenuItem();
      },
    },
    data: function () {
      return {
        currentItem: "",
      };
    },
    methods: {
      setCurrentMenuItem() {
        if (((this.currentItem = ""), this.$route.path === "/")) {
          this.currentItem = "mining";
          return;
        }
        for (const e of this.menuItems)
          if (this.$route.path.startsWith(e.route)) {
            this.currentItem = e.key;
            return;
          }
      },
    },
    computed: {
      isCanTakeQuestRewards() {
        return (
          Object.values(this.uDailyRewards).some((e) => e === "canTake") ||
          Object.values(this.uQuests).some((e) => e.isRewarded === !1)
        );
      },
      isCanTakeFriendsRewards() {
        return Object.values(this.uFriends).some((e) => e.bonusToTake > 0);
      },
      menuItems() {
        return [
          {
            route: "/improve",
            key: "improve",
            title: this.t("Improve"),
            icon: "fire",
            isDot: !1,
          },
          {
            route: "/city2",
            key: "city2",
            title: this.t("City"),
            icon: "shop",
            isDot: !1,
          },
          {
            route: "/mining",
            key: "mining",
            title: this.t("Mining"),
            icon: "wap-home",
            isDot: !1,
          },
          {
            route: "/friends",
            key: "friends",
            title: this.t("Friends"),
            icon: "friends",
            isDot: this.isCanTakeFriendsRewards,
          },
          {
            route: "/quests",
            key: "quests",
            title: this.t("Quests"),
            icon: "completed",
            isDot: this.isCanTakeQuestRewards,
          },
        ];
      },
    },
  },
  gx = {
    class: "BottomBar",
  };
function mx(e, t, n, o, i, r) {
  const a = He("van-tabbar-item"),
    s = He("van-tabbar");
  return (
    me(),
    ke("div", gx, [
      d(
        s,
        {
          modelValue: e.currentItem,
          "onUpdate:modelValue": t[0] || (t[0] = (l) => (e.currentItem = l)),
          onChange: t[1] || (t[1] = (l) => e._vibrate()),
          class: "mainTabBar",
        },
        {
          default: ge(() => [
            (me(!0),
            ke(
              Ve,
              null,
              Hi(
                r.menuItems,
                (l) => (
                  me(),
                  Pt(
                    a,
                    {
                      key: l.key,
                      to: l.route,
                      name: l.key,
                      icon: l.icon,
                      dot: l.isDot,
                      class: "mainTabBarItem",
                    },
                    Im(
                      {
                        default: ge(() => [Se(X(l.title) + " ", 1)]),
                        _: 2,
                      },
                      [
                        l.key === "mining"
                          ? {
                              name: "icon",
                              fn: ge(() => [
                                F(
                                  "div",
                                  {
                                    class: At([
                                      "avatar",
                                      {
                                        active: e.currentItem === l.key,
                                      },
                                    ]),
                                    style: Nt(
                                      e._getSkinStyle(
                                        e.uProfile.skin,
                                        e.uHero.level
                                      )
                                    ),
                                  },
                                  null,
                                  6
                                ),
                              ]),
                              key: "0",
                            }
                          : void 0,
                      ]
                    ),
                    1032,
                    ["to", "name", "icon", "dot"]
                  )
                )
              ),
              128
            )),
          ]),
          _: 1,
        },
        8,
        ["modelValue"]
      ),
    ])
  );
}
const vx = Ao(hx, [
    ["render", mx],
    ["__scopeId", "data-v-f7234cb5"],
  ]),
  yx = {
    name: "Progressbar-g",
    props: {
      height: {
        type: Number,
        default: 15,
      },
      percent: {
        type: Number,
        default: 1,
      },
      textColor: {
        type: String,
        default() {
          return "#000";
        },
      },
      text: {
        type: String,
        default: "",
      },
      color: {
        type: String,
        default: "#008C00FF",
      },
      bgColor: {
        type: String,
        default: "#b6b6b6",
      },
    },
    data() {
      return {};
    },
    methods: {
      toggleTooltip() {},
    },
  };
function bx(e, t, n, o, i, r) {
  return (
    me(),
    ke(
      "div",
      {
        class: "progressBar txtShd",
        style: Nt({
          height: n.height + "px",
          background: n.bgColor,
        }),
      },
      [
        F(
          "div",
          {
            class: "text",
            style: Nt({
              lineHeight: Math.round(n.height * 1) + "px",
              fontSize: Math.round(n.height * 0.8) + "px",
              color: n.textColor,
              textShadow: "0 0px 2px #fff",
            }),
          },
          X(n.text),
          5
        ),
        F(
          "div",
          {
            class: "bar",
            style: Nt({
              width: `${n.percent}%`,
              height: n.height + "px",
              background: n.color,
            }),
          },
          null,
          4
        ),
      ],
      4
    )
  );
}
const px = Ao(yx, [
    ["render", bx],
    ["__scopeId", "data-v-8e20d87d"],
  ]),
  wx = {
    components: {},
    async created() {},
    async mounted() {
      this.updateState(), await this.render();
    },
    data() {
      return {
        title: "",
        isShowButtonNext: !1,
        isTypeProcess: !1,
      };
    },
    computed: {
      dbOnboardingByKey() {
        return this._arrayByKey(this.dbOnboarding, "key");
      },
      currentOnboarding() {
        if (this.isAbTestOnboardingHide || !this.stores.state.isAfterDataLoaded)
          return this.$emit("onboarding", !1), null;
        let t = this.dbOnboarding
          .filter(
            (n) =>
              this.uHero.level >= n.minHeroLevel &&
              this.uHero.level <= n.maxHeroLevel
          )
          .sort((n, o) => n.key - o.key)
          .find(
            (n) => !this._isOnboardingComplete([n.key]) && this.checkShow(n)
          );
        return t
          ? t.action === "/improve" && this.$route.path === "/improve"
            ? (this.$emit("onboarding", !1), null)
            : ((t.title = t.title
                .replace(
                  "{skill_profit_per_tap_power}",
                  this.dbSkillsByKey.profit_per_tap_power.title
                )
                .replace("{skill_sport}", this.dbSkillsByKey.sport.title)
                .replace("{mining}", this.t("Mining"))
                .replace("{quests}", this.t("Quests"))
                .replace("{improve}", this.t("Improve"))
                .replace("{home}", this.t("Mining"))),
              (t.actionTitle = t.actionTitle
                .replace("{mining}", this.t("Mining"))
                .replace("{quests}", this.t("Quests"))
                .replace("{improve}", this.t("Improve"))
                .replace("{home}", this.t("Mining"))),
              t)
          : (this.$emit("onboarding", !1), null);
      },
    },
    watch: {
      async currentOnboarding(e, t) {
        this.updateState(),
          e &&
            e.title !== (t == null ? void 0 : t.title) &&
            (this.isTypeProcess || (await this.render()));
      },
    },
    methods: {
      async render() {
        if (
          ((this.title = ""),
          (this.isShowButtonNext = !1),
          this.currentOnboarding)
        ) {
          let e = 0,
            t = this.currentOnboarding.title;
          for (this.isTypeProcess = !0; e !== t.length; )
            (this.title += t[e++]), await this._delay(25);
          await this._delay(150),
            (this.isShowButtonNext = !0),
            (this.isTypeProcess = !1);
        }
      },
      updateState() {
        this.$emit("onboarding", !!this.currentOnboarding);
      },
      async onboardClick() {
        this.currentOnboarding.action &&
          (this.$router.push("/empty"),
          await this._delay(20),
          this.$router.push(this.currentOnboarding.action)),
          this.currentOnboarding.isCompleteAfterClick &&
            (await this._completeOnboarding([this.currentOnboarding.key]));
      },
      checkShow(e) {
        var t, n, o, i;
        switch (e.needToShowMethodCheck) {
          case "":
            return !0;
          case "notImproveProfitPerTapPower":
            return !("profit_per_tap_power" in this.uSkills);
          case "notImproveSport":
            return !("sport" in this.uSkills);
          case "notClaimQuestProfitPerTapPower":
            return !(
              (t = this.uQuests.filter(
                (r) => r.key === "improve_profit_per_tap_power"
              )[0]) != null && t.isRewarded
            );
          case "notClaimQuestImproveSport":
            return !(
              (n = this.uQuests.filter((r) => r.key === "improve_sport")[0]) !=
                null && n.isRewarded
            );
          case "notClaimQuestTg":
            return !(
              (o = this.uQuests.filter((r) => r.key === "join_tg")[0]) !=
                null && o.isRewarded
            );
          case "notClaimQuestYt":
            return !(
              (i = this.uQuests.filter((r) => r.key === "join_yt")[0]) !=
                null && i.isRewarded
            );
          case "notClaimDailyReward1":
            return this.uDailyRewards[1] === "canTake";
          case "notClaimDailyReward":
            return Object.values(this.uDailyRewards).includes("canTake");
        }
        return !0;
      },
    },
  },
  Sx = {
    key: 0,
    class: "right",
    style: {
      "margin-top": "5px",
    },
  };
function Cx(e, t, n, o, i, r) {
  const a = He("van-icon"),
    s = He("van-button");
  return r.currentOnboarding && i.title.length > 0
    ? (me(),
      ke(
        "div",
        {
          key: 0,
          class: "onboarding",
          onClick:
            t[0] ||
            (t[0] = (l) => (i.isShowButtonNext ? r.onboardClick() : !1)),
        },
        [
          d(a, {
            name: "info",
            color: "#fbcc54",
          }),
          Se(" " + X(i.title) + " ", 1),
          i.isShowButtonNext && r.currentOnboarding.actionTitle
            ? (me(),
              ke("div", Sx, [
                d(
                  s,
                  {
                    size: "mini",
                    type: "primary",
                    icon: "arrow",
                    "icon-position": "right",
                  },
                  {
                    default: ge(() => [
                      Se(X(r.currentOnboarding.actionTitle), 1),
                    ]),
                    _: 1,
                  }
                ),
              ]))
            : mt("", !0),
        ]
      ))
    : mt("", !0);
}
const _x = Ao(wx, [
    ["render", Cx],
    ["__scopeId", "data-v-9489bda9"],
  ]),
  kx = {
    components: {
      Onboarding: _x,
      Progressbar: px,
    },
    async created() {
      this.localSettings = this.uSettings;
    },
    mounted() {},
    props: {},
    data: function () {
      return {
        isMenuOpen: !1,
        isShowPphPopup: !1,
        isShowMoneyPopup: !1,
        localSettings: {},
        isShowLangPicker: !1,
        isConnectFriendPopup: !1,
        connectFriendLink: "",
        isConnectFriendProgress: !1,
        isShowOnboardingState: !1,
        isSupportPopupShow: !1,
        supportFaqValue: [],
      };
    },
    computed: {
      isNoBg() {
        return this.stores.state.topBar.isNoBg;
      },
      isNeedBg() {
        return this.stores.state.topBar.isNeedBg;
      },
      isShowPph() {
        return this.stores.state.topBar.isShowPph;
      },
      isShowMoney() {
        return this.stores.state.topBar.isShowMoney;
      },
      isShowLottery() {
        return this.stores.state.topBar.isShowLottery;
      },
      isShowAvatar() {
        return this.stores.state.topBar.isShowAvatar;
      },
      isShowOnboarding() {
        return this.isShowOnboardingState;
      },
      isCanConnectFriend() {
        return (
          "isCanConnectFriend" in this.uProfile &&
          this.uProfile.isCanConnectFriend
        );
      },
      firstLang() {
        return this.dbLangByKey.en;
      },
      userLang() {
        var e, t;
        if (
          ((e = window.Telegram.WebApp.WebAppUser) == null
            ? void 0
            : e.language_code.length) > 0
        ) {
          const n =
            (t = window.Telegram.WebApp.WebAppUser) == null
              ? void 0
              : t.language_code.substring(0, 2);
          if (n in this.dbLangByKey) return this.dbLangByKey[n];
        }
        return null;
      },
      langByFirstLetter() {
        let e = this.dbLang;
        return (
          e.sort((t, n) => t.key.localeCompare(n.key)),
          e.reduce((t, n) => {
            const o = n.key[0];
            return t[o] || (t[o] = []), t[o].push(n), t;
          }, {})
        );
      },
    },
    watch: {},
    methods: {
      setOnboardingState(e) {
        this.isShowOnboardingState = e;
      },
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
      async showPphPopup() {
        (this.isShowPphPopup = !0),
          await this._completeOnboarding(this.onBoard.pph);
      },
      async showMoneyPopup() {
        (this.isShowMoneyPopup = !0),
          await this._completeOnboarding(this.onBoard.money);
      },
      async onLangSelect(e) {
        (this.localSettings.lang = e),
          (this.isShowLangPicker = !1),
          e === "en" && (this.dbTranslation = []);
        try {
          await this.saveSetting();
          try {
            await this.dbLoadDbData(["dbTranslation"]);
          } catch (t) {
            console.log("Error: %o", t);
          }
        } catch (t) {
          console.log("Error: %o", t);
        }
      },
      async saveSetting(e = "") {
        this.stores.user.setSettings(this.localSettings),
          await this.apiCall("setSettings", this.localSettings);
      },
      improveAction() {
        (this.isShowPphPopup = !1),
          (this.isShowMoneyPopup = !1),
          this.$router.push("/improve");
      },
      storeCardsAction() {
        (this.isShowPphPopup = !1),
          (this.isShowMoneyPopup = !1),
          this.$router.push("/store/cards");
      },
      async connectFriend() {
        if (this.connectFriendLink.length < 5) return !1;
        this.isConnectFriendProgress = !0;
        try {
          const e = await this.apiCall("connectFriend", this.connectFriendLink);
          this.stores.user.setHero(e.hero),
            this.stores.user.setProfile(e.profile);
        } catch (e) {
          this._catchError(e);
        }
        this.isConnectFriendProgress = !1;
      },
    },
  },
  lt = (e) => (el("data-v-902b0e6d"), (e = e()), tl(), e),
  xx = {
    style: {
      padding: "15px 15px 0 15px",
    },
  },
  Tx = {
    width: "100%",
  },
  Ex = {
    style: {
      position: "absolute",
      bottom: "7px",
      left: "-3px",
    },
  },
  Px = {
    style: {
      color: "#fff",
      "font-weight": "bold",
      "font-size": "17px",
      "text-shadow": "0 0 2px #000",
    },
  },
  Ax = {
    style: {
      position: "absolute",
      bottom: "-2px",
      left: "-2px",
      width: "62px",
      border: "1px solid #000",
    },
  },
  Ix = {
    style: {
      padding: "0 10px",
    },
  },
  Rx = {
    style: {
      "font-size": "18px",
      display: "flex",
      "justify-content": "space-between",
    },
  },
  Ox = {
    class: "nowrap value",
  },
  Bx = lt(() =>
    F(
      "span",
      {
        class: "pph16",
      },
      null,
      -1
    )
  ),
  Dx = {
    style: {
      color: "#fff",
      "font-size": "1.3em",
      "font-weight": "bold",
    },
  },
  $x = lt(() =>
    F(
      "span",
      {
        class: "pph24",
      },
      null,
      -1
    )
  ),
  Lx = lt(() => F("br", null, null, -1)),
  Mx = lt(() => F("br", null, null, -1)),
  Fx = lt(() => F("br", null, null, -1)),
  Vx = {
    key: 0,
    class: "improvesLines goldLines",
  },
  Nx = {
    class: "goldText",
    style: {
      margin: "0",
    },
  },
  Hx = {
    key: 1,
  },
  zx = lt(() => F("br", null, null, -1)),
  jx = {
    class: "nowrap",
  },
  Ux = {
    class: "nowrap value",
  },
  Wx = lt(() =>
    F(
      "span",
      {
        class: "money18",
      },
      null,
      -1
    )
  ),
  qx = {
    style: {
      color: "#fff",
      "font-size": "1.3em",
      "font-weight": "bold",
    },
  },
  Yx = lt(() =>
    F(
      "span",
      {
        class: "money22",
      },
      null,
      -1
    )
  ),
  Kx = lt(() => F("br", null, null, -1)),
  Zx = lt(() => F("br", null, null, -1)),
  Gx = lt(() => F("br", null, null, -1)),
  Qx = lt(() => F("br", null, null, -1)),
  Xx = lt(() => F("br", null, null, -1)),
  Jx = lt(() => F("br", null, null, -1)),
  eT = {
    key: 2,
    class: "metric clicked",
  },
  tT = lt(() => F("br", null, null, -1)),
  nT = lt(() => F("br", null, null, -1)),
  oT = lt(() => F("br", null, null, -1)),
  iT = {
    class: "center",
  },
  rT = {
    style: {
      "font-size": "2em",
    },
  },
  aT = {
    style: {
      "font-size": "2em",
    },
  },
  sT = {
    style: {
      "font-size": "2em",
    },
  },
  lT = {
    class: "container center",
  },
  cT = {
    class: "center",
  },
  uT = {
    class: "container faq",
  },
  dT = lt(() =>
    F(
      "h2",
      {
        class: "center",
      },
      "FAQ",
      -1
    )
  ),
  fT = {
    class: "faqItemContent",
  },
  hT = {
    class: "faqItemContent",
  },
  gT = {
    class: "faqItemContent",
  },
  mT = {
    class: "faqItemContent",
  },
  vT = {
    class: "faqItemContent",
  },
  yT = {
    class: "faqItemContent",
  },
  bT = {
    class: "faqItemContent",
  },
  pT = lt(() =>
    F(
      "a",
      {
        href: "https://t.me/muskempire",
        target: "_blank",
      },
      "https://t.me/muskempire",
      -1
    )
  ),
  wT = {
    class: "faqItemContent",
  },
  ST = {
    class: "faqItemContent",
  };
function CT(e, t, n, o, i, r) {
  const a = He("Progressbar"),
    s = He("onboarding"),
    l = He("van-icon"),
    c = He("van-button"),
    u = He("van-count-down"),
    f = He("van-popup"),
    h = He("van-switch"),
    g = He("van-cell"),
    S = He("van-cell-group"),
    p = He("van-index-anchor"),
    y = He("van-index-bar"),
    v = He("van-field"),
    m = He("van-collapse-item"),
    b = He("van-collapse");
  return (
    me(),
    ke(
      "div",
      {
        class: At([
          "topBar",
          {
            needBg: r.isNeedBg,
            noBg: r.isNoBg && !r.isNeedBg,
          },
        ]),
      },
      [
        F("div", xx, [
          F("table", Tx, [
            F("tr", null, [
              r.isShowAvatar
                ? (me(),
                  ke(
                    "td",
                    {
                      key: 0,
                      style: {
                        width: "60px",
                      },
                      onClick: t[0] || (t[0] = (w) => e.$router.push("/hero")),
                    },
                    [
                      F(
                        "div",
                        {
                          class: "clicked avatarBox",
                          style: Nt(
                            e._getSkinStyle(e.uProfile.skin, e.uHero.level)
                          ),
                        },
                        [
                          F("div", Ex, [
                            F(
                              "div",
                              Px,
                              X(e.t("Lv.")) + " " + X(e.uHero.level),
                              1
                            ),
                          ]),
                          F("div", Ax, [
                            d(
                              a,
                              {
                                height: 10,
                                color:
                                  "linear-gradient( 135deg, #FFB320 10%, #FFF6A8 100%)",
                                "bg-color": "#000",
                                percent: e.uLevelPercent,
                                text: e.uLevelPercent + "%",
                              },
                              null,
                              8,
                              ["percent", "text"]
                            ),
                          ]),
                        ],
                        4
                      ),
                    ]
                  ))
                : mt("", !0),
              F("td", Ix, [
                F("div", Rx, [
                  st(
                    d(
                      s,
                      {
                        onOnboarding: r.setOnboardingState,
                      },
                      null,
                      8,
                      ["onOnboarding"]
                    ),
                    [[ft, r.isShowOnboarding]]
                  ),
                  r.isShowPph && !r.isShowOnboarding
                    ? (me(),
                      ke(
                        "div",
                        {
                          key: 0,
                          class: "metric",
                          onClick:
                            t[1] ||
                            (t[1] = (...w) =>
                              r.showPphPopup && r.showPphPopup(...w)),
                          id: "profit",
                        },
                        [
                          F(
                            "div",
                            {
                              class: At([
                                "nowrap",
                                {
                                  goldLightText:
                                    e.uPurchase.extendedOfflineTimeLeft > 0,
                                },
                              ]),
                            },
                            [
                              e.uPurchase.extendedOfflineTimeLeft
                                ? (me(),
                                  Pt(l, {
                                    key: 0,
                                    name: "star",
                                  }))
                                : mt("", !0),
                              Se(" " + X(e.t("Profit per Hour")) + " ", 1),
                              e._isOnboardingComplete(e.onBoard.pph)
                                ? mt("", !0)
                                : (me(),
                                  Pt(l, {
                                    key: 1,
                                    name: "question",
                                  })),
                            ],
                            2
                          ),
                          F("div", Ox, [
                            Bx,
                            Se(),
                            F(
                              "span",
                              {
                                class: At({
                                  goldText:
                                    e.uPurchase.extendedOfflineTimeLeft > 0,
                                }),
                              },
                              "+" + X(e._numberShort(e.uHero.moneyPerHour)),
                              3
                            ),
                          ]),
                        ]
                      ))
                    : mt("", !0),
                  d(
                    f,
                    {
                      show: e.isShowPphPopup,
                      "onUpdate:show":
                        t[2] || (t[2] = (w) => (e.isShowPphPopup = w)),
                      round: "",
                      position: "top",
                      class: "center metricPopUp",
                    },
                    {
                      default: ge(() => [
                        F("div", Dx, X(e.t("Profit per Hour")), 1),
                        F("div", null, [
                          $x,
                          Se(" +" + X(e._number(e.uHero.moneyPerHour)), 1),
                        ]),
                        F(
                          "p",
                          null,
                          X(
                            e.t(
                              "To increase your Profit Per Hour, buy new improvements."
                            )
                          ),
                          1
                        ),
                        d(
                          c,
                          {
                            type: "primary",
                            onClick: r.improveAction,
                            round: "",
                            size: "small",
                          },
                          {
                            default: ge(() => [
                              Se(X(e.t("Go to the Improvement menu")), 1),
                            ]),
                            _: 1,
                          },
                          8,
                          ["onClick"]
                        ),
                        Lx,
                        Mx,
                        Fx,
                        e.uPurchase.extendedOfflineTimeLeft &&
                        e.uPurchase.extendedOfflineTimeLeft > 0
                          ? (me(),
                            ke("div", Vx, [
                              F(
                                "h3",
                                Nx,
                                X(e.t("You have an Offline Boost active")),
                                1
                              ),
                              F("p", null, [
                                Se(X(e.t("There's a offline boost")) + " ", 1),
                                d(
                                  u,
                                  {
                                    time:
                                      e.uPurchase.extendedOfflineTimeLeft * 1e3,
                                  },
                                  null,
                                  8,
                                  ["time"]
                                ),
                              ]),
                              d(
                                c,
                                {
                                  type: "warning",
                                  onClick: r.storeCardsAction,
                                  round: "",
                                  size: "small",
                                  icon: "star",
                                },
                                {
                                  default: ge(() => [
                                    Se(X(e.t("Go to Store")), 1),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["onClick"]
                              ),
                            ]))
                          : (me(),
                            ke("div", Hx, [
                              F(
                                "p",
                                null,
                                X(
                                  e.t(
                                    "You will make a profit even when you are offline for up to 3 hours."
                                  )
                                ) +
                                  " " +
                                  X(
                                    e.t(
                                      "Log in more often to collect more profits."
                                    )
                                  ),
                                1
                              ),
                              F(
                                "p",
                                null,
                                X(
                                  e.t(
                                    "You can increase the offline time you are credited for by purchasing an Offline Boost from the Premium Store"
                                  )
                                ),
                                1
                              ),
                              d(
                                c,
                                {
                                  type: "warning",
                                  onClick: r.storeCardsAction,
                                  round: "",
                                  size: "small",
                                  icon: "star",
                                },
                                {
                                  default: ge(() => [
                                    Se(X(e.t("Go to Store")), 1),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["onClick"]
                              ),
                            ])),
                        zx,
                      ]),
                      _: 1,
                    },
                    8,
                    ["show"]
                  ),
                  r.isShowMoney && !r.isShowOnboarding
                    ? (me(),
                      ke(
                        "div",
                        {
                          key: 1,
                          class: "metric",
                          id: "money",
                          onClick:
                            t[3] ||
                            (t[3] = (...w) =>
                              r.showMoneyPopup && r.showMoneyPopup(...w)),
                        },
                        [
                          F("div", jx, [
                            Se(X(e.t("Money")) + " ", 1),
                            e._isOnboardingComplete(e.onBoard.money)
                              ? mt("", !0)
                              : (me(),
                                Pt(l, {
                                  key: 0,
                                  name: "question",
                                })),
                          ]),
                          F("div", Ux, [
                            Wx,
                            Se(" " + X(e._numberShort(e.uHero.money)), 1),
                          ]),
                        ]
                      ))
                    : mt("", !0),
                  d(
                    f,
                    {
                      show: e.isShowMoneyPopup,
                      "onUpdate:show":
                        t[4] || (t[4] = (w) => (e.isShowMoneyPopup = w)),
                      round: "",
                      position: "top",
                      class: "center metricPopUp",
                    },
                    {
                      default: ge(() => [
                        F("div", qx, X(e.t("Money")), 1),
                        F("div", null, [
                          Yx,
                          Se(" " + X(e._number(e.uHero.money)), 1),
                        ]),
                        F("p", null, [
                          Se(X(e.t("How to get more money:")), 1),
                          Kx,
                          F("span", null, "- " + X(e.t("Complete Quests")), 1),
                          Zx,
                          F(
                            "span",
                            null,
                            "- " + X(e.t("Invite more friends")),
                            1
                          ),
                          Gx,
                          F(
                            "span",
                            null,
                            "- " + X(e.t("Participate in Negotiations")),
                            1
                          ),
                          Qx,
                          F("span", null, "- " + X(e.t("Tap")), 1),
                          Xx,
                          F(
                            "span",
                            null,
                            "- " + X(e.t("Invest in the Stock Exchange")),
                            1
                          ),
                          Jx,
                        ]),
                        F(
                          "p",
                          null,
                          X(
                            e.t(
                              "By buying improvements, you increase your experience and level."
                            )
                          ),
                          1
                        ),
                      ]),
                      _: 1,
                    },
                    8,
                    ["show"]
                  ),
                  r.isShowLottery &&
                  !r.isShowOnboarding &&
                  e.uHero.level > 2 &&
                  e.stores.state.isAfterDataLoaded
                    ? (me(),
                      ke("div", eT, [
                        this.uQuests.some(
                          (w) => w.key === "ton_wallet_transaction"
                        )
                          ? (me(),
                            ke("div", {
                              key: 1,
                              class: "banner hypezone",
                              onClick:
                                t[6] ||
                                (t[6] = (w) => e.$router.push("/content")),
                            }))
                          : (me(),
                            ke("div", {
                              key: 0,
                              class: "banner airdrop",
                              onClick:
                                t[5] ||
                                (t[5] = (w) => e.$router.push("/airdrop")),
                            })),
                      ]))
                    : mt("", !0),
                ]),
              ]),
              F(
                "td",
                {
                  style: {
                    width: "40px",
                    position: "relative",
                  },
                  class: At({
                    menuOpen: e.isMenuOpen,
                  }),
                },
                [
                  d(
                    l,
                    {
                      name: "wap-nav",
                      onClick: r.toggleMenu,
                      class: "menuBtn",
                    },
                    null,
                    8,
                    ["onClick"]
                  ),
                  d(
                    f,
                    {
                      show: e.isMenuOpen,
                      "onUpdate:show":
                        t[25] || (t[25] = (w) => (e.isMenuOpen = w)),
                      round: "",
                      position: "top",
                      "overlay-class": "overlayClass",
                      class: "settingPopup",
                      transition: e.isRtl
                        ? "van-slide-left"
                        : "van-slide-right",
                    },
                    {
                      default: ge(() => [
                        d(S, null, {
                          default: ge(() => [
                            d(
                              g,
                              {
                                center: "",
                                title: e.t("Vibrate"),
                                icon: "bulb-o",
                              },
                              {
                                "right-icon": ge(() => [
                                  d(
                                    h,
                                    {
                                      modelValue: e.localSettings.vibrate,
                                      "onUpdate:modelValue":
                                        t[7] ||
                                        (t[7] = (w) =>
                                          (e.localSettings.vibrate = w)),
                                      onClick: r.saveSetting,
                                    },
                                    null,
                                    8,
                                    ["modelValue", "onClick"]
                                  ),
                                ]),
                                _: 1,
                              },
                              8,
                              ["title"]
                            ),
                            d(
                              g,
                              {
                                center: "",
                                title: e.t("Language"),
                                value:
                                  e.dbLangByKey[e.localSettings.lang].title,
                                icon: "chat",
                                "is-link": "",
                                "arrow-direction": "down",
                                onClick:
                                  t[8] ||
                                  (t[8] = (w) => (e.isShowLangPicker = !0)),
                              },
                              null,
                              8,
                              ["title", "value"]
                            ),
                            d(
                              g,
                              {
                                center: "",
                                title: e.t("Rating"),
                                "is-link": "",
                                to: "/rating",
                                onClick:
                                  t[9] ||
                                  (t[9] = (w) => {
                                    e.isMenuOpen = !1;
                                  }),
                                icon: "award",
                              },
                              null,
                              8,
                              ["title"]
                            ),
                            d(
                              g,
                              {
                                center: "",
                                title: e.t("Tutorial"),
                                "is-link": "",
                                onClick:
                                  t[10] ||
                                  (t[10] = (w) => e._resetOnboarding()),
                                icon: "question",
                              },
                              null,
                              8,
                              ["title"]
                            ),
                            this.localSettings.lang === "ru"
                              ? (me(),
                                Pt(
                                  g,
                                  {
                                    key: 0,
                                    center: "",
                                    title: e.t("Video tutorials"),
                                    "is-link": "",
                                    onClick:
                                      t[11] ||
                                      (t[11] = (w) =>
                                        e._openUrl(
                                          "https://www.youtube.com/watch?v=TUBWm1TjRNE"
                                        )),
                                    icon: "tv-o",
                                  },
                                  null,
                                  8,
                                  ["title"]
                                ))
                              : (me(),
                                Pt(
                                  g,
                                  {
                                    key: 1,
                                    center: "",
                                    title: e.t("Video tutorials"),
                                    "is-link": "",
                                    onClick:
                                      t[12] ||
                                      (t[12] = (w) =>
                                        e._openUrl(
                                          "https://www.youtube.com/watch?v=rxltFZiroR8"
                                        )),
                                    icon: "tv-o",
                                  },
                                  null,
                                  8,
                                  ["title"]
                                )),
                          ]),
                          _: 1,
                        }),
                        tT,
                        d(S, null, {
                          default: ge(() => [
                            d(g, {
                              center: "",
                              title: "Airdrop",
                              "is-link": "",
                              to: "/airdrop",
                              onClick:
                                t[13] ||
                                (t[13] = (w) => {
                                  e.isMenuOpen = !1;
                                }),
                              icon: "gem",
                            }),
                          ]),
                          _: 1,
                        }),
                        nT,
                        d(S, null, {
                          default: ge(() => [
                            d(
                              g,
                              {
                                center: "",
                                title: e.t("Our Telegram channel"),
                                "is-link": "",
                                onClick: e._ourTgClick,
                                icon: "like",
                              },
                              null,
                              8,
                              ["title", "onClick"]
                            ),
                            d(
                              g,
                              {
                                center: "",
                                title: e.t("Support"),
                                "is-link": "",
                                onClick:
                                  t[14] ||
                                  (t[14] = (w) => (e.isSupportPopupShow = !0)),
                                icon: "service",
                              },
                              null,
                              8,
                              ["title"]
                            ),
                            this.localSettings.lang !== "en"
                              ? (me(),
                                Pt(
                                  g,
                                  {
                                    key: 0,
                                    center: "",
                                    title: e.t("Tell about the mistranslation"),
                                    "is-link": "",
                                    to: "/translations",
                                    onClick:
                                      t[15] ||
                                      (t[15] = (w) => {
                                        e.isMenuOpen = !1;
                                      }),
                                    icon: "wechat",
                                  },
                                  null,
                                  8,
                                  ["title"]
                                ))
                              : mt("", !0),
                          ]),
                          _: 1,
                        }),
                        r.isCanConnectFriend
                          ? (me(),
                            ke(
                              Ve,
                              {
                                key: 0,
                              },
                              [
                                oT,
                                d(S, null, {
                                  default: ge(() => [
                                    d(
                                      g,
                                      {
                                        center: "",
                                        title: e.t(
                                          "Indicate the friend who invited me"
                                        ),
                                        "is-link": "",
                                        onClick:
                                          t[16] ||
                                          (t[16] = (w) =>
                                            (e.isConnectFriendPopup = !0)),
                                        icon: "friends",
                                      },
                                      null,
                                      8,
                                      ["title"]
                                    ),
                                  ]),
                                  _: 1,
                                }),
                              ],
                              64
                            ))
                          : mt("", !0),
                        d(
                          f,
                          {
                            show: e.isShowLangPicker,
                            "onUpdate:show":
                              t[19] ||
                              (t[19] = (w) => (e.isShowLangPicker = w)),
                            position: "bottom",
                            style: {
                              height: "80%",
                            },
                            closeable: "",
                          },
                          {
                            default: ge(() => [
                              F("h2", iT, X(e.t("Select language")), 1),
                              d(y, null, {
                                default: ge(() => [
                                  d(
                                    S,
                                    {
                                      inset: "",
                                    },
                                    {
                                      default: ge(() => [
                                        d(
                                          g,
                                          {
                                            title: r.firstLang.title,
                                            "is-link": "",
                                            value: r.firstLang.key,
                                            center: "",
                                            onClick:
                                              t[17] ||
                                              (t[17] = (w) =>
                                                r.onLangSelect(
                                                  r.firstLang.key
                                                )),
                                          },
                                          {
                                            icon: ge(() => [
                                              F(
                                                "span",
                                                rT,
                                                X(r.firstLang.icon) + " ",
                                                1
                                              ),
                                            ]),
                                            _: 1,
                                          },
                                          8,
                                          ["title", "value"]
                                        ),
                                        r.userLang
                                          ? (me(),
                                            Pt(
                                              g,
                                              {
                                                key: 0,
                                                title: r.userLang.title,
                                                "is-link": "",
                                                value: r.userLang.key,
                                                center: "",
                                                onClick:
                                                  t[18] ||
                                                  (t[18] = (w) =>
                                                    r.onLangSelect(
                                                      r.userLang.key
                                                    )),
                                              },
                                              {
                                                icon: ge(() => [
                                                  F(
                                                    "span",
                                                    aT,
                                                    X(r.userLang.icon) + " ",
                                                    1
                                                  ),
                                                ]),
                                                _: 1,
                                              },
                                              8,
                                              ["title", "value"]
                                            ))
                                          : mt("", !0),
                                      ]),
                                      _: 1,
                                    }
                                  ),
                                  (me(!0),
                                  ke(
                                    Ve,
                                    null,
                                    Hi(
                                      r.langByFirstLetter,
                                      (w, C) => (
                                        me(),
                                        ke(
                                          Ve,
                                          {
                                            key: C,
                                          },
                                          [
                                            d(
                                              p,
                                              {
                                                index: C,
                                              },
                                              null,
                                              8,
                                              ["index"]
                                            ),
                                            d(
                                              S,
                                              {
                                                inset: "",
                                              },
                                              {
                                                default: ge(() => [
                                                  (me(!0),
                                                  ke(
                                                    Ve,
                                                    null,
                                                    Hi(
                                                      w,
                                                      (k) => (
                                                        me(),
                                                        Pt(
                                                          g,
                                                          {
                                                            key: k.key,
                                                            title: k.title,
                                                            label: k.titleEn,
                                                            "is-link": "",
                                                            value: k.key,
                                                            center: "",
                                                            onClick: (I) =>
                                                              r.onLangSelect(
                                                                k.key
                                                              ),
                                                          },
                                                          {
                                                            icon: ge(() => [
                                                              F(
                                                                "span",
                                                                sT,
                                                                X(k.icon) + " ",
                                                                1
                                                              ),
                                                            ]),
                                                            _: 2,
                                                          },
                                                          1032,
                                                          [
                                                            "title",
                                                            "label",
                                                            "value",
                                                            "onClick",
                                                          ]
                                                        )
                                                      )
                                                    ),
                                                    128
                                                  )),
                                                ]),
                                                _: 2,
                                              },
                                              1024
                                            ),
                                          ],
                                          64
                                        )
                                      )
                                    ),
                                    128
                                  )),
                                ]),
                                _: 1,
                              }),
                            ]),
                            _: 1,
                          },
                          8,
                          ["show"]
                        ),
                        r.isCanConnectFriend
                          ? (me(),
                            Pt(
                              f,
                              {
                                key: 1,
                                show: e.isConnectFriendPopup,
                                "onUpdate:show":
                                  t[21] ||
                                  (t[21] = (w) => (e.isConnectFriendPopup = w)),
                                style: {
                                  "max-height": "80%",
                                  width: "100%",
                                },
                                position: "top",
                              },
                              {
                                default: ge(() => [
                                  F("div", lT, [
                                    F(
                                      "h2",
                                      cT,
                                      X(e.t("Connect with Friend")),
                                      1
                                    ),
                                    F(
                                      "p",
                                      null,
                                      X(
                                        e.t(
                                          "If you were invited by a friend, but for some reason you didn't connect with it and didn't receive bonuses, you can join this friend manually."
                                        )
                                      ),
                                      1
                                    ),
                                    F(
                                      "p",
                                      null,
                                      X(
                                        e.t(
                                          "This option is available for the first 24 hours after register"
                                        )
                                      ),
                                      1
                                    ),
                                    F(
                                      "p",
                                      null,
                                      X(
                                        e.t(
                                          "Enter your friend's invite link or referral code:"
                                        )
                                      ),
                                      1
                                    ),
                                    d(S, null, {
                                      default: ge(() => [
                                        d(
                                          v,
                                          {
                                            modelValue: e.connectFriendLink,
                                            "onUpdate:modelValue":
                                              t[20] ||
                                              (t[20] = (w) =>
                                                (e.connectFriendLink = w)),
                                            center: "",
                                            autofocus: !0,
                                            clearable: "",
                                            class: "refCodeInput",
                                            placeholder: this.uProfile.refCode,
                                            style: {
                                              color: "#fff",
                                              "font-size": "1.1em",
                                            },
                                            border: !1,
                                          },
                                          null,
                                          8,
                                          ["modelValue", "placeholder"]
                                        ),
                                      ]),
                                      _: 1,
                                    }),
                                    d(
                                      c,
                                      {
                                        type: "primary",
                                        style: {
                                          "margin-top": "10px",
                                        },
                                        loading: e.isConnectFriendProgress,
                                        "loading-text": e.t(
                                          "Connecting a friend..."
                                        ),
                                        onClick: r.connectFriend,
                                      },
                                      {
                                        default: ge(() => [
                                          Se(X(e.t("Connect a friend ")), 1),
                                        ]),
                                        _: 1,
                                      },
                                      8,
                                      ["loading", "loading-text", "onClick"]
                                    ),
                                  ]),
                                ]),
                                _: 1,
                              },
                              8,
                              ["show"]
                            ))
                          : mt("", !0),
                        d(
                          f,
                          {
                            show: e.isSupportPopupShow,
                            "onUpdate:show":
                              t[24] ||
                              (t[24] = (w) => (e.isSupportPopupShow = w)),
                            position: "bottom",
                            closeable: "",
                          },
                          {
                            default: ge(() => [
                              F("div", uT, [
                                dT,
                                F(
                                  "p",
                                  null,
                                  X(
                                    e.t(
                                      "Before contacting support, please check the FAQ section for your question."
                                    )
                                  ),
                                  1
                                ),
                                F(
                                  "p",
                                  null,
                                  X(
                                    e.t(
                                      "Here, you’ll find answers to the most frequently asked questions from users."
                                    )
                                  ),
                                  1
                                ),
                                d(
                                  b,
                                  {
                                    modelValue: e.supportFaqValue,
                                    "onUpdate:modelValue":
                                      t[23] ||
                                      (t[23] = (w) => (e.supportFaqValue = w)),
                                  },
                                  {
                                    default: ge(() => [
                                      d(
                                        m,
                                        {
                                          name: "1",
                                          border: !1,
                                        },
                                        {
                                          title: ge(() => [
                                            Se(
                                              X(
                                                e.t(
                                                  "My friend doesn't show up in the list"
                                                )
                                              ),
                                              1
                                            ),
                                          ]),
                                          default: ge(() => [
                                            F("div", fT, [
                                              F(
                                                "p",
                                                null,
                                                X(
                                                  e.t(
                                                    "If the invited friend does not appear in your friends list, please ask them to enter your referral code in the [Indicate the friend who invited me] section. This section is located in the menu in the top right corner of the screen."
                                                  )
                                                ),
                                                1
                                              ),
                                              F(
                                                "p",
                                                null,
                                                X(
                                                  e.t(
                                                    "This option is available within 3 days after registration. If too much time has passed, it will not be possible to add a friend to the list."
                                                  )
                                                ),
                                                1
                                              ),
                                              F(
                                                "p",
                                                null,
                                                X(
                                                  e.t(
                                                    "If three days have passed, your friend can delete the account and try using the link again."
                                                  )
                                                ),
                                                1
                                              ),
                                            ]),
                                          ]),
                                          _: 1,
                                        }
                                      ),
                                      d(
                                        m,
                                        {
                                          name: "2",
                                          border: !1,
                                        },
                                        {
                                          title: ge(() => [
                                            Se(
                                              X(
                                                e.t(
                                                  "I already have an account on Bybit. What should I do?"
                                                )
                                              ),
                                              1
                                            ),
                                          ]),
                                          default: ge(() => [
                                            F("div", hT, [
                                              F(
                                                "p",
                                                null,
                                                X(
                                                  e.t(
                                                    "You can complete our tasks only if you register a NEW account using the button in our task."
                                                  )
                                                ),
                                                1
                                              ),
                                            ]),
                                          ]),
                                          _: 1,
                                        }
                                      ),
                                      d(
                                        m,
                                        {
                                          name: "3",
                                          border: !1,
                                        },
                                        {
                                          title: ge(() => [
                                            Se(
                                              X(
                                                e.t(
                                                  "I can't receive the prize for subscribing to the channel."
                                                )
                                              ),
                                              1
                                            ),
                                          ]),
                                          default: ge(() => [
                                            F("div", gT, [
                                              F(
                                                "p",
                                                null,
                                                X(
                                                  e.t(
                                                    "You need to claim your reward in the [Quests] section."
                                                  )
                                                ),
                                                1
                                              ),
                                              F(
                                                "p",
                                                null,
                                                X(
                                                  e.t(
                                                    "Click “Join @muskempire” and then claim a reward."
                                                  )
                                                ),
                                                1
                                              ),
                                            ]),
                                          ]),
                                          _: 1,
                                        }
                                      ),
                                      d(
                                        m,
                                        {
                                          name: "4",
                                          border: !1,
                                        },
                                        {
                                          title: ge(() => [
                                            Se(
                                              X(
                                                e.t(
                                                  "How do I delete my account?"
                                                )
                                              ),
                                              1
                                            ),
                                          ]),
                                          default: ge(() => [
                                            F("div", mT, [
                                              F(
                                                "p",
                                                null,
                                                X(
                                                  e.t(
                                                    "To delete the account, you need to go to the section with account information. There, you will find the ”Delete account” button."
                                                  )
                                                ),
                                                1
                                              ),
                                              F(
                                                "p",
                                                null,
                                                X(
                                                  e.t(
                                                    "Please note that once deleted, you will not be able to recover your data!"
                                                  )
                                                ),
                                                1
                                              ),
                                            ]),
                                          ]),
                                          _: 1,
                                        }
                                      ),
                                      d(
                                        m,
                                        {
                                          name: "5",
                                          border: !1,
                                        },
                                        {
                                          title: ge(() => [
                                            Se(
                                              X(
                                                e.t(
                                                  "Why doesn't the daily reward carry over to the next day?"
                                                )
                                              ),
                                              1
                                            ),
                                          ]),
                                          default: ge(() => [
                                            F("div", vT, [
                                              F(
                                                "p",
                                                null,
                                                X(
                                                  e.t(
                                                    "If you can't receive the daily reward for the next day, it means you haven't met the condition of inviting friends. In the top right corner of the specific day's card, it indicates how many more friends you need to invite to receive the reward."
                                                  )
                                                ),
                                                1
                                              ),
                                            ]),
                                          ]),
                                          _: 1,
                                        }
                                      ),
                                      d(
                                        m,
                                        {
                                          name: "6",
                                          border: !1,
                                        },
                                        {
                                          title: ge(() => [
                                            Se(
                                              X(
                                                e.t(
                                                  "What are stars and how can you earn them?"
                                                )
                                              ),
                                              1
                                            ),
                                          ]),
                                          default: ge(() => [
                                            F("div", yT, [
                                              F(
                                                "p",
                                                null,
                                                X(
                                                  e.t(
                                                    "Telegram Stars are an internal currency of Telegram. You can purchase them via the link and use them in our Premium Store"
                                                  )
                                                ),
                                                1
                                              ),
                                            ]),
                                          ]),
                                          _: 1,
                                        }
                                      ),
                                      d(
                                        m,
                                        {
                                          name: "7",
                                          border: !1,
                                        },
                                        {
                                          title: ge(() => [
                                            Se(
                                              X(e.t("When is the Airdrop?")),
                                              1
                                            ),
                                          ]),
                                          default: ge(() => [
                                            F("div", bT, [
                                              F("p", null, [
                                                Se(
                                                  X(
                                                    e.t(
                                                      "Soon. Stay updated by following the latest information in our community:"
                                                    )
                                                  ) + " ",
                                                  1
                                                ),
                                                pT,
                                              ]),
                                            ]),
                                          ]),
                                          _: 1,
                                        }
                                      ),
                                      d(
                                        m,
                                        {
                                          name: "8",
                                          border: !1,
                                        },
                                        {
                                          title: ge(() => [
                                            Se(
                                              X(
                                                e.t(
                                                  "What is most important in negotiations?"
                                                )
                                              ),
                                              1
                                            ),
                                          ]),
                                          default: ge(() => [
                                            F("div", wT, [
                                              F(
                                                "p",
                                                null,
                                                X(
                                                  e.t(
                                                    "In the ”Negotiations” section, there is a detailed guide on how to participate in this activity. If players choose the same cards, the winner is determined by the level of development of certain skills. The first skill for comparison is ”Negotiations”."
                                                  )
                                                ),
                                                1
                                              ),
                                            ]),
                                          ]),
                                          _: 1,
                                        }
                                      ),
                                      d(
                                        m,
                                        {
                                          name: "11",
                                          border: !1,
                                        },
                                        {
                                          title: ge(() => [
                                            Se(
                                              X(e.t("I have another question")),
                                              1
                                            ),
                                          ]),
                                          default: ge(() => [
                                            F("div", ST, [
                                              d(
                                                c,
                                                {
                                                  onClick:
                                                    t[22] ||
                                                    (t[22] = (w) =>
                                                      e._openUrl(
                                                        "https://t.me/XEmpire_Support_Bot"
                                                      )),
                                                  type: "primary",
                                                  round: "",
                                                },
                                                {
                                                  default: ge(() => [
                                                    Se(
                                                      X(
                                                        e.t("Write to support")
                                                      ),
                                                      1
                                                    ),
                                                  ]),
                                                  _: 1,
                                                }
                                              ),
                                            ]),
                                          ]),
                                          _: 1,
                                        }
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  ["modelValue"]
                                ),
                              ]),
                            ]),
                            _: 1,
                          },
                          8,
                          ["show"]
                        ),
                      ]),
                      _: 1,
                    },
                    8,
                    ["show", "transition"]
                  ),
                ],
                2
              ),
            ]),
          ]),
        ]),
      ],
      2
    )
  );
}
const _T = Ao(kx, [
    ["render", CT],
    ["__scopeId", "data-v-902b0e6d"],
  ]),
  kT =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAC+CAMAAAAssKkMAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAkBQTFRFAAAA////RZv8////////////////////////////////////////////////////////////RZv8RZv8////////////////////////////////////////////RZv8////////////////////////////////////////RZv8////RZv8////RZz9////////////////////////////////////////////////////////////////////////////////////RZv8RZv8////////RZv8////R53+////////////////RZr6RZv8////////////////////////////////RZv8////////////////////////////SJ//////////////////RZz9RZv9SJ//////////RZr6////////////////UJ//////////RZv6R53+////////////////Rpz9////////R5z8RZv7////RZv8RZv7////////////////////////////////RZv8Rpv8////////////RZz9////RZv8////////////RZv7RZz9RZv8////RJv7////Rpv9////RZv7R5z9////RZv8////RZr7Rpz8RZv8Rpz9Rpz9RZz8RZv8RZv8RJz+Rp3+RZv8////RZv8RZv8RZv8QJ//////RZv8Rpv8RZv9RZv9QJ//Rpz9RZz8RZv8RZv8RZz8RZv8RZv8Rpz9RZr92pm1pAAAAMB0Uk5TAP//2abyJg2ZZr8TsnnfM7PMptmMCkD5LQb+69sDD/6juOBG0hQ4+vwB+wj8JKoe+xub8LA94e1IO67R5JTUycISFp+zi/cY9XAP5t4MrQz3MCuXfk31WauUoXspNo9D6QVthy60mKAIJ1cIihc/zwO9dAYaIR2l1r2R6AYFxIAR10+Dy/NVnkqOdmR3Up/Gf75hth8UcGcKIgVckQtySqgTZ6M/u1+cxQsOamopR+0DXtUmga0EzEW4h1ry0LEhSKQSXQAAC6RJREFUeJztnflDE0kWgKs9CIjKMkt0SEhCuBEChHDIraKyDIfLJYyosCDOwgBeKyre970z6s44juMx4+zMzrX3ff5r2+FMV1V310u6m4S878dOqrqrvlS96qpOFyEIgiAIgiAIgiAIEkP89uu3QLz56uJKX/Kq5n+/WwNk25crfc2rmh9+AhXiebXS17yqef+zbUAf5z5a6Wte3Vx8F2TEc+6dlb7i1c4nlyFCSn6x0tcbBxwV9/G3n6/0xcYFlwUje3EJ+rCETy4LxREP9ldWIRTZMZ5biEhkx/YBx33n/oNNQrSWUkk/0/Pxayp++FvFzvQg6Y7bsgqIMoqckjCBBCrx19o+zv1M+fWEgPi5quPViO2meCVJjTXKxPv2aMQRJp6nHAOcau9O6+ogurjuAFRTVZcy8am7qkY8/6Xi+cEMwImkSetqIMpIb4bUUxXVRk7t+SnfR3EJ5SMF5GMg3boaiDZmaiE11UjFkX17+ELo/qo0FXKWWnr8EFfYvZC6YiI7d6z1m/eVXyoFjB0kyWu3rPBRSW4mpLbOU70WYXstz+59yq+kZEHOkJlrWdGjlFwvpL7qfMrUzFjLs/tXym/4QP2VN+59yL0WKI5kpChTn1LOonh2X1F+DovntXHeX81TCjKSShn56L1QIXT7SMF4HgbuE5Bay6J6lb/+JSSeU/EjFxQ/TsTrHTqDHRTZs6g28vv3ti32V9T4ChjPsb9aAhbZ2V6rmBvPYf3VI4znIdhBvVYGNdb65q3i4PrH58qjPlA8b7JZV9pYwB1RZP9Gjuy0D1j78CZbV9bYABjZ6fHQv+5R8bwUFD8q0AcDbBbFqTNChc2X7MD+igNsFoXutZQA7z/8VpUxtrBXQGox46B6TuOgeO7F9qGCzQsyotpGuq+iD2PwgYyo9Vrdl0A+fPxckCCwNsKP7FP1IKtxu4Auhg10P0LPogTpXgvJYcMu68sYW/h3QOrzxhE6Pay/oleFERYbaKy19rQytb8OkvoDbB8CJHsBVeo4oJgzt5VDnixqwvUPIWCR/Xlo0oeQlKnYPgRxPykTrVTH5i2hKWs2C7eQgkfoQ5ipBz2JAjSkTZ7scoUmdHW1jqY1iKTtGTytdnYEQRAEQRAEQRAEQRAEQRAEQRDzsW2/nyTA4/5bQy2FoQkLW6Yf9j8WSZu0Hf8vJYx7THzFMEvxT+maduEVw7ITuGIoiO1AgWitykyEJr0GSOgYw/9MiVEOqFXqSTfQEyvSRpfaJSDLAJ/Lop7kmcHnsgzGBmofm+/Q6YdA/0TYiL2WDrA3NgUq2RxSQP+dGuuwvoyxhK1ZeHwl48zj5dHVBsjCsRGfftcA1l85t/NzqYQYkcrx/zrqgOJ5gNs+gnSBeq0KK0sYU9h7IPWYxYkfixwC/Sca2wgfewOkFjM0fMi9Fmis1YxGONgz8wF16NT8VzRwrFXWiUYY7A0gH1Q8P/7lK+rNydtBRibRCA3orQFVVDw//u6aNf84pTyWVwXJESO7ksjemPUi+E5lz5sryqOwt2VVYBsJwf4aUnd0PH9xd/59WW+o9wHBIvsTfH/ZErD2UUW1j+Pqb5QD9Vr4RrlFgPGcjh9/XnovqecoZSQPEtnzG9DIHO6I43nIW8apt2bBInsmrurK2DshdUa/ceaCoe/t7cQ2QuyHITVWT8XzC19Q7xr33L2i/EYlaKx1OO6NWPDud1ivFecrVrD5ksAWKvmHnB1EPCURRfb4HmvB+qsA3T6+YHUE2UPNohwBzcbHc6/limiHnQsm7bDzusi6Gogyvoc8f9VGzSdeuKfiQzZy9Fvld2GR/YF1NRBd2PYCaqmK8aG1S9tRqo1UtgNOtTVeb0fskH0M9cdXyl6LiiM11eLncsbtcw8dIz1n1glxm35z3D0tHUF+SUf2RLEznel5OWVZBawePtbzIRvBvbst49MPBXZULy75Vj8nxAg+/U5sP3U6siMmIdI+5tsI9lpW8LGgD9kIHdkRExCI58tgZDcboXge2mthHDGVi9+BfARnUV6s9DWvan4A+pCNvFrpa17V/OnfYCF/X+lrXt189Z8fg/jjP0/pZ4ogCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCBJC0tm1EbMjhZD0w9yMekU3f+i6xM/aR4i992q4F1b+/bhr+Rw7Xys/fuQnpKgh3Mwf3X56MLQEE6lhZhRC3RCBbKiiSiYh3Spv1h8V89FxViVrOX1lRNeW8XTpJI/pz2blH0JZJJm3Dy7vbfFBJBkt0kiMyEVaR8jbW/kf5avsQq/EvkEt6zRCtkR4dY0PF1pJEv1JIiEpkWZ+LX2hDKkR5jTHWtOFSOt19nUO4lLfudsAIdLWUbtpQqT8NHdsCZGaDmqomGdEvd8wQojkOLDTNCFSwUB6bAlx1OrtIXSoXj1rQ4RIZaPmCZEKemNLiCT1ujR9+DR8GCREkrLNEyJJEzEmJH9Ey8eMVytro4TU+00U0uiLMiEHtIVIzkPqPlzlmlkbJUQ6aaIQR5pRQupYIec3gOnM0xEitZ1WFdKqvVWbYUJypswTIrXncoSs3wGuSW8fKyQ7GUxHoZ4QaUBto63s9dpFNUzI/gkThZRNc4S05oJrUh5BM3lrxl91dIQ4GviB/Yjeno+GCZHKTRQibeIIEbgB48BkXWiKEKnsJM+Iv06vpFwh1Zt1Oc/0hE0uMSEimTvoRJ1204RMu21QivS7LEm6mc2e3D2rk4gvZLgvQZe8dXSlZbiFhFTdEsj8Nq27qYUVMgKvSTtHSCADPEeZOiQgRNrcwgjp1d97lSdkg8gv7Rm9uWd9i5CQ2yJdRAt965RxmhWyF16TZ/utGfbOc4Oeiu/fr5912EJmGqlUbX4hIYkime+kbWf5jBn25lhyY7hIpjKMHBTZC5cnpE5kP+dbdO7tO4WEeEV2wu2jS9s4E1U3hoJCgmORZfxCCwjcoF73I11uML1hTrpYUG/UzzyVWUWSNUa9EAczFJECfcsddEcF83HBpuxL9DHjhr0DZg57JwujXkh+ayU7aTj89qKP9EnW12wh6aOPGSbE8dJEIY6+6JrL4gm52kHy2P25b/gWhDxm144r5NCQTR80TEjWuIlC2vzRLyQnnZARdlg7MB/Yj7Ct51hwIcs8Ic0uE4VUuKJLSKaKENco+925YWUy23aqu4mpQhJMnO0driHmzfa2j22EkpmiIoTYK9hI8byQ5LLPNFQPEVOFXCcmCjlJeEKGn4BrcmCIFbLYyQPhCyH+HcwJ2h62cJZAWgtNFZJaZKKQsSKukImwKpLJPTwfakJIdzVzhv31bGjpWbjXM0lI3dxEn0lC6nYRrhCDJhcNFkLuizyKd2xxucQcIRmHCs0T0rSwHGqWkPAamroQskm/TFXJi9mYIqR5ofmZIaQsbXEehxFyXfvZDlEhjv3rodT3awnpmGUDu5LAlqXLMV5I4MnSs5PGCymonV6ae2BHWfCarG41d9g7z9Qx7dT5L11AIQU3BcuX1ZR4bTlzMSEFnIxuqvymUkOmOQ0Z9p4198ZwgS7NdcGyw8vfFBPivDOuv4gU5FluSNaCQrJ4C1Tj15q4134mJPdoujHUEUL6tB4xr90VUiohIZfCXGYWEpKZzk17mp0LlXEud7YxJYStimWc/tByCwkRWqAKV4jqAlUSO7sgc32p04opIaRHbbG2TfkMXRQLIS2dvBW1nOz0WBTi9/JT7k9SFjqahRD3yWFOEZyD9hgUQnxZvISOQarHjmohcim4A8ZOI4XoPDgoRrl8qQHqWBN1W1TD+3WN2agS59H39b2cY51hCnlOn76X81e8NM0sdg1yHsyonisqO2sXBk2kf13kJD4jpPDpGcWx5gS6LNvZhGl++kuuQeU3ylvkY39QHmtgshakqEGZ0WyHfN0jyusuL9XJJKGZKUbe3AfTmcIVpkrz+P8BWZvyj3uDecMAAAAASUVORK5CYII=",
  xT = "/assets/1-Tn-GooQq.png",
  TT = "/assets/2-BBQ7Ej6H.png",
  ET = "/assets/3-lgVq-fZ1.png",
  PT = "/assets/4-BwLDXk-b.png",
  AT = "/assets/5-B144NiHM.png",
  IT = {
    components: {},
    async created() {},
    props: {},
    data: function () {
      return {};
    },
    computed: {
      isEnglish() {
        return this.uSettings.lang === "en";
      },
    },
    watch: {},
    methods: {
      next() {
        this.$refs.swipeOnboardingStart.next();
      },
    },
  },
  Ut = (e) => (el("data-v-f4a53a06"), (e = e()), tl(), e),
  RT = {
    class: "onboardingStart center",
    style: {
      direction: "ltr",
    },
  },
  OT = {
    class: "container",
  },
  BT = Ut(() =>
    F(
      "img",
      {
        src: kT,
        alt: "",
        width: "60%",
      },
      null,
      -1
    )
  ),
  DT = {
    key: 0,
    class: "title",
    style: {
      "font-size": "1.1em",
    },
  },
  $T = Ut(() =>
    F(
      "span",
      {
        class: "selected",
      },
      "a real token that will have value on the exchange.",
      -1
    )
  ),
  LT = {
    key: 1,
    class: "title",
    style: {
      "font-size": "1.1em",
    },
  },
  MT = Ut(() =>
    F(
      "img",
      {
        src: xT,
        alt: "",
        width: "80%",
      },
      null,
      -1
    )
  ),
  FT = {
    class: "center buttonNextContainer",
  },
  VT = {
    class: "container",
  },
  NT = {
    key: 0,
    class: "title",
  },
  HT = Ut(() =>
    F(
      "span",
      {
        class: "selected",
      },
      "include mining it by tapping the screen. ",
      -1
    )
  ),
  zT = {
    key: 1,
    class: "title",
  },
  jT = Ut(() =>
    F(
      "img",
      {
        src: TT,
        alt: "",
        width: "80%",
      },
      null,
      -1
    )
  ),
  UT = {
    class: "center buttonNextContainer",
  },
  WT = {
    class: "container",
  },
  qT = {
    key: 0,
    class: "title",
  },
  YT = Ut(() =>
    F(
      "span",
      {
        class: "selected",
      },
      "passive hourly earnings.",
      -1
    )
  ),
  KT = {
    key: 1,
    class: "title",
  },
  ZT = Ut(() =>
    F(
      "img",
      {
        src: ET,
        alt: "",
        width: "60%",
      },
      null,
      -1
    )
  ),
  GT = {
    class: "center buttonNextContainer",
  },
  QT = {
    class: "container",
  },
  XT = {
    key: 0,
    class: "title",
  },
  JT = Ut(() =>
    F(
      "span",
      {
        class: "selected",
      },
      "you earn a percentage of their earnings",
      -1
    )
  ),
  eE = {
    key: 1,
    class: "title",
  },
  tE = Ut(() =>
    F(
      "img",
      {
        src: PT,
        alt: "",
        width: "70%",
      },
      null,
      -1
    )
  ),
  nE = {
    class: "center buttonNextContainer",
  },
  oE = {
    class: "container",
  },
  iE = {
    key: 0,
    class: "title",
    style: {
      "font-size": "1.6em",
    },
  },
  rE = Ut(() =>
    F(
      "span",
      {
        class: "selected",
      },
      "airdrop",
      -1
    )
  ),
  aE = {
    key: 1,
    class: "title",
  },
  sE = Ut(() =>
    F(
      "img",
      {
        src: AT,
        alt: "",
        width: "80%",
      },
      null,
      -1
    )
  ),
  lE = {
    key: 2,
    class: "title",
  },
  cE = Ut(() =>
    F(
      "span",
      {
        class: "selected",
      },
      "which you can either sell or hold.",
      -1
    )
  ),
  uE = {
    key: 3,
    class: "title",
    style: {
      "font-size": "1.6em",
    },
  },
  dE = {
    class: "center buttonNextContainer",
  };
function fE(e, t, n, o, i, r) {
  const a = He("van-button"),
    s = He("van-swipe-item"),
    l = He("van-swipe");
  return (
    me(),
    ke("div", RT, [
      d(
        l,
        {
          class: "onboardingSwipe",
          autoplay: 0,
          loop: !1,
          ref: "swipeOnboardingStart",
          style: {
            width: "100vw",
            height: "100vh",
            position: "fixed",
            top: "0",
            left: "0",
          },
          duration: e.isRtl ? 0 : 500,
          touchable: !e.isRtl,
        },
        {
          default: ge(() => [
            d(
              s,
              {
                class: At([
                  "item",
                  {
                    rtl: e.isRtl,
                  },
                ]),
              },
              {
                default: ge(() => [
                  F("div", OT, [
                    BT,
                    r.isEnglish
                      ? (me(),
                        ke("div", DT, [
                          Se(
                            "is a game where you develop your character, earn in-game currency, and eventually receive "
                          ),
                          $T,
                        ]))
                      : (me(),
                        ke(
                          "div",
                          LT,
                          X(
                            e.t(
                              "is a game where you develop your character, earn in-game currency, and eventually receive a real token that will have value on the exchange."
                            )
                          ),
                          1
                        )),
                    MT,
                    F("div", FT, [
                      d(
                        a,
                        {
                          class: "buttonNext",
                          icon: "arrow",
                          "icon-position": "right",
                          onClick: r.next,
                          color: "#009cff",
                          round: "",
                        },
                        {
                          default: ge(() => [Se(X(e.t("Next")), 1)]),
                          _: 1,
                        },
                        8,
                        ["onClick"]
                      ),
                    ]),
                  ]),
                ]),
                _: 1,
              },
              8,
              ["class"]
            ),
            d(
              s,
              {
                class: At([
                  "item",
                  {
                    rtl: e.isRtl,
                  },
                ]),
              },
              {
                default: ge(() => [
                  F("div", VT, [
                    r.isEnglish
                      ? (me(),
                        ke("div", NT, [
                          Se("The main ways to earn in-game currency "),
                          HT,
                        ]))
                      : (me(),
                        ke(
                          "div",
                          zT,
                          X(
                            e.t(
                              "The main ways to earn in-game currency include mining it by tapping the screen."
                            )
                          ),
                          1
                        )),
                    jT,
                    F("div", UT, [
                      d(
                        a,
                        {
                          class: "buttonNext",
                          icon: "arrow",
                          "icon-position": "right",
                          onClick: r.next,
                          color: "#009cff",
                          round: "",
                        },
                        {
                          default: ge(() => [Se(X(e.t("Next")), 1)]),
                          _: 1,
                        },
                        8,
                        ["onClick"]
                      ),
                    ]),
                  ]),
                ]),
                _: 1,
              },
              8,
              ["class"]
            ),
            d(
              s,
              {
                class: At([
                  "item",
                  {
                    rtl: e.isRtl,
                  },
                ]),
              },
              {
                default: ge(() => [
                  F("div", WT, [
                    r.isEnglish
                      ? (me(),
                        ke("div", qT, [
                          Se(
                            "You can also upgrade your character’s skills to increase "
                          ),
                          YT,
                        ]))
                      : (me(),
                        ke(
                          "div",
                          KT,
                          X(
                            e.t(
                              "You can also upgrade your character’s skills to increase passive hourly earnings."
                            )
                          ),
                          1
                        )),
                    ZT,
                    F("div", GT, [
                      d(
                        a,
                        {
                          class: "buttonNext",
                          icon: "arrow",
                          "icon-position": "right",
                          onClick: r.next,
                          color: "#009cff",
                          round: "",
                        },
                        {
                          default: ge(() => [Se(X(e.t("Next")), 1)]),
                          _: 1,
                        },
                        8,
                        ["onClick"]
                      ),
                    ]),
                  ]),
                ]),
                _: 1,
              },
              8,
              ["class"]
            ),
            d(
              s,
              {
                class: At([
                  "item",
                  {
                    rtl: e.isRtl,
                  },
                ]),
              },
              {
                default: ge(() => [
                  F("div", QT, [
                    r.isEnglish
                      ? (me(),
                        ke("div", XT, [
                          Se("By inviting friends to join the game, "),
                          JT,
                          Se(
                            ", allowing you to accumulate virtual coins more effectively."
                          ),
                        ]))
                      : (me(),
                        ke(
                          "div",
                          eE,
                          X(
                            e.t(
                              "By inviting friends to join the game, you earn a percentage of their earnings, allowing you to accumulate virtual coins more effectively."
                            )
                          ),
                          1
                        )),
                    tE,
                    F("div", nE, [
                      d(
                        a,
                        {
                          class: "buttonNext",
                          icon: "arrow",
                          "icon-position": "right",
                          onClick: r.next,
                          color: "#009cff",
                          round: "",
                        },
                        {
                          default: ge(() => [Se(X(e.t("Next")), 1)]),
                          _: 1,
                        },
                        8,
                        ["onClick"]
                      ),
                    ]),
                  ]),
                ]),
                _: 1,
              },
              8,
              ["class"]
            ),
            d(
              s,
              {
                class: At([
                  "item",
                  {
                    rtl: e.isRtl,
                  },
                ]),
              },
              {
                default: ge(() => [
                  F("div", oE, [
                    r.isEnglish
                      ? (me(),
                        ke("div", iE, [
                          Se(
                            "The more you progress in the game, the larger your token "
                          ),
                          rE,
                          Se(" will be."),
                        ]))
                      : (me(),
                        ke(
                          "div",
                          aE,
                          X(
                            e.t(
                              "The more you progress in the game, the larger your token airdrop will be."
                            )
                          ),
                          1
                        )),
                    sE,
                    r.isEnglish
                      ? (me(),
                        ke("div", lE, [
                          Se("These tokens will have real value, "),
                          cE,
                        ]))
                      : (me(),
                        ke(
                          "div",
                          uE,
                          X(
                            e.t(
                              "These tokens will have real value, which you can either sell or hold."
                            )
                          ),
                          1
                        )),
                    F("div", dE, [
                      d(
                        a,
                        {
                          type: "warning",
                          round: "",
                          icon: "arrow",
                          "icon-position": "right",
                          onClick:
                            t[0] ||
                            (t[0] = (c) =>
                              e._completeOnboarding(e.onBoard.start)),
                        },
                        {
                          default: ge(() => [Se(X(e.t("Start earn")), 1)]),
                          _: 1,
                        }
                      ),
                    ]),
                  ]),
                ]),
                _: 1,
              },
              8,
              ["class"]
            ),
          ]),
          _: 1,
        },
        8,
        ["duration", "touchable"]
      ),
    ])
  );
}
const hE = Ao(IT, [
    ["render", fE],
    ["__scopeId", "data-v-f4a53a06"],
  ]),
  gE = {
    components: {},
    async created() {},
    props: {
      level: {
        type: Number,
        required: !0,
      },
    },
    data: function () {
      return {};
    },
    computed: {
      skills() {
        return this._getAvailableSkillsForLevel(this.level) ?? [];
      },
    },
    watch: {},
    methods: {
      next() {},
      async completeOnboarding() {},
    },
  },
  mE = {
    class: "skillsByLevel",
  },
  vE = {
    class: "title",
  },
  yE = {
    class: "level",
  };
function bE(e, t, n, o, i, r) {
  return (
    me(),
    ke("div", mE, [
      (me(!0),
      ke(
        Ve,
        null,
        Hi(
          r.skills,
          (a) => (
            me(),
            ke(
              "div",
              {
                key: a.key,
                class: "skillItem",
                style: Nt({
                  backgroundImage: `url(${e._getSkillImg(a.key)})`,
                }),
              },
              [F("div", vE, X(a.title), 1), F("div", yE, X(a.level), 1)],
              4
            )
          )
        ),
        128
      )),
    ])
  );
}
const pE = Ao(gE, [
    ["render", bE],
    ["__scopeId", "data-v-30aa9df3"],
  ]),
  Uh = "api.xempire.io",
  Wh = "game.xempire.io",
  TA = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        API_DOMAIN: Uh,
        GAME_DOMAIN: Wh,
      },
      Symbol.toStringTag,
      {
        value: "Module",
      }
    )
  ),
  wE = new Error("request for lock canceled");
var SE = function (e, t, n, o) {
  function i(r) {
    return r instanceof n
      ? r
      : new n(function (a) {
          a(r);
        });
  }
  return new (n || (n = Promise))(function (r, a) {
    function s(u) {
      try {
        c(o.next(u));
      } catch (f) {
        a(f);
      }
    }
    function l(u) {
      try {
        c(o.throw(u));
      } catch (f) {
        a(f);
      }
    }
    function c(u) {
      u.done ? r(u.value) : i(u.value).then(s, l);
    }
    c((o = o.apply(e, t || [])).next());
  });
};
class CE {
  constructor(t, n = wE) {
    (this._value = t),
      (this._cancelError = n),
      (this._queue = []),
      (this._weightedWaiters = []);
  }
  acquire(t = 1, n = 0) {
    if (t <= 0) throw new Error(`invalid weight ${t}: must be positive`);
    return new Promise((o, i) => {
      const r = {
          resolve: o,
          reject: i,
          weight: t,
          priority: n,
        },
        a = qh(this._queue, (s) => n <= s.priority);
      a === -1 && t <= this._value
        ? this._dispatchItem(r)
        : this._queue.splice(a + 1, 0, r);
    });
  }
  runExclusive(t) {
    return SE(this, arguments, void 0, function* (n, o = 1, i = 0) {
      const [r, a] = yield this.acquire(o, i);
      try {
        return yield n(r);
      } finally {
        a();
      }
    });
  }
  waitForUnlock(t = 1, n = 0) {
    if (t <= 0) throw new Error(`invalid weight ${t}: must be positive`);
    return this._couldLockImmediately(t, n)
      ? Promise.resolve()
      : new Promise((o) => {
          this._weightedWaiters[t - 1] || (this._weightedWaiters[t - 1] = []),
            _E(this._weightedWaiters[t - 1], {
              resolve: o,
              priority: n,
            });
        });
  }
  isLocked() {
    return this._value <= 0;
  }
  getValue() {
    return this._value;
  }
  setValue(t) {
    (this._value = t), this._dispatchQueue();
  }
  release(t = 1) {
    if (t <= 0) throw new Error(`invalid weight ${t}: must be positive`);
    (this._value += t), this._dispatchQueue();
  }
  cancel() {
    this._queue.forEach((t) => t.reject(this._cancelError)), (this._queue = []);
  }
  _dispatchQueue() {
    for (
      this._drainUnlockWaiters();
      this._queue.length > 0 && this._queue[0].weight <= this._value;

    )
      this._dispatchItem(this._queue.shift()), this._drainUnlockWaiters();
  }
  _dispatchItem(t) {
    const n = this._value;
    (this._value -= t.weight), t.resolve([n, this._newReleaser(t.weight)]);
  }
  _newReleaser(t) {
    let n = !1;
    return () => {
      n || ((n = !0), this.release(t));
    };
  }
  _drainUnlockWaiters() {
    if (this._queue.length === 0)
      for (let t = this._value; t > 0; t--) {
        const n = this._weightedWaiters[t - 1];
        n &&
          (n.forEach((o) => o.resolve()), (this._weightedWaiters[t - 1] = []));
      }
    else {
      const t = this._queue[0].priority;
      for (let n = this._value; n > 0; n--) {
        const o = this._weightedWaiters[n - 1];
        if (!o) continue;
        const i = o.findIndex((r) => r.priority <= t);
        (i === -1 ? o : o.splice(0, i)).forEach((r) => r.resolve());
      }
    }
  }
  _couldLockImmediately(t, n) {
    return (
      (this._queue.length === 0 || this._queue[0].priority < n) &&
      t <= this._value
    );
  }
}
function _E(e, t) {
  const n = qh(e, (o) => t.priority <= o.priority);
  e.splice(n + 1, 0, t);
}
function qh(e, t) {
  for (let n = e.length - 1; n >= 0; n--) if (t(e[n])) return n;
  return -1;
}
var kE = function (e, t, n, o) {
  function i(r) {
    return r instanceof n
      ? r
      : new n(function (a) {
          a(r);
        });
  }
  return new (n || (n = Promise))(function (r, a) {
    function s(u) {
      try {
        c(o.next(u));
      } catch (f) {
        a(f);
      }
    }
    function l(u) {
      try {
        c(o.throw(u));
      } catch (f) {
        a(f);
      }
    }
    function c(u) {
      u.done ? r(u.value) : i(u.value).then(s, l);
    }
    c((o = o.apply(e, t || [])).next());
  });
};
class xE {
  constructor(t) {
    this._semaphore = new CE(1, t);
  }
  acquire() {
    return kE(this, arguments, void 0, function* (t = 0) {
      const [, n] = yield this._semaphore.acquire(1, t);
      return n;
    });
  }
  runExclusive(t, n = 0) {
    return this._semaphore.runExclusive(() => t(), 1, n);
  }
  isLocked() {
    return this._semaphore.isLocked();
  }
  waitForUnlock(t = 0) {
    return this._semaphore.waitForUnlock(1, t);
  }
  release() {
    this._semaphore.isLocked() && this._semaphore.release();
  }
  cancel() {
    return this._semaphore.cancel();
  }
}
const TE =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH1AQMAAAA6RJ5sAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRF+/v7BgYGDwXe/gAAAv9JREFUeJzt3TF2gzAMBmDnZWDMETgKRzNH4ygcIWMGHmps2UIiLpBmCfWvIY2LPl4nPUsOqSMbveviz8k9g391d0344WK0Nv3u4OHh4bf89R2vchjcn6/XDT+4HJcj/iHpzz8VHh7+W32v/LzhGUzsO10f+pjXcDnyMfXB5YhT4eHh4ZUPcXsupeBQJPOHnuDh4WvxcbF4CXh4ePjDvqM0TNnwOcz+Z+b5yxiLGen6JQEPD38yP629iX1voujHpf74uDD7H3h4ePjkC9Hq23HI/PdIwMPDV+JDTpvrSCCD4/5Hrkn/5OO1Rl/L/RP7y5u+g4eHP7nvpakSLwc+xud7P/LNOtm/8B4njnzD/kcdOAvge6v+zRPBw8P/G09H/N163uNwTqw/OdT8RUa2Q4SF+S08PHxtvjVe1Z9bnvL6mCklq4tLORsKof0MDw9fnX/pf265/6G4mUmJ4bUldZy8Pz8xvl/7/f4NHh7+232Xsv7mOacheqlfy7Vp6Z/Eh+oEDw//X/y6fzniQ4Rfpm0Nh3pkUJ0N9fxmmc108PDwlfsuzVhMyIxFlrkdkkKXAx4evlZP+hyYh7opeNmSOn8ed+cni58LfrC+0L/Bw8OfzHc5Y7t+0Lp+6P2LecpHPf8jZ0NLSG9F8PDwJ/f+Ix9exyWnT2T1/M9k57eXPKqBh4ev1ed9j8xYXFqmWJ0/e7md6b/e9C/9Gzw8/Fk9ZwYv01uuEaTPf14jVK/B+Kv185738PDwFfvRFYLbMTlMYj9x/Rpihvn8Ljw8fL2ebPTRq1B7I58+amvOn+Hh4eHFc5jz5yvJ5994mT5oR5Sf/xFU9E3R+xd/gYeHP51vY658/yMPbNM4N19bF5rc/xR8mxd7foCHh6/Wb9QPNeNV33/A7ZQa1HzmN/5+eHj47/Qyjh1LPs9fnD5/jtHH2zX53p6K+x94ePiqfA7pn25LMeqISH3/rCRms+XD2xYeHv6LvYnPvRQMW3KUV/9MsDj/DWXpkP9lfgwPD1+Bf9aPH6RrIHCorCwbAAAAAElFTkSuQmCC",
  EE = new xE(),
  PE = {
    components: {
      NewSkillsByLevel: pE,
      OnboardingStart: hE,
      TopBar: _T,
      BottomBar: vx,
    },
    async created() {
      this.startTime = new Date();
      try {
        await this.loadWithMinTime(1e3, async () => {
          await this.auth(), await this.loadPageData();
        }),
          this.loadPageDataAfter(),
          this.$router.beforeEach(() => {
            this._sound("page_change");
          }),
          (window.tonConnectUI = async function () {
            return this._tonConnectUI
              ? this._tonConnectUI
              : await EE.runExclusive(async () => {
                  if (this._tonConnectUI) return this._tonConnectUI;
                  const { TonConnectUI: t } = await ze(
                    () => import("./index-BN3Af_4D.js"),
                    []
                  );
                  return (
                    (this._tonConnectUI = new t({
                      manifestUrl: `https://${Wh}/tonconnect-manifest.json`,
                    })),
                    this._tonConnectUI
                  );
                });
          });
        const e = this;
        (window.listenTonConnect = async function () {
          this._isTonConnectListenActive ||
            ((this._isTonConnectListenActive = !0),
            console.log("listening ton connect"),
            (this._isUserAction = !1),
            (await window.tonConnectUI()).onModalStateChange(
              () => (this._isUserAction = !0)
            ),
            (await window.tonConnectUI()).onStatusChange(
              this.onWalletStatusChange
            ));
        }.bind(e)),
          (this.dbLoaded = !0);
      } catch (e) {
        e === "platform" && (this.isPlatformOk = !1);
      }
    },
    async mounted() {
      this.$nextTick(function () {
        this.onLoaded(),
          this.updateTheme(),
          setInterval(
            function () {
              "money" in this.stores.user.hero &&
                (this.stores.user.addMoney(this.uHero.moneyPerHour / 3600),
                this.stores.user.energyAdd());
            }.bind(this),
            1e3
          ),
          setInterval(
            async function () {
              await this._sendTappedData();
              const e = (new Date() - this.stores.state.lastPingDate) / 1e3,
                n = (new Date() - this.startTime) / 1e3 > 300 ? 120 : 30;
              if (e > n && this.uProfile.id)
                if (this.$route.name !== "negotiations") {
                  if (!this.isPingInProcess) {
                    this.isPingInProcess = !0;
                    try {
                      const o = await this.apiCall("sync");
                      this.stores.user.setHero(o.hero);
                    } catch (o) {
                      throw ((this.isPingInProcess = !1), o);
                    }
                    this.isPingInProcess = !1;
                  }
                } else
                  try {
                    await this.apiCall("ping");
                  } catch (o) {
                    console.error(o);
                  }
            }.bind(this),
            5e3
          );
      });
    },
    data() {
      return {
        isPlatformOk: !0,
        isPingInProcess: !1,
        dbLoaded: !1,
        isOfflineBonusShow: !1,
        isLevelChange: !1,
        debugData: null,
        offlineBonusLocalVar: 0,
        startTime: null,
      };
    },
    computed: {},
    watch: {
      uHero(e, t) {
        "level" in t &&
          e.level !== t.level &&
          ((this.isLevelChange = !0),
          this._vibrate("success"),
          this._sound("level_up"));
        const n = (e.moneyPerHour / 60) * 1;
        "offlineBonus" in e &&
          e.offlineBonus > n &&
          ((this.offlineBonusLocalVar = e.offlineBonus),
          (this.isOfflineBonusShow = !0),
          this._vibrate("success"),
          this._sound("offline_bonus"));
      },
      dbLoaded(e) {},
      uProfile(e) {
        this._isViewportEventAssigned ||
          ((this._isViewportEventAssigned = !0),
          (this._initialViewportStableHeight =
            window.Telegram.WebApp.viewportStableHeight),
          (this._lastViewportStableHeight = this._initialViewportStableHeight),
          (this._viewportResizeTimeout = null),
          window.Telegram.WebApp.onEvent(
            "viewportChanged",
            ({ isStateStable: t }) => {
              t &&
                this._lastViewportStableHeight !==
                  window.Telegram.WebApp.viewportStableHeight &&
                ((this._lastViewportStableHeight =
                  window.Telegram.WebApp.viewportStableHeight),
                this._viewportResizeTimeout &&
                  clearTimeout(this._viewportResizeTimeout),
                (this._viewportResizeTimeout = setTimeout(() => {
                  if (this._isIphone()) {
                    const n = window.Telegram.WebApp.viewportStableHeight,
                      o = this._initialViewportStableHeight - n;
                    Array.from(
                      document.getElementsByClassName("van-popup--bottom")
                    ).forEach((r) => {
                      (r.style.paddingTop = o + "px"),
                        (r.style.bottom = o + "px");
                    });
                  }
                  window.scrollTo(document.documentElement);
                }, 800)));
            }
          ));
      },
    },
    methods: {
      async loadWithMinTime(e, t) {
        const n = Date.now();
        await t();
        const o = Date.now() - n;
        o < e && (await this._delay(e - o));
      },
      onLoaded() {
        this._isIphone()
          ? document.documentElement.classList.add("isIphone")
          : (document.documentElement.classList.add("isNotIphone"),
            this.onScroll(),
            document.documentElement.addEventListener(
              "touchstart",
              this.onScroll,
              {
                passive: !1,
              }
            ),
            document.documentElement.addEventListener(
              "touchmove",
              this.onScroll,
              {
                passive: !1,
              }
            ),
            document.documentElement.addEventListener("scroll", this.onScroll, {
              passive: !1,
            }));
      },
      onScroll() {
        window.scrollY <= 1 && window.scrollTo(0, 1);
      },
      updateTheme() {
        const e = "#1F3152";
        window.Telegram.WebApp.setHeaderColor(e),
          window.Telegram.WebApp.setBackgroundColor(e);
      },
      play() {},
      pause() {
        this.$refs.bgmusic.pause();
      },
      async claimOfflineBonus() {
        this.isOfflineBonusShow = !1;
        try {
          const e = await this.apiCall("claimOfflineBonus");
          this._animateMoneyFromBottom(this.offlineBonusLocalVar),
            this.stores.user.setHero(e.hero),
            (this.offlineBonusLocalVar = 0);
        } catch (e) {
          this._catchError(e);
        }
      },
      async onWalletStatusChange(e) {
        if ((this.stores.state.setIsTonWalletConnected(e !== null), e === null))
          return;
        if (!this._isUserAction) {
          await this.validateWalletOrDisconnect(e);
          return;
        }
        try {
          localStorage.setItem("isTonWalletValidated", "1"),
            await this.apiCall("saveTonWallet", {
              wallet: e,
            });
        } catch (n) {
          throw ((await window.tonConnectUI()).disconnect(), n);
        }
        await this.apiCall("checkQuest", ["ton_wallet_connect", null]);
        const t = await this.apiCall("getQuests", "");
        t && this.stores.user.setQuests(t);
      },
      async validateWalletOrDisconnect(e) {
        if (localStorage.getItem("isTonWalletValidated")) return;
        const { isValid: t } = await this.apiCall("validateTonWallet", {
          wallet: e,
        });
        if (!t) {
          await (await window.tonConnectUI()).disconnect();
          return;
        }
        localStorage.setItem("isTonWalletValidated", "1");
      },
    },
  },
  Io = (e) => (el("data-v-ab3f03cc"), (e = e()), tl(), e),
  AE = {
    key: 0,
    style: {
      "align-content": "center",
      position: "fixed",
      top: "10%",
      left: "0",
    },
    class: "center",
  },
  IE = {
    class: "goldText",
  },
  RE = Io(() =>
    F(
      "img",
      {
        src: TE,
        alt: "",
        style: {
          "max-width": "80%",
          background: "#fff",
          padding: "10px",
        },
      },
      null,
      -1
    )
  ),
  OE = Io(() =>
    F(
      "a",
      {
        href: "https://t.me/muskempire_bot",
        style: {
          color: "#fff",
          "font-size": "1.5em",
        },
      },
      "https://t.me/muskempire_bot",
      -1
    )
  ),
  BE = {
    key: 0,
    class: "loadingScreen",
  },
  DE = Io(() =>
    F(
      "div",
      {
        class: "tokenWillBe",
      },
      [
        F(
          "div",
          null,
          "A financial strategy game with a real token economy inside"
        ),
      ],
      -1
    )
  ),
  $E = {
    class: "leSnake",
  },
  LE = Io(() =>
    F(
      "div",
      {
        class: "progressBar",
      },
      [
        F("div", {
          class: "progressResult",
        }),
      ],
      -1
    )
  ),
  ME = {
    id: "scrollable",
    class: "scrollable",
  },
  FE = {
    class: "container center",
  },
  VE = {
    class: "goldText",
  },
  NE = Io(() =>
    F(
      "span",
      {
        class: "money26",
      },
      null,
      -1
    )
  ),
  HE = {
    class: "container center",
    style: {
      "padding-bottom": "40px",
    },
  },
  zE = {
    class: "goldText",
  },
  jE = Io(() => F("br", null, null, -1)),
  UE = {
    class: "improvesLines goldLines",
    style: {
      margin: "20px 0",
    },
  },
  WE = {
    style: {
      "margin-bottom": "10px",
    },
  },
  qE = {
    key: 0,
  },
  YE = Io(() => F("br", null, null, -1)),
  KE = {
    key: 3,
    style: {
      width: "100%",
      padding: "5px",
      background: "#bbb",
      position: "fixed",
      top: "150px",
      left: "0",
    },
  };
function ZE(e, t, n, o, i, r) {
  const a = He("van-config-provider"),
    s = He("OnboardingStart"),
    l = He("TopBar"),
    c = He("RouterView"),
    u = He("van-button"),
    f = He("van-count-down"),
    h = He("van-popup"),
    g = He("new-skills-by-level"),
    S = He("BottomBar");
  return (
    me(),
    ke("div", null, [
      i.isPlatformOk
        ? (me(),
          ke(
            Ve,
            {
              key: 1,
            },
            [
              d(a, {
                theme: "dark",
              }),
              i.dbLoaded
                ? e._isOnboardingComplete(e.onBoard.start)
                  ? (me(),
                    ke(
                      Ve,
                      {
                        key: 2,
                      },
                      [
                        d(l),
                        F("div", ME, [d(c)]),
                        d(
                          h,
                          {
                            show: i.isOfflineBonusShow,
                            "onUpdate:show":
                              t[1] ||
                              (t[1] = (p) => (i.isOfflineBonusShow = p)),
                            round: "",
                            position: "bottom",
                          },
                          {
                            default: ge(() => [
                              F("div", FE, [
                                e.uPurchase.extendedOfflineTimeLeft
                                  ? (me(),
                                    ke(
                                      Ve,
                                      {
                                        key: 1,
                                      },
                                      [
                                        F("h1", VE, X(e.t("Offline bonus")), 1),
                                        F("p", null, [
                                          Se(
                                            X(
                                              e.t(
                                                "You have an Offline Boost active."
                                              )
                                            ) + " ",
                                            1
                                          ),
                                          d(
                                            f,
                                            {
                                              time:
                                                e.uPurchase
                                                  .extendedOfflineTimeLeft *
                                                1e3,
                                              style: {
                                                color: "#fff",
                                              },
                                            },
                                            null,
                                            8,
                                            ["time"]
                                          ),
                                        ]),
                                        F(
                                          "p",
                                          null,
                                          X(
                                            e.t(
                                              "Your company keeps earning while you're offline."
                                            )
                                          ),
                                          1
                                        ),
                                      ],
                                      64
                                    ))
                                  : (me(),
                                    ke(
                                      Ve,
                                      {
                                        key: 0,
                                      },
                                      [
                                        F(
                                          "h1",
                                          null,
                                          X(e.t("Offline bonus")),
                                          1
                                        ),
                                        F(
                                          "p",
                                          null,
                                          X(
                                            e.t(
                                              "Your company keeps earning 3 hours while you're offline."
                                            )
                                          ),
                                          1
                                        ),
                                        F(
                                          "p",
                                          null,
                                          X(
                                            e.t(
                                              "You can purchase a Boost increasing the offline bonus period."
                                            )
                                          ),
                                          1
                                        ),
                                        d(
                                          u,
                                          {
                                            type: "primary",
                                            onClick:
                                              t[0] ||
                                              (t[0] = (p) =>
                                                e.$router.push("/store/cards")),
                                            round: "",
                                            size: "small",
                                            icon: "star",
                                          },
                                          {
                                            default: ge(() => [
                                              Se(X(e.t("Go to Store")), 1),
                                            ]),
                                            _: 1,
                                          }
                                        ),
                                        F(
                                          "p",
                                          null,
                                          X(
                                            e.t(
                                              "Come back more often, employees miss you."
                                            )
                                          ),
                                          1
                                        ),
                                      ],
                                      64
                                    )),
                                F("h2", null, [
                                  NE,
                                  Se(
                                    " +" + X(e._number(i.offlineBonusLocalVar)),
                                    1
                                  ),
                                ]),
                                d(
                                  u,
                                  {
                                    type: "warning",
                                    class: "btnShadow",
                                    round: "",
                                    size: "large",
                                    onClick: r.claimOfflineBonus,
                                  },
                                  {
                                    default: ge(() => [Se(X(e.t("Claim")), 1)]),
                                    _: 1,
                                  },
                                  8,
                                  ["onClick"]
                                ),
                              ]),
                            ]),
                            _: 1,
                          },
                          8,
                          ["show"]
                        ),
                        i.isLevelChange
                          ? (me(),
                            Pt(
                              h,
                              {
                                key: 0,
                                show: i.isLevelChange,
                                "onUpdate:show":
                                  t[3] || (t[3] = (p) => (i.isLevelChange = p)),
                                round: "",
                                class: "levelUp",
                                position: "bottom",
                              },
                              {
                                default: ge(() => [
                                  F("div", HE, [
                                    F(
                                      "div",
                                      {
                                        class: "avatar aniBounceZoomIn",
                                        style: Nt({
                                          backgroundImage: `url(${e._getAvatarByLevel(
                                            e.uHero.level
                                          )})`,
                                        }),
                                      },
                                      null,
                                      4
                                    ),
                                    F("h1", zE, X(e.t("Level UP!")), 1),
                                    F("div", null, [
                                      Se(
                                        X(e.t("Congratulations, you got")) +
                                          " ",
                                        1
                                      ),
                                      jE,
                                      Se(
                                        X(e.t("Lv.")) +
                                          " " +
                                          X(e.uHero.level) +
                                          " — " +
                                          X(
                                            e.t(
                                              e.dbLevelsByLevel[e.uHero.level]
                                                .title
                                            )
                                          ),
                                        1
                                      ),
                                    ]),
                                    F("div", UE, [
                                      F(
                                        "div",
                                        WE,
                                        X(e.t("Profit Per Tap increased.")),
                                        1
                                      ),
                                      e._getAvailableSkillsForLevel(
                                        e.uHero.level
                                      ).length > 0
                                        ? (me(),
                                          ke("div", qE, [
                                            Se(
                                              X(e.t("New improves:")) + " ",
                                              1
                                            ),
                                            YE,
                                            d(
                                              g,
                                              {
                                                level: e.uHero.level,
                                                style: {
                                                  "overflow-y": "scroll",
                                                  "max-height": "170px",
                                                },
                                              },
                                              null,
                                              8,
                                              ["level"]
                                            ),
                                          ]))
                                        : mt("", !0),
                                    ]),
                                    d(
                                      u,
                                      {
                                        type: "success",
                                        size: "large",
                                        round: "",
                                        onClick:
                                          t[2] ||
                                          (t[2] = (p) => {
                                            i.isLevelChange = !1;
                                          }),
                                      },
                                      {
                                        default: ge(() => [
                                          Se(X(e.t("I'm good!")), 1),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                  ]),
                                ]),
                                _: 1,
                              },
                              8,
                              ["show"]
                            ))
                          : mt("", !0),
                        d(S),
                      ],
                      64
                    ))
                  : (me(),
                    Pt(s, {
                      key: 1,
                    }))
                : (me(),
                  ke("div", BE, [
                    DE,
                    F("div", $E, [
                      (me(),
                      ke(
                        Ve,
                        null,
                        Hi("Loading...", (p, y) =>
                          F(
                            "span",
                            {
                              key: p,
                              style: Nt({
                                animationDelay: y * 0.2 + "s",
                              }),
                            },
                            X(p),
                            5
                          )
                        ),
                        64
                      )),
                    ]),
                    LE,
                  ])),
              i.debugData
                ? (me(), ke("div", KE, X(i.debugData), 1))
                : mt("", !0),
            ],
            64
          ))
        : (me(),
          ke("div", AE, [
            F("h1", IE, X(e.t("Use Telegram on your mobile!")), 1),
            RE,
            OE,
          ])),
    ])
  );
}
const GE = Ao(PE, [
  ["render", ZE],
  ["__scopeId", "data-v-ab3f03cc"],
]);
/*!
 * vue-router v4.3.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */
const Wo = typeof document < "u";
function QE(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const je = Object.assign;
function es(e, t) {
  const n = {};
  for (const o in t) {
    const i = t[o];
    n[o] = en(i) ? i.map(e) : e(i);
  }
  return n;
}
const Bi = () => {},
  en = Array.isArray,
  Yh = /#/g,
  XE = /&/g,
  JE = /\//g,
  eP = /=/g,
  tP = /\?/g,
  Kh = /\+/g,
  nP = /%5B/g,
  oP = /%5D/g,
  Zh = /%5E/g,
  iP = /%60/g,
  Gh = /%7B/g,
  rP = /%7C/g,
  Qh = /%7D/g,
  aP = /%20/g;
function Bl(e) {
  return encodeURI("" + e)
    .replace(rP, "|")
    .replace(nP, "[")
    .replace(oP, "]");
}
function sP(e) {
  return Bl(e).replace(Gh, "{").replace(Qh, "}").replace(Zh, "^");
}
function Bs(e) {
  return Bl(e)
    .replace(Kh, "%2B")
    .replace(aP, "+")
    .replace(Yh, "%23")
    .replace(XE, "%26")
    .replace(iP, "`")
    .replace(Gh, "{")
    .replace(Qh, "}")
    .replace(Zh, "^");
}
function lP(e) {
  return Bs(e).replace(eP, "%3D");
}
function cP(e) {
  return Bl(e).replace(Yh, "%23").replace(tP, "%3F");
}
function uP(e) {
  return e == null ? "" : cP(e).replace(JE, "%2F");
}
function Zi(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
const dP = /\/$/,
  fP = (e) => e.replace(dP, "");
function ts(e, t, n = "/") {
  let o,
    i = {},
    r = "",
    a = "";
  const s = t.indexOf("#");
  let l = t.indexOf("?");
  return (
    s < l && s >= 0 && (l = -1),
    l > -1 &&
      ((o = t.slice(0, l)),
      (r = t.slice(l + 1, s > -1 ? s : t.length)),
      (i = e(r))),
    s > -1 && ((o = o || t.slice(0, s)), (a = t.slice(s, t.length))),
    (o = vP(o ?? t, n)),
    {
      fullPath: o + (r && "?") + r + a,
      path: o,
      query: i,
      hash: Zi(a),
    }
  );
}
function hP(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Bu(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function gP(e, t, n) {
  const o = t.matched.length - 1,
    i = n.matched.length - 1;
  return (
    o > -1 &&
    o === i &&
    oi(t.matched[o], n.matched[i]) &&
    Xh(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function oi(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Xh(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!mP(e[n], t[n])) return !1;
  return !0;
}
function mP(e, t) {
  return en(e) ? Du(e, t) : en(t) ? Du(t, e) : e === t;
}
function Du(e, t) {
  return en(t)
    ? e.length === t.length && e.every((n, o) => n === t[o])
    : e.length === 1 && e[0] === t;
}
function vP(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    o = e.split("/"),
    i = o[o.length - 1];
  (i === ".." || i === ".") && o.push("");
  let r = n.length - 1,
    a,
    s;
  for (a = 0; a < o.length; a++)
    if (((s = o[a]), s !== "."))
      if (s === "..") r > 1 && r--;
      else break;
  return n.slice(0, r).join("/") + "/" + o.slice(a).join("/");
}
var Gi;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(Gi || (Gi = {}));
var Di;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(Di || (Di = {}));
function yP(e) {
  if (!e)
    if (Wo) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), fP(e);
}
const bP = /^[^#]+#/;
function pP(e, t) {
  return e.replace(bP, "#") + t;
}
function wP(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0),
  };
}
const wa = () => ({
  left: window.scrollX,
  top: window.scrollY,
});
function SP(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      o = typeof n == "string" && n.startsWith("#"),
      i =
        typeof n == "string"
          ? o
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!i) return;
    t = wP(i, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY
      );
}
function $u(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Ds = new Map();
function CP(e, t) {
  Ds.set(e, t);
}
function _P(e) {
  const t = Ds.get(e);
  return Ds.delete(e), t;
}
let kP = () => location.protocol + "//" + location.host;
function Jh(e, t) {
  const { pathname: n, search: o, hash: i } = t,
    r = e.indexOf("#");
  if (r > -1) {
    let s = i.includes(e.slice(r)) ? e.slice(r).length : 1,
      l = i.slice(s);
    return l[0] !== "/" && (l = "/" + l), Bu(l, "");
  }
  return Bu(n, e) + o + i;
}
function xP(e, t, n, o) {
  let i = [],
    r = [],
    a = null;
  const s = ({ state: h }) => {
    const g = Jh(e, location),
      S = n.value,
      p = t.value;
    let y = 0;
    if (h) {
      if (((n.value = g), (t.value = h), a && a === S)) {
        a = null;
        return;
      }
      y = p ? h.position - p.position : 0;
    } else o(g);
    i.forEach((v) => {
      v(n.value, S, {
        delta: y,
        type: Gi.pop,
        direction: y ? (y > 0 ? Di.forward : Di.back) : Di.unknown,
      });
    });
  };
  function l() {
    a = n.value;
  }
  function c(h) {
    i.push(h);
    const g = () => {
      const S = i.indexOf(h);
      S > -1 && i.splice(S, 1);
    };
    return r.push(g), g;
  }
  function u() {
    const { history: h } = window;
    h.state &&
      h.replaceState(
        je({}, h.state, {
          scroll: wa(),
        }),
        ""
      );
  }
  function f() {
    for (const h of r) h();
    (r = []),
      window.removeEventListener("popstate", s),
      window.removeEventListener("beforeunload", u);
  }
  return (
    window.addEventListener("popstate", s),
    window.addEventListener("beforeunload", u, {
      passive: !0,
    }),
    {
      pauseListeners: l,
      listen: c,
      destroy: f,
    }
  );
}
function Lu(e, t, n, o = !1, i = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: i ? wa() : null,
  };
}
function TP(e) {
  const { history: t, location: n } = window,
    o = {
      value: Jh(e, n),
    },
    i = {
      value: t.state,
    };
  i.value ||
    r(
      o.value,
      {
        back: null,
        current: o.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function r(l, c, u) {
    const f = e.indexOf("#"),
      h =
        f > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(f)) + l
          : kP() + e + l;
    try {
      t[u ? "replaceState" : "pushState"](c, "", h), (i.value = c);
    } catch (g) {
      console.error(g), n[u ? "replace" : "assign"](h);
    }
  }
  function a(l, c) {
    const u = je({}, t.state, Lu(i.value.back, l, i.value.forward, !0), c, {
      position: i.value.position,
    });
    r(l, u, !0), (o.value = l);
  }
  function s(l, c) {
    const u = je({}, i.value, t.state, {
      forward: l,
      scroll: wa(),
    });
    r(u.current, u, !0);
    const f = je(
      {},
      Lu(o.value, l, null),
      {
        position: u.position + 1,
      },
      c
    );
    r(l, f, !1), (o.value = l);
  }
  return {
    location: o,
    state: i,
    push: s,
    replace: a,
  };
}
function EP(e) {
  e = yP(e);
  const t = TP(e),
    n = xP(e, t.state, t.location, t.replace);
  function o(r, a = !0) {
    a || n.pauseListeners(), history.go(r);
  }
  const i = je(
    {
      location: "",
      base: e,
      go: o,
      createHref: pP.bind(null, e),
    },
    t,
    n
  );
  return (
    Object.defineProperty(i, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(i, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    i
  );
}
function PP(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function eg(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Wn = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  tg = Symbol("");
var Mu;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(Mu || (Mu = {}));
function ii(e, t) {
  return je(
    new Error(),
    {
      type: e,
      [tg]: !0,
    },
    t
  );
}
function Cn(e, t) {
  return e instanceof Error && tg in e && (t == null || !!(e.type & t));
}
const Fu = "[^/]+?",
  AP = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0,
  },
  IP = /[.+*?^${}()[\]/\\]/g;
function RP(e, t) {
  const n = je({}, AP, t),
    o = [];
  let i = n.start ? "^" : "";
  const r = [];
  for (const c of e) {
    const u = c.length ? [] : [90];
    n.strict && !c.length && (i += "/");
    for (let f = 0; f < c.length; f++) {
      const h = c[f];
      let g = 40 + (n.sensitive ? 0.25 : 0);
      if (h.type === 0)
        f || (i += "/"), (i += h.value.replace(IP, "\\$&")), (g += 40);
      else if (h.type === 1) {
        const { value: S, repeatable: p, optional: y, regexp: v } = h;
        r.push({
          name: S,
          repeatable: p,
          optional: y,
        });
        const m = v || Fu;
        if (m !== Fu) {
          g += 10;
          try {
            new RegExp(`(${m})`);
          } catch (w) {
            throw new Error(
              `Invalid custom RegExp for param "${S}" (${m}): ` + w.message
            );
          }
        }
        let b = p ? `((?:${m})(?:/(?:${m}))*)` : `(${m})`;
        f || (b = y && c.length < 2 ? `(?:/${b})` : "/" + b),
          y && (b += "?"),
          (i += b),
          (g += 20),
          y && (g += -8),
          p && (g += -20),
          m === ".*" && (g += -50);
      }
      u.push(g);
    }
    o.push(u);
  }
  if (n.strict && n.end) {
    const c = o.length - 1;
    o[c][o[c].length - 1] += 0.7000000000000001;
  }
  n.strict || (i += "/?"), n.end ? (i += "$") : n.strict && (i += "(?:/|$)");
  const a = new RegExp(i, n.sensitive ? "" : "i");
  function s(c) {
    const u = c.match(a),
      f = {};
    if (!u) return null;
    for (let h = 1; h < u.length; h++) {
      const g = u[h] || "",
        S = r[h - 1];
      f[S.name] = g && S.repeatable ? g.split("/") : g;
    }
    return f;
  }
  function l(c) {
    let u = "",
      f = !1;
    for (const h of e) {
      (!f || !u.endsWith("/")) && (u += "/"), (f = !1);
      for (const g of h)
        if (g.type === 0) u += g.value;
        else if (g.type === 1) {
          const { value: S, repeatable: p, optional: y } = g,
            v = S in c ? c[S] : "";
          if (en(v) && !p)
            throw new Error(
              `Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`
            );
          const m = en(v) ? v.join("/") : v;
          if (!m)
            if (y)
              h.length < 2 &&
                (u.endsWith("/") ? (u = u.slice(0, -1)) : (f = !0));
            else throw new Error(`Missing required param "${S}"`);
          u += m;
        }
    }
    return u || "/";
  }
  return {
    re: a,
    score: o,
    keys: r,
    parse: s,
    stringify: l,
  };
}
function OP(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o) return o;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 80
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 80
      ? 1
      : -1
    : 0;
}
function BP(e, t) {
  let n = 0;
  const o = e.score,
    i = t.score;
  for (; n < o.length && n < i.length; ) {
    const r = OP(o[n], i[n]);
    if (r) return r;
    n++;
  }
  if (Math.abs(i.length - o.length) === 1) {
    if (Vu(o)) return 1;
    if (Vu(i)) return -1;
  }
  return i.length - o.length;
}
function Vu(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const DP = {
    type: 0,
    value: "",
  },
  $P = /[a-zA-Z0-9_]/;
function LP(e) {
  if (!e) return [[]];
  if (e === "/") return [[DP]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(g) {
    throw new Error(`ERR (${n})/"${c}": ${g}`);
  }
  let n = 0,
    o = n;
  const i = [];
  let r;
  function a() {
    r && i.push(r), (r = []);
  }
  let s = 0,
    l,
    c = "",
    u = "";
  function f() {
    c &&
      (n === 0
        ? r.push({
            type: 0,
            value: c,
          })
        : n === 1 || n === 2 || n === 3
        ? (r.length > 1 &&
            (l === "*" || l === "+") &&
            t(
              `A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`
            ),
          r.push({
            type: 1,
            value: c,
            regexp: u,
            repeatable: l === "*" || l === "+",
            optional: l === "*" || l === "?",
          }))
        : t("Invalid state to consume buffer"),
      (c = ""));
  }
  function h() {
    c += l;
  }
  for (; s < e.length; ) {
    if (((l = e[s++]), l === "\\" && n !== 2)) {
      (o = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        l === "/" ? (c && f(), a()) : l === ":" ? (f(), (n = 1)) : h();
        break;
      case 4:
        h(), (n = o);
        break;
      case 1:
        l === "("
          ? (n = 2)
          : $P.test(l)
          ? h()
          : (f(), (n = 0), l !== "*" && l !== "?" && l !== "+" && s--);
        break;
      case 2:
        l === ")"
          ? u[u.length - 1] == "\\"
            ? (u = u.slice(0, -1) + l)
            : (n = 3)
          : (u += l);
        break;
      case 3:
        f(), (n = 0), l !== "*" && l !== "?" && l !== "+" && s--, (u = "");
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), f(), a(), i;
}
function MP(e, t, n) {
  const o = RP(LP(e.path), n),
    i = je(o, {
      record: e,
      parent: t,
      children: [],
      alias: [],
    });
  return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i), i;
}
function FP(e, t) {
  const n = [],
    o = new Map();
  t = zu(
    {
      strict: !1,
      end: !0,
      sensitive: !1,
    },
    t
  );
  function i(u) {
    return o.get(u);
  }
  function r(u, f, h) {
    const g = !h,
      S = VP(u);
    S.aliasOf = h && h.record;
    const p = zu(t, u),
      y = [S];
    if ("alias" in u) {
      const b = typeof u.alias == "string" ? [u.alias] : u.alias;
      for (const w of b)
        y.push(
          je({}, S, {
            components: h ? h.record.components : S.components,
            path: w,
            aliasOf: h ? h.record : S,
          })
        );
    }
    let v, m;
    for (const b of y) {
      const { path: w } = b;
      if (f && w[0] !== "/") {
        const C = f.record.path,
          k = C[C.length - 1] === "/" ? "" : "/";
        b.path = f.record.path + (w && k + w);
      }
      if (
        ((v = MP(b, f, p)),
        h
          ? h.alias.push(v)
          : ((m = m || v),
            m !== v && m.alias.push(v),
            g && u.name && !Hu(v) && a(u.name)),
        S.children)
      ) {
        const C = S.children;
        for (let k = 0; k < C.length; k++) r(C[k], v, h && h.children[k]);
      }
      (h = h || v),
        ((v.record.components && Object.keys(v.record.components).length) ||
          v.record.name ||
          v.record.redirect) &&
          l(v);
    }
    return m
      ? () => {
          a(m);
        }
      : Bi;
  }
  function a(u) {
    if (eg(u)) {
      const f = o.get(u);
      f &&
        (o.delete(u),
        n.splice(n.indexOf(f), 1),
        f.children.forEach(a),
        f.alias.forEach(a));
    } else {
      const f = n.indexOf(u);
      f > -1 &&
        (n.splice(f, 1),
        u.record.name && o.delete(u.record.name),
        u.children.forEach(a),
        u.alias.forEach(a));
    }
  }
  function s() {
    return n;
  }
  function l(u) {
    let f = 0;
    for (
      ;
      f < n.length &&
      BP(u, n[f]) >= 0 &&
      (u.record.path !== n[f].record.path || !ng(u, n[f]));

    )
      f++;
    n.splice(f, 0, u), u.record.name && !Hu(u) && o.set(u.record.name, u);
  }
  function c(u, f) {
    let h,
      g = {},
      S,
      p;
    if ("name" in u && u.name) {
      if (((h = o.get(u.name)), !h))
        throw ii(1, {
          location: u,
        });
      (p = h.record.name),
        (g = je(
          Nu(
            f.params,
            h.keys
              .filter((m) => !m.optional)
              .concat(h.parent ? h.parent.keys.filter((m) => m.optional) : [])
              .map((m) => m.name)
          ),
          u.params &&
            Nu(
              u.params,
              h.keys.map((m) => m.name)
            )
        )),
        (S = h.stringify(g));
    } else if (u.path != null)
      (S = u.path),
        (h = n.find((m) => m.re.test(S))),
        h && ((g = h.parse(S)), (p = h.record.name));
    else {
      if (((h = f.name ? o.get(f.name) : n.find((m) => m.re.test(f.path))), !h))
        throw ii(1, {
          location: u,
          currentLocation: f,
        });
      (p = h.record.name),
        (g = je({}, f.params, u.params)),
        (S = h.stringify(g));
    }
    const y = [];
    let v = h;
    for (; v; ) y.unshift(v.record), (v = v.parent);
    return {
      name: p,
      path: S,
      params: g,
      matched: y,
      meta: HP(y),
    };
  }
  return (
    e.forEach((u) => r(u)),
    {
      addRoute: r,
      resolve: c,
      removeRoute: a,
      getRoutes: s,
      getRecordMatcher: i,
    }
  );
}
function Nu(e, t) {
  const n = {};
  for (const o of t) o in e && (n[o] = e[o]);
  return n;
}
function VP(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: NP(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in e
        ? e.components || null
        : e.component && {
            default: e.component,
          },
  };
}
function NP(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const o in e.components) t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function Hu(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function HP(e) {
  return e.reduce((t, n) => je(t, n.meta), {});
}
function zu(e, t) {
  const n = {};
  for (const o in e) n[o] = o in t ? t[o] : e[o];
  return n;
}
function ng(e, t) {
  return t.children.some((n) => n === e || ng(e, n));
}
function zP(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let i = 0; i < o.length; ++i) {
    const r = o[i].replace(Kh, " "),
      a = r.indexOf("="),
      s = Zi(a < 0 ? r : r.slice(0, a)),
      l = a < 0 ? null : Zi(r.slice(a + 1));
    if (s in t) {
      let c = t[s];
      en(c) || (c = t[s] = [c]), c.push(l);
    } else t[s] = l;
  }
  return t;
}
function ju(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (((n = lP(n)), o == null)) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (en(o) ? o.map((r) => r && Bs(r)) : [o && Bs(o)]).forEach((r) => {
      r !== void 0 &&
        ((t += (t.length ? "&" : "") + n), r != null && (t += "=" + r));
    });
  }
  return t;
}
function jP(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 &&
      (t[n] = en(o)
        ? o.map((i) => (i == null ? null : "" + i))
        : o == null
        ? o
        : "" + o);
  }
  return t;
}
const UP = Symbol(""),
  Uu = Symbol(""),
  Dl = Symbol(""),
  og = Symbol(""),
  $s = Symbol("");
function _i() {
  let e = [];
  function t(o) {
    return (
      e.push(o),
      () => {
        const i = e.indexOf(o);
        i > -1 && e.splice(i, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return {
    add: t,
    list: () => e.slice(),
    reset: n,
  };
}
function Qn(e, t, n, o, i, r = (a) => a()) {
  const a = o && (o.enterCallbacks[i] = o.enterCallbacks[i] || []);
  return () =>
    new Promise((s, l) => {
      const c = (h) => {
          h === !1
            ? l(
                ii(4, {
                  from: n,
                  to: t,
                })
              )
            : h instanceof Error
            ? l(h)
            : PP(h)
            ? l(
                ii(2, {
                  from: t,
                  to: h,
                })
              )
            : (a &&
                o.enterCallbacks[i] === a &&
                typeof h == "function" &&
                a.push(h),
              s());
        },
        u = r(() => e.call(o && o.instances[i], t, n, c));
      let f = Promise.resolve(u);
      e.length < 3 && (f = f.then(c)), f.catch((h) => l(h));
    });
}
function ns(e, t, n, o, i = (r) => r()) {
  const r = [];
  for (const a of e)
    for (const s in a.components) {
      let l = a.components[s];
      if (!(t !== "beforeRouteEnter" && !a.instances[s]))
        if (WP(l)) {
          const u = (l.__vccOpts || l)[t];
          u && r.push(Qn(u, n, o, a, s, i));
        } else {
          let c = l();
          r.push(() =>
            c.then((u) => {
              if (!u)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${s}" at "${a.path}"`)
                );
              const f = QE(u) ? u.default : u;
              a.components[s] = f;
              const g = (f.__vccOpts || f)[t];
              return g && Qn(g, n, o, a, s, i)();
            })
          );
        }
    }
  return r;
}
function WP(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function Wu(e) {
  const t = xt(Dl),
    n = xt(og),
    o = B(() => {
      const l = Qt(e.to);
      return t.resolve(l);
    }),
    i = B(() => {
      const { matched: l } = o.value,
        { length: c } = l,
        u = l[c - 1],
        f = n.matched;
      if (!u || !f.length) return -1;
      const h = f.findIndex(oi.bind(null, u));
      if (h > -1) return h;
      const g = qu(l[c - 2]);
      return c > 1 && qu(u) === g && f[f.length - 1].path !== g
        ? f.findIndex(oi.bind(null, l[c - 2]))
        : h;
    }),
    r = B(() => i.value > -1 && ZP(n.params, o.value.params)),
    a = B(
      () =>
        i.value > -1 &&
        i.value === n.matched.length - 1 &&
        Xh(n.params, o.value.params)
    );
  function s(l = {}) {
    return KP(l)
      ? t[Qt(e.replace) ? "replace" : "push"](Qt(e.to)).catch(Bi)
      : Promise.resolve();
  }
  return {
    route: o,
    href: B(() => o.value.href),
    isActive: r,
    isExactActive: a,
    navigate: s,
  };
}
const qP = j({
    name: "RouterLink",
    compatConfig: {
      MODE: 3,
    },
    props: {
      to: {
        type: [String, Object],
        required: !0,
      },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: {
        type: String,
        default: "page",
      },
    },
    useLink: Wu,
    setup(e, { slots: t }) {
      const n = Ze(Wu(e)),
        { options: o } = xt(Dl),
        i = B(() => ({
          [Yu(e.activeClass, o.linkActiveClass, "router-link-active")]:
            n.isActive,
          [Yu(
            e.exactActiveClass,
            o.linkExactActiveClass,
            "router-link-exact-active"
          )]: n.isExactActive,
        }));
      return () => {
        const r = t.default && t.default(n);
        return e.custom
          ? r
          : sl(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: i.value,
              },
              r
            );
      };
    },
  }),
  YP = qP;
function KP(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function ZP(e, t) {
  for (const n in t) {
    const o = t[n],
      i = e[n];
    if (typeof o == "string") {
      if (o !== i) return !1;
    } else if (!en(i) || i.length !== o.length || o.some((r, a) => r !== i[a]))
      return !1;
  }
  return !0;
}
function qu(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const Yu = (e, t, n) => e ?? t ?? n,
  GP = j({
    name: "RouterView",
    inheritAttrs: !1,
    props: {
      name: {
        type: String,
        default: "default",
      },
      route: Object,
    },
    compatConfig: {
      MODE: 3,
    },
    setup(e, { attrs: t, slots: n }) {
      const o = xt($s),
        i = B(() => e.route || o.value),
        r = xt(Uu, 0),
        a = B(() => {
          let c = Qt(r);
          const { matched: u } = i.value;
          let f;
          for (; (f = u[c]) && !f.components; ) c++;
          return c;
        }),
        s = B(() => i.value.matched[a.value]);
      Tn(
        Uu,
        B(() => a.value + 1)
      ),
        Tn(UP, s),
        Tn($s, i);
      const l = $();
      return (
        ie(
          () => [l.value, s.value, e.name],
          ([c, u, f], [h, g, S]) => {
            u &&
              ((u.instances[f] = c),
              g &&
                g !== u &&
                c &&
                c === h &&
                (u.leaveGuards.size || (u.leaveGuards = g.leaveGuards),
                u.updateGuards.size || (u.updateGuards = g.updateGuards))),
              c &&
                u &&
                (!g || !oi(u, g) || !h) &&
                (u.enterCallbacks[f] || []).forEach((p) => p(c));
          },
          {
            flush: "post",
          }
        ),
        () => {
          const c = i.value,
            u = e.name,
            f = s.value,
            h = f && f.components[u];
          if (!h)
            return Ku(n.default, {
              Component: h,
              route: c,
            });
          const g = f.props[u],
            S = g
              ? g === !0
                ? c.params
                : typeof g == "function"
                ? g(c)
                : g
              : null,
            y = sl(
              h,
              je({}, S, t, {
                onVnodeUnmounted: (v) => {
                  v.component.isUnmounted && (f.instances[u] = null);
                },
                ref: l,
              })
            );
          return (
            Ku(n.default, {
              Component: y,
              route: c,
            }) || y
          );
        }
      );
    },
  });
function Ku(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const QP = GP;
function XP(e) {
  const t = FP(e.routes, e),
    n = e.parseQuery || zP,
    o = e.stringifyQuery || ju,
    i = e.history,
    r = _i(),
    a = _i(),
    s = _i(),
    l = Qg(Wn);
  let c = Wn;
  Wo &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const u = es.bind(null, (E) => "" + E),
    f = es.bind(null, uP),
    h = es.bind(null, Zi);
  function g(E, V) {
    let N, ee;
    return (
      eg(E) ? ((N = t.getRecordMatcher(E)), (ee = V)) : (ee = E),
      t.addRoute(ee, N)
    );
  }
  function S(E) {
    const V = t.getRecordMatcher(E);
    V && t.removeRoute(V);
  }
  function p() {
    return t.getRoutes().map((E) => E.record);
  }
  function y(E) {
    return !!t.getRecordMatcher(E);
  }
  function v(E, V) {
    if (((V = je({}, V || l.value)), typeof E == "string")) {
      const A = ts(n, E, V.path),
        L = t.resolve(
          {
            path: A.path,
          },
          V
        ),
        q = i.createHref(A.fullPath);
      return je(A, L, {
        params: h(L.params),
        hash: Zi(A.hash),
        redirectedFrom: void 0,
        href: q,
      });
    }
    let N;
    if (E.path != null)
      N = je({}, E, {
        path: ts(n, E.path, V.path).path,
      });
    else {
      const A = je({}, E.params);
      for (const L in A) A[L] == null && delete A[L];
      (N = je({}, E, {
        params: f(A),
      })),
        (V.params = f(V.params));
    }
    const ee = t.resolve(N, V),
      ye = E.hash || "";
    ee.params = u(h(ee.params));
    const Ee = hP(
        o,
        je({}, E, {
          hash: sP(ye),
          path: ee.path,
        })
      ),
      T = i.createHref(Ee);
    return je(
      {
        fullPath: Ee,
        hash: ye,
        query: o === ju ? jP(E.query) : E.query || {},
      },
      ee,
      {
        redirectedFrom: void 0,
        href: T,
      }
    );
  }
  function m(E) {
    return typeof E == "string" ? ts(n, E, l.value.path) : je({}, E);
  }
  function b(E, V) {
    if (c !== E)
      return ii(8, {
        from: V,
        to: E,
      });
  }
  function w(E) {
    return I(E);
  }
  function C(E) {
    return w(
      je(m(E), {
        replace: !0,
      })
    );
  }
  function k(E) {
    const V = E.matched[E.matched.length - 1];
    if (V && V.redirect) {
      const { redirect: N } = V;
      let ee = typeof N == "function" ? N(E) : N;
      return (
        typeof ee == "string" &&
          ((ee =
            ee.includes("?") || ee.includes("#")
              ? (ee = m(ee))
              : {
                  path: ee,
                }),
          (ee.params = {})),
        je(
          {
            query: E.query,
            hash: E.hash,
            params: ee.path != null ? {} : E.params,
          },
          ee
        )
      );
    }
  }
  function I(E, V) {
    const N = (c = v(E)),
      ee = l.value,
      ye = E.state,
      Ee = E.force,
      T = E.replace === !0,
      A = k(N);
    if (A)
      return I(
        je(m(A), {
          state: typeof A == "object" ? je({}, ye, A.state) : ye,
          force: Ee,
          replace: T,
        }),
        V || N
      );
    const L = N;
    L.redirectedFrom = V;
    let q;
    return (
      !Ee &&
        gP(o, ee, N) &&
        ((q = ii(16, {
          to: L,
          from: ee,
        })),
        M(ee, ee, !0, !1)),
      (q ? Promise.resolve(q) : O(L, ee))
        .catch((U) => (Cn(U) ? (Cn(U, 2) ? U : De(U)) : se(U, L, ee)))
        .then((U) => {
          if (U) {
            if (Cn(U, 2))
              return I(
                je(
                  {
                    replace: T,
                  },
                  m(U.to),
                  {
                    state:
                      typeof U.to == "object" ? je({}, ye, U.to.state) : ye,
                    force: Ee,
                  }
                ),
                V || L
              );
          } else U = P(L, ee, !0, T, ye);
          return x(L, ee, U), U;
        })
    );
  }
  function _(E, V) {
    const N = b(E, V);
    return N ? Promise.reject(N) : Promise.resolve();
  }
  function R(E) {
    const V = ve.values().next().value;
    return V && typeof V.runWithContext == "function"
      ? V.runWithContext(E)
      : E();
  }
  function O(E, V) {
    let N;
    const [ee, ye, Ee] = JP(E, V);
    N = ns(ee.reverse(), "beforeRouteLeave", E, V);
    for (const A of ee)
      A.leaveGuards.forEach((L) => {
        N.push(Qn(L, E, V));
      });
    const T = _.bind(null, E, V);
    return (
      N.push(T),
      ue(N)
        .then(() => {
          N = [];
          for (const A of r.list()) N.push(Qn(A, E, V));
          return N.push(T), ue(N);
        })
        .then(() => {
          N = ns(ye, "beforeRouteUpdate", E, V);
          for (const A of ye)
            A.updateGuards.forEach((L) => {
              N.push(Qn(L, E, V));
            });
          return N.push(T), ue(N);
        })
        .then(() => {
          N = [];
          for (const A of Ee)
            if (A.beforeEnter)
              if (en(A.beforeEnter))
                for (const L of A.beforeEnter) N.push(Qn(L, E, V));
              else N.push(Qn(A.beforeEnter, E, V));
          return N.push(T), ue(N);
        })
        .then(
          () => (
            E.matched.forEach((A) => (A.enterCallbacks = {})),
            (N = ns(Ee, "beforeRouteEnter", E, V, R)),
            N.push(T),
            ue(N)
          )
        )
        .then(() => {
          N = [];
          for (const A of a.list()) N.push(Qn(A, E, V));
          return N.push(T), ue(N);
        })
        .catch((A) => (Cn(A, 8) ? A : Promise.reject(A)))
    );
  }
  function x(E, V, N) {
    s.list().forEach((ee) => R(() => ee(E, V, N)));
  }
  function P(E, V, N, ee, ye) {
    const Ee = b(E, V);
    if (Ee) return Ee;
    const T = V === Wn,
      A = Wo ? history.state : {};
    N &&
      (ee || T
        ? i.replace(
            E.fullPath,
            je(
              {
                scroll: T && A && A.scroll,
              },
              ye
            )
          )
        : i.push(E.fullPath, ye)),
      (l.value = E),
      M(E, V, N, T),
      De();
  }
  let D;
  function Q() {
    D ||
      (D = i.listen((E, V, N) => {
        if (!ne.listening) return;
        const ee = v(E),
          ye = k(ee);
        if (ye) {
          I(
            je(ye, {
              replace: !0,
            }),
            ee
          ).catch(Bi);
          return;
        }
        c = ee;
        const Ee = l.value;
        Wo && CP($u(Ee.fullPath, N.delta), wa()),
          O(ee, Ee)
            .catch((T) =>
              Cn(T, 12)
                ? T
                : Cn(T, 2)
                ? (I(T.to, ee)
                    .then((A) => {
                      Cn(A, 20) &&
                        !N.delta &&
                        N.type === Gi.pop &&
                        i.go(-1, !1);
                    })
                    .catch(Bi),
                  Promise.reject())
                : (N.delta && i.go(-N.delta, !1), se(T, ee, Ee))
            )
            .then((T) => {
              (T = T || P(ee, Ee, !1)),
                T &&
                  (N.delta && !Cn(T, 8)
                    ? i.go(-N.delta, !1)
                    : N.type === Gi.pop && Cn(T, 20) && i.go(-1, !1)),
                x(ee, Ee, T);
            })
            .catch(Bi);
      }));
  }
  let oe = _i(),
    H = _i(),
    J;
  function se(E, V, N) {
    De(E);
    const ee = H.list();
    return (
      ee.length ? ee.forEach((ye) => ye(E, V, N)) : console.error(E),
      Promise.reject(E)
    );
  }
  function Ie() {
    return J && l.value !== Wn
      ? Promise.resolve()
      : new Promise((E, V) => {
          oe.add([E, V]);
        });
  }
  function De(E) {
    return (
      J ||
        ((J = !E),
        Q(),
        oe.list().forEach(([V, N]) => (E ? N(E) : V())),
        oe.reset()),
      E
    );
  }
  function M(E, V, N, ee) {
    const { scrollBehavior: ye } = e;
    if (!Wo || !ye) return Promise.resolve();
    const Ee =
      (!N && _P($u(E.fullPath, 0))) ||
      ((ee || !N) && history.state && history.state.scroll) ||
      null;
    return Ae()
      .then(() => ye(E, V, Ee))
      .then((T) => T && SP(T))
      .catch((T) => se(T, E, V));
  }
  const K = (E) => i.go(E);
  let fe;
  const ve = new Set(),
    ne = {
      currentRoute: l,
      listening: !0,
      addRoute: g,
      removeRoute: S,
      hasRoute: y,
      getRoutes: p,
      resolve: v,
      options: e,
      push: w,
      replace: C,
      go: K,
      back: () => K(-1),
      forward: () => K(1),
      beforeEach: r.add,
      beforeResolve: a.add,
      afterEach: s.add,
      onError: H.add,
      isReady: Ie,
      install(E) {
        const V = this;
        E.component("RouterLink", YP),
          E.component("RouterView", QP),
          (E.config.globalProperties.$router = V),
          Object.defineProperty(E.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => Qt(l),
          }),
          Wo &&
            !fe &&
            l.value === Wn &&
            ((fe = !0), w(i.location).catch((ye) => {}));
        const N = {};
        for (const ye in Wn)
          Object.defineProperty(N, ye, {
            get: () => l.value[ye],
            enumerable: !0,
          });
        E.provide(Dl, V), E.provide(og, kd(N)), E.provide($s, l);
        const ee = E.unmount;
        ve.add(E),
          (E.unmount = function () {
            ve.delete(E),
              ve.size < 1 &&
                ((c = Wn),
                D && D(),
                (D = null),
                (l.value = Wn),
                (fe = !1),
                (J = !1)),
              ee();
          });
      },
    };
  function ue(E) {
    return E.reduce((V, N) => V.then(() => R(N)), Promise.resolve());
  }
  return ne;
}
function JP(e, t) {
  const n = [],
    o = [],
    i = [],
    r = Math.max(t.matched.length, e.matched.length);
  for (let a = 0; a < r; a++) {
    const s = t.matched[a];
    s && (e.matched.find((c) => oi(c, s)) ? o.push(s) : n.push(s));
    const l = e.matched[a];
    l && (t.matched.find((c) => oi(c, l)) || i.push(l));
  }
  return [n, o, i];
}
const Yr = XP({
  history: EP("/"),
  routes: [
    {
      path: "/",
      component: () =>
        ze(() => import("./Mining-BgDsHiny.js"), __vite__mapDeps([0, 1])),
    },
    {
      path: "/mining",
      name: "mining",
      component: () =>
        ze(() => import("./Mining-BgDsHiny.js"), __vite__mapDeps([0, 1])),
    },
    {
      path: "/content",
      component: () =>
        ze(() => import("./Content-BcTvWb3Y.js"), __vite__mapDeps([2, 3, 4])),
    },
    {
      path: "/improve",
      component: () =>
        ze(() => import("./Improve-H-0DReHJ.js"), __vite__mapDeps([5, 6, 7])),
    },
    {
      path: "/improve/:routeCategory",
      component: () =>
        ze(() => import("./Improve-H-0DReHJ.js"), __vite__mapDeps([5, 6, 7])),
    },
    {
      path: "/improve/:routeCategory/:routeKey",
      component: () =>
        ze(() => import("./Improve-H-0DReHJ.js"), __vite__mapDeps([5, 6, 7])),
    },
    {
      path: "/friends",
      name: "Friends",
      component: () =>
        ze(() => import("./Friends-DwvjFekC.js"), __vite__mapDeps([8, 9])),
    },
    {
      path: "/communities",
      name: "communities",
      component: () =>
        ze(
          () => import("./Communities-Bbbv2Pya.js"),
          __vite__mapDeps([10, 11])
        ),
    },
    {
      path: "/rich/list",
      name: "rich_list",
      component: () =>
        ze(
          () => import("./RichList-RWbQwmc_.js"),
          __vite__mapDeps([12, 13, 14])
        ),
    },
    {
      path: "/negotiations",
      name: "negotiations",
      component: () =>
        ze(
          () => import("./Negotiations-D0J0yb7V.js"),
          __vite__mapDeps([15, 16])
        ),
    },
    {
      path: "/negotiations/leaderboards",
      name: "negotiations_leaderboards",
      component: () =>
        ze(
          () => import("./NegotiationsLeaderboards-DuDcXnV1.js"),
          __vite__mapDeps([17, 18])
        ),
    },
    {
      path: "/quests",
      name: "quests",
      component: () =>
        ze(
          () => import("./Quests-CBoQlrvt.js"),
          __vite__mapDeps([19, 20, 21, 22])
        ),
    },
    {
      path: "/quests/:routeCategory",
      component: () =>
        ze(
          () => import("./Quests-CBoQlrvt.js"),
          __vite__mapDeps([19, 20, 21, 22])
        ),
    },
    {
      path: "/quests/:routeCategory/:routeKey",
      component: () =>
        ze(
          () => import("./Quests-CBoQlrvt.js"),
          __vite__mapDeps([19, 20, 21, 22])
        ),
    },
    {
      path: "/rating",
      name: "rating",
      component: () =>
        ze(() => import("./Rating-Bmacihkb.js"), __vite__mapDeps([23, 24])),
    },
    {
      path: "/hero",
      name: "hero",
      component: () =>
        ze(() => import("./Hero-BsKjhx-k.js"), __vite__mapDeps([25, 13, 26])),
    },
    {
      path: "/tg",
      name: "tg",
      component: () => ze(() => import("./Tg-DRfESpDS.js"), []),
    },
    {
      path: "/balance",
      name: "balance",
      component: () => ze(() => import("./Balance-DQpCbp7J.js"), []),
    },
    {
      path: "/fund",
      name: "fund",
      component: () =>
        ze(() => import("./Fund-CmkbevSf.js"), __vite__mapDeps([27, 28])),
    },
    {
      path: "/city",
      name: "city",
      component: () =>
        ze(() => import("./City-DSkOJDfo.js"), __vite__mapDeps([29, 30])),
    },
    {
      path: "/city2",
      name: "city2",
      component: () =>
        ze(() => import("./City2-UmAGx0GD.js"), __vite__mapDeps([31, 32])),
    },
    {
      path: "/translations",
      name: "translations",
      component: () => ze(() => import("./Translations-CX7S_ReV.js"), []),
    },
    {
      path: "/store",
      name: "store",
      component: () =>
        ze(
          () => import("./Store-Bbni_Ttm.js"),
          __vite__mapDeps([33, 6, 3, 34])
        ),
    },
    {
      path: "/store/:routeCategory",
      component: () =>
        ze(
          () => import("./Store-Bbni_Ttm.js"),
          __vite__mapDeps([33, 6, 3, 34])
        ),
    },
    {
      path: "/binar",
      component: () =>
        ze(() => import("./Binar-ChvTxoUS.js"), __vite__mapDeps([35, 36])),
    },
    {
      path: "/airdrop",
      component: () =>
        ze(
          () => import("./Airdrop-DqtwwnOe.js"),
          __vite__mapDeps([37, 20, 21, 38])
        ),
    },
    {
      path: "/empty",
      component: () => ze(() => import("./Empty-F6jKgfJa.js"), []),
    },
    {
      path: "/box",
      component: () =>
        ze(() => import("./Box-B7CvDHHv.js"), __vite__mapDeps([39, 40])),
    },
  ],
});
var eA = !1;
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let ig;
const Sa = (e) => (ig = e),
  rg = Symbol();
function Ls(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.toString.call(e) === "[object Object]" &&
    typeof e.toJSON != "function"
  );
}
var $i;
(function (e) {
  (e.direct = "direct"),
    (e.patchObject = "patch object"),
    (e.patchFunction = "patch function");
})($i || ($i = {}));
function tA() {
  const e = dd(!0),
    t = e.run(() => $({}));
  let n = [],
    o = [];
  const i = Gs({
    install(r) {
      Sa(i),
        (i._a = r),
        r.provide(rg, i),
        (r.config.globalProperties.$pinia = i),
        o.forEach((a) => n.push(a)),
        (o = []);
    },
    use(r) {
      return !this._a && !eA ? o.push(r) : n.push(r), this;
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t,
  });
  return i;
}
const ag = () => {};
function Zu(e, t, n, o = ag) {
  e.push(t);
  const i = () => {
    const r = e.indexOf(t);
    r > -1 && (e.splice(r, 1), o());
  };
  return !n && fd() && Ag(i), i;
}
function Uo(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const nA = (e) => e();
function Ms(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((n, o) => e.set(o, n)),
    e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n)) continue;
    const o = t[n],
      i = e[n];
    Ls(i) && Ls(o) && e.hasOwnProperty(n) && !rt(o) && !Co(o)
      ? (e[n] = Ms(i, o))
      : (e[n] = o);
  }
  return e;
}
const oA = Symbol();
function iA(e) {
  return !Ls(e) || !e.hasOwnProperty(oA);
}
const { assign: qn } = Object;
function rA(e) {
  return !!(rt(e) && e.effect);
}
function aA(e, t, n, o) {
  const { state: i, actions: r, getters: a } = t,
    s = n.state.value[e];
  let l;
  function c() {
    s || (n.state.value[e] = i ? i() : {});
    const u = em(n.state.value[e]);
    return qn(
      u,
      r,
      Object.keys(a || {}).reduce(
        (f, h) => (
          (f[h] = Gs(
            B(() => {
              Sa(n);
              const g = n._s.get(e);
              return a[h].call(g, g);
            })
          )),
          f
        ),
        {}
      )
    );
  }
  return (l = sg(e, c, t, n, o, !0)), l;
}
function sg(e, t, n = {}, o, i, r) {
  let a;
  const s = qn(
      {
        actions: {},
      },
      n
    ),
    l = {
      deep: !0,
    };
  let c,
    u,
    f = [],
    h = [],
    g;
  const S = o.state.value[e];
  !r && !S && (o.state.value[e] = {}), $({});
  let p;
  function y(_) {
    let R;
    (c = u = !1),
      typeof _ == "function"
        ? (_(o.state.value[e]),
          (R = {
            type: $i.patchFunction,
            storeId: e,
            events: g,
          }))
        : (Ms(o.state.value[e], _),
          (R = {
            type: $i.patchObject,
            payload: _,
            storeId: e,
            events: g,
          }));
    const O = (p = Symbol());
    Ae().then(() => {
      p === O && (c = !0);
    }),
      (u = !0),
      Uo(f, R, o.state.value[e]);
  }
  const v = r
    ? function () {
        const { state: R } = n,
          O = R ? R() : {};
        this.$patch((x) => {
          qn(x, O);
        });
      }
    : ag;
  function m() {
    a.stop(), (f = []), (h = []), o._s.delete(e);
  }
  function b(_, R) {
    return function () {
      Sa(o);
      const O = Array.from(arguments),
        x = [],
        P = [];
      function D(H) {
        x.push(H);
      }
      function Q(H) {
        P.push(H);
      }
      Uo(h, {
        args: O,
        name: _,
        store: C,
        after: D,
        onError: Q,
      });
      let oe;
      try {
        oe = R.apply(this && this.$id === e ? this : C, O);
      } catch (H) {
        throw (Uo(P, H), H);
      }
      return oe instanceof Promise
        ? oe
            .then((H) => (Uo(x, H), H))
            .catch((H) => (Uo(P, H), Promise.reject(H)))
        : (Uo(x, oe), oe);
    };
  }
  const w = {
      _p: o,
      $id: e,
      $onAction: Zu.bind(null, h),
      $patch: y,
      $reset: v,
      $subscribe(_, R = {}) {
        const O = Zu(f, _, R.detached, () => x()),
          x = a.run(() =>
            ie(
              () => o.state.value[e],
              (P) => {
                (R.flush === "sync" ? u : c) &&
                  _(
                    {
                      storeId: e,
                      type: $i.direct,
                      events: g,
                    },
                    P
                  );
              },
              qn({}, l, R)
            )
          );
        return O;
      },
      $dispose: m,
    },
    C = Ze(w);
  o._s.set(e, C);
  const I = ((o._a && o._a.runWithContext) || nA)(() =>
    o._e.run(() => (a = dd()).run(t))
  );
  for (const _ in I) {
    const R = I[_];
    if ((rt(R) && !rA(R)) || Co(R))
      r ||
        (S && iA(R) && (rt(R) ? (R.value = S[_]) : Ms(R, S[_])),
        (o.state.value[e][_] = R));
    else if (typeof R == "function") {
      const O = b(_, R);
      (I[_] = O), (s.actions[_] = R);
    }
  }
  return (
    qn(C, I),
    qn(Fe(C), I),
    Object.defineProperty(C, "$state", {
      get: () => o.state.value[e],
      set: (_) => {
        y((R) => {
          qn(R, _);
        });
      },
    }),
    o._p.forEach((_) => {
      qn(
        C,
        a.run(() =>
          _({
            store: C,
            app: o._a,
            pinia: o,
            options: s,
          })
        )
      );
    }),
    S && r && n.hydrate && n.hydrate(C.$state, S),
    (c = !0),
    (u = !0),
    C
  );
}
function $l(e, t, n) {
  let o, i;
  const r = typeof t == "function";
  typeof e == "string" ? ((o = e), (i = r ? n : t)) : ((i = e), (o = e.id));
  function a(s, l) {
    const c = Vm();
    return (
      (s = s || (c ? xt(rg, null) : null)),
      s && Sa(s),
      (s = ig),
      s._s.has(o) || (r ? sg(o, t, i, s) : aA(o, i, s)),
      s._s.get(o)
    );
  }
  return (a.$id = o), a;
}
const sA = {
    methods: {
      async dbLoadDbData(e = ["all"]) {
        try {
          let t, n;
          ([t, n] = await Promise.all([
            this.apiCall("loadDb", {
              dbs: e,
              lang: this.stores.user.settings.lang,
            }),
            this.apiCall("assets"),
          ])),
            this.dbStoreDbs(t),
            this.dbStoreAssets(n);
        } catch (t) {
          Yi({
            type: "danger",
            message:
              this.t("Problem with data loading. Please Reload Page. Error:") +
              " " +
              t,
          });
        }
      },
      dbStoreDbs(e) {
        Object.keys(e).forEach((t) => {
          if (t === "dbSkills") {
            const n = e[t].map(
              (o) => (
                (o.title = o.title.replaceAll("{", "").replaceAll("}", "")),
                (o.desc = o.desc.replaceAll("{", "").replaceAll("}", "")),
                o
              )
            );
            this.stores.db.setSkills(n);
          }
          if (
            (t === "dbLevels" && this.stores.db.setLevels(e[t]),
            t === "dbSkillCategory" && this.stores.db.setSkillCategory(e[t]),
            t === "dbSkillSubcategory" &&
              this.stores.db.setSkillSubcategory(e[t]),
            t === "dbNegotiationsLeague" &&
              this.stores.db.setNegotiationsLeague(e[t]),
            t === "dbNegotiationsStrategy" &&
              this.stores.db.setNegotiationsStrategy(e[t]),
            t === "dbDailyRewards" && this.stores.db.setDailyRewards(e[t]),
            t === "dbTranslation" && this.stores.db.setTranslation(e[t]),
            t === "dbQuests")
          ) {
            const n = e[t].map((o) => {
              var i, r;
              return (
                o.checkType === "improve" &&
                  o.checkData in this.dbSkillsByKey &&
                  ((o.title = o.title.replace(
                    "{skillName}",
                    (i = this.dbSkillsByKey[o.checkData]) == null
                      ? void 0
                      : i.title
                  )),
                  (o.desc = o.desc.replace(
                    "{skillName}",
                    (r = this.dbSkillsByKey[o.checkData]) == null
                      ? void 0
                      : r.title
                  ))),
                (o.title = o.title.replaceAll("{", "").replaceAll("}", "")),
                (o.desc = o.desc.replaceAll("{", "").replaceAll("}", "")),
                o
              );
            });
            this.stores.db.setQuests(n);
          }
          if (
            (t === "dbLang" && this.stores.db.setLangs(e[t]), t === "dbFunds")
          ) {
            const n = e[t].map(
              (o) => (
                (o.title = o.title.replaceAll("{", "").replaceAll("}", "")),
                (o.desc = o.desc.replaceAll("{", "").replaceAll("}", "")),
                o
              )
            );
            this.stores.db.setFunds(n);
          }
          t === "dbFundsRisk" && this.stores.db.setFundsRisk(e[t]),
            t === "dbContentPrice" && this.stores.db.setContentPrice(e[t]),
            t === "dbOnboarding" && this.stores.db.setOnboarding(e[t]),
            t === "gameConfig" && (window.gameConfig = e[t]);
        });
      },
      dbStoreAssets(e) {
        Object.keys(e).forEach((t) => {
          if (t === "dbPurchase") {
            const n = e[t].map(
              (o) => (
                (o.title = o.title.replaceAll("{", "").replaceAll("}", "")),
                (o.desc = o.desc.replaceAll("{", "").replaceAll("}", "")),
                o
              )
            );
            this.stores.db.setPurchases(n);
          }
        });
      },
    },
    computed: {
      dbSkinsByKey() {
        return this._arrayByKey(
          this.dbPurchase.filter((e) => e.type === "skin"),
          "key"
        );
      },
      dbLevelsByLevel() {
        return this._arrayByKey(this.dbLevels, "level");
      },
      dbLangByKey() {
        return this._arrayByKey(this.dbLang, "key");
      },
      dbSkillsByKey() {
        return this._arrayByKey(this.dbSkills, "key");
      },
      dbSkillNeedToUpdateQuest() {
        return this.dbQuests
          .filter((e) => e.checkType === "improve")
          .map((e) => e.checkData);
      },
      dbSkillSubcategoryByKey() {
        return this._arrayByKey(this.dbSkillSubcategory, "key");
      },
      dbNegotiationsLeagueByKey() {
        return this._arrayByKey(this.dbNegotiationsLeague, "key");
      },
      dbNegotiationsStrategyByKey() {
        return this._arrayByKey(this.dbNegotiationsStrategy, "key");
      },
      dbMiningData() {
        return {
          energy_capacity: [
            1e3, 2e3, 3e3, 4e3, 5500, 7e3, 9e3, 1e4, 11500, 14e3, 14500, 16e3,
            18e3, 21e3, 26e3, 33e3, 36e3, 42e3, 5e4, 55e3, 6e4, 7e4, 8e4, 105e3,
            14e4, 18e4, 255e3, 37e4, 465e3, 65e4, 93e4, 1e6, 13e5, 16e5, 18e5,
            21e5, 25e5, 28e5, 35e5, 45e5, 49e5, 58e5, 7e6, 82e5, 105e5, 14e6,
            155e5, 185e5, 23e6, 292e5, 415e5, 6e7, 81e6, 12e7, 19e7, 25e7, 37e7,
            56e7, 77e7, 118e7, 18e8, 258e7, 415e7, 65e8, 774e7, 1245e7, 195e8,
            2322e7, 3735e7, 585e8, 6966e7, 11205e7, 1755e8, 20898e7, 33615e7,
            5265e8, 62694e7, 100845e7, 15795e8, 188082e7, 302535e7, 47385e8,
          ],
          profit_per_tap_power: [
            3, 5, 9, 13, 18, 24, 35, 37, 42, 51, 55, 59, 68, 77, 95, 119, 132,
            154, 189, 200, 220, 264, 308, 396, 506, 660, 946, 1364, 1716, 2200,
            3300, 3740, 4400, 5500, 6600, 7700, 9900, 11e3, 13200, 17600, 19800,
            22e3, 26400, 33e3, 44e3, 51e3, 62e3, 66e3, 88e3, 11e4, 154e3, 22e4,
            33e4, 44e4, 66e4, 88e4, 132e4, 198e4, 286e4, 44e5, 66e5, 88e5,
            154e5, 242e5, 264e5, 462e5, 726e5, 792e5, 1386e5, 2178e5, 2376e5,
            4158e5, 6534e5, 7128e5, 12474e5, 19602e5, 21384e5, 37422e5, 58806e5,
            64152e5, 112266e5, 176418e5,
          ],
          energy_recovery: [
            1, 3, 4, 6, 8, 11, 16, 17, 19, 23, 25, 27, 31, 35, 43, 54, 60, 70,
            86, 91, 100, 120, 140, 180, 230, 300, 430, 620, 780, 1e3, 1500,
            1700, 2e3, 2500, 3e3, 3500, 4500, 5e3, 6e3, 8e3, 9e3, 1e4, 12e3,
            15e3, 2e4, 23e3, 28e3, 3e4, 4e4, 5e4, 7e4, 1e5, 15e4, 2e5, 3e5, 4e5,
            6e5, 9e5, 13e5, 2e6, 3e6, 4e6, 7e6, 11e6, 12e6, 21e6, 33e6, 36e6,
            63e6, 99e6, 108e6, 189e6, 297e6, 324e6, 567e6, 891e6, 972e6, 1701e6,
            2673e6, 2916e6, 5103e6, 8019e6,
          ],
          bonus_chance: [
            4, 5, 6, 7, 8, 8.5, 9, 9.2, 9.4, 9.6, 9.8, 10, 10.2, 10.4, 10.6,
            10.8, 11, 11.2, 11.4, 11.6, 11.8, 12, 12.2, 12.4, 12.6, 12.8, 13,
            13.2, 13.4, 13.6, 13.8, 14, 14.2, 14.4, 14.6, 14.8, 15, 15.2, 15.4,
            15.6, 15.8, 16, 16.2, 16.4, 16.6, 16.8, 17, 17.2, 17.4, 17.6, 17.8,
            18, 18.2, 18.4, 18.6, 18.8, 19, 19.2, 19.4, 19.6, 19.8, 20, 20.2,
            20.4, 20.6, 20.8, 21, 21.2, 21.4, 21.6, 21.8, 22, 22.2, 22.4, 22.6,
            22.8, 23, 23.2, 23.4, 23.6, 23.8, 24,
          ],
          bonus_multiplier: [
            20, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75,
            78, 81, 84, 87, 89, 91, 93, 95, 97, 99, 101, 103, 105, 107, 109,
            111, 113, 115, 117, 119, 121, 123, 125, 127, 129, 131, 133, 135,
            137, 139, 141, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152,
            153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165,
            166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176,
          ],
          enhanced_energy_capacity: [
            0, 2e3, 4e3, 4500, 5e3, 5500, 6e3, 7e3, 7500, 9e3, 11e3, 14e3, 15e3,
            18e3, 21e3, 25e3, 28e3, 32e3, 36e3, 45e3, 6e4, 75e3, 11e4, 16e4,
            2e5, 28e4, 35e4, 45e4, 6e5, 7e5, 8e5, 9e5, 11e5, 12e5, 15e5, 19e5,
            21e5, 25e5, 3e6, 35e5, 45e5, 6e6, 66e5, 79e5, 99e5, 125e5, 178e5,
            257e5, 35e6, 5e7, 8e7, 11e7, 16e7, 24e7, 33e7, 51e7, 771e6, 111e7,
            178e7, 279e7, 333e7, 534e7, 837e7, 999e7, 1602e7, 2511e7, 2997e7,
            4806e7, 7533e7, 8991e7, 14418e7, 22599e7, 26973e7, 43254e7, 67797e7,
            80919e7, 129762e7, 203391e7,
          ],
          enhanced_profit_per_tap_power: [
            0, 11, 13, 15, 18, 22, 24, 26, 29, 33, 40, 51, 57, 66, 81, 86, 88,
            110, 132, 176, 220, 286, 396, 594, 726, 880, 1320, 1760, 1980, 2420,
            2860, 3300, 4180, 4400, 5500, 7700, 8800, 9900, 11e3, 13200, 19800,
            22e3, 24200, 28600, 37400, 44e3, 66e3, 88e3, 132e3, 198e3, 286e3,
            374e3, 55e4, 88e4, 132e4, 198e4, 22e5, 44e5, 66e5, 11e6, 132e5,
            198e5, 33e6, 396e5, 594e5, 99e6, 1188e5, 1782e5, 297e6, 3564e5,
            5346e5, 891e6, 10692e5, 16038e5, 2673e6, 32076e5, 48114e5, 8019e6,
          ],
          enhanced_energy_recovery: [
            0, 5, 6, 7, 8, 10, 11, 12, 13, 15, 18, 23, 26, 30, 37, 39, 40, 50,
            60, 80, 100, 130, 180, 270, 330, 400, 600, 800, 900, 1100, 1300,
            1500, 1900, 2e3, 2500, 3500, 4e3, 4500, 5e3, 6e3, 9e3, 1e4, 11e3,
            13e3, 17e3, 2e4, 3e4, 4e4, 6e4, 9e4, 13e4, 17e4, 25e4, 4e5, 6e5,
            9e5, 1e6, 2e6, 3e6, 5e6, 6e6, 9e6, 15e6, 18e6, 27e6, 45e6, 54e6,
            81e6, 135e6, 162e6, 243e6, 405e6, 486e6, 729e6, 1215e6, 1458e6,
            2187e6, 3645e6,
          ],
          enhanced_bonus_chance: [
            0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2, 1.3,
            1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7,
            2.8, 2.9, 3, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4, 4.1,
            4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 5, 5.1, 5.2, 5.3, 5.4, 5.5,
            5.6, 5.7, 5.8, 5.9, 6, 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 6.9,
            7, 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7,
          ],
          enhanced_bonus_multiplier: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
            36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 45.5, 46, 46.5, 47, 47.5,
            48, 48.5, 49, 49.5, 50, 50.5, 51, 51.5, 52, 52.5, 53, 53.5, 54,
            54.5, 55, 55.5, 56, 56.5, 57, 57.5, 58, 58.5, 59, 59.5, 60, 60.5,
            61,
          ],
        };
      },
      dbSkills() {
        return this.stores.db.skills || [];
      },
      dbLevels() {
        return this.stores.db.levels || [];
      },
      dbSkillCategory() {
        return this.stores.db.skillCategory || [];
      },
      dbSkillSubcategory() {
        return this.stores.db.skillSubcategory || [];
      },
      dbNegotiationsLeague() {
        return this.stores.db.negotiationsLeague || [];
      },
      dbNegotiationsStrategy() {
        return this.stores.db.negotiationsStrategy || [];
      },
      dbDailyRewards() {
        return this.stores.db.dailyRewards || [];
      },
      dbTranslation() {
        return this.stores.db.translation || [];
      },
      dbQuests() {
        return this.stores.db.quests || [];
      },
      dbLang() {
        return this.stores.db.langs || [];
      },
      dbFunds() {
        return this.stores.db.funds || [];
      },
      dbFundsRisk() {
        return this.stores.db.fundsRisk || [];
      },
      dbContentPrice() {
        return this.stores.db.contentPrice || [];
      },
      dbOnboarding() {
        return this.stores.db.onboarding || [];
      },
      dbPurchase() {
        return this.stores.db.purchases || [];
      },
      gameConfig() {
        return window.gameConfig || {};
      },
    },
    data() {
      return {};
    },
  },
  Et = $l("user", {
    state: () => ({
      authHash: null,
      profile: null,
      purchase: {},
      hero: {},
      skills: {},
      quests: [],
      questsDaily: [],
      questsContent: [],
      friends: [],
      settings: {},
      dailyRewards: {},
      tappedData: {},
      tappedToday: null,
      lastSendTappedDate: null,
    }),
    actions: {
      setAuthHash(e) {
        this.authHash = e;
      },
      setProfile(e) {
        this.profile = e;
      },
      setPurchase(e) {
        this.purchase = e;
      },
      setHero(e) {
        e && (this.hero = e);
      },
      setSkills(e) {
        this.skills = e;
      },
      setQuests(e) {
        this.quests = e;
      },
      setQuestsDaily(e) {
        this.questsDaily = e;
      },
      setQuestsContent(e) {
        this.questsContent = e;
      },
      setFriends(e) {
        this.friends = e.sort((t, n) =>
          n.bonusToTake === t.bonusToTake
            ? n.level - t.level
            : n.bonusToTake - t.bonusToTake
        );
      },
      setSettings(e) {
        this.settings = e;
      },
      setDailyRewards(e) {
        this.dailyRewards = e;
      },
      setTappedToday(e) {
        this.tappedToday = e;
      },
      addTappedData(e, t) {
        this.lastSendTappedDate || this.setLastSendTappedDate(new Date()),
          e in this.tappedData
            ? (this.tappedData[e] = {
                amount: this.tappedData[e].amount + t,
                currentEnergy: this.hero.earns[e].energy,
              })
            : (this.tappedData[e] = {
                amount: t,
                currentEnergy: this.hero.earns[e].energy,
              });
      },
      clearTappedData() {
        this.tappedData = {};
      },
      setLastSendTappedDate(e) {
        this.lastSendTappedDate = e;
      },
      addMoney(e) {
        this.hero.money += e;
      },
      energyAdd(e = "") {
        this._energyChange(!1, e);
      },
      energyRemove(e, t) {
        e in this.hero.earns && this._energyChange(!0, e, t);
      },
      _energyChange(e, t = "", n = null) {
        function o(r, a) {
          const s = r.energy + a;
          return s < 0 ? 0 : s > r.limit ? r.limit : s;
        }
        (t ? [t] : Object.keys(this.hero.earns)).forEach((r) => {
          e
            ? (n = -1 * (n || this.hero.earns[r].moneyPerTap))
            : (n = n || this.hero.earns[r].recoveryPerSecond),
            (this.hero.earns[r].energy = o(this.hero.earns[r], n));
        });
      },
    },
    getters: {
      getTappedAllMoney() {
        let e = 0;
        for (const t in this.tappedData)
          "amount" in this.tappedData[t] && (e += this.tappedData[t].amount);
        return e;
      },
    },
  }),
  Ca = $l("state", {
    state: () => ({
      topBar: {
        isNoBg: !1,
        isNeedBg: !1,
        isShowPph: !0,
        isShowMoney: !0,
        isShowLottery: !1,
        isShowAvatar: !0,
      },
      lastPingDate: new Date(),
      config: {
        isPvpOn: !1,
      },
      isTonWalletConnected: !1,
      isAfterDataLoaded: !1,
    }),
    actions: {
      setIsAfterDataLoaded() {
        this.isAfterDataLoaded = !0;
      },
      setIsTonWalletConnected(e) {
        this.isTonWalletConnected = e;
      },
      setPageSettings(e = null) {
        if (!e) {
          (this.topBar = {
            isNoBg: !1,
            isNeedBg: !1,
            isShowPph: !0,
            isShowMoney: !0,
            isShowLottery: !1,
            isShowAvatar: !0,
          }),
            (document.documentElement.style.background = ""),
            (document.body.style.background = "");
          return;
        }
        (this.topBar = {
          isNoBg: "isNoBg" in e ? e.isNoBg : !1,
          isNeedBg: "isNeedBg" in e ? e.isNeedBg : !1,
          isShowPph: "isShowPph" in e ? e.isShowPph : !0,
          isShowMoney: "isShowMoney" in e ? e.isShowMoney : !0,
          isShowLottery: "isShowLottery" in e ? e.isShowLottery : !1,
          isShowAvatar: "isShowAvatar" in e ? e.isShowAvatar : !0,
        }),
          (document.documentElement.style.background = "bg" in e ? e.bg : ""),
          (document.body.style.background = "bgBody" in e ? e.bgBody : "");
      },
      setTopBarIsNeedBg(e) {
        this.topBar.isNeedBg = e;
      },
      updateLastPingDate() {
        this.lastPingDate = new Date();
      },
    },
    getters: {},
  }),
  lg = $l("db", {
    state: () => ({
      skills: [],
      levels: [],
      skillCategory: [],
      skillSubcategory: [],
      negotiationsLeague: [],
      negotiationsStrategy: [],
      dailyRewards: [],
      translation: [],
      quests: [],
      langs: [],
      funds: [],
      fundsRisk: [],
      contentPrice: [],
      onboarding: [],
      purchases: [],
    }),
    actions: {
      setSkills(e) {
        this.skills = e;
      },
      setLevels(e) {
        this.levels = e;
      },
      setSkillCategory(e) {
        this.skillCategory = e;
      },
      setSkillSubcategory(e) {
        this.skillSubcategory = e;
      },
      setNegotiationsLeague(e) {
        this.negotiationsLeague = e;
      },
      setNegotiationsStrategy(e) {
        this.negotiationsStrategy = e;
      },
      setDailyRewards(e) {
        this.dailyRewards = e;
      },
      setTranslation(e) {
        this.translation = e;
      },
      setQuests(e) {
        this.quests = e;
      },
      setLangs(e) {
        this.langs = e;
      },
      setFunds(e) {
        this.funds = e;
      },
      setFundsRisk(e) {
        this.fundsRisk = e;
      },
      setContentPrice(e) {
        this.contentPrice = e;
      },
      setOnboarding(e) {
        this.onboarding = e;
      },
      setPurchases(e) {
        this.purchases = e;
      },
    },
  });
var cg = {},
  lA = (e) =>
    encodeURIComponent(e).replace(
      /[!'()*]/g,
      (t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`
    ),
  ug = "%[a-f0-9]{2}",
  Gu = new RegExp("(" + ug + ")|([^%]+?)", "gi"),
  Qu = new RegExp("(" + ug + ")+", "gi");
function Fs(e, t) {
  try {
    return [decodeURIComponent(e.join(""))];
  } catch {}
  if (e.length === 1) return e;
  t = t || 1;
  var n = e.slice(0, t),
    o = e.slice(t);
  return Array.prototype.concat.call([], Fs(n), Fs(o));
}
function cA(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    for (var t = e.match(Gu) || [], n = 1; n < t.length; n++)
      (e = Fs(t, n).join("")), (t = e.match(Gu) || []);
    return e;
  }
}
function uA(e) {
  for (
    var t = {
        "%FE%FF": "��",
        "%FF%FE": "��",
      },
      n = Qu.exec(e);
    n;

  ) {
    try {
      t[n[0]] = decodeURIComponent(n[0]);
    } catch {
      var o = cA(n[0]);
      o !== n[0] && (t[n[0]] = o);
    }
    n = Qu.exec(e);
  }
  t["%C2"] = "�";
  for (var i = Object.keys(t), r = 0; r < i.length; r++) {
    var a = i[r];
    e = e.replace(new RegExp(a, "g"), t[a]);
  }
  return e;
}
var dA = function (e) {
    if (typeof e != "string")
      throw new TypeError(
        "Expected `encodedURI` to be of type `string`, got `" + typeof e + "`"
      );
    try {
      return (e = e.replace(/\+/g, " ")), decodeURIComponent(e);
    } catch {
      return uA(e);
    }
  },
  fA = (e, t) => {
    if (!(typeof e == "string" && typeof t == "string"))
      throw new TypeError("Expected the arguments to be of type `string`");
    if (t === "") return [e];
    const n = e.indexOf(t);
    return n === -1 ? [e] : [e.slice(0, n), e.slice(n + t.length)];
  },
  hA = function (e, t) {
    for (
      var n = {}, o = Object.keys(e), i = Array.isArray(t), r = 0;
      r < o.length;
      r++
    ) {
      var a = o[r],
        s = e[a];
      (i ? t.indexOf(a) !== -1 : t(a, s, e)) && (n[a] = s);
    }
    return n;
  };
(function (e) {
  const t = lA,
    n = dA,
    o = fA,
    i = hA,
    r = (v) => v == null;
  function a(v) {
    switch (v.arrayFormat) {
      case "index":
        return (m) => (b, w) => {
          const C = b.length;
          return w === void 0 ||
            (v.skipNull && w === null) ||
            (v.skipEmptyString && w === "")
            ? b
            : w === null
            ? [...b, [c(m, v), "[", C, "]"].join("")]
            : [...b, [c(m, v), "[", c(C, v), "]=", c(w, v)].join("")];
        };
      case "bracket":
        return (m) => (b, w) =>
          w === void 0 ||
          (v.skipNull && w === null) ||
          (v.skipEmptyString && w === "")
            ? b
            : w === null
            ? [...b, [c(m, v), "[]"].join("")]
            : [...b, [c(m, v), "[]=", c(w, v)].join("")];
      case "comma":
      case "separator":
        return (m) => (b, w) =>
          w == null || w.length === 0
            ? b
            : b.length === 0
            ? [[c(m, v), "=", c(w, v)].join("")]
            : [[b, c(w, v)].join(v.arrayFormatSeparator)];
      default:
        return (m) => (b, w) =>
          w === void 0 ||
          (v.skipNull && w === null) ||
          (v.skipEmptyString && w === "")
            ? b
            : w === null
            ? [...b, c(m, v)]
            : [...b, [c(m, v), "=", c(w, v)].join("")];
    }
  }
  function s(v) {
    let m;
    switch (v.arrayFormat) {
      case "index":
        return (b, w, C) => {
          if (
            ((m = /\[(\d*)\]$/.exec(b)), (b = b.replace(/\[\d*\]$/, "")), !m)
          ) {
            C[b] = w;
            return;
          }
          C[b] === void 0 && (C[b] = {}), (C[b][m[1]] = w);
        };
      case "bracket":
        return (b, w, C) => {
          if (((m = /(\[\])$/.exec(b)), (b = b.replace(/\[\]$/, "")), !m)) {
            C[b] = w;
            return;
          }
          if (C[b] === void 0) {
            C[b] = [w];
            return;
          }
          C[b] = [].concat(C[b], w);
        };
      case "comma":
      case "separator":
        return (b, w, C) => {
          const k = typeof w == "string" && w.includes(v.arrayFormatSeparator),
            I =
              typeof w == "string" &&
              !k &&
              u(w, v).includes(v.arrayFormatSeparator);
          w = I ? u(w, v) : w;
          const _ =
            k || I
              ? w.split(v.arrayFormatSeparator).map((R) => u(R, v))
              : w === null
              ? w
              : u(w, v);
          C[b] = _;
        };
      default:
        return (b, w, C) => {
          if (C[b] === void 0) {
            C[b] = w;
            return;
          }
          C[b] = [].concat(C[b], w);
        };
    }
  }
  function l(v) {
    if (typeof v != "string" || v.length !== 1)
      throw new TypeError(
        "arrayFormatSeparator must be single character string"
      );
  }
  function c(v, m) {
    return m.encode ? (m.strict ? t(v) : encodeURIComponent(v)) : v;
  }
  function u(v, m) {
    return m.decode ? n(v) : v;
  }
  function f(v) {
    return Array.isArray(v)
      ? v.sort()
      : typeof v == "object"
      ? f(Object.keys(v))
          .sort((m, b) => Number(m) - Number(b))
          .map((m) => v[m])
      : v;
  }
  function h(v) {
    const m = v.indexOf("#");
    return m !== -1 && (v = v.slice(0, m)), v;
  }
  function g(v) {
    let m = "";
    const b = v.indexOf("#");
    return b !== -1 && (m = v.slice(b)), m;
  }
  function S(v) {
    v = h(v);
    const m = v.indexOf("?");
    return m === -1 ? "" : v.slice(m + 1);
  }
  function p(v, m) {
    return (
      m.parseNumbers &&
      !Number.isNaN(Number(v)) &&
      typeof v == "string" &&
      v.trim() !== ""
        ? (v = Number(v))
        : m.parseBooleans &&
          v !== null &&
          (v.toLowerCase() === "true" || v.toLowerCase() === "false") &&
          (v = v.toLowerCase() === "true"),
      v
    );
  }
  function y(v, m) {
    (m = Object.assign(
      {
        decode: !0,
        sort: !0,
        arrayFormat: "none",
        arrayFormatSeparator: ",",
        parseNumbers: !1,
        parseBooleans: !1,
      },
      m
    )),
      l(m.arrayFormatSeparator);
    const b = s(m),
      w = Object.create(null);
    if (typeof v != "string" || ((v = v.trim().replace(/^[?#&]/, "")), !v))
      return w;
    for (const C of v.split("&")) {
      if (C === "") continue;
      let [k, I] = o(m.decode ? C.replace(/\+/g, " ") : C, "=");
      (I =
        I === void 0
          ? null
          : ["comma", "separator"].includes(m.arrayFormat)
          ? I
          : u(I, m)),
        b(u(k, m), I, w);
    }
    for (const C of Object.keys(w)) {
      const k = w[C];
      if (typeof k == "object" && k !== null)
        for (const I of Object.keys(k)) k[I] = p(k[I], m);
      else w[C] = p(k, m);
    }
    return m.sort === !1
      ? w
      : (m.sort === !0
          ? Object.keys(w).sort()
          : Object.keys(w).sort(m.sort)
        ).reduce((C, k) => {
          const I = w[k];
          return (
            I && typeof I == "object" && !Array.isArray(I)
              ? (C[k] = f(I))
              : (C[k] = I),
            C
          );
        }, Object.create(null));
  }
  (e.extract = S),
    (e.parse = y),
    (e.stringify = (v, m) => {
      if (!v) return "";
      (m = Object.assign(
        {
          encode: !0,
          strict: !0,
          arrayFormat: "none",
          arrayFormatSeparator: ",",
        },
        m
      )),
        l(m.arrayFormatSeparator);
      const b = (I) =>
          (m.skipNull && r(v[I])) || (m.skipEmptyString && v[I] === ""),
        w = a(m),
        C = {};
      for (const I of Object.keys(v)) b(I) || (C[I] = v[I]);
      const k = Object.keys(C);
      return (
        m.sort !== !1 && k.sort(m.sort),
        k
          .map((I) => {
            const _ = v[I];
            return _ === void 0
              ? ""
              : _ === null
              ? c(I, m)
              : Array.isArray(_)
              ? _.reduce(w(I), []).join("&")
              : c(I, m) + "=" + c(_, m);
          })
          .filter((I) => I.length > 0)
          .join("&")
      );
    }),
    (e.parseUrl = (v, m) => {
      m = Object.assign(
        {
          decode: !0,
        },
        m
      );
      const [b, w] = o(v, "#");
      return Object.assign(
        {
          url: b.split("?")[0] || "",
          query: y(S(v), m),
        },
        m && m.parseFragmentIdentifier && w
          ? {
              fragmentIdentifier: u(w, m),
            }
          : {}
      );
    }),
    (e.stringifyUrl = (v, m) => {
      m = Object.assign(
        {
          encode: !0,
          strict: !0,
        },
        m
      );
      const b = h(v.url).split("?")[0] || "",
        w = e.extract(v.url),
        C = e.parse(w, {
          sort: !1,
        }),
        k = Object.assign(C, v.query);
      let I = e.stringify(k, m);
      I && (I = `?${I}`);
      let _ = g(v.url);
      return (
        v.fragmentIdentifier && (_ = `#${c(v.fragmentIdentifier, m)}`),
        `${b}${I}${_}`
      );
    }),
    (e.pick = (v, m, b) => {
      b = Object.assign(
        {
          parseFragmentIdentifier: !0,
        },
        b
      );
      const { url: w, query: C, fragmentIdentifier: k } = e.parseUrl(v, b);
      return e.stringifyUrl(
        {
          url: w,
          query: i(C, m),
          fragmentIdentifier: k,
        },
        b
      );
    }),
    (e.exclude = (v, m, b) => {
      const w = Array.isArray(m) ? (C) => !m.includes(C) : (C, k) => !m(C, k);
      return e.pick(v, w, b);
    });
})(cg);
const dg = function (e) {
    let t = document.cookie.split(";");
    for (let n = 0; n < t.length; n++) {
      let o = t[n].split("=");
      if (e === o[0].trim()) return decodeURIComponent(o[1]);
    }
    return null;
  },
  gA = function (e) {
    const t = function (g) {
      var S = n(i(r(o(g), 8 * g.length)));
      return S.toLowerCase();
    };
    function n(g) {
      for (var S, p = "0123456789ABCDEF", y = "", v = 0; v < g.length; v++)
        (S = g.charCodeAt(v)),
          (y += p.charAt((S >>> 4) & 15) + p.charAt(15 & S));
      return y;
    }
    function o(g) {
      for (var S = Array(g.length >> 2), p = 0; p < S.length; p++) S[p] = 0;
      for (p = 0; p < 8 * g.length; p += 8)
        S[p >> 5] |= (255 & g.charCodeAt(p / 8)) << p % 32;
      return S;
    }
    function i(g) {
      for (var S = "", p = 0; p < 32 * g.length; p += 8)
        S += String.fromCharCode((g[p >> 5] >>> p % 32) & 255);
      return S;
    }
    function r(g, S) {
      (g[S >> 5] |= 128 << S % 32), (g[14 + (((S + 64) >>> 9) << 4)] = S);
      for (
        var p = 1732584193,
          y = -271733879,
          v = -1732584194,
          m = 271733878,
          b = 0;
        b < g.length;
        b += 16
      ) {
        var w = p,
          C = y,
          k = v,
          I = m;
        (y = u(
          (y = u(
            (y = u(
              (y = u(
                (y = c(
                  (y = c(
                    (y = c(
                      (y = c(
                        (y = l(
                          (y = l(
                            (y = l(
                              (y = l(
                                (y = s(
                                  (y = s(
                                    (y = s(
                                      (y = s(
                                        y,
                                        (v = s(
                                          v,
                                          (m = s(
                                            m,
                                            (p = s(
                                              p,
                                              y,
                                              v,
                                              m,
                                              g[b + 0],
                                              7,
                                              -680876936
                                            )),
                                            y,
                                            v,
                                            g[b + 1],
                                            12,
                                            -389564586
                                          )),
                                          p,
                                          y,
                                          g[b + 2],
                                          17,
                                          606105819
                                        )),
                                        m,
                                        p,
                                        g[b + 3],
                                        22,
                                        -1044525330
                                      )),
                                      (v = s(
                                        v,
                                        (m = s(
                                          m,
                                          (p = s(
                                            p,
                                            y,
                                            v,
                                            m,
                                            g[b + 4],
                                            7,
                                            -176418897
                                          )),
                                          y,
                                          v,
                                          g[b + 5],
                                          12,
                                          1200080426
                                        )),
                                        p,
                                        y,
                                        g[b + 6],
                                        17,
                                        -1473231341
                                      )),
                                      m,
                                      p,
                                      g[b + 7],
                                      22,
                                      -45705983
                                    )),
                                    (v = s(
                                      v,
                                      (m = s(
                                        m,
                                        (p = s(
                                          p,
                                          y,
                                          v,
                                          m,
                                          g[b + 8],
                                          7,
                                          1770035416
                                        )),
                                        y,
                                        v,
                                        g[b + 9],
                                        12,
                                        -1958414417
                                      )),
                                      p,
                                      y,
                                      g[b + 10],
                                      17,
                                      -42063
                                    )),
                                    m,
                                    p,
                                    g[b + 11],
                                    22,
                                    -1990404162
                                  )),
                                  (v = s(
                                    v,
                                    (m = s(
                                      m,
                                      (p = s(
                                        p,
                                        y,
                                        v,
                                        m,
                                        g[b + 12],
                                        7,
                                        1804603682
                                      )),
                                      y,
                                      v,
                                      g[b + 13],
                                      12,
                                      -40341101
                                    )),
                                    p,
                                    y,
                                    g[b + 14],
                                    17,
                                    -1502002290
                                  )),
                                  m,
                                  p,
                                  g[b + 15],
                                  22,
                                  1236535329
                                )),
                                (v = l(
                                  v,
                                  (m = l(
                                    m,
                                    (p = l(
                                      p,
                                      y,
                                      v,
                                      m,
                                      g[b + 1],
                                      5,
                                      -165796510
                                    )),
                                    y,
                                    v,
                                    g[b + 6],
                                    9,
                                    -1069501632
                                  )),
                                  p,
                                  y,
                                  g[b + 11],
                                  14,
                                  643717713
                                )),
                                m,
                                p,
                                g[b + 0],
                                20,
                                -373897302
                              )),
                              (v = l(
                                v,
                                (m = l(
                                  m,
                                  (p = l(p, y, v, m, g[b + 5], 5, -701558691)),
                                  y,
                                  v,
                                  g[b + 10],
                                  9,
                                  38016083
                                )),
                                p,
                                y,
                                g[b + 15],
                                14,
                                -660478335
                              )),
                              m,
                              p,
                              g[b + 4],
                              20,
                              -405537848
                            )),
                            (v = l(
                              v,
                              (m = l(
                                m,
                                (p = l(p, y, v, m, g[b + 9], 5, 568446438)),
                                y,
                                v,
                                g[b + 14],
                                9,
                                -1019803690
                              )),
                              p,
                              y,
                              g[b + 3],
                              14,
                              -187363961
                            )),
                            m,
                            p,
                            g[b + 8],
                            20,
                            1163531501
                          )),
                          (v = l(
                            v,
                            (m = l(
                              m,
                              (p = l(p, y, v, m, g[b + 13], 5, -1444681467)),
                              y,
                              v,
                              g[b + 2],
                              9,
                              -51403784
                            )),
                            p,
                            y,
                            g[b + 7],
                            14,
                            1735328473
                          )),
                          m,
                          p,
                          g[b + 12],
                          20,
                          -1926607734
                        )),
                        (v = c(
                          v,
                          (m = c(
                            m,
                            (p = c(p, y, v, m, g[b + 5], 4, -378558)),
                            y,
                            v,
                            g[b + 8],
                            11,
                            -2022574463
                          )),
                          p,
                          y,
                          g[b + 11],
                          16,
                          1839030562
                        )),
                        m,
                        p,
                        g[b + 14],
                        23,
                        -35309556
                      )),
                      (v = c(
                        v,
                        (m = c(
                          m,
                          (p = c(p, y, v, m, g[b + 1], 4, -1530992060)),
                          y,
                          v,
                          g[b + 4],
                          11,
                          1272893353
                        )),
                        p,
                        y,
                        g[b + 7],
                        16,
                        -155497632
                      )),
                      m,
                      p,
                      g[b + 10],
                      23,
                      -1094730640
                    )),
                    (v = c(
                      v,
                      (m = c(
                        m,
                        (p = c(p, y, v, m, g[b + 13], 4, 681279174)),
                        y,
                        v,
                        g[b + 0],
                        11,
                        -358537222
                      )),
                      p,
                      y,
                      g[b + 3],
                      16,
                      -722521979
                    )),
                    m,
                    p,
                    g[b + 6],
                    23,
                    76029189
                  )),
                  (v = c(
                    v,
                    (m = c(
                      m,
                      (p = c(p, y, v, m, g[b + 9], 4, -640364487)),
                      y,
                      v,
                      g[b + 12],
                      11,
                      -421815835
                    )),
                    p,
                    y,
                    g[b + 15],
                    16,
                    530742520
                  )),
                  m,
                  p,
                  g[b + 2],
                  23,
                  -995338651
                )),
                (v = u(
                  v,
                  (m = u(
                    m,
                    (p = u(p, y, v, m, g[b + 0], 6, -198630844)),
                    y,
                    v,
                    g[b + 7],
                    10,
                    1126891415
                  )),
                  p,
                  y,
                  g[b + 14],
                  15,
                  -1416354905
                )),
                m,
                p,
                g[b + 5],
                21,
                -57434055
              )),
              (v = u(
                v,
                (m = u(
                  m,
                  (p = u(p, y, v, m, g[b + 12], 6, 1700485571)),
                  y,
                  v,
                  g[b + 3],
                  10,
                  -1894986606
                )),
                p,
                y,
                g[b + 10],
                15,
                -1051523
              )),
              m,
              p,
              g[b + 1],
              21,
              -2054922799
            )),
            (v = u(
              v,
              (m = u(
                m,
                (p = u(p, y, v, m, g[b + 8], 6, 1873313359)),
                y,
                v,
                g[b + 15],
                10,
                -30611744
              )),
              p,
              y,
              g[b + 6],
              15,
              -1560198380
            )),
            m,
            p,
            g[b + 13],
            21,
            1309151649
          )),
          (v = u(
            v,
            (m = u(
              m,
              (p = u(p, y, v, m, g[b + 4], 6, -145523070)),
              y,
              v,
              g[b + 11],
              10,
              -1120210379
            )),
            p,
            y,
            g[b + 2],
            15,
            718787259
          )),
          m,
          p,
          g[b + 9],
          21,
          -343485551
        )),
          (p = f(p, w)),
          (y = f(y, C)),
          (v = f(v, k)),
          (m = f(m, I));
      }
      return Array(p, y, v, m);
    }
    function a(g, S, p, y, v, m) {
      return f(h(f(f(S, g), f(y, m)), v), p);
    }
    function s(g, S, p, y, v, m, b) {
      return a((S & p) | (~S & y), g, S, v, m, b);
    }
    function l(g, S, p, y, v, m, b) {
      return a((S & y) | (p & ~y), g, S, v, m, b);
    }
    function c(g, S, p, y, v, m, b) {
      return a(S ^ p ^ y, g, S, v, m, b);
    }
    function u(g, S, p, y, v, m, b) {
      return a(p ^ (S | ~y), g, S, v, m, b);
    }
    function f(g, S) {
      var p = (65535 & g) + (65535 & S);
      return (((g >> 16) + (S >> 16) + (p >> 16)) << 16) | (65535 & p);
    }
    function h(g, S) {
      return (g << S) | (g >>> (32 - S));
    }
    return t(e);
  },
  Xu = function (e, t) {
    return Object.keys(t).length === 0
      ? e
      : e +
          "?" +
          cg.stringify(t, {
            arrayFormat: "bracket",
          });
  },
  mA = function () {
    return Date.now();
  },
  vA = function () {
    return 1e3;
  },
  yA = function () {
    return Math.floor(mA() / vA());
  },
  bA = function (e, t) {
    return gA(encodeURIComponent(`${e}_${t}`));
  },
  pA = function (e, t) {
    const n = Et(),
      o = !!e;
    e instanceof Object && (e = JSON.stringify(e));
    const i = yA(),
      r = bA(i, o ? e : "");
    return {
      method: o ? "post" : "get",
      credentials: "include",
      ...t,
      headers: {
        "Content-Type": "application/json",
        "Api-Key": n.authHash ?? "empty",
        "Api-Time": i,
        "Api-Hash": r,
        "Is-Beta-Server": dg("is_beta_server"),
      },
      body: o ? e : null,
    };
  },
  wA = async function (e, t, n) {
    const o = `https://${Uh}${e}`;
    let i = null,
      r = 1e3,
      a = null;
    for (let s = 1; s < 5; s++)
      try {
        i = await (await fetch(Xu(o, t), pA(n))).json();
        break;
      } catch (l) {
        await new Promise((c) => setTimeout(c, r * Math.pow(1.8, s))),
          console.error(l + ": " + Xu(o, t)),
          (a = l);
      }
    if (!i && a)
      throw new Error(
        "Network connection problems. Please try again with or without VPN."
      );
    return i;
  },
  _n = async function (e, t, n = !0) {
    console.log(`>>> api: ${e} request: %o`, t),
      [
        "ping",
        "sync",
        "questContentClaim",
        "fundInvest",
        "sendTappedData",
        "claimOfflineBonus",
        "improveSkill",
        "claimFriendReward",
        "claimQuest",
        "claimDailyReward",
        "getHero",
        "allUserData",
        "onboardingComplete",
      ].includes(e) && Ca().updateLastPingDate();
    const r = {
        auth: "/telegram/auth",
        getProfile: "/profile/info",
        profileSkinSelect: "/profile/skin/select",
        allUserData: "/user/data/all",
        allUserDataAfter: "/user/data/after",
        onboardingComplete: "/hero/onboarding/finish",
        resetOnboarding: "/hero/onboarding/reset",
        getHero: "/hero/info",
        sendTappedData: "/hero/action/tap",
        claimOfflineBonus: "/hero/bonus/offline/claim",
        sync: "/hero/balance/sync",
        ping: "/system/ping",
        getSkills: "/skills",
        improveSkill: "/skills/improve",
        getSettings: "/settings",
        setSettings: "/settings/save",
        getFriends: "/friends",
        claimFriendReward: "/friends/claim",
        claimBatchFriendReward: "/friends/claim/batch",
        connectFriend: "/friends/referrer/set",
        getQuests: "/quests/progress",
        claimQuest: "/quests/claim",
        checkQuest: "/quests/check",
        getDailyRewards: "/quests/daily",
        claimDailyReward: "/quests/daily/claim",
        questContentInfo: "/quests/content",
        questContentSubmit: "/quests/content/submit",
        questContentClaim: "/quests/content/claim",
        questContentRemove: "/quests/content/remove",
        allProgressDailyQuests: "/quests/daily/progress/all",
        claimProgressDailyQuest: "/quests/daily/progress/claim",
        pvpGetInfo: "/pvp/info",
        pvpClaim: "/pvp/claim",
        pvpFind: "/pvp/fight",
        pvpCancelFight: "/pvp/fight/cancel",
        pvpLeaderboard: "/pvp/leaderboard",
        communityLeaderboard: "/community/leaderboard",
        communityCreate: "/community/create",
        translationsGet: "/translations/info",
        translationsSubmit: "/translations/submit",
        fundInfo: "/fund/info",
        fundInvest: "/fund/invest",
        saveTonWallet: "/ton/wallet/save",
        validateTonWallet: "/ton/wallet/validate",
        loadDb: "/dbs",
        assets: "/assets",
        getRatings: "/ratings",
        adminReset: "/admin/reset",
        walletTopup: "/billing/invoice/create",
        richList: "/billing/rich/list",
        purchaseBuy: "/purchase/buy",
        purchaseList: "/purchase/list",
      }[e],
      a = await wA(
        r,
        {},
        {
          data: t,
        }
      );
    if (a.success) console.log(`>>> api: ${e} response: %o`, a.data);
    else
      throw (
        (Et().authHash &&
          n &&
          Yi({
            type: "danger",
            message: a.error ? a.error : "Some problem... please repeat",
          }),
        a.error)
      );
    return a.data;
  },
  SA = {
    data() {
      return {
        stores: {
          user: Et(),
          state: Ca(),
          db: lg(),
        },
      };
    },
    methods: {
      apiCall: _n,
    },
  },
  CA = {
    methods: {
      async auth() {
        const e = Et();
        try {
          const t = dg("user_auth_hash");
          t && e.setAuthHash(t);
          const n = window.Telegram.WebApp.initData,
            o = window.Telegram.WebApp.initDataUnsafe.hash,
            i = window.Telegram.WebApp.initDataUnsafe.start_param,
            r = window.Telegram.WebApp.initDataUnsafe.chat
              ? window.Telegram.WebApp.initDataUnsafe.chat.id
              : "",
            a = window.Telegram.WebApp.initDataUnsafe.chat_type,
            s = window.Telegram.WebApp.initDataUnsafe.chat_instance,
            l = window.Telegram.WebApp.initDataUnsafe.user
              ? window.Telegram.WebApp.initDataUnsafe.user.photo_url
              : "",
            c = "ios";
          await _n("auth", {
            initData: n,
            startParam: i,
            photoUrl: l,
            platform: c,
            chatId: r,
            chatType: a,
            chatInstance: s,
          }),
            t || e.setAuthHash(o);
        } catch (t) {
          if (t === "platform") throw t;
          console.log("Error auth: %o", t),
            Yi({
              type: "danger",
              message: this.t("Auth error") + ": " + t,
            });
        }
      },
      async loadHero() {
        const e = Et(),
          t = await _n("getHero", "");
        t && e.setHero(t);
      },
      async loadProfile() {
        const e = Et(),
          t = await _n("getProfile", "");
        t && e.setProfile(t);
      },
      async loadFriends() {
        const e = Et(),
          t = await _n("getFriends", "");
        t && e.setFriends(t);
      },
      async loadQuests() {
        const e = Et(),
          t = await _n("getQuests", "");
        t && e.setQuests(t);
      },
      async loadDailyRewards() {
        const e = Et(),
          t = await _n("getDailyRewards", "");
        t && e.setDailyRewards(t);
      },
      async loadSkills() {
        const e = Et(),
          t = await _n("getSkills", "");
        t && e.setSkills(t);
      },
      async loadSettings() {
        const e = Et(),
          t = await _n("getSettings", "");
        t && e.setSettings(t);
      },
      async loadPageData() {
        const e = Et(),
          t = await this.apiCall("allUserData", {
            lang: e.settings.lang,
          });
        this.dbStoreDbs(t.dbData),
          this.dbStoreAssets(t.dbAssets),
          e.setProfile(t.profile),
          e.setPurchase(t.purchase),
          e.setHero(t.hero),
          e.setSettings(t.settings);
      },
      async loadPageDataAfter() {
        const e = Et(),
          t = Ca(),
          n = await this.apiCall("allUserDataAfter", {
            lang: e.settings.lang,
          });
        e.setSkills(n.skills),
          e.setDailyRewards(n.dailyRewards),
          e.setQuests(n.quests),
          e.setQuestsDaily(n.questsDaily),
          e.setFriends(n.friends),
          t.setIsAfterDataLoaded();
      },
    },
    watch: {
      isRtl(e) {
        e
          ? window.document.body.classList.add("rtl")
          : window.document.body.classList.remove("rtl");
      },
    },
    computed: {
      uSkills() {
        return this.stores.user.skills || {};
      },
      uQuests() {
        return this.stores.user.quests || [];
      },
      uQuestsDaily() {
        return this.stores.user.questsDaily || {};
      },
      uQuestsContent() {
        return this.stores.user.questsContent || [];
      },
      uFriends() {
        return this.stores.user.friends || [];
      },
      uHero() {
        return this.stores.user.hero || {};
      },
      uProfile() {
        return this.stores.user.profile || {};
      },
      uPurchase() {
        return this.stores.user.purchase || {};
      },
      uDailyRewards() {
        return this.stores.user.dailyRewards || {};
      },
      uSettings() {
        return this.stores.user.settings || {};
      },
      uLevelPercent() {
        return this._getLevelPercent(this.uHero.level, this.uHero.exp);
      },
      uRefLink() {
        return `https://t.me/muskempire_bot/game?startapp=${this.uProfile.refCode}`;
      },
      isRtl() {
        return "lang" in this.uSettings &&
          this.uSettings.lang in this.dbLangByKey
          ? this.dbLangByKey[this.uSettings.lang].isRtl
          : !1;
      },
      isAbTestOnboardingHide() {
        return !!(this.uProfile.id % 2);
      },
    },
  },
  _A = {
    data: function () {
      return {
        onBoard: {
          start: ["1"],
          pph: ["20", "21"],
          money: ["30", "31"],
          perTap: ["40", "41"],
          energy: ["50", "51"],
          pvp: ["60"],
          pvpLeague: ["70"],
          pvpStrategy: ["80"],
          fund: ["90"],
          questsContent: ["100"],
          updatePopup: ["110"],
        },
        isFixed: !1,
      };
    },
    watch: {
      isFixed(e, t) {
        e !== t && this._stickyChange(e);
      },
    },
    methods: {
      _stickyChange(e) {
        this.stores.state.setTopBarIsNeedBg(e);
      },
      _stickyScroll(e) {
        this.isFixed = !!e.isFixed;
      },
      _catchError(e) {
        console.log("Error: %o", e),
          Yi({
            type: "danger",
            message:
              typeof e == "string"
                ? e
                : this.t("Some problem... please repeat"),
          });
      },
      async _delay(e) {
        await new Promise((t) => setTimeout(t, e));
      },
      t(e, t) {
        const n = function (o, i) {
          let r = o;
          return (
            i &&
              typeof i == "object" &&
              Object.keys(i).forEach(function (a) {
                r = r.replace(`{${a}}`, i[a]);
              }),
            (r = r.replaceAll("{", "").replaceAll("}", "")),
            r
          );
        };
        if (this.uSettings.lang !== "en") {
          const o = this.dbTranslation.find((i) => i.key === e);
          if (o) return n(o.title || e, t);
        }
        return n(e, t);
      },
      async _sendTappedData() {
        if (Object.keys(this.stores.user.tappedData).length) {
          const e = new Date(),
            t = this.stores.user.lastSendTappedDate;
          this.stores.user.setLastSendTappedDate(e);
          const n = this._cloneObject(this.stores.user.tappedData);
          this.stores.user.clearTappedData();
          let o = await this.apiCall("sendTappedData", {
            data: n,
            seconds: Math.ceil((e - t) / 1e3),
          });
          (o.hero.money += this.stores.user.getTappedAllMoney),
            (o.hero.earns = this._cloneObject(this.stores.user.hero.earns)),
            this.stores.user.setHero(o.hero),
            this.stores.user.setTappedToday(o.tapped_today);
        } else
          this.stores.user.lastSendTappedDate &&
            this.stores.user.setLastSendTappedDate(null);
      },
      async _completeOnboarding(e) {
        let t = this.uHero;
        "onboarding" in t || (t.onboarding = []);
        const n = e.filter((i) => !t.onboarding.includes(i));
        if (n.length === 0) return;
        const o = n[0];
        t.onboarding.push(o);
        try {
          const i = await this.apiCall("onboardingComplete", parseInt(o));
          this.stores.user.setHero(i);
        } catch (i) {
          console.log("Error: %o", i);
        }
      },
      _isOnboardingComplete(...e) {
        return "onboarding" in this.uHero
          ? !e.some(
              (t) =>
                t.filter((o) => !this.uHero.onboarding.includes(o)).length > 0
            )
          : !1;
      },
      async _resetOnboarding(e = []) {
        const t = await this.apiCall("resetOnboarding", e);
        this.stores.user.setHero(t.hero);
      },
      _cloneObject(e) {
        return JSON.parse(JSON.stringify(e));
      },
      _number(e) {
        return new Intl.NumberFormat().format(Math.round(e));
      },
      _numberExact(e) {
        return new Intl.NumberFormat().format(e);
      },
      _numberShort(e, t = !1) {
        const n = e >= 0 ? 1 : -1;
        if (e * n < 1e3) return Math.round(e);
        if (e * n >= 1e3 && e * n < 1e6) {
          const o = e / 1e3;
          return (
            (t || o % 1 === 0 ? Math.round(o) : Math.floor(o * 10) / 10) + "K"
          );
        }
        if (e * n >= 1e6 && e * n < 1e9) {
          const o = e / 1e6;
          return (
            (t || o % 1 === 0 ? Math.round(o) : Math.floor(o * 10) / 10) + "M"
          );
        }
        if (e * n >= 1e9 && e * n < 1e12) {
          const o = e / 1e9;
          return (
            (t || o % 1 === 0 ? Math.round(o) : Math.floor(o * 10) / 10) + "B"
          );
        }
        if (e * n >= 1e12) {
          const o = e / 1e12;
          return (
            (t || o % 1 === 0 ? Math.round(o) : Math.floor(o * 10) / 10) + "T"
          );
        }
      },
      _getRandomArrayElement(e) {
        const t = Math.floor(Math.random() * e.length);
        return e[t];
      },
      _isEmptyObject(e) {
        return Object.keys(e).length === 0;
      },
      _rand(e, t = 0) {
        return t
          ? Math.floor(Math.random() * (t - e + 1)) + e
          : Math.floor(Math.random() * e);
      },
      _vibrate(e = "light") {
        this.uSettings.vibrate &&
          (e in ["light", "medium", "heavy", "rigid", "soft"]
            ? window.Telegram.WebApp.HapticFeedback.impactOccurred(e)
            : e in ["error", "success", "warning"]
            ? window.Telegram.WebApp.HapticFeedback.notificationOccurred(e)
            : window.Telegram.WebApp.HapticFeedback.selectionChanged());
      },
      _isIphone() {
        return navigator.userAgent.includes("iPhone");
      },
      _shareBtnClick() {
        const e = encodeURIComponent(
          this.t(`🔥Play with me, grow your startup. 

💸 +5k coins as your first gift
💵 +25k coins if you have Telegram Premium`)
        );
        window.Telegram.WebApp.openTelegramLink(`${this._refLink()}&text=${e}`);
      },
      _refLink() {
        return `https://t.me/share/url?url=t.me/muskempire_bot/game?startapp=${this.uProfile.refCode}`;
      },
      _ourTgClick() {
        window.Telegram.WebApp.openTelegramLink("https://t.me/muskempire");
      },
      _openUrl(e) {
        e.includes("t.me/")
          ? window.Telegram.WebApp.openTelegramLink(e)
          : window.Telegram.WebApp.openLink(e);
      },
      _sound(e) {},
      _copyToClipboard(e) {
        Yi({
          type: "primary",
          message: this.t("Copied to clipboard"),
          duration: 1e3,
          position: "bottom",
        }),
          navigator.clipboard.writeText(e);
      },
      _animateMoneyFromBottom(e = 1e4, t = "money") {
        this._sound(t === "money" ? "take_money" : "take_pph");
        let n = Math.round(1.98 * Math.pow(e, 0.4) + 16.85);
        n > 400 ? (n = 300) : n < 10 && (n = 10),
          console.log("_animateMoneyFromBottom:", e, n);
        const o = t === "money" ? "money16" : "pph16",
          i = t === "money" ? "fromBottomToRight" : "fromBottomToLeft";
        let r =
          t === "money"
            ? document.getElementById("money")
            : document.getElementById("profit");
        r && r.classList.add("aniVibration");
        const a = 1e3,
          s = 800;
        for (let l = 0; l < n; l++) {
          const c = document.createElement("div");
          c.classList.add("moneyFromBottom", o),
            (c.style.top = "100%"),
            (c.style.left = this._rand(10, 90) + "%");
          const u = this._rand(500, a),
            f = this._rand(0, s);
          (c.style.animation = `${i} ${u}ms ease ${f}ms 1 normal none`),
            document.body.appendChild(c),
            this.$nextTick(() => {
              setTimeout(() => {
                c.remove();
              }, u + s);
            }),
            l % 30 === 0 && this._vibrate("soft");
        }
        setTimeout(() => {
          r && r.classList.remove("aniVibration");
        }, a + Math.round(s / 2));
      },
      _millisecondsUntilNextDayUTC() {
        const e = new Date(),
          t = Date.UTC(
            e.getUTCFullYear(),
            e.getUTCMonth(),
            e.getUTCDate(),
            e.getUTCHours(),
            e.getUTCMinutes(),
            e.getUTCSeconds()
          );
        return (
          Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate() + 1) - t
        );
      },
      _millisecondsUntilNextUTCHour(e) {
        const t = new Date(),
          n = Date.UTC(
            t.getUTCFullYear(),
            t.getUTCMonth(),
            t.getUTCDate(),
            t.getUTCHours(),
            t.getUTCMinutes(),
            t.getUTCSeconds()
          );
        let o;
        return (
          t.getUTCHours() < e
            ? (o = Date.UTC(
                t.getUTCFullYear(),
                t.getUTCMonth(),
                t.getUTCDate(),
                e
              ))
            : (o = Date.UTC(
                t.getUTCFullYear(),
                t.getUTCMonth(),
                t.getUTCDate() + 1,
                e
              )),
          o - n
        );
      },
      _getLevelPercent(e, t) {
        const n = this.dbLevels;
        if (e >= n.length - 1) return 0;
        const o = e + 1;
        if (e && o) {
          const i = this.dbLevelsByLevel[o].exp - this.dbLevelsByLevel[e].exp,
            r = t - this.dbLevelsByLevel[e].exp;
          return Math.floor((r / i) * 100);
        }
        return 0;
      },
      _getAvailableSkillsForLevel(e) {
        let t = [],
          n = [];
        return (
          this.dbSkills.forEach((o) => {
            o.levels &&
              o.levels.length > 0 &&
              o.levels.forEach((i) => {
                i.requiredHeroLevel === e &&
                  !n.includes(o.key) &&
                  (n.push(o.key),
                  t.push({
                    key: o.key,
                    title: o.title,
                    level: i.level,
                  }));
              });
          }),
          t
        );
      },
      _getMyAvatar() {
        return this.uProfile.skin
          ? this._getSkinImg(this.uProfile.skin)
          : this._getAvatarByLevel(this.uHero.level);
      },
      _getSkinSmallImg(e) {
        return (
          "/assets/img/store/skin/small/" + e.replace("skin_", "") + ".png?v=3"
        );
      },
      _getSkinImg(e) {
        return "/assets/img/store/skin/" + e.replace("skin_", "") + ".png?v=3";
      },
      _getAvatarByLevel(e) {
        return "/assets/img/heroes/" + e + "_not.png?v=7";
      },
      _getOfficeByLevel(e) {
        return "/assets/img/office/" + e + ".jpg?v=4";
      },
      _getSkillImg(e) {
        return "/assets/img/skills/" + e + ".jpg?v=4";
      },
      _getQuestImg(e) {
        return e.includes("rebus_")
          ? "/assets/img/quests/rebus.jpg?v=3"
          : e.includes("riddle_")
          ? "/assets/img/quests/riddle/" + new Date().getDate() + ".jpg?v=3"
          : "/assets/img/quests/" + e + ".jpg?v=3";
      },
      _getSkinStyle(e, t = null) {
        return e
          ? e in this.dbSkinsByKey
            ? {
                backgroundImage: `url(${this._getSkinSmallImg(e)})`,
                backgroundColor: this.dbSkinsByKey[e].data
                  ? this.dbSkinsByKey[e].data
                  : "#b7b7b7",
              }
            : {}
          : t
          ? {
              backgroundImage: `url(${this._getAvatarByLevel(t)})`,
            }
          : {};
      },
      _groupBy(e, t) {
        return e.reduce((n, o) => ((n[o[t]] = n[o[t]] || []).push(o), n), {});
      },
      _arrayByKey(e, t) {
        return e.reduce((n, o) => ((n[o[t]] = o), n), {});
      },
      _filterByKey(e, t, n) {
        return e.filter((o) => o[t] === n);
      },
      _getFirstFilteredByKey(e, t, n) {
        return e.filter((o) => o[t] === n)[0];
      },
      _getValueFirstFilteredByKey(e, t, n, o) {
        return e.filter((r) => `${r[t]}` == `${n}`)[0][o];
      },
    },
  },
  Ln = df(GE),
  kA = tA();
let Ju = !1;
Yr.afterEach(function () {
  Yr.options.history.state.current !== "/mining" && Ju
    ? window.Telegram.WebApp.BackButton.show()
    : window.Telegram.WebApp.BackButton.hide(),
    (Ju = !0);
});
window.Telegram.WebApp.onEvent("backButtonClicked", function () {
  Yr.push("/mining");
});
Ln.use(kA);
Ln.use(Yr);
Ln.use(cx);
ux(Ln);
Ln.mixin(sA);
Ln.mixin(CA);
Ln.mixin(_A);
Ln.mixin(SA);
Ln.mount("#app");
window.userStore = Et();
window.stateStore = Ca();
window.dbStore = lg();
export {
  Qg as A,
  sl as B,
  u0 as C,
  $ as D,
  tt as E,
  Ve as F,
  Wh as G,
  ai as H,
  ie as I,
  Fe as J,
  Ae as K,
  Td as L,
  pE as N,
  px as P,
  Ao as _,
  F as a,
  At as b,
  ke as c,
  mt as d,
  Se as e,
  d as f,
  Pt as g,
  tl as h,
  Hi as i,
  Im as j,
  TA as k,
  xA as l,
  be as m,
  Nt as n,
  me as o,
  el as p,
  Dt as q,
  He as r,
  Yi as s,
  X as t,
  Sl as u,
  wl as v,
  ge as w,
  Re as x,
  X1 as y,
  j as z,
};
