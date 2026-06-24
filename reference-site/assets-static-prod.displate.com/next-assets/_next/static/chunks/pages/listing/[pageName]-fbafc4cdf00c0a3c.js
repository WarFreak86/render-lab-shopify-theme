(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [569, 6935, 7550], {
        725: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                __N_SSP: () => eF,
                default: () => ez
            });
            var r, s = a(37876),
                i = a(15657),
                n = a(77518),
                l = a(25282),
                o = a(14232),
                c = a(69241),
                d = a(81231),
                u = a(27555),
                p = a(51192),
                m = a(68873),
                g = a(86027),
                h = a.n(g);
            let x = ["#ffe7e7", "#ffface", "#d9f6ff", "#efefff", "#d9ffdd"],
                _ = ({
                    item: e,
                    isSelected: t,
                    onClick: a,
                    index: r,
                    randomColors: i,
                    multiple: n = !0
                }) => (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)("input", {
                        checked: t,
                        className: h().input,
                        id: e.name,
                        name: "category",
                        onChange: () => a(e),
                        type: n ? "checkbox" : "radio",
                        value: e.id
                    }), (0, s.jsxs)("label", {
                        className: (0, c.A)(h().item, {
                            [h().selected]: t,
                            [h().defaultColor]: !i
                        }),
                        htmlFor: e.name,
                        style: {
                            backgroundColor: i ? x[r % x.length] : void 0
                        },
                        children: [e.name, e.iconUrl ? (0, s.jsx)("img", {
                            alt: e.name,
                            className: h().icon,
                            loading: "lazy",
                            src: e.iconUrl
                        }) : null]
                    })]
                });
            var v = a(10769);
            let f = {
                name: "All",
                uniqueId: "00000000-0000-0000-0000-000000000000",
                assetLink: (0, v.v9)({
                    assetPath: "/images/categories/icons/star.png"
                }).src
            };
            var y = a(10942),
                w = a.n(y);
            let j = ({
                filterCategories: e,
                currentCategory: t,
                setCurrentCategory: a,
                resetVideoIndex: r
            }) => {
                if (!e || 0 === e.length) return null;
                let i = [f, ...e],
                    n = e => {
                        let t = i.find(t => t.uniqueId === e.id);
                        t && (r(), a(t))
                    };
                return (0, s.jsxs)("div", {
                    className: w().container,
                    children: [(0, s.jsxs)("p", {
                        className: w().title,
                        children: ["Filter by", (0, s.jsx)("br", {}), " interest:"]
                    }), (0, s.jsx)("div", {
                        className: w().pillsContainer,
                        children: i.map((e, a) => (0, s.jsx)(_, {
                            index: a,
                            isSelected: t.uniqueId === e.uniqueId,
                            item: {
                                id: e.uniqueId,
                                name: e.name,
                                iconUrl: e.assetLink
                            },
                            onClick: n
                        }, e.uniqueId))
                    })]
                })
            };
            var I = a(30305),
                b = a(92858),
                S = a.n(b);
            let C = ({
                assetLink: e,
                imageClassName: t
            }) => {
                let a = (0, v.ZX)({
                        assetPath: e,
                        widths: [360, 720]
                    }),
                    r = (0, v.ZX)({
                        assetPath: e,
                        widths: [400, 800]
                    }),
                    i = (0, v.ZX)({
                        assetPath: e,
                        speedsize: {
                            width: 360
                        }
                    });
                return (0, s.jsxs)("picture", {
                    "data-testid": "inspiration-picture",
                    children: [(0, s.jsx)("source", {
                        sizes: a.sizes,
                        srcSet: a.srcSet
                    }), (0, s.jsx)("source", {
                        media: `(min-width: ${I.D.xl3}px)`,
                        sizes: r.sizes,
                        srcSet: r.srcSet
                    }), (0, s.jsx)("img", {
                        alt: "inspiration image",
                        className: (0, c.A)(S().image, t),
                        loading: "lazy",
                        src: i.src
                    })]
                })
            };
            var N = a(71697),
                k = a(827),
                P = a(97160),
                L = a(54810),
                T = a(87911),
                A = a(30983),
                E = a(85222),
                R = a.n(E),
                B = a(81703),
                U = a.n(B);
            let z = ({
                    videoRef: e
                }) => {
                    let [t, a] = (0, o.useState)(0), [r, i] = (0, o.useState)(0);
                    return (0, o.useEffect)(() => {
                        let t = e.current;
                        if (!t) return;
                        let r = () => {
                                i(t.duration)
                            },
                            s = () => {
                                t.duration && a(Math.min(Math.max(t.currentTime / t.duration * 100, 0), 100))
                            };
                        return t.addEventListener("loadedmetadata", r), t.addEventListener("timeupdate", s), () => {
                            t.removeEventListener("loadedmetadata", r), t.removeEventListener("timeupdate", s)
                        }
                    }, [e]), (0, s.jsx)("div", {
                        className: U().progressContainer,
                        children: (0, s.jsx)("div", {
                            className: U().progressBar,
                            "data-testid": "video-progress-bar",
                            onClick: t => {
                                let a = e.current;
                                if (!a || !r) return;
                                let s = t.currentTarget.getBoundingClientRect();
                                a.currentTime = Math.min(Math.max(Math.min(Math.max((t.clientX - s.left) / s.width, 0), 1) * r, 0), r)
                            },
                            children: (0, s.jsx)("div", {
                                className: U().progressFill,
                                style: {
                                    width: `${t}%`
                                }
                            })
                        })
                    })
                },
                F = ({
                    videoRef: e,
                    inspiration: t,
                    isOpen: a = !1,
                    className: r,
                    playVideo: i,
                    showProgressBar: n
                }) => {
                    let [l, d] = (0, o.useState)(!1);
                    return t.videoLink ? (0, s.jsxs)("div", {
                        className: R().container,
                        children: [(0, s.jsx)(C, {
                            assetLink: t.assetLink,
                            imageClassName: (0, c.A)(R().image, {
                                [R().imageVideoActive]: l && i
                            })
                        }), i ? (0, s.jsx)(A.A, {
                            autoPlay: i,
                            className: (0, c.A)(R().item, r),
                            loop: !0,
                            muted: !0,
                            onPlaying: () => {
                                d(!0)
                            },
                            playsInline: !0,
                            poster: t.assetLink,
                            ref: e,
                            src: t.videoLink
                        }) : null, (0, s.jsx)(T.u, {
                            className: R().playIcon,
                            isVisible: !i || a,
                            onClick: () => null
                        }), n && (0, s.jsx)(z, {
                            videoRef: e
                        })]
                    }) : null
                };
            var V = a(10698),
                q = a(19276),
                D = a(1121),
                M = a(91680),
                O = a(96444),
                G = a.n(O);
            let $ = {
                    src: (0, v.qH)("/icons/media/icon_player_play.svg"),
                    alt: "play icon"
                },
                W = {
                    src: (0, v.qH)("/icons/media/icon_player_pause.svg"),
                    alt: "pause icon"
                },
                Z = ({
                    inspiration: e,
                    onClose: t
                }) => {
                    let a = (0, o.useRef)(null),
                        [r, i] = (0, o.useState)(!0),
                        [n, l] = (0, o.useState)(!1),
                        {
                            countryCode: c
                        } = (0, V.C)();
                    (0, o.useEffect)(() => {
                        a.current && a.current.addEventListener("loadedmetadata", () => l(!0))
                    }, [a]);
                    let d = async () => {
                        a.current && (r ? a.current.pause() : await a.current.play(), i(!r))
                    };
                    return (0, s.jsx)(D.L, {
                        className: G().popup,
                        onClose: t,
                        children: (0, s.jsxs)("div", {
                            className: G().container,
                            children: [e.videoLink ? (0, s.jsxs)("div", {
                                className: G().videoContainer,
                                children: [n ? (0, s.jsx)("button", {
                                    className: G().videoControls,
                                    onClick: d,
                                    type: "button",
                                    children: (0, s.jsx)("img", {
                                        alt: r ? W.alt : $.alt,
                                        className: G().icon,
                                        src: r ? W.src : $.src
                                    })
                                }) : null, (0, s.jsx)(F, {
                                    className: G().video,
                                    inspiration: e,
                                    playVideo: !0,
                                    showProgressBar: !0,
                                    videoRef: a
                                })]
                            }) : (0, s.jsx)(C, {
                                assetLink: e.assetLink,
                                imageClassName: G().image
                            }), (0, s.jsx)("div", {
                                className: G().artworksContainer,
                                children: e.associatedArtworks ? .map(e => (0, s.jsxs)("div", {
                                    className: G().artworkItem,
                                    children: [(0, s.jsx)(u.A, {
                                        routeInfo: (0, L.Vo)({
                                            externalId: e.externalId.toString(),
                                            query: ((e, t) => {
                                                let a = new P.$I().parse(e, t);
                                                if (a) return {
                                                    productType: (e => {
                                                        switch (e) {
                                                            case P.Lc.GLOSS:
                                                                return L.Q2.gloss;
                                                            case P.Lc.TEXTRA:
                                                                return L.Q2.textra;
                                                            default:
                                                                return L.Q2.matte
                                                        }
                                                    })(a.finish),
                                                    size: (e => {
                                                        switch (e) {
                                                            case P.TZ.LARGE:
                                                                return L.Hu.L;
                                                            case P.TZ.XLARGE:
                                                                return L.Hu.XL;
                                                            default:
                                                                return L.Hu.M
                                                        }
                                                    })(a.size)
                                                }
                                            })(e.sku, c)
                                        }),
                                        children: (0, s.jsx)("img", {
                                            alt: e.author.name,
                                            className: G().artworkImage,
                                            src: (0, v.al)(e.imageCoreUrl, {
                                                resolution: N.cc.rect.rect190x135,
                                                orientation: e.orientation
                                            })
                                        })
                                    }), (0, s.jsxs)("div", {
                                        className: G().artworkInfo,
                                        children: [(0, s.jsx)(k.A, {
                                            author: {
                                                isLicensed: e.author.isLicensed,
                                                name: e.author.name,
                                                nick: e.author.nick,
                                                slug: e.author.nick,
                                                avatarCoreUrl: e.author.avatarCoreUrl
                                            },
                                            imageClassName: G().avatar
                                        }), (0, s.jsxs)(u.A, {
                                            className: G().description,
                                            routeInfo: (0, M.bo)({
                                                nick: e.author.nick,
                                                licensed: e.author.isLicensed
                                            }),
                                            children: [e.author.isLicensed ? (0, s.jsxs)("div", {
                                                className: G().badge,
                                                children: [(0, s.jsx)(q.A, {
                                                    className: G().badgeIcon
                                                }), (0, s.jsx)("span", {
                                                    children: "Officially licensed"
                                                })]
                                            }) : null, (0, s.jsx)("p", {
                                                className: G().author,
                                                children: e.author.name
                                            }), (0, s.jsxs)("p", {
                                                className: G().artworksCount,
                                                children: [e.author.numberOfArtworks, " artworks"]
                                            })]
                                        })]
                                    })]
                                }, e.sku))
                            })]
                        })
                    })
                };
            var H = a(34026),
                X = a(28310),
                Q = a.n(X);
            let K = ({
                inspiration: e,
                playVideo: t,
                setCurrentIndexVideoPlaying: a,
                index: r
            }) => {
                let {
                    displayModal: i,
                    closeModal: n,
                    isOpen: l
                } = (0, H.A)(), d = (0, o.useRef)(null), u = async () => {
                    e.videoLink && a(r)
                }, m = async () => {
                    await d.current ? .play()
                };
                return (0, s.jsx)("button", {
                    className: (0, c.A)(Q().item, {
                        [Q().videoItem]: !!e.videoLink
                    }),
                    "data-testid": "inspiration-item",
                    onClick: () => {
                        (0, p.O)({
                            elementId: "inspiration_card",
                            elementVariant: e.uniqueId
                        }), i((0, s.jsx)(Z, {
                            inspiration: e,
                            onClose: () => {
                                n(), m()
                            }
                        })), d.current && (d.current ? .pause(), d.current.currentTime = 0)
                    },
                    onMouseEnter: u,
                    type: "button",
                    children: e.videoLink ? (0, s.jsx)(F, {
                        inspiration: e,
                        isOpen: l,
                        playVideo: t,
                        videoRef: d
                    }) : (0, s.jsx)(C, {
                        assetLink: e.assetLink
                    })
                }, `${e.uniqueId}-${e.assetLink}`)
            };
            var J = a(11165),
                Y = a.n(J),
                ee = a(39313),
                et = a(36256),
                ea = a(13944);
            let er = ({
                inspirations: e,
                filterCategories: t,
                maxItems: a
            }) => {
                let r = (0, o.useRef)(null),
                    i = (0, o.useRef)(null),
                    [n, l] = (0, o.useState)(0),
                    [c, d] = (0, o.useState)(f),
                    g = (0, ee.P)(r, {
                        once: !0,
                        delay: 500,
                        threshold: .1,
                        callback: () => (0, m.Z)({
                            elementId: "inspirations_section",
                            elementVariant: "none"
                        })
                    });
                if ((0, o.useEffect)(() => {
                        function e() {
                            let e = i.current;
                            if (!e) return;
                            let t = parseFloat(getComputedStyle(e).rowGap),
                                a = [...e.childNodes].filter(e => 1 === e.nodeType),
                                r = getComputedStyle(e).gridTemplateColumns.split(" ").length;
                            a.forEach(e => e.style.removeProperty("margin-top")), r > 1 && a.slice(r).forEach((e, r) => {
                                let s = a[r].getBoundingClientRect().bottom,
                                    i = e.getBoundingClientRect().top;
                                e.style.marginTop = `${s+t-i}px`
                            })
                        }
                        return e(), addEventListener("resize", e, !1), () => removeEventListener("resize", e, !1)
                    }, [c]), 0 === e.length) return null;
                let h = (({
                    inspirations: e,
                    currentCategory: t,
                    defaultCategory: a,
                    maxItems: r = 1 / 0
                }) => t.uniqueId === a.uniqueId ? e.slice(0, r) : e.filter(e => (e.categories || []).some(e => e.uniqueId === t.uniqueId)).slice(0, r))({
                    inspirations: e,
                    currentCategory: c,
                    defaultCategory: f,
                    maxItems: a
                });
                return (0, s.jsxs)("div", {
                    className: Y().container,
                    ref: r,
                    children: [(0, s.jsx)("h2", {
                        className: Y().title,
                        children: "Get inspired by our community"
                    }), (0, s.jsx)(j, {
                        currentCategory: c,
                        filterCategories: t,
                        resetVideoIndex: () => l(0),
                        setCurrentCategory: d
                    }), (0, s.jsx)("div", {
                        className: Y().inspirationsMasonry,
                        id: "inspiration-masonry",
                        ref: i,
                        children: h.map((e, t) => (0, s.jsx)(K, {
                            index: t,
                            inspiration: e,
                            playVideo: g && t === n,
                            setCurrentIndexVideoPlaying: l
                        }, e.uniqueId))
                    }), (0, s.jsx)(et.$n, {
                        asChild: !0,
                        onClick: () => (0, p.O)({
                            elementId: "see_all_inspirations_button",
                            elementVariant: "widget"
                        }),
                        children: (0, s.jsx)(u.A, {
                            routeInfo: (0, ea.FW)(),
                            children: "See all inspirations"
                        })
                    })]
                })
            };
            var es = a(32418),
                ei = a(93811),
                en = a(47598),
                el = a(17220),
                eo = a(16373),
                ec = a(18120),
                ed = a(82378),
                eu = a(24682),
                ep = a(84583);
            let em = {
                    formattedTotalPrice: "€278",
                    totalPrice: 278
                },
                eg = {
                    formattedTotalPrice: "$298",
                    totalPrice: 298
                },
                eh = {
                    formattedTotalPrice: "1,998 kr.",
                    totalPrice: 1998
                },
                ex = {
                    formattedTotalPrice: "3,598 kr",
                    totalPrice: 3598
                },
                e_ = {
                    formattedTotalPrice: "398 S$",
                    totalPrice: 398
                },
                ev = {
                    formattedTotalPrice: "\xa3238",
                    totalPrice: 238
                },
                ef = {
                    formattedTotalPrice: "CHF338",
                    totalPrice: 338
                },
                ey = {
                    formattedTotalPrice: "3,098 kr",
                    totalPrice: 3098
                };
            var ew = ((r = {}).Textra = "Textra", r.Regular = "Regular", r.Set_1x2 = "Set_1x2", r.Set_1x3 = "Set_1x3", r.Set_2x2 = "Set_2x2", r),
                ej = a(55169),
                eI = a(7234),
                eb = a(87050),
                eS = a(54399),
                eC = a.n(eS);
            let eN = ({
                routeInfo: e,
                text: t,
                btnText: a,
                classes: r
            }) => {
                let i = window.location.origin,
                    n = (0, c.A)(eC().content, r ? .content);
                return (0, s.jsxs)(u.A, {
                    className: eC().container,
                    onClick: () => {
                        (0, p.O)({
                            elementId: "listing_banner",
                            elementVariant: `${i}${e.route}`,
                            interactionType: "click"
                        })
                    },
                    routeInfo: e,
                    children: [(0, s.jsx)("img", {
                        alt: "icon party popper",
                        className: eC().icon,
                        src: (0, v.qH)("/icons/common/icon_party_popper.svg")
                    }), (0, s.jsx)("span", {
                        className: n,
                        "data-nosnippet": !0,
                        children: t
                    }), (0, s.jsx)("span", {
                        className: eC().button,
                        children: a
                    }), (0, s.jsx)("img", {
                        alt: "arrow",
                        className: eC().buttonIcon,
                        src: (0, v.qH)("/icons/icon_chevron_right.svg")
                    })]
                })
            };
            var ek = a(54111),
                eP = a(69765),
                eL = a.n(eP);
            let eT = e => e.template === ew.Textra ? (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsx)("h1", {
                    className: eL().title,
                    children: "Textra Weekly Reveal: new arrivals"
                }), (0, s.jsx)(eN, {
                    btnText: "Explore now",
                    routeInfo: (0, ek.Xq)(),
                    text: "Meet Textra, the new 3D-textured metal posters with selective matte & gloss finish!"
                })]
            }) : (({
                pageName: e,
                bannerUrl: t,
                headerText: a
            }) => {
                let r = t ? (0, v.ZX)({
                    assetPath: t,
                    widths: [1440, 2880]
                }) : void 0;
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)("h1", {
                        className: eL().title,
                        children: a || e
                    }), r ? (0, s.jsx)("img", {
                        alt: "banner image",
                        className: eL().banner,
                        sizes: r.sizes,
                        src: r.widthsSrc[0],
                        srcSet: r.srcSet
                    }) : null]
                })
            })(e);
            var eA = a(95200),
                eE = a.n(eA),
                eR = a(95374);
            let eB = e => {
                    var t;
                    let {
                        track: a
                    } = (0, eo.z)(), r = e.listingLandingPageData, i = (t = r.artworkItems) ? t.map(e => ({
                        internalId: e.internalId,
                        externalId: e.externalId,
                        imageCoreUrl: e.imageCoreUrl,
                        orientation: e.orientation,
                        title: e.title,
                        labels: (0, ep.pr)(e.labels),
                        sku: e.sku
                    })) : [], n = (e => {
                        if (!e) return "Regular";
                        switch (e ? .toLowerCase()) {
                            case "textra":
                                return "Textra";
                            case "set_1x3":
                                return "Set_1x3";
                            case "set_1x2":
                                return "Set_1x2";
                            case "set_2x2":
                                return "Set_2x2";
                            default:
                                return "Regular"
                        }
                    })(r.templateType), l = r.priceCurrency || "", p = r.isoCurrency || "", {
                        countryCode: m
                    } = (0, V.C)(), g = (e => {
                        switch (e) {
                            case "MC":
                            case "CZ":
                            case "IE":
                            case "HU":
                            case "FR":
                            case "DE":
                            case "GR":
                            case "NL":
                            case "PT":
                            case "SK":
                            case "SI":
                            case "LV":
                            case "LT":
                            case "RO":
                            case "HR":
                            case "CY":
                            case "ME":
                            case "TR":
                            case "AT":
                            case "BE":
                            case "EE":
                            case "FI":
                            case "LU":
                            case "MT":
                            case "ES":
                            case "PL":
                            case "RU":
                            case "UA":
                            case "BG":
                            case "IS":
                            case "IT":
                            case "IC":
                            case "BL":
                            case "RE":
                            case "MF":
                            case "PM":
                            case "SX":
                                return em;
                            case "DK":
                            case "FO":
                            case "GL":
                                return eh;
                            case "GB":
                            case "GG":
                            case "JE":
                                return ev;
                            case "NO":
                                return ex;
                            case "CH":
                                return ef;
                            case "SG":
                                return e_;
                            case "SE":
                                return ey;
                            default:
                                return eg
                        }
                    })(m), h = "doom-the-dark-ages" === e.pageName, x = h ? g.totalPrice : r.totalPrice ? ? 0, _ = h ? g.formattedTotalPrice : `${l}${x}`, v = r ? .relatedSearches || [];
                    (0, o.useEffect)(() => {
                        a({
                            eventParams: {
                                phrase: e.pageName,
                                page: 1,
                                pages: 1
                            }
                        })
                    }, [e]);
                    let f = n === ew.Textra ? {
                            productType: eu.ZU.TEXTRA
                        } : void 0,
                        y = [ew.Set_1x2, ew.Set_1x3, ew.Set_2x2].includes(n),
                        w = (0, c.A)({
                            [eE().masonryGridSet]: y,
                            [eE().masonryGridSet2x2]: n === ew.Set_2x2
                        }),
                        j = (0, c.A)(eE().buttonsWrapper, {
                            [eE().buttonsSet1x2]: n === ew.Set_1x2
                        }),
                        I = (0, c.A)(eE().buySetButton, {
                            [eE().buyButtonSet1x2]: n === ew.Set_1x2
                        }),
                        b = r.artworkItems.map(e => ({
                            sku: e.sku,
                            metadata: {
                                productType: "artwork",
                                externalId: e.externalId,
                                title: e.title,
                                size: eb.t.M,
                                price: e.price ? .amountInCurrency || 0,
                                currency: p,
                                method: "multiplate"
                            }
                        }));
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("div", {
                            className: eE().container,
                            children: (0, s.jsxs)(et.mc, {
                                className: eE().section,
                                withVerticalPadding: !0,
                                children: [(0, s.jsx)(eT, {
                                    bannerUrl: r.topBannerUrl,
                                    headerText: r.headerText,
                                    pageName: e.pageName,
                                    template: n
                                }), (0, s.jsx)(ec.L, {
                                    callback: ei._,
                                    children: (0, s.jsx)(es.U, {
                                        artworksToDisplay: 100,
                                        className: w,
                                        feedName: "content-promo",
                                        infiniteScroll: !0,
                                        items: i,
                                        metadata: {
                                            messageSendingDisabled: !1,
                                            itemListName: "Listing",
                                            listingFunction: e.pageName,
                                            listingType: "masonry",
                                            athenaPageName: eR.Mi.analyticsAthenaName,
                                            gaPageName: eR.Mi.analyticsGaName,
                                            itemQueryParams: f
                                        }
                                    })
                                }), (0, s.jsxs)("div", {
                                    className: j,
                                    children: [y ? (0, s.jsx)(d.h, {
                                        className: I,
                                        items: b,
                                        label: `Add set to cart for ${_}`,
                                        testId: "buy-set-btn"
                                    }) : null, (0, s.jsx)(et.N_, {
                                        asChild: !0,
                                        className: eE().redirectButton,
                                        children: (0, s.jsx)(u.A, {
                                            routeInfo: r.actionButtonUrl ? (0, ed.ZW)({
                                                path: r.actionButtonUrl,
                                                target: "external"
                                            }) : (0, eI.cT)({
                                                query: {
                                                    q: "textra"
                                                }
                                            }),
                                            children: r.actionButtonText || "See all designs"
                                        })
                                    })]
                                })]
                            })
                        }), (0, s.jsx)("div", {
                            className: eE().uspSection,
                            children: (0, s.jsx)(el.InstructionVideoSectionWithForYouDrawer, {})
                        }), (0, s.jsx)("div", {
                            className: eE().container,
                            children: (0, s.jsxs)(et.mc, {
                                className: eE().inspTagSection,
                                withVerticalPadding: !0,
                                children: [r.inspirations.items ? (0, s.jsx)(er, {
                                    filterCategories: r.inspirations.categories,
                                    inspirations: r.inspirations.items
                                }) : null, v.length ? (0, s.jsx)("div", {
                                    className: eE().seoTagsSection,
                                    children: (0, s.jsx)(en.K, {
                                        tags: v,
                                        title: "Explore related searches"
                                    })
                                }) : null, (0, s.jsx)(ej.Newsletter, {})]
                            })
                        })]
                    })
                },
                eU = ({
                    listingLandingPageData: e,
                    pageName: t,
                    header: a,
                    isTextraTemplate: r
                }) => {
                    let n = r ? eR.lK : eR.MB,
                        o = e.headerText || n.title,
                        c = {
                            webpage: {
                                h1: o,
                                url: (0, eR.Kz)({
                                    absolute: !0,
                                    pageName: t
                                }).route,
                                description: n.description,
                                imageOfPage: n.coverImage
                            }
                        };
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(i.F, {
                            ldJsonParams: c,
                            noFollow: !0,
                            noIndex: !0,
                            pageMeta: {
                                coverImage: n.coverImage,
                                description: n.description,
                                title: o
                            }
                        }), (0, s.jsx)(l.O, {
                            headerData: a,
                            children: (0, s.jsx)(eB, {
                                listingLandingPageData: e,
                                pageName: t
                            })
                        })]
                    })
                };
            eU.getLayout = function(e) {
                return (0, s.jsx)(n.A, {
                    abTests: e.props.abTests,
                    countryCode: e.props.countryCode,
                    featureFlags: e.props.featureFlags,
                    gitInfo: e.props.gitInfo,
                    tpid: e.props.tpid,
                    uvert: e.props.uvert,
                    children: e
                })
            };
            let ez = eU;
            var eF = !0
        },
        827: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => u
            });
            var r = a(37876),
                s = a(69241),
                i = a(27555),
                n = a(14399),
                l = a(10769),
                o = a(91680),
                c = a(42957),
                d = a.n(c);
            let u = ({
                author: e,
                className: t,
                imageClassName: a,
                showName: c = !1,
                onClick: u
            }) => {
                let p = {
                        nick: e.isLicensed ? e.slug : e.nick,
                        licensed: e.isLicensed
                    },
                    m = "avatarUrl" in e ? (0, l.ZX)({
                        assetPath: e.avatarUrl,
                        widths: [80, 160]
                    }) : (0, n.A)(e.avatarCoreUrl, e.isLicensed, [80, 160]);
                return (0, r.jsxs)(i.A, {
                    className: (0, s.A)(d().container, t),
                    "data-testid": "avatar",
                    onClick: () => u && u((0, o.bo)({ ...p,
                        absolute: !0
                    }).route),
                    routeInfo: (0, o.bo)(p),
                    children: [(0, r.jsx)("div", {
                        className: (0, s.A)(d().imageWrapper, a),
                        "data-testid": "avatar-image",
                        children: (0, r.jsx)("img", {
                            alt: `${e.name} avatar`,
                            className: d().image,
                            loading: "lazy",
                            sizes: m.sizes,
                            src: m.src,
                            srcSet: m.srcSet
                        })
                    }), c && (0, r.jsx)("div", {
                        className: d().nameWrapper,
                        children: (0, r.jsx)("span", {
                            className: d().authorName,
                            children: e.name
                        })
                    })]
                })
            }
        },
        1833: (e, t, a) => {
            "use strict";
            a.d(t, {
                o: () => r
            });
            let r = (0, a(8106).v)(e => ({
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
        10302: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => s
            });
            var r = a(37876);
            let s = e => (0, r.jsx)("svg", {
                fill: "none",
                height: "1em",
                viewBox: "0 0 48 48",
                width: "1em",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: (0, r.jsxs)("g", {
                    stroke: "#fff",
                    strokeWidth: 2,
                    children: [(0, r.jsx)("rect", {
                        height: 46,
                        rx: 23,
                        width: 46,
                        x: 1,
                        y: 1
                    }), (0, r.jsx)("path", {
                        d: "m19 15 14 9-14 9z",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })]
                })
            })
        },
        10942: e => {
            e.exports = {
                container: "InspirationFilters_container__Seuzo",
                pillsContainer: "InspirationFilters_pillsContainer___S_fv",
                title: "InspirationFilters_title__C7_Ei"
            }
        },
        11165: e => {
            e.exports = {
                container: "InspirationsV2_container__pLT7W",
                title: "InspirationsV2_title__JJDH_",
                inspirationsMasonry: "InspirationsV2_inspirationsMasonry__Bwgfq"
            }
        },
        13930: (e, t, a) => {
            "use strict";
            a.d(t, {
                M: () => s
            });
            var r = a(22884);
            let s = ({
                currency: e,
                method: t,
                items: a
            }) => {
                let s = a.filter(e => null != e.price),
                    i = s.length > 0 ? s.reduce((e, t) => e + (t.price ? ? 0) * t.quantity, 0) : void 0,
                    n = a.map(({
                        item_id: e,
                        price: t,
                        ...a
                    }) => ({ ...a,
                        ...null != e && {
                            item_id: e
                        },
                        ...null != t && {
                            price: t
                        }
                    }));
                (0, r.u)({
                    event: "sst_add_to_cart",
                    ecommerce: {
                        method: t,
                        currency: e,
                        ...void 0 !== i && {
                            value: i
                        },
                        items: n
                    }
                })
            }
        },
        14399: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => i,
                Op: () => n,
                _V: () => l
            });
            var r = a(84810),
                s = a(10769);
            let i = (e, t, a) => e ? t ? l(e, a) : n(e, a) : {
                    src: "",
                    srcSet: "",
                    widthsSrc: []
                },
                n = (e, t) => e ? (0, s.ZX)({
                    assetPath: e,
                    assetSubPath: "avatars",
                    assetDomain: r.ConfigPublic.ArtworkDomain,
                    widths: t
                }) : {
                    src: "",
                    srcSet: "",
                    widthsSrc: []
                },
                l = (e, t) => e ? (0, s.ZX)({
                    assetPath: e,
                    assetSubPath: "brand/layout",
                    assetDomain: r.ConfigPublic.ArtworkDomain,
                    widths: t
                }) : {
                    src: "",
                    srcSet: "",
                    widthsSrc: []
                }
        },
        17220: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                InstructionVideoSectionWithForYouDrawer: () => c
            });
            var r = a(37876),
                s = a(14232),
                i = a(85314),
                n = a(88308),
                l = a(1833),
                o = a(73480);
            let c = () => {
                let e = (0, l.o)(e => e.isDrawerOpen),
                    t = (0, l.o)(e => e.setIsDrawerOpen),
                    {
                        shouldShowDrawer: a,
                        shouldImmediatelyShowDrawer: c
                    } = (0, o.Q)();
                return (0, s.useEffect)(() => {
                    c && t(!0)
                }, [c, t]), (0, r.jsx)(i.z, {
                    bottomSlot: e ? (0, r.jsx)(n.a, {}) : null,
                    onViewportEnter: () => {
                        a && t(!0)
                    }
                })
            }
        },
        18397: e => {
            e.exports = {
                iconWrapper: "PlayIcon_iconWrapper__Zwf7g",
                iconHidden: "PlayIcon_iconHidden__jIQmp",
                iconTransition: "PlayIcon_iconTransition__60tAS",
                icon: "PlayIcon_icon__52Ftx"
            }
        },
        19276: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => s
            });
            var r = a(37876);
            let s = e => (0, r.jsxs)("svg", {
                width: "1em",
                height: "1em",
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: [(0, r.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M9.63935 1.41806L11.745 0.930014L12.5423 2.95305L14.6322 3.5065L14.4044 5.67125L16 7.13935L14.7999 8.94983L15.5347 10.9967L13.6371 12.0377L13.344 14.1945L11.1833 14.2277L9.92856 16L8 15.018L6.07144 16L4.81672 14.2277L2.65601 14.1945L2.36287 12.0377L0.465294 10.9967L1.20012 8.94983L0 7.13935L1.59557 5.67125L1.36785 3.5065L3.45773 2.95305L4.25503 0.930014L6.36065 1.41806L8 0L9.63935 1.41806ZM11.1449 5.7644C11.0136 5.64972 10.8146 5.66382 10.7008 5.79611L7.27747 9.7753L5.27808 7.88654C5.15127 7.76677 4.95187 7.7732 4.83295 7.9009C4.71407 8.02865 4.72045 8.22952 4.84722 8.34931L7.08564 10.4635C7.14808 10.5225 7.23184 10.5532 7.31731 10.5487C7.40281 10.5443 7.48306 10.5049 7.53913 10.4397L11.1764 6.21182C11.2902 6.07951 11.2762 5.87912 11.1449 5.7644Z",
                    fill: "url(#paint0_linear_7486_45979)"
                }), (0, r.jsx)("defs", {
                    children: (0, r.jsxs)("linearGradient", {
                        id: "paint0_linear_7486_45979",
                        x1: -.0590224,
                        y1: 0,
                        x2: 16.1764,
                        y2: 16.1166,
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, r.jsx)("stop", {
                            stopColor: "#55FCFF"
                        }), (0, r.jsx)("stop", {
                            offset: .5,
                            stopColor: "#005EFF"
                        }), (0, r.jsx)("stop", {
                            offset: 1
                        })]
                    })
                })]
            })
        },
        20019: (e, t, a) => {
            "use strict";
            a.d(t, {
                M: () => n,
                O: () => l
            });
            var r = a(37876),
                s = a(14232),
                i = a(90511);
            let n = (0, s.createContext)({
                    uvert: i.v.GeneralUser
                }),
                l = ({
                    children: e,
                    uvert: t
                }) => (0, r.jsx)(n.Provider, {
                    value: {
                        uvert: t
                    },
                    children: e
                })
        },
        28310: e => {
            e.exports = {
                item: "InspirationItem_item__jPYni",
                videoItem: "InspirationItem_videoItem__ngYkE"
            }
        },
        30983: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => p
            });
            var r = a(37876),
                s = a(14232),
                i = a(69241),
                n = a(90413),
                l = a(30305),
                o = a(10769),
                c = a(57845),
                d = a.n(c);
            let u = ({
                src: e,
                preload: t,
                responsive: a,
                poster: c,
                autoPlay: u,
                className: p,
                mobileSize: m,
                desktopSize: g,
                ref: h,
                ...x
            }) => {
                let _ = (0, n.A)(),
                    {
                        isTabletOrDesktop: v
                    } = (0, l.Q)(),
                    [f, y] = (0, s.useState)(null),
                    w = (0, s.useMemo)(() => {
                        let e;
                        return (e = v ? g : m) ? {
                            width: e.width,
                            ...e.height && {
                                height: e.height
                            }
                        } : {
                            width: v ? 1080 : 720
                        }
                    }, [v, g, m]),
                    j = (0, s.useMemo)(() => c || (_ && e ? (0, o.$4)(e, { ...w,
                        videoPoster: !0
                    }) : void 0), [c, _, e, w]),
                    I = j ? "" : "#t=0.1";
                return (0, s.useEffect)(() => {
                    let e = async () => {
                        h && "current" in h && h.current && await h.current.play()
                    };
                    !f || u && e()
                }, [u, f, h]), (0, s.useEffect)(() => {
                    _ && y(w)
                }, [_, w]), (0, r.jsx)("video", {
                    autoPlay: !1,
                    className: (0, i.A)(d().video, p, {
                        [d().responsive]: a
                    }),
                    playsInline: !0,
                    poster: j,
                    preload: t || "metadata",
                    ref: h,
                    src: f ? `${(0,o.$4)(e,f)}${I}` : void 0,
                    ...x
                })
            };
            u.displayName = "SpeedSizeVideoRaw";
            let p = u
        },
        42957: e => {
            e.exports = {
                container: "Avatar_container__4nZUl",
                imageWrapper: "Avatar_imageWrapper__9zVcA",
                image: "Avatar_image__q51yk",
                nameWrapper: "Avatar_nameWrapper__TNtso",
                authorName: "Avatar_authorName__v33t7"
            }
        },
        47598: (e, t, a) => {
            "use strict";
            a.d(t, {
                K: () => m
            });
            var r = a(37876),
                s = a(14232),
                i = a(76436),
                n = a(27555),
                l = a(37787),
                o = a(47765),
                c = a(36256),
                d = a(14619),
                u = a(7234);
            let p = ["electricGreen", "warpSpeedBlue", "flameOrange", "jordyBlue", "powerPink"],
                m = ({
                    tags: e,
                    title: t,
                    classes: a
                }) => {
                    let {
                        analyticsGaName: m
                    } = (0, o.aP)(), g = e.slice(0, 12);
                    return (0, r.jsxs)(c.mc, {
                        className: (0, d.cn)("bg-background-light", a ? .section),
                        "data-testid": "related-searches-section",
                        children: [(0, r.jsx)("h2", {
                            className: "mb-6 block text-center text-display-xs font-display uppercase md:mx-12 md:mb-12 md:text-display-sm",
                            children: t
                        }), (0, r.jsx)("div", {
                            className: "scrollbar-hide -mx-4 max-w-[100vw] overflow-x-auto md:mx-12 md:flex md:flex-wrap md:justify-center md:overflow-visible md:px-10",
                            "data-testid": "related-searches-list",
                            children: g.map((e, t) => t < 12 && t % 3 == 0 ? (0, r.jsx)("div", {
                                className: "ml-4 flex md:ml-0",
                                "data-testid": "tagRow",
                                children: g.slice(t, t + 3).map((e, a) => {
                                    let o, d;
                                    return (0, r.jsxs)(s.Fragment, {
                                        children: [(o = t + a, d = `mobile-tag-${e.slug}`, (0, r.jsx)(c.vu, {
                                            asChild: !0,
                                            className: "mb-3 mr-3 md:mb-4",
                                            color: p[o % p.length],
                                            interactive: !0,
                                            children: (0, r.jsxs)(n.A, {
                                                onClick: () => (0, i.O)(e.phrase, {
                                                    location: `${m}|related_searches`,
                                                    type: u.ak.analyticsGaName
                                                }),
                                                routeInfo: (0, l.mM)(e.slug, e.routeType ? ? l.su.Search),
                                                children: [(0, r.jsx)("span", {
                                                    className: "relative shrink-0 truncate capitalize",
                                                    children: e.phrase
                                                }), (0, r.jsx)("span", {
                                                    className: "relative shrink-0 truncate opacity-60",
                                                    children: "posters"
                                                })]
                                            })
                                        }, d)), 2 === a ? (0, r.jsx)("span", {
                                            className: "inline md:hidden",
                                            children: "\xa0"
                                        }) : null]
                                    }, `tagRow-${a}`)
                                })
                            }, `row-${t}`) : null)
                        })]
                    })
                }
        },
        48124: (e, t, a) => {
            "use strict";
            a.d(t, {
                S: () => o,
                o: () => l
            });
            var r = a(14232),
                s = a(74359),
                i = a(35891),
                n = a(8341);
            let l = ["accessories-cart-excluded"],
                o = e => {
                    let {
                        fetchedUserInfo: t
                    } = (0, r.useContext)(i.cy);
                    return (0, s.I)({
                        queryKey: l,
                        queryFn: () => n.$.getAccessoriesCartItemsExcluded(),
                        enabled: t && e
                    })
                }
        },
        54399: e => {
            e.exports = {
                container: "TextraBanner_container__qjIMy",
                icon: "TextraBanner_icon__EegWZ",
                button: "TextraBanner_button__EP6UF",
                buttonIcon: "TextraBanner_buttonIcon__IqgEH",
                content: "TextraBanner_content__Adnst"
            }
        },
        55169: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                Newsletter: () => I,
                NewsletterFormType: () => y
            });
            var r, s = a(37876),
                i = a(14232),
                n = a(78970),
                l = a(27555),
                o = a(74773),
                c = a(2661),
                d = a(40097),
                u = a(87050),
                p = a(39313),
                m = a(54111),
                g = a(10769),
                h = a(16909),
                x = a(35891),
                _ = a(36256),
                v = a(14619),
                f = a(39432),
                y = ((r = {}).REGULAR = "regular", r.REGISTRATION = "registration", r.CHECKOUT = "checkout", r.SETTINGS = "settings", r.POPUP = "popup", r);
            let w = {
                    email: null,
                    isError: !1
                },
                j = {
                    email: ""
                },
                I = ({
                    formType: e = "regular",
                    className: t,
                    webflow: a = !1
                }) => {
                    let r, {
                            userInfo: y,
                            fetchedUserInfo: I
                        } = (0, i.useContext)(x.cy),
                        b = (0, i.useRef)(null),
                        {
                            pushEvent: S
                        } = (0, c.L)();
                    (0, p.P)(b, {
                        once: !0,
                        callback: () => (0, n.I)(e)
                    });
                    let [C, N] = (0, i.useState)(w), [k, P] = (0, i.useState)(j), {
                        mutate: L,
                        isPending: T
                    } = (r = {
                        onSuccess: async t => {
                            switch (t.status) {
                                case u.it.SUCCESS:
                                    N({
                                        email: "E-mail added to the newsletter",
                                        isError: !1
                                    }), (0, n.N)({
                                        formType: e
                                    }), S({
                                        eventType: "click",
                                        eventName: "newsletterRegistration"
                                    });
                                    break;
                                case u.it.ALREADY_ADDED:
                                    N({
                                        email: "Your email is already in newsletter",
                                        isError: !0
                                    });
                                    break;
                                case u.it.FORMAT_ERROR:
                                    N({
                                        email: "Incorrect email address format",
                                        isError: !0
                                    });
                                    break;
                                default:
                                    N({
                                        email: "Could not add you email, please try again.",
                                        isError: !0
                                    })
                            }
                        },
                        onError: e => {
                            (0, h.vV)("sendNewsletter error " + JSON.stringify(e))
                        }
                    }, (0, d.n)({
                        mutationFn: e => u.$y.newsletterSubscribe({
                            email: e
                        }),
                        onSuccess: r ? .onSuccess,
                        onError: r ? .onError
                    }));
                    if (I && y ? .account.isUserLoggedIn && !y ? .account.shouldMarketingConsentsShow) return null;
                    let A = (0, g.v9)({
                        assetPath: "/images/newsletter/newsletter_discount_v3.jpg",
                        widths: [660, 1320]
                    });
                    return (0, s.jsx)(_.mc, {
                        className: t,
                        variant: "noPaddingMobile",
                        children: (0, s.jsx)(_.xA, {
                            variant: "noGap",
                            children: (0, s.jsxs)("section", {
                                className: (0, v.cn)("col-span-full grid grid-cols-subgrid", a ? "grid!" : null),
                                "data-testid": "newsletter-section",
                                id: "newsletter",
                                ref: b,
                                children: [(0, s.jsx)("img", {
                                    alt: "Newsletter signup with 25% discount offer for Displate products",
                                    className: "col-span-full lg:col-span-6 h-full w-full self-center object-contain lg:object-cover lg:rounded-l-lg",
                                    "data-testid": "newsletter-image",
                                    loading: "lazy",
                                    sizes: A.sizes,
                                    src: A.src
                                }), (0, s.jsxs)("div", {
                                    className: "col-span-full lg:col-span-6 bg-background-information p-8 md:p-14 flex flex-col justify-center lg:rounded-r-lg 2xl:px-20",
                                    children: [(0, s.jsx)("h2", {
                                        className: "w-4/5 sm:w-3/4 2xl:w-full text-heading-h3 sm:text-heading-h2 text-wrap-balance mb-4",
                                        children: "Sign up and never miss a deal"
                                    }), (0, s.jsx)("p", {
                                        className: "text-body-lg mb-4",
                                        children: "Join our newsletter for the latest discounts and Displate goodies"
                                    }), (0, s.jsx)("form", {
                                        className: "flex items-end mb-2",
                                        children: (0, s.jsx)(_.A_, {
                                            actionSlot: (0, s.jsx)(_.$n, {
                                                loading: T,
                                                onClick: () => {
                                                    let e = !k.email.trim().length,
                                                        t = !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/i.test(k.email.trim());
                                                    e || t ? N({ ...C,
                                                        ...(e || t) && {
                                                            email: e ? "Required field" : "Incorrect email address format"
                                                        },
                                                        isError: !0
                                                    }) : (N({
                                                        email: null,
                                                        isError: !1
                                                    }), L(k.email))
                                                },
                                                type: "button",
                                                variant: "primary",
                                                children: "Sign up"
                                            }),
                                            autoComplete: "email",
                                            className: "w-full",
                                            error: C.isError && C.email ? C.email : void 0,
                                            label: "Email address",
                                            name: "email",
                                            onChange: e => {
                                                let {
                                                    target: t
                                                } = e, {
                                                    name: a
                                                } = t, r = t.value;
                                                P({ ...k,
                                                    [a]: r
                                                })
                                            },
                                            placeholder: "Enter your e-mail",
                                            type: "email",
                                            value: k.email
                                        })
                                    }), !C.isError && C.email ? (0, s.jsx)("p", {
                                        className: "text-heading-subtitle-eyebrow text-text-success mb-2",
                                        children: C.email
                                    }) : null, (0, s.jsxs)("p", {
                                        className: "text-body-xs",
                                        children: ["By clicking “Sign up”, you agree to receiving emails and to processing of your personal data in accordance with the", " ", (0, s.jsx)(_.N_, {
                                            asChild: !0,
                                            variant: "secondary",
                                            children: (0, s.jsx)(l.A, {
                                                routeInfo: (0, f.Z)(),
                                                target: "_blank",
                                                children: "Privacy policy"
                                            })
                                        }), ". The data will be processed to customize the newsletter content according to your personal preferences. The controller of your personal data is Displate, i.e. GWD Concept Sp. z o. o. with a registered office in Warsaw. You can unsubscribe at any time by clicking the “Unsubscribe” button in the email footer, unchecking your consent in the “Basic Info” tab of the customer panel, or sending a request to ", (0, s.jsx)(o.$, {
                                            routeInfoFn: m.Qq,
                                            variant: "secondary"
                                        }), "."]
                                    })]
                                })]
                            })
                        })
                    })
                }
        },
        57845: e => {
            e.exports = {
                responsive: "SpeedSizeVideo_responsive__KXRrR",
                container: "SpeedSizeVideo_container__JRhvK",
                mobilePlaceholderImageContainer: "SpeedSizeVideo_mobilePlaceholderImageContainer__eQltb",
                pauseContainer: "SpeedSizeVideo_pauseContainer__3QmX9",
                playIcon: "SpeedSizeVideo_playIcon__mwFmk",
                playButton: "SpeedSizeVideo_playButton__P2ffR",
                video: "SpeedSizeVideo_video__qA3su"
            }
        },
        68873: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => s
            });
            var r = a(22884);
            let s = ({
                elementId: e,
                elementVariant: t = "none",
                additionalData: a
            }) => {
                let s = {
                    event: "element_impression",
                    element_id: e,
                    element_variant: t,
                    ...a
                };
                (0, r.u)(s)
            }
        },
        69765: e => {
            e.exports = {
                title: "Header_title__g_JTR",
                banner: "Header_banner__4GqpJ"
            }
        },
        71186: (e, t, a) => {
            "use strict";
            a.d(t, {
                q: () => j,
                Q: () => I
            });
            var r = a(37876),
                s = a(14232),
                i = a(67768),
                n = a(40097),
                l = a(46841),
                o = a(2661),
                c = a(87973),
                d = a(16903),
                u = a(48124),
                p = a(35891),
                m = a(36256),
                g = a(13341),
                h = a(87050),
                x = a(97160),
                _ = a(72318),
                v = a(13930),
                f = a(98315);
            class y {
                constructor({
                    addedPositions: e,
                    athenaPushEvent: t,
                    currentCart: a
                }) {
                    this.track = () => {
                        this.handleBrazeAnalytics(), this.handleAthenaAnalytics(), this.handleGAAnalytics()
                    }, this.handleBrazeAnalytics = () => {
                        this.addedProductSkus.forEach(e => {
                            var t;
                            let a;
                            t = Array.from(new Set([...this.currentCartSkus, e])), a = x.SR.fromCode(e), (0, _.m)("product_added_to_cart", {
                                sku: e,
                                currentCartItems: t,
                                internalId: a.variant.code
                            })
                        })
                    }, this.handleAthenaAnalytics = () => {
                        this.addedPositions.forEach(e => {
                            var t;
                            let {
                                metadata: a,
                                sku: r,
                                id: s
                            } = e;
                            j(a) && (t = {
                                internalId: Number(x.SR.fromCode(r).variant.code),
                                externalId: a.externalId,
                                title: a.title,
                                cartItemId: Number(s)
                            }, (0, this.athenaPushEvent)({
                                eventName: "addToCart",
                                eventType: "click",
                                eventParams: (e => {
                                    let {
                                        searchQueryId: t = null,
                                        searchPosition: a = null,
                                        sort: r = null
                                    } = window.history.state;
                                    return {
                                        itemId: e.internalId,
                                        ...e.externalId && {
                                            itemCollectionId: e.externalId
                                        },
                                        name: e.title,
                                        cartItemId: e.cartItemId,
                                        abTest: null,
                                        searchQueryId: t,
                                        searchPosition: a,
                                        sort: r
                                    }
                                })(t)
                            }))
                        })
                    }, this.handleGAAnalytics = () => {
                        this.addedPositions && this.addedPositions.forEach(e => {
                            (0, v.M)({
                                currency: e.metadata.currency ? ? e.pixelEventData ? .content ? .currency,
                                method: e.metadata.method,
                                items: [{
                                    item_variant: e.sku,
                                    quantity: e.quantity ? ? 1,
                                    price: null != e.metadata.price ? (0, f.yJ)(e.metadata.price) : e.pixelEventData ? .content ? .value,
                                    item_id: e.metadata.externalId
                                }]
                            })
                        })
                    }, this.addedPositions = e, this.athenaPushEvent = t, this.currentCart = a
                }
                get addedProductSkus() {
                    return this.addedPositions.map(e => e.sku)
                }
                get currentCartSkus() {
                    let e = this.currentCart ? .positions.filter(e => "product" === e.type);
                    return e ? .map(e => e.productData.sku) || []
                }
            }
            var w = a(74381);
            let j = e => "artwork" === e.productType,
                I = e => {
                    let t = (0, i.jE)(),
                        {
                            enqueueToast: a
                        } = (0, m.oS)(),
                        {
                            fetchUserInfo: x
                        } = (0, s.useContext)(p.cy),
                        {
                            pushEvent: _
                        } = (0, o.L)();
                    return (0, n.n)({
                        mutationKey: w.M,
                        mutationFn: async e => {
                            let t = new Map,
                                a = e.map(e => {
                                    let a = (0, l.Ay)(),
                                        r = e.quantity || 1;
                                    return t.set(a, { ...e,
                                        quantity: r
                                    }), {
                                        type: "product",
                                        clientRequestId: a,
                                        productData: {
                                            sku: e.sku,
                                            quantity: r
                                        }
                                    }
                                });
                            return {
                                positions: (await h.$y.addPositionsToCartV8((0, d.j)(), "0", {
                                    positions: a
                                })).positions.map(e => {
                                    let a = t.get(e.clientRequestId);
                                    if (!a) throw Error(`Item not found for position ${e.clientRequestId}`);
                                    return { ...e,
                                        ...a
                                    }
                                })
                            }
                        },
                        ...e,
                        onSuccess: (a, r, s) => {
                            let i = t.getQueryData(g.L);
                            new y({
                                addedPositions: a.positions,
                                athenaPushEvent: _,
                                currentCart: i
                            }).track(), t.invalidateQueries({
                                queryKey: c.yz
                            }), t.invalidateQueries({
                                queryKey: g.L
                            }), t.invalidateQueries({
                                queryKey: u.o
                            }), x(), e ? .onSuccess ? .(a, r, s)
                        },
                        onError: (t, s, i) => {
                            a({
                                actionAltText: "Refresh",
                                actionSlot: (0, r.jsx)(m.$n, {
                                    onClick: () => location.reload(),
                                    size: "sm",
                                    variant: "secondaryDarkOutline",
                                    children: "Refresh"
                                }),
                                message: "Something went wrong",
                                variant: "error"
                            }), e ? .onError ? .(t, s, i)
                        }
                    })
                }
        },
        73480: (e, t, a) => {
            "use strict";
            a.d(t, {
                Q: () => o
            });
            var r = a(87973),
                s = a(47765),
                i = a(69894),
                n = a(7234),
                l = a(1833);
            let o = () => {
                let {
                    data: e
                } = (0, r._v)(), t = (0, s.aP)(), a = (0, l.o)(e => e.pagesTraversedByUser), o = (0, l.o)(e => e.wasClosed), c = !!e && 0 === e.wishlistItemsCount, d = [i.j.readableName, n.ak.readableName].includes(t.readableName);
                return {
                    shouldShowDrawer: c && d && !o,
                    shouldImmediatelyShowDrawer: c && d && a > 4 && o
                }
            }
        },
        74381: (e, t, a) => {
            "use strict";
            a.d(t, {
                M: () => r
            });
            let r = ["add-to-cart"]
        },
        74773: (e, t, a) => {
            "use strict";
            a.d(t, {
                $: () => n
            });
            var r = a(37876),
                s = a(27555),
                i = a(36256);
            let n = ({
                className: e,
                routeInfoFn: t,
                variant: a = "primary"
            }) => {
                let n = t(),
                    l = n.route.replace("mailto:", "");
                return (0, r.jsx)(i.N_, {
                    asChild: !0,
                    className: e,
                    variant: a,
                    children: (0, r.jsx)(s.A, {
                        routeInfo: n,
                        children: l
                    })
                })
            }
        },
        76436: (e, t, a) => {
            "use strict";
            a.d(t, {
                O: () => s
            });
            var r = a(22884);
            let s = (e, t) => {
                (0, r.u)({
                    event: "tag_click",
                    tag_label: e.toLowerCase(),
                    tag_type: t.type,
                    tag_location: t.location
                })
            }
        },
        76962: (e, t, a) => {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/listing/[pageName]", function() {
                return a(725)
            }])
        },
        77518: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => D
            });
            var r = a(37876),
                s = a(14232),
                i = a(56413),
                n = a(67768);
            a(18847);
            var l = a(47321),
                o = a(62056),
                c = a(2443),
                d = a(9054),
                u = a(67911),
                p = a(83736),
                m = a(61817),
                g = a(38847),
                h = a(8735),
                x = a(10698);
            let _ = ({
                countryCode: e
            }) => {
                let {
                    setCountryCode: t
                } = (0, x.C)();
                return (0, s.useEffect)(() => {
                    t({
                        countryCode: e,
                        shouldUpdateContext: !1
                    })
                }, []), null
            };
            var v = a(67385),
                f = a(14e3),
                y = a(1833),
                w = a(93878),
                j = a(16903),
                I = a(62120),
                b = a(62564),
                S = a(73678),
                C = a(29454),
                N = a(22884);
            let k = ({
                userVertical: e,
                userEngagement: t
            }) => {
                (0, N.u)({
                    event: "user_data",
                    user_vertical: e,
                    user_engagement_level: t
                })
            };
            var P = a(84810);
            let L = "user-vertical";
            var T = a(74359),
                A = a(98461),
                E = a(35891),
                R = a(87050);
            let B = ["userVertical"];
            var U = a(90511);
            let z = () => {
                let e = (0, f.usePathname)(),
                    {
                        data: t,
                        isError: a,
                        error: r,
                        refetch: i
                    } = (() => {
                        let {
                            fetchedUserInfo: e
                        } = (0, s.useContext)(E.cy);
                        return (0, T.I)({
                            queryKey: B,
                            queryFn: () => R.$y.getUsersVerticalV2((0, A.R)()),
                            enabled: e,
                            staleTime: 1e3,
                            retry: !1
                        })
                    })(),
                    {
                        userInfo: n
                    } = (0, s.useContext)(E.cy),
                    l = n ? .account.engagement.type,
                    o = (0, s.useRef)(!1);
                return (0, s.useEffect)(() => {
                    o.current ? i() : o.current = !0
                }, [e]), (0, s.useEffect)(() => {
                    void 0 !== t && void 0 !== l && (t.type ? (C.A.set(L, t.type, {
                        domain: P.ConfigPublic.VerticalizationCookieDomain
                    }), k({
                        userVertical: t.type,
                        userEngagement: l
                    })) : (C.A.remove(L, {
                        domain: P.ConfigPublic.VerticalizationCookieDomain
                    }), k({
                        userVertical: U.v.GeneralUser,
                        userEngagement: l
                    })))
                }, [t, l]), (0, s.useEffect)(() => {
                    a && console.error(`Unable to update user vertical: ${r}`)
                }, [a, r]), null
            };
            var F = a(20019),
                V = a(36256);
            let q = () => null,
                D = ({
                    gitInfo: e,
                    children: t,
                    uvert: a,
                    countryCode: x,
                    featureFlags: C,
                    tpid: N,
                    abTests: k
                }) => {
                    let P, L, [T] = (0, s.useState)(() => new i.E(p.K));
                    return P = (0, f.usePathname)(), L = (0, y.o)(e => e.incrementPagesTraversedByUser), (0, s.useEffect)(() => {
                        L()
                    }, [P]), (0, j.p)(), (0, s.useEffect)(() => {
                        window.localStorage.removeItem("elyGtmUserSession"), window.localStorage.removeItem("recentlyViewed"), (0, o.s)()
                    }, []), (0, r.jsx)(d.A, {
                        children: (0, r.jsxs)(n.Ht, {
                            client: T,
                            children: [(0, r.jsxs)(v.y, {
                                countryCode: x,
                                children: [(0, r.jsx)(_, {
                                    countryCode: x
                                }), (0, r.jsx)(F.O, {
                                    uvert: a,
                                    children: (0, r.jsx)(l.td, {
                                        value: k,
                                        children: (0, r.jsx)(E.OJ, {
                                            children: (0, r.jsx)(m.J, {
                                                children: (0, r.jsxs)(g.j$, {
                                                    value: C,
                                                    children: [(0, r.jsx)(w.c, {}), (0, r.jsx)(I.H, {}), (0, r.jsx)(z, {}), (0, r.jsx)(b.A, {
                                                        countryCode: x
                                                    }), (0, r.jsxs)(V.Uc, {
                                                        children: [(0, r.jsx)(u.E, {}), (0, r.jsx)(c.s, {}), (0, r.jsx)(h.i, {
                                                            children: t
                                                        })]
                                                    })]
                                                })
                                            })
                                        })
                                    })
                                })]
                            }), (0, r.jsx)(q, {
                                initialIsOpen: !1
                            }), e && (0, r.jsx)(S.DynamicGitInfo, {
                                gitInfo: e,
                                tpid: N ? ? null
                            })]
                        })
                    })
                }
        },
        78970: (e, t, a) => {
            "use strict";
            a.d(t, {
                I: () => i,
                N: () => s
            });
            var r = a(22884);
            let s = ({
                    formType: e
                }) => {
                    (0, r.u)({
                        event: "newsletter_signup",
                        newsletter_form_type: e
                    })
                },
                i = e => {
                    (0, r.u)({
                        event: "newsletter_form_view",
                        newsletter_form_type: e
                    })
                }
        },
        81231: (e, t, a) => {
            "use strict";
            a.d(t, {
                h: () => l
            });
            var r = a(37876),
                s = a(14232),
                i = a(71186),
                n = a(36256);
            let l = ({
                className: e,
                handleAfterAddToCart: t,
                isDisabled: a,
                items: l,
                label: o,
                size: c,
                testId: d,
                variant: u
            }) => {
                let [p, m] = (0, s.useState)(!1), {
                    mutate: g,
                    isPending: h
                } = (0, i.Q)({
                    onSuccess: async () => {
                        t ? .()
                    },
                    onMutate: () => {
                        m(!0)
                    },
                    onSettled() {
                        setTimeout(() => {
                            m(!1)
                        }, 1e3)
                    }
                });
                return (0, r.jsx)(n.$n, {
                    className: e,
                    "data-testid": d,
                    disabled: a,
                    loading: h || p,
                    onClick: () => g(l),
                    size: c,
                    variant: u,
                    children: o ? ? "Add to cart"
                })
            }
        },
        81703: e => {
            e.exports = {
                progressContainer: "ProgressBar_progressContainer__umGPK",
                progressBar: "ProgressBar_progressBar__A8c90",
                progressFill: "ProgressBar_progressFill__5bb32"
            }
        },
        85222: e => {
            e.exports = {
                container: "InspirationVideo_container__oghpj",
                item: "InspirationVideo_item__v_6xR",
                image: "InspirationVideo_image__5ThHV",
                imageVideoActive: "InspirationVideo_imageVideoActive__SgCso",
                playIcon: "InspirationVideo_playIcon__o2zIw"
            }
        },
        85314: (e, t, a) => {
            "use strict";
            a.d(t, {
                z: () => m
            });
            var r = a(37876),
                s = a(14232),
                i = a(68873),
                n = a(30983),
                l = a(39313),
                o = a(30305),
                c = a(10769),
                d = a(36256),
                u = a(14619);
            let p = [{
                    title: "Damage-resistant metal print",
                    videoUrl: "video.displate.com/metal_5b9cb00753.mp4",
                    poster: "/images/usp/usp-poster-1.jpg"
                }, {
                    title: "Tool-free, magnet mounting included",
                    videoUrl: "video.displate.com/mounting_3176f364dc.mp4",
                    poster: "/images/usp/usp-poster-2.jpg"
                }, {
                    title: "Gift-ready packaging",
                    videoUrl: "video.displate.com/gift_ready_ca0f5ea56d.mp4",
                    poster: "/images/usp/usp-poster-3.jpg"
                }],
                m = ({
                    bottomSlot: e,
                    onViewportEnter: t
                } = {}) => {
                    let a = (0, s.useRef)([]),
                        m = (0, s.useRef)(null),
                        g = (0, s.useRef)(null),
                        {
                            isMobile: h
                        } = (0, o.Q)(),
                        x = async e => {
                            let t = e + 1,
                                r = t >= p.length ? 0 : t;
                            if (await a.current[r] ? .play(), h && g.current && a.current[r]) {
                                let e = g.current,
                                    t = a.current[r],
                                    s = e.getBoundingClientRect(),
                                    i = t.getBoundingClientRect(),
                                    n = e.scrollLeft + (i.left - s.left) - 16;
                                e.scrollTo({
                                    left: n,
                                    behavior: "smooth"
                                })
                            }
                        };
                    return (0, l.P)(m, {
                        once: !0,
                        delay: 0,
                        callback: async () => {
                            await a.current[0] ? .play(), await t ? .()
                        }
                    }), (0, l.P)(m, {
                        once: !0,
                        delay: 1e3,
                        threshold: .5,
                        callback: () => {
                            (0, i.Z)({
                                elementId: "instruction_video_section",
                                elementVariant: "none"
                            })
                        }
                    }), (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("div", {
                            className: (0, u.cn)("relative", "bg-[linear-gradient(-79.96deg,rgba(244,41,255,1)_5.29%,rgba(239,22,131,1)_20.91%,rgba(18,18,18,1)_36.54%)]", "py-10", "text-text-inverse", "lg:py-12"),
                            "data-testid": "why-displate-section-wrapper",
                            ref: m,
                            children: (0, r.jsx)(d.mc, {
                                asChild: !0,
                                children: (0, r.jsx)(d.xA, {
                                    children: (0, r.jsxs)("div", {
                                        className: (0, u.cn)("col-span-4 md:col-span-8 lg:col-span-12", "flex flex-col gap-6", "lg:flex-row lg:items-center lg:gap-10 lg:py-12"),
                                        children: [(0, r.jsx)("h2", {
                                            className: (0, u.cn)("text-center text-display-sm md:text-display-md font-display uppercase", "lg:w-[200px] lg:shrink-0 lg:px-0 lg:text-left", "xl:w-[345px]"),
                                            children: "Why you need metal art from Displate?"
                                        }), (0, r.jsx)("div", {
                                            className: (0, u.cn)("grid grid-cols-1 gap-4 overflow-x-auto ", "md:grid-cols-[repeat(3,1fr)] ", "lg:min-w-0 lg:flex-1 "),
                                            ref: g,
                                            children: p.map(({
                                                title: e,
                                                videoUrl: t,
                                                poster: s
                                            }, i) => (0, r.jsxs)("div", {
                                                className: (0, u.cn)("relative w-full overflow-hidden rounded-xl", "md:w-[328px]", "lg:w-full"),
                                                "data-testid": "why-displate-video-box",
                                                children: [(0, r.jsx)(n.A, {
                                                    className: "block w-full lg:w-full lg:object-cover",
                                                    controls: !1,
                                                    muted: !0,
                                                    onEnded: () => x(i),
                                                    poster: (0, c.v9)({
                                                        assetPath: s,
                                                        speedsize: {
                                                            width: 768
                                                        }
                                                    }).src,
                                                    preload: "metadata",
                                                    ref: e => {
                                                        e && (a.current[i] = e)
                                                    },
                                                    src: t
                                                }, e), (0, r.jsx)("div", {
                                                    className: "absolute bottom-0 w-full rounded-b-xl bg-neutral-800/70 p-2 text-center backdrop-blur-[2px]",
                                                    children: (0, r.jsx)("p", {
                                                        className: (0, u.cn)("text-heading-subtitle", "lg:mx-auto lg:max-w-[140px]", "xl:max-w-full"),
                                                        children: e
                                                    })
                                                })]
                                            }, e))
                                        })]
                                    })
                                })
                            })
                        }), e]
                    })
                }
        },
        86027: e => {
            e.exports = {
                item: "Chip_item__ky_F8",
                input: "Chip_input__6P23d",
                selected: "Chip_selected__ox3Os",
                icon: "Chip_icon__8BG0e",
                defaultColor: "Chip_defaultColor__cuAvg"
            }
        },
        87911: (e, t, a) => {
            "use strict";
            a.d(t, {
                u: () => o
            });
            var r = a(37876),
                s = a(69241),
                i = a(10302),
                n = a(18397),
                l = a.n(n);
            let o = ({
                isVisible: e,
                onClick: t,
                className: a,
                hasTransition: n = !0
            }) => (0, r.jsx)("div", {
                className: (0, s.A)(l().iconWrapper, {
                    [l().iconHidden]: !e,
                    [l().iconTransition]: n
                }),
                "data-testid": "play-icon",
                children: (0, r.jsx)(i.A, {
                    className: (0, s.A)(l().icon, a),
                    onClick: t
                })
            })
        },
        92858: e => {
            e.exports = {
                image: "InspirationImage_image__UHUyp"
            }
        },
        94392: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => s
            });
            var r = a(14232);
            let s = r.forwardRef(function({
                title: e,
                titleId: t,
                ...a
            }, s) {
                return r.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    "data-slot": "icon",
                    ref: s,
                    "aria-labelledby": t
                }, a), e ? r.createElement("title", {
                    id: t
                }, e) : null, r.createElement("path", {
                    fillRule: "evenodd",
                    d: "M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z",
                    clipRule: "evenodd"
                }))
            })
        },
        95200: e => {
            e.exports = {
                container: "ListingPage_container__SP_Ua",
                masonryGridSet: "ListingPage_masonryGridSet__nhWNJ",
                masonryGridSet2x2: "ListingPage_masonryGridSet2x2__Kttdb",
                buttonsWrapper: "ListingPage_buttonsWrapper__Qhbhk",
                buttonsSet1x2: "ListingPage_buttonsSet1x2___QUkM",
                buySetButton: "ListingPage_buySetButton__TX5cJ",
                buyButtonSet1x2: "ListingPage_buyButtonSet1x2__Mbp2i",
                redirectButton: "ListingPage_redirectButton__94Q9I",
                section: "ListingPage_section__baAqv",
                seoTagsSection: "ListingPage_seoTagsSection__2_p7M",
                inspTagSection: "ListingPage_inspTagSection__BkrFO",
                uspSection: "ListingPage_uspSection__8CfLr"
            }
        },
        96444: e => {
            e.exports = {
                container: "InspirationPopup_container__GmHd4",
                artworksContainer: "InspirationPopup_artworksContainer__x4pgf",
                popup: "InspirationPopup_popup__sURDX",
                image: "InspirationPopup_image__1S1QE",
                videoContainer: "InspirationPopup_videoContainer__fRd_l",
                video: "InspirationPopup_video__ZFhHU",
                videoControls: "InspirationPopup_videoControls__nF6Fc",
                icon: "InspirationPopup_icon__XI8av",
                artworkItem: "InspirationPopup_artworkItem__6jF27",
                artworkImage: "InspirationPopup_artworkImage__TFx_W",
                artworkInfo: "InspirationPopup_artworkInfo__azNS1",
                avatar: "InspirationPopup_avatar__TNq84",
                badge: "InspirationPopup_badge__XgbWy",
                badgeIcon: "InspirationPopup_badgeIcon__KfbfD",
                description: "InspirationPopup_description___iMAj",
                author: "InspirationPopup_author__E7SoX",
                artworksCount: "InspirationPopup_artworksCount__z7SXI"
            }
        }
    },
    e => {
        e.O(0, [4024, 2183, 1353, 1671, 5706, 9658, 3915, 5657, 3851, 126, 8308, 636, 6593, 8792], () => e(e.s = 76962)), _N_E = e.O()
    }
]);
//#