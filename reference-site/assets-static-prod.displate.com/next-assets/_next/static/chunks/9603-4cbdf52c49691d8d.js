(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9603], {
        288: e => {
            e.exports = {
                sidebar: "CollectorSidebar_sidebar__8vsn6",
                avatarContainer: "CollectorSidebar_avatarContainer__ORaAn",
                stats: "CollectorSidebar_stats__42AWo",
                profileActionsWrapper: "CollectorSidebar_profileActionsWrapper__LtQwA",
                benefits: "CollectorSidebar_benefits__R55zU",
                benefitsTitle: "CollectorSidebar_benefitsTitle__RX2vC",
                unlock: "CollectorSidebar_unlock__BcOWn",
                unlockTitle: "CollectorSidebar_unlockTitle__vnKvX",
                name: "CollectorSidebar_name__GctUQ",
                desc: "CollectorSidebar_desc__L2rk2",
                RoundedAcronym: "CollectorSidebar_RoundedAcronym__n5I__",
                list: "CollectorSidebar_list__ZafYp",
                blurred: "CollectorSidebar_blurred__RfwRi",
                listItem: "CollectorSidebar_listItem__PgZ3k",
                hr: "CollectorSidebar_hr__Gqzbj"
            }
        },
        6023: e => {
            e.exports = {
                coverSkeleton: "CollectorLayoutSkeleton_coverSkeleton__WTBAm",
                container: "CollectorLayoutSkeleton_container__tfsBV",
                sidebar: "CollectorLayoutSkeleton_sidebar__WXaHs",
                profileImage: "CollectorLayoutSkeleton_profileImage__YHLyA",
                avatar: "CollectorLayoutSkeleton_avatar__hYXi3",
                profileInfo: "CollectorLayoutSkeleton_profileInfo__80RzG",
                stats: "CollectorLayoutSkeleton_stats__aThPx",
                statItem: "CollectorLayoutSkeleton_statItem__W3GH7"
            }
        },
        6662: e => {
            e.exports = {
                header: "CollectorCover_header__Qn8gx",
                headerImage: "CollectorCover_headerImage__DQud6"
            }
        },
        15118: (e, t, r) => {
            "use strict";
            r.d(t, {
                $s: () => l,
                PM: () => a,
                Sc: () => i
            });
            let a = "Add to cart",
                i = "Added to cart",
                l = "Something went wrong. Please try again later."
        },
        26876: e => {
            e.exports = {
                hide: "FileUploader_hide__znokD"
            }
        },
        32379: (e, t, r) => {
            "use strict";
            r.d(t, {
                Bi: () => n,
                DT: () => s,
                Ie: () => i,
                Ts: () => l,
                Uo: () => a,
                lL: () => o
            });
            let a = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                i = /^[0-9]{4,16}$/,
                l = /^\+[0-9]{1,4}$/,
                o = /^https:\/\/displate\.com\/displate\/[1-9]{1}([0-9]*\?.*|[0-9]*\/.*|[0-9]*)$/,
                s = /(^[A-Za-z0-9_-]+$)+/,
                n = /^[\p{L}\s0-9]+$/u
        },
        32791: e => {
            e.exports = {
                inputContainer: "InputTextarea_inputContainer__bQNua",
                inputContainerError: "InputTextarea_inputContainerError__DP0Zc",
                inputContainerDisabled: "InputTextarea_inputContainerDisabled___5Gnn",
                inputContainerIconPositionLeft: "InputTextarea_inputContainerIconPositionLeft__Z94zQ",
                inputContainerIconPositionRight: "InputTextarea_inputContainerIconPositionRight__G4_yu",
                input: "InputTextarea_input__WCfhK"
            }
        },
        37675: (e, t, r) => {
            "use strict";
            r.d(t, {
                g: () => c,
                m: () => n
            });
            var a = r(14232),
                i = r(67768),
                l = r(40097),
                o = r(35891),
                s = r(87050);
            let n = ["collector-profile"],
                c = e => {
                    let t = (0, a.useContext)(o.cy),
                        r = (0, i.jE)();
                    return (0, l.n)({
                        mutationKey: n,
                        mutationFn: e => t.fetchedUserInfo ? s.$y.updateCollectorProfileV5(e) : Promise.reject("Cannot use useCollectorProfileDetails before fetching user info"),
                        onSuccess: () => {
                            r.invalidateQueries({
                                queryKey: n
                            }), e ? .onSuccess ? .()
                        },
                        onError: e ? .onError
                    })
                }
        },
        41946: e => {
            e.exports = {
                container: "CollectorAvatarUploader_container__Y74oo",
                avatar: "CollectorAvatarUploader_avatar__zDlG6"
            }
        },
        44216: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => i
            });
            var a = r(37876);
            let i = e => (0, a.jsxs)("svg", {
                width: "1em",
                height: "1em",
                viewBox: "0 0 28 28",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: [(0, a.jsx)("path", {
                    d: "M24.1341 7.58904C25.6633 10.0032 26.2803 12.8841 25.8738 15.7128C25.4674 18.5415 24.0642 21.1321 21.9171 23.0179C19.7699 24.9038 17.0199 25.9609 14.1625 25.9989C11.305 26.037 8.52789 25.0534 6.33133 23.2253M21.7595 4.85462C19.7856 3.17698 17.3215 2.18358 14.736 2.02306C12.1505 1.86253 9.58251 2.5435 7.41626 3.9641C5.25 5.38469 3.60195 7.46852 2.71867 9.90382C1.8354 12.3391 1.76439 14.995 2.51626 17.474",
                    stroke: "#10111A",
                    strokeWidth: .979992,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0, a.jsx)("path", {
                    d: "M19.6422 16.2379L17.8379 17.1707L18.191 15.1718L16.7412 13.7486L18.7533 13.4635L19.6595 11.6445L20.5523 13.4701L22.5618 13.7713L21.096 15.1838L21.4318 17.1827L19.6422 16.2379Z",
                    fill: "#0084F5"
                }), (0, a.jsx)("path", {
                    d: "M18.0076 17.7106C17.5252 18.417 16.8885 19.0044 16.1456 19.4283C15.4026 19.8521 14.573 20.1014 13.7195 20.1572H13.6302C11.8259 20.1199 10.9851 19.3364 10.5294 17.2629C10.3178 15.7526 10.4084 14.2152 10.7959 12.7402C10.9536 12.0926 11.1534 11.4561 11.3942 10.8346C12.2177 8.94504 13.6942 7.5192 14.8282 7.5192C14.9028 7.51901 14.9773 7.5257 15.0507 7.53919C15.2791 7.58251 15.4944 7.67839 15.6794 7.81924C15.8644 7.96008 16.0141 8.14204 16.1167 8.35072C16.4449 9.08371 16.4923 9.91171 16.25 10.6774C16.9789 10.4249 17.6246 9.97738 18.1169 9.38346C18.3872 9.01823 18.5359 8.57725 18.5418 8.12289C18.5478 7.66854 18.4108 7.2238 18.1502 6.85159C17.8244 6.35217 17.381 5.94036 16.8589 5.65228C16.2632 5.34108 15.626 5.11671 14.9667 4.986C14.6454 4.91623 14.3175 4.88049 13.9886 4.87939C12.8088 4.89949 11.6813 5.37004 10.8372 6.19463L10.6053 6.41584C8.57986 8.14817 6.99414 12.2791 6.99414 15.8091C6.99414 16.0623 7.00613 16.3301 7.03145 16.6086C7.12457 17.4753 7.34085 18.3242 7.67374 19.1298C8.03122 20.1122 8.69255 20.955 9.56168 21.5359C10.4308 22.1167 11.4625 22.4054 12.5069 22.3599C14.5177 22.3599 17.3427 21.3552 19.7945 16.8178L18.0076 17.7106Z",
                    fill: "#10111A"
                })]
            })
        },
        59126: e => {
            e.exports = {
                icon: "CollectorShareProfileButton_icon__yRGvZ"
            }
        },
        61287: e => {
            e.exports = {
                navigation: "CollectorNavigation_navigation__kf0sN"
            }
        },
        64085: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => n
            });
            var a = r(37876),
                i = r(69241),
                l = r(32204),
                o = r(32791),
                s = r.n(o);
            let n = ({
                type: e,
                name: t,
                readOnly: r,
                disabled: o,
                error: n,
                errorText: c,
                touched: u,
                icon: d,
                label: p,
                hint: m,
                helperLink: h,
                helperText: v,
                iconPosition: _,
                hasValidationText: g,
                autoComplete: x,
                classes: C,
                dataTestId: f,
                ref: b,
                ...j
            }) => {
                let y = (0, i.A)(s().inputContainer, {
                    [s().inputContainerError]: u && n,
                    [s().inputContainerIconPositionLeft]: "left" === _,
                    [s().inputContainerIconPositionRight]: "right" === _,
                    [s().inputContainerDisabled]: o || r
                }, C ? .container);
                return (0, a.jsx)(l.V, {
                    classes: {
                        inputLabel: C ? .inputLabel
                    },
                    errorText: c,
                    helperLink: h,
                    helperText: v,
                    hint: m,
                    label: p,
                    name: t,
                    children: (0, a.jsxs)("div", {
                        className: y,
                        children: [(0, a.jsx)("textarea", {
                            autoComplete: x,
                            className: (0, i.A)(s().input, C ? .textarea),
                            "data-testid": f,
                            disabled: o,
                            id: t,
                            name: t,
                            readOnly: r,
                            ref: b,
                            rows: 3,
                            ...j
                        }), d || null]
                    })
                })
            };
            n.displayName = "InputTextarea"
        },
        64231: (e, t, r) => {
            "use strict";
            r.d(t, {
                a: () => o
            });
            var a = r(74359),
                i = r(87050);
            let l = ["collector-profile"],
                o = () => (0, a.I)({
                    queryKey: l,
                    queryFn: () => i.$y.getCollectorProfileV4(),
                    retry: 1
                })
        },
        81393: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => c
            });
            var a = r(37876),
                i = r(14232),
                l = r(69241),
                o = r(89099),
                s = r(94811),
                n = r.n(s);
            let c = ({
                children: e,
                className: t
            }) => {
                let r = (0, o.useRouter)(),
                    [s, c] = (0, i.useState)(!1),
                    [u, d] = (0, i.useState)(e);
                return (0, i.useEffect)(() => {
                    let t = () => {
                            c(!1)
                        },
                        a = () => {
                            d(e), requestAnimationFrame(() => {
                                c(!0)
                            })
                        };
                    return r.events.on("routeChangeStart", t), r.events.on("routeChangeComplete", a), requestAnimationFrame(() => {
                        c(!0)
                    }), () => {
                        r.events.off("routeChangeStart", t), r.events.off("routeChangeComplete", a)
                    }
                }, [r, e]), (0, a.jsx)("div", {
                    className: (0, l.A)(n().pageTransition, t, {
                        [n().visible]: s
                    }),
                    children: u
                })
            }
        },
        82924: e => {
            e.exports = {
                container: "CollectorLayout_container__sv_r3",
                pageWrapper: "CollectorLayout_pageWrapper__eayGx"
            }
        },
        89172: e => {
            e.exports = {
                container: "CollectorCoverUploader_container__OiwMu",
                cover: "CollectorCoverUploader_cover__SXq9i",
                button: "CollectorCoverUploader_button___2gLx",
                hint: "CollectorCoverUploader_hint__obq4a"
            }
        },
        89603: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => eU
            });
            var a = r(37876),
                i = r(81393),
                l = r(36256),
                o = r(6023),
                s = r.n(o);
            let n = () => (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)("div", {
                    className: s().coverSkeleton,
                    children: (0, a.jsx)(l.EA, {
                        className: "h-[360px] w-full"
                    })
                }), (0, a.jsx)("section", {
                    className: s().container,
                    children: (0, a.jsxs)("aside", {
                        className: s().sidebar,
                        children: [(0, a.jsx)("div", {
                            className: s().profileImage,
                            children: (0, a.jsx)(l.EA, {
                                className: `${s().avatar} h-[140px] w-[140px]`
                            })
                        }), (0, a.jsxs)("div", {
                            className: s().profileInfo,
                            children: [(0, a.jsx)(l.EA, {
                                className: `${s().nickname} h-8 w-full`
                            }), (0, a.jsx)(l.EA, {
                                className: `${s().joinDate} h-5 w-full`
                            })]
                        }), (0, a.jsx)("div", {
                            className: s().stats,
                            children: [void 0, void 0, void 0, void 0, void 0].map((e, t) => (0, a.jsxs)("div", {
                                className: s().statItem,
                                children: [(0, a.jsx)(l.EA, {
                                    className: "h-7 w-7"
                                }), (0, a.jsx)(l.EA, {
                                    className: "h-4 w-full"
                                }), (0, a.jsx)(l.EA, {
                                    className: "h-7 w-7"
                                })]
                            }, t))
                        })]
                    })
                })]
            });
            var c = r(69241),
                u = r(6662),
                d = r.n(u);
            let p = ({
                coverSrcSet: e,
                className: t
            }) => (0, a.jsx)("header", {
                className: (0, c.A)(t, d().header),
                style: {
                    "--header-bg-image": `url(${e.src})`
                },
                children: (0, a.jsx)("img", {
                    alt: "Collector Cover",
                    className: d().headerImage,
                    src: e.src
                })
            });
            var m = r(14232),
                h = r(27555),
                v = r(90572),
                _ = r(43371),
                g = r(44216);
            let x = e => (0, a.jsxs)("svg", {
                width: "1em",
                height: "1em",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "feather feather-external-link",
                ...e,
                children: [(0, a.jsx)("path", {
                    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                }), (0, a.jsx)("polyline", {
                    points: "15 3 21 3 21 9"
                }), (0, a.jsx)("line", {
                    x1: 10,
                    y1: 14,
                    x2: 21,
                    y2: 3
                })]
            });
            var C = r(21984),
                f = r(85820),
                b = r(34026),
                j = r(1121),
                y = r(88992),
                S = r(51192),
                k = r(15118),
                L = r(63168),
                N = r(40097),
                w = r(94355),
                I = r(8341);
            let P = () => (0, N.n)({
                mutationFn: async e => {
                    try {
                        let {
                            preSignedUrl: t
                        } = await I.$.createPreSignedUploadCollectorAvatarImageV4();
                        if (!t) throw Error("Failed to get presigned URL");
                        let r = await (0, w.A)(e),
                            a = await fetch(t, {
                                method: "PUT",
                                headers: {
                                    "Content-Type": "image/jpeg"
                                },
                                body: r,
                                duplex: "half"
                            });
                        if (!a.ok) throw Error(`Failed to upload avatar: ${JSON.stringify(a)}`);
                        return new Response(null, {
                            status: 200
                        })
                    } catch (e) {
                        throw console.error("Error while uploading avatar:", e), e
                    }
                }
            });
            var E = r(64231),
                A = r(61846),
                U = r(41946),
                T = r.n(U),
                R = r(67768),
                F = r(37675),
                D = r(26876),
                $ = r.n(D);
            let q = ({
                className: e,
                onSuccess: t,
                onError: r,
                rqMutation: i,
                element: l,
                setIsPending: o,
                uploadOnChange: s = !1,
                onFileSelected: n,
                ref: c
            }) => {
                let u = (0, m.useRef)(null),
                    [d, p] = (0, m.useState)(null),
                    [h, v] = (0, m.useState)(null),
                    {
                        mutateAsync: _
                    } = i();
                (0, m.useEffect)(() => () => {
                    h && URL.revokeObjectURL(h)
                }, [h]);
                let g = async () => {
                    if (!d) return !1;
                    try {
                        return await _(d, {
                            onSuccess: ({
                                status: e
                            }) => {
                                200 === e && (t ? .(), u.current && (u.current.value = ""))
                            },
                            onSettled: e => {
                                e ? .status !== 200 && r ? .(), o(!1)
                            },
                            onError: () => {
                                r ? .(), u.current && (u.current.value = ""), o(!1)
                            }
                        }), !0
                    } catch (e) {
                        return console.error("Error in uploadSelectedFile:", e), !1
                    }
                };
                return (0, m.useImperativeHandle)(c, () => ({
                    uploadSelectedFile: g,
                    hasSelectedFile: () => !!d,
                    getPreviewUrl: () => h
                })), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("input", {
                        accept: "image/jpeg, image/png",
                        className: $().hide,
                        "data-testid": "file-input",
                        id: "header_image_input",
                        onChange: e => {
                            let a = e.target.files ? .[0];
                            if (!a) return;
                            h && URL.revokeObjectURL(h);
                            let i = URL.createObjectURL(a);
                            v(i), p(a), n ? .(i), s && (_(a, {
                                onSuccess: ({
                                    status: e
                                }) => {
                                    200 === e && (t ? .(), u.current && (u.current.value = ""))
                                },
                                onSettled: e => {
                                    e ? .status !== 200 && r ? .(), o(!1)
                                },
                                onError: () => {
                                    r ? .(), u.current && (u.current.value = ""), o(!1)
                                }
                            }), o(!0))
                        },
                        ref: u,
                        type: "file"
                    }), (0, a.jsx)("span", {
                        className: e,
                        onClick: () => {
                            u.current ? .click()
                        },
                        children: l
                    })]
                })
            };
            q.displayName = "FileUploader";
            let M = ({
                buttonClassName: e,
                className: t,
                defaultSrcSet: r,
                onFileSelected: i,
                renderPreview: o,
                rqMutation: s,
                type: n,
                ref: c
            }) => {
                let [u, d] = (0, m.useState)(!1), {
                    previewUrl: p,
                    updatePreview: h
                } = (() => {
                    let [e, t] = (0, m.useState)(null);
                    return (0, m.useEffect)(() => () => {
                        e && !e.startsWith("http") && URL.revokeObjectURL(e)
                    }, [e]), {
                        previewUrl: e,
                        updatePreview: r => {
                            if (e && !e.startsWith("http") && URL.revokeObjectURL(e), !r) return t(null), null;
                            if (r instanceof File) {
                                let e = URL.createObjectURL(r);
                                return t(e), e
                            }
                            return t(r), r
                        }
                    }
                })(), {
                    onSuccess: v,
                    onError: _
                } = ((e, t) => {
                    let r = (0, R.jE)(),
                        {
                            enqueueToast: a
                        } = (0, l.oS)();
                    return {
                        onSuccess: () => {
                            r.invalidateQueries({
                                queryKey: F.m
                            }), a({
                                message: `${e.charAt(0).toUpperCase()+e.slice(1)} uploaded successfully!`,
                                variant: "success"
                            }), t ? .(!1)
                        },
                        onError: () => {
                            let r = "avatar" === e ? "214x214" : "1240x320";
                            a({
                                message: `${e.charAt(0).toUpperCase()+e.slice(1)} upload failed. Image should be at least ${r}px.`,
                                variant: "error"
                            }), t ? .(!1)
                        }
                    }
                })(n, d), g = m.useRef(null);
                return (0, m.useImperativeHandle)(c, () => ({
                    uploadImage: () => g.current ? .uploadSelectedFile() || Promise.resolve(!1),
                    hasImageToUpload: () => g.current ? .hasSelectedFile() || !1
                })), (0, a.jsxs)("div", {
                    className: t,
                    children: [o(p ? {
                        srcSet: p,
                        src: p,
                        widthsSrc: [p]
                    } : r), (0, a.jsx)(q, {
                        className: e,
                        element: (0, a.jsx)(l.$n, {
                            "data-testid": `${n}-uploader-button`,
                            loading: u,
                            variant: "secondaryDarkOutline",
                            children: `Upload ${n}`
                        }),
                        onError: _,
                        onFileSelected: e => {
                            h(e), i ? .(e)
                        },
                        onSuccess: v,
                        ref: g,
                        rqMutation: s,
                        setIsPending: d,
                        uploadOnChange: !1
                    })]
                })
            };
            M.displayName = "BaseImageUploader";
            let O = ({
                className: e,
                ref: t
            }) => {
                let {
                    data: r
                } = (0, E.a)(), i = (0, A.X)(r ? .avatarCoreImage, "avatars", "/images/collector/collector_placeholder.jpg", [140, 280]);
                return (0, a.jsx)(M, {
                    buttonClassName: T().button,
                    className: (0, c.A)(T().container, e),
                    defaultSrcSet: i,
                    ref: t,
                    renderPreview: e => (0, a.jsx)(f.D, {
                        className: T().avatar,
                        coverSrcSet: e
                    }),
                    rqMutation: P,
                    type: "avatar"
                })
            };
            O.displayName = "CollectorAvatarUploader";
            let W = () => (0, N.n)({
                mutationFn: async e => {
                    try {
                        let {
                            preSignedUrl: t
                        } = await I.$.createPreSignedUploadCollectorHeaderImageV4();
                        if (!t) throw Error("Failed to get presigned URL");
                        let r = await (0, w.A)(e),
                            a = await fetch(t, {
                                method: "PUT",
                                headers: {
                                    "Content-Type": "image/jpeg"
                                },
                                body: r,
                                duplex: "half"
                            });
                        if (!a.ok) throw Error(`Failed to upload header: ${JSON.stringify(a)}`);
                        return new Response(null, {
                            status: 200
                        })
                    } catch (e) {
                        throw console.error("Error while uploading header:", e), e
                    }
                }
            });
            var B = r(89172),
                Z = r.n(B);
            let G = ({
                className: e,
                ref: t
            }) => {
                let {
                    data: r
                } = (0, E.a)(), [i, l] = (0, m.useState)(null), o = (0, A.X)(r ? .backgroundCoreImage, "covers", "/images/artist/cover_bg_default.png", [140, 280]), s = async e => {
                    let t = new Image;
                    t.onload = () => {
                        l(Number((t.width / t.height).toFixed(2)))
                    }, t.src = e
                };
                return (0, a.jsxs)("div", {
                    className: e,
                    children: [(0, a.jsx)(M, {
                        buttonClassName: Z().button,
                        className: Z().container,
                        defaultSrcSet: o,
                        onFileSelected: s,
                        ref: t,
                        renderPreview: e => (0, a.jsx)(p, {
                            className: Z().cover,
                            coverSrcSet: e
                        }),
                        rqMutation: W,
                        type: "cover"
                    }), (0, a.jsxs)("p", {
                        className: Z().hint,
                        children: ["We recommend image in ratio 4:1", i && ` • Current image ratio is ${i}:1`]
                    })]
                })
            };
            G.displayName = "CollectorCoverUploader";
            let z = {
                nick: {
                    name: "nick",
                    type: "text",
                    label: "Nick",
                    rules: {
                        required: {
                            value: !0,
                            message: "Nick is required"
                        },
                        minLength: {
                            value: 3,
                            message: "Min length is 3"
                        },
                        maxLength: {
                            value: 25,
                            message: "Max length is 25"
                        },
                        pattern: {
                            value: r(32379).DT,
                            message: "Nick can only contain letters, numbers, underscores and dashes"
                        }
                    }
                },
                description: {
                    name: "description",
                    type: "textarea",
                    label: "Description",
                    rules: {
                        maxLength: {
                            value: 200,
                            message: "Max length is 200"
                        }
                    }
                },
                visibility: {
                    name: "visibility",
                    type: "checkbox",
                    options: [{
                        value: "1"
                    }]
                }
            };
            var H = r(70517),
                V = r(24424),
                Q = r(64085),
                X = r(16909),
                K = r(87050),
                J = r(94140),
                Y = r.n(J);
            let ee = ({
                data: e,
                submitCallback: t,
                warnings: r
            }) => {
                let {
                    control: i,
                    handleSubmit: o,
                    formState: {
                        errors: s
                    },
                    watch: n,
                    setError: c
                } = (0, y.mN)({
                    defaultValues: {
                        description: e ? .description || "",
                        nick: e ? .nick || "",
                        visibility: e ? .visibility === K.bv.HIDDEN
                    },
                    mode: "onChange"
                }), u = n(z.description.name), d = 200 - (u ? .length ? ? 0), [p, h] = (0, m.useState)(!1), [v, _] = (0, m.useState)([]), g = (0, m.useRef)(null), x = (0, m.useRef)(null), {
                    enqueueToast: C
                } = (0, l.oS)();
                (0, m.useEffect)(() => {
                    r ? .map(e => {
                        c(e.name, {
                            message: e.message
                        })
                    })
                }, [c, r]);
                let {
                    mutate: f,
                    isPending: b
                } = (0, F.g)({
                    onSuccess: () => {
                        h(!1), (0, S.O)({
                            elementId: "collector_edit_profile_form",
                            elementVariant: v.length > 0 ? v.join("|") : "none",
                            interactionType: "submit"
                        }), t ? .()
                    },
                    onError: e => {
                        h(!1), C({
                            message: (0, X.tS)(e) || k.$s,
                            variant: "error"
                        })
                    }
                }), j = async () => {
                    let e = g.current ? .hasImageToUpload() || !1,
                        t = x.current ? .hasImageToUpload() || !1;
                    if (!e && !t) return !0;
                    let r = [];
                    return e && g.current && (r.push(g.current.uploadImage()), _(e => [...e, "avatar"])), t && x.current && (r.push(x.current.uploadImage()), _(e => [...e, "cover"])), !(await Promise.all(r)).some(e => !e)
                }, N = async t => {
                    h(!0);
                    try {
                        if (!await j()) {
                            h(!1), C({
                                message: "Failed to upload one or more images. Please try again.",
                                variant: "error"
                            });
                            return
                        }
                        t.nick !== e ? .nick && _(e => [...e, "nick"]), t.description !== e ? .description && _(e => [...e, "description"]), f({
                            description: t.description,
                            nick: t.nick,
                            visibility: t.visibility ? K.bv.HIDDEN : K.bv.PUBLIC
                        })
                    } catch {
                        h(!1), C({
                            message: "An error occurred during form submission. Please try again.",
                            variant: "error"
                        })
                    }
                };
                return (0, a.jsxs)("div", {
                    className: Y().wrapper,
                    children: [(0, a.jsx)(O, {
                        className: Y().avatarUploader,
                        ref: g
                    }), (0, a.jsx)(G, {
                        className: Y().coverUploader,
                        ref: x
                    }), (0, a.jsxs)("form", {
                        onSubmit: o(N),
                        role: "form",
                        children: [(0, a.jsx)(y.xI, {
                            control: i,
                            name: z.nick.name,
                            render: ({
                                field: {
                                    onChange: e,
                                    value: t
                                }
                            }) => (0, a.jsx)(V.S, { ...z.nick,
                                classes: {
                                    inputLabel: Y().inputLabel,
                                    inputContainer: Y().inputContainer
                                },
                                error: !!s.nick ? .message,
                                errorText: s.nick ? s.nick ? .message : null,
                                maxLength: z.nick.rules ? .maxLength ? .value,
                                minLength: z.nick.rules ? .minLength ? .value,
                                onChange: e,
                                touched: !0,
                                value: t
                            }),
                            rules: z.nick.rules
                        }), (0, a.jsx)(y.xI, {
                            control: i,
                            name: z.description.name,
                            render: ({
                                field: {
                                    onChange: e,
                                    value: t
                                }
                            }) => (0, a.jsx)(Q.Z, { ...z.description,
                                classes: {
                                    inputLabel: Y().inputLabel,
                                    container: Y().inputContainer
                                },
                                error: !!s.description ? .message,
                                errorText: s.description ? s.description ? .message : null,
                                maxLength: z.description.rules ? .maxLength ? .value,
                                onChange: e,
                                style: {
                                    resize: "none"
                                },
                                touched: !0,
                                value: t
                            }),
                            rules: z.description.rules
                        }), (0, a.jsxs)("p", {
                            className: Y().hint,
                            children: [d, " characters left"]
                        }), (0, a.jsx)(y.xI, {
                            control: i,
                            name: z.visibility.name,
                            render: ({
                                field: {
                                    onChange: e,
                                    value: t
                                }
                            }) => (0, a.jsx)(H.G, {
                                checked: t,
                                error: !!s.visibility,
                                errorText: s ? .visibility ? .message,
                                name: z.visibility.name,
                                onChange: e,
                                options: [{
                                    value: "visibility",
                                    label: (0, a.jsxs)("div", {
                                        className: Y().visibilityLabel,
                                        children: ["Make my profile private ", (0, a.jsx)(L.A, {})]
                                    })
                                }],
                                touched: !0
                            })
                        }), (0, a.jsxs)("div", {
                            className: Y().buttonGroup,
                            children: [(0, a.jsx)(l.$n, {
                                fullWidth: !0,
                                onClick: () => {
                                    t ? .()
                                },
                                size: "lg",
                                type: "button",
                                variant: "secondaryDarkOutline",
                                children: "Cancel"
                            }), (0, a.jsx)(l.$n, {
                                fullWidth: !0,
                                loading: p || b,
                                size: "lg",
                                type: "submit",
                                children: "Save"
                            })]
                        })]
                    })]
                })
            };
            var et = r(92214),
                er = r.n(et);
            let ea = ({
                    children: e,
                    data: t,
                    currentState: r
                }) => {
                    let {
                        displayModal: i,
                        closeModal: l
                    } = (0, b.A)(), [o] = (0, m.useState)(r ? ? "edit");
                    return (0, a.jsx)("div", {
                        className: er().wrapper,
                        children: (0, a.jsx)("button", {
                            className: er().editBtn,
                            "data-testid": "collector-edit-profile-btn",
                            onClick: () => i((0, a.jsxs)(j.L, {
                                className: er().popup,
                                dataTestId: "edit-profile-popup",
                                onClose: l,
                                children: [(0, a.jsx)("h3", {
                                    className: er().popupTitle,
                                    children: "Edit profile"
                                }), "edit" === o ? (0, a.jsx)(ee, {
                                    data: t,
                                    submitCallback: l
                                }) : null, "publish" === o ? (0, a.jsx)(ee, {
                                    data: t,
                                    submitCallback: l,
                                    warnings: [{
                                        name: "visibility",
                                        message: "To share your set, uncheck the box above"
                                    }]
                                }) : null]
                            })),
                            type: "button",
                            children: e
                        })
                    })
                },
                ei = e => "object" == typeof e && null !== e && "isConsentForMissingArtworksChecked" in e && "obfuscatedEmail" in e;
            var el = r(43004),
                eo = r(32333),
                es = r(16278),
                en = r(59126),
                ec = r.n(en);
            let eu = ({
                profile: {
                    nick: e,
                    description: t,
                    visibility: r
                },
                popupHeader: i,
                popupMessage: o
            }) => {
                let {
                    enqueueToast: s
                } = (0, l.oS)(), {
                    mutateAsync: n
                } = (0, F.g)({
                    onSuccess: () => {
                        (0, S.O)({
                            elementId: "collector_edit_profile_form",
                            elementVariant: "visibility",
                            interactionType: "submit"
                        })
                    },
                    onError: e => {
                        s({
                            message: (0, X.tS)(e) || "Failed to edit profile",
                            variant: "error"
                        })
                    }
                }), {
                    share: c
                } = (0, eo.$)({
                    isPublic: r === K.bv.PUBLIC,
                    link: (0, es.vc)(e, {
                        absolute: !0
                    }).route,
                    onMakePublic: async () => {
                        await n({
                            description: t,
                            nick: e,
                            visibility: K.bv.PUBLIC
                        })
                    },
                    makePublicHeader: i,
                    makePublicMessage: o
                });
                return (0, a.jsx)(l.$n, {
                    "aria-label": "Share profile",
                    className: ec().icon,
                    onClick: () => {
                        c().catch(() => {
                            s({
                                message: "Failed to share",
                                variant: "error"
                            })
                        })
                    },
                    variant: "text",
                    children: (0, a.jsx)(el.A, {
                        height: C.l.SIZE16,
                        width: C.l.SIZE16
                    })
                })
            };
            var ed = r(35891),
                ep = r(23278),
                em = r(288),
                eh = r.n(em);
            let ev = ({
                    text: e
                }) => (0, a.jsx)("div", {
                    className: eh().RoundedAcronym,
                    children: e
                }),
                e_ = ({
                    displateType: e,
                    value: t
                }) => (0, a.jsxs)("li", {
                    className: eh().listItem,
                    "data-testid": `displate-type-${e.short}`,
                    children: [(0, a.jsx)(ev, {
                        text: e.short
                    }), (0, a.jsx)("span", {
                        children: e.long
                    }), (0, a.jsx)("span", {
                        "data-testid": `displate-type-quantity-${e.short.toLowerCase()}-value`,
                        children: t
                    })]
                }),
                eg = ({
                    profile: e,
                    stats: t
                }) => {
                    let {
                        hasFeatureAccess: r
                    } = (0, m.useContext)(ed.cy);
                    return (0, a.jsxs)("aside", {
                        className: eh().sidebar,
                        "data-testid": "collector-sidebar",
                        children: [(0, a.jsxs)("div", {
                            className: eh().stats,
                            children: [(0, a.jsxs)("div", {
                                className: eh().avatarContainer,
                                children: [(0, a.jsx)(f.D, {
                                    coverSrcSet: (0, A.X)(e.avatarCoreImage, "avatars", v.A, [140, 280])
                                }), r("collectorSpacePremium") && ei(e) ? (0, a.jsxs)("div", {
                                    className: eh().profileActionsWrapper,
                                    children: [(0, a.jsx)(eu, {
                                        popupHeader: "Make your profile public",
                                        popupMessage: "By sharing your profile, it will become visible to others and accessible through the link",
                                        profile: e
                                    }), (0, a.jsx)(ea, {
                                        data: e,
                                        children: (0, a.jsx)(_.A, {
                                            height: C.l.SIZE16,
                                            width: C.l.SIZE16
                                        })
                                    })]
                                }) : null]
                            }), (0, a.jsx)("h2", {
                                className: eh().name,
                                "data-testid": "collector-nick",
                                children: e.nick
                            }), (0, a.jsx)("p", {
                                className: eh().desc,
                                "data-testid": "collector-description",
                                children: e.description
                            }), (0, a.jsx)("hr", {
                                className: eh().hr
                            }), (0, a.jsx)("ul", {
                                className: (0, c.A)(eh().list, {
                                    [eh().blurred]: !r("collectorSpacePremium")
                                }),
                                children: Object.values(t).map(e => (0, a.jsx)(e_, {
                                    displateType: e,
                                    value: e.quantity
                                }, e.short))
                            })]
                        }), r("collectorSpacePremium") ? (0, a.jsx)(h.A, {
                            className: eh().benefits,
                            routeInfo: (0, ep.a)({
                                hash: "displate-club-benefits"
                            }),
                            children: (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(g.A, {
                                    height: 28,
                                    width: 28
                                }), (0, a.jsx)("span", {
                                    className: eh().benefitsTitle,
                                    children: "Displate Club Benefits"
                                }), (0, a.jsx)(x, {
                                    height: 20,
                                    width: 20
                                })]
                            })
                        }) : (0, a.jsx)(h.A, {
                            className: eh().unlock,
                            routeInfo: (0, ep.a)({
                                hash: "offer"
                            }),
                            children: (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(g.A, {
                                    height: 28,
                                    width: 28
                                }), (0, a.jsx)("span", {
                                    className: eh().unlockTitle,
                                    children: "Unlock your profile"
                                }), (0, a.jsx)(x, {
                                    height: 20,
                                    width: 20
                                })]
                            })
                        })]
                    })
                };
            var ex = r(64060),
                eC = r(55796),
                ef = r(72758),
                eb = r(28030),
                ej = r(34622),
                ey = r(25282),
                eS = r(82924),
                ek = r.n(eS),
                eL = r(89099),
                eN = r(80208),
                ew = r(47765),
                eI = r(61287),
                eP = r.n(eI);
            let eE = ({
                    navigationItems: e
                }) => {
                    let t = (0, eL.useRouter)(),
                        r = (0, ew.aP)(),
                        [i, l] = (0, m.useState)(r.pagePathnames[0]);
                    (0, m.useEffect)(() => {
                        l(r.pagePathnames[0])
                    }, [r]);
                    let o = (0, m.useMemo)(() => e.map(({
                            label: e,
                            value: t
                        }) => ({
                            label: e,
                            value: t
                        })), [e]),
                        s = (0, m.useMemo)(() => e.reduce((e, {
                            value: t,
                            getRoute: r
                        }) => ({ ...e,
                            [t]: r()
                        }), {}), [e]);
                    return (0, a.jsx)("div", {
                        className: eP().navigation,
                        children: (0, a.jsx)(eN.R, {
                            activeOption: i,
                            name: "collector-navigation",
                            onChange: e => {
                                t.push(s[e], void 0, {
                                    scroll: !1
                                }), l(e)
                            },
                            options: o
                        })
                    })
                },
                eA = [{
                    label: "My Displates",
                    value: ef.O.pagePathnames[0],
                    getRoute: () => (0, ef.z)().route
                }, {
                    label: "Wishlist & Sets",
                    value: ej.C.pagePathnames[0],
                    getRoute: () => (0, ej.B)().route
                }, {
                    label: "Gallery",
                    value: ex.d.pagePathnames[0],
                    getRoute: () => (0, ex.E)().route
                }],
                eU = ({
                    children: e,
                    header: t,
                    collectorProfile: r,
                    isLoading: l
                }) => {
                    let o;
                    return (0, a.jsx)(ey.O, {
                        headerData: t,
                        children: l ? (0, a.jsx)(n, {}) : (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(p, {
                                coverSrcSet: (0, A.X)(r ? .backgroundCoreImage, "covers", "/images/artist/cover_bg_default.png", [1240, 2480])
                            }), (0, a.jsxs)("section", {
                                className: ek().container,
                                children: [r && (0, a.jsx)(eg, {
                                    profile: r,
                                    stats: {
                                        ULE: {
                                            short: "ULE",
                                            long: "Ultra Limited Editions",
                                            quantity: r.ultraLimitedEditionCount
                                        },
                                        LE: {
                                            short: "LE",
                                            long: "Limited Editions",
                                            quantity: r.limitedEditionCount
                                        },
                                        LU: {
                                            short: "LU",
                                            long: "Lumino",
                                            quantity: r.luminoCount
                                        },
                                        ED: {
                                            short: "ED",
                                            long: "Exclusive Drops",
                                            quantity: r.exclusiveDropCount
                                        },
                                        TD: {
                                            short: "TD",
                                            long: "Total Displates",
                                            quantity: r.totalCount
                                        }
                                    }
                                }), (0, a.jsxs)("div", {
                                    className: ek().pageWrapper,
                                    children: [!ei(r) && r ? .nick ? (0, a.jsx)(eE, {
                                        navigationItems: (o = r.nick, [{
                                            label: "My Displates",
                                            value: es.iy.pagePathnames[0],
                                            getRoute: () => (0, es.vc)(o).route
                                        }, {
                                            label: "Wishlist & Sets",
                                            value: eb.A.pagePathnames[0],
                                            getRoute: () => (0, eb.t)(o).route
                                        }, {
                                            label: "Gallery",
                                            value: eC.t.pagePathnames[0],
                                            getRoute: () => (0, eC.U)(o).route
                                        }])
                                    }) : (0, a.jsx)(eE, {
                                        navigationItems: eA
                                    }), (0, a.jsx)(i.Z, {
                                        children: e
                                    })]
                                })]
                            })]
                        })
                    })
                }
        },
        92214: e => {
            e.exports = {
                wrapper: "CollectorEditProfilePopup_wrapper__qEnlK",
                editBtn: "CollectorEditProfilePopup_editBtn__UKTOH",
                popupTitle: "CollectorEditProfilePopup_popupTitle__p_6QF",
                popup: "CollectorEditProfilePopup_popup__x7QbF"
            }
        },
        94140: e => {
            e.exports = {
                wrapper: "CollectorEditProfileForm_wrapper__Loa7J",
                inputLabel: "CollectorEditProfileForm_inputLabel__NHSDh",
                visibilityLabel: "CollectorEditProfileForm_visibilityLabel__pl2tV",
                inputContainer: "CollectorEditProfileForm_inputContainer__mitwJ",
                hint: "CollectorEditProfileForm_hint___zVqw",
                buttonGroup: "CollectorEditProfileForm_buttonGroup__9AUNN",
                avatarUploader: "CollectorEditProfileForm_avatarUploader__uIufs",
                coverUploader: "CollectorEditProfileForm_coverUploader__GBQFP"
            }
        },
        94355: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => a
            });
            let a = e => new Promise((t, r) => {
                let a = new FileReader;
                a.onload = () => {
                    t(new Blob([a.result], {
                        type: "image/jpeg"
                    }))
                }, a.onerror = r, a.readAsArrayBuffer(e)
            })
        },
        94811: e => {
            e.exports = {
                pageTransition: "PageTransition_pageTransition__qJ_DL",
                visible: "PageTransition_visible__XdYnH"
            }
        }
    }
]);
//#