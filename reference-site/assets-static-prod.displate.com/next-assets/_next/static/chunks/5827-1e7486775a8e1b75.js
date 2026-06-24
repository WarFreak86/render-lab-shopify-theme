(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [569, 5827], {
        305: (e, t, i) => {
            "use strict";
            i.d(t, {
                X: () => n
            });
            var a = i(37876),
                s = i(77161),
                r = i(87050);
            let o = {
                    [r.t.M]: {
                        width: 244,
                        height: 174,
                        x: 114,
                        y: 279
                    },
                    [r.t.L]: {
                        width: 307,
                        height: 219,
                        x: 85,
                        y: 234
                    }
                },
                l = {
                    [r.t.M]: {
                        width: 171,
                        height: 238,
                        x: 148,
                        y: 229
                    },
                    [r.t.L]: {
                        width: 214,
                        height: 298,
                        x: 128,
                        y: 161
                    }
                },
                n = ({
                    imageSrc: e,
                    imageSrcSet: t,
                    orientation: i,
                    size: n,
                    frame: d,
                    isGloss: u = !1,
                    isMatt: c = !1,
                    className: p,
                    enableClipPath: m = !1
                }) => {
                    let h = i === r.JH.HORIZONTAL ? o[n] : l[n],
                        x = (0, s.n9)(d || r.p1.NONE, i),
                        g = (0, s.qe)(n, i),
                        _ = u ? (0, s.Mb)(i) : void 0,
                        C = {
                            x: 0,
                            y: 0,
                            width: h.width,
                            height: h.height
                        };
                    x && (C = (0, s.VO)(h.width, h.height, g, i)), r.JH.VERTICAL;
                    let f = .011 * C.width,
                        w = .016 * C.height,
                        j = .978 * C.width,
                        v = .968 * C.height;
                    return (0, a.jsxs)("svg", {
                        className: p,
                        "data-testid": "artwork-picture-masked-svg",
                        height: "100%",
                        viewBox: `0 0 ${h.width} ${h.height}`,
                        width: "100%",
                        children: [m ? (0, a.jsx)("defs", {
                            children: (0, a.jsx)("clipPath", {
                                id: "artwork-clip",
                                children: (0, a.jsx)("rect", {
                                    height: v,
                                    width: j,
                                    x: f,
                                    y: w
                                })
                            })
                        }) : null, (0, a.jsxs)("g", {
                            clipPath: m ? "url(#artwork-clip)" : void 0,
                            children: [(0, a.jsx)("foreignObject", {
                                height: C.height,
                                name: "artworkImage",
                                width: C.width,
                                x: C.x,
                                y: C.y,
                                children: (0, a.jsx)("img", {
                                    alt: "artwork",
                                    "data-pin-nopin": "true",
                                    draggable: "false",
                                    loading: "lazy",
                                    src: e,
                                    srcSet: t,
                                    style: {
                                        display: "block",
                                        width: "100%",
                                        height: "100%"
                                    }
                                })
                            }), c ? (0, a.jsx)("rect", {
                                fill: "white",
                                height: C.height,
                                opacity: "0.12",
                                style: {
                                    mixBlendMode: "normal"
                                },
                                width: C.width,
                                x: C.x,
                                y: C.y
                            }) : null, u && _ ? (0, a.jsx)("foreignObject", {
                                height: C.height,
                                name: "glossImage",
                                width: C.width,
                                x: C.x,
                                y: C.y,
                                children: (0, a.jsx)("img", {
                                    alt: "gloss",
                                    draggable: "false",
                                    src: _,
                                    style: {
                                        display: "block",
                                        width: "100%",
                                        height: "100%"
                                    }
                                })
                            }) : null, x ? (0, a.jsx)("foreignObject", {
                                height: h.height,
                                name: "frameImage",
                                width: h.width,
                                x: 0,
                                y: 0,
                                children: (0, a.jsx)("img", {
                                    alt: "frame",
                                    draggable: "false",
                                    src: x,
                                    style: {
                                        display: "block",
                                        width: "100%",
                                        height: "100%"
                                    }
                                })
                            }) : null]
                        })]
                    })
                }
        },
        1441: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => ip
            });
            var a = i(37876),
                s = i(64968),
                r = i(15657),
                o = i(27735),
                l = i(38847),
                n = i(77518),
                d = i(14232),
                u = i(37872),
                c = i(23794),
                p = i(59140),
                m = i(13506),
                h = i(89473),
                x = i(36256),
                g = i(69241),
                _ = i(74359),
                C = i(87050);
            let f = () => (0, _.I)({
                queryKey: ["custom-displate-uploader-filters"],
                queryFn: () => C.$y.getCustomDisplateUploaderFilters()
            });
            var w = i(34457),
                j = i.n(w);
            let v = e => (0, a.jsx)("svg", {
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 210 45",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: (0, a.jsx)("path", {
                        d: "M1.47223e-05 43.3379V1.11589H28.892V11.7799H11.842V18.0419H28.086V28.2719H11.842V43.3379H1.47223e-05ZM31.5449 43.3379V1.11589H43.3249V43.3379H31.5449ZM47.0449 43.3379V1.11589H58.8249V32.3019H73.4569V43.3379H47.0449ZM80.1529 43.3379V12.1519H68.8689V1.11589H103.217V12.1519H91.9329V43.3379H80.1529ZM105.533 43.3379V1.11589H136.471V11.4699H117.375V16.9879H135.541V26.8459H117.375V32.9839H136.781V43.3379H105.533ZM139.803 43.3379V1.11589H158.837C168.509 1.11589 173.531 6.81989 173.531 14.8179C173.531 20.5219 170.369 25.1099 165.471 26.7839L176.259 43.2139V43.3379H161.627L151.645 27.1559V43.3379H139.803ZM157.287 11.2219H151.521V19.4679H157.287C159.829 19.4679 161.689 17.8559 161.689 15.3139C161.689 12.7719 159.829 11.2219 157.287 11.2219ZM192.304 44.3919C185.236 44.3919 179.222 41.7259 175.564 36.2699L183.624 28.8299C185.918 31.9299 189.452 33.9759 193.11 33.9759C195.652 33.9759 197.45 32.8599 197.45 30.9999C197.45 28.8919 195.342 28.0859 193.358 27.5899C183.996 25.4819 177.486 22.1959 177.486 13.8259C177.486 5.39389 184.678 -0.00011313 193.234 -0.00011313C199.558 -0.00011313 204.642 2.41789 208.424 6.94389L200.116 14.6319C197.698 11.7799 195.714 10.4159 193.172 10.4159C190.63 10.4159 188.956 11.6559 188.956 13.4539C188.956 15.3759 190.878 16.0579 192.862 16.4919C201.852 18.5379 209.044 21.4519 209.044 30.6899C209.044 38.8119 202.41 44.3919 192.304 44.3919Z",
                        fill: "#F4F2EB"
                    })
                }),
                I = e => (0, a.jsx)("svg", {
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 118 44",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: (0, a.jsx)("path", {
                        d: "M113.556 0C115.641 0 117.332 1.69072 117.332 3.77637V40.2236C117.332 42.3094 115.641 44 113.556 44H3.77637C1.69063 44 7.97864e-06 42.3094 0 40.2236V3.77637C0.000110827 1.69072 1.69069 0 3.77637 0H113.556ZM35.9014 15.9248C32.292 9.90658 24.165 8.31812 17.9209 10.8662C14.7078 12.1779 10.8369 15.1003 10.4795 18.8301H10.4785C10.447 19.1625 10.4429 19.7949 10.4785 20.124C10.5392 20.6901 10.8793 21.6277 11.2197 22.0918C12.6011 23.9759 15.368 24.192 17.5127 24.0068L16.0635 28.3203C16.509 28.8103 18.6016 29.7052 19.1279 29.4648C19.5751 29.2595 20.1903 27.013 20.3359 26.4668C20.6133 25.4252 20.7746 24.354 21.0674 23.3164L33.5205 19.2344C34.0825 22.5007 32.894 25.5233 30.4492 27.6865C27.152 30.6051 20.6716 32.4925 16.3789 31.4072C15.1619 31.0991 14.0776 30.5103 13.7832 29.1914C12.7805 29.1632 12.6598 30.1697 12.8652 30.959C13.6271 33.8905 15.4996 35.048 18.4434 35.2461C25.0772 35.6916 34.4795 31.386 36.7354 24.7549C37.46 22.6232 37.4165 20.2033 36.7695 18.0586L36.834 17.9805C37.535 17.8308 38.3976 17.3857 39.1221 17.5537C39.5224 17.6467 39.4398 17.9608 39.4131 18.2939C39.2028 20.9385 37.3288 25.8515 38.7109 28.1562C40.0099 30.3208 43.6405 29.5877 45.1357 27.9736C45.4744 28.1863 45.7491 28.4856 46.0918 28.6982C50.2422 31.2772 57.5082 26.6522 52.8467 22.3467C51.9255 21.4959 49.4837 20.0596 49.3721 18.7803C49.3238 18.2216 49.7959 17.5555 50.3359 17.4131C52.0011 16.9732 53.1568 19.2069 52.2793 20.5283C55.3742 20.1499 56.3554 17.2242 53.0869 15.8809C51.0216 15.0326 47.765 15.5546 46.3916 17.4297C44.0981 20.5618 49.3701 22.1673 50.4854 24.2246C51.654 26.3814 49.0289 28.2674 47.3896 26.916C46.4285 26.1236 47.1745 25.6981 47.1777 24.7666C47.1818 23.6612 46.4632 22.4974 45.2285 22.8975C43.8585 23.3414 43.9185 25.5667 44.3213 26.6787C43.7497 27.0238 42.8339 27.3737 42.2275 26.9854C41.621 26.5964 41.7848 25.717 41.8633 25.1113C42.2215 22.3399 42.9398 19.6016 43.3887 16.8447C43.3329 14.9816 41.6621 15.6429 40.4951 15.9785C39.1939 16.3521 37.9464 16.912 36.6436 17.2832C36.5235 17.2538 36.0242 16.1301 35.9014 15.9248ZM68.2852 20.3213C67.9018 21.2513 67.4017 22.1388 66.7119 22.873C66.9537 21.3867 67.0636 19.921 66.5938 18.4629C65.8796 16.2478 63.9459 15.1014 61.709 16.0889L60.3662 16.9688C60.6242 14.9041 58.3083 15.771 57.0508 15.5947L54.0537 33.0176C53.9591 34.5307 55.9867 35.2365 57.2168 35.209L57.2803 35.1123C57.404 32.7284 58.0097 30.4059 58.3438 28.0479C59.349 29.2431 60.4424 29.883 62.0469 29.4463C63.9447 28.9294 65.1623 27.0135 65.958 25.3525C66.0453 25.1706 66.095 24.8274 66.1807 24.7061C66.2357 24.6284 66.6044 24.4728 66.7451 24.3604C67.0734 24.0984 67.3972 23.8292 67.6826 23.5195C67.6867 24.5991 67.5092 25.6303 67.8262 26.6904C68.3049 28.2916 69.8466 29.3992 71.4834 29.502C73.1202 29.6047 74.2202 28.5416 75.1211 27.3213C76.9181 30.7259 80.511 29.4699 82.3994 26.916C82.5594 26.884 82.4978 26.9524 82.5361 27.0186C83.0844 27.9486 83.4292 28.7974 84.5371 29.2236C85.3563 29.539 86.9946 29.4036 87.4395 28.5635C87.7144 28.0436 87.3143 28.0713 87.0078 27.8037C84.9253 25.9849 84.9786 23.2615 85.5342 20.7529C85.6644 20.165 86.124 19.3539 85.8555 18.7676C85.6459 18.3116 84.65 18.5812 84.2246 18.4971C83.5192 15.6226 80.9903 14.4333 78.418 16.1426C76.2684 17.5716 74.6911 20.7711 74.5156 23.3193C74.4753 23.9041 74.6306 25.0626 74.4697 25.5381C74.3943 25.7614 73.6003 26.6133 73.3828 26.7969C70.7866 28.9867 70.9274 25.1229 71.1279 23.4893C71.6374 19.3414 72.9113 15.0343 73.4629 10.8613C73.4984 10.268 73.3533 9.88686 72.8164 9.61035H70.1484L68.2852 20.3213ZM89.2285 15.5947C87.8343 15.5276 86.3898 15.7561 85.0264 15.4326C84.897 15.8134 84.873 16.3872 85.1904 16.6816C85.2244 16.7124 85.5298 16.8887 85.5508 16.8887H88.9873C88.7471 19.1602 88.0341 21.4771 87.7842 23.7324C87.4979 26.3122 87.9504 28.8851 90.8594 29.5312C93.2207 30.0559 94.3166 28.6429 95.6582 26.998L96.7461 28.4141C97.9988 29.4945 99.478 29.7975 101.085 29.4336C104.542 28.6498 106.426 24.6957 107.501 21.6592V21.416C107.371 21.1758 106.692 20.631 106.447 20.8027C106.394 20.8399 106.041 21.8265 105.954 22.0117C105.136 23.7576 103.504 26.6918 101.598 27.3584C99.9325 27.9407 98.5615 26.9445 98.4531 25.2236C101.838 25.0375 104.939 20.23 103.845 17.1084C103.119 15.0398 100.536 14.826 98.8574 15.8838C96.3957 17.4349 95.2903 20.8742 95.0469 23.6367C95.0178 23.9707 95.0982 24.3759 95.0537 24.6953C94.972 25.2889 93.352 26.9941 92.7793 27.2725C90.827 28.2211 91.1821 25.0388 91.1699 23.9648L92.4541 16.9355C92.5665 16.7698 95.0331 16.9809 95.4043 17.0439C95.7969 16.8211 95.5997 15.5949 95.2529 15.5947H92.7061C92.8396 14.0979 93.4383 12.4232 93.5176 10.9482C93.554 10.2803 93.5143 9.91279 92.8682 9.61035H90.2812L89.2285 15.5947ZM80.8008 17.877C81.4874 17.7767 81.9384 18.3345 82.1357 18.9297C82.7673 20.8326 82.0305 23.9189 81.0156 25.6172C80.422 26.6111 79.0267 28.0584 78.2188 26.4062C77.5114 24.9578 77.9417 22.3706 78.4746 20.8916C78.807 19.9697 79.7268 18.0347 80.8008 17.877ZM58.9912 23.6826C59.237 23.6632 59.2884 23.951 59.4355 24.0869C60.262 24.8462 61.1915 25.2114 62.3066 25.3408C61.9144 26.2053 60.5434 27.7682 59.5576 26.7959C59.3514 26.5929 58.9912 25.6894 58.9912 25.4209V23.6826ZM60.7832 19.0469C61.6987 17.7699 63.1276 17.0896 63.5635 19.1494C63.9063 20.7707 63.4121 22.6388 62.8711 24.168V24.1689C62.0106 24.1164 59.6158 22.6307 59.5576 21.7783C59.5239 21.28 60.4556 19.504 60.7832 19.0469ZM101.554 17.7012C102.549 17.8452 102.109 19.7457 101.899 20.3838C101.402 21.8976 100.171 23.8387 98.3652 23.7627H98.3662V22.5098C98.3662 22.0747 98.8073 20.7574 98.999 20.3125C99.3532 19.4909 100.558 17.5572 101.554 17.7012ZM13.3457 18.9072C14.4407 13.1331 23.0822 11.2263 27.8828 12.9473C30.2452 13.7941 32.1132 15.5986 33.2285 17.8145L33.4414 18.2627L21.2334 22.3066C21.3434 21.3783 21.5534 20.449 21.6367 19.5166C21.6941 18.8819 21.8269 17.5308 21.6807 16.9678C21.4648 16.139 19.5179 15.3656 18.7695 15.5156C18.2326 15.624 18.5542 16.0681 18.5664 16.3633C18.6594 18.5711 18.3126 20.6368 17.918 22.792C15.242 22.796 12.7282 22.1651 13.3457 18.9072ZM41.4199 11.2285L39.7305 11.4414L40.9727 12.6074L40.6523 14.2793L42.1445 13.459L43.6367 14.2793L43.3174 12.6074L44.5586 11.4414L42.8691 11.2285L42.1445 9.68848L41.4199 11.2285Z",
                        fill: "#F4F2EB"
                    })
                }),
                D = e => (0, a.jsx)("svg", {
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 44 44",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: (0, a.jsx)("path", {
                        d: "M37.7139 0C41.1851 0 43.9998 2.81392 44 6.28516V37.7139C44 41.1852 41.1852 43.999 37.7139 43.999H6.28613C2.81476 43.999 0 41.1852 0 37.7139V6.28516C0.000166253 2.81392 2.81486 0 6.28613 0H37.7139ZM16.8438 15.8652L4.41406 17.0176L13.792 25.2559L11.0479 37.4326L21.7803 31.0596L32.5137 37.4326L29.7695 25.2559L39.1465 17.0176L26.7178 15.8652L21.7803 4.40039L16.8438 15.8652Z",
                        fill: "#F4F2EB"
                    })
                }),
                S = e => (0, a.jsx)("svg", {
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 172 45",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: (0, a.jsx)("path", {
                        d: "M16.74 44.3919C9.67201 44.3919 3.65801 41.7259 7.36117e-06 36.2699L8.06001 28.8299C10.354 31.9299 13.888 33.9759 17.546 33.9759C20.088 33.9759 21.886 32.8599 21.886 30.9999C21.886 28.8919 19.778 28.0859 17.794 27.5899C8.43201 25.4819 1.92201 22.1959 1.92201 13.8259C1.92201 5.39389 9.11401 -0.00011313 17.67 -0.00011313C23.994 -0.00011313 29.078 2.41789 32.86 6.94389L24.552 14.6319C22.134 11.7799 20.15 10.4159 17.608 10.4159C15.066 10.4159 13.392 11.6559 13.392 13.4539C13.392 15.3759 15.314 16.0579 17.298 16.4919C26.288 18.5379 33.48 21.4519 33.48 30.6899C33.48 38.8119 26.846 44.3919 16.74 44.3919ZM45.2392 43.3379V12.1519H33.9552V1.11589H68.3032V12.1519H57.0192V43.3379H45.2392ZM83.8022 43.3379V28.2099L69.1702 1.23989V1.11589H82.5622L90.0022 16.2439L96.8222 1.11589H110.214V1.23989L95.6442 28.1479V43.3379H83.8022ZM111.489 43.3379V1.11589H123.269V32.3019H137.901V43.3379H111.489ZM140.43 43.3379V1.11589H171.368V11.4699H152.272V16.9879H170.438V26.8459H152.272V32.9839H171.678V43.3379H140.43Z",
                        fill: "#F4F2EB"
                    })
                });
            var b = i(40397),
                y = i.n(b);
            let L = ({
                className: e,
                hideOnMobile: t
            }) => (0, a.jsxs)("div", {
                className: (0, g.A)(e, {
                    [y().hiddenOnMobile]: t
                }),
                children: [(0, a.jsxs)("h2", {
                    className: y().title,
                    children: [(0, a.jsxs)("span", {
                        className: y().titleLine,
                        children: [(0, a.jsx)(I, {
                            className: y().logo,
                            height: 36,
                            width: 96
                        }), (0, a.jsx)(S, {
                            className: y().styleText,
                            height: 40,
                            width: 135
                        })]
                    }), (0, a.jsxs)("span", {
                        className: y().titleLine,
                        children: [(0, a.jsx)(v, {
                            className: y().filtersText,
                            height: 40,
                            width: 165
                        }), (0, a.jsx)(D, {
                            className: y().star,
                            height: 36,
                            width: 36
                        })]
                    })]
                }), (0, a.jsx)("p", {
                    className: y().subtitle,
                    children: "Upload your photo and watch it become a masterpiece - instantly"
                })]
            });
            var k = i(49503),
                V = i(30305),
                T = i(10769),
                z = i(59015),
                N = i(76311),
                A = i.n(N);
            let O = ({
                    selectedFilter: e
                }) => {
                    let t, [i, s] = (0, d.useState)(!1),
                        r = (0, l.u)(o.DY),
                        n = r ? z.T9 : z.Eu,
                        u = (t = n[e] || n.original, [{
                            srcSet: (0, T.v9)({
                                assetPath: t,
                                widths: [768, 1536]
                            }),
                            media: `(max-width: ${V.D.md-1}px)`
                        }, {
                            srcSet: (0, T.v9)({
                                assetPath: t,
                                widths: [1024, 2048]
                            }),
                            media: `(max-width: ${V.D.lg-1}px)`
                        }, {
                            srcSet: (0, T.v9)({
                                assetPath: t,
                                widths: [1200, 2400]
                            })
                        }]);
                    (0, d.useEffect)(() => {
                        s(!1)
                    }, [e, r]);
                    let c = () => {
                        s(!0)
                    };
                    return (0, a.jsx)("div", {
                        className: A().container,
                        "data-testid": "ai-filters-main-picture",
                        children: (0, a.jsx)(k.D, {
                            alt: `Preview with ${e} filter`,
                            className: (0, g.A)(A().image, {
                                [A().loaded]: i
                            }),
                            height: 548,
                            imageFallbackCoreUrl: u[0].srcSet.widthsSrc[0],
                            imageSets: u,
                            loading: "lazy",
                            onError: c,
                            onLoaded: c,
                            priority: "auto",
                            width: 400
                        }, e)
                    })
                },
                M = e => (0, a.jsxs)("svg", {
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 32 32",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: [(0, a.jsx)("path", {
                        d: "M28 15V26C28 27.1046 27.1046 28 26 28H7C5.89543 28 5 27.1046 5 26V15M16 6.5C16 4.567 14.433 3 12.5 3C10.567 3 9 4.567 9 6.5C9 8.433 10.567 10 12.5 10C13.4793 10 16 10 16 10M16 6.5C16 7.45365 16 10 16 10M16 6.5C16 4.567 17.567 3 19.5 3C21.433 3 23 4.567 23 6.5C23 8.433 21.433 10 19.5 10C18.5207 10 16 10 16 10M16 10V28M4.5 15H28.5C29.3284 15 30 14.3284 30 13.5V11.5C30 10.6716 29.3284 10 28.5 10H4.5C3.67157 10 3 10.6716 3 11.5V13.5C3 14.3284 3.67157 15 4.5 15Z",
                        stroke: "white",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, a.jsx)("path", {
                        d: "M28 15V26C28 27.1046 27.1046 28 26 28H7C5.89543 28 5 27.1046 5 26V15M16 6.5C16 4.567 14.433 3 12.5 3C10.567 3 9 4.567 9 6.5C9 8.433 10.567 10 12.5 10C13.4793 10 16 10 16 10M16 6.5C16 7.45365 16 10 16 10M16 6.5C16 4.567 17.567 3 19.5 3C21.433 3 23 4.567 23 6.5C23 8.433 21.433 10 19.5 10C18.5207 10 16 10 16 10M16 10V28M4.5 15H28.5C29.3284 15 30 14.3284 30 13.5V11.5C30 10.6716 29.3284 10 28.5 10H4.5C3.67157 10 3 10.6716 3 11.5V13.5C3 14.3284 3.67157 15 4.5 15Z",
                        stroke: "url(#paint0_linear_6366_15740)",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, a.jsx)("defs", {
                        children: (0, a.jsxs)("linearGradient", {
                            id: "paint0_linear_6366_15740",
                            x1: 7.04792,
                            y1: 6.74991,
                            x2: 24.6483,
                            y2: 23.7217,
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, a.jsx)("stop", {
                                offset: .163462,
                                stopColor: "#55FCFF"
                            }), (0, a.jsx)("stop", {
                                offset: .697115,
                                stopColor: "#D9FF00"
                            })]
                        })
                    })]
                }),
                P = e => (0, a.jsxs)("svg", {
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 32 32",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: [(0, a.jsx)("path", {
                        d: "M7.99996 20.001L2.66663 14.6677L11.6666 5.64099C13.6451 3.86943 16.2269 2.92297 18.8816 2.99613C21.5363 3.0693 24.0621 4.15653 25.9399 6.03438C27.8178 7.91222 28.905 10.438 28.9782 13.0927C29.0513 15.7474 28.1049 18.3292 26.3333 20.3077L17.3333 29.3343L12 24.001L20.52 15.521C20.9402 14.9718 21.1467 14.2886 21.1011 13.5985C21.0554 12.9084 20.7606 12.2584 20.2716 11.7694C19.7825 11.2804 19.1325 10.9856 18.4425 10.9399C17.7524 10.8942 17.0692 11.1007 16.52 11.521L7.99996 20.001Z",
                        stroke: "white",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, a.jsx)("path", {
                        d: "M7.99996 20.001L2.66663 14.6677L11.6666 5.64099C13.6451 3.86943 16.2269 2.92297 18.8816 2.99613C21.5363 3.0693 24.0621 4.15653 25.9399 6.03438C27.8178 7.91222 28.905 10.438 28.9782 13.0927C29.0513 15.7474 28.1049 18.3292 26.3333 20.3077L17.3333 29.3343L12 24.001L20.52 15.521C20.9402 14.9718 21.1467 14.2886 21.1011 13.5985C21.0554 12.9084 20.7606 12.2584 20.2716 11.7694C19.7825 11.2804 19.1325 10.9856 18.4425 10.9399C17.7524 10.8942 17.0692 11.1007 16.52 11.521L7.99996 20.001Z",
                        stroke: "url(#paint0_linear_6366_15745)",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, a.jsx)("path", {
                        d: "M6.66663 10.6665L12 15.9998",
                        stroke: "white",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, a.jsx)("path", {
                        d: "M6.66663 10.6665L12 15.9998",
                        stroke: "url(#paint1_linear_6366_15745)",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, a.jsx)("path", {
                        d: "M16 20L21.3333 25.3333",
                        stroke: "white",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, a.jsx)("path", {
                        d: "M16 20L21.3333 25.3333",
                        stroke: "url(#paint2_linear_6366_15745)",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, a.jsxs)("defs", {
                        children: [(0, a.jsxs)("linearGradient", {
                            id: "paint0_linear_6366_15745",
                            x1: 6.61192,
                            y1: 6.94341,
                            x2: 25.0488,
                            y2: 23.3883,
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, a.jsx)("stop", {
                                offset: .163462,
                                stopColor: "#55FCFF"
                            }), (0, a.jsx)("stop", {
                                offset: .697115,
                                stopColor: "#D9FF00"
                            })]
                        }), (0, a.jsxs)("linearGradient", {
                            id: "paint1_linear_6366_15745",
                            x1: 7.46621,
                            y1: 11.4665,
                            x2: 11.1995,
                            y2: 14.7997,
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, a.jsx)("stop", {
                                offset: .163462,
                                stopColor: "#55FCFF"
                            }), (0, a.jsx)("stop", {
                                offset: .697115,
                                stopColor: "#D9FF00"
                            })]
                        }), (0, a.jsxs)("linearGradient", {
                            id: "paint2_linear_6366_15745",
                            x1: 16.7996,
                            y1: 20.8,
                            x2: 20.5328,
                            y2: 24.1332,
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, a.jsx)("stop", {
                                offset: .163462,
                                stopColor: "#55FCFF"
                            }), (0, a.jsx)("stop", {
                                offset: .697115,
                                stopColor: "#D9FF00"
                            })]
                        })]
                    })]
                }),
                H = e => (0, a.jsxs)("svg", {
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 32 32",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: [(0, a.jsx)("path", {
                        d: "M13.0843 21.2051L12 25L10.9157 21.2051C10.3462 19.2118 8.78817 17.6538 6.79492 17.0843L3 16L6.79492 14.9157C8.78817 14.3462 10.3462 12.7882 10.9157 10.7949L12 7L13.0843 10.7949C13.6538 12.7882 15.2118 14.3462 17.2051 14.9157L21 16L17.2051 17.0843C15.2118 17.6538 13.6538 19.2118 13.0843 21.2051Z",
                        stroke: "white",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, a.jsx)("path", {
                        d: "M13.0843 21.2051L12 25L10.9157 21.2051C10.3462 19.2118 8.78817 17.6538 6.79492 17.0843L3 16L6.79492 14.9157C8.78817 14.3462 10.3462 12.7882 10.9157 10.7949L12 7L13.0843 10.7949C13.6538 12.7882 15.2118 14.3462 17.2051 14.9157L21 16L17.2051 17.0843C15.2118 17.6538 13.6538 19.2118 13.0843 21.2051Z",
                        stroke: "url(#paint0_linear_6366_15735)",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, a.jsx)("path", {
                        d: "M24.3452 11.6194L24 13L23.6548 11.6194C23.2518 10.0071 21.9929 8.74822 20.3806 8.34515L19 8L20.3806 7.65485C21.9929 7.25178 23.2518 5.9929 23.6548 4.38062L24 3L24.3452 4.38062C24.7482 5.9929 26.0071 7.25178 27.6194 7.65485L29 8L27.6194 8.34515C26.0071 8.74822 24.7482 10.0071 24.3452 11.6194Z",
                        stroke: "white",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, a.jsx)("path", {
                        d: "M24.3452 11.6194L24 13L23.6548 11.6194C23.2518 10.0071 21.9929 8.74822 20.3806 8.34515L19 8L20.3806 7.65485C21.9929 7.25178 23.2518 5.9929 23.6548 4.38062L24 3L24.3452 4.38062C24.7482 5.9929 26.0071 7.25178 27.6194 7.65485L29 8L27.6194 8.34515C26.0071 8.74822 24.7482 10.0071 24.3452 11.6194Z",
                        stroke: "url(#paint1_linear_6366_15735)",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, a.jsx)("path", {
                        d: "M22.5257 27.423L22 29L21.4743 27.423C21.1757 26.5272 20.4728 25.8243 19.577 25.5257L18 25L19.577 24.4743C20.4728 24.1757 21.1757 23.4728 21.4743 22.577L22 21L22.5257 22.577C22.8243 23.4728 23.5272 24.1757 24.423 24.4743L26 25L24.423 25.5257C23.5272 25.8243 22.8243 26.5272 22.5257 27.423Z",
                        stroke: "white",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, a.jsx)("path", {
                        d: "M22.5257 27.423L22 29L21.4743 27.423C21.1757 26.5272 20.4728 25.8243 19.577 25.5257L18 25L19.577 24.4743C20.4728 24.1757 21.1757 23.4728 21.4743 22.577L22 21L22.5257 22.577C22.8243 23.4728 23.5272 24.1757 24.423 24.4743L26 25L24.423 25.5257C23.5272 25.8243 22.8243 26.5272 22.5257 27.423Z",
                        stroke: "url(#paint2_linear_6366_15735)",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, a.jsxs)("defs", {
                        children: [(0, a.jsxs)("linearGradient", {
                            id: "paint0_linear_6366_15735",
                            x1: 6.89799,
                            y1: 6.8999,
                            x2: 25.0975,
                            y2: 23.1495,
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, a.jsx)("stop", {
                                offset: .163462,
                                stopColor: "#55FCFF"
                            }), (0, a.jsx)("stop", {
                                offset: .697115,
                                stopColor: "#D9FF00"
                            })]
                        }), (0, a.jsxs)("linearGradient", {
                            id: "paint1_linear_6366_15735",
                            x1: 6.89799,
                            y1: 6.8999,
                            x2: 25.0975,
                            y2: 23.1495,
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, a.jsx)("stop", {
                                offset: .163462,
                                stopColor: "#55FCFF"
                            }), (0, a.jsx)("stop", {
                                offset: .697115,
                                stopColor: "#D9FF00"
                            })]
                        }), (0, a.jsxs)("linearGradient", {
                            id: "paint2_linear_6366_15735",
                            x1: 6.89799,
                            y1: 6.8999,
                            x2: 25.0975,
                            y2: 23.1495,
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, a.jsx)("stop", {
                                offset: .163462,
                                stopColor: "#55FCFF"
                            }), (0, a.jsx)("stop", {
                                offset: .697115,
                                stopColor: "#D9FF00"
                            })]
                        })]
                    })]
                });
            var Z = i(27555),
                F = i(54111),
                E = i(35891),
                U = i(8568),
                B = i(14501),
                W = i.n(B);
            let R = ({
                className: e
            }) => {
                let {
                    userInfo: t,
                    fetchedUserInfo: i
                } = (0, d.useContext)(E.cy);
                if (!i) return (0, a.jsx)(x.$n, {
                    className: (0, g.A)(W().linkWrapper, e),
                    "data-testid": "upload-and-style-button",
                    disabled: !0,
                    fullWidth: !0,
                    variant: "secondaryLightOutline",
                    children: "Loading..."
                });
                if (!t ? .account.isUserLoggedIn) {
                    let t = (0, U.$)({
                        absolute: !0
                    }).route;
                    return (0, a.jsx)(x.$n, {
                        asChild: !0,
                        className: (0, g.A)(W().linkWrapper, e),
                        "data-testid": "upload-and-style-button",
                        fullWidth: !0,
                        variant: "secondaryLightOutline",
                        children: (0, a.jsx)(Z.A, {
                            routeInfo: (0, F.NW)({
                                query: {
                                    redirectUrl: t
                                }
                            }),
                            children: "Log in to style your image"
                        })
                    })
                }
                return (0, a.jsx)(x.$n, {
                    asChild: !0,
                    className: (0, g.A)(W().linkWrapper, e),
                    "data-testid": "upload-and-style-button",
                    fullWidth: !0,
                    variant: "secondaryDarkOutline",
                    children: (0, a.jsx)(Z.A, {
                        routeInfo: (0, U.$)(),
                        children: "Upload and style your image"
                    })
                })
            };
            var $ = i(19989),
                K = i.n($);
            let G = () => {
                let e = (0, l.u)(o.DY);
                return (0, a.jsxs)("div", {
                    className: K().container,
                    "data-testid": "ai-filters-textbox",
                    children: [(0, a.jsx)(L, {
                        hideOnMobile: !0
                    }), (0, a.jsxs)("ul", {
                        className: K().featuresList,
                        children: [(0, a.jsxs)("li", {
                            className: K().featureItem,
                            children: [(0, a.jsx)(H, {
                                className: (0, g.A)(K().featureIcon, {
                                    [K().featureIconCampaign]: e
                                })
                            }), (0, a.jsxs)("div", {
                                className: K().featureContent,
                                children: [(0, a.jsx)("h3", {
                                    className: K().featureItemTitle,
                                    children: "Turn your photos into one-of-a-kind artwork"
                                }), (0, a.jsx)("p", {
                                    className: K().featureItemText,
                                    children: "Not just printed - transformed with filters that make every piece uniquely yours."
                                })]
                            })]
                        }), (0, a.jsxs)("li", {
                            className: K().featureItem,
                            children: [(0, a.jsx)(M, {
                                className: (0, g.A)(K().featureIcon, {
                                    [K().featureIconCampaign]: e
                                })
                            }), (0, a.jsxs)("div", {
                                className: K().featureContent,
                                children: [(0, a.jsx)("h3", {
                                    className: K().featureItemTitle,
                                    children: e ? "The most personal Valentine's gift" : "The most personal gift you can give"
                                }), (0, a.jsx)("p", {
                                    className: K().featureItemText,
                                    children: e ? "Skip the flowers – keep the memories! For moments that deserve more than a frame." : "Your memories turned into art - thoughtful, emotional, unforgettable."
                                })]
                            })]
                        }), (0, a.jsxs)("li", {
                            className: K().featureItem,
                            children: [(0, a.jsx)(P, {
                                className: (0, g.A)(K().featureIcon, {
                                    [K().featureIconCampaign]: e
                                })
                            }), (0, a.jsxs)("div", {
                                className: K().featureContent,
                                children: [(0, a.jsx)("h3", {
                                    className: K().featureItemTitle,
                                    children: e ? "Hang it in a heartbeat" : "No tools needed - hangs in seconds"
                                }), (0, a.jsx)("p", {
                                    className: K().featureItemText,
                                    children: e ? 'From "aww" to "wow!" in seconds with tool-free magnetic mounting.' : "Magnetic mounting means no drills, no nails, no hassle."
                                })]
                            })]
                        })]
                    }), (0, a.jsx)(R, {
                        className: W().linkWrapperHiddenDesktop
                    })]
                })
            };
            var q = i(60687),
                J = i(63057),
                Y = i.n(J);
            let X = ({
                    customDisplateUploaderFilters: e,
                    onFilterSelect: t,
                    selectedFilter: i,
                    onFilterHover: s
                }) => {
                    let r = e ? .styles ? ? [],
                        o = (0, z.H0)(r);
                    return (0, a.jsxs)("div", {
                        className: Y().container,
                        "data-testid": "ai-filters-thumbnails",
                        children: [(0, a.jsx)("div", {
                            className: Y().grid,
                            children: o.map(e => (0, a.jsx)("div", {
                                children: (0, a.jsx)(q.J, {
                                    filter: e,
                                    isSelected: i === e.slug,
                                    onHover: s,
                                    onSelect: t
                                })
                            }, e.slug))
                        }), (0, a.jsx)("div", {
                            className: Y().sliderContainer,
                            children: (0, a.jsx)(x.FN, {
                                gap: "md",
                                showArrows: !1,
                                children: o.map(e => (0, a.jsx)("div", {
                                    className: "w-20",
                                    children: (0, a.jsx)(q.J, {
                                        filter: e,
                                        isSelected: i === e.slug,
                                        onHover: s,
                                        onSelect: t
                                    })
                                }, e.slug))
                            })
                        }), (0, a.jsx)(R, {
                            className: W().linkWrapperHiddenMobile
                        })]
                    })
                },
                Q = () => {
                    let e, t, i, s, [r, n] = (0, d.useState)("original"),
                        {
                            data: u
                        } = f(),
                        c = (0, l.u)(o.DY),
                        {
                            preloadFilterImage: p
                        } = (e = (0, d.useRef)(new Set), t = (0, l.u)(o.DY), i = (0, d.useMemo)(() => t ? z.T9 : z.Eu, [t]), s = (0, d.useCallback)(t => {
                            if (e.current.has(t)) return;
                            let i = new Image;
                            i.onerror = () => {
                                e.current.delete(t)
                            }, i.src = t, e.current.add(t)
                        }, []), (0, d.useEffect)(() => {
                            Object.values(i).forEach(e => {
                                s((0, T.v9)({
                                    assetPath: e,
                                    widths: [1200]
                                }).src)
                            })
                        }, [i, s]), {
                            preloadFilterImage: (0, d.useCallback)(e => {
                                let t = i[e];
                                t && (0, T.v9)({
                                    assetPath: t,
                                    widths: [768, 1024, 1200, 1536, 2048, 2400]
                                }).widthsSrc.forEach(e => {
                                    s(e)
                                })
                            }, [i, s])
                        });
                    return u ? .isAvailable && (u ? .styles ? .length ? ? 0) > 0 ? (0, a.jsxs)("section", {
                        className: (0, g.A)(j().container, {
                            [j().campaignMode]: c
                        }),
                        "data-testid": "ai-filters-section",
                        id: "filters-section",
                        children: [(0, a.jsx)("div", {
                            className: j().headerWrapper,
                            children: (0, a.jsx)(L, {})
                        }), (0, a.jsxs)("div", {
                            className: j().content,
                            children: [(0, a.jsx)("div", {
                                className: j().textBoxWrapper,
                                children: (0, a.jsx)(G, {})
                            }), (0, a.jsx)("div", {
                                className: j().mainPictureWrapper,
                                children: (0, a.jsx)(O, {
                                    selectedFilter: r
                                })
                            }), (0, a.jsx)("div", {
                                className: j().thumbnailsWrapper,
                                children: (0, a.jsx)(X, {
                                    customDisplateUploaderFilters: u,
                                    onFilterHover: p,
                                    onFilterSelect: e => {
                                        r === e ? n("original") : n(e)
                                    },
                                    selectedFilter: r
                                })
                            })]
                        })]
                    }) : null
                };
            var ee = i(47321),
                et = i(16364),
                ei = i(71697),
                ea = i(305),
                es = i(45579),
                er = i(3320),
                eo = i(70911),
                el = i(10698),
                en = i(82323),
                ed = i(17981),
                eu = i(56484),
                ec = i(94282),
                ep = i(45067),
                em = i(68440),
                eh = i(11654),
                ex = i(85883),
                eg = i(41443),
                e_ = i(71824),
                eC = i(15118),
                ef = i(71186),
                ew = i(55462),
                ej = i(69945),
                ev = i(13341),
                eI = i(24322),
                eD = i(73893),
                eS = i.n(eD);
            let eb = ({
                className: e
            }) => (0, a.jsxs)("p", {
                "aria-label": "Unsaved custom displate",
                className: (0, g.A)(eS().text, e),
                "data-testid": "unsaved-image-info",
                children: [(0, a.jsx)(eI.A, {
                    className: eS().icon,
                    height: 24,
                    width: 24
                }), "Don't lose it! Save it in your cart"]
            });
            var ey = i(8035),
                eL = i.n(ey);
            let ek = ({
                    hasId: e,
                    country: t,
                    estimatedDelivery: i,
                    isAvailable: s,
                    className: r
                }) => {
                    let [o, l] = (0, d.useState)(!0), n = (0, h.V)((0, u.k)(e => e.currentVariant)), c = n ? .itemSku, {
                        data: p
                    } = (0, ev._)({
                        select: e => e.positions.filter(ej.$C)
                    }), m = p ? .some(e => e.productData.sku === c) ? ? !1, x = e && !m;
                    return ((0, d.useEffect)(() => {
                        if (!x) return;
                        l(!0);
                        let e = setInterval(() => {
                            l(e => !e)
                        }, 5e3);
                        return () => clearInterval(e)
                    }, [x]), x) ? (0, a.jsxs)("div", {
                        className: (0, g.A)(eL().container, r),
                        children: [(0, a.jsx)("div", {
                            className: (0, g.A)(eL().slide, {
                                [eL().active]: o
                            }),
                            children: (0, a.jsx)(eb, {})
                        }), (0, a.jsx)("div", {
                            className: (0, g.A)(eL().slide, {
                                [eL().active]: !o
                            }),
                            children: (0, a.jsx)(ew.v, {
                                country: t,
                                estimatedDelivery: i,
                                isAvailable: s
                            })
                        })]
                    }) : (0, a.jsx)(ew.v, {
                        className: r,
                        country: t,
                        estimatedDelivery: i,
                        isAvailable: s
                    })
                },
                eV = (0, d.createContext)({});
            var eT = i(89099),
                ez = i(16903),
                eN = i(88368),
                eA = i(39806);

            function eO({
                id: e,
                enabled: t = !0
            }) {
                let i = (0, eT.useRouter)(),
                    {
                        countryCode: a
                    } = (0, el.C)(),
                    {
                        fetchedUserInfo: s
                    } = (0, d.useContext)(E.cy),
                    {
                        uvert: r
                    } = (0, eN.n)(),
                    o = (0, ez.j)(),
                    l = (0, _.I)({
                        queryKey: ["customDisplateUserData", e, a, r, o],
                        queryFn: () => C.$y.getCustomDisplatePdpDataForUserV3(e, a, o, r),
                        enabled: t && !!e && !!a && !!s,
                        retry: (e, t) => (!(t instanceof C.hD) || 403 !== t.status) && e < 3
                    });
                return (0, d.useEffect)(() => {
                    l.error && l.error instanceof C.hD && 403 === l.error.status && i.push((0, eA.iM)().route)
                }, [l.error, i]), l
            }
            var eM = i(62085),
                eP = i(32432),
                eH = i.n(eP);
            let eZ = ({
                    children: e
                }) => (0, a.jsx)("div", {
                    className: eH().buyBoxButtonWrapper,
                    children: (0, a.jsx)("div", {
                        className: eH().buttonWrapper,
                        children: e
                    })
                }),
                eF = ({
                    handleAfterAddToCart: e,
                    classes: t
                }) => {
                    let [i, s] = (0, d.useState)(eC.PM), {
                        customDisplate: {
                            shop: {
                                currency: r,
                                country: o,
                                estimatedDelivery: l,
                                isAvailable: n
                            }
                        }
                    } = (0, d.useContext)(eV), c = (0, h.V)((0, u.k)(e => e.currentVariant)), {
                        id: p,
                        hasId: m
                    } = (0, eM.K)(), {
                        data: g
                    } = eO({
                        id: p ? ? ""
                    }), {
                        mutate: _,
                        isPending: C
                    } = (0, ef.Q)({
                        onSuccess: async () => {
                            s(eC.Sc), e(), setTimeout(() => {
                                s(eC.PM)
                            }, 1e3)
                        },
                        onSettled() {
                            i !== eC.Sc && setTimeout(() => {
                                s(eC.PM)
                            }, 1e3)
                        }
                    });
                    return (0, a.jsxs)(eZ, {
                        children: [(0, a.jsx)(x.$n, {
                            "data-testid": "custom-displate-buy-btn",
                            fullWidth: !0,
                            loading: C,
                            onClick: () => {
                                let e = g ? .product ? .externalId;
                                _([{
                                    sku: c.itemSku,
                                    metadata: {
                                        productType: "custom",
                                        method: "custom_displate",
                                        externalId: e,
                                        currency: r,
                                        price: c.price ? .amountInCurrency
                                    }
                                }])
                            },
                            variant: "primary",
                            children: i
                        }), (0, a.jsx)(ek, {
                            className: t ? .deliveryInfo,
                            country: o,
                            estimatedDelivery: l,
                            hasId: m,
                            isAvailable: n
                        })]
                    })
                };
            var eE = i(51192),
                eU = i(99609);
            let eB = () => (0, a.jsx)(x.$n, {
                    "data-testid": "custom-displate-buy-btn",
                    fullWidth: !0,
                    loading: !0,
                    variant: "primary",
                    children: "Loading..."
                }),
                eW = () => (0, a.jsx)(x.$n, {
                    asChild: !0,
                    "data-testid": "custom-displate-upload-btn",
                    fullWidth: !0,
                    onClick: () => {
                        (0, eE.O)({
                            elementId: "custom_displate_pdp_upload_image_button"
                        })
                    },
                    variant: "primary",
                    children: (0, a.jsxs)(Z.A, {
                        routeInfo: (0, U.$)(),
                        children: ["Upload your image", (0, a.jsx)(eU.A, {
                            className: eH().uploadIcon
                        })]
                    })
                }),
                eR = () => {
                    let {
                        fetchedUserInfo: e
                    } = (0, d.useContext)(E.cy);
                    return e ? (0, a.jsx)(eZ, {
                        children: (0, a.jsx)(eW, {})
                    }) : (0, a.jsx)(eZ, {
                        children: (0, a.jsx)(eB, {})
                    })
                };
            var e$ = i(68873);
            let eK = "dont_lose_your_design_dialog",
                eG = () => (0, eE.O)({
                    elementId: `${eK}_order_now_button`
                }),
                eq = () => (0, eE.O)({
                    elementId: "dont_lose_your_design_drawer_login_button"
                }),
                eJ = ({
                    redirectUrl: e
                }) => (0, a.jsxs)("div", {
                    className: "mb-6 flex flex-col gap-3",
                    "data-testid": "save-design-drawer-info",
                    children: [(0, a.jsx)("h3", {
                        className: "text-heading-h6 text-text-primary",
                        children: "Don't lose your design"
                    }), (0, a.jsxs)("p", {
                        className: "text-body-md-default text-text-primary",
                        children: [(0, a.jsx)(x.N_, {
                            asChild: !0,
                            children: (0, a.jsx)(Z.A, {
                                "data-testid": "save-design-drawer-info-login",
                                onClick: eq,
                                routeInfo: (0, F.NW)({
                                    query: {
                                        redirectUrl: e
                                    }
                                }),
                                children: "Log in or sign up"
                            })
                        }), " ", "to save your design in the cart for 90 days."]
                    }), (0, a.jsx)("p", {
                        className: "text-body-md-default text-text-primary",
                        children: "You can also continue as a guest and proceed to the cart to order now."
                    })]
                }),
                eY = ({
                    open: e,
                    onOpenChange: t,
                    onContinueAsGuest: i,
                    redirectUrl: s = (0, eA.iM)(void 0, {
                        absolute: !0
                    }).route,
                    blocking: r = !1
                }) => {
                    let o = (0, d.useRef)(!1);
                    (0, d.useEffect)(() => {
                        e && ((0, e$.Z)({
                            elementId: eK
                        }), o.current = !1)
                    }, [e]);
                    let l = "Don't lose your design",
                        n = (0, a.jsxs)(a.Fragment, {
                            children: ["Log in or sign up to ", (0, a.jsx)("strong", {
                                children: "save your design in the cart for 90 days"
                            }), "."]
                        }),
                        u = "You can also continue as a guest and order now.",
                        c = (0, a.jsx)(x.$n, {
                            asChild: !0,
                            className: "flex-1",
                            variant: "primary",
                            children: (0, a.jsx)(Z.A, {
                                "data-testid": "dont-lose-your-design-dialog-login",
                                onClick: () => {
                                    o.current = !0, (0, eE.O)({
                                        elementId: `${eK}_login_button`
                                    })
                                },
                                routeInfo: (0, F.NW)({
                                    query: {
                                        redirectUrl: s
                                    }
                                }),
                                children: "Log in to save"
                            })
                        });
                    return r ? (0, a.jsx)(x.Lt, {
                        onOpenChange: t,
                        open: e,
                        children: (0, a.jsxs)(x.EO, {
                            "data-testid": "dont-lose-your-design-dialog",
                            onEscapeKeyDown: e => e.preventDefault(),
                            children: [(0, a.jsx)(x.wd, {
                                children: (0, a.jsx)(x.r7, {
                                    className: "text-heading-h4",
                                    children: l
                                })
                            }), (0, a.jsxs)(x.vZ, {
                                children: [(0, a.jsx)(x.$v, {
                                    className: "text-body-md-default",
                                    children: n
                                }), (0, a.jsx)("p", {
                                    className: "text-body-md-default",
                                    children: u
                                })]
                            }), (0, a.jsxs)(x.ck, {
                                children: [(0, a.jsx)(x.Zr, {
                                    asChild: !0,
                                    children: (0, a.jsx)(x.$n, {
                                        className: "flex-1",
                                        "data-testid": "dont-lose-your-design-dialog-order-now",
                                        onClick: () => {
                                            eG(), i ? .()
                                        },
                                        variant: "secondaryDarkOutline",
                                        children: "Order now"
                                    })
                                }), c]
                            })]
                        })
                    }) : (0, a.jsx)(x.lG, {
                        onOpenChange: e => {
                            e || o.current || (0, eE.O)({
                                elementId: eK,
                                interactionType: "close"
                            }), t(e)
                        },
                        open: e,
                        children: (0, a.jsxs)(x.Cf, {
                            "data-testid": "dont-lose-your-design-dialog",
                            children: [(0, a.jsx)(x.c7, {
                                children: (0, a.jsx)(x.L3, {
                                    className: "text-heading-h4",
                                    children: l
                                })
                            }), (0, a.jsxs)(x.R4, {
                                children: [(0, a.jsx)(x.rr, {
                                    className: "text-body-md-default",
                                    children: n
                                }), (0, a.jsx)("p", {
                                    className: "text-body-md-default",
                                    children: u
                                })]
                            }), (0, a.jsxs)(x.Es, {
                                children: [(0, a.jsx)(x.$n, {
                                    className: "flex-1",
                                    "data-testid": "dont-lose-your-design-dialog-order-now",
                                    onClick: () => {
                                        o.current = !0, eG(), t(!1), i ? .()
                                    },
                                    variant: "secondaryDarkOutline",
                                    children: "Order now"
                                }), c]
                            })]
                        })
                    })
                },
                eX = e => {
                    let {
                        customDisplate: t
                    } = (0, d.useContext)(eV), {
                        hasId: i
                    } = (0, eM.K)(), {
                        data: a,
                        isLoading: s
                    } = function({
                        enabled: e = !0
                    }) {
                        let {
                            countryCode: t
                        } = (0, el.C)(), {
                            fetchedUserInfo: i,
                            userInfo: a
                        } = (0, d.useContext)(E.cy), {
                            uvert: s
                        } = (0, eN.n)();
                        return (0, _.I)({
                            queryKey: ["customDisplatePdpData", t, s],
                            queryFn: () => C.$y.getCustomDisplatePdpDataForUser(t, s),
                            enabled: e && !!t && i && a ? .account.isUserLoggedIn
                        })
                    }({
                        enabled: !i
                    }), {
                        data: r,
                        isLoading: o
                    } = eO({
                        id: e
                    }), l = t;
                    return i && r ? l = r : !i && a && (l = a), {
                        customDisplateData: l,
                        isLoading: s || i && o
                    }
                };
            var eQ = i(80001),
                e0 = i.n(eQ),
                e1 = i(60539),
                e2 = i(65294),
                e3 = i(14619);
            let e9 = ({
                    className: e,
                    countryCode: t,
                    trustPilotData: i,
                    testId: s
                }) => (0, a.jsxs)("div", {
                    className: (0, e3.cn)(e0().headerSection, e),
                    "data-testid": s,
                    children: [(0, a.jsx)("div", {
                        className: e0().titleWrapper,
                        id: "product-title",
                        children: (0, a.jsx)("h1", {
                            className: e0().titleText,
                            children: "Custom Metal Print"
                        })
                    }), (0, a.jsx)(e2.A, {
                        className: e0().description,
                        description: "Print your own poster with Displate! Turn your favorite photo, meme, or artwork into a custom print. Our personalized posters are made on metal and mount magnetically in seconds. Custom poster printing is easy — just upload, crop, and pick your size and finish. The result? A glorious custom metal artwork that's 100% yours. Why stop at one? Custom posters are fun to collect and make unforgettable gifts. Plus, Displate Club members save at checkout. Your poster. Your world. On metal. Let's go!"
                    }), (0, a.jsx)(e1.A, {
                        className: e0().trustpilot,
                        countryCode: t,
                        data: i
                    })]
                }),
                e5 = () => {
                    let [e, t] = (0, d.useState)(!1);
                    return {
                        isDrawerOpen: e,
                        handleDrawerOpen: () => t(!0),
                        handleDrawerClose: () => t(!1)
                    }
                },
                e4 = () => {
                    let e, t, {
                            customDisplate: i,
                            header: s
                        } = (0, d.useContext)(eV),
                        {
                            countryCode: r
                        } = (0, el.C)(),
                        {
                            hasId: o,
                            id: l
                        } = (0, eM.K)(),
                        {
                            userInfo: n,
                            fetchedUserInfo: c
                        } = (0, d.useContext)(E.cy),
                        p = n ? .account.isUserLoggedIn && c,
                        m = o && c,
                        {
                            country: x,
                            estimatedDelivery: _,
                            isAvailable: f
                        } = i.shop,
                        {
                            size: w,
                            frame: j,
                            currentVariant: v
                        } = (0, h.V)((0, u.k)(e => ({
                            size: e.size,
                            frame: e.frame,
                            currentVariant: e.currentVariant
                        }))),
                        {
                            customDisplateData: I,
                            isLoading: D
                        } = eX(l ? ? ""),
                        S = (e = e5(), t = e5(), {
                            finish: e,
                            size: t,
                            frame: e5(),
                            upsell: e5()
                        }),
                        [b, y] = (0, d.useState)(!1),
                        L = (0, ee._g)(et.TL),
                        k = L ? .variantName ? ? "control",
                        V = "v2" === k,
                        T = s ? .promotion,
                        z = s ? .paymentMethods ? .filter(e => e !== C.eq.KLARNA) || [],
                        N = T && v ? (0, eg.iy)(T, v) : null;
                    return (0, a.jsxs)("div", {
                        children: [(0, a.jsx)(e9, {
                            className: e0().hiddenOnMobile,
                            countryCode: r,
                            testId: "custom-displate-buy-box-desktop",
                            trustPilotData: i.trustPilot
                        }), (0, a.jsxs)(em.i.Provider, {
                            value: {
                                location: "custom_displate_pdp"
                            },
                            children: [(0, a.jsx)("div", {
                                className: "px-4 lg:px-0 [@media(max-aspect-ratio:3/4)]:px-4",
                                children: (0, a.jsx)(ec.K, {
                                    areFramesAvailable: !0,
                                    handleFinishDrawerOpen: S.finish.handleDrawerOpen,
                                    handleFrameDrawerOpen: S.frame.handleDrawerOpen,
                                    handleSizeDrawerOpen: S.size.handleDrawerOpen,
                                    variants: I ? .variants
                                })
                            }), (0, a.jsx)(eu.O, {
                                areFramesAvailable: !0,
                                handleFinishDrawerOpen: S.finish.handleDrawerOpen,
                                handleFrameDrawerOpen: S.frame.handleDrawerOpen,
                                handleSizeDrawerOpen: S.size.handleDrawerOpen,
                                variants: I ? .variants
                            })]
                        }), (0, a.jsx)(e9, {
                            className: e0().hiddenOnDesktop,
                            countryCode: r,
                            testId: "custom-displate-buy-box-mobile",
                            trustPilotData: i.trustPilot
                        }), (0, a.jsx)(en.d, {
                            artworkOrientation: I ? .product ? .orientation,
                            artworkUrl: o && I ? .product ? .imageCoreUrl ? (0, ei.Js)(I.product.imageCoreUrl, ei.cc.rect.rect190x135, I.product.orientation) : i.product.imageCoreUrl ? ? "",
                            handleFinishDrawerClose: S.finish.handleDrawerClose,
                            handleFrameDrawerClose: S.frame.handleDrawerClose,
                            handleSizeDrawerClose: S.size.handleDrawerClose,
                            isFinishDrawerOpen: S.finish.isDrawerOpen,
                            isFrameDrawerOpen: S.frame.isDrawerOpen,
                            isSizeDrawerOpen: S.size.isDrawerOpen,
                            variants: I ? .variants
                        }), (0, a.jsx)(ep.A, {
                            className: e0().price,
                            isLoading: !c || D
                        }), N ? (0, a.jsx)(eo.A, {
                            className: e0().promoBox,
                            location: "custom-displate-pdp",
                            promotion: N,
                            showPrice: !0
                        }) : null, !o && (0, a.jsx)(ek, {
                            className: (0, g.A)(e0().delivery, e0().mobileDeliveryInfo),
                            country: x,
                            estimatedDelivery: _,
                            hasId: o,
                            isAvailable: f
                        }), (0, a.jsx)(es.u, {
                            className: (0, g.A)(e0().delivery, e0().deliveryMobile)
                        }), z.length > 0 && (0, a.jsx)(er.A, {
                            className: (0, g.A)(e0().paymentMethods, e0().hiddenOnDesktop),
                            paymentMethods: z
                        }), m ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(eF, {
                                classes: {
                                    deliveryInfo: e0().deliveryInAddToCartButton
                                },
                                handleAfterAddToCart: () => {
                                    p || V ? S.upsell.handleDrawerOpen() : y(!0)
                                }
                            }), (0, a.jsx)(eY, {
                                blocking: "v1" === k,
                                onContinueAsGuest: S.upsell.handleDrawerOpen,
                                onOpenChange: y,
                                open: b,
                                redirectUrl: (0, e_.y)({
                                    absolute: !0
                                }).route
                            }), (0, a.jsx)(ex.f, {
                                handleClose: S.upsell.handleDrawerClose,
                                infoBanner: !p && V ? (0, a.jsx)(eJ, {
                                    redirectUrl: (0, e_.y)({
                                        absolute: !0
                                    }).route
                                }) : void 0,
                                isOpen: S.upsell.isDrawerOpen,
                                size: w,
                                standImageBox: (0, a.jsx)(eh.y, {
                                    artworkOrientation: I ? .product ? .orientation,
                                    artworkPicture: (0, a.jsx)(ea.X, {
                                        frame: j,
                                        imageSrc: (0, ei.Js)(I ? .product ? .imageCoreUrl ? ? "", ei.cc.rect.rect392x280, I ? .product ? .orientation),
                                        orientation: I ? .product ? .orientation,
                                        size: w
                                    }),
                                    artworkSize: w
                                })
                            })]
                        }) : (0, a.jsx)(eR, {}), (0, a.jsx)(ek, {
                            className: (0, g.A)(e0().delivery, e0().desktopDeliveryInfo),
                            country: x,
                            estimatedDelivery: _,
                            hasId: o,
                            isAvailable: f
                        }), (0, a.jsx)(es.u, {
                            className: (0, g.A)(e0().delivery, e0().deliveryDesktop)
                        }), z.length > 0 && (0, a.jsx)(er.A, {
                            className: (0, g.A)(e0().paymentMethods, e0().hiddenOnMobile),
                            paymentMethods: z
                        }), (0, a.jsx)(ed.i, {
                            className: e0().description,
                            estimatedDelivery: _,
                            productType: "custom",
                            shouldShowTrademarkDisclaimer: !1
                        })]
                    })
                };
            var e6 = i(58112),
                e7 = i(99693),
                e8 = i(71669);
            let te = () => {
                let e = (0, l.u)(o.DY);
                return (0, a.jsx)(e8.T, {
                    poster: (0, T.v9)({
                        assetPath: e ? "/images/custom-displate/campaign/video_poster.jpg" : "/images/custom-displate/slides/custom_displate_video_poster.jpg"
                    }).src,
                    slideType: e7.K.PRESENTATION_VIDEO,
                    src: e ? "pages/custom_filters_video.mp4" : "pages/custom_displates.mp4"
                })
            };
            var tt = i(10302),
                ti = i(44792),
                ta = i.n(ti),
                ts = i(69579),
                tr = i.n(ts);
            let to = () => {
                let e = (0, l.u)(o.DY) ? "/images/custom-displate/campaign/video_thumb.jpg" : "/images/custom-displate/slides/custom_displate_video_thumbnail.jpg",
                    t = [{
                        srcSet: (0, T.v9)({
                            assetPath: e,
                            widths: [64, 128]
                        })
                    }],
                    i = (0, T.v9)({
                        assetPath: e
                    });
                return (0, a.jsxs)("div", {
                    className: ta().thumbnail,
                    children: [(0, a.jsx)(k.D, {
                        alt: "custom displate video thumbnail",
                        className: ta().thumbnailImage,
                        imageFallbackCoreUrl: i.src,
                        imageSets: t,
                        priority: "high"
                    }), (0, a.jsx)("div", {
                        className: tr().thumbnailOverlay
                    }), (0, a.jsx)(tt.A, {
                        className: tr().playIcon
                    })]
                })
            };
            var tl = i(36891),
                tn = i(37473);
            let td = d.forwardRef(function({
                title: e,
                titleId: t,
                ...i
            }, a) {
                return d.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    "data-slot": "icon",
                    ref: a,
                    "aria-labelledby": t
                }, i), e ? d.createElement("title", {
                    id: t
                }, e) : null, d.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                }))
            });
            var tu = i(18847),
                tc = i.n(tu),
                tp = i(34026);
            let tm = tc()(() => Promise.all([i.e(627), i.e(8602)]).then(i.bind(i, 78602)).then(e => ({
                    default: e.CustomDisplateRemoveConfirmationPopup
                })), {
                    loadableGenerated: {
                        webpack: () => [78602]
                    },
                    ssr: !1
                }),
                th = () => {
                    let {
                        displayModal: e,
                        closeModal: t
                    } = (0, tp.A)(), {
                        hasId: i
                    } = (0, eM.K)();
                    return i ? (0, a.jsx)(x.ff, {
                        "aria-label": "Remove custom displate",
                        "data-testid": "custom-displate-remove-button",
                        icon: (0, a.jsx)(td, {}),
                        onClick: () => {
                            (0, eE.O)({
                                elementId: "custom_displate_remove_button"
                            }), e((0, a.jsx)(tm, {
                                onCancel: t
                            }))
                        },
                        size: "lg",
                        variant: "glass"
                    }) : null
                };
            var tx = i(43343);
            let tg = tc()(() => Promise.all([i.e(9013), i.e(3969), i.e(689)]).then(i.bind(i, 70689)).then(e => ({
                    default: e.CustomDisplateZoomPopup
                })), {
                    loadableGenerated: {
                        webpack: () => [70689]
                    },
                    ssr: !1,
                    loading: () => (0, a.jsx)(tx.i, {})
                }),
                t_ = ({
                    imageUrl: e,
                    artworkOrientation: t
                }) => (0, a.jsx)(tg, {
                    artworkOrientation: t,
                    imageUrl: e,
                    triggerEl: (0, a.jsx)(tx.i, {
                        onClick: () => (0, eE.O)({
                            elementId: "trigger_zoom_button"
                        })
                    })
                });
            var tC = i(36814),
                tf = i.n(tC);
            let tw = ({
                slideType: e,
                artworkOrientation: t,
                imageUrl: i,
                imageUrlForZoom: s,
                priority: r = "auto",
                loading: n = "lazy",
                isCustomDisplateUserDataLoading: d,
                showBenefits: c = !1,
                isZoomedVisualization: p = !1,
                classes: m,
                animationImageUrls: _,
                isAnimating: w = !1,
                isAnimationComplete: j = !1
            }) => {
                let v, I, {
                        id: D,
                        hasId: S
                    } = (0, eM.K)(),
                    b = (0, l.u)(o.DY),
                    {
                        data: y
                    } = f(),
                    L = y ? .isAvailable ? ? !1,
                    {
                        sizeFlags: z,
                        size: N,
                        frame: A,
                        type: O
                    } = (0, h.V)((0, u.k)(e => ({
                        sizeFlags: e.sizeFlags,
                        size: e.size,
                        frame: e.frame,
                        type: e.type,
                        currentThumbnail: e.currentThumbnail
                    }))),
                    M = t === C.JH.VERTICAL,
                    P = t === C.JH.HORIZONTAL,
                    H = O === tn.ZU.GLOSS,
                    F = O === tn.ZU.MATTE,
                    E = [{
                        srcSet: (0, T.v9)({
                            assetPath: `/images/pdp/HeroSlider/${e}/bcg/768_landscape@2x.jpg`,
                            widths: [3200, 6400]
                        }),
                        media: `(orientation: landscape) and (max-width: ${V.D.md-1}px)`
                    }, {
                        srcSet: (0, T.v9)({
                            assetPath: `/images/pdp/HeroSlider/${e}/bcg/768@2x.jpg`,
                            widths: [1707, 3414]
                        }),
                        media: `(max-width: ${V.D.md-1}px)`
                    }, {
                        srcSet: (0, T.v9)({
                            assetPath: `/images/pdp/HeroSlider/${e}/bcg/1024@2x.jpg`,
                            widths: [2497, 4994]
                        }),
                        media: `(max-width: ${V.D.lg-1}px)`
                    }, {
                        srcSet: (0, T.v9)({
                            assetPath: `/images/pdp/HeroSlider/${e}/bcg/2560@2x.jpg`,
                            widths: [2157, 4314]
                        }),
                        media: `(max-width: ${V.D.xl2-1}px)`
                    }, {
                        srcSet: (0, T.v9)({
                            assetPath: `/images/pdp/HeroSlider/${e}/bcg/2560@2x.jpg`,
                            widths: [3063, 6126]
                        }),
                        media: `(max-width: ${V.D.xl3-1}px)`
                    }, {
                        srcSet: (0, T.v9)({
                            assetPath: `/images/pdp/HeroSlider/${e}/bcg/2560@2x.jpg`,
                            widths: [4509, 9018]
                        })
                    }],
                    B = !D && e !== e7.K.SIDE_VIEW_VISUALIZATION;
                return (0, a.jsxs)("div", {
                    className: (0, g.A)(tf().slide, {
                        [tf().slideCampaign]: b
                    }),
                    "data-testid": "custom-displate-default-slide",
                    children: [e === e7.K.CUSTOM_DISPLATE_VISUALIZATION && L && !S && (0, a.jsx)(tl.o, {
                        className: tf().playWithFiltersButton,
                        routeInfo: (0, eA.iM)(D ? ? void 0, {
                            hash: "filters-section"
                        }),
                        variant: "dark"
                    }), (0, a.jsxs)("div", {
                        className: tf().buttonsWrapper,
                        "data-testid": "custom-displate-sidebar-buttons",
                        children: [(0, a.jsx)(th, {}), (0, a.jsx)(t_, {
                            artworkOrientation: t,
                            imageUrl: s
                        })]
                    }), (0, a.jsx)("div", {
                        className: (0, g.A)(tf().backgroundWrapper, m ? .background, {
                            [tf().backgroundSizeM]: z.isM,
                            [tf().backgroundSizeL]: z.isL,
                            [tf().backgroundSizeLZoomed]: z.isL && p,
                            [tf().backgroundWrapperZoomed]: p
                        }),
                        children: e === e7.K.SIDE_VIEW_VISUALIZATION ? null : (0, a.jsx)(k.D, {
                            alt: `${e} slide background`,
                            className: (0, g.A)(tf().backgroundImage, m ? .background),
                            imageFallbackCoreUrl: `/images/pdp/HeroSlider/${e}/bcg/2560@2x.jpg`,
                            imageSets: e === e7.K.CUSTOM_DISPLATE_VISUALIZATION ? (v = b ? "/images/custom-displate/campaign/valentines_background.jpg" : "/images/custom-displate/slides/main_custom_background.jpg", [{
                                srcSet: (0, T.v9)({
                                    assetPath: v,
                                    widths: [1536, 3072]
                                }),
                                media: `(max-width: ${V.D.md-1}px)`
                            }, {
                                srcSet: (0, T.v9)({
                                    assetPath: v,
                                    widths: [2048, 4096]
                                }),
                                media: `(max-width: ${V.D.lg-1}px)`
                            }, {
                                srcSet: (0, T.v9)({
                                    assetPath: v,
                                    widths: [1440, 2880]
                                }),
                                media: `(max-width: ${V.D.xl2-1}px)`
                            }, {
                                srcSet: (0, T.v9)({
                                    assetPath: v,
                                    widths: [1920, 3840]
                                }),
                                media: `(max-width: ${V.D.xl3-1}px)`
                            }, {
                                srcSet: (0, T.v9)({
                                    assetPath: v,
                                    widths: [4509, 9018]
                                }),
                                media: `(min-width: ${V.D.xl3}px)`
                            }]) : E,
                            loading: n,
                            priority: r
                        })
                    }), (0, a.jsx)("div", {
                        className: (0, g.A)(tf().artworkPositioner, m ? .artworkPosition, {
                            [tf().vertical]: M,
                            [tf().horizontal]: P
                        }),
                        children: (0, a.jsx)("div", {
                            className: (0, g.A)(tf().artworkWrapper, m ? .artwork && !d && i ? m.artwork : null, {
                                [tf().sizeL]: z.isL,
                                [tf().sizeLZoomed]: z.isL && p
                            }),
                            children: d || !i ? (0, a.jsx)("div", {
                                className: tf().loadingContainer,
                                children: (0, a.jsx)(x.y$, {})
                            }) : (0, a.jsxs)(a.Fragment, {
                                children: [(I = (e, i) => (0, a.jsx)(ea.X, {
                                    className: (0, g.A)(tf().artworkImage, m ? .artworkShadow, i),
                                    enableClipPath: A === C.p1.NONE,
                                    frame: A,
                                    imageSrc: e,
                                    isGloss: H,
                                    isMatt: F,
                                    orientation: t,
                                    size: N
                                }), w && _ && !j ? (0, a.jsx)(a.Fragment, {
                                    children: _.map((e, t) => (0, a.jsx)("div", {
                                        className: tf().animationImageContainer,
                                        children: I(e, tf().animationImage)
                                    }, `animation-container-${t}`))
                                }) : B ? (0, a.jsx)(x.N_, {
                                    asChild: !0,
                                    children: (0, a.jsx)(Z.A, {
                                        routeInfo: (0, U.$)(),
                                        children: I(i)
                                    })
                                }) : I(i)), c ? (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)("div", {
                                        className: tf().benefitText1,
                                        "data-testid": "custom-displate-benefit-text",
                                        children: (0, a.jsx)("p", {
                                            children: "Gift-ready"
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: tf().benefitText2,
                                        "data-testid": "custom-displate-benefit-text",
                                        children: (0, a.jsx)("p", {
                                            children: "Magnetic mount, no tools"
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: tf().benefitText3,
                                        "data-testid": "custom-displate-benefit-text",
                                        children: (0, a.jsx)("p", {
                                            children: "Durable metal, easy to move"
                                        })
                                    })]
                                }) : null]
                            })
                        })
                    })]
                })
            };
            var tj = i(55655),
                tv = i.n(tj);
            let tI = ({
                    imageUrl: e,
                    className: t,
                    alt: i = "artwork",
                    isCustomDisplateUserDataLoading: s
                }) => s ? (0, a.jsx)("div", {
                    className: (0, g.A)(tv().loaderContainer, t),
                    children: (0, a.jsx)(x.y$, {})
                }) : e ? (0, a.jsx)("img", {
                    alt: i,
                    className: (0, g.A)(tv().artworkPicture, t),
                    src: e
                }) : null,
                tD = ({
                    imageUrl: e,
                    artworkPositionClassName: t,
                    thumbnailImagePositionClassName: i,
                    priority: s = "high",
                    loading: r = "eager",
                    isCustomDisplateUserDataLoading: n,
                    slideType: d
                }) => {
                    let u = ((e, t = !1) => {
                        let i = [{
                                srcSet: (0, T.v9)({
                                    assetPath: "/images/pdp/HeroSlider/thumbnails/thumbnailBackgrounds@2x.png",
                                    widths: [404, 806]
                                })
                            }],
                            a = [{
                                srcSet: (0, T.v9)({
                                    assetPath: "/images/custom-displate/sideview_thumbnail.png",
                                    widths: [50, 100]
                                })
                            }],
                            s = [{
                                srcSet: (0, T.v9)({
                                    assetPath: "/images/custom-displate/slides/main_custom_thumbnail.png",
                                    widths: [50, 100]
                                })
                            }],
                            r = [{
                                srcSet: (0, T.v9)({
                                    assetPath: "/images/custom-displate/campaign/gallery_thumbnail.jpg",
                                    widths: [50, 100]
                                })
                            }];
                        return e === e7.K.SIDE_VIEW_VISUALIZATION ? a : e === e7.K.CUSTOM_DISPLATE_VISUALIZATION ? t ? r : s : i
                    })(d, (0, l.u)(o.DY));
                    return (0, a.jsxs)("div", {
                        className: ta().thumbnail,
                        children: [(0, a.jsx)(k.D, {
                            alt: "Custom Displate",
                            className: (0, g.A)(ta().thumbnailImage, i),
                            imageFallbackCoreUrl: u[0].srcSet.widthsSrc[0],
                            imageSets: u,
                            loading: r,
                            priority: s
                        }), (0, a.jsx)("div", {
                            className: (0, g.A)(ta().artworkWrapper, t),
                            children: (0, a.jsx)(tI, {
                                imageUrl: e,
                                isCustomDisplateUserDataLoading: n
                            })
                        })]
                    })
                };
            var tS = i(65633),
                tb = i.n(tS);
            let ty = ({
                    imageUrl: e,
                    orientation: t,
                    isCustomDisplateUserDataLoading: i
                }) => {
                    let s = t === C.JH.HORIZONTAL ? tb().thumbnailArtworkHorizontal : tb().thumbnailArtworkVertical;
                    return (0, a.jsx)(tD, {
                        artworkPositionClassName: s,
                        imageUrl: e,
                        isCustomDisplateUserDataLoading: i,
                        priority: "low",
                        slideType: e7.K.CUPBOARD_VISUALIZATION,
                        thumbnailImagePositionClassName: tb().thumbnailImagePositionClassName
                    })
                },
                tL = ({
                    imageUrl: e,
                    isCustomDisplateUserDataLoading: t,
                    orientation: i,
                    imageUrlForZoom: s
                }) => {
                    let {
                        sizeFlags: r
                    } = (0, h.V)((0, u.k)(e => ({
                        sizeFlags: e.sizeFlags
                    }))), o = i === C.JH.VERTICAL, l = i === C.JH.HORIZONTAL;
                    return (0, a.jsx)(tw, {
                        alt: "Custom Displate",
                        artworkOrientation: i,
                        classes: {
                            artwork: tb().artworkBox,
                            artworkShadow: tb().artworkShadow,
                            artworkPosition: (0, g.A)({
                                [tb().vertical]: o,
                                [tb().horizontal]: l,
                                [tb().sizeMVerticalPosition]: r.isM && o,
                                [tb().sizeLVerticalPosition]: r.isL && o,
                                [tb().sizeMHorizontalPosition]: r.isM && l,
                                [tb().sizeLHorizontalPosition]: r.isL && l
                            })
                        },
                        imageUrl: e,
                        imageUrlForZoom: s,
                        isCustomDisplateUserDataLoading: t,
                        slideType: e7.K.CUPBOARD_VISUALIZATION
                    })
                };
            var tk = i(15545),
                tV = i.n(tk);
            let tT = ({
                    imageUrl: e,
                    orientation: t,
                    isCustomDisplateUserDataLoading: i
                }) => {
                    let s = t === C.JH.HORIZONTAL ? tV().thumbnailArtworkHorizontal : tV().thumbnailArtworkVertical;
                    return (0, a.jsx)(tD, {
                        artworkPositionClassName: s,
                        imageUrl: e,
                        isCustomDisplateUserDataLoading: i,
                        priority: "high",
                        slideType: e7.K.CUSTOM_DISPLATE_VISUALIZATION,
                        thumbnailImagePositionClassName: tV().thumbnailImagePositionClassName
                    })
                },
                tz = ({
                    orientation: e,
                    imageUrl: t,
                    imageUrlForZoom: i,
                    isCustomDisplateUserDataLoading: s
                }) => {
                    let {
                        sizeFlags: r
                    } = (0, h.V)((0, u.k)(e => ({
                        sizeFlags: e.sizeFlags
                    }))), {
                        hasId: n
                    } = (0, eM.K)(), [c, p] = (0, d.useState)(!1), [m, x] = (0, d.useState)(!1), _ = (0, l.u)(o.DY), f = (0, d.useMemo)(() => (_ ? z.Dc : z.KM).map(e => (0, T.v9)({
                        assetPath: e
                    }).src), [_]), w = e === C.JH.VERTICAL, j = e === C.JH.HORIZONTAL;
                    return (0, d.useEffect)(() => {
                        if (n) {
                            p(!1), x(!0);
                            return
                        }
                        x(!1), p(!1);
                        let e = setTimeout(() => {
                            x(!0), p(!0)
                        }, 1760);
                        return () => {
                            clearTimeout(e)
                        }
                    }, [n]), (0, a.jsx)(tw, {
                        alt: "Custom Displate",
                        animationImageUrls: f,
                        artworkOrientation: e,
                        classes: {
                            background: (0, g.A)(tV().backgroundCustomDisplate, {
                                [tV().backgroundCustomDisplateVertical]: w,
                                [tV().backgroundCustomDisplateLVertical]: r.isL && w
                            }),
                            artwork: tV().artworkBox,
                            artworkShadow: tV().artworkShadow,
                            artworkPosition: (0, g.A)({
                                [tV().vertical]: w,
                                [tV().horizontal]: j,
                                [tV().sizeMVerticalPosition]: r.isM && w,
                                [tV().sizeLVerticalPosition]: r.isL && w,
                                [tV().sizeMHorizontalPosition]: r.isM && j,
                                [tV().sizeLHorizontalPosition]: r.isL && j
                            })
                        },
                        imageUrl: t,
                        imageUrlForZoom: i,
                        isAnimating: !n,
                        isAnimationComplete: m,
                        isCustomDisplateUserDataLoading: s,
                        isZoomedVisualization: !0,
                        loading: "eager",
                        showBenefits: c,
                        slideType: e7.K.CUSTOM_DISPLATE_VISUALIZATION
                    })
                };
            var tN = i(91075),
                tA = i.n(tN);
            let tO = ({
                    imageUrl: e,
                    orientation: t,
                    isCustomDisplateUserDataLoading: i
                }) => {
                    let s = t === C.JH.HORIZONTAL ? tA().thumbnailArtworkHorizontal : tA().thumbnailArtworkVertical;
                    return (0, a.jsx)(tD, {
                        artworkPositionClassName: s,
                        imageUrl: e,
                        isCustomDisplateUserDataLoading: i,
                        priority: "low",
                        slideType: e7.K.DRESSER_ZOOM_VISUALIZATION,
                        thumbnailImagePositionClassName: tA().thumbnailImagePositionClassName
                    })
                },
                tM = ({
                    orientation: e,
                    imageUrl: t,
                    imageUrlForZoom: i,
                    isCustomDisplateUserDataLoading: s,
                    showBenefits: r = !1
                }) => {
                    let {
                        sizeFlags: o
                    } = (0, h.V)((0, u.k)(e => ({
                        sizeFlags: e.sizeFlags
                    }))), l = e === C.JH.VERTICAL, n = e === C.JH.HORIZONTAL;
                    return (0, a.jsx)(tw, {
                        alt: "Custom Displate",
                        artworkOrientation: e,
                        classes: {
                            artwork: tA().artworkBox,
                            artworkShadow: tA().artworkShadow,
                            artworkPosition: (0, g.A)({
                                [tA().vertical]: l,
                                [tA().horizontal]: n,
                                [tA().sizeMVerticalPosition]: o.isM && l,
                                [tA().sizeLVerticalPosition]: o.isL && l,
                                [tA().sizeMHorizontalPosition]: o.isM && n,
                                [tA().sizeLHorizontalPosition]: o.isL && n
                            })
                        },
                        imageUrl: t,
                        imageUrlForZoom: i,
                        isCustomDisplateUserDataLoading: s,
                        isZoomedVisualization: !0,
                        showBenefits: r,
                        slideType: e7.K.DRESSER_ZOOM_VISUALIZATION
                    })
                };
            var tP = i(68385),
                tH = i.n(tP);
            let tZ = ({
                    imageUrl: e,
                    orientation: t,
                    isCustomDisplateUserDataLoading: i
                }) => {
                    let s = t === C.JH.HORIZONTAL ? tH().thumbnailArtworkHorizontal : tH().thumbnailArtworkVertical;
                    return (0, a.jsx)(tD, {
                        artworkPositionClassName: s,
                        imageUrl: e,
                        isCustomDisplateUserDataLoading: i,
                        priority: "low",
                        slideType: e7.K.OFFICE_VISUALIZATION,
                        thumbnailImagePositionClassName: tH().thumbnailImagePositionClassName
                    })
                },
                tF = ({
                    imageUrl: e,
                    imageUrlForZoom: t,
                    isCustomDisplateUserDataLoading: i,
                    orientation: s
                }) => {
                    let {
                        sizeFlags: r
                    } = (0, h.V)((0, u.k)(e => ({
                        sizeFlags: e.sizeFlags
                    }))), o = s === C.JH.VERTICAL, l = s === C.JH.HORIZONTAL;
                    return (0, a.jsx)(tw, {
                        alt: "Custom Displate",
                        artworkOrientation: s,
                        classes: {
                            artwork: tH().artworkBox,
                            artworkShadow: tH().artworkShadow,
                            artworkPosition: (0, g.A)({
                                [tH().vertical]: o,
                                [tH().horizontal]: l,
                                [tH().sizeMVerticalPosition]: r.isM && o,
                                [tH().sizeLVerticalPosition]: r.isL && o,
                                [tH().sizeMHorizontalPosition]: r.isM && l,
                                [tH().sizeLHorizontalPosition]: r.isL && l
                            })
                        },
                        imageUrl: e,
                        imageUrlForZoom: t,
                        isCustomDisplateUserDataLoading: i,
                        slideType: e7.K.OFFICE_VISUALIZATION
                    })
                };
            var tE = i(96491),
                tU = i.n(tE);
            let tB = ({
                isBottom: e,
                isHorizontal: t,
                isLarge: i
            }) => {
                let s = t && i,
                    r = {
                        x1: e || s ? "/images/pdp/HeroSlider/side/2nd-sticker.png" : "/images/pdp/HeroSlider/side/sticker.png",
                        x2: e || s ? "/images/pdp/HeroSlider/side/2nd-sticker@2x.png" : "/images/pdp/HeroSlider/side/sticker@2x.png"
                    },
                    o = {
                        x1: e || s ? "/images/pdp/HeroSlider/side/2nd-magnet.png" : "/images/pdp/HeroSlider/side/magnet.png",
                        x2: e || s ? "/images/pdp/HeroSlider/side/2nd-magnet@2x.png" : "/images/pdp/HeroSlider/side/magnet@2x.png"
                    },
                    l = (0, T.v9)({
                        assetPath: r.x1
                    }),
                    n = (0, T.v9)({
                        assetPath: r.x2
                    }),
                    d = (0, T.v9)({
                        assetPath: o.x1
                    }),
                    u = (0, T.v9)({
                        assetPath: o.x2
                    }),
                    c = `${l.src} 1x, ${n.src} 2x`,
                    p = `${d.src} 1x, ${u.src} 2x`;
                return (0, a.jsxs)("div", {
                    className: (0, g.A)(tU().mountingSystem, {
                        [tU().bottomMountingSystem]: e,
                        [tU().mountingSystemLHorizontal]: t && i
                    }),
                    children: [(0, a.jsx)("img", {
                        alt: "magnet-sticker",
                        src: l.src,
                        srcSet: c
                    }), (0, a.jsx)("img", {
                        alt: "magnet",
                        className: (0, g.A)(tU().magnet, {
                            [tU().bottomMagnet]: e
                        }),
                        src: d.src,
                        srcSet: p
                    })]
                })
            };
            var tW = i(91549),
                tR = i(8499),
                t$ = i(68267),
                tK = i.n(t$);
            let tG = [{
                    id: "print-quality",
                    content: (0, a.jsxs)("p", {
                        children: [(0, a.jsx)("strong", {
                            children: "Vibrant"
                        }), " colors printed on ", (0, a.jsx)("strong", {
                            children: "metal"
                        })]
                    }),
                    trackingType: "print"
                }, {
                    id: "bent-edges",
                    content: (0, a.jsxs)("p", {
                        children: ["Safe and smooth ", (0, a.jsx)("strong", {
                            children: "bent edges"
                        })]
                    }),
                    trackingType: "edges"
                }, {
                    id: "eu-production",
                    content: (0, a.jsxs)("p", {
                        children: [(0, a.jsx)("strong", {
                            children: "EU production"
                        }), " for guaranteed quality"]
                    }),
                    trackingType: "quality"
                }, {
                    id: "magnet-included",
                    content: (0, a.jsxs)("p", {
                        children: ["Included ", (0, a.jsx)("strong", {
                            children: "magnet"
                        }), " secures poster ", (0, a.jsx)("br", {}), " on the wall"]
                    }),
                    trackingType: "magnet"
                }, {
                    id: "wall-safe-sticker",
                    content: (0, a.jsxs)("p", {
                        children: ["Wall-safe, ", (0, a.jsx)("strong", {
                            children: "magnetic sticker"
                        }), " included"]
                    }),
                    trackingType: "sticker"
                }],
                tq = ({
                    artworkOrientation: e,
                    size: t
                }) => {
                    let [i, s] = (0, d.useState)(tG[0].id), [r, o] = (0, d.useState)(!0), l = e === C.JH.VERTICAL, n = e === C.JH.HORIZONTAL, u = (e, t) => {
                        if (o(!1), c(e, t), !t) return;
                        let i = tG.findIndex(e => e.id === t);
                        i < 0 || (0, tW.a)(i, tG[i].trackingType)
                    }, c = (e, t) => {
                        e && o(!0), s(e ? null : t)
                    };
                    return (0, a.jsx)("div", {
                        className: (0, g.A)(tK().wrapper, {
                            [tK().tooltipsMVertical]: t.isM && l,
                            [tK().tooltipsLVertical]: t.isL && l,
                            [tK().tooltipsMHorizontal]: t.isM && n,
                            [tK().tooltipsLHorizontal]: t.isL && n
                        }),
                        children: tG.map(e => {
                            let t = i === e.id;
                            return (0, a.jsx)(tR.s, {
                                handleTooltipClick: u,
                                identifier: e.id,
                                isDotAnimating: r,
                                isOpen: t,
                                children: e.content
                            }, e.id)
                        })
                    })
                };
            var tJ = i(17450),
                tY = i.n(tJ);
            let tX = ({
                    imageUrl: e,
                    isCustomDisplateUserDataLoading: t
                }) => {
                    let i = (0, l.u)(o.DY);
                    return (0, a.jsx)(tD, {
                        artworkPositionClassName: tY().thumbnailArtwork,
                        imageUrl: e,
                        isCustomDisplateUserDataLoading: t,
                        priority: "low",
                        slideType: e7.K.SIDE_VIEW_VISUALIZATION,
                        thumbnailImagePositionClassName: (0, g.A)(tY().thumbnailImagePositionClassName, {
                            [tY().thumbnailImagePositionClassNameCampaign]: i
                        })
                    })
                },
                tQ = ({
                    imageUrl: e,
                    imageUrlForZoom: t,
                    orientation: i,
                    isCustomDisplateUserDataLoading: s
                }) => {
                    let {
                        sizeFlags: r
                    } = (0, h.V)((0, u.k)(e => ({
                        sizeFlags: e.sizeFlags
                    }))), {
                        currentSlide: o
                    } = (0, h.V)((0, u.k)(e => ({
                        currentSlide: e.currentSlide
                    }))), l = i === C.JH.VERTICAL, n = i === C.JH.HORIZONTAL, d = o === e7.K.SIDE_VIEW_VISUALIZATION;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(tw, {
                            alt: "Custom Displate Side View",
                            artworkOrientation: i,
                            classes: {
                                artwork: (0, g.A)(tY().artworkBox, {
                                    [tY().sizeMVerticalSide]: r.isM && l && d,
                                    [tY().sizeLVerticalSide]: r.isL && l && d,
                                    [tY().sizeMHorizontalSide]: r.isM && n && d,
                                    [tY().sizeLHorizontalSide]: r.isL && n && d
                                }),
                                artworkShadow: tY().artworkShadow,
                                artworkPosition: (0, g.A)({
                                    [tY().vertical]: l,
                                    [tY().horizontal]: n,
                                    [tY().sizeMVerticalSidePosition]: r.isM && l && d,
                                    [tY().sizeLVerticalSidePosition]: r.isL && l && d,
                                    [tY().sizeMHorizontalSidePosition]: r.isM && n && d,
                                    [tY().sizeLHorizontalSidePosition]: r.isL && n && d
                                })
                            },
                            imageUrl: e,
                            imageUrlForZoom: t,
                            isCustomDisplateUserDataLoading: s,
                            loading: "eager",
                            priority: "high",
                            slideType: e7.K.SIDE_VIEW_VISUALIZATION
                        }), (0, a.jsxs)("div", {
                            className: (0, g.A)(tY().mountingWrapper, {
                                [tY().mountingWrapperVisible]: d,
                                [tY().mountingWrapperLHorizontal]: d && r.isL && n
                            }),
                            children: [r.isM && (0, a.jsx)(tB, {}), r.isL && (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(tB, {
                                    isHorizontal: n,
                                    isLarge: !0
                                }), (0, a.jsx)(tB, {
                                    isBottom: !0,
                                    isHorizontal: n,
                                    isLarge: !0
                                })]
                            })]
                        }), d ? (0, a.jsx)(tq, {
                            artworkOrientation: i,
                            size: r
                        }) : null]
                    })
                },
                t0 = (e, t) => ({
                    type: e,
                    slide: t
                }),
                t1 = (e, t) => ({
                    type: e,
                    thumbnail: t,
                    metadata: {
                        slideType: e
                    }
                }),
                t2 = () => {
                    let {
                        id: e
                    } = (0, eM.K)(), t = (0, l.u)(o.DY), {
                        customDisplate: {
                            product: i
                        }
                    } = (0, d.useContext)(eV), {
                        data: s,
                        isPending: r,
                        error: n
                    } = eO({
                        id: e ? ? ""
                    }), u = n instanceof C.hD && 403 === n.status, c = !!e && (r || u), p = (0, d.useMemo)(() => {
                        let a, r, o;
                        return a = "", r = C.JH.HORIZONTAL, s ? .product ? (a = s.product.imageCoreUrl ? ? "", r = s.product.orientation ? ? C.JH.HORIZONTAL) : i && (a = i.imageCoreUrl ? ? "", r = i.orientation ? ? C.JH.HORIZONTAL), o = ((e, t, i, a = !1) => {
                            if (i && a) {
                                let e = (0, T.v9)({
                                    assetPath: "/images/custom-displate/campaign/placeholder_red.jpg"
                                }).src;
                                return {
                                    imageUrl: e,
                                    imageUrlForZoom: e
                                }
                            }
                            if (!e) return {
                                imageUrl: "",
                                imageUrlForZoom: ""
                            };
                            if (i) {
                                let t = (0, T.cH)(e).src;
                                return {
                                    imageUrl: t,
                                    imageUrlForZoom: t
                                }
                            }
                            return {
                                imageUrl: (0, ei.Js)(e, ei.cc.rect.rect784x560, t),
                                imageUrlForZoom: (0, ei.Js)(e, ei.cc.rect.rect4032x2880, t)
                            }
                        })(a, r, !e, t), {
                            originalImageUrl: a,
                            orientation: r,
                            imageUrl: o.imageUrl,
                            imageUrlForZoom: o.imageUrlForZoom
                        }
                    }, [s, i, e, t]), m = (0, d.useMemo)(() => {
                        let e = {
                            imageUrl: p.imageUrl,
                            imageUrlForZoom: p.imageUrlForZoom,
                            isCustomDisplateUserDataLoading: c,
                            orientation: p.orientation
                        };
                        return [t0(e7.K.CUSTOM_DISPLATE_VISUALIZATION, (0, a.jsx)(tz, { ...e
                        })), t0(e7.K.SIDE_VIEW_VISUALIZATION, (0, a.jsx)(tQ, { ...e
                        })), t0(e7.K.PRESENTATION_VIDEO, (0, a.jsx)(te, {})), t0(e7.K.OFFICE_VISUALIZATION, (0, a.jsx)(tF, { ...e
                        })), t0(e7.K.DRESSER_ZOOM_VISUALIZATION, (0, a.jsx)(tM, { ...e
                        })), t0(e7.K.CUPBOARD_VISUALIZATION, (0, a.jsx)(tL, { ...e
                        }))]
                    }, [p, c]), h = (0, d.useMemo)(() => {
                        let e = {
                            imageUrl: p.imageUrl,
                            isCustomDisplateUserDataLoading: c,
                            orientation: p.orientation
                        };
                        return [t1(e7.K.CUSTOM_DISPLATE_VISUALIZATION, (0, a.jsx)(tT, { ...e
                        })), t1(e7.K.SIDE_VIEW_VISUALIZATION, (0, a.jsx)(tX, {
                            imageUrl: e.imageUrl,
                            isCustomDisplateUserDataLoading: e.isCustomDisplateUserDataLoading
                        })), t1(e7.K.PRESENTATION_VIDEO, (0, a.jsx)(to, {})), t1(e7.K.OFFICE_VISUALIZATION, (0, a.jsx)(tZ, { ...e
                        })), t1(e7.K.DRESSER_ZOOM_VISUALIZATION, (0, a.jsx)(tO, { ...e
                        })), t1(e7.K.CUPBOARD_VISUALIZATION, (0, a.jsx)(ty, { ...e
                        }))]
                    }, [p, c]);
                    return (0, a.jsx)(e6.L, {
                        config: {
                            slides: m,
                            thumbnails: h
                        }
                    })
                };
            var t3 = i(91757),
                t9 = i(90637),
                t5 = i(13900);
            let t4 = () => {
                let {
                    customDisplate: e
                } = (0, d.useContext)(eV), {
                    inspirations: t
                } = e, {
                    countryCode: i
                } = (0, el.C)(), {
                    currentCategory: s,
                    setCurrentCategory: r,
                    filterCategories: o,
                    inspirations: l,
                    isDataLoading: n
                } = (0, t5.J)({
                    ssrInspirations: t,
                    queryKeyPrefix: "custom-displate-pdp-inspirations",
                    fetchInspirations: e => C.V6.getCustomDisplateHomepageInspirationsV3(e)
                }), u = (0, d.useMemo)(() => (0, t9.T)(i), [i]);
                return (t.items ? .length ? ? 0) > 0 || n ? (0, a.jsx)("section", {
                    className: "mt-16 lg:my-12",
                    "data-testid": "custom-displate-pdp-inspirations",
                    children: (0, a.jsx)(t3.I, {
                        currentCategory: s,
                        filterCategories: o,
                        hasFilters: !1,
                        hasSeeAllButton: !1,
                        inspirations: l,
                        isDataLoading: n,
                        resolveArtworkProductRoute: u,
                        setCurrentCategory: r,
                        title: "Custom Displates, real homes"
                    })
                }) : null
            };
            var t6 = i(97160),
                t7 = i(14e3),
                t8 = i(11005),
                ie = i(16373),
                it = i(57934),
                ii = i(93811),
                ia = i(23412),
                is = i(79265),
                ir = i(18120);
            let io = {
                    itemListName: "Bestselling",
                    listingFunction: it.N.BESTSELLING,
                    listingType: "masonry",
                    athenaPageName: eA.g5.analyticsAthenaName,
                    gaPageName: eA.g5.analyticsGaName
                },
                il = () => {
                    let e, {
                            customDisplate: t
                        } = (0, d.useContext)(eV),
                        i = t.feed;
                    return i ? (0, a.jsx)(ir.L, {
                        callback: ii._,
                        children: (0, a.jsxs)("section", {
                            className: "mt-8 lg:mt-20",
                            children: [(0, a.jsx)("h2", {
                                className: "mb-8 text-center text-display-sm md:text-display-md font-display uppercase",
                                children: "Explore Displates from artists and official fandoms"
                            }), (0, a.jsx)(is.$, {
                                feeds: [(e = (0, ia.P$)(i))("bestselling", it.N.BESTSELLING), e("trending", it.N.TRENDING)],
                                metadata: io
                            })]
                        })
                    }) : null
                },
                id = () => {
                    let {
                        customDisplate: e
                    } = (0, d.useContext)(eV), {
                        id: t,
                        hasId: i
                    } = (0, eM.K)(), {
                        customDisplateData: s
                    } = eX(t ? ? ""), {
                        init: r,
                        initProductVariants: o
                    } = (0, h.V)((0, u.k)(e => ({
                        init: e.initCustomDisplateStore,
                        initProductVariants: e.initProductVariants
                    })));
                    return (0, d.useEffect)(() => {
                        r(), o(s.variants, C.ZU.MATTE, C.t.M)
                    }, [r, o, s.variants]), (() => {
                        let {
                            track: e
                        } = (0, ie.z)(), {
                            customDisplate: t
                        } = (0, d.useContext)(eV), {
                            currentVariant: i,
                            hasCustomizationWizardBeenUsed: a,
                            hasInitializedProductVariants: s
                        } = (0, h.V)((0, u.k)(e => ({
                            currentVariant: e.currentVariant,
                            hasCustomizationWizardBeenUsed: e.hasCustomizationWizardBeenUsed,
                            hasInitializedProductVariants: e.hasInitializedProductVariants
                        }))), {
                            id: r
                        } = (0, t7.useParams)(), {
                            data: o
                        } = eO({
                            id: r ? .toString() ? ? ""
                        });
                        (0, d.useEffect)(() => {
                            e()
                        }, []), (0, d.useEffect)(() => {
                            let e = o ? .product ? .externalId;
                            r && t6.SR.isValid(i.itemSku) && s && e && (0, t8.j)({
                                artworkId: e,
                                currencyCode: t.shop.currency,
                                currentVariant: i,
                                method: a ? "product_customization" : "pdp_load"
                            })
                        }, [t, i, a, r, s, o])
                    })(), (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(x.mc, {
                            className: "mt-4",
                            variant: "noPaddingMobile",
                            children: (0, a.jsx)(m.Q, {
                                options: (0, a.jsx)(e4, {}),
                                presentation: (0, a.jsx)(t2, {})
                            })
                        }), (0, a.jsxs)(x.mc, {
                            children: [!i && (0, a.jsx)(Q, {}), (0, a.jsx)(t4, {}), (0, a.jsx)(p.A, {
                                className: "pt-12 lg:pt-16",
                                testId: "faq",
                                children: (0, a.jsx)(c.y, {
                                    data: e.faq.data
                                })
                            }), (0, a.jsx)(il, {})]
                        })]
                    })
                };
            var iu = i(25282);
            let ic = ({
                header: e,
                customDisplate: t
            }) => {
                let i = (0, l.u)(o.DY),
                    {
                        hasId: n
                    } = (0, eM.K)(),
                    d = (0, eA.aH)(i),
                    u = {
                        webpage: {
                            h1: d.title,
                            url: (0, eA.iM)(void 0, {
                                absolute: !0
                            }).route,
                            description: d.description,
                            imageOfPage: d.coverImage
                        }
                    };
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(r.F, {
                        ldJsonParams: u,
                        noFollow: n,
                        noIndex: n,
                        pageMeta: d
                    }), (0, a.jsx)(s.e, {
                        value: {},
                        children: (0, a.jsx)(iu.O, {
                            headerData: e,
                            children: (0, a.jsx)(eV.Provider, {
                                value: {
                                    customDisplate: t,
                                    header: e
                                },
                                children: (0, a.jsx)(id, {})
                            })
                        })
                    })]
                })
            };
            ic.getLayout = function(e) {
                return (0, a.jsx)(n.A, {
                    abTests: e.props.abTests,
                    countryCode: e.props.countryCode,
                    featureFlags: e.props.featureFlags,
                    gitInfo: e.props.gitInfo,
                    tpid: e.props.tpid,
                    uvert: e.props.uvert,
                    children: e
                })
            };
            let ip = ic
        },
        8035: e => {
            e.exports = {
                container: "DeliveryInfoRotator_container__vJLWX",
                slide: "DeliveryInfoRotator_slide__8KqP8",
                active: "DeliveryInfoRotator_active__XTW2s"
            }
        },
        8499: (e, t, i) => {
            "use strict";
            i.d(t, {
                s: () => d
            });
            var a = i(37876),
                s = i(14232),
                r = i(69241),
                o = i(79967),
                l = i(17473),
                n = i.n(l);
            let d = ({
                children: e,
                isDotAnimating: t,
                isOpen: i,
                handleTooltipClick: l,
                identifier: d
            }) => {
                let u = (0, s.useRef)(null);
                return (0, o.A)(u, () => {
                    i && l(!1, d)
                }), (0, a.jsxs)("div", {
                    className: n().sideViewTooltipWrapper,
                    children: [(0, a.jsx)("div", {
                        className: (0, r.A)(n().sideViewTooltipTextBox, {
                            [n().sideViewTooltipTextBoxOpened]: i
                        }),
                        ref: u,
                        children: e
                    }), (0, a.jsx)("div", {
                        className: (0, r.A)(n().sideViewTooltipDot, {
                            [n().sideViewTooltipDotOpen]: i,
                            [n().sideViewTooltipDotAnimating]: t
                        }),
                        onClick: () => {
                            l(i, d)
                        }
                    })]
                })
            }
        },
        10302: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => s
            });
            var a = i(37876);
            let s = e => (0, a.jsx)("svg", {
                fill: "none",
                height: "1em",
                viewBox: "0 0 48 48",
                width: "1em",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: (0, a.jsxs)("g", {
                    stroke: "#fff",
                    strokeWidth: 2,
                    children: [(0, a.jsx)("rect", {
                        height: 46,
                        rx: 23,
                        width: 46,
                        x: 1,
                        y: 1
                    }), (0, a.jsx)("path", {
                        d: "m19 15 14 9-14 9z",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })]
                })
            })
        },
        11005: (e, t, i) => {
            "use strict";
            i.d(t, {
                j: () => r
            });
            var a = i(22884),
                s = i(98315);
            let r = ({
                artworkId: e,
                currencyCode: t,
                currentVariant: i,
                method: r,
                availableTypes: o
            }) => {
                (0, a.u)({
                    event: "sst_view_item",
                    ecommerce: {
                        currency: t,
                        value: (0, s.yJ)(i.price ? .amountInCurrency),
                        method: r,
                        ...o && {
                            available_item_types: o.map(e => e.toLowerCase()).join("|")
                        },
                        items: [{
                            item_id: e.toString(),
                            item_variant: i.itemSku,
                            price: (0, s.yJ)(i.price ? .amountInCurrency),
                            lowest_price: (0, s.yJ)(i.lowestPrice ? .amountInCurrency),
                            quantity: 1
                        }]
                    }
                })
            }
        },
        13415: (e, t, i) => {
            "use strict";
            i.d(t, {
                i: () => h
            });
            var a = i(37876),
                s = i(14232),
                r = i(80208),
                o = i(37872),
                l = i(37473),
                n = i(89473),
                d = i(98420);
            let u = (e, t) => e.includes(t) ? `${t} is unavailable for the selected size` : `${t} is unavailable for this design`;
            var c = i(68440),
                p = i(28402),
                m = i(14619);
            let h = ({
                variants: e
            }) => {
                let {
                    location: t
                } = (0, s.useContext)(c.i), {
                    handleTypeChange: i,
                    type: h
                } = (0, p.m)(t), {
                    finishPickerOptions: x
                } = (e => {
                    let {
                        availableTypes: t
                    } = (0, n.V)((0, o.k)(e => ({
                        availableTypes: e.availableTypes
                    }))), i = (0, s.useMemo)(() => !!e && (0, d.r)(e), [e]);
                    return {
                        finishPickerOptions: (0, s.useMemo)(() => {
                            let e = [{
                                value: l.ZU.MATTE,
                                label: "Matte",
                                testId: `finish-input-${l.ZU.MATTE}`,
                                disabled: !1
                            }, {
                                value: l.ZU.GLOSS,
                                label: "Gloss",
                                testId: `finish-input-${l.ZU.GLOSS}`,
                                disabled: !t.includes(l.ZU.GLOSS),
                                tooltipDescription: t.includes(l.ZU.GLOSS) ? null : u(t, l.ZU.GLOSS)
                            }];
                            return i && e.push({
                                value: l.ZU.TEXTRA,
                                label: "Textra",
                                testId: `finish-input-${l.ZU.TEXTRA}`,
                                disabled: !t.includes(l.ZU.TEXTRA),
                                tooltipDescription: t.includes(l.ZU.TEXTRA) ? null : u(t, l.ZU.TEXTRA)
                            }), e
                        }, [t, i])
                    }
                })(e);
                return (0, a.jsx)("div", {
                    className: (0, m.cn)("transition-all duration-300 ease-in-out w-full", "has-data-[testid=segmented-control]:animate-smooth-expand"),
                    children: (0, a.jsx)(r.R, {
                        activeOption: h,
                        className: (0, m.cn)("transition-[width] duration-300 ease-in-out", "has-data-[testid*=textra]:animate-gentle-bounce", "lg:justify-start"),
                        name: "finish",
                        onChange: i,
                        options: x,
                        variant: "fullWidth"
                    })
                })
            }
        },
        13539: (e, t, i) => {
            "use strict";
            i.d(t, {
                l: () => r
            });
            var a = i(37876),
                s = i(36256);
            let r = ({
                data: e,
                headerTitle: t = "Frequently asked questions"
            }) => (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)("h2", {
                    className: "mb-12 text-center text-display-sm md:text-display-md uppercase font-display",
                    children: t
                }), (0, a.jsx)(s.nD, {
                    type: "multiple",
                    children: e.map(({
                        title: e,
                        content: t
                    }, i) => {
                        let r = `${e}_${i}`;
                        return (0, a.jsx)(s.As, {
                            trigger: (0, a.jsx)("span", {
                                className: "text-heading-h4",
                                children: e
                            }),
                            value: r,
                            children: t
                        }, r)
                    })
                })]
            })
        },
        13900: (e, t, i) => {
            "use strict";
            i.d(t, {
                J: () => o
            });
            var a = i(14232),
                s = i(74359),
                r = i(82678);
            let o = ({
                ssrInspirations: e,
                queryKeyPrefix: t,
                fetchInspirations: i
            }) => {
                let [o, l] = (0, a.useState)(r.q), n = o.uniqueId === r.q.uniqueId, {
                    data: d,
                    isPending: u
                } = (0, s.I)({
                    queryKey: [t, o.uniqueId],
                    queryFn: () => i(o.uniqueId),
                    enabled: !n,
                    initialData: n ? e : void 0,
                    staleTime: e => {
                        let t = e.state.data;
                        return 6e4 * ((t ? .items ? .length ? ? 0) > 0)
                    }
                }), c = (0, a.useMemo)(() => n ? e : d || {
                    categories: e.categories,
                    items: []
                }, [d, n, e]), p = e.categories ? ? [];
                return {
                    currentCategory: o,
                    setCurrentCategory: l,
                    filterCategories: p,
                    inspirations: c.items ? ? [],
                    isDataLoading: u && !n
                }
            }
        },
        14078: (e, t, i) => {
            "use strict";
            i.d(t, {
                F: () => d
            });
            var a = i(37876),
                s = i(36256),
                r = i(14619),
                o = i(29633);
            let l = () => (0, a.jsx)("div", {
                    className: "h-10 w-[240px] overflow-hidden rounded-[46px]",
                    children: (0, a.jsx)(s.EA, {
                        className: "size-full"
                    })
                }),
                n = () => (0, a.jsx)("div", {
                    className: "h-10 w-[150px]",
                    children: (0, a.jsx)(s.EA, {
                        className: "size-full"
                    })
                }),
                d = ({
                    showHeader: e = !0,
                    showFooter: t = !0,
                    testId: i,
                    className: d
                }) => (0, a.jsxs)("div", {
                    className: (0, r.cn)("flex flex-col items-center pb-14", d),
                    "data-testid": i,
                    children: [e ? (0, a.jsx)(l, {}) : null, (0, a.jsx)("div", {
                        className: (0, r.cn)("my-10 grid w-full auto-rows-[minmax(100px,auto)] grid-cols-2 grid-flow-dense gap-4", "md:grid-cols-4 md:gap-6", "lg:grid-cols-5", "xl:grid-cols-6"),
                        children: [...Array(o.T).keys()].map(e => (0, a.jsx)(s.EA, {
                            className: "aspect-5/7 h-auto! size-full"
                        }, e))
                    }), t ? (0, a.jsx)(n, {}) : null]
                })
        },
        14501: e => {
            e.exports = {
                linkWrapper: "FiltersUploadButton_linkWrapper__ZjRgF",
                linkWrapperHiddenDesktop: "FiltersUploadButton_linkWrapperHiddenDesktop__nRlFf",
                linkWrapperHiddenMobile: "FiltersUploadButton_linkWrapperHiddenMobile__BmEct"
            }
        },
        15118: (e, t, i) => {
            "use strict";
            i.d(t, {
                $s: () => r,
                PM: () => a,
                Sc: () => s
            });
            let a = "Add to cart",
                s = "Added to cart",
                r = "Something went wrong. Please try again later."
        },
        15545: e => {
            e.exports = {
                thumbnailImagePositionClassName: "CustomDisplateMainSlide_thumbnailImagePositionClassName__vnHPd",
                thumbnailArtworkVertical: "CustomDisplateMainSlide_thumbnailArtworkVertical__GcWpe",
                thumbnailArtworkHorizontal: "CustomDisplateMainSlide_thumbnailArtworkHorizontal__YkY39",
                artworkBox: "CustomDisplateMainSlide_artworkBox__LWzpf",
                artworkShadow: "CustomDisplateMainSlide_artworkShadow__ku5D9",
                backgroundCustomDisplateVertical: "CustomDisplateMainSlide_backgroundCustomDisplateVertical__TkqI6",
                backgroundCustomDisplateLVertical: "CustomDisplateMainSlide_backgroundCustomDisplateLVertical___j__C",
                vertical: "CustomDisplateMainSlide_vertical__PkKwt",
                horizontal: "CustomDisplateMainSlide_horizontal__Lpplp",
                sizeMVerticalPosition: "CustomDisplateMainSlide_sizeMVerticalPosition__Ztmcw",
                sizeLVerticalPosition: "CustomDisplateMainSlide_sizeLVerticalPosition__5do0o",
                sizeMHorizontalPosition: "CustomDisplateMainSlide_sizeMHorizontalPosition__vr9D7",
                sizeLHorizontalPosition: "CustomDisplateMainSlide_sizeLHorizontalPosition__4Mrk8"
            }
        },
        16434: (e, t, i) => {
            "use strict";
            i.d(t, {
                $P: () => u,
                Sh: () => d,
                aB: () => l
            });
            var a, s, r = i(22884),
                o = i(37473),
                l = ((a = {}).SIZE = "size", a.FINISH = "finish", a.FRAME = "frame", a),
                n = ((s = n || {}).M = "m", s.L = "l", s.XL = "xl", s.MATTE = "matte", s.GLOSS = "gloss", s.TEXTRA = "textra", s.NO_FRAME = "no frame", s.NATURAL_WOOD_PATTERN = "natural wood pattern", s.GRAPHITE = "graphite", s.WHITE_WOOD_PATTERN = "white wood pattern", s.BLACK_WOOD_PATTERN = "black wood pattern", s);
            let d = ({
                    type: e,
                    option: t,
                    location: i
                }) => {
                    (0, r.u)({
                        event: "product_customize",
                        customization_type: e,
                        customization_option: {
                            [o.or.M]: "m",
                            [o.or.L]: "l",
                            [o.or.XL]: "xl",
                            [o.ZU.MATTE]: "matte",
                            [o.ZU.GLOSS]: "gloss",
                            [o.ZU.TEXTRA]: "textra",
                            [o.wI.NONE]: "no frame",
                            [o.wI.GRAPHITE]: "graphite",
                            [o.wI.WHITE]: "white wood pattern",
                            [o.wI.BLACK]: "black wood pattern",
                            [o.wI.NATURAL]: "natural wood pattern"
                        }[t],
                        customization_location: i
                    })
                },
                u = e => {
                    (0, r.u)({
                        event: "element_impression",
                        element_id: "upgrade_tooltip",
                        element_variant: e
                    })
                }
        },
        17450: e => {
            e.exports = {
                thumbnailImagePositionClassName: "CustomDisplateSideViewVisualization_thumbnailImagePositionClassName__ogUoN",
                thumbnailImagePositionClassNameCampaign: "CustomDisplateSideViewVisualization_thumbnailImagePositionClassNameCampaign__V4nr5",
                thumbnailArtwork: "CustomDisplateSideViewVisualization_thumbnailArtwork__AN__h",
                sizeMVerticalSidePosition: "CustomDisplateSideViewVisualization_sizeMVerticalSidePosition__F88B7",
                sizeLVerticalSidePosition: "CustomDisplateSideViewVisualization_sizeLVerticalSidePosition__XwNCG",
                sizeMHorizontalSidePosition: "CustomDisplateSideViewVisualization_sizeMHorizontalSidePosition__Hug9z",
                sizeLHorizontalSidePosition: "CustomDisplateSideViewVisualization_sizeLHorizontalSidePosition__rP6Q9",
                mountingWrapper: "CustomDisplateSideViewVisualization_mountingWrapper__a6qyK",
                mountingWrapperVisible: "CustomDisplateSideViewVisualization_mountingWrapperVisible__zOVzi",
                mountingWrapperLHorizontal: "CustomDisplateSideViewVisualization_mountingWrapperLHorizontal__xArEP",
                artworkBox: "CustomDisplateSideViewVisualization_artworkBox___ih9I",
                artworkShadow: "CustomDisplateSideViewVisualization_artworkShadow__ErOOd",
                horizontal: "CustomDisplateSideViewVisualization_horizontal__lA2hW",
                vertical: "CustomDisplateSideViewVisualization_vertical__0WwjX",
                sizeMVerticalSide: "CustomDisplateSideViewVisualization_sizeMVerticalSide__XLpDQ",
                sizeLVerticalSide: "CustomDisplateSideViewVisualization_sizeLVerticalSide__YVXVW",
                sizeMHorizontalSide: "CustomDisplateSideViewVisualization_sizeMHorizontalSide__MxZGk",
                sizeLHorizontalSide: "CustomDisplateSideViewVisualization_sizeLHorizontalSide__66bHF"
            }
        },
        17473: e => {
            e.exports = {
                sideViewTooltipWrapper: "SideViewTooltip_sideViewTooltipWrapper__uzrbv",
                sideViewTooltipTextBox: "SideViewTooltip_sideViewTooltipTextBox__3gVZo",
                sideViewTooltipTextBoxOpened: "SideViewTooltip_sideViewTooltipTextBoxOpened__K3bEL",
                sideViewTooltipDot: "SideViewTooltip_sideViewTooltipDot__2lYC5",
                sideViewTooltipDotOpen: "SideViewTooltip_sideViewTooltipDotOpen__5Tyz_",
                sideViewTooltipDotAnimating: "SideViewTooltip_sideViewTooltipDotAnimating__2Pakj",
                VisSideTooltipBorderChangeAnimation: "SideViewTooltip_VisSideTooltipBorderChangeAnimation__Ey6wc",
                VisSideTooltipPulseAnimation: "SideViewTooltip_VisSideTooltipPulseAnimation___HhwJ"
            }
        },
        19989: e => {
            e.exports = {
                container: "FiltersTextBox_container__Ff_Za",
                featuresList: "FiltersTextBox_featuresList___50Hq",
                featureItem: "FiltersTextBox_featureItem__igA5O",
                featureIcon: "FiltersTextBox_featureIcon__bD0qr",
                featureIconCampaign: "FiltersTextBox_featureIconCampaign__Ii0Ao",
                featureContent: "FiltersTextBox_featureContent__GwquE",
                featureItemTitle: "FiltersTextBox_featureItemTitle__vGmaq",
                featureItemText: "FiltersTextBox_featureItemText__GalGH"
            }
        },
        23794: (e, t, i) => {
            "use strict";
            i.d(t, {
                y: () => l
            });
            var a = i(37876),
                s = i(14232),
                r = i(13539),
                o = i(16441);
            let l = ({
                data: e
            }) => {
                let t = (0, s.useMemo)(() => e.map(e => ({
                    title: e.attributes.question,
                    content: (0, a.jsx)(o.T, {
                        markdown: e.attributes.answer,
                        useComponents: ["link", "image", "table"]
                    })
                })), [e]);
                return (0, a.jsx)(r.l, {
                    data: t,
                    headerTitle: "Frequently asked questions"
                })
            }
        },
        28402: (e, t, i) => {
            "use strict";
            i.d(t, {
                m: () => o
            });
            var a = i(16434),
                s = i(89473),
                r = i(30818);
            let o = e => {
                let t = s.V,
                    i = (0, r.A)(e => e.resetCurrentCameraStage),
                    o = t(e => e.hasInitializedCustomizationWizard),
                    l = t(e => e.type),
                    n = t(e => e.frame),
                    d = t(e => e.size),
                    u = t(e => e.selectType),
                    c = t(e => e.selectFrame),
                    p = t(e => e.selectSize);
                return {
                    type: l,
                    frame: n,
                    size: d,
                    handleTypeChange: t => {
                        l != t && (u(t), (0, a.Sh)({
                            type: a.aB.FINISH,
                            option: t,
                            location: e
                        }))
                    },
                    handleFrameChange: t => {
                        n != t && (c(t), (0, a.Sh)({
                            type: a.aB.FRAME,
                            option: t,
                            location: e
                        }))
                    },
                    handleSizeChange: t => {
                        d != t && (p(t), i(), (0, a.Sh)({
                            type: a.aB.SIZE,
                            option: t,
                            location: e
                        }))
                    },
                    isInitialized: o
                }
            }
        },
        30229: (e, t, i) => {
            "use strict";
            i.d(t, {
                m: () => h
            });
            var a = i(37876),
                s = i(14232),
                r = i(80208),
                o = i(37872),
                l = i(37473),
                n = i(89473),
                d = i(84560);
            let u = [{
                value: l.wI.NONE,
                label: "None"
            }, {
                value: l.wI.NATURAL,
                label: "Natural"
            }, {
                value: l.wI.GRAPHITE,
                label: "Graphite"
            }, {
                value: l.wI.WHITE,
                label: "White"
            }, {
                value: l.wI.BLACK,
                label: "Black"
            }];
            var c = i(68440),
                p = i(28402),
                m = i(14619);
            let h = () => {
                let {
                    location: e
                } = (0, s.useContext)(c.i), {
                    handleFrameChange: t,
                    frame: i
                } = (0, p.m)(e), {
                    framePickerOptions: l
                } = (() => {
                    let {
                        availableFrames: e
                    } = (0, n.V)((0, o.k)(e => ({
                        availableFrames: e.availableFrames
                    })));
                    return {
                        framePickerOptions: u.map(({
                            value: t,
                            label: i
                        }) => ({
                            value: t,
                            label: i,
                            disabled: !e.includes(t),
                            children: (0, d.o)(t, `${i} frame`),
                            testId: `frame-input-${t}`
                        }))
                    }
                })();
                return (0, a.jsx)("div", {
                    className: (0, m.cn)("transition-all duration-300 ease-in-out w-full", "has-data-[testid=segmented-control]:animate-smooth-expand"),
                    children: (0, a.jsx)(r.R, {
                        activeOption: i,
                        className: (0, m.cn)("transition-[width] duration-300 ease-in-out", "has-[[data-testid=frame-input-graphite]:not([data-disabled])]:animate-gentle-bounce"),
                        name: "frame",
                        onChange: t,
                        options: l,
                        variant: "frame"
                    })
                })
            }
        },
        32432: e => {
            e.exports = {
                buyBoxButtonWrapper: "CustomDisplateBuyBoxButton_buyBoxButtonWrapper__Ich5k",
                buttonWrapper: "CustomDisplateBuyBoxButton_buttonWrapper__F_ytj",
                uploadIcon: "CustomDisplateBuyBoxButton_uploadIcon__P3A4W"
            }
        },
        34457: e => {
            e.exports = {
                container: "AIFiltersSection_container__nFnc5",
                campaignMode: "AIFiltersSection_campaignMode__f59Rr",
                headerWrapper: "AIFiltersSection_headerWrapper__pbxu_",
                content: "AIFiltersSection_content__ytPUI",
                textBoxWrapper: "AIFiltersSection_textBoxWrapper__Upr0z",
                mainPictureWrapper: "AIFiltersSection_mainPictureWrapper__p1zvA",
                thumbnailsWrapper: "AIFiltersSection_thumbnailsWrapper__pdAwQ"
            }
        },
        36814: e => {
            e.exports = {
                slide: "CustomDisplateDefaultSlide_slide__CWMyp",
                slideCampaign: "CustomDisplateDefaultSlide_slideCampaign__pce0A",
                buttonsWrapper: "CustomDisplateDefaultSlide_buttonsWrapper__Ijf6Y",
                backgroundWrapper: "CustomDisplateDefaultSlide_backgroundWrapper__g8qN_",
                backgroundWrapperZoomed: "CustomDisplateDefaultSlide_backgroundWrapperZoomed__fDCGQ",
                backgroundSizeM: "CustomDisplateDefaultSlide_backgroundSizeM__qjgVw",
                backgroundSizeL: "CustomDisplateDefaultSlide_backgroundSizeL__eRSKG",
                backgroundSizeLZoomed: "CustomDisplateDefaultSlide_backgroundSizeLZoomed__hUeOn",
                backgroundImage: "CustomDisplateDefaultSlide_backgroundImage__53X_M",
                artworkPositioner: "CustomDisplateDefaultSlide_artworkPositioner__MBBw9",
                artworkWrapper: "CustomDisplateDefaultSlide_artworkWrapper__YiqAg",
                animationImageContainer: "CustomDisplateDefaultSlide_animationImageContainer__ZjsMS",
                animationImage: "CustomDisplateDefaultSlide_animationImage__xke_4",
                imageSequence: "CustomDisplateDefaultSlide_imageSequence__K40jJ",
                artworkImage: "CustomDisplateDefaultSlide_artworkImage__0NbQs",
                vertical: "CustomDisplateDefaultSlide_vertical__cZyYV",
                horizontal: "CustomDisplateDefaultSlide_horizontal__dDhLj",
                sizeL: "CustomDisplateDefaultSlide_sizeL__l8Mkl",
                sizeLZoomed: "CustomDisplateDefaultSlide_sizeLZoomed__Xmq2Y",
                loadingContainer: "CustomDisplateDefaultSlide_loadingContainer__8o8ec",
                benefitText1: "CustomDisplateDefaultSlide_benefitText1__OFd9u",
                benefitText2: "CustomDisplateDefaultSlide_benefitText2__Nl_Cl",
                benefitText3: "CustomDisplateDefaultSlide_benefitText3__bSqLg",
                expandBenefitDotLeft: "CustomDisplateDefaultSlide_expandBenefitDotLeft__cYx__",
                expandBenefitDotDesktopLeft: "CustomDisplateDefaultSlide_expandBenefitDotDesktopLeft__vYbjx",
                expandBenefitDot: "CustomDisplateDefaultSlide_expandBenefitDot__Ulq6n",
                expandBenefitDotDesktop: "CustomDisplateDefaultSlide_expandBenefitDotDesktop__vIh9_",
                expandBenefitDot3Left: "CustomDisplateDefaultSlide_expandBenefitDot3Left___5x0w",
                expandBenefitDot3DesktopLeft: "CustomDisplateDefaultSlide_expandBenefitDot3DesktopLeft__HScJ9",
                playWithFiltersButton: "CustomDisplateDefaultSlide_playWithFiltersButton__RRDDV"
            }
        },
        40397: e => {
            e.exports = {
                title: "FiltersHeader_title__z5VY3",
                titleLine: "FiltersHeader_titleLine__pEbcR",
                logo: "FiltersHeader_logo__6yPlI",
                styleText: "FiltersHeader_styleText___rfyn",
                filtersText: "FiltersHeader_filtersText__v_3Hd",
                subtitle: "FiltersHeader_subtitle__AC8Tn",
                hiddenOnMobile: "FiltersHeader_hiddenOnMobile__l3VWg",
                betaBadgeWrapper: "FiltersHeader_betaBadgeWrapper__IUlQn"
            }
        },
        40636: (e, t, i) => {
            "use strict";
            i.d(t, {
                CN: () => n,
                Tu: () => o,
                hM: () => r,
                kc: () => l,
                lB: () => d
            });
            var a = i(22884),
                s = i(51192);
            let r = ({
                    componentLocation: e,
                    authorId: t,
                    authorName: i
                }) => (0, a.u)({
                    event: "follow",
                    follow_location: e,
                    follow_id: t.toString(),
                    follow_name: i
                }),
                o = e => (0, s.O)({
                    elementId: "follow_button",
                    elementVariant: e
                }),
                l = ({
                    componentLocation: e,
                    authorId: t,
                    authorName: i
                }) => (0, a.u)({
                    event: "unfollow",
                    follow_location: e,
                    follow_id: t.toString(),
                    follow_name: i
                }),
                n = (e, t) => {
                    t({
                        eventType: "click",
                        eventName: e
                    })
                },
                d = e => {
                    e({
                        eventType: "view",
                        eventName: "followList"
                    })
                }
        },
        41037: (e, t, i) => {
            "use strict";
            i.d(t, {
                Z: () => a
            });
            let a = e => e.trim().replace(/\s/g, "_").toLowerCase()
        },
        43343: (e, t, i) => {
            "use strict";
            i.d(t, {
                i: () => o
            });
            var a = i(37876),
                s = i(93568),
                r = i(36256);
            let o = ({
                className: e,
                onClick: t
            }) => (0, a.jsx)(r.ff, {
                "aria-label": "Zoom in",
                className: e,
                "data-testid": "trigger-zoom-button",
                icon: (0, a.jsx)(s.A, {}),
                onClick: t,
                size: "lg",
                variant: "glass"
            })
        },
        45067: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => g
            });
            var a = i(37876),
                s = i(14232),
                r = i(37872),
                o = i(47321),
                l = i(16364),
                n = i(86591),
                d = i(46140),
                u = i(10698),
                c = i(55895),
                p = i(36256);
            let m = ({
                isOpen: e,
                handleClose: t
            }) => (0, a.jsx)(p._s, {
                onOpenChange: e => {
                    e || t()
                },
                open: e,
                children: (0, a.jsxs)(p.zj, {
                    "aria-describedby": void 0,
                    "data-testid": "pricing-policy-drawer",
                    children: [(0, a.jsx)(p.BE, {
                        children: (0, a.jsx)(p.gk, {
                            children: "Pricing Policy"
                        })
                    }), (0, a.jsx)(p.ys, {
                        children: (0, a.jsxs)("div", {
                            className: "flex flex-col gap-4 text-body-md",
                            children: [(0, a.jsx)("p", {
                                children: c.I$
                            }), (0, a.jsx)("p", {
                                children: c.jS
                            }), (0, a.jsx)("p", {
                                children: c.HO
                            }), (0, a.jsx)("p", {
                                children: c.ne
                            }), (0, a.jsx)("p", {
                                children: c.sf
                            })]
                        })
                    })]
                })
            });
            var h = i(89473),
                x = i(14619);
            let g = ({
                className: e,
                isLoading: t = !1
            }) => {
                let {
                    currentVariant: i
                } = (0, h.V)((0, r.k)(e => ({
                    currentVariant: e.currentVariant
                }))), {
                    countryCode: c
                } = (0, u.C)(), g = (0, o._g)(l.vv), _ = g ? .variantName === "v1" && "US" === c, [C, f] = (0, s.useState)(!1);
                return (0, a.jsxs)("div", {
                    className: (0, x.cn)("w-full mt-6 mb-4", e),
                    children: [i.price && !t ? (0, a.jsxs)("div", {
                        className: "flex items-center gap-1",
                        children: [(0, a.jsx)(n.A, {
                            formattedLowestPrice: i.lowestPrice ? .formatted,
                            formattedPrice: i.price.formatted,
                            priceAmountInMinorUnits: i.price.amountInCurrency,
                            priceClassName: "text-heading-h3",
                            splitDecimals: !0
                        }), _ ? (0, a.jsx)("div", {
                            className: "group/picker-more mb-2 shrink-0",
                            children: (0, a.jsx)(d.i, {
                                dataTestId: "pricing-policy-info-button",
                                onClick: () => f(!0)
                            })
                        }) : null]
                    }) : (0, a.jsx)(p.EA, {
                        className: "h-7 w-20"
                    }), _ ? (0, a.jsx)(m, {
                        handleClose: () => f(!1),
                        isOpen: C
                    }) : null]
                })
            }
        },
        45579: (e, t, i) => {
            "use strict";
            i.d(t, {
                u: () => x
            });
            var a = i(37876),
                s = i(27555),
                r = i(10698),
                o = i(90413),
                l = i(10769);
            let n = {
                    group1: ["IE", "FI", "GL", "GR"],
                    group2: ["ES", "IL", "IT", "SE"],
                    group3: ["FR", "GB", "JP", "LT", "LV", "MC", "PT", "SK", "TH", "TW"],
                    group4: ["AT", "BE", "CZ", "EE", "HR", "IS", "LU", "NO", "CA", "SI"],
                    group5: ["DE", "SG", "MY", "KR", "AU"],
                    group6: ["PL", "AE", "CH", "DK", "GG", "HK", "JE", "NL", "PH", "RE", "SA"],
                    group7: ["US"]
                },
                d = new Date("2025-12-10T09:00:00Z"),
                u = {
                    group1: {
                        phaseIEnd: new Date("2025-12-12T11:00:00Z"),
                        phaseIIIStart: new Date("2025-12-12T11:01:00Z"),
                        phaseIIIEnd: new Date("2025-12-25T08:59:00Z"),
                        phaseIVStart: new Date("2025-12-25T09:00:00Z")
                    },
                    group2: {
                        phaseIEnd: new Date("2025-12-12T11:00:00Z"),
                        phaseIIStart: new Date("2025-12-12T11:01:00Z"),
                        phaseIIEnd: new Date("2025-12-14T22:59:00Z"),
                        phaseIIIStart: new Date("2025-12-14T23:00:00Z"),
                        phaseIIIEnd: new Date("2025-12-25T08:59:00Z"),
                        phaseIVStart: new Date("2025-12-25T09:00:00Z"),
                        cutoffDate: "December 14"
                    },
                    group3: {
                        phaseIEnd: new Date("2025-12-13T08:59:00Z"),
                        phaseIIStart: new Date("2025-12-13T09:00:00Z"),
                        phaseIIEnd: new Date("2025-12-15T22:59:00Z"),
                        phaseIIIStart: new Date("2025-12-15T23:01:00Z"),
                        phaseIIIEnd: new Date("2025-12-25T08:59:00Z"),
                        phaseIVStart: new Date("2025-12-25T09:00:00Z"),
                        cutoffDate: "December 15"
                    },
                    group4: {
                        phaseIEnd: new Date("2025-12-14T08:59:00Z"),
                        phaseIIStart: new Date("2025-12-14T09:00:00Z"),
                        phaseIIEnd: new Date("2025-12-16T22:59:00Z"),
                        phaseIIIStart: new Date("2025-12-16T23:01:00Z"),
                        phaseIIIEnd: new Date("2025-12-25T08:59:00Z"),
                        phaseIVStart: new Date("2025-12-25T09:00:00Z"),
                        cutoffDate: "December 16"
                    },
                    group5: {
                        phaseIEnd: new Date("2025-12-15T08:59:00Z"),
                        phaseIIStart: new Date("2025-12-15T09:00:00Z"),
                        phaseIIEnd: new Date("2025-12-17T22:59:00Z"),
                        phaseIIIStart: new Date("2025-12-17T23:01:00Z"),
                        phaseIIIEnd: new Date("2025-12-25T08:59:00Z"),
                        phaseIVStart: new Date("2025-12-25T09:00:00Z"),
                        cutoffDate: "December 17"
                    },
                    group6: {
                        phaseIEnd: new Date("2025-12-16T08:59:00Z"),
                        phaseIIStart: new Date("2025-12-16T09:00:00Z"),
                        phaseIIEnd: new Date("2025-12-18T22:59:00Z"),
                        phaseIIIStart: new Date("2025-12-18T23:01:00Z"),
                        phaseIIIEnd: new Date("2025-12-25T08:59:00Z"),
                        phaseIVStart: new Date("2025-12-25T09:00:00Z"),
                        cutoffDate: "December 18"
                    },
                    group7: {
                        phaseIEnd: new Date("2025-12-15T08:59:00Z"),
                        phaseIIStart: new Date("2025-12-15T09:00:00Z"),
                        phaseIIEnd: new Date("2025-12-18T08:59:00Z"),
                        phaseIIIStart: new Date("2025-12-18T09:00:00Z"),
                        phaseIIIEnd: new Date("2025-12-25T08:59:00Z"),
                        phaseIVStart: new Date("2025-12-25T09:00:00Z"),
                        cutoffDate: "December 17"
                    }
                };
            var c = i(36256),
                p = i(14619),
                m = i(48062);
            let h = new Set(["DK", "FO", "GL", "SG", "SE", "NO", "CH"]),
                x = ({
                    className: e
                }) => {
                    let {
                        countryCode: t
                    } = (0, r.C)(), i = function(e, t = new Date) {
                        var i, a;
                        let s, r = function(e) {
                            let t = e.toUpperCase();
                            for (let [e, i] of Object.entries(n))
                                if (i.includes(t)) return e;
                            return null
                        }(e);
                        if (!r) return null;
                        let o = (i = r, a = t, s = u[i], a < d ? null : a <= s.phaseIEnd ? "phaseI" : "group1" === i ? a < s.phaseIIIStart ? null : a <= s.phaseIIIEnd ? "phaseIII" : a >= s.phaseIVStart ? "phaseIV" : null : "phaseIIStart" in s && a >= s.phaseIIStart && a <= s.phaseIIEnd ? "phaseII" : a >= s.phaseIIIStart && a <= s.phaseIIIEnd ? "phaseIII" : a >= s.phaseIVStart ? "phaseIV" : null);
                        if (!o || "phaseIV" === o) return {
                            topBarMessage: null,
                            pdpMainText: null,
                            pdpSubText: null
                        };
                        let l = u[r];
                        switch (o) {
                            case "phaseI":
                                return {
                                    topBarMessage: {
                                        emoji: "\uD83C\uDF81",
                                        boldText: "Order today",
                                        restText: " for Christmas delivery!"
                                    },
                                    pdpMainText: "Christmas delivery guaranteed!",
                                    pdpSubText: "Order today and get it on time"
                                };
                            case "phaseII":
                                if ("cutoffDate" in l) return {
                                    topBarMessage: {
                                        emoji: "\uD83C\uDF81",
                                        boldText: `Order by ${l.cutoffDate}`,
                                        restText: " for Christmas delivery!"
                                    },
                                    pdpMainText: "Christmas delivery guaranteed!",
                                    pdpSubText: `Order by ${l.cutoffDate} and get it on time`
                                };
                                return null;
                            case "phaseIII":
                                return {
                                    topBarMessage: null,
                                    pdpMainText: "Christmas delivery not guaranteed",
                                    pdpSubText: "Get our eGift card. Instant delivery by email"
                                };
                            default:
                                return null
                        }
                    }(t), x = (0, o.A)(), g = h.has(t.toUpperCase()) && i ? .pdpSubText ? .includes("eGift card");
                    return x && i && i.pdpMainText ? (0, a.jsxs)("div", {
                        className: (0, p.cn)("flex items-center gap-2 mb-4", e),
                        "data-testid": "christmas-delivery-message",
                        children: [(0, a.jsx)("img", {
                            alt: "gift",
                            className: "w-6 h-6",
                            loading: "lazy",
                            src: (0, l.v9)({
                                assetPath: "/icons/christmas/gift2.png"
                            }).src
                        }), (0, a.jsxs)("div", {
                            children: [(0, a.jsx)("p", {
                                className: "text-body-xs font-bold text-text-secondary",
                                children: i.pdpMainText
                            }), i.pdpSubText && !g && (0, a.jsx)("p", {
                                className: "text-body-xs text-text-secondary",
                                children: i.pdpSubText.includes("eGift card") ? (0, a.jsxs)(a.Fragment, {
                                    children: [i.pdpSubText.split("eGift card")[0], (0, a.jsx)(c.N_, {
                                        asChild: !0,
                                        children: (0, a.jsx)(s.A, {
                                            routeInfo: (0, m.u)(),
                                            children: "eGift card"
                                        })
                                    }), i.pdpSubText.split("eGift card")[1]]
                                }) : i.pdpSubText
                            })]
                        })]
                    }) : null
                }
        },
        55655: e => {
            e.exports = {
                artworkPicture: "CustomDisplateArtworkPicture_artworkPicture__tD7Or",
                loaderContainer: "CustomDisplateArtworkPicture_loaderContainer__lSgkm"
            }
        },
        55895: (e, t, i) => {
            "use strict";
            i.d(t, {
                FQ: () => a,
                HO: () => r,
                I$: () => o,
                jS: () => s,
                ne: () => l,
                sf: () => n
            });
            let a = "Pricing Policy US",
                s = "Our pricing for promotions, discounts, and limited-time offers is determined based on our own internal assessment of the value of each Displate product.",
                r = "These prices may not reflect the previous or historical selling prices of the item. We calculate the current retail value using a variety of factors, including the uniqueness of the artwork, licensing fees, material costs, artist collaborations, and current demand. This means that any percentage discount you see is a markdown from our assessed full value of the product at the time of the offer. Before completing your purchase, we ask that you acknowledge and understand this pricing policy.",
                o = "This pricing policy applies only to United States customers and orders.",
                l = "Transparency is important to us, and we want your shopping experience to be clear and informed.",
                n = "Thanks for supporting artists and being part of the Displate community!"
        },
        56484: (e, t, i) => {
            "use strict";
            i.d(t, {
                O: () => C
            });
            var a, s = i(37876),
                r = i(14232),
                o = i(37872),
                l = i(46140),
                n = i(56855),
                d = i(13415),
                u = ((a = {}).SIZE = "size", a.FRAME = "frame", a.PRODUCT_TYPE = "product-type", a);
            let c = ({
                handleDrawerOpen: e,
                variants: t
            }) => (0, s.jsx)(n.o, {
                pillsPickerSlot: (0, s.jsx)(d.i, {
                    variants: t
                }),
                title: "Select product type",
                titleComponent: "h3",
                tooltipSlot: (0, s.jsx)(l.i, {
                    dataTestId: `more-${u.PRODUCT_TYPE}`,
                    onClick: e
                })
            });
            var p = i(30229),
                m = i(14619);
            let h = ({
                hidden: e,
                disableAnimations: t,
                handleDrawerOpen: i,
                ref: a
            }) => (0, s.jsx)(n.o, {
                classes: {
                    wrapper: (0, m.cn)("opacity-100", t && "transition-none", !t && e && "[transition:transform_600ms_ease,opacity_150ms_ease-out]", !t && !e && "[transition:transform_400ms_ease,opacity_250ms_ease-out_200ms]", e && "translate-y-[calc(-1*var(--frame-picker-height,76px)-var(--spacing-6,24px))] opacity-0 z-[-1]")
                },
                pillsPickerSlot: (0, s.jsx)(p.m, {}),
                ref: a,
                title: "Add frame",
                titleComponent: "h3",
                tooltipSlot: (0, s.jsx)(l.i, {
                    dataTestId: `more-${u.FRAME}`,
                    onClick: i
                })
            });
            h.displayName = "FramePickerDesktop";
            var x = i(58526);
            let g = ({
                handleDrawerOpen: e
            }) => (0, s.jsx)(n.o, {
                pillsPickerSlot: (0, s.jsx)(x.A, {}),
                title: "Choose size",
                titleComponent: "h3",
                tooltipSlot: (0, s.jsx)(l.i, {
                    dataTestId: `more-${u.SIZE}`,
                    onClick: e
                })
            });
            var _ = i(89473);
            let C = ({
                handleFinishDrawerOpen: e,
                handleSizeDrawerOpen: t,
                handleFrameDrawerOpen: i,
                variants: a,
                areFramesAvailable: l
            }) => {
                let {
                    hasInitializedCustomizationWizard: n
                } = (0, _.V)((0, o.k)(e => ({
                    hasInitializedCustomizationWizard: e.hasInitializedCustomizationWizard
                }))), d = (0, r.useRef)(null), u = (0, r.useRef)(null);
                return (0, r.useEffect)(() => {
                    d.current ? .style.setProperty("--frame-picker-height", `${u.current?.getBoundingClientRect().height}px`)
                }, []), (0, s.jsxs)("div", {
                    className: (0, m.cn)("hidden mt-6 transition-[margin] duration-300 ease w-full", "lg:flex lg:flex-col lg:gap-y-6", "[@media(max-aspect-ratio:3/4)]:hidden", {
                        "mb-[calc(-1*var(--frame-picker-height,76px)-var(--spacing-6,24px))]": !l,
                        "transition-none": !n
                    }),
                    "data-testid": "desktop-hero-pickers",
                    ref: d,
                    children: [(0, s.jsx)(c, {
                        handleDrawerOpen: e,
                        variants: a
                    }), (0, s.jsx)(g, {
                        handleDrawerOpen: t
                    }), (0, s.jsx)(h, {
                        disableAnimations: !n,
                        handleDrawerOpen: i,
                        hidden: !l,
                        ref: u
                    })]
                })
            }
        },
        58526: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => h
            });
            var a = i(37876),
                s = i(14232),
                r = i(80208),
                o = i(37872),
                l = i(10698),
                n = i(37473),
                d = i(89473),
                u = i(71280),
                c = i(68440),
                p = i(28402),
                m = i(14619);
            let h = () => {
                let {
                    options: e
                } = (() => {
                    let {
                        availableVariants: e,
                        availableSizes: t
                    } = (0, d.V)((0, o.k)(e => ({
                        availableVariants: e.availableVariants,
                        availableSizes: e.availableSizes
                    }))), {
                        countryCode: i
                    } = (0, l.C)();
                    return 0 === e.length ? {
                        options: [{
                            label: void 0
                        }, {
                            label: void 0
                        }, {
                            label: void 0
                        }]
                    } : {
                        options: [n.or.M, n.or.L, n.or.XL].map(e => ({
                            label: e,
                            value: e,
                            ...t.includes(e) ? {
                                description: (0, u.i)(e, i).formattedDescription
                            } : {},
                            testId: `size-input-${e}`,
                            disabled: !t.includes(e)
                        }))
                    }
                })(), {
                    location: t
                } = (0, s.useContext)(c.i), {
                    handleSizeChange: i,
                    size: h
                } = (0, p.m)(t);
                return (0, a.jsx)("div", {
                    className: (0, m.cn)("transition-all duration-300 ease-in-out w-full", "has-data-[testid=segmented-control]:animate-smooth-expand"),
                    children: (0, a.jsx)(r.R, {
                        activeOption: h,
                        capitalize: !1,
                        className: (0, m.cn)("items-center transition-[width] duration-300 ease-in-out", "has-[[data-testid=size-input-XL]:not([data-disabled])]:animate-gentle-bounce"),
                        name: "size",
                        onChange: i,
                        options: e,
                        variant: "fullWidth"
                    })
                })
            }
        },
        58835: e => {
            e.exports = {
                video: "VideoSlide_video__4hR4X",
                loaderWrapper: "VideoSlide_loaderWrapper__QFGPL",
                loaderWrapperHidden: "VideoSlide_loaderWrapperHidden___aDlY"
            }
        },
        59140: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => o
            });
            var a = i(37876),
                s = i(69241),
                r = i(36256);
            let o = ({
                children: e,
                testId: t,
                className: i
            }) => (0, a.jsx)(r.xA, {
                asChild: !0,
                children: (0, a.jsx)("section", {
                    className: (0, s.A)("[&_ol]:list-inside [&_ol]:list-decimal", i),
                    "data-testid": t,
                    children: (0, a.jsx)("div", {
                        className: "col-span-full xl:col-start-3 xl:col-span-8",
                        children: e
                    })
                })
            })
        },
        62085: (e, t, i) => {
            "use strict";
            i.d(t, {
                K: () => s
            });
            var a = i(14e3);
            let s = () => {
                let e = (0, a.useParams)(),
                    t = e.id ? .toString() ? ? null;
                return {
                    hasId: !!t,
                    id: t
                }
            }
        },
        63057: e => {
            e.exports = {
                container: "FiltersThumbnails_container__xsaYY",
                grid: "FiltersThumbnails_grid__5VaWk",
                sliderContainer: "FiltersThumbnails_sliderContainer___L_RX",
                slide: "FiltersThumbnails_slide__ACtBv"
            }
        },
        65633: e => {
            e.exports = {
                thumbnailImagePositionClassName: "CustomDisplateCupboardVisualisation_thumbnailImagePositionClassName__5Nvsj",
                thumbnailArtworkHorizontal: "CustomDisplateCupboardVisualisation_thumbnailArtworkHorizontal__zYv91",
                thumbnailArtworkVertical: "CustomDisplateCupboardVisualisation_thumbnailArtworkVertical__9AljH",
                sizeMVerticalPosition: "CustomDisplateCupboardVisualisation_sizeMVerticalPosition__jFG5b",
                sizeLVerticalPosition: "CustomDisplateCupboardVisualisation_sizeLVerticalPosition__trUnh",
                sizeMHorizontalPosition: "CustomDisplateCupboardVisualisation_sizeMHorizontalPosition__a2GVL",
                sizeLHorizontalPosition: "CustomDisplateCupboardVisualisation_sizeLHorizontalPosition__ZQ0_W",
                artworkBox: "CustomDisplateCupboardVisualisation_artworkBox__XVzKG",
                artworkShadow: "CustomDisplateCupboardVisualisation_artworkShadow__ueGtS",
                vertical: "CustomDisplateCupboardVisualisation_vertical__p1ucK",
                horizontal: "CustomDisplateCupboardVisualisation_horizontal__2ZBZX"
            }
        },
        68267: e => {
            e.exports = {
                wrapper: "CustomDisplateTooltips_wrapper__6dZgX",
                tooltipsMVertical: "CustomDisplateTooltips_tooltipsMVertical__a_CWI",
                tooltipsLVertical: "CustomDisplateTooltips_tooltipsLVertical__58t71",
                tooltipsMHorizontal: "CustomDisplateTooltips_tooltipsMHorizontal__6YtwZ",
                tooltipsLHorizontal: "CustomDisplateTooltips_tooltipsLHorizontal__8A8DQ"
            }
        },
        68385: e => {
            e.exports = {
                thumbnailImagePositionClassName: "CustomDisplateOfficeVisualisation_thumbnailImagePositionClassName__x_Zc5",
                thumbnailArtworkHorizontal: "CustomDisplateOfficeVisualisation_thumbnailArtworkHorizontal__BepCh",
                thumbnailArtworkVertical: "CustomDisplateOfficeVisualisation_thumbnailArtworkVertical__zsYY4",
                sizeMVerticalPosition: "CustomDisplateOfficeVisualisation_sizeMVerticalPosition__ic2_i",
                sizeLVerticalPosition: "CustomDisplateOfficeVisualisation_sizeLVerticalPosition__B_Xp3",
                sizeMHorizontalPosition: "CustomDisplateOfficeVisualisation_sizeMHorizontalPosition__mX9CU",
                sizeLHorizontalPosition: "CustomDisplateOfficeVisualisation_sizeLHorizontalPosition__pbaC3",
                artworkBox: "CustomDisplateOfficeVisualisation_artworkBox___IGSX",
                artworkShadow: "CustomDisplateOfficeVisualisation_artworkShadow__ApSiw",
                vertical: "CustomDisplateOfficeVisualisation_vertical__9Rvp_",
                horizontal: "CustomDisplateOfficeVisualisation_horizontal__NkUq6"
            }
        },
        68440: (e, t, i) => {
            "use strict";
            i.d(t, {
                i: () => a
            });
            let a = (0, i(14232).createContext)({
                location: "pdp"
            })
        },
        69579: e => {
            e.exports = {
                thumbnailOverlay: "CustomDisplatePresentationVideoThumbnail_thumbnailOverlay__Ipnr4",
                playIcon: "CustomDisplatePresentationVideoThumbnail_playIcon__W4x4K"
            }
        },
        71669: (e, t, i) => {
            "use strict";
            i.d(t, {
                T: () => m
            });
            var a = i(37876),
                s = i(14232),
                r = i(69241),
                o = i(37872),
                l = i(30983),
                n = i(30305),
                d = i(89473),
                u = i(36256),
                c = i(58835),
                p = i.n(c);
            let m = ({
                slideType: e,
                src: t,
                poster: i
            }) => {
                let [c, m] = (0, s.useState)(!1), h = (0, s.useRef)(null), x = h.current, {
                    currentSlide: g
                } = (0, d.V)((0, o.k)(e => ({
                    currentSlide: e.currentSlide
                }))), {
                    isDesktop: _
                } = (0, n.Q)();
                return x && c && g === e && (x.play(), _ && (x.controls = !0)), x && g !== e && (x.pause(), x.currentTime = .1), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(l.A, {
                        className: p().video,
                        controls: !1,
                        desktopSize: {
                            width: 2160
                        },
                        loop: !0,
                        mobileSize: {
                            width: 1080
                        },
                        muted: !0,
                        onLoadedMetadata: () => m(!0),
                        playsInline: !0,
                        poster: i,
                        preload: g === e ? "metadata" : "none",
                        ref: h,
                        src: t
                    }), (0, a.jsx)("div", {
                        className: (0, r.A)(p().loaderWrapper, {
                            [p().loaderWrapperHidden]: c
                        }),
                        children: (0, a.jsx)(u.y$, {
                            className: "absolute top-1/2 left-1/2 size-10 -translate-x-1/2 -translate-y-1/2 text-icon-inverse"
                        })
                    })]
                })
            }
        },
        73893: e => {
            e.exports = {
                text: "UnsavedImageInfo_text__j_dDs",
                icon: "UnsavedImageInfo_icon__Wd0BM"
            }
        },
        76311: e => {
            e.exports = {
                container: "FiltersMainPicture_container__xA9Pl",
                image: "FiltersMainPicture_image__Dk5Wf",
                loaded: "FiltersMainPicture_loaded__LxH5I",
                fadeIn: "FiltersMainPicture_fadeIn__LU4_T"
            }
        },
        79265: (e, t, i) => {
            "use strict";
            i.d(t, {
                $: () => g
            });
            var a = i(37876),
                s = i(14232),
                r = i(89099),
                o = i(14619),
                l = i(29633),
                n = i(14078),
                d = i(40636),
                u = i(41037),
                c = i(95729),
                p = i(2661),
                m = i(36256);
            let h = ({
                feedContents: e,
                activeTab: t,
                handleFeedChange: i
            }) => {
                let {
                    pushEvent: s
                } = (0, p.L)(), r = t < e.length ? t : 0;
                return (0, a.jsxs)(a.Fragment, {
                    children: [e.length > 1 ? (0, a.jsx)("div", {
                        className: "flex w-full justify-evenly overflow-x-auto mb-6 md:mb-10",
                        children: (0, a.jsx)(m.Iz, {
                            className: "shrink-0 uppercase",
                            items: e.map(e => ({
                                label: (0, a.jsx)("span", {
                                    className: "capitalize",
                                    "data-testid": e.heading,
                                    children: e.heading
                                }),
                                value: e.heading
                            })),
                            name: "masonry-feed-v2",
                            onChange: a => {
                                let r = e.findIndex(e => e.heading === a);
                                r < 0 || r === t || (i(r), (0, c.q)((0, u.Z)(a)), "following" === e[r].heading && (0, d.lB)(s))
                            },
                            value: e[r].heading
                        })
                    }) : null, e[r].content]
                })
            };
            var x = i(23412);
            let g = ({
                feeds: e,
                metadata: t,
                className: i,
                artworksToDisplay: d = l.T,
                customGridItem: u
            }) => {
                let c = (0, r.useRouter)(),
                    [p, m] = (0, s.useState)(0);
                (0, s.useEffect)(() => {
                    m(0)
                }, [c.asPath]);
                let g = (0, s.useMemo)(() => e.filter(e => e.shouldBeShown).map(e => (0, x.xG)(e, t, c.pathname, void 0, d, u)), [e, t, c.pathname, d, u]);
                return ((0, s.useEffect)(() => {
                    p >= g.length && g.length > 0 && m(0)
                }, [p, g.length]), 0 === e.length || (0, x.nz)(e)) ? (0, a.jsx)(n.F, {
                    className: i
                }) : (0, a.jsx)("div", {
                    className: (0, o.cn)("flex flex-col items-center [&_button:first-letter]:uppercase", i),
                    "data-testid": "masonry-feed-container",
                    children: (0, a.jsx)(h, {
                        activeTab: p,
                        feedContents: g,
                        handleFeedChange: m
                    })
                })
            }
        },
        79967: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => s
            });
            var a = i(14232);
            let s = (e, t) => {
                (0, a.useEffect)(() => {
                    let i = i => {
                        let a = e ? .current;
                        !a || a.contains(i ? .target || null) || t(i)
                    };
                    return document.addEventListener("mousedown", i), document.addEventListener("touchstart", i), () => {
                        document.removeEventListener("mousedown", i), document.removeEventListener("touchstart", i)
                    }
                }, [e, t])
            }
        },
        80001: e => {
            e.exports = {
                titleWrapper: "CustomDisplateBuyBox_titleWrapper__xCVAd",
                titleText: "CustomDisplateBuyBox_titleText__OSrTD",
                description: "CustomDisplateBuyBox_description__9mMTF",
                price: "CustomDisplateBuyBox_price__9_GDk",
                trustpilot: "CustomDisplateBuyBox_trustpilot__DEf_9",
                promoBox: "CustomDisplateBuyBox_promoBox__D9LFu",
                paymentMethods: "CustomDisplateBuyBox_paymentMethods__GxMPR",
                delivery: "CustomDisplateBuyBox_delivery__ziY7A",
                deliveryDesktop: "CustomDisplateBuyBox_deliveryDesktop__JyuvX",
                deliveryMobile: "CustomDisplateBuyBox_deliveryMobile__V0VcC",
                deliveryInAddToCartButton: "CustomDisplateBuyBox_deliveryInAddToCartButton__I2RWe",
                mobileDeliveryInfo: "CustomDisplateBuyBox_mobileDeliveryInfo__jk0tU",
                desktopDeliveryInfo: "CustomDisplateBuyBox_desktopDeliveryInfo__4KdcW",
                headerSection: "CustomDisplateBuyBox_headerSection__Ix4fo",
                hiddenOnDesktop: "CustomDisplateBuyBox_hiddenOnDesktop___Hrg6",
                hiddenOnMobile: "CustomDisplateBuyBox_hiddenOnMobile__Fejvd"
            }
        },
        82323: (e, t, i) => {
            "use strict";
            i.d(t, {
                d: () => k
            });
            var a = i(37876),
                s = i(14232),
                r = i(37872),
                o = i(16434),
                l = i(60741),
                n = i(39313),
                d = i(30305),
                u = i(24322),
                c = i(21984),
                p = i(37473),
                m = i(89473),
                h = i(36256),
                x = i(98420);
            let g = ({
                isOpen: e,
                handleClose: t,
                testid: i = "drawer",
                variants: g
            }) => {
                let {
                    isDesktop: _
                } = (0, d.Q)(), C = (0, s.useRef)(null), {
                    currentVideo: f,
                    setCurrentVideo: w
                } = (0, m.V)((0, r.k)(e => ({
                    currentVideo: e.currentlyPlayingVideo,
                    setCurrentVideo: e.setCurrentlyPlayingVideo
                }))), j = (0, s.useMemo)(() => !!g && (0, x.r)(g), [g]);
                return (0, s.useEffect)(() => {
                    g && !(0, x.r)(g) && w(p.ZU.GLOSS)
                }, [g]), (0, n.P)(C, {
                    delay: 1e3,
                    afterDelayCallback: !0,
                    callback: () => {
                        _ && (0, o.$P)("finish")
                    }
                }), (0, a.jsx)(h._s, {
                    onOpenChange: e => {
                        e || (t(), w(null))
                    },
                    open: e,
                    children: (0, a.jsxs)(h.zj, {
                        "aria-describedby": void 0,
                        "data-testid": i,
                        children: [(0, a.jsxs)(h.BE, {
                            children: [(0, a.jsx)(u.A, {
                                height: c.l.SIZE24,
                                width: c.l.SIZE24
                            }), (0, a.jsx)(h.gk, {
                                children: `${j?"Three":"Two"} different finishes and styles`
                            })]
                        }), (0, a.jsx)(h.ys, {
                            children: (0, a.jsx)("div", {
                                className: "flex flex-col gap-10",
                                ref: C,
                                children: (0, a.jsx)(l.k, {
                                    currentVideo: f,
                                    hasTextra: j,
                                    isOpen: e,
                                    setCurrentVideo: w
                                })
                            })
                        })]
                    })
                })
            };
            var _ = i(30983),
                C = i(10769),
                f = i(14619);
            let w = ({
                isOpen: e,
                handleClose: t,
                testid: i = "drawer"
            }) => {
                let {
                    isDesktop: r
                } = (0, d.Q)(), l = (0, s.useRef)(null), p = (0, s.useRef)(null), [m, x] = (0, s.useState)(!0);
                (0, n.P)(l, {
                    delay: 1e3,
                    afterDelayCallback: !0,
                    callback: () => {
                        r && (0, o.$P)("frame")
                    }
                });
                let g = async () => {
                        x(!1);
                        let {
                            current: e
                        } = p;
                        e && await e.play()
                    },
                    w = (0, C.v9)({
                        assetPath: "/images/pdp/framePopup/video-frame-placeholder@2x.jpg",
                        widths: [376, 752]
                    });
                return (0, a.jsx)(h._s, {
                    onOpenChange: e => {
                        e || (p.current.pause(), x(!0), t())
                    },
                    open: e,
                    children: (0, a.jsxs)(h.zj, {
                        "aria-describedby": void 0,
                        "data-testid": i,
                        children: [(0, a.jsxs)(h.BE, {
                            children: [(0, a.jsx)(u.A, {
                                height: c.l.SIZE24,
                                width: c.l.SIZE24
                            }), (0, a.jsx)(h.gk, {
                                children: "Frames"
                            })]
                        }), (0, a.jsx)(h.ys, {
                            children: (0, a.jsxs)("div", {
                                className: "flex flex-col",
                                ref: l,
                                children: [(0, a.jsxs)("div", {
                                    className: "relative mb-4",
                                    children: [(0, a.jsx)("button", {
                                        className: (0, f.cn)("appearance-none border-0 bg-transparent p-0 relative z-10 cursor-pointer w-full rounded-sm overflow-hidden", !m && "-z-10 opacity-0"),
                                        onClick: g,
                                        type: "button",
                                        children: (0, a.jsx)("img", {
                                            alt: "Displate frames",
                                            loading: "lazy",
                                            sizes: w.sizes,
                                            src: w.widthsSrc[0],
                                            srcSet: w.srcSet,
                                            width: "100%"
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "absolute top-0 left-0 w-full h-full",
                                        children: (0, a.jsx)(_.A, {
                                            controls: !1,
                                            loop: !0,
                                            muted: !0,
                                            ref: p,
                                            responsive: !0,
                                            src: "pages/displate-frames-pdp-short.mp4"
                                        })
                                    })]
                                }), (0, a.jsx)("p", {
                                    className: "text-body-md",
                                    children: "Each frame is 3D printed on metal using a patent pending technology. Frame doesn't enlarge the size of the Displate."
                                })]
                            })
                        })]
                    })
                })
            };
            var j = i(44003),
                v = i(30492),
                I = i(10698),
                D = i(71280),
                S = i(87050);
            let b = ({
                    size: e,
                    orientation: t,
                    artworkUrl: i
                }) => {
                    let s = (0, m.V)((0, r.k)(e => ({
                            frame: e.frame,
                            type: e.type
                        }))),
                        {
                            countryCode: o
                        } = (0, I.C)(),
                        l = (0, D.i)(e, o);
                    return (0, a.jsxs)("div", {
                        className: "relative h-[190px] overflow-hidden md:h-[270px]",
                        "data-testid": "drawer-size-picker-box",
                        children: [(0, a.jsxs)("div", {
                            className: "mb-4 flex w-full items-baseline",
                            children: [(0, a.jsx)("h4", {
                                className: "mr-2 text-heading-subtitle",
                                children: e
                            }), (0, a.jsx)("p", {
                                className: "truncate text-body-sm",
                                children: l.formattedDescription
                            })]
                        }), (0, a.jsx)("div", {
                            className: "h-full rounded-sm bg-neutral-50",
                            children: (0, a.jsx)(j.j, {
                                className: "absolute bottom-[-1.5rem] left-1/2 w-[145px] -translate-x-1/2 md:-bottom-7 md:w-[57%]",
                                frameImage: (0, v.n9)(s.frame, t),
                                frameWidth: (0, v.qe)(e, t),
                                glossImage: s.type === p.ZU.GLOSS ? (0, v.Mb)(t) : void 0,
                                maskImageSize: v.Lm,
                                maskImageSrcSet: (0, C.C3)((0, v.cP)(e, t)),
                                sourceImageSize: t === S.JH.HORIZONTAL ? (0, v.uZ)(e) : (0, v.AZ)(e),
                                sourceImageSrc: `${i}`
                            })
                        })]
                    })
                },
                y = ({
                    variants: e,
                    artworkOrientation: t,
                    artworkUrl: i
                }) => {
                    let {
                        isDesktop: r
                    } = (0, d.Q)(), l = (0, s.useRef)(null);
                    return (0, n.P)(l, {
                        delay: 1e3,
                        afterDelayCallback: !0,
                        callback: () => {
                            r && (0, o.$P)("size")
                        }
                    }), (0, a.jsx)("div", {
                        ref: l,
                        children: (0, a.jsxs)("div", {
                            className: "grid gap-4 bg-neutral-0 md:gap-14",
                            children: [e ? .M ? (0, a.jsx)(b, {
                                artworkUrl: i,
                                orientation: t,
                                size: p.or.M
                            }) : null, e ? .L ? (0, a.jsx)(b, {
                                artworkUrl: i,
                                orientation: t,
                                size: p.or.L
                            }) : null, e ? .XL ? (0, a.jsx)(b, {
                                artworkUrl: i,
                                orientation: t,
                                size: p.or.XL
                            }) : null]
                        })
                    })
                },
                L = ({
                    isOpen: e,
                    handleClose: t,
                    testid: i = "drawer",
                    variants: s,
                    artworkOrientation: r,
                    artworkUrl: o
                }) => (0, a.jsx)(h._s, {
                    onOpenChange: e => {
                        e || t()
                    },
                    open: e,
                    children: (0, a.jsxs)(h.zj, {
                        "aria-describedby": void 0,
                        "data-testid": i,
                        children: [(0, a.jsxs)(h.BE, {
                            children: [(0, a.jsx)(u.A, {
                                height: c.l.SIZE24,
                                width: c.l.SIZE24
                            }), (0, a.jsx)(h.gk, {
                                children: "Sizes"
                            })]
                        }), (0, a.jsx)(h.ys, {
                            children: (0, a.jsx)(y, {
                                artworkOrientation: r,
                                artworkUrl: o,
                                variants: s
                            })
                        })]
                    })
                }),
                k = ({
                    handleFinishDrawerClose: e,
                    isFinishDrawerOpen: t,
                    handleSizeDrawerClose: i,
                    isSizeDrawerOpen: s,
                    handleFrameDrawerClose: r,
                    isFrameDrawerOpen: o,
                    variants: l,
                    artworkOrientation: n,
                    artworkUrl: d
                }) => (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(g, {
                        handleClose: e,
                        isOpen: t,
                        variants: l
                    }), (0, a.jsx)(L, {
                        artworkOrientation: n,
                        artworkUrl: d,
                        handleClose: i,
                        isOpen: s,
                        variants: l
                    }), (0, a.jsx)(w, {
                        handleClose: r,
                        isOpen: o
                    })]
                })
        },
        84560: (e, t, i) => {
            "use strict";
            i.d(t, {
                o: () => l
            });
            var a = i(37876),
                s = i(10769),
                r = i(87050);
            let o = {
                    [r.p1.NONE]: null,
                    [r.p1.NATURAL]: "natural.png",
                    [r.p1.GRAPHITE]: "graphite.png",
                    [r.p1.WHITE]: "white.png",
                    [r.p1.BLACK]: "black.png"
                },
                l = (e, t) => {
                    let i, r = null == (i = o[e]) ? null : (0, s.v9)({
                        assetPath: `/images/pdp/HeroOptions/frames/${i}`
                    }).src;
                    return null == r ? null : (0, a.jsx)("img", {
                        alt: t,
                        loading: "lazy",
                        src: r
                    })
                }
        },
        88368: (e, t, i) => {
            "use strict";
            i.d(t, {
                n: () => r
            });
            var a = i(14232),
                s = i(20019);
            let r = () => {
                let e = (0, a.useContext)(s.M);
                if (!e) throw Error("useVerticalizationContext has to be used within <VerticalizationContext.Provider>");
                return e
            }
        },
        91075: e => {
            e.exports = {
                thumbnailImagePositionClassName: "CustomDisplateDresserVisualization_thumbnailImagePositionClassName__t9Ibc",
                thumbnailArtworkHorizontal: "CustomDisplateDresserVisualization_thumbnailArtworkHorizontal___8fo_",
                thumbnailArtworkVertical: "CustomDisplateDresserVisualization_thumbnailArtworkVertical__ky5ig",
                artworkBox: "CustomDisplateDresserVisualization_artworkBox___lvCH",
                artworkShadow: "CustomDisplateDresserVisualization_artworkShadow__WJiIK",
                vertical: "CustomDisplateDresserVisualization_vertical__Jifis",
                horizontal: "CustomDisplateDresserVisualization_horizontal__oHhSd",
                sizeMVerticalPosition: "CustomDisplateDresserVisualization_sizeMVerticalPosition__8XPvG",
                sizeLVerticalPosition: "CustomDisplateDresserVisualization_sizeLVerticalPosition__jgUmz",
                sizeMHorizontalPosition: "CustomDisplateDresserVisualization_sizeMHorizontalPosition__UUMDE",
                sizeLHorizontalPosition: "CustomDisplateDresserVisualization_sizeLHorizontalPosition__Q36JZ"
            }
        },
        93568: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => s
            });
            var a = i(14232);
            let s = a.forwardRef(function({
                title: e,
                titleId: t,
                ...i
            }, s) {
                return a.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    "data-slot": "icon",
                    ref: s,
                    "aria-labelledby": t
                }, i), e ? a.createElement("title", {
                    id: t
                }, e) : null, a.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6"
                }))
            })
        },
        93811: (e, t, i) => {
            "use strict";
            i.d(t, {
                _: () => r
            });
            var a = i(30068),
                s = i(2661);
            let r = e => {
                (0, a.S)(e), (0, s.e)(e)
            }
        },
        94282: (e, t, i) => {
            "use strict";
            i.d(t, {
                K: () => w
            });
            var a = i(37876),
                s = i(14232),
                r = i(80208),
                o = i(31464),
                l = i(13415),
                n = i(8325);
            let d = ({
                pickerType: e
            }) => (0, a.jsxs)("div", {
                className: "mt-3 flex items-center text-heading-subtitle-eyebrow text-neutral-600",
                children: [(0, a.jsx)(n.A, {
                    className: "mb-0.5 mr-1 shrink-0 text-text-link",
                    height: 16,
                    width: 16
                }), e, " is unavailable for the chosen size"]
            });
            var u = i(37473);
            let c = ({
                handleOpenDrawer: e,
                productSize: t,
                variants: i
            }) => (0, a.jsxs)("div", {
                className: "flex w-full flex-col items-center",
                children: [(0, a.jsx)("div", {
                    className: "mt-3 flex justify-center w-full",
                    children: (0, a.jsx)("div", {
                        className: "flex justify-center w-full",
                        children: (0, a.jsx)(l.i, {
                            variants: i
                        })
                    })
                }), t === u.or.XL ? (0, a.jsx)(d, {
                    pickerType: "Finish"
                }) : null, (0, a.jsxs)("div", {
                    className: "mt-2.5 flex items-center justify-center gap-1 text-heading-subtitle-eyebrow text-neutral-600",
                    children: ["Need help deciding?", (0, a.jsx)(o.q, {
                        onClick: e,
                        children: "See the difference"
                    })]
                })]
            });
            var p = i(37872),
                m = i(30229),
                h = i(89473),
                x = i(36256);
            let g = ({
                handleDrawerOpen: e
            }) => {
                let t = (0, h.V)((0, p.k)(e => ({
                    size: e.size
                })));
                return (0, a.jsxs)("div", {
                    className: "flex w-full flex-col",
                    children: [(0, a.jsx)("div", {
                        className: "relative mt-3 flex justify-center lg:mt-0 lg:justify-start",
                        children: (0, a.jsx)(m.m, {})
                    }), t.size === u.or.XL ? (0, a.jsx)(d, {
                        pickerType: "Frame"
                    }) : null, (0, a.jsxs)("div", {
                        className: "mt-2.5 flex items-center justify-center gap-1 text-heading-subtitle-eyebrow text-neutral-600",
                        children: ["Each frame is 3D printed on metal.", (0, a.jsx)(x.$n, {
                            onClick: e,
                            size: "sm",
                            variant: "textRawStyle",
                            children: "Learn more"
                        })]
                    })]
                })
            };
            var _ = i(58526);
            let C = ({
                handleDrawerOpen: e
            }) => (0, a.jsxs)("div", {
                className: "flex w-full flex-col items-center",
                children: [(0, a.jsx)("div", {
                    className: "mt-3 flex justify-center w-full",
                    children: (0, a.jsx)("div", {
                        className: "flex justify-center w-full",
                        children: (0, a.jsx)(_.A, {})
                    })
                }), (0, a.jsxs)("div", {
                    className: "mt-2.5 flex items-center justify-center gap-1 text-heading-subtitle-eyebrow text-neutral-600",
                    children: ["How big is it?", (0, a.jsx)(o.q, {
                        onClick: e,
                        children: "See the sizes"
                    })]
                })]
            });
            var f = i(14619);
            let w = ({
                handleFinishDrawerOpen: e,
                handleSizeDrawerOpen: t,
                handleFrameDrawerOpen: i,
                areFramesAvailable: o,
                variants: l
            }) => {
                let [n, d] = (0, s.useState)(0), p = [{
                    label: "Product type",
                    testId: "hero-picker-finish"
                }, {
                    label: "Size",
                    testId: "hero-picker-size"
                }];
                return o && p.push({
                    label: "Frames",
                    testId: "hero-picker-frames"
                }), (0, a.jsxs)("div", {
                    className: (0, f.cn)("mt-4 flex w-full flex-col items-center", "lg:hidden [@media(max-aspect-ratio:3/4)]:flex"),
                    "data-testid": "mobile-hero-pickers",
                    children: [(0, a.jsx)(r.R, {
                        activeOption: n,
                        name: "hero-option-picker",
                        onChange: d,
                        options: p,
                        variant: "subtle"
                    }), 0 === n ? (0, a.jsx)(c, {
                        handleOpenDrawer: e,
                        productSize: u.or.M,
                        variants: l
                    }) : null, 1 === n ? (0, a.jsx)(C, {
                        handleDrawerOpen: t
                    }) : null, 2 === n ? (0, a.jsx)(g, {
                        handleDrawerOpen: i
                    }) : null]
                })
            }
        },
        96491: e => {
            e.exports = {
                mountingSystem: "CustomDisplateMountingSystem_mountingSystem__wBDTm",
                bottomMountingSystem: "CustomDisplateMountingSystem_bottomMountingSystem__5PBc0",
                mountingSystemLHorizontal: "CustomDisplateMountingSystem_mountingSystemLHorizontal__byM5p",
                magnet: "CustomDisplateMountingSystem_magnet__c2oCT",
                bottomMagnet: "CustomDisplateMountingSystem_bottomMagnet__zKVPn"
            }
        },
        98420: (e, t, i) => {
            "use strict";
            i.d(t, {
                r: () => a
            });
            let a = e => {
                let t = !1;
                for (let i = 0; i < Object.values(e).length; i++)
                    if (Object.values(e)[i].textra) {
                        t = !0;
                        break
                    }
                return t
            }
        },
        99609: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => s
            });
            var a = i(37876);
            let s = e => (0, a.jsx)("svg", {
                width: "1em",
                height: "1em",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: (0, a.jsx)("g", {
                    id: "share",
                    children: (0, a.jsx)("path", {
                        id: "icon (Stroke)",
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M11.4697 3.46967C11.7626 3.17678 12.2374 3.17678 12.5303 3.46967L16.0303 6.96967C16.3232 7.26256 16.3232 7.73744 16.0303 8.03033C15.7374 8.32322 15.2626 8.32322 14.9697 8.03033L12.75 5.81066V14.5C12.75 14.9142 12.4142 15.25 12 15.25C11.5858 15.25 11.25 14.9142 11.25 14.5V5.81066L9.03033 8.03033C8.73744 8.32322 8.26256 8.32322 7.96967 8.03033C7.67678 7.73744 7.67678 7.26256 7.96967 6.96967L11.4697 3.46967ZM4.25 11.5C4.25 11.0858 4.58579 10.75 5 10.75H7C7.41421 10.75 7.75 11.0858 7.75 11.5C7.75 11.9142 7.41421 12.25 7 12.25H5.75V18.75H18.25V12.25H17C16.5858 12.25 16.25 11.9142 16.25 11.5C16.25 11.0858 16.5858 10.75 17 10.75H19C19.4142 10.75 19.75 11.0858 19.75 11.5V19.5C19.75 19.9142 19.4142 20.25 19 20.25H5C4.58579 20.25 4.25 19.9142 4.25 19.5V11.5Z",
                        fill: "#005eff"
                    })
                })
            })
        }
    }
]);
//#