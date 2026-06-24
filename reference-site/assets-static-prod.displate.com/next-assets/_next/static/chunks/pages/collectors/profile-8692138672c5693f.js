(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7510], {
        3877: e => {
            e.exports = {
                tooltipWrapper: "DeactivatedArtworksTooltip_tooltipWrapper__a3eED",
                tooltip: "DeactivatedArtworksTooltip_tooltip__kWUVu",
                tooltipText: "DeactivatedArtworksTooltip_tooltipText__t12b0"
            }
        },
        4463: (e, t, s) => {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/collectors/profile", function() {
                return s(24583)
            }])
        },
        6037: (e, t, s) => {
            "use strict";
            s.d(t, {
                s: () => l
            });
            var i = s(14232),
                r = s(89099),
                a = s(23278);
            let l = e => {
                let t = (0, r.useRouter)();
                (0, i.useEffect)(() => {
                    e && (401 === e.status || 403 === e.status) && t.replace((0, a.a)({}).route)
                }, [e, t])
            }
        },
        17495: (e, t, s) => {
            "use strict";
            s.d(t, {
                N: () => l,
                s: () => a
            });
            var i = s(97160),
                r = s(87050);
            let a = (e, t = "P001") => {
                    let s = e.toString().padStart(8, "0");
                    return `${t}${s}`
                },
                l = e => {
                    let t = i.$I.of().parse(e, "US");
                    return t ? {
                        internalId: t.artworkId,
                        size: n(t.size),
                        finish: o(t.finish),
                        frame: c(t.frame)
                    } : null
                },
                o = e => {
                    switch (e) {
                        case i.Lc.MATTE:
                            return r.ZU.MATTE;
                        case i.Lc.GLOSS:
                            return r.ZU.GLOSS;
                        case i.Lc.TEXTRA:
                            return r.ZU.TEXTRA;
                        default:
                            return r.ZU.MATTE
                    }
                },
                n = e => {
                    switch (e) {
                        case i.TZ.MEDIUM:
                            return r.or.MEDIUM;
                        case i.TZ.LARGE:
                            return r.or.LARGE;
                        case i.TZ.XLARGE:
                            return r.or.XLARGE;
                        default:
                            return r.or.MEDIUM
                    }
                },
                c = e => {
                    switch (e) {
                        case i.oM.NONE:
                            return r.wI.NONE;
                        case i.oM.NATURAL_WOOD:
                            return r.wI.NATURAL;
                        case i.oM.GRAPHITE:
                            return r.wI.GRAPHITE;
                        case i.oM.WHITE_WOOD:
                            return r.wI.WHITE;
                        case i.oM.BLACK_WOOD:
                            return r.wI.BLACK;
                        default:
                            return r.wI.NONE
                    }
                }
        },
        19247: e => {
            e.exports = {
                popup: "ReferenceNumberPopup_popup__wL6lH",
                content: "ReferenceNumberPopup_content__CPbAp",
                popupTitle: "ReferenceNumberPopup_popupTitle__tY1ZD",
                popupDesc: "ReferenceNumberPopup_popupDesc__xicOn",
                popupButtons: "ReferenceNumberPopup_popupButtons__trFrK",
                referenceForm: "ReferenceNumberPopup_referenceForm__Z_YPR",
                inputContainer: "ReferenceNumberPopup_inputContainer__ZLdJk",
                referenceInput: "ReferenceNumberPopup_referenceInput__tVeFL",
                referenceNumberImage: "ReferenceNumberPopup_referenceNumberImage__NY2qJ",
                errorMessage: "ReferenceNumberPopup_errorMessage__0MBWT"
            }
        },
        24322: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => r
            });
            var i = s(37876);
            let r = e => (0, i.jsxs)("svg", {
                fill: "none",
                height: "1em",
                viewBox: "0 0 24 24",
                width: "1em",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: [(0, i.jsx)("path", {
                    clipRule: "evenodd",
                    d: "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z",
                    fill: "#000",
                    fillRule: "evenodd"
                }), (0, i.jsx)("path", {
                    clipRule: "evenodd",
                    d: "M12 17.75C11.5858 17.75 11.25 17.4142 11.25 17L11.25 11C11.25 10.5858 11.5858 10.25 12 10.25C12.4142 10.25 12.75 10.5858 12.75 11L12.75 17C12.75 17.4142 12.4142 17.75 12 17.75Z",
                    fill: "#000",
                    fillRule: "evenodd"
                }), (0, i.jsx)("path", {
                    d: "M10.9997 6.92611C10.9997 6.41472 11.4142 6.00016 11.9256 6.00016C12.437 6.00016 12.8516 6.41472 12.8516 6.92611C12.8516 7.43749 12.437 7.85205 11.9256 7.85205C11.4142 7.85205 10.9997 7.43749 10.9997 6.92611Z",
                    fill: "#000"
                }), (0, i.jsx)("path", {
                    clipRule: "evenodd",
                    d: "M11.9256 7.00016C11.9665 7.00016 11.9997 6.96701 11.9997 6.92611C11.9997 6.88521 11.9665 6.85205 11.9256 6.85205C11.8847 6.85205 11.8516 6.88521 11.8516 6.92611C11.8516 6.96701 11.8847 7.00016 11.9256 7.00016ZM11.9256 6.00016C11.4142 6.00016 10.9997 6.41472 10.9997 6.92611C10.9997 7.43749 11.4142 7.85205 11.9256 7.85205C12.437 7.85205 12.8516 7.43749 12.8516 6.92611C12.8516 6.41472 12.437 6.00016 11.9256 6.00016Z",
                    fill: "#000",
                    fillRule: "evenodd"
                })]
            })
        },
        24583: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                __N_SSP: () => eZ,
                default: () => eW
            });
            var i = s(37876),
                r = s(14232),
                a = s(64968),
                l = s(15657),
                o = s(52293),
                n = s(89603),
                c = s(6037),
                u = s(64231),
                d = s(77518),
                p = s(39755),
                h = s(35891),
                m = s(67768),
                g = s(57934),
                C = s(27555),
                x = s(72944),
                v = s(68451),
                y = s(69241),
                _ = s(38757),
                f = s(95685),
                b = s(98315),
                j = s(45867),
                N = s(88157),
                w = s(24806),
                k = s(2661),
                P = s(18120),
                L = s(54111),
                D = s(32902),
                A = s(43614);
            let I = (e, t, s) => s ? e.startsWith("PL01") || e.startsWith("PL02") ? (0, A.X)({
                externalId: t.toString()
            }) : (0, D.s)({
                collectorNick: s,
                sku: e
            }) : (0, L.qr)({
                useCognitoLogin: !1
            });
            var T = s(36256),
                M = s(87050),
                R = s(29357),
                S = s.n(R);
            let E = ({
                index: e,
                item: t,
                metadata: s,
                additionalComponent: a,
                username: l
            }) => {
                let o = (0, r.useRef)(null),
                    [n, c] = (0, r.useState)(!0),
                    u = (0, r.useMemo)(() => t.orientation === M.JH.HORIZONTAL ? w.Xn : w.pn, [t.orientation]),
                    d = (0, b.SS)({
                        index: e,
                        item: t,
                        metadata: s
                    }),
                    {
                        setOnHold: p
                    } = (0, P.$)({
                        ref: o,
                        message: d,
                        initialOnHold: !0
                    }),
                    {
                        pushEvent: h
                    } = (0, k.L)();
                return (0, i.jsxs)("div", {
                    className: (0, y.A)(S().masonryGridItemContainer, {
                        [S().masonryGridItemContainerHorizontal]: t.orientation === M.JH.HORIZONTAL,
                        [S().loading]: n
                    }),
                    "data-testid": "masonry-grid-item",
                    children: [a ? a({
                        eventMessage: d,
                        externalId: t.externalId,
                        sku: t.sku,
                        index: e
                    }) : null, (0, i.jsx)(T.N_, {
                        asChild: !0,
                        className: S().masonryGridItemLink,
                        children: (0, i.jsx)(C.A, {
                            "data-testid": "masonry-grid-item-link",
                            onClick: () => {
                                (0, f.v)(d, "artwork"), (0, _.V)(d, h), (0, b.kw)({
                                    index: e,
                                    metadata: s,
                                    externalId: t.externalId
                                })
                            },
                            routeInfo: I(t.sku, t.externalId, l),
                            children: (0, i.jsxs)("div", {
                                className: S().masonryGridImageWrapper,
                                ref: o,
                                children: [(0, i.jsx)(N.V, {
                                    alt: t.title,
                                    artworkOrientation: t.orientation,
                                    artworkSets: u,
                                    className: S().artworkPicture,
                                    imageCoreUrl: t.imageCoreUrl,
                                    loading: "lazy",
                                    onLoaded: () => {
                                        p(!1), c(!1)
                                    }
                                }), (0, i.jsx)(j.T, {
                                    className: "absolute left-2 top-2 flex flex-row gap-1",
                                    labels: t.labels
                                })]
                            })
                        })
                    })]
                })
            };
            var O = s(16373),
                H = s(34026);
            let F = e => (0, i.jsxs)("svg", {
                width: "1em",
                height: "1em",
                viewBox: "0 0 56 56",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: [(0, i.jsx)("path", {
                    d: "M46.0283 53.0186H10.8871C10.6018 53.0186 10.3703 52.7841 10.3703 52.4953V3.32315C10.3703 3.03433 10.6018 2.79993 10.8871 2.79993H45.5115C45.7968 2.79993 46.0283 3.03433 46.0283 3.32315V48.8536",
                    stroke: "#10111A",
                    strokeWidth: 1.5,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0, i.jsx)("path", {
                    d: "M14.8851 11.1717L17.0845 9.07874",
                    stroke: "#10111A",
                    strokeWidth: 1.5,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0, i.jsx)("path", {
                    d: "M26.6593 46.1159L29.7435 43.1858",
                    stroke: "#10111A",
                    strokeWidth: 1.5,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0, i.jsx)("path", {
                    d: "M19.3417 15.3536L28.1477 6.9859",
                    stroke: "#10111A",
                    strokeWidth: 1.5,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0, i.jsx)("path", {
                    d: "M32.7117 48.8369L41.5218 40.465",
                    stroke: "#10111A",
                    strokeWidth: 1.5,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0, i.jsx)("path", {
                    d: "M26.7406 32.5516C25.9648 31.7949 25.6093 30.8079 25.6093 29.7222C25.6093 25.7084 30.8132 25.3136 30.8132 22.5171C30.8132 21.234 29.8112 20.1483 27.7426 20.1483C25.7386 20.1483 24.3164 21.0366 23.2497 22.4513L21.0518 19.9838C22.7002 17.9111 25.1891 16.7267 28.0981 16.7267C32.1708 16.7267 34.6597 18.931 34.6597 21.892C34.6597 26.7612 28.9062 27.156 28.9062 30.0841C28.9062 30.6105 29.1648 31.2356 29.6173 31.5646L26.7406 32.5516ZM27.9042 39.3619C26.6759 39.3619 25.6416 38.2762 25.6416 37.026C25.6416 35.8087 26.6759 34.7559 27.9042 34.7559C29.1325 34.7559 30.1668 35.8087 30.1668 37.026C30.1668 38.2762 29.1325 39.3619 27.9042 39.3619Z",
                    fill: "black"
                })]
            });
            var K = s(40097),
                V = s(37675),
                Q = s(8341),
                W = s(19596);
            let Z = e => ["collector", "collected-artworks", e],
                U = () => Z("public"),
                B = () => {
                    let e = (0, W.q)({
                            initialPageParam: 0,
                            queryKey: U(),
                            queryFn: async ({
                                pageParam: e = 0
                            }) => M.$y.getCollectorCollectedArtworksV5(M.kl.PINNED, M.bv.PUBLIC, e, 108),
                            getNextPageParam: e => {
                                let t = e.offset + e.limit;
                                return t < e.totalCount ? t : void 0
                            }
                        }),
                        t = e.isPending || e.isFetching && !e.data ? .pages ? .length;
                    return { ...e,
                        isPending: t
                    }
                };
            var G = s(84355),
                q = s.n(G),
                $ = s(1121),
                z = s(95383),
                J = s.n(z);
            let X = ({
                obfuscatedEmail: e,
                onRecover: t,
                onClose: s
            }) => (0, i.jsxs)($.L, {
                className: J().popup,
                dataTestId: "missing-displate-popup",
                onClose: s,
                children: [(0, i.jsx)("h3", {
                    className: J().popupTitle,
                    children: "Missing Displate"
                }), (0, i.jsxs)("p", {
                    className: J().popupDesc,
                    children: ["Recover missing Displates bought with the", " ", (0, i.jsx)("span", {
                        className: J().email,
                        children: e
                    })]
                }), (0, i.jsx)(T.$n, {
                    fullWidth: !0,
                    onClick: t,
                    children: "Recover"
                }), (0, i.jsx)("p", {
                    className: J().popupSubDesc,
                    children: "By clicking 'Recover,' you confirm that you own this email and agree to link all past purchases to this account."
                })]
            });
            var Y = s(88992);
            let ee = ["addCollectedArtworkByReferenceNumber"];
            var et = s(10769),
                es = s(16909),
                ei = s(19247),
                er = s.n(ei);
            let ea = ({
                    onClose: e
                }) => {
                    let [t, s] = (0, r.useState)(""), a = (0, r.useRef)([]), {
                        mutate: l,
                        isPending: o
                    } = (0, K.n)({
                        mutationKey: ee,
                        mutationFn: ({
                            passportReferenceNumber: e
                        }) => M.$y.addCollectedArtworkByReferenceNumberV5({
                            passportReferenceNumber: e
                        })
                    }), n = (0, m.jE)(), {
                        enqueueToast: c
                    } = (0, T.oS)(), {
                        register: u,
                        handleSubmit: d,
                        setValue: p,
                        watch: h
                    } = (0, Y.mN)({
                        defaultValues: {
                            char1: "",
                            char2: "",
                            char3: "",
                            char4: "",
                            char5: "",
                            char6: "",
                            char7: "",
                            char8: ""
                        }
                    }), g = Object.values(h()).every(e => e && "" !== e && e.trim().length > 0), C = (0, et.v9)({
                        assetPath: "/images/collector/reference-number.gif"
                    }).src;
                    return (0, i.jsxs)($.L, {
                        className: er().popup,
                        dataTestId: "add-manually-displate-popup",
                        onClose: e,
                        children: [(0, i.jsx)("h3", {
                            className: er().popupTitle,
                            children: "Add manually"
                        }), (0, i.jsxs)("div", {
                            className: er().content,
                            children: [(0, i.jsx)("img", {
                                alt: "Reference Number",
                                className: er().referenceNumberImage,
                                src: C
                            }), (0, i.jsx)("p", {
                                className: er().popupDesc,
                                children: "Reference Number (from the back of Displate)"
                            }), (0, i.jsxs)("form", {
                                className: er().referenceForm,
                                onSubmit: d(t => {
                                    l({
                                        passportReferenceNumber: Object.values(t).join("")
                                    }, {
                                        onSuccess: () => {
                                            c({
                                                message: "\uD83C\uDF89 Successfully added Displate \uD83C\uDF89",
                                                variant: "success"
                                            }), n.invalidateQueries({
                                                queryKey: U()
                                            }), e()
                                        },
                                        onError: e => {
                                            404 !== e.status && 409 !== e.status ? c({
                                                message: "Failed to add Displate, contact support",
                                                variant: "error"
                                            }) : s((0, es.tS)(e))
                                        }
                                    })
                                }),
                                children: [(0, i.jsxs)("div", {
                                    className: er().inputContainer,
                                    children: [Array.from({
                                        length: 8
                                    }, (e, t) => (0, i.jsx)("input", {
                                        className: er().referenceInput,
                                        "data-testid": `reference-input-${t+1}`,
                                        maxLength: 1,
                                        type: "text",
                                        ...u(`char${t+1}`),
                                        onChange: e => {
                                            var i;
                                            let r;
                                            return i = e.target.value, s(""), void((r = i).length > 1 && (r = r.slice(-1)), p(`char${t+1}`, r.toUpperCase()), r && t < 7 && setTimeout(() => {
                                                a.current[t + 1] ? .focus()
                                            }, 0))
                                        },
                                        onKeyDown: e => {
                                            "Backspace" === e.key && !e.currentTarget.value && t > 0 && a.current[t - 1] ? .focus()
                                        },
                                        ref: e => {
                                            a.current[t] = e
                                        }
                                    }, t)), (0, i.jsx)("p", {
                                        className: er().errorMessage,
                                        children: t
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: er().popupButtons,
                                    children: [(0, i.jsx)(T.$n, {
                                        fullWidth: !0,
                                        onClick: e,
                                        type: "button",
                                        variant: "secondaryDarkOutline",
                                        children: "Cancel"
                                    }), (0, i.jsx)(T.$n, {
                                        disabled: !g || o,
                                        fullWidth: !0,
                                        type: "submit",
                                        variant: "primary",
                                        children: "Add"
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                el = ({
                    obfuscatedEmail: e,
                    isToRecover: t
                }) => {
                    let s, {
                            displayModal: r,
                            closeModal: a
                        } = (0, H.A)(),
                        {
                            mutate: l
                        } = (s = (0, m.jE)(), (0, K.n)({
                            mutationFn: () => Q.$.updateCollectorProfileConsentV4({
                                isConsentForMissingArtworksChecked: !0
                            }),
                            onSuccess: () => {
                                s.invalidateQueries({
                                    queryKey: U()
                                }), s.invalidateQueries({
                                    queryKey: V.m
                                })
                            }
                        })),
                        o = () => {
                            l(), a()
                        };
                    return (0, i.jsxs)("div", {
                        className: q().missingDisplates,
                        "data-testid": "collector-missing-displates",
                        children: [(0, i.jsx)(F, {
                            height: 64,
                            width: 64
                        }), (0, i.jsxs)("div", {
                            children: [(0, i.jsx)("p", {
                                className: q().missingDisplatesTitle,
                                children: "Bought or received a Displate from the secondary market? Easily add it here to keep your collection complete."
                            }), (0, i.jsxs)("div", {
                                className: q().buttonContainer,
                                children: [t ? (0, i.jsx)("button", {
                                    className: q().editBtn,
                                    onClick: () => r((0, i.jsx)(X, {
                                        obfuscatedEmail: e,
                                        onClose: a,
                                        onRecover: o
                                    })),
                                    type: "button",
                                    children: (0, i.jsx)("span", {
                                        className: q().buttonText,
                                        children: "Recover your Displates"
                                    })
                                }) : null, (0, i.jsx)("button", {
                                    className: q().editBtn,
                                    onClick: () => r((0, i.jsx)(ea, {
                                        onClose: a
                                    })),
                                    type: "button",
                                    children: (0, i.jsx)("span", {
                                        className: q().buttonText,
                                        children: "Add manually"
                                    })
                                })]
                            })]
                        })]
                    })
                };
            var eo = s(89099),
                en = s(45168);
            let ec = e => (0, i.jsx)("svg", {
                width: "1em",
                height: "1em",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M11.4697 3.46967C11.7626 3.17678 12.2374 3.17678 12.5303 3.46967L16.0303 6.96967C16.3232 7.26256 16.3232 7.73744 16.0303 8.03033C15.7374 8.32322 15.2626 8.32322 14.9697 8.03033L12.75 5.81066V14.5C12.75 14.9142 12.4142 15.25 12 15.25C11.5858 15.25 11.25 14.9142 11.25 14.5V5.81066L9.03033 8.03033C8.73744 8.32322 8.26256 8.32322 7.96967 8.03033C7.67678 7.73744 7.67678 7.26256 7.96967 6.96967L11.4697 3.46967ZM4.25 11.5C4.25 11.0858 4.58579 10.75 5 10.75H7C7.41421 10.75 7.75 11.0858 7.75 11.5C7.75 11.9142 7.41421 12.25 7 12.25H5.75V18.75H18.25V12.25H17C16.5858 12.25 16.25 11.9142 16.25 11.5C16.25 11.0858 16.5858 10.75 17 10.75H19C19.4142 10.75 19.75 11.0858 19.75 11.5V19.5C19.75 19.9142 19.4142 20.25 19 20.25H5C4.58579 20.25 4.25 19.9142 4.25 19.5V11.5Z",
                    fill: "#10111A"
                })
            });
            var eu = s(4928);
            let ed = () => Z("private"),
                ep = (e, t) => {
                    let s = (0, m.jE)();
                    return (0, K.n)({
                        mutationKey: ["updateCollectorCollectedArtworkVisibility", e.visibility],
                        mutationFn: t => M.$y.updateCollectorCollectedArtworkVisibilityV4(t, {
                            visibility: e.visibility
                        }),
                        onMutate: async t => {
                            await s.cancelQueries({
                                queryKey: e.sourceQueryKey()
                            }), await s.cancelQueries({
                                queryKey: e.targetQueryKey()
                            });
                            let i = s.getQueryData(e.sourceQueryKey()),
                                r = s.getQueryData(e.targetQueryKey());
                            return s.setQueryData(e.sourceQueryKey(), e => e ? .pages ? { ...e,
                                pages: e.pages.map(e => ({ ...e,
                                    artworks: e.artworks ? .filter(e => e.sku !== t) || []
                                }))
                            } : e), {
                                previousPrivate: e.visibility === M.bv.HIDDEN ? r : i,
                                previousPublic: e.visibility === M.bv.PUBLIC ? r : i
                            }
                        },
                        onError: (t, i, r) => {
                            r ? .previousPrivate && s.setQueryData(e.visibility === M.bv.HIDDEN ? e.targetQueryKey() : e.sourceQueryKey(), r.previousPrivate), r ? .previousPublic && s.setQueryData(e.visibility === M.bv.PUBLIC ? e.targetQueryKey() : e.sourceQueryKey(), r.previousPublic)
                        },
                        onSettled: () => {
                            s.invalidateQueries({
                                queryKey: e.sourceQueryKey()
                            }), s.invalidateQueries({
                                queryKey: e.targetQueryKey()
                            })
                        },
                        ...t
                    })
                };
            var eh = s(24654);
            let em = ({
                externalId: e,
                hideOnScroll: t,
                sku: s,
                collectorNick: r,
                onShowHandle: a
            }) => {
                let l, o = (0, eo.useRouter)(),
                    {
                        handleDrawerClose: n
                    } = (0, en.b)(),
                    {
                        enqueueToast: c
                    } = (0, T.oS)(),
                    u = I(s, e, r),
                    {
                        mutate: d,
                        isPending: p
                    } = (l = {
                        onSuccess: () => {
                            a ? .()
                        }
                    }, ep({
                        visibility: M.bv.PUBLIC,
                        sourceQueryKey: ed,
                        targetQueryKey: U
                    }, l)),
                    h = [{
                        icon: (0, i.jsx)(ec, {
                            height: 24,
                            width: 24
                        }),
                        label: "View Details",
                        onClick: () => {
                            r && s && o.push(u.route)
                        }
                    }, {
                        icon: (0, i.jsx)(eu.A, {
                            height: 24,
                            width: 24
                        }),
                        label: "Unhide Artwork",
                        onClick: () => {
                            d(s, {
                                onSuccess: () => {
                                    a ? .(), c({
                                        message: "Artwork is now visible",
                                        variant: "success"
                                    })
                                },
                                onError: () => {
                                    c({
                                        message: "Failed to change artwork visibility",
                                        variant: "error"
                                    })
                                }
                            }), n()
                        }
                    }];
                return (0, i.jsx)(eh.o, {
                    hideOnScroll: t,
                    isPending: p,
                    menuItems: h,
                    testId: "collector-context-menu-private",
                    variant: "private"
                })
            };
            var eg = s(13834),
                eC = s(90508),
                ex = s(87801);
            let ev = e => (0, i.jsx)("svg", {
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M11.0306 4.61706L9.16995 8.60056L4.9023 9.25648C4.70834 9.28902 4.52693 9.37383 4.3776 9.50179C4.22827 9.62976 4.11668 9.79602 4.05484 9.98268C3.993 10.1693 3.98325 10.3693 4.02665 10.5611C4.07005 10.7529 4.16495 10.9292 4.30113 11.0711L7.42129 14.2821L6.69668 18.7501C6.66118 18.9486 6.68285 19.153 6.75917 19.3396C6.83548 19.5261 6.9633 19.6872 7.12769 19.8038C7.29208 19.9205 7.48628 19.9881 7.68761 19.9986C7.88895 20.0091 8.08912 19.9621 8.26476 19.8631L11.9975 17.7925L15.7303 19.8631C15.9059 19.9621 16.1061 20.0091 16.3074 19.9986C16.5088 19.9881 16.703 19.9205 16.8674 19.8038C17.0317 19.6872 17.1596 19.5261 17.2359 19.3396C17.3122 19.153 17.3339 18.9486 17.2984 18.7501L16.5738 14.2821L19.6916 11.0711C19.8302 10.9302 19.9273 10.7538 19.972 10.5613C20.0168 10.3689 20.0077 10.1678 19.9455 9.98017C19.8834 9.79257 19.7707 9.62576 19.6198 9.49807C19.4689 9.37039 19.2858 9.28679 19.0905 9.25648L14.8251 8.60056L12.9621 4.61706C12.8764 4.43339 12.7402 4.27786 12.5694 4.16862C12.3986 4.05937 12.2003 4.00089 11.9975 4C11.5975 4 11.2135 4.22854 11.0306 4.61706Z",
                        fill: "#005eff"
                    })
                }),
                ey = e => (0, i.jsx)("svg", {
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M11.0306 4.61706L9.16995 8.60056L4.9023 9.25648C4.70834 9.28902 4.52693 9.37383 4.3776 9.50179C4.22827 9.62976 4.11668 9.79602 4.05484 9.98268C3.993 10.1693 3.98325 10.3693 4.02665 10.5611C4.07005 10.7529 4.16495 10.9292 4.30113 11.0711L7.42129 14.2821L6.69668 18.7501C6.66118 18.9486 6.68285 19.153 6.75917 19.3396C6.83548 19.5261 6.9633 19.6872 7.12769 19.8038C7.29208 19.9205 7.48628 19.9881 7.68761 19.9986C7.88895 20.0091 8.08912 19.9621 8.26476 19.8631L11.9975 17.7925L15.7303 19.8631C15.9059 19.9621 16.1061 20.0091 16.3074 19.9986C16.5088 19.9881 16.703 19.9205 16.8674 19.8038C17.0318 19.6872 17.1596 19.5261 17.2359 19.3396C17.3122 19.153 17.3339 18.9486 17.2984 18.7501L16.5738 14.2821L19.6916 11.0711C19.8302 10.9302 19.9273 10.7538 19.9721 10.5613C20.0168 10.3689 20.0077 10.1678 19.9455 9.98017C19.8834 9.79257 19.7707 9.62576 19.6198 9.49807C19.4689 9.37039 19.2858 9.28679 19.0905 9.25648L14.8251 8.60056L12.9621 4.61706C12.8764 4.43339 12.7402 4.27786 12.5694 4.16862C12.3986 4.05937 12.2003 4.00089 11.9975 4C11.5975 4 11.2135 4.22854 11.0306 4.61706Z",
                        stroke: "#10111A",
                        strokeWidth: 1.4
                    })
                }),
                e_ = ["togglePinCollectedArtwork"];
            var ef = s(67448),
                eb = s.n(ef),
                ej = s(51192),
                eN = s(60946),
                ew = s.n(eN);
            let ek = [{
                    value: "gift purchase",
                    label: "Gift Purchase"
                }, {
                    value: "shared account",
                    label: "Shared Account"
                }, {
                    value: "sensitive",
                    label: "Sensitive"
                }, {
                    value: "i sold it",
                    label: "Sold it"
                }, {
                    value: "other",
                    label: "Other"
                }],
                eP = ({
                    onSubmit: e
                }) => {
                    let {
                        closeModal: t
                    } = (0, H.A)(), {
                        register: s,
                        handleSubmit: r,
                        watch: a
                    } = (0, Y.mN)(), l = a("hideReason");
                    return (0, i.jsxs)($.L, {
                        dataTestId: "add-reason-popup",
                        onClose: t,
                        children: [(0, i.jsx)("h3", {
                            className: ew().heading,
                            children: "Hide Displate"
                        }), (0, i.jsx)("p", {
                            className: ew().description,
                            children: "Your selected reason will not be connected to you or your Displates. Information used for anonymous statistics only"
                        }), (0, i.jsxs)("form", {
                            className: ew().form,
                            onSubmit: r(() => {
                                (0, ej.O)({
                                    elementId: "hide_displate_button",
                                    elementVariant: l,
                                    interactionType: "click"
                                }), e(), t()
                            }),
                            children: [ek.map(({
                                value: e,
                                label: t
                            }) => (0, i.jsxs)("label", {
                                className: ew().radioLabel,
                                children: [(0, i.jsx)("input", {
                                    className: ew().radioInput,
                                    type: "radio",
                                    value: e,
                                    ...s("hideReason")
                                }), t]
                            }, e)), (0, i.jsx)(T.$n, {
                                className: ew().button,
                                disabled: !l,
                                fullWidth: !0,
                                type: "submit",
                                children: "Hide"
                            })]
                        })]
                    }, "add-reason-popup")
                },
                eL = ({
                    externalId: e,
                    hideOnScroll: t,
                    sku: s,
                    collectorNick: a,
                    onHideHandle: l
                }) => {
                    let o = (0, r.useRef)(null),
                        n = (0, eo.useRouter)(),
                        {
                            displayModal: c
                        } = (0, H.A)(),
                        {
                            handleDrawerClose: u
                        } = (0, en.b)(),
                        {
                            mutate: d
                        } = (0, K.n)({
                            mutationKey: e_,
                            mutationFn: ({
                                sku: e,
                                isPinned: t
                            }) => M.$y.updateCollectorCollectedArtworkPinV4(e, {
                                isPinned: t
                            }),
                            gcTime: 0
                        }),
                        {
                            checkIsItemPinned: p,
                            pinnedCount: h
                        } = (() => {
                            let {
                                data: e
                            } = B();
                            return {
                                checkIsItemPinned: t => e ? .pages.some(e => e.items.some(e => e.sku === t && !0 === e.isPinned)),
                                pinnedCount: e ? .pages.reduce((e, t) => e + t.items.filter(e => !0 === e.isPinned).length, 0) || 0
                            }
                        })(),
                        m = I(s, e, a),
                        g = p(s),
                        {
                            mutate: C,
                            isPending: x
                        } = ep({
                            visibility: M.bv.HIDDEN,
                            sourceQueryKey: U,
                            targetQueryKey: ed
                        }, void 0),
                        {
                            enqueueToast: v
                        } = (0, T.oS)(),
                        y = () => {
                            C(s, {
                                onSuccess: () => {
                                    l ? .(), v({
                                        message: "Artwork is now hidden",
                                        variant: "success"
                                    })
                                },
                                onError: () => {
                                    v({
                                        message: "Failed to change artwork visibility",
                                        variant: "error"
                                    })
                                }
                            }), u()
                        },
                        _ = [{
                            icon: (0, i.jsx)(ec, {
                                height: 24,
                                width: 24
                            }),
                            label: "View Details",
                            onClick: () => {
                                a && s && n.push(m.route)
                            }
                        }, ...g ? [{
                            icon: (0, i.jsx)(ev, {
                                height: 24,
                                width: 24
                            }),
                            label: "Unpin from top",
                            onClick: () => {
                                d({
                                    sku: s,
                                    isPinned: !1
                                }, {
                                    onSuccess: () => {
                                        l ? .(), v({
                                            message: `📌 Displate unpinned (${h-1} / 20)`,
                                            variant: "success"
                                        }), u()
                                    }
                                })
                            }
                        }] : [{
                            icon: (0, i.jsx)(ey, {
                                height: 24,
                                width: 24
                            }),
                            label: (0, i.jsxs)("div", {
                                className: eb().pinToTop,
                                children: [(0, i.jsxs)("span", {
                                    children: ["Pin to top (", h, " / 20)"]
                                }), (0, i.jsx)("span", {
                                    className: eb().pinToTopSubLabel,
                                    children: "Will be moved to top of the list"
                                })]
                            }),
                            onClick: () => {
                                !g && h >= 20 ? v({
                                    message: `📌 You can only have 20 Displates pinned`,
                                    variant: "error"
                                }) : d({
                                    sku: s,
                                    isPinned: !0
                                }, {
                                    onSuccess: () => {
                                        l ? .(), v({
                                            message: `📌 Displate pinned (${h+1} / 20)`,
                                            variant: "success"
                                        }), u()
                                    }
                                })
                            }
                        }], {
                            icon: (0, i.jsx)(ex.A, {}),
                            label: "Add to set",
                            onClick: () => {
                                c((0, i.jsx)(eg.PopupAddToSets, {
                                    externalId: e,
                                    sku: s,
                                    stage: eC.i.EDIT,
                                    triggerSource: eC.H.ADD_TO_SET_COLLECTED_ARTWORK_BUTTON
                                })), o.current ? .closeMenu()
                            }
                        }, {
                            icon: (0, i.jsx)(eu.A, {
                                height: 24,
                                width: 24
                            }),
                            label: "Hide",
                            onClick: () => {
                                c((0, i.jsx)(eP, {
                                    onSubmit: y
                                }))
                            }
                        }];
                    return (0, i.jsx)(eh.o, {
                        hideOnScroll: t,
                        isPending: x,
                        menuItems: _,
                        ref: o,
                        testId: "collector-context-menu-public",
                        variant: "public"
                    })
                };
            var eD = s(3231),
                eA = s(24322),
                eI = s(3877),
                eT = s.n(eI);
            let eM = ({
                deactivatedCount: e
            }) => (0, i.jsxs)("div", {
                className: eT().tooltipWrapper,
                children: [(0, i.jsxs)("span", {
                    children: [e, " Displate ", e > 1 ? "artworks" : "artwork", " unavailable"]
                }), (0, i.jsx)(eD.A, {
                    className: eT().tooltip,
                    icon: (0, i.jsx)(eA.A, {}),
                    isActive: !0,
                    position: eD.n.DOWN_MID,
                    children: (0, i.jsx)("span", {
                        className: eT().tooltipText,
                        children: "Some Displate artworks may be unavailable due to exclusive drops, limited editions agreements, artists shop closures, custom prints, or legacy artwork removal."
                    })
                })]
            });
            var eR = s(84583),
                eS = s(17495);
            let eE = e => e ? e.map(e => ({
                internalId: e.internalId,
                externalId: e.externalId,
                imageCoreUrl: e.imageCoreUrl,
                orientation: e.orientation,
                title: e.title,
                labels: (0, eR.pr)(e.labels),
                sku: e.sku || (0, eS.s)(e.internalId)
            })) : [];
            var eO = s(7234),
                eH = s(40320),
                eF = s.n(eH),
                eK = s(72758);
            let eV = () => {
                    let e, t, {
                            track: s
                        } = (0, O.z)(),
                        a = (0, m.jE)(),
                        {
                            data: l
                        } = (0, u.a)(),
                        {
                            data: o,
                            isSuccess: n,
                            isFetching: c,
                            fetchNextPage: d,
                            hasNextPage: p,
                            isFetchingNextPage: h
                        } = B(),
                        {
                            data: y,
                            isSuccess: _,
                            isFetching: f,
                            fetchNextPage: b,
                            hasNextPage: j,
                            isFetchingNextPage: N
                        } = (t = (e = (0, W.q)({
                            initialPageParam: 0,
                            queryKey: ed(),
                            queryFn: async ({
                                pageParam: e = 0
                            }) => M.$y.getCollectorCollectedArtworksV5(M.kl.NEW, M.bv.HIDDEN, e, 108),
                            getNextPageParam: e => {
                                let t = e.offset + e.limit;
                                return t < e.totalCount ? t : void 0
                            }
                        })).isPending || e.isFetching && !e.data ? .pages ? .length, { ...e,
                            isPending: t
                        }),
                        w = void 0 === o && c || void 0 === y && f;
                    return (0, r.useEffect)(() => {
                        s()
                    }, []), (0, i.jsxs)(i.Fragment, {
                        children: [w || (o ? .pages ? .flatMap(e => e.items) ? ? []).length || !n || (y ? .pages ? .flatMap(e => e.items) ? ? []).length || !_ ? null : (0, i.jsxs)("div", {
                            className: eF().noArtworksSection,
                            children: [(0, i.jsxs)("p", {
                                children: [(0, i.jsx)("b", {
                                    children: "Hmmmm...."
                                }), " it looks like your profile is empty.", (0, i.jsx)("br", {}), "Find yourself a ", (0, i.jsx)("b", {
                                    children: "Displate!"
                                })]
                            }), (0, i.jsx)(T.$n, {
                                asChild: !0,
                                size: "lg",
                                children: (0, i.jsx)(C.A, {
                                    routeInfo: (0, eO.cT)({
                                        query: {
                                            q: "verified creators"
                                        }
                                    }),
                                    children: "Shop now"
                                })
                            })]
                        }), !w && (o ? .pages ? .flatMap(e => e.items) ? ? []).length > 0 ? (0, i.jsx)("div", {
                            "data-testid": "collector-displates-public",
                            children: (0, i.jsx)(x.r, {
                                additionalComponent: e => (0, i.jsx)(eL, { ...e,
                                    collectorNick: l ? .nick,
                                    hideOnScroll: !1,
                                    onHideHandle: () => {
                                        a.invalidateQueries({
                                            queryKey: U()
                                        }), a.invalidateQueries({
                                            queryKey: ed()
                                        })
                                    }
                                }),
                                className: eF().collectorMasonryGrid,
                                customGridItem: e => (0, i.jsx)(E, { ...e,
                                    username: l ? .nick
                                }),
                                feedName: "artists-collection",
                                hasNextPage: p,
                                isContentVisible: !0,
                                isFetchingNextPage: h,
                                items: eE(o ? .pages.flatMap(e => e.items)),
                                metadata: {
                                    athenaPageName: eK.O.analyticsAthenaName,
                                    gaPageName: eK.O.analyticsGaName,
                                    itemListName: "Collector",
                                    listingFunction: g.N.COLLECTOR,
                                    listingType: "masonry",
                                    messageSendingDisabled: !1
                                },
                                onFetchNextPage: d
                            })
                        }) : (0, i.jsx)(v.R, {
                            className: eF().skeleton,
                            "data-testid": "masonry-feed-skeleton",
                            showHeader: !1
                        }), !w && (y ? .pages ? .flatMap(e => e.items) ? ? []).length > 0 ? (0, i.jsxs)("div", {
                            "data-testid": "collector-displates-hidden",
                            children: [(0, i.jsx)("h2", {
                                className: eF().title,
                                children: "Hidden Displates"
                            }), (0, i.jsx)(x.r, {
                                additionalComponent: e => (0, i.jsx)(em, { ...e,
                                    collectorNick: l ? .nick,
                                    hideOnScroll: !1,
                                    onShowHandle: () => {
                                        a.invalidateQueries({
                                            queryKey: U()
                                        }), a.invalidateQueries({
                                            queryKey: ed()
                                        })
                                    }
                                }),
                                className: eF().collectorMasonryGrid,
                                customGridItem: e => (0, i.jsx)(E, { ...e,
                                    username: l ? .nick
                                }),
                                feedName: "artists-collection",
                                hasNextPage: j,
                                isContentVisible: !0,
                                isFetchingNextPage: N,
                                items: eE(y ? .pages.flatMap(e => e.items)),
                                metadata: {
                                    athenaPageName: eK.O.analyticsAthenaName,
                                    gaPageName: eK.O.analyticsGaName,
                                    itemListName: "Collector",
                                    listingFunction: g.N.COLLECTOR,
                                    listingType: "masonry",
                                    messageSendingDisabled: !1
                                },
                                onFetchNextPage: b
                            })]
                        }) : null, l ? (0, i.jsx)(el, {
                            isToRecover: l.missingArtworksNumber > 0,
                            obfuscatedEmail: l.obfuscatedEmail
                        }) : null, l && l.deactivatedCount > 0 ? (0, i.jsx)(eM, {
                            deactivatedCount: l.deactivatedCount
                        }) : null]
                    })
                },
                eQ = ({
                    header: e
                }) => {
                    let {
                        hasFeatureAccess: t
                    } = (0, r.useContext)(h.cy), s = eK.O.defaultMeta, o = {
                        webpage: {
                            h1: s.title,
                            url: (0, eK.z)({
                                absolute: !0
                            }).route,
                            description: s.description,
                            imageOfPage: s.coverImage
                        }
                    }, {
                        data: d,
                        isPending: m,
                        error: g
                    } = (0, u.a)();
                    return (0, c.s)(g), (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(l.F, {
                            ldJsonParams: o,
                            noFollow: !0,
                            noIndex: !0,
                            pageMeta: eK.O.defaultMeta
                        }), (0, i.jsx)(a.e, {
                            value: {},
                            children: (0, i.jsx)(n.A, {
                                collectorProfile: d,
                                header: e,
                                isLoading: m,
                                children: t("collectorSpacePremium") ? (0, i.jsx)(eV, {}) : (0, i.jsx)(p.A, {})
                            })
                        })]
                    })
                };
            eQ.getLayout = function(e) {
                return (0, i.jsx)(d.A, {
                    abTests: e.props.abTests,
                    countryCode: e.props.countryCode,
                    featureFlags: e.props.featureFlags,
                    gitInfo: e.props.gitInfo,
                    tpid: e.props.tpid,
                    uvert: e.props.uvert,
                    children: (0, i.jsx)(o.A, {
                        children: e
                    })
                })
            };
            let eW = eQ;
            var eZ = !0
        },
        29499: e => {
            e.exports = {
                wrapper: "CollectorUnauthorizedPage_wrapper__QdoyW",
                joinDcPopup: "CollectorUnauthorizedPage_joinDcPopup__qHzJB",
                title: "CollectorUnauthorizedPage_title__v_Qe2",
                description: "CollectorUnauthorizedPage_description__W7Y5h",
                buttonsWrapper: "CollectorUnauthorizedPage_buttonsWrapper__3gi_F"
            }
        },
        39755: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => c
            });
            var i = s(37876),
                r = s(44216),
                a = s(36256),
                l = s(23278),
                o = s(29499),
                n = s.n(o);
            let c = () => (0, i.jsx)("div", {
                className: n().wrapper,
                children: (0, i.jsxs)("div", {
                    className: n().joinDcPopup,
                    children: [(0, i.jsx)(r.A, {
                        height: 44,
                        width: 44
                    }), (0, i.jsx)("h2", {
                        className: n().title,
                        children: "Grow & manage your collection!"
                    }), (0, i.jsx)("p", {
                        className: n().description,
                        children: "Displate Club is your ultimate collecting experience. Enjoy free shipping, exclusive discounts, vouchers, custom Displates, and more. Hang tight – your walls are about to get truly magnetic!"
                    }), (0, i.jsxs)("div", {
                        className: n().buttonsWrapper,
                        children: [(0, i.jsx)(a.$n, {
                            asChild: !0,
                            variant: "primary",
                            children: (0, i.jsx)("a", {
                                href: (0, l.a)({
                                    hash: "offer"
                                }).route,
                                children: "Join Displate Club"
                            })
                        }), (0, i.jsx)(a.$n, {
                            asChild: !0,
                            variant: "secondaryDarkOutline",
                            children: (0, i.jsx)("a", {
                                href: (0, l.a)({
                                    hash: "displate-club-benefits"
                                }).route,
                                children: "See all perks"
                            })
                        })]
                    })]
                })
            })
        },
        40320: e => {
            e.exports = {
                collectorMasonryGrid: "CollectorProfileEditPage_collectorMasonryGrid__vwSjD",
                noArtworksSection: "CollectorProfileEditPage_noArtworksSection__2EihL",
                title: "CollectorProfileEditPage_title__BsZuY",
                skeleton: "CollectorProfileEditPage_skeleton__l_5M0"
            }
        },
        60946: e => {
            e.exports = {
                heading: "CollectorReasonPopup_heading__KZpYn",
                description: "CollectorReasonPopup_description___bWlM",
                form: "CollectorReasonPopup_form__gsW6a",
                radioLabel: "CollectorReasonPopup_radioLabel__UH7_9",
                radioInput: "CollectorReasonPopup_radioInput__UxDf1",
                button: "CollectorReasonPopup_button__QoT_R"
            }
        },
        84355: e => {
            e.exports = {
                missingDisplates: "CollectorMissingDisplates_missingDisplates__R4bDF",
                missingDisplatesTitle: "CollectorMissingDisplates_missingDisplatesTitle__VZnt4",
                buttonText: "CollectorMissingDisplates_buttonText__VXGQP",
                buttonContainer: "CollectorMissingDisplates_buttonContainer__76omR",
                editBtn: "CollectorMissingDisplates_editBtn__dh95B"
            }
        },
        87801: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => r
            });
            var i = s(37876);
            let r = e => (0, i.jsxs)("svg", {
                width: "1em",
                height: "1em",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: [(0, i.jsx)("path", {
                    d: "M4 6.66602H2V19.1105C2 20.0882 2.9 20.8882 4 20.8882H18V19.1105H4V6.66602Z",
                    fill: "black"
                }), (0, i.jsx)("path", {
                    d: "M20 3.11035H8C6.9 3.11035 6 3.91035 6 4.88813V15.5548C6 16.5326 6.9 17.3326 8 17.3326H20C21.1 17.3326 22 16.5326 22 15.5548V4.88813C22 3.91035 21.1 3.11035 20 3.11035ZM20 11.9992L17.5 10.6659L15 11.9992V4.88813H20V11.9992Z",
                    fill: "black"
                })]
            })
        },
        95383: e => {
            e.exports = {
                popup: "MissingDisplatePopup_popup__JsJfV",
                popupTitle: "MissingDisplatePopup_popupTitle__uxw_c",
                popupDesc: "MissingDisplatePopup_popupDesc__S0coA",
                popupSubDesc: "MissingDisplatePopup_popupSubDesc__dW99H",
                email: "MissingDisplatePopup_email__xFJyZ"
            }
        }
    },
    e => {
        e.O(0, [4024, 2183, 1353, 1671, 8992, 5706, 9658, 3915, 5657, 3851, 8043, 126, 1899, 2839, 9603, 1852, 3834, 4278, 636, 6593, 8792], () => e(e.s = 4463)), _N_E = e.O()
    }
]);
//#