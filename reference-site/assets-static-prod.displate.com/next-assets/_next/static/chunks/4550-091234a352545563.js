(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4550], {
        1833: (e, t, n) => {
            "use strict";
            n.d(t, {
                o: () => r
            });
            let r = (0, n(8106).v)(e => ({
                wasOpened: !1,
                wasClosed: !1,
                isDrawerOpen: !1,
                pagesTraversedByUser: 0,
                setWasOpened: t => e({
                    wasOpened: t
                }),
                setWasClosed: t => e({
                    wasClosed: t
                }),
                setIsDrawerOpen: t => e({
                    isDrawerOpen: t
                }),
                resetPagesTraversedByUser: () => e({
                    pagesTraversedByUser: 0
                }),
                incrementPagesTraversedByUser: () => e(e => ({
                    pagesTraversedByUser: e.pagesTraversedByUser + 1
                }))
            }))
        },
        18120: (e, t, n) => {
            "use strict";
            n.d(t, {
                $: () => a.$,
                L: () => r.L
            });
            var r = n(68620),
                a = n(99094)
        },
        20019: (e, t, n) => {
            "use strict";
            n.d(t, {
                M: () => s,
                O: () => i
            });
            var r = n(37876),
                a = n(14232),
                o = n(90511);
            let s = (0, a.createContext)({
                    uvert: o.v.GeneralUser
                }),
                i = ({
                    children: e,
                    uvert: t
                }) => (0, r.jsx)(s.Provider, {
                    value: {
                        uvert: t
                    },
                    children: e
                })
        },
        77328: (e, t, n) => {
            e.exports = n(88022)
        },
        77518: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => D
            });
            var r = n(37876),
                a = n(14232),
                o = n(56413),
                s = n(67768);
            n(18847);
            var i = n(47321),
                d = n(62056),
                l = n(2443),
                k = n(9054),
                f = n(67911),
                h = n(83736),
                L = n(61817),
                u = n(38847),
                m = n(8735),
                j = n(10698);
            let c = ({
                countryCode: e
            }) => {
                let {
                    setCountryCode: t
                } = (0, j.C)();
                return (0, a.useEffect)(() => {
                    t({
                        countryCode: e,
                        shouldUpdateContext: !1
                    })
                }, []), null
            };
            var p = n(67385),
                x = n(14e3),
                _ = n(1833),
                P = n(93878),
                W = n(16903),
                y = n(62120),
                v = n(62564),
                M = n(73678),
                g = n(29454),
                w = n(22884);
            let C = ({
                userVertical: e,
                userEngagement: t
            }) => {
                (0, w.u)({
                    event: "user_data",
                    user_vertical: e,
                    user_engagement_level: t
                })
            };
            var b = n(84810);
            let U = "user-vertical";
            var E = n(74359),
                G = n(98461),
                O = n(35891),
                B = n(87050);
            let I = ["userVertical"];
            var N = n(90511);
            let T = () => {
                let e = (0, x.usePathname)(),
                    {
                        data: t,
                        isError: n,
                        error: r,
                        refetch: o
                    } = (() => {
                        let {
                            fetchedUserInfo: e
                        } = (0, a.useContext)(O.cy);
                        return (0, E.I)({
                            queryKey: I,
                            queryFn: () => B.$y.getUsersVerticalV2((0, G.R)()),
                            enabled: e,
                            staleTime: 1e3,
                            retry: !1
                        })
                    })(),
                    {
                        userInfo: s
                    } = (0, a.useContext)(O.cy),
                    i = s ? .account.engagement.type,
                    d = (0, a.useRef)(!1);
                return (0, a.useEffect)(() => {
                    d.current ? o() : d.current = !0
                }, [e]), (0, a.useEffect)(() => {
                    void 0 !== t && void 0 !== i && (t.type ? (g.A.set(U, t.type, {
                        domain: b.ConfigPublic.VerticalizationCookieDomain
                    }), C({
                        userVertical: t.type,
                        userEngagement: i
                    })) : (g.A.remove(U, {
                        domain: b.ConfigPublic.VerticalizationCookieDomain
                    }), C({
                        userVertical: N.v.GeneralUser,
                        userEngagement: i
                    })))
                }, [t, i]), (0, a.useEffect)(() => {
                    n && console.error(`Unable to update user vertical: ${r}`)
                }, [n, r]), null
            };
            var V = n(20019),
                A = n(36256);
            let $ = () => null,
                D = ({
                    gitInfo: e,
                    children: t,
                    uvert: n,
                    countryCode: j,
                    featureFlags: g,
                    tpid: w,
                    abTests: C
                }) => {
                    let b, U, [E] = (0, a.useState)(() => new o.E(h.K));
                    return b = (0, x.usePathname)(), U = (0, _.o)(e => e.incrementPagesTraversedByUser), (0, a.useEffect)(() => {
                        U()
                    }, [b]), (0, W.p)(), (0, a.useEffect)(() => {
                        window.localStorage.removeItem("elyGtmUserSession"), window.localStorage.removeItem("recentlyViewed"), (0, d.s)()
                    }, []), (0, r.jsx)(k.A, {
                        children: (0, r.jsxs)(s.Ht, {
                            client: E,
                            children: [(0, r.jsxs)(p.y, {
                                countryCode: j,
                                children: [(0, r.jsx)(c, {
                                    countryCode: j
                                }), (0, r.jsx)(V.O, {
                                    uvert: n,
                                    children: (0, r.jsx)(i.td, {
                                        value: C,
                                        children: (0, r.jsx)(O.OJ, {
                                            children: (0, r.jsx)(L.J, {
                                                children: (0, r.jsxs)(u.j$, {
                                                    value: g,
                                                    children: [(0, r.jsx)(P.c, {}), (0, r.jsx)(y.H, {}), (0, r.jsx)(T, {}), (0, r.jsx)(v.A, {
                                                        countryCode: j
                                                    }), (0, r.jsxs)(A.Uc, {
                                                        children: [(0, r.jsx)(f.E, {}), (0, r.jsx)(l.s, {}), (0, r.jsx)(m.i, {
                                                            children: t
                                                        })]
                                                    })]
                                                })
                                            })
                                        })
                                    })
                                })]
                            }), (0, r.jsx)($, {
                                initialIsOpen: !1
                            }), e && (0, r.jsx)(M.DynamicGitInfo, {
                                gitInfo: e,
                                tpid: w ? ? null
                            })]
                        })
                    })
                }
        },
        84729: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => d
            });
            var r = n(37876),
                a = n(27555);
            let o = e => (0, r.jsxs)("svg", {
                height: "1em",
                viewBox: "0 0 320 56",
                width: "1em",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                ...e,
                children: [(0, r.jsxs)("defs", {
                    children: [(0, r.jsx)("clipPath", {
                        id: "clip-path",
                        children: (0, r.jsx)("rect", {
                            "data-name": "Rectangle 4058",
                            fill: "#fff",
                            height: 56,
                            id: "Rectangle_4058",
                            stroke: "#707070",
                            strokeWidth: 1,
                            transform: "translate(640 2674)",
                            width: 320
                        })
                    }), (0, r.jsx)("clipPath", {
                        id: "clip-path-2",
                        children: (0, r.jsx)("rect", {
                            "data-name": "Rectangle 1028",
                            fill: "#005eff",
                            height: 440,
                            id: "Rectangle_1028",
                            stroke: "#00efd2",
                            strokeWidth: 3,
                            width: 320.003
                        })
                    })]
                }), (0, r.jsx)("g", {
                    clipPath: "url(#clip-path)",
                    "data-name": "Mask Group 755",
                    id: "Mask_Group_755",
                    transform: "translate(-640 -2674)",
                    children: (0, r.jsx)("g", {
                        id: "strzalki",
                        transform: "translate(419.54 2665.43)",
                        children: (0, r.jsx)("g", {
                            clipPath: "url(#clip-path-2)",
                            "data-name": "Mask Group 15",
                            id: "Mask_Group_15",
                            transform: "translate(220.46 8.57)",
                            children: (0, r.jsxs)("g", {
                                "data-name": "Group 5310",
                                id: "Group_5310",
                                transform: "translate(10 7)",
                                children: [(0, r.jsx)("line", {
                                    "data-name": "Line 202",
                                    fill: "none",
                                    id: "Line_202",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(9.094 371.25)",
                                    y2: 57.592
                                }), (0, r.jsx)("path", {
                                    d: "M1,247.794l9.094-9.094,9.094,9.094",
                                    "data-name": "Path 3093",
                                    fill: "none",
                                    id: "Path_3093",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(-1 130.191)"
                                }), (0, r.jsx)("line", {
                                    "data-name": "Line 203",
                                    fill: "none",
                                    id: "Line_203",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(54.131 395.889)",
                                    y2: 57.592
                                }), (0, r.jsx)("path", {
                                    d: "M30.02,270.114l9.094-9.094,9.094,9.094",
                                    "data-name": "Path 3094",
                                    fill: "none",
                                    id: "Path_3094",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(15.017 132.51)"
                                }), (0, r.jsx)("line", {
                                    "data-name": "Line 204",
                                    fill: "none",
                                    id: "Line_204",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(102.893 371.25)",
                                    y2: 57.592
                                }), (0, r.jsx)("path", {
                                    d: "M61.44,247.794l9.079-9.094,9.11,9.094",
                                    "data-name": "Path 3095",
                                    fill: "none",
                                    id: "Path_3095",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(32.359 130.191)"
                                }), (0, r.jsx)("line", {
                                    "data-name": "Line 205",
                                    fill: "none",
                                    id: "Line_205",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(147.93 395.889)",
                                    y2: 57.592
                                }), (0, r.jsx)("path", {
                                    d: "M90.46,270.114l9.079-9.094,9.094,9.094",
                                    "data-name": "Path 3096",
                                    fill: "none",
                                    id: "Path_3096",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(48.376 132.51)"
                                }), (0, r.jsx)("line", {
                                    "data-name": "Line 206",
                                    fill: "none",
                                    id: "Line_206",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(196.676 371.25)",
                                    y2: 57.592
                                }), (0, r.jsx)("path", {
                                    d: "M121.87,247.794l9.094-9.094,9.094,9.094",
                                    "data-name": "Path 3097",
                                    fill: "none",
                                    id: "Path_3097",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(65.712 130.191)"
                                }), (0, r.jsx)("line", {
                                    "data-name": "Line 207",
                                    fill: "none",
                                    id: "Line_207",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(241.713 395.889)",
                                    y2: 57.592
                                }), (0, r.jsx)("path", {
                                    d: "M150.89,270.114l9.094-9.094,9.094,9.094",
                                    "data-name": "Path 3098",
                                    fill: "none",
                                    id: "Path_3098",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(81.729 132.51)"
                                }), (0, r.jsx)("line", {
                                    "data-name": "Line 208",
                                    fill: "none",
                                    id: "Line_208",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(290.475 371.25)",
                                    y2: 57.592
                                }), (0, r.jsx)("path", {
                                    d: "M182.31,247.794,191.4,238.7l9.094,9.094",
                                    "data-name": "Path 3099",
                                    fill: "none",
                                    id: "Path_3099",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(99.071 130.191)"
                                }), (0, r.jsx)("line", {
                                    "data-name": "Line 209",
                                    fill: "none",
                                    id: "Line_209",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(9.094 279.035)",
                                    y2: 57.592
                                }), (0, r.jsx)("path", {
                                    d: "M1,188.359l9.094-9.079,9.094,9.079",
                                    "data-name": "Path 3101",
                                    fill: "none",
                                    id: "Path_3101",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(-1 97.396)"
                                }), (0, r.jsx)("line", {
                                    "data-name": "Line 210",
                                    fill: "none",
                                    id: "Line_210",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(54.131 303.658)",
                                    y2: 57.592
                                }), (0, r.jsx)("path", {
                                    d: "M30.02,210.684l9.094-9.094,9.094,9.094",
                                    "data-name": "Path 3102",
                                    fill: "none",
                                    id: "Path_3102",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(15.017 99.709)"
                                }), (0, r.jsx)("line", {
                                    "data-name": "Line 211",
                                    fill: "none",
                                    id: "Line_211",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(102.893 279.035)",
                                    y2: 57.592
                                }), (0, r.jsx)("path", {
                                    d: "M61.44,188.359l9.079-9.079,9.11,9.079",
                                    "data-name": "Path 3103",
                                    fill: "none",
                                    id: "Path_3103",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(32.359 97.396)"
                                }), (0, r.jsx)("line", {
                                    "data-name": "Line 212",
                                    fill: "none",
                                    id: "Line_212",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(147.93 303.658)",
                                    y2: 57.592
                                }), (0, r.jsx)("path", {
                                    d: "M90.46,210.684l9.079-9.094,9.094,9.094",
                                    "data-name": "Path 3104",
                                    fill: "none",
                                    id: "Path_3104",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(48.376 99.709)"
                                }), (0, r.jsx)("line", {
                                    "data-name": "Line 213",
                                    fill: "none",
                                    id: "Line_213",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(196.676 279.035)",
                                    y2: 57.592
                                }), (0, r.jsx)("path", {
                                    d: "M121.87,188.359l9.094-9.079,9.094,9.079",
                                    "data-name": "Path 3105",
                                    fill: "none",
                                    id: "Path_3105",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(65.712 97.396)"
                                }), (0, r.jsx)("line", {
                                    "data-name": "Line 214",
                                    fill: "none",
                                    id: "Line_214",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(241.713 303.658)",
                                    y2: 57.592
                                }), (0, r.jsx)("path", {
                                    d: "M150.89,210.684l9.094-9.094,9.094,9.094",
                                    "data-name": "Path 3106",
                                    fill: "none",
                                    id: "Path_3106",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(81.729 99.709)"
                                }), (0, r.jsx)("line", {
                                    "data-name": "Line 215",
                                    fill: "none",
                                    id: "Line_215",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(290.475 279.035)",
                                    y2: 57.592
                                }), (0, r.jsx)("path", {
                                    d: "M182.31,188.359l9.094-9.079,9.094,9.079",
                                    "data-name": "Path 3107",
                                    fill: "none",
                                    id: "Path_3107",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(99.071 97.396)"
                                }), (0, r.jsx)("line", {
                                    "data-name": "Line 216",
                                    fill: "none",
                                    id: "Line_216",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(9.094 186.804)",
                                    y2: 57.592
                                }), (0, r.jsx)("path", {
                                    d: "M1,128.944l9.094-9.094,9.094,9.094",
                                    "data-name": "Path 3109",
                                    fill: "none",
                                    id: "Path_3109",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(-1 64.596)"
                                }), (0, r.jsx)("line", {
                                    "data-name": "Line 217",
                                    fill: "none",
                                    id: "Line_217",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(54.131 211.443)",
                                    y2: 57.592
                                }), (0, r.jsx)("path", {
                                    d: "M30.02,151.254l9.094-9.094,9.094,9.094",
                                    "data-name": "Path 3110",
                                    fill: "none",
                                    id: "Path_3110",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(15.017 66.909)"
                                }), (0, r.jsx)("line", {
                                    "data-name": "Line 218",
                                    fill: "none",
                                    id: "Line_218",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(102.893 186.804)",
                                    y2: 57.592
                                }), (0, r.jsx)("path", {
                                    d: "M61.44,128.944l9.079-9.094,9.11,9.094",
                                    "data-name": "Path 3111",
                                    fill: "none",
                                    id: "Path_3111",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(32.359 64.596)"
                                }), (0, r.jsx)("line", {
                                    "data-name": "Line 219",
                                    fill: "none",
                                    id: "Line_219",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(147.93 211.443)",
                                    y2: 57.592
                                }), (0, r.jsx)("path", {
                                    d: "M90.46,151.254l9.079-9.094,9.094,9.094",
                                    "data-name": "Path 3112",
                                    fill: "none",
                                    id: "Path_3112",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(48.376 66.909)"
                                }), (0, r.jsx)("line", {
                                    "data-name": "Line 220",
                                    fill: "none",
                                    id: "Line_220",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(196.676 186.804)",
                                    y2: 57.592
                                }), (0, r.jsx)("path", {
                                    d: "M121.87,128.944l9.094-9.094,9.094,9.094",
                                    "data-name": "Path 3113",
                                    fill: "none",
                                    id: "Path_3113",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(65.712 64.596)"
                                }), (0, r.jsx)("line", {
                                    "data-name": "Line 221",
                                    fill: "none",
                                    id: "Line_221",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(241.713 211.443)",
                                    y2: 57.592
                                }), (0, r.jsx)("path", {
                                    d: "M150.89,151.254l9.094-9.094,9.094,9.094",
                                    "data-name": "Path 3114",
                                    fill: "none",
                                    id: "Path_3114",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(81.729 66.909)"
                                }), (0, r.jsx)("line", {
                                    "data-name": "Line 222",
                                    fill: "none",
                                    id: "Line_222",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(290.475 186.804)",
                                    y2: 57.592
                                }), (0, r.jsx)("path", {
                                    d: "M182.31,128.944l9.094-9.094,9.094,9.094",
                                    "data-name": "Path 3115",
                                    fill: "none",
                                    id: "Path_3115",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(99.071 64.596)"
                                }), (0, r.jsx)("line", {
                                    "data-name": "Line 223",
                                    fill: "none",
                                    id: "Line_223",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(9.094 94.589)",
                                    y2: 57.592
                                }), (0, r.jsx)("path", {
                                    d: "M1,69.514l9.094-9.094,9.094,9.094",
                                    "data-name": "Path 3117",
                                    fill: "none",
                                    id: "Path_3117",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(-1 31.795)"
                                }), (0, r.jsx)("line", {
                                    "data-name": "Line 224",
                                    fill: "none",
                                    id: "Line_224",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(54.131 119.213)",
                                    y2: 57.592
                                }), (0, r.jsx)("path", {
                                    d: "M30.02,91.834l9.094-9.094,9.094,9.094",
                                    "data-name": "Path 3118",
                                    fill: "none",
                                    id: "Path_3118",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(15.017 34.114)"
                                }), (0, r.jsx)("line", {
                                    "data-name": "Line 225",
                                    fill: "none",
                                    id: "Line_225",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(102.893 94.589)",
                                    y2: 57.592
                                }), (0, r.jsx)("path", {
                                    d: "M61.44,69.514l9.079-9.094,9.11,9.094",
                                    "data-name": "Path 3119",
                                    fill: "none",
                                    id: "Path_3119",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(32.359 31.795)"
                                }), (0, r.jsx)("line", {
                                    "data-name": "Line 226",
                                    fill: "none",
                                    id: "Line_226",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(147.93 119.213)",
                                    y2: 57.592
                                }), (0, r.jsx)("path", {
                                    d: "M90.46,91.834l9.079-9.094,9.094,9.094",
                                    "data-name": "Path 3120",
                                    fill: "none",
                                    id: "Path_3120",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(48.376 34.114)"
                                }), (0, r.jsx)("line", {
                                    "data-name": "Line 227",
                                    fill: "none",
                                    id: "Line_227",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(196.676 94.589)",
                                    y2: 57.592
                                }), (0, r.jsx)("path", {
                                    d: "M121.87,69.514l9.094-9.094,9.094,9.094",
                                    "data-name": "Path 3121",
                                    fill: "none",
                                    id: "Path_3121",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(65.712 31.795)"
                                }), (0, r.jsx)("line", {
                                    "data-name": "Line 228",
                                    fill: "none",
                                    id: "Line_228",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(241.713 119.213)",
                                    y2: 57.592
                                }), (0, r.jsx)("path", {
                                    d: "M150.89,91.834l9.094-9.094,9.094,9.094",
                                    "data-name": "Path 3122",
                                    fill: "none",
                                    id: "Path_3122",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(81.729 34.114)"
                                }), (0, r.jsx)("line", {
                                    "data-name": "Line 229",
                                    fill: "none",
                                    id: "Line_229",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(290.475 94.589)",
                                    y2: 57.592
                                }), (0, r.jsx)("path", {
                                    d: "M182.31,69.514,191.4,60.42l9.094,9.094",
                                    "data-name": "Path 3123",
                                    fill: "none",
                                    id: "Path_3123",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(99.071 31.795)"
                                }), (0, r.jsx)("line", {
                                    "data-name": "Line 230",
                                    fill: "none",
                                    id: "Line_230",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(9.094 2.359)",
                                    y2: 57.592
                                }), (0, r.jsx)("path", {
                                    d: "M1,10.094,10.094,1l9.094,9.094",
                                    "data-name": "Path 3125",
                                    fill: "none",
                                    id: "Path_3125",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(-1 -1)"
                                }), (0, r.jsx)("line", {
                                    "data-name": "Line 231",
                                    fill: "none",
                                    id: "Line_231",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(54.131 26.982)",
                                    y2: 57.607
                                }), (0, r.jsx)("path", {
                                    d: "M30.02,32.4l9.094-9.094L48.209,32.4",
                                    "data-name": "Path 3126",
                                    fill: "none",
                                    id: "Path_3126",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(15.017 1.313)"
                                }), (0, r.jsx)("line", {
                                    "data-name": "Line 232",
                                    fill: "none",
                                    id: "Line_232",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(102.893 2.359)",
                                    y2: 57.592
                                }), (0, r.jsx)("path", {
                                    d: "M61.44,10.094,70.519,1l9.11,9.094",
                                    "data-name": "Path 3127",
                                    fill: "none",
                                    id: "Path_3127",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(32.359 -1)"
                                }), (0, r.jsx)("line", {
                                    "data-name": "Line 233",
                                    fill: "none",
                                    id: "Line_233",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(147.93 26.982)",
                                    y2: 57.607
                                }), (0, r.jsx)("path", {
                                    d: "M90.46,32.4l9.079-9.094,9.094,9.094",
                                    "data-name": "Path 3128",
                                    fill: "none",
                                    id: "Path_3128",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(48.376 1.313)"
                                }), (0, r.jsx)("line", {
                                    "data-name": "Line 234",
                                    fill: "none",
                                    id: "Line_234",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(196.676 2.359)",
                                    y2: 57.592
                                }), (0, r.jsx)("path", {
                                    d: "M121.87,10.094,130.964,1l9.094,9.094",
                                    "data-name": "Path 3129",
                                    fill: "none",
                                    id: "Path_3129",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(65.712 -1)"
                                }), (0, r.jsx)("line", {
                                    "data-name": "Line 235",
                                    fill: "none",
                                    id: "Line_235",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(241.713 26.982)",
                                    y2: 57.607
                                }), (0, r.jsx)("path", {
                                    d: "M150.89,32.4l9.094-9.094,9.094,9.094",
                                    "data-name": "Path 3130",
                                    fill: "none",
                                    id: "Path_3130",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(81.729 1.313)"
                                }), (0, r.jsx)("line", {
                                    "data-name": "Line 236",
                                    fill: "none",
                                    id: "Line_236",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(290.475 2.359)",
                                    y2: 57.592
                                }), (0, r.jsx)("path", {
                                    d: "M182.31,10.094,191.4,1l9.094,9.094",
                                    "data-name": "Path 3131",
                                    fill: "none",
                                    id: "Path_3131",
                                    stroke: "#00efd2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    transform: "translate(99.071 -1)"
                                })]
                            })
                        })
                    })
                })]
            });
            var s = n(36256),
                i = n(23278);
            let d = ({
                title: e,
                subHeading: t,
                text: n
            }) => (0, r.jsxs)("div", {
                className: "flex flex-col items-center px-4 pt-0 md:px-12 md:pt-12 2xl:px-20",
                "data-testid": "dc-footer-section",
                children: [(0, r.jsx)(s.Cv, {
                    className: "mb-6 md:mb-8 h-8 md:h-10",
                    color: "black"
                }), (0, r.jsx)("h2", {
                    className: "mb-2 text-center text-heading-h4 md:text-heading-h2",
                    children: e
                }), (0, r.jsx)("p", {
                    className: "mb-4 text-center text-heading-subtitle md:text-heading-h6",
                    children: t
                }), (0, r.jsx)("p", {
                    className: "mb-4 text-center text-body-sm md:text-body-md",
                    children: n
                }), (0, r.jsx)("div", {
                    className: "mb-8",
                    children: (0, r.jsx)(s.$n, {
                        asChild: !0,
                        variant: "text",
                        children: (0, r.jsx)(a.A, {
                            routeInfo: (0, i.a)(),
                            children: "Find out more"
                        })
                    })
                }), (0, r.jsx)(o, {
                    height: "40",
                    width: "225"
                })]
            })
        },
        99094: (e, t, n) => {
            "use strict";
            n.d(t, {
                $: () => i
            });
            var r = n(14232),
                a = n(39313),
                o = n(27745),
                s = n(68017);
            let i = ({
                ref: e,
                message: t,
                delay: n,
                threshold: i,
                initialOnHold: d = !1
            }) => {
                let l = (0, o.a)(),
                    [k, f] = (0, r.useState)(d);
                return (0, a.P)(e, {
                    threshold: i || .5,
                    delay: n ? ? 1e3,
                    callback: () => {
                        l && (0, s.X)(t) && l.postMessage(t)
                    },
                    once: !0,
                    onHold: k
                }), {
                    onHold: k,
                    setOnHold: f
                }
            }
        }
    }
]);
//#