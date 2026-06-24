(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4189, 6085], {
        44: (e, t, s) => {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/licensed/[slug]", function() {
                return s(54835)
            }])
        },
        197: () => {},
        14078: (e, t, s) => {
            "use strict";
            s.d(t, {
                F: () => d
            });
            var r = s(37876),
                a = s(36256),
                n = s(14619),
                o = s(29633);
            let l = () => (0, r.jsx)("div", {
                    className: "h-10 w-[240px] overflow-hidden rounded-[46px]",
                    children: (0, r.jsx)(a.EA, {
                        className: "size-full"
                    })
                }),
                c = () => (0, r.jsx)("div", {
                    className: "h-10 w-[150px]",
                    children: (0, r.jsx)(a.EA, {
                        className: "size-full"
                    })
                }),
                d = ({
                    showHeader: e = !0,
                    showFooter: t = !0,
                    testId: s,
                    className: d
                }) => (0, r.jsxs)("div", {
                    className: (0, n.cn)("flex flex-col items-center pb-14", d),
                    "data-testid": s,
                    children: [e ? (0, r.jsx)(l, {}) : null, (0, r.jsx)("div", {
                        className: (0, n.cn)("my-10 grid w-full auto-rows-[minmax(100px,auto)] grid-cols-2 grid-flow-dense gap-4", "md:grid-cols-4 md:gap-6", "lg:grid-cols-5", "xl:grid-cols-6"),
                        children: [...Array(o.T).keys()].map(e => (0, r.jsx)(a.EA, {
                            className: "aspect-5/7 h-auto! size-full"
                        }, e))
                    }), t ? (0, r.jsx)(c, {}) : null]
                })
        },
        19977: () => {},
        21866: () => {},
        22306: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => c
            });
            var r = function(e, t) {
                    return e < t ? -1 : +(e > t)
                },
                a = function(e) {
                    return e.reduce(function(e, t) {
                        return e + t
                    }, 0)
                },
                n = function() {
                    function e(e) {
                        this.colors = e
                    }
                    var t = e.prototype;
                    return t.palette = function() {
                        return this.colors
                    }, t.map = function(e) {
                        return e
                    }, e
                }(),
                o = function() {
                    function e(e, t, s) {
                        return (e << 10) + (t << 5) + s
                    }

                    function t(e) {
                        var t = [],
                            s = !1;

                        function r() {
                            t.sort(e), s = !0
                        }
                        return {
                            push: function(e) {
                                t.push(e), s = !1
                            },
                            peek: function(e) {
                                return s || r(), void 0 === e && (e = t.length - 1), t[e]
                            },
                            pop: function() {
                                return s || r(), t.pop()
                            },
                            size: function() {
                                return t.length
                            },
                            map: function(e) {
                                return t.map(e)
                            },
                            debug: function() {
                                return s || r(), t
                            }
                        }
                    }

                    function s(e, t, s, r, a, n, o) {
                        this.r1 = e, this.r2 = t, this.g1 = s, this.g2 = r, this.b1 = a, this.b2 = n, this.histo = o
                    }

                    function o() {
                        this.vboxes = new t(function(e, t) {
                            return r(e.vbox.count() * e.vbox.volume(), t.vbox.count() * t.vbox.volume())
                        })
                    }
                    return s.prototype = {
                        volume: function(e) {
                            return this._volume && !e || (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume
                        },
                        count: function(t) {
                            var s = this.histo;
                            if (!this._count_set || t) {
                                var r, a, n, o = 0;
                                for (r = this.r1; r <= this.r2; r++)
                                    for (a = this.g1; a <= this.g2; a++)
                                        for (n = this.b1; n <= this.b2; n++) o += s[e(r, a, n)] || 0;
                                this._count = o, this._count_set = !0
                            }
                            return this._count
                        },
                        copy: function() {
                            return new s(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
                        },
                        avg: function(t) {
                            var s = this.histo;
                            if (!this._avg || t) {
                                var r, a, n, o, l = 0,
                                    c = 0,
                                    d = 0,
                                    u = 0;
                                if (this.r1 === this.r2 && this.g1 === this.g2 && this.b1 === this.b2) this._avg = [this.r1 << 3, this.g1 << 3, this.b1 << 3];
                                else {
                                    for (a = this.r1; a <= this.r2; a++)
                                        for (n = this.g1; n <= this.g2; n++)
                                            for (o = this.b1; o <= this.b2; o++) l += r = s[e(a, n, o)] || 0, c += r * (a + .5) * 8, d += r * (n + .5) * 8, u += r * (o + .5) * 8;
                                    this._avg = l ? [~~(c / l), ~~(d / l), ~~(u / l)] : [~~(8 * (this.r1 + this.r2 + 1) / 2), ~~(8 * (this.g1 + this.g2 + 1) / 2), ~~(8 * (this.b1 + this.b2 + 1) / 2)]
                                }
                            }
                            return this._avg
                        },
                        contains: function(e) {
                            var t = e[0] >> 3;
                            return gval = e[1] >> 3, bval = e[2] >> 3, t >= this.r1 && t <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
                        }
                    }, o.prototype = {
                        push: function(e) {
                            this.vboxes.push({
                                vbox: e,
                                color: e.avg()
                            })
                        },
                        palette: function() {
                            return this.vboxes.map(function(e) {
                                return e.color
                            })
                        },
                        size: function() {
                            return this.vboxes.size()
                        },
                        map: function(e) {
                            for (var t = this.vboxes, s = 0; s < t.size(); s++)
                                if (t.peek(s).vbox.contains(e)) return t.peek(s).color;
                            return this.nearest(e)
                        },
                        nearest: function(e) {
                            for (var t, s, r, a = this.vboxes, n = 0; n < a.size(); n++)((s = Math.sqrt(Math.pow(e[0] - a.peek(n).color[0], 2) + Math.pow(e[1] - a.peek(n).color[1], 2) + Math.pow(e[2] - a.peek(n).color[2], 2))) < t || void 0 === t) && (t = s, r = a.peek(n).color);
                            return r
                        },
                        forcebw: function() {
                            var e = this.vboxes;
                            e.sort(function(e, t) {
                                return r(a(e.color), a(t.color))
                            });
                            var t = e[0].color;
                            t[0] < 5 && t[1] < 5 && t[2] < 5 && (e[0].color = [0, 0, 0]);
                            var s = e.length - 1,
                                n = e[s].color;
                            n[0] > 251 && n[1] > 251 && n[2] > 251 && (e[s].color = [255, 255, 255])
                        }
                    }, {
                        quantize: function(a, l) {
                            if (!Number.isInteger(l) || l < 1 || l > 256) throw Error("Invalid maximum color count. It must be an integer between 1 and 256.");
                            if (!a.length || l < 2 || l > 256 || !a.length || l < 2 || l > 256) return !1;
                            for (var c, d, u, h, m, g, p, f, x, v, b, w = [], y = new Set, j = 0; j < a.length; j++) {
                                var N = a[j],
                                    k = N.join(",");
                                y.has(k) || (y.add(k), w.push(N))
                            }
                            if (w.length <= l) return new n(w);
                            var _ = (d = Array(32768), a.forEach(function(t) {
                                d[c = e(t[0] >> 3, t[1] >> 3, t[2] >> 3)] = (d[c] || 0) + 1
                            }), d);
                            _.forEach(function() {});
                            var I = (g = 1e6, p = 0, f = 1e6, x = 0, v = 1e6, b = 0, a.forEach(function(e) {
                                    (u = e[0] >> 3) < g ? g = u : u > p && (p = u), (h = e[1] >> 3) < f ? f = h : h > x && (x = h), (m = e[2] >> 3) < v ? v = m : m > b && (b = m)
                                }), new s(g, p, f, x, v, b, _)),
                                C = new t(function(e, t) {
                                    return r(e.count(), t.count())
                                });

                            function P(t, s) {
                                for (var r, a = t.size(), n = 0; n < 1e3;) {
                                    if (a >= s || n++ > 1e3) return;
                                    if ((r = t.pop()).count()) {
                                        var o = function(t, s) {
                                                if (s.count()) {
                                                    var r = s.r2 - s.r1 + 1,
                                                        a = s.g2 - s.g1 + 1,
                                                        n = Math.max.apply(null, [r, a, s.b2 - s.b1 + 1]);
                                                    if (1 == s.count()) return [s.copy()];
                                                    var o, l, c, d, u = 0,
                                                        h = [],
                                                        m = [];
                                                    if (n == r)
                                                        for (o = s.r1; o <= s.r2; o++) {
                                                            for (d = 0, l = s.g1; l <= s.g2; l++)
                                                                for (c = s.b1; c <= s.b2; c++) d += t[e(o, l, c)] || 0;
                                                            h[o] = u += d
                                                        } else if (n == a)
                                                            for (o = s.g1; o <= s.g2; o++) {
                                                                for (d = 0, l = s.r1; l <= s.r2; l++)
                                                                    for (c = s.b1; c <= s.b2; c++) d += t[e(l, o, c)] || 0;
                                                                h[o] = u += d
                                                            } else
                                                                for (o = s.b1; o <= s.b2; o++) {
                                                                    for (d = 0, l = s.r1; l <= s.r2; l++)
                                                                        for (c = s.g1; c <= s.g2; c++) d += t[e(l, c, o)] || 0;
                                                                    h[o] = u += d
                                                                }
                                                    return h.forEach(function(e, t) {
                                                            m[t] = u - e
                                                        }),
                                                        function(e) {
                                                            var t, r, a, n, l, c = e + "1",
                                                                d = e + "2",
                                                                g = 0;
                                                            for (o = s[c]; o <= s[d]; o++)
                                                                if (h[o] > u / 2) {
                                                                    for (a = s.copy(), n = s.copy(), l = (t = o - s[c]) <= (r = s[d] - o) ? Math.min(s[d] - 1, ~~(o + r / 2)) : Math.max(s[c], ~~(o - 1 - t / 2)); !h[l];) l++;
                                                                    for (g = m[l]; !g && h[l - 1];) g = m[--l];
                                                                    return a[d] = l, n[c] = a[d] + 1, [a, n]
                                                                }
                                                        }(n == r ? "r" : n == a ? "g" : "b")
                                                }
                                            }(_, r),
                                            l = o[0],
                                            c = o[1];
                                        if (!l) return;
                                        t.push(l), c && (t.push(c), a++)
                                    } else t.push(r), n++
                                }
                            }
                            C.push(I), P(C, .75 * l);
                            for (var S = new t(function(e, t) {
                                    return r(e.count() * e.volume(), t.count() * t.volume())
                                }); C.size();) S.push(C.pop());
                            P(S, l);
                            for (var z = new o; S.size();) z.push(S.pop());
                            return z
                        }
                    }
                }().quantize,
                l = function(e) {
                    this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.width = this.canvas.width = e.naturalWidth, this.height = this.canvas.height = e.naturalHeight, this.context.drawImage(e, 0, 0, this.width, this.height)
                };
            l.prototype.getImageData = function() {
                return this.context.getImageData(0, 0, this.width, this.height)
            };
            var c = function() {};
            c.prototype.getColor = function(e, t) {
                return void 0 === t && (t = 10), this.getPalette(e, 5, t)[0]
            }, c.prototype.getPalette = function(e, t, s) {
                var r = function(e) {
                        var t = e.colorCount,
                            s = e.quality;
                        if (void 0 !== t && Number.isInteger(t)) {
                            if (1 === t) throw Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");
                            t = Math.min(t = Math.max(t, 2), 20)
                        } else t = 10;
                        return (void 0 === s || !Number.isInteger(s) || s < 1) && (s = 10), {
                            colorCount: t,
                            quality: s
                        }
                    }({
                        colorCount: t,
                        quality: s
                    }),
                    a = new l(e),
                    n = o(function(e, t, s) {
                        for (var r, a, n, o, l, c = [], d = 0; d < t; d += s) a = e[0 + (r = 4 * d)], n = e[r + 1], o = e[r + 2], (void 0 === (l = e[r + 3]) || l >= 125) && (a > 250 && n > 250 && o > 250 || c.push([a, n, o]));
                        return c
                    }(a.getImageData().data, a.width * a.height, r.quality), r.colorCount);
                return n ? n.palette() : null
            }, c.prototype.getColorFromUrl = function(e, t, s) {
                var r = this,
                    a = document.createElement("img");
                a.addEventListener("load", function() {
                    t(r.getPalette(a, 5, s)[0], e)
                }), a.src = e
            }, c.prototype.getImageData = function(e, t) {
                var s = new XMLHttpRequest;
                s.open("GET", e, !0), s.responseType = "arraybuffer", s.onload = function() {
                    if (200 == this.status) {
                        var e = new Uint8Array(this.response);
                        i = e.length;
                        for (var s = Array(i), r = 0; r < e.length; r++) s[r] = String.fromCharCode(e[r]);
                        var a = s.join("");
                        t("data:image/png;base64," + window.btoa(a))
                    }
                }, s.send()
            }, c.prototype.getColorAsync = function(e, t, s) {
                var r = this;
                this.getImageData(e, function(e) {
                    var a = document.createElement("img");
                    a.addEventListener("load", function() {
                        t(r.getPalette(a, 5, s)[0], this)
                    }), a.src = e
                })
            }
        },
        36573: (e, t, s) => {
            "use strict";
            s.d(t, {
                Dj: () => n,
                Go: () => c,
                U8: () => l,
                ZF: () => o
            });
            var r = s(31850),
                a = s(16909);
            let n = (e, t, s, r) => `${e}-${t}-${s}-${r}`,
                o = e => e.split("/").slice(-2).filter(e => e).join("/"),
                l = () => {
                    let e = (0, r.qg)(window.navigator.userAgent).isMobile ? "mobile" : "desktop",
                        t = (0, a.UN)() ? "Retina" : "Standard";
                    return `${e}${t}`
                },
                c = e => e.split("/").pop() || e
        },
        38757: (e, t, s) => {
            "use strict";
            s.d(t, {
                V: () => a
            });
            var r = s(98461);
            let a = (e, t) => {
                    e.metadata.messageSendingDisabled || t({
                        eventName: "artworkClick",
                        eventType: "click",
                        eventParams: n(e)
                    })
                },
                n = e => {
                    let {
                        pathname: t
                    } = window.location, s = (0, r.R)(), {
                        message: a,
                        metadata: {
                            athenaPageName: n,
                            listingFunction: o,
                            listingType: l,
                            searchQueryId: c
                        }
                    } = e;
                    return {
                        impressionId: `${a.index+1}_${a.externalId}_${s}`,
                        userId: s,
                        target: `displate/${a.externalId}`,
                        context: {
                            itemListId: `PT:${n}|LT:${l}|LF:${o}`,
                            abTest: null,
                            position: a.index + 1,
                            source: t
                        },
                        itemCollectionId: a.externalId,
                        searchQueryId: c || null,
                        searchPosition: a.index + 1,
                        itemId: a.internalId
                    }
                }
        },
        41037: (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => r
            });
            let r = e => e.trim().replace(/\s/g, "_").toLowerCase()
        },
        49746: () => {},
        54835: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                __N_SSP: () => Z,
                default: () => W
            });
            var r = s(37876),
                a = s(64968),
                n = s(15657),
                o = s(77518),
                l = s(10769),
                c = s(14232),
                d = s(89099),
                u = s(61117),
                h = s(95687),
                m = s(16373),
                g = s(36256),
                p = s(57934),
                f = s(93811),
                x = s(16322),
                v = s(79265),
                b = s(30333),
                w = s(99019),
                y = s(18120),
                j = s(72678),
                N = s(87050);
            let k = ({
                artworks: e,
                pages: t,
                slug: s,
                brandDisplayName: a
            }) => {
                let n = (0, d.useRouter)(),
                    {
                        onPageChange: o,
                        renderPaginationLink: l
                    } = (0, w.h)(),
                    {
                        page: u,
                        slug: h,
                        view: m,
                        search: k,
                        sort: _
                    } = n.query,
                    I = k ? .trim() || void 0,
                    C = h ? h.toString().trim() : s || "",
                    P = s || C,
                    S = !e.length,
                    z = S && void 0 !== I,
                    L = (0, c.useMemo)(() => ({
                        messageSendingDisabled: !1,
                        itemListName: "Brand Artworks",
                        listingFunction: p.N.POPULAR,
                        listingType: "masonry",
                        athenaPageName: j.Lm.analyticsAthenaName,
                        gaPageName: j.Lm.analyticsGaName,
                        itemQueryParams: m === N.ZU.TEXTRA ? {
                            productType: N.ZU.TEXTRA
                        } : void 0
                    }), [m]),
                    A = (0, c.useMemo)(() => {
                        let t = (0, x.b)(e);
                        return [{
                            name: "search",
                            heading: "Brand Artworks",
                            shouldBeShown: t.length > 0,
                            masonryListingFunction: P || p.N.POPULAR,
                            items: t
                        }]
                    }, [e, P]),
                    E = Math.ceil(t / 108),
                    T = Number(u || 1);
                return (0, r.jsxs)(y.L, {
                    callback: f._,
                    children: [S ? z ? (0, r.jsx)(b.L, {
                        headingDisplayName: a,
                        nick: C,
                        phrase: I,
                        routeInfo: (0, j.xz)({
                            query: { ...m && {
                                    view: m
                                },
                                ...u && {
                                    page: u
                                },
                                ..._ && {
                                    sort: _
                                }
                            },
                            slug: C
                        }),
                        variant: "search"
                    }) : (0, r.jsx)(c.Fragment, {}) : (0, r.jsx)(v.$, {
                        artworksToDisplay: 108,
                        className: "my-12 md:my-16 pb-0",
                        feeds: A,
                        metadata: L
                    }), S ? (0, r.jsx)(c.Fragment, {}) : (0, r.jsx)("div", {
                        className: "col-span-full my-6 flex justify-center",
                        children: (0, r.jsx)(g.dK, {
                            count: E,
                            onPageChange: o,
                            page: T,
                            renderNext: l,
                            renderPrevious: l
                        })
                    })]
                })
            };
            var _ = s(12013),
                I = s(71697),
                C = s(27555),
                P = s(87014);
            let S = ({
                    collection: e,
                    index: t,
                    brandName: s,
                    collectionArtistSlug: a
                }) => {
                    let n = (0, c.useRef)(null),
                        o = {
                            categorySlug: j.Lm.analyticsGaName,
                            collectionId: e.id,
                            artistName: s,
                            collectionTitle: e.title,
                            index: t
                        };
                    (0, y.$)({
                        ref: n,
                        message: o
                    });
                    let d = e.thumbnail.slice(0, 3).map(t => ({
                        alt: e.title,
                        orientation: t.orientation,
                        src: (0, l.al)(t.imageCoreUrl, {
                            orientation: t.orientation,
                            resolution: I.cc.rect.rect392x280
                        })
                    }));
                    return (0, r.jsx)(C.A, {
                        className: "col-span-4",
                        onClick: () => (0, _.h)(o),
                        ref: n,
                        routeInfo: (0, P.Eq)({
                            artistNick: a,
                            collectionSlug: e.slug
                        }),
                        children: (0, r.jsx)(g.KI, {
                            items: d,
                            title: e.title
                        })
                    })
                },
                z = ({
                    collections: e,
                    pages: t,
                    brandName: s,
                    collectionArtistSlug: a
                }) => {
                    let n = (0, d.useRouter)(),
                        {
                            onPageChange: o,
                            renderPaginationLink: l
                        } = (0, w.h)(),
                        {
                            page: c
                        } = n.query,
                        u = Math.ceil(t / 30),
                        h = Number(c || 1);
                    return e ? .length ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(y.L, {
                            callback: e => (0, _.M)(e),
                            children: e.map((e, t) => (0, r.jsx)(S, {
                                brandName: s,
                                collection: e,
                                collectionArtistSlug: a,
                                index: t
                            }, e.title))
                        }), (0, r.jsx)("div", {
                            className: "col-span-full my-6 flex justify-center",
                            children: (0, r.jsx)(g.dK, {
                                count: u,
                                onPageChange: o,
                                page: h,
                                renderNext: l,
                                renderPrevious: l
                            })
                        })]
                    }) : null
                };
            var L = s(17135),
                A = s(53499),
                E = s(22306),
                T = s(82378),
                $ = s(89646);
            let D = e => {
                    switch (!0) {
                        case e.includes("facebook"):
                            return {
                                alt: "Facebook icon",
                                url: "https://displate.com/img/svg/icons/icon_facebook_light.svg"
                            };
                        case e.includes("twitch"):
                            return {
                                alt: "Twitch icon",
                                url: "https://displate.com/img/svg/icons/icon_twitch_light.svg"
                            };
                        case e.includes("vk"):
                            return {
                                alt: "VK icon",
                                url: "https://displate.com/img/svg/icons/icon_vk_light.svg"
                            };
                        case e.includes("reddit"):
                            return {
                                alt: "Reddit icon",
                                url: "https://displate.com/img/svg/icons/icon_reddit_light.svg"
                            };
                        case e.includes("youtube"):
                            return {
                                alt: "YouTube icon",
                                url: "https://displate.com/img/svg/icons/icon_youtube_light.svg"
                            };
                        case e.includes("instagram"):
                            return {
                                alt: "Instagram icon",
                                url: "https://displate.com/img/svg/icons/icon_instagram_light.svg"
                            };
                        case e.includes("twitter"):
                            return {
                                alt: "Twitter icon",
                                url: "https://displate.com/img/svg/icons/icon_twitter_light.svg"
                            };
                        default:
                            return {
                                alt: "Social link icon",
                                url: "https://displate.com/img/svg/icons/icon_web_light.svg"
                            }
                    }
                },
                M = (e, t, s) => `${e} ${1===e?t:s}`,
                F = ({
                    data: e
                }) => {
                    let t = (0, c.useRef)(null),
                        s = (e => {
                            let [t, s] = (0, c.useState)("");
                            return (0, c.useEffect)(() => {
                                let t = new E.A,
                                    r = e && e.current;
                                if (r) {
                                    if (r.complete) try {
                                        s(t.getColor(r))
                                    } catch (e) {
                                        console.error(e)
                                    }
                                    r.addEventListener("load", () => {
                                        try {
                                            s(t.getColor(r))
                                        } catch (e) {
                                            console.error(e)
                                        }
                                    })
                                }
                            }, [e]), t
                        })(t),
                        a = (0, l.v9)({
                            assetPath: e.images.retinaHeaderMobile,
                            widths: [A.Y, 2 * A.Y]
                        }),
                        n = (0, l.v9)({
                            assetPath: e.images.retinaHeaderDesktop,
                            widths: [2500, 5e3]
                        }),
                        o = (0, l.ZX)({
                            assetPath: e.images.retinaLogo,
                            widths: [150, 300]
                        }),
                        d = (0, c.useMemo)(() => [{
                            id: "brand-shops",
                            children: (0, r.jsx)(C.A, {
                                routeInfo: (0, $.Y)(),
                                children: "Brand Shops"
                            })
                        }, {
                            id: `brand-current-${e.author.id}`,
                            label: e.name
                        }], [e.author.id, e.name]);
                    return (0, r.jsxs)("header", {
                        className: "relative isolate h-[352px] overflow-hidden md:h-[400px]",
                        "data-testid": "BrandHeader",
                        children: [(0, r.jsx)("div", {
                            "aria-hidden": !0,
                            className: "absolute inset-x-0 top-0 -z-30 h-full",
                            style: {
                                backgroundColor: `rgb(${s})`
                            }
                        }), (0, r.jsx)("div", {
                            "aria-hidden": !0,
                            className: "absolute inset-0 -z-10 bg-background-bold/10"
                        }), (0, r.jsx)("div", {
                            "aria-hidden": !0,
                            className: "absolute inset-0 -z-10 mix-blend-multiply opacity-70 bg-[linear-gradient(180.25deg,transparent_26.68%,rgba(0,0,0,0.6)_89.83%)]"
                        }), (0, r.jsxs)("div", {
                            className: "pointer-events-none absolute left-1/2 top-0 -z-20 inline-block h-full w-max -translate-x-1/2",
                            children: [(0, r.jsx)("div", {
                                "aria-hidden": !0,
                                className: "absolute left-0 top-0 z-1 h-full w-[500px]",
                                style: {
                                    background: `linear-gradient(90deg, rgb(${s}), transparent)`
                                }
                            }), (0, r.jsx)("div", {
                                "aria-hidden": !0,
                                className: "absolute right-0 top-0 z-1 h-full w-[500px]",
                                style: {
                                    background: `linear-gradient(270deg, rgb(${s}), transparent)`
                                }
                            }), (0, r.jsxs)("picture", {
                                className: "block h-full",
                                children: [(0, r.jsx)("source", {
                                    media: `(max-width: ${A.Y}px)`,
                                    sizes: a.sizes,
                                    srcSet: a.srcSet
                                }), (0, r.jsx)("source", {
                                    sizes: n.sizes,
                                    srcSet: n.srcSet
                                }), (0, r.jsx)("img", {
                                    alt: "Header background",
                                    className: "h-full",
                                    crossOrigin: "anonymous",
                                    ref: t,
                                    src: n.widthsSrc[0]
                                })]
                            })]
                        }), (0, r.jsx)(g.mc, {
                            className: "relative z-10 h-full",
                            children: (0, r.jsxs)("div", {
                                className: "flex h-full flex-col pb-8 pt-2 text-text-inverse md:justify-between md:py-8",
                                children: [(0, r.jsx)("div", {
                                    className: "pb-6",
                                    children: (0, r.jsx)(g.BI, {
                                        "data-testid": "BrandHeaderBreadcrumbs",
                                        items: d,
                                        variant: "light"
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: "flex flex-col items-center justify-center text-center md:flex-row md:items-center md:justify-start md:text-left",
                                    children: [(0, r.jsx)("div", {
                                        className: "mb-5 flex h-[100px] max-w-[300px] items-center md:mb-0 md:mr-6 md:max-w-[336px] md:border-r md:border-border-inverse/50 md:pr-6",
                                        children: (0, r.jsx)("img", {
                                            alt: `${e.name} Logo`,
                                            className: "h-auto max-h-[100px] w-full",
                                            decoding: "async",
                                            fetchPriority: "high",
                                            loading: "eager",
                                            sizes: o.sizes,
                                            src: o.widthsSrc[0],
                                            srcSet: o.srcSet
                                        })
                                    }), (0, r.jsxs)("section", {
                                        className: "flex flex-col gap-2 text-body-sm",
                                        "data-testid": "brand-header-info",
                                        children: [e.title, (0, r.jsxs)("div", {
                                            className: "pb-2",
                                            children: [M(e.collectionCount, "Collection", "Collections"), (0, r.jsx)("span", {
                                                "aria-hidden": !0,
                                                className: "px-2.5 text-text-inverse",
                                                children: "|"
                                            }), M(e.artworkCount, "Artwork", "Artworks")]
                                        }), (0, r.jsxs)("div", {
                                            className: "flex flex-col items-center justify-center md:flex-row-reverse md:justify-end",
                                            children: [e.links.length > 0 ? (0, r.jsx)("div", {
                                                className: "flex gap-3",
                                                children: e.links.map(e => (0, r.jsx)(C.A, {
                                                    routeInfo: (0, T.ZW)({
                                                        path: e,
                                                        target: "external"
                                                    }),
                                                    target: "_blank",
                                                    children: (0, r.jsx)("img", {
                                                        alt: D(e).alt,
                                                        src: D(e).url
                                                    })
                                                }, e))
                                            }) : null, (0, r.jsx)(L.W, {
                                                authorId: e.author.id,
                                                metadata: {
                                                    pageType: j.Lm.analyticsGaName,
                                                    componentLocation: "brand_header",
                                                    authorName: e.name,
                                                    listingFunction: p.N.FOLLOW
                                                },
                                                size: "sm"
                                            })]
                                        })]
                                    })]
                                })]
                            })
                        })]
                    })
                };
            var q = s(18847),
                H = s.n(q);
            let R = {
                    [s(91868).A]: {
                        component: H()(() => Promise.all([s.e(7719), s.e(6527)]).then(s.bind(s, 56527)).then(e => ({
                            default: e.Header
                        })), {
                            loadableGenerated: {
                                webpack: () => [56527]
                            },
                            ssr: !0
                        }),
                        requiresHeaderHighlights: !0
                    }
                },
                O = ({
                    brandSlug: e,
                    details: t,
                    headerHighlights: s
                }) => {
                    let a = R[e];
                    if (a) {
                        let e = a.component;
                        return a.requiresHeaderHighlights ? s && s.length > 0 ? (0, r.jsx)(e, {
                            headerHighlights: s
                        }) : (0, r.jsx)(F, {
                            data: t
                        }) : (0, r.jsx)(e, {
                            headerHighlights: s || []
                        })
                    }
                    return (0, r.jsx)(F, {
                        data: t
                    })
                },
                U = ({
                    artworks: e,
                    metadata: t,
                    collections: s,
                    filters: a,
                    details: n,
                    brandSlug: o,
                    headerHighlights: l
                }) => {
                    var p;
                    let f = (0, d.useRouter)(),
                        {
                            track: x
                        } = (0, m.z)(),
                        v = (p = j.Lm.analyticsGaName, R[o] ? o : p),
                        {
                            view: b
                        } = f.query,
                        w = "collections" === (b || "artworks");
                    return (0, c.useEffect)(() => {
                        x({
                            pageCategory: v,
                            eventParams: {
                                page: t.page,
                                pages: t.totalPagesCount
                            }
                        })
                    }, [f]), (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(O, {
                            brandSlug: o,
                            details: n,
                            headerHighlights: l
                        }), (0, r.jsx)(g.mc, {
                            children: (0, r.jsxs)("div", {
                                className: "col-span-full mb-2",
                                children: [(0, r.jsx)("h1", {
                                    className: "mt-16 mb-8 text-heading-h4 text-text-primary md:text-heading-h2",
                                    children: G(n.name)
                                }), (0, r.jsx)(u.J, {
                                    artworkCount: n.artworkCount,
                                    buildRoute: e => (0, j.xz)({
                                        query: e,
                                        slug: o
                                    }).route,
                                    clearRouteQuery: {
                                        slug: o
                                    },
                                    displayName: n.name,
                                    showTextra: n.containsTextra,
                                    sortOptions: a.sort
                                })]
                            })
                        }), (0, r.jsx)(g.mc, {
                            "data-testid": w ? "brand-collections-container" : "brand-artworks-container",
                            children: w ? (0, r.jsx)(g.xA, {
                                className: "gap-y-6 mt-12",
                                children: (0, r.jsx)(z, {
                                    brandName: n.name,
                                    collectionArtistSlug: n.author.nick,
                                    collections: s || [],
                                    pages: t ? .totalItemsCount || 1
                                })
                            }) : (0, r.jsx)(k, {
                                artworks: e || [],
                                brandDisplayName: n.name,
                                pages: t ? .totalItemsCount || 1
                            })
                        }), (0, r.jsx)("div", {
                            className: "mt-16 mb-9",
                            children: (0, r.jsx)(h.SeoDescription, {
                                sections: [{
                                    title: `${n.name} Posters`,
                                    description: n.description,
                                    renderDescriptionAsHtml: !0
                                }]
                            })
                        })]
                    })
                };
            var B = s(25282);
            let G = e => `${e} Posters - prints on metal`,
                Q = e => {
                    let t = {
                        webpage: {
                            h1: G(e.details.name),
                            url: (0, j.xz)({
                                absolute: !0,
                                slug: e.details.slug
                            }).route,
                            description: e.details.seoData.description,
                            imageOfPage: e.details.seoData.ogImageUrl
                        },
                        brand: {
                            avatarUrl: (0, l.ZX)({
                                assetPath: e.details.images.retinaLogo,
                                widths: [150]
                            }).widthsSrc[0],
                            nick: e.details.slug,
                            name: e.details.name,
                            description: e.details.seoData.description,
                            links: e.details.links
                        }
                    };
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(n.F, {
                            ldJsonParams: t,
                            pageMeta: {
                                coverImage: e.details.seoData.ogImageUrl,
                                title: e.details.seoData.title,
                                description: e.details.seoData.description
                            }
                        }), (0, r.jsx)(a.e, {
                            value: {},
                            children: (0, r.jsx)(B.O, {
                                headerData: e.header,
                                children: (0, r.jsx)(U, { ...e
                                })
                            })
                        })]
                    })
                };
            Q.getLayout = function(e) {
                return (0, r.jsx)(o.A, {
                    abTests: e.props.abTests,
                    countryCode: e.props.countryCode,
                    featureFlags: e.props.featureFlags,
                    gitInfo: e.props.gitInfo,
                    tpid: e.props.tpid,
                    uvert: e.props.uvert,
                    children: e
                })
            };
            let W = Q;
            var Z = !0
        },
        75808: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => a
            });
            var r = s(14232);
            let a = r.forwardRef(function({
                title: e,
                titleId: t,
                ...s
            }, a) {
                return r.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    "data-slot": "icon",
                    ref: a,
                    "aria-labelledby": t
                }, s), e ? r.createElement("title", {
                    id: t
                }, e) : null, r.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                }))
            })
        },
        79265: (e, t, s) => {
            "use strict";
            s.d(t, {
                $: () => x
            });
            var r = s(37876),
                a = s(14232),
                n = s(89099),
                o = s(14619),
                l = s(29633),
                c = s(14078),
                d = s(40636),
                u = s(41037),
                h = s(95729),
                m = s(2661),
                g = s(36256);
            let p = ({
                feedContents: e,
                activeTab: t,
                handleFeedChange: s
            }) => {
                let {
                    pushEvent: a
                } = (0, m.L)(), n = t < e.length ? t : 0;
                return (0, r.jsxs)(r.Fragment, {
                    children: [e.length > 1 ? (0, r.jsx)("div", {
                        className: "flex w-full justify-evenly overflow-x-auto mb-6 md:mb-10",
                        children: (0, r.jsx)(g.Iz, {
                            className: "shrink-0 uppercase",
                            items: e.map(e => ({
                                label: (0, r.jsx)("span", {
                                    className: "capitalize",
                                    "data-testid": e.heading,
                                    children: e.heading
                                }),
                                value: e.heading
                            })),
                            name: "masonry-feed-v2",
                            onChange: r => {
                                let n = e.findIndex(e => e.heading === r);
                                n < 0 || n === t || (s(n), (0, h.q)((0, u.Z)(r)), "following" === e[n].heading && (0, d.lB)(a))
                            },
                            value: e[n].heading
                        })
                    }) : null, e[n].content]
                })
            };
            var f = s(23412);
            let x = ({
                feeds: e,
                metadata: t,
                className: s,
                artworksToDisplay: d = l.T,
                customGridItem: u
            }) => {
                let h = (0, n.useRouter)(),
                    [m, g] = (0, a.useState)(0);
                (0, a.useEffect)(() => {
                    g(0)
                }, [h.asPath]);
                let x = (0, a.useMemo)(() => e.filter(e => e.shouldBeShown).map(e => (0, f.xG)(e, t, h.pathname, void 0, d, u)), [e, t, h.pathname, d, u]);
                return ((0, a.useEffect)(() => {
                    m >= x.length && x.length > 0 && g(0)
                }, [m, x.length]), 0 === e.length || (0, f.nz)(e)) ? (0, r.jsx)(c.F, {
                    className: s
                }) : (0, r.jsx)("div", {
                    className: (0, o.cn)("flex flex-col items-center [&_button:first-letter]:uppercase", s),
                    "data-testid": "masonry-feed-container",
                    children: (0, r.jsx)(p, {
                        activeTab: m,
                        feedContents: x,
                        handleFeedChange: g
                    })
                })
            }
        },
        91868: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => r
            });
            let r = "clair-obscur-expedition-33"
        },
        93811: (e, t, s) => {
            "use strict";
            s.d(t, {
                _: () => n
            });
            var r = s(30068),
                a = s(2661);
            let n = e => {
                (0, r.S)(e), (0, a.e)(e)
            }
        },
        95687: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                SeoDescription: () => u
            });
            var r = s(37876),
                a = s(14232),
                n = s(67376),
                o = s.n(n),
                l = s(56926),
                c = s(36256),
                d = s(14619);
            let u = ({
                sections: e,
                className: t,
                dataTestId: s = "seo-description",
                expandableOnMobile: n = !1,
                ref: u,
                ...h
            }) => {
                let [m, g] = (0, a.useState)(!1), p = n && e.length > 1;
                return (0, r.jsx)(c.mc, {
                    asChild: !0,
                    children: (0, r.jsx)("section", {
                        className: t,
                        "data-testid": s,
                        ref: u,
                        ...h,
                        children: (0, r.jsxs)("div", {
                            className: "flex w-full flex-col gap-5 overflow-hidden wrap-break-word rounded-md bg-background-medium p-6 text-text-primary md:px-20 md:py-12 md:pl-12",
                            children: [e.map((e, t) => {
                                var s;
                                let a;
                                return (0, r.jsxs)("div", {
                                    className: (0, d.cn)("flex flex-col gap-4", p && !m && t > 0 ? "max-md:hidden" : null),
                                    children: [(0, r.jsx)("h3", {
                                        className: "text-display-xs font-display uppercase",
                                        children: e.title
                                    }), (s = p && !m && 0 === t ? "max-md:line-clamp-12" : void 0, a = (0, d.cn)("text-body-md", s), e.renderDescriptionAsHtml && "string" == typeof e.description ? (0, r.jsx)("div", {
                                        className: a,
                                        dangerouslySetInnerHTML: {
                                            __html: o()(e.description)
                                        }
                                    }) : "string" == typeof e.description ? (0, r.jsx)("p", {
                                        className: a,
                                        children: e.description
                                    }) : (0, r.jsx)("div", {
                                        className: a,
                                        children: e.description
                                    }))]
                                }, e.title)
                            }), p ? (0, r.jsx)(c.$n, {
                                className: "self-center md:hidden",
                                onClick: () => g(e => !e),
                                rightIcon: (0, r.jsx)(l.A, {
                                    className: (0, d.cn)("transition-transform", m ? "rotate-180" : null),
                                    color: "currentColor"
                                }),
                                variant: "secondaryDarkOutline",
                                children: m ? "Show less" : "Show more"
                            }) : null]
                        })
                    })
                })
            };
            u.displayName = "SeoDescription"
        },
        95729: (e, t, s) => {
            "use strict";
            s.d(t, {
                q: () => n,
                z: () => a
            });
            var r = s(51192);
            let a = (e, t) => {
                    (0, r.O)({
                        elementId: e,
                        elementVariant: t
                    })
                },
                n = e => {
                    (0, r.O)({
                        elementId: "recommendation_feed_toggle",
                        elementVariant: e
                    })
                }
        },
        99074: (e, t, s) => {
            "use strict";
            s.d(t, {
                s: () => a
            });
            var r = s(7234);
            let a = (e, t, s) => {
                    e.metadata.messageSendingDisabled || t({
                        eventName: "addToWishlist",
                        eventType: "click",
                        eventParams: n(e, s)
                    })
                },
                n = (e, t) => {
                    let {
                        message: {
                            externalId: s,
                            internalId: a,
                            name: n,
                            index: o
                        }
                    } = e;
                    return {
                        itemId: a,
                        itemCollectionId: s,
                        name: n || "",
                        ...((e, t, s) => {
                            let a = {
                                searchQueryId: null,
                                searchPosition: null,
                                sort: null
                            };
                            if (s || window.location.pathname.startsWith(r.rm) || window.location.pathname.startsWith(r.pU)) {
                                let s = window.history.state ? .searchPosition || (e.searchQueryId ? t : null);
                                a.searchQueryId = e.searchQueryId || window.history.state ? .searchQueryId || null, a.searchPosition = s, a.sort = e.sort || window.history.state ? .sort || null
                            }
                            return a
                        })(e.metadata, o, t)
                    }
                }
        }
    },
    e => {
        e.O(0, [4024, 2183, 1353, 1671, 3219, 7376, 5706, 9658, 3915, 5657, 3851, 8043, 9633, 1366, 7415, 636, 6593, 8792], () => e(e.s = 44)), _N_E = e.O()
    }
]);
//#