(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2839], {
        18975: e => {
            e.exports = {
                inputContainer: "InputText_inputContainer__U_H2t",
                inputContainerDisabled: "InputText_inputContainerDisabled__HzfbS",
                inputContainerError: "InputText_inputContainerError__6_MOT",
                inputContainerIconPositionLeft: "InputText_inputContainerIconPositionLeft__fZLvu",
                inputContainerIconPositionRight: "InputText_inputContainerIconPositionRight__hb4jT",
                input: "InputText_input__RsCFP"
            }
        },
        24424: (e, r, t) => {
            "use strict";
            t.d(r, {
                S: () => u
            });
            var a = t(37876),
                n = t(69241),
                l = t(14232),
                i = t(74311),
                s = t.n(i);
            let d = ({
                onChange: e,
                onKeyPress: r,
                minWidth: t,
                maxWidth: n,
                ref: i,
                ...d
            }) => {
                let [o, p] = (0, l.useState)(""), [c, u] = (0, l.useState)(0), _ = (0, l.useRef)(null), C = (0, l.useCallback)(() => {
                    let e = _.current ? .offsetWidth || 0;
                    u(!t || e > t ? e : t)
                }, [t]);
                return (0, l.useEffect)(() => {
                    C()
                }, [C]), (0, l.useEffect)(() => {
                    C()
                }, [o, C]), (0, a.jsxs)("div", {
                    children: [(0, a.jsx)("input", {
                        className: s().input,
                        onChange: r => {
                            p(r.target.value), e && e(r)
                        },
                        onKeyPress: e => {
                            let t = e.key;
                            r && r(e), "Enter" === t && p("")
                        },
                        ref: i,
                        style: {
                            minWidth: `${t}px`,
                            maxWidth: `${n}px`,
                            width: c
                        },
                        ...d
                    }), (0, a.jsx)("span", {
                        className: s().inputSpan,
                        ref: _,
                        children: o
                    })]
                })
            };
            d.displayName = "InputAutosize";
            var o = t(32204),
                p = t(18975),
                c = t.n(p);
            let u = ({
                type: e,
                name: r,
                readOnly: t,
                disabled: l,
                error: i,
                errorText: s,
                touched: p,
                icon: u,
                label: _,
                hint: C,
                helperLink: h,
                helperText: x,
                iconPosition: w,
                autoComplete: m,
                containerClasses: v,
                autosize: f,
                classes: D,
                ref: k,
                ...b
            }) => {
                let j = (0, n.A)(c().inputContainer, {
                    [c().inputContainerError]: p && i,
                    [c().inputContainerIconPositionLeft]: "left" === w,
                    [c().inputContainerIconPositionRight]: "right" === w,
                    [c().inputContainerDisabled]: l || t
                }, v);
                return (0, a.jsx)(o.V, {
                    classes: D,
                    errorText: s,
                    helperLink: h,
                    helperText: x,
                    hint: C,
                    label: _,
                    name: r,
                    children: (0, a.jsx)("div", {
                        className: j,
                        children: f ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(d, {
                                autoComplete: m,
                                className: c().input,
                                disabled: l,
                                id: r,
                                name: r,
                                readOnly: t,
                                ref: k,
                                type: e || "text",
                                ...b
                            }), u || null]
                        }) : (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("input", {
                                autoComplete: m,
                                className: c().input,
                                disabled: l,
                                id: r,
                                name: r,
                                readOnly: t,
                                ref: k,
                                type: e || "text",
                                ...b
                            }), u || null]
                        })
                    })
                })
            };
            u.displayName = "InputText"
        },
        32204: (e, r, t) => {
            "use strict";
            t.d(r, {
                V: () => o
            });
            var a = t(37876),
                n = t(69241),
                l = t(27555),
                i = t(36256),
                s = t(49878),
                d = t.n(s);
            let o = ({
                children: e,
                label: r,
                name: t,
                hint: s,
                errorText: o,
                helperLink: p,
                helperText: c,
                classes: u
            }) => (0, a.jsxs)("div", {
                className: (0, n.A)(d().container, u ? .inputContainer),
                children: [r ? (0, a.jsx)("label", {
                    className: (0, n.A)(u ? .inputLabel, d().label),
                    htmlFor: t,
                    children: r
                }) : null, s ? (0, a.jsx)("p", {
                    className: d().hint,
                    children: s
                }) : null, e, (0, a.jsx)("div", {
                    className: d().textWrapper,
                    children: o ? (0, a.jsx)("p", {
                        className: d().validationText,
                        children: o
                    }) : (0, a.jsx)("p", {
                        className: d().hiddenText
                    })
                }), c ? (0, a.jsx)("p", {
                    className: d().helperText,
                    children: c
                }) : null, p ? (0, a.jsx)(i.N_, {
                    asChild: !0,
                    className: d().helperLink,
                    children: (0, a.jsx)(l.A, {
                        routeInfo: p.routeInfo,
                        target: "_blank",
                        children: p.text
                    })
                }) : null]
            })
        },
        32333: (e, r, t) => {
            "use strict";
            t.d(r, {
                $: () => c
            });
            var a = t(37876),
                n = t(14232),
                l = t(34026),
                i = t(22733),
                s = t(1121),
                d = t(36256),
                o = t(89121),
                p = t.n(o);
            let c = ({
                isPublic: e,
                link: r,
                onMakePublic: t,
                makePublicHeader: o,
                makePublicMessage: c
            }) => {
                let {
                    displayModal: u,
                    closeModal: _
                } = (0, l.A)(), C = (0, i.C)(), h = (0, n.useCallback)(async e => {
                    if (await C(e, "Link copied to clipboard"), navigator.share) try {
                        await navigator.share({
                            url: e
                        })
                    } catch (e) {
                        console.warn("Share failed or cancelled:", e)
                    }
                }, [C]);
                return {
                    share: (0, n.useCallback)(async () => {
                        e ? h(r) : u((0, a.jsxs)(s.L, {
                            className: p().popup,
                            "data-test-id": "make-public-popup",
                            onClose: _,
                            children: [(0, a.jsx)("h3", {
                                className: p().popupTitle,
                                children: o
                            }), (0, a.jsx)("p", {
                                className: p().popupDescription,
                                children: c
                            }), (0, a.jsxs)("div", {
                                className: p().buttonsContainer,
                                children: [(0, a.jsx)(d.$n, {
                                    onClick: _,
                                    variant: "secondaryDarkOutline",
                                    children: "Cancel"
                                }), (0, a.jsx)(d.$n, {
                                    onClick: async () => {
                                        t().then(() => {
                                            _(), h(r)
                                        })
                                    },
                                    variant: "primary",
                                    children: "Share"
                                })]
                            })]
                        }))
                    }, [e, r, t, h, o, c, u, _])
                }
            }
        },
        37253: e => {
            e.exports = {
                wrapper: "Drawer_wrapper__DWKm0",
                wrapperOpened: "Drawer_wrapperOpened__97itz",
                editHtmlDrawer: "Drawer_editHtmlDrawer__qr4PB",
                editHeaderDrawer: "Drawer_editHeaderDrawer__H9KHI",
                scrollBarWidth: "Drawer_scrollBarWidth__jD0qL",
                drawerContainer: "Drawer_drawerContainer__9_JvQ",
                drawerContainerFullHeight: "Drawer_drawerContainerFullHeight__ditIl",
                clientDrawer: "Drawer_clientDrawer__TZnJO",
                drawerContainerOpened: "Drawer_drawerContainerOpened__ROzgu",
                drawerBox: "Drawer_drawerBox___klHe",
                drawerHeader: "Drawer_drawerHeader__Q7auq",
                closeIcon: "Drawer_closeIcon__P4kSj",
                drawerHeaderScrolled: "Drawer_drawerHeaderScrolled__IVInN",
                drawerHeaderWithButtons: "Drawer_drawerHeaderWithButtons__Gvlwg",
                drawerHeaderNoHeader: "Drawer_drawerHeaderNoHeader__Mlnr4",
                drawerTitle: "Drawer_drawerTitle__4Nld3",
                drawerTitleIcon: "Drawer_drawerTitleIcon__AtTbd",
                drawerTitleText: "Drawer_drawerTitleText__JedG5",
                drawerContent: "Drawer_drawerContent__JjKAd",
                drawerBackdrop: "Drawer_drawerBackdrop___Grpg",
                drawerBackdropOpened: "Drawer_drawerBackdropOpened__ojDvq",
                drawerFooter: "Drawer_drawerFooter__Vwi59"
            }
        },
        43004: (e, r, t) => {
            "use strict";
            t.d(r, {
                A: () => n
            });
            var a = t(37876);
            let n = e => (0, a.jsxs)("svg", {
                fill: "none",
                height: "1em",
                viewBox: "0 0 20 20",
                width: "1em",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: [(0, a.jsx)("mask", {
                    height: 20,
                    id: "mask0_9646_4349",
                    maskUnits: "userSpaceOnUse",
                    style: {
                        maskType: "alpha"
                    },
                    width: 20,
                    x: 0,
                    y: 0,
                    children: (0, a.jsx)("rect", {
                        fill: e.fill || "#D9D9D9",
                        height: 20,
                        width: 20
                    })
                }), (0, a.jsx)("g", {
                    mask: "url(#mask0_9646_4349)",
                    children: (0, a.jsx)("path", {
                        d: "M14.167 18.3327C13.4725 18.3327 12.8823 18.0896 12.3962 17.6035C11.91 17.1174 11.667 16.5271 11.667 15.8327C11.667 15.7493 11.6878 15.5549 11.7295 15.2493L5.87533 11.8327C5.6531 12.041 5.39616 12.2042 5.10449 12.3223C4.81283 12.4403 4.50033 12.4993 4.16699 12.4993C3.47255 12.4993 2.88227 12.2563 2.39616 11.7702C1.91005 11.2841 1.66699 10.6938 1.66699 9.99935C1.66699 9.3049 1.91005 8.71463 2.39616 8.22852C2.88227 7.7424 3.47255 7.49935 4.16699 7.49935C4.50033 7.49935 4.81283 7.55838 5.10449 7.67643C5.39616 7.79449 5.6531 7.95768 5.87533 8.16602L11.7295 4.74935C11.7017 4.65213 11.6844 4.55838 11.6774 4.4681C11.6705 4.37782 11.667 4.27713 11.667 4.16602C11.667 3.47157 11.91 2.88129 12.3962 2.39518C12.8823 1.90907 13.4725 1.66602 14.167 1.66602C14.8614 1.66602 15.4517 1.90907 15.9378 2.39518C16.4239 2.88129 16.667 3.47157 16.667 4.16602C16.667 4.86046 16.4239 5.45074 15.9378 5.93685C15.4517 6.42296 14.8614 6.66602 14.167 6.66602C13.8337 6.66602 13.5212 6.60699 13.2295 6.48893C12.9378 6.37088 12.6809 6.20768 12.4587 5.99935L6.60449 9.41602C6.63227 9.51324 6.64963 9.60699 6.65658 9.69727C6.66352 9.78754 6.66699 9.88824 6.66699 9.99935C6.66699 10.1105 6.66352 10.2112 6.65658 10.3014C6.64963 10.3917 6.63227 10.4855 6.60449 10.5827L12.4587 13.9993C12.6809 13.791 12.9378 13.6278 13.2295 13.5098C13.5212 13.3917 13.8337 13.3327 14.167 13.3327C14.8614 13.3327 15.4517 13.5757 15.9378 14.0618C16.4239 14.548 16.667 15.1382 16.667 15.8327C16.667 16.5271 16.4239 17.1174 15.9378 17.6035C15.4517 18.0896 14.8614 18.3327 14.167 18.3327ZM14.167 16.666C14.4031 16.666 14.601 16.5862 14.7607 16.4264C14.9205 16.2667 15.0003 16.0688 15.0003 15.8327C15.0003 15.5966 14.9205 15.3987 14.7607 15.2389C14.601 15.0792 14.4031 14.9993 14.167 14.9993C13.9309 14.9993 13.733 15.0792 13.5732 15.2389C13.4135 15.3987 13.3337 15.5966 13.3337 15.8327C13.3337 16.0688 13.4135 16.2667 13.5732 16.4264C13.733 16.5862 13.9309 16.666 14.167 16.666ZM4.16699 10.8327C4.4031 10.8327 4.60102 10.7528 4.76074 10.5931C4.92046 10.4334 5.00033 10.2355 5.00033 9.99935C5.00033 9.76324 4.92046 9.56532 4.76074 9.4056C4.60102 9.24588 4.4031 9.16602 4.16699 9.16602C3.93088 9.16602 3.73296 9.24588 3.57324 9.4056C3.41352 9.56532 3.33366 9.76324 3.33366 9.99935C3.33366 10.2355 3.41352 10.4334 3.57324 10.5931C3.73296 10.7528 3.93088 10.8327 4.16699 10.8327ZM14.167 4.99935C14.4031 4.99935 14.601 4.91949 14.7607 4.75977C14.9205 4.60004 15.0003 4.40213 15.0003 4.16602C15.0003 3.9299 14.9205 3.73199 14.7607 3.57227C14.601 3.41254 14.4031 3.33268 14.167 3.33268C13.9309 3.33268 13.733 3.41254 13.5732 3.57227C13.4135 3.73199 13.3337 3.9299 13.3337 4.16602C13.3337 4.40213 13.4135 4.60004 13.5732 4.75977C13.733 4.91949 13.9309 4.99935 14.167 4.99935Z",
                        fill: e.fill || "#005eff"
                    })
                })]
            })
        },
        43371: (e, r, t) => {
            "use strict";
            t.d(r, {
                A: () => n
            });
            var a = t(37876);
            let n = e => (0, a.jsx)("svg", {
                width: "1em",
                height: "1em",
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: (0, a.jsx)("path", {
                    d: "M11.2411 2.99111L12.3661 1.86612C12.8543 1.37796 13.6457 1.37796 14.1339 1.86612C14.622 2.35427 14.622 3.14573 14.1339 3.63388L4.55479 13.213C4.20234 13.5654 3.76762 13.8245 3.28993 13.9668L1.5 14.5L2.03319 12.7101C2.17548 12.2324 2.43456 11.7977 2.78701 11.4452L11.2411 2.99111ZM11.2411 2.99111L13 4.74999",
                    stroke: "#005EFF",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })
            })
        },
        49878: e => {
            e.exports = {
                container: "DefaultInputWrapper_container__ddjbY",
                label: "DefaultInputWrapper_label__BRolb",
                hint: "DefaultInputWrapper_hint__t8rR0",
                textWrapper: "DefaultInputWrapper_textWrapper__1LWY_",
                helperText: "DefaultInputWrapper_helperText__e7Ee2",
                helperLink: "DefaultInputWrapper_helperLink__VC4fg",
                validationText: "DefaultInputWrapper_validationText__Npg2J",
                hiddenText: "DefaultInputWrapper_hiddenText__MfAaA"
            }
        },
        50084: e => {
            e.exports = {
                avatar: "CollectorAvatar_avatar__4SDkr"
            }
        },
        63168: (e, r, t) => {
            "use strict";
            t.d(r, {
                A: () => n
            });
            var a = t(37876);
            let n = e => (0, a.jsxs)("svg", {
                width: "1em",
                height: "1em",
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: [(0, a.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M2.16666 6.66699C2.16666 6.39085 2.39052 6.16699 2.66666 6.16699H13.3333C13.6095 6.16699 13.8333 6.39085 13.8333 6.66699V14.0003C13.8333 14.2765 13.6095 14.5003 13.3333 14.5003C13.0572 14.5003 12.8333 14.2765 12.8333 14.0003V7.16699H3.16666V13.5003H11C11.2761 13.5003 11.5 13.7242 11.5 14.0003C11.5 14.2765 11.2761 14.5003 11 14.5003H2.66666C2.39052 14.5003 2.16666 14.2765 2.16666 14.0003V6.66699Z",
                    fill: "#10111A"
                }), (0, a.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M8 8.16699C8.27614 8.16699 8.5 8.39085 8.5 8.66699V11.3337C8.5 11.6098 8.27614 11.8337 8 11.8337C7.72386 11.8337 7.5 11.6098 7.5 11.3337V8.66699C7.5 8.39085 7.72386 8.16699 8 8.16699Z",
                    fill: "#1185ED"
                }), (0, a.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M5.76082 2.4275C6.35469 1.83363 7.16014 1.5 7.99999 1.5C8.83985 1.5 9.6453 1.83363 10.2392 2.4275C10.833 3.02136 11.1667 3.82681 11.1667 4.66667V6.33333C11.1667 6.60948 10.9428 6.83333 10.6667 6.83333C10.3905 6.83333 10.1667 6.60948 10.1667 6.33333V4.66667C10.1667 4.09203 9.93839 3.54093 9.53206 3.1346C9.12573 2.72827 8.57463 2.5 7.99999 2.5C7.42536 2.5 6.87426 2.72827 6.46793 3.1346C6.0616 3.54093 5.83333 4.09203 5.83333 4.66667V6.33333C5.83333 6.60948 5.60947 6.83333 5.33333 6.83333C5.05719 6.83333 4.83333 6.60948 4.83333 6.33333V4.66667C4.83333 3.82681 5.16696 3.02136 5.76082 2.4275Z",
                    fill: "#10111A"
                })]
            })
        },
        64968: (e, r, t) => {
            "use strict";
            t.d(r, {
                e: () => o,
                l: () => d
            });
            var a = t(37876),
                n = t(14232),
                l = t(69241),
                i = t(37253),
                s = t.n(i);
            let d = (0, n.createContext)({}),
                o = ({
                    children: e
                }) => {
                    let [r, t] = (0, n.useState)(!1), [i, o] = (0, n.useState)(!1), [p, c] = (0, n.useState)(0), u = (0, n.useRef)(null), _ = (0, n.useRef)(null), C = (0, n.useRef)(null);
                    return (0, n.useEffect)(() => {
                        c(window.innerWidth - document.documentElement.clientWidth)
                    }, []), (0, n.useEffect)(() => {
                        let e = document.getElementById("main-container");
                        document.documentElement.style.setProperty("--scrollBarWidth", `${p}px`), r ? (e && e.classList.add(s().scrollBarWidth), document.body.classList.add(s().editHtmlDrawer), C.current ? .classList.add(s().editHeaderDrawer, s().scrollBarWidth)) : (e && e.classList.remove(s().scrollBarWidth), document.body.classList.remove(s().editHtmlDrawer), C.current ? .classList.remove(s().editHeaderDrawer, s().scrollBarWidth))
                    }, [r, p]), (0, a.jsxs)(d.Provider, {
                        value: {
                            setHeaderRef: e => {
                                C.current = e.current
                            },
                            setIsDrawerFullHeight: o,
                            handleBackdropClose: () => t(!1),
                            handleBackdropOpen: () => t(!0),
                            drawerContainerRef: u,
                            drawerBackdropRef: _
                        },
                        children: [e, (0, a.jsx)("div", {
                            className: (0, l.A)(s().drawerContainer, s().clientDrawer, {
                                [s().drawerContainerOpened]: r,
                                [s().drawerContainerFullHeight]: i
                            }),
                            "data-testid": "drawer-container",
                            ref: u
                        }), (0, a.jsx)("div", {
                            className: (0, l.A)(s().drawerBackdrop, {
                                [s().drawerBackdropOpened]: r
                            }),
                            ref: _
                        })]
                    })
                }
        },
        70517: (e, r, t) => {
            "use strict";
            t.d(r, {
                G: () => d
            });
            var a = t(37876),
                n = t(69241),
                l = t(32204),
                i = t(71319),
                s = t.n(i);
            let d = ({
                type: e,
                options: r,
                name: t,
                readOnly: i,
                disabled: d,
                error: o,
                errorText: p,
                touched: c,
                icon: u,
                label: _,
                hint: C,
                helperText: h,
                iconPosition: x,
                hasValidationText: w,
                autoComplete: m,
                helperLink: v,
                className: f,
                classes: D,
                ref: k,
                ...b
            }) => (0, a.jsx)(l.V, {
                classes: {
                    inputContainer: f
                },
                errorText: p,
                helperLink: v,
                helperText: h,
                hint: C,
                label: _,
                name: t,
                children: (0, a.jsx)("div", {
                    className: s().checkboxContainer,
                    "data-testid": "input-checkbox-container",
                    children: r.map(r => (0, a.jsxs)("label", {
                        className: s().checkboxLabel,
                        children: [(0, a.jsx)("input", {
                            autoComplete: m,
                            className: s().input,
                            disabled: d,
                            id: t,
                            name: t,
                            readOnly: i,
                            ref: k,
                            type: e || "checkbox",
                            value: r.value,
                            ...b
                        }), (0, a.jsx)("span", {
                            className: (0, n.A)(s().customCheckbox, D ? .checkbox)
                        }), r.label]
                    }, r.value))
                })
            });
            d.displayName = "InputCheckbox"
        },
        71319: e => {
            e.exports = {
                checkboxContainer: "InputCheckbox_checkboxContainer__6NtUe",
                checkboxLabel: "InputCheckbox_checkboxLabel__sF41R",
                input: "InputCheckbox_input___QUT7",
                customCheckbox: "InputCheckbox_customCheckbox__BBtpY"
            }
        },
        74311: e => {
            e.exports = {
                input: "InputAutosize_input__a2LOu",
                inputSpan: "InputAutosize_inputSpan__BF8z_"
            }
        },
        85820: (e, r, t) => {
            "use strict";
            t.d(r, {
                D: () => s
            });
            var a = t(37876),
                n = t(69241),
                l = t(50084),
                i = t.n(l);
            let s = ({
                coverSrcSet: e,
                className: r
            }) => (0, a.jsx)("img", {
                alt: "Collector Avatar",
                className: (0, n.A)(i().avatar, r),
                "data-testid": "collector-avatar",
                src: e.src
            })
        },
        89121: e => {
            e.exports = {
                popup: "useShareFlow_popup__yVvhV",
                popupTitle: "useShareFlow_popupTitle__KpJPP",
                popupDescription: "useShareFlow_popupDescription__OoVYR",
                buttonsContainer: "useShareFlow_buttonsContainer__UYFT0"
            }
        },
        90572: (e, r, t) => {
            "use strict";
            t.d(r, {
                A: () => a
            });
            let a = "/images/artist/avatar_default.jpg"
        }
    }
]);
//#