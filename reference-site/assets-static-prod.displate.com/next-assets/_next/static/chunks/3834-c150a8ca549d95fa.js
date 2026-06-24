(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3834], {
        6589: e => {
            e.exports = {
                bentoBox: "SetThumbnails_bentoBox__pMD2U",
                placeholder: "SetThumbnails_placeholder__mUvXP",
                artwork: "SetThumbnails_artwork__1I7cZ"
            }
        },
        13834: (e, t, s) => {
            "use strict";
            s.d(t, {
                PopupAddToSets: () => q
            });
            var a = s(37876),
                i = s(14232),
                l = s(34026),
                n = s(69241),
                r = s(88992),
                o = s(67768),
                c = s(40097),
                d = s(87050),
                m = s(28822),
                u = s(36256),
                h = s(63168),
                _ = s(38571),
                p = s(70517),
                g = s(24424),
                x = s(91259),
                S = s.n(x);
            let C = ({
                onBack: e,
                isBackEnabled: t = !0,
                sku: s
            }) => {
                let {
                    closeModal: x
                } = (0, l.A)(), {
                    control: C,
                    handleSubmit: j,
                    formState: {
                        errors: b
                    },
                    reset: v
                } = (0, r.mN)({
                    defaultValues: {
                        name: "",
                        visibility: !1
                    },
                    mode: "onChange"
                }), {
                    createSetWithAssignment: N,
                    isPending: I
                } = (() => {
                    let e, {
                            mutate: t,
                            isPending: s
                        } = (e = (0, o.jE)(), (0, c.n)({
                            mutationFn: d.$y.createCollectorWishlistSetV4,
                            onSuccess: () => {
                                e.invalidateQueries({
                                    queryKey: ["createCollectorWishlistSetV2"]
                                })
                            }
                        })),
                        {
                            updateAssignments: a,
                            isPending: l,
                            invalidateAllRelatedQueries: n
                        } = (0, m.j)(),
                        {
                            enqueueToast: r
                        } = (0, u.oS)();
                    return {
                        createSetWithAssignment: (0, i.useCallback)(async (e, s) => {
                            let {
                                name: i,
                                isPrivate: l,
                                sku: o
                            } = e;
                            t({
                                name: i,
                                visibility: l ? d.ab.HIDDEN : d.ab.PUBLIC
                            }, {
                                onSuccess: async ({
                                    id: e
                                }) => {
                                    try {
                                        o && await new Promise((t, s) => {
                                            a(o, [{
                                                wishlistSetId: e,
                                                assigned: !0
                                            }], void 0, {
                                                onSuccess: () => t(),
                                                onError: s
                                            })
                                        }), await n(o), s ? .onSuccess ? .()
                                    } catch (e) {
                                        console.error("Error in post-creation flow:", e), s ? .onError ? .(e)
                                    }
                                },
                                onError: e => {
                                    r({
                                        message: e ? .body ? ._embedded ? .errors ? .[0] ? .message || "Failed to create set",
                                        variant: "error"
                                    }), s ? .onError ? .(e)
                                }
                            })
                        }, [t, a, n, r]),
                        isPending: s || l
                    }
                })();
                return (0, a.jsxs)("form", {
                    onSubmit: j(a => {
                        N({
                            name: a.name,
                            isPrivate: a.visibility,
                            sku: s
                        }, {
                            onSuccess: () => {
                                v(), t ? e() : x()
                            }
                        })
                    }),
                    children: [t && (0, a.jsx)(_.A, {
                        className: S().backButton,
                        "data-testid": "create-state-back-button",
                        height: 32,
                        onClick: e,
                        width: 32
                    }), (0, a.jsx)("h3", {
                        className: (0, n.A)(S().title, t && S().withBackButton),
                        "data-testid": "create-state-title",
                        children: "New set"
                    }), (0, a.jsxs)("div", {
                        className: (0, n.A)(S().setsContainer, S().stageContent),
                        children: [(0, a.jsx)(r.xI, {
                            control: C,
                            name: "name",
                            render: ({
                                field: e
                            }) => (0, a.jsxs)("label", {
                                className: S().label,
                                htmlFor: "name",
                                children: ["Name", (0, a.jsx)(g.S, { ...e,
                                    disabled: I,
                                    error: !!b.name,
                                    errorText: b ? .name ? .message,
                                    touched: !0
                                })]
                            }),
                            rules: {
                                required: "Set name is required",
                                minLength: {
                                    value: 3,
                                    message: "Set name must be at least 3 characters"
                                },
                                validate: e => "Wishlist" !== e || 'Set name cannot be "Wishlist"'
                            }
                        }), (0, a.jsx)(r.xI, {
                            control: C,
                            name: "visibility",
                            render: ({
                                field: {
                                    onChange: e,
                                    value: t
                                }
                            }) => (0, a.jsx)(p.G, {
                                checked: t,
                                disabled: I,
                                name: "visibility",
                                onChange: e,
                                options: [{
                                    value: "visibility",
                                    label: (0, a.jsxs)("div", {
                                        className: S().visibilityLabel,
                                        children: ["Make set private ", (0, a.jsx)(h.A, {})]
                                    })
                                }],
                                touched: !0
                            })
                        })]
                    }), (0, a.jsx)("div", {
                        className: S().buttonWrapper,
                        children: (0, a.jsx)(u.$n, {
                            "data-testid": "create-state-submit-button",
                            fullWidth: !0,
                            loading: I,
                            type: "submit",
                            children: "Create"
                        })
                    })]
                })
            };
            var j = s(63152),
                b = s(74791),
                v = s(91632),
                N = s(80580),
                I = s.n(N);
            let k = ({
                set: e,
                itemsTotal: t,
                onWishlistClick: s,
                selected: i
            }) => (0, a.jsxs)("div", {
                className: I().wrapper,
                "data-testid": "collector-single-set-default",
                onClick: s,
                children: [(0, a.jsx)(b.A, {
                    className: I().setThumbnails,
                    items: (0, j.q)(e.items),
                    setName: "Wishlist"
                }), (0, a.jsxs)("div", {
                    children: [(0, a.jsxs)("h4", {
                        className: I().title,
                        "data-testid": "set-title",
                        children: ["Wishlist ", (0, a.jsx)("span", {
                            children: "(Default)"
                        })]
                    }), (0, a.jsxs)("p", {
                        className: I().quantity,
                        "data-testid": "set-quantity",
                        children: [t, " ", 1 === e.items.length ? "Displate" : "Displates"]
                    }), (0, a.jsx)("span", {
                        className: (0, n.A)({
                            [I().presenceIndicatorPresent]: i,
                            [I().presenceIndicatorNotPresent]: !i
                        }),
                        "data-testid": "set-presence-indicator",
                        children: i ? (0, a.jsx)(v.A, {
                            className: I().presenceIndicatorIcon
                        }) : null
                    })]
                })]
            });
            var w = s(24776),
                y = s.n(w);
            let T = ({
                    onToggleIsPresent: e,
                    set: t
                }) => (0, a.jsxs)("div", {
                    className: y().wrapper,
                    onClick: () => e ? .(t.id),
                    children: [(0, a.jsx)(b.A, {
                        className: y().setThumbnails,
                        items: (0, j.q)(t.items),
                        setName: t.name
                    }), (0, a.jsxs)("div", {
                        className: y().setHeader,
                        children: [(0, a.jsx)("h4", {
                            className: y().title,
                            "data-testid": "set-title",
                            children: t.name
                        }), (0, a.jsxs)("p", {
                            className: y().quantity,
                            "data-testid": "set-quantity",
                            children: [t.itemsTotal, " ", 1 === t.items.length ? "Displate" : "Displates"]
                        }), (0, a.jsx)("span", {
                            className: (0, n.A)({
                                [y().presenceIndicatorPresent]: t.isPresent,
                                [y().presenceIndicatorNotPresent]: !t.isPresent
                            }),
                            "data-testid": "set-presence-indicator",
                            children: t.isPresent ? (0, a.jsx)(v.A, {
                                className: y().presenceIndicatorIcon
                            }) : null
                        })]
                    })]
                }),
                f = "Wishlist";
            var E = s(43442);
            let A = ({
                    isLoading: e,
                    className: t,
                    sets: s,
                    onToggleIsPresent: i,
                    onCreateNewSet: r,
                    onGoToRemoveStage: o,
                    sku: c,
                    isWishlistListed: d
                }) => {
                    let {
                        closeModal: h
                    } = (0, l.A)(), {
                        data: _
                    } = (0, E.tr)(), {
                        updateAssignments: p,
                        getSetsToUpdate: g,
                        isPending: x
                    } = (0, m.j)(), C = s.find(e => e.name === f), j = s.filter(e => e.name !== f);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("h3", {
                            className: S().title,
                            "data-testid": "edit-state-title",
                            children: "Add to set"
                        }), (0, a.jsxs)("div", {
                            className: (0, n.A)(S().setsContainer, S().stageContent, t),
                            children: [e ? (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(u.EA, {
                                    className: "h-[62px] w-full"
                                }), (0, a.jsx)(u.EA, {
                                    className: "h-[62px] w-full"
                                }), (0, a.jsx)(u.y$, {
                                    className: "mx-auto my-8"
                                })]
                            }) : null, d && C ? (0, a.jsx)(k, {
                                itemsTotal: _ ? .pages[0].pagination ? .totalItemsCount ? ? 0,
                                onWishlistClick: o,
                                selected: !0,
                                set: C
                            }) : null, j.map(e => (0, a.jsx)(T, {
                                onToggleIsPresent: i,
                                set: e
                            }, e.id))]
                        }), (0, a.jsxs)("div", {
                            className: S().buttonWrapper,
                            children: [(0, a.jsx)(u.$n, {
                                "data-testid": "create-new-set-button",
                                fullWidth: !0,
                                onClick: r,
                                variant: "secondaryDarkOutline",
                                children: "Create new set"
                            }), (0, a.jsx)(u.$n, {
                                "data-testid": "edit-state-done-button",
                                fullWidth: !0,
                                loading: x,
                                onClick: () => {
                                    let e = g(s);
                                    e.length > 0 ? p(c, e.map(e => ({
                                        wishlistSetId: e.id,
                                        assigned: e.isPresent
                                    })), void 0, {
                                        onSuccess: h
                                    }) : h()
                                },
                                children: "Done"
                            })]
                        })]
                    })
                },
                P = ({
                    sku: e,
                    externalId: t,
                    sets: s,
                    onToggleIsPresent: i,
                    onClose: l,
                    onBack: r
                }) => {
                    let {
                        data: o,
                        isLoading: c
                    } = (0, E.tr)(), {
                        updateAssignments: d
                    } = (0, m.j)(), h = s.find(e => e.name === f), _ = s.filter(e => e.name !== f);
                    return (0, a.jsxs)("div", {
                        children: [(0, a.jsx)("h3", {
                            className: S().title,
                            "data-testid": "remove-state-title",
                            children: "Remove from wishlist"
                        }), (0, a.jsxs)("div", {
                            className: (0, n.A)(S().setsContainer, S().stageContent, S().removeStageContent),
                            children: [c ? (0, a.jsx)(a.Fragment, {
                                children: (0, a.jsx)(u.EA, {
                                    className: "h-[62px] w-full"
                                })
                            }) : null, h ? (0, a.jsx)(k, {
                                itemsTotal: o ? .pages[0].pagination ? .totalItemsCount ? ? 0,
                                onWishlistClick: r,
                                selected: !1,
                                set: h
                            }) : null, _.map(e => (0, a.jsx)(T, {
                                onToggleIsPresent: i,
                                set: e
                            }, e.id)), (0, a.jsx)("div", {
                                className: S().setsContainerOverlay,
                                children: (0, a.jsx)("label", {
                                    className: S().overlayMessage,
                                    "data-testid": "remove-warning-message",
                                    children: "Removing this item from your Wishlist will also remove it from all associated sets"
                                })
                            })]
                        }), (0, a.jsxs)("div", {
                            className: S().buttonWrapper,
                            children: [(0, a.jsx)(u.$n, {
                                fullWidth: !0,
                                onClick: r,
                                variant: "secondaryDarkOutline",
                                children: "Back"
                            }), (0, a.jsx)(u.$n, {
                                fullWidth: !0,
                                onClick: () => {
                                    s.length > 0 ? d(e, s.map(e => ({
                                        wishlistSetId: e.id,
                                        assigned: !1
                                    })), t, {
                                        onSuccess: () => {
                                            l()
                                        }
                                    }) : l()
                                },
                                type: "submit",
                                children: "Done"
                            })]
                        })]
                    })
                };
            var D = s(73705),
                W = s(56170),
                B = s(90508),
                O = s(1121);
            let q = ({
                sku: e,
                externalId: t,
                stage: s,
                triggerSource: n = B.H.ADD_TO_SET_BUTTON
            }) => {
                let {
                    sets: r,
                    handleToggleIsPresent: o,
                    isLoading: c
                } = (e => {
                    let {
                        data: t,
                        isLoading: s
                    } = (0, W.m)(e), [a, l] = (0, i.useState)([]);
                    (0, i.useEffect)(() => {
                        t && l(t.items)
                    }, [t]);
                    let n = (0, i.useCallback)(e => {
                        l(a.map(t => t.id === e ? { ...t,
                            isPresent: !t.isPresent,
                            isChanged: !0
                        } : t))
                    }, [a]);
                    return {
                        sets: a,
                        handleToggleIsPresent: n,
                        isLoading: s
                    }
                })(e || ""), {
                    currentStage: d,
                    goToCreateStage: m,
                    goToEditStage: u,
                    goToRemoveStage: h
                } = (e => {
                    let [t, s] = (0, i.useState)(e), a = (0, i.useCallback)(() => {
                        s(B.i.CREATE)
                    }, []);
                    return {
                        currentStage: t,
                        goToCreateStage: a,
                        goToEditStage: (0, i.useCallback)(() => {
                            s(B.i.EDIT)
                        }, []),
                        goToRemoveStage: (0, i.useCallback)(() => {
                            s(B.i.REMOVE)
                        }, [])
                    }
                })(s), {
                    refetchSetsListForSku: _
                } = (0, D.r)(), {
                    closeModal: p
                } = (0, l.A)(), g = n === B.H.ADD_TO_SET_BUTTON, x = n === B.H.REMOVE_FROM_WISHLIST_BUTTON, S = n !== B.H.ADD_TO_SET_COLLECTED_ARTWORK_BUTTON, j = () => {
                    x ? p() : u()
                };
                return (0, i.useEffect)(() => {
                    e && _(e)
                }, [e, d, _]), (0, a.jsx)(O.L, {
                    dataTestId: "add-to-set-popup",
                    onClose: p,
                    children: (() => {
                        switch (d) {
                            case B.i.EDIT:
                                return e ? (0, a.jsx)(A, {
                                    isLoading: c,
                                    isWishlistListed: S,
                                    onCreateNewSet: m,
                                    onGoToRemoveStage: h,
                                    onToggleIsPresent: o,
                                    sets: r,
                                    sku: e
                                }) : null;
                            case B.i.CREATE:
                                return (0, a.jsx)(C, {
                                    isBackEnabled: g,
                                    onBack: u,
                                    sku: e
                                });
                            case B.i.REMOVE:
                                return e && t ? (0, a.jsx)(P, {
                                    externalId: t,
                                    onBack: j,
                                    onClose: p,
                                    onToggleIsPresent: o,
                                    sets: r,
                                    sku: e
                                }) : null;
                            default:
                                return null
                        }
                    })()
                })
            }
        },
        24776: e => {
            e.exports = {
                wrapper: "CollectorSingleSetEdit_wrapper__GPMKe",
                presenceIndicatorNotPresent: "CollectorSingleSetEdit_presenceIndicatorNotPresent__b5K9u",
                presenceIndicatorPresent: "CollectorSingleSetEdit_presenceIndicatorPresent__Ckx9S",
                presenceIndicatorIcon: "CollectorSingleSetEdit_presenceIndicatorIcon__3P0Jq",
                title: "CollectorSingleSetEdit_title__ZS9Xs",
                quantity: "CollectorSingleSetEdit_quantity__AUA6U",
                setThumbnails: "CollectorSingleSetEdit_setThumbnails__Q5nxQ"
            }
        },
        38571: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => i
            });
            var a = s(37876);
            let i = ({
                width: e = "1em",
                height: t = "1em",
                color: s = "#10111A",
                ...i
            }) => (0, a.jsx)("svg", {
                fill: "none",
                height: t,
                viewBox: "0 0 16 16",
                width: e,
                xmlns: "http://www.w3.org/2000/svg",
                ...i,
                children: (0, a.jsx)("path", {
                    clipRule: "evenodd",
                    d: "M10.354 3.646a.5.5 0 010 .708L6.707 8l3.647 3.646a.5.5 0 01-.708.708l-4-4a.5.5 0 010-.708l4-4a.5.5 0 01.708 0z",
                    fill: s,
                    fillRule: "evenodd"
                })
            })
        },
        63152: (e, t, s) => {
            "use strict";
            s.d(t, {
                q: () => a
            });
            let a = e => e.map(e => ({
                id: e.imageCoreUrl,
                imageCoreUrl: e.imageCoreUrl,
                orientation: e.orientation
            }))
        },
        74791: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => c
            });
            var a = s(37876),
                i = s(69241),
                l = s(88157),
                n = s(24806),
                r = s(6589),
                o = s.n(r);
            let c = ({
                className: e,
                items: t,
                setName: s
            }) => {
                let r = Array.from({
                    length: 3
                }, (e, s) => t[s]);
                return (0, a.jsx)("div", {
                    className: (0, i.A)(o().bentoBox, e),
                    children: r.map((t, r) => t ? (0, a.jsx)(l.V, {
                        alt: `${s} - ${t.imageCoreUrl}`,
                        artworkOrientation: t.orientation,
                        artworkSets: n.ah,
                        className: (0, i.A)(o().artwork, e),
                        "data-testid": "artwork-img",
                        imageCoreUrl: t.imageCoreUrl,
                        loading: "lazy"
                    }, t.id) : (0, a.jsx)("span", {
                        className: o().placeholder,
                        "data-testid": "artwork-placeholder"
                    }, `placeholder-${r}`))
                })
            }
        },
        80580: e => {
            e.exports = {
                wrapper: "CollectorSingleSetDefault_wrapper__7zWgm",
                setThumbnails: "CollectorSingleSetDefault_setThumbnails__s0TCw",
                title: "CollectorSingleSetDefault_title__Ixlfk",
                quantity: "CollectorSingleSetDefault_quantity__Qhzi6",
                presenceIndicatorNotPresent: "CollectorSingleSetDefault_presenceIndicatorNotPresent__XWc_A",
                presenceIndicatorPresent: "CollectorSingleSetDefault_presenceIndicatorPresent__yCDs0",
                presenceIndicatorIcon: "CollectorSingleSetDefault_presenceIndicatorIcon__sdxZ_"
            }
        },
        91259: e => {
            e.exports = {
                setsContainer: "State_setsContainer__ylG9O",
                fadeIn: "State_fadeIn___F8cV",
                setsContainerOverlay: "State_setsContainerOverlay__rW7Uy",
                overlayMessage: "State_overlayMessage__IClz8",
                title: "State_title__7lQ98",
                withBackButton: "State_withBackButton__ZQQjz",
                buttonWrapper: "State_buttonWrapper__qequX",
                stageContent: "State_stageContent__Qc_Ok",
                backButton: "State_backButton__HiaVi",
                label: "State_label__9qwyF",
                visibilityLabel: "State_visibilityLabel__jLPyv",
                removeStageContent: "State_removeStageContent__ciDDN"
            }
        }
    }
]);
//#