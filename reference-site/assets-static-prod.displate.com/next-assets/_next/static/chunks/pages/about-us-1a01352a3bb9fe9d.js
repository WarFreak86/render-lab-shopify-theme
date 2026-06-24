(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2884], {
        9324: e => {
            e.exports = {
                logo: "IconSection_logo__PcWbO",
                container: "IconSection_container___IQJg",
                item: "IconSection_item__a_B4g",
                title: "IconSection_title__g9Nb0",
                image: "IconSection_image__y5V5p"
            }
        },
        10014: e => {
            e.exports = {
                section: "AboutSection_section__smyKM",
                imageFullWidth: "AboutSection_imageFullWidth__Hfnmp",
                imageIgredients: "AboutSection_imageIgredients__qhiKP"
            }
        },
        14159: (e, t, s) => {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/about-us", function() {
                return s(69016)
            }])
        },
        31442: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => i
            });
            var a = s(37876);
            let i = e => (0, a.jsx)("svg", {
                fill: "none",
                height: "1em",
                viewBox: "0 0 16 16",
                width: "1em",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: (0, a.jsx)("g", {
                    id: "icon/Info_solid",
                    children: (0, a.jsx)("path", {
                        clipRule: "evenodd",
                        d: "M8.00016 1.33325C11.6821 1.33325 14.6668 4.31802 14.6668 7.99992C14.6668 11.6818 11.6821 14.6666 8.00016 14.6666C4.31826 14.6666 1.3335 11.6818 1.3335 7.99992C1.3335 4.31802 4.31826 1.33325 8.00016 1.33325ZM8.00016 11.6666C7.58595 11.6666 7.25016 11.3308 7.25016 10.9166V7.16659C7.25016 6.75237 7.58595 6.41659 8.00016 6.41659C8.41438 6.41659 8.75016 6.75237 8.75016 7.16659V10.9166C8.75016 11.3308 8.41438 11.6666 8.00016 11.6666ZM8.00016 3.83325C7.65498 3.83325 7.37516 4.11307 7.37516 4.45825C7.37516 4.80343 7.65498 5.08325 8.00016 5.08325C8.34534 5.08325 8.62516 4.80343 8.62516 4.45825C8.62516 4.11307 8.34534 3.83325 8.00016 3.83325Z",
                        fill: "#000000",
                        fillRule: "evenodd",
                        id: "Icon Color"
                    })
                })
            })
        },
        35464: e => {
            e.exports = {
                text: "HeaderSection_text__y_vCw",
                banner: "HeaderSection_banner__MUs9N"
            }
        },
        68394: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => N
            });
            var a = s(37876),
                i = s(14232),
                o = s(89099),
                n = s(54111),
                l = s(16160),
                r = s(39446),
                c = s(64713),
                d = s(21306),
                u = s(39432),
                h = s(47526),
                p = s(84086),
                m = s(60297),
                g = s(76906),
                _ = s(23278),
                x = s(9334),
                b = s(81198);
            let f = [{
                label: "About Us",
                routeInfo: (0, g.J)()
            }, {
                label: "Open Displate Shop",
                routeInfo: (0, x.A)(),
                hiddenForShopAccount: !0
            }, {
                label: "Displate Club",
                routeInfo: (0, _.a)()
            }, {
                label: "Shipping & Returns",
                routeInfo: (0, p.B)()
            }, {
                label: "Magnet Mounting",
                routeInfo: (0, d.q)()
            }, {
                label: "FAQ",
                routeInfo: (0, c.F)()
            }, {
                label: "Copyright",
                routeInfo: (0, r.C)()
            }, {
                label: "Contact us",
                routeInfo: (0, l.x)()
            }, {
                label: "Career",
                routeInfo: (0, n.R_)(),
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
                routeInfo: (0, m.v)()
            }, {
                label: "Privacy",
                routeInfo: (0, u.Z)()
            }, {
                label: "Pricing Policy US",
                routeInfo: (0, b.a)()
            }];
            var j = s(27555),
                w = s(47765),
                v = s(35891),
                y = s(36256),
                I = s(87050);
            let S = () => {
                    let {
                        userInfo: e
                    } = (0, i.useContext)(v.cy), t = (0, w.aP)(), s = (0, o.useRouter)(), n = e ? .identity.accountRoles ? .includes(I.QY.SHOP), l = e => Array.from(new URLSearchParams(e.route.split("?")[1])), r = f.filter(e => !(n && e.hiddenForShopAccount)), c = r.filter(e => {
                        var a;
                        return a = e.routeInfo, !!t.pagePathnames.includes(a.route.split("?")[0]) && l(a).every(([e, t]) => s.query[e] === t)
                    }).sort((e, t) => l(t.routeInfo).length - l(e.routeInfo).length)[0];
                    return (0, a.jsx)(y.Ib, {
                        activeLabel: c ? c.label : "Menu",
                        "data-testid": "about-shipping-sidebarmenu",
                        children: e ? r.map(e => (0, a.jsxs)(i.Fragment, {
                            children: [(0, a.jsx)(y.Bx, {
                                active: e === c,
                                asChild: !0,
                                children: (0, a.jsx)(j.A, {
                                    routeInfo: e.routeInfo,
                                    children: e.label
                                })
                            }), e.breakLine ? (0, a.jsx)(y.DG, {}) : null]
                        }, e.label)) : (0, a.jsx)("li", {
                            className: "grid w-full gap-6 p-6",
                            "data-testid": "sidebar-skeleton",
                            children: Array.from({
                                length: 12
                            }).map((e, t) => (0, a.jsx)(y.EA, {
                                className: "h-6 w-full"
                            }, t))
                        })
                    })
                },
                N = ({
                    children: e,
                    testId: t
                }) => (0, a.jsx)(y.mc, {
                    children: (0, a.jsxs)(y.xA, {
                        className: "gap-y-6 py-6 lg:py-10",
                        children: [(0, a.jsx)("div", {
                            className: "col-span-full lg:col-span-4 xl:col-span-3 xl:col-start-2 2xl:col-span-2 2xl:col-start-3",
                            children: (0, a.jsx)(S, {})
                        }), (0, a.jsx)("div", {
                            className: "col-span-full min-w-0 py-4 lg:col-span-8 lg:p-6 xl:col-span-7 2xl:col-span-6",
                            "data-testid": t,
                            children: e
                        })]
                    })
                })
        },
        69016: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                __N_SSP: () => R,
                default: () => B
            });
            var a = s(37876),
                i = s(15657),
                o = s(93092),
                n = s(77518),
                l = s(14232),
                r = s(68394),
                c = s(16373),
                d = s(10769),
                u = s(10014),
                h = s.n(u);
            let p = () => (0, a.jsxs)("section", {
                className: h().section,
                "data-testid": "about-section",
                children: [(0, a.jsx)("img", {
                    alt: "Main igredients",
                    className: h().imageIgredients,
                    loading: "lazy",
                    src: (0, d.v9)({
                        assetPath: "/images/about-us/three_main_ingredients.webp"
                    }).src
                }), (0, a.jsx)("p", {
                    children: "Every Displate consists of three main ingredients: 51% excellent art, 46% highly sophisticated tech, and 3% magic. These numbers are not just random gibberish. They come straight from our resident technowizards who oversee production."
                }), (0, a.jsx)("p", {
                    children: "That's how we came up with our mounting system, too. So once people are done hugging their newly arrived Displate, they can trust it to the smart magnets it came with. For a quick, easy, and clean setup."
                }), (0, a.jsx)("img", {
                    alt: "Displate features",
                    className: h().imageFullWidth,
                    loading: "lazy",
                    src: (0, d.v9)({
                        assetPath: "/images/about-us/displate_features.webp"
                    }).src
                }), (0, a.jsxs)("p", {
                    children: ["It all started with a wild dream. In 2013, three very handsome and determined fellas got together and decided to try this crazy idea: create a ", (0, a.jsx)("strong", {
                        children: "21st century canvas"
                    }), " ", "unlike any other. They ended up building a unique metal poster, then a huge catalogue of funky designs, and finally the unstoppable team you know as Displate."]
                }), (0, a.jsx)("p", {
                    children: "But it wouldn't mean much without YOU. We love your love for Displates. It's our fuel as we launch for the stars. Come with us."
                }), (0, a.jsx)("img", {
                    alt: "Browse artworks",
                    className: h().imageFullWidth,
                    loading: "lazy",
                    src: (0, d.v9)({
                        assetPath: "/images/about-us/browse_artworks.webp"
                    }).src
                })]
            });
            var m = s(27555),
                g = s(37787),
                _ = s(31442),
                x = s(36256),
                b = s(82472),
                f = s(40034),
                j = s(97476),
                w = s.n(j);
            let v = [{
                    title: "Informacja o realizacji strategii podatkowej",
                    route: (0, b.T)()
                }, {
                    title: "Displate commitment to bribery prevention",
                    route: (0, f.J)()
                }, {
                    title: "Displate report under article 15 of the DSA - 2024",
                    route: (0, g.ZY)("/about-us/Displate-DSA-2024-Transparency-Report-5dce.pdf"),
                    isFile: !0
                }],
                y = () => (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)("section", {
                        className: w().section,
                        "data-testid": "footer-section",
                        children: v.map(e => (0, a.jsxs)("li", {
                            className: w().item,
                            children: [(0, a.jsx)(_.A, {
                                className: w().infoIcon,
                                height: 24,
                                viewBox: "0 -0.5 16 16",
                                width: 24
                            }), e.isFile ? (0, a.jsx)(x.$n, {
                                asChild: !0,
                                variant: "text",
                                children: (0, a.jsx)("a", {
                                    download: !0,
                                    href: e.route,
                                    children: e.title
                                })
                            }) : (0, a.jsx)(x.N_, {
                                asChild: !0,
                                children: (0, a.jsx)(m.A, {
                                    routeInfo: e.route,
                                    children: e.title
                                })
                            })]
                        }, e.title))
                    })
                });
            var I = s(35464),
                S = s.n(I);
            let N = (0, d.v9)({
                    assetPath: "/images/about-us/main_banner.jpg",
                    widths: [900, 1800]
                }),
                C = () => (0, a.jsxs)("section", {
                    "data-testid": "header-section",
                    children: [(0, a.jsx)("img", {
                        alt: "Displate logo",
                        className: S().banner,
                        height: 44,
                        sizes: N.sizes,
                        src: N.widthsSrc[0],
                        srcSet: N.srcSet
                    }), (0, a.jsxs)("p", {
                        className: S().text,
                        children: ["We print collectible ", (0, a.jsx)("strong", {
                            children: "metal posters"
                        }), " that make this reaaally sweet wup-wup sound when you spin them around. Plus, they look super cool no matter where you put them!", (0, a.jsx)("br", {}), "Any passion you have is here, waiting to enter your collection as a Displate."]
                    })]
                });
            var A = s(9324),
                D = s.n(A);
            let P = [{
                    title: "Over 1.5 million",
                    descriptions: "Designs",
                    icon: (0, d.qH)("/images/about-us/icon_designs.svg")
                }, {
                    title: "Countless",
                    descriptions: "Passions engaged",
                    icon: (0, d.qH)("/images/about-us/icon_passion.svg")
                }, {
                    title: "Over 50 Countries",
                    descriptions: "We ship to",
                    icon: (0, d.qH)("/images/about-us/icon_countries.svg")
                }, {
                    title: "More than 200",
                    descriptions: "Beloved Brand Shops",
                    icon: (0, d.qH)("/images/about-us/icon_beloved_brands.svg")
                }, {
                    title: "3.2 mln",
                    descriptions: "Houses decorated",
                    icon: (0, d.qH)("/images/about-us/icon_houses.svg")
                }],
                k = () => (0, a.jsxs)("section", {
                    "data-testid": "icon-section",
                    children: [(0, a.jsx)("img", {
                        alt: "Displate logo",
                        className: D().logo,
                        height: 44,
                        src: (0, d.qH)("/images/logo/logo_dark.svg")
                    }), (0, a.jsx)("div", {
                        className: D().container,
                        children: P.map(e => (0, a.jsxs)("div", {
                            className: D().item,
                            children: [(0, a.jsx)("img", {
                                alt: e.title,
                                className: D().image,
                                loading: "lazy",
                                src: e.icon
                            }), (0, a.jsx)("h3", {
                                className: D().title,
                                children: e.title
                            }), (0, a.jsx)("span", {
                                children: e.descriptions
                            })]
                        }, e.title))
                    })]
                });
            var F = s(97740),
                W = s.n(F);
            let T = () => ((0, l.useEffect)(() => {
                let e = document.createElement("script");
                return e.src = "https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js", e.async = !0, document.body.appendChild(e), () => {
                    document.body.removeChild(e)
                }
            }, []), (0, a.jsx)("section", {
                className: W().section,
                "data-testid": "trust-pilot-section",
                children: (0, a.jsx)("div", {
                    className: "trustpilot-widget",
                    "data-businessunit-id": "572fb42b0000ff00058c96ae",
                    "data-locale": "en-GB",
                    "data-schema-type": "Organization",
                    "data-stars": "4,5",
                    "data-style-height": "500px",
                    "data-style-width": "100%",
                    "data-template-id": "539adbd6dec7e10e686debee",
                    "data-theme": "light"
                })
            }));
            var q = s(82468),
                M = s.n(q);
            let O = () => (0, a.jsxs)("section", {
                    className: M().section,
                    "data-testid": "wall-section",
                    children: [(0, a.jsx)("img", {
                        alt: "Putting art on Displate",
                        className: M().itemsWallImg,
                        src: (0, d.v9)({
                            assetPath: "/images/about-us/displates_wall.webp"
                        }).src
                    }), (0, a.jsxs)("div", {
                        className: M().content,
                        children: [(0, a.jsxs)("h3", {
                            className: M().title,
                            children: ["Putting art on", (0, a.jsx)("br", {}), "Displate"]
                        }), (0, a.jsx)("p", {
                            className: M().descriptions,
                            children: "Displate is the leading marketplace for top-quality metal posters. To make that happen we work with the biggest brands and most talented artists out there. Our partners include a few names that you may have heard of, like Star Wars, Marvel, DC, Bethesda, NASA and The Witcher."
                        })]
                    }), (0, a.jsx)("img", {
                        alt: "Sofa",
                        className: M().sofaImg,
                        src: (0, d.v9)({
                            assetPath: "/images/about-us/sofa.webp"
                        }).src
                    })]
                }),
                E = () => {
                    let {
                        track: e
                    } = (0, c.z)();
                    return (0, l.useEffect)(() => {
                        e()
                    }, []), (0, a.jsxs)(r.A, {
                        testId: "about-us",
                        children: [(0, a.jsx)(C, {}), (0, a.jsx)(k, {}), (0, a.jsx)(O, {}), (0, a.jsx)(T, {}), (0, a.jsx)(p, {}), (0, a.jsx)(y, {})]
                    })
                };
            var H = s(76906),
                U = s(25282);
            let z = ({
                header: e
            }) => {
                let t = H.Z.defaultMeta,
                    s = {
                        webpage: {
                            h1: t.title,
                            url: (0, H.J)({
                                absolute: !0
                            }).route,
                            description: t.description,
                            imageOfPage: N.widthsSrc[0]
                        }
                    };
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(i.F, {
                        ldJsonParams: s,
                        pageMeta: t
                    }), (0, a.jsx)(U.O, {
                        headerData: e,
                        children: (0, a.jsx)(E, {})
                    }), (0, o.dH)(), (0, o.Xq)()]
                })
            };
            z.getLayout = function(e) {
                return (0, a.jsx)(n.A, {
                    abTests: e.props.abTests,
                    countryCode: e.props.countryCode,
                    featureFlags: e.props.featureFlags,
                    gitInfo: e.props.gitInfo,
                    tpid: e.props.tpid,
                    uvert: e.props.uvert,
                    children: e
                })
            };
            let B = z;
            var R = !0
        },
        77328: (e, t, s) => {
            e.exports = s(88022)
        },
        82468: e => {
            e.exports = {
                content: "WallSection_content__8Q4Es",
                title: "WallSection_title__c8FhR",
                descriptions: "WallSection_descriptions__ZCDxg",
                section: "WallSection_section___wrco",
                itemsWallImg: "WallSection_itemsWallImg__1fyYU",
                sofaImg: "WallSection_sofaImg__h_AKD"
            }
        },
        97476: e => {
            e.exports = {
                section: "FooterSection_section__xCX3O",
                item: "FooterSection_item__Ip2NZ",
                infoIcon: "FooterSection_infoIcon__4rD3Q"
            }
        },
        97740: e => {
            e.exports = {
                section: "TrustPilotSection_section__Ebvgl"
            }
        }
    },
    e => {
        e.O(0, [4024, 2183, 5706, 9658, 3915, 5657, 6633, 636, 6593, 8792], () => e(e.s = 14159)), _N_E = e.O()
    }
]);
//#