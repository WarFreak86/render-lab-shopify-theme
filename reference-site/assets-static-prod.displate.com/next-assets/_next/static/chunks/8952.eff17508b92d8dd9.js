"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8952], {
        8952: (e, l, s) => {
            s.r(l), s.d(l, {
                SeoLinkingBox: () => o
            });
            var n = s(37876),
                a = s(14232),
                t = s(27555),
                r = s(56926),
                c = s(31372),
                i = s(36256),
                d = s(14619);
            let o = ({
                data: e
            }) => {
                let [l, s] = (0, a.useState)(!1);
                return (0, n.jsx)(i.mc, {
                    asChild: !0,
                    className: "overflow-hidden rounded-md bg-background-light text-text-primary",
                    "data-testid": "SeoLinkingBox",
                    children: (0, n.jsx)(i.xA, {
                        asChild: !0,
                        className: "gap-y-6 md:gap-y-8",
                        children: (0, n.jsxs)("section", {
                            children: [(0, n.jsx)("h2", {
                                className: "col-span-full mt-8 text-display-xs font-display uppercase md:mt-12 md:text-center",
                                children: e.title
                            }), e.columns.map((e, s) => {
                                let r = (0, d.cn)(!l && s > 0 ? "max-md:hidden" : null, !l && s > 1 ? "md:hidden" : null);
                                return (0, n.jsxs)(a.Fragment, {
                                    children: [(0, n.jsx)("h3", {
                                        className: (0, d.cn)("col-span-full text-heading-subtitle", r),
                                        children: e.title
                                    }), (0, n.jsx)("ul", {
                                        className: (0, d.cn)("col-span-full grid grid-cols-subgrid gap-y-4 text-body-sm", r),
                                        children: e.links.map(e => (0, n.jsx)("li", {
                                            className: "col-span-2",
                                            children: (0, n.jsx)(t.A, {
                                                className: "block truncate no-underline hover:underline",
                                                routeInfo: (0, c.j)(e.url).routeInfo,
                                                children: e.label
                                            })
                                        }, e.label))
                                    })]
                                }, e.title)
                            }), (0, n.jsx)(i.$n, {
                                className: "col-span-full mb-8 justify-self-center md:mb-6",
                                onClick: () => s(!l),
                                rightIcon: (0, n.jsx)(r.A, {
                                    className: (0, d.cn)("transition-transform", l ? "rotate-180" : null),
                                    color: "currentColor"
                                }),
                                variant: "secondaryDarkOutline",
                                children: l ? "Show less" : "Show more"
                            })]
                        })
                    })
                })
            }
        }
    }
]);
//#