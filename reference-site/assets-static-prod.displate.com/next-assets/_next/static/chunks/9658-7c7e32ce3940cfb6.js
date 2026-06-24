"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9658], {
        1025: (e, t, a) => {
            a.d(t, {
                Z: () => s,
                s: () => l
            });
            var r = a(37984),
                i = a(82378);
            let s = e => (0, i.ZW)({ ...e,
                    path: "/posters/trending",
                    target: "elysium"
                }),
                l = {
                    readableName: "Browse Recommended Posters Page",
                    analyticsGaName: "posters",
                    analyticsAthenaName: "posters",
                    pagePathnames: ["/posters/trending"],
                    defaultMeta: {
                        title: r.p3,
                        description: "Posters, Prints & Wall Art - premium quality prints on metal for All Posters lovers. Easy magnet mounting, worldwide shipping. Buy Metal Posters, Prints & Wall Art at DISPLATE.",
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 0
                }
        },
        2661: (e, t, a) => {
            a.d(t, {
                L: () => d,
                e: () => c
            });
            var r = a(14232),
                i = a(98461),
                s = a(84810),
                l = a(16909),
                o = a(35891);
            let n = ({
                    event: e,
                    displateId: t,
                    displateUserUuid: a,
                    msgCount: r
                }) => {
                    var o;
                    let n, c, d, u, p;
                    o = { ...e,
                        currentLocation: window.location.href,
                        referer: document.referrer,
                        displateId: `${t}`,
                        displateUserUuid: a
                    }, n = JSON.stringify({ ...o.eventParams,
                        displateUser: o.displateId
                    }), c = sessionStorage.getItem("_ath_pe") || void 0, (d = new URLSearchParams).set("v", "2.1.0"), d.set("e", (e => {
                        let t = (0, i.R)(),
                            a = `${t}_${Date.now()}_${e}`;
                        try {
                            sessionStorage.setItem("_ath_pe", a)
                        } catch (e) {
                            (0, l.vV)(JSON.stringify(e))
                        }
                        return a
                    })(r)), c && d.set("pe", c), d.set("et", o.eventType), d.set("en", o.eventName), d.set("ep", btoa(unescape(encodeURIComponent(n)))), o.context && d.set("ct", btoa(JSON.stringify(o.context))), d.set("dl", o.currentLocation), d.set("rl", o.referer), d.set("ts", `${Date.now()}`), u = new Image, p = () => {
                        u.onload = null, u.onerror = null, u.src = ""
                    }, u.onload = p, u.onerror = e => {
                        (0, l.vV)(`Athena mati.gif error: ${JSON.stringify(e)}`), p()
                    }, u.src = `${s.ConfigPublic.AthenaApi}/c/mati.gif?${d.toString()}`
                },
                c = async e => {
                    if ("local" === s.ConfigPublic.BuildVersion) return void console.warn("Athena impression tracking is disabled in local environment");
                    let t = (0, i.R)(),
                        a = e.map(({
                            message: e,
                            metadata: a
                        }) => ({
                            id: `${e.index+1}_${e.externalId}_${t}`,
                            itemId: e.internalId.toString(),
                            itemCollectionId: e.externalId.toString(),
                            user: t,
                            time: Date.now(),
                            context: {
                                href: window.location.href,
                                itemListId: `PT:${a.athenaPageName}|LT:${a.listingType}|LF:${a.listingFunction}`,
                                position: e.index + 1
                            }
                        }));
                    try {
                        await fetch(`${s.ConfigPublic.AthenaApi}/i/imp`, {
                            method: "POST",
                            credentials: "include",
                            body: JSON.stringify(a),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })
                    } catch (t) {
                        let e = t instanceof Error ? `${t.name}, ${t.message}` : "";
                        console.error(`Athena Impression send error! Error: ${e}`)
                    }
                },
                d = () => {
                    let {
                        fetchedUserInfo: e,
                        userInfo: t,
                        error: a
                    } = (0, r.useContext)(o.cy), [i, s] = (0, r.useState)(0), [l, c] = (0, r.useState)([]);
                    return (0, r.useEffect)(() => {
                        if (0 !== l.length && (e || a)) {
                            let e = (({
                                queue: e,
                                displateUserId: t,
                                displateUserUuid: a,
                                msgCount: r
                            }) => {
                                let i = r;
                                for (let r = 0; r < e.length; r++) n({
                                    event: e[r],
                                    displateId: t,
                                    displateUserUuid: a,
                                    msgCount: i
                                }), i++;
                                return i
                            })({
                                queue: l,
                                displateUserId: t ? .identity ? .deprecatedId || "",
                                displateUserUuid: t ? .identity ? .identity || "",
                                msgCount: i
                            });
                            c([]), e !== i && s(e)
                        }
                    }, [e, t, a, i, l]), {
                        pushEvent: a => {
                            e ? (n({
                                event: a,
                                displateId: t ? .identity ? .deprecatedId ? ? null,
                                displateUserUuid: t ? .identity ? .identity ? ? null,
                                msgCount: i
                            }), s(i + 1)) : c(e => [...e, a])
                        },
                        eventQueue: l,
                        msgCount: i
                    }
                }
        },
        3180: (e, t, a) => {
            a.d(t, {
                d: () => l,
                x: () => s
            });
            var r = a(37984),
                i = a(82378);
            let s = e => (0, i.ZW)({ ...e,
                    path: "/bundles",
                    target: "elysium"
                }),
                l = {
                    readableName: "Bundles Listing Page",
                    analyticsGaName: "bundles_listing",
                    analyticsAthenaName: "bundles_listing",
                    pagePathnames: ["/bundles"],
                    defaultMeta: {
                        title: "Bundles | Displate",
                        description: "Discover curated bundles on Displate.",
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 1
                }
        },
        4186: (e, t, a) => {
            a.d(t, {
                J: () => l,
                f: () => s
            });
            var r = a(37984),
                i = a(82378);
            let s = e => (0, i.ZW)({ ...e,
                    path: "/posters/for-you",
                    target: "elysium"
                }),
                l = {
                    readableName: "Browse Recommended For You Posters Page",
                    analyticsGaName: "posters",
                    analyticsAthenaName: "posters",
                    pagePathnames: ["/posters/for-you"],
                    defaultMeta: {
                        title: r.p3,
                        description: r.h1,
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 0
                }
        },
        4392: (e, t, a) => {
            a.d(t, {
                P: () => l,
                t: () => s
            });
            var r = a(37984),
                i = a(82378);
            let s = e => (0, i.ZW)({ ...e,
                    path: "/settings",
                    target: "elysium"
                }),
                l = {
                    readableName: "Settings Page",
                    analyticsGaName: "settings",
                    analyticsAthenaName: "settings",
                    pagePathnames: ["/settings"],
                    defaultMeta: {
                        title: "Account Settings | Displate",
                        description: "Manage your account settings.",
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 0
                }
        },
        5846: (e, t, a) => {
            a.d(t, {
                g: () => l,
                m: () => s
            });
            var r = a(37984),
                i = a(82378);
            let s = e => (0, i.ZW)({ ...e,
                    path: "/limited-edition",
                    target: "elysium"
                }),
                l = {
                    readableName: "Limited Edition Page",
                    analyticsGaName: "limited-edition",
                    analyticsAthenaName: "limited-edition",
                    pagePathnames: ["/limited-edition"],
                    defaultMeta: {
                        title: "Limited Editions Art | premium metal posters | Displate",
                        description: r.h1,
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 0
                }
        },
        6002: (e, t, a) => {
            a.d(t, {
                Q: () => l,
                i: () => s
            });
            var r = a(37984),
                i = a(82378);
            let s = {
                    readableName: "Pay Long Transaction",
                    analyticsGaName: "Pay Long Transaction",
                    analyticsAthenaName: "Pay Long Transaction",
                    pagePathnames: ["/pay-long-transaction"],
                    cacheTtlMinutes: 0,
                    defaultMeta: {
                        title: "Processing Your Payment | Displate",
                        description: "Your transaction is being processed. You will receive an email confirmation shortly.",
                        coverImage: r.Ie
                    }
                },
                l = (e, t) => (0, i.ZW)({ ...t,
                    path: "/pay-long-transaction",
                    query: {
                        orderId: String(e)
                    },
                    target: "elysium"
                })
        },
        7234: (e, t, a) => {
            a.d(t, {
                Bq: () => d,
                We: () => m,
                ak: () => g,
                cT: () => p,
                kl: () => u,
                pU: () => c,
                rm: () => n
            });
            var r = a(56323),
                i = a(37984),
                s = a(76629),
                l = a(82378),
                o = a(57151);
            let n = "/sr-artworks/",
                c = "/search",
                d = [...l.oQ, "q", "sort", "categories", "colors", "orientation", "art_style", "collections", "productType", "isArtistSuggestion"],
                u = e => {
                    let {
                        query: t
                    } = e;
                    return void 0 !== t && void 0 !== t.q
                },
                p = e => {
                    let t = e.query ? .isArtistSuggestion === "true",
                        a = r.Q.getState().originalArtistsFilter,
                        i = { ...e.query,
                            ...a && !t ? {
                                collections: o.C
                            } : {}
                        };
                    return (0, l.ZW)({
                        path: s.Eo,
                        target: "elysium",
                        ...e,
                        query: i,
                        scrollToTop: !1
                    })
                },
                m = () => p({
                    query: {
                        q: "bestselling posters"
                    }
                }),
                g = {
                    readableName: "Search Results Page",
                    analyticsGaName: "search",
                    analyticsAthenaName: "search",
                    pagePathnames: [c, `${c}/[phrase]`, `${n}[phrase]`],
                    queryParamKey: "q",
                    defaultMeta: {
                        title: i.p3,
                        description: "Browse amazing posters designed by thousands of independent artists. Printed on metal. Shipped ready to hang and rock your walls.",
                        coverImage: i.Ie
                    },
                    cacheTtlMinutes: 1,
                    forgetScrollPosition: !1
                }
        },
        8568: (e, t, a) => {
            a.d(t, {
                $: () => s,
                r: () => l
            });
            var r = a(37984),
                i = a(82378);
            let s = e => (0, i.ZW)({ ...e,
                    path: "/custom-displate/uploader",
                    target: "elysium"
                }),
                l = {
                    readableName: "Custom Displate Uploader Page",
                    analyticsGaName: "custom-displate-uploader",
                    analyticsAthenaName: "custom-displate-uploader",
                    pagePathnames: ["/custom-displate/uploader"],
                    defaultMeta: {
                        title: "Custom Displate Uploader | Displate",
                        description: "Custom Displate Uploader Page | Displate",
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 0
                }
        },
        9257: (e, t, a) => {
            a.d(t, {
                F: () => s,
                p: () => l
            });
            var r = a(82378),
                i = a(10769);
            let s = e => (0, r.ZW)({ ...e,
                    path: "/following",
                    target: "elysium"
                }),
                l = {
                    readableName: "Following",
                    analyticsGaName: "following",
                    analyticsAthenaName: "following",
                    pagePathnames: ["/following"],
                    defaultMeta: {
                        title: "Following | Displate",
                        description: "Followed artists and collections on Displate.",
                        coverImage: (0, i.v9)({
                            assetPath: "/images/following/og_image.jpg"
                        }).src
                    },
                    cacheTtlMinutes: 0
                }
        },
        9334: (e, t, a) => {
            a.d(t, {
                A: () => s,
                S: () => l
            });
            var r = a(37984),
                i = a(82378);
            let s = e => (0, i.ZW)({ ...e,
                    path: "/open-shop",
                    target: "elysium"
                }),
                l = {
                    readableName: "Open Shop Page",
                    analyticsGaName: "open-shop",
                    analyticsAthenaName: "open-shop",
                    pagePathnames: ["/open-shop"],
                    defaultMeta: {
                        title: "Sell your art | Displate - metal posters",
                        description: r.h1,
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 0
                }
        },
        10698: (e, t, a) => {
            a.d(t, {
                C: () => s
            });
            var r = a(14232),
                i = a(67385);
            let s = () => {
                let e = (0, r.useContext)(i.n);
                if (!e) throw Error("useCountryCodeContext has to be used within <CountryCodeContext.Provider>");
                return e
            }
        },
        12502: (e, t, a) => {
            a.d(t, {
                MR: () => l,
                eA: () => o,
                jC: () => s
            });
            var r = a(37984),
                i = a(82378);
            let s = e => {
                    let {
                        bundleId: t
                    } = e;
                    return "string" == typeof t
                },
                l = e => (0, i.ZW)({
                    path: `/bundle/${e.bundleId}`,
                    target: "elysium",
                    ...e
                }),
                o = {
                    readableName: "Bundle Page",
                    analyticsGaName: "bundle",
                    analyticsAthenaName: "bundle",
                    pagePathnames: ["/bundle/[bundleId]"],
                    defaultMeta: {
                        title: r.p3,
                        description: "",
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 1,
                    hideSearchBarOnMobile: !0
                }
        },
        13341: (e, t, a) => {
            a.d(t, {
                L: () => n,
                _: () => c
            });
            var r = a(14232),
                i = a(74359),
                s = a(16903),
                l = a(35891),
                o = a(87050);
            let n = ["cart"],
                c = e => {
                    let {
                        fetchedUserInfo: t
                    } = (0, r.useContext)(l.cy);
                    return (0, i.I)({
                        queryKey: n,
                        queryFn: () => o.$y.getCurrentCartV9((0, s.j)()),
                        enabled: t,
                        select: e ? .select,
                        refetchOnMount: e ? .refetchOnMount
                    })
                }
        },
        13944: (e, t, a) => {
            a.d(t, {
                FW: () => l,
                uR: () => s,
                vH: () => o
            });
            var r = a(37984),
                i = a(82378);
            let s = 25,
                l = e => (0, i.ZW)({ ...e,
                    path: "/inspirations",
                    target: "elysium"
                }),
                o = {
                    readableName: "Inspirations Page",
                    analyticsGaName: "inspirations",
                    analyticsAthenaName: "inspirations",
                    pagePathnames: ["/inspirations"],
                    defaultMeta: {
                        title: "Inspirations - Displate | See how others display their metal posters",
                        description: "Discover amazing inspiration photos from our community. See how Displates look in real spaces and get ideas for your own wall art display.",
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 60
                }
        },
        15112: (e, t, a) => {
            a.d(t, {
                Qo: () => s,
                ZP: () => l,
                tn: () => o
            });
            var r = a(37984),
                i = a(82378);
            let s = e => (0, i.ZW)({ ...e,
                    path: "/collectors/sets/wishlist",
                    target: "elysium"
                }),
                l = {
                    readableName: "Collector Sets Wishlist Page",
                    analyticsGaName: "collectors-sets-wishlist",
                    analyticsAthenaName: "collectors-sets-wishlist",
                    pagePathnames: ["/collectors/sets/wishlist"],
                    defaultMeta: {
                        title: "Collector Wishlist Sets | Displate",
                        description: "Collector Wishlist Sets Page | Displate",
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 0
                },
                o = "00000000-0000-0000-0000-000000000001"
        },
        16160: (e, t, a) => {
            a.d(t, {
                L: () => l,
                x: () => s
            });
            var r = a(37984),
                i = a(82378);
            let s = e => (0, i.ZW)({ ...e,
                    path: "/about-contact",
                    target: "elysium"
                }),
                l = {
                    readableName: "About Contact Page",
                    analyticsGaName: "about-contact",
                    analyticsAthenaName: "about-contact",
                    pagePathnames: ["/about-contact"],
                    defaultMeta: {
                        title: "Contact Us | Displate",
                        description: "Got any questions regarding Displate? Contact us now!",
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 1
                }
        },
        16278: (e, t, a) => {
            a.d(t, {
                Ac: () => o,
                IS: () => l,
                iy: () => n,
                vc: () => s
            });
            var r = a(37984),
                i = a(82378);
            let s = (e, t) => (0, i.ZW)({ ...t,
                    path: `/collectors/${e}/profile`,
                    target: "elysium"
                }),
                l = 108,
                o = [...i.oQ],
                n = {
                    readableName: "Collector Profile Page",
                    analyticsGaName: "collectors-profile",
                    analyticsAthenaName: "collectors-profile",
                    pagePathnames: ["/collectors/[username]/profile"],
                    defaultMeta: {
                        title: "Collector Profile | Displate",
                        description: "Collector Profile Page | Displate",
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 0
                }
        },
        19947: (e, t, a) => {
            a.d(t, {
                A: () => s,
                y: () => l
            });
            var r = a(37984),
                i = a(82378);
            let s = (e, t) => {
                    let a = t ? .query;
                    return e && (a = t ? .query ? { ...t.query,
                        consent: "1"
                    } : {
                        consent: "1"
                    }), (0, i.ZW)({ ...t,
                        path: "/checkout",
                        target: "external",
                        query: a
                    })
                },
                l = {
                    readableName: "Checkout Page",
                    analyticsGaName: "checkout",
                    analyticsAthenaName: "checkout",
                    pagePathnames: ["/checkout"],
                    defaultMeta: {
                        title: "Checkout | Displate",
                        description: "Complete your Displate purchase",
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 0
                }
        },
        20239: (e, t, a) => {
            a.d(t, {
                O: () => r
            });
            let r = {
                readableName: "Error Page",
                analyticsGaName: "/500",
                analyticsAthenaName: "/500",
                pagePathnames: ["/_error", "/500"],
                defaultMeta: {
                    title: "Error Page | Displate",
                    description: "Error page.",
                    coverImage: a(37984).Ie
                },
                cacheTtlMinutes: 0
            }
        },
        21306: (e, t, a) => {
            a.d(t, {
                E: () => l,
                q: () => s
            });
            var r = a(37984),
                i = a(82378);
            let s = e => (0, i.ZW)({ ...e,
                    path: "/about-mounting",
                    target: "elysium"
                }),
                l = {
                    readableName: "About Mounting Page",
                    analyticsGaName: "about-mounting",
                    analyticsAthenaName: "about-mounting",
                    pagePathnames: ["/about-mounting"],
                    defaultMeta: {
                        title: "Magnet Mounting | Displate",
                        description: "Learn how to hang a Displate on your wall | Safe Wall Magnet-Mounting System",
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 1
                }
        },
        21667: (e, t, a) => {
            a.d(t, {
                A: () => i
            });
            var r = a(37876);
            let i = e => (0, r.jsx)("svg", {
                width: "1em",
                height: "1em",
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: (0, r.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M8.78559 1.51914C9.12564 1.68917 9.40137 1.9649 9.5714 2.30495L14.4808 12.1237C14.9147 12.9916 14.5629 14.0471 13.695 14.4811C13.451 14.6031 13.1819 14.6666 12.9091 14.6666H3.09043C2.12 14.6666 1.33331 13.8799 1.33331 12.9095C1.33331 12.6367 1.39682 12.3677 1.51882 12.1237L6.42818 2.30495C6.86216 1.43697 7.91762 1.08515 8.78559 1.51914ZM7.99998 4.74992C8.41419 4.74992 8.74998 5.0857 8.74998 5.49992V9.24992C8.74998 9.66413 8.41419 9.99992 7.99998 9.99992C7.58577 9.99992 7.24998 9.66413 7.24998 9.24992V5.49992C7.24998 5.08571 7.58577 4.74992 7.99998 4.74992ZM7.99998 12.5833C8.34516 12.5833 8.62498 12.3034 8.62498 11.9583C8.62498 11.6131 8.34516 11.3333 7.99998 11.3333C7.6548 11.3333 7.37498 11.6131 7.37498 11.9583C7.37498 12.3034 7.6548 12.5833 7.99998 12.5833Z",
                    fill: "#FFA035"
                })
            })
        },
        21984: (e, t, a) => {
            a.d(t, {
                l: () => i
            });
            var r, i = ((r = {}).SIZE12 = "12", r.SIZE16 = "16", r.SIZE20 = "20", r.SIZE24 = "24", r.SIZE30 = "30", r.SIZE32 = "32", r.SIZE48 = "48", r)
        },
        23278: (e, t, a) => {
            a.d(t, {
                a: () => o,
                w: () => l
            });
            var r = a(37984),
                i = a(82378);
            let s = "/join-displate-club",
                l = {
                    readableName: "Join Displate Club Page",
                    analyticsGaName: "joindc",
                    analyticsAthenaName: "joindc",
                    pagePathnames: [s],
                    defaultMeta: {
                        title: "Join Displate Club | Displate",
                        description: "Unlock your all-access pass to Displate. Join now for free shipping, custom Displates, member-only discounts, vouchers – and more perks to take your collection to the next level!",
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 1
                },
                o = e => (0, i.ZW)({ ...e,
                    path: s,
                    target: "elysium"
                })
        },
        24466: (e, t, a) => {
            a.d(t, {
                NS: () => l,
                jF: () => o
            });
            var r = a(37984),
                i = a(82378);
            let s = e => e.endsWith(".html") ? e.slice(0, -5) : e,
                l = e => {
                    let t = (e => {
                            if (!e) return "";
                            let t = /[^a-zA-Z0-9-]/g;
                            return "string" == typeof e ? s(e).replace(t, "") : e.map(e => s(e)).map(e => e.replace(t, "")).filter(e => e.length > 0).join("/") ? ? ""
                        })(e ? .query ? .path),
                        {
                            path: a,
                            ...r
                        } = e ? .query || {};
                    return (0, i.ZW)({ ...e,
                        query: r,
                        path: `/sitemap${t?`/${t}`:""}`,
                        target: "elysium"
                    })
                },
                o = {
                    readableName: "Sitemap",
                    analyticsGaName: "sitemap",
                    analyticsAthenaName: "sitemap",
                    pagePathnames: ["/sitemap", "/sitemap/[category]", "/sitemap/[...path]"],
                    defaultMeta: {
                        title: r.p3,
                        description: r.h1,
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 5
                }
        },
        27102: (e, t, a) => {
            a.d(t, {
                i: () => s,
                m: () => l
            });
            var r = a(37984),
                i = a(82378);
            let s = e => (0, i.ZW)({ ...e,
                    path: "/about-preparation",
                    target: "elysium"
                }),
                l = {
                    readableName: "About Preparation Page",
                    analyticsGaName: "about-preparation",
                    analyticsAthenaName: "about-preparation",
                    pagePathnames: ["/about-preparation"],
                    defaultMeta: {
                        title: "Upload preparation | HD print quality",
                        description: "Displate is a community built upon respect for artists and their intellectual property rights as well as the intellectual property rights of third parties.",
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 1
                }
        },
        28030: (e, t, a) => {
            a.d(t, {
                A: () => l,
                t: () => s
            });
            var r = a(37984),
                i = a(82378);
            let s = (e, t) => (0, i.ZW)({ ...t,
                    path: `/collectors/${e}/sets`,
                    target: "elysium"
                }),
                l = {
                    readableName: "Collector Sets Page",
                    analyticsGaName: "collectors-sets",
                    analyticsAthenaName: "collectors-sets",
                    pagePathnames: ["/collectors/[username]/sets"],
                    defaultMeta: {
                        title: "Collector Sets | Displate",
                        description: "Collector Sets Page | Displate",
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 0
                }
        },
        28879: (e, t, a) => {
            a.d(t, {
                Q: () => l,
                s: () => s
            });
            var r = a(82378),
                i = a(10769);
            let s = e => (0, r.ZW)({ ...e,
                    path: "/lumino",
                    target: "elysium"
                }),
                l = {
                    readableName: "All luminos",
                    analyticsGaName: "all-luminos",
                    analyticsAthenaName: "all-luminos",
                    pagePathnames: ["/lumino"],
                    defaultMeta: {
                        title: "Lumino Posters | Displate",
                        description: "Turn on the magic with Displate Lumino, a limited series of next-gen illuminated art! The most awesome way to light up your walls.",
                        coverImage: (0, i.v9)({
                            assetPath: "/images/lumino/social/social_lumino.webp"
                        }).src
                    },
                    cacheTtlMinutes: 0
                }
        },
        31170: (e, t, a) => {
            a.d(t, {
                $: () => s,
                P: () => l
            });
            var r = a(37984),
                i = a(82378);
            let s = {
                    readableName: "Pay Processing",
                    analyticsGaName: "Pay Processing",
                    analyticsAthenaName: "Pay Processing",
                    pagePathnames: ["/pay-processing/[orderId]"],
                    cacheTtlMinutes: 0,
                    defaultMeta: {
                        title: "Processing Your Payment | Displate",
                        description: "Your payment is being processed. Please wait.",
                        coverImage: r.Ie
                    }
                },
                l = (e, t) => (0, i.ZW)({ ...t,
                    path: `/pay-processing/${e}`,
                    target: "elysium"
                })
        },
        31372: (e, t, a) => {
            a.d(t, {
                F: () => D,
                j: () => W
            });
            var r = a(84810),
                i = a(54111),
                s = a(16909),
                l = a(74753),
                o = a(91680),
                n = a(87014),
                c = a(72678),
                d = a(89646),
                u = a(1025),
                p = a(12502),
                m = a(3180),
                g = a(72758),
                h = a(39806),
                y = a(48062),
                f = a(69894),
                v = a(5846),
                P = a(43614),
                N = a(95374),
                I = a(28879),
                b = a(54810),
                w = a(7234),
                M = a(56650),
                S = a(92582),
                A = a(87050),
                C = a(47765);
            let D = e => {
                    let t = T(e);
                    return null === t ? ((0, s.L1)(void 0, "RouteToDynamicPage").error({
                        err: Error(),
                        pageType: e.pageType
                    }, `Unexpected dynamic page type: ${e.pageType}, params: ${JSON.stringify(e.options)}`), (0, f.P)()) : t
                },
                T = ({
                    pageType: e,
                    options: t
                }) => {
                    switch (e) {
                        case A.R3.LUMINO_LIST:
                            return (0, I.s)(t);
                        case A.R3.REGULAR_PDP:
                            return (0, b.ww)(t) ? (0, b.Vo)(t) : null;
                        case A.R3.COLLECTION_PAGE:
                            return (0, n.Zm)(t) ? (0, n.Eq)(t) : null;
                        case A.R3.LIMITED_EDITION_PDP:
                            return (0, i.SZ)(t) ? (0, P.X)(t) : null;
                        case A.R3.ARTIST_PAGE:
                            return (0, o.i8)(t) ? (0, o.bo)(t) : null;
                        case A.R3.HOMEPAGE:
                            return (0, f.P)(t);
                        case A.R3.SEARCH:
                            return (0, w.kl)(t) ? (0, w.cT)(t) : null;
                        case A.R3.BROWSE_POSTERS_TRENDING:
                            return (0, u.Z)(t);
                        case A.R3.BLOG:
                            return (0, i.B$)(t) ? (0, i.K2)(t) : null;
                        case A.R3.LISTING:
                            return (0, N.J9)(t) ? (0, N.Kz)(t) : null;
                        case A.R3.LANDING_PAGE:
                            return (0, M.xu)(t) ? (0, M.pN)(t) : null;
                        case A.R3.LIMITED_EDITION_LIST:
                            return (0, v.m)(t);
                        case A.R3.GIFT_CARD:
                            return (0, y.u)(t);
                        case A.R3.BRANDS_ALL:
                            return (0, d.Y)(t);
                        case A.R3.BRAND:
                            return (0, c.CI)(t) ? (0, c.xz)(t) : null;
                        case A.R3.ACCESSORIES:
                            return (0, l.W)(t);
                        case A.R3.WHATS_A_DISPLATE:
                            return (0, S.B)(t);
                        case A.R3.COLLECTOR_PROFILE:
                            return (0, g.z)(t);
                        case A.R3.CUSTOM_DISPLATE_PDP:
                            if ((0, h.dp)(t)) {
                                let e = t.id;
                                return (0, h.iM)(e, t)
                            }
                            return null;
                        case A.R3.BUNDLE_LISTING:
                            return (0, m.x)(t);
                        case A.R3.BUNDLE_PDP:
                            return (0, p.jC)(t) ? (0, p.MR)(t) : null;
                        default:
                            return null
                    }
                },
                k = ["https://blog.displate.com"],
                W = (e, t = C.wx) => {
                    let a;
                    if (!e || null == t) return (0, s.vV)("FindRouteByUrl: null url or pageConfigs."), {
                        routeInfo: (0, f.P)(),
                        pageConfig: f.j
                    };
                    let i = e;
                    e.startsWith("/") && (i = r.ConfigPublic.AppUrl + e);
                    try {
                        a = new URL(i)
                    } catch {
                        return (0, s.vV)(`FindRouteByUrl: invalid url "${e}"`), {
                            routeInfo: (0, f.P)(),
                            pageConfig: f.j
                        }
                    }
                    if (k.includes(a.origin)) return {
                        routeInfo: {
                            route: a.toString(),
                            target: "external"
                        }
                    };
                    let l = e.replace(a.origin, "");
                    for (let e of t)
                        if (x(a.pathname, e.pagePathnames)) return {
                            routeInfo: {
                                route: l,
                                target: "elysium"
                            },
                            pageConfig: e
                        };
                    return l.startsWith("/l/") ? {
                        routeInfo: {
                            route: l,
                            target: "external"
                        }
                    } : ((0, s.vV)(`FindRouteByUrl: unrecognized url: ${e}`), {
                        routeInfo: (0, f.P)()
                    })
                },
                x = (e, t) => {
                    let a = e.split("/");
                    for (let e of t) {
                        let t = e.split("/");
                        if (t.length !== a.length && !e.includes("[...")) continue;
                        let r = !0;
                        for (let e = 0; e < t.length; e++) {
                            let i = t[e];
                            if (a.length <= e) {
                                r = !1;
                                break
                            }
                            let s = a[e];
                            if (i.startsWith("[") && i.endsWith("]")) {
                                if (i.includes("...")) {
                                    r = !0;
                                    break
                                }
                                continue
                            }
                            if (i !== s) {
                                r = !1;
                                break
                            }
                        }
                        if (r) return !0
                    }
                    return !1
                }
        },
        32902: (e, t, a) => {
            a.d(t, {
                a: () => l,
                s: () => s
            });
            var r = a(37984),
                i = a(82378);
            let s = e => (0, i.ZW)({ ...e,
                    path: `/collectors/${e.collectorNick}/products/${e.sku}`,
                    target: "elysium"
                }),
                l = {
                    readableName: "Collector Product Page",
                    analyticsGaName: "collector-product",
                    analyticsAthenaName: "collector-product",
                    pagePathnames: ["/collectors/[username]/products/[sku]"],
                    defaultMeta: {
                        title: "Collector Product Page | Displate",
                        description: "Collector Product Page | Displate",
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 0
                }
        },
        33057: (e, t, a) => {
            a.d(t, {
                b: () => l,
                h: () => s
            });
            var r = a(37984),
                i = a(82378);
            let s = e => (0, i.ZW)({ ...e,
                    path: "/about/3d-magnet",
                    target: "elysium"
                }),
                l = {
                    readableName: "3d Magnet Page",
                    analyticsGaName: "3d-magnet",
                    analyticsAthenaName: "3d-magnet",
                    pagePathnames: ["/about/3d-magnet"],
                    defaultMeta: {
                        title: "Displate – metal posters | Change your wall, change your world",
                        description: "Hand-crafted metal posters designed by talented artists. Easy magnet mounting.",
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 1
                }
        },
        33348: (e, t, a) => {
            a.d(t, {
                GB: () => i,
                bf: () => r
            });
            let r = e => "boolean" == typeof e ? e : "string" == typeof e && "true" === e,
                i = e => {
                    if ("number" == typeof e) return e;
                    let t = 0;
                    return ("string" == typeof e && (t = Number(e)), Number.isNaN(t)) ? 0 : t
                }
        },
        34622: (e, t, a) => {
            a.d(t, {
                B: () => s,
                C: () => l
            });
            var r = a(37984),
                i = a(82378);
            let s = e => (0, i.ZW)({ ...e,
                    path: "/collectors/wishlist",
                    target: "elysium"
                }),
                l = {
                    readableName: "Collector Wishlist Page",
                    analyticsGaName: "collectors-wishlist",
                    analyticsAthenaName: "collectors-wishlist",
                    pagePathnames: ["/collectors/wishlist"],
                    defaultMeta: {
                        title: "Collector Wishlist | Displate",
                        description: "Collector Wishlist Page | Displate",
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 0
                }
        },
        35278: (e, t, a) => {
            a.d(t, {
                Y: () => s,
                i: () => l
            });
            var r = a(37984),
                i = a(82378);
            let s = e => (0, i.ZW)({ ...e,
                    path: "/takedown-request",
                    target: "elysium"
                }),
                l = {
                    readableName: "Takedown Request Page",
                    analyticsGaName: "takedown-request",
                    analyticsAthenaName: "takedown-request",
                    pagePathnames: ["/takedown-request"],
                    defaultMeta: {
                        title: r.p3,
                        description: r.h1,
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 0
                }
        },
        36724: (e, t, a) => {
            a.d(t, {
                L: () => s,
                z: () => l
            });
            var r = a(37984),
                i = a(82378);
            let s = e => (0, i.ZW)({ ...e,
                    path: "/about-withdrawal",
                    target: "elysium"
                }),
                l = {
                    readableName: "Right of withdrawal",
                    analyticsGaName: "withdrawal",
                    analyticsAthenaName: "withdrawal",
                    pagePathnames: ["/about-withdrawal"],
                    defaultMeta: {
                        title: "Right of withdrawal | Displate",
                        description: "Exercise your right of withdrawal online. Enter your order ID and email to withdraw from a purchase without leaving the site.",
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 1
                }
        },
        37473: (e, t, a) => {
            a.d(t, {
                ZU: () => r.ZU,
                or: () => s,
                wI: () => i
            });
            var r = a(87050);
            let i = r.p1,
                s = r.t
        },
        38847: (e, t, a) => {
            a.d(t, {
                j$: () => s,
                u: () => l
            });
            var r = a(14232);
            let i = (0, r.createContext)(null),
                s = i.Provider,
                l = e => {
                    let t = (0, r.useContext)(i);
                    return null != t && (t[e] ? ? !1)
                }
        },
        39432: (e, t, a) => {
            a.d(t, {
                Z: () => s,
                h: () => l
            });
            var r = a(37984),
                i = a(82378);
            let s = e => (0, i.ZW)({ ...e,
                    path: "/about-privacy",
                    target: "elysium"
                }),
                l = {
                    readableName: "About Privacy Page",
                    analyticsGaName: "about-privacy",
                    analyticsAthenaName: "about-privacy",
                    pagePathnames: ["/about-privacy"],
                    defaultMeta: {
                        title: "Privacy Policy | Displate",
                        description: r.h1,
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 1
                }
        },
        39446: (e, t, a) => {
            a.d(t, {
                C: () => s,
                U: () => l
            });
            var r = a(37984),
                i = a(82378);
            let s = e => (0, i.ZW)({ ...e,
                    path: "/about-copyright",
                    target: "elysium"
                }),
                l = {
                    readableName: "About Copyright Page",
                    analyticsGaName: "about-copyright",
                    analyticsAthenaName: "about-copyright",
                    pagePathnames: ["/about-copyright"],
                    defaultMeta: {
                        title: "Copyright & Intellectual Property Info | Displate",
                        description: "Displate is a community built upon respect for artists and their intellectual property rights as well as the intellectual property rights of third parties. ",
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 1
                }
        },
        39806: (e, t, a) => {
            a.d(t, {
                aH: () => c,
                dp: () => l,
                g5: () => d,
                iM: () => s
            });
            var r = a(82378),
                i = a(10769);
            let s = (e, t) => (0, r.ZW)({ ...t,
                    path: `/custom-displate${e?`/${e}`:""}`,
                    target: "elysium"
                }),
                l = e => {
                    let {
                        id: t
                    } = e;
                    return void 0 === t || "string" == typeof t
                },
                o = {
                    title: "Custom Metal Prints – Create Your Own Metal Poster | Displate",
                    description: "Custom metal prints that hit different. Turn your best pics, weirdest memes, or original art into personalized posters — no frames, no fade, just you.",
                    coverImage: (0, i.v9)({
                        assetPath: "/images/custom-displate/og_image.jpg"
                    }).src
                },
                n = { ...o,
                    coverImage: (0, i.v9)({
                        assetPath: "/images/custom-displate/campaign/og_image_valentines.jpg"
                    }).src
                },
                c = e => e ? n : o,
                d = {
                    readableName: "Custom Displate Product Page",
                    analyticsGaName: "pdp-custom-displate",
                    analyticsAthenaName: "pdp-custom-displate",
                    pagePathnames: ["/custom-displate", "/custom-displate/[id]"],
                    defaultMeta: o,
                    cacheTtlMinutes: 0
                }
        },
        40034: (e, t, a) => {
            a.d(t, {
                J: () => s,
                a: () => l
            });
            var r = a(37984),
                i = a(82378);
            let s = e => (0, i.ZW)({ ...e,
                    path: "/displate-commitment-to-briber-prevention",
                    target: "elysium"
                }),
                l = {
                    readableName: "Commitment to Bribery Prevention Page",
                    analyticsGaName: "displate-commitment-to-briber-prevention",
                    analyticsAthenaName: "displate-commitment-to-briber-prevention",
                    pagePathnames: ["/displate-commitment-to-briber-prevention"],
                    defaultMeta: {
                        title: "Commitment to bribery prevention | Displate",
                        description: "We want to make you happy, that is why you may return any product within 100 calendar days of delivery.",
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 1
                }
        },
        43614: (e, t, a) => {
            a.d(t, {
                $: () => s,
                X: () => l
            });
            var r = a(37984),
                i = a(82378);
            let s = {
                    readableName: "Limited Edition Product Page",
                    analyticsGaName: "product-le",
                    analyticsAthenaName: "limited-edition-product-page",
                    pagePathnames: ["/limited-edition/displate/[externalId]"],
                    defaultMeta: {
                        title: r.p3,
                        description: "Wall art built to last forever. Official designs from Star Wars™, Marvel, Netflix and 200+ more brands. Hassle-free magnet mounting. 100% made in the EU.",
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 1
                },
                l = e => (0, i.ZW)({
                    path: `/limited-edition/displate/${e.externalId}`,
                    target: "elysium",
                    ...e
                })
        },
        47321: (e, t, a) => {
            a.d(t, {
                td: () => d,
                _g: () => u
            });
            var r = a(37876),
                i = a(14232),
                s = a(29454),
                l = a(82909).hp;
            let o = e => {
                try {
                    if ("function" == typeof window.atob) return window.atob(e);
                    return l.from(e, "base64").toString("utf8")
                } catch {
                    return ""
                }
            };
            var n = a(22884);
            let c = (0, i.createContext)([]),
                d = ({
                    children: e,
                    value: t
                }) => ((0, i.useEffect)(() => {
                    if (!t || 0 === t.length) return;
                    let e = function() {
                        let e = s.A.get("dab_seg");
                        if (!e) return null;
                        try {
                            return function(e) {
                                let [t = "", a = "", r = "0", i = "d", s = "n", l = "", n = ""] = e.split("|");
                                return {
                                    countryCode: t,
                                    regionCode: a,
                                    isBot: "1" === r,
                                    deviceType: "m" === i ? "mobile" : "desktop",
                                    userAgent: o(l),
                                    userType: "n" === s ? "new" : "returning",
                                    referer: o(n)
                                }
                            }(e)
                        } catch {
                            return null
                        }
                    }();
                    t.forEach(t => {
                        (0, n.u)({
                            event: "custom_experience_impression",
                            experience_data: {
                                variant_id: `${t.id}-${t.variantId}`,
                                country_code: e ? .countryCode || "",
                                region_code: e ? .regionCode || "",
                                is_bot: e ? .isBot || !1,
                                device_type: e ? .deviceType || "desktop",
                                user_agent: e ? .userAgent || "",
                                user_type: e ? .userType || "new",
                                referer: e ? .referer || ""
                            }
                        })
                    })
                }, [t]), (0, r.jsx)(c.Provider, {
                    value: t,
                    children: e
                })),
                u = e => {
                    let t = (0, i.useContext)(c);
                    if (!t) return null;
                    let a = t.find(t => t.id === e);
                    if (!a) return null;
                    let r = a.variantId > 1 ? `v${a.variantId-1}` : "control";
                    return {
                        id: a.id,
                        variantId: a.variantId,
                        variantName: r
                    }
                }
        },
        47338: (e, t, a) => {
            a.d(t, {
                i: () => i
            });
            var r = a(37984);
            let i = {
                readableName: "Takedown Request Confirmation Page",
                analyticsGaName: "takedown-request-confirm",
                analyticsAthenaName: "takedown-request-confirm",
                pagePathnames: ["/takedown-request-confirm/[confirmationHash]"],
                defaultMeta: {
                    title: r.p3,
                    description: r.h1,
                    coverImage: r.Ie
                },
                cacheTtlMinutes: 0
            }
        },
        47526: (e, t, a) => {
            a.d(t, {
                U: () => s,
                Y: () => l
            });
            var r = a(37984),
                i = a(82378);
            let s = e => (0, i.ZW)({ ...e,
                    path: "/about-regulations",
                    target: "elysium"
                }),
                l = {
                    readableName: "About Regulations Page",
                    analyticsGaName: "about-regulations",
                    analyticsAthenaName: "about-regulations",
                    pagePathnames: ["/about-regulations"],
                    defaultMeta: {
                        title: "Terms of Use | Displate",
                        description: r.h1,
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 1
                }
        },
        47765: (e, t, a) => {
            a.d(t, {
                aP: () => eD,
                wx: () => eC
            });
            var r = a(89099),
                i = a(16909),
                s = a(33057),
                l = a(57838),
                o = a(20239),
                n = a(16160),
                c = a(39446),
                d = a(64713),
                u = a(21306),
                p = a(27102),
                m = a(39432),
                g = a(47526),
                h = a(84086),
                y = a(82472),
                f = a(60297),
                v = a(76906),
                P = a(74753),
                N = a(91680),
                I = a(54142),
                b = a(87014),
                w = a(64952),
                M = a(67388),
                S = a(72678),
                A = a(89646),
                C = a(4186),
                D = a(1025),
                T = a(51622),
                k = a(12502),
                W = a(3180),
                x = a(71824),
                G = a(19947),
                Z = a(64060),
                _ = a(55796),
                R = a(54473),
                $ = a(32902),
                E = a(72758),
                L = a(16278),
                U = a(59340),
                O = a(15112),
                q = a(28030),
                j = a(88616),
                B = a(91828),
                F = a(34622),
                H = a(40034),
                z = a(39806),
                V = a(8568),
                J = a(91830),
                Q = a(9257),
                Y = a(48062),
                K = a(69894),
                X = a(13944),
                ee = a(23278),
                et = a(5846),
                ea = a(43614),
                er = a(95374),
                ei = a(28879),
                es = a(84558),
                el = a(9334),
                eo = a(88974),
                en = a(70254),
                ec = a(88726),
                ed = a(6002),
                eu = a(31170),
                ep = a(95888),
                em = a(81198),
                eg = a(54810),
                eh = a(7234),
                ey = a(4392),
                ef = a(94386),
                ev = a(24466),
                eP = a(47338),
                eN = a(35278),
                eI = a(95450),
                eb = a(56650),
                ew = a(92582),
                eM = a(91444),
                eS = a(36724);
            let eA = {
                    readableName: "Unknown Page",
                    analyticsGaName: "unknown",
                    analyticsAthenaName: "unknown",
                    pagePathnames: [],
                    defaultMeta: {
                        title: "Unknown Page",
                        description: "",
                        coverImage: ""
                    },
                    cacheTtlMinutes: 0
                },
                eC = [K.j, ei.Q, Q.p, P.i, A.x, l.A, o.O, n.L, f.N, el.S, eh.ak, h.$, d.N, c.U, g.Y, eb.O8, m.h, eg.tk, u.E, et.g, M.d, es.K9, eI.Mh, er.Mi, w.F, p.m, D.s, C.J, S.Lm, Y.U, b.s6, eN.i, v.Z, I.OV, eM.v, ew.q, eS.z, E.O, N.Nv, ee.w, $.a, x.g, G.y, F.C, Z.d, U._, R.j, O.ZP, L.iy, q.A, _.t, j.Ez, B.j2, H.a, V.r, s.b, ea.$, ef.A, y.R, em.k, z.g5, X.vH, ev.jF, k.eA, W.d, J.K, ey.P, eP.i, eo.o, T.t3, eu.$, ec.k, en.m, ed.i, ep.$],
                eD = () => eT((0, r.useRouter)().route),
                eT = e => {
                    let t = eC.find(t => t.pagePathnames.includes(e));
                    return t || ((0, i.L1)().error(`Unknown page: ${e}`), eA)
                }
        },
        48062: (e, t, a) => {
            a.d(t, {
                U: () => l,
                u: () => o
            });
            var r = a(37984),
                i = a(82378);
            let s = "/gift-card",
                l = {
                    readableName: "Gift Card Page",
                    analyticsGaName: "giftcard",
                    analyticsAthenaName: "giftcard",
                    pagePathnames: [s],
                    defaultMeta: {
                        title: "Gift Card | Displate",
                        description: r.h1,
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 1
                },
                o = e => (0, i.ZW)({ ...e,
                    path: s,
                    target: "elysium"
                })
        },
        51622: (e, t, a) => {
            a.d(t, {
                _p: () => o,
                t3: () => n,
                zq: () => l
            });
            var r = a(37984),
                i = a(82378),
                s = a(64713);
            let l = e => (0, i.ZW)({ ...e,
                    path: "/browse-verified-creators",
                    target: "elysium"
                }),
                o = (0, s.F)({
                    hash: "goto-4fdafee3-f0c9-4688-bff1-fc7038153077-b242200a-99f6-44eb-a188-9a2d8827a0a4"
                }),
                n = {
                    readableName: "Browse Verified Creators Page",
                    analyticsGaName: "browse-verified-creators",
                    analyticsAthenaName: "browse-verified-creators",
                    pagePathnames: ["/browse-verified-creators"],
                    defaultMeta: {
                        title: "Browse Verified Creators | Displate",
                        description: "Browse Verified Creators | Safe Wall Magnet-Mounting System",
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 1
                }
        },
        54142: (e, t, a) => {
            a.d(t, {
                AM: () => l,
                OV: () => o,
                aI: () => s
            });
            var r = a(37984),
                i = a(82378);
            let s = [...i.oQ, "view", "tab", "status"],
                l = e => (0, i.ZW)({ ...e,
                    path: "/artist/profile",
                    target: "elysium"
                }),
                o = {
                    readableName: "Artist Profile Page",
                    analyticsGaName: "artist-profile",
                    analyticsAthenaName: "artist-profile",
                    pagePathnames: ["/artist/profile"],
                    defaultMeta: {
                        title: "Artist Profile | Displate",
                        description: "Artist Profile Page | Displate",
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 0
                }
        },
        54473: (e, t, a) => {
            a.d(t, {
                j: () => l,
                k: () => s
            });
            var r = a(37984),
                i = a(82378);
            let s = e => (0, i.ZW)({ ...e,
                    path: "/collectors",
                    target: "elysium"
                }),
                l = {
                    readableName: "Collector List Page",
                    analyticsGaName: "collectors-list",
                    analyticsAthenaName: "collectors-list",
                    pagePathnames: ["/collectors"],
                    defaultMeta: {
                        title: "Collector List | Displate",
                        description: "Collector List Page | Displate",
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 0
                }
        },
        54810: (e, t, a) => {
            a.d(t, {
                Hj: () => d,
                Hu: () => c,
                Q2: () => n,
                Vo: () => m,
                hh: () => p,
                tk: () => g,
                ww: () => u
            });
            var r, i, s = a(37984),
                l = a(37473),
                o = a(82378),
                n = ((r = {}).textra = "textra", r.matte = "matte", r.gloss = "gloss", r),
                c = ((i = {}).M = "m", i.L = "l", i.XL = "xl", i);
            let d = "matte",
                u = e => {
                    let {
                        externalId: t
                    } = e;
                    return void 0 !== t
                },
                p = e => {
                    switch (e) {
                        case "l":
                            return l.or.L;
                        case "xl":
                            return l.or.XL;
                        default:
                            return l.or.M
                    }
                },
                m = e => (0, o.ZW)({
                    path: `/displate/${e.externalId}`,
                    target: "elysium",
                    ...e
                }),
                g = {
                    readableName: "Regular PDP",
                    analyticsGaName: "product",
                    analyticsAthenaName: "artwork",
                    pagePathnames: ["/displate/[externalId]"],
                    defaultMeta: {
                        title: s.p3,
                        description: "",
                        coverImage: s.Ie
                    },
                    cacheTtlMinutes: 1,
                    hideSearchBarOnMobile: !0
                }
        },
        55796: (e, t, a) => {
            a.d(t, {
                U: () => s,
                t: () => l
            });
            var r = a(37984),
                i = a(82378);
            let s = (e, t) => (0, i.ZW)({ ...t,
                    path: `/collectors/${e}/gallery`,
                    target: "elysium"
                }),
                l = {
                    readableName: "Collector Gallery Page",
                    analyticsGaName: "collectors-gallery",
                    analyticsAthenaName: "collectors-gallery",
                    pagePathnames: ["/collectors/[username]/gallery"],
                    defaultMeta: {
                        title: "Collector Gallery | Displate",
                        description: "Collector Gallery Page | Displate",
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 0
                }
        },
        56323: (e, t, a) => {
            a.d(t, {
                Q: () => s
            });
            var r = a(8106);
            let i = {
                    searchValue: "",
                    originalArtistsFilter: !1
                },
                s = (0, r.v)(e => ({ ...i,
                    setSearchValue: t => {
                        e(e => ({ ...e,
                            searchValue: t
                        }))
                    },
                    setInitialValues: t => {
                        e(e => ({ ...e,
                            searchValue: t
                        }))
                    },
                    setOriginalArtistsFilter: t => {
                        e(e => ({ ...e,
                            originalArtistsFilter: t
                        }))
                    },
                    toggleOriginalArtistsFilter: () => {
                        e(e => ({ ...e,
                            originalArtistsFilter: !e.originalArtistsFilter
                        }))
                    }
                }))
        },
        56650: (e, t, a) => {
            a.d(t, {
                O8: () => o,
                pN: () => l,
                xu: () => s
            });
            var r = a(37984),
                i = a(82378);
            let s = e => void 0 !== e.path,
                l = e => (0, i.ZW)({ ...e,
                    path: `/lp/${(e=>{if(!e)return"";let t=/[^a-zA-Z0-9-]/g;return"string"==typeof e?e.replace(t,""):e.map(e=>e.replace(t,"")).filter(e=>e.length>0).join("/")??""})(e.path)}`,
                    target: "external"
                }),
                o = {
                    readableName: "Webflow LP",
                    analyticsGaName: "lp",
                    analyticsAthenaName: "lp",
                    pagePathnames: ["/lp/[...path]"],
                    defaultMeta: {
                        title: r.p3,
                        description: r.h1,
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 5
                }
        },
        57151: (e, t, a) => {
            a.d(t, {
                C: () => r,
                u: () => i
            });
            let r = "verified-creators",
                i = ["featured designs", "verified creators"]
        },
        57838: (e, t, a) => {
            a.d(t, {
                A: () => s,
                I: () => l
            });
            var r = a(37984),
                i = a(82378);
            let s = {
                    readableName: "404",
                    analyticsGaName: "404",
                    analyticsAthenaName: "404",
                    pagePathnames: ["/404"],
                    defaultMeta: {
                        title: "404 Not Found - Displate | Make Your Home Awesome",
                        description: "404 Not Found - Displate | Make Your Home Awesome",
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 0
                },
                l = e => (0, i.ZW)({ ...e,
                    path: "/404",
                    target: "elysium"
                })
        },
        59340: (e, t, a) => {
            a.d(t, {
                B: () => s,
                _: () => l
            });
            var r = a(37984),
                i = a(82378);
            let s = (e, t) => (0, i.ZW)({ ...t,
                    path: `/collectors/sets/${e}`,
                    target: "elysium"
                }),
                l = {
                    readableName: "Collector Sets Page",
                    analyticsGaName: "collectors-sets",
                    analyticsAthenaName: "collectors-sets",
                    pagePathnames: ["/collectors/sets/[setId]"],
                    defaultMeta: {
                        title: "Collector Sets | Displate",
                        description: "Collector Sets Page | Displate",
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 0
                }
        },
        60297: (e, t, a) => {
            a.d(t, {
                N: () => l,
                v: () => s
            });
            var r = a(37984),
                i = a(82378);
            let s = e => (0, i.ZW)({ ...e,
                    path: "/about-sms-regulations",
                    target: "elysium"
                }),
                l = {
                    readableName: "About SMS Regulations Page",
                    analyticsGaName: "about-sms-regulations",
                    analyticsAthenaName: "about-sms-regulations",
                    pagePathnames: ["/about-sms-regulations"],
                    defaultMeta: {
                        title: "Terms of Use SMS | Displate",
                        description: r.h1,
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 1
                }
        },
        64060: (e, t, a) => {
            a.d(t, {
                E: () => s,
                d: () => l
            });
            var r = a(37984),
                i = a(82378);
            let s = e => (0, i.ZW)({ ...e,
                    path: "/collectors/gallery",
                    target: "elysium"
                }),
                l = {
                    readableName: "Collector Gallery Page",
                    analyticsGaName: "collectors-gallery",
                    analyticsAthenaName: "collectors-gallery",
                    pagePathnames: ["/collectors/gallery"],
                    defaultMeta: {
                        title: "Collector Gallery | Displate",
                        description: "Collector Gallery Page | Displate",
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 0
                }
        },
        64713: (e, t, a) => {
            a.d(t, {
                F: () => s,
                N: () => l
            });
            var r = a(37984),
                i = a(82378);
            let s = e => (0, i.ZW)({ ...e,
                    path: "/about-faq",
                    target: "elysium"
                }),
                l = {
                    readableName: "About Faq Page",
                    analyticsGaName: "about-faq",
                    analyticsAthenaName: "about-faq",
                    pagePathnames: ["/about-faq"],
                    defaultMeta: {
                        title: "Displate - metal posters | Change your wall, change your world",
                        description: "Wall art built to last forever. Official designs from Star Wars&trade;, Marvel, Netflix and 200+ more brands. Hassle-free magnet mounting. 100% made in the EU.",
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 1
                }
        },
        64952: (e, t, a) => {
            a.d(t, {
                F: () => l,
                T: () => s
            });
            var r = a(37984),
                i = a(82378);
            let s = e => (0, i.ZW)({ ...e,
                    path: "/artist/upload-status",
                    target: "elysium"
                }),
                l = {
                    readableName: "Artist Status Page",
                    analyticsGaName: "upload-status",
                    analyticsAthenaName: "upload-status",
                    pagePathnames: ["/artist/upload-status"],
                    defaultMeta: {
                        title: "Artist Upload Status | Displate",
                        description: "Artist Upload Status Page | Displate",
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 0
                }
        },
        67385: (e, t, a) => {
            a.d(t, {
                n: () => d,
                y: () => u
            });
            var r = a(37876),
                i = a(14232),
                s = a(67768),
                l = a(29454),
                o = a(84810),
                n = a(15573),
                c = a(83736);
            let d = (0, i.createContext)({
                    countryCode: "",
                    setCountryCode: () => {}
                }),
                u = e => {
                    if (!e.countryCode) throw Error("Country code is not set");
                    let [t, a] = (0, i.useState)(e.countryCode), u = (0, s.jE)(), p = () => {
                        let e = l.A.get(n.m6);
                        return e && (e = e.toUpperCase()), e
                    }, m = "displate.com";
                    return (0, r.jsx)(d.Provider, {
                        value: {
                            countryCode: t,
                            setCountryCode: ({
                                countryCode: e,
                                noReload: t,
                                shouldUpdateContext: r
                            }) => {
                                let i = p(),
                                    s = e ? .toUpperCase(),
                                    d = !!i && i !== s;
                                l.A.remove(n.m6), l.A.remove(n.m6, {
                                    domain: o.ConfigPublic.cookieDomain
                                }), l.A.remove(n.m6, {
                                    domain: `.${m}`
                                }), l.A.remove(n.m6, {
                                    domain: m
                                }), u.removeQueries({
                                    predicate: e => e.queryKey.includes(c.s)
                                }), l.A.set(n.m6, s, {
                                    expires: 180,
                                    ...window.location.hostname === m && {
                                        domain: `.${o.ConfigPublic.cookieDomain}`
                                    }
                                }), r && a(s), d && !t && (p() !== s ? console.error("CC missmatch") : window.location.reload())
                            }
                        },
                        children: e.children
                    })
                }
        },
        67388: (e, t, a) => {
            a.d(t, {
                d: () => l,
                j: () => s
            });
            var r = a(37984),
                i = a(82378);
            let s = e => (0, i.ZW)({ ...e,
                    path: "/artist/artwork-uploader",
                    target: "elysium"
                }),
                l = {
                    readableName: "Artwork Uploader Page",
                    analyticsGaName: "artwork-uploader",
                    analyticsAthenaName: "artwork-uploader",
                    pagePathnames: ["/artist/artwork-uploader"],
                    defaultMeta: {
                        title: "Artwork Uploader page | Displate",
                        description: r.h1,
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 0
                }
        },
        68605: (e, t, a) => {
            a.d(t, {
                X: () => r
            });
            let r = e => {
                let t = new Map(e.map(e => [e.key, e])),
                    a = t.get("finish"),
                    r = t.get("size"),
                    i = t.get("orientation"),
                    s = t.get("frame"),
                    l = a ? .key === "finish" ? a : void 0,
                    o = r ? .key === "size" ? r : void 0;
                return {
                    finish: l,
                    size: o,
                    orientation: i ? .key === "orientation" ? i : void 0,
                    frame: s ? .key === "frame" ? s : void 0
                }
            }
        },
        69945: (e, t, a) => {
            a.d(t, {
                $C: () => r,
                E0: () => i,
                Mn: () => l,
                vs: () => s
            });
            let r = e => "product" === e.type,
                i = e => "displate-club-membership" === e.type,
                s = e => "shipping" !== e.type,
                l = e => 0 === e.filter(s).length
        },
        70254: (e, t, a) => {
            a.d(t, {
                U: () => l,
                m: () => s
            });
            var r = a(37984),
                i = a(82378);
            let s = {
                    readableName: "Pay DC Success",
                    analyticsGaName: "Pay DC Success",
                    analyticsAthenaName: "Pay DC Success",
                    pagePathnames: ["/pay-dc-success"],
                    cacheTtlMinutes: 0,
                    defaultMeta: {
                        title: "Welcome to the Club! | Displate",
                        description: "You're officially a Displate Club member. Get ready for exclusive perks, collector vibes, and more coming your way!",
                        coverImage: r.Ie
                    }
                },
                l = e => (0, i.ZW)({ ...e,
                    path: "/pay-dc-success",
                    target: "elysium"
                })
        },
        71697: (e, t, a) => {
            a.d(t, {
                Js: () => l,
                WB: () => o,
                cc: () => s
            });
            var r = a(84810),
                i = a(87050);
            let s = {
                    rect: {
                        rect190x135: {
                            longSide: 190,
                            shortSide: 135
                        },
                        rect227x162: {
                            longSide: 227,
                            shortSide: 162
                        },
                        rect255x182: {
                            longSide: 255,
                            shortSide: 182
                        },
                        rect320x230: {
                            longSide: 320,
                            shortSide: 230
                        },
                        rect380x270: {
                            longSide: 380,
                            shortSide: 270
                        },
                        rect392x280: {
                            longSide: 392,
                            shortSide: 280
                        },
                        rect387x183: {
                            longSide: 387,
                            shortSide: 183
                        },
                        rect454x324: {
                            longSide: 454,
                            shortSide: 324
                        },
                        rect640x460: {
                            longSide: 640,
                            shortSide: 460
                        },
                        rect711x594: {
                            longSide: 711,
                            shortSide: 594
                        },
                        rect784x560: {
                            longSide: 784,
                            shortSide: 560
                        },
                        rect992x832: {
                            longSide: 992,
                            shortSide: 832
                        },
                        rect1024x735: {
                            longSide: 1024,
                            shortSide: 735
                        },
                        rect1200x857: {
                            longSide: 1200,
                            shortSide: 857
                        },
                        rect1422x1188: {
                            longSide: 1422,
                            shortSide: 1188
                        },
                        rect1422x1016: {
                            longSide: 1422,
                            shortSide: 1016
                        },
                        rect2048x1469: {
                            longSide: 2048,
                            shortSide: 1469
                        },
                        rect2844x2032: {
                            longSide: 2844,
                            shortSide: 2032
                        },
                        rect4032x2880: {
                            longSide: 4032,
                            shortSide: 2880
                        }
                    },
                    square: {
                        square124: {
                            longSide: 124,
                            shortSide: 124
                        },
                        square163: {
                            longSide: 163,
                            shortSide: 163
                        },
                        square400: {
                            longSide: 400,
                            shortSide: 400
                        },
                        square600: {
                            longSide: 600,
                            shortSide: 600
                        },
                        square1200: {
                            longSide: 1200,
                            shortSide: 1200
                        }
                    }
                },
                l = (e, t, a, s) => {
                    let l;
                    if (!e) return "";
                    let o = ["jpg", "avif", "png", "webp"].some(t => e.includes(`.${t}`));
                    l = a === i.JH.HORIZONTAL ? `${t.longSide}x${t.shortSide}` : `${t.shortSide}x${t.longSide}`;
                    let n = "https://" + r.ConfigPublic.ArtworkDomain;
                    return (s ? .proxyArtwork && (n = `${r.ConfigPublic.AppUrl}/elysium-artwork-proxy`), !o && s ? .extension) ? [n, l, "displate", `${e}.${s.extension}`].join("/") : [n, l, "displate", e].join("/")
                },
                o = (e, t, a) => {
                    if (!e) return "";
                    let i = "https://" + r.ConfigPublic.ArtworkDomain;
                    return a ? .proxyArtwork && (i = `${r.ConfigPublic.AppUrl}/elysium-artwork-proxy`), [i, "textra", t, e].join("/")
                }
        },
        71824: (e, t, a) => {
            a.d(t, {
                g: () => l,
                y: () => s
            });
            var r = a(37984),
                i = a(82378);
            let s = e => (0, i.ZW)({ ...e,
                    path: "/cart",
                    target: "elysium"
                }),
                l = {
                    readableName: "Cart",
                    analyticsGaName: "cart",
                    analyticsAthenaName: "cart",
                    pagePathnames: ["/cart"],
                    defaultMeta: {
                        title: "Cart | Displate",
                        description: "Your Cart",
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 1
                }
        },
        72678: (e, t, a) => {
            a.d(t, {
                CI: () => o,
                Lm: () => c,
                NO: () => s,
                xz: () => n
            });
            var r = a(37984),
                i = a(82378);
            let s = ["bestselling", "new", "size"],
                l = "licensed",
                o = e => {
                    let {
                        slug: t
                    } = e;
                    return void 0 !== t
                },
                n = e => (0, i.ZW)({ ...e,
                    path: `/${l}/${e.slug}`,
                    target: "elysium"
                }),
                c = {
                    readableName: "Brand Page",
                    analyticsGaName: "licensed",
                    analyticsAthenaName: "licensed",
                    pagePathnames: [`/${l}/[slug]`],
                    defaultMeta: {
                        title: r.p3,
                        description: "",
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 1
                }
        },
        72758: (e, t, a) => {
            a.d(t, {
                O: () => l,
                z: () => s
            });
            var r = a(37984),
                i = a(82378);
            let s = e => (0, i.ZW)({ ...e,
                    path: "/collectors/profile",
                    target: "elysium"
                }),
                l = {
                    readableName: "Collector Profile Page",
                    analyticsGaName: "collectors-profile",
                    analyticsAthenaName: "collectors-profile",
                    pagePathnames: ["/collectors/profile"],
                    defaultMeta: {
                        title: "Collector Profile | Displate",
                        description: "Collector Profile Page | Displate",
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 0
                }
        },
        74753: (e, t, a) => {
            a.d(t, {
                W: () => s,
                i: () => l
            });
            var r = a(82378),
                i = a(10769);
            let s = e => (0, r.ZW)({ ...e,
                    path: "/accessories",
                    target: "elysium"
                }),
                l = {
                    readableName: "Accessory Page",
                    analyticsGaName: "accessories",
                    analyticsAthenaName: "accessories",
                    pagePathnames: ["/accessories"],
                    defaultMeta: {
                        title: "How to mount Displate? Accessories! Stand, 3D Magnet, Sticker Magnet | Displate",
                        description: `Explore the world of Displate Accessories – your go-to source for enhancing your magnetic art experience.
        Elevate your Displate metal poster collection with our specially curated Displate Mounting Kit: Displate Stand, 3D Magnet, and Sticker Magnet.
        Easily transform your space in seconds with our user-friendly mounting system and follow our precise mounting instruction.`,
                        coverImage: (0, i.v9)({
                            assetPath: "/images/accessories/og_image.jpg"
                        }).src
                    },
                    cacheTtlMinutes: 1
                }
        },
        76629: (e, t, a) => {
            a.d(t, {
                Eo: () => r,
                SF: () => s,
                k$: () => i
            });
            let r = "/search",
                i = 2,
                s = 50
        },
        76906: (e, t, a) => {
            a.d(t, {
                J: () => s,
                Z: () => l
            });
            var r = a(37984),
                i = a(82378);
            let s = e => (0, i.ZW)({ ...e,
                    path: "/about-us",
                    target: "elysium"
                }),
                l = {
                    readableName: "About Us Page",
                    analyticsGaName: "about-us",
                    analyticsAthenaName: "about-us",
                    pagePathnames: ["/about-us"],
                    defaultMeta: {
                        title: "About Us | Displate",
                        description: "Displate is a community built upon respect for artists and their intellectual property rights as well as the intellectual property rights of third parties.",
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 1
                }
        },
        78911: (e, t, a) => {
            a.d(t, {
                d: () => l,
                l: () => s
            });
            var r, i = a(84957),
                s = ((r = {}).SEARCH_TRACKING_METADATA = "searchTrackingData", r.PROMO_BAR = "isPromoBarClosed", r.SUPPORTED_IMG_FORMATS = "supportedImgFormats", r.SHOULD_DISPLAY_PDP_LOADER = "shouldDisplayPDPLoader", r.NO_ARTWORKS = "noArtworks", r.GIFT_CARD_CHECKOUT_DATA = "giftCardData", r.DC_OFFER_IN_CART = "dcOfferInCart", r.SUBSCRIPTION_ID = "subscriptionId", r.CURRENT_CART = "currentCart", r.PURCHASE_TRACKING = "purchaseTracking", r);
            class l extends i.V {
                constructor(e) {
                    super(e, globalThis.sessionStorage)
                }
            }
        },
        81198: (e, t, a) => {
            a.d(t, {
                a: () => s,
                k: () => l
            });
            var r = a(37984),
                i = a(82378);
            let s = e => (0, i.ZW)({ ...e,
                    path: "/pricing-policy",
                    target: "elysium"
                }),
                l = {
                    readableName: "Pricing Policy Page",
                    analyticsGaName: "pricing-policy",
                    analyticsAthenaName: "pricing-policy",
                    pagePathnames: ["/pricing-policy"],
                    defaultMeta: {
                        title: "Pricing Policy | Displate",
                        description: r.h1,
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 1
                }
        },
        82472: (e, t, a) => {
            a.d(t, {
                R: () => l,
                T: () => s
            });
            var r = a(37984),
                i = a(82378);
            let s = e => (0, i.ZW)({ ...e,
                    path: "/informacja-o-realizowanej-strategii-podatkowej",
                    target: "elysium"
                }),
                l = {
                    readableName: "About Tax Strategy Page",
                    analyticsGaName: "about-tax-strategy",
                    analyticsAthenaName: "about-tax-strategy",
                    pagePathnames: ["/informacja-o-realizowanej-strategii-podatkowej"],
                    defaultMeta: {
                        title: "About Us | Displate",
                        description: "We're a manufacture producing premium quality metal posters. All our posters are designed by talented artists.",
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 1
                }
        },
        84086: (e, t, a) => {
            a.d(t, {
                $: () => l,
                B: () => s
            });
            var r = a(37984),
                i = a(82378);
            let s = e => (0, i.ZW)({ ...e,
                    path: "/about-shipping",
                    target: "elysium"
                }),
                l = {
                    readableName: "About Shipping Page",
                    analyticsGaName: "about-shipping",
                    analyticsAthenaName: "about-shipping",
                    pagePathnames: ["/about-shipping"],
                    defaultMeta: {
                        title: "Shipping & Returns | Displate",
                        description: "We want to make you happy, that is why you may return any product within 100 calendar days of delivery.",
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 1
                }
        },
        84558: (e, t, a) => {
            a.d(t, {
                K9: () => n,
                YE: () => o,
                bA: () => c
            });
            var r = a(37984),
                i = a(82378),
                s = a(10769),
                l = a(78911);
            let o = (e, t) => (0, i.ZW)({ ...t,
                    path: `/no-artworks/${encodeURIComponent(e)}`,
                    target: "elysium"
                }),
                n = {
                    readableName: "No Artworks Page",
                    analyticsGaName: "search_no_results",
                    analyticsAthenaName: "search_no_results",
                    pagePathnames: ["/no-artworks/[phrase]"],
                    defaultMeta: {
                        title: r.p3,
                        description: r.h1,
                        coverImage: (0, s.v9)({
                            assetPath: "/images/accessories/og_image.jpg"
                        }).src
                    },
                    cacheTtlMinutes: 0
                },
                c = new l.d(l.l.NO_ARTWORKS)
        },
        87014: (e, t, a) => {
            a.d(t, {
                Eq: () => o,
                IZ: () => l,
                WF: () => s,
                Zm: () => n,
                s6: () => c
            });
            var r = a(37984),
                i = a(82378);
            let s = 108,
                l = [...i.oQ, "sort"],
                o = e => (0, i.ZW)({ ...e,
                    path: `/artist/${e.artistNick.toLowerCase()}/${e.collectionSlug}`,
                    target: "elysium"
                }),
                n = e => {
                    let {
                        artistNick: t,
                        collectionSlug: a
                    } = e;
                    return void 0 !== t && void 0 !== a
                },
                c = {
                    readableName: "Artist`s Collection Page",
                    analyticsGaName: "collection",
                    analyticsAthenaName: "collection",
                    pagePathnames: ["/artist/[artistNick]/[collectionSlug]"],
                    defaultMeta: {
                        title: r.p3,
                        description: "",
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 1
                }
        },
        87973: (e, t, a) => {
            a.d(t, {
                Me: () => c,
                _v: () => d,
                yz: () => n
            });
            var r = a(14232),
                i = a(74359),
                s = a(16903),
                l = a(35891),
                o = a(87050);
            let n = ["headerContentInfo"],
                c = e => [...n, e];

            function d(e) {
                let {
                    fetchedUserInfo: t
                } = (0, r.useContext)(l.cy), a = (0, s.p)();
                return (0, i.I)({
                    queryKey: c(a ? ? ""),
                    queryFn: () => o.$y.getHeaderContentV6(a),
                    enabled: !!t && !!a,
                    staleTime: 1 / 0,
                    select: e ? .select
                })
            }
        },
        88616: (e, t, a) => {
            a.d(t, {
                Ez: () => o,
                ae: () => l,
                zR: () => s
            });
            var r = a(37984),
                i = a(82378);
            let s = (e, t, a) => (0, i.ZW)({ ...a,
                    path: `/collectors/${e}/sets/${t}`,
                    target: "elysium"
                }),
                l = [...i.oQ],
                o = {
                    readableName: "Collector Sets Page",
                    analyticsGaName: "collectors-sets",
                    analyticsAthenaName: "collectors-sets",
                    pagePathnames: ["/collectors/[username]/sets/[setId]"],
                    defaultMeta: {
                        title: "Collector Sets | Displate",
                        description: "Collector Sets Page | Displate",
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 0
                }
        },
        88726: (e, t, a) => {
            a.d(t, {
                Q: () => l,
                k: () => s
            });
            var r = a(37984),
                i = a(82378);
            let s = {
                    readableName: "Pay Error",
                    analyticsGaName: "Pay Error",
                    analyticsAthenaName: "Pay Error",
                    pagePathnames: ["/pay-error"],
                    cacheTtlMinutes: 0,
                    defaultMeta: {
                        title: "Payment Failed | Displate",
                        description: "There was an issue processing your payment. Please try again.",
                        coverImage: r.Ie
                    }
                },
                l = e => (0, i.ZW)({ ...e,
                    path: "/pay-error",
                    target: "elysium"
                })
        },
        88974: (e, t, a) => {
            a.d(t, {
                o: () => l,
                y: () => s
            });
            var r = a(37984),
                i = a(82378);
            let s = e => (0, i.ZW)({ ...e,
                    path: "/order-history",
                    target: "elysium"
                }),
                l = {
                    readableName: "Order History",
                    analyticsGaName: "order_history",
                    analyticsAthenaName: "order_history",
                    pagePathnames: ["/order-history"],
                    defaultMeta: {
                        title: "Order History | Displate",
                        description: "View your order history",
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 0
                }
        },
        89646: (e, t, a) => {
            a.d(t, {
                Y: () => s,
                x: () => l
            });
            var r = a(82378),
                i = a(10769);
            let s = e => (0, r.ZW)({ ...e,
                    path: "/browse-brands",
                    target: "elysium"
                }),
                l = {
                    readableName: "Browse brands page",
                    analyticsGaName: "browse-brands",
                    analyticsAthenaName: "browse-brands",
                    pagePathnames: ["/browse-brands"],
                    defaultMeta: {
                        title: "Officially Licensed Posters | Browse Brands | Displate",
                        description: "Officially Licensed Posters from amazing brands: Star Wars, DC Comics, Marvel, Cyberpunk, The Witcher, and many more! Buy yours on Displate!",
                        coverImage: (0, i.v9)({
                            assetPath: "/images/brands/og_image.webp"
                        }).src
                    },
                    cacheTtlMinutes: 1
                }
        },
        90511: (e, t, a) => {
            a.d(t, {
                v: () => i
            });
            var r, i = ((r = {}).GeneralUser = "gen", r.Geek = "gek", r.Decorator = "dec", r)
        },
        91444: (e, t, a) => {
            a.d(t, {
                v: () => l,
                x: () => s
            });
            var r = a(37984),
                i = a(82378);
            let s = e => (0, i.ZW)({ ...e,
                    path: "/wishlist",
                    target: "elysium"
                }),
                l = {
                    readableName: "Wishlist Page",
                    analyticsGaName: "wishlist",
                    analyticsAthenaName: "wishlist",
                    pagePathnames: ["/wishlist"],
                    defaultMeta: {
                        title: r.p3,
                        description: r.h1,
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 0
                }
        },
        91680: (e, t, a) => {
            a.d(t, {
                Nv: () => d,
                bo: () => c,
                i8: () => n,
                yn: () => o
            });
            var r = a(37984),
                i = a(82378),
                s = a(33348),
                l = a(72678);
            let o = [...i.oQ, "view", "sort", "collectionType", "search"],
                n = e => {
                    let {
                        nick: t
                    } = e;
                    return void 0 !== t
                },
                c = e => {
                    let t = { ...e.query,
                        ...e.artworksView && {
                            view: "artworks"
                        }
                    };
                    if ((0, s.bf)(e.licensed)) {
                        let {
                            sort: a,
                            ...r
                        } = t, i = { ...r,
                            ...void 0 !== a && l.NO.includes(a) && {
                                sort: a
                            }
                        };
                        return (0, l.xz)({
                            slug: e.nick,
                            query: i,
                            absolute: e.absolute
                        })
                    }
                    return (0, i.ZW)({ ...e,
                        query: t,
                        path: `/artist/${e.nick.toLowerCase()}`,
                        target: "elysium"
                    })
                },
                d = {
                    readableName: "Artist`s Page",
                    analyticsGaName: "artist",
                    analyticsAthenaName: "artist",
                    pagePathnames: ["/artist/[artistNick]"],
                    defaultMeta: {
                        title: r.p3,
                        description: "",
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 1
                }
        },
        91828: (e, t, a) => {
            a.d(t, {
                _P: () => s,
                j2: () => l,
                tn: () => o
            });
            var r = a(37984),
                i = a(82378);
            let s = (e, t) => (0, i.ZW)({ ...t,
                    path: `/collectors/${e}/sets/wishlist`,
                    target: "elysium"
                }),
                l = {
                    readableName: "Collector Sets Wishlist Page",
                    analyticsGaName: "collectors-sets-wishlist",
                    analyticsAthenaName: "collectors-sets-wishlist",
                    pagePathnames: ["/collectors/[username]/sets/wishlist"],
                    defaultMeta: {
                        title: "Collector Wishlist Sets | Displate",
                        description: "Collector Wishlist Sets Page | Displate",
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 0
                },
                o = "00000000-0000-0000-0000-000000000001"
        },
        91830: (e, t, a) => {
            a.d(t, {
                K: () => l,
                U: () => s
            });
            var r = a(37984),
                i = a(82378);
            let s = e => (0, i.ZW)({ ...e,
                    path: "/displate-passport",
                    target: "elysium"
                }),
                l = {
                    readableName: "Displate Passport Page",
                    analyticsGaName: "displate-passport",
                    analyticsAthenaName: "displate-passport",
                    pagePathnames: ["/displate-passport"],
                    defaultMeta: {
                        title: "Displate – metal posters | Change your wall, change your world",
                        description: "Wall art built to last forever. Official designs from Star Wars™, Marvel, Netflix and 200+ more brands. Hassle-free magnet mounting. 100% made in the EU.",
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 1
                }
        },
        92223: (e, t, a) => {
            a.d(t, {
                u: () => o
            });
            var r = a(37876),
                i = a(27555),
                s = a(36256),
                l = a(69894);
            let o = ({
                className: e,
                color: t,
                logoClassName: a,
                onClick: o
            }) => (0, r.jsx)(i.A, {
                className: e,
                "data-testid": "displate-main-logo",
                onClick: o,
                routeInfo: (0, l.P)(),
                children: (0, r.jsx)(s.QX, {
                    className: a,
                    color: t
                })
            })
        },
        92582: (e, t, a) => {
            a.d(t, {
                B: () => s,
                q: () => l
            });
            var r = a(37984),
                i = a(82378);
            let s = e => (0, i.ZW)({ ...e,
                    path: "/whats-a-displate",
                    target: "elysium"
                }),
                l = {
                    readableName: "What's a displate",
                    analyticsGaName: "whats-a-displate",
                    analyticsAthenaName: "whats-a-displate",
                    pagePathnames: ["/whats-a-displate"],
                    defaultMeta: {
                        title: r.p3,
                        description: r.h1,
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 0
                }
        },
        92719: (e, t, a) => {
            a.d(t, {
                n: () => n
            });
            var r = a(22884);
            let i = e => {
                    let {
                        registrationMethod: t
                    } = e;
                    (0, r.u)({
                        event: "registration",
                        registration_method: t
                    })
                },
                s = e => {
                    let {
                        loginMethod: t
                    } = e;
                    (0, r.u)({
                        event: "login",
                        login_method: t
                    })
                };
            var l = a(16909);
            let o = {
                    name: "tracking-stack",
                    handler: {
                        trackRegistrationComplete: e => i(e),
                        registration: e => i(e),
                        trackUserLogout: () => void(0, r.u)({
                            event: "logout"
                        }),
                        trackUserLogin: e => s(e),
                        login: e => s(e)
                    }
                },
                n = (e = o) => {
                    let t = () => {
                        if (!globalThis.sessionStorage) return [];
                        try {
                            let t = JSON.parse(sessionStorage.getItem(e.name) || "[]"),
                                a = JSON.parse(localStorage.getItem(e.name) || "[]");
                            return [...t, ...a]
                        } catch (e) {
                            return (0, l.L1)().error("use client stack error", e), []
                        }
                    };
                    return {
                        addClientStackItem: a => {
                            let r = t();
                            r.push(a), sessionStorage.setItem(e.name, JSON.stringify(r))
                        },
                        consumeClientStackItems: a => {
                            let r = t(),
                                i = [],
                                s = r ? .map(e => {
                                    if (a.includes(e.event)) return e;
                                    i.push(e)
                                });
                            if (s.length)
                                do {
                                    let t = s.pop();
                                    if (t && e.handler[t.event]) {
                                        let a = e.handler[t.event];
                                        t.data ? a(t.data) : a()
                                    }
                                } while (s.length);
                            i.length > 0 ? sessionStorage.setItem(e.name, JSON.stringify(i)) : sessionStorage.removeItem(e.name);
                            try {
                                JSON.parse(localStorage.getItem(e.name) || "[]").length > 0 && localStorage.removeItem(e.name)
                            } catch (e) {
                                (0, l.L1)().error("use client stack error", e)
                            }
                        }
                    }
                }
        },
        94386: (e, t, a) => {
            a.d(t, {
                A: () => l,
                E: () => s
            });
            var r = a(37984),
                i = a(82378);
            let s = e => (0, i.ZW)({ ...e,
                    path: "/shop-handbook",
                    target: "elysium"
                }),
                l = {
                    readableName: "Shop Handbook Page",
                    analyticsGaName: "shop-handbook",
                    analyticsAthenaName: "shop-handbook",
                    pagePathnames: ["/shop-handbook"],
                    defaultMeta: {
                        title: "Shop Handbook | Displate",
                        description: "Got any questions regarding Displate? Contact us now!",
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 1
                }
        },
        95374: (e, t, a) => {
            a.d(t, {
                J9: () => o,
                Kz: () => n,
                MB: () => c,
                Mi: () => u,
                lK: () => d
            });
            var r = a(37984),
                i = a(82378),
                s = a(10769);
            let l = "/listing",
                o = e => {
                    let {
                        pageName: t
                    } = e;
                    return "string" == typeof t
                },
                n = e => (0, i.ZW)({ ...e,
                    path: `${l}/${e.pageName}`,
                    target: "elysium"
                }),
                c = {
                    title: r.p3,
                    description: r.h1,
                    coverImage: r.Ie
                },
                d = {
                    title: "Textra Weekly Reveal | New week, new 3D-textured Displates!",
                    description: "See the gloss, touch the matte. Official designs & original art popping with 3D-printed details! New artworks revealed every week.",
                    coverImage: (0, s.v9)({
                        assetPath: "/images/strapi-lp/og-alien.jpg"
                    }).src
                },
                u = {
                    readableName: "Content Promo",
                    analyticsGaName: "listing",
                    analyticsAthenaName: "listing",
                    pagePathnames: [`${l}/[pageName]`],
                    defaultMeta: c,
                    cacheTtlMinutes: 1
                }
        },
        95450: (e, t, a) => {
            a.d(t, {
                Mh: () => n,
                mq: () => l,
                sm: () => o
            });
            var r = a(37984),
                i = a(82378);
            let s = "/visual-search",
                l = e => (0, i.ZW)({
                    path: `${s}/${e.externalId}`,
                    target: "elysium",
                    ...e
                }),
                o = 100,
                n = {
                    readableName: "Visual Search Page",
                    analyticsGaName: "visual-search",
                    analyticsAthenaName: "visual-search",
                    pagePathnames: [`${s}/[externalId]`],
                    defaultMeta: {
                        title: r.p3,
                        description: "Browse amazing posters designed by thousands of independent artists. Printed on metal. Shipped ready to hang and rock your walls.",
                        coverImage: r.Ie
                    },
                    cacheTtlMinutes: 0
                }
        },
        95888: (e, t, a) => {
            a.d(t, {
                $: () => s,
                L: () => l
            });
            var r = a(37984),
                i = a(82378);
            let s = {
                    readableName: "Pay Success",
                    analyticsGaName: "Pay Success",
                    analyticsAthenaName: "Pay Success",
                    pagePathnames: ["/pay-success/[orderId]"],
                    cacheTtlMinutes: 0,
                    defaultMeta: {
                        title: "Payment Successful | Displate",
                        description: "Thank you for your order. Your payment has been processed successfully.",
                        coverImage: r.Ie
                    }
                },
                l = (e, t) => (0, i.ZW)({ ...t,
                    path: `/pay-success/${e}`,
                    target: "elysium"
                })
        },
        96217: (e, t, a) => {
            a.d(t, {
                b: () => r
            });
            let r = (0, a(8106).v)(e => ({
                impressionData: null,
                setImpressionData: t => e({
                    impressionData: t
                }),
                clearImpressionData: () => e({
                    impressionData: null
                })
            }))
        },
        98315: (e, t, a) => {
            a.d(t, {
                MD: () => c,
                Mh: () => n,
                SS: () => s,
                kw: () => o,
                rR: () => l,
                yJ: () => d
            });
            var r = a(54810),
                i = a(96217);
            let s = ({
                    index: e,
                    item: t,
                    metadata: a
                }) => ({
                    message: {
                        index: e,
                        internalId: t.internalId,
                        externalId: t.externalId,
                        sku: t.sku,
                        name: t.title,
                        target: (0, r.Vo)({
                            externalId: t.externalId.toString()
                        }).route
                    },
                    metadata: a
                }),
                l = ({
                    index: e,
                    item: t,
                    metadata: a
                }) => ({
                    message: {
                        index: e,
                        internalId: t.internalId,
                        externalId: t.artworkId,
                        name: t.title,
                        target: (0, r.Vo)({
                            externalId: t.artworkId.toString()
                        }).route
                    },
                    metadata: a
                }),
                o = ({
                    index: e,
                    metadata: t
                }) => {
                    t.searchQueryId && i.b.getState().setImpressionData({
                        searchQueryId: t.searchQueryId,
                        sort: t.sort,
                        searchPosition: e + 1
                    })
                },
                n = (e, t, a) => `PT:${e}|LT:${t}|LF:${c(a)}`,
                c = e => e ? decodeURIComponent(e).replace(/[^a-zA-Z0-9]/g, "_").toLowerCase() : "";

            function d(e) {
                return void 0 === e ? void 0 : e / 100
            }
        }
    }
]);
//#