"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5169, 7550], {
        40097: (e, t, s) => {
            s.d(t, {
                n: () => h
            });
            var r = s(14232),
                i = s(21407),
                n = s(60388),
                a = s(90089),
                o = s(37149),
                l = class extends a.Q {#
                    e;#
                    t = void 0;#
                    s;#
                    r;
                    constructor(e, t) {
                        super(), this.#e = e, this.setOptions(t), this.bindMethods(), this.#i()
                    }
                    bindMethods() {
                        this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
                    }
                    setOptions(e) {
                        let t = this.options;
                        this.options = this.#e.defaultMutationOptions(e), (0, o.f8)(this.options, t) || this.#e.getMutationCache().notify({
                            type: "observerOptionsUpdated",
                            mutation: this.#s,
                            observer: this
                        }), t ? .mutationKey && this.options.mutationKey && (0, o.EN)(t.mutationKey) !== (0, o.EN)(this.options.mutationKey) ? this.reset() : this.#s ? .state.status === "pending" && this.#s.setOptions(this.options)
                    }
                    onUnsubscribe() {
                        this.hasListeners() || this.#s ? .removeObserver(this)
                    }
                    onMutationUpdate(e) {
                        this.#i(), this.#n(e)
                    }
                    getCurrentResult() {
                        return this.#t
                    }
                    reset() {
                        this.#s ? .removeObserver(this), this.#s = void 0, this.#i(), this.#n()
                    }
                    mutate(e, t) {
                        return this.#r = t, this.#s ? .removeObserver(this), this.#s = this.#e.getMutationCache().build(this.#e, this.options), this.#s.addObserver(this), this.#s.execute(e)
                    }#
                    i() {
                        let e = this.#s ? .state ? ? (0, i.$)();
                        this.#t = { ...e,
                            isPending: "pending" === e.status,
                            isSuccess: "success" === e.status,
                            isError: "error" === e.status,
                            isIdle: "idle" === e.status,
                            mutate: this.mutate,
                            reset: this.reset
                        }
                    }#
                    n(e) {
                        n.j.batch(() => {
                            if (this.#r && this.hasListeners()) {
                                let t = this.#t.variables,
                                    s = this.#t.context;
                                e ? .type === "success" ? (this.#r.onSuccess ? .(e.data, t, s), this.#r.onSettled ? .(e.data, null, t, s)) : e ? .type === "error" && (this.#r.onError ? .(e.error, t, s), this.#r.onSettled ? .(void 0, e.error, t, s))
                            }
                            this.listeners.forEach(e => {
                                e(this.#t)
                            })
                        })
                    }
                },
                u = s(67768),
                c = s(37507);

            function h(e, t) {
                let s = (0, u.jE)(t),
                    [i] = r.useState(() => new l(s, e));
                r.useEffect(() => {
                    i.setOptions(e)
                }, [i, e]);
                let a = r.useSyncExternalStore(r.useCallback(e => i.subscribe(n.j.batchCalls(e)), [i]), () => i.getCurrentResult(), () => i.getCurrentResult()),
                    o = r.useCallback((e, t) => {
                        i.mutate(e, t).catch(c.l)
                    }, [i]);
                if (a.error && (0, c.G)(i.options.throwOnError, [a.error])) throw a.error;
                return { ...a,
                    mutate: o,
                    mutateAsync: a.mutate
                }
            }
        },
        55169: (e, t, s) => {
            s.r(t), s.d(t, {
                Newsletter: () => N,
                NewsletterFormType: () => v
            });
            var r, i = s(37876),
                n = s(14232),
                a = s(78970),
                o = s(27555),
                l = s(74773),
                u = s(2661),
                c = s(40097),
                h = s(87050),
                d = s(39313),
                m = s(54111),
                p = s(10769),
                g = s(16909),
                b = s(35891),
                f = s(36256),
                y = s(14619),
                w = s(39432),
                v = ((r = {}).REGULAR = "regular", r.REGISTRATION = "registration", r.CHECKOUT = "checkout", r.SETTINGS = "settings", r.POPUP = "popup", r);
            let x = {
                    email: null,
                    isError: !1
                },
                E = {
                    email: ""
                },
                N = ({
                    formType: e = "regular",
                    className: t,
                    webflow: s = !1
                }) => {
                    let r, {
                            userInfo: v,
                            fetchedUserInfo: N
                        } = (0, n.useContext)(b.cy),
                        S = (0, n.useRef)(null),
                        {
                            pushEvent: R
                        } = (0, u.L)();
                    (0, d.P)(S, {
                        once: !0,
                        callback: () => (0, a.I)(e)
                    });
                    let [j, O] = (0, n.useState)(x), [C, M] = (0, n.useState)(E), {
                        mutate: _,
                        isPending: k
                    } = (r = {
                        onSuccess: async t => {
                            switch (t.status) {
                                case h.it.SUCCESS:
                                    O({
                                        email: "E-mail added to the newsletter",
                                        isError: !1
                                    }), (0, a.N)({
                                        formType: e
                                    }), R({
                                        eventType: "click",
                                        eventName: "newsletterRegistration"
                                    });
                                    break;
                                case h.it.ALREADY_ADDED:
                                    O({
                                        email: "Your email is already in newsletter",
                                        isError: !0
                                    });
                                    break;
                                case h.it.FORMAT_ERROR:
                                    O({
                                        email: "Incorrect email address format",
                                        isError: !0
                                    });
                                    break;
                                default:
                                    O({
                                        email: "Could not add you email, please try again.",
                                        isError: !0
                                    })
                            }
                        },
                        onError: e => {
                            (0, g.vV)("sendNewsletter error " + JSON.stringify(e))
                        }
                    }, (0, c.n)({
                        mutationFn: e => h.$y.newsletterSubscribe({
                            email: e
                        }),
                        onSuccess: r ? .onSuccess,
                        onError: r ? .onError
                    }));
                    if (N && v ? .account.isUserLoggedIn && !v ? .account.shouldMarketingConsentsShow) return null;
                    let A = (0, p.v9)({
                        assetPath: "/images/newsletter/newsletter_discount_v3.jpg",
                        widths: [660, 1320]
                    });
                    return (0, i.jsx)(f.mc, {
                        className: t,
                        variant: "noPaddingMobile",
                        children: (0, i.jsx)(f.xA, {
                            variant: "noGap",
                            children: (0, i.jsxs)("section", {
                                className: (0, y.cn)("col-span-full grid grid-cols-subgrid", s ? "grid!" : null),
                                "data-testid": "newsletter-section",
                                id: "newsletter",
                                ref: S,
                                children: [(0, i.jsx)("img", {
                                    alt: "Newsletter signup with 25% discount offer for Displate products",
                                    className: "col-span-full lg:col-span-6 h-full w-full self-center object-contain lg:object-cover lg:rounded-l-lg",
                                    "data-testid": "newsletter-image",
                                    loading: "lazy",
                                    sizes: A.sizes,
                                    src: A.src
                                }), (0, i.jsxs)("div", {
                                    className: "col-span-full lg:col-span-6 bg-background-information p-8 md:p-14 flex flex-col justify-center lg:rounded-r-lg 2xl:px-20",
                                    children: [(0, i.jsx)("h2", {
                                        className: "w-4/5 sm:w-3/4 2xl:w-full text-heading-h3 sm:text-heading-h2 text-wrap-balance mb-4",
                                        children: "Sign up and never miss a deal"
                                    }), (0, i.jsx)("p", {
                                        className: "text-body-lg mb-4",
                                        children: "Join our newsletter for the latest discounts and Displate goodies"
                                    }), (0, i.jsx)("form", {
                                        className: "flex items-end mb-2",
                                        children: (0, i.jsx)(f.A_, {
                                            actionSlot: (0, i.jsx)(f.$n, {
                                                loading: k,
                                                onClick: () => {
                                                    let e = !C.email.trim().length,
                                                        t = !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/i.test(C.email.trim());
                                                    e || t ? O({ ...j,
                                                        ...(e || t) && {
                                                            email: e ? "Required field" : "Incorrect email address format"
                                                        },
                                                        isError: !0
                                                    }) : (O({
                                                        email: null,
                                                        isError: !1
                                                    }), _(C.email))
                                                },
                                                type: "button",
                                                variant: "primary",
                                                children: "Sign up"
                                            }),
                                            autoComplete: "email",
                                            className: "w-full",
                                            error: j.isError && j.email ? j.email : void 0,
                                            label: "Email address",
                                            name: "email",
                                            onChange: e => {
                                                let {
                                                    target: t
                                                } = e, {
                                                    name: s
                                                } = t, r = t.value;
                                                M({ ...C,
                                                    [s]: r
                                                })
                                            },
                                            placeholder: "Enter your e-mail",
                                            type: "email",
                                            value: C.email
                                        })
                                    }), !j.isError && j.email ? (0, i.jsx)("p", {
                                        className: "text-heading-subtitle-eyebrow text-text-success mb-2",
                                        children: j.email
                                    }) : null, (0, i.jsxs)("p", {
                                        className: "text-body-xs",
                                        children: ["By clicking “Sign up”, you agree to receiving emails and to processing of your personal data in accordance with the", " ", (0, i.jsx)(f.N_, {
                                            asChild: !0,
                                            variant: "secondary",
                                            children: (0, i.jsx)(o.A, {
                                                routeInfo: (0, w.Z)(),
                                                target: "_blank",
                                                children: "Privacy policy"
                                            })
                                        }), ". The data will be processed to customize the newsletter content according to your personal preferences. The controller of your personal data is Displate, i.e. GWD Concept Sp. z o. o. with a registered office in Warsaw. You can unsubscribe at any time by clicking the “Unsubscribe” button in the email footer, unchecking your consent in the “Basic Info” tab of the customer panel, or sending a request to ", (0, i.jsx)(l.$, {
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
        74773: (e, t, s) => {
            s.d(t, {
                $: () => a
            });
            var r = s(37876),
                i = s(27555),
                n = s(36256);
            let a = ({
                className: e,
                routeInfoFn: t,
                variant: s = "primary"
            }) => {
                let a = t(),
                    o = a.route.replace("mailto:", "");
                return (0, r.jsx)(n.N_, {
                    asChild: !0,
                    className: e,
                    variant: s,
                    children: (0, r.jsx)(i.A, {
                        routeInfo: a,
                        children: o
                    })
                })
            }
        },
        78970: (e, t, s) => {
            s.d(t, {
                I: () => n,
                N: () => i
            });
            var r = s(22884);
            let i = ({
                    formType: e
                }) => {
                    (0, r.u)({
                        event: "newsletter_signup",
                        newsletter_form_type: e
                    })
                },
                n = e => {
                    (0, r.u)({
                        event: "newsletter_form_view",
                        newsletter_form_type: e
                    })
                }
        }
    }
]);
//#