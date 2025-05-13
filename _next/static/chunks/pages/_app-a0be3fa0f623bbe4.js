(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[888], {
    7869: function(e, t, r) {
        "use strict";
        r.d(t, {
            Pxu: function() {
                return s
            }
        });
        var n = r(5271)
          , i = ["color"]
          , s = (0,
        n.forwardRef)(function(e, t) {
            var r = e.color
              , s = function(e, t) {
                if (null == e)
                    return {};
                var r, n, i = {}, s = Object.keys(e);
                for (n = 0; n < s.length; n++)
                    r = s[n],
                    t.indexOf(r) >= 0 || (i[r] = e[r]);
                return i
            }(e, i);
            return (0,
            n.createElement)("svg", Object.assign({
                width: "15",
                height: "15",
                viewBox: "0 0 15 15",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, s, {
                ref: t
            }), (0,
            n.createElement)("path", {
                d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
                fill: void 0 === r ? "currentColor" : r,
                fillRule: "evenodd",
                clipRule: "evenodd"
            }))
        })
    },
    7018: function(e, t, r) {
        "use strict";
        r.r(t),
        r.d(t, {
            Headers: function() {
                return s
            },
            Request: function() {
                return o
            },
            Response: function() {
                return a
            },
            fetch: function() {
                return i
            }
        });
        var n = function() {
            if ("undefined" != typeof self)
                return self;
            if ("undefined" != typeof window)
                return window;
            if (void 0 !== r.g)
                return r.g;
            throw Error("unable to locate global object")
        }();
        let i = n.fetch;
        t.default = n.fetch.bind(n);
        let s = n.Headers
          , o = n.Request
          , a = n.Response
    },
    2710: function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        let i = n(r(7018))
          , s = n(r(8208));
        class o {
            constructor(e) {
                this.shouldThrowOnError = !1,
                this.method = e.method,
                this.url = e.url,
                this.headers = e.headers,
                this.schema = e.schema,
                this.body = e.body,
                this.shouldThrowOnError = e.shouldThrowOnError,
                this.signal = e.signal,
                this.isMaybeSingle = e.isMaybeSingle,
                e.fetch ? this.fetch = e.fetch : "undefined" == typeof fetch ? this.fetch = i.default : this.fetch = fetch
            }
            throwOnError() {
                return this.shouldThrowOnError = !0,
                this
            }
            setHeader(e, t) {
                return this.headers = Object.assign({}, this.headers),
                this.headers[e] = t,
                this
            }
            then(e, t) {
                void 0 === this.schema || (["GET", "HEAD"].includes(this.method) ? this.headers["Accept-Profile"] = this.schema : this.headers["Content-Profile"] = this.schema),
                "GET" !== this.method && "HEAD" !== this.method && (this.headers["Content-Type"] = "application/json");
                let r = (0,
                this.fetch)(this.url.toString(), {
                    method: this.method,
                    headers: this.headers,
                    body: JSON.stringify(this.body),
                    signal: this.signal
                }).then(async e => {
                    var t, r, n;
                    let i = null
                      , o = null
                      , a = null
                      , l = e.status
                      , u = e.statusText;
                    if (e.ok) {
                        if ("HEAD" !== this.method) {
                            let t = await e.text();
                            "" === t || (o = "text/csv" === this.headers.Accept ? t : this.headers.Accept && this.headers.Accept.includes("application/vnd.pgrst.plan+text") ? t : JSON.parse(t))
                        }
                        let n = null === (t = this.headers.Prefer) || void 0 === t ? void 0 : t.match(/count=(exact|planned|estimated)/)
                          , s = null === (r = e.headers.get("content-range")) || void 0 === r ? void 0 : r.split("/");
                        n && s && s.length > 1 && (a = parseInt(s[1])),
                        this.isMaybeSingle && "GET" === this.method && Array.isArray(o) && (o.length > 1 ? (i = {
                            code: "PGRST116",
                            details: `Results contain ${o.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                            hint: null,
                            message: "JSON object requested, multiple (or no) rows returned"
                        },
                        o = null,
                        a = null,
                        l = 406,
                        u = "Not Acceptable") : o = 1 === o.length ? o[0] : null)
                    } else {
                        let t = await e.text();
                        try {
                            i = JSON.parse(t),
                            Array.isArray(i) && 404 === e.status && (o = [],
                            i = null,
                            l = 200,
                            u = "OK")
                        } catch (r) {
                            404 === e.status && "" === t ? (l = 204,
                            u = "No Content") : i = {
                                message: t
                            }
                        }
                        if (i && this.isMaybeSingle && (null === (n = null == i ? void 0 : i.details) || void 0 === n ? void 0 : n.includes("0 rows")) && (i = null,
                        l = 200,
                        u = "OK"),
                        i && this.shouldThrowOnError)
                            throw new s.default(i)
                    }
                    return {
                        error: i,
                        data: o,
                        count: a,
                        status: l,
                        statusText: u
                    }
                }
                );
                return this.shouldThrowOnError || (r = r.catch(e => {
                    var t, r, n;
                    return {
                        error: {
                            message: `${null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : "FetchError"}: ${null == e ? void 0 : e.message}`,
                            details: `${null !== (r = null == e ? void 0 : e.stack) && void 0 !== r ? r : ""}`,
                            hint: "",
                            code: `${null !== (n = null == e ? void 0 : e.code) && void 0 !== n ? n : ""}`
                        },
                        data: null,
                        count: null,
                        status: 0,
                        statusText: ""
                    }
                }
                )),
                r.then(e, t)
            }
        }
        t.default = o
    },
    7017: function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        let i = n(r(8962))
          , s = n(r(6766))
          , o = r(139);
        class a {
            constructor(e, {headers: t={}, schema: r, fetch: n}={}) {
                this.url = e,
                this.headers = Object.assign(Object.assign({}, o.DEFAULT_HEADERS), t),
                this.schemaName = r,
                this.fetch = n
            }
            from(e) {
                let t = new URL(`${this.url}/${e}`);
                return new i.default(t,{
                    headers: Object.assign({}, this.headers),
                    schema: this.schemaName,
                    fetch: this.fetch
                })
            }
            schema(e) {
                return new a(this.url,{
                    headers: this.headers,
                    schema: e,
                    fetch: this.fetch
                })
            }
            rpc(e, t={}, {head: r=!1, get: n=!1, count: i}={}) {
                let o, a;
                let l = new URL(`${this.url}/rpc/${e}`);
                r || n ? (o = r ? "HEAD" : "GET",
                Object.entries(t).filter( ([e,t]) => void 0 !== t).map( ([e,t]) => [e, Array.isArray(t) ? `{${t.join(",")}}` : `${t}`]).forEach( ([e,t]) => {
                    l.searchParams.append(e, t)
                }
                )) : (o = "POST",
                a = t);
                let u = Object.assign({}, this.headers);
                return i && (u.Prefer = `count=${i}`),
                new s.default({
                    method: o,
                    url: l,
                    headers: u,
                    schema: this.schemaName,
                    body: a,
                    fetch: this.fetch,
                    allowEmpty: !1
                })
            }
        }
        t.default = a
    },
    8208: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        class r extends Error {
            constructor(e) {
                super(e.message),
                this.name = "PostgrestError",
                this.details = e.details,
                this.hint = e.hint,
                this.code = e.code
            }
        }
        t.default = r
    },
    6766: function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        let i = n(r(3044));
        class s extends i.default {
            eq(e, t) {
                return this.url.searchParams.append(e, `eq.${t}`),
                this
            }
            neq(e, t) {
                return this.url.searchParams.append(e, `neq.${t}`),
                this
            }
            gt(e, t) {
                return this.url.searchParams.append(e, `gt.${t}`),
                this
            }
            gte(e, t) {
                return this.url.searchParams.append(e, `gte.${t}`),
                this
            }
            lt(e, t) {
                return this.url.searchParams.append(e, `lt.${t}`),
                this
            }
            lte(e, t) {
                return this.url.searchParams.append(e, `lte.${t}`),
                this
            }
            like(e, t) {
                return this.url.searchParams.append(e, `like.${t}`),
                this
            }
            likeAllOf(e, t) {
                return this.url.searchParams.append(e, `like(all).{${t.join(",")}}`),
                this
            }
            likeAnyOf(e, t) {
                return this.url.searchParams.append(e, `like(any).{${t.join(",")}}`),
                this
            }
            ilike(e, t) {
                return this.url.searchParams.append(e, `ilike.${t}`),
                this
            }
            ilikeAllOf(e, t) {
                return this.url.searchParams.append(e, `ilike(all).{${t.join(",")}}`),
                this
            }
            ilikeAnyOf(e, t) {
                return this.url.searchParams.append(e, `ilike(any).{${t.join(",")}}`),
                this
            }
            is(e, t) {
                return this.url.searchParams.append(e, `is.${t}`),
                this
            }
            in(e, t) {
                let r = Array.from(new Set(t)).map(e => "string" == typeof e && RegExp("[,()]").test(e) ? `"${e}"` : `${e}`).join(",");
                return this.url.searchParams.append(e, `in.(${r})`),
                this
            }
            contains(e, t) {
                return "string" == typeof t ? this.url.searchParams.append(e, `cs.${t}`) : Array.isArray(t) ? this.url.searchParams.append(e, `cs.{${t.join(",")}}`) : this.url.searchParams.append(e, `cs.${JSON.stringify(t)}`),
                this
            }
            containedBy(e, t) {
                return "string" == typeof t ? this.url.searchParams.append(e, `cd.${t}`) : Array.isArray(t) ? this.url.searchParams.append(e, `cd.{${t.join(",")}}`) : this.url.searchParams.append(e, `cd.${JSON.stringify(t)}`),
                this
            }
            rangeGt(e, t) {
                return this.url.searchParams.append(e, `sr.${t}`),
                this
            }
            rangeGte(e, t) {
                return this.url.searchParams.append(e, `nxl.${t}`),
                this
            }
            rangeLt(e, t) {
                return this.url.searchParams.append(e, `sl.${t}`),
                this
            }
            rangeLte(e, t) {
                return this.url.searchParams.append(e, `nxr.${t}`),
                this
            }
            rangeAdjacent(e, t) {
                return this.url.searchParams.append(e, `adj.${t}`),
                this
            }
            overlaps(e, t) {
                return "string" == typeof t ? this.url.searchParams.append(e, `ov.${t}`) : this.url.searchParams.append(e, `ov.{${t.join(",")}}`),
                this
            }
            textSearch(e, t, {config: r, type: n}={}) {
                let i = "";
                "plain" === n ? i = "pl" : "phrase" === n ? i = "ph" : "websearch" === n && (i = "w");
                let s = void 0 === r ? "" : `(${r})`;
                return this.url.searchParams.append(e, `${i}fts${s}.${t}`),
                this
            }
            match(e) {
                return Object.entries(e).forEach( ([e,t]) => {
                    this.url.searchParams.append(e, `eq.${t}`)
                }
                ),
                this
            }
            not(e, t, r) {
                return this.url.searchParams.append(e, `not.${t}.${r}`),
                this
            }
            or(e, {foreignTable: t, referencedTable: r=t}={}) {
                let n = r ? `${r}.or` : "or";
                return this.url.searchParams.append(n, `(${e})`),
                this
            }
            filter(e, t, r) {
                return this.url.searchParams.append(e, `${t}.${r}`),
                this
            }
        }
        t.default = s
    },
    8962: function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        let i = n(r(6766));
        class s {
            constructor(e, {headers: t={}, schema: r, fetch: n}) {
                this.url = e,
                this.headers = t,
                this.schema = r,
                this.fetch = n
            }
            select(e, {head: t=!1, count: r}={}) {
                let n = !1
                  , s = (null != e ? e : "*").split("").map(e => /\s/.test(e) && !n ? "" : ('"' === e && (n = !n),
                e)).join("");
                return this.url.searchParams.set("select", s),
                r && (this.headers.Prefer = `count=${r}`),
                new i.default({
                    method: t ? "HEAD" : "GET",
                    url: this.url,
                    headers: this.headers,
                    schema: this.schema,
                    fetch: this.fetch,
                    allowEmpty: !1
                })
            }
            insert(e, {count: t, defaultToNull: r=!0}={}) {
                let n = [];
                if (this.headers.Prefer && n.push(this.headers.Prefer),
                t && n.push(`count=${t}`),
                r || n.push("missing=default"),
                this.headers.Prefer = n.join(","),
                Array.isArray(e)) {
                    let t = e.reduce( (e, t) => e.concat(Object.keys(t)), []);
                    if (t.length > 0) {
                        let e = [...new Set(t)].map(e => `"${e}"`);
                        this.url.searchParams.set("columns", e.join(","))
                    }
                }
                return new i.default({
                    method: "POST",
                    url: this.url,
                    headers: this.headers,
                    schema: this.schema,
                    body: e,
                    fetch: this.fetch,
                    allowEmpty: !1
                })
            }
            upsert(e, {onConflict: t, ignoreDuplicates: r=!1, count: n, defaultToNull: s=!0}={}) {
                let o = [`resolution=${r ? "ignore" : "merge"}-duplicates`];
                if (void 0 !== t && this.url.searchParams.set("on_conflict", t),
                this.headers.Prefer && o.push(this.headers.Prefer),
                n && o.push(`count=${n}`),
                s || o.push("missing=default"),
                this.headers.Prefer = o.join(","),
                Array.isArray(e)) {
                    let t = e.reduce( (e, t) => e.concat(Object.keys(t)), []);
                    if (t.length > 0) {
                        let e = [...new Set(t)].map(e => `"${e}"`);
                        this.url.searchParams.set("columns", e.join(","))
                    }
                }
                return new i.default({
                    method: "POST",
                    url: this.url,
                    headers: this.headers,
                    schema: this.schema,
                    body: e,
                    fetch: this.fetch,
                    allowEmpty: !1
                })
            }
            update(e, {count: t}={}) {
                let r = [];
                return this.headers.Prefer && r.push(this.headers.Prefer),
                t && r.push(`count=${t}`),
                this.headers.Prefer = r.join(","),
                new i.default({
                    method: "PATCH",
                    url: this.url,
                    headers: this.headers,
                    schema: this.schema,
                    body: e,
                    fetch: this.fetch,
                    allowEmpty: !1
                })
            }
            delete({count: e}={}) {
                let t = [];
                return e && t.push(`count=${e}`),
                this.headers.Prefer && t.unshift(this.headers.Prefer),
                this.headers.Prefer = t.join(","),
                new i.default({
                    method: "DELETE",
                    url: this.url,
                    headers: this.headers,
                    schema: this.schema,
                    fetch: this.fetch,
                    allowEmpty: !1
                })
            }
        }
        t.default = s
    },
    3044: function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        let i = n(r(2710));
        class s extends i.default {
            select(e) {
                let t = !1
                  , r = (null != e ? e : "*").split("").map(e => /\s/.test(e) && !t ? "" : ('"' === e && (t = !t),
                e)).join("");
                return this.url.searchParams.set("select", r),
                this.headers.Prefer && (this.headers.Prefer += ","),
                this.headers.Prefer += "return=representation",
                this
            }
            order(e, {ascending: t=!0, nullsFirst: r, foreignTable: n, referencedTable: i=n}={}) {
                let s = i ? `${i}.order` : "order"
                  , o = this.url.searchParams.get(s);
                return this.url.searchParams.set(s, `${o ? `${o},` : ""}${e}.${t ? "asc" : "desc"}${void 0 === r ? "" : r ? ".nullsfirst" : ".nullslast"}`),
                this
            }
            limit(e, {foreignTable: t, referencedTable: r=t}={}) {
                let n = void 0 === r ? "limit" : `${r}.limit`;
                return this.url.searchParams.set(n, `${e}`),
                this
            }
            range(e, t, {foreignTable: r, referencedTable: n=r}={}) {
                let i = void 0 === n ? "offset" : `${n}.offset`
                  , s = void 0 === n ? "limit" : `${n}.limit`;
                return this.url.searchParams.set(i, `${e}`),
                this.url.searchParams.set(s, `${t - e + 1}`),
                this
            }
            abortSignal(e) {
                return this.signal = e,
                this
            }
            single() {
                return this.headers.Accept = "application/vnd.pgrst.object+json",
                this
            }
            maybeSingle() {
                return "GET" === this.method ? this.headers.Accept = "application/json" : this.headers.Accept = "application/vnd.pgrst.object+json",
                this.isMaybeSingle = !0,
                this
            }
            csv() {
                return this.headers.Accept = "text/csv",
                this
            }
            geojson() {
                return this.headers.Accept = "application/geo+json",
                this
            }
            explain({analyze: e=!1, verbose: t=!1, settings: r=!1, buffers: n=!1, wal: i=!1, format: s="text"}={}) {
                var o;
                let a = [e ? "analyze" : null, t ? "verbose" : null, r ? "settings" : null, n ? "buffers" : null, i ? "wal" : null].filter(Boolean).join("|")
                  , l = null !== (o = this.headers.Accept) && void 0 !== o ? o : "application/json";
                return this.headers.Accept = `application/vnd.pgrst.plan+${s}; for="${l}"; options=${a};`,
                this
            }
            rollback() {
                var e;
                return (null !== (e = this.headers.Prefer) && void 0 !== e ? e : "").trim().length > 0 ? this.headers.Prefer += ",tx=rollback" : this.headers.Prefer = "tx=rollback",
                this
            }
            returns() {
                return this
            }
        }
        t.default = s
    },
    139: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.DEFAULT_HEADERS = void 0;
        let n = r(7625);
        t.DEFAULT_HEADERS = {
            "X-Client-Info": `postgrest-js/${n.version}`
        }
    },
    7090: function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.PostgrestError = t.PostgrestBuilder = t.PostgrestTransformBuilder = t.PostgrestFilterBuilder = t.PostgrestQueryBuilder = t.PostgrestClient = void 0;
        let i = n(r(7017));
        t.PostgrestClient = i.default;
        let s = n(r(8962));
        t.PostgrestQueryBuilder = s.default;
        let o = n(r(6766));
        t.PostgrestFilterBuilder = o.default;
        let a = n(r(3044));
        t.PostgrestTransformBuilder = a.default;
        let l = n(r(2710));
        t.PostgrestBuilder = l.default;
        let u = n(r(8208));
        t.PostgrestError = u.default,
        t.default = {
            PostgrestClient: i.default,
            PostgrestQueryBuilder: s.default,
            PostgrestFilterBuilder: o.default,
            PostgrestTransformBuilder: a.default,
            PostgrestBuilder: l.default,
            PostgrestError: u.default
        }
    },
    7625: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.version = void 0,
        t.version = "0.0.0-automated"
    },
    5216: function(e, t) {
        "use strict";
        t.Q = function(e, t) {
            if ("string" != typeof e)
                throw TypeError("argument str must be a string");
            var r = {}
              , i = e.length;
            if (i < 2)
                return r;
            var s = t && t.decode || c
              , o = 0
              , a = 0
              , h = 0;
            do {
                if (-1 === (a = e.indexOf("=", o)))
                    break;
                if (-1 === (h = e.indexOf(";", o)))
                    h = i;
                else if (a > h) {
                    o = e.lastIndexOf(";", a - 1) + 1;
                    continue
                }
                var d = l(e, o, a)
                  , f = u(e, a, d)
                  , p = e.slice(d, f);
                if (!n.call(r, p)) {
                    var g = l(e, a + 1, h)
                      , m = u(e, h, g);
                    34 === e.charCodeAt(g) && 34 === e.charCodeAt(m - 1) && (g++,
                    m--);
                    var y = e.slice(g, m);
                    r[p] = function(e, t) {
                        try {
                            return t(e)
                        } catch (t) {
                            return e
                        }
                    }(y, s)
                }
                o = h + 1
            } while (o < i);
            return r
        }
        ,
        t.q = function(e, t, n) {
            var l = n && n.encode || encodeURIComponent;
            if ("function" != typeof l)
                throw TypeError("option encode is invalid");
            if (!i.test(e))
                throw TypeError("argument name is invalid");
            var u = l(t);
            if (!s.test(u))
                throw TypeError("argument val is invalid");
            var c = e + "=" + u;
            if (!n)
                return c;
            if (null != n.maxAge) {
                var h = Math.floor(n.maxAge);
                if (!isFinite(h))
                    throw TypeError("option maxAge is invalid");
                c += "; Max-Age=" + h
            }
            if (n.domain) {
                if (!o.test(n.domain))
                    throw TypeError("option domain is invalid");
                c += "; Domain=" + n.domain
            }
            if (n.path) {
                if (!a.test(n.path))
                    throw TypeError("option path is invalid");
                c += "; Path=" + n.path
            }
            if (n.expires) {
                var d = n.expires;
                if ("[object Date]" !== r.call(d) || isNaN(d.valueOf()))
                    throw TypeError("option expires is invalid");
                c += "; Expires=" + d.toUTCString()
            }
            if (n.httpOnly && (c += "; HttpOnly"),
            n.secure && (c += "; Secure"),
            n.partitioned && (c += "; Partitioned"),
            n.priority)
                switch ("string" == typeof n.priority ? n.priority.toLowerCase() : n.priority) {
                case "low":
                    c += "; Priority=Low";
                    break;
                case "medium":
                    c += "; Priority=Medium";
                    break;
                case "high":
                    c += "; Priority=High";
                    break;
                default:
                    throw TypeError("option priority is invalid")
                }
            if (n.sameSite)
                switch ("string" == typeof n.sameSite ? n.sameSite.toLowerCase() : n.sameSite) {
                case !0:
                case "strict":
                    c += "; SameSite=Strict";
                    break;
                case "lax":
                    c += "; SameSite=Lax";
                    break;
                case "none":
                    c += "; SameSite=None";
                    break;
                default:
                    throw TypeError("option sameSite is invalid")
                }
            return c
        }
        ;
        var r = Object.prototype.toString
          , n = Object.prototype.hasOwnProperty
          , i = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/
          , s = /^("?)[\u0021\u0023-\u002B\u002D-\u003A\u003C-\u005B\u005D-\u007E]*\1$/
          , o = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i
          , a = /^[\u0020-\u003A\u003D-\u007E]*$/;
        function l(e, t, r) {
            do {
                var n = e.charCodeAt(t);
                if (32 !== n && 9 !== n)
                    return t
            } while (++t < r);
            return r
        }
        function u(e, t, r) {
            for (; t > r; ) {
                var n = e.charCodeAt(--t);
                if (32 !== n && 9 !== n)
                    return t + 1
            }
            return r
        }
        function c(e) {
            return -1 !== e.indexOf("%") ? decodeURIComponent(e) : e
        }
    },
    8120: function(e, t, r) {
        "use strict";
        var n, i;
        e.exports = (null == (n = r.g.process) ? void 0 : n.env) && "object" == typeof (null == (i = r.g.process) ? void 0 : i.env) ? r.g.process : r(4544)
    },
    3305: function(e, t, r) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
            return r(4851)
        }
        ])
    },
    2125: function(e, t, r) {
        "use strict";
        r.d(t, {
            pm: function() {
                return d
            }
        });
        var n = r(5271);
        let i = 0
          , s = new Map
          , o = e => {
            if (s.has(e))
                return;
            let t = setTimeout( () => {
                s.delete(e),
                c({
                    type: "REMOVE_TOAST",
                    toastId: e
                })
            }
            , 1e6);
            s.set(e, t)
        }
          , a = (e, t) => {
            switch (t.type) {
            case "ADD_TOAST":
                return {
                    ...e,
                    toasts: [t.toast, ...e.toasts].slice(0, 1)
                };
            case "UPDATE_TOAST":
                return {
                    ...e,
                    toasts: e.toasts.map(e => e.id === t.toast.id ? {
                        ...e,
                        ...t.toast
                    } : e)
                };
            case "DISMISS_TOAST":
                {
                    let {toastId: r} = t;
                    return r ? o(r) : e.toasts.forEach(e => {
                        o(e.id)
                    }
                    ),
                    {
                        ...e,
                        toasts: e.toasts.map(e => e.id === r || void 0 === r ? {
                            ...e,
                            open: !1
                        } : e)
                    }
                }
            case "REMOVE_TOAST":
                if (void 0 === t.toastId)
                    return {
                        ...e,
                        toasts: []
                    };
                return {
                    ...e,
                    toasts: e.toasts.filter(e => e.id !== t.toastId)
                }
            }
        }
          , l = []
          , u = {
            toasts: []
        };
        function c(e) {
            u = a(u, e),
            l.forEach(e => {
                e(u)
            }
            )
        }
        function h(e) {
            let {...t} = e
              , r = (i = (i + 1) % Number.MAX_SAFE_INTEGER).toString()
              , n = () => c({
                type: "DISMISS_TOAST",
                toastId: r
            });
            return c({
                type: "ADD_TOAST",
                toast: {
                    ...t,
                    id: r,
                    open: !0,
                    onOpenChange: e => {
                        e || n()
                    }
                }
            }),
            {
                id: r,
                dismiss: n,
                update: e => c({
                    type: "UPDATE_TOAST",
                    toast: {
                        ...e,
                        id: r
                    }
                })
            }
        }
        function d() {
            let[e,t] = n.useState(u);
            return n.useEffect( () => (l.push(t),
            () => {
                let e = l.indexOf(t);
                e > -1 && l.splice(e, 1)
            }
            ), [e]),
            {
                ...e,
                toast: h,
                dismiss: e => c({
                    type: "DISMISS_TOAST",
                    toastId: e
                })
            }
        }
    },
    2981: function(e, t, r) {
        "use strict";
        r.d(t, {
            Ho: function() {
                return u
            },
            Vo: function() {
                return l
            },
            aC: function() {
                return c
            }
        });
        var n = r(2676)
          , i = r(5271)
          , s = r(472)
          , o = r(2125)
          , a = r(5498);
        let l = (0,
        i.createContext)({
            user: null,
            createUser: async () => {}
            ,
            signIn: async () => {}
            ,
            signUp: async () => {}
            ,
            signInWithMagicLink: async () => {}
            ,
            signInWithGoogle: async () => {}
            ,
            signOut: async () => {}
            ,
            resetPassword: async () => {}
            ,
            initializing: !1
        })
          , u = e => {
            let {children: t} = e
              , r = (0,
            a.useRouter)()
              , [u,c] = (0,
            i.useState)(null)
              , [h,d] = (0,
            i.useState)(!0)
              , f = (0,
            s.e)()
              , {toast: p} = (0,
            o.pm)();
            i.useEffect( () => {
                (async () => {
                    let {data: {user: e}} = await f.auth.getUser();
                    c(e),
                    d(!1)
                }
                )();
                let {data: e} = f.auth.onAuthStateChange(async (e, t) => {
                    setTimeout(async () => {
                        var e;
                        c(null !== (e = null == t ? void 0 : t.user) && void 0 !== e ? e : null),
                        d(!1)
                    }
                    , 0)
                }
                );
                return () => {
                    e.subscription.unsubscribe()
                }
            }
            , []);
            let g = async e => {
                try {
                    let {data: t, error: r} = await f.from("User").select("id").eq("id", e.id).maybeSingle();
                    if (r && "PGRST116" !== r.code)
                        throw r;
                    if (!t) {
                        let {error: t} = await f.from("User").insert({
                            id: e.id,
                            email: e.email
                        });
                        if (t)
                            throw t;
                        let {error: r} = await f.from("Bio").insert({
                            userId: e.id,
                            content: "Hi there! I'm a developer. This is my profile page."
                        });
                        for (let t of (r && console.error("Failed to create default bio:", r),
                        [{
                            platform: "GitHub",
                            url: "https://github.com/",
                            icon: "github"
                        }, {
                            platform: "Twitter",
                            url: "https://twitter.com/",
                            icon: "twitter"
                        }, {
                            platform: "LinkedIn",
                            url: "https://linkedin.com/in/",
                            icon: "linkedin"
                        }])) {
                            let {error: r} = await f.from("Social").insert({
                                userId: e.id,
                                platform: t.platform,
                                url: t.url,
                                icon: t.icon
                            });
                            r && console.error("Failed to create ".concat(t.platform, " link:"), r)
                        }
                    }
                } catch (e) {
                    p({
                        variant: "destructive",
                        title: "Error",
                        description: "Failed to create user profile"
                    })
                }
            }
              , m = async (e, t) => {
                let {data: r, error: n} = await f.auth.signInWithPassword({
                    email: e,
                    password: t
                });
                if (!n && r.user && await g(r.user),
                n)
                    throw p({
                        variant: "destructive",
                        title: "Error",
                        description: n.message
                    }),
                    n;
                p({
                    title: "Success",
                    description: "You have successfully signed in"
                })
            }
              , y = async (e, t) => {
                let {data: r, error: n} = await f.auth.signUp({
                    email: e,
                    password: t
                });
                if (r.user && await g(r.user),
                n)
                    throw p({
                        variant: "destructive",
                        title: "Error",
                        description: n.message
                    }),
                    n;
                p({
                    title: "Success",
                    description: "Sign up successful! Please login to continue."
                })
            }
              , v = async e => {
                let {data: t, error: r} = await f.auth.signInWithOtp({
                    email: e,
                    options: {
                        shouldCreateUser: !1,
                        emailRedirectTo: "".concat(window.location.origin, "/dashboard")
                    }
                });
                if (!r && t.user && await g(t.user),
                r)
                    throw p({
                        variant: "destructive",
                        title: "Error",
                        description: r.message
                    }),
                    r;
                p({
                    title: "Success",
                    description: "Check your email for the login link"
                })
            }
              , b = async () => {
                let {error: e} = await f.auth.signInWithOAuth({
                    provider: "google",
                    options: {
                        redirectTo: "".concat(window.location.origin, "/auth/callback")
                    }
                });
                if (e)
                    throw p({
                        variant: "destructive",
                        title: "Error",
                        description: e.message
                    }),
                    e
            }
              , w = async () => {
                let {error: e} = await f.auth.signOut();
                e ? p({
                    variant: "destructive",
                    title: "Error",
                    description: e.message
                }) : (p({
                    title: "Success",
                    description: "You have successfully signed out"
                }),
                r.push("/"))
            }
              , _ = async e => {
                let {error: t} = await f.auth.resetPasswordForEmail(e, {
                    redirectTo: "".concat(window.location.origin, "/reset-password")
                });
                if (t)
                    throw p({
                        variant: "destructive",
                        title: "Error",
                        description: t.message
                    }),
                    t;
                p({
                    title: "Success",
                    description: "Check your email for the password reset link"
                })
            }
            ;
            return (0,
            n.jsx)(l.Provider, {
                value: {
                    user: u,
                    createUser: g,
                    signIn: m,
                    signUp: y,
                    signInWithMagicLink: v,
                    signInWithGoogle: b,
                    signOut: w,
                    resetPassword: _,
                    initializing: h
                },
                children: t
            })
        }
          , c = () => (0,
        i.useContext)(l)
    },
    2582: function(e, t, r) {
        "use strict";
        r.d(t, {
            cn: function() {
                return Y
            }
        });
        let n = e => {
            let t = a(e)
              , {conflictingClassGroups: r, conflictingClassGroupModifiers: n} = e;
            return {
                getClassGroupId: e => {
                    let r = e.split("-");
                    return "" === r[0] && 1 !== r.length && r.shift(),
                    i(r, t) || o(e)
                }
                ,
                getConflictingClassGroupIds: (e, t) => {
                    let i = r[e] || [];
                    return t && n[e] ? [...i, ...n[e]] : i
                }
            }
        }
          , i = (e, t) => {
            if (0 === e.length)
                return t.classGroupId;
            let r = e[0]
              , n = t.nextPart.get(r)
              , s = n ? i(e.slice(1), n) : void 0;
            if (s)
                return s;
            if (0 === t.validators.length)
                return;
            let o = e.join("-");
            return t.validators.find( ({validator: e}) => e(o))?.classGroupId
        }
          , s = /^\[(.+)\]$/
          , o = e => {
            if (s.test(e)) {
                let t = s.exec(e)[1]
                  , r = t?.substring(0, t.indexOf(":"));
                if (r)
                    return "arbitrary.." + r
            }
        }
          , a = e => {
            let {theme: t, prefix: r} = e
              , n = {
                nextPart: new Map,
                validators: []
            };
            return h(Object.entries(e.classGroups), r).forEach( ([e,r]) => {
                l(r, n, e, t)
            }
            ),
            n
        }
          , l = (e, t, r, n) => {
            e.forEach(e => {
                if ("string" == typeof e) {
                    ("" === e ? t : u(t, e)).classGroupId = r;
                    return
                }
                if ("function" == typeof e) {
                    if (c(e)) {
                        l(e(n), t, r, n);
                        return
                    }
                    t.validators.push({
                        validator: e,
                        classGroupId: r
                    });
                    return
                }
                Object.entries(e).forEach( ([e,i]) => {
                    l(i, u(t, e), r, n)
                }
                )
            }
            )
        }
          , u = (e, t) => {
            let r = e;
            return t.split("-").forEach(e => {
                r.nextPart.has(e) || r.nextPart.set(e, {
                    nextPart: new Map,
                    validators: []
                }),
                r = r.nextPart.get(e)
            }
            ),
            r
        }
          , c = e => e.isThemeGetter
          , h = (e, t) => t ? e.map( ([e,r]) => [e, r.map(e => "string" == typeof e ? t + e : "object" == typeof e ? Object.fromEntries(Object.entries(e).map( ([e,r]) => [t + e, r])) : e)]) : e
          , d = e => {
            if (e < 1)
                return {
                    get: () => void 0,
                    set: () => {}
                };
            let t = 0
              , r = new Map
              , n = new Map
              , i = (i, s) => {
                r.set(i, s),
                ++t > e && (t = 0,
                n = r,
                r = new Map)
            }
            ;
            return {
                get(e) {
                    let t = r.get(e);
                    return void 0 !== t ? t : void 0 !== (t = n.get(e)) ? (i(e, t),
                    t) : void 0
                },
                set(e, t) {
                    r.has(e) ? r.set(e, t) : i(e, t)
                }
            }
        }
          , f = e => {
            let {separator: t, experimentalParseClassName: r} = e
              , n = 1 === t.length
              , i = t[0]
              , s = t.length
              , o = e => {
                let r;
                let o = []
                  , a = 0
                  , l = 0;
                for (let u = 0; u < e.length; u++) {
                    let c = e[u];
                    if (0 === a) {
                        if (c === i && (n || e.slice(u, u + s) === t)) {
                            o.push(e.slice(l, u)),
                            l = u + s;
                            continue
                        }
                        if ("/" === c) {
                            r = u;
                            continue
                        }
                    }
                    "[" === c ? a++ : "]" === c && a--
                }
                let u = 0 === o.length ? e : e.substring(l)
                  , c = u.startsWith("!")
                  , h = c ? u.substring(1) : u;
                return {
                    modifiers: o,
                    hasImportantModifier: c,
                    baseClassName: h,
                    maybePostfixModifierPosition: r && r > l ? r - l : void 0
                }
            }
            ;
            return r ? e => r({
                className: e,
                parseClassName: o
            }) : o
        }
          , p = e => {
            if (e.length <= 1)
                return e;
            let t = []
              , r = [];
            return e.forEach(e => {
                "[" === e[0] ? (t.push(...r.sort(), e),
                r = []) : r.push(e)
            }
            ),
            t.push(...r.sort()),
            t
        }
          , g = e => ({
            cache: d(e.cacheSize),
            parseClassName: f(e),
            ...n(e)
        })
          , m = /\s+/
          , y = (e, t) => {
            let {parseClassName: r, getClassGroupId: n, getConflictingClassGroupIds: i} = t
              , s = []
              , o = e.trim().split(m)
              , a = "";
            for (let e = o.length - 1; e >= 0; e -= 1) {
                let t = o[e]
                  , {modifiers: l, hasImportantModifier: u, baseClassName: c, maybePostfixModifierPosition: h} = r(t)
                  , d = !!h
                  , f = n(d ? c.substring(0, h) : c);
                if (!f) {
                    if (!d || !(f = n(c))) {
                        a = t + (a.length > 0 ? " " + a : a);
                        continue
                    }
                    d = !1
                }
                let g = p(l).join(":")
                  , m = u ? g + "!" : g
                  , y = m + f;
                if (s.includes(y))
                    continue;
                s.push(y);
                let v = i(f, d);
                for (let e = 0; e < v.length; ++e) {
                    let t = v[e];
                    s.push(m + t)
                }
                a = t + (a.length > 0 ? " " + a : a)
            }
            return a
        }
        ;
        function v() {
            let e, t, r = 0, n = "";
            for (; r < arguments.length; )
                (e = arguments[r++]) && (t = b(e)) && (n && (n += " "),
                n += t);
            return n
        }
        let b = e => {
            let t;
            if ("string" == typeof e)
                return e;
            let r = "";
            for (let n = 0; n < e.length; n++)
                e[n] && (t = b(e[n])) && (r && (r += " "),
                r += t);
            return r
        }
          , w = e => {
            let t = t => t[e] || [];
            return t.isThemeGetter = !0,
            t
        }
          , _ = /^\[(?:([a-z-]+):)?(.+)\]$/i
          , k = /^\d+\/\d+$/
          , E = new Set(["px", "full", "screen"])
          , x = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
          , T = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
          , S = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
          , j = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
          , O = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
          , A = e => C(e) || E.has(e) || k.test(e)
          , P = e => W(e, "length", J)
          , C = e => !!e && !Number.isNaN(Number(e))
          , R = e => W(e, "number", C)
          , I = e => !!e && Number.isInteger(Number(e))
          , $ = e => e.endsWith("%") && C(e.slice(0, -1))
          , L = e => _.test(e)
          , N = e => x.test(e)
          , U = new Set(["length", "size", "percentage"])
          , D = e => W(e, U, K)
          , M = e => W(e, "position", K)
          , B = new Set(["image", "url"])
          , z = e => W(e, B, H)
          , F = e => W(e, "", G)
          , q = () => !0
          , W = (e, t, r) => {
            let n = _.exec(e);
            return !!n && (n[1] ? "string" == typeof t ? n[1] === t : t.has(n[1]) : r(n[2]))
        }
          , J = e => T.test(e) && !S.test(e)
          , K = () => !1
          , G = e => j.test(e)
          , H = e => O.test(e)
          , V = function(e, ...t) {
            let r, n, i;
            let s = function(a) {
                return n = (r = g(t.reduce( (e, t) => t(e), e()))).cache.get,
                i = r.cache.set,
                s = o,
                o(a)
            };
            function o(e) {
                let t = n(e);
                if (t)
                    return t;
                let s = y(e, r);
                return i(e, s),
                s
            }
            return function() {
                return s(v.apply(null, arguments))
            }
        }( () => {
            let e = w("colors")
              , t = w("spacing")
              , r = w("blur")
              , n = w("brightness")
              , i = w("borderColor")
              , s = w("borderRadius")
              , o = w("borderSpacing")
              , a = w("borderWidth")
              , l = w("contrast")
              , u = w("grayscale")
              , c = w("hueRotate")
              , h = w("invert")
              , d = w("gap")
              , f = w("gradientColorStops")
              , p = w("gradientColorStopPositions")
              , g = w("inset")
              , m = w("margin")
              , y = w("opacity")
              , v = w("padding")
              , b = w("saturate")
              , _ = w("scale")
              , k = w("sepia")
              , E = w("skew")
              , x = w("space")
              , T = w("translate")
              , S = () => ["auto", "contain", "none"]
              , j = () => ["auto", "hidden", "clip", "visible", "scroll"]
              , O = () => ["auto", L, t]
              , U = () => [L, t]
              , B = () => ["", A, P]
              , W = () => ["auto", C, L]
              , J = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
              , K = () => ["solid", "dashed", "dotted", "double", "none"]
              , G = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
              , H = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
              , V = () => ["", "0", L]
              , Y = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
              , X = () => [C, L];
            return {
                cacheSize: 500,
                separator: ":",
                theme: {
                    colors: [q],
                    spacing: [A, P],
                    blur: ["none", "", N, L],
                    brightness: X(),
                    borderColor: [e],
                    borderRadius: ["none", "", "full", N, L],
                    borderSpacing: U(),
                    borderWidth: B(),
                    contrast: X(),
                    grayscale: V(),
                    hueRotate: X(),
                    invert: V(),
                    gap: U(),
                    gradientColorStops: [e],
                    gradientColorStopPositions: [$, P],
                    inset: O(),
                    margin: O(),
                    opacity: X(),
                    padding: U(),
                    saturate: X(),
                    scale: X(),
                    sepia: V(),
                    skew: X(),
                    space: U(),
                    translate: U()
                },
                classGroups: {
                    aspect: [{
                        aspect: ["auto", "square", "video", L]
                    }],
                    container: ["container"],
                    columns: [{
                        columns: [N]
                    }],
                    "break-after": [{
                        "break-after": Y()
                    }],
                    "break-before": [{
                        "break-before": Y()
                    }],
                    "break-inside": [{
                        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                    }],
                    "box-decoration": [{
                        "box-decoration": ["slice", "clone"]
                    }],
                    box: [{
                        box: ["border", "content"]
                    }],
                    display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                    float: [{
                        float: ["right", "left", "none", "start", "end"]
                    }],
                    clear: [{
                        clear: ["left", "right", "both", "none", "start", "end"]
                    }],
                    isolation: ["isolate", "isolation-auto"],
                    "object-fit": [{
                        object: ["contain", "cover", "fill", "none", "scale-down"]
                    }],
                    "object-position": [{
                        object: [...J(), L]
                    }],
                    overflow: [{
                        overflow: j()
                    }],
                    "overflow-x": [{
                        "overflow-x": j()
                    }],
                    "overflow-y": [{
                        "overflow-y": j()
                    }],
                    overscroll: [{
                        overscroll: S()
                    }],
                    "overscroll-x": [{
                        "overscroll-x": S()
                    }],
                    "overscroll-y": [{
                        "overscroll-y": S()
                    }],
                    position: ["static", "fixed", "absolute", "relative", "sticky"],
                    inset: [{
                        inset: [g]
                    }],
                    "inset-x": [{
                        "inset-x": [g]
                    }],
                    "inset-y": [{
                        "inset-y": [g]
                    }],
                    start: [{
                        start: [g]
                    }],
                    end: [{
                        end: [g]
                    }],
                    top: [{
                        top: [g]
                    }],
                    right: [{
                        right: [g]
                    }],
                    bottom: [{
                        bottom: [g]
                    }],
                    left: [{
                        left: [g]
                    }],
                    visibility: ["visible", "invisible", "collapse"],
                    z: [{
                        z: ["auto", I, L]
                    }],
                    basis: [{
                        basis: O()
                    }],
                    "flex-direction": [{
                        flex: ["row", "row-reverse", "col", "col-reverse"]
                    }],
                    "flex-wrap": [{
                        flex: ["wrap", "wrap-reverse", "nowrap"]
                    }],
                    flex: [{
                        flex: ["1", "auto", "initial", "none", L]
                    }],
                    grow: [{
                        grow: V()
                    }],
                    shrink: [{
                        shrink: V()
                    }],
                    order: [{
                        order: ["first", "last", "none", I, L]
                    }],
                    "grid-cols": [{
                        "grid-cols": [q]
                    }],
                    "col-start-end": [{
                        col: ["auto", {
                            span: ["full", I, L]
                        }, L]
                    }],
                    "col-start": [{
                        "col-start": W()
                    }],
                    "col-end": [{
                        "col-end": W()
                    }],
                    "grid-rows": [{
                        "grid-rows": [q]
                    }],
                    "row-start-end": [{
                        row: ["auto", {
                            span: [I, L]
                        }, L]
                    }],
                    "row-start": [{
                        "row-start": W()
                    }],
                    "row-end": [{
                        "row-end": W()
                    }],
                    "grid-flow": [{
                        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                    }],
                    "auto-cols": [{
                        "auto-cols": ["auto", "min", "max", "fr", L]
                    }],
                    "auto-rows": [{
                        "auto-rows": ["auto", "min", "max", "fr", L]
                    }],
                    gap: [{
                        gap: [d]
                    }],
                    "gap-x": [{
                        "gap-x": [d]
                    }],
                    "gap-y": [{
                        "gap-y": [d]
                    }],
                    "justify-content": [{
                        justify: ["normal", ...H()]
                    }],
                    "justify-items": [{
                        "justify-items": ["start", "end", "center", "stretch"]
                    }],
                    "justify-self": [{
                        "justify-self": ["auto", "start", "end", "center", "stretch"]
                    }],
                    "align-content": [{
                        content: ["normal", ...H(), "baseline"]
                    }],
                    "align-items": [{
                        items: ["start", "end", "center", "baseline", "stretch"]
                    }],
                    "align-self": [{
                        self: ["auto", "start", "end", "center", "stretch", "baseline"]
                    }],
                    "place-content": [{
                        "place-content": [...H(), "baseline"]
                    }],
                    "place-items": [{
                        "place-items": ["start", "end", "center", "baseline", "stretch"]
                    }],
                    "place-self": [{
                        "place-self": ["auto", "start", "end", "center", "stretch"]
                    }],
                    p: [{
                        p: [v]
                    }],
                    px: [{
                        px: [v]
                    }],
                    py: [{
                        py: [v]
                    }],
                    ps: [{
                        ps: [v]
                    }],
                    pe: [{
                        pe: [v]
                    }],
                    pt: [{
                        pt: [v]
                    }],
                    pr: [{
                        pr: [v]
                    }],
                    pb: [{
                        pb: [v]
                    }],
                    pl: [{
                        pl: [v]
                    }],
                    m: [{
                        m: [m]
                    }],
                    mx: [{
                        mx: [m]
                    }],
                    my: [{
                        my: [m]
                    }],
                    ms: [{
                        ms: [m]
                    }],
                    me: [{
                        me: [m]
                    }],
                    mt: [{
                        mt: [m]
                    }],
                    mr: [{
                        mr: [m]
                    }],
                    mb: [{
                        mb: [m]
                    }],
                    ml: [{
                        ml: [m]
                    }],
                    "space-x": [{
                        "space-x": [x]
                    }],
                    "space-x-reverse": ["space-x-reverse"],
                    "space-y": [{
                        "space-y": [x]
                    }],
                    "space-y-reverse": ["space-y-reverse"],
                    w: [{
                        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", L, t]
                    }],
                    "min-w": [{
                        "min-w": [L, t, "min", "max", "fit"]
                    }],
                    "max-w": [{
                        "max-w": [L, t, "none", "full", "min", "max", "fit", "prose", {
                            screen: [N]
                        }, N]
                    }],
                    h: [{
                        h: [L, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                    }],
                    "min-h": [{
                        "min-h": [L, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                    }],
                    "max-h": [{
                        "max-h": [L, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                    }],
                    size: [{
                        size: [L, t, "auto", "min", "max", "fit"]
                    }],
                    "font-size": [{
                        text: ["base", N, P]
                    }],
                    "font-smoothing": ["antialiased", "subpixel-antialiased"],
                    "font-style": ["italic", "not-italic"],
                    "font-weight": [{
                        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", R]
                    }],
                    "font-family": [{
                        font: [q]
                    }],
                    "fvn-normal": ["normal-nums"],
                    "fvn-ordinal": ["ordinal"],
                    "fvn-slashed-zero": ["slashed-zero"],
                    "fvn-figure": ["lining-nums", "oldstyle-nums"],
                    "fvn-spacing": ["proportional-nums", "tabular-nums"],
                    "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
                    tracking: [{
                        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", L]
                    }],
                    "line-clamp": [{
                        "line-clamp": ["none", C, R]
                    }],
                    leading: [{
                        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", A, L]
                    }],
                    "list-image": [{
                        "list-image": ["none", L]
                    }],
                    "list-style-type": [{
                        list: ["none", "disc", "decimal", L]
                    }],
                    "list-style-position": [{
                        list: ["inside", "outside"]
                    }],
                    "placeholder-color": [{
                        placeholder: [e]
                    }],
                    "placeholder-opacity": [{
                        "placeholder-opacity": [y]
                    }],
                    "text-alignment": [{
                        text: ["left", "center", "right", "justify", "start", "end"]
                    }],
                    "text-color": [{
                        text: [e]
                    }],
                    "text-opacity": [{
                        "text-opacity": [y]
                    }],
                    "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                    "text-decoration-style": [{
                        decoration: [...K(), "wavy"]
                    }],
                    "text-decoration-thickness": [{
                        decoration: ["auto", "from-font", A, P]
                    }],
                    "underline-offset": [{
                        "underline-offset": ["auto", A, L]
                    }],
                    "text-decoration-color": [{
                        decoration: [e]
                    }],
                    "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                    "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                    "text-wrap": [{
                        text: ["wrap", "nowrap", "balance", "pretty"]
                    }],
                    indent: [{
                        indent: U()
                    }],
                    "vertical-align": [{
                        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", L]
                    }],
                    whitespace: [{
                        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                    }],
                    break: [{
                        break: ["normal", "words", "all", "keep"]
                    }],
                    hyphens: [{
                        hyphens: ["none", "manual", "auto"]
                    }],
                    content: [{
                        content: ["none", L]
                    }],
                    "bg-attachment": [{
                        bg: ["fixed", "local", "scroll"]
                    }],
                    "bg-clip": [{
                        "bg-clip": ["border", "padding", "content", "text"]
                    }],
                    "bg-opacity": [{
                        "bg-opacity": [y]
                    }],
                    "bg-origin": [{
                        "bg-origin": ["border", "padding", "content"]
                    }],
                    "bg-position": [{
                        bg: [...J(), M]
                    }],
                    "bg-repeat": [{
                        bg: ["no-repeat", {
                            repeat: ["", "x", "y", "round", "space"]
                        }]
                    }],
                    "bg-size": [{
                        bg: ["auto", "cover", "contain", D]
                    }],
                    "bg-image": [{
                        bg: ["none", {
                            "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                        }, z]
                    }],
                    "bg-color": [{
                        bg: [e]
                    }],
                    "gradient-from-pos": [{
                        from: [p]
                    }],
                    "gradient-via-pos": [{
                        via: [p]
                    }],
                    "gradient-to-pos": [{
                        to: [p]
                    }],
                    "gradient-from": [{
                        from: [f]
                    }],
                    "gradient-via": [{
                        via: [f]
                    }],
                    "gradient-to": [{
                        to: [f]
                    }],
                    rounded: [{
                        rounded: [s]
                    }],
                    "rounded-s": [{
                        "rounded-s": [s]
                    }],
                    "rounded-e": [{
                        "rounded-e": [s]
                    }],
                    "rounded-t": [{
                        "rounded-t": [s]
                    }],
                    "rounded-r": [{
                        "rounded-r": [s]
                    }],
                    "rounded-b": [{
                        "rounded-b": [s]
                    }],
                    "rounded-l": [{
                        "rounded-l": [s]
                    }],
                    "rounded-ss": [{
                        "rounded-ss": [s]
                    }],
                    "rounded-se": [{
                        "rounded-se": [s]
                    }],
                    "rounded-ee": [{
                        "rounded-ee": [s]
                    }],
                    "rounded-es": [{
                        "rounded-es": [s]
                    }],
                    "rounded-tl": [{
                        "rounded-tl": [s]
                    }],
                    "rounded-tr": [{
                        "rounded-tr": [s]
                    }],
                    "rounded-br": [{
                        "rounded-br": [s]
                    }],
                    "rounded-bl": [{
                        "rounded-bl": [s]
                    }],
                    "border-w": [{
                        border: [a]
                    }],
                    "border-w-x": [{
                        "border-x": [a]
                    }],
                    "border-w-y": [{
                        "border-y": [a]
                    }],
                    "border-w-s": [{
                        "border-s": [a]
                    }],
                    "border-w-e": [{
                        "border-e": [a]
                    }],
                    "border-w-t": [{
                        "border-t": [a]
                    }],
                    "border-w-r": [{
                        "border-r": [a]
                    }],
                    "border-w-b": [{
                        "border-b": [a]
                    }],
                    "border-w-l": [{
                        "border-l": [a]
                    }],
                    "border-opacity": [{
                        "border-opacity": [y]
                    }],
                    "border-style": [{
                        border: [...K(), "hidden"]
                    }],
                    "divide-x": [{
                        "divide-x": [a]
                    }],
                    "divide-x-reverse": ["divide-x-reverse"],
                    "divide-y": [{
                        "divide-y": [a]
                    }],
                    "divide-y-reverse": ["divide-y-reverse"],
                    "divide-opacity": [{
                        "divide-opacity": [y]
                    }],
                    "divide-style": [{
                        divide: K()
                    }],
                    "border-color": [{
                        border: [i]
                    }],
                    "border-color-x": [{
                        "border-x": [i]
                    }],
                    "border-color-y": [{
                        "border-y": [i]
                    }],
                    "border-color-s": [{
                        "border-s": [i]
                    }],
                    "border-color-e": [{
                        "border-e": [i]
                    }],
                    "border-color-t": [{
                        "border-t": [i]
                    }],
                    "border-color-r": [{
                        "border-r": [i]
                    }],
                    "border-color-b": [{
                        "border-b": [i]
                    }],
                    "border-color-l": [{
                        "border-l": [i]
                    }],
                    "divide-color": [{
                        divide: [i]
                    }],
                    "outline-style": [{
                        outline: ["", ...K()]
                    }],
                    "outline-offset": [{
                        "outline-offset": [A, L]
                    }],
                    "outline-w": [{
                        outline: [A, P]
                    }],
                    "outline-color": [{
                        outline: [e]
                    }],
                    "ring-w": [{
                        ring: B()
                    }],
                    "ring-w-inset": ["ring-inset"],
                    "ring-color": [{
                        ring: [e]
                    }],
                    "ring-opacity": [{
                        "ring-opacity": [y]
                    }],
                    "ring-offset-w": [{
                        "ring-offset": [A, P]
                    }],
                    "ring-offset-color": [{
                        "ring-offset": [e]
                    }],
                    shadow: [{
                        shadow: ["", "inner", "none", N, F]
                    }],
                    "shadow-color": [{
                        shadow: [q]
                    }],
                    opacity: [{
                        opacity: [y]
                    }],
                    "mix-blend": [{
                        "mix-blend": [...G(), "plus-lighter", "plus-darker"]
                    }],
                    "bg-blend": [{
                        "bg-blend": G()
                    }],
                    filter: [{
                        filter: ["", "none"]
                    }],
                    blur: [{
                        blur: [r]
                    }],
                    brightness: [{
                        brightness: [n]
                    }],
                    contrast: [{
                        contrast: [l]
                    }],
                    "drop-shadow": [{
                        "drop-shadow": ["", "none", N, L]
                    }],
                    grayscale: [{
                        grayscale: [u]
                    }],
                    "hue-rotate": [{
                        "hue-rotate": [c]
                    }],
                    invert: [{
                        invert: [h]
                    }],
                    saturate: [{
                        saturate: [b]
                    }],
                    sepia: [{
                        sepia: [k]
                    }],
                    "backdrop-filter": [{
                        "backdrop-filter": ["", "none"]
                    }],
                    "backdrop-blur": [{
                        "backdrop-blur": [r]
                    }],
                    "backdrop-brightness": [{
                        "backdrop-brightness": [n]
                    }],
                    "backdrop-contrast": [{
                        "backdrop-contrast": [l]
                    }],
                    "backdrop-grayscale": [{
                        "backdrop-grayscale": [u]
                    }],
                    "backdrop-hue-rotate": [{
                        "backdrop-hue-rotate": [c]
                    }],
                    "backdrop-invert": [{
                        "backdrop-invert": [h]
                    }],
                    "backdrop-opacity": [{
                        "backdrop-opacity": [y]
                    }],
                    "backdrop-saturate": [{
                        "backdrop-saturate": [b]
                    }],
                    "backdrop-sepia": [{
                        "backdrop-sepia": [k]
                    }],
                    "border-collapse": [{
                        border: ["collapse", "separate"]
                    }],
                    "border-spacing": [{
                        "border-spacing": [o]
                    }],
                    "border-spacing-x": [{
                        "border-spacing-x": [o]
                    }],
                    "border-spacing-y": [{
                        "border-spacing-y": [o]
                    }],
                    "table-layout": [{
                        table: ["auto", "fixed"]
                    }],
                    caption: [{
                        caption: ["top", "bottom"]
                    }],
                    transition: [{
                        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", L]
                    }],
                    duration: [{
                        duration: X()
                    }],
                    ease: [{
                        ease: ["linear", "in", "out", "in-out", L]
                    }],
                    delay: [{
                        delay: X()
                    }],
                    animate: [{
                        animate: ["none", "spin", "ping", "pulse", "bounce", L]
                    }],
                    transform: [{
                        transform: ["", "gpu", "none"]
                    }],
                    scale: [{
                        scale: [_]
                    }],
                    "scale-x": [{
                        "scale-x": [_]
                    }],
                    "scale-y": [{
                        "scale-y": [_]
                    }],
                    rotate: [{
                        rotate: [I, L]
                    }],
                    "translate-x": [{
                        "translate-x": [T]
                    }],
                    "translate-y": [{
                        "translate-y": [T]
                    }],
                    "skew-x": [{
                        "skew-x": [E]
                    }],
                    "skew-y": [{
                        "skew-y": [E]
                    }],
                    "transform-origin": [{
                        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", L]
                    }],
                    accent: [{
                        accent: ["auto", e]
                    }],
                    appearance: [{
                        appearance: ["none", "auto"]
                    }],
                    cursor: [{
                        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", L]
                    }],
                    "caret-color": [{
                        caret: [e]
                    }],
                    "pointer-events": [{
                        "pointer-events": ["none", "auto"]
                    }],
                    resize: [{
                        resize: ["none", "y", "x", ""]
                    }],
                    "scroll-behavior": [{
                        scroll: ["auto", "smooth"]
                    }],
                    "scroll-m": [{
                        "scroll-m": U()
                    }],
                    "scroll-mx": [{
                        "scroll-mx": U()
                    }],
                    "scroll-my": [{
                        "scroll-my": U()
                    }],
                    "scroll-ms": [{
                        "scroll-ms": U()
                    }],
                    "scroll-me": [{
                        "scroll-me": U()
                    }],
                    "scroll-mt": [{
                        "scroll-mt": U()
                    }],
                    "scroll-mr": [{
                        "scroll-mr": U()
                    }],
                    "scroll-mb": [{
                        "scroll-mb": U()
                    }],
                    "scroll-ml": [{
                        "scroll-ml": U()
                    }],
                    "scroll-p": [{
                        "scroll-p": U()
                    }],
                    "scroll-px": [{
                        "scroll-px": U()
                    }],
                    "scroll-py": [{
                        "scroll-py": U()
                    }],
                    "scroll-ps": [{
                        "scroll-ps": U()
                    }],
                    "scroll-pe": [{
                        "scroll-pe": U()
                    }],
                    "scroll-pt": [{
                        "scroll-pt": U()
                    }],
                    "scroll-pr": [{
                        "scroll-pr": U()
                    }],
                    "scroll-pb": [{
                        "scroll-pb": U()
                    }],
                    "scroll-pl": [{
                        "scroll-pl": U()
                    }],
                    "snap-align": [{
                        snap: ["start", "end", "center", "align-none"]
                    }],
                    "snap-stop": [{
                        snap: ["normal", "always"]
                    }],
                    "snap-type": [{
                        snap: ["none", "x", "y", "both"]
                    }],
                    "snap-strictness": [{
                        snap: ["mandatory", "proximity"]
                    }],
                    touch: [{
                        touch: ["auto", "none", "manipulation"]
                    }],
                    "touch-x": [{
                        "touch-pan": ["x", "left", "right"]
                    }],
                    "touch-y": [{
                        "touch-pan": ["y", "up", "down"]
                    }],
                    "touch-pz": ["touch-pinch-zoom"],
                    select: [{
                        select: ["none", "text", "all", "auto"]
                    }],
                    "will-change": [{
                        "will-change": ["auto", "scroll", "contents", "transform", L]
                    }],
                    fill: [{
                        fill: [e, "none"]
                    }],
                    "stroke-w": [{
                        stroke: [A, P, R]
                    }],
                    stroke: [{
                        stroke: [e, "none"]
                    }],
                    sr: ["sr-only", "not-sr-only"],
                    "forced-color-adjust": [{
                        "forced-color-adjust": ["auto", "none"]
                    }]
                },
                conflictingClassGroups: {
                    overflow: ["overflow-x", "overflow-y"],
                    overscroll: ["overscroll-x", "overscroll-y"],
                    inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                    "inset-x": ["right", "left"],
                    "inset-y": ["top", "bottom"],
                    flex: ["basis", "grow", "shrink"],
                    gap: ["gap-x", "gap-y"],
                    p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                    px: ["pr", "pl"],
                    py: ["pt", "pb"],
                    m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                    mx: ["mr", "ml"],
                    my: ["mt", "mb"],
                    size: ["w", "h"],
                    "font-size": ["leading"],
                    "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                    "fvn-ordinal": ["fvn-normal"],
                    "fvn-slashed-zero": ["fvn-normal"],
                    "fvn-figure": ["fvn-normal"],
                    "fvn-spacing": ["fvn-normal"],
                    "fvn-fraction": ["fvn-normal"],
                    "line-clamp": ["display", "overflow"],
                    rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                    "rounded-s": ["rounded-ss", "rounded-es"],
                    "rounded-e": ["rounded-se", "rounded-ee"],
                    "rounded-t": ["rounded-tl", "rounded-tr"],
                    "rounded-r": ["rounded-tr", "rounded-br"],
                    "rounded-b": ["rounded-br", "rounded-bl"],
                    "rounded-l": ["rounded-tl", "rounded-bl"],
                    "border-spacing": ["border-spacing-x", "border-spacing-y"],
                    "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                    "border-w-x": ["border-w-r", "border-w-l"],
                    "border-w-y": ["border-w-t", "border-w-b"],
                    "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                    "border-color-x": ["border-color-r", "border-color-l"],
                    "border-color-y": ["border-color-t", "border-color-b"],
                    "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                    "scroll-mx": ["scroll-mr", "scroll-ml"],
                    "scroll-my": ["scroll-mt", "scroll-mb"],
                    "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                    "scroll-px": ["scroll-pr", "scroll-pl"],
                    "scroll-py": ["scroll-pt", "scroll-pb"],
                    touch: ["touch-x", "touch-y", "touch-pz"],
                    "touch-x": ["touch"],
                    "touch-y": ["touch"],
                    "touch-pz": ["touch"]
                },
                conflictingClassGroupModifiers: {
                    "font-size": ["leading"]
                }
            }
        }
        );
        function Y() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return V(function() {
                for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++)
                    (e = arguments[r]) && (t = function e(t) {
                        var r, n, i = "";
                        if ("string" == typeof t || "number" == typeof t)
                            i += t;
                        else if ("object" == typeof t) {
                            if (Array.isArray(t)) {
                                var s = t.length;
                                for (r = 0; r < s; r++)
                                    t[r] && (n = e(t[r])) && (i && (i += " "),
                                    i += n)
                            } else
                                for (n in t)
                                    t[n] && (i && (i += " "),
                                    i += n)
                        }
                        return i
                    }(e)) && (n && (n += " "),
                    n += t);
                return n
            }(t))
        }
    },
    4851: function(e, t, r) {
        "use strict";
        r.r(t),
        r.d(t, {
            default: function() {
                return el
            }
        });
        var n = r(2676)
          , i = r(2981);
        r(7533);
        var s = r(2125)
          , o = r(5271)
          , a = r(7869)
          , l = r(967)
          , u = r(5061)
          , c = r(1224)
          , h = r(668)
          , d = r(9407)
          , f = r(1027)
          , p = r(408)
          , g = r(8173)
          , m = r(9939)
          , y = r(116)
          , v = r(9945)
          , b = r(8722)
          , w = r(867)
          , _ = "ToastProvider"
          , [k,E,x] = (0,
        h.B)("Toast")
          , [T,S] = (0,
        d.b)("Toast", [x])
          , [j,O] = T(_)
          , A = e => {
            let {__scopeToast: t, label: r="Notification", duration: i=5e3, swipeDirection: s="right", swipeThreshold: a=50, children: l} = e
              , [u,c] = o.useState(null)
              , [h,d] = o.useState(0)
              , f = o.useRef(!1)
              , p = o.useRef(!1);
            return r.trim() || console.error(`Invalid prop \`label\` supplied to \`${_}\`. Expected non-empty \`string\`.`),
            (0,
            n.jsx)(k.Provider, {
                scope: t,
                children: (0,
                n.jsx)(j, {
                    scope: t,
                    label: r,
                    duration: i,
                    swipeDirection: s,
                    swipeThreshold: a,
                    toastCount: h,
                    viewport: u,
                    onViewportChange: c,
                    onToastAdd: o.useCallback( () => d(e => e + 1), []),
                    onToastRemove: o.useCallback( () => d(e => e - 1), []),
                    isFocusedToastEscapeKeyDownRef: f,
                    isClosePausedRef: p,
                    children: l
                })
            })
        }
        ;
        A.displayName = _;
        var P = "ToastViewport"
          , C = ["F8"]
          , R = "toast.viewportPause"
          , I = "toast.viewportResume"
          , $ = o.forwardRef( (e, t) => {
            let {__scopeToast: r, hotkey: i=C, label: s="Notifications ({hotkey})", ...a} = e
              , l = O(P, r)
              , u = E(r)
              , h = o.useRef(null)
              , d = o.useRef(null)
              , p = o.useRef(null)
              , g = o.useRef(null)
              , y = (0,
            c.e)(t, g, l.onViewportChange)
              , v = i.join("+").replace(/Key/g, "").replace(/Digit/g, "")
              , b = l.toastCount > 0;
            o.useEffect( () => {
                let e = e => {
                    0 !== i.length && i.every(t => e[t] || e.code === t) && g.current?.focus()
                }
                ;
                return document.addEventListener("keydown", e),
                () => document.removeEventListener("keydown", e)
            }
            , [i]),
            o.useEffect( () => {
                let e = h.current
                  , t = g.current;
                if (b && e && t) {
                    let r = () => {
                        if (!l.isClosePausedRef.current) {
                            let e = new CustomEvent(R);
                            t.dispatchEvent(e),
                            l.isClosePausedRef.current = !0
                        }
                    }
                      , n = () => {
                        if (l.isClosePausedRef.current) {
                            let e = new CustomEvent(I);
                            t.dispatchEvent(e),
                            l.isClosePausedRef.current = !1
                        }
                    }
                      , i = t => {
                        e.contains(t.relatedTarget) || n()
                    }
                      , s = () => {
                        e.contains(document.activeElement) || n()
                    }
                    ;
                    return e.addEventListener("focusin", r),
                    e.addEventListener("focusout", i),
                    e.addEventListener("pointermove", r),
                    e.addEventListener("pointerleave", s),
                    window.addEventListener("blur", r),
                    window.addEventListener("focus", n),
                    () => {
                        e.removeEventListener("focusin", r),
                        e.removeEventListener("focusout", i),
                        e.removeEventListener("pointermove", r),
                        e.removeEventListener("pointerleave", s),
                        window.removeEventListener("blur", r),
                        window.removeEventListener("focus", n)
                    }
                }
            }
            , [b, l.isClosePausedRef]);
            let w = o.useCallback( ({tabbingDirection: e}) => {
                let t = u().map(t => {
                    let r = t.ref.current
                      , n = [r, ...function(e) {
                        let t = []
                          , r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                            acceptNode: e => {
                                let t = "INPUT" === e.tagName && "hidden" === e.type;
                                return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                            }
                        });
                        for (; r.nextNode(); )
                            t.push(r.currentNode);
                        return t
                    }(r)];
                    return "forwards" === e ? n : n.reverse()
                }
                );
                return ("forwards" === e ? t.reverse() : t).flat()
            }
            , [u]);
            return o.useEffect( () => {
                let e = g.current;
                if (e) {
                    let t = t => {
                        let r = t.altKey || t.ctrlKey || t.metaKey;
                        if ("Tab" === t.key && !r) {
                            let r = document.activeElement
                              , n = t.shiftKey;
                            if (t.target === e && n) {
                                d.current?.focus();
                                return
                            }
                            let i = w({
                                tabbingDirection: n ? "backwards" : "forwards"
                            })
                              , s = i.findIndex(e => e === r);
                            Q(i.slice(s + 1)) ? t.preventDefault() : n ? d.current?.focus() : p.current?.focus()
                        }
                    }
                    ;
                    return e.addEventListener("keydown", t),
                    () => e.removeEventListener("keydown", t)
                }
            }
            , [u, w]),
            (0,
            n.jsxs)(f.I0, {
                ref: h,
                role: "region",
                "aria-label": s.replace("{hotkey}", v),
                tabIndex: -1,
                style: {
                    pointerEvents: b ? void 0 : "none"
                },
                children: [b && (0,
                n.jsx)(N, {
                    ref: d,
                    onFocusFromOutsideViewport: () => {
                        Q(w({
                            tabbingDirection: "forwards"
                        }))
                    }
                }), (0,
                n.jsx)(k.Slot, {
                    scope: r,
                    children: (0,
                    n.jsx)(m.WV.ol, {
                        tabIndex: -1,
                        ...a,
                        ref: y
                    })
                }), b && (0,
                n.jsx)(N, {
                    ref: p,
                    onFocusFromOutsideViewport: () => {
                        Q(w({
                            tabbingDirection: "backwards"
                        }))
                    }
                })]
            })
        }
        );
        $.displayName = P;
        var L = "ToastFocusProxy"
          , N = o.forwardRef( (e, t) => {
            let {__scopeToast: r, onFocusFromOutsideViewport: i, ...s} = e
              , o = O(L, r);
            return (0,
            n.jsx)(w.T, {
                "aria-hidden": !0,
                tabIndex: 0,
                ...s,
                ref: t,
                style: {
                    position: "fixed"
                },
                onFocus: e => {
                    let t = e.relatedTarget;
                    o.viewport?.contains(t) || i()
                }
            })
        }
        );
        N.displayName = L;
        var U = "Toast"
          , D = o.forwardRef( (e, t) => {
            let {forceMount: r, open: i, defaultOpen: s, onOpenChange: o, ...a} = e
              , [l=!0,c] = (0,
            v.T)({
                prop: i,
                defaultProp: s,
                onChange: o
            });
            return (0,
            n.jsx)(g.z, {
                present: r || l,
                children: (0,
                n.jsx)(z, {
                    open: l,
                    ...a,
                    ref: t,
                    onClose: () => c(!1),
                    onPause: (0,
                    y.W)(e.onPause),
                    onResume: (0,
                    y.W)(e.onResume),
                    onSwipeStart: (0,
                    u.M)(e.onSwipeStart, e => {
                        e.currentTarget.setAttribute("data-swipe", "start")
                    }
                    ),
                    onSwipeMove: (0,
                    u.M)(e.onSwipeMove, e => {
                        let {x: t, y: r} = e.detail.delta;
                        e.currentTarget.setAttribute("data-swipe", "move"),
                        e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${t}px`),
                        e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${r}px`)
                    }
                    ),
                    onSwipeCancel: (0,
                    u.M)(e.onSwipeCancel, e => {
                        e.currentTarget.setAttribute("data-swipe", "cancel"),
                        e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                        e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                        e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                        e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
                    }
                    ),
                    onSwipeEnd: (0,
                    u.M)(e.onSwipeEnd, e => {
                        let {x: t, y: r} = e.detail.delta;
                        e.currentTarget.setAttribute("data-swipe", "end"),
                        e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                        e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                        e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${t}px`),
                        e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${r}px`),
                        c(!1)
                    }
                    )
                })
            })
        }
        );
        D.displayName = U;
        var [M,B] = T(U, {
            onClose() {}
        })
          , z = o.forwardRef( (e, t) => {
            let {__scopeToast: r, type: i="foreground", duration: s, open: a, onClose: h, onEscapeKeyDown: d, onPause: p, onResume: g, onSwipeStart: v, onSwipeMove: b, onSwipeCancel: w, onSwipeEnd: _, ...E} = e
              , x = O(U, r)
              , [T,S] = o.useState(null)
              , j = (0,
            c.e)(t, e => S(e))
              , A = o.useRef(null)
              , P = o.useRef(null)
              , C = s || x.duration
              , $ = o.useRef(0)
              , L = o.useRef(C)
              , N = o.useRef(0)
              , {onToastAdd: D, onToastRemove: B} = x
              , z = (0,
            y.W)( () => {
                T?.contains(document.activeElement) && x.viewport?.focus(),
                h()
            }
            )
              , q = o.useCallback(e => {
                e && e !== 1 / 0 && (window.clearTimeout(N.current),
                $.current = new Date().getTime(),
                N.current = window.setTimeout(z, e))
            }
            , [z]);
            o.useEffect( () => {
                let e = x.viewport;
                if (e) {
                    let t = () => {
                        q(L.current),
                        g?.()
                    }
                      , r = () => {
                        let e = new Date().getTime() - $.current;
                        L.current = L.current - e,
                        window.clearTimeout(N.current),
                        p?.()
                    }
                    ;
                    return e.addEventListener(R, r),
                    e.addEventListener(I, t),
                    () => {
                        e.removeEventListener(R, r),
                        e.removeEventListener(I, t)
                    }
                }
            }
            , [x.viewport, C, p, g, q]),
            o.useEffect( () => {
                a && !x.isClosePausedRef.current && q(C)
            }
            , [a, C, x.isClosePausedRef, q]),
            o.useEffect( () => (D(),
            () => B()), [D, B]);
            let W = o.useMemo( () => T ? function e(t) {
                let r = [];
                return Array.from(t.childNodes).forEach(t => {
                    if (t.nodeType === t.TEXT_NODE && t.textContent && r.push(t.textContent),
                    t.nodeType === t.ELEMENT_NODE) {
                        let n = t.ariaHidden || t.hidden || "none" === t.style.display
                          , i = "" === t.dataset.radixToastAnnounceExclude;
                        if (!n) {
                            if (i) {
                                let e = t.dataset.radixToastAnnounceAlt;
                                e && r.push(e)
                            } else
                                r.push(...e(t))
                        }
                    }
                }
                ),
                r
            }(T) : null, [T]);
            return x.viewport ? (0,
            n.jsxs)(n.Fragment, {
                children: [W && (0,
                n.jsx)(F, {
                    __scopeToast: r,
                    role: "status",
                    "aria-live": "foreground" === i ? "assertive" : "polite",
                    "aria-atomic": !0,
                    children: W
                }), (0,
                n.jsx)(M, {
                    scope: r,
                    onClose: z,
                    children: l.createPortal((0,
                    n.jsx)(k.ItemSlot, {
                        scope: r,
                        children: (0,
                        n.jsx)(f.fC, {
                            asChild: !0,
                            onEscapeKeyDown: (0,
                            u.M)(d, () => {
                                x.isFocusedToastEscapeKeyDownRef.current || z(),
                                x.isFocusedToastEscapeKeyDownRef.current = !1
                            }
                            ),
                            children: (0,
                            n.jsx)(m.WV.li, {
                                role: "status",
                                "aria-live": "off",
                                "aria-atomic": !0,
                                tabIndex: 0,
                                "data-state": a ? "open" : "closed",
                                "data-swipe-direction": x.swipeDirection,
                                ...E,
                                ref: j,
                                style: {
                                    userSelect: "none",
                                    touchAction: "none",
                                    ...e.style
                                },
                                onKeyDown: (0,
                                u.M)(e.onKeyDown, e => {
                                    "Escape" !== e.key || (d?.(e.nativeEvent),
                                    e.nativeEvent.defaultPrevented || (x.isFocusedToastEscapeKeyDownRef.current = !0,
                                    z()))
                                }
                                ),
                                onPointerDown: (0,
                                u.M)(e.onPointerDown, e => {
                                    0 === e.button && (A.current = {
                                        x: e.clientX,
                                        y: e.clientY
                                    })
                                }
                                ),
                                onPointerMove: (0,
                                u.M)(e.onPointerMove, e => {
                                    if (!A.current)
                                        return;
                                    let t = e.clientX - A.current.x
                                      , r = e.clientY - A.current.y
                                      , n = !!P.current
                                      , i = ["left", "right"].includes(x.swipeDirection)
                                      , s = ["left", "up"].includes(x.swipeDirection) ? Math.min : Math.max
                                      , o = i ? s(0, t) : 0
                                      , a = i ? 0 : s(0, r)
                                      , l = "touch" === e.pointerType ? 10 : 2
                                      , u = {
                                        x: o,
                                        y: a
                                    }
                                      , c = {
                                        originalEvent: e,
                                        delta: u
                                    };
                                    n ? (P.current = u,
                                    Y("toast.swipeMove", b, c, {
                                        discrete: !1
                                    })) : X(u, x.swipeDirection, l) ? (P.current = u,
                                    Y("toast.swipeStart", v, c, {
                                        discrete: !1
                                    }),
                                    e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > l || Math.abs(r) > l) && (A.current = null)
                                }
                                ),
                                onPointerUp: (0,
                                u.M)(e.onPointerUp, e => {
                                    let t = P.current
                                      , r = e.target;
                                    if (r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId),
                                    P.current = null,
                                    A.current = null,
                                    t) {
                                        let r = e.currentTarget
                                          , n = {
                                            originalEvent: e,
                                            delta: t
                                        };
                                        X(t, x.swipeDirection, x.swipeThreshold) ? Y("toast.swipeEnd", _, n, {
                                            discrete: !0
                                        }) : Y("toast.swipeCancel", w, n, {
                                            discrete: !0
                                        }),
                                        r.addEventListener("click", e => e.preventDefault(), {
                                            once: !0
                                        })
                                    }
                                }
                                )
                            })
                        })
                    }), x.viewport)
                })]
            }) : null
        }
        )
          , F = e => {
            let {__scopeToast: t, children: r, ...i} = e
              , s = O(U, t)
              , [a,l] = o.useState(!1)
              , [u,c] = o.useState(!1);
            return function(e= () => {}
            ) {
                let t = (0,
                y.W)(e);
                (0,
                b.b)( () => {
                    let e = 0
                      , r = 0;
                    return e = window.requestAnimationFrame( () => r = window.requestAnimationFrame(t)),
                    () => {
                        window.cancelAnimationFrame(e),
                        window.cancelAnimationFrame(r)
                    }
                }
                , [t])
            }( () => l(!0)),
            o.useEffect( () => {
                let e = window.setTimeout( () => c(!0), 1e3);
                return () => window.clearTimeout(e)
            }
            , []),
            u ? null : (0,
            n.jsx)(p.h, {
                asChild: !0,
                children: (0,
                n.jsx)(w.T, {
                    ...i,
                    children: a && (0,
                    n.jsxs)(n.Fragment, {
                        children: [s.label, " ", r]
                    })
                })
            })
        }
          , q = o.forwardRef( (e, t) => {
            let {__scopeToast: r, ...i} = e;
            return (0,
            n.jsx)(m.WV.div, {
                ...i,
                ref: t
            })
        }
        );
        q.displayName = "ToastTitle";
        var W = o.forwardRef( (e, t) => {
            let {__scopeToast: r, ...i} = e;
            return (0,
            n.jsx)(m.WV.div, {
                ...i,
                ref: t
            })
        }
        );
        W.displayName = "ToastDescription";
        var J = "ToastAction"
          , K = o.forwardRef( (e, t) => {
            let {altText: r, ...i} = e;
            return r.trim() ? (0,
            n.jsx)(V, {
                altText: r,
                asChild: !0,
                children: (0,
                n.jsx)(H, {
                    ...i,
                    ref: t
                })
            }) : (console.error(`Invalid prop \`altText\` supplied to \`${J}\`. Expected non-empty \`string\`.`),
            null)
        }
        );
        K.displayName = J;
        var G = "ToastClose"
          , H = o.forwardRef( (e, t) => {
            let {__scopeToast: r, ...i} = e
              , s = B(G, r);
            return (0,
            n.jsx)(V, {
                asChild: !0,
                children: (0,
                n.jsx)(m.WV.button, {
                    type: "button",
                    ...i,
                    ref: t,
                    onClick: (0,
                    u.M)(e.onClick, s.onClose)
                })
            })
        }
        );
        H.displayName = G;
        var V = o.forwardRef( (e, t) => {
            let {__scopeToast: r, altText: i, ...s} = e;
            return (0,
            n.jsx)(m.WV.div, {
                "data-radix-toast-announce-exclude": "",
                "data-radix-toast-announce-alt": i || void 0,
                ...s,
                ref: t
            })
        }
        );
        function Y(e, t, r, {discrete: n}) {
            let i = r.originalEvent.currentTarget
              , s = new CustomEvent(e,{
                bubbles: !0,
                cancelable: !0,
                detail: r
            });
            t && i.addEventListener(e, t, {
                once: !0
            }),
            n ? (0,
            m.jH)(i, s) : i.dispatchEvent(s)
        }
        var X = (e, t, r=0) => {
            let n = Math.abs(e.x)
              , i = Math.abs(e.y)
              , s = n > i;
            return "left" === t || "right" === t ? s && n > r : !s && i > r
        }
        ;
        function Q(e) {
            let t = document.activeElement;
            return e.some(e => e === t || (e.focus(),
            document.activeElement !== t))
        }
        var Z = r(2808)
          , ee = r(2582);
        let et = o.forwardRef( (e, t) => {
            let {className: r, ...i} = e;
            return (0,
            n.jsx)($, {
                ref: t,
                className: (0,
                ee.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", r),
                ...i
            })
        }
        );
        et.displayName = $.displayName;
        let er = (0,
        Z.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
            variants: {
                variant: {
                    default: "border bg-background text-foreground",
                    destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
                }
            },
            defaultVariants: {
                variant: "default"
            }
        })
          , en = o.forwardRef( (e, t) => {
            let {className: r, variant: i, ...s} = e;
            return (0,
            n.jsx)(D, {
                ref: t,
                className: (0,
                ee.cn)(er({
                    variant: i
                }), r),
                ...s
            })
        }
        );
        en.displayName = D.displayName,
        o.forwardRef( (e, t) => {
            let {className: r, ...i} = e;
            return (0,
            n.jsx)(K, {
                ref: t,
                className: (0,
                ee.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", r),
                ...i
            })
        }
        ).displayName = K.displayName;
        let ei = o.forwardRef( (e, t) => {
            let {className: r, ...i} = e;
            return (0,
            n.jsx)(H, {
                ref: t,
                className: (0,
                ee.cn)("absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", r),
                "toast-close": "",
                ...i,
                children: (0,
                n.jsx)(a.Pxu, {
                    className: "h-4 w-4"
                })
            })
        }
        );
        ei.displayName = H.displayName;
        let es = o.forwardRef( (e, t) => {
            let {className: r, ...i} = e;
            return (0,
            n.jsx)(q, {
                ref: t,
                className: (0,
                ee.cn)("text-sm font-semibold [&+div]:text-xs", r),
                ...i
            })
        }
        );
        es.displayName = q.displayName;
        let eo = o.forwardRef( (e, t) => {
            let {className: r, ...i} = e;
            return (0,
            n.jsx)(W, {
                ref: t,
                className: (0,
                ee.cn)("text-sm opacity-90", r),
                ...i
            })
        }
        );
        function ea() {
            let {toasts: e} = (0,
            s.pm)();
            return (0,
            n.jsxs)(A, {
                children: [e.map(function(e) {
                    let {id: t, title: r, description: i, action: s, ...o} = e;
                    return (0,
                    n.jsxs)(en, {
                        ...o,
                        children: [(0,
                        n.jsxs)("div", {
                            className: "grid gap-1",
                            children: [r && (0,
                            n.jsx)(es, {
                                children: r
                            }), i && (0,
                            n.jsx)(eo, {
                                children: i
                            })]
                        }), s, (0,
                        n.jsx)(ei, {})]
                    }, t)
                }), (0,
                n.jsx)(et, {})]
            })
        }
        function el(e) {
            let {Component: t, pageProps: r} = e
              , [s,a] = (0,
            o.useState)(!1);
            return ((0,
            o.useEffect)( () => {
                "dark" === getComputedStyle(document.documentElement).getPropertyValue("--mode").trim().replace(/"/g, "") ? document.documentElement.classList.add("dark") : document.documentElement.classList.add("light"),
                a(!0)
            }
            , []),
            s) ? (0,
            n.jsx)("div", {
                className: "min-h-screen",
                children: (0,
                n.jsxs)(i.Ho, {
                    children: [(0,
                    n.jsx)(t, {
                        ...r
                    }), (0,
                    n.jsx)(ea, {})]
                })
            }) : null
        }
        eo.displayName = W.displayName
    },
    472: function(e, t, r) {
        "use strict";
        let n;
        r.d(t, {
            e: function() {
                return tV
            }
        });
        let i = e => {
            let t;
            return e ? t = e : "undefined" == typeof fetch ? t = (...e) => Promise.resolve().then(r.bind(r, 7018)).then( ({default: t}) => t(...e)) : t = fetch,
            (...e) => t(...e)
        }
        ;
        class s extends Error {
            constructor(e, t="FunctionsError", r) {
                super(e),
                this.name = t,
                this.context = r
            }
        }
        class o extends s {
            constructor(e) {
                super("Failed to send a request to the Edge Function", "FunctionsFetchError", e)
            }
        }
        class a extends s {
            constructor(e) {
                super("Relay Error invoking the Edge Function", "FunctionsRelayError", e)
            }
        }
        class l extends s {
            constructor(e) {
                super("Edge Function returned a non-2xx status code", "FunctionsHttpError", e)
            }
        }
        (q = W || (W = {})).Any = "any",
        q.ApNortheast1 = "ap-northeast-1",
        q.ApNortheast2 = "ap-northeast-2",
        q.ApSouth1 = "ap-south-1",
        q.ApSoutheast1 = "ap-southeast-1",
        q.ApSoutheast2 = "ap-southeast-2",
        q.CaCentral1 = "ca-central-1",
        q.EuCentral1 = "eu-central-1",
        q.EuWest1 = "eu-west-1",
        q.EuWest2 = "eu-west-2",
        q.EuWest3 = "eu-west-3",
        q.SaEast1 = "sa-east-1",
        q.UsEast1 = "us-east-1",
        q.UsWest1 = "us-west-1",
        q.UsWest2 = "us-west-2";
        class u {
            constructor(e, {headers: t={}, customFetch: r, region: n=W.Any}={}) {
                this.url = e,
                this.headers = t,
                this.region = n,
                this.fetch = i(r)
            }
            setAuth(e) {
                this.headers.Authorization = `Bearer ${e}`
            }
            invoke(e, t={}) {
                var r, n, i, s, u;
                return n = this,
                i = void 0,
                s = void 0,
                u = function*() {
                    try {
                        let n;
                        let {headers: i, method: s, body: u} = t
                          , c = {}
                          , {region: h} = t;
                        h || (h = this.region),
                        h && "any" !== h && (c["x-region"] = h),
                        u && (i && !Object.prototype.hasOwnProperty.call(i, "Content-Type") || !i) && ("undefined" != typeof Blob && u instanceof Blob || u instanceof ArrayBuffer ? (c["Content-Type"] = "application/octet-stream",
                        n = u) : "string" == typeof u ? (c["Content-Type"] = "text/plain",
                        n = u) : "undefined" != typeof FormData && u instanceof FormData ? n = u : (c["Content-Type"] = "application/json",
                        n = JSON.stringify(u)));
                        let d = yield this.fetch(`${this.url}/${e}`, {
                            method: s || "POST",
                            headers: Object.assign(Object.assign(Object.assign({}, c), this.headers), i),
                            body: n
                        }).catch(e => {
                            throw new o(e)
                        }
                        )
                          , f = d.headers.get("x-relay-error");
                        if (f && "true" === f)
                            throw new a(d);
                        if (!d.ok)
                            throw new l(d);
                        let p = (null !== (r = d.headers.get("Content-Type")) && void 0 !== r ? r : "text/plain").split(";")[0].trim();
                        return {
                            data: "application/json" === p ? yield d.json() : "application/octet-stream" === p ? yield d.blob() : "text/event-stream" === p ? d : "multipart/form-data" === p ? yield d.formData() : yield d.text(),
                            error: null
                        }
                    } catch (e) {
                        return {
                            data: null,
                            error: e
                        }
                    }
                }
                ,
                new (s || (s = Promise))(function(e, t) {
                    function r(e) {
                        try {
                            a(u.next(e))
                        } catch (e) {
                            t(e)
                        }
                    }
                    function o(e) {
                        try {
                            a(u.throw(e))
                        } catch (e) {
                            t(e)
                        }
                    }
                    function a(t) {
                        var n;
                        t.done ? e(t.value) : ((n = t.value)instanceof s ? n : new s(function(e) {
                            e(n)
                        }
                        )).then(r, o)
                    }
                    a((u = u.apply(n, i || [])).next())
                }
                )
            }
        }
        let {PostgrestClient: c, PostgrestQueryBuilder: h, PostgrestFilterBuilder: d, PostgrestTransformBuilder: f, PostgrestBuilder: p} = r(7090)
          , g = {
            "X-Client-Info": "realtime-js/2.10.7"
        };
        (et = J || (J = {}))[et.connecting = 0] = "connecting",
        et[et.open = 1] = "open",
        et[et.closing = 2] = "closing",
        et[et.closed = 3] = "closed",
        (er = K || (K = {})).closed = "closed",
        er.errored = "errored",
        er.joined = "joined",
        er.joining = "joining",
        er.leaving = "leaving",
        (en = G || (G = {})).close = "phx_close",
        en.error = "phx_error",
        en.join = "phx_join",
        en.reply = "phx_reply",
        en.leave = "phx_leave",
        en.access_token = "access_token",
        (H || (H = {})).websocket = "websocket",
        (ei = V || (V = {})).Connecting = "connecting",
        ei.Open = "open",
        ei.Closing = "closing",
        ei.Closed = "closed";
        class m {
            constructor() {
                this.HEADER_LENGTH = 1
            }
            decode(e, t) {
                return e.constructor === ArrayBuffer ? t(this._binaryDecode(e)) : "string" == typeof e ? t(JSON.parse(e)) : t({})
            }
            _binaryDecode(e) {
                let t = new DataView(e)
                  , r = new TextDecoder;
                return this._decodeBroadcast(e, t, r)
            }
            _decodeBroadcast(e, t, r) {
                let n = t.getUint8(1)
                  , i = t.getUint8(2)
                  , s = this.HEADER_LENGTH + 2
                  , o = r.decode(e.slice(s, s + n));
                s += n;
                let a = r.decode(e.slice(s, s + i));
                return s += i,
                {
                    ref: null,
                    topic: o,
                    event: a,
                    payload: JSON.parse(r.decode(e.slice(s, e.byteLength)))
                }
            }
        }
        class y {
            constructor(e, t) {
                this.callback = e,
                this.timerCalc = t,
                this.timer = void 0,
                this.tries = 0,
                this.callback = e,
                this.timerCalc = t
            }
            reset() {
                this.tries = 0,
                clearTimeout(this.timer)
            }
            scheduleTimeout() {
                clearTimeout(this.timer),
                this.timer = setTimeout( () => {
                    this.tries = this.tries + 1,
                    this.callback()
                }
                , this.timerCalc(this.tries + 1))
            }
        }
        (es = Y || (Y = {})).abstime = "abstime",
        es.bool = "bool",
        es.date = "date",
        es.daterange = "daterange",
        es.float4 = "float4",
        es.float8 = "float8",
        es.int2 = "int2",
        es.int4 = "int4",
        es.int4range = "int4range",
        es.int8 = "int8",
        es.int8range = "int8range",
        es.json = "json",
        es.jsonb = "jsonb",
        es.money = "money",
        es.numeric = "numeric",
        es.oid = "oid",
        es.reltime = "reltime",
        es.text = "text",
        es.time = "time",
        es.timestamp = "timestamp",
        es.timestamptz = "timestamptz",
        es.timetz = "timetz",
        es.tsrange = "tsrange",
        es.tstzrange = "tstzrange";
        let v = (e, t, r={}) => {
            var n;
            let i = null !== (n = r.skipTypes) && void 0 !== n ? n : [];
            return Object.keys(t).reduce( (r, n) => (r[n] = b(n, e, t, i),
            r), {})
        }
          , b = (e, t, r, n) => {
            let i = t.find(t => t.name === e)
              , s = null == i ? void 0 : i.type
              , o = r[e];
            return s && !n.includes(s) ? w(s, o) : _(o)
        }
          , w = (e, t) => {
            if ("_" === e.charAt(0))
                return T(t, e.slice(1, e.length));
            switch (e) {
            case Y.bool:
                return k(t);
            case Y.float4:
            case Y.float8:
            case Y.int2:
            case Y.int4:
            case Y.int8:
            case Y.numeric:
            case Y.oid:
                return E(t);
            case Y.json:
            case Y.jsonb:
                return x(t);
            case Y.timestamp:
                return S(t);
            case Y.abstime:
            case Y.date:
            case Y.daterange:
            case Y.int4range:
            case Y.int8range:
            case Y.money:
            case Y.reltime:
            case Y.text:
            case Y.time:
            case Y.timestamptz:
            case Y.timetz:
            case Y.tsrange:
            case Y.tstzrange:
            default:
                return _(t)
            }
        }
          , _ = e => e
          , k = e => {
            switch (e) {
            case "t":
                return !0;
            case "f":
                return !1;
            default:
                return e
            }
        }
          , E = e => {
            if ("string" == typeof e) {
                let t = parseFloat(e);
                if (!Number.isNaN(t))
                    return t
            }
            return e
        }
          , x = e => {
            if ("string" == typeof e)
                try {
                    return JSON.parse(e)
                } catch (e) {
                    console.log(`JSON parse error: ${e}`)
                }
            return e
        }
          , T = (e, t) => {
            if ("string" != typeof e)
                return e;
            let r = e.length - 1
              , n = e[r];
            if ("{" === e[0] && "}" === n) {
                let n;
                let i = e.slice(1, r);
                try {
                    n = JSON.parse("[" + i + "]")
                } catch (e) {
                    n = i ? i.split(",") : []
                }
                return n.map(e => w(t, e))
            }
            return e
        }
          , S = e => "string" == typeof e ? e.replace(" ", "T") : e
          , j = e => {
            let t = e;
            return (t = (t = t.replace(/^ws/i, "http")).replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, "")).replace(/\/+$/, "")
        }
        ;
        class O {
            constructor(e, t, r={}, n=1e4) {
                this.channel = e,
                this.event = t,
                this.payload = r,
                this.timeout = n,
                this.sent = !1,
                this.timeoutTimer = void 0,
                this.ref = "",
                this.receivedResp = null,
                this.recHooks = [],
                this.refEvent = null
            }
            resend(e) {
                this.timeout = e,
                this._cancelRefEvent(),
                this.ref = "",
                this.refEvent = null,
                this.receivedResp = null,
                this.sent = !1,
                this.send()
            }
            send() {
                this._hasReceived("timeout") || (this.startTimeout(),
                this.sent = !0,
                this.channel.socket.push({
                    topic: this.channel.topic,
                    event: this.event,
                    payload: this.payload,
                    ref: this.ref,
                    join_ref: this.channel._joinRef()
                }))
            }
            updatePayload(e) {
                this.payload = Object.assign(Object.assign({}, this.payload), e)
            }
            receive(e, t) {
                var r;
                return this._hasReceived(e) && t(null === (r = this.receivedResp) || void 0 === r ? void 0 : r.response),
                this.recHooks.push({
                    status: e,
                    callback: t
                }),
                this
            }
            startTimeout() {
                this.timeoutTimer || (this.ref = this.channel.socket._makeRef(),
                this.refEvent = this.channel._replyEventName(this.ref),
                this.channel._on(this.refEvent, {}, e => {
                    this._cancelRefEvent(),
                    this._cancelTimeout(),
                    this.receivedResp = e,
                    this._matchReceive(e)
                }
                ),
                this.timeoutTimer = setTimeout( () => {
                    this.trigger("timeout", {})
                }
                , this.timeout))
            }
            trigger(e, t) {
                this.refEvent && this.channel._trigger(this.refEvent, {
                    status: e,
                    response: t
                })
            }
            destroy() {
                this._cancelRefEvent(),
                this._cancelTimeout()
            }
            _cancelRefEvent() {
                this.refEvent && this.channel._off(this.refEvent, {})
            }
            _cancelTimeout() {
                clearTimeout(this.timeoutTimer),
                this.timeoutTimer = void 0
            }
            _matchReceive({status: e, response: t}) {
                this.recHooks.filter(t => t.status === e).forEach(e => e.callback(t))
            }
            _hasReceived(e) {
                return this.receivedResp && this.receivedResp.status === e
            }
        }
        (eo = X || (X = {})).SYNC = "sync",
        eo.JOIN = "join",
        eo.LEAVE = "leave";
        class A {
            constructor(e, t) {
                this.channel = e,
                this.state = {},
                this.pendingDiffs = [],
                this.joinRef = null,
                this.caller = {
                    onJoin: () => {}
                    ,
                    onLeave: () => {}
                    ,
                    onSync: () => {}
                };
                let r = (null == t ? void 0 : t.events) || {
                    state: "presence_state",
                    diff: "presence_diff"
                };
                this.channel._on(r.state, {}, e => {
                    let {onJoin: t, onLeave: r, onSync: n} = this.caller;
                    this.joinRef = this.channel._joinRef(),
                    this.state = A.syncState(this.state, e, t, r),
                    this.pendingDiffs.forEach(e => {
                        this.state = A.syncDiff(this.state, e, t, r)
                    }
                    ),
                    this.pendingDiffs = [],
                    n()
                }
                ),
                this.channel._on(r.diff, {}, e => {
                    let {onJoin: t, onLeave: r, onSync: n} = this.caller;
                    this.inPendingSyncState() ? this.pendingDiffs.push(e) : (this.state = A.syncDiff(this.state, e, t, r),
                    n())
                }
                ),
                this.onJoin( (e, t, r) => {
                    this.channel._trigger("presence", {
                        event: "join",
                        key: e,
                        currentPresences: t,
                        newPresences: r
                    })
                }
                ),
                this.onLeave( (e, t, r) => {
                    this.channel._trigger("presence", {
                        event: "leave",
                        key: e,
                        currentPresences: t,
                        leftPresences: r
                    })
                }
                ),
                this.onSync( () => {
                    this.channel._trigger("presence", {
                        event: "sync"
                    })
                }
                )
            }
            static syncState(e, t, r, n) {
                let i = this.cloneDeep(e)
                  , s = this.transformState(t)
                  , o = {}
                  , a = {};
                return this.map(i, (e, t) => {
                    s[e] || (a[e] = t)
                }
                ),
                this.map(s, (e, t) => {
                    let r = i[e];
                    if (r) {
                        let n = t.map(e => e.presence_ref)
                          , i = r.map(e => e.presence_ref)
                          , s = t.filter(e => 0 > i.indexOf(e.presence_ref))
                          , l = r.filter(e => 0 > n.indexOf(e.presence_ref));
                        s.length > 0 && (o[e] = s),
                        l.length > 0 && (a[e] = l)
                    } else
                        o[e] = t
                }
                ),
                this.syncDiff(i, {
                    joins: o,
                    leaves: a
                }, r, n)
            }
            static syncDiff(e, t, r, n) {
                let {joins: i, leaves: s} = {
                    joins: this.transformState(t.joins),
                    leaves: this.transformState(t.leaves)
                };
                return r || (r = () => {}
                ),
                n || (n = () => {}
                ),
                this.map(i, (t, n) => {
                    var i;
                    let s = null !== (i = e[t]) && void 0 !== i ? i : [];
                    if (e[t] = this.cloneDeep(n),
                    s.length > 0) {
                        let r = e[t].map(e => e.presence_ref)
                          , n = s.filter(e => 0 > r.indexOf(e.presence_ref));
                        e[t].unshift(...n)
                    }
                    r(t, s, n)
                }
                ),
                this.map(s, (t, r) => {
                    let i = e[t];
                    if (!i)
                        return;
                    let s = r.map(e => e.presence_ref);
                    i = i.filter(e => 0 > s.indexOf(e.presence_ref)),
                    e[t] = i,
                    n(t, i, r),
                    0 === i.length && delete e[t]
                }
                ),
                e
            }
            static map(e, t) {
                return Object.getOwnPropertyNames(e).map(r => t(r, e[r]))
            }
            static transformState(e) {
                return Object.getOwnPropertyNames(e = this.cloneDeep(e)).reduce( (t, r) => {
                    let n = e[r];
                    return "metas"in n ? t[r] = n.metas.map(e => (e.presence_ref = e.phx_ref,
                    delete e.phx_ref,
                    delete e.phx_ref_prev,
                    e)) : t[r] = n,
                    t
                }
                , {})
            }
            static cloneDeep(e) {
                return JSON.parse(JSON.stringify(e))
            }
            onJoin(e) {
                this.caller.onJoin = e
            }
            onLeave(e) {
                this.caller.onLeave = e
            }
            onSync(e) {
                this.caller.onSync = e
            }
            inPendingSyncState() {
                return !this.joinRef || this.joinRef !== this.channel._joinRef()
            }
        }
        (ea = Q || (Q = {})).ALL = "*",
        ea.INSERT = "INSERT",
        ea.UPDATE = "UPDATE",
        ea.DELETE = "DELETE",
        (el = Z || (Z = {})).BROADCAST = "broadcast",
        el.PRESENCE = "presence",
        el.POSTGRES_CHANGES = "postgres_changes",
        el.SYSTEM = "system",
        (eu = ee || (ee = {})).SUBSCRIBED = "SUBSCRIBED",
        eu.TIMED_OUT = "TIMED_OUT",
        eu.CLOSED = "CLOSED",
        eu.CHANNEL_ERROR = "CHANNEL_ERROR";
        class P {
            constructor(e, t={
                config: {}
            }, r) {
                this.topic = e,
                this.params = t,
                this.socket = r,
                this.bindings = {},
                this.state = K.closed,
                this.joinedOnce = !1,
                this.pushBuffer = [],
                this.subTopic = e.replace(/^realtime:/i, ""),
                this.params.config = Object.assign({
                    broadcast: {
                        ack: !1,
                        self: !1
                    },
                    presence: {
                        key: ""
                    },
                    private: !1
                }, t.config),
                this.timeout = this.socket.timeout,
                this.joinPush = new O(this,G.join,this.params,this.timeout),
                this.rejoinTimer = new y( () => this._rejoinUntilConnected(),this.socket.reconnectAfterMs),
                this.joinPush.receive("ok", () => {
                    this.state = K.joined,
                    this.rejoinTimer.reset(),
                    this.pushBuffer.forEach(e => e.send()),
                    this.pushBuffer = []
                }
                ),
                this._onClose( () => {
                    this.rejoinTimer.reset(),
                    this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`),
                    this.state = K.closed,
                    this.socket._remove(this)
                }
                ),
                this._onError(e => {
                    this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, e),
                    this.state = K.errored,
                    this.rejoinTimer.scheduleTimeout())
                }
                ),
                this.joinPush.receive("timeout", () => {
                    this._isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout),
                    this.state = K.errored,
                    this.rejoinTimer.scheduleTimeout())
                }
                ),
                this._on(G.reply, {}, (e, t) => {
                    this._trigger(this._replyEventName(t), e)
                }
                ),
                this.presence = new A(this),
                this.broadcastEndpointURL = j(this.socket.endPoint) + "/api/broadcast",
                this.private = this.params.config.private || !1
            }
            subscribe(e, t=this.timeout) {
                var r, n;
                if (this.socket.isConnected() || this.socket.connect(),
                this.joinedOnce)
                    throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
                {
                    let {config: {broadcast: i, presence: s, private: o}} = this.params;
                    this._onError(t => e && e("CHANNEL_ERROR", t)),
                    this._onClose( () => e && e("CLOSED"));
                    let a = {}
                      , l = {
                        broadcast: i,
                        presence: s,
                        postgres_changes: null !== (n = null === (r = this.bindings.postgres_changes) || void 0 === r ? void 0 : r.map(e => e.filter)) && void 0 !== n ? n : [],
                        private: o
                    };
                    this.socket.accessToken && (a.access_token = this.socket.accessToken),
                    this.updateJoinPayload(Object.assign({
                        config: l
                    }, a)),
                    this.joinedOnce = !0,
                    this._rejoin(t),
                    this.joinPush.receive("ok", ({postgres_changes: t}) => {
                        var r;
                        if (this.socket.accessToken && this.socket.setAuth(this.socket.accessToken),
                        void 0 === t) {
                            e && e("SUBSCRIBED");
                            return
                        }
                        {
                            let n = this.bindings.postgres_changes
                              , i = null !== (r = null == n ? void 0 : n.length) && void 0 !== r ? r : 0
                              , s = [];
                            for (let r = 0; r < i; r++) {
                                let i = n[r]
                                  , {filter: {event: o, schema: a, table: l, filter: u}} = i
                                  , c = t && t[r];
                                if (c && c.event === o && c.schema === a && c.table === l && c.filter === u)
                                    s.push(Object.assign(Object.assign({}, i), {
                                        id: c.id
                                    }));
                                else {
                                    this.unsubscribe(),
                                    e && e("CHANNEL_ERROR", Error("mismatch between server and client bindings for postgres changes"));
                                    return
                                }
                            }
                            this.bindings.postgres_changes = s,
                            e && e("SUBSCRIBED");
                            return
                        }
                    }
                    ).receive("error", t => {
                        e && e("CHANNEL_ERROR", Error(JSON.stringify(Object.values(t).join(", ") || "error")))
                    }
                    ).receive("timeout", () => {
                        e && e("TIMED_OUT")
                    }
                    )
                }
                return this
            }
            presenceState() {
                return this.presence.state
            }
            async track(e, t={}) {
                return await this.send({
                    type: "presence",
                    event: "track",
                    payload: e
                }, t.timeout || this.timeout)
            }
            async untrack(e={}) {
                return await this.send({
                    type: "presence",
                    event: "untrack"
                }, e)
            }
            on(e, t, r) {
                return this._on(e, t, r)
            }
            async send(e, t={}) {
                var r, n;
                if (this._canPush() || "broadcast" !== e.type)
                    return new Promise(r => {
                        var n, i, s;
                        let o = this._push(e.type, e, t.timeout || this.timeout);
                        "broadcast" !== e.type || (null === (s = null === (i = null === (n = this.params) || void 0 === n ? void 0 : n.config) || void 0 === i ? void 0 : i.broadcast) || void 0 === s ? void 0 : s.ack) || r("ok"),
                        o.receive("ok", () => r("ok")),
                        o.receive("error", () => r("error")),
                        o.receive("timeout", () => r("timed out"))
                    }
                    );
                {
                    let {event: i, payload: s} = e
                      , o = {
                        method: "POST",
                        headers: {
                            Authorization: this.socket.accessToken ? `Bearer ${this.socket.accessToken}` : "",
                            apikey: this.socket.apiKey ? this.socket.apiKey : "",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            messages: [{
                                topic: this.subTopic,
                                event: i,
                                payload: s,
                                private: this.private
                            }]
                        })
                    };
                    try {
                        let e = await this._fetchWithTimeout(this.broadcastEndpointURL, o, null !== (r = t.timeout) && void 0 !== r ? r : this.timeout);
                        return await (null === (n = e.body) || void 0 === n ? void 0 : n.cancel()),
                        e.ok ? "ok" : "error"
                    } catch (e) {
                        if ("AbortError" === e.name)
                            return "timed out";
                        return "error"
                    }
                }
            }
            updateJoinPayload(e) {
                this.joinPush.updatePayload(e)
            }
            unsubscribe(e=this.timeout) {
                this.state = K.leaving;
                let t = () => {
                    this.socket.log("channel", `leave ${this.topic}`),
                    this._trigger(G.close, "leave", this._joinRef())
                }
                ;
                return this.rejoinTimer.reset(),
                this.joinPush.destroy(),
                new Promise(r => {
                    let n = new O(this,G.leave,{},e);
                    n.receive("ok", () => {
                        t(),
                        r("ok")
                    }
                    ).receive("timeout", () => {
                        t(),
                        r("timed out")
                    }
                    ).receive("error", () => {
                        r("error")
                    }
                    ),
                    n.send(),
                    this._canPush() || n.trigger("ok", {})
                }
                )
            }
            async _fetchWithTimeout(e, t, r) {
                let n = new AbortController
                  , i = setTimeout( () => n.abort(), r)
                  , s = await this.socket.fetch(e, Object.assign(Object.assign({}, t), {
                    signal: n.signal
                }));
                return clearTimeout(i),
                s
            }
            _push(e, t, r=this.timeout) {
                if (!this.joinedOnce)
                    throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
                let n = new O(this,e,t,r);
                return this._canPush() ? n.send() : (n.startTimeout(),
                this.pushBuffer.push(n)),
                n
            }
            _onMessage(e, t, r) {
                return t
            }
            _isMember(e) {
                return this.topic === e
            }
            _joinRef() {
                return this.joinPush.ref
            }
            _trigger(e, t, r) {
                var n, i;
                let s = e.toLocaleLowerCase()
                  , {close: o, error: a, leave: l, join: u} = G;
                if (r && [o, a, l, u].indexOf(s) >= 0 && r !== this._joinRef())
                    return;
                let c = this._onMessage(s, t, r);
                if (t && !c)
                    throw "channel onMessage callbacks must return the payload, modified or unmodified";
                ["insert", "update", "delete"].includes(s) ? null === (n = this.bindings.postgres_changes) || void 0 === n || n.filter(e => {
                    var t, r, n;
                    return (null === (t = e.filter) || void 0 === t ? void 0 : t.event) === "*" || (null === (n = null === (r = e.filter) || void 0 === r ? void 0 : r.event) || void 0 === n ? void 0 : n.toLocaleLowerCase()) === s
                }
                ).map(e => e.callback(c, r)) : null === (i = this.bindings[s]) || void 0 === i || i.filter(e => {
                    var r, n, i, o, a, l;
                    if (!["broadcast", "presence", "postgres_changes"].includes(s))
                        return e.type.toLocaleLowerCase() === s;
                    if ("id"in e) {
                        let s = e.id
                          , o = null === (r = e.filter) || void 0 === r ? void 0 : r.event;
                        return s && (null === (n = t.ids) || void 0 === n ? void 0 : n.includes(s)) && ("*" === o || (null == o ? void 0 : o.toLocaleLowerCase()) === (null === (i = t.data) || void 0 === i ? void 0 : i.type.toLocaleLowerCase()))
                    }
                    {
                        let r = null === (a = null === (o = null == e ? void 0 : e.filter) || void 0 === o ? void 0 : o.event) || void 0 === a ? void 0 : a.toLocaleLowerCase();
                        return "*" === r || r === (null === (l = null == t ? void 0 : t.event) || void 0 === l ? void 0 : l.toLocaleLowerCase())
                    }
                }
                ).map(e => {
                    if ("object" == typeof c && "ids"in c) {
                        let e = c.data
                          , {schema: t, table: r, commit_timestamp: n, type: i, errors: s} = e;
                        c = Object.assign(Object.assign({}, {
                            schema: t,
                            table: r,
                            commit_timestamp: n,
                            eventType: i,
                            new: {},
                            old: {},
                            errors: s
                        }), this._getPayloadRecords(e))
                    }
                    e.callback(c, r)
                }
                )
            }
            _isClosed() {
                return this.state === K.closed
            }
            _isJoined() {
                return this.state === K.joined
            }
            _isJoining() {
                return this.state === K.joining
            }
            _isLeaving() {
                return this.state === K.leaving
            }
            _replyEventName(e) {
                return `chan_reply_${e}`
            }
            _on(e, t, r) {
                let n = e.toLocaleLowerCase()
                  , i = {
                    type: n,
                    filter: t,
                    callback: r
                };
                return this.bindings[n] ? this.bindings[n].push(i) : this.bindings[n] = [i],
                this
            }
            _off(e, t) {
                let r = e.toLocaleLowerCase();
                return this.bindings[r] = this.bindings[r].filter(e => {
                    var n;
                    return !((null === (n = e.type) || void 0 === n ? void 0 : n.toLocaleLowerCase()) === r && P.isEqual(e.filter, t))
                }
                ),
                this
            }
            static isEqual(e, t) {
                if (Object.keys(e).length !== Object.keys(t).length)
                    return !1;
                for (let r in e)
                    if (e[r] !== t[r])
                        return !1;
                return !0
            }
            _rejoinUntilConnected() {
                this.rejoinTimer.scheduleTimeout(),
                this.socket.isConnected() && this._rejoin()
            }
            _onClose(e) {
                this._on(G.close, {}, e)
            }
            _onError(e) {
                this._on(G.error, {}, t => e(t))
            }
            _canPush() {
                return this.socket.isConnected() && this._isJoined()
            }
            _rejoin(e=this.timeout) {
                this._isLeaving() || (this.socket._leaveOpenTopic(this.topic),
                this.state = K.joining,
                this.joinPush.resend(e))
            }
            _getPayloadRecords(e) {
                let t = {
                    new: {},
                    old: {}
                };
                return ("INSERT" === e.type || "UPDATE" === e.type) && (t.new = v(e.columns, e.record)),
                ("UPDATE" === e.type || "DELETE" === e.type) && (t.old = v(e.columns, e.old_record)),
                t
            }
        }
        let C = () => {}
          , R = "undefined" != typeof WebSocket
          , I = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
        class $ {
            constructor(e, t) {
                var n;
                this.accessToken = null,
                this.apiKey = null,
                this.channels = [],
                this.endPoint = "",
                this.httpEndpoint = "",
                this.headers = g,
                this.params = {},
                this.timeout = 1e4,
                this.heartbeatIntervalMs = 3e4,
                this.heartbeatTimer = void 0,
                this.pendingHeartbeatRef = null,
                this.ref = 0,
                this.logger = C,
                this.conn = null,
                this.sendBuffer = [],
                this.serializer = new m,
                this.stateChangeCallbacks = {
                    open: [],
                    close: [],
                    error: [],
                    message: []
                },
                this._resolveFetch = e => {
                    let t;
                    return e ? t = e : "undefined" == typeof fetch ? t = (...e) => Promise.resolve().then(r.bind(r, 7018)).then( ({default: t}) => t(...e)) : t = fetch,
                    (...e) => t(...e)
                }
                ,
                this.endPoint = `${e}/${H.websocket}`,
                this.httpEndpoint = j(e),
                (null == t ? void 0 : t.transport) ? this.transport = t.transport : this.transport = null,
                (null == t ? void 0 : t.params) && (this.params = t.params),
                (null == t ? void 0 : t.headers) && (this.headers = Object.assign(Object.assign({}, this.headers), t.headers)),
                (null == t ? void 0 : t.timeout) && (this.timeout = t.timeout),
                (null == t ? void 0 : t.logger) && (this.logger = t.logger),
                (null == t ? void 0 : t.heartbeatIntervalMs) && (this.heartbeatIntervalMs = t.heartbeatIntervalMs);
                let i = null === (n = null == t ? void 0 : t.params) || void 0 === n ? void 0 : n.apikey;
                if (i && (this.accessToken = i,
                this.apiKey = i),
                this.reconnectAfterMs = (null == t ? void 0 : t.reconnectAfterMs) ? t.reconnectAfterMs : e => [1e3, 2e3, 5e3, 1e4][e - 1] || 1e4,
                this.encode = (null == t ? void 0 : t.encode) ? t.encode : (e, t) => t(JSON.stringify(e)),
                this.decode = (null == t ? void 0 : t.decode) ? t.decode : this.serializer.decode.bind(this.serializer),
                this.reconnectTimer = new y(async () => {
                    this.disconnect(),
                    this.connect()
                }
                ,this.reconnectAfterMs),
                this.fetch = this._resolveFetch(null == t ? void 0 : t.fetch),
                null == t ? void 0 : t.worker) {
                    if ("undefined" != typeof window && !window.Worker)
                        throw Error("Web Worker is not supported");
                    this.worker = (null == t ? void 0 : t.worker) || !1,
                    this.workerUrl = null == t ? void 0 : t.workerUrl
                }
            }
            connect() {
                if (!this.conn) {
                    if (this.transport) {
                        this.conn = new this.transport(this._endPointURL(),void 0,{
                            headers: this.headers
                        });
                        return
                    }
                    if (R) {
                        this.conn = new WebSocket(this._endPointURL()),
                        this.setupConnection();
                        return
                    }
                    this.conn = new L(this._endPointURL(),void 0,{
                        close: () => {
                            this.conn = null
                        }
                    }),
                    r.e(183).then(r.t.bind(r, 5183, 23)).then( ({default: e}) => {
                        this.conn = new e(this._endPointURL(),void 0,{
                            headers: this.headers
                        }),
                        this.setupConnection()
                    }
                    )
                }
            }
            disconnect(e, t) {
                this.conn && (this.conn.onclose = function() {}
                ,
                e ? this.conn.close(e, null != t ? t : "") : this.conn.close(),
                this.conn = null,
                this.heartbeatTimer && clearInterval(this.heartbeatTimer),
                this.reconnectTimer.reset())
            }
            getChannels() {
                return this.channels
            }
            async removeChannel(e) {
                let t = await e.unsubscribe();
                return 0 === this.channels.length && this.disconnect(),
                t
            }
            async removeAllChannels() {
                let e = await Promise.all(this.channels.map(e => e.unsubscribe()));
                return this.disconnect(),
                e
            }
            log(e, t, r) {
                this.logger(e, t, r)
            }
            connectionState() {
                switch (this.conn && this.conn.readyState) {
                case J.connecting:
                    return V.Connecting;
                case J.open:
                    return V.Open;
                case J.closing:
                    return V.Closing;
                default:
                    return V.Closed
                }
            }
            isConnected() {
                return this.connectionState() === V.Open
            }
            channel(e, t={
                config: {}
            }) {
                let r = new P(`realtime:${e}`,t,this);
                return this.channels.push(r),
                r
            }
            push(e) {
                let {topic: t, event: r, payload: n, ref: i} = e
                  , s = () => {
                    this.encode(e, e => {
                        var t;
                        null === (t = this.conn) || void 0 === t || t.send(e)
                    }
                    )
                }
                ;
                this.log("push", `${t} ${r} (${i})`, n),
                this.isConnected() ? s() : this.sendBuffer.push(s)
            }
            setAuth(e) {
                this.accessToken = e,
                this.channels.forEach(t => {
                    e && t.updateJoinPayload({
                        access_token: e
                    }),
                    t.joinedOnce && t._isJoined() && t._push(G.access_token, {
                        access_token: e
                    })
                }
                )
            }
            _makeRef() {
                let e = this.ref + 1;
                return e === this.ref ? this.ref = 0 : this.ref = e,
                this.ref.toString()
            }
            _leaveOpenTopic(e) {
                let t = this.channels.find(t => t.topic === e && (t._isJoined() || t._isJoining()));
                t && (this.log("transport", `leaving duplicate topic "${e}"`),
                t.unsubscribe())
            }
            _remove(e) {
                this.channels = this.channels.filter(t => t._joinRef() !== e._joinRef())
            }
            setupConnection() {
                this.conn && (this.conn.binaryType = "arraybuffer",
                this.conn.onopen = () => this._onConnOpen(),
                this.conn.onerror = e => this._onConnError(e),
                this.conn.onmessage = e => this._onConnMessage(e),
                this.conn.onclose = e => this._onConnClose(e))
            }
            _endPointURL() {
                return this._appendParams(this.endPoint, Object.assign({}, this.params, {
                    vsn: "1.0.0"
                }))
            }
            _onConnMessage(e) {
                this.decode(e.data, e => {
                    let {topic: t, event: r, payload: n, ref: i} = e;
                    (i && i === this.pendingHeartbeatRef || r === (null == n ? void 0 : n.type)) && (this.pendingHeartbeatRef = null),
                    this.log("receive", `${n.status || ""} ${t} ${r} ${i && "(" + i + ")" || ""}`, n),
                    this.channels.filter(e => e._isMember(t)).forEach(e => e._trigger(r, n, i)),
                    this.stateChangeCallbacks.message.forEach(t => t(e))
                }
                )
            }
            async _onConnOpen() {
                if (this.log("transport", `connected to ${this._endPointURL()}`),
                this._flushSendBuffer(),
                this.reconnectTimer.reset(),
                this.worker) {
                    this.workerUrl ? this.log("worker", `starting worker for from ${this.workerUrl}`) : this.log("worker", "starting default worker");
                    let e = this._workerObjectUrl(this.workerUrl);
                    this.workerRef = new Worker(e),
                    this.workerRef.onerror = e => {
                        this.log("worker", "worker error", e.message),
                        this.workerRef.terminate()
                    }
                    ,
                    this.workerRef.onmessage = e => {
                        "keepAlive" === e.data.event && this._sendHeartbeat()
                    }
                    ,
                    this.workerRef.postMessage({
                        event: "start",
                        interval: this.heartbeatIntervalMs
                    })
                } else
                    this.heartbeatTimer && clearInterval(this.heartbeatTimer),
                    this.heartbeatTimer = setInterval( () => this._sendHeartbeat(), this.heartbeatIntervalMs);
                this.stateChangeCallbacks.open.forEach(e => e())
            }
            _onConnClose(e) {
                this.log("transport", "close", e),
                this._triggerChanError(),
                this.heartbeatTimer && clearInterval(this.heartbeatTimer),
                this.reconnectTimer.scheduleTimeout(),
                this.stateChangeCallbacks.close.forEach(t => t(e))
            }
            _onConnError(e) {
                this.log("transport", e.message),
                this._triggerChanError(),
                this.stateChangeCallbacks.error.forEach(t => t(e))
            }
            _triggerChanError() {
                this.channels.forEach(e => e._trigger(G.error))
            }
            _appendParams(e, t) {
                if (0 === Object.keys(t).length)
                    return e;
                let r = e.match(/\?/) ? "&" : "?"
                  , n = new URLSearchParams(t);
                return `${e}${r}${n}`
            }
            _flushSendBuffer() {
                this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach(e => e()),
                this.sendBuffer = [])
            }
            _sendHeartbeat() {
                var e;
                if (this.isConnected()) {
                    if (this.pendingHeartbeatRef) {
                        this.pendingHeartbeatRef = null,
                        this.log("transport", "heartbeat timeout. Attempting to re-establish connection"),
                        null === (e = this.conn) || void 0 === e || e.close(1e3, "hearbeat timeout");
                        return
                    }
                    this.pendingHeartbeatRef = this._makeRef(),
                    this.push({
                        topic: "phoenix",
                        event: "heartbeat",
                        payload: {},
                        ref: this.pendingHeartbeatRef
                    }),
                    this.setAuth(this.accessToken)
                }
            }
            _workerObjectUrl(e) {
                let t;
                if (e)
                    t = e;
                else {
                    let e = new Blob([I],{
                        type: "application/javascript"
                    });
                    t = URL.createObjectURL(e)
                }
                return t
            }
        }
        class L {
            constructor(e, t, r) {
                this.binaryType = "arraybuffer",
                this.onclose = () => {}
                ,
                this.onerror = () => {}
                ,
                this.onmessage = () => {}
                ,
                this.onopen = () => {}
                ,
                this.readyState = J.connecting,
                this.send = () => {}
                ,
                this.url = null,
                this.url = e,
                this.close = r.close
            }
        }
        class N extends Error {
            constructor(e) {
                super(e),
                this.__isStorageError = !0,
                this.name = "StorageError"
            }
        }
        function U(e) {
            return "object" == typeof e && null !== e && "__isStorageError"in e
        }
        class D extends N {
            constructor(e, t) {
                super(e),
                this.name = "StorageApiError",
                this.status = t
            }
            toJSON() {
                return {
                    name: this.name,
                    message: this.message,
                    status: this.status
                }
            }
        }
        class M extends N {
            constructor(e, t) {
                super(e),
                this.name = "StorageUnknownError",
                this.originalError = t
            }
        }
        let B = e => {
            let t;
            return e ? t = e : "undefined" == typeof fetch ? t = (...e) => Promise.resolve().then(r.bind(r, 7018)).then( ({default: t}) => t(...e)) : t = fetch,
            (...e) => t(...e)
        }
          , z = () => {
            var e, t, n, i;
            return e = void 0,
            t = void 0,
            n = void 0,
            i = function*() {
                return "undefined" == typeof Response ? (yield Promise.resolve().then(r.bind(r, 7018))).Response : Response
            }
            ,
            new (n || (n = Promise))(function(r, s) {
                function o(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function a(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function l(e) {
                    var t;
                    e.done ? r(e.value) : ((t = e.value)instanceof n ? t : new n(function(e) {
                        e(t)
                    }
                    )).then(o, a)
                }
                l((i = i.apply(e, t || [])).next())
            }
            )
        }
          , F = e => {
            if (Array.isArray(e))
                return e.map(e => F(e));
            if ("function" == typeof e || e !== Object(e))
                return e;
            let t = {};
            return Object.entries(e).forEach( ([e,r]) => {
                t[e.replace(/([-_][a-z])/gi, e => e.toUpperCase().replace(/[-_]/g, ""))] = F(r)
            }
            ),
            t
        }
        ;
        var q, W, J, K, G, H, V, Y, X, Q, Z, ee, et, er, en, ei, es, eo, ea, el, eu, ec = function(e, t, r, n) {
            return new (r || (r = Promise))(function(i, s) {
                function o(e) {
                    try {
                        l(n.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function a(e) {
                    try {
                        l(n.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function l(e) {
                    var t;
                    e.done ? i(e.value) : ((t = e.value)instanceof r ? t : new r(function(e) {
                        e(t)
                    }
                    )).then(o, a)
                }
                l((n = n.apply(e, t || [])).next())
            }
            )
        };
        let eh = e => e.msg || e.message || e.error_description || e.error || JSON.stringify(e)
          , ed = (e, t, r) => ec(void 0, void 0, void 0, function*() {
            e instanceof (yield z()) && !(null == r ? void 0 : r.noResolveJson) ? e.json().then(r => {
                t(new D(eh(r),e.status || 500))
            }
            ).catch(e => {
                t(new M(eh(e),e))
            }
            ) : t(new M(eh(e),e))
        })
          , ef = (e, t, r, n) => {
            let i = {
                method: e,
                headers: (null == t ? void 0 : t.headers) || {}
            };
            return "GET" === e ? i : (i.headers = Object.assign({
                "Content-Type": "application/json"
            }, null == t ? void 0 : t.headers),
            n && (i.body = JSON.stringify(n)),
            Object.assign(Object.assign({}, i), r))
        }
        ;
        function ep(e, t, r, n, i, s) {
            return ec(this, void 0, void 0, function*() {
                return new Promise( (o, a) => {
                    e(r, ef(t, n, i, s)).then(e => {
                        if (!e.ok)
                            throw e;
                        return (null == n ? void 0 : n.noResolveJson) ? e : e.json()
                    }
                    ).then(e => o(e)).catch(e => ed(e, a, n))
                }
                )
            })
        }
        function eg(e, t, r, n) {
            return ec(this, void 0, void 0, function*() {
                return ep(e, "GET", t, r, n)
            })
        }
        function em(e, t, r, n, i) {
            return ec(this, void 0, void 0, function*() {
                return ep(e, "POST", t, n, i, r)
            })
        }
        function ey(e, t, r, n, i) {
            return ec(this, void 0, void 0, function*() {
                return ep(e, "DELETE", t, n, i, r)
            })
        }
        var ev = r(9968).Buffer
          , eb = function(e, t, r, n) {
            return new (r || (r = Promise))(function(i, s) {
                function o(e) {
                    try {
                        l(n.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function a(e) {
                    try {
                        l(n.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function l(e) {
                    var t;
                    e.done ? i(e.value) : ((t = e.value)instanceof r ? t : new r(function(e) {
                        e(t)
                    }
                    )).then(o, a)
                }
                l((n = n.apply(e, t || [])).next())
            }
            )
        };
        let ew = {
            limit: 100,
            offset: 0,
            sortBy: {
                column: "name",
                order: "asc"
            }
        }
          , e_ = {
            cacheControl: "3600",
            contentType: "text/plain;charset=UTF-8",
            upsert: !1
        };
        class ek {
            constructor(e, t={}, r, n) {
                this.url = e,
                this.headers = t,
                this.bucketId = r,
                this.fetch = B(n)
            }
            uploadOrUpdate(e, t, r, n) {
                return eb(this, void 0, void 0, function*() {
                    try {
                        let i;
                        let s = Object.assign(Object.assign({}, e_), n)
                          , o = Object.assign(Object.assign({}, this.headers), "POST" === e && {
                            "x-upsert": String(s.upsert)
                        })
                          , a = s.metadata;
                        "undefined" != typeof Blob && r instanceof Blob ? ((i = new FormData).append("cacheControl", s.cacheControl),
                        a && i.append("metadata", this.encodeMetadata(a)),
                        i.append("", r)) : "undefined" != typeof FormData && r instanceof FormData ? ((i = r).append("cacheControl", s.cacheControl),
                        a && i.append("metadata", this.encodeMetadata(a))) : (i = r,
                        o["cache-control"] = `max-age=${s.cacheControl}`,
                        o["content-type"] = s.contentType,
                        a && (o["x-metadata"] = this.toBase64(this.encodeMetadata(a)))),
                        (null == n ? void 0 : n.headers) && (o = Object.assign(Object.assign({}, o), n.headers));
                        let l = this._removeEmptyFolders(t)
                          , u = this._getFinalPath(l)
                          , c = yield this.fetch(`${this.url}/object/${u}`, Object.assign({
                            method: e,
                            body: i,
                            headers: o
                        }, (null == s ? void 0 : s.duplex) ? {
                            duplex: s.duplex
                        } : {}))
                          , h = yield c.json();
                        if (c.ok)
                            return {
                                data: {
                                    path: l,
                                    id: h.Id,
                                    fullPath: h.Key
                                },
                                error: null
                            };
                        return {
                            data: null,
                            error: h
                        }
                    } catch (e) {
                        if (U(e))
                            return {
                                data: null,
                                error: e
                            };
                        throw e
                    }
                })
            }
            upload(e, t, r) {
                return eb(this, void 0, void 0, function*() {
                    return this.uploadOrUpdate("POST", e, t, r)
                })
            }
            uploadToSignedUrl(e, t, r, n) {
                return eb(this, void 0, void 0, function*() {
                    let i = this._removeEmptyFolders(e)
                      , s = this._getFinalPath(i)
                      , o = new URL(this.url + `/object/upload/sign/${s}`);
                    o.searchParams.set("token", t);
                    try {
                        let e;
                        let t = Object.assign({
                            upsert: e_.upsert
                        }, n)
                          , s = Object.assign(Object.assign({}, this.headers), {
                            "x-upsert": String(t.upsert)
                        });
                        "undefined" != typeof Blob && r instanceof Blob ? ((e = new FormData).append("cacheControl", t.cacheControl),
                        e.append("", r)) : "undefined" != typeof FormData && r instanceof FormData ? (e = r).append("cacheControl", t.cacheControl) : (e = r,
                        s["cache-control"] = `max-age=${t.cacheControl}`,
                        s["content-type"] = t.contentType);
                        let a = yield this.fetch(o.toString(), {
                            method: "PUT",
                            body: e,
                            headers: s
                        })
                          , l = yield a.json();
                        if (a.ok)
                            return {
                                data: {
                                    path: i,
                                    fullPath: l.Key
                                },
                                error: null
                            };
                        return {
                            data: null,
                            error: l
                        }
                    } catch (e) {
                        if (U(e))
                            return {
                                data: null,
                                error: e
                            };
                        throw e
                    }
                })
            }
            createSignedUploadUrl(e, t) {
                return eb(this, void 0, void 0, function*() {
                    try {
                        let r = this._getFinalPath(e)
                          , n = Object.assign({}, this.headers);
                        (null == t ? void 0 : t.upsert) && (n["x-upsert"] = "true");
                        let i = yield em(this.fetch, `${this.url}/object/upload/sign/${r}`, {}, {
                            headers: n
                        })
                          , s = new URL(this.url + i.url)
                          , o = s.searchParams.get("token");
                        if (!o)
                            throw new N("No token returned by API");
                        return {
                            data: {
                                signedUrl: s.toString(),
                                path: e,
                                token: o
                            },
                            error: null
                        }
                    } catch (e) {
                        if (U(e))
                            return {
                                data: null,
                                error: e
                            };
                        throw e
                    }
                })
            }
            update(e, t, r) {
                return eb(this, void 0, void 0, function*() {
                    return this.uploadOrUpdate("PUT", e, t, r)
                })
            }
            move(e, t, r) {
                return eb(this, void 0, void 0, function*() {
                    try {
                        return {
                            data: yield em(this.fetch, `${this.url}/object/move`, {
                                bucketId: this.bucketId,
                                sourceKey: e,
                                destinationKey: t,
                                destinationBucket: null == r ? void 0 : r.destinationBucket
                            }, {
                                headers: this.headers
                            }),
                            error: null
                        }
                    } catch (e) {
                        if (U(e))
                            return {
                                data: null,
                                error: e
                            };
                        throw e
                    }
                })
            }
            copy(e, t, r) {
                return eb(this, void 0, void 0, function*() {
                    try {
                        return {
                            data: {
                                path: (yield em(this.fetch, `${this.url}/object/copy`, {
                                    bucketId: this.bucketId,
                                    sourceKey: e,
                                    destinationKey: t,
                                    destinationBucket: null == r ? void 0 : r.destinationBucket
                                }, {
                                    headers: this.headers
                                })).Key
                            },
                            error: null
                        }
                    } catch (e) {
                        if (U(e))
                            return {
                                data: null,
                                error: e
                            };
                        throw e
                    }
                })
            }
            createSignedUrl(e, t, r) {
                return eb(this, void 0, void 0, function*() {
                    try {
                        let n = this._getFinalPath(e)
                          , i = yield em(this.fetch, `${this.url}/object/sign/${n}`, Object.assign({
                            expiresIn: t
                        }, (null == r ? void 0 : r.transform) ? {
                            transform: r.transform
                        } : {}), {
                            headers: this.headers
                        })
                          , s = (null == r ? void 0 : r.download) ? `&download=${!0 === r.download ? "" : r.download}` : "";
                        return {
                            data: i = {
                                signedUrl: encodeURI(`${this.url}${i.signedURL}${s}`)
                            },
                            error: null
                        }
                    } catch (e) {
                        if (U(e))
                            return {
                                data: null,
                                error: e
                            };
                        throw e
                    }
                })
            }
            createSignedUrls(e, t, r) {
                return eb(this, void 0, void 0, function*() {
                    try {
                        let n = yield em(this.fetch, `${this.url}/object/sign/${this.bucketId}`, {
                            expiresIn: t,
                            paths: e
                        }, {
                            headers: this.headers
                        })
                          , i = (null == r ? void 0 : r.download) ? `&download=${!0 === r.download ? "" : r.download}` : "";
                        return {
                            data: n.map(e => Object.assign(Object.assign({}, e), {
                                signedUrl: e.signedURL ? encodeURI(`${this.url}${e.signedURL}${i}`) : null
                            })),
                            error: null
                        }
                    } catch (e) {
                        if (U(e))
                            return {
                                data: null,
                                error: e
                            };
                        throw e
                    }
                })
            }
            download(e, t) {
                return eb(this, void 0, void 0, function*() {
                    let r = void 0 !== (null == t ? void 0 : t.transform)
                      , n = this.transformOptsToQueryString((null == t ? void 0 : t.transform) || {})
                      , i = n ? `?${n}` : "";
                    try {
                        let t = this._getFinalPath(e)
                          , n = yield eg(this.fetch, `${this.url}/${r ? "render/image/authenticated" : "object"}/${t}${i}`, {
                            headers: this.headers,
                            noResolveJson: !0
                        });
                        return {
                            data: yield n.blob(),
                            error: null
                        }
                    } catch (e) {
                        if (U(e))
                            return {
                                data: null,
                                error: e
                            };
                        throw e
                    }
                })
            }
            info(e) {
                return eb(this, void 0, void 0, function*() {
                    let t = this._getFinalPath(e);
                    try {
                        let e = yield eg(this.fetch, `${this.url}/object/info/${t}`, {
                            headers: this.headers
                        });
                        return {
                            data: F(e),
                            error: null
                        }
                    } catch (e) {
                        if (U(e))
                            return {
                                data: null,
                                error: e
                            };
                        throw e
                    }
                })
            }
            exists(e) {
                return eb(this, void 0, void 0, function*() {
                    let t = this._getFinalPath(e);
                    try {
                        return yield function(e, t, r, n) {
                            return ec(this, void 0, void 0, function*() {
                                return ep(e, "HEAD", t, Object.assign(Object.assign({}, r), {
                                    noResolveJson: !0
                                }), void 0)
                            })
                        }(this.fetch, `${this.url}/object/${t}`, {
                            headers: this.headers
                        }),
                        {
                            data: !0,
                            error: null
                        }
                    } catch (e) {
                        if (U(e) && e instanceof M) {
                            let t = e.originalError;
                            if ([400, 404].includes(null == t ? void 0 : t.status))
                                return {
                                    data: !1,
                                    error: e
                                }
                        }
                        throw e
                    }
                })
            }
            getPublicUrl(e, t) {
                let r = this._getFinalPath(e)
                  , n = []
                  , i = (null == t ? void 0 : t.download) ? `download=${!0 === t.download ? "" : t.download}` : "";
                "" !== i && n.push(i);
                let s = void 0 !== (null == t ? void 0 : t.transform)
                  , o = this.transformOptsToQueryString((null == t ? void 0 : t.transform) || {});
                "" !== o && n.push(o);
                let a = n.join("&");
                return "" !== a && (a = `?${a}`),
                {
                    data: {
                        publicUrl: encodeURI(`${this.url}/${s ? "render/image" : "object"}/public/${r}${a}`)
                    }
                }
            }
            remove(e) {
                return eb(this, void 0, void 0, function*() {
                    try {
                        return {
                            data: yield ey(this.fetch, `${this.url}/object/${this.bucketId}`, {
                                prefixes: e
                            }, {
                                headers: this.headers
                            }),
                            error: null
                        }
                    } catch (e) {
                        if (U(e))
                            return {
                                data: null,
                                error: e
                            };
                        throw e
                    }
                })
            }
            list(e, t, r) {
                return eb(this, void 0, void 0, function*() {
                    try {
                        let n = Object.assign(Object.assign(Object.assign({}, ew), t), {
                            prefix: e || ""
                        });
                        return {
                            data: yield em(this.fetch, `${this.url}/object/list/${this.bucketId}`, n, {
                                headers: this.headers
                            }, r),
                            error: null
                        }
                    } catch (e) {
                        if (U(e))
                            return {
                                data: null,
                                error: e
                            };
                        throw e
                    }
                })
            }
            encodeMetadata(e) {
                return JSON.stringify(e)
            }
            toBase64(e) {
                return void 0 !== ev ? ev.from(e).toString("base64") : btoa(e)
            }
            _getFinalPath(e) {
                return `${this.bucketId}/${e}`
            }
            _removeEmptyFolders(e) {
                return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/")
            }
            transformOptsToQueryString(e) {
                let t = [];
                return e.width && t.push(`width=${e.width}`),
                e.height && t.push(`height=${e.height}`),
                e.resize && t.push(`resize=${e.resize}`),
                e.format && t.push(`format=${e.format}`),
                e.quality && t.push(`quality=${e.quality}`),
                t.join("&")
            }
        }
        let eE = {
            "X-Client-Info": "storage-js/2.7.1"
        };
        var ex = function(e, t, r, n) {
            return new (r || (r = Promise))(function(i, s) {
                function o(e) {
                    try {
                        l(n.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function a(e) {
                    try {
                        l(n.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function l(e) {
                    var t;
                    e.done ? i(e.value) : ((t = e.value)instanceof r ? t : new r(function(e) {
                        e(t)
                    }
                    )).then(o, a)
                }
                l((n = n.apply(e, t || [])).next())
            }
            )
        };
        class eT {
            constructor(e, t={}, r) {
                this.url = e,
                this.headers = Object.assign(Object.assign({}, eE), t),
                this.fetch = B(r)
            }
            listBuckets() {
                return ex(this, void 0, void 0, function*() {
                    try {
                        return {
                            data: yield eg(this.fetch, `${this.url}/bucket`, {
                                headers: this.headers
                            }),
                            error: null
                        }
                    } catch (e) {
                        if (U(e))
                            return {
                                data: null,
                                error: e
                            };
                        throw e
                    }
                })
            }
            getBucket(e) {
                return ex(this, void 0, void 0, function*() {
                    try {
                        return {
                            data: yield eg(this.fetch, `${this.url}/bucket/${e}`, {
                                headers: this.headers
                            }),
                            error: null
                        }
                    } catch (e) {
                        if (U(e))
                            return {
                                data: null,
                                error: e
                            };
                        throw e
                    }
                })
            }
            createBucket(e, t={
                public: !1
            }) {
                return ex(this, void 0, void 0, function*() {
                    try {
                        return {
                            data: yield em(this.fetch, `${this.url}/bucket`, {
                                id: e,
                                name: e,
                                public: t.public,
                                file_size_limit: t.fileSizeLimit,
                                allowed_mime_types: t.allowedMimeTypes
                            }, {
                                headers: this.headers
                            }),
                            error: null
                        }
                    } catch (e) {
                        if (U(e))
                            return {
                                data: null,
                                error: e
                            };
                        throw e
                    }
                })
            }
            updateBucket(e, t) {
                return ex(this, void 0, void 0, function*() {
                    try {
                        return {
                            data: yield function(e, t, r, n, i) {
                                return ec(this, void 0, void 0, function*() {
                                    return ep(e, "PUT", t, n, void 0, r)
                                })
                            }(this.fetch, `${this.url}/bucket/${e}`, {
                                id: e,
                                name: e,
                                public: t.public,
                                file_size_limit: t.fileSizeLimit,
                                allowed_mime_types: t.allowedMimeTypes
                            }, {
                                headers: this.headers
                            }),
                            error: null
                        }
                    } catch (e) {
                        if (U(e))
                            return {
                                data: null,
                                error: e
                            };
                        throw e
                    }
                })
            }
            emptyBucket(e) {
                return ex(this, void 0, void 0, function*() {
                    try {
                        return {
                            data: yield em(this.fetch, `${this.url}/bucket/${e}/empty`, {}, {
                                headers: this.headers
                            }),
                            error: null
                        }
                    } catch (e) {
                        if (U(e))
                            return {
                                data: null,
                                error: e
                            };
                        throw e
                    }
                })
            }
            deleteBucket(e) {
                return ex(this, void 0, void 0, function*() {
                    try {
                        return {
                            data: yield ey(this.fetch, `${this.url}/bucket/${e}`, {}, {
                                headers: this.headers
                            }),
                            error: null
                        }
                    } catch (e) {
                        if (U(e))
                            return {
                                data: null,
                                error: e
                            };
                        throw e
                    }
                })
            }
        }
        class eS extends eT {
            constructor(e, t={}, r) {
                super(e, t, r)
            }
            from(e) {
                return new ek(this.url,this.headers,e,this.fetch)
            }
        }
        let ej = "";
        "undefined" != typeof Deno ? ej = "deno" : "undefined" != typeof document ? ej = "web" : "undefined" != typeof navigator && "ReactNative" === navigator.product ? ej = "react-native" : ej = "node";
        let eO = {
            headers: {
                "X-Client-Info": `supabase-js-${ej}/2.46.1`
            }
        }
          , eA = {
            schema: "public"
        }
          , eP = {
            autoRefreshToken: !0,
            persistSession: !0,
            detectSessionInUrl: !0,
            flowType: "implicit"
        }
          , eC = {};
        var eR = r(7018);
        let eI = e => {
            let t;
            return e ? t = e : "undefined" == typeof fetch ? t = eR.default : t = fetch,
            (...e) => t(...e)
        }
          , e$ = () => "undefined" == typeof Headers ? eR.Headers : Headers
          , eL = (e, t, r) => {
            let n = eI(r)
              , i = e$();
            return (r, s) => {
                var o, a, l, u;
                return o = void 0,
                a = void 0,
                l = void 0,
                u = function*() {
                    var o;
                    let a = null !== (o = yield t()) && void 0 !== o ? o : e
                      , l = new i(null == s ? void 0 : s.headers);
                    return l.has("apikey") || l.set("apikey", e),
                    l.has("Authorization") || l.set("Authorization", `Bearer ${a}`),
                    n(r, Object.assign(Object.assign({}, s), {
                        headers: l
                    }))
                }
                ,
                new (l || (l = Promise))(function(e, t) {
                    function r(e) {
                        try {
                            i(u.next(e))
                        } catch (e) {
                            t(e)
                        }
                    }
                    function n(e) {
                        try {
                            i(u.throw(e))
                        } catch (e) {
                            t(e)
                        }
                    }
                    function i(t) {
                        var i;
                        t.done ? e(t.value) : ((i = t.value)instanceof l ? i : new l(function(e) {
                            e(i)
                        }
                        )).then(r, n)
                    }
                    i((u = u.apply(o, a || [])).next())
                }
                )
            }
        }
          , eN = "2.65.1"
          , eU = {
            "X-Client-Info": `gotrue-js/${eN}`
        }
          , eD = "X-Supabase-Api-Version"
          , eM = {
            "2024-01-01": {
                timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
                name: "2024-01-01"
            }
        }
          , eB = () => "undefined" != typeof document
          , ez = {
            tested: !1,
            writable: !1
        }
          , eF = () => {
            if (!eB())
                return !1;
            try {
                if ("object" != typeof globalThis.localStorage)
                    return !1
            } catch (e) {
                return !1
            }
            if (ez.tested)
                return ez.writable;
            let e = `lswt-${Math.random()}${Math.random()}`;
            try {
                globalThis.localStorage.setItem(e, e),
                globalThis.localStorage.removeItem(e),
                ez.tested = !0,
                ez.writable = !0
            } catch (e) {
                ez.tested = !0,
                ez.writable = !1
            }
            return ez.writable
        }
        ;
        function eq(e) {
            let t = {}
              , r = new URL(e);
            if (r.hash && "#" === r.hash[0])
                try {
                    new URLSearchParams(r.hash.substring(1)).forEach( (e, r) => {
                        t[r] = e
                    }
                    )
                } catch (e) {}
            return r.searchParams.forEach( (e, r) => {
                t[r] = e
            }
            ),
            t
        }
        let eW = e => {
            let t;
            return e ? t = e : "undefined" == typeof fetch ? t = (...e) => Promise.resolve().then(r.bind(r, 7018)).then( ({default: t}) => t(...e)) : t = fetch,
            (...e) => t(...e)
        }
          , eJ = e => "object" == typeof e && null !== e && "status"in e && "ok"in e && "json"in e && "function" == typeof e.json
          , eK = async (e, t, r) => {
            await e.setItem(t, JSON.stringify(r))
        }
          , eG = async (e, t) => {
            let r = await e.getItem(t);
            if (!r)
                return null;
            try {
                return JSON.parse(r)
            } catch (e) {
                return r
            }
        }
          , eH = async (e, t) => {
            await e.removeItem(t)
        }
        ;
        class eV {
            constructor() {
                this.promise = new eV.promiseConstructor( (e, t) => {
                    this.resolve = e,
                    this.reject = t
                }
                )
            }
        }
        function eY(e) {
            let t = e.split(".");
            if (3 !== t.length)
                throw Error("JWT is not valid: not a JWT structure");
            if (!/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i.test(t[1]))
                throw Error("JWT is not valid: payload is not in base64url format");
            return JSON.parse(function(e) {
                let t, r, n, i, s, o, a;
                let l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                  , u = ""
                  , c = 0;
                for (e = e.replace("-", "+").replace("_", "/"); c < e.length; )
                    i = l.indexOf(e.charAt(c++)),
                    s = l.indexOf(e.charAt(c++)),
                    o = l.indexOf(e.charAt(c++)),
                    a = l.indexOf(e.charAt(c++)),
                    t = i << 2 | s >> 4,
                    r = (15 & s) << 4 | o >> 2,
                    n = (3 & o) << 6 | a,
                    u += String.fromCharCode(t),
                    64 != o && 0 != r && (u += String.fromCharCode(r)),
                    64 != a && 0 != n && (u += String.fromCharCode(n));
                return u
            }(t[1]))
        }
        async function eX(e) {
            return await new Promise(t => {
                setTimeout( () => t(null), e)
            }
            )
        }
        function eQ(e) {
            return ("0" + e.toString(16)).substr(-2)
        }
        async function eZ(e) {
            let t = new TextEncoder().encode(e);
            return Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256", t))).map(e => String.fromCharCode(e)).join("")
        }
        async function e0(e) {
            return "undefined" != typeof crypto && void 0 !== crypto.subtle && "undefined" != typeof TextEncoder ? btoa(await eZ(e)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "") : (console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),
            e)
        }
        async function e1(e, t, r=!1) {
            let n = function() {
                let e = new Uint32Array(56);
                if ("undefined" == typeof crypto) {
                    let e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~"
                      , t = e.length
                      , r = "";
                    for (let n = 0; n < 56; n++)
                        r += e.charAt(Math.floor(Math.random() * t));
                    return r
                }
                return crypto.getRandomValues(e),
                Array.from(e, eQ).join("")
            }()
              , i = n;
            r && (i += "/PASSWORD_RECOVERY"),
            await eK(e, `${t}-code-verifier`, i);
            let s = await e0(n)
              , o = n === s ? "plain" : "s256";
            return [s, o]
        }
        eV.promiseConstructor = Promise;
        let e2 = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
        class e6 extends Error {
            constructor(e, t, r) {
                super(e),
                this.__isAuthError = !0,
                this.name = "AuthError",
                this.status = t,
                this.code = r
            }
        }
        function e8(e) {
            return "object" == typeof e && null !== e && "__isAuthError"in e
        }
        class e5 extends e6 {
            constructor(e, t, r) {
                super(e, t, r),
                this.name = "AuthApiError",
                this.status = t,
                this.code = r
            }
        }
        class e3 extends e6 {
            constructor(e, t) {
                super(e),
                this.name = "AuthUnknownError",
                this.originalError = t
            }
        }
        class e4 extends e6 {
            constructor(e, t, r, n) {
                super(e, r, n),
                this.name = t,
                this.status = r
            }
        }
        class e7 extends e4 {
            constructor() {
                super("Auth session missing!", "AuthSessionMissingError", 400, void 0)
            }
        }
        class e9 extends e4 {
            constructor() {
                super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0)
            }
        }
        class te extends e4 {
            constructor(e) {
                super(e, "AuthInvalidCredentialsError", 400, void 0)
            }
        }
        class tt extends e4 {
            constructor(e, t=null) {
                super(e, "AuthImplicitGrantRedirectError", 500, void 0),
                this.details = null,
                this.details = t
            }
            toJSON() {
                return {
                    name: this.name,
                    message: this.message,
                    status: this.status,
                    details: this.details
                }
            }
        }
        class tr extends e4 {
            constructor(e, t=null) {
                super(e, "AuthPKCEGrantCodeExchangeError", 500, void 0),
                this.details = null,
                this.details = t
            }
            toJSON() {
                return {
                    name: this.name,
                    message: this.message,
                    status: this.status,
                    details: this.details
                }
            }
        }
        class tn extends e4 {
            constructor(e, t) {
                super(e, "AuthRetryableFetchError", t, void 0)
            }
        }
        function ti(e) {
            return e8(e) && "AuthRetryableFetchError" === e.name
        }
        class ts extends e4 {
            constructor(e, t, r) {
                super(e, "AuthWeakPasswordError", t, "weak_password"),
                this.reasons = r
            }
        }
        var to = function(e, t) {
            var r = {};
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                    0 > t.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
            return r
        };
        let ta = e => e.msg || e.message || e.error_description || e.error || JSON.stringify(e)
          , tl = [502, 503, 504];
        async function tu(e) {
            var t;
            let r, n;
            if (!eJ(e))
                throw new tn(ta(e),0);
            if (tl.includes(e.status))
                throw new tn(ta(e),e.status);
            try {
                r = await e.json()
            } catch (e) {
                throw new e3(ta(e),e)
            }
            let i = function(e) {
                let t = e.headers.get(eD);
                if (!t || !t.match(e2))
                    return null;
                try {
                    return new Date(`${t}T00:00:00.0Z`)
                } catch (e) {
                    return null
                }
            }(e);
            if (i && i.getTime() >= eM["2024-01-01"].timestamp && "object" == typeof r && r && "string" == typeof r.code ? n = r.code : "object" == typeof r && r && "string" == typeof r.error_code && (n = r.error_code),
            n) {
                if ("weak_password" === n)
                    throw new ts(ta(r),e.status,(null === (t = r.weak_password) || void 0 === t ? void 0 : t.reasons) || []);
                if ("session_not_found" === n)
                    throw new e7
            } else if ("object" == typeof r && r && "object" == typeof r.weak_password && r.weak_password && Array.isArray(r.weak_password.reasons) && r.weak_password.reasons.length && r.weak_password.reasons.reduce( (e, t) => e && "string" == typeof t, !0))
                throw new ts(ta(r),e.status,r.weak_password.reasons);
            throw new e5(ta(r),e.status || 500,n)
        }
        let tc = (e, t, r, n) => {
            let i = {
                method: e,
                headers: (null == t ? void 0 : t.headers) || {}
            };
            return "GET" === e ? i : (i.headers = Object.assign({
                "Content-Type": "application/json;charset=UTF-8"
            }, null == t ? void 0 : t.headers),
            i.body = JSON.stringify(n),
            Object.assign(Object.assign({}, i), r))
        }
        ;
        async function th(e, t, r, n) {
            var i;
            let s = Object.assign({}, null == n ? void 0 : n.headers);
            s[eD] || (s[eD] = eM["2024-01-01"].name),
            (null == n ? void 0 : n.jwt) && (s.Authorization = `Bearer ${n.jwt}`);
            let o = null !== (i = null == n ? void 0 : n.query) && void 0 !== i ? i : {};
            (null == n ? void 0 : n.redirectTo) && (o.redirect_to = n.redirectTo);
            let a = Object.keys(o).length ? "?" + new URLSearchParams(o).toString() : ""
              , l = await td(e, t, r + a, {
                headers: s,
                noResolveJson: null == n ? void 0 : n.noResolveJson
            }, {}, null == n ? void 0 : n.body);
            return (null == n ? void 0 : n.xform) ? null == n ? void 0 : n.xform(l) : {
                data: Object.assign({}, l),
                error: null
            }
        }
        async function td(e, t, r, n, i, s) {
            let o;
            let a = tc(t, n, i, s);
            try {
                o = await e(r, Object.assign({}, a))
            } catch (e) {
                throw console.error(e),
                new tn(ta(e),0)
            }
            if (o.ok || await tu(o),
            null == n ? void 0 : n.noResolveJson)
                return o;
            try {
                return await o.json()
            } catch (e) {
                await tu(e)
            }
        }
        function tf(e) {
            var t, r;
            let n = null;
            return e.access_token && e.refresh_token && e.expires_in && (n = Object.assign({}, e),
            !e.expires_at) && (n.expires_at = (r = e.expires_in,
            Math.round(Date.now() / 1e3) + r)),
            {
                data: {
                    session: n,
                    user: null !== (t = e.user) && void 0 !== t ? t : e
                },
                error: null
            }
        }
        function tp(e) {
            let t = tf(e);
            return !t.error && e.weak_password && "object" == typeof e.weak_password && Array.isArray(e.weak_password.reasons) && e.weak_password.reasons.length && e.weak_password.message && "string" == typeof e.weak_password.message && e.weak_password.reasons.reduce( (e, t) => e && "string" == typeof t, !0) && (t.data.weak_password = e.weak_password),
            t
        }
        function tg(e) {
            var t;
            return {
                data: {
                    user: null !== (t = e.user) && void 0 !== t ? t : e
                },
                error: null
            }
        }
        function tm(e) {
            return {
                data: e,
                error: null
            }
        }
        function ty(e) {
            let {action_link: t, email_otp: r, hashed_token: n, redirect_to: i, verification_type: s} = e;
            return {
                data: {
                    properties: {
                        action_link: t,
                        email_otp: r,
                        hashed_token: n,
                        redirect_to: i,
                        verification_type: s
                    },
                    user: Object.assign({}, to(e, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]))
                },
                error: null
            }
        }
        function tv(e) {
            return e
        }
        var tb = function(e, t) {
            var r = {};
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                    0 > t.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
            return r
        };
        class tw {
            constructor({url: e="", headers: t={}, fetch: r}) {
                this.url = e,
                this.headers = t,
                this.fetch = eW(r),
                this.mfa = {
                    listFactors: this._listFactors.bind(this),
                    deleteFactor: this._deleteFactor.bind(this)
                }
            }
            async signOut(e, t="global") {
                try {
                    return await th(this.fetch, "POST", `${this.url}/logout?scope=${t}`, {
                        headers: this.headers,
                        jwt: e,
                        noResolveJson: !0
                    }),
                    {
                        data: null,
                        error: null
                    }
                } catch (e) {
                    if (e8(e))
                        return {
                            data: null,
                            error: e
                        };
                    throw e
                }
            }
            async inviteUserByEmail(e, t={}) {
                try {
                    return await th(this.fetch, "POST", `${this.url}/invite`, {
                        body: {
                            email: e,
                            data: t.data
                        },
                        headers: this.headers,
                        redirectTo: t.redirectTo,
                        xform: tg
                    })
                } catch (e) {
                    if (e8(e))
                        return {
                            data: {
                                user: null
                            },
                            error: e
                        };
                    throw e
                }
            }
            async generateLink(e) {
                try {
                    let {options: t} = e
                      , r = tb(e, ["options"])
                      , n = Object.assign(Object.assign({}, r), t);
                    return "newEmail"in r && (n.new_email = null == r ? void 0 : r.newEmail,
                    delete n.newEmail),
                    await th(this.fetch, "POST", `${this.url}/admin/generate_link`, {
                        body: n,
                        headers: this.headers,
                        xform: ty,
                        redirectTo: null == t ? void 0 : t.redirectTo
                    })
                } catch (e) {
                    if (e8(e))
                        return {
                            data: {
                                properties: null,
                                user: null
                            },
                            error: e
                        };
                    throw e
                }
            }
            async createUser(e) {
                try {
                    return await th(this.fetch, "POST", `${this.url}/admin/users`, {
                        body: e,
                        headers: this.headers,
                        xform: tg
                    })
                } catch (e) {
                    if (e8(e))
                        return {
                            data: {
                                user: null
                            },
                            error: e
                        };
                    throw e
                }
            }
            async listUsers(e) {
                var t, r, n, i, s, o, a;
                try {
                    let l = {
                        nextPage: null,
                        lastPage: 0,
                        total: 0
                    }
                      , u = await th(this.fetch, "GET", `${this.url}/admin/users`, {
                        headers: this.headers,
                        noResolveJson: !0,
                        query: {
                            page: null !== (r = null === (t = null == e ? void 0 : e.page) || void 0 === t ? void 0 : t.toString()) && void 0 !== r ? r : "",
                            per_page: null !== (i = null === (n = null == e ? void 0 : e.perPage) || void 0 === n ? void 0 : n.toString()) && void 0 !== i ? i : ""
                        },
                        xform: tv
                    });
                    if (u.error)
                        throw u.error;
                    let c = await u.json()
                      , h = null !== (s = u.headers.get("x-total-count")) && void 0 !== s ? s : 0
                      , d = null !== (a = null === (o = u.headers.get("link")) || void 0 === o ? void 0 : o.split(",")) && void 0 !== a ? a : [];
                    return d.length > 0 && (d.forEach(e => {
                        let t = parseInt(e.split(";")[0].split("=")[1].substring(0, 1))
                          , r = JSON.parse(e.split(";")[1].split("=")[1]);
                        l[`${r}Page`] = t
                    }
                    ),
                    l.total = parseInt(h)),
                    {
                        data: Object.assign(Object.assign({}, c), l),
                        error: null
                    }
                } catch (e) {
                    if (e8(e))
                        return {
                            data: {
                                users: []
                            },
                            error: e
                        };
                    throw e
                }
            }
            async getUserById(e) {
                try {
                    return await th(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
                        headers: this.headers,
                        xform: tg
                    })
                } catch (e) {
                    if (e8(e))
                        return {
                            data: {
                                user: null
                            },
                            error: e
                        };
                    throw e
                }
            }
            async updateUserById(e, t) {
                try {
                    return await th(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
                        body: t,
                        headers: this.headers,
                        xform: tg
                    })
                } catch (e) {
                    if (e8(e))
                        return {
                            data: {
                                user: null
                            },
                            error: e
                        };
                    throw e
                }
            }
            async deleteUser(e, t=!1) {
                try {
                    return await th(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
                        headers: this.headers,
                        body: {
                            should_soft_delete: t
                        },
                        xform: tg
                    })
                } catch (e) {
                    if (e8(e))
                        return {
                            data: {
                                user: null
                            },
                            error: e
                        };
                    throw e
                }
            }
            async _listFactors(e) {
                try {
                    let {data: t, error: r} = await th(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/factors`, {
                        headers: this.headers,
                        xform: e => ({
                            data: {
                                factors: e
                            },
                            error: null
                        })
                    });
                    return {
                        data: t,
                        error: r
                    }
                } catch (e) {
                    if (e8(e))
                        return {
                            data: null,
                            error: e
                        };
                    throw e
                }
            }
            async _deleteFactor(e) {
                try {
                    return {
                        data: await th(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/factors/${e.id}`, {
                            headers: this.headers
                        }),
                        error: null
                    }
                } catch (e) {
                    if (e8(e))
                        return {
                            data: null,
                            error: e
                        };
                    throw e
                }
            }
        }
        let t_ = {
            getItem: e => eF() ? globalThis.localStorage.getItem(e) : null,
            setItem: (e, t) => {
                eF() && globalThis.localStorage.setItem(e, t)
            }
            ,
            removeItem: e => {
                eF() && globalThis.localStorage.removeItem(e)
            }
        };
        function tk(e={}) {
            return {
                getItem: t => e[t] || null,
                setItem: (t, r) => {
                    e[t] = r
                }
                ,
                removeItem: t => {
                    delete e[t]
                }
            }
        }
        let tE = {
            debug: !!(globalThis && eF() && globalThis.localStorage && "true" === globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug"))
        };
        class tx extends Error {
            constructor(e) {
                super(e),
                this.isAcquireTimeout = !0
            }
        }
        class tT extends tx {
        }
        async function tS(e, t, r) {
            tE.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", e, t);
            let n = new globalThis.AbortController;
            return t > 0 && setTimeout( () => {
                n.abort(),
                tE.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", e)
            }
            , t),
            await globalThis.navigator.locks.request(e, 0 === t ? {
                mode: "exclusive",
                ifAvailable: !0
            } : {
                mode: "exclusive",
                signal: n.signal
            }, async n => {
                if (n) {
                    tE.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", e, n.name);
                    try {
                        return await r()
                    } finally {
                        tE.debug && console.log("@supabase/gotrue-js: navigatorLock: released", e, n.name)
                    }
                } else {
                    if (0 === t)
                        throw tE.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", e),
                        new tT(`Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`);
                    if (tE.debug)
                        try {
                            let e = await globalThis.navigator.locks.query();
                            console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(e, null, "  "))
                        } catch (e) {
                            console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", e)
                        }
                    return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),
                    await r()
                }
            }
            )
        }
        !function() {
            if ("object" != typeof globalThis)
                try {
                    Object.defineProperty(Object.prototype, "__magic__", {
                        get: function() {
                            return this
                        },
                        configurable: !0
                    }),
                    __magic__.globalThis = __magic__,
                    delete Object.prototype.__magic__
                } catch (e) {
                    "undefined" != typeof self && (self.globalThis = self)
                }
        }();
        let tj = {
            url: "http://localhost:9999",
            storageKey: "supabase.auth.token",
            autoRefreshToken: !0,
            persistSession: !0,
            detectSessionInUrl: !0,
            headers: eU,
            flowType: "implicit",
            debug: !1,
            hasCustomAuthorizationHeader: !1
        };
        async function tO(e, t, r) {
            return await r()
        }
        class tA {
            constructor(e) {
                var t, r;
                this.memoryStorage = null,
                this.stateChangeEmitters = new Map,
                this.autoRefreshTicker = null,
                this.visibilityChangedCallback = null,
                this.refreshingDeferred = null,
                this.initializePromise = null,
                this.detectSessionInUrl = !0,
                this.hasCustomAuthorizationHeader = !1,
                this.suppressGetSessionWarning = !1,
                this.lockAcquired = !1,
                this.pendingInLock = [],
                this.broadcastChannel = null,
                this.logger = console.log,
                this.instanceID = tA.nextInstanceID,
                tA.nextInstanceID += 1,
                this.instanceID > 0 && eB() && console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");
                let n = Object.assign(Object.assign({}, tj), e);
                if (this.logDebugMessages = !!n.debug,
                "function" == typeof n.debug && (this.logger = n.debug),
                this.persistSession = n.persistSession,
                this.storageKey = n.storageKey,
                this.autoRefreshToken = n.autoRefreshToken,
                this.admin = new tw({
                    url: n.url,
                    headers: n.headers,
                    fetch: n.fetch
                }),
                this.url = n.url,
                this.headers = n.headers,
                this.fetch = eW(n.fetch),
                this.lock = n.lock || tO,
                this.detectSessionInUrl = n.detectSessionInUrl,
                this.flowType = n.flowType,
                this.hasCustomAuthorizationHeader = n.hasCustomAuthorizationHeader,
                n.lock ? this.lock = n.lock : eB() && (null === (t = null == globalThis ? void 0 : globalThis.navigator) || void 0 === t ? void 0 : t.locks) ? this.lock = tS : this.lock = tO,
                this.mfa = {
                    verify: this._verify.bind(this),
                    enroll: this._enroll.bind(this),
                    unenroll: this._unenroll.bind(this),
                    challenge: this._challenge.bind(this),
                    listFactors: this._listFactors.bind(this),
                    challengeAndVerify: this._challengeAndVerify.bind(this),
                    getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this)
                },
                this.persistSession ? n.storage ? this.storage = n.storage : eF() ? this.storage = t_ : (this.memoryStorage = {},
                this.storage = tk(this.memoryStorage)) : (this.memoryStorage = {},
                this.storage = tk(this.memoryStorage)),
                eB() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
                    try {
                        this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey)
                    } catch (e) {
                        console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", e)
                    }
                    null === (r = this.broadcastChannel) || void 0 === r || r.addEventListener("message", async e => {
                        this._debug("received broadcast notification from other tab or client", e),
                        await this._notifyAllSubscribers(e.data.event, e.data.session, !1)
                    }
                    )
                }
                this.initialize()
            }
            _debug(...e) {
                return this.logDebugMessages && this.logger(`GoTrueClient@${this.instanceID} (${eN}) ${new Date().toISOString()}`, ...e),
                this
            }
            async initialize() {
                return this.initializePromise || (this.initializePromise = (async () => await this._acquireLock(-1, async () => await this._initialize()))()),
                await this.initializePromise
            }
            async _initialize() {
                try {
                    let e = !!eB() && await this._isPKCEFlow();
                    if (this._debug("#_initialize()", "begin", "is PKCE flow", e),
                    e || this.detectSessionInUrl && this._isImplicitGrantFlow()) {
                        let {data: t, error: r} = await this._getSessionFromURL(e);
                        if (r) {
                            if (this._debug("#_initialize()", "error detecting session from URL", r),
                            (null == r ? void 0 : r.code) === "identity_already_exists")
                                return {
                                    error: r
                                };
                            return await this._removeSession(),
                            {
                                error: r
                            }
                        }
                        let {session: n, redirectType: i} = t;
                        return this._debug("#_initialize()", "detected session in URL", n, "redirect type", i),
                        await this._saveSession(n),
                        setTimeout(async () => {
                            "recovery" === i ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", n) : await this._notifyAllSubscribers("SIGNED_IN", n)
                        }
                        , 0),
                        {
                            error: null
                        }
                    }
                    return await this._recoverAndRefresh(),
                    {
                        error: null
                    }
                } catch (e) {
                    if (e8(e))
                        return {
                            error: e
                        };
                    return {
                        error: new e3("Unexpected error during initialization",e)
                    }
                } finally {
                    await this._handleVisibilityChange(),
                    this._debug("#_initialize()", "end")
                }
            }
            async signInAnonymously(e) {
                var t, r, n;
                try {
                    let {data: i, error: s} = await th(this.fetch, "POST", `${this.url}/signup`, {
                        headers: this.headers,
                        body: {
                            data: null !== (r = null === (t = null == e ? void 0 : e.options) || void 0 === t ? void 0 : t.data) && void 0 !== r ? r : {},
                            gotrue_meta_security: {
                                captcha_token: null === (n = null == e ? void 0 : e.options) || void 0 === n ? void 0 : n.captchaToken
                            }
                        },
                        xform: tf
                    });
                    if (s || !i)
                        return {
                            data: {
                                user: null,
                                session: null
                            },
                            error: s
                        };
                    let o = i.session
                      , a = i.user;
                    return i.session && (await this._saveSession(i.session),
                    await this._notifyAllSubscribers("SIGNED_IN", o)),
                    {
                        data: {
                            user: a,
                            session: o
                        },
                        error: null
                    }
                } catch (e) {
                    if (e8(e))
                        return {
                            data: {
                                user: null,
                                session: null
                            },
                            error: e
                        };
                    throw e
                }
            }
            async signUp(e) {
                var t, r, n;
                try {
                    let i;
                    if ("email"in e) {
                        let {email: r, password: n, options: s} = e
                          , o = null
                          , a = null;
                        "pkce" === this.flowType && ([o,a] = await e1(this.storage, this.storageKey)),
                        i = await th(this.fetch, "POST", `${this.url}/signup`, {
                            headers: this.headers,
                            redirectTo: null == s ? void 0 : s.emailRedirectTo,
                            body: {
                                email: r,
                                password: n,
                                data: null !== (t = null == s ? void 0 : s.data) && void 0 !== t ? t : {},
                                gotrue_meta_security: {
                                    captcha_token: null == s ? void 0 : s.captchaToken
                                },
                                code_challenge: o,
                                code_challenge_method: a
                            },
                            xform: tf
                        })
                    } else if ("phone"in e) {
                        let {phone: t, password: s, options: o} = e;
                        i = await th(this.fetch, "POST", `${this.url}/signup`, {
                            headers: this.headers,
                            body: {
                                phone: t,
                                password: s,
                                data: null !== (r = null == o ? void 0 : o.data) && void 0 !== r ? r : {},
                                channel: null !== (n = null == o ? void 0 : o.channel) && void 0 !== n ? n : "sms",
                                gotrue_meta_security: {
                                    captcha_token: null == o ? void 0 : o.captchaToken
                                }
                            },
                            xform: tf
                        })
                    } else
                        throw new te("You must provide either an email or phone number and a password");
                    let {data: s, error: o} = i;
                    if (o || !s)
                        return {
                            data: {
                                user: null,
                                session: null
                            },
                            error: o
                        };
                    let a = s.session
                      , l = s.user;
                    return s.session && (await this._saveSession(s.session),
                    await this._notifyAllSubscribers("SIGNED_IN", a)),
                    {
                        data: {
                            user: l,
                            session: a
                        },
                        error: null
                    }
                } catch (e) {
                    if (e8(e))
                        return {
                            data: {
                                user: null,
                                session: null
                            },
                            error: e
                        };
                    throw e
                }
            }
            async signInWithPassword(e) {
                try {
                    let t;
                    if ("email"in e) {
                        let {email: r, password: n, options: i} = e;
                        t = await th(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                            headers: this.headers,
                            body: {
                                email: r,
                                password: n,
                                gotrue_meta_security: {
                                    captcha_token: null == i ? void 0 : i.captchaToken
                                }
                            },
                            xform: tp
                        })
                    } else if ("phone"in e) {
                        let {phone: r, password: n, options: i} = e;
                        t = await th(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                            headers: this.headers,
                            body: {
                                phone: r,
                                password: n,
                                gotrue_meta_security: {
                                    captcha_token: null == i ? void 0 : i.captchaToken
                                }
                            },
                            xform: tp
                        })
                    } else
                        throw new te("You must provide either an email or phone number and a password");
                    let {data: r, error: n} = t;
                    if (n)
                        return {
                            data: {
                                user: null,
                                session: null
                            },
                            error: n
                        };
                    if (!r || !r.session || !r.user)
                        return {
                            data: {
                                user: null,
                                session: null
                            },
                            error: new e9
                        };
                    return r.session && (await this._saveSession(r.session),
                    await this._notifyAllSubscribers("SIGNED_IN", r.session)),
                    {
                        data: Object.assign({
                            user: r.user,
                            session: r.session
                        }, r.weak_password ? {
                            weakPassword: r.weak_password
                        } : null),
                        error: n
                    }
                } catch (e) {
                    if (e8(e))
                        return {
                            data: {
                                user: null,
                                session: null
                            },
                            error: e
                        };
                    throw e
                }
            }
            async signInWithOAuth(e) {
                var t, r, n, i;
                return await this._handleProviderSignIn(e.provider, {
                    redirectTo: null === (t = e.options) || void 0 === t ? void 0 : t.redirectTo,
                    scopes: null === (r = e.options) || void 0 === r ? void 0 : r.scopes,
                    queryParams: null === (n = e.options) || void 0 === n ? void 0 : n.queryParams,
                    skipBrowserRedirect: null === (i = e.options) || void 0 === i ? void 0 : i.skipBrowserRedirect
                })
            }
            async exchangeCodeForSession(e) {
                return await this.initializePromise,
                this._acquireLock(-1, async () => this._exchangeCodeForSession(e))
            }
            async _exchangeCodeForSession(e) {
                let t = await eG(this.storage, `${this.storageKey}-code-verifier`)
                  , [r,n] = (null != t ? t : "").split("/");
                try {
                    let {data: t, error: i} = await th(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
                        headers: this.headers,
                        body: {
                            auth_code: e,
                            code_verifier: r
                        },
                        xform: tf
                    });
                    if (await eH(this.storage, `${this.storageKey}-code-verifier`),
                    i)
                        throw i;
                    if (!t || !t.session || !t.user)
                        return {
                            data: {
                                user: null,
                                session: null,
                                redirectType: null
                            },
                            error: new e9
                        };
                    return t.session && (await this._saveSession(t.session),
                    await this._notifyAllSubscribers("SIGNED_IN", t.session)),
                    {
                        data: Object.assign(Object.assign({}, t), {
                            redirectType: null != n ? n : null
                        }),
                        error: i
                    }
                } catch (e) {
                    if (e8(e))
                        return {
                            data: {
                                user: null,
                                session: null,
                                redirectType: null
                            },
                            error: e
                        };
                    throw e
                }
            }
            async signInWithIdToken(e) {
                try {
                    let {options: t, provider: r, token: n, access_token: i, nonce: s} = e
                      , {data: o, error: a} = await th(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
                        headers: this.headers,
                        body: {
                            provider: r,
                            id_token: n,
                            access_token: i,
                            nonce: s,
                            gotrue_meta_security: {
                                captcha_token: null == t ? void 0 : t.captchaToken
                            }
                        },
                        xform: tf
                    });
                    if (a)
                        return {
                            data: {
                                user: null,
                                session: null
                            },
                            error: a
                        };
                    if (!o || !o.session || !o.user)
                        return {
                            data: {
                                user: null,
                                session: null
                            },
                            error: new e9
                        };
                    return o.session && (await this._saveSession(o.session),
                    await this._notifyAllSubscribers("SIGNED_IN", o.session)),
                    {
                        data: o,
                        error: a
                    }
                } catch (e) {
                    if (e8(e))
                        return {
                            data: {
                                user: null,
                                session: null
                            },
                            error: e
                        };
                    throw e
                }
            }
            async signInWithOtp(e) {
                var t, r, n, i, s;
                try {
                    if ("email"in e) {
                        let {email: n, options: i} = e
                          , s = null
                          , o = null;
                        "pkce" === this.flowType && ([s,o] = await e1(this.storage, this.storageKey));
                        let {error: a} = await th(this.fetch, "POST", `${this.url}/otp`, {
                            headers: this.headers,
                            body: {
                                email: n,
                                data: null !== (t = null == i ? void 0 : i.data) && void 0 !== t ? t : {},
                                create_user: null === (r = null == i ? void 0 : i.shouldCreateUser) || void 0 === r || r,
                                gotrue_meta_security: {
                                    captcha_token: null == i ? void 0 : i.captchaToken
                                },
                                code_challenge: s,
                                code_challenge_method: o
                            },
                            redirectTo: null == i ? void 0 : i.emailRedirectTo
                        });
                        return {
                            data: {
                                user: null,
                                session: null
                            },
                            error: a
                        }
                    }
                    if ("phone"in e) {
                        let {phone: t, options: r} = e
                          , {data: o, error: a} = await th(this.fetch, "POST", `${this.url}/otp`, {
                            headers: this.headers,
                            body: {
                                phone: t,
                                data: null !== (n = null == r ? void 0 : r.data) && void 0 !== n ? n : {},
                                create_user: null === (i = null == r ? void 0 : r.shouldCreateUser) || void 0 === i || i,
                                gotrue_meta_security: {
                                    captcha_token: null == r ? void 0 : r.captchaToken
                                },
                                channel: null !== (s = null == r ? void 0 : r.channel) && void 0 !== s ? s : "sms"
                            }
                        });
                        return {
                            data: {
                                user: null,
                                session: null,
                                messageId: null == o ? void 0 : o.message_id
                            },
                            error: a
                        }
                    }
                    throw new te("You must provide either an email or phone number.")
                } catch (e) {
                    if (e8(e))
                        return {
                            data: {
                                user: null,
                                session: null
                            },
                            error: e
                        };
                    throw e
                }
            }
            async verifyOtp(e) {
                var t, r;
                try {
                    let n, i;
                    "options"in e && (n = null === (t = e.options) || void 0 === t ? void 0 : t.redirectTo,
                    i = null === (r = e.options) || void 0 === r ? void 0 : r.captchaToken);
                    let {data: s, error: o} = await th(this.fetch, "POST", `${this.url}/verify`, {
                        headers: this.headers,
                        body: Object.assign(Object.assign({}, e), {
                            gotrue_meta_security: {
                                captcha_token: i
                            }
                        }),
                        redirectTo: n,
                        xform: tf
                    });
                    if (o)
                        throw o;
                    if (!s)
                        throw Error("An error occurred on token verification.");
                    let a = s.session
                      , l = s.user;
                    return (null == a ? void 0 : a.access_token) && (await this._saveSession(a),
                    await this._notifyAllSubscribers("recovery" == e.type ? "PASSWORD_RECOVERY" : "SIGNED_IN", a)),
                    {
                        data: {
                            user: l,
                            session: a
                        },
                        error: null
                    }
                } catch (e) {
                    if (e8(e))
                        return {
                            data: {
                                user: null,
                                session: null
                            },
                            error: e
                        };
                    throw e
                }
            }
            async signInWithSSO(e) {
                var t, r, n;
                try {
                    let i = null
                      , s = null;
                    return "pkce" === this.flowType && ([i,s] = await e1(this.storage, this.storageKey)),
                    await th(this.fetch, "POST", `${this.url}/sso`, {
                        body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId"in e ? {
                            provider_id: e.providerId
                        } : null), "domain"in e ? {
                            domain: e.domain
                        } : null), {
                            redirect_to: null !== (r = null === (t = e.options) || void 0 === t ? void 0 : t.redirectTo) && void 0 !== r ? r : void 0
                        }), (null === (n = null == e ? void 0 : e.options) || void 0 === n ? void 0 : n.captchaToken) ? {
                            gotrue_meta_security: {
                                captcha_token: e.options.captchaToken
                            }
                        } : null), {
                            skip_http_redirect: !0,
                            code_challenge: i,
                            code_challenge_method: s
                        }),
                        headers: this.headers,
                        xform: tm
                    })
                } catch (e) {
                    if (e8(e))
                        return {
                            data: null,
                            error: e
                        };
                    throw e
                }
            }
            async reauthenticate() {
                return await this.initializePromise,
                await this._acquireLock(-1, async () => await this._reauthenticate())
            }
            async _reauthenticate() {
                try {
                    return await this._useSession(async e => {
                        let {data: {session: t}, error: r} = e;
                        if (r)
                            throw r;
                        if (!t)
                            throw new e7;
                        let {error: n} = await th(this.fetch, "GET", `${this.url}/reauthenticate`, {
                            headers: this.headers,
                            jwt: t.access_token
                        });
                        return {
                            data: {
                                user: null,
                                session: null
                            },
                            error: n
                        }
                    }
                    )
                } catch (e) {
                    if (e8(e))
                        return {
                            data: {
                                user: null,
                                session: null
                            },
                            error: e
                        };
                    throw e
                }
            }
            async resend(e) {
                try {
                    let t = `${this.url}/resend`;
                    if ("email"in e) {
                        let {email: r, type: n, options: i} = e
                          , {error: s} = await th(this.fetch, "POST", t, {
                            headers: this.headers,
                            body: {
                                email: r,
                                type: n,
                                gotrue_meta_security: {
                                    captcha_token: null == i ? void 0 : i.captchaToken
                                }
                            },
                            redirectTo: null == i ? void 0 : i.emailRedirectTo
                        });
                        return {
                            data: {
                                user: null,
                                session: null
                            },
                            error: s
                        }
                    }
                    if ("phone"in e) {
                        let {phone: r, type: n, options: i} = e
                          , {data: s, error: o} = await th(this.fetch, "POST", t, {
                            headers: this.headers,
                            body: {
                                phone: r,
                                type: n,
                                gotrue_meta_security: {
                                    captcha_token: null == i ? void 0 : i.captchaToken
                                }
                            }
                        });
                        return {
                            data: {
                                user: null,
                                session: null,
                                messageId: null == s ? void 0 : s.message_id
                            },
                            error: o
                        }
                    }
                    throw new te("You must provide either an email or phone number and a type")
                } catch (e) {
                    if (e8(e))
                        return {
                            data: {
                                user: null,
                                session: null
                            },
                            error: e
                        };
                    throw e
                }
            }
            async getSession() {
                return await this.initializePromise,
                await this._acquireLock(-1, async () => this._useSession(async e => e))
            }
            async _acquireLock(e, t) {
                this._debug("#_acquireLock", "begin", e);
                try {
                    if (this.lockAcquired) {
                        let e = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve()
                          , r = (async () => (await e,
                        await t()))();
                        return this.pendingInLock.push((async () => {
                            try {
                                await r
                            } catch (e) {}
                        }
                        )()),
                        r
                    }
                    return await this.lock(`lock:${this.storageKey}`, e, async () => {
                        this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
                        try {
                            this.lockAcquired = !0;
                            let e = t();
                            for (this.pendingInLock.push((async () => {
                                try {
                                    await e
                                } catch (e) {}
                            }
                            )()),
                            await e; this.pendingInLock.length; ) {
                                let e = [...this.pendingInLock];
                                await Promise.all(e),
                                this.pendingInLock.splice(0, e.length)
                            }
                            return await e
                        } finally {
                            this._debug("#_acquireLock", "lock released for storage key", this.storageKey),
                            this.lockAcquired = !1
                        }
                    }
                    )
                } finally {
                    this._debug("#_acquireLock", "end")
                }
            }
            async _useSession(e) {
                this._debug("#_useSession", "begin");
                try {
                    let t = await this.__loadSession();
                    return await e(t)
                } finally {
                    this._debug("#_useSession", "end")
                }
            }
            async __loadSession() {
                this._debug("#__loadSession()", "begin"),
                this.lockAcquired || this._debug("#__loadSession()", "used outside of an acquired lock!", Error().stack);
                try {
                    let e = null
                      , t = await eG(this.storage, this.storageKey);
                    if (this._debug("#getSession()", "session from storage", t),
                    null !== t && (this._isValidSession(t) ? e = t : (this._debug("#getSession()", "session from storage is not valid"),
                    await this._removeSession())),
                    !e)
                        return {
                            data: {
                                session: null
                            },
                            error: null
                        };
                    let r = !!e.expires_at && e.expires_at <= Date.now() / 1e3;
                    if (this._debug("#__loadSession()", `session has${r ? "" : " not"} expired`, "expires_at", e.expires_at),
                    !r) {
                        if (this.storage.isServer) {
                            let t = this.suppressGetSessionWarning;
                            e = new Proxy(e,{
                                get: (e, r, n) => (t || "user" !== r || (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and many not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),
                                t = !0,
                                this.suppressGetSessionWarning = !0),
                                Reflect.get(e, r, n))
                            })
                        }
                        return {
                            data: {
                                session: e
                            },
                            error: null
                        }
                    }
                    let {session: n, error: i} = await this._callRefreshToken(e.refresh_token);
                    if (i)
                        return {
                            data: {
                                session: null
                            },
                            error: i
                        };
                    return {
                        data: {
                            session: n
                        },
                        error: null
                    }
                } finally {
                    this._debug("#__loadSession()", "end")
                }
            }
            async getUser(e) {
                return e ? await this._getUser(e) : (await this.initializePromise,
                await this._acquireLock(-1, async () => await this._getUser()))
            }
            async _getUser(e) {
                try {
                    if (e)
                        return await th(this.fetch, "GET", `${this.url}/user`, {
                            headers: this.headers,
                            jwt: e,
                            xform: tg
                        });
                    return await this._useSession(async e => {
                        var t, r, n;
                        let {data: i, error: s} = e;
                        if (s)
                            throw s;
                        return (null === (t = i.session) || void 0 === t ? void 0 : t.access_token) || this.hasCustomAuthorizationHeader ? await th(this.fetch, "GET", `${this.url}/user`, {
                            headers: this.headers,
                            jwt: null !== (n = null === (r = i.session) || void 0 === r ? void 0 : r.access_token) && void 0 !== n ? n : void 0,
                            xform: tg
                        }) : {
                            data: {
                                user: null
                            },
                            error: new e7
                        }
                    }
                    )
                } catch (e) {
                    if (e8(e))
                        return e8(e) && "AuthSessionMissingError" === e.name && (await this._removeSession(),
                        await eH(this.storage, `${this.storageKey}-code-verifier`)),
                        {
                            data: {
                                user: null
                            },
                            error: e
                        };
                    throw e
                }
            }
            async updateUser(e, t={}) {
                return await this.initializePromise,
                await this._acquireLock(-1, async () => await this._updateUser(e, t))
            }
            async _updateUser(e, t={}) {
                try {
                    return await this._useSession(async r => {
                        let {data: n, error: i} = r;
                        if (i)
                            throw i;
                        if (!n.session)
                            throw new e7;
                        let s = n.session
                          , o = null
                          , a = null;
                        "pkce" === this.flowType && null != e.email && ([o,a] = await e1(this.storage, this.storageKey));
                        let {data: l, error: u} = await th(this.fetch, "PUT", `${this.url}/user`, {
                            headers: this.headers,
                            redirectTo: null == t ? void 0 : t.emailRedirectTo,
                            body: Object.assign(Object.assign({}, e), {
                                code_challenge: o,
                                code_challenge_method: a
                            }),
                            jwt: s.access_token,
                            xform: tg
                        });
                        if (u)
                            throw u;
                        return s.user = l.user,
                        await this._saveSession(s),
                        await this._notifyAllSubscribers("USER_UPDATED", s),
                        {
                            data: {
                                user: s.user
                            },
                            error: null
                        }
                    }
                    )
                } catch (e) {
                    if (e8(e))
                        return {
                            data: {
                                user: null
                            },
                            error: e
                        };
                    throw e
                }
            }
            _decodeJWT(e) {
                return eY(e)
            }
            async setSession(e) {
                return await this.initializePromise,
                await this._acquireLock(-1, async () => await this._setSession(e))
            }
            async _setSession(e) {
                try {
                    if (!e.access_token || !e.refresh_token)
                        throw new e7;
                    let t = Date.now() / 1e3
                      , r = t
                      , n = !0
                      , i = null
                      , s = eY(e.access_token);
                    if (s.exp && (n = (r = s.exp) <= t),
                    n) {
                        let {session: t, error: r} = await this._callRefreshToken(e.refresh_token);
                        if (r)
                            return {
                                data: {
                                    user: null,
                                    session: null
                                },
                                error: r
                            };
                        if (!t)
                            return {
                                data: {
                                    user: null,
                                    session: null
                                },
                                error: null
                            };
                        i = t
                    } else {
                        let {data: n, error: s} = await this._getUser(e.access_token);
                        if (s)
                            throw s;
                        i = {
                            access_token: e.access_token,
                            refresh_token: e.refresh_token,
                            user: n.user,
                            token_type: "bearer",
                            expires_in: r - t,
                            expires_at: r
                        },
                        await this._saveSession(i),
                        await this._notifyAllSubscribers("SIGNED_IN", i)
                    }
                    return {
                        data: {
                            user: i.user,
                            session: i
                        },
                        error: null
                    }
                } catch (e) {
                    if (e8(e))
                        return {
                            data: {
                                session: null,
                                user: null
                            },
                            error: e
                        };
                    throw e
                }
            }
            async refreshSession(e) {
                return await this.initializePromise,
                await this._acquireLock(-1, async () => await this._refreshSession(e))
            }
            async _refreshSession(e) {
                try {
                    return await this._useSession(async t => {
                        var r;
                        if (!e) {
                            let {data: n, error: i} = t;
                            if (i)
                                throw i;
                            e = null !== (r = n.session) && void 0 !== r ? r : void 0
                        }
                        if (!(null == e ? void 0 : e.refresh_token))
                            throw new e7;
                        let {session: n, error: i} = await this._callRefreshToken(e.refresh_token);
                        return i ? {
                            data: {
                                user: null,
                                session: null
                            },
                            error: i
                        } : n ? {
                            data: {
                                user: n.user,
                                session: n
                            },
                            error: null
                        } : {
                            data: {
                                user: null,
                                session: null
                            },
                            error: null
                        }
                    }
                    )
                } catch (e) {
                    if (e8(e))
                        return {
                            data: {
                                user: null,
                                session: null
                            },
                            error: e
                        };
                    throw e
                }
            }
            async _getSessionFromURL(e) {
                try {
                    if (!eB())
                        throw new tt("No browser detected.");
                    if ("implicit" !== this.flowType || this._isImplicitGrantFlow()) {
                        if ("pkce" == this.flowType && !e)
                            throw new tr("Not a valid PKCE flow url.")
                    } else
                        throw new tt("Not a valid implicit grant flow url.");
                    let t = eq(window.location.href);
                    if (e) {
                        if (!t.code)
                            throw new tr("No code detected.");
                        let {data: e, error: r} = await this._exchangeCodeForSession(t.code);
                        if (r)
                            throw r;
                        let n = new URL(window.location.href);
                        return n.searchParams.delete("code"),
                        window.history.replaceState(window.history.state, "", n.toString()),
                        {
                            data: {
                                session: e.session,
                                redirectType: null
                            },
                            error: null
                        }
                    }
                    if (t.error || t.error_description || t.error_code)
                        throw new tt(t.error_description || "Error in URL with unspecified error_description",{
                            error: t.error || "unspecified_error",
                            code: t.error_code || "unspecified_code"
                        });
                    let {provider_token: r, provider_refresh_token: n, access_token: i, refresh_token: s, expires_in: o, expires_at: a, token_type: l} = t;
                    if (!i || !o || !s || !l)
                        throw new tt("No session defined in URL");
                    let u = Math.round(Date.now() / 1e3)
                      , c = parseInt(o)
                      , h = u + c;
                    a && (h = parseInt(a));
                    let d = h - u;
                    1e3 * d <= 3e4 && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${d}s, should have been closer to ${c}s`);
                    let f = h - c;
                    u - f >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", f, h, u) : u - f < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", f, h, u);
                    let {data: p, error: g} = await this._getUser(i);
                    if (g)
                        throw g;
                    let m = {
                        provider_token: r,
                        provider_refresh_token: n,
                        access_token: i,
                        expires_in: c,
                        expires_at: h,
                        refresh_token: s,
                        token_type: l,
                        user: p.user
                    };
                    return window.location.hash = "",
                    this._debug("#_getSessionFromURL()", "clearing window.location.hash"),
                    {
                        data: {
                            session: m,
                            redirectType: t.type
                        },
                        error: null
                    }
                } catch (e) {
                    if (e8(e))
                        return {
                            data: {
                                session: null,
                                redirectType: null
                            },
                            error: e
                        };
                    throw e
                }
            }
            _isImplicitGrantFlow() {
                let e = eq(window.location.href);
                return !!(eB() && (e.access_token || e.error_description))
            }
            async _isPKCEFlow() {
                let e = eq(window.location.href)
                  , t = await eG(this.storage, `${this.storageKey}-code-verifier`);
                return !!(e.code && t)
            }
            async signOut(e={
                scope: "global"
            }) {
                return await this.initializePromise,
                await this._acquireLock(-1, async () => await this._signOut(e))
            }
            async _signOut({scope: e}={
                scope: "global"
            }) {
                return await this._useSession(async t => {
                    var r;
                    let {data: n, error: i} = t;
                    if (i)
                        return {
                            error: i
                        };
                    let s = null === (r = n.session) || void 0 === r ? void 0 : r.access_token;
                    if (s) {
                        let {error: t} = await this.admin.signOut(s, e);
                        if (t && !(e8(t) && "AuthApiError" === t.name && (404 === t.status || 401 === t.status || 403 === t.status)))
                            return {
                                error: t
                            }
                    }
                    return "others" !== e && (await this._removeSession(),
                    await eH(this.storage, `${this.storageKey}-code-verifier`)),
                    {
                        error: null
                    }
                }
                )
            }
            onAuthStateChange(e) {
                let t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                    let t = 16 * Math.random() | 0;
                    return ("x" == e ? t : 3 & t | 8).toString(16)
                })
                  , r = {
                    id: t,
                    callback: e,
                    unsubscribe: () => {
                        this._debug("#unsubscribe()", "state change callback with id removed", t),
                        this.stateChangeEmitters.delete(t)
                    }
                };
                return this._debug("#onAuthStateChange()", "registered callback with id", t),
                this.stateChangeEmitters.set(t, r),
                (async () => {
                    await this.initializePromise,
                    await this._acquireLock(-1, async () => {
                        this._emitInitialSession(t)
                    }
                    )
                }
                )(),
                {
                    data: {
                        subscription: r
                    }
                }
            }
            async _emitInitialSession(e) {
                return await this._useSession(async t => {
                    var r, n;
                    try {
                        let {data: {session: n}, error: i} = t;
                        if (i)
                            throw i;
                        await (null === (r = this.stateChangeEmitters.get(e)) || void 0 === r ? void 0 : r.callback("INITIAL_SESSION", n)),
                        this._debug("INITIAL_SESSION", "callback id", e, "session", n)
                    } catch (t) {
                        await (null === (n = this.stateChangeEmitters.get(e)) || void 0 === n ? void 0 : n.callback("INITIAL_SESSION", null)),
                        this._debug("INITIAL_SESSION", "callback id", e, "error", t),
                        console.error(t)
                    }
                }
                )
            }
            async resetPasswordForEmail(e, t={}) {
                let r = null
                  , n = null;
                "pkce" === this.flowType && ([r,n] = await e1(this.storage, this.storageKey, !0));
                try {
                    return await th(this.fetch, "POST", `${this.url}/recover`, {
                        body: {
                            email: e,
                            code_challenge: r,
                            code_challenge_method: n,
                            gotrue_meta_security: {
                                captcha_token: t.captchaToken
                            }
                        },
                        headers: this.headers,
                        redirectTo: t.redirectTo
                    })
                } catch (e) {
                    if (e8(e))
                        return {
                            data: null,
                            error: e
                        };
                    throw e
                }
            }
            async getUserIdentities() {
                var e;
                try {
                    let {data: t, error: r} = await this.getUser();
                    if (r)
                        throw r;
                    return {
                        data: {
                            identities: null !== (e = t.user.identities) && void 0 !== e ? e : []
                        },
                        error: null
                    }
                } catch (e) {
                    if (e8(e))
                        return {
                            data: null,
                            error: e
                        };
                    throw e
                }
            }
            async linkIdentity(e) {
                var t;
                try {
                    let {data: r, error: n} = await this._useSession(async t => {
                        var r, n, i, s, o;
                        let {data: a, error: l} = t;
                        if (l)
                            throw l;
                        let u = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, e.provider, {
                            redirectTo: null === (r = e.options) || void 0 === r ? void 0 : r.redirectTo,
                            scopes: null === (n = e.options) || void 0 === n ? void 0 : n.scopes,
                            queryParams: null === (i = e.options) || void 0 === i ? void 0 : i.queryParams,
                            skipBrowserRedirect: !0
                        });
                        return await th(this.fetch, "GET", u, {
                            headers: this.headers,
                            jwt: null !== (o = null === (s = a.session) || void 0 === s ? void 0 : s.access_token) && void 0 !== o ? o : void 0
                        })
                    }
                    );
                    if (n)
                        throw n;
                    return !eB() || (null === (t = e.options) || void 0 === t ? void 0 : t.skipBrowserRedirect) || window.location.assign(null == r ? void 0 : r.url),
                    {
                        data: {
                            provider: e.provider,
                            url: null == r ? void 0 : r.url
                        },
                        error: null
                    }
                } catch (t) {
                    if (e8(t))
                        return {
                            data: {
                                provider: e.provider,
                                url: null
                            },
                            error: t
                        };
                    throw t
                }
            }
            async unlinkIdentity(e) {
                try {
                    return await this._useSession(async t => {
                        var r, n;
                        let {data: i, error: s} = t;
                        if (s)
                            throw s;
                        return await th(this.fetch, "DELETE", `${this.url}/user/identities/${e.identity_id}`, {
                            headers: this.headers,
                            jwt: null !== (n = null === (r = i.session) || void 0 === r ? void 0 : r.access_token) && void 0 !== n ? n : void 0
                        })
                    }
                    )
                } catch (e) {
                    if (e8(e))
                        return {
                            data: null,
                            error: e
                        };
                    throw e
                }
            }
            async _refreshAccessToken(e) {
                let t = `#_refreshAccessToken(${e.substring(0, 5)}...)`;
                this._debug(t, "begin");
                try {
                    var r, n;
                    let i = Date.now();
                    return await (r = async r => (r > 0 && await eX(200 * Math.pow(2, r - 1)),
                    this._debug(t, "refreshing attempt", r),
                    await th(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
                        body: {
                            refresh_token: e
                        },
                        headers: this.headers,
                        xform: tf
                    })),
                    n = (e, t) => t && ti(t) && Date.now() + 200 * Math.pow(2, e) - i < 3e4,
                    new Promise( (e, t) => {
                        (async () => {
                            for (let i = 0; i < 1 / 0; i++)
                                try {
                                    let t = await r(i);
                                    if (!n(i, null, t)) {
                                        e(t);
                                        return
                                    }
                                } catch (e) {
                                    if (!n(i, e)) {
                                        t(e);
                                        return
                                    }
                                }
                        }
                        )()
                    }
                    ))
                } catch (e) {
                    if (this._debug(t, "error", e),
                    e8(e))
                        return {
                            data: {
                                session: null,
                                user: null
                            },
                            error: e
                        };
                    throw e
                } finally {
                    this._debug(t, "end")
                }
            }
            _isValidSession(e) {
                return "object" == typeof e && null !== e && "access_token"in e && "refresh_token"in e && "expires_at"in e
            }
            async _handleProviderSignIn(e, t) {
                let r = await this._getUrlForProvider(`${this.url}/authorize`, e, {
                    redirectTo: t.redirectTo,
                    scopes: t.scopes,
                    queryParams: t.queryParams
                });
                return this._debug("#_handleProviderSignIn()", "provider", e, "options", t, "url", r),
                eB() && !t.skipBrowserRedirect && window.location.assign(r),
                {
                    data: {
                        provider: e,
                        url: r
                    },
                    error: null
                }
            }
            async _recoverAndRefresh() {
                var e;
                let t = "#_recoverAndRefresh()";
                this._debug(t, "begin");
                try {
                    let r = await eG(this.storage, this.storageKey);
                    if (this._debug(t, "session from storage", r),
                    !this._isValidSession(r)) {
                        this._debug(t, "session is not valid"),
                        null !== r && await this._removeSession();
                        return
                    }
                    let n = Math.round(Date.now() / 1e3)
                      , i = (null !== (e = r.expires_at) && void 0 !== e ? e : 1 / 0) < n + 10;
                    if (this._debug(t, `session has${i ? "" : " not"} expired with margin of 10s`),
                    i) {
                        if (this.autoRefreshToken && r.refresh_token) {
                            let {error: e} = await this._callRefreshToken(r.refresh_token);
                            e && (console.error(e),
                            ti(e) || (this._debug(t, "refresh failed with a non-retryable error, removing the session", e),
                            await this._removeSession()))
                        }
                    } else
                        await this._notifyAllSubscribers("SIGNED_IN", r)
                } catch (e) {
                    this._debug(t, "error", e),
                    console.error(e);
                    return
                } finally {
                    this._debug(t, "end")
                }
            }
            async _callRefreshToken(e) {
                var t, r;
                if (!e)
                    throw new e7;
                if (this.refreshingDeferred)
                    return this.refreshingDeferred.promise;
                let n = `#_callRefreshToken(${e.substring(0, 5)}...)`;
                this._debug(n, "begin");
                try {
                    this.refreshingDeferred = new eV;
                    let {data: t, error: r} = await this._refreshAccessToken(e);
                    if (r)
                        throw r;
                    if (!t.session)
                        throw new e7;
                    await this._saveSession(t.session),
                    await this._notifyAllSubscribers("TOKEN_REFRESHED", t.session);
                    let n = {
                        session: t.session,
                        error: null
                    };
                    return this.refreshingDeferred.resolve(n),
                    n
                } catch (e) {
                    if (this._debug(n, "error", e),
                    e8(e)) {
                        let r = {
                            session: null,
                            error: e
                        };
                        return ti(e) || await this._removeSession(),
                        null === (t = this.refreshingDeferred) || void 0 === t || t.resolve(r),
                        r
                    }
                    throw null === (r = this.refreshingDeferred) || void 0 === r || r.reject(e),
                    e
                } finally {
                    this.refreshingDeferred = null,
                    this._debug(n, "end")
                }
            }
            async _notifyAllSubscribers(e, t, r=!0) {
                let n = `#_notifyAllSubscribers(${e})`;
                this._debug(n, "begin", t, `broadcast = ${r}`);
                try {
                    this.broadcastChannel && r && this.broadcastChannel.postMessage({
                        event: e,
                        session: t
                    });
                    let n = []
                      , i = Array.from(this.stateChangeEmitters.values()).map(async r => {
                        try {
                            await r.callback(e, t)
                        } catch (e) {
                            n.push(e)
                        }
                    }
                    );
                    if (await Promise.all(i),
                    n.length > 0) {
                        for (let e = 0; e < n.length; e += 1)
                            console.error(n[e]);
                        throw n[0]
                    }
                } finally {
                    this._debug(n, "end")
                }
            }
            async _saveSession(e) {
                this._debug("#_saveSession()", e),
                this.suppressGetSessionWarning = !0,
                await eK(this.storage, this.storageKey, e)
            }
            async _removeSession() {
                this._debug("#_removeSession()"),
                await eH(this.storage, this.storageKey),
                await this._notifyAllSubscribers("SIGNED_OUT", null)
            }
            _removeVisibilityChangedCallback() {
                this._debug("#_removeVisibilityChangedCallback()");
                let e = this.visibilityChangedCallback;
                this.visibilityChangedCallback = null;
                try {
                    e && eB() && (null == window ? void 0 : window.removeEventListener) && window.removeEventListener("visibilitychange", e)
                } catch (e) {
                    console.error("removing visibilitychange callback failed", e)
                }
            }
            async _startAutoRefresh() {
                await this._stopAutoRefresh(),
                this._debug("#_startAutoRefresh()");
                let e = setInterval( () => this._autoRefreshTokenTick(), 3e4);
                this.autoRefreshTicker = e,
                e && "object" == typeof e && "function" == typeof e.unref ? e.unref() : "undefined" != typeof Deno && "function" == typeof Deno.unrefTimer && Deno.unrefTimer(e),
                setTimeout(async () => {
                    await this.initializePromise,
                    await this._autoRefreshTokenTick()
                }
                , 0)
            }
            async _stopAutoRefresh() {
                this._debug("#_stopAutoRefresh()");
                let e = this.autoRefreshTicker;
                this.autoRefreshTicker = null,
                e && clearInterval(e)
            }
            async startAutoRefresh() {
                this._removeVisibilityChangedCallback(),
                await this._startAutoRefresh()
            }
            async stopAutoRefresh() {
                this._removeVisibilityChangedCallback(),
                await this._stopAutoRefresh()
            }
            async _autoRefreshTokenTick() {
                this._debug("#_autoRefreshTokenTick()", "begin");
                try {
                    await this._acquireLock(0, async () => {
                        try {
                            let e = Date.now();
                            try {
                                return await this._useSession(async t => {
                                    let {data: {session: r}} = t;
                                    if (!r || !r.refresh_token || !r.expires_at) {
                                        this._debug("#_autoRefreshTokenTick()", "no session");
                                        return
                                    }
                                    let n = Math.floor((1e3 * r.expires_at - e) / 3e4);
                                    this._debug("#_autoRefreshTokenTick()", `access token expires in ${n} ticks, a tick lasts 30000ms, refresh threshold is 3 ticks`),
                                    n <= 3 && await this._callRefreshToken(r.refresh_token)
                                }
                                )
                            } catch (e) {
                                console.error("Auto refresh tick failed with error. This is likely a transient error.", e)
                            }
                        } finally {
                            this._debug("#_autoRefreshTokenTick()", "end")
                        }
                    }
                    )
                } catch (e) {
                    if (e.isAcquireTimeout || e instanceof tx)
                        this._debug("auto refresh token tick lock not available");
                    else
                        throw e
                }
            }
            async _handleVisibilityChange() {
                if (this._debug("#_handleVisibilityChange()"),
                !eB() || !(null == window ? void 0 : window.addEventListener))
                    return this.autoRefreshToken && this.startAutoRefresh(),
                    !1;
                try {
                    this.visibilityChangedCallback = async () => await this._onVisibilityChanged(!1),
                    null == window || window.addEventListener("visibilitychange", this.visibilityChangedCallback),
                    await this._onVisibilityChanged(!0)
                } catch (e) {
                    console.error("_handleVisibilityChange", e)
                }
            }
            async _onVisibilityChanged(e) {
                let t = `#_onVisibilityChanged(${e})`;
                this._debug(t, "visibilityState", document.visibilityState),
                "visible" === document.visibilityState ? (this.autoRefreshToken && this._startAutoRefresh(),
                e || (await this.initializePromise,
                await this._acquireLock(-1, async () => {
                    if ("visible" !== document.visibilityState) {
                        this._debug(t, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
                        return
                    }
                    await this._recoverAndRefresh()
                }
                ))) : "hidden" === document.visibilityState && this.autoRefreshToken && this._stopAutoRefresh()
            }
            async _getUrlForProvider(e, t, r) {
                let n = [`provider=${encodeURIComponent(t)}`];
                if ((null == r ? void 0 : r.redirectTo) && n.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`),
                (null == r ? void 0 : r.scopes) && n.push(`scopes=${encodeURIComponent(r.scopes)}`),
                "pkce" === this.flowType) {
                    let[e,t] = await e1(this.storage, this.storageKey)
                      , r = new URLSearchParams({
                        code_challenge: `${encodeURIComponent(e)}`,
                        code_challenge_method: `${encodeURIComponent(t)}`
                    });
                    n.push(r.toString())
                }
                if (null == r ? void 0 : r.queryParams) {
                    let e = new URLSearchParams(r.queryParams);
                    n.push(e.toString())
                }
                return (null == r ? void 0 : r.skipBrowserRedirect) && n.push(`skip_http_redirect=${r.skipBrowserRedirect}`),
                `${e}?${n.join("&")}`
            }
            async _unenroll(e) {
                try {
                    return await this._useSession(async t => {
                        var r;
                        let {data: n, error: i} = t;
                        return i ? {
                            data: null,
                            error: i
                        } : await th(this.fetch, "DELETE", `${this.url}/factors/${e.factorId}`, {
                            headers: this.headers,
                            jwt: null === (r = null == n ? void 0 : n.session) || void 0 === r ? void 0 : r.access_token
                        })
                    }
                    )
                } catch (e) {
                    if (e8(e))
                        return {
                            data: null,
                            error: e
                        };
                    throw e
                }
            }
            async _enroll(e) {
                try {
                    return await this._useSession(async t => {
                        var r, n;
                        let {data: i, error: s} = t;
                        if (s)
                            return {
                                data: null,
                                error: s
                            };
                        let o = Object.assign({
                            friendly_name: e.friendlyName,
                            factor_type: e.factorType
                        }, "phone" === e.factorType ? {
                            phone: e.phone
                        } : {
                            issuer: e.issuer
                        })
                          , {data: a, error: l} = await th(this.fetch, "POST", `${this.url}/factors`, {
                            body: o,
                            headers: this.headers,
                            jwt: null === (r = null == i ? void 0 : i.session) || void 0 === r ? void 0 : r.access_token
                        });
                        return l ? {
                            data: null,
                            error: l
                        } : ("totp" === e.factorType && (null === (n = null == a ? void 0 : a.totp) || void 0 === n ? void 0 : n.qr_code) && (a.totp.qr_code = `data:image/svg+xml;utf-8,${a.totp.qr_code}`),
                        {
                            data: a,
                            error: null
                        })
                    }
                    )
                } catch (e) {
                    if (e8(e))
                        return {
                            data: null,
                            error: e
                        };
                    throw e
                }
            }
            async _verify(e) {
                return this._acquireLock(-1, async () => {
                    try {
                        return await this._useSession(async t => {
                            var r;
                            let {data: n, error: i} = t;
                            if (i)
                                return {
                                    data: null,
                                    error: i
                                };
                            let {data: s, error: o} = await th(this.fetch, "POST", `${this.url}/factors/${e.factorId}/verify`, {
                                body: {
                                    code: e.code,
                                    challenge_id: e.challengeId
                                },
                                headers: this.headers,
                                jwt: null === (r = null == n ? void 0 : n.session) || void 0 === r ? void 0 : r.access_token
                            });
                            return o ? {
                                data: null,
                                error: o
                            } : (await this._saveSession(Object.assign({
                                expires_at: Math.round(Date.now() / 1e3) + s.expires_in
                            }, s)),
                            await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", s),
                            {
                                data: s,
                                error: o
                            })
                        }
                        )
                    } catch (e) {
                        if (e8(e))
                            return {
                                data: null,
                                error: e
                            };
                        throw e
                    }
                }
                )
            }
            async _challenge(e) {
                return this._acquireLock(-1, async () => {
                    try {
                        return await this._useSession(async t => {
                            var r;
                            let {data: n, error: i} = t;
                            return i ? {
                                data: null,
                                error: i
                            } : await th(this.fetch, "POST", `${this.url}/factors/${e.factorId}/challenge`, {
                                body: {
                                    channel: e.channel
                                },
                                headers: this.headers,
                                jwt: null === (r = null == n ? void 0 : n.session) || void 0 === r ? void 0 : r.access_token
                            })
                        }
                        )
                    } catch (e) {
                        if (e8(e))
                            return {
                                data: null,
                                error: e
                            };
                        throw e
                    }
                }
                )
            }
            async _challengeAndVerify(e) {
                let {data: t, error: r} = await this._challenge({
                    factorId: e.factorId
                });
                return r ? {
                    data: null,
                    error: r
                } : await this._verify({
                    factorId: e.factorId,
                    challengeId: t.id,
                    code: e.code
                })
            }
            async _listFactors() {
                let {data: {user: e}, error: t} = await this.getUser();
                if (t)
                    return {
                        data: null,
                        error: t
                    };
                let r = (null == e ? void 0 : e.factors) || []
                  , n = r.filter(e => "totp" === e.factor_type && "verified" === e.status)
                  , i = r.filter(e => "phone" === e.factor_type && "verified" === e.status);
                return {
                    data: {
                        all: r,
                        totp: n,
                        phone: i
                    },
                    error: null
                }
            }
            async _getAuthenticatorAssuranceLevel() {
                return this._acquireLock(-1, async () => await this._useSession(async e => {
                    var t, r;
                    let {data: {session: n}, error: i} = e;
                    if (i)
                        return {
                            data: null,
                            error: i
                        };
                    if (!n)
                        return {
                            data: {
                                currentLevel: null,
                                nextLevel: null,
                                currentAuthenticationMethods: []
                            },
                            error: null
                        };
                    let s = this._decodeJWT(n.access_token)
                      , o = null;
                    s.aal && (o = s.aal);
                    let a = o;
                    return (null !== (r = null === (t = n.user.factors) || void 0 === t ? void 0 : t.filter(e => "verified" === e.status)) && void 0 !== r ? r : []).length > 0 && (a = "aal2"),
                    {
                        data: {
                            currentLevel: o,
                            nextLevel: a,
                            currentAuthenticationMethods: s.amr || []
                        },
                        error: null
                    }
                }
                ))
            }
        }
        tA.nextInstanceID = 0;
        var tP = tA;
        class tC extends tP {
            constructor(e) {
                super(e)
            }
        }
        class tR {
            constructor(e, t, r) {
                var n, i, s;
                if (this.supabaseUrl = e,
                this.supabaseKey = t,
                !e)
                    throw Error("supabaseUrl is required.");
                if (!t)
                    throw Error("supabaseKey is required.");
                let o = e.replace(/\/$/, "");
                this.realtimeUrl = `${o}/realtime/v1`.replace(/^http/i, "ws"),
                this.authUrl = `${o}/auth/v1`,
                this.storageUrl = `${o}/storage/v1`,
                this.functionsUrl = `${o}/functions/v1`;
                let a = `sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`
                  , l = function(e, t) {
                    let {db: r, auth: n, realtime: i, global: s} = e
                      , {db: o, auth: a, realtime: l, global: u} = t
                      , c = {
                        db: Object.assign(Object.assign({}, o), r),
                        auth: Object.assign(Object.assign({}, a), n),
                        realtime: Object.assign(Object.assign({}, l), i),
                        global: Object.assign(Object.assign({}, u), s),
                        accessToken: () => {
                            var e, t, r, n;
                            return e = this,
                            t = void 0,
                            n = function*() {
                                return ""
                            }
                            ,
                            new (r = void 0,
                            r = Promise)(function(i, s) {
                                function o(e) {
                                    try {
                                        l(n.next(e))
                                    } catch (e) {
                                        s(e)
                                    }
                                }
                                function a(e) {
                                    try {
                                        l(n.throw(e))
                                    } catch (e) {
                                        s(e)
                                    }
                                }
                                function l(e) {
                                    var t;
                                    e.done ? i(e.value) : ((t = e.value)instanceof r ? t : new r(function(e) {
                                        e(t)
                                    }
                                    )).then(o, a)
                                }
                                l((n = n.apply(e, t || [])).next())
                            }
                            )
                        }
                    };
                    return e.accessToken ? c.accessToken = e.accessToken : delete c.accessToken,
                    c
                }(null != r ? r : {}, {
                    db: eA,
                    realtime: eC,
                    auth: Object.assign(Object.assign({}, eP), {
                        storageKey: a
                    }),
                    global: eO
                });
                this.storageKey = null !== (n = l.auth.storageKey) && void 0 !== n ? n : "",
                this.headers = null !== (i = l.global.headers) && void 0 !== i ? i : {},
                l.accessToken ? (this.accessToken = l.accessToken,
                this.auth = new Proxy({},{
                    get: (e, t) => {
                        throw Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(t)} is not possible`)
                    }
                })) : this.auth = this._initSupabaseAuthClient(null !== (s = l.auth) && void 0 !== s ? s : {}, this.headers, l.global.fetch),
                this.fetch = eL(t, this._getAccessToken.bind(this), l.global.fetch),
                this.realtime = this._initRealtimeClient(Object.assign({
                    headers: this.headers
                }, l.realtime)),
                this.rest = new c(`${o}/rest/v1`,{
                    headers: this.headers,
                    schema: l.db.schema,
                    fetch: this.fetch
                }),
                l.accessToken || this._listenForAuthEvents()
            }
            get functions() {
                return new u(this.functionsUrl,{
                    headers: this.headers,
                    customFetch: this.fetch
                })
            }
            get storage() {
                return new eS(this.storageUrl,this.headers,this.fetch)
            }
            from(e) {
                return this.rest.from(e)
            }
            schema(e) {
                return this.rest.schema(e)
            }
            rpc(e, t={}, r={}) {
                return this.rest.rpc(e, t, r)
            }
            channel(e, t={
                config: {}
            }) {
                return this.realtime.channel(e, t)
            }
            getChannels() {
                return this.realtime.getChannels()
            }
            removeChannel(e) {
                return this.realtime.removeChannel(e)
            }
            removeAllChannels() {
                return this.realtime.removeAllChannels()
            }
            _getAccessToken() {
                var e, t, r, n, i, s;
                return r = this,
                n = void 0,
                i = void 0,
                s = function*() {
                    if (this.accessToken)
                        return yield this.accessToken();
                    let {data: r} = yield this.auth.getSession();
                    return null !== (t = null === (e = r.session) || void 0 === e ? void 0 : e.access_token) && void 0 !== t ? t : null
                }
                ,
                new (i || (i = Promise))(function(e, t) {
                    function o(e) {
                        try {
                            l(s.next(e))
                        } catch (e) {
                            t(e)
                        }
                    }
                    function a(e) {
                        try {
                            l(s.throw(e))
                        } catch (e) {
                            t(e)
                        }
                    }
                    function l(t) {
                        var r;
                        t.done ? e(t.value) : ((r = t.value)instanceof i ? r : new i(function(e) {
                            e(r)
                        }
                        )).then(o, a)
                    }
                    l((s = s.apply(r, n || [])).next())
                }
                )
            }
            _initSupabaseAuthClient({autoRefreshToken: e, persistSession: t, detectSessionInUrl: r, storage: n, storageKey: i, flowType: s, lock: o, debug: a}, l, u) {
                var c;
                let h = {
                    Authorization: `Bearer ${this.supabaseKey}`,
                    apikey: `${this.supabaseKey}`
                };
                return new tC({
                    url: this.authUrl,
                    headers: Object.assign(Object.assign({}, h), l),
                    storageKey: i,
                    autoRefreshToken: e,
                    persistSession: t,
                    detectSessionInUrl: r,
                    storage: n,
                    flowType: s,
                    lock: o,
                    debug: a,
                    fetch: u,
                    hasCustomAuthorizationHeader: "Authorization"in this.headers
                })
            }
            _initRealtimeClient(e) {
                return new $(this.realtimeUrl,Object.assign(Object.assign({}, e), {
                    params: Object.assign({
                        apikey: this.supabaseKey
                    }, null == e ? void 0 : e.params)
                }))
            }
            _listenForAuthEvents() {
                return this.auth.onAuthStateChange( (e, t) => {
                    this._handleTokenChanged(e, "CLIENT", null == t ? void 0 : t.access_token)
                }
                )
            }
            _handleTokenChanged(e, t, r) {
                ("TOKEN_REFRESHED" === e || "SIGNED_IN" === e) && this.changedAccessToken !== r ? (this.realtime.setAuth(null != r ? r : null),
                this.changedAccessToken = r) : "SIGNED_OUT" === e && (this.realtime.setAuth(this.supabaseKey),
                "STORAGE" == t && this.auth.signOut(),
                this.changedAccessToken = void 0)
            }
        }
        let tI = (e, t, r) => new tR(e,t,r);
        var t$ = r(5216);
        function tL() {
            return "undefined" != typeof window && void 0 !== window.document
        }
        let tN = {
            path: "/",
            sameSite: "lax",
            httpOnly: !1,
            maxAge: 3456e4
        }
          , tU = /^(.*)[.](0|[1-9][0-9]*)$/;
        function tD(e, t) {
            if (e === t)
                return !0;
            let r = e.match(tU);
            return !!r && r[1] === t
        }
        function tM(e, t, r) {
            let n = r ?? 3180
              , i = encodeURIComponent(t);
            if (i.length <= n)
                return [{
                    name: e,
                    value: t
                }];
            let s = [];
            for (; i.length > 0; ) {
                let e = i.slice(0, n)
                  , t = e.lastIndexOf("%");
                t > n - 3 && (e = e.slice(0, t));
                let r = "";
                for (; e.length > 0; )
                    try {
                        r = decodeURIComponent(e);
                        break
                    } catch (t) {
                        if (t instanceof URIError && "%" === e.at(-3) && e.length > 3)
                            e = e.slice(0, e.length - 3);
                        else
                            throw t
                    }
                s.push(r),
                i = i.slice(e.length)
            }
            return s.map( (t, r) => ({
                name: `${e}.${r}`,
                value: t
            }))
        }
        async function tB(e, t) {
            let r = await t(e);
            if (r)
                return r;
            let n = [];
            for (let r = 0; ; r++) {
                let i = `${e}.${r}`
                  , s = await t(i);
                if (!s)
                    break;
                n.push(s)
            }
            return n.length > 0 ? n.join("") : null
        }
        let tz = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split("")
          , tF = " 	\n\r=".split("")
          , tq = ( () => {
            let e = Array(128);
            for (let t = 0; t < e.length; t += 1)
                e[t] = -1;
            for (let t = 0; t < tF.length; t += 1)
                e[tF[t].charCodeAt(0)] = -2;
            for (let t = 0; t < tz.length; t += 1)
                e[tz[t].charCodeAt(0)] = t;
            return e
        }
        )();
        function tW(e) {
            let t = []
              , r = 0
              , n = 0;
            if (function(e, t) {
                for (let r = 0; r < e.length; r += 1) {
                    let n = e.charCodeAt(r);
                    if (n > 55295 && n <= 56319) {
                        let t = (n - 55296) * 1024 & 65535;
                        n = (e.charCodeAt(r + 1) - 56320 & 65535 | t) + 65536,
                        r += 1
                    }
                    !function(e, t) {
                        if (e <= 127) {
                            t(e);
                            return
                        }
                        if (e <= 2047) {
                            t(192 | e >> 6),
                            t(128 | 63 & e);
                            return
                        }
                        if (e <= 65535) {
                            t(224 | e >> 12),
                            t(128 | e >> 6 & 63),
                            t(128 | 63 & e);
                            return
                        }
                        if (e <= 1114111) {
                            t(240 | e >> 18),
                            t(128 | e >> 12 & 63),
                            t(128 | e >> 6 & 63),
                            t(128 | 63 & e);
                            return
                        }
                        throw Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`)
                    }(n, t)
                }
            }(e, e => {
                for (r = r << 8 | e,
                n += 8; n >= 6; ) {
                    let e = r >> n - 6 & 63;
                    t.push(tz[e]),
                    n -= 6
                }
            }
            ),
            n > 0)
                for (r <<= 6 - n,
                n = 6; n >= 6; ) {
                    let e = r >> n - 6 & 63;
                    t.push(tz[e]),
                    n -= 6
                }
            return t.join("")
        }
        function tJ(e) {
            let t = []
              , r = e => {
                t.push(String.fromCodePoint(e))
            }
              , n = {
                utf8seq: 0,
                codepoint: 0
            }
              , i = 0
              , s = 0;
            for (let t = 0; t < e.length; t += 1) {
                let o = tq[e.charCodeAt(t)];
                if (o > -1)
                    for (i = i << 6 | o,
                    s += 6; s >= 8; )
                        (function(e, t, r) {
                            if (0 === t.utf8seq) {
                                if (e <= 127) {
                                    r(e);
                                    return
                                }
                                for (let r = 1; r < 6; r += 1)
                                    if ((e >> 7 - r & 1) == 0) {
                                        t.utf8seq = r;
                                        break
                                    }
                                if (2 === t.utf8seq)
                                    t.codepoint = 31 & e;
                                else if (3 === t.utf8seq)
                                    t.codepoint = 15 & e;
                                else if (4 === t.utf8seq)
                                    t.codepoint = 7 & e;
                                else
                                    throw Error("Invalid UTF-8 sequence");
                                t.utf8seq -= 1
                            } else if (t.utf8seq > 0) {
                                if (e <= 127)
                                    throw Error("Invalid UTF-8 sequence");
                                t.codepoint = t.codepoint << 6 | 63 & e,
                                t.utf8seq -= 1,
                                0 === t.utf8seq && r(t.codepoint)
                            }
                        }
                        )(i >> s - 8 & 255, n, r),
                        s -= 8;
                else if (-2 === o)
                    continue;
                else
                    throw Error(`Invalid Base64-URL character "${e.at(t)}" at position ${t}`)
            }
            return t.join("")
        }
        let tK = "base64-";
        async function tG({getAll: e, setAll: t, setItems: r, removedItems: n}, i) {
            let s = i.cookieEncoding
              , o = i.cookieOptions ?? null
              , a = await e([...r ? Object.keys(r) : [], ...n ? Object.keys(n) : []])
              , l = a?.map( ({name: e}) => e) || []
              , u = Object.keys(n).flatMap(e => l.filter(t => tD(t, e)))
              , c = Object.keys(r).flatMap(e => {
                let t = new Set(l.filter(t => tD(t, e)))
                  , n = r[e];
                "base64url" === s && (n = tK + tW(n));
                let i = tM(e, n);
                return i.forEach(e => {
                    t.delete(e.name)
                }
                ),
                u.push(...t),
                i
            }
            )
              , h = {
                ...tN,
                ...o,
                maxAge: 0
            }
              , d = {
                ...tN,
                ...o,
                maxAge: tN.maxAge
            };
            delete h.name,
            delete d.name,
            await t([...u.map(e => ({
                name: e,
                value: "",
                options: h
            })), ...c.map( ({name: e, value: t}) => ({
                name: e,
                value: t,
                options: d
            }))])
        }
        var tH = r(8120);
        function tV() {
            return function(e, t, r) {
                let i = r?.isSingleton === !0 || (!r || !("isSingleton"in r)) && tL();
                if (i && n)
                    return n;
                if (!e || !t)
                    throw Error(`@supabase/ssr: Your project's URL and API key are required to create a Supabase client!

Check your Supabase project's API settings to find these values

https://supabase.com/dashboard/project/_/settings/api`);
                let {storage: s} = function(e, t) {
                    let r, n;
                    let i = e.cookies ?? null
                      , s = e.cookieEncoding
                      , o = {}
                      , a = {};
                    if (i) {
                        if ("get"in i) {
                            let e = async e => {
                                let t = e.flatMap(e => [e, ...Array.from({
                                    length: 5
                                }).map( (t, r) => `${e}.${r}`)])
                                  , r = [];
                                for (let e = 0; e < t.length; e += 1) {
                                    let n = await i.get(t[e]);
                                    (n || "string" == typeof n) && r.push({
                                        name: t[e],
                                        value: n
                                    })
                                }
                                return r
                            }
                            ;
                            if (r = async t => await e(t),
                            "set"in i && "remove"in i)
                                n = async e => {
                                    for (let t = 0; t < e.length; t += 1) {
                                        let {name: r, value: n, options: s} = e[t];
                                        n ? await i.set(r, n, s) : await i.remove(r, s)
                                    }
                                }
                                ;
                            else if (t)
                                n = async () => {
                                    console.warn("@supabase/ssr: createServerClient was configured without set and remove cookie methods, but the client needs to set cookies. This can lead to issues such as random logouts, early session termination or increased token refresh requests. If in NextJS, check your middleware.ts file, route handlers and server actions for correctness. Consider switching to the getAll and setAll cookie methods instead of get, set and remove which are deprecated and can be difficult to use correctly.")
                                }
                                ;
                            else
                                throw Error("@supabase/ssr: createBrowserClient requires configuring a getAll and setAll cookie method (deprecated: alternatively both get, set and remove can be used)")
                        } else if ("getAll"in i) {
                            if (r = async () => await i.getAll(),
                            "setAll"in i)
                                n = i.setAll;
                            else if (t)
                                n = async () => {
                                    console.warn("@supabase/ssr: createServerClient was configured without the setAll cookie method, but the client needs to set cookies. This can lead to issues such as random logouts, early session termination or increased token refresh requests. If in NextJS, check your middleware.ts file, route handlers and server actions for correctness.")
                                }
                                ;
                            else
                                throw Error("@supabase/ssr: createBrowserClient requires configuring both getAll and setAll cookie methods (deprecated: alternatively both get, set and remove can be used)")
                        } else
                            throw Error(`@supabase/ssr: ${t ? "createServerClient" : "createBrowserClient"} requires configuring getAll and setAll cookie methods (deprecated: alternatively use get, set and remove).${tL() ? " As this is called in a browser runtime, consider removing the cookies option object to use the document.cookie API automatically." : ""}`)
                    } else if (!t && tL()) {
                        let e = () => {
                            let e = (0,
                            t$.Q)(document.cookie);
                            return Object.keys(e).map(t => ({
                                name: t,
                                value: e[t]
                            }))
                        }
                        ;
                        r = () => e(),
                        n = e => {
                            e.forEach( ({name: e, value: t, options: r}) => {
                                document.cookie = (0,
                                t$.q)(e, t, r)
                            }
                            )
                        }
                    } else if (t)
                        throw Error("@supabase/ssr: createServerClient must be initialized with cookie options that specify getAll and setAll functions (deprecated, not recommended: alternatively use get, set and remove)");
                    else
                        r = () => [],
                        n = () => {
                            throw Error("@supabase/ssr: createBrowserClient in non-browser runtimes (including Next.js pre-rendering mode) was not initialized cookie options that specify getAll and setAll functions (deprecated: alternatively use get, set and remove), but they were needed")
                        }
                        ;
                    return t ? {
                        getAll: r,
                        setAll: n,
                        setItems: o,
                        removedItems: a,
                        storage: {
                            isServer: !0,
                            getItem: async e => {
                                if ("string" == typeof o[e])
                                    return o[e];
                                if (a[e])
                                    return null;
                                let t = await r([e])
                                  , n = await tB(e, async e => {
                                    let r = t?.find( ({name: t}) => t === e) || null;
                                    return r ? r.value : null
                                }
                                );
                                if (!n)
                                    return null;
                                let i = n;
                                return "string" == typeof n && n.startsWith(tK) && (i = tJ(n.substring(tK.length))),
                                i
                            }
                            ,
                            setItem: async (t, i) => {
                                t.endsWith("-code-verifier") && await tG({
                                    getAll: r,
                                    setAll: n,
                                    setItems: {
                                        [t]: i
                                    },
                                    removedItems: {}
                                }, {
                                    cookieOptions: e?.cookieOptions ?? null,
                                    cookieEncoding: s
                                }),
                                o[t] = i,
                                delete a[t]
                            }
                            ,
                            removeItem: async e => {
                                delete o[e],
                                a[e] = !0
                            }
                        }
                    } : {
                        getAll: r,
                        setAll: n,
                        setItems: o,
                        removedItems: a,
                        storage: {
                            isServer: !1,
                            getItem: async e => {
                                let t = await r([e])
                                  , n = await tB(e, async e => {
                                    let r = t?.find( ({name: t}) => t === e) || null;
                                    return r ? r.value : null
                                }
                                );
                                if (!n)
                                    return null;
                                let i = n;
                                return n.startsWith(tK) && (i = tJ(n.substring(tK.length))),
                                i
                            }
                            ,
                            setItem: async (t, i) => {
                                let o = await r([t])
                                  , a = new Set((o?.map( ({name: e}) => e) || []).filter(e => tD(e, t)))
                                  , l = i;
                                "base64url" === s && (l = tK + tW(i));
                                let u = tM(t, l);
                                u.forEach( ({name: e}) => {
                                    a.delete(e)
                                }
                                );
                                let c = {
                                    ...tN,
                                    ...e?.cookieOptions,
                                    maxAge: 0
                                }
                                  , h = {
                                    ...tN,
                                    ...e?.cookieOptions,
                                    maxAge: tN.maxAge
                                };
                                delete c.name,
                                delete h.name;
                                let d = [...[...a].map(e => ({
                                    name: e,
                                    value: "",
                                    options: c
                                })), ...u.map( ({name: e, value: t}) => ({
                                    name: e,
                                    value: t,
                                    options: h
                                }))];
                                d.length > 0 && await n(d)
                            }
                            ,
                            removeItem: async t => {
                                let i = await r([t])
                                  , s = (i?.map( ({name: e}) => e) || []).filter(e => tD(e, t))
                                  , o = {
                                    ...tN,
                                    ...e?.cookieOptions,
                                    maxAge: 0
                                };
                                delete o.name,
                                s.length > 0 && await n(s.map(e => ({
                                    name: e,
                                    value: "",
                                    options: o
                                })))
                            }
                        }
                    }
                }({
                    ...r,
                    cookieEncoding: r?.cookieEncoding ?? "base64url"
                }, !1)
                  , o = tI(e, t, {
                    ...r,
                    global: {
                        ...r?.global,
                        headers: {
                            ...r?.global?.headers,
                            "X-Client-Info": "supabase-ssr/0.5.2"
                        }
                    },
                    auth: {
                        ...r?.auth,
                        ...r?.cookieOptions?.name ? {
                            storageKey: r.cookieOptions.name
                        } : null,
                        flowType: "pkce",
                        autoRefreshToken: tL(),
                        detectSessionInUrl: tL(),
                        persistSession: !0,
                        storage: s
                    }
                });
                return i && (n = o),
                o
            }("https://ziylbxnxvagkrvgvjnqi.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppeWxieG54dmFna3J2Z3ZqbnFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwNDQxODEsImV4cCI6MjA2MjYyMDE4MX0.tD2Qd1zhxORwVbxQXdG79-ED13lztd3Ex6-f2bLUWNk", {
                cookieOptions: {
                    domain: "preview" === tH.env.NEXT_PUBLIC_CO_DEV_ENV ? ".preview.co.dev" : void 0
                }
            })
        }
    },
    9968: function(e) {
        !function() {
            var t = {
                675: function(e, t) {
                    "use strict";
                    t.byteLength = function(e) {
                        var t = l(e)
                          , r = t[0]
                          , n = t[1];
                        return (r + n) * 3 / 4 - n
                    }
                    ,
                    t.toByteArray = function(e) {
                        var t, r, s = l(e), o = s[0], a = s[1], u = new i((o + a) * 3 / 4 - a), c = 0, h = a > 0 ? o - 4 : o;
                        for (r = 0; r < h; r += 4)
                            t = n[e.charCodeAt(r)] << 18 | n[e.charCodeAt(r + 1)] << 12 | n[e.charCodeAt(r + 2)] << 6 | n[e.charCodeAt(r + 3)],
                            u[c++] = t >> 16 & 255,
                            u[c++] = t >> 8 & 255,
                            u[c++] = 255 & t;
                        return 2 === a && (t = n[e.charCodeAt(r)] << 2 | n[e.charCodeAt(r + 1)] >> 4,
                        u[c++] = 255 & t),
                        1 === a && (t = n[e.charCodeAt(r)] << 10 | n[e.charCodeAt(r + 1)] << 4 | n[e.charCodeAt(r + 2)] >> 2,
                        u[c++] = t >> 8 & 255,
                        u[c++] = 255 & t),
                        u
                    }
                    ,
                    t.fromByteArray = function(e) {
                        for (var t, n = e.length, i = n % 3, s = [], o = 0, a = n - i; o < a; o += 16383)
                            s.push(function(e, t, n) {
                                for (var i, s = [], o = t; o < n; o += 3)
                                    s.push(r[(i = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (255 & e[o + 2])) >> 18 & 63] + r[i >> 12 & 63] + r[i >> 6 & 63] + r[63 & i]);
                                return s.join("")
                            }(e, o, o + 16383 > a ? a : o + 16383));
                        return 1 === i ? s.push(r[(t = e[n - 1]) >> 2] + r[t << 4 & 63] + "==") : 2 === i && s.push(r[(t = (e[n - 2] << 8) + e[n - 1]) >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "="),
                        s.join("")
                    }
                    ;
                    for (var r = [], n = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0, a = s.length; o < a; ++o)
                        r[o] = s[o],
                        n[s.charCodeAt(o)] = o;
                    function l(e) {
                        var t = e.length;
                        if (t % 4 > 0)
                            throw Error("Invalid string. Length must be a multiple of 4");
                        var r = e.indexOf("=");
                        -1 === r && (r = t);
                        var n = r === t ? 0 : 4 - r % 4;
                        return [r, n]
                    }
                    n["-".charCodeAt(0)] = 62,
                    n["_".charCodeAt(0)] = 63
                },
                72: function(e, t, r) {
                    "use strict";
                    var n = r(675)
                      , i = r(783)
                      , s = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
                    function o(e) {
                        if (e > 2147483647)
                            throw RangeError('The value "' + e + '" is invalid for option "size"');
                        var t = new Uint8Array(e);
                        return Object.setPrototypeOf(t, a.prototype),
                        t
                    }
                    function a(e, t, r) {
                        if ("number" == typeof e) {
                            if ("string" == typeof t)
                                throw TypeError('The "string" argument must be of type string. Received type number');
                            return c(e)
                        }
                        return l(e, t, r)
                    }
                    function l(e, t, r) {
                        if ("string" == typeof e)
                            return function(e, t) {
                                if (("string" != typeof t || "" === t) && (t = "utf8"),
                                !a.isEncoding(t))
                                    throw TypeError("Unknown encoding: " + t);
                                var r = 0 | f(e, t)
                                  , n = o(r)
                                  , i = n.write(e, t);
                                return i !== r && (n = n.slice(0, i)),
                                n
                            }(e, t);
                        if (ArrayBuffer.isView(e))
                            return h(e);
                        if (null == e)
                            throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
                        if (A(e, ArrayBuffer) || e && A(e.buffer, ArrayBuffer) || "undefined" != typeof SharedArrayBuffer && (A(e, SharedArrayBuffer) || e && A(e.buffer, SharedArrayBuffer)))
                            return function(e, t, r) {
                                var n;
                                if (t < 0 || e.byteLength < t)
                                    throw RangeError('"offset" is outside of buffer bounds');
                                if (e.byteLength < t + (r || 0))
                                    throw RangeError('"length" is outside of buffer bounds');
                                return Object.setPrototypeOf(n = void 0 === t && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e,t) : new Uint8Array(e,t,r), a.prototype),
                                n
                            }(e, t, r);
                        if ("number" == typeof e)
                            throw TypeError('The "value" argument must not be of type number. Received type number');
                        var n = e.valueOf && e.valueOf();
                        if (null != n && n !== e)
                            return a.from(n, t, r);
                        var i = function(e) {
                            if (a.isBuffer(e)) {
                                var t, r = 0 | d(e.length), n = o(r);
                                return 0 === n.length || e.copy(n, 0, 0, r),
                                n
                            }
                            return void 0 !== e.length ? "number" != typeof e.length || (t = e.length) != t ? o(0) : h(e) : "Buffer" === e.type && Array.isArray(e.data) ? h(e.data) : void 0
                        }(e);
                        if (i)
                            return i;
                        if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive])
                            return a.from(e[Symbol.toPrimitive]("string"), t, r);
                        throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
                    }
                    function u(e) {
                        if ("number" != typeof e)
                            throw TypeError('"size" argument must be of type number');
                        if (e < 0)
                            throw RangeError('The value "' + e + '" is invalid for option "size"')
                    }
                    function c(e) {
                        return u(e),
                        o(e < 0 ? 0 : 0 | d(e))
                    }
                    function h(e) {
                        for (var t = e.length < 0 ? 0 : 0 | d(e.length), r = o(t), n = 0; n < t; n += 1)
                            r[n] = 255 & e[n];
                        return r
                    }
                    function d(e) {
                        if (e >= 2147483647)
                            throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
                        return 0 | e
                    }
                    function f(e, t) {
                        if (a.isBuffer(e))
                            return e.length;
                        if (ArrayBuffer.isView(e) || A(e, ArrayBuffer))
                            return e.byteLength;
                        if ("string" != typeof e)
                            throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
                        var r = e.length
                          , n = arguments.length > 2 && !0 === arguments[2];
                        if (!n && 0 === r)
                            return 0;
                        for (var i = !1; ; )
                            switch (t) {
                            case "ascii":
                            case "latin1":
                            case "binary":
                                return r;
                            case "utf8":
                            case "utf-8":
                                return T(e).length;
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return 2 * r;
                            case "hex":
                                return r >>> 1;
                            case "base64":
                                return j(e).length;
                            default:
                                if (i)
                                    return n ? -1 : T(e).length;
                                t = ("" + t).toLowerCase(),
                                i = !0
                            }
                    }
                    function p(e, t, r) {
                        var i, s, o = !1;
                        if ((void 0 === t || t < 0) && (t = 0),
                        t > this.length || ((void 0 === r || r > this.length) && (r = this.length),
                        r <= 0 || (r >>>= 0) <= (t >>>= 0)))
                            return "";
                        for (e || (e = "utf8"); ; )
                            switch (e) {
                            case "hex":
                                return function(e, t, r) {
                                    var n = e.length;
                                    (!t || t < 0) && (t = 0),
                                    (!r || r < 0 || r > n) && (r = n);
                                    for (var i = "", s = t; s < r; ++s)
                                        i += P[e[s]];
                                    return i
                                }(this, t, r);
                            case "utf8":
                            case "utf-8":
                                return v(this, t, r);
                            case "ascii":
                                return function(e, t, r) {
                                    var n = "";
                                    r = Math.min(e.length, r);
                                    for (var i = t; i < r; ++i)
                                        n += String.fromCharCode(127 & e[i]);
                                    return n
                                }(this, t, r);
                            case "latin1":
                            case "binary":
                                return function(e, t, r) {
                                    var n = "";
                                    r = Math.min(e.length, r);
                                    for (var i = t; i < r; ++i)
                                        n += String.fromCharCode(e[i]);
                                    return n
                                }(this, t, r);
                            case "base64":
                                return i = t,
                                s = r,
                                0 === i && s === this.length ? n.fromByteArray(this) : n.fromByteArray(this.slice(i, s));
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return function(e, t, r) {
                                    for (var n = e.slice(t, r), i = "", s = 0; s < n.length; s += 2)
                                        i += String.fromCharCode(n[s] + 256 * n[s + 1]);
                                    return i
                                }(this, t, r);
                            default:
                                if (o)
                                    throw TypeError("Unknown encoding: " + e);
                                e = (e + "").toLowerCase(),
                                o = !0
                            }
                    }
                    function g(e, t, r) {
                        var n = e[t];
                        e[t] = e[r],
                        e[r] = n
                    }
                    function m(e, t, r, n, i) {
                        var s;
                        if (0 === e.length)
                            return -1;
                        if ("string" == typeof r ? (n = r,
                        r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648),
                        (s = r = +r) != s && (r = i ? 0 : e.length - 1),
                        r < 0 && (r = e.length + r),
                        r >= e.length) {
                            if (i)
                                return -1;
                            r = e.length - 1
                        } else if (r < 0) {
                            if (!i)
                                return -1;
                            r = 0
                        }
                        if ("string" == typeof t && (t = a.from(t, n)),
                        a.isBuffer(t))
                            return 0 === t.length ? -1 : y(e, t, r, n, i);
                        if ("number" == typeof t)
                            return (t &= 255,
                            "function" == typeof Uint8Array.prototype.indexOf) ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : y(e, [t], r, n, i);
                        throw TypeError("val must be string, number or Buffer")
                    }
                    function y(e, t, r, n, i) {
                        var s, o = 1, a = e.length, l = t.length;
                        if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                            if (e.length < 2 || t.length < 2)
                                return -1;
                            o = 2,
                            a /= 2,
                            l /= 2,
                            r /= 2
                        }
                        function u(e, t) {
                            return 1 === o ? e[t] : e.readUInt16BE(t * o)
                        }
                        if (i) {
                            var c = -1;
                            for (s = r; s < a; s++)
                                if (u(e, s) === u(t, -1 === c ? 0 : s - c)) {
                                    if (-1 === c && (c = s),
                                    s - c + 1 === l)
                                        return c * o
                                } else
                                    -1 !== c && (s -= s - c),
                                    c = -1
                        } else
                            for (r + l > a && (r = a - l),
                            s = r; s >= 0; s--) {
                                for (var h = !0, d = 0; d < l; d++)
                                    if (u(e, s + d) !== u(t, d)) {
                                        h = !1;
                                        break
                                    }
                                if (h)
                                    return s
                            }
                        return -1
                    }
                    function v(e, t, r) {
                        r = Math.min(e.length, r);
                        for (var n = [], i = t; i < r; ) {
                            var s, o, a, l, u = e[i], c = null, h = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                            if (i + h <= r)
                                switch (h) {
                                case 1:
                                    u < 128 && (c = u);
                                    break;
                                case 2:
                                    (192 & (s = e[i + 1])) == 128 && (l = (31 & u) << 6 | 63 & s) > 127 && (c = l);
                                    break;
                                case 3:
                                    s = e[i + 1],
                                    o = e[i + 2],
                                    (192 & s) == 128 && (192 & o) == 128 && (l = (15 & u) << 12 | (63 & s) << 6 | 63 & o) > 2047 && (l < 55296 || l > 57343) && (c = l);
                                    break;
                                case 4:
                                    s = e[i + 1],
                                    o = e[i + 2],
                                    a = e[i + 3],
                                    (192 & s) == 128 && (192 & o) == 128 && (192 & a) == 128 && (l = (15 & u) << 18 | (63 & s) << 12 | (63 & o) << 6 | 63 & a) > 65535 && l < 1114112 && (c = l)
                                }
                            null === c ? (c = 65533,
                            h = 1) : c > 65535 && (c -= 65536,
                            n.push(c >>> 10 & 1023 | 55296),
                            c = 56320 | 1023 & c),
                            n.push(c),
                            i += h
                        }
                        return function(e) {
                            var t = e.length;
                            if (t <= 4096)
                                return String.fromCharCode.apply(String, e);
                            for (var r = "", n = 0; n < t; )
                                r += String.fromCharCode.apply(String, e.slice(n, n += 4096));
                            return r
                        }(n)
                    }
                    function b(e, t, r) {
                        if (e % 1 != 0 || e < 0)
                            throw RangeError("offset is not uint");
                        if (e + t > r)
                            throw RangeError("Trying to access beyond buffer length")
                    }
                    function w(e, t, r, n, i, s) {
                        if (!a.isBuffer(e))
                            throw TypeError('"buffer" argument must be a Buffer instance');
                        if (t > i || t < s)
                            throw RangeError('"value" argument is out of bounds');
                        if (r + n > e.length)
                            throw RangeError("Index out of range")
                    }
                    function _(e, t, r, n, i, s) {
                        if (r + n > e.length || r < 0)
                            throw RangeError("Index out of range")
                    }
                    function k(e, t, r, n, s) {
                        return t = +t,
                        r >>>= 0,
                        s || _(e, t, r, 4, 34028234663852886e22, -34028234663852886e22),
                        i.write(e, t, r, n, 23, 4),
                        r + 4
                    }
                    function E(e, t, r, n, s) {
                        return t = +t,
                        r >>>= 0,
                        s || _(e, t, r, 8, 17976931348623157e292, -17976931348623157e292),
                        i.write(e, t, r, n, 52, 8),
                        r + 8
                    }
                    t.Buffer = a,
                    t.SlowBuffer = function(e) {
                        return +e != e && (e = 0),
                        a.alloc(+e)
                    }
                    ,
                    t.INSPECT_MAX_BYTES = 50,
                    t.kMaxLength = 2147483647,
                    a.TYPED_ARRAY_SUPPORT = function() {
                        try {
                            var e = new Uint8Array(1)
                              , t = {
                                foo: function() {
                                    return 42
                                }
                            };
                            return Object.setPrototypeOf(t, Uint8Array.prototype),
                            Object.setPrototypeOf(e, t),
                            42 === e.foo()
                        } catch (e) {
                            return !1
                        }
                    }(),
                    a.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),
                    Object.defineProperty(a.prototype, "parent", {
                        enumerable: !0,
                        get: function() {
                            if (a.isBuffer(this))
                                return this.buffer
                        }
                    }),
                    Object.defineProperty(a.prototype, "offset", {
                        enumerable: !0,
                        get: function() {
                            if (a.isBuffer(this))
                                return this.byteOffset
                        }
                    }),
                    a.poolSize = 8192,
                    a.from = function(e, t, r) {
                        return l(e, t, r)
                    }
                    ,
                    Object.setPrototypeOf(a.prototype, Uint8Array.prototype),
                    Object.setPrototypeOf(a, Uint8Array),
                    a.alloc = function(e, t, r) {
                        return (u(e),
                        e <= 0) ? o(e) : void 0 !== t ? "string" == typeof r ? o(e).fill(t, r) : o(e).fill(t) : o(e)
                    }
                    ,
                    a.allocUnsafe = function(e) {
                        return c(e)
                    }
                    ,
                    a.allocUnsafeSlow = function(e) {
                        return c(e)
                    }
                    ,
                    a.isBuffer = function(e) {
                        return null != e && !0 === e._isBuffer && e !== a.prototype
                    }
                    ,
                    a.compare = function(e, t) {
                        if (A(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)),
                        A(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)),
                        !a.isBuffer(e) || !a.isBuffer(t))
                            throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                        if (e === t)
                            return 0;
                        for (var r = e.length, n = t.length, i = 0, s = Math.min(r, n); i < s; ++i)
                            if (e[i] !== t[i]) {
                                r = e[i],
                                n = t[i];
                                break
                            }
                        return r < n ? -1 : n < r ? 1 : 0
                    }
                    ,
                    a.isEncoding = function(e) {
                        switch (String(e).toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "latin1":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return !0;
                        default:
                            return !1
                        }
                    }
                    ,
                    a.concat = function(e, t) {
                        if (!Array.isArray(e))
                            throw TypeError('"list" argument must be an Array of Buffers');
                        if (0 === e.length)
                            return a.alloc(0);
                        if (void 0 === t)
                            for (r = 0,
                            t = 0; r < e.length; ++r)
                                t += e[r].length;
                        var r, n = a.allocUnsafe(t), i = 0;
                        for (r = 0; r < e.length; ++r) {
                            var s = e[r];
                            if (A(s, Uint8Array) && (s = a.from(s)),
                            !a.isBuffer(s))
                                throw TypeError('"list" argument must be an Array of Buffers');
                            s.copy(n, i),
                            i += s.length
                        }
                        return n
                    }
                    ,
                    a.byteLength = f,
                    a.prototype._isBuffer = !0,
                    a.prototype.swap16 = function() {
                        var e = this.length;
                        if (e % 2 != 0)
                            throw RangeError("Buffer size must be a multiple of 16-bits");
                        for (var t = 0; t < e; t += 2)
                            g(this, t, t + 1);
                        return this
                    }
                    ,
                    a.prototype.swap32 = function() {
                        var e = this.length;
                        if (e % 4 != 0)
                            throw RangeError("Buffer size must be a multiple of 32-bits");
                        for (var t = 0; t < e; t += 4)
                            g(this, t, t + 3),
                            g(this, t + 1, t + 2);
                        return this
                    }
                    ,
                    a.prototype.swap64 = function() {
                        var e = this.length;
                        if (e % 8 != 0)
                            throw RangeError("Buffer size must be a multiple of 64-bits");
                        for (var t = 0; t < e; t += 8)
                            g(this, t, t + 7),
                            g(this, t + 1, t + 6),
                            g(this, t + 2, t + 5),
                            g(this, t + 3, t + 4);
                        return this
                    }
                    ,
                    a.prototype.toString = function() {
                        var e = this.length;
                        return 0 === e ? "" : 0 == arguments.length ? v(this, 0, e) : p.apply(this, arguments)
                    }
                    ,
                    a.prototype.toLocaleString = a.prototype.toString,
                    a.prototype.equals = function(e) {
                        if (!a.isBuffer(e))
                            throw TypeError("Argument must be a Buffer");
                        return this === e || 0 === a.compare(this, e)
                    }
                    ,
                    a.prototype.inspect = function() {
                        var e = ""
                          , r = t.INSPECT_MAX_BYTES;
                        return e = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(),
                        this.length > r && (e += " ... "),
                        "<Buffer " + e + ">"
                    }
                    ,
                    s && (a.prototype[s] = a.prototype.inspect),
                    a.prototype.compare = function(e, t, r, n, i) {
                        if (A(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)),
                        !a.isBuffer(e))
                            throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
                        if (void 0 === t && (t = 0),
                        void 0 === r && (r = e ? e.length : 0),
                        void 0 === n && (n = 0),
                        void 0 === i && (i = this.length),
                        t < 0 || r > e.length || n < 0 || i > this.length)
                            throw RangeError("out of range index");
                        if (n >= i && t >= r)
                            return 0;
                        if (n >= i)
                            return -1;
                        if (t >= r)
                            return 1;
                        if (t >>>= 0,
                        r >>>= 0,
                        n >>>= 0,
                        i >>>= 0,
                        this === e)
                            return 0;
                        for (var s = i - n, o = r - t, l = Math.min(s, o), u = this.slice(n, i), c = e.slice(t, r), h = 0; h < l; ++h)
                            if (u[h] !== c[h]) {
                                s = u[h],
                                o = c[h];
                                break
                            }
                        return s < o ? -1 : o < s ? 1 : 0
                    }
                    ,
                    a.prototype.includes = function(e, t, r) {
                        return -1 !== this.indexOf(e, t, r)
                    }
                    ,
                    a.prototype.indexOf = function(e, t, r) {
                        return m(this, e, t, r, !0)
                    }
                    ,
                    a.prototype.lastIndexOf = function(e, t, r) {
                        return m(this, e, t, r, !1)
                    }
                    ,
                    a.prototype.write = function(e, t, r, n) {
                        if (void 0 === t)
                            n = "utf8",
                            r = this.length,
                            t = 0;
                        else if (void 0 === r && "string" == typeof t)
                            n = t,
                            r = this.length,
                            t = 0;
                        else if (isFinite(t))
                            t >>>= 0,
                            isFinite(r) ? (r >>>= 0,
                            void 0 === n && (n = "utf8")) : (n = r,
                            r = void 0);
                        else
                            throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                        var i, s, o, a, l, u, c, h, d, f, p, g, m = this.length - t;
                        if ((void 0 === r || r > m) && (r = m),
                        e.length > 0 && (r < 0 || t < 0) || t > this.length)
                            throw RangeError("Attempt to write outside buffer bounds");
                        n || (n = "utf8");
                        for (var y = !1; ; )
                            switch (n) {
                            case "hex":
                                return function(e, t, r, n) {
                                    r = Number(r) || 0;
                                    var i = e.length - r;
                                    n ? (n = Number(n)) > i && (n = i) : n = i;
                                    var s = t.length;
                                    n > s / 2 && (n = s / 2);
                                    for (var o = 0; o < n; ++o) {
                                        var a = parseInt(t.substr(2 * o, 2), 16);
                                        if (a != a)
                                            break;
                                        e[r + o] = a
                                    }
                                    return o
                                }(this, e, t, r);
                            case "utf8":
                            case "utf-8":
                                return l = t,
                                u = r,
                                O(T(e, this.length - l), this, l, u);
                            case "ascii":
                                return c = t,
                                h = r,
                                O(S(e), this, c, h);
                            case "latin1":
                            case "binary":
                                return i = this,
                                s = e,
                                o = t,
                                a = r,
                                O(S(s), i, o, a);
                            case "base64":
                                return d = t,
                                f = r,
                                O(j(e), this, d, f);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return p = t,
                                g = r,
                                O(function(e, t) {
                                    for (var r, n, i = [], s = 0; s < e.length && !((t -= 2) < 0); ++s)
                                        n = (r = e.charCodeAt(s)) >> 8,
                                        i.push(r % 256),
                                        i.push(n);
                                    return i
                                }(e, this.length - p), this, p, g);
                            default:
                                if (y)
                                    throw TypeError("Unknown encoding: " + n);
                                n = ("" + n).toLowerCase(),
                                y = !0
                            }
                    }
                    ,
                    a.prototype.toJSON = function() {
                        return {
                            type: "Buffer",
                            data: Array.prototype.slice.call(this._arr || this, 0)
                        }
                    }
                    ,
                    a.prototype.slice = function(e, t) {
                        var r = this.length;
                        e = ~~e,
                        t = void 0 === t ? r : ~~t,
                        e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
                        t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
                        t < e && (t = e);
                        var n = this.subarray(e, t);
                        return Object.setPrototypeOf(n, a.prototype),
                        n
                    }
                    ,
                    a.prototype.readUIntLE = function(e, t, r) {
                        e >>>= 0,
                        t >>>= 0,
                        r || b(e, t, this.length);
                        for (var n = this[e], i = 1, s = 0; ++s < t && (i *= 256); )
                            n += this[e + s] * i;
                        return n
                    }
                    ,
                    a.prototype.readUIntBE = function(e, t, r) {
                        e >>>= 0,
                        t >>>= 0,
                        r || b(e, t, this.length);
                        for (var n = this[e + --t], i = 1; t > 0 && (i *= 256); )
                            n += this[e + --t] * i;
                        return n
                    }
                    ,
                    a.prototype.readUInt8 = function(e, t) {
                        return e >>>= 0,
                        t || b(e, 1, this.length),
                        this[e]
                    }
                    ,
                    a.prototype.readUInt16LE = function(e, t) {
                        return e >>>= 0,
                        t || b(e, 2, this.length),
                        this[e] | this[e + 1] << 8
                    }
                    ,
                    a.prototype.readUInt16BE = function(e, t) {
                        return e >>>= 0,
                        t || b(e, 2, this.length),
                        this[e] << 8 | this[e + 1]
                    }
                    ,
                    a.prototype.readUInt32LE = function(e, t) {
                        return e >>>= 0,
                        t || b(e, 4, this.length),
                        (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
                    }
                    ,
                    a.prototype.readUInt32BE = function(e, t) {
                        return e >>>= 0,
                        t || b(e, 4, this.length),
                        16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
                    }
                    ,
                    a.prototype.readIntLE = function(e, t, r) {
                        e >>>= 0,
                        t >>>= 0,
                        r || b(e, t, this.length);
                        for (var n = this[e], i = 1, s = 0; ++s < t && (i *= 256); )
                            n += this[e + s] * i;
                        return n >= (i *= 128) && (n -= Math.pow(2, 8 * t)),
                        n
                    }
                    ,
                    a.prototype.readIntBE = function(e, t, r) {
                        e >>>= 0,
                        t >>>= 0,
                        r || b(e, t, this.length);
                        for (var n = t, i = 1, s = this[e + --n]; n > 0 && (i *= 256); )
                            s += this[e + --n] * i;
                        return s >= (i *= 128) && (s -= Math.pow(2, 8 * t)),
                        s
                    }
                    ,
                    a.prototype.readInt8 = function(e, t) {
                        return (e >>>= 0,
                        t || b(e, 1, this.length),
                        128 & this[e]) ? -((255 - this[e] + 1) * 1) : this[e]
                    }
                    ,
                    a.prototype.readInt16LE = function(e, t) {
                        e >>>= 0,
                        t || b(e, 2, this.length);
                        var r = this[e] | this[e + 1] << 8;
                        return 32768 & r ? 4294901760 | r : r
                    }
                    ,
                    a.prototype.readInt16BE = function(e, t) {
                        e >>>= 0,
                        t || b(e, 2, this.length);
                        var r = this[e + 1] | this[e] << 8;
                        return 32768 & r ? 4294901760 | r : r
                    }
                    ,
                    a.prototype.readInt32LE = function(e, t) {
                        return e >>>= 0,
                        t || b(e, 4, this.length),
                        this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
                    }
                    ,
                    a.prototype.readInt32BE = function(e, t) {
                        return e >>>= 0,
                        t || b(e, 4, this.length),
                        this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
                    }
                    ,
                    a.prototype.readFloatLE = function(e, t) {
                        return e >>>= 0,
                        t || b(e, 4, this.length),
                        i.read(this, e, !0, 23, 4)
                    }
                    ,
                    a.prototype.readFloatBE = function(e, t) {
                        return e >>>= 0,
                        t || b(e, 4, this.length),
                        i.read(this, e, !1, 23, 4)
                    }
                    ,
                    a.prototype.readDoubleLE = function(e, t) {
                        return e >>>= 0,
                        t || b(e, 8, this.length),
                        i.read(this, e, !0, 52, 8)
                    }
                    ,
                    a.prototype.readDoubleBE = function(e, t) {
                        return e >>>= 0,
                        t || b(e, 8, this.length),
                        i.read(this, e, !1, 52, 8)
                    }
                    ,
                    a.prototype.writeUIntLE = function(e, t, r, n) {
                        if (e = +e,
                        t >>>= 0,
                        r >>>= 0,
                        !n) {
                            var i = Math.pow(2, 8 * r) - 1;
                            w(this, e, t, r, i, 0)
                        }
                        var s = 1
                          , o = 0;
                        for (this[t] = 255 & e; ++o < r && (s *= 256); )
                            this[t + o] = e / s & 255;
                        return t + r
                    }
                    ,
                    a.prototype.writeUIntBE = function(e, t, r, n) {
                        if (e = +e,
                        t >>>= 0,
                        r >>>= 0,
                        !n) {
                            var i = Math.pow(2, 8 * r) - 1;
                            w(this, e, t, r, i, 0)
                        }
                        var s = r - 1
                          , o = 1;
                        for (this[t + s] = 255 & e; --s >= 0 && (o *= 256); )
                            this[t + s] = e / o & 255;
                        return t + r
                    }
                    ,
                    a.prototype.writeUInt8 = function(e, t, r) {
                        return e = +e,
                        t >>>= 0,
                        r || w(this, e, t, 1, 255, 0),
                        this[t] = 255 & e,
                        t + 1
                    }
                    ,
                    a.prototype.writeUInt16LE = function(e, t, r) {
                        return e = +e,
                        t >>>= 0,
                        r || w(this, e, t, 2, 65535, 0),
                        this[t] = 255 & e,
                        this[t + 1] = e >>> 8,
                        t + 2
                    }
                    ,
                    a.prototype.writeUInt16BE = function(e, t, r) {
                        return e = +e,
                        t >>>= 0,
                        r || w(this, e, t, 2, 65535, 0),
                        this[t] = e >>> 8,
                        this[t + 1] = 255 & e,
                        t + 2
                    }
                    ,
                    a.prototype.writeUInt32LE = function(e, t, r) {
                        return e = +e,
                        t >>>= 0,
                        r || w(this, e, t, 4, 4294967295, 0),
                        this[t + 3] = e >>> 24,
                        this[t + 2] = e >>> 16,
                        this[t + 1] = e >>> 8,
                        this[t] = 255 & e,
                        t + 4
                    }
                    ,
                    a.prototype.writeUInt32BE = function(e, t, r) {
                        return e = +e,
                        t >>>= 0,
                        r || w(this, e, t, 4, 4294967295, 0),
                        this[t] = e >>> 24,
                        this[t + 1] = e >>> 16,
                        this[t + 2] = e >>> 8,
                        this[t + 3] = 255 & e,
                        t + 4
                    }
                    ,
                    a.prototype.writeIntLE = function(e, t, r, n) {
                        if (e = +e,
                        t >>>= 0,
                        !n) {
                            var i = Math.pow(2, 8 * r - 1);
                            w(this, e, t, r, i - 1, -i)
                        }
                        var s = 0
                          , o = 1
                          , a = 0;
                        for (this[t] = 255 & e; ++s < r && (o *= 256); )
                            e < 0 && 0 === a && 0 !== this[t + s - 1] && (a = 1),
                            this[t + s] = (e / o >> 0) - a & 255;
                        return t + r
                    }
                    ,
                    a.prototype.writeIntBE = function(e, t, r, n) {
                        if (e = +e,
                        t >>>= 0,
                        !n) {
                            var i = Math.pow(2, 8 * r - 1);
                            w(this, e, t, r, i - 1, -i)
                        }
                        var s = r - 1
                          , o = 1
                          , a = 0;
                        for (this[t + s] = 255 & e; --s >= 0 && (o *= 256); )
                            e < 0 && 0 === a && 0 !== this[t + s + 1] && (a = 1),
                            this[t + s] = (e / o >> 0) - a & 255;
                        return t + r
                    }
                    ,
                    a.prototype.writeInt8 = function(e, t, r) {
                        return e = +e,
                        t >>>= 0,
                        r || w(this, e, t, 1, 127, -128),
                        e < 0 && (e = 255 + e + 1),
                        this[t] = 255 & e,
                        t + 1
                    }
                    ,
                    a.prototype.writeInt16LE = function(e, t, r) {
                        return e = +e,
                        t >>>= 0,
                        r || w(this, e, t, 2, 32767, -32768),
                        this[t] = 255 & e,
                        this[t + 1] = e >>> 8,
                        t + 2
                    }
                    ,
                    a.prototype.writeInt16BE = function(e, t, r) {
                        return e = +e,
                        t >>>= 0,
                        r || w(this, e, t, 2, 32767, -32768),
                        this[t] = e >>> 8,
                        this[t + 1] = 255 & e,
                        t + 2
                    }
                    ,
                    a.prototype.writeInt32LE = function(e, t, r) {
                        return e = +e,
                        t >>>= 0,
                        r || w(this, e, t, 4, 2147483647, -2147483648),
                        this[t] = 255 & e,
                        this[t + 1] = e >>> 8,
                        this[t + 2] = e >>> 16,
                        this[t + 3] = e >>> 24,
                        t + 4
                    }
                    ,
                    a.prototype.writeInt32BE = function(e, t, r) {
                        return e = +e,
                        t >>>= 0,
                        r || w(this, e, t, 4, 2147483647, -2147483648),
                        e < 0 && (e = 4294967295 + e + 1),
                        this[t] = e >>> 24,
                        this[t + 1] = e >>> 16,
                        this[t + 2] = e >>> 8,
                        this[t + 3] = 255 & e,
                        t + 4
                    }
                    ,
                    a.prototype.writeFloatLE = function(e, t, r) {
                        return k(this, e, t, !0, r)
                    }
                    ,
                    a.prototype.writeFloatBE = function(e, t, r) {
                        return k(this, e, t, !1, r)
                    }
                    ,
                    a.prototype.writeDoubleLE = function(e, t, r) {
                        return E(this, e, t, !0, r)
                    }
                    ,
                    a.prototype.writeDoubleBE = function(e, t, r) {
                        return E(this, e, t, !1, r)
                    }
                    ,
                    a.prototype.copy = function(e, t, r, n) {
                        if (!a.isBuffer(e))
                            throw TypeError("argument should be a Buffer");
                        if (r || (r = 0),
                        n || 0 === n || (n = this.length),
                        t >= e.length && (t = e.length),
                        t || (t = 0),
                        n > 0 && n < r && (n = r),
                        n === r || 0 === e.length || 0 === this.length)
                            return 0;
                        if (t < 0)
                            throw RangeError("targetStart out of bounds");
                        if (r < 0 || r >= this.length)
                            throw RangeError("Index out of range");
                        if (n < 0)
                            throw RangeError("sourceEnd out of bounds");
                        n > this.length && (n = this.length),
                        e.length - t < n - r && (n = e.length - t + r);
                        var i = n - r;
                        if (this === e && "function" == typeof Uint8Array.prototype.copyWithin)
                            this.copyWithin(t, r, n);
                        else if (this === e && r < t && t < n)
                            for (var s = i - 1; s >= 0; --s)
                                e[s + t] = this[s + r];
                        else
                            Uint8Array.prototype.set.call(e, this.subarray(r, n), t);
                        return i
                    }
                    ,
                    a.prototype.fill = function(e, t, r, n) {
                        if ("string" == typeof e) {
                            if ("string" == typeof t ? (n = t,
                            t = 0,
                            r = this.length) : "string" == typeof r && (n = r,
                            r = this.length),
                            void 0 !== n && "string" != typeof n)
                                throw TypeError("encoding must be a string");
                            if ("string" == typeof n && !a.isEncoding(n))
                                throw TypeError("Unknown encoding: " + n);
                            if (1 === e.length) {
                                var i, s = e.charCodeAt(0);
                                ("utf8" === n && s < 128 || "latin1" === n) && (e = s)
                            }
                        } else
                            "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));
                        if (t < 0 || this.length < t || this.length < r)
                            throw RangeError("Out of range index");
                        if (r <= t)
                            return this;
                        if (t >>>= 0,
                        r = void 0 === r ? this.length : r >>> 0,
                        e || (e = 0),
                        "number" == typeof e)
                            for (i = t; i < r; ++i)
                                this[i] = e;
                        else {
                            var o = a.isBuffer(e) ? e : a.from(e, n)
                              , l = o.length;
                            if (0 === l)
                                throw TypeError('The value "' + e + '" is invalid for argument "value"');
                            for (i = 0; i < r - t; ++i)
                                this[i + t] = o[i % l]
                        }
                        return this
                    }
                    ;
                    var x = /[^+/0-9A-Za-z-_]/g;
                    function T(e, t) {
                        t = t || 1 / 0;
                        for (var r, n = e.length, i = null, s = [], o = 0; o < n; ++o) {
                            if ((r = e.charCodeAt(o)) > 55295 && r < 57344) {
                                if (!i) {
                                    if (r > 56319 || o + 1 === n) {
                                        (t -= 3) > -1 && s.push(239, 191, 189);
                                        continue
                                    }
                                    i = r;
                                    continue
                                }
                                if (r < 56320) {
                                    (t -= 3) > -1 && s.push(239, 191, 189),
                                    i = r;
                                    continue
                                }
                                r = (i - 55296 << 10 | r - 56320) + 65536
                            } else
                                i && (t -= 3) > -1 && s.push(239, 191, 189);
                            if (i = null,
                            r < 128) {
                                if ((t -= 1) < 0)
                                    break;
                                s.push(r)
                            } else if (r < 2048) {
                                if ((t -= 2) < 0)
                                    break;
                                s.push(r >> 6 | 192, 63 & r | 128)
                            } else if (r < 65536) {
                                if ((t -= 3) < 0)
                                    break;
                                s.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                            } else if (r < 1114112) {
                                if ((t -= 4) < 0)
                                    break;
                                s.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                            } else
                                throw Error("Invalid code point")
                        }
                        return s
                    }
                    function S(e) {
                        for (var t = [], r = 0; r < e.length; ++r)
                            t.push(255 & e.charCodeAt(r));
                        return t
                    }
                    function j(e) {
                        return n.toByteArray(function(e) {
                            if ((e = (e = e.split("=")[0]).trim().replace(x, "")).length < 2)
                                return "";
                            for (; e.length % 4 != 0; )
                                e += "=";
                            return e
                        }(e))
                    }
                    function O(e, t, r, n) {
                        for (var i = 0; i < n && !(i + r >= t.length) && !(i >= e.length); ++i)
                            t[i + r] = e[i];
                        return i
                    }
                    function A(e, t) {
                        return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
                    }
                    var P = function() {
                        for (var e = "0123456789abcdef", t = Array(256), r = 0; r < 16; ++r)
                            for (var n = 16 * r, i = 0; i < 16; ++i)
                                t[n + i] = e[r] + e[i];
                        return t
                    }()
                },
                783: function(e, t) {
                    t.read = function(e, t, r, n, i) {
                        var s, o, a = 8 * i - n - 1, l = (1 << a) - 1, u = l >> 1, c = -7, h = r ? i - 1 : 0, d = r ? -1 : 1, f = e[t + h];
                        for (h += d,
                        s = f & (1 << -c) - 1,
                        f >>= -c,
                        c += a; c > 0; s = 256 * s + e[t + h],
                        h += d,
                        c -= 8)
                            ;
                        for (o = s & (1 << -c) - 1,
                        s >>= -c,
                        c += n; c > 0; o = 256 * o + e[t + h],
                        h += d,
                        c -= 8)
                            ;
                        if (0 === s)
                            s = 1 - u;
                        else {
                            if (s === l)
                                return o ? NaN : 1 / 0 * (f ? -1 : 1);
                            o += Math.pow(2, n),
                            s -= u
                        }
                        return (f ? -1 : 1) * o * Math.pow(2, s - n)
                    }
                    ,
                    t.write = function(e, t, r, n, i, s) {
                        var o, a, l, u = 8 * s - i - 1, c = (1 << u) - 1, h = c >> 1, d = 23 === i ? 5960464477539062e-23 : 0, f = n ? 0 : s - 1, p = n ? 1 : -1, g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                        for (isNaN(t = Math.abs(t)) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0,
                        o = c) : (o = Math.floor(Math.log(t) / Math.LN2),
                        t * (l = Math.pow(2, -o)) < 1 && (o--,
                        l *= 2),
                        o + h >= 1 ? t += d / l : t += d * Math.pow(2, 1 - h),
                        t * l >= 2 && (o++,
                        l /= 2),
                        o + h >= c ? (a = 0,
                        o = c) : o + h >= 1 ? (a = (t * l - 1) * Math.pow(2, i),
                        o += h) : (a = t * Math.pow(2, h - 1) * Math.pow(2, i),
                        o = 0)); i >= 8; e[r + f] = 255 & a,
                        f += p,
                        a /= 256,
                        i -= 8)
                            ;
                        for (o = o << i | a,
                        u += i; u > 0; e[r + f] = 255 & o,
                        f += p,
                        o /= 256,
                        u -= 8)
                            ;
                        e[r + f - p] |= 128 * g
                    }
                }
            }
              , r = {};
            function n(e) {
                var i = r[e];
                if (void 0 !== i)
                    return i.exports;
                var s = r[e] = {
                    exports: {}
                }
                  , o = !0;
                try {
                    t[e](s, s.exports, n),
                    o = !1
                } finally {
                    o && delete r[e]
                }
                return s.exports
            }
            n.ab = "//";
            var i = n(72);
            e.exports = i
        }()
    },
    7533: function() {},
    4544: function(e) {
        !function() {
            var t = {
                229: function(e) {
                    var t, r, n, i = e.exports = {};
                    function s() {
                        throw Error("setTimeout has not been defined")
                    }
                    function o() {
                        throw Error("clearTimeout has not been defined")
                    }
                    function a(e) {
                        if (t === setTimeout)
                            return setTimeout(e, 0);
                        if ((t === s || !t) && setTimeout)
                            return t = setTimeout,
                            setTimeout(e, 0);
                        try {
                            return t(e, 0)
                        } catch (r) {
                            try {
                                return t.call(null, e, 0)
                            } catch (r) {
                                return t.call(this, e, 0)
                            }
                        }
                    }
                    !function() {
                        try {
                            t = "function" == typeof setTimeout ? setTimeout : s
                        } catch (e) {
                            t = s
                        }
                        try {
                            r = "function" == typeof clearTimeout ? clearTimeout : o
                        } catch (e) {
                            r = o
                        }
                    }();
                    var l = []
                      , u = !1
                      , c = -1;
                    function h() {
                        u && n && (u = !1,
                        n.length ? l = n.concat(l) : c = -1,
                        l.length && d())
                    }
                    function d() {
                        if (!u) {
                            var e = a(h);
                            u = !0;
                            for (var t = l.length; t; ) {
                                for (n = l,
                                l = []; ++c < t; )
                                    n && n[c].run();
                                c = -1,
                                t = l.length
                            }
                            n = null,
                            u = !1,
                            function(e) {
                                if (r === clearTimeout)
                                    return clearTimeout(e);
                                if ((r === o || !r) && clearTimeout)
                                    return r = clearTimeout,
                                    clearTimeout(e);
                                try {
                                    r(e)
                                } catch (t) {
                                    try {
                                        return r.call(null, e)
                                    } catch (t) {
                                        return r.call(this, e)
                                    }
                                }
                            }(e)
                        }
                    }
                    function f(e, t) {
                        this.fun = e,
                        this.array = t
                    }
                    function p() {}
                    i.nextTick = function(e) {
                        var t = Array(arguments.length - 1);
                        if (arguments.length > 1)
                            for (var r = 1; r < arguments.length; r++)
                                t[r - 1] = arguments[r];
                        l.push(new f(e,t)),
                        1 !== l.length || u || a(d)
                    }
                    ,
                    f.prototype.run = function() {
                        this.fun.apply(null, this.array)
                    }
                    ,
                    i.title = "browser",
                    i.browser = !0,
                    i.env = {},
                    i.argv = [],
                    i.version = "",
                    i.versions = {},
                    i.on = p,
                    i.addListener = p,
                    i.once = p,
                    i.off = p,
                    i.removeListener = p,
                    i.removeAllListeners = p,
                    i.emit = p,
                    i.prependListener = p,
                    i.prependOnceListener = p,
                    i.listeners = function(e) {
                        return []
                    }
                    ,
                    i.binding = function(e) {
                        throw Error("process.binding is not supported")
                    }
                    ,
                    i.cwd = function() {
                        return "/"
                    }
                    ,
                    i.chdir = function(e) {
                        throw Error("process.chdir is not supported")
                    }
                    ,
                    i.umask = function() {
                        return 0
                    }
                }
            }
              , r = {};
            function n(e) {
                var i = r[e];
                if (void 0 !== i)
                    return i.exports;
                var s = r[e] = {
                    exports: {}
                }
                  , o = !0;
                try {
                    t[e](s, s.exports, n),
                    o = !1
                } finally {
                    o && delete r[e]
                }
                return s.exports
            }
            n.ab = "//";
            var i = n(229);
            e.exports = i
        }()
    },
    5498: function(e, t, r) {
        e.exports = r(2708)
    },
    5061: function(e, t, r) {
        "use strict";
        function n(e, t, {checkForDefaultPrevented: r=!0}={}) {
            return function(n) {
                if (e?.(n),
                !1 === r || !n.defaultPrevented)
                    return t?.(n)
            }
        }
        r.d(t, {
            M: function() {
                return n
            }
        })
    },
    668: function(e, t, r) {
        "use strict";
        r.d(t, {
            B: function() {
                return l
            }
        });
        var n = r(5271)
          , i = r(8468)
          , s = r(1224)
          , o = r(1557)
          , a = r(2676);
        function l(e) {
            let t = e + "CollectionProvider"
              , [r,l] = (0,
            i.b)(t)
              , [u,c] = r(t, {
                collectionRef: {
                    current: null
                },
                itemMap: new Map
            })
              , h = e => {
                let {scope: t, children: r} = e
                  , i = n.useRef(null)
                  , s = n.useRef(new Map).current;
                return (0,
                a.jsx)(u, {
                    scope: t,
                    itemMap: s,
                    collectionRef: i,
                    children: r
                })
            }
            ;
            h.displayName = t;
            let d = e + "CollectionSlot"
              , f = n.forwardRef( (e, t) => {
                let {scope: r, children: n} = e
                  , i = c(d, r)
                  , l = (0,
                s.e)(t, i.collectionRef);
                return (0,
                a.jsx)(o.g7, {
                    ref: l,
                    children: n
                })
            }
            );
            f.displayName = d;
            let p = e + "CollectionItemSlot"
              , g = "data-radix-collection-item"
              , m = n.forwardRef( (e, t) => {
                let {scope: r, children: i, ...l} = e
                  , u = n.useRef(null)
                  , h = (0,
                s.e)(t, u)
                  , d = c(p, r);
                return n.useEffect( () => (d.itemMap.set(u, {
                    ref: u,
                    ...l
                }),
                () => void d.itemMap.delete(u))),
                (0,
                a.jsx)(o.g7, {
                    [g]: "",
                    ref: h,
                    children: i
                })
            }
            );
            return m.displayName = p,
            [{
                Provider: h,
                Slot: f,
                ItemSlot: m
            }, function(t) {
                let r = c(e + "CollectionConsumer", t);
                return n.useCallback( () => {
                    let e = r.collectionRef.current;
                    if (!e)
                        return [];
                    let t = Array.from(e.querySelectorAll(`[${g}]`));
                    return Array.from(r.itemMap.values()).sort( (e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current))
                }
                , [r.collectionRef, r.itemMap])
            }
            , l]
        }
    },
    1224: function(e, t, r) {
        "use strict";
        r.d(t, {
            F: function() {
                return i
            },
            e: function() {
                return s
            }
        });
        var n = r(5271);
        function i(...e) {
            return t => e.forEach(e => {
                "function" == typeof e ? e(t) : null != e && (e.current = t)
            }
            )
        }
        function s(...e) {
            return n.useCallback(i(...e), e)
        }
    },
    8468: function(e, t, r) {
        "use strict";
        r.d(t, {
            b: function() {
                return s
            }
        });
        var n = r(5271)
          , i = r(2676);
        function s(e, t=[]) {
            let r = []
              , s = () => {
                let t = r.map(e => n.createContext(e));
                return function(r) {
                    let i = r?.[e] || t;
                    return n.useMemo( () => ({
                        [`__scope${e}`]: {
                            ...r,
                            [e]: i
                        }
                    }), [r, i])
                }
            }
            ;
            return s.scopeName = e,
            [function(t, s) {
                let o = n.createContext(s)
                  , a = r.length;
                function l(t) {
                    let {scope: r, children: s, ...l} = t
                      , u = r?.[e][a] || o
                      , c = n.useMemo( () => l, Object.values(l));
                    return (0,
                    i.jsx)(u.Provider, {
                        value: c,
                        children: s
                    })
                }
                return r = [...r, s],
                l.displayName = t + "Provider",
                [l, function(r, i) {
                    let l = i?.[e][a] || o
                      , u = n.useContext(l);
                    if (u)
                        return u;
                    if (void 0 !== s)
                        return s;
                    throw Error(`\`${r}\` must be used within \`${t}\``)
                }
                ]
            }
            , function(...e) {
                let t = e[0];
                if (1 === e.length)
                    return t;
                let r = () => {
                    let r = e.map(e => ({
                        useScope: e(),
                        scopeName: e.scopeName
                    }));
                    return function(e) {
                        let i = r.reduce( (t, {useScope: r, scopeName: n}) => {
                            let i = r(e)[`__scope${n}`];
                            return {
                                ...t,
                                ...i
                            }
                        }
                        , {});
                        return n.useMemo( () => ({
                            [`__scope${t.scopeName}`]: i
                        }), [i])
                    }
                }
                ;
                return r.scopeName = t.scopeName,
                r
            }(s, ...t)]
        }
    },
    9407: function(e, t, r) {
        "use strict";
        r.d(t, {
            b: function() {
                return o
            },
            k: function() {
                return s
            }
        });
        var n = r(5271)
          , i = r(2676);
        function s(e, t) {
            let r = n.createContext(t)
              , s = e => {
                let {children: t, ...s} = e
                  , o = n.useMemo( () => s, Object.values(s));
                return (0,
                i.jsx)(r.Provider, {
                    value: o,
                    children: t
                })
            }
            ;
            return s.displayName = e + "Provider",
            [s, function(i) {
                let s = n.useContext(r);
                if (s)
                    return s;
                if (void 0 !== t)
                    return t;
                throw Error(`\`${i}\` must be used within \`${e}\``)
            }
            ]
        }
        function o(e, t=[]) {
            let r = []
              , s = () => {
                let t = r.map(e => n.createContext(e));
                return function(r) {
                    let i = r?.[e] || t;
                    return n.useMemo( () => ({
                        [`__scope${e}`]: {
                            ...r,
                            [e]: i
                        }
                    }), [r, i])
                }
            }
            ;
            return s.scopeName = e,
            [function(t, s) {
                let o = n.createContext(s)
                  , a = r.length;
                r = [...r, s];
                let l = t => {
                    let {scope: r, children: s, ...l} = t
                      , u = r?.[e]?.[a] || o
                      , c = n.useMemo( () => l, Object.values(l));
                    return (0,
                    i.jsx)(u.Provider, {
                        value: c,
                        children: s
                    })
                }
                ;
                return l.displayName = t + "Provider",
                [l, function(r, i) {
                    let l = i?.[e]?.[a] || o
                      , u = n.useContext(l);
                    if (u)
                        return u;
                    if (void 0 !== s)
                        return s;
                    throw Error(`\`${r}\` must be used within \`${t}\``)
                }
                ]
            }
            , function(...e) {
                let t = e[0];
                if (1 === e.length)
                    return t;
                let r = () => {
                    let r = e.map(e => ({
                        useScope: e(),
                        scopeName: e.scopeName
                    }));
                    return function(e) {
                        let i = r.reduce( (t, {useScope: r, scopeName: n}) => {
                            let i = r(e)[`__scope${n}`];
                            return {
                                ...t,
                                ...i
                            }
                        }
                        , {});
                        return n.useMemo( () => ({
                            [`__scope${t.scopeName}`]: i
                        }), [i])
                    }
                }
                ;
                return r.scopeName = t.scopeName,
                r
            }(s, ...t)]
        }
    },
    1027: function(e, t, r) {
        "use strict";
        r.d(t, {
            I0: function() {
                return y
            },
            XB: function() {
                return d
            },
            fC: function() {
                return m
            }
        });
        var n, i = r(5271), s = r(5061), o = r(9939), a = r(1224), l = r(116), u = r(2676), c = "dismissableLayer.update", h = i.createContext({
            layers: new Set,
            layersWithOutsidePointerEventsDisabled: new Set,
            branches: new Set
        }), d = i.forwardRef( (e, t) => {
            let {disableOutsidePointerEvents: r=!1, onEscapeKeyDown: d, onPointerDownOutside: f, onFocusOutside: m, onInteractOutside: y, onDismiss: v, ...b} = e
              , w = i.useContext(h)
              , [_,k] = i.useState(null)
              , E = _?.ownerDocument ?? globalThis?.document
              , [,x] = i.useState({})
              , T = (0,
            a.e)(t, e => k(e))
              , S = Array.from(w.layers)
              , [j] = [...w.layersWithOutsidePointerEventsDisabled].slice(-1)
              , O = S.indexOf(j)
              , A = _ ? S.indexOf(_) : -1
              , P = w.layersWithOutsidePointerEventsDisabled.size > 0
              , C = A >= O
              , R = function(e, t=globalThis?.document) {
                let r = (0,
                l.W)(e)
                  , n = i.useRef(!1)
                  , s = i.useRef( () => {}
                );
                return i.useEffect( () => {
                    let e = e => {
                        if (e.target && !n.current) {
                            let n = function() {
                                g("dismissableLayer.pointerDownOutside", r, i, {
                                    discrete: !0
                                })
                            }
                              , i = {
                                originalEvent: e
                            };
                            "touch" === e.pointerType ? (t.removeEventListener("click", s.current),
                            s.current = n,
                            t.addEventListener("click", s.current, {
                                once: !0
                            })) : n()
                        } else
                            t.removeEventListener("click", s.current);
                        n.current = !1
                    }
                      , i = window.setTimeout( () => {
                        t.addEventListener("pointerdown", e)
                    }
                    , 0);
                    return () => {
                        window.clearTimeout(i),
                        t.removeEventListener("pointerdown", e),
                        t.removeEventListener("click", s.current)
                    }
                }
                , [t, r]),
                {
                    onPointerDownCapture: () => n.current = !0
                }
            }(e => {
                let t = e.target
                  , r = [...w.branches].some(e => e.contains(t));
                !C || r || (f?.(e),
                y?.(e),
                e.defaultPrevented || v?.())
            }
            , E)
              , I = function(e, t=globalThis?.document) {
                let r = (0,
                l.W)(e)
                  , n = i.useRef(!1);
                return i.useEffect( () => {
                    let e = e => {
                        e.target && !n.current && g("dismissableLayer.focusOutside", r, {
                            originalEvent: e
                        }, {
                            discrete: !1
                        })
                    }
                    ;
                    return t.addEventListener("focusin", e),
                    () => t.removeEventListener("focusin", e)
                }
                , [t, r]),
                {
                    onFocusCapture: () => n.current = !0,
                    onBlurCapture: () => n.current = !1
                }
            }(e => {
                let t = e.target;
                [...w.branches].some(e => e.contains(t)) || (m?.(e),
                y?.(e),
                e.defaultPrevented || v?.())
            }
            , E);
            return !function(e, t=globalThis?.document) {
                let r = (0,
                l.W)(e);
                i.useEffect( () => {
                    let e = e => {
                        "Escape" === e.key && r(e)
                    }
                    ;
                    return t.addEventListener("keydown", e, {
                        capture: !0
                    }),
                    () => t.removeEventListener("keydown", e, {
                        capture: !0
                    })
                }
                , [r, t])
            }(e => {
                A !== w.layers.size - 1 || (d?.(e),
                !e.defaultPrevented && v && (e.preventDefault(),
                v()))
            }
            , E),
            i.useEffect( () => {
                if (_)
                    return r && (0 === w.layersWithOutsidePointerEventsDisabled.size && (n = E.body.style.pointerEvents,
                    E.body.style.pointerEvents = "none"),
                    w.layersWithOutsidePointerEventsDisabled.add(_)),
                    w.layers.add(_),
                    p(),
                    () => {
                        r && 1 === w.layersWithOutsidePointerEventsDisabled.size && (E.body.style.pointerEvents = n)
                    }
            }
            , [_, E, r, w]),
            i.useEffect( () => () => {
                _ && (w.layers.delete(_),
                w.layersWithOutsidePointerEventsDisabled.delete(_),
                p())
            }
            , [_, w]),
            i.useEffect( () => {
                let e = () => x({});
                return document.addEventListener(c, e),
                () => document.removeEventListener(c, e)
            }
            , []),
            (0,
            u.jsx)(o.WV.div, {
                ...b,
                ref: T,
                style: {
                    pointerEvents: P ? C ? "auto" : "none" : void 0,
                    ...e.style
                },
                onFocusCapture: (0,
                s.M)(e.onFocusCapture, I.onFocusCapture),
                onBlurCapture: (0,
                s.M)(e.onBlurCapture, I.onBlurCapture),
                onPointerDownCapture: (0,
                s.M)(e.onPointerDownCapture, R.onPointerDownCapture)
            })
        }
        );
        d.displayName = "DismissableLayer";
        var f = i.forwardRef( (e, t) => {
            let r = i.useContext(h)
              , n = i.useRef(null)
              , s = (0,
            a.e)(t, n);
            return i.useEffect( () => {
                let e = n.current;
                if (e)
                    return r.branches.add(e),
                    () => {
                        r.branches.delete(e)
                    }
            }
            , [r.branches]),
            (0,
            u.jsx)(o.WV.div, {
                ...e,
                ref: s
            })
        }
        );
        function p() {
            let e = new CustomEvent(c);
            document.dispatchEvent(e)
        }
        function g(e, t, r, {discrete: n}) {
            let i = r.originalEvent.target
              , s = new CustomEvent(e,{
                bubbles: !1,
                cancelable: !0,
                detail: r
            });
            t && i.addEventListener(e, t, {
                once: !0
            }),
            n ? (0,
            o.jH)(i, s) : i.dispatchEvent(s)
        }
        f.displayName = "DismissableLayerBranch";
        var m = d
          , y = f
    },
    408: function(e, t, r) {
        "use strict";
        r.d(t, {
            h: function() {
                return l
            }
        });
        var n = r(5271)
          , i = r(967)
          , s = r(9939)
          , o = r(8722)
          , a = r(2676)
          , l = n.forwardRef( (e, t) => {
            let {container: r, ...l} = e
              , [u,c] = n.useState(!1);
            (0,
            o.b)( () => c(!0), []);
            let h = r || u && globalThis?.document?.body;
            return h ? i.createPortal((0,
            a.jsx)(s.WV.div, {
                ...l,
                ref: t
            }), h) : null
        }
        );
        l.displayName = "Portal"
    },
    8173: function(e, t, r) {
        "use strict";
        r.d(t, {
            z: function() {
                return o
            }
        });
        var n = r(5271)
          , i = r(1224)
          , s = r(8722)
          , o = e => {
            let t, r;
            let {present: o, children: l} = e
              , u = function(e) {
                var t, r;
                let[i,o] = n.useState()
                  , l = n.useRef({})
                  , u = n.useRef(e)
                  , c = n.useRef("none")
                  , [h,d] = (t = e ? "mounted" : "unmounted",
                r = {
                    mounted: {
                        UNMOUNT: "unmounted",
                        ANIMATION_OUT: "unmountSuspended"
                    },
                    unmountSuspended: {
                        MOUNT: "mounted",
                        ANIMATION_END: "unmounted"
                    },
                    unmounted: {
                        MOUNT: "mounted"
                    }
                },
                n.useReducer( (e, t) => r[e][t] ?? e, t));
                return n.useEffect( () => {
                    let e = a(l.current);
                    c.current = "mounted" === h ? e : "none"
                }
                , [h]),
                (0,
                s.b)( () => {
                    let t = l.current
                      , r = u.current;
                    if (r !== e) {
                        let n = c.current
                          , i = a(t);
                        e ? d("MOUNT") : "none" === i || t?.display === "none" ? d("UNMOUNT") : r && n !== i ? d("ANIMATION_OUT") : d("UNMOUNT"),
                        u.current = e
                    }
                }
                , [e, d]),
                (0,
                s.b)( () => {
                    if (i) {
                        let e;
                        let t = i.ownerDocument.defaultView ?? window
                          , r = r => {
                            let n = a(l.current).includes(r.animationName);
                            if (r.target === i && n && (d("ANIMATION_END"),
                            !u.current)) {
                                let r = i.style.animationFillMode;
                                i.style.animationFillMode = "forwards",
                                e = t.setTimeout( () => {
                                    "forwards" === i.style.animationFillMode && (i.style.animationFillMode = r)
                                }
                                )
                            }
                        }
                          , n = e => {
                            e.target === i && (c.current = a(l.current))
                        }
                        ;
                        return i.addEventListener("animationstart", n),
                        i.addEventListener("animationcancel", r),
                        i.addEventListener("animationend", r),
                        () => {
                            t.clearTimeout(e),
                            i.removeEventListener("animationstart", n),
                            i.removeEventListener("animationcancel", r),
                            i.removeEventListener("animationend", r)
                        }
                    }
                    d("ANIMATION_END")
                }
                , [i, d]),
                {
                    isPresent: ["mounted", "unmountSuspended"].includes(h),
                    ref: n.useCallback(e => {
                        e && (l.current = getComputedStyle(e)),
                        o(e)
                    }
                    , [])
                }
            }(o)
              , c = "function" == typeof l ? l({
                present: u.isPresent
            }) : n.Children.only(l)
              , h = (0,
            i.e)(u.ref, (t = Object.getOwnPropertyDescriptor(c.props, "ref")?.get) && "isReactWarning"in t && t.isReactWarning ? c.ref : (t = Object.getOwnPropertyDescriptor(c, "ref")?.get) && "isReactWarning"in t && t.isReactWarning ? c.props.ref : c.props.ref || c.ref);
            return "function" == typeof l || u.isPresent ? n.cloneElement(c, {
                ref: h
            }) : null
        }
        ;
        function a(e) {
            return e?.animationName || "none"
        }
        o.displayName = "Presence"
    },
    9939: function(e, t, r) {
        "use strict";
        r.d(t, {
            WV: function() {
                return a
            },
            jH: function() {
                return l
            }
        });
        var n = r(5271)
          , i = r(967)
          , s = r(1557)
          , o = r(2676)
          , a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce( (e, t) => {
            let r = n.forwardRef( (e, r) => {
                let {asChild: n, ...i} = e
                  , a = n ? s.g7 : t;
                return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0),
                (0,
                o.jsx)(a, {
                    ...i,
                    ref: r
                })
            }
            );
            return r.displayName = `Primitive.${t}`,
            {
                ...e,
                [t]: r
            }
        }
        , {});
        function l(e, t) {
            e && i.flushSync( () => e.dispatchEvent(t))
        }
    },
    1557: function(e, t, r) {
        "use strict";
        r.d(t, {
            A4: function() {
                return l
            },
            g7: function() {
                return o
            }
        });
        var n = r(5271)
          , i = r(1224)
          , s = r(2676)
          , o = n.forwardRef( (e, t) => {
            let {children: r, ...i} = e
              , o = n.Children.toArray(r)
              , l = o.find(u);
            if (l) {
                let e = l.props.children
                  , r = o.map(t => t !== l ? t : n.Children.count(e) > 1 ? n.Children.only(null) : n.isValidElement(e) ? e.props.children : null);
                return (0,
                s.jsx)(a, {
                    ...i,
                    ref: t,
                    children: n.isValidElement(e) ? n.cloneElement(e, void 0, r) : null
                })
            }
            return (0,
            s.jsx)(a, {
                ...i,
                ref: t,
                children: r
            })
        }
        );
        o.displayName = "Slot";
        var a = n.forwardRef( (e, t) => {
            let {children: r, ...s} = e;
            if (n.isValidElement(r)) {
                let e, o;
                let a = (e = Object.getOwnPropertyDescriptor(r.props, "ref")?.get) && "isReactWarning"in e && e.isReactWarning ? r.ref : (e = Object.getOwnPropertyDescriptor(r, "ref")?.get) && "isReactWarning"in e && e.isReactWarning ? r.props.ref : r.props.ref || r.ref;
                return n.cloneElement(r, {
                    ...function(e, t) {
                        let r = {
                            ...t
                        };
                        for (let n in t) {
                            let i = e[n]
                              , s = t[n];
                            /^on[A-Z]/.test(n) ? i && s ? r[n] = (...e) => {
                                s(...e),
                                i(...e)
                            }
                            : i && (r[n] = i) : "style" === n ? r[n] = {
                                ...i,
                                ...s
                            } : "className" === n && (r[n] = [i, s].filter(Boolean).join(" "))
                        }
                        return {
                            ...e,
                            ...r
                        }
                    }(s, r.props),
                    ref: t ? (0,
                    i.F)(t, a) : a
                })
            }
            return n.Children.count(r) > 1 ? n.Children.only(null) : null
        }
        );
        a.displayName = "SlotClone";
        var l = ({children: e}) => (0,
        s.jsx)(s.Fragment, {
            children: e
        });
        function u(e) {
            return n.isValidElement(e) && e.type === l
        }
    },
    116: function(e, t, r) {
        "use strict";
        r.d(t, {
            W: function() {
                return i
            }
        });
        var n = r(5271);
        function i(e) {
            let t = n.useRef(e);
            return n.useEffect( () => {
                t.current = e
            }
            ),
            n.useMemo( () => (...e) => t.current?.(...e), [])
        }
    },
    9945: function(e, t, r) {
        "use strict";
        r.d(t, {
            T: function() {
                return s
            }
        });
        var n = r(5271)
          , i = r(116);
        function s({prop: e, defaultProp: t, onChange: r= () => {}
        }) {
            let[s,o] = function({defaultProp: e, onChange: t}) {
                let r = n.useState(e)
                  , [s] = r
                  , o = n.useRef(s)
                  , a = (0,
                i.W)(t);
                return n.useEffect( () => {
                    o.current !== s && (a(s),
                    o.current = s)
                }
                , [s, o, a]),
                r
            }({
                defaultProp: t,
                onChange: r
            })
              , a = void 0 !== e
              , l = a ? e : s
              , u = (0,
            i.W)(r);
            return [l, n.useCallback(t => {
                if (a) {
                    let r = "function" == typeof t ? t(e) : t;
                    r !== e && u(r)
                } else
                    o(t)
            }
            , [a, e, o, u])]
        }
    },
    8722: function(e, t, r) {
        "use strict";
        r.d(t, {
            b: function() {
                return i
            }
        });
        var n = r(5271)
          , i = globalThis?.document ? n.useLayoutEffect : () => {}
    },
    867: function(e, t, r) {
        "use strict";
        r.d(t, {
            T: function() {
                return o
            },
            f: function() {
                return a
            }
        });
        var n = r(5271)
          , i = r(9939)
          , s = r(2676)
          , o = n.forwardRef( (e, t) => (0,
        s.jsx)(i.WV.span, {
            ...e,
            ref: t,
            style: {
                position: "absolute",
                border: 0,
                width: 1,
                height: 1,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                wordWrap: "normal",
                ...e.style
            }
        }));
        o.displayName = "VisuallyHidden";
        var a = o
    },
    2808: function(e, t, r) {
        "use strict";
        r.d(t, {
            j: function() {
                return s
            }
        });
        let n = e => "boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e
          , i = function() {
            for (var e, t, r = 0, n = ""; r < arguments.length; )
                (e = arguments[r++]) && (t = function e(t) {
                    var r, n, i = "";
                    if ("string" == typeof t || "number" == typeof t)
                        i += t;
                    else if ("object" == typeof t) {
                        if (Array.isArray(t))
                            for (r = 0; r < t.length; r++)
                                t[r] && (n = e(t[r])) && (i && (i += " "),
                                i += n);
                        else
                            for (r in t)
                                t[r] && (i && (i += " "),
                                i += r)
                    }
                    return i
                }(e)) && (n && (n += " "),
                n += t);
            return n
        }
          , s = (e, t) => r => {
            var s;
            if ((null == t ? void 0 : t.variants) == null)
                return i(e, null == r ? void 0 : r.class, null == r ? void 0 : r.className);
            let {variants: o, defaultVariants: a} = t
              , l = Object.keys(o).map(e => {
                let t = null == r ? void 0 : r[e]
                  , i = null == a ? void 0 : a[e];
                if (null === t)
                    return null;
                let s = n(t) || n(i);
                return o[e][s]
            }
            )
              , u = r && Object.entries(r).reduce( (e, t) => {
                let[r,n] = t;
                return void 0 === n || (e[r] = n),
                e
            }
            , {});
            return i(e, l, null == t ? void 0 : null === (s = t.compoundVariants) || void 0 === s ? void 0 : s.reduce( (e, t) => {
                let {class: r, className: n, ...i} = t;
                return Object.entries(i).every(e => {
                    let[t,r] = e;
                    return Array.isArray(r) ? r.includes({
                        ...a,
                        ...u
                    }[t]) : ({
                        ...a,
                        ...u
                    })[t] === r
                }
                ) ? [...e, r, n] : e
            }
            , []), null == r ? void 0 : r.class, null == r ? void 0 : r.className)
        }
    }
}, function(e) {
    var t = function(t) {
        return e(e.s = t)
    };
    e.O(0, [774, 179], function() {
        return t(3305),
        t(2708)
    }),
    _N_E = e.O()
}
]);