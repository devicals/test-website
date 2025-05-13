(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[26], {
    689: function(e, s, t) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/dashboard", function() {
            return t(8554)
        }
        ])
    },
    9103: function(e, s, t) {
        "use strict";
        var a = t(2676)
          , l = t(5498)
          , i = t(963)
          , r = t(4063);
        s.Z = () => {
            let e = (0,
            l.useRouter)();
            return (0,
            a.jsx)("header", {
                className: "w-full",
                children: (0,
                a.jsxs)("div", {
                    className: "flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8",
                    children: [(0,
                    a.jsx)("div", {
                        className: "cursor-pointer",
                        onClick: () => e.push("/"),
                        children: (0,
                        a.jsx)(i.Z, {})
                    }), "/dashboard" === e.pathname && (0,
                    a.jsx)("div", {
                        className: "flex items-center space-x-4",
                        children: (0,
                        a.jsx)(r.z, {
                            onClick: () => e.push("/"),
                            variant: "default",
                            size: "default",
                            children: "Home"
                        })
                    })]
                })
            })
        }
    },
    963: function(e, s, t) {
        "use strict";
        var a = t(2676);
        t(5271),
        s.Z = () => (0,
        a.jsx)("div", {
            className: "text-xl font-bold",
            children: "Logo"
        })
    },
    4063: function(e, s, t) {
        "use strict";
        t.d(s, {
            z: function() {
                return o
            }
        });
        var a = t(2676)
          , l = t(5271)
          , i = t(1557)
          , r = t(2808)
          , n = t(2582);
        let d = (0,
        r.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
            variants: {
                variant: {
                    default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
                    destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
                    outline: "text-foreground border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
                    secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
                    ghost: "hover:bg-accent hover:text-accent-foreground",
                    link: "text-primary underline-offset-4 hover:underline"
                },
                size: {
                    default: "h-9 px-4 py-2",
                    sm: "h-8 rounded-md px-3 text-xs",
                    lg: "h-10 rounded-md px-8",
                    icon: "h-9 w-9"
                }
            },
            defaultVariants: {
                variant: "default",
                size: "default"
            }
        })
          , o = l.forwardRef( (e, s) => {
            let {className: t, variant: l, size: r, asChild: o=!1, ...c} = e
              , u = o ? i.g7 : "button";
            return (0,
            a.jsx)(u, {
                className: (0,
                n.cn)(d({
                    variant: l,
                    size: r,
                    className: t
                })),
                ref: s,
                ...c
            })
        }
        );
        o.displayName = "Button"
    },
    5996: function(e, s, t) {
        "use strict";
        t.d(s, {
            Ol: function() {
                return n
            },
            Zb: function() {
                return r
            },
            aY: function() {
                return o
            },
            ll: function() {
                return d
            }
        });
        var a = t(2676)
          , l = t(5271)
          , i = t(2582);
        let r = l.forwardRef( (e, s) => {
            let {className: t, ...l} = e;
            return (0,
            a.jsx)("div", {
                ref: s,
                className: (0,
                i.cn)("rounded-[calc(var(--radius))] border-border border bg-card text-card-foreground shadow", t),
                ...l
            })
        }
        );
        r.displayName = "Card";
        let n = l.forwardRef( (e, s) => {
            let {className: t, ...l} = e;
            return (0,
            a.jsx)("div", {
                ref: s,
                className: (0,
                i.cn)("flex flex-col space-y-1.5 p-6", t),
                ...l
            })
        }
        );
        n.displayName = "CardHeader";
        let d = l.forwardRef( (e, s) => {
            let {className: t, ...l} = e;
            return (0,
            a.jsx)("h3", {
                ref: s,
                className: (0,
                i.cn)("font-semibold leading-none tracking-tight", t),
                ...l
            })
        }
        );
        d.displayName = "CardTitle",
        l.forwardRef( (e, s) => {
            let {className: t, ...l} = e;
            return (0,
            a.jsx)("p", {
                ref: s,
                className: (0,
                i.cn)("text-sm text-muted-foreground", t),
                ...l
            })
        }
        ).displayName = "CardDescription";
        let o = l.forwardRef( (e, s) => {
            let {className: t, ...l} = e;
            return (0,
            a.jsx)("div", {
                ref: s,
                className: (0,
                i.cn)("p-6 pt-0", t),
                ...l
            })
        }
        );
        o.displayName = "CardContent",
        l.forwardRef( (e, s) => {
            let {className: t, ...l} = e;
            return (0,
            a.jsx)("div", {
                ref: s,
                className: (0,
                i.cn)("flex items-center p-6 pt-0", t),
                ...l
            })
        }
        ).displayName = "CardFooter"
    },
    5697: function(e, s, t) {
        "use strict";
        t.d(s, {
            I: function() {
                return r
            }
        });
        var a = t(2676)
          , l = t(5271)
          , i = t(2582);
        let r = l.forwardRef( (e, s) => {
            let {className: t, type: l, ...r} = e;
            return (0,
            a.jsx)("input", {
                type: l,
                className: (0,
                i.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", t),
                ref: s,
                ...r
            })
        }
        );
        r.displayName = "Input"
    },
    3149: function(e, s, t) {
        "use strict";
        t.d(s, {
            _: function() {
                return o
            }
        });
        var a = t(2676)
          , l = t(5271)
          , i = t(4093)
          , r = t(2808)
          , n = t(2582);
        let d = (0,
        r.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70")
          , o = l.forwardRef( (e, s) => {
            let {className: t, ...l} = e;
            return (0,
            a.jsx)(i.f, {
                ref: s,
                className: (0,
                n.cn)(d(), t),
                ...l
            })
        }
        );
        o.displayName = i.f.displayName
    },
    1555: function(e, s, t) {
        "use strict";
        t.d(s, {
            SP: function() {
                return o
            },
            dr: function() {
                return d
            },
            mQ: function() {
                return n
            },
            nU: function() {
                return c
            }
        });
        var a = t(2676)
          , l = t(5271)
          , i = t(7630)
          , r = t(2582);
        let n = i.fC
          , d = l.forwardRef( (e, s) => {
            let {className: t, ...l} = e;
            return (0,
            a.jsx)(i.aV, {
                ref: s,
                className: (0,
                r.cn)("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", t),
                ...l
            })
        }
        );
        d.displayName = i.aV.displayName;
        let o = l.forwardRef( (e, s) => {
            let {className: t, ...l} = e;
            return (0,
            a.jsx)(i.xz, {
                ref: s,
                className: (0,
                r.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", t),
                ...l
            })
        }
        );
        o.displayName = i.xz.displayName;
        let c = l.forwardRef( (e, s) => {
            let {className: t, ...l} = e;
            return (0,
            a.jsx)(i.VY, {
                ref: s,
                className: (0,
                r.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", t),
                ...l
            })
        }
        );
        c.displayName = i.VY.displayName
    },
    8554: function(e, s, t) {
        "use strict";
        t.r(s),
        t.d(s, {
            default: function() {
                return _
            }
        });
        var a = t(2676)
          , l = t(5271)
          , i = t(5498)
          , r = t(4373)
          , n = t(2852)
          , d = t(9103)
          , o = t(4063)
          , c = t(5996)
          , u = t(1555)
          , x = t(5697)
          , h = t(2582);
        let p = l.forwardRef( (e, s) => {
            let {className: t, ...l} = e;
            return (0,
            a.jsx)("textarea", {
                className: (0,
                h.cn)("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", t),
                ref: s,
                ...l
            })
        }
        );
        p.displayName = "Textarea";
        var m = t(3149)
          , f = t(6536);
        let j = l.forwardRef( (e, s) => {
            let {className: t, ...l} = e;
            return (0,
            a.jsx)(f.fC, {
                className: (0,
                h.cn)("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", t),
                ...l,
                ref: s,
                children: (0,
                a.jsx)(f.bU, {
                    className: (0,
                    h.cn)("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0")
                })
            })
        }
        );
        j.displayName = f.fC.displayName;
        var g = t(1382)
          , v = t(7869);
        let b = g.fC
          , y = g.xz
          , N = g.h_
          , w = g.x8
          , C = l.forwardRef( (e, s) => {
            let {className: t, ...l} = e;
            return (0,
            a.jsx)(g.aV, {
                ref: s,
                className: (0,
                h.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", t),
                ...l
            })
        }
        );
        C.displayName = g.aV.displayName;
        let k = l.forwardRef( (e, s) => {
            let {className: t, children: l, ...i} = e;
            return (0,
            a.jsxs)(N, {
                children: [(0,
                a.jsx)(C, {}), (0,
                a.jsxs)(g.VY, {
                    ref: s,
                    className: (0,
                    h.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", t),
                    ...i,
                    children: [l, (0,
                    a.jsxs)(g.x8, {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                        children: [(0,
                        a.jsx)(v.Pxu, {
                            className: "h-4 w-4"
                        }), (0,
                        a.jsx)("span", {
                            className: "sr-only",
                            children: "Close"
                        })]
                    })]
                })]
            })
        }
        );
        k.displayName = g.VY.displayName;
        let S = e => {
            let {className: s, ...t} = e;
            return (0,
            a.jsx)("div", {
                className: (0,
                h.cn)("flex flex-col space-y-1.5 text-center sm:text-left", s),
                ...t
            })
        }
        ;
        S.displayName = "DialogHeader";
        let E = e => {
            let {className: s, ...t} = e;
            return (0,
            a.jsx)("div", {
                className: (0,
                h.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", s),
                ...t
            })
        }
        ;
        E.displayName = "DialogFooter";
        let z = l.forwardRef( (e, s) => {
            let {className: t, ...l} = e;
            return (0,
            a.jsx)(g.Dx, {
                ref: s,
                className: (0,
                h.cn)("text-lg font-semibold leading-none tracking-tight", t),
                ...l
            })
        }
        );
        z.displayName = g.Dx.displayName,
        l.forwardRef( (e, s) => {
            let {className: t, ...l} = e;
            return (0,
            a.jsx)(g.dk, {
                ref: s,
                className: (0,
                h.cn)("text-sm text-muted-foreground", t),
                ...l
            })
        }
        ).displayName = g.dk.displayName;
        var P = t(6699)
          , F = t(2125);
        function _() {
            let e = (0,
            i.useRouter)()
              , {toast: s} = (0,
            F.pm)()
              , [t,h] = (0,
            l.useState)({
                id: "",
                content: "",
                userId: ""
            })
              , [f,g] = (0,
            l.useState)([])
              , [v,N] = (0,
            l.useState)([])
              , [C,_] = (0,
            l.useState)(!0)
              , [T,I] = (0,
            l.useState)("profile")
              , [R,O] = (0,
            l.useState)(!1)
              , [L,H] = (0,
            l.useState)("")
              , [B,V] = (0,
            l.useState)(null)
              , [A,D] = (0,
            l.useState)({
                platform: "",
                url: "",
                icon: ""
            })
              , [Y,J] = (0,
            l.useState)(null)
              , [U,Z] = (0,
            l.useState)({
                title: "",
                content: "",
                excerpt: "",
                published: !1
            })
              , [G,X] = (0,
            l.useState)("")
              , [Q,W] = (0,
            l.useState)(!1);
            (0,
            l.useEffect)( () => {
                "true" === sessionStorage.getItem("secretAccess") && (W(!0),
                M())
            }
            , []);
            let M = async () => {
                try {
                    _(!0);
                    let e = await fetch("/api/first-user")
                      , s = await e.json();
                    if (!s.user) {
                        console.error("No user found"),
                        _(!1);
                        return
                    }
                    let t = await fetch("/api/user-data?userId=".concat(s.user.id))
                      , a = await t.json();
                    a.bio && (h(a.bio),
                    H(a.bio.content || "")),
                    a.socials && g(a.socials),
                    a.blogPosts && N(a.blogPosts),
                    _(!1)
                } catch (e) {
                    console.error("Error fetching first user data:", e),
                    _(!1)
                }
            }
              , q = async () => {
                try {
                    let e = t.userId
                      , a = await fetch("/api/bio/update", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            id: t.id || null,
                            userId: e,
                            content: L
                        })
                    })
                      , l = await a.json();
                    if (!a.ok)
                        throw Error(l.message || "Failed to update bio");
                    h({
                        ...t,
                        content: L
                    }),
                    O(!1),
                    s({
                        title: "Success",
                        description: "Bio updated successfully"
                    }),
                    M()
                } catch (e) {
                    console.error("Error updating bio:", e),
                    s({
                        variant: "destructive",
                        title: "Error",
                        description: "Failed to update bio"
                    })
                }
            }
              , K = async () => {
                try {
                    let e = t.userId
                      , a = await fetch("/api/social/create", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            userId: e,
                            platform: A.platform,
                            url: A.url
                        })
                    })
                      , l = await a.json();
                    if (!a.ok)
                        throw Error(l.message || "Failed to add social link");
                    D({
                        platform: "",
                        url: "",
                        icon: ""
                    }),
                    s({
                        title: "Success",
                        description: "Social link added successfully"
                    }),
                    M()
                } catch (e) {
                    console.error("Error adding social:", e),
                    s({
                        variant: "destructive",
                        title: "Error",
                        description: "Failed to add social link"
                    })
                }
            }
              , $ = async () => {
                try {
                    let e = await fetch("/api/social/update", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            id: B.id,
                            platform: B.platform,
                            url: B.url
                        })
                    })
                      , t = await e.json();
                    if (!e.ok)
                        throw Error(t.message || "Failed to update social link");
                    V(null),
                    s({
                        title: "Success",
                        description: "Social link updated successfully"
                    }),
                    M()
                } catch (e) {
                    console.error("Error updating social:", e),
                    s({
                        variant: "destructive",
                        title: "Error",
                        description: "Failed to update social link"
                    })
                }
            }
              , ee = async e => {
                try {
                    let t = await fetch("/api/social/delete", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            id: e
                        })
                    })
                      , a = await t.json();
                    if (!t.ok)
                        throw Error(a.message || "Failed to delete social link");
                    s({
                        title: "Success",
                        description: "Social link deleted successfully"
                    }),
                    M()
                } catch (e) {
                    console.error("Error deleting social:", e),
                    s({
                        variant: "destructive",
                        title: "Error",
                        description: "Failed to delete social link"
                    })
                }
            }
              , es = async () => {
                try {
                    let e = t.userId
                      , a = await fetch("/api/blog/create", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            userId: e,
                            title: U.title,
                            content: U.content,
                            excerpt: U.excerpt,
                            published: U.published
                        })
                    })
                      , l = await a.json();
                    if (!a.ok)
                        throw Error(l.message || "Failed to add blog post");
                    Z({
                        title: "",
                        content: "",
                        excerpt: "",
                        published: !1
                    }),
                    s({
                        title: "Success",
                        description: "Blog post added successfully"
                    }),
                    M()
                } catch (e) {
                    console.error("Error adding blog post:", e),
                    s({
                        variant: "destructive",
                        title: "Error",
                        description: "Failed to add blog post"
                    })
                }
            }
              , et = async () => {
                try {
                    let e = await fetch("/api/blog/update", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            id: Y.id,
                            title: Y.title,
                            content: Y.content,
                            excerpt: Y.excerpt,
                            published: Y.published
                        })
                    })
                      , t = await e.json();
                    if (!e.ok)
                        throw Error(t.message || "Failed to update blog post");
                    J(null),
                    s({
                        title: "Success",
                        description: "Blog post updated successfully"
                    }),
                    M()
                } catch (e) {
                    console.error("Error updating blog post:", e),
                    s({
                        variant: "destructive",
                        title: "Error",
                        description: "Failed to update blog post"
                    })
                }
            }
              , ea = async e => {
                try {
                    let t = await fetch("/api/blog/delete", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            id: e
                        })
                    })
                      , a = await t.json();
                    if (!t.ok)
                        throw Error(a.message || "Failed to delete blog post");
                    s({
                        title: "Success",
                        description: "Blog post deleted successfully"
                    }),
                    M()
                } catch (e) {
                    console.error("Error deleting blog post:", e),
                    s({
                        variant: "destructive",
                        title: "Error",
                        description: "Failed to delete blog post"
                    })
                }
            }
            ;
            return C ? (0,
            a.jsx)("div", {
                className: "min-h-screen bg-background flex items-center justify-center",
                children: (0,
                a.jsxs)("div", {
                    className: "text-center",
                    children: [(0,
                    a.jsx)("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent mx-auto mb-4"
                    }), (0,
                    a.jsx)("p", {
                        className: "text-muted-foreground",
                        children: "Loading..."
                    })]
                })
            }) : Q ? (0,
            a.jsxs)("div", {
                className: "min-h-screen bg-background flex flex-col font-mono",
                children: [(0,
                a.jsx)(d.Z, {}), (0,
                a.jsx)("main", {
                    className: "flex-1 container mx-auto px-4 py-8",
                    children: (0,
                    a.jsxs)(r.E.div, {
                        initial: {
                            opacity: 0,
                            y: 10
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .5
                        },
                        children: [(0,
                        a.jsxs)("div", {
                            className: "flex flex-col md:flex-row justify-between items-start md:items-center mb-8",
                            children: [(0,
                            a.jsxs)("div", {
                                children: [(0,
                                a.jsx)("h1", {
                                    className: "text-3xl font-bold text-accent",
                                    children: "Dashboard"
                                }), (0,
                                a.jsx)("p", {
                                    className: "text-muted-foreground",
                                    children: "Manage your profile, social links, and blog posts"
                                })]
                            }), (0,
                            a.jsx)(o.z, {
                                variant: "outline",
                                className: "mt-4 md:mt-0",
                                onClick: () => e.push("/"),
                                children: "View Public Profile"
                            })]
                        }), (0,
                        a.jsxs)(u.mQ, {
                            defaultValue: "profile",
                            value: T,
                            onValueChange: I,
                            className: "w-full",
                            children: [(0,
                            a.jsxs)(u.dr, {
                                className: "grid w-full grid-cols-3 mb-8",
                                children: [(0,
                                a.jsx)(u.SP, {
                                    value: "profile",
                                    children: "Profile"
                                }), (0,
                                a.jsx)(u.SP, {
                                    value: "socials",
                                    children: "Social Links"
                                }), (0,
                                a.jsx)(u.SP, {
                                    value: "blog",
                                    children: "Blog Posts"
                                })]
                            }), (0,
                            a.jsx)(n.M, {
                                mode: "wait",
                                children: (0,
                                a.jsxs)(r.E.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 10
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    exit: {
                                        opacity: 0,
                                        y: -10
                                    },
                                    transition: {
                                        duration: .3
                                    },
                                    children: [(0,
                                    a.jsx)(u.nU, {
                                        value: "profile",
                                        className: "space-y-6",
                                        children: (0,
                                        a.jsxs)(c.Zb, {
                                            children: [(0,
                                            a.jsx)(c.Ol, {
                                                children: (0,
                                                a.jsxs)(c.ll, {
                                                    className: "flex justify-between items-center",
                                                    children: [(0,
                                                    a.jsx)("span", {
                                                        children: "Bio"
                                                    }), (0,
                                                    a.jsxs)(o.z, {
                                                        variant: "outline",
                                                        size: "sm",
                                                        onClick: () => {
                                                            H((null == t ? void 0 : t.content) || ""),
                                                            O(!0)
                                                        }
                                                        ,
                                                        children: [(0,
                                                        a.jsx)(P.fmQ, {
                                                            className: "mr-2"
                                                        }), " Edit"]
                                                    })]
                                                })
                                            }), (0,
                                            a.jsx)(c.aY, {
                                                children: R ? (0,
                                                a.jsxs)("div", {
                                                    className: "space-y-4",
                                                    children: [(0,
                                                    a.jsx)(p, {
                                                        value: L,
                                                        onChange: e => H(e.target.value),
                                                        placeholder: "Write your bio here...",
                                                        className: "min-h-[150px]"
                                                    }), (0,
                                                    a.jsxs)("div", {
                                                        className: "flex justify-end space-x-2",
                                                        children: [(0,
                                                        a.jsx)(o.z, {
                                                            variant: "outline",
                                                            onClick: () => O(!1),
                                                            children: "Cancel"
                                                        }), (0,
                                                        a.jsx)(o.z, {
                                                            onClick: q,
                                                            children: "Save"
                                                        })]
                                                    })]
                                                }) : (0,
                                                a.jsx)("p", {
                                                    className: "text-muted-foreground whitespace-pre-wrap",
                                                    children: (null == t ? void 0 : t.content) || "No bio added yet. Click 'Edit' to add one."
                                                })
                                            })]
                                        })
                                    }), (0,
                                    a.jsx)(u.nU, {
                                        value: "socials",
                                        className: "space-y-6",
                                        children: (0,
                                        a.jsxs)(c.Zb, {
                                            children: [(0,
                                            a.jsx)(c.Ol, {
                                                children: (0,
                                                a.jsxs)(c.ll, {
                                                    className: "flex justify-between items-center",
                                                    children: [(0,
                                                    a.jsx)("span", {
                                                        children: "Social Links"
                                                    }), (0,
                                                    a.jsxs)(b, {
                                                        children: [(0,
                                                        a.jsx)(y, {
                                                            asChild: !0,
                                                            children: (0,
                                                            a.jsxs)(o.z, {
                                                                children: [(0,
                                                                a.jsx)(P.wEH, {
                                                                    className: "mr-2"
                                                                }), " Add New"]
                                                            })
                                                        }), (0,
                                                        a.jsxs)(k, {
                                                            children: [(0,
                                                            a.jsx)(S, {
                                                                children: (0,
                                                                a.jsx)(z, {
                                                                    children: "Add Social Link"
                                                                })
                                                            }), (0,
                                                            a.jsxs)("div", {
                                                                className: "space-y-4 py-4",
                                                                children: [(0,
                                                                a.jsxs)("div", {
                                                                    className: "space-y-2",
                                                                    children: [(0,
                                                                    a.jsx)(m._, {
                                                                        htmlFor: "platform",
                                                                        children: "Platform"
                                                                    }), (0,
                                                                    a.jsxs)("select", {
                                                                        id: "platform",
                                                                        className: "w-full p-2 rounded-md border border-input bg-background",
                                                                        value: A.platform,
                                                                        onChange: e => D({
                                                                            ...A,
                                                                            platform: e.target.value
                                                                        }),
                                                                        children: [(0,
                                                                        a.jsx)("option", {
                                                                            value: "",
                                                                            children: "Select Platform"
                                                                        }), (0,
                                                                        a.jsx)("option", {
                                                                            value: "GitHub",
                                                                            children: "GitHub"
                                                                        }), (0,
                                                                        a.jsx)("option", {
                                                                            value: "Twitter",
                                                                            children: "Twitter"
                                                                        }), (0,
                                                                        a.jsx)("option", {
                                                                            value: "LinkedIn",
                                                                            children: "LinkedIn"
                                                                        }), (0,
                                                                        a.jsx)("option", {
                                                                            value: "Email",
                                                                            children: "Email"
                                                                        })]
                                                                    })]
                                                                }), (0,
                                                                a.jsxs)("div", {
                                                                    className: "space-y-2",
                                                                    children: [(0,
                                                                    a.jsx)(m._, {
                                                                        htmlFor: "url",
                                                                        children: "URL"
                                                                    }), (0,
                                                                    a.jsx)(x.I, {
                                                                        id: "url",
                                                                        value: A.url,
                                                                        onChange: e => D({
                                                                            ...A,
                                                                            url: e.target.value
                                                                        }),
                                                                        placeholder: "https://..."
                                                                    })]
                                                                })]
                                                            }), (0,
                                                            a.jsxs)(E, {
                                                                children: [(0,
                                                                a.jsx)(w, {
                                                                    asChild: !0,
                                                                    children: (0,
                                                                    a.jsx)(o.z, {
                                                                        variant: "outline",
                                                                        children: "Cancel"
                                                                    })
                                                                }), (0,
                                                                a.jsx)(o.z, {
                                                                    onClick: K,
                                                                    disabled: !A.platform || !A.url,
                                                                    children: "Add"
                                                                })]
                                                            })]
                                                        })]
                                                    })]
                                                })
                                            }), (0,
                                            a.jsx)(c.aY, {
                                                children: f.length > 0 ? (0,
                                                a.jsx)("div", {
                                                    className: "space-y-4",
                                                    children: f.map(e => (0,
                                                    a.jsxs)("div", {
                                                        className: "flex items-center justify-between p-3 bg-secondary/30 rounded-md",
                                                        children: [(0,
                                                        a.jsxs)("div", {
                                                            className: "flex items-center",
                                                            children: [(0,
                                                            a.jsxs)("div", {
                                                                className: "bg-secondary p-2 rounded-full mr-3",
                                                                children: ["GitHub" === e.platform && (0,
                                                                a.jsx)(P.hJX, {
                                                                    size: 20
                                                                }), "Twitter" === e.platform && (0,
                                                                a.jsx)(P.fWC, {
                                                                    size: 20
                                                                }), "LinkedIn" === e.platform && (0,
                                                                a.jsx)(P.ltd, {
                                                                    size: 20
                                                                }), "Email" === e.platform && (0,
                                                                a.jsx)(P.SRX, {
                                                                    size: 20
                                                                })]
                                                            }), (0,
                                                            a.jsxs)("div", {
                                                                children: [(0,
                                                                a.jsx)("p", {
                                                                    className: "font-medium",
                                                                    children: e.platform
                                                                }), (0,
                                                                a.jsx)("p", {
                                                                    className: "text-sm text-muted-foreground truncate max-w-[200px]",
                                                                    children: e.url
                                                                })]
                                                            })]
                                                        }), (0,
                                                        a.jsxs)("div", {
                                                            className: "flex space-x-2",
                                                            children: [(0,
                                                            a.jsxs)(b, {
                                                                children: [(0,
                                                                a.jsx)(y, {
                                                                    asChild: !0,
                                                                    children: (0,
                                                                    a.jsx)(o.z, {
                                                                        variant: "ghost",
                                                                        size: "sm",
                                                                        onClick: () => V(e),
                                                                        children: (0,
                                                                        a.jsx)(P.fmQ, {})
                                                                    })
                                                                }), (0,
                                                                a.jsxs)(k, {
                                                                    children: [(0,
                                                                    a.jsx)(S, {
                                                                        children: (0,
                                                                        a.jsx)(z, {
                                                                            children: "Edit Social Link"
                                                                        })
                                                                    }), B && (0,
                                                                    a.jsxs)("div", {
                                                                        className: "space-y-4 py-4",
                                                                        children: [(0,
                                                                        a.jsxs)("div", {
                                                                            className: "space-y-2",
                                                                            children: [(0,
                                                                            a.jsx)(m._, {
                                                                                htmlFor: "edit-platform",
                                                                                children: "Platform"
                                                                            }), (0,
                                                                            a.jsxs)("select", {
                                                                                id: "edit-platform",
                                                                                className: "w-full p-2 rounded-md border border-input bg-background",
                                                                                value: B.platform,
                                                                                onChange: e => V({
                                                                                    ...B,
                                                                                    platform: e.target.value
                                                                                }),
                                                                                children: [(0,
                                                                                a.jsx)("option", {
                                                                                    value: "GitHub",
                                                                                    children: "GitHub"
                                                                                }), (0,
                                                                                a.jsx)("option", {
                                                                                    value: "Twitter",
                                                                                    children: "Twitter"
                                                                                }), (0,
                                                                                a.jsx)("option", {
                                                                                    value: "LinkedIn",
                                                                                    children: "LinkedIn"
                                                                                }), (0,
                                                                                a.jsx)("option", {
                                                                                    value: "Email",
                                                                                    children: "Email"
                                                                                })]
                                                                            })]
                                                                        }), (0,
                                                                        a.jsxs)("div", {
                                                                            className: "space-y-2",
                                                                            children: [(0,
                                                                            a.jsx)(m._, {
                                                                                htmlFor: "edit-url",
                                                                                children: "URL"
                                                                            }), (0,
                                                                            a.jsx)(x.I, {
                                                                                id: "edit-url",
                                                                                value: B.url,
                                                                                onChange: e => V({
                                                                                    ...B,
                                                                                    url: e.target.value
                                                                                }),
                                                                                placeholder: "https://..."
                                                                            })]
                                                                        })]
                                                                    }), (0,
                                                                    a.jsxs)(E, {
                                                                        children: [(0,
                                                                        a.jsx)(w, {
                                                                            asChild: !0,
                                                                            children: (0,
                                                                            a.jsx)(o.z, {
                                                                                variant: "outline",
                                                                                children: "Cancel"
                                                                            })
                                                                        }), (0,
                                                                        a.jsx)(o.z, {
                                                                            onClick: $,
                                                                            children: "Save Changes"
                                                                        })]
                                                                    })]
                                                                })]
                                                            }), (0,
                                                            a.jsx)(o.z, {
                                                                variant: "ghost",
                                                                size: "sm",
                                                                className: "text-destructive",
                                                                onClick: () => ee(e.id),
                                                                children: (0,
                                                                a.jsx)(P.Xm5, {})
                                                            })]
                                                        })]
                                                    }, e.id))
                                                }) : (0,
                                                a.jsxs)("div", {
                                                    className: "text-center py-8",
                                                    children: [(0,
                                                    a.jsx)("p", {
                                                        className: "text-muted-foreground mb-4",
                                                        children: "No social links added yet"
                                                    }), (0,
                                                    a.jsxs)(b, {
                                                        children: [(0,
                                                        a.jsx)(y, {
                                                            asChild: !0,
                                                            children: (0,
                                                            a.jsxs)(o.z, {
                                                                variant: "outline",
                                                                children: [(0,
                                                                a.jsx)(P.wEH, {
                                                                    className: "mr-2"
                                                                }), " Add Your First Link"]
                                                            })
                                                        }), (0,
                                                        a.jsxs)(k, {
                                                            children: [(0,
                                                            a.jsx)(S, {
                                                                children: (0,
                                                                a.jsx)(z, {
                                                                    children: "Add Social Link"
                                                                })
                                                            }), (0,
                                                            a.jsxs)("div", {
                                                                className: "space-y-4 py-4",
                                                                children: [(0,
                                                                a.jsxs)("div", {
                                                                    className: "space-y-2",
                                                                    children: [(0,
                                                                    a.jsx)(m._, {
                                                                        htmlFor: "platform",
                                                                        children: "Platform"
                                                                    }), (0,
                                                                    a.jsxs)("select", {
                                                                        id: "platform",
                                                                        className: "w-full p-2 rounded-md border border-input bg-background",
                                                                        value: A.platform,
                                                                        onChange: e => D({
                                                                            ...A,
                                                                            platform: e.target.value
                                                                        }),
                                                                        children: [(0,
                                                                        a.jsx)("option", {
                                                                            value: "",
                                                                            children: "Select Platform"
                                                                        }), (0,
                                                                        a.jsx)("option", {
                                                                            value: "GitHub",
                                                                            children: "GitHub"
                                                                        }), (0,
                                                                        a.jsx)("option", {
                                                                            value: "Twitter",
                                                                            children: "Twitter"
                                                                        }), (0,
                                                                        a.jsx)("option", {
                                                                            value: "LinkedIn",
                                                                            children: "LinkedIn"
                                                                        }), (0,
                                                                        a.jsx)("option", {
                                                                            value: "Email",
                                                                            children: "Email"
                                                                        })]
                                                                    })]
                                                                }), (0,
                                                                a.jsxs)("div", {
                                                                    className: "space-y-2",
                                                                    children: [(0,
                                                                    a.jsx)(m._, {
                                                                        htmlFor: "url",
                                                                        children: "URL"
                                                                    }), (0,
                                                                    a.jsx)(x.I, {
                                                                        id: "url",
                                                                        value: A.url,
                                                                        onChange: e => D({
                                                                            ...A,
                                                                            url: e.target.value
                                                                        }),
                                                                        placeholder: "https://..."
                                                                    })]
                                                                })]
                                                            }), (0,
                                                            a.jsxs)(E, {
                                                                children: [(0,
                                                                a.jsx)(w, {
                                                                    asChild: !0,
                                                                    children: (0,
                                                                    a.jsx)(o.z, {
                                                                        variant: "outline",
                                                                        children: "Cancel"
                                                                    })
                                                                }), (0,
                                                                a.jsx)(o.z, {
                                                                    onClick: K,
                                                                    disabled: !A.platform || !A.url,
                                                                    children: "Add"
                                                                })]
                                                            })]
                                                        })]
                                                    })]
                                                })
                                            })]
                                        })
                                    }), (0,
                                    a.jsx)(u.nU, {
                                        value: "blog",
                                        className: "space-y-6",
                                        children: (0,
                                        a.jsxs)(c.Zb, {
                                            children: [(0,
                                            a.jsx)(c.Ol, {
                                                children: (0,
                                                a.jsxs)(c.ll, {
                                                    className: "flex justify-between items-center",
                                                    children: [(0,
                                                    a.jsx)("span", {
                                                        children: "Blog Posts"
                                                    }), (0,
                                                    a.jsxs)(b, {
                                                        children: [(0,
                                                        a.jsx)(y, {
                                                            asChild: !0,
                                                            children: (0,
                                                            a.jsxs)(o.z, {
                                                                children: [(0,
                                                                a.jsx)(P.wEH, {
                                                                    className: "mr-2"
                                                                }), " New Post"]
                                                            })
                                                        }), (0,
                                                        a.jsxs)(k, {
                                                            className: "max-w-3xl",
                                                            children: [(0,
                                                            a.jsx)(S, {
                                                                children: (0,
                                                                a.jsx)(z, {
                                                                    children: "Create New Blog Post"
                                                                })
                                                            }), (0,
                                                            a.jsxs)("div", {
                                                                className: "space-y-4 py-4",
                                                                children: [(0,
                                                                a.jsxs)("div", {
                                                                    className: "space-y-2",
                                                                    children: [(0,
                                                                    a.jsx)(m._, {
                                                                        htmlFor: "title",
                                                                        children: "Title"
                                                                    }), (0,
                                                                    a.jsx)(x.I, {
                                                                        id: "title",
                                                                        value: U.title,
                                                                        onChange: e => Z({
                                                                            ...U,
                                                                            title: e.target.value
                                                                        }),
                                                                        placeholder: "Post title"
                                                                    })]
                                                                }), (0,
                                                                a.jsxs)("div", {
                                                                    className: "space-y-2",
                                                                    children: [(0,
                                                                    a.jsx)(m._, {
                                                                        htmlFor: "excerpt",
                                                                        children: "Excerpt (optional)"
                                                                    }), (0,
                                                                    a.jsx)(x.I, {
                                                                        id: "excerpt",
                                                                        value: U.excerpt,
                                                                        onChange: e => Z({
                                                                            ...U,
                                                                            excerpt: e.target.value
                                                                        }),
                                                                        placeholder: "Brief summary of your post"
                                                                    })]
                                                                }), (0,
                                                                a.jsxs)("div", {
                                                                    className: "space-y-2",
                                                                    children: [(0,
                                                                    a.jsx)(m._, {
                                                                        htmlFor: "content",
                                                                        children: "Content"
                                                                    }), (0,
                                                                    a.jsx)(p, {
                                                                        id: "content",
                                                                        value: U.content,
                                                                        onChange: e => Z({
                                                                            ...U,
                                                                            content: e.target.value
                                                                        }),
                                                                        placeholder: "Write your blog post content here...",
                                                                        className: "min-h-[200px]"
                                                                    })]
                                                                }), (0,
                                                                a.jsxs)("div", {
                                                                    className: "flex items-center space-x-2",
                                                                    children: [(0,
                                                                    a.jsx)(j, {
                                                                        id: "published",
                                                                        checked: U.published,
                                                                        onCheckedChange: e => Z({
                                                                            ...U,
                                                                            published: e
                                                                        })
                                                                    }), (0,
                                                                    a.jsx)(m._, {
                                                                        htmlFor: "published",
                                                                        children: "Publish immediately"
                                                                    })]
                                                                })]
                                                            }), (0,
                                                            a.jsxs)(E, {
                                                                children: [(0,
                                                                a.jsx)(w, {
                                                                    asChild: !0,
                                                                    children: (0,
                                                                    a.jsx)(o.z, {
                                                                        variant: "outline",
                                                                        children: "Cancel"
                                                                    })
                                                                }), (0,
                                                                a.jsx)(o.z, {
                                                                    onClick: es,
                                                                    disabled: !U.title || !U.content,
                                                                    children: "Create Post"
                                                                })]
                                                            })]
                                                        })]
                                                    })]
                                                })
                                            }), (0,
                                            a.jsx)(c.aY, {
                                                children: v.length > 0 ? (0,
                                                a.jsx)("div", {
                                                    className: "space-y-4",
                                                    children: v.map(e => (0,
                                                    a.jsxs)("div", {
                                                        className: "p-4 bg-secondary/30 rounded-md",
                                                        children: [(0,
                                                        a.jsxs)("div", {
                                                            className: "flex justify-between items-start mb-2",
                                                            children: [(0,
                                                            a.jsxs)("div", {
                                                                children: [(0,
                                                                a.jsx)("h3", {
                                                                    className: "font-bold text-lg",
                                                                    children: e.title
                                                                }), (0,
                                                                a.jsxs)("div", {
                                                                    className: "flex items-center space-x-2 text-sm text-muted-foreground",
                                                                    children: [(0,
                                                                    a.jsx)("span", {
                                                                        children: new Date(e.createdAt).toLocaleDateString()
                                                                    }), (0,
                                                                    a.jsx)("span", {
                                                                        children: "•"
                                                                    }), (0,
                                                                    a.jsx)("span", {
                                                                        className: e.published ? "text-green-400" : "text-yellow-400",
                                                                        children: e.published ? "Published" : "Draft"
                                                                    })]
                                                                })]
                                                            }), (0,
                                                            a.jsxs)("div", {
                                                                className: "flex space-x-2",
                                                                children: [(0,
                                                                a.jsxs)(b, {
                                                                    children: [(0,
                                                                    a.jsx)(y, {
                                                                        asChild: !0,
                                                                        children: (0,
                                                                        a.jsx)(o.z, {
                                                                            variant: "ghost",
                                                                            size: "sm",
                                                                            onClick: () => J(e),
                                                                            children: (0,
                                                                            a.jsx)(P.fmQ, {})
                                                                        })
                                                                    }), (0,
                                                                    a.jsxs)(k, {
                                                                        className: "max-w-3xl",
                                                                        children: [(0,
                                                                        a.jsx)(S, {
                                                                            children: (0,
                                                                            a.jsx)(z, {
                                                                                children: "Edit Blog Post"
                                                                            })
                                                                        }), Y && (0,
                                                                        a.jsxs)("div", {
                                                                            className: "space-y-4 py-4",
                                                                            children: [(0,
                                                                            a.jsxs)("div", {
                                                                                className: "space-y-2",
                                                                                children: [(0,
                                                                                a.jsx)(m._, {
                                                                                    htmlFor: "edit-title",
                                                                                    children: "Title"
                                                                                }), (0,
                                                                                a.jsx)(x.I, {
                                                                                    id: "edit-title",
                                                                                    value: Y.title,
                                                                                    onChange: e => J({
                                                                                        ...Y,
                                                                                        title: e.target.value
                                                                                    }),
                                                                                    placeholder: "Post title"
                                                                                })]
                                                                            }), (0,
                                                                            a.jsxs)("div", {
                                                                                className: "space-y-2",
                                                                                children: [(0,
                                                                                a.jsx)(m._, {
                                                                                    htmlFor: "edit-excerpt",
                                                                                    children: "Excerpt (optional)"
                                                                                }), (0,
                                                                                a.jsx)(x.I, {
                                                                                    id: "edit-excerpt",
                                                                                    value: Y.excerpt || "",
                                                                                    onChange: e => J({
                                                                                        ...Y,
                                                                                        excerpt: e.target.value
                                                                                    }),
                                                                                    placeholder: "Brief summary of your post"
                                                                                })]
                                                                            }), (0,
                                                                            a.jsxs)("div", {
                                                                                className: "space-y-2",
                                                                                children: [(0,
                                                                                a.jsx)(m._, {
                                                                                    htmlFor: "edit-content",
                                                                                    children: "Content"
                                                                                }), (0,
                                                                                a.jsx)(p, {
                                                                                    id: "edit-content",
                                                                                    value: Y.content,
                                                                                    onChange: e => J({
                                                                                        ...Y,
                                                                                        content: e.target.value
                                                                                    }),
                                                                                    placeholder: "Write your blog post content here...",
                                                                                    className: "min-h-[200px]"
                                                                                })]
                                                                            }), (0,
                                                                            a.jsxs)("div", {
                                                                                className: "flex items-center space-x-2",
                                                                                children: [(0,
                                                                                a.jsx)(j, {
                                                                                    id: "edit-published",
                                                                                    checked: Y.published,
                                                                                    onCheckedChange: e => J({
                                                                                        ...Y,
                                                                                        published: e
                                                                                    })
                                                                                }), (0,
                                                                                a.jsx)(m._, {
                                                                                    htmlFor: "edit-published",
                                                                                    children: "Published"
                                                                                })]
                                                                            })]
                                                                        }), (0,
                                                                        a.jsxs)(E, {
                                                                            children: [(0,
                                                                            a.jsx)(w, {
                                                                                asChild: !0,
                                                                                children: (0,
                                                                                a.jsx)(o.z, {
                                                                                    variant: "outline",
                                                                                    children: "Cancel"
                                                                                })
                                                                            }), (0,
                                                                            a.jsx)(o.z, {
                                                                                onClick: et,
                                                                                children: "Save Changes"
                                                                            })]
                                                                        })]
                                                                    })]
                                                                }), (0,
                                                                a.jsx)(o.z, {
                                                                    variant: "ghost",
                                                                    size: "sm",
                                                                    className: "text-destructive",
                                                                    onClick: () => ea(e.id),
                                                                    children: (0,
                                                                    a.jsx)(P.Xm5, {})
                                                                })]
                                                            })]
                                                        }), (0,
                                                        a.jsx)("p", {
                                                            className: "text-muted-foreground text-sm line-clamp-2 mt-2",
                                                            children: e.excerpt || e.content.substring(0, 150) + "..."
                                                        })]
                                                    }, e.id))
                                                }) : (0,
                                                a.jsxs)("div", {
                                                    className: "text-center py-8",
                                                    children: [(0,
                                                    a.jsx)("p", {
                                                        className: "text-muted-foreground mb-4",
                                                        children: "No blog posts yet"
                                                    }), (0,
                                                    a.jsxs)(b, {
                                                        children: [(0,
                                                        a.jsx)(y, {
                                                            asChild: !0,
                                                            children: (0,
                                                            a.jsxs)(o.z, {
                                                                variant: "outline",
                                                                children: [(0,
                                                                a.jsx)(P.wEH, {
                                                                    className: "mr-2"
                                                                }), " Create Your First Post"]
                                                            })
                                                        }), (0,
                                                        a.jsxs)(k, {
                                                            className: "max-w-3xl",
                                                            children: [(0,
                                                            a.jsx)(S, {
                                                                children: (0,
                                                                a.jsx)(z, {
                                                                    children: "Create New Blog Post"
                                                                })
                                                            }), (0,
                                                            a.jsxs)("div", {
                                                                className: "space-y-4 py-4",
                                                                children: [(0,
                                                                a.jsxs)("div", {
                                                                    className: "space-y-2",
                                                                    children: [(0,
                                                                    a.jsx)(m._, {
                                                                        htmlFor: "title",
                                                                        children: "Title"
                                                                    }), (0,
                                                                    a.jsx)(x.I, {
                                                                        id: "title",
                                                                        value: U.title,
                                                                        onChange: e => Z({
                                                                            ...U,
                                                                            title: e.target.value
                                                                        }),
                                                                        placeholder: "Post title"
                                                                    })]
                                                                }), (0,
                                                                a.jsxs)("div", {
                                                                    className: "space-y-2",
                                                                    children: [(0,
                                                                    a.jsx)(m._, {
                                                                        htmlFor: "excerpt",
                                                                        children: "Excerpt (optional)"
                                                                    }), (0,
                                                                    a.jsx)(x.I, {
                                                                        id: "excerpt",
                                                                        value: U.excerpt,
                                                                        onChange: e => Z({
                                                                            ...U,
                                                                            excerpt: e.target.value
                                                                        }),
                                                                        placeholder: "Brief summary of your post"
                                                                    })]
                                                                }), (0,
                                                                a.jsxs)("div", {
                                                                    className: "space-y-2",
                                                                    children: [(0,
                                                                    a.jsx)(m._, {
                                                                        htmlFor: "content",
                                                                        children: "Content"
                                                                    }), (0,
                                                                    a.jsx)(p, {
                                                                        id: "content",
                                                                        value: U.content,
                                                                        onChange: e => Z({
                                                                            ...U,
                                                                            content: e.target.value
                                                                        }),
                                                                        placeholder: "Write your blog post content here...",
                                                                        className: "min-h-[200px]"
                                                                    })]
                                                                }), (0,
                                                                a.jsxs)("div", {
                                                                    className: "flex items-center space-x-2",
                                                                    children: [(0,
                                                                    a.jsx)(j, {
                                                                        id: "published",
                                                                        checked: U.published,
                                                                        onCheckedChange: e => Z({
                                                                            ...U,
                                                                            published: e
                                                                        })
                                                                    }), (0,
                                                                    a.jsx)(m._, {
                                                                        htmlFor: "published",
                                                                        children: "Publish immediately"
                                                                    })]
                                                                })]
                                                            }), (0,
                                                            a.jsxs)(E, {
                                                                children: [(0,
                                                                a.jsx)(w, {
                                                                    asChild: !0,
                                                                    children: (0,
                                                                    a.jsx)(o.z, {
                                                                        variant: "outline",
                                                                        children: "Cancel"
                                                                    })
                                                                }), (0,
                                                                a.jsx)(o.z, {
                                                                    onClick: es,
                                                                    disabled: !U.title || !U.content,
                                                                    children: "Create Post"
                                                                })]
                                                            })]
                                                        })]
                                                    })]
                                                })
                                            })]
                                        })
                                    })]
                                }, T)
                            })]
                        })]
                    })
                })]
            }) : (0,
            a.jsxs)("div", {
                className: "min-h-screen bg-background flex flex-col items-center justify-center p-4",
                children: [(0,
                a.jsx)("h1", {
                    className: "text-2xl font-bold mb-6",
                    children: "Access Required"
                }), (0,
                a.jsx)("p", {
                    className: "text-muted-foreground mb-8 text-center",
                    children: "Enter the secret code to access the dashboard."
                }), (0,
                a.jsxs)("form", {
                    onSubmit: e => {
                        e.preventDefault(),
                        "1432" === G ? (W(!0),
                        sessionStorage.setItem("secretAccess", "true"),
                        M()) : X("")
                    }
                    ,
                    className: "flex flex-col gap-4 w-full max-w-[300px]",
                    children: [(0,
                    a.jsx)(x.I, {
                        type: "password",
                        placeholder: "Enter secret code",
                        value: G,
                        onChange: e => X(e.target.value),
                        className: "text-center"
                    }), (0,
                    a.jsx)(o.z, {
                        type: "submit",
                        variant: "default",
                        children: "Access Dashboard"
                    })]
                }), (0,
                a.jsx)(o.z, {
                    variant: "ghost",
                    className: "mt-8",
                    onClick: () => e.push("/"),
                    children: "Return to Home"
                })]
            })
        }
    }
}, function(e) {
    e.O(0, [385, 5, 203, 888, 774, 179], function() {
        return e(e.s = 689)
    }),
    _N_E = e.O()
}
]);