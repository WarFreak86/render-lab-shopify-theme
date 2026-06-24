"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1353], {
        40097: (t, e, i) => {
            i.d(e, {
                n: () => h
            });
            var r = i(14232),
                n = i(21407),
                s = i(60388),
                o = i(90089),
                a = i(37149),
                u = class extends o.Q {#
                    t;#
                    e = void 0;#
                    i;#
                    r;
                    constructor(t, e) {
                        super(), this.#t = t, this.setOptions(e), this.bindMethods(), this.#n()
                    }
                    bindMethods() {
                        this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
                    }
                    setOptions(t) {
                        let e = this.options;
                        this.options = this.#t.defaultMutationOptions(t), (0, a.f8)(this.options, e) || this.#t.getMutationCache().notify({
                            type: "observerOptionsUpdated",
                            mutation: this.#i,
                            observer: this
                        }), e ? .mutationKey && this.options.mutationKey && (0, a.EN)(e.mutationKey) !== (0, a.EN)(this.options.mutationKey) ? this.reset() : this.#i ? .state.status === "pending" && this.#i.setOptions(this.options)
                    }
                    onUnsubscribe() {
                        this.hasListeners() || this.#i ? .removeObserver(this)
                    }
                    onMutationUpdate(t) {
                        this.#n(), this.#s(t)
                    }
                    getCurrentResult() {
                        return this.#e
                    }
                    reset() {
                        this.#i ? .removeObserver(this), this.#i = void 0, this.#n(), this.#s()
                    }
                    mutate(t, e) {
                        return this.#r = e, this.#i ? .removeObserver(this), this.#i = this.#t.getMutationCache().build(this.#t, this.options), this.#i.addObserver(this), this.#i.execute(t)
                    }#
                    n() {
                        let t = this.#i ? .state ? ? (0, n.$)();
                        this.#e = { ...t,
                            isPending: "pending" === t.status,
                            isSuccess: "success" === t.status,
                            isError: "error" === t.status,
                            isIdle: "idle" === t.status,
                            mutate: this.mutate,
                            reset: this.reset
                        }
                    }#
                    s(t) {
                        s.j.batch(() => {
                            if (this.#r && this.hasListeners()) {
                                let e = this.#e.variables,
                                    i = this.#e.context;
                                t ? .type === "success" ? (this.#r.onSuccess ? .(t.data, e, i), this.#r.onSettled ? .(t.data, null, e, i)) : t ? .type === "error" && (this.#r.onError ? .(t.error, e, i), this.#r.onSettled ? .(void 0, t.error, e, i))
                            }
                            this.listeners.forEach(t => {
                                t(this.#e)
                            })
                        })
                    }
                },
                c = i(67768),
                l = i(37507);

            function h(t, e) {
                let i = (0, c.jE)(e),
                    [n] = r.useState(() => new u(i, t));
                r.useEffect(() => {
                    n.setOptions(t)
                }, [n, t]);
                let o = r.useSyncExternalStore(r.useCallback(t => n.subscribe(s.j.batchCalls(t)), [n]), () => n.getCurrentResult(), () => n.getCurrentResult()),
                    a = r.useCallback((t, e) => {
                        n.mutate(t, e).catch(l.l)
                    }, [n]);
                if (o.error && (0, l.G)(n.options.throwOnError, [o.error])) throw o.error;
                return { ...o,
                    mutate: a,
                    mutateAsync: o.mutate
                }
            }
        },
        46734: (t, e, i) => {
            i.d(e, {
                A: () => n
            });
            var r = i(14232);
            let n = r.forwardRef(function({
                title: t,
                titleId: e,
                ...i
            }, n) {
                return r.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    "data-slot": "icon",
                    ref: n,
                    "aria-labelledby": e
                }, i), t ? r.createElement("title", {
                    id: e
                }, t) : null, r.createElement("path", {
                    d: "m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"
                }))
            })
        },
        97160: (t, e, i) => {
            function r(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, function(t) {
                        var e = function(t, e) {
                            if ("object" != typeof t || !t) return t;
                            var i = t[Symbol.toPrimitive];
                            if (void 0 !== i) {
                                var r = i.call(t, e || "default");
                                if ("object" != typeof r) return r;
                                throw TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === e ? String : Number)(t)
                        }(t, "string");
                        return "symbol" == typeof e ? e : e + ""
                    }(r.key), r)
                }
            }

            function n(t, e, i) {
                return e && r(t.prototype, e), i && r(t, i), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }

            function s() {
                return (s = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = arguments[e];
                        for (var r in i)({}).hasOwnProperty.call(i, r) && (t[r] = i[r])
                    }
                    return t
                }).apply(null, arguments)
            }
            i.d(e, {
                $I: () => A,
                Lc: () => h,
                SR: () => d,
                TZ: () => f,
                ch: () => l,
                oM: () => E
            });
            var o, a, u, c, l, h, f, E, p = function() {
                function t(e) {
                    if (!t.isValid(e)) throw Error("Value `" + e + "` is not a valid ItemType code");
                    this._code = e
                }
                return t.of = function(e) {
                    return new t(e)
                }, t.isValid = function(e) {
                    return null != e && t.PATTERN.test(e)
                }, n(t, [{
                    key: "code",
                    get: function() {
                        return this._code
                    }
                }])
            }();
            p.PATTERN = /^[A-Z]$/;
            var m = function() {
                function t(e) {
                    if (!t.isValid(e)) throw Error("Value `" + e + "` is not a valid Item code");
                    this._code = e
                }
                return t.of = function(e) {
                    return new t(e)
                }, t.isValid = function(e) {
                    return null != e && t.PATTERN.test(e)
                }, t.prototype.itemType = function() {
                    return p.of(this._code.charAt(0))
                }, n(t, [{
                    key: "code",
                    get: function() {
                        return this._code
                    }
                }])
            }();
            m.PATTERN = /^[A-Z](?!000)[A-Z0-9]{3}$/;
            var T = function() {
                function t(e) {
                    if (!t.isValid(e)) throw Error("Value `" + e + "` is not a valid Variant code");
                    this._code = e
                }
                return t.of = function(e) {
                    return new t(e)
                }, t.isValid = function(e) {
                    return null != e && t.PATTERN.test(e)
                }, n(t, [{
                    key: "code",
                    get: function() {
                        return this._code
                    }
                }])
            }();
            T.PATTERN = /^(?!00000000)\d{8}$/;
            var d = function() {
                function t(t, e) {
                    this._item = t, this._variant = e
                }
                t.of = function(e, i) {
                    return new t(e, i)
                }, t.fromCode = function(e) {
                    if (!t.isValid(e)) throw Error("Value `" + e + "` is not a valid SKU code");
                    return new t(m.of(e.substring(0, 4)), T.of(e.substring(4, 12)))
                }, t.isValid = function(e) {
                    return null != e && t.PATTERN.test(e)
                };
                var e = t.prototype;
                return e.itemType = function() {
                    return this._item.itemType()
                }, e.isSameItem = function(t) {
                    return this._item.code === t._item.code
                }, e.isSameItemType = function(t) {
                    return this.itemType().code === t.item.itemType().code
                }, n(t, [{
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
            d.PATTERN = /^[A-Z](?!000)[A-Z0-9]{3}(?!00000000)\d{8}$/, (o = l || (l = {})).DISPLATE = "displate", o.LIMITED_EDITION = "limited_edition", o.ULTRA_LIMITED_EDITION = "ultra_limited_edition", o.LUMINO = "lumino", o.MAGNET = "magnet", o.STAND = "stand", o.UNKNOWN = "unknown", (a = h || (h = {})).MATTE = "matte", a.GLOSS = "gloss", a.TEXTRA = "textra", (u = f || (f = {})).MEDIUM = "m", u.LARGE = "l", u.XLARGE = "xl", (c = E || (E = {})).NONE = "none", c.NATURAL_WOOD = "natural", c.GRAPHITE = "graphite", c.WHITE_WOOD = "white", c.BLACK_WOOD = "black";
            var A = function() {
                function t() {}
                return t.of = function() {
                    return new t
                }, t.isValid = function(e) {
                    return null != e && t.SKU_PATTERN.test(e)
                }, t.getProductType = function(e) {
                    if (!t.isValid(e)) return null;
                    var i = e.substring(0, 4);
                    return t.ITEM_MAPPING[i] ? l.DISPLATE : "PL01" === i ? l.LIMITED_EDITION : "PL02" === i ? l.ULTRA_LIMITED_EDITION : "PL03" === i ? l.LUMINO : /^A00[1-3]$/.test(i) ? l.MAGNET : "A006" === i ? l.STAND : l.UNKNOWN
                }, t.getProductLabel = function(t) {
                    switch (t) {
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
                }, t.getProductPhysicalProperties = function(e, i) {
                    var r = ["US", "UK", "GB"].includes(i),
                        n = null;
                    switch (e) {
                        case f.LARGE:
                            n = r ? t.lImperialDescription : t.lMetricDescription;
                            break;
                        case f.XLARGE:
                            n = r ? t.xlImperialDescription : t.xlMetricDescription;
                            break;
                        default:
                            n = r ? t.mImperialDescription : t.mMetricDescription
                    }
                    var s = r ? t.mImperialDescription.size : t.mMetricDescription.size,
                        o = r ? t.lImperialDescription.size : t.lMetricDescription.size;
                    return {
                        thickness: n.thickness,
                        weight: n.weight,
                        description: n.size,
                        formattedDescription: n.formattedSize,
                        packageContent: function() {
                            switch (e) {
                                case f.LARGE:
                                    return "1 metal poster (" + o + "), 2 protective leaves, 2 magnets";
                                case f.XLARGE:
                                    return "4 metal posters (4 x " + s + "), 4 protective leaves, 4 magnets";
                                default:
                                    return "1 metal poster (" + s + "), 1 protective leaf, 1 magnet"
                            }
                        }()
                    }
                }, t.prototype.parse = function(e, i) {
                    if (!t.isValid(e)) return null;
                    var r = e.substring(0, 4),
                        n = e.substring(4, 12),
                        o = t.ITEM_MAPPING[r];
                    return o ? s({}, o, {
                        artworkId: n,
                        physicalProperties: t.getProductPhysicalProperties(o.size, i)
                    }) : null
                }, t
            }();
            A.SKU_PATTERN = /^[A-Z](?!000)[A-Z0-9]{3}(?!00000000)\d{8}$/, A.mMetricDescription = {
                size: "45 cm / 32 cm",
                formattedSize: "45 x 32cm",
                thickness: "3,50 mm",
                weight: "0,7 kg"
            }, A.lMetricDescription = {
                size: "67.5 cm / 48 cm",
                formattedSize: "67.5 x 48cm",
                thickness: "3,50 mm",
                weight: "1,20 kg"
            }, A.xlMetricDescription = {
                size: "90 cm / 64 cm",
                formattedSize: "90 x 64cm",
                thickness: "3,50 mm",
                weight: "2,80 kg"
            }, A.mImperialDescription = {
                size: "17.7'' / 12.6''",
                formattedSize: "17.7 x 12.6''",
                thickness: "0.13''",
                weight: "1.54 pounds"
            }, A.lImperialDescription = {
                size: "26.6'' / 18.9''",
                formattedSize: "26.6 x 18.9''",
                thickness: "0.13''",
                weight: "2.65 pounds"
            }, A.xlImperialDescription = {
                size: "35.4'' / 25.2''",
                formattedSize: "35.4 x 25.2''",
                thickness: "0.13''",
                weight: "6.17 pounds"
            }, A.ITEM_MAPPING = {
                P001: {
                    type: l.DISPLATE,
                    size: f.MEDIUM,
                    finish: h.MATTE,
                    frame: E.NONE
                },
                P002: {
                    type: l.DISPLATE,
                    size: f.LARGE,
                    finish: h.MATTE,
                    frame: E.NONE
                },
                P003: {
                    type: l.DISPLATE,
                    size: f.XLARGE,
                    finish: h.MATTE,
                    frame: E.NONE
                },
                P004: {
                    type: l.DISPLATE,
                    size: f.MEDIUM,
                    finish: h.GLOSS,
                    frame: E.NONE
                },
                P005: {
                    type: l.DISPLATE,
                    size: f.LARGE,
                    finish: h.GLOSS,
                    frame: E.NONE
                },
                P014: {
                    type: l.DISPLATE,
                    size: f.MEDIUM,
                    finish: h.MATTE,
                    frame: E.NATURAL_WOOD
                },
                P015: {
                    type: l.DISPLATE,
                    size: f.LARGE,
                    finish: h.MATTE,
                    frame: E.NATURAL_WOOD
                },
                P016: {
                    type: l.DISPLATE,
                    size: f.MEDIUM,
                    finish: h.MATTE,
                    frame: E.GRAPHITE
                },
                P017: {
                    type: l.DISPLATE,
                    size: f.LARGE,
                    finish: h.MATTE,
                    frame: E.GRAPHITE
                },
                P018: {
                    type: l.DISPLATE,
                    size: f.MEDIUM,
                    finish: h.MATTE,
                    frame: E.WHITE_WOOD
                },
                P019: {
                    type: l.DISPLATE,
                    size: f.LARGE,
                    finish: h.MATTE,
                    frame: E.WHITE_WOOD
                },
                P020: {
                    type: l.DISPLATE,
                    size: f.MEDIUM,
                    finish: h.MATTE,
                    frame: E.BLACK_WOOD
                },
                P021: {
                    type: l.DISPLATE,
                    size: f.LARGE,
                    finish: h.MATTE,
                    frame: E.BLACK_WOOD
                },
                P030: {
                    type: l.DISPLATE,
                    size: f.MEDIUM,
                    finish: h.GLOSS,
                    frame: E.NATURAL_WOOD
                },
                P031: {
                    type: l.DISPLATE,
                    size: f.LARGE,
                    finish: h.GLOSS,
                    frame: E.NATURAL_WOOD
                },
                P032: {
                    type: l.DISPLATE,
                    size: f.MEDIUM,
                    finish: h.GLOSS,
                    frame: E.GRAPHITE
                },
                P033: {
                    type: l.DISPLATE,
                    size: f.LARGE,
                    finish: h.GLOSS,
                    frame: E.GRAPHITE
                },
                P034: {
                    type: l.DISPLATE,
                    size: f.MEDIUM,
                    finish: h.GLOSS,
                    frame: E.WHITE_WOOD
                },
                P035: {
                    type: l.DISPLATE,
                    size: f.LARGE,
                    finish: h.GLOSS,
                    frame: E.WHITE_WOOD
                },
                P036: {
                    type: l.DISPLATE,
                    size: f.MEDIUM,
                    finish: h.GLOSS,
                    frame: E.BLACK_WOOD
                },
                P037: {
                    type: l.DISPLATE,
                    size: f.LARGE,
                    finish: h.GLOSS,
                    frame: E.BLACK_WOOD
                },
                P038: {
                    type: l.DISPLATE,
                    size: f.MEDIUM,
                    finish: h.TEXTRA,
                    frame: E.NONE
                },
                P039: {
                    type: l.DISPLATE,
                    size: f.LARGE,
                    finish: h.TEXTRA,
                    frame: E.NONE
                }
            }
        }
    }
]);
//#