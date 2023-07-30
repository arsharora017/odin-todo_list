(() => {
  "use strict";
  var n,
    e,
    t,
    r,
    o,
    a,
    i,
    s,
    c,
    d,
    l,
    p,
    f,
    u,
    v = {
      426: (n, e, t) => {
        t.d(e, { Z: () => s });
        var r = t(81),
          o = t.n(r),
          a = t(645),
          i = t.n(a)()(o());
        i.push([
          n.id,
          '/* Meyer reset */\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* \n ******** MY Css Code Starts from here*****\n*/\n\nsvg {\n  height: 30px;\n}\n\n/* \n******CSS Variables *******\n*/\n\n:root {\n  --bg-color: rgb(217, 196, 196);\n  --primary-dark: #333;\n  --primary-light: #eee;\n  --font-size1: 60px;\n  --font-size2: 20px;\n  --font-size3: 30px;\n  --font-color-light: #fff;\n  --color-nav: #fafafa;\n  --color-header: #db4c3f;\n  --color-preview: #ffffff;\n  --hover-dark: #e5e5e5;\n  --radius: 5px;\n}\n\nbody {\n  font-family: "Montserrat", sans-serif, monospace;\n  /* background-color: var(--bg-color); */\n}\n\n/* \n********* Header ***********\n*/\n\nheader {\n  background-color: var(--color-header);\n  padding-top: 15px;\n  padding-left: 15px;\n  display: flex;\n  height: 130px;\n  justify-content: start;\n  color: var(--font-color-light);\n}\n\nheader > div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nheader > div > svg {\n  height: 60px;\n}\n\nheader > div > h1 {\n  font-size: var(--font-size1);\n}\n\n/* \n******** Main *****\n*/\n\nmain {\n  display: flex;\n}\n\n/* \n******* Nav Bar/ Sidebar *****\n*/\n\n.navbar {\n  width: 20vw;\n  font-size: var(--font-size2);\n  display: flex;\n  flex-direction: column;\n  padding-left: 25px;\n  padding-top: 35px;\n  /* height: 100vh; */\n  background-color: var(--color-nav);\n  padding-right: 20px;\n}\n\n.home {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  margin-bottom: 3rem;\n}\n\n.nav-item {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 5px;\n  cursor: pointer;\n  border-radius: var(--radius);\n  padding: 5px;\n}\n\n.hover:hover {\n  background-color: var(--hover-dark);\n}\n\n.my-lists {\n  display: flex;\n  flex-direction: column;\n}\n\n.my-lists > h2 {\n  font-size: var(--font-size3);\n  margin-bottom: 10px;\n}\n\n.add-list {\n  display: flex;\n  flex-direction: row;\n  justify-content: left;\n  align-items: center;\n  padding-left: 10px;\n  gap: 15px;\n}\n\n.add-list > svg {\n  height: 23px;\n}\n\n.add-list-btn {\n  font-family: "Alata", sans-serif;\n  margin: 5px 0;\n  height: auto;\n  background: transparent;\n  border: solid 2px transparent;\n  font-size: 1.3rem;\n  border-radius: var(--radius);\n}\n\n/* \n******Tasks Preview***\n*/\n\n.tasks-preview {\n  background-color: var(--color-preview);\n  width: 100vw;\n  min-height: 90vh;\n  padding: 30px 50px;\n  box-sizing: border-box;\n}\n',
          "",
        ]);
        const s = i;
      },
      645: (n) => {
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var t = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (t += "@supports (".concat(e[4], ") {")),
                  e[2] && (t += "@media ".concat(e[2], " {")),
                  r &&
                    (t += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {",
                    )),
                  (t += n(e)),
                  r && (t += "}"),
                  e[2] && (t += "}"),
                  e[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (e.i = function (n, t, r, o, a) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var i = {};
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var c = this[s][0];
                  null != c && (i[c] = !0);
                }
              for (var d = 0; d < n.length; d++) {
                var l = [].concat(n[d]);
                (r && i[l[0]]) ||
                  (void 0 !== a &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = a)),
                  t &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = t))
                      : (l[2] = t)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  e.push(l));
              }
            }),
            e
          );
        };
      },
      81: (n) => {
        n.exports = function (n) {
          return n[1];
        };
      },
      379: (n) => {
        var e = [];
        function t(n) {
          for (var t = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === n) {
              t = r;
              break;
            }
          return t;
        }
        function r(n, r) {
          for (var a = {}, i = [], s = 0; s < n.length; s++) {
            var c = n[s],
              d = r.base ? c[0] + r.base : c[0],
              l = a[d] || 0,
              p = "".concat(d, " ").concat(l);
            a[d] = l + 1;
            var f = t(p),
              u = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== f) e[f].references++, e[f].updater(u);
            else {
              var v = o(u, r);
              (r.byIndex = s),
                e.splice(s, 0, { identifier: p, updater: v, references: 1 });
            }
            i.push(p);
          }
          return i;
        }
        function o(n, e) {
          var t = e.domAPI(e);
          return (
            t.update(n),
            function (e) {
              if (e) {
                if (
                  e.css === n.css &&
                  e.media === n.media &&
                  e.sourceMap === n.sourceMap &&
                  e.supports === n.supports &&
                  e.layer === n.layer
                )
                  return;
                t.update((n = e));
              } else t.remove();
            }
          );
        }
        n.exports = function (n, o) {
          var a = r((n = n || []), (o = o || {}));
          return function (n) {
            n = n || [];
            for (var i = 0; i < a.length; i++) {
              var s = t(a[i]);
              e[s].references--;
            }
            for (var c = r(n, o), d = 0; d < a.length; d++) {
              var l = t(a[d]);
              0 === e[l].references && (e[l].updater(), e.splice(l, 1));
            }
            a = c;
          };
        };
      },
      569: (n) => {
        var e = {};
        n.exports = function (n, t) {
          var r = (function (n) {
            if (void 0 === e[n]) {
              var t = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (n) {
                  t = null;
                }
              e[n] = t;
            }
            return e[n];
          })(n);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(t);
        };
      },
      216: (n) => {
        n.exports = function (n) {
          var e = document.createElement("style");
          return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
        };
      },
      565: (n, e, t) => {
        n.exports = function (n) {
          var e = t.nc;
          e && n.setAttribute("nonce", e);
        };
      },
      795: (n) => {
        n.exports = function (n) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = n.insertStyleElement(n);
          return {
            update: function (t) {
              !(function (n, e, t) {
                var r = "";
                t.supports && (r += "@supports (".concat(t.supports, ") {")),
                  t.media && (r += "@media ".concat(t.media, " {"));
                var o = void 0 !== t.layer;
                o &&
                  (r += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {",
                  )),
                  (r += t.css),
                  o && (r += "}"),
                  t.media && (r += "}"),
                  t.supports && (r += "}");
                var a = t.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */",
                    )),
                  e.styleTagTransform(r, n, e.options);
              })(e, n, t);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(e);
            },
          };
        };
      },
      589: (n) => {
        n.exports = function (n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        };
      },
    },
    h = {};
  function m(n) {
    var e = h[n];
    if (void 0 !== e) return e.exports;
    var t = (h[n] = { id: n, exports: {} });
    return v[n](t, t.exports, m), t.exports;
  }
  (m.n = (n) => {
    var e = n && n.__esModule ? () => n.default : () => n;
    return m.d(e, { a: e }), e;
  }),
    (m.d = (n, e) => {
      for (var t in e)
        m.o(e, t) &&
          !m.o(n, t) &&
          Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
    }),
    (m.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (m.nc = void 0),
    (n = m(379)),
    (e = m.n(n)),
    (t = m(795)),
    (r = m.n(t)),
    (o = m(569)),
    (a = m.n(o)),
    (i = m(565)),
    (s = m.n(i)),
    (c = m(216)),
    (d = m.n(c)),
    (l = m(589)),
    (p = m.n(l)),
    (f = m(426)),
    ((u = {}).styleTagTransform = p()),
    (u.setAttributes = s()),
    (u.insert = a().bind(null, "head")),
    (u.domAPI = r()),
    (u.insertStyleElement = d()),
    e()(f.Z, u),
    f.Z && f.Z.locals && f.Z.locals;
})();
