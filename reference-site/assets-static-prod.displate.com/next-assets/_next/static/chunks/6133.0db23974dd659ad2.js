"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6133], {
        10302: (e, t, i) => {
            i.d(t, {
                A: () => n
            });
            var r = i(37876);
            let n = e => (0, r.jsx)("svg", {
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
        13900: (e, t, i) => {
            i.d(t, {
                J: () => o
            });
            var r = i(14232),
                n = i(74359),
                s = i(82678);
            let o = ({
                ssrInspirations: e,
                queryKeyPrefix: t,
                fetchInspirations: i
            }) => {
                let [o, a] = (0, r.useState)(s.q), c = o.uniqueId === s.q.uniqueId, {
                    data: u,
                    isPending: l
                } = (0, n.I)({
                    queryKey: [t, o.uniqueId],
                    queryFn: () => i(o.uniqueId),
                    enabled: !c,
                    initialData: c ? e : void 0,
                    staleTime: e => {
                        let t = e.state.data;
                        return 6e4 * ((t ? .items ? .length ? ? 0) > 0)
                    }
                }), f = (0, r.useMemo)(() => c ? e : u || {
                    categories: e.categories,
                    items: []
                }, [u, c, e]), E = e.categories ? ? [];
                return {
                    currentCategory: o,
                    setCurrentCategory: a,
                    filterCategories: E,
                    inspirations: f.items ? ? [],
                    isDataLoading: l && !c
                }
            }
        },
        14399: (e, t, i) => {
            i.d(t, {
                A: () => s,
                Op: () => o,
                _V: () => a
            });
            var r = i(84810),
                n = i(10769);
            let s = (e, t, i) => e ? t ? a(e, i) : o(e, i) : {
                    src: "",
                    srcSet: "",
                    widthsSrc: []
                },
                o = (e, t) => e ? (0, n.ZX)({
                    assetPath: e,
                    assetSubPath: "avatars",
                    assetDomain: r.ConfigPublic.ArtworkDomain,
                    widths: t
                }) : {
                    src: "",
                    srcSet: "",
                    widthsSrc: []
                },
                a = (e, t) => e ? (0, n.ZX)({
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
        19276: (e, t, i) => {
            i.d(t, {
                A: () => n
            });
            var r = i(37876);
            let n = e => (0, r.jsxs)("svg", {
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
        35322: (e, t, i) => {
            i.r(t), i.d(t, {
                InspirationsSection: () => E
            });
            var r = i(37876),
                n = i(14232),
                s = i(91757),
                o = i(10698),
                a = i(90637),
                c = i(36256),
                u = i(34645),
                l = i(13900),
                f = i(87050);
            let E = () => {
                let {
                    inspirations: e
                } = (0, u.A)(), {
                    countryCode: t
                } = (0, o.C)(), {
                    currentCategory: i,
                    setCurrentCategory: E,
                    filterCategories: T,
                    inspirations: m,
                    isDataLoading: p
                } = (0, l.J)({
                    ssrInspirations: e,
                    queryKeyPrefix: "homepage-inspirations",
                    fetchInspirations: e => f.V6.getHomepageInspirationsV20(e)
                }), d = (0, n.useMemo)(() => (0, a.T)(t), [t]);
                return (e.items ? .length ? ? 0) > 0 || p ? (0, r.jsx)(c.mc, {
                    "data-testid": "homepage-inspirations",
                    children: (0, r.jsx)(s.I, {
                        currentCategory: i,
                        filterCategories: T,
                        hasSeeAllButton: !0,
                        inspirations: m,
                        isDataLoading: p,
                        resolveArtworkProductRoute: d,
                        setCurrentCategory: E
                    })
                }) : null
            }
        },
        97160: (e, t, i) => {
            function r(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, function(e) {
                        var t = function(e, t) {
                            if ("object" != typeof e || !e) return e;
                            var i = e[Symbol.toPrimitive];
                            if (void 0 !== i) {
                                var r = i.call(e, t || "default");
                                if ("object" != typeof r) return r;
                                throw TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === t ? String : Number)(e)
                        }(e, "string");
                        return "symbol" == typeof t ? t : t + ""
                    }(r.key), r)
                }
            }

            function n(e, t, i) {
                return t && r(e.prototype, t), i && r(e, i), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }

            function s() {
                return (s = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var r in i)({}).hasOwnProperty.call(i, r) && (e[r] = i[r])
                    }
                    return e
                }).apply(null, arguments)
            }
            i.d(t, {
                $I: () => L,
                Lc: () => f,
                SR: () => A,
                TZ: () => E,
                ch: () => l,
                oM: () => T
            });
            var o, a, c, u, l, f, E, T, m = function() {
                function e(t) {
                    if (!e.isValid(t)) throw Error("Value `" + t + "` is not a valid ItemType code");
                    this._code = t
                }
                return e.of = function(t) {
                    return new e(t)
                }, e.isValid = function(t) {
                    return null != t && e.PATTERN.test(t)
                }, n(e, [{
                    key: "code",
                    get: function() {
                        return this._code
                    }
                }])
            }();
            m.PATTERN = /^[A-Z]$/;
            var p = function() {
                function e(t) {
                    if (!e.isValid(t)) throw Error("Value `" + t + "` is not a valid Item code");
                    this._code = t
                }
                return e.of = function(t) {
                    return new e(t)
                }, e.isValid = function(t) {
                    return null != t && e.PATTERN.test(t)
                }, e.prototype.itemType = function() {
                    return m.of(this._code.charAt(0))
                }, n(e, [{
                    key: "code",
                    get: function() {
                        return this._code
                    }
                }])
            }();
            p.PATTERN = /^[A-Z](?!000)[A-Z0-9]{3}$/;
            var d = function() {
                function e(t) {
                    if (!e.isValid(t)) throw Error("Value `" + t + "` is not a valid Variant code");
                    this._code = t
                }
                return e.of = function(t) {
                    return new e(t)
                }, e.isValid = function(t) {
                    return null != t && e.PATTERN.test(t)
                }, n(e, [{
                    key: "code",
                    get: function() {
                        return this._code
                    }
                }])
            }();
            d.PATTERN = /^(?!00000000)\d{8}$/;
            var A = function() {
                function e(e, t) {
                    this._item = e, this._variant = t
                }
                e.of = function(t, i) {
                    return new e(t, i)
                }, e.fromCode = function(t) {
                    if (!e.isValid(t)) throw Error("Value `" + t + "` is not a valid SKU code");
                    return new e(p.of(t.substring(0, 4)), d.of(t.substring(4, 12)))
                }, e.isValid = function(t) {
                    return null != t && e.PATTERN.test(t)
                };
                var t = e.prototype;
                return t.itemType = function() {
                    return this._item.itemType()
                }, t.isSameItem = function(e) {
                    return this._item.code === e._item.code
                }, t.isSameItemType = function(e) {
                    return this.itemType().code === e.item.itemType().code
                }, n(e, [{
                    key: "item",
                    get: function() {
                        return this._item
                    }
                }, {
                    key: "variant",
                    get: function() {
                        return this._variant
                    }
                }, {
                    key: "code",
                    get: function() {
                        return this._item.code + this._variant.code
                    }
                }])
            }();
            A.PATTERN = /^[A-Z](?!000)[A-Z0-9]{3}(?!00000000)\d{8}$/, (o = l || (l = {})).DISPLATE = "displate", o.LIMITED_EDITION = "limited_edition", o.ULTRA_LIMITED_EDITION = "ultra_limited_edition", o.LUMINO = "lumino", o.MAGNET = "magnet", o.STAND = "stand", o.UNKNOWN = "unknown", (a = f || (f = {})).MATTE = "matte", a.GLOSS = "gloss", a.TEXTRA = "textra", (c = E || (E = {})).MEDIUM = "m", c.LARGE = "l", c.XLARGE = "xl", (u = T || (T = {})).NONE = "none", u.NATURAL_WOOD = "natural", u.GRAPHITE = "graphite", u.WHITE_WOOD = "white", u.BLACK_WOOD = "black";
            var L = function() {
                function e() {}
                return e.of = function() {
                    return new e
                }, e.isValid = function(t) {
                    return null != t && e.SKU_PATTERN.test(t)
                }, e.getProductType = function(t) {
                    if (!e.isValid(t)) return null;
                    var i = t.substring(0, 4);
                    return e.ITEM_MAPPING[i] ? l.DISPLATE : "PL01" === i ? l.LIMITED_EDITION : "PL02" === i ? l.ULTRA_LIMITED_EDITION : "PL03" === i ? l.LUMINO : /^A00[1-3]$/.test(i) ? l.MAGNET : "A006" === i ? l.STAND : l.UNKNOWN
                }, e.getProductLabel = function(e) {
                    switch (e) {
                        case l.DISPLATE:
                            return "Displate";
                        case l.LIMITED_EDITION:
                            return "Limited Edition";
                        case l.ULTRA_LIMITED_EDITION:
                            return "Ultra Limited Edition";
                        case l.LUMINO:
                            return "Lumino";
                        case l.MAGNET:
                            return "Magnet";
                        case l.STAND:
                            return "Stand";
                        case l.UNKNOWN:
                        default:
                            return "Unknown"
                    }
                }, e.getProductPhysicalProperties = function(t, i) {
                    var r = ["US", "UK", "GB"].includes(i),
                        n = null;
                    switch (t) {
                        case E.LARGE:
                            n = r ? e.lImperialDescription : e.lMetricDescription;
                            break;
                        case E.XLARGE:
                            n = r ? e.xlImperialDescription : e.xlMetricDescription;
                            break;
                        default:
                            n = r ? e.mImperialDescription : e.mMetricDescription
                    }
                    var s = r ? e.mImperialDescription.size : e.mMetricDescription.size,
                        o = r ? e.lImperialDescription.size : e.lMetricDescription.size;
                    return {
                        thickness: n.thickness,
                        weight: n.weight,
                        description: n.size,
                        formattedDescription: n.formattedSize,
                        packageContent: function() {
                            switch (t) {
                                case E.LARGE:
                                    return "1 metal poster (" + o + "), 2 protective leaves, 2 magnets";
                                case E.XLARGE:
                                    return "4 metal posters (4 x " + s + "), 4 protective leaves, 4 magnets";
                                default:
                                    return "1 metal poster (" + s + "), 1 protective leaf, 1 magnet"
                            }
                        }()
                    }
                }, e.prototype.parse = function(t, i) {
                    if (!e.isValid(t)) return null;
                    var r = t.substring(0, 4),
                        n = t.substring(4, 12),
                        o = e.ITEM_MAPPING[r];
                    return o ? s({}, o, {
                        artworkId: n,
                        physicalProperties: e.getProductPhysicalProperties(o.size, i)
                    }) : null
                }, e
            }();
            L.SKU_PATTERN = /^[A-Z](?!000)[A-Z0-9]{3}(?!00000000)\d{8}$/, L.mMetricDescription = {
                size: "45 cm / 32 cm",
                formattedSize: "45 x 32cm",
                thickness: "3,50 mm",
                weight: "0,7 kg"
            }, L.lMetricDescription = {
                size: "67.5 cm / 48 cm",
                formattedSize: "67.5 x 48cm",
                thickness: "3,50 mm",
                weight: "1,20 kg"
            }, L.xlMetricDescription = {
                size: "90 cm / 64 cm",
                formattedSize: "90 x 64cm",
                thickness: "3,50 mm",
                weight: "2,80 kg"
            }, L.mImperialDescription = {
                size: "17.7'' / 12.6''",
                formattedSize: "17.7 x 12.6''",
                thickness: "0.13''",
                weight: "1.54 pounds"
            }, L.lImperialDescription = {
                size: "26.6'' / 18.9''",
                formattedSize: "26.6 x 18.9''",
                thickness: "0.13''",
                weight: "2.65 pounds"
            }, L.xlImperialDescription = {
                size: "35.4'' / 25.2''",
                formattedSize: "35.4 x 25.2''",
                thickness: "0.13''",
                weight: "6.17 pounds"
            }, L.ITEM_MAPPING = {
                P001: {
                    type: l.DISPLATE,
                    size: E.MEDIUM,
                    finish: f.MATTE,
                    frame: T.NONE
                },
                P002: {
                    type: l.DISPLATE,
                    size: E.LARGE,
                    finish: f.MATTE,
                    frame: T.NONE
                },
                P003: {
                    type: l.DISPLATE,
                    size: E.XLARGE,
                    finish: f.MATTE,
                    frame: T.NONE
                },
                P004: {
                    type: l.DISPLATE,
                    size: E.MEDIUM,
                    finish: f.GLOSS,
                    frame: T.NONE
                },
                P005: {
                    type: l.DISPLATE,
                    size: E.LARGE,
                    finish: f.GLOSS,
                    frame: T.NONE
                },
                P014: {
                    type: l.DISPLATE,
                    size: E.MEDIUM,
                    finish: f.MATTE,
                    frame: T.NATURAL_WOOD
                },
                P015: {
                    type: l.DISPLATE,
                    size: E.LARGE,
                    finish: f.MATTE,
                    frame: T.NATURAL_WOOD
                },
                P016: {
                    type: l.DISPLATE,
                    size: E.MEDIUM,
                    finish: f.MATTE,
                    frame: T.GRAPHITE
                },
                P017: {
                    type: l.DISPLATE,
                    size: E.LARGE,
                    finish: f.MATTE,
                    frame: T.GRAPHITE
                },
                P018: {
                    type: l.DISPLATE,
                    size: E.MEDIUM,
                    finish: f.MATTE,
                    frame: T.WHITE_WOOD
                },
                P019: {
                    type: l.DISPLATE,
                    size: E.LARGE,
                    finish: f.MATTE,
                    frame: T.WHITE_WOOD
                },
                P020: {
                    type: l.DISPLATE,
                    size: E.MEDIUM,
                    finish: f.MATTE,
                    frame: T.BLACK_WOOD
                },
                P021: {
                    type: l.DISPLATE,
                    size: E.LARGE,
                    finish: f.MATTE,
                    frame: T.BLACK_WOOD
                },
                P030: {
                    type: l.DISPLATE,
                    size: E.MEDIUM,
                    finish: f.GLOSS,
                    frame: T.NATURAL_WOOD
                },
                P031: {
                    type: l.DISPLATE,
                    size: E.LARGE,
                    finish: f.GLOSS,
                    frame: T.NATURAL_WOOD
                },
                P032: {
                    type: l.DISPLATE,
                    size: E.MEDIUM,
                    finish: f.GLOSS,
                    frame: T.GRAPHITE
                },
                P033: {
                    type: l.DISPLATE,
                    size: E.LARGE,
                    finish: f.GLOSS,
                    frame: T.GRAPHITE
                },
                P034: {
                    type: l.DISPLATE,
                    size: E.MEDIUM,
                    finish: f.GLOSS,
                    frame: T.WHITE_WOOD
                },
                P035: {
                    type: l.DISPLATE,
                    size: E.LARGE,
                    finish: f.GLOSS,
                    frame: T.WHITE_WOOD
                },
                P036: {
                    type: l.DISPLATE,
                    size: E.MEDIUM,
                    finish: f.GLOSS,
                    frame: T.BLACK_WOOD
                },
                P037: {
                    type: l.DISPLATE,
                    size: E.LARGE,
                    finish: f.GLOSS,
                    frame: T.BLACK_WOOD
                },
                P038: {
                    type: l.DISPLATE,
                    size: E.MEDIUM,
                    finish: f.TEXTRA,
                    frame: T.NONE
                },
                P039: {
                    type: l.DISPLATE,
                    size: E.LARGE,
                    finish: f.TEXTRA,
                    frame: T.NONE
                }
            }
        }
    }
]);
//#