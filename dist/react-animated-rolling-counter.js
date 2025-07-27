import U from "react";
var g = { exports: {} }, p = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var L;
function te() {
  if (L) return p;
  L = 1;
  var c = Symbol.for("react.transitional.element"), l = Symbol.for("react.fragment");
  function u(f, n, s) {
    var d = null;
    if (s !== void 0 && (d = "" + s), n.key !== void 0 && (d = "" + n.key), "key" in n) {
      s = {};
      for (var m in n)
        m !== "key" && (s[m] = n[m]);
    } else s = n;
    return n = s.ref, {
      $$typeof: c,
      type: f,
      key: d,
      ref: n !== void 0 ? n : null,
      props: s
    };
  }
  return p.Fragment = l, p.jsx = u, p.jsxs = u, p;
}
var v = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var M;
function ne() {
  return M || (M = 1, process.env.NODE_ENV !== "production" && function() {
    function c(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === K ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case x:
          return "Fragment";
        case V:
          return "Profiler";
        case J:
          return "StrictMode";
        case H:
          return "Suspense";
        case B:
          return "SuspenseList";
        case Q:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case q:
            return "Portal";
          case G:
            return (e.displayName || "Context") + ".Provider";
          case z:
            return (e._context.displayName || "Context") + ".Consumer";
          case X:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Z:
            return r = e.displayName || null, r !== null ? r : c(e.type) || "Memo";
          case y:
            r = e._payload, e = e._init;
            try {
              return c(e(r));
            } catch {
            }
        }
      return null;
    }
    function l(e) {
      return "" + e;
    }
    function u(e) {
      try {
        l(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, a = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          a
        ), l(e);
      }
    }
    function f(e) {
      if (e === x) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === y)
        return "<...>";
      try {
        var r = c(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var e = j.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function d(e) {
      if (C.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function m(e, r) {
      function t() {
        Y || (Y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function k() {
      var e = c(this.type);
      return $[e] || ($[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function _(e, r, t, a, E, i, O, h) {
      return t = i.ref, e = {
        $$typeof: N,
        type: e,
        key: r,
        props: i,
        _owner: E
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: k
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
        value: O
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: h
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function P(e, r, t, a, E, i, O, h) {
      var o = r.children;
      if (o !== void 0)
        if (a)
          if (ee(o)) {
            for (a = 0; a < o.length; a++)
              w(o[a]);
            Object.freeze && Object.freeze(o);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else w(o);
      if (C.call(r, "key")) {
        o = c(e);
        var b = Object.keys(r).filter(function(re) {
          return re !== "key";
        });
        a = 0 < b.length ? "{key: someKey, " + b.join(": ..., ") + ": ...}" : "{key: someKey}", D[o + a] || (b = 0 < b.length ? "{" + b.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          a,
          o,
          b,
          o
        ), D[o + a] = !0);
      }
      if (o = null, t !== void 0 && (u(t), o = "" + t), d(r) && (u(r.key), o = "" + r.key), "key" in r) {
        t = {};
        for (var S in r)
          S !== "key" && (t[S] = r[S]);
      } else t = r;
      return o && m(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), _(
        e,
        o,
        i,
        E,
        n(),
        t,
        O,
        h
      );
    }
    function w(e) {
      typeof e == "object" && e !== null && e.$$typeof === N && e._store && (e._store.validated = 1);
    }
    var T = U, N = Symbol.for("react.transitional.element"), q = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), J = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), z = Symbol.for("react.consumer"), G = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), Q = Symbol.for("react.activity"), K = Symbol.for("react.client.reference"), j = T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, C = Object.prototype.hasOwnProperty, ee = Array.isArray, A = console.createTask ? console.createTask : function() {
      return null;
    };
    T = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var Y, $ = {}, I = T["react-stack-bottom-frame"].bind(
      T,
      s
    )(), F = A(f(s)), D = {};
    v.Fragment = x, v.jsx = function(e, r, t, a, E) {
      var i = 1e4 > j.recentlyCreatedOwnerStacks++;
      return P(
        e,
        r,
        t,
        !1,
        a,
        E,
        i ? Error("react-stack-top-frame") : I,
        i ? A(f(e)) : F
      );
    }, v.jsxs = function(e, r, t, a, E) {
      var i = 1e4 > j.recentlyCreatedOwnerStacks++;
      return P(
        e,
        r,
        t,
        !0,
        a,
        E,
        i ? Error("react-stack-top-frame") : I,
        i ? A(f(e)) : F
      );
    };
  }()), v;
}
var W;
function ae() {
  return W || (W = 1, process.env.NODE_ENV === "production" ? g.exports = te() : g.exports = ne()), g.exports;
}
var R = ae();
const oe = ({ digit: c, height: l, className: u = "" }) => /* @__PURE__ */ R.jsx("div", { className: `digit-container ${u}`, style: { height: l }, children: /* @__PURE__ */ R.jsx(
  "div",
  {
    className: "digit-slider",
    style: {
      transform: `translateY(-${c * l}px)`
    },
    children: Array.from({ length: 10 }, (f, n) => /* @__PURE__ */ R.jsx(
      "div",
      {
        className: "digit",
        style: { height: l },
        children: n
      },
      n
    ))
  }
) }), ce = ({
  value: c,
  fontSize: l = "60px",
  className: u = "",
  digitClassName: f = "",
  padStart: n = 2,
  separator: s = ""
}) => {
  const d = parseInt(l), m = String(c).padStart(n, "0").split("");
  return /* @__PURE__ */ R.jsx(
    "div",
    {
      className: `counter-container ${u}`,
      style: { fontSize: l, lineHeight: `${d}px` },
      children: m.map((k, _) => /* @__PURE__ */ R.jsxs(U.Fragment, { children: [
        /* @__PURE__ */ R.jsx("div", { className: "digit-wrapper", children: /* @__PURE__ */ R.jsx(
          oe,
          {
            digit: parseInt(k),
            height: d,
            className: f
          }
        ) }),
        s && _ < m.length - 1 && /* @__PURE__ */ R.jsx("span", { className: "separator", children: s })
      ] }, _))
    }
  );
};
export {
  ce as AnimatedCounter
};
