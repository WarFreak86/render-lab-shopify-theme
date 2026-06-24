(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1264], {
        26357: (e, t, l) => {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/about-faq", function() {
                return l(51086)
            }])
        },
        51086: (e, t, l) => {
            "use strict";
            l.r(t), l.d(t, {
                __N_SSP: () => g,
                default: () => f
            });
            var s = l(37876),
                a = l(15657),
                n = l(93092),
                r = l(77518),
                i = l(14232),
                o = l(68394),
                u = l(16373),
                d = l(16441);
            let c = ({
                    data: e
                }) => {
                    if (!e || 0 === e.attributes.frequentlyAskedQuestions.length) return null;
                    let t = `goto-${e.attributes.uniqueId}`;
                    return (0, s.jsxs)("section", {
                        children: [(0, s.jsx)("h2", {
                            className: "text-heading-h4 md:text-heading-h2 mt-5 md:mt-8 mb-4",
                            id: t,
                            children: e.attributes.name
                        }), e.attributes.frequentlyAskedQuestions.map(e => (0, s.jsxs)("div", {
                            children: [(0, s.jsx)("h4", {
                                className: "text-heading-subtitle md:text-heading-h5 mt-5 mb-5 md:mt-8 md:mb-8",
                                children: e.question
                            }), (0, s.jsx)("div", {
                                className: "text-body-md my-4 scroll-mt-[calc((--headerNavBarHeight)+4rem)] [&_p]:mb-4 [&_ol]:list-decimal [&_ol]:list-inside [&_ol]:mb-4 [&_ul]:list-disc [&_ul]:list-inside [&_ul]:mb-4 [&_p+p:has(img)]:mt-4 [&_p~p:has(img)]:mb-4 [&_p:has(img:nth-child(2))]:flex [&_p:has(img:nth-child(2))]:flex-col [&_p:has(img:nth-child(2))_img]:max-w-[50%] md:[&_p:has(img:nth-child(2))]:block md:[&_p:has(img:nth-child(2))_img]:max-w-full",
                                id: `${t}-${e.uniqueId}`,
                                children: (0, s.jsx)(d.T, {
                                    markdown: e.answer,
                                    useComponents: ["link", "image", "table"]
                                })
                            })]
                        }, e.uniqueId))]
                    })
                },
                h = ({
                    faqData: e
                }) => (0, s.jsxs)("section", {
                    children: [(0, s.jsxs)("h1", {
                        className: "text-heading-h3 md:text-heading-h1 mb-4",
                        children: [(0, s.jsx)("span", {
                            children: "Frequently"
                        }), " asked questions"]
                    }), e.map(e => e.attributes.frequentlyAskedQuestions.length > 0 ? (0, s.jsxs)(i.Fragment, {
                        children: [(0, s.jsx)("h4", {
                            className: "text-heading-subtitle md:text-heading-h5 mt-4 mb-2 md:mt-8 md:mb-4",
                            children: (0, s.jsx)("a", {
                                className: "font-bold text-text-primary no-underline hover:underline",
                                href: `#goto-${e.attributes.uniqueId}`,
                                children: e.attributes.name
                            })
                        }), (0, s.jsx)("ol", {
                            className: "list-decimal pl-5 font-bold",
                            children: e.attributes.frequentlyAskedQuestions.map(t => (0, s.jsx)("li", {
                                className: "pl-3",
                                children: (0, s.jsx)("a", {
                                    className: "font-normal text-text-primary no-underline hover:underline",
                                    href: `#goto-${e.attributes.uniqueId}-${t.uniqueId}`,
                                    children: t.question
                                })
                            }, t.uniqueId))
                        })]
                    }, e.attributes.uniqueId) : null)]
                }),
                m = ({
                    faqData: e
                }) => {
                    let {
                        track: t
                    } = (0, u.z)();
                    return (0, i.useEffect)(() => {
                        t()
                    }, []), (0, s.jsxs)(o.A, {
                        children: [(0, s.jsx)(h, {
                            faqData: e
                        }), e.map(e => (0, s.jsx)(c, {
                            data: e
                        }, e.attributes.uniqueId))]
                    })
                };
            var p = l(64713),
                x = l(25282);
            let b = ({
                header: e,
                faqData: t
            }) => {
                let l = {
                    webpage: {
                        h1: "Frequently asked questions",
                        url: (0, p.F)({
                            absolute: !0
                        }).route,
                        description: p.N.defaultMeta.description,
                        imageOfPage: p.N.defaultMeta.coverImage
                    }
                };
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(a.F, {
                        ldJsonParams: l,
                        pageMeta: p.N.defaultMeta
                    }), (0, s.jsx)(x.O, {
                        headerData: e,
                        children: (0, s.jsx)(m, {
                            faqData: t
                        })
                    }), (0, n.dH)(), (0, n.Xq)()]
                })
            };
            b.getLayout = function(e) {
                return (0, s.jsx)(r.A, {
                    abTests: e.props.abTests,
                    countryCode: e.props.countryCode,
                    featureFlags: e.props.featureFlags,
                    gitInfo: e.props.gitInfo,
                    tpid: e.props.tpid,
                    uvert: e.props.uvert,
                    children: e
                })
            };
            let f = b;
            var g = !0
        },
        68394: (e, t, l) => {
            "use strict";
            l.d(t, {
                A: () => A
            });
            var s = l(37876),
                a = l(14232),
                n = l(89099),
                r = l(54111),
                i = l(16160),
                o = l(39446),
                u = l(64713),
                d = l(21306),
                c = l(39432),
                h = l(47526),
                m = l(84086),
                p = l(60297),
                x = l(76906),
                b = l(23278),
                f = l(9334),
                g = l(81198);
            let j = [{
                label: "About Us",
                routeInfo: (0, x.J)()
            }, {
                label: "Open Displate Shop",
                routeInfo: (0, f.A)(),
                hiddenForShopAccount: !0
            }, {
                label: "Displate Club",
                routeInfo: (0, b.a)()
            }, {
                label: "Shipping & Returns",
                routeInfo: (0, m.B)()
            }, {
                label: "Magnet Mounting",
                routeInfo: (0, d.q)()
            }, {
                label: "FAQ",
                routeInfo: (0, u.F)()
            }, {
                label: "Copyright",
                routeInfo: (0, o.C)()
            }, {
                label: "Contact us",
                routeInfo: (0, i.x)()
            }, {
                label: "Career",
                routeInfo: (0, r.R_)(),
                breakLine: !0
            }, {
                label: "Terms of Use",
                routeInfo: (0, h.U)()
            }, {
                label: "Terms of Use US",
                routeInfo: (0, h.U)({
                    query: {
                        region: "us"
                    }
                })
            }, {
                label: "Terms of Use SMS",
                routeInfo: (0, p.v)()
            }, {
                label: "Privacy",
                routeInfo: (0, c.Z)()
            }, {
                label: "Pricing Policy US",
                routeInfo: (0, g.a)()
            }];
            var I = l(27555),
                _ = l(47765),
                y = l(35891),
                q = l(36256),
                N = l(87050);
            let v = () => {
                    let {
                        userInfo: e
                    } = (0, a.useContext)(y.cy), t = (0, _.aP)(), l = (0, n.useRouter)(), r = e ? .identity.accountRoles ? .includes(N.QY.SHOP), i = e => Array.from(new URLSearchParams(e.route.split("?")[1])), o = j.filter(e => !(r && e.hiddenForShopAccount)), u = o.filter(e => {
                        var s;
                        return s = e.routeInfo, !!t.pagePathnames.includes(s.route.split("?")[0]) && i(s).every(([e, t]) => l.query[e] === t)
                    }).sort((e, t) => i(t.routeInfo).length - i(e.routeInfo).length)[0];
                    return (0, s.jsx)(q.Ib, {
                        activeLabel: u ? u.label : "Menu",
                        "data-testid": "about-shipping-sidebarmenu",
                        children: e ? o.map(e => (0, s.jsxs)(a.Fragment, {
                            children: [(0, s.jsx)(q.Bx, {
                                active: e === u,
                                asChild: !0,
                                children: (0, s.jsx)(I.A, {
                                    routeInfo: e.routeInfo,
                                    children: e.label
                                })
                            }), e.breakLine ? (0, s.jsx)(q.DG, {}) : null]
                        }, e.label)) : (0, s.jsx)("li", {
                            className: "grid w-full gap-6 p-6",
                            "data-testid": "sidebar-skeleton",
                            children: Array.from({
                                length: 12
                            }).map((e, t) => (0, s.jsx)(q.EA, {
                                className: "h-6 w-full"
                            }, t))
                        })
                    })
                },
                A = ({
                    children: e,
                    testId: t
                }) => (0, s.jsx)(q.mc, {
                    children: (0, s.jsxs)(q.xA, {
                        className: "gap-y-6 py-6 lg:py-10",
                        children: [(0, s.jsx)("div", {
                            className: "col-span-full lg:col-span-4 xl:col-span-3 xl:col-start-2 2xl:col-span-2 2xl:col-start-3",
                            children: (0, s.jsx)(v, {})
                        }), (0, s.jsx)("div", {
                            className: "col-span-full min-w-0 py-4 lg:col-span-8 lg:p-6 xl:col-span-7 2xl:col-span-6",
                            "data-testid": t,
                            children: e
                        })]
                    })
                })
        },
        77328: (e, t, l) => {
            e.exports = l(88022)
        }
    },
    e => {
        e.O(0, [4024, 2183, 5706, 9658, 3915, 5657, 6633, 636, 6593, 8792], () => e(e.s = 26357)), _N_E = e.O()
    }
]);
//#