(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7084], {
        4615: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                __N_SSP: () => X,
                default: () => Z
            });
            var n = a(37876),
                i = a(15657),
                o = a(93092),
                s = a(77518),
                r = a(14232),
                l = a(16373),
                c = a(74773),
                d = a(54111),
                h = a(75673),
                x = a.n(h);
            let u = ({
                    heading: e,
                    children: t,
                    testId: a
                }) => (0, n.jsx)("section", {
                    className: x().container,
                    "data-testid": a,
                    children: (0, n.jsxs)("div", {
                        className: x().infoContainer,
                        children: [(0, n.jsx)("h2", {
                            className: x().heading,
                            children: e
                        }), (0, n.jsx)("div", {
                            className: x().infoText,
                            children: t
                        })]
                    })
                }),
                m = () => (0, n.jsxs)(u, {
                    heading: "B2B Orders",
                    testId: "about-contact-b2b-orders",
                    children: [(0, n.jsx)("p", {
                        children: "Is your company considering ordering a large quantity of Displates?"
                    }), (0, n.jsxs)("p", {
                        children: ["Write to us at ", (0, n.jsx)(c.$, {
                            routeInfoFn: d.ji
                        }), " and tell us about the amazing project we can help you with."]
                    })]
                });
            var p = a(23748),
                j = a(27888),
                _ = a(27555),
                f = a(53499),
                g = a(10769),
                B = a(36256),
                N = a(69241),
                T = a(86752),
                C = a(73357),
                S = a.n(C);
            let b = ({
                    tile: e
                }) => {
                    let {
                        order: t,
                        title: a,
                        content: i,
                        button: o
                    } = e;
                    return (0, n.jsxs)("div", {
                        className: S().container,
                        children: [(0, n.jsxs)("div", {
                            className: S().infoWrapper,
                            children: [(0, n.jsxs)("h3", {
                                className: S().tileTitle,
                                children: [(0, n.jsx)("span", {
                                    children: t || (0, n.jsx)("br", {})
                                }), a]
                            }), (0, n.jsx)("div", {
                                children: i.text
                            }), i.checklist && (0, n.jsx)(T.M, {
                                items: i.checklist
                            })]
                        }), o && (0, n.jsx)(B.$n, {
                            className: (0, N.A)("k2botsStartButton", S().button),
                            onClick: () => window.startChat(o.action),
                            variant: "primary",
                            children: o.text
                        })]
                    })
                },
                y = [{
                    order: "01.",
                    title: "Order status",
                    content: {
                        text: (0, n.jsx)(n.Fragment, {
                            children: (0, n.jsx)("p", {
                                className: S().titleText,
                                children: (0, n.jsx)("strong", {
                                    children: "Before you initiate the chat, make sure to prepare:"
                                })
                            })
                        }),
                        checklist: ["Your order number", "The email address used to place your order"]
                    },
                    button: {
                        text: "Check order status",
                        action: "FAQ_SHIPPING_STATUS_Check-order-status_BUTTON"
                    }
                }, {
                    order: "02.",
                    title: "Order confirmation",
                    content: {
                        text: (0, n.jsx)(n.Fragment, {
                            children: (0, n.jsx)("p", {
                                className: S().titleText,
                                children: (0, n.jsx)("strong", {
                                    children: "Before you initiate the chat, make sure to prepare:"
                                })
                            })
                        }),
                        checklist: ["The email address used to place your order"]
                    },
                    button: {
                        text: "Get order confirmation",
                        action: "FAQ_ORDER_DOCUMENTS_Did-not-receive-order-confirmation_BUTTON"
                    }
                }, {
                    order: "03.",
                    title: "Order cancellation",
                    content: {
                        text: (0, n.jsx)(n.Fragment, {
                            children: (0, n.jsx)("p", {
                                className: S().titleText,
                                children: (0, n.jsx)("strong", {
                                    children: "Before you initiate the chat, make sure to prepare:"
                                })
                            })
                        }),
                        checklist: ["Your order number", "The email address used to place your order", "The total order value, which you can find in your confirmation email"]
                    },
                    button: {
                        text: "Cancel order",
                        action: "FAQ_ORDER_CHANGES_How-to-cancel-order_BUTTON"
                    }
                }, {
                    order: "04.",
                    title: "Shipping data change",
                    content: {
                        text: (0, n.jsx)(n.Fragment, {
                            children: (0, n.jsx)("p", {
                                className: S().titleText,
                                children: (0, n.jsx)("strong", {
                                    children: "Before you initiate the chat, make sure to prepare:"
                                })
                            })
                        }),
                        checklist: ["Your order number", "The email address used to place your order", "The total order value, which you can find in your confirmation email"]
                    },
                    button: {
                        text: "Change shipping data",
                        action: "FAQ_SHIPPING_CHANGES_Change-of-shipping-address_BUTTON"
                    }
                }, {
                    order: "05.",
                    title: "Invoice request",
                    content: {
                        text: (0, n.jsx)(n.Fragment, {
                            children: (0, n.jsx)("p", {
                                className: S().titleText,
                                children: (0, n.jsx)("strong", {
                                    children: "Before you initiate the chat, make sure to prepare:"
                                })
                            })
                        }),
                        checklist: ["Your order number", "The email address used to place your order"]
                    },
                    button: {
                        text: "Invoice request",
                        action: "FAQ_ORDER_DOCUMENTS_Did-not-receive-invoice_BUTTON"
                    }
                }, {
                    title: "Other",
                    content: {
                        text: (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsxs)("p", {
                                className: S().titleText,
                                children: ["If you have any other inquiry, please click the ", (0, n.jsx)("strong", {
                                    children: "Start a chat button"
                                }), " and ask me anything."]
                            }), (0, n.jsx)("p", {
                                className: S().titleText,
                                children: "I will be happy to help!"
                            })]
                        })
                    },
                    button: {
                        text: "Other",
                        action: "WELCOME"
                    }
                }];
            var v = a(39432),
                k = a(48747),
                w = a.n(k);
            a(32283), a(96637);
            let H = () => {
                let e = (0, g.v9)({
                        assetPath: "/images/about-contact/contact_chatbot@2x.png",
                        widths: [582]
                    }),
                    t = (0, g.v9)({
                        assetPath: "/images/about-contact/contact_chatbot_mobile@2x.png",
                        widths: [440, 885]
                    });
                return (0, n.jsx)("section", {
                    className: w().chatBotSection,
                    "data-testid": "about-contact-chatbot",
                    id: "contact-chatbot",
                    children: (0, n.jsxs)("div", {
                        className: w().container,
                        children: [(0, n.jsxs)("div", {
                            className: w().chatBotHeading,
                            children: [(0, n.jsxs)("div", {
                                className: w().chatBotHeadingTextContainer,
                                children: [(0, n.jsxs)("h2", {
                                    className: w().chatBotHeadingTitle,
                                    children: [(0, n.jsx)("span", {
                                        children: "Still got questions?"
                                    }), (0, n.jsx)("br", {}), "Chatbot to the rescue!"]
                                }), (0, n.jsx)("p", {
                                    className: w().chatBotHeadingText,
                                    children: "Our adorable Chatbot will be more than happy to answer all your enquiries within seconds! But please don't give him any snacks, he had too many already."
                                }), (0, n.jsx)("p", {
                                    className: w().chatBotHeaderAdditionalText,
                                    children: "To make conversations more effective, please gather all necessary information before talking to the Chatbot."
                                }), (0, n.jsxs)("p", {
                                    className: w().chatBotHeaderConsentText,
                                    children: ["By chatting, you consent to the chat information being used according to our", " ", (0, n.jsx)(B.N_, {
                                        asChild: !0,
                                        children: (0, n.jsx)(_.A, {
                                            routeInfo: (0, v.Z)(),
                                            children: "Privacy Policy"
                                        })
                                    }), "."]
                                })]
                            }), (0, n.jsxs)("picture", {
                                children: [(0, n.jsx)("source", {
                                    media: `(max-width: ${f.Y}px)`,
                                    sizes: t.sizes,
                                    srcSet: t.srcSet
                                }), (0, n.jsx)("source", {
                                    sizes: e.sizes,
                                    srcSet: e.srcSet
                                }), (0, n.jsx)("img", {
                                    alt: "contact us chatbot",
                                    className: w().chatBotHeadingImage,
                                    src: e.widthsSrc[0]
                                })]
                            })]
                        }), (0, n.jsx)("div", {
                            className: w().tilesMobileContainer,
                            children: (0, n.jsx)(j.RC, {
                                className: w().tilesSlider,
                                modules: [p.dK],
                                pagination: {
                                    clickable: !0,
                                    bulletClass: w().paginationBullet,
                                    bulletActiveClass: w().paginationBulletActive
                                },
                                slidesPerView: 1.1,
                                spaceBetween: 16,
                                children: y ? .map(e => (0, n.jsx)(j.qr, {
                                    children: (0, n.jsx)(b, {
                                        tile: e
                                    }, e.title)
                                }, e.title))
                            })
                        }), (0, n.jsx)("div", {
                            className: w().tilesDesktopContainer,
                            children: y.map(e => (0, n.jsx)(b, {
                                tile: e
                            }, e.title))
                        })]
                    })
                })
            };
            var I = a(22093),
                A = a.n(I);
            let F = () => (0, n.jsx)("section", {
                    className: A().container,
                    "data-testid": "about-contact-returns",
                    children: (0, n.jsxs)("div", {
                        className: A().infoBoxesContainer,
                        children: [(0, n.jsxs)("div", {
                            className: A().infoBoxSplitContainer,
                            children: [(0, n.jsxs)("div", {
                                className: A().infoBoxSplitContainerItem,
                                children: [(0, n.jsx)("h2", {
                                    className: A().infoBoxTitle,
                                    children: "Displate returns"
                                }), (0, n.jsx)("p", {
                                    className: (0, N.A)(A().infoBoxText, A().textGap),
                                    children: "To make the process easier, please write down your full shipping details on the package as per your order and put a note with your order number inside it. Please send your Displates to the address below:"
                                }), (0, n.jsx)("p", {
                                    className: A().infoBoxSubtitle,
                                    children: "Address for returns"
                                }), (0, n.jsx)("p", {
                                    className: A().infoBoxText,
                                    children: "GWD Concept Sp z o.o."
                                }), (0, n.jsx)("p", {
                                    className: A().infoBoxText,
                                    children: "Okolna 45, hall C"
                                }), (0, n.jsx)("p", {
                                    className: A().infoBoxText,
                                    children: "05-270 Marki"
                                }), (0, n.jsx)("p", {
                                    className: A().infoBoxText,
                                    children: "Poland"
                                })]
                            }), (0, n.jsxs)("div", {
                                className: A().infoBoxSplitContainerItem,
                                children: [(0, n.jsx)("h2", {
                                    className: A().infoBoxTitle,
                                    children: "Customer Service"
                                }), (0, n.jsxs)("p", {
                                    className: (0, N.A)(A().infoBoxText, A().textGap),
                                    children: ["Do you want to discuss something on the phone? Our Customer Service Team will be happy to call you back. Just call us at", " ", (0, n.jsx)(_.A, {
                                        className: A().phoneLink,
                                        routeInfo: (0, d.YR)(),
                                        children: "+1 (417) 497-2372"
                                    }), ", leave your details (full name, email, order no., if you have one) and message. We'll get back to you during our working hours, i.e. from 8 am till 4 pm CEST, Monday - Friday."]
                                })]
                            })]
                        }), (0, n.jsxs)("div", {
                            children: [(0, n.jsx)("h2", {
                                className: A().infoBoxTitle,
                                children: "Legal information"
                            }), (0, n.jsx)("p", {
                                className: A().infoBoxText,
                                children: "Service Provider: GWD CONCEPT sp. z o.o. (Displate)"
                            }), (0, n.jsx)("p", {
                                className: A().infoBoxText,
                                children: "Registered office: Al. Jerozolimskie 123 a, 02-017 Warsaw, Poland Registered in the District Court in Warsaw,"
                            }), (0, n.jsx)("p", {
                                className: A().infoBoxText,
                                children: "Commercial Division of the National Court Register under KRS No. 0000451277."
                            }), (0, n.jsx)("p", {
                                className: A().infoBoxText,
                                children: "Tax Identification No. PL9512364589."
                            }), (0, n.jsx)("p", {
                                className: (0, N.A)(A().infoBoxText, A().textGap),
                                children: "BDO No. 000130019."
                            }), (0, n.jsx)("p", {
                                className: A().infoBoxSubtitle,
                                children: "Responsible for content according to \xa7 5 TMG:"
                            }), (0, n.jsx)("p", {
                                className: A().infoBoxText,
                                children: "Nicholas Holdcraft, President of the Management Board,"
                            }), (0, n.jsx)("p", {
                                className: A().infoBoxText,
                                children: "Marcin Karkocha, Member of the Management Board,"
                            }), (0, n.jsx)("p", {
                                className: A().infoBoxText,
                                children: "Nicola Paganelli, Member of the Management Board,"
                            }), (0, n.jsx)("p", {
                                className: A().infoBoxText,
                                children: "Mikołaj Chruszczewski, Member of the Management Board."
                            })]
                        }), (0, n.jsxs)("div", {
                            children: [(0, n.jsx)("h2", {
                                className: A().infoBoxTitle,
                                children: "US affiliate company data:"
                            }), (0, n.jsx)("p", {
                                className: A().infoBoxText,
                                children: "Name: Displate Corporation,"
                            }), (0, n.jsx)("p", {
                                className: A().infoBoxText,
                                children: "Organized and existing under the laws of Delaware"
                            }), (0, n.jsx)("p", {
                                className: A().infoBoxText,
                                children: "Address: 109 W Denny Way Suite 312, Seattle WA 98119, United States"
                            }), (0, n.jsx)("p", {
                                className: A().infoBoxText,
                                children: "EIN: 83-1665537"
                            }), (0, n.jsx)("br", {}), (0, n.jsxs)("p", {
                                className: A().infoBoxText,
                                children: ["E-mail: ", (0, n.jsx)(c.$, {
                                    routeInfoFn: d.ih
                                })]
                            }), (0, n.jsx)("br", {}), (0, n.jsx)("p", {
                                className: A().infoBoxText,
                                children: "Displate Corp. Board of Directors:"
                            }), (0, n.jsx)("p", {
                                className: A().infoBoxText,
                                children: "Nicholas Holdcraft, Chairman of the Board and CEO,"
                            }), (0, n.jsx)("p", {
                                className: A().infoBoxText,
                                children: "Justin Vincent, President and Secretary."
                            })]
                        })]
                    })
                }),
                D = () => (0, n.jsxs)(u, {
                    heading: "Contact us via email",
                    testId: "about-contact-contact-us",
                    children: [(0, n.jsx)("p", {
                        children: "Don’t hesitate to reach out! Our Client Experience Team is standing by to help you from 8 am till 4 pm CEST, Monday - Friday."
                    }), (0, n.jsxs)("p", {
                        children: [(0, n.jsx)(B.N_, {
                            asChild: !0,
                            children: (0, n.jsx)(_.A, {
                                routeInfo: (0, d.Qq)(),
                                children: "Write us an e-mail"
                            })
                        }), " ", "and one of our support superheroes will get back to you as soon as possible."]
                    })]
                });
            var O = a(13539),
                E = a(59140),
                M = a(82378),
                P = a(22537),
                R = a(33057),
                q = a(93293),
                W = a.n(q);
            let z = [{
                title: "How do I remove the magnet from my wall?",
                content: (0, P.f)
                `${"text"}` ({
                    text: (0, n.jsx)("p", {
                        children: "To remove the magnet from the wall you just need to grab a corner of the protective leaf and pull slowly. Simple as that \uD83D\uDE0A"
                    })
                })
            }, {
                title: "What countries do you ship to?",
                content: (0, P.f)
                `${"text"}` ({
                    text: (0, n.jsx)("p", {
                        children: "We ship to Australia, Austria, Belgium, Canada, Chile, Croatia, Czech Republic, Denmark, Estonia, Faroe Islands, Finland, France, Germany, Greece, Greenland, Guernsey, Hong Kong, Iceland, Ireland, Israel, Italy, Japan, Jersey, Lithuania, Luxembourg, Malaysia, Monaco, Netherlands, New Zealand, Norway, Philippines, Poland, Portugal, Reunion, Saint Barthelemy, Saint Martin (French part), Saudi Arabia, Singapore, Sint Maarten (Dutch part), Slovakia, Slovenia, South Africa, South Korea, Spain, Sweden, Switzerland, Taiwan, Thailand, United Arab Emirates, United Kingdom, United States, Venezuela."
                    })
                })
            }, {
                title: "Is it possible to purchase additional magnets?",
                content: (0, P.f)
                `${"text"}` ({
                    text: (0, n.jsxs)("p", {
                        children: ["You can buy additional magnets on our website - either in packs of 3 or 9. To purchase extra magnets please go", " ", (0, n.jsx)(B.N_, {
                            asChild: !0,
                            children: (0, n.jsx)(_.A, {
                                routeInfo: (0, M.ZW)({
                                    path: "/about-mounting#magnets-purchase",
                                    target: "external"
                                }),
                                children: "here"
                            })
                        }), ". As for 3D Magnet, please go", " ", (0, n.jsx)(B.N_, {
                            asChild: !0,
                            children: (0, n.jsx)(_.A, {
                                routeInfo: (0, R.h)(),
                                children: "here"
                            })
                        })]
                    })
                })
            }, {
                title: "Is the mounting system included in the price?",
                content: (0, P.f)
                `${"text"}` ({
                    text: (0, n.jsx)("p", {
                        children: "With your order you will receive not only a magnet or magnets (depending on the size of your Displate) but also a protective leaf to stick it to your wall. Everything is free of charge in order to help you to mount your shiny, new Displate in the easiest way possible! \uD83D\uDE09`"
                    })
                })
            }, {
                title: "What's the size, weight and thickness of Displates?",
                content: (0, P.f)
                `${"list"}` ({
                    list: (0, n.jsx)("table", {
                        className: W().table,
                        children: (0, n.jsxs)("tbody", {
                            children: [(0, n.jsxs)("tr", {
                                children: [(0, n.jsx)("th", {
                                    children: "PRODUCT"
                                }), (0, n.jsx)("th", {
                                    children: "SIZE"
                                }), (0, n.jsx)("th", {
                                    children: "WEIGHT"
                                }), (0, n.jsx)("th", {
                                    children: "THICKNESS"
                                })]
                            }), (0, n.jsxs)("tr", {
                                children: [(0, n.jsx)("td", {
                                    children: "Medium Displate"
                                }), (0, n.jsx)("td", {
                                    children: '45cm/32cm (17.72"/12.6")'
                                }), (0, n.jsx)("td", {
                                    children: "0.70kg (1.54 pounds)"
                                }), (0, n.jsx)("td", {
                                    children: "3,5mm"
                                })]
                            }), (0, n.jsxs)("tr", {
                                children: [(0, n.jsx)("td", {
                                    children: "Large Displate"
                                }), (0, n.jsx)("td", {
                                    children: '67.5cm/48cm (26.60"/18.90")'
                                }), (0, n.jsx)("td", {
                                    children: "1.4kg (3.08 pounds)"
                                }), (0, n.jsx)("td", {
                                    children: "3,5mm"
                                })]
                            }), (0, n.jsxs)("tr", {
                                children: [(0, n.jsxs)("td", {
                                    children: ["X Large Displate", (0, n.jsx)("br", {}), "(made from 4 M size plates)"]
                                }), (0, n.jsx)("td", {
                                    children: '90cm/64cm (35.44"/25.20")'
                                }), (0, n.jsx)("td", {
                                    children: "2.8kg (6.17 pounds)"
                                }), (0, n.jsx)("td", {
                                    children: "3,5mm"
                                })]
                            }), (0, n.jsxs)("tr", {
                                children: [(0, n.jsx)("td", {
                                    children: "Lumino"
                                }), (0, n.jsx)("td", {
                                    children: '45cm/32cm (17.72"/12.6")'
                                }), (0, n.jsx)("td", {
                                    children: "0.96 kg (2.12 pounds)"
                                }), (0, n.jsx)("td", {
                                    children: "38 mm"
                                })]
                            })]
                        })
                    })
                })
            }, {
                title: "How can I place a B2B order?",
                content: (0, P.f)
                `${"text"}` ({
                    text: (0, n.jsxs)("p", {
                        children: ["Contact us by sending an email to ", (0, n.jsx)(c.$, {
                            routeInfoFn: d.ji
                        }), ". Our team will assist you with bulk orders, transport planning, packaging options, and much more!"]
                    })
                })
            }];
            var G = a(64713);
            let U = () => (0, n.jsxs)("section", {
                className: W().container,
                "data-testid": "about-contact-faq",
                children: [(0, n.jsxs)("div", {
                    className: W().heroHeading,
                    children: [(0, n.jsx)("h1", {
                        className: W().heroTitle,
                        children: J
                    }), (0, n.jsxs)("div", {
                        className: W().heroHeadingInfo,
                        children: [(0, n.jsx)("p", {
                            className: W().heroHeadingInfoText,
                            children: "Don't hold back - we're here to answer all your questions!"
                        }), (0, n.jsxs)("p", {
                            className: W().heroHeadingInfoText,
                            children: ["Browse the FAQ or", " ", (0, n.jsx)(B.N_, {
                                asChild: !0,
                                children: (0, n.jsx)(_.A, {
                                    routeInfo: (0, M.ZW)({
                                        path: "#contact-chatbot",
                                        target: "external"
                                    }),
                                    children: "talk to our friendly Chatbot"
                                })
                            }), "."]
                        })]
                    })]
                }), (0, n.jsx)("div", {
                    className: W().contactUsFaq,
                    children: (0, n.jsxs)(E.A, {
                        children: [(0, n.jsx)(O.l, {
                            data: z,
                            headerTitle: "Popular Questions"
                        }), (0, n.jsx)(B.N_, {
                            asChild: !0,
                            children: (0, n.jsx)(_.A, {
                                routeInfo: (0, G.F)(),
                                children: "See all questions in FAQ"
                            })
                        })]
                    })
                })]
            });
            var L = a(74753);
            let $ = () => {
                let {
                    track: e
                } = (0, l.z)();
                return (0, r.useEffect)(() => {
                    e({
                        pageCategory: L.i.analyticsGaName
                    })
                }, []), (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(U, {}), (0, n.jsx)(H, {}), (0, n.jsx)(D, {}), (0, n.jsx)(m, {}), (0, n.jsx)(F, {})]
                })
            };
            var K = a(16160),
                Q = a(25282);
            let J = "How Can We Help?",
                Y = ({
                    header: e
                }) => {
                    let t = K.L.defaultMeta,
                        a = {
                            webpage: {
                                h1: J,
                                url: (0, K.x)({
                                    absolute: !0
                                }).route,
                                description: t.description,
                                imageOfPage: t.coverImage
                            }
                        };
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(i.F, {
                            ldJsonParams: a,
                            pageMeta: t
                        }), (0, n.jsx)(Q.O, {
                            headerData: e,
                            children: (0, n.jsx)($, {})
                        }), (0, o.dH)(), (0, o.Xq)()]
                    })
                };
            Y.getLayout = function(e) {
                return (0, n.jsx)(s.A, {
                    abTests: e.props.abTests,
                    countryCode: e.props.countryCode,
                    featureFlags: e.props.featureFlags,
                    gitInfo: e.props.gitInfo,
                    tpid: e.props.tpid,
                    uvert: e.props.uvert,
                    children: e
                })
            };
            let Z = Y;
            var X = !0
        },
        13539: (e, t, a) => {
            "use strict";
            a.d(t, {
                l: () => o
            });
            var n = a(37876),
                i = a(36256);
            let o = ({
                data: e,
                headerTitle: t = "Frequently asked questions"
            }) => (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)("h2", {
                    className: "mb-12 text-center text-display-sm md:text-display-md uppercase font-display",
                    children: t
                }), (0, n.jsx)(i.nD, {
                    type: "multiple",
                    children: e.map(({
                        title: e,
                        content: t
                    }, a) => {
                        let o = `${e}_${a}`;
                        return (0, n.jsx)(i.As, {
                            trigger: (0, n.jsx)("span", {
                                className: "text-heading-h4",
                                children: e
                            }),
                            value: o,
                            children: t
                        }, o)
                    })
                })]
            })
        },
        22093: e => {
            e.exports = {
                container: "ContactReturnSection_container___rOqp",
                infoBoxesContainer: "ContactReturnSection_infoBoxesContainer__7qRTq",
                infoBoxSplitContainer: "ContactReturnSection_infoBoxSplitContainer___ft1j",
                infoBoxSplitContainerItem: "ContactReturnSection_infoBoxSplitContainerItem__OoJ_R",
                infoBoxTitle: "ContactReturnSection_infoBoxTitle__W2ULl",
                infoBoxSubtitle: "ContactReturnSection_infoBoxSubtitle__LkmxK",
                infoBoxText: "ContactReturnSection_infoBoxText___u5HS",
                textGap: "ContactReturnSection_textGap__z92_W",
                phoneLink: "ContactReturnSection_phoneLink__hyh_U"
            }
        },
        22537: (e, t, a) => {
            "use strict";
            a.d(t, {
                f: () => o
            });
            var n = a(37876),
                i = a(14232);
            let o = (e, ...t) => function(a) {
                let o = a || {},
                    s = [e[0]];
                return t.forEach((t, n) => {
                    let i = Number.isInteger(t) ? a[t] : o[t];
                    s.push(i, e[n + 1])
                }), (0, n.jsx)(n.Fragment, {
                    children: s.map((e, t) => (0, n.jsx)(i.Fragment, {
                        children: e
                    }, t))
                })
            }
        },
        48747: e => {
            e.exports = {
                chatBotSection: "ChatBotSection_chatBotSection__j0LE5",
                container: "ChatBotSection_container__6hraC",
                chatBotHeading: "ChatBotSection_chatBotHeading__bTxe_",
                chatBotHeadingTextContainer: "ChatBotSection_chatBotHeadingTextContainer__McBSR",
                chatBotHeadingTitle: "ChatBotSection_chatBotHeadingTitle__nKXcQ",
                chatBotHeadingText: "ChatBotSection_chatBotHeadingText__igUnd",
                chatBotHeadingImage: "ChatBotSection_chatBotHeadingImage__uewuA",
                chatBotHeaderAdditionalText: "ChatBotSection_chatBotHeaderAdditionalText__BK3fG",
                chatBotHeaderConsentText: "ChatBotSection_chatBotHeaderConsentText__1Ww5X",
                tilesMobileContainer: "ChatBotSection_tilesMobileContainer__nHfSV",
                tilesSlider: "ChatBotSection_tilesSlider__PRF8Z",
                paginationBullet: "ChatBotSection_paginationBullet__ycTwJ",
                paginationBulletActive: "ChatBotSection_paginationBulletActive__qAHHK",
                tilesDesktopContainer: "ChatBotSection_tilesDesktopContainer__qRr8S"
            }
        },
        53499: (e, t, a) => {
            "use strict";
            a.d(t, {
                EX: () => n,
                Kk: () => r,
                RD: () => l,
                Y: () => i,
                as: () => o,
                kY: () => s
            });
            let n = 640,
                i = 768,
                o = 1024,
                s = 1280,
                r = 1440,
                l = 1920
        },
        59140: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => s
            });
            var n = a(37876),
                i = a(69241),
                o = a(36256);
            let s = ({
                children: e,
                testId: t,
                className: a
            }) => (0, n.jsx)(o.xA, {
                asChild: !0,
                children: (0, n.jsx)("section", {
                    className: (0, i.A)("[&_ol]:list-inside [&_ol]:list-decimal", a),
                    "data-testid": t,
                    children: (0, n.jsx)("div", {
                        className: "col-span-full xl:col-start-3 xl:col-span-8",
                        children: e
                    })
                })
            })
        },
        73357: e => {
            e.exports = {
                container: "ChatBotTile_container___x_82",
                tileTitle: "ChatBotTile_tileTitle__BOJnw",
                titleText: "ChatBotTile_titleText__zJFVB",
                infoWrapper: "ChatBotTile_infoWrapper__SlcQb",
                button: "ChatBotTile_button___YQ37"
            }
        },
        74773: (e, t, a) => {
            "use strict";
            a.d(t, {
                $: () => s
            });
            var n = a(37876),
                i = a(27555),
                o = a(36256);
            let s = ({
                className: e,
                routeInfoFn: t,
                variant: a = "primary"
            }) => {
                let s = t(),
                    r = s.route.replace("mailto:", "");
                return (0, n.jsx)(o.N_, {
                    asChild: !0,
                    className: e,
                    variant: a,
                    children: (0, n.jsx)(i.A, {
                        routeInfo: s,
                        children: r
                    })
                })
            }
        },
        75673: e => {
            e.exports = {
                container: "ContactSection_container__nnEdb",
                heading: "ContactSection_heading__TZm0a",
                infoContainer: "ContactSection_infoContainer__cO3n2",
                infoText: "ContactSection_infoText__FP__Z"
            }
        },
        77328: (e, t, a) => {
            e.exports = a(88022)
        },
        86752: (e, t, a) => {
            "use strict";
            a.d(t, {
                M: () => o
            });
            var n = a(37876),
                i = a(46243);
            let o = ({
                items: e,
                classes: t
            }) => 0 === e.length ? null : (0, n.jsx)("ul", {
                className: t ? .list,
                "data-testid": "checkmark-list",
                children: e.map((e, a) => (0, n.jsxs)("li", {
                    className: "flex items-center gap-3 first:mt-0 not-first:mt-2.5 text-body-md",
                    children: [(0, n.jsx)("div", {
                        className: `flex size-6 shrink-0 items-center justify-center rounded-full bg-background-information text-icon-brand ${t?.icon??""}`,
                        children: (0, n.jsx)(i.A, {
                            className: "size-4",
                            "data-testid": "checkmark-icon"
                        })
                    }), e]
                }, a))
            })
        },
        93293: e => {
            e.exports = {
                container: "HeroFaqSection_container__P8rvi",
                heroHeading: "HeroFaqSection_heroHeading__BBdq_",
                heroHeadingInfo: "HeroFaqSection_heroHeadingInfo__8j9Vo",
                heroHeadingInfoText: "HeroFaqSection_heroHeadingInfoText__F6j3v",
                heroTitle: "HeroFaqSection_heroTitle__Ncb5e",
                table: "HeroFaqSection_table__6DK_f",
                contactUsFaq: "HeroFaqSection_contactUsFaq__Y70J8"
            }
        },
        96037: (e, t, a) => {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/about-contact", function() {
                return a(4615)
            }])
        }
    },
    e => {
        e.O(0, [4024, 2183, 5706, 9658, 3915, 5657, 6633, 636, 6593, 8792], () => e(e.s = 96037)), _N_E = e.O()
    }
]);
//#