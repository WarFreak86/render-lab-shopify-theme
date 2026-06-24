"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1501], {
        11501: (e, s, a) => {
            a.r(s), a.d(s, {
                SocialSection: () => m
            });
            var t = a(37876),
                l = a(36256),
                i = a(27555),
                r = a(10769);
            let c = [{
                    name: "Reddit",
                    url: "https://www.reddit.com/r/Displate/",
                    iconFilename: "reddit.svg",
                    ariaLabel: "Join our Reddit community"
                }, {
                    name: "Discord",
                    url: "https://discord.com/invite/vD3V7429cW",
                    iconFilename: "discord.svg",
                    ariaLabel: "Join our Discord server"
                }, {
                    name: "Pinterest",
                    url: "https://pinterest.com/displate/",
                    iconFilename: "pinterest.svg",
                    ariaLabel: "Follow us on Pinterest"
                }, {
                    name: "Facebook",
                    url: "https://www.facebook.com/displate",
                    iconFilename: "facebook.svg",
                    ariaLabel: "Like our Facebook page"
                }, {
                    name: "X (Twitter)",
                    url: "https://x.com/Displate",
                    iconFilename: "x.svg",
                    ariaLabel: "Follow us on X"
                }, {
                    name: "TikTok",
                    url: "https://www.tiktok.com/@displate",
                    iconFilename: "tikTok.svg",
                    ariaLabel: "Follow us on TikTok"
                }],
                o = () => (0, t.jsxs)("div", {
                    className: "flex w-full flex-col items-center gap-4 lg:gap-6",
                    children: [(0, t.jsx)("h3", {
                        className: "text-heading-h5",
                        children: "Join our Community on"
                    }), (0, t.jsx)("ul", {
                        className: "grid w-full grid-cols-2 justify-items-start gap-x-6 gap-y-4 lg:flex lg:w-auto lg:flex-wrap lg:justify-center lg:gap-6",
                        children: c.map(({
                            name: e,
                            url: s,
                            iconFilename: a,
                            ariaLabel: l
                        }) => (0, t.jsx)("li", {
                            children: (0, t.jsxs)(i.A, {
                                "aria-label": l,
                                className: "flex items-center gap-2 text-body-md text-text-primary no-underline",
                                rel: "noopener noreferrer",
                                routeInfo: {
                                    route: s,
                                    target: "external"
                                },
                                target: "_blank",
                                children: [(0, t.jsx)("img", {
                                    alt: "",
                                    loading: "lazy",
                                    src: (0, r.qH)(`/icons/diskit/social-media/${a}`)
                                }), (0, t.jsx)("span", {
                                    children: e
                                })]
                            })
                        }, e))
                    })]
                });
            var n = a(52728);
            let d = ({
                    trustPilot: e
                }) => (0, t.jsxs)("div", {
                    className: "flex flex-col items-center gap-4",
                    children: [(0, t.jsxs)("div", {
                        className: "flex items-center gap-5",
                        children: [(0, t.jsx)("h3", {
                            className: "text-heading-h5",
                            children: "Trustpilot reviews"
                        }), (0, t.jsx)(n.A, {
                            iconSize: "lg",
                            trustScore: e.trustScore
                        })]
                    }), (0, t.jsx)("div", {
                        className: "flex items-center gap-2 text-body-md",
                        children: e.aggregatedScoreName
                    })]
                }),
                m = ({
                    trustPilot: e
                }) => (0, t.jsx)(l.mc, {
                    children: (0, t.jsx)(l.xA, {
                        asChild: !0,
                        children: (0, t.jsx)("section", {
                            "data-testid": "referrals-section",
                            children: (0, t.jsxs)("div", {
                                className: "col-span-full flex flex-col items-center gap-12 text-center text-text-primary",
                                children: [(0, t.jsxs)("h2", {
                                    className: "text-display-sm md:text-display-md font-display uppercase",
                                    children: ["See why other people love ", (0, t.jsx)("br", {
                                        className: "hidden lg:block"
                                    }), " our metal posters"]
                                }), (0, t.jsx)(d, {
                                    trustPilot: e
                                }), (0, t.jsx)(o, {})]
                            })
                        })
                    })
                })
        },
        52728: (e, s, a) => {
            a.d(s, {
                A: () => c
            });
            var t = a(37876),
                l = a(10769),
                i = a(14619);
            let r = {
                    sm: "h-3",
                    md: "h-4",
                    lg: "h-6"
                },
                c = ({
                    trustScore: e,
                    className: s,
                    showTrustScore: a,
                    iconSize: c = "md",
                    scoreFirst: o = !1
                }) => {
                    let n = (0, l.qH)("/icons/socials/trustpilot_star.svg"),
                        d = Math.floor(e),
                        m = e - d,
                        p = e => e === d && m >= .5;
                    return (0, t.jsxs)("div", {
                        className: (0, i.cn)("flex items-center gap-0.5", s),
                        children: [a && (0, t.jsxs)("span", {
                            className: (0, i.cn)("inline-block text-body-sm", {
                                "order-1 pl-0.5": !o,
                                "order-0 pr-0.5": o
                            }),
                            children: [e, "/", 5]
                        }), [...[, , , , , ].keys()].map(e => (0, t.jsxs)("span", {
                            className: "relative leading-none",
                            children: [(0, t.jsx)("img", {
                                alt: "Trustpilot star",
                                className: (0, i.cn)(r[c], {
                                    "opacity-35 saturate-0": !p(e) && e > d - 1
                                }),
                                "data-testid": e <= d - 1 ? "active-star" : p(e) ? "half-active-star" : "inactive-star",
                                loading: "lazy",
                                src: n
                            }), p(e) ? (0, t.jsx)("span", {
                                className: "block absolute top-0 right-0 h-full w-1/2 backdrop-saturate-0 backdrop-brightness-[1.4]"
                            }) : null]
                        }, e))]
                    })
                }
        }
    }
]);
//#