"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[5], {
    5065: function(t, e, i) {
        i.d(e, {
            M: function() {
                return l
            }
        });
        var n, r = i(5271), s = i(8722), o = (n || (n = i.t(r, 2)))["useId".toString()] || ( () => void 0), a = 0;
        function l(t) {
            let[e,i] = r.useState(o());
            return (0,
            s.b)( () => {
                t || i(t => t ?? String(a++))
            }
            , [t]),
            t || (e ? `radix-${e}` : "")
        }
    },
    7630: function(t, e, i) {
        i.d(e, {
            VY: function() {
                return q
            },
            aV: function() {
                return X
            },
            fC: function() {
                return G
            },
            xz: function() {
                return _
            }
        });
        var n = i(5271)
          , r = i(5061)
          , s = i(9407)
          , o = i(668)
          , a = i(1224)
          , l = i(8468)
          , u = i(5065)
          , h = i(9939)
          , c = i(116)
          , d = i(9945)
          , p = i(2676)
          , m = n.createContext(void 0);
        function f(t) {
            let e = n.useContext(m);
            return t || e || "ltr"
        }
        var v = "rovingFocusGroup.onEntryFocus"
          , g = {
            bubbles: !1,
            cancelable: !0
        }
          , y = "RovingFocusGroup"
          , [x,P,w] = (0,
        o.B)(y)
          , [b,T] = (0,
        l.b)(y, [w])
          , [S,A] = b(y)
          , E = n.forwardRef( (t, e) => (0,
        p.jsx)(x.Provider, {
            scope: t.__scopeRovingFocusGroup,
            children: (0,
            p.jsx)(x.Slot, {
                scope: t.__scopeRovingFocusGroup,
                children: (0,
                p.jsx)(M, {
                    ...t,
                    ref: e
                })
            })
        }));
        E.displayName = y;
        var M = n.forwardRef( (t, e) => {
            let {__scopeRovingFocusGroup: i, orientation: s, loop: o=!1, dir: l, currentTabStopId: u, defaultCurrentTabStopId: m, onCurrentTabStopIdChange: y, onEntryFocus: x, preventScrollOnEntryFocus: w=!1, ...b} = t
              , T = n.useRef(null)
              , A = (0,
            a.e)(e, T)
              , E = f(l)
              , [M=null,V] = (0,
            d.T)({
                prop: u,
                defaultProp: m,
                onChange: y
            })
              , [C,R] = n.useState(!1)
              , k = (0,
            c.W)(x)
              , j = P(i)
              , F = n.useRef(!1)
              , [L,O] = n.useState(0);
            return n.useEffect( () => {
                let t = T.current;
                if (t)
                    return t.addEventListener(v, k),
                    () => t.removeEventListener(v, k)
            }
            , [k]),
            (0,
            p.jsx)(S, {
                scope: i,
                orientation: s,
                dir: E,
                loop: o,
                currentTabStopId: M,
                onItemFocus: n.useCallback(t => V(t), [V]),
                onItemShiftTab: n.useCallback( () => R(!0), []),
                onFocusableItemAdd: n.useCallback( () => O(t => t + 1), []),
                onFocusableItemRemove: n.useCallback( () => O(t => t - 1), []),
                children: (0,
                p.jsx)(h.WV.div, {
                    tabIndex: C || 0 === L ? -1 : 0,
                    "data-orientation": s,
                    ...b,
                    ref: A,
                    style: {
                        outline: "none",
                        ...t.style
                    },
                    onMouseDown: (0,
                    r.M)(t.onMouseDown, () => {
                        F.current = !0
                    }
                    ),
                    onFocus: (0,
                    r.M)(t.onFocus, t => {
                        let e = !F.current;
                        if (t.target === t.currentTarget && e && !C) {
                            let e = new CustomEvent(v,g);
                            if (t.currentTarget.dispatchEvent(e),
                            !e.defaultPrevented) {
                                let t = j().filter(t => t.focusable);
                                D([t.find(t => t.active), t.find(t => t.id === M), ...t].filter(Boolean).map(t => t.ref.current), w)
                            }
                        }
                        F.current = !1
                    }
                    ),
                    onBlur: (0,
                    r.M)(t.onBlur, () => R(!1))
                })
            })
        }
        )
          , V = "RovingFocusGroupItem"
          , C = n.forwardRef( (t, e) => {
            let {__scopeRovingFocusGroup: i, focusable: s=!0, active: o=!1, tabStopId: a, ...l} = t
              , c = (0,
            u.M)()
              , d = a || c
              , m = A(V, i)
              , f = m.currentTabStopId === d
              , v = P(i)
              , {onFocusableItemAdd: g, onFocusableItemRemove: y} = m;
            return n.useEffect( () => {
                if (s)
                    return g(),
                    () => y()
            }
            , [s, g, y]),
            (0,
            p.jsx)(x.ItemSlot, {
                scope: i,
                id: d,
                focusable: s,
                active: o,
                children: (0,
                p.jsx)(h.WV.span, {
                    tabIndex: f ? 0 : -1,
                    "data-orientation": m.orientation,
                    ...l,
                    ref: e,
                    onMouseDown: (0,
                    r.M)(t.onMouseDown, t => {
                        s ? m.onItemFocus(d) : t.preventDefault()
                    }
                    ),
                    onFocus: (0,
                    r.M)(t.onFocus, () => m.onItemFocus(d)),
                    onKeyDown: (0,
                    r.M)(t.onKeyDown, t => {
                        if ("Tab" === t.key && t.shiftKey) {
                            m.onItemShiftTab();
                            return
                        }
                        if (t.target !== t.currentTarget)
                            return;
                        let e = function(t, e, i) {
                            var n;
                            let r = (n = t.key,
                            "rtl" !== i ? n : "ArrowLeft" === n ? "ArrowRight" : "ArrowRight" === n ? "ArrowLeft" : n);
                            if (!("vertical" === e && ["ArrowLeft", "ArrowRight"].includes(r)) && !("horizontal" === e && ["ArrowUp", "ArrowDown"].includes(r)))
                                return R[r]
                        }(t, m.orientation, m.dir);
                        if (void 0 !== e) {
                            if (t.metaKey || t.ctrlKey || t.altKey || t.shiftKey)
                                return;
                            t.preventDefault();
                            let r = v().filter(t => t.focusable).map(t => t.ref.current);
                            if ("last" === e)
                                r.reverse();
                            else if ("prev" === e || "next" === e) {
                                var i, n;
                                "prev" === e && r.reverse();
                                let s = r.indexOf(t.currentTarget);
                                r = m.loop ? (i = r,
                                n = s + 1,
                                i.map( (t, e) => i[(n + e) % i.length])) : r.slice(s + 1)
                            }
                            setTimeout( () => D(r))
                        }
                    }
                    )
                })
            })
        }
        );
        C.displayName = V;
        var R = {
            ArrowLeft: "prev",
            ArrowUp: "prev",
            ArrowRight: "next",
            ArrowDown: "next",
            PageUp: "first",
            Home: "first",
            PageDown: "last",
            End: "last"
        };
        function D(t, e=!1) {
            let i = document.activeElement;
            for (let n of t)
                if (n === i || (n.focus({
                    preventScroll: e
                }),
                document.activeElement !== i))
                    return
        }
        var k = i(8173)
          , j = "Tabs"
          , [F,L] = (0,
        s.b)(j, [T])
          , O = T()
          , [B,I] = F(j)
          , U = n.forwardRef( (t, e) => {
            let {__scopeTabs: i, value: n, onValueChange: r, defaultValue: s, orientation: o="horizontal", dir: a, activationMode: l="automatic", ...c} = t
              , m = f(a)
              , [v,g] = (0,
            d.T)({
                prop: n,
                onChange: r,
                defaultProp: s
            });
            return (0,
            p.jsx)(B, {
                scope: i,
                baseId: (0,
                u.M)(),
                value: v,
                onValueChange: g,
                orientation: o,
                dir: m,
                activationMode: l,
                children: (0,
                p.jsx)(h.WV.div, {
                    dir: m,
                    "data-orientation": o,
                    ...c,
                    ref: e
                })
            })
        }
        );
        U.displayName = j;
        var $ = "TabsList"
          , N = n.forwardRef( (t, e) => {
            let {__scopeTabs: i, loop: n=!0, ...r} = t
              , s = I($, i)
              , o = O(i);
            return (0,
            p.jsx)(E, {
                asChild: !0,
                ...o,
                orientation: s.orientation,
                dir: s.dir,
                loop: n,
                children: (0,
                p.jsx)(h.WV.div, {
                    role: "tablist",
                    "aria-orientation": s.orientation,
                    ...r,
                    ref: e
                })
            })
        }
        );
        N.displayName = $;
        var W = "TabsTrigger"
          , z = n.forwardRef( (t, e) => {
            let {__scopeTabs: i, value: n, disabled: s=!1, ...o} = t
              , a = I(W, i)
              , l = O(i)
              , u = Y(a.baseId, n)
              , c = Z(a.baseId, n)
              , d = n === a.value;
            return (0,
            p.jsx)(C, {
                asChild: !0,
                ...l,
                focusable: !s,
                active: d,
                children: (0,
                p.jsx)(h.WV.button, {
                    type: "button",
                    role: "tab",
                    "aria-selected": d,
                    "aria-controls": c,
                    "data-state": d ? "active" : "inactive",
                    "data-disabled": s ? "" : void 0,
                    disabled: s,
                    id: u,
                    ...o,
                    ref: e,
                    onMouseDown: (0,
                    r.M)(t.onMouseDown, t => {
                        s || 0 !== t.button || !1 !== t.ctrlKey ? t.preventDefault() : a.onValueChange(n)
                    }
                    ),
                    onKeyDown: (0,
                    r.M)(t.onKeyDown, t => {
                        [" ", "Enter"].includes(t.key) && a.onValueChange(n)
                    }
                    ),
                    onFocus: (0,
                    r.M)(t.onFocus, () => {
                        let t = "manual" !== a.activationMode;
                        d || s || !t || a.onValueChange(n)
                    }
                    )
                })
            })
        }
        );
        z.displayName = W;
        var K = "TabsContent"
          , H = n.forwardRef( (t, e) => {
            let {__scopeTabs: i, value: r, forceMount: s, children: o, ...a} = t
              , l = I(K, i)
              , u = Y(l.baseId, r)
              , c = Z(l.baseId, r)
              , d = r === l.value
              , m = n.useRef(d);
            return n.useEffect( () => {
                let t = requestAnimationFrame( () => m.current = !1);
                return () => cancelAnimationFrame(t)
            }
            , []),
            (0,
            p.jsx)(k.z, {
                present: s || d,
                children: ({present: i}) => (0,
                p.jsx)(h.WV.div, {
                    "data-state": d ? "active" : "inactive",
                    "data-orientation": l.orientation,
                    role: "tabpanel",
                    "aria-labelledby": u,
                    hidden: !i,
                    id: c,
                    tabIndex: 0,
                    ...a,
                    ref: e,
                    style: {
                        ...t.style,
                        animationDuration: m.current ? "0s" : void 0
                    },
                    children: i && o
                })
            })
        }
        );
        function Y(t, e) {
            return `${t}-trigger-${e}`
        }
        function Z(t, e) {
            return `${t}-content-${e}`
        }
        H.displayName = K;
        var G = U
          , X = N
          , _ = z
          , q = H
    },
    2852: function(t, e, i) {
        i.d(e, {
            M: function() {
                return g
            }
        });
        var n = i(2676)
          , r = i(5271)
          , s = i(6586)
          , o = i(3714)
          , a = i(2899);
        class l extends r.Component {
            getSnapshotBeforeUpdate(t) {
                let e = this.props.childRef.current;
                if (e && t.isPresent && !this.props.isPresent) {
                    let t = this.props.sizeRef.current;
                    t.height = e.offsetHeight || 0,
                    t.width = e.offsetWidth || 0,
                    t.top = e.offsetTop,
                    t.left = e.offsetLeft
                }
                return null
            }
            componentDidUpdate() {}
            render() {
                return this.props.children
            }
        }
        function u({children: t, isPresent: e}) {
            let i = (0,
            r.useId)()
              , s = (0,
            r.useRef)(null)
              , o = (0,
            r.useRef)({
                width: 0,
                height: 0,
                top: 0,
                left: 0
            })
              , {nonce: u} = (0,
            r.useContext)(a._);
            return (0,
            r.useInsertionEffect)( () => {
                let {width: t, height: n, top: r, left: a} = o.current;
                if (e || !s.current || !t || !n)
                    return;
                s.current.dataset.motionPopId = i;
                let l = document.createElement("style");
                return u && (l.nonce = u),
                document.head.appendChild(l),
                l.sheet && l.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${t}px !important;
            height: ${n}px !important;
            top: ${r}px !important;
            left: ${a}px !important;
          }
        `),
                () => {
                    document.head.removeChild(l)
                }
            }
            , [e]),
            (0,
            n.jsx)(l, {
                isPresent: e,
                childRef: s,
                sizeRef: o,
                children: r.cloneElement(t, {
                    ref: s
                })
            })
        }
        let h = ({children: t, initial: e, isPresent: i, onExitComplete: a, custom: l, presenceAffectsLayout: h, mode: d}) => {
            let p = (0,
            o.h)(c)
              , m = (0,
            r.useId)()
              , f = (0,
            r.useCallback)(t => {
                for (let e of (p.set(t, !0),
                p.values()))
                    if (!e)
                        return;
                a && a()
            }
            , [p, a])
              , v = (0,
            r.useMemo)( () => ({
                id: m,
                initial: e,
                isPresent: i,
                custom: l,
                onExitComplete: f,
                register: t => (p.set(t, !1),
                () => p.delete(t))
            }), h ? [Math.random(), f] : [i, f]);
            return (0,
            r.useMemo)( () => {
                p.forEach( (t, e) => p.set(e, !1))
            }
            , [i]),
            r.useEffect( () => {
                i || p.size || !a || a()
            }
            , [i]),
            "popLayout" === d && (t = (0,
            n.jsx)(u, {
                isPresent: i,
                children: t
            })),
            (0,
            n.jsx)(s.O.Provider, {
                value: v,
                children: t
            })
        }
        ;
        function c() {
            return new Map
        }
        var d = i(3623)
          , p = i(4807);
        let m = t => t.key || "";
        function f(t) {
            let e = [];
            return r.Children.forEach(t, t => {
                (0,
                r.isValidElement)(t) && e.push(t)
            }
            ),
            e
        }
        var v = i(3094);
        let g = ({children: t, exitBeforeEnter: e, custom: i, initial: s=!0, onExitComplete: a, presenceAffectsLayout: l=!0, mode: u="sync"}) => {
            (0,
            p.k)(!e, "Replace exitBeforeEnter with mode='wait'");
            let c = (0,
            r.useMemo)( () => f(t), [t])
              , g = c.map(m)
              , y = (0,
            r.useRef)(!0)
              , x = (0,
            r.useRef)(c)
              , P = (0,
            o.h)( () => new Map)
              , [w,b] = (0,
            r.useState)(c)
              , [T,S] = (0,
            r.useState)(c);
            (0,
            v.L)( () => {
                y.current = !1,
                x.current = c;
                for (let t = 0; t < T.length; t++) {
                    let e = m(T[t]);
                    g.includes(e) ? P.delete(e) : !0 !== P.get(e) && P.set(e, !1)
                }
            }
            , [T, g.length, g.join("-")]);
            let A = [];
            if (c !== w) {
                let t = [...c];
                for (let e = 0; e < T.length; e++) {
                    let i = T[e]
                      , n = m(i);
                    g.includes(n) || (t.splice(e, 0, i),
                    A.push(i))
                }
                "wait" === u && A.length && (t = A),
                S(f(t)),
                b(c);
                return
            }
            let {forceRender: E} = (0,
            r.useContext)(d.p);
            return (0,
            n.jsx)(n.Fragment, {
                children: T.map(t => {
                    let e = m(t)
                      , r = c === T || g.includes(e);
                    return (0,
                    n.jsx)(h, {
                        isPresent: r,
                        initial: (!y.current || !!s) && void 0,
                        custom: r ? void 0 : i,
                        presenceAffectsLayout: l,
                        mode: u,
                        onExitComplete: r ? void 0 : () => {
                            if (!P.has(e))
                                return;
                            P.set(e, !0);
                            let t = !0;
                            P.forEach(e => {
                                e || (t = !1)
                            }
                            ),
                            t && (null == E || E(),
                            S(x.current),
                            a && a())
                        }
                        ,
                        children: t
                    }, e)
                }
                )
            })
        }
    },
    3623: function(t, e, i) {
        i.d(e, {
            p: function() {
                return n
            }
        });
        let n = (0,
        i(5271).createContext)({})
    },
    2899: function(t, e, i) {
        i.d(e, {
            _: function() {
                return n
            }
        });
        let n = (0,
        i(5271).createContext)({
            transformPagePoint: t => t,
            isStatic: !1,
            reducedMotion: "never"
        })
    },
    6586: function(t, e, i) {
        i.d(e, {
            O: function() {
                return n
            }
        });
        let n = (0,
        i(5271).createContext)(null)
    },
    4373: function(t, e, i) {
        let n;
        function r(t) {
            return null !== t && "object" == typeof t && "function" == typeof t.start
        }
        i.d(e, {
            E: function() {
                return sl
            }
        });
        let s = t => Array.isArray(t);
        function o(t, e) {
            if (!Array.isArray(e))
                return !1;
            let i = e.length;
            if (i !== t.length)
                return !1;
            for (let n = 0; n < i; n++)
                if (e[n] !== t[n])
                    return !1;
            return !0
        }
        function a(t) {
            return "string" == typeof t || Array.isArray(t)
        }
        function l(t) {
            let e = [{}, {}];
            return null == t || t.values.forEach( (t, i) => {
                e[0][i] = t.get(),
                e[1][i] = t.getVelocity()
            }
            ),
            e
        }
        function u(t, e, i, n) {
            if ("function" == typeof e) {
                let[r,s] = l(n);
                e = e(void 0 !== i ? i : t.custom, r, s)
            }
            if ("string" == typeof e && (e = t.variants && t.variants[e]),
            "function" == typeof e) {
                let[r,s] = l(n);
                e = e(void 0 !== i ? i : t.custom, r, s)
            }
            return e
        }
        function h(t, e, i) {
            let n = t.getProps();
            return u(n, e, void 0 !== i ? i : n.custom, t)
        }
        let c = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
          , d = ["initial", ...c]
          , p = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
          , m = new Set(p)
          , f = t => 1e3 * t
          , v = t => t / 1e3
          , g = {
            type: "spring",
            stiffness: 500,
            damping: 25,
            restSpeed: 10
        }
          , y = t => ({
            type: "spring",
            stiffness: 550,
            damping: 0 === t ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10
        })
          , x = {
            type: "keyframes",
            duration: .8
        }
          , P = {
            type: "keyframes",
            ease: [.25, .1, .35, 1],
            duration: .3
        }
          , w = (t, {keyframes: e}) => e.length > 2 ? x : m.has(t) ? t.startsWith("scale") ? y(e[1]) : g : P;
        function b(t, e) {
            return t ? t[e] || t.default || t : void 0
        }
        let T = {
            skipAnimations: !1,
            useManualTiming: !1
        }
          , S = {
            current: !1
        }
          , A = t => null !== t;
        function E(t, {repeat: e, repeatType: i="loop"}, n) {
            let r = t.filter(A)
              , s = e && "loop" !== i && e % 2 == 1 ? 0 : r.length - 1;
            return s && void 0 !== n ? n : r[s]
        }
        var M, V, C, R = i(5953);
        let D = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"];
        function k(t, e) {
            let i = !1
              , n = !0
              , r = {
                delta: 0,
                timestamp: 0,
                isProcessing: !1
            }
              , s = () => i = !0
              , o = D.reduce( (t, e) => (t[e] = function(t) {
                let e = new Set
                  , i = new Set
                  , n = !1
                  , r = !1
                  , s = new WeakSet
                  , o = {
                    delta: 0,
                    timestamp: 0,
                    isProcessing: !1
                };
                function a(e) {
                    s.has(e) && (l.schedule(e),
                    t()),
                    e(o)
                }
                let l = {
                    schedule: (t, r=!1, o=!1) => {
                        let a = o && n ? e : i;
                        return r && s.add(t),
                        a.has(t) || a.add(t),
                        t
                    }
                    ,
                    cancel: t => {
                        i.delete(t),
                        s.delete(t)
                    }
                    ,
                    process: t => {
                        if (o = t,
                        n) {
                            r = !0;
                            return
                        }
                        n = !0,
                        [e,i] = [i, e],
                        i.clear(),
                        e.forEach(a),
                        n = !1,
                        r && (r = !1,
                        l.process(t))
                    }
                };
                return l
            }(s),
            t), {})
              , {read: a, resolveKeyframes: l, update: u, preRender: h, render: c, postRender: d} = o
              , p = () => {
                let s = T.useManualTiming ? r.timestamp : performance.now();
                i = !1,
                r.delta = n ? 1e3 / 60 : Math.max(Math.min(s - r.timestamp, 40), 1),
                r.timestamp = s,
                r.isProcessing = !0,
                a.process(r),
                l.process(r),
                u.process(r),
                h.process(r),
                c.process(r),
                d.process(r),
                r.isProcessing = !1,
                i && e && (n = !1,
                t(p))
            }
              , m = () => {
                i = !0,
                n = !0,
                r.isProcessing || t(p)
            }
            ;
            return {
                schedule: D.reduce( (t, e) => {
                    let n = o[e];
                    return t[e] = (t, e=!1, r=!1) => (i || m(),
                    n.schedule(t, e, r)),
                    t
                }
                , {}),
                cancel: t => {
                    for (let e = 0; e < D.length; e++)
                        o[D[e]].cancel(t)
                }
                ,
                state: r,
                steps: o
            }
        }
        let {schedule: j, cancel: F, state: L, steps: O} = k("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : R.Z, !0)
          , B = (t, e, i) => (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
        function I(t, e, i, n) {
            if (t === e && i === n)
                return R.Z;
            let r = e => (function(t, e, i, n, r) {
                let s, o;
                let a = 0;
                do
                    (s = B(o = e + (i - e) / 2, n, r) - t) > 0 ? i = o : e = o;
                while (Math.abs(s) > 1e-7 && ++a < 12);
                return o
            }
            )(e, 0, 1, t, i);
            return t => 0 === t || 1 === t ? t : B(r(t), e, n)
        }
        let U = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
          , $ = t => e => 1 - t(1 - e)
          , N = I(.33, 1.53, .69, .99)
          , W = $(N)
          , z = U(W)
          , K = t => (t *= 2) < 1 ? .5 * W(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
          , H = t => 1 - Math.sin(Math.acos(t))
          , Y = $(H)
          , Z = U(H)
          , G = t => /^0[^.\s]+$/u.test(t);
        var X = i(4807);
        let _ = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t)
          , q = t => e => "string" == typeof e && e.startsWith(t)
          , J = q("--")
          , Q = q("var(--")
          , tt = t => !!Q(t) && te.test(t.split("/*")[0].trim())
          , te = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
          , ti = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
          , tn = (t, e, i) => i > e ? e : i < t ? t : i
          , tr = {
            test: t => "number" == typeof t,
            parse: parseFloat,
            transform: t => t
        }
          , ts = {
            ...tr,
            transform: t => tn(0, 1, t)
        }
          , to = {
            ...tr,
            default: 1
        }
          , ta = t => ({
            test: e => "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
            parse: parseFloat,
            transform: e => `${e}${t}`
        })
          , tl = ta("deg")
          , tu = ta("%")
          , th = ta("px")
          , tc = ta("vh")
          , td = ta("vw")
          , tp = {
            ...tu,
            parse: t => tu.parse(t) / 100,
            transform: t => tu.transform(100 * t)
        }
          , tm = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"])
          , tf = t => t === tr || t === th
          , tv = (t, e) => parseFloat(t.split(", ")[e])
          , tg = (t, e) => (i, {transform: n}) => {
            if ("none" === n || !n)
                return 0;
            let r = n.match(/^matrix3d\((.+)\)$/u);
            if (r)
                return tv(r[1], e);
            {
                let e = n.match(/^matrix\((.+)\)$/u);
                return e ? tv(e[1], t) : 0
            }
        }
          , ty = new Set(["x", "y", "z"])
          , tx = p.filter(t => !ty.has(t))
          , tP = {
            width: ({x: t}, {paddingLeft: e="0", paddingRight: i="0"}) => t.max - t.min - parseFloat(e) - parseFloat(i),
            height: ({y: t}, {paddingTop: e="0", paddingBottom: i="0"}) => t.max - t.min - parseFloat(e) - parseFloat(i),
            top: (t, {top: e}) => parseFloat(e),
            left: (t, {left: e}) => parseFloat(e),
            bottom: ({y: t}, {top: e}) => parseFloat(e) + (t.max - t.min),
            right: ({x: t}, {left: e}) => parseFloat(e) + (t.max - t.min),
            x: tg(4, 13),
            y: tg(5, 14)
        };
        tP.translateX = tP.x,
        tP.translateY = tP.y;
        let tw = t => e => e.test(t)
          , tb = [tr, th, tu, tl, td, tc, {
            test: t => "auto" === t,
            parse: t => t
        }]
          , tT = t => tb.find(tw(t))
          , tS = new Set
          , tA = !1
          , tE = !1;
        function tM() {
            if (tE) {
                let t = Array.from(tS).filter(t => t.needsMeasurement)
                  , e = new Set(t.map(t => t.element))
                  , i = new Map;
                e.forEach(t => {
                    let e = function(t) {
                        let e = [];
                        return tx.forEach(i => {
                            let n = t.getValue(i);
                            void 0 !== n && (e.push([i, n.get()]),
                            n.set(i.startsWith("scale") ? 1 : 0))
                        }
                        ),
                        e
                    }(t);
                    e.length && (i.set(t, e),
                    t.render())
                }
                ),
                t.forEach(t => t.measureInitialState()),
                e.forEach(t => {
                    t.render();
                    let e = i.get(t);
                    e && e.forEach( ([e,i]) => {
                        var n;
                        null === (n = t.getValue(e)) || void 0 === n || n.set(i)
                    }
                    )
                }
                ),
                t.forEach(t => t.measureEndState()),
                t.forEach(t => {
                    void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY)
                }
                )
            }
            tE = !1,
            tA = !1,
            tS.forEach(t => t.complete()),
            tS.clear()
        }
        function tV() {
            tS.forEach(t => {
                t.readKeyframes(),
                t.needsMeasurement && (tE = !0)
            }
            )
        }
        class tC {
            constructor(t, e, i, n, r, s=!1) {
                this.isComplete = !1,
                this.isAsync = !1,
                this.needsMeasurement = !1,
                this.isScheduled = !1,
                this.unresolvedKeyframes = [...t],
                this.onComplete = e,
                this.name = i,
                this.motionValue = n,
                this.element = r,
                this.isAsync = s
            }
            scheduleResolve() {
                this.isScheduled = !0,
                this.isAsync ? (tS.add(this),
                tA || (tA = !0,
                j.read(tV),
                j.resolveKeyframes(tM))) : (this.readKeyframes(),
                this.complete())
            }
            readKeyframes() {
                let {unresolvedKeyframes: t, name: e, element: i, motionValue: n} = this;
                for (let r = 0; r < t.length; r++)
                    if (null === t[r]) {
                        if (0 === r) {
                            let r = null == n ? void 0 : n.get()
                              , s = t[t.length - 1];
                            if (void 0 !== r)
                                t[0] = r;
                            else if (i && e) {
                                let n = i.readValue(e, s);
                                null != n && (t[0] = n)
                            }
                            void 0 === t[0] && (t[0] = s),
                            n && void 0 === r && n.set(t[0])
                        } else
                            t[r] = t[r - 1]
                    }
            }
            setFinalKeyframe() {}
            measureInitialState() {}
            renderEndStyles() {}
            measureEndState() {}
            complete() {
                this.isComplete = !0,
                this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
                tS.delete(this)
            }
            cancel() {
                this.isComplete || (this.isScheduled = !1,
                tS.delete(this))
            }
            resume() {
                this.isComplete || this.scheduleResolve()
            }
        }
        let tR = t => Math.round(1e5 * t) / 1e5
          , tD = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu
          , tk = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
          , tj = (t, e) => i => !!("string" == typeof i && tk.test(i) && i.startsWith(t) || e && null != i && Object.prototype.hasOwnProperty.call(i, e))
          , tF = (t, e, i) => n => {
            if ("string" != typeof n)
                return n;
            let[r,s,o,a] = n.match(tD);
            return {
                [t]: parseFloat(r),
                [e]: parseFloat(s),
                [i]: parseFloat(o),
                alpha: void 0 !== a ? parseFloat(a) : 1
            }
        }
          , tL = t => tn(0, 255, t)
          , tO = {
            ...tr,
            transform: t => Math.round(tL(t))
        }
          , tB = {
            test: tj("rgb", "red"),
            parse: tF("red", "green", "blue"),
            transform: ({red: t, green: e, blue: i, alpha: n=1}) => "rgba(" + tO.transform(t) + ", " + tO.transform(e) + ", " + tO.transform(i) + ", " + tR(ts.transform(n)) + ")"
        }
          , tI = {
            test: tj("#"),
            parse: function(t) {
                let e = ""
                  , i = ""
                  , n = ""
                  , r = "";
                return t.length > 5 ? (e = t.substring(1, 3),
                i = t.substring(3, 5),
                n = t.substring(5, 7),
                r = t.substring(7, 9)) : (e = t.substring(1, 2),
                i = t.substring(2, 3),
                n = t.substring(3, 4),
                r = t.substring(4, 5),
                e += e,
                i += i,
                n += n,
                r += r),
                {
                    red: parseInt(e, 16),
                    green: parseInt(i, 16),
                    blue: parseInt(n, 16),
                    alpha: r ? parseInt(r, 16) / 255 : 1
                }
            },
            transform: tB.transform
        }
          , tU = {
            test: tj("hsl", "hue"),
            parse: tF("hue", "saturation", "lightness"),
            transform: ({hue: t, saturation: e, lightness: i, alpha: n=1}) => "hsla(" + Math.round(t) + ", " + tu.transform(tR(e)) + ", " + tu.transform(tR(i)) + ", " + tR(ts.transform(n)) + ")"
        }
          , t$ = {
            test: t => tB.test(t) || tI.test(t) || tU.test(t),
            parse: t => tB.test(t) ? tB.parse(t) : tU.test(t) ? tU.parse(t) : tI.parse(t),
            transform: t => "string" == typeof t ? t : t.hasOwnProperty("red") ? tB.transform(t) : tU.transform(t)
        }
          , tN = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu
          , tW = "number"
          , tz = "color"
          , tK = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
        function tH(t) {
            let e = t.toString()
              , i = []
              , n = {
                color: [],
                number: [],
                var: []
            }
              , r = []
              , s = 0
              , o = e.replace(tK, t => (t$.test(t) ? (n.color.push(s),
            r.push(tz),
            i.push(t$.parse(t))) : t.startsWith("var(") ? (n.var.push(s),
            r.push("var"),
            i.push(t)) : (n.number.push(s),
            r.push(tW),
            i.push(parseFloat(t))),
            ++s,
            "${}")).split("${}");
            return {
                values: i,
                split: o,
                indexes: n,
                types: r
            }
        }
        function tY(t) {
            return tH(t).values
        }
        function tZ(t) {
            let {split: e, types: i} = tH(t)
              , n = e.length;
            return t => {
                let r = "";
                for (let s = 0; s < n; s++)
                    if (r += e[s],
                    void 0 !== t[s]) {
                        let e = i[s];
                        e === tW ? r += tR(t[s]) : e === tz ? r += t$.transform(t[s]) : r += t[s]
                    }
                return r
            }
        }
        let tG = t => "number" == typeof t ? 0 : t
          , tX = {
            test: function(t) {
                var e, i;
                return isNaN(t) && "string" == typeof t && ((null === (e = t.match(tD)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (i = t.match(tN)) || void 0 === i ? void 0 : i.length) || 0) > 0
            },
            parse: tY,
            createTransformer: tZ,
            getAnimatableNone: function(t) {
                let e = tY(t);
                return tZ(t)(e.map(tG))
            }
        }
          , t_ = new Set(["brightness", "contrast", "saturate", "opacity"]);
        function tq(t) {
            let[e,i] = t.slice(0, -1).split("(");
            if ("drop-shadow" === e)
                return t;
            let[n] = i.match(tD) || [];
            if (!n)
                return t;
            let r = i.replace(n, "")
              , s = t_.has(e) ? 1 : 0;
            return n !== i && (s *= 100),
            e + "(" + s + r + ")"
        }
        let tJ = /\b([a-z-]*)\(.*?\)/gu
          , tQ = {
            ...tX,
            getAnimatableNone: t => {
                let e = t.match(tJ);
                return e ? e.map(tq).join(" ") : t
            }
        }
          , t0 = {
            ...tr,
            transform: Math.round
        }
          , t1 = {
            borderWidth: th,
            borderTopWidth: th,
            borderRightWidth: th,
            borderBottomWidth: th,
            borderLeftWidth: th,
            borderRadius: th,
            radius: th,
            borderTopLeftRadius: th,
            borderTopRightRadius: th,
            borderBottomRightRadius: th,
            borderBottomLeftRadius: th,
            width: th,
            maxWidth: th,
            height: th,
            maxHeight: th,
            top: th,
            right: th,
            bottom: th,
            left: th,
            padding: th,
            paddingTop: th,
            paddingRight: th,
            paddingBottom: th,
            paddingLeft: th,
            margin: th,
            marginTop: th,
            marginRight: th,
            marginBottom: th,
            marginLeft: th,
            backgroundPositionX: th,
            backgroundPositionY: th,
            rotate: tl,
            rotateX: tl,
            rotateY: tl,
            rotateZ: tl,
            scale: to,
            scaleX: to,
            scaleY: to,
            scaleZ: to,
            skew: tl,
            skewX: tl,
            skewY: tl,
            distance: th,
            translateX: th,
            translateY: th,
            translateZ: th,
            x: th,
            y: th,
            z: th,
            perspective: th,
            transformPerspective: th,
            opacity: ts,
            originX: tp,
            originY: tp,
            originZ: th,
            zIndex: t0,
            size: th,
            fillOpacity: ts,
            strokeOpacity: ts,
            numOctaves: t0
        }
          , t5 = {
            ...t1,
            color: t$,
            backgroundColor: t$,
            outlineColor: t$,
            fill: t$,
            stroke: t$,
            borderColor: t$,
            borderTopColor: t$,
            borderRightColor: t$,
            borderBottomColor: t$,
            borderLeftColor: t$,
            filter: tQ,
            WebkitFilter: tQ
        }
          , t2 = t => t5[t];
        function t3(t, e) {
            let i = t2(t);
            return i !== tQ && (i = tX),
            i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        }
        let t9 = new Set(["auto", "none", "0"]);
        class t6 extends tC {
            constructor(t, e, i, n, r) {
                super(t, e, i, n, r, !0)
            }
            readKeyframes() {
                let {unresolvedKeyframes: t, element: e, name: i} = this;
                if (!e || !e.current)
                    return;
                super.readKeyframes();
                for (let i = 0; i < t.length; i++) {
                    let n = t[i];
                    if ("string" == typeof n && tt(n = n.trim())) {
                        let r = function t(e, i, n=1) {
                            (0,
                            X.k)(n <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
                            let[r,s] = function(t) {
                                let e = ti.exec(t);
                                if (!e)
                                    return [, ];
                                let[,i,n,r] = e;
                                return [`--${null != i ? i : n}`, r]
                            }(e);
                            if (!r)
                                return;
                            let o = window.getComputedStyle(i).getPropertyValue(r);
                            if (o) {
                                let t = o.trim();
                                return _(t) ? parseFloat(t) : t
                            }
                            return tt(s) ? t(s, i, n + 1) : s
                        }(n, e.current);
                        void 0 !== r && (t[i] = r),
                        i === t.length - 1 && (this.finalKeyframe = n)
                    }
                }
                if (this.resolveNoneKeyframes(),
                !tm.has(i) || 2 !== t.length)
                    return;
                let[n,r] = t
                  , s = tT(n)
                  , o = tT(r);
                if (s !== o) {
                    if (tf(s) && tf(o))
                        for (let e = 0; e < t.length; e++) {
                            let i = t[e];
                            "string" == typeof i && (t[e] = parseFloat(i))
                        }
                    else
                        this.needsMeasurement = !0
                }
            }
            resolveNoneKeyframes() {
                let {unresolvedKeyframes: t, name: e} = this
                  , i = [];
                for (let e = 0; e < t.length; e++) {
                    var n;
                    ("number" == typeof (n = t[e]) ? 0 === n : null === n || "none" === n || "0" === n || G(n)) && i.push(e)
                }
                i.length && function(t, e, i) {
                    let n, r = 0;
                    for (; r < t.length && !n; ) {
                        let e = t[r];
                        "string" == typeof e && !t9.has(e) && tH(e).values.length && (n = t[r]),
                        r++
                    }
                    if (n && i)
                        for (let r of e)
                            t[r] = t3(i, n)
                }(t, i, e)
            }
            measureInitialState() {
                let {element: t, unresolvedKeyframes: e, name: i} = this;
                if (!t || !t.current)
                    return;
                "height" === i && (this.suspendedScrollY = window.pageYOffset),
                this.measuredOrigin = tP[i](t.measureViewportBox(), window.getComputedStyle(t.current)),
                e[0] = this.measuredOrigin;
                let n = e[e.length - 1];
                void 0 !== n && t.getValue(i, n).jump(n, !1)
            }
            measureEndState() {
                var t;
                let {element: e, name: i, unresolvedKeyframes: n} = this;
                if (!e || !e.current)
                    return;
                let r = e.getValue(i);
                r && r.jump(this.measuredOrigin, !1);
                let s = n.length - 1
                  , o = n[s];
                n[s] = tP[i](e.measureViewportBox(), window.getComputedStyle(e.current)),
                null !== o && void 0 === this.finalKeyframe && (this.finalKeyframe = o),
                (null === (t = this.removedTransforms) || void 0 === t ? void 0 : t.length) && this.removedTransforms.forEach( ([t,i]) => {
                    e.getValue(t).set(i)
                }
                ),
                this.resolveNoneKeyframes()
            }
        }
        function t4(t) {
            return "function" == typeof t
        }
        function t7() {
            n = void 0
        }
        let t8 = {
            now: () => (void 0 === n && t8.set(L.isProcessing || T.useManualTiming ? L.timestamp : performance.now()),
            n),
            set: t => {
                n = t,
                queueMicrotask(t7)
            }
        }
          , et = (t, e) => "zIndex" !== e && !!("number" == typeof t || Array.isArray(t) || "string" == typeof t && (tX.test(t) || "0" === t) && !t.startsWith("url("));
        class ee {
            constructor({autoplay: t=!0, delay: e=0, type: i="keyframes", repeat: n=0, repeatDelay: r=0, repeatType: s="loop", ...o}) {
                this.isStopped = !1,
                this.hasAttemptedResolve = !1,
                this.createdAt = t8.now(),
                this.options = {
                    autoplay: t,
                    delay: e,
                    type: i,
                    repeat: n,
                    repeatDelay: r,
                    repeatType: s,
                    ...o
                },
                this.updateFinishedPromise()
            }
            calcStartTime() {
                return this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt
            }
            get resolved() {
                return this._resolved || this.hasAttemptedResolve || (tV(),
                tM()),
                this._resolved
            }
            onKeyframesResolved(t, e) {
                this.resolvedAt = t8.now(),
                this.hasAttemptedResolve = !0;
                let {name: i, type: n, velocity: r, delay: s, onComplete: o, onUpdate: a, isGenerator: l} = this.options;
                if (!l && !function(t, e, i, n) {
                    let r = t[0];
                    if (null === r)
                        return !1;
                    if ("display" === e || "visibility" === e)
                        return !0;
                    let s = t[t.length - 1]
                      , o = et(r, e)
                      , a = et(s, e);
                    return (0,
                    X.K)(o === a, `You are trying to animate ${e} from "${r}" to "${s}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${s} via the \`style\` property.`),
                    !!o && !!a && (function(t) {
                        let e = t[0];
                        if (1 === t.length)
                            return !0;
                        for (let i = 0; i < t.length; i++)
                            if (t[i] !== e)
                                return !0
                    }(t) || ("spring" === i || t4(i)) && n)
                }(t, i, n, r)) {
                    if (S.current || !s) {
                        null == a || a(E(t, this.options, e)),
                        null == o || o(),
                        this.resolveFinishedPromise();
                        return
                    }
                    this.options.duration = 0
                }
                let u = this.initPlayback(t, e);
                !1 !== u && (this._resolved = {
                    keyframes: t,
                    finalKeyframe: e,
                    ...u
                },
                this.onPostResolved())
            }
            onPostResolved() {}
            then(t, e) {
                return this.currentFinishedPromise.then(t, e)
            }
            updateFinishedPromise() {
                this.currentFinishedPromise = new Promise(t => {
                    this.resolveFinishedPromise = t
                }
                )
            }
        }
        function ei(t, e, i) {
            var n, r;
            let s = Math.max(e - 5, 0);
            return n = i - t(s),
            (r = e - s) ? 1e3 / r * n : 0
        }
        function en(t, e) {
            return t * Math.sqrt(1 - e * e)
        }
        let er = ["duration", "bounce"]
          , es = ["stiffness", "damping", "mass"];
        function eo(t, e) {
            return e.some(e => void 0 !== t[e])
        }
        function ea({keyframes: t, restDelta: e, restSpeed: i, ...n}) {
            let r;
            let s = t[0]
              , o = t[t.length - 1]
              , a = {
                done: !1,
                value: s
            }
              , {stiffness: l, damping: u, mass: h, duration: c, velocity: d, isResolvedFromDuration: p} = function(t) {
                let e = {
                    velocity: 0,
                    stiffness: 100,
                    damping: 10,
                    mass: 1,
                    isResolvedFromDuration: !1,
                    ...t
                };
                if (!eo(t, es) && eo(t, er)) {
                    let i = function({duration: t=800, bounce: e=.25, velocity: i=0, mass: n=1}) {
                        let r, s;
                        (0,
                        X.K)(t <= f(10), "Spring duration must be 10 seconds or less");
                        let o = 1 - e;
                        o = tn(.05, 1, o),
                        t = tn(.01, 10, v(t)),
                        o < 1 ? (r = e => {
                            let n = e * o
                              , r = n * t;
                            return .001 - (n - i) / en(e, o) * Math.exp(-r)
                        }
                        ,
                        s = e => {
                            let n = e * o * t
                              , s = Math.pow(o, 2) * Math.pow(e, 2) * t
                              , a = en(Math.pow(e, 2), o);
                            return (n * i + i - s) * Math.exp(-n) * (-r(e) + .001 > 0 ? -1 : 1) / a
                        }
                        ) : (r = e => -.001 + Math.exp(-e * t) * ((e - i) * t + 1),
                        s = e => t * t * (i - e) * Math.exp(-e * t));
                        let a = function(t, e, i) {
                            let n = i;
                            for (let i = 1; i < 12; i++)
                                n -= t(n) / e(n);
                            return n
                        }(r, s, 5 / t);
                        if (t = f(t),
                        isNaN(a))
                            return {
                                stiffness: 100,
                                damping: 10,
                                duration: t
                            };
                        {
                            let e = Math.pow(a, 2) * n;
                            return {
                                stiffness: e,
                                damping: 2 * o * Math.sqrt(n * e),
                                duration: t
                            }
                        }
                    }(t);
                    (e = {
                        ...e,
                        ...i,
                        mass: 1
                    }).isResolvedFromDuration = !0
                }
                return e
            }({
                ...n,
                velocity: -v(n.velocity || 0)
            })
              , m = d || 0
              , g = u / (2 * Math.sqrt(l * h))
              , y = o - s
              , x = v(Math.sqrt(l / h))
              , P = 5 > Math.abs(y);
            if (i || (i = P ? .01 : 2),
            e || (e = P ? .005 : .5),
            g < 1) {
                let t = en(x, g);
                r = e => o - Math.exp(-g * x * e) * ((m + g * x * y) / t * Math.sin(t * e) + y * Math.cos(t * e))
            } else if (1 === g)
                r = t => o - Math.exp(-x * t) * (y + (m + x * y) * t);
            else {
                let t = x * Math.sqrt(g * g - 1);
                r = e => {
                    let i = Math.exp(-g * x * e)
                      , n = Math.min(t * e, 300);
                    return o - i * ((m + g * x * y) * Math.sinh(n) + t * y * Math.cosh(n)) / t
                }
            }
            return {
                calculatedDuration: p && c || null,
                next: t => {
                    let n = r(t);
                    if (p)
                        a.done = t >= c;
                    else {
                        let s = 0;
                        g < 1 && (s = 0 === t ? f(m) : ei(r, t, n));
                        let l = Math.abs(s) <= i
                          , u = Math.abs(o - n) <= e;
                        a.done = l && u
                    }
                    return a.value = a.done ? o : n,
                    a
                }
            }
        }
        function el({keyframes: t, velocity: e=0, power: i=.8, timeConstant: n=325, bounceDamping: r=10, bounceStiffness: s=500, modifyTarget: o, min: a, max: l, restDelta: u=.5, restSpeed: h}) {
            let c, d;
            let p = t[0]
              , m = {
                done: !1,
                value: p
            }
              , f = t => void 0 !== a && t < a || void 0 !== l && t > l
              , v = t => void 0 === a ? l : void 0 === l ? a : Math.abs(a - t) < Math.abs(l - t) ? a : l
              , g = i * e
              , y = p + g
              , x = void 0 === o ? y : o(y);
            x !== y && (g = x - p);
            let P = t => -g * Math.exp(-t / n)
              , w = t => x + P(t)
              , b = t => {
                let e = P(t)
                  , i = w(t);
                m.done = Math.abs(e) <= u,
                m.value = m.done ? x : i
            }
              , T = t => {
                f(m.value) && (c = t,
                d = ea({
                    keyframes: [m.value, v(m.value)],
                    velocity: ei(w, t, m.value),
                    damping: r,
                    stiffness: s,
                    restDelta: u,
                    restSpeed: h
                }))
            }
            ;
            return T(0),
            {
                calculatedDuration: null,
                next: t => {
                    let e = !1;
                    return (d || void 0 !== c || (e = !0,
                    b(t),
                    T(t)),
                    void 0 !== c && t >= c) ? d.next(t - c) : (e || b(t),
                    m)
                }
            }
        }
        let eu = I(.42, 0, 1, 1)
          , eh = I(0, 0, .58, 1)
          , ec = I(.42, 0, .58, 1)
          , ed = t => Array.isArray(t) && "number" != typeof t[0]
          , ep = t => Array.isArray(t) && "number" == typeof t[0]
          , em = {
            linear: R.Z,
            easeIn: eu,
            easeInOut: ec,
            easeOut: eh,
            circIn: H,
            circInOut: Z,
            circOut: Y,
            backIn: W,
            backInOut: z,
            backOut: N,
            anticipate: K
        }
          , ef = t => {
            if (ep(t)) {
                (0,
                X.k)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                let[e,i,n,r] = t;
                return I(e, i, n, r)
            }
            return "string" == typeof t ? ((0,
            X.k)(void 0 !== em[t], `Invalid easing type '${t}'`),
            em[t]) : t
        }
          , ev = (t, e) => i => e(t(i))
          , eg = (...t) => t.reduce(ev)
          , ey = (t, e, i) => {
            let n = e - t;
            return 0 === n ? 1 : (i - t) / n
        }
          , ex = (t, e, i) => t + (e - t) * i;
        function eP(t, e, i) {
            return (i < 0 && (i += 1),
            i > 1 && (i -= 1),
            i < 1 / 6) ? t + (e - t) * 6 * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
        }
        function ew(t, e) {
            return i => i > 0 ? e : t
        }
        let eb = (t, e, i) => {
            let n = t * t
              , r = i * (e * e - n) + n;
            return r < 0 ? 0 : Math.sqrt(r)
        }
          , eT = [tI, tB, tU]
          , eS = t => eT.find(e => e.test(t));
        function eA(t) {
            let e = eS(t);
            if ((0,
            X.K)(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`),
            !e)
                return !1;
            let i = e.parse(t);
            return e === tU && (i = function({hue: t, saturation: e, lightness: i, alpha: n}) {
                t /= 360,
                i /= 100;
                let r = 0
                  , s = 0
                  , o = 0;
                if (e /= 100) {
                    let n = i < .5 ? i * (1 + e) : i + e - i * e
                      , a = 2 * i - n;
                    r = eP(a, n, t + 1 / 3),
                    s = eP(a, n, t),
                    o = eP(a, n, t - 1 / 3)
                } else
                    r = s = o = i;
                return {
                    red: Math.round(255 * r),
                    green: Math.round(255 * s),
                    blue: Math.round(255 * o),
                    alpha: n
                }
            }(i)),
            i
        }
        let eE = (t, e) => {
            let i = eA(t)
              , n = eA(e);
            if (!i || !n)
                return ew(t, e);
            let r = {
                ...i
            };
            return t => (r.red = eb(i.red, n.red, t),
            r.green = eb(i.green, n.green, t),
            r.blue = eb(i.blue, n.blue, t),
            r.alpha = ex(i.alpha, n.alpha, t),
            tB.transform(r))
        }
          , eM = new Set(["none", "hidden"]);
        function eV(t, e) {
            return i => ex(t, e, i)
        }
        function eC(t) {
            return "number" == typeof t ? eV : "string" == typeof t ? tt(t) ? ew : t$.test(t) ? eE : ek : Array.isArray(t) ? eR : "object" == typeof t ? t$.test(t) ? eE : eD : ew
        }
        function eR(t, e) {
            let i = [...t]
              , n = i.length
              , r = t.map( (t, i) => eC(t)(t, e[i]));
            return t => {
                for (let e = 0; e < n; e++)
                    i[e] = r[e](t);
                return i
            }
        }
        function eD(t, e) {
            let i = {
                ...t,
                ...e
            }
              , n = {};
            for (let r in i)
                void 0 !== t[r] && void 0 !== e[r] && (n[r] = eC(t[r])(t[r], e[r]));
            return t => {
                for (let e in n)
                    i[e] = n[e](t);
                return i
            }
        }
        let ek = (t, e) => {
            let i = tX.createTransformer(e)
              , n = tH(t)
              , r = tH(e);
            return n.indexes.var.length === r.indexes.var.length && n.indexes.color.length === r.indexes.color.length && n.indexes.number.length >= r.indexes.number.length ? eM.has(t) && !r.values.length || eM.has(e) && !n.values.length ? eM.has(t) ? i => i <= 0 ? t : e : i => i >= 1 ? e : t : eg(eR(function(t, e) {
                var i;
                let n = []
                  , r = {
                    color: 0,
                    var: 0,
                    number: 0
                };
                for (let s = 0; s < e.values.length; s++) {
                    let o = e.types[s]
                      , a = t.indexes[o][r[o]]
                      , l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                    n[s] = l,
                    r[o]++
                }
                return n
            }(n, r), r.values), i) : ((0,
            X.K)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),
            ew(t, e))
        }
        ;
        function ej(t, e, i) {
            return "number" == typeof t && "number" == typeof e && "number" == typeof i ? ex(t, e, i) : eC(t)(t, e)
        }
        function eF({duration: t=300, keyframes: e, times: i, ease: n="easeInOut"}) {
            let r = ed(n) ? n.map(ef) : ef(n)
              , s = {
                done: !1,
                value: e[0]
            }
              , o = function(t, e, {clamp: i=!0, ease: n, mixer: r}={}) {
                let s = t.length;
                if ((0,
                X.k)(s === e.length, "Both input and output ranges must be the same length"),
                1 === s)
                    return () => e[0];
                if (2 === s && t[0] === t[1])
                    return () => e[1];
                t[0] > t[s - 1] && (t = [...t].reverse(),
                e = [...e].reverse());
                let o = function(t, e, i) {
                    let n = []
                      , r = i || ej
                      , s = t.length - 1;
                    for (let i = 0; i < s; i++) {
                        let s = r(t[i], t[i + 1]);
                        e && (s = eg(Array.isArray(e) ? e[i] || R.Z : e, s)),
                        n.push(s)
                    }
                    return n
                }(e, n, r)
                  , a = o.length
                  , l = e => {
                    let i = 0;
                    if (a > 1)
                        for (; i < t.length - 2 && !(e < t[i + 1]); i++)
                            ;
                    let n = ey(t[i], t[i + 1], e);
                    return o[i](n)
                }
                ;
                return i ? e => l(tn(t[0], t[s - 1], e)) : l
            }((i && i.length === e.length ? i : function(t) {
                let e = [0];
                return function(t, e) {
                    let i = t[t.length - 1];
                    for (let n = 1; n <= e; n++) {
                        let r = ey(0, e, n);
                        t.push(ex(i, 1, r))
                    }
                }(e, t.length - 1),
                e
            }(e)).map(e => e * t), e, {
                ease: Array.isArray(r) ? r : e.map( () => r || ec).splice(0, e.length - 1)
            });
            return {
                calculatedDuration: t,
                next: e => (s.value = o(e),
                s.done = e >= t,
                s)
            }
        }
        let eL = t => {
            let e = ({timestamp: e}) => t(e);
            return {
                start: () => j.update(e, !0),
                stop: () => F(e),
                now: () => L.isProcessing ? L.timestamp : t8.now()
            }
        }
          , eO = {
            decay: el,
            inertia: el,
            tween: eF,
            keyframes: eF,
            spring: ea
        }
          , eB = t => t / 100;
        class eI extends ee {
            constructor(t) {
                super(t),
                this.holdTime = null,
                this.cancelTime = null,
                this.currentTime = 0,
                this.playbackSpeed = 1,
                this.pendingPlayState = "running",
                this.startTime = null,
                this.state = "idle",
                this.stop = () => {
                    if (this.resolver.cancel(),
                    this.isStopped = !0,
                    "idle" === this.state)
                        return;
                    this.teardown();
                    let {onStop: t} = this.options;
                    t && t()
                }
                ;
                let {name: e, motionValue: i, element: n, keyframes: r} = this.options
                  , s = (null == n ? void 0 : n.KeyframeResolver) || tC;
                this.resolver = new s(r, (t, e) => this.onKeyframesResolved(t, e),e,i,n),
                this.resolver.scheduleResolve()
            }
            initPlayback(t) {
                let e, i;
                let {type: n="keyframes", repeat: r=0, repeatDelay: s=0, repeatType: o, velocity: a=0} = this.options
                  , l = t4(n) ? n : eO[n] || eF;
                l !== eF && "number" != typeof t[0] && (e = eg(eB, ej(t[0], t[1])),
                t = [0, 100]);
                let u = l({
                    ...this.options,
                    keyframes: t
                });
                "mirror" === o && (i = l({
                    ...this.options,
                    keyframes: [...t].reverse(),
                    velocity: -a
                })),
                null === u.calculatedDuration && (u.calculatedDuration = function(t) {
                    let e = 0
                      , i = t.next(e);
                    for (; !i.done && e < 2e4; )
                        e += 50,
                        i = t.next(e);
                    return e >= 2e4 ? 1 / 0 : e
                }(u));
                let {calculatedDuration: h} = u
                  , c = h + s;
                return {
                    generator: u,
                    mirroredGenerator: i,
                    mapPercentToKeyframes: e,
                    calculatedDuration: h,
                    resolvedDuration: c,
                    totalDuration: c * (r + 1) - s
                }
            }
            onPostResolved() {
                let {autoplay: t=!0} = this.options;
                this.play(),
                "paused" !== this.pendingPlayState && t ? this.state = this.pendingPlayState : this.pause()
            }
            tick(t, e=!1) {
                let {resolved: i} = this;
                if (!i) {
                    let {keyframes: t} = this.options;
                    return {
                        done: !0,
                        value: t[t.length - 1]
                    }
                }
                let {finalKeyframe: n, generator: r, mirroredGenerator: s, mapPercentToKeyframes: o, keyframes: a, calculatedDuration: l, totalDuration: u, resolvedDuration: h} = i;
                if (null === this.startTime)
                    return r.next(0);
                let {delay: c, repeat: d, repeatType: p, repeatDelay: m, onUpdate: f} = this.options;
                this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - u / this.speed, this.startTime)),
                e ? this.currentTime = t : null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
                let v = this.currentTime - c * (this.speed >= 0 ? 1 : -1)
                  , g = this.speed >= 0 ? v < 0 : v > u;
                this.currentTime = Math.max(v, 0),
                "finished" === this.state && null === this.holdTime && (this.currentTime = u);
                let y = this.currentTime
                  , x = r;
                if (d) {
                    let t = Math.min(this.currentTime, u) / h
                      , e = Math.floor(t)
                      , i = t % 1;
                    !i && t >= 1 && (i = 1),
                    1 === i && e--,
                    (e = Math.min(e, d + 1)) % 2 && ("reverse" === p ? (i = 1 - i,
                    m && (i -= m / h)) : "mirror" === p && (x = s)),
                    y = tn(0, 1, i) * h
                }
                let P = g ? {
                    done: !1,
                    value: a[0]
                } : x.next(y);
                o && (P.value = o(P.value));
                let {done: w} = P;
                g || null === l || (w = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
                let b = null === this.holdTime && ("finished" === this.state || "running" === this.state && w);
                return b && void 0 !== n && (P.value = E(a, this.options, n)),
                f && f(P.value),
                b && this.finish(),
                P
            }
            get duration() {
                let {resolved: t} = this;
                return t ? v(t.calculatedDuration) : 0
            }
            get time() {
                return v(this.currentTime)
            }
            set time(t) {
                t = f(t),
                this.currentTime = t,
                null !== this.holdTime || 0 === this.speed ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
            }
            get speed() {
                return this.playbackSpeed
            }
            set speed(t) {
                let e = this.playbackSpeed !== t;
                this.playbackSpeed = t,
                e && (this.time = v(this.currentTime))
            }
            play() {
                if (this.resolver.isScheduled || this.resolver.resume(),
                !this._resolved) {
                    this.pendingPlayState = "running";
                    return
                }
                if (this.isStopped)
                    return;
                let {driver: t=eL, onPlay: e, startTime: i} = this.options;
                this.driver || (this.driver = t(t => this.tick(t))),
                e && e();
                let n = this.driver.now();
                null !== this.holdTime ? this.startTime = n - this.holdTime : this.startTime ? "finished" === this.state && (this.startTime = n) : this.startTime = null != i ? i : this.calcStartTime(),
                "finished" === this.state && this.updateFinishedPromise(),
                this.cancelTime = this.startTime,
                this.holdTime = null,
                this.state = "running",
                this.driver.start()
            }
            pause() {
                var t;
                if (!this._resolved) {
                    this.pendingPlayState = "paused";
                    return
                }
                this.state = "paused",
                this.holdTime = null !== (t = this.currentTime) && void 0 !== t ? t : 0
            }
            complete() {
                "running" !== this.state && this.play(),
                this.pendingPlayState = this.state = "finished",
                this.holdTime = null
            }
            finish() {
                this.teardown(),
                this.state = "finished";
                let {onComplete: t} = this.options;
                t && t()
            }
            cancel() {
                null !== this.cancelTime && this.tick(this.cancelTime),
                this.teardown(),
                this.updateFinishedPromise()
            }
            teardown() {
                this.state = "idle",
                this.stopDriver(),
                this.resolveFinishedPromise(),
                this.updateFinishedPromise(),
                this.startTime = this.cancelTime = null,
                this.resolver.cancel()
            }
            stopDriver() {
                this.driver && (this.driver.stop(),
                this.driver = void 0)
            }
            sample(t) {
                return this.startTime = 0,
                this.tick(t, !0)
            }
        }
        let eU = new Set(["opacity", "clipPath", "filter", "transform"])
          , e$ = (t, e) => {
            let i = ""
              , n = Math.max(Math.round(e / 10), 2);
            for (let e = 0; e < n; e++)
                i += t(ey(0, n - 1, e)) + ", ";
            return `linear(${i.substring(0, i.length - 2)})`
        }
        ;
        function eN(t) {
            let e;
            return () => (void 0 === e && (e = t()),
            e)
        }
        let eW = {
            linearEasing: void 0
        }
          , ez = function(t, e) {
            let i = eN(t);
            return () => {
                var t;
                return null !== (t = eW[e]) && void 0 !== t ? t : i()
            }
        }( () => {
            try {
                document.createElement("div").animate({
                    opacity: 0
                }, {
                    easing: "linear(0, 1)"
                })
            } catch (t) {
                return !1
            }
            return !0
        }
        , "linearEasing")
          , eK = ([t,e,i,n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`
          , eH = {
            linear: "linear",
            ease: "ease",
            easeIn: "ease-in",
            easeOut: "ease-out",
            easeInOut: "ease-in-out",
            circIn: eK([0, .65, .55, 1]),
            circOut: eK([.55, 0, 1, .45]),
            backIn: eK([.31, .01, .66, -.59]),
            backOut: eK([.33, 1.53, .69, .99])
        };
        function eY(t, e) {
            t.timeline = e,
            t.onfinish = null
        }
        let eZ = eN( () => Object.hasOwnProperty.call(Element.prototype, "animate"))
          , eG = {
            anticipate: K,
            backInOut: z,
            circInOut: Z
        };
        class eX extends ee {
            constructor(t) {
                super(t);
                let {name: e, motionValue: i, element: n, keyframes: r} = this.options;
                this.resolver = new t6(r, (t, e) => this.onKeyframesResolved(t, e),e,i,n),
                this.resolver.scheduleResolve()
            }
            initPlayback(t, e) {
                var i, n;
                let {duration: r=300, times: s, ease: o, type: a, motionValue: l, name: u, startTime: h} = this.options;
                if (!(null === (i = l.owner) || void 0 === i ? void 0 : i.current))
                    return !1;
                if ("string" == typeof o && ez() && o in eG && (o = eG[o]),
                t4((n = this.options).type) || "spring" === n.type || !function t(e) {
                    return !!("function" == typeof e && ez() || !e || "string" == typeof e && (e in eH || ez()) || ep(e) || Array.isArray(e) && e.every(t))
                }(n.ease)) {
                    let {onComplete: e, onUpdate: i, motionValue: n, element: l, ...u} = this.options
                      , h = function(t, e) {
                        let i = new eI({
                            ...e,
                            keyframes: t,
                            repeat: 0,
                            delay: 0,
                            isGenerator: !0
                        })
                          , n = {
                            done: !1,
                            value: t[0]
                        }
                          , r = []
                          , s = 0;
                        for (; !n.done && s < 2e4; )
                            r.push((n = i.sample(s)).value),
                            s += 10;
                        return {
                            times: void 0,
                            keyframes: r,
                            duration: s - 10,
                            ease: "linear"
                        }
                    }(t, u);
                    1 === (t = h.keyframes).length && (t[1] = t[0]),
                    r = h.duration,
                    s = h.times,
                    o = h.ease,
                    a = "keyframes"
                }
                let c = function(t, e, i, {delay: n=0, duration: r=300, repeat: s=0, repeatType: o="loop", ease: a, times: l}={}) {
                    let u = {
                        [e]: i
                    };
                    l && (u.offset = l);
                    let h = function t(e, i) {
                        if (e)
                            return "function" == typeof e && ez() ? e$(e, i) : ep(e) ? eK(e) : Array.isArray(e) ? e.map(e => t(e, i) || eH.easeOut) : eH[e]
                    }(a, r);
                    return Array.isArray(h) && (u.easing = h),
                    t.animate(u, {
                        delay: n,
                        duration: r,
                        easing: Array.isArray(h) ? "linear" : h,
                        fill: "both",
                        iterations: s + 1,
                        direction: "reverse" === o ? "alternate" : "normal"
                    })
                }(l.owner.current, u, t, {
                    ...this.options,
                    duration: r,
                    times: s,
                    ease: o
                });
                return c.startTime = null != h ? h : this.calcStartTime(),
                this.pendingTimeline ? (eY(c, this.pendingTimeline),
                this.pendingTimeline = void 0) : c.onfinish = () => {
                    let {onComplete: i} = this.options;
                    l.set(E(t, this.options, e)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise()
                }
                ,
                {
                    animation: c,
                    duration: r,
                    times: s,
                    type: a,
                    ease: o,
                    keyframes: t
                }
            }
            get duration() {
                let {resolved: t} = this;
                if (!t)
                    return 0;
                let {duration: e} = t;
                return v(e)
            }
            get time() {
                let {resolved: t} = this;
                if (!t)
                    return 0;
                let {animation: e} = t;
                return v(e.currentTime || 0)
            }
            set time(t) {
                let {resolved: e} = this;
                if (!e)
                    return;
                let {animation: i} = e;
                i.currentTime = f(t)
            }
            get speed() {
                let {resolved: t} = this;
                if (!t)
                    return 1;
                let {animation: e} = t;
                return e.playbackRate
            }
            set speed(t) {
                let {resolved: e} = this;
                if (!e)
                    return;
                let {animation: i} = e;
                i.playbackRate = t
            }
            get state() {
                let {resolved: t} = this;
                if (!t)
                    return "idle";
                let {animation: e} = t;
                return e.playState
            }
            get startTime() {
                let {resolved: t} = this;
                if (!t)
                    return null;
                let {animation: e} = t;
                return e.startTime
            }
            attachTimeline(t) {
                if (this._resolved) {
                    let {resolved: e} = this;
                    if (!e)
                        return R.Z;
                    let {animation: i} = e;
                    eY(i, t)
                } else
                    this.pendingTimeline = t;
                return R.Z
            }
            play() {
                if (this.isStopped)
                    return;
                let {resolved: t} = this;
                if (!t)
                    return;
                let {animation: e} = t;
                "finished" === e.playState && this.updateFinishedPromise(),
                e.play()
            }
            pause() {
                let {resolved: t} = this;
                if (!t)
                    return;
                let {animation: e} = t;
                e.pause()
            }
            stop() {
                if (this.resolver.cancel(),
                this.isStopped = !0,
                "idle" === this.state)
                    return;
                this.resolveFinishedPromise(),
                this.updateFinishedPromise();
                let {resolved: t} = this;
                if (!t)
                    return;
                let {animation: e, keyframes: i, duration: n, type: r, ease: s, times: o} = t;
                if ("idle" === e.playState || "finished" === e.playState)
                    return;
                if (this.time) {
                    let {motionValue: t, onUpdate: e, onComplete: a, element: l, ...u} = this.options
                      , h = new eI({
                        ...u,
                        keyframes: i,
                        duration: n,
                        type: r,
                        ease: s,
                        times: o,
                        isGenerator: !0
                    })
                      , c = f(this.time);
                    t.setWithVelocity(h.sample(c - 10).value, h.sample(c).value, 10)
                }
                let {onStop: a} = this.options;
                a && a(),
                this.cancel()
            }
            complete() {
                let {resolved: t} = this;
                t && t.animation.finish()
            }
            cancel() {
                let {resolved: t} = this;
                t && t.animation.cancel()
            }
            static supports(t) {
                let {motionValue: e, name: i, repeatDelay: n, repeatType: r, damping: s, type: o} = t;
                return eZ() && i && eU.has(i) && e && e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate && !n && "mirror" !== r && 0 !== s && "inertia" !== o
            }
        }
        let e_ = eN( () => void 0 !== window.ScrollTimeline);
        class eq {
            constructor(t) {
                this.stop = () => this.runAll("stop"),
                this.animations = t.filter(Boolean)
            }
            then(t, e) {
                return Promise.all(this.animations).then(t).catch(e)
            }
            getAll(t) {
                return this.animations[0][t]
            }
            setAll(t, e) {
                for (let i = 0; i < this.animations.length; i++)
                    this.animations[i][t] = e
            }
            attachTimeline(t, e) {
                let i = this.animations.map(i => e_() && i.attachTimeline ? i.attachTimeline(t) : e(i));
                return () => {
                    i.forEach( (t, e) => {
                        t && t(),
                        this.animations[e].stop()
                    }
                    )
                }
            }
            get time() {
                return this.getAll("time")
            }
            set time(t) {
                this.setAll("time", t)
            }
            get speed() {
                return this.getAll("speed")
            }
            set speed(t) {
                this.setAll("speed", t)
            }
            get startTime() {
                return this.getAll("startTime")
            }
            get duration() {
                let t = 0;
                for (let e = 0; e < this.animations.length; e++)
                    t = Math.max(t, this.animations[e].duration);
                return t
            }
            runAll(t) {
                this.animations.forEach(e => e[t]())
            }
            play() {
                this.runAll("play")
            }
            pause() {
                this.runAll("pause")
            }
            cancel() {
                this.runAll("cancel")
            }
            complete() {
                this.runAll("complete")
            }
        }
        let eJ = (t, e, i, n={}, r, s) => o => {
            let a = b(n, t) || {}
              , l = a.delay || n.delay || 0
              , {elapsed: u=0} = n;
            u -= f(l);
            let h = {
                keyframes: Array.isArray(i) ? i : [null, i],
                ease: "easeOut",
                velocity: e.getVelocity(),
                ...a,
                delay: -u,
                onUpdate: t => {
                    e.set(t),
                    a.onUpdate && a.onUpdate(t)
                }
                ,
                onComplete: () => {
                    o(),
                    a.onComplete && a.onComplete()
                }
                ,
                name: t,
                motionValue: e,
                element: s ? void 0 : r
            };
            !function({when: t, delay: e, delayChildren: i, staggerChildren: n, staggerDirection: r, repeat: s, repeatType: o, repeatDelay: a, from: l, elapsed: u, ...h}) {
                return !!Object.keys(h).length
            }(a) && (h = {
                ...h,
                ...w(t, h)
            }),
            h.duration && (h.duration = f(h.duration)),
            h.repeatDelay && (h.repeatDelay = f(h.repeatDelay)),
            void 0 !== h.from && (h.keyframes[0] = h.from);
            let c = !1;
            if (!1 !== h.type && (0 !== h.duration || h.repeatDelay) || (h.duration = 0,
            0 !== h.delay || (c = !0)),
            (S.current || T.skipAnimations) && (c = !0,
            h.duration = 0,
            h.delay = 0),
            c && !s && void 0 !== e.get()) {
                let t = E(h.keyframes, a);
                if (void 0 !== t)
                    return j.update( () => {
                        h.onUpdate(t),
                        h.onComplete()
                    }
                    ),
                    new eq([])
            }
            return !s && eX.supports(h) ? new eX(h) : new eI(h)
        }
          , eQ = t => !!(t && "object" == typeof t && t.mix && t.toValue)
          , e0 = t => s(t) ? t[t.length - 1] || 0 : t;
        function e1(t, e) {
            -1 === t.indexOf(e) && t.push(e)
        }
        function e5(t, e) {
            let i = t.indexOf(e);
            i > -1 && t.splice(i, 1)
        }
        class e2 {
            constructor() {
                this.subscriptions = []
            }
            add(t) {
                return e1(this.subscriptions, t),
                () => e5(this.subscriptions, t)
            }
            notify(t, e, i) {
                let n = this.subscriptions.length;
                if (n) {
                    if (1 === n)
                        this.subscriptions[0](t, e, i);
                    else
                        for (let r = 0; r < n; r++) {
                            let n = this.subscriptions[r];
                            n && n(t, e, i)
                        }
                }
            }
            getSize() {
                return this.subscriptions.length
            }
            clear() {
                this.subscriptions.length = 0
            }
        }
        let e3 = t => !isNaN(parseFloat(t))
          , e9 = {
            current: void 0
        };
        class e6 {
            constructor(t, e={}) {
                this.version = "11.11.11",
                this.canTrackVelocity = null,
                this.events = {},
                this.updateAndNotify = (t, e=!0) => {
                    let i = t8.now();
                    this.updatedAt !== i && this.setPrevFrameValue(),
                    this.prev = this.current,
                    this.setCurrent(t),
                    this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
                    e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                }
                ,
                this.hasAnimated = !1,
                this.setCurrent(t),
                this.owner = e.owner
            }
            setCurrent(t) {
                this.current = t,
                this.updatedAt = t8.now(),
                null === this.canTrackVelocity && void 0 !== t && (this.canTrackVelocity = e3(this.current))
            }
            setPrevFrameValue(t=this.current) {
                this.prevFrameValue = t,
                this.prevUpdatedAt = this.updatedAt
            }
            onChange(t) {
                return this.on("change", t)
            }
            on(t, e) {
                this.events[t] || (this.events[t] = new e2);
                let i = this.events[t].add(e);
                return "change" === t ? () => {
                    i(),
                    j.read( () => {
                        this.events.change.getSize() || this.stop()
                    }
                    )
                }
                : i
            }
            clearListeners() {
                for (let t in this.events)
                    this.events[t].clear()
            }
            attach(t, e) {
                this.passiveEffect = t,
                this.stopPassiveEffect = e
            }
            set(t, e=!0) {
                e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
            }
            setWithVelocity(t, e, i) {
                this.set(e),
                this.prev = void 0,
                this.prevFrameValue = t,
                this.prevUpdatedAt = this.updatedAt - i
            }
            jump(t, e=!0) {
                this.updateAndNotify(t),
                this.prev = t,
                this.prevUpdatedAt = this.prevFrameValue = void 0,
                e && this.stop(),
                this.stopPassiveEffect && this.stopPassiveEffect()
            }
            get() {
                return e9.current && e9.current.push(this),
                this.current
            }
            getPrevious() {
                return this.prev
            }
            getVelocity() {
                var t;
                let e = t8.now();
                if (!this.canTrackVelocity || void 0 === this.prevFrameValue || e - this.updatedAt > 30)
                    return 0;
                let i = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
                return t = parseFloat(this.current) - parseFloat(this.prevFrameValue),
                i ? 1e3 / i * t : 0
            }
            start(t) {
                return this.stop(),
                new Promise(e => {
                    this.hasAnimated = !0,
                    this.animation = t(e),
                    this.events.animationStart && this.events.animationStart.notify()
                }
                ).then( () => {
                    this.events.animationComplete && this.events.animationComplete.notify(),
                    this.clearAnimation()
                }
                )
            }
            stop() {
                this.animation && (this.animation.stop(),
                this.events.animationCancel && this.events.animationCancel.notify()),
                this.clearAnimation()
            }
            isAnimating() {
                return !!this.animation
            }
            clearAnimation() {
                delete this.animation
            }
            destroy() {
                this.clearListeners(),
                this.stop(),
                this.stopPassiveEffect && this.stopPassiveEffect()
            }
        }
        function e4(t, e) {
            return new e6(t,e)
        }
        let e7 = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
          , e8 = "data-" + e7("framerAppearId")
          , it = t => !!(t && t.getVelocity);
        function ie(t, e) {
            let i = t.getValue("willChange");
            if (it(i) && i.add)
                return i.add(e)
        }
        function ii(t, e, {delay: i=0, transitionOverride: n, type: r}={}) {
            var s;
            let {transition: o=t.getDefaultTransition(), transitionEnd: a, ...l} = e;
            n && (o = n);
            let u = []
              , c = r && t.animationState && t.animationState.getState()[r];
            for (let e in l) {
                let n = t.getValue(e, null !== (s = t.latestValues[e]) && void 0 !== s ? s : null)
                  , r = l[e];
                if (void 0 === r || c && function({protectedKeys: t, needsAnimating: e}, i) {
                    let n = t.hasOwnProperty(i) && !0 !== e[i];
                    return e[i] = !1,
                    n
                }(c, e))
                    continue;
                let a = {
                    delay: i,
                    ...b(o || {}, e)
                }
                  , h = !1;
                if (window.MotionHandoffAnimation) {
                    let i = t.props[e8];
                    if (i) {
                        let t = window.MotionHandoffAnimation(i, e, j);
                        null !== t && (a.startTime = t,
                        h = !0)
                    }
                }
                ie(t, e),
                n.start(eJ(e, n, r, t.shouldReduceMotion && m.has(e) ? {
                    type: !1
                } : a, t, h));
                let d = n.animation;
                d && u.push(d)
            }
            return a && Promise.all(u).then( () => {
                j.update( () => {
                    a && function(t, e) {
                        let {transitionEnd: i={}, transition: n={}, ...r} = h(t, e) || {};
                        for (let e in r = {
                            ...r,
                            ...i
                        }) {
                            let i = e0(r[e]);
                            t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, e4(i))
                        }
                    }(t, a)
                }
                )
            }
            ),
            u
        }
        function ir(t, e, i={}) {
            var n;
            let r = h(t, e, "exit" === i.type ? null === (n = t.presenceContext) || void 0 === n ? void 0 : n.custom : void 0)
              , {transition: s=t.getDefaultTransition() || {}} = r || {};
            i.transitionOverride && (s = i.transitionOverride);
            let o = r ? () => Promise.all(ii(t, r, i)) : () => Promise.resolve()
              , a = t.variantChildren && t.variantChildren.size ? (n=0) => {
                let {delayChildren: r=0, staggerChildren: o, staggerDirection: a} = s;
                return function(t, e, i=0, n=0, r=1, s) {
                    let o = []
                      , a = (t.variantChildren.size - 1) * n
                      , l = 1 === r ? (t=0) => t * n : (t=0) => a - t * n;
                    return Array.from(t.variantChildren).sort(is).forEach( (t, n) => {
                        t.notify("AnimationStart", e),
                        o.push(ir(t, e, {
                            ...s,
                            delay: i + l(n)
                        }).then( () => t.notify("AnimationComplete", e)))
                    }
                    ),
                    Promise.all(o)
                }(t, e, r + n, o, a, i)
            }
            : () => Promise.resolve()
              , {when: l} = s;
            if (!l)
                return Promise.all([o(), a(i.delay)]);
            {
                let[t,e] = "beforeChildren" === l ? [o, a] : [a, o];
                return t().then( () => e())
            }
        }
        function is(t, e) {
            return t.sortNodePosition(e)
        }
        let io = d.length
          , ia = [...c].reverse()
          , il = c.length;
        function iu(t=!1) {
            return {
                isActive: t,
                protectedKeys: {},
                needsAnimating: {},
                prevResolvedValues: {}
            }
        }
        function ih() {
            return {
                animate: iu(!0),
                whileInView: iu(),
                whileHover: iu(),
                whileTap: iu(),
                whileDrag: iu(),
                whileFocus: iu(),
                exit: iu()
            }
        }
        class ic {
            constructor(t) {
                this.isMounted = !1,
                this.node = t
            }
            update() {}
        }
        class id extends ic {
            constructor(t) {
                super(t),
                t.animationState || (t.animationState = function(t) {
                    let e = e => Promise.all(e.map( ({animation: e, options: i}) => (function(t, e, i={}) {
                        let n;
                        if (t.notify("AnimationStart", e),
                        Array.isArray(e))
                            n = Promise.all(e.map(e => ir(t, e, i)));
                        else if ("string" == typeof e)
                            n = ir(t, e, i);
                        else {
                            let r = "function" == typeof e ? h(t, e, i.custom) : e;
                            n = Promise.all(ii(t, r, i))
                        }
                        return n.then( () => {
                            t.notify("AnimationComplete", e)
                        }
                        )
                    }
                    )(t, e, i)))
                      , i = ih()
                      , n = !0
                      , l = e => (i, n) => {
                        var r;
                        let s = h(t, n, "exit" === e ? null === (r = t.presenceContext) || void 0 === r ? void 0 : r.custom : void 0);
                        if (s) {
                            let {transition: t, transitionEnd: e, ...n} = s;
                            i = {
                                ...i,
                                ...n,
                                ...e
                            }
                        }
                        return i
                    }
                    ;
                    function u(u) {
                        let {props: h} = t
                          , c = function t(e) {
                            if (!e)
                                return;
                            if (!e.isControllingVariants) {
                                let i = e.parent && t(e.parent) || {};
                                return void 0 !== e.props.initial && (i.initial = e.props.initial),
                                i
                            }
                            let i = {};
                            for (let t = 0; t < io; t++) {
                                let n = d[t]
                                  , r = e.props[n];
                                (a(r) || !1 === r) && (i[n] = r)
                            }
                            return i
                        }(t.parent) || {}
                          , p = []
                          , m = new Set
                          , f = {}
                          , v = 1 / 0;
                        for (let e = 0; e < il; e++) {
                            var g;
                            let d = ia[e]
                              , y = i[d]
                              , x = void 0 !== h[d] ? h[d] : c[d]
                              , P = a(x)
                              , w = d === u ? y.isActive : null;
                            !1 === w && (v = e);
                            let b = x === c[d] && x !== h[d] && P;
                            if (b && n && t.manuallyAnimateOnMount && (b = !1),
                            y.protectedKeys = {
                                ...f
                            },
                            !y.isActive && null === w || !x && !y.prevProp || r(x) || "boolean" == typeof x)
                                continue;
                            let T = (g = y.prevProp,
                            "string" == typeof x ? x !== g : !!Array.isArray(x) && !o(x, g))
                              , S = T || d === u && y.isActive && !b && P || e > v && P
                              , A = !1
                              , E = Array.isArray(x) ? x : [x]
                              , M = E.reduce(l(d), {});
                            !1 === w && (M = {});
                            let {prevResolvedValues: V={}} = y
                              , C = {
                                ...V,
                                ...M
                            }
                              , R = e => {
                                S = !0,
                                m.has(e) && (A = !0,
                                m.delete(e)),
                                y.needsAnimating[e] = !0;
                                let i = t.getValue(e);
                                i && (i.liveStyle = !1)
                            }
                            ;
                            for (let t in C) {
                                let e = M[t]
                                  , i = V[t];
                                if (!f.hasOwnProperty(t))
                                    (s(e) && s(i) ? o(e, i) : e === i) ? void 0 !== e && m.has(t) ? R(t) : y.protectedKeys[t] = !0 : null != e ? R(t) : m.add(t)
                            }
                            y.prevProp = x,
                            y.prevResolvedValues = M,
                            y.isActive && (f = {
                                ...f,
                                ...M
                            }),
                            n && t.blockInitialAnimation && (S = !1);
                            let D = !(b && T) || A;
                            S && D && p.push(...E.map(t => ({
                                animation: t,
                                options: {
                                    type: d
                                }
                            })))
                        }
                        if (m.size) {
                            let e = {};
                            m.forEach(i => {
                                let n = t.getBaseTarget(i)
                                  , r = t.getValue(i);
                                r && (r.liveStyle = !0),
                                e[i] = null != n ? n : null
                            }
                            ),
                            p.push({
                                animation: e
                            })
                        }
                        let y = !!p.length;
                        return n && (!1 === h.initial || h.initial === h.animate) && !t.manuallyAnimateOnMount && (y = !1),
                        n = !1,
                        y ? e(p) : Promise.resolve()
                    }
                    return {
                        animateChanges: u,
                        setActive: function(e, n) {
                            var r;
                            if (i[e].isActive === n)
                                return Promise.resolve();
                            null === (r = t.variantChildren) || void 0 === r || r.forEach(t => {
                                var i;
                                return null === (i = t.animationState) || void 0 === i ? void 0 : i.setActive(e, n)
                            }
                            ),
                            i[e].isActive = n;
                            let s = u(e);
                            for (let t in i)
                                i[t].protectedKeys = {};
                            return s
                        },
                        setAnimateFunction: function(i) {
                            e = i(t)
                        },
                        getState: () => i,
                        reset: () => {
                            i = ih(),
                            n = !0
                        }
                    }
                }(t))
            }
            updateAnimationControlsSubscription() {
                let {animate: t} = this.node.getProps();
                r(t) && (this.unmountControls = t.subscribe(this.node))
            }
            mount() {
                this.updateAnimationControlsSubscription()
            }
            update() {
                let {animate: t} = this.node.getProps()
                  , {animate: e} = this.node.prevProps || {};
                t !== e && this.updateAnimationControlsSubscription()
            }
            unmount() {
                var t;
                this.node.animationState.reset(),
                null === (t = this.unmountControls) || void 0 === t || t.call(this)
            }
        }
        let ip = 0;
        class im extends ic {
            constructor() {
                super(...arguments),
                this.id = ip++
            }
            update() {
                if (!this.node.presenceContext)
                    return;
                let {isPresent: t, onExitComplete: e} = this.node.presenceContext
                  , {isPresent: i} = this.node.prevPresenceContext || {};
                if (!this.node.animationState || t === i)
                    return;
                let n = this.node.animationState.setActive("exit", !t);
                e && !t && n.then( () => e(this.id))
            }
            mount() {
                let {register: t} = this.node.presenceContext || {};
                t && (this.unmount = t(this.id))
            }
            unmount() {}
        }
        let iv = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;
        function ig(t, e="page") {
            return {
                point: {
                    x: t[`${e}X`],
                    y: t[`${e}Y`]
                }
            }
        }
        let iy = t => e => iv(e) && t(e, ig(e));
        function ix(t, e, i, n={
            passive: !0
        }) {
            return t.addEventListener(e, i, n),
            () => t.removeEventListener(e, i)
        }
        function iP(t, e, i, n) {
            return ix(t, e, iy(i), n)
        }
        let iw = (t, e) => Math.abs(t - e);
        class ib {
            constructor(t, e, {transformPagePoint: i, contextWindow: n, dragSnapToOrigin: r=!1}={}) {
                if (this.startEvent = null,
                this.lastMoveEvent = null,
                this.lastMoveEventInfo = null,
                this.handlers = {},
                this.contextWindow = window,
                this.updatePoint = () => {
                    var t, e;
                    if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                        return;
                    let i = iA(this.lastMoveEventInfo, this.history)
                      , n = null !== this.startEvent
                      , r = (t = i.offset,
                    e = {
                        x: 0,
                        y: 0
                    },
                    Math.sqrt(iw(t.x, e.x) ** 2 + iw(t.y, e.y) ** 2) >= 3);
                    if (!n && !r)
                        return;
                    let {point: s} = i
                      , {timestamp: o} = L;
                    this.history.push({
                        ...s,
                        timestamp: o
                    });
                    let {onStart: a, onMove: l} = this.handlers;
                    n || (a && a(this.lastMoveEvent, i),
                    this.startEvent = this.lastMoveEvent),
                    l && l(this.lastMoveEvent, i)
                }
                ,
                this.handlePointerMove = (t, e) => {
                    this.lastMoveEvent = t,
                    this.lastMoveEventInfo = iT(e, this.transformPagePoint),
                    j.update(this.updatePoint, !0)
                }
                ,
                this.handlePointerUp = (t, e) => {
                    this.end();
                    let {onEnd: i, onSessionEnd: n, resumeAnimation: r} = this.handlers;
                    if (this.dragSnapToOrigin && r && r(),
                    !(this.lastMoveEvent && this.lastMoveEventInfo))
                        return;
                    let s = iA("pointercancel" === t.type ? this.lastMoveEventInfo : iT(e, this.transformPagePoint), this.history);
                    this.startEvent && i && i(t, s),
                    n && n(t, s)
                }
                ,
                !iv(t))
                    return;
                this.dragSnapToOrigin = r,
                this.handlers = e,
                this.transformPagePoint = i,
                this.contextWindow = n || window;
                let s = iT(ig(t), this.transformPagePoint)
                  , {point: o} = s
                  , {timestamp: a} = L;
                this.history = [{
                    ...o,
                    timestamp: a
                }];
                let {onSessionStart: l} = e;
                l && l(t, iA(s, this.history)),
                this.removeListeners = eg(iP(this.contextWindow, "pointermove", this.handlePointerMove), iP(this.contextWindow, "pointerup", this.handlePointerUp), iP(this.contextWindow, "pointercancel", this.handlePointerUp))
            }
            updateHandlers(t) {
                this.handlers = t
            }
            end() {
                this.removeListeners && this.removeListeners(),
                F(this.updatePoint)
            }
        }
        function iT(t, e) {
            return e ? {
                point: e(t.point)
            } : t
        }
        function iS(t, e) {
            return {
                x: t.x - e.x,
                y: t.y - e.y
            }
        }
        function iA({point: t}, e) {
            return {
                point: t,
                delta: iS(t, iE(e)),
                offset: iS(t, e[0]),
                velocity: function(t, e) {
                    if (t.length < 2)
                        return {
                            x: 0,
                            y: 0
                        };
                    let i = t.length - 1
                      , n = null
                      , r = iE(t);
                    for (; i >= 0 && (n = t[i],
                    !(r.timestamp - n.timestamp > f(.1))); )
                        i--;
                    if (!n)
                        return {
                            x: 0,
                            y: 0
                        };
                    let s = v(r.timestamp - n.timestamp);
                    if (0 === s)
                        return {
                            x: 0,
                            y: 0
                        };
                    let o = {
                        x: (r.x - n.x) / s,
                        y: (r.y - n.y) / s
                    };
                    return o.x === 1 / 0 && (o.x = 0),
                    o.y === 1 / 0 && (o.y = 0),
                    o
                }(e, 0)
            }
        }
        function iE(t) {
            return t[t.length - 1]
        }
        function iM(t) {
            let e = null;
            return () => null === e && (e = t,
            () => {
                e = null
            }
            )
        }
        let iV = iM("dragHorizontal")
          , iC = iM("dragVertical");
        function iR(t) {
            let e = !1;
            if ("y" === t)
                e = iC();
            else if ("x" === t)
                e = iV();
            else {
                let t = iV()
                  , i = iC();
                t && i ? e = () => {
                    t(),
                    i()
                }
                : (t && t(),
                i && i())
            }
            return e
        }
        function iD() {
            let t = iR(!0);
            return !t || (t(),
            !1)
        }
        function ik(t) {
            return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
        }
        function ij(t) {
            return t.max - t.min
        }
        function iF(t, e, i, n=.5) {
            t.origin = n,
            t.originPoint = ex(e.min, e.max, t.origin),
            t.scale = ij(i) / ij(e),
            t.translate = ex(i.min, i.max, t.origin) - t.originPoint,
            (t.scale >= .9999 && t.scale <= 1.0001 || isNaN(t.scale)) && (t.scale = 1),
            (t.translate >= -.01 && t.translate <= .01 || isNaN(t.translate)) && (t.translate = 0)
        }
        function iL(t, e, i, n) {
            iF(t.x, e.x, i.x, n ? n.originX : void 0),
            iF(t.y, e.y, i.y, n ? n.originY : void 0)
        }
        function iO(t, e, i) {
            t.min = i.min + e.min,
            t.max = t.min + ij(e)
        }
        function iB(t, e, i) {
            t.min = e.min - i.min,
            t.max = t.min + ij(e)
        }
        function iI(t, e, i) {
            iB(t.x, e.x, i.x),
            iB(t.y, e.y, i.y)
        }
        function iU(t, e, i) {
            return {
                min: void 0 !== e ? t.min + e : void 0,
                max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
            }
        }
        function i$(t, e) {
            let i = e.min - t.min
              , n = e.max - t.max;
            return e.max - e.min < t.max - t.min && ([i,n] = [n, i]),
            {
                min: i,
                max: n
            }
        }
        function iN(t, e, i) {
            return {
                min: iW(t, e),
                max: iW(t, i)
            }
        }
        function iW(t, e) {
            return "number" == typeof t ? t : t[e] || 0
        }
        let iz = () => ({
            translate: 0,
            scale: 1,
            origin: 0,
            originPoint: 0
        })
          , iK = () => ({
            x: iz(),
            y: iz()
        })
          , iH = () => ({
            min: 0,
            max: 0
        })
          , iY = () => ({
            x: iH(),
            y: iH()
        });
        function iZ(t) {
            return [t("x"), t("y")]
        }
        function iG({top: t, left: e, right: i, bottom: n}) {
            return {
                x: {
                    min: e,
                    max: i
                },
                y: {
                    min: t,
                    max: n
                }
            }
        }
        function iX(t) {
            return void 0 === t || 1 === t
        }
        function i_({scale: t, scaleX: e, scaleY: i}) {
            return !iX(t) || !iX(e) || !iX(i)
        }
        function iq(t) {
            return i_(t) || iJ(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
        }
        function iJ(t) {
            var e, i;
            return (e = t.x) && "0%" !== e || (i = t.y) && "0%" !== i
        }
        function iQ(t, e, i, n, r) {
            return void 0 !== r && (t = n + r * (t - n)),
            n + i * (t - n) + e
        }
        function i0(t, e=0, i=1, n, r) {
            t.min = iQ(t.min, e, i, n, r),
            t.max = iQ(t.max, e, i, n, r)
        }
        function i1(t, {x: e, y: i}) {
            i0(t.x, e.translate, e.scale, e.originPoint),
            i0(t.y, i.translate, i.scale, i.originPoint)
        }
        function i5(t, e) {
            t.min = t.min + e,
            t.max = t.max + e
        }
        function i2(t, e, i, n, r=.5) {
            let s = ex(t.min, t.max, r);
            i0(t, e, i, s, n)
        }
        function i3(t, e) {
            i2(t.x, e.x, e.scaleX, e.scale, e.originX),
            i2(t.y, e.y, e.scaleY, e.scale, e.originY)
        }
        function i9(t, e) {
            return iG(function(t, e) {
                if (!e)
                    return t;
                let i = e({
                    x: t.left,
                    y: t.top
                })
                  , n = e({
                    x: t.right,
                    y: t.bottom
                });
                return {
                    top: i.y,
                    left: i.x,
                    bottom: n.y,
                    right: n.x
                }
            }(t.getBoundingClientRect(), e))
        }
        let i6 = ({current: t}) => t ? t.ownerDocument.defaultView : null
          , i4 = new WeakMap;
        class i7 {
            constructor(t) {
                this.openGlobalLock = null,
                this.isDragging = !1,
                this.currentDirection = null,
                this.originPoint = {
                    x: 0,
                    y: 0
                },
                this.constraints = !1,
                this.hasMutatedConstraints = !1,
                this.elastic = iY(),
                this.visualElement = t
            }
            start(t, {snapToCursor: e=!1}={}) {
                let {presenceContext: i} = this.visualElement;
                if (i && !1 === i.isPresent)
                    return;
                let {dragSnapToOrigin: n} = this.getProps();
                this.panSession = new ib(t,{
                    onSessionStart: t => {
                        let {dragSnapToOrigin: i} = this.getProps();
                        i ? this.pauseAnimation() : this.stopAnimation(),
                        e && this.snapToCursor(ig(t, "page").point)
                    }
                    ,
                    onStart: (t, e) => {
                        let {drag: i, dragPropagation: n, onDragStart: r} = this.getProps();
                        if (i && !n && (this.openGlobalLock && this.openGlobalLock(),
                        this.openGlobalLock = iR(i),
                        !this.openGlobalLock))
                            return;
                        this.isDragging = !0,
                        this.currentDirection = null,
                        this.resolveConstraints(),
                        this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
                        this.visualElement.projection.target = void 0),
                        iZ(t => {
                            let e = this.getAxisMotionValue(t).get() || 0;
                            if (tu.test(e)) {
                                let {projection: i} = this.visualElement;
                                if (i && i.layout) {
                                    let n = i.layout.layoutBox[t];
                                    if (n) {
                                        let t = ij(n);
                                        e = parseFloat(e) / 100 * t
                                    }
                                }
                            }
                            this.originPoint[t] = e
                        }
                        ),
                        r && j.postRender( () => r(t, e)),
                        ie(this.visualElement, "transform");
                        let {animationState: s} = this.visualElement;
                        s && s.setActive("whileDrag", !0)
                    }
                    ,
                    onMove: (t, e) => {
                        let {dragPropagation: i, dragDirectionLock: n, onDirectionLock: r, onDrag: s} = this.getProps();
                        if (!i && !this.openGlobalLock)
                            return;
                        let {offset: o} = e;
                        if (n && null === this.currentDirection) {
                            this.currentDirection = function(t, e=10) {
                                let i = null;
                                return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"),
                                i
                            }(o),
                            null !== this.currentDirection && r && r(this.currentDirection);
                            return
                        }
                        this.updateAxis("x", e.point, o),
                        this.updateAxis("y", e.point, o),
                        this.visualElement.render(),
                        s && s(t, e)
                    }
                    ,
                    onSessionEnd: (t, e) => this.stop(t, e),
                    resumeAnimation: () => iZ(t => {
                        var e;
                        return "paused" === this.getAnimationState(t) && (null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.play())
                    }
                    )
                },{
                    transformPagePoint: this.visualElement.getTransformPagePoint(),
                    dragSnapToOrigin: n,
                    contextWindow: i6(this.visualElement)
                })
            }
            stop(t, e) {
                let i = this.isDragging;
                if (this.cancel(),
                !i)
                    return;
                let {velocity: n} = e;
                this.startAnimation(n);
                let {onDragEnd: r} = this.getProps();
                r && j.postRender( () => r(t, e))
            }
            cancel() {
                this.isDragging = !1;
                let {projection: t, animationState: e} = this.visualElement;
                t && (t.isAnimationBlocked = !1),
                this.panSession && this.panSession.end(),
                this.panSession = void 0;
                let {dragPropagation: i} = this.getProps();
                !i && this.openGlobalLock && (this.openGlobalLock(),
                this.openGlobalLock = null),
                e && e.setActive("whileDrag", !1)
            }
            updateAxis(t, e, i) {
                let {drag: n} = this.getProps();
                if (!i || !i8(t, n, this.currentDirection))
                    return;
                let r = this.getAxisMotionValue(t)
                  , s = this.originPoint[t] + i[t];
                this.constraints && this.constraints[t] && (s = function(t, {min: e, max: i}, n) {
                    return void 0 !== e && t < e ? t = n ? ex(e, t, n.min) : Math.max(t, e) : void 0 !== i && t > i && (t = n ? ex(i, t, n.max) : Math.min(t, i)),
                    t
                }(s, this.constraints[t], this.elastic[t])),
                r.set(s)
            }
            resolveConstraints() {
                var t;
                let {dragConstraints: e, dragElastic: i} = this.getProps()
                  , n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null === (t = this.visualElement.projection) || void 0 === t ? void 0 : t.layout
                  , r = this.constraints;
                e && ik(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && n ? this.constraints = function(t, {top: e, left: i, bottom: n, right: r}) {
                    return {
                        x: iU(t.x, i, r),
                        y: iU(t.y, e, n)
                    }
                }(n.layoutBox, e) : this.constraints = !1,
                this.elastic = function(t=.35) {
                    return !1 === t ? t = 0 : !0 === t && (t = .35),
                    {
                        x: iN(t, "left", "right"),
                        y: iN(t, "top", "bottom")
                    }
                }(i),
                r !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && iZ(t => {
                    !1 !== this.constraints && this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                        let i = {};
                        return void 0 !== e.min && (i.min = e.min - t.min),
                        void 0 !== e.max && (i.max = e.max - t.min),
                        i
                    }(n.layoutBox[t], this.constraints[t]))
                }
                )
            }
            resolveRefConstraints() {
                var t;
                let {dragConstraints: e, onMeasureDragConstraints: i} = this.getProps();
                if (!e || !ik(e))
                    return !1;
                let n = e.current;
                (0,
                X.k)(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                let {projection: r} = this.visualElement;
                if (!r || !r.layout)
                    return !1;
                let s = function(t, e, i) {
                    let n = i9(t, i)
                      , {scroll: r} = e;
                    return r && (i5(n.x, r.offset.x),
                    i5(n.y, r.offset.y)),
                    n
                }(n, r.root, this.visualElement.getTransformPagePoint())
                  , o = {
                    x: i$((t = r.layout.layoutBox).x, s.x),
                    y: i$(t.y, s.y)
                };
                if (i) {
                    let t = i(function({x: t, y: e}) {
                        return {
                            top: e.min,
                            right: t.max,
                            bottom: e.max,
                            left: t.min
                        }
                    }(o));
                    this.hasMutatedConstraints = !!t,
                    t && (o = iG(t))
                }
                return o
            }
            startAnimation(t) {
                let {drag: e, dragMomentum: i, dragElastic: n, dragTransition: r, dragSnapToOrigin: s, onDragTransitionEnd: o} = this.getProps()
                  , a = this.constraints || {};
                return Promise.all(iZ(o => {
                    if (!i8(o, e, this.currentDirection))
                        return;
                    let l = a && a[o] || {};
                    s && (l = {
                        min: 0,
                        max: 0
                    });
                    let u = {
                        type: "inertia",
                        velocity: i ? t[o] : 0,
                        bounceStiffness: n ? 200 : 1e6,
                        bounceDamping: n ? 40 : 1e7,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10,
                        ...r,
                        ...l
                    };
                    return this.startAxisValueAnimation(o, u)
                }
                )).then(o)
            }
            startAxisValueAnimation(t, e) {
                let i = this.getAxisMotionValue(t);
                return ie(this.visualElement, t),
                i.start(eJ(t, i, 0, e, this.visualElement, !1))
            }
            stopAnimation() {
                iZ(t => this.getAxisMotionValue(t).stop())
            }
            pauseAnimation() {
                iZ(t => {
                    var e;
                    return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.pause()
                }
                )
            }
            getAnimationState(t) {
                var e;
                return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.state
            }
            getAxisMotionValue(t) {
                let e = `_drag${t.toUpperCase()}`
                  , i = this.visualElement.getProps();
                return i[e] || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
            }
            snapToCursor(t) {
                iZ(e => {
                    let {drag: i} = this.getProps();
                    if (!i8(e, i, this.currentDirection))
                        return;
                    let {projection: n} = this.visualElement
                      , r = this.getAxisMotionValue(e);
                    if (n && n.layout) {
                        let {min: i, max: s} = n.layout.layoutBox[e];
                        r.set(t[e] - ex(i, s, .5))
                    }
                }
                )
            }
            scalePositionWithinConstraints() {
                if (!this.visualElement.current)
                    return;
                let {drag: t, dragConstraints: e} = this.getProps()
                  , {projection: i} = this.visualElement;
                if (!ik(e) || !i || !this.constraints)
                    return;
                this.stopAnimation();
                let n = {
                    x: 0,
                    y: 0
                };
                iZ(t => {
                    let e = this.getAxisMotionValue(t);
                    if (e && !1 !== this.constraints) {
                        let i = e.get();
                        n[t] = function(t, e) {
                            let i = .5
                              , n = ij(t)
                              , r = ij(e);
                            return r > n ? i = ey(e.min, e.max - n, t.min) : n > r && (i = ey(t.min, t.max - r, e.min)),
                            tn(0, 1, i)
                        }({
                            min: i,
                            max: i
                        }, this.constraints[t])
                    }
                }
                );
                let {transformTemplate: r} = this.visualElement.getProps();
                this.visualElement.current.style.transform = r ? r({}, "") : "none",
                i.root && i.root.updateScroll(),
                i.updateLayout(),
                this.resolveConstraints(),
                iZ(e => {
                    if (!i8(e, t, null))
                        return;
                    let i = this.getAxisMotionValue(e)
                      , {min: r, max: s} = this.constraints[e];
                    i.set(ex(r, s, n[e]))
                }
                )
            }
            addListeners() {
                if (!this.visualElement.current)
                    return;
                i4.set(this.visualElement, this);
                let t = iP(this.visualElement.current, "pointerdown", t => {
                    let {drag: e, dragListener: i=!0} = this.getProps();
                    e && i && this.start(t)
                }
                )
                  , e = () => {
                    let {dragConstraints: t} = this.getProps();
                    ik(t) && t.current && (this.constraints = this.resolveRefConstraints())
                }
                  , {projection: i} = this.visualElement
                  , n = i.addEventListener("measure", e);
                i && !i.layout && (i.root && i.root.updateScroll(),
                i.updateLayout()),
                j.read(e);
                let r = ix(window, "resize", () => this.scalePositionWithinConstraints())
                  , s = i.addEventListener("didUpdate", ({delta: t, hasLayoutChanged: e}) => {
                    this.isDragging && e && (iZ(e => {
                        let i = this.getAxisMotionValue(e);
                        i && (this.originPoint[e] += t[e].translate,
                        i.set(i.get() + t[e].translate))
                    }
                    ),
                    this.visualElement.render())
                }
                );
                return () => {
                    r(),
                    t(),
                    n(),
                    s && s()
                }
            }
            getProps() {
                let t = this.visualElement.getProps()
                  , {drag: e=!1, dragDirectionLock: i=!1, dragPropagation: n=!1, dragConstraints: r=!1, dragElastic: s=.35, dragMomentum: o=!0} = t;
                return {
                    ...t,
                    drag: e,
                    dragDirectionLock: i,
                    dragPropagation: n,
                    dragConstraints: r,
                    dragElastic: s,
                    dragMomentum: o
                }
            }
        }
        function i8(t, e, i) {
            return (!0 === e || e === t) && (null === i || i === t)
        }
        class nt extends ic {
            constructor(t) {
                super(t),
                this.removeGroupControls = R.Z,
                this.removeListeners = R.Z,
                this.controls = new i7(t)
            }
            mount() {
                let {dragControls: t} = this.node.getProps();
                t && (this.removeGroupControls = t.subscribe(this.controls)),
                this.removeListeners = this.controls.addListeners() || R.Z
            }
            unmount() {
                this.removeGroupControls(),
                this.removeListeners()
            }
        }
        let ne = t => (e, i) => {
            t && j.postRender( () => t(e, i))
        }
        ;
        class ni extends ic {
            constructor() {
                super(...arguments),
                this.removePointerDownListener = R.Z
            }
            onPointerDown(t) {
                this.session = new ib(t,this.createPanHandlers(),{
                    transformPagePoint: this.node.getTransformPagePoint(),
                    contextWindow: i6(this.node)
                })
            }
            createPanHandlers() {
                let {onPanSessionStart: t, onPanStart: e, onPan: i, onPanEnd: n} = this.node.getProps();
                return {
                    onSessionStart: ne(t),
                    onStart: ne(e),
                    onMove: i,
                    onEnd: (t, e) => {
                        delete this.session,
                        n && j.postRender( () => n(t, e))
                    }
                }
            }
            mount() {
                this.removePointerDownListener = iP(this.node.current, "pointerdown", t => this.onPointerDown(t))
            }
            update() {
                this.session && this.session.updateHandlers(this.createPanHandlers())
            }
            unmount() {
                this.removePointerDownListener(),
                this.session && this.session.end()
            }
        }
        var nn = i(2676)
          , nr = i(5271)
          , ns = i(6586)
          , no = i(3623);
        let na = (0,
        nr.createContext)({})
          , nl = {
            hasAnimatedSinceResize: !0,
            hasEverUpdated: !1
        };
        function nu(t, e) {
            return e.max === e.min ? 0 : t / (e.max - e.min) * 100
        }
        let nh = {
            correct: (t, e) => {
                if (!e.target)
                    return t;
                if ("string" == typeof t) {
                    if (!th.test(t))
                        return t;
                    t = parseFloat(t)
                }
                let i = nu(t, e.target.x)
                  , n = nu(t, e.target.y);
                return `${i}% ${n}%`
            }
        }
          , nc = {}
          , {schedule: nd, cancel: np} = k(queueMicrotask, !1);
        class nm extends nr.Component {
            componentDidMount() {
                let {visualElement: t, layoutGroup: e, switchLayoutGroup: i, layoutId: n} = this.props
                  , {projection: r} = t;
                Object.assign(nc, nv),
                r && (e.group && e.group.add(r),
                i && i.register && n && i.register(r),
                r.root.didUpdate(),
                r.addEventListener("animationComplete", () => {
                    this.safeToRemove()
                }
                ),
                r.setOptions({
                    ...r.options,
                    onExitComplete: () => this.safeToRemove()
                })),
                nl.hasEverUpdated = !0
            }
            getSnapshotBeforeUpdate(t) {
                let {layoutDependency: e, visualElement: i, drag: n, isPresent: r} = this.props
                  , s = i.projection;
                return s && (s.isPresent = r,
                n || t.layoutDependency !== e || void 0 === e ? s.willUpdate() : this.safeToRemove(),
                t.isPresent === r || (r ? s.promote() : s.relegate() || j.postRender( () => {
                    let t = s.getStack();
                    t && t.members.length || this.safeToRemove()
                }
                ))),
                null
            }
            componentDidUpdate() {
                let {projection: t} = this.props.visualElement;
                t && (t.root.didUpdate(),
                nd.postRender( () => {
                    !t.currentAnimation && t.isLead() && this.safeToRemove()
                }
                ))
            }
            componentWillUnmount() {
                let {visualElement: t, layoutGroup: e, switchLayoutGroup: i} = this.props
                  , {projection: n} = t;
                n && (n.scheduleCheckAfterUnmount(),
                e && e.group && e.group.remove(n),
                i && i.deregister && i.deregister(n))
            }
            safeToRemove() {
                let {safeToRemove: t} = this.props;
                t && t()
            }
            render() {
                return null
            }
        }
        function nf(t) {
            let[e,i] = function() {
                let t = (0,
                nr.useContext)(ns.O);
                if (null === t)
                    return [!0, null];
                let {isPresent: e, onExitComplete: i, register: n} = t
                  , r = (0,
                nr.useId)();
                (0,
                nr.useEffect)( () => n(r), []);
                let s = (0,
                nr.useCallback)( () => i && i(r), [r, i]);
                return !e && i ? [!1, s] : [!0]
            }()
              , n = (0,
            nr.useContext)(no.p);
            return (0,
            nn.jsx)(nm, {
                ...t,
                layoutGroup: n,
                switchLayoutGroup: (0,
                nr.useContext)(na),
                isPresent: e,
                safeToRemove: i
            })
        }
        let nv = {
            borderRadius: {
                ...nh,
                applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
            },
            borderTopLeftRadius: nh,
            borderTopRightRadius: nh,
            borderBottomLeftRadius: nh,
            borderBottomRightRadius: nh,
            boxShadow: {
                correct: (t, {treeScale: e, projectionDelta: i}) => {
                    let n = tX.parse(t);
                    if (n.length > 5)
                        return t;
                    let r = tX.createTransformer(t)
                      , s = "number" != typeof n[0] ? 1 : 0
                      , o = i.x.scale * e.x
                      , a = i.y.scale * e.y;
                    n[0 + s] /= o,
                    n[1 + s] /= a;
                    let l = ex(o, a, .5);
                    return "number" == typeof n[2 + s] && (n[2 + s] /= l),
                    "number" == typeof n[3 + s] && (n[3 + s] /= l),
                    r(n)
                }
            }
        }
          , ng = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
          , ny = ng.length
          , nx = t => "string" == typeof t ? parseFloat(t) : t
          , nP = t => "number" == typeof t || th.test(t);
        function nw(t, e) {
            return void 0 !== t[e] ? t[e] : t.borderRadius
        }
        let nb = nS(0, .5, Y)
          , nT = nS(.5, .95, R.Z);
        function nS(t, e, i) {
            return n => n < t ? 0 : n > e ? 1 : i(ey(t, e, n))
        }
        function nA(t, e) {
            t.min = e.min,
            t.max = e.max
        }
        function nE(t, e) {
            nA(t.x, e.x),
            nA(t.y, e.y)
        }
        function nM(t, e) {
            t.translate = e.translate,
            t.scale = e.scale,
            t.originPoint = e.originPoint,
            t.origin = e.origin
        }
        function nV(t, e, i, n, r) {
            return t -= e,
            t = n + 1 / i * (t - n),
            void 0 !== r && (t = n + 1 / r * (t - n)),
            t
        }
        function nC(t, e, [i,n,r], s, o) {
            !function(t, e=0, i=1, n=.5, r, s=t, o=t) {
                if (tu.test(e) && (e = parseFloat(e),
                e = ex(o.min, o.max, e / 100) - o.min),
                "number" != typeof e)
                    return;
                let a = ex(s.min, s.max, n);
                t === s && (a -= e),
                t.min = nV(t.min, e, i, a, r),
                t.max = nV(t.max, e, i, a, r)
            }(t, e[i], e[n], e[r], e.scale, s, o)
        }
        let nR = ["x", "scaleX", "originX"]
          , nD = ["y", "scaleY", "originY"];
        function nk(t, e, i, n) {
            nC(t.x, e, nR, i ? i.x : void 0, n ? n.x : void 0),
            nC(t.y, e, nD, i ? i.y : void 0, n ? n.y : void 0)
        }
        function nj(t) {
            return 0 === t.translate && 1 === t.scale
        }
        function nF(t) {
            return nj(t.x) && nj(t.y)
        }
        function nL(t, e) {
            return t.min === e.min && t.max === e.max
        }
        function nO(t, e) {
            return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
        }
        function nB(t, e) {
            return nO(t.x, e.x) && nO(t.y, e.y)
        }
        function nI(t) {
            return ij(t.x) / ij(t.y)
        }
        function nU(t, e) {
            return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
        }
        class n$ {
            constructor() {
                this.members = []
            }
            add(t) {
                e1(this.members, t),
                t.scheduleRender()
            }
            remove(t) {
                if (e5(this.members, t),
                t === this.prevLead && (this.prevLead = void 0),
                t === this.lead) {
                    let t = this.members[this.members.length - 1];
                    t && this.promote(t)
                }
            }
            relegate(t) {
                let e;
                let i = this.members.findIndex(e => t === e);
                if (0 === i)
                    return !1;
                for (let t = i; t >= 0; t--) {
                    let i = this.members[t];
                    if (!1 !== i.isPresent) {
                        e = i;
                        break
                    }
                }
                return !!e && (this.promote(e),
                !0)
            }
            promote(t, e) {
                let i = this.lead;
                if (t !== i && (this.prevLead = i,
                this.lead = t,
                t.show(),
                i)) {
                    i.instance && i.scheduleRender(),
                    t.scheduleRender(),
                    t.resumeFrom = i,
                    e && (t.resumeFrom.preserveOpacity = !0),
                    i.snapshot && (t.snapshot = i.snapshot,
                    t.snapshot.latestValues = i.animationValues || i.latestValues),
                    t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                    let {crossfade: n} = t.options;
                    !1 === n && i.hide()
                }
            }
            exitAnimationComplete() {
                this.members.forEach(t => {
                    let {options: e, resumingFrom: i} = t;
                    e.onExitComplete && e.onExitComplete(),
                    i && i.options.onExitComplete && i.options.onExitComplete()
                }
                )
            }
            scheduleRender() {
                this.members.forEach(t => {
                    t.instance && t.scheduleRender(!1)
                }
                )
            }
            removeLeadSnapshot() {
                this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
            }
        }
        let nN = (t, e) => t.depth - e.depth;
        class nW {
            constructor() {
                this.children = [],
                this.isDirty = !1
            }
            add(t) {
                e1(this.children, t),
                this.isDirty = !0
            }
            remove(t) {
                e5(this.children, t),
                this.isDirty = !0
            }
            forEach(t) {
                this.isDirty && this.children.sort(nN),
                this.isDirty = !1,
                this.children.forEach(t)
            }
        }
        function nz(t) {
            let e = it(t) ? t.get() : t;
            return eQ(e) ? e.toValue() : e
        }
        let nK = {
            type: "projectionFrame",
            totalNodes: 0,
            resolvedTargetDeltas: 0,
            recalculatedProjection: 0
        }
          , nH = "undefined" != typeof window && void 0 !== window.MotionDebug
          , nY = ["", "X", "Y", "Z"]
          , nZ = {
            visibility: "hidden"
        }
          , nG = 0;
        function nX(t, e, i, n) {
            let {latestValues: r} = e;
            r[t] && (i[t] = r[t],
            e.setStaticValue(t, 0),
            n && (n[t] = 0))
        }
        function n_({attachResizeListener: t, defaultParent: e, measureScroll: i, checkIsScrollRoot: n, resetTransform: r}) {
            return class {
                constructor(t={}, i=null == e ? void 0 : e()) {
                    this.id = nG++,
                    this.animationId = 0,
                    this.children = new Set,
                    this.options = {},
                    this.isTreeAnimating = !1,
                    this.isAnimationBlocked = !1,
                    this.isLayoutDirty = !1,
                    this.isProjectionDirty = !1,
                    this.isSharedProjectionDirty = !1,
                    this.isTransformDirty = !1,
                    this.updateManuallyBlocked = !1,
                    this.updateBlockedByResize = !1,
                    this.isUpdating = !1,
                    this.isSVG = !1,
                    this.needsReset = !1,
                    this.shouldResetTransform = !1,
                    this.hasCheckedOptimisedAppear = !1,
                    this.treeScale = {
                        x: 1,
                        y: 1
                    },
                    this.eventHandlers = new Map,
                    this.hasTreeAnimated = !1,
                    this.updateScheduled = !1,
                    this.scheduleUpdate = () => this.update(),
                    this.projectionUpdateScheduled = !1,
                    this.checkUpdateFailed = () => {
                        this.isUpdating && (this.isUpdating = !1,
                        this.clearAllSnapshots())
                    }
                    ,
                    this.updateProjection = () => {
                        this.projectionUpdateScheduled = !1,
                        nH && (nK.totalNodes = nK.resolvedTargetDeltas = nK.recalculatedProjection = 0),
                        this.nodes.forEach(nQ),
                        this.nodes.forEach(n6),
                        this.nodes.forEach(n4),
                        this.nodes.forEach(n0),
                        nH && window.MotionDebug.record(nK)
                    }
                    ,
                    this.resolvedRelativeTargetAt = 0,
                    this.hasProjected = !1,
                    this.isVisible = !0,
                    this.animationProgress = 0,
                    this.sharedNodes = new Map,
                    this.latestValues = t,
                    this.root = i ? i.root || i : this,
                    this.path = i ? [...i.path, i] : [],
                    this.parent = i,
                    this.depth = i ? i.depth + 1 : 0;
                    for (let t = 0; t < this.path.length; t++)
                        this.path[t].shouldResetTransform = !0;
                    this.root === this && (this.nodes = new nW)
                }
                addEventListener(t, e) {
                    return this.eventHandlers.has(t) || this.eventHandlers.set(t, new e2),
                    this.eventHandlers.get(t).add(e)
                }
                notifyListeners(t, ...e) {
                    let i = this.eventHandlers.get(t);
                    i && i.notify(...e)
                }
                hasListeners(t) {
                    return this.eventHandlers.has(t)
                }
                mount(e, i=this.root.hasTreeAnimated) {
                    if (this.instance)
                        return;
                    this.isSVG = e instanceof SVGElement && "svg" !== e.tagName,
                    this.instance = e;
                    let {layoutId: n, layout: r, visualElement: s} = this.options;
                    if (s && !s.current && s.mount(e),
                    this.root.nodes.add(this),
                    this.parent && this.parent.children.add(this),
                    i && (r || n) && (this.isLayoutDirty = !0),
                    t) {
                        let i;
                        let n = () => this.root.updateBlockedByResize = !1;
                        t(e, () => {
                            this.root.updateBlockedByResize = !0,
                            i && i(),
                            i = function(t, e) {
                                let i = t8.now()
                                  , n = ({timestamp: e}) => {
                                    let r = e - i;
                                    r >= 250 && (F(n),
                                    t(r - 250))
                                }
                                ;
                                return j.read(n, !0),
                                () => F(n)
                            }(n, 0),
                            nl.hasAnimatedSinceResize && (nl.hasAnimatedSinceResize = !1,
                            this.nodes.forEach(n9))
                        }
                        )
                    }
                    n && this.root.registerSharedNode(n, this),
                    !1 !== this.options.animate && s && (n || r) && this.addEventListener("didUpdate", ({delta: t, hasLayoutChanged: e, hasRelativeTargetChanged: i, layout: n}) => {
                        if (this.isTreeAnimationBlocked()) {
                            this.target = void 0,
                            this.relativeTarget = void 0;
                            return
                        }
                        let r = this.options.transition || s.getDefaultTransition() || rn
                          , {onLayoutAnimationStart: o, onLayoutAnimationComplete: a} = s.getProps()
                          , l = !this.targetLayout || !nB(this.targetLayout, n) || i
                          , u = !e && i;
                        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || u || e && (l || !this.currentAnimation)) {
                            this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                            this.resumingFrom.resumingFrom = void 0),
                            this.setAnimationOrigin(t, u);
                            let e = {
                                ...b(r, "layout"),
                                onPlay: o,
                                onComplete: a
                            };
                            (s.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0,
                            e.type = !1),
                            this.startAnimation(e)
                        } else
                            e || n9(this),
                            this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                        this.targetLayout = n
                    }
                    )
                }
                unmount() {
                    this.options.layoutId && this.willUpdate(),
                    this.root.nodes.remove(this);
                    let t = this.getStack();
                    t && t.remove(this),
                    this.parent && this.parent.children.delete(this),
                    this.instance = void 0,
                    F(this.updateProjection)
                }
                blockUpdate() {
                    this.updateManuallyBlocked = !0
                }
                unblockUpdate() {
                    this.updateManuallyBlocked = !1
                }
                isUpdateBlocked() {
                    return this.updateManuallyBlocked || this.updateBlockedByResize
                }
                isTreeAnimationBlocked() {
                    return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                }
                startUpdate() {
                    !this.isUpdateBlocked() && (this.isUpdating = !0,
                    this.nodes && this.nodes.forEach(n7),
                    this.animationId++)
                }
                getTransformTemplate() {
                    let {visualElement: t} = this.options;
                    return t && t.getProps().transformTemplate
                }
                willUpdate(t=!0) {
                    if (this.root.hasTreeAnimated = !0,
                    this.root.isUpdateBlocked()) {
                        this.options.onExitComplete && this.options.onExitComplete();
                        return
                    }
                    if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && function t(e) {
                        if (e.hasCheckedOptimisedAppear = !0,
                        e.root === e)
                            return;
                        let {visualElement: i} = e.options;
                        if (!i)
                            return;
                        let n = i.props[e8];
                        if (window.MotionHasOptimisedAnimation(n, "transform")) {
                            let {layout: t, layoutId: i} = e.options;
                            window.MotionCancelOptimisedAnimation(n, "transform", j, !(t || i))
                        }
                        let {parent: r} = e;
                        r && !r.hasCheckedOptimisedAppear && t(r)
                    }(this),
                    this.root.isUpdating || this.root.startUpdate(),
                    this.isLayoutDirty)
                        return;
                    this.isLayoutDirty = !0;
                    for (let t = 0; t < this.path.length; t++) {
                        let e = this.path[t];
                        e.shouldResetTransform = !0,
                        e.updateScroll("snapshot"),
                        e.options.layoutRoot && e.willUpdate(!1)
                    }
                    let {layoutId: e, layout: i} = this.options;
                    if (void 0 === e && !i)
                        return;
                    let n = this.getTransformTemplate();
                    this.prevTransformTemplateValue = n ? n(this.latestValues, "") : void 0,
                    this.updateSnapshot(),
                    t && this.notifyListeners("willUpdate")
                }
                update() {
                    if (this.updateScheduled = !1,
                    this.isUpdateBlocked()) {
                        this.unblockUpdate(),
                        this.clearAllSnapshots(),
                        this.nodes.forEach(n5);
                        return
                    }
                    this.isUpdating || this.nodes.forEach(n2),
                    this.isUpdating = !1,
                    this.nodes.forEach(n3),
                    this.nodes.forEach(nq),
                    this.nodes.forEach(nJ),
                    this.clearAllSnapshots();
                    let t = t8.now();
                    L.delta = tn(0, 1e3 / 60, t - L.timestamp),
                    L.timestamp = t,
                    L.isProcessing = !0,
                    O.update.process(L),
                    O.preRender.process(L),
                    O.render.process(L),
                    L.isProcessing = !1
                }
                didUpdate() {
                    this.updateScheduled || (this.updateScheduled = !0,
                    nd.read(this.scheduleUpdate))
                }
                clearAllSnapshots() {
                    this.nodes.forEach(n1),
                    this.sharedNodes.forEach(n8)
                }
                scheduleUpdateProjection() {
                    this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
                    j.preRender(this.updateProjection, !1, !0))
                }
                scheduleCheckAfterUnmount() {
                    j.postRender( () => {
                        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                    }
                    )
                }
                updateSnapshot() {
                    !this.snapshot && this.instance && (this.snapshot = this.measure())
                }
                updateLayout() {
                    if (!this.instance || (this.updateScroll(),
                    !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                        return;
                    if (this.resumeFrom && !this.resumeFrom.instance)
                        for (let t = 0; t < this.path.length; t++)
                            this.path[t].updateScroll();
                    let t = this.layout;
                    this.layout = this.measure(!1),
                    this.layoutCorrected = iY(),
                    this.isLayoutDirty = !1,
                    this.projectionDelta = void 0,
                    this.notifyListeners("measure", this.layout.layoutBox);
                    let {visualElement: e} = this.options;
                    e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                }
                updateScroll(t="measure") {
                    let e = !!(this.options.layoutScroll && this.instance);
                    if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1),
                    e) {
                        let e = n(this.instance);
                        this.scroll = {
                            animationId: this.root.animationId,
                            phase: t,
                            isRoot: e,
                            offset: i(this.instance),
                            wasRoot: this.scroll ? this.scroll.isRoot : e
                        }
                    }
                }
                resetTransform() {
                    if (!r)
                        return;
                    let t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
                      , e = this.projectionDelta && !nF(this.projectionDelta)
                      , i = this.getTransformTemplate()
                      , n = i ? i(this.latestValues, "") : void 0
                      , s = n !== this.prevTransformTemplateValue;
                    t && (e || iq(this.latestValues) || s) && (r(this.instance, n),
                    this.shouldResetTransform = !1,
                    this.scheduleRender())
                }
                measure(t=!0) {
                    var e;
                    let i = this.measurePageBox()
                      , n = this.removeElementScroll(i);
                    return t && (n = this.removeTransform(n)),
                    ro((e = n).x),
                    ro(e.y),
                    {
                        animationId: this.root.animationId,
                        measuredBox: i,
                        layoutBox: n,
                        latestValues: {},
                        source: this.id
                    }
                }
                measurePageBox() {
                    var t;
                    let {visualElement: e} = this.options;
                    if (!e)
                        return iY();
                    let i = e.measureViewportBox();
                    if (!((null === (t = this.scroll) || void 0 === t ? void 0 : t.wasRoot) || this.path.some(rl))) {
                        let {scroll: t} = this.root;
                        t && (i5(i.x, t.offset.x),
                        i5(i.y, t.offset.y))
                    }
                    return i
                }
                removeElementScroll(t) {
                    var e;
                    let i = iY();
                    if (nE(i, t),
                    null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot)
                        return i;
                    for (let e = 0; e < this.path.length; e++) {
                        let n = this.path[e]
                          , {scroll: r, options: s} = n;
                        n !== this.root && r && s.layoutScroll && (r.wasRoot && nE(i, t),
                        i5(i.x, r.offset.x),
                        i5(i.y, r.offset.y))
                    }
                    return i
                }
                applyTransform(t, e=!1) {
                    let i = iY();
                    nE(i, t);
                    for (let t = 0; t < this.path.length; t++) {
                        let n = this.path[t];
                        !e && n.options.layoutScroll && n.scroll && n !== n.root && i3(i, {
                            x: -n.scroll.offset.x,
                            y: -n.scroll.offset.y
                        }),
                        iq(n.latestValues) && i3(i, n.latestValues)
                    }
                    return iq(this.latestValues) && i3(i, this.latestValues),
                    i
                }
                removeTransform(t) {
                    let e = iY();
                    nE(e, t);
                    for (let t = 0; t < this.path.length; t++) {
                        let i = this.path[t];
                        if (!i.instance || !iq(i.latestValues))
                            continue;
                        i_(i.latestValues) && i.updateSnapshot();
                        let n = iY();
                        nE(n, i.measurePageBox()),
                        nk(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, n)
                    }
                    return iq(this.latestValues) && nk(e, this.latestValues),
                    e
                }
                setTargetDelta(t) {
                    this.targetDelta = t,
                    this.root.scheduleUpdateProjection(),
                    this.isProjectionDirty = !0
                }
                setOptions(t) {
                    this.options = {
                        ...this.options,
                        ...t,
                        crossfade: void 0 === t.crossfade || t.crossfade
                    }
                }
                clearMeasurements() {
                    this.scroll = void 0,
                    this.layout = void 0,
                    this.snapshot = void 0,
                    this.prevTransformTemplateValue = void 0,
                    this.targetDelta = void 0,
                    this.target = void 0,
                    this.isLayoutDirty = !1
                }
                forceRelativeParentToResolveTarget() {
                    this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== L.timestamp && this.relativeParent.resolveTargetDelta(!0)
                }
                resolveTargetDelta(t=!1) {
                    var e, i, n, r;
                    let s = this.getLead();
                    this.isProjectionDirty || (this.isProjectionDirty = s.isProjectionDirty),
                    this.isTransformDirty || (this.isTransformDirty = s.isTransformDirty),
                    this.isSharedProjectionDirty || (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
                    let o = !!this.resumingFrom || this !== s;
                    if (!(t || o && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                        return;
                    let {layout: a, layoutId: l} = this.options;
                    if (this.layout && (a || l)) {
                        if (this.resolvedRelativeTargetAt = L.timestamp,
                        !this.targetDelta && !this.relativeTarget) {
                            let t = this.getClosestProjectingParent();
                            t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t,
                            this.forceRelativeParentToResolveTarget(),
                            this.relativeTarget = iY(),
                            this.relativeTargetOrigin = iY(),
                            iI(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox),
                            nE(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                        }
                        if (this.relativeTarget || this.targetDelta) {
                            if ((this.target || (this.target = iY(),
                            this.targetWithTransforms = iY()),
                            this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(),
                            i = this.target,
                            n = this.relativeTarget,
                            r = this.relativeParent.target,
                            iO(i.x, n.x, r.x),
                            iO(i.y, n.y, r.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : nE(this.target, this.layout.layoutBox),
                            i1(this.target, this.targetDelta)) : nE(this.target, this.layout.layoutBox),
                            this.attemptToResolveRelativeTarget) {
                                this.attemptToResolveRelativeTarget = !1;
                                let t = this.getClosestProjectingParent();
                                t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t,
                                this.forceRelativeParentToResolveTarget(),
                                this.relativeTarget = iY(),
                                this.relativeTargetOrigin = iY(),
                                iI(this.relativeTargetOrigin, this.target, t.target),
                                nE(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            nH && nK.resolvedTargetDeltas++
                        }
                    }
                }
                getClosestProjectingParent() {
                    return !this.parent || i_(this.parent.latestValues) || iJ(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                }
                isProjecting() {
                    return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                }
                calcProjection() {
                    var t;
                    let e = this.getLead()
                      , i = !!this.resumingFrom || this !== e
                      , n = !0;
                    if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (n = !1),
                    i && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1),
                    this.resolvedRelativeTargetAt === L.timestamp && (n = !1),
                    n)
                        return;
                    let {layout: r, layoutId: s} = this.options;
                    if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
                    this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
                    !this.layout || !(r || s))
                        return;
                    nE(this.layoutCorrected, this.layout.layoutBox);
                    let o = this.treeScale.x
                      , a = this.treeScale.y;
                    !function(t, e, i, n=!1) {
                        let r, s;
                        let o = i.length;
                        if (o) {
                            e.x = e.y = 1;
                            for (let a = 0; a < o; a++) {
                                s = (r = i[a]).projectionDelta;
                                let {visualElement: o} = r.options;
                                (!o || !o.props.style || "contents" !== o.props.style.display) && (n && r.options.layoutScroll && r.scroll && r !== r.root && i3(t, {
                                    x: -r.scroll.offset.x,
                                    y: -r.scroll.offset.y
                                }),
                                s && (e.x *= s.x.scale,
                                e.y *= s.y.scale,
                                i1(t, s)),
                                n && iq(r.latestValues) && i3(t, r.latestValues))
                            }
                            e.x < 1.0000000000001 && e.x > .999999999999 && (e.x = 1),
                            e.y < 1.0000000000001 && e.y > .999999999999 && (e.y = 1)
                        }
                    }(this.layoutCorrected, this.treeScale, this.path, i),
                    e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox,
                    e.targetWithTransforms = iY());
                    let {target: l} = e;
                    if (!l) {
                        this.prevProjectionDelta && (this.createProjectionDeltas(),
                        this.scheduleRender());
                        return
                    }
                    this.projectionDelta && this.prevProjectionDelta ? (nM(this.prevProjectionDelta.x, this.projectionDelta.x),
                    nM(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(),
                    iL(this.projectionDelta, this.layoutCorrected, l, this.latestValues),
                    this.treeScale.x === o && this.treeScale.y === a && nU(this.projectionDelta.x, this.prevProjectionDelta.x) && nU(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0,
                    this.scheduleRender(),
                    this.notifyListeners("projectionUpdate", l)),
                    nH && nK.recalculatedProjection++
                }
                hide() {
                    this.isVisible = !1
                }
                show() {
                    this.isVisible = !0
                }
                scheduleRender(t=!0) {
                    var e;
                    if (null === (e = this.options.visualElement) || void 0 === e || e.scheduleRender(),
                    t) {
                        let t = this.getStack();
                        t && t.scheduleRender()
                    }
                    this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                }
                createProjectionDeltas() {
                    this.prevProjectionDelta = iK(),
                    this.projectionDelta = iK(),
                    this.projectionDeltaWithTransform = iK()
                }
                setAnimationOrigin(t, e=!1) {
                    let i;
                    let n = this.snapshot
                      , r = n ? n.latestValues : {}
                      , s = {
                        ...this.latestValues
                    }
                      , o = iK();
                    this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0),
                    this.attemptToResolveRelativeTarget = !e;
                    let a = iY()
                      , l = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0)
                      , u = this.getStack()
                      , h = !u || u.members.length <= 1
                      , c = !!(l && !h && !0 === this.options.crossfade && !this.path.some(ri));
                    this.animationProgress = 0,
                    this.mixTargetDelta = e => {
                        let n = e / 1e3;
                        if (rt(o.x, t.x, n),
                        rt(o.y, t.y, n),
                        this.setTargetDelta(o),
                        this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                            var u, d, p, m;
                            iI(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                            p = this.relativeTarget,
                            m = this.relativeTargetOrigin,
                            re(p.x, m.x, a.x, n),
                            re(p.y, m.y, a.y, n),
                            i && (u = this.relativeTarget,
                            d = i,
                            nL(u.x, d.x) && nL(u.y, d.y)) && (this.isProjectionDirty = !1),
                            i || (i = iY()),
                            nE(i, this.relativeTarget)
                        }
                        l && (this.animationValues = s,
                        function(t, e, i, n, r, s) {
                            r ? (t.opacity = ex(0, void 0 !== i.opacity ? i.opacity : 1, nb(n)),
                            t.opacityExit = ex(void 0 !== e.opacity ? e.opacity : 1, 0, nT(n))) : s && (t.opacity = ex(void 0 !== e.opacity ? e.opacity : 1, void 0 !== i.opacity ? i.opacity : 1, n));
                            for (let r = 0; r < ny; r++) {
                                let s = `border${ng[r]}Radius`
                                  , o = nw(e, s)
                                  , a = nw(i, s);
                                (void 0 !== o || void 0 !== a) && (o || (o = 0),
                                a || (a = 0),
                                0 === o || 0 === a || nP(o) === nP(a) ? (t[s] = Math.max(ex(nx(o), nx(a), n), 0),
                                (tu.test(a) || tu.test(o)) && (t[s] += "%")) : t[s] = a)
                            }
                            (e.rotate || i.rotate) && (t.rotate = ex(e.rotate || 0, i.rotate || 0, n))
                        }(s, r, this.latestValues, n, c, h)),
                        this.root.scheduleUpdateProjection(),
                        this.scheduleRender(),
                        this.animationProgress = n
                    }
                    ,
                    this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                }
                startAnimation(t) {
                    this.notifyListeners("animationStart"),
                    this.currentAnimation && this.currentAnimation.stop(),
                    this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
                    this.pendingAnimation && (F(this.pendingAnimation),
                    this.pendingAnimation = void 0),
                    this.pendingAnimation = j.update( () => {
                        nl.hasAnimatedSinceResize = !0,
                        this.currentAnimation = function(t, e, i) {
                            let n = it(0) ? 0 : e4(0);
                            return n.start(eJ("", n, 1e3, i)),
                            n.animation
                        }(0, 0, {
                            ...t,
                            onUpdate: e => {
                                this.mixTargetDelta(e),
                                t.onUpdate && t.onUpdate(e)
                            }
                            ,
                            onComplete: () => {
                                t.onComplete && t.onComplete(),
                                this.completeAnimation()
                            }
                        }),
                        this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                        this.pendingAnimation = void 0
                    }
                    )
                }
                completeAnimation() {
                    this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
                    this.resumingFrom.preserveOpacity = void 0);
                    let t = this.getStack();
                    t && t.exitAnimationComplete(),
                    this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
                    this.notifyListeners("animationComplete")
                }
                finishAnimation() {
                    this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3),
                    this.currentAnimation.stop()),
                    this.completeAnimation()
                }
                applyTransformsToTarget() {
                    let t = this.getLead()
                      , {targetWithTransforms: e, target: i, layout: n, latestValues: r} = t;
                    if (e && i && n) {
                        if (this !== t && this.layout && n && ra(this.options.animationType, this.layout.layoutBox, n.layoutBox)) {
                            i = this.target || iY();
                            let e = ij(this.layout.layoutBox.x);
                            i.x.min = t.target.x.min,
                            i.x.max = i.x.min + e;
                            let n = ij(this.layout.layoutBox.y);
                            i.y.min = t.target.y.min,
                            i.y.max = i.y.min + n
                        }
                        nE(e, i),
                        i3(e, r),
                        iL(this.projectionDeltaWithTransform, this.layoutCorrected, e, r)
                    }
                }
                registerSharedNode(t, e) {
                    this.sharedNodes.has(t) || this.sharedNodes.set(t, new n$),
                    this.sharedNodes.get(t).add(e);
                    let i = e.options.initialPromotionConfig;
                    e.promote({
                        transition: i ? i.transition : void 0,
                        preserveFollowOpacity: i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(e) : void 0
                    })
                }
                isLead() {
                    let t = this.getStack();
                    return !t || t.lead === this
                }
                getLead() {
                    var t;
                    let {layoutId: e} = this.options;
                    return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                }
                getPrevLead() {
                    var t;
                    let {layoutId: e} = this.options;
                    return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                }
                getStack() {
                    let {layoutId: t} = this.options;
                    if (t)
                        return this.root.sharedNodes.get(t)
                }
                promote({needsReset: t, transition: e, preserveFollowOpacity: i}={}) {
                    let n = this.getStack();
                    n && n.promote(this, i),
                    t && (this.projectionDelta = void 0,
                    this.needsReset = !0),
                    e && this.setOptions({
                        transition: e
                    })
                }
                relegate() {
                    let t = this.getStack();
                    return !!t && t.relegate(this)
                }
                resetSkewAndRotation() {
                    let {visualElement: t} = this.options;
                    if (!t)
                        return;
                    let e = !1
                      , {latestValues: i} = t;
                    if ((i.z || i.rotate || i.rotateX || i.rotateY || i.rotateZ || i.skewX || i.skewY) && (e = !0),
                    !e)
                        return;
                    let n = {};
                    i.z && nX("z", t, n, this.animationValues);
                    for (let e = 0; e < nY.length; e++)
                        nX(`rotate${nY[e]}`, t, n, this.animationValues),
                        nX(`skew${nY[e]}`, t, n, this.animationValues);
                    for (let e in t.render(),
                    n)
                        t.setStaticValue(e, n[e]),
                        this.animationValues && (this.animationValues[e] = n[e]);
                    t.scheduleRender()
                }
                getProjectionStyles(t) {
                    var e, i;
                    if (!this.instance || this.isSVG)
                        return;
                    if (!this.isVisible)
                        return nZ;
                    let n = {
                        visibility: ""
                    }
                      , r = this.getTransformTemplate();
                    if (this.needsReset)
                        return this.needsReset = !1,
                        n.opacity = "",
                        n.pointerEvents = nz(null == t ? void 0 : t.pointerEvents) || "",
                        n.transform = r ? r(this.latestValues, "") : "none",
                        n;
                    let s = this.getLead();
                    if (!this.projectionDelta || !this.layout || !s.target) {
                        let e = {};
                        return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1,
                        e.pointerEvents = nz(null == t ? void 0 : t.pointerEvents) || ""),
                        this.hasProjected && !iq(this.latestValues) && (e.transform = r ? r({}, "") : "none",
                        this.hasProjected = !1),
                        e
                    }
                    let o = s.animationValues || s.latestValues;
                    this.applyTransformsToTarget(),
                    n.transform = function(t, e, i) {
                        let n = ""
                          , r = t.x.translate / e.x
                          , s = t.y.translate / e.y
                          , o = (null == i ? void 0 : i.z) || 0;
                        if ((r || s || o) && (n = `translate3d(${r}px, ${s}px, ${o}px) `),
                        (1 !== e.x || 1 !== e.y) && (n += `scale(${1 / e.x}, ${1 / e.y}) `),
                        i) {
                            let {transformPerspective: t, rotate: e, rotateX: r, rotateY: s, skewX: o, skewY: a} = i;
                            t && (n = `perspective(${t}px) ${n}`),
                            e && (n += `rotate(${e}deg) `),
                            r && (n += `rotateX(${r}deg) `),
                            s && (n += `rotateY(${s}deg) `),
                            o && (n += `skewX(${o}deg) `),
                            a && (n += `skewY(${a}deg) `)
                        }
                        let a = t.x.scale * e.x
                          , l = t.y.scale * e.y;
                        return (1 !== a || 1 !== l) && (n += `scale(${a}, ${l})`),
                        n || "none"
                    }(this.projectionDeltaWithTransform, this.treeScale, o),
                    r && (n.transform = r(o, n.transform));
                    let {x: a, y: l} = this.projectionDelta;
                    for (let t in n.transformOrigin = `${100 * a.origin}% ${100 * l.origin}% 0`,
                    s.animationValues ? n.opacity = s === this ? null !== (i = null !== (e = o.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit : n.opacity = s === this ? void 0 !== o.opacity ? o.opacity : "" : void 0 !== o.opacityExit ? o.opacityExit : 0,
                    nc) {
                        if (void 0 === o[t])
                            continue;
                        let {correct: e, applyTo: i} = nc[t]
                          , r = "none" === n.transform ? o[t] : e(o[t], s);
                        if (i) {
                            let t = i.length;
                            for (let e = 0; e < t; e++)
                                n[i[e]] = r
                        } else
                            n[t] = r
                    }
                    return this.options.layoutId && (n.pointerEvents = s === this ? nz(null == t ? void 0 : t.pointerEvents) || "" : "none"),
                    n
                }
                clearSnapshot() {
                    this.resumeFrom = this.snapshot = void 0
                }
                resetTree() {
                    this.root.nodes.forEach(t => {
                        var e;
                        return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                    }
                    ),
                    this.root.nodes.forEach(n5),
                    this.root.sharedNodes.clear()
                }
            }
        }
        function nq(t) {
            t.updateLayout()
        }
        function nJ(t) {
            var e;
            let i = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
            if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
                let {layoutBox: e, measuredBox: n} = t.layout
                  , {animationType: r} = t.options
                  , s = i.source !== t.layout.source;
                "size" === r ? iZ(t => {
                    let n = s ? i.measuredBox[t] : i.layoutBox[t]
                      , r = ij(n);
                    n.min = e[t].min,
                    n.max = n.min + r
                }
                ) : ra(r, i.layoutBox, e) && iZ(n => {
                    let r = s ? i.measuredBox[n] : i.layoutBox[n]
                      , o = ij(e[n]);
                    r.max = r.min + o,
                    t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0,
                    t.relativeTarget[n].max = t.relativeTarget[n].min + o)
                }
                );
                let o = iK();
                iL(o, e, i.layoutBox);
                let a = iK();
                s ? iL(a, t.applyTransform(n, !0), i.measuredBox) : iL(a, e, i.layoutBox);
                let l = !nF(o)
                  , u = !1;
                if (!t.resumeFrom) {
                    let n = t.getClosestProjectingParent();
                    if (n && !n.resumeFrom) {
                        let {snapshot: r, layout: s} = n;
                        if (r && s) {
                            let o = iY();
                            iI(o, i.layoutBox, r.layoutBox);
                            let a = iY();
                            iI(a, e, s.layoutBox),
                            nB(o, a) || (u = !0),
                            n.options.layoutRoot && (t.relativeTarget = a,
                            t.relativeTargetOrigin = o,
                            t.relativeParent = n)
                        }
                    }
                }
                t.notifyListeners("didUpdate", {
                    layout: e,
                    snapshot: i,
                    delta: a,
                    layoutDelta: o,
                    hasLayoutChanged: l,
                    hasRelativeTargetChanged: u
                })
            } else if (t.isLead()) {
                let {onExitComplete: e} = t.options;
                e && e()
            }
            t.options.transition = void 0
        }
        function nQ(t) {
            nH && nK.totalNodes++,
            t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)),
            t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
        }
        function n0(t) {
            t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
        }
        function n1(t) {
            t.clearSnapshot()
        }
        function n5(t) {
            t.clearMeasurements()
        }
        function n2(t) {
            t.isLayoutDirty = !1
        }
        function n3(t) {
            let {visualElement: e} = t.options;
            e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
            t.resetTransform()
        }
        function n9(t) {
            t.finishAnimation(),
            t.targetDelta = t.relativeTarget = t.target = void 0,
            t.isProjectionDirty = !0
        }
        function n6(t) {
            t.resolveTargetDelta()
        }
        function n4(t) {
            t.calcProjection()
        }
        function n7(t) {
            t.resetSkewAndRotation()
        }
        function n8(t) {
            t.removeLeadSnapshot()
        }
        function rt(t, e, i) {
            t.translate = ex(e.translate, 0, i),
            t.scale = ex(e.scale, 1, i),
            t.origin = e.origin,
            t.originPoint = e.originPoint
        }
        function re(t, e, i, n) {
            t.min = ex(e.min, i.min, n),
            t.max = ex(e.max, i.max, n)
        }
        function ri(t) {
            return t.animationValues && void 0 !== t.animationValues.opacityExit
        }
        let rn = {
            duration: .45,
            ease: [.4, 0, .1, 1]
        }
          , rr = t => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t)
          , rs = rr("applewebkit/") && !rr("chrome/") ? Math.round : R.Z;
        function ro(t) {
            t.min = rs(t.min),
            t.max = rs(t.max)
        }
        function ra(t, e, i) {
            return "position" === t || "preserve-aspect" === t && !(.2 >= Math.abs(nI(e) - nI(i)))
        }
        function rl(t) {
            var e;
            return t !== t.root && (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
        }
        let ru = n_({
            attachResizeListener: (t, e) => ix(t, "resize", e),
            measureScroll: () => ({
                x: document.documentElement.scrollLeft || document.body.scrollLeft,
                y: document.documentElement.scrollTop || document.body.scrollTop
            }),
            checkIsScrollRoot: () => !0
        })
          , rh = {
            current: void 0
        }
          , rc = n_({
            measureScroll: t => ({
                x: t.scrollLeft,
                y: t.scrollTop
            }),
            defaultParent: () => {
                if (!rh.current) {
                    let t = new ru({});
                    t.mount(window),
                    t.setOptions({
                        layoutScroll: !0
                    }),
                    rh.current = t
                }
                return rh.current
            }
            ,
            resetTransform: (t, e) => {
                t.style.transform = void 0 !== e ? e : "none"
            }
            ,
            checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
        });
        function rd(t, e) {
            let i = e ? "onHoverStart" : "onHoverEnd";
            return iP(t.current, e ? "pointerenter" : "pointerleave", (n, r) => {
                if ("touch" === n.pointerType || iD())
                    return;
                let s = t.getProps();
                t.animationState && s.whileHover && t.animationState.setActive("whileHover", e);
                let o = s[i];
                o && j.postRender( () => o(n, r))
            }
            , {
                passive: !t.getProps()[i]
            })
        }
        class rp extends ic {
            mount() {
                this.unmount = eg(rd(this.node, !0), rd(this.node, !1))
            }
            unmount() {}
        }
        class rm extends ic {
            constructor() {
                super(...arguments),
                this.isActive = !1
            }
            onFocus() {
                let t = !1;
                try {
                    t = this.node.current.matches(":focus-visible")
                } catch (e) {
                    t = !0
                }
                t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0),
                this.isActive = !0)
            }
            onBlur() {
                this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1),
                this.isActive = !1)
            }
            mount() {
                this.unmount = eg(ix(this.node.current, "focus", () => this.onFocus()), ix(this.node.current, "blur", () => this.onBlur()))
            }
            unmount() {}
        }
        let rf = (t, e) => !!e && (t === e || rf(t, e.parentElement));
        function rv(t, e) {
            if (!e)
                return;
            let i = new PointerEvent("pointer" + t);
            e(i, ig(i))
        }
        class rg extends ic {
            constructor() {
                super(...arguments),
                this.removeStartListeners = R.Z,
                this.removeEndListeners = R.Z,
                this.removeAccessibleListeners = R.Z,
                this.startPointerPress = (t, e) => {
                    if (this.isPressing)
                        return;
                    this.removeEndListeners();
                    let i = this.node.getProps()
                      , n = iP(window, "pointerup", (t, e) => {
                        if (!this.checkPressEnd())
                            return;
                        let {onTap: i, onTapCancel: n, globalTapTarget: r} = this.node.getProps()
                          , s = r || rf(this.node.current, t.target) ? i : n;
                        s && j.update( () => s(t, e))
                    }
                    , {
                        passive: !(i.onTap || i.onPointerUp)
                    })
                      , r = iP(window, "pointercancel", (t, e) => this.cancelPress(t, e), {
                        passive: !(i.onTapCancel || i.onPointerCancel)
                    });
                    this.removeEndListeners = eg(n, r),
                    this.startPress(t, e)
                }
                ,
                this.startAccessiblePress = () => {
                    let t = ix(this.node.current, "keydown", t => {
                        "Enter" !== t.key || this.isPressing || (this.removeEndListeners(),
                        this.removeEndListeners = ix(this.node.current, "keyup", t => {
                            "Enter" === t.key && this.checkPressEnd() && rv("up", (t, e) => {
                                let {onTap: i} = this.node.getProps();
                                i && j.postRender( () => i(t, e))
                            }
                            )
                        }
                        ),
                        rv("down", (t, e) => {
                            this.startPress(t, e)
                        }
                        ))
                    }
                    )
                      , e = ix(this.node.current, "blur", () => {
                        this.isPressing && rv("cancel", (t, e) => this.cancelPress(t, e))
                    }
                    );
                    this.removeAccessibleListeners = eg(t, e)
                }
            }
            startPress(t, e) {
                this.isPressing = !0;
                let {onTapStart: i, whileTap: n} = this.node.getProps();
                n && this.node.animationState && this.node.animationState.setActive("whileTap", !0),
                i && j.postRender( () => i(t, e))
            }
            checkPressEnd() {
                return this.removeEndListeners(),
                this.isPressing = !1,
                this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1),
                !iD()
            }
            cancelPress(t, e) {
                if (!this.checkPressEnd())
                    return;
                let {onTapCancel: i} = this.node.getProps();
                i && j.postRender( () => i(t, e))
            }
            mount() {
                let t = this.node.getProps()
                  , e = iP(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
                    passive: !(t.onTapStart || t.onPointerStart)
                })
                  , i = ix(this.node.current, "focus", this.startAccessiblePress);
                this.removeStartListeners = eg(e, i)
            }
            unmount() {
                this.removeStartListeners(),
                this.removeEndListeners(),
                this.removeAccessibleListeners()
            }
        }
        let ry = new WeakMap
          , rx = new WeakMap
          , rP = t => {
            let e = ry.get(t.target);
            e && e(t)
        }
          , rw = t => {
            t.forEach(rP)
        }
          , rb = {
            some: 0,
            all: 1
        };
        class rT extends ic {
            constructor() {
                super(...arguments),
                this.hasEnteredView = !1,
                this.isInView = !1
            }
            startObserver() {
                this.unmount();
                let {viewport: t={}} = this.node.getProps()
                  , {root: e, margin: i, amount: n="some", once: r} = t
                  , s = {
                    root: e ? e.current : void 0,
                    rootMargin: i,
                    threshold: "number" == typeof n ? n : rb[n]
                };
                return function(t, e, i) {
                    let n = function({root: t, ...e}) {
                        let i = t || document;
                        rx.has(i) || rx.set(i, {});
                        let n = rx.get(i)
                          , r = JSON.stringify(e);
                        return n[r] || (n[r] = new IntersectionObserver(rw,{
                            root: t,
                            ...e
                        })),
                        n[r]
                    }(e);
                    return ry.set(t, i),
                    n.observe(t),
                    () => {
                        ry.delete(t),
                        n.unobserve(t)
                    }
                }(this.node.current, s, t => {
                    let {isIntersecting: e} = t;
                    if (this.isInView === e || (this.isInView = e,
                    r && !e && this.hasEnteredView))
                        return;
                    e && (this.hasEnteredView = !0),
                    this.node.animationState && this.node.animationState.setActive("whileInView", e);
                    let {onViewportEnter: i, onViewportLeave: n} = this.node.getProps()
                      , s = e ? i : n;
                    s && s(t)
                }
                )
            }
            mount() {
                this.startObserver()
            }
            update() {
                if ("undefined" == typeof IntersectionObserver)
                    return;
                let {props: t, prevProps: e} = this.node;
                ["amount", "margin", "root"].some(function({viewport: t={}}, {viewport: e={}}={}) {
                    return i => t[i] !== e[i]
                }(t, e)) && this.startObserver()
            }
            unmount() {}
        }
        var rS = i(2899);
        let rA = (0,
        nr.createContext)({});
        var rE = i(3094);
        let rM = (0,
        nr.createContext)({
            strict: !1
        });
        function rV(t) {
            return r(t.animate) || d.some(e => a(t[e]))
        }
        function rC(t) {
            return !!(rV(t) || t.variants)
        }
        function rR(t) {
            return Array.isArray(t) ? t.join(" ") : t
        }
        let rD = {
            animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
            exit: ["exit"],
            drag: ["drag", "dragControls"],
            focus: ["whileFocus"],
            hover: ["whileHover", "onHoverStart", "onHoverEnd"],
            tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
            pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
            inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
            layout: ["layout", "layoutId"]
        }
          , rk = {};
        for (let t in rD)
            rk[t] = {
                isEnabled: e => rD[t].some(t => !!e[t])
            };
        var rj = i(2721);
        let rF = Symbol.for("motionComponentSymbol")
          , rL = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
        function rO(t) {
            if ("string" != typeof t || t.includes("-"))
                ;
            else if (rL.indexOf(t) > -1 || /[A-Z]/u.test(t))
                return !0;
            return !1
        }
        function rB(t, {style: e, vars: i}, n, r) {
            for (let s in Object.assign(t.style, e, r && r.getProjectionStyles(n)),
            i)
                t.style.setProperty(s, i[s])
        }
        let rI = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
        function rU(t, e, i, n) {
            for (let i in rB(t, e, void 0, n),
            e.attrs)
                t.setAttribute(rI.has(i) ? i : e7(i), e.attrs[i])
        }
        function r$(t, {layout: e, layoutId: i}) {
            return m.has(t) || t.startsWith("origin") || (e || void 0 !== i) && (!!nc[t] || "opacity" === t)
        }
        function rN(t, e, i) {
            var n;
            let {style: r} = t
              , s = {};
            for (let o in r)
                (it(r[o]) || e.style && it(e.style[o]) || r$(o, t) || (null === (n = null == i ? void 0 : i.getValue(o)) || void 0 === n ? void 0 : n.liveStyle) !== void 0) && (s[o] = r[o]);
            return s
        }
        function rW(t, e, i) {
            let n = rN(t, e, i);
            for (let i in t)
                (it(t[i]) || it(e[i])) && (n[-1 !== p.indexOf(i) ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i] = t[i]);
            return n
        }
        var rz = i(3714);
        let rK = t => (e, i) => {
            let n = (0,
            nr.useContext)(rA)
              , s = (0,
            nr.useContext)(ns.O)
              , o = () => (function({scrapeMotionValuesFromProps: t, createRenderState: e, onMount: i}, n, s, o) {
                let a = {
                    latestValues: function(t, e, i, n) {
                        let s = {}
                          , o = n(t, {});
                        for (let t in o)
                            s[t] = nz(o[t]);
                        let {initial: a, animate: l} = t
                          , h = rV(t)
                          , c = rC(t);
                        e && c && !h && !1 !== t.inherit && (void 0 === a && (a = e.initial),
                        void 0 === l && (l = e.animate));
                        let d = !!i && !1 === i.initial
                          , p = (d = d || !1 === a) ? l : a;
                        if (p && "boolean" != typeof p && !r(p)) {
                            let e = Array.isArray(p) ? p : [p];
                            for (let i = 0; i < e.length; i++) {
                                let n = u(t, e[i]);
                                if (n) {
                                    let {transitionEnd: t, transition: e, ...i} = n;
                                    for (let t in i) {
                                        let e = i[t];
                                        if (Array.isArray(e)) {
                                            let t = d ? e.length - 1 : 0;
                                            e = e[t]
                                        }
                                        null !== e && (s[t] = e)
                                    }
                                    for (let e in t)
                                        s[e] = t[e]
                                }
                            }
                        }
                        return s
                    }(n, s, o, t),
                    renderState: e()
                };
                return i && (a.mount = t => i(n, t, a)),
                a
            }
            )(t, e, n, s);
            return i ? o() : (0,
            rz.h)(o)
        }
          , rH = () => ({
            style: {},
            transform: {},
            transformOrigin: {},
            vars: {}
        })
          , rY = () => ({
            ...rH(),
            attrs: {}
        })
          , rZ = (t, e) => e && "number" == typeof t ? e.transform(t) : t
          , rG = {
            x: "translateX",
            y: "translateY",
            z: "translateZ",
            transformPerspective: "perspective"
        }
          , rX = p.length;
        function r_(t, e, i) {
            let {style: n, vars: r, transformOrigin: s} = t
              , o = !1
              , a = !1;
            for (let t in e) {
                let i = e[t];
                if (m.has(t)) {
                    o = !0;
                    continue
                }
                if (J(t)) {
                    r[t] = i;
                    continue
                }
                {
                    let e = rZ(i, t1[t]);
                    t.startsWith("origin") ? (a = !0,
                    s[t] = e) : n[t] = e
                }
            }
            if (!e.transform && (o || i ? n.transform = function(t, e, i) {
                let n = ""
                  , r = !0;
                for (let s = 0; s < rX; s++) {
                    let o = p[s]
                      , a = t[o];
                    if (void 0 === a)
                        continue;
                    let l = !0;
                    if (!(l = "number" == typeof a ? a === (o.startsWith("scale") ? 1 : 0) : 0 === parseFloat(a)) || i) {
                        let t = rZ(a, t1[o]);
                        if (!l) {
                            r = !1;
                            let e = rG[o] || o;
                            n += `${e}(${t}) `
                        }
                        i && (e[o] = t)
                    }
                }
                return n = n.trim(),
                i ? n = i(e, r ? "" : n) : r && (n = "none"),
                n
            }(e, t.transform, i) : n.transform && (n.transform = "none")),
            a) {
                let {originX: t="50%", originY: e="50%", originZ: i=0} = s;
                n.transformOrigin = `${t} ${e} ${i}`
            }
        }
        function rq(t, e, i) {
            return "string" == typeof t ? t : th.transform(e + i * t)
        }
        let rJ = {
            offset: "stroke-dashoffset",
            array: "stroke-dasharray"
        }
          , rQ = {
            offset: "strokeDashoffset",
            array: "strokeDasharray"
        };
        function r0(t, {attrX: e, attrY: i, attrScale: n, originX: r, originY: s, pathLength: o, pathSpacing: a=1, pathOffset: l=0, ...u}, h, c) {
            if (r_(t, u, c),
            h) {
                t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                return
            }
            t.attrs = t.style,
            t.style = {};
            let {attrs: d, style: p, dimensions: m} = t;
            d.transform && (m && (p.transform = d.transform),
            delete d.transform),
            m && (void 0 !== r || void 0 !== s || p.transform) && (p.transformOrigin = function(t, e, i) {
                let n = rq(e, t.x, t.width)
                  , r = rq(i, t.y, t.height);
                return `${n} ${r}`
            }(m, void 0 !== r ? r : .5, void 0 !== s ? s : .5)),
            void 0 !== e && (d.x = e),
            void 0 !== i && (d.y = i),
            void 0 !== n && (d.scale = n),
            void 0 !== o && function(t, e, i=1, n=0, r=!0) {
                t.pathLength = 1;
                let s = r ? rJ : rQ;
                t[s.offset] = th.transform(-n);
                let o = th.transform(e)
                  , a = th.transform(i);
                t[s.array] = `${o} ${a}`
            }(d, o, a, l, !1)
        }
        let r1 = t => "string" == typeof t && "svg" === t.toLowerCase()
          , r5 = {
            useVisualState: rK({
                scrapeMotionValuesFromProps: rW,
                createRenderState: rY,
                onMount: (t, e, {renderState: i, latestValues: n}) => {
                    j.read( () => {
                        try {
                            i.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                        } catch (t) {
                            i.dimensions = {
                                x: 0,
                                y: 0,
                                width: 0,
                                height: 0
                            }
                        }
                    }
                    ),
                    j.render( () => {
                        r0(i, n, r1(e.tagName), t.transformTemplate),
                        rU(e, i)
                    }
                    )
                }
            })
        }
          , r2 = {
            useVisualState: rK({
                scrapeMotionValuesFromProps: rN,
                createRenderState: rH
            })
        };
        function r3(t, e, i) {
            for (let n in e)
                it(e[n]) || r$(n, i) || (t[n] = e[n])
        }
        let r9 = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
        function r6(t) {
            return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || r9.has(t)
        }
        let r4 = t => !r6(t);
        try {
            (M = require("@emotion/is-prop-valid").default) && (r4 = t => t.startsWith("on") ? !r6(t) : M(t))
        } catch (t) {}
        let r7 = {
            current: null
        }
          , r8 = {
            current: !1
        }
          , st = new WeakMap
          , se = [...tb, t$, tX]
          , si = t => se.find(tw(t))
          , sn = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
        class sr {
            scrapeMotionValuesFromProps(t, e, i) {
                return {}
            }
            constructor({parent: t, props: e, presenceContext: i, reducedMotionConfig: n, blockInitialAnimation: r, visualState: s}, o={}) {
                this.current = null,
                this.children = new Set,
                this.isVariantNode = !1,
                this.isControllingVariants = !1,
                this.shouldReduceMotion = null,
                this.values = new Map,
                this.KeyframeResolver = tC,
                this.features = {},
                this.valueSubscriptions = new Map,
                this.prevMotionValues = {},
                this.events = {},
                this.propEventSubscriptions = {},
                this.notifyUpdate = () => this.notify("Update", this.latestValues),
                this.render = () => {
                    this.current && (this.triggerBuild(),
                    this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                }
                ,
                this.renderScheduledAt = 0,
                this.scheduleRender = () => {
                    let t = t8.now();
                    this.renderScheduledAt < t && (this.renderScheduledAt = t,
                    j.render(this.render, !1, !0))
                }
                ;
                let {latestValues: a, renderState: l} = s;
                this.latestValues = a,
                this.baseTarget = {
                    ...a
                },
                this.initialValues = e.initial ? {
                    ...a
                } : {},
                this.renderState = l,
                this.parent = t,
                this.props = e,
                this.presenceContext = i,
                this.depth = t ? t.depth + 1 : 0,
                this.reducedMotionConfig = n,
                this.options = o,
                this.blockInitialAnimation = !!r,
                this.isControllingVariants = rV(e),
                this.isVariantNode = rC(e),
                this.isVariantNode && (this.variantChildren = new Set),
                this.manuallyAnimateOnMount = !!(t && t.current);
                let {willChange: u, ...h} = this.scrapeMotionValuesFromProps(e, {}, this);
                for (let t in h) {
                    let e = h[t];
                    void 0 !== a[t] && it(e) && e.set(a[t], !1)
                }
            }
            mount(t) {
                this.current = t,
                st.set(t, this),
                this.projection && !this.projection.instance && this.projection.mount(t),
                this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
                this.values.forEach( (t, e) => this.bindToMotionValue(e, t)),
                r8.current || function() {
                    if (r8.current = !0,
                    rj.j) {
                        if (window.matchMedia) {
                            let t = window.matchMedia("(prefers-reduced-motion)")
                              , e = () => r7.current = t.matches;
                            t.addListener(e),
                            e()
                        } else
                            r7.current = !1
                    }
                }(),
                this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || r7.current),
                this.parent && this.parent.children.add(this),
                this.update(this.props, this.presenceContext)
            }
            unmount() {
                for (let t in st.delete(this.current),
                this.projection && this.projection.unmount(),
                F(this.notifyUpdate),
                F(this.render),
                this.valueSubscriptions.forEach(t => t()),
                this.valueSubscriptions.clear(),
                this.removeFromVariantTree && this.removeFromVariantTree(),
                this.parent && this.parent.children.delete(this),
                this.events)
                    this.events[t].clear();
                for (let t in this.features) {
                    let e = this.features[t];
                    e && (e.unmount(),
                    e.isMounted = !1)
                }
                this.current = null
            }
            bindToMotionValue(t, e) {
                let i;
                this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
                let n = m.has(t)
                  , r = e.on("change", e => {
                    this.latestValues[t] = e,
                    this.props.onUpdate && j.preRender(this.notifyUpdate),
                    n && this.projection && (this.projection.isTransformDirty = !0)
                }
                )
                  , s = e.on("renderRequest", this.scheduleRender);
                window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, t, e)),
                this.valueSubscriptions.set(t, () => {
                    r(),
                    s(),
                    i && i(),
                    e.owner && e.stop()
                }
                )
            }
            sortNodePosition(t) {
                return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
            }
            updateFeatures() {
                let t = "animation";
                for (t in rk) {
                    let e = rk[t];
                    if (!e)
                        continue;
                    let {isEnabled: i, Feature: n} = e;
                    if (!this.features[t] && n && i(this.props) && (this.features[t] = new n(this)),
                    this.features[t]) {
                        let e = this.features[t];
                        e.isMounted ? e.update() : (e.mount(),
                        e.isMounted = !0)
                    }
                }
            }
            triggerBuild() {
                this.build(this.renderState, this.latestValues, this.props)
            }
            measureViewportBox() {
                return this.current ? this.measureInstanceViewportBox(this.current, this.props) : iY()
            }
            getStaticValue(t) {
                return this.latestValues[t]
            }
            setStaticValue(t, e) {
                this.latestValues[t] = e
            }
            update(t, e) {
                (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
                this.prevProps = this.props,
                this.props = t,
                this.prevPresenceContext = this.presenceContext,
                this.presenceContext = e;
                for (let e = 0; e < sn.length; e++) {
                    let i = sn[e];
                    this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
                    delete this.propEventSubscriptions[i]);
                    let n = t["on" + i];
                    n && (this.propEventSubscriptions[i] = this.on(i, n))
                }
                this.prevMotionValues = function(t, e, i) {
                    for (let n in e) {
                        let r = e[n]
                          , s = i[n];
                        if (it(r))
                            t.addValue(n, r);
                        else if (it(s))
                            t.addValue(n, e4(r, {
                                owner: t
                            }));
                        else if (s !== r) {
                            if (t.hasValue(n)) {
                                let e = t.getValue(n);
                                !0 === e.liveStyle ? e.jump(r) : e.hasAnimated || e.set(r)
                            } else {
                                let e = t.getStaticValue(n);
                                t.addValue(n, e4(void 0 !== e ? e : r, {
                                    owner: t
                                }))
                            }
                        }
                    }
                    for (let n in i)
                        void 0 === e[n] && t.removeValue(n);
                    return e
                }(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues),
                this.handleChildMotionValue && this.handleChildMotionValue()
            }
            getProps() {
                return this.props
            }
            getVariant(t) {
                return this.props.variants ? this.props.variants[t] : void 0
            }
            getDefaultTransition() {
                return this.props.transition
            }
            getTransformPagePoint() {
                return this.props.transformPagePoint
            }
            getClosestVariantNode() {
                return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
            }
            addVariantChild(t) {
                let e = this.getClosestVariantNode();
                if (e)
                    return e.variantChildren && e.variantChildren.add(t),
                    () => e.variantChildren.delete(t)
            }
            addValue(t, e) {
                let i = this.values.get(t);
                e !== i && (i && this.removeValue(t),
                this.bindToMotionValue(t, e),
                this.values.set(t, e),
                this.latestValues[t] = e.get())
            }
            removeValue(t) {
                this.values.delete(t);
                let e = this.valueSubscriptions.get(t);
                e && (e(),
                this.valueSubscriptions.delete(t)),
                delete this.latestValues[t],
                this.removeValueFromRenderState(t, this.renderState)
            }
            hasValue(t) {
                return this.values.has(t)
            }
            getValue(t, e) {
                if (this.props.values && this.props.values[t])
                    return this.props.values[t];
                let i = this.values.get(t);
                return void 0 === i && void 0 !== e && (i = e4(null === e ? void 0 : e, {
                    owner: this
                }),
                this.addValue(t, i)),
                i
            }
            readValue(t, e) {
                var i;
                let n = void 0 === this.latestValues[t] && this.current ? null !== (i = this.getBaseTargetFromProps(this.props, t)) && void 0 !== i ? i : this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
                return null != n && ("string" == typeof n && (_(n) || G(n)) ? n = parseFloat(n) : !si(n) && tX.test(e) && (n = t3(t, e)),
                this.setBaseTarget(t, it(n) ? n.get() : n)),
                it(n) ? n.get() : n
            }
            setBaseTarget(t, e) {
                this.baseTarget[t] = e
            }
            getBaseTarget(t) {
                var e;
                let i;
                let {initial: n} = this.props;
                if ("string" == typeof n || "object" == typeof n) {
                    let r = u(this.props, n, null === (e = this.presenceContext) || void 0 === e ? void 0 : e.custom);
                    r && (i = r[t])
                }
                if (n && void 0 !== i)
                    return i;
                let r = this.getBaseTargetFromProps(this.props, t);
                return void 0 === r || it(r) ? void 0 !== this.initialValues[t] && void 0 === i ? void 0 : this.baseTarget[t] : r
            }
            on(t, e) {
                return this.events[t] || (this.events[t] = new e2),
                this.events[t].add(e)
            }
            notify(t, ...e) {
                this.events[t] && this.events[t].notify(...e)
            }
        }
        class ss extends sr {
            constructor() {
                super(...arguments),
                this.KeyframeResolver = t6
            }
            sortInstanceNodePosition(t, e) {
                return 2 & t.compareDocumentPosition(e) ? 1 : -1
            }
            getBaseTargetFromProps(t, e) {
                return t.style ? t.style[e] : void 0
            }
            removeValueFromRenderState(t, {vars: e, style: i}) {
                delete e[t],
                delete i[t]
            }
        }
        class so extends ss {
            constructor() {
                super(...arguments),
                this.type = "html",
                this.renderInstance = rB
            }
            readValueFromInstance(t, e) {
                if (m.has(e)) {
                    let t = t2(e);
                    return t && t.default || 0
                }
                {
                    let i = window.getComputedStyle(t)
                      , n = (J(e) ? i.getPropertyValue(e) : i[e]) || 0;
                    return "string" == typeof n ? n.trim() : n
                }
            }
            measureInstanceViewportBox(t, {transformPagePoint: e}) {
                return i9(t, e)
            }
            build(t, e, i) {
                r_(t, e, i.transformTemplate)
            }
            scrapeMotionValuesFromProps(t, e, i) {
                return rN(t, e, i)
            }
            handleChildMotionValue() {
                this.childSubscription && (this.childSubscription(),
                delete this.childSubscription);
                let {children: t} = this.props;
                it(t) && (this.childSubscription = t.on("change", t => {
                    this.current && (this.current.textContent = `${t}`)
                }
                ))
            }
        }
        class sa extends ss {
            constructor() {
                super(...arguments),
                this.type = "svg",
                this.isSVGTag = !1,
                this.measureInstanceViewportBox = iY
            }
            getBaseTargetFromProps(t, e) {
                return t[e]
            }
            readValueFromInstance(t, e) {
                if (m.has(e)) {
                    let t = t2(e);
                    return t && t.default || 0
                }
                return e = rI.has(e) ? e : e7(e),
                t.getAttribute(e)
            }
            scrapeMotionValuesFromProps(t, e, i) {
                return rW(t, e, i)
            }
            build(t, e, i) {
                r0(t, e, this.isSVGTag, i.transformTemplate)
            }
            renderInstance(t, e, i, n) {
                rU(t, e, i, n)
            }
            mount(t) {
                this.isSVGTag = r1(t.tagName),
                super.mount(t)
            }
        }
        let sl = function(t) {
            if ("undefined" == typeof Proxy)
                return t;
            let e = new Map;
            return new Proxy( (...e) => t(...e),{
                get: (i, n) => "create" === n ? t : (e.has(n) || e.set(n, t(n)),
                e.get(n))
            })
        }((V = {
            animation: {
                Feature: id
            },
            exit: {
                Feature: im
            },
            inView: {
                Feature: rT
            },
            tap: {
                Feature: rg
            },
            focus: {
                Feature: rm
            },
            hover: {
                Feature: rp
            },
            pan: {
                Feature: ni
            },
            drag: {
                Feature: nt,
                ProjectionNode: rc,
                MeasureLayout: nf
            },
            layout: {
                ProjectionNode: rc,
                MeasureLayout: nf
            }
        },
        C = (t, e) => rO(t) ? new sa(e) : new so(e,{
            allowProjection: t !== nr.Fragment
        }),
        function(t, {forwardMotionProps: e}={
            forwardMotionProps: !1
        }) {
            return function({preloadedFeatures: t, createVisualElement: e, useRender: i, useVisualState: n, Component: r}) {
                t && function(t) {
                    for (let e in t)
                        rk[e] = {
                            ...rk[e],
                            ...t[e]
                        }
                }(t);
                let s = (0,
                nr.forwardRef)(function(t, s) {
                    var o;
                    let l;
                    let u = {
                        ...(0,
                        nr.useContext)(rS._),
                        ...t,
                        layoutId: function({layoutId: t}) {
                            let e = (0,
                            nr.useContext)(no.p).id;
                            return e && void 0 !== t ? e + "-" + t : t
                        }(t)
                    }
                      , {isStatic: h} = u
                      , c = function(t) {
                        let {initial: e, animate: i} = function(t, e) {
                            if (rV(t)) {
                                let {initial: e, animate: i} = t;
                                return {
                                    initial: !1 === e || a(e) ? e : void 0,
                                    animate: a(i) ? i : void 0
                                }
                            }
                            return !1 !== t.inherit ? e : {}
                        }(t, (0,
                        nr.useContext)(rA));
                        return (0,
                        nr.useMemo)( () => ({
                            initial: e,
                            animate: i
                        }), [rR(e), rR(i)])
                    }(t)
                      , d = n(t, h);
                    if (!h && rj.j) {
                        (0,
                        nr.useContext)(rM).strict;
                        let t = function(t) {
                            let {drag: e, layout: i} = rk;
                            if (!e && !i)
                                return {};
                            let n = {
                                ...e,
                                ...i
                            };
                            return {
                                MeasureLayout: (null == e ? void 0 : e.isEnabled(t)) || (null == i ? void 0 : i.isEnabled(t)) ? n.MeasureLayout : void 0,
                                ProjectionNode: n.ProjectionNode
                            }
                        }(u);
                        l = t.MeasureLayout,
                        c.visualElement = function(t, e, i, n, r) {
                            var s, o;
                            let {visualElement: a} = (0,
                            nr.useContext)(rA)
                              , l = (0,
                            nr.useContext)(rM)
                              , u = (0,
                            nr.useContext)(ns.O)
                              , h = (0,
                            nr.useContext)(rS._).reducedMotion
                              , c = (0,
                            nr.useRef)();
                            n = n || l.renderer,
                            !c.current && n && (c.current = n(t, {
                                visualState: e,
                                parent: a,
                                props: i,
                                presenceContext: u,
                                blockInitialAnimation: !!u && !1 === u.initial,
                                reducedMotionConfig: h
                            }));
                            let d = c.current
                              , p = (0,
                            nr.useContext)(na);
                            d && !d.projection && r && ("html" === d.type || "svg" === d.type) && function(t, e, i, n) {
                                let {layoutId: r, layout: s, drag: o, dragConstraints: a, layoutScroll: l, layoutRoot: u} = e;
                                t.projection = new i(t.latestValues,e["data-framer-portal-id"] ? void 0 : function t(e) {
                                    if (e)
                                        return !1 !== e.options.allowProjection ? e.projection : t(e.parent)
                                }(t.parent)),
                                t.projection.setOptions({
                                    layoutId: r,
                                    layout: s,
                                    alwaysMeasureLayout: !!o || a && ik(a),
                                    visualElement: t,
                                    animationType: "string" == typeof s ? s : "both",
                                    initialPromotionConfig: n,
                                    layoutScroll: l,
                                    layoutRoot: u
                                })
                            }(c.current, i, r, p);
                            let m = (0,
                            nr.useRef)(!1);
                            (0,
                            nr.useInsertionEffect)( () => {
                                d && m.current && d.update(i, u)
                            }
                            );
                            let f = i[e8]
                              , v = (0,
                            nr.useRef)(!!f && !(null === (s = window.MotionHandoffIsComplete) || void 0 === s ? void 0 : s.call(window, f)) && (null === (o = window.MotionHasOptimisedAnimation) || void 0 === o ? void 0 : o.call(window, f)));
                            return (0,
                            rE.L)( () => {
                                d && (m.current = !0,
                                window.MotionIsMounted = !0,
                                d.updateFeatures(),
                                nd.render(d.render),
                                v.current && d.animationState && d.animationState.animateChanges())
                            }
                            ),
                            (0,
                            nr.useEffect)( () => {
                                d && (!v.current && d.animationState && d.animationState.animateChanges(),
                                v.current && (queueMicrotask( () => {
                                    var t;
                                    null === (t = window.MotionHandoffMarkAsComplete) || void 0 === t || t.call(window, f)
                                }
                                ),
                                v.current = !1))
                            }
                            ),
                            d
                        }(r, d, u, e, t.ProjectionNode)
                    }
                    return (0,
                    nn.jsxs)(rA.Provider, {
                        value: c,
                        children: [l && c.visualElement ? (0,
                        nn.jsx)(l, {
                            visualElement: c.visualElement,
                            ...u
                        }) : null, i(r, t, (o = c.visualElement,
                        (0,
                        nr.useCallback)(t => {
                            t && d.mount && d.mount(t),
                            o && (t ? o.mount(t) : o.unmount()),
                            s && ("function" == typeof s ? s(t) : ik(s) && (s.current = t))
                        }
                        , [o])), d, h, c.visualElement)]
                    })
                });
                return s[rF] = r,
                s
            }({
                ...rO(t) ? r5 : r2,
                preloadedFeatures: V,
                useRender: function(t=!1) {
                    return (e, i, n, {latestValues: r}, s) => {
                        let o = (rO(e) ? function(t, e, i, n) {
                            let r = (0,
                            nr.useMemo)( () => {
                                let i = rY();
                                return r0(i, e, r1(n), t.transformTemplate),
                                {
                                    ...i.attrs,
                                    style: {
                                        ...i.style
                                    }
                                }
                            }
                            , [e]);
                            if (t.style) {
                                let e = {};
                                r3(e, t.style, t),
                                r.style = {
                                    ...e,
                                    ...r.style
                                }
                            }
                            return r
                        }
                        : function(t, e) {
                            let i = {}
                              , n = function(t, e) {
                                let i = t.style || {}
                                  , n = {};
                                return r3(n, i, t),
                                Object.assign(n, function({transformTemplate: t}, e) {
                                    return (0,
                                    nr.useMemo)( () => {
                                        let i = rH();
                                        return r_(i, e, t),
                                        Object.assign({}, i.vars, i.style)
                                    }
                                    , [e])
                                }(t, e)),
                                n
                            }(t, e);
                            return t.drag && !1 !== t.dragListener && (i.draggable = !1,
                            n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = "none",
                            n.touchAction = !0 === t.drag ? "none" : `pan-${"x" === t.drag ? "y" : "x"}`),
                            void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (i.tabIndex = 0),
                            i.style = n,
                            i
                        }
                        )(i, r, s, e)
                          , a = function(t, e, i) {
                            let n = {};
                            for (let r in t)
                                ("values" !== r || "object" != typeof t.values) && (r4(r) || !0 === i && r6(r) || !e && !r6(r) || t.draggable && r.startsWith("onDrag")) && (n[r] = t[r]);
                            return n
                        }(i, "string" == typeof e, t)
                          , l = e !== nr.Fragment ? {
                            ...a,
                            ...o,
                            ref: n
                        } : {}
                          , {children: u} = i
                          , h = (0,
                        nr.useMemo)( () => it(u) ? u.get() : u, [u]);
                        return (0,
                        nr.createElement)(e, {
                            ...l,
                            children: h
                        })
                    }
                }(e),
                createVisualElement: C,
                Component: t
            })
        }
        ))
    },
    4807: function(t, e, i) {
        i.d(e, {
            K: function() {
                return r
            },
            k: function() {
                return s
            }
        });
        var n = i(5953);
        let r = n.Z
          , s = n.Z
    },
    2721: function(t, e, i) {
        i.d(e, {
            j: function() {
                return n
            }
        });
        let n = "undefined" != typeof window
    },
    5953: function(t, e, i) {
        i.d(e, {
            Z: function() {
                return n
            }
        });
        let n = t => t
    },
    3714: function(t, e, i) {
        i.d(e, {
            h: function() {
                return r
            }
        });
        var n = i(5271);
        function r(t) {
            let e = (0,
            n.useRef)(null);
            return null === e.current && (e.current = t()),
            e.current
        }
    },
    3094: function(t, e, i) {
        i.d(e, {
            L: function() {
                return r
            }
        });
        var n = i(5271);
        let r = i(2721).j ? n.useLayoutEffect : n.useEffect
    },
    3483: function(t, e, i) {
        i.d(e, {
            w_: function() {
                return h
            }
        });
        var n = i(5271)
          , r = {
            color: void 0,
            size: void 0,
            className: void 0,
            style: void 0,
            attr: void 0
        }
          , s = n.createContext && n.createContext(r)
          , o = ["attr", "size", "title"];
        function a() {
            return (a = Object.assign ? Object.assign.bind() : function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = arguments[e];
                    for (var n in i)
                        Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
                }
                return t
            }
            ).apply(this, arguments)
        }
        function l(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })),
                i.push.apply(i, n)
            }
            return i
        }
        function u(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? l(Object(i), !0).forEach(function(e) {
                    var n, r;
                    n = e,
                    r = i[e],
                    (n = function(t) {
                        var e = function(t, e) {
                            if ("object" != typeof t || !t)
                                return t;
                            var i = t[Symbol.toPrimitive];
                            if (void 0 !== i) {
                                var n = i.call(t, e || "default");
                                if ("object" != typeof n)
                                    return n;
                                throw TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === e ? String : Number)(t)
                        }(t, "string");
                        return "symbol" == typeof e ? e : e + ""
                    }(n))in t ? Object.defineProperty(t, n, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[n] = r
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : l(Object(i)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                })
            }
            return t
        }
        function h(t) {
            return e => n.createElement(c, a({
                attr: u({}, t.attr)
            }, e), function t(e) {
                return e && e.map( (e, i) => n.createElement(e.tag, u({
                    key: i
                }, e.attr), t(e.child)))
            }(t.child))
        }
        function c(t) {
            var e = e => {
                var i, {attr: r, size: s, title: l} = t, h = function(t, e) {
                    if (null == t)
                        return {};
                    var i, n, r = function(t, e) {
                        if (null == t)
                            return {};
                        var i = {};
                        for (var n in t)
                            if (Object.prototype.hasOwnProperty.call(t, n)) {
                                if (e.indexOf(n) >= 0)
                                    continue;
                                i[n] = t[n]
                            }
                        return i
                    }(t, e);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        for (n = 0; n < s.length; n++)
                            i = s[n],
                            !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(t, i) && (r[i] = t[i])
                    }
                    return r
                }(t, o), c = s || e.size || "1em";
                return e.className && (i = e.className),
                t.className && (i = (i ? i + " " : "") + t.className),
                n.createElement("svg", a({
                    stroke: "currentColor",
                    fill: "currentColor",
                    strokeWidth: "0"
                }, e.attr, r, h, {
                    className: i,
                    style: u(u({
                        color: t.color || e.color
                    }, e.style), t.style),
                    height: c,
                    width: c,
                    xmlns: "http://www.w3.org/2000/svg"
                }), l && n.createElement("title", null, l), t.children)
            }
            ;
            return void 0 !== s ? n.createElement(s.Consumer, null, t => e(t)) : e(r)
        }
    }
}]);