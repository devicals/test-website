(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[405], {
    4690: function(e, t, r) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
            return r(3055)
        }
        ])
    },
    9103: function(e, t, r) {
        "use strict";
        var a = r(2676)
          , s = r(5498)
          , n = r(963)
          , i = r(4063);
        t.Z = () => {
            let e = (0,
            s.useRouter)();
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
                        a.jsx)(n.Z, {})
                    }), "/dashboard" === e.pathname && (0,
                    a.jsx)("div", {
                        className: "flex items-center space-x-4",
                        children: (0,
                        a.jsx)(i.z, {
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
    963: function(e, t, r) {
        "use strict";
        var a = r(2676);
        r(5271),
        t.Z = () => (0,
        a.jsx)("div", {
            className: "text-xl font-bold",
            children: "Logo"
        })
    },
    4063: function(e, t, r) {
        "use strict";
        r.d(t, {
            z: function() {
                return d
            }
        });
        var a = r(2676)
          , s = r(5271)
          , n = r(1557)
          , i = r(2808)
          , o = r(2582);
        let l = (0,
        i.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
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
          , d = s.forwardRef( (e, t) => {
            let {className: r, variant: s, size: i, asChild: d=!1, ...c} = e
              , u = d ? n.g7 : "button";
            return (0,
            a.jsx)(u, {
                className: (0,
                o.cn)(l({
                    variant: s,
                    size: i,
                    className: r
                })),
                ref: t,
                ...c
            })
        }
        );
        d.displayName = "Button"
    },
    5996: function(e, t, r) {
        "use strict";
        r.d(t, {
            Ol: function() {
                return o
            },
            Zb: function() {
                return i
            },
            aY: function() {
                return d
            },
            ll: function() {
                return l
            }
        });
        var a = r(2676)
          , s = r(5271)
          , n = r(2582);
        let i = s.forwardRef( (e, t) => {
            let {className: r, ...s} = e;
            return (0,
            a.jsx)("div", {
                ref: t,
                className: (0,
                n.cn)("rounded-[calc(var(--radius))] border-border border bg-card text-card-foreground shadow", r),
                ...s
            })
        }
        );
        i.displayName = "Card";
        let o = s.forwardRef( (e, t) => {
            let {className: r, ...s} = e;
            return (0,
            a.jsx)("div", {
                ref: t,
                className: (0,
                n.cn)("flex flex-col space-y-1.5 p-6", r),
                ...s
            })
        }
        );
        o.displayName = "CardHeader";
        let l = s.forwardRef( (e, t) => {
            let {className: r, ...s} = e;
            return (0,
            a.jsx)("h3", {
                ref: t,
                className: (0,
                n.cn)("font-semibold leading-none tracking-tight", r),
                ...s
            })
        }
        );
        l.displayName = "CardTitle",
        s.forwardRef( (e, t) => {
            let {className: r, ...s} = e;
            return (0,
            a.jsx)("p", {
                ref: t,
                className: (0,
                n.cn)("text-sm text-muted-foreground", r),
                ...s
            })
        }
        ).displayName = "CardDescription";
        let d = s.forwardRef( (e, t) => {
            let {className: r, ...s} = e;
            return (0,
            a.jsx)("div", {
                ref: t,
                className: (0,
                n.cn)("p-6 pt-0", r),
                ...s
            })
        }
        );
        d.displayName = "CardContent",
        s.forwardRef( (e, t) => {
            let {className: r, ...s} = e;
            return (0,
            a.jsx)("div", {
                ref: t,
                className: (0,
                n.cn)("flex items-center p-6 pt-0", r),
                ...s
            })
        }
        ).displayName = "CardFooter"
    },
    5697: function(e, t, r) {
        "use strict";
        r.d(t, {
            I: function() {
                return i
            }
        });
        var a = r(2676)
          , s = r(5271)
          , n = r(2582);
        let i = s.forwardRef( (e, t) => {
            let {className: r, type: s, ...i} = e;
            return (0,
            a.jsx)("input", {
                type: s,
                className: (0,
                n.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", r),
                ref: t,
                ...i
            })
        }
        );
        i.displayName = "Input"
    },
    5681: function(e, t, r) {
        "use strict";
        r.d(t, {
            Z: function() {
                return o
            }
        });
        var a = r(2676)
          , s = r(5271)
          , n = r(8040)
          , i = r(2582);
        let o = s.forwardRef( (e, t) => {
            let {className: r, orientation: s="horizontal", decorative: o=!0, ...l} = e;
            return (0,
            a.jsx)(n.f, {
                ref: t,
                decorative: o,
                orientation: s,
                className: (0,
                i.cn)("shrink-0 bg-border", "horizontal" === s ? "h-[1px] w-full" : "h-full w-[1px]", r),
                ...l
            })
        }
        );
        o.displayName = n.f.displayName
    },
    1555: function(e, t, r) {
        "use strict";
        r.d(t, {
            SP: function() {
                return d
            },
            dr: function() {
                return l
            },
            mQ: function() {
                return o
            },
            nU: function() {
                return c
            }
        });
        var a = r(2676)
          , s = r(5271)
          , n = r(7630)
          , i = r(2582);
        let o = n.fC
          , l = s.forwardRef( (e, t) => {
            let {className: r, ...s} = e;
            return (0,
            a.jsx)(n.aV, {
                ref: t,
                className: (0,
                i.cn)("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", r),
                ...s
            })
        }
        );
        l.displayName = n.aV.displayName;
        let d = s.forwardRef( (e, t) => {
            let {className: r, ...s} = e;
            return (0,
            a.jsx)(n.xz, {
                ref: t,
                className: (0,
                i.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", r),
                ...s
            })
        }
        );
        d.displayName = n.xz.displayName;
        let c = s.forwardRef( (e, t) => {
            let {className: r, ...s} = e;
            return (0,
            a.jsx)(n.VY, {
                ref: t,
                className: (0,
                i.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", r),
                ...s
            })
        }
        );
        c.displayName = n.VY.displayName
    },
    3055: function(e, t, r) {
        "use strict";
        r.r(t),
        r.d(t, {
            __N_SSP: function() {
                return b
            },
            default: function() {
                return g
            }
        });
        var a = r(2676)
          , s = r(5271)
          , n = r(7575)
          , i = r.n(n)
          , o = r(4373)
          , l = r(2852)
          , d = r(5498)
          , c = r(9103)
          , u = r(4063)
          , m = r(5996)
          , f = r(5697)
          , x = r(1555)
          , p = r(5681)
          , h = r(6699)
          , b = !0;
        function g(e) {
            let {bio: t, socials: r, blogPosts: n} = e
              , b = (0,
            d.useRouter)()
              , [g,v] = (0,
            s.useState)("")
              , [j,y] = (0,
            s.useState)(!1)
              , [N,w] = (0,
            s.useState)("about");
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsxs)(i(), {
                    children: [(0,
                    a.jsx)("title", {
                        children: "Developer Portfolio"
                    }), (0,
                    a.jsx)("meta", {
                        name: "description",
                        content: "My developer portfolio and blog"
                    }), (0,
                    a.jsx)("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }), (0,
                    a.jsx)("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }), (0,
                    a.jsx)("link", {
                        href: "https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap",
                        rel: "stylesheet"
                    })]
                }), (0,
                a.jsxs)("div", {
                    className: "bg-background min-h-screen flex flex-col font-mono",
                    children: [(0,
                    a.jsx)(c.Z, {}), (0,
                    a.jsxs)(o.E.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .6
                        },
                        className: "relative flex flex-col items-center justify-center py-20 px-4 text-center",
                        children: [(0,
                        a.jsxs)("div", {
                            className: "absolute inset-0 overflow-hidden",
                            children: [(0,
                            a.jsx)("div", {
                                className: "absolute inset-0 bg-gradient-to-b from-background/80 to-background"
                            }), (0,
                            a.jsx)("div", {
                                className: "absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10"
                            })]
                        }), (0,
                        a.jsxs)(o.E.div, {
                            className: "relative z-10 max-w-3xl mx-auto",
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                delay: .2,
                                duration: .8
                            },
                            children: [(0,
                            a.jsx)(o.E.div, {
                                className: "text-accent text-lg mb-2",
                                initial: {
                                    opacity: 0,
                                    y: 10
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: .3,
                                    duration: .5
                                },
                                children: "Hello, world!"
                            }), (0,
                            a.jsxs)(o.E.h1, {
                                className: "text-4xl md:text-6xl font-bold mb-4",
                                initial: {
                                    opacity: 0,
                                    y: 10
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: .4,
                                    duration: .5
                                },
                                children: ["I'm a ", (0,
                                a.jsx)("span", {
                                    className: "text-accent",
                                    children: "Developer"
                                })]
                            }), (0,
                            a.jsx)(o.E.p, {
                                className: "text-lg md:text-xl text-muted-foreground mb-8",
                                initial: {
                                    opacity: 0,
                                    y: 10
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: .5,
                                    duration: .5
                                },
                                children: (null == t ? void 0 : t.content) || "Welcome to my developer portfolio and blog."
                            }), (0,
                            a.jsx)(o.E.div, {
                                className: "flex flex-wrap justify-center gap-4",
                                initial: {
                                    opacity: 0,
                                    y: 10
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: .6,
                                    duration: .5
                                },
                                children: null == r ? void 0 : r.map(e => (0,
                                a.jsxs)(o.E.a, {
                                    href: e.url,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors duration-200 p-3 rounded-full",
                                    whileHover: {
                                        scale: 1.1
                                    },
                                    whileTap: {
                                        scale: .95
                                    },
                                    children: ["GitHub" === e.platform && (0,
                                    a.jsx)(h.hJX, {
                                        size: 24
                                    }), "Twitter" === e.platform && (0,
                                    a.jsx)(h.fWC, {
                                        size: 24
                                    }), "LinkedIn" === e.platform && (0,
                                    a.jsx)(h.ltd, {
                                        size: 24
                                    }), "Email" === e.platform && (0,
                                    a.jsx)(h.SRX, {
                                        size: 24
                                    })]
                                }, e.id))
                            }), (0,
                            a.jsxs)("div", {
                                className: "mt-8",
                                children: [(0,
                                a.jsx)(u.z, {
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: () => {
                                        y(!j)
                                    }
                                    ,
                                    className: "text-muted-foreground hover:text-foreground",
                                    children: "•••"
                                }), j && (0,
                                a.jsxs)(o.E.form, {
                                    initial: {
                                        opacity: 0,
                                        scale: .8
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    className: "mt-4 flex flex-col gap-2 max-w-[200px] mx-auto",
                                    onSubmit: e => {
                                        e.preventDefault(),
                                        "1432" === g ? (sessionStorage.setItem("secretAccess", "true"),
                                        b.push("/dashboard")) : v("")
                                    }
                                    ,
                                    children: [(0,
                                    a.jsx)(f.I, {
                                        type: "password",
                                        placeholder: "Enter secret code",
                                        value: g,
                                        onChange: e => v(e.target.value),
                                        className: "text-center"
                                    }), (0,
                                    a.jsx)(u.z, {
                                        type: "submit",
                                        variant: "outline",
                                        children: "Access Dashboard"
                                    })]
                                })]
                            })]
                        })]
                    }), (0,
                    a.jsx)("main", {
                        className: "flex-1 container mx-auto px-4 py-12",
                        children: (0,
                        a.jsxs)(x.mQ, {
                            defaultValue: "about",
                            value: N,
                            onValueChange: w,
                            className: "w-full",
                            children: [(0,
                            a.jsxs)(x.dr, {
                                className: "grid w-full grid-cols-2 mb-8",
                                children: [(0,
                                a.jsx)(x.SP, {
                                    value: "about",
                                    children: "About Me"
                                }), (0,
                                a.jsx)(x.SP, {
                                    value: "blog",
                                    children: "Blog"
                                })]
                            }), (0,
                            a.jsx)(l.M, {
                                mode: "wait",
                                children: (0,
                                a.jsxs)(o.E.div, {
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
                                    a.jsxs)(x.nU, {
                                        value: "about",
                                        className: "space-y-8",
                                        children: [(0,
                                        a.jsx)(m.Zb, {
                                            className: "bg-card/50 backdrop-blur-sm border border-border/50",
                                            children: (0,
                                            a.jsxs)(m.aY, {
                                                className: "pt-6",
                                                children: [(0,
                                                a.jsx)("h2", {
                                                    className: "text-2xl font-bold mb-4",
                                                    children: "About Me"
                                                }), (0,
                                                a.jsx)("p", {
                                                    className: "text-muted-foreground leading-relaxed",
                                                    children: (null == t ? void 0 : t.content) || "I'm a passionate developer with expertise in web development, \n                          focusing on modern JavaScript frameworks like React and Next.js. \n                          I love building beautiful, responsive, and accessible web applications \n                          that solve real-world problems."
                                                }), (0,
                                                a.jsx)(p.Z, {
                                                    className: "my-6"
                                                }), (0,
                                                a.jsx)("h3", {
                                                    className: "text-xl font-bold mb-4",
                                                    children: "Skills"
                                                }), (0,
                                                a.jsx)("div", {
                                                    className: "grid grid-cols-2 md:grid-cols-3 gap-3",
                                                    children: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "CSS/Tailwind"].map(e => (0,
                                                    a.jsx)("div", {
                                                        className: "bg-secondary/50 rounded-md px-3 py-2 text-sm",
                                                        children: e
                                                    }, e))
                                                })]
                                            })
                                        }), (0,
                                        a.jsx)(m.Zb, {
                                            className: "bg-card/50 backdrop-blur-sm border border-border/50",
                                            children: (0,
                                            a.jsxs)(m.aY, {
                                                className: "pt-6",
                                                children: [(0,
                                                a.jsx)("h2", {
                                                    className: "text-2xl font-bold mb-4",
                                                    children: "Projects"
                                                }), (0,
                                                a.jsxs)("div", {
                                                    className: "space-y-6",
                                                    children: [(0,
                                                    a.jsxs)("div", {
                                                        children: [(0,
                                                        a.jsx)("h3", {
                                                            className: "text-lg font-bold text-accent",
                                                            children: "Personal Portfolio"
                                                        }), (0,
                                                        a.jsx)("p", {
                                                            className: "text-sm text-muted-foreground mb-2",
                                                            children: "Next.js, Tailwind CSS, Framer Motion"
                                                        }), (0,
                                                        a.jsx)("p", {
                                                            className: "text-muted-foreground",
                                                            children: "A developer-themed portfolio website with blog functionality."
                                                        })]
                                                    }), (0,
                                                    a.jsx)(p.Z, {}), (0,
                                                    a.jsxs)("div", {
                                                        children: [(0,
                                                        a.jsx)("h3", {
                                                            className: "text-lg font-bold text-accent",
                                                            children: "Project Management App"
                                                        }), (0,
                                                        a.jsx)("p", {
                                                            className: "text-sm text-muted-foreground mb-2",
                                                            children: "React, Node.js, PostgreSQL"
                                                        }), (0,
                                                        a.jsx)("p", {
                                                            className: "text-muted-foreground",
                                                            children: "A full-stack application for managing projects and tasks."
                                                        })]
                                                    })]
                                                })]
                                            })
                                        })]
                                    }), (0,
                                    a.jsx)(x.nU, {
                                        value: "blog",
                                        className: "space-y-6",
                                        children: n && n.length > 0 ? n.map(e => (0,
                                        a.jsx)(o.E.div, {
                                            initial: {
                                                opacity: 0,
                                                y: 20
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                duration: .5
                                            },
                                            className: "group",
                                            children: (0,
                                            a.jsx)(m.Zb, {
                                                className: "bg-card/50 backdrop-blur-sm border border-border/50 overflow-hidden group-hover:border-accent/50 transition-all duration-300",
                                                children: (0,
                                                a.jsxs)(m.aY, {
                                                    className: "pt-6",
                                                    children: [(0,
                                                    a.jsx)("h2", {
                                                        className: "text-2xl font-bold mb-2 group-hover:text-accent transition-colors duration-300",
                                                        children: e.title
                                                    }), (0,
                                                    a.jsx)("p", {
                                                        className: "text-sm text-muted-foreground mb-4",
                                                        children: new Date(e.createdAt).toLocaleDateString("en-US", {
                                                            year: "numeric",
                                                            month: "long",
                                                            day: "numeric"
                                                        })
                                                    }), (0,
                                                    a.jsx)("p", {
                                                        className: "text-muted-foreground",
                                                        children: e.excerpt || e.content.substring(0, 150) + "..."
                                                    }), (0,
                                                    a.jsx)(u.z, {
                                                        variant: "link",
                                                        className: "p-0 mt-4 text-accent",
                                                        children: "Read more"
                                                    })]
                                                })
                                            })
                                        }, e.id)) : (0,
                                        a.jsx)(m.Zb, {
                                            className: "bg-card/50 backdrop-blur-sm border border-border/50",
                                            children: (0,
                                            a.jsxs)(m.aY, {
                                                className: "pt-6 text-center py-12",
                                                children: [(0,
                                                a.jsx)("h2", {
                                                    className: "text-xl font-bold mb-2",
                                                    children: "No blog posts yet"
                                                }), (0,
                                                a.jsx)("p", {
                                                    className: "text-muted-foreground",
                                                    children: "Check back soon for new content!"
                                                })]
                                            })
                                        })
                                    })]
                                }, N)
                            })]
                        })
                    }), (0,
                    a.jsx)("footer", {
                        className: "py-6 px-4 border-t border-border/30 text-center text-sm text-muted-foreground",
                        children: (0,
                        a.jsxs)("p", {
                            children: ["\xa9 ", new Date().getFullYear(), " Developer Portfolio. All rights reserved."]
                        })
                    })]
                })]
            })
        }
    },
    7575: function(e, t, r) {
        e.exports = r(7827)
    },
    8040: function(e, t, r) {
        "use strict";
        r.d(t, {
            f: function() {
                return d
            }
        });
        var a = r(5271)
          , s = r(9939)
          , n = r(2676)
          , i = "horizontal"
          , o = ["horizontal", "vertical"]
          , l = a.forwardRef( (e, t) => {
            let {decorative: r, orientation: a=i, ...l} = e
              , d = o.includes(a) ? a : i;
            return (0,
            n.jsx)(s.WV.div, {
                "data-orientation": d,
                ...r ? {
                    role: "none"
                } : {
                    "aria-orientation": "vertical" === d ? d : void 0,
                    role: "separator"
                },
                ...l,
                ref: t
            })
        }
        );
        l.displayName = "Separator";
        var d = l
    }
}, function(e) {
    e.O(0, [385, 5, 888, 774, 179], function() {
        return e(e.s = 4690)
    }),
    _N_E = e.O()
}
]);