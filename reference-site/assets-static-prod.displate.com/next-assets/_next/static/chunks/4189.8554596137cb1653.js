(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4189], {
        197: () => {},
        19977: () => {},
        21866: () => {},
        49746: () => {},
        95687: (e, s, l) => {
            "use strict";
            l.r(s), l.d(s, {
                SeoDescription: () => o
            });
            var r = l(37876),
                i = l(14232),
                n = l(67376),
                t = l.n(n),
                a = l(56926),
                d = l(36256),
                c = l(14619);
            let o = ({
                sections: e,
                className: s,
                dataTestId: l = "seo-description",
                expandableOnMobile: n = !1,
                ref: o,
                ...m
            }) => {
                let [p, x] = (0, i.useState)(!1), h = n && e.length > 1;
                return (0, r.jsx)(d.mc, {
                    asChild: !0,
                    children: (0, r.jsx)("section", {
                        className: s,
                        "data-testid": l,
                        ref: o,
                        ...m,
                        children: (0, r.jsxs)("div", {
                            className: "flex w-full flex-col gap-5 overflow-hidden wrap-break-word rounded-md bg-background-medium p-6 text-text-primary md:px-20 md:py-12 md:pl-12",
                            children: [e.map((e, s) => {
                                var l;
                                let i;
                                return (0, r.jsxs)("div", {
                                    className: (0, c.cn)("flex flex-col gap-4", h && !p && s > 0 ? "max-md:hidden" : null),
                                    children: [(0, r.jsx)("h3", {
                                        className: "text-display-xs font-display uppercase",
                                        children: e.title
                                    }), (l = h && !p && 0 === s ? "max-md:line-clamp-12" : void 0, i = (0, c.cn)("text-body-md", l), e.renderDescriptionAsHtml && "string" == typeof e.description ? (0, r.jsx)("div", {
                                        className: i,
                                        dangerouslySetInnerHTML: {
                                            __html: t()(e.description)
                                        }
                                    }) : "string" == typeof e.description ? (0, r.jsx)("p", {
                                        className: i,
                                        children: e.description
                                    }) : (0, r.jsx)("div", {
                                        className: i,
                                        children: e.description
                                    }))]
                                }, e.title)
                            }), h ? (0, r.jsx)(d.$n, {
                                className: "self-center md:hidden",
                                onClick: () => x(e => !e),
                                rightIcon: (0, r.jsx)(a.A, {
                                    className: (0, c.cn)("transition-transform", p ? "rotate-180" : null),
                                    color: "currentColor"
                                }),
                                variant: "secondaryDarkOutline",
                                children: p ? "Show less" : "Show more"
                            }) : null]
                        })
                    })
                })
            };
            o.displayName = "SeoDescription"
        }
    }
]);
//#